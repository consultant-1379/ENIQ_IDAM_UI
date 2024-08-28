define(["exports", "lodash", "i18next", "jquery", "org/forgerock/openam/ui/admin/services/realm/AgentsService", "org/forgerock/openam/ui/admin/services/realm/AgentGroupsService", "org/forgerock/openam/ui/admin/services/realm/AgentTypes", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/common/views/jsonSchema/FlatJSONSchemaView", "org/forgerock/openam/ui/admin/utils/FormHelper", "org/forgerock/openam/ui/common/models/JSONSchema", "org/forgerock/openam/ui/common/models/JSONValues", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/openam/ui/common/components/PartialBasedView", "org/forgerock/openam/ui/common/util/Promise", "org/forgerock/commons/ui/common/main/Router", "org/forgerock/openam/ui/admin/utils/form/setFocusToFoundInput", "org/forgerock/openam/ui/common/components/TabComponent", "org/forgerock/openam/ui/admin/views/common/TabSearch"], function (exports, _lodash, _i18next, _jquery, _AgentsService, _AgentGroupsService, _AgentTypes, _AbstractView2, _FlatJSONSchemaView, _FormHelper, _JSONSchema, _JSONValues, _Messages, _PartialBasedView, _Promise, _Router, _setFocusToFoundInput, _TabComponent, _TabSearch) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _jquery2 = _interopRequireDefault(_jquery);

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _FlatJSONSchemaView2 = _interopRequireDefault(_FlatJSONSchemaView);

    var _FormHelper2 = _interopRequireDefault(_FormHelper);

    var _JSONSchema2 = _interopRequireDefault(_JSONSchema);

    var _JSONValues2 = _interopRequireDefault(_JSONValues);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _PartialBasedView2 = _interopRequireDefault(_PartialBasedView);

    var _Promise2 = _interopRequireDefault(_Promise);

    var _Router2 = _interopRequireDefault(_Router);

    var _setFocusToFoundInput2 = _interopRequireDefault(_setFocusToFoundInput);

    var _TabComponent2 = _interopRequireDefault(_TabComponent);

    var _TabSearch2 = _interopRequireDefault(_TabSearch);

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

    var createTabs = function createTabs(schema) {
        return (0, _lodash.chain)(schema.raw.properties).map(function (value, key) {
            return { id: key, order: value.propertyOrder, title: value.title };
        }).sortBy("order").value();
    };

    var addGroupSelectionToSchema = function addGroupSelectionToSchema(schema, groups) {
        var AGENT_GROUP_PATH = "properties.coreOAuth2ClientConfig.properties.agentgroup";
        var agentgroupProperty = (0, _lodash.get)(schema, "[0]." + AGENT_GROUP_PATH);

        if (agentgroupProperty) {
            var responseIDs = (0, _lodash.pluck)(groups[0].result, "_id");
            var availableGroupsIDs = [""].concat(_toConsumableArray(responseIDs));
            var availableGroupsTitles = [(0, _i18next.t)("console.applications.oauth2.clients.edit.unassigned")].concat(_toConsumableArray(responseIDs));

            // The non spec `additional` property has been added to the schema here to allow for additional properties to
            // be passed down to the JSONEditorTheme. In this case we render the descriptions with the `alert-info` property
            // as info alerts
            agentgroupProperty.additional = {
                alert: "alert-info"
            };
            agentgroupProperty.enum = availableGroupsIDs;
            agentgroupProperty.options = {
                "enum_titles": availableGroupsTitles
            };
        } else {
            console.error("[EditOAuth2Client] Unable to add available OAuth 2.0 Groups to " + "\"coreOAuth2ClientConfig.properties.agentgroup\" property.");
        }
    };

    var EditOAuth2Client = function (_AbstractView) {
        _inherits(EditOAuth2Client, _AbstractView);

        function EditOAuth2Client() {
            _classCallCheck(this, EditOAuth2Client);

            var _this = _possibleConstructorReturn(this, (EditOAuth2Client.__proto__ || Object.getPrototypeOf(EditOAuth2Client)).call(this));

            _this.template = "templates/admin/views/realms/applications/oauth2/clients/edit/EditOAuth2ClientTemplate.html";
            _this.events = {
                "click [data-delete]": "onDelete",
                "click [data-inherit-value]": "toggleInheritance",
                "click [data-save]": "onSave"
            };
            return _this;
        }

        _createClass(EditOAuth2Client, [{
            key: "getJSONSchemaView",
            value: function getJSONSchemaView() {
                return this.subview.getBody();
            }
        }, {
            key: "getGroupValues",
            value: function getGroupValues(id, realm) {
                return id ? (0, _AgentGroupsService.get)(realm, _AgentTypes.OAUTH2_CLIENT, id) : _jquery2.default.Deferred().resolve({});
            }
        }, {
            key: "render",
            value: function render(_ref) {
                var _this2 = this;

                var _ref2 = _slicedToArray(_ref, 2),
                    realm = _ref2[0],
                    id = _ref2[1];

                this.data = {
                    id: id,
                    headerActions: [{ actionPartial: "form/_Button", data: "delete", title: "common.form.delete", icon: "fa-times" }]
                };
                this.realm = realm;

                _Promise2.default.all([(0, _AgentsService.getSchema)(realm, _AgentTypes.OAUTH2_CLIENT), (0, _AgentsService.get)(realm, _AgentTypes.OAUTH2_CLIENT, id), (0, _AgentGroupsService.getAll)(realm, _AgentTypes.OAUTH2_CLIENT)]).then(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 3),
                        schema = _ref4[0],
                        values = _ref4[1],
                        groups = _ref4[2];

                    addGroupSelectionToSchema(schema, groups);

                    _this2.schema = new _JSONSchema2.default(schema[0]);
                    _this2.values = new _JSONValues2.default(values[0]);

                    var onGroupIdChange = function onGroupIdChange() {
                        var hasInheritance = function hasInheritance(schema, key) {
                            var schemaKey = key.replace(".", ".properties.");
                            var schemaValue = (0, _lodash.get)(schema.raw.properties, schemaKey);
                            return schema.hasInheritance(schemaValue);
                        };
                        var renderJSONSchemaView = function renderJSONSchemaView(agentgroup, data) {
                            var jsonSchemaView = _this2.getJSONSchemaView();
                            jsonSchemaView.options.hideInheritance = !agentgroup;
                            jsonSchemaView.setData(data);
                            jsonSchemaView.render();
                        };
                        var jsonSchemaView = _this2.getJSONSchemaView();
                        var selectedAgentgroup = (0, _jquery2.default)("[name='root[agentgroup]']", jsonSchemaView.subview.jsonEditor.element).val();
                        var currentAgentgroup = _this2.values.raw.coreOAuth2ClientConfig.agentgroup;

                        if (selectedAgentgroup) {
                            if (selectedAgentgroup === currentAgentgroup) {
                                renderJSONSchemaView(selectedAgentgroup);
                            } else {
                                _this2.getGroupValues(selectedAgentgroup, realm).then(function (groupValues) {
                                    // Update defaults so the correct values are inserted when a user clicks an inherited button
                                    _this2.defaultValues = new _JSONValues2.default(groupValues);

                                    // Update this.values so inherited values across tabs are updated
                                    _this2.values = _this2.values.mapProperties(function (value, key) {
                                        if (hasInheritance(_this2.schema, key)) {
                                            var newValue = (0, _lodash.get)(value, "inherited") ? (0, _lodash.get)(groupValues, key) : value.value;
                                            return {
                                                inherited: value.inherited,
                                                value: newValue
                                            };
                                        } else {
                                            return value;
                                        }
                                    });
                                    _this2.values.raw.coreOAuth2ClientConfig.agentgroup = selectedAgentgroup;

                                    /**
                                     * The group has changed so the user is on the tab where group selection takes place.
                                     * Thus we need to update the data contained within the editor as well.
                                     */
                                    renderJSONSchemaView(selectedAgentgroup, _this2.values.raw[_this2.getSection()]);
                                });
                            }
                        } else {
                            _this2.values = _this2.values.mapProperties(function (value, key) {
                                return hasInheritance(_this2.schema, key) ? { inherited: false, value: value.value } : value;
                            });
                            _this2.values.raw.coreOAuth2ClientConfig.agentgroup = selectedAgentgroup;
                            renderJSONSchemaView(selectedAgentgroup, _this2.values.raw[_this2.getSection()]);
                        }
                    };

                    var groupId = (0, _lodash.get)(_this2.values.raw, "coreOAuth2ClientConfig.agentgroup");
                    _this2.getGroupValues(groupId, realm).then(function (groupValues) {
                        _this2.defaultValues = new _JSONValues2.default(groupValues);

                        _this2.parentRender(function () {
                            var tabs = createTabs(_this2.schema);
                            _this2.subview = new _TabComponent2.default({
                                tabs: tabs,
                                createBody: function createBody(id) {
                                    // No inheritance informaton should be displayed when a client does not belong to a group
                                    var agentgroupValue = (0, _lodash.get)(_this2.values.raw, "coreOAuth2ClientConfig.agentgroup");
                                    var view = new _FlatJSONSchemaView2.default({
                                        hideInheritance: (0, _lodash.isEmpty)(agentgroupValue),
                                        schema: new _JSONSchema2.default(_this2.schema.raw.properties[id]),
                                        values: new _JSONValues2.default((0, _lodash.cloneDeep)(_this2.values.raw)[id]),
                                        onRendered: function onRendered() {
                                            view.watch("root.agentgroup", onGroupIdChange);
                                        }
                                    });
                                    return view;
                                },
                                createFooter: function createFooter() {
                                    return new _PartialBasedView2.default({ partial: "form/_JSONSchemaFooter" });
                                }
                            });
                            var options = {
                                properties: _this2.schema.raw.properties,
                                onChange: function onChange(id, value) {
                                    _this2.subview.setTabId(id);
                                    (0, _setFocusToFoundInput2.default)(_this2.$el.find("[data-schemapath=\"root." + value + "\"]"));
                                }
                            };
                            _this2.$el.find("[data-tab-search]").append(new _TabSearch2.default(options).render().$el);

                            _this2.subview.setElement("[data-json-form]");
                            _this2.subview.render();
                        });
                    });
                });
            }
        }, {
            key: "getSection",
            value: function getSection() {
                return this.subview.getTabId();
            }
        }, {
            key: "updateValues",
            value: function updateValues() {
                this.values = this.values.extend(_defineProperty({}, this.getSection(), this.getJSONSchemaView().getData()));
            }
        }, {
            key: "onSave",
            value: function onSave() {
                if (!this.getJSONSchemaView().isValid()) {
                    _Messages2.default.addMessage({
                        message: (0, _i18next.t)("common.form.validation.errorsNotSaved"), type: _Messages2.default.TYPE_DANGER
                    });
                    return;
                }

                this.updateValues();

                var valuesWithoutNullPasswords = this.values.removeNullPasswords(this.schema);

                (0, _AgentsService.update)(this.realm, _AgentTypes.OAUTH2_CLIENT, valuesWithoutNullPasswords.raw, this.data.id).then(function () {
                    _Messages2.default.addMessage({ message: (0, _i18next.t)("config.messages.AppMessages.changesSaved") });
                }, function (response) {
                    _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                });
            }
        }, {
            key: "toggleInheritance",
            value: function toggleInheritance(event) {
                var target = event.currentTarget;
                var removeJSONSchemaRootPrefix = function removeJSONSchemaRootPrefix(key) {
                    return key.slice(5);
                };
                var propertySchemaPath = removeJSONSchemaRootPrefix(target.getAttribute("data-schemapath"));
                var nextInheritedValue = !(target.getAttribute("data-inherit-value") === "true");
                var nextPropValue = nextInheritedValue ? this.defaultValues.raw[this.getSection()][propertySchemaPath] : this.values.raw[this.getSection()][propertySchemaPath].value;

                this.getJSONSchemaView().subview.toggleInheritance(propertySchemaPath, nextPropValue, nextInheritedValue);
                this.values = this.values.addValueForKey(this.getSection(), propertySchemaPath, {
                    inherited: nextInheritedValue,
                    value: nextPropValue
                });
            }
        }, {
            key: "onDelete",
            value: function onDelete(event) {
                var _this3 = this;

                event.preventDefault();

                _FormHelper2.default.showConfirmationBeforeDeleting({
                    message: (0, _i18next.t)("console.common.confirmDeleteSelected")
                }, function () {
                    (0, _AgentsService.remove)(_this3.realm, _AgentTypes.OAUTH2_CLIENT, [_this3.data.id]).then(function () {
                        _Messages2.default.addMessage({ message: (0, _i18next.t)("config.messages.AppMessages.changesSaved") });

                        _Router2.default.routeTo(_Router2.default.configuration.routes.realmsApplicationsOAuth2, {
                            args: [encodeURIComponent(_this3.realm)], trigger: true
                        });
                    }, function (model, response) {
                        _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                    });
                });
            }
        }]);

        return EditOAuth2Client;
    }(_AbstractView3.default);

    exports.default = EditOAuth2Client;
});
