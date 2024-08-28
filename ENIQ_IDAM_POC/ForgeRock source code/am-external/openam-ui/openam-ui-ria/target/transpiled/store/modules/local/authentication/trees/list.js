define(["exports", "redux-actions", "lodash"], function (exports, _reduxActions, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.set = exports.remove = exports.addOrUpdate = undefined;

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
    var ADD_OR_UPDATE = "local/authentication/trees/list/ADD_OR_UPDATE";
    var REMOVE = "local/authentication/trees/list/REMOVE";
    var SET = "local/authentication/trees/list/SET";

    // Actions
    var addOrUpdate = exports.addOrUpdate = (0, _reduxActions.createAction)(ADD_OR_UPDATE);
    var remove = exports.remove = (0, _reduxActions.createAction)(REMOVE);
    var set = exports.set = (0, _reduxActions.createAction)(SET);

    // Reducer
    var initialState = {};
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_OR_UPDATE, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.payload._id, (0, _lodash.omit)(action.payload, "nodes")));
    }), _defineProperty(_handleActions, REMOVE, function (state, action) {
        return (0, _lodash.omit)(state, function (instance) {
            return instance._id === action.payload;
        });
    }), _defineProperty(_handleActions, SET, function (state, action) {
        return (0, _lodash.chain)(action.payload).map(function (tree) {
            return (0, _lodash.omit)(tree, "nodes");
        }).indexBy("_id").value();
    }), _handleActions), initialState);
});
