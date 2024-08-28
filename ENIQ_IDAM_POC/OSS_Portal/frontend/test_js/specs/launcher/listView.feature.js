import chai, { expect } from 'chai';
import { createRequire } from 'module';
import LauncherPage from '../../page-objects/launcher/Launcher.page.js';
import { openProduct, expandProductsPage } from '../../utils/utils.js';
import constants from '../../utils/constants.js';

const require = createRequire(import.meta.url);
const eeaAppConfigs = require('../../../../mock/domain-ui-generic/public/ui-generic-eea/config.json');
chai.use(require('chai-sorted'));

const dictionary = {
  CATEGORIES: 'Categories',
  ALPHABETICAL: 'A-Z',
  TILES: 'Tiles',
  LIST: 'List',
  FAVORITES: 'Favorites',
};

const { EEA_TITLE, ECM_TITLE } = constants;

describe('List View', () => {
  before(async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();
    await openProduct(EEA_TITLE);
    await LauncherPage.waitForAppViewLoading();
  });

  it('should show the same number of apps and groups when changing the view type to List view', async () => {
    const appView = await LauncherPage.appView();
    const option = dictionary.LIST;
    const cardContainers = await appView.cardContainers();
    const numberOfCardGroups = cardContainers.length;
    const appArray = await Promise.all(cardContainers.map((group) => group.appCards()));
    const numberOfAppsOnTiles = appArray
      .map((appCards) => appCards.length)
      .reduce((sum, length) => sum + length, 0);

    await appView.selectViewOption(option);

    const listContainers = await appView.listContainers();
    const numberOfListGroups = listContainers.length;
    const listArray = await Promise.all(listContainers.map((group) => group.listItems()));
    const numberOfAppsInLists = listArray
      .map((listItems) => listItems.length)
      .reduce((sum, length) => sum + length, 0);

    expect(numberOfListGroups).to.be.eq(numberOfCardGroups);
    expect(numberOfAppsInLists).to.be.eq(numberOfAppsOnTiles);
  });

  it('child apps are displayed by clicking on the arrow icon of a list item', async () => {
    const appView = await LauncherPage.appView();
    const listContainers = await appView.listContainers();
    const listItems = await listContainers[0].listItems();
    const helpAppItem = listItems[1];

    const closedHeight = await helpAppItem.height();
    await helpAppItem.expand();
    const openedHeight = await helpAppItem.height();
    await helpAppItem.unExpand();
    const reclosedHeight = await helpAppItem.height();

    expect(closedHeight, 'Height is not the same after closing').to.be.eq(reclosedHeight);
    expect(parseFloat(openedHeight) > parseFloat(closedHeight), 'Height not expanded').to.be.true;
  });

  it('apps should be opened by clicking anywhere on the list item', async () => {
    const appView = await LauncherPage.appView();
    const listContainers = await appView.listContainers();
    const listItems = await listContainers[1].listItems();
    const { mockServerUrl } = config;

    const troubleshootingAppConfigs = eeaAppConfigs.apps.filter((app) =>
      (app.groupNames || []).includes('subscriber_troubleshooting'),
    );

    const handleUrl = async (item, index) => {
      await item.click();
      const expectedUrl = troubleshootingAppConfigs[index].url;
      const actualUrl = await browser.getUrl();
      await browser.back();
      await LauncherPage.waitForLoading();

      expect(actualUrl, `Jump Url mismatch for app: ${item.title}`).to.be.eq(
        `${mockServerUrl}${expectedUrl}`,
      );
    };

    await listItems.reduce(async (previousPromise, item, currentIndex) => {
      await previousPromise;
      return handleUrl(item, currentIndex);
    }, Promise.resolve());
  });

  it('app should be possible to set as favorite by clicking on the favorite icon', async () => {
    const appView = await LauncherPage.appView();
    const listContainers = await appView.listContainers();
    const listItems = await listContainers[0].listItems();
    const appItem = listItems[0];
    const appTitle = await appItem.title();

    await appItem.setFavorite();
    await LauncherPage.open();
    await LauncherPage.waitForLoading();

    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const favoriteApps = await favoriteCardContainer.appCards();
    const favoriteApp = await favoriteApps[0].title();
    expect(favoriteApp).to.be.eq(appTitle);
  });

  it('Child apps on expandable item follow app card favorite state', async () => {
    await expandProductsPage();
    await openProduct(EEA_TITLE);
    await LauncherPage.waitForAppViewLoading();

    const appView = await LauncherPage.appView();
    const listContainers = await appView.listContainers();
    const listItems = await listContainers[0].listItems();
    const helpAppItem = listItems[1];

    await helpAppItem.setFavorite();

    await helpAppItem.expand();
    const helpChildApps = await helpAppItem.childApps();
    const allChildAppsAreFavorite = (
      await Promise.all(helpChildApps.map((childApp) => childApp.isFavorite()))
    ).every((isFavorite) => isFavorite);

    await helpAppItem.unsetFavorite();
    const allChildAppsAreNonFavorite = (
      await Promise.all(helpChildApps.map((childApp) => childApp.isFavorite()))
    ).every((isFavorite) => !isFavorite);

    expect(
      allChildAppsAreFavorite,
      'Not all child apps are marked favorite under favorite app card',
    ).to.be.true;
    expect(
      allChildAppsAreNonFavorite,
      'Not all child apps are marked non-favorite under non-favorite app card',
    ).to.be.true;
  });

  it('App item is only marked favorite if all child apps are favorite', async () => {
    const appView = await LauncherPage.appView();
    const listContainers = await appView.listContainers();
    const listItems = await listContainers[0].listItems();
    const helpAppItem = listItems[1];

    await helpAppItem.unsetFavorite();
    await helpAppItem.expand();

    const helpChildApps = await helpAppItem.childApps();
    await Promise.all(helpChildApps.map((childApp) => childApp.unsetFavorite()));
    const nonFavoriteWithNoFavoriteChildApps = await helpAppItem.isNotFavorite();

    await helpChildApps[0].setFavorite();
    const partialFavoriteWithOneFavoriteChildApp = await helpAppItem.isPartialFavorite();

    await Promise.all(helpChildApps.map((childApp) => childApp.setFavorite()));
    const favoriteWithAllFavoriteChildApps = await helpAppItem.isFavorite();

    expect(
      nonFavoriteWithNoFavoriteChildApps,
      'App card is set favorite with no favorite child apps',
    ).to.be.true;

    expect(
      partialFavoriteWithOneFavoriteChildApp,
      'App card is set favorite with not all child apps marked favorite',
    ).to.be.true;
    expect(
      favoriteWithAllFavoriteChildApps,
      'App card is not set favorite with all child apps marked favorite',
    ).to.be.true;
  });

  it('grouping and view settings should be preserved', async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();

    const viewOption = dictionary.LIST;
    const groupingOption = dictionary.ALPHABETICAL;

    await openProduct(EEA_TITLE);
    const appView = await LauncherPage.appView();
    await appView.selectViewOption(viewOption);
    await appView.selectGroupingOption(groupingOption);
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();
    await openProduct(ECM_TITLE);

    const listContainers = await appView.listContainers();
    const listGroupNames = await Promise.all(
      listContainers.map((listContainer) => listContainer.groupName()),
    );

    // listView
    expect(listContainers.length).to.be.greaterThan(0);
    // alphabetically ordered
    listGroupNames.forEach((groupName) => {
      expect(groupName).to.have.lengthOf(1);
    });
    expect(listGroupNames).to.be.sorted({ descending: false });
  });
});
