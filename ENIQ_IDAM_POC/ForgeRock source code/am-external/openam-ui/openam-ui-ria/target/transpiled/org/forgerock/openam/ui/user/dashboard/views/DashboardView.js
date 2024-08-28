define(["exports", "org/forgerock/commons/ui/common/main/AbstractView", "org/forgerock/openam/ui/user/dashboard/views/AuthenticationDevicesView", "org/forgerock/openam/ui/user/dashboard/views/MyApplicationsView", "org/forgerock/openam/ui/user/dashboard/views/OAuthTokensView", "org/forgerock/openam/ui/user/dashboard/views/TrustedDevicesView"], function (exports, _AbstractView2, _AuthenticationDevicesView, _MyApplicationsView, _OAuthTokensView, _TrustedDevicesView) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _AbstractView3 = _interopRequireDefault(_AbstractView2);

    var _AuthenticationDevicesView2 = _interopRequireDefault(_AuthenticationDevicesView);

    var _MyApplicationsView2 = _interopRequireDefault(_MyApplicationsView);

    var _OAuthTokensView2 = _interopRequireDefault(_OAuthTokensView);

    var _TrustedDevicesView2 = _interopRequireDefault(_TrustedDevicesView);

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

    var Dashboard = function (_AbstractView) {
        _inherits(Dashboard, _AbstractView);

        function Dashboard() {
            _classCallCheck(this, Dashboard);

            var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

            _this.template = "templates/user/dashboard/DashboardTemplate.html";
            return _this;
        }

        _createClass(Dashboard, [{
            key: "render",
            value: function render() {
                this.parentRender(function () {
                    _MyApplicationsView2.default.render();
                    _TrustedDevicesView2.default.render();
                    _OAuthTokensView2.default.render();
                    _AuthenticationDevicesView2.default.render();
                });
            }
        }]);

        return Dashboard;
    }(_AbstractView3.default);

    exports.default = new Dashboard();
});
