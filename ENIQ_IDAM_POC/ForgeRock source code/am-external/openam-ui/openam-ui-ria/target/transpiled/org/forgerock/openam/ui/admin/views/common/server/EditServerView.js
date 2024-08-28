"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/admin/services/global/ServersService", "org/forgerock/openam/ui/common/components/PanelComponent", "org/forgerock/openam/ui/common/components/PartialBasedView", "org/forgerock/openam/ui/common/components/TabComponent", "org/forgerock/openam/ui/admin/views/common/TabSearch", "org/forgerock/openam/ui/common/components/table/InlineEditTable", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/openam/ui/admin/utils/form/setFocusToFoundInput", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView"], function ($, _, Messages, AbstractView, EventManager, Constants, ServersService, PanelComponent, PartialBasedView, TabComponent, TabSearch, InlineEditTable, JSONSchema, JSONValues, Promise, setFocusToFoundInput, FlatJSONSchemaView) {
    setFocusToFoundInput = setFocusToFoundInput.default;
    function createTabs(schema) {
        return _(schema.raw.properties).map(function (value, key) {
            return { id: key, order: value.propertyOrder, title: value.title };
        }).sortBy("order").value();
    }
    function isAdvancedSection(sectionId) {
        return sectionId === ServersService.servers.ADVANCED_SECTION;
    }

    return AbstractView.extend({
        template: "templates/admin/views/common/HeaderFormTemplate.html",
        events: {
            "click [data-save]": "onSave",
            "click [data-inherit-value]": "toggleInheritance"
        },
        getJSONSchemaView: function getJSONSchemaView() {
            return this.subview.getBody();
        },
        render: function render(_ref) {
            var _this = this;

            var _ref2 = _slicedToArray(_ref, 2),
                serverId = _ref2[0],
                sectionId = _ref2[1];

            this.sectionId = sectionId;
            this.serverId = serverId;

            this.data.title = $.t("console.common.navigation." + this.sectionId);

            ServersService.servers.getWithDefaults(this.serverId, this.sectionId).then(function (_ref3) {
                var defaultValues = _ref3.defaultValues,
                    schema = _ref3.schema,
                    values = _ref3.values;

                _this.schema = schema;
                _this.values = values;
                _this.defaultValues = defaultValues;

                _this.parentRender(function () {
                    if (isAdvancedSection(_this.sectionId)) {
                        _this.subview = new PanelComponent({
                            createBody: function createBody() {
                                return new InlineEditTable({ values: _.cloneDeep(_this.values.raw) });
                            },
                            createFooter: function createFooter() {
                                return new PartialBasedView({ partial: "form/_JSONSchemaFooter" });
                            }
                        });
                    } else {
                        var tabs = createTabs(schema);
                        _this.subview = new TabComponent({
                            tabs: tabs,
                            createBody: function createBody(id) {
                                if (schema.raw.properties[id].type === "array") {
                                    return new InlineEditTable({
                                        values: _.cloneDeep(_this.values.raw)[id],
                                        rowSchema: schema.raw.properties[id].items
                                    });
                                } else {
                                    return new FlatJSONSchemaView({
                                        schema: new JSONSchema(schema.raw.properties[id]),
                                        values: new JSONValues(_.cloneDeep(_this.values.raw)[id])
                                    });
                                }
                            },
                            createFooter: function createFooter() {
                                return new PartialBasedView({ partial: "form/_JSONSchemaFooter" });
                            }
                        });
                        var options = {
                            properties: _this.schema.raw.properties,
                            onChange: function onChange(id, value) {
                                _this.subview.setTabId(id);
                                setFocusToFoundInput(_this.$el.find("[data-schemapath=\"root." + value + "\"]"));
                            }
                        };
                        _this.$el.find("[data-tab-search]").append(new TabSearch(options).render().$el);
                    }
                    _this.subview.setElement("[data-json-form]");
                    _this.subview.render();
                });
            });
        },
        getSection: function getSection() {
            return this.sectionId === ServersService.servers.ADVANCED_SECTION ? this.sectionId : this.subview.getTabId();
        },
        updateValues: function updateValues() {
            this.values = this.values.extend(_defineProperty({}, this.getSection(), this.getJSONSchemaView().getData()));
        },
        onSave: function onSave() {
            if (!this.getJSONSchemaView().isValid()) {
                Messages.addMessage({
                    message: $.t("common.form.validation.errorsNotSaved"),
                    type: Messages.TYPE_DANGER
                });
                return;
            }

            this.updateValues();

            var values = isAdvancedSection(this.sectionId) ? this.values : this.values.removeNullPasswords(this.schema);

            ServersService.servers.update(this.sectionId, values.raw, this.serverId).then(function () {
                EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
            }, function (response) {
                Messages.addMessage({
                    response: response,
                    type: Messages.TYPE_DANGER
                });
            });
        },
        toggleInheritance: function toggleInheritance(event) {
            var target = event.currentTarget;
            var removeJSONSchemaRootPrefix = function removeJSONSchemaRootPrefix(key) {
                return key.slice(5);
            };
            var propertySchemaPath = removeJSONSchemaRootPrefix(target.getAttribute("data-schemapath"));
            var isInherited = target.getAttribute("data-inherit-value") === "true";
            var propValue = void 0;

            if (isInherited) {
                propValue = this.values.raw[this.subview.getTabId()][propertySchemaPath].value;
            } else {
                propValue = this.defaultValues.raw[this.subview.getTabId()][propertySchemaPath];
            }

            this.getJSONSchemaView().subview.toggleInheritance(propertySchemaPath, propValue, !isInherited);
        }
    });
});
