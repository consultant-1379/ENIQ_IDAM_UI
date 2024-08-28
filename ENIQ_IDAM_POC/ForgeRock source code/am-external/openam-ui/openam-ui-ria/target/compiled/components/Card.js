define(["exports", "react"], function (exports, _react) {
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

    /**
     * A card.
     * @module components/Card
     * @param {Object} props Properties passed to this component
     * @param {string} props.href The link to the associated page
     * @param {ReactNode} props.children Children to add within this component
     * @param {string} props.icon Icon to display on the card
     * @returns {ReactElement} Renderable React element
     */
    var Card = function Card(_ref) {
        var href = _ref.href,
            children = _ref.children,
            icon = _ref.icon;
        return _react2.default.createElement(
            "div",
            { className: "panel-default panel am-panel-card", "data-panel-card": true },
            _react2.default.createElement(
                "a",
                { href: href },
                _react2.default.createElement(
                    "div",
                    { className: "card-body" },
                    _react2.default.createElement(
                        "div",
                        { className: "card-icon-circle card-icon-circle-sm bg-primary" },
                        _react2.default.createElement("i", { className: "fa " + icon })
                    ),
                    children
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
        * Copyright 2016-2017 ForgeRock AS.
        */

    Card.propTypes = {
        children: _react2.default.PropTypes.node,
        href: _react2.default.PropTypes.string.isRequired,
        icon: _react2.default.PropTypes.string.isRequired
    };

    exports.default = Card;
});
