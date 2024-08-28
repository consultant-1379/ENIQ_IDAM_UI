define(["exports", "lodash"], function (exports, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getNodeYPosition = exports.getNodeXPosition = exports.getColumnHeights = exports.HORIZONTAL_NODE_MARGIN = exports.VERTICAL_NODE_MARGIN = undefined;

  /**
   * The margins are used to space the nodes apart from one another and are
   * included within the widths and heights of the columns.
   **/
  var VERTICAL_NODE_MARGIN = exports.VERTICAL_NODE_MARGIN = 25; /*
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

  var HORIZONTAL_NODE_MARGIN = exports.HORIZONTAL_NODE_MARGIN = 50;

  /**
   * Given columns and heights of all nodes, this function returns an array of all column heights.
   *
   * @param {Array[]} columns array of columns
   * @param {Object} dimensions heights and widths of the nodes, indexed by node id
   * @returns {number[]} array of all column heights
   */
  var getColumnHeights = exports.getColumnHeights = function getColumnHeights(columns, dimensions) {
    return (0, _lodash.map)(columns, function (column) {
      return (0, _lodash.reduce)(column, function (result, node) {
        return result + dimensions[(0, _lodash.findKey)(node)].height + VERTICAL_NODE_MARGIN;
      }, VERTICAL_NODE_MARGIN);
    });
  };

  /**
   * Given columns and widths of all nodes, this function returns an array of all column widths.
   *
   * @param {Array[]} columns array of columns
   * @param {Object} dimensions heights and widths of the nodes, indexed by node id
   * @returns {number[]} array of all column widths
   */
  var getColumnMaxWidths = function getColumnMaxWidths(columns, dimensions) {
    return (0, _lodash.map)(columns, function (column) {
      return (0, _lodash.reduce)(column, function (result, node) {
        return dimensions[(0, _lodash.findKey)(node)].width + HORIZONTAL_NODE_MARGIN > result ? dimensions[(0, _lodash.findKey)(node)].width + HORIZONTAL_NODE_MARGIN : result;
      }, HORIZONTAL_NODE_MARGIN);
    });
  };

  /**
   * Given columns, column index and heights of all nodes, this function returns a top margin for the column
   * (Y position of the first node in the column).
   *
   * @param {Array[]} columns array of columns
   * @param {number} columnIndex column index
   * @param {Object} dimensions heights and widths of the nodes, indexed by node id
   * @returns {number[]} array of all column heights
   */
  var getColumnYPosition = function getColumnYPosition(columns, columnIndex, dimensions) {
    var columnHeights = getColumnHeights(columns, dimensions);
    return ((0, _lodash.max)(columnHeights) - columnHeights[columnIndex]) / 2;
  };

  /**
   * Given columns, column index, row index and widths of all nodes,
   * this function returns a X position for the given node.
   *
   * @param {Array[]} columns array of columns
   * @param {number} columnIndex column index
   * @param {Object} dimensions heights and widths of the nodes, indexed by node id
   * @returns {number} X position
   */
  var getNodeXPosition = exports.getNodeXPosition = function getNodeXPosition(columns, columnIndex, dimensions) {
    var columnsToLeft = columns.slice(0, columnIndex);
    var columnWidths = getColumnMaxWidths(columnsToLeft, dimensions);
    var totalWidthOfColumnsToLeft = (0, _lodash.reduce)(columnWidths, function (result, width) {
      return result + width;
    }, HORIZONTAL_NODE_MARGIN);
    return totalWidthOfColumnsToLeft;
  };

  /**
   * Given columns, column index, row index and heights of all nodes,
   * this function returns a Y position for the given node
   *
   * @param {Array[]} columns array of columns
   * @param {number} columnIndex column index
   * @param {number} rowIndex row index
   * @param {Object} dimensions heights and widths of the nodes, indexed by node id
   * @returns {number} Y position
   */
  var getNodeYPosition = exports.getNodeYPosition = function getNodeYPosition(columns, columnIndex, rowIndex, dimensions) {
    var allNodesInTheColumn = columns[columnIndex];
    var allNodesAbove = allNodesInTheColumn.slice(0, rowIndex);
    var heightOfTheNodesAbove = (0, _lodash.reduce)(allNodesAbove, function (result, node) {
      return result + dimensions[(0, _lodash.findKey)(node)].height + VERTICAL_NODE_MARGIN;
    }, VERTICAL_NODE_MARGIN);
    var columnY = getColumnYPosition(columns, columnIndex, dimensions);
    return columnY + heightOfTheNodesAbove;
  };
});
//# sourceMappingURL=stage.js.map
