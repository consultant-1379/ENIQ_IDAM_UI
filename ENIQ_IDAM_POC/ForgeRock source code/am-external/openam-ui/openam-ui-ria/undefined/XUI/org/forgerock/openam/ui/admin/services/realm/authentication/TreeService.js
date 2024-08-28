define(["exports", "lodash", "org/forgerock/commons/ui/common/main/AbstractDelegate", "org/forgerock/commons/ui/common/util/Constants", "org/forgerock/openam/ui/common/services/fetchUrl", "org/forgerock/openam/ui/common/util/Promise"], function (exports, _lodash, _AbstractDelegate, _Constants, _fetchUrl, _Promise) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.create = create;
    exports.update = update;
    exports.get = get;
    exports.getAll = getAll;
    exports.getInitialState = getInitialState;
    exports.remove = remove;

    var _AbstractDelegate2 = _interopRequireDefault(_AbstractDelegate);

    var _Constants2 = _interopRequireDefault(_Constants);

    var _fetchUrl2 = _interopRequireDefault(_fetchUrl);

    var _Promise2 = _interopRequireDefault(_Promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

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

    var obj = new _AbstractDelegate2.default("" + _Constants2.default.host + _Constants2.default.context + "/json");
    var PATH = "/realm-config/authentication/authenticationtrees/trees";
    var HEADERS = { "Accept-API-Version": "protocol=2.0,resource=1.0" };

    function getCreateOrUpdatePayload(data) {
        var omitReadOnlyProperties = function omitReadOnlyProperties(obj) {
            return (0, _lodash.omit)(obj, function (prop, key) {
                return (0, _lodash.startsWith)(key, "_");
            });
        };
        return _extends({}, omitReadOnlyProperties(data), {
            nodes: (0, _lodash.mapValues)(data.nodes, function (node) {
                return omitReadOnlyProperties(node);
            })
        });
    }

    function create(realm, data, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + id, { realm: realm }),
            type: "PUT",
            headers: _extends({}, HEADERS, { "If-None-Match": "*" }),
            data: JSON.stringify(getCreateOrUpdatePayload(data)),
            // Prevent the default message for 412 to be shown. Instead print a custom message coming from the HTTP response
            errorsHandlers: { "incorrectRevisionError": { status: 412 } }
        });
    }

    function update(realm, data, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + id, { realm: realm }),
            type: "PUT",
            headers: HEADERS,
            data: JSON.stringify(getCreateOrUpdatePayload(data))
        });
    }

    function get(realm, id) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "/" + id + "?forUI=true", { realm: realm }),
            headers: HEADERS
        });
    }

    function getAll(realm) {
        return obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "?_action=getIds", { realm: realm }),
            headers: HEADERS,
            suppressSpinner: true,
            type: "POST"
        });
    }

    function getInitialState(realm) {
        var schemaPromise = obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "?_action=schema", { realm: realm }),
            headers: HEADERS,
            type: "POST"
        });

        var templatePromise = obj.serviceCall({
            url: (0, _fetchUrl2.default)(PATH + "?_action=template", { realm: realm }),
            headers: HEADERS,
            type: "POST"
        });

        return _Promise2.default.all([schemaPromise, templatePromise]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                schema = _ref2[0],
                template = _ref2[1];

            return { schema: schema, template: template };
        });
    }

    function remove(realm, ids) {
        var promises = (0, _lodash.map)(ids, function (id) {
            return obj.serviceCall({
                url: (0, _fetchUrl2.default)(PATH + "/" + id, { realm: realm }),
                headers: HEADERS,
                type: "DELETE"
            });
        });

        return _Promise2.default.all(promises);
    }
});
//# sourceMappingURL=TreeService.js.map
