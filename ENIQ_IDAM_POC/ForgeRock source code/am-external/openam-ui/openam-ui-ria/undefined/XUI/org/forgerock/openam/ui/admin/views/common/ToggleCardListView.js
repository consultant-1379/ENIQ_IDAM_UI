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

define(["jquery", "backbone", "org/forgerock/commons/ui/common/util/UIUtils"], function ($, Backbone, UIUtils) {
    return Backbone.View.extend({
        initialize: function initialize(options) {
            this.options = options;
            this.options.activeView = this.options.activeView || 0;
        },
        getElementA: function getElementA() {
            return "#viewAContainer";
        },
        getElementB: function getElementB() {
            return "#viewBContainer";
        },
        getActiveView: function getActiveView() {
            var index = this.$el.find(".tab-pane.active").index();
            return index > 0 ? index : 0;
        },
        render: function render(callback) {
            var _this = this;

            UIUtils.fillTemplateWithData("templates/admin/views/common/ToggleCardListTemplate.html", this.options.button, function (html) {
                _this.$el.html(html);
                _this.$el.find(".tab-pane").eq(_this.options.activeView).addClass("active");
                _this.$el.find(".tab-toggles").eq(_this.options.activeView).addClass("active");
                callback(_this);
            });
        }
    }, {
        DEFAULT_VIEW: 0
    });
});
//# sourceMappingURL=ToggleCardListView.js.map
