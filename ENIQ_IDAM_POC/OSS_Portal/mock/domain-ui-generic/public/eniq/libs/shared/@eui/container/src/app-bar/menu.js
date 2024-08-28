/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
import { TemplateComponent, definition } from '../../../../../pkg/@eui/component.js';
import { Icon } from '../../../../../pkg/@eui/theme/icon.js';

export default class Menu extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  didConnect() {
    this.menu = this.shadowRoot.querySelector('#menu');
    const ellipsis = this.shadowRoot.querySelector('#ellipsis');
    ellipsis.addEventListener('click', () => {
      this.hidden = !this.hidden;
    });
    if (this.crumbs) {
      this.addCrumbs(this.crumbs);
    }
  }

  didChangeProps(changedProps) {
    if (changedProps.has('crumbs')) {
      this.addCrumbs(this.crumbs);
    }
    if (changedProps.has('hidden')) {
      if (this.hidden) {
        // remove the document listeners when the menu is hidden.
        this.removeDocumentListeners();
      } else {
        // add the document listeners when the menu is visible.
        this.addDocumentListeners();
      }
    }
  }

  /**
   * handle events.
   *
   * @param {Event} event - mousedown and touchend events
   */
  handleEvent(event) {
    if (event.type === 'mousedown' || event.type === 'touchend') {
      if (!event.composedPath().includes(this.menu)) {
        this.hidden = true;
      }
    }
  }

  /**
   * Add crumbs to the menu.
   *
   * @function addCrumbs
   * @param {object[]} crumbs - an array of crumbs.
   * @param {string} crumbs[].displayName - the title of the crumb.
   * @param {function} [crumbs[].action] - the callback for the crumb.
   */
  addCrumbs = crumbs => {
    const menuElement = this.shadowRoot.querySelector('#menu');
    menuElement.replaceChildren();
    crumbs.forEach(crumb => {
      const item = document.createElement('span');
      item.innerText = crumb.displayName;
      if (crumb.action != null) {
        item.classList.add('action');
      }
      item.addEventListener('click', () => {
        this.hidden = true;
        crumb.action?.();
      });
      menuElement.appendChild(item);
    });
  };

  /**
   * Add document listeners for mousedown and touchend.
   * This is used to check if the user clicks outside of the menu.
   *
   * @function addDocumentListeners
   */
  addDocumentListeners = () => {
    document.addEventListener('mousedown', this);
    document.addEventListener('touchend', this);
  };

  /**
   * Remove document listeners for mousedown and touchend.
   * This is called when the menu is removed from the DOM.
   *
   * @function removeDocumentListeners
   */
  removeDocumentListeners = () => {
    document.removeEventListener('mousedown', this);
    document.removeEventListener('touchend', this);
  };

  /**
   * remove any listeners...
   */
  didDisconnect() {
    this.removeDocumentListeners();
  }
}

const style = `
:host {
  display: inline-block;
}

#menu {
  position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 60;
    margin-top: var(--space-small, 4px);
    background: var(--menu-background, #FFF);
    border: solid 1px var(--menu-border, #878787);
    text-align: left;
    transition: all .25s ease-in-out;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
}

:host([hidden]) #menu{
  display: none;
}

eui-icon[name=ellipsis] {
  --icon-color: var(--gray-text, #6A6A6A);
  --icon-size: 14px;
}

eui-icon[name=ellipsis]:hover {
  --icon-color: var(--text, #242424);
  cursor: pointer;
}

:host(:not([hidden])) eui-icon[name=ellipsis] {
  --icon-color: var(--text, #242424);
  cursor: pointer;
}

span {
  padding: 7px var(--space-base, 8px);
  font-size: 12px;
  line-height: 1.5;
  cursor: default;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

span:hover {
  background: var(--menu-item-background-hover, #dcdcdc);
}

span.action:hover {
  cursor: pointer;
}
`;
const template = `
  <div>
    <eui-icon id="ellipsis" name="ellipsis"></eui-icon>
    <div id="menu"></div>
  </div>
`;

definition('eui-app-bar-breadcrumb-menu', {
  style,
  template,
  props: {
    crumbs: { type: Array, default: [] },
    hidden: { attribute: true, type: Boolean },
  },
})(Menu);
