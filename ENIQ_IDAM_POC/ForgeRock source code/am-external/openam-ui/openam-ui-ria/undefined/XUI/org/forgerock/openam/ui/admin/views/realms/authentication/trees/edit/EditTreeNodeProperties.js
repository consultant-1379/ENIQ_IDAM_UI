define(["exports", "react-bootstrap", "lodash", "i18next", "classnames", "react", "components/form/Form"], function (exports, _reactBootstrap, _lodash, _i18next, _classnames, _react, _Form) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classnames2 = _interopRequireDefault(_classnames);

    var _react2 = _interopRequireDefault(_react);

    var _Form2 = _interopRequireDefault(_Form);

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

    var EditTreeNodeProperties = function EditTreeNodeProperties(_ref) {
        var isExpanded = _ref.isExpanded,
            nodeId = _ref.nodeId,
            nodeName = _ref.nodeName,
            nodeType = _ref.nodeType,
            onFieldChange = _ref.onFieldChange,
            onPropertiesChange = _ref.onPropertiesChange,
            properties = _ref.properties,
            schema = _ref.schema;

        var handleOnFieldChange = function handleOnFieldChange(_ref2) {
            var formData = _ref2.formData;
            return onFieldChange(formData);
        };
        var handlePropertiesChange = function handlePropertiesChange() {
            return onPropertiesChange(nodeId, nodeType, properties);
        };

        var title = void 0;
        var content = void 0;

        if (isExpanded) {
            title = _react2.default.createElement(
                "h4",
                { className: "authtree-content-side-title text-primary" },
                nodeName
            );
            content = (0, _lodash.has)(schema, "properties") ? _react2.default.createElement(
                _Form2.default,
                {
                    formData: properties,
                    onBlur: handlePropertiesChange,
                    onChange: handleOnFieldChange,
                    onSubmit: handlePropertiesChange,
                    schema: schema
                },
                _react2.default.createElement("button", { className: "hidden", type: "submit" })
            ) : _react2.default.createElement(
                _reactBootstrap.Alert,
                { bsStyle: "info" },
                _react2.default.createElement(
                    "p",
                    null,
                    (0, _i18next.t)("console.authentication.trees.edit.nodes.properties.noProperties")
                )
            );
        }

        return _react2.default.createElement(
            "div",
            {
                className: (0, _classnames2.default)({
                    "authtree-content-side": true,
                    "authtree-content-right": true,
                    "expanded": !!isExpanded
                })
            },
            title,
            content
        );
    };

    EditTreeNodeProperties.propTypes = {
        isExpanded: _react.PropTypes.bool.isRequired,
        nodeId: _react.PropTypes.string,
        nodeName: _react.PropTypes.string,
        nodeType: _react.PropTypes.string,
        onFieldChange: _react.PropTypes.func.isRequired,
        onPropertiesChange: _react.PropTypes.func.isRequired,
        properties: _react.PropTypes.objectOf(_react.PropTypes.any),
        schema: _react.PropTypes.objectOf(_react.PropTypes.any)
    };

    exports.default = EditTreeNodeProperties;
});
//# sourceMappingURL=EditTreeNodeProperties.js.map
