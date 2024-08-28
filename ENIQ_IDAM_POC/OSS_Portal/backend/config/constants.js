let configMapDir = 'config/backend-service-config';
let serviceAccountDir = '/var/run/secrets/kubernetes.io/serviceaccount';

if (process.env.NODE_ENV === 'bridge') {
  configMapDir = process.env.UI_SERVICE_CONFIG;
  serviceAccountDir = process.env.KUBERNETES_SERVICE_ACCOUNT;
}

export default {
  CONTAINER_CONFIG_NAME: 'config',
  MANUAL_SERVICE_CONFIG_NAME: 'manualServiceConfig',
  MANUAL_CONFIG_NAME: 'manualConfig',
  MANUAL_OVERRIDES: 'manualOverrides',
  CONTAINER_CONFIG_FILE: `${configMapDir}/backend-service-config.json`,
  MANUAL_SERVICE_CONFIG_FILE: `${configMapDir}/manual-service-config.json`,
  MANUAL_CONFIG_FILE: `${configMapDir}/manualconfig.json`,
  MANUAL_OVERRIDES_FILE: `${configMapDir}/manual-overrides.json`,
  CERTIFICATES_DIR: 'certificates',
  NAMESPACE_FILE: `${serviceAccountDir}/namespace`,
  TOKEN_FILE: `${serviceAccountDir}/token`,
  FRONTEND_ROUTE: '/ui',
  DEFAULT_NAMESPACE: 'default',
  INGRESS_TLS_PORT: 443,
  INGRESS_HTTP_PORT: 80,
  CONFIG_QUERY_NAME: 'service-config',
  PACKAGE_CONFIG_QUERY_NAME: 'package-config',
  CONFIG_FILE_NAME: 'config.json',
  PACKAGE_CONFIG_FILE_NAME: 'config.package.json',
  DEFAULT_PACKAGE_CONFIG: { modules: [] },
  CONFIG_FETCH_RETRY_PERIOD: 1000,
  CONFIG_FETCH_MAX_RETRY_PERIOD: 64000,
  CONFIG_FETCH_MAX_TRY: 50,
  CONFIG_PACKAGE_FETCH_TRY_LIMIT: 10,
  LOGGING_CATEGORY_DEFAULT: 'default',
  LOGGING_CATEGORY_UI: 'ui',
  CERT_WATCH_DEBOUNCE_TIME: 1000,
  METADATA_ID: 'kubernetes@170619', // unique id of the metadata structure, format follows RFC 5424
  RESOURCE_CHANGE_TYPE: {
    ADD: 'ADDED',
    DELETE: 'DELETED',
    MODIFY: 'MODIFIED',
  },
  RESOURCE_TYPE: {
    SERVICE: 'service',
    POD: 'pod',
    ENDPOINT: 'endpoint',
  },
  TLS_TYPE_INTERNAL_GUI: 'internalUi',
  TLS_TYPE_INTERNAL_REFRESH: 'httpClient',
  FAVICON_ROUTE: '/favicon.ico',
  VIA_HEADER_VALUE: '1.1 eric-adp-gui-aggregator-service',
  MAX_LOOP_ID: 1000,
};
