/**
 * Component UseraccessManagement is defined as
 * `<e-useraccess-management>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './useraccess-management.css';
import { Tabs } from '@eui/layout/tabs';
import { Tab } from '@eui/layout/tab';
import { TextField } from '@eui/base/text-field';
import { Button } from '@eui/base/button';
import { Icon } from '@eui/theme/icon';
import { Dropdown } from '@eui/base/dropdown';
import {  Menu } from '@eui/base/menu';

 
export default class UseraccessManagement extends LitComponent {
  // Uncomment this block to add initialization code
   constructor() {
     super();
     // initialize
        this.users_list =[];
        this.applications_list =[];
        this.groupMemberships_list =[];
        this.component_path='';
	this.usersaccess_details =[];
      
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

 //didConnect
didConnect(){
 //page title
  this.bubble('app:title', { displayName: 'User and Access Management' });
 setTimeout (()=>{this.startup_fun()},1000);
 this.usersaccess_details =[
 {id:1,name:'Bret',app_map:['NrtAN','BI'],group_mem:['NetAn_Admin','BI_Everyone']}, 
 {id:2,name:'Antonette',app_map:['Windows','BI'],group_mem:['BI_Everyone','Windows_Guest']} 
 ];
 this.applications_list = ['NetAN','BI','RHEL','Windows','AdminUI'];
 this.groupMemberships_list = ['NetAn_Admin','BI_Everyone','BI_Administrators','RHEL_Admin',
                        'Windows_Guest','Windows_Admin','BI_Translator'];
}
 
 //did Render
didRender(){
  this.component_path = document.querySelector("eui-container").shadowRoot.querySelector("e-useraccess-management");
  setTimeout(()=>{
       this.passwordStyle();
       this.hide_searchMenuList();
  },1000);

}

//startup function
startup_fun=()=>{
  //loading values to eui-menu on  app-mapping and group membership
  this.app_mapping();
  this.group_membership();
 //loading user modify app and group-membership  menus
  this.load_userModifyMenus();
  //calling user fetch
  this.fetch_userlist();
  //loading users to user delete menu
  setTimeout(()=>{
	this.delete_users(this.users_list);
       this.userAccess_userslist(this.users_list);
  }, 1000);
}

//fetching users list to
fetch_userlist = async () =>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      await fetch(url)
           .then(response => response.json())
           .then(users =>{
                this.users_list = users.map((user)=>{
                   return {id:user.id,name:user.username}
                        });
                console.log('inside fetch');
                })
           .catch(error => console.log(error));
}


 //returing eui-menu-item
euimemu_item=(value,label)=>{
    return `<eui-menu-item value="${value}" label="${label}"></eui-menu-item>`;
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

//user search on not focus hide user menu list
hide_searchMenuList = () =>{
   const searchInput_path = this.component_path.shadowRoot
                .querySelector(".tabsblock > eui-tabs .user-search > .serch-field ");
   const euiMenu_path = searchInput_path.querySelector("div > eui-menu");
   searchInput_path.addEventListener('focusout', (event) => {
         setTimeout(()=>{
             if(euiMenu_path.classList.contains('show')){
                 console.log('remove class show');
                 euiMenu_path.classList.remove('show');
              }
          },500);
   });
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

  //dynamic searchlist
  let dynamic_searchlist =(menu_path,users_list)=>{     
      if(users_list.length > 0){
      //add users to menu items
       const euimenu_items= users_list.map(user=> this.euimemu_item(user.id,user.name) );
        //adding menu items to menu
        menu_path.innerHTML = euimenu_items.join('');
      }
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
           dynamic_searchlist(euiMenu_path,search_list);
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

}//user search end

//make form input password 
passwordStyle = () =>{
        const passwrd_fields = this.component_path.shadowRoot.querySelectorAll("#user-create-form > div.password > eui-text-field");
        //console.log(passwrd_fields.length);
       if(passwrd_fields != null && passwrd_fields.length > 0 ){
               for( let field of passwrd_fields){
                   field.shadowRoot.querySelector("input").setAttribute('style', '-webkit-text-security: disc!important;');
  
                  }
          }
}
//adding  menuitems in application and group memberships
adding_menitems =(menu_path,menuitems_values)=>{
    const menuitems =  menuitems_values.map(item => this.euimemu_item(item,item));
     if(menuitems.length > 0){
        menu_path.innerHTML =menuitems.join('');
     }else{
         menu_path.innerHTML = '<eui-menu-item value="" label="No Result Found" disable></eui-menu-item>';
     }

}

 //Application Mapping
app_mapping=()=>{
   
    const menu_path = this.component_path.shadowRoot.querySelector("eui-tabs .user-details  div.app-mapping > eui-menu");
    this.adding_menitems(menu_path,this.applications_list); 
   
}//App-Mapping end

//Group Memberships
group_membership=()=>{

  const  menu_path = this.component_path.shadowRoot.querySelector("eui-tabs .user-details div.group-membership  eui-menu");
  this.adding_menitems(menu_path,this.groupMemberships_list);
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

 //get multi select menu  values
multiselect_menu = (menu_path) =>{
    let items_value = [];
    const menu_items = menu_path.querySelectorAll("eui-menu-item[selected]");
    if(menu_items.length > 0){
        for(let item of menu_items){
           items_value.push(item.value);
        }
        return items_value;
     }
     else{
       return null;
     }
} 
 
 //Select Application Mappings values
app_map_values = () =>{
     const menu_path = this.component_path.shadowRoot.querySelector("eui-tabs  div.app-mapping > eui-menu");
     let selected_app = this.multiselect_menu(menu_path);
     if(selected_app != null){
       return selected_app;
     }
}
//Select Group Memberships
group_mem_values = () =>{
   const menu_path = this.component_path.shadowRoot.querySelector("eui-tabs  div.group-membership  eui-menu");
   let selected_group = this.multiselect_menu(menu_path);
    if(selected_group != null){
       return selected_group;
     }

}

 //user details form submit
userform_submit = (event) =>{
    let form_valus ={};
    const form_path =  event.target.parentNode.parentNode;

    // calling userform_validation
    let count =  this.userform_validation(form_path);
    //get  Application Mappings values
    let app_map =  this.app_map_values();
    //get Group Memberships values
    let group_mem = this.group_mem_values(); 

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
    if(app_map != ''){console.log(app_map)}
    if(group_mem != ''){console.log(group_mem);}
}

//userAccess_modification

//loading menu items userAccess modify application and Group membership
load_userModifyMenus=()=>{
  const app_menupath = this.component_path.shadowRoot
      .querySelector("div > div.useraccess-management.tabsblock > eui-tabs .useraccess-modify .app-mapping > eui-menu");
  const group_memupath = this.component_path.shadowRoot
      .querySelector("div > div.useraccess-management.tabsblock > eui-tabs .useraccess-modify .group-membership > eui-menu");
   // adding application menu items
     this.adding_menitems(app_menupath,this.applications_list);
   // adding Group membership  menu items
    this.adding_menitems(group_memupath,this.groupMemberships_list)
}

//loading users into user_list
loading_users = (menu_path,users_list) =>{
   if(users_list != null && users_list.length > 0){
             let menu_items = users_list.map(user=> this.euimemu_item(user.id,user.name));
             menu_path.innerHTML = menu_items.join('');
      }
      else{
           menu_path.innerHTML = `<eui-menu-item value="" label="No User found" disabled></eui-menu-item>`;
      }

}

//usesrAccess modify selecting user
selected_accessuser =(id) => {
  const app_menupath = this.component_path.shadowRoot
      .querySelector("div > div.useraccess-management.tabsblock > eui-tabs .useraccess-modify .app-mapping > eui-menu");
  const group_memupath = this.component_path.shadowRoot
      .querySelector("div > div.useraccess-management.tabsblock > eui-tabs .useraccess-modify .group-membership > eui-menu");
  const selected_user = this.usersaccess_details.filter(user => {if(user.id == id) return user});
  let app_map = [];  let group_mem = [];
   if(selected_user.length > 0){
     if(selected_user[0].hasOwnProperty('app_map')){app_map = selected_user[0].app_map;}
     if(selected_user[0].hasOwnProperty('group_mem')){group_mem = selected_user[0].group_mem;}
   }
  console.log(selected_user);
  //select memu item for user
  let select_menuitems = (memu_path,values)=>{
      const menu_items = memu_path.querySelectorAll("eui-menu-item");
      console.log(menu_items);
      console.log(values)
      menu_items.forEach(item => { 
            if(item.hasAttribute("selected")){item.removeAttribute("selected");}                   
      });
      if(menu_items.length > 0 && values.length > 0){
           for(let value of values){
              for(let item of menu_items){
	         if(value == item.value){
		    item.setAttribute('selected','');
		 }
	      }
           }
       }
  }
  select_menuitems(app_menupath,app_map);
  select_menuitems(group_memupath,group_mem);
}

//users list for userAccess_modify
userAccess_userslist = (users_list) =>{
   const euiMenu_path = this.component_path
                 .shadowRoot.querySelector("div.useraccess-management > eui-tabs .useraccess-modify .users .user-list > eui-menu");
   this.loading_users(euiMenu_path,users_list);
  //addding Event Listener euimenu-item
  let add_eventlistener = (menu_path)=>{
    //console.log(menu_path.querySelectorAll("eui-menu-item"));
     menu_path.querySelectorAll("eui-menu-item").forEach(item=>{
           item.addEventListener('click',event => {
                 console.log(event.target.value);
                  this.selected_accessuser(event.target.value);
            })
     });
  }//event listener
  add_eventlistener(euiMenu_path);
}

 //user Access update button
update_useraccess = () =>{
   const user_menupath = this.component_path.shadowRoot
                 .querySelector("div.useraccess-management > eui-tabs .useraccess-modify .users .user-list > eui-menu");  
   const app_map_menupath = this.component_path.shadowRoot
      .querySelector("div > div.useraccess-management.tabsblock > eui-tabs .useraccess-modify .app-mapping > eui-menu");
  const group_membership_memupath = this.component_path.shadowRoot
      .querySelector("div > div.useraccess-management.tabsblock > eui-tabs .useraccess-modify .group-membership > eui-menu");

  const user = this.multiselect_menu(user_menupath);
  const app_map = this.multiselect_menu(app_map_menupath);
  const group_membership = this.multiselect_menu(group_membership_memupath);
 // console.log(user);console.log(app_map);console.log(group_membership);
 let user_access_details ={id:user[0]};
  if(app_map != null){user_access_details["app_map"]=app_map}
  if(group_membership != null){ user_access_details["group_mem"]=group_membership}
  if( (app_map != null) || (group_membership != null)){
    console.log(user_access_details);
  }
}

//delete user
//users list for  and user delete
delete_users = (users_list)=>{
     const euiMenu_path = this.component_path
             .shadowRoot.querySelector("div.useraccess-management > eui-tabs .user-delete .user-list > eui-menu");
     if(users_list != null && users_list.length > 0){
             let menu_items = users_list.map(user=> this.euimemu_item(user.id,user.name));
             euiMenu_path.innerHTML = menu_items.join('');
      }
      else{
           euiMenu_path.innerHTML = `<eui-menu-item value="" label="No User found" disabled></eui-menu-item>`;;
      }
}


//delete user
delete_user =(event)=>{
   const eui_menu = event.target.parentNode.parentNode.querySelector("div > eui-menu");
   const selected_users = eui_menu.querySelectorAll("eui-menu-item[selected]");
   if(selected_users.length > 0){
      for(let user of selected_users){
           if(this.users_list.length > 0){
              let deleted_user = this.users_list.filter(u => {if(u.id == user.value)return u});
              console.log(deleted_user);
	    }
          console.log('user id-'+user.value);
      }
   }
   else{
       console.log('select user from list');
   }
}

   
  /**
   * Render the <e-useraccess-management> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<div class="container">
          <! ––page title ––>
        <div class="page-header padding-sides">
           <div class="page-title"><h1>ENIQ User and Access Management</h1></div>
           <div class="home-icon">
               <eui-link href="#todo-app/app-launcher/">
                  <eui-icon name="home"></eui-icon>
             </eui-link>
           </div>
        </div>
     <div class="useraccess-management tabsblock">
       <! –– tabs ––>
       <eui-tabs>
             <eui-tab class="first" selected>
                      <label>User Creation</label>
             </eui-tab>
              <eui-tab>
                     <label>User Access Modification</label>
             </eui-tab>

             <eui-tab>
                     <label>User Deletion</label>
             </eui-tab>
         <! –– tabs content ––>
	 <!––   User Creation  ––>
            <div slot="content" selected>
                 <div class="tab-content">
                      <! –– search block ––>
                       <div class="user-search">
                               <div class="search-title">User Search</div>
                               <div class="serch-field">
                                   <eui-text-field placeholder="Enter Username" name="item"
                                        @input="${(event) => this.user_search(event)}" >
                                         <eui-icon slot="icon" name="search"></eui-icon>
                                   </eui-text-field>
                                   <div class="search-list">
                                        <eui-menu class="userlist " type="single" >
                                             <eui-menu-item value="" label="No user found" disable></eui-menu-item>
                                        </eui-menu>

                                   </div>
                              </div>
                        </div>
                      <!-- user details form -->
                     <div class="user-details grid">
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
                                    <eui-text-field name="email" placeholder="Email" class="email" class="email"
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
                    <!-- user password guidelines -->
                       <div class="password-guidelines column-2">
                          <h3>Password Guidelines</h3>
                         <p>Password shall be 8-16 characters long,
                           should have atleast one number, one special
                           character[!@#$%&amp;*].
                          </p>
                      </div>
                    <!--Application mappings  -->
                        <div class="app-mapping column-3">
                           <h3>Select Application Mappings</h3>
                           <eui-menu type="multi" class="show multi-select-menu">
				   <eui-menu-item value="" label="No Result found" disabled></eui-menu-item>
                               <!--   <eui-menu-item value="NrtAN" label="NrtAN"></eui-menu-item>
                                      <eui-menu-item value="BI" label="BI"></eui-menu-item>
                                      <eui-menu-item value="RHEL" label="RHEL"></eui-menu-item>
                                      <eui-menu-item value="Windows" label="Windows"></eui-menu-item>
                                      <eui-menu-item value="AdminUI" label="AdminUI"></eui-menu-item>  -->
                           </eui-menu>
                        </div>
                    <!--Group membership  -->
                        <div class="group-membership column-4">
			    <h3>Select Group Memberships</h3>
			     <div class="group-block">
                         	 <div class="list-title hide">Select</div>
                         	 <eui-menu type="multi" class="show multi-select-menu">
                                     <eui-menu-item value="" label="No Result found" disabled></eui-menu-item>
                             	 <!--     <eui-menu-item value="user-1" label="NetAn_Admin"></eui-menu-item>
                             	      <eui-menu-item value="user-2" label="BI_Everyone"></eui-menu-item>
                              	      <eui-menu-item value="user-3" label="BI_Administrators"></eui-menu-item>
                             	      <eui-menu-item value="user-4" label="RHEL_Admin"></eui-menu-item>
                             	      <eui-menu-item value="user-5" label="Windows_Guest"></eui-menu-item>
                                      <eui-menu-item value="user-6" label="Windows_Admin"></eui-menu-item>
                             	      <eui-menu-item value="user-6" label="BI_Translator"></eui-menu-item> -->
                        	 </eui-menu>
                   	  </div>
                 	 <!-- -->

                        </div>
                   </div>
               
                 </div> <!-- user details tab content end -->
            </div>
        <!--User Access Modification -->
           <div slot="content">
                <div class="tab-content">
                     <!--user-modify-->
                     <div class="useraccess-modify grid">
		   	<!--user list-->
        		  <div class="users column-1">
            			<div class="title">Select user</div>
            			<div class="user-list">
				   <div class="list-title">Users</div>
                		    <eui-menu type="single" class="show multi-select-menu">
					<eui-menu-item value="" label="No User found" disabled></eui-menu-item>
                     		  <!--	<eui-menu-item value="user-1" label="user 1"></eui-menu-item>
                      			<eui-menu-item value="user-2" label="user 2"></eui-menu-item>
                      			<eui-menu-item value="user-3" label="user 3"></eui-menu-item>
                      			<eui-menu-item value="user-4" label="user 4"></eui-menu-item>
                      			<eui-menu-item value="user-5" label="user 5"></eui-menu-item>
                      			<eui-menu-item value="user-6" label="user 6"></eui-menu-item>-->
                		    </eui-menu>
                                </div>
				 <div class="delete-button">
                                     <eui-button class="btn-radius-pill"
                                        @click="${(event)=>this.update_useraccess()}">
                                        Update User Mappings
                                     </eui-button>
                                 </div>

        		  </div>
			 <!--app mapping modify -->
       			  <div class="app-mapping column-2">
            			<div class="title">Select Application Mappings</div>
                		<eui-menu type="multi" class="show multi-select-menu">
				    <eui-menu-item value="" label="No Result found" disabled></eui-menu-item>
                    		<!--<eui-menu-item value="NrtAN" label="NrtAN"></eui-menu-item>
                                    <eui-menu-item value="BI" label="BI"></eui-menu-item>
                                    <eui-menu-item value="RHEL" label="RHEL"></eui-menu-item>
                                    <eui-menu-item value="Windows" label="Windows"></eui-menu-item>
                                    <eui-menu-item value="AdminUI" label="AdminUI"></eui-menu-item>-->  
                                 </eui-menu>

                          </div>
			<!--group membership modify  -->
                         <div class="group-membership column-3">
           			<div class="title">Select Group Memberships</div>
            			<eui-menu type="multi" class="show multi-select-menu">
				    <eui-menu-item value="" label="No Result found" disabled></eui-menu-item>
                         	    <!-- <eui-menu-item value="NetAn_Admin" label="NetAn_Admin"></eui-menu-item>
                                     <eui-menu-item value="BI_Everyone" label="BI_Everyone"></eui-menu-item>
                                     <eui-menu-item value="BI_Administrators" label="BI_Administrators"></eui-menu-item>
                    		     <eui-menu-item value="RHEL_Admin" label="RHEL_Admin"></eui-menu-item>
                     		     <eui-menu-item value="Windows_Guest" label="Windows_Guest"></eui-menu-item>
                    		     <eui-menu-item value="Windows_Admin" label="Windows_Admin"></eui-menu-item>
                    		     <eui-menu-item value="BI_Translator" label="BI_Translator"></eui-menu-item> -->
            			</eui-menu>

        		</div>
                    </div>
                     <!--end user-modify-->
                </div>
           </div>
       <!--User Deletion-->
           <div slot="content">
                <div class="tab-content">
                   <div class="user-delete">
                         <div class="title">Select user to Delete</div>
                             <div class="user-list">
                               <div class="list-title">Users</div>
                                <eui-menu type="single">
                                    <!-- //userList -->
                                    <eui-menu-item value="user-1" label="user 1"></eui-menu-item>
                                      <eui-menu-item value="user-2" label="user 2"></eui-menu-item>
                                      <eui-menu-item value="user-3" label="user 3"></eui-menu-item>
                                      <eui-menu-item value="user-4" label="user 4"></eui-menu-item>
                                      <eui-menu-item value="user-5" label="user 5"></eui-menu-item>
                                      <eui-menu-item value="user-6" label="user 6"></eui-menu-item>
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


       </eui-tabs>
   </div>
<! ––container end ––>
 </div> `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-useraccess-management', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(UseraccessManagement);
