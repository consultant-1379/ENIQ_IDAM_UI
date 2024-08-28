"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
 * Represents a JSON Schema.
 * <p/>
 * <h2>Function naming conventions</h2>
 * Refer to the following naming convention, when adding new functions to this class:
 * <ul>
 *   <li>For <strong>query</strong> functions, which do not return a new instance of <code>JSONSchema</code>, use <code>#get*</code></li>
 *   <li>For <strong>transform</strong> functions, which do not loose data, use <code>#to*</code> and <code>#from*</code></li>
 *   <li>For <strong>modification</strong> functions, which loose the data, use <code>add*</code> and <code>#remove*</code></li>
 *   <li>For functions, which <strong>check for presense</strong>, use <code>#has*</code> and <code>#is*</code></li>
 *   <li>For <strong>utility</strong> functions use simple verbs, e.g. <code>#omit</code>, <code>#pick</code>, etc.</li>
 * </ul>
 * @module
 * @example
 * // The structure of JSON Schema documents emitted from OpenAM is expected to be the following:
 * {
 *   properties: {
 *     globalProperty: true, // Global properties (OpenAM wide) are listed at the top-level
 *     default: { ... }, // Default properties are organisation (Realm) level properties and are nested under "default"
 *     dynamic: { ... } // Dynamic properties are user level properties (OpenAM wide) and are nested under "dynamic"
 *   },
 *   type: "object"
 * }
 */
define(["i18next", "lodash", "org/forgerock/openam/ui/common/models/schemaTransforms/transformBooleanTypeToCheckboxFormat", "org/forgerock/openam/ui/common/models/schemaTransforms/transformEnumTypeToString", "org/forgerock/openam/ui/common/models/schemaTransforms/warnOnInferredPasswordWithoutFormat"], function (i18next, _, transformBooleanTypeToCheckboxFormat, transformEnumTypeToString, warnOnInferredPasswordWithoutFormat) {
    /**
     * Determines whether the specified object is of type <code>object</code>
     * @param   {Object}  object Object to determine the type of
     * @returns {Boolean}        Whether the object is of type <code>object</code>
     */
    function isObjectType(object) {
        return object.type === "object";
    }

    function groupTopLevelSimpleProperties(raw) {
        var collectionProperties = _(raw.properties).pick(function (property) {
            return _.has(property, "properties");
        }).keys().value();

        var predicate = ["defaults"].concat(_toConsumableArray(collectionProperties));
        var simplePropertiesToGroup = _.omit.apply(_, [raw.properties].concat(_toConsumableArray(predicate)));

        if (_.isEmpty(simplePropertiesToGroup)) {
            return raw;
        }

        var schema = _.cloneDeep(raw);

        schema.properties = _extends({}, _.omit(schema.properties, _.keys(simplePropertiesToGroup)), {
            global: {
                properties: simplePropertiesToGroup,
                propertyOrder: -10,
                title: i18next.t("console.common.globalAttributes"),
                type: "object"
            }
        });

        return schema;
    }

    function throwOnNoSchemaRootType(schema) {
        if (!schema.type) {
            throw new Error("[JSONSchema] No \"type\" attribute found on schema root object.");
        }
    }

    /**
    * Ungroups collection properties, moving them one level up.
    *
    * @param   {Object} raw Schema
    * @param   {string} groupKey Group key of the property value object
    * @returns {JSONSchema} JSONSchema new JSONSchema object
    */
    function ungroupCollectionProperties(raw, groupKey) {
        var collectionProperties = _.pick(raw.properties[groupKey].properties, function (value) {
            return value.type === "object" && _.has(value, "properties");
        });

        if (_.isEmpty(collectionProperties)) {
            return raw;
        }

        var schema = _.cloneDeep(raw);
        schema.properties = _extends({}, schema.properties, collectionProperties);
        schema.properties[groupKey].properties = _.omit(schema.properties[groupKey].properties, _.keys(collectionProperties));

        if (_.isEmpty(schema.properties[groupKey].properties)) {
            delete schema.properties[groupKey];
        }

        return schema;
    }

    /**
     * Recursively invokes the specified functions over each object's properties
     * @param {Object} object   Object with properties
     * @param {Array} callbacks Array of functions
     */
    function eachProperty(object, callbacks) {
        if (isObjectType(object)) {
            _.forEach(object.properties, function (property, key) {
                _.forEach(callbacks, function (callback) {
                    callback(property, key);
                });

                if (isObjectType(property)) {
                    eachProperty(property, callbacks);
                }
            });
        }
    }

    /**
     * Iterates over a scheam, transforming adding appropriate warnings.
     * @param {Object} schema the schema to be transformed
     * @returns {Object} the transformed schema
     */
    function cleanJSONSchema(schema) {
        eachProperty(schema, [transformBooleanTypeToCheckboxFormat, transformEnumTypeToString.default, warnOnInferredPasswordWithoutFormat]);

        return schema;
    }

    return function () {
        function JSONSchema(schema) {
            _classCallCheck(this, JSONSchema);

            throwOnNoSchemaRootType(schema);

            var hasDefaults = _.has(schema, "properties.defaults");
            var hasDynamic = _.has(schema, "properties.dynamic");

            if (hasDefaults || hasDynamic) {
                schema = groupTopLevelSimpleProperties(schema);
            }

            if (hasDefaults) {
                schema = ungroupCollectionProperties(schema, "defaults");
            }

            schema = cleanJSONSchema(schema);

            this.raw = Object.freeze(schema);
        }

        JSONSchema.prototype.addDefaultProperties = function addDefaultProperties(keys) {
            var schema = _.cloneDeep(this.raw);
            schema.defaultProperties = _.union(schema.defaultProperties, keys);
            return new JSONSchema(schema);
        };

        JSONSchema.prototype.hasDefaultProperties = function hasDefaultProperties() {
            return !_.isEmpty(this.raw.defaultProperties);
        };

        JSONSchema.prototype.getEnableKey = function getEnableKey() {
            var key = _.camelCase(this.raw.title) + "Enabled";
            if (this.raw.properties[key]) {
                return key;
            }
        };

        JSONSchema.prototype.getEnableProperty = function getEnableProperty() {
            return this.pick(this.getEnableKey());
        };

        JSONSchema.prototype.getKeys = function getKeys(sort) {
            var _this = this;

            sort = typeof sort === "undefined" ? false : sort;

            if (sort) {
                var sortedSchemas = _.sortBy(_.map(this.raw.properties), "propertyOrder");
                return _.map(sortedSchemas, function (schema) {
                    return _.findKey(_this.raw.properties, schema);
                });
            } else {
                return _.keys(this.raw.properties);
            }
        };

        JSONSchema.prototype.getPasswordKeys = function getPasswordKeys() {
            var _this2 = this;

            var passwordProperties = _.pick(this.raw.properties, function (property) {
                var propertyPath = _this2.hasInheritance(property) ? "properties.value.format" : "format";
                return _.get(property, propertyPath) === "password";
            });

            return _.keys(passwordProperties);
        };

        JSONSchema.prototype.getPropertiesAsSchemas = function getPropertiesAsSchemas() {
            return _.mapValues(this.raw.properties, function (property) {
                return new JSONSchema(property);
            });
        };

        JSONSchema.prototype.getRequiredPropertyKeys = function getRequiredPropertyKeys() {
            var _this3 = this;

            var requiredProperties = _.pick(this.raw.properties, function (property) {
                var propertyPath = _this3.hasInheritance(property) ? "properties.value.required" : "required";
                return _.get(property, propertyPath) === true;
            });

            return _.keys(requiredProperties);
        };

        JSONSchema.prototype.hasEnableProperty = function hasEnableProperty() {
            return !_.isUndefined(this.raw.properties[_.camelCase(this.raw.title) + "Enabled"]);
        };

        JSONSchema.prototype.hasInheritance = function hasInheritance(property) {
            return !_.isEmpty(property) && property.type === "object" && _.has(property, "properties.inherited");
        };
        /**
         * Whether this schema objects' properties are all schemas in their own right.
         * If true, this object is a simply a container for other schemas.
         * @returns {Boolean} Whether this object is a collection
         */


        JSONSchema.prototype.isCollection = function isCollection() {
            return _.every(this.raw.properties, function (property) {
                return property.type === "object";
            });
        };

        JSONSchema.prototype.isEmpty = function isEmpty() {
            return _.isEmpty(this.raw.properties);
        };

        JSONSchema.prototype.pick = function pick(predicate) {
            var schema = _.cloneDeep(this.raw);
            schema.properties = _.pick(this.raw.properties, predicate);

            return new JSONSchema(schema);
        };

        JSONSchema.prototype.omit = function omit(predicate) {
            var schema = _.cloneDeep(this.raw);
            schema.properties = _.omit(this.raw.properties, predicate);

            return new JSONSchema(schema);
        };
        /**
         * Returns a new JSONSchema with only the required and default properties present.
         * @returns {JSONSchema} JSONSchema object with only the required and default properties present.
         */


        JSONSchema.prototype.removeUnrequiredNonDefaultProperties = function removeUnrequiredNonDefaultProperties() {
            var schema = _.cloneDeep(this.raw);
            var defaultProperties = this.raw.defaultProperties;
            schema.properties = _.pick(this.raw.properties, function (property, key) {
                return _.contains(defaultProperties, key) || property.required;
            });
            return new JSONSchema(schema);
        };
        /**
         * Flattens schema properties to enable schema to be renderable. Adds inheritance metadata to each property of
         * the schema, so JSONEditor knows whether to enable or disable the input field.
         * @param {JSONValues} values JSONValues object to take inheritance metadata from.
         * @returns {JSONSchema} Flattened JSONSchema object with inheritance metadata.
         */


        JSONSchema.prototype.toFlatWithInheritanceMeta = function toFlatWithInheritanceMeta(values) {
            var _this4 = this;

            var schema = _.cloneDeep(this.raw);

            schema.properties = _.mapValues(this.raw.properties, function (originalValue, propName) {
                if (_this4.hasInheritance(originalValue)) {
                    var value = originalValue.properties.value;
                    var property = _extends({}, _.omit(originalValue, "properties"), value, {
                        isInherited: Boolean(values.raw[propName] && values.raw[propName].inherited)
                    });
                    return property;
                }

                return originalValue;
            });

            return new JSONSchema(schema);
        };

        return JSONSchema;
    }();
});
//# sourceMappingURL=JSONSchema.js.map
