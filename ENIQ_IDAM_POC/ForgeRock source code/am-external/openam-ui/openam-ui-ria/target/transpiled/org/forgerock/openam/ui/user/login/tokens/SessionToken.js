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
     * Copyright 2016 ForgeRock AS.
     */
    /* eslint-disable */
    /**
     * The Session Token (tokenId) used by OpenAM to track an authenticated session.
     * @module org/forgerock/openam/ui/user/login/tokens/SessionToken
     */

    function cookieName() {
        return _Configuration2.default.globalData.auth.cookieName;
    }

    function cookieDomains() {
        return _Configuration2.default.globalData.auth.cookieDomains;
    }

    function secureCookie() {
        return _Configuration2.default.globalData.secureCookie;
    }

    function cookieSameSite() {
        return _Configuration2.default.globalData.auth.cookieSameSite;
    }

    function set(token) {
        return _CookieHelper2.default.setCookie(cookieName(), token, "", "/", cookieDomains(), secureCookie(), cookieSameSite());
    }

    function get() {
        return _CookieHelper2.default.getCookie(cookieName());
    }

    function remove() {
        return _CookieHelper2.default.deleteCookie(cookieName(), "/", cookieDomains());
    }
});
