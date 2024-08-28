define(["exports", "lodash", "org/forgerock/commons/ui/common/util/URIUtils"], function (exports, _lodash, _URIUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _lodash2 = _interopRequireDefault(_lodash);

  var _URIUtils2 = _interopRequireDefault(_URIUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @returns {String} The current fragment query string or an empty string.
   */
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

  /**
   * @module org/forgerock/openam/ui/common/util/uri/getCurrentFragmentParamString
   */
  var getCurrentFragmentParamString = function getCurrentFragmentParamString() {
    var params = _URIUtils2.default.getCurrentFragmentQueryString();
    return _lodash2.default.isEmpty(params) ? "" : "&" + params;
  };

  exports.default = getCurrentFragmentParamString;
});
//# sourceMappingURL=getCurrentFragmentParamString.js.map
