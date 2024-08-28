"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
  * @module org/forgerock/openam/ui/admin/services/global/ServersService
  */
define(["lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/Promise"], function (_, AbstractDelegate, Constants, JSONSchema, JSONValues, fetchUrl, Promise) {
    var obj = new AbstractDelegate("" + Constants.host + Constants.context + "/json");
    var DEFAULT_SERVER = "server-default";
    var ADVANCED_SECTION = "advanced";
    var isDefaultServer = function isDefaultServer(serverId) {
        return serverId === "server-defaults";
    };
    var normalizeServerId = function normalizeServerId(serverId) {
        return isDefaultServer(serverId) ? DEFAULT_SERVER : serverId;
    };

    var objectToArray = function objectToArray(valuesObject) {
        return _.map(valuesObject, function (value, key) {
            return { key: key, value: value };
        });
    };
    var arrayToObject = function arrayToObject(valuesArray) {
        return _.reduce(valuesArray, function (result, item) {
            result[item.key] = item.value;
            return result;
        }, {});
    };

    var getSchema = function getSchema(server, section) {
        return obj.serviceCall({
            url: fetchUrl.default("/global-config/servers/" + server + "/properties/" + section + "?_action=schema", { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            type: "POST"
        }).then(function (response) {
            return new JSONSchema(response);
        });
    };

    var getValues = function getValues(server, section) {
        return obj.serviceCall({
            url: fetchUrl.default("/global-config/servers/" + server + "/properties/" + section, { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
        }).then(function (response) {
            if (section === ADVANCED_SECTION) {
                response = _.sortBy(objectToArray(response), function (value) {
                    return value.key;
                });
            }
            return new JSONValues(response);
        });
    };

    var updateServer = function updateServer(section, data) {
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_SERVER;

        var modifiedData = data;
        if (section === ADVANCED_SECTION) {
            modifiedData = arrayToObject(data[ADVANCED_SECTION]);
        }
        return obj.serviceCall({
            url: fetchUrl.default("/global-config/servers/" + id + "/properties/" + section, { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            type: "PUT",
            data: JSON.stringify(modifiedData)
        });
    };

    obj.servers = {
        clone: function clone(id, clonedUrl) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/servers/" + id + "?_action=clone", { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST",
                data: JSON.stringify({ clonedUrl: clonedUrl })
            });
        },
        get: function get(server, section) {
            return Promise.all([getSchema(server, section), getValues(server, section)]).then(function (response) {
                return {
                    schema: response[0],
                    values: response[1]
                };
            });
        },
        getWithDefaults: function getWithDefaults(server, section) {
            var normalizedServerId = normalizeServerId(server);
            var promises = [obj.servers.get(normalizedServerId, section)];

            if (!isDefaultServer(server) && section !== "directoryConfiguration") {
                promises.push(getValues(DEFAULT_SERVER, section));
            }
            return Promise.all(promises).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    instance = _ref2[0],
                    _ref2$ = _ref2[1],
                    defaultValues = _ref2$ === undefined ? {} : _ref2$;

                return {
                    schema: instance.schema,
                    values: instance.values,
                    defaultValues: defaultValues
                };
            });
        },
        getUrl: function getUrl(id) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/servers/" + id, { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
            }).then(function (response) {
                return response.url;
            }, function () {
                return undefined;
            });
        },
        getAll: function getAll() {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/servers?_queryFilter=true", { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
            }).then(function (response) {
                return _.reject(response.result, { "_id": DEFAULT_SERVER });
            });
        },
        remove: function remove(id) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/servers/" + id, { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "DELETE"
            });
        },
        create: function create(data) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/servers?_action=create", { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST",
                data: JSON.stringify(data)
            });
        },
        update: function update(section, data, id) {
            return updateServer(section, data, normalizeServerId(id));
        },
        ADVANCED_SECTION: ADVANCED_SECTION,
        DEFAULT_SERVER: DEFAULT_SERVER
    };

    return obj;
});
