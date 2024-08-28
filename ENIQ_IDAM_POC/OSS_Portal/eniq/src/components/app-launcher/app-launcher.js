/**
 * Component AppLauncher is defined as
 * `<e-app-launcher>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './app-launcher.css';
import { Dropdown } from '@eui/base/dropdown';
import { Icon } from '@eui/theme/icon';
import { Link } from '@eui/base/link';

export default class AppLauncher extends LitComponent {
  // Uncomment this block to add initialization code
   constructor() {
     super();
     // initialize
    this.timerInterval = '';
    this.component_path='';
    this.login_user="";
   }

  static get components() {
    return {
      // register components here
        'eui-dropdown': Dropdown,
        'eui-icon':Icon,
        'eui-link':Link,
    };
  }

didConnect(){
 //page title
  this.bubble('app:title', { displayName: 'Application Launcher' }); 
  this.timerInterval = setInterval(this.timerFunction, 1000);
  console.log('didConnect');
  this.logged_user(); 
}

//did Render
didRender(){
  this.component_path= document.querySelector("eui-container").shadowRoot.querySelector("e-app-launcher");
  console.log(this.accesstype);
 // console.log(localStorage.getItem('myCat'));
}

didDisconnect(){
  clearInterval(this.timerInterval);
  console.log('didDisconnect');
}

//get logged user from localstorage
logged_user =()=>{
  this.login_user = JSON.parse((localStorage.getItem("logged_users")));
  console.log(this.login_user);
  if(this.login_user == null){
    window.EUI.Router.goto('todo-app/');
  }
}

//timer function
timerFunction=()=>{
    let timeElement = this.component_path.shadowRoot.querySelector("div.bar-right > div.local-time > span.time");
    
    var datetime = new Date();
    let dateString = datetime.toString();
    let time = dateString.slice(16,21);
    let timeZone = dateString.match(/GMT\+[0-9]+/)[0];
    if(timeElement != null){
         timeElement.innerHTML=time+"<span>("+timeZone+")</span>";
        // console.log(time+' '+timeZone);
     }
}

 //Based on access_type routing to user & Access managment path 
admin_path = () =>{
  if(this.login_user != null){
      if(this.login_user.access == "Admin"){
          window.EUI.Router.goto('todo-app/user-management');  
       }
      if(this.login_user.access == "Eniq_Admin"){
          window.EUI.Router.goto('todo-app/useraccess-management');
      }
  }
}
//user logout
logout = ()=>{
  localStorage.removeItem('logged_users');
   window.EUI.Router.goto('todo-app/');
}
  /**
   * Render the <e-app-launcher> component. This function is called each time a
   * prop changes.
   */
  render() {
    //return html`<h1>Your component markup goes here</h1>`;
      return html`<div class="app-launcher">
      <! –– app-launcher-bar ––>
      <div class='launcher-bar'>
        <div class="bar-left"> 
		<eui-icon name="econ"></eui-icon>
         	<div class="title-left">Ericsson Network IQ</div>
        	 <div class="title-middle">Application Launcher</div>
        </div>
         <div class="bar-right">
            <div class="host">
	  	<eui-icon name="server"></eui-icon>
	  	<span>Host</span>
	    </div>
	    <div class="local-time">
       		<eui-icon name="time"></eui-icon>
               <span class='time'>10.25 <span>(GMT+1)</span></span>
	    </div>
	    <div class="help">
	  	<eui-icon name="help"></eui-icon>
	  	<eui-dropdown class="help-dropdown" data-type="click" label="Help">
			<eui-menu-item value="help-1" label="Help one" ></eui-menu-item>
			<eui-menu-item value="help-2" label="Help Two" ></eui-menu-item>
       		</eui-dropdown>
	   </div>
	   <div class="admin">
	    	<eui-icon name="avatar"></eui-icon>
	    	<eui-dropdown data-type="click" label="Administrator">
			<eui-menu-item value="profile" label="Profile" 
                          @eui-menuItem:click="${() =>window.EUI.Router.goto('todo-app/profile')}">
                        </eui-menu-item>
			<eui-menu-item value="user-access" label="User & Access management" 
			@eui-menuItem:click="${() =>this.admin_path()}">
			</eui-menu-item>
			<eui-menu-item value="logout" label="Logout" 
			@eui-menuItem:click="${() =>this.logout()}">
			</eui-menu-item>
       		 </eui-dropdown>
	  </div>
	
      </div>
  </div>
  <! –– app-launcher-bar end ––>
  <! –– app-launcher-body ––>
  <div class="hr-bar"></div>
  <div class="launcher-body">
  <! –– app-list ––>
  <div class="applist">
    <div class="title">
         <eui-icon name="app-launcher"></eui-icon>
         <span>Application</span>
    </div>
    <div class="list">
		<div class="list-item">
		   <eui-icon name="favorite-solid"></eui-icon>
		   <eui-link href="https://www.ericsson.com/en"" target="_blank">ENQI Application</eui-link>
		</div>
		<div class="list-item">
		   <eui-icon name="favorite-solid"></eui-icon>
		   <eui-link href="https://www.ericsson.com/en" target="_blank">Remote Desktop</eui-link>
		</div>
		<div class="list-item">
		   <eui-icon name="favorite-solid"></eui-icon>
		   <eui-link href="https://www.ericsson.com/en" target="_blank">Network Application</eui-link>
		</div>
		
		<div class="list-item">
		   <eui-icon name="favorite-solid"></eui-icon>
		   <eui-link href="https://www.ericsson.com/en" target="">Information Application</eui-link>
		</div>
		
		<div class="list-item">
		   <eui-icon name="favorite-solid"></eui-icon>
		   <eui-link href="https://www.ericsson.com/en" target="">Network Analysis</eui-link>
		</div>
		
		<div class="list-item">
		   <eui-icon name="favorite-solid"></eui-icon>
		   <eui-link href="https://www.ericsson.com/en" target="">ENQI Servers</eui-link>
		</div>
  	</div>
  </div>
 <! –– app-list end ––>
</div>

  <! –– app-launcher-body ––>
 <! –– component  end ––>
 </div>`;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-app-launcher', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
    accesstype:{attribute: true,type:String},
  },
})(AppLauncher);
