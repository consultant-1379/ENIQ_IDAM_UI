define(["exports", "redux-actions"], function (exports, _reduxActions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.set = undefined;

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
  var SET = "remote/authentication/trees/template/SET";

  // Actions
  var set = exports.set = (0, _reduxActions.createAction)(SET);

  // Reducer
  var initialState = null;
  exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, SET, function (state, action) {
    return action.payload;
  }), initialState);
});
//# sourceMappingURL=template.js.map
