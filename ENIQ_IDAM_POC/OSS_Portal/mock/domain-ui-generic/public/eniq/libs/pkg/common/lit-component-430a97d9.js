import { C as Component } from './index-b5c18b0a.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o="?"+e,n=`<${o}>`,l=document,h=(t="")=>l.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l.createTreeWalker(l,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e+y):s+e+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s?s.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1;}r++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i?i.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const R={P:"$lit$",L:e,V:o,I:1,N:C,R:V,D:u,j:P,H:N,O:S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.1");

const supportsScopedRegistry = !!ShadowRoot.prototype.createElement;

const ScopedElementsMixin = Base =>
  class ScopedElements extends Base {
    /**
     * Obtains the component definitions map if specified.
     */
    static get components() {
      return {};
    }

    constructor() {
      super();
      this.registerAll(this.constructor.components);
    }

    /**
     * Getter for the instance of the Custom Element Registry.
     * Override this getter if a new instance of the
     * Custom Element Registry is required for every instance of the component
     * that extends Base.
     */
    get customElementRegistry() {
      return this.constructor.__customElementRegistry;
    }

    /**
     * Setter for the instance of the Custom Element Registry.
     * Override this getter if a new instance of the
     * Custom Element Registry is required for every instance of the component
     * that extends Base.
     * @returns {Object} customElementRegistry
     */
    set customElementRegistry(customElementRegistry) {
      this.constructor.__customElementRegistry = customElementRegistry;
    }

    /**
     * Register a single component to the registry.
     *
     * @function register
     * @param {Object} klass - module of the component to register
     * @param {String} [name] - name of the component to register
     */
    register(klass, name = klass.is) {
      if (name == null) {
        // eslint-disable-next-line no-console
        console.warn('A name for the custom element MUST be specified');
        return;
      }

      const registeredClass = this.customElementRegistry.get(name);
      if (
        registeredClass &&
        supportsScopedRegistry === false &&
        registeredClass === klass
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          `%c The component ${name} is already defined!\n`,
          'background: orange; color: white',
          `Scoped elements use a polyfill from @webcomponents. In order to use scoped element registry you must import the scoped-custom-element-registry\n to the entry point of your project.\n`,
          `See the E-UI SDK documentation for further details`,
        );
        return;
      }
      if (!registeredClass) {
        try {
          const root = supportsScopedRegistry ? this.shadowRoot : window;
          root.customElements.define(name, klass);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(error.message);
        }
      }
    }

    /**
     * Register multiple components to the registry.
     *
     * @function registerAll
     * @param { Object.<string, Object> } components - name:Module for each component to be registered
     */
    registerAll(components) {
      const names = Object.keys(components);
      names.forEach(name => {
        this.register(components[name], name);
      });
    }

    /**
     * Get the shadowRoot options. This is called from Base when attaching the
     * shadow to the component. This determines if scoped Custom Element Registry
     * is supported.
     * If it is supported, customElements attribute is set in the shadowRoot,
     * otherwise the shadowRoot is unchanged.
     *
     * @function shadowRootOptions
     * @returns {Object} - { customElements: customElementRegistry } || {}
     */
    shadowRootOptions() {
      if (!this.customElementRegistry) {
        this.customElementRegistry = supportsScopedRegistry
          ? new CustomElementRegistry()
          : customElements;
      }
      return supportsScopedRegistry
        ? { customElements: this.customElementRegistry }
        : {};
    }

    /**
     * Get the render options. This is called from Base when rendering to
     * the DOM using lit-html's render function. It sets the option of creationScope. This
     * determines the scope lit-html uses to create an element. This value defaults to document.
     * If scoped Custom Element Registry is supported the scope should be the shadowRoot.
     *
     * @function renderOptions
     * @returns {Object} - { creationScope: shadowRoot } || {}
     */
    renderOptions() {
      return supportsScopedRegistry ? { creationScope: this.shadowRoot } : {};
    }

    /**
     * Convenience method to perform the imperative creation of elements. If scoped Custom Element Registry
     * is supported, elements are created on the shadowRoot, otherwise they are created on the document.
     *
     * @function createElement
     * @param {String} tagName - name of the element to create.
     * @returns Node
     */
    createElement(tagName) {
      const root = supportsScopedRegistry ? this.shadowRoot : document;
      return root.createElement(tagName);
    }
  };

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

// Allow users to add the renderer mixin on top of a custom base
const LitMixin = Base =>
  class LitComponent extends Base {
    static registerComponents(components) {
      if (super.registerComponents) {
        super.registerComponents(components);
      } else {
        /* eslint-disable-next-line no-console */
        console.error('registerComponents function not defined');
      }
    }

    constructor() {
      super();
      if (!this.shadowRoot) {
        this.attachShadow({
          mode: 'open',
          ...this.shadowRootOptions?.(),
        });
      }
      this.firstRender = true;
      if (this.constructor.style) {
        this._litStyle = $`<style>${this.constructor.style}</style>`;
      }
    }

    /**
     * @protected
     * @function executeRender
     * @description Executes a render on the component using the lit renderer
     */
    executeRender() {
      if (!this.render) {
        throw new Error('render callback not found');
      }
      let result = this.render();
      if (this._litStyle) {
        result = $`
          ${this._litStyle}
          ${result}
        `;
      }

      // Render into the DOM
      x(result, this.shadowRoot, this?.renderOptions());

      if (this.firstRender) {
        this.firstRender = false;
        this.didUpgrade();
      }
    }
  };
class LitComponent extends ScopedElementsMixin(LitMixin(Component)) {}

export { $, LitComponent as L, R, b, w };
