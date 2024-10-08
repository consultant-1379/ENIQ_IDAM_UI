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

    var TitatoggleWidget = function TitatoggleWidget(_ref) {
        var onChange = _ref.onChange,
            id = _ref.id,
            value = _ref.value;

        var handleOnChange = function handleOnChange(event) {
            return onChange(event.target.checked);
        };

        return (
            // Disabled as structure is required for Ti-Ta-Toggle
            /* eslint-disable jsx-a11y/label-has-for */
            _react2.default.createElement(
                "div",
                { className: "checkbox checkbox-slider-primary checkbox-slider checkbox-slider--b" },
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", {
                        checked: value,
                        id: id,
                        onChange: handleOnChange,
                        type: "checkbox",
                        value: value
                    }),
                    _react2.default.createElement("span", null),
                    " "
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

    TitatoggleWidget.propTypes = {
        id: _react.PropTypes.string.isRequired,
        onChange: _react.PropTypes.func.isRequired,
        value: _react.PropTypes.bool.isRequired
    };

    exports.default = TitatoggleWidget;
});
//# sourceMappingURL=TitatoggleWidget.js.map
