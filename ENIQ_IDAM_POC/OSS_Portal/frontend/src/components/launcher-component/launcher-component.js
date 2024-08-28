/**
 * Component LauncherComponent is defined as
 * `<e-launcher-component>`
 *
 * Imperatively create component
 * @example
 * let component = new LauncherComponent();
 *
 * Declaratively create component
 * @example
 * <e-launcher-component></e-launcher-component>
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Loader } from '@eui/base';
import style from './launcher-component.css';
import rest from '../../utils/rest';
import configManager from '../../config/configManager';
import logger from '../../utils/logger';
import StorageModule from '../../utils/storage';
import { AppView } from '../app-view/app-view';
import { ProductView } from '../product-view/product-view';

import CONSTANTS from '../../utils/constants';

const { LAST_OPENED, FAVORITE_STATE, LOCAL_STORAGE_CHANGE, FOCUS_SEARCH_BAR_EVENT } = CONSTANTS;

class LauncherComponent extends LitComponent {
  constructor() {
    super();
    this.apps = [];
    this.groups = [];
    StorageModule.init();
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.handleProductSelection = this.handleProductSelection.bind(this);

    this.bindAppStateToLocalStorage();
  }

  static get components() {
    return {
      'eui-loader': Loader,
      'e-app-view': AppView,
      'e-product-view': ProductView,
    };
  }

  async didConnect() {
    this.isLoading = true;
    await configManager.initConfig();
    const appPromise = rest.getApps();
    const groupPromise = rest.getGroups();
    const [appResult, groupResult] = await Promise.allSettled([appPromise, groupPromise]);
    // Todo: create Notifications
    if (appResult.status === 'rejected') {
      logger.error(`Fetching apps failed: ${appResult.reason}`);
    }
    if (groupResult.status === 'rejected') {
      logger.error(`Fetching groups failed: ${groupResult.reason}`);
    }
    this.apps =
      appResult.status === 'fulfilled' ? appResult.value.filter((app) => !app.hidden) : [];
    this.groups = groupResult.status === 'fulfilled' ? groupResult.value : [];

    if (this.productName) {
      this.publishProductDetails();
    }

    this.isLoading = false;

    this.appState = StorageModule.get('appStates') || {};

    this.bubble('ready', {});

    const { handleProductSelection } = this;
    this.addEventListener('handle-product-selection', handleProductSelection);
  }

  handleAppStateChange(event) {
    const updateAppState = (previousState, appName, changedProperty) => {
      const newState = { ...previousState[appName], ...changedProperty };
      return { ...previousState, [appName]: newState };
    };

    const { detail } = event;
    const { apps } = this;
    let state = this.appState;
    const rootApp = apps.find((app) => app.name === detail.appName);
    if (rootApp && this._appHasChildren(rootApp)) {
      rootApp.childApps.forEach((child) => {
        state = updateAppState(state, child.name, detail.changed);
      });
    }
    state = updateAppState(state, detail.appName, detail.changed);
    StorageModule.set('appStates', state);
  }

  bindAppStateToLocalStorage() {
    // This is a custom event fired by StorageModule.
    window.addEventListener(LOCAL_STORAGE_CHANGE, (event) => {
      if (event.origin && event.origin !== window.location.href) {
        return;
      }
      const { detail } = event;
      if (detail.key === 'appStates') {
        this.appState = detail.newValue;
      }
    });
  }

  handleProductSelection(event) {
    event.stopPropagation();
    this.productName = event.detail;
    this.publishProductDetails();
  }

  publishProductDetails() {
    const currentProduct = this.groups.find((item) => item.name === this.productName);
    this.bubble('product-selected', {
      productName: this.productName,
      displayName: currentProduct?.displayName,
    });
  }

  _appHasChildren(app) {
    return app.childApps && app.childApps.length;
  }

  _getRecentApps() {
    const { appState } = this;
    const rootApps = this._getRootApps();
    const recentApps = new Set();
    Object.keys(appState)
      .filter((appName) => appState[appName][LAST_OPENED])
      .sort((a, b) => appState[b][LAST_OPENED] - appState[a][LAST_OPENED])
      .forEach((appName) => {
        const recentApp = rootApps.find(
          (app) =>
            app.name === appName || (this._appHasChildren(app) && app.childNames.includes(appName)),
        );
        if (recentApp) {
          // appState may contain old, removed app
          recentApps.add(recentApp);
        }
      });

    return Array.from(recentApps);
  }

  _getFavoriteApps() {
    return this._getRootApps()
      .filter(
        (app) =>
          app.isFavorite ||
          (this._appHasChildren(app) && app.childApps.find((childApp) => childApp.isFavorite)),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  _enhanceAppListWithFavorite() {
    const { appState } = this;
    this.apps = this.apps.map((app) => ({
      ...app,
      isFavorite: appState[app.name] ? appState[app.name].isFavorite : false,
    }));
  }

  _setHierarchicAppStructure() {
    const { apps } = this;
    apps.forEach((app) => {
      if (app.childNames && app.childNames.length) {
        app.childApps = app.childNames
          .map((childName) => {
            const childApp = apps.find((a) => a.name === childName);
            if (childApp) {
              childApp.isChild = true;
              if (childApp.route) {
                childApp.route = childApp.route.includes(`${app.route}/`)
                  ? childApp.route
                  : `${app.route}/${childApp.route}`;
              }
              childApp.favoriteState = this._getFavoriteStateOfApp(childApp);
            }
            return childApp;
          })
          .filter((child) => child);
      }
      app.favoriteState = this._getFavoriteStateOfApp(app);
    });
  }

  _getFavoriteStateOfApp(app) {
    if (this._appHasChildren(app)) {
      switch (app.childApps.filter((child) => child.isFavorite).length) {
        case app.childNames.length:
          return FAVORITE_STATE.FAVORITE;
        case 0:
          return FAVORITE_STATE.NOT_FAVORITE;
        default:
          return FAVORITE_STATE.PARTIALLY_FAVORITE;
      }
    } else {
      return app.isFavorite ? FAVORITE_STATE.FAVORITE : FAVORITE_STATE.NOT_FAVORITE;
    }
  }

  _getRootApps() {
    const { apps } = this;
    return apps.filter((app) => !app.isChild);
  }

  didRender() {
    this.addEventListener(FOCUS_SEARCH_BAR_EVENT, () => {
      const { productName } = this;
      if (productName) {
        const appView = this.shadowRoot.querySelector('e-app-view');
        appView.dispatchEvent(new Event(FOCUS_SEARCH_BAR_EVENT));
      } else {
        const productView = this.shadowRoot.querySelector('e-product-view');
        productView.dispatchEvent(new Event(FOCUS_SEARCH_BAR_EVENT));
      }
    });
  }

  render() {
    this._enhanceAppListWithFavorite();
    this._setHierarchicAppStructure();
    const {
      productName,
      isLoading,
      isInSysBar,
      handleAppStateChange,
      handleProductSelection,
      apps,
      groups,
    } = this;

    if (isLoading) {
      return html`
        <div class="loading-container">
          <eui-loader></eui-loader>
        </div>
      `;
    }

    return html`
      ${productName
        ? html`
            <e-app-view
              .apps=${apps}
              .rootApps=${this._getRootApps()}
              .groups=${groups}
              .productName=${productName}
              .favoriteApps=${this._getFavoriteApps()}
              .isInSysBar=${isInSysBar}
              @app-status-change=${handleAppStateChange}
            ></e-app-view>
          `
        : html`
            <e-product-view
              .apps=${apps}
              .groups=${groups}
              .recentApps=${this._getRecentApps()}
              .favoriteApps=${this._getFavoriteApps()}
              .isInSysBar=${isInSysBar}
              @app-status-change=${handleAppStateChange}
              @product-selected=${handleProductSelection}
            ></e-product-view>
          `}
    `;
  }
}

definition('e-launcher-component', {
  style,
  props: {
    isLoading: {
      type: Boolean,
      default: false,
      attribute: false,
    },
    productName: {
      type: String,
      default: null,
      attribute: true,
    },
    appState: {
      type: Object,
      default: undefined,
      attribute: false,
    },
    isInSysBar: {
      type: Boolean,
      default: false,
      attribute: false,
    },
  },
})(LauncherComponent);

export { LauncherComponent };
