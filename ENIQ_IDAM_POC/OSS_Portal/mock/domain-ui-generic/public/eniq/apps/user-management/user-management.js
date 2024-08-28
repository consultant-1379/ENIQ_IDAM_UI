/**
 * UserManagement is defined as
 * `<e-user-management>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import style from './user-management.css';

export default class UserManagement extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
    };
  }

  didConnect() {
    this.bubble('app:title', { displayName: 'User Management' });
    this.bubble('app:subtitle', { subtitle: '' });
  }

  /**
   * Render the <e-user-management> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<h1>Your app markup goes here</h1>`;
  }
}

definition('e-user-management', {
  style,
})(UserManagement);

UserManagement.register();
