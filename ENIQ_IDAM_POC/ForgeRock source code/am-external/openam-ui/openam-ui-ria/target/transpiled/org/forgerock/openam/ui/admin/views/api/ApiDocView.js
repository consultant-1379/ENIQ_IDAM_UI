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

define(["lodash", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/admin/views/api/calculateHeight"], function (_, AbstractView, Constants, calculateHeight) {
    var ApiDocView = AbstractView.extend({
        template: "templates/admin/views/common/IframeViewTemplate.html",
        render: function render() {
            var _this = this;

            this.data.src = Constants.context + "/json/docs/api";
            this.data.className = "am-iframe-full-width";
            this.parentRender(function () {
                _this.resize();
                window.addEventListener("resize", _.debounce(_this.resize.bind(_this), 100));
            });
        },
        resize: function resize() {
            var height = calculateHeight.default();
            this.$el.find("[data-iframe]").height(height);
        },
        remove: function remove() {
            window.removeEventListener("resize", this.resize);
        }
    });

    return new ApiDocView();
});
