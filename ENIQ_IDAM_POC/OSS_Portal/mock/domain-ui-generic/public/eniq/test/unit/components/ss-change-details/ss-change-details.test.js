import { expect, fixture } from '@open-wc/testing';
import SsChangeDetails from '../../../../src/components/ss-change-details/ss-change-details.js';

describe('SsChangeDetails Component Tests', () => {
  before(() => {
    SsChangeDetails.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-ss-change-details>', async () => {
      const component = await fixture(
        '<e-ss-change-details></e-ss-change-details>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
