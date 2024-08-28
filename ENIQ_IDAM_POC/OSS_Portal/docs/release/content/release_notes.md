# Release Notes

[TOC]

## Feature Videos

For the latest feature demo videos, see the
[MS Streams Channel](https://web.microsoftstream.com/group/9dffa945-3fbb-48a6-b1d6-561a33bc75dd?view=videos)
and subscribe for updates.

## GAS Light Releases and Content in JIRA

GAS Light releases and their content (Tasks, Trouble Reports, etc.) can be found
[here in JIRA](https://eteamproject.internal.ericsson.com/projects/ADPRS?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page&status=released-unreleased&contains=GAS),
including upcoming and past releases.

## 2.8.0

Migration:

Features:

Improvements:

- GAS - Security - CIS-CAT VUlnerability scanning
- GAS - Load testing pipeline is improved

Bug-fixes:

- GAS - Fixed deleted service config handling to remove from aggregated UI-Meta
- Portal - Opening integrated apps in the same tab when using the internal search
- Portal - Follow up deprecation in IAM as the logout url is changed

## 2.7.0

Migration:

Features:

- GAS - Extension of manual config with override options
- GAS - Extension of manual config with group mapping options

Improvements:

- Portal - Integrate ui-components common library
- Documentation - Update standalone dev mode documentation
- Documentation - K8s resource metric descriptions are corrected

Bug-fixes:

- GAS - Add support for ALPN in outgoing requests
- GAS - Increase reserved memory for runtime

## 2.6.0

Migration:

Features:

Improvements:

- GAS - Increase Nodejs version to 18.12.1
- GAS - No hardcoded names for neighbor services
- GAS - Upgrade, Rollback, Scale in and out tests in new CI
- GAS - Update APO2 sidecar to 1.26.0-9
- GAS - Increase http-proxy-middleware version to 3.0.0-beta
- GAS - Update Common Base OS to 5.7.0-34

Bug-fixes:

- GAS - Fix primary handling script + fossa config
- GAS - Fix publish performance report
- GAS - Fix docker image after nodejs uplift
- GAS - Fix DR-D1121-106 rule
- GAS - Fix ip checker script
- GAS - GAS crashes during service upgrade
- GAS - Increasing 3PP versions to fix vulnerabilities

## 2.5.0

Migration:

Features:

Improvements:

- GAS - Improve vulnerability handling
- GAS - Follow-up format of 3PP license handling
- GAS - Help Aggregator integration
- GAS - Increase express.js to 4.18.1

Bug-fixes:

- GAS - Helm label added for Log-transformer
- GAS - DR-D1121-061 compliance
- GAS - Characteristics and demo pipeline stabilization

## 2.4.0

Migration:

Features:

Improvements:

- GAS - Increase Nodejs version to 16.17.1

Bug-fixes:

- GAS - support added for mixed HTTP and HTTPS proxy targets
- GAS - handle long-running network errors during config fetch

## 2.3.0

Migration:

Features:

Improvements:

- GAS - Update Common Base OS to 5.3.0-4
- GAS - Update AuthProxy Oauth2 Sidecar to 1.24.0-1
- Docs - Application User Guide is updated with examples for local testing integration with GAS
- Release - Introduce Artifact Certified Archives (ACA) for Helm and docker artifacts

Bug-fixes:

## 2.2.0

Migration:

- Log output (console/syslog/both) is configured with `(global.)log.streamingMethod` from now on.
  The `configuration.logging.syslog.enabled` and `configuration.logging.stdout.enabled` properties
  are not available any more.

Features:

- Portal GUI - Wrapped integration of 3pps are supported

Improvements:

- GAS - Update Characteristic measurements to simulate Virtual Users
- GAS - Measure UI side performance characteristics
- GAS - Logging settings are changed in Helm `values.yaml`
- GAS - Update Common Base OS to 5.1.0-23
- GAS - Update AuthProxy Oauth2 Sidecar to 1.23.0-13
- GAS - Measure total request time for endpoints
- GAS - Graceful termination
- Portal GUI - Session expiration handling is improved, supporting native `XmlHTTPRequest` and `fetch`
- Docs - Application User Guide is updated with integration functionalities provided by the Portal

Bug-fixes:

- GAS - Fix random crash due to undefined log messages
- GAS - Fix username issue after logging out and logging in as a different user
- GAS - Remove discovered services with invalid `ui-meta` config
- Portal GUI - fix `ui-meta` corner case related crashes
- Portal GUI - fix UI glitch during loading
- Portal GUI - fix User Settings panel sizing issue

## 2.1.0

Migration:

Features:

- Portal GUI - Support opening an internal app as a target of the user edit button

Improvements:

- GAS - Update Common Base OS to 4.3.0-20
- GAS - Update AuthProxy Oauth2 Sidecar to 1.21.0-10
- GAS - Follow up IAM admin credential deprecation. New CR based IAM client definition is used.
- Release - Introduce GitCA

Bug-fixes:

- GAS - Fix discovered Pod number PM metric
- GAS - Fix UI package metadata naming restriction
- Portal GUI - Fix opening of internal children UI apps
- Portal GUI - Fix supporting hidden children UI apps
- Portal GUI - Allow integrated components to override `fetch` options

## 2.0.0

Migration:

- Existing `external` type UI apps can work as before. If the `type` is not properly set legacy
  UI Apps may not work as expected.

Features:

- Portal GUI - The entire UI is moved to EUISDK v2 bringing framework updates and enabling
  future development of Microfrontend modules.
- Portal GUI - Integrate with the UI-Serve API to enable dynamic frontend composition
- Portal GUI - Support dynamically integrated EUISDK UI Apps
- Portal GUI - Support dynamically shared container plugins and systembar components
- Portal GUI - Support hidden UI Apps in Launcher

Improvements:

- GAS - Increase Nodejs version to 16.16.0
- GAS - Update Common Base OS to 4.1.0-31
- GAS - Config Query logic improvements
- GAS - PM Metrics for UI-Serve endpoints
- GAS - UI Log API: end user's name is added to UI logs
- GAS - API documentation refactor, HTML output is more readable
- GAS - Demo and mock services uplifted to EUISDK v2 to showcase Portal capabilities
- Docs - Application User Guide is updated with detailed Portal integration steps
- GAS - UI-meta configuration is aligned with EUISDK v2

Bug-fixes:

## 1.6.0

Migration:

- The automatic HTTP Protocol determination strategy is removed. Discovered services must provide
  the HTTP protocol annotation, or must follow the `global.security.tls` Helm value.

Features:

Improvements:

- GAS - Technical refactor - Synchronization service moved to Nodejs Chassis Library
- GAS - Update Authentication Proxy OAuth 2 Sidecar automatically
- GAS - Proxy context for the ui-serve API is limited to the UI Context of discovered services
- GAS - The automatic HTTP Protocol determination strategy is removed. HTTP Protocol is determined by
  checking the service annotations or the `global.security.tls` helm values.
- GAS - Config fetching robustness improved by adding exponential back-off strategy
- GAS - PM Metrics of Authentication Proxy OAuth 2 Sidecar are exposed

Bug-fixes:

- GAS - Fix ICCR context root handling
- GAS - Enforce ISO Date format at the ui-logging API
- GAS - Adjust NodeJS memory settings to fit into the container's memory limit
- GAS - Fix URLs for modules at ui-serve/v1/import-map API

## 1.5.0

Migration:

Features:

Improvements:

- Portal GUI - UX - search bar gets auto-focused on page load
- Portal GUI - UX - search result appears after 1 char is typed
- GAS - Technical refactor - Introduced Kubernetes NodeJS Chassis library
- GAS - Technical refactor - Use ESM Modules in NodeJS codes
- GAS - Security - 3pp version uplifts to mitigate vulnerabilities
- GAS - Security - Enable Unicorn for UDP scanning
- GAS - Documentation - Troubleshooting guide for Application Developers
- GAS - Documentation - Detailed description and guidance added for alarms
- GAS - Update Authentication Proxy OAuth 2 Sidecar
- GAS - Added template to replace '-' in ingress path.

Bug-fixes:

- GAS - pod crashes when configuration config map is changed at runtime
- GAS - alarm indications was not sent for logging and certificate issues
- Portal GUI - App with single Category group is displayed in wrong group on All Apps page

## 1.4.0

Migration:

- Deprecation: `discoverIngress` attribute and related functionality will be removed.
- Deprecation: support for Nginx `Ingress`. The ICCR ADP Service is the supported Ingress solution
  in the CCD distributions. Note: technically `Ingress` still can be used to expose GAS endpoints,
  however GAS won't provide an out of box support for it.

Features:

- GAS - New annotation for ui content config context

Improvements:

- GAS - Introduced UI Config chassis library
- GAS - Introduced FaultHandler chassis library
- Security - Update mitigation model version
- Security - Introduce automatic Jira ticket generator workflow

Bug-fixes:

- GAS - Manual application and group config validation fix

## 1.3.0

Migration:

Features:

Improvements:

- GAS - Update Oauth2 Authentication Proxy version to 1.14.0
- GAS - Generate characteristics report

Bug-fixes:

- GAS - Add PM counters for logging and gas-internal API

## 1.2.0

Migration:

- Logging configuration is changed in Helm config: all settings are moved to `configuration.logging`
  section, including the log-transformer related ones. Configuration options are grouped by
  logging transport. For more details check the **Service User Guide**.

Features:

- GAS - Internal sync between GAS PoDs (notify other GAS PoDs about refresh events)

Improvements:

- GAS - Using NodeJS Chassis NPM libraries for logging, configuration, certificate management, performance
  measurement functionalities
- GAS - Service discovery can recover from Kubernetes API errors
- GAS - Client certificate validation for incoming requests on the REST API. Supported services:
  ICCR - Ingress, Authorization Proxy sidecar, PM Server, Domain GUI services
- GAS - logging configuration in Helm is changed - syslog configuration removed from dependencies description
- Security - Introduce Grype image scanner

Bug-fixes:

- GAS - Integrate Authentication Proxy with Logtransformer over mTLS
- Fix mTLS settings for Fault Handling if the `eric-data-message-bus-kf` dependency is renamed

## 1.1.0

Migration:

Features:

- Portal GUI - Link to User Password / Account self-management (change password)
- GAS - Introduce service refresh endpoint

Improvements:

- GAS - Make service discovery more robust
- GAS - Update Authentication Proxy Sidecar to 1.11.0
- GAS - Update Kubernetes Client library, generated from Kubernetes API 1.22
- API - API documentation is migrated from Gitlab and is now available in markdown and pdf format
- API - Update UI-meta to version 1.3

Bug-fixes:

- Release - Fix release metadata files (structured-data.json, pm-metrics.json) and store them in
  service ARM repository
- GAS - Fix Infinite log messages when Logtransformer is not deployed
- Vulnerability fixes

## 1.0.0

Migration:

Features:

Improvements:

- GAS - CI stability improvements
- Portal GUI - Selenium and integration tests use a new HTML test reporter tool.

Bug-fixes:

- GAS - make Syslog handling robust
- GAS - remove unnecessary re-fetch calls at service change
- Vulnerability fixes

## 0.8.0

Migration:

- In Helm config `manualServiceConfig.services` is renamed to `manualconfig.service`.

Features:

- Portal GUI - Display previous login time

Improvements:

- GAS - Service autodiscovery - not watching ConfigMap changes any more

Bug-fixes:

- GAS - fix FaultHandler connection with mTLS

## 0.7.3

Migration:

Features:

Improvements:

- GAS - Upgrade EUISDK to 1.7.2
- Portal GUI - various small UX improvements

Bug-fixes:

- GAS - config.package.json is optional for domain services
- GAS - Support empty or / path in default ingress config
- GAS - Fix AuthZ proxy sidecar version issue

## 0.7.2

Migration:

Features:

- GAS - Manual config for list of UI Service
- GAS - Standalone Mode to support local Micro-frontend UI development
- Portal GUI - various small UX improvements

Improvements:

- GAS - Upgrade EUISDK to 1.7.2
- GAS - Upgrade runtime environment to NodeJS 16.13.0
- GAS - Upgrade Authorization Proxy OAuth2 to version 1.8.0
- GAS - Improve PM Metrics calculation for REST endpoints
- GAS - Helm DR Fixes

Bug-fixes:

- GAS - stability improvements at Syslog handling
- GAS - stability improvements in Service Discovery

## 0.7.1

Migration:

Features:

Improvements:

- GAS - Helm DR Fixes

Bug-fixes:

- Vulnerability fixes

## 0.7.0

Migration:

Changes in values.yaml:

- Not editable properties are removed: `k8sLabelPropertyName`, `k8sExternalUrlAnnotation`,
  `configQueryProtocolAnnotation`, `configQueryPortAnnotation`. The values for these options are
  defined in API definitions, and can't be changed at deployments.
- `configuration.dependencies.logtransformer.tls.enabled` is removed, `global.security.tls` is used
  instead
- default value for `ingress.path` is changed to `/`

Features:

- Portal GUI - New design for Product card
- Portal GUI - Product and App cards and list items are transformed to html links
  to enable native browser link actions.
- Portal GUI - The Launcher is refactored and it can be opened in a flyout panel.
- GAS - Microfrontend - Add new ui-serve API with generated import-map and static asset proxy
  endpoints.
  The import-map is generated from the configs fetched from the domain services.
- GAS - Fault/Alarms handling - GAS can be configured to produce Fault indications
- GAS - Monitoring - Generate metrics which can be collected by Prometheus
- Portal GUI - Detect session expiration
- GAS - Authentication - Integration with IAM, if turned on the server endpoints require
  authentication for requests
- Portal GUI - Authentication - Show name of the logged in user and show logout button
- Portal GUI - Global Navigation panel can be opened from the system bar

Improvements:

- PRA Release - Vulnerability Analysis Report
- PRA Release - Generate PRI
- Portal GUI - Update to EUISDK 1.6.3
- GAS - Helm chart supports Kubernetes 1.22
- GAS - Upgrade runtime environment to NodeJS 16.5.0
- GAS - Support TLS connection between GAS and Ingress
- GAS - Support TLS Passthrough
- GAS - Support global.security.tls setting to turn on internal TLS on all internal channel
- Security - fix ZAP Vulnerabilities
- New Jira Project for feature and bug tracking: `ADPRS`

Bug-fixes:

- Portal GUI - Products and Apps within the same category listed alphabetically
- GAS - Logtransformer turn on/off and TLS settings are fixed

## 0.6.0

Migration:

Features:

- GAS - Add ICCR support

Improvements:

- PRA Release - Generate License Agreement Fragment document
- PRA Release - Service User Guide
- PRA Release - Test Specification
- PRA Release - 3pp License validation
- PRA Release - EVMS integration
- PRA Release - Software Vendor List
- PRA Release - Test Report
- PRA Release - Application Developers Guide
- PRA Release - Add Eridoc links for Releases in the Marketplace
- PRA Release - Automatic Version handling
- Security - Automatic CBO version update
- Security - Vulnerability Analysis pipeline
- Quality - Image Design pattern check
- DevEnv - Configuration for Bridge to Kubernetes development mode
- DevEnv - Git hook for commit message format enforcement
- DevEnv - Live debugging tutorial

Bug-fixes:

- Portal GUI - Fix product card subtitle style to match global theme
- GAS - Fix the old "internalIPFamily" template

## 0.5.0

Migration:

Features:

- GAS - Generic internal mTLS solution implemented, the syslog traffic can use TLS

Improvements:

- PRA Release - Introduce GAS to the Mimer/Munin PLMS

Bug-fixes:

- GAS: K8S container restarts on Watch tcp connection close
- GAS: Handling critical log level
- GAS: ADP helm design rule fixes of labels, affinity, toleration, role name, empty maps and env
  variables
- GAS: Replace hardcoded nodejs path to symlink in docker images

## 0.4.0

Migration:

- The discovery label and external url annotation are changed. Update them on domain UI services.
- Manual config does not require the `externalAppManualConfiguration` explicit option anymore
  in Helm, if the manual config list is populated then it is passed to GAS automatically.

Features:

- GAS - the discovery label and the external url annotation is changed for domain services
- GAS - new optional annotations to specify the port and protocol to use for fetching the
  config.json
- GAS - watch all configs changes coming from Helm
- GAS - log REST API added to collect UI logs
- Portal GUI - log module is added to send log messages to GAS log endpoint
- Portal GUI - client log level can be configured via helm

Improvements:

- Common Base OS updated to 3.20.0-25
- Switching to the ADP NodeJS Builder docker image to build images and execute CI tasks
- Sonar is added to CI checks to improve quality and security
- FOSS 3pps are regsitered, and checks are added to CI
- Integration testing framework added with integration testcases

Bug-fixes:

- GAS: GAS restarts frequently
- GAS: GAS Service failing to come up on IPv6 env
- GAS: Node Selector not implemented in GAS light service
- Portal GUI: Support special chars in app and group names

## 0.3.0

Migration:

- Supported config.json schema is updated to the latest API specification

Features:

- GAS - external url prefix annotation: a new annotation is supported on the discovered services
  to help the handling of different ingress routing deployments
- GAS - discovery of services is changed from continuous polling to an event based solution
- GAS - supports fetching config.json from both http and https
- GAS - watches static app config changes
- GAS - logging uses a different 3pp to support sending syslog messages to ADP Log Transformer
- GAS - add TLS support for the REST API
- Helm chart - support Pod Security Policy for OpenShift deployment
- Portal GUI - list layout: the applications can be shown on a new list layout
- Portal GUI - separate Zip package is created from the UI project to share Portal with other
  services
- Portal GUI - keyboard accessibility is added
- Docs - development documentation is refactored

Bug-fixes:

- Portal GUI: card layout overflow issues
- Portal GUI: remove the logout button until authentication is not fully supported

## 0.2.0

Migration:

- Service name is changed to GUI Aggregator Service
- Helm Chart name is changed to eric-adp-gui-aggregator-service
- Helm Chart apiVersion is changed from v1 to v2

Features:

- Portal GUI - filtering for favorites: on Product and Landing page the Applications
  can be filtered for the favorites ones
- Portal GUI - grouping by alphabetically: the application listing can be changed from
  domain grouping to alphabetical grouping and vice versa
- Portal GUI - search component: at the top right corner a new search component is added
- Portal GUI - design update: the UI design is updated according to the latest UX plans
- Helm chart - Add ingress configuration based on Nginx ingress-controller
- GAS Ingress path discovery - GAS can discover the Ingress configuration of the Domain Services

Improvements:

- Local mock services are refactored and using Helm
- Tilt based development environment supports any remote Kubernetes cluster
- CI Helm chart is created for complex test cases
- Upgraded to NodeJS 14

Bug-fixes:

- Portal GUI: hardcoded test username is removed

## 0.1.0

Migration:

Features:

- Auto Discovery: the server can discover Kubernetes services in the same namespace based on labels.
  The config.json files are fetched, validated and merged from those services.
- Metadata API: the server implements the Metadata API to return the discovered apps,
  components and groups
- Manual configuration: applications can be manually configured in the Helm chart.
  The manual and auto discovered service list is merged on the Metadata API.
- Portal GUI - tiles: Applications listed as tiles by Products and Domain groups.
- Portal GUI - favorites: Applications can be set as favorites
  and it is persisted in the end user's browser.
- Portal GUI - recent applications: the recently opened apps are offered in a separated
  secion on the Landing page.

Improvements:

- Configuration: server can be configured by Helm charts,
  several deployment and runtime parameter can be set.
- Logging: logging can be configured to use stdout or syslog
- Service Account: a separate service account is defined with service reading roles to support
  deployments in standard Kubernetes clusters. (ECCD)
- DevEnv - Tilt: to ease the Kubernetes based development Tilt configs are added to the repository.

Bug-fixes:

## 0.0.0

Creating development environment

- Creating Git and Gerrit repository
- CI Pipeline in Bob and Jenkins (PreCodeReview & Drop Pipeline)

Creating Project structure

- Common Portal (EUI-SDK skeleton application)
- Backend (ExpressJS skeleton application)

Deployment structure

- Package Portal + Server into one docker image
- Helm chart for deployment

Code Quality assurance introduction

- linting tools (eslint, markdownlint)
- testing frameworks (mocha, WebdriverIO)

Development Environment

- adding extensions and config for VSCode (recommended IDE)
- mock services and examples for local development
