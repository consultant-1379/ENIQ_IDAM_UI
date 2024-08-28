/**
 * Integration tests for <e-user-management-app>
 */
import { expect, fixture } from '@open-wc/testing';
import '../../../src/apps/user-management-app/user-management-app.js';

describe('UserManagementApp Application Tests', () => {
  describe('Basic application setup', () => {
    it('should create a new <e-user-management-app>', async () => {
      const element = await fixture('<e-user-management-app></e-user-management-app>');
      const headingTag = element.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your app markup goes here" was not found',
      ).to.equal('Your app markup goes here');
    });
  });
});
