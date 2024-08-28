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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/util/UIUtils"], function ($, _, AbstractView, UIUtils) {
    var PolicyActionsView = AbstractView.extend({
        element: "#actions",
        template: "templates/admin/views/realms/authorization/policies/PolicyActionsTemplate.html",
        noBaseTemplate: true,
        events: {
            "click [data-toggle-item]": "changePermission",
            "click [data-action-name]": "selectAction",
            "click button[data-delete]": "deleteItem",
            "keyup button[data-delete]": "deleteItem"
        },

        render: function render(data, callback) {
            _.extend(this.data, data);

            var availableActions = _.cloneDeep(data.options.availableActions);
            var selectedActions = [];

            _.each(data.entity.actionValues, function (value, key) {
                availableActions = _.without(availableActions, _.find(availableActions, { action: key }));
                selectedActions.push({ action: key, value: value });
            });

            this.data.availableActions = availableActions;
            this.data.selectedActions = selectedActions;

            this.parentRender(function () {
                var d1 = $.Deferred();
                var d2 = $.Deferred();

                this.renderAvailableActions(function () {
                    return d1.resolve();
                });
                this.renderSelectedActions(function () {
                    return d2.resolve();
                });

                $.when(d1, d2).done(function () {
                    if (callback) {
                        callback();
                    }
                });
            });
        },
        renderAvailableActions: function renderAvailableActions(callback) {
            var _this = this;

            UIUtils.fillTemplateWithData("templates/admin/views/realms/authorization/policies/PolicyAvailableActionsTemplate.html", { "items": _.sortBy(this.data.availableActions, "action") }, function (tpl) {
                _this.$el.find("#availableActions").html(tpl);
                if (callback) {
                    callback();
                }
            });
        },
        renderSelectedActions: function renderSelectedActions(callback) {
            var _this2 = this;

            UIUtils.fillTemplateWithData("templates/admin/views/realms/authorization/common/ActionsTableTemplate.html", { "items": _.sortBy(this.data.selectedActions, "action") }, function (tpl) {
                _this2.$el.find("#selectedActions").html(tpl);
                _this2.$el.find("button[data-add-item]").prop("disabled", true);
                if (callback) {
                    callback();
                }
            });
        },
        selectAction: function selectAction(e) {
            e.preventDefault();

            var actionName = $(e.target).data("actionName");
            var action = _.find(this.data.options.availableActions, { action: actionName });
            var cloned = _.clone(action);

            this.data.availableActions = _.without(this.data.availableActions, _.find(this.data.availableActions, { action: actionName }));
            this.renderAvailableActions();
            this.data.selectedActions.push(cloned);
            this.renderSelectedActions();

            this.data.entity.actionValues[action.action] = action.value;
        },
        changePermission: function changePermission(e) {
            var $target = $(e.target);
            var permitted = ($target.val() || $target.find("input").val()) === "true";
            var actionName = $target.closest("tr").find(".action-name").text().trim();

            _.find(this.data.selectedActions, { action: actionName }).value = permitted;

            this.data.entity.actionValues[actionName] = permitted;
        },
        deleteItem: function deleteItem(e) {
            if (e.type === "keyup" && e.keyCode !== 13) {
                return;
            }
            var $target = $(e.target);
            var actionName = $target.closest("tr").find(".action-name").text().trim();
            var selectedAction = _.find(this.data.selectedActions, { action: actionName });

            this.data.selectedActions = _.without(this.data.selectedActions, selectedAction);
            this.renderSelectedActions();

            delete this.data.entity.actionValues[actionName];

            this.data.availableActions.push(selectedAction);
            this.renderAvailableActions();
        }
    });

    return new PolicyActionsView();
});
