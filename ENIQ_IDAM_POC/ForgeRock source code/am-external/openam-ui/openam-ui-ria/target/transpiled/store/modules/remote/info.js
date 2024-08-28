define(["exports", "redux-actions"], function (exports, _reduxActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.addRealm = undefined;

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
    var ADD_REALM = "remote/info/ADD_REALM";

    // Actions
    var addRealm = exports.addRealm = (0, _reduxActions.createAction)(ADD_REALM);

    // Reducer
    var initialState = {
        realm: undefined
    };
    exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, ADD_REALM, function (state, action) {
        return {
            realm: action.payload.toLowerCase()
        };
    }), initialState);
});
