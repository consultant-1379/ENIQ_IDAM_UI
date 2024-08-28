define(["exports", "i18next", "org/forgerock/commons/ui/common/components/BootstrapDialog"], function (exports, _i18next, _BootstrapDialog) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = showConfirmationBeforeAction;

    var _BootstrapDialog2 = _interopRequireDefault(_BootstrapDialog);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Shows a confirmation dialog before performing a dangerous action and calls action callback if needed.
     * @module org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction
     * @param  {object} msg Message object
     * @param  {string} [msg.type] Type of object on which action is performed
     * @param  {string} [msg.message] Confirmation message to show
     * @param  {function} actionCallback Action callback
     * @param  {string} [actionName] Name of the performed action
     * @example
     * clickHandler: function (event) {
     *   event.preventDefault();
     *   showConfirmationBeforeAction({type: "console.scripts.edit.script"}, deleteEntity);
     * }
     */
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

    function showConfirmationBeforeAction(msg, actionCallback) {
        var actionName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _i18next.t)("common.form.delete");

        _BootstrapDialog2.default.confirm({
            type: _BootstrapDialog2.default.TYPE_DANGER,
            title: (0, _i18next.t)("common.form.confirm") + " " + actionName,
            message: msg.message ? msg.message : (0, _i18next.t)("console.common.confirmDeleteText", { type: msg.type }),
            btnOKLabel: actionName,
            btnOKClass: "btn-danger",
            callback: function callback(result) {
                if (result && actionCallback) {
                    actionCallback();
                }
            }
        });
    }
});
