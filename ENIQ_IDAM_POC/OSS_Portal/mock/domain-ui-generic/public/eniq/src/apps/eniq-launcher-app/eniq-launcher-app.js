/**
 * EniqLauncherApp is defined as
 * `<e-eniq-launcher-app>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import style from './eniq-launcher-app.css';
import { Dropdown } from '@eui/base/dropdown';
import { TextField } from '@eui/base/text-field';
import {  Button } from '@eui/base/button';
import {  Menu } from '@eui/base/menu';
import { Icon } from '@eui/theme/icon';
import { Tile } from '@eui/layout/tile';
import { Link } from '@eui/base/link';
import { Tooltip } from '@eui/base/tooltip'
import DateHeading from '../../components/date-heading/date-heading.js';
import UserProfile from '../../components/user-profile/user-profile.js';
import AppLauncher from '../../components/app-launcher/app-launcher.js';
import UserManagement from '../../components/user-management/user-management.js';
import UserAccessManagement from '../../components/useraccess-management/useraccess-management.js';
import Login from '../../components/login/login.js';
import LauncherPage from '../../components/launcher-page/launcher-page.js';
import EniqLauncher from  '../../components/eniq-launcher/eniq-launcher.js';

export default class EniqLauncherApp extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
         'eui-button': Button,
	       'eui-text-field': TextField,
  	     'eui-menu': Menu,
         'eui-icon':Icon,
	        'eui-tile':Tile,
	        'eui-link':Link,
          'eui-tooltip': Tooltip ,
         'e-date-heading': DateHeading,
         'e-user-profile' : UserProfile,         
         'e-app-launcher': AppLauncher,         
         'e-user-management':UserManagement,
         'e-useraccess-management':UserAccessManagement,
	       'e-login':Login,
	       'e-launcher-page':LauncherPage,
         'e-eniq-launcher': EniqLauncher
    };
  }

  didConnect() {
    this.bubble('app:title', { displayName: 'Application Launcher ' });
    this.bubble('app:subtitle', { subtitle: '' });
  }

  /**
   * Render the <e-eniq-launcher-app> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
    <div class="app-launcher">
    <!--  <e-app-launcher></e-app-launcher> -->
    </div>
    <div class="login-block">
       <e-login></e-login>
    </div>

     <div class="admin-user d-none">
     <!--   <e-user-management></e-user-management> -->
     </div>   
     <div class="launcher">
     <!-- <e-launcher-page> </e-launcher-page> -->
     </div>
    
    `;
  }
}

definition('e-eniq-launcher-app', {
  style,
  props: {
    listItems: { attribute: false, type: Array, default: [] },
  },
})(EniqLauncherApp);

EniqLauncherApp.register();
