define(["exports", "classnames", "react"], function (exports, _classnames, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classnames2 = _interopRequireDefault(_classnames);

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

    /**
     * Adds and removes the "fullscreen" className and style.
     * @module components/Fullscreen
     * @param {Boolean} props.isFullscreen Determines if the fullscreen class will be applied or not.
     * @param {Boolean} [props.className] Class names.
     * @returns {ReactElement} Renderable React element
     */
    var Fullscreen = function Fullscreen(_ref) {
        var className = _ref.className,
            isFullscreen = _ref.isFullscreen,
            restProps = _objectWithoutProperties(_ref, ["className", "isFullscreen"]);

        return _react2.default.createElement("div", _extends({}, restProps, {
            className: (0, _classnames2.default)(className, {
                "fullscreen": isFullscreen
            })
        }));
    };

    Fullscreen.propTypes = {
        className: _react.PropTypes.string,
        isFullscreen: _react.PropTypes.bool.isRequired
    };

    exports.default = Fullscreen;
});
//# sourceMappingURL=Fullscreen.js.map
