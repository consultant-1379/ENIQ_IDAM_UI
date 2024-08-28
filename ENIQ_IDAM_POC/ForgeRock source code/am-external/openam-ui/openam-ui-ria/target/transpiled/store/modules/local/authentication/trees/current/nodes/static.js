define(["exports", "i18next"], function (exports, _i18next) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SUCCESS_NODE_TYPE = exports.SUCCESS_NODE_ID = exports.START_NODE_TYPE = exports.FAILURE_NODE_TYPE = exports.FAILURE_NODE_ID = undefined;
    exports.isStaticNodeType = isStaticNodeType;
    exports.failure = failure;
    exports.start = start;
    exports.success = success;

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

    var FAILURE_NODE_ID = exports.FAILURE_NODE_ID = "e301438c-0bd0-429c-ab0c-66126501069a";
    var FAILURE_NODE_TYPE = exports.FAILURE_NODE_TYPE = "failureNodeType";
    var START_NODE_TYPE = exports.START_NODE_TYPE = "startNodeType";
    var SUCCESS_NODE_ID = exports.SUCCESS_NODE_ID = "70e691a5-1e33-4ac3-a356-e7b6d60d92e0";
    var SUCCESS_NODE_TYPE = exports.SUCCESS_NODE_TYPE = "successNodeType";

    function isStaticNodeType(type) {
        return type === FAILURE_NODE_TYPE || type === SUCCESS_NODE_TYPE || type === START_NODE_TYPE;
    }

    function failure() {
        return _defineProperty({}, FAILURE_NODE_ID, {
            displayName: (0, _i18next.t)("console.authentication.trees.edit.nodes.failure.title"),
            connections: {},
            _outcomes: [],
            nodeType: FAILURE_NODE_TYPE
        });
    }

    function start(entryNodeId) {
        return {
            "startNode": {
                displayName: (0, _i18next.t)("console.authentication.trees.edit.nodes.start.title"),
                connections: {
                    outcome: entryNodeId
                },
                _outcomes: [{
                    id: "outcome",
                    displayName: "Outcome"
                }],
                nodeType: START_NODE_TYPE
            }
        };
    }

    function success() {
        return _defineProperty({}, SUCCESS_NODE_ID, {
            displayName: (0, _i18next.t)("console.authentication.trees.edit.nodes.success.title"),
            connections: {},
            _outcomes: [],
            nodeType: SUCCESS_NODE_TYPE
        });
    }
});
