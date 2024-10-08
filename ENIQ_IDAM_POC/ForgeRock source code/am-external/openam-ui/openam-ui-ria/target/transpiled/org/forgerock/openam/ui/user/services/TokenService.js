"use strict";

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
 * Copyright 2011-2017 ForgeRock AS.
 */

define(["org/forgerock/commons/ui/common/util/Constants", "org/forgerock/commons/ui/common/main/AbstractDelegate"], function (Constants, AbstractDelegate) {
    var obj = new AbstractDelegate("" + Constants.host + Constants.context + "/frrest/oauth2/token");

    /**
     * Gets all the OAuth 2 tokens for a user
     * @param {Function} successCallback Success callback function
     * @param {Function} errorCallback Error callback function
     */
    obj.getAllTokens = function (successCallback, errorCallback) {
        obj.serviceCall({ url: "/?_queryid=*", success: function success(data) {
                if (successCallback) {
                    successCallback(data.result);
                }
            },
            error: errorCallback });
    };

    /**
     *  Deletes a token given a tokenID
     * @param {Function} successCallback success handler
     * @param {Function} errorCallback error handler
     * @param {String} id TokenID
     */
    obj.deleteToken = function (successCallback, errorCallback, id) {
        obj.serviceCall({ type: "DELETE", url: "/" + id, success: function success() {
                if (successCallback) {
                    successCallback(id);
                }
            },
            error: errorCallback(id) });
    };

    /**
     * Gets a token given a token ID
     * @param {Function} successCallback success handler
     * @param {Function} errorCallback error handler
     * @param {String} id TokenID
     */
    obj.getTokenByID = function (successCallback, errorCallback, id) {
        obj.serviceCall({ url: "/" + id, success: function success(data) {
                if (successCallback) {
                    successCallback(data);
                }
            },
            error: errorCallback });
    };

    return obj;
});
