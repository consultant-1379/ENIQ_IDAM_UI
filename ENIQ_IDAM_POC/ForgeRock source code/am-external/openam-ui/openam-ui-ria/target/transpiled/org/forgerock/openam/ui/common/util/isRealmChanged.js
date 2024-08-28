define(["exports", "store/index"], function (exports, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isRealmChanged;

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function isRealmChanged() {
    var sessionInfoIntendedRealm = _index2.default.getState().remote.info.realm;
    var authenticatedRealm = _index2.default.getState().local.session.realm;

    return sessionInfoIntendedRealm !== authenticatedRealm;
  } /*
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
   * @module org/forgerock/openam/ui/common/util/isRealmChanged
   */
});
