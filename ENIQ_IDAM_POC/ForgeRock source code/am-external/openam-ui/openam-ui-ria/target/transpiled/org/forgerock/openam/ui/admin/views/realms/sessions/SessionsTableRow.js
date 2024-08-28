define(["exports", "lodash", "react-bootstrap", "i18next", "moment", "react"], function (exports, _lodash, _reactBootstrap, _i18next, _moment, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _moment2 = _interopRequireDefault(_moment);

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var SessionsTableRow = function SessionsTableRow(_ref) {
        var checked = _ref.checked,
            data = _ref.data,
            onDelete = _ref.onDelete,
            onSelect = _ref.onSelect,
            sessionHandle = _ref.sessionHandle;

        var handleDelete = function handleDelete() {
            return onDelete(data);
        };
        var handleSelect = function handleSelect(event) {
            return onSelect(data, event.target.checked);
        };
        var selectId = _lodash2.default.uniqueId("select");
        var rowActions = data.sessionHandle === sessionHandle ? _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            (0, _i18next.t)("console.sessions.yourSession")
        ) : _react2.default.createElement(
            _reactBootstrap.ButtonGroup,
            { className: "pull-right" },
            _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: "link", onClick: handleDelete, title: (0, _i18next.t)("console.sessions.invalidate") },
                _react2.default.createElement("i", { className: "fa fa-close" })
            )
        );

        return _react2.default.createElement(
            "tr",
            { className: checked ? "selected" : undefined },
            _react2.default.createElement(
                "td",
                null,
                _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    { htmlFor: selectId, srOnly: true },
                    (0, _i18next.t)("common.form.select")
                ),
                _react2.default.createElement("input", {
                    checked: checked,
                    disabled: data.sessionHandle === sessionHandle,
                    id: selectId,
                    onChange: handleSelect,
                    type: "checkbox"
                })
            ),
            _react2.default.createElement(
                "td",
                null,
                (0, _moment2.default)(data.latestAccessTime).fromNow(true)
            ),
            _react2.default.createElement(
                "td",
                {
                    title: (0, _i18next.t)("console.sessions.table.expires", {
                        timestamp: (0, _moment2.default)(data.maxIdleExpirationTime).toISOString()
                    })
                },
                (0, _moment2.default)(data.maxIdleExpirationTime).fromNow(true)
            ),
            _react2.default.createElement(
                "td",
                {
                    title: (0, _i18next.t)("console.sessions.table.expires", {
                        timestamp: (0, _moment2.default)(data.maxSessionExpirationTime).toISOString()
                    })
                },
                (0, _moment2.default)(data.maxSessionExpirationTime).fromNow(true)
            ),
            _react2.default.createElement(
                "td",
                { className: "fr-col-btn-1" },
                rowActions
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

    SessionsTableRow.propTypes = {
        checked: _react.PropTypes.bool.isRequired,
        data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
            latestAccessTime: _react.PropTypes.string.isRequired,
            maxIdleExpirationTime: _react.PropTypes.string.isRequired,
            maxSessionExpirationTime: _react.PropTypes.string.isRequired,
            sessionHandle: _react.PropTypes.string.isRequired
        })).isRequired,
        onDelete: _react.PropTypes.func.isRequired,
        onSelect: _react.PropTypes.func.isRequired,
        sessionHandle: _react.PropTypes.string.isRequired
    };

    exports.default = SessionsTableRow;
});
