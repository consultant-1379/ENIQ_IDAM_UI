/**
 * Integration tests for <e-eniq-launcher-app>
 */
import { expect, fixture } from '@open-wc/testing';
import '../../../../src/apps/eniq-launcher-app/eniq-launcher-app.js';

describe('EniqLauncherApp Application Tests', () => {
  describe('Basic application setup', () => {
    it('should create a new <e-eniq-launcher-app>', async () => {
      const element = await fixture('<e-eniq-launcher-app></e-eniq-launcher-app>');
      const headingTag = element.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your app markup goes here" was not found',
      ).to.equal('Your app markup goes here');
    });
  });
});
