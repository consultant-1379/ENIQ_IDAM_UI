/**
 * SelfServiceApp is defined as
 * `<e-self-service-app>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import style from './self-service-app.css';
import SsChangePassword from '../../components/ss-change-password/ss-change-password.js';
import SsChangeDetails from '../../components/ss-change-details/ss-change-details.js';
import SsSetupPasswordless from '../../components/ss-setup-passwordless/ss-setup-passwordless.js';

export default class SelfServiceApp extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
      "e-ss-change-password":SsChangePassword,
      "e-ss-change-details":SsChangeDetails,
      "e-ss-setup-passwordless":SsSetupPasswordless
    };
  }

  didConnect() {
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', {subtitle: this.metaData?.descriptionShort,});
  }

  /**
   * Render the <e-self-service-app> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<h1>Your app markup goes here</h1>`;
  }
}

definition('e-self-service-app', {
  style,
})(SelfServiceApp);

SelfServiceApp.register();
