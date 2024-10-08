# E-UI SDK Theme

The `@eui/theme` is used for theming in E-UI SDK. It exports eui-icon and eui-theme

The Icon class is an extension of [Template Component](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=template-component) (`@eui/component`), which means it has all the functionality of an E-UI SDK Component.  

The Theme class is an extension of Component (`@eui/component`), it does not render any markup to the DOM.

## Documentation

The complete documentation for `@eui/theme` can be found at [E-UI SDK - Theme](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=theme-component) and [E-UI SDK - Theme](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=theme_icon)

## Installation

`$ npm install @eui/theme`

## Linting

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

Run all tests against the Firefox headless browser.  

``` shell
npm run test
```

Run all tests against all headless browsers (chrome, firefox and Safari).

``` shell
npm run test:all
```

Run all tests against Chrome headless browser in watch mode.

``` shell
npm run test:watch
```

## Updating EDS icon set

In order to update the E-UI SDK icons to match the EDS icons the following steps should be followed:

Update the to the latest version of EDS in the dependencies list in `package.json`

```shell
npm i --save-dev @eds/vanilla@3.17.0
```

Update the icons set with the latest from EDS  

```shell
npm run update-icons
```

Update both the light and the dark themes with the latest base64 encoded icon set

```shell
npm run base64:icons
```

Both the `light.css` and `dark.css` are now updated with the latest icon set from EDS.

## Demoing

To demo the App, run the following command. A browser will open and display the demo.  

```shell
npm start
```

## Contribution

E-UI SDK is a community developed framework. We encourage developers to add functionality and help in bug fixing. Please follow the instructions in our documentation ([E-UI SDK - Contribution](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=contribution)) if you wish to contribute to your framework.
