---
title: User Interface Logging API Documentation v1.0.0-alpha
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

# User Interface Logging API Documentation v1.0.0-alpha {#user-interface-logging-api-documentation}

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

```
  Ericsson   |   DocNo <DOC NUMBER>   |   Rev PA1   |   Interwork Description
```
# Introduction
This document describes the User Interface Logging REST API.

This will enable UI applications and containers to post logs captured from the user UI session.
UI Service captures and sends the logs to centralized log transformer.

Base URLs:

* [/ui-logging/v1](/ui-logging/v1)

# IF.GUI.LOG.REST {#user-interface-logging-api-documentation-if-gui-log-rest}

## Report UI Logs 

`POST /logs`

Sends UI user session events.

> Body parameter

```json
{
  "logs": [
    {
      "timestamp": "2020-10-03T11:15:00.000+01:00",
      "severity": "error",
      "message": "Unable to load the vendor.js file.",
      "applicationName": "common-launcher"
    },
    {
      "timestamp": "2020-10-03T10:15:00.002Z",
      "severity": "info",
      "message": "User authorized successfully."
    }
  ]
}
```

### Parameters {#report-ui-logs-parameters}

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|`body`|body|[Logs](#schemalogs)|false|none|

> Example responses

> Internal Server Error

```json
{
  "status": 500,
  "code": "adp.error.internal",
  "message": "Unable to perform the operation."
}
```

### Responses {#report-ui-logs-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Logs saved successfully.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

## Log {#schemalog}

```json
{
  "timestamp": "string",
  "severity": "debug",
  "applicationName": "string",
  "message": "string",
  "category": "string",
  "uniqueLogId": "string"
}

```

Log Object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|`timestamp`|string|true|none|Log generation timestamp as per RFC 5424. YYYY-MM-DDThh:mm:ss.sss±hh:mm.|
|`severity`|string|true|none|Log severity level.|
|`applicationName`|string|false|none|Name of the UI application which produces log|
|`message`|string|true|none|Detailed log message.|
|`category`|string|false|none|An identifier of the type of message. This Shall follows GL-D1114-070-A,D.|
|`uniqueLogId`|string|false|none|Unique log identifier identifies uniquely in the service code the origin of a logged event across multiple versions of the service.|

#### Enumerated Values

|Property|Value|
|---|---|
|`severity`|debug|
|`severity`|info|
|`severity`|warning|
|`severity`|error|
|`severity`|critical|

## Logs {#schemalogs}

```json
{
  "logs": [
    {
      "timestamp": "string",
      "severity": "debug",
      "applicationName": "string",
      "message": "string",
      "category": "string",
      "uniqueLogId": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|`logs`|[[Log](#schemalog)]|false|none|[Log Object.]|

## Error {#schemaerror}

```json
{
  "status": 0,
  "code": "string",
  "message": "string",
  "details": "string"
}

```

User Interface API Error Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|`status`|integer|true|none|HTTP status code.|
|`code`|string|true|none|Application specific error code.|
|`message`|string|true|none|Short error description.|
|`details`|string|false|none|Detailed error message.|

