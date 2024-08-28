define(["exports", "react-bootstrap", "i18next", "react", "components/PageDescription", "components/PageHeader", "components/Card", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType", "org/forgerock/openam/ui/admin/services/realm/AgentsService"], function (exports, _reactBootstrap, _i18next, _react, _PageDescription, _PageHeader, _Card, _withRouter, _withRouterPropType, _AgentsService) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _PageDescription2 = _interopRequireDefault(_PageDescription);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

    var _Card2 = _interopRequireDefault(_Card);

    var _withRouter2 = _interopRequireDefault(_withRouter);

    var _withRouterPropType2 = _interopRequireDefault(_withRouterPropType);

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

    var SelectAgentView = function (_Component) {
        _inherits(SelectAgentView, _Component);

        function SelectAgentView(props) {
            _classCallCheck(this, SelectAgentView);

            var _this = _possibleConstructorReturn(this, (SelectAgentView.__proto__ || Object.getPrototypeOf(SelectAgentView)).call(this, props));

            _this.state = {
                types: []
            };
            return _this;
        }

        _createClass(SelectAgentView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                (0, _AgentsService.getCreatableTypes)(this.props.router.params[0]).then(function (response) {
                    _this2.setState({ types: response });
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var creatableTypes = this.state.types.map(function (type) {
                    return _react2.default.createElement(
                        _reactBootstrap.Col,
                        { key: type._id, md: 4, sm: 6 },
                        _react2.default.createElement(
                            _Card2.default,
                            {
                                href: "#realms/" + encodeURIComponent(_this3.props.router.params[0]) + "/applications-agents/new/" + encodeURIComponent(type._id),
                                icon: "fa-male"
                            },
                            _react2.default.createElement(
                                "h3",
                                { className: "card-name card-name-sm am-text-lines-two text-primary hidden-md" },
                                type._id
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "text-muted small am-text-lines-two ellipsis-wrap" },
                                type.name
                            )
                        )
                    );
                });

                var footer = _react2.default.createElement(
                    _reactBootstrap.Clearfix,
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "pull-right" },
                        _react2.default.createElement(
                            "a",
                            {
                                className: "btn fr-btn-secondary",
                                href: "#realms/" + encodeURIComponent(this.props.router.params[0]) + "/applications-agents"
                            },
                            (0, _i18next.t)("common.form.cancel")
                        )
                    )
                );

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.applications.agents.select.title") }),
                    _react2.default.createElement(
                        _PageDescription2.default,
                        null,
                        (0, _i18next.t)("console.applications.agents.select.description")
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        { className: "panel panel-default", footer: footer },
                        _react2.default.createElement(
                            "div",
                            { className: "grid-list" },
                            creatableTypes
                        )
                    )
                );
            }
        }]);

        return SelectAgentView;
    }(_react.Component);

    SelectAgentView.propTypes = {
        router: _withRouterPropType2.default
    };

    exports.default = (0, _withRouter2.default)(SelectAgentView);
});
