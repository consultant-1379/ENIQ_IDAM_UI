"use strict";

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
 * @module org/forgerock/openam/ui/admin/services/global/SitesService
 */
define(["lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/Promise"], function (_, AbstractDelegate, Constants, JSONSchema, JSONValues, fetchUrl, Promise) {
    var obj = new AbstractDelegate("" + Constants.host + Constants.context + "/json");

    var filterUnEditableProperties = function filterUnEditableProperties(data) {
        return _.pick(data, ["url", "secondaryURLs"]);
    };

    var getSchema = function getSchema() {
        return obj.serviceCall({
            url: fetchUrl.default("/global-config/sites?_action=schema", { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            type: "POST",
            success: function success(data) {
                var filteredProperties = filterUnEditableProperties(data.properties);
                data.properties = filteredProperties;
                return data;
            }
        });
    };

    var getValues = function getValues(id) {
        return obj.serviceCall({
            url: fetchUrl.default("/global-config/sites/" + id, { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            success: function success(data, jqXHR) {
                data.etag = jqXHR.getResponseHeader("ETag");
                return data;
            }
        });
    };

    var getTemplate = function getTemplate() {
        return obj.serviceCall({
            url: fetchUrl.default("/global-config/sites?_action=template", { realm: false }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            type: "POST"
        });
    };

    obj.sites = {
        getAll: function getAll() {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/sites?_queryFilter=true", { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
            }).then(function (data) {
                return _.sortBy(data.result, "_id");
            });
        },
        get: function get(id) {
            return Promise.all([getSchema(), getValues(id)]).then(function (response) {
                return {
                    schema: new JSONSchema(response[0][0]),
                    values: new JSONValues(response[1][0])
                };
            });
        },
        create: function create(data) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/sites?_action=create", { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST",
                data: JSON.stringify(_.omit(data, ["servers"]))
            });
        },
        update: function update(id, data, etag) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/sites/" + id, { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0", "If-Match": etag },
                type: "PUT",
                data: JSON.stringify(filterUnEditableProperties(data))
            });
        },
        remove: function remove(id, etag) {
            var remove = function remove(id, etag) {
                return obj.serviceCall({
                    url: fetchUrl.default("/global-config/sites/" + id, { realm: false }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0", "If-Match": etag },
                    type: "DELETE"
                });
            };

            if (_.isUndefined(etag)) {
                return getValues(id).then(function (response) {
                    return remove(id, response.etag);
                });
            } else {
                return remove(id, etag);
            }
        },
        getInitialState: function getInitialState() {
            return Promise.all([getSchema(), getTemplate()]).then(function (response) {
                return {
                    schema: new JSONSchema(response[0][0]),
                    values: new JSONValues(response[1][0])
                };
            });
        }
    };

    return obj;
});
//# sourceMappingURL=SitesService.js.map
