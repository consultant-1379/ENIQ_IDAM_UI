define(["exports", "redux-actions", "lodash"], function (exports, _reduxActions, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setRealms = exports.removeRealm = exports.addRealm = undefined;

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
    var ADD_REALM = "remote/realms/ADD_REALM";
    var REMOVE_REALM = "remote/realms/REMOVE_REALM";
    var SET_REALMS = "remote/realms/SET_REALMS";

    // Actions
    var addRealm = exports.addRealm = (0, _reduxActions.createAction)(ADD_REALM);
    var removeRealm = exports.removeRealm = (0, _reduxActions.createAction)(REMOVE_REALM);
    var setRealms = exports.setRealms = (0, _reduxActions.createAction)(SET_REALMS);

    // Reducer
    var initialState = {};
    var createPath = function createPath(parentPath, name) {
        if (parentPath === "/") {
            return parentPath + name;
        } else if (parentPath) {
            return parentPath + "/" + name;
        } else {
            return "/";
        }
    };
    var addPayloadPath = function addPayloadPath(payload) {
        return _extends({}, payload, {
            path: createPath(payload.parentPath, payload.name)
        });
    };
    var addPathToAction = function addPathToAction(handler) {
        return function (state, action) {
            action.payload = addPayloadPath(action.payload);

            return handler(state, action);
        };
    };
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_REALM, addPathToAction(function (state, action) {
        return _extends({}, state, _defineProperty({}, action.payload.path, _extends({}, action.payload)));
    })), _defineProperty(_handleActions, REMOVE_REALM, addPathToAction(function (state, action) {
        return (0, _lodash.omit)(state, action.payload.path);
    })), _defineProperty(_handleActions, SET_REALMS, function (state, action) {
        return (0, _lodash.chain)(action.payload).map(addPayloadPath).indexBy("path").value();
    }), _handleActions), initialState);
});
