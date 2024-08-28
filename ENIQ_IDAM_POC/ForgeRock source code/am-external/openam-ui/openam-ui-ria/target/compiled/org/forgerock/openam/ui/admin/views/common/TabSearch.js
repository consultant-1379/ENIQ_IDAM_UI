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

/**
 * @module org/forgerock/openam/ui/admin/views/common/TabSearch
 */
define(["lodash", "jquery", "backbone", "handlebars", "selectize"], function (_, $, Backbone, Handlebars) {
    function throwOnInvalidOptions(options) {
        if (!options || !_.isObject(options)) {
            throw new Error("[TabSearch] No \"options\" object found.");
        } else {
            if (!options.onChange) {
                throw new Error("[TabSearch] No \"options.onChange\" function found.");
            }
            if (!options.properties) {
                throw new Error("[TabSearch] No \"options.properties\" object found.");
            }
        }
    }

    function createSelectize(element, callback) {
        element.selectize({
            searchField: ["text", "value"],
            onChange: function onChange(value) {
                var optgroup = this.options[value].optgroup;
                callback(optgroup, value);
                this.clear(true);
            },

            render: {
                item: function item(_item) {
                    return "<div>" + _item.text + "</div>";
                },
                option: function option(item) {
                    return "<div><div>" + item.text + "</div><span class=\"text-muted small\"><em>" + item.value + "</em></span></div></div>";
                },
                optgroup_header: function optgroup_header(item) {
                    // eslint-disable-line camelcase
                    return "<div class=\"optgroup-header\"><span class=\"text-primary\">" + item.label + "</span></div>";
                }
            }
        });

        return element[0].selectize;
    }

    function populateOptionsFromJsonSchemaGroup(properties, selectize) {
        _.each(properties, function (group, groupName) {
            selectize.addOptionGroup(groupName, {
                label: group.title || " "
            });
            _.each(group.properties, function (option, key) {
                selectize.addOption({
                    text: option.title,
                    value: key,
                    optgroup: groupName
                });
            });
        });
        selectize.refreshOptions(false);
    }

    var TabSearch = Backbone.View.extend({
        /**
         * @param  {object} options Contains the options which are passed in
         * @param  {object} options.properties Contains the list of searchable properties
         * @param  {function} options.onChangeCallback. The function that is called when an option is selected,
         */
        initialize: function initialize(options) {
            throwOnInvalidOptions(options);
            this.options = options;
        },
        render: function render() {
            var template = "{{> form/_Select}}";
            var data = {
                cssClass: "am-selectize-search",
                placeholder: "common.form.search",
                data: "search"
            };
            var html = Handlebars.compile(template)(data);
            this.$el.html(html);
            var selectize = createSelectize(this.$el.find("[data-search]"), this.options.onChange);
            populateOptionsFromJsonSchemaGroup(this.options.properties, selectize);

            return this;
        }
    });

    return TabSearch;
});
