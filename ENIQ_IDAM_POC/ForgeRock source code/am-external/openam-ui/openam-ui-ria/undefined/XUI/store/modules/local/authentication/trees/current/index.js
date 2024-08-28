define(["exports", "lodash", "redux", "redux-actions", "./nodes/index", "./tree"], function (exports, _lodash, _redux, _reduxActions, _index, _tree) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.removeCurrentTree = exports.removeNode = undefined;
    exports.default = current;

    var _index2 = _interopRequireDefault(_index);

    var _tree2 = _interopRequireDefault(_tree);

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

    var REMOVE_NODE = "local/authentication/trees/current/REMOVE_NODE";
    var REMOVE_CURRENT_TREE = "local/authentication/trees/current/REMOVE_CURRENT_TREE";

    var removeNode = exports.removeNode = (0, _reduxActions.createAction)(REMOVE_NODE);
    var removeCurrentTree = exports.removeCurrentTree = (0, _reduxActions.createAction)(REMOVE_CURRENT_TREE);

    var subReducer = (0, _redux.combineReducers)({
        nodes: _index2.default,
        tree: _tree2.default
    });

    function current() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        switch (action.type) {
            case REMOVE_NODE:
                return {
                    nodes: _extends({}, state.nodes, {
                        measurements: (0, _lodash.omit)(state.nodes.measurements, [action.payload]),
                        properties: (0, _lodash.omit)(state.nodes.properties, [action.payload]),
                        selected: state.nodes.selected.id === action.payload ? {} : state.nodes.selected
                    }),
                    tree: (0, _lodash.mapValues)((0, _lodash.omit)(state.tree, [action.payload]), function (node) {
                        return _extends({}, node, {
                            connections: (0, _lodash.omit)(node.connections, function (toNode) {
                                return toNode === action.payload;
                            })
                        });
                    })
                };
            case REMOVE_CURRENT_TREE:
                return {
                    nodes: {
                        measurements: {},
                        properties: {},
                        selected: {}
                    },
                    tree: {}
                };
            default:
                return subReducer(state, action);
        }
    }
});
//# sourceMappingURL=index.js.map
