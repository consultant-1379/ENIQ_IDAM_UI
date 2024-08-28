define(["exports", "lodash", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/EmptySectionCallToAction", "react"], function (exports, _lodash, _EmptySectionCallToAction, _react) {
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

    var ConditionsSummary = function ConditionsSummary(_ref) {
        var condition = _ref.condition,
            conditionName = _ref.conditionName,
            onClick = _ref.onClick;

        return _lodash2.default.isEmpty(condition) ? _react2.default.createElement(_EmptySectionCallToAction2.default, { onClick: onClick, sectionName: conditionName }) : _react2.default.createElement(
            "pre",
            { className: "am-text-preformatted" },
            JSON.stringify(condition, null, 2)
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

    ConditionsSummary.propTypes = {
        condition: _react2.default.PropTypes.objectOf(_react.PropTypes.any),
        conditionName: _react.PropTypes.string.isRequired,
        onClick: _react.PropTypes.func.isRequired
    };

    exports.default = ConditionsSummary;
});
