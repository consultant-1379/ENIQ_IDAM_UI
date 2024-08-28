define(["exports", "lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/services/fetchUrl"], function (exports, _lodash, _AbstractDelegate, _Constants, _fetchUrl) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createOrUpdate = createOrUpdate;
    exports.get = get;
    exports.getAllTypes = getAllTypes;
    exports.getSchema = getSchema;
    exports.getTemplate = getTemplate;
    exports.listOutcomes = listOutcomes;
    exports.remove = remove;

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

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
     * Copyright 2017 ForgeRock AS.
     */

    /**
     * @module org/forgerock/openam/ui/admin/services/realm/authentication/NodeService
     */
    var obj = new _AbstractDelegate2.default("" + _Constants2.default.host + _Constants2.default.context + "/json");
    var PATH = "/realm-config/authentication/authenticationtrees/nodes";
    var HEADERS = { "Accept-API-Version": "protocol=2.0,resource=1.0" };

    function createOrUpdate(realm, data, type, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + type + "/" + id, { realm: realm }),
            type: "PUT",
            headers: HEADERS,
            data: JSON.stringify((0, _lodash.omit)(data, "_rev"))
        });
    }

    function get(realm, type, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + type + "/" + id, { realm: realm }),
            headers: HEADERS,
            suppressSpinner: true
        });
    }

    function getAllTypes(realm) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "?_action=getAllTypes", { realm: realm }),
            headers: HEADERS,
            suppressSpinner: true,
            type: "POST"
        });
    }

    function getSchema(realm, type) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + type + "?_action=schema", { realm: realm }),
            headers: HEADERS,
            suppressSpinner: true,
            type: "POST"
        });
    }

    function getTemplate(realm, type) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + type + "?_action=template", { realm: realm }),
            headers: HEADERS,
            suppressSpinner: true,
            type: "POST"
        });
    }

    function listOutcomes(realm, data, type) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + type + "?_action=listOutcomes", { realm: realm }),
            headers: HEADERS,
            type: "POST",
            data: JSON.stringify(data)
        });
    }

    function remove(realm, type, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + type + "/" + id, { realm: realm }),
            headers: HEADERS,
            suppressSpinner: true,
            type: "DELETE"
        });
    }
});
