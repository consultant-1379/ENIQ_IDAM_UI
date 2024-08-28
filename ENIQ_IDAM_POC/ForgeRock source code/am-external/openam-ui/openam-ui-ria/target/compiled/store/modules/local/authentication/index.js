define(["exports", "redux", "./trees/index"], function (exports, _redux, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    trees: _index2.default
  });
});
