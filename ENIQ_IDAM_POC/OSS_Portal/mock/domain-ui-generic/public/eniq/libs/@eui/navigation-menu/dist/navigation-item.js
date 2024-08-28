import { definition, LitComponent, html, ifDefined, nothing } from '../../../pkg/@eui/lit-component.js';
import { Icon } from '../../../pkg/@eui/theme/icon.js';
import { Tooltip } from '../../../pkg/@eui/base/tooltip.js';

var style = "\n:root {\n  --group-level: 0;\n  box-sizing: border-box;\n}\n\n:host{\n  display: block;\n  box-sizing: border-box;\n}\n\n:host(:focus) {\n  outline: none;\n}\n\n/* Hide focus style when an element receives focus via the mouse. */\n:host(:focus:not(:focus-visible)) .nav-item{\n  outline: 0;\n}\n\n/* Show focus styles on keyboard focus. */\n:host(:focus-visible) .nav-item{\n  outline: 1px solid var(--purple, #a56ebe);\n}\n\n:host([active-child]:not([open])) .nav-item {\n  box-shadow: inset 6px 0 var(--blue, #1174E6);\n  background-color: var(--table-hover, #DCDCDC);\n}\n:host([active-child]:not([open])) .nav-item:hover {\n  box-shadow: inset 6px 0 var(--link-blue, #0069C2);\n  background: var(--table-hover, #DCDCDC);\n}\n\n:host([active-child]) .nav-item-link {\n  font-weight: 700;\n}\n\n:host([active]) .nav-item {\n  background: var(--blue, #1174E6);\n}\n\n:host([active]) .nav-item-link {\n  --text: var(--white, #fff);\n}\n\n:host([active]) .nav-item:hover {\n  background: var(--link-blue, #0069C2);\n}\n\n.nav-content {\n  flex: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.nav-tooltip {\n  display: none;\n}\n\n.nav-tooltip__visible {\n  display: block;\n}\n\n:host(:not([branch])) a {\n  padding: 11px 8px 11px var(--pad-left, 34px);\n}\n:host([branch]) a {\n  padding: 11px 8px 11px var(--pad-left, 9px);\n}\n\n#launch-icon {\n  flex: none;\n  padding-left: var(--space-base, 8px);\n  display: none;\n}\n\n.nav-item-link:hover #launch-icon{\n  display: block;\n}\n\n:host([external]:not([active])) .nav-item-link:active {\n  background-color: var(--gray-68, #ADADAD);\n}\n\na {\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n  max-height: 18px;\n  text-decoration: none;\n  color: var(--text, #242424);\n  user-select: none;\n  flex: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.nav-item:hover {\n  background: var(--table-hover, #DCDCDC);\n  cursor: pointer;\n}\n\n#chevron {\n  padding-right: 8px;\n}\n\n.nav-item-link:focus-visible {\n  outline: 1px solid var(--purple, #a56ebe);\n}\n\n\n.nav-item-link:focus-visible #launch-icon{\n  display: block;\n}\n\na:focus-visible {\n  box-shadow: inset 0px 0px 0px 1px var(--purple, #a56ebe);\n}\n\n.tooltip-message {\n  max-width: 200px;\n}";

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
 * @property {Boolean} active - activate/de-activate the navigation item.
 * @property {Boolean} activeChild - signifies that a child is active
 * @property {Boolean} branch - this navigation item is a branch that contains children
 * @property {Boolean} open - branch is open/closed
 * @property {Array}   tags - Tags associated with the menu item [String]
 * @property {Boolean} route - Relative path of an UI application. Mandatory container specific
 * types.
 * @property {Boolean} url - Full path of an UI application. Mandatory for external types.
 * @property {String} label - label for the app to be searched for
 */
class NavigationItem extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
      'eui-tooltip': Tooltip,
    };
  }

  constructor() {
    super();
    // listen for a request to open a branch, this is sent by a
    // child that want's it's parent branch to open
    this.addEventListener('nav-item:open-branch', () => this._openBranch());
  }

  didUpgrade() {
    this.tooltipElement = this.shadowRoot.querySelector('.nav-tooltip');
    this.linkElement = this.shadowRoot.querySelector('.nav-item-link');
    this.setupKeyboardNavigation();
  }

  didConnect() {
    this.setAttribute('tabindex', 0);
  }

  handleEvent(event) {
    if (this.isNavItemClicked(event)) {
      event.stopPropagation();
      this._hideTooltip();
      if (this.branch && !this.canNavigate()) {
        this._toggleBranch();
      } else if (!this.branch && !this.canNavigate()) {
        this._setSelected();
      } else if (!this.external) {
        // user is trying to navigate to an app.
        // but first the Container must be made aware of this,
        // as they may want to ask the app if it's ok to switch to a new app!
        event.preventDefault();
        this.bubble('navigation:navigate', { route: this.route });
      }
    } else if (event.type === 'contextmenu') {
      if (!this.canNavigate()) {
        event.preventDefault();
      }
      this._hideTooltip();
    } else if (this.isChevronClicked(event)) {
      event.stopPropagation();
      event.preventDefault();
      this._toggleBranch();
    } else if (this.isNavigationItemActive(event)) {
      event.stopPropagation();
      this._setBranchActive();
    } else if (this.isGroupSlotChanged(event)) {
      this.branch = event.target.assignedElements().length > 0;
    } else if (this.isTooltipSlotChanged(event)) {
      if (event.target.assignedElements().length > 0) {
        this.tooltipElement.classList.add('nav-tooltip__visible');
      } else {
        this.tooltipElement.classList.remove('nav-tooltip__visible');
      }
    } else if (event.type === 'mouseenter') {
      this._showTooltip();
    } else if (event.type === 'mouseleave') {
      this._hideTooltip();
    } else if (event.type === 'keydown') {
      if (this.branch && event.key === ' ') {
        event.preventDefault();
        this._toggleBranch();
      }
    }
  }

  /**
   * setup keyboard navigation.
   * Add events to handle TAB key press, "focus" and "blur" of
   * the navigation item
   */
  setupKeyboardNavigation = () => {
    this.addEventListener('keydown', this.handleKeydownEvent);
    this.addEventListener('focus', this.handleFocusEvent);
    this.addEventListener('blur', this.handleBlurEvent);
  };

  /**
   * handle a keydown event on the root (navigation item)
   *
   * @function handleKeydownEvent
   * @param {Event} event - keydown event
   */
  handleKeydownEvent = event => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.stopPropagation();
      const parent = event.target.parentElement;
      if (parent.lastElementChild === event.target) {
        this.tabIndex = 0;
      }
    }
  };

  /**
   * Handle focus set on the navigation item. Focus is transferred
   * to the link element. This allows the native event handling for links.
   *
   * @function handleFocusEvent
   */
  handleFocusEvent = () => {
    this.linkElement.focus();
    this.tabIndex = -1;
    this._showTooltip();
  };

  /**
   * Handle focus removed from the navigation item.
   */
  handleBlurEvent = () => {
    this.tabIndex = 0;
    this._hideTooltip();
  };

  /**
   * Check if navigationItem was clicked.
   *
   * @function isNavItemClicked
   * @param {Event} event - mouse event
   * @private
   * @returns {boolean}
   */
  isNavItemClicked = event =>
    event.type === 'click' && event.currentTarget.id === 'nav-item-link';

  /**
   * Check if chevron was clicked.
   *
   * @function isChevronClicked
   * @param {Event} event - mouse event
   * @private
   * @returns {boolean}
   */
  isChevronClicked = event =>
    event.type === 'click' && event.target.id === 'chevron';

  /**
   * Check if navigation item was set active
   *
   * @function isNavigationItemActive
   * @param {Event} event - mouse event
   * @private
   * @returns {boolean}
   */
  isNavigationItemActive = event => event.type === 'nav-item:active';

  /**
   * Check if a slotchange event was triggered on the group slot
   *
   * @function isGroupSlotChanged
   * @param {Event} event - slot change event
   * @private
   * @returns
   */
  isGroupSlotChanged = event =>
    event.type === 'slotchange' && event.target.name === 'group';

  /**
   * Check if a slotchange event was triggered on the tooltip slot
   *
   * @function isTooltipSlotChanged
   * @param {Event} event - slot change event
   * @private
   * @returns
   */
  isTooltipSlotChanged = event =>
    event.type === 'slotchange' && event.target.name === 'tooltip';

  /**
   * activate a navigation item.
   * If the navigation item is also a branch,
   * it must set it's activeChild prop to false.
   *
   * @function activate
   */
  activate = () => {
    this.active = true;
    if (this.branch) {
      this.activeChild = false;
    }
  };

  /**
   * determine if a navigation item can navigate.
   * Returns true if either the url or route are set.
   *
   * @function canNavigate
   * @private
   * @returns {boolean}
   */
  canNavigate = () => this.url != null || this.route != null;

  /**
   * Hide the tooltip
   *
   * @function _hideTooltip
   * @private
   */
  _hideTooltip = () => {
    this.tooltipElement?.hideTooltip?.();
  };

  /**
   * Show the tooltip
   *
   * @function _showTooltip
   * @private
   */
  _showTooltip = () => {
    this.tooltipElement?.showTooltip?.();
  };

  didChangeProps(changedProps) {
    if (changedProps.has('active') && this.active) {
      this.bubble('nav-item:active');
    }
    if (changedProps.has('activeChild') && this.activeChild) {
      this.bubble('nav-item:active');
    }

    if (changedProps.has('activeChild') && !this.activeChild) {
      const navItems = this.querySelectorAll('eui-navigation-item');
      navItems.forEach(item => {
        item.active = false;
        item.activeChild = false;
      });
    }
    if (changedProps.has('open')) {
      // find the group slot...
      const groupSlot = this.shadowRoot.querySelector('slot[name="group"]');
      const group = groupSlot.assignedElements()[0];
      if (group !== undefined) {
        group.open = this.open;
      }
    }
    if (changedProps.has('_level')) {
      const rootNavItem = this.shadowRoot.querySelector('.nav-item');
      const rootNavItemLink = this.shadowRoot.querySelector('.nav-item-link');
      rootNavItem.style.setProperty('--group-level', this._level);
      if (this.branch) {
        rootNavItemLink.style.setProperty(
          '--pad-left',
          `${9 + 12 * this._level}px`,
        );
      } else {
        rootNavItemLink.style.setProperty(
          '--pad-left',
          `${34 + 12 * this._level}px`,
        );
      }
    }
  }

  /**
   * Set the correct state for the navigation item when it's selected and "navigated to"
   * but it does not have a route/url
   *
   * @function _setSelected
   * @private
   */
  _setSelected = () => {
    this.active = true;
    this.activeChild = false;
  };

  /**
   * Set the navigation item branch active
   *
   * @function _setBranchActive
   * @private
   */
  _setBranchActive = () => {
    this.activeChild = true;
    this.active = false;
    this._openParentBranches();
  };

  /**
   * Toggle the branch opened/closed
   *
   * @function _toggleBranch
   * @private
   */
  _toggleBranch = () => {
    this.open = !this.open;
  };

  /**
   * When this item is selected it bubbles an event up to all it's parents.
   * If they are a branch and they are not open, then they should open.
   */
  _openParentBranches = () => {
    this.bubble('nav-item:open-branch');
  };

  /**
   * Open a branch only when it's a branch and not already open.
   */
  _openBranch = () => {
    if (this.branch && !this.open) {
      this.open = true;
    }
  };

  /**
   * Render the <e-nav-item> component. This function is called each time a
   * prop changes.
   */
  render() {
    const chevronType = this.open ? 'chevron-down' : 'chevron-right';
    const target = this.external ? '_blank' : null;
    let { route } = this;
    if (this.appRoot) {
      route = `/${this.appRoot}/${route}`;
    }
    return html`
      <div
        id="nav-item"
        class="nav-item"
        @mouseenter=${this}
        @mouseleave=${this}
      >
        <a
          tabindex="-1"
          id="nav-item-link"
          class="nav-item-link"
          href=${this.external ? this.url : ifDefined(route)}
          target=${ifDefined(target)}
          @contextmenu=${this}
          @focus=${event => {
            event.target.classList.add('focus');
          }}
          @blur=${event => {
            event.target.classList.remove('focus');
          }}
          @keydown=${this}
          @click=${this}
        >
          ${this.branch
            ? html`<eui-icon
                id="chevron"
                @click=${this}
                name=${chevronType}
              ></eui-icon>`
            : nothing}
          <div class="nav-content">
            <slot></slot>
          </div>
          ${this.external
            ? html`<eui-icon id="launch-icon" name="launch"></eui-icon>`
            : nothing}
        </a>
        <eui-tooltip position="right" class="nav-tooltip" delay="1000">
          <div part="tooltip-message" class="tooltip-message" slot="message">
            <slot name="tooltip" @slotchange=${this}></slot>
          </div>
        </eui-tooltip>
      </div>
      <slot name="group" @slotchange=${this} @nav-item:active=${this}> </slot>
    `;
  }
}

definition('eui-navigation-item', {
  style,
  props: {
    active: { attribute: true, type: Boolean },
    id: { type: String },
    activeChild: { attribute: true, type: Boolean },
    branch: { attribute: true, type: Boolean },
    open: { attribute: true, type: Boolean },
    external: { attribute: true, type: Boolean },
    appRoot: { type: String, default: '' },
    route: { attribute: true, type: String },
    tags: { type: Array, default: [] },
    url: { attribute: true, type: String },
    _level: { type: Number, default: 0 },
    label: { attribute: true, type: String },
  },
})(NavigationItem);

export { NavigationItem as default };
