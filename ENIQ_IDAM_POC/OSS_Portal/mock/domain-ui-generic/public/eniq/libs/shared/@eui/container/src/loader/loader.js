import { TemplateComponent, definition } from '../../../../../pkg/@eui/component.js';
import { Icon } from '../../../../../pkg/@eui/theme/icon.js';

export default class Loader extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }
}

const style = `
:host {
  display: inline-block;
  height: 100%;
  width: 100%;
}

:host([hidden]) {
  display: none;
}

#divIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
}

#loaderIcon {
  --icon-size: 32px;
}

@keyframes rotateAnimation {
  0%,100% {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }

  25% {
    -webkit-transform: rotate(300deg);
    transform: rotate(300deg)
  }
}

#loaderIcon {
  display: inline-block;
  animation: rotateAnimation 2s infinite ease-in-out;
  animation-play-state: running;
  transform-origin: 50% 50%;
}

:host([hidden]) #loaderIcon {
  animation-play-state: paused;
}`;

const template = `
  <div id="divIcon">
    <eui-icon name="dial" id='loaderIcon'></eui-icon>
  </div>
`;

definition('eui-container-loader', {
  style,
  template,
})(Loader);
