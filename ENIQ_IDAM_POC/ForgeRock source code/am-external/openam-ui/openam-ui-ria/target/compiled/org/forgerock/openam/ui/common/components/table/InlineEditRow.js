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

define(["jquery", "lodash", "backbone", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/main/ValidatorsManager", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/commons/ui/common/util/UIUtils"], function ($, _, Backbone, EventManager, ValidatorsManager, Constants, UIUtils) {
    var READ_ONLY_TEMPLATE = "templates/common/components/table/ReadOnlyRow.html";
    var EDIT_ROW_TEMPLATE = "templates/common/components/table/EditRow.html";
    var NEW_ROW_TEMPLATE = "templates/common/components/table/NewRow.html";

    var getSelectOptions = function getSelectOptions(options, selectedValue) {
        return _.map(options, function (value) {
            return { value: value, isSelected: value === selectedValue };
        });
    };

    var getColumns = function getColumns(rowData, rowSchema) {
        var columns = [];
        _.each(rowSchema.properties, function (property, propertyName) {
            columns[property.propertyOrder] = {
                data: rowData[propertyName],
                required: _.includes(rowSchema.required, propertyName) ? "required" : false
            };
            if (property.enum) {
                columns[property.propertyOrder].selectOptions = getSelectOptions(property.enum, rowData[propertyName]);
            }
        });
        return columns;
    };

    var getRenderData = function getRenderData(rowData, rowSchema) {
        return { columns: getColumns(rowData, rowSchema) };
    };

    var getRowDataFromDom = function getRowDataFromDom(rowSchema, domElement) {
        var rowData = {};
        _.each(rowSchema.properties, function (property, propertyName) {
            var element = "input";
            if (property.enum) {
                element = "select";
            }
            var domValue = domElement.find(element + "[data-row-" + property.propertyOrder + "]").val();
            rowData[propertyName] = domValue ? domValue.trim() : domValue;
        });
        return rowData;
    };

    return Backbone.View.extend({
        events: {
            "click button[data-add-row]": "addRow",
            "keyup [data-add-row]": "addRow",
            "click button[data-save-row]": "saveRow",
            "blur [data-save-row]": "stopEvent",
            "keyup [data-save-row]": "saveRow",
            "dblclick td": "editRow",
            /* The event handler for the [data-edit-row] is attached to the "keyup" event instead of a "click",
            because inside this handler we are changing the focus to the input element and if the orignal event handler
            is attached to "click", then by the time the focus has changed the key is still pressed and when it is
            finally released, it triggers the "keyup" event handler of the input, which tries to save the row */
            "keyup [data-edit-row]": "editRow",
            "mouseup [data-edit-row]": "editRow",
            "click [data-delete-row]": "deleteRow",
            "click [data-undo-edit-row]": "exitEditMode"
        },
        tagName: "tr",

        initialize: function initialize(rowData, rowSchema) {
            this.rowData = rowData;
            this.rowSchema = rowSchema;
        },
        renderTemplate: function renderTemplate(template) {
            var _this = this;

            UIUtils.compileTemplate(template, getRenderData(this.rowData, this.rowSchema)).then(function (compiledTemplate) {
                _this.$el.html(compiledTemplate);
                ValidatorsManager.bindValidators(_this.$el);
            });
        },
        renderInReadOnlyMode: function renderInReadOnlyMode() {
            this.$el.removeClass("am-inline-edit-table-row");
            this.renderTemplate(READ_ONLY_TEMPLATE);
            return this;
        },
        renderInEditMode: function renderInEditMode() {
            this.$el.addClass("am-inline-edit-table-row");
            this.renderTemplate(EDIT_ROW_TEMPLATE);
            return this;
        },
        renderInNewMode: function renderInNewMode() {
            this.$el.addClass("am-inline-edit-table-row");
            this.renderTemplate(NEW_ROW_TEMPLATE);
            return this;
        },
        editRow: function editRow(event) {
            if (event.type === "keyup" && event.keyCode !== 13) {
                return;
            }
            this.trigger("edit", this);
        },
        deleteRow: function deleteRow() {
            this.trigger("delete", this);
        },
        exitEditMode: function exitEditMode() {
            this.trigger("exitEditMode", this);
        },
        focus: function focus() {
            this.$el.find("input:first").focus();
        },
        addRow: function addRow(event) {
            if (event.type === "keyup" && event.keyCode !== 13) {
                return;
            }
            ValidatorsManager.validateAllFields(this.$el);
            var domData = getRowDataFromDom(this.rowSchema, this.$el);
            if (this.isDataValid(domData, this.rowSchema)) {
                this.rowData = domData;
                this.trigger("add", this);
            }
        },
        saveRow: function saveRow(event) {
            if (event.type === "keyup" && event.keyCode !== 13) {
                return;
            }
            ValidatorsManager.validateAllFields(this.$el);
            var domData = getRowDataFromDom(this.rowSchema, this.$el);
            if (this.isDataValid(domData, this.rowSchema)) {
                this.rowData = domData;
                this.trigger("exitEditMode", this);
            }
        },
        isDataValid: function isDataValid(data, schema) {
            return _.every(data, function (propertyValue, propertyName) {
                return propertyValue !== undefined && propertyValue.length > 0 || !_.includes(schema.required, propertyName);
            });
        },
        getData: function getData() {
            return this.rowData;
        }
    });
});
