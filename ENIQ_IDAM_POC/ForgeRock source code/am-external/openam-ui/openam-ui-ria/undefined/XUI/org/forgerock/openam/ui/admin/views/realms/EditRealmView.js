"use strict";

/*
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2016-2017 ForgeRock AS.
 */

define(["i18next", "jquery", "lodash", "handlebars", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/admin/services/global/RealmsService", "org/forgerock/openam/ui/admin/services/global/AuthenticationService", "org/forgerock/openam/ui/admin/services/realm/AuthenticationService", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/openam/ui/admin/views/common/Backlink", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/openam/ui/admin/views/realms/updateDefaultServerAdvancedFqdnMap", "bootstrap-tabdrop", "popoverclickaway", "selectize"], function (i18next, $, _, Handlebars, Messages, AbstractView, EventManager, Router, Constants, RealmsService, GlobalAuthenticationService, RealmAuthenticationService, FormHelper, Backlink, JSONSchema, JSONValues, FlatJSONSchemaView, Promise, updateDefaultServerAdvancedFqdnMap) {
    // eslint-disable-line padded-blocks

    updateDefaultServerAdvancedFqdnMap = updateDefaultServerAdvancedFqdnMap.default;

    function setAutofocus() {
        $("input[type=\"text\"]:not(:disabled):first").prop("autofocus", true);
    }

    function checkPattern(string) {
        // "Characters $, &, +, \, ", comma, /, :, ;, =, ?, @, space, #, %, <, > are not allowed in a realm's name."
        var specialChars = " @#$%&+?:;,/=\\<>\"";
        for (var i = 0; i < specialChars.length; i++) {
            if (string.indexOf(specialChars[i]) > -1) {
                return true;
            }
        }
        return false;
    }

    // We are taking a copy for the aliases property from which we are creating dns and realm alias propertie.
    function separateRealmAndDnsAliasProperties(schemaProperties) {
        var copySchemaProperty = function copySchemaProperty(original, title, description) {
            return _.assign({}, original, {
                "_id": original._id + _.uniqueId(),
                "title": i18next.t(title),
                "description": i18next.t(description)
            });
        };

        schemaProperties.dnsAliases = copySchemaProperty(schemaProperties.aliases, "console.realms.edit.dnsAliases.title", "console.realms.edit.dnsAliases.description");

        schemaProperties.realmAliases = copySchemaProperty(schemaProperties.aliases, "console.realms.edit.realmAliases.title", "console.realms.edit.realmAliases.description");

        return schemaProperties;
    }

    // The required properties need to be overridden to stop the jsoneditor validation on the required aliases field.
    function replaceRequiredAliasWithRealmAndDns(required) {
        var index = _.indexOf(required, "aliases");
        if (index > 0) {
            required.splice(index, 1, "realmAliases", "dnsAliases");
        }
        return required;
    }

    function getDnsAliases(aliases) {
        return _.filter(aliases, function (item) {
            return item.indexOf(".") > -1;
        });
    }

    function getRealmAliases(aliases) {
        return _.filter(aliases, function (item) {
            return item.indexOf(".") === -1;
        });
    }

    function isTopLevelRealm(name) {
        return name === "/";
    }

    function validateRealmName() {
        var valid = false;
        var realmName = $("input[name=\"root[name]\"]").val();
        var alert = "";

        if (realmName.length > 0) {
            if (checkPattern(realmName)) {
                alert = Handlebars.compile("{{> alerts/_Alert type='warning' " + "text='console.realms.realmNameValidationError'}}");
            } else {
                valid = true;
            }
        }

        $("[data-realm-alert]").html(alert);
        return valid;
    }

    var EditRealmView = AbstractView.extend({
        template: "templates/admin/views/realms/EditRealmTemplate.html",
        partials: ["partials/alerts/_Alert.html"],
        events: {
            "click [data-save]": "handleSave",
            "click [data-cancel]": "returnBack",
            "click [data-delete]": "onDeleteClick",
            "keyup input[name=\"root[name]\"]": "onDataChange",
            "change input[name=\"root[name]\"]": "onDataChange"
        },

        render: function render(args) {
            var realmPromise = void 0;
            var authenticationPromise = void 0;

            this.realmPath = args[0];

            if (args[0]) {
                this.data.realmPath = args[0];
                this.data.realmName = args[0] === "/" ? $.t("console.common.topLevelRealm") : args[0].split("/").pop();
                this.data.newEntity = false;
                this.data.headerActions = [{
                    actionPartial: "form/_Button",
                    data: "delete",
                    title: "common.form.delete",
                    icon: "fa-times",
                    disabled: !this.canRealmBeDeleted(this.data.realmPath)
                }];
            } else {
                this.data.newEntity = true;
                this.data.headerActions = null;
            }

            if (this.data.newEntity) {
                realmPromise = RealmsService.realms.schema();
                authenticationPromise = GlobalAuthenticationService.authentication.schema();
            } else {
                realmPromise = RealmsService.realms.get(this.data.realmPath);
                authenticationPromise = RealmAuthenticationService.authentication.get(this.data.realmPath);
            }

            this.parentRender(function () {
                var _this = this;

                Promise.all([realmPromise, RealmsService.realms.all(), authenticationPromise]).then(function (response) {
                    var data = response[0];
                    var allRealmPaths = _.map(response[1][0].result, "path");
                    if (_this.data.newEntity) {
                        if (allRealmPaths.length > 1) {
                            // Only create dropdowns if the field is editable
                            data.schema.properties.parentPath["enum"] = allRealmPaths;
                            data.schema.properties.parentPath.options = { "enum_titles": allRealmPaths };
                            data.schema.properties.name.pattern = "^[^ @#$%&+?:;,/=\\<>\"]+$";
                        } else {
                            // No need to create dropdown if there is only one option
                            data.schema.properties.parentPath.readonly = true;
                        }
                    } else {
                        // Once created, it should not be possible to edit a realm's name or who it's parent is.
                        data.schema.properties.name.readonly = true;
                        data.schema.properties.parentPath.readonly = true;
                        if (isTopLevelRealm(data.values.name)) {
                            data.schema.properties.active.readonly = true;
                        }

                        _this.toggleSubmitButton(true);
                    }

                    data.schema.required = replaceRequiredAliasWithRealmAndDns(data.schema.required);
                    data.schema.properties = separateRealmAndDnsAliasProperties(data.schema.properties);
                    data.values.dnsAliases = getDnsAliases(data.values.aliases);
                    data.values.realmAliases = getRealmAliases(data.values.aliases);
                    _this.originalDnsAliases = data.values.dnsAliases;

                    var generalPropertyPath = _this.data.newEntity ? "schema.properties.defaults.properties.general" : "schema.properties.general";

                    var schema = new JSONSchema(data.schema).addDefaultProperties(data.schema.required);

                    _this.subviews = [new FlatJSONSchemaView({ schema: schema, values: new JSONValues(data.values) }), new FlatJSONSchemaView({
                        schema: new JSONSchema(_.get(response[2], generalPropertyPath)).addDefaultProperties(["statelessSessionsEnabled"]),
                        values: new JSONValues(_.get(response[2], "values.general", {}))
                    })];

                    _this.subviews[0].render().$el.appendTo(_this.$el.find("[data-realm-form]"));
                    // Turn off inline error messages as we display our own help on errors on this page
                    _this.subviews[0].subview.jsonEditor.options["show_errors"] = "never";

                    _this.subviews[1].render().$el.appendTo(_this.$el.find("[data-realm-stateless-session-form]"));

                    new Backlink().render(0);
                    setAutofocus();
                }, function (response) {
                    Messages.addMessage({ type: Messages.TYPE_DANGER, response: response });
                });
            });
        },
        returnBack: function returnBack() {
            if (this.data.newEntity) {
                Router.routeTo(Router.configuration.routes.realms, { args: [], trigger: true });
            } else {
                Router.routeTo(Router.configuration.routes.realmDefault, {
                    args: [encodeURIComponent(this.data.realmPath)],
                    trigger: true
                });
            }
        },
        onDataChange: function onDataChange() {
            this.toggleSubmitButton(validateRealmName());
        },
        handleSave: function handleSave(event) {
            var _this2 = this;

            event.preventDefault();
            this.toggleSubmitButton(false);

            var displayError = function displayError(response) {
                Messages.addMessage({ type: Messages.TYPE_DANGER, response: response });
            };

            var formValues = this.subviews[0].getData();
            var values = _.cloneDeep(formValues);

            values.aliases = _.union(values.realmAliases, values.dnsAliases);
            delete values.realmAliases;
            delete values.dnsAliases;

            var statelessSessionsValues = this.subviews[1].getData();
            var savePromise = this.data.newEntity ? RealmsService.realms.create(values) : RealmsService.realms.update(values);

            savePromise.then(function (realm) {
                var isRootRealm = realm.name === "/";
                var hasRootRealmAsParent = realm.parentPath === "/";
                var realmPath = void 0;

                if (isRootRealm) {
                    realmPath = "/";
                } else if (hasRootRealmAsParent) {
                    realmPath = "/" + realm.name;
                } else {
                    realmPath = realm.parentPath + "/" + realm.name;
                }

                var fqdnPromise = updateDefaultServerAdvancedFqdnMap(realm, formValues.dnsAliases, _this2.originalDnsAliases).then(function () {
                    _this2.originalDnsAliases = getDnsAliases(realm.aliases);
                }, function () {
                    Messages.addMessage({ type: Messages.TYPE_DANGER, message: $.t("console.realms.edit.errors.fqdnMap") });
                });

                var statelessPromise = RealmAuthenticationService.authentication.update(realmPath, statelessSessionsValues).fail(function () {
                    Messages.addMessage({
                        type: Messages.TYPE_DANGER,
                        message: $.t("console.realms.edit.errors.statelessSessions")
                    });
                });

                var onComplete = function onComplete() {
                    if (_this2.data.newEntity) {
                        _this2.data.newEntity = false;
                        Router.routeTo(Router.configuration.routes.realmDefault, {
                            args: [encodeURIComponent(realmPath)],
                            trigger: true
                        });
                    } else {
                        EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
                    }
                };

                Promise.all([fqdnPromise, statelessPromise]).then(onComplete, onComplete);
            }, displayError).always(function () {
                _this2.toggleSubmitButton(true);
            });
        },
        onDeleteClick: function onDeleteClick(event) {
            event.preventDefault();
            FormHelper.showConfirmationBeforeDeleting({ type: $.t("console.realms.edit.realm") }, _.bind(this.deleteRealm, this));
        },
        deleteRealm: function deleteRealm() {
            var _this3 = this;

            var onDeleteRealmComplete = function onDeleteRealmComplete() {
                Router.routeTo(Router.configuration.routes.realms, { args: [], trigger: true });
                EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
            };

            var onUpdateFqdnMapFailure = function onUpdateFqdnMapFailure() {
                Messages.addMessage({ type: Messages.TYPE_DANGER, message: $.t("console.realms.edit.errors.fqdnMap") });
            };

            RealmsService.realms.remove(this.realmPath).then(function () {
                updateDefaultServerAdvancedFqdnMap(_this3.realmPath, [], _this3.originalDnsAliases).then(onDeleteRealmComplete, function () {
                    onUpdateFqdnMapFailure();
                    onDeleteRealmComplete();
                });
            }, function (response) {
                if (response && response.status === 409) {
                    Messages.addMessage({
                        message: $.t("console.realms.parentRealmCannotDeleted"),
                        type: Messages.TYPE_DANGER
                    });
                } else {
                    Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
                }
            });
        },
        canRealmBeDeleted: function canRealmBeDeleted(realmPath) {
            return realmPath !== "/";
        },
        toggleSubmitButton: function toggleSubmitButton(flag) {
            this.$el.find("[data-save]").prop("disabled", !flag);
        }
    });

    return new EditRealmView();
});
//# sourceMappingURL=EditRealmView.js.map
