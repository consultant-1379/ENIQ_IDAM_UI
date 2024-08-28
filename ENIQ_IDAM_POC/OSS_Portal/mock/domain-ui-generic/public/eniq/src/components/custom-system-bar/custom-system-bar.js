/**
 * Component CustomSystemBar is defined as
 * `<e-custom-system-bar>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './custom-system-bar.css';
import { Tooltip } from '@eui/base/tooltip';
import { Icon } from '@eui/theme/icon';

export default class CustomSystemBar extends LitComponent {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
      'eui-tooltip': Tooltip,
      'eui-icon':Icon
    };
  }

  /**
   * Render the <e-custom-system-bar> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
    <div>
      <eui-tooltip message="App-launcher" position="bottom-end" delay="500" action>
      <eui-icon name="app-launcher"></eui-icon>
      </eui-tooltip>
    </div>
      `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-custom-system-bar', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(CustomSystemBar);
