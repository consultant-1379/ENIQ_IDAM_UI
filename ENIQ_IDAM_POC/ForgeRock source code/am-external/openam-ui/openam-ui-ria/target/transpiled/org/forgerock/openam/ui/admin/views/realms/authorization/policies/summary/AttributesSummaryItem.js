define(["exports", "lodash", "react-bootstrap", "react"], function (exports, _lodash, _reactBootstrap, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var AttributesSummaryItem = function AttributesSummaryItem(_ref) {
        var attributes = _ref.attributes,
            title = _ref.title;

        var getPropertyValue = function getPropertyValue(item) {
            return _lodash2.default.isEmpty(item.propertyValues) ? "" : ": " + item.propertyValues.join(", ");
        };

        return _lodash2.default.isEmpty(attributes) ? null : _react2.default.createElement(
            "div",
            { className: "am-summary-sub-section row" },
            _react2.default.createElement(
                "h5",
                null,
                title
            ),
            _react2.default.createElement(
                "span",
                { className: "am-badge-group" },
                attributes.map(function (item) {
                    return _react2.default.createElement(
                        _reactBootstrap.Badge,
                        { key: item.propertyName },
                        item.propertyName,
                        getPropertyValue(item)
                    );
                })
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
        * Copyright 2016-2017 ForgeRock AS.
        */

    AttributesSummaryItem.propTypes = {
        attributes: _react.PropTypes.arrayOf({
            propertyName: _react.PropTypes.string,
            propertyValues: _react.PropTypes.arrayOf(_react.PropTypes.string)
        }).isRequired,
        title: _react.PropTypes.string.isRequired
    };

    exports.default = AttributesSummaryItem;
});
