define(["exports", "react", "lodash", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/views/common/navigation/createBreadcrumbs"], function (exports, _react, _lodash, _Router, _createBreadcrumbs) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _createBreadcrumbs2 = _interopRequireDefault(_createBreadcrumbs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * A Breadcrumb uses the current route to determine it's links and titles. An Optional numOfDroppedFragments can be
     * passed in which will drop the given number of fragments from the beginning of the route. The numOfDroppedFragments
     * defaults to 2 so that a route of "#realms/%2F/authentication-trees/edit/Example" would give the breadcrumb of
     * "Authentication - Trees > edit > Example".
     * Will return 'null' if there are no crumbs returned from the createBreadcrumbs call.
     * @module components/Breadcrumb
     * @param {Number} [numOfDroppedFragments] The number of fragments to drop from the beginning of the hash
     * @returns {ReactElement} Renderable React element or null
     */
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
     * Copyright 2017 ForgeRock AS.
     */

    var Breadcrumb = function Breadcrumb(_ref) {
        var numOfDroppedFragments = _ref.numOfDroppedFragments;

        var crumbs = (0, _createBreadcrumbs2.default)(_Router.currentRoute.pattern, numOfDroppedFragments);

        return crumbs ? _react2.default.createElement(
            "ol",
            { className: "breadcrumb" },
            (0, _lodash.map)(crumbs, function (_ref2) {
                var path = _ref2.path,
                    title = _ref2.title;

                if (path) {
                    return _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: path },
                            title
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        "li",
                        null,
                        title
                    );
                }
            })
        ) : null;
    };

    Breadcrumb.propTypes = {
        numOfDroppedFragments: _react.PropTypes.Number
    };

    exports.default = Breadcrumb;
});
//# sourceMappingURL=Breadcrumb.js.map
