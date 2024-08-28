import { definition, LitComponent, html } from '../../../pkg/@eui/lit-component.js';

var style = ":host{\n  display: block;\n}\n\n:host(:not([open])) {\n  display: none;\n}\n\neui-icon {\n  display: inline-block;\n}";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class NavigationGroup extends LitComponent {
  didUpgrade() {
    this._setGroupLevel();
  }

  handleEvent = event => {
    if (event.type === 'slotchange') {
      const items = this.shadowRoot.querySelector('slot').assignedElements();
      items.forEach(item => {
        item._level = this._level;
      });
    }

    // one of my children has become ACTIVE.
    // tell all other children that they are no longer ACTIVE.
    if (event.type === 'nav-item:active') {
      const items = this.shadowRoot.querySelector('slot').assignedElements();
      items.forEach(item => {
        if (item !== event.target) {
          item.active = false;
          item.activeChild = false;
        }
      });
    }
  };

  /**
   * Set the initial group level of the group once it's added to
   * it's parents "group" slot.
   *
   * @function _setGroupLevel
   * @private
   */
  _setGroupLevel = () => {
    let parent = this.parentElement;
    while (parent != null) {
      if (parent.nodeName === 'EUI-NAVIGATION-GROUP') {
        this._level += 1;
      }
      parent = parent.parentElement;
    }
    if (this._level === 0) {
      this.open = true;
    }
  };

  render() {
    return html`
      <div class="nav-items" @nav-item:active=${this}>
        <slot @slotchange=${this}> </slot>
      </div>
    `;
  }
}
definition('eui-navigation-group', {
  style,
  props: {
    _level: { type: Number, default: 0 },
    open: { attribute: true, type: Boolean },
  },
})(NavigationGroup);

export { NavigationGroup as default };
