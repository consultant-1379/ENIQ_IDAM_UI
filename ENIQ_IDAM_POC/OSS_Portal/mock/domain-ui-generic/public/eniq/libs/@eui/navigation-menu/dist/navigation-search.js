import { definition, classMap, html, ifDefined, nothing, LitComponent } from '../../../pkg/@eui/lit-component.js';
import { Icon } from '../../../pkg/@eui/theme/icon.js';

const Accessibility = superclass =>
  class extends superclass {
    _tabIndex;

    constructor() {
      super();
      this._tabIndex = this.getAttribute('tabindex');
      this.addEventListener('focus', () => {
        if (!this.disabled) {
          this._tabIndex = this.getAttribute('tabindex');
          if (this._tabIndex !== null && this._tabIndex !== '-1') {
            this.setAttribute('tabindex', -1);
            this.setInitialFocus?.();
          }
        }
      });
      this.addEventListener('blur', () => {
        this.setDisabledFocusState(this.disabled);
      });
    }

    didConnect() {
      super.didConnect?.();
      if (this.getAttribute('tabindex') == null) {
        // this is needed for Safari.
        this.setAttribute('tabindex', 0);
      }
      this.setDisabledFocusState(this.disabled);
    }

    didChangeProps(changedProps) {
      super.didChangeProps?.(changedProps);
      if (changedProps.has('disabled')) {
        this.setDisabledFocusState(this.disabled);
      }
    }

    setDisabledFocusState(disabled = false) {
      if (disabled) {
        this.setAttribute('tabindex', -1);
      } else if (this._tabIndex == null) {
        this.removeAttribute('tabindex');
      } else {
        this.setAttribute('tabindex', this._tabIndex);
      }
    }
  };

var style$1 = ":host {\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([fullwidth]) {\n  width: 100%;\n}\n\n:host([size]) {\n  width: auto;\n}\n\n:host([fullwidth]) .input__validation {\n  width: 100%;\n}\n\n:host([fullwidth]) .input-group {\n  grid-template-columns: 1fr;\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n\n:host(:focus-visible) .input {\n  outline: 0;\n  border-color: var(--purple, #a56ebe);\n}\n\n:host([disabled]) .input__prefix__suffix {\n  opacity: 0.4;\n}\n\n:host([readonly]) .textfield__suffix,\n:host([readonly]) .textfield__prefix {\n  border-color: transparent;\n  color: var(--gray-text, #6a6a6a);\n}\n\n.input__prefix__suffix {\n  display: flex;\n  align-items: center;\n  width: inherit;\n}\n\n.input {\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  color: var(--text, #242424);\n  font-size: 14px;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  font-weight: var(--weight-regular, 400);\n  width: 160px;\n  background: var(--input-background, #fff);\n  border: 1px solid var(--input-border, #878787);\n  padding: 5px 7px 4px;\n  -webkit-appearance: none;\n  outline: 0;\n  margin: initial;\n  line-height: 1.5;\n}\n\n.input::placeholder {\n  color: var(--input-placeholder, #6a6a6a);\n}\n\n.input:active {\n  outline: 0;\n  border-color: null;\n}\n\n.input:disabled,\n.input[disabled] {\n  cursor: default;\n  pointer-events: none;\n}\n\ninput[size] {\n  width: auto;\n}\n\n.textfield__icon {\n  display: none;\n}\n\n.textfield__icon--no-right-margin {\n  display: block;\n  flex: none;\n  padding: 5px 6px;\n  margin-left: -26px;\n  margin-right: 0px;\n  line-height: 1.5;\n}\n\n.textfield__suffix {\n  display: block;\n  flex: 0 0 auto;\n  border: solid 1px var(--input-border, #878787);\n  border-left: none;\n  padding: 5px 7px 4px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.textfield__prefix {\n  display: block;\n  flex: 0 0 auto;\n  border: solid 1px var(--input-border, #878787);\n  border-right: none;\n  padding: 5px 7px 4px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.textfield__icon ::slotted(eui-icon) {\n  --icon-color: var(--input-text, #242424);\n  --icon-size: 14px;\n}\n\n.input[readonly] {\n  background: transparent;\n  border-color: transparent;\n  padding-left: 0;\n}\n\n.input[readonly]:hover,\n.input[readonly]:active {\n  border-color: transparent;\n}\n\n.with-icon {\n  padding-right: 28px;\n}\n\n.input-group {\n  position: relative;\n  display: grid;\n  grid-template-columns: min-content;\n  width: inherit;\n}\n\n.input__prefix__suffix.invalid .input:not(:focus-visible) {\n  border: 1px solid var(--input-error-border, #bb0b02);\n  box-shadow: none;\n}\n\n.input__prefix__suffix.valid .input:not(:focus-visible) {\n  border: 1px solid var(--input-success-border, #329864);\n  box-shadow: none;\n}\n\n.input:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: -2px;\n}\n\n.input__validation {\n  line-height: 14px;\n  font-size: 12px;\n  color: var(--input-error-text, #242424);\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\nslot[name='icon'] {\n  display: flex;\n  align-items: center;\n}\n\n.input__validation .icon-triangle-warning {\n  --icon-size: 12px;\n  --icon-color: var(--input-error-icon, #bb0b02);\n  margin-right: var(--space-small, 4px);\n}\n\n.input__validation .icon-check {\n  --icon-size: 12px;\n  --icon-color: var(--input-success-icon, #329864);\n  margin-right: var(--space-small, 4px);\n}\n\n.input__validation-message {\n  vertical-align: middle;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {Boolean} autocomplete - true, browser automatically completes
 * the input values based on values that the user has entered before
 * @property {Boolean} autofocus - true, input field should automatically get
 * focus when the page loads
 * @property {Boolean} disabled - true disables the text-field
 * @property {Boolean} fullwidth - true, sets the text-field to take the
 * full width of the parent container
 * @property {Number} maxlength - sets the maximum allowed character length for the input field
 * @property {Number} minlength - sets the minimum allowed character length for the input field
 * @property {String} name - sets the name of the text-field (used in a form)
 * @property {String} pattern - regular expression for validating input
 * @property {String} placeholder - sets the placeholder text to appear in the
 * text-field when it is empty
 * @property {String} prefix - sets a prefix to the text-field
 * @property {Boolean} readonly - true sets the text-field readonly
 * @property {Boolean} required - if true, input field must be filled out
 *  before submitting the form
 * @property {Number} size - Width of text-field based on number of characters, overrides fullwidth
 * @property {String} suffix - sets a suffix to the text-field
 * @property {String} validationMessage - error message to display when input value is invalid
 * @property {String} successMessage - success message to display when input value is valid
 * @property {String} customValidation - make field invalid and replace the validation message
 * @property {String} value - sets the initial value of the text-field
 */
class TextField extends Accessibility(LitComponent) {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    this._withIcon = false;
  }

  /**
   * Provide calculated class names
   *
   * @method _getInputClassNames
   * @private
   */
  _getInputClassNames() {
    return classMap({
      input: true,
      textfield: true,
      'with-icon': this._withIcon,
    });
  }

  /**
   * Provide calculated class names
   *
   * @method _getInputGroupClassNames
   * @private
   */
  _getInputGroupClassNames() {
    return classMap({
      input__prefix__suffix: true,
      invalid: this._isInvalid,
      valid:
        this.value && this.pattern && !this._isInvalid && this.successMessage,
    });
  }

  /**
   * Handle all events
   * @method handleEvent
   * @param {Event} event
   */
  handleEvent(event) {
    if (event.type === 'slotchange') {
      event.stopPropagation();
      const slot = this.shadowRoot.querySelector('slot');
      if (slot.assignedNodes().length > 0) {
        this._addIcon();
      } else {
        this._removeIcon();
      }
    } else if (event.type === 'change') {
      event.stopPropagation();
      this.bubble('change', { value: this.value });
    } else if (event.type === 'input') {
      event.stopPropagation();
      this.value = event.currentTarget.value;
      this.bubble('input', { value: this.value });
    }
  }

  /**
   * Add icon element to the DOM
   * @method _addIcon
   * @private
   */
  _addIcon() {
    const input = this.shadowRoot.querySelector('input');
    input.classList.add('with-icon');
    this._withIcon = true;
    const iconHolder = this.shadowRoot.querySelector('.textfield__icon');
    iconHolder.classList.add('textfield__icon--no-right-margin');
  }

  /**
   * Remove icon element from the DOM
   * @method _removeIcon
   * @private
   */
  _removeIcon() {
    const input = this.shadowRoot.querySelector('input');
    input.classList.remove('with-icon');
    this._withIcon = false;
    const iconHolder = this.shadowRoot.querySelector('.textfield__icon');
    iconHolder.classList.remove('textfield__icon--no-right-margin');
  }

  /**
   * Set custom validity on the text field by entering a message
   * when the field is invalid. When the field is valid enter an empty string.
   *
   * @function setCustomValidity
   * @param {String} message to display when the input is invalid, leave empty
   * to clear the error
   */
  setCustomValidity(message) {
    this.customValidation = message;
  }

  /**
   * call this only once when the shadowRoot is
   * attached and the template is added.
   *
   * @function didUpgrade
   */
  didUpgrade() {
    if (this.customValidation) {
      this.shadowRoot
        .querySelector('.input')
        .setCustomValidity(this.customValidation);
      this.updateValidity();
    }

    if (this.required) {
      this.updateValidity();
    }

    const iconslot = this.shadowRoot.querySelector('slot[name=icon]');
    if (iconslot && iconslot.assignedNodes().length > 0) {
      this._addIcon();
    }

    if (this.pattern) {
      this._updatePatternAttribute();
      this.updateValidity();
    }
  }

  /**
   * Shift focus from root element to input field
   * Overridden by Textarea
   *
   * @function setInitialFocus
   */
  setInitialFocus() {
    // native read only is still focusable.
    this.shadowRoot.querySelector('.input').focus();
  }

  /**
   * Update or remove pattern attribute of .input field according to pattern prop
   *
   * @function _updatePatternAttribute
   * @private
   */
  _updatePatternAttribute() {
    if (this.pattern) {
      this.shadowRoot.querySelector('.input').pattern = this.pattern;
    } else {
      delete this.shadowRoot.querySelector('.input').pattern;
    }
  }

  /**
   * Get the validity of the textfield.
   *
   * @property validity
   * @returns {ValidityState} - Object containing the validity state of the component.
   * @private
   */
  get validity() {
    const textfield = this.shadowRoot.querySelector('.input');
    return textfield.validity;
  }

  /**
   * set the value fo the text-field.
   *
   * @method _setInnerValue
   * @param {string} value - the text contents of the textfield
   * @private
   */
  _setInnerValue(value) {
    const textfield = this.shadowRoot.querySelector('.input');
    if (textfield) {
      textfield.value = value;
    }
  }

  /**
   * Lifecycle callback executed each time the components props are updated
   *
   * @method didChangeProps
   * @param {Object} changedProps - the previous values of the components changed props
   *
   * @protected
   */
  didChangeProps(changedProps) {
    super.didChangeProps?.(changedProps);
    if (this.shadowRoot) {
      if (changedProps.has('customValidation')) {
        this.shadowRoot
          .querySelector('.input')
          .setCustomValidity(this.customValidation);
        this.updateValidity();
      }

      if (changedProps.has('value')) {
        this._setInnerValue(this.value);
        this.updateValidity();
      }

      if (changedProps.has('pattern')) {
        this._updatePatternAttribute();
        this.updateValidity();
      }
    }
  }

  /**
   * Updates component inner validation state
   *
   * @method updateValidity
   * @private
   */
  updateValidity() {
    const textfield = this.shadowRoot.querySelector('.input');
    this._isInvalid = !textfield.validity.valid;
  }

  /**
   * Renders the input element
   * This function is called each time a prop changes.
   * @method _getInputElement
   * @private
   */
  _getInputElement() {
    return html`
      ${this.prefix &&
      html` <div class="textfield__prefix">${this.prefix}</div> `}
      <input
        class="${this._getInputClassNames()}"
        type="text"
        value="${this.value}"
        placeholder=${ifDefined(this.placeholder)}
        autocomplete="${this.autocomplete ? 'on' : 'off'}"
        id="${ifDefined(this.name)}"
        size="${ifDefined(this.size)}"
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        ?autofocus="${this.autofocus}"
        maxlength="${ifDefined(this.maxlength)}"
        minlength="${ifDefined(this.minlength)}"
        @input=${this}
        @change=${this}
      />
      <div
        class="textfield__icon ${this._withIcon
          ? 'textfield__icon--no-right-margin'
          : ''}"
      >
        <slot name="icon" @slotchange=${this}></slot>
      </div>
      ${this.suffix &&
      html` <div class="textfield__suffix">${this.suffix}</div> `}
    `;
  }

  /**
   * Return validation message.
   *
   * @method _returnValidationMessage
   *
   * @private
   */
  _returnValidationMessage(className, iconName, message) {
    return html` <div class="input__validation">
      <eui-icon class=${className} name=${iconName}> </eui-icon
      ><span class="input__validation-message">${message}</span>
    </div>`;
  }

  /**
   * Renders the validation message on a textfield.
   * If the textfield is part of the combo box no validation message should be present.
   *
   * @method _validationMessage
   *
   * @private
   */
  _validationMessage() {
    // Native input field supplies default validation messages when we do not receive any message props
    // Will contain customValidation message when set
    let nativeMessage = '';
    const element = this.shadowRoot.querySelector('.input');
    if (element) {
      nativeMessage = element.validationMessage;
    }

    if (
      this.customValidation ||
      (this._isInvalid && element.validity.valueMissing)
    ) {
      return this._returnValidationMessage(
        'icon-triangle-warning',
        'triangle-warning',
        nativeMessage,
      );
    }

    if (this.value) {
      if (this._isInvalid) {
        if (this.validationMessage) {
          // Custom validation message not applied to input field, override
          nativeMessage = this.validationMessage;
        }
        return this._returnValidationMessage(
          'icon-triangle-warning',
          'triangle-warning',
          nativeMessage,
        );
      }

      if (this.pattern && this.successMessage) {
        return this._returnValidationMessage(
          'icon-check',
          'check',
          this.successMessage,
        );
      }
    }

    return nothing;
  }

  /**
   * Render the text-field component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div class="input-group">
        <div class="${this._getInputGroupClassNames()}">
          ${this._getInputElement()}
        </div>
        ${this._validationMessage()}
      </div>
    `;
  }
}

definition('eui-text-field', {
  style: style$1,
  props: {
    autocomplete: { attribute: true, type: Boolean },
    autofocus: { attribute: true, type: Boolean },
    disabled: { attribute: true, type: Boolean },
    fullwidth: { attribute: true, type: Boolean },
    maxlength: { attribute: true, type: Number },
    minlength: { attribute: true, type: Number },
    name: { attribute: true, type: String, default: 'item' },
    pattern: { attribute: true, type: String },
    placeholder: { attribute: true, type: String },
    prefix: { attribute: true, type: String },
    readonly: { attribute: true, type: Boolean },
    required: { attribute: true, type: Boolean },
    size: { attribute: true, type: Number },
    suffix: { attribute: true, type: String },
    validationMessage: { attribute: true, type: String },
    successMessage: { attribute: true, type: String },
    customValidation: { attribute: true, type: String },
    value: { attribute: true, type: String, default: '' },
    _isInvalid: { type: Boolean },
  },
})(TextField);

var style = ".search-div {\n  margin: 0px 18px var(--space-large, 16px) 18px;\n}";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class NavigationSearch extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
      'eui-text-field': TextField,
    };
  }

  handleEvent(event) {
    if (event.type === 'input') {
      const searchedString = event.detail.value.toLowerCase();
      this.returnedNavItems = [];
      this.navItems.map(app => this.menuSearch(app, searchedString));
      this.bubble('nav-search:display-item', {
        navItems: this.returnedNavItems,
      });
    }
  }

  /**
   * @param {Object} - Object contain data for each individual app
   * @param {String} searchedString - lowercase string inputted into the eui-text-field
   */
  menuSearch = (app, searchedString = '') => {
    const { tags, displayName } = app;
    let allTags = '';
    if (tags) {
      allTags = tags.join().toLowerCase();
    }
    if (
      displayName.toLowerCase().includes(searchedString) ||
      allTags.includes(searchedString)
    ) {
      this.returnedNavItems.push(app);
    }
  };

  render() {
    return html`
      <div class="search-div">
        <eui-text-field
          @input="${this}"
          fullwidth
          placeholder="Search for..."
          class="searchbar"
        >
          <eui-icon slot="icon" name="search"></eui-icon>
        </eui-text-field>
      </div>
    `;
  }
}
definition('eui-navigation-search', {
  style,
  props: {
    navItems: { type: Array },
  },
})(NavigationSearch);

export { NavigationSearch as default };
