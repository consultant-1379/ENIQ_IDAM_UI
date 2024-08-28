/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
import { TemplateComponent, definition } from '../../../../../pkg/@eui/component.js';
import Breadcrumb from './breadcrumb.js';

export default class AppBar extends TemplateComponent {
  static get components() {
    return {
      'eui-app-bar-breadcrumb': Breadcrumb,
    };
  }

  static get template() {
    return `
      <div class="app-bar">
        <div class="left">
          <div class="menu">
            <div id="menu-toggle">
              <i class="navigation-toggle"></i>
            </div>
            <span class="menu-title">Menu</span>
          </div>
          <div class="title-holder"> 
            <eui-app-bar-breadcrumb></eui-app-bar-breadcrumb>
            <span id="subtitle" class="subtitle"></span>
          </div>
        </div>
        <div class="right">
        </div>
      </div>`;
  }

  constructor() {
    super();
    this.defaultAppNavWidth = 248;

    // used in the calculation of the availableWidth.
    // This is a buffer for the subtitle. By default it's
    // set to 0px, when/if a subtitle is set this buffer width
    // will be set based on the width of the subtitle/2.
    this.buffer = 0;
  }

  didConnect() {
    // get reference to the most used elements...
    this.appNavWidth = this._getAppNavWidth(this);
    this.leftSide = this.shadowRoot.querySelector('.left');
    this.rightSide = this.shadowRoot.querySelector('.right');
    this.breadcrumbElement = this.shadowRoot.querySelector(
      'eui-app-bar-breadcrumb',
    );

    // observe the changes to the width of the leftSide Element.
    this.resizeObserver = this._createResizeObserver();
    this.resizeObserver.observe(this.leftSide);

    const menuToggle = this.shadowRoot.querySelector('.menu');
    menuToggle.addEventListener('click', () => {
      this.menuOpen = !this.menuOpen;
    });
    this.subtitle = this.appSubtitle;
    this._breadcrumb = this.breadcrumb;
  }

  /**
   * Get the app nav width from CSS variables.
   * If it's not set use the default value defined in the constructor.
   *
   * @param {Element} component - the current component
   * @returns
   */
  _getAppNavWidth = component => {
    const width = parseInt(
      getComputedStyle(component).getPropertyValue('--appnav-width'),
      10,
    );
    /* eslint-disable-next-line no-restricted-globals */
    if (isNaN(width)) {
      return this.defaultAppNavWidth;
    }
    return width;
  };

  /**
   * Create a resize observer to observe changes in the width of the ".left" area.
   * When the size changes the availableWidth for the
   * breadcrumb to render must be re-calculated and sent to the breadcrumb so
   * it can determine if it should display the full/compact breadcrumb
   *
   * @function _createResizeObserver
   * @private
   * @returns ResizeObserver
   */
  _createResizeObserver() {
    return new ResizeObserver(([entry]) => {
      const width = this.calculateAvailableWidth(entry.target.clientWidth);
      this.breadcrumbElement.availableWidth = width;
    });
  }

  /**
   * Calculate the available width for the breadcrumb based on
   * the open/closed state of the menu and the
   * buffer width (the width of the subtitle / 2 ).
   */
  calculateAvailableWidth = width => {
    if (this.menuOpen) {
      width = width - this.appNavWidth - this.buffer;
    } else {
      width = width - 64 - this.buffer;
    }
    return width;
  };

  /**
   * set the subtitle on the app bar...
   *
   * Also set a buffer so that only half of the subtitle is truncated
   * when the app bar is reduced in size. This is used in the
   * calculation of the availableWidth to give to the breadcrumb
   *
   * @param {string} subtitle
   */
  set subtitle(subtitle) {
    const element = this.shadowRoot.querySelector('#subtitle');
    element.innerText = subtitle;
    this.buffer = element.clientWidth / 2;
  }

  /**
   * Set the breadcrumb and the availableWidth for it to render in.
   */
  set _breadcrumb(breadcrumb) {
    const width = this.calculateAvailableWidth(this.leftSide.clientWidth);
    this.breadcrumbElement.availableWidth = width;
    this.breadcrumbElement.crumbs = [...breadcrumb];
  }

  /**
   * Remove any existing action items before adding the new ones.
   *
   * @function _addActions
   * @private
   * @param { Array } actions - action items(i.e Any components) to be added
   */
  _addActions = actions => {
    // clear out all the old action-items
    this.rightSide.replaceChildren();
    if (actions.length > 0) {
      actions.forEach(action => {
        this.rightSide.appendChild(action);
      });
    }
  };

  didChangeProps(changedProps) {
    if (changedProps.has('appSubtitle')) {
      this.subtitle = this.appSubtitle;
    }
    if (changedProps.has('menuOpen')) {
      this.bubble('app:menu', { open: this.menuOpen });
      // re-calculate the availableWidth when the menu is opened/closed.
      // Do so after 120ms so as not to interfere with the open/close animation.
      setTimeout(() => {
        const width = this.calculateAvailableWidth(this.leftSide.clientWidth);
        this.breadcrumbElement.availableWidth = width;
      }, 120);
    }
    if (changedProps.has('breadcrumb')) {
      this._breadcrumb = this.breadcrumb;
    }
    if (changedProps.has('appActions')) {
      this._addActions(this.appActions);
    }
  }
}

const style = `
:host {
  background-color: var(--layer1, #EBEBEB);
  display: block;
  line-height: var(--appbar-height, 48px);
}
.title {
  font-size: 18px;
  line-height: inherit;
  color: var(--text, #242424);
}
.subtitle {
  color: var(--gray-text, #6A6A6A);
  font-size: 14px;
  font-weight: 500;
  margin-left: var(--space-large, 16px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--appbar-height, 48px);
  color: var(--text, #242424);
}
.menu {
  display: flex;
  flex: none;
}
.menu-action {
  padding: 0 var(--space-base, 8px) 0 var(--space-xxl, 32px);
}
.title-holder {
  height: var(--appbar-height, 48px);
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
}
.left {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  margin-left: var(--space-xxl, 32px);
  margin-right: var(--space-large, 16px);
}
.right {
  margin-right: var(--space-large, 16px);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  flex: none;
  line-height: normal;
}
.right > * {
  margin-left: var(--space-base, 8px);
  flex: none;
}
.right > *:first-child {
  margin-left: 0;
}

#menu-toggle {
  width: var(--space-large, 16px);
  height: var(--space-large, 16px);
  cursor: pointer;
  position: relative;
  margin-right: var(--space-base, 8px);
}

.navigation-toggle::before,
.navigation-toggle::after {
  position: absolute;
  display: block;
  width: 12px;
  margin: 0 2px;
  height: 2px;
  content: '';
  background-color: var(--blue-50, #008CFF);
  transition: width 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
    transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
    top 0.25s 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  transform: rotate(0);
  transform-origin: center;
}

.navigation-toggle::before {
  top: 30%;
}

.navigation-toggle::after {
  top: 70%;
}

:host([menu-open]) .navigation-toggle::before,
:host([menu-open]) .navigation-toggle::after {
  transition: top 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
    transform 0.25s 0.5s cubic-bezier(0.65, 0.05, 0.36, 1),
    width 0.25s 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  width: 12px;
}

:host([menu-open]) .navigation-toggle::before {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

:host([menu-open]) .navigation-toggle::after {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.menu-title {
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  overflow: hidden;
  font-size: 14px;
  white-space: nowrap;
  max-width: 170px;
  transition: opacity 125ms cubic-bezier(.65,.05,.36,1) 100ms,
  width 125ms cubic-bezier(.65,.05,.36,1) 100ms;
  opacity: 0;
  width: 0;
}

:host([menu-open]) .menu-title {
  opacity: 1;
  width: auto;
  transition: opacity 125ms cubic-bezier(.65,.05,.36,1) 100ms,
    width 125ms cubic-bezier(.65,.05,.36,1) 100ms;
}

:host([menu-open]) .menu {
  width: 216px;
  transition: width 125ms cubic-bezier(.65,.05,.36,1);
}

:host([single-app]) .menu {
  display: none;
}

:host([single-app]) .left {
  margin-left: var(--space-large, 16px);
}

eui-app-bar-breadcrumb {
  flex: none;
}
.menu {
  width: var(--space-xxl, 32px);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  transition: width 155ms cubic-bezier(.65,.05,.36,1) 125ms;
}

@media only screen and (max-width: 480px) {
  :host([menu-open]) .title-holder {
    opacity: 0;
    display: none;
  }
  .title-holder {
    opacity: 1;
    transition: opacity 125ms cubic-bezier(.65,.05,.36,1) 100ms;
  }
  :host([menu-open]) .right {
    display: none;
  }
  :host([menu-open]) .menu {
    transition: none;
  }
  .menu {
    transition: none;
  }
}
`;

definition('eui-app-bar', {
  style,
  props: {
    appSubtitle: { attribute: true, type: String },
    menuOpen: { attribute: true, type: Boolean },
    singleApp: { attribute: true, type: Boolean },
    breadcrumb: { type: Array, default: [] },
    appActions: { type: Array, default: [] },
  },
})(AppBar);
