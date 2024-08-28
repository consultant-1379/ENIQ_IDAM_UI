import { expect, fixture } from '@open-wc/testing';
import SsChangePassword from '../../../../src/components/ss-change-password/ss-change-password.js';

describe('SsChangePassword Component Tests', () => {
  before(() => {
    SsChangePassword.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-ss-change-password>', async () => {
      const component = await fixture(
        '<e-ss-change-password></e-ss-change-password>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
