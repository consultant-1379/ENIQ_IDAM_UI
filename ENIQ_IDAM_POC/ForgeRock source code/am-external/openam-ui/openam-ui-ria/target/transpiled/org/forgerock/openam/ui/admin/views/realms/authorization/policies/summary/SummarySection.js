define(["exports", "react-bootstrap", "react", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/SectionMediaHeader"], function (exports, _reactBootstrap, _react, _SectionMediaHeader) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _SectionMediaHeader2 = _interopRequireDefault(_SectionMediaHeader);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var SummarySection = function SummarySection(_ref) {
        var children = _ref.children,
            icon = _ref.icon,
            onClick = _ref.onClick,
            title = _ref.title;

        return _react2.default.createElement(
            _reactBootstrap.Panel,
            {
                className: "am-masonry-item am-summary-section",
                header: _react2.default.createElement(_SectionMediaHeader2.default, { icon: icon, onClick: onClick, title: title })
            },
            children
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

    SummarySection.propTypes = {
        children: _react.PropTypes.node.isRequired,
        icon: _react.PropTypes.string.isRequired,
        onClick: _react.PropTypes.func.isRequired,
        title: _react.PropTypes.string.isRequired
    };

    exports.default = SummarySection;
});
