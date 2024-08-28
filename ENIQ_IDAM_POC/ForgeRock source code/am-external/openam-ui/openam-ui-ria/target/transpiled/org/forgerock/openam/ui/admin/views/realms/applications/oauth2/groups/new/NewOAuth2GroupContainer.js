define(["exports", "redux", "lodash", "react", "org/forgerock/openam/ui/admin/services/realm/AgentGroupsService", "org/forgerock/openam/ui/admin/services/realm/AgentTypes", "store/modules/remote/oauth2/groups/schema", "store/modules/remote/oauth2/groups/template", "components/redux/connectWithStore", "org/forgerock/commons/ui/common/components/Messages", "./NewOAuth2Group", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _redux, _lodash, _react, _AgentGroupsService, _AgentTypes, _schema, _template, _connectWithStore, _Messages, _NewOAuth2Group, _Router, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _connectWithStore2 = _interopRequireDefault(_connectWithStore);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _NewOAuth2Group2 = _interopRequireDefault(_NewOAuth2Group);

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

    var NewOAuth2GroupContainer = function (_Component) {
        _inherits(NewOAuth2GroupContainer, _Component);

        function NewOAuth2GroupContainer(props) {
            _classCallCheck(this, NewOAuth2GroupContainer);

            var _this = _possibleConstructorReturn(this, (NewOAuth2GroupContainer.__proto__ || Object.getPrototypeOf(NewOAuth2GroupContainer)).call(this, props));

            _this.state = {
                isFetching: true,
                groupId: ""
            };

            _this.handleGroupIdChange = _this.handleGroupIdChange.bind(_this);
            return _this;
        }

        _createClass(NewOAuth2GroupContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                (0, _AgentGroupsService.getInitialState)(this.props.router.params[0], _AgentTypes.OAUTH2_CLIENT).then(function (_ref) {
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
            key: "handleGroupIdChange",
            value: function handleGroupIdChange(groupId) {
                this.setState({ groupId: groupId });
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var handleCreate = function handleCreate(formData) {
                    var realm = _this3.props.router.params[0];
                    (0, _AgentGroupsService.create)(realm, _AgentTypes.OAUTH2_CLIENT, formData, _this3.state.groupId).then(function () {
                        _Router2.default.routeTo(_Router2.default.configuration.routes.realmsApplicationsOAuth2GroupsEdit, { args: (0, _lodash.map)([realm, _this3.state.groupId], encodeURIComponent), trigger: true });
                    }, function (response) {
                        _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                    });
                };

                return _react2.default.createElement(_NewOAuth2Group2.default, {
                    groupId: this.state.groupId,
                    isCreateAllowed: !(0, _lodash.isEmpty)(this.state.groupId),
                    isFetching: this.state.isFetching,
                    onCreate: handleCreate,
                    onGroupIdChange: this.handleGroupIdChange,
                    schema: this.props.schema,
                    template: this.props.template
                });
            }
        }]);

        return NewOAuth2GroupContainer;
    }(_react.Component);

    NewOAuth2GroupContainer.propTypes = {
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

    NewOAuth2GroupContainer = (0, _connectWithStore2.default)(NewOAuth2GroupContainer, function (state) {
        return {
            schema: state.remote.oauth2.groups.schema,
            template: state.remote.oauth2.groups.template
        };
    }, function (dispatch) {
        return {
            setSchema: (0, _redux.bindActionCreators)(_schema.setSchema, dispatch),
            setTemplate: (0, _redux.bindActionCreators)(_template.setTemplate, dispatch)
        };
    });
    NewOAuth2GroupContainer = (0, _withRouter2.default)(NewOAuth2GroupContainer);

    exports.default = NewOAuth2GroupContainer;
});
