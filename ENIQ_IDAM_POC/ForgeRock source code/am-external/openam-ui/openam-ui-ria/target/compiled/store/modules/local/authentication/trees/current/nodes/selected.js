define(["exports", "redux-actions"], function (exports, _reduxActions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.remove = exports.set = undefined;

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
  var SET = "local/authentication/trees/current/nodes/selected/SET";
  var REMOVE = "local/authentication/trees/current/nodes/selected/REMOVE";

  // Actions
  var set = exports.set = (0, _reduxActions.createAction)(SET);
  var remove = exports.remove = (0, _reduxActions.createAction)(REMOVE);

  // Reducer
  var initialState = {};
  exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, REMOVE, function () {
    return initialState;
  }), _defineProperty(_handleActions, SET, function (state, action) {
    return action.payload;
  }), _handleActions), initialState);
});
