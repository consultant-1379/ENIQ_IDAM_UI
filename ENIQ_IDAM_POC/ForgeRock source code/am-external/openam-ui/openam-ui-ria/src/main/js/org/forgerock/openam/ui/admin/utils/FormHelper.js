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

/**
 * @module org/forgerock/openam/ui/admin/utils/FormHelper
 * @deprecated
 */
define([
    "org/forgerock/openam/ui/admin/utils/form/bindSavePromiseToElement",
    "org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction",
    "org/forgerock/openam/ui/admin/utils/form/setActiveTab",
    "org/forgerock/openam/ui/admin/utils/deprecatedWarning"
], (bindSavePromiseToElement, showConfirmationBeforeAction, setActiveTab, deprecatedWarning) => {
    const obj = {};

    showConfirmationBeforeAction = showConfirmationBeforeAction.default;

    obj.bindSavePromiseToElement = function (promise, element) {
        deprecatedWarning(
            "FormHelper.bindSavePromiseToElement",
            "org/forgerock/openam/ui/admin/utils/form/bindSavePromiseToElement"
        );
        return bindSavePromiseToElement(promise, element);
    };

    obj.showConfirmationBeforeDeleting = function (msg, deleteCallback) {
        deprecatedWarning(
            "FormHelper.showConfirmationBeforeDeleting",
            "org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction"
        );
        return showConfirmationBeforeAction(msg, deleteCallback);
    };

    obj.setActiveTab = function (msg, deleteCallback) {
        deprecatedWarning(
            "FormHelper.setActiveTab",
            "org/forgerock/openam/ui/admin/utils/form/setActiveTab"
        );
        return setActiveTab(msg, deleteCallback);
    };

    return obj;
});
