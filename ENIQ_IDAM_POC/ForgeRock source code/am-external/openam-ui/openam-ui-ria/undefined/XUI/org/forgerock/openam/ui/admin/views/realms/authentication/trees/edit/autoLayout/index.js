define(["exports", "lodash", "./layout/getAllPaths", "./layout/getColumns", "./positions/getOrphanPositions", "./nodes/getOrphans", "./positions/getTreeNodePositions"], function (exports, _lodash, _getAllPaths, _getColumns, _getOrphanPositions, _getOrphans, _getTreeNodePositions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getAllPaths2 = _interopRequireDefault(_getAllPaths);

  var _getColumns2 = _interopRequireDefault(_getColumns);

  var _getOrphanPositions2 = _interopRequireDefault(_getOrphanPositions);

  var _getOrphans2 = _interopRequireDefault(_getOrphans);

  var _getTreeNodePositions2 = _interopRequireDefault(_getTreeNodePositions);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Given the entry node id, a collection of the nodes, and the dimensions of all the nodes, this function returns
   * the positions (x, y) for all the nodes - both connected nodes and orphans.
   * @example
   * autoLayout(entryNodeId, nodes, dimensions) =>
   * {
   *     "one": { "id": "one", "x": 25, "y": 125 },
   *     "two": { "id": "two", "x": 205, "y": 37.5 },
   *     "three": { "id": "three", "x": 205, "y": 237.5 },
   *     ...
   * }
   * @param {String} entryNodeId Entry node ID
   * @param {Object} nodes Object of all nodes, indexed by node ID
   * @param {Object} dimensions heights and widths of the nodes, indexed by node ID
   * @returns {Object} Object, indexed by node ID, with a value object of dimensions
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

  var autoLayout = function autoLayout(entryNodeId, nodes, dimensions) {
    var paths = (0, _getAllPaths2.default)(entryNodeId, nodes);
    var columns = (0, _getColumns2.default)(paths);
    var orphans = (0, _getOrphans2.default)(nodes, columns);

    var treeNodeMeasurements = (0, _getTreeNodePositions2.default)(columns, dimensions);
    var orphanMeasurements = (0, _getOrphanPositions2.default)(orphans, columns, dimensions);

    return (0, _lodash.indexBy)(treeNodeMeasurements.concat(orphanMeasurements), "id");
  };

  exports.default = autoLayout;
});
//# sourceMappingURL=index.js.map
