import { expect, fixture } from '@open-wc/testing';
import EniqLauncher from '../../../src/components/eniq-launcher/eniq-launcher.js';

describe('EniqLauncher Component Tests', () => {
  before(() => {
    EniqLauncher.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-eniq-launcher>', async () => {
      const component = await fixture(
        '<e-eniq-launcher></e-eniq-launcher>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
