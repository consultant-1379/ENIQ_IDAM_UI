/**
 * SelfServiceApp is defined as
 * `<e-self-service-app>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import style from './self-service-app.css';
import { Card } from '@eui/layout/card';
import { Link } from '@eui/base/link';
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
      "eui-card": Card,
      'eui-link':Link,
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
    return html`
    <div class="self-service">
      <div class="services container">
        <div class="title">User Self Services</div>
        <!--User services list-->
        <div class="services-list">
          <div class="list-item" >
          <!--<a href="#self-service-app/change-password"> Change Password</a> -->
              <eui-link href="#self-service-app/change-password">
                <eui-card card-title="Change Password"></eui-card>
              </eui-link>
          </div>
          <div class="list-item" >
          <!-- <a href="#self-service-app/change-details"> Change Details</a> -->
                <eui-link href="#self-service-app/change-details">
                  <eui-card card-title="Change Details"></eui-card>
                </eui-link>
          </div>
          <div class="list-item" >
                <!--<a href="#self-service-app/setup-passwordless"> setup Passwordless</a> -->
                <eui-link href="#self-service-app/setup-passwordless">
                  <eui-card card-title="setup Passwordless"></eui-card>
                </eui-link>
          </div>
            <!--->
        </div>
      </div>


    </div>
    `;
  }
}

definition('e-self-service-app', {
  style,
})(SelfServiceApp);

SelfServiceApp.register();
