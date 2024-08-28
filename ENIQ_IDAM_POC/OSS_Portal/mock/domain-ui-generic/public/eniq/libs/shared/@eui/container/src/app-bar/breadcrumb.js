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
import Menu from './menu.js';

export default class Breadcrumb extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
      'eui-app-bar-breadcrumb-menu': Menu,
    };
  }

  didConnect() {
    this.breadcrumbElement = this.shadowRoot.querySelector('#breadcrumb');
    // setup the breadcrumb when connected...
    if (this.crumbs) {
      this.setNewBreadcrumb(this.crumbs);
    }
  }

  /**
   * crumbs - [ ... ]
   * ----------------------------------------------------------------------------------
   * Each time the crumbs data is changed we need to determine what it's rendered width is.
   *
   * availableWidth - Number
   * ----------------------------------------------------------------------------------
   * Each time the parent sets the availableWidth prop we must check how the breadcrumb
   * should be displayed (compact/full) the width of the breadcrumb is only changed
   * when the data is changed, so no need to calculate the width every time.
   *
   * @function didChangeProps
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('crumbs')) {
      this.setNewBreadcrumb(this.crumbs);
    }
    if (changedProps.has('availableWidth')) {
      if (this.availableWidth < this.breadcrumbWidth) {
        this.compactBreadcrumb(this.crumbs);
      } else {
        this.fullBreadcrumb(this.crumbs);
      }
    }
  }

  /**
   * Determine the width of the breadcrumb and display it...
   *
   * 1. add a temporary style (hide and move the breadcrumb off screen, so it can render without constraints)
   * 2. render the breadcrumb full width
   * 3. store the new full width, **breadcrumbWidth**.
   * 4. compare **breadcrumbWidth** against **availableWidth**
   *    (the element that sets the crumbs should also set the **availableWidth**
   *    prop on the breadcrumb) to determine the render mode.
   *    **availableWidth** is set by a the AppBar.
   * 5. if the **availableWidth** < **breadcrumbWidth** = show the compactBreadcrumb
   * 6. if the **availableWidth** > **breadcrumbWidth** = show the fullBreadcrumb.
   * 7. if **availableWidth** is not set ( == null ), then show fullBreadcrumb by default.
   * 8. remove the temporary style from the breadcrumb.
   *
   * @function setNewBreadcrumb
   * @param {object[]} crumbs - an array of crumbs.
   * @param {string} crumbs[].displayName - the title of the crumb.
   * @param {function} [crumbs[].action] - the callback for the crumb.
   */
  setNewBreadcrumb = crumbs => {
    // 1. Add temporary style to the breadcrumb
    this.breadcrumbElement.classList.add('temporary');
    // 2. render it full width
    this.compact = true;
    this.fullBreadcrumb(crumbs);
    // 3. store the fullWidth.
    this.breadcrumbWidth = this.breadcrumbElement.getBoundingClientRect().width;
    if (
      this.availableWidth !== null &&
      this.availableWidth < this.breadcrumbWidth
    ) {
      this.compactBreadcrumb(crumbs);
    }
    this.breadcrumbElement.classList.remove('temporary');
  };

  /**
   * Create a full breadcrumb. This is used when there is enough space in the App Bar.
   *
   * Different iterations of the full breadcrumb.
   * --------------------------------------------------------------------------------
   * " App 0 "
   * " App 0 > App 1 "
   * " App 0 > App 1 > App 2 "
   * " App 0 > ... > App n-1 > App n "
   *
   * @function fullBreadcrumb
   * @param {object[]} crumbs - an array of crumbs.
   * @param {string} crumbs[].displayName - the title of the crumb.
   * @param {function} [crumbs[].action] - the callback for the crumb.
   */
  fullBreadcrumb = crumbs => {
    if (this.compact) {
      this.compact = false;

      // clear out all the old crumbs...
      this.breadcrumbElement.replaceChildren();

      /**
       * create a crumb and action (if any).
       * @param {Object} crumb
       */
      const addCrumb = crumb => {
        const crumbElement = document.createElement('span');
        if (crumb.action != null) {
          crumbElement.classList.add('action');
        }
        crumbElement.innerText = crumb.displayName;
        crumbElement.addEventListener('click', () => crumb.action?.());
        this.breadcrumbElement.appendChild(crumbElement);
      };

      if (crumbs.length > 3) {
        // filter out unwanted crumbs...
        const filtered = [
          crumbs[0],
          crumbs[crumbs.length - 2],
          crumbs[crumbs.length - 1],
        ];
        filtered.forEach((crumb, index, array) => {
          addCrumb(crumb);
          if (index === 0) {
            this.breadcrumbElement.appendChild(this.separator());
            this.breadcrumbElement.appendChild(this.menu(crumbs.slice(1, -2)));
          }
          if (array.length - 1 > index) {
            this.breadcrumbElement.appendChild(this.separator());
          }
        });
      } else {
        crumbs.forEach((crumb, index, array) => {
          addCrumb(crumb);
          if (array.length - 1 > index) {
            this.breadcrumbElement.appendChild(this.separator());
          }
        });
      }
    }
  };

  /**
   * Create a compact version of the breadcrumb.
   * " ... > App title "
   *
   * @function compactBreadcrumb
   * @param {object[]} crumbs - an array of crumbs.
   * @param {string} crumbs[].displayName - the title of the crumb.
   * @param {function} [crumbs[].action] - the callback for the crumb.
   */
  compactBreadcrumb = crumbs => {
    if (!this.compact) {
      this.compact = true;
      // clear out all the old crumbs...
      this.breadcrumbElement.replaceChildren();

      /**
       * create the app title crumb.
       * This crumb will have no action.
       * @param {Object} crumbObj - title of the crumb
       * @returns
       */
      const crumb = crumbObj => {
        const crumbElement = document.createElement('span');
        crumbElement.innerText = crumbObj.displayName;
        return crumbElement;
      };

      // a menu might be needed to display all crumbs proceeding the last crumb...
      if (crumbs.length > 1) {
        // put all, but the last, crumb into the menu (...)
        this.breadcrumbElement.appendChild(this.menu(crumbs.slice(0, -1)));
        this.breadcrumbElement.appendChild(this.separator());
      }

      if (crumbs.length !== 0) {
        // add the last crumb, as this is the current app title...
        this.breadcrumbElement.appendChild(crumb(crumbs[crumbs.length - 1]));
      }
    }
  };

  /**
   * Create a separator ">" between each crumb
   *
   * @function separator
   * @returns Element
   */
  separator() {
    this.separatorElement = this.createElement('eui-icon');
    this.separatorElement.name = 'chevron-right';
    return this.separatorElement;
  }

  /**
   * Add the crumbs to the menu
   *
   * @function menu
   * @param {object[]} crumbs - an array of crumbs.
   * @param {string} crumbs[].displayName - the title of the crumb.
   * @param {function} [crumbs[].action] - the callback for the crumb.
   * @returns
   */
  menu(crumbs) {
    const menu = this.createElement('eui-app-bar-breadcrumb-menu');
    menu.hidden = true;
    menu.crumbs = [...crumbs];
    return menu;
  }
}

const style = `
:host {
  display: inline-block;
}

span {
  color: var(--gray-text,#6A6A6A);
  cursor: default;
  font-size: 14px;
  font-weight: 400;
  flex: none;
}

span.action:hover {
  border-bottom: 1px solid var(--gray-text, #6A6A6A);
  cursor: pointer;
}

#breadcrumb > span:last-child {
    color: var(--text, #242424);
    font-size: inherit;
    font-weight: inherit;
    cursor: default;
    pointer-events: none;
    flex: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.temporary {
  visibility: hidden;
  position: absolute;
  left: -9999;
}

eui-icon[name=chevron-right] {
  --icon-color: var(--gray-text, #6A6A6A);
  margin: 0 var(--space-small, 4px);
}
`;

const template = `<div id="breadcrumb"></div>`;

definition('eui-app-bar-breadcrumb', {
  style,
  template,
  props: {
    availableWidth: { type: Number },
    crumbs: { type: Array, default: [] },
  },
})(Breadcrumb);
