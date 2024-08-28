define(["exports", "react-bootstrap", "i18next", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/ActionsSummary", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/ConditionsSummary", "react", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/ResourcesSummary", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/AttributesSummary", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/SummarySection"], function (exports, _reactBootstrap, _i18next, _ActionsSummary, _ConditionsSummary, _react, _ResourcesSummary, _AttributesSummary, _SummarySection) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _ActionsSummary2 = _interopRequireDefault(_ActionsSummary);

    var _ConditionsSummary2 = _interopRequireDefault(_ConditionsSummary);

    var _react2 = _interopRequireDefault(_react);

    var _ResourcesSummary2 = _interopRequireDefault(_ResourcesSummary);

    var _AttributesSummary2 = _interopRequireDefault(_AttributesSummary);

    var _SummarySection2 = _interopRequireDefault(_SummarySection);

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
     * Copyright 2016-2017 ForgeRock AS.
     */

    var SummaryView = function SummaryView(_ref) {
        var actionValues = _ref.actionValues,
            condition = _ref.condition,
            customAttributes = _ref.customAttributes,
            onClick = _ref.onClick,
            resources = _ref.resources,
            staticAttributes = _ref.staticAttributes,
            subject = _ref.subject,
            userAttributes = _ref.userAttributes;
        return _react2.default.createElement(
            _reactBootstrap.Grid,
            { bsClass: "", className: "am-masonry-grid-2" },
            _react2.default.createElement(
                _SummarySection2.default,
                { icon: "file-o", onClick: onClick, title: (0, _i18next.t)("console.authorization.common.resources") },
                _react2.default.createElement(_ResourcesSummary2.default, { resources: resources })
            ),
            _react2.default.createElement(
                _SummarySection2.default,
                { icon: "gavel", onClick: onClick, title: (0, _i18next.t)("console.authorization.common.actions") },
                _react2.default.createElement(_ActionsSummary2.default, { actionValues: actionValues, onClick: onClick })
            ),
            _react2.default.createElement(
                _SummarySection2.default,
                {
                    icon: "mail-reply",
                    onClick: onClick,
                    title: (0, _i18next.t)("console.authorization.common.responseAttributes")
                },
                _react2.default.createElement(_AttributesSummary2.default, {
                    customAttributes: customAttributes,
                    onClick: onClick,
                    staticAttributes: staticAttributes,
                    userAttributes: userAttributes
                })
            ),
            _react2.default.createElement(
                _SummarySection2.default,
                { icon: "users", onClick: onClick, title: (0, _i18next.t)("console.authorization.common.subjects") },
                _react2.default.createElement(_ConditionsSummary2.default, { condition: subject, conditionName: (0, _i18next.t)("console.authorization.common.subjects") })
            ),
            _react2.default.createElement(
                _SummarySection2.default,
                {
                    icon: "check-square-o",
                    onClick: onClick,
                    title: (0, _i18next.t)("console.authorization.common.environments")
                },
                _react2.default.createElement(_ConditionsSummary2.default, {
                    condition: condition,
                    conditionName: (0, _i18next.t)("console.authorization.common.environments"),
                    onClick: onClick
                })
            )
        );
    };

    SummaryView.propTypes = {
        actionValues: _react.PropTypes.object.isRequired, //eslint-disable-line react/forbid-prop-types
        condition: _react.PropTypes.object.isRequired, //eslint-disable-line react/forbid-prop-types
        customAttributes: _react.PropTypes.array.isRequired, //eslint-disable-line react/forbid-prop-types
        onClick: _react.PropTypes.func.isRequired,
        resources: _react.PropTypes.array.isRequired, //eslint-disable-line react/forbid-prop-types
        staticAttributes: _react.PropTypes.array.isRequired, //eslint-disable-line react/forbid-prop-types
        subject: _react.PropTypes.object.isRequired, //eslint-disable-line react/forbid-prop-types
        userAttributes: _react.PropTypes.array.isRequired //eslint-disable-line react/forbid-prop-types
    };

    exports.default = SummaryView;
});
