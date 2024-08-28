import { h as hasMixin, r as registerMixin } from '../common/index-b5c18b0a.js';
export { d as definition } from '../common/index-b5c18b0a.js';
import { L as LitComponent } from '../common/lit-component-430a97d9.js';
export { $ as html } from '../common/lit-component-430a97d9.js';

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

const StoreMixin = Base => {
  const mixinName = 'StoreMixin';
  if (hasMixin(Base, mixinName)) {
    console.warn(`Tried to add existing mixin ${mixinName}`);
    return Base;
  }

  return class Store extends Base {
    static get _mixins() {
      return registerMixin(super._mixins, mixinName);
    }

    // @prop({ attribute: false, type: Object, default: {} })
    // state;

    constructor(options) {
      super(options);
      this.constructor._propDefs = {
        ...this.constructor._propDefs,
        state: { attribute: false, type: Object, default: {} },
      };
      this._stateChanged = this._stateChanged.bind(this);
    }

    /**
     * @protected
     * @function getState
     * @description Get a state value from the Store
     */
    getState(key) {
      if (this.provider !== undefined && this.provider.store !== undefined) {
        return this.provider.store.getState(key);
      }
      return null;
    }

    /**
     * @protected
     * @function dispatch
     * @description Dispatch a state update action, this will be captured by the App Store
     */
    dispatch(action, payload) {
      if (this.provider !== undefined && this.provider.store !== undefined) {
        this.provider.store.dispatch(action, payload);
      }
    }

    /**
     * @protected
     * @function disconnect
     * @description Disconnect the app from the store
     * @param {Array} properties - The properties in the store previously registered
     */
    storeDisconnect(properties) {
      if (this.provider !== undefined && this.provider.store !== undefined) {
        return this.provider.store.disconnect(this, properties);
      }
      return null;
    }

    /**
     * @protected
     * @function connect
     * @description Connect to the store and received update notifications for
     * various state values
     * @param {Array} properties - The properties in the store to request notification changes on
     */
    storeConnect(properties) {
      if (this.provider !== undefined && this.provider.store !== undefined) {
        return this.provider.store.connect(this, properties);
      }
      return null;
    }

    /**
     * @protected
     * @function addActions
     * @description Set up an action listener
     * @param {String} actionName - The action name to listen to, or an array of actions
     * @param {Function} func - The action function (for single action only)
     */
    addActions(actionName, func) {
      if (this.provider !== undefined && this.provider.store !== undefined) {
        if (typeof actionName === 'string') {
          this.provider.store.listen(actionName, func);
        } else {
          actionName.forEach(obj => {
            this.provider.store.listen(obj.name, obj.action);
          });
        }
      }
    }

    /**
     * @protected
     * @function removeActions
     * @description Remove an action listener(s)
     * @param {String} actionName - The action name to listen to, or an array of actions
     * @param {Function} func - The action function (for single action only)
     */
    removeActions(actionName, func) {
      if (this.provider !== undefined && this.provider.store !== undefined) {
        if (typeof actionName === 'string') {
          this.provider.store.unlisten(actionName, func);
        } else {
          actionName.forEach(obj => {
            this.provider.store.unlisten(obj.name, obj.action);
          });
        }
      }
    }

    /**
     * @private
     * @function _stateChanged
     * @description Function executed by the app store for state changes
     * @param {Object} state - The state object with values for the execution
     */
    _stateChanged(state) {
      const current = { ...this.state };
      Object.keys(current).forEach(key => {
        if (state[key] !== undefined) {
          current[key] = state[key];
        }
      });
      this.state = current;
    }
  };
};

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

const AppMixin = Base =>
  class App extends Base {
    /**
     * @function constructor
     * @description The constructor for the application Context
     */
    constructor() {
      super();
      this.onPause = this.onPause.bind(this);
      this.onResume = this.onResume.bind(this);
      this.shouldAppDisconnect = this.shouldAppDisconnect.bind(this);

      this.createAppBarContainer();
    }

    /**
     * @function dispatchNotification
     * @description Shows notification
     * @param {object} notificationData - Notification to add
     */
    dispatchNotification(notificationData) {
      const { data, timestamp, bubbleEvent, action } = notificationData;

      if (!action) {
        // eslint-disable-next-line no-console
        console.warn('No action specified to dispatch');
        return;
      }

      if (!data) {
        // eslint-disable-next-line no-console
        console.warn('No data specified to dispatch');
        return;
      }

      if (!data.id) {
        data.id = Math.random().toString(36).substr(2, 9);
      }

      if (!timestamp) {
        notificationData.timestamp = new Date();
      }

      if (bubbleEvent) {
        this.bubble(bubbleEvent, data);
      }

      this.dispatch(action, data);
    }

    /**
     * @function addNotification
     * @description Add notification
     * @param {Object} notification
     * @param {Object} store
     */
    addNotification(notification, store) {
      const notifications = store.getState('eui:notifications') || [];
      const newNotifications = [...notifications, notification];
      store.setState('eui:notifications', newNotifications);
      store.setState(
        'eui:notificationsToRead',
        newNotifications.filter(i => !i.read).length,
      );
    }

    /**
     * @function createAppBarContainer
     * @description Create an app bar container to hold app specific components
     * @private
     */
    createAppBarContainer() {
      this.appActions = document.createElement('div');
    }

    /**
     * @function shouldAppDisconnect
     * @description Called before app disconnects and a new one connects.
     * @returns { Promise } Resolved promise, app will disconnect by default
     */
    shouldAppDisconnect() {
      // Do not return Promise.resolve() by default, causes race condition in router
    }

    /**
     * @private
     * @function onPause
     * @description Handle the pause of the app
     */
    onPause() {
      this.dispatch('REMOVE_APP_COMPONENT', {
        id: 'appbar-component-container',
      });
    }

    /**
     * @private
     * @function onResume
     * @description Handle the app in the display again
     */
    onResume() {
      this.dispatch('ADD_APP_COMPONENTS', [
        {
          id: 'appbar-component-container',
          component: this.appActions,
        },
      ]);
    }

    /**
     * @protected
     * @function api
     * @description fetches file
     */
    api(name, path, request, resType, formatter, callback) {
      if (this.provider !== undefined && this.provider.api !== undefined) {
        if (request.file === 'json') {
          return this.provider.api.json(path);
        }
        return this.provider.api.run(
          name,
          path,
          request,
          resType,
          formatter,
          callback,
        );
      }
      return null;
    }

    /**
     * @protected
     * @function getLink
     * @description Connection to the router for returning a component link
     */
    getLink(params) {
      if (this.provider !== undefined && this.provider.router !== undefined) {
        return this.provider.router.getLink(params);
      }
      return null;
    }

    /**
     * @protected
     * @function plugin
     * @description Execute plugin method, will find an execute a method on a loaded plugin
     * @param {String} name The name of the plugin
     * @param {String} method The method to execute on the plugin
     * @param {String} params Optional params to pass to the plugin, these can include
     * a callback for asychronous actions
     */
    plugin(name, method, params) {
      if (this.provider !== undefined && this.provider.plugins !== undefined) {
        return this.provider.plugins.find(name, method, params);
      }
      return null;
    }
  };
class App extends StoreMixin(AppMixin(LitComponent)) {}

export { App };
