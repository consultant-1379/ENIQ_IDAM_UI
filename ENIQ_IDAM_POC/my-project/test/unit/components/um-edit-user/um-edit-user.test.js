import { expect, fixture } from '@open-wc/testing';
import UmEditUser from '../../../../src/components/um-edit-user/um-edit-user.js';

describe('UmEditUser Component Tests', () => {
  before(() => {
    UmEditUser.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-um-edit-user>', async () => {
      const component = await fixture(
        '<e-um-edit-user></e-um-edit-user>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
