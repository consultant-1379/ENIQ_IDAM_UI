import { d as definition, T as TemplateComponent } from './index-b5c18b0a.js';
import { Icon } from '../@eui/theme/icon.js';
import { B as Button } from './button-4832c86a.js';
import { T as Tile } from './tile-dad3a103.js';
import { Tooltip } from '../@eui/base/tooltip.js';

var template = "<div class=\"eui__card\">\n  <div class=\"eui__card__header\">\n    <div class=\"eui__card__header__left\">\n      <div id=\"main-panel-title\" class=\"eui__card__title\"></div>\n    </div>\n    <div class=\"eui__card__header__right\">\n      <slot name=\"action\"></slot>\n    </div>\n  </div>\n  <div class=\"eui__card__subtitle\"></div>\n  <div class=\"eui__card__content eui__card__content--empty\">\n    <slot name=\"content\"></slot>\n  </div>\n  <div class=\"eui__card__footer\">\n    <slot name=\"footer\"></slot>\n  </div>\n</div>\n";

var style = ":host {\n  display: flex;\n  overflow-x: hidden;\n  flex-grow: 0;\n  justify-content: flex-start;\n  background-color: var(--card-color-background, #fff);\n  cursor: pointer;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  margin: var(--space-base, 8px);\n}\n\n:host(:hover:not([selected])) .eui__card {\n  border: 1px solid var(--card-color-border-hover, #6A6A6A);\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host(:not([subtitle])) .eui__card__subtitle {\n  display: none;\n}\n\n:host([selected]) .eui__card {\n  border: 1px solid var(--blue, #1174E6);\n}\n\n:host(.sortable-chosen) {\n  z-index: 9999 !important;\n  background-color: var(--card-color-background, #fff);\n  opacity: 1;\n}\n\n:host(.sortable-ghost) {\n  background-color: var(--card-color-background, #fff);\n  opacity: 1 !important;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';\n}\n\n.eui__card {\n  width: 100%;\n  padding: var(--space-large, 16px);\n  height: auto;\n  flex-direction: column;\n  display: flex;\n  border: 1px solid var(--card-color-border, #878787);\n}\n\n.eui__card__header {\n  flex: 0 0 auto;\n  margin-top: 0;\n  display: flex;\n}\n\n.eui__card__header__left {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n  text-align: left;\n}\n\n.eui__card__header__right {\n  flex: none;\n  text-align: right;\n  display: flex;\n  align-items: center;\n}\n\n.eui__card__header__right ::slotted(*) {\n  font-size: var(--space-large, 16px);\n  font-weight: bold;\n  margin: 0 0 0 var(--space-base, 8px);\n  opacity: 0.7;\n}\n\n.eui__card__header__right ::slotted(*:hover) { \n  opacity: 1;\n}\n\n.eui__card__drag__icon {\n  margin: var(--space-base, 8px);\n}\n\n.eui__card__title {\n  color: var(--text, #242424);\n  font-size: var(--space-large, 16px);\n  display: flex;\n  align-items: center;\n  margin-right: var(--space-base, 8px);\n  word-break: break-word;\n  font-weight: var(--weight-medium, 500);\n  height: var(--space-xl, 24px);\n}\n\n.eui__card__subtitle {\n  margin-top: var(--space-small, 4px);\n  font-size: var(--btn-font-size, 14px);\n  color: var(--gray-text, #6a6a6a);\n  display: inline-block;\n  word-break: break-word;\n}\n\n.eui__card__content {\n  color: var(--text, #242424);\n  padding-top: var(--space-large, 16px);\n  flex: 1;\n  display: flex;\n  flex-flow: column;\n}\n\n.eui__card__content--empty {\n  display: none;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Card extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    this.titleElement = this.root.querySelector('.eui__card__title');
    this.subtitleElement = this.root.querySelector('.eui__card__subtitle');
    this.contentElement = this.root.querySelector('.eui__card__content');
    this.headerLeft = this.root.querySelector('.eui__card__header__left');
    this.addEventListener('click', () => {
      this.selected = !this.selected;
    });
  }

  didRender() {
    this.compatElementUpdated();
  }

  /**
   * Observe elements being added and removed from the content slot.
   * When there is no content added, hide the content.
   *
   * @function _observeContentSlot
   * @private
   */
  _observeContentSlot = () => {
    const config = { childList: true, subtree: true };

    const hideContent = () => {
      if (this.querySelector('[slot="content"]')) {
        this._showContentArea();
      } else {
        this._hideContentArea();
      }
    };

    if (!this.observer) {
      // Create an observer instance to observe elements added and deleted from the content slot.
      this.observer = new window.MutationObserver(() => {
        hideContent();
      });
    }

    hideContent();

    // Start observing the Card mutations
    this.observer.observe(this, config);
  };

  /**
   * Add or remove draggable icon according the attribute
   *
   * @function _addDraggableIcon
   * @private
   */
  _updateDraggableIcon() {
    if (this.drag) {
      this._addDraggableIcon();
    } else {
      this._removeDraggableIcon();
    }
  }

  /**
   * Add draggable icon.
   *
   * @function _addDraggableIcon
   * @private
   */
  _addDraggableIcon() {
    const oldIcon = this.headerLeft.querySelector('.eui__card__drag__icon');

    if (oldIcon) {
      return;
    }

    const icon = this.createElement('eui-icon');
    icon.setAttribute('name', 'drag-handle');
    icon.classList.add('eui__card__drag__icon');
    this.headerLeft.insertBefore(icon, this.headerLeft.childNodes[0]);
  }

  /**
   * Remove draggable icon.
   *
   * @function _removeDraggableIcon
   * @private
   */
  _removeDraggableIcon() {
    const icon = this.headerLeft.querySelector('.eui__card__drag__icon');
    if (icon) {
      icon.parentNode.removeChild(icon);
    }
  }

  /**
   * Hide the content area of the card.
   *
   * @function _hideContentArea
   * @private
   */
  _hideContentArea = () => {
    this.contentElement.classList.add('eui__card__content--empty');
  };

  /**
   * Show the content are of the card.
   *
   * @function _showContentArea
   * @private
   */
  _showContentArea = () => {
    this.contentElement.classList.remove('eui__card__content--empty');
  };

  /**
   * Start observing the content slot
   *
   * @function didConnect
   */
  didConnect() {
    super.didConnect();
    this._observeContentSlot();
    this._updateDraggableIcon();
  }

  /**
   * Stop observing the content slot
   *
   * @function didDisconnect
   */
  didDisconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
    super.didDisconnect();
  }

  /**
   * Initially setup the card layout.
   */
  didUpgrade() {
    if (this.cardTitle) {
      this.titleElement.innerText = this.cardTitle;
    }

    if (this.subtitle) {
      this.subtitleElement.innerText = this.subtitle;
    }
  }

  /**
   * Called when props have changed.
   * @param {Map} changedProps - Keys are the names of changed properties;
   * Values are the corresponding previous values.
   */
  didChangeProps(changedProps) {
    if (changedProps.has('cardTitle')) {
      this.titleElement.innerText = this.cardTitle;
    }

    if (changedProps.has('subtitle')) {
      this.subtitleElement.innerText = this.subtitle;
    }

    if (changedProps.has('drag')) {
      this._updateDraggableIcon();
    }
  }
}

/**
 * @property {String} cardTitle - the title of the card
 * @property {Boolean} selected - the selected state of the card
 * @property {String} subtitle - the subtitle of the card
 * @property {Boolean} drag - indicate if card is draggable
 */
definition('eui-card', {
  style,
  template,
  props: {
    cardTitle: { attribute: true, type: String },
    selected: { attribute: true, type: Boolean },
    subtitle: { attribute: true, type: String },
    drag: { attribute: true, type: Boolean },
  },
})(Card);

var template$1 = "<div class=\"flyout-panel__outer\"></div>\n<div class=\"flyout-panel right\">\n  <div class=\"panel\">\n    <!-- Header -->\n    <div class=\"panel__header\">\n      <div class=\"panel__header__left\">\n        <div class=\"panel__header__left__title\"></div>\n      </div>\n      <div class=\"panel__header__right\">\n        <eui-icon name=\"cross\" class=\"close-panel\"></eui-icon>\n      </div>\n    </div>\n    <!-- Content -->\n    <div class=\"panel__content\">\n      <slot name=\"content\"></slot>\n    </div>\n    <!-- Footer -->\n    <div class=\"panel__footer\">\n      <slot name=\"footer\"></slot>\n    </div>\n  </div>\n</div>\n";

var style$1 = ":host {\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n  color: var(--text, #242424);\n}\n\n:host([show]) {\n  visibility: visible;\n  pointer-events: all;\n  transition: visibility 0.18s linear;\n}\n\n:host(:not([show])) {\n  transition: visibility 0.18s linear 0.4s;\n}\n\n:host .flyout-panel__outer {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background-color: transparent;\n  opacity: 0;\n}\n\n:host([show]) .flyout-panel__outer {\n  opacity: 1;\n  background-color: var(--dialog-overlay, rgba(0, 0, 0, 0.3));\n  transition: opacity 0.18s ease-in-out 0s, background-color 0.18s ease-in-out 0s;\n}\n\n:host(:not([show])) .flyout-panel__outer {\n  background-color: transparent;\n  transition: opacity 0.18s ease-in-out 0.18s, background-color 0.18s ease-in-out 0.18s;\n}\n\n.flyout-panel {\n  top: var(--appbar-height, 48px);\n  padding: var(--space-large, 16px);\n  background-color: var(--dialog-background, #fafafa);\n  box-sizing: border-box;\n  width: var(--width, 400px);\n  height: calc(100vh - var(--appbar-height, 48px));\n  position: fixed;\n  z-index: 1000;\n}\n\n.click-to-close {\n  cursor: pointer;\n}\n\n/* POSITION - right */\n.right {\n  right: calc(0px - var(--width, 400px));\n  transition: right 0.1s linear;\n}\n\n/* SHOW - right */\n.right.show {\n  right: 0;\n}\n\n/* POSITION - left */\n.left {\n  left: calc(0px - var(--width, 400px));\n  transition: left 0.1s linear;\n}\n\n/* SHOW - left */\n.left.show {\n  left: 0;\n}\n\n.panel {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.panel__header {\n  box-sizing: border-box;\n}\n\n.panel__content {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 90px) !important;\n  box-sizing: border-box;\n}\n\n.panel__footer {\n  text-align: right;\n  box-sizing: border-box;\n}\n.panel__footer[hidden] {\n  display: none;\n}\n\n:host(.hide-content) .panel__content {\n  display: none;\n}\n\n.icon {\n  font-style: normal;\n  cursor: pointer;\n}\n\n.icon::before {\n  content: '\\E961';\n  padding-left: var(--space-base, 8px);\n  font-family: 'Ericsson Icons' !important;\n  vertical-align: middle;\n}\n\n.close-panel {\n  margin: 0 0 0 var(--space-base, 8px);\n  cursor: pointer;\n}\n\n.panel__header {\n  flex: 0 0 auto;\n  margin-top: 0;\n  display: flex;\n  padding-bottom: var(--space-xl, 24px);\n}\n\n.panel__header__left {\n  flex: 1;\n  text-align: left;\n}\n\n.panel__header__right {\n  flex: none;\n  text-align: right;\n  font-size: 16px;\n}\n\n.panel__header__right ::slotted(*) {\n  margin: 0 0 0 var(--space-base, 8px);\n  height: 16px;\n  cursor: pointer;\n}\n\n.panel__header__left__title {\n  font-size: 16px;\n  display: inline-block;\n  margin-right: var(--space-base, 8px);\n}\n\n.panel__content {\n  display: block;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n}\n\n.panel__content slot {\n  height: 100%;\n}\n\n.panel__footer {\n  margin-top: var(--space-base, 8px);\n}\n\n.panel__footer ::slotted(*) {\n  margin: 0 var(--space-base, 8px) 0 0;\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n* { /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class FlyoutPanel extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    // function bindings
    this._addEventListeners = this._addEventListeners.bind(this);
    this._addWindowEventListeners = this._addWindowEventListeners.bind(this);
    this._removeEventListeners = this._removeEventListeners.bind(this);
    this._removeWindowEventListeners =
      this._removeWindowEventListeners.bind(this);
    this._onFooterSlotChange = this._onFooterSlotChange.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._handleWindowResize = this._handleWindowResize.bind(this);

    // elements
    this.flyoutPanel = this.shadowRoot.querySelector('.flyout-panel');
    this.flyoutPanelTitle = this.shadowRoot.querySelector(
      '.panel__header__left__title',
    );
    this.closeButton = this.shadowRoot.querySelector('.close-panel');
    this.flyoutPanelFooter = this.shadowRoot.querySelector('.panel__footer');

    this.flyoutPanel.addEventListener('transitionend', () => {
      if (this.show) {
        this.bubble('eui-flyout-panel:open');
      } else if (!this.show) {
        this.bubble('eui-flyout-panel:closed');
      }
    });

    // slots
    this.flyoutPanelFooterSlot = this.shadowRoot.querySelector(
      'slot[name="footer"]',
    );
  }

  get footer() {
    return this.shadowRoot.querySelector('.panel__footer');
  }

  get overlay() {
    return this.shadowRoot.querySelector('.flyout-panel__outer');
  }

  /**
   * Add / remove close action from the overlay. This allows the user
   * to close the flyout by clicking outside the panel.
   * Add / remove listener for ESC key to close the panel.
   *
   * @function _addCloseAction
   * @param {Boolean} state - click action on/off
   * @private
   */
  _addCloseAction = state => {
    if (state) {
      if (this.show) {
        window.addEventListener('keydown', this);
      }
      this.overlay.addEventListener('click', this);
      this.overlay.classList.add('click-to-close');
    } else {
      window.removeEventListener('keydown', this);
      this.overlay.removeEventListener('click', this);
      this.overlay.classList.remove('click-to-close');
    }
    this.closeButton.hidden = !state;
  };

  /**
   * Add the necessary event listeners by attaching them to the relevant DOM elements.
   *
   * @function _addEventListeners
   * @private
   */
  _addEventListeners() {
    this._onFooterSlotChange();
    this.flyoutPanelFooterSlot.addEventListener(
      'slotchange',
      this._onFooterSlotChange,
      {
        passive: true,
      },
    );
    this.closeButton.addEventListener(
      'click',
      () => {
        this.show = false;
      },
      { passive: true },
    );

    this._addCloseAction(true);
  }

  /**
   * Remove the necessary event listeners.
   *
   * @function _removeEventListeners
   * @private
   */
  _removeEventListeners() {
    this.flyoutPanelFooterSlot.removeEventListener(
      'slotchange',
      this._onFooterSlotChange,
      {
        passive: true,
      },
    );
    this.closeButton.removeEventListener(
      'click',
      () => {
        this.show = false;
      },
      { passive: true },
    );
    this._removeWindowEventListeners();
  }

  /**
   * Add the resize event listener to the window object.
   * Also resizing the FlyoutPanel before it gets displayed
   *
   * @function _addWindowEventListeners
   * @private
   */
  _addWindowEventListeners() {
    this._handleResize();
    window.addEventListener('resize', this, {
      passive: true,
      useCapture: true,
    });
    if (this.closeButton.hidden === false) {
      window.addEventListener('keydown', this);
    }
  }

  /**
   * Remove the resize event listener from the window object.
   *
   * @function _removeWindowEventListeners
   * @private
   */
  _removeWindowEventListeners() {
    window.removeEventListener('resize', this, {
      passive: true,
      useCapture: true,
    });
    window.removeEventListener('keydown', this);
  }

  /**
   * Determines if the close icon should be visible or not.
   *
   * @function _onFooterSlotChange
   * @private
   */
  _onFooterSlotChange() {
    if (!this.querySelector('[slot="footer"]') && this.flyoutPanelFooter) {
      this.footer.hidden = true;
      if (!this.panelClose) {
        this._addCloseAction(true);
      }
    } else {
      this.footer.hidden = false;
      if (!this.panelClose) {
        this._addCloseAction(false);
      }
    }
  }

  /**
   * This method handles all the resize events and throttles them
   * by handling the resize every 200ms.
   *
   * @method _handleWindowResize
   * @private
   */
  _handleWindowResize() {
    let lastCallTime = 0;
    const delay = 200;
    const throttleHandler = () => {
      const currentCallTime = new Date().getTime();
      if (currentCallTime - lastCallTime < delay) {
        return;
      }
      lastCallTime = currentCallTime;
      this._handleResize();
    };
    throttleHandler();
  }

  /**
   * Resizes the flyout panel depending on the width prop and viewport width
   *
   * @method _handleResize
   * @private
   */
  _handleResize() {
    const { clientWidth } = document.documentElement;
    if (clientWidth > this.width) {
      this.flyoutPanel.style.setProperty('--width', `${this.width}px`);
    } else {
      this.flyoutPanel.style.setProperty('--width', `${clientWidth}px`);
    }
  }

  handleEvent(event) {
    if (event.type === 'resize') {
      this._handleWindowResize();
    }
    if (event.type === 'click') {
      this.show = false;
    }
    if (event.type === 'keydown' && event.key === 'Escape') {
      this.show = false;
    }
  }

  /**
   * Called once when the flyout-panel component connects to the DOM.
   * The panel is hidden by default, and event listeners added.
   *
   * @function didConnect
   */
  didConnect() {
    this._addEventListeners();
  }

  /**
   * @method didUpgrade
   */
  didUpgrade() {
    this.flyoutPanelTitle.innerText = this.panelTitle;
    this._setFlyoutWidth();
    this._guardFlyoutPosition();
    if (this.position === 'left') {
      this.flyoutPanel.classList.remove('right');
      this.flyoutPanel.classList.add('left');
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
    if (changedProps.has('panelTitle')) {
      this.flyoutPanelTitle.innerText = this.panelTitle;
    }

    if (changedProps.has('width')) {
      this._setFlyoutWidth();
    }

    if (changedProps.has('panelClose')) {
      if (this.panelClose) {
        this._addCloseAction(true);
      } else {
        const isFooterButtons =
          this.querySelectorAll('[slot="footer"]').length > 0;
        this._addCloseAction(!isFooterButtons);
      }
    }

    if (changedProps.has('position')) {
      this._guardFlyoutPosition();
      if (this.position === 'left') {
        this.flyoutPanel.classList.remove('right');
        this.flyoutPanel.classList.add('left');
      } else if (this.position === 'right') {
        this.flyoutPanel.classList.remove('left');
        this.flyoutPanel.classList.add('right');
      }
    }

    if (changedProps.has('show')) {
      if (this.show) {
        this._addWindowEventListeners();
        setTimeout(() => {
          // show the flyout panel after 100ms.
          // This is when both the position and the show props
          // are set at the same time, which messes up the animation.
          // Adding the timout allows the postion to be set BEFORE
          // the panel is animated.
          this.flyoutPanel.classList.add('show');
        }, 100);
      } else {
        this._removeWindowEventListeners();
        this.flyoutPanel.classList.remove('show');
      }
    }
  }

  /**
   * Set the flyout width. There is a safeguard in place
   * to prevent the width of the flyout to be less than 320px.
   *
   * @function _setFlyoutWidth
   * @private
   */
  _setFlyoutWidth = () => {
    if (this.width < 320) {
      this.width = 320;
    }
    this.flyoutPanel.style.setProperty('--width', `${this.width}px`);
  };

  /**
   * Add a safeguard, 'left'/'right' are the only valid choices.
   *
   * @function _guardFlyoutPosition
   * @private
   */
  _guardFlyoutPosition = () => {
    if (this.position !== 'left' && this.position !== 'right') {
      this.position = 'right';
      this.flyoutPanel.classList.add('right');
    }
  };

  /**
   * Called once when the flyout-panel component disconnects from the DOM.
   * All event listeners are removed
   *
   * @function didDisconnect
   */
  didDisconnect() {
    this._removeEventListeners();
  }
}

/**
 * @property {Boolean} panelClose - always show the close panel button on the top right.
 * @property {String} panelTitle - title of the flyout panel.
 * @property {Number} width - width of the flyout panel.
 * @property {String} position - which side of the viewport the panel should be positioned.
 * @property {String} show - prop that indicates visibility of the flyout panel
 */
definition('eui-flyout-panel', {
  style: style$1,
  template: template$1,
  props: {
    panelClose: { attribute: true, type: Boolean },
    panelTitle: { attribute: true, type: String },
    width: { attribute: true, type: Number, default: 400 },
    position: { attribute: true, type: String, default: 'right' },
    show: { attribute: true, type: Boolean },
  },
})(FlyoutPanel);

var style$2 = ":host {\n  display: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host([selected]) {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  overflow-y: auto;\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n* {\n  /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}\n";

var template$2 = "<div class=\"content\">\n  <slot></slot>\n</div>\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Step extends TemplateComponent {
  /**
   * Special call for shadyDOM.
   */
  didRender() {
    this.compatElementUpdated();
  }

  /**
   * called when the component is connected
   */
  didConnect() {
    this.bubble('eui-wizard-step:update');
    this.wizard = this.parentNode;
  }

  /**
   * Called each time a prop changes on the component
   *
   * @param Map} changedProps - Keys are the names of changed properties;
   * Values are the corresponding previous values.
   */
  didChangeProps(changedProps) {
    if (changedProps.has('valid')) {
      this.bubble('eui-wizard-step:valid');
    }

    if (changedProps.has('selected')) {
      // Set scrollbar position to 0 on each step
      this.shadowRoot.querySelector('.content').scrollTop = 0;
    }
  }

  /**
   * Called when the component is disconnected/removed from the DOM
   */
  didDisconnect() {
    if (typeof this.wizard.bubble === 'function') {
      this.wizard.bubble('eui-wizard-step:update');
    }
  }
}

/**
 * @property {Boolean} completed - True if user pressed "next" button in this step
 * @property {Boolean} selected - Is this step shown now
 * @property {String} stepTitle - The title of the step
 * @property {Boolean} valid - Is this step valid
 */
definition('eui-wizard-step', {
  style: style$2,
  template: template$2,
  props: {
    completed: { attribute: true, type: Boolean },
    selected: { attribute: true, type: Boolean },
    stepTitle: { attribute: true, type: String },
    valid: { attribute: true, type: Boolean },
  },
})(Step);

var style$3 = ":host {\n  position: relative;\n  text-align: center;\n  width: 100%;\n  max-width: 280px;\n  overflow: hidden;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([current]) {\n  cursor: default;\n}\n\n:host([completed]) {\n  cursor: pointer;\n}\n\n.sphere {\n  position: relative;\n  width: 22px;\n  height: 22px;\n  border-radius: 18px;\n  border: 1px solid var(--wizard-line-not-completed, #C8C8C8);\n  margin: 0px auto;\n  background: var(--wizard-step-not-completed-background, #f2f2f2);\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n:host([current]) .sphere,\n:host([completed]) .sphere {\n  border: 1px solid var(--wizard-step-completed-border, #242424);\n  background: var(--wizard-step-completed-background, #fff);\n}\n\n:host(:hover[completed]) .sphere {\n  border: 1px solid var(--wizard-line-completed-hover, #1174e6);\n  background: var(--wizard-step-completed-background-hover, #f2f2f2);\n}\n\n.sphere svg {\n  margin-left: -1px;\n  stroke: var(--wizard-line-completed, #242424);\n  stroke-width: var(--wizard-symbols-stroke-width, 40px);\n  width: 14px;\n  height: 14px;\n  display: none;\n}\n\n.sphere svg[name='cross'] {\n  width: 10px;\n  height: 10px;\n  margin-left: 0;\n}\n\n:host([completed][valid]) svg[name='check'] {\n  display: inline-block;\n}\n\n:host([completed]:not([valid])) svg[name='cross'] {\n  display: inline-block;\n}\n\n:host(:hover[completed]) .sphere svg {\n  stroke: var(--wizard-line-completed-hover, #1174e6) !important;\n}\n\n.prevbar,\n.nextbar {\n  position: absolute;\n  background: var(--wizard-line-not-completed, #C8C8C8);\n  width: 100%;\n  height: 1px;\n  top: 13px;\n}\n\n:host([completed]) .prevbar,\n:host([completed]) .nextbar,\n:host([current]) .prevbar {\n  background: var(--wizard-line-completed, #242424);\n}\n\n.prevbar {\n  right: 50%;\n}\n\n:host([first]) .prevbar {\n  display: none;\n}\n\n.nextbar {\n  left: 50%;\n}\n\n:host([last]) .nextbar {\n  display: none;\n}\n\n.description-container {\n  margin-top: var(--space-base, 8px);\n  color: var(--wizard-step-not-completed-description, #6a6a6a);\n  height: 17px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n:host([completed]) .description-container {\n  color: var(--wizard-line-completed, #242424);\n}\n\n:host([current]) .description-container {\n  color: var(--wizard-line-completed, #242424);\n  font-weight: var(--weight-medium, 500);\n}\n\n:host(.vertical) {\n  display: flex;\n  padding-bottom: var(--space-xl, 24px);\n  width: auto;\n  min-height: var(--space-xl, 24px);\n}\n\n:host(.vertical) .sphere {\n  margin: 0px;\n  min-width: 22px;\n}\n\n:host(.vertical) .prevbar,\n:host(.vertical) .nextbar {\n  height: 100%;\n  width: 1px;\n  left: 12px;\n}\n\n:host(.vertical) .prevbar {\n  top: unset;\n  bottom: 35px;\n}\n\n:host(.vertical) .nextbar {\n  bottom: unset;\n}\n\n:host(.vertical) .description-container {\n  margin-top: 0px;\n  padding-top: 4px;\n  padding-left: var(--space-base, 8px);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n";

var template$3 = "<div class=\"prevbar\"></div>\n<div class=\"nextbar\"></div>\n<div class=\"sphere\">\n  <svg class=\"icon\" name=\"check\" viewBox=\"0 0 102.4 102.4\">\n    <path\n      transform=\"scale(0.1,-0.1) translate(0,-960)\"\n      d=\"M924.672 691.627l-47.808 42.368-484.224-546.816-236.096 235.968-45.184-45.12 284.096-283.968 529.216 597.568z\"\n    ></path>\n  </svg>\n  <svg class=\"icon\" name=\"cross\" viewBox=\"0 0 102.4 102.4\">\n    <path\n      transform=\"scale(0.1,-0.1) translate(0,-960)\"\n      d=\"M151.936 21.035l360.576 360.64 359.488-360.832 45.312 45.12-359.552 360.896 358.592 358.592-45.248 45.248-358.528-358.528-358.976 360.32-45.312-45.12 359.040-360.384-360.64-360.704 45.248-45.248z\"\n    ></path>\n  </svg>\n</div>\n<div class=\"description-container\">\n  <span id=\"description-content\">First step</span>\n</div>\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class HeaderStep extends TemplateComponent {
  /**
   * Initially setup the steps description.
   */
  didUpgrade() {
    if (this.description) {
      this._updateTitle(this.description);
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
    if (changedProps.has('description')) {
      this._updateTitle(this.description);
    }
  }

  /**
   * Updating header steps' title
   * @param {String} description
   */
  _updateTitle(description) {
    const descriptionContent = this.shadowRoot.querySelector(
      '#description-content',
    );
    descriptionContent.innerText = description;
  }
}

/**
 * @property {Boolean} completed - True if user pressed "next" button in this step
 * @property {Number} current - Step number/position
 * @property {String} description - The description of the step
 * @property {Boolean} first - Is this step first
 * @property {Boolean} hidden - the visibility of the step indicator
 * @property {Boolean} last - Is this step last
 * @property {Boolean} valid - Is this step valid
 */
definition('eui-wizard-header-step', {
  style: style$3,
  template: template$3,
  props: {
    completed: { attribute: true, type: Boolean },
    current: { attribute: true, type: Boolean },
    description: { attribute: true, type: String, default: '' },
    first: { attribute: true, type: Boolean },
    hidden: { attribute: true, type: Boolean },
    last: { attribute: true, type: Boolean },
    valid: { attribute: true, type: Boolean, default: true },
  },
})(HeaderStep);

var style$4 = ":host {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n@media only screen {\n  :host(.mobile-view) {\n    flex-direction: row;\n    flex-flow: row;\n    align-items: stretch;\n  }\n\n  :host(.mobile-view) .wizard-steps {\n    /* The total width of vertical steps area is 300px\n       300px = 279px content + 1px border + 4px padding + 16px margin\n    */\n    width: 279px;\n    height: auto;\n    border-right: solid 1px var(--input-border-hover, #6a6a6a);\n    border-bottom: 0px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding-bottom: 0;\n    margin-top: 0;\n    margin-right: var(--space-large, 16px);\n    padding-right: var(--space-small, 4px);\n  }\n\n  :host(.mobile-view) .steps {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    flex-direction: column;\n    overflow-y: auto;\n  }\n\n  :host(.mobile-view) .wizard-content-footer {\n    width: calc(100% - 300px);\n    height: auto;\n  }\n\n  :host(.mobile-view) .wizard-content {\n    padding: 0;\n  }\n}\n\n:host([maximize]) {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n:host(:not([save])) eui-button#save {\n  display: none;\n}\n\n.wizard-steps {\n  width: 100%;\n  height: auto;\n  margin-top: var(--space-large, 16px);\n  padding-bottom: var(--space-large, 16px);\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid var(--tile-divider,rgb(176, 176, 176));\n}\n\n.wizard-steps .arrow-left-holder,\n.wizard-steps .arrow-right-holder {\n  height: 47px;\n  margin-left: 0;\n  margin-top: -4px;\n}\n\n.wizard-steps .arrow-left-holder {\n  margin-right: var(--space-xl, 24px);\n}\n\n.wizard-steps .arrow-right-holder {\n  margin-left: var(--space-xl, 24px);\n}\n\n.wizard-steps eui-icon {\n  --icon-color: var(--wizard-footer-line,#c8c8c8);\n  cursor: pointer;\n}\n\n.wizard-steps eui-icon:hover {\n  --icon-color: var(--wizard-line-completed, #242424);\n}\n\n.steps {\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  overflow: hidden;\n  padding-top: var(--space-small, 4px);\n}\n\n.wizard-content-footer {\n  width: 100%;\n  height: calc(100% - 84px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.wizard-content {\n  padding: var(--space-xl, 24px) 0;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.wizard-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--space-large, 16px) 0 0;\n  width: 100%;\n  border-top: 1px solid var(--wizard-footer-line,#c8c8c8);\n}\n\n.wizard-footer eui-button {\n  min-width: 100px;\n}\n\n.wizard-footer eui-button.minimize {\n  min-width: auto;\n}\n\n.wizard-footer .item {\n  display: flex;\n  gap: var(--space-base, 8px);\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.hidden {\n  display: none !important;\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n* {\n  /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}\n";

var template$4 = "<div class=\"wizard-steps\">\n  <div class=\"arrow-left-holder\">\n    <eui-icon\n      id=\"left\"\n      class=\"arrow-left\"\n      name=\"arrow-left\"\n      size=\"26px\"\n    ></eui-icon>\n  </div>\n  <div class=\"steps\"></div>\n  <div class=\"arrow-right-holder\">\n    <eui-icon\n      id=\"right\"\n      class=\"arrow-right\"\n      name=\"arrow-right\"\n      size=\"26px\"\n    ></eui-icon>\n  </div>\n</div>\n<div class=\"wizard-content-footer\">\n  <div class=\"wizard-content\">\n    <slot></slot>\n  </div>\n  <div class=\"wizard-footer\">\n    <div class=\"item\">\n      <eui-button id=\"cancel\"></eui-button>\n      <eui-button id=\"save\"></eui-button>\n    </div>\n    <div class=\"item\">\n      <eui-button id=\"previous\" icon=\"arrow-left\"></eui-button>\n      <eui-button id=\"next\" icon=\"arrow-right\" primary></eui-button>\n      <eui-button id=\"finish\" primary></eui-button>\n    </div>\n  </div>\n</div>\n";

class ScrollCalculator {
  elementLength = 0;

  scrollStart = 0;

  scrollEnd = 0;

  visibleArray = [];

  hiddenArray = [];

  maxElementsToShow = 5;

  showLeftArrowBtn = false;

  showRightArrowBtn = false;

  constructor(elementLength) {
    this.setLength(elementLength);
  }

  _getArray(start, end) {
    if (end - start < 0) {
      return [];
    }

    const result = [];
    for (let i = start; i <= end; i += 1) {
      result.push(i);
    }
    return result;
  }

  getScrollData() {
    return {
      elementLength: this.elementLength,
      scrollStart: this.scrollStart,
      scrollEnd: this.scrollEnd,
      visibleArray: this.visibleArray,
      hiddenArray: this.hiddenArray,
      showLeftArrowBtn: this.showLeftArrowBtn,
      showRightArrowBtn: this.showRightArrowBtn,
    };
  }

  setLength = (newLength, maxElementsToShow) => {
    this.elementLength = newLength || this.elementLength;
    this.maxElementsToShow = maxElementsToShow || this.maxElementsToShow;
    if (this.elementLength <= this.maxElementsToShow) {
      this.setScroll(0, this.elementLength - 1);
    } else {
      const newScrollStart =
        this.scrollStart > this.elementLength - this.maxElementsToShow - 1
          ? this.elementLength - this.maxElementsToShow - 1
          : this.scrollStart;

      const newScrollEnd = newScrollStart + this.maxElementsToShow - 1;
      this.setScroll(newScrollStart, newScrollEnd);
    }
    return this.getScrollData();
  };

  scrollLeft = () => {
    if (this.scrollStart !== 0) {
      this.setScroll(this.scrollStart - 1, this.scrollEnd - 1);
    }
    return this.getScrollData();
  };

  scrollRight = () => {
    if (this.scrollEnd !== this.elementLength - 1) {
      this.setScroll(this.scrollStart + 1, this.scrollEnd + 1);
    }
    return this.getScrollData();
  };

  setScroll = (start, end) => {
    this.scrollStart = start;
    this.scrollEnd = end;
    this.visibleArray = this._getArray(this.scrollStart, this.scrollEnd);
    this.hiddenArray = [
      ...this._getArray(0, this.scrollStart - 1),
      ...this._getArray(this.scrollEnd + 1, this.elementLength - 1),
    ];
    this.showLeftArrowBtn = this.scrollStart !== 0;
    this.showRightArrowBtn = this.scrollEnd < this.elementLength - 1;
    return this.getScrollData();
  };
}

var ScrollWidthTable = [
  {
    px: 400,
    size: 1,
  },
  {
    px: 600,
    size: 2,
  },
  {
    px: 900,
    size: 3,
  },
  {
    px: 1100,
    size: 4,
  },
  {
    px: 1400,
    size: 5,
  },
  {
    px: 1700,
    size: 6,
  },
  {
    px: 2000,
    size: 7,
  },
  {
    px: Number.MAX_SAFE_INTEGER,
    size: 8,
  },
];

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Wizard extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
      'eui-wizard-header-step': HeaderStep,
      'eui-button': Button,
    };
  }

  scrollCalculator = new ScrollCalculator();

  _isFinished = false;

  get leftArrow() {
    return this.shadowRoot.querySelector('div.arrow-left-holder');
  }

  get rightArrow() {
    return this.shadowRoot.querySelector('div.arrow-right-holder');
  }

  get previousButton() {
    return this.shadowRoot.querySelector('eui-button#previous');
  }

  get nextButton() {
    return this.shadowRoot.querySelector('eui-button#next');
  }

  get finishButton() {
    return this.shadowRoot.querySelector('eui-button#finish');
  }

  get cancelButton() {
    return this.shadowRoot.querySelector('eui-button#cancel');
  }

  get saveButton() {
    return this.shadowRoot.querySelector('eui-button#save');
  }

  constructor() {
    super();
    this.addEventListener('eui-wizard-step:update', this, { passive: true });
    this.addEventListener('eui-wizard-step:valid', this, { passive: true });
  }

  get loc() {
    let currentLoc;

    try {
      currentLoc = window.EUI.Localizer.loc;
    } catch (e) {
      currentLoc = {};
    }

    return {
      CANCEL_BUTTON_WIZARD: currentLoc.CANCEL_BUTTON_WIZARD || 'Cancel',
      SAVE_BUTTON_WIZARD:
        currentLoc.SAVE_BUTTON_WIZARD || 'Save & finish later',
      PREVIOUS_BUTTON_WIZARD: currentLoc.PREVIOUS_BUTTON_WIZARD || 'Previous',
      NEXT_BUTTON_WIZARD: currentLoc.NEXT_BUTTON_WIZARD || 'Next',
      FINISH_BUTTON_WIZARD: currentLoc.FINISH_BUTTON_WIZARD || 'Finish',
      FINISHED_BUTTON_WIZARD: currentLoc.FINISHED_BUTTON_WIZARD || 'Finished',
    };
  }

  /**
   * Add a step indicator to the wizard heading.
   *
   * @function _addStepIndicator
   * @param {Step} wizardStep - wizard step component
   * @private
   */
  _addStepIndicator(wizardStep, index, stepTotal) {
    const step = this.createElement('eui-wizard-header-step');
    step.id = `step--${index}`;
    step.description = `${index + 1}. ${wizardStep.stepTitle}`;
    step.completed = wizardStep.completed;
    step.current = wizardStep.selected;
    step.first = index === 0;
    step.last = index === stepTotal - 1;

    step.addEventListener(
      'click',
      this.stepClick.bind(null, step, index),
      false,
    );
    this.shadowRoot.querySelector('.steps').appendChild(step);
  }

  /**
   * Select a step
   *
   * @function _selectStep
   * @private
   */
  _selectStep = index => {
    const currentStepIndex = this._selectedStepIndex;

    if (currentStepIndex !== index || currentStepIndex === -1) {
      this._menuSteps.forEach(menuStep => {
        menuStep.current = false;
      });

      if (index !== undefined) {
        this._wizardSteps.forEach(step => {
          step.selected = false;
        });

        this._menuStepAtIndex(index).current = true;
        this._wizardStepAtIndex(index).selected = true;
      }
    }
  };

  /**
   * Update the scroll of the step indicators in the heading.
   *
   * @function _updateScroll
   * @private
   */
  _updateScroll() {
    const { showLeftArrowBtn, showRightArrowBtn, visibleArray, hiddenArray } =
      this.scrollCalculator.getScrollData();
    const steps = this._menuSteps;

    visibleArray.forEach(visibleIndex => {
      steps[visibleIndex].hidden = false;
    });
    hiddenArray.forEach(hiddenIndex => {
      steps[hiddenIndex].hidden = true;
    });

    if (showLeftArrowBtn) {
      this._show(this.leftArrow);
    } else {
      this._hide(this.leftArrow);
    }
    if (showRightArrowBtn) {
      this._show(this.rightArrow);
    } else {
      this._hide(this.rightArrow);
    }
  }

  /**
   * Handle different view switching after component width changed
   */
  _updateView() {
    const clientWidth = this._getWizardClientWidth();

    if (clientWidth < ScrollWidthTable[2].px) {
      this.nextButton.classList.add('minimize');
      this.previousButton.classList.add('minimize');
    } else {
      this.nextButton.classList.remove('minimize');
      this.previousButton.classList.remove('minimize');
    }

    // Handle view switching
    if (this._isVerticalView(clientWidth)) {
      this.classList.add('mobile-view');
      this._menuSteps.forEach(i => i.classList.add('vertical'));
      this.scrollCalculator.setScroll(0, this._wizardSteps.length - 1);
    } else if (clientWidth <= ScrollWidthTable[1].px) {
      const scrollPosition = this._isFinished
        ? this._wizardSteps.length - 1
        : this._selectedStepIndex;
      this.classList.remove('mobile-view');
      this._menuSteps.forEach(i => i.classList.remove('vertical'));
      this.scrollCalculator.setScroll(scrollPosition, scrollPosition);
    } else {
      this.classList.remove('mobile-view');
      this._menuSteps.forEach(i => i.classList.remove('vertical'));

      this._displaySteps();
    }
    this._addLocalization();
    this._updateScroll();
  }

  /**
   * Update the steps in the wizard.
   *
   * @function _updateSteps
   * @private
   */
  _updateSteps() {
    this.shadowRoot.querySelector('.steps').innerHTML = '';
    const wizardSteps = this._wizardSteps;
    const wizardStepTotal = wizardSteps.length;
    if (!wizardSteps.length) {
      return;
    }

    wizardSteps.forEach((step, index) =>
      this._addStepIndicator(step, index, wizardStepTotal),
    );
    if (!wizardSteps.find(step => step.selected)) {
      const lastSelectedStep = wizardSteps
        .map((step, index) => ({ step, index }))
        .reverse()
        .find(item => item.step.completed);
      this._selectStep(lastSelectedStep ? lastSelectedStep.index : 0);
    }

    let maxElementsToShow = this._calculateSteps();
    if (this._isVerticalView(this.clientWidth)) {
      maxElementsToShow = this._wizardSteps.length;
    }
    this.scrollCalculator.setLength(wizardSteps.length, maxElementsToShow);
    this._updateScroll();
    this._updateFooter();
  }

  /**
   * Update the footer.
   *
   * @function _updateFooter
   * @private
   */
  _updateFooter = () => {
    const wizardSteps = this._wizardSteps;
    const selectedIndex = wizardSteps.findIndex(item => item.selected);
    if (selectedIndex === 0) {
      this._hide(this.previousButton, this.finishButton);
      this._show(this.nextButton);
    }

    if (selectedIndex > 0 && selectedIndex < wizardSteps.length - 1) {
      this._hide(this.finishButton);
      this._show(this.previousButton, this.nextButton);
    }

    if (selectedIndex === wizardSteps.length - 1) {
      this._hide(this.nextButton);
      this._show(this.previousButton, this.finishButton);
    }

    if (wizardSteps.length === 1) {
      this._hide(this.previousButton, this.nextButton);
      this._show(this.finishButton);
    }

    this.nextButton.disabled = !wizardSteps[selectedIndex].valid;
    this.finishButton.disabled = wizardSteps.find(step => !step.valid);

    if (this._menuSteps.reverse()[0].completed) {
      this._hide(this.previousButton);
    }
  };

  /**
   * Event handler for left step navigating
   */
  leftArrowClick = () => {
    if (this._isFinished) return;
    this.scrollCalculator.scrollLeft();
    this._updateScroll();
  };

  /**
   * Event handler for right step navigating
   */
  rightArrowClick = () => {
    if (this._isFinished) return;
    this.scrollCalculator.scrollRight();
    this._updateScroll();
  };

  /**
   * Event handler for step clicking navigation
   */
  stepClick = (step, number) => {
    if (this._isFinished) return;
    const currentStep = this._wizardSteps.find(
      wizardStep => wizardStep.selected,
    );

    // check if clicking on any previous step
    const clickedPrevStep = number < this._selectedStepIndex;
    if (!clickedPrevStep && (!step.completed || !currentStep.valid)) {
      return;
    }

    this.finishButton.disabled = false;
    this.finishButton.innerText = this.loc.FINISH_BUTTON_WIZARD;
    this._selectStep(number);
    this._updateFooter();
  };

  /**
   * Event handler for prev step navigation
   *
   * @function nextClick
   * @public
   */
  nextClick = () => {
    const wizardSteps = this._wizardSteps;
    const selectedIndex = wizardSteps.findIndex(item => item.selected);
    if (
      selectedIndex === wizardSteps.length - 1 ||
      !wizardSteps[selectedIndex].valid
    ) {
      return;
    }

    this._menuSteps[selectedIndex].completed = true;
    wizardSteps[selectedIndex].completed = true;
    this._selectStep(selectedIndex + 1);

    if (this._menuStepAtIndex(selectedIndex + 1).hidden) {
      this.scrollCalculator.scrollRight();
      this._updateScroll();
    }
    this._updateView();
    this._updateFooter();
  };

  /**
   * Event handler for prev step navigation
   */
  previousClick = () => {
    const selectedIndex = this._wizardSteps.findIndex(item => item.selected);
    if (selectedIndex === 0) {
      return;
    }

    this._selectStep(selectedIndex - 1);
    this.scrollCalculator.scrollLeft();
    this._updateScroll();
    this._updateFooter();
  };

  /**
   * Button handler for the Finish button.
   *
   * @function finishClick
   * @public
   */
  finishClick = () => {
    const wizardSteps = this._wizardSteps;
    const selectedIndex = wizardSteps.findIndex(item => item.selected);
    if (
      selectedIndex !== wizardSteps.length - 1 ||
      wizardSteps.find(step => !step.valid)
    ) {
      return;
    }

    this._menuStepAtIndex(selectedIndex).completed = true;
    wizardSteps[selectedIndex].completed = true;

    this.finishButton.disabled = true;
    this.finishButton.innerText = this.loc.FINISHED_BUTTON_WIZARD;
    this._isFinished = true;
    this._selectStep();
    this._updateFooter();
  };

  /**
   * Handle events
   *
   * @param {Event} event - button events
   */
  handleEvent(event) {
    if (event.target.id === 'cancel') {
      this.bubble('eui-wizard:cancel');
    }
    if (event.target.id === 'save') {
      this.bubble('eui-wizard:save');
    }
    if (event.target.id === 'finish') {
      const emittedEvent = this.bubble(
        'eui-wizard:finish',
        {},
        { cancelable: true },
      );

      if (!emittedEvent.defaultPrevented) {
        this.finishClick();
      }
    }
    if (event.target.id === 'next') {
      const emittedEvent = this.bubble(
        'eui-wizard:next',
        {},
        { cancelable: true },
      );

      if (!emittedEvent.defaultPrevented) {
        this.nextClick();
      }
    }
    if (event.type === 'eui-wizard-step:update') {
      this._updateSteps(event);
      this._updateView();
    }
    if (event.type === 'eui-wizard-step:valid') {
      const currentIndex = this._wizardSteps.indexOf(event.target);
      this._menuStepAtIndex(currentIndex).valid = event.target.valid;
      this._updateFooter(event);
    }
    if (event.type === 'resize') {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null;
          const maxElementsToShow = this._calculateSteps();
          this.scrollCalculator.setLength(
            this._wizardSteps.length,
            maxElementsToShow,
          );
          this._updateView();
        }, 66);
      }
    }
  }

  /**
   * Hide component(s).
   *
   * @function _hide
   * @param  {...any} elements - spread of components to hide
   * @private
   */
  _hide(...elements) {
    elements.forEach(element => {
      element.classList.add('hidden');
    });
  }

  /**
   * Show component(s).
   *
   * @function _show
   * @param  {...any} elements - spread of components to show
   * @private
   */
  _show(...elements) {
    elements.forEach(element => {
      element.classList.remove('hidden');
    });
  }

  /**
   * Get the step indicators in the heading.
   *
   * @function _menuSteps
   * @private
   */
  get _menuSteps() {
    return [...this.shadowRoot.querySelectorAll('eui-wizard-header-step')];
  }

  /**
   * Get the menu step at a given index
   *
   * @function _menuStepAtIndex
   * @private
   */
  _menuStepAtIndex = index => this._menuSteps[index];

  /**
   * Get the index of the current selected step. If nothing is selected -1 is returned.
   *
   * @function _selectedStepIndex
   * @private
   */
  get _selectedStepIndex() {
    return this._menuSteps.findIndex(menuStep => menuStep.current);
  }

  /**
   * Get all the wizard steps
   *
   * @function _wizardSteps
   * @private
   */
  get _wizardSteps() {
    return [...this.querySelectorAll('eui-wizard-step')];
  }

  /**
   * Get the wizard step at a given index.
   *
   * @function _wizardStepAtIndex
   * @private
   */
  _wizardStepAtIndex = index => this._wizardSteps[index];

  /**
   * Get client width of current widget
   */
  _getWizardClientWidth = () => this.clientWidth;

  /**
   * Check if wizard is under vertical view
   */
  _isVerticalView = clientWidth =>
    clientWidth <= ScrollWidthTable[3].px &&
    clientWidth > ScrollWidthTable[1].px;

  /**
   * Apply localization for all UI elements
   */
  _addLocalization() {
    this.cancelButton.innerHTML = this.loc.CANCEL_BUTTON_WIZARD;
    this.saveButton.innerHTML = this.loc.SAVE_BUTTON_WIZARD;
    this.previousButton.innerHTML = !this.previousButton.classList.contains(
      'minimize',
    )
      ? this.loc.PREVIOUS_BUTTON_WIZARD
      : '';
    this.nextButton.innerHTML = !this.nextButton.classList.contains('minimize')
      ? this.loc.NEXT_BUTTON_WIZARD
      : '';
    this.nextButton.reverse = this.nextButton.innerHTML !== '';
    this.finishButton.innerHTML = this._isFinished
      ? this.loc.FINISHED_BUTTON_WIZARD
      : this.loc.FINISH_BUTTON_WIZARD;
  }

  /*
   * Calculates the number of steps that can be shown in wizard
   */
  _calculateSteps = () =>
    ScrollWidthTable.find(element => element.px > this.clientWidth).size;

  /*
   * Shows only steps that fit on screen
   */
  _displaySteps = () => {
    const maxElementsToShow = this._calculateSteps();

    let firstStep = 0;
    const lastStep =
      this._selectedStepIndex + maxElementsToShow <=
      this._wizardSteps.length - 1
        ? this._selectedStepIndex + maxElementsToShow
        : this._wizardSteps.length - 1;

    if (
      lastStep - maxElementsToShow <= this._selectedStepIndex &&
      this._wizardSteps.length > maxElementsToShow
    ) {
      firstStep = lastStep - maxElementsToShow;
    } else if (this._wizardSteps.length > maxElementsToShow) {
      firstStep = this._selectedStepIndex;
    }

    this.scrollCalculator.setScroll(firstStep, lastStep);
  };

  /**
   * Apply localization
   */
  didRender() {
    this._addLocalization();
  }

  /**
   * Setting all the event handling
   */
  didConnect() {
    // add actionListeners...
    this.leftArrow.addEventListener('click', this.leftArrowClick, false);
    this.rightArrow.addEventListener('click', this.rightArrowClick, false);
    this.cancelButton.addEventListener('click', this, false);
    this.saveButton.addEventListener('click', this, false);
    this.previousButton.addEventListener('click', this.previousClick, false);
    this.nextButton.addEventListener('click', this, false);
    this.finishButton.addEventListener('click', this, false);

    window.addEventListener('resize', this, { passive: true });
    requestAnimationFrame(() => {
      this._updateView();
    });
  }

  /**
   * Clear all the event handling
   */
  didDisconnect() {
    window.removeEventListener('resize', this);
  }
}

/**
 * @property {Boolean} save - Displays the "Save & finish later" button. Hidden by default
 * @property {Boolean} maximize - Set the wizard to take up the fullscreen
 * @property {event} eui-wizard:cancel - dispatched when the "Cancel" button is pressed
 * @property {event} eui-wizard:save - dispatched when the "Save & finish later" button is pressed
 * @property {event} eui-wizard:finish - dispatched when the "Finish" button is pressed
 */
definition('eui-wizard', {
  style: style$4,
  template: template$4,
  props: {
    save: { attribute: true, type: Boolean },
    maximize: { attribute: true, type: Boolean },
  },
})(Wizard);

var style$5 = ":host {\n  flex: none;\n  width: 0px;\n  transition: width 0.1s linear;\n  padding: 0;\n}\n\n:host([show]) {\n  width: var(--width);\n}\n\n:host([no-animation]:not([show])) {\n  transition: width 1ms;\n}\n\n:host([show]) .tile {\n  opacity: 1.0;\n}\n\n:host([show]) .separator {\n  opacity: 0.5;\n}\n  \n:host(:not([show])) .separator {\n  opacity: 0;\n  transition: opacity 0.1s linear 0.2s;\n}\n\n:host(:not([show])) .tile {\n  opacity: 0;\n  transition: opacity 0.1s;\n}\n\n.panel {\n  display: flex;\n  gap: var(--space-large, 16px);\n  height: 100%;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.tile {\n  width: 0;\n  opacity: 0;\n  transition: opacity 0.1s 0.08s;\n  display: flex;\n  flex-flow: column;\n  flex: auto;\n}\n\n.separator {\nopacity: 0;\nwidth: 20px;\ndisplay: flex;\nflex-flow: column;\nalign-items: center;\ntransition: opacity 0.3s;\n}\n\n.bar {\nflex: auto;\nwidth: 1px;\nbackground-color: var(--text);\n}\n\n.separator eui-icon {\ndisplay: none;\npadding: var(--space-small, 4px) 0;\n}\n\n:host([resizable]) .separator:hover,\n:host([resizable]) .separator:focus {\ncursor: col-resize;\nopacity: 1.0;\n}\n\n:host([resizing]) {\ntransition: none;\n}\n\n:host([resizable][resizing]) .separator {\ncursor: col-resize;\nopacity: 1.0;\n}\n\n:host([resizable]) .separator:hover eui-icon,\n:host([resizable]) .separator:focus eui-icon {\ndisplay: block;\n}\n\n:host([resizable][resizing]) .separator eui-icon {\ndisplay: block;\n}\n\n.separator:focus {\noutline: 1px solid var(--purple, #a56ebe);\noutline-offset: 1px;\n}\n\n@supports selector(:focus-visible) {\n.separator:focus {\n  outline: none;\n  background: transparent;\n}\n}\n\n.separator:focus-visible {\noutline: 1px solid var(--purple, #a56ebe);\noutline-offset: 1px;\n}";

class TilePanel extends Tile {
  // get the components from Tile...
  static get components() {
    return {
      ...super.components,
    };
  }

  // create the template
  static get template() {
    return `
    <div class="panel">
      ${super.template}
    </div>
    `;
  }

  /**
   * Get the separator (drag bar)
   */
  get separator() {
    return this.shadowRoot.querySelector('.separator');
  }

  /**
   * Get the panel
   */
  get panel() {
    return this.shadowRoot.querySelector('.panel');
  }

  /**
   * Get the tile (.tile class in the Tile component)
   */
  get tile() {
    return this.shadowRoot.querySelector('.tile');
  }

  set panelButton(panelButton) {
    this._panelButton = panelButton;
  }

  /**
   * Create the separator (drag bar)
   *
   * @returns HTMLFragment
   * @private
   */
  _createSeparator = () => {
    const temp = document.createElement('template');
    temp.innerHTML = `
      <div class="separator" tabindex="${this.resizable ? 0 : -1}">
        <div class="bar"></div>
        <eui-icon name="drag-handle"></eui-icon>
        <div class="bar"></div>
      </div>`;
    return temp.content;
  };

  /**
   * Resize the panel based on a forcased width.
   *
   * The forcased width is the new width that the panel
   * is about to be set as. But BEFORE this width can
   * be set, it must be checked aginst two controls
   *
   * minimum panel width (250px)
   * ---
   * If the forcasted width results in a value that is less than the minimum
   * width of the panel, the resize action is frozen, and the width is set
   * to the minimum (250px).
   *
   * maxWidth
   * ---
   * maxWidth represents the max width of the panel. It is set when the main
   * panel, in a Multi Panel Tile, calls "freeze". "freeze" is called when the main panel has reached
   * it's minimum width. This tells the panel that it cannot be made any wider.
   *
   * @param {Number} forecastedWidth
   */
  _forcastedWidth = forecastedWidth => {
    if (forecastedWidth <= 250) {
      // reached min width, stop resizing...
      this.width = 250;
    } else if (this.maxWidth == null) {
      this.width = forecastedWidth;
    } else if (this.maxWidth > forecastedWidth) {
      this.maxWidth = null;
      this.width = forecastedWidth;
    }
  };

  /**
   * Resize the panel using the mouse.
   *
   * @param {Number} stepSize - the distance the
   * mouse have moved from the initial start position
   */
  _resize = stepSize => {
    let forecastedWidth = 250;

    if (this.slot === 'left') {
      forecastedWidth = this.startWidth - stepSize;
    } else {
      forecastedWidth = this.startWidth + stepSize;
    }

    this._forcastedWidth(forecastedWidth);
  };

  /**
   * Resize the panel using the keyboard.
   *
   * @param {Number} stepSize - the distance the
   * mouse have moved from the initial start position
   * @param {String} direction - the direction of resize (left/right key press)
   */
  _resizeBy = (stepSize, direction = null) => {
    let forecastedWidth = 250;

    if (direction === 'left' && this.slot === 'left') {
      // decrease the width of the panel...
      forecastedWidth = this.width - stepSize;
    } else if (direction === 'left' && this.slot === 'right') {
      // increase the width of the panel...
      forecastedWidth = this.width + stepSize;
    } else if (direction === 'right' && this.slot === 'left') {
      // increase the width of the panel...
      forecastedWidth = this.width + stepSize;
    } else if (direction === 'right' && this.slot === 'right') {
      // decrease the width of the panel...
      forecastedWidth = this.width - stepSize;
    }

    this._forcastedWidth(forecastedWidth);
  };

  /**
   * Freeze this panel from resizing. Once frozen the panel cannot be widened.
   * The panel is unfrozen when it is reduced in width.
   *
   * @param {Number} overshoot - value of overshoot sent by the main tile.
   */
  freeze = overshoot => {
    this.width -= overshoot;
    this.maxWidth = this.width;
  };

  /**
   * open the panel inline...
   * This function MUST be used to show the panel. It relies on the setting of the panel hidden = false.
   * NOTE: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
   * refer to the section on performing a transition after removing an element's `display: none;`
   *
   * @function openInline
   */
  openInline = () => {
    this.hidden = false;
    window.setTimeout(() => {
      this.show = true;
    }, 2);
  };

  /**
   * Tell the Multi Panel Tile that this panel SHOULD be opened.
   * The Multi Panel Tile will decide how this panel is displayed
   * depending on the available space.
   * If there is enough space, the Multi Panel Tile will call openInline()
   * If there is NOT enough space this panel will remain hidden, and it's
   * contents will be moved (by the Multi Panel Tile) into a Flyout Panel.
   *
   * @function open
   * @public
   */
  open() {
    this.bubble('eui-tile-panel:open');
  }

  /**
   * Close the panel
   *
   * @function close
   * @public
   */
  close() {
    this.show = false;
  }

  /**
   * mousedown
   * ---
   * Handle event when the mouse is clicked on the drag area.
   * Add mouse listeners.
   *
   * mouseup
   * ---
   * Remove listeners added in the mousedown event handler as they
   * are no longer needed.
   *
   * mousemove
   * ---
   * Resize the panel
   *
   * focus
   * ---
   * Add key listeners if the panel is resizable.
   * On window resize, the focused area should loose focus.
   *
   * blur
   * ---
   * remove all key listeners and the window resize listener.
   *
   * keydown
   * ---
   * Resize the panel.
   * Start a longpress timer, which increases the step size from
   * 1px to 10px after 1.5 seconds if the keyup has not
   * happened inbetween.
   *
   * keyup
   * ---
   * clear the longpress timer.
   *
   * resize
   * ---
   * remove focus from any focused drag area.
   *
   * @param {Event} event
   */
  handleEvent(event) {
    super.handleEvent(event);
    switch (event.type) {
      case 'mousedown':
        this.startPostion = event.clientX;
        this.startWidth = this.width;
        document.addEventListener('mouseup', this);
        document.addEventListener('mousemove', this);
        break;

      case 'mouseup':
        document.removeEventListener('mouseup', this);
        document.removeEventListener('mousemove', this);
        break;

      case 'mousemove':
        this._resize(this.startPostion - event.clientX);
        break;

      case 'focus':
        if (this.resizable) {
          this.resizing = true;
          window.addEventListener('resize', this, {
            passive: true,
            useCapture: true,
          });
          this.separator.addEventListener('blur', this);
          this.addEventListener('keydown', this);
          this.addEventListener('keyup', this);
        }
        break;

      case 'blur':
        this.resizing = false;
        this.maxWidth = null;
        window.removeEventListener('resize', this);
        this.separator.removeEventListener('blur', this);
        this.removeEventListener('keydown', this);
        this.removeEventListener('keyup', this);
        break;

      case 'keydown':
        if (this.longPressTimer == null) {
          this._stepSize = 1;
          this.longPressTimer = setTimeout(() => {
            this._stepSize = 10;
          }, 1500);
        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          this._resizeBy(
            event.shiftKey ? 10 : this._stepSize,
            event.key === 'ArrowLeft' ? 'left' : 'right',
          );
        }
        break;

      case 'keyup':
        clearTimeout(this.longPressTimer);
        this.longPressTimer = null;
        break;

      case 'resize':
        this.separator.blur();
        break;
    }
  }

  /**
   * Create and add the close button for the panel
   *
   * @function _addCloseButton
   * @private
   */
  _addCloseButton = () => {
    const closeIcon = this.createElement('eui-icon');
    closeIcon.classList.add('close-button');
    closeIcon.slot = 'action';
    closeIcon.name = 'cross';

    // click on the close-button.
    closeIcon.addEventListener('click', event => {
      event.stopPropagation();
      this.show = false;
    });

    this.appendChild(closeIcon);
  };

  /**
   * When the panel is upgraded, determine the side (slot) the panel was inserted into.
   * This information is used to determine the side the drag handle should be placed.
   * - panel added to left of Multi Panel Tile, position separator (drag handle) on the right.
   * - panel added to right of Multi Panel Tile, position separator (drag handle) on the left.
   */
  didUpgrade() {
    super.didUpgrade();

    this.setWidth();

    if (this.slot === 'left') {
      this.panel.insertBefore(this._createSeparator(), null);
      this.panel.classList.add('left');
    } else {
      this.panel.insertBefore(this._createSeparator(), this.tile);
    }

    if (this.resizable) {
      this.separator.addEventListener('mousedown', this);
      this.separator.addEventListener('focus', this);
    }

    // When panel has transitioned to width: 0, set the panel to hidden...
    this.addEventListener('transitionend', () => {
      if (this.getBoundingClientRect().width === 0) {
        this.bubble('eui-tile-panel:closed');
        if (this._panelButton) {
          this._panelButton.hidden = false;
        }
        this.hidden = true;
        this.closing = false;
        this.noAnimation = false;
      }
    });

    this._addCloseButton();
  }

  /**
   * Set the CSS variable, --width
   *
   * @function setWidth
   */
  setWidth = () => {
    this.style.setProperty('--width', `${this.width}px`);
  };

  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    if (changedProps.has('resizable')) {
      if (this.resizable) {
        this.separator.addEventListener('mousedown', this);
        this.separator.addEventListener('focus', this);
        this.separator.tabIndex = 0;
      } else {
        this.separator.removeEventListener('mousedown', this);
        this.separator.removeEventListener('focus', this);
        this.separator.tabIndex = -1;
      }
    }

    if (changedProps.has('show')) {
      if (this.show) {
        if (this._panelButton) {
          this._panelButton.hidden = true;
        }
        this.bubble('eui-tile-panel:show');
      } else {
        this.closing = true;
        this.bubble('eui-tile-panel:hide');
      }
    }

    if (changedProps.has('width')) {
      this.setWidth();
    }

    if (changedProps.has('tileTitle')) {
      if (this._panelButton) {
        this._panelButton.tooltip = this.tileTitle;
      }
    }

    if (changedProps.has('iconName')) {
      if (this._panelButton) {
        this._panelButton.icon = this.iconName;
      }
    }
  }

  didDisconnect() {
    super.didDisconnect();
    window.removeEventListener('resize', this);
  }
}

definition('eui-tile-panel', {
  style: style$5,
  props: {
    resizable: { attribute: true, type: Boolean },
    resizing: { attribute: true, type: Boolean },
    iconName: { attribute: true, type: String, default: 'square-dashed' },
    show: { attribute: true, type: Boolean },
    noAnimation: { attribute: true, type: Boolean },
    width: { attribute: true, type: Number, default: 300 },
  },
})(TilePanel);

class PanelButton extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
      'eui-tooltip': Tooltip,
    };
  }

  static get template() {
    return `
      <eui-tooltip action>
        <eui-icon></eui-icon>
      </eui-tooltip>
    `;
  }

  /**
   * Get the tooltip component.
   *
   * @property _tooltip
   * @return {Element}
   * @private
   */
  get _tooltip() {
    return this.shadowRoot.querySelector('eui-tooltip');
  }

  /**
   * Get the icon component.
   *
   * @property _icon
   * @return {Element}
   * @private
   */
  get _icon() {
    return this.shadowRoot.querySelector('eui-icon');
  }

  /**
   * Set the tooltip message/
   *
   * @property _tooltipMessage
   * @param {String} - tooltip message
   * @private
   */
  set tooltipMessage(message) {
    if (message == null || message.trim() === '') {
      this._tooltip.visible = 'never';
    } else {
      this._tooltip.visible = null;
    }
    this._tooltip.message = message;
  }

  /**
   * Set the name of the icon
   */
  set iconName(name = 'square-dash') {
    this._icon.name = name;
  }

  /**
   * Set the position of the tooltip message
   */
  set tooltipPosition(position = 'bottom') {
    this._tooltip.position = position;
  }

  /**
   * Configure the button
   *
   * @function configure
   *
   * @param {String} icon - icon name
   * @param {String} tooltip - tooltip message
   * @param {String} slot - name of slot
   * @param {Boolean} hidden - hide/show the button
   */
  configure = (icon, tooltip, slot, hidden) => {
    this.icon = icon;
    this.tooltip = tooltip;
    this.slot = slot;
    this.hidden = hidden;
  };

  didChangeProps(changedProps) {
    if (changedProps.has('hidden')) {
      this.bubble('eui-panel-button:hidden');
    }
    if (changedProps.has('icon')) {
      this.iconName = this.icon;
    }
    if (changedProps.has('tooltip')) {
      this.tooltipMessage = this.tooltip;
    }
  }

  didConnect() {
    this.iconName = this.icon;
    this.tooltipMessage = this.tooltip;
    this.tooltipPosition =
      this.slot === 'left-panel-button' ? 'bottom' : 'bottom-end';
  }
}

const style$1$1 = `
  :host {
    height: 16px;
    width: 16px;
    display: block;
  }

  eui-icon {
    cursor: pointer;
  }

  :host([hidden]) {
    display: none;
  }
`;

definition('eui-panel-button', {
  style: style$1$1,
  props: {
    icon: { default: 'square-dashed' },
    tooltip: {},
    hidden: { attribute: true, type: Boolean },
  },
})(PanelButton);

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class MultiPanelTile extends Tile {
  static get components() {
    return {
      ...super.components,
      'eui-flyout-panel': FlyoutPanel,
      'eui-panel-button': PanelButton,
    };
  }

  static get template() {
    return `
      <div class="multi-panel-layout">
        <slot name="left"></slot>
        ${super.template}
        <slot name="right"></slot>
        <eui-flyout-panel panel-close></eui-flyout-panel>
      </div>
    `;
  }

  constructor() {
    super();
    this.addEventListener('eui-panel-button:hidden', event => {
      this._setDividerVisibility(event.target.slot);
    });

    this.addEventListener('eui-tile-panel:open', event => {
      this._showPanel(event.target);
    });
  }

  get leftSlot() {
    return this.shadowRoot.querySelector('slot[name=left]');
  }

  get rightSlot() {
    return this.shadowRoot.querySelector('slot[name=right]');
  }

  get mainTile() {
    return this.shadowRoot.querySelector('.tile');
  }

  get leftPanels() {
    return [...this.querySelectorAll('[slot=left]')];
  }

  get rightPanels() {
    return [...this.querySelectorAll('[slot=right]')];
  }

  get allPanels() {
    return [...this.leftPanels, ...this.rightPanels];
  }

  get allOpenPanels() {
    return [
      ...this.leftPanels.filter(panel => panel.show),
      ...this.rightPanels.filter(panel => panel.show),
    ];
  }

  /**
   * Get a panel that is currently in the "closing" state.
   */
  get closingPanel() {
    return this.allPanels.find(panel => panel.closing);
  }

  get flyoutPanel() {
    return this.shadowRoot.querySelector('eui-flyout-panel');
  }

  _autoClosePanel = side => {
    const panels = [...this.querySelectorAll(`*[slot=${side}]`)];
    const visiblePanel = panels.find(panel => panel.show === true);
    if (visiblePanel) {
      visiblePanel.close();
    }
    return visiblePanel != null;
  };

  /**
   * Show the contents of a panel in a flyout.
   * This moves all slotted elements (contents and footer) from the panel to the flyout,
   * sets the title of the flyout (based on the panel tile) and opens the flyout panel.
   *
   * When the flyout is closed, all it's slotted elements (contents and footer)
   * are moved back to the originating panel.
   *
   * @function showFlyout
   * @param {Element} panel - the panel to be opened
   */
  showFlyout = panel => {
    // append elements to the flyout panel
    const apendToFlyoutPanel = elements => {
      elements.forEach(element => {
        this.flyoutPanel.appendChild(element);
      });
    };

    // get the contents of the panel...
    const panelContents = [...panel.childNodes].filter(
      node => node.slot === 'content',
    );
    apendToFlyoutPanel(panelContents);

    // get the contnets of the panel's footer...
    const panelFooters = panel.querySelectorAll('[slot=footer]');
    apendToFlyoutPanel(panelFooters);

    // create object to handle the events...
    const handlers = {
      handleEvent: () => {
        // append elements to the tile panel (put them back to where they originated)
        const appendToPanel = elements => {
          elements.forEach(element => {
            panel.appendChild(element);
          });
        };

        // get the contents of the flyout...
        const flyoutContents = [...this.flyoutPanel.childNodes].filter(
          node => node.slot === 'content',
        );
        appendToPanel(flyoutContents);

        // get the contnets of the flyout panel's footer...
        const flyoutFooters =
          this.flyoutPanel.querySelectorAll('[slot=footer]');
        appendToPanel(flyoutFooters);

        this.removeEventListener('eui-flyout-panel:closed', handlers);
      },
    };

    // add a listener to know when the flyout panel is closed...
    this.addEventListener('eui-flyout-panel:closed', handlers);

    this.flyoutPanel.panelTitle = panel.tileTitle;
    this.flyoutPanel.width = panel.width;
    this.flyoutPanel.position = panel.slot;
    this.flyoutPanel.show = true;
  };

  /**
   *
   * @param {String} slot - name of slot where the button should be slotted.
   * @param {Element} panel - Panel.
   * @returns
   */
  _createPanelButton = (slot, panel) => {
    const pButton = this.createElement('eui-panel-button');
    pButton.configure(panel.iconName, panel.tileTitle, slot, panel.show);

    // open the open the panel...
    pButton.addEventListener('click', () => {
      this._showPanel(panel);
    });

    // add a reference of the panel button to the panel.
    panel.panelButton = pButton;

    return pButton;
  };

  /**
   * Show a panel
   * Before a panel can be opened we must determine if it can be shown without the need to close another panel.
   * 1. Open panel on right.
   * 2. subtract width of R panel from main panel. Is there enough room to display panel?
   * 3. YES: Open panel inline
   * 3. NO:  Give me a list of all open panels ordered from left to right..
   * 3.      Determine if closing panels will give enough room. If it does, then close them and open the new panel inline
   * 3.      If it still won't give enough room, then open panel in flyout, but all open panels remain open.
   *
   * @function _showPanel
   * @param {Element} panel - panel to open
   */
  _showPanel = panel => {
    if (panel.show) {
      return;
    }
    if (this.autoClose) {
      // autoClose = true: Panels should auto close (or open in a flyout) when opening a new panel.
      const mainPanelWidth = this.mainTile.getBoundingClientRect().width - 32;
      const forcastedSpace = mainPanelWidth - panel.width;
      if (forcastedSpace >= this.minWidth) {
        panel.openInline();
      } else {
        const openPanels = this.allOpenPanels;
        if (openPanels.length === 0) {
          // no panels to be closed, so open in flyout.
          this.showFlyout(panel);
        } else {
          // if I close the first openPanel will that be enough?
          let gainedWidth = 0;
          let panelIndex = 0;
          const result = openPanels.some((openPanel, index) => {
            // get width of the panel.
            // if the width + forcastedWidth >= this.minwidth then close all open panels up to and including this index.
            panelIndex = index;
            gainedWidth += openPanel.width;
            return gainedWidth + forcastedSpace >= this.minWidth;
          });

          if (result) {
            // close all panels up to and including the index returned from the call to some.
            for (let i = 0; i <= panelIndex; i += 1) {
              openPanels[i].noAnimation = true;
              openPanels[i].close();
            }
            panel.openInline();
            // open the panel inline
          } else {
            // closing panels would not give enough room, so just open panel in flyout.
            this.showFlyout(panel);
          }
        }
      }
    } else {
      // autoClose = false: Panels should NOT auto close when opening a new panel.
      const mainPanelWidth = this.mainTile.getBoundingClientRect().width - 32;
      if (mainPanelWidth - panel.width <= this.minWidth) {
        this.showFlyout(panel);
      } else {
        panel.openInline();
      }
    }
  };

  /**
   * Get all the panel buttons on a particular side.
   *
   * @function _getPanelButtons
   * @param {String} side - 'left' | 'right'
   * @returns {Array} panel buttons.
   * @private
   */
  _getPanelButtons = side => [
    ...this.querySelectorAll(`eui-panel-button[slot=${side}]`),
  ];

  /**
   * Adds a resizeObserver to auto close/open panels
   * depending on the available space.
   *
   * @function _addResizeObserver
   * @private
   */
  _addResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(entries => {
      const { width } = entries[0].contentRect;
      if (width <= this.minWidth) {
        // check if there is a panel being resized...
        const resizingPanel = this.allPanels.find(
          panel => panel.resizing === true,
        );
        if (resizingPanel) {
          // prevent the ResizeObserver throwing a loop exception...
          requestAnimationFrame(() => {
            resizingPanel.freeze(this.minWidth - width);
          });
          return;
        }

        // if there are open panels, then we should close some...
        // if there is a panel currently closing (animating) then skip,
        // as we don't want to close two panels at the same time!
        if (this.allOpenPanels.length > 0 && this.closingPanel == null) {
          const closedPanelOnLeft = this._autoClosePanel('left');
          if (!closedPanelOnLeft) {
            this._autoClosePanel('right');
          }
        }
      }
    });
    this.resizeObserver.observe(this.mainTile);
  };

  didConnect() {
    this._addResizeObserver();
    this.leftSlot.addEventListener('slotchange', event => {
      this._getPanelButtons('left-panel-button').forEach(button => {
        this.removeChild(button);
      });
      [...event.target.assignedElements()].forEach(panel => {
        panel.hidden = !panel.show;
        this.appendChild(this._createPanelButton('left-panel-button', panel));
      });
    });

    this.rightSlot.addEventListener('slotchange', event => {
      this._getPanelButtons('right-panel-button').forEach(button => {
        this.removeChild(button);
      });
      [...event.target.assignedElements()].forEach(panel => {
        panel.hidden = !panel.show;
        this.appendChild(this._createPanelButton('right-panel-button', panel));
      });
    });
  }

  didDisconnect() {
    this.resizeObserver.disconnect();
  }
}

const style$6 = `
:host {
  display: flex;
}

.multi-panel-layout {
  display: flex;
  gap: var(--space-large, 16px);
  width: 100%;
}
`;

definition('eui-multi-panel-tile', {
  style: style$6,
  props: {
    minWidth: { attribute: true, type: Number, default: 400 },
    autoClose: { attribute: true, type: Boolean },
  },
})(MultiPanelTile);

export { Card as C, MultiPanelTile as M, TilePanel as T };
