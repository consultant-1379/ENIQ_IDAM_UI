import { expect, fixture, html } from '@open-wc/testing';
import { ErrorMessageComponent } from '../../../src/components/error-message-component/error-message-component.js';
import isRendered from '../../test-utils/isRendered.js';

async function renderApp(label = null) {
  const htmlTemplate = html`
    <e-error-message-component label=${label}>
      <div slot="content"></div>
    </e-error-message-component>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
}

describe('ErrorMessageComponent Tests', () => {
  before(async () => {
    ErrorMessageComponent.register();
  });

  describe('Basic component setup', () => {
    it('should create a new <e-error-message-component>', async () => {
      const errorMessage = await renderApp('error label');
      const { shadowRoot } = errorMessage;

      expect(shadowRoot, 'Shadow root does not exist').to.exist;
      expect(errorMessage).to.not.null;
    });
  });
});
