define(["exports", "react-bootstrap", "react"], function (exports, _reactBootstrap, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    var SectionMediaHeader = function SectionMediaHeader(_ref) {
        var icon = _ref.icon,
            onClick = _ref.onClick,
            title = _ref.title;

        var onHeaderClick = function onHeaderClick() {
            onClick(title);
        };
        return _react2.default.createElement(
            _reactBootstrap.Media,
            {
                onClick: onHeaderClick,
                role: "link"
            },
            _react2.default.createElement(
                _reactBootstrap.Media.Left,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "bg-primary" },
                    _react2.default.createElement("i", { className: "fa fa-" + icon })
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Media.Body,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Media.Heading,
                    null,
                    title
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Media.Right,
                { align: "middle" },
                _react2.default.createElement("i", { className: "fa fa-pencil" })
            )
        );
    };

    SectionMediaHeader.propTypes = {
        icon: _react.PropTypes.string.isRequired,
        onClick: _react.PropTypes.func.isRequired,
        title: _react.PropTypes.string.isRequired
    };

    exports.default = SectionMediaHeader;
});
