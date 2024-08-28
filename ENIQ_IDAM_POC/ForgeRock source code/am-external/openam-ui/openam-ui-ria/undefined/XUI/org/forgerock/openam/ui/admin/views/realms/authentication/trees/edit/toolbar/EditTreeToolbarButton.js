define(["exports", "react-bootstrap", "classnames", "react"], function (exports, _reactBootstrap, _classnames, _react) {
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

    var EditTreeToolbarButton = function EditTreeToolbarButton(props) {
        var className = props.className,
            title = props.title,
            restProps = _objectWithoutProperties(props, ["className", "title"]);

        return _react2.default.createElement(_reactBootstrap.Button, _extends({}, restProps, {
            className: (0, _classnames2.default)(className, {
                "fr-btn-secondary": true
            }),
            "data-title": title
        }));
    };

    EditTreeToolbarButton.propTypes = {
        className: _react.PropTypes.string,
        title: _react.PropTypes.string // required by tests
    };

    exports.default = EditTreeToolbarButton;
});
//# sourceMappingURL=EditTreeToolbarButton.js.map
