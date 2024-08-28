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
import SystemBar from '../system-bar/system-bar.js';
import AppBar from '../app-bar/app-bar.js';
import Loader from '../loader/loader.js';
import SystemPanel from '../system-panel/system-panel.js';
import Context from '../core/context.js';
import { dynamic } from '../utils/dynamic.js';
import { InfoMessage } from '../info-message/info-message.js';

class Container extends TemplateComponent {
  static get components() {
    return {
      'eui-app-bar': AppBar,
      'eui-container-system-bar': SystemBar,
      'eui-system-panel': SystemPanel,
      'eui-container-loader': Loader,
    };
  }

  constructor() {
    super();
    InfoMessage.register(); // register the info message globally
    this.context = new Context({
      metaData: this.metaData,
      appRoot: this.appRoot,
    });
    this.router = window.EUI.Router;
    this.content = this.shadowRoot.querySelector('.content');
    this.appBar = this.shadowRoot.querySelector('eui-app-bar');
  }

  /**
   * a static getter for plugins.
   */
  static get plugins() {
    return document.body.querySelector('eui-plugins');
  }

  /**
   * Overriding the call to register the Container.
   * If the Container uses plugins, it must fist load
   * all plugins, then call the "onBeforeContainerLoad"
   * lifecycle hook on ALL imported plugins. When this
   * finished the Container can then be registered.
   *
   * Once registered, the Container's constructor is
   * called.
   */
  static async register() {
    if (Container.plugins) {
      await window.customElements.whenDefined('eui-plugins');
      await Container.plugins?.importPlugins?.();
      await Container.plugins?.executeLifecycleHookAll?.(
        'onBeforeContainerLoad',
        { location: window.location },
      );
    }
    super.register();
  }

  // Getter for <slot name="app-navigation-slot">
  get navigationSlot() {
    return this.shadowRoot.getElementById('app-navigation-slot');
  }

  // Getter for the current app displayed in the shell.
  get currentApp() {
    return this.context.cache.currentApp;
  }

  // Getter for the Content Area (navigation + app)
  get contentArea() {
    return this.shadowRoot.querySelector('.content-area');
  }

  // Getter for the Application Layer
  get applicationLayer() {
    return this.shadowRoot.querySelector('.application-layer');
  }

  // Getter for the System Bar
  get systemBar() {
    return this.shadowRoot.querySelector('eui-container-system-bar');
  }

  /**
   * Handle navigating to new app with correct menu, app-bar status
   * @param {String} toApp - app path to navigate to from current app
   */
  handleNavigate(toApp) {
    this.router.goto(toApp);
    if (this.isCompactMode()) {
      this.appBar.menuOpen = false;
      this._openMenu(false);
    }
  }

  /**
   * Handle events from the loaded apps to change
   * Set displayName/subtitle of an app.
   * Open/Close the Application Layer
   *
   * @function handleEvent
   * @param {Event} event - events from apps.
   */
  handleEvent(event) {
    if (event.type === 'app:title') {
      this._setAppBarTitle(event.detail.displayName);
    } else if (event.type === 'app:subtitle') {
      this._setAppBarSubtitle(event.detail.subtitle);
    } else if (event.type === 'navigation:navigate') {
      this.handleNavigate(event.detail.route);
    } else if (event.type === 'app:menu') {
      this._openMenu(event.detail.open);
    } else if (event.type === 'app:breadcrumb') {
      this._setAppBarBreadcrumb(event.detail.breadcrumb);
    } else if (event.type === 'system:panel') {
      this._handleSystemPanel(event);
    } else if (event.type === 'app:lineage') {
      const { crumbs, metaData } = event.detail;
      this._setAppBarLineage(metaData, crumbs);
    } else if (event.type === 'app:actions') {
      this._setAppBarActions(event.detail?.actions);
    } else if (event.type === 'location:change') {
      this.loadApp(event.detail);
    }
  }

  /**
   * Handle the event "system:panel"
   * If the event doesn't have a payload:
   * 1. close the Application Layer.
   *
   * If the event has a payload:
   * 1. open the Application layer
   * 2. set the name of the panel to load in the System Layer Panel.
   *
   * If the event has a payload, but the panel is already loaded in the System Layer Panel:
   * 1. toggle the Application Layer
   *
   * @function handleSystemPanel
   * @param {Event} event
   * @private
   * @returns
   */
  _handleSystemPanel = event => {
    if (Object.keys(event.detail).length === 0) {
      this._closeApplicationLayer();
      return;
    }

    // set width...
    if (event.detail.width) {
      this.style.setProperty('--system-panel-width', event.detail.width);
    } else {
      this.style.setProperty('--system-panel-width', null);
    }

    // set panel and store previous panel...
    let previousSystemPanelName = null;
    if (event.detail.panel) {
      previousSystemPanelName = this._setSystemLayerPanel(event.detail.panel);
    }

    if (event.detail.panel == null) {
      // event does not set panel, so close Application Layer...
      this._closeApplicationLayer();
    } else if (previousSystemPanelName === event.detail.panel) {
      // a new panel was NOT loaded, toggle the Application Layer...
      this._toggleApplicationLayer();
    } else {
      // a new panel was loaded, open the Application Layer...
      this._openApplicationLayer();
    }
  };

  /**
   * Set the name of the panel to load in the System Layer Panel.
   * Returns the name of the previous panel.
   *
   * @function setSystemLayerPanel
   * @param {String} panel - name of panel to load in System Layer Panel Component.
   * @private
   * @returns {String} name of previous panel
   */
  _setSystemLayerPanel = panel => {
    const systemPanel = this.shadowRoot.querySelector('eui-system-panel');
    const previousSystemPanelName = systemPanel.panel;
    systemPanel.panel = panel;
    return previousSystemPanelName;
  };

  /**
   * Toggle the Application Layer.
   * Close the Application Layer if it's open.
   * Open the Application Layer if it's closed.
   *
   * @function toggleApplicationLayer
   * @private
   */
  _toggleApplicationLayer = () => {
    if (this.applicationLayer.classList.contains('application-layer__open')) {
      this._closeApplicationLayer();
    } else {
      this._openApplicationLayer();
    }
  };

  /**
   * Close the Application Layer and remove click event handler.
   *
   * @function closeApplicationLayer
   * @private
   */
  _closeApplicationLayer = () => {
    this.applicationLayer.classList.remove('application-layer__open');
    this.applicationLayer.removeEventListener(
      'click',
      this._handleApplicationLayerClick,
    );
  };

  /**
   * Open the Application Layer and add a click handler to close it when clicked.
   *
   * @function openApplicationLayer
   * @private
   */
  _openApplicationLayer = () => {
    this.applicationLayer.classList.add('application-layer__open');
    requestAnimationFrame(() => {
      this.applicationLayer.addEventListener(
        'click',
        this._handleApplicationLayerClick,
      );
    });
  };

  /**
   * Event handler for when "open" application layer is clicked
   *
   * @function handleApplicationLayerClick
   * @private
   */
  _handleApplicationLayerClick = () => {
    // if open application layer is clicked, bubble 'system:panel'
    // event with no detail - handleEvent function will then call
    // this._handleSystemPanel which will call this._closeApplicationLayer
    this.bubble('system:panel');
  };

  /**
   * BREADCRUMB management (start)...
   * -------------------------------------------------------------
   */

  /**
   * Set the breadcrumb on the AppBar.
   *
   * @function _setAppBarBreadcrumb
   * @param {[object]} crumbs - array of crumbs for the
   * breadcrumb component.
   * @private
   */
  _setAppBarBreadcrumb = crumbs => {
    this.appBar.breadcrumb = crumbs;
  };

  /**
   * Get the crumb data and feed to the breadcrumb in the AppBar.
   *
   * @function _setAppBarLineage
   * @param {Object} metaData - app metaData
   * @param {[Object]} crumbs - array of crumbs
   * @private
   */
  _setAppBarLineage = (metaData, crumbs = []) => {
    // action callback navigate to route if crumb clicked.
    const navigate = route => {
      this.handleNavigate(route);
    };

    const lineage = this.context.findAppLineage(metaData.parentId);
    lineage.forEach(app => {
      const { displayName, menuPath } = app;
      if (menuPath) {
        crumbs.splice(0, 0, { displayName, action: () => navigate(menuPath) });
      } else {
        crumbs.splice(0, 0, { displayName });
      }
    });

    crumbs.push({ displayName: metaData.displayName });
    this._setAppBarBreadcrumb(crumbs);
  };

  /**
   * Set the title of the app.
   *
   * @function _setAppBarTitle
   * @param {String} displayName - title of the App
   * @private
   */
  _setAppBarTitle = displayName => {
    this._setAppBarBreadcrumb([{ displayName }]);
  };

  /**
   * Set the subtitle of the app.
   *
   * @function _setAppBarSubtitle
   * @param {String} subtitle - subtitle of the app
   * @private
   */
  _setAppBarSubtitle = subtitle => {
    this.appBar.appSubtitle = subtitle;
  };

  /**
   * Get the action items data and feed to the AppBar.
   *
   * @function _setAppBarActions
   * @param {Array} actions - array of action items
   * @private
   */
  _setAppBarActions = (actions = []) => {
    if (actions) {
      this.appBar.appActions = [...actions];
    }
  };

  /**
   * BREADCRUMB management (end)...
   * -------------------------------------------------------------
   */

  /**
   * open/close the navigation menu.
   *
   * @function _openMenu
   * @param {Boolean} open - open/close the navigation menu
   * @private
   */
  _openMenu = open => {
    if (open) {
      this.contentArea.classList.remove('navigation-hidden');
    } else {
      this.contentArea.classList.add('navigation-hidden');
    }
  };

  /**
   * Called when the container is connected to the DOM.
   * 1. create a context for the session
   * 2. preload the context
   * 3. add listeners
   */
  didConnect() {
    this._addListeners();
    if (this.navigationSlot.assignedElements().length > 0) {
      [this.navigationMenu] = this.navigationSlot.assignedElements();
      this.appBar.singleApp = false;
      this.appBar.menuOpen = this.menuOpen;
      this._openMenu(this.menuOpen);
    } else {
      this.navigationMenu = null;
      this.appBar.singleApp = true;
      this.appBar.menuOpen = false;
    }

    this.systemBar.defaultApp = this.defaultApp;
  }

  /**
   * Called when the container is disconnected from the DOM.
   */
  didDisconnect() {
    this._removeListeners();
  }

  /**
   * Add listeners for:
   * 1. app bar changes
   * 2. additions/deletions to/from the navigation slot
   * 3. route changes
   *
   * @function _addListeners
   * @private
   */
  _addListeners = () => {
    this.addEventListener('system:panel', this);
    this.addEventListener('app:breadcrumb', this);
    this.addEventListener('app:lineage', this);
    this.addEventListener('app:title', this);
    this.addEventListener('app:subtitle', this);
    this.addEventListener('app:menu', this);
    this.addEventListener('navigation:navigate', this);
    this.addEventListener('app:actions', this);
    this.navigationSlot.addEventListener('slotchange', event =>
      this.handleNavigationMenu(event),
    );
    document.addEventListener('location:change', this);

    // Load app for current url
    this.loadApp(this.context.getLocation());
  };

  /**
   * remove listeners for:
   * 1. app bar changes
   * 2. additions/deletions to/from the navigation slot
   * 3. route changes
   *
   * @function _removeListeners
   * @private
   */
  _removeListeners = () => {
    this.removeEventListener('system:panel', this);
    this.removeEventListener('app:breadcrumb', this);
    this.removeEventListener('app:lineage', this);
    this.removeEventListener('app:title', this);
    this.removeEventListener('app:subtitle', this);
    this.removeEventListener('app:menu', this);
    this.removeEventListener('navigation:navigate', this);
    this.removeEventListener('app:actions', this);
    this.navigationSlot.removeEventListener(
      'slotchange',
      this.handleNavigationMenu,
    );
    document.removeEventListener('location:change', this);
  };

  /**
   * handle the slot change event on the slot which holds the navigation menu.
   * If a navigation menu is added, then show the menu controller.
   * If a navigation menu is not added or later removed, hide the menu controller.
   *
   * @function handleNavigationMenu
   * @param {Event} event - slotchange event
   */
  handleNavigationMenu = event => {
    if (event.target.assignedElements().length > 0) {
      [this.navigationMenu] = event.target.assignedElements();
      this.appBar.singleApp = false;
    } else {
      this.navigationMenu = null;
      this.appBar.singleApp = true;
      this.appBar.menuOpen = false;
    }
  };

  isCompactMode = () =>
    getComputedStyle(this).getPropertyValue('--compact-mode').trim() === '1';

  /**
   * Load an application. This is triggered by a route change.
   *
   * Plugins
   * ---------------------------------------------------------------
   * If plugins are loaded the lifecycle hook "onBeforeAppLoad" will
   * be called on all imported plugins BEFORE the app is loaded.
   * If, however, a plugin blocks the app from loading an error
   * info message will be displayed instead. The details for the
   * error should be added to the reason in the rejected Promise
   * of the lifecycle call.
   *
   * @function loadApp
   * @param {String} query - query of the URL
   * @param {String} appPath - appPath of application to be loaded
   * @param {String} direction - direction of user navigation, back/forwards
   */
  loadApp = async ({ query, appPath, direction }) => {
    if (appPath === '/' && !this.defaultApp) {
      this.loadedApp();
      // TODO: localize
      this.loadError(
        'No default application has been specified. Add a default application using the Container\'s "default-app" attribute.',
        'Default application not set',
      );
    } else if (appPath === '/' && this.defaultApp) {
      // TODO this causes a loop and another call to loadApp, traps user
      //  when pressing the backwards button. We know if direction is -1
      //  we are going backwards but if going forwards into container this
      //  will be the same as pressing forwards button but will wipe any
      //  existing forwards history entries as it is a redirect.
      this.router.goto(this.defaultApp);
    } else {
      // Update props for existing app OR load a new app...

      // get the data for the app from routeMap...
      const { appMetaData, params } = this.context.findAppFromRouteMap(appPath);
      // Query > Params, priority as per design
      const props = { ...params, ...query, metaData: appMetaData };

      // if the metaData is found and the url has not changed --> current App's metaData.routeId
      // matches the appMetaData.routeId, just change the props as there is NO need to load the same module again...
      if (
        appMetaData?.module != null &&
        this.currentApp?.metaData?.routeId === appMetaData.routeId
      ) {
        // just update the props...
        this._setAppProps(this.currentApp, props);
        this._syncNavigationMenu(appMetaData);
      } else {
        // Apps that use the same module but have different urls also require
        // all Lifecycle hooks to be triggered on switching as per CDS-9727
        // Can not assume everything can be handled by didChangeProps
        this.beforeAppUnload(appMetaData, props, direction);
      }
    }
  };

  /**
   * Check for shouldAppDisconnect before unloading existing app
   *
   * @function beforeAppUnload
   * @param {Object} appMetaData - meta for app about to be loaded
   * @param {Object} props - props to be applied to new app
   * @param {String} direction - direction of user navigation, back/forwards
   */
  beforeAppUnload = async (appMetaData, props, direction) => {
    if (typeof this.currentApp?.shouldAppDisconnect === 'function') {
      const hook = this.currentApp.shouldAppDisconnect();
      if (typeof hook?.then === 'function') {
        this.context.waitForUserInteraction(direction);
        hook
          .then(async () => {
            // Need delay for instant resolve otherwise race condition between
            // wait + confirm calls. native apis are not promises and affect next frame only
            setTimeout(async () => {
              this.context.confirmedUserInteraction(direction);
              await this.loadNewApp(appMetaData, props);
            }, 10);
          })
          .catch(() => {
            this.context.cancelUserInteraction();
          });
        return;
      }
    }
    await this.loadNewApp(appMetaData, props);
  };

  /**
   * dynamically import an app
   *
   * @function _importApp
   * @param {string} moduleName - Application module value from UI meta entry
   * @returns {object} app
   */
  _importApp = async moduleName => dynamic(moduleName);

  /**
   * Proceed to unload old app and load new app into dom
   *
   * @function loadNewApp
   * @param {Object} appMetaData - meta for new app
   * @param {Object} props - props to be applied to new app
   */
  loadNewApp = async (appMetaData, props) => {
    // load a new app...
    this.loadingApp();

    // try to execute plugin lifecycle hooks...
    try {
      await this.executePluginHook('onBeforeAppLoad', {
        name: appMetaData?.name,
        location: window.location,
      });

      // try to load the app...
      try {
        if (appMetaData?.module == null) {
          throw new Error('Module name was not specified');
        }
        const App = await this._importApp(appMetaData.module);
        this.loadedApp();
        this._addAppToShell(this.content, App, props);
      } catch (error) {
        this.loadedApp();
        this.loadError(error.message, 'App not found', ''); // TODO: localize
      }
    } catch (error) {
      this.loadedApp();
      this.loadError(error.message, error.title, error.subtitle);
    }
    this._syncNavigationMenu(appMetaData);
  };

  /**
   * Updates active app on nav menu
   *
   * @param {Object} appMetaData - meta for app just loaded
   */
  _syncNavigationMenu = appMetaData => {
    if (this.navigationMenu) {
      // menu matches based on the menuPath value
      this.navigationMenu.activeMenuItem = appMetaData?.menuPath;
    }
  };

  /**
   * This function is used to execute a plugin lifecycle hook on all imported plugins.
   * If the plugins are not defined (the eui-plugins component is not added to the DOM)
   * then this function returns a resolved Promise.
   *
   * @function executePluginHook
   * @param {string} hook - name of the lifecycle hook to execute
   * @param {object} params - object containing params to sed to the lifecycle hook
   * @returns {Promise}
   */
  executePluginHook = (hook, params) => {
    if (Container.plugins) {
      return Container.plugins?.executeLifecycleHookAll(hook, params);
    }
    return Promise.resolve();
  };

  /**
   * Loading an application. Add a loading animation to the container.
   * The title and subtitle of the app bar are changed to show loading.
   * This is only started after 100ms
   */
  loadingApp = () => {
    this.loadingTimeout = setTimeout(() => {
      if (this.loadingTimeout) {
        this.loader = this.createElement('eui-container-loader');
        this.setAppBar('Loading application');
        this.content.innerText = '';
        this.content.appendChild(this.loader);
      }
    }, 100);
  };

  /**
   * remove the loading animation
   */
  loadedApp = () => {
    this.setAppBar('');
    clearTimeout(this.loadingTimeout);
    this.loadingTimeout = null;
    if (this.loader) {
      this.loader.remove();
      this.loader = null;
    }
  };

  /**
   * Set the title and subtitle of the app bar
   *
   * @function setAppBar
   * @param {string} displayName - title of app
   * @param {string} subtitle - subtitle of app
   */
  setAppBar = (displayName, subtitle = '') => {
    this._setAppBarTitle(displayName);
    this._setAppBarSubtitle(subtitle);
  };

  /**
   * Setup and display an info message.
   *
   * @function loadError
   * @param {string} error - error message to display
   * @param {string} title - title of app bar and error message
   * @param {string} subtitle - subtitle of app bar
   */
  loadError = (error, title = 'App not found', subtitle = '') => {
    // TODO: localize
    this.pauseApp();
    this.setAppBar(title, subtitle);
    this._displayInfoMessageInShell(this.content, error, title);
  };

  /**
   * Adds an app to the shell.
   *
   * @param {Element} shell - content area to display app
   * @param {App} app - app to display in the shell
   */
  _addAppToShell = (shell, app, props) => {
    const {
      cache: { addApp, getApp, isAppCached },
    } = this.context;
    if (app) {
      const attachApp = () => {
        let appToAdd = null;
        if (!isAppCached(app)) {
          appToAdd = document.createElement(app.is);
          addApp(appToAdd);
          this._setAppProps(appToAdd, props);
          this.attachChildToShell(shell, appToAdd);
        } else {
          appToAdd = getApp(app);
          this._setAppProps(appToAdd, props);
          this.attachChildToShell(shell, appToAdd);
          appToAdd.onResume?.();
        }
      };

      if (this.currentApp) {
        this.pauseApp();
        this.currentApp.remove();
        attachApp();
      } else {
        attachApp();
      }
    }
  };

  /**
   * set the props on an app. These are usually set via
   * query params in the URL
   *
   * @function _setAppProps
   * @param {App} app - app to set props on
   * @param {Object} props - the props
   */
  _setAppProps = (app, props) => {
    Object.keys(props).forEach(prop => {
      app[prop] = props[prop];
    });
  };

  /**
   * If there are action-items present inside the AppBar,
   * purge them when the App pauses.
   * Pause a loaded app. If the component
   * inside the shell extends App or implements onPause,
   * then call it.
   * @function pauseApp
   */
  pauseApp = () => {
    this.appBar.appActions = [];
    this.currentApp?.onPause?.();
  };

  /**
   * Attach child component to shell
   * @param {Object} shell shell
   * @param {Object} child child component to attach to shell
   */
  attachChildToShell(shell, child) {
    shell.appendChild(child);
    this.context.cache.setCurrentApp(child);
  }

  /**
   * Display an information message in the shell.
   *
   * @param {Element} shell - content area to display message
   * @param {InfoMessage} message - message to display
   */
  _displayInfoMessageInShell = (shell, message, title) => {
    this._addAppToShell(shell, InfoMessage, { message, messageTitle: title });
  };

  didChangeProps(changedProps) {
    if (changedProps.has('metaData')) {
      // meta data updated so route map needs updating
      this.context.metaData = this.metaData;
      this.context.generateRouteMap();
    }
  }
}

const style = `
:host {
  display: flex;
  flex-direction: column;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  width: 100%;
  --compact-mode: 0;
  --system-panel-width: 300px;
}

main {
  height: 100%;
  overflow: hidden;
  display: grid;
  transition: grid-template-columns .25s cubic-bezier(.65,.05,.36,1) .1s;
  grid-template-columns: 1fr var(--system-panel-width, 300px);
  background-color: var(--layer0);
}
.app-bar-area {
  display: flex;
  background-color: var(--layer1, #EBEBEB);
}
.content-area {
  display: flex;
  height: 100%;
  background-color: var(--layer1, #EBEBEB);
  overflow: hidden;
}
.content {
  display: flex;
  overflow: auto;
  background-color: var(--layer2, #FAFAFA);
  flex: auto;
}

/* scroll bar style */
.content *::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: transparent;
}
.content *::-webkit-scrollbar-corner {
  background: transparent;
}
.content *::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
}
.content * {
  scrollbar-color: var(--scrollbar-thumb) transparent;
  scrollbar-width: thin;
  flex: auto;
  overflow-y: auto;
}

app:bar {
  height: var(--appbar-height, 48px);
}

slot[name=app-navigation]::slotted(*) {
  flex: none;
  background-color: var(--layer1, #EBEBEB);
}

.app-navigation-holder {
    opacity: 1;
    flex: none;
    margin-left: 0;
    margin-right: 0;
    transition: margin-left 125ms cubic-bezier(.65,.05,.36,1),
                margin-right 125ms cubic-bezier(.65,.05,.36,1),
                opacity 30ms cubic-bezier(.65,.05,.36,1) .1s;
    width: var(--appnav-width, 248px);
}

.content-area.navigation-hidden .app-navigation-holder {
  opacity: 0;
  transition: margin-left .25s cubic-bezier(.65,.05,.36,1) .1s,
              margin-right .25s cubic-bezier(.65,.05,.36,1) .1s,
              opacity 30ms cubic-bezier(.65,.05,.36,1) .1s;
  margin-left: calc(var(--appnav-width, 248px) * -1);
  margin-right: var(--space-large, 16px);
  height: 0;
}

.application-layer {
  display: flex;
  flex-direction: column;
  transition: margin .25s cubic-bezier(.65,.05,.36,1) .1s;
  grid-column-end: -1;
  grid-column-start: 1;
  grid-row-start: 1;
  left: 0;
  z-index: 1;
  overflow: hidden;
}

.application-layer__open {
  margin: 0 var(--system-panel-width) 0 calc(var(--system-panel-width) * -1);
}

.system-layer {
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row-start: 1;
  overflow: hidden;
}

.system-layer-heading {
  height: 48px;
}

@media only screen and (max-width: 480px) {
  :host {
    --compact-mode:1;
  }
  .app-navigation-holder {
    transition: height 250ms cubic-bezier(.65,.05,.36,1),
    opacity 30ms cubic-bezier(.65,.05,.36,1) .1s;
    width: 100%;
    height: 100%;
    flex: none;
  }
  .content-area.navigation-hidden .app-navigation-holder{
    opacity: 0;
    transition: height .25s cubic-bezier(.65,.05,.36,1) .1s,
              opacity 30ms cubic-bezier(.65,.05,.36,1) .1s;
    margin-left: 0;
    height: 0;
    width: 100%;
  }
  .content-area {
    flex-direction: column;
  }
  .content {
    margin-left: var(--space-large, 16px);
  }
}
`;

const template = `
<eui-container-system-bar>
  <slot slot="left" name="system-left"></slot>
  <slot slot="right" name="action"></slot>
</eui-container-system-bar>
<main>
  <div class="application-layer">
    <eui-app-bar></eui-app-bar>
    <div class="content-area navigation-hidden">
      <div class="app-navigation-holder">
        <slot id="app-navigation-slot" name="app-navigation"></slot>
      </div>
      <div class="content"></div>
    </div>
  </div>
  <eui-system-panel class="system-layer">
  </eui-system-panel>
</main>`;

// define the Container...
definition('eui-container', {
  style,
  template,
  props: {
    appRoot: { attribute: true, type: String },
    defaultApp: { attribute: true, type: String },
    menuOpen: { attribute: true, type: Boolean },
    metaData: { type: Object },
  },
})(Container);

Container.register();

export { Container };
