define(["exports", "lodash", "./stage"], function (exports, _lodash, _stage) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /**
     * Given the array of columns and node dimensions, this function returns positions (x, y) for all connected tree nodes.
     *
     * @param {Array[]} columns array of columns
     * @param {Object} dimensions heights and widths of the nodes, indexed by node id
     * @returns {Object} object with node ids as keys and their positions as values
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
     * Copyright 2017 ForgeRock AS.
     */

    var getTreeNodePositions = function getTreeNodePositions(columns, dimensions) {
        return (0, _lodash.chain)(columns).map(function (column, columnIndex) {
            return (0, _lodash.map)(column, function (node, rowIndex) {
                return {
                    id: (0, _lodash.findKey)(node),
                    x: (0, _stage.getNodeXPosition)(columns, columnIndex, dimensions),
                    y: (0, _stage.getNodeYPosition)(columns, columnIndex, rowIndex, dimensions)
                };
            });
        }).flatten().value();
    };

    exports.default = getTreeNodePositions;
});
