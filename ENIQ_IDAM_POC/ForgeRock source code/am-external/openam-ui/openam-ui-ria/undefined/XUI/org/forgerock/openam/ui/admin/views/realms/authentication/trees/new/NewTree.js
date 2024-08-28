define(["exports", "react-bootstrap", "i18next", "react", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "components/Loading", "./NewTreeFooter", "./NewTreeNameInput", "components/PageHeader"], function (exports, _reactBootstrap, _i18next, _react, _FlatJSONSchemaView, _JSONSchema, _JSONValues, _Loading, _NewTreeFooter, _NewTreeNameInput, _PageHeader) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _FlatJSONSchemaView2 = _interopRequireDefault(_FlatJSONSchemaView);

    var _JSONSchema2 = _interopRequireDefault(_JSONSchema);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    var _Loading2 = _interopRequireDefault(_Loading);

    var _NewTreeFooter2 = _interopRequireDefault(_NewTreeFooter);

    var _NewTreeNameInput2 = _interopRequireDefault(_NewTreeNameInput);

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

    var NewTree = function (_Component) {
        _inherits(NewTree, _Component);

        function NewTree(props) {
            _classCallCheck(this, NewTree);

            var _this = _possibleConstructorReturn(this, (NewTree.__proto__ || Object.getPrototypeOf(NewTree)).call(this, props));

            _this.handleCreate = _this.handleCreate.bind(_this);
            _this.setRef = _this.setRef.bind(_this);
            return _this;
        }

        _createClass(NewTree, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (!this.jsonSchemaView && this.props.template) {
                    this.jsonSchemaView = new _FlatJSONSchemaView2.default({
                        schema: new _JSONSchema2.default(this.props.schema),
                        values: new _JSONValues2.default(this.props.template),
                        showOnlyRequiredAndEmpty: true
                    });
                    this.jsonForm.appendChild(this.jsonSchemaView.render().el);
                }
            }
        }, {
            key: "handleCreate",
            value: function handleCreate() {
                this.props.onCreate(this.jsonSchemaView.getData());
            }
        }, {
            key: "setRef",
            value: function setRef(element) {
                this.jsonForm = element;
            }
        }, {
            key: "render",
            value: function render() {
                var footer = _react2.default.createElement(_NewTreeFooter2.default, {
                    disableCreate: !this.props.isCreateAllowed,
                    onCreateClick: this.handleCreate
                });

                var content = this.props.isFetching ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_NewTreeNameInput2.default, {
                        onTreeNameChange: this.props.onTreeNameChange,
                        treeName: this.props.treeName
                    }),
                    _react2.default.createElement("div", { ref: this.setRef })
                );

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.authentication.trees.new.title") }),
                    _react2.default.createElement(
                        _reactBootstrap.Panel,
                        { footer: footer },
                        content
                    )
                );
            }
        }]);

        return NewTree;
    }(_react.Component);

    NewTree.propTypes = {
        isCreateAllowed: _react.PropTypes.bool.isRequired,
        isFetching: _react.PropTypes.bool.isRequired,
        onCreate: _react.PropTypes.func.isRequired,
        onTreeNameChange: _react.PropTypes.func.isRequired,
        schema: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        template: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        treeName: _react.PropTypes.string.isRequired
    };

    exports.default = NewTree;
});
//# sourceMappingURL=NewTree.js.map
