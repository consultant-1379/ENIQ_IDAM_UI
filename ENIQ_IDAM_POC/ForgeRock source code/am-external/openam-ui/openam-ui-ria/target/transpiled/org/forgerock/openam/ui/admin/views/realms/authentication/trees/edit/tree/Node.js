define(["exports", "lodash", "classnames", "react-bootstrap", "react-draggable", "react-measure", "react", "./NodeOutcome", "./NodeOutcomeWithLabel", "store/modules/local/authentication/trees/current/nodes/static", "./TreePadding"], function (exports, _lodash, _classnames, _reactBootstrap, _reactDraggable, _reactMeasure, _react, _NodeOutcome, _NodeOutcomeWithLabel, _static, _TreePadding) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classnames2 = _interopRequireDefault(_classnames);

    var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

    var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

    var _react2 = _interopRequireDefault(_react);

    var _NodeOutcome2 = _interopRequireDefault(_NodeOutcome);

    var _NodeOutcomeWithLabel2 = _interopRequireDefault(_NodeOutcomeWithLabel);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /*
     * The contents of this file are subject to the terms of the Common Development and
     * Distribution License (the License). You may not use this file except in compliance with the
     * License.
     *
     * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
     * specific language governing permission and limitations under the License.
     *
     * When distributing Covered Software, include this CDDL Header Notice in each file and include
     * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
     * Header, with the fields enclosed by brackets [] replaced by your own identifying
     * information: "Portions copyright [year] [name of copyright owner]".
     *
     * Copyright 2017 ForgeRock AS.
     */
    var Node = function Node(_ref) {
        var id = _ref.id,
            isInputConnected = _ref.isInputConnected,
            isSelected = _ref.isSelected,
            node = _ref.node,
            onConnectionFinish = _ref.onConnectionFinish,
            onConnectionStart = _ref.onConnectionStart,
            onDrag = _ref.onDrag,
            onDragStop = _ref.onDragStop,
            onMeasure = _ref.onMeasure,
            onSelect = _ref.onSelect,
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        var isStartNode = id === (0, _lodash.findKey)((0, _static.start)());
        var handleDrag = function handleDrag(event, _ref2) {
            var x = _ref2.x,
                y = _ref2.y;
            return onDrag(id, x, y);
        };
        var handleDragStop = function handleDragStop(event, _ref3) {
            var x = _ref3.x,
                y = _ref3.y;
            return onDragStop(id, x, y);
        };
        var handleNodeMouseDown = function handleNodeMouseDown() {
            var selectedId = isStartNode ? null : id;
            onSelect(selectedId, node.nodeType);
        };
        var handleNodeMouseUp = function handleNodeMouseUp() {
            if (!isStartNode) {
                onConnectionFinish(id);
            }
        };
        var handleMeasure = function handleMeasure(dimensions) {
            return onMeasure(id, dimensions);
        };
        var handleOutcomeMouseDown = function handleOutcomeMouseDown(event, name) {
            event.stopPropagation();
            onConnectionStart(id, event, name);
        };
        var handleOutcomeMouseUp = function handleOutcomeMouseUp(event) {
            return event.stopPropagation();
        };

        var title = _react2.default.createElement(
            "div",
            { className: "authtree-node-title" },
            node.displayName
        );
        var outcomes = node._outcomes;
        var content = void 0;

        if (outcomes.length === 0) {
            content = title;
        } else if (outcomes.length === 1) {
            var outcomeId = outcomes[0].id;
            content = _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "pull-right" },
                    _react2.default.createElement(_NodeOutcome2.default, {
                        id: outcomeId,
                        isConnected: (0, _lodash.has)(node.connections, outcomeId),
                        name: outcomes[0].displayName,
                        onMouseDown: handleOutcomeMouseDown,
                        onMouseUp: handleOutcomeMouseUp
                    })
                ),
                title
            );
        } else {
            content = _react2.default.createElement(
                "div",
                null,
                title,
                _react2.default.createElement(
                    _reactBootstrap.Clearfix,
                    { className: "authtree-node-outcomes" },
                    _react2.default.createElement(
                        "ul",
                        { className: "pull-right" },
                        (0, _lodash.map)(outcomes, function (_ref4) {
                            var id = _ref4.id,
                                displayName = _ref4.displayName;
                            return _react2.default.createElement(_NodeOutcomeWithLabel2.default, {
                                id: id,
                                isConnected: (0, _lodash.has)(node.connections, id),
                                key: id,
                                name: displayName,
                                onMouseDown: handleOutcomeMouseDown,
                                onMouseUp: handleOutcomeMouseUp
                            });
                        })
                    )
                )
            );
        }

        var isOutputsConnected = (0, _lodash.size)(node.connections) === (0, _lodash.size)(node._outcomes);

        return _react2.default.createElement(
            _reactDraggable2.default,
            {
                bounds: { top: _TreePadding.TREE_PADDING, left: _TreePadding.TREE_PADDING },
                onDrag: handleDrag,
                onMouseDown: handleNodeMouseDown,
                onStop: handleDragStop,
                position: { x: x, y: y }
            },
            _react2.default.createElement(
                "div",
                { id: "node-" + id },
                _react2.default.createElement(
                    _reactMeasure2.default,
                    { onMeasure: handleMeasure },
                    _react2.default.createElement(
                        "div",
                        {
                            className: (0, _classnames2.default)({
                                "authtree-node": true,
                                "authtree-node-has-input": !isStartNode,
                                "authtree-node-has-input-invalid": !isInputConnected,
                                "authtree-node-invalid": !isStartNode && !isInputConnected || !isOutputsConnected,
                                "authtree-node-selected": isSelected
                            }),
                            onMouseUp: handleNodeMouseUp,
                            role: "presentation"
                        },
                        content
                    )
                )
            )
        );
    };

    Node.propTypes = {
        id: _react.PropTypes.string.isRequired,
        isInputConnected: _react.PropTypes.bool.isRequired,
        isSelected: _react.PropTypes.bool.isRequired,
        node: _react.PropTypes.shape({
            _outcomes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
                id: _react.PropTypes.string.isRequired,
                displayName: _react.PropTypes.string.isRequired
            })).isRequired,
            connections: _react.PropTypes.objectOf(_react.PropTypes.objectOf(_react.PropTypes.string)).isRequired,
            displayName: _react.PropTypes.string.isRequired,
            nodeType: _react.PropTypes.string.isRequired
        }).isRequired,
        onConnectionFinish: _react.PropTypes.func.isRequired,
        onConnectionStart: _react.PropTypes.func.isRequired,
        onDrag: _react.PropTypes.func.isRequired,
        onDragStop: _react.PropTypes.func.isRequired,
        onMeasure: _react.PropTypes.func.isRequired,
        onSelect: _react.PropTypes.func.isRequired,
        x: _react.PropTypes.number,
        y: _react.PropTypes.number
    };

    exports.default = Node;
});
