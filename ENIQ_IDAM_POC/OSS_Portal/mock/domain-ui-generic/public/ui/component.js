export default class Component extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      .comp {
        background-color: darkred;
        font-family: arial;
        text-align: center;
        color: lightgray;
        overflow: hidden;
        height: auto;
        padding: 20px;
      }
      .ta {
        width: 100%;
        height:200px;
        font-size: 24px;
      }
      </style>
      <div class="comp">
        <h2>Component Generic</h2>
        <textarea class="ta"></textarea>
      </div>
    `;
  }

  connectedCallback() {
    fetch('data')
      .then((response) => response.json())
      .then((json) => {
        this.shadowRoot.querySelector('.ta').value = json.data;
      });
  }
}

try {
  customElements.define('domain-component', Component);
} catch (e) {
  console.log('domain-component already registered');
}
