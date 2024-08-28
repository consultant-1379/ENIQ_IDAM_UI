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

const TIME_LIMIT = 500;

class Plugins extends TemplateComponent {
  constructor() {
    super();
    this._plugins = new Map();
    this.addEventListener('eui-plugins:execute', this);
  }

  /**
   * when the component is connected to the DOM it will add a handler for
   * the event "eui-plugins:execute" to its parent. In the case of E-UI SDK
   * the parent should be the Container.
   */
  didConnect() {
    this.myParent = this.parentElement;
    this.myParent.addEventListener('eui-plugins:execute', this);
  }

  /**
   * When the component is removed from the DOM it will remove the handler for
   * the event "eui-plugins:execute" from its parent. In the case of E-UI SDK
   * the parent should be the Container.
   */
  didDisconnect() {
    this.myParent.removeEventListener('eui-plugins:execute', this);
  }

  /**
   * Handle the eui-plugins:event
   * The event contains the payload
   *
   * @function handleEvent
   * @param {object} event - eui-plugins:execute event
   * @param {string} event.type - the type of event
   * @param {object} event.detail - the event payload
   * @param {string} event.detail.plugin - the name of the plugin
   * @param {string} event.detail.method - the name of the function in the plugin
   * @param {object} event.detail.params - the params of the function in the plugin
   */
  handleEvent(event) {
    if (event.type === 'eui-plugins:execute') {
      this.plugin(
        event.detail.plugin,
        event.detail.method,
        event.detail.params,
      );
    }
  }

  get plugins() {
    return this._plugins;
  }

  /**
   * pluginList
   * ------------------------------------------------------------
   * When the pluginList is changed the Map of plugins is updated
   * to delete plugins that are no longer needed. All new plugins
   * are installed and the plugin Map is updated.
   *
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('pluginList')) {
      // delete plugins that are no longer in the list...
      for (const plugin of this.plugins.keys()) {
        if (!this.pluginList.includes(plugin.name)) {
          this.plugins.delete(plugin);
        }
      }
      // import new plugins from the list...
      this.importPlugins(this.pluginList);
    }
  }

  /**
   * Dynamically import a module.
   *
   * @param {string} plugin - name/path of the plugin to import
   * @returns
   */
  dynamicImport = async plugin =>
    import(plugin).catch(error => {
      throw new Error(
        `Failed to import plugin '${plugin}'.\n\nDetails\n${error.message}`,
      );
    });

  /**
   * Import a plugin.
   * ------------------------------------------------------------
   * A plugin name can be either a bare import or
   * a path to the plugin. In the case of a bare import, the plugin
   * must be in an import map otherwise it's location will not
   * be resolved.
   *
   * @function importPlugin
   * @param {string} plugin - name/path of the plugin to import
   */
  importPlugin = async plugin => {
    try {
      const importedPlugin = await this.dynamicImport(plugin.name);
      plugin.module = importedPlugin;
      this.plugins.set(plugin.name.replace('.js', ''), plugin);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.warn(`PLUGIN: Could not import "${plugin.name}"`);
    }
  };

  /**
   * Import an array of plugins.
   *
   * @function importPlugins
   * @param {[string]} plugins - array of plugins to import
   * @returns {Promise}
   */
  /* eslint-disable-next-line consistent-return */
  importPlugins = async (plugins = this.pluginList) => {
    if (plugins) {
      return Promise.all(plugins.map(plugin => this.importPlugin(plugin)));
    }
  };

  /**
   * Create a plugin timeout Promise that should sit along side any call to a plugin hook.
   * The plugin timeout will resolve() after a pre-determined duration.
   *
   * @function pluginTimeout
   * @param {string} plugin - name/path of the plugin
   * @param {string} method - name of method executed on plugin
   * @returns {{ timer: number, timerPromise: Promise }}
   */
  pluginTimeout = (plugin, method) => {
    let timer = null;
    const timerPromise = new Promise(resolve => {
      timer = setTimeout(() => {
        /* eslint-disable-next-line no-console */
        console.error(
          `PLUGIN: Failed to execute ${method} in ${plugin} within a time limit of ${TIME_LIMIT}ms`,
        );
        return resolve();
      }, TIME_LIMIT);
    });
    return { timer, timerPromise };
  };

  /**
   * Execute a plugin lifecycle hook
   * ------------------------------------------------------------
   * Each lifecycle hook is combined with a plugin timeout in a Promise.race.
   * The plugin timeout ensures that the Promise always resolves within a set
   * duration. If a plugin lifecycle hook is not being a good citizen
   * (it is not performant, developer forgets to resolve etc.) it will be
   * ignored and the overall promise will be resolved.
   *
   * If the lifecycle hook is resolved before the defined duration,
   * the timeout is cleared.
   *
   * @function executeLifecycleHook
   * @param {string} plugin - name/path of plugin
   * @param {string} method - name of lifecycle hook to execute
   * @param {object} params - params to send to the lifecycle hook
   * @returns {Promise}
   */
  /* eslint-disable-next-line consistent-return */
  executeLifecycleHook = (plugin, method, params) => {
    const hook = this.plugins.get(plugin).module[method];
    if (hook != null) {
      const { timer, timerPromise } = this.pluginTimeout(plugin, method);
      const hookPromise = new Promise(hook(params))
        .finally(() => {
          clearTimeout(timer);
        })
        .catch(error => {
          /* eslint-disable-next-line no-console */
          console.error(
            `PLUGIN: Failed to execute ${method} in ${plugin} error details (${error})`,
          );
          throw error;
        });
      return Promise.race([hookPromise, timerPromise]);
    }
  };

  /**
   * Execute lifecycle hook on all imported plugins.
   *
   * @function executeLifecycleHookAll
   * @param {string} method - name of lifecycle hook
   * @param {object} params - params passed to the lifecycle hooks
   */
  executeLifecycleHookAll = async (method, params) => {
    await Promise.all(
      [...this.plugins.keys()].map(plugin =>
        this.executeLifecycleHook(plugin, method, params),
      ),
    );
  };

  /**
   * Execute method on plugin.
   * ------------------------------------------------------------
   * Plugins have the ability to export methods that perform some
   * action, which may or may not return something.
   * It is possible to define a "callback" in the params. If a
   * callback is defined it will be called and the result of
   * the method call passed to it as a parameter.
   *
   * Console logging
   * ------------------------------------------------------------
   * A warning is sent to the console if either the plugin is not
   * installed or the method does NOT exist on the plugin.
   *
   * @function plugin
   * @param {string} plugin - name of plugin
   * @param {string} method - method to all on plugin
   * @param {object} params - params to pass to method
   */
  plugin = (plugin, method, params) => {
    if (!this.plugins.has(plugin)) {
      /* eslint-disable-next-line no-console */
      console.warn(
        `PLUGIN: Failed to execute method (${method}). Plugin "${plugin}" is not installed`,
      );
      return;
    }
    if (!this.plugins.get(plugin).module[method]) {
      /* eslint-disable-next-line no-console */
      console.warn(
        `PLUGIN: Failed to execute method (${method}). Method does NOT exist on plugin "${plugin}"`,
      );
      return;
    }
    if (typeof params.callback === 'function') {
      params.callback(this.plugins.get(plugin).module[method]?.(params));
    } else {
      this.plugins.get(plugin).module[method]?.(params);
    }
  };
}

const style = `
:host {
  display: contents;
}
`;

definition('eui-plugins', {
  style,
  template: '<slot></slot>',
  props: {
    pluginList: { type: Array, default: [] },
  },
})(Plugins);

Plugins.register();

export { Plugins };
