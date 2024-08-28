import express from 'express';
import { createRequire } from 'module';
import bodyParser from 'body-parser';
import { getCookieParserMiddleware } from '@adp/auth';
import {
  getMetaRoutes,
  getLoggingRoutes,
  getInvalidRoutes,
  getServeRoutes,
} from '../routes/index.js';
import { getAuditLogger } from '../services/auditLogging.js';
import { isReady } from '../utils/probeUtil.js';

const require = createRequire(import.meta.url);
const apiConfig = require('../config/api-config.json');

// Loads the express module, initializes routes and settings.

export default (app) => {
  app.get('/status/ready', (req, res) => {
    res.status(isReady()).end();
  });
  app.head('/status/ready', (req, res) => {
    res.status(isReady()).end();
  });

  app.get('/status/live', (req, res) => {
    res.status(200).end();
  });
  app.head('/status/live', (req, res) => {
    res.status(200).end();
  });

  app.use(getCookieParserMiddleware());
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.json({ limit: '1mb' })); // if the limit is increased, the service memory limit might need adjustment
  // Add Express middleware for audit logging
  app.use('/', (req, res, next) => {
    req.loggerAudit = getAuditLogger({
      req,
      res,
    });
    next();
  });

  // Load API routes
  app.use(apiConfig.meta.prefix, getMetaRoutes());
  app.use(apiConfig.logging.prefix, getLoggingRoutes());
  app.use(apiConfig.serve.prefix, getServeRoutes());
  app.use(getInvalidRoutes());

  // Return the express app
  return app;
};
