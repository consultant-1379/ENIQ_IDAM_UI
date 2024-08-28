/**
 * TodoApp is defined as
 * `<e-todo-app>`
 *
 * @extends {App}
 */
import { App, html, definition } from '@eui/app';
import style from './todo-app.css';
//import { TextField, Button } from '@eui/base';
import { Dropdown } from '@eui/base/dropdown';
import { TextField } from '@eui/base/text-field';
import {  Button } from '@eui/base/button';
import {  Menu } from '@eui/base/menu';
import DateHeading from '../../components/date-heading/date-heading.js';
import UserProfile from '../../components/user-profile/user-profile.js';
import AppLauncher from '../../components/app-launcher/app-launcher.js';
import UserManagement from '../../components/user-management/user-management.js';
import UserAccessManagement from '../../components/useraccess-management/useraccess-management.js';
import Login from '../../components/login/login.js';
import LauncherPage from '../../components/launcher-page/launcher-page.js';
import EniqLauncher from  '../../components/eniq-launcher/eniq-launcher.js';


export default class TodoApp extends App {
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
    this.bubble('app:title', { displayName: 'Products and Applications' });
    this.bubble('app:subtitle', { subtitle: '' });
  }


//Fetching Data
_fetchData = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    await fetch(url)
         .then(response => response.json())
         .then(data =>{
          console.log(data);
          this.listItems = data.map((user)=>{
            //return html`<eui-menu-item value="${user.id}" label="${user.name}"></eui-menu-item>`
            return {id:user.id,name:user.name}
          });
          })
         .catch(error => console.log(error));
}
  /**
   * Render the <e-todo-app> app. This function is called each time a
   * prop changes.
   */
  render() {
         const displayList = this.listItems.map(item=>{
           return html`<eui-menu-item value="${item.id}" label="${item.name}"></eui-menu-item>`
           });
                   
                
	   // return html`<h1>Your app markup goes here</h1>`;
          return html`<e-date-heading class="d-none"></e-date-heading>
                 <div class='todo__button-bar d-none' >
                    <eui-button  primary>
			  Add
			</eui-button>
                     <eui-text-field
			  class='todo__text-field'
			  placeholder='What do you want to do?'
			  fullwidth ></eui-text-field>
               </div> 
               <div class="fetch_data d-none">
                 <eui-button
                   @click="${() => this._fetchData()}"
                   primary>
                 Fetch Data</eui-button>
               </div>
              <div class="item_list d-none" >
                <eui-menu class="userlist" type="single" show >
                ${displayList}
                </eui-menu>
              </div>

             <div class="app-launcher">
             <!--  <e-app-launcher></e-app-launcher> -->
             </div>
             <div class="login-block">
             <!--   <e-login></e-login>  -->
	           </div>
    
              <div class="admin-user d-none">
              <!--   <e-user-management></e-user-management> -->
              </div>   
              <div class="launcher">
               <e-launcher-page> </e-launcher-page>
	            </div>
  `;
  }
}

definition('e-todo-app', {
  style,
  props: {
    listItems: { attribute: false, type: Array, default: [] },
  },
})(TodoApp);

TodoApp.register();
