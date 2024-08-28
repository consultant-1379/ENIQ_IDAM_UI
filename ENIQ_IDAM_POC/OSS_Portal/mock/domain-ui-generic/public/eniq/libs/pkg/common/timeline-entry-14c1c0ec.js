import { R, b, w, L as LitComponent, $ } from './lit-component-430a97d9.js';
import { d as definition } from './index-b5c18b0a.js';
import { Icon } from '../@eui/theme/icon.js';
import { M as Menu, a as MenuItem, i as i$2, E as ESCAPE_KEY, T as TAB_KEY, C as Checkbox, S as SPACE_KEY } from './menu-ed843685.js';
import { l as l$1 } from './if-defined-fd12e107.js';
import { T as TextField } from './text-field-cc7ce4be.js';
import { A as Accessibility$1 } from './accessibility-e96b3ad8-a1d8d2ef.js';
import { e as e$1, i as i$1, t, o } from './class-map-40cf41c7.js';
import { B as Button } from './button-4832c86a.js';
import { A as ActionableIcon } from './dropdown-ed8e8c66.js';
import { Tooltip } from '../@eui/base/tooltip.js';

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {H:i}=R,r=o=>void 0===o.strings,e=()=>document.createComment(""),u=(o,t,n)=>{var v;const l=o._$AA.parentNode,d=void 0===t?o._$AB:t._$AA;if(void 0===n){const t=l.insertBefore(e(),d),v=l.insertBefore(e(),d);n=new i(t,v,o,o.options);}else {const i=n._$AB.nextSibling,t=n._$AM,r=t!==o;if(r){let i;null===(v=n._$AQ)||void 0===v||v.call(n,o),n._$AM=o,void 0!==n._$AP&&(i=o._$AU)!==t._$AU&&n._$AP(i);}if(i!==d||r){let o=n._$AA;for(;o!==i;){const i=o.nextSibling;l.insertBefore(o,d),o=i;}}}return n},c=(o,i,t=o)=>(o._$AI(i,t),o),f={},s=(o,i=f)=>o._$AH=i,a=o=>o._$AH,m=o=>{var i;null===(i=o._$AP)||void 0===i||i.call(o,!1,!0);let t=o._$AA;const n=o._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o;}};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$1(class extends i$1{constructor(r$1){if(super(r$1),r$1.type!==t.PROPERTY&&r$1.type!==t.ATTRIBUTE&&r$1.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r(r$1))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===b||t$1===w)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return b}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return b}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return b;return s(i),t$1}});

var style = ":host {\n  display: block;\n  box-sizing: border-box;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica', 'sans-serif');\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([line]) .accordion__item {\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  border-color: var(--accordion-border-color, #878787);\n}\n\n.accordion {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  opacity: 1;\n}\n\n.accordion__item {\n  padding: 0;\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  border-width: 1px 0;\n}\n\n.accordion__item--sibling {\n  margin: -1px 0 0 0;\n}\n\n.accordion__item--closed {\n  color: var(--text, #242424);\n}\n\n.accordion__item--closed .accordion__item__content {\n  display: none;\n  padding-bottom: 0;\n}\n\n.accordion__item__content {\n  padding: 16px 24px;\n  padding-top: 0;\n  user-select: text;\n}\n\n.accordion__item--opened .accordion__item__title {\n  font-weight: 400;\n}\n\n.accordion__item__title {\n  display: flex;\n  align-items: center;\n  padding: 9px 8px 10px;\n  line-height: 1.5;\n}\n\n.accordion__item__title:hover {\n  background: var(--table-hover, #dcdcdc);\n  cursor: pointer;\n}\n\n.left-slot,\n.right-slot {\n  flex: none;\n  display: flex;\n  align-items: center;\n}\n\n#accordion-chevron {\n  margin-left: var(--space-base, 8px);\n}\n\nslot[name='right']::slotted(*) {\n  line-height: 0;\n  margin-left: var(--space-base, 8px);\n}\n\nslot[name='left']::slotted(*) {\n  line-height: 0;\n  margin-right: var(--space-base, 8px);\n}\n\n.title {\n  flex: auto;\n}\n\n@supports selector(:focus-visible) {\n  :focus-visible {\n    outline: 2px solid var(--purple, #a56ebe);\n  }\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {Boolean} line - true adds a line above and below the accordion
 * @property {String} categoryTitle - the title of the accordion
 * @property {Boolean} open - true opens the accordion, false closes the accordion
 */
class Accordion extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  /**
   * handle a click on the accordion title.
   * @method _handleAccordionClick
   *
   * @private
   */
  _handleAccordionClick = () => {
    this.open = !this.open;
  };

  /**
   * If the accordion is part of a group of accordions then the margin must be different
   * depending on the line set to true/false. If the line is set to display, then it
   * must adjust it's margin so two stacked accordions look like there is only a line
   * of 1px between them and not a line of 2px.
   *
   * @function _previousSibling
   * @private
   */
  _previousSibling = () => {
    if (
      this.previousElementSibling &&
      this.previousElementSibling.localName === 'eui-accordion'
    ) {
      if (this.line) {
        return 'accordion__item--sibling';
      }
    }
    return '';
  };

  handleEvent(event) {
    if (event.type === 'keydown') {
      if (this.shadowRoot.querySelector(':focus')) {
        if (event.code === 'Space' || event.code === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          this._handleAccordionClick();
        }
      }
    }
  }

  /**
   * Render the <eui-accordion> component. This function is called each time a
   * prop changes.
   *
   * @method render
   */
  render() {
    const divTitle = $` <div
      class="accordion__item__title"
      @click=${this._handleAccordionClick}
    >
      <div class="left-slot">
        <slot name="left"></slot>
      </div>
      <span class="title">${this.categoryTitle}</span>
      <div class="right-slot">
        <slot name="right"></slot>
        <eui-icon
          id="accordion-chevron"
          name=${this.open ? 'chevron-up' : 'chevron-down'}
          size="16px"
        ></eui-icon>
      </div>
    </div>`;

    const divContent = $` <div
      part="content"
      class="accordion__item__content"
    >
      <slot></slot>
    </div>`;

    return $` <div class="accordion" tabindex="0" @keydown="${this}">
      <div
        class="accordion__item ${this._previousSibling()} ${this.open
          ? 'accordion__item--opened'
          : 'accordion__item--closed'}"
      >
        ${divTitle} ${divContent}
      </div>
    </div>`;
  }
}
definition('eui-accordion', {
  style,
  props: {
    categoryTitle: { attribute: true, type: String, default: 'Title' },
    line: { attribute: true, type: Boolean },
    open: { attribute: true, type: Boolean },
  },
})(Accordion);

var style$1 = ":host {\n  display: inline-block;\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host(.hide-more-crumbs) .menuCrumbsHolder {\n  display: none;\n}\n\n:host(.hide-trail-crumbs) .trailCrumbsHolder {\n  display: none;\n}\n\n.menuCrumbsHolder,\n.breadcrumb,\n.crumbsHolder {\n  display: flex;\n  align-items: center;\n}\n\nol {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n\n:host(.single-crumb) ol {\n  display: grid;\n}\nli {\n  display: inline-flex;\n  align-items: center;\n}\nli a {\n  text-decoration: none;\n  color: var(--gray-text, #6a6a6a);\n  font-size: var(--btn-font-size, 14px);\n  font-weight: 400;\n  cursor: pointer;\n  margin-right: var(--space-base, 8px);\n  border: 1px solid transparent;\n  line-height: 1;\n  margin-top: 4px;\n}\n\n.parentCrumb {\n  white-space: nowrap;\n}\n\nli a:hover {\n  border-bottom: 1px solid var(--gray-text, #6a6a6a);\n}\n\nol li.current-page {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nol li.current-page span {\n  font-size: 18px;\n  font-weight: var(--weight-medium, 500);\n  color: var(--btn-secondary-active, #242424);\n  min-width: 0;\n  white-space: nowrap;\n  display: inline-block;\n  border: 1px solid transparent;\n}\n\n:host(.single-crumb) li.current-page span {\n  display: inline;\n}\n\n.icon {\n  margin-right: var(--space-base, 8px);\n  --icon-color: var(--gray-text, #6a6a6a);\n}\n\n.ellipsis {\n  cursor: pointer;\n}\n\n.breadcrumb-menu {\n  line-height: 1.25;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {object} data - supplies menu data to breadcrumb
 */
class Breadcrumb extends LitComponent {
  static get components() {
    return {
      'eui-menu': Menu,
      'eui-menu-item': MenuItem,
      'eui-icon': Icon,
    };
  }

  /**
   * breadcrumb constructor.
   */
  constructor() {
    super();
    this._crumbsData = null;
    this._handleWindowResize = this._handleWindowResize.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._isBreadCrumbResized = this._isBreadCrumbResized.bind(this);
    this.initWidth = document.documentElement.clientWidth;
    this._removedTrailCrumbNodes = [];
  }

  /**
   * This method gets executed whenever a crumb link or menu item gets clicked
   * It bubbles a 'eui-breadcrumb:changed' event up with the activeAppPath as event detail
   *
   * @method _emitBreadcrumbChangedEvent
   * @param {String} activeAppPath - the path of the active crumb
   * @private
   */
  _emitBreadcrumbChangedEvent(activeAppPath) {
    this.bubble('eui-breadcrumb:change', { activeAppPath });
  }

  /**
   * This method takes generates updates the breadcrumb data
   * depending on the element that has been clicked on.
   *
   * @method _updateBreadcrumbData
   * @param {Object} targetElement - the target element that has been clicked on
   * @private
   */
  _updateBreadcrumbData(targetElement) {
    const activeAppPath = targetElement.getAttribute('data-path');
    const appNames = activeAppPath.split('/');
    const data = {
      path: activeAppPath,
      elements: {},
    };
    const { elements } = data;
    appNames.forEach(appName => {
      appName = this.getNonContextualPath(appName);

      elements[appName] = {
        label: this.data.elements[appName].label,
      };
    });

    this._emitBreadcrumbChangedEvent(activeAppPath);

    this.data = data;
  }

  /**
   * This method handles the click event emitted
   * by the crumb elements
   *
   * @method handleEvent
   * @param {Event} event - event from the component
   * @public
   */
  handleEvent(event) {
    event.stopPropagation();
    if (event.type === 'click') {
      this._updateBreadcrumbData(event.currentTarget);
    }
  }

  /**
   * This method handles all the resize events and throttles them
   * by handling the resize every 200ms.
   *
   * @method _handleWindowResize
   * @private
   * @returns {function} throttleHandler - function the throttles the resize events
   */
  _handleWindowResize() {
    let lastCallTime = 0;
    const delay = 200;
    const throttleHandler = () => {
      const currentCallTime = new Date().getTime();
      if (currentCallTime - lastCallTime < delay) {
        return;
      }
      lastCallTime = currentCallTime;
      this._handleResize();
    };
    return throttleHandler;
  }

  /**
   * This method pops the top element from the menu
   * by updating the internal _crumbsData object
   *
   * @method _popCrumbFromMenu
   * @private
   */
  _popCrumbFromMenu() {
    const parentCrumbData = this._crumbsData.moreCrumbsData.pop();
    this._crumbsData.trailCrumbsData.push(parentCrumbData);
    this.shadowRoot
      .querySelector('.breadcrumb')
      .prepend(this._removedTrailCrumbNodes[0]);
    if (this._crumbsData.moreCrumbsData.length > 0) {
      const trailCrumbData = this._crumbsData.moreCrumbsData.shift();
      this._crumbsData.trailCrumbsData.unshift(trailCrumbData);
      this.crumbsHolder.prepend(this._removedTrailCrumbNodes[1]);
    }
    this.populateMenu();
  }

  /**
   * This method checks if there is enough space
   * to add the trailing crumb back in from the menu
   *
   * @method _canTrailingCrumbBeAdded
   * @private
   * @returns {boolean} true/false - trailing crumb can be added / trailing crumb cannot be added
   */
  _canTrailingCrumbBeAdded() {
    const { moreCrumbsData } = this._crumbsData;
    if (moreCrumbsData < 1) {
      return false;
    }
    const canCrumbBeAdded =
      this.parentElement.offsetWidth - this.offsetWidth >=
      moreCrumbsData[0].crumbWidth +
        moreCrumbsData[moreCrumbsData.length - 1].crumbWidth;
    return canCrumbBeAdded;
  }

  /**
   * This method pushes the trailcrumb into the menu
   * by updating the internal _crumbsData object
   *
   * @method _pushCrumbIntoMenu
   * @private
   */
  _pushCrumbIntoMenu() {
    if (this._crumbsData.trailCrumbsData.length > 0) {
      const parentCrumbData = this._crumbsData.trailCrumbsData.pop();
      this._crumbsData.moreCrumbsData.push(parentCrumbData);
      if (this._crumbsData.trailCrumbsData.length > 0) {
        const trailCrumbData = this._crumbsData.trailCrumbsData.pop();
        this._crumbsData.moreCrumbsData.unshift(trailCrumbData);
      }
    }
    this.populateMenu();
  }

  /**
   * This method checks if the active crumb is getting truncated
   *
   * @method _isActiveCrumbTruncated
   * @private
   * @returns {boolean} true/false - active crumb is truncated / active crumb is not truncated
   */
  _isActiveCrumbTruncated() {
    if (this._crumbsData.nrCrumbs === 2) {
      const currentPageDimensions = this.currentPage.getBoundingClientRect();
      return (
        currentPageDimensions.left >= 0 &&
        currentPageDimensions.right >=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    return this.currentPage.clientWidth < this.currentPage.scrollWidth;
  }

  /**
   * This method generates new data and updates the component
   * data when clicking on a crumb in the menu
   *
   * @method _handleMenuClick
   * @param {String} activeAppPath - The path of the active crumb
   * @private
   */
  _handleMenuClick(activeAppPath) {
    const appNames = activeAppPath.split('/');
    const data = {
      path: activeAppPath,
      elements: {},
    };
    const { elements } = data;
    appNames.forEach(appName => {
      elements[appName] = {
        label: this.data.elements[appName].label,
      };
    });

    this._emitBreadcrumbChangedEvent(activeAppPath);

    this.data = data;
  }

  /**
   * This method determines if there is no trailcrumbs (and an active crumb)
   * Then it adds a class to handle ellipse on the active crumb text
   *
   * @method _fixEllipsisForActiveCrumb
   * @private
   */
  _fixEllipsisForActiveCrumb() {
    const trailCrumbCount = this._crumbsData.trailCrumbsData.length;
    const arrayIDs = [];
    this._crumbsData.trailCrumbsData.forEach(crumb => {
      arrayIDs.push(crumb.crumbId);
    });
    const visibleCrumbs = this._getVisibleCrumbs();
    visibleCrumbs.forEach(crumb => {
      const crumbID = crumb.getAttribute('data-id');
      if (!arrayIDs.includes(crumbID)) {
        crumb.remove();
      }
    });

    if (!trailCrumbCount && this._crumbsData.activeCrumbData) {
      this.classList.add('single-crumb');
    } else {
      this.classList.remove('single-crumb');
    }
  }

  /**
   * This method handles the resize behaviour
   * when resizing outwards
   *
   * @method _handleResizeOut
   * @private
   */
  _handleResizeOut() {
    // What needs to be done if there are 3 crumbs
    if (this._crumbsData.nrCrumbs > 1 && this._crumbsData.nrCrumbs < 4) {
      if (
        this._crumbsData.nrCrumbs === 2 &&
        this._getVisibleCrumbs().length < 1
      ) {
        if (this._removedTrailCrumbNodes.length > 0) {
          this.classList.add('hide-more-crumbs');
          this.shadowRoot
            .querySelector('.breadcrumb')
            .prepend(this._removedTrailCrumbNodes[0]);
        }
        return;
      }
      if (this._removedTrailCrumbNodes.length < 1) {
        return;
      }

      const visibleCrumbs = this._getVisibleCrumbs();
      if (visibleCrumbs.length > 0) {
        if (this._crumbsData.moreCrumbsData.length === 0) {
          this.classList.add('hide-more-crumbs');
        }
      }

      if (!this._canTrailingCrumbBeAdded()) {
        return;
      }

      this._popCrumbFromMenu();
      return;
    }

    const visibleCrumbs = this._getVisibleCrumbs();
    if (visibleCrumbs.length === 2 && !this._isActiveCrumbTruncated()) {
      return;
    }

    if (!this._canTrailingCrumbBeAdded()) {
      return;
    }
    this._popCrumbFromMenu();
  }

  /**
   * This method handles the resize behaviour
   * when resizing inwards
   *
   * @method _handleResizeIn
   * @private
   */
  _handleResizeIn() {
    // What needs to be done if there are 3 crumbs
    if (this._crumbsData.nrCrumbs > 1 && this._crumbsData.nrCrumbs < 4) {
      const visibleCrumbs = this._getVisibleCrumbs();
      if (visibleCrumbs.length > 0 && this._isActiveCrumbTruncated()) {
        this.classList.remove('hide-more-crumbs');
        if (visibleCrumbs[0]) {
          visibleCrumbs[0].remove();
        }
        if (visibleCrumbs[1]) {
          visibleCrumbs[1].remove();
        }
        this._removedTrailCrumbNodes = [...visibleCrumbs];
        this._pushCrumbIntoMenu();
      }
      return;
    }

    if (!this._isActiveCrumbTruncated()) {
      return;
    }

    const visibleCrumbs = this._getVisibleCrumbs();
    this._removedTrailCrumbNodes = [...visibleCrumbs];
    visibleCrumbs.forEach(crumb => crumb.remove());
    this._pushCrumbIntoMenu();
  }

  /**
   * This method creates an object in the format
   * necessary to be passed into the menu as to
   * create a menu item.
   *
   * @method _getMenuCrumb
   * @param {Object} el - the crumb element used to create menu item
   * @private
   */
  _getMenuCrumb(el) {
    return {
      value: this.data.elements[el.crumbId].label,
      action: () => {
        let dataPath = null;
        this._crumbsData.moreCrumbsData.some(el2 => {
          const flag = el2.crumbId === el.crumbId;
          if (flag) {
            dataPath = el2.crumbPath;
          }
          return flag;
        });
        this._handleMenuClick(dataPath);
      },
    };
  }

  /**
   * This method checks if the resize event is because of
   * a resize inwards
   *
   * @method _isBreadCrumbResizedIn
   * @private
   * @returns {boolean} true/false - is breadcrumb being resized inwards
   */
  _isBreadCrumbResizedIn() {
    const activeCrumbSpan = this.currentPage.querySelector('span');
    return this.currentPage.clientWidth < activeCrumbSpan.offsetWidth;
  }

  /**
   * This method uses the internal _crumbsData to build
   * the data object necessary for the menu component
   * to render the correct menu items
   *
   * @method _getMenuCrumbs
   * @private
   * @return {Array/null} Array containing the Menu item data / null if there is no data
   */
  _getMenuCrumbs() {
    const visibleCrumbs = this._getVisibleCrumbs();
    if (
      visibleCrumbs.length === 0 &&
      this._crumbsData.trailCrumbsData.length > 0
    ) {
      this._crumbsData.trailCrumbsData.forEach(element => {
        if (element.crumbId === this._crumbsData.parentCrumb.crumbId) {
          this._crumbsData.moreCrumbsData.push(element);
        } else {
          this._crumbsData.moreCrumbsData.unshift(element);
        }
      });
    }
    const data = this._crumbsData.moreCrumbsData;

    if (data.length < 1) {
      this.classList.add('hide-more-crumbs');
      const parentCrumb = this.shadowRoot.querySelector(
        'li:not(.current-page)',
      );
      if (parentCrumb) {
        const firstCrumbID = parentCrumb.getAttribute('data-id');
        const parentID = this._crumbsData.parentCrumb.crumbId;
        if (this._crumbsData.nrCrumbs > 1 && parentID !== firstCrumbID) {
          this.shadowRoot
            .querySelector('.breadcrumb')
            .prepend(this._removedTrailCrumbNodes[0]);
        }
        if (this._crumbsData.activeCrumbData.crumbId === firstCrumbID) {
          parentCrumb.remove();
        }
      }
      return null;
    }
    this.classList.remove('hide-more-crumbs');

    const menuData = data.map(el => this._getMenuCrumb(el));
    return menuData;
  }

  /**
   * This method handles the resize event
   * It determines whether to trigger a resize in or out
   *
   * @method _handleResize
   * @private
   */
  _handleResize() {
    if (!this.data) {
      return;
    }

    const { clientWidth } = document.documentElement;
    if (clientWidth === this.initWidth) {
      if (this._isBreadCrumbResizedIn()) {
        this._handleResizeIn();
      } else {
        this._handleResizeOut();
      }
      return;
    }

    if (clientWidth > this.initWidth) {
      this._handleResizeOut();
    } else {
      this._handleResizeIn();
    }

    this.initWidth = clientWidth;
  }

  /**
   * This method checks if the breadcrumb is getting resized
   *
   * @method _isBreadCrumbResized
   * @private
   * @returns {boolean} true/false - is breadcrumb being resized
   */
  _isBreadCrumbResized() {
    const activeCrumbSpan = this.currentPage.querySelector('span');
    return this.currentPage.clientWidth !== activeCrumbSpan.offsetWidth;
  }

  /**
   * This method updates the internal _crumbsData with the visible trailcrumbs
   *
   * @method _updateCrumbsData
   * @private
   */
  _updateCrumbsData() {
    this._fixEllipsisForActiveCrumb();
    const trailCrumbs = this.shadowRoot.querySelectorAll(
      'li:not(.current-page)',
    );
    trailCrumbs.forEach(trailCrumb => {
      this._crumbsData.trailCrumbsData.some(crumbData => {
        const flag = crumbData.crumbId === trailCrumb.dataset.id;
        if (flag) {
          crumbData.crumbWidth = trailCrumb.offsetWidth;
        }
        return flag;
      });
    });

    this._crumbsData.activeCrumbData.crumbWidth = this.currentPage.offsetWidth;
  }

  /**
   * This method returns all crumbs visible that are not the current page
   *
   * @method _getVisibleCrumbs
   * @private
   * @returns {Array|Boolean} - returns array of crumbs visible
   */
  _getVisibleCrumbs() {
    if (!this.crumbsHolder) {
      return false;
    }
    const visibleCrumbs = this.shadowRoot.querySelectorAll(
      'li:not(.current-page)',
    );
    return visibleCrumbs;
  }

  /**
   * Get app path that has non contextual information
   * @param {String} path app path which may contain contextual information
   */
  getNonContextualPath(path) {
    // There are two ways of routing need to be taken care of in contextual breadcrumb:
    // https://euisdk.seli.wh.rnd.internal.ericsson.com/euisdkdocs/#docs?chapter=app_routing
    if (path.includes('?')) {
      path = path.substring(0, path.indexOf('?'));
    } else if (path.includes('!')) {
      path = path.substring(0, path.indexOf('!'));
    }
    return path;
  }

  /**
   * This method returns the crumbs in a standard
   * presentation to be used throughout this component
   *
   * @method _getCrumbData
   * @param {Array} crumbs - Array of crumb Id's
   * @private
   * @returns {object} crumb object containing a crumbId and path
   */
  _getCrumbData(crumbs) {
    const appPath = this.getNonContextualPath(crumbs[crumbs.length - 1]);
    const crumbPath =
      this.data.elements[appPath].contextualPath || crumbs.join('/');
    const crumbId = appPath;
    crumbs.pop();
    return { crumbPath, crumbId };
  }

  /**
   * This method returns the parent crumb in a standard
   * presentation to be used throughout this component
   *
   * @method _getCrumbData
   * @param {Array} crumb - Array of crumb Id's
   * @private
   * @returns {object} parent crumb object containing a crumbId and path
   */
  _getParentData(crumb) {
    const appPath = this.getNonContextualPath(crumb);
    const crumbPath = this.data.elements[appPath].contextualPath || appPath;
    const crumbId = appPath;
    return { crumbPath, crumbId };
  }

  /**
   * This method creates and returns the markup for the active crumb
   * by using the internal _crumbsData
   *
   * @method _buildActiveCrumb
   * @private
   */
  _buildActiveCrumb() {
    if (!this.data) {
      return w;
    }
    const data = this._crumbsData;
    const { activeCrumbData } = data;
    if (!activeCrumbData) {
      return w;
    }

    const activeLinkLabel = this.data.elements[activeCrumbData.crumbId].label;
    return $`<span aria-current="page">${activeLinkLabel}</span>`;
  }

  /**
   * This method creates and returns the markup for the trailing crumb(s)
   * by using the internal _crumbsData
   *
   * @method _buildTrailCrumbs
   * @private
   */
  _buildTrailCrumbs() {
    if (!this.data) {
      return w;
    }
    const data = this._crumbsData;
    const { nrCrumbs } = data;

    if (nrCrumbs < 3) {
      // fix for lit-html trouble
      const trailingCrumb = this._getVisibleCrumbs();
      if (trailingCrumb.length > 0) {
        trailingCrumb.forEach(crumb => {
          if (
            crumb.getAttribute('data-id') ===
            this._crumbsData.parentCrumb.crumbId
          ) {
            this._removedTrailCrumbNodes.push(crumb);
          }
          crumb.remove();
        });
      }
      if (nrCrumbs === 1) {
        this._removedTrailCrumbNodes = [];
      }
    }

    return this._crumbsData.trailCrumbsData.map(crumbData => {
      const { crumbPath, crumbId } = crumbData;
      if (crumbId === this._crumbsData.parentCrumb.crumbId) {
        return w;
      }
      const crumbLabel = this.data.elements[crumbId].label;
      return this._generateCrumb(crumbId, crumbPath, crumbLabel);
    });
  }

  /**
   * generates parent crumb
   * @function _parentCrumb
   * @private
   */
  _parentCrumb() {
    if (this._crumbsData) {
      if (this._crumbsData.parentCrumb.crumbId && this.data) {
        const crumbLabel =
          this.data.elements[this._crumbsData.parentCrumb.crumbId].label;
        const parentCrumb = this._generateCrumb(
          this._crumbsData.parentCrumb.crumbId,
          this._crumbsData.parentCrumb.crumbPath,
          crumbLabel,
          true,
        );
        return parentCrumb;
      }
    }
    return w;
  }

  /**
   * generates crumb
   * @function _generateCrumb
   * @private
   * @param {String} crumbId - ID of crumb to generate
   * @param {String} crumbPath - Path of crumb to generate
   * @param {String} crumbLabel - Label of crumb to generate
   * @param {Boolean} parentCrumb - If true sets the class of the link for parent crumb
   */
  _generateCrumb(crumbId, crumbPath, crumbLabel, parentCrumb) {
    const link = parentCrumb
      ? $`<a @click="${this}" data-path="${crumbPath}" class="parentCrumb"
          >${crumbLabel}</a
        >`
      : $`<a @click="${this}" data-path="${crumbPath}">${crumbLabel}</a>`;
    return $` <li data-id="${crumbId}">
      ${link}
      <eui-icon name="chevron-right" class="icon"></eui-icon>
    </li>`;
  }

  /**
   * This method generates the internal _crumbsData from the component data.
   *
   * @method _getBreadcrumbsData
   * @private
   */
  _getBreadcrumbsData() {
    if (!this.data) {
      return w;
    }

    const { path } = this.data;
    const crumbs = path.split('/');
    const nrCrumbs = crumbs.length;

    // Get active crumb data
    const activeCrumbData = this._getCrumbData(crumbs);

    // Get trail crumbs and more crumbs data
    const trailCrumbsData = [];
    let moreCrumbsData = [];
    let parentCrumb = {};
    if (nrCrumbs > 3) {
      trailCrumbsData.push(this._getCrumbData(crumbs));
      moreCrumbsData = [...crumbs].map(() => this._getCrumbData(crumbs));
      parentCrumb = moreCrumbsData.pop();
      trailCrumbsData.push(parentCrumb);
    } else if (nrCrumbs > 1 && nrCrumbs < 4) {
      parentCrumb = this._getParentData(crumbs[0]);
      while (crumbs.length > 0) {
        trailCrumbsData.unshift(this._getCrumbData(crumbs));
      }
    }

    // creates the object to populate _crumbsData with
    const tmpData = {
      nrCrumbs,
      activeCrumbData,
      trailCrumbsData,
      moreCrumbsData,
      parentCrumb,
    };

    this._crumbsData = { ...tmpData };
    return tmpData;
  }

  /**
   * Lifecycle callback executed when the component is connected to the DOM
   * This is a good place to add the resize event listener
   *
   * @method didConnect
   *
   */
  didConnect() {
    window.addEventListener('resize', this._handleWindowResize(), {
      passive: true,
    });
  }

  /**
   * Renders the breadcrumb component. This function is called each time a
   * prop changes.
   *
   * @method render
   */
  render() {
    this._getBreadcrumbsData();
    return $`
      <div class="breadcrumb">
        ${this._parentCrumb()}
        <div class="menuCrumbsHolder"></div>
        <ol class="crumbsHolder">
          ${this._buildTrailCrumbs()}
          <li class="current-page">${this._buildActiveCrumb()}</li>
        </ol>
      </div>
    `;
  }

  /**
   * method which toggles the menu when the
   * ellipsis icon is clicked
   * @method toggleMenu
   * @param {Event} event - event from the ellipsis icon being clicked
   * @private
   */
  toggleMenu(event) {
    event.preventDefault();
    this.menu.position = event;
    this.menu.show = true;
  }

  /**
   * method which populate the breadcrumb menu.
   * if there is previous menu-items in the menu
   * these are first removed before more added
   *
   * @method populateMenu
   * @private
   */
  populateMenu() {
    this.menu.data = this._getMenuCrumbs();
    const menuItems = this.menu.querySelectorAll('eui-menu-item');
    if (menuItems.length > 0) {
      menuItems.forEach(item => {
        item.remove();
      });
    }
    if (this.menu.data) {
      this.menu.data.reverse();
      this.menu.data.forEach(item => {
        const menuItem = this.createElement('eui-menu-item');
        menuItem.label = item.value;
        menuItem.addEventListener('eui-menuItem:click', item.action);
        this.menu.append(menuItem);
      });
    }
  }

  /**
   * Lifecycle callback executed when the component is rendered to the DOM
   *
   * @method didRender
   * @private
   */
  didRender() {
    if (!this.data) {
      return;
    }

    if (!this.crumbsHolder) {
      this.crumbsHolder = this.shadowRoot.querySelector('.crumbsHolder');
    }

    if (!this.currentPage) {
      this.currentPage = this.crumbsHolder.querySelector('.current-page');
    }

    // checking if the menu doesn't exist
    if (!this.menu) {
      this.menuCrumbsHolder =
        this.shadowRoot.querySelector('.menuCrumbsHolder');
      const ellipsisIcon = this.createElement('eui-icon');
      this.menu = this.createElement('eui-menu');
      this.menu.classList.add('breadcrumb-menu');
      ellipsisIcon.name = 'ellipsis';
      ellipsisIcon.classList.add('icon');
      ellipsisIcon.classList.add('ellipsis');
      ellipsisIcon.addEventListener('click', event => {
        event.stopPropagation();
        this.toggleMenu(event);
      });
      this.menuCrumbsHolder.append(ellipsisIcon);
      this.menuCrumbsHolder.append(this.menu);
      const chevronIcon = this.createElement('eui-icon');
      chevronIcon.name = 'chevron-right';
      chevronIcon.classList.add('icon');
      this.menuCrumbsHolder.append(chevronIcon);
    }

    this._updateCrumbsData();

    if (this._isBreadCrumbResized()) {
      this._handleResize();
    }

    // if 3 crumbs try resizing again
    if (this._crumbsData.nrCrumbs === 3 || this._crumbsData.nrCrumbs === 2) {
      this._handleResize();
    }

    this._fixEllipsisForActiveCrumb();
    this.populateMenu();
  }

  /**
   * Lifecycle hook to hook into the point where the component has been deleted from the DOM.
   * This is a good point to remove the resize event listener.
   *
   * @function didDisconnect
   */
  didDisconnect() {
    window.removeEventListener('resize', this._handleWindowResize(), {
      passive: true,
    });
  }
}

definition('eui-breadcrumb', {
  style: style$1,
  props: {
    data: { type: Object },
  },
})(Breadcrumb);

var style$2 = ":host {\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.dropdown {\n  display: inline-block;\n  position: relative;\n  width: fit-content;\n  line-height: initial;\n}\n.btnLabel {\n  display: flex;\n  align-items: center;\n}\n.btnText {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n}\n";

var comboboxTypes = {
  SINGLE: 'single',
  MULTI: 'multi',
  CLICK: 'click',
};

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {Array} data - data to configure the tree
 * @property {String} dataType - define if comboBox contains actions,
 * single select or multi select
 * @property {Array} dataInnerlabel - label of dropdown button on selecting
 * checkbox menu item when data type is multi
 * @property {String} noResultLabel - label of comboBox menuItem when searched string is unavailable
 * @property {Boolean} disabled - disabled the comboBox button
 * @property {String} placeholder - set textfield placeholder attribute for combobox
 * @property {String} selectAll - Set the label of the select all option.
 * @property {String} width - allows to set fixed width for comboBox component
 */
class ComboBox extends Accessibility$1(LitComponent) {
  static get components() {
    return {
      'eui-text-field': TextField,
      'eui-menu': Menu,
      'eui-menu-item': MenuItem,
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    this.position = {};
    this.hide = this.hide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this._getFilteredList = this._getFilteredList.bind(this);
  }

  setInitialFocus() {
    this.shadowRoot.querySelector('eui-text-field').setInitialFocus();
  }

  /**
   * Lifecycle callback executed when the component is connected to the DOM
   *
   * @method didConnect
   *
   */
  didConnect() {
    super.didConnect();
    this.menuItems = null;
    this.suffixes = new Map(this.dataInnerlabel);
  }

  /**
   * lifecycle hook
   *
   * @method didUpgrade
   *
   */
  didUpgrade() {
    this.inputField = this.shadowRoot.querySelector('eui-text-field');
    this.menu = this.shadowRoot.querySelector('eui-menu');

    // Enforce correct dataType
    this.dataType = ['single', 'multi'].includes(this.dataType)
      ? this.dataType
      : 'single';

    // Set initial Text-field value
    this._setTextFieldLabel();
  }

  /**
   * lifecycle hook to hook into changes to props.
   *
   * @function didChangeProps
   * @param {Object} changedProps - map containing changed props
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    if (changedProps.has('noResultLabel')) {
      const emptyElem = this.menu.shadowRoot.querySelector('.empty');
      if (emptyElem) {
        // Element won't exist until menu is first toggled
        emptyElem.innerHTML = this.noResultLabel;
      }
    }
    if (changedProps.has('dataInnerlabel')) {
      this.suffixes = new Map(this.dataInnerlabel);
      this._setTextFieldLabel();
    }
    if (changedProps.has('data')) {
      // Clear menuItems as they will be the old menuItem elements.
      this.menuItems = null;
      this._setTextFieldLabel();
    }
    if (changedProps.has('dataType')) {
      this.dataType = ['single', 'multi'].includes(this.dataType)
        ? this.dataType
        : 'single';
    }
    if (changedProps.has('disabled')) {
      if (this.disabled && this._visible === true) {
        this.hide();
      }
    }
  }

  /**
   * create icons within menu items
   *
   * @method _makeIconsOptions
   * @param {object[]} iconOpts - an array of icon definitions.
   * @param {string} iconOpts[].name - the name of the icon.
   * @param {string} [iconOpts[].position] - the position of the icon (left/right).
   * @param {string} [iconOpts[].color] - the color of the icon.
   * @private
   */
  _makeIconsOptions(iconOpts) {
    if (!Array.isArray(iconOpts)) {
      return w;
    }

    return iconOpts.map(({ name, position = 'left', color }) => {
      if (name == null) {
        return w;
      }

      return $`<eui-icon
        name="${name}"
        slot="${position}"
        color="${l$1(color)}"
      ></eui-icon>`;
    });
  }

  /**
   * create comboBox menu items
   * @method _makeDropdownOptions
   * @private
   */
  _makeDropdownOptions() {
    return this.data.map(({ disabled, label, value, checked, icons }) => {
      const parseValue = dataValue => {
        let parsedValue;

        switch (typeof dataValue) {
          case 'string':
            parsedValue = dataValue;
            break;
          case 'number':
          case 'boolean':
            parsedValue = `${dataValue}`;
            break;
        }
        return parsedValue;
      };

      let menuValue = parseValue(value);
      let menuLabel = parseValue(label);

      // fallbacks
      if (!menuValue && !menuLabel) {
        // No valid item
        return w;
      }

      // use value or label if the other one is undefined
      if (!menuValue) {
        menuValue = menuLabel;
      } else if (!menuLabel) {
        menuLabel = menuValue;
      }

      return $`<eui-menu-item
        label=${menuLabel}
        value=${menuValue}
        ?selected=${checked}
        ?disabled=${disabled}
        >${icons ? this._makeIconsOptions(icons) : w}</eui-menu-item
      >`;
    });
  }

  /**
   * set menu position
   * @method _setMenuPosition
   * @private
   */
  _setMenuPosition() {
    const { x, y, height, width } = this.getBoundingClientRect();
    this.menu.position = {
      x,
      y: y + height,
      height,
      width,
    };
    this.menu.style.minWidth = `${this.offsetWidth}px`;
  }

  /**
   * make comboBox menu visible
   * @method show
   *
   * @public
   */
  show = () => {
    if (this.disabled || this._visible) {
      return;
    }

    // initialize menuItems when show first time
    if (!this.menuItems) {
      this.setMenuItems();
    }

    if (this.dataType === comboboxTypes.SINGLE) {
      // Display selected filtered menu-item if any, otherwise display all
      const selectedMenuItem = this.menu.querySelector(
        'eui-menu-item[selected]',
      );
      if (selectedMenuItem) {
        this.showFilteredList([selectedMenuItem]);
      } else {
        this.showFilteredList(this._getFilteredList());
      }
    } else if (this.dataType === comboboxTypes.MULTI) {
      this._setInputFieldValue('');
      this.showFilteredList(this._getFilteredList());
      if (this.selectAll) {
        this._makeSelectAllOptionVisible();
        // set the position of menu
        this._setMenuPosition();
      }
    }

    if (!this._visible) {
      this._visible = true;
      this.menu.show = true;
      const menu = this.menu.shadowRoot.querySelector('.menu');
      menu.removeAttribute('tabindex');
      const inputFld =
        this.inputField &&
        this.inputField.shadowRoot.querySelector('input[type="text"]');
      const len = inputFld.value && inputFld.value.length;
      inputFld.focus();
      inputFld.setSelectionRange(len, len);
    }
  };

  /**
   * make comboBox menu hidden
   * @method hide
   *
   * @public
   */
  hide() {
    this._visible = false;
    this.menu.show = false;
    // TODO review with implementing key handling on text-field
    //  text-field shadow may not be ready, on init
    //  Datepicker had similar issue with .focus() vs setInitialFocus()
    if (this.shadowRoot) {
      requestAnimationFrame(() => {
        this.setInitialFocus();
      });
    }
  }

  /**
   * return component's value
   *
   * @return {string}
   */
  get value() {
    return this.inputField.value;
  }

  /**
   * set input field value
   *
   * @param {string} newVal
   *
   */
  set value(newVal = '') {
    // If not a string or number, then just return
    if (typeof newVal !== 'string' && typeof newVal !== 'number') {
      return;
    }
    this._setInputFieldValue(newVal);
    this.handleInputChange();
  }

  /**
   * set comboBox input textfield value
   * @function _setInputFieldValue
   * @private
   */
  _setInputFieldValue = value => {
    this.inputField.value = value;
  };

  /**
   * filter menu-items based on text entered in input field
   * @function _getFilteredList
   *
   * @returns {Array} filtered item-list
   */
  _getFilteredList() {
    if (this.menuItems === null) {
      return [];
    }
    let inputValue = this.value ? this.value.toLowerCase() : '';

    // eslint-disable-next-line max-len
    const filteredList = this.menuItems.filter(item =>
      item.label.toLowerCase().includes(inputValue),
    );
    // Input value may have characters that need escaped for regexp pattern
    inputValue = inputValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    for (let i = 0; i < filteredList.length; i += 1) {
      if (inputValue !== '') {
        const regex = new RegExp(inputValue, 'gi');
        const menuItemName =
          filteredList[i].shadowRoot.querySelector('#label').textContent;
        const finalValue = menuItemName.replace(
          regex,
          str => `<span class="bold">${str}</span>`,
        );
        filteredList[i].shadowRoot.querySelector('#label').innerHTML =
          finalValue;
      } else {
        this.menu.focusedChild = -1;
        const _checkForBoldFont =
          filteredList[i].shadowRoot.querySelectorAll('.bold');
        if (_checkForBoldFont.length > 0) {
          _checkForBoldFont.forEach(el => el.classList.remove('bold'));
        }
        filteredList[i].classList.remove('highlight');
      }
    }
    return filteredList;
  }

  /**
   * handle display of filtered list
   *
   * @function showFilteredList
   *
   */
  showFilteredList(list) {
    // handle No Result Found scenario
    const menu = this.menu.shadowRoot.querySelector('.menu');
    let emptyElem = menu.querySelector('.empty');
    if (!emptyElem) {
      // inject into menu's shadow an empty div- No Result found element
      const div = document.createElement('div');
      div.className = 'empty hidden';
      div.innerHTML = this.noResultLabel;
      emptyElem = menu.appendChild(div);
    }

    if (this.menuItems !== null) {
      // Hide all items
      this.menuItems.forEach(item => {
        item.classList.add('hidden');
      });
    }

    if (Array.isArray(list) && list.length === 0) {
      emptyElem.classList.remove('hidden'); // if filtered array is empty show empty div
    } else {
      emptyElem.classList.add('hidden');

      // Unhide only filtered list
      list.forEach(item => {
        item.classList.remove('hidden');
      });
    }
    this._positionFilteredMenuItems();
  }

  /**
   * set the position of menu when the menu items are filtered
   *
   * @function _positionFilteredMenuItems
   *
   */
  _positionFilteredMenuItems() {
    this._setMenuPosition();
    this.menu._positionMenu();
  }

  /**
   * handle value change in input textfield
   * @function handleInputChange
   * @public
   */
  handleInputChange() {
    if (!this.menuItems) {
      this.setMenuItems();
    }
    if (!this._visible && this.value) {
      this.show();
    }

    const filteredList = this._getFilteredList();
    this.showFilteredList(filteredList);

    // To clear highlighted menuItem on deleting/removing it from input field
    if (this.dataType === comboboxTypes.SINGLE) {
      const selectedMenuItem = this.menu.querySelector(
        'eui-menu-item[selected]',
      );
      const dataItemSelected =
        this.data && this.data.filter(item => item.checked);
      if (selectedMenuItem) {
        selectedMenuItem.selected = false;
        if (dataItemSelected) {
          dataItemSelected[0].checked = false;
        }
      }
    }

    if (this.dataType === comboboxTypes.MULTI && this.selectAll) {
      if (this.value === '') {
        this._makeSelectAllOptionVisible();
      } else {
        const checkForSelectAllItem = this.menu.hasAttribute('select-all');
        if (checkForSelectAllItem) {
          const selectAllMenuItem =
            this.menu.shadowRoot.querySelector('#select-all');
          selectAllMenuItem.classList.add('hidden');

          const horizontalBreak = this.menu.shadowRoot.querySelector('hr');
          horizontalBreak.classList.add('hidden');
        }
      }
    }
  }

  /**
   * set the menu items in context
   * @method setMenuItems
   *
   * @public
   */
  setMenuItems = () => {
    const menuItems = this.menu.querySelectorAll('eui-menu-item');
    if (menuItems.length > 0) {
      this.menuItems = Array.from(menuItems);
    }
  };

  /**
   * handle key chevron click
   * @function handleChevronClick
   *
   */
  handleChevronClick = event => {
    event.stopPropagation();
    if (this._visible) {
      this.hide();
      this._setTextFieldLabel();
    } else {
      this.show();
    }
  };

  /**
   * Handle event 'eui-menu:click'
   *
   * @function handleEvent
   * @param {Event} event - an event
   */
  handleEvent(event) {
    if (event.type === 'eui-menu:change') {
      event.stopPropagation();
      this._handleMultipleComboxes();
      this.bubble('eui-combobox:change', event.detail);
    } else if (event.type === 'eui-menu:click') {
      event.stopPropagation();
      if (this.dataType === 'single') {
        this.hide();
      }
      this.bubble('eui-combobox:click', event.detail);
    } else if (event.type === 'eui-menu:hidden') {
      event.preventDefault();
      this.hide();
      this._setTextFieldLabel();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      this.show();
      // W3C, must focus on first/last item
      // If key held down next event scrolls menuItems
      requestAnimationFrame(() => {
        // allow menu lifecycle to execute
        // otherwise item will highlight but not have focus
        this.menu._handleKeyboard(event);
      });
    } else if (event.key === 'Escape') {
      // Loops back through eui-menu:hidden event
      this.menu._handleKeyboard(event);
    }
  }

  /**
   * handle click event being triggered on menu-item
   * for both single and multi-select comobobox
   * @function _handleMultipleDropdowns
   * @private
   */
  _handleMultipleComboxes = () => {
    this._setTextFieldLabel();
    this._syncComboboxDataProp();
  };

  /**
   * sync the data prop with respect to selected state of the menu-items
   * @function _syncComboboxDataProp
   * @private
   */
  _syncComboboxDataProp() {
    if (this.data) {
      const selectedItems = this.menu.menuItems.filter(item => item.selected);
      if (this.dataType === comboboxTypes.SINGLE && selectedItems.length) {
        this.data.forEach(element => {
          element.checked = element.label === selectedItems[0].label;
        });
      } else if (
        this.dataType === comboboxTypes.MULTI &&
        selectedItems.length
      ) {
        const selectedItemsLabel = new Set(
          selectedItems.map(item => item.label),
        );
        this.data.forEach(element => {
          element.checked = selectedItemsLabel.has(element.label);
        });
      } else {
        this.data.forEach(element => {
          element.checked = false;
        });
      }
      this.data = [...this.data];
    }
  }

  /**
   * Make select-all option visible
   * @function _makeSelectAllOptionVisible
   * @private
   */
  _makeSelectAllOptionVisible() {
    const selectAllMenuItem = this.menu.shadowRoot.querySelector('#select-all');
    if (selectAllMenuItem.classList.contains('hidden')) {
      selectAllMenuItem.classList.remove('hidden');
      const horizontalBreak = this.menu.shadowRoot.querySelector('hr');
      horizontalBreak.classList.remove('hidden');
    }
  }

  /**
   * Set suffix for input field label
   * @function _setLabelSuffix
   * @param {array} selectedItems - array of selectedItems
   */
  _setLabelSuffix(selectedItems) {
    let labelName = null;
    if (selectedItems.length === 1) {
      labelName = 'one';
    } else {
      labelName = 'other';
    }
    this._setInputFieldValue(
      `${selectedItems.length} ${this.suffixes.get(labelName)}`,
    );
  }

  /**
   * Check if text-field value is present in menuItems set
   * @function  _isLabelPresent
   * @returns {Boolean} true/false
   * @private
   */
  _isLabelPresent = () => {
    const { menuItems } = this.menu;
    const menuItemsLabel = new Set(menuItems.map(item => item.label));
    return menuItemsLabel.has(this.value);
  };

  /**
   * Set label for ComboBox input field
   * @function _setTextFieldLabel
   * @private
   */
  _setTextFieldLabel() {
    const dataItemsSelected =
      this.data && this.data.filter(item => item.checked);
    const totalDataItems = this.data;
    const menuItemsSelected = this.menu.value;
    const totalMenuItems = this.menu && this.menu.menuItems;

    if (this.dataType === comboboxTypes.SINGLE) {
      if (dataItemsSelected && dataItemsSelected.length > 0) {
        this._setInputFieldValue(dataItemsSelected[0].label);
        this.hide();
      } else if (menuItemsSelected && menuItemsSelected.length > 0) {
        this._setInputFieldValue(menuItemsSelected[0].label);
        this.hide();
      } else if (menuItemsSelected.length === 0 && this._isLabelPresent()) {
        this._setInputFieldValue('');
        this.hide();
      } else if (!this.menu.show && !this._isLabelPresent()) {
        this._setInputFieldValue('');
      }
    } else if (this.dataType === comboboxTypes.MULTI) {
      if (dataItemsSelected) {
        if (dataItemsSelected.length === totalDataItems.length) {
          this._setInputFieldValue(this.suffixes.get('all'));
        } else {
          this._setLabelSuffix(dataItemsSelected);
        }
      } else if (menuItemsSelected) {
        if (menuItemsSelected.length === totalMenuItems.length) {
          this._setInputFieldValue(this.suffixes.get('all'));
        } else {
          this._setLabelSuffix(menuItemsSelected);
        }
      }
    }
  }

  /**
   * Move menuItem on slot change
   * @function  _moveMenuItem
   * @param {Event} event - an event
   */
  _moveMenuItem = event => {
    const menuItems = event.target.assignedElements();
    if (menuItems.length > 0) {
      this.menu.appendChild(menuItems[0]);
    }
    this._setTextFieldLabel();
  };

  /**
   * Handle click and mousedown events
   * on text field
   * @function _handleTextFieldEvent
   * @param {Event} event - an event
   */
  _handleTextFieldEvent = event => {
    if (this._visible) {
      if (
        event.composedPath()[0] ===
        this.inputField.shadowRoot.querySelector('.textfield__icon')
      ) {
        event.preventDefault();
      }
      event.stopPropagation();
      return;
    }
    this.show();
  };

  render() {
    const inlineWidth = this.width ? `${this.width}` : '';
    const inputComboField = $`
      <eui-text-field
        placeholder="${this.placeholder || 'Write or select...'}"
        ?fullwidth="${!!this.width}"
        ?disabled=${this.disabled}
        @click=${this._handleTextFieldEvent}
        @mousedown=${this._handleTextFieldEvent}
        @input="${this.handleInputChange}"
        @keydown="${this}"
      >
        <eui-icon
          slot="icon"
          name=${this._visible ? 'chevron-up' : 'chevron-down'}
          @click="${this.handleChevronClick}"
        >
        </eui-icon>
      </eui-text-field>
    `;

    return $`
      <div class="dropdown" style=${i$2({ width: inlineWidth })}>
        ${inputComboField}
        ${!this.data
          ? $`<slot
              @slotchange=${event => this._moveMenuItem(event)}
            ></slot>`
          : w}
        <eui-menu
          type=${this.dataType}
          @eui-menu:change=${this}
          @eui-menu:click=${this}
          @eui-menu:hidden=${this}
          select-all=${l$1(this.selectAll)}
        >
          ${this.data ? this._makeDropdownOptions() : w}
        </eui-menu>
      </div>
    `;
  }
}

definition('eui-combo-box', {
  style: style$2,
  props: {
    data: { type: Array },
    dataInnerlabel: {
      type: Array,
      default: [
        ['one', 'item selected'],
        ['other', 'items selected'],
        ['all', 'All items selected'],
      ],
    },
    dataType: { attribute: true, type: String, default: 'single' },
    noResultLabel: {
      attribute: true,
      type: String,
      default: 'No Result Found',
    },
    disabled: { attribute: true, type: Boolean },
    placeholder: { attribute: true, type: String },
    selectAll: { attribute: true, type: String },
    _visible: { type: Boolean },
    width: { attribute: true, type: String },
  },
})(ComboBox);

/**
 * @file Module to create Calendar component.
 */

/**
 * Class representing an accordion.
 */
class Calendar {

  /**
   * Setup properties.
   * @param {HTMLElement} element - The DOM element to append the component.
   */
  constructor(element) {
    this.dom = {
      calendar: element,
      year: element.querySelector('.year'),
      month: element.querySelector('.month'),
      days: [],
      prevYear: element.querySelector('.head i:nth-child(4)'),
      prevMonth: element.querySelector('.head i:nth-child(1)'),
      nextMonth: element.querySelector('.head i:nth-child(3)'),
      nextYear: element.querySelector('.head i:nth-child(6)'),
      todayBtn: element.querySelector('.set-current-day'),
      body: element.querySelector('table.body')
    };

    this.eng = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'],
      days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    };

    this.listeners = {
      clickToday: () => this._setToday(),
      clickPrevYear: () => this._setPrevYear(),
      clickPrevMonth: () => this._setPrevMonth(),
      clickNextMonth: () => this._setNextMonth(),
      clickNextYear:() => this._setNextYear()
    };

    this.calendar = {
      year: '',
      month: '',
      days: []
    };
  }

  /**
   * Create component.
   * @public
   */
  init() {
    this._createCalendarBody();
    this.setDataCalendar(new Date());
    this._addEventListeners();
  }

  /**
   * Destroy component.
   * @public
   */
  destroy() {
    this._removeEventListeners();
  }

  /**
   * Add event listeners.
   * @private
   */
  _addEventListeners() {
    this.dom.prevYear.addEventListener('click', this.listeners.clickPrevYear, false);
    this.dom.prevMonth.addEventListener('click', this.listeners.clickPrevMonth, false);
    this.dom.nextMonth.addEventListener('click', this.listeners.clickNextMonth, false);
    this.dom.nextYear.addEventListener('click', this.listeners.clickNextYear, false);

    if (this.dom.todayBtn){
      this.dom.todayBtn.addEventListener('click', this.listeners.clickToday, false);
    }
  }

  /**
   * Remove event listeners.
   * @private
   */
  _removeEventListeners() {
    this.dom.prevYear.removeEventListener('click', this.listeners.clickPrevYear, false);
    this.dom.prevMonth.removeEventListener('click', this.listeners.clickPrevMonth, false);
    this.dom.nextMonth.removeEventListener('click', this.listeners.clickNextMonth, false);
    this.dom.nextYear.removeEventListener('click', this.listeners.clickNextYear, false);

    if (this.dom.todayBtn){
      this.dom.todayBtn.removeEventListener('click', this.listeners.clickToday, false);
    }
  }

  /**
   * Select current day in calendar.
   * @private
   */
  _setToday() {
    this.setDataCalendar(new Date());
  }

  /**
   * Modify year property and call method to update calendar element.
   * @private
   */
  _setPrevYear() {
    const year = parseInt(this.calendar.year, 10) - 1;
    const monthNum = this.eng.months.indexOf(this.calendar.month);

    this.setDataCalendar(new Date(year, monthNum, '1'));
    this.removeAllSelectedDays();
    this.disableUnselectableDays();
  }

  /**
   * Modify month property and call method to update calendar element.
   * @private
   */
  _setPrevMonth() {
    let year = this.calendar.year;
    let monthNum = this.eng.months.indexOf(this.calendar.month);

    // decrement month
    if (monthNum === 0) {
      monthNum = 11;
      year = parseInt(this.calendar.year, 10) - 1;
    } else {
      monthNum -= 1;
    }

    this.setDataCalendar(new Date(year, monthNum, '1'));
    this.removeAllSelectedDays();
    this.disableUnselectableDays();
  }

  /**
   * Modify month property and call method to update calendar element.
   * @private
   */
  _setNextMonth() {
    let year = this.calendar.year;
    let monthNum = this.eng.months.indexOf(this.calendar.month);

    // increment month
    if (monthNum === 11) {
      monthNum = 0;
      year = parseInt(this.calendar.year, 10) + 1;
    } else {
      monthNum += 1;
    }

    this.setDataCalendar(new Date(year, monthNum, '1'));
    this.removeAllSelectedDays();
    this.disableUnselectableDays();
  }

  /**
   * Modify year property and call method to update calendar element.
   * @private
   */
  _setNextYear() {
    const year = parseInt(this.calendar.year, 10) + 1;
    const monthNum = this.eng.months.indexOf(this.calendar.month);

    this.setDataCalendar(new Date(year, monthNum, '1'));
    this.removeAllSelectedDays();
    this.disableUnselectableDays();
  }

  /**
   * Creates the necessary table elements.
   * @private
   */
  _createCalendarBody() {
    // table head
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');

    for (let d = 0; d < 7; d += 1) {
      const th = document.createElement('th');
      th.innerHTML = this.eng.days[d];
      trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    this.dom.body.appendChild(thead);

    // table body
    const tbody = document.createElement('tbody');


    const numTD = 7;
    // 7 days / week

    const numTR = 6;
    // 6 weeks / month

    let j = 0;
    for (; j < numTR; j += 1) {
      const tr = document.createElement('tr');
      for (let i = 0; i < numTD; i += 1) {
        const td = document.createElement('td');
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    this.dom.body.appendChild(tbody);

    // update the constructor value 'days'
    this.dom.days = this.dom.calendar.querySelectorAll('td');
  }

  /**
   * Fills in the DOM content with this.calendar information.
   * @private
   */
  _setDOMCalendar() {
    const today = this.formatJsDate(new Date()).split('-');
    this.dom.month.innerText = this.calendar.month;
    this.dom.year.innerText = this.calendar.year;
    Array.from(this.dom.days).forEach((dayDOM, i) => {
      const dayValue = this.calendar.days[i];
      if (dayValue !== 0) {
        dayDOM.innerText = dayValue;
        dayDOM.classList.remove('dummy');
        if (+today[0] === +this.calendar.year &&
          +today[1] === this.eng.months.indexOf(this.calendar.month) + 1 &&
          +today[2] === this.calendar.days[i]) {
          dayDOM.innerHTML = '<span class="today">' + dayValue + '</span>';
        }
      } else {
        dayDOM.innerText = '';
        dayDOM.classList.add('dummy');
      }
    });
  }

  /**
   * Fills in this.calendar information and calls a method to update DOM element.
   * @public
   * @param {Date} date
   */
  setDataCalendar(date) {
    const dArray = this.formatJsDate(date).split('-');
    const jsDate = new Date(dArray[0], dArray[1] - 1, 1);
    const lastDayMonth = new Date(dArray[0], dArray[1], 0);
    const daysInMonthNum = lastDayMonth.getDate();
    const dayOfWeekNum = jsDate.getDay();
    // const lastDayOfWeekNum = lastDayMonth.getUTCDay();
    this.calendar.year = dArray[0];
    this.calendar.month = this.eng.months[dArray[1] - 1];

    // create 0's at the head
    const headZeroes = Array.apply(null, {
      length: (dayOfWeekNum + 6) % 7
    }).map(Number.prototype.valueOf, 0);

    // create day numbers != 0
    const numbersInRow = Array.apply(null, {
      length: daysInMonthNum + 1
    }).map(Number.call, Number);
    numbersInRow.shift();

    // create 0's at the tail
    const numZeroes = 42 - (headZeroes.length + numbersInRow.length);
    const tailZeroes = Array.apply(null, Array(numZeroes)).map(Number.prototype.valueOf, 0);

    // concat all the days and add to calendar
    this.calendar.days = headZeroes.concat(numbersInRow, tailZeroes);

    // Updates the values of the DOM with the current calendar data
    this._setDOMCalendar();
  }

  /**
   * Given a JS Date Object return a string in YYYY-MM-DD format.
   * Previously yyyymmdd()
   * @public
   * @param {Date} jsDate - JS Date Object (created with constructor new Date()).
   * @return {string} - Date in format YYYY-MM-DD.
   */
  formatJsDate(jsDate) {
    const mm = jsDate.getMonth() + 1;
    const dd = jsDate.getDate();
    return [jsDate.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
    ].join('-');
  }

  /**
   * Given an Object return a string in YYYY-MM-DD format.
   * @public
   * @param {Object} date
   * @param {string} date.year
   * @param {string} date.month
   * @param {string} date.day
   * @return {string} - Date in format YYYY-MM-DD.
   */
  formatDate(date) {
    return (
      date.year + '-' +
      this._getMonthNum(date.month) + '-' +
      this._getDayNum(date.day)
    );
  }

  /**
   * Returns month number with leading zero.
   * @private
   * @param {string} month
   * @return {string}
   */
  _getMonthNum(month) {
    const n = this.eng.months.indexOf(month) + 1;
    return n < 10 ? '0' + n : n;
  }

  /**
   * Returns day of month number with leading zero.
   * @private
   * @param {string} day
   * @return {string}
   */
  _getDayNum(day) {
    return day < 10 ? '0' + day : day;
  }

  /**
   * Unselect all days.
   * @public
   */
  removeAllSelectedDays() {
    Array.from(this.dom.days).forEach((day) => {
      day.classList.remove('selected');
    });
  }

  /**
   * Unselect all days.
   * @public
   * @param {String} maxDate - Maximum date in format YYYY-MM-DD
   */
  setMaximumDate(maxDate){
    const max = maxDate.split('-');
    this.max = {
      day: +max[2],
      month: +max[1],
      year: +max[0]
    };
  }

  /**
   * Unselect all days.
   * @public
   * @param {String} minDate - Minimum date in format YYYY-MM-DD
   */
  setMinimumDate(minDate){
    const min = minDate.split('-');
    this.min = {
      day: +min[2],
      month: +min[1],
      year: +min[0]
    };
  }

  _disableMaximumUnselectableDays(){
    if (!this.max) {
      return;
    }

    Array.from(this.dom.days).forEach(day => {
      if((+this.calendar.year > this.max.year ) ||
        (+this.calendar.year === this.max.year  && +this._getMonthNum(this.calendar.month) > this.max.month) ||
        (+this.calendar.year === this.max.year  && +this._getMonthNum(this.calendar.month) === this.max.month
          && +day.innerText > this.max.day)){
        day.classList.add('disabled');
      }
    });
  }

  _disableMinimumUnselectableDays(){
    if (!this.min) {
      return;
    }

    Array.from(this.dom.days).forEach(day => {
      if((+this.calendar.year < this.min.year ) ||
        (+this.calendar.year === this.min.year  && +this._getMonthNum(this.calendar.month) < this.min.month) ||
        (+this.calendar.year === this.min.year  && +this._getMonthNum(this.calendar.month) === this.min.month
          && +day.innerText < this.min.day)){
        day.classList.add('disabled');
      }
    });
  }

  _clearRestrictionDates(){
    Array.from(this.dom.days).forEach(day => {
      day.classList.remove('disabled');
    });
  }

  disableUnselectableDays(){
    if (this.dom.days) {
      this._clearRestrictionDates();
      this._disableMaximumUnselectableDays();
      this._disableMinimumUnselectableDays();
    }
  }

}

/**
 * @file Module to create Datepicker component.
 * @requires Calendar
 */


/**
 * Class representing an datepicker.
 */
let Datepicker$1 = class Datepicker {

  /**
   * Setup properties.
   * @param {HTMLElement} element - The DOM element to append the component.
   */
  constructor(element) {
    this.dom = {
      datepicker: element,
      calendar: element.querySelector('.calendar'),
      button: element.querySelector('.btn, .suffix'),
      input: element.querySelector('input[type="text"]'),
      days: null,
      hiddenInput: element.querySelector('input[type="hidden"]')
    };
    this.listeners = {
      clickOutside: (evt) => this._hideIfClickedOutside(evt),
      clickDay: (evt) => this._selectDay(evt),
      clickButton: () => this._toggleCalendar(),
      clickInput: () => this._showCalendar(),
      onFocus: () => this._showCalendar(),
      changeInput: () => this._onInputChange(),
      keyupInput: (evt) => this._onInputKeyup(evt),
      resetForm: () => this._onResetForm()
    };

    this.calendar = null;
    this.selectedDate = null;
  }

  /**
   * Create component.
   * @public
   */
  init() {
    this.calendar = new Calendar(this.dom.calendar);
    this.calendar.init();
    this.dom.days = this.dom.calendar.querySelectorAll('td');

    // set minimum date limit
    if (this.dom.input.min) {
      this.setMinimumDate(this.dom.input.min);
    }

    // set maximum date limit
    if (this.dom.input.max) {
      this.setMaximumDate(this.dom.input.max);
    }

    // in case of predefined date, validate it
    if (this.dom.input.value && this._isValidDate(this.dom.input.value) && this._isInRange(this.dom.input.value)) {
      this._setSelectedDate();
    } else {
      this.dom.input.value = '';
    }

    this._addEventListeners();
  }

  /**
   * Destroy component.
   * @public
   */
  destroy() {
    this._removeEventListeners();
  }

  /**
   * Add event listeners.
   * @private
   */
  _addEventListeners() {
    this.dom.button.addEventListener('click', this.listeners.clickButton, false);
    Array.from(this.dom.days).forEach(day => {
      day.addEventListener('click', this.listeners.clickDay, false);
    });
    this.dom.input.addEventListener('click', this.listeners.clickInput, false);

    this.dom.input.addEventListener('change', this.listeners.changeInput);
    this.dom.input.addEventListener('keyup', this.listeners.keyupInput);

    this.dom.input.addEventListener('focus', this.listeners.onFocus, false);
    document.addEventListener('click', this.listeners.clickOutside, false);
    document.addEventListener('keyup', this.listeners.clickOutside, false);

    if (this.dom.input.form) {
      this.dom.input.form.addEventListener('reset', this.listeners.resetForm);
    }
  }

  /**
   * Remove event listeners.
   * @private
   */
  _removeEventListeners() {
    this.dom.button.removeEventListener('click', this.listeners.clickButton, false);
    Array.from(this.dom.days).forEach(day => {
      day.removeEventListener('click', this.listeners.clickDay, false);
    });

    this.dom.input.removeEventListener('change', this.listeners.changeInput);
    this.dom.input.removeEventListener('keyup', this.listeners.keyupInput);

    document.removeEventListener('click', this.listeners.clickOutside, false);
    document.removeEventListener('keyup', this.listeners.clickOutside, false);

    if (this.dom.input.form) {
      this.dom.input.form.removeEventListener('reset', this.listeners.resetForm);
    }
  }

  /**
   * Check if date is valid.
   * @private
   * @param {string} dateString
   * @return {boolean} - True if date is valid.
   */
  _isValidDate(dateString) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    // Invalid format
    if (!dateString.match(regEx)) {
      return false;
    }
    const d = new Date(dateString);
    // Invalid date (or this could be epoch), https://stackoverflow.com/a/1353711/4634380
    if (isNaN(d.getTime())) {
      return false;
    }
    return d.toISOString().slice(0, 10) === dateString;
  }

  /**
   * Check if date is in min - max limit.
   * @private
   * @param {string} dateString
   * @return {boolean} - True if date is within range.
   */
  _isInRange(dateString) {
    let result = true;

    if (this.calendar.min && (new Date(dateString) < new Date(this.dom.input.min))) {
      result = false;
    }

    if (this.calendar.max && (new Date(dateString) > new Date(this.dom.input.max))) {
      result = false;
    }

    return result;
  }

  /**
   * Check input date
   * if valid date, update calendar and highlight with CSS;
   * if invalid date, correct date format.
   * @private
   */
  _handleDateChange() {
    const typedInput = this.dom.input.value;
    if (typedInput.length === 10) {
      if (this._isValidDate(typedInput)) {
        this.calendar.setDataCalendar(new Date(typedInput));
        const dateArray = typedInput.split('-');
        this.selectedDate = {
          year: dateArray[0],
          month: dateArray[1],
          day: dateArray[2]
        };
        this._setSelectedDateCSS();
      } else {
        this._correctDateFormat();
      }
    }
  }

  /**
   * Handle input change event (works on blur)
   * if valid date, update calendar and highlight with CSS;
   * if invalid date, correct date format.
   * @private
   */
  _onInputChange() {
    const inputValue = this.dom.input.value;

    // If clear input, remove selected date and styles
    if (!inputValue) {
      this._clearSelectedDate();
      this.dom.hiddenInput.value = null;
      return;
    }

    // If date in input is valid and in the range, set new selected date and styles
    if (this._isValidDate(this.dom.input.value) && this._isInRange(this.dom.input.value)) {
      this._setSelectedDate();
    } else {
      // Otherwise, change to existing selected date
      this.dom.input.value = this.selectedDate ?
        `${this.selectedDate.year}-${this.selectedDate.month}-${this.selectedDate.day}` : '';
    }
  }

  /**
   * Handle keyup event
   * @private
   */
  _onInputKeyup(evt) {
    if (evt.key === 'Escape'){
      this._hideCalendar();
    } else if (this.dom.input.value.length === 10) {

      /*
       * Entered 10 characters -> validate input,
       * if correct change it, otherwise do nothing
       * because it will be set to proper state on blur (onInputChange will work)
       */
      if (this._isValidDate(this.dom.input.value) && this._isInRange(this.dom.input.value)) {
        this._setSelectedDate();
      }
    } else if (this.dom.input.value.length === 0) {

      /*
       * To reproduce this case
       * 1. open empty input
       * 2. type in valid date (becomes selected)
       * 3. remove date by hitting backspace button
       * This is not caught by change event because value doesnt change (empty -> empty),
       * but we need to reset selected date on step 2.
       */
      this._clearSelectedDate();
    }
  }

  _onResetForm() {
    this.dom.hiddenInput.value = null;
  }

  /**
   * Set selected date
   * @private
   */
  _setSelectedDate() {
    this.calendar.setDataCalendar(new Date(this.dom.input.value));
    const dateArray = this.dom.input.value.split('-');
    this.selectedDate = {
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2]
    };
    this._setSelectedDateCSS();
  }

  /**
   * Clear selected date
   * @private
   */
  _clearSelectedDate() {
    this.selectedDate = null;
    this.calendar.removeAllSelectedDays();
  }

  /**
   * Set date to today when detecting an invalid date format.
   * @private
   */
  _correctDateFormat() {
    const today = new Date();
    const todayYYYYMMDD = this.calendar.formatJsDate(today).split('-');
    this.dom.input.value = todayYYYYMMDD.join('-');
    this.selectedDate = {
      year: todayYYYYMMDD[0],
      month: todayYYYYMMDD[1],
      day: todayYYYYMMDD[2]
    };
    this.calendar.setDataCalendar(new Date(today));
    this.calendar.removeAllSelectedDays();
    this._setSelectedDateCSS();
  }

  /**
   * Highlight selected date with CSS.
   * @private
   */
  _setSelectedDateCSS() {
    this.calendar.removeAllSelectedDays();

    // convert to number to remove leading zero if exists
    let selectedDay = this.selectedDate ?
      +this.selectedDate.day :
      (new Date(this.dom.input.value)).getDate();

    // convert to string for equality check
    selectedDay = selectedDay.toString();

    Array.from(this.dom.days).some(day => {
      if (day.innerText === selectedDay) {
        day.classList.add('selected');
        return true;
      }
    });
  }

  /**
   * Select clicked day in calendar.
   * @private
   * @param {Event} evt - Click event
   */
  _selectDay(evt) {
    if (!evt.target.classList.contains('dummy')) {
      this.calendar.removeAllSelectedDays();
      this.selectedDate = {
        year: this.calendar.calendar.year,
        month: this.calendar.calendar.month,
        day: evt.target.innerText
      };
      const formattedDate = this.calendar.formatDate(this.selectedDate);
      this.dom.input.value = this.dom.hiddenInput.value = formattedDate;
      if (evt.target.tagName === 'TD') {
        evt.target.classList.add('selected');
      } else {
        evt.target.parentNode.classList.add('selected');
      }
      this.dom.input.dispatchEvent(new Event('change'));
      this._hideCalendar();
    }
  }

  /**
   * Hide calendar.
   * @private
   */
  _hideCalendar() {
    this.dom.calendar.classList.add('closed');
  }

  /**
   * Show calendar.
   * @private
   */
  _showCalendar() {
    this.calendar.disableUnselectableDays();
    this.dom.calendar.classList.remove('closed');
  }

  /**
   * Toggle calendar visibility and validate selected date.
   * @private
   */
  _toggleCalendar() {
    if (this.dom.calendar.classList.contains('closed')) {
      this._showCalendar();
    } else {
      this._hideCalendar();
    }

    const inputValue = this.dom.input.value;
    // not empty input
    if (inputValue) {
      if (this._isValidDate(inputValue) && this._isInRange(inputValue)) {
        this.calendar.setDataCalendar(new Date(inputValue));
        this._setSelectedDateCSS();
      }
    }
  }

  /**
   * Hide calendar when click outside datepicker.
   * @private
   * @param {Event} evt - Click event.
   * @param {HTMLElement} evt.target - Clicked element.
   */
  _hideIfClickedOutside({target}) {
    if (!this.dom.datepicker.contains(target)) {
      this._hideCalendar();
    }
  }

  setMaximumDate(maxDate){
    this.calendar.setMaximumDate(maxDate);
  }

  setMinimumDate(minDate){
    this.calendar.setMinimumDate(minDate);
  }


};

var style$3 = ":host {\n  color: var(--calendar-text-color, #242424);\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.calendar {\n  z-index: 99;\n  width: 260px;\n  padding: var(--space-base, 8px);\n  background: var(--calendar-background, #fff);\n  border: 1px solid var(--calendar-border-color, #878787);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n}\n.calendar.opened {\n  display: block;\n}\n.calendar.closed {\n  display: none;\n}\n.calendar .head {\n  padding: var(--space-base, 8px) 0;\n  font-size: 16px;\n  font-weight: var(--weight-bold, 700);\n  text-align: center;\n  text-transform: capitalize;\n  line-height: 1.5;\n  display: flex;\n}\n.calendar .head i {\n  opacity: 0.7;\n  flex: 1;\n}\n.calendar .head i:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.calendar .head i:nth-child(1),\n.calendar .head i:nth-child(2) {\n  float: left;\n}\n.calendar .head i:nth-child(5),\n.calendar .head i:nth-child(6) {\n  float: right;\n}\n.calendar table.body {\n  width: 100%;\n  table-layout: fixed;\n  padding: 0 var(--space-base, 8px);\n}\n.calendar table.body thead tr {\n  color: var(--calendar-thead-color, #6a6a6a);\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 1.5;\n}\n.calendar table.body tbody tr {\n  text-align: center;\n  line-height: 28px;\n}\n.calendar table.body tbody tr td.selected {\n  color: var(--calendar-selected-color, #fff);\n  background: var(--calendar-selected-background, #1174e6);\n}\n.calendar table.body tbody tr td.selected:hover {\n  background: var(--calendar-selected-background-hover, #0069c2);\n}\n.calendar table.body tbody tr td.selected .today {\n  border-bottom-color: var(--calendar-selected-color, #fff);\n}\n.calendar table.body tbody tr td.dummy:hover {\n  background: none;\n  cursor: default;\n}\n.calendar table.body tbody tr td .today {\n  border-bottom: solid 2px var(--calendar-selected-background, #1174e6);\n  font-size: 1.1em;\n  font-weight: var(--weight-bold, 700);\n  padding: 1px 4px;\n}\n.calendar table.body tbody tr td.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n.calendar table.body tbody tr td:hover {\n  background: var(--calendar-unselected-background-hover, #dcdcdc);\n  cursor: pointer;\n}\n.datepicker {\n  position: relative;\n  display: inline-block;\n}\n.datepicker .input-group {\n  margin-bottom: 0;\n}\n.datepicker .calendar {\n  margin-top: 4px;\n}\n\n.calendar-icon {\n  display: block;\n  margin: auto;\n}\n\n.calendar-footer {\n  display: flex;\n  justify-content: center;\n  padding: var(--space-large, 16px) 0 var(--space-base, 8px);\n  border-top: 1px solid #878787;\n  margin: 0 var(--space-base, 8px);\n}\n\n.calendar-footer.hidden {\n  display: none;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * CustomDatepicker is used to customize the internals of the Datepicker supplied by EDS.
 *
 * @class CustomDatepicker
 * @extends EDSDatepicker
 */
class CustomDatepicker extends Datepicker$1 {
  constructor(element) {
    super(element);
    this.dom.input = element.querySelector('eui-text-field[type="text"]');
    this.dom.hiddenInput = element.querySelector('input[type="hidden"]');
  }

  /**
   * Handler for clicking outside the component. The calendar should be hidden if the
   * user clicks outside the component
   *
   * @override _hideIfClickedOutside
   * @param {Event} event
   */
  _hideIfClickedOutside(event) {
    const path = event.path || (event.composedPath && event.composedPath());
    if (path && !path.includes(this.dom.datepicker)) {
      this._hideCalendar();
    }
  }

  /**
   * Wrapper around eds datepicker _correctDateFormat method, trigger extra change event
   */
  _correctDateFormat() {
    super._correctDateFormat();
    this.dom.input.dispatchEvent(new Event('change'));
  }

  /**
   * Check if calendar is open or not
   */
  _isCalendarOpen() {
    return !this.dom.calendar.classList.contains('closed');
  }

  /**
   * Wrapper around eds datepicker setMinimumDate method
   * Updates min variable in eds datepicker
   *
   * @method _setMinimumDate
   * @param {String} minDate
   */
  _setMinimumDate(minDate) {
    this.dom.input.min = minDate;
    super.setMinimumDate(minDate);
  }

  /**
   * To disable calendar while disabled prop is set to true
   */
  _disableCalendar() {
    this.dom.input.disabled = true;
    this.dom.input.style.pointerEvents = 'none';
    const calendarIcon = this.dom.input.querySelector(
      'eui-icon[name="calendar"]',
    );
    calendarIcon.style.pointerEvents = 'none';
  }

  /**
   * Wrapper around eds datepicker setMaximumDate method
   * Updates max variable in eds datepicker
   *
   * @method _setMaximumDate
   * @param {String} maxDate
   */
  _setMaximumDate(maxDate) {
    this.dom.input.max = maxDate;
    super.setMaximumDate(maxDate);
  }
}

/**
 * @property {String} date - date to set in format YYYY-MM-DD
 * @property {String} min - minimum date to set in format YYYY-MM-DD
 * @property {String} max - maximum date to set in format YYYY-MM-DD
 * @property {Boolean} todayButton - show today button in calendar
 * @property {String} todayButtonText - text to show in today button
 * @property {Boolean} disabled - disable the datepicker
 */
class Datepicker extends Accessibility$1(LitComponent) {
  static get components() {
    return {
      'eui-text-field': TextField,
      'eui-icon': Icon,
      'eui-button': Button,
    };
  }

  /**
   * set initial focus on text filed
   */
  setInitialFocus() {
    this.shadowRoot.querySelector('eui-text-field').setInitialFocus();
  }

  /**
   * lifecycle hook
   *
   * @method didUpgrade
   *
   */
  didUpgrade() {
    if (!this.datepicker) {
      this.datepicker = new CustomDatepicker(
        this.shadowRoot.querySelector('.datepicker'),
      );
      if (this.disabled) {
        this.datepicker._disableCalendar();
      }

      this.datepicker._showCalendar = () => {
        if (this.min || this.max) {
          this.datepicker.calendar.disableUnselectableDays();
        }
        this.shadowRoot.querySelector('.calendar').classList.remove('closed');
        this._positionCalender();
        this._addDocumentListeners();
      };

      this.datepicker._hideCalendar = () => {
        this.shadowRoot.querySelector('.calendar').classList.add('closed');
        this._removeDocumentListeners();
      };

      this.datepicker.init();
    }

    if (this.min || this.max) {
      this._setBoundaryDates();
    }

    this.datepicker.dom.input.value = this.date;
    this.datepicker._handleDateChange();
  }

  /**
   * Lifecycle hook didDisConnect
   * Clean event listeners
   */
  didDisconnect() {
    this._removeDocumentListeners();
  }

  /**
   * lifecycle hook
   *
   * @method didChangeProps
   * @param {Map} changedProps - previous values of the props
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    if (changedProps.has('date')) {
      if (this._checkDateValue(this.date) || this.date === '') {
        this.datepicker.dom.input.value = this.date;
        if (this.date === '') {
          this.datepicker._clearSelectedDate();
        } else {
          this.datepicker._handleDateChange();
        }
      } else {
        this.date = changedProps.get('date');
      }
    }
    if (changedProps.has('min')) {
      if (this.datepicker._isValidDate(this.min)) {
        this.datepicker._setMinimumDate(this.min);
        this._updateOpenCalendar();
      } else {
        this.min = changedProps.get('min');
      }
    }
    if (changedProps.has('max')) {
      if (this.datepicker._isValidDate(this.max)) {
        this.datepicker._setMaximumDate(this.max);
        this._updateOpenCalendar();
      } else {
        this.max = changedProps.get('max');
      }
    }

    if (changedProps.has('disabled')) {
      if (this.disabled) {
        this.datepicker._disableCalendar();
      } else {
        this.datepicker.dom.input.disabled = false;
        this.datepicker.dom.input.style.pointerEvents = 'auto';
        const calendarIcon = this.datepicker.dom.input.querySelector(
          'eui-icon[name="calendar"]',
        );
        calendarIcon.style.pointerEvents = 'auto';
      }
    }
  }

  /**
   * Adjust the position of calender widget
   */
  _positionCalender() {
    // get the calender
    const calendar = this.shadowRoot.querySelector('.calendar');
    calendar.style.visibility = 'hidden';

    // get the textField
    const textField = this.shadowRoot.querySelector('eui-text-field');
    const { x, y, height, width } = textField.getBoundingClientRect();
    const position = {
      x,
      y: y + height,
      height,
      width,
    };

    let left = position.x;
    let top = position.y;
    if (left + calendar.offsetWidth + 8 > window.innerWidth) {
      left -= calendar.offsetWidth;
      if (position.width) {
        left += position.width;
      }
      position.x = left;
    }

    if (top + calendar.offsetHeight + 8 > window.innerHeight) {
      top -= calendar.offsetHeight;
      if (position.height) {
        top -= position.height + 8;
      }
      position.y = top;
    }

    calendar.style.position = 'fixed';
    calendar.style.top = `${position.y}px`;
    calendar.style.left = `${position.x}px`;
    calendar.style.visibility = null;
  }

  /**
   * Add the document listeners; "mousedown" and "wheel".
   *
   * @function _addDocumentListeners
   * @private
   */
  _addDocumentListeners() {
    document.addEventListener('mousedown', this);
    document.addEventListener('wheel', this);
    window.addEventListener('resize', this);
  }

  /**
   * Remove the document listeners; "mousedown" and "wheel".
   *
   * @function _removeDocumentListeners
   * @private
   */
  _removeDocumentListeners() {
    document.removeEventListener('mousedown', this);
    document.removeEventListener('wheel', this);
    window.removeEventListener('resize', this);
  }

  /**
   * Checks the format of min and max dates set by developer
   * If these dates are in a valid format, it set's the minimum and
   * maximum dates allowed in the calendar
   *
   * @function _setBoundaryDates
   * @private
   */
  _setBoundaryDates() {
    if (this.min && this.datepicker._isValidDate(this.min)) {
      this.datepicker._setMinimumDate(this.min);
    }
    if (this.max && this.datepicker._isValidDate(this.max)) {
      this.datepicker._setMaximumDate(this.max);
    }
  }

  /**
   * return classMap for calendar footer based on todayButton prop
   */
  _setFooterClasses = () =>
    o({
      'calendar-footer': true,
      hidden: !this.todayButton,
    });

  /**
   * handles change/input events
   *
   * @method handleEvent
   * @param {Object} event
   */
  handleEvent(event) {
    event.stopPropagation();
    const { type: eventType } = event;

    if (
      eventType === 'mousedown' ||
      eventType === 'wheel' ||
      eventType === 'resize'
    ) {
      if (!event.composedPath().includes(this)) {
        this.datepicker._hideCalendar();
      }
    }

    if (eventType === 'change') {
      const { value } = event.target;
      if (this._checkDateValue(value) || value === '') {
        this.date = value;
        this.bubble('eui-datepicker:change', { date: this.date });
      }
    }

    if (eventType === 'keydown') {
      if (event.key === 'Tab' && this.datepicker._isCalendarOpen()) {
        if (!this.todayButton) {
          this.datepicker._hideCalendar();
        }
      }
    }
  }

  /**
   * Checks if value entered is a valid date and within the range allowed
   *
   * @method _checkDateValue
   * @param {String} value
   * @private
   */
  _checkDateValue(value) {
    return (
      this.datepicker._isValidDate(value) && this.datepicker._isInRange(value)
    );
  }

  /**
   * If the calendar is open, it calls disableUnselectableDays() so that the current range allowed
   * is displayed - called in didChangeProps if min or max prop has been updated
   *
   * @method _updateOpenCalendar
   * @private
   */
  _updateOpenCalendar() {
    if (this.datepicker._isCalendarOpen()) {
      this.datepicker.calendar.disableUnselectableDays();
    }
  }

  /**
   * public setter function for 'min' prop - will result in call to didChangeProps function
   *
   * @method setMinimumDate
   * @param {String} minDate - should be in format 'YYYY-MM-DD'
   */
  setMinimumDate(minDate) {
    this.min = minDate;
  }

  /**
   * public setter function for 'max' prop - will result in call to didChangeProps function
   *
   * @method setMaximumDate
   * @param {String} maxDate - should be in format 'YYYY-MM-DD'
   */
  setMaximumDate(maxDate) {
    this.max = maxDate;
  }

  /**
   * remove all selected day highlights from calendar
   * @method removeAllHighlights
   */
  removeAllHighlights = () => {
    const highlighted = this.shadowRoot.querySelectorAll('td.selected');
    highlighted.forEach(el => {
      el.classList.remove('selected');
    });
  };

  /**
   * Render the datepicker component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <div class="datepicker" @keydown=${this}>
        <eui-text-field
          type="text"
          placeholder="YYYY-MM-DD"
          name="datepicker"
          maxlength="10"
          class="with-icon"
          @change=${this}
        >
          <eui-icon
            slot="icon"
            style="display: block; margin: auto"
            class="btn clickable calendar-icon"
            name="calendar"
          ></eui-icon>
        </eui-text-field>
        <div class="calendar closed">
          <div class="head">
            <i>
              <eui-icon name="chevron-left" size="16px"></eui-icon>
            </i>
            <span class="month"></span>
            <i>
              <eui-icon name="chevron-right" size="16px"></eui-icon>
            </i>
            <i>
              <eui-icon name="chevron-left" size="16px"></eui-icon>
            </i>
            <span class="year"></span>
            <i>
              <eui-icon name="chevron-right" size="16px"></eui-icon>
            </i>
          </div>
          <table class="body"></table>
          <div class="${this._setFooterClasses()}">
            <eui-button
              class="set-current-day"
              @keydown=${this}
              @click=${this.removeAllHighlights}
              >${this.todayButtonText || 'Today'}</eui-button
            >
          </div>
        </div>
        <input type="hidden" name="selectedDay" value="" />
      </div>
    `;
  }
}

definition('eui-datepicker', {
  style: style$3,
  props: {
    date: { attribute: true, type: String, default: '' },
    min: { attribute: true, type: String },
    max: { attribute: true, type: String },
    todayButton: { attribute: true, type: Boolean, default: false },
    todayButtonText: { attribute: true, type: String },
    disabled: { attribute: true, type: Boolean, default: false },
  },
})(Datepicker);

const Modal = superclass =>
  class extends superclass {
    constructor() {
      super();
      this.firstFocusable = null;
      this.lastFocusable = null;
      this._focusAfterClosedEle = null;
    }

    didConnect() {
      if (this.show && this.shadowRoot !== null) {
        setTimeout(() => {
          this._addEventListener();
          this.findFocusableElements();
        }, 0);
      }
    }

    didChangeProps(changedProps) {
      super.didChangeProps?.(changedProps);
      if (changedProps.has('show')) {
        if (this.show) {
          this._addEventListener();
          this.findFocusableElements();
        } else {
          this._removeEventListener();
          this.hideModal();
        }
      }
    }

    handleEvent(event) {
      super.handleEvent?.();
      if (event.type === 'keydown') {
        if (event.code === ESCAPE_KEY) {
          event.preventDefault();
          event.stopPropagation();
          this.hideModal();
        } else if (event.code === TAB_KEY) {
          this.trapFocus(event);
        }
      } else if (event.type === 'visibilitychange') {
        this.recoverFocus();
      }
    }

    /**
     * trap focus in the modal
     * @function trapFocus
     * @param {Event} event
     */
    trapFocus(event) {
      let { target } = event;

      while (target?.shadowRoot?.activeElement) {
        target = target.shadowRoot.activeElement;
      }

      if (this.firstFocusable?.parentNode === target?.parentNode) {
        // in case the focus is moving between elements in same level
        this.firstFocusable = target;
      }
      if (this.lastFocusable?.parentNode === target?.parentNode) {
        this.lastFocusable = target;
      }

      // keep the element focused if only one focusable ele inside modal
      if (this.firstFocusable === this.lastFocusable) {
        event.preventDefault();
      }

      // Leaving the first element with Tab : focus the last one
      if (this.firstFocusable === target && event.shiftKey) {
        event.preventDefault();
        this._findFocusableEndpoints(this.shadowRoot, this, false);
        this.lastFocusable.focus();
      }

      // Leaving the last element with Tab : focus the first one
      if (this.lastFocusable === target && !event.shiftKey) {
        event.preventDefault();
        this._findFocusableEndpoints(this.shadowRoot, this);
      }
    }

    /**
     * recover focus when switching between browser tabs
     * @function recoverFocus
     */
    recoverFocus() {
      const isHidden = document.hidden;
      if (!isHidden && this.show) {
        const lastFocusOn = this._getActiveElement(this.getRootNode());
        // won't work on chrome if iframe exists in the modal
        lastFocusOn.focus({ focusVisible: true });
      }
    }

    /**
     * Add the necessary event listeners
     * @function _addEventListener
     */
    _addEventListener() {
      document.addEventListener('visibilitychange', this);
      document.addEventListener('keydown', this);
    }

    /**
     * Remove event listeners
     * @function _removeEventListener
     */
    _removeEventListener() {
      document.removeEventListener('visibilitychange', this);
      document.removeEventListener('keydown', this);
    }

    /**
     * get active element on the page before open modal
     * @function _getActiveElement
     * @param {Object} root default is document
     * @returns active element by given root
     */
    _getActiveElement(root = document) {
      const activeEl = root.activeElement;
      if (activeEl?.shadowRoot?.activeElement) {
        return this._getActiveElement(activeEl.shadowRoot);
      }
      return activeEl;
    }

    /**
     * find first and last focusable element of modal
     * @function findFocusableElements
     */
    findFocusableElements() {
      this._focusAfterClosedEle = this._getActiveElement(this.getRootNode());
      // find first focusable element
      this._findFocusableEndpoints(this.shadowRoot, this);
      // find last focusable element
      this._findFocusableEndpoints(this.shadowRoot, this, false);
    }

    /**
     * hide modal and move focus back to the previous element
     * @function hideModal
     */
    hideModal() {
      this.show = false;
      this._focusAfterClosedEle?.focus();
    }

    /**
     * define if the element is focusable
     * @function _isFocusable
     * @param {Object} element DOM element
     * @returns true if element focusable
     */
    _isFocusable(element) {
      if (element.tabIndex < 0 || element.disabled) {
        return false;
      }

      if (element.tabIndex >= 0) {
        return true;
      }

      switch (element.nodeName) {
        case 'A':
          return !!element.href && element.rel !== 'ignore';
        case 'INPUT':
          return element.type !== 'hidden';
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
          return element;
        default:
          return false;
      }
    }

    /**
     * attempt focus on first focusable element
     * @function _attemptFocus
     * @param {Object} element DOM element
     * @param {Boolean} isFirst true to attempt focus on first focusable element
     * @returns true if element focusable
     */
    _attemptFocus(element, isFirst = false) {
      if (!this._isFocusable(element)) {
        return false;
      }

      if (isFirst) {
        element.focus();
        this.firstFocusable = element;
      } else {
        this.lastFocusable = element;
      }
      return true;
    }

    /**
     * find the last/first focusable element
     * @function _findFocusableEndpoints
     * @param {Object} children child elements
     * @param {Boolean} isFirst true/false to find first/last focusable element in modal
     * @returns true if first/last focusable element inside modal
     */
    _findFocusableEndpoints({ children }, target, isFirst = true) {
      children = isFirst ? [...children] : [...children].reverse();
      for (let i = 0; i < children.length; i += 1) {
        let child = children[i];

        if (child.nodeName === 'STYLE' || child.hidden) {
          /* eslint-disable-next-line no-continue */
          continue;
        }

        // Can't only check the slotted element because might have pre-set components in the modal.
        if (child.nodeName === 'SLOT') {
          child =
            target.querySelector(
              `[slot='${child.name}']${isFirst ? '' : ':last-child'}`,
            ) || child;
        }

        // If this is false, means this child has nothing focusable within its shadowRoot.
        // Move on to check the next sibling at this level.
        if (child.shadowRoot != null) {
          if (
            this._attemptFocus(child.shadowRoot, isFirst) ||
            this._findFocusableEndpoints(child.shadowRoot, child, isFirst)
          ) {
            return true;
          }
        }

        if (
          this._attemptFocus(child, isFirst) ||
          this._findFocusableEndpoints(child, target, isFirst)
        ) {
          return true;
        }
      }
      return false;
    }
  };

var style$4 = ":host {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  background: var(--dialog-overlay, rgba(0, 0, 0, 0.3));\n}\n:host([show]) {\n  display: flex;\n  opacity: 1;\n  flex: 0 0 auto;\n}\n\n.dialog {\n  padding: var(--space-large, 16px);\n  background-color: var(--dialog-background, #fafafa);\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 340px;\n  min-height: 144px;\n  max-width: 50%;\n  max-height: 90%;\n  box-sizing: border-box;\n}\n:host([fullscreen]) .dialog {\n  width: calc(100vw - 48px);\n  overflow: hidden;\n  height: calc(100vh - 48px);\n  max-width: none;\n  max-height: none;\n}\n.dialog__top {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0;\n}\n.dialog__left {\n  text-align: left;\n  display: flex;\n  gap: var(--space-base, 8px);\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: baseline;\n}\n.dialog__title {\n  color: var(--text, #242424);\n  flex: 0 0 auto;\n  font-size: 16px;\n  font-weight: var(--weight-medium, 500);\n}\n.dialog__subtitle {\n  font-size: 12px;\n  display: inline-block;\n  word-break: break-word;\n  color: var(--gray-text, #6a6a6a);\n}\n.dialog__right {\n  font-size: 16px;\n}\n.dialog__body {\n  color: var(--text, #242424);\n  flex: 1;\n  padding: var(--space-xl, 24px) 0;\n  overflow-y: auto;\n}\n:host([fullscreen]) .dialog__body {\n  overflow: hidden;\n  padding: var(--space-xl, 24px) 0 0;\n}\n.dialog__bottom {\n  display: flex;\n  flex: 1;\n  align-self: flex-end;\n  height: 30px;\n  margin-top: var(--space-large, 16px);\n}\n.dialog__bottom ::slotted(*) {\n  margin-left: var(--space-base, 8px);\n  margin-right: 0;\n}\n.cross {\n  cursor: pointer;\n  opacity: 0.7;\n  --icon-color: var(--text, #242424);\n}\n.cross:hover {\n  opacity: 1;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
/**
 * @property {Boolean} fullscreen - true, makes dialog to take full screen space
 * @property {String} label - sets title of dialog component
 * @property {String} subtitle - sets the subtitle of dialog component
 * @property {Boolean} noCancel - true hides the "Cancel" button,
 * false shows the "Cancel" button. Defaults to false
 * @property {Boolean} show - true sets dialog component visible
 * @property {Boolean} warning - true sets dialog component as warning dialog with
 * the cancel button placed on the right
 */
class Dialog extends Modal(LitComponent) {
  static get components() {
    return {
      'eui-button': Button,
      'eui-actionable-icon': ActionableIcon,
    };
  }

  /** hide the dialog
   * @method hideDialog
   *
   * @public
   *
   */
  hideDialog = () => {
    this.bubble('eui-dialog:cancel');
    this.show = false;
  };

  /** show the dialog
   * @method showDialog
   *
   * @public
   *
   */
  showDialog = () => {
    this.show = true;
  };

  /**
   * Render the dialog component. This function is called each time a
   * prop changes.
   */
  render() {
    let location;
    try {
      // TODO v1 container data structure, no longer exists
      location = window.EUI.Localizer.loc;
    } catch (error) {
      location = {};
    }

    const bottom = this.fullscreen
      ? w
      : $` <div class="dialog__bottom">
          ${this.noCancel
            ? w
            : $`
                <eui-button class="cancel" @click="${this.hideDialog}">
                  ${location.CANCEL || 'Cancel'}
                </eui-button>
              `}
          <slot name="bottom"></slot>
        </div>`;

    const right =
      this.fullscreen || this.noCancel
        ? $` <div class="dialog__right">
            <eui-actionable-icon
              class="cross"
              name="cross"
              size="14px"
              @click="${this.hideDialog}"
            ></eui-actionable-icon>
          </div>`
        : w;

    return $` <div class="dialog">
      <div class="dialog__top">
        <div class="dialog__left">
          <div class="dialog__title">${this.label}</div>
          <div class="dialog__subtitle">${this.subtitle}</div>
        </div>
        ${right}
      </div>
      <div class="dialog__body">
        <slot name="content"></slot>
      </div>
      ${bottom}
    </div>`;
  }
}

definition('eui-dialog', {
  style: style$4,
  props: {
    fullscreen: { attribute: true, type: Boolean },
    label: { attribute: true, type: String },
    subtitle: { attribute: true, type: String },
    noCancel: { attribute: true, type: Boolean },
    show: { attribute: true, type: Boolean },
    warning: { attribute: true, type: Boolean },
  },
})(Dialog);

var style$5 = ":host {\n  display: inline-block;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nlabel input[type='file'] {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  pointer-events: none;\n}\n\nlabel input[type='file']:focus-visible + .btn {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n\n:host([fullwidth]),\n:host([fullwidth]) .btn {\n  display: block;\n}\n\n.btn {\n  display: flex;\n  width: 100%;\n  text-align: center;\n  flex-direction: row;\n  padding: 5px 12px 4px;\n  border-radius: var(--btn-radius, 3px);\n  outline: 0;\n  font-size: var(--btn-font-size, 14px);\n  color: var(--btn-secondary-text, #242424);\n  background-color: var(--btn-secondary-background, transparent);\n  border: 1px solid var(--btn-secondary-border, #242424);\n  line-height: var(--btn-line-height, 21px);\n  box-sizing: border-box;\n  background-image: var(--btn-secondary-gradient);\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica', 'sans-serif');\n}\n\n.with--icon {\n  margin-left: var(--space-small, 4px);\n  margin-right: 0;\n}\n\n.button__label {\n  flex: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\neui-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -2px;\n  text-align: right;\n  --icon-color: var(--btn-secondary-text, #242424);\n}\n\n:host(:empty) .with--icon {\n  margin-left: 0;\n}\n\n.btn:last-child {\n  margin-right: 0;\n}\n\n:host([disabled]) .btn {\n  opacity: 0.6;\n  cursor: default;\n}\n\n/* TODO :host(:not([disabled])) .btn:hover {  */\n:host(:hover:not([disabled])) .btn {\n  color: var(--btn-secondary-hover-text, #fff);\n  text-decoration: none;\n  background-color: var(--btn-secondary-hover, #4e4e4e);\n  border: 1px solid var(--btn-secondary-hover, #4e4e4e);\n  --icon-color: var(--btn-secondary-hover-text, #fff);\n  cursor: pointer;\n}\n\n:host(:hover:not([disabled])) .btn eui-icon {\n  --icon-color: var(--btn-secondary-hover-text, #fff);\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n\n:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {String} accept - one or more unique file type specifiers describing allowed file types
 * @property {String} capture - specify what source to use for capturing image or video data
 * @property {Boolean} disabled - true disables the text-field
 * @property {Boolean} fullwidth - sets component width to 100%
 * @property {Boolean} multiple - true indicates that the user may choose more than one file
 * @property {String} name - name associated with element for the purpose of form submission.
 * @property {Boolean} required - if true, input must be filled out before submitting the form
 */

class FileInput extends Accessibility$1(LitComponent) {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  /**
   * return file input element
   * @returns {Object}
   */
  get inputElement() {
    return this.shadowRoot.querySelector('input[type="file"]');
  }

  setInitialFocus() {
    this.inputElement.focus();
  }

  /**
   * return DOMString that represents the path to the selected file
   * empty if no file/s selected
   *
   * @returns {string}
   */
  get value() {
    return this.inputElement.value;
  }

  /**
   * return FileList object that lists every selected file
   *
   * @returns {Object}
   */
  get files() {
    return this.inputElement.files;
  }

  /**
   * bubble up the input file event on change/input
   *
   * @method handleEvent
   * @param {Object} event
   */
  handleEvent(event) {
    event.stopPropagation();
    this.bubble(event.type);
  }

  /**
   * Render the input file component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
    <label>
      <input
        type="file"
        accept=${l$1(this.accept)}
        capture=${l$1(this.capture)}
        name=${this.name}
        ?multiple=${this.multiple}
        ?required=${this.required}
        ?disabled=${this.disabled}
        @change=${this}
      />
      <div class="btn">
        <span>
          <eui-icon name="upload" size="14px"></eui-icon>
          <span class="button__label with--icon">
          <slot></slot>
        </span>
      </div>
    </label>
    `;
  }
}
definition('eui-file-input', {
  style: style$5,
  props: {
    accept: { attribute: true, type: String },
    capture: { attribute: true, type: String },
    disabled: { attribute: true, type: Boolean },
    fullwidth: { attribute: true, type: Boolean },
    multiple: { attribute: true, type: Boolean },
    name: { attribute: true, type: String, default: 'file' },
    required: { attribute: true, type: Boolean },
  },
})(FileInput);

var style$6 = "/* style goes here */\n:host {\n  display: inline-block;\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\neui-actionable-icon {\n  cursor: pointer;\n  opacity: 0.7;\n  vertical-align: middle;\n}\n\neui-icon:hover {\n  opacity: 1;\n}\n\neui-tooltip[visible='always'] eui-actionable-icon {\n  opacity: 1;\n}\n\neui-actionable-icon:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {String} message - Message for the info popup.
 * @property {String} position - position of the info popup.
 * @property {String} icon - name of the icon to add to the info popup.
 */
class InfoPopup extends LitComponent {
  static get components() {
    return {
      'eui-tooltip': Tooltip,
      'eui-actionable-icon': ActionableIcon,
    };
  }

  /**
   * Toggle the visibility of the tooltip on click. If the tooltip is visible, add a blur event listener to hide the tooltip on blur.
   * Blur event hides the tooltip and removes the blur event listener.
   * @function handleEvent
   * @param {Event} event - event Object
   */

  handleEvent(event) {
    event.stopPropagation();

    if (event.type === 'click') {
      this._visible = this._visible === 'always' ? 'never' : 'always';
      if (this._visible === 'always') {
        this.addEventListener('blur', this);
      }
    }

    if (event.type === 'blur') {
      this._visible = 'never';
      document.removeEventListener('blur', this);
    }
  }

  /**
   * Render the info-popup component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <eui-tooltip
        id="tooltip"
        message=${l$1(this.message)}
        position=${this.position}
        visible=${this._visible}
      >
        ${!this.message
          ? $`<div slot="message"><slot></slot></div>`
          : w}
        <eui-actionable-icon
          name=${this.icon}
          @click=${this}
        ></eui-actionable-icon>
      </eui-tooltip>
    `;
  }
}

definition('eui-info-popup', {
  style: style$6,
  props: {
    message: { attribute: true, type: String },
    position: { attribute: true, type: String, default: 'right' },
    _visible: { type: String, default: 'never' },
    icon: { attribute: true, type: String, default: 'info' },
  },
})(InfoPopup);

var style$7 = ":host {\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([size=\"small\"]) #loaderIcon {\n  --icon-size: 16px;\n}\n:host([size=\"medium\"]) #loaderIcon {\n  --icon-size: 32px;\n}\n:host([size=\"large\"]) #loaderIcon {\n  --icon-size: 64px;\n}\n\n@keyframes rotateAnimation {\n  0%,100% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0)\n  }\n\n  25% {\n    -webkit-transform: rotate(300deg);\n    transform: rotate(300deg)\n  }\n}\n\n#loaderIcon {\n  display: inline-block;\n  animation: rotateAnimation 2s infinite ease-in-out;\n  animation-play-state: running;\n  transform-origin: 50% 50%;\n}\n\n:host([hidden]) #loaderIcon {\n  animation-play-state: paused;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Loader extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  render() {
    return $`
      <div id="divIcon">
        <eui-icon
          name="dial"
          id="loaderIcon"
          color=${l$1(this.color)}
        ></eui-icon>
      </div>
    `;
  }
}

definition('eui-loader', {
  style: style$7,
  props: {
    hidden: { attribute: true, type: Boolean },
    size: { attribute: true, type: String, default: 'medium' },
    color: { attribute: true, type: String },
  },
})(Loader);

var style$8 = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  right: -599px;\n  z-index: 100;\n  padding: 12.5px 16px;\n  width: 100%;\n  max-width: 350px;\n  color: var(--text, #242424);\n  background-color: var(--notification-background, #fff);\n  border: 1px solid var(--notification-border, #878787);\n  box-shadow: 0 2px 16px 0 var(--notification-shadow-color, rgba(0, 0, 0, 0.1));\n  transition: right 0.5s ease-in-out;\n}\n\n:host(.move:not([static])) {\n  animation-name: notification-slide;\n  animation-duration: 500ms;\n}\n\n@keyframes notification-slide {\n  from {\n    right: -599px;\n  }\n  to {\n    right: 16px;\n  }\n}\n\n:host(.move) {\n  right: 16px;\n}\n\n:host(:hover) {\n  border-color: var(--notification-hover, #6a6a6a);\n  cursor: pointer;\n}\n\n:host([static]) {\n  position: relative;\n  top: auto;\n  right: auto;\n  display: block;\n}\n\n.notification .description-slot,\n.notification .description-prop {\n  margin-top: var(--space-large, 16px);\n  color: var(--text, #242424);\n  display: flex;\n  line-height: 1.5;\n}\n\n.notification .description .actions .btn {\n  margin-bottom: 6px;\n  width: 100%;\n  min-width: 80px;\n  margin-right: 0;\n}\n\n.notification .top-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.notification .top-row .status {\n  display: inline-block;\n}\n\n.notification .top-row .status::before {\n  font-family: 'Ericsson Icons' !important;\n  margin-right: var(--space-large, 16px);\n  vertical-align: middle;\n  font-size: 16px;\n}\n\n.notification .top-row .title {\n  flex: 1;\n  line-height: 1.5;\n}\n\n@media --tablet {\n  .notification {\n    top: 64px;\n    width: 380px;\n  }\n\n  .notification .live {\n    right: 16px;\n  }\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {Number} timeout - determines the time until the notification disappears
 * @property {String} description - text only description text
 */
class Notification extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  /**
   * Notification constructor.
   */
  constructor() {
    super();
    this.start = 0;
    this.remaining = 0;
    this._wrapper = document.querySelector('#notifications-column');
    if (!this._wrapper) {
      this._addWrapperToDOM();
    }
  }

  /**
   * Creates a div (which will be the parent element for all
   * notifications) and attaches it to the DOM
   */
  _addWrapperToDOM = () => {
    const div = document.createElement('div');
    div.id = 'notifications-column';
    div.style.width = '400px';
    div.style.position = 'absolute';
    div.style.top = '59px';
    div.style.right = '16px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '8px';
    div.style.alignItems = 'flex-end';
    div.style.overflowX = 'hidden';
    this._wrapper = div;
    document.body.appendChild(this._wrapper);
  };

  /**
   * Array of timers one from the timeout prop and the other to control
   * the addition of the move class (animation)
   */
  _timers = [];

  /**
   * Clear and close all timers in notification
   */
  _clearTimers() {
    this._timers.forEach(timer => {
      clearTimeout(timer);
    });
    this._timers = [];
  }

  /**
   * Close notification via button
   */
  _closeNotification = event => {
    this._clearTimers();

    if (event) {
      event.stopPropagation();
    }

    this.remove();
  };

  /**
   * Pause the timer
   */
  pause() {
    if (this.start) {
      this._clearTimers();
      this.remaining -= Date.now() - this.start;
    }
  }

  /**
   * Resume a paused timer
   */
  resume() {
    this.start = Date.now();
    this._timers.push(
      setTimeout(() => {
        this._closeNotification();
      }, this.remaining),
    );
  }

  /**
   * Hide description if slot is empty
   */
  _hideDescription = () => {
    const hideDescription = !this.querySelector('[slot="description"]');
    if (hideDescription) {
      this.shadowRoot.querySelector('.description-slot').remove();
    }
  };

  /**
   * Add current notification object in dom
   */
  showNotification() {
    this.start = Date.now();
    this._wrapper.appendChild(this);
  }

  didUpgrade() {
    if (this.timeout) {
      this.remaining = this.timeout;

      this._timers.push(
        setTimeout(() => {
          this._closeNotification();
        }, this.timeout),
      );

      this.addEventListener('mouseover', () => {
        this.pause();
      });

      this.addEventListener('mouseout', () => {
        this.resume();
      });
    }
  }

  /**
   * Hook into the lifecycle callback to trigger the change event when the
   * on prop is changed.
   *
   * @function didChangeProps
   * @param {Map} changedProps - previous values of the changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('timeout') && this.timeout) {
      this._timers.push(
        setTimeout(() => {
          this._closeNotification();
        }, this.timeout),
      );
    }
  }

  /**
   * Hook into the lifecycle callback to trigger the notification to
   * animate into view as soon as it's added to the DOM
   *
   * @function didConnect
   */
  didConnect() {
    this._timers.push(
      setTimeout(() => {
        this.classList.add('move');
      }, 100),
    );
  }

  didRender() {
    this._timers.push(
      setTimeout(() => {
        this._hideDescription();
      }),
    );
  }

  didDisconnect() {
    this._clearTimers();
  }

  _renderDescriptionFromProp() {
    return this.description
      ? $` <div class="description-prop">${this.description}</div> `
      : null;
  }

  _renderDescriptionFromSlot() {
    return $`
      <div class="description-slot">
        <slot name="description"></slot>
      </div>
    `;
  }

  /**
   * Render the notification component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <div class="notification">
        <div class="top-row">
          <div class="title">
            <slot></slot>
          </div>
          <eui-icon
            @click=${() => this._closeNotification()}
            name="cross"
          ></eui-icon>
        </div>
        ${this._renderDescriptionFromProp()}
        ${this._renderDescriptionFromSlot()}
      </div>
    `;
  }
}

definition('eui-notification', {
  style: style$8,
  props: {
    timeout: { attribute: true, type: Number },
    description: { attribute: true, type: String },
  },
})(Notification);

var style$9 = ":host(:hover:not([disabled]):not([readonly])) .textfield__icon ::slotted(*) {\n  --icon-color: var(--text, #242424);\n  opacity: 0.5;\n}\n\n:host(:hover:not([disabled]):not([readonly])) .textfield__icon ::slotted(*:hover) {\n  --icon-color: var(--text, #242424);\n  opacity: 1;\n}\n\n:host(:not([disabled]):not([readonly])) input:focus-visible + .textfield__icon ::slotted(*){\n  --icon-color: var(--text, #242424);\n  opacity: 0.5;\n}\n\ninput {\n  min-width: 160px;\n  width: 100% !important;\n}\n\n.textfield__icon ::slotted(*) {\n  opacity: 0;\n  padding-right: 3px;\n  line-height: 1;\n}\n\n.textfield__icon--no-right-margin {\n  margin-left: -28px;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class PasswordField extends TextField {
  static get components() {
    return {
      'eui-tooltip': Tooltip,
      'eui-icon': Icon,
    };
  }

  /**
   * call this only once when the shadowRoot is
   * attached and the template is added.
   *
   * @function didUpgrade
   */
  didUpgrade() {
    super.didUpgrade();

    // add tooltip
    this.tooltip = this.createElement('eui-tooltip');
    this.tooltip.setAttribute('position', 'bottom');
    this.tooltip.slot = 'icon';

    // Block tooltip's cursor css, cannot override due to nested slots
    if (!this.disabled && !this.readonly) {
      this.tooltip.setAttribute('action', '');
    }

    // add the eye icon
    this.eyeIcon = this.createElement('eui-icon');
    this.eyeIcon.addEventListener('click', () => {
      this._toggleUnmask();
    });
    this.tooltip.appendChild(this.eyeIcon);

    if (!this.unmaskDisabled) {
      this.appendChild(this.tooltip);
    } else {
      this.unmask = false;
    }

    this.addEventListener('keydown', this);

    // set the text field as a password field
    this.inputField = this.shadowRoot.querySelector('input');
    this._updateMaskState();
  }

  handleEvent(event) {
    super.handleEvent(event);
    if (event.type === 'keydown') {
      if (event.key === 'F8' && event.altKey) {
        this._toggleUnmask();
      }
    }
  }

  /**
   * Lifecycle callback executed each time the components props are updated
   *
   * @method didChangeProps
   * @param {Object} changedProps - the previous values of the components changed props
   *
   * @protected
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    if (changedProps.has('unmask')) {
      if (this.unmaskDisabled) {
        this.unmask = false;
      }
      this._updateMaskState();
    }

    if (changedProps.has('disabled') || changedProps.has('readonly')) {
      if (this.disabled || this.readonly) {
        this.tooltip.removeAttribute('action');
      } else {
        this.tooltip.setAttribute('action', '');
      }
    }

    if (changedProps.has('unmaskDisabled')) {
      if (this.unmaskDisabled) {
        // Does not trigger another prop change
        this.unmask = false;
        this._updateMaskState();
        this.removeChild(this.tooltip);
      } else {
        this.appendChild(this.tooltip);
      }
    }
  }

  /**
   * Toggle the unmask state
   *
   * @method _updateMaskState
   * @private
   */
  _toggleUnmask() {
    if (!this.disabled && !this.readonly && !this.unmaskDisabled) {
      this.unmask = !this.unmask;
    }
  }

  /**
   * Updates the icon tooltip state based on mask state
   *
   * @method _updateMaskState
   * @private
   */
  _updateMaskState() {
    this.inputField.type = this.unmask ? 'text' : 'password';
    this.eyeIcon.setAttribute('name', this.unmask ? 'eye-solid' : 'eye');
    this.tooltip.setAttribute(
      'message',
      this.unmask ? 'Hide password' : 'Show password',
    );
  }
}

/**
 * @property {Boolean} autocomplete - true, browser automatically completes
 * the input values based on values that the user has entered before
 * @property {Boolean} autofocus - true, password-field should automatically
 * get focus when the page loads
 * @property {Boolean} disabled - true, disables the password field
 * @property {Boolean} fullwidth - true, sets the password field to
 * take the full width of the parent container
 * @property {Number} maxlength - sets the maximum allowed length for the password field
 * @property {String} name - sets the name of the password field (used in a form)
 * @property {String} pattern - regular expression for validating input
 * @property {String} placeholder - sets the placeholder text to appear in the
 * password field when it is empty
 * @property {Boolean} readonly - true sets the password field readonly
 * @property {Boolean} required - true, sets the password field must be
 * filled out before submitting the form
 * @property {String} unmask - true, unmasks the password field
 * @property {String} successMessage - success message to display when input value is valid
 * @property {String} validationMessage - message to display when input value is invalid
 * @property {Boolean} unmaskDisabled - true, disables the unmask functionality
 */
definition('eui-password-field', {
  style: style$9,
  props: {
    unmask: { attribute: true, type: Boolean },
    unmaskDisabled: { attribute: true, type: Boolean },
  },
})(PasswordField);

// TODO: This must be removed as it is not good OOD. We are extending the Textfield
// so we should not remove props. Instead we should have a base Textfield
// without prefix, suffix and size.
// Other solution is to allow prefix, suffix and size in the Password component.

// Remove unnecessary props inherited from parent class
delete PasswordField._propDefs.prefix;
delete PasswordField._propDefs.suffix;
delete PasswordField._propDefs.size;

var style$a = ":host {\n  box-sizing: border-box;\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.pill.toggle {\n  display: inline-flex;\n  padding: 0 var(--space-base, 8px);\n  min-height: 24px;\n  border-radius: var(--space-large, 16px);\n  color: var(--pill-text, #242424);\n  background-color: var(--pill-background, #fafafa);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--pill-border, #878787);\n  align-items: center;\n  user-select: none;\n  white-space: nowrap;\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n\n.pill.toggle:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n\n.pill.toggle:hover {\n  cursor: pointer;\n  background-color: var(--pill-toggle-background-hover, #dcdcdc);\n}\n\n.pill:empty {\n  display: none;\n}\n\n:host([disabled]) {\n  opacity: 0.4;\n  pointer-events: none;\n  cursor: pointer;\n}\n\n/* as per EDS pill style */\n:host([removable]) .pill eui-icon:last-child {\n  margin-right: -4px;\n  margin-left: var(--space-small, 4px);\n}\n\n.pill.toggle span {\n  vertical-align: middle;\n}\n\n.pill.toggle eui-icon:first-child {\n  margin-right: var(--space-small, 4px);\n}\n\n/* as per EDS pill style */\n.pill.toggle.severity-cleared eui-icon:first-child {\n  margin-left: -4px;\n}\n\n.pill eui-icon.close {\n  cursor: pointer;\n}\n\n.pill eui-icon {\n  color: var(--pill-text, #242424);\n}\n\n:host([unselected]) .pill.toggle {\n  background-color: var(--pill-toggle-unselected-background, #fafafa);\n  border-color: var(--pill-toggle-unselected-border, #6a6a6a);\n  border-style: dashed;\n  color: var(--pill-toggle-unselected-text, #6a6a6a);\n}\n\n:host([unselected]) .pill.toggle:hover {\n  background-color: var(--pill-toggle-unselected-background-hover, #dcdcdc);\n  border-color: var(--pill-toggle-unselected-border-hover, #878787);\n  border-style: dashed;\n  color: var(--pill-text, #242424);\n}\n\n:host([unselected]) .pill.toggle eui-icon {\n  color: var(--pill-toggle-unselected-text, #6a6a6a);\n  opacity: 0.6;\n}\n\n:host([unselected]) .pill.toggle:hover eui-icon {\n  opacity: 1;\n}\n\n.pill.severity-critical eui-icon {\n  color: var(--red, #ed0e00);\n  --icon-color: var(--red, #ed0e00);\n}\n\n.pill.severity-major eui-icon {\n  color: var(--orange, #d46617);\n  --icon-color: var(--orange, #d46617);\n}\n\n.pill.severity-minor eui-icon {\n  color: var(--yellow, #a08209);\n  --icon-color: var(--yellow, #a08209);\n}\n\n.pill.severity-warning eui-icon {\n  color: var(--link-blue, #0069c2);\n  --icon-color: var(--link-blue, #0069c2);\n}\n\n.pill.severity-indeterminate eui-icon {\n  color: var(--gray, #878787);\n  --icon-color: var(--gray, #878787);\n}\n.pill.severity-cleared eui-icon {\n  color: var(--green, #329864);\n  --icon-color: var(--green, #329864);\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
/* eslint-disable lit-a11y/tabindex-no-positive */

/**
 * @property {Boolean} removable - makes the pill Removable
 * @property {Boolean} disabled - true disables the component, false enables the component
 * @property {Boolean} unselected - sets the toggle state of the pill to unselected
 * @property {String} icon - name of the icon to display in the pill
 * @property {String} severity - type of severity color to set for the pill
 * @property {String} color - color value to apply to icon inside the pill
 */

class Pill extends Accessibility$1(LitComponent) {
  _SPACE_KEY = ' ';

  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    this.addEventListener('click', this);
  }

  /**
   * _isIcon determines if there is an icon added to the pill.
   *
   * @function _isIcon
   * @private
   */
  _isIcon = () => this.icon && this.icon.length > 0;

  /**
   * _isSeverity determines if the pill needs to display a severity icon.
   *
   * @function _isSeverity
   * @private
   */
  _isSeverity = () => this.severity && this.severity.length > 0;

  /**
   * _withIcon renders the markup for the icon if it is added to the pill
   *
   * @function _withIcon
   * @private
   */
  _withIcon = () => {
    if (this._isSeverity()) {
      return $`<eui-icon
        name=${`severity-${this.severity}`}
        size="14px"
      ></eui-icon>`;
    }
    if (this._isIcon()) {
      return $`<eui-icon
        name=${this.icon}
        color=${l$1(this.color)}
        size="14px"
      ></eui-icon>`;
    }
    return null;
  };

  /**
   * Close pill via X icon
   */
  _closePill = event => {
    if (event) {
      event.stopPropagation();
    }

    const emittedEvent = this.bubble(
      'eui-pill:remove',
      {},
      { cancelable: true },
    );

    if (!emittedEvent.defaultPrevented) {
      this.parentElement.removeChild(this);
    }
  };

  /**
   * Get styles for root element
   *
   * @function _getStyles
   * @private
   */
  _getStyles = () => {
    const pillSeverity = this.severity ? `severity-${this.severity}` : '';
    return `pill toggle ${pillSeverity}`;
  };

  /**
   * Returns focusable element in the ShadowDOM
   */
  get focusableElement() {
    return this.shadowRoot.querySelector('.pill.toggle');
  }

  /**
   * Sets focus on element in the ShadowDOM
   */
  setInitialFocus() {
    this.focusableElement.focus();
  }

  /**
   * Handles the state change of the pill
   */
  handleEvent(event) {
    if (event.type === 'click') {
      this.unselected = !this.unselected;
    } else if (event.type === 'keydown') {
      if (event.key === this._SPACE_KEY || event.key === 'Enter') {
        event.preventDefault();
        this.unselected = !this.unselected;
      } else if (event.key === 'Delete' && this.removable) {
        this._closePill();
      }
    }
  }

  /**
   * Renders the pill component. This function is called each time a
   * prop changes.
   *
   * @method render
   */
  render() {
    return $`
      <div
        tabindex=${this.disabled ? -1 : 0}
        class="${this._getStyles()}"
        ?disabled=${this.disabled}
        @keydown=${this}
      >
        ${this._withIcon()}
        <span>
          <slot></slot>
          ${this.removable
            ? $`<eui-icon
                @click=${() => this._closePill()}
                size="10px"
                color="var(--text, #242424)"
                class="close"
                name="cross"
              ></eui-icon>`
            : ''}
        </span>
      </div>
    `;
  }
}
definition('eui-pill', {
  style: style$a,
  props: {
    removable: { attribute: true, type: Boolean },
    disabled: { attribute: true, type: Boolean },
    unselected: { attribute: true, type: Boolean },
    icon: { attribute: true, type: String },
    severity: { attribute: true, type: String },
    color: { attribute: true, type: String },
  },
})(Pill);

var style$b = ":host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.progress-bar {\n  display: flex;\n  align-items: center;\n}\n\nlabel {\n  display: block;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.progress-bar .progress-wrapper {\n  flex: 1;\n  height: var(--progress-bar-height, 8px);\n  position: relative;\n}\n.progress-bar progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n  width: 100%;\n  height: 100%;\n  background-color: var(--progress-bar-background, #dcdcdc);\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n}\n.progress-bar progress::-moz-progress-bar {\n  background-color: var(--progress-bar-value, #242424);\n  transition: all 0.2s ease-in-out;\n}\n.progress-bar progress.buffer {\n  opacity: 0.3;\n}\n\n/* indeterminate */\n.progress-bar .show-indeterminate {\n  width: 100%;\n  background: none;\n  animation: indeterminateAnimation 1s infinite ease-in-out 1s;\n  transform-origin: 0 0;\n}\n.progress-bar .show-indeterminate progress::-webkit-progress-bar {\n  background: none;\n  animation: indeterminateAnimation 1s infinite ease-in-out 1s;\n  transform-origin: 0 0;\n}\n.progress-bar .show-indeterminate progress::-moz-progress-bar {\n  background: none;\n  animation: indeterminateAnimation 1s infinite ease-in-out 1s;\n  transform-origin: 0 0;\n}\n.progress-bar .value {\n  margin-left: var(--space-small, 4px);\n}\n.progress-bar .unit {\n  color: var(--progress-bar-unit, #6a6a6a);\n}\n\n.progress-bar progress::-webkit-progress-bar {\n  background-color: var(--progress-bar-background, #dcdcdc);\n}\n.progress-bar progress::-webkit-progress-value {\n  background-color: var(--progress-bar-value, #242424);\n  height: var(--progress-bar-height, 8px);\n  width: 100%;\n  transition: all 0.2s ease-in-out;\n}\n/* Thin progress bar*/\n.progress-bar.thin progress {\n  height: var(--progress-bar-height-thin, 4px);\n}\n.progress-bar.thin progress::-webkit-progress-value {\n  height: var(--progress-bar-height-thin, 4px);\n}\n\n/* Progressbar colors */\n.progress-bar.red progress::-webkit-progress-value {\n  background-color: var(--red, #ed0e00);\n}\n.progress-bar.red progress::-moz-progress-bar {\n  background-color: var(--red, #ed0e00);\n}\n.progress-bar.red progress[value] {\n  color: var(--red, #ed0e00);\n}\n.progress-bar.blue progress::-webkit-progress-value {\n  background-color: var(--blue, #1174e6);\n}\n.progress-bar.blue progress::-moz-progress-bar {\n  background-color: var(--blue, #1174e6);\n}\n.progress-bar.blue progress[value] {\n  color: var(--blue, #1174e6);\n}\n.progress-bar.green progress::-webkit-progress-value {\n  background-color: var(--green, #329864);\n}\n.progress-bar.green progress::-moz-progress-bar {\n  background-color: var(--green, #329864);\n}\n.progress-bar.green progress[value] {\n  color: var(--green, #329864);\n}\n.progress-bar.yellow progress::-webkit-progress-value {\n  background-color: var(--yellow, #a08209);\n}\n.progress-bar.yellow progress::-moz-progress-bar {\n  background-color: var(--yellow, #a08209);\n}\n.progress-bar.yellow progress[value] {\n  color: var(--yellow, #a08209);\n}\n.progress-bar.orange progress::-webkit-progress-value {\n  background-color: var(--orange, #d46617);\n}\n.progress-bar.orange progress::-moz-progress-bar {\n  background-color: var(--orange, #d46617);\n}\n.progress-bar.orange progress[value] {\n  color: var(--orange, #d46617);\n}\n.progress-bar.purple progress::-webkit-progress-value {\n  background-color: var(--purple, #a56ebe);\n}\n.progress-bar.purple progress::-moz-progress-bar {\n  background-color: var(--purple, #a56ebe);\n}\n.progress-bar.purple progress[value] {\n  color: var(--purple, #a56ebe);\n}\n.progress-bar.white progress::-webkit-progress-value {\n  background-color: var(--white, #fff);\n}\n.progress-bar.white progress::-moz-progress-bar {\n  background-color: var(--white, #fff);\n}\n.progress-bar.white progress[value] {\n  color: var(--white, #fff);\n}\n.progress-bar.gray progress::-webkit-progress-value {\n  background-color: var(--gray, #878787);\n}\n.progress-bar.gray progress::-moz-progress-bar {\n  background-color: var(--gray, #878787);\n}\n.progress-bar.gray progress[value] {\n  color: var(--gray, #878787);\n}\n\n@-webkit-keyframes indeterminateAnimation {\n  0% {\n    transform: translateX(0) scaleX(0);\n  }\n  40% {\n    transform: translateX(0) scaleX(1);\n  }\n  100% {\n    transform: translateX(100%) scaleX(0);\n  }\n}\n\n@-moz-keyframes indeterminateAnimation {\n  0% {\n    transform: translateX(0) scaleX(0);\n  }\n  40% {\n    transform: translateX(0) scaleX(1);\n  }\n  100% {\n    transform: translateX(100%) scaleX(0);\n  }\n}\n\n@keyframes indeterminateAnimation {\n  0% {\n    transform: translateX(0) scaleX(0);\n  }\n  40% {\n    transform: translateX(0) scaleX(1);\n  }\n  100% {\n    transform: translateX(100%) scaleX(0);\n  }\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {Number} buffer - set buffer value
 * @property {String} label - the label text displayed above the progress
 * @property {Boolean} thin - set the bar size as thin
 * @property {Boolean} unit - display the unit of the value (defaults to %)
 * @property {Number} max - set the maximum progress value
 * @property {Number} min - set the minimum progress value
 * @property {String} color - set the bar color
 * @property {Number} value - set the progress value
 */
class ProgressBar extends LitComponent {
  /**
   * When a prop changes check if the value changed is the bar-width
   *
   * @function didChangeProps
   */
  didChangeProps() {
    if (this.value !== -1 && this.value > this.max) {
      this.value = this.max;
    }
    if (this.value !== -1 && this.value < this.min) {
      this.value = this.min;
    }
  }

  /**
   * Returns the classes that needs to be added on the progress bar
   * @returns {string} - class names required to be on the progress bar
   * @private
   */
  _getProgressBarClasses() {
    const { thin, color } = this;
    const barThin = thin ? ' thin' : '';
    const barColor = color ? ` ${color}` : '';
    const progressBarClass = `progress-bar${barThin}${barColor}`;
    return progressBarClass;
  }

  /**
   * Returns the progress element with min, max, val properties
   * @returns {object} - progress element template
   * @private
   */
  _getProgressElement() {
    const { value, min, max } = this;
    const progressElement =
      value > -1
        ? $` <progress min=${min} max=${max} value="${value}"></progress> `
        : $` <progress min=${min} max=${max}></progress> `;
    return progressElement;
  }

  /**
   * Returns the label element for the progress bar
   * @returns {object} - if label value is set then returns label element template otherwise null
   * @private
   */
  _getLabelElement() {
    const { label } = this;
    const labelElement = label ? $` <label>${label}</label> ` : null;
    return labelElement;
  }

  /**
   * Checks if progress bar needs to enable buffer
   * @returns {boolean} - true/false, buffer is required/not required
   * @private
   */
  _isBufferElementRequired() {
    const { value, buffer } = this;
    return buffer > value && value > -1;
  }

  /**
   * Returns the classes that needs to be added on the progress wrapper
   * @returns {string} - list of class names to be added on progress wrapper
   * @private
   */
  _getProgressWrapperClasses() {
    const progressWrapperClass = 'progress-wrapper';
    const showIndeterminate = this.value < 0 ? 'show-indeterminate' : '';
    const classNames = `${progressWrapperClass} ${showIndeterminate}`;
    return classNames;
  }

  /**
   * Returns the buffer element for the progress bar
   * @returns {object} - if buffer element is required
   * then returns progress element with buffer otherwise null
   * @private
   */
  _getProgressBufferElement() {
    const { buffer, min, max } = this;
    const bufferClass = 'buffer';
    const bufferElement = this._isBufferElementRequired()
      ? $`
          <progress
            class="${bufferClass}"
            min=${min}
            max=${max}
            value="${buffer}"
          ></progress>
        `
      : null;
    return bufferElement;
  }

  /**
   * Returns the value element for the progress bar
   * @return {object} - if value property is valid
   * then returns the value element template otherwise null
   * @private
   */
  _getValueElement() {
    const { value } = this;
    const valueElement =
      value > -1
        ? $`
            <span class="value">${value}</span>
            <span class="unit">${this.unit}</span>
          `
        : null;
    return valueElement;
  }

  /**
   * Render the ProgressBar component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      ${this._getLabelElement()}
      <div class="${this._getProgressBarClasses()}">
        <div class="${this._getProgressWrapperClasses()}" >
          ${this._getProgressElement()}
          ${this._getProgressBufferElement()}
        </div>
        ${this._getValueElement()}
        </div>
      </div>`;
  }
}
definition('eui-progress-bar', {
  style: style$b,
  props: {
    buffer: { attribute: true, type: Number, default: 0 },
    color: { attribute: true, type: String },
    label: { attribute: true, type: String, default: '' },
    max: { attribute: true, type: Number, default: 100 },
    min: { attribute: true, type: Number, default: 0 },
    thin: { attribute: true, type: Boolean },
    unit: { attribute: true, type: String, default: '%' },
    value: { attribute: true, type: Number, default: -1 },
  },
})(ProgressBar);

var style$c = ":host {\n  box-sizing: border-box;\n  display: flex;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  padding: 3px 0;\n  vertical-align: sub;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  cursor: pointer;\n  --radio-stroke: var(--radio-border, #878787);\n  --radio-fill: var(--radio-background, #fff);\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([disabled]) {\n  cursor: not-allowed;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\ninput {\n  cursor: pointer;\n  appearance: none;\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n  border: solid 1px var(--radio-stroke);\n}\ninput::before {\n  content: '';\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  /* transform: scale(0); */\n  opacity: 0;\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--dot-fill);\n}\ninput:checked::before {\n  /* transform: scale(1); */\n  opacity: 1;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n:host(:hover) {\n  cursor: pointer;\n  --radio-stroke: var(--radio-border-hover, #6a6a6a);\n}\n\n:host([disabled]) {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n\n:host([checked]) {\n  --radio-stroke: var(--radio-border, #878787);\n  --dot-fill: var(--radio-checked, #1174e6);\n}\n\n:host([checked]:hover) {\n  --radio-stroke: var(--radio-border-hover, #6a6a6a);\n  --dot-fill: var(--radio-checked-hover, #0069c2);\n}\n\ninput:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n\n:host(:focus) {\n  outline: none;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

let count = 0;
/**
 * @property {Boolean} checked - true sets the radio button checked
 * @property {Boolean} disabled - disables the radio button
 * @property {String} group - the group name of the radio button (required)
 * @property {String} name - the name of the radio button (required)
 */
class RadioButton extends LitComponent {
  /**
   * store the focused state of the radio button.
   */
  _focused = false;

  constructor() {
    super();
    this.addEventListener('focus', this);
    this.addEventListener('blur', this);
  }

  /**
   * Set the initial focus on the focusable element in the component.
   */
  setInitialFocus() {
    this._focusableElement.focus();
  }

  /**
   * When the radio button is connected it's initial tabindex is set.
   */
  didConnect() {
    if (!this.name) {
      this.name = `rb_generated_${(count += 1)}`;
    }
    this._setTabIndex();
  }

  /**
   * Getter for the focusable element in the component.
   *
   * @property
   * @private
   */
  get _focusableElement() {
    return this.shadowRoot.querySelector('input');
  }

  /**
   * Set the initial tabindex on the Component.
   * The tabindex is based on other radio buttons from the same group.
   *
   * @function _setTabIndex
   * @private
   * @returns null
   */
  _setTabIndex() {
    // 1. if this RadioButton is disabled, set it NON focusable...
    if (this.disabled) {
      this.setAttribute('tabindex', -1);
      return;
    }

    // 2. if this RadioButton is checked, set it focusable...
    if (this.checked) {
      this.setAttribute('tabindex', 0);
      return;
    }

    // is there any radio button checked?
    const checkedRadioButton = this.parentNode.querySelector(
      `[group=${this.group}][checked]:not([disabled])`,
    );

    // 3. if there is another RadioButton in the group that is checked and NOT
    // disabled then set this RadioButton to NON focusable
    if (checkedRadioButton) {
      this.setAttribute('tabindex', -1);
      return;
    }

    // 4. if this is the first NON disabled RadioButton in the group, set it to focusable.
    // otherwise set the RadioButton NON focusable.
    if (
      this.parentNode.querySelector(`[group=${this.group}]:not([disabled])`) ===
      this
    ) {
      this.setAttribute('tabindex', 0);
    } else {
      this.setAttribute('tabindex', -1);
    }
  }

  /**
   * Set the focus on the focusable Element and mark it as checked.
   *
   * @function _checkAndFocus
   * @private
   */
  _checkAndFocus() {
    if (!this.disabled) {
      this._focusableElement.focus();
      this.checked = true;
    }
  }

  /**
   * Is the target element (radioButton) in the same group as this (current) RadioButton.
   *
   * @function isRadioInGroup
   * @param {Element} element - radio button
   * @returns
   */
  isRadioInGroup(element) {
    if (element == null) {
      return false;
    }
    return this.nodeName === element.nodeName && this.group === element.group;
  }

  /**
   * Get all radio buttons in the group
   *
   * @function _allRadiosInGroup
   * @param {String} exclude - name of the radio to exclude from the search results.
   * @private
   * @returns
   */
  _allRadiosInGroup(exclude = null) {
    if (exclude) {
      return [
        ...this.parentNode.querySelectorAll(
          `[group=${this.group}]:not([name=${exclude}])`,
        ),
      ];
    }
    return [...this.parentNode.querySelectorAll(`[group=${this.group}]`)];
  }

  /**
   * Get the first RadioButton in the group.
   *
   * @property
   */
  get firstRadioInGroup() {
    return this.parentNode.querySelector(`[group=${this.group}]`);
  }

  /**
   * Get the last RadioButton in the group.
   *
   * @property
   */
  get lastRadioInGroup() {
    const radioButtons = this.parentNode.querySelectorAll(
      `[group=${this.group}]`,
    );
    return radioButtons[radioButtons.length - 1];
  }

  /**
   * Navigate to the next radio button in the group.
   * This is executed on the down/right arrow keys.
   * When the next reaches the last radio button in the group
   * it starts again at the top of the group.
   *
   * @function _nextRadio
   * @param {RadioButton} from - the next radio button
   * @private
   */
  _nextRadio(from = this) {
    let nextRadio = null;
    if (from.isRadioInGroup(from.nextElementSibling)) {
      nextRadio = from.nextElementSibling;
    } else {
      nextRadio = from.firstRadioInGroup;
    }

    if (nextRadio.disabled) {
      this._nextRadio(nextRadio);
    }
    nextRadio._checkAndFocus();
  }

  /**
   * Navigate to the previous radio button in the group.
   * This is executed on the up/left arrow keys.
   * When the next reaches the first radio button in the group
   * it starts again at the bottom of the group.
   *
   * @function _previousRadio
   * @param {RadioButton} from - the previous radio button
   * @private
   */
  _previousRadio(from = this) {
    let previousRadio = null;
    if (from.isRadioInGroup(from.previousElementSibling)) {
      previousRadio = from.previousElementSibling;
    } else {
      previousRadio = from.lastRadioInGroup;
    }

    if (previousRadio.disabled) {
      this._previousRadio(previousRadio);
    }
    previousRadio._checkAndFocus();
  }

  /**
   * Component received props. Determine if the checked state has changed.
   * If it is changed from false to true, then un-check all other radio buttons on the same group.
   *
   * @function didChangeProps
   * @param {Map} changedProps -  previous values of the changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('checked') && this.checked) {
      const previouslyCheckedRadioButton = this.parentNode.querySelector(
        `[group=${this.group}][checked]:not([name=${this.name}])`,
      );
      if (previouslyCheckedRadioButton) {
        previouslyCheckedRadioButton.checked = false;
      }

      if (!this._focused) {
        // set all other radio button to tabindex -1.
        this._allRadiosInGroup(this.name).forEach(radioButton => {
          radioButton.setAttribute('tabindex', -1);
        });
        this.setAttribute('tabindex', 0);
      }

      this.bubble('change', {
        name: this.name,
        value: this.value,
        group: this.group,
        label: this.value,
        checked: this.checked,
      });
    }
    if (changedProps.has('checked') && !this.checked) {
      this.setAttribute('tabindex', -1);
    }
  }

  /**
   * @function handleEvent
   * @param {MouseEvent} event - change/keydown/focus/blur
   */
  handleEvent(event) {
    if (event.type === 'change') {
      this.checked = event.target.checked;
    }
    if (event.type === 'keydown') {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        this._nextRadio();
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        this._previousRadio();
      }
    }
    if (event.type === 'focus') {
      this._focused = true;
      this.setInitialFocus();
      this.setAttribute('tabindex', -1);
    }
    if (event.type === 'blur') {
      this._focused = false;
      requestAnimationFrame(() => {
        this._setTabIndex();
      });
    }
  }

  /**
   * Get the value of the radio button.
   */
  get value() {
    return this.textContent.trim();
  }

  /**
   * Set the value of the radio button.
   */
  set value(value) {
    this.textContent = value.trim();
  }

  /**
   * Render the radio-button component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <div class="wrapper">
        <input
          @change=${this}
          @keydown=${this}
          type="radio"
          id="radio-button"
          name="${this.group}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
        />
        <label for="radio-button">
          <slot></slot>
        </label>
      </div>
    `;
  }
}
definition('eui-radio-button', {
  style: style$c,
  props: {
    checked: { attribute: true, type: Boolean },
    disabled: { attribute: true, type: Boolean },
    group: { attribute: true, type: String, required: true },
    name: { attribute: true, type: String, required: true },
  },
})(RadioButton);

/**
 * @file Module to create Range slider component.
 */

/**
 * Class representing a range slider.
 */
class RangeSlider {

  /**
   * Setup range slider properties.
   * @param {HTMLElement} input - input field.
   */
  constructor(input, props = {}) {

    // user has passed a CSS3 selector string

    if (typeof input === 'string') {
      input = document.querySelector(input);
    }

    this.settings = {
      multiple: input.hasAttribute('multiple'),
      thresholds: input.classList.contains('thresholds'),
      min: Number(input.min) || 0,
      max: Number(input.max) || 100,
      step: Number(input.step) || 1,
      readonly: input.readOnly,
      units: props.units || null,

      classes: {
        input: 'ranger-input',
        container: 'ranger-container',
        lower: 'ranger-lower',
        progress: 'ranger-progress',
        handle: 'ranger-handle',
        tooltip: 'ranger-tooltip',
        track: 'ranger-track',
        multiple: 'ranger-multiple',
        limits: 'range-limits',
        limit: 'range-limit',
        readonly: 'ranger-readonly',
        thresholds: 'ranger-thresholds',
        units: 'ranger-units'
      }
    };

    this.dom = {
      input: input
    };

    this.listeners = {
      down: (evt) => this._down(evt),
      touchstart: (evt) => this._touchStart(evt),
      move: (evt) => this._move(evt),
      up: () => this._up(),
      update: () => this.update(),
      change: () => this._change(),
      reset: () => this._reset(),
      keyUp: (evt) => this._keyActions(evt),
      keyDown: (evt) => {
        if (evt.key === 'ArrowUp' || evt.key === 'ArrowDown'){
          evt.preventDefault();
        }
      }
    };

    this.listeners.scroll = this._throttle(this.listeners.update, 100);
    this.listeners.resize = this._throttle(this.listeners.update, 50);

    this.touch = false;

    this.init();
    this.onInit();
  }

  /**
   * Initialize range slider.
   * @public
   */
  init() {
    if (!this.dom.input.ranger) {

      this.dom.input.ranger = this;

      if (this.settings.multiple) {
        if (this.dom.input.getAttribute('values')) {
          this.dom.input.values = this.dom.input.getAttribute('values').split(',');

          this.dom.input.removeAttribute('values');
        } else {
          this.dom.input.values = [this.settings.min, this.settings.max];
        }
      } else {
        if (!this.dom.input.value) {
          this.dom.input.value = this.settings.max;
        }
      }

      this._render();
    }
  }

  /**
   * Generate custom range slider markup.
   * @private
   */
  _render() {
    const o = this.settings;
    const c = o.classes;

    const container = this._createElement('div', c.container);
    const track = this._createElement('div', c.track);
    const progress = this._createElement('div', c.progress);

    let handle = this._createElement('div', c.handle);
    let tooltip = this._createElement('div', c.tooltip);

    const limitsContainer = this._createElement('div', c.limits);
    const limits = [this._createElement('div', c.limit), this._createElement('div', c.limit)];

    if (o.readonly) {
      container.classList.add(c.readonly);
    }
    if (o.multiple) {
      handle = [this._createElement('div', c.handle), this._createElement('div', c.handle)];
      tooltip = [
        this._createElement('div', c.tooltip),
        this._createElement('div', c.tooltip),
        this._createElement('div', c.tooltip)
      ];

      handle.forEach((node, i) => {
        node.index = i;
        node.tabIndex = 0;
        progress.appendChild(node);
        node.appendChild(tooltip[i]);
      });

      progress.appendChild(tooltip[2]);

      container.classList.add(c.multiple);
      this.dom.input.tabIndex = -1;

      handle[0].classList.add('rsh-min');
      handle[1].classList.add('rsh-max');

      if(o.thresholds){
        const lower = this._createElement('div', c.lower);
        track.appendChild(lower);
        this.dom.lower = lower;
        container.classList.add(c.thresholds);
      }
    } else {
      progress.appendChild(handle);
      handle.appendChild(tooltip);
    }

    track.appendChild(progress);

    limits[0].textContent = this.settings.min;
    limits[1].textContent = this.settings.max;

    if (this.settings.units) {
      const units = [
        this._createElement('div', c.units),
        this._createElement('div', c.units)
      ];
      units[0].textContent = this.settings.units;
      units[1].textContent = this.settings.units;
      limits[0].appendChild(units[0]);
      limits[1].appendChild(units[1]);
    }

    limits.forEach((node, i) => {
      limitsContainer.appendChild(limits[i]);
    });

    track.appendChild(limitsContainer);

    this.dom = { ...this.dom, container, track, progress, handle, tooltip };

    container.appendChild(track);

    if (o.size) {
      container.style['width'] = !isNaN(o.size) ? `${o.size}%` : o.size;
    }

    this.dom.input.parentNode.insertBefore(container, this.dom.input);

    if (this.dom.input.disabled){
      container.classList.add('disabled');
    }

    container.insertBefore(this.dom.input, track);
    this.dom.input.classList.add(c.input);
    if (!this.settings.readonly) {
      this._addEventListeners();
    }
    this.update();
  }

  /**
   * Reset range slider value.
   * @private
   */
  _reset() {

    /*
     * executes after the form has been reset
     * solution from https://stackoverflow.com/a/10319514/4634380
     */
    setTimeout(() => {
      this._setValue(this.dom.input.value);
    }, 0);
  }

  /**
   * Turn position of slider to value.
   * @private
   * @param {Event} evt - Field event.
   */
  _setValueFromPosition(evt) {
    const min = parseFloat(this.settings.min);
    const max = parseFloat(this.settings.max);
    const step = parseFloat(this.settings.step);
    const rect = this.rects;
    const axis = this.touch ? evt.touches[0]['clientX'] : evt['clientX'];
    const pos = axis - this.rects.container['left'];
    const size = rect.container['width'];

    // get the position of the cursor over the bar as a percentage

    const position = pos / size * 100;

    // work out the value from the position

    let value = position * (max - min) / 100 + min;

    // apply granularity (step)

    value = Math.ceil(value / step) * step;

    const index = this.activeHandle.index;

    /*
     * Only update the value if it's different. This allows the onChange event
     * to be fired only on a step and not all the time.
     */
    if (this.settings.multiple) {
      this._setValueMultiple(evt, value, index);
    } else {
      this._setValueSingle(evt, value, index);
    }

    this.dom.input.focus();
  }

  _setValueMultiple(evt, value, index) {
    if (index === 0) {
      value = Math.min(value, this.dom.input.values[1]);
    } else {
      value = Math.max(value, this.dom.input.values[0]);
    }

    if (evt.type === 'mousedown' ||
      (index === 0) && parseFloat(value) !== parseFloat(this.dom.input.values[1]) ||
      (index === 1) && parseFloat(value) !== parseFloat(this.dom.input.values[0]) ) {
      this._setValue(value, index);
    }
  }

  _setValueSingle(evt, value, index) {
    if (evt.type === 'mousedown' || parseFloat(value) !== parseFloat(this.dom.input.value)) {
      this._setValue(value, index);
    }
  }

  /**
   * Update single slider on change.
   * @private
   */
  _change() {
    if (!this.settings.multiple) {
      this.update();
    }
  }

  /**
   * Touch action.
   * @private
   * @param {Event} evt - Field event.
   */
  _touchStart(evt) {
    this._down(evt);
  }

  /**
   * Mousedown / touchstart action.
   * @private
   * @param {Event} evt - Field event.
   */
  _down(evt) {
    evt.preventDefault();

    // show the tip now so we can get the dimensions later

    this.dom.container.classList.add('dragging');
    this._recalculate();
    this.activeHandle = this._getHandle(evt);
    this.activeHandle.classList.add('active');
    this._setValueFromPosition(evt);

    if (this.touch) {
      document.addEventListener('touchmove', this.listeners.move, false);
      document.addEventListener('touchend', this.listeners.up, false);
      document.addEventListener('touchcancel', this.listeners.up, false);
    } else {
      document.addEventListener('mousemove', this.listeners.move, false);
      document.addEventListener('mouseup', this.listeners.up, false);
    }
  }

  /**
   * Mousemove / touchmove action.
   * @private
   * @param {Event} evt - Field event.
   */
  _move(evt) {
    this._setValueFromPosition(evt);
    this.dom.input.dispatchEvent(new Event('input'));
  }

  /**
   * Mouseup / touchend action.
   * @private
   */
  _up() {
    this.dom.container.classList.remove('dragging');

    this.activeHandle.classList.remove('active');
    this.activeHandle = false;

    document.removeEventListener('mousemove', this.listeners.move);
    document.removeEventListener('mouseup', this.listeners.up);
    document.removeEventListener('touchmove', this.listeners.move);
    document.removeEventListener('touchend', this.listeners.up);
    document.removeEventListener('touchcancel', this.listeners.up);

    this.dom.input.dispatchEvent(new Event('change'));
  }

  /**
   * Recache the dimensions.
   * @private
   */
  _recalculate() {
    let handle = [];

    if (this.settings.multiple) {
      this.dom.handle.forEach((node, i) => {
        handle[i] = node.getBoundingClientRect();
      });
    } else {
      handle = this.dom.handle.getBoundingClientRect();
    }

    this.rects = {
      handle: handle,
      container: this.dom.container.getBoundingClientRect()
    };
  }

  /**
   * Update range slider.
   * @public
   */
  update() {
    this._recalculate();

    this.accuracy = 0;

    // detect float

    if (this.dom.input.step.includes('.')) {
      this.accuracy = (this.dom.input.step.split('.')[1] || []).length;
    }

    if (this.settings.multiple) {
      this.dom.input.values.forEach((val, i) => {
        this._setValue(val, i);
      });
    } else {
      this._setValue();
    }
  }

  /**
   * Set new range slider value.
   * @private
   * @param {Number} value - new value.
   * @param {Number} index - slider index.
   */
  _setValue(value, index) {
    const nodes = this.dom;
    const min = parseFloat(this.settings.min);
    const max = parseFloat(this.settings.max);

    if (this.settings.multiple && index === undefined) {
      return false;
    }

    if (value === undefined) {
      value = this.dom.input.value;
    }

    value = parseFloat(value);

    value = value.toFixed(this.accuracy);

    if (value < min) {
      value = min.toFixed(this.accuracy);
    } else if (value > max) {
      value = max.toFixed(this.accuracy);
    }

    // update the value

    if (this.settings.multiple) {
      const values = this.dom.input.values;
      values[index] = value;

      // update the node so we can get the width / height

      nodes.tooltip[index].textContent = value;

      // check if tips are intersecting...

      const intersecting = this._tipsIntersecting();

      if (intersecting) {

        /*
         * Format the combined tooltip.
         * Only show single value if they both match, otherwise show both seperated by a hyphen
         */

        nodes.tooltip[2].textContent = values[0] === values[1] ? values[0] : `${values[0]} - ${values[1]}`;
      }

      // ... and set the className where appropriate

      nodes.container.classList.toggle('combined-tooltip', intersecting);
    } else {
      this.dom.input.value = value;
      nodes.tooltip.textContent = value;
    }

    // set bar size

    this._setPosition(value, index);

    this.onChange();
  }

  /**
   * Set the bar size / position based on the value.
   * @private
   */
  _setPosition() {
    let width;

    if (this.settings.multiple) {
      const start = this._getPosition(this.dom.input.values[0]);
      const end = this._getPosition(this.dom.input.values[1]);

      if(this.settings.thresholds) {
        this.dom.lower.style['width'] = `${start}%`;
      }
      // set the start point of the bar

      this.dom.progress.style['left'] = `${start}%`;

      width = end - start;
    } else {
      width = this._getPosition();
    }

    // set the end point of the bar

    this.dom.progress.style['width'] = `${width}%`;
  }

  /**
   * Calculate offset of slider value.
   * @private
   */
  _getOffset(){
    const trackWidth = this.dom.track.offsetWidth;
    const tooltip = this.dom.tooltip;

    if(!this.settings.multiple){
      const tooltipPadding = parseInt(window.getComputedStyle(tooltip, null).getPropertyValue('padding-left'), 10);

      const rightOffset = Math.round(trackWidth - (this._getPosition() + (tooltip.offsetWidth / 2) - tooltipPadding));
      const leftOffset = Math.round(this._getPosition() - ((tooltip.offsetWidth / 2) - tooltipPadding));

      this._setOffset(this.dom.tooltip, rightOffset, leftOffset);
    } else {

      const inpValues = this.dom.input.values;
      const rangeSize = this._getPosition(inpValues[1]) - this._getPosition(inpValues[0]);
      const tooltipPadding = parseInt(window.getComputedStyle(tooltip[2], null).getPropertyValue('padding-left'), 10);

      const rTrOffset = Math.round(trackWidth - (this._getPosition(inpValues[1]) +
                        (tooltip[1].offsetWidth / 2) - tooltipPadding));

      const lTrOffset = Math.round(this._getPosition(inpValues[0]) - ((tooltip[0].offsetWidth / 2) - tooltipPadding));

      this._setOffset([tooltip[0], tooltip[1]], rTrOffset, lTrOffset);


      const mdRightOffset = Math.round(trackWidth - (this._getPosition(inpValues[0]) +
                            ((tooltip[2].offsetWidth + rangeSize) / 2) - tooltipPadding));

      const mdLeftOffset = Math.round(this._getPosition(inpValues[1]) -
                           (((tooltip[2].offsetWidth + rangeSize) / 2) - tooltipPadding));

      this._setOffset(tooltip[2], mdRightOffset, mdLeftOffset);
    }
  }

  /**
   * Set the offset to element.
   * @private
   * @param {HTMLElement} target - handle element.
   * @param {Number} rightOffset - offset from right.
   * @param {Number} leftOffset - offset from left.
   */
  _setOffset(target, rightOffset, leftOffset){
    const isArray = target instanceof Array;
    const left = isArray ? target[0] : target;
    const right = isArray ? target[1] : target;

    if (rightOffset < 0 || leftOffset < 0){
      if (rightOffset < 0){
        right.style['margin-right'] = Math.abs(rightOffset) + 'px';
      }

      if (leftOffset < 0){
        left.style['margin-right'] = '-' + Math.abs(leftOffset) + 'px';
      }
    } else {
      right.style['margin-right'] = 0;
      left.style['margin-right'] = 0;
    }
  }

  /**
   * Get the position of handle from the value.
   * @private
   * @param {Number} value - current input value.
   * @return {Number} - position of handle element.
   */
  _getPosition(value = this.dom.input.value) {
    const min = parseFloat(this.settings.min);
    const max = parseFloat(this.settings.max);

    return ((value - min) / (max - min)) * 100;
  }

  /**
   * Check whether the tooltips are colliding.
   * @private
   * @return {Boolean} - Tips intersecting or not.
   */
  _tipsIntersecting() {
    const nodes = this.dom.tooltip;
    const a = nodes[0].getBoundingClientRect();
    const b = nodes[1].getBoundingClientRect();

    return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
  }

  /**
   * Get the correct handle on mousedown / touchstart.
   * @private
   * @param {Event} evt - Field event.
   */
  _getHandle(evt) {
    if (!this.settings.multiple) {
      return this.dom.handle;
    }

    const r = this.rects;
    const distA = Math.abs(evt['clientX'] - r.handle[0]['left']);
    const distB = Math.abs(evt['clientX'] - (r.handle[1]['left'] + 2));
    const handle = evt.target.closest(`.${this.settings.classes.handle}`);

    if (handle) {
      return handle;
    } else {
      if (distA > distB) {
        return this.dom.handle[1];
      } else {
        return this.dom.handle[0];
      }
    }
  }

  /**
   * Destroy range slider and associated events.
   * @public
   */
  destroy() {
    if (this.dom.input.ranger) {

      // remove all event listeners

      this._removeEventListeners();

      // remove the className from the input

      this.dom.input.classList.remove(this.settings.classes.input);

      // kill all nodes

      this.dom.container.parentNode.replaceChild(this.dom.input, this.dom.container);

      // remove the reference from the input

      delete (this.dom.input.ranger);
    }
  }

  /**
   * Callback on change.
   * @public
   */
  onInit() {
    if (this._isFunction(this.settings.onInit)) {
      this.settings.onInit.call(this, this.dom.input.value);
    }
  }

  /**
   * Callback on change.
   * @public
   */
  onChange() {
    if (this._isFunction(this.settings.onChange)) {
      this.settings.onChange.call(this, this.dom.input.value);
    }

    this._getOffset();
  }

  /**
   * Callback on end.
   *_onEnd() {
   * if (this._isFunction(this.settings.onEnd)) {
   *  this.settings.onEnd.call(this, this.dom.input.value);
   * }
   *}
   */


  /**
   * Slider keyboard actions
   * @param {Event} evt - Field event
   * @private
   */
  _keyActions(evt) {
    if (document.activeElement === this.dom.input){
      if (!this.settings.multiple) {
        this.update();
      }
    } else {

      const currMin = parseInt(this.dom.input.values[0], 10);
      const currMax = parseInt(this.dom.input.values[1], 10);

      if (document.activeElement.classList.contains('rsh-min')){
        this._handleMin(currMin, currMax, evt);
        this.update();
      }

      if (document.activeElement.classList.contains('rsh-max')){
        this._handleMax(currMin, currMax, evt);
        this.update();
      }

    }
  }

  _handleMin(currMin, currMax, evt) {
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowUp'){
      if (currMin < currMax){
        this.dom.input.values[0] = currMin + this.settings.step;
      }
    }

    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown'){
      if (currMin >= this.settings.min){
        this.dom.input.values[0] = currMin - this.settings.step;
      }
    }
  }

  _handleMax(currMin, currMax, evt) {
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowUp'){
      if (currMax <= this.settings.max){
        this.dom.input.values[1] = currMax + this.settings.step;
      }
    }

    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown'){
      if (currMax > currMin){
        this.dom.input.values[1] = currMax - this.settings.step;
      }
    }
  }

  /**
   * Add event listeners.
   * @private
   */
  _addEventListeners() {
    // throttle the scroll callback for performance

    document.addEventListener('scroll', this.listeners.scroll, false);

    if (this.settings.multiple){
      this.dom.handle.forEach((node) => {
        node.addEventListener('keydown', this.listeners.keyDown, false);
        node.addEventListener('keyup', this.listeners.keyUp, false);
      });
    } else {
      this.dom.input.addEventListener('keyup', this.listeners.keyUp, false);
    }

    // throttle the resize callback for performance

    window.addEventListener('resize', this.listeners.resize, false);

    // detect native change event

    this.dom.input.addEventListener('change', this.listeners.change, false);

    if (this.touch) {
      this.dom.container.addEventListener('touchstart', this.listeners.touchstart, false);
    } else {
      this.dom.container.addEventListener('mousedown', this.listeners.down);
    }

    // detect form reset

    if (this.dom.input.form) {
      this.dom.input.form.addEventListener('reset', this.listeners.reset, false);
    }
  }

  /**
   * Remove event listeners.
   * @private
   */
  _removeEventListeners() {

    if (this.touch) {
      this.dom.container.removeEventListener('touchstart', this.listeners.touchstart);
    } else {
      this.dom.container.removeEventListener('mousedown', this.listeners.down);
    }

    if (this.settings.multiple){
      this.dom.handle.forEach((node) => {
        node.removeEventListener('keyup', this.listeners.keyUp, false);
      });
    } else {
      this.dom.input.removeEventListener('keyup', this.listeners.keyUp, false);
    }
    // remove scroll listener

    document.removeEventListener('scroll', this.listeners.scroll);

    // remove resize listener

    window.removeEventListener('resize', this.listeners.resize);

    // remove input listener

    this.dom.input.removeEventListener('change', this.listeners.change);

    // remove form listener

    if (this.dom.input.form) {
      this.dom.input.form.removeEventListener('reset', this.listeners.reset);
    }

    this.listeners = null;
  }

  /**
   * Create DOM element helper.
   * @private
   * @param {String} type - html element type.
   * @param {Object} obj - object.
   * @return {HTMLElement} el - element helper.
   */
  _createElement(type, obj) {
    const el = document.createElement(type);

    if (typeof obj === 'string') {
      el.classList.add(obj);
    } else if (obj === Object(obj)) {
      for (const prop in obj) {
        if (prop in el) {
          el[prop] = obj[prop];
        } else {
          el.setAttribute(el[prop], obj[prop]);
        }
      }
    }

    return el;
  }

  /**
   * Check if function is really a function.
   * @private
   * @param {Function} func - function.
   * @return {Boolean} - true or false.
   */

  _isFunction(func) {
    return func && typeof func === 'function';
  }

  /**
   * Enhance slider performance.
   * @private
   * @param {Function} fn - function.
   * @param {Number} limit - limit.
   * @param {Object} context - object context.
   */
  _throttle(fn, limit, context) {
    let wait;

    return function () {

      context = context || this;

      if (!wait) {
        fn.apply(context, arguments);
        wait = true;

        return setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  }
}

var style$d = ":host {\n  display: inline-block;\n  width: 100%;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica', 'sans-serif');\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n/* Styles adopting from EDS RangeSlider */\n\n* {\n  box-sizing: border-box;\n}\n\n.ranger-container {\n  cursor: pointer;\n  font-size: 12px;\n  margin: 24px 0 16px;\n  display: inline-block;\n  width: 100%;\n}\n\n.ranger-container:first-child {\n  margin: 16px 0;\n}\n\n.ranger-container.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: default;\n}\n\n.ranger-multiple .ranger-handle:nth-child(1) {\n  left: -5px;\n}\n\n.ranger-multiple .ranger-handle:nth-child(2) {\n  right: -5px;\n}\n\n.ranger-container .ranger-input:focus + .ranger-track .ranger-handle {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n\n.ranger-input:focus + .ranger-track .ranger-handle.rsh-min,\n.ranger-input:focus + .ranger-track .ranger-handle.rsh-max {\n  outline: none;\n}\n\n.ranger-handle:active,\n.ranger-handle:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: 1px;\n}\n\n.ranger-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  width: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  border: 0 none;\n}\n\n.ranger-track {\n  width: 100%;\n  position: relative;\n}\n\n.ranger-track::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 100%;\n  background: var(--rs-background, #d4d4d4);\n}\n\n.ranger-lower {\n  height: 4px;\n  position: absolute;\n}\n\n.ranger-progress {\n  height: 4px;\n  width: 100%;\n  background: var(--rs-elements-background, #242424);\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform-origin: 0 0 0;\n  transition: background ease 0.2s;\n}\n\n.ranger-container:hover .ranger-handle,\n.ranger-container:hover .ranger-progress {\n  background: var(--rs-active-background, #0084f0);\n}\n\n.ranger-track .range-limits {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  top: 10px;\n  pointer-events: none;\n}\n\n.ranger-track .range-limit {\n  color: var(--rs-text-color, #6a6a6a);\n}\n\n.ranger-handle {\n  box-sizing: border-box;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: var(--rs-elements-background, #242424);\n  position: absolute;\n  top: -4px;\n  right: -5px;\n  transition: background ease 0.2s;\n}\n\n.ranger-handle.active {\n  z-index: 10;\n}\n\n.ranger-tooltip {\n  opacity: 0;\n  position: absolute;\n  bottom: calc(100% + 2px);\n  right: 50%;\n  transform: translate3d(50%, 0, 0);\n  padding: 0 7px;\n  color: var(--rs-tooltip-color, #242424);\n  pointer-events: none;\n  text-align: center;\n}\n\n.ranger-progress > .ranger-tooltip {\n  top: auto;\n  bottom: calc(100% + 6px);\n  white-space: nowrap;\n}\n\n.ranger-handle .ranger-tooltip {\n  opacity: 1;\n}\n\n.ranger-container.combined-tooltip.dragging .ranger-progress > .ranger-tooltip {\n  display: block;\n}\n\n.ranger-container.combined-tooltip .ranger-tooltip {\n  opacity: 1;\n}\n\n.ranger-container.combined-tooltip .ranger-handle .ranger-tooltip {\n  opacity: 0;\n}\n\n.ranger-container.ranger-thresholds .ranger-progress {\n  background: var(--yellow-33, #a08209);\n}\n\n.ranger-container.ranger-thresholds .ranger-lower {\n  background: var(--red-46, #ed0e00);\n}\n\n.ranger-container.ranger-thresholds .ranger-track::before {\n  background: var(--green-40, #329864);\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class CustomRangeSlider extends RangeSlider {
  constructor(element, documentRoot) {
    super(element);
    this.documentRoot = documentRoot;
  }

  /**
   * Override EDS RangeSlider#_keyActions to check against the correct active element.
   */
  _keyActions(evt) {
    const { activeElement } = this.documentRoot;
    if (!this.settings.multiple) {
      this.update();
    } else {
      const currMin = parseInt(this.dom.input.values[0], 10);
      const currMax = parseInt(this.dom.input.values[1], 10);

      if (activeElement.classList.contains('rsh-min')) {
        if (evt.key === 'ArrowRight' || evt.key === 'ArrowUp') {
          if (currMin < currMax) {
            this.dom.input.values[0] = currMin + this.settings.step;
            this.update();
          }
        }

        if (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown') {
          if (currMin >= this.settings.min) {
            this.dom.input.values[0] = currMin - this.settings.step;
            this.update();
          }
        }
      }

      if (activeElement.classList.contains('rsh-max')) {
        if (evt.key === 'ArrowRight' || evt.key === 'ArrowUp') {
          if (currMax <= this.settings.max) {
            this.dom.input.values[1] = currMax + this.settings.step;
            this.update();
          }
        }

        if (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown') {
          if (currMax > currMin) {
            this.dom.input.values[1] = currMax - this.settings.step;
            this.update();
          }
        }
      }
    }
    this.dom.input.dispatchEvent(new Event('change'));
  }
}

/**
 * @property {number} from - start of the number range
 * @property {number} to - end of the number range
 * @property {number} step - step value to move the slider
 * @property {number} value - initial value of the slider
 * @property {boolean} multiple - type of the slider
 * @property {array} values - min and max values for multiple range slider
 * @property {boolean} disabled - disable slider
 */
class Slider extends Accessibility$1(LitComponent) {
  setInitialFocus() {
    if (this.multiple) {
      this.shadowRoot.querySelector('.ranger-handle').focus();
    } else {
      this.shadowRoot.querySelector('input[type=range]').focus();
    }
  }

  /**
   * @function didChangeProps
   * @description lifecycle hook trigger when component receives a new prop.
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    if (changedProps.has('value') || changedProps.has('values')) {
      if (this.multiple) {
        this.edsSlider.dom.input.values = this.values.split(',');
      } else {
        this.edsSlider.dom.input.value = this.value;
      }

      this.edsSlider.update();
    }
  }

  /**
   * If min, max, step, type changed, need to re-generate EDS slider inside didRender
   * since its settings are collected inside the constructor.
   */
  didRender(changedProps) {
    if (
      changedProps.has('from') ||
      changedProps.has('to') ||
      changedProps.has('step') ||
      changedProps.has('multiple') ||
      changedProps.has('disabled') ||
      changedProps.has('thresholds')
    ) {
      if (changedProps.has('multiple')) {
        if (this.multiple) {
          this.values = this.values || [this.from, this.to].join(',');
        } else {
          this.values = null;
        }
      } else {
        this.edsSlider.destroy();
      }

      this.edsSlider = new CustomRangeSlider(
        this.shadowRoot.querySelector('input[type=range]'),
        this.shadowRoot,
      );
      this.edsSlider.init();
    }
  }

  /**
   * Lifecycle hook
   * Initialize EDS RangeSlider
   *
   * @method didUpgrade
   *
   * @private
   */
  didUpgrade() {
    if (!this.edsSlider) {
      this.edsSlider = new CustomRangeSlider(
        this.shadowRoot.querySelector('input[type=range]'),
        this.shadowRoot,
      );

      // Need to update slider when size changed
      this.observer = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          this.edsSlider.update();
        });
      });
      this.observer.observe(this.edsSlider.dom.container);

      // Disable component's right click event
      this.addEventListener('contextmenu', event => {
        event.preventDefault();
      });

      this.edsSlider.init();
    }
  }

  /**
   * Lifecycle hook didDisconnect for cleaning observer
   *
   * @method didDisconnect
   */
  didDisconnect() {
    if (this.observer) {
      this.observer.unobserve(this.edsSlider.dom.container);
    }
  }

  /**
   * Event handler for slider
   * Bubbles component standard customized input/change event
   */
  handleEvent(event) {
    const { type: eventType } = event;

    if (eventType === 'input' || eventType === 'change') {
      event.stopPropagation();
      if (this.multiple) {
        this.values = event.target.values;
      } else {
        this.value = event.target.value;
      }

      const eventValue = this.multiple
        ? { values: this.values }
        : { value: this.value };
      this.bubble(eventType, eventValue);
    }
  }

  /**
   * Render the range input anchor for slider
   */
  render() {
    return this.multiple
      ? $`<input
          type="range"
          class="range ${this.thresholds ? 'thresholds' : ''}"
          step=${this.step}
          min=${this.from}
          max=${this.to}
          ?disabled=${this.disabled}
          ?multiple=${this.multiple}
          values=${l(this.values)}
          @input=${this}
          @change=${this}
        />`
      : $`
          <input
            type="range"
            class="range"
            step=${this.step}
            min=${this.from}
            max=${this.to}
            ?disabled=${this.disabled}
            value=${this.value}
            @input=${this}
            @change=${this}
          />
        `;
  }
}

definition('eui-slider', {
  style: style$d,
  props: {
    from: { attribute: true, type: Number, default: 0 },
    to: { attribute: true, type: Number, default: 100 },
    step: { attribute: true, type: Number, default: 1 },
    value: { attribute: true, type: Number, default: 0 },
    multiple: { attribute: true, type: Boolean },
    values: { attribute: true, type: String },
    disabled: { attribute: true, type: Boolean },
    thresholds: { attribute: true, type: Boolean },
  },
})(Slider);

/**
 * @file Module to create Spinner component.
 */

/**
 * Class representing a spinner.
 */
let Spinner$1 = class Spinner {

  /**
   * Setup spinner properties.
   * @param {HTMLElement} element - The DOM element of spinner.
   */
  constructor(element) {
    this.dom = {
      spinner: element,
      controls: element.querySelectorAll('.controls > .icon'),
      max: element.querySelector('input').getAttribute('max') || Number.MAX_VALUE,
      min: element.querySelector('input').getAttribute('min') || -Number.MAX_VALUE,
      step: element.querySelector('input').getAttribute('step') || 1,
      input: element.querySelector('input')
    };

    this.type = element.dataset.type;

    this.listeners = {
      increaseValue: () => this._increaseValue(),
      decreaseValue: () => this._decreaseValue(),
      setCorrectFormat: () => this._setCorrectFormat(),
      controlsKeyDown: (evt) => this._keyActions(evt)
    };
  }

  /**
   * Initialize spinner.
   * @public
   */
  init() {
    this._setCorrectFormat();
    this._addEventListeners();
  }

  /**
   * Destroy spinner and associated events.
   * @public
   */
  destroy() {
    this._removeEventListeners();
  }

  /**
   * Add event listeners.
   * @private
   */
  _addEventListeners() {
    this.dom.controls[1].addEventListener('click', this.listeners.increaseValue);
    this.dom.controls[0].addEventListener('click', this.listeners.decreaseValue);
    this.dom.input.addEventListener('change', this.listeners.setCorrectFormat);
    // this.dom.input.addEventListener('keyup', this.listeners.setCorrectFormat);
    this.dom.controls[0].addEventListener('keydown', this.listeners.controlsKeyDown);
    this.dom.controls[1].addEventListener('keydown', this.listeners.controlsKeyDown);
  }

  /**
   * Remove event listeners.
   * @private
   */
  _removeEventListeners() {
    this.dom.controls[1].removeEventListener('click', this.listeners.increaseValue);
    this.dom.controls[0].removeEventListener('click', this.listeners.decreaseValue);
    this.dom.input.removeEventListener('change', this.listeners.setCorrectFormat);
    // this.dom.input.removeEventListener('keyup', this.listeners.setCorrectFormat);
    this.dom.controls[0].removeEventListener('keydown', this.listeners.controlsKeyDown);
    this.dom.controls[1].removeEventListener('keydown', this.listeners.controlsKeyDown);
  }

  /**
   * Set correct state.
   * @private
   */
  _setCorrectState() {
    const input = this.dom.spinner.querySelector('input');

    this.dom.controls[0].classList.remove('disabled');
    this.dom.controls[1].classList.remove('disabled');

    if (
      this.dom.max !== Number.MAX_VALUE
      && parseInt(input.value, 10) === parseInt(this.dom.max, 10)) {
      this.dom.controls[1].classList.add('disabled');
    }

    if (
      this.dom.min !== -Number.MAX_VALUE
      && parseInt(input.value, 10) === parseInt(this.dom.min, 10)) {
      this.dom.controls[0].classList.add('disabled');
    }
  }

  /**
   * Set correct format.
   * @private
   */
  _setCorrectFormat() {
    const input = this.dom.spinner.querySelector('input');

    if (!isNaN(parseInt(input.value, 10))) {
      if (parseInt(input.value, 10) > this.dom.max) {
        input.value = this.dom.max;
        this.dom.input.dispatchEvent(new Event('change'));
      }
      if (parseInt(input.value, 10) < this.dom.min) {
        input.value = this.dom.min;
        this.dom.input.dispatchEvent(new Event('change'));
      }
    } else {
      // not a number
      input.value = this.dom.min;
      this.dom.input.dispatchEvent(new Event('change'));
    }

    this._setCorrectState();
  }

  /**
   * Increase value.
   * @private
   */
  _increaseValue() {
    const input = this.dom.spinner.querySelector('input');
    if (parseInt(input.value, 10) < this.dom.max) {
      input.value = parseInt(input.value, 10) + parseInt(this.dom.step, 10);
    }

    this._setCorrectFormat();

    this.dom.input.dispatchEvent(new Event('change'));
  }

  /**
   * Decrease value.
   * @private
   */
  _decreaseValue() {
    const input = this.dom.spinner.querySelector('input');
    if (parseInt(input.value, 10) > this.dom.min) {
      input.value = parseInt(input.value, 10) - parseInt(this.dom.step, 10);
    }

    this._setCorrectFormat();

    this.dom.input.dispatchEvent(new Event('change'));
  }

  /**
   * Key actions for controls
   * @private
   * @param {Event} evt - element event
   */

  _keyActions(evt) {
    if (evt.key === ' '){
      evt.preventDefault();

      const control = evt.target;

      if (control.classList.contains('icon-chevron-down')){
        this._decreaseValue();
      } else if (control.classList.contains('icon-chevron-up')){
        this._increaseValue();
      }
    }
  }

  /**
   * Enable input and controls
   * @private
   */
  enable(){
    const input =  this.dom.input;

    input.disabled = false;

    Array.from(this.dom.controls).forEach((control) => {
      control.classList.remove('disabled');
      control.tabIndex = 0;
    });
  }

  /**
   * Disable input and controls
   * @private
   */
  disable(){
    const input =  this.dom.input;

    input.disabled = true;

    Array.from(this.dom.controls).forEach((control) => {
      control.classList.add('disabled');
      control.tabIndex = -1;
    });
  }
};

var style$e = ":host {\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n:host([numberinput]) .controls {\n  display: none;\n}\n\n:host([disabled]) {\n  pointer-events: none;\n}\n\n:host([disabled]) input,\n:host([disabled]) .button {\n  opacity: 0.6;\n}\n\n.spinner {\n  user-select: none;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\ninput {\n  flex: auto;\n  width: 64px;\n  line-height: 1.5;\n  padding: 5px 7px 4px;\n  border: 1px solid var(--spinner-input-border, #878787);\n  color: var(--spinner-text, #242424);\n  font-size: 14px;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  font-weight: 400;\n  background: var(--spinner-input-background, #fff);\n  outline: 0;\n  -moz-appearance: textfield;\n}\n\ninput[type='number']::placeholder {\n  color: var(--spinner-placeholder, #6a6a6a);\n}\n\ninput[type='number']:focus:not(:disabled):not([disabled]):not(:read-only):not(\n    [readonly]\n  ) {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: -2px;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.controls {\n  margin-left: 8px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.button.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.button + .button {\n  margin-left: var(--space-small, 4px);\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
/* eslint-disable lit-a11y/tabindex-no-positive */

class CustomSpinner extends Spinner$1 {
  constructor(element) {
    super(element);
    this.dom.controls = element.querySelectorAll('.controls > eui-button');
  }

  /**
   * Wrapper around EDSpinner#_increaseValue, to raise extra change event
   */
  _increaseValue() {
    super._increaseValue();
    this.dom.input.dispatchEvent(new Event('change'));
  }

  /**
   * Wrapper around EDSpinner#_decreaseValue, to raise extra change event
   */
  _decreaseValue() {
    super._decreaseValue();
    this.dom.input.dispatchEvent(new Event('change'));
  }

  /**
   * There is a bug inside EDS spinner for regarding parseInt overflow in this function
   * Bug has been raised to EDS, can be deleted when it's fixed from.
   */
  _setCorrectState() {
    const input = this.dom.spinner.querySelector('input');

    this.dom.controls[0].classList.remove('disabled');
    this.dom.controls[1].classList.remove('disabled');

    if (parseFloat(input.value) === parseFloat(this.dom.max)) {
      this.dom.controls[1].classList.add('disabled');
    }

    if (parseFloat(input.value) === parseFloat(this.dom.min)) {
      this.dom.controls[0].classList.add('disabled');
    }
  }
}

/**
 * @property {Number} max - number to set as a max value of input
 * @property {Number} min - number to set as a min value of input
 * @property {Number} step - number to set the step of input changing
 * @property {Number} value - number to set as a initial value of input
 * @property {Boolean} numberInput - true/false to enable/disable number input component behavior
 * @property {Boolean} disabled - true/false to disable/enable spinner
 */
class Spinner extends Accessibility$1(LitComponent) {
  static get components() {
    return {
      'eui-button': Button,
    };
  }

  /**
   * Connect to the .spinner element and set it as the EDS CustomSpinner.
   */
  didUpgrade() {
    if (!this.spinner) {
      const spinnerContainer = this.shadowRoot.querySelector('.spinner');
      this.spinner = new CustomSpinner(spinnerContainer);
      this.spinner.init();
    }
  }

  /**
   * Returns focusable element in the ShadowDOM
   */
  get focusableElement() {
    return this.shadowRoot.querySelector('input[type="number"]');
  }

  /**
   * Sets focus on element in the ShadowDOM
   */
  setInitialFocus() {
    this.focusableElement.focus();
  }

  /**
   * Sets value in between max and min value
   * @param {number} newValue Value you want to parse
   * @param {number} min Min value
   * @param {number} max Max value
   */
  _sanitizeValue(newValue, min, max) {
    const parsedNewValue = parseInt(newValue, 10);
    if (Number.isNaN(parsedNewValue)) {
      return this._sanitizeValue(0, min, max);
    }

    if (min !== null && parsedNewValue < min) {
      return min;
    }

    if (max !== null && parsedNewValue > max) {
      return max;
    }

    return parsedNewValue;
  }

  /**
   * Event handler for events from input control
   * Bubbles component standard customized change event
   */
  handleEvent(event) {
    if (event.type === 'change') {
      event.stopPropagation();
      const sanitizedValue = this._sanitizeValue(
        event.target.value,
        this.min,
        this.max,
      );
      if (this.value !== sanitizedValue) {
        this.value = sanitizedValue;
        this.bubble('change', { value: this.value });
      }
    }
  }

  /**
   * Lifecycle hook triggers when prop was changed
   *
   * @method didChangeProps
   *
   */
  didChangeProps(changedProps) {
    super.didChangeProps(changedProps);
    const valueChanged = changedProps.has('value');
    const minChanged = changedProps.has('min');
    const maxChanged = changedProps.has('max');

    if (valueChanged || minChanged || maxChanged) {
      this.value = this._sanitizeValue(this.value, this.min, this.max);
      this.spinner.dom.input.value = this.value;

      if (minChanged) {
        if (this.min === null) {
          this.spinner.dom.min = Number.NEGATIVE_INFINITY;
        } else {
          this.spinner.dom.min = this.min;
        }
      }

      if (maxChanged) {
        if (this.max === null) {
          this.spinner.dom.max = Number.POSITIVE_INFINITY;
        } else {
          this.spinner.dom.max = this.max;
        }
      }

      this.spinner._setCorrectState();
    }

    if (changedProps.has('step')) {
      this.spinner.dom.step = this.step;
    }
  }

  /**
   * Render the basic structure hook for EDS spinner component
   */
  render() {
    return $`
      <div class="spinner">
        <input
          type="number"
          value="${this.value}"
          max=${l$1(this.max)}
          min=${l$1(this.min)}
          step="${this.step}"
          @change=${this}
          ?disabled=${this.disabled}
        />
        <div class="controls">
          <eui-button
            class="button icon-chevron-down"
            icon="chevron-down"
            ?disabled=${this.disabled}
          ></eui-button>
          <eui-button
            class="button icon-chevron-up"
            icon="chevron-up"
            ?disabled=${this.disabled}
          ></eui-button>
        </div>
      </div>
    `;
  }
}

definition('eui-spinner', {
  style: style$e,
  props: {
    max: { attribute: true, type: Number },
    min: { attribute: true, type: Number },
    step: { attribute: true, type: Number, default: 1 },
    value: { attribute: true, type: Number, default: 0 },
    numberinput: { attribute: true, type: Boolean, default: false },
    disabled: { attribute: true, type: Boolean, default: false },
  },
})(Spinner);

var style$f = ":host {\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.tag {\n  font-weight: 400;\n  display: inline-flex;\n  color: var(--tag-text, #4e4e4e);\n  background: var(--tag-background, #ebebeb);\n  border: 1px solid var(--tag-border, #878787);\n  border-radius: 3px;\n  font-size: 12px;\n  min-height: 14px;\n  padding: 0px var(--space-base, 8px);\n}\n\n:host([size='large']) .tag {\n  border-radius: 7px;\n  font-size: 14px;\n  min-height: 17px;\n  padding: 3px var(--space-base, 8px) 2px;\n}\n\n.blue {\n  background-color: var(--tag-blue, #e9f0f9);\n  border-color: var(--tag-blue-border, #0069c2);\n  color: var(--tag-blue-text, #0069c2);\n}\n\n.red {\n  background-color: var(--tag-red, #f9e2e1);\n  border-color: var(--tag-red-border, #bb0b02);\n  color: var(--tag-red-text, #bb0b02);\n}\n\n.green {\n  background-color: var(--tag-green, #e6f1eb);\n  border-color: var(--tag-green-border, #297a50);\n  color: var(--tag-green-text, #297a50);\n}\n\n.purple {\n  background-color: var(--tag-purple, #f2ecf5);\n  border-color: var(--tag-purple-border, #8e45b0);\n  color: var(--tag-purple-text, #8e45b0);\n}\n\n.orange {\n  background-color: var(--tag-orange, #f7ebe3);\n  border-color: var(--tag-orange-border, #d46617);\n  color: var(--tag-orange-text, #983f14);\n}\n\n.yellow {\n  background-color: var(--tag-yellow, #fdfad3);\n  border-color: var(--tag-yellow-border, #dcaf00);\n  color: var(--tag-yellow-text, #846a06);\n}\n\n.tag eui-icon {\n  vertical-align: middle;\n  margin-right: var(--space-small, 4px);\n  padding-top: 1px;\n  --icon-size: 12px;\n}\n\n:host([size='large']) .tag eui-icon {\n  --icon-size: 16px;\n}\n\n.severity-critical eui-icon[name='severity-critical'] {\n  color: var(--red, #ed0e00);\n  --icon-color: var(--red, #ed0e00);\n}\n\n.severity-major eui-icon[name='severity-major'] {\n  color: var(--orange, #d46617);\n  --icon-color: var(--orange, #d46617);\n}\n\n.severity-minor eui-icon[name='severity-minor'] {\n  color: var(--yellow, #a08209);\n  --icon-color: var(--yellow, #a08209);\n}\n\n.severity-warning eui-icon[name='severity-warning'] {\n  color: var(--blue, #1174e6);\n  --icon-color: var(--blue, #1174e6);\n}\n\n.severity-indeterminate eui-icon[name='severity-indeterminate'] {\n  color: var(--gray, #878787);\n  --icon-color: var(--gray, #878787);\n}\n\n.severity-cleared eui-icon[name='severity-cleared'] {\n  color: var(--green, #329864);\n  --icon-color: var(--green, #329864);\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {String} color -  name of the background color of the tag
 * @property {String} icon - name of the icon to display in the tag
 * @property {String} severity -  name of the severity icon to display in the tag
 * @property {String} size - sets the size of the tag
 */

class Tag extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  /**
   * _isIcon determines if there is an icon added to the tag.
   *
   * @function _isIcon
   * @private
   */
  _isIcon = () => this.icon && this.icon.length > 0;

  /**
   * _isSeverity determines if the tag needs to display a severity icon.
   *
   * @function _isSeverity
   * @private
   */
  _isSeverity = () => this.severity && this.severity.length > 0;

  /**
   * _getSeverityIcon renders the markup for the severity icon if it is added to the tag
   *
   * @function _getSeverityIcon
   * @private
   */
  _getSeverityIcon = () => {
    if (this._isSeverity()) {
      return $`<eui-icon name=${`severity-${this.severity}`}></eui-icon>`;
    }
    return null;
  };

  /**
   * _getStandardIcon renders the markup for the generic icon if it is added to the tag
   *
   * @function _getStandardIcon
   * @private
   */
  _getStandardIcon = () => {
    if (this._isIcon()) {
      return $`<eui-icon name=${this.icon}></eui-icon>`;
    }
    return null;
  };

  /**
   * Get styles for root element
   *
   * @function _getStyles
   * @private
   */
  _getStyles = () => {
    const tagSeverity = this.severity ? `severity-${this.severity}` : '';
    const tagSize = this.size === 'large' ? 'large' : 'small';
    const tagColor = this.color ? `${this.color}` : '';
    return `tag ${tagSize} ${tagColor} ${tagSeverity}`;
  };

  /**
   * Renders the tag component. This function is called each time a
   * prop changes.
   *
   * @method render
   */
  render() {
    return $`
      <span class="${this._getStyles()}">
        ${this._getSeverityIcon()} ${this._getStandardIcon()}
        <slot></slot>
      </span>
    `;
  }
}
definition('eui-tag', {
  style: style$f,
  props: {
    color: { attribute: true, type: String },
    icon: { attribute: true, type: String },
    severity: { attribute: true, type: String },
    size: { attribute: true, type: String },
  },
})(Tag);

var style$g = ":host {\n  display: block;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host(.tree--navigation) .tree__item__span {\n  padding: 12px 0 12px var(--tree-item-left-padding, 0);\n}\n\n.tree__item__default__slot {\n  display: block;\n  flex: auto;\n}\n\n.tree__item__ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  opacity: 1;\n}\n\n.tree__item__span {\n  padding: 6px 0 6px var(--tree-item-left-padding, 0);\n  display: flex;\n  align-items: center;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n}\n\n.tree__item__span--navigation {\n  padding: 12px 0 12px var(--tree-item-left-padding, 0);\n}\n\n.tree__item__span:hover {\n  background: var(--tree-hover, #dcdcdc);\n  cursor: pointer;\n}\n\n.tree__item__span__branch--closed ~ .tree__item__ul {\n  height: 0;\n  opacity: 0;\n  visibility: collapse;\n  padding-bottom: 0;\n  display: none;\n}\n\n.tree__item__span__branch--open .icon,\n.tree__item__span__branch--closed .icon {\n  visibility: visible;\n}\n\n.icon {\n  flex: none;\n  padding-left: 9px;\n  margin-right: 6px;\n  color: var(--text, #242424);\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.tree__item__span__leaf--active,\n.tree__item__span__leaf--active:hover {\n  background: var(--blue, #1174e6);\n  color: var(--white, #fff);\n}\n\n/* branches */\n:host([active-child]:not([open])) .tree__item,\n.tree__item__span__branch--closed.tree__item__span__branch--active-child:hover {\n  box-shadow: inset 6px 0 var(--blue, #1174e6);\n  background-color: var(--table-hover, #dcdcdc);\n}\n\n.tree__item__span__branch--open.tree__item__span__branch--active-child,\n.tree__item__span__branch--open.tree__item__span__branch--active-child:hover {\n  font-weight: 700;\n}\n\n.tree__item__span__branch--closed.tree__item__span__branch--active,\n.tree__item__span__branch--closed.tree__item__span__branch--active:hover {\n  background: var(--blue, #1174e6);\n  color: var(--white, #fff);\n}\n\n.tree__item__span__branch--closed.tree__item__span__branch--active .icon,\n.tree__item__span__branch--closed.tree__item__span__branch--active:hover .icon {\n  --icon-color: var(--white, #fff);\n}\n\n.tree__item__span__branch--closed.tree__item__span__branch--active::before {\n  color: var(--white, #fff);\n}\n\n.tree__item__span__branch--open.tree__item__span__branch--active,\n.tree__item__span__branch--open.tree__item__span__branch--active:hover {\n  background: var(--blue, #1174e6);\n  color: var(--white, #fff);\n}\n\n.tree__item__span__branch--open.tree__item__span__branch--active .icon,\n.tree__item__span__branch--open.tree__item__span__branch--active:hover .icon {\n  --icon-color: var(--white, #fff);\n}\n\n.tree__item__span__branch--open.tree__item__span__branch--active::before {\n  color: var(--white, #fff);\n}\n\n.tree__item__span .icon.right-align {\n  float: right;\n}\n\n.tree__item__span .icon.right-align::before {\n  vertical-align: inherit;\n  margin-left: 8px;\n}\n\n.tree__item__span .icon::before {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n.tree__item__span .icon ~ .tree__item__span {\n  padding-left: 12px;\n}\n\n/* Firefox specific CSS - not needed if the below 'focus' rule is kept */\n@-moz-document url-prefix() {\n  span.tree__item__span:focus {\n    outline: 2px solid var(--purple, #a56ebe);\n    outline-offset: -2px;\n  }\n}\n\n/* Adding this 'focus' rule for safari */\nspan.tree__item__span:focus,\nspan.tree__item__span:focus-visible {\n  outline: 2px solid var(--purple, #a56ebe);\n  outline-offset: -2px;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * @property {Boolean} active - true/false sets the tree item active/inactive.
 * @property {Boolean} hasLeaves - this is used to set the tree-item as a branch with children.
 * @property {Object} itemData - holds a data representation of the tree-item.
 * @property {Number} level - the level of nesting [0, 1, 2, 3 ... ]
 * @property {Boolean} open - true/false opens/closes a nested tree
 * @property {Boolean} checked: - true/false set the  check state of tree item,
 * @property {Boolean} indeterminate: true/false set the indeterminate state of tree item,
 */
class TreeItem extends LitComponent {
  static get components() {
    return {
      'eui-checkbox': Checkbox,
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    this.addEventListener('focus', this);
  }

  /**
   * Set the initial focus on the focusable element in the component.
   */
  setInitialFocus() {
    this._focusableElement.focus();
  }

  /**
   * Getter for the focusable element in the component.
   *
   * @property
   * @private
   */
  get _focusableElement() {
    return this.shadowRoot.querySelector('span.tree__item__span');
  }

  /**
   * Lifecycle hook
   * ------------------
   * Set up tree item classes, style and data
   */
  didConnect() {
    this.classList.add('tree-item');
    if (this.parentNode.classList.contains('tree-item')) {
      this.parentNode.hasLeaves = true;
      this.slot = 'item-slot';
      this.level = this.parentNode.level + 1;
      this.style.setProperty('--tree-item-left-padding', `${this.level}em`);
    }
  }

  /**
   * Lifecycle hook
   * ------------------
   * Set initial tabindex of the focusable element in the ShadowDOM
   */
  didUpgrade() {
    if (this.dataset.focusable) {
      this._setTabIndex();
    }
  }

  /**
   * Called each time a prop changes.
   * set the activity state of the tree-item. If the new active state
   * (this.active) is true, then look for it's parent to set activeChild true.
   *
   * @function didChangeProps
   * @param {Object} prev - previous state of the component
   */
  didChangeProps(changedProps) {
    if (
      changedProps.has('active') &&
      this.active &&
      !changedProps.has('itemData')
    ) {
      let currParentNode = this.parentNode;
      while (currParentNode && currParentNode.classList.contains('tree-item')) {
        currParentNode.activeChild = true;
        currParentNode = currParentNode.parentNode;
      }
    }
  }

  /**
   * Calculate the check status based on all the child tree items.
   */
  calculateCheckStatus() {
    const treeItems = [...this.querySelectorAll('.tree-item')];
    const checkedItemsCount = treeItems.filter(item => item.checked).length;
    const checkbox = this.shadowRoot.querySelector('#tree-item-checkbox');
    if (this.hasLeaves) {
      if (checkedItemsCount === 0) {
        this.checked = false;
        this.indeterminate = false;
        checkbox.checked = false;
        checkbox.indeterminate = false;
      } else if (
        checkedItemsCount > 0 &&
        checkedItemsCount < treeItems.length
      ) {
        this.checked = false;
        this.indeterminate = true;
        checkbox.checked = false;
        checkbox.indeterminate = true;
      } else {
        this.checked = true;
        this.indeterminate = false;
        checkbox.checked = true;
        checkbox.indeterminate = false;
      }
    }
  }

  /**
   * Set the status of all the child items of current node
   * @param { Boolean } the status to be set
   * @param { Boolean } is setting the status of child items
   */
  setStatus(checkStatus, isChild) {
    // Just set the status of child items,
    // the parent item status should be calculated from child items.
    const treeItems = [...this.querySelectorAll('.tree-item')];
    if (isChild) {
      this.checked = checkStatus;
      this.indeterminate = false;
    }
    treeItems.forEach(item => item.setStatus(checkStatus, true));
  }

  /**
   * Toggles the value of the "open" prop and bubbles the
   * custom event "eui-treeItem:expand"
   *
   * @function expandToggle
   * @public
   */
  expandToggle() {
    this.open = !this.open;
    this.itemData.open = this.open;

    this.bubble('eui-treeItem:expand', this);
  }

  /**
   * Toggles the "selected" state of the tree-item and bubbles the
   * custom event "eui-treeItem:select"
   *
   * @function selectToggle
   * @public
   */
  selectToggle() {
    if (this._multiSelect) {
      if (this.hasLeaves) {
        const statusToSet = !this.checked && !this.indeterminate;
        this.setStatus(statusToSet);
      }
      this.checked = !this.checked;
      this.setStatus(this.checked);
    } else {
      this.bubble('deactive-all', this);
    }
    this.bubble('eui-treeItem:select', this);
  }

  /**
   * Handler for different events in tree item elements
   *
   * @function handleEvent
   * @event eui-treeItem:select - triggered each time a tree-item is selected
   * @event eui-treeItem:expand - triggered each time a tree-item is expanded
   */
  handleEvent(event) {
    if (event.type === 'focus') {
      this.setInitialFocus();
      this._setTabIndex(-1);
      this.bubble('eui-treeItem:focused');
    } else if (event.type === 'click') {
      event.stopPropagation();
      this._setTabIndex();

      if (event.target.id === 'tree-chevron') {
        this.expandToggle();
      } else if (event.target.id === 'tree-item-checkbox') {
        // Clicking on the label or checkbox will un/select the item.
        this.selectToggle();
      } else if (event.target.id !== 'tree-chevron') {
        if (!this._multiSelect && this.selectable) {
          this.selectToggle();
        } else if (this.hasLeaves) {
          this.expandToggle();
        } else if (this._multiSelect) {
          this.selectToggle();
        } else if (this.active !== undefined && this.active === false) {
          // This event is totally internal and won't be used by outside,
          // it will be handled by Tree and followed event eui-tree:select will be bubbled by tree.
          this.selectToggle();
        }
      }
      setTimeout(() => {
        this.focus();
      }, 0);
    }
    return null;
  }

  /**
   * Create the classList set to style the span element
   *
   * @function _updateClassList
   * @private
   */
  _updateClassList() {
    let classList = 'tree__item__span';

    if (this.hasLeaves) {
      classList += ' tree__item__span__branch';
      if (this.open) {
        classList += ' tree__item__span__branch--open';
      } else {
        classList += ' tree__item__span__branch--closed';
      }
      if (this.activeChild) {
        classList += ' tree__item__span__branch--active-child';
      } else if (this.active) {
        classList += ' tree__item__span__branch--active';
      }
    } else {
      classList += ' tree__item__span__leaf';
      if (this.active) {
        classList += ' tree__item__span__leaf--active';
      }
    }
    return classList;
  }

  /**
   * Return the slot to allow default tree items to be added.
   * Implement this function in custom tree items in order to add custom markup.
   *
   * @function treeItemContents
   * @public
   */
  treeItemContents() {
    return $` <slot class="tree__item__default__slot"></slot> `;
  }

  /**
   * Return the tree item content depending on tree's multi-select status.
   */
  getTreeItemContent() {
    this._multiSelect =
      this._multiSelect ||
      this.parentNode.multiSelect ||
      this.parentNode._multiSelect;
    return this._multiSelect
      ? $`
          <eui-checkbox
            id="tree-item-checkbox"
            ?checked=${this.checked}
            ?indeterminate=${this.indeterminate}
            tabindex="-1"
          >
          </eui-checkbox>
          ${this.treeItemContents()}
        `
      : this.treeItemContents();
  }

  /**
   * Set the tabindex on the Component.
   *
   * @function _setTabIndex
   * @param {Number} value - value of tabindex should be 0 or -1
   * @private
   */
  _setTabIndex(value = 0) {
    this.setAttribute('tabindex', value);
    setTimeout(() => {
      this._focusableElement?.setAttribute('tabindex', value);
    }, 0);
  }

  /**
   * Render the <e-tree-item> component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <li class="tree__item">
        <span class="${this._updateClassList()}" @click=${this}>
          <eui-icon
            id="tree-chevron"
            @click=${this}
            class="icon"
            name=${this.open ? 'chevron-down' : 'chevron-right'}
            size="14px"
          >
          </eui-icon>
          ${this.getTreeItemContent()} ${this.data ? this.data.label : ''}
        </span>
        <ul class="tree__item__ul">
          <slot name="item-slot"></slot>
        </ul>
      </li>
    `;
  }
}

definition('eui-tree-item', {
  style: style$g,
  props: {
    active: { attribute: true, type: Boolean },
    activeChild: { attribute: true, type: Boolean },
    hasLeaves: { type: Boolean },
    itemData: { type: Object, default: { active: false } },
    level: { type: Number, default: 0 },
    open: { attribute: true, type: Boolean },
    checked: { attribute: true, type: Boolean },
    indeterminate: { attribute: true, type: Boolean },
    _multiSelect: { type: Boolean },
    selectable: { attribute: true, type: Boolean },
  },
})(TreeItem);

const Accessibility = superclass =>
  class extends superclass {
    /**
     * private reference to the last selected tree-item
     * (used for multi-select tree - select contiguous nodes
     * from last selected to focused item)
     */
    _lastSelectedItem;

    /**
     * private reference to all tree items created from data prop or slotted contents (visible or not)
     */
    _allTreeItems = [];

    constructor() {
      super();
      this.addEventListener('eui-treeItem:focused', this);
      this.addEventListener('focusout', this);
    }

    /**
     * Lifecycle hook
     * ------------------
     * If data prop is set, set private variable "_allTreeItems" and
     * set up tree-item as focusable
     *
     */
    didUpgrade() {
      if (this.data) {
        this._allTreeItems = this.getTreeItems();
        this.setFirstFocusableItem();
      }
    }

    /**
     * Lifecycle hook
     * ------------------
     * If data prop is set after the Tree has been created then
     * setup initial focusable tree-item
     *
     */
    didChangeProps(changedProps) {
      if (changedProps.has('selectOnFocus')) {
        this.setFirstFocusableItem();
      }

      if (changedProps.has('data') && this.data?.length) {
        this._allTreeItems = [];

        // remove "setAsFocusable" from item in data if present
        const prevFocusableItem = this.data.find(item => item._focusable);
        if (prevFocusableItem) {
          delete prevFocusableItem._focusable;
        }

        let selectedItem = this.data.find(item => item.active || item.checked);
        if (!selectedItem) {
          [selectedItem] = this.data.filter(
            item => item.activeChild || item.indeterminate,
          );
        }
        const focusableItem = selectedItem || this.data[0];

        // this tree-item component has not been created
        // at this stage
        // tabindex will be set on it's internal focusable element
        // from the tree-item didUpgrade lifecycle hook
        // if data includes "setAsFocusable": true
        focusableItem._focusable = true;
      }
    }

    /**
     * Get tree items based on tree structure
     */
    getTreeItems() {
      return this.data
        ? [...this.shadowRoot.querySelectorAll('.tree-item')]
        : [...this.querySelectorAll('.tree-item')];
    }

    /**
     * Returns an array of tree-items that are currently visible
     * without expanding any items
     *
     * @function getVisibleTreeItems
     * @public
     */
    getVisibleTreeItems() {
      // will need to set this variable if data prop
      // has been set/changed imperatively
      if (this._allTreeItems.length === 0) {
        this._allTreeItems = this.getTreeItems();
      }
      const visibleTreeItems = [];

      this._allTreeItems.forEach(item => {
        if (item.level === 0 && item.hasLeaves && item.open) {
          visibleTreeItems.push(item);
          this._getVisibleDescendants(item, visibleTreeItems);
        } else if (item.level === 0) {
          visibleTreeItems.push(item);
        }
      });

      return [...visibleTreeItems];
    }

    /**
     * Populates the visibleTreeItems array with descendant tree-items that
     * are visible without expanding any further tree-items
     *
     * @function _getVisibleDescendants
     * @param {Object} treeItem - open tree-item -> will check if descendant tree-items are visible
     * @param {Array} visibleTreeItems - array of visible tree items
     * @private
     */
    _getVisibleDescendants(treeItem, visibleTreeItems) {
      Array.from(treeItem.children).forEach(child => {
        visibleTreeItems.push(child);
        if (child.hasLeaves && child.open) {
          this._getVisibleDescendants(child, visibleTreeItems);
        }
      });
    }

    /**
     * Getter function which returns the first tree-item which should receive focus
     *
     * If no items are selected, it will return the first visible tree-item
     * Otherwise, it will return the first visible checked/active tree-item
     *
     * @returns {Object}
     */
    get firstFocusableItem() {
      const visibleTreeItems = this.getVisibleTreeItems();
      let selectedTreeItem = visibleTreeItems.filter(
        item => item.active || item.checked,
      )[0];

      if (!selectedTreeItem) {
        [selectedTreeItem] = visibleTreeItems.filter(
          item => item.activeChild || item.indeterminate,
        );
      }

      return selectedTreeItem || visibleTreeItems[0];
    }

    /**
     * Special handler for focus event on first focusable item in a select-on-focus tree.
     *
     * when first item is tabbed to in 'select-on-focus' tree
     * it should be set active as well as focused
     *
     * @function _focusHandlerselectOnFocus
     * @param {Object} target - focus event target
     * @private
     */
    _focusHandlerselectOnFocus = ({ target }) => {
      if (!target.active && this.itemIsSelectable(target)) {
        target.selectToggle();
      }
      target.removeEventListener('focus', this._focusHandlerselectOnFocus);
    };

    /**
     * Called once the data prop has been set or when tree-items are
     * added to the slot.
     * Sets tabindex=0 for the item that should
     * receive first focus
     *
     * @function setFirstFocusableItem
     * @public
     */
    setFirstFocusableItem() {
      const item = this.firstFocusableItem;
      if (item) {
        item._setTabIndex();

        // remove tabindex from parent tree-items if any
        // otherwise parent tabindex="-1" will prevent tabbing to first focusable item
        let itemParentNode = item.parentNode;
        while (itemParentNode?.classList.contains('tree-item')) {
          itemParentNode.removeAttribute('tabindex');
          itemParentNode = itemParentNode.parentNode;
        }

        if (this.selectOnFocus) {
          item.addEventListener('focus', this._focusHandlerselectOnFocus);
        } else {
          item.removeEventListener('focus', this._focusHandlerselectOnFocus);
        }
      }
    }

    /**
     * Sets tabindex=0 on tree-item passed in and focuses
     * this tree-item
     *
     * @function _focusItem
     * @param {Object} item - tree-item to receive focus
     * @private
     */
    _focusItem(item) {
      item._setTabIndex();
      setTimeout(() => {
        item.focus();
      }, 0);
    }

    /**
     * Returns the tree-item with tabindex=0
     * ie. the current tree-item focusable
     *
     * @function getFocusableItem
     * @param {Array} treeItems - array of tree items
     * @public
     */
    getFocusableItem(treeItems) {
      return treeItems.find(item => item.tabIndex === 0);
    }

    /**
     * Handles up/down arrow key press event
     * ---------------------------------------
     * moves focus to the next/previous tree-item
     *
     * selects newly focused item for tree with attribute 'select-on-focus'
     * if the tree-item is 'selectable'
     * (ie. if it's a leaf node or if it has child nodes along with 'selectable' attribute)
     *
     * ctrl + up/down -> moves focus without changing selected state
     *
     * shift + up/down -> moves focus and toggles selected state of item in multi-select tree
     *
     * @function _handleUpDownArrows
     * @param {Object} nextTarget - next tree-item to focus
     * @param {Boolean} shiftKey - shiftKey property of the keydown event
     * @param {Boolean} ctrlKey - ctrlKey property of the keydown event
     * @private
     */
    _handleUpDownArrows(nextTarget, shiftKey, ctrlKey) {
      if (this.selectOnFocus) {
        if (this.itemIsSelectable(nextTarget) && !ctrlKey) {
          nextTarget.selectToggle();
        }
      } else if (this.multiSelect && shiftKey) {
        nextTarget.selectToggle();
      }
      this._focusItem(nextTarget);
    }

    /**
     * Handles right arrow key press event (if event target has children)
     * -------------------------------------------------------------------
     * expands item if it's closed
     * otherwise, moves focus to first child item
     *
     * @function _handleRightArrow
     * @param {Object} currentItem - current tree item (event target)
     * @private
     */
    _handleRightArrow = currentItem => {
      if (currentItem.hasLeaves) {
        // if node open, move focus to first child
        if (currentItem.open) {
          const nextTarget = currentItem.children[0];
          this._focusItem(nextTarget);
          if (this.selectOnFocus && this.itemIsSelectable(nextTarget)) {
            nextTarget.selectToggle();
          }
        } else {
          // otherwise open node
          currentItem.expandToggle();
        }
      }
    };

    /**
     * Handles left arrow key press event
     * -------------------------------------
     *
     * collapses item if it's expanded
     * otherwise, moves focus to parent tree-item
     *
     * @function _handleLeftArrow
     * @param {Object} currentItem - current tree item (event target)
     * @private
     */
    _handleLeftArrow = currentItem => {
      if (currentItem.hasLeaves && currentItem.open) {
        currentItem.expandToggle();
      } else {
        const { parentNode } = currentItem;
        const parentShadow = parentNode.shadowRoot;
        if (parentShadow && parentShadow.querySelector('.tree__item')) {
          this._focusItem(parentNode);
          if (this.selectOnFocus && this.itemIsSelectable(parentNode)) {
            parentNode.selectToggle();
          }
        }
      }
    };

    /**
     * Handles tab key press event
     * ------------------------------
     * when the tab key is pressed it means focus has been shifted
     * away from this tree
     *
     * the function "setFirstFocusableItem" is called to setup first focusable item
     * for next time this tree is focused
     *
     * @function _handleTabAway
     * @param {Object} currentItem - current tree item (event target)
     * @private
     */
    _handleTabAway = () => {
      setTimeout(() => {
        this.setFirstFocusableItem();
      }, 0);
    };

    /**
     * Handles enter key press event
     * ------------------------------
     * if the tree-item has child items, expandToggle is called
     * to expand/collapse the item
     *
     * @function _handleEnterKey
     * @param {Object} item - current tree item (event target)
     * @private
     */
    _handleEnterKey = item => {
      if (item.hasLeaves) {
        item.expandToggle();
      }
    };

    /**
     * Handles space key press event
     * ------------------------------
     * selects contiguous nodes for Shift+Space in multi-select tree
     *
     * selects target tree-item (if selectable) in single-select tree
     *
     * @function _handleSpaceKey
     * @param {Object} item - current tree item (event target)
     * @param {Boolean} shiftKey - shiftKey property of the keydown event
     * @param {Array} visibleTreeItems - tree-items visible without expanding any items
     * @param {Number} currentIndex - index of the event target item in the visibleTreeItems array
     * @private
     */
    _handleSpaceKey = (item, shiftKey, visibleTreeItems, currentIndex) => {
      if (shiftKey) {
        if (this.multiSelect && this._lastSelectedItem) {
          this._selectContiguousNodes(visibleTreeItems, currentIndex);
        }
      } else if (this.multiSelect || this.itemIsSelectable(item)) {
        item.selectToggle();
      }
    };

    /**
     * Selects all items from last selected item to current focused item
     * (shift + space in multi-select tree)
     * and bubbles an event "eui-tree:group-select" detailing new items
     * selected
     *
     * @function _selectContiguousNodes
     * @param {Array} visibleTreeItems - tree-items currently visible without expanding any items
     * @param {Number} currentIndex - index of current focused tree item in visibleTreeItems array
     * @private
     */
    _selectContiguousNodes(visibleTreeItems, currentIndex) {
      const fromIndex = visibleTreeItems.findIndex(
        item => item === this._lastSelectedItem,
      );
      let start;
      let end;
      if (currentIndex > fromIndex) {
        start = fromIndex + 1;
        end = currentIndex;
      } else {
        start = currentIndex;
        end = fromIndex - 1;
      }

      const newSelectedItems = [];
      for (let i = start; i <= end; i += 1) {
        const item = visibleTreeItems[i];

        if (!item.checked && !item.hasLeaves) {
          item.checked = true;
          item.setStatus(true);
        } else if (item.hasLeaves && !item.open) {
          item.checked = true;
          item.setStatus(true);
        }
        newSelectedItems.push(item);
      }

      this._calculateTreeSelectionStatus();
      requestAnimationFrame(() => {
        this._processItemsAndBubbleEvent(newSelectedItems);
      });
    }

    /**
     * Processes tree-items in array to extract data from each tree-item
     * and adds it to a new array to be bubbled with custom event "eui-tree:group-select
     * when a group of tree-items is selected with one action
     * (Shift+Space keydown in multi-select tree)
     *
     * @function _processItemsAndBubbleEvent
     * @param {Array} newSelectedItems - array of items selected on Shift+Space keyboard event
     * @private
     */
    // _addItemForGroupSelectEvent(newSelectedItems, item) {
    _processItemsAndBubbleEvent(newSelectedItems) {
      const eventData = [];
      newSelectedItems.forEach(item => {
        let label = item.innerText;
        const {
          itemData: { data },
          checked: selected,
        } = item;

        if (item.hasLeaves && item.open) {
          const splitLabel = label.split(/\r?\n/);
          label = splitLabel.find(val => val !== '') || label;
        }
        eventData.push({ label, data, selected });
      });
      this.bubble('eui-tree:group-select', eventData);
    }

    /**
     * Calculates 'checked' status for each item in the tree
     *
     * @function _calculateTreeSelectionStatus
     * @private
     */
    _calculateTreeSelectionStatus() {
      const treeItems = this.getTreeItems();
      let pos = treeItems.length - 1;
      while (pos >= 0) {
        const curItem = treeItems[pos];
        requestAnimationFrame(() => curItem.calculateCheckStatus());
        pos -= 1;
      }
    }

    /**
     * Handles keydown events
     *
     * @function _handleKeyDownEvent
     * @param {Object} event - keydown event object
     * @private
     */
    _handleKeyDownEvent(event) {
      const { key, target, shiftKey, ctrlKey } = event;
      const visibleTreeItems = this.getVisibleTreeItems();
      const currentIndex = visibleTreeItems.findIndex(item => item === target);
      let nextTarget;

      if (key === 'ArrowUp' || key === 'ArrowDown') {
        event.preventDefault();
        nextTarget =
          key === 'ArrowUp'
            ? visibleTreeItems[currentIndex - 1]
            : visibleTreeItems[currentIndex + 1];
        if (nextTarget) {
          this._handleUpDownArrows(nextTarget, shiftKey, ctrlKey);
        }
      } else if (key === 'ArrowRight') {
        event.preventDefault();
        this._handleRightArrow(target);
      } else if (key === 'ArrowLeft') {
        event.preventDefault();
        this._handleLeftArrow(target);
      } else if (key === 'Enter') {
        event.preventDefault();
        this._handleEnterKey(target);
      } else if (key === SPACE_KEY) {
        event.preventDefault();
        this._handleSpaceKey(target, shiftKey, visibleTreeItems, currentIndex);
      } else if (key === 'Tab') {
        this._handleTabAway();
      }
    }

    /**
     * checks if the tree-item passed in is selectable
     * if so, returns true
     * if not, returns false
     *
     * @function itemIsSelectable
     * @param {Object} item - some tree item
     * @public
     */
    itemIsSelectable(item) {
      return !item.hasLeaves || item.selectable;
    }

    /**
     * Handle slotchange, focusout and keyboard events
     * and updates private variable '_lastSelectedItem'
     * when a new tree-item is selected
     *
     * @function handleEvent
     * @param {Event} event - events from the Tree
     */
    handleEvent(event) {
      const { type, detail } = event;
      if (type === 'slotchange') {
        this._allTreeItems = this.getTreeItems();
        this.setFirstFocusableItem();
      } else if (type === 'eui-treeItem:focused') {
        // the tree is set up with one tree-item focusable, ie. with
        // tabindex=0, so that some item can be tabbed to
        //
        // If some other tree-item in the tree is clicked this tabindex
        // set on first focusable item needs to be removed
        // (otherwise shift+tab from clicked item will focus tree-item with tabindex=0)
        event.stopPropagation();
        const focusableItem = this.getFocusableItem(this._allTreeItems);
        focusableItem?._setTabIndex(-1);
      } else if (type === 'focusout') {
        event.stopPropagation();
        // checks if focus has been moved outside the tree
        // and if so, resets focusable item
        const activeEl = event.relatedTarget;
        const isItemInTree = this._allTreeItems.find(item => item === activeEl);
        if (!isItemInTree) {
          this.setFirstFocusableItem();
        }
      } else if (type === 'eui-treeItem:select' && detail.checked) {
        this._lastSelectedItem = detail;
      } else if (type === 'keydown') {
        this._handleKeyDownEvent(event);
      }
    }
  };

var style$h = ":host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.tree__ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  opacity: 1;\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Tree extends Accessibility(LitComponent) {
  static get components() {
    return {
      'eui-tree-item': TreeItem,
    };
  }

  /**
   * This is used to recursively set all tree items inactive.
   * This is only used when the Tree is setup using data prop.
   *
   * @function deactivateAllItems
   * @param {Object} data - data representing the tree item
   */
  deactivateAllItems(data = this.data) {
    data.forEach(item => {
      if (item.children) {
        item.active = false;
        item.activeChild = false;
        // deactivate all children...
        this.deactivateAllItems(item.children);
      } else {
        item.active = false;
      }
    });
  }

  /**
   * Handle events bubbled from tree item, process and re-bubble proper event from tree
   *
   * @function handleEvent
   * @param {Event} event - events from the Tree
   */
  handleEvent(event) {
    super.handleEvent(event);

    if (event) {
      event.stopPropagation();
    }
    const { type: eventType } = event;

    if (eventType === 'deactive-all') {
      if (this.data) {
        this.deactivateAllItems();
      } else {
        this.deactivateAll();
      }
      if (this.data) {
        event.detail.itemData.active = true;
        this.data = [...this.data];
      } else {
        event.detail.active = true;
      }
    }

    // Event handling for calculating the selection status of the tree.
    if (eventType === 'eui-treeItem:select') {
      if (this.multiSelect) {
        this._calculateTreeSelectionStatus();
      }
      this._bubbleEvent('eui-tree:select', event.detail);
    }

    if (eventType === 'eui-treeItem:expand') {
      this._bubbleEvent('eui-tree:expand', event.detail);
    }
  }

  /**
   * Bubble event from Tree
   *
   * @function _bubbleEvent
   * @param eventName - event name
   * @param eventDetail - event details go with the event
   * @private
   */
  _bubbleEvent(eventName, eventDetail) {
    const {
      innerText: label,
      itemData: { data },
      open,
      checked,
    } = eventDetail;

    if (eventName === 'eui-tree:expand') {
      this.bubble(eventName, { label, data, open });
    } else {
      const selected = this.multiSelect ? checked : true;
      this.bubble(eventName, { label, data, selected });
    }
  }

  /**
   * This function is used to set the activeChild prop of the parent of the active tree item.
   * It is called recursively starting at the top most level and ending
   * when it reaches the actual active tree item.
   *
   * @function _setActive
   * @param {Object} data - data representing tree item.
   * @private
   */
  _setActive(data = this.data) {
    let foundActivityAtIndex = 0;
    const foundItem = data.some((item, index) => {
      const dataString = JSON.stringify(item);
      const found = dataString.includes('"active":true');
      if (found) {
        foundActivityAtIndex = index;
      }
      return found;
    });
    if (
      data[foundActivityAtIndex] &&
      data[foundActivityAtIndex].children &&
      foundItem
    ) {
      const obj = data[foundActivityAtIndex];
      if (!obj.active) {
        obj.activeChild = true;
      }
      this._setActive(data[foundActivityAtIndex].children);
    }
  }

  /**
   * Deactivate all tree-items without triggering event.
   *
   * @function deactivateAll
   * @public
   */
  deactivateAll = () => {
    const treeItems = this.getTreeItems();
    // eslint-disable-next-line no-return-assign
    treeItems.forEach(treeItem => {
      treeItem.active = false;
      treeItem.activeChild = false;
    });
  };

  /**
   * Get the currently active tree-item.
   *
   * @function getSelected
   * @public
   * @returns [NodeElement] - array of active tree-items
   */
  getSelected = () => {
    const treeItems = this.getTreeItems();
    return this.multiSelect
      ? treeItems.filter(item => item.checked)
      : treeItems.filter(item => item.active);
  };

  /**
   * ClassMap for tree items
   */
  getTreeItemClass() {
    return o({
      'tree--navigation': this.navigation,
      'tree-item': true,
    });
  }

  /**
   * Create the tree component based on data entered via the data prop.
   *
   * @function _makeTreeFromData
   * @param {Object} treeItem - tree item object
   * @private
   */
  _makeTreeFromData(treeItem) {
    return $`
      <eui-tree-item
        class="${this.getTreeItemClass()}"
        ?open="${treeItem.open}"
        ?active="${treeItem.active}"
        ?active-child="${treeItem.activeChild}"
        ?selectable="${treeItem.selectable}"
        data-focusable=${l$1(treeItem._focusable)}
        .itemData=${treeItem}
        ._multiSelect=${this.multiSelect}
      >
        ${treeItem.label}
        ${treeItem.children &&
        treeItem.children.map(child => this._makeTreeFromData(child))}
      </eui-tree-item>
    `;
  }

  didUpgrade() {
    super.didUpgrade();
    if (this.navigation) {
      setTimeout(() => {
        const currentTreeItems = this.querySelectorAll('.tree-item');
        currentTreeItems.forEach(i => i.classList.add('tree--navigation'));
      }, 0);
    }
  }

  /**
   * Hook into the changed props. If data is changed it must be determined if
   * the active tree-item has a parent and if so that parent's prop activeChild should be set.
   * Once all parents are found and set activeChild = true the data is mutated.
   *
   * @function didChangeProps
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (
      changedProps.has('data') &&
      Array.isArray(this.data) &&
      this.data.length
    ) {
      // need to set all activeChild = true for all parent items.
      this._setActive();
      // mutate the data...
      this.data = [...this.data];
    }
    if (changedProps.has('navigation')) {
      const currentTreeItems = this.getTreeItems();
      if (this.navigation) {
        currentTreeItems.forEach(i => i.classList.add('tree--navigation'));
      } else {
        currentTreeItems.forEach(i => i.classList.remove('tree--navigation'));
      }
    }

    if (changedProps.has('multiSelect')) {
      const treeItems = this.getTreeItems();
      // eslint-disable-next-line no-restricted-syntax
      for (const item of treeItems) {
        item.active = false;
        item._multiSelect = this.multiSelect;
      }
    }
    super.didChangeProps(changedProps);
  }

  /**
   * Render the tree component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <div
        class="tree"
        @keydown=${this}
        @deactive-all=${this}
        @eui-treeItem:select=${this}
        @eui-treeItem:expand=${this}
      >
        <ul class="tree__ul">
          ${!this.data
            ? $`<slot @slotchange=${this}></slot>`
            : this.data.map(treeItem => this._makeTreeFromData(treeItem))}
        </ul>
      </div>
    `;
  }
}

definition('eui-tree', {
  style: style$h,
  props: {
    data: { type: Array },
    navigation: { attribute: true, type: Boolean },
    multiSelect: { attribute: true, type: Boolean, default: false },
    selectOnFocus: { attribute: true, type: Boolean },
  },
})(Tree);

var style$i = ":host {\n  display: block;\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica', 'sans-serif');\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  --timeline-line-default: var(--text, #242424);\n  --timeline-dot-default: var(--gray-53, #878787);\n  --timeline-hover: var(--table-hover, #DCDCDC);\n  --timeline-select-color: var(--blue, #1174E6);\n  --font-color: var(--text, #242424);\n  --gap: var(--space-base, 8px);\n  \n}\n:host([hidden]) {\n  display: none;\n}\n:host([selected]) .timeline-entry {\n  box-shadow: inset 0px 0px 0px 1px var(--timeline-select-color);\n}\n:host([selected]) .dot-marker{\n  background: var(--timeline-select-color);\n  border-color: var(--timeline-select-color);\n}\n:host([selected]) {\n  background-color: var(--timeline-hover);\n}\n:host([interactive]) .timeline:hover {\n  background-color: var(--timeline-hover);\n}\n\n:host([horizontal]) .timeline-entry {\n  flex-direction: column;\n}\n:host([horizontal]) .path {\n  width: 100%;\n  height: 24px;\n  flex-direction: row;\n}\n:host([horizontal]) .line {\n  border-top: 1px;\n  border-left: 0;\n  border-top-style: solid;\n  margin: 0 -32px 0 0;\n  height: 0;\n}\n:host([horizontal]) .future .line {\n  border-left-style: none;\n  border-top-style: dashed;\n  border-color: var(--timeline-dot-default);\n}\n\n.timeline-entry {\n  display: flex;\n  flex-direction: row;\n  gap: var(--space-base, 8px);\n  padding: var(--space-large, 16px);\n}\n\n.timeline-entry[data-custom-marker] .item *:not(.title):first-child {\n  line-height: 24px;\n}\n\n.path {\n  width: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 1;\n}\n\n.future .dot-marker,\n.timeline-entry[data-custom-marker] .dot-marker {\n  background: transparent;\n}\n.dot-marker {\n  border: 1px solid var(--timeline-dot-default);\n  background: var(--timeline-dot-default);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: none;\n  padding: 4px;\n}\n\n.future .line {\n  border-left-style: dashed;\n  border-color: var(--timeline-dot-default);\n}\n.line {\n  border-color: var(--timeline-line-default);\n  border-left: 1px;\n  border-left-style: solid;\n  height: 100%;\n  flex: auto;\n  margin-bottom: -32px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap);\n  color: var(--font-color);\n  min-width: 250px;\n}\n\ntime {\n  font-size: .75rem;\n  opacity: 0.7;\n}\n\n::slotted(*[slot=title]),\n.title {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.item *:not(.title):first-child {\n  line-height: 10px;\n  margin-bottom: 6px;\n}\n\n::slotted(*[slot=marker]) {\n  width: 16px;\n  height: 16px;\n}\n\n:host([interactive]) .timeline-entry:hover {\n  background-color: var(--timeline-hover);\n  cursor: pointer;\n}";

/**
 * @summary Timeline entry
 * @tag eui-timeline-entry
 * @attribute {String} entryTitle - Title of the timeline entry
 * @attribute {String} timestamp - Timestamp of the timeline entry
 * @attribute {Boolean} [interactive=false] - determines if the timeline is interactive
 * @attribute {Boolean} [selected=false] - the selected state of the timeline
 * @attribute {Boolean} [horizontal=false] - the timeline entry is displayed in a horizontal layout
 * @property {Object} [timeFormat={month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}] - format the timeline timestamp
 * @cssprop [--gap=--space-base] - Space between the title and the content area
 * @cssprop [--timeline-dot-default=--gray-53] - default color for the dot marker
 * @cssprop [--timeline-line-default=--text] - default color for the line
 * @cssprop [--timeline-hover=--table-hover] - default color for background on hover
 * @cssprop [--timeline-select-color=--blue] - default color for border and dot marker when selected
 * @cssprop [--font-color=--text] - font color
 * @slot marker - slot for the icon in the timeline dot of the timeline entry
 * @slot title - slot for the title of the timeline entry
 * @slot subtitle - slot for the subtitle of the timeline entry
 * @slot - default slot for content of the timeline entry
 */
class TimelineEntry extends LitComponent {
  get name() {
    return 'timeline-entry';
  }

  get _timelineEntryElement() {
    return this.shadowRoot.querySelector('.timeline-entry');
  }

  /**
   * Create the optional timestamp.
   *
   * @param {String} timestamp - timestamp string.
   * @private
   * @internal
   * @returns
   */
  _timestampTemplate = timestamp => {
    const defaultTimeFormat = new Intl.DateTimeFormat('en-US', this.timeFormat);

    return timestamp
      ? $`<time datetime="${timestamp}"
          >${defaultTimeFormat.format(Date.parse(timestamp))}</time
        >`
      : w;
  };

  /**
   * determine if the next element is a timeline-entry
   *
   * @internal
   * @returns Boolean
   */
  _isNextTimelineEntry = () =>
    this.name === this.nextElementSibling?.name &&
    !this.nextElementSibling.hasAttribute('hidden');

  /**
   * The hidden state of the next timeline-entry component might change. If it
   * does then it must inform it's previous sibling that it is now hidden. This
   * will then NOT draw the line between the now hidden timeline-entry and the
   * NOW last timeline-entry
   *
   * @param {Boolean} hidden - hidden state of the next element sibling
   */
  nextTimelineEntryIsHidden(hidden) {
    const line = this.shadowRoot.querySelector('.line');
    if (hidden) {
      line.setAttribute('hidden', '');
    } else {
      line.removeAttribute('hidden');
    }
  }

  /**
   * The "subtitle" template is inserted between the title and the content.
   * Extend this timeline-entry component and provide your own markup to
   * insert here.
   * @function subtitleTemplate
   * @returns html
   */
  subtitleTemplate() {
    return $` <slot name="subtitle"></slot> `;
  }

  /**
   * The "content" template is the last template in the timeline. It houses
   * the content of the timeline entry.
   *
   * Extend this timeline-entry component and provide your own markup to
   * insert here.
   *
   * @function contentTemplate
   * @returns html
   */
  contentTemplate() {
    return $` <slot></slot> `;
  }

  /**
   * listen for the slotchange event on the marker slot.
   * This handles the case where a developer adds an icon/component
   * to the marker slot. This requires the timeline-entry to apply some
   * conditional CSS.
   *
   * @function handleEvent
   * @param {event} event
   * @internal
   */
  handleEvent(event) {
    if (event.type === 'slotchange') {
      if (event.target.assignedElements().length > 0) {
        this._timelineEntryElement.setAttribute('data-custom-marker', '');
      } else {
        this._timelineEntryElement.removeAttribute('data-custom-marker');
      }
    }
  }

  /**
   * didChangeProps lifecycle callback
   */
  didChangeProps(changedProps) {
    if (changedProps.has('hidden')) {
      // tell previous sibling that I'm hidden.
      this.previousElementSibling?.nextTimelineEntryIsHidden(this.hidden);
    }
  }

  render() {
    return $`
      <div class="timeline-entry">
        <div
          class=${o({
            path: true,
            future: Date.parse(this.timestamp) > new Date(),
          })}
        >
          <div class="dot-marker">
            <slot name="marker" @slotchange=${this}> </slot>
          </div>
          <div class="line" ?hidden=${!this._isNextTimelineEntry()}></div>
        </div>
        <div class="item">
          <!-- timestamp -->
          ${this._timestampTemplate(this.timestamp)}

          <!-- title -->
          <slot name="title">
            <div class="title">${this.entryTitle}</div>
          </slot>

          ${this.subtitleTemplate()} ${this.contentTemplate()}
        </div>
      </div>
    `;
  }
}
definition('eui-timeline-entry', {
  style: style$i,
  props: {
    entryTitle: { attribute: true },
    interactive: { attribute: true, type: Boolean },
    selected: { attribute: true, type: Boolean },
    horizontal: { attribute: true, type: Boolean },
    timestamp: { attribute: true },
    hidden: { attribute: true, type: Boolean },
    timeFormat: {
      type: Object,
      default: {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
  },
})(TimelineEntry);

export { Dialog as D, PasswordField as P, Tree as T, ProgressBar as a, a as b, c, m, s, u };
