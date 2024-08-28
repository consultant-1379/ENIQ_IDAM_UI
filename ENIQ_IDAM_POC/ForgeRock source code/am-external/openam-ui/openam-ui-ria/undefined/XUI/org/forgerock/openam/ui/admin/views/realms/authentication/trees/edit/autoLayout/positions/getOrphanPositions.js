define(["exports", "lodash", "./stage"], function (exports, _lodash, _stage) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /**
     * Given the array of orphan nodes and columns, and all the node dimensions, this function returns
     * positions (x, y) for all orphans.
     *
     * @param {Object[]} orphans array of all orphans
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

    var getOrphanPositions = function getOrphanPositions(orphans, columns, dimensions) {
        var treeHeight = (0, _lodash.max)((0, _stage.getColumnHeights)(columns, dimensions));
        var nextXPosition = _stage.HORIZONTAL_NODE_MARGIN;
        var calculateNextXPosition = function calculateNextXPosition(width) {
            var xPosition = nextXPosition;
            nextXPosition = nextXPosition + _stage.HORIZONTAL_NODE_MARGIN + width;
            return xPosition;
        };

        return (0, _lodash.chain)(orphans).map(function (orphan, orphanId) {
            return {
                id: orphanId,
                x: calculateNextXPosition(dimensions[orphanId].width),
                y: treeHeight + _stage.VERTICAL_NODE_MARGIN
            };
        }).sortBy("id").value();
    };

    exports.default = getOrphanPositions;
});
//# sourceMappingURL=getOrphanPositions.js.map
