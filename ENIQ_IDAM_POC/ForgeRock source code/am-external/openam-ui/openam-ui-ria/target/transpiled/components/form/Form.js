define(["exports", "lodash", "i18next", "react", "react-jsonschema-form", "components/form/fields/index", "components/form/widgets/index", "components/form/fields/VerticalFormFieldTemplate"], function (exports, _lodash, _i18next, _react, _reactJsonschemaForm, _index, _index3, _VerticalFormFieldTemplate) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

    var _index2 = _interopRequireDefault(_index);

    var _index4 = _interopRequireDefault(_index3);

    var _VerticalFormFieldTemplate2 = _interopRequireDefault(_VerticalFormFieldTemplate);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    /**
     * Wrapping component around the react-jsonschema-form library.
     * @module components/form/Form
     * @param {Object} props Component properties.
     * @param {Object} props.schema Schema for the data.
     * @returns {ReactElement} Wrapping component around react-jsonschema-form
     * @see https://github.com/mozilla-services/react-jsonschema-form
     */
    var Form = function Form(props) {
        var orderedProperties = (0, _lodash.sortBy)(props.schema.properties, "propertyOrder");

        var uiSchema = _extends({
            "ui:order": (0, _lodash.map)(orderedProperties, function (property) {
                return (0, _lodash.findKey)(props.schema.properties, property);
            })
        }, (0, _lodash.mapValues)(props.schema.properties, function (property) {
            var uiSchema = {};

            if (property.type === "boolean") {
                uiSchema["ui:widget"] = "TitatoggleWidget";
            } else if (property.type === "object") {
                uiSchema["ui:field"] = "KeyValueField";
            }

            if ((0, _lodash.get)(property, "format") === "password") {
                uiSchema["ui:placeholder"] = (0, _i18next.t)("common.form.passwordPlaceholder");
            }

            return uiSchema;
        }));

        return _react2.default.createElement(_reactJsonschemaForm2.default, _extends({
            FieldTemplate: _VerticalFormFieldTemplate2.default,
            fields: _index2.default,
            liveValidate: true,
            showErrorList: false,
            uiSchema: uiSchema,
            widgets: _index4.default
        }, props));
    };

    Form.propTypes = {
        schema: _react.PropTypes.objectOf(_react.PropTypes.any)
    };

    exports.default = Form;
});
