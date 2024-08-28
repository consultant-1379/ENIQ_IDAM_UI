define(["exports", "react", "react-bootstrap", "i18next", "components/CallToAction"], function (exports, _react, _reactBootstrap, _i18next, _CallToAction) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _CallToAction2 = _interopRequireDefault(_CallToAction);

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

    var ListOAuth2ClientsCallToAction = function ListOAuth2ClientsCallToAction(_ref) {
        var href = _ref.href;
        return _react2.default.createElement(
            _CallToAction2.default,
            null,
            _react2.default.createElement(
                "p",
                { className: "text-primary" },
                _react2.default.createElement("i", { className: "fa fa-list-alt fa-4x" })
            ),
            _react2.default.createElement(
                "h2",
                null,
                (0, _i18next.t)("console.applications.oauth2.clients.list.callToAction.title")
            ),
            _react2.default.createElement(
                "p",
                { className: "panel-description text-muted" },
                (0, _i18next.t)("console.applications.oauth2.clients.list.callToAction.description")
            ),
            _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: "primary", href: href },
                    _react2.default.createElement("i", { className: "fa fa-plus" }),
                    " ",
                    (0, _i18next.t)("console.applications.oauth2.clients.list.callToAction.button")
                )
            )
        );
    };

    ListOAuth2ClientsCallToAction.propTypes = {
        href: _react.PropTypes.string.isRequired
    };

    exports.default = ListOAuth2ClientsCallToAction;
});
