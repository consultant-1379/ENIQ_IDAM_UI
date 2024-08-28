# E-UI SDK Container

> NOTE: this README is a placeholder for the container. This should be updated as features are added.

The `@eui/container` is used for displaying applications in a shell pattern.

## Documentation

The complete documentation for `@eui/container` can be found at [E-UI SDK - Container](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=app_container)

## Overview

Placeholder for example use case of the Container.

```html
<html>
  <head>
    <title>Application title</title>
  </head>
  <body>
    <!-- Add the container and set it's default app -->
    <eui-container default-app="app-one">
      <!-- add the Ericsson icon to the system bar -->
      <eui-v0-icon name="econ" slot="system-left"></eui-v0-icon>

      <!-- set the title to be displayed in the system bar -->
      <span slot="system-left">E-UI SDK Container - development mode</span>

      <!-- Add a navigation menu -->
      <eui-navigation-menu slot="app-navigation"></eui-navigation-menu>
    </eui-container>
  </body>
</html>
```

## Installation

`$ npm install @eui/container`

---

## App styling

Apps get automatic scrolling on the y-axis. The developer must set the CSS display rule to block in the `:host`.  

```css
:host {
  display: block;
}
```

If a developer does **not** want the entire App to scroll, but they want some internal scrolling in the App, then they will need to set the display to flex in the `:host`.

```css
:host {
  display: flex;
}

.app {
  overflow: auto;
}
```

```javascript
render() {
  return html`
  <div class="app">
    <!-- scrollable content goes here -->
  </div>`;
}
```

---

## Default App

The default app is set using the `default-app` prop on `eui-container`.

```html
  <eui-container default-app="my-default-app">
    <!-- container contents --> 
  </eui-container>
```

Setting the the default app does two things:

1. It is loaded when the Container loads for the first time, or if no app is set in the URL.
2. It makes the title and icon in the System Bar clickable. Clicking on either, navigates to the default app.  

---

## API

### Set application breadcrumb

The App Bar in the Container can display a breadcrumb. This breadcrumb can be manually created, automatically created and created using a combination of both automatic and manual.  
The app to be loaded can set it's own breadcrumb using any of the following ways. The App's breadcrumb should be set from the didConnect() callback in the App. This ensures that once the app is loaded it can set it's own breadcrumb.

Bubble one of the following events from an App.

| Event name       | Payload                        | Description                                                     |
| :----------------| :----------------------------- | :-------------------------------------------------------------- |
| app:breadcrumb   | array of crumbs                | Manually set the breadcrumb                                     |
| app:lineage      | app metaData                   | Automatically set the breadcrumb                                |
| app:lineage      | app metaData + array of crumbs | Use a combination of Automatic and Manual to set the breadcrumb |

**A Crumb**

A Breadcrumb "crumb" object has the following definition:

```javascript
{
  displayName: <String>, // title of the crumb displayed in the breadcrumb
  action: <Function>, // optional callback. 
}
```

**Manually set breadcrumb**

The code snippet is called from 'Child App' and renders the following to the App Bar:

Grandparent App > Parent App > Child App

```javascript
// called from "Child App"
this.bubble('app:breadcrumb', 
  {
    breadcrumb:
    [
      {
        displayName: 'Grandparent App',
        action: () => {// add callback here},
      },
      {
        displayName: 'Parent App',
        action: () => {// add callback here},
      },
      {
        displayName: 'Child App',
      },
    ],
  },
);
```

> "Child App" will **always** have this breadcrumb irrespective from where it's loaded or positioned in a parent/child hierarchy. This method does NOT take the `config.json` file into consideration.

**Automatically set breadcrumb**

The automatic breadcrumb works with the Micro Frontend UI-Meta data for apps. The apps are defined in the `config.json` file. Automatic breadcrumb generation is the ideal way to generate a breadcrumb for an app when you don't know where this app will be positioned in a parent/child hierarchy when pulled into a Micro Frontend Service via GAS.

The code snippet is called from 'Child App' and renders the following to the App Bar:

Grandparent App > Parent App > Child App

```javascript
// called from "Child App"
this.bubble('app:lineage', 
  {
    metaData:
    {
      name: 'child-app',
      displayName: 'Child App',
      route: 'route-to-child-app',
      childNames: [],
    },
  },
);
```

A sample `config.json` file

```json
{
  "apps": [
    {
      "name": "grandparent-app",
      "displayName": "Grandparent App",
      "route": "route-to-grandparent-app",
      "childNames": ["parent-app"]
    },
    {
      "name": "parent-app",
      "displayName": "Parent App",
      "route": "route-to-parent-app",
      "childNames": ["child-app"]
    },
    {
      "name": "child-app",
      "displayName": "Child App",
      "route": "route-to-child-app",
      "childNames": []
    }
  ]
}
```

> "Child App"'s breadcrumb will change depending on it's lineage. If "Child App" is loaded into another Micro Frontend via GAS, this breadcrumb will be influenced by the aggregated UI-Meta data.

> A navigation action is automatically generated for each app in the lineage that has a route attribute.

**Combination of Automatic and Manual breadcrumb**

The combination breadcrumb works with the Micro Frontend UI-Meta data for apps and allows for the addition of extra crumbs to be added by the developer. Like the Automatic method, the apps are defined in the `config.json` file.

The breadcrumb is constructed in the following way:

[automatic breadcrumb via UI-Meta] > [manual breadcrumb via array of crumbs] > Child App

The code snippet is called from "Child App" and renders the following to the App Bar:

Grandparent App > Parent App > Extra Crumb (actionable) > Child App

```javascript
// called from "Child App"
this.bubble('app:lineage', 
  {
    metaData:
    {
      name: 'child-app',
      displayName: 'Child App',
      route: 'route-to-child-app',
      childNames: [],
    },
    crumbs: [
      {
        displayName: 'Extra Crumb (actionable)',
        action: () => {// add callback here},
      }
    ]
  },
);
```

A sample `config.json` file

```json
{
  "apps": [
    {
      "name": "grandparent-app",
      "displayName": "Grandparent App",
      "route": "route-to-grandparent-app",
      "childNames": ["parent-app"]
    },
    {
      "name": "parent-app",
      "displayName": "Parent App",
      "route": "route-to-parent-app",
      "childNames": ["child-app"]
    },
    {
      "name": "child-app",
      "displayName": "Child App",
      "route": "route-to-child-app",
      "childNames": []
    }
  ]
}
```

> With this method the "Child App" will **always** have the crumb; "Extra Crumb (actionable)" irrespective of where it is loaded from.

---

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

Run all tests against Chrome headless browser in watch mode.

``` shell
npm run test:watch
```

## Demoing

To demo the App, run the following command. A browser will open and display the demo.  

```shell
npm start
```

## Contribution

E-UI SDK is a community developed framework. We encourage developers to add functionality and help in bug fixing. Please follow the instructions in our documentation ([E-UI SDK - Contribution](https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdk/#docs?chapter=contribution)) if you wish to contribute to your framework.
