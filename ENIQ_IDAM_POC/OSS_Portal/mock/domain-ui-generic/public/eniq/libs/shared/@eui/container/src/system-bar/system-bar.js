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

export default class SystemBar extends TemplateComponent {
  static get template() {
    return `
    <header id="SysBar-container" class="system-bar">
      <div class="left">
        <slot id="left-slot" name="left"></slot>
      </div>
      <div class="right">
        <slot id="right-slot" name="right"></slot>
      </div>
    </header>`;
  }

  didUpgrade() {
    if (this.defaultApp) {
      this.leftArea.addEventListener('click', () => {
        this.bubble('navigation:navigate', { route: this.defaultApp });
      });
    }
  }

  // Getter for the left area (contains the logo and title) in the System Bar
  get leftArea() {
    return this.shadowRoot.querySelector('.left');
  }
}
const style = `
:host {
  display: block;
  font-family: "Ericsson Hilda",Helvetica,Arial,sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

:host([default-app]) .left{
  cursor: pointer;
}

.system-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--layer0, #0C0C0C);
  color: var(--white, #FFF);
  height: var(--systembar-height, 48px);
  max-height: var(--systembar-height, 48px);
  user-select: none;
  font-weight: 100;
  white-space: nowrap;
  padding: 0 var(--space-large, 16px);
  --icon-color: var(--white, #FFF);
}

.left {
  display: flex;
  align-items: center;
}

slot[name=right]::slotted(*) {
  margin-left: var(--space-large, 16px);
  --icon-color: var(--white, #FFF);
}

slot[name=left]::slotted(*) {
  margin-right: var(--space-base, 8px);
  --icon-color: var(--white, #FFF);
}

.right {
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
}

.left * {
  font-size: 14px;
  font-family: "Ericsson Hilda", Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
}
`;

definition('eui-container-system-bar', {
  style,
  props: {
    defaultApp: { attribute: true, type: String },
  },
})(SystemBar);
