import SearchComponent from './SearchComponent.js';

const cssPaths = {
  actionBar: 'e-action-bar',
  searchComponent: 'e-search-component',
};

class LauncherView {
  constructor(root) {
    this.root = root;
  }

  async actionBar() {
    return this.root.shadow$(cssPaths.actionBar);
  }

  async searchComponent() {
    const actionBar = await this.actionBar();
    const searchComponent = await actionBar.shadow$(cssPaths.searchComponent);
    return new SearchComponent(searchComponent);
  }
}

export default LauncherView;
