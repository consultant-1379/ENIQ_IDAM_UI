import { expect, fixture } from '@open-wc/testing';
import UmUserdetailsEdit from '../../../../src/components/um-userdetails-edit/um-userdetails-edit.js';

describe('UmUserdetailsEdit Component Tests', () => {
  before(() => {
    UmUserdetailsEdit.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-um-userdetails-edit>', async () => {
      const component = await fixture(
        '<e-um-userdetails-edit></e-um-userdetails-edit>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
