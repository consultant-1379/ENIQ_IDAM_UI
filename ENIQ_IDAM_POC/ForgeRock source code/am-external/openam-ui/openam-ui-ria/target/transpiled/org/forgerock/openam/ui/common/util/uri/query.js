define(["exports", "lodash", "org/forgerock/commons/ui/common/util/URIUtils"], function (exports, _lodash, _URIUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseParameters = parseParameters;
  exports.getCurrentQueryParameters = getCurrentQueryParameters;
  exports.urlParamsFromObject = urlParamsFromObject;

  var _lodash2 = _interopRequireDefault(_lodash);

  var _URIUtils2 = _interopRequireDefault(_URIUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @description Creates an object of key value pairs from the passed in query string
   * @param {String} paramString A string containing a query string
   * @returns {Object} An Object of key value pairs
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
   * @module org/forgerock/openam/ui/common/util/uri/query
   */
  function parseParameters(paramString) {
    var object = _lodash2.default.isEmpty(paramString) ? {} : _lodash2.default.object(_lodash2.default.map(paramString.split("&"), function (pair) {
      var key = pair.substring(0, pair.indexOf("="));
      var value = pair.substring(pair.indexOf("=") + 1);
      return [key, value];
    }));
    return object;
  }

  /**
   * @description Creates an object of key value pairs from the current url query
   * @returns {Object} An Object of key value pairs from the current url query
   */
  function getCurrentQueryParameters() {
    return this.parseParameters(_URIUtils2.default.getCurrentQueryString());
  }

  /**
   * @description Creates query string from an object of key value pairs
   * @param {Object} paramsObject An object of key value pairs
   * @returns {String} A query string.
   */
  function urlParamsFromObject(paramsObject) {
    if (_lodash2.default.isEmpty(paramsObject)) {
      return "";
    }
    return _lodash2.default.map(paramsObject, function (value, key) {
      return key + "=" + value;
    }).join("&");
  }
});
