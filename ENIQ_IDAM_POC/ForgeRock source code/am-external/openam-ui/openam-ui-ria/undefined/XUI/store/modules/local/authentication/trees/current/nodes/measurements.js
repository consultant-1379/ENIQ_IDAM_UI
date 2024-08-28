define(["exports", "redux-actions"], function (exports, _reduxActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.updatePosition = exports.updateDimensions = undefined;

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
    var UPDATE_DIMENSIONS = "local/authentication/trees/current/nodes/measurements/UPDATE_DIMENSIONS";
    var UPDATE_POSITION = "local/authentication/trees/current/nodes/measurements/UPDATE_POSITION";

    // Actions
    var updateDimensions = exports.updateDimensions = (0, _reduxActions.createAction)(UPDATE_DIMENSIONS);
    var updatePosition = exports.updatePosition = (0, _reduxActions.createAction)(UPDATE_POSITION);

    // Reducer
    var initialState = {};
    var initialMeasurementState = { height: 0, width: 0, x: 0, y: 0 };
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, UPDATE_DIMENSIONS, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, initialMeasurementState, state[action.payload.id], {
            height: action.payload.height,
            id: action.payload.id,
            width: action.payload.width
        })));
    }), _defineProperty(_handleActions, UPDATE_POSITION, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, initialMeasurementState, state[action.payload.id], {
            id: action.payload.id,
            x: action.payload.x,
            y: action.payload.y
        })));
    }), _handleActions), initialState);
});
//# sourceMappingURL=measurements.js.map
