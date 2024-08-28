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

export class InfoMessage extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  static get template() {
    return `
    <div class="info-message">
      <div class="header">
        <eui-icon size="18px" class="icon" name="triangle-warning"></eui-icon>
        <span class="title">Error</span>
      </div>
      <pre class="message"></pre>
    </div>`;
  }

  didConnect() {
    const messageElement = this.shadowRoot.querySelector('.message');
    messageElement.innerText = this.message;
    const messageTitleElement = this.shadowRoot.querySelector('.title');
    messageTitleElement.innerText = this.messageTitle;
  }

  didChangeProps(changedProps) {
    if (changedProps.has('message')) {
      const messageElement = this.shadowRoot.querySelector('.message');
      messageElement.innerText = this.message;
    }
    if (changedProps.has('messageTitle')) {
      const element = this.shadowRoot.querySelector('.title');
      element.innerText = this.messageTitle;
    }
  }
}

const style = `
:host {
  display: flex;
  flex: auto;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
}

.header :is(.icon) {
  padding-right: var(--space-base, 8px);
}

.info-message {
  color: var(--text,  #242424);
  box-sizing: border-box;
  max-width: 700px;
  margin: auto;
  padding: var(--space-large, 16px);
}

.title {
  font-size: 18px;
}

.message {
  word-break: break-word;
  white-space: pre-wrap;
}
`;
definition('eui-info-message', {
  style,
  props: {
    messageTitle: { attribute: true, type: String },
    message: { attribute: true, type: String },
  },
})(InfoMessage);
