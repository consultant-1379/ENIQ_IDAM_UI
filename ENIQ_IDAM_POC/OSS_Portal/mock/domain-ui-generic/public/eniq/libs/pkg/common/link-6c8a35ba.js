import { L as LitComponent, $ } from './lit-component-430a97d9.js';
import { l } from './if-defined-fd12e107.js';
import { d as definition } from './index-b5c18b0a.js';

var style = ":host {\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  display: inline;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([subtle]) a {\n  color: var(--text, #242424);\n  text-decoration: none;\n  border-bottom: 1px dashed var(--text, #242424);\n}\n\n:host([subtle]) a:hover {\n  border-bottom: 1px solid var(--blue, #1174e6);\n}\n\na {\n  text-decoration: none;\n  color: var(--link-blue, #0069c2);\n}\n\na:focus-visible {\n  outline: var(--purple-59, #a56ebe) solid 2px;\n}\n\na:hover {\n  text-decoration: underline;\n}\n";

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
 * @property {String} href - link address.
 * @property {Boolean} subtle - display the link with subtle styling.
 */
class Link extends LitComponent {
  render() {
    return $`
      <a href=${this.href} target=${l(this.target)}>
        <slot></slot>
      </a>
    `;
  }
}

definition('eui-link', {
  style,
  props: {
    href: { attribute: true, type: String, default: '' },
    subtle: { attribute: true, type: Boolean, default: false },
    target: { attribute: true, type: String },
  },
})(Link);

export { Link as L };
