/**
 * Component UmEditUser is defined as
 * `<e-um-edit-user>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Button, TextField, PasswordField, Tree, Switch } from '@eui/base';
import style from './um-edit-user.css';
import UmAppsGroups from '../um-apps-groups/um-apps-groups.js';

export default class UmEditUser extends LitComponent {
  // Uncomment this block to add initialization code
  //   constructor() {
  //    super();
  //     // initialize

  //   }

  static get components() {
    return {
      // register components here
      'eui-button': Button,
      'eui-text-field': TextField,
      'eui-password-field': PasswordField,
      'eui-tree': Tree,
      'eui-switch': Switch,
      'e-um-apps-groups': UmAppsGroups,
    };
  }

  // didConnect
  didConnect() {
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', { subtitle: this.metaData?.descriptionShort });

    this.userdata = {};
    // user table_Data
    this.data = [
      {
        col1: 'ClOGNEci',
        col2: 'Joe',
        col3: 'Bloggs',
        col4: 'j.bloggs@yahoo.com',
        col5: 'NetAn',
        col6: 'NetAn ReadOnly',
        col7: 'Disabled',
      },
      {
        col1: 'GUSEutOr',
        col2: 'Latha',
        col3: 'Smith',
        col4: 'lathasmith@vodafone.ie',
        col5: 'NetAn',
        col6: 'NetAn Admin',
        col7: 'Enabled',
      },
      {
        col1: 'ClOGNEc',
        col2: 'John',
        col3: 'Smith',
        col4: 'j.bloggs@yahoo.com',
        col5: 'NetAn',
        col6: 'NetAn Admin',
        col7: 'Enabled',
      },
    ];
    console.log('from didconnect');
    console.log(this.userId);
    // this.getUser(this.id)
    this.getUser(this.userId);
    // setTimeout(()=>{this.update_formfields(this.userdata)},500)
  }

  // didRender
  didRender() {
    console.log('form Did render');

    // this.getUser(this.id);
    setTimeout(() => {
      // collect form text fields
      this.form_textfields = this.shadowRoot.querySelectorAll('eui-text-field');
      // collecting apps
      this.apps = this.shadowRoot
        .querySelector('#edit-user e-um-apps-groups')
        .shadowRoot.querySelector('#apps')
        .shadowRoot.querySelectorAll('eui-tree-item');
      // collecting groups
      this.groups = this.shadowRoot
        .querySelector('#edit-user e-um-apps-groups')
        .shadowRoot.querySelector('#groups')
        .shadowRoot.querySelectorAll('ul>eui-tree-item');
      // collecting status
      this.status = this.shadowRoot.querySelector('#status');
      // add user data to form fields

      this.update_formfields(this.userdata);
    }, 480);
  }

  // didDisconnect
  didDisconnect() {
    this.clear_form();
  }

  // search user with id prop and add user data to object
  getUser(user_id) {
    this.data.map(user => {
      if (user.col1 == user_id) {
        // console.log(user.col2 +" "+user.col3);
        this.userdata.username = user.col1;
        this.userdata.firstname = user.col2;
        this.userdata.lastname = user.col3;
        this.userdata.email = user.col4;
        this.userdata.apps = [user.col5];
        this.userdata.groups = [user.col6];
        this.userdata.status = user.col7;
      }
    });
    console.log(this.userdata);
  }

  // update user data to form fields
  update_formfields(userdata) {
    // console.log(this.form_textfields);
    // console.log(userdata);
    // updating text fields
    for (const data_item in userdata) {
      for (const textfield of this.form_textfields) {
        if (data_item == textfield.id) {
          // console.log(textfield.id+" "+ data_item);
          textfield.value = userdata[textfield.id];
        }
      }
    }
    // udating apps in form
    for (const userapp of userdata.apps) {
      this.apps.forEach(app => {
        if (app.innerText == userapp) {
          if (!app.hasAttribute('checked')) {
            app.setAttribute('checked', '');
          }
        }
      });
    }

    // udating groups in form
    for (const userapp of userdata.apps) {
      this.groups.forEach(group => {
        if (group.innerText == userapp) {
          let subapps_checkCount = 0;
          const group_subapps = group.querySelectorAll('eui-tree-item');
          const total_subapps = group_subapps.length;
          for (const subapp of group_subapps) {
            userdata.groups.forEach(usergroup => {
              if (
                usergroup.toLowerCase().trim() ==
                subapp.innerText.toLowerCase().trim()
              ) {
                subapps_checkCount++;
                if (!subapp.hasAttribute('checked')) {
                  subapp.setAttribute('checked', '');
                }
              }
            });
          }
          group.style.opacity = 'inherit';
          group.style.pointerEvents = 'inherit';
          if (subapps_checkCount == total_subapps) {
            group.setAttribute('checked', '');
          } else if (subapps_checkCount > 0) {
            group.setAttribute('indeterminate', '');
          }
        }
      });
    }

    // update status
    console.log(userdata.status);
    if (userdata.status == 'Disabled') {
      if (this.status.hasAttribute('on')) {
        this.status.removeAttribute('on');
      }
    }
  }

  // collecting form fields
  formfields_collection() {
    const form_fields = {};
    // collecting all form text fields
    form_fields.textfields = this.form_textfields;
    // collecting apps
    form_fields.apps = this.apps;
    // collecting groups
    form_fields.groups = this.groups;
    // colliecting status
    form_fields.status = this.status;

    // return form field object
    return form_fields;
  }

  // collecting form data from fields
  collect_formdata() {
    const formdata = {};
    // collecting form fields
    const form_fields = this.formfields_collection();
    // adding form text fields to formdata object
    for (const field of form_fields.textfields) {
      // console.log(field.name +" "+ field.value);
      formdata[field.name] = field.value;
    }
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
  }

  // save user data
  save_user() {
    // collecting form data to save
    console.log('Data saved');
    const formdata = this.collect_formdata();
    console.log(formdata);
  }

  // cancel and clear form
  form_cancel() {
    this.clear_form();
    console.log('form data cleared');
  }

  // component Eventhandler
  handleEvent(event) {
    // save user data
    if (event.type === 'click' && event.target.id === 'save') {
      // console.log(event.detail.value)
      this.save_user();
    }
    // cancel form
    if (event.type === 'click' && event.target.id === 'cancel') {
      // console.log(event.detail.value)
      this.form_cancel();
    }
  }

  /**
   * Render the <e-um-edit-user> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div id="edit-user" class="container">
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
                  id="firstname"
                  pattern="^[A-Za-z]+$"
                ></eui-text-field>
              </div>

              <!--Last name-->
              <div class="form-fields">
                <label for="last_name">Last name</label>
                <eui-text-field
                  name="last_name"
                  placeholder="Last name"
                  id="lastname"
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
                  readonly
                  pattern="^[A-Za-z]+$"
                ></eui-text-field>
              </div>

              <!--apps and groups-->
              <e-um-apps-groups class="user-form"> </e-um-apps-groups>
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
      </div>
    `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.id
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-um-edit-user', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
    userId: { attribute: true, type: String, default: 'ClOGNEci' },
  },
})(UmEditUser);

UmEditUser.register();


