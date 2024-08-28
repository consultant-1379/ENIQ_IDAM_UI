import { expect, fixture } from '@open-wc/testing';
import UserManagement from '../../../src/components/user-management/user-management.js';

describe('UserManagement Component Tests', () => {
  before(() => {
    UserManagement.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-user-management>', async () => {
      const component = await fixture(
        '<e-user-management></e-user-management>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
