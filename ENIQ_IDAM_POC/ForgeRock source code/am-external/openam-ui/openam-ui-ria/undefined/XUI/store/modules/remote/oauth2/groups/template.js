define(["exports", "redux-actions"], function (exports, _reduxActions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setTemplate = undefined;

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
  var SET_TEMPLATE = "remote/oauth2/groups/template/SET_TEMPLATE";

  // Actions
  var setTemplate = exports.setTemplate = (0, _reduxActions.createAction)(SET_TEMPLATE);

  // Reducer
  var initialState = null;
  exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, SET_TEMPLATE, function (state, action) {
    return action.payload;
  }), initialState);
});
//# sourceMappingURL=template.js.map
