define(["exports", "lodash"], function (exports, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /**
     * Takes an array of all possible paths and removes repeating nodes, so they are not rendered several times. Returns
     * <code>null</code> in place of removed nodes.
     *
     * @param {Array[]} paths array of all possible paths
     * @returns {Array[]} array of compacted paths
     */
    var getCompactedPaths = function getCompactedPaths(paths) {
        var connectedNodes = [];

        return (0, _lodash.chain)(paths).map(function (row) {
            var compactedPath = (0, _lodash.map)(row, function (node) {
                if ((0, _lodash.findIndex)(connectedNodes, node) === -1) {
                    connectedNodes.push(node);
                    return node;
                } else {
                    return null;
                }
            });

            return (0, _lodash.filter)(compactedPath, function (node) {
                return !(0, _lodash.isEmpty)(node);
            }).length > 0 ? compactedPath : null;
        }).compact().value();
    }; /*
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
        * Copyright 2017 ForgeRock AS.
        */

    exports.default = getCompactedPaths;
});
//# sourceMappingURL=getCompactedPaths.js.map
