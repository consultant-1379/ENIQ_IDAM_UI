import express from 'express';
import * as path from 'path';
import v8 from 'v8';
import { fileURLToPath } from 'url';
import configManager from './config/configManager.js';
import { load } from './loaders/index.js';
import { getLogger } from './services/logging.js';
import k8sQueryService from './services/k8sQueryService.js';
import manualServiceConfigHandler from './services/manualServiceConfigHandler.js';
import certificateManager from './services/certificateManager.js';
import CONSTANTS from './config/constants.js';
import pmService from './services/pmService.js';
import { requestLogger } from './services/requestLogger.js';
import { censorObject } from './utils/formatUtil.js';

const app = express();
app.disable('x-powered-by');

const logger = getLogger();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const currentConfigs = configManager.getConfig();
logger.info('The current configs are as follows:');
logger.info(JSON.stringify(censorObject(currentConfigs), null, 4));

const heapStatistics = v8.getHeapStatistics();
logger.info(
  `Heap size memory limit is set to ${Math.round(heapStatistics.heap_size_limit / 1024 / 1024)}MB.`,
);

pmService.applyPromMiddleware(app);

app.use(requestLogger);

if (process.env.NODE_ENV === 'production') {
  app.use(CONSTANTS.FRONTEND_ROUTE, express.static(path.join(__dirname, '../frontend')));
}

if (process.env.NODE_ENV === 'bridge') {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const { createProxyMiddleware } = require('http-proxy-middleware');
  app.use(
    CONSTANTS.FRONTEND_ROUTE,
    createProxyMiddleware({
      target: 'http://localhost:8080',
      followRedirects: true,
      logLevel: 'debug',
      pathRewrite: {
        [`${CONSTANTS.FRONTEND_ROUTE}`]: '',
      },
    }),
  );
}

// Run Loaders
load(app);

const startK8sService = async () => {
  if (configManager.getConfig().k8sQueryServiceEnabled) {
    await k8sQueryService.startWatching();
  } else {
    logger.info('K8S Service is disabled.');
  }
  manualServiceConfigHandler.triggerInitialEvents();
};

startK8sService();

// needed to close the app gracefully in tests
app.close = () => {
  pmService.shutDown();
  k8sQueryService.stopWatching();
  configManager.stopAllConfigWatch();
  certificateManager.stopCertificateWatch();
};

export default app;
