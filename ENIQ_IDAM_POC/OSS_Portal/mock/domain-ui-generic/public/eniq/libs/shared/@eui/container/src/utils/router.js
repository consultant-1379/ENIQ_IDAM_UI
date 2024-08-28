/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
class Router {
  constructor() {
    this._bindMethods();

    // Flags so we can block listener
    this.disableURLListener = false;
    this.silent = false;

    // For recording position in history
    this.isReturning = false;
    this.currentPosition = 0;
    this.previousPosition = null;

    // Check to see if navigating back to site from any direction
    // Entries will have a historyIndex assigned
    const history = this._getWindow('history');
    if (history.state?.historyIndex > 0) {
      this.isReturning = true;
      this.currentPosition = history.state?.historyIndex;
    }

    // Set default appRoot (hash mode)
    this.appRoot = '';

    // Trigger initial url check manually for current location
    // for those who are already listening
    this._handleLocationChange();

    // Global event listener for any <a> tags used
    document.addEventListener('click', this._globalClickHandler);

    // Triggered by back/forward buttons, manually triggered by goto
    // Always fired with hashchange event
    window.addEventListener('popstate', this._handleLocationChange);
  }

  /**
   * @public
   * @function setAppRoot
   * @description The setAppRoot function for the router
   * @param {String} appRoot - The appRoot value
   */
  setAppRoot(appRoot) {
    if (typeof appRoot !== 'string') {
      return;
    }
    // TODO check appRoot for unencoded/invalid chars? e.g. 'A String' or encode?
    // Applicable to path routing
    // anything other than undefined/null/empty string will enable path routing
    if (appRoot === '/') {
      // Ensure localhost:8000/app1 can be supported
      // Can't clean this
      this.appRoot = appRoot;
    } else {
      // Clean extra / off appRoot, easier to manage
      this.appRoot = this._cleanURL(appRoot);
    }
  }

  /**
   * @private
   * @function _bindMethods
   * @description Binds methods to 'this' context
   */
  _bindMethods() {
    this._handleLocationChange = this._handleLocationChange.bind(this);
    this._globalClickHandler = this._globalClickHandler.bind(this);
    this.goto = this.goto.bind(this);
    this._getLocation = this._getLocation.bind(this);
    this._waitForUserInteraction = this._waitForUserInteraction.bind(this);
    this._confirmedUserInteraction = this._confirmedUserInteraction.bind(this);
    this._cancelUserInteraction = this._cancelUserInteraction.bind(this);
  }

  /**
   * @public
   * @function goto
   * @description Register a new route and callback for the specific path
   * @param {String} path - The path to register the route for
   */
  goto(path = '') {
    // Check for full protocol string. http could be start of app name
    // logic assumes origin not applied
    // Note: history.pushState will throw error if you try to change origin value
    if (path.startsWith('http://') || path.startsWith('https://')) {
      /* eslint-disable-next-line no-console */
      console.warn(
        'Error: Full urls not supported. Please use application path',
      );
      return;
    }

    let cleanPath = this._cleanURL(path);
    if (!this.appRoot) {
      // Hash routing always relative to current location
      // Don't need to append location origin or pathname
      // Don't know if # is present in path, append if missing
      if (!cleanPath.startsWith('#')) {
        // #/app1 will still work as extra / cleaned later
        cleanPath = `#${cleanPath}`;
      }
    } else {
      // if using path just append everything onto appRoot
      // Must start with / otherwise it will be relative to end of existing url
      // current - dev/app1, path - dev/app2 --> dev/dev/app2
      cleanPath = `/${cleanPath}`;
      // Append appRoot if not at origin
      if (this.appRoot !== '/') {
        cleanPath = `/${this.appRoot}${cleanPath}`;
      }
    }

    const history = this._getWindow('history');
    history.pushState(null, null, cleanPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  /**
   * @function _getWindow
   * @description returns property on the global window object
   * @param {String} prop - Property name
   */
  _getWindow(prop) {
    return window[prop];
  }

  /**
   * @private
   * @function _handleLocationChange
   * @description Handles the locations change event, gets the current path details
   * and bubbles event
   * @param {Object} event - Popstate event
   */
  _handleLocationChange(event) {
    // For where we want skip an event which we trigger ourselves
    // Timing of our logic and receipt of event not consistent
    if (this.silent) {
      this.silent = false;
      return;
    }

    // history.back + forward are not silent
    const history = this._getWindow('history');
    const historyState = history.state;
    if (this.disableURLListener) {
      // Waiting for user to confirm/cancel navigation
      // Any further popstate events should be ignored
      // However need to counter changes in history position
      // from further presses of back/forward button so url
      // does not change. Only native onBeforeunload event
      // can overrule this

      // previousPosition should not be null at this point
      // and state should have historyIndex value
      if (this.previousPosition > historyState.historyIndex) {
        history.go(1);
      } else if (this.previousPosition < historyState.historyIndex) {
        history.go(-1);
      }
      return;
    }
    // pressing forward/backwards buttons will trigger this and copy of popstate event passed
    let direction = null;
    const numHistoryEntries = history.length;

    if (!this.isReturning) {
      // Loaded container for first time
      // history.state will be null
      history.replaceState(
        { historyIndex: numHistoryEntries },
        null,
        window.location.href,
      );
      this.isReturning = true;
      this.currentPosition = numHistoryEntries;
      direction = 1;
    } else if (!event) {
      // Loading after pressing back/forward/refresh button
      // Don't know which direction from
      // Do nothing as constructor has synced state
    } else if (event.state === null) {
      // Do not use Number.isNaN breaks check + tests
      /* eslint-disable-next-line */
      if (isNaN(historyState?.historyIndex)) {
        // Creating new history entry
        history.replaceState(
          { historyIndex: numHistoryEntries },
          null,
          window.location.href,
        );
        this.previousPosition = this.currentPosition;
        this.currentPosition = numHistoryEntries;
        direction = 1;
      }
      // else skip, someone has triggered popstate but history.pushstate not called.
      // history.state already has a value
    } else {
      // moving through existing history entries for container
      const { historyIndex } = event.state;
      if (historyIndex < this.currentPosition) {
        // Going backwards through old entries
        direction = -1;
        this.previousPosition = this.currentPosition;
        this.currentPosition = historyIndex;
      } else if (historyIndex > this.currentPosition) {
        // going forwards through old entries
        direction = 1;
        this.previousPosition = this.currentPosition;
        this.currentPosition = historyIndex;
      } else {
        // Should be unreachable, historyIndex and currentPosition should never be the same
        // Only possible on return if history.replace was called by someone else before
        // leaving url first time. Could cause other strange issues too.
        /* eslint-disable-next-line no-console */
        console.error('Error in history state');
      }
    }

    const { query, appPath } = this._getLocation();

    // Dispatch event, anyone listening will get location info
    document.dispatchEvent(
      new CustomEvent('location:change', {
        bubbles: true,
        composed: true,
        detail: {
          query,
          appPath,
          direction,
        },
      }),
    );
  }

  /**
   * @private
   * @function _waitForUserInteraction
   * @description Reverts the last navigation while waiting for user to confirm action
   * @param {Number} direction - direction user was navigating
   */
  _waitForUserInteraction(direction) {
    // Disable listener until confirm or cancel called
    this.disableURLListener = true;
    if (direction) {
      const history = this._getWindow('history');
      // apply negative value of direction as we are reverting
      // This call is not silent
      history.go(-direction);
    }
  }

  /**
   * @private
   * @function _confirmedUserInteraction
   * @description Reapplies the last navigation after user confirmed it is safe to navigate
   * @param {Number} direction - direction user was navigating
   */
  _confirmedUserInteraction(direction) {
    // Enable listener but need to skip next event
    this.silent = true;
    this.disableURLListener = false;
    if (direction) {
      const history = this._getWindow('history');
      // This call is not silent
      history.go(direction);
    }
  }

  /**
   * @private
   * @function _cancelUserInteraction
   * @description Releases lock on listener
   */
  _cancelUserInteraction() {
    // Current + previous position should have same values
    // No need to correct previous it as only used for fixing url while disabled
    // Next nav will update it anyway
    const history = this._getWindow('history');
    this.currentPosition = history.state.historyIndex;
    this.disableURLListener = false;
  }

  /**
   * @private
   * @function _getLocation
   * @description Gets the current location
   * @returns {Object} parsed location into { query, appPath }
   */
  _getLocation() {
    const { query, hash, url } = this._parseCurrentLocation();

    let appPath;
    if (!this.appRoot) {
      // No path option used, using hash routing
      appPath = hash;
    } else {
      // option must be defined for history
      appPath = url;
    }

    if (!appPath || appPath === '') {
      // commenting this code as it causes the default package to be loaded twice
      // this triggers the hashchange event and calls _handleLocationChange()
      // which triggers Context._handleLocationChanged() and loads the default package
      // again.
      // window.location.hash = '#';
      appPath = '/';
    }

    return { query, appPath };
  }

  /**
   * @private
   * @function _parseCurrentLocation
   * @description Parses the current location URL
   * @returns {Object} query, hash, url
   */
  _parseCurrentLocation() {
    const location = this._getWindow('location');
    let hashURL = location.hash;
    // Native query always starts with ?
    let [, query = null] = location.search.split('?');
    let tenant = null;

    // Don't need to worry about origin, remove the appRoot
    let url;
    if (!this.appRoot || this.appRoot === '/') {
      // Either in hash mode or path around origin
      url = location.pathname;
    } else {
      [, url] = location.pathname.split(`${this.appRoot}`);
    }

    // Empty string if nothing after #
    if (hashURL) {
      if (query) {
        // # is after native query string, save as tenant
        tenant = query;
      }
      // queries remain part of hash, always on right of url
      [hashURL, query] = hashURL.split('?');
      // Extra # can exist, ignore them
      // Note: first char always #
      [, hashURL] = hashURL.split('#');
    } else {
      // No hash here, clearly not trying to use hash routing
      // Only native queries exist
      // Assume ?qVar=1/app1 is a query and is not attempt to
      // append app path after query
      // these will be considered invalid url
    }
    query = this._parseQuery(query);

    // Clean any extra /
    url = this._cleanURL(url);
    hashURL = this._cleanURL(hashURL);

    // TODO don't know what to do with tenant values
    //  If history mode /app1?x=1#mdanchor?y=1
    //  tenant - x=1 (location.search)
    //  query - y=1 (from hash)
    //  Possible to reverse and go with location.search
    //  At moment query is always at the end of url (right side)
    return { query, hash: hashURL, url, tenant };
  }

  /**
   * @private
   * @function _cleanURL
   * @description Cleans a url and removes any slashes from the beginning and end
   * @param {String} url - The url to clean
   * @returns {String} Cleaned URL
   */
  _cleanURL(url) {
    if (url) {
      return url.toString().replace(/\/$/, '').replace(/^\//, '');
    }
    return url;
  }

  /**
   * @private
   * @function _parseQuery
   * @description Parse query options into a javascript object
   * @param {String} query - The query string to parse into key/values
   * @returns {Object} Parsed query
   */
  _parseQuery(query) {
    if (!query) {
      return {};
    }

    const keyValues = query.split('&');
    return keyValues.reduce((acc, cv) => {
      const [key, value] = cv.split('=');
      // Not decoding any values, leave as is
      acc[key] = !value ? '' : value;
      return acc;
    }, {});
  }

  /**
   * Global click listener to capture any events that bubble to document level
   * Aim is to intercept any events from <a> tags and examine them when in history
   * mode. Must manually redirect clicks to Router.goto function when navigating
   * internally otherwise container will unload when location.pathname changes
   *
   * Note: This can conflict with mocha reporter grep function if enabled while testing
   *
   * @private
   * @function _globalClickHandler
   * @param {Object} event - Click event
   */
  _globalClickHandler(event) {
    // In hash mode abort
    if (!this.appRoot) {
      return;
    }

    // ignore the click if the default action is prevented
    if (event.defaultPrevented) {
      return;
    }

    // ignore the click if not with the primary mouse button
    if (event.button !== 0) {
      return;
    }

    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }

    // Any component with shadowRoot closed will be excluded
    const path = event.composedPath();

    // Checking composedPath for location of anchor tag as event may have originated
    // from child node of <a> e.g. innerText
    let anchor = event.target;
    for (const target of path) {
      if (target.nodeName?.toLowerCase() === 'a') {
        anchor = target;
        break;
      }
    }

    // ignore the click if not at an <a> element
    if (anchor.nodeName.toLowerCase() !== 'a') {
      return;
    }

    // ignore the click if the <a> element has a non-default target
    if (anchor.target?.toLowerCase() !== '_self') {
      return;
    }

    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute('download')) {
      return;
    }

    // Custom attribute will allow native behaviour to occur
    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute('router-ignore')) {
      return;
    }

    const location = this._getWindow('location');
    // ignore the click if the target is external to the app
    if (anchor.origin !== location.origin) {
      return;
    }

    // ignore the click if the target URL is a fragment on the current page
    // e.g. md anchor
    if (anchor.pathname === location.pathname && anchor.hash !== '') {
      return;
    }

    // Block to prevent site unload
    event.preventDefault();

    let root;
    if (this.appRoot === '/') {
      root = '';
    } else {
      // Cleaned of extra /
      root = this.appRoot || '';
    }

    // Need to take into consideration the appRoot
    // <a> will parse partial urls to full.
    const [, fullPath] = anchor.href.split(`${location.origin}/${root}`);
    this.goto(fullPath);
  }
}
const router = new Router();

export { router as Router };
