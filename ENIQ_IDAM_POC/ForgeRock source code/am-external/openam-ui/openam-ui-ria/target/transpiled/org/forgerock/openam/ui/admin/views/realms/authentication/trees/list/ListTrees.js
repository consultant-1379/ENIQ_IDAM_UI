define(["exports", "lodash", "react-bootstrap", "i18next", "react-bootstrap-table", "react", "components/table/cells/IconCell", "./ListTreesCallToAction", "./ListTreesToolbar", "components/Loading", "components/PageHeader", "components/table/Table"], function (exports, _lodash, _reactBootstrap, _i18next, _reactBootstrapTable, _react, _IconCell, _ListTreesCallToAction, _ListTreesToolbar, _Loading, _PageHeader, _Table) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _IconCell2 = _interopRequireDefault(_IconCell);

    var _ListTreesCallToAction2 = _interopRequireDefault(_ListTreesCallToAction);

    var _ListTreesToolbar2 = _interopRequireDefault(_ListTreesToolbar);

    var _Loading2 = _interopRequireDefault(_Loading);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

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

    var ListTrees = function (_Component) {
        _inherits(ListTrees, _Component);

        function ListTrees() {
            _classCallCheck(this, ListTrees);

            var _this = _possibleConstructorReturn(this, (ListTrees.__proto__ || Object.getPrototypeOf(ListTrees)).call(this));

            _this.state = {
                selectedIds: []
            };
            return _this;
        }

        _createClass(ListTrees, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var currentIds = (0, _lodash.pluck)(this.props.trees, "_id");
                var nextIds = (0, _lodash.pluck)(nextProps.trees, "_id");

                if (!(0, _lodash.isEqual)(currentIds.sort(), nextIds.sort())) {
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
                } else if (this.props.trees.length) {
                    toolbar = _react2.default.createElement(_ListTreesToolbar2.default, {
                        isDeleteDisabled: !this.state.selectedIds.length,
                        newHref: this.props.newHref,
                        numberSelected: this.state.selectedIds.length,
                        onDelete: handleOnDelete
                    });
                    content = _react2.default.createElement(
                        _Table2.default,
                        {
                            data: this.props.trees,
                            idField: "_id",
                            onRowClick: handleRowClick,
                            onSelectedChange: handleSelectedChange,
                            selectedIds: this.state.selectedIds
                        },
                        _react2.default.createElement(
                            _reactBootstrapTable.TableHeaderColumn,
                            { dataField: "_id", dataFormat: (0, _IconCell2.default)("fa-tree"), dataSort: true, isKey: true },
                            (0, _i18next.t)("console.authentication.trees.list.grid.0")
                        )
                    );
                } else {
                    content = _react2.default.createElement(_ListTreesCallToAction2.default, { href: this.props.newHref });
                }

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.authentication.trees.list.title") }),
                    toolbar,
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        null,
                        content
                    )
                );
            }
        }]);

        return ListTrees;
    }(_react.Component);

    ListTrees.propTypes = {
        isFetching: _react.PropTypes.bool.isRequired,
        newHref: _react.PropTypes.string.isRequired,
        onDelete: _react.PropTypes.func.isRequired,
        onEdit: _react.PropTypes.func.isRequired,
        trees: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
    };

    exports.default = ListTrees;
});
