define(["exports", "react-bootstrap", "i18next", "react", "org/forgerock/openam/ui/common/views/jsonSchema/GroupedJSONSchemaView", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "components/Loading", "./NewOAuth2GroupFooter", "./NewOAuth2GroupIdInput", "components/PageHeader"], function (exports, _reactBootstrap, _i18next, _react, _GroupedJSONSchemaView, _JSONSchema, _JSONValues, _Loading, _NewOAuth2GroupFooter, _NewOAuth2GroupIdInput, _PageHeader) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _GroupedJSONSchemaView2 = _interopRequireDefault(_GroupedJSONSchemaView);

    var _JSONSchema2 = _interopRequireDefault(_JSONSchema);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    var _Loading2 = _interopRequireDefault(_Loading);

    var _NewOAuth2GroupFooter2 = _interopRequireDefault(_NewOAuth2GroupFooter);

    var _NewOAuth2GroupIdInput2 = _interopRequireDefault(_NewOAuth2GroupIdInput);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

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

    var NewOAuth2Group = function (_Component) {
        _inherits(NewOAuth2Group, _Component);

        function NewOAuth2Group(props) {
            _classCallCheck(this, NewOAuth2Group);

            var _this = _possibleConstructorReturn(this, (NewOAuth2Group.__proto__ || Object.getPrototypeOf(NewOAuth2Group)).call(this, props));

            _this.setRef = _this.setRef.bind(_this);
            return _this;
        }

        _createClass(NewOAuth2Group, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (!this.jsonSchemaView && this.props.template) {
                    this.jsonSchemaView = new _GroupedJSONSchemaView2.default({
                        hideInheritance: true,
                        schema: new _JSONSchema2.default(this.props.schema),
                        values: new _JSONValues2.default(this.props.template),
                        showOnlyRequiredAndEmpty: true
                    });
                    this.jsonForm.appendChild(this.jsonSchemaView.render().el);
                }
            }
        }, {
            key: "setRef",
            value: function setRef(element) {
                this.jsonForm = element;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var handleCreate = function handleCreate() {
                    return _this2.props.onCreate(_this2.jsonSchemaView.getData());
                };
                var footer = _react2.default.createElement(_NewOAuth2GroupFooter2.default, {
                    disableCreate: !this.props.isCreateAllowed,
                    onCreateClick: handleCreate
                });
                var content = void 0;

                if (this.props.isFetching) {
                    content = _react2.default.createElement(_Loading2.default, null);
                } else {
                    content = _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_NewOAuth2GroupIdInput2.default, {
                            groupId: this.props.groupId,
                            onGroupIdChange: this.props.onGroupIdChange
                        }),
                        _react2.default.createElement("div", { ref: this.setRef })
                    );
                }

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.applications.oauth2.groups.new.title") }),
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        { footer: footer },
                        content
                    )
                );
            }
        }]);

        return NewOAuth2Group;
    }(_react.Component);

    NewOAuth2Group.propTypes = {
        groupId: _react.PropTypes.string.isRequired,
        isCreateAllowed: _react.PropTypes.bool.isRequired,
        isFetching: _react.PropTypes.bool.isRequired,
        onCreate: _react.PropTypes.func.isRequired,
        onGroupIdChange: _react.PropTypes.func.isRequired,
        schema: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        template: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired
    };

    exports.default = NewOAuth2Group;
});
//# sourceMappingURL=NewOAuth2Group.js.map
