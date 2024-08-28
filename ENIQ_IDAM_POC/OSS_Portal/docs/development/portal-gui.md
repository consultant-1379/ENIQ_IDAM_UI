# Common Portal (GUI)

The Portal GUI project is an EUI-SDK based SPA application. It contains an EUI-SDK client-container
and the Portal implemented as EUI-SDK application. Its main goal to provide an entry point for
the cluster and show the list of available UI applications.

## Technology

The project uses the EUI-SDK framework to implement web applications.
It uses several 3pp libraries and frameworks in the development pipeline and in implementation.

- [EUI-SDK](https://euisdk.seli.wh.rnd.internal.ericsson.com/showcase/esm-docs/#welcome)
  \- internal framework
  - [Lit-HTML](https://lit.dev/docs/) - html templating library
- [Snowpack](https://www.snowpack.dev/) - build tool for the frontend
- [Rollup](https://rollupjs.org/guide/en/) - used for the packaging of the UI
- [WebDriverIO](https://webdriver.io) - Selenium based e2e testing framework
- [Open wc Testing](https://open-wc.org/docs/testing/testing-package/) - The package used for writing
  component tests
- [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) - Test runner used for executing
  component tests
- [Mocha](https://mochajs.org) - Generic test framework for component and e2e tests
- [Chai](https://www.chaijs.com/) - Assertion library used in component and e2e tests

## Common NPM tasks

For a full list of available tasks check `frontend/package.json`.

```bash
npm install         # install npm dependencies
npm run build:dev   # build the UI with snowpack
npm run build:prod  # build the UI with snowpack and then bundle it with rollup
npm start           # start the local dev server
npm run lint        # lint the project
npm run test        # run the component tests
npm run test:*      # run test with different options
npm run e2e:local   # run e2e tests locally
npm run e2e:*       # run e2e tests with different options
```

## Development

EUI-SDK applications can be developed locally with mocked backend services, using Snowpack.

Start the development server first:

```bash
npm run start
```

By default it will open `http://localhost:8080` in a new browser tab. The development server
serves the UI assets and also provides mock endpoints which mock the GAS API and return proper
test data. Test config files are located in properly named folders
inside the `mock/charts/domain-ui-generic/public`folder.
The default mock service emulates 3 discovered services with different set of provided applications.

The development server configuration is in `snowpack.config.dev.js` at the `DEVELOPMENT` if clause.
Here new services can be added or proxy services can be configured if required. Also the
source-map settings can be changed in this file.

When the devserver runs it watches UI source files. If any of them is changed then the server
reloads the UI to see the result immediately.

## Build

The build step involves Snowpack and Rollup build steps.

Snowpack build creates the static assets and puts them into the `build` folder based on the `snowpack.config.js`.

Next if the `build:prod` command was executed, Rollup minifies and bundles the files _in place_
in the `build` folder.

With the `npm run srv` the content of the `build` folder can be served in browser.
_Note: the mock API endpoints are not mounted in the server at the moment._

## Testing

Both test level uses the Mocha framework to define test cases and organize test suites.
The functionalities provided by Mocha can be freely used to control test executions like
the `.only` or the `.skip` modifiers which can be appended to any `describe` or `it` block.

### Component tests

Component tests are implemented in the Mocha test framework. The tests are run with the Web Test Runner
framework. The WTR framework is using Playwright to fetch the necessary browsers to run the tests.
Playwright fetches the browsers and starts up test execution. Tests are run in the Chromium and Firefox
browsers in parallel.

Tests are located under a special folder called `test`.

Run tests in Headless Chromium and Firefox (with test coverage):

```bash
npm run test                # Run tests in both Chromium and Firefox
npm run test:watch          # Run tests only in Chromium and watch for changes. This is used for debugging.
npm run test:install        # Manually execute the browser fetching
```

Run `npm run test:watch` to start in normal Chromium (with test coverage). Useful to develop or debug
component tests as breakpoints can be added to the execution.
To debug in Firefox open the same url in Firefox.

#### In Docker

Run tests in docker image. Useful to reproduce issues with CI runs. To do this you need Docker and bob
configured in your [development environment](dev-env.md).

```bash
bob test-ui
```

### E2E tests

For E2E testing the WebdriverIO framework is used, which is a selenium based execution framework.
For test definition the Mocha framework used here. These tests are different from component tests
as test are run in NodeJs and they control a browser instance to perform various tasks.
Then the test can make asserts against the visible DOM.

The selenium tests are executed against a running GUI server. Locally it can be a development
server, but also it is possible to run e2e tests against real deployments.

Test files are located in the `test_js/specs` folder. To implement tests the PageObject pattern
is followed where there are predefined Objects which describes some part of the UI. These
PageObjects contain the low level logic how a given element can be found in DOM. The tests
itself only interacts with these POs, making them mostly readable even for non-developers.
PageObject are located in the `test_js/page-object` folder.

The configuration for the WebdriverIO is `test_js/config/wdio.conf.cjs`. This file parses the
CLI for arguments and can alter the actual runtime configuration based on them.

For local execution two console is required, one for the dev server and one for the test run.

```bash
npm run start       # start the development server in one console
npm run e2e:local   # execute all selenium files from the specs folder.
npm run e2e:local -- --spec <path to a spec file> # execute only the specified file
```

The runner will open a Chrome instance and starts to execute the test steps. After all spec files
are processed the browser is closed and the test execution result can be checked in the console.
For CI execution a HTML based reporter is configured for better test reports.

### Integration tests

The frontend integration tests are in the root of the git repo in the integration-tests/test/ui folder.

Integration tests of the frontend are tests ensuring the frontend integration with the backend service
e.g. all product and app cards appear on the frontend discovered by the backend.
These tests use the WebdriverIO framework like the E2E tests.

## Debug

### In browser

The quickest debugging option is to use the built in tools provided by browsers.

This works for UI development and also for developing _component_ tests. For component tests run
`npm run test:watch` and follow the test menu options. In case of E2E tests, it is suitable to check
the state of the browsers during test runs.

### From IDE

The repository contains many VSCode debug configuration to perform debug operations directly from
the opened source code. The common is that breakpoints can be added before or after the launch
where the execution stops. The preconfigured tasks contains information how to map source code
to the executed code, so if the folder structure is changed in the repository the tasks should be
checked.

#### UI

It is possible to use the VSCode Debugger for debugging the UI application. This way it is possible
to add breakpoints inside VSCode, to use the debug console and so on.
It starts a Chrome instance then the VSCode is attached to it to take over the development toolbar.
The browser can be used normally and will react to breakpoints added to the source code.
Then the debug options of the VSCode can be used to inspect the current state.

The debugger will open `localhost:8080` with the Chrome instance.
To start UI debugging do the following from the `Run and Debug` menu:

1.**Serve Frontend**:
In order to run the UI the UI files must be served so they could be opened in the browser for debugging.

2.**Launch Frontend Debugging**:
This second step opens the Chrome browser and attaches VSCode to it. After the attach the execution stops
at breakpoints added in VSCode while the browser can be interacted and refreshed as well.

#### Component tests

Run and Debug configuration is also available for Component tests. Breakpoints can be added both to
the test and the application source code.

Doing this is a two step process as well:

1.**Start Frontend Component tests**:
Running this Debug option starts up the Web Test Runner in watch mode, so the tests can be edited
in VSCode while debugging and development.

2.**Debug Current Frontend Component test**:
This step opens the selected component test in the Chrome browser. VSCode is automatically attached
to this browser and the test sources and the application code is mapped to the code inside VSCode.
Thus breakpoints can be added to the component tests and the component itself. To re-run component
tests simply refresh the browser.

#### Selenium tests

It is possible to quickly start the currently opened test file and add breakpoints to them.

- Start the server: `npm start`
- Select `WebdriverIO` debug config
- Add break points to spec or PageOBject files
- Run tests with `F5` or with the green play button to execute the currently open test file

!> There are limitations in debugging due to NodeJS and WebrdiverIO. The WebrdiverIO commands
are asynchronous methods but all of them is wrapped to be usable in synchronous fashion. Due to this
the WebdriverIO commands cannot be executed in the debug console directly. Doing so can hang up the
test execution process.
