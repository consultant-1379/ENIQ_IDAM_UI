define(["exports", "redux-actions", "lodash"], function (exports, _reduxActions, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setInstances = exports.removeInstance = exports.addInstance = undefined;

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
    var ADD_INSTANCE = "remote/oauth2/groups/instances/ADD_INSTANCE";
    var REMOVE_INSTANCE = "remote/oauth2/groups/instances/REMOVE_INSTANCE";
    var SET_INSTANCES = "remote/oauth2/groups/instances/SET_INSTANCES";

    // Actions
    var addInstance = exports.addInstance = (0, _reduxActions.createAction)(ADD_INSTANCE);
    var removeInstance = exports.removeInstance = (0, _reduxActions.createAction)(REMOVE_INSTANCE);
    var setInstances = exports.setInstances = (0, _reduxActions.createAction)(SET_INSTANCES);

    // Reducer
    var initialState = {};
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_INSTANCE, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.payload._id, action.payload));
    }), _defineProperty(_handleActions, REMOVE_INSTANCE, function (state, action) {
        return (0, _lodash.omit)(state, action.payload._id);
    }), _defineProperty(_handleActions, SET_INSTANCES, function (state, action) {
        return (0, _lodash.indexBy)(action.payload, "_id");
    }), _handleActions), initialState);
});
//# sourceMappingURL=instances.js.map
