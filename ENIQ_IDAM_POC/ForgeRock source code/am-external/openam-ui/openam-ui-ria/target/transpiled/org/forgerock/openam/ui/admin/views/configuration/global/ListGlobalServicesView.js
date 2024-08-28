define(["exports", "react-bootstrap", "i18next", "react", "components/PageHeader", "components/PageDescription", "org/forgerock/openam/ui/admin/services/global/ServicesService"], function (exports, _reactBootstrap, _i18next, _react, _PageHeader, _PageDescription, _ServicesService) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

    var _PageDescription2 = _interopRequireDefault(_PageDescription);

    var _ServicesService2 = _interopRequireDefault(_ServicesService);

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

    var ListGlobalServicesView = function (_Component) {
        _inherits(ListGlobalServicesView, _Component);

        function ListGlobalServicesView(props) {
            _classCallCheck(this, ListGlobalServicesView);

            var _this = _possibleConstructorReturn(this, (ListGlobalServicesView.__proto__ || Object.getPrototypeOf(ListGlobalServicesView)).call(this, props));

            _this.state = {
                items: []
            };
            return _this;
        }

        _createClass(ListGlobalServicesView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                _ServicesService2.default.instance.getAll().then(function (response) {
                    _this2.setState({ items: response });
                });
            }
        }, {
            key: "render",
            value: function render() {
                var items = this.state.items.map(function (item) {
                    return _react2.default.createElement(
                        _reactBootstrap.ListGroupItem,
                        { href: "#configure/global-services/" + encodeURIComponent(item._id), key: item._id },
                        item.name
                    );
                });

                return _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("config.AppConfiguration.Navigation.links.configure.global-services") }),
                    _react2.default.createElement(
                        _PageDescription2.default,
                        null,
                        (0, _i18next.t)("console.configuration.globalServices.description")
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.ListGroup,
                        null,
                        items
                    )
                );
            }
        }]);

        return ListGlobalServicesView;
    }(_react.Component);

    exports.default = ListGlobalServicesView;
});
