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

define(["jquery", "lodash", "react-dom", "react", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/util/ModuleLoader", "org/forgerock/commons/ui/common/util/URIUtils", "org/forgerock/openam/ui/common/util/es6/normaliseModule"], function ($, _, ReactDOM, React, AbstractView, ModuleLoader, URIUtils, normaliseModule) {
    var contentElementId = "#sidePageContent";
    var isBackbonePage = function isBackbonePage(view) {
        return view.prototype instanceof AbstractView;
    };
    var isReactPage = function isReactPage(view) {
        return view.prototype instanceof React.Component || view.WrappedComponent || _.isFunction(view);
    };
    var TreeNavigation = AbstractView.extend({
        template: "templates/admin/views/common/navigation/TreeNavigationTemplate.html",
        partials: ["partials/breadcrumb/_Breadcrumb.html", "templates/admin/views/common/navigation/_TreeNavigationLeaf.html"],
        events: {
            "click .sidenav a[href]:not([data-toggle])": "navigateToPage"
        },
        findContentElement: function findContentElement() {
            return this.$el.find(contentElementId)[0];
        },
        findActiveNavItem: function findActiveNavItem(fragment) {
            var element = this.$el.find(".sidenav ol > li > a[href^=\"#" + fragment + "\"]");
            if (element.length) {
                var parent = element.parent();

                this.$el.find(".sidenav ol > li").removeClass("active");
                element.parentsUntil(this.$el.find(".sidenav"), "li").addClass("active");

                // Expand any collapsed element direct above. Only works one level up
                if (parent.parent().hasClass("collapse")) {
                    parent.parent().addClass("in");
                }
            } else {
                var fragmentSections = fragment.split("/");
                this.findActiveNavItem(fragmentSections.slice(0, -1).join("/"));
            }
        },
        navigateToPage: function navigateToPage(event) {
            this.$el.find(".sidenav ol > li").removeClass("active");
            $(event.currentTarget).parentsUntil(this.$el.find(".sidenav"), "li").addClass("active");
            this.nextRenderPage = true;
        },
        setElement: function setElement(element) {
            var _this = this;

            AbstractView.prototype.setElement.call(this, element);
            if (this.route && this.nextRenderPage) {
                ModuleLoader.load(this.route.page).then(_.bind(function (module) {
                    _this.renderPage(module, _this.args);
                }, this), _.bind(function () {
                    throw "Unable to render page for module " + _this.route.page;
                }, this));
            }
        },
        render: function render(args, callback) {
            var _this2 = this;

            this.args = args;

            var element = this.findContentElement();
            if (element) {
                ReactDOM.unmountComponentAtNode(element);
            }

            this.parentRender(function () {
                _this2.$el.find(".sidenav li").removeClass("active");
                _this2.findActiveNavItem(URIUtils.getCurrentFragment());
                if (!_this2.nextRenderPage) {
                    ModuleLoader.load(_this2.route.page).then(function (page) {
                        _this2.renderPage(page, args, callback);
                    });
                }
            });
        },
        renderPage: function renderPage(Module, args, callback) {
            Module = normaliseModule.default(Module);

            if (isBackbonePage(Module)) {
                var page = new Module();
                page.element = contentElementId;
                page.render(args, callback);
                this.delegateEvents();
            } else if (isReactPage(Module)) {
                ReactDOM.render(React.createElement(Module), this.findContentElement());
            } else {
                throw new Error("[TreeNavigation] Unable to determine page type (Backbone or React).");
            }

            this.nextRenderPage = false;
        }
    });

    return TreeNavigation;
});
//# sourceMappingURL=TreeNavigation.js.map
