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
 * Copyright 2015-2017 ForgeRock AS.
 */

define(["jquery", "lodash", "org/forgerock/commons/ui/common/components/BootstrapDialog", "org/forgerock/commons/ui/common/util/UIUtils"], function ($, _, BootstrapDialog, UIUtils) {
    return function (uuid, device) {
        var data = {
            deviceName: device.deviceName,
            recoveryCodes: device.recoveryCodes
        };

        UIUtils.compileTemplate("templates/user/dashboard/EditDeviceDialogTemplate.html", data).then(function (tpl) {
            BootstrapDialog.show({
                title: device.deviceName,
                message: $(tpl),
                cssClass: "device-details",
                buttons: [{
                    label: $.t("common.form.close"),
                    action: function action(dialog) {
                        dialog.close();
                    }
                }]
            });
        });
    };
});
//# sourceMappingURL=DeviceDetailsDialog.js.map
