import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const externalModules = require('./config/config.package.json').modules;

const CONFIG = {
  workspaceRoot: './',
  mount: {
    './node_modules/@eui/app': {
      url: '/libs/shared/@eui/app',
      static: true,
    },
    './node_modules/@eui/base': {
      url: '/libs/shared/@eui/base',
      static: true,
    },
    './node_modules/@eui/layout': {
      url: '/libs/shared/@eui/layout',
      static: true,
    },
    './node_modules/@eui/lit-component': {
      url: '/libs/shared/@eui/lit-component',
      static: true,
    },
    './node_modules/@eui/theme': {
      url: '/libs/shared/@eui/theme',
      static: true,
    },
    './node_modules/@eds/vanilla/charts': {
      url: '/libs/shared/@eds/vanilla/charts',
      static: false,
    },
    config: '/',
    apps: '/apps',
    components: '/components',
  },
  plugins: ['@eui/import-css-plugin'],
  packageOptions: {
    external: [...externalModules.map((module) => module.name)],
  },
  devOptions: {},
  buildOptions: {
    metaUrlPath: 'libs',
  },
};

/** @type {import("snowpack").SnowpackUserConfig } */
export default CONFIG;
