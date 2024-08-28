define(["exports", "redux-actions"], function (exports, _reduxActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.addOrUpdateSchema = undefined;

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
    var ADD_OR_UPDATE_SCHEMA = "remote/authentication/trees/nodeTypes/schema/ADD_OR_UPDATE_SCHEMA";

    // Actions
    var addOrUpdateSchema = exports.addOrUpdateSchema = (0, _reduxActions.createAction)(ADD_OR_UPDATE_SCHEMA, function (payload) {
        return payload;
    }, function (payload, nodeType) {
        return { nodeType: nodeType };
    });

    // Reducer
    var initialState = {};
    exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, ADD_OR_UPDATE_SCHEMA, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.meta.nodeType, action.payload));
    }), initialState);
});
