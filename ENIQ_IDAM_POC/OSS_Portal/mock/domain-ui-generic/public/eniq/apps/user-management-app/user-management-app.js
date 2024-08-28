/**
 * UserManagementApp is defined as
 * `<e-user-management-app>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import { Button, Dialog, Tooltip } from '@eui/base';
import { Icon } from '@eui/theme/icon';
import style from './user-management-app.css';
import UmUsersTable from '../../components/um-users-table/um-users-table.js';
import { UmAddUser } from '../../components/um-add-user/um-add-user.js';
import UmUserdetailsEdit from '../../components/um-userdetails-edit/um-userdetails-edit.js';
import { UmEditUser } from '../../components/um-edit-user/um-edit-user.js';

export default class UserManagementApp extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
      'e-um-users-table': UmUsersTable,
      'e-um-add-user': UmAddUser,
      'e-um-userdetails-edit': UmUserdetailsEdit,
      'e-um-edit-user': UmEditUser,
      'eui-button': Button,
      'eui-icon': Icon,
    };
  }

  didConnect() {
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', { subtitle: this.metaData?.descriptionShort });
    //
    // this.bubble('app:title', { displayName: 'User Management' });
    // this.bubble('app:subtitle', { subtitle: '' });

    // create the button on app bar...
    const buttonElement = this.createElement('eui-button');
    buttonElement.innerHTML = 'Add User';
    buttonElement.id = 'add-user';
    buttonElement.primary = true;
    buttonElement.addEventListener('click', () => {
      window.EUI.Router.goto('user-management-app/add-user');
    });

    // create the table reload icon on app bar...
    const reloadIcon = this.createElement('eui-icon');
    reloadIcon.name = 'reload';

    // bubble the event 'app:actions' to add the button to the App Bar...
    this.bubble('app:actions', {
      actions: [buttonElement, reloadIcon],
    });
    // this.bubble('app:actions', {
    //   actions: [reloadIcon],
    // });
  }

  /**
   * Render the <e-user-management-app> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div class="user-management-app">
        <e-um-users-table></e-um-users-table>
      </div>
    `;
  }
}

definition('e-user-management-app', {
  style,
})(UserManagementApp);

UserManagementApp.register();
