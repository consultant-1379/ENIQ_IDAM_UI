import { expect } from 'chai';
import LauncherPage from '../../page-objects/launcher/Launcher.page.js';
import { openProduct, expandProductsPage } from '../../utils/utils.js';
import constants from '../../utils/constants.js';

const LANDING_CARD_COUNT = 8;
const { EEA_TITLE, MOCK_TITLE } = constants;

describe('Application states', () => {
  let numberOfFavoriteApps = 0;

  before(async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();
  });

  it('Recent and Favorite sections are hidden on Landing page', async () => {
    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const recentCardContainer = await productView.recentCardContainer();
    expect(favoriteCardContainer || recentCardContainer, 'Sections are not hidden.').to.not.exist;
  });

  it('Adding a favorite will make favorite section appear', async () => {
    await openProduct(EEA_TITLE);

    const appView = await LauncherPage.appView();
    const cardContainers = await appView.cardContainers();
    const appCards = await cardContainers[0].appCards();
    await Promise.all(
      appCards.map((appCard) => {
        numberOfFavoriteApps += 1;
        return appCard.setFavorite();
      }),
    );

    await LauncherPage.open();
    await LauncherPage.waitForLoading();

    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const recentCardContainer = await productView.recentCardContainer();
    expect(favoriteCardContainer, 'Favorite section does not exist after adding favorite app.').to
      .exist;
    expect(recentCardContainer, 'Recent section exists.').to.not.exist;
    expect(
      (await favoriteCardContainer.appCards()).length,
      'Number of favorites does not match number of selected cards.',
    ).to.be.eq(appCards.length);
  });

  it('Child apps on expandable card follow app card favorite state', async () => {
    await expandProductsPage();
    await openProduct(EEA_TITLE);

    const appView = await LauncherPage.appView();
    const expandableCard = (await appView.findExpandableCards())[0];
    await expandableCard.setFavorite();

    await expandableCard.expand();

    const childApps = await expandableCard.childApps();
    const allChildAppsAreFavorite = (
      await Promise.all(childApps.map((childApp) => childApp.isFavorite()))
    ).every((isFavorite) => isFavorite);

    await expandableCard.unsetFavorite();
    const allChildAppsAreNonFavorite = (
      await Promise.all(childApps.map((childApp) => childApp.isFavorite()))
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

  it('App card is only marked favorite if all child apps are favorite', async () => {
    const appView = await LauncherPage.appView();
    const expandableCard = (await appView.findExpandableCards())[0];
    await expandableCard.unsetFavorite();

    await expandableCard.expand();

    const childApps = await expandableCard.childApps();
    await Promise.all(childApps.map((childApp) => childApp.unsetFavorite()));
    const nonFavoriteWithNoFavoriteChildApps = await expandableCard.isNotFavorite();

    await childApps[0].setFavorite();
    const partialFavoriteWithOneFavoriteChildApp = await expandableCard.isPartialFavorite();

    await Promise.all(childApps.map((childApp) => childApp.setFavorite()));
    const favoriteWithAllFavoriteChildApps = await expandableCard.isFavorite();

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

  it('Opening app adds it to recent apps', async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();

    let productView = await LauncherPage.productView();
    let favoriteCardContainer;

    const openedApps = [];
    let index = 0;

    /* eslint-disable no-await-in-loop */
    while (index !== -1) {
      favoriteCardContainer = await productView.favoriteCardContainer();
      const cards = await favoriteCardContainer.appCards();
      const cardTitles = await Promise.all(cards.map((card) => card.title()));
      index = cardTitles.findIndex((title) => !openedApps.includes(title));
      if (index !== -1) {
        const card = cards[index];
        const title = await card.title();
        openedApps.push(title);
        await card.click();
        await browser.back();
        await LauncherPage.waitForLoading();
      }
    }
    /* eslint-enable no-await-in-loop */

    const appCards = await favoriteCardContainer.appCards();
    productView = await LauncherPage.productView();
    favoriteCardContainer = await productView.favoriteCardContainer();
    const recentCardContainer = await productView.recentCardContainer();

    expect(favoriteCardContainer, 'Favorite section does not exist after opening app.').to.exist;
    expect(recentCardContainer, 'Recent section does not exist.').to.exist;
    expect(
      (await recentCardContainer.appCards()).length,
      'Number of recent apps does not match number of opened cards.',
    ).to.be.eq(appCards.length);
  });

  it('Recent apps are ordered by last time opened', async () => {
    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const recentCardContainer = await productView.recentCardContainer();
    const favoriteCards = await favoriteCardContainer.appCards();
    const recentCards = await recentCardContainer.appCards();
    const recentAppTitles = await Promise.all(recentCards.map((app) => app.title()));
    const openedAppTitles = await Promise.all(favoriteCards.map((app) => app.title()));

    expect(recentAppTitles, 'Recent apps not ordered by opening time.').to.have.ordered.members(
      openedAppTitles.reverse(),
    );
  });

  it('Favorites can be modified from product view', async () => {
    await expandProductsPage();
    await openProduct(EEA_TITLE);
    const appView = await LauncherPage.appView();
    const expandableCard = (await appView.findExpandableCards())[0];
    await expandableCard.expand();

    const childApps = await expandableCard.childApps();
    await childApps[0].unsetFavorite(); // to have a partial favorite card in the list
    await LauncherPage.open();
    await LauncherPage.waitForLoading();

    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const recentCardContainer = await productView.recentCardContainer();

    let favoriteCards = await favoriteCardContainer.appCards();
    const isOneCardPartialFavorite =
      (
        await Promise.all(favoriteCards.map((favoriteCard) => favoriteCard.isPartialFavorite()))
      ).filter((isPartialFavorite) => isPartialFavorite).length === 1;
    const beforeLength = favoriteCards.length;

    const recentCards = await recentCardContainer.appCards();
    await recentCards[0].unsetFavorite();
    favoriteCards = await favoriteCardContainer.appCards();
    const oneRemovedLength = favoriteCards.length;
    await recentCards[0].setFavorite();
    favoriteCards = await favoriteCardContainer.appCards();
    const oneReplacedLength = favoriteCards.length;

    expect(isOneCardPartialFavorite, 'Partial favorite app card is not present in favorites pill')
      .to.be.true;
    expect(beforeLength).to.be.eq(oneReplacedLength);
    expect(oneRemovedLength).to.be.eq(beforeLength - 1);
  });

  it('App states are present after reload', async () => {
    await browser.refresh();
    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const recentCardContainer = await productView.recentCardContainer();

    expect(favoriteCardContainer, 'Favorite section does not exist after reload').to.exist;
    expect(recentCardContainer, 'Recent section does not exist after reload.').to.exist;
  });

  it('Favorites are preserved and present on app view', async () => {
    await expandProductsPage();
    await openProduct(EEA_TITLE);
    await browser.refresh();

    const appView = await LauncherPage.appView();
    const cardContainers = await appView.cardContainers();
    const appCardsInFavoriteSection = await cardContainers[0].appCards();
    const favoriteAppCards = (
      await Promise.all(appCardsInFavoriteSection.map((appCard) => appCard.isFavorite()))
    ).filter((isFavorite) => isFavorite);
    const partialFavoriteAppCards = (
      await Promise.all(appCardsInFavoriteSection.map((appCard) => appCard.isPartialFavorite()))
    ).filter((isPartialFavorite) => isPartialFavorite);

    const unsetAppCards = await cardContainers[1].appCards();

    expect(
      favoriteAppCards.length + partialFavoriteAppCards.length,
      'Favorite section does not contain all favorite and partial favorite cards',
    ).to.be.eq(appCardsInFavoriteSection.length);

    unsetAppCards.forEach(async (appCard) => {
      expect(await appCard.isFavorite(), `'${appCard.title}' is marked favorite.`).to.be.false;
    });
  });

  it('Number of favorite cards is limited', async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();
    await openProduct(EEA_TITLE);

    const appView = await LauncherPage.appView();
    const cardContainers = await appView.cardContainers();
    await Promise.all(
      cardContainers.map(async (cardContainer) => {
        const appCards = await cardContainer.appCards();
        await Promise.all(
          appCards.map(async (appCard) => {
            if (await appCard.isNotFavorite()) {
              numberOfFavoriteApps += 1;
              await appCard.setFavorite();
            }
          }),
        );
      }),
    );

    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();

    expect(favoriteCardContainer, 'Favorite section does not exist.').to.exist;
    expect(
      (await favoriteCardContainer.appCards()).length,
      'Number of favorites does not match the card count limit.',
    ).to.be.eq(LANDING_CARD_COUNT);
  });

  it(`Jumping to all favorite apps is possible when number of favorite apps is greater than ${LANDING_CARD_COUNT}`, async () => {
    const productView = await LauncherPage.productView();
    const favoriteCardContainer = await productView.favoriteCardContainer();
    const viewAllLink = await favoriteCardContainer.viewAllLink();
    await viewAllLink.click();

    await LauncherPage.waitForLoading();

    const appView = await LauncherPage.appView();
    const cardContainers = await appView.cardContainers();
    const appCardsArray = await Promise.all(
      cardContainers.map((cardContainer) => cardContainer.appCards()),
    );
    const numberOfCurrentApps = appCardsArray
      .map((appCards) => appCards.length)
      .reduce((acc, curr) => acc + curr);

    expect(viewAllLink).not.to.be.null;
    expect(numberOfCurrentApps).to.eq(numberOfFavoriteApps);
  });

  it('Show favorites only setting is preserved across products', async () => {
    const isShowingFavoritesOnly = async (appView) => {
      const favoritePill = await appView.favoritePill();
      const unselectedAttr = await favoritePill.getAttribute('unselected');
      return unselectedAttr !== '';
    };
    const showFavoritesOnlyBefore = await isShowingFavoritesOnly(await LauncherPage.appView());

    await LauncherPage.clickAndWaitToDisplayMenuPanel();

    const menuPanel = await LauncherPage.menuPanel();
    const treeItems = await menuPanel.navigationTreeItems();
    await menuPanel.openTreeItem(treeItems.length - 1);
    const showFavoritesOnlyOnLastProduct = await isShowingFavoritesOnly(
      await LauncherPage.appView(),
    );

    expect(showFavoritesOnlyBefore).to.be.true;
    expect(showFavoritesOnlyOnLastProduct).to.be.true;
  });

  it('Can open child app from expandable list', async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
    await expandProductsPage();
    await openProduct(MOCK_TITLE);

    const appView = await LauncherPage.appView();
    const expandableCard = (await appView.findExpandableCards())[0];

    await expandableCard.expand();

    const childApps = await expandableCard.childApps();
    await expandableCard.click();
    const appText = await $('eui-container')
      .shadow$('main')
      .$('e-child-mock-portal')
      .shadow$('#child')
      .getHTML(false);

    expect(appText).to.eq('This is a child app');
    expect(childApps.length).to.be.eq(1);
  });

  it('can open hidden child app by url', async () => {
    await browser.url('/#mock-portal/mock-portal-child-2');
    const appText = await $('eui-container')
      .shadow$('main')
      .$('e-hidden-child-mock-portal')
      .shadow$('#hidden')
      .getHTML(false);

    expect(appText).to.eq('This is a hidden child app');
  });
});
