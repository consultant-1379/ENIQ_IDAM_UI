define(["exports", "lodash", "react", "classnames"], function (exports, _lodash, _react, _classnames) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _classnames2 = _interopRequireDefault(_classnames);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var NodeOutcome = function NodeOutcome(_ref) {
        var id = _ref.id,
            isConnected = _ref.isConnected,
            name = _ref.name,
            onMouseDown = _ref.onMouseDown,
            onMouseUp = _ref.onMouseUp;

        var uniqueOutcomeId = (0, _lodash.uniqueId)("outcome-" + id);
        var handleMouseDown = function handleMouseDown(event) {
            return onMouseDown(event, id);
        };

        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "label",
                { className: "sr-only", htmlFor: uniqueOutcomeId },
                name
            ),
            _react2.default.createElement("div", {
                className: (0, _classnames2.default)({
                    "authtree-outcome": true,
                    "authtree-outcome-invalid": !isConnected
                }),
                id: uniqueOutcomeId,
                onMouseDown: handleMouseDown,
                onMouseUp: onMouseUp,
                role: "presentation"
            })
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


    NodeOutcome.propTypes = {
        id: _react.PropTypes.string.isRequired,
        isConnected: _react.PropTypes.bool.isRequired,
        name: _react.PropTypes.string.isRequired,
        onMouseDown: _react.PropTypes.func.isRequired,
        onMouseUp: _react.PropTypes.func.isRequired
    };

    exports.default = NodeOutcome;
});
