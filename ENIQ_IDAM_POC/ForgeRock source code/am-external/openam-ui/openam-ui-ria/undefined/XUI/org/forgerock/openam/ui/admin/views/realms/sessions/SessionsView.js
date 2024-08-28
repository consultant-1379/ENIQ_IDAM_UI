define(["exports", "lodash", "react-bootstrap", "i18next", "react", "react-select", "org/forgerock/openam/ui/admin/services/global/SessionsService", "org/forgerock/openam/ui/admin/services/realm/UsersService", "components/CallToAction", "components/PageDescription", "./SessionsTable", "components/PageHeader", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _lodash, _reactBootstrap, _i18next, _react, _reactSelect, _SessionsService, _UsersService, _CallToAction, _PageDescription, _SessionsTable, _PageHeader, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _react2 = _interopRequireDefault(_react);

    var _reactSelect2 = _interopRequireDefault(_reactSelect);

    var _CallToAction2 = _interopRequireDefault(_CallToAction);

    var _PageDescription2 = _interopRequireDefault(_PageDescription);

    var _SessionsTable2 = _interopRequireDefault(_SessionsTable);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

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

    var fetchUsersByPartialUsername = _lodash2.default.debounce(function (realm, username, callback) {
        if (_lodash2.default.isEmpty(username)) {
            callback(null, { options: [] });
        } else {
            (0, _UsersService.getByUsernameStartsWith)(realm, username).then(function (response) {
                callback(null, {
                    options: _lodash2.default.map(response, function (user) {
                        return { label: user, value: user };
                    })
                });
            }, function (error) {
                return callback(error.statusText);
            });
        }
    }, 300);

    var SessionsView = function (_Component) {
        _inherits(SessionsView, _Component);

        function SessionsView(props) {
            _classCallCheck(this, SessionsView);

            var _this = _possibleConstructorReturn(this, (SessionsView.__proto__ || Object.getPrototypeOf(SessionsView)).call(this, props));

            _this.handleSelectAsyncOnChange = _this.handleSelectAsyncOnChange.bind(_this);
            _this.handleInvalidateSessions = _this.handleInvalidateSessions.bind(_this);
            _this.fetchSessionsByUsernameAndRealm = _this.fetchSessionsByUsernameAndRealm.bind(_this);
            _this.state = {
                sessions: []
            };
            return _this;
        }

        _createClass(SessionsView, [{
            key: "handleInvalidateSessions",
            value: function handleInvalidateSessions(realm, sessions) {
                var _this2 = this;

                var handles = _lodash2.default.pluck(sessions, "sessionHandle");

                (0, _SessionsService.invalidateByHandles)(handles).then(function () {
                    return _this2.fetchSessionsByUsernameAndRealm(realm, _this2.state.username);
                });
            }
        }, {
            key: "fetchSessionsByUsernameAndRealm",
            value: function fetchSessionsByUsernameAndRealm(realm, username) {
                var _this3 = this;

                (0, _SessionsService.getByRealmAndUsername)(realm, username).then(function (response) {
                    _this3.setState({ sessions: response });
                });
            }
        }, {
            key: "handleSelectAsyncOnChange",
            value: function handleSelectAsyncOnChange(realm, newValue) {
                var username = _lodash2.default.get(newValue, "value");
                this.setState({
                    sessions: [],
                    username: username
                });

                if (username) {
                    this.fetchSessionsByUsernameAndRealm(realm, username);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var content = void 0;
                var realm = this.props.router.params[0];

                if (this.state.sessions.length) {
                    content = _react2.default.createElement(_SessionsTable2.default, {
                        data: this.state.sessions,
                        onSessionsInvalidate: _lodash2.default.partial(this.handleInvalidateSessions, realm),
                        username: this.state.username
                    });
                } else if (this.state.username) {
                    content = _react2.default.createElement(
                        _reactBootstrap.Panel,
                        null,
                        _react2.default.createElement(
                            _CallToAction2.default,
                            null,
                            _react2.default.createElement(
                                "h3",
                                null,
                                (0, _i18next.t)("console.sessions.table.noResults")
                            )
                        )
                    );
                }

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.sessions.title") }),
                    _react2.default.createElement(
                        _PageDescription2.default,
                        null,
                        (0, _i18next.t)("console.sessions.search.intro")
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: "findAUser" },
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            { srOnly: true },
                            (0, _i18next.t)("console.sessions.search.title")
                        ),
                        _react2.default.createElement(_reactSelect2.default.Async, {
                            autoload: false,
                            inputProps: {
                                id: "findAUser"
                            },
                            isLoading: true,
                            loadOptions: _lodash2.default.partial(fetchUsersByPartialUsername, realm),
                            noResultsText: (0, _i18next.t)("console.sessions.search.noResults"),
                            onChange: _lodash2.default.partial(this.handleSelectAsyncOnChange, realm),
                            placeholder: (0, _i18next.t)("console.sessions.search.placeholder"),
                            searchPromptText: (0, _i18next.t)("console.sessions.search.searchPrompt"),
                            value: this.state.username
                        })
                    ),
                    content
                );
            }
        }]);

        return SessionsView;
    }(_react.Component);

    SessionsView.propTypes = {
        router: _withRouterPropType2.default
    };

    exports.default = (0, _withRouter2.default)(SessionsView);
});
//# sourceMappingURL=SessionsView.js.map
