"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/**
 * @module org/forgerock/openam/ui/admin/views/common/schema/EditSchemaComponent
 */
define(["jquery", "lodash", "backbone", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/main/ReactAdapterView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/commons/ui/common/util/UIUtils", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/openam/ui/admin/views/common/TabSearch", "org/forgerock/openam/ui/admin/views/common/schema/SubSchemaListComponent", "org/forgerock/openam/ui/admin/views/configuration/global/scripting/ScriptsList", "org/forgerock/openam/ui/common/components/PanelComponent", "org/forgerock/openam/ui/common/components/PartialBasedView", "org/forgerock/openam/ui/common/components/TabComponent", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView"], function ($, _, Backbone, Messages, AbstractView, EventManager, ReactAdapterView, Router, Constants, UIUtils, FormHelper, TabSearch, SubSchemaListComponent, ScriptsList, PanelComponent, PartialBasedView, TabComponent, JSONSchema, JSONValues, Promise, FlatJSONSchemaView) {
    // eslint-disable-line padded-blocks

    ScriptsList = ScriptsList.default;

    var PSEUDO_TAB = { id: _.uniqueId("pseudo_tab_"), title: $.t("console.common.configuration") };
    var SUBSCHEMA_TAB = { id: "subschema", title: $.t("console.common.secondaryConfigurations") };
    var DEFAULT_SCRIPTS_TAB = { id: "defaultScripts", title: "Default Scripts" };

    var isScriptingSubSchemaView = function isScriptingSubSchemaView(subSchemaType, subSubSchemaType) {
        return subSchemaType === "contexts" && _.isEmpty(subSubSchemaType);
    };

    var createTabs = function createTabs(schema, subSchemaTypes, isScriptingSubSchemaView) {
        var tabs = [];
        var hasSubSchema = subSchemaTypes && subSchemaTypes.length > 0;
        var schemaIsCollection = schema.isCollection();

        if (schemaIsCollection) {
            tabs = tabs.concat(_(schema.raw.properties).map(function (value, key) {
                return { id: key, order: value.propertyOrder, title: value.title };
            }).sortBy("order").value());
        } else if (hasSubSchema) {
            tabs.push(PSEUDO_TAB);
        }

        if (isScriptingSubSchemaView) {
            tabs.push(DEFAULT_SCRIPTS_TAB);
        }

        if (hasSubSchema) {
            tabs.push(SUBSCHEMA_TAB);
        }

        return tabs;
    };

    return Backbone.View.extend({
        partials: ["partials/form/_JSONSchemaFooter.html"],
        events: {
            "click [data-save]": "onSave",
            "click [data-delete]": "onDelete"
        },

        initialize: function initialize(_ref) {
            var data = _ref.data,
                listRoute = _ref.listRoute,
                listRouteArgs = _ref.listRouteArgs,
                template = _ref.template,
                subSchemaTemplate = _ref.subSchemaTemplate,
                getInstance = _ref.getInstance,
                updateInstance = _ref.updateInstance,
                deleteInstance = _ref.deleteInstance,
                getSubSchemaTypes = _ref.getSubSchemaTypes,
                getSubSchemaCreatableTypes = _ref.getSubSchemaCreatableTypes,
                getSubSchemaInstances = _ref.getSubSchemaInstances,
                deleteSubSchemaInstance = _ref.deleteSubSchemaInstance;

            this.data = data;
            this.listRoute = listRoute;
            this.listRouteArgs = listRouteArgs;
            this.template = template;
            this.subSchemaTemplate = subSchemaTemplate;

            this.getInstance = getInstance;
            this.updateInstance = updateInstance;
            this.deleteInstance = deleteInstance;

            this.getSubSchemaTypes = getSubSchemaTypes;
            this.getSubSchemaCreatableTypes = getSubSchemaCreatableTypes;
            this.getSubSchemaInstances = getSubSchemaInstances;
            this.deleteSubSchemaInstance = deleteSubSchemaInstance;
        },
        createTabComponent: function createTabComponent(tabs) {
            var _this = this;

            return new TabComponent({
                tabs: tabs,
                createBody: function createBody(id) {
                    if (id === SUBSCHEMA_TAB.id) {
                        return new SubSchemaListComponent({
                            data: _this.data,
                            subSchemaTemplate: _this.subSchemaTemplate,
                            getSubSchemaCreatableTypes: _this.getSubSchemaCreatableTypes,
                            getSubSchemaInstances: _this.getSubSchemaInstances,
                            deleteSubSchemaInstance: _this.deleteSubSchemaInstance
                        });
                    } else if (id === PSEUDO_TAB.id) {
                        return new FlatJSONSchemaView({
                            schema: _this.data.schema,
                            values: _this.data.values
                        });
                    } else if (id === DEFAULT_SCRIPTS_TAB.id) {
                        return new ReactAdapterView({
                            reactView: ScriptsList,
                            reactProps: { subSchemaType: _this.data.subSchemaInstanceId },
                            needsBaseTemplate: false
                        });
                    } else {
                        return new FlatJSONSchemaView({
                            schema: new JSONSchema(_this.data.schema.raw.properties[id]),
                            values: new JSONValues(_this.data.values.raw[id])
                        });
                    }
                },
                createFooter: function createFooter(id) {
                    if (id !== SUBSCHEMA_TAB.id && id !== DEFAULT_SCRIPTS_TAB.id) {
                        return new PartialBasedView({ partial: "form/_JSONSchemaFooter" });
                    }
                }
            });
        },
        getJSONSchemaView: function getJSONSchemaView() {
            return this.subview instanceof TabComponent ? this.subview.getBody() : this.subview;
        },
        render: function render() {
            var _this2 = this;

            var serviceCalls = _([this.getInstance, this.getSubSchemaTypes]).compact().map(function (serviceCall) {
                return serviceCall();
            }).value();

            Promise.all(serviceCalls).then(function (response) {
                var instance = response[0];
                var subSchema = response[1];

                _this2.data.schema = instance.schema;
                _this2.data.values = instance.values.revertFalseCollections(instance.schema);

                _this2.data.name = instance.name;

                var tabs = createTabs(instance.schema, subSchema, isScriptingSubSchemaView(_this2.data.subSchemaType, _this2.data.subSubSchemaType));
                var hasTabs = !_.isEmpty(tabs);

                _this2.data.hasTabs = hasTabs;

                UIUtils.fillTemplateWithData(_this2.template, _this2.data, function (html) {
                    _this2.$el.html(html);

                    if (hasTabs) {
                        _this2.subview = _this2.createTabComponent(tabs);
                        if (_this2.data.schema.isCollection()) {
                            var options = {
                                properties: _this2.data.schema.raw.properties,
                                onChange: function onChange(tabId, value) {
                                    _this2.subview.setTabId(tabId);
                                    _this2.$el.find("[data-schemapath=\"root." + value + "\"]").find("input").focus();
                                }
                            };
                            _this2.$el.find("[data-tab-search]").append(new TabSearch(options).render().$el);
                        }
                    } else {
                        _this2.subview = new FlatJSONSchemaView({
                            schema: instance.schema,
                            values: instance.values
                        });
                    }

                    _this2.subview.setElement(_this2.$el.find("[data-json-form]"));
                    _this2.subview.render();
                });
            });

            return this;
        },
        updateValues: function updateValues() {
            if (this.data.schema.isCollection()) {
                this.data.values = this.data.values.extend(_defineProperty({}, this.subview.getTabId(), this.getJSONSchemaView().getData())).revertFalseCollections(this.data.schema);
            } else {
                this.data.values = new JSONValues(this.getJSONSchemaView().getData());
            }
        },
        onSave: function onSave() {
            if (!this.getJSONSchemaView().isValid()) {
                Messages.addMessage({
                    message: $.t("common.form.validation.errorsNotSaved"),
                    type: Messages.TYPE_DANGER
                });
                return;
            }
            this.updateValues();
            var valuesWithoutNullPasswords = this.data.values.removeNullPasswords(this.data.schema);
            this.updateInstance(valuesWithoutNullPasswords.toJSON()).then(function () {
                EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
            }, function (response) {
                Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
            });
        },
        onDelete: function onDelete(e) {
            var _this3 = this;

            e.preventDefault();

            FormHelper.showConfirmationBeforeDeleting({
                message: $.t("console.common.confirmDeleteSelected")
            }, function () {
                _this3.deleteInstance().then(function () {
                    EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
                    Router.routeTo(_this3.listRoute, { args: _this3.listRouteArgs, trigger: true });
                }, function (model, response) {
                    Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
                });
            });
        }
    });
});
