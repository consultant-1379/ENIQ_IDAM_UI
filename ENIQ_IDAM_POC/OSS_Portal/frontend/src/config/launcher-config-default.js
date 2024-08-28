// update the ui-service-mock.js file too
import apiConfig from './api-config.json';

export default {
  logging: {
    logLevel: 'info',
  },
  routes: { ...apiConfig },
};
