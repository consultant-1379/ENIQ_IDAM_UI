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

define(["jquery", "lodash", "backbone", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/EventManager", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/admin/services/realm/ServicesService", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/commons/ui/common/util/UIUtils", "org/forgerock/openam/ui/common/util/Promise"], function ($, _, Backbone, Messages, EventManager, Router, Constants, ServicesService, FormHelper, UIUtils, Promise) {
    function deleteSubSchema(realmPath, type, subSchemaType, subSchemaInstance) {
        return ServicesService.type.subSchema.instance.remove(realmPath, type, subSchemaType, subSchemaInstance);
    }

    var SubschemaListView = Backbone.View.extend({
        template: "templates/admin/views/realms/services/SubSchemaListTemplate.html",
        events: {
            "click [data-subschema-delete]": "onDelete"
        },
        initialize: function initialize(options) {
            this.options = options;
        },
        render: function render() {
            var _this = this;

            Promise.all([ServicesService.type.subSchema.instance.getAll(this.options.realmPath, this.options.type), ServicesService.type.subSchema.type.getCreatables(this.options.realmPath, this.options.type)]).then(function (response) {
                var data = _.merge({}, _this.options, {
                    instances: response[0][0],
                    creatables: response[1][0]
                });

                UIUtils.fillTemplateWithData(_this.template, data, function (html) {
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
                message: $.t("console.services.subSchema.confirmDeleteSelected")
            }, function () {
                deleteSubSchema(_this2.options.realmPath, _this2.options.type, subSchemaType, subSchemaInstance).then(function () {
                    EventManager.sendEvent(Constants.EVENT_DISPLAY_MESSAGE_REQUEST, "changesSaved");
                    _this2.render();
                }, function (response) {
                    return Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
                });
            });
        }
    });

    return SubschemaListView;
});
//# sourceMappingURL=SubSchemaListView.js.map
