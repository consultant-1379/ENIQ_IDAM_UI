import { b, $, w, L as LitComponent } from './lit-component-430a97d9.js';
import { d as definition } from './index-b5c18b0a.js';
import { e, i as i$1, t, o } from './class-map-40cf41c7.js';
import { l } from './if-defined-fd12e107.js';
import { A as Accessibility } from './accessibility-e96b3ad8-a1d8d2ef.js';

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=e(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ct){this.ct=new Set;for(const t in r)this.ct.add(t);return this.render(r)}this.ct.forEach((t=>{null==r[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.ct.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b}});

var style = ":host {\n  display: flex;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  vertical-align: sub;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  cursor: pointer;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ninput {\n  width: 0;\n  height: 0;\n  padding: 0;\n  margin: 0;\n  background: 0 0;\n  border: 0;\n  opacity: 0;\n  pointer-events: none;\n  display: block;\n  -webkit-appearance: none;\n  outline: 0;\n}\n\n.checkbox__label:hover {\n  cursor: pointer;\n}\n.checkbox__square {\n  border-radius: var(--checkbox-border-radius);\n  width: 14px;\n  height: 14px;\n  align-self: center;\n  display: inline-flex;\n  justify-content: center;\n  background-color: var(--checkbox-background, #fff);\n  border: solid 1px var(--checkbox-border, #878787);\n  margin-right: var(--space-small, 4px);\n}\n.checkbox__square__tick {\n  fill: var(--checkbox-tick, #f2f2f2);\n}\nsvg {\n  align-self: center;\n}\n.checkbox__label {\n  display: flex;\n}\n.checkbox__square__indeterminate {\n  width: 8px;\n  height: 2.5px;\n  background-color: var(--checkbox-tick, #f2f2f2);\n  align-self: center;\n}\n.checkbox__label__content {\n  display: inline;\n  vertical-align: text-top;\n}\n:host(:not([disabled]):hover) .checkbox__square {\n  border: solid 1px var(--checkbox-hover-border, #6a6a6a);\n}\n:host([disabled]) {\n  cursor: default;\n  opacity: 0.4;\n  pointer-events: none;\n}\n:host([indeterminate]) .checkbox__square,\n:host([checked]) .checkbox__square {\n  border: solid 1px var(--checkbox-checked-border, #1174e6);\n  background-color: var(--checkbox-checked-background, #1174e6);\n}\n:host([indeterminate]:hover) .checkbox__square,\n:host([checked]:hover) .checkbox__square {\n  border: solid 1px var(--checkbox-checked-hover-border, #0069c2);\n  background-color: var(--checkbox-checked-hover-background, #0069c2);\n}\n:host(:focus-visible) {\n  outline: none !important;\n}\ninput:focus-visible + label .checkbox__square {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n";

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
 * @property {Boolean} checked - the checked state of the checkbox
 * @property {Boolean} disabled - the disabled state of the checkbox
 * @property {Boolean} indeterminate - the indeterminate state of the checkbox
 * @property {String} name - the name of the checkbox
 * @property {Boolean} menuItem - used to inform the checkbox that it is
 */
class Checkbox extends Accessibility(LitComponent) {
  setInitialFocus() {
    this.shadowRoot.querySelector('input').focus();
  }

  /**
   * Lifecycle callback executed when the component is connected to the DOM
   *
   * @method didConnect
   */
  didConnect() {
    super.didConnect();
    if (this.checked && this.indeterminate) {
      this.checked = !this.indeterminate;
    }
  }

  /**
   * Toggles the checked and indeterminate state
   *
   * @function _toggleCheckedIndeterminate
   * @param {Map} changedProps - previous values of the changed props
   */
  _toggleCheckedIndeterminate(changedProps) {
    if (changedProps.has('indeterminate') && this.checked) {
      this.checked = !this.indeterminate;
    } else if (changedProps.has('checked') && this.indeterminate) {
      this.indeterminate = !this.checked;
    }
  }

  /**
   * Hook into the lifecycle callback to trigger the toggle event when the
   * on prop is changed.
   *
   * @function didChangeProps
   * @param {Map} changedProps - previous values of the changed props
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    this._toggleCheckedIndeterminate(changedProps);
  }

  /**
   * handle the check/uncheck of the checkbox
   *
   * @function handleEvent
   * @private
   */
  handleEvent(event) {
    if (event.type === 'click') {
      event.stopPropagation();
    } else if (
      event.type === 'change' &&
      event.target.id === 'checkbox-input'
    ) {
      this.checked = event.target.checked;
      this.indeterminate = event.target.indeterminate;
      this.bubble('change', {
        name: this.name,
        value: this.value,
        checked: this.checked,
        label: this.value,
      });
    }
  }

  /**
   * Get the value of the checkbox.
   */
  get value() {
    return this.textContent.trim();
  }

  /**
   * Set the value of the checkbox.
   */
  set value(value) {
    this.textContent = value.trim();
  }

  /**
   * Render the checkbox component. This function is called each time a
   * prop changes.
   */
  render() {
    return $` <input
        @change=${this}
        id="checkbox-input"
        type="checkbox"
        name="${this.name}"
        .checked=${this.checked}
        .indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
      />
      <label class="checkbox__label" for="checkbox-input" @click=${this}>
        <span class="checkbox__square">
          ${this.checked
            ? $`<svg
                width="10px"
                height="10px"
                viewBox="0 0 57 47"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  class="checkbox__square__tick"
                  fill="#000000"
                  fill-rule="nonzero"
                >
                  <polygon
                    id="Path"
                    transform="translate(28.500000, 23.500000) scale(-1, 1) rotate(-180.000000) translate(-28.500000, -23.500000) "
                    points="57 38.5581264 47.9093521 47 21.8321097 18.0709206 8.49026488 31.3333735 9.75661883e-14 22.897405 22.4385572 -7.19429941e-14"
                  ></polygon>
                </g>
              </svg>`
            : w}
          ${this.indeterminate
            ? $`<span class="checkbox__square__indeterminate"></span>`
            : w}
        </span>
        <slot class="checkbox__label__content"></slot>
      </label>`;
  }
}
definition('eui-checkbox', {
  style,
  props: {
    checked: { attribute: true, type: Boolean },
    disabled: { attribute: true, type: Boolean },
    indeterminate: { attribute: true, type: Boolean },
    name: { attribute: true, type: String, required: true },
  },
})(Checkbox);

const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const ESCAPE_KEY = 'Escape';
const ENTER_KEY = 'Enter';
const SPACE_KEY = ' ';
const HOME_KEY = 'Home';
const END_KEY = 'End';
const TAB_KEY = 'Tab';
const PAGE_UP_KEY = 'PageUp';
const PAGE_DOWN_KEY = 'PageDown';

var style$1 = ":host {\n  display: block;\n  cursor: pointer;\n  user-select: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([disabled]) {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n\n.menu-item-selected slot::slotted(*) {\n  --icon-color: var(--white, #fff);\n}\n\n.menu-item-selected:hover {\n  background: var(--menu-item-background-selected-hover, #0069c2);\n}\n\n.menu-item-selected:focus {\n  background: var(--menu-item-background-selected-hover, #0069c2);\n}\n\n.menu-item.menu-item-selected.highlight {\n  background: var(--menu-item-background-selected-hover, #0069c2);\n}\n\n.menu-item.highlight {\n  background: var(--menu-item-background-hover, #dcdcdc);\n}\n\n.menu-item-selected {\n  color: var(--white, #fff);\n  background: var(--menu-item-background-selected, #1174e6);\n}\n\n:host(:not(.menu-item-selected):not([disabled]):hover) {\n  background: var(--menu-item-background-hover, #dcdcdc);\n}\n\n:host([disabled]) slot[name='left']::slotted(*) {\n  cursor: default;\n}\n\n:host([disabled]) slot[name='right']::slotted(*) {\n  cursor: default;\n}\n\nspan {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.menu-item {\n  display: flex;\n  align-items: center;\n  padding: var(--space-base, 8px) var(--space-base, 8px) 7px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.menu-item span {\n  flex: auto;\n}\n\n.bold {\n  font-weight: var(--weight-bold, 700);\n}\n\nslot[name='left']::slotted(eui-icon) {\n  margin-right: var(--space-base, 8px);\n  flex: none;\n}\n\nslot[name='left']::slotted(*:not(eui-icon)) {\n  margin-right: var(--space-base, 8px);\n  width: 16px;\n  height: 16px;\n  flex: none;\n}\n\nslot[name='right']::slotted(*) {\n  margin-left: var(--space-base, 8px);\n  flex: none;\n}\n\neui-checkbox {\n  pointer-events: none;\n}\n";

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
 * @property {Boolean} disabled - disable/enable the menu item
 * @property {Boolean} indeterminate - if true sets indeterminate state in item checkbox. Private.
 * @property {String} label - set the label of the menu item
 * @property {Boolean} selected - selected state of the menu item while
 * @property {String} value - set the value of the menu item
 *
 * in either 'single' or 'multi' selection mode
 */
class MenuItem extends LitComponent {
  static get components() {
    return {
      'eui-checkbox': Checkbox,
    };
  }

  constructor() {
    super();
    this.silent = false;
  }

  /**
   * handle all click events.
   *
   * @function handleEvent
   * @param {Event} event - all click events
   */
  handleEvent(event) {
    if (event.type === 'keydown') {
      if (
        !(event.key === ENTER_KEY || event.key === SPACE_KEY) ||
        this.disabled
      ) {
        return;
      }

      if (this._type === 'multi' && !this.indeterminate) {
        this.setSelectedSilently(!this.selected);
      } else if (this._type === 'single' && !this.selected) {
        this.setSelectedSilently(true);
      }
      // Bubble event for all interactions
      this.bubble('eui-menuItem:change', { menuItem: this });

      event.preventDefault();
      return;
    }

    if (event.type === 'slotchange') {
      event.stopPropagation();
      const count = event.target.assignedNodes().length;
      event.target.assignedNodes().forEach(element => {
        if (element.size) {
          element.size = '16px'; // ensure all icons are 16px square.
        }
      });
      if (event.target.name === 'left') {
        this.bubble('eui-menuItem:left-item-count-update');
        this.shadowRoot.querySelector('span#label').style.paddingLeft = `${
          (this._paddingLeft - count) * 24
        }px`;
      }
      if (event.target.name === 'right') {
        this.bubble('eui-menuItem:right-item-count-update');
        this.shadowRoot.querySelector('span#label').style.paddingRight = `${
          (this._paddingRight - count) * 24
        }px`;
      }
      return;
    }

    if (event.type === 'click') {
      event.stopPropagation();
      if (this.disabled) {
        return;
      }

      if (this._type === 'multi' && this.indeterminate) {
        // Don't change state, let next level decide, cannot assume state of surroundings
        this.bubble('eui-menuItem:change', { menuItem: this });
      } else if (this._type === 'multi') {
        // Don't piggyback on didChangeProps, too slow and will cause race conditions at next level
        this.setSelectedSilently(!this.selected);
        this.bubble('eui-menuItem:change', { menuItem: this });
      } else if (this._type === 'single' && !this.selected) {
        // Don't piggyback on didChangeProps, too slow and will cause race conditions at next level
        this.setSelectedSilently(true);
        this.bubble('eui-menuItem:change', { menuItem: this });
      }
      // else type action or single clicked already in selected state, do nothing.

      this.bubble('eui-menuItem:click');
    }
  }

  /**
   * Highlight a menu item
   *
   * @function highlight
   * @public
   */
  highlight = () => {
    this._highlight = true;
  };

  /**
   * Un-highlight a menu item
   *
   * @function unHighlight
   * @public
   */
  unHighlight = () => {
    this._highlight = false;
  };

  /**
   * get the number of icons in the left slot.
   * @public
   */
  get leftIcons() {
    // Can be called before shadowRoot exists
    if (!this.shadowRoot) {
      return 0;
    }
    return (
      this.shadowRoot.querySelector('slot[name="left"]')?.assignedNodes()
        .length || 0
    );
  }

  /**
   * get the number of icons in the right slot.
   * @public
   */
  get rightIcons() {
    // Can be called before shadowRoot exists
    if (!this.shadowRoot) {
      return 0;
    }
    return (
      this.shadowRoot.querySelector('slot[name="right"]')?.assignedNodes()
        .length || 0
    );
  }

  /**
   * silently set the selected state of the menu item. This is used when
   * the selected state should be changed without dispatching a eui-menuItem:change event.
   * This is primarily used when doing bulk changes to selected state of menu items.
   *
   * @function setSelectedSilently
   * @param {Boolean} state - selected state of the menu item
   * @param {Boolean} indeterminate - if true sets state to indeterminate
   */
  setSelectedSilently = (state = false, indeterminate = false) => {
    if (indeterminate) {
      if (!this.indeterminate) {
        this.indeterminate = true;
        this.silent = true;
      } else if (this.selected) {
        this.silent = true;
      }
      // Correcting invalid state
      this.selected = false;
    } else {
      if (state !== this.selected || this.indeterminate) {
        this.silent = true;
      }
      this.selected = state;
      this.indeterminate = false;
    }
  };

  /**
   * Changed props are handled here.
   * The selected prop is handled.
   * Once it's changed it will bubble
   * a eui-menuItem:change event if
   * selected = true or if selected=false and it is disabled.
   * It will not bubble a eui-menuItem:change event
   * if the selected state was silently set
   *
   * @function didChangeProps
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('indeterminate')) {
      if (this.selected && this.indeterminate) {
        this.selected = !this.indeterminate;
      }
    } else if (changedProps.has('selected') && !this.silent) {
      this.bubble('eui-menuItem:change', { menuItem: this });
    }
    this.silent = false;
  }

  /**
   * Add a click listener to the host when the
   * menuItem is added to the DOM.
   *
   * @function didConnect
   */
  didConnect() {
    this.addEventListener('click', this);
    this.addEventListener('keydown', this);
    if (this.selected && this.indeterminate) {
      this.selected = !this.indeterminate;
    }
  }

  /**
   * remove the click lister from the host when the
   * menuItem is removed from the DOM.
   *
   * @function didDisconnect
   */
  didDisconnect() {
    this.removeEventListener('click', this);
    this.removeEventListener('keydown', this);
  }

  /**
   * Determine the amount of padding needed to align menu items if
   * one or more menu items in the menu have an icon on the left of
   * the menu item label. This assumes all icons add to the left
   * slot are 16px square.
   *
   * @function _leftIconCount
   * @param {Number} padding - the number of icons on the left
   * @returns the number of "paddings" needed.
   */
  _leftIconCount(padding) {
    if (this.shadowRoot.querySelector('slot[name="left"]')) {
      return padding === 0 ? padding : padding - this.leftIcons;
    }
    return padding;
  }

  /**
   * Determine the amount of padding needed to align menu items if
   * one or more menu items in the menu have an icon on the right of
   * the menu item label. This assumes all icons add to the right
   * slot are 16px square.
   *
   * @function _rightIconCount
   * @param {Number} padding - the number of icons on the right
   * @returns the number of "paddings" needed.
   */
  _rightIconCount(padding) {
    if (this.shadowRoot.querySelector('slot[name="right"]')) {
      return padding === 0 ? padding : padding - this.rightIcons;
    }
    return padding;
  }

  /**
   * Template for icons slots and item's label
   *
   * @function menuItemContents
   */
  menuItemContents() {
    const styles = {
      'padding-left': `${this._leftIconCount(this._paddingLeft) * 24}px`,
      'padding-right': `${this._rightIconCount(this._paddingRight) * 24}px`,
    };
    return $`
      <slot name="left" @slotchange=${this}></slot>
      <span id="label" style=${i(styles)}>${this.label}</span>
      <slot name="right" @slotchange=${this}></slot>
    `;
  }

  /**
   * The render function calculates the padding on the left of the label.
   * Padding is needed to align the labels of menu items if one or more
   * menu item in a menu have one or more icons in the left slot.
   */
  render() {
    return $`
      <div
        class=${o({
          'menu-item': true,
          'menu-item-selected': this.selected && this._type !== 'multi',
          highlight: this._highlight,
        })}
      >
        ${this._type === 'multi'
          ? $`<eui-checkbox
              ?checked=${l(this.selected)}
              ?indeterminate=${l(this.indeterminate)}
              name=${l(this.label)}
            ></eui-checkbox>`
          : w}
        ${this.menuItemContents()}
      </div>
    `;
  }
}

definition('eui-menu-item', {
  style: style$1,
  props: {
    disabled: { attribute: true, type: Boolean },
    indeterminate: { type: Boolean },
    label: { attribute: true, type: String },
    selected: { attribute: true, type: Boolean },
    value: { attribute: true, type: String },
    _paddingLeft: { type: Number, default: 0 },
    _paddingRight: { type: Number, default: 0 },
    _highlight: { type: Boolean },
    _type: {},
  },
})(MenuItem);

var style$2 = ":host {\n  position: fixed;\n  z-index: 1500;\n  margin: var(--space-small, 4px) 0 0;\n  width: fit-content;\n  display: none;\n}\n\n:host([show]) {\n  display: block;\n}\n\n.menu {\n  background: var(--menu-background, #fff);\n  border: solid 1px var(--menu-border, #878787);\n  text-align: left;\n  max-height: 228px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: block;\n  min-width: 60px;\n  outline: none;\n}\n\neui-menu-item:focus {\n  outline: none;\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n\n* {\n  /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}\n\nhr {\n  margin: 0;\n  border-style: none;\n  border-top: 1px solid var(--menu-hr, #878787);\n  border-bottom: 0;\n}\n\n.menu ::slotted(hr) {\n  margin: 0;\n  border-style: none;\n  border-top: 1px solid var(--menu-hr, #878787);\n  border-bottom: 0;\n}\n\n.menu ::slotted(*:focus) {\n  outline: none;\n}\n\n.menu ::slotted(*:not(hr):not(eui-menu-item)) {\n  padding: var(--space-base, 8px) var(--space-base, 8px) 7px;\n  display: block;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n}\n\ndiv.empty {\n  padding: var(--space-base, 8px) var(--space-base, 8px) 7px;\n}\n\n.hidden,\n.menu ::slotted(eui-menu-item.hidden),\n.menu eui-menu-item.hidden,\n.menu .empty.hidden {\n  display: none;\n}\n";

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
 * @property {Object} position - x,y coordinates of the top left of the menu
 * @property {Boolean} show - show/hide the menu
 * @property {String} type - type of menu [null|'single'|'multi']
 * 1. action (type = null)
 * 2. single select (type= 'single')
 * 3. multiple select (type = 'multi')
 */
class Menu extends LitComponent {
  static get components() {
    return {
      'eui-menu-item': MenuItem,
    };
  }

  constructor() {
    super();
    this._contextMenuStyle = this._contextMenuStyle.bind(this);
    this._menuItemIndex = this._menuItemIndex.bind(this);
    this._setFocus = this._setFocus.bind(this);
    this._updateMenuItemPaddingLeft =
      this._updateMenuItemPaddingLeft.bind(this);
    this._updateMenuItemPaddingRight =
      this._updateMenuItemPaddingRight.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._closeMenuWhenClickedOutside =
      this._closeMenuWhenClickedOutside.bind(this);
    this._handleKeyboard = this._handleKeyboard.bind(this);
  }

  /**
   * Set the internal menu class as a global for easy access
   */
  didUpgrade() {
    this.menu = this.shadowRoot.querySelector('.menu');
  }

  /**
   * Set the padding on each menuItem added to this menu.
   *
   * @function _updateMenuItemPaddingLeft
   * @param {[...menuItem]} menuItems - Array of MenuItems
   */
  _updateMenuItemPaddingLeft(menuItems) {
    if (menuItems && menuItems.length > 0) {
      const menuItemsWithItemsOnLeft = menuItems.map(
        menuItem => menuItem.leftIcons,
      );
      this._maxPaddingLeft = menuItemsWithItemsOnLeft.reduce((a, b) =>
        Math.max(a, b),
      );
      menuItems.forEach(menuItem => {
        menuItem._paddingLeft = this._maxPaddingLeft;
      });
    }
  }

  /**
   * Set the padding on each menuItem added to this menu.
   *
   * @function _updateMenuItemPaddingRight
   * @param {[...menuItem]} menuItems - Array of MenuItems
   */
  _updateMenuItemPaddingRight(menuItems) {
    if (menuItems && menuItems.length > 0) {
      const menuItemsWithItemsOnRight = menuItems.map(
        menuItem => menuItem.rightIcons,
      );
      this._maxPaddingRight = menuItemsWithItemsOnRight.reduce((a, b) =>
        Math.max(a, b),
      );
      menuItems.forEach(menuItem => {
        menuItem._paddingRight = this._maxPaddingRight;
      });
    }
  }

  /**
   * Handle all the events bubbled from children, keyboard and document.
   *
   * @function handleEvent
   * @param {Event} event - an event
   */
  handleEvent(event) {
    switch (event.type) {
      case 'keydown':
        this._handleKeyboard(event);
        break;

      case 'eui-menuItem:click':
        this._handleMenuItemClick(event);
        break;

      case 'eui-menuItem:change':
        this._handleMenuItemChange(event);
        break;

      case 'mousedown':
      case 'wheel':
      case 'resize':
      case 'touchend':
      case 'scroll':
      case 'touchmove':
        this._closeMenuWhenClickedOutside(event);
        break;

      case 'slotchange':
        this._handleSlotChange();
        break;
    }
  }

  /**
   * Handle eui-menuItem:click event
   *
   * @function _handleMenuItemClick
   * @param {Event} event - eui-menuItem:click event
   */
  _handleMenuItemClick = event => {
    if (this.type === 'multi') {
      this.bubble('eui-menu:click', { menuItems: this.value });
    } else {
      // action or single
      this.bubble('eui-menu:click', { menuItems: [event.target] });
      this.show = false;
    }
  };

  /**
   * Handle all keyboard control keys.
   * @function _handleKeyboard
   * @param {Event} event - keyboard key event
   */
  _handleKeyboard(event) {
    // Note: Could return any element that is in focus within the
    // parent's (dropdown/combobox) shadowRoot.
    // Slottable elements are not defined in Menu's shadow
    let { activeElement } = this.getRootNode();
    // Use the live nodeName as eui-menu may have been registered
    // with alt name for scoped elements
    if (activeElement?.nodeName === this.nodeName) {
      // Inside Menu shadow and maybe on select-all item
      // else on something else that has been applied in slot
      activeElement = activeElement.shadowRoot.activeElement;
    }
    const menuItemIndex = this._menuItemIndex(activeElement);
    switch (event.key) {
      case ARROW_UP_KEY:
        event.preventDefault();
        this._setFocus(menuItemIndex - 1, 'up');
        this._setScrollBarHeight(this.focusedChild);
        break;

      case ARROW_DOWN_KEY:
        event.preventDefault();
        this._setFocus(menuItemIndex + 1, 'down');
        this._setScrollBarHeight(this.focusedChild);
        break;

      case TAB_KEY:
      case ESCAPE_KEY:
        // eslint-disable-next-line no-case-declarations
        const emittedEvent = this.bubble(
          'eui-menu:hidden',
          {},
          { cancelable: true },
        );
        if (!emittedEvent.defaultPrevented) {
          this.show = false;
        }
        break;

      case HOME_KEY:
        event.preventDefault();
        this._setFocus(0, 'down');
        this._setScrollBarHeight(this.focusedChild);
        break;

      case END_KEY:
        event.preventDefault();
        this._setFocus(this.filteredMenuItems.length - 1, 'up');
        this._setScrollBarHeight(this.focusedChild);
        break;

      case PAGE_UP_KEY:
      case PAGE_DOWN_KEY:
        // blocks native scrolling of page
        event.preventDefault();
        break;
    }
  }

  /**
   * Handle the response to change event from select all item when indeterminate
   *
   * @function _selectAllIndeterminateChange
   * @param {Element} selectAllEl
   * @private
   */
  _selectAllIndeterminateChange = selectAllEl => {
    let clearSelection = false;
    const items = this.menuItems;
    items.forEach(menuItem => {
      if (!menuItem.disabled && menuItem.selected) {
        clearSelection = true;
        menuItem.setSelectedSilently(false);
      }
    });
    if (clearSelection) {
      // Just need to check for any selected + disabled items
      const numSelected = this.value.length;
      if (numSelected === 0) {
        selectAllEl.setSelectedSilently(false);
      } else {
        // Ensure state is correct as both selected and indeterminate could exist
        selectAllEl.setSelectedSilently(false, true);
      }
    } else {
      this._setMenuItemState(true);
      // Just check for any unselected disabled items
      if (items.length === this.value.length) {
        selectAllEl.setSelectedSilently(true);
      }
    }
  };

  /**
   * Handle the eui-menuItem:click event.
   *
   * Action menu
   * --------------------------------------------
   * bubble eui-menu:click and close menu.
   *
   * Single select menu
   * --------------------------------------------
   * filter get all menu items,
   * deselect other menu items,
   * bubble eui-menu:change and hide the menu.
   *
   * Multi select menu
   * --------------------------------------------
   * filter all selected menu items,
   * bubble eui-menu:click
   * bubble eui-menu:change
   *
   * @function _handleMenuItemChange
   * @param {Event} event
   * @private
   */
  _handleMenuItemChange = event => {
    switch (this.type) {
      case 'single':
        // Won't hit if item selected 2nd time, no change event received
        if (event.target.selected) {
          this._deselectOtherMenuItems(event.target, this.menuItems);
          // At this point target and value getter will be equal, getter has more overhead than accessing target
          this.bubble('eui-menu:change', { menuItems: [event.target] });
          this.show = false;
        } else if (this.value.length === 0) {
          // Hit when menu item selection prop change is unselected without clicking, programmatically clearing selection
          this.bubble('eui-menu:change', { menuItems: [event.target] });
        }
        // else hit when data prop changes at next level, can cause menu item selection prop to change due to lit rendering
        break;

      case 'multi':
        if (event.target.id === 'select-all') {
          const selectAllEl = event.target;
          if (selectAllEl.indeterminate) {
            this._selectAllIndeterminateChange(selectAllEl);
          } else if (selectAllEl.selected) {
            this._setMenuItemState(true);
            // If disabled + unselected exist, correct select all to indeterminate state
            if (this.menuItems.length !== this.value.length) {
              selectAllEl.setSelectedSilently(false, true);
            }
          } else {
            this._setMenuItemState(false);
            // Just need to check for any remaining selected + disabled items
            const numSelected = this.value.length;
            if (numSelected > 0) {
              event.target.setSelectedSilently(false, true);
            }
          }
        } else if (this.selectAll) {
          this._setSelectAllState();
        }
        this.bubble('eui-menu:change', { menuItems: this.value });
        break;

      default:
        // Bubbles when selection prop is changed on action menuitem or user keyboard action, no clicking
        // TODO is click right event to bubble?
        this.bubble('eui-menu:click', { menuItems: [event.target] });
        this.show = false;
    }
  };

  /**
   * Set the state of a menuItem when by clicking on selectAll menuItem
   *
   * @function _setMenuItemState
   * @private
   * @param {selected} Boolean - sets the selected state of the menuItem
   */
  _setMenuItemState(selected) {
    this.menuItems.forEach(menuItem => {
      if (!menuItem.disabled) {
        menuItem.setSelectedSilently(selected);
      }
    });
  }

  /**
   * slot changed event triggered when a new menuItem is added to the menu.
   * set the state of the "select all" menu-item if it is enabled.
   *
   * @function _handleSlotChange
   * @private
   */
  _handleSlotChange() {
    const menuItems = this.allMenuItems;
    menuItems.forEach(menuItem => {
      menuItem._type = this.type;
      menuItem._paddingLeft = this._maxPaddingLeft;
      menuItem._paddingRight = this._maxPaddingRight;
      menuItem.setAttribute('tabindex', '0');
    });
    if (this.selectAll && this.type === 'multi') {
      this._setSelectAllState();
    }
  }

  /**
   * Set the state of the "select all" menu item, if it is enabled.
   *
   * @function _setSelectAllState
   * @private
   */
  _setSelectAllState = () => {
    const selectAllMenuItem = this.shadowRoot.querySelector('#select-all');
    // Store getter values to avoid unnecessary computation on next call. Dom unchanged.
    const numMenuItems = this.menuItems.length;
    const numSelected = this.value.length;
    if (numMenuItems === numSelected) {
      selectAllMenuItem.setSelectedSilently(true);
    } else if (numSelected > 0 && numMenuItems > numSelected) {
      selectAllMenuItem.setSelectedSilently(false, true);
    } else {
      selectAllMenuItem.setSelectedSilently(false);
    }
  };

  /**
   * Close the menu if either the mousedown | wheel | resize event is
   * triggered when the mouse is outside the menu.
   *
   * @function _closeMenuWhenClickedOutside
   * @param {MouseEvent} event mousedown | wheel | resize
   */
  _closeMenuWhenClickedOutside(event) {
    if (!event.composedPath().includes(this)) {
      const emittedEvent = this.bubble(
        'eui-menu:hidden',
        {},
        { cancelable: true },
      );
      if (!emittedEvent.defaultPrevented) {
        this.show = false;
      }
    }
  }

  /**
   * Get the selected value of the menu.
   * @returns [eui-menu-item]
   */
  get value() {
    return this.menuItems.filter(child => child.selected);
  }

  /**
   * Get the menu items added to the menu
   * @returns [eui-menu-item]
   */
  get menuItems() {
    return [...this.children].filter(item => item.nodeName === 'EUI-MENU-ITEM');
  }

  /**
   * Get all the menu items. This includes menu items added to support the menu. For
   * instance the "select all" menu item is added outside the slotted content and as
   * such should be added to the entire list of menu items.
   * @returns [eui-menu-item]
   */
  get allMenuItems() {
    // get any menu-items added outside the slot
    const extraMenuItems = [...this.menu.children].filter(
      item => item.nodeName === 'EUI-MENU-ITEM',
    );
    return [...extraMenuItems, ...this.menuItems];
  }

  /**
   * Get all the filtered menu items. These are the menu items
   * that does not contain '.hidden' class.
   * '.hidden' class is added to hide the items while
   * filtering search results. Fo example, Combobox.
   * @returns [eui-menu-item]
   */
  get filteredMenuItems() {
    return this.allMenuItems.filter(item => !item.classList.contains('hidden'));
  }

  _filterDisabled() {
    return this.allMenuItems.filter(item => !item.disabled);
  }

  /**
   * Get the index of the active element in the child list.
   *
   * @function _menuItemIndex
   * @param {Element} activeElement - current active element, element with focus.
   * @private
   */
  _menuItemIndex(activeElement) {
    const focusedChildElementIndex =
      this.filteredMenuItems.indexOf(activeElement);

    if (focusedChildElementIndex === -1) {
      return -1;
    }
    return focusedChildElementIndex;
  }

  /**
   * Set focus on the item with index.
   *
   * @function _setFocus
   * @param {Integer} index - index of the item to set focus on
   * @private
   */
  _setFocus(index, direction) {
    // Block key if all items disabled
    if (!this._filterDisabled().length) {
      return;
    }

    // Store getter values to avoid unnecessary computation on next call. Dom unchanged.
    const visibleItems = this.filteredMenuItems;
    if (index < 0) {
      index = visibleItems.length - 1;
    } else if (index >= visibleItems.length) {
      index = 0;
    }
    // As per W3C spec disabled items should be focusable but are not interactable
    // Else block is all that is needed here but .focus() won't work on menuitem
    // due to current use of disabled attribute. Focus remains on previous item and
    // that item toggles on keypress. Changing disabled from attribute to prop in menuitem
    // definition would work but lose ability to declaratively disable items.
    // In agreement with UX current behaviour will be maintained.
    if (visibleItems[index].disabled) {
      index += direction === 'down' ? 1 : -1;
      this._setFocus(index, direction);
    } else {
      this.focusedChild = index;

      if (index === 0) {
        this.menu.scrollTop = 0;
      }
      const highlightedMenuItem = visibleItems[index];
      this._unHighlightAllMenuItems();
      highlightedMenuItem.highlight();
      highlightedMenuItem.focus();
    }
  }

  /**
   * set the height of the scroll bar
   * @function _setScrollBarHeight
   * @param {Integer} index - index of the menu item
   * @private
   */
  _setScrollBarHeight = index => {
    // Can be undefined if all items are filtered
    const highlightedMenuItem = this.filteredMenuItems[index];
    if (
      highlightedMenuItem &&
      highlightedMenuItem.offsetHeight + highlightedMenuItem.offsetTop >
        this.menu.offsetHeight
    ) {
      this.menu.scrollTop =
        highlightedMenuItem.offsetTop +
        highlightedMenuItem.clientHeight -
        this.menu.clientHeight;
    }
  };

  /**
   * Un-highlight all menu items.
   * This traverses over all the menu items and sets them to un-highlighted.
   *
   * @function _unHighlightAllMenuItems
   * @private
   */
  _unHighlightAllMenuItems = () => {
    this.allMenuItems.forEach(menuItem => menuItem.unHighlight());
  };

  /**
   * Deselect all menu items, except for the selectedMenuItem.
   *
   * @function _deselectOtherMenuItems
   * @param {Element} selectedMenuItem - selected menu item from the event
   * @param {Array} menuItems - array of all menu items in the menu
   * @private
   */
  _deselectOtherMenuItems(selectedMenuItem, menuItems) {
    if (selectedMenuItem) {
      menuItems.forEach(menuItem => {
        if (menuItem !== selectedMenuItem) {
          menuItem.unHighlight();
          menuItem.setSelectedSilently(false);
        }
      });
    } else {
      this._deselectAllMenuItems(menuItems);
    }
  }

  /**
   * Deselect all menu items.
   *
   * @function _deselectAllMenuItems
   * @param {Array} menuItems - Array of menu Items
   * @private
   */
  _deselectAllMenuItems(menuItems) {
    menuItems.forEach(menuItem => {
      menuItem.unHighlight();
      menuItem.setSelectedSilently(false);
    });
  }

  /**
   * Called when the menu is connected to the DOM.
   * Adds the document listeners if show prop is set to true
   *
   * @function didConnect
   */
  didConnect() {
    this.addEventListener('eui-menuItem:left-item-count-update', () => {
      this._updateMenuItemPaddingLeft(this.allMenuItems);
    });

    this.addEventListener('eui-menuItem:right-item-count-update', () => {
      this._updateMenuItemPaddingRight(this.allMenuItems);
    });
    if (this.show) {
      this._addDocumentListeners();
    }
  }

  /**
   * Called when the menu is disconnected from the DOM.
   * Removes all document listeners.
   *
   * @function didDisconnect
   */
  didDisconnect() {
    this._removeDocumentListeners();
  }

  /**
   * Add the document listeners; "mousedown","wheel",
   * "resize" and "scroll"
   * @function _addDocumentListeners
   * @private
   */
  _addDocumentListeners() {
    document.addEventListener('mousedown', this);
    document.addEventListener('wheel', this);
    window.addEventListener('resize', this);
    document.addEventListener('touchend', this);
    // start of scroll event for iOS
    document.addEventListener('touchmove', this);
    // end of scroll event for iOS
    // and
    // start/end of scroll event for other browsers
    document.addEventListener('scroll', this);
    // On detecting wheel event
    // track the position of Menu component only on Firefox browser
    // eslint-disable-next-line no-undef
    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      this.addEventListener('wheel', this._trackWheelPosition);
    }
  }

  /**
   * Remove the document listeners; "mousedown" and "wheel".
   *
   * @function _removeDocumentListeners
   * @private
   */
  _removeDocumentListeners() {
    document.removeEventListener('mousedown', this);
    document.removeEventListener('wheel', this);
    window.removeEventListener('resize', this);
    document.removeEventListener('touchend', this);
    document.removeEventListener('touchmove', this);
    document.removeEventListener('scroll', this);
    this.removeEventListener('wheel', this._trackWheelPosition);
    this._stopTrackingWheelPosition();
  }

  /**
   * Track wheel position on FireFox
   * @method _trackWheelPosition
   * @private
   */
  _trackWheelPosition = () => {
    let curPosition = null;
    if (!this.trackPositionInterval) {
      if (!this.menuIcon) {
        this.trackPositionInterval = setInterval(() => {
          // event.target gives incorrect node when menu is inside shadowdom.
          // use this.parentElement to get the dimensions of menu component parent
          // https://jira-oss.seli.wh.rnd.internal.ericsson.com/browse/CDS-8799
          curPosition = this.parentElement.getBoundingClientRect();
          if (
            this._parentElementPosition.y !==
            curPosition.top + curPosition.height
          ) {
            this.bubble('eui-menu:hidden', {}, { cancelable: true });
            this.show = false;
          }
        }, 1000 / 24);
      } else {
        this.trackPositionInterval = setInterval(() => {
          curPosition = this.menuIcon.getBoundingClientRect();
          if (this.menuIconPosition.y !== curPosition.y) {
            this.show = false;
          }
        }, 1000 / 24);
      }
    }
  };

  /**
   * Stop tracking wheel position on Firefox
   * @method _stopTrackingWheelPosition
   * @private
   */
  _stopTrackingWheelPosition = () => {
    if (this.trackPositionInterval) {
      clearInterval(this.trackPositionInterval);
      this.trackPositionInterval = null;
    }
  };

  /**
   * Changed props are handled here.
   * The props position, show and type are handled
   *
   * position
   * --------------------------------------------------------------
   * position can be an Event or an Object.
   * If the position is set as an Event (type = contextmenu)
   * we must then extract the x,y coordinates.
   *
   * If the position is set as an Event ( type != contextmenu)
   * we must then extract the x,y,width and height from the
   * event.target bounding client rect. This is the way the
   * position is set for the menu when the menu must behave
   * like it's attached to a component (button, more dropdown etc.)
   *
   * Otherwise an Object of type {x, y, height, width} is used.
   *
   * show
   * --------------------------------------------------------------
   * Show and hide the menu, remove document event listeners and
   * calculate position so the menu is not overflowing the
   * boundaries of the browser window.
   *
   * type
   * --------------------------------------------------------------
   * When the type is changed it must set the new value on all it's
   * children (eui-menu-item's). It deselects all
   * selected items when the type is changed.
   *
   * @function didChangeProps
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('position')) {
      if (this.position.type === 'contextmenu') {
        const temp = { x: this.position.x, y: this.position.y };
        this.position = { ...temp };
      } else if (this.position.type && this.position.currentTarget) {
        // eslint-disable-next-line object-curly-newline
        this.menuIcon = this.position.currentTarget;
        this.menuIconPosition = this.menuIcon.getBoundingClientRect();
        const { x, y, height, width } =
          this.position.currentTarget.getBoundingClientRect();
        // eslint-disable-next-line object-curly-newline
        this.position = { x, y: y + height, height, width };
      }
    }

    if (changedProps.has('show')) {
      if (this.show) {
        this._parentElementPosition = { ...this.position };
        this._positionMenu();
        this._addDocumentListeners();
        this.menu.focus();
        this.focusedChild = -1;
      } else {
        this._removeDocumentListeners();
        this._unHighlightAllMenuItems();
      }
    }

    if (changedProps.has('type')) {
      // eslint-disable-next-line prefer-destructuring
      const menuItems = this.menuItems;
      if (menuItems.length > 0) {
        menuItems.forEach(menuItem => {
          menuItem._type = this.type;
        });
        this._deselectAllMenuItems(menuItems);
      }
    }
  }

  /**
   * Get the width of the menu
   */
  get menuWidth() {
    return this.offsetWidth;
  }

  /**
   * Get the browser window width
   */
  get browserWidth() {
    return window.innerWidth;
  }

  /**
   * Position Menu based on available space.
   * This ensures the menu will not overflow the browser's
   * window boundaries
   * The function first calculates the "overshoot" value of both sides.
   * The overshoot value is the number of pixels the menu exceeds the boundaries of
   * the browser window.
   *
   * Overshoot on right
   * ------------------------------
   * If the menu overshoots the browser window on the right then this value will be +ve.
   * If the menu does not overshoot the browser window on the right then this value will be -ve.
   *
   * Overshoot on left
   * ------------------------------
   * If the menu overshoots the browser window on the left then this value will be -ve.
   * If the menu does not overshoot the browser window on the left then this value will be +ve.
   *
   * If the menu contains very wide menu items that causes the menu to overshoot on both sides
   * (the menu is wider than the browser window), then this function uses the right overshoot and
   * the left overshoot values to determine which side the menu should open. the side which has the
   * least overshoot value is chosen in order to minimize the amount the menu has to be resized.
   * The menu is resized so it will fit withing the boundaries of the browser window.
   *
   * @function _positionMenu
   * @private
   */
  _positionMenu() {
    this.menu.removeAttribute('style');
    this.menu.style.visibility = 'hidden';
    const buffer = 16;

    if (!this.position) {
      // eslint-disable-next-line object-curly-newline
      const { x, y, height, width } = this.getBoundingClientRect();
      // eslint-disable-next-line object-curly-newline
      this.position = { x, y, height, width };
    }

    let { x = 0, y = 0 } = this.position;
    const { width = 0, height = 0 } = this.position;

    // if this value is +ve it means it's overshooting the window width by that amount
    const rightOvershoot = x + this.menuWidth + buffer - this.browserWidth;

    // if this value is -ve it means it over shoots the window width by that amount
    const leftOvershoot = x + width - buffer - this.menuWidth;

    // determine who overshoots the least. The menu will be positioned on that
    // side and resized to fit the window. Right is the desired position.
    let alignRight = true;

    // if right overshoots, then need to determine if it's better to show menu on the left...
    if (rightOvershoot !== leftOvershoot * -1 && rightOvershoot > 0) {
      alignRight = rightOvershoot < leftOvershoot * -1;
    }

    if (alignRight) {
      // should the menu be resized to fit?
      if (rightOvershoot > 0) {
        this.menu.style.width = `${this.menuWidth - rightOvershoot}px`;
      }
    } else {
      let left = x;

      // should the menu be resized to fit?
      if (leftOvershoot < 0) {
        left = buffer;
        this.menu.style.width = `${x + width - buffer}px`;
      } else {
        left = left - this.menuWidth + width;
      }
      x = left;
    }

    let top = y;

    if (top + this.offsetHeight + 8 > window.innerHeight) {
      top -= this.offsetHeight;
      top -= height + 8;
      y = top;
    }
    this.position = {
      x,
      y,
      height,
      width,
    };
    this.menu.style.visibility = null;
  }

  /**
   * Set the position of the menu.
   *
   * @function _contextMenuStyle
   * @private
   * @returns html style for the position of the menu
   */
  _contextMenuStyle() {
    const styleString = `:host{ top: ${this.position.y}px; left: ${this.position.x}px; position: fixed; }`;
    return $`<style>
      ${styleString}
    </style>`;
  }

  render() {
    return $`
      ${this.position != null ? this._contextMenuStyle() : w}
      <div class="menu" tabindex="0" @keydown=${this}>
        ${this.selectAll && this.type === 'multi'
          ? $`<eui-menu-item
                ._type=${this.type}
                id="select-all"
                label=${this.selectAll}
                @eui-menuItem:click=${this}
                @eui-menuItem:change=${this}
              ></eui-menu-item>
              <hr />`
          : w}
        <slot
          @slotchange=${this}
          @eui-menuItem:click=${this}
          @eui-menuItem:change=${this}
        ></slot>
      </div>
    `;
  }
}

definition('eui-menu', {
  style: style$2,
  props: {
    position: { type: Object },
    selectAll: { attribute: true, type: String },
    show: { attribute: true, type: Boolean },
    type: { attribute: true, type: String },
    _maxPaddingLeft: { type: Number, default: 0 },
    _maxPaddingRight: { type: Number, default: 0 },
  },
})(Menu);

export { ARROW_UP_KEY as A, Checkbox as C, ESCAPE_KEY as E, Menu as M, SPACE_KEY as S, TAB_KEY as T, MenuItem as a, ARROW_DOWN_KEY as b, i };
