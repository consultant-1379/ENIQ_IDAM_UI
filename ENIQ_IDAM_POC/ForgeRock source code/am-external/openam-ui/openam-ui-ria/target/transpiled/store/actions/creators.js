define(["exports", "./types"], function (exports, _types) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.serverAddRealm = exports.sessionRemoveInfo = exports.sessionAddInfo = undefined;
    var sessionAddInfo = exports.sessionAddInfo = function sessionAddInfo(_ref) {
        var realm = _ref.realm,
            sessionHandle = _ref.sessionHandle;
        return {
            type: _types.SESSION_ADD_INFO,
            realm: realm,
            sessionHandle: sessionHandle
        };
    }; /**
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
    var sessionRemoveInfo = exports.sessionRemoveInfo = function sessionRemoveInfo() {
        return {
            type: _types.SESSION_REMOVE_INFO
        };
    };

    var serverAddRealm = exports.serverAddRealm = function serverAddRealm(realm) {
        return {
            type: _types.SERVER_ADD_REALM,
            realm: realm
        };
    };
});
