// store for all apps.
const _apps = new Map();

class Cache {
  constructor() {
    this.currentApp = null;
  }

  /**
   * Add an app to the container cache.
   *
   * @function addApp
   * @param {Node} app - Node to add to the cache
   */
  addApp = app => {
    this.apps.set(app.localName, app);
  };

  /**
   * Remove an app from the container cache.
   *
   * @function removeApp
   * @param {Object} app - app class to remove
   */
  removeApp = app => {
    this.apps.delete(app.is);
  };

  /**
   * Check if an app is in the container cache
   *
   * @function isAppCached
   * @param {Object} app - app to check
   * @returns {boolean}
   */
  isAppCached = app => this.apps.has(app.is);

  setCurrentApp = app => {
    this.currentApp = app;
  };

  /**
   * Get the app from the cache.
   *
   * @function getApp
   * @param {Object} app - app to retrieve
   * @returns
   */
  getApp = app => this.apps.get(app.is);

  get apps() {
    return _apps;
  }
}

const cache = new Cache();
export default cache;
