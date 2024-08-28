define(["exports", "lodash", "jquery", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/user/services/validateGotoService"], function (exports, _lodash, _jquery, _Configuration, _Constants, _validateGotoService) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ifRelativePathInsertContext = ifRelativePathInsertContext;
    exports.exists = exists;
    exports.get = get;
    exports.isNotDefaultPath = isNotDefaultPath;
    exports.remove = remove;
    exports.setValidated = setValidated;
    exports.toHref = toHref;
    exports.validateParam = validateParam;

    var _lodash2 = _interopRequireDefault(_lodash);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _Configuration2 = _interopRequireDefault(_Configuration);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _validateGotoService2 = _interopRequireDefault(_validateGotoService);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function ifRelativePathInsertContext(path) {
        var context = "";
        if (path.indexOf("/") === 0 && path.indexOf("" + _Constants2.default.context) !== 0) {
            context = "" + _Constants2.default.context;
        }
        return context + path;
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
     * @module org/forgerock/openam/ui/user/login/gotoUrl
     */

    function exists() {
        return _lodash2.default.has(_Configuration2.default, "globalData.auth.validatedGoto");
    }

    function get() {
        return _lodash2.default.get(_Configuration2.default, "globalData.auth.validatedGoto");
    }

    function isNotDefaultPath(url) {
        // The server will return the CONSOLE_PATH if the there is no (valid) goto to return.
        return url !== _Constants2.default.CONSOLE_PATH;
    }

    function remove() {
        if (this.exists()) {
            delete _Configuration2.default.globalData.auth.validatedGoto;
        }
    }

    function setValidated(value) {
        // Any goto url coming from the url params needs to be validated. And success or goto url coming from the server
        // will have already been validated and will be returned unencoded
        _lodash2.default.set(_Configuration2.default, "globalData.auth.validatedGoto", encodeURIComponent(this.ifRelativePathInsertContext(value)));
    }

    function toHref() {
        return decodeURIComponent(_Configuration2.default.globalData.auth.validatedGoto);
    }

    /**
     * Returns a promise that containes the successURL or undefined.
     * Instead of returning the CONSOLE_PATH which the server returns if the supplied url was invalid,
     * it returns an empty promise.
     * @param {String} unvalidated The url or path to validate.
     * @returns {Promise} A promise containing the successURL or undefined.
     */
    function validateParam(unvalidated) {
        var _this = this;

        var deferred = _jquery2.default.Deferred();
        (0, _validateGotoService2.default)(unvalidated).then(function (responce) {
            if (_this.isNotDefaultPath(responce.successURL)) {
                deferred.resolve(responce.successURL);
            } else if (_this.isNotDefaultPath(unvalidated)) {
                deferred.reject();
            } else {
                deferred.resolve(responce.successURL);
            }
        }, function () {
            deferred.reject();
        });
        return deferred;
    }
});
//# sourceMappingURL=gotoUrl.js.map
