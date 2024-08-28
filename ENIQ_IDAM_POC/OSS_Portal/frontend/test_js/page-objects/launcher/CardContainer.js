import ProductCard from './ProductCard.js';
import AppCard from './AppCard.js';

const cssPaths = {
  productCard: 'e-product-card',
  appCard: 'e-app-card',
  groupName: '.groupName',
  viewAll: '.viewAllLink',
  expandLink: '.expandLink',
};

class CardContainer {
  constructor(root) {
    this.root = root;
  }

  async productCards() {
    const productCards = await this.root.shadow$$(cssPaths.productCard);
    return productCards.map((card) => new ProductCard(card));
  }

  async appCards() {
    const appCards = await this.root.shadow$$(cssPaths.appCard);
    return appCards.map((card) => new AppCard(card));
  }

  async groupName() {
    const groupName = await this.root.shadow$(cssPaths.groupName);
    return groupName.getText();
  }

  async viewAllLink() {
    return this.root.shadow$(cssPaths.viewAll);
  }

  async expandLink() {
    return this.root.shadow$(cssPaths.expandLink);
  }

  async expandProducts() {
    const expandLink = await this.expandLink();
    if ((await expandLink.getText()) === 'Expand') {
      await expandLink.click();
    }
  }

  async collapseProducts() {
    const expandLink = await this.expandLink();
    if ((await expandLink.getText()) === 'Collapse') {
      await expandLink.click();
    }
  }
}

export default CardContainer;
