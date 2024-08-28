import { expect } from 'chai';
import { createRequire } from 'module';

import LauncherPage from '../../page-objects/launcher/Launcher.page.js';

const { mochaOpts } = config;

const require = createRequire(import.meta.url);
const launcherLocale = require('../../../src/apps/launcher/locale/en-us.json');
const settingsPanelLocale = require('../../../src/panels/custom-user-settings-panel/locale/en-us.json');

const dictionary = { ...launcherLocale, ...settingsPanelLocale };

const AUTHZ_COOKIE_TOKEN_KEY = 'eric.adp.authz.proxy.token';
const LAST_LOGIN_TIME_KEY = 'eric.adp.authn.lastlogintime';

const AUTH_COOKIE_1 =
  'Mg==.eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsOHVuX1ZCcFg5QjlpV2VOQkF4MmZBVjF0T0lZT2NJQVZMXzZUakFtcmF3In0.eyJleHAiOjE2Mzg0NDMwNjksImlhdCI6MTYzODQ0Mjc2OSwiYXV0aF90aW1lIjoxNjM4NDQyNzY4LCJqdGkiOiJmZmU5MjViMy02MGVkLTQ1ZTItOTdhNS00ODNhNzU4OTJkNmUiLCJpc3MiOiJodHRwczovL2VibGlnYXIuaWFtLjEwLjE5Ni4xMjMuMjAwLm5pcC5pby9hdXRoL3JlYWxtcy9vYW0iLCJhdWQiOiJhZHAtaWFtLWFhLWNsaWVudCIsInN1YiI6IjcwZGQ4YjQ1LTI1YmMtNDY5MS05NjRlLWE5YWZjMWY2ZWY5NiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkcC1pYW0tYWEtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6Ijg1MWQ3NzMxLTM3OTYtNDc4Ni1iY2I1LTA2ZGU0Nzk0MDNiNCIsImFjciI6IjEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlLWFkcC1hdXRoIiwic2lkIjoiODUxZDc3MzEtMzc5Ni00Nzg2LWJjYjUtMDZkZTQ3OTQwM2I0IiwidXBuIjoiYWxpY2UifQ.QwcrI7k0Wvjv6DHE8q7HQtEkkruEN07FwFi1QwJAJglrCc-FyQj-CdjeKcBMH7xa0uMkg5odknYzkS7FXfUm8dMXkf1_3T5srCtzRMIwWqNjgQ8ZlOc5W2-GXddNefv-zaspejcREFKq5_rm2Jw0nH9u5-116K_p6Hsk-J_cLMFqvZbpf8lHLwqdVZ3qDVyGbPxORNPgmdyW8TrFMkdeiq9XuyaSl4jVQE0K19ZbhF1-G8bQIQ-VIbd9Bw7AKMAbAYhnK3rj6IDE67B_Fm1tSyNlLY6_C_S_v56xo5lOPDlXIFnP6DsFjnTvZHkG43BNcfD10wrNWLqBvwmrJzCTCQ';
const AUTH_COOKIE_2 =
  'Mg==.eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsOHVuX1ZCcFg5QjlpV2VOQkF4MmZBVjF0T0lZT2NJQVZMXzZUakFtcmF3In0.eyJleHAiOjE2Mzg0NDMzMzAsImlhdCI6MTYzODQ0MzAzMCwiYXV0aF90aW1lIjoxNjM4NDQzMDI5LCJqdGkiOiJjZmQyMTU1MS04ZmJmLTQ2ZmItODdiNC01OTUwZmI3ZTI5Y2EiLCJpc3MiOiJodHRwczovL2VibGlnYXIuaWFtLjEwLjE5Ni4xMjMuMjAwLm5pcC5pby9hdXRoL3JlYWxtcy9vYW0iLCJhdWQiOiJhZHAtaWFtLWFhLWNsaWVudCIsInN1YiI6IjcwZGQ4YjQ1LTI1YmMtNDY5MS05NjRlLWE5YWZjMWY2ZWY5NiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkcC1pYW0tYWEtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjU5ZmE3NGE1LWM0YmEtNGFkZC04YzU0LTBhZjQ1NTczYTg5NyIsImFjciI6IjEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlLWFkcC1hdXRoIiwic2lkIjoiNTlmYTc0YTUtYzRiYS00YWRkLThjNTQtMGFmNDU1NzNhODk3IiwidXBuIjoiYWxpY2UifQ.U3Bw3CjwUjZxUCJW0dKHxJzhJP01XqZ2FIn65aKl3F-2AwQGeMo9FB0sVHCPUrKYCsWc079M4fStq1kVCzXxTMTHwNOdoB2IUJ60WD0bratXiyuevdi5oiXeT5j9tOPek5Ess_liLio2CEh46amMmmw09f9uThS67wkEV2jDGEMvBLZakPIz8X8kVZ6JdTaxrGoMLhRFAc6ZLms1FqU3_CVw6fwrst-vz0jYBx8MhzH5ZKW284UiOz0jSmRrGMucTTWG4UlLTIlENBdtsyTKtMy7RuTjnl1XjIrFL7qMeTfce2WwTGE8RvZLuFouQSAfVjBUG0PT9aLpa1_WV51pVw';

const USERNAME = 'alice';

const TIMESTAMPS = ['20211202105928Z', '20211202110349Z', '20211202142048Z'];

const LOGIN_TIMES = TIMESTAMPS.map((t) => {
  const date = new Date(
    `${t.substr(0, 4)}-${t.substr(4, 2)}-${t.substr(6, 2)}T${t.substr(8, 2)}:${t.substr(
      10,
      2,
    )}:${t.substr(12, 2)}.000Z`,
  );
  const hours = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12;
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `Dec 2, 2021, ${hours}:${minutes} ${amPm}`;
});

const LAST_LOGIN_TIME = '{{lastLoginTime}}';

const USERNAME_2 = 'bob';
const USER_COOKIE_KEY = 'userName';
const AUTH_TIME_KEY = 'authTime';

describe('Authentication Cookie', () => {
  let settingsPanel;
  before(async () => {
    await LauncherPage.open();
    await LauncherPage.waitForLoading();
  });

  it('can be opened if no Login time is available', async () => {
    await LauncherPage.clickAndWaitToDisplaySettingsPanel();
    settingsPanel = await LauncherPage.settingsPanel();

    expect(await settingsPanel.username()).to.eq('');
    expect(await settingsPanel.loginText()).to.eq(dictionary.SETTINGS_PANEL.LAST_LOG_IN_MISSING);
  });

  // eslint-disable-next-line func-names
  it('can load data from authentication cookie for the first time', async function () {
    this.timeout(mochaOpts.timeout * 5);
    await browser.setCookies([
      { name: AUTHZ_COOKIE_TOKEN_KEY, value: AUTH_COOKIE_1 },
      { name: LAST_LOGIN_TIME_KEY, value: TIMESTAMPS[0] },
    ]);
    await browser.refresh();
    await LauncherPage.waitForLoading();

    const notification = await LauncherPage.notification();
    const notificationText = await LauncherPage.notificationText();
    await LauncherPage.clickAndWaitToDisplaySettingsPanel();
    settingsPanel = await LauncherPage.settingsPanel();

    expect(notification).to.exist;
    expect(notificationText).to.eq(
      dictionary.LOG_IN_NOTIFICATION_TEXT.replace(LAST_LOGIN_TIME, LOGIN_TIMES[0]),
    );
    expect(await settingsPanel.username()).to.eq(USERNAME);
    expect(await settingsPanel.loginText()).to.eq(
      dictionary.LAST_LOG_IN_TEXT.replace(LAST_LOGIN_TIME, LOGIN_TIMES[0]),
    );
    expect(await settingsPanel.signoutButton()).to.exist;
  });

  // eslint-disable-next-line func-names
  it('can load updated cookie', async function () {
    this.timeout(mochaOpts.timeout * 5);
    await browser.setCookies([
      { name: AUTHZ_COOKIE_TOKEN_KEY, value: AUTH_COOKIE_2 },
      { name: LAST_LOGIN_TIME_KEY, value: TIMESTAMPS[1] },
    ]);
    await browser.refresh();
    await LauncherPage.waitForLoading();

    const notification = await LauncherPage.notification();
    const notificationText = await LauncherPage.notificationText();
    await LauncherPage.clickAndWaitToDisplaySettingsPanel();
    settingsPanel = await LauncherPage.settingsPanel();

    expect(notification).to.exist;
    expect(notificationText).to.eq(
      dictionary.LOG_IN_NOTIFICATION_TEXT.replace(LAST_LOGIN_TIME, LOGIN_TIMES[1]),
    );
    expect(await settingsPanel.username()).to.eq(USERNAME);
    expect(await settingsPanel.loginText()).to.eq(
      dictionary.LAST_LOG_IN_TEXT.replace(LAST_LOGIN_TIME, LOGIN_TIMES[1]),
    );
    expect(await settingsPanel.signoutButton()).to.exist;
  });

  it('loads username and authentication time from cookies in case of other Auth solutions', async () => {
    await browser.deleteCookies([AUTHZ_COOKIE_TOKEN_KEY, LAST_LOGIN_TIME_KEY]);
    await browser.setCookies([
      { name: USER_COOKIE_KEY, value: USERNAME_2 },
      { name: AUTH_TIME_KEY, value: LOGIN_TIMES[2] },
    ]);

    await browser.refresh();
    await LauncherPage.waitForLoading();
    await LauncherPage.clickAndWaitToDisplaySettingsPanel();
    settingsPanel = await LauncherPage.settingsPanel();

    expect(await settingsPanel.username()).to.eq(USERNAME_2);
    expect(await settingsPanel.loginText()).to.eq(
      dictionary.LAST_LOG_IN_TEXT.replace(LAST_LOGIN_TIME, LOGIN_TIMES[2]),
    );
    expect(await settingsPanel.signoutButton()).to.exist;
  });
});
