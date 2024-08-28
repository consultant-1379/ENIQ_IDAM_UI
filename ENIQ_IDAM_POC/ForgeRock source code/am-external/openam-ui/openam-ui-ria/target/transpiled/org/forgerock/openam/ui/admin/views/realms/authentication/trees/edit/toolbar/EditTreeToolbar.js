define(["exports", "react-bootstrap", "i18next", "react", "./EditTreeToolbarButton", "./EditTreeToolbarDivider", "./EditTreeToolbarTooltip"], function (exports, _reactBootstrap, _i18next, _react, _EditTreeToolbarButton, _EditTreeToolbarDivider, _EditTreeToolbarTooltip) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _EditTreeToolbarButton2 = _interopRequireDefault(_EditTreeToolbarButton);

    var _EditTreeToolbarDivider2 = _interopRequireDefault(_EditTreeToolbarDivider);

    var _EditTreeToolbarTooltip2 = _interopRequireDefault(_EditTreeToolbarTooltip);

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

    var EditTreeToolbar = function EditTreeToolbar(_ref) {
        var invertTooltipPlacement = _ref.invertTooltipPlacement,
            isDeleteNodeEnabled = _ref.isDeleteNodeEnabled,
            onAutoLayout = _ref.onAutoLayout,
            onFullscreenToggle = _ref.onFullscreenToggle,
            onNodeDelete = _ref.onNodeDelete,
            onTreeSave = _ref.onTreeSave;

        var tooltipPlacement = invertTooltipPlacement ? "bottom" : "top";
        var autoLayoutTitle = (0, _i18next.t)("console.authentication.trees.edit.toolbar.autoLayout");
        var fullscreenTitle = (0, _i18next.t)("console.authentication.trees.edit.toolbar.fullscreen");
        var deleteNodeTitle = (0, _i18next.t)("console.authentication.trees.edit.toolbar.deleteNode");

        return _react2.default.createElement(
            _reactBootstrap.ButtonToolbar,
            { className: "authtree-btn-toolbar" },
            _react2.default.createElement(
                _EditTreeToolbarTooltip2.default,
                {
                    placement: tooltipPlacement,
                    tooltip: autoLayoutTitle
                },
                _react2.default.createElement(
                    _EditTreeToolbarButton2.default,
                    {
                        onClick: onAutoLayout,
                        title: autoLayoutTitle
                    },
                    _react2.default.createElement("i", { className: "fa fa-sitemap fa-rotate-270" })
                )
            ),
            _react2.default.createElement(
                _EditTreeToolbarTooltip2.default,
                {
                    placement: tooltipPlacement,
                    tooltip: fullscreenTitle
                },
                _react2.default.createElement(
                    _EditTreeToolbarButton2.default,
                    {
                        onClick: onFullscreenToggle,
                        title: fullscreenTitle
                    },
                    _react2.default.createElement("i", { className: "fa fa-arrows-alt" })
                )
            ),
            _react2.default.createElement(_EditTreeToolbarDivider2.default, null),
            _react2.default.createElement(
                _EditTreeToolbarTooltip2.default,
                {
                    placement: tooltipPlacement,
                    tooltip: deleteNodeTitle
                },
                _react2.default.createElement(
                    _EditTreeToolbarButton2.default,
                    {
                        disabled: !isDeleteNodeEnabled,
                        onClick: onNodeDelete,
                        title: deleteNodeTitle
                    },
                    _react2.default.createElement("i", { className: "fa fa-trash" })
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: "primary", className: "pull-right", onClick: onTreeSave },
                (0, _i18next.t)("common.form.save")
            )
        );
    };

    EditTreeToolbar.propTypes = {
        invertTooltipPlacement: _react.PropTypes.bool.isRequired,
        isDeleteNodeEnabled: _react.PropTypes.bool.isRequired,
        onAutoLayout: _react.PropTypes.func.isRequired,
        onFullscreenToggle: _react.PropTypes.func.isRequired,
        onNodeDelete: _react.PropTypes.func.isRequired,
        onTreeSave: _react.PropTypes.func.isRequired
    };

    exports.default = EditTreeToolbar;
});
