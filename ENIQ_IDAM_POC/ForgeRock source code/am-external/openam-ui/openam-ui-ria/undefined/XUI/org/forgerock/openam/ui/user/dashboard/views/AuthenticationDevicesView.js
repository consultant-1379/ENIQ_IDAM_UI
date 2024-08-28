define(["exports", "jquery", "lodash", "org/forgerock/openam/ui/user/dashboard/services/DeviceManagementService", "org/forgerock/openam/ui/user/dashboard/services/PushDeviceService", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/user/dashboard/views/DeviceDetailsDialog", "org/forgerock/openam/ui/user/dashboard/views/DevicesSettingsDialog", "org/forgerock/commons/ui/common/components/Messages", "org/forgerock/openam/ui/common/util/Promise"], function (exports, _jquery, _lodash, _DeviceManagementService, _PushDeviceService, _AbstractView2, _DeviceDetailsDialog, _DevicesSettingsDialog, _Messages, _Promise) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _jquery2 = _interopRequireDefault(_jquery);

    var _lodash2 = _interopRequireDefault(_lodash);

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _DeviceDetailsDialog2 = _interopRequireDefault(_DeviceDetailsDialog);

    var _DevicesSettingsDialog2 = _interopRequireDefault(_DevicesSettingsDialog);

    var _Messages2 = _interopRequireDefault(_Messages);

    var _Promise2 = _interopRequireDefault(_Promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
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

    var getAttributeFromElement = function getAttributeFromElement(element, attribute) {
        return (0, _jquery2.default)(element).closest("div[" + attribute + "]").attr(attribute);
    };
    var getUUIDFromElement = function getUUIDFromElement(element) {
        return getAttributeFromElement(element, "data-device-uuid");
    };
    var getTypeFromElement = function getTypeFromElement(element) {
        return getAttributeFromElement(element, "data-device-type");
    };
    var handleReject = function handleReject(response) {
        _Messages2.default.addMessage({
            type: _Messages2.default.TYPE_DANGER,
            response: response
        });
    };

    var DeviceManagementView = function (_AbstractView) {
        _inherits(DeviceManagementView, _AbstractView);

        function DeviceManagementView() {
            _classCallCheck(this, DeviceManagementView);

            var _this = _possibleConstructorReturn(this, (DeviceManagementView.__proto__ || Object.getPrototypeOf(DeviceManagementView)).call(this));

            _this.template = "templates/user/dashboard/AuthenticationDevicesTemplate.html";
            _this.noBaseTemplate = true;
            _this.element = "#authenticationDevices";
            _this.events = {
                "click [data-delete]": "handleDelete",
                "click [data-recovery-codes]": "handleShowDeviceDetails",
                "click [data-details]": "handleShowDeviceDetails",
                "click [data-settings]": "showDevicesSettings"
            };
            return _this;
        }

        _createClass(DeviceManagementView, [{
            key: "handleDelete",
            value: function handleDelete(event) {
                var _this2 = this;

                event.preventDefault();

                var uuid = getUUIDFromElement(event.currentTarget);
                var type = getTypeFromElement(event.currentTarget);
                var deleteFunc = type === "oath" ? _DeviceManagementService.remove : _PushDeviceService.remove;

                deleteFunc(uuid).then(function () {
                    _this2.render();
                }, handleReject);
            }
        }, {
            key: "handleShowDeviceDetails",
            value: function handleShowDeviceDetails(event) {
                event.preventDefault();

                var uuid = getUUIDFromElement(event.currentTarget);
                var device = _lodash2.default.find(this.data.devices, { uuid: uuid });

                (0, _DeviceDetailsDialog2.default)(uuid, device);
            }
        }, {
            key: "showDevicesSettings",
            value: function showDevicesSettings(event) {
                event.preventDefault();

                (0, _DevicesSettingsDialog2.default)();
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                _Promise2.default.all([(0, _DeviceManagementService.getAll)(), (0, _PushDeviceService.getAll)()]).then(function (value) {
                    var oathDevices = _lodash2.default.map(value[0], _lodash2.default.partial(_lodash2.default.merge, { type: "oath", icon: "clock-o" }));
                    var pushDevices = _lodash2.default.map(value[1], _lodash2.default.partial(_lodash2.default.merge, { type: "push", icon: "bell-o" }));

                    _this3.data.devices = [].concat(_toConsumableArray(oathDevices), _toConsumableArray(pushDevices));

                    _this3.parentRender();
                }, handleReject);
            }
        }]);

        return DeviceManagementView;
    }(_AbstractView3.default);

    exports.default = new DeviceManagementView();
});
//# sourceMappingURL=AuthenticationDevicesView.js.map
