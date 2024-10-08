/**
 * Integration tests for <e-error-app>
 */
import { expect, fixture, html } from '@open-wc/testing';
import ErrorApp from '../../../src/apps/error-app/error-app.js';
import isRendered from '../../test-utils/isRendered.js';
import defaultI18n from '../../../src/apps/error-app/locale/en-us.json';

const SESSION_EXPIRED = 'session-expired';

const cssPaths = {
  errorMessageComponent: 'e-error-message-component',
  dialog: 'eui-dialog',
};

async function renderApp(metaData) {
  const htmlTemplate = html`
    <e-error-app .metaData=${metaData}></e-error-app>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
}

describe('Error Application Tests', () => {
  before(async () => {
    ErrorApp.register();
  });

  describe('Basic application setup', () => {
    it('should create a new Error app for session expired', async () => {
      const errorApp = await renderApp({
        options: {
          error: SESSION_EXPIRED,
        },
      });
      const { shadowRoot } = errorApp;
      const errorMessageComponent = await shadowRoot.querySelector(cssPaths.errorMessageComponent);
      const dialog = await errorMessageComponent.shadowRoot.querySelector(cssPaths.dialog);

      expect(dialog.label).to.equal(defaultI18n.SESSION_EXPIRED.LABEL);
    });
  });
});
