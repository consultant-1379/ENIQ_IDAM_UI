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
  * @module org/forgerock/openam/ui/admin/views/common/schema/SubSchemaListComponent
  */
define("org/forgerock/openam/ui/admin/views/common/schema/SubSchemaListComponent", ["jquery", "lodash", "backbone", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/commons/ui/common/util/UIUtils", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/openam/ui/common/util/Promise"], function ($, _, Backbone, Messages, EventManager, Constants, UIUtils, FormHelper, Promise) {
    return Backbone.View.extend({
        events: {
            "click [data-subschema-delete]": "onDelete"
        },

        initialize: function initialize(_ref) {
            var data = _ref.data,
                subSchemaTemplate = _ref.subSchemaTemplate,
                getSubSchemaCreatableTypes = _ref.getSubSchemaCreatableTypes,
                getSubSchemaInstances = _ref.getSubSchemaInstances,
                deleteSubSchemaInstance = _ref.deleteSubSchemaInstance;

            this.data = data;
            this.subSchemaTemplate = subSchemaTemplate;
            this.getSubSchemaCreatableTypes = getSubSchemaCreatableTypes;
            this.getSubSchemaInstances = getSubSchemaInstances;
            this.deleteSubSchemaInstance = deleteSubSchemaInstance;
        },
        render: function render() {
            var _this = this;

            Promise.all([this.getSubSchemaInstances(), this.getSubSchemaCreatableTypes()]).then(function (response) {
                UIUtils.fillTemplateWithData(_this.subSchemaTemplate, _.assign(_this.data, {
                    instances: response[0],
                    creatables: response[1],
                    // scripting sub configuration (default types) can't be deleted
                    showDeleteButton: _this.data.serviceType !== "scripting"
                }), function (html) {
                    _this.$el.html(html);
                });
            });

            return this;
        },
        onDelete: function onDelete(event) {
            var _this2 = this;

            event.preventDefault();

            var target = $(event.currentTarget);
            var subSchemaInstance = target.closest("tr").data("subschemaId");
            var subSchemaType = target.closest("tr").data("subschemaType");

            FormHelper.showConfirmationBeforeDeleting({
                message: $.t("console.common.confirmDeleteSelected")
            }, function () {
                _this2.deleteSubSchemaInstance(subSchemaType, subSchemaInstance).then(function () {
                    EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
                    _this2.render();
                }, function (response) {
                    return Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
                });
            });
        }
    });
});
//# sourceMappingURL=SubSchemaListComponent.js.map
