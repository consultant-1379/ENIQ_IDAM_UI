/**
 * Component CustomMenuPanel is defined as
 * `<e-custom-menu-panel>`
 *
 * Imperatively create component
 * @example
 * let component = new CustomMenuPanel();
 *
 * Declaratively create component
 * @example
 * <e-custom-menu-panel></e-custom-menu-panel>
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Tree } from '@eui/base';
import { i18nMixin } from '@adp/ui-components';
import style from './custom-menu-panel.css';

import router from '../../utils/router';
import rest from '../../utils/rest';
import logger from '../../utils/logger';
import CONSTANTS from '../../utils/constants';

import defaultI18n from './locale/en-us.json';

const { PRODUCT_TYPE, ALL_APPS, PRODUCT_NAME } = CONSTANTS;

class CustomMenuPanel extends i18nMixin(defaultI18n, LitComponent) {
  constructor() {
    super();
    this.groups = [];
    this.routeCallBack = this.routeCallBack.bind(this);
  }

  static get components() {
    return {
      'eui-tree': Tree,
    };
  }

  get meta() {
    return import.meta;
  }

  /**
   * @protected
   * @function didConnect
   * @description Lifecycle initialize the config load
   */
  async didConnect() {
    // Todo: create Notifications
    try {
      this.groups = await rest.getGroups();
    } catch (e) {
      logger.error(`Fetching groups failed: ${e.message}`);
    }

    const productName = this.getOpenProductName();
    this.menuData = this._getMenuDataFromAppConfigs(this.groups, productName);
    this.addRoutes();
  }

  addRoutes() {
    const route1Id = router.addRoute(this.routeCallBack);
    this.routesIds = [route1Id];
  }

  routeCallBack(_appPath, query) {
    const { productName } = query;
    this._updateMenuState(this.menuData, productName || '');
  }

  didDisconnect() {
    this.routesIds.forEach((routeId) => {
      router.removeRoute(routeId);
    });
  }

  _updateMenuState = (menuData, productName) => {
    menuData.forEach((menuItem) => {
      if (menuItem.children) {
        this._updateMenuState(menuItem.children, productName);
      } else if (productName === menuItem.id) {
        menuItem.active = true;
      } else {
        menuItem.active = false;
      }
    });
    this.menuData = [...menuData];
  };

  _getMenuDataFromAppConfigs(groups, productName) {
    return groups
      .filter((g) => g.type === PRODUCT_TYPE)
      .filter((group) => !group.hidden)
      .map((product) => ({
        active: productName === product.name,
        data: {
          value: product.name,
        },
        id: product.name,
        label: product.displayName,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  getOpenProductName() {
    const regex = new RegExp(`${PRODUCT_NAME}=([^&]+)&*`);
    const openProduct = window.location.href.match(regex, 'g');
    const productName = openProduct ? openProduct[1] : null;
    return this.isValidProductName(productName) ? productName : null;
  }

  isValidProductName(productName) {
    return (
      productName === ALL_APPS || this.groups.findIndex((item) => item.name === productName) !== -1
    );
  }

  handleEvent(event) {
    const treeItems = event.currentTarget.shadowRoot.querySelectorAll('eui-tree-item');
    if (!treeItems[0].attributes.open && treeItems[0].attributes.active) {
      router.goToMainPage();
    } else {
      const activeProduct = Array.from(treeItems)
        .map((item) => item.itemData)
        .find((itemData) => !itemData.children && itemData.active);
      // root app menu item
      if (!activeProduct) {
        return;
      }
      if (event.type === 'click') {
        router.goToProduct(activeProduct.id);
      }
    }
  }

  /**
   * @private
   * @function render
   * @description The render method for the component
   */
  render() {
    const { i18n } = this;
    const productName = this.getOpenProductName();
    const menuData = [
      {
        active: !productName,
        label: i18n.MENU.LAUNCHER,
        open: true,
        children: [
          {
            active: productName === ALL_APPS,
            data: {
              value: ALL_APPS,
            },
            id: ALL_APPS,
            label: i18n.MENU.ALL,
          },
        ].concat(this.menuData),
      },
    ];
    return html`
      <eui-tree navigation @click=${this} .data=${menuData} open></eui-tree>
    `;
  }
}

definition('e-custom-menu-panel', {
  style,
  props: {
    menuData: {
      type: Array,
      default: [],
      attribute: false,
    },
  },
})(CustomMenuPanel);

export { CustomMenuPanel };
