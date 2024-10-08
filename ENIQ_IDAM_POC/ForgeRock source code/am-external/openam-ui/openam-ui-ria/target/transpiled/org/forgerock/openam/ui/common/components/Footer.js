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
 * Copyright 2015-2017 ForgeRock AS.
 */

define(["lodash", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/commons/ui/common/components/Footer", "org/forgerock/openam/ui/common/services/ServerService"], function (_, Configuration, Footer, ServerService) {
    function isAdmin() {
        return Configuration.loggedUser && _.contains(Configuration.loggedUser.uiroles, "ui-realm-admin");
    }

    var Component = Footer.extend({
        getVersion: function getVersion() {
            return ServerService.getVersion();
        },
        showVersion: function showVersion() {
            return isAdmin();
        }
    });

    return new Component();
});
