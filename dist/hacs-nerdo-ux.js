var NerdoUX=function(t){"use strict";function e(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const i=window,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(i,t,s)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var c;const h=window,d=h.trustedTypes,u=d?d.emptyScript:"",p=h.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v},_="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),s=i.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var o;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var y;m[_]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");const $=window,b=$.trustedTypes,A=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,x="?"+E,S=`<${x}>`,C=document,k=()=>C.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,U="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,O=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),j=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===T?"!--"===l[1]?r=M:void 0!==l[1]?r=N:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=s?s:T,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?D:R):r===D||r===R?r=O:r===M||r===N?r=T:(r=O,s=void 0);const d=r===O&&t[e+1].startsWith("/>")?" ":"";n+=r===T?i+S:c>=0?(o.push(a),i.slice(0,c)+w+i.slice(c)+E+d):i+E+(-2===c?(o.push(void 0),e):d)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Y{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[l,c]=q(t,e);if(this.el=Y.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=V.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(w)||e.startsWith(E)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+w).split(E),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?Q:"@"===e[1]?tt:Z})}else a.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(B.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],k()),V.nextNode(),a.push({type:2,index:++s});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===x)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,o){var s,n,r,a;if(e===z)return e;let l=void 0!==o?null===(s=i._$Co)||void 0===s?void 0:s[o]:i._$Cl;const c=P(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,o)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);V.currentNode=s;let n=V.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new K(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new et(n,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=V.nextNode(),r++)}return V.currentNode=C,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,o){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),P(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(X(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new J(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new Y(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new K(this.k(k()),this.k(k()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=W(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=W(this,o[i+r],e,r),a===z&&(a=this._$AH[r]),n||(n=!P(a)||a!==this._$AH[r]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const G=b?b.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class tt extends Z{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:L)===z)return;const o=this._$AH,s=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==L&&(o===L||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}let et=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};const it=$.litHtmlPolyfillSupport;null==it||it(Y,K),(null!==(y=$.litHtmlVersions)&&void 0!==y?y:$.litHtmlVersions=[]).push("2.8.0");var ot,st;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new K(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}}nt.finalized=!0,nt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ct(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}function ht(t){return ct({...t,state:!0})}var dt,ut,pt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(pt||(pt={}));var ft=["closed","locked","off"],vt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,t.dispatchEvent(s),s},gt=function(t){vt(window,"haptic",t)},_t=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(gt("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&vt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),vt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,s=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===s?"homeassistant":s;switch(s){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(n,o,{entity_id:e})})(t,e,ft.includes(t.states[e].state))}(e,i.entity),gt("success"));break;case"call-service":if(!o.service)return void gt("failure");var s=o.service.split(".",2);e.callService(s[0],s[1],o.service_data,o.target),gt("success");break;case"fire-dom-event":vt(t,"ll-custom",o)}},mt=function(t,e,i,o){var s;"double_tap"===o&&i.double_tap_action?s=i.double_tap_action:"hold"===o&&i.hold_action?s=i.hold_action:"tap"===o&&i.tap_action&&(s=i.tap_action),_t(t,e,i,s)};const yt="2025-08-01T21:36:49.868Z",$t=1e3,bt=20,At=!0,wt=!1,Et=!0,xt=80,St="rounded",Ct="default",kt=[{name:"entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"hold_action",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Default"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"call-service",label:"Call Service"}]}}}],Pt=[{name:"service",selector:{text:{placeholder:"light.turn_on"}}},{name:"service_data",selector:{object:{}}}],Ht=[{name:"hold_duration",selector:{number:{min:500,max:1e4,step:100,unit_of_measurement:"ms"}}},{name:"movement_tolerance",selector:{number:{min:1,max:50,step:1,unit_of_measurement:"px"}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}}]},{name:"icon_height",selector:{number:{min:20,max:150,step:2,unit_of_measurement:"px"}}},{name:"cap_style",selector:{select:{mode:"dropdown",options:[{value:"rounded",label:"Rounded"},{value:"none",label:"Square"}]}}}];let Ut=class extends nt{constructor(){super(...arguments),this._computeLabel=t=>{switch(t.name){case"entity":return"Entity (Required)";case"name":return"Name (Optional)";case"icon":return"Icon (Optional)";case"hold_duration":return"Hold Duration (ms)";case"movement_tolerance":return"Movement Tolerance (px)";case"show_name":return"Show Name";case"show_state":return"Show State";case"show_icon":return"Show Icon";case"icon_height":return"Icon Height (px)";case"cap_style":return"Progress Ring Cap Style";case"hold_action":return"Hold Action";case"service":return"Service (e.g., light.turn_on)";case"service_data":return"Service Data (JSON)";default:return t.name}}}setConfig(t){this._config={hold_duration:$t,movement_tolerance:bt,show_name:At,show_state:wt,show_icon:Et,icon_height:xt,cap_style:St,hold_action:Ct,...t}}render(){if(!this.hass||!this._config)return I``;const t={...this._config};if(!t.entity||"switch.example"===t.entity){const e=Object.keys(this.hass.states).filter((t=>{const e=t.split(".")[0];return["switch","light","input_boolean"].includes(e)}));e.length>0&&(t.entity=e[0])}const e=this._buildSchema(t.hold_action,t.entity);return I`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${e}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="build-info">
        Built: ${yt}
      </div>
    `}_buildSchema(t,e){const i=[...kt],o=i.find((t=>"hold_action"===t.name));if(o&&o.selector){const t=this._getDefaultActionLabel(e);o.selector.select.options[0].label=t}return"call-service"===t&&i.push(...Pt),i.push(...Ht),i}_getDefaultActionLabel(t){if(!t||!this.hass)return"Default";const e=this.hass.states[t];if(!e)return"Default";switch(e.entity_id.split(".")[0]){case"button":return"Default (Press)";case"light":case"switch":case"input_boolean":case"cover":return"Default (Toggle)";default:return"Default (More Info)"}}_valueChanged(t){const e=t.detail.value;e&&this.hass&&vt(this,"config-changed",{config:e})}static get styles(){return a`
      :host {
        display: block;
      }
      ha-form {
        display: block;
        padding: 16px;
      }
      .build-info {
        padding: 8px 16px;
        font-size: 11px;
        color: var(--secondary-text-color);
        opacity: 0.7;
        border-top: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
    `}};e([ct({attribute:!1})],Ut.prototype,"hass",void 0),e([ht()],Ut.prototype,"_config",void 0),Ut=e([at("press-and-hold-button-card-editor")],Ut);var Tt=Object.freeze({__proto__:null,get PressAndHoldButtonCardEditor(){return Ut}});return customElements.get("press-and-hold-button-card-editor")||Promise.resolve().then((function(){return Tt})),console.log(`🚀 Nerdo UX loaded, built at ${yt}`),window.__NERDO_UX_BUILD_TIMESTAMP__=yt,t.PressAndHoldButtonCard=class extends nt{constructor(){super(...arguments),this.isHolding=!1,this.isAnimating=!1}static get buildTimestamp(){return yt}get buildTimestamp(){return yt}static getStubConfig(t){let e="switch.example";if(t){const i=Object.keys(t.states).filter((t=>{const e=t.split(".")[0];return["switch","light","input_boolean"].includes(e)}));i.length>0&&(e=i[0])}return{type:"custom:press-and-hold-button-card",entity:e,hold_duration:$t,movement_tolerance:bt,show_name:At,show_state:wt,show_icon:Et,icon_height:xt,cap_style:St,hold_action:Ct}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You need to define an entity");this.config={hold_duration:$t,movement_tolerance:bt,show_name:At,show_state:wt,show_icon:Et,icon_height:xt,cap_style:St,hold_action:Ct,...t}}getCardSize(){return 1}static getConfigElement(){return document.createElement("press-and-hold-button-card-editor")}render(){if(!this.config||!this.hass)return I``;const t=this.hass.states[this.config.entity];if(!t)return I`
        <ha-card>
          <div class="error">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `;const e=this.config.name||t.attributes.friendly_name||t.entity_id,i=this.config.icon||t.attributes.icon||"mdi:power",o="on"===t.state,s=this.config.icon_height||80;return I`
      <ha-card>
        <div class="card-content">
          <div
            class="button ${o?"on":"off"} ${this.isHolding?"holding":""}"
            style="--icon-height: ${s}px"
            @pointerdown=${this.handlePointerDown}
            @pointerup=${t=>this.handlePointerUp(t)}
            @pointerleave=${t=>this.handlePointerUp(t)}
            @pointercancel=${t=>this.handlePointerUp(t)}
            @pointermove=${this.handlePointerMove}
            @contextmenu=${this.handleContextMenu}
          >
            <div class="progress-ring ${this.isHolding?"active":""} ${this.isAnimating?"animating":""} ${o?"turning-off":"turning-on"}">
              <svg class="progress-svg" viewBox="0 0 100 100">
                <circle
                  class="progress-background"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="8"
                  opacity="0.2"
                />
                <circle
                  class="progress-bar"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="8"
                  stroke-dasharray="300"
                  stroke-dashoffset="300"
                  stroke-linecap="${"rounded"===this.config.cap_style?"round":"butt"}"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            ${!1!==this.config.show_icon?I`
                  <ha-icon
                    class="icon"
                    .icon=${i}
                  ></ha-icon>
                `:""}
          </div>
          ${!1!==this.config.show_name?I`<div class="name">${e}</div>`:""}
          ${!0===this.config.show_state?I`<div class="state">${t.state}</div>`:""}
        </div>
      </ha-card>
    `}handlePointerDown(t){t.preventDefault(),t.stopPropagation(),this.startX=t.clientX,this.startY=t.clientY,t.target.setPointerCapture(t.pointerId),this.startHold()}handlePointerMove(t){if(!this.isHolding||void 0===this.startX||void 0===this.startY)return;const e=Math.abs(t.clientX-this.startX),i=Math.abs(t.clientY-this.startY);Math.sqrt(e*e+i*i)>(this.config.movement_tolerance||bt)&&this.handlePointerUp(t)}handlePointerUp(t){if(t)try{t.target.releasePointerCapture(t.pointerId)}catch(t){}this.startX=void 0,this.startY=void 0,this.stopHold()}handleContextMenu(t){t.preventDefault()}startHold(){if(this.isHolding)return;this.isHolding=!0,this.isAnimating=!0;const t=this.config.hold_duration||$t;this.updateComplete.then((()=>{var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".progress-ring");if(i){i.style.setProperty("--hold-duration",`${t}ms`);const e=t=>{"fillProgress"===t.animationName&&this.isHolding&&(this.executeAction(),this.stopHold()),i.removeEventListener("animationend",e)};i.addEventListener("animationend",e)}})),this.holdTimer=window.setTimeout((()=>{this.isHolding&&(this.executeAction(),this.stopHold())}),t+200)}stopHold(){this.isHolding&&(this.isHolding=!1,this.isAnimating=!1,this.holdTimer&&(clearTimeout(this.holdTimer),this.holdTimer=void 0))}executeAction(){if(!this.config.entity)return void console.error("Press and Hold Button Card: No entity configured");const t=this.hass.states[this.config.entity];if(!t)return void console.error(`Press and Hold Button Card: Entity not found: ${this.config.entity}`);console.log(`Press and Hold Button Card: Executing action for ${this.config.entity}`);const e=this.config.hold_action||"default";switch(e){case"default":this.executeDefaultAction(t);break;case"toggle":this.executeToggleAction(t);break;case"more-info":this.executeMoreInfoAction();break;case"call-service":this.executeCustomServiceAction();break;default:return void console.error(`Press and Hold Button Card: Unknown action: ${e}`)}}executeDefaultAction(t){switch(t.entity_id.split(".")[0]){case"button":console.log("Default action for button: press"),mt(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:"button.press",target:{entity_id:this.config.entity}}},"hold");break;case"light":case"switch":case"input_boolean":console.log("Default action for toggleable entity: toggle"),mt(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;case"cover":console.log("Default action for cover: toggle"),mt(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;default:console.log("Default action for other entity: more-info"),this.executeMoreInfoAction()}}executeToggleAction(t){const e=t.entity_id.split(".")[0];["light","switch","input_boolean","cover","fan","media_player"].includes(e)?(console.log("Toggle action for compatible entity"),mt(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold")):(console.warn(`Entity ${this.config.entity} does not support toggle action. Domain: ${e}`),this.executeMoreInfoAction())}executeMoreInfoAction(){console.log("More info action"),mt(this,this.hass,{entity:this.config.entity,hold_action:{action:"more-info"}},"hold")}executeCustomServiceAction(){if(!this.config.service)return void console.error("No service specified for call-service action");if(2!==this.config.service.split(".").length)return void console.error(`Invalid service format: ${this.config.service}. Expected: domain.service`);console.log(`Custom service action: ${this.config.service}`);const t=this.config.service_data||{};mt(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:this.config.service,service_data:t,target:{entity_id:this.config.entity}}},"hold")}static get styles(){return a`
      ha-card {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }

      .card-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      .button {
        position: relative;
        width: calc(var(--icon-height) * 2);
        height: calc(var(--icon-height) * 2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        cursor: pointer;
        background: var(--card-background-color, #ffffff);
        border: 2px solid var(--divider-color, #e1e1e1);
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: none;
      }

      .button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
      }

      .button.off {
        background: var(--card-background-color, #ffffff);
        border-color: var(--divider-color, #e1e1e1);
        color: var(--primary-text-color);
      }

      .button.holding {
        transform: scale(0.95);
      }

      .progress-ring {
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(var(--icon-height) * 2 + 8px);
        height: calc(var(--icon-height) * 2 + 8px);
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 10;
        pointer-events: none;
        --hold-duration: 1500ms;
      }

      .progress-ring.active {
        opacity: 1;
      }

      .progress-ring.active.animating .progress-bar {
        animation: fillProgress var(--hold-duration) linear forwards;
      }

      @keyframes fillProgress {
        from {
          stroke-dashoffset: 300;
        }
        to {
          stroke-dashoffset: 0;
        }
      }

      .progress-ring.turning-on {
        color: var(--success-color, #4caf50);
      }

      .progress-ring.turning-off {
        color: var(--warning-color, #ff9800);
      }

      .progress-svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }

      .progress-bar {
        transition: stroke-dashoffset 0.1s linear;
      }

      .icon {
        --mdc-icon-size: calc(var(--icon-height) * 1.5);
        font-size: calc(var(--icon-height) * 1.5);
        width: calc(var(--icon-height) * 1.5);
        height: calc(var(--icon-height) * 1.5);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .name {
        font-weight: 500;
        text-align: center;
        color: var(--primary-text-color);
      }

      .state {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }

      .error {
        color: var(--error-color);
        padding: 16px;
        text-align: center;
      }
    `}updated(t){super.updated(t),t.has("config")&&this.stopHold()}disconnectedCallback(){super.disconnectedCallback(),this.stopHold()}},e([ct({attribute:!1})],t.PressAndHoldButtonCard.prototype,"hass",void 0),e([ht()],t.PressAndHoldButtonCard.prototype,"config",void 0),e([ht()],t.PressAndHoldButtonCard.prototype,"isHolding",void 0),e([ht()],t.PressAndHoldButtonCard.prototype,"isAnimating",void 0),t.PressAndHoldButtonCard=e([at("press-and-hold-button-card")],t.PressAndHoldButtonCard),window.customCards=window.customCards||[],window.customCards.push({type:"press-and-hold-button-card",name:"Press and Hold Button Card",description:"A button card that requires press and hold to toggle entities",preview:!0,documentationURL:"https://github.com/nerdo/hacs-nerdo-ux"}),t}({});
