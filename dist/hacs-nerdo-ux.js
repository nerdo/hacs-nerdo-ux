(()=>{var{defineProperty:_e,getOwnPropertyNames:Tt,getOwnPropertyDescriptor:$t}=Object,xt=Object.prototype.hasOwnProperty;function Dt(e){return this[e]}var Nt=(e)=>{var t=(Ue??=new WeakMap).get(e),i;if(t)return t;if(t=_e({},"__esModule",{value:!0}),e&&typeof e==="object"||typeof e==="function"){for(var n of Tt(e))if(!xt.call(t,n))_e(t,n,{get:Dt.bind(e,n),enumerable:!(i=$t(e,n))||i.enumerable})}return Ue.set(e,t),t},Ue;var At=(e)=>e;function kt(e,t){this[e]=At.bind(null,t)}var He=(e,t)=>{for(var i in t)_e(e,i,{get:t[i],enumerable:!0,configurable:!0,set:kt.bind(t,i)})};var _=function(e,t,i,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o;return r>3&&o&&Object.defineProperty(t,i,o),o};var p=(e,t,i)=>()=>{if(e)try{t=e(e=0)}catch(n){i=[n]}if(i)throw i[0];return t};function Mt(e){return e.substr(0,e.indexOf("."))}var Ve,We,Ct,V=(e,t,i,n)=>{n=n||{},i=i===null||i===void 0?{}:i;let r=new Event(t,{bubbles:n.bubbles===void 0?!0:n.bubbles,cancelable:Boolean(n.cancelable),composed:n.composed===void 0?!0:n.composed});return r.detail=i,e.dispatchEvent(r),r},ie=(e)=>{V(window,"haptic",e)},Ot=(e,t,i=!1)=>{if(i)history.replaceState(null,"",t);else history.pushState(null,"",t);V(window,"location-changed",{replace:i})},Pt=(e,t,i=!0)=>{let n=Mt(t),r=n==="group"?"homeassistant":n,o;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}return e.callService(r,o,{entity_id:t})},It=(e,t)=>{let i=Ct.includes(e.states[t].state);return Pt(e,t,i)},Rt=(e,t,i,n)=>{if(!n)n={action:"more-info"};if(n.confirmation&&(!n.confirmation.exemptions||!n.confirmation.exemptions.some((r)=>r.user===t.user.id))){if(ie("warning"),!confirm(n.confirmation.text||`Are you sure you want to ${n.action}?`))return}switch(n.action){case"more-info":if(i.entity||i.camera_image)V(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":if(n.navigation_path)Ot(e,n.navigation_path);break;case"url":if(n.url_path)window.open(n.url_path);break;case"toggle":if(i.entity)It(t,i.entity),ie("success");break;case"call-service":{if(!n.service){ie("failure");return}let[r,o]=n.service.split(".",2);t.callService(r,o,n.service_data,n.target),ie("success");break}case"fire-dom-event":V(e,"ll-custom",n)}},P=(e,t,i,n)=>{let r;if(n==="double_tap"&&i.double_tap_action)r=i.double_tap_action;else if(n==="hold"&&i.hold_action)r=i.hold_action;else if(n==="tap"&&i.tap_action)r=i.tap_action;Rt(e,t,i,r)};var ye=p(()=>{(function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"})(Ve||(Ve={}));(function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"})(We||(We={}));Ct=["closed","locked","off"]});class ve{constructor(e,t,i){if(this._$cssResult$=!0,i!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet,t=this._strings;if(be&&e===void 0){let i=t!==void 0&&t.length===1;if(i)e=ze.get(t);if(e===void 0){if((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),i)ze.set(t,e)}}return e}toString(){return this.cssText}}var ne,be,we,ze,Lt=(e)=>{if(e._$cssResult$===!0)return e.cssText;else if(typeof e==="number")return e;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Ut=(e)=>new ve(typeof e==="string"?e:String(e),void 0,we),W=(e,...t)=>{let i=e.length===1?e[0]:t.reduce((n,r,o)=>n+Lt(r)+e[o+1],e[0]);return new ve(i,e,we)},Fe=(e,t)=>{if(be)e.adoptedStyleSheets=t.map((i)=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of t){let n=document.createElement("style"),r=ne.litNonce;if(r!==void 0)n.setAttribute("nonce",r);n.textContent=i.cssText,e.appendChild(n)}},Ht=(e)=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Ut(t)},Ee;var Se=p(()=>{ne=globalThis,be=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),ze=new WeakMap;Ee=be?(e)=>e:(e)=>e instanceof CSSStyleSheet?Ht(e):e});var Vt,Wt,Be,zt,Ft,qe,Bt=!1,g,y=!0,S,Ye,qt,Xe,Yt,z=(e,t)=>e,q,re=(e,t)=>!Vt(e,t),Ge,b;var Y=p(()=>{Se();Se();({is:Vt,defineProperty:Wt,getOwnPropertyDescriptor:Be,getOwnPropertyNames:zt,getOwnPropertySymbols:Ft,getPrototypeOf:qe}=Object),g=globalThis;if(Bt)g.customElements??=customElements;Ye=g.trustedTypes,qt=Ye?Ye.emptyScript:"",Xe=y?g.reactiveElementPolyfillSupportDevMode:g.reactiveElementPolyfillSupport;if(y)g.litIssuedWarnings??=new Set,S=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!g.litIssuedWarnings.has(t)&&!g.litIssuedWarnings.has(e))console.warn(t),g.litIssuedWarnings.add(t)},queueMicrotask(()=>{if(S("dev-mode","Lit is in dev mode. Not recommended for production!"),g.ShadyDOM?.inUse&&Xe===void 0)S("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});Yt=y?(e)=>{if(!g.emitLitDebugLogEvents)return;g.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))}:void 0,q={toAttribute(e,t){switch(t){case Boolean:e=e?qt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e);break}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(n){i=null}break}return i}},Ge={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??=Symbol("metadata");g.litPropertyMetadata??=new WeakMap;b=class b extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=Ge){if(t.state)t.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(e))t=Object.create(t),t.wrapped=!0;if(this.elementProperties.set(e,t),!t.noAccessor){let i=y?Symbol.for(`${String(e)} (@property() cache)`):Symbol(),n=this.getPropertyDescriptor(e,i,t);if(n!==void 0)Wt(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:r}=Be(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};if(y&&n==null){if("value"in(Be(this.prototype,e)??{}))throw Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);S("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:n,set(o){let s=n?.call(this);r?.call(this,o),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ge}static __prepare(){if(this.hasOwnProperty(z("elementProperties",this)))return;let e=qe(this);if(e.finalize(),e._initializers!==void 0)this._initializers=[...e._initializers];this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(z("properties",this))){let t=this.properties,i=[...zt(t),...Ft(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this.__attributeToPropertyMap=new Map;for(let[t,i]of this.elementProperties){let n=this.__attributeNameForProperty(t,i);if(n!==void 0)this.__attributeToPropertyMap.set(n,t)}if(this.elementStyles=this.finalizeStyles(this.styles),y){if(this.hasOwnProperty("createProperty"))S("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))S("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(Ee(n))}else if(e!==void 0)t.push(Ee(e));return t}static __attributeNameForProperty(e,t){let i=t.attribute;return i===!1?void 0:typeof i==="string"?i:typeof e==="string"?e.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e)=>this.enableUpdating=e),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e)=>e(this))}addController(e){if((this.__controllers??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected)e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())if(this.hasOwnProperty(i))e.set(i,this[i]),delete this[i];if(e.size>0)this.__instanceProperties=e}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor.__attributeNameForProperty(e,n);if(r!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:q).toAttribute(t,n.type);if(y&&this.constructor.enabledWarnings.includes("migration")&&s===void 0)S("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=e,s==null)this.removeAttribute(r);else this.setAttribute(r,s);this.__reflectingProperty=null}}_$attributeToProperty(e,t){let i=this.constructor,n=i.__attributeToPropertyMap.get(e);if(n!==void 0&&this.__reflectingProperty!==n){let r=i.getPropertyOptions(n),o=typeof r.converter==="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:q;this.__reflectingProperty=n;let s=o.fromAttribute(t,r.type);this[n]=s??this.__defaultValues?.get(n)??s,this.__reflectingProperty=null}}requestUpdate(e,t,i,n=!1,r){if(e!==void 0){if(y&&e instanceof Event)S("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let o=this.constructor;if(n===!1)r=this[e];if(i??=o.getPropertyOptions(e),(i.hasChanged??re)(r,t)||i.useDefault&&i.reflect&&r===this.__defaultValues?.get(e)&&!this.hasAttribute(o.__attributeNameForProperty(e,i)))this._$changeProperty(e,t,i);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(e,t,{useDefault:i,reflect:n,wrapped:r},o){if(i&&!(this.__defaultValues??=new Map).has(e)){if(this.__defaultValues.set(e,o??t??this[e]),r!==!0||o!==void 0)return}if(!this._$changedProperties.has(e)){if(!this.hasUpdated&&!i)t=void 0;this._$changedProperties.set(e,t)}if(n===!0&&this.__reflectingProperty!==e)(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();if(e!=null)await e;return!this.isUpdatePending}scheduleUpdate(){let e=this.performUpdate();if(y&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof e?.then==="function")S("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return e}performUpdate(){if(!this.isUpdatePending)return;if(Yt?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),y){let r=[...this.constructor.elementProperties.keys()].filter((o)=>this.hasOwnProperty(o)&&(o in qe(this)));if(r.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${r.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[n,r]of this.__instanceProperties)this[n]=r;this.__instanceProperties=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,r]of i){let{wrapped:o}=r,s=this[n];if(o===!0&&!this._$changedProperties.has(n)&&s!==void 0)this._$changeProperty(n,void 0,r,s)}}let e=!1,t=this._$changedProperties;try{if(e=this.shouldUpdate(t),e)this.willUpdate(t),this.__controllers?.forEach((i)=>i.hostUpdate?.()),this.update(t);else this.__markUpdated()}catch(i){throw e=!1,this.__markUpdated(),i}if(e)this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){if(this.__controllers?.forEach((t)=>t.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(e);if(this.updated(e),y&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))S("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((t)=>this.__propertyToAttribute(t,this[t])),this.__markUpdated()}updated(e){}firstUpdated(e){}};b.elementStyles=[];b.shadowRootOptions={mode:"open"};b[z("elementProperties",b)]=new Map;b[z("finalized",b)]=new Map;Xe?.({ReactiveElement:b});if(y){b.enabledWarnings=["change-in-update","async-perform-update"];let e=function(t){if(!t.hasOwnProperty(z("enabledWarnings",t)))t.enabledWarnings=t.enabledWarnings.slice()};b.enableWarning=function(t){if(e(this),!this.enabledWarnings.includes(t))this.enabledWarnings.push(t)},b.disableWarning=function(t){e(this);let i=this.enabledWarnings.indexOf(t);if(i>=0)this.enabledWarnings.splice(i,1)}}(g.reactiveElementVersions??=[]).push("2.1.2");if(y&&g.reactiveElementVersions.length>1)queueMicrotask(()=>{S("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")})});function ot(e,t){if(!Ae(e)||!e.hasOwnProperty("raw")){let i="invalid template strings array";throw i=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(i)}return Ke!==void 0?Ke.createHTML(t):t}class Q{constructor({strings:e,["_$litType$"]:t},i){this.parts=[];let n,r=0,o=0,s=e.length-1,a=this.parts,[u,D]=li(e,t);if(this.el=Q.createElement(u,i),I.currentNode=this.el.content,t===se||t===ae){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}while((n=I.nextNode())!==null&&a.length<s){if(n.nodeType===1){{let d=n.localName;if(/^(?:textarea|template)$/i.test(d)&&n.innerHTML.includes(N)){let f=`Expressions are not supported inside \`${d}\` elements. See https://lit.dev/msg/expression-in-${d} for more information.`;if(d==="template")throw Error(f);else K("",f)}}if(n.hasAttributes()){for(let d of n.getAttributeNames())if(d.endsWith(it)){let f=D[o++],m=n.getAttribute(d).split(N),O=/([.?@])?(.*)/.exec(f);a.push({type:ke,index:r,name:O[2],strings:m,ctor:O[1]==="."?at:O[1]==="?"?ct:O[1]==="@"?lt:ee}),n.removeAttribute(d)}else if(d.startsWith(N))a.push({type:Me,index:r}),n.removeAttribute(d)}if(rt.test(n.tagName)){let d=n.textContent.split(N),f=d.length-1;if(f>0){n.textContent=oe?oe.emptyScript:"";for(let M=0;M<f;M++)n.append(d[M],J()),I.nextNode(),a.push({type:ce,index:++r});n.append(d[f],J())}}}else if(n.nodeType===8)if(n.data===nt)a.push({type:ce,index:r});else{let f=-1;while((f=n.data.indexOf(N,f+1))!==-1)a.push({type:ci,index:r}),f+=N.length-1}r++}if(D.length!==o)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");c&&c({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){let i=R.createElement("template");return i.innerHTML=e,i}}function F(e,t,i=e,n){if(t===L)return t;let r=n!==void 0?i.__directives?.[n]:i.__directive,o=j(t)?void 0:t._$litDirective$;if(r?.constructor!==o){if(r?._$notifyDirectiveConnectionChanged?.(!1),o===void 0)r=void 0;else r=new o(e),r._$initialize(e,i,n);if(n!==void 0)(i.__directives??=[])[n]=r;else i.__directive=r}if(r!==void 0)t=F(e,r._$resolve(e,t.values),r,n);return t}class st{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){let{el:{content:t},parts:i}=this._$template,n=(e?.creationScope??R).importNode(t,!0);I.currentNode=n;let r=I.nextNode(),o=0,s=0,a=i[0];while(a!==void 0){if(o===a.index){let u;if(a.type===ce)u=new Z(r,r.nextSibling,this,e);else if(a.type===ke)u=new a.ctor(r,a.name,a.strings,this,e);else if(a.type===Me)u=new dt(r,this,e);this._$parts.push(u),a=i[++s]}if(o!==a?.index)r=I.nextNode(),o++}return I.currentNode=R,n}_update(e){let t=0;for(let i of this._$parts){if(i!==void 0)if(c&&c({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),i.strings!==void 0)i._$setValue(e,i,t),t+=i.strings.length-2;else i._$setValue(e[t]);t++}}}class Z{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,i,n){this.type=ce,this._$committedValue=h,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=n,this.__isConnected=n?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=T(this._$startNode).parentNode,t=this._$parent;if(t!==void 0&&e?.nodeType===11)e=t.parentNode;return e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=F(this,e,t),j(e)){if(e===h||e==null||e===""){if(this._$committedValue!==h)c&&c({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=h}else if(e!==this._$committedValue&&e!==L)this._commitText(e)}else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(this.options?.host===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else if(Qt(e))this._commitIterable(e);else this._commitText(e)}_insert(e){return T(T(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),U!==le){let t=this._$startNode.parentNode?.nodeName;if(t==="STYLE"||t==="SCRIPT"){let i="Forbidden";if(t==="STYLE")i="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else i="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(i)}}c&&c({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==h&&j(this._$committedValue)){let t=T(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Ne(t,"data","property");e=this._textSanitizer(e),c&&c({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{let t=R.createTextNode("");if(this._commitNode(t),this._textSanitizer===void 0)this._textSanitizer=Ne(t,"data","property");e=this._textSanitizer(e),c&&c({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){let{values:t,["_$litType$"]:i}=e,n=typeof i==="number"?this._$getTemplate(e):(i.el===void 0&&(i.el=Q.createElement(ot(i.h,i.h[0]),this.options)),i);if(this._$committedValue?._$template===n)c&&c({kind:"template updating",template:n,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{let r=new st(n,this),o=r._clone(this.options);c&&c({kind:"template instantiated",template:n,instance:r,parts:r._$parts,options:this.options,fragment:o,values:t}),r._update(t),c&&c({kind:"template instantiated and updated",template:n,instance:r,parts:r._$parts,options:this.options,fragment:o,values:t}),this._commitNode(o),this._$committedValue=r}}_$getTemplate(e){let t=tt.get(e.strings);if(t===void 0)tt.set(e.strings,t=new Q(e));return t}_commitIterable(e){if(!Ae(this._$committedValue))this._$committedValue=[],this._$clear();let t=this._$committedValue,i=0,n;for(let r of e){if(i===t.length)t.push(n=new Z(this._insert(J()),this._insert(J()),this,this.options));else n=t[i];n._$setValue(r),i++}if(i<t.length)this._$clear(n&&T(n._$endNode).nextSibling,i),t.length=i}_$clear(e=T(this._$startNode).nextSibling,t){this._$notifyConnectionChanged?.(!1,!0,t);while(e!==this._$endNode){let i=T(e).nextSibling;T(e).remove(),e=i}}setConnected(e){if(this._$parent===void 0)this.__isConnected=e,this._$notifyConnectionChanged?.(e);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class ee{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,i,n,r){if(this.type=ke,this._$committedValue=h,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=n,this.options=r,i.length>2||i[0]!==""||i[1]!=="")this._$committedValue=Array(i.length-1).fill(new String),this.strings=i;else this._$committedValue=h;this._sanitizer=void 0}_$setValue(e,t=this,i,n){let r=this.strings,o=!1;if(r===void 0){if(e=F(this,e,t,0),o=!j(e)||e!==this._$committedValue&&e!==L,o)this._$committedValue=e}else{let s=e;e=r[0];let a,u;for(a=0;a<r.length-1;a++){if(u=F(this,s[i+a],t,a),u===L)u=this._$committedValue[a];if(o||=!j(u)||u!==this._$committedValue[a],u===h)e=h;else if(e!==h)e+=(u??"")+r[a+1];this._$committedValue[a]=u}}if(o&&!n)this._commitValue(e)}_commitValue(e){if(e===h)T(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=U(this.element,this.name,"attribute");e=this._sanitizer(e??""),c&&c({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),T(this.element).setAttribute(this.name,e??"")}}}class dt{constructor(e,t,i){this.element=e,this.type=Me,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){c&&c({kind:"commit to element binding",element:this.element,value:e,options:this.options}),F(this,e)}}var w,c=(e)=>{if(!w.emitLitDebugLogEvents)return;w.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},Gt=0,K,T,oe,Ke,Xt=(e)=>e,le=(e,t,i)=>Xt,Kt=(e)=>{if(U!==le)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");U=e},Jt=()=>{U=le},Ne=(e,t,i)=>U(e,t,i),it="$lit$",N,nt,jt,R,J=()=>R.createComment(""),j=(e)=>e===null||typeof e!="object"&&typeof e!="function",Ae,Qt=(e)=>Ae(e)||typeof e?.[Symbol.iterator]==="function",Te=`[ 	
\f\r]`,Zt=`[^ 	
\f\r"'\`<>=]`,ei=`[^\\s"'>=/]`,G,Je=1,$e=2,ti=3,je,Qe,C,ii=0,Ze=1,ni=2,et=3,xe,De,rt,ri=1,se=2,ae=3,ke=1,ce=2,oi=3,si=4,ai=5,Me=6,ci=7,Ce=(e)=>(t,...i)=>{if(t.some((n)=>n===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(i.some((n)=>n?._$litStatic$))K("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:e,strings:t,values:i}},v,ki,Mi,L,h,tt,I,U,li=(e,t)=>{let i=e.length-1,n=[],r=t===se?"<svg>":t===ae?"<math>":"",o,s=G;for(let u=0;u<i;u++){let D=e[u],d=-1,f,M=0,m;while(M<D.length){if(s.lastIndex=M,m=s.exec(D),m===null)break;if(M=s.lastIndex,s===G){if(m[Je]==="!--")s=je;else if(m[Je]!==void 0)s=Qe;else if(m[$e]!==void 0){if(rt.test(m[$e]))o=new RegExp(`</${m[$e]}`,"g");s=C}else if(m[ti]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(s===C)if(m[ii]===">")s=o??G,d=-1;else if(m[Ze]===void 0)d=-2;else d=s.lastIndex-m[ni].length,f=m[Ze],s=m[et]===void 0?C:m[et]==='"'?De:xe;else if(s===De||s===xe)s=C;else if(s===je||s===Qe)s=G;else s=C,o=void 0}console.assert(d===-1||s===C||s===xe||s===De,"unexpected parse state B");let O=s===C&&e[u+1].startsWith("/>")?" ":"";r+=s===G?D+jt:d>=0?(n.push(f),D.slice(0,d)+it+D.slice(d))+N+O:D+N+(d===-2?u:O)}let a=r+(e[i]||"<?>")+(t===se?"</svg>":t===ae?"</math>":"");return[ot(e,a),n]},at,ct,lt,di,X=(e,t,i)=>{if(t==null)throw TypeError(`The container to render into may not be ${t}`);let n=Gt++,r=i?.renderBefore??t,o=r._$litPart$;if(c&&c({kind:"begin render",id:n,value:e,container:t,options:i,part:o}),o===void 0){let s=i?.renderBefore??null;r._$litPart$=o=new Z(t.insertBefore(J(),s),s,void 0,i??{})}return o._$setValue(e),c&&c({kind:"end render",id:n,value:e,container:t,options:i,part:o}),o};var de=p(()=>{w=globalThis;w.litIssuedWarnings??=new Set,K=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!w.litIssuedWarnings.has(t)&&!w.litIssuedWarnings.has(e))console.warn(t),w.litIssuedWarnings.add(t)},queueMicrotask(()=>{K("dev-mode","Lit is in dev mode. Not recommended for production!")});T=w.ShadyDOM?.inUse&&w.ShadyDOM?.noPatch===!0?w.ShadyDOM.wrap:(e)=>e,oe=w.trustedTypes,Ke=oe?oe.createPolicy("lit-html",{createHTML:(e)=>e}):void 0,N=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+N,jt=`<${nt}>`,R=document,Ae=Array.isArray,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Qe=/>/g,C=new RegExp(`>|${Te}(?:(${ei}+)(${Te}*=${Te}*(?:${Zt}|("|')|))|$)`,"g"),xe=/'/g,De=/"/g,rt=/^(?:script|style|textarea|title)$/i,v=Ce(ri),ki=Ce(se),Mi=Ce(ae),L=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),tt=new WeakMap,I=R.createTreeWalker(R,129),U=le;at=class at extends ee{constructor(){super(...arguments);this.type=oi}_commitValue(e){if(this._sanitizer===void 0)this._sanitizer=U(this.element,this.name,"property");e=this._sanitizer(e),c&&c({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===h?void 0:e}};ct=class ct extends ee{constructor(){super(...arguments);this.type=si}_commitValue(e){c&&c({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==h),options:this.options}),T(this.element).toggleAttribute(this.name,!!e&&e!==h)}};lt=class lt extends ee{constructor(e,t,i,n,r){super(e,t,i,n,r);if(this.type=ai,this.strings!==void 0)throw Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if(e=F(this,e,t,0)??h,e===L)return;let i=this._$committedValue,n=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==h&&(i===h||n);if(c&&c({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:n,addListener:r,oldListener:i}),n)this.element.removeEventListener(this.name,this,i);if(r)this.element.addEventListener(this.name,this,e);this._$committedValue=e}handleEvent(e){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,e);else this._$committedValue.handleEvent(e)}};di=w.litHtmlPolyfillSupportDevMode;di?.(Q,Z);(w.litHtmlVersions??=[]).push("3.3.3");if(w.litHtmlVersions.length>1)queueMicrotask(()=>{K("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});X.setSanitizer=Kt,X.createSanitizer=Ne,X._testOnlyClearSanitizerFactoryDoNotCallOrElse=Jt});var ui=(e,t)=>e,Oe=!0,A,ut,E,hi;var ht=p(()=>{Y();de();Y();de();A=globalThis;if(Oe)A.litIssuedWarnings??=new Set,ut=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!A.litIssuedWarnings.has(t)&&!A.litIssuedWarnings.has(e))console.warn(t),A.litIssuedWarnings.add(t)};E=class E extends b{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(e),this.__childPart=X(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return L}};E._$litElement$=!0;E[ui("finalized",E)]=!0;A.litElementHydrateSupport?.({LitElement:E});hi=Oe?A.litElementPolyfillSupportDevMode:A.litElementPolyfillSupport;hi?.({LitElement:E});(A.litElementVersions??=[]).push("4.2.2");if(Oe&&A.litElementVersions.length>1)queueMicrotask(()=>{ut("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")})});var ue=p(()=>{Y();de();ht()});var B=(e)=>(t,i)=>{if(i!==void 0)i.addInitializer(()=>{customElements.define(e,t)});else customElements.define(e,t)};function x(e){return(t,i)=>typeof i==="object"?fi(e,t,i):mi(e,t,i)}var mt=!0,pt,mi=(e,t,i)=>{let n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0},pi,fi=(e=pi,t,i)=>{let{kind:n,metadata:r}=i;if(mt&&r==null)pt("missing-class-metadata",`The class ${t} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let o=globalThis.litPropertyMetadata.get(r);if(o===void 0)globalThis.litPropertyMetadata.set(r,o=new Map);if(n==="setter")e=Object.create(e),e.wrapped=!0;if(o.set(i.name,e),n==="accessor"){let{name:s}=i;return{set(a){let u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){if(a!==void 0)this._$changeProperty(s,void 0,e,a);return a}}}else if(n==="setter"){let{name:s}=i;return function(a){let u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error(`Unsupported decorator location: ${n}`)};var Pe=p(()=>{Y();if(mt)globalThis.litIssuedWarnings??=new Set,pt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)};pi={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:re}});function he(e){return x({...e,state:!0,attribute:!1})}var ft=p(()=>{Pe()});var gi=!0,_i;var gt=p(()=>{if(gi)globalThis.litIssuedWarnings??=new Set,_i=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)}});var _t=()=>{};var yt=()=>{};var bt=()=>{};var wt=()=>{};var pe=p(()=>{Pe();ft();gt();_t();yt();bt();wt()});var H="2026-09-28T21:17:31.870Z";var l;var Ie=p(()=>{l={HOLD_DURATION:1000,MOVEMENT_TOLERANCE:20,SHOW_NAME:!0,SHOW_STATE:!1,SHOW_ICON:!0,ICON_HEIGHT:80,CAP_STYLE:"rounded",HOLD_ACTION:"default"}});var vt={};He(vt,{PressAndHoldButtonCardEditor:()=>fe});var yi,bi,wi,fe;var Re=p(()=>{ye();ue();pe();Ie();yi=[{name:"entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"hold_action",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Default"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"call-service",label:"Call Service"}]}}}],bi=[{name:"service",selector:{text:{placeholder:"light.turn_on"}}},{name:"service_data",selector:{object:{}}}],wi=[{name:"hold_duration",selector:{number:{min:500,max:1e4,step:100,unit_of_measurement:"ms"}}},{name:"movement_tolerance",selector:{number:{min:1,max:50,step:1,unit_of_measurement:"px"}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}}]},{name:"icon_height",selector:{number:{min:20,max:150,step:2,unit_of_measurement:"px"}}},{name:"cap_style",selector:{select:{mode:"dropdown",options:[{value:"rounded",label:"Rounded"},{value:"none",label:"Square"}]}}}];fe=class fe extends E{constructor(){super(...arguments);this._computeLabel=(e)=>{switch(e.name){case"entity":return"Entity (Required)";case"name":return"Name (Optional)";case"icon":return"Icon (Optional)";case"hold_duration":return"Hold Duration (ms)";case"movement_tolerance":return"Movement Tolerance (px)";case"show_name":return"Show Name";case"show_state":return"Show State";case"show_icon":return"Show Icon";case"icon_height":return"Icon Height (px)";case"cap_style":return"Progress Ring Cap Style";case"hold_action":return"Hold Action";case"service":return"Service (e.g., light.turn_on)";case"service_data":return"Service Data (JSON)";default:return e.name}}}setConfig(e){this._config={hold_duration:l.HOLD_DURATION,movement_tolerance:l.MOVEMENT_TOLERANCE,show_name:l.SHOW_NAME,show_state:l.SHOW_STATE,show_icon:l.SHOW_ICON,icon_height:l.ICON_HEIGHT,cap_style:l.CAP_STYLE,hold_action:l.HOLD_ACTION,...e}}render(){if(!this.hass||!this._config)return v``;let e={...this._config};if(!e.entity||e.entity==="switch.example"){let i=Object.keys(this.hass.states).filter((n)=>{let r=n.split(".")[0];return["switch","light","input_boolean"].includes(r)});if(i.length>0)e.entity=i[0]}let t=this._buildSchema(e.hold_action,e.entity);return v`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="build-info">
        Built: ${H}
      </div>
    `}_buildSchema(e,t){let i=[...yi],n=i.find((r)=>r.name==="hold_action");if(n?.selector){let r=this._getDefaultActionLabel(t);n.selector.select.options[0].label=r}if(e==="call-service")i.push(...bi);return i.push(...wi),i}_getDefaultActionLabel(e){if(!e||!this.hass)return"Default";let t=this.hass.states[e];if(!t)return"Default";switch(t.entity_id.split(".")[0]){case"button":return"Default (Press)";case"light":case"switch":case"input_boolean":case"cover":return"Default (Toggle)";default:return"Default (More Info)"}}_valueChanged(e){let t=e.detail.value;if(!t||!this.hass)return;V(this,"config-changed",{config:t})}static get styles(){return W`
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
    `}};_([x({attribute:!1})],fe.prototype,"hass",void 0),_([he()],fe.prototype,"_config",void 0),fe=_([B("press-and-hold-button-card-editor")],fe)});ye();ue();pe();Ie();var Si={};He(Si,{PressAndHoldButtonCard:()=>ge});class te{constructor(e,t){this.host=e;this.options=t;this.holding=!1;this.startX=0;this.startY=0;this.pointerDown=(e)=>{if(e.preventDefault(),this.holding)return;this.startX=e.clientX,this.startY=e.clientY,e.target.setPointerCapture?.(e.pointerId),this.setHolding(!0),this.timer=setTimeout(()=>{this.stop(),this.options.onComplete()},this.options.duration())};this.pointerMove=(e)=>{if(!this.holding)return;if(Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>this.options.tolerance())this.stop()};this.pointerUp=(e)=>{if(e)try{e.target.releasePointerCapture?.(e.pointerId)}catch{}this.stop()};e.addController(this)}cancel(){this.stop()}hostDisconnected(){this.stop()}stop(){if(this.timer!==void 0)clearTimeout(this.timer),this.timer=void 0;this.setHolding(!1)}setHolding(e){if(this.holding===e)return;this.holding=e,this.host.requestUpdate()}}Re();ue();pe();var vi=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"]);function Et(e){if(!e)return"var(--primary-color)";return vi.has(e)?`var(--${e}-color)`:e}var St=1000,Ei=20;class Le extends E{constructor(){super(...arguments);this.hold=new te(this,{duration:()=>this.config?.hold_duration??St,tolerance:()=>this.config?.movement_tolerance??Ei,onComplete:()=>this.busyGate()});this.handlePointerDown=(e)=>{if(this.isBusy){e.preventDefault();return}this.hold.pointerDown(e)}}setConfig(e){this.config=e}busyGate(){if(this.isBusy)return;this.actionDispatch()}get isBusy(){let e=this.config?.busy_entity;return e!==void 0&&this.hass?.states[e]?.state==="on"}actionDispatch(){let e=this.config;if(!e?.service||!this.hass)return;let[t,i]=e.service.split(".",2);this.hass.callService(t,i,e.service_data??{})}render(){let e=this.config,i=(e&&this.hass?.states[e.entity])?.state==="on",n=e?.hold_duration??St,r=this.isBusy,o=i?e?.label_on:e?.label_off;return v`<div
      class="control ${i?"on":"off"} ${r?"busy":""} ${this.hold.holding?"holding":""}"
      aria-busy=${r?"true":"false"}
      aria-disabled=${r?"true":"false"}
      style="--control-color: ${Et(e?.color)}; --hold-duration: ${n}ms"
      @pointerdown=${this.handlePointerDown}
      @pointermove=${this.hold.pointerMove}
      @pointerup=${this.hold.pointerUp}
      @pointercancel=${this.hold.pointerUp}
      @pointerleave=${this.hold.pointerUp}
      @contextmenu=${(s)=>s.preventDefault()}
    >${o?v`<span class="label">${o}</span>`:""}</div>`}static styles=W`
    .control {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      box-sizing: border-box;
      height: var(--feature-height, 42px);
      border-radius: var(--feature-border-radius, 12px);
      border: 2px solid var(--control-color);
    }
    .control.on {
      background-color: var(--control-color);
    }
    .control.off {
      background-color: transparent;
    }
    .label {
      position: relative;
      z-index: 1;
      font-weight: 500;
      color: var(--control-color);
    }
    .control.on .label {
      color: var(--text-primary-color, #fff);
    }
    /* Busy: dimmed, with the border pulsing in the control's color. */
    .control.busy {
      cursor: progress;
      opacity: 0.5;
      animation: busy-pulse 1.2s ease-in-out infinite;
    }
    @keyframes busy-pulse {
      50% {
        border-color: transparent;
      }
    }
    /* The hold fill sweeps across the control for the hold duration. */
    .control::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 0;
      background-color: var(--primary-text-color, #000);
      opacity: 0.2;
    }
    .control.holding::after {
      animation: hold-fill var(--hold-duration) linear forwards;
    }
    @keyframes hold-fill {
      to {
        width: 100%;
      }
    }
  `}_([x({attribute:!1})],Le.prototype,"hass",void 0),_([x({attribute:!1})],Le.prototype,"context",void 0),_([x({attribute:!1})],Le.prototype,"config",void 0),Le=_([B("press-and-hold-card-feature")],Le);window.customCardFeatures=window.customCardFeatures||[];window.customCardFeatures.push({type:"press-and-hold-card-feature",name:"Press and hold",configurable:!0});customElements.get("press-and-hold-button-card-editor")||Promise.resolve().then(() => (Re(),vt));console.log(`\uD83D\uDE80 Nerdo UX loaded, built at ${H}`);window.__NERDO_UX_BUILD_TIMESTAMP__=H;class ge extends E{constructor(){super(...arguments);this.hold=new te(this,{duration:()=>this.config.hold_duration||l.HOLD_DURATION,tolerance:()=>this.config.movement_tolerance||l.MOVEMENT_TOLERANCE,onComplete:()=>this.executeAction()});this.handlePointerDown=(e)=>{e.stopPropagation(),this.hold.pointerDown(e)}}static get buildTimestamp(){return H}get buildTimestamp(){return H}static getStubConfig(e){let t="switch.example";if(e){let i=Object.keys(e.states).filter((n)=>{let r=n.split(".")[0];return["switch","light","input_boolean"].includes(r)});if(i.length>0)t=i[0]}return{type:"custom:press-and-hold-button-card",entity:t,hold_duration:l.HOLD_DURATION,movement_tolerance:l.MOVEMENT_TOLERANCE,show_name:l.SHOW_NAME,show_state:l.SHOW_STATE,show_icon:l.SHOW_ICON,icon_height:l.ICON_HEIGHT,cap_style:l.CAP_STYLE,hold_action:l.HOLD_ACTION}}setConfig(e){if(!e)throw Error("Invalid configuration");if(!e.entity)throw Error("You need to define an entity");this.config={hold_duration:l.HOLD_DURATION,movement_tolerance:l.MOVEMENT_TOLERANCE,show_name:l.SHOW_NAME,show_state:l.SHOW_STATE,show_icon:l.SHOW_ICON,icon_height:l.ICON_HEIGHT,cap_style:l.CAP_STYLE,hold_action:l.HOLD_ACTION,...e}}getCardSize(){return 1}static getConfigElement(){return document.createElement("press-and-hold-button-card-editor")}render(){if(!this.config||!this.hass)return v``;let e=this.hass.states[this.config.entity];if(!e)return v`
        <ha-card>
          <div class="error">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `;let t=this.config.name||e.attributes.friendly_name||e.entity_id,i=this.config.icon||e.attributes.icon||"mdi:power",n=e.state==="on",r=this.config.icon_height||80,o=this.hold.holding,s=this.config.hold_duration||l.HOLD_DURATION;return v`
      <ha-card>
        <div class="card-content">
          <div
            class="button ${n?"on":"off"} ${o?"holding":""}"
            style="--icon-height: ${r}px"
            @pointerdown=${this.handlePointerDown}
            @pointerup=${this.hold.pointerUp}
            @pointerleave=${this.hold.pointerUp}
            @pointercancel=${this.hold.pointerUp}
            @pointermove=${this.hold.pointerMove}
            @contextmenu=${(a)=>a.preventDefault()}
          >
            <div
              class="progress-ring ${o?"active animating":""} ${n?"turning-off":"turning-on"}"
              style="--hold-duration: ${s}ms"
            >
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
                  stroke-linecap="${this.config.cap_style==="rounded"?"round":"butt"}"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            ${this.config.show_icon!==!1?v`
                  <ha-icon
                    class="icon"
                    .icon=${i}
                  ></ha-icon>
                `:""}
          </div>
          ${this.config.show_name!==!1?v`<div class="name">${t}</div>`:""}
          ${this.config.show_state===!0?v`<div class="state">${e.state}</div>`:""}
        </div>
      </ha-card>
    `}executeAction(){if(!this.config.entity){console.error("Press and Hold Button Card: No entity configured");return}let e=this.hass.states[this.config.entity];if(!e){console.error(`Press and Hold Button Card: Entity not found: ${this.config.entity}`);return}console.log(`Press and Hold Button Card: Executing action for ${this.config.entity}`);let t=this.config.hold_action||"default";switch(t){case"default":this.executeDefaultAction(e);break;case"toggle":this.executeToggleAction(e);break;case"more-info":this.executeMoreInfoAction();break;case"call-service":this.executeCustomServiceAction();break;default:console.error(`Press and Hold Button Card: Unknown action: ${t}`);return}}executeDefaultAction(e){switch(e.entity_id.split(".")[0]){case"button":console.log("Default action for button: press"),P(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:"button.press",target:{entity_id:this.config.entity}}},"hold");break;case"light":case"switch":case"input_boolean":console.log("Default action for toggleable entity: toggle"),P(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;case"cover":console.log("Default action for cover: toggle"),P(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;default:console.log("Default action for other entity: more-info"),this.executeMoreInfoAction();break}}executeToggleAction(e){let t=e.entity_id.split(".")[0];if(["light","switch","input_boolean","cover","fan","media_player"].includes(t))console.log("Toggle action for compatible entity"),P(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");else console.warn(`Entity ${this.config.entity} does not support toggle action. Domain: ${t}`),this.executeMoreInfoAction()}executeMoreInfoAction(){console.log("More info action"),P(this,this.hass,{entity:this.config.entity,hold_action:{action:"more-info"}},"hold")}executeCustomServiceAction(){if(!this.config.service){console.error("No service specified for call-service action");return}if(this.config.service.split(".").length!==2){console.error(`Invalid service format: ${this.config.service}. Expected: domain.service`);return}console.log(`Custom service action: ${this.config.service}`);let t=this.config.service_data||{};P(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:this.config.service,service_data:t,target:{entity_id:this.config.entity}}},"hold")}static get styles(){return W`
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
    `}updated(e){if(super.updated(e),e.has("config"))this.hold.cancel()}}_([x({attribute:!1})],ge.prototype,"hass",void 0),_([he()],ge.prototype,"config",void 0),ge=_([B("press-and-hold-button-card")],ge);window.customCards=window.customCards||[];window.customCards.push({type:"press-and-hold-button-card",name:"Press and Hold Button Card",description:"A button card that requires press and hold to toggle entities",preview:!0,documentationURL:"https://github.com/nerdo/hacs-nerdo-ux"});})();
