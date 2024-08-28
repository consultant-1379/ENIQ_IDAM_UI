define(["exports", "react-select", "lodash", "react"], function (exports, _reactSelect, _lodash, _react) {
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

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    var ArrayField = function ArrayField(_ref) {
        var formData = _ref.formData,
            onChange = _ref.onChange,
            restProps = _objectWithoutProperties(_ref, ["formData", "onChange"]);

        var handleOnChange = function handleOnChange(value) {
            return onChange((0, _lodash.pluck)(value, "value"));
        };

        return _react2.default.createElement(_reactSelect.Creatable, _extends({}, restProps, {
            multi: true,
            onChange: handleOnChange,
            options: (0, _lodash.map)(formData, function (data) {
                return { label: data, value: data };
            }),
            value: (0, _lodash.map)(formData, function (data) {
                return { label: data, value: data };
            })
        }));
    };

    ArrayField.propTypes = {
        formData: _react.PropTypes.arrayOf(_react.PropTypes.string),
        onChange: _react.PropTypes.func.isRequired
    };

    exports.default = ArrayField;
});
//# sourceMappingURL=ArrayField.js.map
