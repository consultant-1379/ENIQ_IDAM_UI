define(["exports", "redux-actions"], function (exports, _reduxActions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setSchema = undefined;

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
  var SET_SCHEMA = "remote/oauth2/clients/schema/SET_SCHEMA";

  // Actions
  var setSchema = exports.setSchema = (0, _reduxActions.createAction)(SET_SCHEMA);

  // Reducer
  var initialState = null;
  exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, SET_SCHEMA, function (state, action) {
    return action.payload;
  }), initialState);
});
