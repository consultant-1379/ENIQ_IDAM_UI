define(["exports", "lodash", "jquery", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/common/views/jsonSchema/GroupedJSONSchemaView", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/services/realm/ServicesService", "org/forgerock/openam/ui/common/models/JSONValues", "bootstrap-tabdrop"], function (exports, _lodash, _jquery, _AbstractView2, _FlatJSONSchemaView, _GroupedJSONSchemaView, _Messages, _Router, _ServicesService, _JSONValues) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _FlatJSONSchemaView2 = _interopRequireDefault(_FlatJSONSchemaView);

    var _GroupedJSONSchemaView2 = _interopRequireDefault(_GroupedJSONSchemaView);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _Router2 = _interopRequireDefault(_Router);

    var _ServicesService2 = _interopRequireDefault(_ServicesService);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    function toggleCreate(el, enable) {
        el.find("[data-create]").prop("disabled", !enable);
    }

    var NewServiceView = function (_AbstractView) {
        _inherits(NewServiceView, _AbstractView);

        function NewServiceView() {
            _classCallCheck(this, NewServiceView);

            var _this = _possibleConstructorReturn(this, (NewServiceView.__proto__ || Object.getPrototypeOf(NewServiceView)).call(this));

            _this.template = "templates/admin/views/realms/services/NewServiceTemplate.html";
            _this.partials = ["partials/alerts/_Alert.html"];
            _this.events = {
                "click [data-create]": "onCreateClick",
                "change [data-service-selection]": "onSelectService"
            };
            return _this;
        }

        _createClass(NewServiceView, [{
            key: "render",
            value: function render(args, callback) {
                var _this2 = this;

                this.data.realmPath = args[0];

                _ServicesService2.default.type.getCreatables(this.data.realmPath).then(function (creatableTypes) {
                    _this2.data.creatableTypes = creatableTypes;

                    _this2.parentRender(function () {
                        if (_this2.data.creatableTypes.length > 1) {
                            var serviceSelection = _this2.$el.find("[data-service-selection]");
                            serviceSelection.selectize({
                                onInitialize: function onInitialize() {
                                    this.$control_input.attr("id", "serviceSelection");
                                }
                            });
                        } else if (_this2.data.creatableTypes[0] && _this2.data.creatableTypes[0]._id) {
                            _this2.selectService(_this2.data.creatableTypes[0]._id);
                        }
                        if (callback) {
                            callback();
                        }
                    });
                });
            }
        }, {
            key: "onSelectService",
            value: function onSelectService(event) {
                this.selectService(event.target.value);
            }
        }, {
            key: "selectService",
            value: function selectService(service) {
                var _this3 = this;

                toggleCreate(this.$el, false);

                if (service !== this.data.type && this.jsonSchemaView) {
                    this.jsonSchemaView.remove();
                    delete this.schema;
                }

                if (!_lodash2.default.isEmpty(service)) {
                    this.data.type = service;

                    _ServicesService2.default.instance.getInitialState(this.data.realmPath, this.data.type).then(function (response) {
                        _this3.schema = response.schema;
                        var options = {
                            schema: _this3.schema,
                            values: response.values,
                            showOnlyRequiredAndEmpty: true,
                            onRendered: function onRendered() {
                                return toggleCreate(_this3.$el, true);
                            }
                        };

                        if (_this3.schema.isCollection()) {
                            _this3.jsonSchemaView = new _GroupedJSONSchemaView2.default(options);
                        } else {
                            _this3.jsonSchemaView = new _FlatJSONSchemaView2.default(options);
                        }

                        (0, _jquery2.default)(_this3.jsonSchemaView.render().el).appendTo(_this3.$el.find("[data-json-form]"));
                    }, function () {
                        toggleCreate(_this3.$el, false);
                    });
                }
            }
        }, {
            key: "onCreateClick",
            value: function onCreateClick() {
                var _this4 = this;

                var values = new _JSONValues2.default(this.jsonSchemaView.getData());
                var valuesWithoutNullPasswords = values.removeNullPasswords(this.schema);

                _ServicesService2.default.instance.create(this.data.realmPath, this.data.type, valuesWithoutNullPasswords.raw).then(function () {
                    _Router2.default.routeTo(_Router2.default.configuration.routes.realmsServiceEdit, {
                        args: _lodash2.default.map([_this4.data.realmPath, _this4.data.type], encodeURIComponent),
                        trigger: true
                    });
                }, function (response) {
                    _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }]);

        return NewServiceView;
    }(_AbstractView3.default);

    exports.default = NewServiceView;
});
