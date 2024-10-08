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

define(["jquery", "lodash", "jsonEditor"], function ($, _, JSONEditor) {
    var obj = {};

    var buildTitaToggle = function buildTitaToggle(checkbox, gridColWidth1) {
        var div = document.createElement("div");
        var container = document.createElement("div");
        var label = document.createElement("label");
        var span = document.createElement("span");
        checkbox.style.width = "1px";
        checkbox.style.height = "1px";
        label.appendChild(checkbox);
        label.appendChild(span);
        div.setAttribute("class", "checkbox checkbox-slider-primary\n            checkbox-slider checkbox-slider--b-flat");
        div.style.marginTop = "-5px";
        div.appendChild(label);
        container.setAttribute("class", "col-sm-" + gridColWidth1);
        container.appendChild(div);
        return container;
    };

    obj.getTheme = function (gridColWidth1, gridColWidth2) {
        // Magic number 12 is the number of colomns in the bootstrap grid.
        var theme = JSONEditor.AbstractTheme.extend({
            getSelectInput: function getSelectInput(options) {
                var input = this._super(options);
                input.className += "form-control";

                return input;
            },
            setSelectOptions: function setSelectOptions(selectGroup, options, titles) {
                var select = selectGroup.getElementsByTagName("select")[0] || selectGroup,
                    option = null,
                    i;

                titles = titles || [];
                select.innerHTML = "";

                for (i = 0; i < options.length; i++) {
                    option = document.createElement("option");
                    option.setAttribute("value", options[i]);
                    option.textContent = titles[i] || options[i];
                    select.appendChild(option);
                }
            },
            setGridColumnSize: function setGridColumnSize() {
                // JSONEditor grid system not used, so overridden here.
            },
            afterInputReady: function afterInputReady(input) {
                if (input.controlgroup) {
                    return;
                }
                input.controlgroup = this.closest(input, ".form-group");
                if (this.closest(input, ".compact")) {
                    input.controlgroup.style.marginBottom = 0;
                }
            },
            getTextareaInput: function getTextareaInput(placeholder) {
                var el = document.createElement("textarea");
                el.className = "form-control";
                if (placeholder) {
                    el.setAttribute("placeholder", placeholder);
                }
                return el;
            },
            getFormInputField: function getFormInputField(type, placeholder) {
                var input = this._super(type);
                if (type !== "checkbox") {
                    input.className += "form-control";
                }
                if (placeholder) {
                    input.setAttribute("placeholder", placeholder);
                }
                input.setAttribute("autocomplete", "off");
                return input;
            },
            getFormInputLabel: function getFormInputLabel(text) {
                var el = document.createElement("label");
                el.appendChild(document.createTextNode(text));
                el.className += " control-label col-sm-" + gridColWidth2;
                return el;
            },
            getFormControl: function getFormControl(label, input, description, inheritanceButton) {
                var group = document.createElement("div"),
                    div = document.createElement("div");

                group.className = "form-group";

                if (label && $(input).prop("type") === "checkbox") {
                    input = buildTitaToggle(input, gridColWidth1);
                    input.style.marginTop = "12px";
                }

                if (label) {
                    label.className += " control-label col-sm-" + gridColWidth2;
                    group.appendChild(label);
                }

                if (input.nodeName.toLowerCase() === "input" || input.nodeName.toLowerCase() === "select") {
                    // All Inputs need to be wrapped in a div with the BS grid class added.
                    div.className += "col-sm-" + gridColWidth1;
                    div.appendChild(input);
                    group.appendChild(div);
                } else {
                    group.appendChild(input);
                }

                if (inheritanceButton) {
                    group.appendChild(inheritanceButton);
                }

                if (description) {
                    group.appendChild(description);
                }
                return group;
            },
            getCheckboxLabel: function getCheckboxLabel(text) {
                return this.getFormInputLabel(text);
            },
            getIndentedPanel: function getIndentedPanel() {
                return document.createElement("div");
            },
            getFormInputDescription: function getFormInputDescription(text, additional) {
                return this.getDescription(text, additional);
            },
            getDescription: function getDescription(text, additional) {
                var el = document.createElement("div"),
                    parseHtml = document.implementation.createHTMLDocument(""),
                    content = "",
                    classNames = "",
                    alertType = "";

                if (_.has(additional, "alert")) {
                    alertType = _.get(additional, "alert");
                    classNames = "col-sm-offset-" + gridColWidth2 + " col-sm-" + gridColWidth1;
                    content = "<div><p></p><div class='alert " + alertType + "' role='alert'>" + text + "</div></div>";
                } else {
                    classNames = "col-sm-offset-" + gridColWidth2 + " col-sm-" + gridColWidth1 + " help-block";
                    content = "<div class='wordwrap'>" + text + "</div>";
                }

                el.className = classNames;
                parseHtml.body.innerHTML = content;
                el.appendChild(parseHtml.body.getElementsByTagName("div")[0]);

                return el;
            },
            getHeaderButtonHolder: function getHeaderButtonHolder() {
                return this.getButtonHolder();
            },
            getButtonHolder: function getButtonHolder() {
                var el = document.createElement("div");
                el.className = "btn-group";
                return el;
            },
            getButton: function getButton(text, icon, title) {
                var el = this._super(text, icon, title);
                el.className += "btn btn-default";
                return el;
            },
            getInlineButton: function getInlineButton(text, icon, title) {
                var el = this._super(text, icon, title);
                el.className += "btn btn-link delete-row-item";
                return el;
            },
            getTable: function getTable() {
                var el = document.createElement("table");
                el.className = "table table-bordered";
                el.style.width = "auto";
                el.style.maxWidth = "none";
                return el;
            },
            getGridRow: function getGridRow() {
                var el = document.createElement("div");
                el.className = "form-horizontal";
                return el;
            },
            addInputError: function addInputError(input, text) {
                if (!input.controlgroup) {
                    return;
                }
                input.controlgroup.className += " has-error";
                if (input.errmsg) {
                    input.errmsg.style.display = "";
                } else {
                    input.errmsg = document.createElement("p");
                    input.errmsg.className = "help-block errormsg col-sm-offset-" + gridColWidth2 + " col-sm-" + gridColWidth1;
                    input.controlgroup.appendChild(input.errmsg);
                }

                input.errmsg.textContent = text;
            },
            removeInputError: function removeInputError(input) {
                if (!input.errmsg) {
                    return;
                }
                input.errmsg.style.display = "none";
                input.controlgroup.className = input.controlgroup.className.replace(/\s?has-error/g, "");
            },
            getTabHolder: function getTabHolder() {
                var el = document.createElement("div");
                el.innerHTML = "<div class=tabs 'list-group col-md-2'></div><div class='col-md-10'></div>";
                el.className = "rows";
                return el;
            },
            getTab: function getTab(text) {
                var el = document.createElement("a");
                el.className = "list-group-item";
                el.setAttribute("href", "#");
                el.appendChild(text);
                return el;
            },
            markTabActive: function markTabActive(tab) {
                tab.className += " active";
            },
            markTabInactive: function markTabInactive(tab) {
                tab.className = tab.className.replace(/\s?active/g, "");
            },
            getProgressBar: function getProgressBar() {
                var min = 0,
                    max = 100,
                    start = 0,
                    container = document.createElement("div"),
                    bar = document.createElement("div");

                container.className = "progress";
                bar.className = "progress-bar";
                bar.setAttribute("role", "progressbar");
                bar.setAttribute("aria-valuenow", start);
                bar.setAttribute("aria-valuemin", min);
                bar.setAttribute("aria-valuenax", max);
                bar.innerHTML = start + "%";
                container.appendChild(bar);

                return container;
            },
            updateProgressBar: function updateProgressBar(progressBar, progress) {
                if (!progressBar) {
                    return;
                }

                var bar = progressBar.firstChild,
                    percentage = progress + "%";
                bar.setAttribute("aria-valuenow", progress);
                bar.style.width = percentage;
                bar.innerHTML = percentage;
            },
            updateProgressBarUnknown: function updateProgressBarUnknown(progressBar) {
                if (!progressBar) {
                    return;
                }

                var bar = progressBar.firstChild;
                progressBar.className = "progress progress-striped active";
                bar.removeAttribute("aria-valuenow");
                bar.style.width = "100%";
                bar.innerHTML = "";
            },
            getFirstColumnWrapper: function getFirstColumnWrapper() {
                var wrapper = document.createElement("div");
                wrapper.className = "col-sm-" + gridColWidth1;
                return wrapper;
            },
            getSecondColumnWrapper: function getSecondColumnWrapper() {
                var wrapper = document.createElement("div");
                wrapper.className = "col-sm-offset-1 col-sm-" + (gridColWidth2 - 1);
                return wrapper;
            },
            addError: function addError(element) {
                $(element).addClass("has-error");
            },
            removeError: function removeError(element) {
                $(element).removeClass("has-error");
            },
            addBorder: function addBorder(element) {
                element.style.border = "solid 1px rgb(204, 204, 204)";
                element.style.marginBottom = "15px";
            },
            getHeader: function getHeader(text) {
                var el = document.createElement("h3");

                el.className = "block-header";
                el.setAttribute("data-header", true);
                if (typeof text === "string") {
                    el.textContent = text;
                }
                return el;
            },
            getMapHeader: function getMapHeader(text) {
                var el = document.createElement("div"),
                    header = document.createElement("label");
                el.appendChild(header);
                if (typeof text === "string") {
                    header.textContent = text;
                }
                el.style.display = "inline-block";
                el.className = "col-sm-offset-1";
                return el;
            },
            getKeyFormInputField: function getKeyFormInputField() {
                return this.getFormInputField("text", $.t("common.form.key"));
            },
            getValueFormInputField: function getValueFormInputField() {
                return this.getFormInputField("text", $.t("common.form.value"));
            },
            getInputId: function getInputId() {
                return _.uniqueId();
            },
            getInheritanceButton: function getInheritanceButton(valueIsInherited, path, hideInheritance) {
                if (hideInheritance) {
                    return null;
                }

                var button = document.createElement("button");
                button.type = "button";
                button.className = "btn fr-btn-secondary am-btn-single-icon";
                button.setAttribute("data-inherit-value", valueIsInherited);
                button.setAttribute("data-schemapath", path);
                button.dataToggle = "button";
                button.title = $.t("common.form.inheritValue");
                var icon = document.createElement("i");
                icon.className = "fa fa-unlock";
                if (valueIsInherited) {
                    button.className += " active";
                    icon.className = "fa fa-lock";
                }
                button.appendChild(icon);
                return button;
            },
            getSwitcher: function getSwitcher() {
                var el = document.createElement("div");
                return el;
            },
            getModal: function getModal() {
                var el = document.createElement("div");
                el.className = "form-group";
                return el;
            }
        });

        return theme;
    };

    return obj;
});
