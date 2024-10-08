define(["exports", "react", "i18next"], function (exports, _react, _i18next) {
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

    var Loading = function Loading() {
        return _react2.default.createElement(
            "p",
            { className: "loading text-muted" },
            _react2.default.createElement("i", { className: "fa fa-circle-o-notch fa-spin fa-2x fa-fw" }),
            _react2.default.createElement(
                "span",
                null,
                (0, _i18next.t)("console.common.loading")
            )
        );
    };

    exports.default = Loading;
});
