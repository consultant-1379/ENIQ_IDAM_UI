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
 * @module org/forgerock/openam/ui/admin/services/global/AuthenticationService
 */
define(["lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/Promise"], function (_, AbstractDelegate, Constants, JSONSchema, JSONValues, fetchUrl, Promise) {
    var obj = new AbstractDelegate("" + Constants.host + Constants.context + "/json");

    function getModuleUrl(id) {
        return id === "core" ? "" : "/modules/" + id;
    }

    obj.authentication = {
        getAll: function getAll() {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/authentication/modules?_action=getAllTypes", { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST"
            }).then(function (data) {
                return _.sortBy(data.result, "name");
            });
        },
        schema: function schema() {
            var serviceCall = function serviceCall(action) {
                return obj.serviceCall({
                    url: fetchUrl.default("/global-config/authentication?_action=" + action, { realm: false }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "POST"
                });
            };

            return Promise.all([serviceCall("schema"), serviceCall("template")]).then(function (response) {
                return {
                    schema: response[0][0],
                    values: response[1][0]
                };
            });
        },

        get: function get(id) {
            var moduleUrl = getModuleUrl(id);

            var getSchema = function getSchema() {
                return obj.serviceCall({
                    url: fetchUrl.default("/global-config/authentication" + moduleUrl + "?_action=schema", { realm: false }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "POST"
                }).then(function (response) {
                    return new JSONSchema(response);
                });
            };

            var getValues = function getValues() {
                return obj.serviceCall({
                    url: fetchUrl.default("/global-config/authentication" + moduleUrl, { realm: false }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                }).then(function (response) {
                    return new JSONValues(response);
                });
            };

            return Promise.all([getSchema(), getValues()]).then(function (response) {
                return {
                    schema: response[0],
                    values: response[1],
                    name: response[1].raw._type.name
                };
            });
        },
        update: function update(id, data) {
            return obj.serviceCall({
                url: fetchUrl.default("/global-config/authentication" + getModuleUrl(id), { realm: false }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "PUT",
                data: data
            });
        }
    };
    return obj;
});
