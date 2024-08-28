define(["exports", "lodash", "org/forgerock/openam/ui/admin/services/global/ApiService", "react-bootstrap", "i18next", "./calculateHeight", "org/forgerock/commons/ui/common/util/Constants", "./filterTree", "react", "org/forgerock/commons/ui/common/main/Router", "components/Tree", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _lodash, _ApiService, _reactBootstrap, _i18next, _calculateHeight, _Constants, _filterTree, _react, _Router, _Tree, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _calculateHeight2 = _interopRequireDefault(_calculateHeight);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _filterTree2 = _interopRequireDefault(_filterTree);

    var _react2 = _interopRequireDefault(_react);

    var _Router2 = _interopRequireDefault(_Router);

    var _Tree2 = _interopRequireDefault(_Tree);

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

    var getIframeSource = function getIframeSource(apiPath) {
        return _Constants2.default.context + "/api/?url=" + _Constants2.default.context + "/json" + (0, _lodash.map)(apiPath.split("/"), function (item) {
            return encodeURIComponent(item);
        }).join("/") + "?_api";
    };

    var ListApiView = function (_Component) {
        _inherits(ListApiView, _Component);

        function ListApiView(props) {
            _classCallCheck(this, ListApiView);

            var _this = _possibleConstructorReturn(this, (ListApiView.__proto__ || Object.getPrototypeOf(ListApiView)).call(this, props));

            _this.handlePathSelect = _this.handlePathSelect.bind(_this);
            _this.handleSearchFilter = _this.handleSearchFilter.bind(_this);
            _this.resize = _this.resize.bind(_this);

            var apiPath = props.router.params[0];
            var iframeSource = apiPath ? getIframeSource("/" + apiPath) : "";

            _this.state = {
                collapsed: true,
                filteredTree: [],
                filter: "",
                initialTree: [],
                iframeSource: iframeSource,
                containerHeight: (0, _calculateHeight2.default)()
            };
            return _this;
        }

        _createClass(ListApiView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                (0, _ApiService.getPathsTree)().then(function (response) {
                    /*
                     * Some objects are just containers for other objects, and so do not have corresponding APIs and do not
                     * contain the path property (which is used to add links to these corresponding APIs).
                     * Because of this we add the objectPath to all the items and use this 'always present' property to
                     * ascertain an object's path in the tree.
                     */
                    var addObjectPaths = function addObjectPaths(children) {
                        var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                        return (0, _lodash.map)(children, function (item) {
                            item.objectPath = "" + parentPath + item.id;
                            if (item.children) {
                                item.children = addObjectPaths(item.children, item.objectPath);
                            }
                            return item;
                        });
                    };

                    if (response.length && _this2.state.iframeSource === "") {
                        _this2.routeToPath(response[0].path);
                    }

                    var dataWithObjectPath = addObjectPaths(response);
                    _this2.setState({
                        initialTree: dataWithObjectPath,
                        filteredTree: dataWithObjectPath
                    });
                });
                window.addEventListener("resize", (0, _lodash.debounce)(this.resize, 100));
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener("resize", this.resize);
            }
        }, {
            key: "handleSearchFilter",
            value: function handleSearchFilter(e) {
                var filter = e.target.value;
                this.setState({
                    collapsed: (0, _lodash.isEmpty)(filter),
                    filter: filter,
                    filteredTree: (0, _lodash.isEmpty)(filter) ? this.state.initialTree : (0, _filterTree2.default)(this.state.initialTree, filter)
                });
            }
        }, {
            key: "handlePathSelect",
            value: function handlePathSelect(apiPath) {
                this.routeToPath(apiPath);
            }
        }, {
            key: "resize",
            value: function resize() {
                this.setState({ containerHeight: (0, _calculateHeight2.default)() });
            }
        }, {
            key: "routeToPath",
            value: function routeToPath(apiPath) {
                _Router2.default.routeTo(_Router2.default.configuration.routes.apiExplorer, {
                    args: [apiPath.slice(1)],
                    trigger: true
                });
            }
        }, {
            key: "render",
            value: function render() {
                var realm = this.props.router.params[0];
                var activePaths = (0, _lodash.map)(realm.split("/"), function (value, index, path) {
                    return "/" + path.slice(0, path.length - index).join("/");
                });

                var header = _react2.default.createElement(
                    "div",
                    { className: "input-group" },
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                        onChange: this.handleSearchFilter,
                        placeholder: (0, _i18next.t)("common.form.search"),
                        type: "text"
                    }),
                    _react2.default.createElement(
                        "span",
                        { className: "input-group-addon" },
                        _react2.default.createElement("i", { className: "fa fa-search" })
                    )
                );

                return _react2.default.createElement(
                    _reactBootstrap.Grid,
                    { fluid: "true" },
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 3 },
                            _react2.default.createElement(
                                _reactBootstrap.Panel,
                                {
                                    className: "am-iframe-overflow-scroll row",
                                    header: header,
                                    style: { height: this.state.containerHeight + "px" }
                                },
                                _react2.default.createElement(
                                    "nav",
                                    { className: "sidenav" },
                                    _react2.default.createElement(_Tree2.default, {
                                        activePaths: activePaths,
                                        collapsed: this.state.collapsed,
                                        data: this.state.filteredTree,
                                        filter: this.state.filter,
                                        onNodeSelect: this.handlePathSelect
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 9 },
                            _react2.default.createElement("iframe", {
                                className: "am-iframe-overflow-scroll am-iframe-full-width",
                                src: this.state.iframeSource,
                                style: { height: this.state.containerHeight + "px" },
                                title: (0, _i18next.t)("console.api.explorer.iFrameTitle")
                            })
                        )
                    )
                );
            }
        }]);

        return ListApiView;
    }(_react.Component);

    ListApiView.propTypes = {
        router: _withRouterPropType2.default
    };

    exports.default = (0, _withRouter2.default)(ListApiView);
});
