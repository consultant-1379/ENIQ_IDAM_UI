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

define(["lodash", "backbone", "org/forgerock/commons/ui/common/util/UIUtils"], function (_, Backbone, UIUtils) {
    return Backbone.View.extend({
        initialize: function initialize(_ref) {
            var template = _ref.template,
                _ref$data = _ref.data,
                data = _ref$data === undefined ? {} : _ref$data,
                _ref$callback = _ref.callback,
                callback = _ref$callback === undefined ? _.noop : _ref$callback;

            if (!template) {
                throw new Error("[TemplateBasedView] No \"template\" found.");
            }
            this.template = template;
            this.callback = callback;
            this.data = data;
        },
        render: function render() {
            var _this = this;

            UIUtils.compileTemplate(this.template, this.data).then(function (html) {
                _this.$el.html(html);
                _this.callback();
            });
            return this;
        }
    });
});
