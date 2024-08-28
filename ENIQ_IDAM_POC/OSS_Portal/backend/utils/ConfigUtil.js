import { updateToAbsoluteUrl } from './URLUtil.js';
import { getLogger } from '../services/logging.js';

const logger = getLogger();

class ConfigUtil {
  /**
   * @typedef {Object} Merged
   * @property {Array<Object>} apps
   * @property {Array<Object>} components
   * @property {Array<Object>} groups
   *
   * Merge a list of Configs into apps, groups and component lists.
   *
   * @param {Array<Config>} configs
   * @returns {Merged}
   * @memberof K8sService
   */
  mergeConfigs(configs) {
    let apps = [];
    let groups = [];
    let components = [];
    configs.forEach((config) => {
      const common = {};
      if (config.name) {
        common.service = config.name;
      }
      if (config.meta.apps) {
        apps = this.resolveConflicts(
          config.meta.apps,
          apps,
          (conflictingNames) =>
            `Conflict occurred during app discovery. The conflicting appNames are: ${conflictingNames.join(
              ', ',
            )}`,
        );
        apps = apps.concat(
          config.meta.apps.map((app) => {
            const appMeta = {
              ...common,
              ...app,
            };
            updateToAbsoluteUrl(appMeta, config.ingressBaseurl);
            return appMeta;
          }),
        );
      }
      if (config.meta.groups) {
        groups = this.resolveConflicts(
          config.meta.groups,
          groups,
          (conflictingNames) =>
            `Conflict occurred during group discovery. The conflicting groupNames are: ${conflictingNames.join(
              ', ',
            )}`,
        );
        groups = groups.concat([].concat(config.meta.groups));
      }
      if (config.meta.components) {
        components = this.resolveConflicts(
          config.meta.components,
          components,
          (conflictingNames) =>
            `Conflict occurred during component discovery. The conflicting componentNames are: ${conflictingNames.join(
              ', ',
            )}`,
        );
        components = components.concat(
          config.meta.components.map((component) => ({
            ...common,
            ...component,
          })),
        );
      }
    });
    return {
      apps,
      groups,
      components,
    };
  }

  resolveConflicts(newObjects, previousObjects, messageFunction) {
    const objectIds = newObjects.map((object) => object.name);
    const conflictingNames = previousObjects
      .filter((object) => objectIds.includes(object.name))
      .map((object) => object.name);

    if (conflictingNames.length !== 0) {
      logger.warning(messageFunction(conflictingNames));
      return previousObjects.filter((object) => !objectIds.includes(object.name));
    }
    return previousObjects;
  }
}

const configUtil = new ConfigUtil();
export default configUtil;
