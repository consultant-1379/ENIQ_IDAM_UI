import CONFIG from './snowpack.config.js';
import devOptions from './dev/ui-service-dev.js';

const { NODE_ENV } = process.env;
const DEVELOPMENT = 'development';

if (NODE_ENV === DEVELOPMENT) {
  CONFIG.routes = devOptions.routes;
  CONFIG.packageOptions.external = devOptions.packages;
}

/** @type {import("snowpack").SnowpackUserConfig } */
export default CONFIG;
