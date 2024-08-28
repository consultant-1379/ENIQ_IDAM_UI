import { expect, fixture } from '@open-wc/testing';
import UseraccessManagement from '../../../src/components/useraccess-management/useraccess-management.js';

describe('UseraccessManagement Component Tests', () => {
  before(() => {
    UseraccessManagement.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-useraccess-management>', async () => {
      const component = await fixture(
        '<e-useraccess-management></e-useraccess-management>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
