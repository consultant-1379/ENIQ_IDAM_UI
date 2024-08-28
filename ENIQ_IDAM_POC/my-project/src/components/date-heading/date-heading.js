/**
 * Component DateHeading is defined as
 * `<e-date-heading>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './date-heading.css';

export default class DateHeading extends LitComponent {
  // Uncomment this block to add initialization code
     constructor() {
       super();
     // initialize
       this.options = {
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric',
       };
    }

  static get components() {
    return {
      // register components here
    };
  }

  /**
   * Render the <e-date-heading> component. This function is called each time a
   * prop changes.
   */
  render() {
   // return html`<h1>Your component markup goes here</h1>
      return html`<h1>${new Date().toLocaleDateString( this.locale, this.options, )}</h1>`;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-date-heading', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(DateHeading);
