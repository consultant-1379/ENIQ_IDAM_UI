/**
 * Integration tests for <e-user-management>
 */
import { expect, fixture } from '@open-wc/testing';
import '../../../src/apps/user-management/user-management.js';

describe('UserManagement Application Tests', () => {
  describe('Basic application setup', () => {
    it('should create a new <e-user-management>', async () => {
      const element = await fixture('<e-user-management></e-user-management>');
      const headingTag = element.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your app markup goes here" was not found',
      ).to.equal('Your app markup goes here');
    });
  });
});
