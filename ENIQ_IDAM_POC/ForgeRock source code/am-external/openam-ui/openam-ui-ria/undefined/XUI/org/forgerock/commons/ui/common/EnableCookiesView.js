"use strict";

/**
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
 * Copyright 2011-2016 ForgeRock AS.
 */
/* eslint-disable */
define(["org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/util/CookieHelper"], function (AbstractView, cookieHelper) {
    var EnableCookiesView = AbstractView.extend({
        template: "templates/common/EnableCookiesTemplate.html",
        baseTemplate: "templates/common/LoginBaseTemplate.html",
        render: function render() {
            if (!cookieHelper.cookiesEnabled()) {
                this.parentRender();
            } else {
                location.href = "#login/";
            }
        }
    });

    return new EnableCookiesView();
});
//# sourceMappingURL=EnableCookiesView.js.map
