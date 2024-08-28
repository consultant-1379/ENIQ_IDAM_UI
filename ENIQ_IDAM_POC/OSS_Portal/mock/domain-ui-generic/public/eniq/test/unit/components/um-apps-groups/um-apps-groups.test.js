import { expect, fixture } from '@open-wc/testing';
import UmAppsGroups from '../../../../src/components/um-apps-groups/um-apps-groups.js';

describe('UmAppsGroups Component Tests', () => {
  before(() => {
    UmAppsGroups.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-um-apps-groups>', async () => {
      const component = await fixture(
        '<e-um-apps-groups></e-um-apps-groups>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
