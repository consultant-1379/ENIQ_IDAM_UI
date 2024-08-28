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

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var Checkbox = function Checkbox(props) {
        return (
            // Disabled as structure is required for Ti-Ta-Toggle
            /* eslint-disable jsx-a11y/label-has-for */
            _react2.default.createElement(
                "div",
                { className: "checkbox checkbox-slider-primary checkbox-slider checkbox-slider--b" },
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", _extends({}, props, { type: "checkbox" })),
                    _react2.default.createElement("span", null),
                    " "
                )
            )
        );
    };

    Checkbox.propTypes = {
        checked: _react2.default.PropTypes.bool.isRequired,
        id: _react2.default.PropTypes.string.isRequired,
        onChange: _react2.default.PropTypes.func.isRequired
    };

    exports.default = Checkbox;
});
