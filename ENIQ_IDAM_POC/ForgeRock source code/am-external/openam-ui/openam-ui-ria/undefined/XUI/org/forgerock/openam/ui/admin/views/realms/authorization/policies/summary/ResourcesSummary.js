define(["exports", "react-bootstrap", "react"], function (exports, _reactBootstrap, _react) {
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
     * Copyright 2016-2017 ForgeRock AS.
     */

    var ResourcesSummary = function ResourcesSummary(_ref) {
        var resources = _ref.resources;
        return _react2.default.createElement(
            "span",
            { className: "am-badge-group" },
            resources.map(function (resource) {
                return _react2.default.createElement(
                    _reactBootstrap.Badge,
                    { key: resource },
                    resource
                );
            })
        );
    };

    ResourcesSummary.propTypes = {
        resources: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
    };

    exports.default = ResourcesSummary;
});
//# sourceMappingURL=ResourcesSummary.js.map
