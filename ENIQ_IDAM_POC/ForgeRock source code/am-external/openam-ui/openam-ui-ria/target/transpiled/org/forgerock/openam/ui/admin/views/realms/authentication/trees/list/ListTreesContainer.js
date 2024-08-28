define(["exports", "redux", "lodash", "i18next", "react", "org/forgerock/openam/ui/admin/services/realm/authentication/TreeService", "store/modules/remote/authentication/trees/list", "store/modules/local/authentication/trees/list", "components/redux/connectWithStore", "./ListTrees", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _redux, _lodash, _i18next, _react, _TreeService, _list, _list2, _connectWithStore, _ListTrees, _Messages, _Router, _showConfirmationBeforeAction, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _connectWithStore2 = _interopRequireDefault(_connectWithStore);

    var _ListTrees2 = _interopRequireDefault(_ListTrees);

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

    var ListTreesContainer = function (_Component) {
        _inherits(ListTreesContainer, _Component);

        function ListTreesContainer() {
            _classCallCheck(this, ListTreesContainer);

            var _this = _possibleConstructorReturn(this, (ListTreesContainer.__proto__ || Object.getPrototypeOf(ListTreesContainer)).call(this));

            _this.state = { isFetching: true };
            _this.handleDelete = _this.handleDelete.bind(_this);
            _this.handleEdit = _this.handleEdit.bind(_this);
            return _this;
        }

        _createClass(ListTreesContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                var realm = this.props.router.params[0];

                (0, _TreeService.getAll)(realm).then(function (response) {
                    _this2.setState({ isFetching: false });
                    _this2.props.setTrees(response.result);
                }, function (response) {
                    _this2.setState({ isFetching: false });
                    _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "handleDelete",
            value: function handleDelete(ids) {
                var _this3 = this;

                var realm = this.props.router.params[0];
                (0, _showConfirmationBeforeAction2.default)({
                    message: (0, _i18next.t)("console.authentication.trees.list.confirmDeleteSelected", { count: ids.length })
                }, function () {
                    (0, _TreeService.remove)(realm, ids).then(function (response) {
                        return (0, _lodash.map)(response, _lodash.first);
                    }).then(function (response) {
                        _Messages2.default.messages.displayMessageFromConfig("changesSaved");
                        (0, _lodash.forEach)(response, function (tree) {
                            _this3.props.removeTree.fromLocal(tree._id);
                            _this3.props.removeTree.fromRemote(tree._id);
                        });
                    }, function (reason) {
                        _Messages2.default.addMessage({ reason: reason, type: _Messages2.default.TYPE_DANGER });
                    });
                });
            }
        }, {
            key: "handleEdit",
            value: function handleEdit(id) {
                var realm = this.props.router.params[0];
                return _Router2.default.routeTo(_Router2.default.configuration.routes.realmsAuthenticationTreesEdit, {
                    args: (0, _lodash.map)([realm, id], encodeURIComponent),
                    trigger: true
                });
            }
        }, {
            key: "render",
            value: function render() {
                var realm = this.props.router.params[0];
                var newHref = _Router2.default.getLink(_Router2.default.configuration.routes.realmsAuthenticationTreesNew, [encodeURIComponent(realm)]);
                return _react2.default.createElement(_ListTrees2.default, {
                    isFetching: this.state.isFetching,
                    newHref: "#" + newHref,
                    onDelete: this.handleDelete,
                    onEdit: this.handleEdit,
                    trees: this.props.trees
                });
            }
        }]);

        return ListTreesContainer;
    }(_react.Component);

    ListTreesContainer.propTypes = {
        removeTree: _react.PropTypes.func.isRequired,
        router: _withRouterPropType2.default,
        setTrees: _react.PropTypes.func.isRequired,
        trees: _react.PropTypes.arrayOf(_react.PropTypes.object)
    };

    ListTreesContainer = (0, _connectWithStore2.default)(ListTreesContainer, function (state) {
        return {
            trees: (0, _lodash.values)(state.remote.authentication.trees.list)
        };
    }, function (dispatch) {
        return {
            removeTree: (0, _redux.bindActionCreators)({ fromLocal: _list2.remove, fromRemote: _list.remove }, dispatch),
            setTrees: (0, _redux.bindActionCreators)(_list.set, dispatch)
        };
    });
    ListTreesContainer = (0, _withRouter2.default)(ListTreesContainer);

    exports.default = ListTreesContainer;
});
