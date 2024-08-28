define(["exports", "react-dnd", "lodash", "react-bootstrap", "classnames", "react-dnd-html5-backend", "react", "react-measure", "./EditTreeNodeTypes", "./EditTreeNodeProperties", "./toolbar/EditTreeToolbar", "components/Fullscreen", "components/Loading", "components/SubNav", "org/forgerock/openam/ui/admin/views/realms/SubNavRealmHomeLink", "./tree/Tree", "./tree/TreePadding"], function (exports, _reactDnd, _lodash, _reactBootstrap, _classnames, _reactDndHtml5Backend, _react, _reactMeasure, _EditTreeNodeTypes, _EditTreeNodeProperties, _EditTreeToolbar, _Fullscreen, _Loading, _SubNav, _SubNavRealmHomeLink, _Tree, _TreePadding) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classnames2 = _interopRequireDefault(_classnames);

    var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

    var _react2 = _interopRequireDefault(_react);

    var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

    var _EditTreeNodeTypes2 = _interopRequireDefault(_EditTreeNodeTypes);

    var _EditTreeNodeProperties2 = _interopRequireDefault(_EditTreeNodeProperties);

    var _EditTreeToolbar2 = _interopRequireDefault(_EditTreeToolbar);

    var _Fullscreen2 = _interopRequireDefault(_Fullscreen);

    var _Loading2 = _interopRequireDefault(_Loading);

    var _SubNav2 = _interopRequireDefault(_SubNav);

    var _SubNavRealmHomeLink2 = _interopRequireDefault(_SubNavRealmHomeLink);

    var _Tree2 = _interopRequireDefault(_Tree);

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

    var calculateTreeContainerHeight = function calculateTreeContainerHeight(isFullscreen) {
        var NAVBAR_HEIGHT = 76;
        var FOOTER_HEIGHT = 80;
        var SUBNAV_HEIGHT = 57;
        var TOOLBAR_HEIGHT = 55;

        return isFullscreen ? window.innerHeight - TOOLBAR_HEIGHT : window.innerHeight - TOOLBAR_HEIGHT - SUBNAV_HEIGHT - NAVBAR_HEIGHT - FOOTER_HEIGHT;
    };

    var calculateCanvasDimensions = function calculateCanvasDimensions(measurements, containerHeight, containerWidth) {
        var furthestBottom = (0, _lodash.reduce)(measurements, function (furthestBottom, measurement) {
            return (0, _lodash.max)([furthestBottom, measurement.y + measurement.height]);
        }, 0);
        var furthestRight = (0, _lodash.reduce)(measurements, function (furthestRight, measurement) {
            return (0, _lodash.max)([furthestRight, measurement.x + measurement.width]);
        }, 0);

        var canvasHeight = (0, _lodash.max)([containerHeight, furthestBottom + _TreePadding.TREE_PADDING]);
        var canvasWidth = (0, _lodash.max)([containerWidth, furthestRight + _TreePadding.TREE_PADDING]);

        return { canvasWidth: canvasWidth, canvasHeight: canvasHeight };
    };

    var EditTree = function (_Component) {
        _inherits(EditTree, _Component);

        function EditTree(props) {
            _classCallCheck(this, EditTree);

            var _this = _possibleConstructorReturn(this, (EditTree.__proto__ || Object.getPrototypeOf(EditTree)).call(this, props));

            _this.state = { containerWidth: 0 };
            _this.handleTreeMeasure = _this.handleTreeMeasure.bind(_this);
            _this.handleWindowResize = _this.handleWindowResize.bind(_this);
            return _this;
        }

        _createClass(EditTree, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                window.addEventListener("resize", (0, _lodash.debounce)(this.handleWindowResize, 100));
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener("resize", this.handleWindowResize);
            }
        }, {
            key: "handleWindowResize",
            value: function handleWindowResize() {
                this.forceUpdate();
            }
        }, {
            key: "handleTreeMeasure",
            value: function handleTreeMeasure(dimensions) {
                this.setState({
                    containerWidth: dimensions.width
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var handleNodeDelete = function handleNodeDelete() {
                    return _this2.props.onNodeDelete(_this2.props.selectedNode.id);
                };
                var containerHeight = calculateTreeContainerHeight(this.props.isFullscreen);

                var _calculateCanvasDimen = calculateCanvasDimensions(this.props.measurements, containerHeight, this.state.containerWidth),
                    canvasHeight = _calculateCanvasDimen.canvasHeight,
                    canvasWidth = _calculateCanvasDimen.canvasWidth;

                if (this.props.isFetching) {
                    return _react2.default.createElement(_Loading2.default, null);
                } else {
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            _SubNav2.default,
                            { fluid: true },
                            _react2.default.createElement(_SubNavRealmHomeLink2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Grid,
                            { fluid: true },
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _Fullscreen2.default,
                                    { isFullscreen: this.props.isFullscreen },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "authtree-container" },
                                        _react2.default.createElement(_EditTreeNodeTypes2.default, {
                                            nodeTypes: this.props.nodeTypes
                                        }),
                                        _react2.default.createElement(
                                            "div",
                                            {
                                                className: (0, _classnames2.default)({
                                                    "authtree-content-centre": true,
                                                    "collapsed-right": !!this.props.selectedNodeSchema
                                                })
                                            },
                                            _react2.default.createElement(_EditTreeToolbar2.default, {
                                                invertTooltipPlacement: this.props.isFullscreen,
                                                isDeleteNodeEnabled: !!this.props.selectedNode.id,
                                                onAutoLayout: this.props.onAutoLayout,
                                                onFullscreenToggle: this.props.onFullscreenToggle,
                                                onNodeDelete: handleNodeDelete,
                                                onTreeSave: this.props.onTreeSave
                                            }),
                                            _react2.default.createElement(
                                                _reactMeasure2.default,
                                                { onMeasure: this.handleTreeMeasure },
                                                _react2.default.createElement(_Tree2.default, {
                                                    canvasHeight: canvasHeight,
                                                    canvasWidth: canvasWidth,
                                                    containerHeight: containerHeight,
                                                    measurements: this.props.measurements,
                                                    nodes: this.props.nodes,
                                                    onNewConnection: this.props.onNewConnection,
                                                    onNewNodeCreate: this.props.onNewNodeCreate,
                                                    onNodeDeselect: this.props.onNodeDeselect,
                                                    onNodeDimensionsChange: this.props.onNodeDimensionsChange,
                                                    onNodeMove: this.props.onNodeMove,
                                                    onNodeSelect: this.props.onNodeSelect,
                                                    selectedNodeId: this.props.selectedNode.id
                                                })
                                            )
                                        ),
                                        _react2.default.createElement(_EditTreeNodeProperties2.default, {
                                            isExpanded: !!this.props.selectedNodeSchema,
                                            nodeId: this.props.selectedNode.id,
                                            nodeName: (0, _lodash.get)(this.props.nodes[this.props.selectedNode.id], "displayName"),
                                            nodeType: this.props.selectedNode.type,
                                            onFieldChange: this.props.onNodePropertiesFieldChange,
                                            onPropertiesChange: this.props.onNodePropertiesChange,
                                            properties: this.props.selectedNodeProperties,
                                            schema: this.props.selectedNodeSchema
                                        })
                                    )
                                )
                            )
                        )
                    );
                }
            }
        }]);

        return EditTree;
    }(_react.Component);

    EditTree.propTypes = {
        isFetching: _react.PropTypes.bool.isRequired,
        isFullscreen: _react.PropTypes.bool.isRequired,
        measurements: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        nodeTypes: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        nodes: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        onAutoLayout: _react.PropTypes.func.isRequired,
        onFullscreenToggle: _react.PropTypes.func.isRequired,
        onNewConnection: _react.PropTypes.func.isRequired,
        onNewNodeCreate: _react.PropTypes.func.isRequired,
        onNodeDelete: _react.PropTypes.func.isRequired,
        onNodeDeselect: _react.PropTypes.func.isRequired,
        onNodeDimensionsChange: _react.PropTypes.func.isRequired,
        onNodeMove: _react.PropTypes.func.isRequired,
        onNodePropertiesChange: _react.PropTypes.func.isRequired,
        onNodePropertiesFieldChange: _react.PropTypes.func.isRequired,
        onNodeSelect: _react.PropTypes.func.isRequired,
        onTreeSave: _react.PropTypes.func.isRequired,
        selectedNode: _react.PropTypes.shape({
            id: _react.PropTypes.string,
            type: _react.PropTypes.string
        }),
        selectedNodeProperties: _react.PropTypes.objectOf(_react.PropTypes.any),
        selectedNodeSchema: _react.PropTypes.objectOf(_react.PropTypes.any)
    };

    exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(EditTree);
});
