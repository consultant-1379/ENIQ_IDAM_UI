/**
 * Component LauncherSystembarComponent is defined as
 * `<e-launcher-systembar-component>`
 *
 * Imperatively create component
 * @example
 * let component = new LauncherSystembarComponent();
 *
 * Declaratively create component
 * @example
 * <e-launcher-systembar-component></e-launcher-systembar-component>
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { FlyoutPanel } from '@eui/layout';
import { Icon } from '@eui/theme';
import { Link } from '@eui/base';
import { i18nMixin } from '@adp/ui-components';
import style from './launcher-systembar-component.css';

import router from '../../utils/router';
import CONSTANTS from '../../utils/constants';

import { NavigationSystembarComponent } from '../navigation-systembar-component/navigation-systembar-component';

import defaultI18n from './locale/en-us.json';

const { FOCUS_SEARCH_BAR_EVENT } = CONSTANTS;

class LauncherSystembarComponent extends i18nMixin(defaultI18n, LitComponent) {
  constructor() {
    super();
    this.toggleFlyoutPanel = this.toggleFlyoutPanel.bind(this);
    this.handlePortalLinkClick = this.handlePortalLinkClick.bind(this);
    this._clickedOutsideHandler = this._clickedOutsideHandler.bind(this);
  }

  static get components() {
    return {
      'eui-flyout-panel': FlyoutPanel,
      'eui-icon': Icon,
      'eui-link': Link,
      'e-navigation-systembar-component': NavigationSystembarComponent,
    };
  }

  get meta() {
    return import.meta;
  }

  didRender() {
    const { toggleFlyoutPanel } = this;
    const flyoutPanel = this.shadowRoot.querySelector('eui-flyout-panel');
    flyoutPanel.closeButton.hidden = false;
    flyoutPanel.closeButton.addEventListener('click', toggleFlyoutPanel);
    document.addEventListener('location:change', () => {
      if (this.showFlyout) {
        toggleFlyoutPanel();
      }
    });
  }

  toggleFlyoutPanel() {
    this.showFlyout = !this.showFlyout;
    if (this.showFlyout) {
      setTimeout(() => this.focusSearchBar(), 100);
    }
  }

  focusSearchBar() {
    const navigationSystembarComponent = this.shadowRoot.querySelector(
      'e-navigation-systembar-component',
    );
    navigationSystembarComponent.dispatchEvent(new Event(FOCUS_SEARCH_BAR_EVENT));
  }

  handlePortalLinkClick(event) {
    event.stopPropagation();
    event.preventDefault();
    router.loadPortal();
  }

  _clickedOutsideHandler(event) {
    const flyoutPanel = this.shadowRoot.querySelector('eui-flyout-panel');
    const outerPanel = flyoutPanel.shadowRoot.querySelector('.flyout-panel__outer');
    if (event.composedPath().includes(outerPanel)) {
      this.showFlyout = false;
    }
  }

  didConnect() {
    const { _clickedOutsideHandler } = this;
    document.addEventListener('mousedown', _clickedOutsideHandler);
    document.addEventListener('touchend', _clickedOutsideHandler);
  }

  didDisconnect() {
    const { _clickedOutsideHandler } = this;
    document.removeEventListener('mousedown', _clickedOutsideHandler);
    document.removeEventListener('touchend', _clickedOutsideHandler);
  }

  render() {
    const { i18n, productName, displayName, toggleFlyoutPanel, showFlyout, handlePortalLinkClick } =
      this;

    return html`
      <eui-icon name="app-launcher" color="white" @click=${toggleFlyoutPanel}></eui-icon>
      <eui-flyout-panel id="launcher-flyout" .show=${showFlyout}>
        <div slot="content">
          <e-navigation-systembar-component
            .productName=${productName}
            .displayName=${displayName}
          ></e-navigation-systembar-component>
        </div>
        <div slot="footer" id="launcher-flyout-footer">
          <eui-link @click=${handlePortalLinkClick}>${i18n.OPEN_ERICSSON_PORTAL}</eui-link>
        </div>
      </eui-flyout-panel>
    `;
  }
}

definition('e-launcher-systembar-component', {
  style,
  props: {
    showFlyout: {
      type: Boolean,
      default: false,
      attribute: true,
    },
    productName: {
      type: String,
      default: null,
      attribute: false,
    },
    displayName: {
      type: String,
      default: null,
      attribute: false,
    },
  },
})(LauncherSystembarComponent);

export { LauncherSystembarComponent };
