/**
 * Integration tests for <e-self-service-app>
 */
import { expect, fixture } from '@open-wc/testing';
import '../../../src/apps/self-service-app/self-service-app.js';

describe('SelfServiceApp Application Tests', () => {
  describe('Basic application setup', () => {
    it('should create a new <e-self-service-app>', async () => {
      const element = await fixture('<e-self-service-app></e-self-service-app>');
      const headingTag = element.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your app markup goes here" was not found',
      ).to.equal('Your app markup goes here');
    });
  });
});
