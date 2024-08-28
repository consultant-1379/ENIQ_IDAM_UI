define(["exports", "redux", "./authentication/index", "./info", "./oauth2/index", "./realms"], function (exports, _redux, _index, _info, _index3, _realms) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  var _info2 = _interopRequireDefault(_info);

  var _index4 = _interopRequireDefault(_index3);

  var _realms2 = _interopRequireDefault(_realms);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.combineReducers)({
    authentication: _index2.default,
    info: _info2.default,
    oauth2: _index4.default,
    realms: _realms2.default
  });
});
//# sourceMappingURL=index.js.map
