import { expect, fixture } from '@open-wc/testing';
import AppLauncher from '../../../src/components/app-launcher/app-launcher.js';

describe('AppLauncher Component Tests', () => {
  before(() => {
    AppLauncher.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-app-launcher>', async () => {
      const component = await fixture(
        '<e-app-launcher></e-app-launcher>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
