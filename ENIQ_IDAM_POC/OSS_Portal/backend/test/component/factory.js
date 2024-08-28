import supertest from 'supertest';
import * as td from 'testdouble';

const factory = () => {
  let app;
  let server;

  const loadServer = async (...mocks) => {
    mocks.forEach(async (mock) => {
      if (mock.isDefault) {
        await td.replaceEsm(mock.libName, null, mock.impl);
      } else {
        await td.replaceEsm(mock.libName, mock.impl);
      }
    });
    app = (await import('../../app.js')).default;
    td.reset();
    server = await app.listen();
    return supertest.agent(server);
  };
  const closeServer = async () => {
    app.close();
    await server.close();
  };

  return {
    loadServer,
    closeServer,
  };
};

export default factory;
