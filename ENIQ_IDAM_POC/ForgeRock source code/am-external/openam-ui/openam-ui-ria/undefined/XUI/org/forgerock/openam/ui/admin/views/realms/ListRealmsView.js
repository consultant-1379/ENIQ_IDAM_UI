define(["exports", "lodash", "jquery", "org/forgerock/openam/ui/common/util/NavigationHelper", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/commons/ui/common/components/BootstrapDialog", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/openam/ui/admin/services/global/RealmsService", "org/forgerock/openam/ui/common/components/TemplateBasedView", "org/forgerock/openam/ui/admin/views/common/ToggleCardListView", "org/forgerock/openam/ui/admin/views/realms/updateDefaultServerAdvancedFqdnMap"], function (exports, _lodash, _jquery, _NavigationHelper, _AbstractView2, _BootstrapDialog, _Messages, _RealmsService, _TemplateBasedView, _ToggleCardListView, _updateDefaultServerAdvancedFqdnMap) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _lodash2 = _interopRequireDefault(_lodash);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _BootstrapDialog2 = _interopRequireDefault(_BootstrapDialog);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _RealmsService2 = _interopRequireDefault(_RealmsService);

    var _TemplateBasedView2 = _interopRequireDefault(_TemplateBasedView);

    var _ToggleCardListView2 = _interopRequireDefault(_ToggleCardListView);

    var _updateDefaultServerAdvancedFqdnMap2 = _interopRequireDefault(_updateDefaultServerAdvancedFqdnMap);

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

    var ListRealmsView = function (_AbstractView) {
        _inherits(ListRealmsView, _AbstractView);

        function ListRealmsView() {
            _classCallCheck(this, ListRealmsView);

            var _this = _possibleConstructorReturn(this, (ListRealmsView.__proto__ || Object.getPrototypeOf(ListRealmsView)).call(this));

            _this.template = "templates/admin/views/realms/ListRealmsTemplate.html";
            _this.events = {
                "click [data-delete-realm]": "deleteRealm",
                "click [data-toggle-realm]": "toggleRealmActive"
            };
            _this.partials = ["partials/util/_Status.html", "partials/util/_ButtonLink.html", "templates/admin/views/realms/_RealmCard.html"];
            return _this;
        }

        _createClass(ListRealmsView, [{
            key: "deleteRealm",
            value: function deleteRealm(event) {
                event.preventDefault();

                var self = this,
                    realm = this.getRealmFromEvent(event),
                    buttons = [{
                    label: _jquery2.default.t("common.form.cancel"),
                    action: function action(dialog) {
                        dialog.close();
                    }
                }, {
                    label: _jquery2.default.t("common.form.delete"),
                    cssClass: "btn-danger",
                    action: function action(dialog) {
                        self.performDeleteRealm(realm).always(function () {
                            dialog.close();
                        });
                    }
                }];

                if (realm.isTopLevelRealm) {
                    return false;
                }

                if (realm.active) {
                    buttons.splice(1, 0, {
                        label: _jquery2.default.t("common.form.deactivate"),
                        action: function action(dialog) {
                            realm.active = false;
                            _RealmsService2.default.realms.update(realm).then(null, function (response) {
                                _Messages2.default.addMessage({
                                    type: _Messages2.default.TYPE_DANGER,
                                    response: response
                                });
                            }).always(function () {
                                self.render();
                                dialog.close();
                            });
                        }
                    });
                }

                _BootstrapDialog2.default.show({
                    title: _jquery2.default.t("console.realms.warningDialog.title", { realmName: realm.name }),
                    type: _BootstrapDialog2.default.TYPE_DANGER,
                    message: realm.active ? _jquery2.default.t("console.realms.warningDialog.activateMessage") : _jquery2.default.t("console.realms.warningDialog.deactivateMessage"),
                    buttons: buttons
                });
            }
        }, {
            key: "getRealmFromEvent",
            value: function getRealmFromEvent(event) {
                var path = (0, _jquery2.default)(event.currentTarget).closest("div[data-realm-path]").data("realm-path"),
                    realm = _lodash2.default.find(this.data.realms, { path: path });
                return realm;
            }
        }, {
            key: "getRealmFromList",
            value: function getRealmFromList(path) {
                return _lodash2.default.find(this.data.realms, { path: path });
            }
        }, {
            key: "performDeleteRealm",
            value: function performDeleteRealm(realm) {
                var self = this;
                return _RealmsService2.default.realms.remove(realm.path).then(function () {
                    var dnsAliases = _lodash2.default.filter(realm.aliases, function (item) {
                        return item.indexOf(".") > -1;
                    });
                    (0, _updateDefaultServerAdvancedFqdnMap2.default)(realm.path, [], dnsAliases).then(function () {
                        return self.render();
                    }, function () {
                        self.render();
                        _Messages2.default.addMessage({ type: _Messages2.default.TYPE_DANGER, message: _jquery2.default.t("console.realms.edit.errors.fqdnMap") });
                    });
                }, function (response) {
                    if (response && response.status === 409) {
                        _Messages2.default.addMessage({
                            message: _jquery2.default.t("console.realms.parentRealmCannotDeleted"),
                            type: _Messages2.default.TYPE_DANGER
                        });
                    } else {
                        _Messages2.default.addMessage({ response: response, type: _Messages2.default.TYPE_DANGER });
                    }
                });
            }
        }, {
            key: "isTopLevelRealm",
            value: function isTopLevelRealm(name) {
                return name === "/";
            }
        }, {
            key: "render",
            value: function render(args, callback) {
                var _this2 = this;

                var self = this;

                _RealmsService2.default.realms.all().then(function (data) {
                    var result = _lodash2.default.find(data.result, { name: "/" });

                    if (result) {
                        result.name = _jquery2.default.t("console.common.topLevelRealm");
                    }
                    self.data.realms = data.result;
                    self.data.allRealmPaths = [];
                    (0, _NavigationHelper.populateRealmsDropdown)(data);

                    _lodash2.default.each(self.data.realms, function (realm) {
                        realm.isTopLevelRealm = self.isTopLevelRealm(realm.path);
                        self.data.allRealmPaths.push(realm.path);
                    });

                    self.parentRender(function () {
                        var tableData = {
                            "headers": [_jquery2.default.t("console.realms.grid.header.0"), _jquery2.default.t("console.realms.grid.header.1"), _jquery2.default.t("console.realms.grid.header.2"), _jquery2.default.t("console.realms.grid.header.3")],
                            "items": self.data.realms
                        };

                        _this2.toggleView = new _ToggleCardListView2.default({
                            el: "#toggleCardList",
                            activeView: _this2.toggleView ? _this2.toggleView.getActiveView() : _ToggleCardListView2.default.DEFAULT_VIEW,
                            button: {
                                btnClass: "btn-primary",
                                href: "#realms/new",
                                icon: "fa-plus",
                                title: _jquery2.default.t("console.realms.newRealm")
                            }
                        });

                        _this2.toggleView.render(function (toggleView) {
                            new _TemplateBasedView2.default({
                                data: tableData,
                                el: toggleView.getElementA(),
                                template: "templates/admin/views/realms/RealmsCardsTemplate.html",
                                callback: function callback() {
                                    _this2.$el.find('[data-toggle="popover"]').popover();
                                }
                            }).render();
                            new _TemplateBasedView2.default({
                                data: tableData,
                                el: toggleView.getElementB(),
                                template: "templates/admin/views/realms/RealmsTableTemplate.html"
                            }).render();
                        });

                        if (callback) {
                            callback();
                        }
                    });
                }, function (response) {
                    return _Messages2.default.addMessage({
                        type: _Messages2.default.TYPE_DANGER,
                        response: response
                    });
                });
            }
        }, {
            key: "toggleRealmActive",
            value: function toggleRealmActive(event) {
                event.preventDefault();
                var self = this,
                    realm = this.getRealmFromEvent(event);

                if (realm.isTopLevelRealm) {
                    return false;
                }
                realm.active = !realm.active;
                _RealmsService2.default.realms.update(realm).then(null, function (response) {
                    _Messages2.default.addMessage({
                        type: _Messages2.default.TYPE_DANGER,
                        response: response
                    });
                }).always(function () {
                    return self.render();
                });
            }
        }]);

        return ListRealmsView;
    }(_AbstractView3.default);

    exports.default = new ListRealmsView();
});
//# sourceMappingURL=ListRealmsView.js.map
