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

    var TreeLeafNode = function TreeLeafNode(_ref) {
        var filter = _ref.filter,
            highlighted = _ref.highlighted,
            node = _ref.node,
            onSelect = _ref.onSelect;

        var onLeafSelect = function onLeafSelect() {
            onSelect(node.path);
        };

        return _react2.default.createElement(
            "li",
            { className: "" + (highlighted ? "active" : "") },
            _react2.default.createElement(
                "a",
                {
                    className: "am-tree-node-leaf",
                    onClick: onLeafSelect,
                    onKeyPress: onLeafSelect,
                    role: "button",
                    tabIndex: "0"
                },
                _react2.default.createElement(
                    _EmphasizedText2.default,
                    { match: filter },
                    node.id
                )
            )
        );
    };

    TreeLeafNode.propTypes = {
        filter: _react.PropTypes.string,
        highlighted: _react.PropTypes.bool.isRequired,
        node: _react.PropTypes.objectOf({
            id: _react.PropTypes.string.isRequired,
            path: _react.PropTypes.string
        }).isRequired,
        onSelect: _react.PropTypes.func.isRequired
    };

    exports.default = TreeLeafNode;
});
//# sourceMappingURL=TreeLeafNode.js.map
