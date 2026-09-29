(()=>{var{defineProperty:we,getOwnPropertyNames:At,getOwnPropertyDescriptor:Ct}=Object,Mt=Object.prototype.hasOwnProperty;function Pt(e){return this[e]}var Ot=(e)=>{var t=(Fe??=new WeakMap).get(e),n;if(t)return t;if(t=we({},"__esModule",{value:!0}),e&&typeof e==="object"||typeof e==="function"){for(var r of At(e))if(!Mt.call(t,r))we(t,r,{get:Pt.bind(e,r),enumerable:!(n=Ct(e,r))||n.enumerable})}return Fe.set(e,t),t},Fe;var Rt=(e)=>e;function It(e,t){this[e]=Rt.bind(null,t)}var Be=(e,t)=>{for(var n in t)we(e,n,{get:t[n],enumerable:!0,configurable:!0,set:It.bind(t,n)})};var f=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(s=e[a])o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o;return i>3&&o&&Object.defineProperty(t,n,o),o};var _=(e,t,n)=>()=>{if(e)try{t=e(e=0)}catch(r){n=[r]}if(n)throw n[0];return t};function Lt(e){return e.substr(0,e.indexOf("."))}var qe,Ye,Ut,F=(e,t,n,r)=>{r=r||{},n=n===null||n===void 0?{}:n;let i=new Event(t,{bubbles:r.bubbles===void 0?!0:r.bubbles,cancelable:Boolean(r.cancelable),composed:r.composed===void 0?!0:r.composed});return i.detail=n,e.dispatchEvent(i),i},oe=(e)=>{F(window,"haptic",e)},Ht=(e,t,n=!1)=>{if(n)history.replaceState(null,"",t);else history.pushState(null,"",t);F(window,"location-changed",{replace:n})},Vt=(e,t,n=!0)=>{let r=Lt(t),i=r==="group"?"homeassistant":r,o;switch(r){case"lock":o=n?"unlock":"lock";break;case"cover":o=n?"open_cover":"close_cover";break;default:o=n?"turn_on":"turn_off"}return e.callService(i,o,{entity_id:t})},Wt=(e,t)=>{let n=Ut.includes(e.states[t].state);return Vt(e,t,n)},zt=(e,t,n,r)=>{if(!r)r={action:"more-info"};if(r.confirmation&&(!r.confirmation.exemptions||!r.confirmation.exemptions.some((i)=>i.user===t.user.id))){if(oe("warning"),!confirm(r.confirmation.text||`Are you sure you want to ${r.action}?`))return}switch(r.action){case"more-info":if(n.entity||n.camera_image)F(e,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":if(r.navigation_path)Ht(e,r.navigation_path);break;case"url":if(r.url_path)window.open(r.url_path);break;case"toggle":if(n.entity)Wt(t,n.entity),oe("success");break;case"call-service":{if(!r.service){oe("failure");return}let[i,o]=r.service.split(".",2);t.callService(i,o,r.service_data,r.target),oe("success");break}case"fire-dom-event":F(e,"ll-custom",r)}},L=(e,t,n,r)=>{let i;if(r==="double_tap"&&n.double_tap_action)i=n.double_tap_action;else if(r==="hold"&&n.hold_action)i=n.hold_action;else if(r==="tap"&&n.tap_action)i=n.tap_action;zt(e,t,n,i)};var ve=_(()=>{(function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"})(qe||(qe={}));(function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"})(Ye||(Ye={}));Ut=["closed","locked","off"]});class $e{constructor(e,t,n){if(this._$cssResult$=!0,n!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet,t=this._strings;if(Ee&&e===void 0){let n=t!==void 0&&t.length===1;if(n)e=Ge.get(t);if(e===void 0){if((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),n)Ge.set(t,e)}}return e}toString(){return this.cssText}}var se,Ee,Se,Ge,Ft=(e)=>{if(e._$cssResult$===!0)return e.cssText;else if(typeof e==="number")return e;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Bt=(e)=>new $e(typeof e==="string"?e:String(e),void 0,Se),P=(e,...t)=>{let n=e.length===1?e[0]:t.reduce((r,i,o)=>r+Ft(i)+e[o+1],e[0]);return new $e(n,e,Se)},Xe=(e,t)=>{if(Ee)e.adoptedStyleSheets=t.map((n)=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of t){let r=document.createElement("style"),i=se.litNonce;if(i!==void 0)r.setAttribute("nonce",i);r.textContent=n.cssText,e.appendChild(r)}},qt=(e)=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Bt(t)},Te;var xe=_(()=>{se=globalThis,Ee=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),Ge=new WeakMap;Te=Ee?(e)=>e:(e)=>e instanceof CSSStyleSheet?qt(e):e});var Yt,Gt,Ke,Xt,Kt,je,jt=!1,b,E=!0,D,Je,Jt,Ze,Qt,B=(e,t)=>e,Y,ae=(e,t)=>!Yt(e,t),Qe,S;var G=_(()=>{xe();xe();({is:Yt,defineProperty:Gt,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Xt,getOwnPropertySymbols:Kt,getPrototypeOf:je}=Object),b=globalThis;if(jt)b.customElements??=customElements;Je=b.trustedTypes,Jt=Je?Je.emptyScript:"",Ze=E?b.reactiveElementPolyfillSupportDevMode:b.reactiveElementPolyfillSupport;if(E)b.litIssuedWarnings??=new Set,D=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!b.litIssuedWarnings.has(t)&&!b.litIssuedWarnings.has(e))console.warn(t),b.litIssuedWarnings.add(t)},queueMicrotask(()=>{if(D("dev-mode","Lit is in dev mode. Not recommended for production!"),b.ShadyDOM?.inUse&&Ze===void 0)D("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});Qt=E?(e)=>{if(!b.emitLitDebugLogEvents)return;b.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))}:void 0,Y={toAttribute(e,t){switch(t){case Boolean:e=e?Jt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e);break}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(r){n=null}break}return n}},Qe={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol("metadata");b.litPropertyMetadata??=new WeakMap;S=class S extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=Qe){if(t.state)t.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(e))t=Object.create(t),t.wrapped=!0;if(this.elementProperties.set(e,t),!t.noAccessor){let n=E?Symbol.for(`${String(e)} (@property() cache)`):Symbol(),r=this.getPropertyDescriptor(e,n,t);if(r!==void 0)Gt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ke(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};if(E&&r==null){if("value"in(Ke(this.prototype,e)??{}))throw Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);D("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:r,set(o){let s=r?.call(this);i?.call(this,o),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qe}static __prepare(){if(this.hasOwnProperty(B("elementProperties",this)))return;let e=je(this);if(e.finalize(),e._initializers!==void 0)this._initializers=[...e._initializers];this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(B("properties",this))){let t=this.properties,n=[...Xt(t),...Kt(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this.__attributeToPropertyMap=new Map;for(let[t,n]of this.elementProperties){let r=this.__attributeNameForProperty(t,n);if(r!==void 0)this.__attributeToPropertyMap.set(r,t)}if(this.elementStyles=this.finalizeStyles(this.styles),E){if(this.hasOwnProperty("createProperty"))D("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))D("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Te(r))}else if(e!==void 0)t.push(Te(e));return t}static __attributeNameForProperty(e,t){let n=t.attribute;return n===!1?void 0:typeof n==="string"?n:typeof e==="string"?e.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e)=>this.enableUpdating=e),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e)=>e(this))}addController(e){if((this.__controllers??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected)e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())if(this.hasOwnProperty(n))e.set(n,this[n]),delete this[n];if(e.size>0)this.__instanceProperties=e}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$attributeToProperty(e,n)}__propertyToAttribute(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor.__attributeNameForProperty(e,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:Y).toAttribute(t,r.type);if(E&&this.constructor.enabledWarnings.includes("migration")&&s===void 0)D("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=e,s==null)this.removeAttribute(i);else this.setAttribute(i,s);this.__reflectingProperty=null}}_$attributeToProperty(e,t){let n=this.constructor,r=n.__attributeToPropertyMap.get(e);if(r!==void 0&&this.__reflectingProperty!==r){let i=n.getPropertyOptions(r),o=typeof i.converter==="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Y;this.__reflectingProperty=r;let s=o.fromAttribute(t,i.type);this[r]=s??this.__defaultValues?.get(r)??s,this.__reflectingProperty=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){if(E&&e instanceof Event)D("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let o=this.constructor;if(r===!1)i=this[e];if(n??=o.getPropertyOptions(e),(n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this.__defaultValues?.get(e)&&!this.hasAttribute(o.__attributeNameForProperty(e,n)))this._$changeProperty(e,t,n);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(e,t,{useDefault:n,reflect:r,wrapped:i},o){if(n&&!(this.__defaultValues??=new Map).has(e)){if(this.__defaultValues.set(e,o??t??this[e]),i!==!0||o!==void 0)return}if(!this._$changedProperties.has(e)){if(!this.hasUpdated&&!n)t=void 0;this._$changedProperties.set(e,t)}if(r===!0&&this.__reflectingProperty!==e)(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();if(e!=null)await e;return!this.isUpdatePending}scheduleUpdate(){let e=this.performUpdate();if(E&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof e?.then==="function")D("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return e}performUpdate(){if(!this.isUpdatePending)return;if(Qt?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),E){let i=[...this.constructor.elementProperties.keys()].filter((o)=>this.hasOwnProperty(o)&&(o in je(this)));if(i.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${i.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[r,i]of this.__instanceProperties)this[r]=i;this.__instanceProperties=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:o}=i,s=this[r];if(o===!0&&!this._$changedProperties.has(r)&&s!==void 0)this._$changeProperty(r,void 0,i,s)}}let e=!1,t=this._$changedProperties;try{if(e=this.shouldUpdate(t),e)this.willUpdate(t),this.__controllers?.forEach((n)=>n.hostUpdate?.()),this.update(t);else this.__markUpdated()}catch(n){throw e=!1,this.__markUpdated(),n}if(e)this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){if(this.__controllers?.forEach((t)=>t.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(e);if(this.updated(e),E&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))D("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((t)=>this.__propertyToAttribute(t,this[t])),this.__markUpdated()}updated(e){}firstUpdated(e){}};S.elementStyles=[];S.shadowRootOptions={mode:"open"};S[B("elementProperties",S)]=new Map;S[B("finalized",S)]=new Map;Ze?.({ReactiveElement:S});if(E){S.enabledWarnings=["change-in-update","async-perform-update"];let e=function(t){if(!t.hasOwnProperty(B("enabledWarnings",t)))t.enabledWarnings=t.enabledWarnings.slice()};S.enableWarning=function(t){if(e(this),!this.enabledWarnings.includes(t))this.enabledWarnings.push(t)},S.disableWarning=function(t){e(this);let n=this.enabledWarnings.indexOf(t);if(n>=0)this.enabledWarnings.splice(n,1)}}(b.reactiveElementVersions??=[]).push("2.1.2");if(E&&b.reactiveElementVersions.length>1)queueMicrotask(()=>{D("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")})});function dt(e,t){if(!Me(e)||!e.hasOwnProperty("raw")){let n="invalid template strings array";throw n=`
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
`),Error(n)}return et!==void 0?et.createHTML(t):t}class Z{constructor({strings:e,["_$litType$"]:t},n){this.parts=[];let r,i=0,o=0,s=e.length-1,a=this.parts,[u,v]=gn(e,t);if(this.el=Z.createElement(u,n),U.currentNode=this.el.content,t===le||t===de){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}while((r=U.nextNode())!==null&&a.length<s){if(r.nodeType===1){{let c=r.localName;if(/^(?:textarea|template)$/i.test(c)&&r.innerHTML.includes(A)){let m=`Expressions are not supported inside \`${c}\` elements. See https://lit.dev/msg/expression-in-${c} for more information.`;if(c==="template")throw Error(m);else j("",m)}}if(r.hasAttributes()){for(let c of r.getAttributeNames())if(c.endsWith(at)){let m=v[o++],h=r.getAttribute(c).split(A),N=/([.?@])?(.*)/.exec(m);a.push({type:Pe,index:i,name:N[2],strings:h,ctor:N[1]==="."?ht:N[1]==="?"?mt:N[1]==="@"?pt:te}),r.removeAttribute(c)}else if(c.startsWith(A))a.push({type:Oe,index:i}),r.removeAttribute(c)}if(lt.test(r.tagName)){let c=r.textContent.split(A),m=c.length-1;if(m>0){r.textContent=ce?ce.emptyScript:"";for(let y=0;y<m;y++)r.append(c[y],J()),U.nextNode(),a.push({type:ue,index:++i});r.append(c[m],J())}}}else if(r.nodeType===8)if(r.data===ct)a.push({type:ue,index:i});else{let m=-1;while((m=r.data.indexOf(A,m+1))!==-1)a.push({type:fn,index:i}),m+=A.length-1}i++}if(v.length!==o)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");l&&l({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){let n=H.createElement("template");return n.innerHTML=e,n}}function q(e,t,n=e,r){if(t===V)return t;let i=r!==void 0?n.__directives?.[r]:n.__directive,o=Q(t)?void 0:t._$litDirective$;if(i?.constructor!==o){if(i?._$notifyDirectiveConnectionChanged?.(!1),o===void 0)i=void 0;else i=new o(e),i._$initialize(e,n,r);if(r!==void 0)(n.__directives??=[])[r]=i;else n.__directive=i}if(i!==void 0)t=q(e,i._$resolve(e,t.values),i,r);return t}class ut{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){let{el:{content:t},parts:n}=this._$template,r=(e?.creationScope??H).importNode(t,!0);U.currentNode=r;let i=U.nextNode(),o=0,s=0,a=n[0];while(a!==void 0){if(o===a.index){let u;if(a.type===ue)u=new ee(i,i.nextSibling,this,e);else if(a.type===Pe)u=new a.ctor(i,a.name,a.strings,this,e);else if(a.type===Oe)u=new ft(i,this,e);this._$parts.push(u),a=n[++s]}if(o!==a?.index)i=U.nextNode(),o++}return U.currentNode=H,r}_update(e){let t=0;for(let n of this._$parts){if(n!==void 0)if(l&&l({kind:"set part",part:n,value:e[t],valueIndex:t,values:e,templateInstance:this}),n.strings!==void 0)n._$setValue(e,n,t),t+=n.strings.length-2;else n._$setValue(e[t]);t++}}}class ee{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,n,r){this.type=ue,this._$committedValue=p,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=n,this.options=r,this.__isConnected=r?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=k(this._$startNode).parentNode,t=this._$parent;if(t!==void 0&&e?.nodeType===11)e=t.parentNode;return e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=q(this,e,t),Q(e)){if(e===p||e==null||e===""){if(this._$committedValue!==p)l&&l({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=p}else if(e!==this._$committedValue&&e!==V)this._commitText(e)}else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(this.options?.host===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else if(on(e))this._commitIterable(e);else this._commitText(e)}_insert(e){return k(k(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),W!==he){let t=this._$startNode.parentNode?.nodeName;if(t==="STYLE"||t==="SCRIPT"){let n="Forbidden";if(t==="STYLE")n="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else n="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(n)}}l&&l({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==p&&Q(this._$committedValue)){let t=k(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Ce(t,"data","property");e=this._textSanitizer(e),l&&l({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{let t=H.createTextNode("");if(this._commitNode(t),this._textSanitizer===void 0)this._textSanitizer=Ce(t,"data","property");e=this._textSanitizer(e),l&&l({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){let{values:t,["_$litType$"]:n}=e,r=typeof n==="number"?this._$getTemplate(e):(n.el===void 0&&(n.el=Z.createElement(dt(n.h,n.h[0]),this.options)),n);if(this._$committedValue?._$template===r)l&&l({kind:"template updating",template:r,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{let i=new ut(r,this),o=i._clone(this.options);l&&l({kind:"template instantiated",template:r,instance:i,parts:i._$parts,options:this.options,fragment:o,values:t}),i._update(t),l&&l({kind:"template instantiated and updated",template:r,instance:i,parts:i._$parts,options:this.options,fragment:o,values:t}),this._commitNode(o),this._$committedValue=i}}_$getTemplate(e){let t=st.get(e.strings);if(t===void 0)st.set(e.strings,t=new Z(e));return t}_commitIterable(e){if(!Me(this._$committedValue))this._$committedValue=[],this._$clear();let t=this._$committedValue,n=0,r;for(let i of e){if(n===t.length)t.push(r=new ee(this._insert(J()),this._insert(J()),this,this.options));else r=t[n];r._$setValue(i),n++}if(n<t.length)this._$clear(r&&k(r._$endNode).nextSibling,n),t.length=n}_$clear(e=k(this._$startNode).nextSibling,t){this._$notifyConnectionChanged?.(!1,!0,t);while(e!==this._$endNode){let n=k(e).nextSibling;k(e).remove(),e=n}}setConnected(e){if(this._$parent===void 0)this.__isConnected=e,this._$notifyConnectionChanged?.(e);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class te{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,n,r,i){if(this.type=Pe,this._$committedValue=p,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=r,this.options=i,n.length>2||n[0]!==""||n[1]!=="")this._$committedValue=Array(n.length-1).fill(new String),this.strings=n;else this._$committedValue=p;this._sanitizer=void 0}_$setValue(e,t=this,n,r){let i=this.strings,o=!1;if(i===void 0){if(e=q(this,e,t,0),o=!Q(e)||e!==this._$committedValue&&e!==V,o)this._$committedValue=e}else{let s=e;e=i[0];let a,u;for(a=0;a<i.length-1;a++){if(u=q(this,s[n+a],t,a),u===V)u=this._$committedValue[a];if(o||=!Q(u)||u!==this._$committedValue[a],u===p)e=p;else if(e!==p)e+=(u??"")+i[a+1];this._$committedValue[a]=u}}if(o&&!r)this._commitValue(e)}_commitValue(e){if(e===p)k(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=W(this.element,this.name,"attribute");e=this._sanitizer(e??""),l&&l({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),k(this.element).setAttribute(this.name,e??"")}}}class ft{constructor(e,t,n){this.element=e,this.type=Oe,this._$disconnectableChildren=void 0,this._$parent=t,this.options=n}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){l&&l({kind:"commit to element binding",element:this.element,value:e,options:this.options}),q(this,e)}}var T,l=(e)=>{if(!T.emitLitDebugLogEvents)return;T.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},Zt=0,j,k,ce,et,en=(e)=>e,he=(e,t,n)=>en,tn=(e)=>{if(W!==he)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");W=e},nn=()=>{W=he},Ce=(e,t,n)=>W(e,t,n),at="$lit$",A,ct,rn,H,J=()=>H.createComment(""),Q=(e)=>e===null||typeof e!="object"&&typeof e!="function",Me,on=(e)=>Me(e)||typeof e?.[Symbol.iterator]==="function",De=`[ 	
\f\r]`,sn=`[^ 	
\f\r"'\`<>=]`,an=`[^\\s"'>=/]`,X,tt=1,ke=2,cn=3,nt,rt,O,ln=0,it=1,dn=2,ot=3,Ne,Ae,lt,un=1,le=2,de=3,Pe=1,ue=2,hn=3,mn=4,pn=5,Oe=6,fn=7,Re=(e)=>(t,...n)=>{if(t.some((r)=>r===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(n.some((r)=>r?._$litStatic$))j("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:e,strings:t,values:n}},g,Fn,Bn,V,p,st,U,W,gn=(e,t)=>{let n=e.length-1,r=[],i=t===le?"<svg>":t===de?"<math>":"",o,s=X;for(let u=0;u<n;u++){let v=e[u],c=-1,m,y=0,h;while(y<v.length){if(s.lastIndex=y,h=s.exec(v),h===null)break;if(y=s.lastIndex,s===X){if(h[tt]==="!--")s=nt;else if(h[tt]!==void 0)s=rt;else if(h[ke]!==void 0){if(lt.test(h[ke]))o=new RegExp(`</${h[ke]}`,"g");s=O}else if(h[cn]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(s===O)if(h[ln]===">")s=o??X,c=-1;else if(h[it]===void 0)c=-2;else c=s.lastIndex-h[dn].length,m=h[it],s=h[ot]===void 0?O:h[ot]==='"'?Ae:Ne;else if(s===Ae||s===Ne)s=O;else if(s===nt||s===rt)s=X;else s=O,o=void 0}console.assert(c===-1||s===O||s===Ne||s===Ae,"unexpected parse state B");let N=s===O&&e[u+1].startsWith("/>")?" ":"";i+=s===X?v+rn:c>=0?(r.push(m),v.slice(0,c)+at+v.slice(c))+A+N:v+A+(c===-2?u:N)}let a=i+(e[n]||"<?>")+(t===le?"</svg>":t===de?"</math>":"");return[dt(e,a),r]},ht,mt,pt,_n,K=(e,t,n)=>{if(t==null)throw TypeError(`The container to render into may not be ${t}`);let r=Zt++,i=n?.renderBefore??t,o=i._$litPart$;if(l&&l({kind:"begin render",id:r,value:e,container:t,options:n,part:o}),o===void 0){let s=n?.renderBefore??null;i._$litPart$=o=new ee(t.insertBefore(J(),s),s,void 0,n??{})}return o._$setValue(e),l&&l({kind:"end render",id:r,value:e,container:t,options:n,part:o}),o};var me=_(()=>{T=globalThis;T.litIssuedWarnings??=new Set,j=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!T.litIssuedWarnings.has(t)&&!T.litIssuedWarnings.has(e))console.warn(t),T.litIssuedWarnings.add(t)},queueMicrotask(()=>{j("dev-mode","Lit is in dev mode. Not recommended for production!")});k=T.ShadyDOM?.inUse&&T.ShadyDOM?.noPatch===!0?T.ShadyDOM.wrap:(e)=>e,ce=T.trustedTypes,et=ce?ce.createPolicy("lit-html",{createHTML:(e)=>e}):void 0,A=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+A,rn=`<${ct}>`,H=document,Me=Array.isArray,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,O=new RegExp(`>|${De}(?:(${an}+)(${De}*=${De}*(?:${sn}|("|')|))|$)`,"g"),Ne=/'/g,Ae=/"/g,lt=/^(?:script|style|textarea|title)$/i,g=Re(un),Fn=Re(le),Bn=Re(de),V=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),st=new WeakMap,U=H.createTreeWalker(H,129),W=he;ht=class ht extends te{constructor(){super(...arguments);this.type=hn}_commitValue(e){if(this._sanitizer===void 0)this._sanitizer=W(this.element,this.name,"property");e=this._sanitizer(e),l&&l({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===p?void 0:e}};mt=class mt extends te{constructor(){super(...arguments);this.type=mn}_commitValue(e){l&&l({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==p),options:this.options}),k(this.element).toggleAttribute(this.name,!!e&&e!==p)}};pt=class pt extends te{constructor(e,t,n,r,i){super(e,t,n,r,i);if(this.type=pn,this.strings!==void 0)throw Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if(e=q(this,e,t,0)??p,e===V)return;let n=this._$committedValue,r=e===p&&n!==p||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==p&&(n===p||r);if(l&&l({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:r,addListener:i,oldListener:n}),r)this.element.removeEventListener(this.name,this,n);if(i)this.element.addEventListener(this.name,this,e);this._$committedValue=e}handleEvent(e){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,e);else this._$committedValue.handleEvent(e)}};_n=T.litHtmlPolyfillSupportDevMode;_n?.(Z,ee);(T.litHtmlVersions??=[]).push("3.3.3");if(T.litHtmlVersions.length>1)queueMicrotask(()=>{j("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});K.setSanitizer=tn,K.createSanitizer=Ce,K._testOnlyClearSanitizerFactoryDoNotCallOrElse=nn});var yn=(e,t)=>e,Ie=!0,C,gt,w,bn;var _t=_(()=>{G();me();G();me();C=globalThis;if(Ie)C.litIssuedWarnings??=new Set,gt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!C.litIssuedWarnings.has(t)&&!C.litIssuedWarnings.has(e))console.warn(t),C.litIssuedWarnings.add(t)};w=class w extends S{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(e),this.__childPart=K(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return V}};w._$litElement$=!0;w[yn("finalized",w)]=!0;C.litElementHydrateSupport?.({LitElement:w});bn=Ie?C.litElementPolyfillSupportDevMode:C.litElementPolyfillSupport;bn?.({LitElement:w});(C.litElementVersions??=[]).push("4.2.2");if(Ie&&C.litElementVersions.length>1)queueMicrotask(()=>{gt("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")})});var ne=_(()=>{G();me();_t()});var R=(e)=>(t,n)=>{if(n!==void 0)n.addInitializer(()=>{customElements.define(e,t)});else customElements.define(e,t)};function x(e){return(t,n)=>typeof n==="object"?En(e,t,n):wn(e,t,n)}var yt=!0,bt,wn=(e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0},vn,En=(e=vn,t,n)=>{let{kind:r,metadata:i}=n;if(yt&&i==null)bt("missing-class-metadata",`The class ${t} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let o=globalThis.litPropertyMetadata.get(i);if(o===void 0)globalThis.litPropertyMetadata.set(i,o=new Map);if(r==="setter")e=Object.create(e),e.wrapped=!0;if(o.set(n.name,e),r==="accessor"){let{name:s}=n;return{set(a){let u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){if(a!==void 0)this._$changeProperty(s,void 0,e,a);return a}}}else if(r==="setter"){let{name:s}=n;return function(a){let u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error(`Unsupported decorator location: ${r}`)};var Le=_(()=>{G();if(yt)globalThis.litIssuedWarnings??=new Set,bt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)};vn={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ae}});function I(e){return x({...e,state:!0,attribute:!1})}var wt=_(()=>{Le()});var Sn=!0,$n;var vt=_(()=>{if(Sn)globalThis.litIssuedWarnings??=new Set,$n=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)}});var Et=()=>{};var St=()=>{};var $t=()=>{};var Tt=()=>{};var re=_(()=>{Le();wt();vt();Et();St();$t();Tt()});var z="2026-09-29T15:40:03.696Z";var d;var Ue=_(()=>{d={HOLD_DURATION:1000,MOVEMENT_TOLERANCE:20,SHOW_NAME:!0,SHOW_STATE:!1,SHOW_ICON:!0,ICON_HEIGHT:80,CAP_STYLE:"rounded",HOLD_ACTION:"default"}});var xt={};Be(xt,{PressAndHoldButtonCardEditor:()=>fe});var Tn,xn,Dn,fe;var He=_(()=>{ve();ne();re();Ue();Tn=[{name:"entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"hold_action",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Default"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"call-service",label:"Call Service"}]}}}],xn=[{name:"service",selector:{text:{placeholder:"light.turn_on"}}},{name:"service_data",selector:{object:{}}}],Dn=[{name:"hold_duration",selector:{number:{min:500,max:1e4,step:100,unit_of_measurement:"ms"}}},{name:"movement_tolerance",selector:{number:{min:1,max:50,step:1,unit_of_measurement:"px"}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}}]},{name:"icon_height",selector:{number:{min:20,max:150,step:2,unit_of_measurement:"px"}}},{name:"cap_style",selector:{select:{mode:"dropdown",options:[{value:"rounded",label:"Rounded"},{value:"none",label:"Square"}]}}}];fe=class fe extends w{constructor(){super(...arguments);this._computeLabel=(e)=>{switch(e.name){case"entity":return"Entity (Required)";case"name":return"Name (Optional)";case"icon":return"Icon (Optional)";case"hold_duration":return"Hold Duration (ms)";case"movement_tolerance":return"Movement Tolerance (px)";case"show_name":return"Show Name";case"show_state":return"Show State";case"show_icon":return"Show Icon";case"icon_height":return"Icon Height (px)";case"cap_style":return"Progress Ring Cap Style";case"hold_action":return"Hold Action";case"service":return"Service (e.g., light.turn_on)";case"service_data":return"Service Data (JSON)";default:return e.name}}}setConfig(e){this._config={hold_duration:d.HOLD_DURATION,movement_tolerance:d.MOVEMENT_TOLERANCE,show_name:d.SHOW_NAME,show_state:d.SHOW_STATE,show_icon:d.SHOW_ICON,icon_height:d.ICON_HEIGHT,cap_style:d.CAP_STYLE,hold_action:d.HOLD_ACTION,...e}}render(){if(!this.hass||!this._config)return g``;let e={...this._config};if(!e.entity||e.entity==="switch.example"){let n=Object.keys(this.hass.states).filter((r)=>{let i=r.split(".")[0];return["switch","light","input_boolean"].includes(i)});if(n.length>0)e.entity=n[0]}let t=this._buildSchema(e.hold_action,e.entity);return g`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="build-info">
        Built: ${z}
      </div>
    `}_buildSchema(e,t){let n=[...Tn],r=n.find((i)=>i.name==="hold_action");if(r?.selector){let i=this._getDefaultActionLabel(t);r.selector.select.options[0].label=i}if(e==="call-service")n.push(...xn);return n.push(...Dn),n}_getDefaultActionLabel(e){if(!e||!this.hass)return"Default";let t=this.hass.states[e];if(!t)return"Default";switch(t.entity_id.split(".")[0]){case"button":return"Default (Press)";case"light":case"switch":case"input_boolean":case"cover":return"Default (Toggle)";default:return"Default (More Info)"}}_valueChanged(e){let t=e.detail.value;if(!t||!this.hass)return;F(this,"config-changed",{config:t})}static get styles(){return P`
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
    `}};f([x({attribute:!1})],fe.prototype,"hass",void 0),f([I()],fe.prototype,"_config",void 0),fe=f([R("press-and-hold-button-card-editor")],fe)});ve();ne();re();Ue();var In={};Be(In,{PressAndHoldButtonCard:()=>ye});class ie{constructor(e,t){this.host=e;this.options=t;this.holding=!1;this.startX=0;this.startY=0;this.startedAt=0;this.pointerDown=(e)=>{if(e.preventDefault(),this.holding)return;this.startX=e.clientX,this.startY=e.clientY,this.startedAt=performance.now(),e.target.setPointerCapture?.(e.pointerId),this.setHolding(!0),this.timer=setTimeout(()=>{this.stop(!1),this.options.onComplete()},this.options.duration())};this.pointerMove=(e)=>{if(!this.holding)return;if(Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>this.options.tolerance())this.stop(!0)};this.pointerUp=(e)=>{if(e)try{e.target.releasePointerCapture?.(e.pointerId)}catch{}this.stop(!0)};e.addController(this)}cancel(){this.stop(!0)}hostDisconnected(){this.stop(!0)}stop(e){let t=this.holding;if(this.timer!==void 0)clearTimeout(this.timer),this.timer=void 0;if(this.setHolding(!1),e&&t){let n=(performance.now()-this.startedAt)/this.options.duration();this.options.onCancel?.(Math.min(Math.max(n,0),1))}}setHolding(e){if(this.holding===e)return;this.holding=e,this.host.requestUpdate()}}He();ne();re();var kn=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"]);function ge(e){if(!e)return"var(--primary-color)";return kn.has(e)?`var(--${e}-color)`:e}ne();re();var _e=(e)=>({number:{min:0,max:e,step:10,unit_of_measurement:"ms"}}),Ve=(e,t)=>({number:{min:e,max:t,step:1,unit_of_measurement:"px"}}),Dt=(e)=>({select:{mode:"dropdown",options:e.map(([t,n])=>({value:t,label:n}))}}),Nn=[{type:"expandable",name:"",title:"Entity and action",expanded:!0,schema:[{name:"entity",selector:{entity:{}}},{name:"service",selector:{text:{}}},{name:"service_data",selector:{object:{}}}]},{type:"expandable",name:"",title:"Appearance",schema:[{name:"style",selector:Dt([["ring","Round button with a progress ring"],["bar","Full-width bar"]])},{name:"color",selector:{ui_color:{}}},{name:"icon",selector:{icon:{}}},{name:"button_size",selector:Ve(20,200)},{name:"label_on",selector:{text:{}}},{name:"label_off",selector:{text:{}}}]},{type:"expandable",name:"",title:"Progress",schema:[{name:"progress_width",selector:Ve(1,40)},{name:"progress_color_on",selector:{ui_color:{}}},{name:"progress_color_off",selector:{ui_color:{}}}]},{type:"expandable",name:"",title:"Released hold",schema:[{name:"cancel_animation",selector:Dt([["recede","Recede"],["fade","Fade"],["shake","Shake"],["recede-fade","Recede and fade"],["recede-shake","Recede and shake"],["none","None"]])},{name:"recede_duration",selector:_e(2000)},{name:"fade_duration",selector:_e(2000)},{name:"shake_duration",selector:_e(2000)}]},{type:"expandable",name:"",title:"Busy and timing",schema:[{name:"busy_entity",selector:{entity:{}}},{name:"hold_duration",selector:_e(1e4)},{name:"movement_tolerance",selector:Ve(1,100)}]}],An={entity:"Entity",service:"Action to perform",service_data:"Action data",style:"Style",color:"Color",icon:"Icon",button_size:"Button size",label_on:"Label while on",label_off:"Label while off",progress_width:"Ring thickness",progress_color_on:"Progress color, turning on",progress_color_off:"Progress color, turning off",cancel_animation:"When released early",recede_duration:"Recede duration",fade_duration:"Fade duration",shake_duration:"Shake duration",busy_entity:"Busy entity",hold_duration:"Hold duration",movement_tolerance:"Movement tolerance"},Cn={entity:"Whose state the control shows: filled while on, hollow while off.",service:"Called when a hold completes, for example script.my_script. Without one, a hold does nothing.",service_data:"Sent with the action. No target is added.",style:"Round button (default) or full-width bar.",color:"The fill and outline color.",icon:"Optional. The control is blank without one.",button_size:"Round style only. Diameter in pixels; defaults to 42.",label_on:"Optional text shown while the entity is on.",label_off:"Optional text shown while the entity is off.",progress_width:"Round style only. Defaults to 12% of the button size.",progress_color_on:"For a hold that turns the entity on. Defaults to the theme success color.",progress_color_off:"For a hold that turns the entity off. Defaults to the theme warning color.",cancel_animation:"What the progress does when you let go before the hold completes.",recede_duration:"Defaults to 150 ms.",fade_duration:"Defaults to 250 ms.",shake_duration:"Defaults to 300 ms.",busy_entity:"While this entity is on, the control dims and ignores holds.",hold_duration:"How long to hold. Defaults to 1000 ms.",movement_tolerance:"How far the pointer may move before the hold cancels. Defaults to 20 px."};class We extends w{constructor(){super(...arguments);this.computeLabel=(e)=>An[e.name]??e.name;this.computeHelper=(e)=>Cn[e.name]}setConfig(e){this.config=e}valueChanged(e){e.stopPropagation();let t={type:this.config?.type,...e.detail.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}render(){return g`<ha-form
      .hass=${this.hass}
      .data=${this.config}
      .schema=${Nn}
      .computeLabel=${this.computeLabel}
      .computeHelper=${this.computeHelper}
      @value-changed=${this.valueChanged}
    ></ha-form>`}static styles=P`
    ha-form {
      display: block;
    }
  `}f([x({attribute:!1})],We.prototype,"hass",void 0),f([I()],We.prototype,"config",void 0),We=f([R("press-and-hold-card-feature-editor")],We);var kt=1000,Mn=20,Pn=42,On=2,Rn={recede:150,fade:250,shake:300};class ze extends w{constructor(){super(...arguments);this.hold=new ie(this,{duration:()=>this.config?.hold_duration??kt,tolerance:()=>this.config?.movement_tolerance??Mn,onComplete:()=>this.busyGate(),onCancel:(e)=>this.startCancel(e)});this.handlePointerDown=(e)=>{if(this.isBusy){e.preventDefault();return}this.hold.pointerDown(e)}}partMs(e){return this.config?.[`${e}_duration`]??Rn[e]}startCancel(e){let t=this.config?.cancel_animation??"recede";if(t==="none")return;let n=t.split("-");clearTimeout(this.cancelTimer),this.cancelling={parts:n,progress:e},this.cancelTimer=setTimeout(()=>{this.cancelling=void 0},Math.max(...n.map((r)=>this.partMs(r))))}static getConfigElement(){return document.createElement("press-and-hold-card-feature-editor")}static getStubConfig(e,t){return{type:"custom:press-and-hold-card-feature",entity:t?.entity_id}}setConfig(e){this.config=e}busyGate(){if(this.isBusy)return;this.actionDispatch()}get isBusy(){let e=this.config?.busy_entity;return e!==void 0&&this.hass?.states[e]?.state==="on"}actionDispatch(){let e=this.config;if(!e?.service||!this.hass)return;let[t,n]=e.service.split(".",2);this.hass.callService(t,n,e.service_data??{})}render(){let e=this.config,n=(e&&this.hass?.states[e.entity])?.state==="on",r=e?.hold_duration??kt,i=this.isBusy,o=n?e?.label_on:e?.label_off,s=e?.style==="bar"?"bar":"ring",a=e?.icon?g`<ha-icon class="icon" .icon=${e.icon}></ha-icon>`:"",u=o?g`<span class="label">${o}</span>`:"",v=e?.button_size??Pn,c=e?.progress_width??Math.round(v*0.12),m=On+c,y=v+2*m,h=y/2,N=h-c/2,Nt=s==="ring"?g`<svg
            class="progress ${n?"turning-off":"turning-on"}"
            viewBox="0 0 ${y} ${y}"
            style="top: calc(-${m}px - var(--control-border-width)); left: calc(-${m}px - var(--control-border-width)); width: ${y}px; height: ${y}px"
          >
            <circle class="progress-track" cx=${h} cy=${h} r=${N}
              stroke-width=${c} pathLength="300"></circle>
            <circle class="progress-bar" cx=${h} cy=${h} r=${N}
              stroke-width=${c} pathLength="300"></circle>
          </svg>`:"";return g`<div class="feature ${s}"><div
      class="control ${s} ${n?"on":"off"} ${i?"busy":""} ${this.hold.holding?"holding":""} ${this.cancelling?`cancelling ${this.cancelling.parts.map((be)=>`cancel-${be}`).join(" ")}`:""}"
      aria-busy=${i?"true":"false"}
      aria-disabled=${i?"true":"false"}
      style="--control-color: ${ge(e?.color)}; --hold-duration: ${r}ms${s==="ring"?`; --button-size: ${v}px`:""}; --recede-duration: ${this.partMs("recede")}ms; --fade-duration: ${this.partMs("fade")}ms; --shake-duration: ${this.partMs("shake")}ms; --cancel-progress: ${this.cancelling?.progress??0}${e?.progress_color_on?`; --progress-on: ${ge(e.progress_color_on)}`:""}${e?.progress_color_off?`; --progress-off: ${ge(e.progress_color_off)}`:""}"
      @pointerdown=${this.handlePointerDown}
      @pointermove=${this.hold.pointerMove}
      @pointerup=${this.hold.pointerUp}
      @pointercancel=${this.hold.pointerUp}
      @pointerleave=${this.hold.pointerUp}
      @contextmenu=${(be)=>be.preventDefault()}
    >${Nt}${a}${s==="bar"?u:""}</div>${s==="ring"?u:""}</div>`}static styles=P`
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
  `}f([x({attribute:!1})],ze.prototype,"hass",void 0),f([x({attribute:!1})],ze.prototype,"context",void 0),f([x({attribute:!1})],ze.prototype,"config",void 0),f([I()],ze.prototype,"cancelling",void 0),ze=f([R("press-and-hold-card-feature")],ze);window.customCardFeatures=window.customCardFeatures||[];window.customCardFeatures.push({type:"press-and-hold-card-feature",name:"Press and hold",configurable:!0});customElements.get("press-and-hold-button-card-editor")||Promise.resolve().then(() => (He(),xt));console.log(`\uD83D\uDE80 Nerdo UX loaded, built at ${z}`);window.__NERDO_UX_BUILD_TIMESTAMP__=z;class ye extends w{constructor(){super(...arguments);this.hold=new ie(this,{duration:()=>this.config.hold_duration||d.HOLD_DURATION,tolerance:()=>this.config.movement_tolerance||d.MOVEMENT_TOLERANCE,onComplete:()=>this.executeAction()});this.handlePointerDown=(e)=>{e.stopPropagation(),this.hold.pointerDown(e)}}static get buildTimestamp(){return z}get buildTimestamp(){return z}static getStubConfig(e){let t="switch.example";if(e){let n=Object.keys(e.states).filter((r)=>{let i=r.split(".")[0];return["switch","light","input_boolean"].includes(i)});if(n.length>0)t=n[0]}return{type:"custom:press-and-hold-button-card",entity:t,hold_duration:d.HOLD_DURATION,movement_tolerance:d.MOVEMENT_TOLERANCE,show_name:d.SHOW_NAME,show_state:d.SHOW_STATE,show_icon:d.SHOW_ICON,icon_height:d.ICON_HEIGHT,cap_style:d.CAP_STYLE,hold_action:d.HOLD_ACTION}}setConfig(e){if(!e)throw Error("Invalid configuration");if(!e.entity)throw Error("You need to define an entity");this.config={hold_duration:d.HOLD_DURATION,movement_tolerance:d.MOVEMENT_TOLERANCE,show_name:d.SHOW_NAME,show_state:d.SHOW_STATE,show_icon:d.SHOW_ICON,icon_height:d.ICON_HEIGHT,cap_style:d.CAP_STYLE,hold_action:d.HOLD_ACTION,...e}}getCardSize(){return 1}static getConfigElement(){return document.createElement("press-and-hold-button-card-editor")}render(){if(!this.config||!this.hass)return g``;let e=this.hass.states[this.config.entity];if(!e)return g`
        <ha-card>
          <div class="error">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `;let t=this.config.name||e.attributes.friendly_name||e.entity_id,n=this.config.icon||e.attributes.icon||"mdi:power",r=e.state==="on",i=this.config.icon_height||80,o=this.hold.holding,s=this.config.hold_duration||d.HOLD_DURATION;return g`
      <ha-card>
        <div class="card-content">
          <div
            class="button ${r?"on":"off"} ${o?"holding":""}"
            style="--icon-height: ${i}px"
            @pointerdown=${this.handlePointerDown}
            @pointerup=${this.hold.pointerUp}
            @pointerleave=${this.hold.pointerUp}
            @pointercancel=${this.hold.pointerUp}
            @pointermove=${this.hold.pointerMove}
            @contextmenu=${(a)=>a.preventDefault()}
          >
            <div
              class="progress-ring ${o?"active animating":""} ${r?"turning-off":"turning-on"}"
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
                    .icon=${n}
                  ></ha-icon>
                `:""}
          </div>
          ${this.config.show_name!==!1?g`<div class="name">${t}</div>`:""}
          ${this.config.show_state===!0?g`<div class="state">${e.state}</div>`:""}
        </div>
      </ha-card>
    `}executeAction(){if(!this.config.entity){console.error("Press and Hold Button Card: No entity configured");return}let e=this.hass.states[this.config.entity];if(!e){console.error(`Press and Hold Button Card: Entity not found: ${this.config.entity}`);return}console.log(`Press and Hold Button Card: Executing action for ${this.config.entity}`);let t=this.config.hold_action||"default";switch(t){case"default":this.executeDefaultAction(e);break;case"toggle":this.executeToggleAction(e);break;case"more-info":this.executeMoreInfoAction();break;case"call-service":this.executeCustomServiceAction();break;default:console.error(`Press and Hold Button Card: Unknown action: ${t}`);return}}executeDefaultAction(e){switch(e.entity_id.split(".")[0]){case"button":console.log("Default action for button: press"),L(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:"button.press",target:{entity_id:this.config.entity}}},"hold");break;case"light":case"switch":case"input_boolean":console.log("Default action for toggleable entity: toggle"),L(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;case"cover":console.log("Default action for cover: toggle"),L(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");break;default:console.log("Default action for other entity: more-info"),this.executeMoreInfoAction();break}}executeToggleAction(e){let t=e.entity_id.split(".")[0];if(["light","switch","input_boolean","cover","fan","media_player"].includes(t))console.log("Toggle action for compatible entity"),L(this,this.hass,{entity:this.config.entity,hold_action:{action:"toggle"}},"hold");else console.warn(`Entity ${this.config.entity} does not support toggle action. Domain: ${t}`),this.executeMoreInfoAction()}executeMoreInfoAction(){console.log("More info action"),L(this,this.hass,{entity:this.config.entity,hold_action:{action:"more-info"}},"hold")}executeCustomServiceAction(){if(!this.config.service){console.error("No service specified for call-service action");return}if(this.config.service.split(".").length!==2){console.error(`Invalid service format: ${this.config.service}. Expected: domain.service`);return}console.log(`Custom service action: ${this.config.service}`);let t=this.config.service_data||{};L(this,this.hass,{entity:this.config.entity,hold_action:{action:"call-service",service:this.config.service,service_data:t,target:{entity_id:this.config.entity}}},"hold")}static get styles(){return P`
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
    `}updated(e){if(super.updated(e),e.has("config"))this.hold.cancel()}}f([x({attribute:!1})],ye.prototype,"hass",void 0),f([I()],ye.prototype,"config",void 0),ye=f([R("press-and-hold-button-card")],ye);window.customCards=window.customCards||[];window.customCards.push({type:"press-and-hold-button-card",name:"Press and Hold Button Card",description:"A button card that requires press and hold to toggle entities",preview:!0,documentationURL:"https://github.com/nerdo/hacs-nerdo-ux"});})();
