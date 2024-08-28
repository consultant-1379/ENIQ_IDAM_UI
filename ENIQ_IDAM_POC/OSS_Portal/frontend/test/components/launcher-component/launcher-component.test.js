import { expect, fixture, html } from '@open-wc/testing';
import { LauncherComponent } from '../../../src/components/launcher-component/launcher-component.js';
import isRendered from '../../test-utils/isRendered.js';

async function renderApp(productName = null) {
  const htmlTemplate = html`
    <e-launcher-component productName=${productName}></e-launcher-component>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
}

describe('LauncherComponent Component Tests', () => {
  before(async () => {
    LauncherComponent.register();
  });

  describe('Basic component setup', () => {
    it('should create a new <e-launcher-component>', async () => {
      const launcher = await renderApp();
      const { shadowRoot } = launcher;

      expect(shadowRoot, 'Shadow root does not exist').to.exist;
      expect(launcher).to.not.null;
    });
  });

  it('should hide hidden apps', async () => {
    const launcher = await renderApp('eea');
    expect(launcher.apps.map((app) => app.name)).to.not.include('Call Browser');
    expect(launcher).to.not.null;
  });
});
