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

define(["org/forgerock/commons/ui/common/util/Constants"], function (Constants) {
    var path = location.pathname.replace(new RegExp("^/|/$", "g"), "").split("/");
    path.splice(-1);
    path = path.join("/");
    // If we are using OpenAM at the root context then we won't need to prepend the context path with a /
    Constants.context = path === "" ? path : "/" + path;
    Constants.CONSOLE_PATH = Constants.context + "/console";
    Constants.OPENAM_HEADER_PARAM_CUR_PASSWORD = "currentpassword";

    // Realm
    Constants.EVENT_INVALID_REALM = "main.EVENT_INVALID_REALM";

    // Patterns
    Constants.IPV4_PATTERN = "^(((25[0-5])|(2[0-4]\\d)|(1\\d\\d)|([1-9]?\\d)))((\\.((25[0-5])|(2[0-4]\\d)|(1\\d\\d)|([1-9]?\\d))){3})";
    Constants.IPV6_PATTERN = "^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4][0-" + "9]|1[0-9][0-9]|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){5" + "}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9][" + "0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5" + "]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa" + "-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[" + "0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}" + "){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0" + "-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}" + ":((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(" + ":(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\\.(25" + "[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:)))(%.+)?$";
    Constants.NUMBER_PATTERN = "[-+]?[0-9]*[.,]?[0-9]+";
    Constants.INTEGER_PATTERN = "\\d+";

    // Theme
    Constants.DEFAULT_STYLESHEETS = ["css/bootstrap-3.3.5-custom.css", "css/styles-admin.css"];
    Constants.EVENT_THEME_CHANGED = "main.EVENT_THEME_CHANGED";

    Constants.EVENT_REDIRECT_TO_JATO_FEDERATION = "main.navigation.EVENT_REDIRECT_TO_JATO_FEDERATION";
    Constants.EVENT_REDIRECT_TO_JATO_AGENTS_OAUTH20 = "main.navigation.EVENT_REDIRECT_TO_JATO_AGENTS_OAUTH20";
    Constants.EVENT_REDIRECT_TO_JATO_AGENTS_RCS = "main.navigation.EVENT_REDIRECT_TO_JATO_AGENTS_RCS";
    Constants.EVENT_REDIRECT_TO_JATO_AGENTS = "main.navigation.EVENT_REDIRECT_TO_JATO_AGENTS";
    Constants.EVENT_REDIRECT_TO_JATO_DATASTORE = "main.navigation.EVENT_REDIRECT_TO_JATO_DATASTORES";
    Constants.EVENT_REDIRECT_TO_JATO_PRIVILEGES = "main.navigation.EVENT_REDIRECT_TO_JATO_PRIVILEGES";
    Constants.EVENT_REDIRECT_TO_JATO_SUBJECTS = "main.navigation.EVENT_REDIRECT_TO_JATO_SUBJECTS";
    Constants.EVENT_REDIRECT_TO_JATO_STS = "main.navigation.EVENT_REDIRECT_TO_JATO_STS";

    Constants.SELF_SERVICE_FORGOTTEN_USERNAME = "selfservice/forgottenUsername";
    Constants.SELF_SERVICE_RESET_PASSWORD = "selfservice/forgottenPassword";
    Constants.SELF_SERVICE_REGISTER = "selfservice/userRegistration";

    return Constants;
});
