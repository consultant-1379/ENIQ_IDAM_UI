define(["exports", "redux", "lodash", "react", "org/forgerock/openam/ui/admin/services/realm/authentication/TreeService", "store/modules/remote/authentication/trees/schema", "store/modules/remote/authentication/trees/template", "components/redux/connectWithStore", "org/forgerock/commons/ui/common/components/Messages", "./NewTree", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _redux, _lodash, _react, _TreeService, _schema, _template, _connectWithStore, _Messages, _NewTree, _Router, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _connectWithStore2 = _interopRequireDefault(_connectWithStore);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _NewTree2 = _interopRequireDefault(_NewTree);

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

    var NewTreeContainer = function (_Component) {
        _inherits(NewTreeContainer, _Component);

        function NewTreeContainer() {
            _classCallCheck(this, NewTreeContainer);

            var _this = _possibleConstructorReturn(this, (NewTreeContainer.__proto__ || Object.getPrototypeOf(NewTreeContainer)).call(this));

            _this.state = {
                isFetching: true,
                treeName: ""
            };
            _this.handleCreate = _this.handleCreate.bind(_this);
            _this.handleTreeNameChange = _this.handleTreeNameChange.bind(_this);
            return _this;
        }

        _createClass(NewTreeContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                var realm = this.props.router.params[0];

                (0, _TreeService.getInitialState)(realm).then(function (_ref) {
                    var schema = _ref.schema,
                        template = _ref.template;

                    _this2.setState({ isFetching: false });
                    _this2.props.setSchema(schema[0]);
                    _this2.props.setTemplate(template[0]);
                }, function (response) {
                    _this2.setState({ isFetching: false });
                    _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "handleCreate",
            value: function handleCreate(formData) {
                var _this3 = this;

                var realm = this.props.router.params[0];
                // This doesn't have the values.removeNullPasswords fix from OPENAM-11834 as not required for this view.
                // However it might need adding in the future.
                (0, _TreeService.create)(realm, formData, this.state.treeName).then(function () {
                    _Router2.default.routeTo(_Router2.default.configuration.routes.realmsAuthenticationTreesEdit, { args: (0, _lodash.map)([realm, _this3.state.treeName], encodeURIComponent), trigger: true });
                }, function (response) {
                    return _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "handleTreeNameChange",
            value: function handleTreeNameChange(treeName) {
                this.setState({ treeName: treeName });
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(_NewTree2.default, {
                    isCreateAllowed: !(0, _lodash.isEmpty)(this.state.treeName),
                    isFetching: this.state.isFetching,
                    onCreate: this.handleCreate,
                    onTreeNameChange: this.handleTreeNameChange,
                    schema: this.props.schema,
                    template: this.props.template,
                    treeName: this.state.treeName
                });
            }
        }]);

        return NewTreeContainer;
    }(_react.Component);

    NewTreeContainer.propTypes = {
        router: _withRouterPropType2.default,
        schema: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        setSchema: _react.PropTypes.func.isRequired,
        setTemplate: _react.PropTypes.func.isRequired,
        template: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired
    };

    NewTreeContainer = (0, _connectWithStore2.default)(NewTreeContainer, function (state) {
        return {
            schema: state.remote.authentication.trees.schema,
            template: state.remote.authentication.trees.template
        };
    }, function (dispatch) {
        return {
            setSchema: (0, _redux.bindActionCreators)(_schema.set, dispatch),
            setTemplate: (0, _redux.bindActionCreators)(_template.set, dispatch)
        };
    });
    NewTreeContainer = (0, _withRouter2.default)(NewTreeContainer);

    exports.default = NewTreeContainer;
});
//# sourceMappingURL=NewTreeContainer.js.map
