---
title: User Interface Static API Documentation v1.0.0-alpha
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

# User Interface Static API Documentation v1.0.0-alpha {#user-interface-static-api-documentation}

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

```
  Ericsson   |   DocNo <DOC NUMBER>   |   Rev PA1   |   Interwork Description
```
## Introduction
This document describes the User Interface identified in the ADP GUI FA.
### Terms
- **UI Interface**: static web interface serving the static assets.

Base URLs:

* [/ui/](/ui/)

# IF.GUI.SERVE.WEB {#user-interface-static-api-documentation-if-gui-serve-web}

Static web interface which serves the static assets.

## Get main html {#opIdgetMainHtml}

`GET /`

Returns the main HTML for the Single Page Application.

### Responses {#get-main-html-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The requested HTML|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The requested HTML is not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get static assets {#opIdgetAsset}

`GET /*/`

The web server returns the static assets of the Portal.

### Responses {#get-static-assets-responses}

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|the resource is found|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|the resource is not found|None|

<aside class="success">
This operation does not require authentication
</aside>

