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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/openam/ui/admin/services/global/SitesService", "org/forgerock/openam/ui/common/components/TemplateBasedView", "org/forgerock/openam/ui/admin/views/common/ToggleCardListView"], function ($, _, AbstractView, showConfirmationBeforeAction, Messages, SitesService, TemplateBasedView, ToggleCardListView) {
    // eslint-disable-line padded-blocks

    showConfirmationBeforeAction = showConfirmationBeforeAction.default;

    var ListSitesView = AbstractView.extend({
        template: "templates/admin/views/deployment/sites/ListSitesTemplate.html",
        events: {
            "click [data-delete-item]": "onDelete"
        },
        partials: ["partials/util/_ButtonLink.html", "templates/admin/views/deployment/sites/_SiteCard.html"],

        onDelete: function onDelete(event) {
            var _this = this;

            event.preventDefault();
            var id = $(event.currentTarget).data().deleteItem;

            showConfirmationBeforeAction({
                message: $.t("console.common.confirmDeleteText", {
                    type: $.t("console.sites.common.confirmType")
                })
            }, function () {
                SitesService.sites.remove(id).then(function () {
                    return _this.render();
                }, function (response) {
                    return Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
                });
            });
        },
        renderToggleView: function renderToggleView(data) {
            var _this2 = this;

            var tableData = {
                "headers": [$.t("console.sites.list.table.0"), $.t("console.sites.list.table.1"), $.t("console.sites.list.table.2"), $.t("console.sites.list.table.3")],
                "items": data
            };

            this.toggleView = new ToggleCardListView({
                el: "#toggleCardList",
                activeView: this.toggleView ? this.toggleView.getActiveView() : ToggleCardListView.DEFAULT_VIEW,
                button: {
                    href: "#deployment/sites/new",
                    icon: "fa-plus",
                    title: $.t("console.sites.list.new"),
                    btnClass: "btn-primary"
                }
            });

            this.toggleView.render(function (toggleView) {
                new TemplateBasedView({
                    data: tableData,
                    el: toggleView.getElementA(),
                    template: "templates/admin/views/deployment/sites/SitesCardsTemplate.html",
                    callback: function callback() {
                        _this2.$el.find('[data-toggle="popover"]').popover();
                    }
                }).render();
                new TemplateBasedView({
                    data: tableData,
                    el: toggleView.getElementB(),
                    template: "templates/admin/views/deployment/sites/SitesTableTemplate.html"
                }).render();
            });
        },
        showCallToAction: function showCallToAction() {
            this.$el.find(".call-to-action-block").removeClass("hidden");
        },
        render: function render(args, callback) {
            var _this3 = this;

            SitesService.sites.getAll().then(function (data) {
                _this3.parentRender(function () {
                    if (_.isEmpty(data)) {
                        _this3.showCallToAction();
                    } else {
                        _this3.renderToggleView(data);
                    }

                    if (callback) {
                        callback();
                    }
                });
            }, function (response) {
                Messages.addMessage({
                    type: Messages.TYPE_DANGER,
                    response: response
                });
            });
        }
    });

    return new ListSitesView();
});
//# sourceMappingURL=ListSitesView.js.map
