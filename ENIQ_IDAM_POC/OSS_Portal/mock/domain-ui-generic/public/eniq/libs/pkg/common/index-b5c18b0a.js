/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/* global ShadyCSS */

const whenComponentsAreDefined = root => {
  try {
    const undefinedComponents = root.querySelectorAll(':not(:defined)');
    const promises = Array.prototype.slice
      .call(undefinedComponents)
      .map(component => customElements.whenDefined(component.localName));

    if (undefinedComponents.length > 0) {
      const timeout = new Promise((resolve, reject) => {
        const id = setTimeout(() => {
          clearTimeout(id);
          const undefComponents = [...undefinedComponents]
            .map(comp => comp.localName)
            .toString();
          reject(
            new Error(
              `timed out after 100 ms with undefined components = [${undefComponents}]`,
            ),
          );
        }, 100);
      });
      promises.push(timeout);
    } else {
      return Promise.all(promises);
    }

    return Promise.all(promises);
  } catch (e) {
    // this fails in firefox because the selector is not valid,
    // so just wait a frame and all components are more likely
    // to be updated at that point.
    return new Promise(resolve => {
      requestAnimationFrame(resolve);
    });
  }
};

/**
 * @description Use to define keys to avoid cluttering object namespace
 */
const sym = description =>
  Symbol(description ? String(description) : undefined);

/**
 * @description Debounce a 0-arg function into the microtask queue.
 * This ensures that the update will be processed on the tail-end of this task,
 * before the next tick / browser repaint.
 * More info on this approach:
 * https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 * https://javascript.info/event-loop
 *
 * @param {Function} fn
 * @return {Function}
 */
const microtaskDebounce = fn => {
  /**
   * Warning !!!
   * Native API exists for queuing microtasks but test runners are known to mock
   * it with a setTimeout. setTimeouts are not microtasks and do not behave as such.
   * https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask
   */
  let isQueued = false;
  const el = document.createElement('i');
  new MutationObserver(() => {
    isQueued = false;
    fn();
  }).observe(el, { childList: true });
  let i = 0;
  return () => {
    if (!isQueued) {
      isQueued = true;
      el.textContent = `${i}`;
      i += 1;
    }
  };
};

/**
 * @description Warn the developer about improper library usage.
 * @todo: Make only active in dev mode (no-op in production)
 */
const warn = message => {
  console.warn(message);
};

// COMPAT
/**
 * Manually add the correct scoped classnames, if ShadyCSS doesn't
 * seem to be doing its job.
 */
const addClassNames = customElement => {
  customElement.shadowRoot.querySelectorAll('*').forEach(el => {
    el.classList.add(customElement.localName);
    el.classList.add('style-scope');
  });
};

/**
 * ShadyCSS prepareTemplate, but check it's not doubling up
 */
const prepareTemplate = (template, name) => {
  if (document.querySelector(`head > style[scope=${name}]`) == null) {
    ShadyCSS.prepareTemplate(template, name);
  }
};

// DOM EVENTS
const bubble = (context, name, detail = {}, config = {}) => {
  const event = new CustomEvent(name, {
    bubbles: true,
    composed: true,
    ...config,
    detail,
  });
  context.dispatchEvent(event);
  return event;
};

// PROPS
/**
 * Transform dash-case (HTML) into camelCase (JS)
 * @param {string} input
 * @returns {string}
 */
const dashToCamel = input =>
  /* eslint-disable-next-line no-useless-escape */
  input.replace(/\-./g, match => match.substr(1).toUpperCase());

/**
 * Transform camelCase (JS) into dash-case (HTML)
 *
 * @param {string} input
 * @returns {string}
 */
const camelToDash = input =>
  input.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

const compatUpdated = (shadyPrepared, obj) => {
  if (window.ShadyCSS) {
    // Things which only need to happen on the first render
    if (!shadyPrepared) {
      const template = document.createElement('template');
      template.innerHTML = obj.shadowRoot.innerHTML;
      prepareTemplate(template, obj.localName);
      ShadyCSS.styleElement(obj);
      obj._shadyPrepared = true;
    }
    // Things which need to happen on prop update
    // ShadyCSS.styleSubtree(this);
    if (!ShadyCSS.nativeShadow) {
      obj.shadowRoot.querySelectorAll('style').forEach(el => {
        el.textContent = '';
      });
      addClassNames(obj);
    }
  }
};

const eventHandlers = (obj, add = true) => {
  if (obj) {
    if (add) {
      Object.entries(obj).forEach(([key, value]) => {
        undefined.addEventListener(key, value);
      });
      return;
    }
    Object.entries(obj).forEach(([key, value]) => {
      undefined.removeEventListener(key, value);
    });
  }
};

/**
 * @description Gets the global locale override
 * @function getCurrentSystemLocale
 * @returns string or null
 */
function getCurrentSystemLocale() {
  return window.EUI?.locale;
}

var helpers = {
  whenComponentsAreDefined,
  sym,
  microtaskDebounce,
  warn,
  addClassNames,
  prepareTemplate,
  bubble,
  dashToCamel,
  camelToDash,
  compatUpdated,
  eventHandlers,
  getCurrentSystemLocale,
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

/**
 * @function registerMixin
 *
 * @param {*} superMixins
 * @param { String } name - name of mixin
 * @returns { Array } mixins
 */
const registerMixin = (superMixins, name) => {
  const mixins = superMixins ? Array.from(superMixins) : [];
  if (!mixins.includes(name)) {
    mixins.push(name);
  }
  return mixins;
};

/**
 * @function hasMixin
 *
 * @param { Object } Base - the mixin
 * @param { String } name - name of the mixin
 * @returns { Boolean }
 */
const hasMixin = (Base, name) =>
  Base._mixins !== undefined && Base._mixins.indexOf(name) > -1;

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

var StatelessComponentMixin = Base => {
  const mixinName = 'StatelessComponentMixin';
  const { eventHandlers, compatUpdated, bubble, microtaskDebounce } = helpers;

  if (hasMixin(Base, mixinName)) {
    console.warn(`Tried to add existing mixin ${mixinName}`);
    return Base;
  }
  return class Stateless extends Base {
    static get _mixins() {
      return registerMixin(super._mixins, mixinName);
    }

    constructor() {
      super();
      this._shadyPrepared = false;
      this._lifecycleDebounced = microtaskDebounce(
        this._executeLifecycle.bind(this),
      );
    }

    connectedCallback() {
      this._executeLifecycle();
      eventHandlers(this.intercepts);
    }

    disconnectedCallback() {
      eventHandlers(this.intercepts, false);
    }

    compatElementUpdated() {
      compatUpdated(this._shadyPrepared, this);
    }

    bubble(name, detail = {}, config = {}) {
      return bubble(this, name, detail, config);
    }

    _executeLifecycle() {
      this.executeRender();
    }

    executeRender() {}

    /**
     * Lifecycle hook
     * Implement this hook in your component if you are interested
     * to know when the component is upgraded.
     * Renderers should call this only once when the shadowRoot is
     * attached and the template is added.
     *
     * Executes only once in the component lifecycle.
     * Initial render has taken place and changes flushed to the DOM.
     * All props are accessible and the shadowRoot is available.
     * This hook gives the ability to check the presence of slotted children.
     *
     * If the component listens for slotchange events on a slot, then this
     * is the place to get their initial state. In Safari browser the
     * component is mutated before the shadowRoot is added which means
     * the slotchange won't fire on first render.
     *
     *
     * @function didUpgrade
     */
    didUpgrade() {}

    /**
     * Define the component as a Custom Element. The optional customName MUST be a valid
     * custom element and contain at least one dash (-).
     *
     * @function register
     * @param { String } customName - name of the component
     */
    static register(customName) {
      if (customName) {
        this.is = customName;
      }
      if (!customElements.get(this.is)) {
        try {
          customElements.define(this.is, this);
        } catch (error) {
          console.error(
            `Failed to register component. "${this.is}" is not a valid component name. Valid component names must include at least one dash (-)`,
          );
        }
      }
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
const safeParse = value => {
  try {
    return JSON.parse(value);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      console.warn(`Invalid JSON: '${value}'`);
    }
    return null;
  }
};

const typeMapping = type => {
  switch (type) {
    case String:
      return {
        coerce: value => (value == null ? null : String(value)),
        serialize: value => (value == null ? null : String(value)),
        deserialize: value => value,
      };

    case Boolean:
      return {
        coerce: value => Boolean(value),
        serialize: value => (value ? '' : null),
        deserialize: value => value != null,
      };

    case Number:
      return {
        /* eslint-disable-next-line no-restricted-globals */
        coerce: value => (value == null || isNaN(value) ? null : Number(value)),
        serialize: value => (value == null ? null : String(value)),
        deserialize: value => (value == null ? null : Number(value)),
      };

    case Object:
      return {
        coerce: value =>
          value == null || typeof value !== 'object' ? null : value,
        serialize: value => (value == null ? null : JSON.stringify(value)),
        deserialize: value => (value == null ? null : safeParse(value)),
      };

    case Array:
      return {
        coerce: value => (Array.isArray(value) ? value : null),
        serialize: value => (value == null ? null : JSON.stringify(value)),
        deserialize: value => (value == null ? null : safeParse(value)),
      };

    default:
      return {
        coerce: value => value,
        serialize: value => value,
        deserialize: value => value,
      };
  }
};

// store for all locales.
class Cache {
  constructor() {
    this._locales = new Map();
  }

  /**
   * Add a locale to the cache.
   *
   * @function addLocale
   * @param {String} locale - locale to add to the cache
   * @param {Object} strings - object with locale key/values
   */
  addLocale = (locale, strings) => {
    this.locales.set(locale, strings);
  };

  /**
   * Remove a locale from the cache.
   *
   * @function removeLocale
   * @param {String} locale - locale to remove
   */
  removeLocale = locale => {
    this.locales.delete(locale);
  };

  /**
   * Get the locale from the cache.
   *
   * @function getLocale
   * @param {String} locale - locale to retrieve
   * @returns {Object}
   */
  getLocale = locale => this.locales.get(locale);

  get locales() {
    return this._locales;
  }
}

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @description Fetches the locale
 * @param {Object} context - the instance of the app/component to be localized
 */
async function fetchLocale(context) {
  let response;
  let localeStrings;
  let parsedResponse;
  const localePath = `${context._localeRoot}${context.locale}.json`;

  const windowFetch = context._getWindow('fetch');
  /**
   * return legend
   * { localeString } - valid json
   * null - failed request, don't try again
   * false - unknown state due to connection issue, allow for retry later if applicable
   */
  try {
    response = await windowFetch(localePath);
    if (response.ok) {
      try {
        parsedResponse = await response.json();
        localeStrings = parsedResponse;
      } catch (error) {
        // invalid json or possible http 200 connection reset event
        console.error(`Unable to parse locale file: ${error}`);
        return null;
      }
    } else {
      // 404 response - file does not exist
      return null;
    }
  } catch (error) {
    console.error(`Issue fetching locale file from server: ${error}`);
    return false;
  }
  return { localeStrings };
}

var StatefulComponentMixin = Base => {
  // Define the mixin name, this is required to determine if the mixin has
  // Already been applied
  const mixinName = 'StatefulComponent';
  // Determine if there is an attempt to re-initialize the mixin
  if (hasMixin(Base, mixinName)) {
    console.warn(`Tried to add existing mixin ${mixinName}`);
    return Base;
  }

  return class StatefulComponent extends Base {
    static get _mixins() {
      return registerMixin(super._mixins, mixinName);
    }

    /**
     * Define the components as Custom Elements.
     *
     * @function registerComponents
     * @param { Array } components - array of components
     */
    static registerComponents(components) {
      if (!components) {
        console.warn('No component provided to register');
        return;
      }
      if (!Array.isArray(components)) {
        console.warn('incorrect type provided');
        return;
      }
      components.forEach(component => {
        const { is } = component;
        let { componentClass } = component;
        if (typeof component === 'object' && (!is || !componentClass)) {
          console.warn('Object:component not defined properly');
          return;
        }

        if (!componentClass) {
          // if component class is not specified explicitly, it's the same as component.
          componentClass = component;
        }
        if (!customElements.get(is)) {
          customElements.define(is, componentClass);
        }
      });
    }

    /**
     * Define the component as a Custom Element. The optional customName MUST be a valid
     * custom element and contain at least one dash (-).
     *
     * @function register
     * @param { String } customName - name of the component
     */
    static register(customName) {
      // NotSupportedError thrown if you try to register:
      // 1. same class twice
      // 2. same component name again
      if (customName == null) {
        if (!customElements.get(this.is)) {
          customElements.define(this.is, this);
        }
        // Else trying to replace default class e.g. different version
        // Or registering same component twice
      } else if (!customElements.get(customName)) {
        // Name is not already registered, so safe to proceed...
        if (customName === this.is) {
          // Only hit if using same custom name as default but
          // default not registered yet. Safe to register original class.
          customElements.define(this.is, this);
        } else {
          // You can't register same class reference twice, must mutate to use custom name
          const c = class extends this {};
          c.is = customName;
          customElements.define(customName, c);
        }
      }
    }

    /**
     * @protected
     * @function constructor
     * @description Parse the custom element attributes as props
     */
    constructor() {
      super();

      // PROPS
      this._prevProps = undefined;
      this._justConnected = false;
      this._localeCache = new Cache();
      // Debounce prop updates leading to lifecycle callbacks, so that
      // setting multiple props in sequence (e.g. via a declarative
      // renderer calling setAttribute many times) just triggers one big
      // update, not several partial ones.
      this._lifecycleDebounced = helpers.microtaskDebounce(
        this._executeLifecycle.bind(this),
      );

      this._localeLifecycleDebounced = helpers.microtaskDebounce(
        this._executeLocaleLifecycle.bind(this),
      );

      this._handleGlobalLocaleChange =
        this._handleGlobalLocaleChange.bind(this);

      // Find any props initialize for the component
      if (this.constructor._propDefs) {
        this._findProps();
      }
    }

    _handleGlobalLocaleChange() {
      this.locale = helpers.getCurrentSystemLocale();
    }

    /**
     * @protected
     * @function connectedCallback
     * @description The Default connected callback
     */
    connectedCallback() {
      // DOM EVENTS
      helpers.eventHandlers(this.intercepts);
      this._setAttributes();
      this._justConnected = true;
      this._lifecycleDebounced();

      // add listener for eui-locale-change
      if (this.meta?.url) {
        // system locale overrides any locale assigned
        this.locale = helpers.getCurrentSystemLocale() || this.locale;
        document.addEventListener(
          'eui-locale-change',
          this._handleGlobalLocaleChange,
        );
      }
    }

    /**
     * @protected
     * @function disconnectedCallback
     * @description The Default disconnected callback
     */
    disconnectedCallback() {
      if (this.meta?.url) {
        document.removeEventListener(
          'eui-locale-change',
          this._handleGlobalLocaleChange,
        );
      }
      // DOM EVENTS
      helpers.eventHandlers(this.intercepts, false);
      this.didDisconnect();
    }

    // COMPAT
    /**
     * @description Call this from your renderer once you've rendered to the DOM
     */
    compatElementUpdated() {
      helpers.compatUpdated(this._shadyPrepared, this);
    }

    // DOM EVENTS
    bubble(name, detail = {}, config = {}) {
      return helpers.bubble(this, name, detail, config);
    }

    /**
     * @description Get object with current values of all props in this INSTANCE.
     */
    get props() {
      if (this.constructor._propDefs) {
        // Loop through the component's CONSTRUCTOR props definition
        return Object.keys(this.constructor._propDefs).reduce((memo, key) => {
          memo[key] = this[key];
          return memo;
        }, {});
      }
      return {};
    }

    /**
     * @description Let the browser know which attributes to observe.
     * Part of the Custom Elements v1 spec, the browser will observe all
     * the attributes listed here, triggering attributeChangedCallback any
     * time they are set
     * @return {string[]}
     */
    static get observedAttributes() {
      if (this._propDefs !== undefined) {
        this._observedAttributes = Object.entries(this._propDefs)
          /* eslint-disable-next-line no-unused-vars */
          .filter(([key, value]) => value.attribute === true)
          /* eslint-disable-next-line no-unused-vars */
          .map(([key, value]) => helpers.camelToDash(key));
      }
      return this._observedAttributes;
    }

    /**
     * Loop over each prop defined by the user and set the values for props.
     *
     * @function _setAttributes
     * @private
     */
    _setAttributes() {
      if (this.constructor._propDefs) {
        Object.entries(this.constructor._propDefs).forEach(([key, propDef]) => {
          const defaultValue = propDef.default;

          // Attributes can't be set in the constructor, and must be
          // deferred to the connectedCallback, as per the spec.
          if (
            this[key] === undefined &&
            this.attributes[helpers.camelToDash(key)] === undefined &&
            !propDef.required
          ) {
            switch (propDef.type) {
              case Object:
                this[key] =
                  defaultValue !== undefined ? { ...defaultValue } : null;
                break;

              case Array:
                this[key] =
                  defaultValue !== undefined ? [...defaultValue] : null;
                break;

              default:
                this[key] = defaultValue !== undefined ? defaultValue : null;
            }
          }
        });
      }
    }

    _defineProperty(key, propDef, lifeCycleCB) {
      const { type, required, attribute } = propDef;
      const defaultValue = propDef.default;

      // Use a Symbol to avoid cluttering object namespace
      const valueSymbol = helpers.sym(key);
      const { coerce, serialize } = typeMapping(type);
      const existingValue = this[key];

      // Warn against bad API usage
      if (required && defaultValue !== undefined) {
        helpers.warn(
          `[${this.constructor.is}] Required prop "${key}" should not also have a default set`,
        );
      }
      // Apply custom getters/setters to the property
      // TODO: Could move this to the prototype for efficiency
      Object.defineProperty(this, key, {
        // configurable: false,
        enumerable: true,
        get() {
          return this[valueSymbol];
        },
        set(v) {
          // Make sure the received value is of the expected type
          let value = coerce(v);
          if (value == null) {
            // Was it required?  If so, this shouldn't be happening
            if (required) {
              helpers.warn(
                `[${this.constructor.is}] Required prop "${key}" should not be set to null/undefined`,
              );
            }
            // Use the default value if one was provided
            if (defaultValue !== undefined) {
              value = defaultValue;
            }
          }

          // Trigger lifecycle if value has been changed
          // Objects/Arrays still pass through even if not mutated outside component
          if (this[valueSymbol] !== value) {
            this[valueSymbol] = value;
            if (attribute === true) {
              this._syncPropertyToAttribute(key, value, serialize);
            }

            lifeCycleCB();
          }
        },
      });
      // If element is defined in dom before registering it may already
      // have attributes/props assigned. Sync them.
      if (existingValue != null) {
        this[key] = existingValue;
      }
    }

    /**
     * @description Define the locale setter/getter
     */
    _defineLocaleProperty() {
      // If meta available then locale is enabled
      const { meta } = this;
      if (meta?.url) {
        const index = meta.url.lastIndexOf('/');
        const basePath = meta.url.substring(0, index);
        if (basePath) {
          // fixed for life of component
          this._localeRoot = `${basePath}/locale/`;

          const defaultLocale =
            this._getWindow('navigator').language.toLowerCase();
          this._defineProperty(
            'locale',
            {
              attribute: false,
              type: String,
              default: defaultLocale,
            },
            this._localeLifecycleDebounced,
          );

          // Assign locale if none exists and start pre-fetch
          this.locale = this.locale || defaultLocale;
          this._localeLifecycleDebounced();
        }
      }
    }

    /**
     * Fallback when fetch fails or cached locale is marked as failed
     *
     * @param {String} locale
     * @private
     */
    _localeFallback(locale) {
      if (locale === 'en-us') {
        // i18n failure, fallback to hardcoded strings if any
        this.i18n = null;
      } else {
        // Fallback to default
        // This will queue another localelifecycle
        this.locale = 'en-us';
      }
    }

    /**
     * @description Invoke the locale change lifecycle
     */
    async _executeLocaleLifecycle() {
      const { locale, _localeCache } = this;
      const cachedString = _localeCache.getLocale(locale);

      if (cachedString === null) {
        this._localeFallback(locale);
      } else if (typeof cachedString === 'object') {
        // Strings exist, used cache version
        this.i18n = cachedString;
      } else if (cachedString === false) ; else {
        // Mark the locale request as pending in cache
        // microtask about to go into sleep with fetch request
        _localeCache.addLocale(locale, false);

        const data = await fetchLocale(this);
        if (data?.localeStrings) {
          _localeCache.addLocale(locale, data.localeStrings);

          // Due to await need to locale has not changed while waiting
          // Check if still valid
          if (locale === this.locale) {
            this.i18n = data.localeStrings;
          }
        } else {
          // Mark cache so we don't attempt to request again
          if (data === null) {
            // Known 404 or invalid json
            _localeCache.addLocale(locale, null);
          } else {
            // connection issue allow retry later
            _localeCache.removeLocale(locale);
          }

          // Due to await need to locale has not changed while waiting
          // Check if still valid
          if (locale === this.locale) {
            this._localeFallback(locale);
          }
        }
      }
    }

    /**
     * @private
     * @description Find an props for the component
     */
    _findProps() {
      this._defineLocaleProperty();
      // List of reserved props, if someone has them in definition ignore.
      const reservedProps = ['locale', 'is', '_localeRoot'];

      // Loop over each prop defined by the user
      Object.entries(this.constructor._propDefs).forEach(([key, propDef]) => {
        if (reservedProps.indexOf(key) !== -1) return;
        this._defineProperty(key, propDef, this._lifecycleDebounced);
      });
    }

    /**
     * LIFECYCLE HOOKS
     * The component has been connected to the DOM (even with the polyfill,
     * which happens asynchronously).
     * Unlike in the constructor, all props are accessible, so this is a
     * good place to set initial internal state values (or reset them, if
     * this component could be connected multiple times).
     * Also good time to create any subscribers (remember to destroy them
     * later), or bubble any events.
     *
     * Call order:
     * connectedCallback() -> didConnect() -> didChangeProps()
     *
     * @function didConnect
     */
    didConnect() {}

    /**
     * Lifecycle hook
     * Option to set internal state based on newly received external props.
     * Also a good place to do things like send off ajax requests in
     * response to changing props.
     * Make sure to compare prev/current values to be sure it's actually changed.
     *
     *
     * @function didChangeProps
     * @param {Map} changedProps - Keys are the names of changed properties;
     * Values are the corresponding previous values.
     */
    /* eslint-disable-next-line no-unused-vars */
    didChangeProps(changedProps) {}

    // TODO: this function should be re-written so the user doesn't need
    // to call super.shouldRender(prev); componentShouldRender is doing more
    // than just providing a hook.
    /**
     * Lifecycle hook
     * Determine whether the props have changed enough to need a re-render
     * Defaults to using a shallow === check, so won't pick up deep changes
     * in objects (for example).  Use the immutable pattern to avoid this.
     * this.someProp = { ...this.someProp, foo: 'new' }
     * You could also override this to perform a different checking logic
     * in a component, if you need.
     *
     * @function shouldRender
     * @param {Map} changedProps - Keys are the names of changed properties;
     * Values are the corresponding previous values.
     * @return {boolean} True to trigger a re-render
     */
    shouldRender(changedProps) {
      const flag = [...changedProps].some(
        ([key, value]) => value !== this[key],
      );
      return flag;
    }

    /**
     * Lifecycle hook
     * Option to do any preparation needed for a render.
     * Do not set internal state here.
     *
     *
     * @function willRender
     * @param {Map} changedProps - Keys are the names of changed properties;
     * Values are the corresponding previous values.
     */
    /* eslint-disable-next-line no-unused-vars */
    willRender(changedProps) {}

    /**
     * Lifecycle hook
     * Renderers should hook into this.
     *
     *
     * @function executeRender
     */
    executeRender() {}

    /**
     * Lifecycle hook
     * Implement this hook in your component if you are interested
     * to know when the component is upgraded.
     * Renderers should call this only once when the shadowRoot is
     * attached and the template is added.
     *
     * Executes only once in the component lifecycle.
     * Initial render has taken place and changes flushed to the DOM.
     * All props are accessible and the shadowRoot is available.
     * This hook gives the ability to check the presence of slotted children.
     *
     * If the component listens for slotchange events on a slot, then this
     * is the place to get their initial state. In Safari browser the
     * component is mutated before the shadowRoot is added which means
     * the slotchange won't fire on first render.
     *
     *
     * @function didUpgrade
     */
    didUpgrade() {}

    /**
     * Lifecycle hook
     * Rendering has taken place and changes flushed to the DOM, so an
     * opportunity to carry out any imperative updates that may be needed.
     * Frequently used to imperatively set props on slotted children.
     * Do not set internal state here.
     *
     *
     * @function didRender
     * @param {Map} changedProps - Keys are the names of changed properties;
     * Values are the corresponding previous values.
     */
    /* eslint-disable-next-line no-unused-vars */
    didRender(changedProps) {}

    /**
     * Lifecycle hook
     * Component is about to be disconnected from the DOM (but may be
     * connected again later...).
     * Good time to remove any subscribers.
     *
     *
     * @function didDisconnect
     */
    didDisconnect() {}

    /**
     * Get the property definitions as defined for the component.
     * @returns {Map}
     */
    get propDefinitions() {
      const propMap = new Map();
      Object.keys(this.constructor._propDefs)
        .filter(key => !key.startsWith('_'))
        .forEach(key => {
          propMap.set(key, this.constructor._propDefs[key]);
        });
      return propMap;
    }

    /**
     * @description returns the global window property
     * @param {String} prop
     */
    _getWindow(prop) {
      return window[prop];
    }

    /**
     * @description Manually trigger lifecycle callbacks.  Would be used in conjunction
     * with a custom arePropsChangedCallback.
     */
    triggerComponentUpdate() {
      this._lifecycleDebounced();
    }

    /**
     * @description Called (as part of HTML spec) when attribute changes
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(name, oldValue, newValue);
      }
      const propName = helpers.dashToCamel(name);
      const propDef = this.constructor._propDefs[propName];
      const { deserialize } = typeMapping(propDef.type);
      if (propDef && propDef.attribute === true) {
        this._syncAttributeToProperty(propName, newValue, deserialize);
      }
    }

    /**
     * @description Invoke the props changed/rendering lifecycle
     * @function _executeLifecycle
     * @private
     */
    async _executeLifecycle() {
      // Skip lifecycle callbacks if component isn't connected. Don't
      // want to try manipulating a DOM tree that doesn't exist.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected
      if (!this.isConnected) {
        return;
      }

      // Prev/next callbacks, passed on to lifecycle callbacks
      const prevWasUndefined = this._prevProps === undefined;
      const prev = prevWasUndefined ? {} : this._prevProps;

      // Initial render only
      if (this._justConnected) {
        // Check for any missing required props
        if (this.constructor._propDefs) {
          Object.entries(this.constructor._propDefs).forEach(
            ([key, propDef]) => {
              if (propDef.required && this[key] == null) {
                helpers.warn(
                  `[${this.constructor.is}] Required prop "${key}" was not set`,
                );
              }
            },
          );
        }
        this.didConnect();

        this._justConnected = false;
      }

      const changedProps = this._setDiff(prev, this.props);

      // call didChangeProps when there is a change.
      if (changedProps.size > 0) {
        this.didChangeProps(changedProps);
      }

      // Set _prevProps ready for next update, after giving the user a
      // chance to update internal state props in earlier lifecycle hooks
      // Any prop changes after this point will trigger didChangeProps on
      // next microtask
      this._prevProps = this.props;

      // Never let the user bypass the initial render.
      if (
        prevWasUndefined ||
        // This hook has final say on rendering or not
        this.shouldRender(changedProps)
      ) {
        this.willRender(changedProps);

        try {
          this.executeRender();
          this.didRender(changedProps);
        } catch (error) {
          console.error(`[${this.localName}] ${error}`);
        }
      }
    }

    /**
     * Perform a comparison between previous prop values and current prop values
     * to determine differences. Each different prop (key:value) is put into a Map.
     * This Map is set as the changeProps map and used as input to all lifecycle callbacks.
     *
     * @function _setDiff
     * @param {Object} previous - previous prop values
     * @param {Object} current - current prop values
     * @private
     */
    _setDiff(previous, current) {
      const changes = new Map();
      const keys = Object.keys(previous);
      keys.forEach(key => {
        if (previous[key] !== current[key]) {
          changes.set(key, previous[key]);
        }
      });
      return changes;
    }

    /**
     * Sync the HTML attribute value to the JS object property
     *
     * @param {string} name - property name
     * @param {string} v - property value, all types
     * @param {function} deserialize - function for deserializing value
     * @private
     */
    _syncAttributeToProperty(name, v, deserialize) {
      if (name in this.constructor._propDefs) {
        // blocks the setter trying to sync the attribute again, recursion
        this._syncingAttributeToProperty = true;
        // Deserialize based on prop type
        const value = deserialize(v);
        this[name] = value;
        this._syncingAttributeToProperty = false;
      }
    }

    /**
     * Sync a property value to an HTML attribute
     * @param {string} name - property name
     * @param {*} v - property value, all types
     * @param {function} serialize - function for serializing value
     * @private
     */
    _syncPropertyToAttribute(name, v, serialize) {
      if (!this._syncingAttributeToProperty) {
        // Serialize to string | null
        const value = serialize(v);
        const attributeName = helpers.camelToDash(name);
        // Blocking until attributeChangeCallback is complete from attribute change
        if (value == null) {
          this.removeAttribute(attributeName);
        } else {
          this.setAttribute(attributeName, value);
        }
      }
    }
  };
};

const supportsScopedRegistry = !!ShadowRoot.prototype.createElement;

const CustomElementsMixin = Base =>
  class CustomElements extends Base {
    /**
     * Obtains the component definitions map if specified.
     */
    static get components() {
      return {};
    }

    constructor() {
      super();
      this.registerAll(this.constructor.components);
    }

    /**
     * Getter for the instance of the Custom Element Registry.
     * Override this getter if a new instance of the
     * Custom Element Registry is required for every instance of the component
     * that extends Base.
     */
    get customElementRegistry() {
      return this.constructor.__customElementRegistry;
    }

    /**
     * Setter for the instance of the Custom Element Registry.
     * Override this getter if a new instance of the
     * Custom Element Registry is required for every instance of the component
     * that extends Base.
     */
    set customElementRegistry(customElementRegistry) {
      this.constructor.__customElementRegistry = customElementRegistry;
    }

    /**
     * Register a component
     *
     * @function register
     * @param {Object} klass - class of the component to register
     * @param {String} [name] - name of the component to register
     */
    register(klass, name = klass.is) {
      if (name == null) {
        // eslint-disable-next-line no-console
        console.warn('A name for the custom element MUST be specified');
        return;
      }

      const registeredClass = this.customElementRegistry.get(name);
      if (
        registeredClass &&
        supportsScopedRegistry === false &&
        registeredClass === klass
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          `%c The component ${name} is already defined!\n`,
          'background: orange; color: white',
          `Scoped elements use a polyfill from @webcomponents. In order to use scoped element registry you must import the scoped-custom-element-registry\n to the entry point of your project.\n`,
          `See the E-UI SDK documentation for further details`,
        );
        return;
      }
      if (!registeredClass) {
        try {
          const root = supportsScopedRegistry ? this.shadowRoot : window;
          root.customElements.define(name, klass);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(error.message);
        }
      }
    }

    /**
     * Register multiple components to the registry.
     *
     * @function registerAll
     * @param { Object.<string, Object> } components - name:Module for each component to be registered
     */
    registerAll(components) {
      const names = Object.keys(components);
      names.forEach(name => {
        this.register(components[name], name);
      });
    }

    /**
     * Get the shadowRoot options. This is called from Base when attaching the
     * shadow to the component. This determines if scoped Custom Element Registry
     * is supported.
     * If it is supported, customElements attribute is set in the shadowRoot,
     * otherwise the shadowRoot is unchanged.
     *
     * @function shadowRootOptions
     * @returns {Object} - { customElements: new CustomElementRegistry() } || {}
     */
    shadowRootOptions() {
      if (!this.customElementRegistry) {
        this.customElementRegistry = supportsScopedRegistry
          ? new CustomElementRegistry()
          : customElements;
      }
      return supportsScopedRegistry
        ? { customElements: this.customElementRegistry }
        : {};
    }

    static register(componentName) {
      try {
        window.customElements.define(componentName || this.is, this);
      } catch (error) {
        console.warn(error.message);
      }
    }

    /**
     * Convenience method to perform the imperative creation of elements. If scoped Custom Element Registry
     * is supported, elements are created on the shadowRoot, otherwise they are created on the document.
     *
     * @function createElement
     * @param {String} tagName - name of the element to create.
     * @returns Node
     */
    createElement(tagName) {
      const root = supportsScopedRegistry ? this.shadowRoot : document;
      return root.createElement(tagName);
    }
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

/**
 * @description Adds a simple renderer using static template tags.
 */
var Template = Base => {
  function getTemplateElement(template, styleText) {
    if (template === undefined) {
      template = '';
    }

    if (typeof template === 'string') {
      const div = document.createElement('div');
      div.innerHTML = `<template id="the-template">${template}</template>`;
      template = div.querySelector('template#the-template');
    }
    const clone = template.content.cloneNode(template, true);

    if (typeof styleText === 'string') {
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(styleText));
      clone.prepend(style);
    }
    return clone;
  }

  const mixinName = 'Template';
  if (hasMixin(Base, mixinName)) {
    console.warn(`Tried to add existing mixin ${mixinName}`);
    return Base;
  }

  return class Template extends Base {
    static get _mixins() {
      return registerMixin(super._mixins, mixinName);
    }

    constructor() {
      super();
      this.attachShadow({
        mode: 'open',
        ...this.shadowRootOptions?.(),
      });
      this._template = getTemplateElement(
        this.constructor.template,
        this.constructor.style,
      );
      this.root.appendChild(this._template);
    }

    executeRender() {
      // call didUpgrade lifecycle callback on the first render...
      if (!this.firstRender) {
        this.firstRender = true;
        this.didUpgrade();
      }
    }

    get root() {
      return this.shadowRoot;
    }

    static getTemplate(id) {
      const selector = id ? `#${id}` : 'template';
      const template =
        document.currentScript.ownerDocument.querySelector(selector) ||
        document._currentScript.ownerDocument.querySelector(selector);

      return template;
    }

    trigger(eventName, options) {
      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail: options || {},
        }),
      );
    }

    find(value, many) {
      if (many) {
        return this.root.querySelectorAll(value);
      }
      return this.root.getElementById(value);
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
/**
 * This file provides the @definition decorator which is used to setup the
 * definition of a custom component.
 *
 * Usage example
 * import { definition, APPEND } from 'definition.js';
 *
 * ...
 *
 * @definition('e-my-component', {
 *   style: 'someStyle',
 *   template: 'someTemplate',
 *   templatePosition: APPEND,
 *   props: {
 *     propName: { attribute: true, type: Boolean }
 *   }
 * })
 * class MyComponent extends TemplateComponent {}
 */

/**
 * APPEND - Append the template to the existing markup of the component being extended (if any)
 */
const APPEND = 1;

/**
 * PREPEND = Prepend the template to the existing markup of the component being extended (if any)
 */
const PREPEND = 2;

/**
 * Set the template of the component. Setting the optional position of
 * where extended markup will be placed.
 *
 * @function setTemplates
 * @param { Object } target - Component.
 * @param { String } targetTemplate - template form the base component.
 * @param { String } optionTemplate - template form the extended component.
 * @param { String } pos - [PREPEND|APPEND] position fo the extended template.
 */
function setTemplates(
  target,
  targetTemplate = null,
  optionTemplate = null,
  pos = APPEND,
) {
  if (!targetTemplate && !optionTemplate) {
    target.template = targetTemplate;
  } else if (targetTemplate && optionTemplate) {
    if (pos === PREPEND) {
      target.template = `${optionTemplate}${targetTemplate}`;
    } else if (pos === APPEND) {
      target.template = `${targetTemplate}${optionTemplate}`;
    }
  } else if (!targetTemplate && optionTemplate) {
    target.template = optionTemplate;
  }
}

/**
 * Set the style of the component
 *
 * @function setStyles
 * @param {*} target - Component.
 * @param {*} targetStyle - style from the base component.
 * @param {*} optionStyle - style from the extended component.
 */
function setStyles(target, targetStyle = null, optionStyle = null) {
  if (targetStyle && !optionStyle) {
    target.style = targetStyle.toString();
  } else if (targetStyle && optionStyle) {
    target.style = `${targetStyle.toString()}${optionStyle.toString()}`;
  } else if (!targetStyle && optionStyle) {
    target.style = optionStyle.toString();
  }
}

/**
 * A decorator function which sets the decorated Class (target) as a custom component.
 * It allows the specification of the custom name (is),
 * the style and template (options).
 *
 * @function definition
 * @template {String} [K]
 * @param { string } is - custom name of the component.
 * @param { object } [options] - style, template, templatePosition and props of the component.
 * @param { string } [options.style] - CSS style for component
 * @param { string } [options.template] - template markup for component
 * @param { number } [options.templatePosition] - template position for the component,
 * this is used when extending existing Components.
 *
 * @param { Object.<string, {
 *  attribute?: boolean,
 *  type?: (boolean|string|object|Array<any>|number )
 *  default?: (boolean|string|object|Array<any>|number )
 *  required?: boolean
 * }> } [options.props] - the properties for the component
 * @param { object<T> } target - the Class
 */
const definition =
  (
    is,
    options = {
      style: null,
      template: null,
      templatePosition: null,
      props: null,
    },
  ) =>
  target => {
    target.is = is;
    target._propDefs = { ...target._propDefs, ...options.props };
    target._propDefs.i18n = { attribute: false, type: Object };

    setStyles(target, target.style, options.style);
    setTemplates(
      target,
      target.template,
      options.template,
      options.templatePosition,
    );
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

class Stateless extends StatelessComponentMixin(HTMLElement) {}
class Component extends StatefulComponentMixin(HTMLElement) {}
class TemplateComponent extends CustomElementsMixin(
  Template(StatefulComponentMixin(HTMLElement)),
) {}

export { Component as C, TemplateComponent as T, definition as d, hasMixin as h, registerMixin as r };
