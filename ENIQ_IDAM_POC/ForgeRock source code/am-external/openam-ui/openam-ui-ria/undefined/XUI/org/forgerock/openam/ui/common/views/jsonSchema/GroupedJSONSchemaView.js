"use strict";

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

/**
* View that takes <code>JSONSchema</code> and <code>JSONValue</code> objects and renders them in a grouped structure.
* <p/>
* This view only supports JSONSchema objects which <strong>are collections</strong> (determined by
* <code>#isCollection</code> upon <code>JSONSchema</code>) and outputs headers for groups followed by a simple list of
* input fields related to that grouped within the specification of the JSON Schema.
* <p/>
* e.g.<br>
* <code>
* <hr/>
* <i>Header 1</i><br>
* Label 1 | &lt;input here&gt; |<br>
* Label 2 | &lt;input here&gt; |<br>
* <br>
* <i>Header 2</i><br>
* Label 1 | &lt;input here&gt; |<br>
* Label 2 | &lt;input here&gt; |<br>
* <hr/>
* </code>
 * @module org/forgerock/openam/ui/common/views/jsonSchema/GroupedJSONSchemaView
 */
define(["jquery", "lodash", "backbone", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/views/jsonSchema/iteratees/createJSONEditorView", "org/forgerock/openam/ui/common/views/jsonSchema/iteratees/emptyProperties", "org/forgerock/openam/ui/common/views/jsonSchema/iteratees/setDefaultPropertiesToRequiredAndEmpty", "org/forgerock/openam/ui/common/views/jsonSchema/iteratees/showEnablePropertyIfAllPropertiesHidden"], function ($, _, Backbone, JSONSchema, JSONValues, createJSONEditorView, emptyProperties, setDefaultPropertiesToRequiredAndEmpty, showEnablePropertyIfAllPropertiesHidden) {
    /**
     * There is no reliable method of knowing if the form rendered by the JSON Editor has finished being added to the
     * DOM. We do however wish to signal when render is complete so views can perform actions (e.g. enabling buttons
     * when the form is ready for input). The workaround is to add the callback to the browser event queue using
     * setTimeout meaning his callback will be executed after the render cycle has complete.
     * @param  {Function} callback Function to invoke after the timeout has expired
     */
    function invokeOnRenderedAfterTimeout(callback) {
        if (callback) {
            setTimeout(callback, 0);
        }
    }

    var GroupedJSONSchemaView = Backbone.View.extend({
        initialize: function initialize(options) {
            if (!(options.schema instanceof JSONSchema)) {
                throw new TypeError("[GroupedJSONSchemaView] \"schema\" argument is not an instance of JSONSchema.");
            }
            if (!options.schema.isCollection()) {
                throw new Error("[GroupedJSONSchemaView] Only JSONSchema collections are supported by this view.");
            }
            if (!(options.values instanceof JSONValues)) {
                throw new TypeError("[GroupedJSONSchemaView] \"values\" argument is not an instance of JSONValues.");
            }

            this.options = _.defaults(options, {
                showOnlyRequiredAndEmpty: false
            });
        },
        render: function render() {
            var _this = this;

            var schemas = this.options.schema.getPropertiesAsSchemas();
            var values = this.options.values.raw;
            var orderedSchemaPropertyKeys = this.options.schema.getKeys(true);

            // Create an array of objects which each contain the schema and values paired together
            var orderedSchemaValuePairs = _.map(orderedSchemaPropertyKeys, function (key) {
                return {
                    key: key,
                    hideInheritance: _this.options.hideInheritance,
                    schema: schemas[key],
                    values: new JSONValues(values[key])
                };
            });

            if (this.options.showOnlyRequiredAndEmpty) {
                orderedSchemaValuePairs = _(orderedSchemaValuePairs).map(setDefaultPropertiesToRequiredAndEmpty).map(showEnablePropertyIfAllPropertiesHidden).omit(emptyProperties).value();
            }

            this.subviews = _(orderedSchemaValuePairs).map(createJSONEditorView).invoke("render").each(function (view) {
                view.$el.appendTo(_this.$el);
            }).value();

            invokeOnRenderedAfterTimeout(this.options.onRendered);

            return this;
        },
        getData: function getData() {
            var values = _.map(this.subviews, function (view) {
                var viewData = void 0;
                if (view.options.key) {
                    viewData = _defineProperty({}, view.options.key, view.getData());
                } else {
                    viewData = view.getData();
                }
                return viewData;
            });

            return _.reduce(values, _.merge, {});
        }
    });

    return GroupedJSONSchemaView;
});
//# sourceMappingURL=GroupedJSONSchemaView.js.map
