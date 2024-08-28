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
 * Copyright 2015-2017 ForgeRock AS.
 */

/**
 * @module org/forgerock/openam/ui/admin/services/realm/AuthenticationService
 */
define(["jquery", "lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/admin/services/SMSServiceUtils", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/Promise"], function ($, _, AbstractDelegate, Constants, SMSServiceUtils, JSONSchema, JSONValues, fetchUrl, Promise) {
    var obj = new AbstractDelegate("" + Constants.host + Constants.context + "/json");

    obj.authentication = {
        get: function get(realm) {
            return SMSServiceUtils.schemaWithValues(obj, fetchUrl.default("/realm-config/authentication", { realm: realm }));
        },
        update: function update(realm, data) {
            return obj.serviceCall({
                url: fetchUrl.default("/realm-config/authentication", { realm: realm }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "PUT",
                data: JSON.stringify(data)
            });
        },

        chains: {
            all: function all(realm) {
                return Promise.all([obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/chains?_queryFilter=true", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                }), obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                })]).then(function (response) {
                    var chainsData = response[0];
                    var authenticationData = response[1];

                    _.each(chainsData[0].result, function (chainData) {
                        if (chainData._id === authenticationData[0].adminAuthModule) {
                            chainData.defaultConfig = chainData.defaultConfig || {};
                            chainData.defaultConfig.adminAuthModule = true;
                        }

                        if (chainData._id === authenticationData[0].orgConfig) {
                            chainData.defaultConfig = chainData.defaultConfig || {};
                            chainData.defaultConfig.orgConfig = true;
                        }
                    });

                    return {
                        values: chainsData[0]
                    };
                });
            },
            create: function create(realm, data) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/chains?_action=create", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "POST",
                    data: JSON.stringify(data)
                });
            },
            get: function get(realm, name) {
                var moduleName;

                return Promise.all([obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                }), obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/chains/" + name, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                }), obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules?_queryFilter=true", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                })]).then(function (response) {
                    var authenticationData = response[0];
                    var chainData = response[1];
                    var modulesData = response[2];

                    if (chainData[0]._id === authenticationData[0].adminAuthModule) {
                        chainData[0].adminAuthModule = true;
                    }

                    if (chainData[0]._id === authenticationData[0].orgConfig) {
                        chainData[0].orgConfig = true;
                    }

                    _.each(chainData[0].authChainConfiguration, function (chainLink) {
                        moduleName = _.find(modulesData[0].result, { _id: chainLink.module });
                        // The server allows for deletion of modules that are in use within a chain. The chain itself
                        // will still have a reference to the deleted module.
                        // Below we are checking if the module is present. If it isn't the type is left undefined
                        if (moduleName) {
                            chainLink.type = moduleName.type;
                        }
                    });

                    return {
                        chainData: chainData[0],
                        modulesData: _.sortBy(modulesData[0].result, "_id")
                    };
                });
            },
            remove: function remove(realm, name) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/chains/" + name, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "DELETE"
                });
            },
            update: function update(realm, name, data) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/chains/" + name, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "PUT",
                    data: JSON.stringify(data)
                });
            }
        },
        modules: {
            all: function all(realm) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules?_queryFilter=true", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                }).done(SMSServiceUtils.sortResultBy("_id"));
            },
            create: function create(realm, data, type) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules/" + type + "?_action=create", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "POST",
                    data: JSON.stringify(data)
                });
            },
            get: function get(realm, name, type) {
                function getInstance() {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/authentication/modules/" + type + "/" + name, { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                    });
                }

                return Promise.all([this.schema(realm, type), getInstance(), this.types.get(realm, type)]).then(function (response) {
                    return {
                        name: response[2].name,
                        schema: response[0],
                        values: new JSONValues(response[1][0])
                    };
                });
            },
            exists: function exists(realm, name) {
                var promise = $.Deferred(),
                    request = obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules?_queryFilter=_id eq \"" + name + "\"&_fields=_id", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                });

                request.done(function (data) {
                    promise.resolve(data.result.length > 0);
                });
                return promise;
            },
            remove: function remove(realm, name, type) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules/" + type + "/" + name, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "DELETE"
                });
            },
            update: function update(realm, name, type, data) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules/" + type + "/" + name, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "PUT",
                    data: data
                }).then(function (response) {
                    return new JSONValues(response);
                });
            },

            types: {
                all: function all(realm) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/authentication/modules?_action=getAllTypes", { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "POST"
                    }).done(SMSServiceUtils.sortResultBy("name"));
                },
                get: function get(realm, type) {
                    // TODO: change this to a proper server-side call when OPENAM-7242 is implemented
                    return obj.authentication.modules.types.all(realm).then(function (data) {
                        return _.findWhere(data.result, { "_id": type });
                    });
                }
            },
            schema: function schema(realm, type) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/authentication/modules/" + type + "?_action=schema", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "POST"
                }).then(function (response) {
                    return new JSONSchema(response);
                });
            }
        }
    };

    return obj;
});
//# sourceMappingURL=AuthenticationService.js.map
