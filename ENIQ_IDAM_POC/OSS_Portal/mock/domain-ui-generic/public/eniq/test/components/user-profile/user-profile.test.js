import { expect, fixture } from '@open-wc/testing';
import UserProfile from '../../../src/components/user-profile/user-profile.js';

describe('UserProfile Component Tests', () => {
  before(() => {
    UserProfile.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-user-profile>', async () => {
      const component = await fixture(
        '<e-user-profile></e-user-profile>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
