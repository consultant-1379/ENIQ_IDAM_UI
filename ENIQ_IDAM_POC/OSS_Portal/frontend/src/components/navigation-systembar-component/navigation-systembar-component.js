/**
 * Component NavigationSystembarComponent is defined as
 * `<e-navigation-systembar-component>`
 *
 * Imperatively create component
 * @example
 * let component = new NavigationSystembarComponent();
 *
 * Declaratively create component
 * @example
 * <e-navigation-systembar-component></e-navigation-systembar-component>
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition, nothing } from '@eui/lit-component';
import { Icon } from '@eui/theme';
import { Link } from '@eui/base';
import { Tile } from '@eui/layout';
import { i18nMixin } from '@adp/ui-components';
import style from './navigation-systembar-component.css';

import CONSTANTS from '../../utils/constants';

import { LauncherComponent } from '../launcher-component/launcher-component';

import defaultI18n from './locale/en-us.json';

const { FOCUS_SEARCH_BAR_EVENT } = CONSTANTS;

class NavigationSystembarComponent extends i18nMixin(defaultI18n, LitComponent) {
  constructor() {
    super();
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  static get components() {
    return {
      'eui-link': Link,
      'eui-icon': Icon,
      'eui-tile': Tile,
      'e-launcher-component': LauncherComponent,
    };
  }

  get meta() {
    return import.meta;
  }

  handleProductSelection(event) {
    const currentProduct = event.detail;
    this.productName = currentProduct.productName;
    this.displayName = currentProduct.displayName;
  }

  handleBackButton(event) {
    event.preventDefault();
    event.stopPropagation();
    this.productName = '';
  }

  didRender() {
    this.addEventListener(FOCUS_SEARCH_BAR_EVENT, () => {
      const launcherComponent = this.shadowRoot.querySelector('e-launcher-component');
      launcherComponent.dispatchEvent(new Event(FOCUS_SEARCH_BAR_EVENT));
    });
  }

  render() {
    const { i18n, productName, displayName, handleProductSelection, handleBackButton } = this;

    return html`
      ${productName
        ? html`
            <eui-link @click=${handleBackButton}>
              <eui-icon name="arrow-left" id="back-button"></eui-icon>
              <span>${i18n.BACK}</span>
            </eui-link>
            |
            <eui-tile tile-title="${displayName}" class="product-name"></eui-tile>
          `
        : nothing}
      <e-launcher-component
        .productName=${productName}
        .isInSysBar=${true}
        @product-selected=${handleProductSelection}
      ></e-launcher-component>
    `;
  }
}

definition('e-navigation-systembar-component', {
  style,
  props: {
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
})(NavigationSystembarComponent);

export { NavigationSystembarComponent };
