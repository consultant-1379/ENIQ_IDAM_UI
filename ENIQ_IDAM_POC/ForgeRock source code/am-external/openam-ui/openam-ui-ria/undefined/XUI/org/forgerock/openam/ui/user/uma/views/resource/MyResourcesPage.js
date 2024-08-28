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
 * Copyright 2015-2017 ForgeRock AS.
 */

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/BootstrapDialog", "org/forgerock/openam/ui/user/uma/views/resource/BasePage", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/openam/ui/user/uma/services/UMAService"], function ($, _, BootstrapDialog, BasePage, Configuration, Constants, EventManager, UMAService) {
    var MyResourcesPage = BasePage.extend({
        template: "templates/user/uma/views/resource/MyResourcesPageTemplate.html",
        partials: ["templates/user/uma/views/resource/_UnshareAllResourcesButton.html"],
        events: {
            "click button#unshareAllResources": "unshareAllResources"
        },
        recordsPresent: function recordsPresent() {
            this.$el.find("button#unshareAllResources").prop("disabled", false);
        },
        render: function render(args, callback) {
            this.data.labelId = args[1];
            this.data.topLevel = args[1] === "";
            this.renderResources(callback);
        },
        renderResources: function renderResources(callback) {
            var _this = this;

            if (this.data.topLevel) {
                this.renderGrid(this.createSetCollection(), this.createColumns("myresources/all"), callback);
            } else {
                // Resolve label ID to name
                UMAService.labels.get(this.data.labelId).then(function (data) {
                    var columns = _this.createColumns("myresources/" + encodeURIComponent(data.id));
                    // Splice out the "Hosts" column
                    columns.splice(1, 1);

                    _this.data.labelName = data.name;
                    _this.renderGrid(_this.createLabelCollection(_this.data.labelId), columns, callback);
                });
            }
        },
        unshareAllResources: function unshareAllResources() {
            var self = this,
                buttons = [{
                label: $.t("common.form.cancel"),
                action: function action(dialog) {
                    dialog.close();
                }
            }, {
                id: "ok",
                label: $.t("common.form.ok"),
                cssClass: "btn-primary btn-danger",
                action: function action(dialog) {
                    dialog.enableButtons(false);
                    dialog.getButton("ok").text($.t("common.form.working"));

                    UMAService.unshareAllResources().then(function () {
                        self.renderResources(function () {
                            _.forEach(self.data.collection.models, function (model) {
                                model.toBeCreated = true;
                            });
                            EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "unshareAllResourcesSuccess");
                            dialog.close();
                        });
                    }, function () {
                        EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "unshareAllResourcesFail");
                        dialog.enableButtons(true);
                        dialog.getButton("ok").text($.t("common.form.ok"));
                    });
                }
            }];

            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_DANGER,
                title: $.t("uma.resources.myresources.unshareAllResources.dialog.title"),
                message: $.t("uma.resources.myresources.unshareAllResources.dialog.message"),
                closable: false,
                buttons: buttons
            });
        }
    });

    return MyResourcesPage;
});
//# sourceMappingURL=MyResourcesPage.js.map
