import { expect, fixture, html } from '@open-wc/testing';
import { LauncherSystembarComponent } from '../../../src/components/launcher-systembar-component/launcher-systembar-component.js';
import isRendered from '../../test-utils/isRendered.js';

async function renderSystembarComponent() {
  const htmlTemplate = html`
    <e-launcher-systembar-component></e-launcher-systembar-component>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
}

describe('LauncherSystembarComponent Component Tests', () => {
  before(async () => {
    LauncherSystembarComponent.register();
  });

  describe('Basic component setup', () => {
    it('should create a new <e-launcher-systembar-component>', async () => {
      const systembarComponent = await renderSystembarComponent();
      const { shadowRoot } = systembarComponent;

      expect(shadowRoot, 'Shadow root does not exist').to.exist;
      expect(systembarComponent).to.not.null;
    });
  });
});
