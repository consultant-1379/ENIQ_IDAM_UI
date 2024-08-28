/**
 * Component UserProfile is defined as
 * `<e-user-profile>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './user-profile.css';
import { Tabs } from '@eui/layout/tabs';
import { Tab } from '@eui/layout/tab';
import { Tile } from '@eui/layout/tile';
import { TextField } from '@eui/base/text-field';
import { Button } from '@eui/base/button';
import { Icon } from '@eui/theme/icon';
import { Textarea } from '@eui/base/text-area';

export default class UserProfile extends LitComponent {
 //  Uncomment this block to add initialization code
 //  constructor() {
 //    super();
     // initialize       
 //  }

  static get components() {
    return {
      // register components here
         'eui-tabs':Tabs,
         'eui-tab':Tab, 
         'eui-tile': Tile,
         'eui-text-field': TextField,
         'eui-button': Button,
         'eui-icon':Icon,
         'eui-textarea':Textarea,
    };
  }

didRender(){
      this.bubble('app:title', { displayName: 'Profile' });    
    //console.log('in didconnect');
    setTimeout(()=>this._shadowdomstyle(),1000)

}
//getting password fields

_shadowdomstyle =()=>{
        let component = document.querySelector("eui-container").shadowRoot.querySelector("e-user-profile");
	let passwrd_fields = component.shadowRoot.querySelectorAll("#password-upate> div > eui-text-field");

      // console.log(passwrd_fields.length);
         console.log(passwrd_fields);
     if(passwrd_fields != null && passwrd_fields.length > 0 ){
	     for( let field of passwrd_fields){
		   field.shadowRoot.querySelector("input").setAttribute('style', '-webkit-text-security: disc!important;');
		 }
	  }

}
//password validator
validate =(password)=>{
    let minMaxLength = /^[\s\S]{8,}$/;
    let upper = /[A-Z]/; 
    let lower = /[a-z]/;
    let number = /[0-9]/;
    let special = /[@!$#%?]/;
    let notPermitted =/[ "&'()*+,\-./:;<=>[\\\]^_`{|}~]/;
    let count = 0;
   //console.log(password);

   if (minMaxLength.test(password) && !notPermitted.test(password) ){
        // Only need 3 out of 4 of these to match
        if (upper.test(password)) count++;
        if (lower.test(password)) count++;
        if (number.test(password)) count++;
        if (special.test(password)) count++;
    }
      console.log(count);
     //return count >= 3;
     return count == 4 ;
}
//form button disable and enable
disablebutton=(buttonPath,value)=>{
       if(value == 'enabled'){
	   if(buttonPath.hasAttribute('disabled')){
		buttonPath.removeAttribute('disabled');
	    }
	}
    if(value == 'disabled'){
	   buttonPath.setAttribute("disabled", "");
    }
}
//password validation
passwwordValidator =(event) =>{
    //calling and storing vale from  validate function
    const validateValue =this.validate(event.detail.value);
    const submitButtonPath = event.target.parentNode.parentNode.querySelector("div.form-submit > eui-button");
    const elementPath = event.target.shadowRoot.querySelector("div > div.input__prefix__suffix"); 
     console.log(this.validate(event.detail.value));
     console.log(event.target.tagName);
    if(validateValue === false){
      this.disablebutton(submitButtonPath,"disabled")
      //  event.target.setCustomValidity('Please enter the requested format.');
      //  elementPath.classList.add("invalid");
     }
    if(validateValue === true){
       //if(elementPath.classList.contains('invalid')){
       //    event.target.setCustomValidity('');
       //    elementPath.classList.remove("invalid");
       //  }

        this.disablebutton(submitButtonPath,"enabled")
     }
}
//check New and Re-enter password
passwordVerify=(event)=>{
  const reEnterPassword = event.detail.value;
  const newpassword = event.target.parentNode.parentNode.querySelector("div.new-password > eui-text-field").value;
  const submitButtonPath = event.target.parentNode.parentNode.querySelector("div.form-submit > eui-button");
  if((reEnterPassword != '') &&  (newpassword != '')){
      if(reEnterPassword == newpassword){
          console.log('Re-enter and new password same');
          this.disablebutton(submitButtonPath,"enabled");
          event.target.setCustomValidity('');
          this.passwwordValidator(event);          
        }
      if(reEnterPassword != newpassword){
          console.log('Re-enter and new password not same');
          this.disablebutton(submitButtonPath,"disabled");
          event.target.setCustomValidity('New and Re-enter password should be same.');
        }

   }

}

  /**
   * Render the <e-user-profile> component. This function is called each time a
   * prop changes.
   */
  render() {
   
   // return html`<h1>Your component markup goes here</h1>
     return html `<div class="container"> 
         <div class="page-header padding-sides">
             <div class="page-title"><h1>ENIQ User Self Service</h1></div>
             <div class="home-icon">
		<eui-link href="#todo-app/app-launcher">
		   <eui-icon name="home"></eui-icon>
		</eui-link>
	    </div>
         </div>
       <div class="user-profile">
       <! ––User Self Service  Tabs ––>
        <eui-tabs>
          <eui-tab class="first" selected>
           <label>Profile Update</label>
          </eui-tab>
          <eui-tab>
           <label>Password Update</label>
          </eui-tab>
          <eui-tab>
             <label>Setup Passwordless [RHEL]</label>
          </eui-tab>
          <! ––  Tabs content ––>
           <! –– profile-update  Tab content ––>
         <div slot="content" class="padding-sides" selected>
           <div class=" userprofile tab-content grid">	
              <div class="userprofile-form column-1">
                <form id="profile-update">		
		   <div class="first-name">
		      <eui-text-field name="first-name" placeholder="First Name" pattern="^[A-Za-z]+$"></eui-text-field>
		   </div>
                   <div class="last-name">
		      <eui-text-field name="last-name" placeholder="Last Name" pattern="^[A-Za-z]+$"></eui-text-field>
		   </div>			
		   <div class="email">
		       <eui-text-field name="email" placeholder="Email" pattern="^[\w.+\-]+@ericsson\.com$"></eui-text-field>
		   </div>
		   <div class="form-submit">
		       <eui-button class="btn-radius-pill">Update</eui-button>
		    </div>
	       </form>
             </div>			
	   </div>
         </div>
         <! ––password-upate  Tab content ––>
        <div slot="content" class="padding-sides">
           <div class="user-password tab-content grid">
              <div class=" user-password-form column-1">	
                  <form id="password-upate">		
		      <div class="old-password">
			  <label>Enter Old password</label>
		          <eui-text-field   name="old-password"  minlength="8" class="oldpassword"
                           pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$" 
                           maxlength="16" placeholder="Old password"
                           @change="${(event) =>this.passwwordValidator(event)}">
                          </eui-text-field>
		       </div>
                       <div class="new-password">
			  <label>Enter New password</label>
			  <eui-text-field name="new-password" class="newpassword"
                            pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$" 
			    minlength="8" maxlength="16" placeholder="New password"
                            @change="${(event) =>this.passwwordValidator(event)}">
                          </eui-text-field>
			</div>			
			<div class="re-enter-password">
			  <label>RE-Enter New password</label>
			  <eui-text-field name="re-enter-password" class="reenterpassword"
                            pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$#%?])[0-9A-Za-z@!$#%?]{8,16}$" 
			    minlength="8" maxlength="16" placeholder="Re-Enter password"
                            @change="${(event) =>this.passwordVerify(event)}">
                          </eui-text-field>
			</div>
			<div class="form-submit">
			  <eui-button class="btn-radius-pill">Update</eui-button>
		        </div>
		 </form>			
             </div>
	    <div class="user-password-content content column-2">
	        
	           <h3>Password Guidelines</h3>
                  <p>Password shall be 8-16 characters long,
                     should have atleast one number, one special character[!@#$%&*]</p>
	         	   
	   </div>
        </div>	
	
        </div>
      <! ––Setup Passwordless   Tab content ––>
       <div slot="content" class="padding-sides">
   	  <!--passwordLess setup  -->
		 <div class='passwordless-setup grid tab-content'>
			<div class="setup-button column-1">
			  <eui-button class="btn-radius-pill" fullwidth>
				Click here to start password-less setup
			  </eui-button>
			  <div class="message">
                            <eui-textarea name="status-message" cols="20" rows="3" readonly
			      placeholder="[execution status message i.e.success/failure to be displayed here]"  fullwidth>
			    </eui-textarea>
                          </div>
			</div>
			<div class='setup-content content column-2'>
			 <h3 class="tab-title">Note</h3>
			 <p>Passwordless setup is available only for ENIQ-S RHEL server access. 
			    The user should be preexisting in RHEL before initiating this password-less setup.</p>
			</div>
		 </div>
		 <!--private key -->
		 <div class='private-key grid'>
		    <div class="key-button column-1">
			   <eui-button class="btn-radius-pill" href="./user-profile.css" download="private-key" fullwidth>
                              Download Private key
                           </eui-button>
			</div>
			<div class="key-content content column-2">
				<h3 class="tab-title">Warning</h3>
				<p>The private key must be kept in a secure location and shall never be shared with anyone else.</p>
			</div>
 		 </div>
       </div>
       <! ––End Setup Passwordless Tab content  ––>
      </eui-tabs>
     </div>
</div>`;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-user-profile', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(UserProfile);
