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

define(["jquery", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/admin/services/global/ServicesService", "org/forgerock/openam/ui/admin/views/common/Backlink", "org/forgerock/openam/ui/admin/views/common/schema/EditSchemaComponent"], function ($, AbstractView, ServicesService, Backlink, EditSchemaComponent) {
    var EditGlobalServiceSubSchemaView = AbstractView.extend({
        template: "templates/admin/views/configuration/EditGlobalConfigurationBaseTemplate.html",
        render: function render(_ref) {
            var _this = this;

            var _ref2 = _slicedToArray(_ref, 5),
                serviceType = _ref2[0],
                subSchemaType = _ref2[1],
                subSchemaInstanceId = _ref2[2],
                subSubSchemaType = _ref2[3],
                subSubSchemaInstanceId = _ref2[4];

            var editComponent = new EditSchemaComponent({
                data: {
                    serviceType: serviceType,
                    subSchemaType: subSchemaType,
                    subSchemaInstanceId: subSchemaInstanceId,
                    subSubSchemaType: subSubSchemaType,
                    subSubSchemaInstanceId: subSubSchemaInstanceId,
                    type: $.t("console.services.subSchema.title", { subSchema: subSubSchemaType })
                },

                template: "templates/admin/views/common/schema/EditServiceSubSubSchemaTemplate.html",

                getInstance: function getInstance() {
                    return ServicesService.type.subSchema.type.subSchema.instance.get(serviceType, subSchemaType, subSchemaInstanceId, subSubSchemaType, subSubSchemaInstanceId);
                },
                updateInstance: function updateInstance(values) {
                    return ServicesService.type.subSchema.type.subSchema.instance.update(serviceType, subSchemaType, subSchemaInstanceId, subSubSchemaType, values);
                }
            });

            this.parentRender(function () {
                new Backlink().render(5);
                _this.$el.find("[data-global-configuration]").append(editComponent.render().$el);
            });
        }
    });

    return new EditGlobalServiceSubSchemaView();
});
