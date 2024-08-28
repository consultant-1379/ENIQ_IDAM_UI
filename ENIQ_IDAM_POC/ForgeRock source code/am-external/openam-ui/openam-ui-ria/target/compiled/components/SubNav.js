define(["exports", "react", "react-bootstrap", "components/Breadcrumb"], function (exports, _react, _reactBootstrap, _Breadcrumb) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * A Sub navigation component.
     * @module components/SubNav
     * @param {ReactNode[]} children Children to add within this component
     * @param {Boolean} fluid If set to true, the subnav will render full-width
     * @returns {ReactElement} Renderable React element
     */
    var SubNav = function SubNav(_ref) {
        var children = _ref.children,
            fluid = _ref.fluid;

        return _react2.default.createElement(
            "div",
            { className: "subnav-container" },
            _react2.default.createElement(
                _reactBootstrap.Grid,
                { fluid: fluid },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        "nav",
                        { className: "navbar navbar-default" },
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { className: "navbar-header", lg: 2, md: 3, sm: 3, xs: 4 },
                            _react2.default.createElement(
                                "div",
                                { className: "ellipsis" },
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    children
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { className: "ellipsis", lg: 10, md: 9, sm: 9, xs: 8 },
                            _react2.default.createElement(_Breadcrumb2.default, null)
                        )
                    )
                )
            )
        );
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

    SubNav.propTypes = {
        children: _react.PropTypes.node,
        fluid: _react.PropTypes.boolean
    };

    exports.default = SubNav;
});
