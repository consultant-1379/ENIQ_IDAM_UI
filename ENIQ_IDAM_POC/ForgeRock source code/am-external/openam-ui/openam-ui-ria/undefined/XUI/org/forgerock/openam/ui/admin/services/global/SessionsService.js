define(["exports", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/services/fetchUrl"], function (exports, _AbstractDelegate, _Constants, _fetchUrl) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getByRealmAndUsername = getByRealmAndUsername;
    exports.invalidateByHandles = invalidateByHandles;

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _fetchUrl2 = _interopRequireDefault(_fetchUrl);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var obj = new _AbstractDelegate2.default("" + _Constants2.default.host + _Constants2.default.context + "/json"); /*
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
     * @module org/forgerock/openam/ui/admin/services/global/SessionsService
     */

    function getByRealmAndUsername(realm, username) {
        var queryFilter = encodeURIComponent("username eq \"" + username + "\" and realm eq \"" + realm + "\"");

        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/sessions?_queryFilter=" + queryFilter, { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=2.0" }
        }).then(function (response) {
            return response.result;
        });
    }

    function invalidateByHandles(handles) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/sessions?_action=logoutByHandle", { realm: false }),
            type: "POST",
            headers: { "Accept-API-Version": "protocol=1.0,resource=2.0" },
            data: JSON.stringify({ sessionHandles: handles })
        }).then(function (response) {
            return response.result;
        });
    }
});
//# sourceMappingURL=SessionsService.js.map
