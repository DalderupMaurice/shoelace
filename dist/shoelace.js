var t,e,o=window,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap,s=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}},a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new s(o,t,i)},l=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,d=window,c=d.trustedTypes,h=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},f=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),i=o.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var r;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:p).toAttribute(e,o.type);this._$El=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,i=r._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:p;this._$El=i,this[i]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(t=d.reactiveElementVersions)&&void 0!==t?t:d.reactiveElementVersions=[]).push("1.4.2");var g=window,v=g.trustedTypes,y=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,_="?"+w,x=`<${_}>`,$=document,k=(t="")=>$.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,z=/>/g,L=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),D=/'/g,T=/"/g,P=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),M=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),B=new WeakMap,R=$.createTreeWalker($,129,null,!1),H=class{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,n=0;const s=t.length-1,a=this.parts,[l,d]=((t,e)=>{const o=t.length-1,r=[];let i,n=2===e?"<svg>":"",s=C;for(let e=0;e<o;e++){const o=t[e];let a,l,d=-1,c=0;for(;c<o.length&&(s.lastIndex=c,l=s.exec(o),null!==l);)c=s.lastIndex,s===C?"!--"===l[1]?s=S:void 0!==l[1]?s=z:void 0!==l[2]?(P.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=L):void 0!==l[3]&&(s=L):s===L?">"===l[0]?(s=null!=i?i:C,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?L:'"'===l[3]?T:D):s===T||s===D?s=L:s===S||s===z?s=C:(s=L,i=void 0);const h=s===L&&t[e+1].startsWith("/>")?" ":"";n+=s===C?o+x:d>=0?(r.push(a),o.slice(0,d)+"$lit$"+o.slice(d)+w+h):o+w+(-2===d?(r.push(void 0),e):h)}const a=n+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,r]})(t,e);if(this.el=H.createElement(l,o),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=R.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const o=d[n++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?j:"@"===e[1]?q:I})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(P.test(r.tagName)){const t=r.textContent.split(w),e=t.length-1;if(e>0){r.textContent=v?v.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],k()),R.nextNode(),a.push({type:2,index:++i});r.append(t[e],k())}}}else if(8===r.nodeType)if(r.data===_)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(w,t+1));)a.push({type:7,index:i}),t+=w.length-1}i++}}static createElement(t,e){const o=$.createElement("template");return o.innerHTML=t,o}};function F(t,e,o=t,r){var i,n,s,a;if(e===M)return e;let l=void 0!==r?null===(i=o._$Co)||void 0===i?void 0:i[r]:o._$Cl;const d=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,o,r)),void 0!==r?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[r]=l:o._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,r)),e}var N=class{constructor(t,e,o,r){var i;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cm=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),A(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=H.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(o);else{const t=new class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(o,!0);R.currentNode=i;let n=R.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new N(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new W(n,this,t)),this.u.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(n=R.nextNode(),s++)}return i}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}(i,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new H(t)),e}k(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new N(this.O(k()),this.O(k()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},I=class{constructor(t,e,o,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let n=!1;if(void 0===i)t=F(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=F(this,r[o+s],e,s),a===M&&(a=this._$AH[s]),n||(n=!A(a)||a!==this._$AH[s]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},V=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}},K=v?v.emptyScript:"",j=class extends I{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}},q=class extends I{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=F(this,t,e,0))&&void 0!==o?o:U)===M)return;const r=this._$AH,i=t===U&&r!==U||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==U&&(r===U||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}},W=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}},X=g.litHtmlPolyfillSupport;null==X||X(H,N),(null!==(e=g.litHtmlVersions)&&void 0!==e?e:g.litHtmlVersions=[]).push("2.4.0");var Y,J,Z=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var r,i;const n=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=n._$litPart$;if(void 0===s){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=s=new N(e.insertBefore(k(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}};Z.finalized=!0,Z._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:Z});var G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:Z}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,tt=a`
  ${Q}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,et=Object.defineProperty,ot=Object.defineProperties,rt=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,lt=(t,e,o)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,dt=(t,e)=>{for(var o in e||(e={}))st.call(e,o)&&lt(t,o,e[o]);if(nt)for(var o of nt(e))at.call(e,o)&&lt(t,o,e[o]);return t},ct=(t,e)=>ot(t,it(e)),ht=(t,e)=>{var o={};for(var r in t)st.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&nt)for(var r of nt(t))e.indexOf(r)<0&&at.call(t,r)&&(o[r]=t[r]);return o},ut=(t,e,o,r)=>{for(var i,n=r>1?void 0:r?rt(e,o):e,s=t.length-1;s>=0;s--)(i=t[s])&&(n=(r?i(e,o,n):i(n))||n);return r&&n&&et(e,o,n),n},pt=class extends Event{constructor(t){super("formdata"),this.formData=t}},ft=class extends FormData{constructor(t){var e=(...t)=>{super(...t)};t?(e(t),this.form=t,t.dispatchEvent(new pt(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const r=this.getAll(t),i=r.indexOf(o.value);-1!==i&&r.splice(i,1),r.push(e),this.set(t,r)}else super.append(t,e);o.value=e}};function mt(){window.FormData&&!function(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",(t=>{new FormData(t.target),t.preventDefault()})),t.addEventListener("formdata",(()=>e=!0)),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}()&&(window.FormData=ft,window.addEventListener("submit",(t=>{t.defaultPrevented||new FormData(t.target)})))}"complete"===document.readyState?mt():window.addEventListener("DOMContentLoaded",(()=>mt()));var bt=new WeakMap,gt=new WeakMap,vt=new WeakMap,yt=Symbol.for(""),wt=t=>{if((null==t?void 0:t.r)===yt)return null==t?void 0:t._$litStatic$},_t=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:yt}),xt=new Map,$t=(t=>(e,...o)=>{const r=o.length;let i,n;const s=[],a=[];let l,d=0,c=!1;for(;d<r;){for(l=e[d];d<r&&void 0!==(n=o[d],i=wt(n));)l+=i+e[++d],c=!0;a.push(n),s.push(l),d++}if(d===r&&s.push(e[r]),c){const t=s.join("$$lit$$");void 0===(e=xt.get(t))&&(s.raw=s,xt.set(t,e=s)),o=a}return t(e,...o)})(O),kt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function At(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}var Et,Ct=t=>null!=t?t:U
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,St=new Set,zt=new MutationObserver(Pt),Lt=new Map,Dt=document.documentElement.dir||"ltr",Tt=document.documentElement.lang||navigator.language;function Pt(){Dt=document.documentElement.dir||"ltr",Tt=document.documentElement.lang||navigator.language,[...St.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}zt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Ot=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){St.add(this.host)}hostDisconnected(){St.delete(this.host)}dir(){return`${this.host.dir||Dt}`.toLowerCase()}lang(){return`${this.host.lang||Tt}`.toLowerCase()}term(t,...e){var o,r;const i=new Intl.Locale(this.lang()),n=null==i?void 0:i.language.toLowerCase(),s=null!==(r=null===(o=null==i?void 0:i.region)||void 0===o?void 0:o.toLowerCase())&&void 0!==r?r:"",a=Lt.get(`${n}-${s}`),l=Lt.get(n);let d;if(a&&a[t])d=a[t];else if(l&&l[t])d=l[t];else{if(!Et||!Et[t])return console.error(`No translation found for: ${String(t)}`),t;d=Et[t]}return"function"==typeof d?d(...e):d}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}},Mt=class extends Ot{};function Ut(t,e){const o=dt({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:i}=e;if(t in e){const n=t;e.update=function(t){if(t.has(n)){const e=t.get(n),i=this[n];e!==i&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,i))}i.call(this,t)}}}}!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Lt.has(e)?Lt.set(e,Object.assign(Object.assign({},Lt.get(e)),t)):Lt.set(e,t),Et||(Et=t)})),Pt()}({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var Bt=1,Rt=2,Ht=t=>(...e)=>({_$litDirective$:t,values:e}),Ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Nt=Ht(class extends Ft{constructor(t){var e;if(super(t),t.type!==Bt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const i=t.element.classList;this.nt.forEach((t=>{t in e||(i.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(o?(i.add(t),this.nt.add(t)):(i.remove(t),this.nt.delete(t)))}return M}}),It=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),Vt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?ct(dt({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function Kt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):Vt(t,e)}function jt(t){return Kt(ct(dt({},t),{state:!0}))}var qt;function Wt(t,e){return(({finisher:t,descriptor:e})=>(o,r)=>{var i;if(void 0===r){const r=null!==(i=o.originalKey)&&void 0!==i?i:o.key,n=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:ct(dt({},o),{key:r});return null!=t&&(n.finisher=function(e){t(e,r)}),n}{const i=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(i,r)}})({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}null===(qt=window.HTMLSlotElement)||void 0===qt||qt.prototype.assignedElements;var Xt=class extends Z{emit(t,e){const o=new CustomEvent(t,dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}};ut([Kt()],Xt.prototype,"dir",2),ut([Kt()],Xt.prototype,"lang",2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Yt=class extends Xt{constructor(){super(...arguments),this.formSubmitController=new class{constructor(t,e){(this.host=t).addController(this),this.options=dt({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(bt.has(this.form)?bt.get(this.form).add(this.host):bt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),vt.has(this.form)||(vt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var t;this.form&&(null==(t=bt.get(this.form))||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),vt.has(this.form)&&(this.form.reportValidity=vt.get(this.form),vt.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var t;const e=this.host,o=Boolean(gt.get(e)),r=Boolean(e.invalid),i=Boolean(e.required);(null==(t=this.form)?void 0:t.noValidate)?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",r),e.toggleAttribute("data-valid",!r),e.toggleAttribute("data-user-invalid",r&&o),e.toggleAttribute("data-user-valid",!r&&o))}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host);e||"string"!=typeof o||void 0===r||(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=bt.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){gt.set(t,e),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))})),this.form.append(o),o.click(),o.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}}(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new kt(this,"[default]","prefix","suffix"),this.localize=new Mt(this),this.hasFocus=!1,this.invalid=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this),"reset"===this.type&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const t=this.isLink(),e=t?_t`a`:_t`button`;return $t`
      <${e}
        part="base"
        class=${Nt({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Ct(t?void 0:this.disabled)}
        type=${Ct(t?void 0:this.type)}
        name=${Ct(t?void 0:this.name)}
        value=${Ct(t?void 0:this.value)}
        href=${Ct(t?this.href:void 0)}
        target=${Ct(t?this.target:void 0)}
        download=${Ct(t?this.download:void 0)}
        rel=${Ct(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ct(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?$t` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?$t`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};Yt.styles=tt,ut([Wt(".button")],Yt.prototype,"button",2),ut([jt()],Yt.prototype,"hasFocus",2),ut([jt()],Yt.prototype,"invalid",2),ut([Kt({reflect:!0})],Yt.prototype,"variant",2),ut([Kt({reflect:!0})],Yt.prototype,"size",2),ut([Kt({type:Boolean,reflect:!0})],Yt.prototype,"caret",2),ut([Kt({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2),ut([Kt({type:Boolean,reflect:!0})],Yt.prototype,"loading",2),ut([Kt({type:Boolean,reflect:!0})],Yt.prototype,"outline",2),ut([Kt({type:Boolean,reflect:!0})],Yt.prototype,"pill",2),ut([Kt({type:Boolean,reflect:!0})],Yt.prototype,"circle",2),ut([Kt()],Yt.prototype,"type",2),ut([Kt()],Yt.prototype,"name",2),ut([Kt()],Yt.prototype,"value",2),ut([Kt()],Yt.prototype,"href",2),ut([Kt()],Yt.prototype,"target",2),ut([Kt()],Yt.prototype,"download",2),ut([Kt()],Yt.prototype,"form",2),ut([Kt({attribute:"formaction"})],Yt.prototype,"formAction",2),ut([Kt({attribute:"formenctype"})],Yt.prototype,"formEnctype",2),ut([Kt({attribute:"formmethod"})],Yt.prototype,"formMethod",2),ut([Kt({attribute:"formnovalidate",type:Boolean})],Yt.prototype,"formNoValidate",2),ut([Kt({attribute:"formtarget"})],Yt.prototype,"formTarget",2),ut([Ut("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1),Yt=ut([It("sl-button")],Yt);var Jt=a`
  ${Q}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Zt=class extends Xt{constructor(){super(...arguments),this.localize=new Mt(this)}render(){return O`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zt.styles=Jt,Zt=ut([It("sl-spinner")],Zt);var Gt="";function Qt(t){Gt=t}var te={name:"default",resolver:t=>`${function(){if(!Gt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)Qt(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),Qt(o.split("/").slice(0,-1).join("/"))}}return Gt.replace(/\/$/,"")}()}/assets/icons/${t}.svg`},ee={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',x:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},oe=[te,{name:"system",resolver:t=>t in ee?`data:image/svg+xml,${encodeURIComponent(ee[t])}`:""}],re=[];function ie(t){return oe.find((e=>e.name===t))}function ne(t,e){!function(t){oe=oe.filter((e=>e.name!==t))}(t),oe.push({name:t,resolver:e.resolver,mutator:e.mutator}),re.forEach((e=>{e.library===t&&e.redraw()}))}var se=new Map;var ae=new Map;async function le(t){if(ae.has(t))return ae.get(t);const e=await function(t,e="cors"){if(se.has(t))return se.get(t);const o=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return se.set(t,o),o}(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const r=t.firstElementChild;o.svg="svg"===(null==r?void 0:r.tagName.toLowerCase())?r.outerHTML:""}return ae.set(t,o),o}var de=a`
  ${Q}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ce=class extends Ft{constructor(t){if(super(t),this.it=U,t.type!==Rt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this._t=void 0,this.it=t;if(t===M)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ce.directiveName="unsafeHTML",ce.resultType=1;var he=class extends ce{};he.directiveName="unsafeSVG",he.resultType=2;var ue,pe=Ht(he),fe=class extends Xt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,re.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,re=re.filter((e=>e!==t))}getUrl(){const t=ie(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=ie(this.library),o=this.getUrl();if(ue||(ue=new DOMParser),o)try{const r=await le(o);if(o!==this.getUrl())return;if(r.ok){const o=ue.parseFromString(r.svg,"text/html").body.querySelector("svg");null!==o?(null==(t=null==e?void 0:e.mutator)||t.call(e,o),this.svg=o.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch(t){this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return O` ${pe(this.svg)} `}};fe.styles=de,ut([jt()],fe.prototype,"svg",2),ut([Kt({reflect:!0})],fe.prototype,"name",2),ut([Kt()],fe.prototype,"src",2),ut([Kt()],fe.prototype,"label",2),ut([Kt({reflect:!0})],fe.prototype,"library",2),ut([Ut("label")],fe.prototype,"handleLabelChange",1),ut([Ut("name"),Ut("src"),Ut("library")],fe.prototype,"setIcon",1),fe=ut([It("sl-icon")],fe);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var me=a`
  ${Q}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function be(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}function ge(t){var e,o;const r=[];!function t(e){e instanceof HTMLElement&&(r.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(t);return{start:null!=(e=r.find((t=>be(t))))?e:null,end:null!=(o=r.reverse().find((t=>be(t))))?o:null}}var ve=new Set;function ye(t){ve.add(t),document.body.classList.add("sl-scroll-lock")}function we(t){ve.delete(t),0===ve.size&&document.body.classList.remove("sl-scroll-lock")}function _e(t,e,o="vertical",r="smooth"){const i=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),n=i.top+e.scrollTop,s=i.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,c=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(s<a?e.scrollTo({left:s,behavior:r}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:r})),"vertical"!==o&&"both"!==o||(n<d?e.scrollTo({top:n,behavior:r}):n+t.clientHeight>c&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:r}))}function xe(t,e){return new Promise((o=>{t.addEventListener(e,(function r(i){i.target===t&&(t.removeEventListener(e,r),o())}))}))}function $e(t,e,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,ct(dt({},o),{duration:ke()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})}))}function ke(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ae(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}var Ee=new Map,Ce=new WeakMap;function Se(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function ze(t,e){Ee.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Le(t,e,o){const r=Ce.get(t);if(null==r?void 0:r[e])return Se(r[e],o.dir);const i=Ee.get(e);return i?Se(i,o.dir):{keyframes:[],options:{duration:0}}}var De=class extends Xt{constructor(){super(...arguments),this.localize=new Mt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(t){var e;if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,o;const r=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(o=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:o.activeElement:document.activeElement;this.containingElement&&(null==r?void 0:r.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){_e(t.target,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){if("Escape"===t.key&&this.open)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.defaultSlot.assignedElements({flatten:!0}),r=o[0],i=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),o.length>0&&requestAnimationFrame((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(r),r.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(i),i.focus())})));const n=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!n.includes(t.key)&&e.typeToSelect(t)}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((t=>ge(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ae(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Le(this,"dropdown.show",{dir:this.localize.dir()});await $e(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ae(this);const{keyframes:t,options:e}=Le(this,"dropdown.hide",{dir:this.localize.dir()});await $e(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return O`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${Nt({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};De.styles=me,ut([Wt(".dropdown")],De.prototype,"popup",2),ut([Wt(".dropdown__trigger")],De.prototype,"trigger",2),ut([Wt(".dropdown__panel")],De.prototype,"panel",2),ut([Kt({type:Boolean,reflect:!0})],De.prototype,"open",2),ut([Kt({reflect:!0})],De.prototype,"placement",2),ut([Kt({type:Boolean,reflect:!0})],De.prototype,"disabled",2),ut([Kt({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],De.prototype,"stayOpenOnSelect",2),ut([Kt({attribute:!1})],De.prototype,"containingElement",2),ut([Kt({type:Number})],De.prototype,"distance",2),ut([Kt({type:Number})],De.prototype,"skidding",2),ut([Kt({type:Boolean})],De.prototype,"hoist",2),ut([Ut("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1),De=ut([It("sl-dropdown")],De),ze("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}}),ze("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var Te=a`
  ${Q}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Pe(t){return t.split("-")[0]}function Oe(t){return t.split("-")[1]}function Me(t){return["top","bottom"].includes(Pe(t))?"x":"y"}function Ue(t){return"y"===t?"height":"width"}function Be(t,e,o){let{reference:r,floating:i}=t;const n=r.x+r.width/2-i.width/2,s=r.y+r.height/2-i.height/2,a=Me(e),l=Ue(a),d=r[l]/2-i[l]/2,c="x"===a;let h;switch(Pe(e)){case"top":h={x:n,y:r.y-i.height};break;case"bottom":h={x:n,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:s};break;case"left":h={x:r.x-i.width,y:s};break;default:h={x:r.x,y:r.y}}switch(Oe(e)){case"start":h[a]-=d*(o&&c?-1:1);break;case"end":h[a]+=d*(o&&c?-1:1)}return h}function Re(t){return"number"!=typeof t?function(t){return dt({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function He(t){return ct(dt({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function Fe(t,e){var o;void 0===e&&(e={});const{x:r,y:i,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=e,f=Re(p),m=a[u?"floating"===h?"reference":"floating":h],b=He(await n.getClippingRect({element:null==(o=await(null==n.isElement?void 0:n.isElement(m)))||o?m:m.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(a.floating)),boundary:d,rootBoundary:c,strategy:l})),g=He(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===h?ct(dt({},s.floating),{x:r,y:i}):s.reference,offsetParent:await(null==n.getOffsetParent?void 0:n.getOffsetParent(a.floating)),strategy:l}):s[h]);return{top:b.top-g.top+f.top,bottom:g.bottom-b.bottom+f.bottom,left:b.left-g.left+f.left,right:g.right-b.right+f.right}}var Ne=Math.min,Ie=Math.max;function Ve(t,e,o){return Ie(t,Ne(e,o))}var Ke={left:"right",right:"left",bottom:"top",top:"bottom"};function je(t){return t.replace(/left|right|bottom|top/g,(t=>Ke[t]))}var qe={start:"end",end:"start"};function We(t){return t.replace(/start|end/g,(t=>qe[t]))}["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]);var Xe=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:r,middlewareData:i,rects:n,initialPlacement:s,platform:a,elements:l}=e,d=t,{mainAxis:c=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",flipAlignment:f=!0}=d,m=ht(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),b=Pe(r),g=u||(b!==s&&f?function(t){const e=je(t);return[We(t),e,We(e)]}(s):[je(s)]),v=[s,...g],y=await Fe(e,m),w=[];let _=(null==(o=i.flip)?void 0:o.overflows)||[];if(c&&w.push(y[b]),h){const{main:t,cross:e}=function(t,e,o){void 0===o&&(o=!1);const r=Oe(t),i=Me(t),n=Ue(i);let s="x"===i?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=je(s)),{main:s,cross:je(s)}}(r,n,await(null==a.isRTL?void 0:a.isRTL(l.floating)));w.push(y[t],y[e])}if(_=[..._,{placement:r,overflows:w}],!w.every((t=>t<=0))){var x,$;const t=(null!=(x=null==($=i.flip)?void 0:$.index)?x:0)+1,e=v[t];if(e)return{data:{index:t,overflows:_},reset:{placement:e}};let o="bottom";switch(p){case"bestFit":{var k;const t=null==(k=_.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:k[0].placement;t&&(o=t);break}case"initialPlacement":o=s}if(r!==o)return{reset:{placement:o}}}return{}}}},Ye=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:r}=e,i=await async function(t,e){const{placement:o,platform:r,elements:i}=t,n=await(null==r.isRTL?void 0:r.isRTL(i.floating)),s=Pe(o),a=Oe(o),l="x"===Me(o),d=["left","top"].includes(s)?-1:1,c=n&&l?-1:1,h="function"==typeof e?e(t):e;let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:dt({mainAxis:0,crossAxis:0,alignmentAxis:null},h);return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*c,y:u*d}:{x:u*d,y:p*c}}(e,t);return{x:o+i.x,y:r+i.y,data:i}}}};var Je=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:r,platform:i,elements:n}=e,s=t,{apply:a=(()=>{})}=s,l=ht(s,["apply"]),d=await Fe(e,l),c=Pe(o),h=Oe(o);let u,p;"top"===c||"bottom"===c?(u=c,p=h===(await(null==i.isRTL?void 0:i.isRTL(n.floating))?"start":"end")?"left":"right"):(p=c,u="end"===h?"top":"bottom");const f=Ie(d.left,0),m=Ie(d.right,0),b=Ie(d.top,0),g=Ie(d.bottom,0),v={availableHeight:r.floating.height-(["left","right"].includes(o)?2*(0!==b||0!==g?b+g:Ie(d.top,d.bottom)):d[u]),availableWidth:r.floating.width-(["top","bottom"].includes(o)?2*(0!==f||0!==m?f+m:Ie(d.left,d.right)):d[p])};await a(dt(dt({},e),v));const y=await i.getDimensions(n.floating);return r.floating.width!==y.width||r.floating.height!==y.height?{reset:{rects:!0}}:{}}}};function Ze(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function Ge(t){if(null==t)return window;if(!Ze(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function Qe(t){return Ge(t).getComputedStyle(t)}function to(t){return Ze(t)?"":t?(t.nodeName||"").toLowerCase():""}function eo(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function oo(t){return t instanceof Ge(t).HTMLElement}function ro(t){return t instanceof Ge(t).Element}function io(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Ge(t).ShadowRoot||t instanceof ShadowRoot)}function no(t){const{overflow:e,overflowX:o,overflowY:r,display:i}=Qe(t);return/auto|scroll|overlay|hidden/.test(e+r+o)&&!["inline","contents"].includes(i)}function so(t){return["table","td","th"].includes(to(t))}function ao(t){const e=/firefox/i.test(eo()),o=Qe(t),r=o.backdropFilter||o.WebkitBackdropFilter;return"none"!==o.transform||"none"!==o.perspective||!!r&&"none"!==r||e&&"filter"===o.willChange||e&&!!o.filter&&"none"!==o.filter||["transform","perspective"].some((t=>o.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=o.contain;return null!=e&&e.includes(t)}))}function lo(){return!/^((?!chrome|android).)*safari/i.test(eo())}function co(t){return["html","body","#document"].includes(to(t))}var ho=Math.min,uo=Math.max,po=Math.round;function fo(t,e,o){var r,i,n,s;void 0===e&&(e=!1),void 0===o&&(o=!1);const a=t.getBoundingClientRect();let l=1,d=1;e&&oo(t)&&(l=t.offsetWidth>0&&po(a.width)/t.offsetWidth||1,d=t.offsetHeight>0&&po(a.height)/t.offsetHeight||1);const c=ro(t)?Ge(t):window,h=!lo()&&o,u=(a.left+(h&&null!=(r=null==(i=c.visualViewport)?void 0:i.offsetLeft)?r:0))/l,p=(a.top+(h&&null!=(n=null==(s=c.visualViewport)?void 0:s.offsetTop)?n:0))/d,f=a.width/l,m=a.height/d;return{width:f,height:m,top:p,right:u+f,bottom:p+m,left:u,x:u,y:p}}function mo(t){return(e=t,(e instanceof Ge(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function bo(t){return ro(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function go(t){return fo(mo(t)).left+bo(t).scrollLeft}function vo(t,e,o){const r=oo(e),i=mo(e),n=fo(t,r&&function(t){const e=fo(t);return po(e.width)!==t.offsetWidth||po(e.height)!==t.offsetHeight}(e),"fixed"===o);let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(r||!r&&"fixed"!==o)if(("body"!==to(e)||no(i))&&(s=bo(e)),oo(e)){const t=fo(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=go(i));return{x:n.left+s.scrollLeft-a.x,y:n.top+s.scrollTop-a.y,width:n.width,height:n.height}}function yo(t){if("html"===to(t))return t;const e=t.assignedSlot||t.parentNode||(io(t)?t.host:null)||mo(t);return io(e)?e.host:e}function wo(t){return oo(t)&&"fixed"!==Qe(t).position?t.offsetParent:null}function _o(t){const e=Ge(t);let o=wo(t);for(;o&&so(o)&&"static"===Qe(o).position;)o=wo(o);return o&&("html"===to(o)||"body"===to(o)&&"static"===Qe(o).position&&!ao(o))?e:o||function(t){let e=yo(t);for(;oo(e)&&!co(e);){if(ao(e))return e;e=yo(e)}return null}(t)||e}function xo(t){const e=yo(t);return co(e)?t.ownerDocument.body:oo(e)&&no(e)?e:xo(e)}function $o(t,e){var o;void 0===e&&(e=[]);const r=xo(t),i=r===(null==(o=t.ownerDocument)?void 0:o.body),n=Ge(r),s=i?[n].concat(n.visualViewport||[],no(r)?r:[]):r,a=e.concat(s);return i?a:a.concat($o(s))}function ko(t,e,o){return"viewport"===e?He(function(t,e){const o=Ge(t),r=mo(t),i=o.visualViewport;let n=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){n=i.width,s=i.height;const t=lo();(t||!t&&"fixed"===e)&&(a=i.offsetLeft,l=i.offsetTop)}return{width:n,height:s,x:a,y:l}}(t,o)):ro(e)?function(t,e){const o=fo(t,!1,"fixed"===e),r=o.top+t.clientTop,i=o.left+t.clientLeft;return{top:r,left:i,x:i,y:r,right:i+t.clientWidth,bottom:r+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,o):He(function(t){var e;const o=mo(t),r=bo(t),i=null==(e=t.ownerDocument)?void 0:e.body,n=uo(o.scrollWidth,o.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=uo(o.scrollHeight,o.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let a=-r.scrollLeft+go(t);const l=-r.scrollTop;return"rtl"===Qe(i||o).direction&&(a+=uo(o.clientWidth,i?i.clientWidth:0)-n),{width:n,height:s,x:a,y:l}}(mo(t)))}var Ao={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:r,strategy:i}=t;const n="clippingAncestors"===o?function(t){let e=$o(t).filter((t=>ro(t)&&"body"!==to(t))),o=null;const r="fixed"===Qe(t).position;let i=r?yo(t):t;for(;ro(i)&&!co(i);){const t=Qe(i),n=ao(i);(r?n||o:n||"static"!==t.position||!o||!["absolute","fixed"].includes(o.position))?o=t:e=e.filter((t=>t!==i)),i=yo(i)}return e}(e):[].concat(o),s=[...n,r],a=s[0],l=s.reduce(((t,o)=>{const r=ko(e,o,i);return t.top=uo(r.top,t.top),t.right=ho(r.right,t.right),t.bottom=ho(r.bottom,t.bottom),t.left=uo(r.left,t.left),t}),ko(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:r}=t;const i=oo(o),n=mo(o);if(o===n)return e;let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==to(o)||no(n))&&(s=bo(o)),oo(o))){const t=fo(o,!0);a.x=t.x+o.clientLeft,a.y=t.y+o.clientTop}return ct(dt({},e),{x:e.x-s.scrollLeft+a.x,y:e.y-s.scrollTop+a.y})},isElement:ro,getDimensions:function(t){if(oo(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=fo(t);return{width:e.width,height:e.height}},getOffsetParent:_o,getDocumentElement:mo,async getElementRects(t){let{reference:e,floating:o,strategy:r}=t;const i=this.getOffsetParent||_o,n=this.getDimensions;return{reference:vo(e,await i(o),r),floating:dt({x:0,y:0},await n(o))}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===Qe(t).direction};var Eo=(t,e,o)=>(async(t,e,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:s}=o,a=n.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(e));let d=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:h}=Be(d,r,l),u=r,p={},f=0;for(let o=0;o<a.length;o++){const{name:n,fn:m}=a[o],{x:b,y:g,data:v,reset:y}=await m({x:c,y:h,initialPlacement:r,placement:u,strategy:i,middlewareData:p,rects:d,platform:s,elements:{reference:t,floating:e}});c=null!=b?b:c,h=null!=g?g:h,p=ct(dt({},p),{[n]:dt(dt({},p[n]),v)}),y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(d=!0===y.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),({x:c,y:h}=Be(d,u,l))),o=-1)}return{x:c,y:h,placement:u,strategy:i,middlewareData:p}})(t,e,dt({platform:Ao},o)),Co=class extends Xt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=function(t,e,o,r){void 0===r&&(r={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=!0,animationFrame:a=!1}=r,l=i&&!a,d=l||n?[...ro(t)?$o(t):t.contextElement?$o(t.contextElement):[],...$o(e)]:[];d.forEach((t=>{l&&t.addEventListener("scroll",o,{passive:!0}),n&&t.addEventListener("resize",o)}));let c,h=null;if(s){let r=!0;h=new ResizeObserver((()=>{r||o(),r=!1})),ro(t)&&!a&&h.observe(t),ro(t)||!t.contextElement||a||h.observe(t.contextElement),h.observe(e)}let u=a?fo(t):null;return a&&function e(){const r=fo(t);!u||r.x===u.x&&r.y===u.y&&r.width===u.width&&r.height===u.height||o(),u=r,c=requestAnimationFrame(e)}(),o(),()=>{var t;d.forEach((t=>{l&&t.removeEventListener("scroll",o),n&&t.removeEventListener("resize",o)})),null==(t=h)||t.disconnect(),h=null,a&&cancelAnimationFrame(c)}}(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ye({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Je({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Xe({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:r,placement:i}=e,n=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}}}=n,d=ht(n,["mainAxis","crossAxis","limiter"]),c={x:o,y:r},h=await Fe(e,d),u=Me(Pe(i)),p=function(t){return"x"===t?"y":"x"}(u);let f=c[u],m=c[p];if(s){const t="y"===u?"bottom":"right";f=Ve(f+h["y"===u?"top":"left"],f,f-h[t])}if(a){const t="y"===p?"bottom":"right";m=Ve(m+h["y"===p?"top":"left"],m,m-h[t])}const b=l.fn(ct(dt({},e),{[u]:f,[p]:m}));return ct(dt({},b),{data:{x:b.x-o,y:b.y-r}})}}}({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Je({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:r=0}=null!=t?t:{},{x:i,y:n,placement:s,rects:a,platform:l}=e;if(null==o)return{};const d=Re(r),c={x:i,y:n},h=Me(s),u=Oe(s),p=Ue(h),f=await l.getDimensions(o),m="y"===h?"top":"left",b="y"===h?"bottom":"right",g=a.reference[p]+a.reference[h]-c[h]-a.floating[p],v=c[h]-a.reference[h],y=await(null==l.getOffsetParent?void 0:l.getOffsetParent(o));let w=y?"y"===h?y.clientHeight||0:y.clientWidth||0:0;0===w&&(w=a.floating[p]);const _=g/2-v/2,x=d[m],$=w-f[p]-d[b],k=w/2-f[p]/2+_,A=Ve(x,k,$),E=("start"===u?d[m]:d[b])>0&&k!==A&&a.reference[p]<=a.floating[p];return{[h]:c[h]-(E?k<x?x-k:$-k:0),data:{[h]:A,centerOffset:k-A}}}}))({element:this.arrowEl,padding:this.arrowPadding})),Eo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy}).then((({x:t,y:e,middlewareData:o,placement:r})=>{const i="rtl"===getComputedStyle(this).direction,n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let r="",s="",a="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=i?o:"",l=i?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=i?"":o,l=i?o:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",r="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:r,right:s,bottom:a,left:l,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}})),this.emit("sl-reposition")}render(){return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Nt({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?O`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Co.styles=Te,ut([Wt(".popup")],Co.prototype,"popup",2),ut([Wt(".popup__arrow")],Co.prototype,"arrowEl",2),ut([Kt()],Co.prototype,"anchor",2),ut([Kt({type:Boolean,reflect:!0})],Co.prototype,"active",2),ut([Kt({reflect:!0})],Co.prototype,"placement",2),ut([Kt({reflect:!0})],Co.prototype,"strategy",2),ut([Kt({type:Number})],Co.prototype,"distance",2),ut([Kt({type:Number})],Co.prototype,"skidding",2),ut([Kt({type:Boolean})],Co.prototype,"arrow",2),ut([Kt({attribute:"arrow-placement"})],Co.prototype,"arrowPlacement",2),ut([Kt({attribute:"arrow-padding",type:Number})],Co.prototype,"arrowPadding",2),ut([Kt({type:Boolean})],Co.prototype,"flip",2),ut([Kt({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],Co.prototype,"flipFallbackPlacements",2),ut([Kt({attribute:"flip-fallback-strategy"})],Co.prototype,"flipFallbackStrategy",2),ut([Kt({type:Object})],Co.prototype,"flipBoundary",2),ut([Kt({attribute:"flip-padding",type:Number})],Co.prototype,"flipPadding",2),ut([Kt({type:Boolean})],Co.prototype,"shift",2),ut([Kt({type:Object})],Co.prototype,"shiftBoundary",2),ut([Kt({attribute:"shift-padding",type:Number})],Co.prototype,"shiftPadding",2),ut([Kt({attribute:"auto-size"})],Co.prototype,"autoSize",2),ut([Kt()],Co.prototype,"sync",2),ut([Kt({type:Object})],Co.prototype,"autoSizeBoundary",2),ut([Kt({attribute:"auto-size-padding",type:Number})],Co.prototype,"autoSizePadding",2),Co=ut([It("sl-popup")],Co);var So=a`
  ${Q}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,zo=class extends Xt{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>"menuitem"===e.getAttribute("role")&&!(!t.includeDisabled&&e.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1}),o=t.disabled?e[0]:t;e.forEach((t=>{t.setAttribute("tabindex",t===o?"0":"-1")}))}typeToSelect(t){var e;const o=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of o){if(At(null==(e=t.shadowRoot)?void 0:e.querySelector("slot:not([name])")).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(t),t.focus();break}}}handleClick(t){const e=t.target.closest("sl-menu-item");!1===(null==e?void 0:e.disabled)&&this.emit("sl-select",{detail:{item:e}})}handleKeyDown(t){if("Enter"===t.key){const e=this.getCurrentItem();t.preventDefault(),null==e||e.click()}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem();let r=o?e.indexOf(o):0;if(e.length>0)return t.preventDefault(),"ArrowDown"===t.key?r++:"ArrowUp"===t.key?r--:"Home"===t.key?r=0:"End"===t.key&&(r=e.length-1),r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.setCurrentItem(e[r]),void e[r].focus()}this.typeToSelect(t)}handleMouseDown(t){const e=t.target;"menuitem"===e.getAttribute("role")&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return O`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};zo.styles=So,ut([Wt("slot")],zo.prototype,"defaultSlot",2),zo=ut([It("sl-menu")],zo);var Lo=[],Do=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Lo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Lo=Lo.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Lo[Lo.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=ge(this.element),o="forward"===this.tabDirection?t:e;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}},To=a`
  ${Q}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Po=class extends Xt{constructor(){super(...arguments),this.hasSlotController=new kt(this,"footer"),this.localize=new Mt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Do(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ye(this))}disconnectedCallback(){super.disconnectedCallback(),we(this)}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Le(this,"dialog.denyClose",{dir:this.localize.dir()});$e(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ye(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ae(this.dialog),Ae(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Le(this,"dialog.show",{dir:this.localize.dir()}),o=Le(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([$e(this.panel,e.keyframes,e.options),$e(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ae(this.dialog),Ae(this.overlay)]);const t=Le(this,"dialog.hide",{dir:this.localize.dir()}),e=Le(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([$e(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),$e(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,we(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}render(){return O`
      <div
        part="base"
        class=${Nt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ct(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ct(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":O`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Po.styles=To,ut([Wt(".dialog")],Po.prototype,"dialog",2),ut([Wt(".dialog__panel")],Po.prototype,"panel",2),ut([Wt(".dialog__overlay")],Po.prototype,"overlay",2),ut([Kt({type:Boolean,reflect:!0})],Po.prototype,"open",2),ut([Kt({reflect:!0})],Po.prototype,"label",2),ut([Kt({attribute:"no-header",type:Boolean,reflect:!0})],Po.prototype,"noHeader",2),ut([Ut("open",{waitUntilFirstUpdate:!0})],Po.prototype,"handleOpenChange",1),Po=ut([It("sl-dialog")],Po),ze("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),ze("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),ze("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),ze("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ze("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Oo=a`
  ${Q}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Mo=class extends Xt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?_t`a`:_t`button`;return $t`
      <${e}
        part="base"
        class=${Nt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Ct(t?void 0:this.disabled)}
        type=${Ct(t?void 0:"button")}
        href=${Ct(t?this.href:void 0)}
        target=${Ct(t?this.target:void 0)}
        download=${Ct(t?this.download:void 0)}
        rel=${Ct(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ct(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Ct(this.name)}
          library=${Ct(this.library)}
          src=${Ct(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Mo.styles=Oo,ut([jt()],Mo.prototype,"hasFocus",2),ut([Wt(".icon-button")],Mo.prototype,"button",2),ut([Kt()],Mo.prototype,"name",2),ut([Kt()],Mo.prototype,"library",2),ut([Kt()],Mo.prototype,"src",2),ut([Kt()],Mo.prototype,"href",2),ut([Kt()],Mo.prototype,"target",2),ut([Kt()],Mo.prototype,"download",2),ut([Kt()],Mo.prototype,"label",2),ut([Kt({type:Boolean,reflect:!0})],Mo.prototype,"disabled",2),Mo=ut([It("sl-icon-button")],Mo);var Uo=a`
  ${Q}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Bo=class extends Xt{constructor(){super(...arguments),this.hasSlotController=new kt(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${Nt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};Bo.styles=Uo,Bo=ut([It("sl-card")],Bo);var Ro=a`
  ${Q}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    transition: var(--sl-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Ho(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Fo=class extends Xt{constructor(){super(...arguments),this.hasSlotController=new kt(this,"footer"),this.localize=new Mt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Do(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.addOpenListeners(),this.modal.activate(),ye(this))}disconnectedCallback(){super.disconnectedCallback(),we(this)}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Le(this,"drawer.denyClose",{dir:this.localize.dir()});$e(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ye(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ae(this.drawer),Ae(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Le(this,`drawer.show${Ho(this.placement)}`,{dir:this.localize.dir()}),o=Le(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([$e(this.panel,e.keyframes,e.options),$e(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),we(this),await Promise.all([Ae(this.drawer),Ae(this.overlay)]);const t=Le(this,`drawer.hide${Ho(this.placement)}`,{dir:this.localize.dir()}),e=Le(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([$e(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),$e(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}render(){return O`
      <div
        part="base"
        class=${Nt({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ct(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ct(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":O`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="drawer__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click=${()=>this.requestClose("close-button")}
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Fo.styles=Ro,ut([Wt(".drawer")],Fo.prototype,"drawer",2),ut([Wt(".drawer__panel")],Fo.prototype,"panel",2),ut([Wt(".drawer__overlay")],Fo.prototype,"overlay",2),ut([Kt({type:Boolean,reflect:!0})],Fo.prototype,"open",2),ut([Kt({reflect:!0})],Fo.prototype,"label",2),ut([Kt({reflect:!0})],Fo.prototype,"placement",2),ut([Kt({type:Boolean,reflect:!0})],Fo.prototype,"contained",2),ut([Kt({attribute:"no-header",type:Boolean,reflect:!0})],Fo.prototype,"noHeader",2),ut([Ut("open",{waitUntilFirstUpdate:!0})],Fo.prototype,"handleOpenChange",1),Fo=ut([It("sl-drawer")],Fo),ze("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}}),ze("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}}),ze("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}}),ze("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}}),ze("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}}),ze("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}}),ze("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}}),ze("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}}),ze("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}}),ze("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ze("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),ne("fa",{resolver:t=>{const e=t.replace(/^fa[rbs]?-/,"");let o="regular";return"fa-"===t.substring(0,3)&&(o="regular"),"fas-"===t.substring(0,4)&&(o="solid"),"fab-"===t.substring(0,4)&&(o="brands"),`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/svgs/${o}/${e}.svg`},mutator:t=>t.setAttribute("fill","currentColor")}),ne("bs",{resolver:t=>`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/icons/${t}.svg`});
