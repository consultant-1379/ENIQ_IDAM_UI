define(["exports", "redux-actions", "lodash"], function (exports, _reduxActions, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setNodes = exports.removeNode = exports.addOrUpdateNode = undefined;

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
    var ADD_OR_UPDATE_NODE = "remote/authentication/trees/current/tree/ADD_OR_UPDATE_NODE";
    var REMOVE_NODE = "remote/authentication/trees/current/tree/REMOVE_NODE";
    var SET_NODES = "remote/authentication/trees/current/tree/SET_NODES";

    // Actions
    var addOrUpdateNode = exports.addOrUpdateNode = (0, _reduxActions.createAction)(ADD_OR_UPDATE_NODE);
    var removeNode = exports.removeNode = (0, _reduxActions.createAction)(REMOVE_NODE);
    var setNodes = exports.setNodes = (0, _reduxActions.createAction)(SET_NODES);

    // Reducer
    var initialState = {};
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_OR_UPDATE_NODE, function (state, action) {
        return _extends({}, state, action.payload);
    }), _defineProperty(_handleActions, REMOVE_NODE, function (state, action) {
        return (0, _lodash.omit)(state, [action.payload]);
    }), _defineProperty(_handleActions, SET_NODES, function (state, action) {
        return action.payload;
    }), _handleActions), initialState);
});
//# sourceMappingURL=tree.js.map
