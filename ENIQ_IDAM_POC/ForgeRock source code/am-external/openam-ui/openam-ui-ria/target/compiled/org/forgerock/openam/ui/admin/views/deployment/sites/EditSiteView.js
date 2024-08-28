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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/admin/services/global/SitesService", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/openam/ui/admin/views/common/Backlink",

// jquery dependencies
"bootstrap-tabdrop"], function ($, _, Messages, AbstractView, EventManager, Router, Constants, SitesService, FlatJSONSchemaView, FormHelper, Backlink) {
    // eslint-disable-line padded-blocks

    function toggleSave(el, enable) {
        el.find("[data-save]").prop("disabled", !enable);
    }

    var EditSitesView = AbstractView.extend({
        template: "templates/admin/views/deployment/sites/EditSiteTemplate.html",
        events: {
            "click [data-save]": "onSave",
            "click [data-delete]": "onDelete"
        },

        render: function render(args) {
            var _this = this;

            this.data.id = args[0];
            SitesService.sites.get(this.data.id).then(function (data) {
                _this.data.name = data.values.raw._id;
                _this.data.etag = data.values.raw.etag;
                _this.data.headerActions = [{
                    actionPartial: "form/_Button", data: "delete", title: "common.form.delete", icon: "fa-times"
                }];

                _this.parentRender(function () {
                    new Backlink().render();
                    if (_this.jsonSchemaView) {
                        _this.jsonSchemaView.remove();
                    }
                    _this.jsonSchemaView = new FlatJSONSchemaView({
                        schema: data.schema,
                        values: data.values,
                        onRendered: function onRendered() {
                            return toggleSave(_this.$el, true);
                        }
                    });
                    $(_this.jsonSchemaView.render().el).appendTo(_this.$el.find("[data-json-form]"));
                });
            });
        },
        onSave: function onSave() {
            SitesService.sites.update(this.data.id, this.jsonSchemaView.getData(), this.data.etag).then(function () {
                return EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
            }, function (response) {
                return Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
            });
        },
        onDelete: function onDelete(event) {
            var _this2 = this;

            event.preventDefault();

            FormHelper.showConfirmationBeforeDeleting({
                message: $.t("console.common.confirmDeleteText", { type: $.t("console.sites.common.confirmType") })
            }, function () {
                SitesService.sites.remove(_this2.data.id, _this2.data.etag).then(function () {
                    return Router.routeTo(Router.configuration.routes.listSites, { args: [], trigger: true });
                }, function (response) {
                    return Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
                });
            });
        }
    });

    return new EditSitesView();
});
