/* eslint max-classes-per-file: "off" */

const cssPaths = {
  euiContainer: 'eui-container',
  euiSystembarActions: 'eui-system-bar-actions',
  euiSystembarUserInfo: 'e-systembar-user-info',
  euiAppBar: 'eui-app-bar',
  euiAppBarMenuToggle: '#menu-toggle',
  euiAppBarBreadcrumb: 'eui-app-bar-breadcrumb',
  euiSystemPanel: 'eui-system-panel',
  euiTree: 'eui-tree',
  euiTreeItem: 'eui-tree-item',
  euiSwitch: 'eui-switch',
  euiButton: 'eui-button',
  euiTheme: 'eui-theme',
  customMenuPanel: 'e-custom-menu-panel',
  customUserSettingsPanel: 'e-custom-user-settings-panel',
  usericon: 'eui-icon[name = "profile"]',
  span: 'span',
  username: '.username',
  logintText: '#loginText',
  settings: '.settings',
  title: '.title',
  panelTitle: '.systempanel-title',
  content: '.content',
};

class SystemBar {
  async container() {
    return $(cssPaths.euiContainer);
  }

  async systemBarActions() {
    const container = await this.container();
    return container.$(cssPaths.euiSystembarActions);
  }

  async systembarUserInfo() {
    const systemBarActions = await this.systemBarActions();
    return systemBarActions.$(cssPaths.euiSystembarUserInfo);
  }

  async userName() {
    const systembarUserInfo = await this.systembarUserInfo();
    return systembarUserInfo.shadow$(cssPaths.span);
  }

  async userIcon() {
    const systembarUserInfo = await this.systembarUserInfo();
    return systembarUserInfo.shadow$(cssPaths.usericon);
  }
}

class SettingsPanel {
  constructor(root) {
    this.root = root;
  }

  async waitForLoading() {
    await browser.waitUntil(async () => this.isDisplayedInViewport(), {
      timeoutMsg: 'Failed to load settings panel',
    });
  }

  async isDisplayedInViewport() {
    return this.root.isDisplayedInViewport();
  }

  async isDisplayed() {
    return this.root.isDisplayed();
  }

  async themeSwitcher() {
    return this.root.shadow$(cssPaths.euiSwitch);
  }

  async signoutButton() {
    return this.root.shadow$(cssPaths.euiButton);
  }

  async username() {
    const userName = await this.root.shadow$(cssPaths.username);
    return userName.getText();
  }

  async loginText() {
    const loginText = await this.root.shadow$(cssPaths.logintText);
    return loginText.getText();
  }
}

class MenuPanel {
  constructor(root) {
    this.root = root;
  }

  async waitForLoading() {
    await browser.waitUntil(async () => this.isDisplayedInViewport(), {
      timeoutMsg: 'Failed to load menu panel',
    });
  }

  async isDisplayedInViewport() {
    return this.root.isDisplayedInViewport();
  }

  async navigationTreeItems() {
    const navigationTree = await this.root.shadow$(cssPaths.euiTree);
    return navigationTree.shadow$$(cssPaths.euiTreeItem);
  }

  async getMenuItemTitles() {
    const navigationTreeItems = await this.navigationTreeItems();
    return Promise.all(navigationTreeItems.map((treeItem) => treeItem.getText()));
  }

  async waitForHide() {
    await browser.waitUntil(async () => !(await this.isDisplayedInViewport()), {
      timeoutMsg: 'Failed to hide menu panel',
    });
  }

  async openTreeItem(index) {
    const navigationTreeItems = await this.navigationTreeItems();
    await navigationTreeItems[index].click();
  }
}

class SystemPanel {
  constructor(root) {
    this.root = root;
  }

  async panelTitle() {
    const panelTitle = await this.root.shadow$(cssPaths.panelTitle);
    return panelTitle.getText();
  }
}

class Breadcrumb {
  constructor(root) {
    this.root = root;
  }

  async list() {
    return this.root.shadow$$(cssPaths.span);
  }

  async hierarchy() {
    const list = await this.list();
    return Promise.all(list.map((element) => element.getText()));
  }
}

class PageBase {
  async theme() {
    const theme = await $(cssPaths.euiTheme);
    return theme.getAttribute('theme');
  }

  get systemBar() {
    return new SystemBar();
  }

  async appBar() {
    const container = await $(cssPaths.euiContainer);
    return container.shadow$(cssPaths.euiAppBar);
  }

  async breadcrumb() {
    const appBar = await this.appBar();
    const breadcrumb = await appBar.shadow$(cssPaths.euiAppBarBreadcrumb);
    return new Breadcrumb(breadcrumb);
  }

  async settingsPanel() {
    const container = await $(cssPaths.euiContainer);
    const systemPanel = await container.shadow$(cssPaths.euiSystemPanel);
    const settingsPanel = await systemPanel.$(cssPaths.customUserSettingsPanel);
    return new SettingsPanel(settingsPanel);
  }

  async menuPanel() {
    const container = await $(cssPaths.euiContainer);
    const menuPanel = await container.$(cssPaths.customMenuPanel);
    return new MenuPanel(menuPanel);
  }

  async systemPanel() {
    const container = await $(cssPaths.euiContainer);
    const systemPanel = await container.shadow$(cssPaths.euiSystemPanel);
    return new SystemPanel(systemPanel);
  }

  async menuToggle() {
    const appBar = await this.appBar();
    return appBar.shadow$(cssPaths.euiAppBarMenuToggle);
  }

  async content() {
    const container = await $(cssPaths.euiContainer);
    return container.shadow$(cssPaths.content);
  }

  async clickAndWaitToDisplayMenuPanel() {
    const menuPanel = await this.menuPanel();
    if (!(await menuPanel.isDisplayedInViewport())) {
      const appBar = await this.appBar();
      const menuToggle = await appBar.shadow$(cssPaths.euiAppBarMenuToggle);
      await menuToggle.click();
      await menuPanel.waitForLoading();
    }
  }

  async clickAndWaitToHideMenuPanel() {
    const menuPanel = await this.menuPanel();
    if (await menuPanel.isDisplayedInViewport()) {
      const appBar = await this.appBar();
      const menuToggle = await appBar.shadow$(cssPaths.euiAppBarMenuToggle);
      await menuToggle.click();
      await menuPanel.waitForHide();
    }
  }

  async clickAndWaitToDisplaySettingsPanel() {
    const settingsPanel = await this.settingsPanel();
    if (!(await settingsPanel.isDisplayed())) {
      const userIcon = await this.systemBar.userIcon();
      await userIcon.click();
      await settingsPanel.waitForLoading();
    }
  }

  async clickAndWaitToHideSettingsPanel() {
    const settingsPanel = await this.settingsPanel();
    if (await settingsPanel.isDisplayed()) {
      const userIcon = await this.systemBar.userIcon();
      await userIcon.click();
      await settingsPanel.waitForHide();
    }
  }

  async clickAndWaitToDisplayNotificationPanel() {
    const notificationPanel = await this.notificationLogPanel();
    if (!(await notificationPanel.isDisplayed())) {
      const notificationIcon = await this.systemBar.notificationIcon();
      await notificationIcon.click();
      await notificationPanel.waitForLoading();
    }
  }

  async clickAndWaitToHideNotificationPanel() {
    const notificationPanel = await this.notificationLogPanel();
    if (await notificationPanel.isDisplayed()) {
      const notificationIcon = await this.systemBar.notificationIcon();
      await notificationIcon.click();
      await this.waitForHideNotificationPanel();
    }
  }

  async setDarkTheme() {
    await this.clickAndWaitToDisplaySettingsPanel();
    if ((await this.theme()) !== 'dark') {
      const settingsPanel = await this.settingsPanel();
      const themeSwitcher = await settingsPanel.themeSwitcher();
      await themeSwitcher.click();
    }
  }

  async setLightTheme() {
    await this.clickAndWaitToDisplaySettingsPanel();
    if ((await this.theme()) !== 'light') {
      const settingsPanel = await this.settingsPanel();
      const themeSwitcher = await settingsPanel.themeSwitcher();
      await themeSwitcher.click();
    }
  }

  async clickSignout() {
    await this.clickAndWaitToDisplaySettingsPanel();
    const settingsPanel = await this.settingsPanel();
    const signoutButton = await settingsPanel.signoutButton();
    await signoutButton.click();
  }

  async _isDisplayed(element) {
    try {
      return element.isDisplayed();
    } catch (error) {
      return false;
    }
  }

  async waitForLoading() {
    await browser.waitUntil(
      async () => {
        const container = await $(cssPaths.euiContainer);
        return this._isDisplayed(container);
      },
      {
        timeoutMsg: 'Failed to load eui container',
      },
    );
    await browser.waitUntil(
      async () => {
        const container = await $(cssPaths.euiContainer);
        const appBar = await container.shadow$(cssPaths.euiAppBar);
        return this._isDisplayed(appBar);
      },
      {
        timeoutMsg: 'Failed to load eui app bar',
      },
    );
    await browser.waitUntil(
      async () => {
        const container = await $(cssPaths.euiContainer);
        const content = await container.shadow$(cssPaths.content);
        return this._isDisplayed(content);
      },
      {
        timeoutMsg: 'Failed to load app content',
      },
    );
  }

  async waitForHideNotificationPanel() {
    await browser.waitUntil(async () => this.isNotificationHidden(), {
      timeoutMsg: 'Failed to hide notification panel',
    });
  }

  async isNotificationHidden() {
    const layoutHolder = await this.layoutHolder();
    const layoutHolderSttingsHidden = await layoutHolder.shadow$(
      cssPaths.layoutHolderSettingsHidden,
    );
    return layoutHolderSttingsHidden.isExisting();
  }
}

export default {
  SystemBar,
  SettingsPanel,
  MenuPanel,
  PageBase,
  SystemPanel,
};
