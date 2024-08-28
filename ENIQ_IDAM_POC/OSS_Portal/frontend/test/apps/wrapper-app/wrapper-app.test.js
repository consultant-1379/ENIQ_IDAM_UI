import { expect, fixture, html } from '@open-wc/testing';
import { waitUntil } from '@open-wc/testing-helpers';
import { isNull } from 'lodash';
import WrapperApp from '../../../src/apps/wrapper-app/wrapper-app.js';
import isRendered from '../../test-utils/isRendered.js';
import loc from '../../../src/apps/wrapper-app/locale/en-us.json';
import CONSTANT from '../../test-utils/constants.js';

async function renderApp(metaData) {
  const htmlTemplate = html`
    <e-wrapper-app .metaData=${metaData}></e-wrapper-app>
  `;
  const element = await fixture(htmlTemplate);
  await isRendered(element);
  return element;
}

async function waitForIFrame(app) {
  let iframe;
  await waitUntil(
    () => {
      iframe = app.shadowRoot.querySelector('iframe');
      return !isNull(iframe);
    },
    'IFrame should be rendered in time.',
    { interval: 50, timeout: CONSTANT.CHILDREN_WAIT_TIMEOUT },
  );
  return iframe;
}

async function waitForError(app) {
  let title;
  let message;
  await waitUntil(
    () => {
      title = app.shadowRoot.querySelector('.title');
      message = app.shadowRoot.querySelector('.message');
      return !isNull(title) && !isNull(message);
    },
    'Error should be rendered in time.',
    { interval: 50, timeout: CONSTANT.CHILDREN_WAIT_TIMEOUT },
  );
  return {
    title: title.textContent,
    message: message.textContent,
  };
}

const TEST_URL = 'http://test.url/';
const QUERY_STRING = 'name=bob&age=12';

describe('WrapperApp Application Tests', () => {
  before(async () => {
    WrapperApp.register();
  });

  it('adds URL from the metadata', async () => {
    const app = await renderApp({
      options: {
        url: TEST_URL,
      },
    });
    const iframe = await waitForIFrame(app);
    expect(iframe.src).to.eq(TEST_URL);
    expect(iframe.title).to.eq(loc.I_FRAME_TITLE);
  });

  it('appends query string from the metadata', async () => {
    const app = await renderApp({
      options: {
        url: TEST_URL,
        query: `?${QUERY_STRING}`,
      },
    });
    const iframe = await waitForIFrame(app);
    expect(iframe.src).to.eq(`${TEST_URL}?${QUERY_STRING}`);
  });

  it('handles query string without question marks', async () => {
    const app = await renderApp({
      options: {
        url: TEST_URL,
        query: `${QUERY_STRING}`,
      },
    });
    const iframe = await waitForIFrame(app);
    expect(iframe.src).to.eq(`${TEST_URL}?${QUERY_STRING}`);
  });

  it('shows error message if options is missing from the metadata', async () => {
    const app = await renderApp({});
    const { title, message } = await waitForError(app);
    expect(title).to.eq(loc.CONFIG_ERROR_TITLE);
    expect(message).to.eq(loc.OPTIONS_MISSING);
  });

  it('shows error message if the URL is missing from the metadata options', async () => {
    const app = await renderApp({
      options: {},
    });
    const { title, message } = await waitForError(app);
    expect(title).to.eq(loc.CONFIG_ERROR_TITLE);
    expect(message).to.eq(loc.URL_MISSING);
  });
});
