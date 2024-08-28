/**
 * Integration tests for <e-todo-app>
 */
import { expect, fixture } from '@open-wc/testing';
import '../../../src/apps/todo-app/todo-app.js';

describe('TodoApp Application Tests', () => {
  describe('Basic application setup', () => {
    it('should create a new <e-todo-app>', async () => {
      const element = await fixture('<e-todo-app></e-todo-app>');
      const headingTag = element.shadowRoot.querySelector('h1');

      expect(
        headingTag.textContent,
        '"Your app markup goes here" was not found',
      ).to.equal('Your app markup goes here');
    });
  });
});
