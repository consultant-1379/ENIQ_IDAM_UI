define(["exports", "lodash", "react-bootstrap", "i18next", "react", "org/forgerock/openam/ui/common/views/jsonSchema/GroupedJSONSchemaView", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "components/Loading", "./NewOAuth2ClientFooter", "./NewOAuth2ClientIdInput", "components/PageHeader"], function (exports, _lodash, _reactBootstrap, _i18next, _react, _GroupedJSONSchemaView, _JSONSchema, _JSONValues, _Loading, _NewOAuth2ClientFooter, _NewOAuth2ClientIdInput, _PageHeader) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _GroupedJSONSchemaView2 = _interopRequireDefault(_GroupedJSONSchemaView);

    var _JSONSchema2 = _interopRequireDefault(_JSONSchema);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    var _Loading2 = _interopRequireDefault(_Loading);

    var _NewOAuth2ClientFooter2 = _interopRequireDefault(_NewOAuth2ClientFooter);

    var _NewOAuth2ClientIdInput2 = _interopRequireDefault(_NewOAuth2ClientIdInput);

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

    var NewOAuth2Client = function (_Component) {
        _inherits(NewOAuth2Client, _Component);

        function NewOAuth2Client(props) {
            _classCallCheck(this, NewOAuth2Client);

            var _this = _possibleConstructorReturn(this, (NewOAuth2Client.__proto__ || Object.getPrototypeOf(NewOAuth2Client)).call(this, props));

            _this.setRef = _this.setRef.bind(_this);
            return _this;
        }

        _createClass(NewOAuth2Client, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                /**
                 * The properties redirectionUris, scopes/defaultScopes are helpful to users when creating an OAuth2.0 Client,
                 * however they are not set as required properties in the schema so they are manually added here.
                 */
                var schema = (0, _lodash.cloneDeep)(this.props.schema);
                if (schema) {
                    schema.properties.coreOAuth2ClientConfig.defaultProperties = ["defaultScopes", "redirectionUris", "scopes"];
                }
                if (!this.jsonSchemaView && this.props.template) {
                    this.jsonSchemaView = new _GroupedJSONSchemaView2.default({
                        hideInheritance: true,
                        schema: new _JSONSchema2.default(schema),
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

                var footer = _react2.default.createElement(_NewOAuth2ClientFooter2.default, {
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
                        _react2.default.createElement(_NewOAuth2ClientIdInput2.default, {
                            clientId: this.props.clientId,
                            onClientIdChange: this.props.onClientIdChange
                        }),
                        _react2.default.createElement("div", { ref: this.setRef })
                    );
                }

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.applications.oauth2.clients.new.title") }),
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        { footer: footer },
                        content
                    )
                );
            }
        }]);

        return NewOAuth2Client;
    }(_react.Component);

    NewOAuth2Client.propTypes = {
        clientId: _react.PropTypes.string.isRequired,
        isCreateAllowed: _react.PropTypes.bool.isRequired,
        isFetching: _react.PropTypes.bool.isRequired,
        onClientIdChange: _react.PropTypes.func.isRequired,
        onCreate: _react.PropTypes.func.isRequired,
        schema: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        template: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired
    };

    exports.default = NewOAuth2Client;
});
//# sourceMappingURL=NewOAuth2Client.js.map
