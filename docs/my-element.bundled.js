/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const a=window,l=a.trustedTypes,d=l?l.emptyScript:"",c=a.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const o=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{e?i.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=u){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:h).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:h;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:b}),(null!==(r=a.reactiveElementVersions)&&void 0!==r?r:a.reactiveElementVersions=[]).push("1.6.1");const g=window,m=g.trustedTypes,w=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,v="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,x="?"+y,k=`<${x}>`,z=document,S=()=>z.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,$="[ \t\n\f\r]",A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,M=/>/g,R=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,U=/"/g,F=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),T=new WeakMap,P=z.createTreeWalker(z,129,null,!1),I=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=A;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===A?"!--"===l[1]?r=E:void 0!==l[1]?r=M:void 0!==l[2]?(F.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=R):void 0!==l[3]&&(r=R):r===R?">"===l[0]?(r=null!=n?n:A,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?R:'"'===l[3]?U:_):r===U||r===_?r=R:r===E||r===M?r=A:(r=R,n=void 0);const h=r===R&&t[e+1].startsWith("/>")?" ":"";s+=r===A?i+k:d>=0?(o.push(a),i.slice(0,d)+v+i.slice(d)+y+h):i+y+(-2===d?(o.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,o]};class L{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,d]=I(t,e);if(this.el=L.createElement(l,i),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=P.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(v)||e.startsWith(y)){const i=d[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+v).split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?J:"@"===e[1]?Z:K})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(F.test(o.tagName)){const t=o.textContent.split(y),e=t.length-1;if(e>0){o.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],S()),P.nextNode(),a.push({type:2,index:++n});o.append(t[e],S())}}}else if(8===o.nodeType)if(o.data===x)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,o){var n,s,r,a;if(e===N)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const d=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,o)),e}class B{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:z).importNode(i,!0);P.currentNode=n;let s=P.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new D(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new G(s,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=P.nextNode(),r++)}return P.currentNode=z,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,o){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),C(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=L.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new B(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new L(t)),e}T(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new D(this.k(S()),this.k(S()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,o,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=q(this,t,e,0),s=!C(t)||t!==this._$AH&&t!==N,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=q(this,o[i+r],e,r),a===N&&(a=this._$AH[r]),s||(s=!C(a)||a!==this._$AH[r]),a===H?t=H:t!==H&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const W=m?m.emptyScript:"";class J extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class Z extends K{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:H)===N)return;const o=this._$AH,n=t===H&&o!==H||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==H&&(o===H||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const X=g.litHtmlPolyfillSupport;null==X||X(L,D),(null!==(f=g.litHtmlVersions)&&void 0!==f?f:g.litHtmlVersions=[]).push("2.7.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,Y;class tt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new D(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st=function(t,e,i,o){for(var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let rt=class extends tt{constructor(){super(...arguments),this.name="World",this.count=0,this.shortCode="welleniederrhein"}render(){return O`
      <link rel="stylesheet" href="https://www.radiokoeln.de/assets/themes/${this.shortCode}/${this.shortCode}.css" />
      
      <div class="bg min-h-full" style="min-height: 100%; background-color: #F5F5F5;">
				<div class="w-full bg-white px-4 py-8 .news-teaser" style="width: 100%; background-color: #fff; padding: 16px 32px;" >
					<h2 class="news-teaser__title mb-1 font-bold text-lg">Kommende Veranstaltungen</h2>
					<p>
						Aufgrund der aktuellen Corona-Lage kann es sein, dass einzelne Veranstaltungen nicht stattfinden können. Wir übernehmen keine Gewähr für die Einträge.
					</p>
					<p>
						Über den Button "Eigene einreichen" könnt ihr uns auch Events von euch melden. Diese müssen von der Redaktion noch freigeschaltet werden, bevor sie für alle sichtbar sind.
					</p>
					<button class="w-full py-2 mt-4 font-bold border-2 button primary-text text-darken-1 primary-border">
						Eigene Veranstaltung einreichen
					</button>
				</div>

				<div id="veranstaltungskalender-sticky-nav" class="sticky -top-1 flex flex-col z-[100]">
					<div class="flex flex-row justify-between px-4 py-1">
						<span class="font-bold">14. Januar</span>
						<button type="button" onClick="">
							<span class="text-primary-color primary-text text-darken-1 font-bold">Filter</span>
						</button>
					</div>
					<div class="w-full h-[4px] primary button mt-1" />
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col ">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>

				<div class="bg-white card mb-4">
					<div class="w-full aspect-[1.5/1]">
						<img src="//www.radioessen.de/externalimages/?source=jpg529/kennedyplatz-sonntagabend.jpg&crop=0x242x4031x2520&resize=640x400&dt=202305142120270" alt="" class="w-full h-full min-h-full min-w-full opject-cover" />
					</div>
					<div class="w-full p-4 flex flex-col">
						<h3 class="text-lg font-bold">Rock im Park</h3>
						<p>Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße...</p>
						<p class="mt-8 self-end text-sm primary-text text-darken-1 font-bold">Mehr erfahren</p>
					</div>
				</div>
			</div>
			<div id="veranstaltungskalender-sidebar-overlay" />
			<div id="veranstaltungskalender-sidebar">
				<div class="primary w-full p-4">
					<button type="button" @click="setSidebarOpen(false)">
						<p class="text-white text-lg">X</p>
					</button>
				</div>
				<div class="p-4 ">
					<input type="search" placeholder="Suchbegriff eingeben..." />
				</div>

				<div class="flex flex-col">
					<div class="border-b font-bold border-black border-opacity-20 p-4 flex flex-row justify-between">
						Zeitraum
						<p>S</p>
					</div>
					<div class="border-b font-bold border-black border-opacity-20 p-4 flex flex-row justify-between">
						Kategorien
						<p>S</p>
					</div>
					<div class="border-b font-bold border-black border-opacity-20 p-4 flex flex-row justify-between">
						Kosten
						<p>S</p>
					</div>
				</div>
			</div>
      <slot></slot>
    `}sayHello(t){return`Hello, ${t}`}};rt.styles=((t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(o,t,i)})`
    /*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*/

    body {
      margin: 0;
      font-family: Arial, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
    /*
	1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
	2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
	*/

    *,
    ::before,
    ::after {
      box-sizing: border-box;
      /* 1 */
      border-width: 0;
      /* 2 */
      border-style: solid;
      /* 2 */
      border-color: #e5e7eb;
      /* 2 */
    }

    ::before,
    ::after {
      --tw-content: '';
    }

    /*
	1. Use a consistent sensible line-height in all browsers.
	2. Prevent adjustments of font size after orientation changes in iOS.
	3. Use a more readable tab size.
	4. Use the user's configured \`sans\` font-family by default.
	5. Use the user's configured \`sans\` font-feature-settings by default.
	6. Use the user's configured \`sans\` font-variation-settings by default.
	*/

    html {
      line-height: 1.5;
      /* 1 */
      -webkit-text-size-adjust: 100%;
      /* 2 */
      /* 3 */
      tab-size: 4;
      /* 3 */
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      /* 4 */
      -webkit-font-feature-settings: normal;
      font-feature-settings: normal;
      /* 5 */
      font-variation-settings: normal;
      /* 6 */
    }
    article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}html,button,input,select,textarea{font-family:sans-serif;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}h2{font-size:1.5em;margin:0.83em 0;}h3{font-size:1.17em;margin:1em 0;}h4{font-size:1em;margin:1.33em 0;}h5{font-size:0.83em;margin:1.67em 0;}h6{font-size:0.75em;margin:2.33em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}blockquote{margin:1em 40px;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}p,pre{margin:1em 0;}code,kbd,pre,samp{font-family:monospace,serif;_font-family:'courier new',monospace;font-size:1em;}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word;}q{quotes:none;}q:before,q:after{content:'';content:none;}small{font-size:75%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}dl,menu,ol,ul{margin:1em 0;}dd{margin:0 0 0 40px;}menu,ol,ul{padding:0 0 0 40px;}nav ul,nav ol{list-style:none;list-style-image:none;}img{border:0;-ms-interpolation-mode:bicubic;}svg:not(:root){overflow:hidden;}figure{margin:0;}form{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle;}button,input{line-height:normal;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible;}button[disabled],input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}

    /*
	1. Remove the margin in all browsers.
	2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
	*/

    body {
      margin: 0;
      /* 1 */
      line-height: inherit;
      /* 2 */
    }

    /*
	1. Add the correct height in Firefox.
	2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
	3. Ensure horizontal rules are visible by default.
	*/

    hr {
      height: 0;
      /* 1 */
      color: inherit;
      /* 2 */
      border-top-width: 1px;
      /* 3 */
    }

    /*
	Add the correct text decoration in Chrome, Edge, and Safari.
	*/

    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }

    /*
	Remove the default font size and weight for headings.
	*/

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    /*
	Reset links to optimize for opt-in styling instead of opt-out.
	*/

    a {
      color: inherit;
      text-decoration: inherit;
    }

    /*
	Add the correct font weight in Edge and Safari.
	*/

    b,
    strong {
      font-weight: bolder;
    }

    /*
	1. Use the user's configured \`mono\` font family by default.
	2. Correct the odd \`em\` font sizing in all browsers.
	*/

    code,
    kbd,
    samp,
    pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      /* 1 */
      font-size: 1em;
      /* 2 */
    }

    /*
	Add the correct font size in all browsers.
	*/

    small {
      font-size: 80%;
    }

    /*
	Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
	*/

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    /*
	1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
	2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
	3. Remove gaps between table borders by default.
	*/

    table {
      text-indent: 0;
      /* 1 */
      border-color: inherit;
      /* 2 */
      border-collapse: collapse;
      /* 3 */
    }

    /*
	1. Change the font styles in all browsers.
	2. Remove the margin in Firefox and Safari.
	3. Remove default padding in all browsers.
	*/

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      /* 1 */
      font-size: 100%;
      /* 1 */
      font-weight: inherit;
      /* 1 */
      line-height: inherit;
      /* 1 */
      color: inherit;
      /* 1 */
      margin: 0;
      /* 2 */
      padding: 0;
      /* 3 */
    }

    /*
	Remove the inheritance of text transform in Edge and Firefox.
	*/

    button,
    select {
      text-transform: none;
    }

    /*
	1. Correct the inability to style clickable types in iOS and Safari.
	2. Remove default button styles.
	*/

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
      /* 1 */
      background-color: transparent;
      /* 2 */
      background-image: none;
      /* 2 */
    }

    /*
	Use the modern Firefox focus style for all focusable elements.
	*/

    :-moz-focusring {
      outline: auto;
    }

    /*
	Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
	*/

    :-moz-ui-invalid {
      box-shadow: none;
    }

    /*
	Add the correct vertical alignment in Chrome and Firefox.
	*/

    progress {
      vertical-align: baseline;
    }

    /*
	Correct the cursor style of increment and decrement buttons in Safari.
	*/

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }

    /*
	1. Correct the odd appearance in Chrome and Safari.
	2. Correct the outline style in Safari.
	*/

    [type='search'] {
      -webkit-appearance: textfield;
      /* 1 */
      outline-offset: -2px;
      /* 2 */
    }

    /*
	Remove the inner padding in Chrome and Safari on macOS.
	*/

    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    /*
	1. Correct the inability to style clickable types in iOS and Safari.
	2. Change font properties to \`inherit\` in Safari.
	*/

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      /* 1 */
      font: inherit;
      /* 2 */
    }

    /*
	Add the correct display in Chrome and Safari.
	*/

    summary {
      display: list-item;
    }

    /*
	Removes the default spacing and border for appropriate elements.
	*/

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    fieldset {
      margin: 0;
      padding: 0;
    }

    legend {
      padding: 0;
    }

    ol,
    ul,
    menu {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    :root, :host, html, body, p {
      font-size: 16px;
    }

    /*
	Prevent resizing textareas horizontally by default.
	*/

    textarea {
      resize: vertical;
    }

    /*
	1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
	2. Set the default placeholder color to the user's configured gray 400 color.
	*/

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      opacity: 1;
      /* 1 */
      color: #9ca3af;
      /* 2 */
    }

    input::placeholder,
    textarea::placeholder {
      opacity: 1;
      /* 1 */
      color: #9ca3af;
      /* 2 */
    }

    /*
	Set the default cursor for buttons.
	*/

    button,
    [role="button"] {
      cursor: pointer;
    }

    /*
	Make sure disabled buttons don't get the pointer cursor.
	*/

    :disabled {
      cursor: default;
    }

    /*
	1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
	2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
	   This can trigger a poorly considered lint error in some tools but is included by design.
	*/

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      /* 1 */
      vertical-align: middle;
      /* 2 */
    }

    /*
	Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
	*/

    img,
    video {
      max-width: 100%;
      height: auto;
    }

    /* Make elements with the HTML hidden attribute stay hidden by default */

    [hidden] {
      display: none;
    }

    *, ::before, ::after {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }

    ::-webkit-backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }

    ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }

    .sticky {
      position: -webkit-sticky;
      position: sticky;
    }

    .-top-1 {
      top: -0.25rem;
    }

    .z-\\[100\\] {
      z-index: 100;
    }

    .mb-1 {
      margin-bottom: 0.25rem;
    }

    .mb-4 {
      margin-bottom: 1rem;
    }

    .mt-1 {
      margin-top: 0.25rem;
    }

    .mt-4 {
      margin-top: 1rem;
    }

    .mt-8 {
      margin-top: 2rem;
    }

    .flex {
      display: flex;
    }

    .aspect-\\[1\\.5\\/1\\] {
      aspect-ratio: 1.5/1;
    }

    .h-\\[4px\\] {
      height: 4px;
    }

    .h-full {
      height: 100%;
    }

    .min-h-full {
      min-height: 100%;
    }

    .w-full {
      width: 100%;
    }

    .min-w-full {
      min-width: 100%;
    }

    .resize {
      resize: both;
    }

    .flex-row {
      flex-direction: row;
    }

    .flex-col {
      flex-direction: column;
    }

    .justify-between {
      justify-content: space-between;
    }

    .self-end {
      align-self: flex-end;
    }

    .border-2 {
      border-width: 2px;
    }

    .border-b {
      border-bottom-width: 1px;
    }

    .border-black {
      --tw-border-opacity: 1;
      border-color: rgb(0 0 0 / var(--tw-border-opacity));
    }

    .border-opacity-20 {
      --tw-border-opacity: 0.2;
    }

    .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }

    .p-4 {
      padding: 1rem;
    }

    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    .py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .py-8 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .font-bold {
      font-weight: 700;
    }

    .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

    html, body {
      background: #f5f5f5;
    }

    .bg {
      background-color: #F5F5F5;
    }

    .button {
      border-color: currentColor;
    }

    #veranstaltungskalender-sticky-nav {
      margin-top: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    #veranstaltungskalender-sticky-nav.is-pinned {
      padding-top: 0px;
      padding-bottom: 0px;
      padding-top: 1.5rem;
      background-color: #fff;
    }

    #veranstaltungskalender-sidebar-overlay {
      pointer-events: none;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 110;
      height: 100%;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      --tw-bg-opacity: 0.5;
      opacity: 0;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    #veranstaltungskalender-sidebar-overlay.is-open {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 110;
      height: 100%;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      --tw-bg-opacity: 0.5;
      opacity: 1;
    }

    #veranstaltungskalender-sidebar {
      position: fixed;
      top: 0px;
      right: -100%;
      bottom: 0px;
      z-index: 120;
      height: 100%;
      width: 90%;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    #veranstaltungskalender-sidebar.is-open {
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 120;
      height: 100%;
      width: 90%;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
  `,st([ot()],rt.prototype,"name",void 0),st([ot({type:Number})],rt.prototype,"count",void 0),st([ot()],rt.prototype,"shortCode",void 0),rt=st([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e))("my-element")],rt);export{rt as MyElement};
