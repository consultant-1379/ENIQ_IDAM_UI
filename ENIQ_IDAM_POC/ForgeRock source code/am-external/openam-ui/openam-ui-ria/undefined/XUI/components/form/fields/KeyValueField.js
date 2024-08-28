define(["exports", "react-bootstrap", "lodash", "i18next", "react-bootstrap-table", "react", "components/table/Table"], function (exports, _reactBootstrap, _lodash, _i18next, _reactBootstrapTable, _react, _Table) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Table2 = _interopRequireDefault(_Table);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
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

    var initialState = {
        error: false,
        key: "",
        showAdd: true,
        value: ""
    };

    var KeyValueField = function (_Component) {
        _inherits(KeyValueField, _Component);

        function KeyValueField() {
            _classCallCheck(this, KeyValueField);

            var _this = _possibleConstructorReturn(this, (KeyValueField.__proto__ || Object.getPrototypeOf(KeyValueField)).call(this));

            _this.state = initialState;

            _this.handleAddClick = _this.handleAddClick.bind(_this);
            _this.handleChangeKey = _this.handleChangeKey.bind(_this);
            _this.handleChangeValue = _this.handleChangeValue.bind(_this);
            _this.handleRowDelete = _this.handleRowDelete.bind(_this);
            _this.handleSubmit = _this.handleSubmit.bind(_this);
            _this.setRef = _this.setRef.bind(_this);
            return _this;
        }

        _createClass(KeyValueField, [{
            key: "handleAddClick",
            value: function handleAddClick() {
                this.setState({ showAdd: false });
            }
        }, {
            key: "handleChangeKey",
            value: function handleChangeKey(event) {
                this.setState({ key: event.target.value });
            }
        }, {
            key: "handleChangeValue",
            value: function handleChangeValue(event) {
                this.setState({ value: event.target.value });
            }
        }, {
            key: "handleRowDelete",
            value: function handleRowDelete(row) {
                this.props.onChange((0, _lodash.omit)(this.props.formData, row.key));
            }
        }, {
            key: "handleSubmit",
            value: function handleSubmit() {
                var error = this.tableRef.handleAddRow(this.state);

                if (error) {
                    this.setState({ error: error });
                } else {
                    this.props.onChange(_extends({}, this.props.formData, _defineProperty({}, this.state.key, this.state.value)));
                    this.setState(initialState);
                }
            }
        }, {
            key: "setRef",
            value: function setRef(element) {
                this.tableRef = element;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var arrayData = (0, _lodash.map)(this.props.formData, function (value, key) {
                    return { key: key, value: value };
                });
                var newKeyValueComponent = this.state.showAdd ? null : _react2.default.createElement(
                    _reactBootstrap.Form,
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        _reactBootstrap.Table,
                        { condensed: true },
                        _react2.default.createElement(
                            "tbody",
                            null,
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(_reactBootstrap.FormControl, {
                                        autoFocus: true,
                                        bsSize: "small",
                                        onChange: this.handleChangeKey,
                                        placeholder: (0, _i18next.t)("common.form.key"),
                                        type: "text",
                                        value: this.state.key
                                    })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(_reactBootstrap.FormControl, {
                                        bsSize: "small",
                                        onChange: this.handleChangeValue,
                                        placeholder: (0, _i18next.t)("common.form.value"),
                                        type: "text",
                                        value: this.state.value
                                    })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    { className: "fr-col-btn-1" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Button,
                                        { bsSize: "small", type: "submit" },
                                        _react2.default.createElement("i", { className: "fa fa-plus" })
                                    )
                                )
                            )
                        )
                    )
                );
                var errorComponent = this.state.error ? _react2.default.createElement(
                    "span",
                    { className: "text-danger small" },
                    this.state.error
                ) : null;
                var rowTextComponent = function rowTextComponent(data) {
                    return _react2.default.createElement(
                        "span",
                        { title: data },
                        data
                    );
                };
                var rowDeleteComponent = function rowDeleteComponent(data, row) {
                    return _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsSize: "small", bsStyle: "link", onClick: (0, _lodash.partial)(_this2.handleRowDelete, row) },
                        _react2.default.createElement("i", { className: "fa fa-trash" })
                    );
                };
                var addButton = this.state.showAdd ? _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsSize: "small", className: "pull-right", onClick: this.handleAddClick },
                    (0, _i18next.t)("common.form.add")
                ) : null;

                return _react2.default.createElement(
                    "div",
                    { className: "key-value-field clearfix" },
                    _react2.default.createElement(
                        _Table2.default,
                        {
                            cellEdit: { mode: "click" },
                            condensed: true,
                            data: arrayData,
                            idField: "key",
                            onSelectedChange: this.handleOnSelectedChange,
                            selectRow: { hideSelectColumn: true },
                            tableRef: this.setRef
                        },
                        _react2.default.createElement(
                            _reactBootstrapTable.TableHeaderColumn,
                            { dataField: "key", dataFormat: rowTextComponent, isKey: true },
                            (0, _i18next.t)("common.form.key")
                        ),
                        _react2.default.createElement(
                            _reactBootstrapTable.TableHeaderColumn,
                            { dataField: "value", dataFormat: rowTextComponent },
                            (0, _i18next.t)("common.form.value")
                        ),
                        _react2.default.createElement(_reactBootstrapTable.TableHeaderColumn, {
                            columnClassName: "fr-col-btn-1",
                            dataAlign: "center",
                            dataFormat: rowDeleteComponent,
                            editable: false
                        })
                    ),
                    newKeyValueComponent,
                    errorComponent,
                    addButton
                );
            }
        }]);

        return KeyValueField;
    }(_react.Component);

    KeyValueField.propTypes = {
        formData: _react.PropTypes.objectOf(_react.PropTypes.string).isRequired,
        onChange: _react.PropTypes.func.isRequired
    };

    exports.default = KeyValueField;
});
//# sourceMappingURL=KeyValueField.js.map
