define(["exports", "redux-actions"], function (exports, _reduxActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.removeRealm = exports.addRealm = undefined;

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

    // Types
    var ADD_REALM = "local/session/ADD_REALM";
    var REMOVE_REALM = "local/session/REMOVE_REALM";

    // Actions
    var addRealm = exports.addRealm = (0, _reduxActions.createAction)(ADD_REALM);
    var removeRealm = exports.removeRealm = (0, _reduxActions.createAction)(REMOVE_REALM);

    // Reducer
    var initialState = {
        realm: undefined
    };
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_REALM, function (state, action) {
        return {
            realm: action.payload.toLowerCase()
        };
    }), _defineProperty(_handleActions, REMOVE_REALM, function () {
        return {};
    }), _handleActions), initialState);
});
