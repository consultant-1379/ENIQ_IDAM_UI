define(["exports", "lodash"], function (exports, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var nestedFilter = function nestedFilter(children, filter) {
        return _lodash2.default.filter(children, function (item) {
            if (item.path && _lodash2.default.includes(item.path.toLowerCase(), filter.toLowerCase())) {
                return true;
            } else if (item.children) {
                item.children = nestedFilter(item.children, filter);
                return !_lodash2.default.isEmpty(item.children);
            }
        });
    }; /*
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
        * Copyright 2017 ForgeRock AS.
        */

    /**
     * @module org/forgerock/openam/ui/admin/views/api/filterTree
     */

    var filterTree = function filterTree(children) {
        var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        return nestedFilter(_lodash2.default.cloneDeep(children), filter);
    };

    exports.default = filterTree;
});
