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

define(["jquery", "lodash", "backbone", "jsonEditor", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/admin/utils/JSONEditorTheme", "org/forgerock/commons/ui/common/util/UIUtils", "popoverclickaway", // depends on jquery and bootstrap
"selectize" // jquery dependencies
], function ($, _, Backbone, JSONEditor, JSONSchema, JSONValues, JSONEditorTheme, UIUtils) {
    function convertHelpBlocksToPopOvers(element) {
        var template = "templates/common/jsonSchema/editors/_HelpPopover.html";
        UIUtils.compileTemplate(template).then(function (html) {
            $(element).find(".help-block").addClass("hidden-lg hidden-md hidden-sm").each(function (index, value) {
                var helpPopOver = $(html);

                helpPopOver.popoverclickaway({
                    container: "#content",
                    html: true,
                    placement: "auto top",
                    content: value.innerHTML
                }).click(function (event) {
                    event.preventDefault();
                });

                $(value).parent().append(helpPopOver);
            });
        });
    }
    /**
     * Passwords are not delivered to the UI from the server. Thus we set a placeholder informing the user that
     * the password will remain unchanged if they do nothing.
     * @param {DOMElement} element The element to perform the element search from
     */
    function setPlaceholderOnPasswords(element) {
        $(element).find("input:password").attr("placeholder", $.t("common.form.passwordPlaceholder"));
    }

    function applyJSONEditorToElement(element, options) {
        var schema = options.schema,
            values = options.values,
            _options$hideInherita = options.hideInheritance,
            hideInheritance = _options$hideInherita === undefined ? false : _options$hideInherita;

        var GRID_COLUMN_WIDTH_1 = 6;
        var GRID_COLUMN_WIDTH_2 = 4;

        JSONEditor.plugins.selectize.enable = true;
        JSONEditor.defaults.themes.openam = JSONEditorTheme.getTheme(GRID_COLUMN_WIDTH_1, GRID_COLUMN_WIDTH_2);

        var actualSchema = schema.toFlatWithInheritanceMeta(values);
        var actualValues = values.removeInheritance();

        actualSchema = actualSchema.raw;
        actualValues = actualValues.raw;

        var editor = new JSONEditor(element[0], {
            "disable_collapse": true,
            "disable_edit_json": true,
            "disable_properties": true,
            "hide_inheritance": hideInheritance,
            "iconlib": "fontawesome4",
            "schema": actualSchema,
            "theme": "openam"
        });

        convertHelpBlocksToPopOvers(element);
        setPlaceholderOnPasswords(element);

        editor.setValue(actualValues);

        return editor;
    }

    var JSONEditorView = Backbone.View.extend({
        className: "jsoneditor-block",
        initialize: function initialize(options) {
            if (!(options.schema instanceof JSONSchema)) {
                throw new TypeError("[JSONEditorView] \"schema\" argument is not an instance of JSONSchema.");
            }
            if (!(options.values instanceof JSONValues)) {
                throw new TypeError("[JSONEditorView] \"values\" argument is not an instance of JSONValues.");
            }

            this.options = _.defaults(options, {
                displayTitle: true
            });
        },
        toggleInheritance: function toggleInheritance(propertySchemaPath, propValue, isInherited) {
            // update the data to hold whatever is now on UI before doing further manipulations
            this.options.values = this.options.values.extend(this.getData());

            this.options.values = this.options.values.addValueForKey(propertySchemaPath, "inherited", isInherited);
            this.options.values = this.options.values.addValueForKey(propertySchemaPath, "value", propValue);

            this.render();
        },
        render: function render() {
            this.$el.empty();

            var watchlist = _.get(this.jsonEditor, "watchlist");

            this.jsonEditor = applyJSONEditorToElement(this.$el, this.options);

            this.jsonEditor.watchlist = watchlist;

            if (!this.options.displayTitle) {
                this.$el.find("[data-header]").parent().hide();
            }

            return this;
        },
        isValid: function isValid() {
            return this.jsonEditor.validate().length === 0;
        },

        /**
        * Returns form data.
        * @returns {Object} form data
        */
        getData: function getData() {
            var values = new JSONValues(this.jsonEditor.getValue());

            // Returns only the subset of values that were displayed to the user (via defaultProperties)
            if (this.options.schema.hasDefaultProperties()) {
                values = values.pick(this.options.schema.raw.defaultProperties);
            }

            values = values.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());
            values = values.addInheritance(this.options.values.raw);

            return values.raw;
        },
        setData: function setData(data) {
            this.options.values = this.options.values.extend(data);
        },
        watch: function watch(path, callback) {
            this.jsonEditor.watch(path, callback);
        }
    });

    return JSONEditorView;
});
//# sourceMappingURL=JSONEditorView.js.map
