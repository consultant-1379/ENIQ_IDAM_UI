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
import { InfoMessage } from '../info-message/info-message.js';
import { dynamic } from '../utils/dynamic.js';
import Loader from '../loader/loader.js';

export default class SystemPanel extends TemplateComponent {
  static get components() {
    return {
      'eui-info-message': InfoMessage,
      'eui-container-loader': Loader,
      'eui-icon': Icon,
    };
  }

  static get template() {
    return `
      <div class="system-layer">
        <div class="heading">
          <span class="title"></span>
          <eui-icon id="close-icon" name="cross"></eui-icon>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>`;
  }

  constructor() {
    super();
    this.addEventListener('eui-system-panel:title', this);
    this.closeIcon = this.shadowRoot.querySelector('#close-icon');
    this.closeIcon.addEventListener('click', this);
  }

  didConnect() {
    if (this.panel) {
      this._loadPanel(this.panel);
    }
  }

  /**
   * Handle the events from the panel
   *
   * click
   * ----------------------------------------------------------------
   * handle a user click on the close icon. This bubbles the event
   * 'system:panel'. As there is no payload, this will cause the
   * system panel to be hidden (the Application Layer animates over
   * the System Layer)
   *
   * eui-system-panel:title
   * ----------------------------------------------------------------
   * This event is bubbled from Modules as soon as they are appended
   * to this panel. The event is bubbled from their didConnect().
   * The event has a payload which contains the title of the Module.
   * The title is then set on the System Layer Panel.
   *
   * @function handleEvent
   * @param {Event} event - events from the panel
   */
  handleEvent(event) {
    if (event.type === 'click' && event.target.id === 'close-icon') {
      this.bubble('system:panel');
    } else if (event.type === 'eui-system-panel:title') {
      this._title = event.detail.title;
    }
  }

  /**
   * set the title of the panel.
   *
   * @property
   * @private
   * @param {string} title
   */
  set _title(title) {
    this.shadowRoot.querySelector('.title').innerText = title;
  }

  /**
   * Add a loading animation after 100ms. If after 100ms the Module has
   * not imported, a loading animation is added to the panel. The
   * title of the panel shows the current activity ("Loading panel...")
   * and an indeterminate progress indicator is shown in the center of
   * the panel.
   * If, by the time the timeout triggers, the panel is not the last
   * requested panel (this.panel), do NOT add the loading animation.
   *
   * @function loadingPanel
   * @param {String} panel - name of the module to load
   * @private
   * @returns {number} timeoutID
   */
  _loadingPanel = panel =>
    setTimeout(() => {
      if (panel === this.panel) {
        this._title = 'Loading panel...';
        const loader = this.createElement('eui-container-loader');
        [...this.children].forEach(child => {
          child.remove();
        });
        this.appendChild(loader);
      }
    }, 100);

  /**
   * When the import of the Module is finished or if it encounters
   * an error, the panel is said to be loaded. This removes the loading
   * animation (if it was added) and prepares the way to either append
   * the Module or, in the case of an error, the info message.
   *
   * @function loadedPanel
   * @param {number} timeoutID
   * @private
   */
  _loadedPanel = timeoutID => {
    this._title = '';
    clearTimeout(timeoutID);
    [...this.children].forEach(child => {
      child.remove();
    });
  };

  /**
   * Dynamically import a Module by name.
   *
   * @function _importPanel
   * @param {string} panel - name of the Module to import
   * @returns Module
   */
  _importPanel(moduleName) {
    return dynamic(moduleName);
  }

  /**
   * Load a panel.
   *
   * @function loadPanel
   * @param {string} panel - name of the panel (Module) to load
   * @private
   */
  _loadPanel = async panel => {
    const timeoutID = this._loadingPanel(panel);
    try {
      const panelModule = await this._importPanel(panel);
      if (panel === this.panel) {
        // the panel imported === the last requested panel, so show it...
        this._loadedPanel(timeoutID);
        this.register(panelModule);
        const panelElement = this.createElement(panelModule.is);
        this.appendChild(panelElement);
      }
    } catch (error) {
      if (panel === this.panel) {
        // the panel imported === the last requested panel, so show error, otherwise ignore...
        this._loadedPanel(timeoutID);
        const infoMessageElement = this.createElement('eui-info-message');
        infoMessageElement.messageTitle = 'Panel not found';
        infoMessageElement.message = error.message;
        this.appendChild(infoMessageElement);
      }
    }
  };

  /**
   * Do something when props change
   *
   * panel
   * ----------------------------------------------------------------
   * Load the panel when the panel prop changes
   *
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('panel')) {
      this._title = '';
      this._loadPanel(this.panel);
    }
  }
}

const style = `
:host {
  display: block;
  color: var(--text);
  --text: var(--white);
  --scrollbar-thumb: var(--gray-31);
}
.system-layer {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  flex: auto;
  overflow: auto
}

/* scroll bar style */
.content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: transparent;
}
.content::-webkit-scrollbar-corner {
  background: transparent;
}
.content::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
}
.content { /* Firefox */
  scrollbar-color: var(--scrollbar-thumb) transparent;
  scrollbar-width: thin;
}

.heading {
  flex: none;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
}
.title {
  flex: auto;
  font-size: 18px;
  color: var(--white);
  --text: var(--white);
}
#close-icon {
  --text: rgba(225,225,225,0.7);
  cursor: pointer;
}
#close-icon:hover {
  --text: var(--white);
}
`;

definition('eui-system-panel', {
  style,
  props: {
    panel: { type: String },
  },
})(SystemPanel);
