import { expect, fixture } from '@open-wc/testing';
import SsSetupPasswordless from '../../../../src/components/ss-setup-passwordless/ss-setup-passwordless.js';

describe('SsSetupPasswordless Component Tests', () => {
  before(() => {
    SsSetupPasswordless.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-ss-setup-passwordless>', async () => {
      const component = await fixture(
        '<e-ss-setup-passwordless></e-ss-setup-passwordless>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
