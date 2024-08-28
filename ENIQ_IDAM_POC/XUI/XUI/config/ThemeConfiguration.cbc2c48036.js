(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/login-logo.2a5ced16cb.png";

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-horizontal.9b192e7f9c.png";

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/structure.17a1b44c02.css";

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/theme.54f03b63b5.css";

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_bootstrap_3_4_1_custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var css_bootstrap_3_4_1_custom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_bootstrap_3_4_1_custom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_login_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(622);
/* harmony import */ var images_login_logo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(images_login_logo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var images_logo_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var images_logo_horizontal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(images_logo_horizontal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var css_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(624);
/* harmony import */ var css_structure__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_structure__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var css_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(625);
/* harmony import */ var css_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(css_theme__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright 2015-2020 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  themes: {
    // There must be a theme named "default".
    "default": {
      // An ordered list of URLs to stylesheets that will be applied to every page.
      stylesheets: [css_bootstrap_3_4_1_custom__WEBPACK_IMPORTED_MODULE_0___default.a, css_structure__WEBPACK_IMPORTED_MODULE_3___default.a, css_theme__WEBPACK_IMPORTED_MODULE_4___default.a],
      // A URL to a favicon icon
      icon: "favicon.ico",
      settings: {
        // This logo is displayed on user profile pages.
        logo: {
          // The URL of the image.
          src: images_logo_horizontal__WEBPACK_IMPORTED_MODULE_2___default.a,
          // The title attribute used on <img> tags.
          title: "ForgeRock",
          // The alt attribute used on <img> tags.
          alt: "ForgeRock",
          // The width of the logo as a CSS length.
          width: "202px"
        },
        // This logo is displayed on login pages.
        loginLogo: {
          // The URL of the image.
          src: images_login_logo__WEBPACK_IMPORTED_MODULE_1___default.a,
          // The title attribute used on <img> tags.
          title: "ForgeRock",
          // The alt attribute used on <img> tags.
          alt: "ForgeRock",
          // The height of the logo as a CSS length.
          height: "104px",
          // The width of the logo as a CSS length.
          width: "210px"
        },
        // The footer is displayed on every page.
        footer: {
          // A contact email address.
          mailto: "",
          // A contact phone number. If empty, it will not be displayed.
          phone: "",
	  copyright: "Copyright &copy; 2010-2022 ForgeRock AS. All rights reserved."
        }
      }
    },
    "fr-dark-theme": {
      // An ordered list of URLs to stylesheets that will be applied to every page.
      stylesheets: ["themes/dark/css/bootstrap.min.css", css_structure__WEBPACK_IMPORTED_MODULE_3___default.a, "themes/dark/css/theme-dark.css"],
      // A path that is prepended to every relative URL when fetching resources (including images, stylesheets and
      // HTML template files). Must include a trailing forward slash.
      // path: "dark/",
      settings: {
        loginLogo: {
          src: "themes/dark/images/login-logo-white.png",
          title: "ForgeRock",
          alt: "ForgeRock",
          height: "228px",
          width: "220px"
        }
      }
    },
      //custom theme.
       "mytheme": {
      // An ordered list of URLs to stylesheets that will be applied to every page.
      stylesheets: ["themes/mytheme/css/bootstrap.min.css", 
             css_structure__WEBPACK_IMPORTED_MODULE_3___default.a, 
             "themes/mytheme/css/theme-dark.css"],
      // A path that is prepended to every relative URL when fetching resources (including images, stylesheets and
      // HTML template files). Must include a trailing forward slash.
       path: "mytheme/",
      icon: "favicon.png",
      settings: {
        loginLogo: {
          src: "themes/mytheme/images/Eniq_Logo.jpg",
          title: "ForgeRock2",
          alt: "ForgeRock2",
          height: "128px",
          width: "120px"
        },
       footer:{
 	//footer copyright
         copyright: "Copyright &copy; 2010-2022 ForgeRock AS. All rights reserved."
       }
      }
    }

  },
  // Each mapping will be tested in order. The theme from the first matching mapping will be used. If no mapping
  // matches then the theme "default" will be used.
     mappings: [ { theme: "mytheme", realms: ["/"] }
    // Use the theme with the key "my-theme" if the realm is either /my-realm or /my/sub-realm.
    //{ theme: "my-theme", realms: ["/my-realm", "/my/sub-realm"] }
    // Use the theme "my-second-theme" if the realm starts with /a. e.g. /ab or /a/c.
    //{ theme: "my-second-theme", realms: [/^\/a/] }
    // Use the theme "my-third-theme" if the realm is /a and the authentication chain is auth-chain-1.
    //{ theme: "my-third-theme", realms: ["/a"], authenticationChains: ["auth-chain-1"] }
    // Use the theme "my-fourth-theme" if the default authentication chain is in use.
    //{ theme: "my-fourth-theme", authenticationChains: [""] }
  ]
});

/***/ })

}]);
//# sourceMappingURL=ThemeConfiguration.cbc2c48036.js.map
