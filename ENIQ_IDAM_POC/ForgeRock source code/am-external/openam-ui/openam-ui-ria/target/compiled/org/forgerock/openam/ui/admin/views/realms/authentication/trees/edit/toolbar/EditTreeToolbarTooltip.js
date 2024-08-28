define(["exports", "react-bootstrap", "react"], function (exports, _reactBootstrap, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

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

    var EditTreeToolbarTooltip = function EditTreeToolbarTooltip(_ref) {
        var children = _ref.children,
            placement = _ref.placement,
            tooltip = _ref.tooltip;

        var overlay = _react2.default.createElement(
            _reactBootstrap.Tooltip,
            null,
            tooltip
        );

        return _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            {
                delayShow: 500,
                overlay: overlay,
                placement: placement,
                rootClose: true
            },
            children
        );
    };

    EditTreeToolbarTooltip.propTypes = {
        children: _react.PropTypes.node,
        placement: _react.PropTypes.oneOf(["bottom", "top"]).isRequired,
        tooltip: _react.PropTypes.string.isRequired
    };

    exports.default = EditTreeToolbarTooltip;
});
