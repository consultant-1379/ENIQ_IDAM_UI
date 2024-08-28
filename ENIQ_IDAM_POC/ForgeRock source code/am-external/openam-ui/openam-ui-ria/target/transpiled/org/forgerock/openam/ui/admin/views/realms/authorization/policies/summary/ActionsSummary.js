define(["exports", "lodash", "react-bootstrap", "i18next", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/EmptySectionCallToAction", "react"], function (exports, _lodash, _reactBootstrap, _i18next, _EmptySectionCallToAction, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _EmptySectionCallToAction2 = _interopRequireDefault(_EmptySectionCallToAction);

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var ActionsSummary = function ActionsSummary(_ref) {
        var actionValues = _ref.actionValues,
            onClick = _ref.onClick;

        if (_lodash2.default.isEmpty(actionValues)) {
            return _react2.default.createElement(_EmptySectionCallToAction2.default, { onClick: onClick, sectionName: (0, _i18next.t)("console.authorization.common.actions") });
        }

        var actions = (0, _lodash2.default)(actionValues).mapValues(function (value, key) {
            return _react2.default.createElement(
                _reactBootstrap.Badge,
                { key: key },
                key.toUpperCase(),
                ": ",
                value ? (0, _i18next.t)("console.authorization.common.allowed") : (0, _i18next.t)("console.authorization.common.denied")
            );
        }).values().value();

        return _react2.default.createElement(
            "span",
            { className: "am-badge-group" },
            actions
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
        * Copyright 2016-2017 ForgeRock AS.
        */

    ActionsSummary.propTypes = {
        actionValues: _react2.default.PropTypes.objectOf(_react.PropTypes.string),
        onClick: _react.PropTypes.func.isRequired
    };

    exports.default = ActionsSummary;
});
