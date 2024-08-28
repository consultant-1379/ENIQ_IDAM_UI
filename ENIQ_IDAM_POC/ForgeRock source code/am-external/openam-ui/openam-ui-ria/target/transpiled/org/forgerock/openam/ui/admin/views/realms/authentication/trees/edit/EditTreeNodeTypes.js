define(["exports", "lodash", "i18next", "react", "./EditTreeNodeTypeItem", "store/modules/local/authentication/trees/current/nodes/static"], function (exports, _lodash, _i18next, _react, _EditTreeNodeTypeItem, _static) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _EditTreeNodeTypeItem2 = _interopRequireDefault(_EditTreeNodeTypeItem);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var EditTreeNodeTypes = function EditTreeNodeTypes(_ref) {
        var nodeTypes = _ref.nodeTypes;

        var sortedNodeTypes = (0, _lodash.sortBy)(nodeTypes, "name");
        var nodeTypeItems = (0, _lodash.map)(sortedNodeTypes, function (_ref2) {
            var _id = _ref2._id,
                name = _ref2.name;
            return _react2.default.createElement(_EditTreeNodeTypeItem2.default, { displayName: name, key: _id, nodeType: _id });
        });
        var localePath = "console.authentication.trees.edit.nodes";

        return _react2.default.createElement(
            "div",
            { className: "authtree-content-side authtree-content-left" },
            _react2.default.createElement(
                "h4",
                { className: "authtree-content-side-title" },
                (0, _i18next.t)(localePath + ".nodeTypes.title")
            ),
            _react2.default.createElement(_EditTreeNodeTypeItem2.default, {
                displayName: (0, _i18next.t)(localePath + ".success.title"),
                key: _static.SUCCESS_NODE_TYPE,
                nodeType: _static.SUCCESS_NODE_TYPE
            }),
            _react2.default.createElement(_EditTreeNodeTypeItem2.default, {
                displayName: (0, _i18next.t)(localePath + ".failure.title"),
                key: _static.FAILURE_NODE_TYPE,
                nodeType: _static.FAILURE_NODE_TYPE
            }),
            _react2.default.createElement("hr", null),
            nodeTypeItems
        );
    }; /*
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


    EditTreeNodeTypes.propTypes = {
        nodeTypes: _react.PropTypes.objectOf(_react.PropTypes.shape({
            _id: _react.PropTypes.string.isRequired,
            name: _react.PropTypes.string.isRequired
        })).isRequired
    };

    exports.default = EditTreeNodeTypes;
});
