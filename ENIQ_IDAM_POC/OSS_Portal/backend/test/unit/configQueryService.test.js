import { expect } from 'chai';
import https from 'https';
import { createRequire } from 'module';
import td from '../testdouble.js';
import nodeFetchMock from '../mocks/modules/nodeFetch.mock.js';
import PmServiceMock from '../mocks/services/pmServiceMock.js';
import CONSTANTS from '../mocks/modules/constants.js';

const require = createRequire(import.meta.url);
const appConfig = require('../mocks/configs/domain-app1.config.json');
const packageConfig = require('../mocks/configs/domain-app1.config.package.json');
const appConfigForConfigContext = require('../mocks/configs/domain-app3.config.json');
const packageConfigForConfigContext = require('../mocks/configs/domain-app3.config.package.json');
const manualConfigJson = require('../mocks/configs/manualconfig-test.config.json');
const manualConfigWithMatchingOverrides = require('../mocks/configs/manualconfig-test-with-matching-overrides.config.json');
const manualConfigWithNonMatchingOverrides = require('../mocks/configs/manualconfig-test-with-not-matching-overrides.config.json');
const expectedConfigAfterOverride = require('../mocks/configs/manualconfig-expected-config-after-override.json');
const manualConfigForUpdate = require('../mocks/configs/manualconfig-for-update-test.config.json');
const manualOverridesTestConfig = require('../mocks/configs/manualoverrides-test.config.json');

const NODE_FETCH = 'node-fetch';

const UID = 'domain-service-1-1.0.2-2';
const LOCALHOST_CONTEXT = 'http://localhost/context';
const CUSTOM_CONFIG_CONTEXT = '/configContext';
const SERVICE_URL = 'domain1:4000';

const SERVICE_WITH_BASEURL = {
  protocol: 'http',
  name: 'domain1',
  uid: UID,
  serviceurl: SERVICE_URL,
  ingressBaseurl: LOCALHOST_CONTEXT,
  uiContentConfigContext: CONSTANTS.DEFAULT_UI_CONTEXT,
};

const SERVICE_WITHOUT_PACKAGE_CONFIG = {
  protocol: 'http',
  name: 'domain101',
  uid: UID,
  serviceurl: 'domain4:4000',
  ingressBaseurl: LOCALHOST_CONTEXT,
  uiContentConfigContext: CONSTANTS.DEFAULT_UI_CONTEXT,
};

const SERVICE_WITH_CONFIG_CONTEXT_PATH = {
  protocol: 'http',
  name: 'domain1',
  uid: UID,
  serviceurl: SERVICE_URL,
  ingressBaseurl: LOCALHOST_CONTEXT,
  uiContentConfigContext: CUSTOM_CONFIG_CONTEXT,
};

const SERVICE_FOR_GROUP_OVERRIDE = {
  protocol: 'http',
  name: 'group-override',
  uid: 'group-override-1',
  serviceurl: 'group-override:4000',
  ingressBaseurl: LOCALHOST_CONTEXT,
  uiContentConfigContext: CUSTOM_CONFIG_CONTEXT,
};

const EXPECTED_APPS = [
  { ...appConfig.apps[0], service: 'domain1', url: 'http://localhost/context/domain-app-1' },
];
const EXPECTED_APPS_MISSING_CONFIG = [
  { ...appConfig.apps[0], service: 'domain101', url: 'http://localhost/context/domain-app-1' },
];
const EXPECTED_COMPONENTS = [{ ...appConfig.components[0], service: 'domain1' }];
const EXPECTED_COMPONENTS_MISSING_CONFIG = [{ ...appConfig.components[0], service: 'domain101' }];

const EXPECTED_APPS_FROM_CONTEXT = [
  {
    ...appConfigForConfigContext.apps[0],
    service: 'domain1',
    url: 'http://localhost/context/domain-app-3',
  },
];
const EXPECTED_COMPONENTS_FROM_CONTEXT = [
  { ...appConfigForConfigContext.components[0], service: 'domain1' },
];

const EXPECTED_GROUP_OVERRIDE_APP = [
  {
    displayName: 'GroupMapping mock',
    version: '0.1.0',
    route: 'http://localhost:1111/group-mapping',
    descriptionLong: 'Dummy external app for groupMapping test.',
    name: 'group-mapping-app',
    groupNames: ['group-mapping-group'],
  },
];

const EXPECTED_PACKAGES = packageConfig.modules;
const EXPECTED_PACKAGES_FROM_CONTEXT = packageConfigForConfigContext.modules;

const uiServiceCollectionMock = {
  on: () => undefined,
};

const configManagerMock = {
  on: () => undefined,
  getApps: () => [],
  getGroups: () => [],
  getManualOverrides: () => ({
    overrides: {
      apps: [],
      groups: [],
      components: [],
    },
    groupMappings: [],
  }),
  getServiceName: () => 'eric-adp-gui-aggregator-service',
  ingressPath: () => '',
};

const certificateManagerMock = {
  getTLSOptions: () => ({
    secureContext: {},
    tlsAgent: new https.Agent(),
  }),
  on: () => true,
};

describe('Unit tests for ConfigQueryService', () => {
  describe('Basic tests', () => {
    let configQueryService;
    const mockModules = async () => {
      await td.replaceEsm('node-fetch', null, nodeFetchMock);
      await td.replaceEsm('../../config/constants.js', null, CONSTANTS);
      await td.replaceEsm('../../services/uiServiceCollection.js', null, uiServiceCollectionMock);
      await td.replaceEsm('../../config/configManager.js', null, configManagerMock);
      await td.replaceEsm('../../services/certificateManager.js', null, certificateManagerMock);
      await td.replaceEsm('../../services/pmService.js', null, PmServiceMock);

      configQueryService = (await import('../../services/configQueryService.js')).default;
      td.reset();
    };

    // eslint-disable-next-line func-names
    beforeEach(async () => {
      await mockModules();
    });

    afterEach(() => {
      td.reset();
    });

    it('will get proper apps, components, groups and packages from annotated context root', async () => {
      await configQueryService.serviceHandler(SERVICE_WITH_CONFIG_CONTEXT_PATH);
      expect(configQueryService.getApps()).to.deep.eq(EXPECTED_APPS_FROM_CONTEXT);
      expect(configQueryService.getComponents()).to.deep.eq(EXPECTED_COMPONENTS_FROM_CONTEXT);
      expect(configQueryService.getGroups()).to.deep.eq(appConfigForConfigContext.groups);

      const packageMap = configQueryService.getPackages();
      expect(packageMap[SERVICE_WITH_CONFIG_CONTEXT_PATH.name].meta.modules).to.deep.eq(
        EXPECTED_PACKAGES_FROM_CONTEXT,
      );
    });

    it('will get proper apps, components, groups and packages after service was updated', async () => {
      await configQueryService.serviceHandler(SERVICE_WITH_BASEURL);
      expect(configQueryService.getApps()).to.deep.eq(EXPECTED_APPS);
      expect(configQueryService.getComponents()).to.deep.eq(EXPECTED_COMPONENTS);
      expect(configQueryService.getGroups()).to.deep.eq(appConfig.groups);

      const packageMap = configQueryService.getPackages();
      expect(packageMap[SERVICE_WITH_BASEURL.name].meta.modules).to.deep.eq(EXPECTED_PACKAGES);
    });

    it('will get proper apps, components, groups and packages from a service with missing package config', async () => {
      await configQueryService.serviceHandler(SERVICE_WITHOUT_PACKAGE_CONFIG);
      expect(configQueryService.getApps()).to.deep.eq(EXPECTED_APPS_MISSING_CONFIG);
      expect(configQueryService.getComponents()).to.deep.eq(EXPECTED_COMPONENTS_MISSING_CONFIG);
      expect(configQueryService.getGroups()).to.deep.eq(appConfig.groups);

      const packageMap = configQueryService.getPackages();
      expect(packageMap[SERVICE_WITHOUT_PACKAGE_CONFIG.name].meta.modules).to.be.empty;
    });

    it('can remove apps, components, groups and packages from configQueryService when a service was deleted', async () => {
      await configQueryService.serviceHandler(SERVICE_WITHOUT_PACKAGE_CONFIG);
      expect(configQueryService.getApps()).to.deep.eq(EXPECTED_APPS_MISSING_CONFIG);

      configQueryService.deleteService(SERVICE_WITHOUT_PACKAGE_CONFIG);
      expect(configQueryService.getApps()).to.have.lengthOf(0);
      expect(configQueryService.getComponents()).to.have.lengthOf(0);
      expect(configQueryService.getGroups()).to.have.lengthOf(0);
      expect(Object.keys(configQueryService.getPackages())).to.have.lengthOf(0);
    });

    describe('Manual config', () => {
      afterEach(() => {
        td.reset();
      });
      const mockManualConfig = async (config, service = SERVICE_WITH_BASEURL) => {
        const getApps = td.replace(configManagerMock, 'getApps');
        const getGroups = td.replace(configManagerMock, 'getGroups');
        const getManualOverrides = td.replace(configManagerMock, 'getManualOverrides');
        td.when(getApps(), { ignoreExtraArgs: true }).thenReturn(config.apps);
        td.when(getGroups(), { ignoreExtraArgs: true }).thenReturn(config.groups);
        td.when(getManualOverrides(), { ignoreExtraArgs: true }).thenReturn({
          overrides: config.overrides,
          groupMappings: config.groupMappings,
        });
        await td.replaceEsm(NODE_FETCH, null, nodeFetchMock);
        await configQueryService.serviceHandler(service, true);
        td.reset();
      };

      it('can start discovery with manual config and no overrides', async () => {
        await mockManualConfig(manualConfigJson);
        expect(configQueryService.getApps()).to.deep.eq([
          ...manualConfigJson.apps,
          ...EXPECTED_APPS,
        ]);
        expect(configQueryService.getGroups()).to.deep.eq([
          ...manualConfigJson.groups,
          ...appConfig.groups,
        ]);
      });

      it('can handle manual config with matching overrides', async () => {
        await mockManualConfig(manualConfigWithMatchingOverrides);
        expect(configQueryService.getApps()).to.deep.eq([
          ...expectedConfigAfterOverride.apps,
          ...EXPECTED_APPS,
        ]);
        expect(configQueryService.getGroups()).to.deep.eq([
          ...expectedConfigAfterOverride.groups,
          ...appConfig.groups,
        ]);
        expect(configQueryService.getComponents()).to.deep.eq([
          ...expectedConfigAfterOverride.components,
        ]);
      });

      it('can handle manual config with matching and non-matching overrides', async () => {
        await mockManualConfig(manualConfigWithNonMatchingOverrides);
        expect(configQueryService.getApps()).to.deep.eq([
          ...expectedConfigAfterOverride.apps,
          ...EXPECTED_APPS,
        ]);
        expect(configQueryService.getGroups()).to.deep.eq([
          ...expectedConfigAfterOverride.groups,
          ...appConfig.groups,
        ]);
        expect(configQueryService.getComponents()).to.deep.eq([
          ...expectedConfigAfterOverride.components,
        ]);
      });

      it('can update with manual config during discovery', async () => {
        await mockManualConfig(manualConfigForUpdate);
        expect(configQueryService.getApps()).to.deep.eq(EXPECTED_APPS);
        expect(configQueryService.getGroups()).to.deep.eq(appConfig.groups);
      });

      it('can add group to app with groupMapping', async () => {
        await mockManualConfig(manualOverridesTestConfig, SERVICE_FOR_GROUP_OVERRIDE);
        expect(configQueryService.getApps()).to.deep.eq(EXPECTED_GROUP_OVERRIDE_APP);
      });
    });
  });
});
