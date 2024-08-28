import express from 'express';
import metaRoutes from './metaRoutes.js';
import loggingRoutes from './loggingRoutes.js';
import invalidRoutes from './invalidRoutes.js';
import serveRoutes from './serveRoutes.js';

const router = express.Router();

const getMetaRoutes = () => {
  router.use(metaRoutes());
  return router;
};

const getLoggingRoutes = () => {
  router.use(loggingRoutes());
  return router;
};

const getInvalidRoutes = () => {
  router.use(invalidRoutes());
  return router;
};

const getServeRoutes = () => {
  router.use(serveRoutes());
  return router;
};

export { getMetaRoutes, getLoggingRoutes, getInvalidRoutes, getServeRoutes };
