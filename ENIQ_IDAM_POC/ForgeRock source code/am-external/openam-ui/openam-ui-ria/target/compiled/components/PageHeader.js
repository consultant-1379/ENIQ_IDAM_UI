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
     * A page header which displays the title, and combination of the optional elements,
     * buttons, icon and the page type.
     * @module components/PageHeader
     * @param {Object} props Properties passed to this component
     * @param {string} props.title Text to display for the header
     * @param {ReactNode}[props.children] Buttons to add within this header
     * @param {string} [props.type] Text to display for the instance type
     * @param {string} [props.icon] Icon to display in the header
     * @returns {ReactElement} Renderable React element
     */
    var PageHeader = function PageHeader(_ref) {
        var children = _ref.children,
            icon = _ref.icon,
            title = _ref.title,
            type = _ref.type;

        var buttonGroupClassName = type ? "deep" : "shallow";

        var circleWithIcon = icon ? _react2.default.createElement(
            "span",
            { className: "header-icon pull-left bg-primary" },
            _react2.default.createElement("i", { className: "fa fa-" + icon })
        ) : null;

        var pageType = type ? _react2.default.createElement(
            "h4",
            { className: "page-type" },
            type
        ) : null;

        return _react2.default.createElement(
            "header",
            { className: "page-header page-header-no-border clearfix" },
            circleWithIcon,
            _react2.default.createElement(
                "div",
                { className: "button-group pull-right " + buttonGroupClassName + "-page-header-button-group" },
                children
            ),
            _react2.default.createElement(
                "div",
                { className: "pull-left" },
                pageType,
                _react2.default.createElement(
                    "h1",
                    { className: "wordwrap" },
                    title
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

    PageHeader.propTypes = {
        children: _react2.default.PropTypes.node,
        icon: _react2.default.PropTypes.string,
        title: _react2.default.PropTypes.string.isRequired,
        type: _react2.default.PropTypes.string
    };

    exports.default = PageHeader;
});
