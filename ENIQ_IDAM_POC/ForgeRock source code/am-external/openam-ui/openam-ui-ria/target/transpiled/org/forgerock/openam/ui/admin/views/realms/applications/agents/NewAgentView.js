define(["exports", "jquery", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/admin/services/realm/AgentsService", "org/forgerock/commons/ui/common/components/Messages"], function (exports, _jquery, _AbstractView2, _FlatJSONSchemaView, _AgentsService, _Messages) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _jquery2 = _interopRequireDefault(_jquery);

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _FlatJSONSchemaView2 = _interopRequireDefault(_FlatJSONSchemaView);

    var _Messages2 = _interopRequireDefault(_Messages);

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

    var NewAgentView = function (_AbstractView) {
        _inherits(NewAgentView, _AbstractView);

        function NewAgentView() {
            _classCallCheck(this, NewAgentView);

            var _this = _possibleConstructorReturn(this, (NewAgentView.__proto__ || Object.getPrototypeOf(NewAgentView)).call(this));

            _this.template = "templates/admin/views/realms/applications/agents/NewAgentTemplate.html";
            _this.partials = ["partials/alerts/_Alert.html"];
            _this.events = {
                "click [data-create]": "onCreateClick"
            };
            return _this;
        }

        _createClass(NewAgentView, [{
            key: "render",
            value: function render(_ref) {
                var _this2 = this;

                var _ref2 = _slicedToArray(_ref, 2),
                    realmPath = _ref2[0],
                    agentType = _ref2[1];

                (0, _AgentsService.getInitialState)(realmPath, agentType).then(function (response) {
                    var options = {
                        schema: response.schema,
                        values: response.values,
                        showOnlyRequiredAndEmpty: true
                    };

                    _this2.jsonSchemaView = new _FlatJSONSchemaView2.default(options);
                    _this2.type = agentType;
                    _this2.data.realmPath = realmPath;
                    _this2.data.title = _jquery2.default.t("console.applications.agents.new.title", { agentType: agentType });
                    _this2.parentRender(function () {
                        (0, _jquery2.default)(_this2.jsonSchemaView.render().el).appendTo(_this2.$el.find("[data-json-form]"));
                    });
                });
            }
        }, {
            key: "onCreateClick",
            value: function onCreateClick() {
                (0, _AgentsService.create)(this.data.realmPath, this.type, this.jsonSchemaView.getData()).then(function () {
                    // TODO - Edit Agent Views
                }, function (response) {
                    _Messages2.default.addMessage({
                        response: response,
                        type: _Messages2.default.TYPE_DANGER
                    });
                });
            }
        }]);

        return NewAgentView;
    }(_AbstractView3.default);

    exports.default = NewAgentView;
});
