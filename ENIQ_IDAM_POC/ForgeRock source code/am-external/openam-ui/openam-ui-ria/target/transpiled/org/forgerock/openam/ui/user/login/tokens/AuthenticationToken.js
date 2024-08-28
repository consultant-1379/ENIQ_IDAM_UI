define(["exports", "org/forgerock/commons/ui/common/util/CookieHelper", "org/forgerock/commons/ui/common/main/Configuration"], function (exports, _CookieHelper, _Configuration) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.set = set;
    exports.get = get;
    exports.remove = remove;

    var _CookieHelper2 = _interopRequireDefault(_CookieHelper);

    var _Configuration2 = _interopRequireDefault(_Configuration);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    /**
     * The Authentication Token (authId) used by OpenAM to track an authentication session, usually
     * this is an unauthenticated users progress through an authentication chain.
     * @module org/forgerock/openam/ui/user/login/tokens/AuthenticationToken
     */

    var cookieName = "authId";

    function cookieDomains() {
        return _Configuration2.default.globalData.auth.cookieDomains;
    }

    function secureCookie() {
        return _Configuration2.default.globalData.secureCookie;
    }

    function set(token) {
        return _CookieHelper2.default.setCookie(cookieName, token, "", "/", cookieDomains(), secureCookie());
    }

    function get() {
        return _CookieHelper2.default.getCookie(cookieName);
    }

    function remove() {
        return _CookieHelper2.default.deleteCookie(cookieName, "/", cookieDomains());
    }
});
