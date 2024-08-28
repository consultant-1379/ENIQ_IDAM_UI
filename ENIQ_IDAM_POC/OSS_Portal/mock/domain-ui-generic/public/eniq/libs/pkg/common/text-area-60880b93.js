import { d as definition } from './index-b5c18b0a.js';
import { $ } from './lit-component-430a97d9.js';
import { l } from './if-defined-fd12e107.js';
import { T as TextField } from './text-field-cc7ce4be.js';
import '../@eui/theme/icon.js';

var style = ".input-group {\n  resize: inherit;\n}\n\n.input__prefix__suffix {\n  resize: inherit;\n}\n\n.textarea {\n  resize: inherit;\n}\n\n:host([cols]){\n  width: auto;\n}\n\ntextarea[cols] {\n  width: auto;\n}\n";

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
 * @property {Boolean} autofocus - true, textarea should automatically get focus when the page loads
 * @property {Number} cols - the visible width of the text control, in average character widths
 * @property {Boolean} disabled - true disables the textarea
 * @property {Boolean} fullwidth - true, sets the textarea to take the full width of the parent
 * container
 * @property {Boolean} maxlength - sets the maximum allowed character length for the input field
 * @property {Boolean} minlength - sets the minimum allowed character length for the input field
 * @property {String} name - sets the name of the textarea (used in a form)
 * @property {String} placeholder - sets the placeholder text to appear in the
 * textarea when it is empty
 * @property {Boolean} readonly - true sets the textarea readonly
 * @property {Boolean} required - true, specifies the textarea must be filled out before submitting
 * the form
 * @property {Number} rows - sets the number of rows in a textarea
 * @property {String} value - sets the initial value of the textarea
 * @property {String} wrap - specifies the wrapping behavior of the text on reaching textarea edge
 */
class Textarea extends TextField {
  /**
   * Updates component inner validation state
   *
   * @method updateValidity
   */
  updateValidity() {
    if (!this.customValidation) {
      this.validate();
    }
    super.updateValidity();
  }

  /**
   * Implements pattern validation for the textarea
   *
   * @method validate
   */
  validate() {
    const textarea = this.shadowRoot.querySelector('.input');
    if (this.value && textarea.pattern && !this.value.match(textarea.pattern)) {
      textarea.setCustomValidity(
        this.validationMessage || 'pattern mismatched',
      );
    } else {
      textarea.setCustomValidity('');
    }
  }

  /**
   * Renders the textarea element
   * This function is called each time a prop changes.
   *
   * @private
   */
  _getInputElement() {
    /* prettier-ignore */
    return $`
      <textarea
        class="textarea ${this._getInputClassNames()}"
        rows="${l(this.rows)}"
        cols="${l(this.cols)}"
        id="${l(this.name)}"
        placeholder=${l(this.placeholder)}
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        autocomplete="${this.autocomplete ? 'on' : 'off'}"
        ?autofocus="${this.autofocus}"
        minlength=${l(this.minlength)}
        maxlength="${l(this.maxlength)}"
        @input=${this}
        @change=${this}
        >${this.value}</textarea>
    `;
  }

  /**
   * Render the textarea component. This function is called each time a prop changes.
   */
  render() {
    return $` ${super.render()} `;
  }
}

definition('eui-textarea', {
  style,
  props: {
    cols: { attribute: true, type: Number },
    rows: { attribute: true, type: Number },
    wrap: { attribute: true, type: Number },
  },
})(Textarea);

// Remove unnecessary props inherited from parent class
delete Textarea._propDefs.prefix;
delete Textarea._propDefs.suffix;
delete Textarea._propDefs.size;

export { Textarea as T };
