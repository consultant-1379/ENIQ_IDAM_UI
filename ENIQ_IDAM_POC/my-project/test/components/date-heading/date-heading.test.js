import { expect, fixture } from '@open-wc/testing';
import DateHeading from '../../../src/components/date-heading/date-heading.js';

describe('DateHeading Component Tests', () => {
  before(() => {
    DateHeading.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-date-heading>', async () => {
      const component = await fixture(
        '<e-date-heading></e-date-heading>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
