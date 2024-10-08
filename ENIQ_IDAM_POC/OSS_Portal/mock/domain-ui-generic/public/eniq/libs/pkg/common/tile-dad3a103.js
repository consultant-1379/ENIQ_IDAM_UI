import { T as TemplateComponent, d as definition } from './index-b5c18b0a.js';
import { Tooltip } from '../@eui/base/tooltip.js';
import { Icon } from '../@eui/theme/icon.js';

var template = "<div class=\"tile\">\n  <!-- Header -->\n  <div class=\"tile__header\">\n    <div class=\"tile__header__left\">\n      <slot id=\"left\" name=\"left-panel-button\"></slot>\n      <div id=\"divider-left-panel-button\" class=\"divider\" hidden></div>\n      <div class=\"tile__header__left__title\"></div>\n      <div class=\"tile__header__left__subtitle\"></div>\n    </div>\n    <div class=\"tile__header__right\">\n      <slot name=\"action\"></slot>\n      <eui-tooltip id=\"maximize-tooltip\" action>\n        <eui-icon\n          id=\"maximize-button\"\n          name=\"maximize\"\n          class=\"tile-maximize-button\"\n        ></eui-icon>\n      </eui-tooltip>\n      <div id=\"divider-right-panel-button\" class=\"divider\" hidden></div>\n      <slot id=\"right\" name=\"right-panel-button\"></slot>\n    </div>\n  </div>\n  <!-- Content -->\n  <div class=\"tile__content\">\n    <slot name=\"content\"></slot>\n  </div>\n  <!-- Footer -->\n  <div class=\"tile__footer\" hidden>\n    <slot id=\"footer\" name=\"footer\"></slot>\n  </div>\n</div>\n";

var style = ":host {\n  display: block;\n  padding: var(--space-large, 16px);\n  grid-column-start: var(--column);\n  grid-column-end: span var(--column-span);\n  grid-row-start: var(--row);\n  grid-row-end: span var(--row-span);\n  height: 100%;\n  background: var(--layer2, #fafafa);\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host(:not([maximizable])) #maximize-tooltip {\n  display: none;\n}\n\n::slotted(*[slot=\"left-panel-button\"]) {\n  align-self: center;\n}\n\n.icon {\n  font-style: normal;\n  cursor: pointer;\n}\n\n.tile {\n  display: flex;\n  overflow: hidden;\n  flex: auto;\n  flex-direction: column;\n  height: inherit;\n  gap: var(--space-base, 8px);\n}\n\n:host([maximizable]) #maximize-tooltip,\n.close-button {\n  height: 16px;\n}\n\n.tile-maximize-button,\n.close-button {\n  cursor: pointer;\n  --icon-color: var(--text, #242424);\n  opacity: 0.7;\n}\n\n.tile__header {\n  flex: 0 0 auto;\n  margin-top: 0;\n  display: flex;\n  padding-bottom: var(--space-xl, 24px);\n  align-items: flex-start;\n}\n\n.tile__header__left {\n  flex: 1;\n  text-align: left;\n  display: flex;\n  gap: var(--space-base, 8px);\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n.tile__header__right {\n  flex: none;\n  text-align: right;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  height: 1.5em;\n  gap: var(--space-base, 8px);\n}\n\n.tile__header__left ::slotted(*),\n.tile__header__right ::slotted(*) {\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n\n.tile__header__left ::slotted(*:hover),\n.tile__header__right ::slotted(*:hover) {\n  opacity: 1.0;\n}\n\n/* Setting height for tooltips/icons within action slot \n * using specific attribute names rather than element tagname\n *\n * :not([value]) prevents setting height for text-field \n * and other components using prop 'name'\n */\n .tile__header__right ::slotted(*[message]),\n .tile__header__right ::slotted(*[name]:not([value])) {\n   height: 16px;\n }\n\n.tile__header__left__title {\n  font-size: 16px;\n  display: inline-block;\n  margin-right: var(--space-base, 8px);\n  word-break: break-word;\n  line-height:1.5em;\n  font-weight: var(--weight-medium, 500);\n  color: var(--text, #242424);\n}\n\n.tile__header__left__subtitle {\n  font-size: 12px;\n  display: inline-block;\n  word-break: break-word;\n  color: var(--gray-text, #6A6A6A);\n}\n\n.tile__content {\n  display: block;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n}\n\n.tile__content slot {\n  height: 100%;\n}\n\n.tile__content--margins-none {\n  margin: 0 -16px -16px;\n}\n\n.tile__content--margins-left {\n  margin-right: -16px;\n}\n\n.tile__content--margins-right {\n  margin-left: -16px;\n}\n\n.tile--fullscreen {\n  height: calc(100vh - 195px);\n  max-width: 100%;\n  order: -1;\n}\n\n.tile__footer[hidden] {\n  display: none;\n}\n\n.tile__footer {\n  display: flex;\n  gap: var(--space-base, 8px);\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n* { /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}\n\n.tile-maximize-button:hover,\n.close-button:hover{\n  opacity: 1;\n}\n\n.divider {\n  height: 16px;\n  width: 1px;\n  opacity: 0.7;\n  background-color: var(--text, #242424);\n  align-self: center;\n}";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Tile extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
      'eui-tooltip': Tooltip,
    };
  }

  constructor() {
    super();
    this.shadowRoot.addEventListener('slotchange', this);
    this._maximizeButtonElement = this.root.querySelector('#maximize-button');
    this._maximizeTooltipElement = this.root.querySelector('#maximize-tooltip');
    this._tileTitleElement = this.root.querySelector(
      '.tile__header__left__title',
    );
    this._tileSubtitleElement = this.root.querySelector(
      '.tile__header__left__subtitle',
    );
    this._tileContentElement = this.root.querySelector('.tile__content');
    this._footerContentElement = this.root.querySelector('.tile__footer');
  }

  get footer() {
    return this.shadowRoot.querySelector('slot[name="footer"]');
  }

  get panelLeft() {
    return this.shadowRoot.querySelector('slot[name="left-panel-button"]');
  }

  get panelRight() {
    return this.shadowRoot.querySelector('slot[name="right-panel-button"]');
  }

  get loc() {
    let currentLoc;

    try {
      currentLoc = window.EUI.Localizer.loc;
    } catch (e) {
      currentLoc = {};
    }

    return {
      MAXIMIZE_TILE: currentLoc.MAXIMIZE_TILE || 'Maximize tile',
      MINIMIZE_TILE: currentLoc.MINIMIZE_TILE || 'Minimize tile',
    };
  }

  events = {
    maximizeTile: 'eui-tile:maximize',
    minimizeTile: 'eui-tile:minimize',
  };

  resetTooltip() {
    this._maximizeTooltipElement.visible = 'always-hide';
    setTimeout(() => {
      this._maximizeTooltipElement.visible = 'default';
    }, Tooltip.HIDE_ANIMATION_TIME || 200);
  }

  _hideDivider = side => {
    this.shadowRoot.querySelector(`#divider-${side}`).hidden = true;
  };

  _showDivider = side => {
    this.shadowRoot.querySelector(`#divider-${side}`).hidden = false;
  };

  _isAllHiddenInSlot = slotName => {
    const allElementInSlot = [...this.querySelectorAll(`*[slot=${slotName}]`)];
    return allElementInSlot.find(element => !element.hidden) == null;
  };

  _setDividerVisibility(side) {
    if (this._isAllHiddenInSlot(side)) {
      this._hideDivider(side);
    } else {
      this._showDivider(side);
    }
  }

  handleEvent(event) {
    if (event.target.id === 'footer' && event.type === 'slotchange') {
      if (event.target.assignedElements().length === 0) {
        this._footerContentElement.hidden = true;
      } else {
        this._footerContentElement.hidden = false;
      }
    }
    if (
      (event.target.id === 'right' || event.target.id === 'left') &&
      event.type === 'slotchange'
    ) {
      this._setDividerVisibility(event.target.name);
    }
  }

  _firstVisiblePanelButton = buttons => buttons.find(button => !button.hidden);

  /**
   * Maximize or minimize the tile.
   * @function _setTileMaximizedState
   * @private
   */
  _setTileMaximizedState = () => {
    if (this.maximize) {
      this._maximizeButtonElement.name = 'minimize';
      this._maximizeTooltipElement.message = this.loc.MINIMIZE_TILE;
      this.resetTooltip();
      setTimeout(() => {
        this.bubble(this.events.maximizeTile, { id: this.id });
      });
    } else {
      this._maximizeButtonElement.name = 'maximize';
      this._maximizeTooltipElement.message = this.loc.MAXIMIZE_TILE;
      this.resetTooltip();
      setTimeout(() => {
        this.bubble(this.events.minimizeTile);
      });
    }
  };

  /**
   * Called when the component is upgraded.
   * @method didUpgrade
   */
  didUpgrade() {
    this._maximizeButtonElement.addEventListener('click', () => {
      this._maximizeTooltipElement.visible = false;
      this.maximize = !this.maximize;
    });

    if (this.tileTitle) {
      this._tileTitleElement.innerText = this.tileTitle;
    }

    if (this.subtitle) {
      this._tileSubtitleElement.innerText = this.subtitle;
    }

    this._setTileMaximizedState();

    if (this.column) {
      this.style.setProperty('--column', this.column);
    }

    if (this.columnSpan) {
      this.style.setProperty('--column-span', this.columnSpan);
    }

    if (this.row) {
      this.style.setProperty('--row', this.row);
    }

    if (this.rowSpan) {
      this.style.setProperty('--row-span', this.rowSpan);
    }

    if (this.margins) {
      const content = this._tileContentElement;
      content.classList.add(`tile__content--margins-${this.margins}`);
    }
  }

  /**
   * Called each time a prop changes on the component
   *
   * @method didChangeProps
   * @param {Map} changedProps - Keys are the names of changed properties;
   * Values are the corresponding previous values.
   */
  didChangeProps(changedProps) {
    if (changedProps.has('tileTitle')) {
      this._tileTitleElement.innerText = this.tileTitle;
    }

    if (changedProps.has('subtitle')) {
      this._tileSubtitleElement.innerText = this.subtitle;
    }

    if (changedProps.has('maximize')) {
      this._setTileMaximizedState();
    }

    if (changedProps.has('column')) {
      this.style.setProperty('--column', this.column);
    }

    if (changedProps.has('columnSpan')) {
      this.style.setProperty('--column-span', this.columnSpan);
    }

    if (changedProps.has('row')) {
      this.style.setProperty('--row', this.row);
    }

    if (changedProps.has('rowSpan')) {
      this.style.setProperty('--row-span', this.rowSpan);
    }

    if (changedProps.has('margins')) {
      const content = this._tileContentElement;
      if (changedProps.get('margins')) {
        content.classList.remove(
          `tile__content--margins-${changedProps.get('margins')}`,
        );
      }
      content.classList.add(`tile__content--margins-${this.margins}`);
    }
  }

  didDisconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
    super.didDisconnect();
  }
}

/**
 * @property {number} column - column to place the tile when used in a grid layout.
 * @property {number} columnSpan - the number of columns to to span in a grid layout.
 * @property {string} margins - modify the margins of the content, options:
 * "none" (no margins)
 * "right" (margins on the right only)
 * "left" (margins on the left only)
 * @property {boolean} maximizable - add the maximize button.
 * @property {boolean} maximize - maximize the tile.
 * @property {number} row - row to place the tile when used in a grid layout.
 * @property {number} rowSpan - the number of rows to to span in a grid layout.
 * @property {string} subtitle - subtitle of the tile.
 * @property {string} tileTitle - title of the tile.
 */
definition('eui-tile', {
  style,
  template,
  props: {
    column: { attribute: true, type: Number, default: 0 },
    columnSpan: { attribute: true, type: Number, default: 1 },
    margins: { attribute: true, type: String },
    maximizable: { attribute: true, type: Boolean, default: false },
    maximize: { attribute: true, type: Boolean },
    row: { attribute: true, type: Number, default: 0 },
    rowSpan: { attribute: true, type: Number, default: 1 },
    subtitle: { attribute: true, type: String },
    tileTitle: { attribute: true, type: String },
  },
})(Tile);

export { Tile as T };
