define(["exports", "lodash", "react-bootstrap", "i18next", "components/Checkbox", "react"], function (exports, _lodash, _reactBootstrap, _i18next, _Checkbox, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _Checkbox2 = _interopRequireDefault(_Checkbox);

    var _react2 = _interopRequireDefault(_react);

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

    var PolicySettingsModal = function (_Component) {
        _inherits(PolicySettingsModal, _Component);

        function PolicySettingsModal(props) {
            _classCallCheck(this, PolicySettingsModal);

            var _this = _possibleConstructorReturn(this, (PolicySettingsModal.__proto__ || Object.getPrototypeOf(PolicySettingsModal)).call(this, props));

            _this.handleCheckBoxChange = _this.handleCheckBoxChange.bind(_this);
            _this.handleClose = _this.handleClose.bind(_this);
            _this.handleSubmit = _this.handleSubmit.bind(_this);
            _this.handleTextFieldChange = _this.handleTextFieldChange.bind(_this);

            _this.state = _extends({
                showModal: true
            }, props.data);
            return _this;
        }

        _createClass(PolicySettingsModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this.setState(_extends({
                    showModal: true
                }, nextProps.data));
            }
        }, {
            key: "handleCheckBoxChange",
            value: function handleCheckBoxChange(e) {
                this.setState({ active: e.target.checked });
            }
        }, {
            key: "handleClose",
            value: function handleClose() {
                this.setState({ showModal: false });
            }
        }, {
            key: "handleSubmit",
            value: function handleSubmit() {
                this.setState({ showModal: false });
                this.props.handleSubmit(_lodash2.default.pick(this.state, ["active", "name", "description"]));
            }
        }, {
            key: "handleTextFieldChange",
            value: function handleTextFieldChange(e) {
                this.setState(_defineProperty({}, e.target.getAttribute("data-entity-prop"), e.target.value));
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { onExit: this.handleOnExit, onHide: this.handleClose, show: this.state.showModal },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            null,
                            (0, _i18next.t)("common.form.editDetails")
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        _react2.default.createElement(
                            "form",
                            { className: "form-horizontal" },
                            _react2.default.createElement(
                                _reactBootstrap.Grid,
                                { bsClass: "" },
                                _react2.default.createElement(
                                    _reactBootstrap.FormGroup,
                                    { className: "clearfix", controlId: "policyName" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { sm: 2 },
                                        _react2.default.createElement(
                                            _reactBootstrap.ControlLabel,
                                            null,
                                            (0, _i18next.t)("console.common.name")
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { sm: 9 },
                                        _react2.default.createElement(_reactBootstrap.FormControl, {
                                            "data-entity-prop": "name",
                                            onChange: this.handleTextFieldChange,
                                            placeholder: (0, _i18next.t)("common.form.validation.required"),
                                            type: "text",
                                            value: this.state.name
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.FormGroup,
                                    { className: "clearfix", controlId: "policyDescription" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { sm: 2 },
                                        _react2.default.createElement(
                                            _reactBootstrap.ControlLabel,
                                            null,
                                            (0, _i18next.t)("console.common.description")
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { sm: 9 },
                                        _react2.default.createElement(_reactBootstrap.FormControl, {
                                            componentClass: "textarea",
                                            "data-entity-prop": "description",
                                            onChange: this.handleTextFieldChange,
                                            value: this.state.description
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.FormGroup,
                                    { className: "clearfix" },
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { sm: 2 },
                                        _react2.default.createElement(
                                            _reactBootstrap.ControlLabel,
                                            { htmlFor: "policyActive" },
                                            (0, _i18next.t)("common.user.active")
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Col,
                                        { sm: 9 },
                                        _react2.default.createElement(_Checkbox2.default, {
                                            checked: this.state.active,
                                            id: "policyActive",
                                            onChange: this.handleCheckBoxChange
                                        })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { onClick: this.handleClose },
                            (0, _i18next.t)("common.form.close")
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsStyle: "primary", onClick: this.handleSubmit },
                            (0, _i18next.t)("common.form.saveChanges")
                        )
                    )
                );
            }
        }]);

        return PolicySettingsModal;
    }(_react.Component);

    PolicySettingsModal.propTypes = {
        data: _react2.default.PropTypes.objectOf({
            active: _react.PropTypes.bool.isRequired,
            description: _react.PropTypes.string.isRequired,
            name: _react.PropTypes.string.isRequired
        }),
        handleSubmit: _react.PropTypes.func.isRequired
    };

    exports.default = PolicySettingsModal;
});
