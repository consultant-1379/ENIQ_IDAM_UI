/**
 * Component ErrorMessageComponent is defined as
 * `<e-error-message-component>`
 *
 * Imperatively create component
 * @example
 * let component = new ErrorMessageComponent();
 *
 * Declaratively create component
 * @example
 * <e-error-message-component></e-error-message-component>
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Dialog } from '@eui/base';
import style from './error-message-component.css';

class ErrorMessageComponent extends LitComponent {
  get meta() {
    return import.meta;
  }

  static get components() {
    return {
      'eui-dialog': Dialog,
    };
  }

  render() {
    const { label, noCancel } = this;
    return html`
      <eui-dialog label=${label} show="true" .noCancel=${noCancel}>
        <div slot="content"><slot name="content"></slot></div>
        <div slot="bottom"><slot name="bottom"></slot></div>
      </eui-dialog>
    `;
  }
}

definition('e-error-message-component', {
  style,
  props: {
    label: {
      type: String,
      default: '',
      attribute: false,
    },
    noCancel: {
      type: Boolean,
      default: true,
      attribute: false,
    },
  },
})(ErrorMessageComponent);

export { ErrorMessageComponent };
