define(["exports", "classnames", "react"], function (exports, _classnames, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classnames2 = _interopRequireDefault(_classnames);

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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
    var MIN_CONTROL_POINT_LENGTH = 50;
    var MAX_VERTICAL_DISTANCE = 150;

    var bezierCurve = function bezierCurve(_ref) {
        var start = _ref.start,
            startCp = _ref.startCp,
            center = _ref.center,
            endCp = _ref.endCp,
            end = _ref.end;

        var centerControlPoints = center ? center.x + " " + center.y + " , " + center.x + " " + center.y + " S" : "";
        var startControlPoints = "M" + start.x + " " + start.y + " C" + startCp.x + " " + startCp.y + ", ";
        var endControlPoints = endCp.x + " " + endCp.y + ", " + end.x + " " + end.y;

        return "" + startControlPoints + centerControlPoints + endControlPoints;
    };

    var calculateOffsetX = function calculateOffsetX(start, end) {
        var strength = 0.2;
        var minXLength = MIN_CONTROL_POINT_LENGTH;
        if (Math.abs(start.y - end.y) < MIN_CONTROL_POINT_LENGTH) {
            // reduce the minXLength if the nodes are very close together
            minXLength = Math.abs(start.y - end.y);
        }
        var offSetX = Math.abs((start.x - end.x) * strength);

        return offSetX < minXLength ? minXLength : offSetX;
    };

    var createFourPointBezierCurve = function createFourPointBezierCurve(start, end) {
        var clearance = (start.height + start.width) / 2 || 0;
        var offsetX = calculateOffsetX(start, end);
        var startCp = {
            x: start.x + offsetX,
            y: start.y + clearance
        };
        var endCp = {
            x: end.x - offsetX,
            y: end.y + MIN_CONTROL_POINT_LENGTH
        };

        return bezierCurve({ start: start, startCp: startCp, endCp: endCp, end: end });
    };

    var createSixPointBezierCurve = function createSixPointBezierCurve(start, end) {
        var offsetX = calculateOffsetX(start, end);
        var center = {
            x: start.x - (start.x - end.x) / 2,
            y: start.y - (start.y - end.y) / 2
        };
        var startCp = {
            x: start.x + offsetX,
            y: start.y
        };
        var endCp = {
            x: end.x - offsetX,
            y: end.y
        };

        return bezierCurve({ start: start, startCp: startCp, center: center, endCp: endCp, end: end });
    };

    var Connection = function Connection(_ref2) {
        var end = _ref2.end,
            isNew = _ref2.isNew,
            start = _ref2.start,
            isInputForSelectedNode = _ref2.isInputForSelectedNode,
            isOutputForSelectedNode = _ref2.isOutputForSelectedNode;

        var isWithinVerticalRange = Math.abs(start.y - end.y) < MAX_VERTICAL_DISTANCE;
        var isEndNodeBehindStartNode = end.x + start.width <= start.x;
        var pathString = isEndNodeBehindStartNode && isWithinVerticalRange ? createFourPointBezierCurve(start, end) : createSixPointBezierCurve(start, end);

        return _react2.default.createElement("path", {
            className: (0, _classnames2.default)({
                "authtree-connector": true,
                "authtree-connector-new": isNew,
                "authtree-connector-selected-node-input": isInputForSelectedNode,
                "authtree-connector-selected-node-output": isOutputForSelectedNode
            }),
            d: pathString,
            id: end.id ? "connection-" + start.id + "-" + end.id : "connection-" + start.id
        });
    };

    Connection.propTypes = {
        end: _react.PropTypes.shape({
            /**
             * end id not required as this connection might be being made (being dragged out),
             * where there is a start node but no end node yet.
             */
            id: _react.PropTypes.string,
            height: _react.PropTypes.number.isRequired,
            width: _react.PropTypes.number.isRequired,
            x: _react.PropTypes.number.isRequired,
            y: _react.PropTypes.number.isRequired
        }).isRequired,
        isInputForSelectedNode: _react.PropTypes.bool.isRequired,
        isNew: _react.PropTypes.bool.isRequired,
        isOutputForSelectedNode: _react.PropTypes.bool.isRequired,
        start: _react.PropTypes.shape({
            id: _react.PropTypes.string.isRequired,
            x: _react.PropTypes.number.isRequired,
            y: _react.PropTypes.number.isRequired
        }).isRequired
    };

    exports.default = Connection;
});
