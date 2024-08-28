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

define(["backbone", "org/forgerock/commons/ui/common/util/UIUtils"], function (Backbone, UIUtils) {
    var PanelComponent = Backbone.View.extend({
        template: "templates/common/components/PanelComponentTemplate.html",
        initialize: function initialize(_ref) {
            var createBody = _ref.createBody,
                createFooter = _ref.createFooter;

            this.createBody = createBody;
            this.createFooter = createFooter;
        },
        getBody: function getBody() {
            return this.panelBody;
        },
        render: function render() {
            var _this = this;

            UIUtils.compileTemplate(this.template).then(function (html) {
                _this.$el.html(html);
                _this.panelBody = _this.createBody();
                _this.$el.find("[data-panel-body]").append(_this.panelBody.render().$el);
                _this.$el.find("[data-panel-footer]").append(_this.createFooter().render().$el);
            });
            return this;
        }
    });

    return PanelComponent;
});
//# sourceMappingURL=PanelComponent.js.map
