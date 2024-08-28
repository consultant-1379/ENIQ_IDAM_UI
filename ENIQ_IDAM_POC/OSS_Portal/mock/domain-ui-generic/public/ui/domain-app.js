import './component.js';

export default class DomainApp extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      .app {
        background-color: darkblue;
        font-family: arial;
        text-align: center;
        color: lightgray;
        padding: 20px;
        height: 100%;
      }
      </style>
      <div class="app">
        <h1>App Generic</h1>
        <domain-component ></domain-component >
      </div>
    `;
  }
}

customElements.define('domain-app', DomainApp);
