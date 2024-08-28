define(["exports", "lodash", "jquery", "org/forgerock/openam/ui/admin/services/global/ServersService"], function (exports, _lodash, _jquery, _ServersService) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _ServersService2 = _interopRequireDefault(_ServersService);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    var getKey = function getKey(alias) {
        return "com.sun.identity.server.fqdnMap[" + alias + "]";
    };

    var updateDefaultServerAdvancedFqdnMap = function updateDefaultServerAdvancedFqdnMap(realm, currentDnsAliases, originalDnsAliases) {
        var createFqdnMapKeys = function createFqdnMapKeys(aliases) {
            return _lodash2.default.map(aliases, function (alias) {
                return getKey(alias);
            });
        };

        var newDnsAliases = _lodash2.default.difference(currentDnsAliases, originalDnsAliases);
        var fqdnMapKeysToAdd = createFqdnMapKeys(newDnsAliases);
        var fqdnMapKeysToRemove = createFqdnMapKeys(_lodash2.default.difference(originalDnsAliases, currentDnsAliases));
        var deferred = _jquery2.default.Deferred();

        _ServersService2.default.servers.get(_ServersService2.default.servers.DEFAULT_SERVER, _ServersService2.default.servers.ADVANCED_SECTION).then(function (data) {
            var valuesWithoutRemovedKeys = _lodash2.default.removeByValues(data.values.raw, "key", [].concat(_toConsumableArray(fqdnMapKeysToRemove), _toConsumableArray(fqdnMapKeysToAdd)));

            var newValues = _lodash2.default.map(newDnsAliases, function (value) {
                var key = getKey(value);
                return { key: key, value: value };
            });

            _ServersService2.default.servers.update(_ServersService2.default.servers.ADVANCED_SECTION, _defineProperty({}, _ServersService2.default.servers.ADVANCED_SECTION, valuesWithoutRemovedKeys.concat(newValues)), _ServersService2.default.servers.DEFAULT_SERVER).then(deferred.resolve, deferred.reject);
        }, deferred.reject);

        return deferred;
    };

    exports.default = updateDefaultServerAdvancedFqdnMap;
});
