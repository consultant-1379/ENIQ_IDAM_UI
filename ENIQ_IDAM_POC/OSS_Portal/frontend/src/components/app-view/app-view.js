/**
 * Component AppView is defined as
 * `<e-app-view>`
 *
 * Imperatively create component
 * @example
 * let component = new AppView();
 *
 * Declaratively create component
 * @example
 * <e-app-view></e-app-view>
 *
 * @extends {LauncherView}
 */
import { html, definition, classMap, repeat } from '@eui/lit-component';
import { ActionBar, ListContainer, CardContainer, i18nMixin } from '@adp/ui-components';
import style from './app-view.css';
import CONSTANTS from '../../utils/constants';

import router from '../../utils/router';
import StorageModule from '../../utils/storage';
import { LauncherView } from '../launcher-view/launcher-view';

import defaultI18n from './locale/en-us.json';

const {
  CATEGORY_TYPE,
  ALL_APPS,
  PRODUCT_TYPE,
  SPACE_KEY,
  FOCUS_SEARCH_BAR_EVENT,
  VIEW_TYPE,
  GROUPPING_TYPE,
} = CONSTANTS;

const IS_PRODUCTS = false;

class AppView extends i18nMixin(defaultI18n, LauncherView) {
  constructor() {
    super();
    this.showFavoritesOnly = this.doesURLContainFavorites();
    this.handleShowFavoritesOnlyChange = this.handleShowFavoritesOnlyChange.bind(this);
    this.handleGroupingTypeChange = this.handleGroupingTypeChange.bind(this);
    this.handleViewTypeChange = this.handleViewTypeChange.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleSearchedItemSelection = this.handleSearchedItemSelection.bind(this);

    this.groupingType = StorageModule.get('groupingType') || GROUPPING_TYPE.CATEGORY;
    this.viewType = StorageModule.get('viewType') || VIEW_TYPE.TILE;
  }

  static get components() {
    return {
      'e-card-container': CardContainer,
      'e-list-container': ListContainer,
      'e-action-bar': ActionBar,
    };
  }

  get meta() {
    return import.meta;
  }

  didChangeProps(changedProps) {
    if (changedProps.has('productName') && this.showFavoritesOnly) {
      this.showFavoritesOnly = false;
      this.handleShowFavoritesOnlyChange();
    }
  }

  doesURLContainFavorites() {
    return router.doesURLContainFavorites();
  }

  filterProductApps() {
    const { rootApps, favoriteApps, showFavoritesOnly } = this;
    const productGroupIds = this.getProductGroups();
    const filteredApps = showFavoritesOnly ? favoriteApps : rootApps;
    filteredApps.sort((a, b) => a.displayName.localeCompare(b.displayName));
    if (productGroupIds.length === 1 && productGroupIds[0] === ALL_APPS) {
      return filteredApps;
    }
    return filteredApps.filter(
      (app) =>
        app.groupNames && productGroupIds.some((groupId) => app.groupNames.includes(groupId)),
    );
  }

  getProductGroups() {
    const { groups, productName } = this;
    return groups
      .filter(
        (group) =>
          group.type === CATEGORY_TYPE &&
          group.groupNames &&
          group.groupNames.includes(productName),
      )
      .filter((group) => !group.hidden)
      .map((group) => group.name)
      .concat(productName);
  }

  collectToMapOfArrays(map, key, value) {
    if (map[key]) {
      map[key].push(value);
    } else {
      map[key] = [value];
    }
  }

  groupAppsByParentGroup(apps) {
    const { i18n, groups } = this;
    const categories = {};
    const allCategoryNames = groups
      .filter((group) => group.type !== PRODUCT_TYPE)
      .filter((group) => !group.hidden)
      .map((group) => group.name);
    apps.forEach((app) => {
      const categoryNames = (app.groupNames || []).filter((parentApp) =>
        allCategoryNames.includes(parentApp),
      );
      if (categoryNames.length === 0) {
        this.collectToMapOfArrays(categories, i18n.OTHERS, app);
      } else {
        categoryNames.forEach((parentApp) => this.collectToMapOfArrays(categories, parentApp, app));
      }
    });

    return Object.keys(categories).map((groupId, _i, array) => {
      let groupName = this.getGroupName(groupId);
      // Hide groupName when there is only a single 'Others' category
      if (groupName === i18n.OTHERS && array.length === 1) {
        groupName = '';
      }
      return { groupName, apps: categories[groupId] };
    });
  }

  getGroupName(groupId) {
    const { groups, i18n } = this;
    const groupCategory = groups.find((group) => group.name === groupId);
    if (!groupCategory) {
      return i18n.OTHERS;
    }
    return groupCategory.displayName;
  }

  groupAppsByFirstChar(apps) {
    const categories = {};
    apps.forEach((app) => {
      const firstChar = app.displayName.charAt(0).toUpperCase();
      if (categories[firstChar]) {
        categories[firstChar].push(app);
      } else {
        categories[firstChar] = [app];
      }
    });
    return Object.keys(categories).map((category) => ({
      groupName: category,
      apps: categories[category],
    }));
  }

  /**
   * Sort appGroups alphabetically and if OTHERS category is present, set it as the last group.
   */
  sortGroupsByName(appGroups) {
    const { i18n } = this;
    return appGroups.sort((group1, group2) => {
      if (group1.groupName === i18n.OTHERS) {
        return 1;
      }
      if (group2.groupName === i18n.OTHERS) {
        return -1;
      }
      return group1.groupName.localeCompare(group2.groupName);
    });
  }

  handleGroupingTypeChange(event) {
    this.groupingType = event.detail.menuItems[0].value;
    StorageModule.set('groupingType', this.groupingType);
  }

  handleViewTypeChange(event) {
    this.viewType = event.detail.menuItems[0].value;
    StorageModule.set('viewType', this.viewType);
  }

  handleShowFavoritesOnlyChange() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
    if (this.showFavoritesOnly) {
      router.goToShowFavorites(this.productName);
    } else {
      router.goToProduct(this.productName);
    }
  }

  handleKeyboard(event) {
    if (event.key === SPACE_KEY) {
      this.handleShowFavoritesOnlyChange(event);
    }
  }

  mapAppsWithRoutes(apps) {
    return apps.map((app) => ({
      ...app,
      route: router.getActualRoute(app),
      childApps: app.childApps
        ? app.childApps.map((childApp) => ({ ...childApp, route: router.getActualRoute(childApp) }))
        : [],
    }));
  }

  renderCardContainers(categoryGroups) {
    const { productName, viewType, isCompactView } = this;
    return repeat(
      categoryGroups,
      (categoryGroup) => categoryGroup.groupName,
      (categoryGroup) => {
        if (viewType === VIEW_TYPE.TILE) {
          return html`
            <e-card-container
              product-name=${productName}
              group-name=${categoryGroup.groupName}
              .items=${this.mapAppsWithRoutes(categoryGroup.apps)}
              .isCompactView=${isCompactView}
              ?is-products=${IS_PRODUCTS}
            ></e-card-container>
          `;
        }
        return html`
          <e-list-container
            product-name=${productName}
            group-name=${categoryGroup.groupName}
            .items=${this.mapAppsWithRoutes(categoryGroup.apps)}
            .isCompactView=${isCompactView}
          ></e-list-container>
        `;
      },
    );
  }

  renderAppGroups() {
    const { groupingType } = this;
    const productApps = this.filterProductApps();
    if (!productApps.length) {
      return this.renderEmptyState();
    }

    const appGroups =
      groupingType === GROUPPING_TYPE.ALPHABETICAL
        ? this.groupAppsByFirstChar(productApps)
        : this.groupAppsByParentGroup(productApps);
    const sortedGroups = this.sortGroupsByName(appGroups);
    return this.renderCardContainers(sortedGroups);
  }

  renderEmptyState() {
    const { i18n } = this;
    const renderText = (text) =>
      html`
        <div class="empty-state">
          <div class="message">
            <p>${text}</p>
          </div>
        </div>
      `;

    if (this.showFavoritesOnly) {
      return renderText(i18n.NO_FAVORITE_APPS);
    }
    if (this.productName === ALL_APPS) {
      return renderText(i18n.NO_APPS);
    }
    return renderText(i18n.NO_APPS_FOR_PRODUCT);
  }

  didRender() {
    this.addEventListener(FOCUS_SEARCH_BAR_EVENT, () => {
      const actionBar = this.shadowRoot.querySelector('e-action-bar');
      actionBar.dispatchEvent(new Event(FOCUS_SEARCH_BAR_EVENT));
    });
  }

  getProducts() {
    const { groups } = this;
    return groups.filter((element) => element.type === PRODUCT_TYPE);
  }

  isProductName(name) {
    const products = this.getProducts();
    return products.find((app) => app.name === name);
  }

  handleSearchedItemSelection(event) {
    const { apps } = this;
    const name = event.detail.menuItems[0].value;
    if (this.isProductName(name)) {
      router.goToProduct(name);
    } else {
      const selectedApp = apps.find((app) => app.name === name);
      window.open(
        router.getActualRoute(selectedApp),
        selectedApp.type === 'external' ? '_blank' : '_self',
      );
    }
  }

  getActionBarData() {
    const { apps, i18n } = this;
    const products = this.getProducts();
    return [
      {
        group: true,
        label: i18n.APPS,
        items: apps,
      },
      {
        group: true,
        label: i18n.PRODUCTS,
        items: products,
      },
    ];
  }

  render() {
    const {
      showFavoritesOnly,
      groupingType,
      viewType,
      isCompactView,
      handleShowFavoritesOnlyChange,
      handleKeyboard,
      handleGroupingTypeChange,
      handleViewTypeChange,
    } = this;
    return html`
      <div class=${classMap(this.classMap)}>
        <e-action-bar
          .data=${this.getActionBarData()}
          .showFavoritesOnly=${showFavoritesOnly}
          .groupingType=${groupingType}
          .viewType=${viewType}
          .isCompactView=${isCompactView}
          @handle-search-selection=${this.handleSearchedItemSelection}
          @handle-favorites-change=${handleShowFavoritesOnlyChange}
          @handle-keyboard=${(event) => handleKeyboard(event.detail)}
          @handle-grouping-change=${handleGroupingTypeChange}
          @handle-view-change=${handleViewTypeChange}
        ></e-action-bar>
      </div>
      <div class=${classMap(this.classMap)}>${this.renderAppGroups()}</div>
    `;
  }
}

definition('e-app-view', {
  style,
  props: {
    productName: {
      type: String,
      default: null,
      attribute: true,
    },
    apps: {
      type: Array,
      default: [],
      attribute: false,
    },
    rootApps: {
      type: Array,
      default: [],
      attribute: false,
    },
    groups: {
      type: Array,
      default: [],
      attribute: false,
    },
    groupingType: {
      type: String,
      default: null,
      attribute: true,
    },
    viewType: {
      type: String,
      default: null,
      attribute: true,
    },
    showFavoritesOnly: {
      type: Boolean,
      default: false,
      attribute: false,
    },
    favoriteApps: {
      type: Array,
      default: [],
      attribute: false,
    },
  },
})(AppView);

export { AppView };
