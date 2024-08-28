define(["exports", "react-bootstrap", "react", "org/forgerock/openam/ui/admin/services/global/ScriptsService"], function (exports, _reactBootstrap, _react, _ScriptsService) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ScriptsService2 = _interopRequireDefault(_ScriptsService);

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

    var ScriptsList = function (_Component) {
        _inherits(ScriptsList, _Component);

        function ScriptsList(props) {
            _classCallCheck(this, ScriptsList);

            var _this = _possibleConstructorReturn(this, (ScriptsList.__proto__ || Object.getPrototypeOf(ScriptsList)).call(this, props));

            _this.state = {
                items: []
            };
            return _this;
        }

        _createClass(ScriptsList, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                _ScriptsService2.default.scripts.getAllDefault(this.props.subSchemaType).then(function (response) {
                    _this2.setState({ items: response });
                });
            }
        }, {
            key: "render",
            value: function render() {
                var items = this.state.items.map(function (item) {
                    return _react2.default.createElement(
                        _reactBootstrap.ListGroupItem,
                        { href: "#realms/%2F/scripts/edit/" + item._id, key: item._id },
                        item.name
                    );
                });

                return _react2.default.createElement(
                    _reactBootstrap.ListGroup,
                    null,
                    items
                );
            }
        }]);

        return ScriptsList;
    }(_react.Component);

    ScriptsList.propTypes = {
        subSchemaType: _react2.default.PropTypes.string.isRequired
    };

    exports.default = ScriptsList;
});
//# sourceMappingURL=ScriptsList.js.map
