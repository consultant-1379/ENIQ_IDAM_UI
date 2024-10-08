import { T as TemplateComponent, d as definition } from './index-b5c18b0a.js';
import { Icon } from '../@eui/theme/icon.js';

var template = "<div class=\"eui__tabs__layout\">\n  <div class=\"eui__tabs__titles\">\n    <div class=\"eui__tabs__titles__left__arrow\">\n      <eui-icon name=\"arrow-left\"></eui-icon>\n    </div>\n    <div class=\"eui__tabs__tiles__viewport\" eui__tabs__titles>\n      <div class=\"eui__tabs__titles__container\" style=\"left: 0px\">\n        <slot name=\"titles\"></slot>\n      </div>\n    </div>\n    <div class=\"eui__tabs__titles__right__arrow\">\n      <eui-icon name=\"arrow-right\"></eui-icon>\n    </div>\n  </div>\n  <div class=\"eui__tabs__content\">\n    <slot name=\"content\"></slot>\n  </div>\n</div>\n";

var style = ":host {\n  display: block;\n}\n\n.eui__tabs__layout {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 34px auto;\n  grid-template-columns: auto;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  grid-template-areas: \"title\" \"content\";\n}\n\n.eui__tabs__content {\n  grid-area: content;\n  padding: 5px 0;\n  overflow: hidden;\n  height: auto;\n}\n\n.eui__tabs__content ::slotted(*) {\n  display: none;\n  margin-top: var(--space-base, 8px);\n}\n\n.eui__tabs__content ::slotted(*[selected]) {\n  display: block;\n  height: 100%;\n}\n\n.eui__tabs__titles {\n  grid-area: title;\n  overflow: hidden;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.eui__tabs__tiles__viewport {\n  overflow: hidden;\n  position: relative;\n  padding-top: 1px;\n  width: 100%;\n  height: 100%;\n}\n\n.eui__tabs__titles__container {\n  position: absolute;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: left;\n  transition-property: right, left;\n  transition-duration: 0.5s;\n  height: 43px;\n  padding-left: 1px;\n}\n\n.eui__tabs__titles__left__arrow,\n.eui__tabs__titles__right__arrow {\n  z-index: 1;\n  height: 100%;\n  display: none;\n  justify-content: center;\n  flex-direction: column;\n  --icon-color: var(--text, #242424);\n\n  width: 24px;\n  min-width: 24px;\n  cursor: pointer;\n  \n  animation-duration: 0.4s;\n}\n\n.eui__tabs__titles__left__arrow :hover,\n.eui__tabs__titles__right__arrow :hover {\n  --icon-color: var(--blue, #1174e6);\n}\n\n.eui__tabs__titles__left__arrow {\n  text-align: left;\n}\n\n.eui__tabs__titles__right__arrow {\n  text-align: right;\n}\n\n.eui__tabs__titles__effect__right {\n  animation-name: right;\n}\n\n.eui__tabs__titles__effect__right__reverse {\n  animation-name: right;\n  animation-direction: reverse;\n}\n\n.eui__tabs__titles__effect__left {\n  animation-name: left;\n}\n\n.eui__tabs__titles__effect__left__reverse {\n  animation-name: left;\n  animation-direction: reverse;\n}\n\n@keyframes left {\n  from {\n    margin-left: -20px;\n  }\n  to {\n    margin-left: 0%;\n  }\n}\n\n@keyframes right {\n  from {\n    margin-right: -20px;\n  }\n  to {\n    margin-right: 0%;\n  }\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Tabs extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  scrollLength = 150;

  get tabsTitles() {
    return this.shadowRoot.querySelector('.eui__tabs__tiles__viewport');
  }

  get tabsTitlesContainer() {
    return this.shadowRoot.querySelector('.eui__tabs__titles__container');
  }

  get offsetLeft() {
    return this.tabsTitlesContainer.offsetLeft;
  }

  get offsetRight() {
    return (
      this.tabsTitles.offsetWidth -
      this.tabsTitlesContainer.offsetLeft -
      this.tabsTitlesContainer.offsetWidth
    );
  }

  constructor() {
    super();

    // When a tab is selected, deselect all other tabs and
    // show the selected tabs' content.
    this.addEventListener('eui-tab:select', event => {
      event.stopPropagation();
      this._selectTab(event.target);
    });
  }

  _leftArrowClick = () => {
    this.tabsTitlesContainer.style.left =
      this.offsetLeft + this.scrollLength < 0
        ? `${this.offsetLeft + this.scrollLength}px`
        : '0px';

    this._updateArrows();
  };

  _rightArrowClick = () => {
    this.tabsTitlesContainer.style.left =
      this.offsetRight + this.scrollLength < 0
        ? `${this.offsetLeft - this.scrollLength}px`
        : `${
            this.tabsTitles.offsetWidth - this.tabsTitlesContainer.offsetWidth
          }px`;

    this._updateArrows();
  };

  /**
   * This function determines if the tabs area requires arrows. If they are required it
   * animates the arrows into place.
   * The animation can be switched off by passing false as a parameter. By default animations
   * will happen.
   *
   * @function _updateArrows
   * @private
   */
  _updateArrows = (animate = true) => {
    setTimeout(
      () => {
        if (
          this.tabsTitles.offsetWidth >= this.tabsTitlesContainer.offsetWidth
        ) {
          this.leftArrowButton.style.display = 'none';
          this.rightArrowButton.style.display = 'none';
        }

        if (this.offsetLeft < 0) {
          if (this.leftArrowButton.style.display !== 'flex') {
            this.leftArrowButton.style.display = 'flex';
            this.leftArrowButton.classList.add(
              'eui__tabs__titles__effect__left',
            );
            setTimeout(
              () => {
                this.leftArrowButton.classList.remove(
                  'eui__tabs__titles__effect__left',
                );
              },
              animate ? 400 : 0,
            );
          }
        } else if (this.leftArrowButton.style.display !== 'none') {
          this.leftArrowButton.classList.add(
            'eui__tabs__titles__effect__left__reverse',
          );
          setTimeout(
            () => {
              this.leftArrowButton.style.display = 'none';
              this.leftArrowButton.classList.remove(
                'eui__tabs__titles__effect__left__reverse',
              );
            },
            animate ? 400 : 0,
          );
        }

        if (this.offsetRight < -20) {
          if (this.rightArrowButton.style.display !== 'flex') {
            this.rightArrowButton.style.display = 'flex';
            this.rightArrowButton.classList.add(
              'eui__tabs__titles__effect__right',
            );
            setTimeout(
              () => {
                this.rightArrowButton.classList.remove(
                  'eui__tabs__titles__effect__right',
                );
              },
              animate ? 400 : 0,
            );
          }
        } else if (this.rightArrowButton.style.display !== 'none') {
          this.rightArrowButton.classList.add(
            'eui__tabs__titles__effect__right__reverse',
          );
          setTimeout(
            () => {
              this.tabsTitlesContainer.style.left = `${this.offsetLeft}px`;
              this.rightArrowButton.style.display = 'none';
              this.rightArrowButton.classList.remove(
                'eui__tabs__titles__effect__right__reverse',
              );
            },
            animate ? 400 : 0,
          );
        }
      },
      animate ? 500 : 0,
    );
  };

  /**
   * This function triggers the tabs area to re-evaluate itself to determine
   * if it needs to show left/right tab arrows. This is done without
   * animating the arrows.
   *
   * @function update
   * @public
   */
  update() {
    this._updateArrows(false);
  }

  _updateScroll = (animate = true) => {
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        this.tabsTitlesContainer.style.left = '0px';
        this._updateArrows(animate);
      }, 66);
    }
  };

  /**
   * This function finds all the tab components and de-selects any
   * previously selected tab, while ignoring the newly selected tab.
   * It sends the index of the newly selected tab to the _selectPage
   * function
   *
   * @function _selectTab
   * @param selectedTab - the selected tab
   * @private
   */
  _selectTab = selectedTab => {
    const tabs = [...this.querySelectorAll('eui-tab')];

    tabs.forEach((tab, index) => {
      if (selectedTab !== tab) {
        tab.selected = false;
      } else {
        this._selectPage(index);
      }
    });
  };

  /**
   * This is called each time an enabled tab is clicked or eui-tab is selected = true.
   * It searches for all child nodes with their slots set to "content" (tab pages).
   * It matches the index of the tab selected with the index of the found tab pages. It then
   * adds a selected attribute to the matching index and removes it from all other tab pages.
   *
   * @function _selectPage
   * @param tabIndex - the index of the selected tab
   * @private
   */
  _selectPage = tabIndex => {
    const tabPages = [...this.childNodes].filter(
      node => node.slot === 'content',
    );
    tabPages.forEach((tabPage, index) => {
      if (index === tabIndex) {
        tabPage.setAttribute('selected', true);
      } else {
        tabPage.removeAttribute('selected');
      }
    });
  };

  handleEvent(event) {
    if (event.type === 'resize') {
      event.stopPropagation();
      this.resizeTimeout = null;
      this._updateScroll();
    }
  }

  didRender() {
    this.compatElementUpdated();
    this._updateScroll(false);
  }

  didConnect() {
    // get the buttons...
    this.leftArrowButton = this.shadowRoot.querySelector(
      '.eui__tabs__titles__left__arrow',
    );
    this.rightArrowButton = this.shadowRoot.querySelector(
      '.eui__tabs__titles__right__arrow',
    );

    // add actionListeners...
    this.leftArrowButton.addEventListener('click', this._leftArrowClick, false);
    this.rightArrowButton.addEventListener(
      'click',
      this._rightArrowClick,
      false,
    );

    window.addEventListener('resize', this, { passive: true });
  }

  didDisconnect() {
    window.removeEventListener('resize', this, { passive: true });
  }
}

definition('eui-tabs', {
  style,
  template,
})(Tabs);

export { Tabs as T };
