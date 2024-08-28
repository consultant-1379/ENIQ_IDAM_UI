define(["exports", "redux-actions", "lodash"], function (exports, _reduxActions, _lodash) {
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
  var SET = "remote/authentication/trees/nodeTypes/list/SET";

  // Actions
  var set = exports.set = (0, _reduxActions.createAction)(SET);

  // Reducer
  var initialState = {};
  exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, SET, function (state, action) {
    return (0, _lodash.indexBy)(action.payload, "_id");
  }), initialState);
});
//# sourceMappingURL=list.js.map
