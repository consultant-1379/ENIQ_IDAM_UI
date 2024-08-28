// eslint-disable-next-line camelcase
import { AuthHandler } from '@adp/auth';
import storage from '../../../utils/storage';
import configManager from '../../../config/configManager';
import ErrorApp from '../../../apps/error-app/error-app.js';

const LAST_LOGIN_TIME_KEY = 'eric.adp.authn.lastlogintime';
const DEFAULT_USER_NAME = ' ';

const sessionExpiredEvent = 'user-session-expired';
const sessionExpiredText = 'kc-form-login';
const SESSION_EXPIRED_PAGE = 'session-expiration';

// Patch fetch for A&A
// Patch fetch to handle session expiration
export const patchFetch = () => {
  const originalFetch = window.fetch;

  // eslint-disable-next-line func-names
  window.fetch = function (url, options = {}) {
    const modifiedOptions = { ...options };
    if (modifiedOptions.credentials === 'same-origin') {
      // Needed to send cookie with CORS requests. Necessary for access token refresh.
      // Must set explicitly as es-module-shim sets 'same-origin' for module fetch requests.
      modifiedOptions.credentials = 'include';
    }

    return new Promise((resolve, reject) => {
      originalFetch(url, modifiedOptions)
        .then((response) => {
          // Login form response => session expired
          if (response.headers.get('Content-Type') === 'text/html;charset=utf-8') {
            response
              .clone()
              .text()
              .then((text) => {
                if (text.includes(sessionExpiredText)) {
                  const event = new Event(sessionExpiredEvent);
                  document.body.dispatchEvent(event);
                }
                resolve(response);
              });
          } else {
            // Non-login form response => handle response by the original caller.
            resolve(response);
          }
        })
        .catch((error) => {
          // Error response => handle error by the original caller.
          reject(error);
        });
    });
  };
};

export const patchXMLHttpRequest = () => {
  const OriginalXMLHttpRequest = window.XMLHttpRequest;
  // eslint-disable-next-line func-names
  window.XMLHttpRequest = function () {
    const request = new OriginalXMLHttpRequest();
    request.withCredentials = true;
    request.addEventListener('load', () => {
      if (request.responseText.includes(sessionExpiredText)) {
        const event = new Event(sessionExpiredEvent);
        document.body.dispatchEvent(event);
      }
    });
    return request;
  };
};

export const onBeforeContainerLoad = () => async (resolve) => {
  ErrorApp.register();

  await configManager.initConfig();

  const authHandler = new AuthHandler({
    cookies: document.cookie,
    defaultUsername: DEFAULT_USER_NAME,
    lastLoginTimeKey: LAST_LOGIN_TIME_KEY,
  });
  const username = authHandler.getUsername();
  localStorage.setItem('username', username);
  storage.init({ userName: localStorage.getItem('username') });

  document.body.dispatchEvent(new Event('set-username-finished'));

  const authTime = authHandler.getAuthTime();

  if (authTime) {
    const previousLoginTime = storage.get('lastLoginTime');
    storage.set('lastLoginTime', authTime);

    if (previousLoginTime) {
      storage.set('previousLoginTime', previousLoginTime);
    }
  }

  patchXMLHttpRequest();
  patchFetch();

  resolve();
};

export const openUserAccountEditor = () => {
  const route = configManager.getUserAccountURL();
  if (route.startsWith('#')) {
    window.EUI.Router.goto(route);
  } else {
    window.open(route, '_blank').focus();
  }
};

export const getUserAccountEditorRoute = () => configManager.getUserAccountURL();

export const clearSession = () => {
  storage.remove('username');
  window.location.href = configManager.getLogoutURL();
};

export const getLastLoginTime = () => storage.get('lastLoginTime');
export const getPreviousLoginTime = () => storage.get('previousLoginTime');

// Add event handler for session expiration event.
document.body.addEventListener(sessionExpiredEvent, () => {
  window.EUI.Router.goto(SESSION_EXPIRED_PAGE);
});
