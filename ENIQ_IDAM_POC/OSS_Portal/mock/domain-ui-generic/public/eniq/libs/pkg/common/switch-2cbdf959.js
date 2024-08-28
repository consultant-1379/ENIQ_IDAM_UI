import { L as LitComponent, $ } from './lit-component-430a97d9.js';
import { d as definition } from './index-b5c18b0a.js';
import { A as Accessibility } from './accessibility-e96b3ad8-a1d8d2ef.js';

var style = ":host {\n  display: inline-block;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  cursor: pointer;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host * {\n  box-sizing: border-box;\n}\n\n:host([disabled]) {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n\n:host([on]) .switch {\n  background-color: var(--switch-on-background, #1174e6);\n  border-color: var(--switch-on-border, #1174e6);\n}\n\n:host([on]:hover) .switch {\n  background-color: var(--switch-on-background-hover, #0069c2);\n  border-color: var(--switch-on-border-hover, #0069c2);\n}\n:host([on]:hover) .ball::before {\n  background-color: var(--switch-on-ball-hover, #f2f2f2);\n}\n\n:host(:hover) .switch {\n  background-color: var(--switch-off-background-hover, #fff);\n  border-color: var(--switch-off-border-hover, #6a6a6a);\n}\n:host(:hover) .ball::before {\n  background-color: var(--switch-off-ball-hover, #242424);\n}\n\n.switch {\n  display: inline-block;\n  position: relative;\n  left: 0px;\n  height: 16px;\n  width: 28px;\n  background-color: var(--switch-off-background, #fff);\n  border: solid 1px var(--switch-off-border, #878787);\n  border-radius: 12px;\n  color: var(--text, #242424);\n  transition: border-color 0.4s, background-color 0.4s, transform 0.4s;\n}\n\n.switch-align {\n  display: flex;\n  font-size: 14px;\n  line-height: inherit;\n  align-items: center;\n  text-align: initial;\n}\n\n.switch-label {\n  margin-left: var(--space-small, 4px);\n  color: var(--text, #242424);\n}\n\n:host([on]) .ball::before {\n  -webkit-transform: translateX(13px);\n  transform: translateX(13px);\n  background-color: var(--switch-on-ball, #f2f2f2);\n}\n\n.switch .ball {\n  position: absolute;\n}\n\n.switch .ball::before {\n  position: absolute;\n  content: '';\n  height: 10px;\n  width: 10px;\n  left: 2px;\n  top: 2px;\n  background-color: var(--switch-off-ball, #242424);\n  border-radius: 50%;\n  -webkit-transition: background-color 0.4s, -webkit-transform 0.4s;\n  transition: background-color 0.4s, -webkit-transform 0.4s;\n  transition: background-color 0.4s, transform 0.4s;\n  transition: background-color 0.4s, transform 0.4s, -webkit-transform 0.4s;\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n\nspan.switch:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
/* eslint-disable lit-a11y/tabindex-no-positive */

/**
 * @property {String} labelOff - the label text displayed when the
 * switch is in the off state
 * @property {String} labelOn - the label text displayed when the
 * switch is in the on state
 * @property {Boolean} on - set the switch toggled on/off
 * @property {Boolean} disabled - true disabls the component, false enables the component
 */
class Switch extends Accessibility(LitComponent) {
  _SPACE_KEY = ' ';

  constructor() {
    super();
    this.addEventListener('click', this);
  }

  /**
   * Hook into the lifecycle callback to trigger the change event when the
   * on prop is changed.
   *
   * @function didChangeProps
   * @param {Map} changedProps - previous values of the changed props
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    if (changedProps.has('on')) {
      this.bubble('eui-switch:change', { on: this.on });
    }
  }

  /**
   * Getter for the focusable element in the ShadowDOM
   */
  get focusableElement() {
    return this.shadowRoot.querySelector('span.switch');
  }

  /**
   * Sets focus on the focusable element in the ShadowDOM
   */
  setInitialFocus() {
    this.focusableElement.focus();
  }

  /**
   * Handles the state change of the switch
   */
  handleEvent(event) {
    if (event.type === 'click') {
      this.on = !this.on;
    } else if (event.type === 'keydown') {
      if (event.key === this._SPACE_KEY || event.key === 'Enter') {
        event.preventDefault();
        this.on = !this.on;
      }
    }
  }

  /**
   * Render the switch component. This function is called each time a
   * prop changes.
   */
  render() {
    /* prettier-ignore */
    return $`
      <div class="switch-align" >
        <span
          class="switch"
          @keydown=${this}
          tabindex=${this.disabled ? -1 : 0}
        >
          <i class="ball"></i>
        </span>
        <span class="switch-label">${this.on ? this.labelOn : this.labelOff}</span>
      </div>
    `;
  }
}

definition('eui-switch', {
  style,
  props: {
    labelOff: { attribute: true, type: String, default: 'Off' },
    labelOn: { attribute: true, type: String, default: 'On' },
    on: { attribute: true, type: Boolean },
    disabled: { attribute: true, type: Boolean },
  },
})(Switch);

export { Switch as S };
