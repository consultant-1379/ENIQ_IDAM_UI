define(["exports", "react-bootstrap", "i18next", "react", "./clients/list/ListOAuth2ClientsContainer", "./groups/list/ListOAuth2GroupsContainer", "components/PageHeader"], function (exports, _reactBootstrap, _i18next, _react, _ListOAuth2ClientsContainer, _ListOAuth2GroupsContainer, _PageHeader) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ListOAuth2ClientsContainer2 = _interopRequireDefault(_ListOAuth2ClientsContainer);

    var _ListOAuth2GroupsContainer2 = _interopRequireDefault(_ListOAuth2GroupsContainer);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

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

    var OAuth2 = function OAuth2() {
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(_PageHeader2.default, { title: (0, _i18next.t)("console.applications.oauth2.title") }),
            _react2.default.createElement(
                _reactBootstrap.Tabs,
                { animation: false, defaultActiveKey: 1 },
                _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 1, title: (0, _i18next.t)("console.applications.oauth2.tabs.0") },
                    _react2.default.createElement(_ListOAuth2ClientsContainer2.default, null)
                ),
                _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 2, title: (0, _i18next.t)("console.applications.oauth2.tabs.1") },
                    _react2.default.createElement(_ListOAuth2GroupsContainer2.default, null)
                )
            )
        );
    };

    exports.default = OAuth2;
});
//# sourceMappingURL=OAuth2.js.map
