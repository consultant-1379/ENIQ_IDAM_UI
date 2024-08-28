import { expect } from 'chai';
import LauncherPage from '../../page-objects/launcher/Launcher.page.js';
import ChartsPage from '../../page-objects/mock/Charts.page.js';
import CheckboxesPage from '../../page-objects/mock/Checkboxes.page.js';
import { openProduct, expandProductsPage } from '../../utils/utils.js';
import constants from '../../utils/constants.js';

const { MOCK_TITLE } = constants;

describe('Mock Feature', () => {
  const CHARTS_APP_INDEX = 0;
  const CHECKBOX_APP_INDEX = 1;
  const CHART_APP_URL_POSTFIX = '#charts';
  const CHART_COUNT = 3;
  const CHART_FONT = 'ericsson hilda';
  const EXPANDED_CARD_COUNT = 8;
  const CHECKBOX_COUNT = 2;

  let systembarLauncherComponent;
  let checkboxes;

  before(async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
  });

  it('can open mock charts app', async () => {
    await expandProductsPage();
    await openProduct(MOCK_TITLE);

    const EXPECTED_CARD_TITLE = MOCK_TITLE.toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    await LauncherPage.waitForAppViewLoading();
    await browser.waitUntil(
      async () => {
        const b = await LauncherPage.breadcrumb();
        const h = await b.hierarchy();
        return h.includes(EXPECTED_CARD_TITLE);
      },
      {
        timeoutMsg: 'Failed to wait for card title',
      },
    );

    const appView = await LauncherPage.appView();
    const cardContainers = await appView.cardContainers();
    const appCards = await cardContainers[0].appCards();

    await appCards[CHARTS_APP_INDEX].click();
    await ChartsPage.waitForLoading();

    const { mockServerUrl } = config;
    const actualUrl = await browser.getUrl();
    expect(actualUrl, `URL mismatch`).to.be.eq(`${mockServerUrl}/${CHART_APP_URL_POSTFIX}`);
  });

  it('can display mock charts properly', async () => {
    const titles = await ChartsPage.chartTitles();
    expect(titles, `Charts number mismatch`).to.have.lengthOf(CHART_COUNT);

    const donutChart = await ChartsPage.donutChart();
    const font = await donutChart.getCSSProperty('font-family');
    expect(font.value, `Chart style mismatch`).to.be.eq(CHART_FONT);
  });

  it(`can open flyout panel from the systembar`, async () => {
    systembarLauncherComponent = await LauncherPage.systembarLauncherComponent();
    const launcherIcon = await systembarLauncherComponent.launcherIcon();
    expect(launcherIcon, 'Launcher icon missing from systembar').not.to.be.null;

    await launcherIcon.click();
    await systembarLauncherComponent.waitForLoading();
    const flyoutPanel = await systembarLauncherComponent.flyoutPanel();
    expect(flyoutPanel, 'Flyout panel missing').not.to.be.null;
  });

  it(`can open other mock from the flyout panel`, async () => {
    const productView = await systembarLauncherComponent.productView();
    const productCardContainer = await productView.productCardContainer();
    await productCardContainer.expandProducts();
    await browser.waitUntil(
      async () => {
        const pCs = await productCardContainer.productCards();
        return pCs.length === EXPANDED_CARD_COUNT;
      },
      {
        timeoutMsg: 'Failed to wait for the expanded card count',
      },
    );
    const productCards = await productCardContainer.productCards();
    const productTitles = await Promise.all(productCards.map((card) => card.title()));
    const index = productTitles.findIndex((title) => title === MOCK_TITLE);
    await productCards[index].click();
    await systembarLauncherComponent.waitForAppView();

    const appView = await systembarLauncherComponent.appView();
    const cardContainers = await appView.cardContainers();
    const appCards = await cardContainers[0].appCards();
    const checkboxesCard = await appCards[CHECKBOX_APP_INDEX];
    await checkboxesCard.click();
    await CheckboxesPage.waitForLoading();
    checkboxes = await CheckboxesPage.checkboxes();
    expect(checkboxes.length, 'Checkbox count mismatch').to.be.eq(CHECKBOX_COUNT);
  });

  it(`can interact with mock component`, async () => {
    await checkboxes[0].click();
    const checked = await checkboxes[0].getAttribute('checked');
    expect(checked, 'Checkbox not selected').to.be.eq('true');
  });
});
