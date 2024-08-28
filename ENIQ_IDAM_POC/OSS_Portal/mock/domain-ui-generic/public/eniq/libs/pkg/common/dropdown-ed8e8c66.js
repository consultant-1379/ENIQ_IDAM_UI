import { L as LitComponent, $, w } from './lit-component-430a97d9.js';
import { l } from './if-defined-fd12e107.js';
import { M as Menu, a as MenuItem, A as ARROW_UP_KEY, b as ARROW_DOWN_KEY, i } from './menu-ed843685.js';
import { d as definition } from './index-b5c18b0a.js';
import { Icon } from '../@eui/theme/icon.js';
import { A as Accessibility } from './accessibility-e96b3ad8-a1d8d2ef.js';
import { B as Button } from './button-4832c86a.js';

var style = ":host {\n  display: inline-block;\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbutton {\n  border: none;\n  background: none;\n  line-height: 0;\n  padding: 0;\n}\n\n:host(:not([disabled])) button:hover {\n  cursor: pointer;\n}\n\n:host(:not([disabled])) eui-icon {\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n:host(:not([disabled])) button:hover eui-icon {\n  opacity: 1;\n}\n\n:host(:not([disabled])) button:focus eui-icon {\n  opacity: 1;\n}\n\n:host(:not([disabled])) button:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n\n:host([disabled]) {\n  pointer-events: none;\n}\n\n:host([disabled]) eui-icon {\n  opacity: 0.6;\n  cursor: default;\n}\n";

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
 * @property {String} name - icon name.
 * @property {String} color - icon color.
 * @property {String} size - icon size.
 */
class ActionableIcon extends Accessibility(LitComponent) {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  setInitialFocus() {
    this.shadowRoot.querySelector('button').focus();
  }

  render() {
    return $`
      <button ?disabled=${this.disabled}>
        <eui-icon
          name=${l(this.name)}
          color=${l(this.color)}
          size=${l(this.size)}
        ></eui-icon>
      </button>
    `;
  }
}

definition('eui-actionable-icon', {
  style,
  props: {
    color: { attribute: true, type: String },
    disabled: { attribute: true, type: Boolean },
    name: { attribute: true, type: String, required: true },
    size: { attribute: true, type: String },
  },
})(ActionableIcon);

var style$1 = ":host {\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.dropdown {\n  display: inline-block;\n  position: relative;\n  width: fit-content;\n  line-height: initial;\n}\n\n.menu--hidden {\n  display: none;\n}\n\nlabel {\n  margin: 0;\n  width: 100%;\n}\n\n.more {\n  cursor: pointer;\n  display: flex;\n  padding-left: var(--space-base, 8px);\n}\n";

var dropdownTypes = {
  SINGLE: 'single',
  MULTI: 'multi',
  CLICK: 'click',
};

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
 * @property {Array} data - data to configure the tree
 * @property {Array} dataInnerlabel - label of dropdown button on selecting
 * checkbox menu item when data type is multi
 * @property {String} dataType - define if dropdown contains actions,
 * single select or multi select
 * @property {Boolean} disabled - disabled the dropdown button
 * @property {String} label - sets the label of dropdown button
 * @property {Boolean} more - if true, replaces dropdown button with more Icon
 * @property {String} selectAll - Set the label of the select all option.
 * Setting to null removes the select all option when data type is multi.
 * @property {String} width - allows to set fixed width for dropdown component
 */
class Dropdown extends Accessibility(LitComponent) {
  static get components() {
    return {
      'eui-actionable-icon': ActionableIcon,
      'eui-button': Button,
      'eui-icon': Icon,
      'eui-menu': Menu,
      'eui-menu-item': MenuItem,
    };
  }

  setInitialFocus() {
    this.shadowRoot.querySelector('.menu-button').focus();
  }

  /**
   * dropdown constructor.
   */
  constructor() {
    super();
    this.position = {};
    this.hide = this.hide.bind(this);
  }

  /**
   * Handle eui-menu:click event and the events bubbled from window, mouse, keyboard and document.
   *
   * @function handleEvent
   * @param {Event} event - an event
   */
  handleEvent(event) {
    if (event.type === 'eui-menu:click') {
      event.stopPropagation();
      if (this.dataType === 'single') {
        // Important when selecting same item twice, no change event received
        this.hide();
      } else if (this.dataType === 'click') {
        this.hide();
        this.bubble('eui-dropdown:change', event.detail);
      }
      this.bubble('eui-dropdown:click', event.detail);
    } else if (event.type === 'eui-menu:change') {
      event.stopPropagation();
      if (this.dataType === 'single') {
        this.hide();
      }
      this._handleMultipleDropdowns();
      this.bubble('eui-dropdown:change', event.detail);
    } else if (event.type === 'mousedown') {
      event.stopImmediatePropagation();
      if (!event.composedPath().includes(this)) {
        this.hide();
      }
    } else if (event.type === 'eui-menu:hidden') {
      event.preventDefault();
      this.hide();
    }
  }

  /**
   * handle different types of dropdown
   * @function _handleMultipleDropdowns
   * @private
   */
  _handleMultipleDropdowns = () => {
    if (this.dataType === dropdownTypes.SINGLE) {
      this._setDropdownLabel();
    } else if (this.dataType === dropdownTypes.MULTI) {
      this._setDropdownLabel();
    }
    this._syncDropdownDataProp();
  };

  /**
   * sync the data prop with respect to selected state of the menu-items
   * @function _syncDropdownDataProp
   * @private
   */
  _syncDropdownDataProp() {
    if (this.data) {
      const selectedItems = this.menu.menuItems.filter(item => item.selected);
      if (this.dataType === dropdownTypes.SINGLE && selectedItems.length > 0) {
        this.data.forEach(element => {
          element.checked = element.label === selectedItems[0].label;
        });
      } else if (
        this.dataType === dropdownTypes.MULTI &&
        selectedItems.length > 0
      ) {
        const selectedItemsLabel = new Set(
          selectedItems.map(item => item.label),
        );
        this.data.forEach(element => {
          element.checked = selectedItemsLabel.has(element.label);
        });
      } else {
        this.data.forEach(element => {
          element.checked = false;
        });
      }
      this.data = [...this.data];
    }
  }

  /**
   * Lifecycle callback executed when the component is connected to the DOM
   *
   * @method didConnect
   *
   */
  didConnect() {
    super.didConnect();
    this._dynamicLabel = this.label;
    this._visible = false;
    this.suffixes = new Map(this.dataInnerlabel);
  }

  /**
   * Lifecycle callback executed when the component is disconnected from the DOM
   *
   * remove any document event listeners added that may not have had the opportunity to be removed
   *
   * @function didDisconnect
   */
  didDisconnect() {
    document.removeEventListener('mousedown', this);
  }

  /**
   * Lifecycle hook to hook into the point where the component is upgraded.
   * This is a good time to start observing the menu for changes to its items.
   *
   * @function didUpgrade
   */
  didUpgrade() {
    if (this.data) {
      this._setDropdownLabel();
    }
    this.menu = this.shadowRoot.querySelector('eui-menu');
    // Enforce correct dataType
    this.dataType = ['single', 'multi', 'click'].includes(this.dataType)
      ? this.dataType
      : 'click';
  }

  /**
   * lifecycle hook to hook into changes to props.
   *
   * @function didChangeProps
   * @param {Object} changedProps - map containing changed props
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    // always check the value of data.
    if (this.data || changedProps.has('label')) {
      this._setDropdownLabel();
    }
    // Any unsupported value revert back to default
    if (changedProps.has('dataType')) {
      this.dataType = ['single', 'multi', 'click'].includes(this.dataType)
        ? this.dataType
        : 'click';
    }
    if (changedProps.has('dataInnerlabel')) {
      // TODO what if at least 1 key is missing?
      this.suffixes = new Map(this.dataInnerlabel);
      this._setDropdownLabel();
    }
    if (changedProps.has('disabled')) {
      if (this.disabled && this._visible === true) {
        this.hide();
      }
    }
  }

  /**
   * set the dynamic inner label of dropdown button based on the
   * number of selected menuItems
   * @function _setDropdownLabel
   * @private
   */
  _setDropdownLabel() {
    const dataItemsSelected =
      this.data && this.data.filter(item => item.checked);
    const menuItemsSelected = this.value;
    const totalMenuItems = this.menu && this.menu.menuItems;
    this._dynamicLabel = this.label;
    if (this.dataType === dropdownTypes.SINGLE) {
      if (dataItemsSelected && dataItemsSelected.length > 0) {
        this._dynamicLabel = dataItemsSelected[0].label;
      } else if (menuItemsSelected && menuItemsSelected.length > 0) {
        this._dynamicLabel = menuItemsSelected[0].label;
      }
    } else if (this.dataType === dropdownTypes.MULTI) {
      if (dataItemsSelected) {
        this._handleDataInnerLabel(dataItemsSelected.length);
      } else if (menuItemsSelected) {
        this._handleDataInnerLabel(
          menuItemsSelected.length,
          totalMenuItems.length,
        );
      }
    }
  }

  /**
   * Method that returns true if the zoom is active on a touch device
   * For desktop browsers this will always return false
   * @function isTouchZoomActive
   * @return {boolean}
   */
  isTouchZoomActive() {
    // windows.innerWidth and innerHeight varies with zoom on touch devices
    const { documentElement } = document;
    const _isZoomActive =
      documentElement.clientHeight / window.innerHeight > 1 &&
      documentElement.clientWidth / window.innerWidth > 1;
    return _isZoomActive;
  }

  /**
   * set the position of the menu when the zoom is inactive
   * @function _setMenuPosition
   * @private
   */
  _setMenuPosition() {
    const { x, y, height, width } = this.getBoundingClientRect();
    this.menu.position = {
      x,
      y: y + height,
      height,
      width,
    };
  }

  /**
   * Method for calculating the position of an element
   * in relation to the document when zoom is active on touch devices
   * Use when trying to determine the position of an element when the browser
   * on a touch device is zoomed.When zoomed document and viewport do not match
   * on touch devices, using _setMenuPosition() sets position in relation to viewport
   * This is problematic when dynamically updating css style/position of element as
   * these are applied in relation to the document.
   * https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
   *
   * @function _setMenuPositionOnZoom
   * @private
   */
  _setMenuPositionOnZoom() {
    const box = this.getBoundingClientRect();
    const { body, documentElement: docEl } = document;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft =
      window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;
    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;
    this.menu.position = {
      x: left,
      y: top + box.height,
      height: box.height,
      width: box.width,
    };
  }

  /**
   * make dropdown menu visible. Add event listener (mousedown) to the document to detect
   * if the user clicks outside of the menu.
   *
   * @method show
   * @public
   */
  show = () => {
    if (this.disabled) {
      return;
    }
    // eslint-disable-next-line no-unused-expressions
    this.isTouchZoomActive()
      ? this._setMenuPositionOnZoom()
      : this._setMenuPosition();
    if (!this._visible) {
      this._visible = true;
      document.addEventListener('mousedown', this);
    }
    const dropdownButton = this.shadowRoot.querySelector('eui-button');
    if (dropdownButton) {
      const chevronIcon = dropdownButton.buttonIcon;
      chevronIcon?.setAttribute(
        'style',
        'transform:rotate(-180deg);transition:all 0.3s ease;',
      );
    }
    this.menu.show = true;
    this.menu.style.minWidth = `${this.offsetWidth}px`;
  };

  /**
   * make dropdown menu hidden. Remove event listener (mousedown) from the
   * document when the menu is no longer visible.
   *
   * @method hide
   * @param {Boolean} setButtonFocus - true = set the button focus, false = do not set button focus
   * @public
   */
  hide(setButtonFocus = true) {
    if (this._visible) {
      if (setButtonFocus) {
        this.setInitialFocus();
      }
      const dropdownButton = this.shadowRoot.querySelector('eui-button');
      if (dropdownButton) {
        const chevronIcon = dropdownButton.buttonIcon;
        chevronIcon?.setAttribute('style', 'transition:all 0.3s ease;');
      }
      // Needed for toggling, event paths this should be already false
      this.menu.show = false;
      this._visible = false;
      document.removeEventListener('mousedown', this);
    }
  }

  /**
   * toggle the dropdown Menu
   * @method _toggleDropdownMenu
   * @private
   */
  _toggleDropdownMenu = event => {
    event.stopPropagation();
    if (this.disabled) {
      return;
    }
    // Can't be open and expect keyevents, only click
    if (this._visible) {
      this.hide(false);
    } else if (event.type === 'click') {
      this.show();
    } else if (event.type === 'keydown') {
      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        // block scrolling of page
        event.preventDefault();
        this.show();
        // W3C, must focus on first/last item, button enters blur state
        // If key held down next event scrolls menuItems
        requestAnimationFrame(() => {
          // allow menu lifecycle to execute
          // otherwise item will highlight but not have focus
          this.menu._handleKeyboard(event);
        });
      }
    }
  };

  /**
   * set dynamic Innerlabel on dropdown menu based on the number of menu items selected
   * @method _handleDataInnerLabel
   * @private
   */
  _handleDataInnerLabel = (
    selectedItemsLength,
    totalItemsLength = this.data.length,
  ) => {
    if (selectedItemsLength > 0) {
      let prefix = `${selectedItemsLength} `;
      let rule = 'other';
      if (selectedItemsLength === totalItemsLength) {
        rule = 'all';
        prefix = '';
      } else if (selectedItemsLength === 1) {
        rule = 'one';
      }
      this._dynamicLabel = `${prefix}${this.suffixes.get(rule)}`;
    }
  };

  /**
   * Get the value of the dropdown. depending on the data-type this
   * function returns either an Array.
   * data-type = 'multi/single' returns an array.
   *
   * @property value
   * @returns {Array/String}
   * @public
   */
  get value() {
    if (this.menu) {
      return this.menu.value;
    }
    return [];
  }

  /**
   * create icons within menu items
   *
   * @method _makeIconsOptions
   * @param {object[]} iconOpts - an array of icon definitions.
   * @param {string} iconOpts[].name - the name of the icon.
   * @param {string} [iconOpts[].position] - the position of the icon (left/right).
   * @param {string} [iconOpts[].color] - the color of the icon.
   * @private
   */
  _makeIconsOptions(iconOpts) {
    if (!Array.isArray(iconOpts)) {
      return w;
    }

    return iconOpts.map(({ name, position = 'left', color }) => {
      if (name == null) {
        return w;
      }

      return $`<eui-icon
        name="${name}"
        slot="${position}"
        color="${l(color)}"
      ></eui-icon>`;
    });
  }

  /**
   * create dropdown menu items
   * @method _makeDropdownOptions
   * @private
   */
  _makeDropdownOptions() {
    return this.data.map(({ disabled, label, value, checked, icons }) => {
      const parseValue = dataValue => {
        let parsedValue;

        switch (typeof dataValue) {
          case 'string':
            parsedValue = dataValue;
            break;
          case 'number':
          case 'boolean':
            parsedValue = `${dataValue}`;
            break;
        }
        return parsedValue;
      };

      let menuValue = parseValue(value);
      let menuLabel = parseValue(label);

      // fallbacks
      if (!menuValue && !menuLabel) {
        // No valid item
        return w;
      }

      // use value or label if the other one is undefined
      if (!menuValue) {
        menuValue = menuLabel;
      } else if (!menuLabel) {
        menuLabel = menuValue;
      }

      return $`<eui-menu-item
        label=${menuLabel}
        value=${menuValue}
        ?selected=${checked}
        ?disabled=${disabled}
        >${icons ? this._makeIconsOptions(icons) : w}</eui-menu-item
      >`;
    });
  }

  _moveMenuItem = event => {
    if (event.target.assignedElements().length > 0) {
      this.menu.appendChild(event.target.assignedNodes()[0]);
    }
    this._setDropdownLabel();
  };

  /**
   * Render the <eui-dropdown> component. This function is called each time a
   * prop changes.
   *
   * @method render
   */
  render() {
    const inlineWidth = this.width ? `${this.width}` : '';
    // 'click' -->  menu component type=null
    const dataType = ['single', 'multi'].includes(this.dataType)
      ? this.dataType
      : null;
    const dropdownButton = this.more
      ? $`
          <eui-actionable-icon
            tabindex="0"
            class="more menu-button"
            name="more"
            @click="${this._toggleDropdownMenu}"
            @keydown="${this._toggleDropdownMenu}"
            ?disabled=${this.disabled}
          >
          </eui-actionable-icon>
        `
      : $`
          <eui-button
            tabindex="0"
            class="menu-button"
            @click="${this._toggleDropdownMenu}"
            @keydown="${this._toggleDropdownMenu}"
            ?disabled=${this.disabled}
            ?primary=${this.primary}
            icon="chevron-down"
            reverse
            align-edge
            style=${i({ width: inlineWidth })}
            >${this._dynamicLabel}</eui-button
          >
        `;
    return $`
      <div
        class="dropdown"
        style=${i({ width: inlineWidth })}
        @eui-menu:hidden=${this}
      >
        ${dropdownButton}
        ${!this.data
          ? $`<slot
              @slotchange=${event => this._moveMenuItem(event)}
            ></slot>`
          : w}
        <eui-menu
          type=${l(dataType)}
          @eui-menu:click=${this}
          select-all=${l(this.selectAll)}
          @eui-menu:change=${this}
        >
          ${this.data ? this._makeDropdownOptions() : w}
        </eui-menu>
      </div>
    `;
  }
}

definition('eui-dropdown', {
  style: style$1,
  props: {
    data: { type: Array },
    dataInnerlabel: {
      type: Array,
      default: [
        ['one', 'item selected'],
        ['other', 'items selected'],
        ['all', 'All items selected'],
      ],
    },
    dataType: { attribute: true, type: String, default: 'click' },
    disabled: { attribute: true, type: Boolean },
    primary: { attribute: true, type: Boolean },
    label: { attribute: true, type: String, required: true },
    _dynamicLabel: { type: String },
    _visible: { type: Boolean },
    more: { attribute: true, type: Boolean },
    selectAll: { attribute: true, type: String },
    width: { attribute: true, type: String },
  },
})(Dropdown);

export { ActionableIcon as A, Dropdown as D };
