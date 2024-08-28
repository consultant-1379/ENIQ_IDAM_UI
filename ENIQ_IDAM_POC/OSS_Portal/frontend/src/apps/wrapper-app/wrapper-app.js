/**
 * WrapperApp is defined as
 * `<e-wrapper-app>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import { Loader } from '@eui/base';
import { Icon } from '@eui/theme';
import { i18nMixin } from '@adp/ui-components';
import style from './wrapper-app.css';
import router from '../../utils/router';
import defaultI18n from './locale/en-us.json';
import CONSTANTS from '../../utils/constants';
import rest from '../../utils/rest';

const { PRODUCT_TYPE } = CONSTANTS;

export default class WrapperApp extends i18nMixin(defaultI18n, App) {
  static get components() {
    return {
      'eui-loader': Loader,
      'eui-icon': Icon,
    };
  }

  get meta() {
    return import.meta;
  }

  async didConnect() {
    this.isLoading = true;
    const groups = await rest.getGroups();
    this.products = groups.filter((group) => group.type === PRODUCT_TYPE);
    this.isLoading = false;
    this.renderContextualBreadcrumb();
  }

  renderContextualBreadcrumb() {
    const { i18n, metaData } = this;

    const crumbs = [
      {
        displayName: i18n.LAUNCHER,
        action: () => router.goToMainPage(),
      },
    ];

    const { groupNames } = metaData;

    if (groupNames) {
      const product = this.products.find((p) => groupNames.includes(p.name));

      if (product) {
        crumbs.push({
          displayName: product.displayName,
          action: () => router.goToProduct(product.name),
        });
      }
    }

    this.bubble('app:lineage', {
      metaData,
      crumbs,
    });
  }

  get formattedQuery() {
    const {
      metaData: {
        options: { query },
      },
    } = this;

    if (!query) {
      return '';
    }

    return query.startsWith('?') ? query : `?${query}`;
  }

  render() {
    const { isLoading } = this;

    if (isLoading) {
      return html`
        <div class="loading-container">
          <eui-loader></eui-loader>
        </div>
      `;
    }

    const { i18n, metaData } = this;

    if (!metaData.options || !metaData.options.url) {
      return html`
        <div class="info-message">
          <div class="header">
            <eui-icon size="18px" class="icon" name="triangle-warning"></eui-icon>
            <span class="title">${i18n.CONFIG_ERROR_TITLE}</span>
          </div>
          <pre class="message">${!metaData.options ? i18n.OPTIONS_MISSING : i18n.URL_MISSING}</pre>
        </div>
      `;
    }

    const { url } = metaData.options;
    const { formattedQuery } = this;

    return html`
      <iframe
        src="${encodeURI(url)}${encodeURI(formattedQuery)}"
        title=${i18n.I_FRAME_TITLE}
      ></iframe>
    `;
  }
}

definition('e-wrapper-app', {
  style,
  props: {
    metaData: {
      type: Object,
    },
    isLoading: {
      type: Boolean,
      default: true,
      attribute: false,
    },
  },
})(WrapperApp);

WrapperApp.register();
