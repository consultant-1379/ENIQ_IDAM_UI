define(["exports", "redux-actions", "lodash", "./nodes/static"], function (exports, _reduxActions, _lodash, _static) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setOutcomes = exports.removeConnection = exports.addOrUpdateConnection = exports.setNodes = exports.addOrUpdateNode = undefined;

    var _handleActions;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
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

    // Types
    var ADD_OR_UPDATE_NODE = "local/authentication/trees/current/tree/ADD_OR_UPDATE_NODE";
    var SET_NODES = "local/authentication/trees/current/tree/SET_NODES";

    var ADD_OR_UPDATE_CONNECTION = "local/authentication/trees/current/tree/ADD_OR_UPDATE_CONNECTION";
    var REMOVE_CONNECTION = "local/authentication/trees/current/tree/REMOVE_CONNECTION";

    var SET_OUTCOMES = "local/authentication/trees/current/tree/SET_OUTCOMES";

    // Actions
    var addOrUpdateNode = exports.addOrUpdateNode = (0, _reduxActions.createAction)(ADD_OR_UPDATE_NODE);
    var setNodes = exports.setNodes = (0, _reduxActions.createAction)(SET_NODES, function (payload) {
        return payload;
    }, function (payload, entryNodeId) {
        var addSucccessNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var addFailureNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        return {
            addSucccessNode: addSucccessNode,
            addFailureNode: addFailureNode,
            entryNodeId: entryNodeId
        };
    });

    var addOrUpdateConnection = exports.addOrUpdateConnection = (0, _reduxActions.createAction)(ADD_OR_UPDATE_CONNECTION, function (payload) {
        return payload;
    }, function (payload, nodeId) {
        return { nodeId: nodeId };
    });
    var removeConnection = exports.removeConnection = (0, _reduxActions.createAction)(REMOVE_CONNECTION, function (payload) {
        return payload;
    }, function (payload, nodeId) {
        return { nodeId: nodeId };
    });

    var setOutcomes = exports.setOutcomes = (0, _reduxActions.createAction)(SET_OUTCOMES, function (payload) {
        return payload;
    }, function (payload, nodeId) {
        return { nodeId: nodeId };
    });

    // Reducer
    var initialState = {};
    exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ADD_OR_UPDATE_NODE, function (state, action) {
        return _extends({}, state, action.payload);
    }), _defineProperty(_handleActions, SET_NODES, function (state, action) {
        var startNode = (0, _static.start)(action.meta.entryNodeId);

        var staticNodes = _extends({}, startNode);
        if (action.meta.addSucccessNode) {
            staticNodes = _extends({}, staticNodes, (0, _static.success)());
        }
        if (action.meta.addFailureNode) {
            staticNodes = _extends({}, staticNodes, (0, _static.failure)());
        }

        return _extends({}, action.payload, staticNodes);
    }), _defineProperty(_handleActions, ADD_OR_UPDATE_CONNECTION, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.meta.nodeId, _extends({}, state[action.meta.nodeId], {
            connections: _extends({}, state[action.meta.nodeId].connections, action.payload)
        })));
    }), _defineProperty(_handleActions, REMOVE_CONNECTION, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.meta.nodeId, _extends({}, state[action.meta.nodeId], {
            connections: (0, _lodash.omit)(state[action.meta.nodeId].connections, action.payload)
        })));
    }), _defineProperty(_handleActions, SET_OUTCOMES, function (state, action) {
        return _extends({}, state, _defineProperty({}, action.meta.nodeId, _extends({}, state[action.meta.nodeId], {
            _outcomes: action.payload
        })));
    }), _handleActions), initialState);
});
