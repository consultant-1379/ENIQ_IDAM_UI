---
title: Graphical User Interface Domain Web Config File Descriptor v1.1.0-alpha
language_tabs:
  - javascript: JavaScript
language_clients:
  - javascript: ""
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

# Graphical User Interface Domain Web Config File Descriptor v1.1.0-alpha {#graphical-user-interface-domain-web-config-file-descriptor}

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

```
  Ericsson   |   DocNo <DOC NUMBER>   |   Rev PA1   |   Interwork Description
```
## Introduction
This document describes the GUI User Interface Domain Web config file descriptor identified in the ADP GUI FA.
### Terms
- **Client Container**: An SPA (Single Page Application) implementing the App Shell pattern e.g. E-UI SDK Container.
- **UI App**: A full screen user interface exposed by a Microservice that can execute in the Client Container e.g. E-UI SDK App.
  - ***External UI App***: Any UIs that have a separate web page (outside the Client Container) or other alternative renderer e.g. Citrix.
- **UI Component**: A reusable, embeddable UI Web Component exposed by a Microservice e.g. E-UI SDK Shareable Components.
- **GUI Domain Web Interface**: The interface provided by micro front-ends to access UI apps and components.

Base URLs:

* [/](/)

# GUI.DOMAIN.WEB {#graphical-user-interface-domain-web-config-file-descriptor-gui-domain-web}

## config.json 

`GET /config.json`

File descriptor for UI micro front-ends.
This file includes meta information of all apps, shared components and groups supported by UI micro front-ends.

This file should be named as _config.json_ and be accessible from the service root context path.

> Body parameter

```json
{
  "version": "1.1.0",
  "apps": [
    {
      "name": "adp-oam-ui-tools",
      "displayName": "Configuration Tools",
      "descriptionLong": "ADP.OAM.UI.TOOLS.DESC.LONG",
      "descriptionShort": "ADP.OAM.UI.TOOLS.DESC.SHORT",
      "module": "@adp-oam/ui-tools",
      "color": "blue",
      "acronym": "AUT",
      "version": "0.1.0",
      "type": "euisdk",
      "route": "oam-tools",
      "priority": 1,
      "childNames": [
        "adp-oam-ui-tools-scheduler"
      ],
      "groupNames": [
        "adp-tools"
      ],
      "tags": [
        "tools"
      ],
      "specification": "./adp-oam-ui-tools/app.config.json"
    },
    {
      "name": "adp-oam-ui-tools-scheduler",
      "displayName": "Scheduler",
      "descriptionLong": "ADP.OAM.UI.TOOLS.SCH.DESC.LONG",
      "descriptionShort": "ADP.OAM.UI.TOOLS.SCH.DESC.SHORT",
      "module": "@adp-oam/ui-tools-scheduler",
      "color": "#D2691E",
      "acronym": "SCH",
      "version": "0.1.0",
      "type": "euisdk",
      "route": "oam-tools/scheduler",
      "priority": 1,
      "groupNames": [
        "adp-tools",
        "oam"
      ],
      "tags": [
        "tools"
      ],
      "specification": "./adp-oam-ui-tools-scheduler/app.config.json"
    },
    {
      "name": "adp-market-place",
      "displayName": "ADP Market Place",
      "module": "@adp/marketplace",
      "color": "#008B8B",
      "acronym": "AMP",
      "version": "1.0.0",
      "type": "external",
      "url": "https://adp.ericsson.se/marketplace",
      "priority": 10,
      "groupNames": [
        "adp-tools"
      ],
      "tags": [
        "adp",
        "marketplace"
      ]
    }
  ],
  "groups": [
    {
      "name": "adp-tools",
      "displayName": "Tools",
      "descriptionLong": "Tools Application",
      "descriptionShort": "Utlity applications helps to perform common activities.",
      "color": "green",
      "acronym": "TL",
      "type": "domain",
      "priority": 10,
      "tags": [
        "tools"
      ],
      "version": "1.0.0"
    },
    {
      "name": "oam",
      "displayName": "OAM",
      "descriptionShort": "Operation and Maintenance Application",
      "color": "#8B008B",
      "type": "domain",
      "priority": 20,
      "version": "1.0.0"
    }
  ],
  "components": [
    {
      "name": "adp-latest-entities",
      "version": "0.1.0",
      "displayName": "Latest Entities",
      "descriptionLong": "Overview of all the entities created during last 2 weeks.",
      "module": "@adp/latest-entities",
      "type": "oden",
      "priority": 10,
      "specification": "./config/component.config.json"
    }
  ]
}
```

### Parameters {#config.json-parameters}

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|`body`|body|object|false|none|
|`» version`|body|string|false|Schema version of the config.json.|
|`» apps`|body|[allOf]|false|List of applications available as part of the service.|
|`»» *anonymous*`|body|any|false|none|
|`»»» *anonymous*`|body|object|false|none|
|`»»»» name`|body|string|true|Full name of an UI entity. Well-known name defined during development time.|
|`»»»» displayName`|body|string|true|Display name of an UI entity.|
|`»»»» descriptionShort`|body|string|false|Description of an UI entity.|
|`»»»» descriptionLong`|body|string|false|Detailed description of an UI entity.|
|`»»»» color`|body|string|false|Color represents the UI entity. Color should be CSS supported name or HEX value.|
|`»»»» acronym`|body|string|false|Short name of an UI entity.|
|`»»»» type`|body|string|false|Classification of an UI entity. Example values are euisdk, oden, external, etc.|
|`»»»» priority`|body|integer|false|Display priority order.|
|`»»»» tags`|body|[string]|false|Tags associated.|
|`»»»» hidden`|body|boolean|false|Default is false. Set to true to hide the app form the menu.|
|`»»» *anonymous*`|body|object|false|none|
|`»»»» version`|body|string|true|Version of an UI application. Should be in semantic version.|
|`»»»» route`|body|string|false|Relative path of an UI application. Mandatory container specific types.|
|`»»»» module`|body|string|false|Module reference which implements this application.|
|`»»»» url`|body|string|false|Full path of an UI application. Mandatory for external types.|
|`»»»» specification`|body|string|false|Relative location of the application specification file.|
|`»»»» options`|body|object|false|Extra runtime options for the application. Not parsed by GAS, passed to the REST API as it is.|
|`»»»» childNames`|body|[string]|false|Children applications of an current UI application.|
|`»»»» groupNames`|body|[string]|false|Groups related to the current UI application.|
|`»»»» hidden`|body|boolean|false|Default is false. Set to true to hide the app form the menu.|
|`»»»» service`|body|string|false|The name of the service the app is in.|
|`»» *anonymous*`|body|object|false|none|
|`»»» properties`|body|[object]|false|List of associated properties.|
|`»»»» name`|body|string|true|Name of the property.|
|`»»»» value`|body|string|true|Value of the property.|
|`» groups`|body|[object]|false|List of groups available as part of the service.|
|`»» name`|body|string|true|Full name of an UI entity. Well-known name defined during development time.|
|`»» displayName`|body|string|true|Display name of an UI entity.|
|`»» descriptionShort`|body|string|false|Description of an UI entity.|
|`»» descriptionLong`|body|string|false|Detailed description of an UI entity.|
|`»» color`|body|string|false|Color represents the UI entity. Color should be CSS supported name or HEX value.|
|`»» acronym`|body|string|false|Short name of an UI entity.|
|`»» type`|body|string|false|Classification of an UI entity. Example values are euisdk, oden, external, etc.|
|`»» priority`|body|integer|false|Display priority order.|
|`»» tags`|body|[string]|false|Tags associated.|
|`»» hidden`|body|boolean|false|Default is false. Set to true to hide the app form the menu.|
|`» components`|body|[allOf]|false|List of components available as part of the service.|
|`»» *anonymous*`|body|object|false|none|
|`»»» name`|body|string|true|Full name of an UI entity. Well-known name defined during development time.|
|`»»» displayName`|body|string|true|Display name of an UI entity.|
|`»»» descriptionShort`|body|string|false|Description of an UI entity.|
|`»»» descriptionLong`|body|string|false|Detailed description of an UI entity.|
|`»»» color`|body|string|false|Color represents the UI entity. Color should be CSS supported name or HEX value.|
|`»»» acronym`|body|string|false|Short name of an UI entity.|
|`»»» type`|body|string|false|Classification of an UI entity. Example values are euisdk, oden, external, etc.|
|`»»» priority`|body|integer|false|Display priority order.|
|`»»» tags`|body|[string]|false|Tags associated.|
|`»»» hidden`|body|boolean|false|Default is false. Set to true to hide the app form the menu.|
|`»» *anonymous*`|body|object|false|none|
|`»»» version`|body|string|true|Version of an UI component. Should be in semantic version.|
|`»»» module`|body|string|false|Module reference which implements this component.|
|`»»» specification`|body|string|false|Location of the component specification file.|
|`»»» options`|body|object|false|Extra runtime options for the component. Not parsed by GAS, passed to the REST API as it is.|

### Responses {#config.json-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

