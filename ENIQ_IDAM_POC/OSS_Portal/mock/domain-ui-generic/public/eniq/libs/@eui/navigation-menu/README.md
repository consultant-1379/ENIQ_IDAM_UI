# E-UI SDK Navigation Menu

The E-UI SDK Navigation Menu is a standalone navigation menu which is driven by data following the UI-Meta schema.  

The data object expected by the navigation menu:

| Name               | Type                | Required | Description                                               |
|--------------------|---------------------|----------|-----------------------------------------------------------|
| id | String | Yes | Id of the App |
| name | String | Yes | Full name of an UI entity. Well-known name defined during development time |
| displayName | String | Yes | Display name of an UI entity |
| descriptionShort | String | No | Description of an UI entity |
| descriptionLong | String | No | Detailed description of an UI entity. If provided, is displayed as a tooltip on the menu item |
| route | String | No | Relative path of an UI application. Mandatory container specific types |
| url | String | No | Full path of an UI application. Mandatory for external types |
| color | String | No | Color represents the UI entity. Color should be CSS supported name or HEX value |
| type | String | No | Classification of an UI entity. Example values are euisdk, oden, external, etc. |
| tags | Array | No | Tags used in search, classification etc. |
| children | Array | No | This is a group of menu item datasets |


## Installation

npm install @eui/navigation-menu;

## API

The following API is used in the navigation-menu. The E-UI SDK Container listens for this event in order to inform it of the user's intention to navigate to a new route. The E-UI SDK Container then asks the current App if it's ok to navigate. The App can respond with either true/false. If true the E-UI SDK Container navigates to the new route; if false, navigation is prevented.

| event name                | payload                | description                                                         |
|---------------------------|------------------------|---------------------------------------------------------------------|
| navigation:navigate       | { route: `<string>` }  | Listen to this event when you want to know the route to navigate to |

```javascript
// navigation menu item clicked/selected, now tell the E-UI SDK Container so it can ask the current App if it's ok to navigate...
bubble('navigation:navigate', { route: 'route-of-app' });
```

| setter          | value  | type   | description                                                         |
|-----------------|--------|--------|---------------------------------------------------------------------|
| activeMenuItem  | route  | String | call the setter on the navitaion-menu to set the active route       |

The E-UI SDK Container sets the active navigation menu item once it has navigated to the desired app/route.

```javascript
// container has navigated to app, now set the the menu...
navigationMenu.activeMenuItem = 'route-of-app';
```

# Linting

Linting is an automated checking of the source code for programmatic and stylistic errors. Linting must be performed prior to code being submitted for review.

### Linting without automatic fixes
The following commands will run the eslinting & prettier rules which have been defined for this project on all .js and .html files. It will NOT attempt to fix errors found during this process. Errors are reported to the console. All errors must be fixed before progressing.

Run eslint and prettier on all .js and .html files.

```shell
npm run lint
```
Run just eslint on all .js and .html files.

```shell
npm run lint:eslint
```
Run just prettier on all .js and .html files.

```shell
npm run lint:prettier
```

### Linting with automatic fixes
The following commands will run the eslinting & prettier rules which have been defined for this project on all .js and .html files. It will attempt to
automatically fix errors found during this process. Errors that could not be automatically fixed are reported to the console. All errors must be fixed
before progressing.

Run eslint and prettier on all .js and .html files.

```shell
npm run format
```
Run just eslint on all .js and .html files.

```shell
npm run format:eslint
```

Run just prettier on all .js and .html files.

```shell
npm run format:prettier
```

### About the rules

Eslinting rules extends from the `@open-wc/eslint-config` rules set. For more information on how open-wc handles code linting & formatting please read their [documentation](https://open-wc.org/guides/tools/linting-and-formatting/).

Additional linting rules have been added to `.eslintrc.cjs` file for more precise control over the codes linting for individual libraries. For more information on each of these rules, please read eslints [documentation](https://eslint.org/docs/rules/).

The formatting rules set by prettier follow its defaults rules with three modifications to these rules made in the `package.json` file. All prettier rules can be found [here](https://prettier.io/docs/en/options.html).

- `"singleQuote": true` - Use single quotes instead of double quotes
- `"arrowParens": "avoid"` - Excludes the need to have a parentheses around a sole arrow function parameter.
- `"trailingComma": "all"` - Appends [final commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas). Eslint rule must also match to avoid conflicts when performing full formatting.

## Testing

[`@open-wc/testing`](https://open-wc.org/docs/testing/testing-package/) is used to unit test all components. It is an opinionated package that combines and configures testing libraries to minimize the amount of ceremony required when writing tests.  

### Running tests

Run all tests against the Chrome headless browser.  

``` shell
npm run test
```

Run all tests against all headless browsers (chrome, firefox and Safari).

``` shell
npm run test:all
```

Run all tests against Firefox headless browser.

``` shell
npm run test:firefox
```

Run all tests against Safari headless browser.

``` shell
npm run test:safari
```

## Demoing

To demo the App, run the following command. A browser will open and display the demo.  

```shell
npm start
```

## Contribution

E-UI SDK is a community developed framework. We encourage developers to add functionality and help in bug fixing. Please follow the instructions in our documentation ([E-UI SDK - Contribution](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=contribution)) if you wish to contribute to your framework.
