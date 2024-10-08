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

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/global/SitesService", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/admin/views/common/Backlink"], function ($, _, Messages, AbstractView, Router, SitesService, FlatJSONSchemaView, Backlink) {
    var NewSiteView = AbstractView.extend({
        template: "templates/admin/views/deployment/sites/NewSiteTemplate.html",
        events: {
            "click [data-create]": "onCreate",
            "keyup  [data-site-name]": "onValidateProps"
        },

        render: function render() {
            var _this = this;

            SitesService.sites.getInitialState().then(function (data) {
                return _this.parentRender(function () {
                    new Backlink().render();
                    _this.jsonSchemaView = new FlatJSONSchemaView({
                        schema: data.schema,
                        values: data.values
                    });
                    $(_this.jsonSchemaView.render().el).appendTo(_this.$el.find("[data-site-form]"));
                });
            });
        },
        onCreate: function onCreate() {
            var values = _.cloneDeep(this.jsonSchemaView.getData());
            var siteId = this.$el.find("[data-site-name]").val();
            values["_id"] = siteId;

            // This doesn't have the values.removeNullPasswords fix from OPENAM-11834 as not required for this view.
            // However it might need adding in the future.
            SitesService.sites.create(values).then(function () {
                Router.routeTo(Router.configuration.routes.listSites, { args: [], trigger: true });
            }, function (response) {
                Messages.addMessage({ response: response, type: Messages.TYPE_DANGER });
            });
        },
        onValidateProps: function onValidateProps(event) {
            var siteId = $(event.currentTarget).val();
            if (siteId.indexOf(" ") !== -1) {
                siteId = false;
                Messages.addMessage({
                    type: Messages.TYPE_DANGER,
                    message: $.t("console.sites.new.nameValidationError")
                });
            }
            this.$el.find("[data-create]").prop("disabled", !siteId);
        }
    });

    return new NewSiteView();
});
