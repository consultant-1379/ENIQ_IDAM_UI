/**
 * Component Eniq is defined as
 * `<e-eniq>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './eniq.css';

export default class Eniq extends LitComponent {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
    };
  }

  /**
   * Render the <e-eniq> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<h1>Your component markup goes here</h1>
      <h2>props</h2>
      prop-one: ${this.propOne}
      <p>prop-two: ${this.propTwo}</p>`;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-eniq', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(Eniq);
