define(["exports", "jquery", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/openam/ui/user/services/SessionService"], function (exports, _jquery, _Configuration, _SessionService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _jquery2 = _interopRequireDefault(_jquery);

  var _Configuration2 = _interopRequireDefault(_Configuration);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var logout = function logout() {
    _Configuration2.default.setProperty("loggedUser", null);

    return (0, _SessionService.logout)().then(null, function () {
      return _jquery2.default.Deferred().resolve();
    });
  }; /*
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
   * @module org/forgerock/openam/ui/user/login/logout
   */

  exports.default = logout;
});
//# sourceMappingURL=logout.js.map
