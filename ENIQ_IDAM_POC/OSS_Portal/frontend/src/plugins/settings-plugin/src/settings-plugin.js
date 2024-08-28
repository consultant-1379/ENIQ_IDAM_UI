// eslint-disable-next-line camelcase
import storage from '../../../utils/storage';

/**
 * Settings Persistance
 * ---------------------------------------------------------------------
 * The plugin is used to persist the theme.
 */

/**
 * Persist the theme in session storage
 *
 * @function themeChanged
 * @param {Event} event The theme changed event
 * @private
 */
export const themeChanged = (event) => {
  const { theme } = event.detail;
  storage.set('theme', theme);
};

/**
 * Register for the theme changed event
 *
 * @function registerThemeChangeHandler
 * @private
 */
export const registerThemeChangeHandler = () => {
  const euiContainer = document.querySelector('eui-container');
  euiContainer.addEventListener('eui-theme-change', themeChanged);
};

/**
 * Set the persisted theme into the Container
 *
 * @function setPersistedTheme
 * @private
 */
export const setPersistedTheme = () => {
  const theme = storage.get('theme');
  if (theme) {
    const euiTheme = document.querySelector('eui-theme');
    euiTheme.bubble('eui-theme-change', { theme });
  }
};

/**
 * Lifecycle hook executed automatically before
 * the Container loads.
 * Implement this function when you want code in
 * the plugin to execute before the Container loads.
 *
 * @function onBeforeContainerLoad
 * @public
 */
export const onBeforeContainerLoad = () => async (resolve) => {
  registerThemeChangeHandler();

  resolve();
};

export const onBeforeAppLoad = () => (resolve) => {
  resolve();
};

document.body.addEventListener('set-username-finished', () => {
  setPersistedTheme();
});
