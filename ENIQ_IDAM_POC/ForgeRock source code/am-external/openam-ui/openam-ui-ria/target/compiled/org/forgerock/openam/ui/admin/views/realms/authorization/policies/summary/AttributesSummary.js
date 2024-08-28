define(["exports", "lodash", "i18next", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/EmptySectionCallToAction", "react", "org/forgerock/openam/ui/admin/views/realms/authorization/policies/summary/AttributesSummaryItem"], function (exports, _lodash, _i18next, _EmptySectionCallToAction, _react, _AttributesSummaryItem) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _EmptySectionCallToAction2 = _interopRequireDefault(_EmptySectionCallToAction);

    var _react2 = _interopRequireDefault(_react);

    var _AttributesSummaryItem2 = _interopRequireDefault(_AttributesSummaryItem);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var AttributesSummary = function AttributesSummary(_ref) {
        var customAttributes = _ref.customAttributes,
            onClick = _ref.onClick,
            staticAttributes = _ref.staticAttributes,
            userAttributes = _ref.userAttributes;

        if (_lodash2.default.isEmpty([].concat(_toConsumableArray(userAttributes), _toConsumableArray(staticAttributes), _toConsumableArray(customAttributes)))) {
            return _react2.default.createElement(_EmptySectionCallToAction2.default, {
                onClick: onClick,
                sectionName: (0, _i18next.t)("console.authorization.common.responseAttributes")
            });
        }

        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(_AttributesSummaryItem2.default, {
                attributes: userAttributes,
                title: (0, _i18next.t)("console.authorization.common.subjectAttributes")
            }),
            _react2.default.createElement(_AttributesSummaryItem2.default, {
                attributes: staticAttributes,
                title: (0, _i18next.t)("console.authorization.common.staticAttributes")
            }),
            _react2.default.createElement(_AttributesSummaryItem2.default, {
                attributes: customAttributes,
                title: (0, _i18next.t)("console.authorization.common.customAttributes")
            })
        );
    };

    AttributesSummary.propTypes = {
        customAttributes: _react.PropTypes.array.isRequired, //eslint-disable-line react/forbid-prop-types
        onClick: _react.PropTypes.func.isRequired,
        staticAttributes: _react.PropTypes.array.isRequired, //eslint-disable-line react/forbid-prop-types
        userAttributes: _react.PropTypes.array.isRequired //eslint-disable-line react/forbid-prop-types
    };

    exports.default = AttributesSummary;
});
