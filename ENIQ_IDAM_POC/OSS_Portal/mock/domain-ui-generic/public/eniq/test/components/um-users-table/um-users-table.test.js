import { expect, fixture } from '@open-wc/testing';
import UmUsersTable from '../../../src/components/um-users-table/um-users-table.js';

describe('UmUsersTable Component Tests', () => {
  before(() => {
    UmUsersTable.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-um-users-table>', async () => {
      const component = await fixture(
        '<e-um-users-table></e-um-users-table>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
