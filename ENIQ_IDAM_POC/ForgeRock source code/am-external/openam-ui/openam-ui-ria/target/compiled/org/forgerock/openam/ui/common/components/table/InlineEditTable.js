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

define(["jquery", "lodash", "backbone", "org/forgerock/commons/ui/common/util/UIUtils", "org/forgerock/openam/ui/common/components/table/InlineEditRow"], function ($, _, Backbone, UIUtils, EditRow) {
    var defaultKeyValueSchema = {
        required: ["key"],
        properties: {
            key: { title: $.t("common.form.propertyName"), propertyOrder: 0 },
            value: { title: $.t("common.form.propertyValue"), propertyOrder: 1 }
        }
    };

    return Backbone.View.extend({
        template: "templates/common/components/table/InlineEditTable.html",

        /**
         * Initializes the table with editables rows. Only single row is allowed to be in edit mode at a time.
         *
         * @param {object[]} values=[] Data array to be passed to the rows
         * @param {object} rowSchema The Schema of an item. Should be valid JSON Schema.
         */
        initialize: function initialize(_ref) {
            var _ref$values = _ref.values,
                values = _ref$values === undefined ? [] : _ref$values,
                _ref$rowSchema = _ref.rowSchema,
                rowSchema = _ref$rowSchema === undefined ? defaultKeyValueSchema : _ref$rowSchema;

            this.values = values;
            this.rowSchema = rowSchema;
            this.rows = [];
        },
        getHeaders: function getHeaders() {
            var headers = [];
            _.each(this.rowSchema.properties, function (item) {
                headers[item.propertyOrder] = item.title;
            });
            return headers;
        },
        getRenderData: function getRenderData() {
            return { headers: this.getHeaders() };
        },
        render: function render() {
            var _this = this;

            this.$el.empty();
            UIUtils.compileTemplate(this.template, this.getRenderData()).then(function (template) {
                _this.$el.html(template);

                _this.tBody = _this.$el.find("tbody");

                _.each(_this.values, function (value) {
                    var row = _this.initRow(value);
                    _this.tBody.append(row.renderInReadOnlyMode().$el);
                    _this.rows.push(row);
                });

                _this.appendEmptyNewRowToTheBottom();
            });

            return this;
        },
        initRow: function initRow() {
            var _this2 = this;

            var rowData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var row = new EditRow(rowData, this.rowSchema);

            var enterEditMode = function enterEditMode(row) {
                if (row === _this2.currentlyEditedRow || row === _this2.newRow) {
                    return;
                }

                if (_this2.currentlyEditedRow) {
                    _this2.currentlyEditedRow.renderInReadOnlyMode();
                }

                row.renderInEditMode().focus();
                _this2.currentlyEditedRow = row;
                _this2.newRow.$el.hide();
            };

            var exitEditMode = function exitEditMode() {
                if (_this2.currentlyEditedRow) {
                    _this2.currentlyEditedRow.renderInReadOnlyMode();
                    _this2.currentlyEditedRow = undefined;
                }
                _this2.newRow.$el.show();
            };

            var addRow = function addRow(row) {
                _this2.rows.push(row);
                row.renderInReadOnlyMode();
                _this2.appendEmptyNewRowToTheBottom();
            };

            var deleteRow = function deleteRow(row) {
                _this2.rows = _.without(_this2.rows, row);
                row.remove();
            };

            row.on("edit", enterEditMode);
            row.on("exitEditMode", exitEditMode);
            row.on("delete", deleteRow);
            row.on("add", addRow);

            return row;
        },
        appendEmptyNewRowToTheBottom: function appendEmptyNewRowToTheBottom() {
            var row = this.initRow();
            this.tBody.append(row.renderInNewMode().$el);
            this.newRow = row;
        },
        getData: function getData() {
            return _.map(this.rows, function (row) {
                return row.getData();
            });
        },
        isValid: function isValid() {
            return true;
        },
        setData: function setData(data) {
            this.values = data;
            this.rows = [];
            this.render();
        }
    });
});
