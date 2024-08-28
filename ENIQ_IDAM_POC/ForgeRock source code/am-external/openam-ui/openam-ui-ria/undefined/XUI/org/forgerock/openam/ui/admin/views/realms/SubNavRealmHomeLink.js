define(["exports", "react", "org/forgerock/openam/ui/admin/views/realms/humanizeRealmPath", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/components/hoc/withRouter", "org/forgerock/commons/ui/common/components/hoc/withRouterPropType"], function (exports, _react, _humanizeRealmPath, _Router, _withRouter, _withRouterPropType) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _humanizeRealmPath2 = _interopRequireDefault(_humanizeRealmPath);

    var _Router2 = _interopRequireDefault(_Router);

    var _withRouter2 = _interopRequireDefault(_withRouter);

    var _withRouterPropType2 = _interopRequireDefault(_withRouterPropType);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Renders the sub navigation realm and link to the default realms page.
     * @module org/forgerock/openam/ui/admin/views/realms/SubNavRealmHomeLink
     * @returns {ReactElement} Renderable React element
     */
    var SubNavRealmHomeLink = function SubNavRealmHomeLink(_ref) {
        var router = _ref.router;

        var realmPath = router.params[0];
        var realmName = (0, _humanizeRealmPath2.default)(realmPath);
        var realmHome = "#" + _Router2.default.getLink(_Router2.default.configuration.routes.realmDefault, [encodeURIComponent(realmPath)]);

        return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement("i", { className: "fa fa-cloud" }),
            " ",
            _react2.default.createElement(
                "a",
                { href: realmHome },
                realmName
            )
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

    SubNavRealmHomeLink.propTypes = {
        router: _withRouterPropType2.default
    };

    exports.default = (0, _withRouter2.default)(SubNavRealmHomeLink);
});
//# sourceMappingURL=SubNavRealmHomeLink.js.map
