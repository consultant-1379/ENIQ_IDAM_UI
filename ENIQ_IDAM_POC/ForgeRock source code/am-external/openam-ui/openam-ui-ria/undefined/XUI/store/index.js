define(["exports", "redux", "./modules/index"], function (exports, _redux, _index) {
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

  /*
   * The contents of this file are subject to the terms of the Common Development and
   * Distribution License (the License). You may not use this file except in compliance with the
   * License.
   *
   * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
   * specific language governing permission and limitations under the License.
   *
   * When distributing Covered Software, include this CDDL Header Notice in each file and include
   * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
   * Header, with the fields enclosed by brackets [] replaced by your own identifying
   * information: "Portions copyright [year] [name of copyright owner]".
   *
   * Copyright 2016-2017 ForgeRock AS.
   */
  var defaultState = {};
  var enhancers = (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  });

  var store = (0, _redux.createStore)(_index2.default, defaultState, enhancers);

  exports.default = store;
});
//# sourceMappingURL=index.js.map
