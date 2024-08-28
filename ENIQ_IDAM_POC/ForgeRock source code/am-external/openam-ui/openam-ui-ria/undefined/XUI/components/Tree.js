define(["exports", "lodash", "react", "./TreeLeafNode", "./TreeNode"], function (exports, _lodash, _react, _TreeLeafNode, _TreeNode) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _TreeLeafNode2 = _interopRequireDefault(_TreeLeafNode);

    var _TreeNode2 = _interopRequireDefault(_TreeNode);

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
     * Copyright 2016-2017 ForgeRock AS.
     */

    var Tree = function Tree(_ref) {
        var activePaths = _ref.activePaths,
            collapsed = _ref.collapsed,
            data = _ref.data,
            filter = _ref.filter,
            onNodeSelect = _ref.onNodeSelect;

        // We've disabled the rule here as we are not creating multiple components in this file
        var createNode = function createNode(node, activePaths) {
            // eslint-disable-line react/no-multi-comp
            var isNodeHighlighted = (0, _lodash.includes)(activePaths, node.objectPath);

            if (node.children) {
                var children = (0, _lodash.map)(node.children, function (node) {
                    return createNode(node, activePaths);
                });

                return _react2.default.createElement(
                    _TreeNode2.default,
                    {
                        collapsed: collapsed,
                        filter: filter,
                        highlighted: isNodeHighlighted,
                        node: node,
                        onSelect: onNodeSelect
                    },
                    children
                );
            } else {
                return _react2.default.createElement(_TreeLeafNode2.default, {
                    filter: filter,
                    highlighted: isNodeHighlighted,
                    node: node,
                    onSelect: onNodeSelect
                });
            }
        };

        return _react2.default.createElement(
            "ol",
            { className: "am-tree list-unstyled" },
            data.map(function (node) {
                return createNode(node, activePaths);
            })
        );
    };

    Tree.propTypes = {
        activePaths: _react2.default.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
        collapsed: _react.PropTypes.bool,
        data: _react2.default.PropTypes.arrayOf(_react.PropTypes.objectOf({
            id: _react.PropTypes.string.isRequired,
            children: _react.PropTypes.array,
            objectPath: _react.PropTypes.string.isRequired,
            path: _react.PropTypes.string
        })).isRequired,
        filter: _react.PropTypes.string,
        onNodeSelect: _react.PropTypes.func.isRequired
    };

    exports.default = Tree;
});
//# sourceMappingURL=Tree.js.map
