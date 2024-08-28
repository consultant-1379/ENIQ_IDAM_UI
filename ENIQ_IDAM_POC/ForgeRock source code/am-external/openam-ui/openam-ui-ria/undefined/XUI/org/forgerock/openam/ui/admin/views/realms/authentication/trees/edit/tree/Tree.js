define(["exports", "lodash", "react-dnd", "classnames", "react", "./Connection", "./Node", "org/forgerock/openam/ui/admin/views/realms/authentication/trees/edit/EditTreeDragItemTypes", "./TreePadding"], function (exports, _lodash, _reactDnd, _classnames, _react, _Connection, _Node, _EditTreeDragItemTypes, _TreePadding) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classnames2 = _interopRequireDefault(_classnames);

    var _react2 = _interopRequireDefault(_react);

    var _Connection2 = _interopRequireDefault(_Connection);

    var _Node2 = _interopRequireDefault(_Node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

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

    var INPUT_Y_OFFSET = 22;
    var SINGLE_OUTCOME_Y_OFFSET = 22;
    var OUTCOME_Y_SPACING = 17;
    var MULTI_OUTCOME_Y_OFFSET = 55;

    var computeInputPosition = function computeInputPosition(measurements) {
        return {
            x: measurements.x,
            y: measurements.y + INPUT_Y_OFFSET
        };
    };
    var computeOutcomePosition = function computeOutcomePosition(measurements, outcomes, outcomeId) {
        var width = measurements.width || 0;
        var outcomeIndex = (0, _lodash.findIndex)(outcomes, { id: outcomeId });
        var yOffset = (0, _lodash.size)(outcomes) > 1 ? MULTI_OUTCOME_Y_OFFSET + OUTCOME_Y_SPACING * outcomeIndex : SINGLE_OUTCOME_Y_OFFSET;
        return {
            x: measurements.x + width,
            y: measurements.y + yOffset
        };
    };
    var getNewConnectionEnd = function getNewConnectionEnd(event, node) {
        var rect = node.getBoundingClientRect();
        return {
            x: event.clientX + node.scrollLeft - rect.left,
            y: event.clientY + node.scrollTop - rect.top
        };
    };

    var Tree = function (_Component) {
        _inherits(Tree, _Component);

        function Tree(props) {
            _classCallCheck(this, Tree);

            var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

            _this.state = { newConnectionFromNodeId: null };
            _this.handleConnectionFinish = _this.handleConnectionFinish.bind(_this);
            _this.handleConnectionStart = _this.handleConnectionStart.bind(_this);
            _this.handleNewConnectionFinish = _this.handleNewConnectionFinish.bind(_this);
            _this.handleNewConnectionMove = _this.handleNewConnectionMove.bind(_this);
            _this.setRef = _this.setRef.bind(_this);
            return _this;
        }

        _createClass(Tree, [{
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var ownerDocument = this.domNode.ownerDocument;

                ownerDocument.removeEventListener("mousemove", this.handleNewConnectionMove);
                ownerDocument.removeEventListener("mouseup", this.handleNewConnectionFinish);
            }
        }, {
            key: "handleConnectionStart",
            value: function handleConnectionStart(nodeId, event, outcome) {
                var node = this.domNode;
                var newConnectionEnd = getNewConnectionEnd(event, node);

                var ownerDocument = node.ownerDocument;

                ownerDocument.addEventListener("mousemove", this.handleNewConnectionMove);
                ownerDocument.addEventListener("mouseup", this.handleNewConnectionFinish);

                this.setState({
                    newConnectionFromNodeId: nodeId,
                    newConnectionFromOutcome: outcome,
                    newConnectionEndX: newConnectionEnd.x,
                    newConnectionEndY: newConnectionEnd.y
                });
            }
        }, {
            key: "handleNewConnectionMove",
            value: function handleNewConnectionMove(event) {
                var newConnectionEnd = getNewConnectionEnd(event, this.domNode);
                this.setState({
                    newConnectionEndX: newConnectionEnd.x,
                    newConnectionEndY: newConnectionEnd.y
                });
            }
        }, {
            key: "handleNewConnectionFinish",
            value: function handleNewConnectionFinish() {
                var ownerDocument = this.domNode.ownerDocument;

                ownerDocument.removeEventListener("mousemove", this.handleNewConnectionMove);
                ownerDocument.removeEventListener("mouseup", this.handleNewConnectionFinish);
                this.setState({
                    newConnectionFromNodeId: null
                });
            }
        }, {
            key: "handleConnectionFinish",
            value: function handleConnectionFinish(nodeId) {
                if (this.state.newConnectionFromNodeId !== null) {
                    this.props.onNewConnection(this.state.newConnectionFromNodeId, this.state.newConnectionFromOutcome, nodeId);
                }
            }
        }, {
            key: "setRef",
            value: function setRef(element) {
                this.domNode = element;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var handleDrag = function handleDrag(id, x, y) {
                    _this2.setState({
                        draggingNodeId: id,
                        draggingNodeX: x,
                        draggingNodeY: y
                    });
                };
                var handleDragStop = function handleDragStop(id, x, y) {
                    _this2.setState({ draggingNodeId: null });
                    _this2.props.onNodeMove(id, (0, _lodash.round)(x), (0, _lodash.round)(y));
                };
                var handleNodeMeasure = function handleNodeMeasure(id, dimensions) {
                    return _this2.props.onNodeDimensionsChange(id, dimensions.height, dimensions.width);
                };

                var measurements = (0, _lodash.mapValues)(this.props.measurements, function (measurement) {
                    return measurement.id === _this2.state.draggingNodeId ? _extends({}, measurement, { x: _this2.state.draggingNodeX, y: _this2.state.draggingNodeY }) : measurement;
                });

                var nodesWithConnectedInputs = (0, _lodash.reduce)((0, _lodash.pluck)(this.props.nodes, "connections"), function (result, connections) {
                    return (0, _lodash.union)(result, (0, _lodash.values)(connections));
                }, []);

                var nodeComponents = (0, _lodash.map)(this.props.nodes, function (node, nodeId) {
                    var measurement = measurements[nodeId];
                    var x = measurement ? measurement.x : 0;
                    var y = measurement ? measurement.y : 0;
                    return _react2.default.createElement(_Node2.default, {
                        id: nodeId,
                        isInputConnected: (0, _lodash.contains)(nodesWithConnectedInputs, nodeId),
                        isSelected: nodeId === _this2.props.selectedNodeId,
                        key: nodeId,
                        node: node,
                        onConnectionFinish: _this2.handleConnectionFinish,
                        onConnectionStart: _this2.handleConnectionStart,
                        onDrag: handleDrag,
                        onDragStop: handleDragStop,
                        onMeasure: handleNodeMeasure,
                        onSelect: _this2.props.onNodeSelect,
                        x: x,
                        y: y
                    });
                });

                var connectionComponents = (0, _lodash.chain)(this.props.nodes).map(function (node, nodeId) {
                    var connections = _this2.props.nodes[nodeId].connections;
                    var outcomes = _this2.props.nodes[nodeId]._outcomes;
                    var components = (0, _lodash.map)(connections, function (destinationNodeId, outcomeId) {
                        var fromNodeMeasurements = measurements[nodeId];
                        var toNodeMeasurements = measurements[destinationNodeId];
                        if (fromNodeMeasurements && toNodeMeasurements) {
                            var start = _extends({
                                id: nodeId,
                                width: fromNodeMeasurements.width,
                                height: fromNodeMeasurements.height
                            }, computeOutcomePosition(fromNodeMeasurements, outcomes, outcomeId));
                            var end = _extends({
                                id: destinationNodeId
                            }, computeInputPosition(toNodeMeasurements));
                            return _react2.default.createElement(_Connection2.default, {
                                end: end,
                                isInputForSelectedNode: _this2.props.selectedNodeId === destinationNodeId,
                                isOutputForSelectedNode: _this2.props.selectedNodeId === nodeId,
                                start: start
                            });
                        } else {
                            return null;
                        }
                    });
                    return components;
                }).flatten().value();

                if (this.state.newConnectionFromNodeId !== null) {
                    var fromNodeMeasurements = this.props.measurements[this.state.newConnectionFromNodeId];
                    var fromNodeOutcomes = this.props.nodes[this.state.newConnectionFromNodeId]._outcomes;
                    var start = _extends({
                        id: this.state.newConnectionFromNodeId,
                        width: fromNodeMeasurements.width,
                        height: fromNodeMeasurements.height
                    }, computeOutcomePosition(fromNodeMeasurements, fromNodeOutcomes, this.state.newConnectionFromOutcome));
                    var end = {
                        x: this.state.newConnectionEndX,
                        y: this.state.newConnectionEndY
                    };

                    connectionComponents.push(_react2.default.createElement(_Connection2.default, { end: end, isNew: true, key: connectionComponents.length + 1, start: start }));
                }

                var handleSvgClick = function handleSvgClick() {
                    return _this2.props.onNodeDeselect();
                };

                return this.props.connectDropTarget(_react2.default.createElement(
                    "div",
                    {
                        className: (0, _classnames2.default)({
                            "authtree-editor-container": true,
                            "authtree-editor-container-dragging-connector": this.state.newConnectionFromNodeId !== null
                        }),
                        style: { height: this.props.containerHeight }
                    },
                    _react2.default.createElement(
                        "div",
                        { className: "authtree-editor", ref: this.setRef },
                        nodeComponents,
                        _react2.default.createElement(
                            "svg",
                            {
                                className: "authtree-editor-svg",
                                onClick: handleSvgClick,
                                style: {
                                    height: this.props.canvasHeight,
                                    width: this.props.canvasWidth
                                }
                            },
                            connectionComponents
                        )
                    )
                ));
            }
        }]);

        return Tree;
    }(_react.Component);

    Tree.propTypes = {
        canvasHeight: _react.PropTypes.number.isRequired,
        canvasWidth: _react.PropTypes.number.isRequired,
        connectDropTarget: _react.PropTypes.func.isRequired,
        containerHeight: _react.PropTypes.number.isRequired,
        measurements: _react.PropTypes.objectOf(_react.PropTypes.shape({
            _id: _react.PropTypes.string.isRequired,
            height: _react.PropTypes.number.isRequired,
            width: _react.PropTypes.number.isRequired,
            x: _react.PropTypes.number.isRequired,
            y: _react.PropTypes.number.isRequired
        })),
        nodes: _react.PropTypes.objectOf(_react.PropTypes.shape({
            _outcomes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
                id: _react.PropTypes.string.isRequired,
                displayName: _react.PropTypes.string.isRequired
            })).isRequired,
            connections: _react.PropTypes.objectOf(_react.PropTypes.objectOf(_react.PropTypes.string)).isRequired
        })).isRequired,
        onNewConnection: _react.PropTypes.func.isRequired,
        onNodeDeselect: _react.PropTypes.func.isRequired,
        onNodeDimensionsChange: _react.PropTypes.func.isRequired,
        onNodeMove: _react.PropTypes.func.isRequired,
        onNodeSelect: _react.PropTypes.func.isRequired,
        selectedNodeId: _react.PropTypes.string.isRequired
    };

    var dropTarget = {
        drop: function drop(props, monitor, component) {
            var authtreeEditorClientRect = component.domNode.getBoundingClientRect();
            var iconRadius = 15;
            var mousePositionRelativeToElement = {
                x: monitor.getInitialClientOffset().x - monitor.getInitialSourceClientOffset().x,
                y: monitor.getInitialClientOffset().y - monitor.getInitialSourceClientOffset().y
            };
            var position = {
                x: monitor.getClientOffset().x - authtreeEditorClientRect.left - mousePositionRelativeToElement.x + iconRadius,
                y: monitor.getClientOffset().y - authtreeEditorClientRect.top - mousePositionRelativeToElement.y
            };

            position.x = (0, _lodash.max)([position.x, _TreePadding.TREE_PADDING]);
            position.y = (0, _lodash.max)([position.y, _TreePadding.TREE_PADDING]);
            props.onNewNodeCreate(monitor.getItem(), position);
        }
    };

    function collect(connect) {
        return {
            connectDropTarget: connect.dropTarget()
        };
    }

    exports.default = (0, _reactDnd.DropTarget)(_EditTreeDragItemTypes.NODE_TYPE, dropTarget, collect)(Tree);
});
//# sourceMappingURL=Tree.js.map
