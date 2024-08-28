define(["exports", "react", "./EmphasizedText"], function (exports, _react, _EmphasizedText) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _EmphasizedText2 = _interopRequireDefault(_EmphasizedText);

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

    var TreeNode = function (_Component) {
        _inherits(TreeNode, _Component);

        function TreeNode(props) {
            _classCallCheck(this, TreeNode);

            var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

            _this.handleOnNodeSelect = _this.handleOnNodeSelect.bind(_this);
            _this.state = { collapsed: props.highlighted ? false : props.collapsed };
            return _this;
        }

        _createClass(TreeNode, [{
            key: "handleOnNodeSelect",
            value: function handleOnNodeSelect() {
                this.setState({ collapsed: !this.state.collapsed });

                if (this.props.node.path) {
                    this.props.onSelect(this.props.node.path);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "li",
                    { className: "" + (this.props.highlighted ? "active" : "") },
                    _react2.default.createElement(
                        "a",
                        {
                            className: "am-tree-node",
                            onClick: this.handleOnNodeSelect,
                            onKeyPress: this.handleOnNodeSelect,
                            role: "button",
                            tabIndex: "0"
                        },
                        _react2.default.createElement("i", { className: "fa " + (this.state.collapsed ? "fa-plus-square-o" : "fa-minus-square-o") }),
                        _react2.default.createElement(
                            _EmphasizedText2.default,
                            { match: this.props.filter },
                            this.props.node.id
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: this.state.collapsed ? "am-tree-node-children-hidden" : "am-tree-node-children" },
                        this.props.children
                    )
                );
            }
        }]);

        return TreeNode;
    }(_react.Component);

    TreeNode.propTypes = {
        children: _react.PropTypes.element.isRequired,
        collapsed: _react.PropTypes.bool,
        filter: _react.PropTypes.string,
        highlighted: _react.PropTypes.bool.isRequired,
        node: _react.PropTypes.objectOf({
            id: _react.PropTypes.string.isRequired,
            children: _react.PropTypes.array,
            path: _react.PropTypes.string
        }).isRequired,
        onSelect: _react.PropTypes.func.isRequired
    };

    exports.default = TreeNode;
});
