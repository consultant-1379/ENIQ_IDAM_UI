define(["exports", "redux", "./list", "./schema"], function (exports, _redux, _list, _schema) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _list2 = _interopRequireDefault(_list);

  var _schema2 = _interopRequireDefault(_schema);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    list: _list2.default,
    schema: _schema2.default
  });
});
//# sourceMappingURL=index.js.map
