import { TemplateComponent, definition } from '@eui/component';
import { Tooltip } from '@eui/base/tooltip';
import { Icon } from '@eui/theme/icon';

export default class SystemAppLauncher extends TemplateComponent {
  constructor() {
    super();
    //this.addEventListener('click', this);
  }

  static get components() {
    return {
      // register components here
      'eui-tooltip': Tooltip,
      'eui-icon':Icon
    };
  }

  handleEvent() {
    this.bubble('system:panel', { panel: 'settings-panel' });
  }
}

const style = `
:host {
  display: block;
  cursor: pointer;
  opacity: 0.7;
}
:host(:hover) {
  opacity: 1.0;
}
.system-launcher {
  display: flex;
  gap: var(--space-small, 4px);
  --text: var(--white,#fff);
}
`;

const template = `
  <div class="system-launcher">
      <eui-icon class="launcher-icon" name="app-launcher"></eui-icon>
  </div>
`;

definition('system-app-launcher', {
  style,
  template,
})(SystemAppLauncher);
