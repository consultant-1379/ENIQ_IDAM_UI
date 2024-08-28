#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from 'http';
import https from 'https';
import app from '../app.js';
import { getLogger } from '../services/logging.js';
import configManager from '../config/configManager.js';
import certificateManager from '../services/certificateManager.js';
import fMHandler from '../services/faultHandler/fMHandler.js';

const logger = getLogger();

const useHttps = configManager.useHttps();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const portValue = parseInt(val, 10);

  if (Number.isNaN(portValue)) {
    // named pipe
    return val;
  }

  if (portValue >= 0) {
    // port number
    return portValue;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP/HTTPS server.
 */

const options = useHttps ? certificateManager.getServerHttpsOpts() : {};
const server = useHttps ? https.createServer(options, app) : http.createServer(app);

/**
 * Certificate watch
 */

certificateManager.on('server-certificates-changed', () => {
  const opts = certificateManager.getServerHttpsOpts();
  server.setSecureContext(opts);
});

/**
 * Event listener for HTTP/HTTPS server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    fMHandler.produceFaultIndication({
      fault: 'SERVER_ERROR',
      customConfig: {
        description: `eric-adp-gui-aggregator-service service internal server error: ${error}`,
      },
    });
    logger.error('Server error');
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP/HTTPS server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing server');
  server.close(() => {
    app.close();
  });
});
