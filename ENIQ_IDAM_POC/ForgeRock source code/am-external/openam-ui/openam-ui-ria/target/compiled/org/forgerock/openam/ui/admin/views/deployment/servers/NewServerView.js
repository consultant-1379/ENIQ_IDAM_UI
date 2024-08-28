"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/util/URIUtils", "org/forgerock/openam/ui/admin/services/global/ServersService", "org/forgerock/openam/ui/admin/views/common/Backlink"], function ($, _, Messages, AbstractView, Router, URIUtils, ServersService, Backlink) {
    var getTrimmedValue = function getTrimmedValue(field) {
        return field.val().trim();
    };
    var sendErrorMessage = function sendErrorMessage(response) {
        Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
    };
    var routeToEdit = function routeToEdit(id) {
        Router.routeTo(Router.configuration.routes.editServerGeneral, {
            args: [id],
            trigger: true
        });
    };

    var NewServerView = AbstractView.extend({
        template: "templates/admin/views/deployment/servers/NewServerTemplate.html",
        events: {
            "click [data-create]": "createServer",
            "keyup [data-server-url]": "toggleCreateButton"
        },
        render: function render(_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                id = _ref2[0];

            this.data.id = id;
            var fragments = URIUtils.getCurrentFragment().split("/");
            this.isCloneView = fragments.indexOf("clone") !== -1;
            if (this.isCloneView) {
                this.data.title = "console.servers.clone.title";
                this.data.buttonTitle = "common.form.clone";
            } else {
                this.data.title = "console.servers.new.title";
                this.data.buttonTitle = "common.form.create";
            }
            this.parentRender(function () {
                new Backlink().render();
            });
            return this;
        },
        createServer: function createServer() {
            var serverUrl = getTrimmedValue(this.$el.find("[data-server-url]"));

            if (this.isCloneView) {
                ServersService.servers.clone(this.data.id, serverUrl).then(function (response) {
                    routeToEdit(response.clonedId);
                }, sendErrorMessage);
            } else {
                ServersService.servers.create({ "url": serverUrl }).then(function (response) {
                    routeToEdit(response._id);
                }, sendErrorMessage);
            }
        },
        toggleCreateButton: function toggleCreateButton(event) {
            var serverUrl = getTrimmedValue($(event.currentTarget));
            var valid = serverUrl !== "";

            this.$el.find("[data-create]").prop("disabled", !valid);
        }
    });

    return new NewServerView();
});
