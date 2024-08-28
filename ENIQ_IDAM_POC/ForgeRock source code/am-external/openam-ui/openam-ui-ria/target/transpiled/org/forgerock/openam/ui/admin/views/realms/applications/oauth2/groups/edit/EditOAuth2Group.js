define(["exports", "org/forgerock/openam/ui/admin/services/realm/AgentGroupsService", "org/forgerock/openam/ui/admin/services/realm/AgentTypes", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/admin/views/common/schema/EditSchemaComponent", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/commons/ui/common/main/Router"], function (exports, _AgentGroupsService, _AgentTypes, _AbstractView2, _EditSchemaComponent, _JSONSchema, _JSONValues, _Promise, _Router) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _EditSchemaComponent2 = _interopRequireDefault(_EditSchemaComponent);

    var _JSONSchema2 = _interopRequireDefault(_JSONSchema);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    var _Promise2 = _interopRequireDefault(_Promise);

    var _Router2 = _interopRequireDefault(_Router);

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

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var EditOAuth2Group = function (_AbstractView) {
        _inherits(EditOAuth2Group, _AbstractView);

        function EditOAuth2Group() {
            _classCallCheck(this, EditOAuth2Group);

            return _possibleConstructorReturn(this, (EditOAuth2Group.__proto__ || Object.getPrototypeOf(EditOAuth2Group)).apply(this, arguments));
        }

        _createClass(EditOAuth2Group, [{
            key: "render",
            value: function render(_ref) {
                var _this2 = this;

                var _ref2 = _slicedToArray(_ref, 2),
                    realm = _ref2[0],
                    id = _ref2[1];

                var editComponent = new _EditSchemaComponent2.default({
                    data: {
                        id: id,
                        headerActions: [{ actionPartial: "form/_Button", data: "delete", title: "common.form.delete", icon: "fa-times" }]
                    },
                    listRoute: _Router2.default.configuration.routes.realmsApplicationsOAuth2,
                    listRouteArgs: [encodeURIComponent(realm)],
                    template: "templates/admin/views/realms/applications/oauth2/groups/edit/EditOAuth2GroupTemplate.html",

                    getInstance: function getInstance() {
                        return _Promise2.default.all([(0, _AgentGroupsService.getSchema)(realm, _AgentTypes.OAUTH2_CLIENT), (0, _AgentGroupsService.get)(realm, _AgentTypes.OAUTH2_CLIENT, id)]).then(function (_ref3) {
                            var _ref4 = _slicedToArray(_ref3, 2),
                                schema = _ref4[0],
                                values = _ref4[1];

                            return {
                                schema: new _JSONSchema2.default(schema[0]),
                                values: new _JSONValues2.default(values[0])
                            };
                        });
                    },
                    updateInstance: function updateInstance(values) {
                        return (0, _AgentGroupsService.update)(realm, _AgentTypes.OAUTH2_CLIENT, JSON.parse(values), id);
                    },
                    deleteInstance: function deleteInstance() {
                        return (0, _AgentGroupsService.remove)(realm, _AgentTypes.OAUTH2_CLIENT, [id]);
                    }
                });

                this.parentRender(function () {
                    _this2.$el.append(editComponent.render().$el);
                });
            }
        }]);

        return EditOAuth2Group;
    }(_AbstractView3.default);

    exports.default = EditOAuth2Group;
});
