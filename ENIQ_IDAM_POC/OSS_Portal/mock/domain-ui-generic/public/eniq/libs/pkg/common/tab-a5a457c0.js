import { T as TemplateComponent, d as definition } from './index-b5c18b0a.js';

var template = "<slot></slot>\n";

var style = ":host{\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: flex-start;\n  min-width: 25px;\n  font-size: var(--btn-font-size, 14px);\n  height: var(--space-xxl, 32px);\n  margin: 0;\n  padding: 6px 10px;\n  text-align: center;\n  cursor: default;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  white-space: nowrap;\n}\n:host ::slotted(*:not(:first-child)) {\n  padding-left: var(--space-base, 8px);\n}\n:host([selected]) {\n  color: var(--text, #242424);\n  border-bottom: 2px solid var(--tab-highlight-border, #1174E6);\n}\n\n:host(:not([selected])) {\n  color: var(--tab-text-color,#6a6a6a);\n}\n\n:host([disabled]) {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n\n:host(:not([selected]):not([disabled]):hover) {\n  color: var(--tab-highlight-text-color, #242424);\n  cursor: pointer;\n}\n\n:host(:not([selected]):not([disabled]):hover) ::slotted(*) {\n  cursor: pointer;\n}\n\n:host(:focus) {\n  outline: 1px solid var(--purple, #a56ebe);\n}\n\n@supports (-ms-ime-align:auto) {\n  eui-tab{\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    min-width: 25px;\n    height: var(--space-xxl, 32px);\n    font-size: var(--btn-font-size, 14px);\n    margin: 0;\n    padding: 6px 10px;\n    text-align: center;\n    cursor: default;\n  }\n  eui-tab label {\n    margin-left: var(--space-base, 8px);\n  }\n  eui-tab:not([selected]) {\n    color: var(--tab-text-color, #6a6a6a);\n  }\n  \n  eui-tab[disabled] {\n    opacity: 0.4;\n    cursor: default;\n    pointer-events: none;\n  }\n  \n  eui-tab:not([selected]):not([disabled]):hover {\n    color: var(--tab-highlight-text-color, #242424);\n    cursor: pointer;\n  }\n  \n  eui-tab:not([selected]):not([disabled]):hover ::slotted(*) {\n    cursor: pointer;\n  }\n\n  eui-tab:focus {\n    outline: 1px solid var(--purple, #a56ebe);\n  }\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Tab extends TemplateComponent {
  constructor() {
    super();

    // set the tab selected.
    this.addEventListener('click', event => {
      event.stopPropagation();
      if (!this.disabled) {
        this.selected = true;
      }
    });
  }

  /**
   * When the component connects, set it's slot to "tiles".
   * This ensures it is inserted into the "tiles" slot in it's
   * parent E-UI SDK eui-tabs Component
   *
   * @function didConnect
   */
  didConnect() {
    this.slot = 'titles';
    this.tabIndex = 0;
    super.didConnect();
  }

  didUpgrade() {
    if (this.selected) {
      this.bubble('eui-tab:select');
    }
  }

  /**
   * This is called each time a prop changes.
   * If the selected prop changes to true, bubble an event to it's
   * parent (eui-tabs)
   *
   * @function didChangeProps
   * @param {Map} changedProps - Keys are the names of changed properties;
   * Values are the corresponding previous values.
   */
  didChangeProps(changedProps) {
    if (changedProps.has('selected') && this.selected) {
      this.bubble('eui-tab:select');
    }
  }
}

/**
 * @property {Boolean} disabled - disabled tab
 * @property {Boolean} selected - selected tab
 */
definition(`eui-tab`, {
  style,
  template,
  props: {
    disabled: { attribute: true, type: Boolean },
    selected: { attribute: true, type: Boolean },
  },
})(Tab);

export { Tab as T };
