define(["exports", "redux", "./properties"], function (exports, _redux, _properties) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _properties2 = _interopRequireDefault(_properties);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    properties: _properties2.default
  });
});
