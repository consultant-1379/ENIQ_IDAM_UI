/**
 * Component Login is defined as
 * `<e-login>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './login.css';
import { Icon } from '@eui/theme/icon';
  
export default class Login extends LitComponent {
  // Uncomment this block to add initialization code
    constructor() {
     super();
     // initialize
        this.component_path='';
	this.user_list =[];
    }

  static get components() {
    return {
      // register components here
	'eui-icon':Icon,
    };
  }
 
//didConnect
didConnect(){
  this.users_list = [
     {username:"Bret",password:'Admin@123',access_type:"Admin"},
     {username:"Kamren",password:'Admin@123',access_type:"Eniq_Admin"}
  ];
}

//did Render
didRender(){
  this.component_path=document.querySelector("eui-container").shadowRoot.querySelector("e-todo-app")
               .shadowRoot.querySelector("e-login");
  setTimeout(()=>{ this.passwordStyle();},1000);
}

//make form input password 
passwordStyle = () =>{
      const passwrd_field = this.component_path.shadowRoot.querySelector(".login_form > form > .password > eui-text-field");
      console.log(passwrd_field.tagName);
      if( passwrd_field != null){
	    passwrd_field.shadowRoot.querySelector("input").setAttribute('style', '-webkit-text-security: disc!important;');
	}
}

//login form validation
form_validate =(username,password)=>{
  let count = 0;

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

   //validating fields
  // username field
     if(empty_field(username)){
         if(text_field(username)){count++;}
       }

  //password field
     if(empty_field(password)){
         if(passwrd_field(password)){count++;}
       }

  return count;
}

//store user in session
user_session=(user)=>{
    let user_details={name:user[0].username,access:user[0].access_type};
    localStorage.setItem('logged_users',JSON.stringify(user_details));
   // localStorage.setItem('myCat', 'Tom');
}

//reset login form fields
reset = (form_path) =>{
  let fields = form_path.querySelectorAll(' eui-text-field');
   if(fields.length > 0){
      for(let field of fields){
          field.value = '';
      }
   }
}

//login form submit
login_submit = (e)=>{
   let form_path = e.target.parentNode.parentNode;
   if(e.target.tagName == 'EUI-ICON'){
     form_path = e.target.parentNode.parentNode.parentNode;
   }
   console.log(e.target.tagName);
   console.log(form_path.tagName);
   const user_name = form_path.querySelector('div.user_name > eui-text-field');
   const password = form_path.querySelector('div.password > eui-text-field');
   console.log(user_name.tagName+" "+password.tagName);
   const count = this.form_validate(user_name,password);
   //  invalid user message path
        let parent_div = form_path.parentNode;
        let message = parent_div.querySelector(".user_notfound"); 

   if(count >= 2){
      let user = this.users_list.filter(user =>{
	  console.log(user);
	  if(user.username == user_name.value && user.password == password.value) 
           { return user}
	});
      console.log(user);
      if(user.length > 0)
       {
           console.log("login success");
	   if(message.classList.contains("show")){
	    message.classList.remove("show");
            message.classList.add("hide");
           }

           //reset fields
 	  this.reset(form_path);
	  //store user details in local
	  this.user_session(user);
          window.EUI.Router.goto(`todo-app/app-launcher/`);
       }
       else{
        console.log("user Notfound");
         if(message.classList.contains("hide")){
	     message.classList.remove("hide");
            message.classList.add("show");
           }
    
       }
   }

}
  /**
   * Render the <e-login> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
<div class="login">
   <div class="container">
        <div class="logo">
	     <eui-icon name="econ"></eui-icon>
             <div class="logo_name">Ericsson</div>
        </div>
        <div class="title">
	     <div class="heading">Ericsson Network IQ</div>
	</div>
        <div class="login_form">
	     <form class="form">
		<div class="user_name">
		     <eui-text-field name="username" placeholder="UserName" class="username" pattern="^[A-Za-z]+$">
		     </eui-text-field>
		</div>
		<div class="password">
		     <eui-text-field name="Password"" class="password"
                           pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$"
                           minlength="8" maxlength="16" placeholder="Password">
                      </eui-text-field>
		</div>
		<div class="submit">
		     <eui-button class="btn-radius-pill"
			@click="${(event)=>this.login_submit(event)}">
			 <eui-icon name="chevron-right"></eui-icon>
                     </eui-button>
		</div>
	     </form>
             <div class="hide user_notfound">User credentials not found</div>          
	</div>
        <div class="copy-right">
	    <p>@ Ericsson.com 2013-2022. All Right Reserved</p>
	</div>
   </div>
     
</div> `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-login', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(Login);
