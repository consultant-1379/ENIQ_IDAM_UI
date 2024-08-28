define(["exports", "redux", "lodash", "i18next", "react", "org/forgerock/openam/ui/admin/services/realm/AgentGroupsService", "org/forgerock/openam/ui/admin/services/realm/AgentTypes", "store/modules/remote/oauth2/groups/instances", "components/redux/connectWithStore", "./ListOAuth2Groups", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _redux, _lodash, _i18next, _react, _AgentGroupsService, _AgentTypes, _instances, _connectWithStore, _ListOAuth2Groups, _Messages, _Router, _showConfirmationBeforeAction, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _connectWithStore2 = _interopRequireDefault(_connectWithStore);

    var _ListOAuth2Groups2 = _interopRequireDefault(_ListOAuth2Groups);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _Router2 = _interopRequireDefault(_Router);

    var _showConfirmationBeforeAction2 = _interopRequireDefault(_showConfirmationBeforeAction);

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

    var ListOAuth2GroupsContainer = function (_Component) {
        _inherits(ListOAuth2GroupsContainer, _Component);

        function ListOAuth2GroupsContainer() {
            _classCallCheck(this, ListOAuth2GroupsContainer);

            var _this = _possibleConstructorReturn(this, (ListOAuth2GroupsContainer.__proto__ || Object.getPrototypeOf(ListOAuth2GroupsContainer)).call(this));

            _this.onDelete = _this.onDelete.bind(_this);
            _this.state = { isFetching: true };
            return _this;
        }

        _createClass(ListOAuth2GroupsContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                var realm = this.props.router.params[0];

                (0, _AgentGroupsService.getAll)(realm, _AgentTypes.OAUTH2_CLIENT).then(function (response) {
                    _this2.setState({ isFetching: false });
                    _this2.props.setInstances(response.result);
                }, function (response) {
                    _this2.setState({ isFetching: false });
                    _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "onDelete",
            value: function onDelete(ids) {
                var _this3 = this;

                var realm = this.props.router.params[0];

                (0, _AgentGroupsService.remove)(realm, _AgentTypes.OAUTH2_CLIENT, ids).then(function (response) {
                    return (0, _lodash.map)(response, _lodash.first);
                }).then(function (response) {
                    _Messages2.default.messages.displayMessageFromConfig("changesSaved");

                    (0, _lodash.forEach)(response, _this3.props.removeInstance);
                }, function (reason) {
                    _Messages2.default.addMessage({ reason: reason, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                var realm = this.props.router.params[0];
                var newHref = _Router2.default.getLink(_Router2.default.configuration.routes.realmsApplicationsOAuth2GroupsNew, [encodeURIComponent(realm)]);
                var handleEdit = function handleEdit(id) {
                    return _Router2.default.routeTo(_Router2.default.configuration.routes.realmsApplicationsOAuth2GroupsEdit, {
                        args: (0, _lodash.map)([realm, id], encodeURIComponent),
                        trigger: true
                    });
                };
                var handleDelete = function handleDelete(ids) {
                    (0, _showConfirmationBeforeAction2.default)({
                        message: (0, _i18next.t)("console.applications.oauth2.groups.confirmDeleteSelected", {
                            count: ids.length
                        })
                    }, function () {
                        (0, _AgentGroupsService.remove)(realm, _AgentTypes.OAUTH2_CLIENT, ids).then(function (response) {
                            return (0, _lodash.map)(response, _lodash.first);
                        }).then(function (response) {
                            _Messages2.default.messages.displayMessageFromConfig("changesSaved");

                            (0, _lodash.forEach)(response, _this4.props.removeInstance);
                        }, function (reason) {
                            _Messages2.default.addMessage({ reason: reason, type: _Messages2.default.TYPE_DANGER });
                        });
                    });
                };
                return _react2.default.createElement(_ListOAuth2Groups2.default, {
                    groups: this.props.groups,
                    isFetching: this.state.isFetching,
                    newHref: "#" + newHref,
                    onDelete: handleDelete,
                    onEdit: handleEdit
                });
            }
        }]);

        return ListOAuth2GroupsContainer;
    }(_react.Component);

    ListOAuth2GroupsContainer.propTypes = {
        groups: _react.PropTypes.arrayOf(_react.PropTypes.object),
        removeInstance: _react.PropTypes.func.isRequired,
        router: _withRouterPropType2.default,
        setInstances: _react.PropTypes.func.isRequired
    };

    ListOAuth2GroupsContainer = (0, _connectWithStore2.default)(ListOAuth2GroupsContainer, function (state) {
        return {
            groups: (0, _lodash.values)(state.remote.oauth2.groups.instances)
        };
    }, function (dispatch) {
        return {
            removeInstance: (0, _redux.bindActionCreators)(_instances.removeInstance, dispatch),
            setInstances: (0, _redux.bindActionCreators)(_instances.setInstances, dispatch)
        };
    });
    ListOAuth2GroupsContainer = (0, _withRouter2.default)(ListOAuth2GroupsContainer);

    exports.default = ListOAuth2GroupsContainer;
});
