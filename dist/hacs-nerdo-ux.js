var NerdoUX=function(t){"use strict";function e(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,o)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var c;const h=window,d=h.trustedTypes,u=d?d.emptyScript:"",p=h.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:v},f="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),o=i.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var $;m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");const y=window,A=y.trustedTypes,b=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,S=`<${C}>`,H=document,x=()=>H.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,U=/>/g,M=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),j=new WeakMap,W=H.createTreeWalker(H,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===N?"!--"===l[1]?r=k:void 0!==l[1]?r=U:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=M):void 0!==l[3]&&(r=M):r===M?">"===l[0]?(r=null!=o?o:N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?M:'"'===l[3]?I:R):r===I||r===R?r=M:r===k||r===U?r=N:(r=M,o=void 0);const d=r===M&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+S:c>=0?(s.push(a),i.slice(0,c)+E+i.slice(c)+w+d):i+w+(-2===c?(s.push(void 0),e):d)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=X.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(E)||e.startsWith(w)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+E).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Q:"@"===e[1]?tt:Z})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],x()),W.nextNode(),a.push({type:2,index:++o});s.append(t[e],x())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,s){var o,n,r,a;if(e===B)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const c=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:H).importNode(i,!0);W.currentNode=o;let n=W.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new K(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new et(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=W.nextNode(),r++)}return W.currentNode=H,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),O(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(H.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new G(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new X(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.k(x()),this.k(x()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=q(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=q(this,s[i+r],e,r),a===B&&(a=this._$AH[r]),n||(n=!O(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const F=A?A.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class tt extends Z{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:z)===B)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const it=y.litHtmlPolyfillSupport;null==it||it(X,K),(null!==($=y.litHtmlVersions)&&void 0!==$?$:y.litHtmlVersions=[]).push("2.8.0");var st,ot;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new K(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}nt.finalized=!0,nt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ct(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}function ht(t){return ct({...t,state:!0})}var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;const ut="2025-08-01T18:41:35.775Z",pt={HOLD_DURATION:1e3,MOVEMENT_TOLERANCE:20,SHOW_NAME:!0,SHOW_STATE:!1,SHOW_ICON:!0,ICON_HEIGHT:80,CAP_STYLE:"rounded",HOLD_ACTION:{action:"toggle"}};var _t,vt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_t||(_t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));const gt=[{name:"entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"hold_duration",selector:{number:{min:500,max:1e4,step:100,unit_of_measurement:"ms"}}},{name:"movement_tolerance",selector:{number:{min:1,max:50,step:1,unit_of_measurement:"px"}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}}]},{name:"icon_height",selector:{number:{min:20,max:150,step:2,unit_of_measurement:"px"}}},{name:"cap_style",selector:{select:{options:[{value:"rounded",label:"Rounded"},{value:"none",label:"Square"}]}}},{name:"hold_action",selector:{action:{}}}];let ft=class extends nt{constructor(){super(...arguments),this._computeLabel=t=>{switch(t.name){case"entity":return"Entity (Required)";case"name":return"Name (Optional)";case"icon":return"Icon (Optional)";case"hold_duration":return"Hold Duration (ms)";case"movement_tolerance":return"Movement Tolerance (px)";case"show_name":return"Show Name";case"show_state":return"Show State";case"show_icon":return"Show Icon";case"icon_height":return"Icon Height (px)";case"cap_style":return"Progress Ring Cap Style";case"hold_action":return"Hold Action";default:return t.name}}}setConfig(t){this._config={hold_duration:pt.HOLD_DURATION,movement_tolerance:pt.MOVEMENT_TOLERANCE,show_name:pt.SHOW_NAME,show_state:pt.SHOW_STATE,show_icon:pt.SHOW_ICON,icon_height:pt.ICON_HEIGHT,cap_style:pt.CAP_STYLE,hold_action:pt.HOLD_ACTION,...t}}render(){if(!this.hass||!this._config)return D``;const t={...this._config};if(!t.entity||"switch.example"===t.entity){const e=Object.keys(this.hass.states).filter((t=>{const e=t.split(".")[0];return["switch","light","input_boolean"].includes(e)}));e.length>0&&(t.entity=e[0])}return D`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${gt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="build-info">
        Built: ${ut}
      </div>
    `}_valueChanged(t){const e=t.detail.value;e&&this.hass&&function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});o.detail=i,t.dispatchEvent(o)}(this,"config-changed",{config:e})}static get styles(){return a`
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
    `}};e([ct({attribute:!1})],ft.prototype,"hass",void 0),e([ht()],ft.prototype,"_config",void 0),ft=e([at("press-and-hold-button-card-editor")],ft);var mt=Object.freeze({__proto__:null,get PressAndHoldButtonCardEditor(){return ft}});return customElements.get("press-and-hold-button-card-editor")||Promise.resolve().then((function(){return mt})),console.log(`🚀 Nerdo UX loaded, built at ${ut}`),window.__NERDO_UX_BUILD_TIMESTAMP__=ut,t.PressAndHoldButtonCard=class extends nt{constructor(){super(...arguments),this.isHolding=!1,this.isAnimating=!1}static get buildTimestamp(){return ut}get buildTimestamp(){return ut}static getStubConfig(t){let e="switch.example";if(t){const i=Object.keys(t.states).filter((t=>{const e=t.split(".")[0];return["switch","light","input_boolean"].includes(e)}));i.length>0&&(e=i[0])}return{type:"custom:press-and-hold-button-card",entity:e,hold_duration:pt.HOLD_DURATION,movement_tolerance:pt.MOVEMENT_TOLERANCE,show_name:pt.SHOW_NAME,show_state:pt.SHOW_STATE,show_icon:pt.SHOW_ICON,icon_height:pt.ICON_HEIGHT,cap_style:pt.CAP_STYLE,hold_action:pt.HOLD_ACTION}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You need to define an entity");this.config={hold_duration:pt.HOLD_DURATION,movement_tolerance:pt.MOVEMENT_TOLERANCE,show_name:pt.SHOW_NAME,show_state:pt.SHOW_STATE,show_icon:pt.SHOW_ICON,icon_height:pt.ICON_HEIGHT,cap_style:pt.CAP_STYLE,hold_action:pt.HOLD_ACTION,...t}}getCardSize(){return 1}static getConfigElement(){return document.createElement("press-and-hold-button-card-editor")}render(){if(!this.config||!this.hass)return D``;const t=this.hass.states[this.config.entity];if(!t)return D`
        <ha-card>
          <div class="error">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `;const e=this.config.name||t.attributes.friendly_name||t.entity_id,i=this.config.icon||t.attributes.icon||"mdi:power",s="on"===t.state,o=this.config.icon_height||80;return D`
      <ha-card>
        <div class="card-content">
          <div
            class="button ${s?"on":"off"} ${this.isHolding?"holding":""}"
            style="--icon-height: ${o}px"
            @pointerdown=${this.handlePointerDown}
            @pointerup=${t=>this.handlePointerUp(t)}
            @pointerleave=${t=>this.handlePointerUp(t)}
            @pointercancel=${t=>this.handlePointerUp(t)}
            @pointermove=${this.handlePointerMove}
            @contextmenu=${this.handleContextMenu}
          >
            <div class="progress-ring ${this.isHolding?"active":""} ${this.isAnimating?"animating":""} ${s?"turning-off":"turning-on"}">
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
            ${!1!==this.config.show_icon?D`
                  <ha-icon
                    class="icon"
                    .icon=${i}
                  ></ha-icon>
                `:""}
          </div>
          ${!1!==this.config.show_name?D`<div class="name">${e}</div>`:""}
          ${!0===this.config.show_state?D`<div class="state">${t.state}</div>`:""}
        </div>
      </ha-card>
    `}handlePointerDown(t){t.preventDefault(),t.stopPropagation(),this.startX=t.clientX,this.startY=t.clientY,t.target.setPointerCapture(t.pointerId),this.startHold()}handlePointerMove(t){if(!this.isHolding||void 0===this.startX||void 0===this.startY)return;const e=Math.abs(t.clientX-this.startX),i=Math.abs(t.clientY-this.startY);Math.sqrt(e*e+i*i)>(this.config.movement_tolerance||pt.MOVEMENT_TOLERANCE)&&this.handlePointerUp(t)}handlePointerUp(t){if(t)try{t.target.releasePointerCapture(t.pointerId)}catch(t){}this.startX=void 0,this.startY=void 0,this.stopHold()}handleContextMenu(t){t.preventDefault()}startHold(){if(this.isHolding)return;this.isHolding=!0,this.isAnimating=!0;const t=this.config.hold_duration||pt.HOLD_DURATION;this.updateComplete.then((()=>{var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".progress-ring");if(i){i.style.setProperty("--hold-duration",`${t}ms`);const e=t=>{"fillProgress"===t.animationName&&this.isHolding&&(this.executeAction(),this.stopHold()),i.removeEventListener("animationend",e)};i.addEventListener("animationend",e)}})),this.holdTimer=window.setTimeout((()=>{this.isHolding&&(this.executeAction(),this.stopHold())}),t+200)}stopHold(){this.isHolding&&(this.isHolding=!1,this.isAnimating=!1,this.holdTimer&&(clearTimeout(this.holdTimer),this.holdTimer=void 0))}executeAction(){if(!this.config.entity)return void console.error("Press and Hold Button Card: No entity configured");if(!this.hass.states[this.config.entity])return void console.error(`Press and Hold Button Card: Entity not found: ${this.config.entity}`);console.log(`Press and Hold Button Card: Executing action for ${this.config.entity}`);const t=this.config.hold_action||pt.HOLD_ACTION,e={...t};e.entity||"none"===t.action||(e.entity=this.config.entity),console.log(`Press and Hold Button Card: Dispatching ${t.action} action`,e),this.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:e,action:"tap"}}))}static get styles(){return a`
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
