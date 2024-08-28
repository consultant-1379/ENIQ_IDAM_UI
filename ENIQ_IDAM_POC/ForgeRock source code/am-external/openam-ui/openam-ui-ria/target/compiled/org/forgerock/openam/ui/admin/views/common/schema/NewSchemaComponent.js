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

define(["lodash", "backbone", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/util/UIUtils", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/common/views/jsonSchema/GroupedJSONSchemaView", "org/forgerock/openam/ui/common/models/JSONValues"], function (_, Backbone, Messages, Router, UIUtils, Promise, FlatJSONSchemaView, GroupedJSONSchemaView, JSONValues) {
    return Backbone.View.extend({
        events: {
            "click [data-save]": "onSave",
            "click [data-cancel]": "onCancel",
            "keyup [data-instance-id]": "onIdChange",
            "change [data-instance-id]": "onIdChange"
        },

        onIdChange: function onIdChange(event) {
            var isEmpty = _.isEmpty(event.currentTarget.value);
            this.setCreateEnabled(!isEmpty);
        },
        setCreateEnabled: function setCreateEnabled(enabled) {
            this.$el.find("[data-save]").prop("disabled", !enabled);
        },


        // TODO: document the interface and put guard clauses
        initialize: function initialize(_ref) {
            var data = _ref.data,
                listRoute = _ref.listRoute,
                listRouteArgs = _ref.listRouteArgs,
                editRoute = _ref.editRoute,
                editRouteArgs = _ref.editRouteArgs,
                template = _ref.template,
                getInitialState = _ref.getInitialState,
                createInstance = _ref.createInstance;

            this.data = data;
            this.listRoute = listRoute;
            this.listRouteArgs = listRouteArgs;
            this.editRoute = editRoute;
            this.editRouteArgs = editRouteArgs;
            this.template = template;
            this.getInitialState = getInitialState;
            this.createInstance = createInstance;
        },
        render: function render() {
            var _this = this;

            this.getInitialState().then(function (response) {
                _this.schema = response.schema;
                var options = {
                    schema: _this.schema,
                    values: response.values,
                    showOnlyRequiredAndEmpty: true
                };

                if (_this.schema.isCollection()) {
                    _this.jsonSchemaView = new GroupedJSONSchemaView(options);
                } else {
                    _this.jsonSchemaView = new FlatJSONSchemaView(options);
                }

                UIUtils.compileTemplate(_this.template, _this.data).then(function (html) {
                    _this.$el.html(html);
                    _this.$el.find("[data-json-form]").html(_this.jsonSchemaView.render().$el);
                });
            });

            return this;
        },
        onSave: function onSave() {
            var _this2 = this;

            var formData = _.cloneDeep(this.jsonSchemaView.getData());
            var instanceId = this.$el.find("[data-instance-id]").val();
            formData["_id"] = instanceId;
            var values = new JSONValues(formData);
            var valuesWithoutNullPasswords = values.removeNullPasswords(this.schema);

            this.createInstance(valuesWithoutNullPasswords.raw).then(function () {
                Router.routeTo(_this2.editRoute, {
                    args: _this2.editRouteArgs(encodeURIComponent(instanceId)),
                    trigger: true
                });
            }, function (response) {
                Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
            });
        },
        onCancel: function onCancel() {
            Router.routeTo(this.listRoute, { args: this.listRouteArgs, trigger: true });
        }
    });
});
