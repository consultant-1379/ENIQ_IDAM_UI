#!/usr/bin/env node
/* eslint-disable no-await-in-loop */

/**

This script checks if the auto-discovery system found all the deployed mock services.
The microservices API is called on the given Ingress hostname and path, and compared with the
number of mock services. Checks MAX_TRIES times, and waits WAIT_INTERVAL seconds in between.

Usage:
  ./service-checker.js <Ingress_hostname> <ingress_path> <ingress_protocol> <mock-service1> <mock-service2>

*/

import fetch from 'node-fetch';

const GAS_APPS_PATH = 'ui-meta/v1/apps';
const GAS_COMPONENTS_PATH = 'ui-meta/v1/components';
const GAS_GROUPS_PATH = 'ui-meta/v1/groups';
const GAS_PACKAGES_PATH = 'ui-serve/v1/list-packages';
const MAX_TRIES = 50;
const WAIT_INTERVAL = 10;

const cliArgs = process.argv.slice(2);

const INGRESS_HOST = cliArgs[0];
const INGRESS_PATH = cliArgs[1];
const INGRESS_PROTOCOL = cliArgs[2];
const requiredServices = cliArgs.slice(3).map((serviceName) => serviceName.trim());

if (requiredServices.length === 0) {
  console.log(`Define the list of mockservices to wait for.`);
  process.exit(1);
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const wait = (s) =>
  new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });

async function fetchEndpoints() {
  const appsEndpoint = `${INGRESS_PROTOCOL}://${INGRESS_HOST}/${INGRESS_PATH}/${GAS_APPS_PATH}`;
  const componentsEndpoint = `${INGRESS_PROTOCOL}://${INGRESS_HOST}/${INGRESS_PATH}/${GAS_COMPONENTS_PATH}`;
  const groupsEndpoint = `${INGRESS_PROTOCOL}://${INGRESS_HOST}/${INGRESS_PATH}/${GAS_GROUPS_PATH}`;
  const packagesEndpoint = `${INGRESS_PROTOCOL}://${INGRESS_HOST}/${INGRESS_PATH}/${GAS_PACKAGES_PATH}`;

  const fetchAPI = async (url, defaultValue) => {
    try {
      return await fetch(url).then((r) => r.json());
    } catch (e) {
      return defaultValue;
    }
  };

  return {
    apps: await fetchAPI(appsEndpoint, []),
    components: await fetchAPI(componentsEndpoint, []),
    groups: await fetchAPI(groupsEndpoint, []),
    packages: await fetchAPI(packagesEndpoint, {}),
  };
}

let tries = 0;
let allRequiredServiceIsFound = false;

while (tries < MAX_TRIES && !allRequiredServiceIsFound) {
  console.log(`#${tries}. Fetching data from REST API...`);
  const result = await fetchEndpoints();

  const getServiceList = (resultPart) => resultPart.map((r) => r.service);

  const foundServices = [
    ...Object.keys(result.packages),
    ...getServiceList(result.apps),
    ...getServiceList(result.components),
    ...getServiceList(result.groups),
  ];

  const foundService = requiredServices.filter((service) => foundServices.includes(service));
  const notFoundService = requiredServices.filter((service) => !foundServices.includes(service));

  console.log(`Found services: ${foundService.join(',')}`);
  console.log(`Still missing services: ${notFoundService.join(',')}`);

  allRequiredServiceIsFound = notFoundService.length === 0;
  if (allRequiredServiceIsFound) {
    break;
  }

  tries += 1;
  console.log(
    `Discovery still in progress, sleeping for ${WAIT_INTERVAL} seconds. Elapsed time: ${
      tries * WAIT_INTERVAL
    }s`,
  );
  await wait(WAIT_INTERVAL);
}

if (allRequiredServiceIsFound) {
  console.log(`All services are found in time`);
  console.log(`Deployment ready, all mock services are discovered!`);
  process.exit(0);
} else {
  console.log(`Some services are not found in time`);
  console.log(`Deployment did not succeed in time!`);
  process.exit(1);
}
