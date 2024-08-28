import { createRequire } from 'module';

const require = createRequire(import.meta.url);
class ConfigUtil {
  constructor(servicesToTest) {
    this.SERVICES = servicesToTest;
    const { KUBERNETES_MASTER_NODE, SERVICE_PATH } = process.env;
    if (KUBERNETES_MASTER_NODE && SERVICE_PATH) {
      this.INGRESS_SERVICE_URL = `https://${KUBERNETES_MASTER_NODE}`;
      this.SERVICE_URL = `https://${KUBERNETES_MASTER_NODE}${SERVICE_PATH}`;
      this.DISCOVERED_INGRESS = `http://${KUBERNETES_MASTER_NODE}/domainapp-eea-${SERVICE_PATH.substring(
        1,
      )}`;
    } else {
      this.INGRESS_SERVICE_URL = 'http://localhost:3001';
      this.SERVICE_URL = 'http://localhost:3001';
      this.DISCOVERED_INGRESS = 'http://localhost/domainapp-eea-';
    }

    this.APPS_RESP = [];
    this.GROUPS_RESP = [];
    this.COMPONENTS_RESP = [];

    this.SERVICES.forEach((serviceToTest) => {
      const configJson = JSON.parse(
        // eslint-disable-next-line import/no-dynamic-require
        JSON.stringify(require(`${serviceToTest.folderPath}/config.json`)),
      );

      // needed for groupMappings integration tests, update it based on the PCR and DROP chart values
      const index = configJson.apps?.findIndex((app) => app.name === 'charts');
      if (index > -1) {
        configJson.apps[index].groupNames.push('mock-group');
      }

      const appList = (configJson.apps ?? []).map((app) => ({
        ...app,
        ...(app.url
          ? { url: app.url.startsWith('/') ? `${this.DISCOVERED_INGRESS}${app.url}` : app.url }
          : undefined),
        service: serviceToTest.deploymentName,
      }));
      this.APPS_RESP = this.APPS_RESP.concat(appList);

      const componentList = (configJson.components ?? []).map((component) => ({
        ...component,
        service: serviceToTest.deploymentName,
      }));
      this.COMPONENTS_RESP = this.COMPONENTS_RESP.concat(componentList);

      this.GROUPS_RESP = this.GROUPS_RESP.concat(...(configJson.groups ?? []));
    });
  }

  getServiceUrl() {
    return this.SERVICE_URL;
  }

  getIngressURL() {
    return this.INGRESS_SERVICE_URL;
  }

  getAppsResponse() {
    return this.APPS_RESP;
  }

  getGroupsResponse() {
    return this.GROUPS_RESP;
  }

  getComponentResponse() {
    return this.COMPONENTS_RESP;
  }
}

export default ConfigUtil;
