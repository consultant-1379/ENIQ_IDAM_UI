define(["exports", "redux", "lodash", "react", "org/forgerock/openam/ui/admin/services/realm/AgentsService", "org/forgerock/openam/ui/admin/services/realm/AgentTypes", "store/modules/remote/oauth2/clients/schema", "store/modules/remote/oauth2/clients/template", "components/redux/connectWithStore", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/commons/ui/common/components/Messages", "./NewOAuth2Client", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _redux, _lodash, _react, _AgentsService, _AgentTypes, _schema, _template, _connectWithStore, _JSONValues, _JSONSchema, _Messages, _NewOAuth2Client, _Router, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _connectWithStore2 = _interopRequireDefault(_connectWithStore);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    var _JSONSchema2 = _interopRequireDefault(_JSONSchema);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _NewOAuth2Client2 = _interopRequireDefault(_NewOAuth2Client);

    var _Router2 = _interopRequireDefault(_Router);

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

    var NewOAuth2ClientContainer = function (_Component) {
        _inherits(NewOAuth2ClientContainer, _Component);

        function NewOAuth2ClientContainer(props) {
            _classCallCheck(this, NewOAuth2ClientContainer);

            var _this = _possibleConstructorReturn(this, (NewOAuth2ClientContainer.__proto__ || Object.getPrototypeOf(NewOAuth2ClientContainer)).call(this, props));

            _this.state = {
                isFetching: true,
                clientId: ""
            };

            _this.handleClientIdChange = _this.handleClientIdChange.bind(_this);
            return _this;
        }

        _createClass(NewOAuth2ClientContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                (0, _AgentsService.getInitialState)(this.props.router.params[0], _AgentTypes.OAUTH2_CLIENT).then(function (_ref) {
                    var schema = _ref.schema,
                        values = _ref.values;

                    _this2.setState({ isFetching: false });
                    _this2.props.setSchema(schema[0]);
                    _this2.props.setTemplate(values[0]);
                }, function (response) {
                    _this2.setState({ isFetching: false });
                    _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "handleClientIdChange",
            value: function handleClientIdChange(clientId) {
                this.setState({ clientId: clientId });
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var handleCreate = function handleCreate(formData) {
                    var realm = _this3.props.router.params[0];
                    var values = new _JSONValues2.default(formData);
                    var valuesWithoutNullPasswords = values.removeNullPasswords(new _JSONSchema2.default(_this3.props.schema));

                    (0, _AgentsService.create)(realm, _AgentTypes.OAUTH2_CLIENT, valuesWithoutNullPasswords.raw, _this3.state.clientId).then(function () {
                        _Router2.default.routeTo(_Router2.default.configuration.routes.realmsApplicationsOAuth2ClientsEdit, { args: (0, _lodash.map)([realm, _this3.state.clientId], encodeURIComponent), trigger: true });
                    }, function (response) {
                        _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                    });
                };

                return _react2.default.createElement(_NewOAuth2Client2.default, {
                    clientId: this.state.clientId,
                    isCreateAllowed: !(0, _lodash.isEmpty)(this.state.clientId),
                    isFetching: this.state.isFetching,
                    onClientIdChange: this.handleClientIdChange,
                    onCreate: handleCreate,
                    schema: this.props.schema,
                    template: this.props.template
                });
            }
        }]);

        return NewOAuth2ClientContainer;
    }(_react.Component);

    NewOAuth2ClientContainer.propTypes = {
        router: _withRouterPropType2.default,
        schema: _react.PropTypes.shape({
            type: _react.PropTypes.string.isRequired
        }),
        setSchema: _react.PropTypes.func.isRequired,
        setTemplate: _react.PropTypes.func.isRequired,
        template: _react.PropTypes.shape({
            type: _react.PropTypes.string.isRequired
        })
    };

    NewOAuth2ClientContainer = (0, _connectWithStore2.default)(NewOAuth2ClientContainer, function (state) {
        return {
            schema: state.remote.oauth2.clients.schema,
            template: state.remote.oauth2.clients.template
        };
    }, function (dispatch) {
        return {
            setSchema: (0, _redux.bindActionCreators)(_schema.setSchema, dispatch),
            setTemplate: (0, _redux.bindActionCreators)(_template.setTemplate, dispatch)
        };
    });
    NewOAuth2ClientContainer = (0, _withRouter2.default)(NewOAuth2ClientContainer);

    exports.default = NewOAuth2ClientContainer;
});
