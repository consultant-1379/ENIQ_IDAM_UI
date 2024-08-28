import { expect, fixture } from '@open-wc/testing';
import UmAddUser from '../../../../src/components/um-add-user/um-add-user.js';

describe('UmAddUser Component Tests', () => {
  before(() => {
    UmAddUser.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-um-add-user>', async () => {
      const component = await fixture(
        '<e-um-add-user></e-um-add-user>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
