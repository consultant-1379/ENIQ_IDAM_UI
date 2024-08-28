define(["exports", "redux", "./nodes/index", "./tree"], function (exports, _redux, _index, _tree) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _tree2 = _interopRequireDefault(_tree);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    nodes: _index2.default,
    tree: _tree2.default
  });
});
