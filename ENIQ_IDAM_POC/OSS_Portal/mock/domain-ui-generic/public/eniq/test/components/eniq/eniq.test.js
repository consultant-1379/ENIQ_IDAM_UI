import { expect, fixture } from '@open-wc/testing';
import Eniq from '../../../src/components/eniq/eniq.js';

describe('Eniq Component Tests', () => {
  before(() => {
    Eniq.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-eniq>', async () => {
      const component = await fixture(
        '<e-eniq></e-eniq>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
