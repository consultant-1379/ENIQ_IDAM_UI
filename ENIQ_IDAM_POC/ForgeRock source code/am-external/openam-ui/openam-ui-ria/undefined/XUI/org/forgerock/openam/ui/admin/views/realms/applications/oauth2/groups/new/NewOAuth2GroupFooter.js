define(["exports", "react-bootstrap", "i18next", "react", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _reactBootstrap, _i18next, _react, _Router, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Router2 = _interopRequireDefault(_Router);

    var _withRouter2 = _interopRequireDefault(_withRouter);

    var _withRouterPropType2 = _interopRequireDefault(_withRouterPropType);

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

    var NewOAuth2GroupFooter = function NewOAuth2GroupFooter(_ref) {
        var disableCreate = _ref.disableCreate,
            onCreateClick = _ref.onCreateClick,
            router = _ref.router;

        return _react2.default.createElement(
            _reactBootstrap.Clearfix,
            null,
            _react2.default.createElement(
                "div",
                { className: "pull-right" },
                _react2.default.createElement(
                    "div",
                    { className: "am-btn-action-group" },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        {
                            href: "#" + _Router2.default.getLink(_Router2.default.configuration.routes.realmsApplicationsOAuth2, [encodeURIComponent(router.params[0])])
                        },
                        (0, _i18next.t)("common.form.cancel")
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        {
                            bsStyle: "primary",
                            disabled: disableCreate,
                            onClick: onCreateClick
                        },
                        (0, _i18next.t)("common.form.create")
                    )
                )
            )
        );
    };

    NewOAuth2GroupFooter.propTypes = {
        disableCreate: _react.PropTypes.bool.isRequired,
        onCreateClick: _react.PropTypes.func.isRequired,
        router: _withRouterPropType2.default
    };

    exports.default = (0, _withRouter2.default)(NewOAuth2GroupFooter);
});
//# sourceMappingURL=NewOAuth2GroupFooter.js.map
