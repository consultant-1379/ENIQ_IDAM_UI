define(["exports", "redux", "./current/index", "./list"], function (exports, _redux, _index, _list) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _list2 = _interopRequireDefault(_list);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    current: _index2.default,
    list: _list2.default
  });
});
