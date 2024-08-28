define(["exports", "lodash", "react-bootstrap-table", "react", "components/table/selection/RowSelection"], function (exports, _lodash, _reactBootstrapTable, _react, _RowSelection) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _RowSelection2 = _interopRequireDefault(_RowSelection);

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

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    var Table = function Table(_ref) {
        var idField = _ref.idField,
            onRowClick = _ref.onRowClick,
            onSelectedChange = _ref.onSelectedChange,
            selectedIds = _ref.selectedIds,
            tableRef = _ref.tableRef,
            restProps = _objectWithoutProperties(_ref, ["idField", "onRowClick", "onSelectedChange", "selectedIds", "tableRef"]);

        var handleSelect = function handleSelect(row, isSelected) {
            var id = row[idField];
            var selected = isSelected ? [].concat(_toConsumableArray(selectedIds), [id]) : (0, _lodash.without)(selectedIds, id);

            onSelectedChange(selected);
        };
        var handleSelectAll = function handleSelectAll(isSelected, rows) {
            return onSelectedChange(isSelected ? (0, _lodash.pluck)(rows, idField) : []);
        };

        return _react2.default.createElement(_reactBootstrapTable.BootstrapTable, _extends({
            options: {
                onRowClick: onRowClick,
                sortIndicator: false
            },
            ref: tableRef,
            selectRow: {
                bgColor: "#f7f7f7",
                className: "active",
                columnWidth: "50px",
                customComponent: _RowSelection2.default,
                mode: "checkbox",
                onSelect: handleSelect,
                onSelectAll: handleSelectAll,
                selected: selectedIds
            }
        }, restProps));
    };

    Table.defaultProps = {
        bordered: false,
        condensed: false,
        hover: true
    };

    Table.propTypes = {
        bordered: _react.PropTypes.bool,
        condensed: _react.PropTypes.bool,
        hover: _react.PropTypes.bool,
        idField: _react.PropTypes.string.isRequired,
        onRowClick: _react.PropTypes.func.isRequired,
        onSelectedChange: _react.PropTypes.func.isRequired,
        selectedIds: _react.PropTypes.arrayOf(_react.PropTypes.any).isRequired,
        tableRef: _react.PropTypes.func
    };

    exports.default = Table;
});
//# sourceMappingURL=Table.js.map
