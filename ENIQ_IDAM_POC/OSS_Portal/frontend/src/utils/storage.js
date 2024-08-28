import { bubble } from './helper.js';
import CONSTANTS from './constants.js';

const { LOCAL_STORAGE_CHANGE } = CONSTANTS;

const DEFAULT_NAMESPACE = 'gui-aggregator-service';
const DEFAULT_USER = 'defaultUser';

/**
 * StorageModule can persists and retrieve user-specific settings into localStorage per user
 *
 * It should be initialized first with calling the init() method
 * It is necessary to initialize the module separately in the client app and in the plugins because of a dependency packaging issue in EUI-SDK
 *
 * @class StorageModule
 */
class StorageModule {
  constructor() {
    this._initialized = false;

    // Transform 'remote' change event to local
    // The storage event of the Window interface fires when a storage area (localStorage)
    // has been modified in the context of * another * document.
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
    window.addEventListener('storage', (event) => {
      if (event.origin && event.origin !== window.location.href) {
        return;
      }
      const { key: eventKey, newValue, oldValue } = event;
      // The key attribute is null when the change is caused by the storage clear() method.
      if (eventKey === null) {
        return;
      }
      const { namespace, username, key } = this._parseStorageKey(eventKey);
      if (namespace === this.namespace && username === this.userName) {
        this.dispatchLocalChangeEvent(key, JSON.parse(newValue), JSON.parse(oldValue));
      }
    });
  }

  dispatchLocalChangeEvent(key, newValue, oldValue) {
    bubble(window, LOCAL_STORAGE_CHANGE, {
      key,
      newValue,
      oldValue,
    });
  }

  /**
   * Set storage global configuration options
   *
   * @param {Object} options
   * @param {string} params.namespace The K8s namespace used for persisting configurations
   * @param {string} params.userName The userName is used to persist configurations per user
   * @memberof StorageModule
   */
  init({ namespace = DEFAULT_NAMESPACE, userName } = {}) {
    if (!userName) {
      userName = localStorage.getItem('username') || DEFAULT_USER;
    }
    this.userName = userName;
    this.namespace = namespace;
    this._initialized = true;
  }

  _verifyIfInitialized() {
    if (!this._initialized) {
      throw new Error('StorageModule should be initialized.');
    }
  }

  _getStorageKey(key) {
    this._verifyIfInitialized();
    const { namespace, userName } = this;
    return `${namespace}/${userName}/${key}`;
  }

  _parseStorageKey(fullKey) {
    const [namespace, username, key] = fullKey.split('/');
    return { namespace, username, key };
  }

  /**
   * Get an item from localStorage saved per user
   *
   * @param {string} key - The identifier of the item
   * @returns {*} - The value of the given key found in localStorage per user
   * @memberof StorageModule
   */
  get(key) {
    const storageKey = this._getStorageKey(key);
    const item = localStorage.getItem(storageKey);
    return item ? JSON.parse(item) : item;
  }

  /**
   * Save an item into the localStorage per user
   *
   * @param {string} key - The identifier of the item
   * @param {*} value - The value of the given key
   * @memberof StorageModule
   */
  set(key, value) {
    const storageKey = this._getStorageKey(key);
    const stringValue = JSON.stringify(value);
    const oldValue = this.get(key);
    localStorage.setItem(storageKey, stringValue);
    this.dispatchLocalChangeEvent(key, value, oldValue);
  }

  /**
   * Removes the key-value pairfrom localStorage if exist per user
   *
   * @param {string} key - The identifier of the item
   * @memberof StorageModule
   */
  remove(key) {
    const storageKey = this._getStorageKey(key);
    localStorage.removeItem(storageKey);
  }
}

export default new StorageModule();
