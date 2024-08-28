define(["exports", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants"], function (exports, _AbstractDelegate, _Constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.agents = exports.global = exports.realm = undefined;
    exports.commonTasks = commonTasks;

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Constants2 = _interopRequireDefault(_Constants);

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
     * Copyright 2017 ForgeRock AS.
     */

    var service = new _AbstractDelegate2.default("" + _Constants2.default.host + _Constants2.default.context);

    var getJATOSession = function getJATOSession(realm) {
        return service.serviceCall({
            url: "/realm/RMRealm?RMRealm.tblDataActionHref=" + realm + "&requester=XUI",
            dataType: "html"
        }).then(function (data) {
            var session = data.match(/jato.pageSession=(.*?)"/)[1];

            if (!session) {
                window.location.href = _Constants2.default.context + "/UI/Login?service=adminconsoleservice";
            }

            return session;
        });
    };
    var redirectToGlobalTab = function redirectToGlobalTab(tabIndex) {
        return getJATOSession("/").then(function (session) {
            window.location.href = _Constants2.default.context + "/task/Home?Home.tabCommon.TabHref=" + tabIndex + "&jato.pageSession=" + session + "&requester=XUI";
        });
    };

    var redirectToRealmTab = function redirectToRealmTab(realm, tabIndex) {
        return getJATOSession(realm).then(function (session) {
            window.location.href = _Constants2.default.context + "/realm/RealmProperties?RMRealm.tblDataActionHref=" + realm + "&RealmProperties.tabCommon.TabHref=" + tabIndex + "&jato.pageSession=" + session + "&requester=XUI";
        });
    };

    var realm = exports.realm = {
        dataStores: function dataStores(realm) {
            return redirectToRealmTab(realm, 14);
        },
        privileges: function privileges(realm) {
            return redirectToRealmTab(realm, 15);
        },
        subjects: function subjects(realm) {
            return redirectToRealmTab(realm, 17);
        },
        sts: function sts(realm) {
            return redirectToRealmTab(realm, 19);
        }
    };

    var global = exports.global = {
        federation: function federation() {
            return redirectToGlobalTab(2);
        }
    };

    function commonTasks(realm, link) {
        var query = link.indexOf("?") === -1 ? "?" : "&";
        window.location.href = _Constants2.default.context + "/" + link + query + "realm=" + encodeURIComponent(realm);
    }

    var redirectToAgentsTab = function redirectToAgentsTab(realm, tabIndex) {
        return getJATOSession(realm).then(function (session) {
            window.location.href = _Constants2.default.context + "/agentconfig/Agents?Agents.tabCommon.TabHref=" + tabIndex + "&jato.pageSession=" + session + "&requester=XUI";
        });
    };

    var agents = exports.agents = {
        java: function java(realm) {
            return redirectToAgentsTab(realm, 181);
        },
        web: function web(realm) {
            return redirectToAgentsTab(realm, 180);
        },
        rcs: function rcs(realm) {
            return redirectToAgentsTab(realm, 184);
        }
    };
});
