import { createRequire } from 'module';
import * as url from 'url';
import * as fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-relative-packages
import { schemaValidator } from '../../backend/utils/schemaValidator.js';
import importMap from './importMapGenerator.js';

const require = createRequire(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const ENMConfig = require('../../mock/domain-ui-generic/public/ui-generic-enm/config.json');
const EEAConfig = require('../../mock/domain-ui-generic/public/ui-generic-eea/config.json');
const ESMConfig = require('../../mock/domain-ui-generic/public/esm-service-1/config/config.json');
const EUI1Config = require('../../mock/domain-ui-generic/public/e-ui-app-1/config/config.json');
const EUI2Config = require('../../mock/domain-ui-generic/public/e-ui-app-2/config/config.json');
// const ENIQConfig = require('../../mock/domain-ui-generic/public/eniq/config/config.json');
const ENIQConfig = require('../../eniq/public/config.json');
const ECMConfig = require('../../mock/domain-ui-generic/public/ui-generic-ecm/config.json');
const ThirdPartyAppConfig = require('../../mock/domain-ui-generic/public/third-party-app/config.json');

const DummyProduct1Config = require('./config/dummy.product.1.config.json');
const DummyProduct2Config = require('./config/dummy.product.2.config.json');
const DummyProduct3Config = require('./config/dummy.product.3.config.json');
const AlarmCfgConfig = require('./config/alarm.cfg.config.json');
const BiLaunchPadConfig = require('./config/bi.launchpad.config.json');

const launcherConfig = require('../public/config.json');

const { devDependencies } = require('../package.json');
const externalModules = require('../public/config.package.json').modules;

const dummyDest = (_req, res) => {
  setTimeout(() => {
    res.statusCode = 200;
    res.end();
  });
};

const services = [
  {
    name: 'eric-network-manager',
    config: ENMConfig,
  },
  /* {
    name: 'eric-expert-analytics',
    config: EEAConfig,
  },
  {
    name: 'eric-cloud-manager',
    config: ECMConfig,
  },
  {
    name: 'hello-world-mock',
    config: ESMConfig,
  }, */
  {
    name: 'e-ui-app-1',
    config: EUI1Config,
  },
  {
    name: 'e-ui-app-2',
    config: EUI2Config,
  },
  {
    name: 'dummy-product-1',
    config: DummyProduct1Config,
  },
  {
    name: 'eniq',
    config: ENIQConfig,
  },
  {
    name: 'dummy-product-2',
    config: DummyProduct2Config,
  },
  {
    name: 'dummy-product-3',
    config: DummyProduct3Config,
  },
  {
    name: 'alarm-cfg',
    config: AlarmCfgConfig,
  },
  {
    name: 'bi-launchpad',
    config: BiLaunchPadConfig,
  },
  {
    name: 'adp-marketplace',
    config: ThirdPartyAppConfig,
  },
];

let apps = [...launcherConfig.apps];
let groups = [...launcherConfig.groups];
const components = [...launcherConfig.components];

services.forEach((service) => {
  const result = schemaValidator.validateConfig(service.config);

  if (!result.valid) {
    console.log(result.errors);
    process.exit(1);
  }

  if (service.config.apps) {
    apps = apps.concat(
      service.config.apps.map((application) => ({
        service: service.name,
        ...application,
      })),
    );
  }

  if (service.config.groups) {
    groups = groups.concat(service.config.groups);
  }
});

export default {
  routes: [
    {
      src: '/serve/.*',
      dest: (req, res) => {
        setTimeout(() => {
          // e.g. request url: /serve/e-ui-app-1/apps/checkboxes/checkboxes.js
          // file to be responded: ../../mock/domain-ui-generic/public/e-ui-app-1/build/apps/checkboxes/checkboxes.js
          const mockId = req.url.split('/')[2];
          const filePath = req.url.replace(
            `/serve/${mockId}`,
            path.join(__dirname, `../../mock/domain-ui-generic/public/${mockId}/build/`),
          );
          if (fs.existsSync(filePath)) {
            const body = fs.readFileSync(filePath);
            res.writeHead(200, {
              'Content-Type': req.url.endsWith('.css') ? 'text/css' : 'application/javascript',
            });
            res.write(body);
          } else {
            res.writeHead(404);
          }
          res.end();
        }, 200);
      },
    },
    {
      src: '/ui-meta/v1/apps',
      dest: (_req, res) => res.end(JSON.stringify(apps)),
    },
    {
      src: '/ui-meta/v1/components',
      dest: (_req, res) => {
        const filteredComponents = components.filter((comp) => !comp.name.startsWith('@eui'));
        res.end(JSON.stringify(filteredComponents));
      },
    },
    {
      src: '/ui-meta/v1/groups',
      dest: (_req, res) => res.end(JSON.stringify(groups)),
    },
    {
      src: '/ui-serve/v1/import-map',
      dest: (_req, res) => res.end(JSON.stringify(importMap)),
    },
    {
      src: '/ui-logging/v1/logs',
      dest: dummyDest,
    },
  ],
  packages: [
    ...Object.keys(devDependencies),
    ...externalModules
      .filter((module) => !module.name.startsWith('@eui'))
      .map((module) => module.name),
  ],
};
