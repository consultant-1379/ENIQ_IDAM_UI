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
 * Copyright 2016 ForgeRock AS.
 */
/* eslint-disable */
define(["org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/commons/ui/common/util/URIUtils"], function (AbstractView, Configuration, URIUtils) {
    var UnauthorizedView = AbstractView.extend({
        template: "templates/common/UnauthorizedTemplate.html",
        baseTemplate: "templates/common/LoginBaseTemplate.html",
        events: {
            "click #goBack": function clickGoBack() {
                window.history.go(-1);
            },
            "click #logout": function clickLogout() {
                Configuration.gotoURL = "#" + URIUtils.getCurrentFragment();
            }
        }
    });

    return new UnauthorizedView();
});
//# sourceMappingURL=UnauthorizedView.js.map
