import { L as LitComponent, $ } from './lit-component-430a97d9.js';
import { o } from './class-map-40cf41c7.js';
import { l } from './if-defined-fd12e107.js';
import { d as definition } from './index-b5c18b0a.js';
import { Icon } from '../@eui/theme/icon.js';
import { A as Accessibility } from './accessibility-e96b3ad8-a1d8d2ef.js';

var style = ":host {\n  display: inline-block;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n:host([fullwidth]) {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbutton,\na {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  flex-direction: row;\n  padding: 5px 12px 4px;\n  border-radius: var(--btn-radius, 3px);\n  outline: 0;\n  font-size: var(--btn-font-size, 14px);\n  color: var(--btn-secondary-text, #242424);\n  background-color: var(--btn-secondary-background, transparent);\n  border: 1px solid var(--btn-secondary-border, #242424);\n  line-height: var(--btn-line-height, 21px);\n  box-sizing: border-box;\n  background-image: var(--btn-secondary-gradient);\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica', 'sans-serif');\n}\n\na {\n  text-decoration: none;\n}\n\n.button__icon {\n  display: inline-block;\n}\n\n.with--icon {\n  margin-left: var(--space-base, 8px);\n  margin-right: 0;\n  text-align: left;\n  min-height: var(--btn-line-height, 21px);\n}\n\n.button__label {\n  flex: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.btn--align--edge {\n  display: inline-flex;\n}\n\n.btn--align--edge .button__label.with--icon {\n  text-align: right;\n}\n\n.btn--align--edge .button__label {\n  text-align: left;\n}\n\n.btn--reverse .button__label {\n  text-align: right;\n}\n\n.btn--reverse.btn--align--edge .button__label {\n  text-align: right;\n}\n\n.btn--reverse.btn--align--edge .button__label.with--icon {\n  text-align: left;\n}\n\n.btn--reverse .with--icon {\n  margin-left: 0;\n  margin-right: var(--space-base, 8px);\n  flex: auto;\n}\n\n.btn--reverse eui-icon {\n  text-align: left;\n}\n\n.btn--align--edge eui-icon {\n  text-align: left;\n  flex: none;\n}\n\n.btn--reverse.btn--align--edge eui-icon {\n  text-align: right;\n  flex: none;\n}\n\neui-icon {\n  flex: auto;\n  text-align: right;\n  --icon-color: var(--btn-secondary-text, #242424);\n}\n\n:host(:empty) button {\n  padding: 5px 8px 4px;\n}\n\n:host(:empty) .with--icon {\n  margin-left: 0;\n}\n\n.btn:last-child {\n  margin-right: 0;\n}\n\n:host([disabled]) {\n  pointer-events: none;\n}\n\n:host([disabled]) a,\n:host([disabled]) button {\n  opacity: 0.6;\n  cursor: default;\n}\n\n:host(:hover:not([disabled])) .btn {\n  color: var(--btn-secondary-hover-text, #fff);\n  text-decoration: none;\n  background-color: var(--btn-secondary-hover-background, #4e4e4e);\n  border: 1px solid var(--btn-secondary-hover-border, #4e4e4e);\n  background-image: var(--btn-secondary-hover-gradient);\n  --icon-color: var(--btn-secondary-hover-text, #fff);\n  cursor: pointer;\n}\n:host(:hover:not([disabled])) eui-icon {\n  --icon-color: var(--btn-secondary-hover-text, #fff);\n}\n\n:host(:not([disabled])) .btn:active {\n  color: var(--btn-secondary-active-text, #fff);\n  background-color: var(--btn-secondary-active-background, #242424);\n  border: 1px solid var(--btn-secondary-active-border, #242424);\n  box-shadow: var(--btn-secondary-active-box-shadow);\n  background-image: var(--btn-secondary-active-gradient);\n  -webkit-transition: none;\n  transition: none;\n}\n\n:host(:not([disabled])) .btn:active eui-icon {\n  --icon-color: var(--btn-secondary-active-text, #fff);\n}\n\n:host([primary]) eui-icon {\n  --icon-color: var(--btn-primary-text, #fff);\n}\n\n:host([warning]) eui-icon {\n  --icon-color: var(--btn-warning-text, #fff);\n}\n\n:host([primary]) .btn {\n  color: var(--btn-primary-text, #fff);\n  background-color: var(--btn-primary-background, #1174e6);\n  border: 1px solid var(--btn-primary-border, #1174e6);\n  background-image: var(--btn-color-gradient);\n}\n\n:host(:hover:not([disabled])[primary]) .btn {\n  color: var(--btn-primary-text, #fff);\n  background-color: var(--btn-primary-hover-background, #0069c2);\n  border: 1px solid var(--btn-primary-hover-border, #0069c2);\n  background-image: var(--btn-color-hover-gradient);\n}\n:host(:hover:not([disabled])[primary]) eui-icon {\n  --icon-color: var(--btn-primary-text, #fff);\n}\n\n:host(:not([disabled])[primary]) .btn:active {\n  color: var(--btn-primary-text, #fff);\n  background-color: var(--btn-primary-active-background, #005499);\n  border: 1px solid var(--btn-primary-active-border, #005499);\n  box-shadow: var(--btn-color-active-box-shadow);\n  background-image: var(--btn-color-active-gradient);\n  -webkit-transition: none;\n  transition: none;\n}\n\n:host(:not([disabled])[primary]) .btn:active eui-icon {\n  --icon-color: var(--btn-primary-text, #fff);\n}\n\n:host([warning]) .btn {\n  color: var(--btn-warning-text, #fff);\n  background-color: var(--btn-warning-background, #ed0e00);\n  border: 1px solid var(--btn-warning-border, #ed0e00);\n  background-image: var(--btn-color-gradient);\n}\n\n:host(:hover:not([disabled])[warning]) .btn {\n  color: var(--btn-warning-text, #fff);\n  background-color: var(--btn-warning-hover-background, #d40d02);\n  border: 1px solid var(--btn-warning-hover-border, #d40d02);\n  background-image: var(--btn-color-hover-gradient);\n}\n:host(:hover:not([disabled])[warning]) eui-icon {\n  --icon-color: var(--btn-warning-text, #fff);\n}\n\n:host(:not([disabled])[warning]) .btn:active {\n  color: var(--btn-warning-text, #fff);\n  background-color: var(--btn-warning-active-background, #bb0b02);\n  border: 1px solid var(--btn-warning-active-border, #bb0b02);\n  box-shadow: var(--btn-color-active-box-shadow);\n  background-image: var(--btn-color-active-gradient);\n  -webkit-transition: none;\n  transition: none;\n}\n:host(:not([disabled])[warning]) .btn:active eui-icon {\n  color: var(--btn-warning-text, #fff);\n}\n\nlabel input[type='file'] {\n  display: none;\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n\n:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Button extends Accessibility(LitComponent) {
  _SPACE_KEY = ' ';

  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  handleEvent(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    } else if (event.type === 'keydown') {
      if (event.key === this._SPACE_KEY) {
        // <a> natively only responds to Enter key
        // <button> responds to both, handle space for consistency
        if (this.href) {
          event.preventDefault();
          // Enter natively bubbles a click, mirror
          this.bubble('click', event);
          if (this.target) {
            window.open(this.href, this.target);
          } else {
            window.location.href = this.href;
          }
        }
      }
    }
  }

  setInitialFocus() {
    this.shadowRoot.querySelector('.btn').focus();
  }

  get buttonIcon() {
    return this.shadowRoot.querySelector('eui-icon');
  }

  /**
   * _isIcon determines if there is an icon added to the button.
   *
   * @function _isIcon
   * @private
   */
  _isIcon = () => this.icon && this.icon.length > 0;

  /**
   * _withIcon renders the markup for the icon if it is added to the button
   *
   * @function _withIcon
   * @private
   */
  _withIcon = () => {
    if (this._isIcon()) {
      return $`<eui-icon name=${this.icon} size="14px"></eui-icon>`;
    }
    return null;
  };

  /**
   * create classMap
   *
   * @returns Object - classMap
   * @private
   */
  /* prettier-ignore */
  _setClasses = () => o({
    btn: true,
    'btn--reverse': this.reverse,
    'btn--align--edge': this.alignEdge,
  });

  /**
   * Render markup for link
   *
   * Note: <a> have no disabled state, for css only, use tabindex -1
   *
   * @function _renderLink
   * @private
   */
  _renderLink = () => $`
    <a
      class="${this._setClasses()}"
      href="${this.href}"
      download=${l(this.download)}
      target="${l(this.target)}"
      ?disabled=${this.disabled}
      tabindex=${this.disabled ? -1 : 0}
      @keydown=${this}
      @click=${this}
    >
      ${this.reverse ? '' : this._withIcon()}
      <span class="button__label ${this._isIcon() ? 'with--icon' : ''}">
        <slot></slot>
      </span>
      ${this.reverse ? this._withIcon() : ''}
    </a>
  `;

  /**
   * Render markup for the regular button
   *
   * @function _renderButton
   * @private
   */
  _renderButton = () => $`
    <button class="${this._setClasses()}" ?disabled=${this.disabled}>
      ${this.reverse ? '' : this._withIcon()}
      <span class="button__label ${this._isIcon() ? 'with--icon' : ''}">
        <slot></slot>
      </span>
      ${this.reverse ? this._withIcon() : ''}
    </button>
  `;

  /**
   * Render the button component. This function is called each time a
   * prop changes.
   */
  render() {
    if (this.href) {
      return this._renderLink();
    }
    return this._renderButton();
  }
}

definition('eui-button', {
  style,
  props: {
    alignEdge: { attribute: true, type: Boolean },
    disabled: { attribute: true, type: Boolean },
    download: { attribute: true, type: String },
    fullwidth: { attribute: true, type: Boolean },
    href: { attribute: true, type: String },
    icon: { attribute: true, type: String },
    reverse: { attribute: true, type: Boolean },
    primary: { attribute: true, type: Boolean },
    target: { attribute: true, type: String },
    warning: { attribute: true, type: Boolean },
  },
})(Button);

export { Button as B };
