import { expect, fixture } from '@open-wc/testing';
import LauncherPage from '../../../src/components/launcher-page/launcher-page.js';

describe('LauncherPage Component Tests', () => {
  before(() => {
    LauncherPage.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-launcher-page>', async () => {
      const component = await fixture(
        '<e-launcher-page></e-launcher-page>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
