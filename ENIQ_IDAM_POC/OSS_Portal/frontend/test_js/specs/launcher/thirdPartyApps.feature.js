import { expect } from 'chai';
import { createRequire } from 'module';
import LauncherPage from '../../page-objects/launcher/Launcher.page.js';
import WrapperAppPage from '../../page-objects/launcher/WrapperApp.page.js';
import { openProduct, expandProductsPage } from '../../utils/utils.js';
import constants from '../../utils/constants.js';

const require = createRequire(import.meta.url);

const LOCALE = require('../../../src/apps/wrapper-app/locale/en-us.json');

const { THIRD_PARTY_TITLE } = constants;

const ADP_TITLE = 'Application Development Platform';

describe('Third Party applications', () => {
  before(async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();
  });

  it('opens third party product in the wrapper app', async () => {
    await openProduct(THIRD_PARTY_TITLE);
    const appView = await LauncherPage.appView();
    const cardContainers = await appView.cardContainers();
    const appCards = await cardContainers[0].appCards();

    const appCard = appCards[0];
    const appTitle = await appCard.title();
    await appCard.click();

    await WrapperAppPage.waitForLoading();
    const breadcrumb = await WrapperAppPage.breadcrumb();
    const hierarchy = await breadcrumb.hierarchy();

    expect(hierarchy).to.deep.eq([LOCALE.LAUNCHER, THIRD_PARTY_TITLE, appTitle]);
  });

  it('loads the third party app in the iframe', async () => {
    const iframe = await WrapperAppPage.iframe();
    await iframe.switchToFrame();
    const title = await iframe.linkText();
    await browser.switchToParentFrame();
    expect(title).to.eq(ADP_TITLE);
  });
});
