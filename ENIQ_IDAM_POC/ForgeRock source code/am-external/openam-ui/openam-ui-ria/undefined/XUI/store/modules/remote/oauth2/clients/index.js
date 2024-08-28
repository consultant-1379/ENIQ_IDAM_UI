define(["exports", "redux", "./instances", "./schema", "./template"], function (exports, _redux, _instances, _schema, _template) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _instances2 = _interopRequireDefault(_instances);

  var _schema2 = _interopRequireDefault(_schema);

  var _template2 = _interopRequireDefault(_template);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    instances: _instances2.default,
    schema: _schema2.default,
    template: _template2.default
  });
});
//# sourceMappingURL=index.js.map
