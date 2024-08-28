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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/array/arrayify", "org/forgerock/openam/ui/common/util/Promise"], function ($, _, AbstractDelegate, Constants, JSONSchema, JSONValues, fetchUrl, arrayify, Promise) {
    /**
     * @exports org/forgerock/openam/ui/admin/services/realm/ServicesService
     */
    var obj = new AbstractDelegate("" + Constants.host + Constants.context + "/json");

    var getServiceSchema = function getServiceSchema(realm, type) {
        return obj.serviceCall({
            url: fetchUrl.default("/realm-config/services/" + type + "?_action=schema", { realm: realm }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            type: "POST"
        }).then(function (response) {
            return new JSONSchema(response);
        });
    };
    var getServiceSubSchema = function getServiceSubSchema(realm, serviceType, subSchemaType) {
        return obj.serviceCall({
            url: fetchUrl.default("/realm-config/services/" + serviceType + "/" + subSchemaType + "?_action=schema", { realm: realm }),
            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
            type: "POST"
        }).then(function (response) {
            return new JSONSchema(response);
        });
    };

    obj.instance = {
        getAll: function getAll(realm) {
            return obj.serviceCall({
                url: fetchUrl.default("/realm-config/services?_queryFilter=true", { realm: realm }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
            }).then(function (response) {
                return _.sortBy(response.result, "name");
            });
        },
        get: function get(realm, type) {
            function getInstance() {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/services/" + type, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                });
            }

            return Promise.all([getServiceSchema(realm, type), getInstance()]).then(function (response) {
                return {
                    name: response[1][0]._type.name,
                    schema: response[0],
                    values: new JSONValues(response[1][0])
                };
            });
        },
        getInitialState: function getInitialState(realm, type) {
            function getTemplate() {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/services/" + type + "?_action=template", { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "POST"
                }).then(function (response) {
                    return new JSONValues(response);
                });
            }

            return Promise.all([getServiceSchema(realm, type), getTemplate()]).then(function (response) {
                return {
                    schema: response[0],
                    values: response[1]
                };
            });
        },
        remove: function remove(realm, types) {
            var promises = _.map(arrayify(types), function (type) {
                return obj.serviceCall({
                    url: fetchUrl.default("/realm-config/services/" + type, { realm: realm }),
                    headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                    type: "DELETE"
                });
            });

            return Promise.all(promises);
        },
        update: function update(realm, type, data) {
            return obj.serviceCall({
                url: fetchUrl.default("/realm-config/services/" + type, { realm: realm }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "PUT",
                data: data
            }).then(function (response) {
                return new JSONValues(response);
            });
        },
        create: function create(realm, type, data) {
            return obj.serviceCall({
                url: fetchUrl.default("/realm-config/services/" + type + "?_action=create", { realm: realm }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST",
                data: new JSONValues(data).toJSON()
            });
        }
    };

    obj.type = {
        getCreatables: function getCreatables(realm) {
            return obj.serviceCall({
                url: fetchUrl.default("/realm-config/services?_action=getCreatableTypes&forUI=true", { realm: realm }),
                headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                type: "POST"
            }).then(function (response) {
                return _.sortBy(response.result, "name");
            });
        },

        subSchema: {
            type: {
                getAll: function getAll(realm, serviceType) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/services/" + serviceType + "?_action=getAllTypes", { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "POST"
                    }).then(function (response) {
                        return response.result;
                    });
                },
                getCreatables: function getCreatables(realm, serviceType) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/services/" + serviceType + "?_action=getCreatableTypes", { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "POST"
                    }).then(function (response) {
                        return _.sortBy(response.result, "name");
                    });
                }
            },
            instance: {
                getAll: function getAll(realm, serviceType) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/services/" + serviceType + "?_action=nextdescendents", { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "POST"
                    }).then(function (response) {
                        return _.sortBy(response.result, "_id");
                    });
                },
                get: function get(realm, serviceType, subSchemaType, subSchemaInstance) {
                    function getInstance() {
                        return obj.serviceCall({
                            url: fetchUrl.default("/realm-config/services/" + serviceType + "/" + subSchemaType + "/" + subSchemaInstance, { realm: realm }),
                            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" }
                        }).then(function (response) {
                            return new JSONValues(response);
                        });
                    }

                    return Promise.all([getServiceSubSchema(realm, serviceType, subSchemaType), getInstance()]).then(function (response) {
                        return {
                            schema: response[0],
                            values: response[1]
                        };
                    });
                },
                getInitialState: function getInitialState(realm, serviceType, subSchemaType) {
                    function getTemplate(serviceType, subSchemaType) {
                        return obj.serviceCall({
                            url: fetchUrl.default("/realm-config/services/" + serviceType + "/" + subSchemaType + "?_action=template", { realm: realm }),
                            headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                            type: "POST"
                        }).then(function (response) {
                            return new JSONValues(response);
                        });
                    }

                    return Promise.all([getServiceSubSchema(realm, serviceType, subSchemaType), getTemplate(serviceType, subSchemaType)]).then(function (response) {
                        return {
                            schema: response[0],
                            values: response[1]
                        };
                    });
                },
                remove: function remove(realm, serviceType, subSchemaType, subSchemaInstance) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/services/" + serviceType + "/" + subSchemaType + "/" + subSchemaInstance, { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "DELETE"
                    });
                },
                update: function update(realm, serviceType, subSchemaType, subSchemaInstance, data) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/services/" + serviceType + "/" + subSchemaType + "/" + subSchemaInstance, { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "PUT",
                        data: data
                    });
                },
                create: function create(realm, serviceType, subSchemaType, data) {
                    return obj.serviceCall({
                        url: fetchUrl.default("/realm-config/services/" + serviceType + "/" + subSchemaType + "?_action=create", { realm: realm }),
                        headers: { "Accept-API-Version": "protocol=1.0,resource=1.0" },
                        type: "POST",
                        data: JSON.stringify(data)
                    });
                }
            }
        }
    };

    return obj;
});
//# sourceMappingURL=ServicesService.js.map
