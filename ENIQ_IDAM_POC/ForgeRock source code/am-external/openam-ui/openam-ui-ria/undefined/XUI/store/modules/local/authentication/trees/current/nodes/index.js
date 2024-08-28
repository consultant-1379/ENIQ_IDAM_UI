define(["exports", "redux", "./measurements", "./properties", "./selected"], function (exports, _redux, _measurements, _properties, _selected) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _measurements2 = _interopRequireDefault(_measurements);

  var _properties2 = _interopRequireDefault(_properties);

  var _selected2 = _interopRequireDefault(_selected);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    measurements: _measurements2.default,
    properties: _properties2.default,
    selected: _selected2.default
  });
});
//# sourceMappingURL=index.js.map
