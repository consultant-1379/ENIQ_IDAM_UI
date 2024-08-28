import { ConfigManager as CM } from '@adp/ui-common';
import defaultConfig from './launcher-config-default.js';
import constants from '../utils/constants.js';
import { getStaticPath } from '../utils/helper.js';

import deploymentConfigSchema from '../schemas/ui.deployment.config.json';

const { CONFIG_LOCATION } = constants;

class ConfigManager extends CM {
  constructor() {
    super({
      defaultConfig,
      schema: deploymentConfigSchema,
      path: `${getStaticPath()}${CONFIG_LOCATION}`,
    });
  }

  getLoggerConfig() {
    return this.config.logging;
  }

  getLogLevel() {
    return this.getLoggerConfig().logLevel;
  }

  getLogoutURL() {
    return this.config.logoutURL;
  }

  getUserAccountURL() {
    return this.config.userAccountURL;
  }
}

export default new ConfigManager();
