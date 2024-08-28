import { expect, fixture, html } from '@open-wc/testing';
import { isNull } from 'lodash';
import { waitUntil } from '@open-wc/testing-helpers';
import { NavigationSystembarComponent } from '../../../src/components/navigation-systembar-component/navigation-systembar-component.js';
import eeaConfig from '../../test-utils/mockdata/ericsson.expert.analytics.config.json';
import isRendered from '../../test-utils/isRendered.js';
import CONSTANT from '../../test-utils/constants.js';

const { groups } = eeaConfig;

async function renderNavigationComponent(productName = null) {
  const htmlTemplate = html`
    <e-navigation-systembar-component
      .productName=${productName}
    ></e-navigation-systembar-component>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
}

const getCards = (cardContainer) => {
  const cards = cardContainer.shadowRoot.querySelectorAll('e-product-card');
  return Array.from(cards);
};

describe('NavigationSystembarComponent Component Tests', () => {
  let cardContainer;
  let actionBar;
  let systembarComponent;
  let launcherComponent;

  before(async () => {
    NavigationSystembarComponent.register();
  });

  describe('Basic component setup', () => {
    it('should open the product view with one product', async () => {
      systembarComponent = await renderNavigationComponent();
      launcherComponent = systembarComponent.shadowRoot.querySelector('e-launcher-component');

      await waitUntil(
        () => {
          const productView = launcherComponent.shadowRoot.querySelector('e-product-view');
          if (isNull(productView)) {
            return false;
          }
          actionBar = productView.shadowRoot.querySelector('e-action-bar');
          if (isNull(actionBar)) {
            return false;
          }
          cardContainer = productView.shadowRoot.querySelector('e-card-container');
          return !isNull(cardContainer) && getCards(cardContainer).length === 1;
        },
        'A product card should appear in time',
        { interval: 50, timeout: CONSTANT.CHILDREN_WAIT_TIMEOUT },
      );

      expect(actionBar).not.to.be.null;
      expect(getCards(cardContainer)).to.have.lengthOf(1);
    });

    it('should show the navigation controls if a product is open', async () => {
      const products = groups.filter((g) => g.type === 'product');
      const eeaProduct = products[0];
      systembarComponent = await renderNavigationComponent(eeaProduct.name);

      const backButton = systembarComponent.shadowRoot.querySelector('#back-button');
      launcherComponent = systembarComponent.shadowRoot.querySelector('e-launcher-component');
      let appView;
      await waitUntil(
        () => {
          appView = launcherComponent.shadowRoot.querySelector('e-app-view');
          return !isNull(appView);
        },
        'App card view should appear in time',
        { interval: 50, timeout: CONSTANT.CHILDREN_WAIT_TIMEOUT },
      );
      expect(backButton).to.not.be.null;
      expect(appView).to.not.be.null;
    });
  });
});
