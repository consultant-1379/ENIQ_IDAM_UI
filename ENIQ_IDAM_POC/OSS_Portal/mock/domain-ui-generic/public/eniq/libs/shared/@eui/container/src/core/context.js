/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
import { Router } from '../utils/router.js';
import _cache from './cache.js';

export default class Context {
  constructor(args) {
    this.metaData = args?.metaData;

    this.routeMap = [];
    this.nestedLevel = 0;

    // Expose only the parts of the router we want
    // Exposing everything is dangerous and can break router
    window.EUI = window.EUI || {};
    window.EUI.Router = {
      goto: Router.goto,
      getRouteMap: this.getRouteMap.bind(this),
    };
    this._setRouterAppRoot(args?.appRoot || '');
    this.generateRouteMap();
  }

  /**
   * @function getLocation
   * @description Returns current location information from router
   */
  getLocation() {
    return Router._getLocation();
  }

  /**
   * @function waitForUserInteraction
   * @description Reverts the last navigation while waiting for user to confirm action
   * @param {String} direction - direction user was navigating
   */
  waitForUserInteraction(direction) {
    Router._waitForUserInteraction(direction);
  }

  /**
   * @function confirmedUserInteraction
   * @description Reapplies the last navigation after user confirmed it is safe to navigate
   * @param {String} direction - direction user was navigating
   */
  confirmedUserInteraction(direction) {
    Router._confirmedUserInteraction(direction);
  }

  /**
   * @function cancelUserInteraction
   * @description Releases lock on listener
   */
  cancelUserInteraction() {
    Router._cancelUserInteraction();
  }

  /**
   * @getter cache
   * @description Returns the current cache reference
   * @returns {Object}
   */
  get cache() {
    return _cache;
  }

  /**
   * @function getRouteMap
   * @description Returns a copy of routeMap
   * @returns {Object}
   */
  getRouteMap() {
    const { routeMap } = this;
    const { appRoot } = Router;
    let mode = 'hash';
    if (appRoot) {
      mode = 'history';
    }
    // All info required to create internal links
    return { routeMap, appRoot, mode };
  }

  /**
   * Route Map generation functions (start)
   * -------------------------------------------------------------
   */

  /**
   * @private
   * @function _guidGenerator
   * @description Generate a unique id for each routemap entry
   */
  _guidGenerator() {
    const S4 = () => {
      const rand = Math.floor((1 + Math.random()) * 0x10000);
      return rand.toString(16).substring(1);
    };
    const time = new Date().getTime();
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}-${time}`;
  }

  /**
   * Same child app could be referenced again in lineage
   * If so start of infinite loop
   *
   * @function _testForSelfReference
   * @param {String} targetName - name of app
   * @param {String} parentId - the routeID of parent app
   * @return {boolean}
   * @private
   */
  _testForSelfReference = (targetName, parentId) => {
    // Check against routeMap so far
    const parentApp = this.routeMap.find(app => app?.routeId === parentId);
    if (parentApp?.childNames?.includes(targetName)) {
      return true;
    }
    if (parentApp?.parentId) {
      // Check grandparent
      return this._testForSelfReference(targetName, parentApp.parentId);
    }
    return false;
  };

  /**
   * Function to separate the URL Pattern from fixed part of route
   *
   * @param {String} route - Raw UI Meta route entry for app
   * @return {string}
   * @private
   */
  _parseMenuPath = route => {
    // Design decision 1st part of route must be fixed
    // Start of pattern must be marked with /
    // menuPath required for processing children and navMenu links
    // app1/<pattern>/child1/<pattern> not valid design and
    // URLPattern will fail if parent + child patterns contain the same keys
    // Won't check or process pattern. Assume this is what they want.
    // Will cause mayhem or be too strict if used incorrectly
    if (route.indexOf('/') !== -1) {
      return route.substring(0, route.indexOf('/'));
    }
    // assuming fixed path but ...
    // could devs be trying:-
    // app{1}? --> app or app1
    // {:id}? --> '' or any value without / in it
    // Trust to follow rules or check for {, }, (, ), ?, *, :, + characters and reject?
    return route;
  };

  /**
   * Function to process children of parent app and create their routeMap entries
   *
   * @param {String} parentRoute - menuPath of parent app
   * @param {Array} children - Names of all child apps of parent
   * @param {String} parentId - routeId of parent app
   * @param {String} grandparentId - routeID of grandparent app
   * @private
   */
  _checkChildren = (parentRoute, children, parentId, grandparentId) => {
    // For UX purposes, designed to only allow nesting to 10 levels
    this.nestedLevel += 1;
    const nestedLevelLimit = 10;
    children.forEach(child => {
      const childApp = this.findAppWithName(child);
      if (childApp) {
        // Check for infinite loops starting
        if (this._testForSelfReference(child, grandparentId)) {
          /* eslint-disable-next-line no-console */
          console.warn(
            `App self reference detected (infinite loop): ${childApp.name}`,
          );
          return;
        }

        let { route = '' } = childApp;
        let menuPath;
        const routeId = this._guidGenerator();
        // Possible nested group so would not have route
        if (route) {
          // Parent could have been top level group
          // TODO urls might look odd with nested subgroups
          //  Should fallback anyway to parent if child route does not exist
          //  groups having routes should only be an issue at top level as no fallback
          menuPath = this._parseMenuPath(route);

          // Append parent menuPath to form its paths
          if (parentRoute) {
            route = `${parentRoute}/${route}`;
            menuPath = `${parentRoute}/${menuPath}`;
          }

          try {
            const entry = this._createRouteMapEntry(
              childApp,
              menuPath,
              route,
              routeId,
              parentId,
              parentRoute,
            );
            // Important!!! Put the children to front of queue otherwise
            // parent + pattern will block access to child app
            this.routeMap.unshift(entry);
          } catch (e) {
            // If child has invalid route, children will be ignored as well
            /* eslint-disable-next-line no-console */
            console.warn(
              `Unable to process Child App: ${childApp.name}. Route invalid`,
            );
            return;
          }
        } else {
          // Fallback to parent route if this child is a group
          // If parent is also group this will remain undefined
          menuPath = parentRoute;
          // Record in route Map. Order does not matter as no urlPattern
          this.routeMap.unshift({ ...childApp, menuPath, routeId, parentId });
        }

        if (this.nestedLevel === nestedLevelLimit) {
          /* eslint-disable-next-line no-console */
          console.warn(`Nested limit reached with App: ${childApp.name}`);
        } else if (childApp?.childNames?.length > 0) {
          this._checkChildren(menuPath, childApp.childNames, routeId, parentId);
        }
      }
    });
    this.nestedLevel -= 1;
  };

  /**
   * Function to create routeMap entry for app
   * Will throw error if URL Pattern invalid
   *
   * @param app - Copy of existing UI meta for app
   * @param menuPath - The default path
   * @param route - URL Pattern route
   * @param routeId - Unique ID for this routeMap entry
   * @param parentId - (optional) app's parent routeMap ID if child app
   * @param parentRoute - (optional) app's parent menuPath, important with group entries
   * @return {Object} - routeMap entry
   * @private
   */
  _createRouteMapEntry = (
    app,
    menuPath,
    route,
    routeId,
    parentId,
    parentRoute,
  ) => {
    let urlPattern;
    // Need to block pattern creation for following conditions
    //  1. child is a group --> pattern would be same as parent, conflict
    //  2. parent and child are both groups
    if (menuPath || parentRoute) {
      // Create URL pattern for which will be checked against Router supplied path
      // will throw error if someone did /app1/:prop1/:prop1 Keys must be unique
      urlPattern = new URLPattern({ pathname: route });
    }
    // Can't push to routeMap here. Order in routeMap different
    // depending on parent or child app
    return {
      ...app,
      menuPath,
      urlPattern,
      routeId,
      parentId,
    };
  };

  /**
   * @function generateRouteMap
   * @description generates routeMap based on current UI meta and bubbles event when complete.
   */
  generateRouteMap() {
    // Clone to be safe
    const apps = JSON.parse(JSON.stringify(this.metaData?.apps || []));

    this.routeMap = [];
    // Find our list of top level parents
    apps.forEach(app => {
      const hasParent = this.findParentApp(app?.name);
      if (!hasParent) {
        const { route = '' } = app;
        let menuPath = route;
        if (route) {
          menuPath = this._parseMenuPath(route);
        }
        const routeId = this._guidGenerator();
        try {
          const entry = this._createRouteMapEntry(
            app,
            menuPath,
            route,
            routeId,
          );
          // Keep parents in order found in meta. Affects Nav Menu order.
          this.routeMap.push(entry);
        } catch (e) {
          // If parent has invalid route, children will be ignored as well
          /* eslint-disable-next-line no-console */
          console.warn(`Unable to process App: ${app.name}. Route invalid`);
        }
      }
    });

    // Clone routeMap, at this point only parentApps exists
    const parentApps = [...this.routeMap];

    // Process each parent for children
    parentApps.forEach(app => {
      if (app?.childNames?.length > 0) {
        this._checkChildren(app.menuPath, app.childNames, app.routeId);
      }
    });
    // Note: Depending on metadata could be more entries that number of apps.
    // if more than one path to app due to parent/child relationship the numbers
    // will be greater
    document.dispatchEvent(
      new CustomEvent('location:routemap', {
        bubbles: true,
        composed: true,
        // Not just this.routeMap in detail
        detail: this.getRouteMap(),
      }),
    );
  }

  /**
   * Route Map generation functions (end)
   * -------------------------------------------------------------
   */

  /**
   * Search for an app with route. If app is found
   * its metadata and any params are returned, otherwise empty object returned
   *
   * @function findAppFromRouteMap
   * @param {string} route - route of app
   * @returns {{
   * name: string,
   * displayName: string,
   * descriptionShort: string | undefined,
   * descriptionLong: string | undefined,
   * module: string | undefined,
   * color: string | undefined,
   * acronym: string | undefined,
   * type: string | undefined,
   * priority: number | undefined,
   * tags: string[] | undefined,
   * version: string,
   * route: string | undefined,
   * url: string | undefined,
   * options: object | undefined,
   * specification: string | undefined,
   * childNames: string[] | undefined,
   * groupNames: string[] | undefined } | undefined}
   */
  findAppFromRouteMap = route => {
    // Check which pattern matches
    // Note: RouteMap deliberately has children at front of array to avoid parent matching first
    const appMetaData = this.routeMap?.find(app =>
      app.urlPattern?.test({ pathname: route }),
    );
    if (appMetaData) {
      // Check if pattern found any groups
      const params = appMetaData.urlPattern.exec({ pathname: route }).pathname
        .groups;
      // Clean up params, removed undefined keys to avoid collisions
      for (const key in params) {
        if (params[key] === undefined) {
          delete params[key];
        }
      }
      return { appMetaData, params };
    }
    // No fallback in event of no match --> App Failed
    // Possible to check against menuPath if pattern too strict
    return {};
  };

  /**
   * Search for an app with name. If app is found
   * its metadata is returned, otherwise undefined is returned
   *
   * @function findAppWithName
   * @param {String} name - name of the app to find
   * @returns {{
   * name: string,
   * displayName: string,
   * descriptionShort: string | undefined,
   * descriptionLong: string | undefined,
   * module: string | undefined,
   * color: string | undefined,
   * acronym: string | undefined,
   * type: string | undefined,
   * priority: number | undefined,
   * tags: string[] | undefined,
   * version: string,
   * route: string | undefined,
   * url: string | undefined,
   * options: object | undefined,
   * specification: string | undefined,
   * childNames: string[] | undefined,
   * groupNames: string[] | undefined } | undefined}
   */
  findAppWithName = name => this.metaData?.apps?.find(app => app.name === name);

  /**
   * Search for an app's parent. If the parent app is found
   * its metadata is returned, otherwise undefined is returned
   *
   * Should only be used to determine if app is reference by another
   * App can have more than one parent at runtime
   *
   * @function findParentApp
   * @param {string} name - name of child app
   * @returns {{
   * name: string,
   * displayName: string,
   * descriptionShort: string | undefined,
   * descriptionLong: string | undefined,
   * module: string | undefined,
   * color: string | undefined,
   * acronym: string | undefined,
   * type: string | undefined,
   * priority: number | undefined,
   * tags: string[] | undefined,
   * version: string,
   * route: string | undefined,
   * url: string | undefined,
   * options: object | undefined,
   * specification: string | undefined,
   * childNames: string[] | undefined,
   * groupNames: string[] | undefined } | undefined}
   */
  findParentApp = name =>
    this.metaData?.apps?.find(app => app?.childNames?.includes(name));

  /**
   * Search for an app's parent. If the parent app is found
   * its routemap entry is returned, otherwise undefined is returned
   *
   * @function findParentApp
   * @param {string} parentId - routeId of parent app
   * @returns {{
   * name: string,
   * displayName: string,
   * descriptionShort: string | undefined,
   * descriptionLong: string | undefined,
   * module: string | undefined,
   * color: string | undefined,
   * acronym: string | undefined,
   * type: string | undefined,
   * priority: number | undefined,
   * tags: string[] | undefined,
   * version: string,
   * route: string | undefined,
   * url: string | undefined,
   * options: object | undefined,
   * specification: string | undefined,
   * childNames: string[] | undefined,
   * groupNames: string[] | undefined } | undefined}
   */
  findParentAppFromRouteMap = parentId =>
    this.routeMap?.find(app => app?.routeId === parentId);

  /**
   * Recursively search for an app's parent. If the parent app is found
   * its metadata is pushed into an array. An array, representing the
   * lineage of an app is returned.
   *
   * [] is returned if the app does NOT have a parent.
   *
   * @function findAppLineage
   * @param {string} parentId - name of child app
   * @param {[object]} lineage - App objects
   * @returns {[{
   * name: string,
   * displayName: string,
   * descriptionShort: string | undefined,
   * descriptionLong: string | undefined,
   * module: string | undefined,
   * color: string | undefined,
   * acronym: string | undefined,
   * type: string | undefined,
   * priority: number | undefined,
   * tags: string[] | undefined,
   * version: string,
   * route: string | undefined,
   * url: string | undefined,
   * options: object | undefined,
   * specification: string | undefined,
   * childNames: string[] | undefined,
   * groupNames: string[] | undefined }] | []}
   */
  findAppLineage = (parentId, lineage = []) => {
    const parentApp = this.findParentAppFromRouteMap(parentId);
    if (parentApp) {
      lineage.push({
        displayName: parentApp.displayName,
        menuPath: parentApp.menuPath,
      });
      this.findAppLineage(parentApp.parentId, lineage);
    }
    return lineage;
  };

  _setRouterAppRoot = appRoot => {
    Router.setAppRoot(appRoot);
  };
}
