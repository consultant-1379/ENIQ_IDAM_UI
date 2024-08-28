define(["exports", "lodash", "i18next", "org/forgerock/commons/ui/common/components/Navigation", "org/forgerock/commons/ui/common/main/Router"], function (exports, _lodash, _i18next, _Navigation, _Router) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.populateRealmsDropdown = exports.hideAPILinksOnAPIDescriptionsDisabled = undefined;

    var _lodash2 = _interopRequireDefault(_lodash);

    var _Navigation2 = _interopRequireDefault(_Navigation);

    var _Router2 = _interopRequireDefault(_Router);

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
     * Copyright 2015-2017 ForgeRock AS.
     */

    /**
     * @module org/forgerock/openam/ui/common/util/NavigationHelper
     */
    var hideAPILinksOnAPIDescriptionsDisabled = exports.hideAPILinksOnAPIDescriptionsDisabled = function hideAPILinksOnAPIDescriptionsDisabled(response) {
        if (_lodash2.default.get(response, "values.raw.descriptionsState", "").toLowerCase() === "disabled") {
            if (_lodash2.default.has(_Navigation2.default, "configuration.links.admin.urls.helpLinks")) {
                _Navigation2.default.configuration.links.admin.urls.helpLinks = [];
                _Navigation2.default.reload();
            }
        }
    };

    /**
     * Reset and populate the realm dynamic links in the navigation realms dropdown
     * @param  {Object} data Result of the service call
     * @param  {Array} data.result List of the available realms
     * @example
     *   RealmsService.realms.all().then(NavigationHelper.populateRealmsDropdown);
     */
    var populateRealmsDropdown = exports.populateRealmsDropdown = function populateRealmsDropdown(data) {
        var maxRealms = 4;
        var name = void 0;

        // Remove any previously added dynamic navigation links.
        // The reason why this is required is because we override the values in the AppConfiguration when we
        // add new links at runtime via the common Navigation module. This stops us from being able to reset the
        // navigation's configuration upon log out or session end. Which in turn means that the next user to log in
        // will get the altered configuration.
        // FIXME: The correct fix would be to change the way the Navigation works so that the original configuration
        // remains intact and we just call Navigation.reset() when a users session ends or a new one begins.
        if (_lodash2.default.has(_Navigation2.default, "configuration.links.admin.urls.realms.urls")) {
            _Navigation2.default.configuration.links.admin.urls.realms.urls = _lodash2.default.reject(_Navigation2.default.configuration.links.admin.urls.realms.urls, "dynamicLink", true);
        }

        (0, _lodash2.default)(data.result).filter("active").sortBy("path").take(maxRealms).forEach(function (realm) {
            name = realm.name === "/" ? (0, _i18next.t)("console.common.topLevelRealm") : realm.name;
            _Navigation2.default.addLink({
                "url": "#" + _Router2.default.getLink(_Router2.default.configuration.routes.realmDefault, [encodeURIComponent(realm.path)]),
                name: name,
                "cssClass": "dropdown-sub",
                "dynamicLink": true
            }, "admin", "realms");
        }).run();

        _Navigation2.default.addLink({
            "url": "#" + _Router2.default.getLink(_Router2.default.configuration.routes.realms),
            "name": (0, _i18next.t)("config.AppConfiguration.Navigation.links.realms.viewAll"),
            "cssClass": "dropdown-sub",
            "dynamicLink": true
        }, "admin", "realms");

        _Navigation2.default.reload();
    };
});
//# sourceMappingURL=NavigationHelper.js.map
