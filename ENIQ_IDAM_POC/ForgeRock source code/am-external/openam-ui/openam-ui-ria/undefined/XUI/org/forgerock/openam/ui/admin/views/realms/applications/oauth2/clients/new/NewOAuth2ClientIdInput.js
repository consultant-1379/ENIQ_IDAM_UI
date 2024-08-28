define(["exports", "react-bootstrap", "i18next", "lodash", "react"], function (exports, _reactBootstrap, _i18next, _lodash, _react) {
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

    var NewOAuth2ClientIdInput = function NewOAuth2ClientIdInput(_ref) {
        var clientId = _ref.clientId,
            onClientIdChange = _ref.onClientIdChange;

        var handleClientIdChange = function handleClientIdChange(event) {
            return onClientIdChange(event.target.value);
        };

        return _react2.default.createElement(
            _reactBootstrap.Form,
            { horizontal: true },
            _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: (0, _lodash.uniqueId)("clientId") },
                _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    { className: "col-sm-4" },
                    (0, _i18next.t)("console.applications.oauth2.clients.new.clientId")
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 6 },
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                        onChange: handleClientIdChange,
                        type: "text",
                        value: clientId
                    })
                )
            )
        );
    };

    NewOAuth2ClientIdInput.propTypes = {
        clientId: _react.PropTypes.string.isRequired,
        onClientIdChange: _react.PropTypes.func.isRequired
    };

    exports.default = NewOAuth2ClientIdInput;
});
//# sourceMappingURL=NewOAuth2ClientIdInput.js.map
