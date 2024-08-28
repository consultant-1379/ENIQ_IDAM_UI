/**
 * Component SsChangeDetails is defined as
 * `<e-ss-change-details>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Button, TextField } from '@eui/base';
import style from './ss-change-details.css';

class SsChangeDetails extends LitComponent {
  // Uncomment this block to add initialization code
  constructor() {
    super();
    // initialize
    this.userData = {
      username: 'ClOGNEci',
      firstname: 'Joe',
      lastname: 'Bloggs',
      email: 'j.bloggs@yahoo.com',
      app: 'NetAn',
      groups: 'NetAn ReadOnly',
      status: 'Disabled',
    };
  }

  static get components() {
    return {
      // register components here
      'eui-button': Button,
      'eui-text-field': TextField,
    };
  }

  // didConnect
  didConnect() {
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', { subtitle: this.metaData?.descriptionShort });
  }

  // didRender
  didRender() {
    // form text fields
    this.firstname = this.shadowRoot.querySelector('#firstname');
    this.lastname = this.shadowRoot.querySelector('#lastname');
    this.email = this.shadowRoot.querySelector('#email');
    // add user data to form
    setTimeout(() => {
      this.firstname.value = this.userData.firstname;
      this.lastname.value = this.userData.lastname;
      this.email.value = this.userData.email;
    }, 400);
  }

  // check required fields not null
  fields_notNull() {
    // check username is null
    let count = 0;
    if (this.firstname.value.value == '') {
      console.log('firstname is null');
    } else {
      count++;
    }
    if (this.lastname.value == '') {
      console.log('lastname is null');
    } else {
      count++;
    }
    if (this.email.value == '') {
      console.log('email is null');
    } else {
      count++;
    }

    if (count == 3) {
      return true;
    }
    return false;
  }

  // save user data
  save_user() {
    console.log('user data saved');
    if (this.fields_notNull()) {
      const user_personalinfo = {};
      user_personalinfo.firstname = this.firstname.value;
      user_personalinfo.lastname = this.lastname.value;
      user_personalinfo.email = this.email.value;
      console.log(user_personalinfo);
    }
  }

  // form cancel()
  form_cancel() {
    console.log('form cancel');
  }

  // component Event handling
  handleEvent(event) {
    // save user data
    if (event.type === 'click' && event.target.id === 'save') {
      this.save_user();
    }
    if (event.type === 'click' && event.target.id === 'cancel') {
      this.form_cancel();
    }
    // event handler end
  }

  /**
   * Render the <e-ss-change-details> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div id="change-details" class="container">
        <!--personal information section-->
        <section class="personal-info">
          <div class="block-title">Personal information</div>
          <div class="content-block">
            <div class="fields column-1">
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
                  pattern="^\\w+([\\.\\-]?\\w+)*@\\w+([\\.\\-]?\\w+)*(\\.\\w{2,3})+$"
                >
                </eui-text-field>
              </div>
              <!-- -->
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
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-ss-change-details', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(SsChangeDetails);

SsChangeDetails.register();

export { SsChangeDetails };
