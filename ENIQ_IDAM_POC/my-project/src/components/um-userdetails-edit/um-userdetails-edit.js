/**
 * Component UmUserdetailsEdit is defined as
 * `<e-um-userdetails-edit>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './um-userdetails-edit.css';

export default class UmUserdetailsEdit extends LitComponent {
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

  //didConnect
  didConnect(){
    this.bubble('app:lineage', { metaData: this.metaData });
    this.bubble('app:subtitle', {subtitle: this.metaData?.descriptionShort,});
  
}

  /**
   * Render the <e-um-userdetails-edit> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<h1>Your component markup goes here</h1>
      <h2>props</h2>
      prop-one: ${this.propOne}
      <p>prop-two: ${this.propTwo}</p>
      <p>ID: ${this.userId}</p>
      `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 * 
 */
definition('e-um-userdetails-edit', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
    userId: { attribute: true, type: String, default: "ClOGNEci"},    
  },
})(UmUserdetailsEdit);
