import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Theme } from '@eui/theme/theme';
import { Container } from '@eui/container';
import configManager from '../../../src/config/configManager.js';
import {
  setPersistedTheme,
  registerThemeChangeHandler,
  themeChanged,
} from '../../../src/plugins/settings-plugin/src/settings-plugin.js';
import { stubRouter } from '../../test-utils/utils.js';
import storage from '../../../src/utils/storage.js';

const renderTheme = async () => {
  const template = html`
    <eui-theme theme="dark"></eui-theme>
  `;

  return fixture(template);
};

const renderContainer = async () => {
  const template = html`
    <eui-container></eui-container>
  `;

  return fixture(template);
};

describe('Settings plugin Tests', () => {
  before(async () => {
    Theme.register();
    Container.register();

    await configManager.initConfig();

    window.esmsInitOptions = {
      shimMode: true,
      async fetch(url, options) {
        const res = await fetch(url, options);
        if (!res.ok) {
          return res;
        }
        return res;
      },
    };
  });

  describe('Basic application setup', () => {
    before(async () => {
      stubRouter();
      storage.init();
      storage.set('theme', 'light');
    });

    it('should set persisted theme', async () => {
      const theme = await renderTheme();
      const bubbleSpy = sinon.spy(theme, 'bubble');

      setPersistedTheme();
      expect(bubbleSpy.called).to.be.true;
      expect(bubbleSpy.calledWith('eui-theme-change', { theme: 'light' })).to.be.true;
    });

    it('should register theme change handler', async () => {
      const container = await renderContainer();
      const addEventListenerSpy = sinon.spy(container, 'addEventListener');

      registerThemeChangeHandler();
      expect(addEventListenerSpy.called).to.be.true;
      expect(addEventListenerSpy.calledWith('eui-theme-change', themeChanged)).to.be.true;
    });
  });
});
