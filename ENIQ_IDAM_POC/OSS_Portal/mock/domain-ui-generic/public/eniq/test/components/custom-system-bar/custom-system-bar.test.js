import { expect, fixture } from '@open-wc/testing';
import CustomSystemBar from '../../../src/components/custom-system-bar/custom-system-bar.js';

describe('CustomSystemBar Component Tests', () => {
  before(() => {
    CustomSystemBar.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-custom-system-bar>', async () => {
      const component = await fixture(
        '<e-custom-system-bar></e-custom-system-bar>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
