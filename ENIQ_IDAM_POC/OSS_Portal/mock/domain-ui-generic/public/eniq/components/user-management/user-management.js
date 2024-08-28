/**
 * Component UserManagement is defined as
 * `<e-user-management>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './user-management.css';
import { Tabs } from '@eui/layout/tabs';
import { Tab } from '@eui/layout/tab';
import { TextField } from '@eui/base/text-field';
import { Button } from '@eui/base/button';
import { Icon } from '@eui/theme/icon';
import { Dropdown } from '@eui/base/dropdown';
import {  Menu } from '@eui/base/menu';

export default class UserManagement extends LitComponent {
  // Uncomment this block to add initialization code
   constructor() {
     super();
     // initialize
    this.users_list =[];
    this.component_path='';
    console.log('constructor');
   }

  static get components() {
    return {
      // register components here
         'eui-tabs':Tabs,
         'eui-tab':Tab,
         'eui-text-field': TextField,
         'eui-button': Button,
         'eui-icon':Icon,
         'eui-menu': Menu,
    };
  }

didConnect(){
  //page title
  this.bubble('app:title', { displayName: 'User Management' });
  //calling startup function 
   setTimeout(()=>this.startup_fun(), 1000);
   
   console.log('didConnect-user');
}

didRender(){
    this.component_path = document.querySelector("eui-container").shadowRoot.querySelector("e-user-management");
    console.log('didRender');
   setTimeout(()=>this.password_fields(), 1000);
}

//startup function
startup_fun=()=>{
 //calling user fetch
  this.fetch_userlist();
  setTimeout(()=>this.delete_users(this.users_list), 1000);
}


//fetching users list to 
fetch_userlist = async () =>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      await fetch(url)
           .then(response => response.json())
           .then(users =>{
                this.users_list = users.map((user)=>{return {id:user.id,name:user.username}  });
                console.log('inside fetch');
                })
           .catch(error => console.log(error));
}

//dynamic searchlist
 dynamic_searchlist =(euiMenu_path,users_list)=>{
 // const euiMenu_path = event.target.parentNode.querySelector("div > eui-menu");
 
 if(users_list.length > 0){
    //add users to menu items
     const euimenu_items= users_list.map(user=>{
         return  `<eui-menu-item value="${user.id}" label="${user.name}"></eui-menu-item>`
       });
       //adding menu items to menu
           euiMenu_path.innerHTML = euimenu_items.join('');
    }
}
//update user details form with selected user details 
update_userDetailsForm = (user_details) =>{
  const details= user_details[0];
  const form_path = this.component_path.shadowRoot.querySelector("form#user-create-form");
  // form fields
  const username = form_path.querySelector("div.user-name > eui-text-field");
  const firstname = form_path.querySelector("div.first-name > eui-text-field"); 
  const lastname = form_path.querySelector("div.last-name > eui-text-field");
  const email = form_path.querySelector("div.e-mail > eui-text-field");
  //update form fields
   username.value= details.name;
   firstname.value = details.name;
   lastname.value = details.name;
   email.value = details.name+'@ericsson.com';
}

//user search
user_search =(event)=>{
  const search_input = event.target;
  const search_value = event.detail.value;
  const euiMenu_path = event.target.parentNode.querySelector("div > eui-menu");
  let search_list =[];
 // console.log(search_value);
// show dynamic user list
 let  show_menulist =()=>{
     if(!euiMenu_path.classList.contains('show')){
             console.log('add class show');
             euiMenu_path.classList.add('show');
       }
 }
// hide  dynamic user list
  let hide_menulist =()=>{
      if(euiMenu_path.classList.contains('show')){
           console.log('remove class show');
           euiMenu_path.classList.remove('show');
       }
  }

//filter selected user from list and update user_data to form
let selected_user =(id)=>{
  const user=this.users_list.filter(user=>{
      if(id == user.id){return user}
   });
 
   //clearing search input
   search_input.value="";
 
  // hide menulist
   hide_menulist();
 //calling update_userDetailsForm
  this.update_userDetailsForm(user);
}
//addding Event Listener euimenu-item
let add_eventlistener = (menu_path)=>{
  console.log(menu_path.querySelectorAll("eui-menu-item"));
   menu_path.querySelectorAll("eui-menu-item").forEach(item=>{
         item.addEventListener('click',event => {
               console.log(event.target.value);
                selected_user(event.target.value);
          })
   });
}

//filtering users with search value
  if(search_value != ''){
   // filter users
    search_list = this.users_list.filter(user=>{
	if(user.name.toLowerCase().includes(search_value.toLowerCase())){
            return user }		
	});
     console.log(search_list.length);
   //add to dynamic searchlist 
    if(search_list.length > 0){
         show_menulist();
         this.dynamic_searchlist(euiMenu_path,search_list);  
        // adding event listener menu-item
       //console.log(euiMenu_path.querySelectorAll("eui-menu-item"));
        add_eventlistener(euiMenu_path);
      }else{
         hide_menulist();
      }      
  }
  else{  
      hide_menulist();
  }
 

}

//text fields into password style
passwordStyle = (passwrd_fields) =>{
       //const passwrd_fields = this.component_path.shadowRoot.querySelectorAll("#user-create-form > div.password > eui-text-field");
      //console.log(passwrd_fields.length);
     if(passwrd_fields != null && passwrd_fields.length > 0 ){
             for( let field of passwrd_fields){
                 field.shadowRoot.querySelector("input").setAttribute('style', '-webkit-text-security: disc!important;');
                  
                }
        }
}

//user mangament form text fields password fields
password_fields = () =>{
     // user creation form fields to password style
    const userCreation_passwrdFields = this.component_path.shadowRoot
				.querySelectorAll("#user-create-form > div.password > eui-text-field");
      this.passwordStyle(userCreation_passwrdFields);
     // Reset password form fields to password style
   const resetPassword_passwrdFields = this.component_path.shadowRoot
                                .querySelectorAll("#reset-form > div.password > eui-text-field");
     this.passwordStyle(resetPassword_passwrdFields);
}

//user details form validation 
 userform_validation =(path) =>{
  let count = 0;
  const username = path.querySelector("div.user-name > eui-text-field");
  const password  = path.querySelector("div.new-password > eui-text-field");
  const reenter_password  = path.querySelector("div.re-enter-password > eui-text-field");
  const firstname = path.querySelector("div.first-name > eui-text-field");
  const lastname = path.querySelector("div.last-name > eui-text-field");
  const email = path.querySelector("div.e-mail > eui-text-field");
  console.log(path.tagName);
//check text field not empty
let empty_field=(field)=>{
    if(field.value == ''){
       field.setCustomValidity('Please enter value.'); 
       return false;
     }else{
      field.setCustomValidity('');
       return true;
     }
  }
//only text field validation
let  text_field=(field)=>{
      const pattern = /^[A-Za-z]+$/;
      if(pattern.test(field.value)){
           field.setCustomValidity('');
            return true;
        }else{
            field.setCustomValidity('Please match the requested format.');
           return false;
        }
  }
//password field validation
let  passwrd_field=(field)=>{
        const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$/;
        if(pattern.test(field.value)){
            field.setCustomValidity('');
            return true;
         }else{
            field.setCustomValidity('Please match the requested format.');
           return false;
        }
   }
//Email field validation
let  email_field =(field)=>{
     const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     if(pattern.test(field.value)){
            field.setCustomValidity('');
            return true;
         }else{
            field.setCustomValidity('Please match the requested format.i.e jone@ericsson.com');
           return false;
        }
  }
//validating fields
// username field
   if(empty_field(username)){
       if(text_field(username)){count++;}
     }
//password field
   if(empty_field(password)){
       if(passwrd_field(password)){count++;}
     }
//Re-enter password field
   if(empty_field(reenter_password)){
       if(passwrd_field(reenter_password)){
            if(reenter_password.value != password.value){
                    reenter_password.setCustomValidity('Re-enter password should same as password.');
               }else{
           	    reenter_password.setCustomValidity('');
                    count++;
              }
         }
     }

//First Name field
   if(empty_field(firstname)){
       if(text_field(firstname)){count++;}
     }
//Last Name field
     if(empty_field(lastname)){
       if(text_field(lastname)){count++;}
     }
//Email field
      if(empty_field(email)){
       if(email_field(email)){count++;}
     }
  console.log(count);
  return count
}
//user details form validation and submit
  userform_submit = (event) =>{
  let form_valus ={};
  const form_path =  event.target.parentNode.parentNode;
      //calling userform_validation function
  let count =  this.userform_validation(form_path);

      if(count >= 6){

	event.target.parentNode.parentNode.querySelectorAll("div > eui-text-field").forEach(field =>{
        let name = field.name;
        let value = field.value; 
        console.log(name+' '+ value);
         let temp = {...form_valus, name:value};
         form_valus = temp ;
         field.value = '';
	}); 
        console.log(form_valus);
      }
 }

//users list for  delete
delete_users = (users_list)=>{
   const euiMenu_path = this.component_path
                 .shadowRoot.querySelector("div.user-management > eui-tabs .user-delete div.user-list > eui-menu");
  // users_list = [];
    if(users_list != null && users_list.length > 0){
       let menu_items = users_list.map(user=>{
		return `<eui-menu-item value="${user.id}" label="${user.name}"></eui-menu-item>	`;
		}); 
      euiMenu_path.innerHTML = menu_items.join('');
     }
     else{
       euiMenu_path.innerHTML = `<eui-menu-item value="" label="No User found" disabled></eui-menu-item>`;
     }

}

//delete user
delete_user =(event)=>{
   const eui_menu = event.target.parentNode.parentNode.querySelector("div > eui-menu");
   const selected_users = eui_menu.querySelectorAll("eui-menu-item[selected]");
   if(selected_users.length > 0){
      for(let user of selected_users){
          console.log('user id-'+user.value);
      }
   }
   else{
       console.log('select user from list');
   }

}


  /**
   * Render the <e-user-management> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<div class="container">
         <! ––page title ––>
        <div class="page-header padding-sides">
           <div class="page-title"><h1>ENIQ User Management</h1></div>
           <div class="home-icon">
               <eui-link href="#todo-app/app-launcher/">
                  <eui-icon name="home"></eui-icon>
             </eui-link>
           </div>
        </div>  
        <! ––user management tabs ––> 
       <div class="user-management tabsblock">
           <eui-tabs>
	    <! –– tabs ––>
		<eui-tab class="first" selected>
			<label>User Creation</label>
		</eui-tab>
		<eui-tab>
			<label>User Deletion</label>
		</eui-tab>
		<eui-tab>
                        <label>Reset Password</label>
                </eui-tab>

             <! –– tabs content ––>
		<div slot="content" selected>
		    <div class="tab-content">
                         <! –– search block ––>
                       <div class="user-search">
			       <div class="search-title">User Search</div>
			       <div class="serch-field">
			       	   <eui-text-field placeholder="Enter Username" name="item"
					@input="${(event) =>this.user_search(event)}">>
                                         <eui-icon slot="icon" name="search"></eui-icon>
                                   </eui-text-field>
                                   <div class="search-list">
					<eui-menu class="userlist " type="single" >
               				  
                                           <eui-menu-item value="" label="No user found" disable></eui-menu-item>
                                           
                			</eui-menu>
						
				   </div>
			      </div>
			</div>
			
                        <div class="user-details grid">
                           <! –– user details form ––>
			 <div class="user-details-form column-1">
                            <h3>Enter User Details</h3>
                            <form id="user-create-form">
		                <div class="user-name">
			             <label>UserName</label>
				     <eui-text-field name="username" placeholder="UserName" class="username"
				     pattern="^[A-Za-z]+$"></eui-text-field>
				</div>
				<div class="new-password password">
				     <label>Enter password</label>
			             <eui-text-field name="new-Password"" class="newpassword" 
				        pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$" 
					minlength="8" maxlength="16" placeholder="Password">
                                      </eui-text-field>
			         </div>
				 <div class="re-enter-password password">
			              <label>RE-Enter  password</label>
			              <eui-text-field name="reenter-password" class="reenterpassword" 
				         pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$" 
			                 minlength="8" maxlength="16" placeholder="Re-Enter password">
                                      </eui-text-field>
			          </div>
			          <div class="first-name">
			               <label>FirstName</label>
		                       <eui-text-field name="first-name" placeholder="First Name" class="firstname" 
                                        pattern="^[A-Za-z]+$"></eui-text-field>
		                  </div>
			          <div class="last-name">
			               <label>LastName</label>
		                       <eui-text-field name="last-name" placeholder="Last Name" class="lastname"
                                       pattern="^[A-Za-z]+$"></eui-text-field>
		                  </div>
			          <div class="e-mail">
			               <label>Email</label>
				       <eui-text-field name="email" placeholder="Email" class="lastname" class="email"
                                       pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"></eui-text-field>
				  </div>
                                  <div class="form-submit">
		                         <eui-button class="btn-radius-pill"
                                          @click="${(event)=>this.userform_submit(event)}">
                                            Create
				         </eui-button>
		                  </div>
			    </form>
                        </div>
                         <! –– user password guidelines ––>
		        <div class="password-guidelines column-2">
                           <h3>Password Guidelines</h3>
                           <p>Password shall be 8-16 characters long,
                            should have atleast one number, one special 
                            character[!@#$%&amp;*] </p>
		        </div>
		    </div>
                 </div>
	   </div>
            <!--user delete -->
		<div slot="content">
		     <div class="tab-content">
			   <div class="user-delete">
			      <div class="title">Select user to Delete</div>
				  <div class="user-list">
			            <div class="list-title">Users</div>
				     <eui-menu type="single">
					 <!--userList-->
					<!-- <eui-menu-item value="user-1" label="user 1"></eui-menu-item>
					   <eui-menu-item value="user-2" label="user 2"></eui-menu-item>
					   <eui-menu-item value="user-3" label="user 3"></eui-menu-item>
					   <eui-menu-item value="user-4" label="user 4"></eui-menu-item>
					   <eui-menu-item value="user-5" label="user 5"></eui-menu-item>
					   <eui-menu-item value="user-6" label="user 6"></eui-menu-item>-->
			             </eui-menu>
				  </div>
				  <div class="delete-button">
				      <eui-button class="btn-radius-pill"
					@click="${(event)=>this.delete_user(event)}">
					Delete User
				      </eui-button>
				  </div>
			   </div>
		      </div>
		</div>
         <!-- Reset password -->
           <div slot="content">
	        <div class="tab-content">
		     <div class="reset-password grid">
   			  <div class="reset-form column-1">
				<form class="form" id="reset-form">
				    <div class="user-name">
                                     	<label>UserName</label>
                                     	<eui-text-field name="username" placeholder="UserName" class="username"
                                     	  pattern="^[A-Za-z]+$">
					</eui-text-field>
                                    </div>
                                    <div class="new-password password">
                                    	 <label>Enter password</label>
                                     	 <eui-text-field name="new-Password"" class="newpassword"
                                             pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$"
                                             minlength="8" maxlength="16" placeholder="Password">
                                         </eui-text-field>
                                    </div>
                                    <div class="re-enter-password password">
                                         <label>RE-Enter  password</label>
                                         <eui-text-field name="reenter-password" class="reenterpassword"
                                              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$"
                                              minlength="8" maxlength="16" placeholder="Re-Enter password">
                                         </eui-text-field>
                                     </div>
				     <div class="form-submit">
                      			 <eui-button>Submit</eui-button>
                   		     </div>

				</form>
			  </div>
		          <div class="password-guidelines  column-2">
				<h3>Password Guidelines</h3>
				<p>Password shall be 8-16 characters long,
                                   should have atleast one number, one special 
                                   character[!@#$%&*] </p>
			  </div>
                     </div
		</div>
	   </div>
         </eui-tabs>
      </div>
      
</div>`;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-user-management', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(UserManagement);
