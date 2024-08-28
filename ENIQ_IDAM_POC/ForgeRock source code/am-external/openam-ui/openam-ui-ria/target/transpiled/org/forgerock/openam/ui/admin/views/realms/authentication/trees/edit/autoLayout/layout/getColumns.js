define(["exports", "lodash", "./getCompactedPaths"], function (exports, _lodash, _getCompactedPaths) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getCompactedPaths2 = _interopRequireDefault(_getCompactedPaths);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
   * Takes an array of all possible paths, removes all repeating nodes and organizes them in columns.
   *
   * @param {Array[]} paths array of all possible paths
   * @returns {Array[]} array of columns
   */
  var getColumns = function getColumns(paths) {
    var compactedPaths = (0, _getCompactedPaths2.default)(paths);

    return (0, _lodash.map)(_lodash.zip.apply(undefined, _toConsumableArray(compactedPaths)), function (column) {
      return (0, _lodash.compact)(column);
    });
  };

  exports.default = getColumns;
});
