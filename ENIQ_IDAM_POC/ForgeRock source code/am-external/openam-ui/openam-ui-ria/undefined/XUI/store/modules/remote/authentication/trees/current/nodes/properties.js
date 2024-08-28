define(["exports", "lodash", "redux-actions"], function (exports, _lodash, _reduxActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.remove = exports.addOrUpdate = undefined;

    var _handleActions;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    // Types
    var ADD_OR_UPDATE = "remote/authentication/trees/current/nodes/properties/ADD_OR_UPDATE";
    var REMOVE = "remote/authentication/trees/current/nodes/properties/REMOVE";

    // Actions
    var addOrUpdate = exports.addOrUpdate = (0, _reduxActions.createAction)(ADD_OR_UPDATE);
    var remove = exports.remove = (0, _reduxActions.createAction)(REMOVE);

    // Reducer
    var initialState = {};
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_OR_UPDATE, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.payload._id, action.payload));
    }), _defineProperty(_handleActions, REMOVE, function (state, action) {
        return (0, _lodash.omit)(state, action.payload);
    }), _handleActions), initialState);
});
//# sourceMappingURL=properties.js.map
