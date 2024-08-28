import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import fetchMock from 'fetch-mock/esm/client';
import { CustomMenuPanel } from '../../../src/panels/custom-menu-panel/custom-menu-panel.js';
import dict from '../../../src/panels/custom-menu-panel/locale/en-us.json';
import testAppConfig from '../../test-utils/mockdata/test-app.config.json';
import c from '../../../src/utils/constants.js';
import isRendered from '../../test-utils/isRendered.js';
import { stubRouter } from '../../test-utils/utils.js';

const { LAUNCHER, PRODUCT_NAME } = c;

const CONSTANTS = {
  eTree: 'eui-tree',
  eTreeItem: 'eui-tree-item',
};

const HIDDEN_PRODUCT_TITLE = 'Hidden product';

const renderMenuPanel = async () => {
  const htmlTemplate = html`
    <e-custom-menu-panel></e-custom-menu-panel>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
};

describe('CustomMenuPanel Component Tests', () => {
  before(() => {
    fetchMock.get(
      '/ui-meta/v1/groups',
      new Promise((resolve) => {
        setTimeout(() => resolve(testAppConfig.groups), 200);
      }),
      {
        'Content-type': 'application/json',
      },
    );
    fetchMock.get('http://localhost:8000/src/panels/custom-menu-panel/locale/en-us.json', dict);
    stubRouter();
  });

  after(() => {
    fetchMock.restore();
  });

  let shadowRoot;
  let menuPanel;
  const productItems = testAppConfig.groups.filter((group) => group.type === 'product');

  const getRenderedMenuItems = () =>
    Array.from(
      shadowRoot.querySelector(CONSTANTS.eTree).shadowRoot.querySelectorAll(CONSTANTS.eTreeItem),
    ).map((node) => node.itemData.label);

  before(async () => {
    CustomMenuPanel.register();
    menuPanel = await renderMenuPanel();
  });

  describe('Basic component setup', () => {
    it('should create a new <e-custom-menu-panel>', () => {
      ({ shadowRoot } = menuPanel);

      expect(menuPanel, 'menu panel component does not exist').to.exist;
      expect(shadowRoot, 'shadow root does not exist').to.exist;
    });

    it('should show all products in alphabetic order', () => {
      const rootMenuTitle = dict.MENU.LAUNCHER;
      const allAppsTitle = dict.MENU.ALL;
      const expectedMenuItems = productItems
        .filter((group) => !group.hidden)
        .map((product) => product.displayName)
        .sort((a, b) => a.localeCompare(b));
      expectedMenuItems.unshift(allAppsTitle);
      expectedMenuItems.unshift(rootMenuTitle);
      expect(getRenderedMenuItems(), 'menu items did not appear as expected').to.deep.equal(
        expectedMenuItems,
      );
    });

    it('should not show hidden groups', () => {
      const renderedMenuItems = getRenderedMenuItems();
      expect(renderedMenuItems.includes(HIDDEN_PRODUCT_TITLE)).to.be.false;
    });
  });

  describe('Test of menu-panel events', () => {
    let gotoSpy;

    before(() => {
      gotoSpy = sinon.spy(window.EUI.Router, 'goto');
    });

    afterEach(() => {
      gotoSpy.resetHistory();
    });

    after(() => {
      gotoSpy.restore();
    });

    it('clicking on a product should trigger Router to navigate to the product path of the clicked menu item', () => {
      const productItemIndex = 0;
      const expectedMenuItems = productItems.sort((a, b) => a.name.localeCompare(b.name));
      const productName = expectedMenuItems[productItemIndex].name;
      const expectedRoute = `${LAUNCHER}?${PRODUCT_NAME}=${productName}`;

      const menuItems = Array.from(
        shadowRoot.querySelector(CONSTANTS.eTree).shadowRoot.querySelectorAll(CONSTANTS.eTreeItem),
      ).slice(2); // removing root menu and "All Apps" to get only products
      menuItems[productItemIndex].itemData.active = true;
      menuItems[productItemIndex].click();

      expect(gotoSpy.called).to.be.true;
      expect(gotoSpy.calledWith(expectedRoute)).to.be.true;
    });

    it('clicking on the root menu item should trigger Router to navigate to the landing page', () => {
      const menuItems = Array.from(
        shadowRoot.querySelector(CONSTANTS.eTree).shadowRoot.querySelectorAll(CONSTANTS.eTreeItem),
      );
      menuItems[0].removeAttribute('open');
      menuItems[0].click();

      expect(gotoSpy.called).to.be.true;
      expect(gotoSpy.calledWith(LAUNCHER)).to.be.true;
    });

    it('changing to invalid url should not jump to landing page', () => {
      const newURL = 'blah';
      window.dispatchEvent(new HashChangeEvent('hashchange', { newURL }));
      expect(gotoSpy.called).to.be.false;
      expect(gotoSpy.calledWith(LAUNCHER)).to.be.false;
    });
  });
});
