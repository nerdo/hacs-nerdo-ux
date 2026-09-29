(()=>{var{defineProperty:be,getOwnPropertyNames:xt,getOwnPropertyDescriptor:Dt}=Object,kt=Object.prototype.hasOwnProperty;function Nt(e){return this[e]}var At=(e)=>{var t=(Ve??=new WeakMap).get(e),r;if(t)return t;if(t=be({},"__esModule",{value:!0}),e&&typeof e==="object"||typeof e==="function"){for(var i of xt(e))if(!kt.call(t,i))be(t,i,{get:Nt.bind(e,i),enumerable:!(r=Dt(e,i))||r.enumerable})}return Ve.set(e,t),t},Ve;var Ct=(e)=>e;function Mt(e,t){this[e]=Ct.bind(null,t)}var We=(e,t)=>{for(var r in t)be(e,r,{get:t[r],enumerable:!0,configurable:!0,set:Mt.bind(t,r)})};var y=function(e,t,r,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)if(s=e[a])o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o;return n>3&&o&&Object.defineProperty(t,r,o),o};var f=(e,t,r)=>()=>{if(e)try{t=e(e=0)}catch(i){r=[i]}if(r)throw r[0];return t};function Pt(e){return e.substr(0,e.indexOf("."))}var ze,Fe,Ot,V=(e,t,r,i)=>{i=i||{},r=r===null||r===void 0?{}:r;let n=new Event(t,{bubbles:i.bubbles===void 0?!0:i.bubbles,cancelable:Boolean(i.cancelable),composed:i.composed===void 0?!0:i.composed});return n.detail=r,e.dispatchEvent(n),n},ie=(e)=>{V(window,"haptic",e)},It=(e,t,r=!1)=>{if(r)history.replaceState(null,"",t);else history.pushState(null,"",t);V(window,"location-changed",{replace:r})},Rt=(e,t,r=!0)=>{let i=Pt(t),n=i==="group"?"homeassistant":i,o;switch(i){case"lock":o=r?"unlock":"lock";break;case"cover":o=r?"open_cover":"close_cover";break;default:o=r?"turn_on":"turn_off"}return e.callService(n,o,{entity_id:t})},Lt=(e,t)=>{let r=Ot.includes(e.states[t].state);return Rt(e,t,r)},Ut=(e,t,r,i)=>{if(!i)i={action:"more-info"};if(i.confirmation&&(!i.confirmation.exemptions||!i.confirmation.exemptions.some((n)=>n.user===t.user.id))){if(ie("warning"),!confirm(i.confirmation.text||`Are you sure you want to ${i.action}?`))return}switch(i.action){case"more-info":if(r.entity||r.camera_image)V(e,"hass-more-info",{entityId:r.entity?r.entity:r.camera_image});break;case"navigate":if(i.navigation_path)It(e,i.navigation_path);break;case"url":if(i.url_path)window.open(i.url_path);break;case"toggle":if(r.entity)Lt(t,r.entity),ie("success");break;case"call-service":{if(!i.service){ie("failure");return}let[n,o]=i.service.split(".",2);t.callService(n,o,i.service_data,i.target),ie("success");break}case"fire-dom-event":V(e,"ll-custom",i)}},O=(e,t,r,i)=>{let n;if(i==="double_tap"&&r.double_tap_action)n=r.double_tap_action;else if(i==="hold"&&r.hold_action)n=r.hold_action;else if(i==="tap"&&r.tap_action)n=r.tap_action;Ut(e,t,r,n)};var ve=f(()=>{(function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"})(ze||(ze={}));(function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"})(Fe||(Fe={}));Ot=["closed","locked","off"]});class Se{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet,t=this._strings;if(we&&e===void 0){let r=t!==void 0&&t.length===1;if(r)e=Be.get(t);if(e===void 0){if((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),r)Be.set(t,e)}}return e}toString(){return this.cssText}}var ne,we,Ee,Be,Ht=(e)=>{if(e._$cssResult$===!0)return e.cssText;else if(typeof e==="number")return e;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Vt=(e)=>new Se(typeof e==="string"?e:String(e),void 0,Ee),W=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((i,n,o)=>i+Ht(n)+e[o+1],e[0]);return new Se(r,e,Ee)},qe=(e,t)=>{if(we)e.adoptedStyleSheets=t.map((r)=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let i=document.createElement("style"),n=ne.litNonce;if(n!==void 0)i.setAttribute("nonce",n);i.textContent=r.cssText,e.appendChild(i)}},Wt=(e)=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Vt(t)},$e;var Te=f(()=>{ne=globalThis,we=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol(),Be=new WeakMap;$e=we?(e)=>e:(e)=>e instanceof CSSStyleSheet?Wt(e):e});var zt,Ft,Ye,Bt,qt,Ge,Yt=!1,b,w=!0,x,Xe,Gt,je,Xt,z=(e,t)=>e,Y,oe=(e,t)=>!zt(e,t),Ke,E;var G=f(()=>{Te();Te();({is:zt,defineProperty:Ft,getOwnPropertyDescriptor:Ye,getOwnPropertyNames:Bt,getOwnPropertySymbols:qt,getPrototypeOf:Ge}=Object),b=globalThis;if(Yt)b.customElements??=customElements;Xe=b.trustedTypes,Gt=Xe?Xe.emptyScript:"",je=w?b.reactiveElementPolyfillSupportDevMode:b.reactiveElementPolyfillSupport;if(w)b.litIssuedWarnings??=new Set,x=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!b.litIssuedWarnings.has(t)&&!b.litIssuedWarnings.has(e))console.warn(t),b.litIssuedWarnings.add(t)},queueMicrotask(()=>{if(x("dev-mode","Lit is in dev mode. Not recommended for production!"),b.ShadyDOM?.inUse&&je===void 0)x("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});Xt=w?(e)=>{if(!b.emitLitDebugLogEvents)return;b.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))}:void 0,Y={toAttribute(e,t){switch(t){case Boolean:e=e?Gt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e);break}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(i){r=null}break}return r}},Ke={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata");b.litPropertyMetadata??=new WeakMap;E=class E extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=Ke){if(t.state)t.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(e))t=Object.create(t),t.wrapped=!0;if(this.elementProperties.set(e,t),!t.noAccessor){let r=w?Symbol.for(`${String(e)} (@property() cache)`):Symbol(),i=this.getPropertyDescriptor(e,r,t);if(i!==void 0)Ft(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=Ye(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};if(w&&i==null){if("value"in(Ye(this.prototype,e)??{}))throw Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);x("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:i,set(o){let s=i?.call(this);n?.call(this,o),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ke}static __prepare(){if(this.hasOwnProperty(z("elementProperties",this)))return;let e=Ge(this);if(e.finalize(),e._initializers!==void 0)this._initializers=[...e._initializers];this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(z("properties",this))){let t=this.properties,r=[...Bt(t),...qt(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this.__attributeToPropertyMap=new Map;for(let[t,r]of this.elementProperties){let i=this.__attributeNameForProperty(t,r);if(i!==void 0)this.__attributeToPropertyMap.set(i,t)}if(this.elementStyles=this.finalizeStyles(this.styles),w){if(this.hasOwnProperty("createProperty"))x("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))x("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift($e(i))}else if(e!==void 0)t.push($e(e));return t}static __attributeNameForProperty(e,t){let r=t.attribute;return r===!1?void 0:typeof r==="string"?r:typeof e==="string"?e.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e)=>this.enableUpdating=e),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e)=>e(this))}addController(e){if((this.__controllers??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected)e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())if(this.hasOwnProperty(r))e.set(r,this[r]),delete this[r];if(e.size>0)this.__instanceProperties=e}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$attributeToProperty(e,r)}__propertyToAttribute(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor.__attributeNameForProperty(e,i);if(n!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:Y).toAttribute(t,i.type);if(w&&this.constructor.enabledWarnings.includes("migration")&&s===void 0)x("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=e,s==null)this.removeAttribute(n);else this.setAttribute(n,s);this.__reflectingProperty=null}}_$attributeToProperty(e,t){let r=this.constructor,i=r.__attributeToPropertyMap.get(e);if(i!==void 0&&this.__reflectingProperty!==i){let n=r.getPropertyOptions(i),o=typeof n.converter==="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Y;this.__reflectingProperty=i;let s=o.fromAttribute(t,n.type);this[i]=s??this.__defaultValues?.get(i)??s,this.__reflectingProperty=null}}requestUpdate(e,t,r,i=!1,n){if(e!==void 0){if(w&&e instanceof Event)x("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let o=this.constructor;if(i===!1)n=this[e];if(r??=o.getPropertyOptions(e),(r.hasChanged??oe)(n,t)||r.useDefault&&r.reflect&&n===this.__defaultValues?.get(e)&&!this.hasAttribute(o.__attributeNameForProperty(e,r)))this._$changeProperty(e,t,r);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(e,t,{useDefault:r,reflect:i,wrapped:n},o){if(r&&!(this.__defaultValues??=new Map).has(e)){if(this.__defaultValues.set(e,o??t??this[e]),n!==!0||o!==void 0)return}if(!this._$changedProperties.has(e)){if(!this.hasUpdated&&!r)t=void 0;this._$changedProperties.set(e,t)}if(i===!0&&this.__reflectingProperty!==e)(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();if(e!=null)await e;return!this.isUpdatePending}scheduleUpdate(){let e=this.performUpdate();if(w&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof e?.then==="function")x("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return e}performUpdate(){if(!this.isUpdatePending)return;if(Xt?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),w){let n=[...this.constructor.elementProperties.keys()].filter((o)=>this.hasOwnProperty(o)&&(o in Ge(this)));if(n.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${n.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[i,n]of this.__instanceProperties)this[i]=n;this.__instanceProperties=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:o}=n,s=this[i];if(o===!0&&!this._$changedProperties.has(i)&&s!==void 0)this._$changeProperty(i,void 0,n,s)}}let e=!1,t=this._$changedProperties;try{if(e=this.shouldUpdate(t),e)this.willUpdate(t),this.__controllers?.forEach((r)=>r.hostUpdate?.()),this.update(t);else this.__markUpdated()}catch(r){throw e=!1,this.__markUpdated(),r}if(e)this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){if(this.__controllers?.forEach((t)=>t.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(e);if(this.updated(e),w&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))x("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((t)=>this.__propertyToAttribute(t,this[t])),this.__markUpdated()}updated(e){}firstUpdated(e){}};E.elementStyles=[];E.shadowRootOptions={mode:"open"};E[z("elementProperties",E)]=new Map;E[z("finalized",E)]=new Map;je?.({ReactiveElement:E});if(w){E.enabledWarnings=["change-in-update","async-perform-update"];let e=function(t){if(!t.hasOwnProperty(z("enabledWarnings",t)))t.enabledWarnings=t.enabledWarnings.slice()};E.enableWarning=function(t){if(e(this),!this.enabledWarnings.includes(t))this.enabledWarnings.push(t)},E.disableWarning=function(t){e(this);let r=this.enabledWarnings.indexOf(t);if(r>=0)this.enabledWarnings.splice(r,1)}}(b.reactiveElementVersions??=[]).push("2.1.2");if(w&&b.reactiveElementVersions.length>1)queueMicrotask(()=>{x("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")})});function at(e,t){if(!Ce(e)||!e.hasOwnProperty("raw")){let r="invalid template strings array";throw r=`
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
`),Error(r)}return Je!==void 0?Je.createHTML(t):t}class Z{constructor({strings:e,["_$litType$"]:t},r){this.parts=[];let i,n=0,o=0,s=e.length-1,a=this.parts,[u,v]=ur(e,t);if(this.el=Z.createElement(u,r),I.currentNode=this.el.content,t===ae||t===ce){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}while((i=I.nextNode())!==null&&a.length<s){if(i.nodeType===1){{let c=i.localName;if(/^(?:textarea|template)$/i.test(c)&&i.innerHTML.includes(A)){let m=`Expressions are not supported inside \`${c}\` elements. See https://lit.dev/msg/expression-in-${c} for more information.`;if(c==="template")throw Error(m);else j("",m)}}if(i.hasAttributes()){for(let c of i.getAttributeNames())if(c.endsWith(nt)){let m=v[o++],h=i.getAttribute(c).split(A),k=/([.?@])?(.*)/.exec(m);a.push({type:Me,index:n,name:k[2],strings:h,ctor:k[1]==="."?lt:k[1]==="?"?dt:k[1]==="@"?ut:te}),i.removeAttribute(c)}else if(c.startsWith(A))a.push({type:Pe,index:n}),i.removeAttribute(c)}if(st.test(i.tagName)){let c=i.textContent.split(A),m=c.length-1;if(m>0){i.textContent=se?se.emptyScript:"";for(let _=0;_<m;_++)i.append(c[_],J()),I.nextNode(),a.push({type:le,index:++n});i.append(c[m],J())}}}else if(i.nodeType===8)if(i.data===ot)a.push({type:le,index:n});else{let m=-1;while((m=i.data.indexOf(A,m+1))!==-1)a.push({type:dr,index:n}),m+=A.length-1}n++}if(v.length!==o)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");l&&l({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){let r=R.createElement("template");return r.innerHTML=e,r}}function F(e,t,r=e,i){if(t===L)return t;let n=i!==void 0?r.__directives?.[i]:r.__directive,o=Q(t)?void 0:t._$litDirective$;if(n?.constructor!==o){if(n?._$notifyDirectiveConnectionChanged?.(!1),o===void 0)n=void 0;else n=new o(e),n._$initialize(e,r,i);if(i!==void 0)(r.__directives??=[])[i]=n;else r.__directive=n}if(n!==void 0)t=F(e,n._$resolve(e,t.values),n,i);return t}class ct{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){let{el:{content:t},parts:r}=this._$template,i=(e?.creationScope??R).importNode(t,!0);I.currentNode=i;let n=I.nextNode(),o=0,s=0,a=r[0];while(a!==void 0){if(o===a.index){let u;if(a.type===le)u=new ee(n,n.nextSibling,this,e);else if(a.type===Me)u=new a.ctor(n,a.name,a.strings,this,e);else if(a.type===Pe)u=new ht(n,this,e);this._$parts.push(u),a=r[++s]}if(o!==a?.index)n=I.nextNode(),o++}return I.currentNode=R,i}_update(e){let t=0;for(let r of this._$parts){if(r!==void 0)if(l&&l({kind:"set part",part:r,value:e[t],valueIndex:t,values:e,templateInstance:this}),r.strings!==void 0)r._$setValue(e,r,t),t+=r.strings.length-2;else r._$setValue(e[t]);t++}}}class ee{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,r,i){this.type=le,this._$committedValue=p,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=r,this.options=i,this.__isConnected=i?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=D(this._$startNode).parentNode,t=this._$parent;if(t!==void 0&&e?.nodeType===11)e=t.parentNode;return e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=F(this,e,t),Q(e)){if(e===p||e==null||e===""){if(this._$committedValue!==p)l&&l({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=p}else if(e!==this._$committedValue&&e!==L)this._commitText(e)}else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(this.options?.host===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else if(er(e))this._commitIterable(e);else this._commitText(e)}_insert(e){return D(D(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),U!==de){let t=this._$startNode.parentNode?.nodeName;if(t==="STYLE"||t==="SCRIPT"){let r="Forbidden";if(t==="STYLE")r="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else r="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(r)}}l&&l({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==p&&Q(this._$committedValue)){let t=D(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Ae(t,"data","property");e=this._textSanitizer(e),l&&l({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{let t=R.createTextNode("");if(this._commitNode(t),this._textSanitizer===void 0)this._textSanitizer=Ae(t,"data","property");e=this._textSanitizer(e),l&&l({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){let{values:t,["_$litType$"]:r}=e,i=typeof r==="number"?this._$getTemplate(e):(r.el===void 0&&(r.el=Z.createElement(at(r.h,r.h[0]),this.options)),r);if(this._$committedValue?._$template===i)l&&l({kind:"template updating",template:i,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{let n=new ct(i,this),o=n._clone(this.options);l&&l({kind:"template instantiated",template:i,instance:n,parts:n._$parts,options:this.options,fragment:o,values:t}),n._update(t),l&&l({kind:"template instantiated and updated",template:i,instance:n,parts:n._$parts,options:this.options,fragment:o,values:t}),this._commitNode(o),this._$committedValue=n}}_$getTemplate(e){let t=it.get(e.strings);if(t===void 0)it.set(e.strings,t=new Z(e));return t}_commitIterable(e){if(!Ce(this._$committedValue))this._$committedValue=[],this._$clear();let t=this._$committedValue,r=0,i;for(let n of e){if(r===t.length)t.push(i=new ee(this._insert(J()),this._insert(J()),this,this.options));else i=t[r];i._$setValue(n),r++}if(r<t.length)this._$clear(i&&D(i._$endNode).nextSibling,r),t.length=r}_$clear(e=D(this._$startNode).nextSibling,t){this._$notifyConnectionChanged?.(!1,!0,t);while(e!==this._$endNode){let r=D(e).nextSibling;D(e).remove(),e=r}}setConnected(e){if(this._$parent===void 0)this.__isConnected=e,this._$notifyConnectionChanged?.(e);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class te{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,r,i,n){if(this.type=Me,this._$committedValue=p,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=i,this.options=n,r.length>2||r[0]!==""||r[1]!=="")this._$committedValue=Array(r.length-1).fill(new String),this.strings=r;else this._$committedValue=p;this._sanitizer=void 0}_$setValue(e,t=this,r,i){let n=this.strings,o=!1;if(n===void 0){if(e=F(this,e,t,0),o=!Q(e)||e!==this._$committedValue&&e!==L,o)this._$committedValue=e}else{let s=e;e=n[0];let a,u;for(a=0;a<n.length-1;a++){if(u=F(this,s[r+a],t,a),u===L)u=this._$committedValue[a];if(o||=!Q(u)||u!==this._$committedValue[a],u===p)e=p;else if(e!==p)e+=(u??"")+n[a+1];this._$committedValue[a]=u}}if(o&&!i)this._commitValue(e)}_commitValue(e){if(e===p)D(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=U(this.element,this.name,"attribute");e=this._sanitizer(e??""),l&&l({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),D(this.element).setAttribute(this.name,e??"")}}}class ht{constructor(e,t,r){this.element=e,this.type=Pe,this._$disconnectableChildren=void 0,this._$parent=t,this.options=r}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){l&&l({kind:"commit to element binding",element:this.element,value:e,options:this.options}),F(this,e)}}var S,l=(e)=>{if(!S.emitLitDebugLogEvents)return;S.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},Kt=0,j,D,se,Je,jt=(e)=>e,de=(e,t,r)=>jt,Jt=(e)=>{if(U!==de)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");U=e},Qt=()=>{U=de},Ae=(e,t,r)=>U(e,t,r),nt="$lit$",A,ot,Zt,R,J=()=>R.createComment(""),Q=(e)=>e===null||typeof e!="object"&&typeof e!="function",Ce,er=(e)=>Ce(e)||typeof e?.[Symbol.iterator]==="function",xe=`[ 	
\f\r]`,tr=`[^ 	
\f\r"'\`<>=]`,rr=`[^\\s"'>=/]`,X,Qe=1,De=2,ir=3,Ze,et,P,nr=0,tt=1,or=2,rt=3,ke,Ne,st,sr=1,ae=2,ce=3,Me=1,le=2,ar=3,cr=4,lr=5,Pe=6,dr=7,Oe=(e)=>(t,...r)=>{if(t.some((i)=>i===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(r.some((i)=>i?._$litStatic$))j("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:e,strings:t,values:r}},g,Ir,Rr,L,p,it,I,U,ur=(e,t)=>{let r=e.length-1,i=[],n=t===ae?"<svg>":t===ce?"<math>":"",o,s=X;for(let u=0;u<r;u++){let v=e[u],c=-1,m,_=0,h;while(_<v.length){if(s.lastIndex=_,h=s.exec(v),h===null)break;if(_=s.lastIndex,s===X){if(h[Qe]==="!--")s=Ze;else if(h[Qe]!==void 0)s=et;else if(h[De]!==void 0){if(st.test(h[De]))o=new RegExp(`</${h[De]}`,"g");s=P}else if(h[ir]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(s===P)if(h[nr]===">")s=o??X,c=-1;else if(h[tt]===void 0)c=-2;else c=s.lastIndex-h[or].length,m=h[tt],s=h[rt]===void 0?P:h[rt]==='"'?Ne:ke;else if(s===Ne||s===ke)s=P;else if(s===Ze||s===et)s=X;else s=P,o=void 0}console.assert(c===-1||s===P||s===ke||s===Ne,"unexpected parse state B");let k=s===P&&e[u+1].startsWith("/>")?" ":"";n+=s===X?v+Zt:c>=0?(i.push(m),v.slice(0,c)+nt+v.slice(c))+A+k:v+A+(c===-2?u:k)}let a=n+(e[r]||"<?>")+(t===ae?"</svg>":t===ce?"</math>":"");return[at(e,a),i]},lt,dt,ut,hr,K=(e,t,r)=>{if(t==null)throw TypeError(`The container to render into may not be ${t}`);let i=Kt++,n=r?.renderBefore??t,o=n._$litPart$;if(l&&l({kind:"begin render",id:i,value:e,container:t,options:r,part:o}),o===void 0){let s=r?.renderBefore??null;n._$litPart$=o=new ee(t.insertBefore(J(),s),s,void 0,r??{})}return o._$setValue(e),l&&l({kind:"end render",id:i,value:e,container:t,options:r,part:o}),o};var ue=f(()=>{S=globalThis;S.litIssuedWarnings??=new Set,j=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!S.litIssuedWarnings.has(t)&&!S.litIssuedWarnings.has(e))console.warn(t),S.litIssuedWarnings.add(t)},queueMicrotask(()=>{j("dev-mode","Lit is in dev mode. Not recommended for production!")});D=S.ShadyDOM?.inUse&&S.ShadyDOM?.noPatch===!0?S.ShadyDOM.wrap:(e)=>e,se=S.trustedTypes,Je=se?se.createPolicy("lit-html",{createHTML:(e)=>e}):void 0,A=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+A,Zt=`<${ot}>`,R=document,Ce=Array.isArray,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,et=/>/g,P=new RegExp(`>|${xe}(?:(${rr}+)(${xe}*=${xe}*(?:${tr}|("|')|))|$)`,"g"),ke=/'/g,Ne=/"/g,st=/^(?:script|style|textarea|title)$/i,g=Oe(sr),Ir=Oe(ae),Rr=Oe(ce),L=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),it=new WeakMap,I=R.createTreeWalker(R,129),U=de;lt=class lt extends te{constructor(){super(...arguments);this.type=ar}_commitValue(e){if(this._sanitizer===void 0)this._sanitizer=U(this.element,this.name,"property");e=this._sanitizer(e),l&&l({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===p?void 0:e}};dt=class dt extends te{constructor(){super(...arguments);this.type=cr}_commitValue(e){l&&l({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==p),options:this.options}),D(this.element).toggleAttribute(this.name,!!e&&e!==p)}};ut=class ut extends te{constructor(e,t,r,i,n){super(e,t,r,i,n);if(this.type=lr,this.strings!==void 0)throw Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if(e=F(this,e,t,0)??p,e===L)return;let r=this._$committedValue,i=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||i);if(l&&l({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:i,addListener:n,oldListener:r}),i)this.element.removeEventListener(this.name,this,r);if(n)this.element.addEventListener(this.name,this,e);this._$committedValue=e}handleEvent(e){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,e);else this._$committedValue.handleEvent(e)}};hr=S.litHtmlPolyfillSupportDevMode;hr?.(Z,ee);(S.litHtmlVersions??=[]).push("3.3.3");if(S.litHtmlVersions.length>1)queueMicrotask(()=>{j("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});K.setSanitizer=Jt,K.createSanitizer=Ae,K._testOnlyClearSanitizerFactoryDoNotCallOrElse=Qt});var mr=(e,t)=>e,Ie=!0,C,mt,T,pr;var pt=f(()=>{G();ue();G();ue();C=globalThis;if(Ie)C.litIssuedWarnings??=new Set,mt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!C.litIssuedWarnings.has(t)&&!C.litIssuedWarnings.has(e))console.warn(t),C.litIssuedWarnings.add(t)};T=class T extends E{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(e),this.__childPart=K(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return L}};T._$litElement$=!0;T[mr("finalized",T)]=!0;C.litElementHydrateSupport?.({LitElement:T});pr=Ie?C.litElementPolyfillSupportDevMode:C.litElementPolyfillSupport;pr?.({LitElement:T});(C.litElementVersions??=[]).push("4.2.2");if(Ie&&C.litElementVersions.length>1)queueMicrotask(()=>{mt("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")})});var he=f(()=>{G();ue();pt()});var B=(e)=>(t,r)=>{if(r!==void 0)r.addInitializer(()=>{customElements.define(e,t)});else customElements.define(e,t)};function N(e){return(t,r)=>typeof r==="object"?_r(e,t,r):fr(e,t,r)}var ft=!0,gt,fr=(e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),i?Object.getOwnPropertyDescriptor(t,r):void 0},gr,_r=(e=gr,t,r)=>{let{kind:i,metadata:n}=r;if(ft&&n==null)gt("missing-class-metadata",`The class ${t} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let o=globalThis.litPropertyMetadata.get(n);if(o===void 0)globalThis.litPropertyMetadata.set(n,o=new Map);if(i==="setter")e=Object.create(e),e.wrapped=!0;if(o.set(r.name,e),i==="accessor"){let{name:s}=r;return{set(a){let u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){if(a!==void 0)this._$changeProperty(s,void 0,e,a);return a}}}else if(i==="setter"){let{name:s}=r;return function(a){let u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error(`Unsupported decorator location: ${i}`)};var Re=f(()=>{G();if(ft)globalThis.litIssuedWarnings??=new Set,gt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)};gr={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:oe}});function q(e){return N({...e,state:!0,attribute:!1})}var _t=f(()=>{Re()});var yr=!0,br;var yt=f(()=>{if(yr)globalThis.litIssuedWarnings??=new Set,br=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)}});var bt=()=>{};var vt=()=>{};var wt=()=>{};var Et=()=>{};var pe=f(()=>{Re();_t();yt();bt();vt();wt();Et()});var H="2026-09-29T15:25:26.310Z";var d;var Le=f(()=>{d={HOLD_DURATION:1000,MOVEMENT_TOLERANCE:20,SHOW_NAME:!0,SHOW_STATE:!1,SHOW_ICON:!0,ICON_HEIGHT:80,CAP_STYLE:"rounded",HOLD_ACTION:"default"}});var St={};We(St,{PressAndHoldButtonCardEditor:()=>fe});var vr,wr,Er,fe;var Ue=f(()=>{ve();he();pe();Le();vr=[{name:"entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"hold_action",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Default"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"call-service",label:"Call Service"}]}}}],wr=[{name:"service",selector:{text:{placeholder:"light.turn_on"}}},{name:"service_data",selector:{object:{}}}],Er=[{name:"hold_duration",selector:{number:{min:500,max:1e4,step:100,unit_of_measurement:"ms"}}},{name:"movement_tolerance",selector:{number:{min:1,max:50,step:1,unit_of_measurement:"px"}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}}]},{name:"icon_height",selector:{number:{min:20,max:150,step:2,unit_of_measurement:"px"}}},{name:"cap_style",selector:{select:{mode:"dropdown",options:[{value:"rounded",label:"Rounded"},{value:"none",label:"Square"}]}}}];fe=class fe extends T{constructor(){super(...arguments);this._computeLabel=(e)=>{switch(e.name){case"entity":return"Entity (Required)";case"name":return"Name (Optional)";case"icon":return"Icon (Optional)";case"hold_duration":return"Hold Duration (ms)";case"movement_tolerance":return"Movement Tolerance (px)";case"show_name":return"Show Name";case"show_state":return"Show State";case"show_icon":return"Show Icon";case"icon_height":return"Icon Height (px)";case"cap_style":return"Progress Ring Cap Style";case"hold_action":return"Hold Action";case"service":return"Service (e.g., light.turn_on)";case"service_data":return"Service Data (JSON)";default:return e.name}}}setConfig(e){this._config={hold_duration:d.HOLD_DURATION,movement_tolerance:d.MOVEMENT_TOLERANCE,show_name:d.SHOW_NAME,show_state:d.SHOW_STATE,show_icon:d.SHOW_ICON,icon_height:d.ICON_HEIGHT,cap_style:d.CAP_STYLE,hold_action:d.HOLD_ACTION,...e}}render(){if(!this.hass||!this._config)return g``;let e={...this._config};if(!e.entity||e.entity==="switch.example"){let r=Object.keys(this.hass.states).filter((i)=>{let n=i.split(".")[0];return["switch","light","input_boolean"].includes(n)});if(r.length>0)e.entity=r[0]}let t=this._buildSchema(e.hold_action,e.entity);return g`
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
    `}_buildSchema(e,t){let r=[...vr],i=r.find((n)=>n.name==="hold_action");if(i?.selector){let n=this._getDefaultActionLabel(t);i.selector.select.options[0].label=n}if(e==="call-service")r.push(...wr);return r.push(...Er),r}_getDefaultActionLabel(e){if(!e||!this.hass)return"Default";let t=this.hass.states[e];if(!t)return"Default";switch(t.entity_id.split(".")[0]){case"button":return"Default (Press)";case"light":case"switch":case"input_boolean":case"cover":return"Default (Toggle)";default:return"Default (More Info)"}}_valueChanged(e){let t=e.detail.value;if(!t||!this.hass)return;V(this,"config-changed",{config:t})}static get styles(){return W`
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
    `}};y([N({attribute:!1})],fe.prototype,"hass",void 0),y([q()],fe.prototype,"_config",void 0),fe=y([B("press-and-hold-button-card-editor")],fe)});ve();he();pe();Le();var kr={};We(kr,{PressAndHoldButtonCard:()=>_e});class re{constructor(e,t){this.host=e;this.options=t;this.holding=!1;this.startX=0;this.startY=0;this.startedAt=0;this.pointerDown=(e)=>{if(e.preventDefault(),this.holding)return;this.startX=e.clientX,this.startY=e.clientY,this.startedAt=performance.now(),e.target.setPointerCapture?.(e.pointerId),this.setHolding(!0),this.timer=setTimeout(()=>{this.stop(!1),this.options.onComplete()},this.options.duration())};this.pointerMove=(e)=>{if(!this.holding)return;if(Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>this.options.tolerance())this.stop(!0)};this.pointerUp=(e)=>{if(e)try{e.target.releasePointerCapture?.(e.pointerId)}catch{}this.stop(!0)};e.addController(this)}cancel(){this.stop(!0)}hostDisconnected(){this.stop(!0)}stop(e){let t=this.holding;if(this.timer!==void 0)clearTimeout(this.timer),this.timer=void 0;if(this.setHolding(!1),e&&t){let r=(performance.now()-this.startedAt)/this.options.duration();this.options.onCancel?.(Math.min(Math.max(r,0),1))}}setHolding(e){if(this.holding===e)return;this.holding=e,this.host.requestUpdate()}}Ue();he();pe();var Sr=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"]);function ge(e){if(!e)return"var(--primary-color)";return Sr.has(e)?`var(--${e}-color)`:e}var $t=1000,$r=20,Tr=42,xr=2,Dr={recede:150,fade:250,shake:300};class He extends T{constructor(){super(...arguments);this.hold=new re(this,{duration:()=>this.config?.hold_duration??$t,tolerance:()=>this.config?.movement_tolerance??$r,onComplete:()=>this.busyGate(),onCancel:(e)=>this.startCancel(e)});this.handlePointerDown=(e)=>{if(this.isBusy){e.preventDefault();return}this.hold.pointerDown(e)}}partMs(e){return this.config?.[`${e}_duration`]??Dr[e]}startCancel(e){let t=this.config?.cancel_animation??"recede";if(t==="none")return;let r=t.split("-");clearTimeout(this.cancelTimer),this.cancelling={parts:r,progress:e},this.cancelTimer=setTimeout(()=>{this.cancelling=void 0},Math.max(...r.map((i)=>this.partMs(i))))}setConfig(e){this.config=e}busyGate(){if(this.isBusy)return;this.actionDispatch()}get isBusy(){let e=this.config?.busy_entity;return e!==void 0&&this.hass?.states[e]?.state==="on"}actionDispatch(){let e=this.config;if(!e?.service||!this.hass)return;let[t,r]=e.service.split(".",2);this.hass.callService(t,r,e.service_data??{})}render(){let e=this.config,r=(e&&this.hass?.states[e.entity])?.state==="on",i=e?.hold_duration??$t,n=this.isBusy,o=r?e?.label_on:e?.label_off,s=e?.style==="bar"?"bar":"ring",a=e?.icon?g`<ha-icon class="icon" .icon=${e.icon}></ha-icon>`:"",u=o?g`<span class="label">${o}</span>`:"",v=e?.button_size??Tr,c=e?.progress_width??Math.round(v*0.12),m=xr+c,_=v+2*m,h=_/2,k=h-c/2,Tt=s==="ring"?g`<svg
            class="progress ${r?"turning-off":"turning-on"}"
            viewBox="0 0 ${_} ${_}"
            style="top: calc(-${m}px - var(--control-border-width)); left: calc(-${m}px - var(--control-border-width)); width: ${_}px; height: ${_}px"
          >
            <circle class="progress-track" cx=${h} cy=${h} r=${k}
              stroke-width=${c} pathLength="300"></circle>
            <circle class="progress-bar" cx=${h} cy=${h} r=${k}
              stroke-width=${c} pathLength="300"></circle>
          </svg>`:"";return g`<div class="feature ${s}"><div
      class="control ${s} ${r?"on":"off"} ${n?"busy":""} ${this.hold.holding?"holding":""} ${this.cancelling?`cancelling ${this.cancelling.parts.map((ye)=>`cancel-${ye}`).join(" ")}`:""}"
      aria-busy=${n?"true":"false"}
      aria-disabled=${n?"true":"false"}
      style="--control-color: ${ge(e?.color)}; --hold-duration: ${i}ms${s==="ring"?`; --button-size: ${v}px`:""}; --recede-duration: ${this.partMs("recede")}ms; --fade-duration: ${this.partMs("fade")}ms; --shake-duration: ${this.partMs("shake")}ms; --cancel-progress: ${this.cancelling?.progress??0}${e?.progress_color_on?`; --progress-on: ${ge(e.progress_color_on)}`:""}${e?.progress_color_off?`; --progress-off: ${ge(e.progress_color_off)}`:""}"
      @pointerdown=${this.handlePointerDown}
      @pointermove=${this.hold.pointerMove}
      @pointerup=${this.hold.pointerUp}
      @pointercancel=${this.hold.pointerUp}
      @pointerleave=${this.hold.pointerUp}
      @contextmenu=${(ye)=>ye.preventDefault()}
    >${Tt}${a}${s==="bar"?u:""}</div>${s==="ring"?u:""}</div>`}static styles=W`
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
      border: var(--control-border-width) solid var(--control-color);
    }
:host {
      --control-border-width: 2px;
      --progress-on: var(--success-color, #4caf50);
      --progress-off: var(--warning-color, #ff9800);
    }
    .feature {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    /* Round button, like the press-and-hold button card. */
    .control.ring {
      flex: none;
      width: var(--button-size, var(--feature-height, 42px));
      height: var(--button-size, var(--feature-height, 42px));
      border-radius: 50%;
      overflow: visible;
    }
    .control.ring.holding {
      transform: scale(0.95);
    }
    .progress {
      position: absolute;
      transform: rotate(-90deg);
      pointer-events: none;
      overflow: visible;
    }
    .progress circle {
      fill: none;
      stroke: currentColor;
    }
    .progress.turning-on {
      color: var(--progress-on);
    }
    .progress.turning-off {
      color: var(--progress-off);
    }
    .progress-track {
      opacity: 0;
    }
    .progress-bar {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      stroke-linecap: round;
    }
    .control.holding .progress-track {
      opacity: 0.2;
    }
    .control.holding .progress-bar {
      animation: fill-ring var(--hold-duration) linear forwards;
    }
    /* A released hold: the progress starts from where the hold stopped. */
    .control.cancel-fade .progress-track,
    .control.cancel-recede .progress-track {
      opacity: 0.2;
    }
    .control.cancel-fade .progress-bar {
      stroke-dashoffset: calc(300px * (1 - var(--cancel-progress)));
      animation: cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.cancel-fade .progress-track {
      animation: cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.cancel-recede .progress-bar {
      animation: cancel-recede-ring var(--recede-duration) ease-in forwards;
    }
    /* Both parts on the same element need one combined animation list. */
    .control.cancel-recede.cancel-fade .progress-bar {
      animation:
        cancel-recede-ring var(--recede-duration) ease-in forwards,
        cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.cancel-shake {
      animation: cancel-shake var(--shake-duration) ease-in-out;
    }
    @keyframes cancel-fade {
      to {
        opacity: 0;
      }
    }
    @keyframes cancel-recede-ring {
      from {
        stroke-dashoffset: calc(300px * (1 - var(--cancel-progress)));
      }
      to {
        stroke-dashoffset: 300;
      }
    }
    @keyframes cancel-shake {
      15%,
      55% {
        translate: -4px 0;
      }
      35%,
      75% {
        translate: 4px 0;
      }
    }
    @keyframes fill-ring {
      to {
        stroke-dashoffset: 0;
      }
    }
    .control.bar {
      flex: 1;
    }
    .control.on {
      background-color: var(--control-color);
    }
    .control.off {
      background-color: transparent;
    }
    .icon {
      position: relative;
      z-index: 1;
      color: var(--control-color);
      --mdc-icon-size: calc(var(--button-size, var(--feature-height, 42px)) * 0.5);
    }
    .control.on .icon {
      color: var(--text-primary-color, #fff);
    }
    .icon + .label {
      margin-left: 8px;
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
    .control.bar::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 0;
      opacity: 1;
    }
    /* The sweep shows which way the hold goes: the "on" color when it will turn
       the entity on, the "off" color when it will turn it off. */
    .control.bar.off::after {
      background-color: var(--progress-on);
    }
    .control.bar.on::after {
      background-color: var(--progress-off);
    }
    .control.bar.holding::after {
      animation: hold-fill var(--hold-duration) linear forwards;
    }
    .control.bar.cancel-fade::after {
      width: calc(var(--cancel-progress) * 100%);
      animation: cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.bar.cancel-recede::after {
      animation: cancel-recede-bar var(--recede-duration) ease-in forwards;
    }
    .control.bar.cancel-recede.cancel-fade::after {
      animation:
        cancel-recede-bar var(--recede-duration) ease-in forwards,
        cancel-fade var(--fade-duration) ease-out forwards;
    }
    @keyframes cancel-recede-bar {
      from {
        width: calc(var(--cancel-progress) * 100%);
      }
      to {
        width: 0;
      }
    }
    @keyframes hold-fill {
      to {
        width: 100%;
      }
    }
  `}y([N({attribute:!1})],He.prototype,"hass",void 0),y([N({attribute:!1})],He.prototype,"context",void 0),y([N({attribute:!1})],He.prototype,"config",void 0),y([q()],He.prototype,"cancelling",void 0),He=y([B("press-and-hold-card-feature")],He);window.customCardFeatures=window.customCardFeatures||[];window.customCardFeatures.push({type:"press-and-hold-card-feature",name:"Press and hold",configurable:!0});customElements.get("press-and-hold-button-card-editor")||Promise.resolve().then(() => (Ue(),St));console.log(`\uD83D\uDE80 Nerdo UX loaded, built at ${H}`);window.__NERDO_UX_BUILD_TIMESTAMP__=H;class _e extends T{constructor(){super(...arguments);this.hold=new re(this,{duration:()=>this.config.hold_duration||d.HOLD_DURATION,tolerance:()=>this.config.movement_tolerance||d.MOVEMENT_TOLERANCE,onComplete:()=>this.executeAction()});this.handlePointerDown=(e)=>{e.stopPropagation(),this.hold.pointerDown(e)}}static get buildTimestamp(){return H}get buildTimestamp(){return H}static getStubConfig(e){let t="switch.example";if(e){let r=Object.keys(e.states).filter((i)=>{let n=i.split(".")[0];return["switch","light","input_boolean"].includes(n)});if(r.length>0)t=r[0]}return{type:"custom:press-and-hold-button-card",entity:t,hold_duration:d.HOLD_DURATION,movement_tolerance:d.MOVEMENT_TOLERANCE,show_name:d.SHOW_NAME,show_state:d.SHOW_STATE,show_icon:d.SHOW_ICON,icon_height:d.ICON_HEIGHT,cap_style:d.CAP_STYLE,hold_action:d.HOLD_ACTION}}setConfig(e){if(!e)throw Error("Invalid configuration");if(!e.entity)throw Error("You need to define an entity");this.config={hold_duration:d.HOLD_DURATION,movement_tolerance:d.MOVEMENT_TOLERANCE,show_name:d.SHOW_NAME,show_state:d.SHOW_STATE,show_icon:d.SHOW_ICON,icon_height:d.ICON_HEIGHT,cap_style:d.CAP_STYLE,hold_action:d.HOLD_ACTION,...e}}getCardSize(){return 1}static getConfigElement(){return document.createElement("press-and-hold-button-card-editor")}render(){if(!this.config||!this.hass)return g``;let e=this.hass.states[this.config.entity];if(!e)return g`
        <ha-card>
          <div class="error">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `;let t=this.config.name||e.attributes.friendly_name||e.entity_id,r=this.config.icon||e.attributes.icon||"mdi:power",i=e.state==="on",n=this.config.icon_height||80,o=this.hold.holding,s=this.config.hold_duration||d.HOLD_DURATION;return g`
      <ha-card>
        <div class="card-content">
          <div
            class="button ${i?"on":"off"} ${o?"holding":""}"
            style="--icon-height: ${n}px"
            @pointerdown=${this.handlePointerDown}
            @pointerup=${this.hold.pointerUp}
            @pointerleave=${this.hold.pointerUp}
            @pointercancel=${this.hold.pointerUp}
            @pointermove=${this.hold.pointerMove}
            @contextmenu=${(a)=>a.preventDefault()}
          >
            <div
              class="progress-ring ${o?"active animating":""} ${i?"turning-off":"turning-on"}"
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
            ${this.config.show_icon!==!1?g`
                  <ha-icon
                    class="icon"
                    .icon=${r}
                  ></ha-icon>
                `:""}
          </div>
          ${this.config.show_name!==!1?g`<div class="name">${t}</div>`:""}
          ${this.config.show_state===!0?g`<div class="state">${e.state}</div>`:""}
        </div>
      </ha-card>
    `}executeAction(){if(!this.config.entity){console.error("Press and Hold Button Card: No entity configured");return}let e=this.hass.states[this.config.entity];if(!e){console.error(`Press and Hold Button Card: Entity not found: ${this.config.entity}`);return}console.log(`Press and Hold Button Card: Executing action for ${this.config.entity}`);let t=this.config.hold_action||"default";switch(t){case"default":this.executeDefaultAction(e);break;case"toggle":this.executeToggleAction(e);break;case"more-info":this.executeMoreInfoAction();break;case"call-service":this.executeCustomServiceAction();break;default:console.error(`Press and Hold Button Card: Unknown action: ${t}`);return}}executeDefaultAction(e){switch(e.entity_id.split(".")[0]){case"button":console.log("Default action for button: press"),O(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:"button.press",target:{entity_id:this.config.entity}}},"hold");break;case"light":case"switch":case"input_boolean":console.log("Default action for toggleable entity: toggle"),O(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;case"cover":console.log("Default action for cover: toggle"),O(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;default:console.log("Default action for other entity: more-info"),this.executeMoreInfoAction();break}}executeToggleAction(e){let t=e.entity_id.split(".")[0];if(["light","switch","input_boolean","cover","fan","media_player"].includes(t))console.log("Toggle action for compatible entity"),O(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");else console.warn(`Entity ${this.config.entity} does not support toggle action. Domain: ${t}`),this.executeMoreInfoAction()}executeMoreInfoAction(){console.log("More info action"),O(this,this.hass,{entity:this.config.entity,hold_action:{action:"more-info"}},"hold")}executeCustomServiceAction(){if(!this.config.service){console.error("No service specified for call-service action");return}if(this.config.service.split(".").length!==2){console.error(`Invalid service format: ${this.config.service}. Expected: domain.service`);return}console.log(`Custom service action: ${this.config.service}`);let t=this.config.service_data||{};O(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:this.config.service,service_data:t,target:{entity_id:this.config.entity}}},"hold")}static get styles(){return W`
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
    `}updated(e){if(super.updated(e),e.has("config"))this.hold.cancel()}}y([N({attribute:!1})],_e.prototype,"hass",void 0),y([q()],_e.prototype,"config",void 0),_e=y([B("press-and-hold-button-card")],_e);window.customCards=window.customCards||[];window.customCards.push({type:"press-and-hold-button-card",name:"Press and Hold Button Card",description:"A button card that requires press and hold to toggle entities",preview:!0,documentationURL:"https://github.com/nerdo/hacs-nerdo-ux"});})();
