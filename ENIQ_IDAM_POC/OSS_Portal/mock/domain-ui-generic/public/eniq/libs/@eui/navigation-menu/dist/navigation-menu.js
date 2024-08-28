import { definition, LitComponent, html, ifDefined, nothing } from '../../../pkg/@eui/lit-component.js';
import NavigationGroup from './navigation-group.js';
import NavigationItem from './navigation-item.js';
import NavigationSearch from './navigation-search.js';
import '../../../pkg/@eui/theme/icon.js';
import '../../../pkg/@eui/base/tooltip.js';

var style = ":host {\n  height: 100% !important;\n  overflow:auto;\n  display:block;\n}\n\n.no-results-found {\n  height: 35%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  color: var(--text, #242424);\n  flex-direction: column;\n}\n\n.no-results-found-message {\n  padding-bottom: var(--space-large, 16px);\n}\n\n.menu-tree {\n  overflow:auto;\n  height: calc(100% - 48px);\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n* { /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class NavigationMenu extends LitComponent {
  constructor() {
    super();
    // +1 from container slight difference in count incrementing
    this.nestedLevelLimit = 11;
  }

  static get components() {
    return {
      'eui-navigation-item': NavigationItem,
      'eui-navigation-group': NavigationGroup,
      'eui-navigation-search': NavigationSearch,
    };
  }

  /**
   * Active app is hidden, must locate parent app
   *
   * @function _locateParent
   * @param {String} menuPath - menuPath of app
   * @private
   */
  _locateParent(menuPath) {
    const item = this.configData.find(app => app.menuPath === menuPath) || null;

    if (item) {
      let parent;
      if (item.parentId) {
        // Using routeMap, accurate
        parent = this.configData.find(app => app?.routeId === item.parentId);
      } else {
        // Standalone, limited options and more error-prone
        parent = this.configData.find(app =>
          app.childNames?.includes(item.name),
        );
      }
      if (parent) {
        this._setActiveNavigationItem(parent?.menuPath);
        return;
      }
    }
    // Active item does not exist in configData or DOM
    // Either value just set or post config change
    // Note: DOM won't be in sync regardless of value!!!
    // This won't trigger a render
    this.activeItem = null;
  }

  /**
   * Set the menu item active
   *
   * @function _setActiveNavigationItem
   * @param {String} route - path that was navigated to (no hash present)
   * @private
   */
  _setActiveNavigationItem = route => {
    if (!route) {
      // may not be defined at time configData is changed
      // it would be the old this.activeItem
      return;
    }

    if (this.shadowRoot) {
      const menuPath = route;
      if (this.routerMode === 'hash') {
        route = `#${route}`;
      }

      // TODO this is costly due to recursion
      //  Number of items fixed until configData changes
      const navItem = [
        ...this.shadowRoot.querySelectorAll('eui-navigation-item'),
      ].find(item => item?.route === route);
      if (navItem && !navItem.active) {
        this.activeItem = menuPath;
        navItem.activate();
      } else {
        // Possible hidden app, use fallback
        this._locateParent(menuPath);
      }
    }
  };

  didConnect() {
    if (this.searchable) {
      document.addEventListener('nav-search:display-item', this);
    }

    if (!this.syncDisabled) {
      document.addEventListener('location:routemap', this);

      // Check to see if being used with container
      // if so defer to its routeMap
      if (window.EUI?.Router) {
        const { routeMap, mode, appRoot } = window.EUI.Router.getRouteMap();
        this.configData = routeMap;
        this.routerMode = mode;
        this.appRoot = appRoot;
      }
    }

    if (this.activeItem) {
      window.requestAnimationFrame(() => {
        this._setActiveNavigationItem(this.activeItem);
      });
    }
  }

  handleEvent(event) {
    if (event.type === 'location:routemap') {
      this.configData = event.detail.routeMap;
      this.routerMode = event.detail.mode;
      this.appRoot = event.detail.appRoot;
    }
    if (event.type === 'nav-search:display-item') {
      const { navItems } = event.detail;
      const menuItems = this.shadowRoot.querySelectorAll('eui-navigation-item');
      menuItems.forEach(menuItem => {
        menuItem.style.display = 'none';
        if (navItems.length === 0) {
          this.shadowRoot.querySelector('eui-navigation-group').style.display =
            'none';
          this.shadowRoot.querySelector('.no-results-found').style.display =
            'flex';
        } else {
          this.shadowRoot.querySelector('eui-navigation-group').style.display =
            'block';
          this.shadowRoot.querySelector('.no-results-found').style.display =
            'none';
        }
        if (navItems.length === this.configData.length) {
          this.displayMenuItem(menuItem, false);
        }
        navItems.forEach(navItem => {
          if (navItem.displayName === menuItem.label) {
            menuItem.style.display = 'block';
            if (navItems.length === this.configData.length) {
              this.displayMenuItem(menuItem, false);
            } else {
              this.displayMenuItem(menuItem, true);
            }
          }
        });
      });
    }
  }

  /**
   *
   * @param {Object} menuItem - individual eui-navigation-item element got from the dom
   * @param {Boolean} openClose - sets if a menuItem should be opened/closed, if true, menuItem is set to open
   */
  displayMenuItem = (menuItem, openClose) => {
    const nodes = [];
    let element = menuItem;
    nodes.push(element.parentElement);
    while (element.parentElement) {
      nodes.unshift(element.parentNode);
      element = element.parentNode;
    }
    nodes.forEach(node => {
      if (node.nodeName.toLowerCase() === 'eui-navigation-item') {
        node.style.display = 'block';
        node.open = openClose;
      }
    });
  };

  didDisconnect() {
    document.removeEventListener('location:routemap', this);
    if (this.searchable) {
      document.removeEventListener('nav-search:display-item', this);
    }
  }

  didChangeProps(changedProps) {
    if (changedProps.has('configData')) {
      window.requestAnimationFrame(() => {
        // iterate over the navigation items (after they've rendered) and set
        // the correct item active.
        // TODO this.activeItem is not a prop and on init undefined
        //  Can't use the activeMenuItem setter while this is pending
        //  as it will do the same thing
        //  activeItem is the previous route info
        //  Container only interacts with the setter.
        //  This is only important if configData has changed and a route is active
        this._setActiveNavigationItem(this.activeItem);
      });
    }
  }

  /**
   * Setter for the active navigation item
   *
   * @param activeMenuItem
   */
  set activeMenuItem(route) {
    this._setActiveNavigationItem(route);
  }

  /**
   * Create a Navigation item
   *
   * @param {Object} app - app meta entry
   * @returns html
   */
  _createNavItem = app => {
    if (app.hidden) {
      // Only hit by first level
      return null;
    }

    let route = null;

    if (app.menuPath) {
      if (this.routerMode === 'hash') {
        route = `#${app.menuPath}`;
      } else if (this.routerMode === 'history') {
        route = app.menuPath;
      }
    }

    return html`
      <eui-navigation-item
        exportparts="tooltip-message"
        .id=${app.id}
        .appRoot=${this.appRoot}
        route=${ifDefined(route)}
        url=${ifDefined(app.url)}
        ?external=${app.type === 'external'}
        .tags=${app.tags}
        ?active=${app.active}
        label=${app.displayName}
      >
        ${app.displayName}
        ${app.descriptionLong
          ? html` <span slot="tooltip">${app.descriptionLong}</span> `
          : nothing}
        ${this._createNavGroup(app.childNames)}
      </eui-navigation-item>
    `;
  };

  /**
   * Find the meta data for an App with the given name.
   * The search takes place on the configData prop.
   *
   * @function findApp
   * @param {String} name - name of the app to search for
   * @private
   * @returns {Object} | null
   */
  _findApp = name => this.configData.find(app => app.name === name) || null;

  /**
   * create a navigation group
   *
   * @function _createNavGroup
   * @param {Array} names - array of child names from UI-Meta
   * @returns {html}
   * @private
   */
  _createNavGroup = names => {
    this.nestedLevel += 1;
    let content = nothing;
    if (this.nestedLevel > this.nestedLevelLimit) {
      /* eslint-disable-next-line no-console */
      console.warn('Nested limit reached');
    } else if (names != null && names.length > 0) {
      const childApps = [];
      names.forEach(name => {
        const app = this._findApp(name);
        if (app === null || app.hidden) {
          return;
        }
        childApps.push(app);
      });

      if (childApps.length > 0) {
        content = html`<eui-navigation-group slot="group">
          ${childApps.map(app => this._createNavItem(app))}
        </eui-navigation-group>`;
      }
    }
    this.nestedLevel -= 1;
    return content;
  };

  /**
   * Check if an app is a child of any other app in the configData.
   * If it is a child this mens that it should NOT be added as a
   * root menu (first level) item
   *
   * @function _isChildApp
   * @param {String} appName - name of the app to check
   * @private
   * @returns Boolean
   */
  _isChildApp = appName =>
    this.configData.some(app => app.childNames?.includes(appName));

  /**
   * Remove all non first level apps from configData. Return
   * apps that are NOT children of other apps.
   *
   * @function _firstLevelApps
   * @param {Array} apps - array of apps from ui-meta
   * @private
   * @returns {Array}
   */
  _firstLevelApps = apps => {
    const firstLevelApps = [];
    apps.forEach(app => {
      if (!this._isChildApp(app.name)) {
        firstLevelApps.push(app);
      }
    });
    return firstLevelApps;
  };

  render() {
    this.nestedLevel = 0;
    const menuData = this._firstLevelApps(this.configData);
    return html`
      ${this.searchable
        ? html`<eui-navigation-search
            .navItems=${this.configData}
          ></eui-navigation-search>`
        : nothing}
      <eui-navigation-group class="menu-tree">
        ${menuData.map(app => this._createNavItem(app))}
      </eui-navigation-group>
      ${this.searchable
        ? html` <div class="no-results-found">
            <span class="no-results-found-message">No Results Found.</span>
            <slot name="no-results-found"></slot>
          </div>`
        : nothing}
    `;
  }
}
definition('eui-navigation-menu', {
  style,
  props: {
    configData: { type: Array, default: [] },
    appRoot: { type: String, default: '' },
    routerMode: { type: String, default: 'hash' },
    searchable: { attribute: true, type: Boolean },
    syncDisabled: { attribute: true, type: Boolean },
  },
})(NavigationMenu);

export { NavigationMenu };
