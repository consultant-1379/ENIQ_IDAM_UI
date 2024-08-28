define(["exports", "redux", "lodash", "react", "uuid", "store/modules/local/authentication/trees/current/nodes/properties", "store/modules/remote/authentication/trees/current/nodes/properties", "store/modules/local/authentication/trees/list", "store/modules/remote/authentication/trees/list", "store/modules/remote/authentication/trees/nodeTypes/schema", "store/modules/remote/authentication/trees/nodeTypes/list", "org/forgerock/openam/ui/admin/services/realm/authentication/TreeService", "store/modules/local/authentication/trees/current/nodes/static", "org/forgerock/openam/ui/admin/services/realm/authentication/NodeService", "store/modules/local/authentication/trees/current/tree", "store/modules/local/authentication/trees/current/index", "store/modules/remote/authentication/trees/current/tree", "store/modules/local/authentication/trees/current/nodes/selected", "store/modules/local/authentication/trees/current/nodes/measurements", "org/forgerock/openam/ui/admin/views/realms/authentication/trees/edit/autoLayout/index", "components/redux/connectWithStore", "./EditTree", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _redux, _lodash, _react, _uuid, _properties, _properties2, _list, _list2, _schema, _list3, _TreeService, _static, _NodeService, _tree, _index, _tree2, _selected, _measurements, _index2, _connectWithStore, _EditTree, _Messages, _Promise, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _uuid2 = _interopRequireDefault(_uuid);

    var _index3 = _interopRequireDefault(_index2);

    var _connectWithStore2 = _interopRequireDefault(_connectWithStore);

    var _EditTree2 = _interopRequireDefault(_EditTree);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _Promise2 = _interopRequireDefault(_Promise);

    var _withRouter2 = _interopRequireDefault(_withRouter);

    var _withRouterPropType2 = _interopRequireDefault(_withRouterPropType);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
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

    var containsNode = function containsNode(tree, id) {
        var connections = (0, _lodash.chain)(tree.nodes).values().pluck("connections").map(function (connections) {
            return (0, _lodash.values)(connections);
        }).flatten().value();

        return connections.indexOf(id) !== -1 || tree.entryNodeId === id;
    };

    var EditTreeContainer = function (_Component) {
        _inherits(EditTreeContainer, _Component);

        function EditTreeContainer() {
            _classCallCheck(this, EditTreeContainer);

            var _this = _possibleConstructorReturn(this, (EditTreeContainer.__proto__ || Object.getPrototypeOf(EditTreeContainer)).call(this));

            _this.state = {
                isFetching: true,
                isFullscreen: false
            };
            _this.handleAutoLayout = _this.handleAutoLayout.bind(_this);
            _this.handleFullscreenToggle = _this.handleFullscreenToggle.bind(_this);
            _this.handleTreeSave = _this.handleTreeSave.bind(_this);
            _this.performAutoLayout = _this.performAutoLayout.bind(_this);
            return _this;
        }

        _createClass(EditTreeContainer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                this.props.removeCurrentTree();
                var realm = this.props.router.params[0];

                (0, _NodeService.getAllTypes)(realm).then(function (response) {
                    _this2.props.setNodeTypes(response.result);
                }, function (reason) {
                    return _Messages2.default.addMessage({ response: reason, type: _Messages2.default.TYPE_DANGER });
                });

                var treeId = this.props.router.params[1];
                (0, _TreeService.get)(realm, treeId).then(function (tree) {
                    _this2.props.updateTree.inLocal(tree);
                    _this2.props.updateTree.inRemote(tree);

                    var hasSuccessNode = containsNode(tree, _static.SUCCESS_NODE_ID);
                    var hasFailureNode = containsNode(tree, _static.FAILURE_NODE_ID);

                    _this2.props.setNodes.toLocal(tree.nodes, tree.entryNodeId, hasSuccessNode, hasFailureNode);
                    _this2.props.setNodes.toRemote(tree.nodes);

                    _this2.setState({ isFetching: false });
                }, function (reason) {
                    _Messages2.default.addMessage({ response: reason, type: _Messages2.default.TYPE_DANGER });
                    _this2.setState({ isFetching: false });
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var hasDimensions = function hasDimensions(measurements) {
                    return !(0, _lodash.isEmpty)(measurements) && (0, _lodash.every)(measurements, function (_ref) {
                        var height = _ref.height,
                            width = _ref.width;

                        return height > 0 && width > 0;
                    });
                };

                var propsHasDimensions = hasDimensions(this.props.measurements);
                var nextPropsHasDimensions = hasDimensions(nextProps.measurements);

                if (!propsHasDimensions && nextPropsHasDimensions) {
                    this.performAutoLayout(nextProps.measurements);
                }
            }
        }, {
            key: "performAutoLayout",
            value: function performAutoLayout() {
                var _this3 = this;

                var measurements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.measurements;

                var newPositions = (0, _index3.default)((0, _lodash.findKey)((0, _static.start)(this.props.tree.entryNodeId)), this.props.localNodes, measurements);

                (0, _lodash.each)(newPositions, function (_ref2, id) {
                    var x = _ref2.x,
                        y = _ref2.y;

                    _this3.props.handleNodeMove({ id: id, x: x, y: y });
                });
            }
        }, {
            key: "handleAutoLayout",
            value: function handleAutoLayout() {
                this.performAutoLayout(this.props.measurements);
            }
        }, {
            key: "handleFullscreenToggle",
            value: function handleFullscreenToggle() {
                this.setState({ isFullscreen: !this.state.isFullscreen });
            }
        }, {
            key: "handleTreeSave",
            value: function handleTreeSave() {
                var _this4 = this;

                var realm = this.props.router.params[0];
                var nodeCreateOrUpdatePromises = (0, _lodash.map)(this.props.localNodeProperties, function (properties, nodeId) {
                    return (0, _NodeService.createOrUpdate)(realm, properties, properties._type._id, nodeId).then(function (node) {
                        _this4.props.addNodeProperties.toRemote(node);
                    });
                });

                _Promise2.default.all(nodeCreateOrUpdatePromises).then(function () {
                    (0, _TreeService.update)(realm, _extends({}, _this4.props.tree, {
                        nodes: (0, _lodash.omit)(_this4.props.localNodes, [_static.FAILURE_NODE_ID, (0, _lodash.findKey)((0, _static.start)()), _static.SUCCESS_NODE_ID])
                    }), _this4.props.tree._id).then(function (tree) {
                        var nodesToDelete = (0, _lodash.difference)((0, _lodash.keys)(_this4.props.remoteNodes), (0, _lodash.keys)(_this4.props.localNodes));
                        var nodeDeletePromises = (0, _lodash.map)(nodesToDelete, function (nodeId) {
                            return (0, _NodeService.remove)(realm, _this4.props.remoteNodes[nodeId].nodeType, nodeId).then(function () {
                                _this4.props.removeNodePropertiesFromRemote(nodeId);
                            });
                        });

                        _this4.props.updateTree.inRemote(tree);
                        _this4.props.setNodes.toRemote(tree.nodes);

                        _Promise2.default.all(nodeDeletePromises).then(function () {
                            _Messages2.default.messages.displayMessageFromConfig("changesSaved");
                        }, function (reason) {
                            _Messages2.default.addMessage({ response: reason, type: _Messages2.default.TYPE_DANGER });
                        });
                    }, function (reason) {
                        _Messages2.default.addMessage({ response: reason, type: _Messages2.default.TYPE_DANGER });
                    });
                }, function (reason) {
                    _Messages2.default.addMessage({ response: reason, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "updateLocalEntryNodeId",
            value: function updateLocalEntryNodeId(entryNodeId) {
                this.props.updateTree.inLocal(_extends({}, this.props.tree, {
                    entryNodeId: entryNodeId
                }));
            }
        }, {
            key: "render",
            value: function render() {
                var _this5 = this;

                var handleNodeDimensionsChange = function handleNodeDimensionsChange(id, height, width) {
                    return _this5.props.handleNodeDimensionsChange({ id: id, height: height, width: width });
                };
                var handleNodeMove = function handleNodeMove(id, x, y) {
                    return _this5.props.handleNodeMove({ id: id, x: x, y: y });
                };
                var handleNewConnection = function handleNewConnection(nodeID, outcomeID, destinationNodeId) {
                    _this5.props.addOrUpdateConnection(_defineProperty({}, outcomeID, destinationNodeId), nodeID);
                    if (nodeID === (0, _lodash.findKey)((0, _static.start)())) {
                        _this5.updateLocalEntryNodeId(destinationNodeId);
                    }
                };
                var handleNodeDelete = function handleNodeDelete(id) {
                    if (_this5.props.tree.entryNodeId === id) {
                        _this5.updateLocalEntryNodeId(null);
                    }
                    _this5.props.removeNode(id);
                };
                var handleNodeSelect = function handleNodeSelect(id, type) {
                    _this5.props.handleNodeSelect({ id: id, type: type });

                    if (!(0, _static.isStaticNodeType)(type) && !_this5.props.localNodeProperties[id]) {
                        var realm = _this5.props.router.params[0];
                        (0, _NodeService.getSchema)(realm, type).then(function (response) {
                            return _this5.props.addNodeSchema(response, type);
                        });

                        var isNew = !_this5.props.remoteNodes[id];
                        if (isNew) {
                            (0, _NodeService.getTemplate)(realm, type).then(function (response) {
                                _this5.props.addNodeProperties.toLocal(_extends({}, response, {
                                    _id: id,
                                    _type: { _id: type }
                                }));
                            });
                        } else {
                            (0, _NodeService.get)(realm, type, id).then(function (response) {
                                _this5.props.addNodeProperties.toRemote(response);
                                _this5.props.addNodeProperties.toLocal(response);
                            });
                        }
                    }
                };
                var handleNodePropertiesFieldChange = this.props.addNodeProperties.toLocal;
                var handleNodePropertiesChange = function handleNodePropertiesChange(id, type, properties) {
                    var realm = _this5.props.router.params[0];
                    (0, _NodeService.listOutcomes)(realm, properties, type).then(function (response) {
                        var currentOutcomes = _this5.props.localNodes[id]._outcomes;
                        var currentOutcomeKeys = (0, _lodash.pluck)(currentOutcomes, "id");
                        var newOutcomeKeys = (0, _lodash.pluck)(response, "id");

                        _this5.props.setNodeOutcomes(response, id);
                        _this5.props.removeConnection((0, _lodash.difference)(currentOutcomeKeys, newOutcomeKeys), id);
                    }, function (reason) {
                        return _Messages2.default.addMessage({ response: reason, type: _Messages2.default.TYPE_DANGER });
                    });
                };
                var handleNewNode = function handleNewNode(newNode, position) {
                    var id = void 0;

                    switch (newNode.nodeType) {
                        case _static.SUCCESS_NODE_TYPE:
                            id = _static.SUCCESS_NODE_ID;break;
                        case _static.FAILURE_NODE_TYPE:
                            id = _static.FAILURE_NODE_ID;break;
                        default:
                            id = (0, _uuid2.default)();
                    }

                    _this5.props.addNodeToLocal(_defineProperty({}, id, _extends({}, newNode, {
                        _outcomes: []
                    })));
                    _this5.props.handleNodeMove(_extends({ id: id }, position));
                    if (!(0, _static.isStaticNodeType)(newNode.nodeType)) {
                        handleNodeSelect(id, newNode.nodeType, true);
                        handleNodePropertiesChange(id, newNode.nodeType);
                    }
                };

                return _react2.default.createElement(_EditTree2.default, {
                    isFetching: this.state.isFetching,
                    isFullscreen: this.state.isFullscreen,
                    measurements: this.props.measurements,
                    nodeTypes: this.props.nodeTypes,
                    nodes: this.props.localNodes,
                    onAutoLayout: this.handleAutoLayout,
                    onFullscreenToggle: this.handleFullscreenToggle,
                    onNewConnection: handleNewConnection,
                    onNewNodeCreate: handleNewNode,
                    onNodeDelete: handleNodeDelete,
                    onNodeDeselect: this.props.handleNodeDeselect,
                    onNodeDimensionsChange: handleNodeDimensionsChange,
                    onNodeMove: handleNodeMove,
                    onNodePropertiesChange: handleNodePropertiesChange,
                    onNodePropertiesFieldChange: handleNodePropertiesFieldChange,
                    onNodeSelect: handleNodeSelect,
                    onTreeSave: this.handleTreeSave,
                    selectedNode: this.props.selectedNode,
                    selectedNodeProperties: this.props.selectedNodeProperties,
                    selectedNodeSchema: this.props.selectedNodeSchema
                });
            }
        }]);

        return EditTreeContainer;
    }(_react.Component);

    EditTreeContainer.propTypes = {
        addNodeProperties: _react.PropTypes.func.isRequired,
        addNodeSchema: _react.PropTypes.func.isRequired,
        addNodeToLocal: _react.PropTypes.func.isRequired,
        addOrUpdateConnection: _react.PropTypes.func.isRequired,
        handleNodeDeselect: _react.PropTypes.func.isRequired,
        handleNodeDimensionsChange: _react.PropTypes.func.isRequired,
        handleNodeMove: _react.PropTypes.func.isRequired,
        handleNodeSelect: _react.PropTypes.func.isRequired,
        localNodeProperties: _react.PropTypes.objectOf(_react.PropTypes.shape({
            _type: _react.PropTypes.shape({
                _id: _react.PropTypes.string
            })
        })).isRequired,
        localNodes: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        measurements: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        nodeTypes: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        remoteNodes: _react.PropTypes.objectOf(_react.PropTypes.object).isRequired,
        removeConnection: _react.PropTypes.func.isRequired,
        removeCurrentTree: _react.PropTypes.func.isRequired,
        removeNode: _react.PropTypes.func.isRequired,
        removeNodePropertiesFromRemote: _react.PropTypes.func.isRequired,
        router: _withRouterPropType2.default,
        selectedNode: _react.PropTypes.shape({
            id: _react.PropTypes.string,
            type: _react.PropTypes.string
        }),
        selectedNodeProperties: _react.PropTypes.objectOf(_react.PropTypes.any),
        selectedNodeSchema: _react.PropTypes.objectOf(_react.PropTypes.any),
        setNodeOutcomes: _react.PropTypes.func.isRequired,
        setNodeTypes: _react.PropTypes.func.isRequired,
        setNodes: _react.PropTypes.objectOf(_react.PropTypes.func.isRequired).isRequired,
        tree: _react.PropTypes.shape({
            _id: _react.PropTypes.string.isRequired,
            entryNodeId: _react.PropTypes.string
        }),
        updateTree: _react.PropTypes.func.isRequired
    };

    EditTreeContainer = (0, _connectWithStore2.default)(EditTreeContainer, function (state, ownProps) {
        var treeId = ownProps.router.params[1];
        var selectedNode = state.local.authentication.trees.current.nodes.selected;
        var localNodeProperties = state.local.authentication.trees.current.nodes.properties;

        return {
            localNodeProperties: localNodeProperties,
            localNodes: state.local.authentication.trees.current.tree,
            measurements: state.local.authentication.trees.current.nodes.measurements,
            nodeTypes: state.remote.authentication.trees.nodeTypes.list,
            remoteNodes: state.remote.authentication.trees.current.tree,
            selectedNode: selectedNode,
            selectedNodeProperties: localNodeProperties[selectedNode.id],
            selectedNodeSchema: state.remote.authentication.trees.nodeTypes.schema[selectedNode.type],
            tree: state.local.authentication.trees.list[treeId]
        };
    }, function (dispatch) {
        return {
            addNodeProperties: (0, _redux.bindActionCreators)({ toRemote: _properties2.addOrUpdate, toLocal: _properties.addOrUpdate }, dispatch),
            addNodeSchema: (0, _redux.bindActionCreators)(_schema.addOrUpdateSchema, dispatch),
            addNodeToLocal: (0, _redux.bindActionCreators)(_tree.addOrUpdateNode, dispatch),
            addOrUpdateConnection: (0, _redux.bindActionCreators)(_tree.addOrUpdateConnection, dispatch),
            handleNodeDeselect: (0, _redux.bindActionCreators)(_selected.remove, dispatch),
            handleNodeDimensionsChange: (0, _redux.bindActionCreators)(_measurements.updateDimensions, dispatch),
            handleNodeMove: (0, _redux.bindActionCreators)(_measurements.updatePosition, dispatch),
            handleNodeSelect: (0, _redux.bindActionCreators)(_selected.set, dispatch),
            removeConnection: (0, _redux.bindActionCreators)(_tree.removeConnection, dispatch),
            removeCurrentTree: (0, _redux.bindActionCreators)(_index.removeCurrentTree, dispatch),
            removeNode: (0, _redux.bindActionCreators)(_index.removeNode, dispatch),
            removeNodePropertiesFromRemote: (0, _redux.bindActionCreators)(_properties2.remove, dispatch),
            setNodeOutcomes: (0, _redux.bindActionCreators)(_tree.setOutcomes, dispatch),
            setNodes: (0, _redux.bindActionCreators)({ toRemote: _tree2.setNodes, toLocal: _tree.setNodes }, dispatch),
            setNodeTypes: (0, _redux.bindActionCreators)(_list3.set, dispatch),
            updateTree: (0, _redux.bindActionCreators)({ inRemote: _list2.addOrUpdate, inLocal: _list.addOrUpdate }, dispatch)
        };
    });
    EditTreeContainer = (0, _withRouter2.default)(EditTreeContainer);

    exports.default = EditTreeContainer;
});
