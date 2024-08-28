import express from 'express';

import * as fs from 'fs';
import http from 'http';
import https from 'https';

import chokidar from 'chokidar';

const router = express.Router();

/*
 Generate cert:
 openssl genrsa -out server-key.pem 2048
 openssl req -new -key server-key.pem -out server-csr.pem
 openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem
*/
const { MOCK_ID, TLS, PUBLIC_PATH, CONTEXT_ROOT } = process.env;

let credentials = {};
let server;

if (TLS === 'true') {
  const getServerCredential = () => {
    const privateKey = fs.readFileSync('certificates/servercert/key.pem', 'utf8');
    const certificate = fs.readFileSync('certificates/servercert/cert.pem', 'utf8');
    const ca = [];
    const certAuth = fs.readFileSync('certificates/ca/ca.pem', 'utf8');
    ca.push(certAuth);
    try {
      const ingressClientCa = fs.readFileSync('certificates/ingress/ca.pem', 'utf8');
      ca.push(ingressClientCa);
    } catch (e) {
      console.log('Ingress CA is not available.');
    }
    return {
      key: privateKey,
      cert: certificate,
      ca,
      requestCert: true,
    };
  };

  credentials = getServerCredential();

  chokidar.watch('./certificates').on('all', (event, path) => {
    console.log('Certificates are changed, updating server secure context', event, path);
    server.setSecureContext(getServerCredential());
  });
}

const requestLogger = (req, res, next) => {
  const now = new Date();
  const pad = (number) => String(number).padStart(2, '0');
  const formattedDate = `${pad(now.getFullYear())}-${pad(now.getMonth() + 1)}-${now.getDate()}`;
  const formattedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const { method, url } = req;
  res.on('finish', () => {
    const duration = (new Date() - now) / 1000;
    console.log(
      `[${formattedDate} ${formattedTime}][${MOCK_ID}] ${method}:${url} Status: ${res.statusCode} Duration: ${duration}`,
    );
  });
  next();
};

const app = express();

router.use(requestLogger);

const port = 4000;

const dataHandler = (req, res) => {
  console.log(req.url);
  res.send(JSON.stringify({ data: `Some useful data from [${MOCK_ID}] Microservice.` }));
};

router.get('/data', dataHandler);

router.use('/', express.static(`./public/${PUBLIC_PATH}/`));

app.use(CONTEXT_ROOT ? `${CONTEXT_ROOT}` : '', router);

server = TLS === 'true' ? https.createServer(credentials, app) : http.createServer(app);
server.listen(port, () => {
  console.log(`Service [${MOCK_ID}] is running on port ${port} with contextroot ${CONTEXT_ROOT}`);
});
