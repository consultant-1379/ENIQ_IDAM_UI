import webTestRunner from '@snowpack/web-test-runner-plugin';
import { summaryReporter, defaultReporter } from '@web/test-runner';

import mockMiddleware from './test/test-utils/mockMiddleware.js';
import CONSTANT from './test/test-utils/constants.js';
import reporter from './test/test-utils/reporter.js';

process.env.NODE_ENV = 'test';

export default {
  coverage: true,
  coverageConfig: {
    exclude: ['**/libs/**', '**/node_modules/**', '**/locale/**'],
    include: ['**/src/**'],
  },
  nodeResolve: true,
  concurrentBrowsers: 1,
  browserStartTimeout: 300_000,
  // concurrency: 1,
  plugins: [webTestRunner()],
  files: 'test/**/*.test.js',
  reporters: [
    defaultReporter({ reportTestResults: false, reportTestProgress: true }),
    summaryReporter(),
    reporter(),
  ],
  testFramework: {
    config: {
      timeout: CONSTANT.ROOT_WAIT_TIMEOUT * 2,
    },
  },
  middleware: [mockMiddleware],
};
