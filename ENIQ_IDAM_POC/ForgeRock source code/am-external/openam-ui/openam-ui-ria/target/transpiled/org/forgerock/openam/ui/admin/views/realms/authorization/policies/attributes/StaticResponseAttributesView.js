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
 * Copyright 2014-2017 ForgeRock AS.
 */

define(["lodash", "backbone", "org/forgerock/openam/ui/common/components/table/InlineEditTable"], function (_, Backbone, InlineEditTable) {
    var StaticResponseAttributesView = Backbone.View.extend({
        initialize: function initialize(_ref) {
            var staticAttributes = _ref.staticAttributes;

            this.staticAttributes = staticAttributes;
        },
        render: function render() {
            var _this = this;

            var getFlattenedStaticAttributes = function getFlattenedStaticAttributes() {
                return _.flatten(_.map(_this.staticAttributes, function (attribute) {
                    return _.map(attribute.propertyValues, function (value) {
                        return { key: attribute.propertyName, value: value };
                    });
                }));
            };

            this.inlineEditList = new InlineEditTable({
                values: getFlattenedStaticAttributes()
            });
            this.$el.append(this.inlineEditList.render().$el);

            return this;
        },
        getGroupedData: function getGroupedData() {
            return _(this.inlineEditList.getData()).groupBy("key").map(function (values, key) {
                return {
                    type: "Static",
                    propertyName: key,
                    propertyValues: _.map(values, "value")
                };
            }).value();
        }
    });

    return StaticResponseAttributesView;
});
