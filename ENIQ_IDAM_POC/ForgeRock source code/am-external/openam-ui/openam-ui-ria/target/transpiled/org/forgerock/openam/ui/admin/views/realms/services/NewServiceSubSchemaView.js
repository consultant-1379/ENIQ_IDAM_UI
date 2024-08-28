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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/realm/ServicesService", "org/forgerock/openam/ui/admin/views/common/schema/NewSchemaComponent"], function ($, _, AbstractView, Router, ServicesService, NewSchemaComponent) {
    return AbstractView.extend({
        render: function render(_ref) {
            var _this = this;

            var _ref2 = _slicedToArray(_ref, 3),
                realmPath = _ref2[0],
                serviceInstance = _ref2[1],
                subSchemaType = _ref2[2];

            var newSchemaComponent = new NewSchemaComponent({
                data: {
                    realmPath: realmPath,
                    serviceInstance: serviceInstance,
                    subSchemaType: subSchemaType,
                    title: $.t("console.services.subSchema.new.title", { subSchema: subSchemaType })
                },

                listRoute: Router.configuration.routes.realmsServiceEdit,
                listRouteArgs: _.map([realmPath, serviceInstance], encodeURIComponent),

                editRoute: Router.configuration.routes.realmsServiceSubSchemaEdit,
                editRouteArgs: function editRouteArgs(newInstanceId) {
                    return _.map([realmPath, serviceInstance, subSchemaType, newInstanceId], encodeURIComponent);
                },

                template: "templates/admin/views/common/schema/NewServiceSubSchemaTemplate.html",

                getInitialState: function getInitialState() {
                    return ServicesService.type.subSchema.instance.getInitialState(realmPath, serviceInstance, subSchemaType);
                },
                createInstance: function createInstance(values) {
                    return ServicesService.type.subSchema.instance.create(realmPath, serviceInstance, subSchemaType, values);
                }
            });

            this.parentRender(function () {
                _this.$el.append(newSchemaComponent.render().$el);
            });
        }
    });
});
