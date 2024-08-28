define(["exports", "redux", "./local/index", "./remote/index"], function (exports, _redux, _index, _index3) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _index4 = _interopRequireDefault(_index3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    local: _index2.default,
    remote: _index4.default
  });
});
