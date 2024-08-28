---
title: User Interface Metadata API Documentation v1.3.0-alpha
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

# User Interface Metadata API Documentation v1.3.0-alpha {#user-interface-metadata-api-documentation}

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

```
  Ericsson   |   DocNo <DOC NUMBER>   |   Rev PA1   |   Interwork Description
```
## Introduction
This document describes the User Interface Metadata REST API identified in the ADP GUI FA.
### Terms
- **UI Meta Interface**: The interface providing access to static content contributed by Micro-services. All static content paths are relative to this URI.
- **Client Container**: An SPA (Single Page Application) implementing the App Shell pattern e.g. E-UI SDK Container.
- **UI App**: A full screen user interface exposed by a Microservice that can execute in the Client Container e.g. E-UI SDK App.
  - ***External UI App***: Any UIs that have a separate web page (outside the Client Container) or other alternative renderer e.g. Citrix.
- **UI Component**: A reusable, embeddable UI Web Component exposed by a Microservice e.g. E-UI SDK Shareable Components.

### API Versions
#### 1.3.0-alpha
Adding the `options` attribute to `app` and `component` entities.
#### 1.2.0-alpha
Adding the `/services` endpoint.
#### 1.1.0-alpha
Adding `module` attribute to `app` and `component` entities.
#### 1.0.0-alpha
Initial version.

Base URLs:

* [/ui-meta/v1](/ui-meta/v1)

# IF.GUI.META.REST {#user-interface-metadata-api-documentation-if-gui-meta-rest}

Provides meta information of all the accessible UI apps of the authorized user. This includes metadata of UI apps and components as well as navigation preferences.

## Update metadata for services {#opIdserviceChange}

`PUT /services/{name}`

A request indicates to GAS that UI-meta configuration is changed for a domain gui micro-service. GAS instances should re-fetch the configuration and refresh their internal state.

> Body parameter

```json
{
  "name": "eric-eea-spotfire-manager"
}
```

### Parameters {#update-metadata-for-services-parameters}

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|`name`|path|string|true|The name of service where the UI-meta configuration is changed|
|`Via`|header|string|false|GAS pod checks the Via header. If the request is not forwarded from another peer gas instance, then the receiver instance will proxy the request to the other peers.|
|`body`|body|object|true|The data of the changed service|
|`» name`|body|string|true|The name of the domain service for which the change notification is triggered|

### Responses {#update-metadata-for-services-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The notification is accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all UI apps {#opIdgetApps}

`GET /apps`

Returns list of available UI apps. The list will contains based on users access to an application and availability of an active license.

> Example responses

> OK

```json
[
  {
    "name": "adp-oam-ui-tools",
    "service": "adp-oam-ui-service",
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
    "id": "5956ab3d-2285-4cf8-82e3-38c40d902f1d",
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
    "id": "33a1f160-017e-4390-9060-255a69c78e76",
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
]
```

### Responses {#get-all-ui-apps-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Response Schema {#get-all-ui-apps-responseschema}

List of all licensed and user authorized applications.

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*`allOf`*|---|---|---|---|
|`» *anonymous*`|object|false|none|none|
|`»» id`|string|false|none|Unique identification of the UI entity.|
|*`and`*|---|---|---|---|
|`» *anonymous*`|any|false|none|none|
|*`allOf`*|---|---|---|---|
|`»» *anonymous*`|object|false|none|none|
|`»»» name`|string|true|none|Full name of an UI entity. Well-known name defined during development time.|
|`»»» displayName`|string|true|none|Display name of an UI entity.|
|`»»» descriptionShort`|string|false|none|Description of an UI entity.|
|`»»» descriptionLong`|string|false|none|Detailed description of an UI entity.|
|`»»» color`|string|false|none|Color represents the UI entity. Color should be CSS supported name or HEX value.|
|`»»» acronym`|string|false|none|Short name of an UI entity.|
|`»»» type`|string|false|none|Classification of an UI entity. Example values are euisdk, oden, external, etc.|
|`»»» priority`|integer|false|none|Display priority order.|
|`»»» tags`|[string]|false|none|Tags associated.|
|`»»» hidden`|boolean|false|none|Default is false. Set to true to hide the app form the menu.|
|*`and`*|---|---|---|---|
|`»» *anonymous*`|object|false|none|none|
|`»»» version`|string|true|none|Version of an UI application. Should be in semantic version.|
|`»»» route`|string|false|none|Relative path of an UI application. Mandatory container specific types.|
|`»»» module`|string|false|none|Module reference which implements this application.|
|`»»» url`|string|false|none|Full path of an UI application. Mandatory for external types.|
|`»»» specification`|string|false|none|Relative location of the application specification file.|
|`»»» options`|object|false|none|Extra runtime options for the application. Not parsed by GAS, passed to the REST API as it is.|
|`»»» childNames`|[string]|false|none|Children applications of an current UI application.|
|`»»» groupNames`|[string]|false|none|Groups related to the current UI application.|
|`»»» hidden`|boolean|false|none|Default is false. Set to true to hide the app form the menu.|
|`»»» service`|string|false|none|The name of the service the app is in.|

<aside class="success">
This operation does not require authentication
</aside>

## Get all UI groups {#opIdgetGroups}

`GET /groups`

Returns list of all available UI groups and related UI apps. UI apps list be included based on users access to an application and availability of an active license

> Example responses

> OK

```json
[
  {
    "id": "7382eb95-b9cf-4d62-a276-f920cf130f31",
    "version": "1.0.0",
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
    ]
  },
  {
    "id": "205e66cb-e979-4ba5-9da6-dc09f3ad5fde",
    "version": "1.0.0",
    "name": "oam",
    "displayName": "OAM",
    "descriptionShort": "Operation and Maintenance Application",
    "color": "#8B008B",
    "type": "domain",
    "priority": 20
  }
]
```

### Responses {#get-all-ui-groups-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Response Schema {#get-all-ui-groups-responseschema}

List of all groups needed by above listed applications.

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*`allOf`*|---|---|---|---|
|`» *anonymous*`|object|false|none|none|
|`»» id`|string|false|none|Unique identification of the UI entity.|
|*`and`*|---|---|---|---|
|`» *anonymous*`|object|false|none|none|
|`»» name`|string|true|none|Full name of an UI entity. Well-known name defined during development time.|
|`»» displayName`|string|true|none|Display name of an UI entity.|
|`»» descriptionShort`|string|false|none|Description of an UI entity.|
|`»» descriptionLong`|string|false|none|Detailed description of an UI entity.|
|`»» color`|string|false|none|Color represents the UI entity. Color should be CSS supported name or HEX value.|
|`»» acronym`|string|false|none|Short name of an UI entity.|
|`»» type`|string|false|none|Classification of an UI entity. Example values are euisdk, oden, external, etc.|
|`»» priority`|integer|false|none|Display priority order.|
|`»» tags`|[string]|false|none|Tags associated.|
|`»» hidden`|boolean|false|none|Default is false. Set to true to hide the app form the menu.|

<aside class="success">
This operation does not require authentication
</aside>

## Get all UI components {#opIdgetComponents}

`GET /components`

Returns list of all available shared UI components.

> Example responses

> OK

```json
[
  {
    "id": "0b1d3330-2056-40ba-a1e6-1487afa809fc",
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
```

### Responses {#get-all-ui-components-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Response Schema {#get-all-ui-components-responseschema}

List of all available shared components.

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*`allOf`*|---|---|---|---|
|`» *anonymous*`|object|false|none|none|
|`»» id`|string|false|none|Unique identification of the UI entity.|
|*`and`*|---|---|---|---|
|`» *anonymous*`|any|false|none|none|
|*`allOf`*|---|---|---|---|
|`»» *anonymous*`|object|false|none|none|
|`»»» name`|string|true|none|Full name of an UI entity. Well-known name defined during development time.|
|`»»» displayName`|string|true|none|Display name of an UI entity.|
|`»»» descriptionShort`|string|false|none|Description of an UI entity.|
|`»»» descriptionLong`|string|false|none|Detailed description of an UI entity.|
|`»»» color`|string|false|none|Color represents the UI entity. Color should be CSS supported name or HEX value.|
|`»»» acronym`|string|false|none|Short name of an UI entity.|
|`»»» type`|string|false|none|Classification of an UI entity. Example values are euisdk, oden, external, etc.|
|`»»» priority`|integer|false|none|Display priority order.|
|`»»» tags`|[string]|false|none|Tags associated.|
|`»»» hidden`|boolean|false|none|Default is false. Set to true to hide the app form the menu.|
|*`and`*|---|---|---|---|
|`»» *anonymous*`|object|false|none|none|
|`»»» version`|string|true|none|Version of an UI component. Should be in semantic version.|
|`»»» module`|string|false|none|Module reference which implements this component.|
|`»»» specification`|string|false|none|Location of the component specification file.|
|`»»» options`|object|false|none|Extra runtime options for the component. Not parsed by GAS, passed to the REST API as it is.|

<aside class="success">
This operation does not require authentication
</aside>

