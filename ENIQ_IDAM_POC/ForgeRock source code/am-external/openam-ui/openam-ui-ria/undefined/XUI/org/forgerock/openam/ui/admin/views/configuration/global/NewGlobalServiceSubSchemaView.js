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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/global/ServicesService", "org/forgerock/openam/ui/admin/views/common/Backlink", "org/forgerock/openam/ui/admin/views/common/schema/NewSchemaComponent"], function ($, _, AbstractView, Router, ServicesService, Backlink, NewSchemaComponent) {
    var NewGlobalServiceSubSchemaView = AbstractView.extend({
        template: "templates/admin/views/configuration/EditGlobalConfigurationBaseTemplate.html",
        render: function render(_ref) {
            var _this = this;

            var _ref2 = _slicedToArray(_ref, 2),
                serviceInstance = _ref2[0],
                subSchemaType = _ref2[1];

            var newSchemaComponent = new NewSchemaComponent({
                data: {
                    serviceInstance: serviceInstance,
                    subSchemaType: subSchemaType,
                    title: $.t("console.services.subSchema.new.title", { subSchema: subSchemaType })
                },

                listRoute: Router.configuration.routes.editGlobalService,
                listRouteArgs: [encodeURIComponent(serviceInstance)],

                editRoute: Router.configuration.routes.globalServiceSubSchemaEdit,
                editRouteArgs: function editRouteArgs(newInstanceId) {
                    return _.map([serviceInstance, subSchemaType, newInstanceId], encodeURIComponent);
                },

                template: "templates/admin/views/common/schema/NewServiceSubSchemaTemplate.html",

                getInitialState: function getInitialState() {
                    return ServicesService.type.subSchema.instance.getInitialState(serviceInstance, subSchemaType);
                },
                createInstance: function createInstance(values) {
                    return ServicesService.type.subSchema.instance.create(serviceInstance, subSchemaType, values);
                }
            });

            this.parentRender(function () {
                new Backlink().render();
                _this.$el.find("[data-global-configuration]").append(newSchemaComponent.render().$el);
            });
        }
    });

    return new NewGlobalServiceSubSchemaView();
});
//# sourceMappingURL=NewGlobalServiceSubSchemaView.js.map
