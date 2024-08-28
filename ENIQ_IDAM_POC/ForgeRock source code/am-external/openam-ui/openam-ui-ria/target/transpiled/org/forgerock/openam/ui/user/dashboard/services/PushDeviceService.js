define(["exports", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/services/fetchUrl"], function (exports, _AbstractDelegate, _Configuration, _Constants, _fetchUrl) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getAll = getAll;
    exports.remove = remove;

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Configuration2 = _interopRequireDefault(_Configuration);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _fetchUrl2 = _interopRequireDefault(_fetchUrl);

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

    var delegate = new _AbstractDelegate2.default("" + _Constants2.default.host + _Constants2.default.context + "/json");
    var getPath = function getPath() {
        return "/users/" + _Configuration2.default.loggedUser.get("uid") + "/devices/push/";
    };

    function getAll() {
        return delegate.serviceCall({
            url: (0, _fetchUrl2.default)(getPath() + "?_queryFilter=true"),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            suppressEvents: true
        }).then(function (value) {
            return value.result;
        });
    }

    function remove(uuid) {
        return delegate.serviceCall({
            url: (0, _fetchUrl2.default)(getPath() + uuid),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            suppressEvents: true,
            method: "DELETE"
        });
    }
});
