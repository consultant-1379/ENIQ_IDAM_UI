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

define(["jquery", "lodash", "backbone", "org/forgerock/commons/ui/common/util/UIUtils",

// jquery dependencies
"bootstrap-tabdrop"], function ($, _, Backbone, UIUtils) {
    function has(attribute, tab) {
        if (!tab[attribute]) {
            throw new TypeError("[TabComponent] Expected all items within 'tabs' to have a '" + attribute + "' attribute.");
        }
        if (!_.isString(tab[attribute])) {
            throw new TypeError("[TabComponent] Expected all items within 'tabs' to have String '" + attribute + "'s.");
        }

        return true;
    }

    var TabComponent = Backbone.View.extend({
        template: "templates/common/components/tab/TabComponentTemplate.html",
        bodyTemplate: "templates/common/components/tab/TabComponentBodyTemplate.html",
        events: {
            "show.bs.tab ul.nav.nav-tabs a": "handleTabClick"
        },
        initialize: function initialize(options) {
            if (!(options.tabs instanceof Array)) {
                throw new TypeError("[TabComponent] \"tabs\" argument is not an Array.");
            }
            if (_.isEmpty(options.tabs)) {
                throw new TypeError("[TabComponent] \"tabs\" argument is an empty Array.");
            }
            _(options.tabs).each(_.partial(has, "id")).each(_.partial(has, "title")).value();

            this.options = options;
        },
        getBody: function getBody() {
            return this.tabBody;
        },
        getBodyElement: function getBodyElement() {
            return this.$el.find("[data-tab-panel]");
        },
        getFooter: function getFooter() {
            return this.options.tabFooter;
        },
        getFooterElement: function getFooterElement() {
            return this.$el.find("[data-tab-footer]");
        },
        getTabId: function getTabId() {
            return this.currentTabId;
        },
        setTabId: function setTabId(id) {
            this.currentTabId = id;
            this.$el.find("[data-tab-id=\"" + id + "\"]").tab("show");
        },
        handleTabClick: function handleTabClick(event) {
            var _this = this;

            this.currentTabId = $(event.currentTarget).data("tab-id");

            this.options.tabFooter = this.options.createFooter(this.currentTabId);
            this.tabBody = this.options.createBody(this.currentTabId);

            UIUtils.compileTemplate(this.bodyTemplate, this.options).then(function (html) {
                _this.$el.find("[data-tab-component-panel]").html(html);

                if (_this.tabBody) {
                    _this.tabBody.setElement(_this.getBodyElement());
                    _this.tabBody.render();
                }

                if (_this.options.tabFooter) {
                    _this.options.tabFooter.setElement(_this.getFooterElement());
                    _this.options.tabFooter.render();
                }
            });
        },
        render: function render() {
            var _this2 = this;

            UIUtils.compileTemplate(this.template, this.options).then(function (html) {
                _this2.$el.html(html);
                _this2.$el.find(".tab-menu .nav-tabs").tabdrop();
                _this2.setTabId(_this2.options.tabs[0].id);
            });
            return this;
        }
    });

    return TabComponent;
});
//# sourceMappingURL=TabComponent.js.map
