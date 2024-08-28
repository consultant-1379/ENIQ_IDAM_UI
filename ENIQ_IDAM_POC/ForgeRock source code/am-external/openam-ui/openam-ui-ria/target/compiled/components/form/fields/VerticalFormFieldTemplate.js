define(["exports", "react-bootstrap", "lodash", "react"], function (exports, _reactBootstrap, _lodash, _react) {
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
     * Defines inner organization of each field (each form row).
     * @module components/form/fields/VerticalFormFieldTemplate
     * @param {ReactElement} props.children The field or widget component instance for this field row.
     * @param {string} props.id The id of the field in the hierarchy.
     * @param {string} props.label The computed label for this field, as a string.
     * @param {string} props.rawDescription Description of this field.
     * @param {string[]} props.rawErrors Array of errrors.
     * @returns {ReactElement} custom field template
     */
    var VerticalFormFieldTemplate = function VerticalFormFieldTemplate(_ref) {
        var children = _ref.children,
            id = _ref.id,
            label = _ref.label,
            rawDescription = _ref.rawDescription,
            rawErrors = _ref.rawErrors;

        // Root object needs to not display label or other formatting.
        var isRoot = id.split("_").length < 2;
        if (isRoot) {
            return _react2.default.createElement(
                "div",
                null,
                children
            );
        }

        var hasErrors = !(0, _lodash.isEmpty)(rawErrors);
        var errorList = hasErrors ? _react2.default.createElement(
            "ul",
            { className: "list-unstyled text-danger am-error-detail" },
            (0, _lodash.map)(rawErrors, function (error) {
                return _react2.default.createElement(
                    "li",
                    { className: "small" },
                    error
                );
            })
        ) : null;
        var helpBlock = (0, _lodash.isEmpty)(rawDescription) ? null : _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            rawDescription
        );

        return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: id, validationState: hasErrors ? "error" : null },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                label
            ),
            children,
            errorList,
            helpBlock
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

    VerticalFormFieldTemplate.propTypes = {
        children: _react.PropTypes.objectOf({
            props: _react.PropTypes.objectOf({
                schema: _react.PropTypes.objectOf(_react.PropTypes.any).isRequired
            }).isRequired
        }).isRequired,
        id: _react.PropTypes.string,
        label: _react.PropTypes.string,
        rawDescription: _react.PropTypes.string,
        rawErrors: _react.PropTypes.arrayOf(_react.PropTypes.string)
    };

    exports.default = VerticalFormFieldTemplate;
});
