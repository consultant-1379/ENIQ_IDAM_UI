define(["exports", "react", "./HeaderSelection"], function (exports, _react, _HeaderSelection) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _HeaderSelection2 = _interopRequireDefault(_HeaderSelection);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
    * Table row selection component.
    * @param {object} props Object properties passed to the component
    * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/custom-multi-select-table.js
    * @returns {object} react row selection component
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

    var RowSelection = function RowSelection(props) {
        var checked = props.checked,
            disabled = props.disabled,
            onChange = props.onChange,
            rowIndex = props.rowIndex;

        var onSelect = function onSelect(event) {
            onChange(event, rowIndex);
        };

        if (rowIndex === "Header") {
            return _react2.default.createElement(
                "div",
                { className: "checkbox" },
                _react2.default.createElement(_HeaderSelection2.default, props),
                _react2.default.createElement("label", { htmlFor: "checkbox" + rowIndex })
            );
        } else {
            return _react2.default.createElement(
                "div",
                { className: "checkbox" },
                _react2.default.createElement("input", {
                    checked: checked,
                    disabled: disabled,
                    id: "checkbox" + rowIndex,
                    name: "checkbox" + rowIndex,
                    onChange: onSelect,
                    type: "checkbox"
                }),
                _react2.default.createElement("label", { htmlFor: "checkbox" + rowIndex })
            );
        }
    };

    RowSelection.propTypes = {
        checked: _react.PropTypes.bool.isRequired,
        disabled: _react.PropTypes.bool.isRequired,
        onChange: _react.PropTypes.func.isRequired,
        rowIndex: _react2.default.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
    };

    exports.default = RowSelection;
});
