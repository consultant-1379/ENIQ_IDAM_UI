define(["exports", "lodash", "store/modules/remote/info", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "./fetchUrl", "store/index", "org/forgerock/commons/ui/common/util/URIUtils"], function (exports, _lodash, _info, _AbstractDelegate, _Constants, _fetchUrl, _index, _URIUtils) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getVersion = getVersion;
    exports.getConfiguration = getConfiguration;

    var _lodash2 = _interopRequireDefault(_lodash);

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _fetchUrl2 = _interopRequireDefault(_fetchUrl);

    var _index2 = _interopRequireDefault(_index);

    var _URIUtils2 = _interopRequireDefault(_URIUtils);

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
                                                                                                                      * Copyright 2015-2017 ForgeRock AS.
                                                                                                                      */

    /**
     * @module org/forgerock/openam/ui/common/services/ServerService
     */


    function getRealmUrlParameter() {
        return _URIUtils2.default.parseQueryString(_URIUtils2.default.getCurrentQueryString()).realm;
    }

    function getUrl(path) {
        var realmParameter = getRealmUrlParameter();
        return (0, _fetchUrl2.default)(path, { realm: realmParameter ? realmParameter : false });
    }

    function getVersion() {
        return obj.serviceCall({
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            url: getUrl("/serverinfo/version")
        }).then(function (_ref) {
            var fullVersion = _ref.fullVersion;
            return fullVersion;
        });
    }

    function getConfiguration(callParams) {
        return obj.serviceCall(_lodash2.default.extend({
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.1" },
            url: getUrl("/serverinfo/*")
        }, callParams)).then(function (response) {
            _index2.default.dispatch((0, _info.addRealm)(response.realm));

            return response;
        }, function (reason) {
            var realmUrlParameter = getRealmUrlParameter();
            if (realmUrlParameter) {
                _index2.default.dispatch((0, _info.addRealm)(realmUrlParameter));
            }

            return reason;
        });
    }
});
//# sourceMappingURL=ServerService.js.map
