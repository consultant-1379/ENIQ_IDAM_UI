define(["exports", "store/index"], function (exports, _index) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var ROOT_REALM_IDENTIFIER = "/root"; // TODO "root" is a placeholder. Identifier for a root realm yet undecided.
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
     * @module org/forgerock/openam/ui/common/services/fetchUrl
     */
    var hasLeadingSlash = function hasLeadingSlash(value) {
        return value[0] === "/";
    };
    var throwIfPathHasNoLeadingSlash = function throwIfPathHasNoLeadingSlash(path) {
        if (!hasLeadingSlash(path)) {
            throw new Error("[fetchUrl] Path must start with forward slash. \"" + path + "\"");
        }
    };
    var normaliseRealmAliasResourcePath = function normaliseRealmAliasResourcePath(alias) {
        return "/realms/" + alias;
    };
    var normaliseRealmResourcePath = function normaliseRealmResourcePath(realm) {
        return realm.replace(/\//g, "/realms/");
    };
    var redesignateRootRealm = function redesignateRootRealm(realm, rootIdentifier) {
        var isRootRealm = realm === "/";
        return isRootRealm ? rootIdentifier : "" + rootIdentifier + realm;
    };

    /**
     * Fetch a URL using the newer method of laying realm information into the URL (e.g. Redux).
     *
     * @param {string} path Path to the resource. Must start with a forward slash.
     * @param {Object} [options] Options to pass to this function.
     * @param {string} [options.realm=store.getState().local.session.realm] The realm to use when constructing the URL. Maybe an absolute realm or alias.
     * @returns {string} URL string to be appended after the <code>.../json</code> path.
     *
     * @throws {Error} If path does not start with a forward slash.
     *
     * @example // With session on the root realm
     * fetchUrl("/authentication") => "/realms/root/authentication"
     * @example // With session on a sub realm
     * fetchUrl("/authentication") => "/realms/root/realms/myRealm/authentication"
     * @example // Forcing a realm
     * fetchUrl("/authentication", { realm: "/myRealm" }) => "/realms/root/realms/myRealm/authentication"
     * @example // Forcing no realm
     * fetchUrl("/authentication", { realm: false }) => "/authentication"
     * @example // With realm alias
     * fetchUrl("/authentication", { realm: "myAlias" }) => "/realms/myAlias/authentication"
     */
    var fetchUrl = function fetchUrl(path) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$realm = _ref.realm,
            realm = _ref$realm === undefined ? _index2.default.getState().local.session.realm : _ref$realm;

        throwIfPathHasNoLeadingSlash(path);
        if (!realm) {
            return path;
        }

        if (hasLeadingSlash(realm)) {
            realm = redesignateRootRealm(realm, ROOT_REALM_IDENTIFIER);
            realm = normaliseRealmResourcePath(realm);
        } else {
            realm = normaliseRealmAliasResourcePath(realm);
        }

        return realm + path;
    };

    exports.default = fetchUrl;
});
//# sourceMappingURL=fetchUrl.js.map
