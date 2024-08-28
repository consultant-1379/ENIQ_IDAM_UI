define(["exports", "jquery", "org/forgerock/commons/ui/common/util/UIUtils", "backbone", "lodash", "selectize"], function (exports, _jquery, _UIUtils, _backbone, _lodash) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _jquery2 = _interopRequireDefault(_jquery);

    var _UIUtils2 = _interopRequireDefault(_UIUtils);

    var _lodash2 = _interopRequireDefault(_lodash);

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

    var SELECTIZE_VALUE_KEY = "__selectize_key";
    var TEMPLATE_PATH = "templates/common/components/SelectComponent.html";

    function requiredField(value, name) {
        if (value == null) {
            throw new Error("Field " + name + " is required");
        }
    }

    function getRenderer(component) {
        return component ? function (data) {
            component.setData(data);
            return component.render().$el.html();
        } : undefined;
    }

    /**
     * A component for a "combobox" - a single-value select box with a textfield to allow the user to search for a
     * value.
     *
     * The user must select an existing option. i.e. They cannot enter whatever text they want.
     */

    var SelectComponent = function (_View) {
        _inherits(SelectComponent, _View);

        function SelectComponent() {
            _classCallCheck(this, SelectComponent);

            return _possibleConstructorReturn(this, (SelectComponent.__proto__ || Object.getPrototypeOf(SelectComponent)).apply(this, arguments));
        }

        _createClass(SelectComponent, [{
            key: "initialize",
            value: function initialize(_ref) {
                var options = _ref.options,
                    searchFields = _ref.searchFields,
                    labelField = _ref.labelField,
                    selectedOption = _ref.selectedOption,
                    onChange = _ref.onChange,
                    itemComponent = _ref.itemComponent,
                    optionComponent = _ref.optionComponent,
                    _ref$placeholderText = _ref.placeholderText,
                    placeholderText = _ref$placeholderText === undefined ? _jquery2.default.t("common.form.select") : _ref$placeholderText;

                requiredField(options, "options");
                requiredField(options, "searchFields");
                if (itemComponent == null || optionComponent == null) {
                    requiredField(options, "labelField");
                }
                _lodash2.default.assign(this, { options: options, searchFields: searchFields, labelField: labelField, selectedOption: selectedOption, onChange: onChange, itemComponent: itemComponent, optionComponent: optionComponent,
                    placeholderText: placeholderText });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                _UIUtils2.default.compileTemplate(TEMPLATE_PATH, { placeholder: this.placeholderText }).then(function (html) {
                    var options = _lodash2.default.map(_this2.options, function (option, index) {
                        var internalOption = _lodash2.default.clone(option);
                        internalOption[SELECTIZE_VALUE_KEY] = index;
                        return internalOption;
                    });
                    _this2.$el.html(html).find("select").selectize({
                        options: options,
                        items: [_lodash2.default.indexOf(_this2.options, _this2.selectedOption)],
                        valueField: SELECTIZE_VALUE_KEY,
                        searchField: _this2.searchFields,
                        labelField: _this2.labelField,
                        render: {
                            item: getRenderer(_this2.itemComponent),
                            option: getRenderer(_this2.optionComponent)
                        },
                        onChange: function onChange(index) {
                            _this2.onChange(_this2.options[index]);
                        }
                    });
                });
                return this;
            }
        }]);

        return SelectComponent;
    }(_backbone.View);

    exports.default = SelectComponent;
});
//# sourceMappingURL=SelectComponent.js.map
