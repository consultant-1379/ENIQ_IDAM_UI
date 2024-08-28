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
 * Copyright 2015-2017 ForgeRock AS.
 */

define(["org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/realm/AuthenticationService", "org/forgerock/openam/ui/admin/views/common/schema/EditSchemaComponent"], function (AbstractView, Router, AuthenticationService, EditSchemaComponent) {
    return AbstractView.extend({
        render: function render(_ref) {
            var _this = this;

            var _ref2 = _slicedToArray(_ref, 3),
                realmPath = _ref2[0],
                moduleType = _ref2[1],
                moduleName = _ref2[2];

            var editComponent = new EditSchemaComponent({
                data: {
                    realmPath: realmPath,
                    moduleType: moduleType,
                    moduleName: moduleName
                },
                template: "templates/admin/views/realms/authentication/modules/EditModuleViewTemplate.html",
                getInstance: function getInstance() {
                    return AuthenticationService.authentication.modules.get(realmPath, moduleName, moduleType);
                },
                updateInstance: function updateInstance(values) {
                    return AuthenticationService.authentication.modules.update(realmPath, moduleName, moduleType, values);
                }
            });

            this.parentRender(function () {
                _this.$el.append(editComponent.render().$el);
            });
        }
    });
});
//# sourceMappingURL=EditModuleView.js.map
