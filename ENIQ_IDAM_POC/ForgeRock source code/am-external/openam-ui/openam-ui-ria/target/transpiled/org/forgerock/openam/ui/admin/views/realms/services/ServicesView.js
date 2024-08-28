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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/admin/services/realm/ServicesService", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/openam/ui/common/util/Promise"], function ($, _, Messages, AbstractView, ServicesService, Router, FormHelper, Promise) {
    function getServiceIdFromElement(element) {
        return $(element).closest("tr").data("serviceId");
    }
    function getServices(realmPath) {
        return ServicesService.instance.getAll(realmPath);
    }
    function getCreatables(realmPath) {
        return ServicesService.type.getCreatables(realmPath);
    }
    function deleteServices(ids) {
        var _this = this;

        FormHelper.showConfirmationBeforeDeleting({
            message: $.t("console.services.list.confirmDeleteSelected", { count: ids.length })
        }, function () {
            ServicesService.instance.remove(_this.data.realmPath, ids).then(function () {
                _this.rerender();
            }, function (response) {
                Messages.addMessage({ type: Messages.TYPE_DANGER, response: response });
                _this.rerender();
            });
        });
    }
    var HEADER_ACTIONS = [{ actionPartial: "util/_HelpLink", helpLink: "backstage.config.services" }];
    var ServicesView = AbstractView.extend({
        template: "templates/admin/views/realms/services/ServicesTemplate.html",
        partials: ["partials/util/_HelpLink.html"],
        events: {
            "change [data-select-service]": "serviceSelected",
            "click [data-delete-service]": "onDeleteSingle",
            "click [data-delete-services]": "onDeleteMultiple",
            "click [data-add-service]": "onAddService"
        },
        serviceSelected: function serviceSelected(event) {
            var anyServicesSelected = this.$el.find("input[type=checkbox]").is(":checked");
            var row = $(event.currentTarget).closest("tr");

            row.toggleClass("selected");
            this.$el.find("[data-delete-services]").prop("disabled", !anyServicesSelected);
        },
        onAddService: function onAddService(event) {
            event.preventDefault();
            Router.routeTo(Router.configuration.routes.realmsServiceNew, {
                args: [encodeURIComponent(this.data.realmPath)],
                trigger: true
            });
        },
        onDeleteSingle: function onDeleteSingle(event) {
            event.preventDefault();
            var id = getServiceIdFromElement(event.currentTarget);
            _.bind(deleteServices, this)([id]);
        },
        onDeleteMultiple: function onDeleteMultiple(event) {
            event.preventDefault();

            var ids = _(this.$el.find("input[type=checkbox]:checked")).toArray().map(getServiceIdFromElement).value();

            _.bind(deleteServices, this)(ids);
        },
        validateAddButton: function validateAddButton(creatables) {
            if (!_.isEmpty(creatables)) {
                return;
            }
            this.$el.find("[data-add-service]").addClass("disabled").popover({
                trigger: "hover",
                container: "body",
                placement: "top",
                content: $.t("console.services.edit.unavaliable")
            });
        },
        render: function render(args, callback) {
            var _this2 = this;

            this.data.args = args;
            this.data.realmPath = args[0];
            this.data.headerActions = HEADER_ACTIONS;

            Promise.all([getServices(this.data.realmPath), getCreatables(this.data.realmPath)]).then(function (data) {
                var services = data[0];
                var creatables = data[1];

                _this2.data.services = services;
                _this2.parentRender(function () {
                    _this2.validateAddButton(creatables);
                    if (callback) {
                        callback();
                    }
                });
            });
        },
        rerender: function rerender() {
            this.render(this.data.args);
        }
    });

    return ServicesView;
});
