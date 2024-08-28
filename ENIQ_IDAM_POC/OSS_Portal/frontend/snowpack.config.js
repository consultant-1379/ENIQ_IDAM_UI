import { createRequire } from 'module';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const require = createRequire(import.meta.url);

const { devDependencies } = require('./package.json');
const externalModules = require('./public/config.package.json').modules;

const { NODE_ENV } = process.env;
const TEST = 'test';

const CONFIG = {
  workspaceRoot: '/',
  mount: {
    public: '/',
    src: '/src',
    './node_modules/@eui/theme/dist/fonts': {
      url: '/assets/fonts',
      resolve: false,
      static: true,
    },
    './node_modules/@eui/theme': {
      url: '/libs/shared/@eui/theme',
      static: true,
    },
    './node_modules/@eui/container': {
      url: '/libs/shared/@eui/container',
      static: true,
    },
    './node_modules/@eui/app': {
      url: '/libs/shared/@eui/app',
      static: true,
    },
    './node_modules/@eui/lit-component': {
      url: '/libs/shared/@eui/lit-component',
      static: true,
    },
    './node_modules/@eui/component': {
      url: '/libs/shared/@eui/component',
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
    './node_modules/@adp/ui-components': {
      url: '/libs/shared/@adp/ui-components',
      static: true,
    },
  },
  plugins: ['@eui/import-css-plugin'],
  packageOptions: {
    polyfillNode: true,
    rollup: {
      plugins: [nodeResolve()],
    },
    external: [...Object.keys(devDependencies), ...externalModules.map((module) => module.name)],
    knownEntrypoints: ['@open-wc/testing-helpers'],
  },
  devOptions: {},
  buildOptions: {
    metaUrlPath: 'libs',
  },
};

if (NODE_ENV === TEST) {
  CONFIG.packageOptions.external = [...Object.keys(devDependencies)];
}

/** @type {import("snowpack").SnowpackUserConfig } */
export default CONFIG;
