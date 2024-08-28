define(["exports", "lodash", "moment", "store/modules/local/session", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "store/index", "org/forgerock/openam/ui/user/login/gotoUrl"], function (exports, _lodash, _moment, _session, _AbstractDelegate, _Constants, _index, _gotoUrl) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.logout = exports.isSessionValid = exports.updateSessionInfo = exports.getTimeLeft = undefined;

    var _lodash2 = _interopRequireDefault(_lodash);

    var _moment2 = _interopRequireDefault(_moment);

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var obj = new _AbstractDelegate2.default("" + _Constants2.default.host + _Constants2.default.context + "/json/sessions"); /*
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
                                                                                                                               * Copyright 2014-2017 ForgeRock AS.
                                                                                                                               */

    var getSessionInfo = function getSessionInfo(options) {
        return obj.serviceCall(_lodash2.default.merge({
            url: "?_action=getSessionInfo",
            type: "POST",
            data: {},
            headers: {
                "Accept-API-Version": "protocol=1.0,resource=2.0"
            }
        }, options));
    };

    var getTimeLeft = exports.getTimeLeft = function getTimeLeft(token) {
        return getSessionInfo(token, { suppressSpinner: true }).then(function (sessionInfo) {
            var idleExpiration = (0, _moment2.default)(sessionInfo.maxIdleExpirationTime).diff((0, _moment2.default)(), "seconds");
            var maxExpiration = (0, _moment2.default)(sessionInfo.maxSessionExpirationTime).diff((0, _moment2.default)(), "seconds");
            return _lodash2.default.min([idleExpiration, maxExpiration]);
        });
    };

    var updateSessionInfo = exports.updateSessionInfo = function updateSessionInfo() {
        var options = { errorsHandlers: { "Unauthorized": { status: 401 } } };

        return getSessionInfo(options).then(function (response) {
            _index2.default.dispatch((0, _session.addRealm)(response.realm));
            return response;
        });
    };

    var isSessionValid = exports.isSessionValid = function isSessionValid() {
        return getSessionInfo();
    };

    var logout = exports.logout = function logout() {
        var paramString = (0, _gotoUrl.exists)() ? "&goto=" + (0, _gotoUrl.get)() : "";
        return obj.serviceCall({
            url: "?_action=logout" + paramString,
            type: "POST",
            data: {},
            headers: {
                "Accept-API-Version": "protocol=1.0,resource=2.0"
            },
            errorsHandlers: {
                "Bad Request": { status: 400 },
                "Unauthorized": { status: 401 }
            }
        });
    };
});
