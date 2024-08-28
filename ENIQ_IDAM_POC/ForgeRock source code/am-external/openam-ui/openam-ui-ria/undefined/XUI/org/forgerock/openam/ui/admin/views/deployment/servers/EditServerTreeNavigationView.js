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
 * Copyright 2016-2017 ForgeRock AS.
 */

define(["org/forgerock/openam/ui/common/components/TreeNavigation", "org/forgerock/openam/ui/admin/views/common/navigation/createBreadcrumbs", "org/forgerock/openam/ui/admin/views/common/navigation/createTreeNavigation", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/global/ServersService"], function (TreeNavigation, createBreadcrumbs, createTreeNavigation, Router, ServersService) {
    var navData = [{
        title: "console.common.navigation.general",
        icon: "fa-cog",
        route: "editServerGeneral"
    }, {
        title: "console.common.navigation.security",
        icon: "fa-lock",
        route: "editServerSecurity"
    }, {
        title: "console.common.navigation.session",
        icon: "fa-ticket",
        route: "editServerSession"
    }, {
        title: "console.common.navigation.sdk",
        icon: "fa-th",
        route: "editServerSdk"
    }, {
        title: "console.common.navigation.cts",
        icon: "fa-database",
        route: "editServerCts"
    }, {
        title: "console.common.navigation.uma",
        icon: "fa-check-circle-o",
        route: "editServerUma"
    }, {
        title: "console.common.navigation.advanced",
        icon: "fa-cogs",
        route: "editServerAdvanced"
    }, {
        title: "console.common.navigation.directoryConfiguration",
        icon: "fa-folder-open",
        route: "editServerDirectoryConfiguration"
    }];

    var EditServerTreeNavigationView = TreeNavigation.extend({
        render: function render(args, callback) {
            var _this = this;

            var serverName = args[0];
            ServersService.servers.getUrl(serverName).always(function (url) {
                _this.data.treeNavigation = createTreeNavigation(navData, args);
                _this.data.title = url || serverName;
                _this.data.home = "#" + Router.getLink(Router.configuration.routes.editServerGeneral, [serverName]);
                _this.data.icon = "fa-server";
                TreeNavigation.prototype.render.call(_this, args, callback);
            });
        }
    });

    return new EditServerTreeNavigationView();
});
//# sourceMappingURL=EditServerTreeNavigationView.js.map
