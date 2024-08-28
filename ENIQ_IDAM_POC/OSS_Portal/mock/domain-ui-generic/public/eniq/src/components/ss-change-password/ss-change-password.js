/**
 * Component SsChangePassword is defined as
 * `<e-ss-change-password>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './ss-change-password.css';
import { Icon } from '@eui/theme/icon';
import { Button, PasswordField } from '@eui/base';

export default class SsChangePassword extends LitComponent {
  // Uncomment this block to add initialization code
  constructor() {
    super();
    // initialize
    this.userData={ username: 'ClOGNEci', firstname: 'Joe', lastname: 'Bloggs',
    email: 'j.bloggs@yahoo.com', app: 'NetAn', groups: 'NetAn ReadOnly', status: 'Disabled' }

  }

  static get components() {
    return {
      // register components here
      'eui-button':Button,
      'eui-password-field': PasswordField,
      'eui-icon': Icon,
    };
  }

//didConnect
didConnect(){
  this.bubble('app:lineage', { metaData: this.metaData });
  this.bubble('app:subtitle', {subtitle: this.metaData?.descriptionShort,});
  //password policies
  this.password_policy={ length:10, digit:2, lowercase:1, uppercase:1, special:1};
  //username
  this.username=this.userData.username;
  this.email=this.userData.email;
  this.userPassword="Demo@user"

}
//didRender
didRender(){
  //password policies ul list
  this.policies_list = this.shadowRoot.querySelectorAll("#policies-list li");
  //current password
  this.current_password = this.shadowRoot.querySelector("#current-password");
  //new password
  this.new_password = this.shadowRoot.querySelector("#new-password");
  //current password
  this.confirm_password = this.shadowRoot.querySelector("#confirm-password");
}
//change policy list Item icon
change_policyIcon(policyItem,policyclass,icon_name,icon_color){
  if(policyclass == "valid"){
    policyItem.classList.add("valid");
  }else{
    policyItem.classList.remove("valid");
  }
  if(!policyItem.firstElementChild.classList.contains("show")){
    policyItem.firstElementChild.classList.add("show");
  }
  policyItem.firstElementChild.name = icon_name;
  policyItem.firstElementChild.color = icon_color;
}
//compare and validat password

compare_password(policyItem,passwordValue,inputValue){
  const check=(value,pwd)=>{
    return pwd.match(/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+/ig).filter(a=> a.length > 3 && value.includes(a)).length > 0? true:false;
    }
  if(passwordValue != '') {
    if(check(inputValue,passwordValue)){
      this.change_policyIcon(policyItem,"invalid","cross","red");
      console.log("matching")
    }else{
      this.change_policyIcon(policyItem,"valid","check","green");
      console.log("Not matching")
    }

  }

}
//check current password with user password
check_currentPassword(currentPassword){
  if(currentPassword == this.userPassword){
    return true;
  }else{
    console.log("currentPassword not match");
    return false;
  }
}
//validating current password
validate_currentPassword(currentPassword){
  const newPassword=this.new_password.value;
  let policyItem = this.policies_list[8];
  if(newPassword !==''){
    if(newPassword !== currentPassword){
      this.change_policyIcon(policyItem,"valid","check","green");
      console.log("matching")
    }else{
      this.change_policyIcon(policyItem,"invalid","cross","red");
      console.log("Not matching")
    }
  }

}
//validating new password to match password policies
password_policies(password){
  //check password length
  const requirements = [
    { regex: /.{10,}/, index: 1 }, // Minimum of 10 characters
    { regex: /[a-zA-Z]{2,}/, index: 2 }, // At least 2 digits
    { regex: /[a-z]/, index: 3 }, // At least 1 lowercase letter
    { regex: /[A-Z]/, index: 4 }, // At least 1 uppercase letter
    { regex: /[^A-Za-z0-9]/, index: 5 }, // At least 1 special character
   ];
    // Check if the password matches
    requirements.forEach(item =>{
      // Check if the password matches the requirement regex
      const isValid = item.regex.test(password);
      const policyItem = this.policies_list[item.index];
      //displaying policy
      if(!policyItem.firstElementChild.classList.contains("show")){
          policyItem.firstElementChild.classList.add("show");
      }
      // Updating class and icon of requirement item if requirement matched or not
      if(isValid) {
        this.change_policyIcon(policyItem,"valid","check","green");
      } else {
        this.change_policyIcon(policyItem,"invalid","cross","red");
      }
    });

    // check password include username and email
    let password_value=password.toLowerCase();
    let user_name = this.username.toLowerCase();
    let username_policy=this.policies_list[6];
    //validating username
    this.compare_password(username_policy,password_value,user_name);
    //check email
    let email = this.email.toLowerCase();
    let email_policy=this.policies_list[7];
    //validating email
    this.compare_password(email_policy,password_value,email);
    //check current_password
     let currentPassword = this.current_password.value.toLowerCase();
     let currentPassword_policy = this.policies_list[8];
     //check currentPassword
     this.validate_currentPassword(this.current_password.value);
    //check with confirm-password
   this.validating_confirmPassword(this.confirm_password.value);
}

//validating confirm password
validating_confirmPassword(confirmPassword){
  const newPassword=this.new_password.value;
  let confirm_password =confirmPassword;
  let policyItem = this.policies_list[0];
  if(newPassword === confirm_password){
    this.change_policyIcon(policyItem,"valid","check","green");
    console.log("matching")
  }else{
    this.change_policyIcon(policyItem,"invalid","cross","red");
    console.log("Not matching")
  }

}
//clear the form fields
form_cancel(){
  //clearing password fields data
  this.current_password.value='';
  this.new_password.value ='';
  this.confirm_password.value='';
  //clearing password policies
  this.policies_list.forEach(policyItem =>{
    if(policyItem.firstElementChild.classList.contains("show")){
      policyItem.firstElementChild.classList.remove("show");
    }
    policyItem.classList.remove("valid");
    policyItem.firstElementChild.name = "";
    policyItem.firstElementChild.color = "";
  });
}
//check required fields not null
required_fields(){
  //check username is null
  let count=0
  if(this.current_password.value == ''){
    console.log("Current password is null");
  }else{count++}
  if(this.new_password.value == ''){
    console.log("New password is null");
  }else{count++}
  if(this.confirm_password.value == ''){
    console.log("confirm password is null");
  }else{count++}

  if(count== 3){
     return true
  }else{
    return false
  }
}
//save the password change
save_user(){
  console.log("save data");
  if(this.required_fields() && this.check_currentPassword(this.current_password.value)){
      console.log({username:this.username,
      currentPassword:this.current_password.value,
      newPassword:this.new_password.value});
      this.form_cancel();
  }

}
// component Event handling
handleEvent(event){
  //new password event
  if(event.type ==="input" && event.target.id ==="current-password"){
    console.log("current-password");
    this.validate_currentPassword(event.detail.value);
  }
  if(event.type === "change" && event.target.id === "current-password"){
    console.log("check current password with user password");
    this.check_currentPassword(event.detail.value);
  }
  //new password event
  if(event.type ==="input" && event.target.id ==="new-password"){
    console.log("new-password");
    this.password_policies(event.detail.value );
  }
  //confirm password event
  if(event.type ==="input" && event.target.id ==="confirm-password"){
    this.validating_confirmPassword(event.detail.value)
  }
  //save user data
  if(event.type ==="click" && event.target.id ==="save"){

    this.save_user();
  }
  if(event.type ==="click" && event.target.id ==="cancel"){

    this.form_cancel()
  }
  //event handler end
}
  /**
   * Render the <e-ss-change-password> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
    <div id="change-password>" class="container">
        <!--password information section-->
        <section class="credentials password-info">
           <div class="block-title">Password information</div>
           <div class="title">Enter a new password for user[${this.username}].</div>
           <div class="content-block">
              <!--input fields-->

              <div class="fields column-1">

                   <!--Current password-->
                  <div class="form-fields">
                      <label class="required" for="current-password">Current password</label>
                      <eui-password-field name="current-password" placeholder="Current Password"
                      id="current-password" @input="${this}" @change= "${this}">
                      </eui-password-field>
                  </div>
                  <!--Password-->
                  <div class="form-fields">
                      <label class="required" for="new-password">New password</label>
                      <eui-password-field name="new-password" placeholder="New password" id="new-password"
                      @input="${this}" >
                      </eui-password-field>
                  </div>
                  <!--Confirm password-->
                  <div class="form-fields">
                      <label class="required" for="confirm-password">Confirm password</label>
                      <eui-password-field name="confirm-password" placeholder="Confirm password"
                      id="confirm-password"  @input="${this}">
                      </eui-password-field>
                  </div>

              </div>
              <!--policies-->
              <div class="policies column-2">
                  <!--password policies-->
                  <div class="password">
                    <div class="policy-title">Password Policies </div>
                    <div class="content">
                        <ul id="policies-list">
                          <li id="match">
                            <eui-icon name="" color="red"></eui-icon>
                            Passwords must match
                          </li>
                          <li id="length">
                            <eui-icon name="" color="red"></eui-icon>
                            The minimum length of password is [${this.password_policy.length}]
                          </li>
                          <li id="digits">
                            <eui-icon name="" color="red"></eui-icon>
                            The minimum digit(s) is [${this.password_policy.digit}]
                          </li>
                          <li id="lowercase">
                            <eui-icon name="" color="red"></eui-icon>
                            The minimum lowercase character(s) is [${this.password_policy.lowercase}]
                          </li>
                          <li id="uppercase">
                            <eui-icon name="" color="red"></eui-icon>
                            The minimum uppercase character(s) is [${this.password_policy.uppercase}]
                          </li>
                          <li id="special">
                            <eui-icon name="" color="red"></eui-icon>
                            The minumum special character(s) is [${this.password_policy.special}]
                          </li>
                          <li id="user-name">
                            <eui-icon name="" color="red"></eui-icon>
                            Password cannot contain username
                          </li>
                          <li id="e-mail">
                            <eui-icon name="" color="red"></eui-icon>
                            Password cannot contain e-mail address
                          </li>
                          <li id="previous-pswd">
                              <eui-icon name="" color="red"></eui-icon>
                              Password cannot be the same as any of the previous [VALUE] password(s)
                          </li>
                        </ul>
                    </div>
                  </div>
              </div>
           </div>
        </section>

        <!--buttons section-->
        <section class="buttons">
          <div class="content-block">
              <div class="fields column-full">
                    <div class="form-fields">
                        <eui-button id="cancel" @click="${this}">Cancel</eui-button>
                        <eui-button id="save" primary @click="${this}">Save</eui-button>
                    </div>
              </div>
          </div>
        </section>

    </div>

  `;}
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-ss-change-password', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(SsChangePassword);

SsChangePassword.register();
