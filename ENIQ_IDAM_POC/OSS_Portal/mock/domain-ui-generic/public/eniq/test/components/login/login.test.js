import { expect, fixture } from '@open-wc/testing';
import Login from '../../../src/components/login/login.js';

describe('Login Component Tests', () => {
  before(() => {
    Login.register();
  });

  describe('Basic component setup', () => {
    it('should render <e-login>', async () => {
      const component = await fixture(
        '<e-login></e-login>',
      );
      const headingTag = component.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your component markup goes here" was not found',
      ).to.equal('Your component markup goes here');
    });
  });
});
