/**
 * Component SsSetupPasswordless is defined as
 * `<e-ss-setup-passwordless>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Button, Dialog, ProgressBar } from '@eui/base';
import style from './ss-setup-passwordless.css';

class SsSetupPasswordless extends LitComponent {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
      'eui-button': Button,
      'eui-dialog': Dialog,
      'eui-progress-bar': ProgressBar,
    };
  }

  // didConnect
  didConnect() {
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', { subtitle: this.metaData?.descriptionShort });
    this.dialog_eventlistener = '';
    this.have_passwordlessLogin = false;
    this.passwordlessSetup_progress = 40;
  }

  // didRender
  didRender() {
    this.dialogbox = this.shadowRoot.querySelector('#dialog');
  }

  // setup passwordless dialog
  setupPasswordless_dialog() {
    const dialog_content = this.dialogbox.querySelector('div.dialog-content');
    const dialogSetup_button = this.dialogbox.querySelector('eui-button');
    this.dialogbox.label = 'Setup Passwordless login';
    dialog_content.innerHTML = `<eui-progress-bar buffer="0" max="100" min="0" unit="%"
  value="${this.passwordlessSetup_progress}">
  </eui-progress-bar>`;
    dialogSetup_button.innerText = 'Download private key';
    if (this.passwordlessSetup_progress == 100) {
      dialogSetup_button.disabled = false;
    } else {
      dialogSetup_button.disabled = true;
    }
    this.dialogbox.show = 'true';
    this.dialog_eventlistener = () => {
      this.dialogbox.removeAttribute('show');
    };
    dialogSetup_button.addEventListener('click', this.dialog_eventlistener);
  }

  // revoke passwordless dialog
  revokePasswordless_dialog() {
    const dialog_content = this.dialogbox.querySelector('div.dialog-content');
    const dialogSetup_button = this.dialogbox.querySelector('eui-button');
    this.dialogbox.label = 'Revoke Passwordless login';
    dialog_content.innerHTML = `<p>By revoking Passwordless login you will no longer have <br>passwordless login</p>
  <p>Do you want to continue?</p>`;
    dialogSetup_button.innerText = 'Revoke Passwordless login';
    this.dialogbox.show = 'true';
    this.dialog_eventlistener = () => {
      this.dialogbox.removeAttribute('show');
    };
    dialogSetup_button.addEventListener('click', this.dialog_eventlistener);
  }

  // component Event handling
  handleEvent(event) {
    if (event.type === 'eui-dialog:cancel' && event.target.id === 'dialog') {
      const dialog_button = event.target.querySelector('eui-button');
      dialog_button.removeEventListener('click', this.dialog_eventlistener);
    }
    if (event.type === 'click' && event.target.id === 'setup-passwordless') {
      this.setupPasswordless_dialog();
    }
    if (event.type === 'click' && event.target.id === 'revoke-passwordless') {
      this.revokePasswordless_dialog();
    }
  }

  /**
   * Render the <e-ss-setup-passwordless> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div id="setup-passwordless" class="container">
        <!--personal information section-->
        <section class="passwordless-login">
          <div class="block-title">Passwordless Login</div>
          <div class="content-block">
            <div class="fields column-1">
              <p>
                Passwordless login setup is available only for ENIQ-S RHEL
                server access.<br />
                The user should be pre-existing in RHEL before initiciting this
                passwordless setup
              </p>
            </div>
          </div>
        </section>

        <!--buttons section-->
        <section class="buttons">
          <div class="content-block">
            <div class="fields column-1">
              <div class="form-fields">
                <eui-button
                  id="setup-passwordless"
                  primary
                  @click="${this}"
                  class="${this.have_passwordlessLogin ? 'hide' : ''}"
                >
                  Setup passwordless login
                </eui-button>
                <eui-button
                  class="hide1"
                  id="revoke-passwordless"
                  primary
                  @click="${this}"
                  class="${this.have_passwordlessLogin ? '' : 'hide'}"
                >
                  Revoke passwordless login
                </eui-button>
              </div>
            </div>
          </div>
        </section>
        <!--user status change dialog-->
        <div class="dialog-box">
          <!-- or disable-->
          <eui-dialog
            label="Confirm disable"
            id="dialog"
            @eui-dialog:cancel=${this}
          >
            <div class="dialog-content" slot="content" show="false">
              Are you sure you want to setup passwordless login?
            </div>
            <eui-button id="dialog_submit" @click=${this} slot="bottom" primary
              >Button</eui-button
            >
          </eui-dialog>
        </div>
      </div>
    `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-ss-setup-passwordless', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(SsSetupPasswordless);

SsSetupPasswordless.register();

export { SsSetupPasswordless };
