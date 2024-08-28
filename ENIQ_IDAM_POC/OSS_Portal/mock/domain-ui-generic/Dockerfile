ARG BASE_OS_VERSION=5.6.0-11
ARG COMMON_BASE_OS_DOCKER_URL=armdocker.rnd.ericsson.se/proj-ldc/common_base_os_release/sles
ARG NODEJS_BUILDER_VERSION=18.12.1-1
ARG NODEJS_BUILDER_URL=armdocker.rnd.ericsson.se/proj-adp-cicd-drop/adp-nodejs-lts-builder-image

FROM $NODEJS_BUILDER_URL:$NODEJS_BUILDER_VERSION as nodejs

WORKDIR /runtime/server
COPY mock/domain-ui-generic .
RUN npm run install:all
RUN npm run build:dev

FROM $COMMON_BASE_OS_DOCKER_URL:$BASE_OS_VERSION as production
WORKDIR /runtime/server
COPY --from=nodejs /opt/nodejs/ /opt/nodejs/
COPY --from=nodejs /runtime/server /runtime/server
COPY --chown=264522:0 --from=nodejs /runtime/server/public/e-ui-app-1/build /runtime/server/public/e-ui-app-1
COPY --chown=264522:0 --from=nodejs /runtime/server/public/e-ui-app-2/build /runtime/server/public/e-ui-app-2
COPY --chown=264522:0 --from=nodejs /runtime/server/public/esm-service-1/build /runtime/server/public/esm-service-1

ENV PATH=${PATH}:/opt/nodejs/latest/bin

CMD [ "npm", "start" ]
