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

define(["org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/realm/ServicesService", "org/forgerock/openam/ui/admin/views/common/schema/EditSchemaComponent"], function (AbstractView, Router, ServicesService, EditSchemaComponent) {
    return AbstractView.extend({
        render: function render(_ref) {
            var _this = this;

            var _ref2 = _slicedToArray(_ref, 2),
                realmPath = _ref2[0],
                type = _ref2[1];

            var editComponent = new EditSchemaComponent({
                data: {
                    realmPath: realmPath,
                    type: type,
                    headerActions: [{ actionPartial: "form/_Button", data: "delete", title: "common.form.delete", icon: "fa-times" }]
                },
                listRoute: Router.configuration.routes.realmsServices,
                listRouteArgs: [encodeURIComponent(realmPath)],

                template: "templates/admin/views/realms/services/EditServiceTemplate.html",
                subSchemaTemplate: "templates/admin/views/realms/services/SubSchemaListTemplate.html",

                getInstance: function getInstance() {
                    return ServicesService.instance.get(realmPath, type);
                },
                updateInstance: function updateInstance(values) {
                    return ServicesService.instance.update(realmPath, type, values);
                },
                deleteInstance: function deleteInstance() {
                    return ServicesService.instance.remove(realmPath, type);
                },

                getSubSchemaTypes: function getSubSchemaTypes() {
                    return ServicesService.type.subSchema.type.getAll(realmPath, type);
                },
                getSubSchemaCreatableTypes: function getSubSchemaCreatableTypes() {
                    return ServicesService.type.subSchema.type.getCreatables(realmPath, type);
                },
                getSubSchemaInstances: function getSubSchemaInstances() {
                    return ServicesService.type.subSchema.instance.getAll(realmPath, type);
                },
                deleteSubSchemaInstance: function deleteSubSchemaInstance(subSchemaType, subSchemaInstance) {
                    return ServicesService.type.subSchema.instance.remove(realmPath, type, subSchemaType, subSchemaInstance);
                }
            });

            this.parentRender(function () {
                _this.$el.append(editComponent.render().$el);
            });
        }
    });
});
