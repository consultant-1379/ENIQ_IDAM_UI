define(["exports", "react-bootstrap", "i18next", "react"], function (exports, _reactBootstrap, _i18next, _react) {
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

    var ListTreesToolbar = function ListTreesToolbar(_ref) {
        var isDeleteDisabled = _ref.isDeleteDisabled,
            onDelete = _ref.onDelete,
            newHref = _ref.newHref,
            numberSelected = _ref.numberSelected;
        return _react2.default.createElement(
            _reactBootstrap.ButtonToolbar,
            { className: "page-toolbar" },
            _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: "primary", href: newHref },
                _react2.default.createElement("i", { className: "fa fa-plus" }),
                " ",
                (0, _i18next.t)("console.authentication.trees.list.callToAction.button")
            ),
            _react2.default.createElement(
                _reactBootstrap.Button,
                { disabled: isDeleteDisabled, onClick: onDelete },
                _react2.default.createElement("i", { className: "fa fa-close" }),
                " ",
                (0, _i18next.t)("common.form.delete"),
                " ",
                numberSelected ? "(" + numberSelected + ")" : ""
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

    ListTreesToolbar.propTypes = {
        isDeleteDisabled: _react.PropTypes.bool.isRequired,
        newHref: _react.PropTypes.string.isRequired,
        numberSelected: _react.PropTypes.number.isRequired,
        onDelete: _react.PropTypes.func.isRequired
    };

    exports.default = ListTreesToolbar;
});
