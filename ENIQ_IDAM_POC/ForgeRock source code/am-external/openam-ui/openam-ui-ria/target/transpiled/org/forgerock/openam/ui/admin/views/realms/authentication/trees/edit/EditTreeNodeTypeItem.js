define(["exports", "react-dnd", "react-bootstrap", "classnames", "react", "./EditTreeDragItemTypes"], function (exports, _reactDnd, _reactBootstrap, _classnames, _react, _EditTreeDragItemTypes) {
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

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    var EditTreeNodeTypeItem = function EditTreeNodeTypeItem(_ref) {
        var displayName = _ref.displayName,
            isDragging = _ref.isDragging,
            connectDragSource = _ref.connectDragSource,
            restProps = _objectWithoutProperties(_ref, ["displayName", "isDragging", "connectDragSource"]);

        return connectDragSource(_react2.default.createElement(
            "div",
            _extends({
                className: (0, _classnames2.default)({
                    "edit-tree-type-item-selected": isDragging,
                    "authtree-content-left-item": true
                })
            }, restProps),
            _react2.default.createElement(
                _reactBootstrap.Panel,
                null,
                _react2.default.createElement(
                    "span",
                    { className: "fa-stack authtree-content-left-item-icon" },
                    _react2.default.createElement("i", { className: "fa fa-circle fa-stack-2x text-primary" }),
                    _react2.default.createElement("i", { className: "fa fa-user fa-stack-1x fa-inverse" })
                ),
                displayName
            )
        ));
    };

    EditTreeNodeTypeItem.propTypes = {
        connectDragSource: _react.PropTypes.func.isRequired,
        displayName: _react.PropTypes.string.isRequired,
        isDragging: _react.PropTypes.bool.isRequired,
        nodeType: _react.PropTypes.string.isRequired
    };

    var source = {
        beginDrag: function beginDrag(props) {
            return {
                displayName: props.displayName,
                nodeType: props.nodeType
            };
        }
    };

    var collect = function collect(connect, monitor) {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        };
    };

    exports.default = (0, _reactDnd.DragSource)(_EditTreeDragItemTypes.NODE_TYPE, source, collect)(EditTreeNodeTypeItem);
});
