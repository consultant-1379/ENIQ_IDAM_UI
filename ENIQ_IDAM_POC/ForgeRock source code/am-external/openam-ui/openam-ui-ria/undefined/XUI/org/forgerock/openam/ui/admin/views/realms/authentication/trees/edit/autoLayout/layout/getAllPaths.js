define(["exports", "lodash"], function (exports, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    /**
     * This function recursivly iterates through the node's outcomes sorted by their ids and returns all
     * possible paths for it sorted by their length. If there are loops that are connected to the starting node, they will
     * be returned as well.
     *
     * @param {Object} nodeId node id to inspect
     * @param {Object} nodes Object of all nodes, indexed by node ID
     * @param {Object[]} [path=[]] path to add the node to
     * @returns {Array[]} array of all possible paths
     */
    var getAllPaths = function getAllPaths(nodeId, nodes) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var allPathsForNode = [];

        if ((0, _lodash.find)(path, function (node) {
            return (0, _lodash.findKey)(node) === nodeId;
        })) {
            // if there is a loop detected
            allPathsForNode.push(path);
        } else {
            path.push(_defineProperty({}, nodeId, nodes[nodeId]));

            var nodeConnections = nodes[nodeId].connections;
            if ((0, _lodash.isEmpty)(nodeConnections)) {
                allPathsForNode.push(path);
            } else {
                (0, _lodash.forEach)((0, _lodash.keys)(nodeConnections).sort(), function (outcomeId) {
                    (0, _lodash.forEach)(getAllPaths(nodeConnections[outcomeId], nodes, (0, _lodash.clone)(path)), function (path) {
                        allPathsForNode.push(path);
                    });
                });
            }
        }

        return allPathsForNode.sort(function (path1, path2) {
            return path2.length - path1.length;
        });
    };

    exports.default = getAllPaths;
});
//# sourceMappingURL=getAllPaths.js.map
