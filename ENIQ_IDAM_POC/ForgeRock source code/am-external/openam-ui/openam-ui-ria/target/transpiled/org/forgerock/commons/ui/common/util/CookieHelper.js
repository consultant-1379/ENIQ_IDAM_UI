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
define(["lodash"], function (_) {

    /**
     * @exports org/forgerock/commons/ui/common/util/CookieHelper
     */
    var obj = {};

    /**
     * Creates a cookie with given parameters.
     * @param {String} name - cookie name.
     * @param {String} [value] - cookie value.
     * @param {Date} [expirationDate] - cookie expiration date.
     * @param {String} [path] - cookie path.
     * @param {String|String[]} [domain] - cookie domain(s).
     * @param {Boolean} [secure] - is cookie secure.
     * @returns {String} created cookie.
     */
    obj.createCookie = function (name, value, expirationDate, path, domain, secure) {
        var expirationDatePart, nameValuePart, pathPart, domainPart, securePart;

        expirationDatePart = expirationDate ? ";expires=" + expirationDate.toGMTString() : "";
        nameValuePart = name + "=" + value;
        pathPart = path ? ";path=" + path : "";
        domainPart = domain ? ";domain=" + domain : "";
        securePart = secure ? ";secure" : "";

        return nameValuePart + expirationDatePart + pathPart + domainPart + securePart;
    };

    /**
     * Sets a cookie with given parameters in the browser.
     * @param {String} name - cookie name.
     * @param {String} [value] - cookie value.
     * @param {Date} [expirationDate] - cookie expiration date.
     * @param {String} [path] - cookie path.
     * @param {String|String[]} [domain] - cookie domain(s). Use empty array for creating host-only cookies.
     * @param {Boolean} [secure] - is cookie secure.
     */
    obj.setCookie = function (name, value, expirationDate, path, domains, secure) {
        if (!_.isArray(domains)) {
            domains = [domains];
        }

        if (domains.length === 0) {
            document.cookie = obj.createCookie(name, value, expirationDate, path, undefined, secure);
        } else {
            _.each(domains, function (domain) {
                document.cookie = obj.createCookie(name, value, expirationDate, path, domain, secure);
            });
        }
    };

    /**
     * Returns cookie with a given name.
     * @param {String} name - cookie name.
     * @returns {String} cookie or undefined if cookie was not found
     */
    obj.getCookie = function (c_name) {
        var i,
            x,
            y,
            cookies = document.cookie.split(";");
        for (i = 0; i < cookies.length; i++) {
            x = cookies[i].substr(0, cookies[i].indexOf("="));
            y = cookies[i].substr(cookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === c_name) {
                return unescape(y);
            }
        }
    };

    /**
     * Deletes cookie with given parameters.
     * @param {String} name - cookie name.
     * @param {String} [path] - cookie path.
     * @param {String|String[]} [domain] - cookie domain(s).
     */
    obj.deleteCookie = function (name, path, domains) {
        var date = new Date();
        date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
        obj.setCookie(name, "", date, path, domains);
    };

    /**
     * Checks if cookies are enabled.
     * @returns {Boolean} whether cookies enabled or not.
     */
    obj.cookiesEnabled = function () {
        this.setCookie("cookieTest", "test");
        if (!this.getCookie("cookieTest")) {
            return false;
        }
        this.deleteCookie("cookieTest");
        return true;
    };

    return obj;
});
