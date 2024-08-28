define(["exports", "lodash", "react-bootstrap", "i18next", "components/Block", "react", "./SessionsTableRow", "store/index"], function (exports, _lodash, _reactBootstrap, _i18next, _Block, _react, _SessionsTableRow, _index) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _Block2 = _interopRequireDefault(_Block);

    var _react2 = _interopRequireDefault(_react);

    var _SessionsTableRow2 = _interopRequireDefault(_SessionsTableRow);

    var _index2 = _interopRequireDefault(_index);

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

    var findOwnSession = function findOwnSession(dataList) {
        return _lodash2.default.find(dataList, function (data) {
            return data.sessionHandle === _index2.default.getState().local.session.sessionHandle;
        });
    };

    var SessionsTable = function (_Component) {
        _inherits(SessionsTable, _Component);

        function SessionsTable(props) {
            _classCallCheck(this, SessionsTable);

            var _this = _possibleConstructorReturn(this, (SessionsTable.__proto__ || Object.getPrototypeOf(SessionsTable)).call(this, props));

            _this.handleSelectAll = _this.handleSelectAll.bind(_this);
            _this.handleSelectRow = _this.handleSelectRow.bind(_this);
            _this.handleDeleteRow = _this.handleDeleteRow.bind(_this);
            _this.handleDeleteSelected = _this.handleDeleteSelected.bind(_this);
            _this.state = {
                checked: [],
                ownSession: findOwnSession(_this.props.data)
            };
            return _this;
        }

        _createClass(SessionsTable, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var updated = _lodash2.default.findByValues(nextProps.data, "sessionHandle", _lodash2.default.pluck(this.state.checked, "sessionHandle"));
                this.setState({
                    checked: updated,
                    ownSession: findOwnSession(nextProps.data)
                });
            }
        }, {
            key: "handleDeleteRow",
            value: function handleDeleteRow(session) {
                this.props.onSessionsInvalidate([session]);
            }
        }, {
            key: "handleDeleteSelected",
            value: function handleDeleteSelected() {
                this.props.onSessionsInvalidate(this.state.checked);
            }
        }, {
            key: "handleSelectAll",
            value: function handleSelectAll(e) {
                this.setState({
                    checked: e.target.checked ? _lodash2.default.without(this.props.data, this.state.ownSession) : []
                });
            }
        }, {
            key: "handleSelectRow",
            value: function handleSelectRow(session, checked) {
                var updated = checked ? this.state.checked.concat(session) : _lodash2.default.without(this.state.checked, session);
                this.setState({ checked: updated });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var isChecked = function isChecked(session) {
                    return _lodash2.default.includes(_this2.state.checked, session);
                };
                var isAllChecked = function isAllChecked() {
                    var numberOfDeletableSessions = _this2.state.ownSession ? _this2.props.data.length - 1 : _this2.props.data.length;
                    return numberOfDeletableSessions > 0 && _this2.state.checked.length === numberOfDeletableSessions;
                };

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.ButtonToolbar,
                        { className: "page-toolbar" },
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { disabled: !this.state.checked.length, onClick: this.handleDeleteSelected },
                            _react2.default.createElement("span", { className: "fa fa-close" }),
                            " ",
                            (0, _i18next.t)("console.sessions.invalidateSelected")
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        null,
                        _react2.default.createElement(
                            _Block2.default,
                            { header: this.props.username },
                            _react2.default.createElement(
                                _reactBootstrap.Table,
                                null,
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            { className: "select-all-header-cell" },
                                            _react2.default.createElement(
                                                _reactBootstrap.ControlLabel,
                                                { htmlFor: "selectAll", srOnly: true },
                                                (0, _i18next.t)("common.form.selectAll")
                                            ),
                                            _react2.default.createElement("input", {
                                                checked: isAllChecked(),
                                                id: "selectAll",
                                                onChange: this.handleSelectAll,
                                                type: "checkbox"
                                            })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            (0, _i18next.t)("console.sessions.table.headers.0")
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            (0, _i18next.t)("console.sessions.table.headers.1")
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            (0, _i18next.t)("console.sessions.table.headers.2")
                                        ),
                                        _react2.default.createElement("th", { className: "fr-col-btn-1" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _lodash2.default.map(this.props.data, function (session) {
                                        return _react2.default.createElement(_SessionsTableRow2.default, {
                                            checked: isChecked(session),
                                            data: session,
                                            onDelete: _this2.handleDeleteRow,
                                            onSelect: _this2.handleSelectRow,
                                            sessionHandle: _index2.default.getState().local.session.sessionHandle
                                        });
                                    })
                                )
                            )
                        )
                    )
                );
            }
        }]);

        return SessionsTable;
    }(_react.Component);

    SessionsTable.propTypes = {
        data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
            idleTime: _react.PropTypes.string,
            maxIdleExpirationTime: _react.PropTypes.string,
            maxSessionExpirationTime: _react.PropTypes.string,
            sessionHandle: _react.PropTypes.string
        })),
        onSessionsInvalidate: _react.PropTypes.func.isRequired,
        username: _react.PropTypes.string.isRequired
    };

    exports.default = SessionsTable;
});
