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
  * @module org/forgerock/openam/ui/admin/utils/form/bindSavePromiseToElement
  */
define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/Messages"], function ($, _, Messages) {
    return (

        /**
              * Binds a promise representing a save to a button element, visualising it's state.
              * <p>
              * Intented to be used in conjunction with the <code>_JSONSchemaFooter.html</code> partial.
              * @param  {Promise} promise Save promise. Usually a promise from an AJAX request
              * @param  {HTMLElement} element The button element visualising the promise's state
              * @example
              * clickHandler: function (event) {
              *   const promise = Service.update(this.data);
              *   bindSavePromiseToElement(promise, event.currentTarget);
              * }
              */
        function (promise, element) {
            element = $(element);
            element.prop("disabled", true);
            element.width(element.width());

            var span = element.find("span");
            var text = span.text();
            var elementClass = element.attr("class");

            span.fadeOut(300, function () {
                span.empty();
                span.removeClass().addClass("fa fa-refresh fa-spin");
                span.fadeIn(300);

                promise.done(function () {
                    span.removeClass().addClass("fa fa-check fa-fw");
                }).fail(function (response) {
                    Messages.addMessage({ type: Messages.TYPE_DANGER, response: response });
                    span.removeClass().addClass("fa fa-times fa-fw");
                    element.removeClass().addClass("btn btn-danger");
                }).always(function () {
                    _.delay(function () {
                        span.fadeOut(300, function () {
                            span.removeClass().text(text);
                            element.removeClass().addClass(elementClass).prop("disabled", false);
                            span.fadeIn(300);
                        });
                    }, 1000);
                });
            });
        }
    );
});
//# sourceMappingURL=bindSavePromiseToElement.js.map
