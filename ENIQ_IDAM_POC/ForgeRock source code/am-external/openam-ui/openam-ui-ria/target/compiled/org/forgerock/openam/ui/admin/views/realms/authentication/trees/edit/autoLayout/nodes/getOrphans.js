define(["exports", "lodash"], function (exports, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  /**
   * Calculates orphaned nodes (nodes that are not directly connected to a tree).
   *
   * @param {Object} nodes collection of all nodes
   * @param {Array[]} columns array of columns
   * @returns {Object} object with node IDs as keys and the node as values
   */
  var getOrphans = function getOrphans(nodes, columns) {
    var nodeIDs = (0, _lodash.keys)(nodes);
    var columnIDs = (0, _lodash.map)(_lodash.union.apply(undefined, _toConsumableArray(columns)), function (node) {
      return (0, _lodash.findKey)(node);
    });
    var orphanIDs = (0, _lodash.difference)(nodeIDs, columnIDs);

    return _lodash.pick.apply(undefined, [nodes].concat(_toConsumableArray(orphanIDs)));
  };

  exports.default = getOrphans;
});
