/**
 * Component UmAddUser is defined as
 * `<e-um-add-user>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Button, TextField, PasswordField, Tree, Switch } from '@eui/base';
import { Icon } from '@eui/theme/icon';
import style from './um-add-user.css';
import UmAppsGroups from '../um-apps-groups/um-apps-groups.js';

class UmAddUser extends LitComponent {
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
      'eui-password-field': PasswordField,
      'eui-tree': Tree,
      'eui-switch': Switch,
      'eui-icon': Icon,
      'e-um-apps-groups': UmAppsGroups,
    };
  }

  // didConnect
  didConnect() {
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', { subtitle: this.metaData?.descriptionShort });

    // password policies
    this.password_policy = {
      length: 10,
      digit: 2,
      lowercase: 1,
      uppercase: 1,
      special: 1,
    };
  }

  // didRender
  didRender() {
    // password policies ul list
    this.policies_list = this.shadowRoot.querySelectorAll('#policies-list li');
    // console.log(this.policies_list);
    this.username_input = this.shadowRoot.querySelector('#username');
    this.email_input = this.shadowRoot.querySelector('#email');
    this.password_input = this.shadowRoot.querySelector('#password');
    this.confirm_password_input =
      this.shadowRoot.querySelector('#confirm-password');
  }

  // change policy list Item icon
  change_policyItem(policyItem, policyclass, icon_name, icon_color) {
    if (policyclass == 'valid') {
      policyItem.classList.add('valid');
    } else {
      policyItem.classList.remove('valid');
    }
    if (!policyItem.firstElementChild.classList.contains('show')) {
      policyItem.firstElementChild.classList.add('show');
    }
    policyItem.firstElementChild.name = icon_name;
    policyItem.firstElementChild.color = icon_color;
  }

  // validating password
  validate_password(policyItem, passwordValue, inputValue) {
    const check = (value, pwd) =>
      pwd
        .match(/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+/gi)
        .filter(a => a.length > 3 && value.includes(a)).length > 0;
    if (passwordValue != '') {
      if (check(inputValue, passwordValue)) {
        // policyItem.classList.remove("valid");
        // policyItem.firstElementChild.name = "cross";
        // policyItem.firstElementChild.color = "red";
        this.change_policyItem(policyItem, 'invalid', 'cross', 'red');
        console.log('matching');
      } else {
        // policyItem.classList.add("valid");
        // policyItem.firstElementChild.name = "check";
        // policyItem.firstElementChild.color = "green";
        this.change_policyItem(policyItem, 'valid', 'check', 'green');
        console.log('Not matching');
      }
    }
  }

  // password policies
  password_policies(password) {
    // check password length
    const requirements = [
      { regex: /.{10,}/, index: 1 }, // Minimum of 10 characters
      { regex: /[a-zA-Z]{2,}/, index: 2 }, // At least 2 digits
      { regex: /[a-z]/, index: 3 }, // At least 1 lowercase letter
      { regex: /[A-Z]/, index: 4 }, // At least 1 uppercase letter
      { regex: /[^A-Za-z0-9]/, index: 5 }, // At least 1 special character
    ];
    // Check if the password matches
    requirements.forEach(item => {
      // Check if the password matches the requirement regex
      const isValid = item.regex.test(password);
      const policyItem = this.policies_list[item.index];
      // displaying policy
      if (!policyItem.firstElementChild.classList.contains('show')) {
        policyItem.firstElementChild.classList.add('show');
      }
      // Updating class and icon of requirement item if requirement matched or not
      if (isValid) {
        // policyItem.classList.add("valid");
        // policyItem.firstElementChild.name = "check";
        // policyItem.firstElementChild.color = "green";
        this.change_policyItem(policyItem, 'valid', 'check', 'green');
      } else {
        // policyItem.classList.remove("valid");
        // policyItem.firstElementChild.name = "cross";
        // policyItem.firstElementChild.color = "red";
        this.change_policyItem(policyItem, 'invalid', 'cross', 'red');
      }
    });
    // check password include username and email
    const password_value = password.toLowerCase();
    const user_name = this.username_input.value.toLowerCase();
    const username_policy = this.policies_list[6];
    // validating username
    this.validate_password(username_policy, password_value, user_name);

    const email = this.email_input.value.toLowerCase();
    const email_policy = this.policies_list[7];
    // validating email
    this.validate_password(email_policy, password_value, email);
    // check with confirm-password
    this.validate_confirm_password(this.confirm_password_input.value);
  }

  // matching confirm-password and password
  validate_confirm_password(confirmPassword) {
    const password = this.password_input.value.toLowerCase();
    const confirm_password = confirmPassword.toLowerCase();
    const policyItem = this.policies_list[0];
    if (password === confirm_password) {
      // policyItem.classList.add("valid");
      // policyItem.firstElementChild.name = "check";
      // policyItem.firstElementChild.color = "green";
      this.change_policyItem(policyItem, 'valid', 'check', 'green');
      console.log('matching');
    } else {
      // policyItem.classList.remove("valid");
      // policyItem.firstElementChild.name = "cross";
      // policyItem.firstElementChild.color = "red";
      this.change_policyItem(policyItem, 'invalid', 'cross', 'red');
      console.log('Not matching');
    }
  }

  // check required fields not null
  required_fields() {
    // check username is null
    let count = 0;
    if (this.username_input.value == '') {
      console.log('username is null');
    } else {
      count++;
    }
    if (this.password_input.value == '') {
      console.log('password is null');
    } else {
      count++;
    }
    if (this.confirm_password_input.value == '') {
      console.log('confirm password is null');
    } else {
      count++;
    }

    if (count == 3) {
      return true;
    }
    return false;
  }

  // collecting form fields
  formfields_collection() {
    const form_fields = {};
    const form_textfields = this.shadowRoot.querySelectorAll(
      '#add-user  eui-text-field',
    );
    const apps = this.shadowRoot
      .querySelector('#add-user  e-um-apps-groups')
      .shadowRoot.querySelector('#apps')
      .shadowRoot.querySelectorAll(' eui-tree-item');
    const groups = this.shadowRoot
      .querySelector('#add-user  e-um-apps-groups')
      .shadowRoot.querySelector('#groups')
      .shadowRoot.querySelectorAll('ul>eui-tree-item');
    const status = this.shadowRoot.querySelector('#status');
    // collecting all form text fields
    form_fields.textfields = form_textfields;
    // collecting passwords fields
    form_fields.password = this.password_input;
    // collecting confirm_password
    form_fields.confirm_password = this.confirm_password_input;
    // collecting apps
    form_fields.apps = apps;
    // collecting groups
    form_fields.groups = groups;
    // colliecting status
    form_fields.status = status;

    return form_fields;
  }

  // collecting  form data
  collect_formdata() {
    const formdata = {};
    // collecting form fields
    const form_fields = this.formfields_collection();
    // adding form text fields to formdata object
    for (const field of form_fields.textfields) {
      // console.log(field.name +" "+ field.value);
      formdata[field.name] = field.value;
    }
    // adding password data
    formdata.password = form_fields.password.value;
    // adding apps to formdata
    formdata.apps = [];
    for (const app of form_fields.apps) {
      if (app.hasAttribute('checked')) {
        formdata.apps.push(app.innerText.trim());
      }
    }
    // adding grops to formdata
    formdata.groups = [];
    for (const group of form_fields.groups) {
      if (
        group.hasAttribute('checked') ||
        group.hasAttribute('indeterminate')
      ) {
        const child_items = group.querySelectorAll('eui-tree-item[checked]');
        for (const item of child_items) {
          // console.log(item.innerText.trim());
          formdata.groups.push(item.innerText.trim());
        }
      }
    }
    // adding status to formdata
    if (form_fields.status.hasAttribute('on')) {
      formdata.status = 'Enable';
    } else {
      formdata.status = 'disable';
    }
    // returning form data
    return formdata;
  }

  // clear the form fields
  clear_form() {
    // collecting form fields
    const form_fields = this.formfields_collection();
    // clear form text fields
    for (const field of form_fields.textfields) {
      field.value = '';
    }

    // clear password fields
    form_fields.password.value = '';
    form_fields.confirm_password.value = '';

    // uncheck apps checkbox from form
    for (const app of form_fields.apps) {
      if (app.hasAttribute('checked')) {
        app.removeAttribute('checked');
      }
    }
    // uncheck groups checkbox from form
    for (const group of form_fields.groups) {
      if (
        group.hasAttribute('checked') ||
        group.hasAttribute('indeterminate')
      ) {
        const child_items = group.querySelectorAll('eui-tree-item[checked]');
        for (const item of child_items) {
          // console.log(item.innerText.trim());
          item.removeAttribute('checked');
        }
      }
      if (group.hasAttribute('open')) {
        group.removeAttribute('open');
      }
      if (group.hasAttribute('checked')) {
        group.removeAttribute('checked');
      }
      if (group.hasAttribute('indeterminate')) {
        group.removeAttribute('indeterminate');
      }
      group.style.opacity = '0.5';
      group.style.pointerEvents = 'none';
    }
    // clear status
    if (!form_fields.status.hasAttribute('on')) {
      form_fields.status.setAttribute('on', '');
    }
    // clear password policies
    this.policies_list.forEach(policyItem => {
      if (policyItem.firstElementChild.classList.contains('show')) {
        policyItem.firstElementChild.classList.remove('show');
      }
      policyItem.classList.remove('valid');
      policyItem.firstElementChild.name = '';
      policyItem.firstElementChild.color = '';
    });
  }

  // save user data
  save_user() {
    // check all required fields not null
    if (this.required_fields()) {
      console.log('Data saved');
      const formdata = this.collect_formdata();
      console.log(formdata);
    } else {
      console.log('Data not saved');
    }
  }

  // cancel the form
  form_cancel() {
    this.clear_form();
    console.log('form data cleared');
  }

  // component Event handling
  handleEvent(event) {
    // password event
    if (event.type === 'input' && event.target.id === 'password') {
      // console.log(event.detail.value)
      this.password_policies(event.detail.value);
    }
    // password event
    if (event.type === 'input' && event.target.id === 'confirm-password') {
      // console.log(event.detail.value)
      this.validate_confirm_password(event.detail.value);
    }
    // save user data
    if (event.type === 'click' && event.target.id === 'save') {
      // console.log(event.detail.value)
      this.save_user();
    }
    if (event.type === 'click' && event.target.id === 'cancel') {
      // console.log(event.detail.value)
      this.form_cancel();
    }
  }

  /**
   * Render the <e-um-add-user> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<div id="add-user" class="container">
      <!--personal-information section-->
      <section class="personal-info ">
        <div class="content-block">
          <!--input fields-->
          <div class="fields column-1">
            <div class="title">Personal information</div>
            <!--First name-->
            <div class="form-fields">
              <label for="first_name">First name</label>
              <eui-text-field
                name="first_name"
                placeholder="First name"
                pattern="^[A-Za-z]+$"
              ></eui-text-field>
            </div>

            <!--Last name-->
            <div class="form-fields">
              <label for="last_name">Last name</label>
              <eui-text-field
                name="last_name"
                placeholder="Last name"
                pattern="^[A-Za-z]+$"
              ></eui-text-field>
            </div>

            <!--E-mail-->
            <div class="form-fields">
              <label for="email">E-mail</label>
              <eui-text-field
                name="email"
                placeholder="Email"
                id="email"
                pattern="^\\w+([\\.\\-]?\\w+)*@\\w+([\\.\\-]?\\w+)*(\\.\\w{2,3})+$"
              >
              </eui-text-field>
            </div>
          </div>
        </div>
      </section>

      <!--Credentials section-->
      <section class="credentials">
        <div class="content-block">
          <!--input fields-->
          <div class="fields column-1">
            <div class="title">Credentials</div>
            <!--Username-->
            <div class="form-fields">
              <label class="required" for="username">Username</label>
              <eui-text-field
                name="username"
                placeholder="Username"
                id="username"
                pattern="^[A-Za-z]+$"
              ></eui-text-field>
            </div>

            <!--Password-->
            <div class="form-fields">
              <label class="required" for="password">Password</label>
              <eui-password-field
                name="password"
                placeholder="Password"
                id="password"
                @input="${this}"
              >
              </eui-password-field>
            </div>

            <!--Confirm password-->
            <div class="form-fields">
              <label class="required" for="confirm-password"
                >Confirm password</label
              >
              <eui-password-field
                name="confirm-password"
                placeholder="Confirm password"
                id="confirm-password"
                @input="${this}"
              >
              </eui-password-field>
            </div>
            <!--apps and groups-->
            <e-um-apps-groups class="user-form"> </e-um-apps-groups>
          </div>
          <!--policies-->
          <div class="policies column-2">
            <!--password policies-->
            <div class="password">
              <div class="policy-title">Password Policies</div>
              <div class="content">
                <ul id="policies-list">
                  <li id="match">
                    <eui-icon name="" color="red"></eui-icon>
                    Passwords must match
                  </li>
                  <li id="length">
                    <eui-icon name="" color="red"></eui-icon>
                    The minimum length of password is
                    [${this.password_policy.length}]
                  </li>
                  <li id="digits">
                    <eui-icon name="" color="red"></eui-icon>
                    The minimum digit(s) is [${this.password_policy.digit}]
                  </li>
                  <li id="lowercase">
                    <eui-icon name="" color="red"></eui-icon>
                    The minimum lowercase character(s) is
                    [${this.password_policy.lowercase}]
                  </li>
                  <li id="uppercase">
                    <eui-icon name="" color="red"></eui-icon>
                    The minimum uppercase character(s) is
                    [${this.password_policy.uppercase}]
                  </li>
                  <li id="special">
                    <eui-icon name="" color="red"></eui-icon>
                    The minumum special character(s) is
                    [${this.password_policy.special}]
                  </li>
                  <li id="user-name">
                    <eui-icon name="" color="red"></eui-icon>
                    Password cannot contain username
                  </li>
                  <li id="e-mail">
                    <eui-icon name="" color="red"></eui-icon>
                    Password cannot contain e-mail address
                  </li>
                  <li id="previous-pswd" style="display:none">
                    <eui-icon name="" color="red"></eui-icon>
                    Password cannot be the same as any of the previous [VALUE]
                    password(s)
                  </li>
                </ul>
              </div>
            </div>
            <!--Access Control-->
            <div class="access-control">
              <div class="policy-title">Access Control</div>
              <div class="content">
                <p>
                  A user cannot be assigned to a group if an application/s has
                  not been selected. To enable group/s selection, an
                  application/s must be selected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--User status-->
      <section class="user-status">
        <div class="content-block">
          <div class="fields column-1">
            <div class="title">User status</div>
            <!--status-->
            <div class="form-fields">
              <label for="status">Status</label>
              <eui-switch
                id="status"
                label-off="Disable"
                label-on="Enable"
                on
              ></eui-switch>
            </div>
          </div>
        </div>
      </section>

      <!--buttons section-->
      <section class="buttons">
        <div class="content-block">
          <div class="fields column-1">
            <div class="form-fields">
              <eui-button id="cancel" @click="${this}">Cancel</eui-button>
              <eui-button id="save" primary @click="${this}">Save</eui-button>
            </div>
          </div>
        </div>
      </section>
    </div> `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-um-add-user', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(UmAddUser);

UmAddUser.register();

export { UmAddUser };
