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

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var HeaderSelection = function (_Component) {
        _inherits(HeaderSelection, _Component);

        function HeaderSelection(props) {
            _classCallCheck(this, HeaderSelection);

            var _this = _possibleConstructorReturn(this, (HeaderSelection.__proto__ || Object.getPrototypeOf(HeaderSelection)).call(this, props));

            _this.setRef = _this.setRef.bind(_this);
            return _this;
        }

        _createClass(HeaderSelection, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.update(this.props.checked);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(props) {
                this.update(props.checked);
            }
        }, {
            key: "update",
            value: function update(checked) {
                this.input.indeterminate = checked === "indeterminate";
            }
        }, {
            key: "setRef",
            value: function setRef(input) {
                this.input = input;
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement("input", {
                    checked: this.props.checked,
                    className: "react-bs-select-all",
                    id: "checkbox" + this.props.rowIndex,
                    name: "checkbox" + this.props.rowIndex,
                    onChange: this.props.onChange,
                    ref: this.setRef,
                    type: "checkbox"
                });
            }
        }]);

        return HeaderSelection;
    }(_react.Component);

    HeaderSelection.propTypes = {
        checked: _react.PropTypes.bool.isRequired,
        onChange: _react.PropTypes.func.isRequired,
        rowIndex: _react.PropTypes.string.isRequired
    };

    exports.default = HeaderSelection;
});
