define(["exports", "react-bootstrap", "lodash", "i18next", "react-bootstrap-table", "react", "components/table/cells/dataFieldObjectPath", "components/table/cells/IconCell", "./ListOAuth2ClientsCallToAction", "./ListOAuth2Toolbar", "components/Loading", "components/table/cells/StatusCell", "components/table/Table"], function (exports, _reactBootstrap, _lodash, _i18next, _reactBootstrapTable, _react, _dataFieldObjectPath, _IconCell, _ListOAuth2ClientsCallToAction, _ListOAuth2Toolbar, _Loading, _StatusCell, _Table) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _dataFieldObjectPath2 = _interopRequireDefault(_dataFieldObjectPath);

    var _IconCell2 = _interopRequireDefault(_IconCell);

    var _ListOAuth2ClientsCallToAction2 = _interopRequireDefault(_ListOAuth2ClientsCallToAction);

    var _ListOAuth2Toolbar2 = _interopRequireDefault(_ListOAuth2Toolbar);

    var _Loading2 = _interopRequireDefault(_Loading);

    var _StatusCell2 = _interopRequireDefault(_StatusCell);

    var _Table2 = _interopRequireDefault(_Table);

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

    var ListOAuth2Clients = function (_Component) {
        _inherits(ListOAuth2Clients, _Component);

        function ListOAuth2Clients() {
            _classCallCheck(this, ListOAuth2Clients);

            var _this = _possibleConstructorReturn(this, (ListOAuth2Clients.__proto__ || Object.getPrototypeOf(ListOAuth2Clients)).call(this));

            _this.state = { selectedIds: [] };
            return _this;
        }

        _createClass(ListOAuth2Clients, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var clientsSetHasChanged = !(0, _lodash.isEqual)((0, _lodash.pluck)(this.props.clients, "_id").sort(), (0, _lodash.pluck)(nextProps.clients, "_id").sort());

                if (clientsSetHasChanged) {
                    // deselect everything in case of pagination, items deletion, etc.
                    this.setState({ selectedIds: [] });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var handleOnDelete = function handleOnDelete() {
                    return _this2.props.onDelete(_this2.state.selectedIds);
                };
                var handleRowClick = function handleRowClick(row) {
                    return _this2.props.onEdit(row._id);
                };
                var handleSelectedChange = function handleSelectedChange(ids) {
                    return _this2.setState({ selectedIds: ids });
                };
                var toolbar = void 0;
                var content = void 0;

                if (this.props.isFetching) {
                    content = _react2.default.createElement(_Loading2.default, null);
                } else if ((0, _lodash.isEmpty)(this.props.clients)) {
                    content = _react2.default.createElement(_ListOAuth2ClientsCallToAction2.default, { href: this.props.newHref });
                } else {
                    toolbar = _react2.default.createElement(_ListOAuth2Toolbar2.default, {
                        isDeleteDisabled: !this.state.selectedIds.length,
                        newHref: this.props.newHref,
                        numberSelected: this.state.selectedIds.length,
                        onDelete: handleOnDelete
                    });
                    content = _react2.default.createElement(
                        _Table2.default,
                        {
                            data: this.props.clients,
                            idField: "_id",
                            onRowClick: handleRowClick,
                            onSelectedChange: handleSelectedChange,
                            selectedIds: this.state.selectedIds
                        },
                        _react2.default.createElement(
                            _reactBootstrapTable.TableHeaderColumn,
                            { dataField: "_id", dataFormat: (0, _IconCell2.default)("fa-list-alt"), dataSort: true, isKey: true },
                            (0, _i18next.t)("console.applications.oauth2.clients.list.grid.0")
                        ),
                        _react2.default.createElement(
                            _reactBootstrapTable.TableHeaderColumn,
                            {
                                dataField: "coreOAuth2ClientConfig",
                                dataFormat: (0, _dataFieldObjectPath2.default)(function (cell) {
                                    return cell;
                                }, "agentgroup"),
                                dataSort: true
                            },
                            (0, _i18next.t)("console.applications.oauth2.clients.list.grid.1")
                        ),
                        _react2.default.createElement(
                            _reactBootstrapTable.TableHeaderColumn,
                            {
                                dataField: "coreOAuth2ClientConfig",
                                dataFormat: (0, _dataFieldObjectPath2.default)(_StatusCell2.default, "status"),
                                dataSort: true
                            },
                            (0, _i18next.t)("console.applications.oauth2.clients.list.grid.2")
                        )
                    );
                }

                return _react2.default.createElement(
                    _reactBootstrap.Panel,
                    { className: "fr-panel-tab" },
                    toolbar,
                    content
                );
            }
        }]);

        return ListOAuth2Clients;
    }(_react.Component);

    ListOAuth2Clients.propTypes = {
        clients: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
        isFetching: _react.PropTypes.bool.isRequired,
        newHref: _react.PropTypes.string.isRequired,
        onDelete: _react.PropTypes.func.isRequired,
        onEdit: _react.PropTypes.func.isRequired
    };

    exports.default = ListOAuth2Clients;
});
//# sourceMappingURL=ListOAuth2Clients.js.map
