define(["exports", "redux", "./authentication/index", "./session"], function (exports, _redux, _index, _session) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _session2 = _interopRequireDefault(_session);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    authentication: _index2.default,
    session: _session2.default
  });
});
