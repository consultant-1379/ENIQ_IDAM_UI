define(["exports", "lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/Promise"], function (exports, _lodash, _AbstractDelegate, _Constants, _fetchUrl, _Promise) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getAll = getAll;
    exports.get = get;
    exports.getSchema = getSchema;
    exports.remove = remove;
    exports.getInitialState = getInitialState;
    exports.create = create;
    exports.update = update;

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _fetchUrl2 = _interopRequireDefault(_fetchUrl);

    var _Promise2 = _interopRequireDefault(_Promise);

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
                                                                                                                      * Copyright 2017 ForgeRock AS.
                                                                                                                      */

    /**
     * @module org/forgerock/openam/ui/admin/services/realm/AgentGroupsService
     */

    function getAll(realm, type) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "?_queryFilter=true", { realm: realm }),
            headers: { "Accept-API-Version": "protocol=2.0,resource=1.0" }
        });
    }

    function get(realm, type, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "/" + encodeURIComponent(id), { realm: realm }),
            headers: { "Accept-API-Version": "protocol=2.0,resource=1.0" }
        });
    }

    function getSchema(realm, type) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "?_action=schema", { realm: realm }),
            headers: { "Accept-API-Version": "protocol=2.0,resource=1.0" },
            type: "POST"
        });
    }

    function remove(realm, type, ids) {
        var promises = (0, _lodash.map)(ids, function (id) {
            return obj.serviceCall({
                url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "/" + encodeURIComponent(id), { realm: realm }),
                headers: { "Accept-API-Version": "protocol=2.0,resource=1.0" },
                type: "DELETE"
            });
        });

        return _Promise2.default.all(promises);
    }

    function getInitialState(realm, type) {
        function getTemplate() {
            return obj.serviceCall({
                url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "?_action=template", { realm: realm }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST"
            });
        }

        return _Promise2.default.all([getSchema(realm, type), getTemplate()]).then(function (response) {
            return {
                schema: response[0],
                values: response[1]
            };
        });
    }

    function create(realm, type, data, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "/" + encodeURIComponent(id), { realm: realm }),
            type: "PUT",
            headers: {
                "Accept-API-Version": "protocol=2.0,resource=1.0",
                "If-None-Match": "*"
            },
            data: JSON.stringify(data),
            suppressSpinner: true,
            errorsHandlers: { "incorrectRevisionError": { status: 412 } }
        });
    }

    function update(realm, type, data, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)("/realm-config/agents/groups/" + type + "/" + encodeURIComponent(id), { realm: realm }),
            type: "PUT",
            headers: { "Accept-API-Version": "protocol=2.0,resource=1.0" },
            // CREST Protocol 2.0 payload must not transmit _rev
            data: JSON.stringify((0, _lodash.omit)(data, "_rev"))
        });
    }
});
//# sourceMappingURL=AgentGroupsService.js.map
