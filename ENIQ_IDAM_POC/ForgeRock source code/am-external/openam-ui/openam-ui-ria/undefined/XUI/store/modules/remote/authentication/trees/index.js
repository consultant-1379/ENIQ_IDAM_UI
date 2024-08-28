define(["exports", "redux", "./current/index", "./list", "./nodeTypes/index", "./schema", "./template"], function (exports, _redux, _index, _list, _index3, _schema, _template) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _list2 = _interopRequireDefault(_list);

  var _index4 = _interopRequireDefault(_index3);

  var _schema2 = _interopRequireDefault(_schema);

  var _template2 = _interopRequireDefault(_template);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    current: _index2.default,
    list: _list2.default,
    nodeTypes: _index4.default,
    schema: _schema2.default,
    template: _template2.default
  });
});
//# sourceMappingURL=index.js.map
