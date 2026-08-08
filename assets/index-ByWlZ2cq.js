const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./carbono-fybKSh0N.js","./canvas2d-CA_QDkjV.js","./desenho-Cl55SG1V.js","./dinheiro-biblia-CHbQ11k4.js","./medidas-biblia-CAcTJs9w.js","./revelacao-SRsZcwbd.js","./sete-tempos-CpRKwHQJ.js","./trajetoria-biblia-DxGE0h0w.js","./balanca-C2I08FoX.js","./bilhar-BmdVAa3-.js","./desconto-CXfIzAF9.js","./difracao-DdL1wyHA.js","./fractal-DkbJ2vum.js","./funcao-CY9rotv1.js","./ondas-CQyezOCA.js","./asa-C4KUMp2D.js","./cicatrizacao-Ll3l1Qzk.js","./dna-DsvGA0VO.js","./fluxo-Cxsf7jn9.js","./formiga-F6bX14gH.js","./proteina-D12UGxXN.js","./ra-vidro-B_VYgeTx.js","./sustentacao-BEysh-EE.js","./atomo-CZzZ1wLQ.js","./elementos-BqOGWtjM.js","./lente-Sp-mgBSR.js","./microscopio-CVNOeVgg.js","./musica-BLIBjFXu.js","./relatividade-DYTrIW_r.js","./solar-Bk_6frUD.js","./universo-escuro-CwnR-GfC.js","./ciclos-IJ4XTfOx.js","./concha-D9G1VNAI.js","./dente-leao-DJiQH8cO.js","./filotaxia-BxFMsKyF.js","./cena3d-BUNq6H7I.js","./Geometry-C5FtorEc.js","./getPo2TextureFromSource-0axNaDip.js","./canvasUtils-CWV5icuA.js","./RenderTargetSystem-B17crJt9.js","./CanvasRenderer-hi4akGXb.js","./getTextureBatchBindGroup-DkbnCTGz.js","./CanvasPool-BewL5izq.js","./fotossintese-DkC1VlMS.js","./girassol-DF9Q96k7.js","./planta-noite-Bf1D8EbC.js","./pomelo-BqRZy5ky.js","./terra3d-DCexz0fL.js","./globo-BxTBCSld.js","./terra-criacao-DDD-Dcv7.js","./tesselacao-BceycpHr.js","./beija-flor-Okd7vce8.js","./bigode-gato-DrknZsDn.js","./bioluz-BDYGfZq5.js","./cardume-Bd7SR6n-.js","./castor-BGaSAV0J.js","./dna-dados-RedxKiti.js","./eco-DkWccCo5.js","./formiga-prata-AKW2TK3W.js","./gaivota-C7OGbusy.js","./grilo-CVnfL4da.js","./libelula-DIfxzFZp.js","./lingua-gato-7fbdAp2L.js","./martim-C8fhxg0t.js","./piso-CzQVKSCr.js","./podometro-2ioqoMJW.js","./polvo-B71KGxkE.js","./sonar-ACKuSnfK.js","./turbina-C1_hu25Z.js","./vaga-lume-C8VmXvam.js","./hemoglobina-BIWS420y.js","./osso-Car8s-Zq.js","./convite-Bw1Sa0Vs.js","./src-BuU_dujX.js","./strings-7lrUkA26.js"])))=>i.map(i=>d[i]);
import{at as e}from"./Geometry-C5FtorEc.js";import{t}from"./src-BuU_dujX.js";import{t as n}from"./strings-7lrUkA26.js";import{n as r,r as i,t as a}from"./banco-wb7X6BBv.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as ee}from"./datas-CjEmqoP3.js";import{a as f,c as te,i as p,n as ne,o as m,r as re,s as h,t as ie}from"./base-BfeWNz1I.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ae=Symbol.for(`stratum.basePath`),oe=globalThis;function se(e){oe[ae]=e}function ce(e=``){if(!oe[ae]){let e=[...document.scripts],t=e.find(e=>e.hasAttribute(`data-stratum`));se(t?t.getAttribute(`data-stratum`):(e.find(e=>/\/stratum(-autoloader|\.min)?\.js($|\?)/.test(e.src))?.getAttribute(`src`)??``).split(`/`).slice(0,-1).join(`/`))}return(oe[ae]??``).replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var le=Object.create,ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,fe=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),pe=e=>{throw TypeError(e)},me=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,he=(e,t)=>ue(e,`name`,{value:t,configurable:!0}),ge=e=>[,,,le(e?.[fe(`metadata`)]??null)],_e=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],ve=e=>e!==void 0&&typeof e!=`function`?pe(`Function expected`):e,ye=(e,t,n,r,i)=>({kind:_e[e],name:t,metadata:r,addInitializer:e=>n._?pe(`Already initialized`):i.push(ve(e||null))}),be=(e,t)=>me(t,fe(`metadata`),e[3]),g=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},_=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,ee=!!(t&8),f=!!(t&16),te=d>3?e.length+1:d?ee?1:2:0,p=_e[d+5],ne=d>3&&(e[te-1]=[]),m=e[te]||(e[te]=[]),re=d&&(!f&&!ee&&(i=i.prototype),d<5&&(d>3||!f)&&de(d<4?i:{get[n](){return Ce(this,a)},set[n](e){return we(this,a,e)}},n));d?f&&d<4&&he(a,(d>2?`set `:d>1?`get `:``)+n):he(i,n);for(var h=r.length-1;h>=0;h--)l=ye(d,n,c={},e[3],m),d&&(l.static=ee,l.private=f,u=l.access={has:f?e=>Se(i,e):e=>n in e},d^3&&(u.get=f?e=>(d^1?Ce:Te)(e,i,d^4?a:re.get):e=>e[n]),d>2&&(u.set=f?(e,t)=>we(e,i,t,d^4?a:re.set):(e,t)=>e[n]=t)),s=(0,r[h])(d?d<4?f?a:re[p]:d>4?void 0:{get:re.get,set:re.set}:i,l),c._=1,d^4||s===void 0?ve(s)&&(d>4?ne.unshift(s):d?f?a=s:re[p]=s:i=s):typeof s!=`object`||!s?pe(`Object expected`):(ve(o=s.get)&&(re.get=o),ve(o=s.set)&&(re.set=o),ve(o=s.init)&&ne.unshift(o));return d||be(e,i),re&&ue(i,n,re),f?d^4?a:re:i},v=(e,t,n)=>me(e,typeof t==`symbol`?t:t+``,n),xe=(e,t,n)=>t.has(e)||pe(`Cannot `+n),Se=(e,t)=>Object(t)===t?e.has(t):pe(`Cannot use the "in" operator on this value`),Ce=(e,t,n)=>(xe(e,t,`read from private field`),n?n.call(e):t.get(e)),y=(e,t,n)=>t.has(e)?pe(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),we=(e,t,n,r)=>(xe(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Te=(e,t,n)=>(xe(e,t,`access private method`),n),Ee=globalThis,De=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Oe=Symbol(),ke=new WeakMap,Ae=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(De&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ke.set(t,e))}return e}toString(){return this.cssText}},je=e=>new Ae(typeof e==`string`?e:e+``,void 0,Oe),Me=(e,t)=>{if(De)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Ee.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ne=De?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return je(t)})(e):e,{is:Pe,defineProperty:Fe,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:Le,getOwnPropertySymbols:Re,getPrototypeOf:ze}=Object,Be=globalThis,Ve=Be.trustedTypes,He=Ve?Ve.emptyScript:``,Ue=Be.reactiveElementPolyfillSupport,We=(e,t)=>e,Ge={toAttribute(e,t){switch(t){case Boolean:e=e?He:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ke=(e,t)=>!Pe(e,t),qe={attribute:!0,type:String,converter:Ge,reflect:!1,useDefault:!1,hasChanged:Ke};Symbol.metadata??=Symbol(`metadata`),Be.litPropertyMetadata??=new WeakMap;var Je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Fe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ie(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qe}static _$Ei(){if(this.hasOwnProperty(We(`elementProperties`)))return;let e=ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(We(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(We(`properties`))){let e=this.properties,t=[...Le(e),...Re(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ne(e))}else e!==void 0&&t.push(Ne(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Ge:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Ge:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ke)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:`open`},Je[We(`elementProperties`)]=new Map,Je[We(`finalized`)]=new Map,Ue?.({ReactiveElement:Je}),(Be.reactiveElementVersions??=[]).push(`2.1.2`);var Ye=globalThis,Xe=e=>e,Ze=Ye.trustedTypes,Qe=Ze?Ze.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,$e=`$lit$`,et=`lit$${Math.random().toFixed(9).slice(2)}$`,tt=`?`+et,nt=`<${tt}>`,rt=document,it=()=>rt.createComment(``),at=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ot=Array.isArray,st=e=>ot(e)||typeof e?.[Symbol.iterator]==`function`,ct=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,dt=/>/g,ft=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),pt=/'/g,mt=/"/g,ht=/^(?:script|style|textarea|title)$/i,b=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),gt=Symbol.for(`lit-noChange`),x=Symbol.for(`lit-nothing`),_t=new WeakMap,vt=rt.createTreeWalker(rt,129);function yt(e,t){if(!ot(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Qe===void 0?t:Qe.createHTML(t)}var bt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=lt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===lt?c[1]===`!--`?o=ut:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ft):(ht.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ft):o=dt:o===ft?c[0]===`>`?(o=i??lt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ft:c[3]===`"`?mt:pt):o===mt||o===pt?o=ft:o===ut||o===dt?o=lt:(o=ft,i=void 0);let d=o===ft&&e[t+1].startsWith(`/>`)?` `:``;a+=o===lt?n+nt:l>=0?(r.push(s),n.slice(0,l)+$e+n.slice(l)+et+d):n+et+(l===-2?t:d)}return[yt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},xt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=bt(t,n);if(this.el=e.createElement(l,r),vt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=vt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith($e)){let t=u[o++],n=i.getAttribute(e).split(et),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Et:r[1]===`?`?Dt:r[1]===`@`?Ot:Tt}),i.removeAttribute(e)}else e.startsWith(et)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ht.test(i.tagName)){let e=i.textContent.split(et),t=e.length-1;if(t>0){i.textContent=Ze?Ze.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],it()),vt.nextNode(),c.push({type:2,index:++a});i.append(e[t],it())}}}else if(i.nodeType===8)if(i.data===tt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(et,e+1))!==-1;)c.push({type:7,index:a}),e+=et.length-1}a++}}static createElement(e,t){let n=rt.createElement(`template`);return n.innerHTML=e,n}};function St(e,t,n=e,r){if(t===gt)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=at(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=St(e,i._$AS(e,t.values),i,r)),t}var Ct=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??rt).importNode(t,!0);vt.currentNode=r;let i=vt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new wt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new kt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=vt.nextNode(),a++)}return vt.currentNode=rt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},wt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=St(this,e,t),at(e)?e===x||e==null||e===``?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==gt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?st(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&at(this._$AH)?this._$AA.nextSibling.data=e:this.T(rt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=xt.createElement(yt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ct(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=_t.get(e.strings);return t===void 0&&_t.set(e.strings,t=new xt(e)),t}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(it()),this.O(it()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Xe(e).nextSibling;Xe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=St(this,e,t,0),a=!at(e)||e!==this._$AH&&e!==gt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=St(this,r[n+o],t,o),s===gt&&(s=this._$AH[o]),a||=!at(s)||s!==this._$AH[o],s===x?e=x:e!==x&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Et=class extends Tt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Dt=class extends Tt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Ot=class extends Tt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=St(this,e,t,0)??x)===gt)return;let n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},kt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){St(this,e)}},At={M:$e,P:et,A:tt,C:1,L:bt,R:Ct,D:st,V:St,I:wt,H:Tt,N:Dt,U:Ot,B:Et,F:kt},jt=Ye.litHtmlPolyfillSupport;jt?.(xt,wt),(Ye.litHtmlVersions??=[]).push(`3.3.3`);var Mt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new wt(t.insertBefore(it(),e),e,void 0,n??{})}return i._$AI(e),i},Nt=globalThis,Pt=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gt}};Pt._$litElement$=!0,Pt.finalized=!0,Nt.litElementHydrateSupport?.({LitElement:Pt});var Ft=Nt.litElementPolyfillSupport;Ft?.({LitElement:Pt}),(Nt.litElementVersions??=[]).push(`4.2.2`);var It=[{id:`anotacoes`,rotulo:`Anotações`,icone:`notes`,cor:`#0d6efd`},{id:`guias`,rotulo:`Guias`,icone:`map-2`,cor:`#20c997`,dentroDe:`prep`},{id:`poesia`,rotulo:`Poesia`,icone:`feather`,cor:`#6f42c1`},{id:`receitas`,rotulo:`Receitas`,icone:`chef-hat`,cor:`#fd7e14`},{id:`jogo`,rotulo:`Língua Pura`,icone:`device-gamepad-2`,cor:`#198754`},{id:`criacao`,rotulo:`Teve um Projeto?`,icone:`compass`,cor:`#6610f2`},{id:`entenda`,rotulo:`Entenda Melhor`,icone:`bulb`,cor:`#6f42c1`},{id:`cronologia`,rotulo:`Cronologia`,icone:`timeline`,cor:`#0dcaf0`},{id:`caderno`,rotulo:`Caderno de Estudo`,icone:`book-2`,cor:`#6f42c1`},{id:`prep`,rotulo:`Esteja Preparado`,icone:`shield-check`,cor:`#dc3545`},{id:`financeiro`,rotulo:`Financeiro`,icone:`cash`,cor:`#198754`},{id:`metas`,rotulo:`Metas`,icone:`target`,cor:`#0d6efd`},{id:`ministerio`,rotulo:`Vida e Ministério`,icone:`users`,cor:`#0dcaf0`},{id:`servico`,rotulo:`Fazer Mais`,icone:`trending-up`,cor:`#0dcaf0`,dentroDe:`ministerio`},{id:`estudo`,rotulo:`Modo Estudo`,icone:`hourglass`,cor:`#6f42c1`},{id:`leitura`,rotulo:`Leitura da Bíblia`,icone:`book`,cor:`#6f42c1`},{id:`calendario`,rotulo:`Calendário`,icone:`calendar`,cor:`#0d6efd`},{id:`perfil`,rotulo:`Perfil / ICE`,icone:`id-badge-2`,cor:`#dc3545`},{id:`tutorial`,rotulo:`Tutorial`,icone:`help-circle`,cor:`#6c757d`},{id:`sobre`,rotulo:`Sobre`,icone:`info-circle`,cor:`#6c757d`}],Lt=[{id:`estudo`,rotulo:`Meu Estudo Pessoal`,icone:`school`,cor:`#6f42c1`,resumo:`Aprender e meditar`,modulos:[`estudo`,`leitura`,`poesia`,`jogo`,`criacao`,`entenda`,`cronologia`,`caderno`]},{id:`pessoal`,rotulo:`Pessoal`,icone:`user-cog`,cor:`#dc3545`,resumo:`Perfil, finanças e metas`,modulos:[`perfil`,`financeiro`,`metas`]}],Rt=[{tipo:`modulo`,id:`anotacoes`},{tipo:`modulo`,id:`calendario`},{tipo:`hub`,id:`estudo`},{tipo:`modulo`,id:`ministerio`},{tipo:`modulo`,id:`prep`},{tipo:`modulo`,id:`receitas`},{tipo:`hub`,id:`pessoal`},{tipo:`modulo`,id:`tutorial`},{tipo:`acao`,id:`sincronizar`},{tipo:`acao`,id:`convite`},{tipo:`modulo`,id:`sobre`}],zt=new Map(It.map(e=>[e.id,e])),Bt=new Map(Lt.map(e=>[e.id,e]));function Vt(e){return zt.get(e)}function Ht(e){return Bt.get(e)}function Ut(e){return t.features[e]===!0}function Wt(){let[e=``,t=``]=location.hash.replace(/^#\/?/,``).split(`?`),n=e.split(`/`).filter(e=>e!==``);return{modulo:n[0]??`home`,args:n.slice(1),query:new URLSearchParams(t)}}function S(e){location.hash=e.startsWith(`#`)?e:`#/${e.replace(/^\//,``)}`}function Gt(e){addEventListener(`hashchange`,()=>e(Wt())),e(Wt())}var Kt=()=>{};function qt(e){Kt=e}function C(){Kt()}var Jt=`modulepreload`,Yt=function(e,t){return new URL(e,t).href},Xt={},w=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Yt(t,n),t=s(t),t in Xt)return;Xt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Jt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zt=`false`,Qt=`false`,$t=Zt===`true`,en=Qt===`true`;function tn(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,$t||u?.()};async function ee(){if(`serviceWorker`in navigator){if(c=await w(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!en)if($t)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}c.register({immediate:t}).then(e=>{o?o(`./sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=ee(),d}function nn(){let e=tn({onNeedRefresh(){rn(()=>{e(!0)})}})}function rn(e){let t=Object.assign(document.createElement(`st-alert`),{variant:`primary`,closable:!0}),r=document.createElement(`st-icon`);r.setAttribute(`slot`,`icon`),r.setAttribute(`name`,`sparkles`);let i=document.createElement(`strong`);i.textContent=n.atualizacao.titulo;let a=document.createElement(`st-button`);a.setAttribute(`size`,`small`),a.setAttribute(`variant`,`primary`),a.textContent=n.atualizacao.acao,a.addEventListener(`click`,e),t.append(r,i,document.createTextNode(` ${n.atualizacao.texto} `),a),document.body.append(t),t.toast()}var an=`papiro_versoes_curado`,on={perguntas:`perguntas`,poesias:`poesias`,receitas:`receitas`,guias:`guias`,kits:`kits`,criacao_modulos:`criacao_modulos`,cronologia:`cronologia`,anotacao_modelos:`anotacao_modelos`,estoque_catalogo:`estoque_catalogo`,tutorial:`tutorial`};async function sn(e,t){return t.registros===void 0||t.registros===0||await i(e).contar().then(e=>e>0).catch(()=>!0)}function cn(){try{return JSON.parse(localStorage.getItem(an)??`{}`)}catch{return{}}}async function ln(e){try{let n=await fetch(`${t.apiEndpoint}/${e}`,{cache:`no-cache`});return n.ok?await n.json():void 0}catch{return}}async function un(){let e=await ln(`manifesto.json`);if(e===void 0)return{ok:!1,motivo:`offline`};let t=e.modulos;if(t===void 0)return{ok:!1,motivo:`sem-manifesto`};let n=cn(),r=[];for(let[e,o]of Object.entries(t)){let t=on[e];if(t===void 0||!a.includes(t)||o.versao!==void 0&&n[e]===o.versao&&await sn(t,o))continue;let s=await ln(`${e}.json`);s!==void 0&&(await i(t).substituirTudo(s),o.versao!==void 0&&(n[e]=o.versao),r.push(e))}return localStorage.setItem(an,JSON.stringify(n)),await dn(`categorias_financeiro`,`categorias.json`),await pn(),{ok:!0,atualizados:r}}async function dn(e,t){let n=i(e);if((await n.todos().catch(()=>[])).length>0)return;let r=await ln(t);if(r!==void 0)for(let e of r){let{publicar:t,...r}=e;await n.salvar(r)}}var fn;function pn(){return fn??=dn(`calendario_tipos`,`calendario_tipos.json`),fn}var mn=`papiro-tema`,hn=`#ffffff`,gn=`#0f1115`;function _n(){return document.documentElement.classList.contains(`st-theme-dark`)?`escuro`:`claro`}function vn(e){let t=e===`escuro`,n=document.documentElement.classList;n.toggle(`st-theme-dark`,t),n.toggle(`st-theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?gn:hn),localStorage.setItem(mn,e)}function yn(){let e=_n()===`escuro`?`claro`:`escuro`;return vn(e),e}var bn={projetos:{marinx:{versao:`1.0.0`,build:`2026-08-08T11:23:12.114Z`},admin:{versao:`1.0.35`,build:`2026-08-08T11:23:12.114Z`},papiro:{versao:`0.0.66`,build:`2026-08-08T11:19:31.904Z`},stratum:{versao:`1.0.13`,build:`2026-08-08T00:48:05.693Z`},vscode:{versao:`1.1.29`,build:`2026-08-07T15:31:01.421Z`},localzap:{versao:``,build:``}},componentesStratum:81,pacotes:[{nome:`@marinx/core`,versao:`0.0.0`,caminho:`packages/core`},{nome:`@marinx/flavors`,versao:`0.0.0`,caminho:`packages/flavors`},{nome:`@marinx/stratum`,versao:`1.0.13`,caminho:`packages/stratum`},{nome:`@marinx/admin`,versao:`1.0.35`,caminho:`apps/admin`},{nome:`@marinx/localzap`,versao:`0.0.27`,caminho:`apps/localzap`},{nome:`@marinx/papiro`,versao:`0.0.66`,caminho:`apps/papiro`},{nome:`marin-x-intellisuite`,versao:`1.1.29`,caminho:`apps/vscode`}],sementes:{mar_respostas_rapidas:8,pap_anotacao_modelos:7,pap_calendario_tipos:6,pap_categorias_financeiro:17,pap_criacao_modulos:63,pap_cronologia_eventos:594,pap_estoque_alimentos:32,pap_guias:15,pap_itens_checklist:96,pap_kits_checklist:6,pap_perguntas:1624,pap_poesias:274,pap_receitas:4}}.projetos.papiro?.build.slice(0,4)??``;function xn(){return b`
    <st-icon-button
      name="qrcode"
      label=${n.perfil.tituloCartao}
      @click=${()=>S(`perfil/cartao`)}
    ></st-icon-button>
    <st-icon-button
      name="heartbeat"
      label=${n.perfil.tituloFicha}
      @click=${()=>S(`perfil/ice`)}
    ></st-icon-button>
  `}function Sn(){return b`
    <footer class="rodape">
      <nav class="rodape__links">
        <button class="rodape__link" @click=${()=>S(`sobre`)}>${n.rodape.sobre}</button>
        <button class="rodape__link" @click=${()=>S(`sobre/privacidade`)}>
          ${n.rodape.privacidade}
        </button>
      </nav>
      <p class="rodape__nota">
        ${bn===``?x:b`<span>${n.rodape.direitos(bn)}</span>`}
        <span>${n.rodape.feitoPara}</span>
      </p>
    </footer>
  `}function Cn(e,t,r){let i=_n()===`escuro`;return b`
    <header class="barra">
      ${e.voltarPara===void 0?b`<img class="barra__logo" src="./icons/papiro.svg" alt="" width="30"/>`:b`
            <st-icon-button
              name="arrow-left"
              label=${n.hub.voltar}
              @click=${()=>{e.aoVoltar?.()!==!0&&S(e.voltarPara??`home`)}}
            ></st-icon-button>
          `}

      <h1 class="barra__titulo">${e.titulo}</h1>

      <div class="barra__acoes">
        ${e.acoes??x}
        ${xn()}
        <st-icon-button
          name=${i?`sun`:`moon`}
          label=${n.acoes.tema}
          @click=${()=>{yn(),r()}}
        ></st-icon-button>
      </div>
    </header>

    <main class="conteudo">${t}</main>

    ${Sn()}
  `}var wn=globalThis,Tn=e=>e,En=wn.trustedTypes,Dn=En?En.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,On=`$lit$`,kn=`lit$${Math.random().toFixed(9).slice(2)}$`,An=`?`+kn,jn=`<${An}>`,Mn=document,Nn=()=>Mn.createComment(``),Pn=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Fn=Array.isArray,In=e=>Fn(e)||typeof e?.[Symbol.iterator]==`function`,Ln=`[ 	
\f\r]`,Rn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zn=/-->/g,Bn=/>/g,Vn=RegExp(`>|${Ln}(?:([^\\s"'>=/]+)(${Ln}*=${Ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`),Hn=/'/g,Un=/"/g,Wn=/^(?:script|style|textarea|title)$/i,T=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Gn=Symbol.for(`lit-noChange`),E=Symbol.for(`lit-nothing`),Kn=new WeakMap,qn=Mn.createTreeWalker(Mn,129);function Jn(e,t){if(!Fn(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Dn===void 0?t:Dn.createHTML(t)}var Yn=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Rn;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Rn?c[1]===`!--`?o=zn:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Vn):(Wn.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Vn):o=Bn:o===Vn?c[0]===`>`?(o=i??Rn,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Vn:c[3]===`"`?Un:Hn):o===Un||o===Hn?o=Vn:o===zn||o===Bn?o=Rn:(o=Vn,i=void 0);let d=o===Vn&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Rn?n+jn:l>=0?(r.push(s),n.slice(0,l)+On+n.slice(l)+kn+d):n+kn+(l===-2?t:d)}return[Jn(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Xn=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Yn(t,n);if(this.el=e.createElement(l,r),qn.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=qn.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(On)){let t=u[o++],n=i.getAttribute(e).split(kn),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?tr:r[1]===`?`?nr:r[1]===`@`?rr:er}),i.removeAttribute(e)}else e.startsWith(kn)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Wn.test(i.tagName)){let e=i.textContent.split(kn),t=e.length-1;if(t>0){i.textContent=En?En.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Nn()),qn.nextNode(),c.push({type:2,index:++a});i.append(e[t],Nn())}}}else if(i.nodeType===8)if(i.data===An)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(kn,e+1))!==-1;)c.push({type:7,index:a}),e+=kn.length-1}a++}}static createElement(e,t){let n=Mn.createElement(`template`);return n.innerHTML=e,n}};function Zn(e,t,n=e,r){if(t===Gn)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Pn(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Zn(e,i._$AS(e,t.values),i,r)),t}var Qn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Mn).importNode(t,!0);qn.currentNode=r;let i=qn.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new $n(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ir(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=qn.nextNode(),a++)}return qn.currentNode=Mn,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},$n=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Zn(this,e,t),Pn(e)?e===E||e==null||e===``?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==Gn&&this._(e):e._$litType$===void 0?e.nodeType===void 0?In(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&Pn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mn.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Xn.createElement(Jn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Qn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Kn.get(e.strings);return t===void 0&&Kn.set(e.strings,t=new Xn(e)),t}k(t){Fn(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Nn()),this.O(Nn()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Tn(e).nextSibling;Tn(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},er=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Zn(this,e,t,0),a=!Pn(e)||e!==this._$AH&&e!==Gn,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Zn(this,r[n+o],t,o),s===Gn&&(s=this._$AH[o]),a||=!Pn(s)||s!==this._$AH[o],s===E?e=E:e!==E&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},tr=class extends er{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},nr=class extends er{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},rr=class extends er{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Zn(this,e,t,0)??E)===Gn)return;let n=this._$AH,r=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ir=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Zn(this,e)}},ar={M:On,P:kn,A:An,C:1,L:Yn,R:Qn,D:In,V:Zn,I:$n,H:er,N:nr,U:rr,B:tr,F:ir},or=wn.litHtmlPolyfillSupport;or?.(Xn,$n),(wn.litHtmlVersions??=[]).push(`3.3.3`);var sr=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new $n(t.insertBefore(Nn(),e),e,void 0,n??{})}return i._$AI(e),i},cr=globalThis,lr=cr.ShadowRoot&&(cr.ShadyCSS===void 0||cr.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ur=Symbol(),dr=new WeakMap,fr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ur)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(lr&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=dr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dr.set(t,e))}return e}toString(){return this.cssText}},pr=e=>new fr(typeof e==`string`?e:e+``,void 0,ur),mr=(e,...t)=>new fr(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,ur),hr=(e,t)=>{if(lr)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=cr.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},gr=lr?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return pr(t)})(e):e,{is:_r,defineProperty:vr,getOwnPropertyDescriptor:yr,getOwnPropertyNames:br,getOwnPropertySymbols:xr,getPrototypeOf:Sr}=Object,Cr=globalThis,wr=Cr.trustedTypes,Tr=wr?wr.emptyScript:``,Er=Cr.reactiveElementPolyfillSupport,Dr=(e,t)=>e,Or={toAttribute(e,t){switch(t){case Boolean:e=e?Tr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},kr=(e,t)=>!_r(e,t),Ar={attribute:!0,type:String,converter:Or,reflect:!1,useDefault:!1,hasChanged:kr};Symbol.metadata??=Symbol(`metadata`),Cr.litPropertyMetadata??=new WeakMap;var jr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ar){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&vr(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=yr(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ar}static _$Ei(){if(this.hasOwnProperty(Dr(`elementProperties`)))return;let e=Sr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Dr(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dr(`properties`))){let e=this.properties,t=[...br(e),...xr(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(gr(e))}else e!==void 0&&t.push(gr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute===void 0?Or:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Or:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??kr)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];e!==!0||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};jr.elementStyles=[],jr.shadowRootOptions={mode:`open`},jr[Dr(`elementProperties`)]=new Map,jr[Dr(`finalized`)]=new Map,Er?.({ReactiveElement:jr}),(Cr.reactiveElementVersions??=[]).push(`2.1.2`);var Mr=globalThis,Nr=class extends jr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Gn}};Nr._$litElement$=!0,Nr.finalized=!0,Mr.litElementHydrateSupport?.({LitElement:Nr});var Pr=Mr.litElementPolyfillSupport;Pr?.({LitElement:Nr}),(Mr.litElementVersions??=[]).push(`4.2.2`);var Fr=mr`
  :host {
    display: block;
    position: relative;
    background: var(--st-panel-background-color);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-medium);
    padding: var(--st-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(st-divider) {
    --st-divider-spacing: var(--st-spacing-x-small);
  }
`,Ir=mr`
  @layer stratum.components {
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
  }
`,Lr={attribute:!0,type:String,converter:Or,reflect:!1,hasChanged:kr},Rr=(e=Lr,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function D(e){return(t,n)=>typeof n==`object`?Rr(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function zr(e){return D({...e,state:!0,attribute:!1})}var Br=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Vr(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Br(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Br(n,r,{get(){return a(this)}})}}var Hr=new WeakMap;function Ur(e,t){let n=Array.isArray(e)?e:[e],r=t?.waitUntilFirstUpdate??!1;return function(e,t){t.addInitializer(function(){let t={propriedades:n,handler:e,esperarPrimeiroRender:r},i=Hr.get(this);i?i.push(t):Hr.set(this,[t])})}}function Wr(e,t){let n=Hr.get(e);if(!n)return;let r=e,i=new Set;for(let a=0;a<10;a++){let a=!1;for(let[o,{propriedades:s,handler:c,esperarPrimeiroRender:l}]of n.entries())if(!(l&&!e.hasUpdated))for(let n of s){if(!t.has(n))continue;let s=`${o}:${n}`;if(i.has(s))continue;let l=t.get(n),u=r[n];l!==u&&(i.add(s),a=!0,c.call(e,l,u))}if(!a)return}}var Gr=new WeakMap,Kr=(e=`value`)=>(t,n)=>{n.addInitializer(function(){let t={observada:e,destino:String(n.name)},r=Gr.get(this);r?r.push(t):Gr.set(this,[t])})};function qr(e,t,n){let r=Gr.get(e);if(!r)return;let i=e.constructor,a=e;for(let{observada:e,destino:o}of r){let r=i.getPropertyOptions(e);if(t!==(typeof r.attribute==`string`?r.attribute:e))continue;let s=r.converter||Or,c=(typeof s==`function`?s:s?.fromAttribute??Or.fromAttribute)(n,r.type);a[e]!==c&&(a[o]=c)}}var Jr,Yr,Xr,Zr,Qr,$r,ei,ti=class extends (Xr=Nr,Yr=[D()],Jr=[D()],Xr){constructor(){super(),v(this,`_internals`),y(this,Qr,g(Zr,8,this)),g(Zr,11,this),y(this,$r,g(Zr,12,this)),g(Zr,15,this),y(this,ei,!1),v(this,`initialReflectedProperties`,new Map),this._internals=this.attachInternals(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}addState(e){this._internals.states&&this._internals.states.add(e.startsWith(`--`)?e:`--${e}`)}removeState(e){this._internals.states&&this._internals.states.delete(e.startsWith(`--`)?e:`--${e}`)}toggleState(e,t){let n=e.startsWith(`--`)?e:`--${e}`;this._internals.states&&(typeof t==`boolean`?t?this._internals.states.add(n):this._internals.states.delete(n):this._internals.states.has(n)?this._internals.states.delete(n):this._internals.states.add(n))}attributeChangedCallback(e,t,n){Ce(this,ei)||(this.constructor.elementProperties.forEach((e,t)=>{let n=t;e.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),we(this,ei,!0)),qr(this,e,n),super.attributeChangedCallback(e,t,n)}update(e){Wr(this,e),super.update(e)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{let r=n;e.has(r)&&this[r]==null&&(this[r]=t)})}};Zr=ge(Xr),Qr=new WeakMap,$r=new WeakMap,ei=new WeakMap,_(Zr,4,`dir`,Yr,ti,Qr),_(Zr,4,`lang`,Jr,ti,$r),be(Zr,ti),v(ti,`version`,`0.0.0`),v(ti,`dependencies`,{});var ni,ri,ii,ai,oi=class extends (ri=ti,ni=[Vr(`slot`)],ri){constructor(){super(...arguments),y(this,ai,g(ii,8,this)),g(ii,11,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>e instanceof Element&&t.includes(e.getAttribute(`role`)??``));if(!r||n.find(e=>e instanceof Element&&e.getAttribute(`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`st-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`st-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e=>!(!(e instanceof HTMLElement)||e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return T`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ii=ge(ri),ai=new WeakMap,_(ii,4,`defaultSlot`,ni,oi,ai),be(ii,oi),v(oi,`styles`,[Ir,Fr]);var si=mr`
  :host {
    --st-menu-item-submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-medium);
    font-weight: var(--st-font-weight-normal);
    line-height: var(--st-line-height-normal);
    letter-spacing: var(--st-letter-spacing-normal);
    color: var(--st-color-neutral-700);
    padding: var(--st-spacing-2x-small) var(--st-spacing-2x-small);
    transition: var(--st-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(st-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading st-spinner {
    --st-spinner-indicator-color: currentColor;
    --st-spinner-track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--st-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--st-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--st-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--st-menu-item-safe-triangle-cursor-x, 0) var(--st-menu-item-safe-triangle-cursor-y, 0),
      var(--st-menu-item-safe-triangle-submenu-start-x, 0) var(--st-menu-item-safe-triangle-submenu-start-y, 0),
      var(--st-menu-item-safe-triangle-submenu-end-x, 0) var(--st-menu-item-safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--st-color-neutral-100);
    color: var(--st-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation to submenus */
  st-popup::part(popup) {
    box-shadow: var(--st-shadow-large);
    margin-left: var(--st-menu-item-submenu-offset);
  }

  .menu-item--rtl st-popup::part(popup) {
    margin-left: calc(-1 * var(--st-menu-item-submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(st-menu) {
    max-width: var(--st-popup-auto-size-available-width) !important;
    max-height: var(--st-popup-auto-size-available-height) !important;
  }
`,{I:ci}=ar,li=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,ui=e=>e.strings===void 0,di={},fi=(e,t=di)=>e._$AH=t,pi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mi=e=>(...t)=>({_$litDirective$:e,values:t}),hi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},gi=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),gi(e,t);return!0},_i=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},vi=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),xi(t)}};function yi(e){this._$AN===void 0?this._$AM=e:(_i(this),this._$AM=e,vi(this))}function bi(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)gi(r[e],!1),_i(r[e]);else r!=null&&(gi(r,!1),_i(r));else gi(this,e)}var xi=e=>{e.type==pi.CHILD&&(e._$AP??=bi,e._$AQ??=yi)},Si=class extends hi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),vi(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(gi(this,e),_i(this))}setValue(e){if(ui(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ci=()=>new wi,wi=class{},Ti=new WeakMap,Ei=mi(class extends Si{render(e){return E}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),E}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Ti.get(t);n===void 0&&(n=new WeakMap,Ti.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Ti.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Di=class{host;popupRef=Ci();enableSubmenuTimer=-1;isConnected=!1;isPopupConnected=!1;skidding=0;hasSlotController;submenuOpenDelay=100;constructor(e,t){(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`st-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`st-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleMouseMove=e=>{this.host.style.setProperty(`--st-menu-item-safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--st-menu-item-safe-triangle-cursor-y`,`${e.clientY}px`)};handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()};handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`st-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e)}};handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`st-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()};handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()};handlePopupMouseover=e=>{e.stopPropagation()};handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`st-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--st-menu-item-safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--st-menu-item-safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--st-menu-item-safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--st-menu-item-safe-triangle-submenu-end-y`,`${r+a}px`)};setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?T`
      <st-popup
        ${Ei(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </st-popup>
    `:T` <slot name="submenu" hidden></slot> `}},Oi=mr`
  :host {
    --st-popup-arrow-color: var(--st-color-neutral-1000);
    --st-popup-arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --st-popup-arrow-size-diagonal: calc(var(--st-popup-arrow-size) * 0.7071);
    --st-popup-arrow-padding-offset: calc(var(--st-popup-arrow-size-diagonal) - var(--st-popup-arrow-size));

    display: contents;
  }

  /*
   * The popup and the hover bridge both live in the top layer via the Popover API, which is what keeps them from being
   * clipped by an ancestor's overflow or trapped inside an ancestor's transform. The browser's default popover styles
   * are meant for standalone panels, so both elements have to be stripped back down first.
   */
  .popup,
  .popup-hover-bridge {
    margin: 0;
    border: none;
    padding: 0;
    width: auto;
    height: auto;
    overflow: visible;
    color: inherit;
    background: transparent;
  }

  .popup {
    position: fixed;
    inset: auto;
    isolation: isolate;
    max-width: var(--st-popup-auto-size-available-width, none);
    max-height: var(--st-popup-auto-size-available-height, none);
  }

  /* Once the anchor has scrolled out of view there's nothing left to point at, so the popup gets out of the way */
  :host([data-anchor-hidden]) .popup,
  :host([data-anchor-hidden]) .popup-hover-bridge {
    visibility: hidden;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--st-popup-arrow-size-diagonal) * 2);
    height: calc(var(--st-popup-arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--st-popup-arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge {
    position: fixed;
    inset: 0;
    clip-path: polygon(
      var(--st-popup-hover-bridge-top-left-x, 0) var(--st-popup-hover-bridge-top-left-y, 0),
      var(--st-popup-hover-bridge-top-right-x, 0) var(--st-popup-hover-bridge-top-right-y, 0),
      var(--st-popup-hover-bridge-bottom-right-x, 0) var(--st-popup-hover-bridge-bottom-right-y, 0),
      var(--st-popup-hover-bridge-bottom-left-x, 0) var(--st-popup-hover-bridge-bottom-left-y, 0)
    );
  }
`,ki=new Set,Ai=new Map,ji,Mi=`ltr`,Ni=`en`,Pi=typeof MutationObserver<`u`&&typeof document<`u`&&typeof document.documentElement<`u`;Pi&&(Mi=document.documentElement.dir||`ltr`,Ni=document.documentElement.lang||navigator.language,new MutationObserver(()=>Ii()).observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]}));function Fi(...e){for(let t of e){let e=t.$code.toLowerCase(),n=Ai.get(e);Ai.set(e,n?{...n,...t}:t),ji??=t}Ii()}function Ii(){Pi&&(Mi=document.documentElement.dir||`ltr`,Ni=document.documentElement.lang||navigator.language);for(let e of ki)e.requestUpdate()}function Li(e){let t;try{t=new Intl.Locale(e.replaceAll(`_`,`-`))}catch{return{regional:void 0,idioma:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``;return{regional:r?Ai.get(`${n}-${r}`):void 0,idioma:Ai.get(n)}}var Ri=class{constructor(e){this.host=e,this.host.addController(this)}host;hostConnected(){ki.add(this.host)}hostDisconnected(){ki.delete(this.host)}dir(){return`${this.host.dir||Mi}`.toLowerCase()}lang(){return`${this.host.lang||Ni}`.toLowerCase()}exists(e,t){let{includeFallback:n=!1,lang:r=this.lang()}=t??{},{regional:i,idioma:a}=Li(r);return!!(i?.[e]??a?.[e]??(n?ji?.[e]:void 0))}term(e,...t){let{regional:n,idioma:r}=Li(this.lang()),i=n?.[e]??r?.[e]??ji?.[e];return i===void 0?(console.error(`Nenhuma tradu\xE7\xE3o encontrada para: ${String(e)}`),String(e)):typeof i==`function`?i(...t):String(i)}date(e,t){return new Intl.DateTimeFormat(this.lang(),t).format(new Date(e))}number(e,t){let n=Number(e);return isNaN(n)?``:new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},zi={$code:`en`,$name:`English`,$dir:`ltr`,actions:`Actions`,alpha:`Alpha`,browseFiles:`Browse files`,cancel:`Cancel`,carousel:`Carousel`,clearEntry:`Clear entry`,clearFilters:`Clear filters`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,deleteItem:`Delete item`,dropFiles:`Drop files here`,editItem:`Edit item`,editorAlignCenter:`Align center`,editorAlignLeft:`Align left`,editorAlignRight:`Align right`,editorArea:`Editing area`,editorBold:`Bold`,editorBulletList:`Bulleted list`,editorClearFormat:`Clear formatting`,editorFootnote:`Footnote`,editorFootnotePlaceholder:`Note text`,editorFootnoteText:`The text appears at the foot of the page, numbered when read.`,editorHeading:`Heading`,editorHighlight:`Highlight`,editorHighlightBlue:`Blue`,editorHighlightCyan:`Cyan`,editorHighlightGreen:`Green`,editorHighlightRed:`Red`,editorHighlightYellow:`Yellow`,editorHorizontalRule:`Horizontal rule`,editorImage:`Image`,editorInsert:`Insert`,editorItalic:`Italic`,editorLink:`Link`,editorLinkText:`Link address.`,editorNumberedList:`Numbered list`,editorParagraph:`Paragraph`,editorQuote:`Quote`,editorRedo:`Redo`,editorStrikethrough:`Strikethrough`,editorSubheading:`Subheading`,editorToolbar:`Formatting toolbar`,editorUnderline:`Underline`,editorUndo:`Undo`,error:`Error`,financeActive:`Active`,financeAmount:`Amount`,financeAmountRequired:`Enter an amount greater than zero.`,financeBalance:`Total balance`,financeByCategory:`By category`,financeCategories:`Categories`,financeCategory:`Category`,financeColor:`Colour`,financeCount:e=>e===1?`1 record`:`${e} records`,financeDaily:`Daily`,financeDayNum:e=>`day ${e}`,financeDayOfMonth:`Day of the month`,financeDayOfMonthHelp:`The 31st falls on the last day of shorter months.`,financeDayOfMonthRequired:`Enter a day between 1 and 31.`,financeDescription:`Description`,financeDescriptionRequired:`Enter a description.`,financeDueDate:`Due date`,financeEditCategory:`Edit category`,financeEditRecurrence:`Edit recurrence`,financeEditTransaction:`Edit transaction`,financeExpenseOne:`Expense`,financeExpenses:`Expenses`,financeGenerateAsPaid:`Create already paid`,financeHiddenValues:`Amounts are hidden.`,financeHide:`Hide amounts`,financeIcon:`Icon`,financeIncome:`Income`,financeIncomeOne:`Income`,financeLimitHelp:`Zero means no limit.`,financeLimitOf:e=>`Limit ${e}`,financeLimits:`Limits for the month`,financeMarkPaid:`Mark as paid`,financeMonth:`Month`,financeMonthly:`Monthly`,financeMonthlyLimit:`Monthly limit`,financeName:`Name`,financeNameRequired:`Enter a name.`,financeNewCategory:`New category`,financeNewRecurrence:`New recurrence`,financeNewTransaction:`New transaction`,financeNext:e=>`Next: ${e}`,financeNoActivity:`Nothing moved this month.`,financeNoCategories:`No categories yet.`,financeNoCategory:`No category`,financeNoParty:`Unlinked`,financeNoRecurrences:`No recurrences yet.`,financeNoTransactions:`No transactions yet.`,financeNoTransactionsInMonth:`Nothing recorded in this month.`,financeOfLimit:e=>`of ${e}`,financePaid:`Paid`,financeParty:`Client or supplier`,financePause:`Pause`,financePeriodicity:`Repeats`,financeRecurrences:`Recurrences`,financeResume:`Resume`,financeShow:`Show amounts`,financeToPay:`To pay`,financeToReceive:`To receive`,financeTransactions:`Transactions`,financeType:`Type`,financeUnmarkPaid:`Mark as unpaid`,financeWeekday:`Day of the week`,financeWeekly:`Weekly`,financeYear:`Year`,financeYearly:`Yearly`,finish:`Finish`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,hsv:`HSV`,hue:`Hue`,lastPage:`Last page`,loading:`Loading`,menu:`Menu`,newItem:`New item`,next:`Next`,nextPage:`Next page`,nextSlide:`Next slide`,noResults:`No results found`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,page:e=>`Page ${e}`,pagination:`Pagination`,previous:`Previous`,previousPage:`Previous page`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,resultsPerPage:`Results per page`,save:`Save`,search:`Search`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,selectAll:`Select all`,selectRow:`Select row`,showingResults:(e,t,n)=>`Showing ${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortClear:`Clear sorting`,sortDescending:`Sort descending`,stepNum:(e,t)=>`Step ${e} of ${t}`,toggleColorFormat:`Toggle color format`};Fi(zi);var Bi=zi,Vi=class extends Ri{static{Fi(Bi)}},Hi=mi(class extends hi{constructor(e){if(super(e),e.type!==pi.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Gn}}),Ui={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function Wi(e){return e.split(`-`)[0]}function Gi(e){return e.split(`-`)[1]}function Ki(e){return e===`top`||e===`bottom`}function qi(e){let t=Gi(e),n=Ui[Wi(e)];return t===void 0?n:`${n}-${t}`}function Ji(e,t){let n={esquerda:0,topo:0,direita:window.innerWidth,base:window.innerHeight},r=e===void 0?[]:Array.isArray(e)?e:[e];for(let e of r){let t=e.getBoundingClientRect();n.esquerda=Math.max(n.esquerda,t.left),n.topo=Math.max(n.topo,t.top),n.direita=Math.min(n.direita,t.right),n.base=Math.min(n.base,t.bottom)}return{esquerda:n.esquerda+t,topo:n.topo+t,direita:n.direita-t,base:n.base-t}}function Yi(e,t,n,r,i,a){let o=Wi(r),s=Gi(r),c=0,l=0;return Ki(o)?(l=o===`top`?e.top-n-i:e.bottom+i,c=s===`start`?e.left:s===`end`?e.right-t:e.left+(e.width-t)/2,c+=a):(c=o===`left`?e.left-t-i:e.right+i,l=s===`start`?e.top:s===`end`?e.bottom-n:e.top+(e.height-n)/2,l+=a),{x:c,y:l}}function Xi(e,t,n,r,i){return Math.max(0,i.esquerda-e)+Math.max(0,i.topo-t)+Math.max(0,e+n-i.direita)+Math.max(0,t+r-i.base)}function Zi(e,t,n,r,i,a){switch(i){case`top`:return Math.max(0,a.topo-t);case`bottom`:return Math.max(0,t+r-a.base);case`left`:return Math.max(0,a.esquerda-e);case`right`:return Math.max(0,e+n-a.direita)}}function Qi(e,t,n,r){let i=r.direita-r.esquerda,a=r.base-r.topo;switch(t){case`top`:return{largura:i,altura:e.top-r.topo-n};case`bottom`:return{largura:i,altura:r.base-e.bottom-n};case`left`:return{largura:e.left-r.esquerda-n,altura:a};case`right`:return{largura:r.direita-e.right-n,altura:a}}}function $i(e){let t=e.contextElement??(e instanceof Element?e:void 0);if(t===void 0)return!1;let n=t.getBoundingClientRect();if(n.width===0&&n.height===0)return!0;for(let e=t.parentElement;e!==null;e=e.parentElement){let t=getComputedStyle(e);if(!/auto|scroll|hidden|clip/.test(t.overflow+t.overflowX+t.overflowY))continue;let r=e.getBoundingClientRect();if(n.bottom<=r.top||n.top>=r.bottom||n.right<=r.left||n.left>=r.right)return!0}return!1}function ea(e,t,n){let r=n.distancia??0,i=n.desvio??0,a=e.getBoundingClientRect();if(n.espelhar!==void 0){let e=n.espelhar===`width`||n.espelhar===`both`,r=n.espelhar===`height`||n.espelhar===`both`;t.style.width=e?`${a.width}px`:``,t.style.height=r?`${a.height}px`:``}else t.style.width=``,t.style.height=``;let o=t.offsetWidth,s=t.offsetHeight,c=n.posicionamento,l=Ji(n.virarLimite,n.virarPreenchimento??0);if(n.virar===!0){let e=[n.posicionamento,...n.virarAlternativas??[qi(n.posicionamento)]],t=n.posicionamento,u=1/0,d=!1;for(let n of e){let{x:e,y:c}=Yi(a,o,s,n,r,i);if(Zi(e,c,o,s,Wi(n),l)===0){t=n,d=!0;break}let ee=Xi(e,c,o,s,l);ee<u&&(u=ee,t=n)}c=d||(n.virarEstrategia??`melhor-encaixe`)===`melhor-encaixe`?t:n.posicionamento}let u=Wi(c),{x:d,y:ee}=Yi(a,o,s,c,r,i);if(n.deslizar===!0){let e=Ji(n.deslizarLimite,n.deslizarPreenchimento??0);Ki(u)?d=Math.min(Math.max(d,e.esquerda),Math.max(e.esquerda,e.direita-o)):ee=Math.min(Math.max(ee,e.topo),Math.max(e.topo,e.base-s))}let f=n.medirEspaco===!0?Qi(a,u,r,Ji(n.medirLimite,n.medirPreenchimento??0)):{largura:1/0,altura:1/0},te={};if(n.seta!==void 0){let e=n.setaPreenchimento??0,t=Ki(u)?n.seta.offsetWidth:n.seta.offsetHeight;if(Ki(u)){let n=a.left+a.width/2-d-t/2;te.x=Math.min(Math.max(n,e),o-t-e)}else{let n=a.top+a.height/2-ee-t/2;te.y=Math.min(Math.max(n,e),s-t-e)}}return{x:Math.round(d),y:Math.round(ee),posicionamento:c,espacoLivre:f,ancoraOculta:$i(e),seta:te}}function ta(e,t,n){let r=e.contextElement??(e instanceof Element?e:void 0),i=[window];for(let e=r?.parentElement??null;e!==null;e=e.parentElement){let t=getComputedStyle(e);/auto|scroll|overlay/.test(t.overflow+t.overflowX+t.overflowY)&&i.push(e)}for(let e of i)e.addEventListener(`scroll`,n,{passive:!0,capture:!0});window.addEventListener(`resize`,n,{passive:!0});let a=new ResizeObserver(n);return r!==void 0&&a.observe(r),a.observe(t),n(),()=>{for(let e of i)e.removeEventListener(`scroll`,n,{capture:!0});window.removeEventListener(`resize`,n),a.disconnect()}}function na(e){return(Array.isArray(e)?e:String(e).split(` `)).map(e=>e.trim()).filter(e=>e!==``)}function ra(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,O,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,k=class extends (Oa=ti,Da=[Vr(`.popup`)],Ea=[Vr(`.popup__arrow`)],Ta=[Vr(`.popup-hover-bridge`)],wa=[D()],Ca=[D({type:Boolean,reflect:!0})],Sa=[D({reflect:!0})],xa=[D({type:Number})],ba=[D({type:Number})],ya=[D({type:Boolean})],va=[D({attribute:`arrow-placement`})],_a=[D({attribute:`arrow-padding`,type:Number})],ga=[D({type:Boolean})],ha=[D({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],ma=[D({attribute:`flip-fallback-strategy`})],pa=[D({type:Object})],fa=[D({attribute:`flip-padding`,type:Number})],da=[D({type:Boolean})],ua=[D({type:Object})],la=[D({attribute:`shift-padding`,type:Number})],ca=[D({attribute:`auto-size`})],sa=[D()],oa=[D({type:Object})],aa=[D({attribute:`auto-size-padding`,type:Number})],ia=[D({attribute:`hover-bridge`,type:Boolean})],Oa){constructor(){super(...arguments),v(this,`anchorEl`),v(this,`cleanup`),v(this,`localize`,new Vi(this)),y(this,ka,g(O,8,this)),g(O,11,this),y(this,Aa,g(O,12,this)),g(O,15,this),y(this,ja,g(O,16,this)),g(O,19,this),y(this,Ma,g(O,20,this)),g(O,23,this),y(this,Na,g(O,24,this,!1)),g(O,27,this),y(this,Pa,g(O,28,this,`top`)),g(O,31,this),y(this,Fa,g(O,32,this,0)),g(O,35,this),y(this,Ia,g(O,36,this,0)),g(O,39,this),y(this,La,g(O,40,this,!1)),g(O,43,this),y(this,Ra,g(O,44,this,`anchor`)),g(O,47,this),y(this,za,g(O,48,this,10)),g(O,51,this),y(this,Ba,g(O,52,this,!1)),g(O,55,this),y(this,Va,g(O,56,this,``)),g(O,59,this),y(this,Ha,g(O,60,this,`best-fit`)),g(O,63,this),y(this,Ua,g(O,64,this)),g(O,67,this),y(this,Wa,g(O,68,this,0)),g(O,71,this),y(this,Ga,g(O,72,this,!1)),g(O,75,this),y(this,Ka,g(O,76,this)),g(O,79,this),y(this,qa,g(O,80,this,0)),g(O,83,this),y(this,Ja,g(O,84,this)),g(O,87,this),y(this,Ya,g(O,88,this)),g(O,91,this),y(this,Xa,g(O,92,this)),g(O,95,this),y(this,Za,g(O,96,this,0)),g(O,99,this),y(this,Qa,g(O,100,this,!1)),g(O,103,this),v(this,`updateHoverBridge`,()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--st-popup-hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--st-popup-hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--st-popup-hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--st-popup-hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--st-popup-hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--st-popup-hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--st-popup-hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--st-popup-hover-bridge-bottom-right-y`,`${u}px`)}})}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),(e.has(`active`)||e.has(`hoverBridge`))&&this.syncTopLayer(),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}syncTopLayer(){if(!this.isConnected||!this.popup||!this.hoverBridgeEl)return;let e=this.active&&this.hoverBridge;e&&!this.hoverBridgeEl.matches(`:popover-open`)&&this.popup.matches(`:popover-open`)&&this.popup.hidePopover(),e!==this.hoverBridgeEl.matches(`:popover-open`)&&(e?this.hoverBridgeEl.showPopover():this.hoverBridgeEl.hidePopover()),this.active!==this.popup.matches(`:popover-open`)&&(this.active?this.popup.showPopover():this.popup.hidePopover())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||ra(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ta(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.removeAttribute(`data-anchor-hidden`),this.style.removeProperty(`--st-popup-auto-size-available-width`),this.style.removeProperty(`--st-popup-auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let{x:e,y:t,posicionamento:n,espacoLivre:r,ancoraOculta:i,seta:a}=ea(this.anchorEl,this.popup,{posicionamento:this.placement,distancia:this.distance,desvio:this.skidding,virar:this.flip,...this.flipFallbackPlacements.length>0?{virarAlternativas:na(this.flipFallbackPlacements)}:{},virarEstrategia:this.flipFallbackStrategy===`best-fit`?`melhor-encaixe`:`inicial`,virarLimite:this.flipBoundary,virarPreenchimento:this.flipPadding,deslizar:this.shift,deslizarLimite:this.shiftBoundary,deslizarPreenchimento:this.shiftPadding,medirEspaco:!!this.autoSize,medirLimite:this.autoSizeBoundary,medirPreenchimento:this.autoSizePadding,...this.sync?{espelhar:this.sync}:{},...this.arrow?{seta:this.arrowEl,setaPreenchimento:this.arrowPadding}:{}});if(this.setAttribute(`data-current-placement`,n),this.toggleAttribute(`data-anchor-hidden`,i),this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--st-popup-auto-size-available-height`,`${r.altura}px`):this.style.removeProperty(`--st-popup-auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--st-popup-auto-size-available-width`,`${r.largura}px`):this.style.removeProperty(`--st-popup-auto-size-available-width`),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=this.localize.dir()===`rtl`,t={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[n.split(`-`)[0]],r=``,i=``,o=``,s=``;if(this.arrowPlacement===`start`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--st-popup-arrow-padding-offset))`:``;r=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--st-popup-arrow-padding-offset))`:``,i=e?t:``,s=e?``:t}else if(this.arrowPlacement===`end`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--st-popup-arrow-padding-offset))`:``;i=e?``:t,s=e?t:``,o=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--st-popup-arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(s=typeof a.x==`number`?`calc(50% - var(--st-popup-arrow-size-diagonal))`:``,r=typeof a.y==`number`?`calc(50% - var(--st-popup-arrow-size-diagonal))`:``):(s=typeof a.x==`number`?`${a.x}px`:``,r=typeof a.y==`number`?`${a.y}px`:``);Object.assign(this.arrowEl.style,{top:r,right:i,bottom:o,left:s,[t]:`calc(var(--st-popup-arrow-size-diagonal) * -1)`})}requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`st-reposition`)}render(){return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span part="hover-bridge" class="popup-hover-bridge" popover="manual"></span>

      <div
        part="popup"
        popover="manual"
        class=${Hi({popup:!0,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?T`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};O=ge(Oa),ka=new WeakMap,Aa=new WeakMap,ja=new WeakMap,Ma=new WeakMap,Na=new WeakMap,Pa=new WeakMap,Fa=new WeakMap,Ia=new WeakMap,La=new WeakMap,Ra=new WeakMap,za=new WeakMap,Ba=new WeakMap,Va=new WeakMap,Ha=new WeakMap,Ua=new WeakMap,Wa=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,Xa=new WeakMap,Za=new WeakMap,Qa=new WeakMap,_(O,4,`popup`,Da,k,ka),_(O,4,`arrowEl`,Ea,k,Aa),_(O,4,`hoverBridgeEl`,Ta,k,ja),_(O,4,`anchor`,wa,k,Ma),_(O,4,`active`,Ca,k,Na),_(O,4,`placement`,Sa,k,Pa),_(O,4,`distance`,xa,k,Fa),_(O,4,`skidding`,ba,k,Ia),_(O,4,`arrow`,ya,k,La),_(O,4,`arrowPlacement`,va,k,Ra),_(O,4,`arrowPadding`,_a,k,za),_(O,4,`flip`,ga,k,Ba),_(O,4,`flipFallbackPlacements`,ha,k,Va),_(O,4,`flipFallbackStrategy`,ma,k,Ha),_(O,4,`flipBoundary`,pa,k,Ua),_(O,4,`flipPadding`,fa,k,Wa),_(O,4,`shift`,da,k,Ga),_(O,4,`shiftBoundary`,ua,k,Ka),_(O,4,`shiftPadding`,la,k,qa),_(O,4,`autoSize`,ca,k,Ja),_(O,4,`sync`,sa,k,Ya),_(O,4,`autoSizeBoundary`,oa,k,Xa),_(O,4,`autoSizePadding`,aa,k,Za),_(O,4,`hoverBridge`,ia,k,Qa),be(O,k),v(k,`styles`,[Ir,Oi]);var $a=mr`
  :host {
    --st-spinner-track-width: 2px;
    --st-spinner-track-color: var(--st-color-neutral-agnostic);
    --st-spinner-indicator-color: var(--st-color-primary-600);
    --st-spinner-speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--st-spinner-track-width);
    r: calc(0.5em - var(--st-spinner-track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--st-spinner-track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--st-spinner-indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--st-spinner-speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,eo=class extends ti{static styles=[Ir,$a];localize=new Vi(this);render(){return T`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}},to=class{host;slotNames=[];constructor(e,...t){(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`st-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function no(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var ro={name:`default`,resolver:(e,t)=>ce(`assets/icons/${t}/${e}.svg`)},io={caret:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M15 6l-6 6l6 6" /> </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 6l6 6l-6 6" /> </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /> <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /> </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /> </svg>
  `,"eye-off":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /> <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /> <path d="M3 3l18 18" /> </svg>
  `,"color-picker":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M11 7l6 6" /> <path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4" /> </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> </svg>
  `,user:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /> </svg>
  `,"player-play":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /> </svg>
  `,"player-pause":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> </svg>
  `,star:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /> </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6l-12 12" /> <path d="M6 6l12 12" /> </svg>
  `,"circle-x":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `},ao=[ro,{name:`system`,resolver:e=>e in io?`data:image/svg+xml,${encodeURIComponent(io[e])}`:``}],oo=[];function so(e){oo.push(e)}function co(e){oo=oo.filter(t=>t!==e)}function lo(e){return ao.find(t=>t.name===e)}var uo=mr`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,fo=Symbol(),po=Symbol(),mo,ho=new Map,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo=class extends (wo=ti,Co=[zr()],So=[D({reflect:!0})],xo=[D()],bo=[D()],yo=[D({reflect:!0})],vo=[D({reflect:!0})],_o=[Ur(`label`)],go=[Ur([`name`,`src`,`library`,`variant`])],wo){constructor(){super(...arguments),g(To,5,this),v(this,`initialRender`,!1),y(this,Eo,g(To,8,this,null)),g(To,11,this),y(this,Do,g(To,12,this)),g(To,15,this),y(this,Oo,g(To,16,this)),g(To,19,this),y(this,ko,g(To,20,this,``)),g(To,23,this),y(this,Ao,g(To,24,this,`default`)),g(To,27,this),y(this,jo,g(To,28,this,`outline`)),g(To,31,this)}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=T`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?fo:po}catch{return po}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return fo;mo||=new DOMParser;let r=mo.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):fo}catch{return fo}}connectedCallback(){super.connectedCallback(),so(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),co(this)}getIconSource(){let e=lo(this.library);return this.name&&e?{url:e.resolver(this.name,this.variant),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?lo(this.library):void 0;if(!e){this.svg=null;return}let r=ho.get(e);if(r||(r=this.resolveIcon(e,n),ho.set(e,r)),!this.initialRender)return;let i=await r;if(i===po&&ho.delete(e),e===this.getIconSource().url){if(li(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case po:case fo:this.svg=null,this.emit(`st-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`st-load`)}}}render(){return this.svg}};To=ge(wo),Eo=new WeakMap,Do=new WeakMap,Oo=new WeakMap,ko=new WeakMap,Ao=new WeakMap,jo=new WeakMap,_(To,4,`svg`,Co,Mo,Eo),_(To,4,`name`,So,Mo,Do),_(To,4,`src`,xo,Mo,Oo),_(To,4,`label`,bo,Mo,ko),_(To,4,`library`,yo,Mo,Ao),_(To,4,`variant`,vo,Mo,jo),_(To,1,`handleLabelChange`,_o,Mo),_(To,1,`setIcon`,go,Mo),be(To,Mo),v(Mo,`styles`,[Ir,uo]);var No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo=class extends (Uo=ti,Ho=[Vr(`slot:not([name])`)],Vo=[Vr(`.menu-item`)],Bo=[D()],zo=[D({type:Boolean,reflect:!0})],Ro=[D()],Lo=[D({type:Boolean,reflect:!0})],Io=[D({type:Boolean,reflect:!0})],Fo=[Ur(`checked`)],Po=[Ur(`disabled`)],No=[Ur(`type`)],Uo){constructor(){super(...arguments),g(Wo,5,this),v(this,`cachedTextLabel`),v(this,`localize`,new Vi(this)),y(this,Go,g(Wo,8,this)),g(Wo,11,this),y(this,Ko,g(Wo,12,this)),g(Wo,15,this),y(this,qo,g(Wo,16,this,`normal`)),g(Wo,19,this),y(this,Jo,g(Wo,20,this,!1)),g(Wo,23,this),y(this,Yo,g(Wo,24,this,``)),g(Wo,27,this),y(this,Xo,g(Wo,28,this,!1)),g(Wo,31,this),y(this,Zo,g(Wo,32,this,!1)),g(Wo,35,this),v(this,`hasSlotController`,new to(this,`submenu`)),v(this,`submenuController`,new Di(this,this.hasSlotController)),v(this,`handleHostClick`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),v(this,`handleMouseOver`,e=>{this.focus(),e.stopPropagation()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(typeof this.cachedTextLabel>`u`){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return no(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return T`
      <div
        id="anchor"
        part="base"
        class=${Hi({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <st-icon name="check" library="system" aria-hidden="true"></st-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <st-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></st-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?T` <st-spinner part="spinner" exportparts="base:spinner__base"></st-spinner> `:``}
      </div>
    `}};Wo=ge(Uo),Go=new WeakMap,Ko=new WeakMap,qo=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,Zo=new WeakMap,_(Wo,4,`defaultSlot`,Ho,Qo,Go),_(Wo,4,`menuItem`,Vo,Qo,Ko),_(Wo,4,`type`,Bo,Qo,qo),_(Wo,4,`checked`,zo,Qo,Jo),_(Wo,4,`value`,Ro,Qo,Yo),_(Wo,4,`loading`,Lo,Qo,Xo),_(Wo,4,`disabled`,Io,Qo,Zo),_(Wo,1,`handleCheckedChange`,Fo,Qo),_(Wo,1,`handleDisabledChange`,Po,Qo),_(Wo,1,`handleTypeChange`,No,Qo),be(Wo,Qo),v(Qo,`styles`,[Ir,si]),v(Qo,`dependencies`,{"st-icon":Mo,"st-popup":k,"st-spinner":eo});var $o=mr`
  st-editor {
    display: flex;
    flex-direction: column;
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-medium);
    overflow: hidden !important;
    background: var(--st-panel-background-color) !important;
    box-shadow: var(--st-shadow-small) !important;
    transition:
      var(--st-transition-medium) border-color,
      var(--st-transition-medium) box-shadow,
      var(--st-transition-medium) transform !important;
  }

  /* Estado de Foco (quando o usuário clica para escrever) */
  st-editor:focus-within {
    border-color: var(--st-input-border-color-focus) !important;
    box-shadow:
      0 0 0 4px var(--st-input-focus-ring-color),
      var(--st-shadow-medium) !important;
    transform: translateY(-2px) !important;
  }

  /*
   * A barra gruda no topo do contêiner ao rolar: num texto longo, formatar um
   * parágrafo do fim não pode obrigar a subir até o começo. O deslocamento é
   * configurável porque quem hospeda o editor costuma ter a própria barra fixa
   * por cima (o app do Papiro tem).
   */
  .st-editor__toolbar {
    position: sticky !important;
    top: 0 !important;
    z-index: 20 !important;
    inset-block-start: var(--st-editor-toolbar-offset, 0);
    border-start-start-radius: var(--st-border-radius-medium);
    border-start-end-radius: var(--st-border-radius-medium);
    display: flex !important;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--st-spacing-2x-small);
    padding: var(--st-spacing-2x-small);
    background-color: var(--st-panel-background-color);
    border-block-end: solid var(--st-panel-border-width) var(--st-panel-border-color);
    min-height: var(--st-input-height-medium);
    backdrop-filter: blur(8px) !important;
  }

  /*
   * Os grupos são ilhas, não pedaços de uma fita.
   *
   * A barra tem sete grupos e vinte e um botões, e cabe inteira numa linha só num
   * monitor. Dentro de um diálogo estreito ela quebra — e quebrava mal: os grupos se
   * separavam por uma margem, que some justamente quando o grupo cai no começo de uma
   * fileira, então o resultado eram cinco fileiras de botões soltos, sem nada dizendo
   * quais pertencem juntos. Era o que a captura do backlog mostrava.
   *
   * Duas mudanças resolvem, e as duas valem em qualquer largura: cada grupo ganha uma
   * superfície própria (o desenho do agrupamento deixa de depender de espaço vazio e
   * sobrevive à quebra de linha), e a quebra passa a ser permitida DENTRO do grupo —
   * sem isso um grupo de quatro botões que não coubesse empurrava os quatro para a
   * fileira seguinte, e era daí que vinham os buracos.
   */
  .st-editor__group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--st-spacing-3x-small);
    padding: var(--st-spacing-3x-small);
    border-radius: var(--st-border-radius-medium);
    background-color: var(--st-color-neutral-100);
  }

  .st-editor__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* 2rem é o alvo mínimo de toque que ainda deixa a barra caber num telefone. */
    min-width: 2rem;
    min-height: 2rem;
    padding: 0;
    border: none;
    border-radius: var(--st-border-radius-small);
    background: none;
    color: var(--st-color-neutral-700);
    font-size: var(--st-font-size-medium);
    cursor: pointer;
    transition:
      var(--st-transition-fast) background-color,
      var(--st-transition-fast) color;
  }

  .st-editor__button:hover:not(:disabled) {
    background-color: var(--st-color-neutral-0);
    color: var(--st-color-neutral-900);
  }

  .st-editor__button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .st-editor__button[aria-pressed='true'] {
    background-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
  }

  /* Ensure icons within buttons are rendered */
  .st-editor__button st-icon {
    display: inline-block;
    width: var(--st-spacing-large);
    height: var(--st-spacing-large);
  }

  .st-editor__content {
    min-height: var(--st-editor-min-height, 45vh);
    padding: var(--st-spacing-medium) var(--st-spacing-large) !important;
    overflow-wrap: break-word;
    line-height: var(--st-line-height-normal) !important;
    font-size: var(--st-font-size-large) !important;
  }

  .st-editor__content:focus {
    outline: none;
  }
    
  /*
   * Os destaques e a âncora de nota são a SAÍDA do editor: as classes ficam
   * gravadas no HTML e quem exibe o texto depois precisa delas pintadas. Por isso
   * moram aqui, e não no CSS de cada app — a folha é adotada no documento assim
   * que o componente é importado, e vale tanto para a edição quanto para a leitura.
   *
   * A cor é um fundo tênue derivado do tom do tema, e não uma cor cravada: assim o
   * mesmo destaque continua legível no tema escuro.
   */
  .destaque--azul,
  .destaque--verde,
  .destaque--vermelho,
  .destaque--amarelo,
  .destaque--ciano {
    padding-inline: var(--st-spacing-3x-small);
    border-radius: var(--st-border-radius-small);
  }

  .destaque--azul {
    background-color: color-mix(in oklab, var(--st-color-primary-500) 22%, transparent);
  }

  .destaque--verde {
    background-color: color-mix(in oklab, var(--st-color-success-500) 22%, transparent);
  }

  .destaque--vermelho {
    background-color: color-mix(in oklab, var(--st-color-danger-500) 22%, transparent);
  }

  .destaque--amarelo {
    background-color: color-mix(in oklab, var(--st-color-warning-500) 26%, transparent);
  }

  .destaque--ciano {
    background-color: color-mix(in oklab, var(--st-color-sky-500, var(--st-color-primary-400)) 22%, transparent);
  }

  .papiro-nota-ref {
    font-size: 0.72em;
    font-weight: var(--st-font-weight-bold);
    vertical-align: super;
    color: var(--st-color-primary-600);
    text-decoration: none;
  }

  /* A amostra colorida de cada destaque, dentro do menu. */
  .st-editor__sample {
    padding-inline: var(--st-spacing-2x-small);
    border-radius: var(--st-border-radius-small);
  }

  /*
   * A tipografia do texto rico. Vale para a área de edição e para qualquer
   * elemento marcado com a mesma classe na leitura — é o que faz o que se escreve
   * ter, no editor, a mesma forma que terá depois de gravado.
   */
  .st-prose h2 {
    margin-block: var(--st-spacing-large) var(--st-spacing-x-small);
    font-size: var(--st-font-size-large);
  }

  .st-prose h3 {
    margin-block: var(--st-spacing-medium) var(--st-spacing-2x-small);
    font-size: var(--st-font-size-medium);
  }

  .st-prose p {
    margin-block: 0 var(--st-spacing-small);
  }

  .st-prose img {
    max-width: 100%;
    height: auto;
    border-radius: var(--st-border-radius-medium);
  }

  .st-prose blockquote {
    margin-inline: 0;
    padding-inline-start: var(--st-spacing-medium);
    border-inline-start: solid 3px var(--st-color-neutral-300);
    color: var(--st-color-neutral-600);
  }

  .st-prose table {
    width: 100%;
    border-collapse: collapse;
  }

  .st-prose th,
  .st-prose td {
    padding: var(--st-spacing-2x-small);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
  }
`,es=mr`
  :host {
    display: contents;
  }

  .dialog {
    padding: 0;
    border: none;
    background: none;
    max-width: 100vw;
    max-height: 100vh;
    overflow: visible;
  }

  .dialog::backdrop {
    background-color: var(--st-overlay-background-color);
    transition:
      opacity var(--st-transition-slow),
      display var(--st-transition-slow) allow-discrete,
      overlay var(--st-transition-slow) allow-discrete;
    opacity: 0;
  }

  /*
   * :modal, e não :show-modal — o segundo não existe em CSS, e um seletor
   * inválido derruba a regra inteira em silêncio. Era o que deixava o painel
   * parado em opacity 0 depois do showModal(): o diálogo abria de fato,
   * prendendo o foco inclusive, mas invisível.
   */
  .dialog:modal::backdrop {
    opacity: 1;
  }

  @starting-style {
    .dialog:modal::backdrop {
      opacity: 0;
    }
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--st-dialog-width, auto);
    max-width: calc(100vw - var(--st-spacing-2x-large));
    max-height: calc(100vh - var(--st-spacing-2x-large));
    background-color: var(--st-panel-background-color);
    border-radius: var(--st-border-radius-large);
    box-shadow: var(--st-shadow-x-large);
    overflow: hidden;

    /* Animation starting state */
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--st-transition-slow),
      scale var(--st-transition-slow),
      display var(--st-transition-slow) allow-discrete,
      overlay var(--st-transition-slow) allow-discrete;
  }

  .dialog:modal .dialog__panel {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .dialog:modal .dialog__panel {
      opacity: 0;
      scale: 0.9;
    }
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--st-spacing-large);
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--st-font-size-large);
    line-height: var(--st-line-height-dense);
    margin: 0;
  }

  .dialog__header-actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: var(--st-spacing-x-small);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--st-spacing-large);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    padding: var(--st-spacing-large);
    text-align: end;
  }
`,ts=new Map,ns=new WeakMap;function rs(e){return e??{keyframes:[],options:{duration:0}}}function is(e,t){return t.toLowerCase()===`rtl`?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function as(e,t){ts.set(e,rs(t))}function os(e,t,n){let r=ns.get(e);if(r?.[t])return is(r[t],n.dir);let i=ts.get(t);return i?is(i,n.dir):{keyframes:[],options:{duration:0}}}var ss=mr`
  :host {
    display: inline-block;
    color: var(--st-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--st-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--st-spacing-x-small);
    cursor: pointer;
    transition: var(--st-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--st-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--st-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,cs=Symbol.for(``),ls=e=>{if(e?.r===cs)return e?._$litStatic$},us=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:cs}),ds=new Map,fs=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=ls(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=ds.get(e))===void 0&&(o.raw=o,ds.set(e,t=o)),n=s}return e(t,...n)})(T),ps={fromAttribute:e=>e??``,toAttribute:e=>e===``?null:e},ms=new WeakMap,hs=new WeakMap,gs=new WeakMap,_s=new WeakSet,vs=new WeakMap,ys=class{host;form;options;constructor(e,t){(this.host=e).addController(this),this.options={form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`st-input`],...t}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),vs.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),vs.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ms.has(this.form)?ms.get(this.form).add(this.host):ms.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),hs.has(this.form)||(hs.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),gs.has(this.form)||(gs.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=ms.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),hs.has(this.form)&&(this.form.reportValidity=hs.get(this.form),hs.delete(this.form)),gs.has(this.form)&&(this.form.checkValidity=gs.get(this.form),gs.delete(this.form)),this.form=void 0))}handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`st-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&typeof r<`u`&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))};handleFormSubmit=e=>{let t=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&ms.get(this.form)?.forEach(e=>{this.setUserInteracted(e,!0)}),this.form&&!this.form.noValidate&&!t&&!n(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())};handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),vs.set(this.host,[])};handleInteraction=e=>{let t=vs.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)};checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0};reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0};setUserInteracted(e,t){t?_s.add(e):_s.delete(e),e.requestUpdate()}doAction(e,t){this.form&&xs(this.form,e,t)}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!_s.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`st-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},bs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze({...bs,valid:!1,valueMissing:!0}),Object.freeze({...bs,valid:!1,customError:!0});function xs(e,t,n){let r=document.createElement(`button`);r.type=t,r.style.position=`absolute`,r.style.width=`0`,r.style.height=`0`,r.style.clipPath=`inset(50%)`,r.style.overflow=`hidden`,r.style.whiteSpace=`nowrap`,n&&(r.name=n.name,r.value=n.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{n.hasAttribute(e)&&r.setAttribute(e,n.getAttribute(e))})),e.append(r),r.click(),r.remove()}var A=e=>e??E,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,j,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys=class extends (Fs=ti,Ps=[Vr(`.icon-button`)],Ns=[zr()],Ms=[D()],js=[D()],As=[D()],ks=[D()],Os=[D()],Ds=[D()],Es=[D()],Ts=[D()],ws=[D({type:Boolean,reflect:!0})],Cs=[D()],Ss=[D({reflect:!0})],Fs){constructor(){super(...arguments),y(this,Is,g(j,8,this)),g(j,11,this),y(this,Ls,g(j,12,this,!1)),g(j,15,this),y(this,Rs,g(j,16,this)),g(j,19,this),y(this,zs,g(j,20,this)),g(j,23,this),y(this,Bs,g(j,24,this,`outline`)),g(j,27,this),y(this,Vs,g(j,28,this)),g(j,31,this),y(this,Hs,g(j,32,this)),g(j,35,this),y(this,Us,g(j,36,this)),g(j,39,this),y(this,Ws,g(j,40,this)),g(j,43,this),y(this,Gs,g(j,44,this,``)),g(j,47,this),y(this,Ks,g(j,48,this,!1)),g(j,51,this),y(this,qs,g(j,52,this,`button`)),g(j,55,this),y(this,Js,g(j,56,this)),g(j,59,this)}handleBlur(){this.hasFocus=!1,this.emit(`st-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`st-focus`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}if(this.type!==`button`){let e=this.form?this.getRootNode().querySelector(`#${this.form}`):this.closest(`form`);e&&xs(e,this.type)}}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?us`a`:us`button`;return fs`
      <${t}
        part="base"
        class=${Hi({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${A(e?void 0:this.disabled)}
        type=${A(e?void 0:this.type)}
        href=${A(e?this.href:void 0)}
        target=${A(e?this.target:void 0)}
        download=${A(e?this.download:void 0)}
        rel=${A(e&&this.target?`noreferrer noopener`:void 0)}
        role=${A(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <st-icon
          class="icon-button__icon"
          name=${A(this.name)}
          library=${A(this.library)}
          variant=${this.variant}
          src=${A(this.src)}
          aria-hidden="true"
        ></st-icon>
      </${t}>
    `}};j=ge(Fs),Is=new WeakMap,Ls=new WeakMap,Rs=new WeakMap,zs=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Hs=new WeakMap,Us=new WeakMap,Ws=new WeakMap,Gs=new WeakMap,Ks=new WeakMap,qs=new WeakMap,Js=new WeakMap,_(j,4,`button`,Ps,Ys,Is),_(j,4,`hasFocus`,Ns,Ys,Ls),_(j,4,`name`,Ms,Ys,Rs),_(j,4,`library`,js,Ys,zs),_(j,4,`variant`,As,Ys,Bs),_(j,4,`src`,ks,Ys,Vs),_(j,4,`href`,Os,Ys,Hs),_(j,4,`target`,Ds,Ys,Us),_(j,4,`download`,Es,Ys,Ws),_(j,4,`label`,Ts,Ys,Gs),_(j,4,`disabled`,ws,Ys,Ks),_(j,4,`type`,Cs,Ys,qs),_(j,4,`form`,Ss,Ys,Js),be(j,Ys),v(Ys,`styles`,[Ir,ss]),v(Ys,`dependencies`,{"st-icon":Mo});var Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc=class extends (tc=ti,ec=[Vr(`.dialog`)],$s=[D({type:Boolean,reflect:!0})],Qs=[D({reflect:!0})],Zs=[D({attribute:`no-header`,type:Boolean,reflect:!0})],Xs=[Ur(`open`,{waitUntilFirstUpdate:!0})],tc){constructor(){super(...arguments),g(nc,5,this),v(this,`hasSlotController`,new to(this,`footer`)),v(this,`localize`,new Vi(this)),y(this,rc,g(nc,8,this)),g(nc,11,this),y(this,ic,g(nc,12,this,!1)),g(nc,15,this),y(this,ac,g(nc,16,this,``)),g(nc,19,this),y(this,oc,g(nc,20,this,!1)),g(nc,23,this)}requestClose(e){this.emit(`st-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented||this.hide()}firstUpdated(){this.open&&this.abrir()}abrir(){this.dialog.open||(this.dialog.showModal(),this.emit(`st-initial-focus`,{cancelable:!0}))}fechar(){this.dialog.open&&this.dialog.close()}handleOpenChange(){this.open?(this.emit(`st-show`),this.abrir(),this.emit(`st-after-show`)):(this.emit(`st-hide`),this.fechar(),this.emit(`st-after-hide`))}async show(){this.open||=!0}async hide(){this.open&&=!1}handleCancel(e){e.preventDefault(),this.requestClose(`keyboard`)}handleClose(){this.open=!1}render(){return T`
      <dialog
        part="base"
        class="dialog"
        @cancel=${this.handleCancel}
        @close=${this.handleClose}
        @click=${e=>e.target===this.dialog&&this.requestClose(`overlay`)}
      >
        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-label=${A(this.noHeader?this.label:void 0)}
          aria-labelledby=${A(this.noHeader?void 0:`title`)}
        >
          ${this.noHeader?``:T`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <st-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></st-icon-button>
                  </div>
                </header>
              `}
          <div part="body" class="dialog__body"><slot></slot></div>

          ${this.hasSlotController.test(`footer`)?T`
                <footer part="footer" class="dialog__footer">
                  <slot name="footer"></slot>
                </footer>
              `:``}
        </div>
      </dialog>
    `}};nc=ge(tc),rc=new WeakMap,ic=new WeakMap,ac=new WeakMap,oc=new WeakMap,_(nc,4,`dialog`,ec,sc,rc),_(nc,4,`open`,$s,sc,ic),_(nc,4,`label`,Qs,sc,ac),_(nc,4,`noHeader`,Zs,sc,oc),_(nc,1,`handleOpenChange`,Xs,sc),be(nc,sc),v(sc,`styles`,[Ir,es]),v(sc,`dependencies`,{"st-icon-button":Ys}),as(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),as(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),as(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),as(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),as(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var cc=mr`
  :host {
    display: inline-block;
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
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-medium);
    font-weight: var(--st-font-weight-normal);
    box-shadow: var(--st-shadow-large);
    border-radius: var(--st-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* Quando um menu é passado por slot, ele precisa respeitar o auto-size do popup. */
  ::slotted(st-menu) {
    max-width: var(--st-popup-auto-size-available-width) !important;
    max-height: var(--st-popup-auto-size-available-height) !important;
  }
`;function*lc(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*lc(e.shadowRoot.activeElement)))}function uc(){return[...lc()].pop()}var dc=new WeakMap;function fc(e){let t=dc.get(e);return t||(t=window.getComputedStyle(e,null),dc.set(e,t)),t}function pc(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=fc(e);return t.visibility!==`hidden`&&t.display!==`none`}function mc(e){let{overflowY:t,overflowX:n}=fc(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function hc(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return pc(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:mc(e):!1}function gc(e){let t=vc(e);return{start:t[0]??null,end:t.at(-1)??null}}function _c(e,t){return e.getRootNode({composed:!0})?.host!==t}function vc(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),i instanceof HTMLElement&&!n.includes(i)&&hc(i)&&n.push(i),i instanceof HTMLSlotElement&&_c(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}function yc(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function bc(e,t,n){return new Promise(r=>{if(n?.duration===1/0)throw Error(`Promise-based animations must be finite.`);let i=e.animate(t,{...n,duration:xc()?0:n.duration});i.addEventListener(`cancel`,r,{once:!0}),i.addEventListener(`finish`,r,{once:!0})})}function xc(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Sc(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}var Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,M,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc=class extends (Fc=ti,Pc=[Vr(`.dropdown`)],Nc=[Vr(`.dropdown__trigger`)],Mc=[Vr(`.dropdown__panel`)],jc=[D({type:Boolean,reflect:!0})],Ac=[D({reflect:!0})],kc=[D({type:Boolean,reflect:!0})],Oc=[D({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],Dc=[D({attribute:!1})],Ec=[D({type:Number})],Tc=[D({type:Number})],wc=[D({reflect:!0})],Cc=[Ur(`open`,{waitUntilFirstUpdate:!0})],Fc){constructor(){super(...arguments),g(M,5,this),y(this,Ic,g(M,8,this)),g(M,11,this),y(this,Lc,g(M,12,this)),g(M,15,this),y(this,Rc,g(M,16,this)),g(M,19,this),v(this,`localize`,new Vi(this)),v(this,`closeWatcher`),y(this,zc,g(M,20,this,!1)),g(M,23,this),y(this,Bc,g(M,24,this,`bottom-start`)),g(M,27,this),y(this,Vc,g(M,28,this,!1)),g(M,31,this),y(this,Hc,g(M,32,this,!1)),g(M,35,this),y(this,Uc,g(M,36,this)),g(M,39,this),y(this,Wc,g(M,40,this,0)),g(M,43,this),y(this,Gc,g(M,44,this,0)),g(M,47,this),y(this,Kc,g(M,48,this)),g(M,51,this),v(this,`handleKeyDown`,e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}),v(this,`handleDocumentKeyDown`,e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`st-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?uc():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}}),v(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}),v(this,`handlePanelSelect`,e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`st-menu`&&(this.hide(),this.focusOnTrigger())})}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`st-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems();if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){e.preventDefault(),this.open||(this.show(),await this.updateComplete);let r=e.key===`ArrowDown`||e.key===`Home`?n.at(0):n.at(-1);r&&this.updateComplete.then(()=>{t.setCurrentItem(r),r.focus()})}}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>gc(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`st-button`:case`st-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,yc(this,`st-after-show`)}async hide(){if(this.open)return this.open=!1,yc(this,`st-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`st-select`,this.handlePanelSelect),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`st-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`st-show`),this.addOpenListeners(),await Sc(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=os(this,`dropdown.show`,{dir:this.localize.dir()});await bc(this.popup.popup,e,t),this.emit(`st-after-show`)}else{this.emit(`st-hide`),this.removeOpenListeners(),await Sc(this);let{keyframes:e,options:t}=os(this,`dropdown.hide`,{dir:this.localize.dir()});await bc(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`st-after-hide`)}}render(){return T`
      <st-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${A(this.sync?this.sync:void 0)}
        class=${Hi({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </st-popup>
    `}};M=ge(Fc),Ic=new WeakMap,Lc=new WeakMap,Rc=new WeakMap,zc=new WeakMap,Bc=new WeakMap,Vc=new WeakMap,Hc=new WeakMap,Uc=new WeakMap,Wc=new WeakMap,Gc=new WeakMap,Kc=new WeakMap,_(M,4,`popup`,Pc,qc,Ic),_(M,4,`trigger`,Nc,qc,Lc),_(M,4,`panel`,Mc,qc,Rc),_(M,4,`open`,jc,qc,zc),_(M,4,`placement`,Ac,qc,Bc),_(M,4,`disabled`,kc,qc,Vc),_(M,4,`stayOpenOnSelect`,Oc,qc,Hc),_(M,4,`containingElement`,Dc,qc,Uc),_(M,4,`distance`,Ec,qc,Wc),_(M,4,`skidding`,Tc,qc,Gc),_(M,4,`sync`,wc,qc,Kc),_(M,1,`handleOpenChange`,Cc,qc),be(M,qc),v(qc,`styles`,[Ir,cc]),v(qc,`dependencies`,{"st-popup":k}),as(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),as(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}});var Jc=mr`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--st-input-font-family);
    font-weight: var(--st-input-font-weight);
    letter-spacing: var(--st-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--st-transition-fast) color,
      var(--st-transition-fast) border,
      var(--st-transition-fast) box-shadow,
      var(--st-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--st-input-background-color);
    border: solid var(--st-input-border-width) var(--st-input-border-color);
  }

  :host(:not(:state(--disabled))) .input--standard:hover {
    background-color: var(--st-input-background-color-hover);
    border-color: var(--st-input-border-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard {
    background-color: var(--st-input-background-color-focus);
    border-color: var(--st-input-border-color-focus);
    box-shadow: 0 0 0 var(--st-focus-ring-width) var(--st-input-focus-ring-color);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard .input__control {
    color: var(--st-input-color-focus);
  }

  :host(:state(--disabled)) .input.input--standard {
    background-color: var(--st-input-background-color-disabled);
    border-color: var(--st-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host(:state(--disabled)) .input.input--standard .input__control {
    color: var(--st-input-color-disabled);
  }

  :host(:state(--disabled)) .input.input--standard .input__control::placeholder {
    color: var(--st-input-placeholder-color-disabled);
  }

  /* Validation */
  :host(:state(--invalid)) .input--standard {
    border-color: var(--st-color-danger-600);
  }

  :host(:state(--invalid):state(--focused)) .input--standard {
    box-shadow: 0 0 0 var(--st-focus-ring-width) light-dark(color-mix(in srgb, var(--st-color-danger-600), transparent 60%), color-mix(in srgb, var(--st-color-danger-600), transparent 40%));
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--st-input-filled-background-color);
    color: var(--st-input-color);
  }

  :host(:not(:state(--disabled))) .input--filled:hover {
    background-color: var(--st-input-filled-background-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--filled {
    background-color: var(--st-input-filled-background-color-focus);
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  :host(:state(--disabled)) .input.input--filled {
    background-color: var(--st-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--st-input-color);
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--st-input-height-large) var(--st-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--st-color-primary-500);
    caret-color: var(--st-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--st-input-height-large) var(--st-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--st-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:not(:state(--disabled))) .input:hover .input__control {
    color: var(--st-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(st-icon),
  .input__suffix ::slotted(st-icon) {
    color: var(--st-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--st-input-border-radius-small);
    font-size: var(--st-input-font-size-small);
    height: var(--st-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--st-input-height-small) - var(--st-input-border-width) * 2);
    padding: 0 var(--st-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--st-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--st-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--st-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--st-input-border-radius-medium);
    font-size: var(--st-input-font-size-medium);
    height: var(--st-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--st-input-height-medium) - var(--st-input-border-width) * 2);
    padding: 0 var(--st-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--st-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--st-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--st-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--st-input-border-radius-large);
    font-size: var(--st-input-font-size-large);
    height: var(--st-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--st-input-height-large) - var(--st-input-border-width) * 2);
    padding: 0 var(--st-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--st-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--st-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--st-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--st-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--st-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--st-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--st-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--st-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--st-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Yc=mi(class extends hi{constructor(e){if(super(e),e.type!==pi.PROPERTY&&e.type!==pi.ATTRIBUTE&&e.type!==pi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ui(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Gn||t===E)return t;let n=e.element,r=e.name;if(e.type===pi.PROPERTY){if(t===n[r])return Gn}else if(e.type===pi.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Gn}else if(e.type===pi.ATTRIBUTE&&n.getAttribute(r)===t+``)return Gn;return fi(e),t}});function Xc(e){return e.validity.valid?``:e.validationMessage===``?` `:e.validationMessage}var Zc=class{host;interacaoEm;vistos=new Set;interagiu=!1;constructor(e,t){this.host=e,this.interacaoEm=t?.interacaoEm??[`st-blur`,`st-input`],e.addController(this)}hostConnected(){this.host.addEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.addEventListener(e,this.aoInteragir)}hostDisconnected(){this.host.removeEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.removeEventListener(e,this.aoInteragir)}aoInvalidar=e=>{this.conferindo||this.marcarInteragido(),this.host.emitInvalidEvent(e)};conferindo=!1;conferir(e){this.conferindo=!0;try{return e()}finally{this.conferindo=!1}}aoInteragir=e=>{this.vistos.add(e.type),!(this.vistos.size<this.interacaoEm.length)&&this.marcarInteragido()};marcarInteragido(){this.interagiu||(this.interagiu=!0,this.host.updateValidity())}esquecerInteracao(){this.vistos.clear(),this.interagiu=!1}aplicar(e,t){let n=this.host.required===!0;t(`--required`,n),t(`--optional`,!n),t(`--valid`,e),t(`--invalid`,!e),t(`--user-valid`,e&&this.interagiu),t(`--user-invalid`,!e&&this.interagiu)}},Qc=mr`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--st-input-label-color);
    margin-block-end: var(--st-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--st-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--st-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--st-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--st-input-required-content);
    margin-inline-start: var(--st-input-required-content-offset);
    color: var(--st-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--st-input-help-text-color);
    margin-block-start: var(--st-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--st-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--st-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--st-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-block-start: var(--st-spacing-2x-small);
  }

  /* Validation */
  :host(:state(--invalid)) .form-control__label {
    color: var(--st-color-danger-700);
  }

  :host(:state(--invalid)) .form-control__help-text {
    color: var(--st-color-danger-700);
  }
`,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,N,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,P=class extends (Il=ti,Fl=[Vr(`.input__control`)],Pl=[zr()],Nl=[D()],Ml=[D({reflect:!0})],jl=[D()],Al=[D()],kl=[Kr()],Ol=[D({reflect:!0})],Dl=[D({type:Boolean,reflect:!0})],El=[D({type:Boolean,reflect:!0})],Tl=[D()],wl=[D({attribute:`help-text`})],Cl=[D({type:Boolean})],Sl=[D({type:Boolean,reflect:!0})],xl=[D()],bl=[D({type:Boolean,reflect:!0})],yl=[D({attribute:`password-toggle`,type:Boolean})],vl=[D({attribute:`password-visible`,type:Boolean})],_l=[D({attribute:`no-spin-buttons`,type:Boolean})],gl=[D({reflect:!0,converter:ps})],hl=[D({type:Boolean,reflect:!0})],ml=[D()],pl=[D({type:Number})],fl=[D({type:Number})],dl=[D()],ul=[D()],ll=[D()],cl=[D()],sl=[D({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],ol=[D()],al=[D({type:Boolean})],il=[D()],rl=[D({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],nl=[D()],tl=[Ur(`disabled`,{waitUntilFirstUpdate:!0})],el=[Ur(`step`,{waitUntilFirstUpdate:!0})],$c=[Ur(`value`,{waitUntilFirstUpdate:!0})],Il){constructor(){super(...arguments),g(N,5,this),v(this,`validade`,new Zc(this,{interacaoEm:[`st-blur`,`st-input`]})),v(this,`hasSlotController`,new to(this,`help-text`,`label`)),v(this,`localize`,new Vi(this)),y(this,Ll,g(N,8,this)),g(N,11,this),y(this,Rl,g(N,12,this,!1)),g(N,15,this),y(this,zl,g(N,16,this,``)),g(N,19,this),v(this,`__numberInput`,Object.assign(document.createElement(`input`),{type:`number`})),v(this,`__dateInput`,Object.assign(document.createElement(`input`),{type:`date`})),y(this,Bl,g(N,20,this,`text`)),g(N,23,this),y(this,Vl,g(N,24,this,``)),g(N,27,this),y(this,Hl,g(N,28,this,``)),g(N,31,this),v(this,`defaultValue`,g(N,140,this,``)),g(N,143,this),y(this,Ul,g(N,32,this,`medium`)),g(N,35,this),y(this,Wl,g(N,36,this,!1)),g(N,39,this),y(this,Gl,g(N,40,this,!1)),g(N,43,this),y(this,Kl,g(N,44,this,``)),g(N,47,this),y(this,ql,g(N,48,this,``)),g(N,51,this),y(this,Jl,g(N,52,this,!1)),g(N,55,this),y(this,Yl,g(N,56,this,!1)),g(N,59,this),y(this,Xl,g(N,60,this,``)),g(N,63,this),y(this,Zl,g(N,64,this,!1)),g(N,67,this),y(this,Ql,g(N,68,this,!1)),g(N,71,this),y(this,$l,g(N,72,this,!1)),g(N,75,this),y(this,eu,g(N,76,this,!1)),g(N,79,this),y(this,tu,g(N,80,this,``)),g(N,83,this),y(this,nu,g(N,84,this,!1)),g(N,87,this),y(this,ru,g(N,88,this)),g(N,91,this),y(this,iu,g(N,92,this)),g(N,95,this),y(this,au,g(N,96,this)),g(N,99,this),y(this,ou,g(N,100,this)),g(N,103,this),y(this,su,g(N,104,this)),g(N,107,this),y(this,cu,g(N,108,this)),g(N,111,this),y(this,lu,g(N,112,this)),g(N,115,this),y(this,uu,g(N,116,this,!0)),g(N,119,this),y(this,du,g(N,120,this)),g(N,123,this),y(this,fu,g(N,124,this)),g(N,127,this),y(this,pu,g(N,128,this)),g(N,131,this),y(this,mu,g(N,132,this,!0)),g(N,135,this),y(this,hu,g(N,136,this)),g(N,139,this)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`st-blur`)}handleChange(){this.value=this.input.value,this.emit(`st-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`st-clear`),this.emit(`st-input`),this.emit(`st-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`st-focus`)}handleInput(){this.value=this.input.value,this.updateValidity(),this.emit(`st-input`)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this._internals.form?.requestSubmit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.input.disabled=this.disabled,this.updateValidity()}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}async handleValueChange(){this._internals.setFormValue(this.value),await this.updateComplete,this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){let e=this.input.validity.valid;this.toggleState(`--empty`,!this.value),this.validade.aplicar(e,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Xc(this.input),this.input)}emitInvalidEvent(e){let t=new CustomEvent(`st-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return T`
      <div
        part="form-control"
        class=${Hi({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Hi({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${A(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${A(this.placeholder)}
              minlength=${A(this.minlength)}
              maxlength=${A(this.maxlength)}
              min=${A(this.min)}
              max=${A(this.max)}
              step=${A(this.step)}
              .value=${Yc(this.value)}
              autocapitalize=${A(this.autocapitalize)}
              autocomplete=${A(this.autocomplete)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${A(this.pattern)}
              enterkeyhint=${A(this.enterkeyhint)}
              inputmode=${A(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?T`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <st-icon name="circle-x" library="system"></st-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?T`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?T`
                          <slot name="show-password-icon">
                            <st-icon name="eye-off" library="system"></st-icon>
                          </slot>
                        `:T`
                          <slot name="hide-password-icon">
                            <st-icon name="eye" library="system"></st-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};N=ge(Il),Ll=new WeakMap,Rl=new WeakMap,zl=new WeakMap,Bl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Ul=new WeakMap,Wl=new WeakMap,Gl=new WeakMap,Kl=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,au=new WeakMap,ou=new WeakMap,su=new WeakMap,cu=new WeakMap,lu=new WeakMap,uu=new WeakMap,du=new WeakMap,fu=new WeakMap,pu=new WeakMap,mu=new WeakMap,hu=new WeakMap,_(N,4,`input`,Fl,P,Ll),_(N,4,`hasFocus`,Pl,P,Rl),_(N,4,`title`,Nl,P,zl),_(N,4,`type`,Ml,P,Bl),_(N,4,`name`,jl,P,Vl),_(N,4,`value`,Al,P,Hl),_(N,4,`size`,Ol,P,Ul),_(N,4,`filled`,Dl,P,Wl),_(N,4,`pill`,El,P,Gl),_(N,4,`label`,Tl,P,Kl),_(N,4,`helpText`,wl,P,ql),_(N,4,`clearable`,Cl,P,Jl),_(N,4,`disabled`,Sl,P,Yl),_(N,4,`placeholder`,xl,P,Xl),_(N,4,`readonly`,bl,P,Zl),_(N,4,`passwordToggle`,yl,P,Ql),_(N,4,`passwordVisible`,vl,P,$l),_(N,4,`noSpinButtons`,_l,P,eu),_(N,4,`form`,gl,P,tu),_(N,4,`required`,hl,P,nu),_(N,4,`pattern`,ml,P,ru),_(N,4,`minlength`,pl,P,iu),_(N,4,`maxlength`,fl,P,au),_(N,4,`min`,dl,P,ou),_(N,4,`max`,ul,P,su),_(N,4,`step`,ll,P,cu),_(N,4,`autocapitalize`,cl,P,lu),_(N,4,`autocorrect`,sl,P,uu),_(N,4,`autocomplete`,ol,P,du),_(N,4,`autofocus`,al,P,fu),_(N,4,`enterkeyhint`,il,P,pu),_(N,4,`spellcheck`,rl,P,mu),_(N,4,`inputmode`,nl,P,hu),_(N,1,`handleDisabledChange`,tl,P),_(N,1,`handleStepChange`,el,P),_(N,1,`handleValueChange`,$c,P),_(N,5,`defaultValue`,kl,P),be(N,P),v(P,`styles`,[Ir,Qc,Jc]),v(P,`dependencies`,{"st-icon":Mo}),v(P,`formAssociated`,!0);var gu=mr`
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
    border-width: var(--st-input-border-width);
    font-family: var(--st-input-font-family);
    font-weight: var(--st-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--st-transition-x-fast) background-color,
      var(--st-transition-x-fast) color,
      var(--st-transition-x-fast) border,
      var(--st-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  :host(:state(--disabled)) .button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  :host(:state(--disabled)) .button * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(st-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-input-border-color);
    color: var(--st-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:hover {
    background-color: var(--st-color-primary-50);
    border-color: var(--st-color-primary-300);
    color: var(--st-color-primary-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:active {
    background-color: var(--st-color-primary-100);
    border-color: var(--st-color-primary-400);
    color: var(--st-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--st-color-primary-600);
    border-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:hover {
    background-color: var(--st-color-primary-500);
    border-color: var(--st-color-primary-500);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:active {
    background-color: var(--st-color-primary-600);
    border-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--st-color-success-600);
    border-color: var(--st-color-success-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:hover {
    background-color: var(--st-color-success-500);
    border-color: var(--st-color-success-500);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:active {
    background-color: var(--st-color-success-600);
    border-color: var(--st-color-success-600);
    color: var(--st-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--st-color-neutral-600);
    border-color: var(--st-color-neutral-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:hover {
    background-color: var(--st-color-text-muted);
    border-color: var(--st-color-text-muted);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:active {
    background-color: var(--st-color-neutral-600);
    border-color: var(--st-color-neutral-600);
    color: var(--st-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--st-color-warning-600);
    border-color: var(--st-color-warning-600);
    color: var(--st-color-neutral-0);
  }
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:hover {
    background-color: var(--st-color-warning-500);
    border-color: var(--st-color-warning-500);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:active {
    background-color: var(--st-color-warning-600);
    border-color: var(--st-color-warning-600);
    color: var(--st-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--st-color-danger-600);
    border-color: var(--st-color-danger-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:hover {
    background-color: var(--st-color-danger-500);
    border-color: var(--st-color-danger-500);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:active {
    background-color: var(--st-color-danger-600);
    border-color: var(--st-color-danger-600);
    color: var(--st-color-neutral-0);
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
    border-color: var(--st-input-border-color);
    color: var(--st-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default.button--checked {
    border-color: var(--st-color-primary-600);
    background-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:active {
    border-color: var(--st-color-primary-700);
    background-color: var(--st-color-primary-700);
    color: var(--st-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--st-color-primary-600);
    color: var(--st-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary.button--checked {
    background-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:active {
    border-color: var(--st-color-primary-700);
    background-color: var(--st-color-primary-700);
    color: var(--st-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--st-color-success-600);
    color: var(--st-color-success-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success.button--checked {
    background-color: var(--st-color-success-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:active {
    border-color: var(--st-color-success-700);
    background-color: var(--st-color-success-700);
    color: var(--st-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--st-color-neutral-600);
    color: var(--st-color-neutral-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral.button--checked {
    background-color: var(--st-color-neutral-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:active {
    border-color: var(--st-color-neutral-700);
    background-color: var(--st-color-neutral-700);
    color: var(--st-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--st-color-warning-600);
    color: var(--st-color-warning-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning.button--checked {
    background-color: var(--st-color-warning-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:active {
    border-color: var(--st-color-warning-700);
    background-color: var(--st-color-warning-700);
    color: var(--st-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--st-color-danger-600);
    color: var(--st-color-danger-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger.button--checked {
    background-color: var(--st-color-danger-600);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:active {
    border-color: var(--st-color-danger-700);
    background-color: var(--st-color-danger-700);
    color: var(--st-color-neutral-0);
  }

  @media (forced-colors: active) {
    :host(:not(:state(--disabled))) .button.button--outline.button--checked {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--st-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--st-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:focus-visible {
    background-color: transparent;
    border-color: transparent;
    color: var(--st-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:active {
    background-color: transparent;
    border-color: transparent;
    color: var(--st-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--st-input-height-small);
    font-size: var(--st-button-font-size-small);
    line-height: calc(var(--st-input-height-small) - var(--st-input-border-width) * 2);
    border-radius: var(--st-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--st-input-height-medium);
    font-size: var(--st-button-font-size-medium);
    line-height: calc(var(--st-input-height-medium) - var(--st-input-border-width) * 2);
    border-radius: var(--st-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--st-input-height-large);
    font-size: var(--st-button-font-size-large);
    line-height: calc(var(--st-input-height-large) - var(--st-input-border-width) * 2);
    border-radius: var(--st-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--st-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--st-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--st-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-inline: 0;
  }

  .button--circle.button--small {
    width: var(--st-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--st-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--st-input-height-large);
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

  :host(:state(--loading)) .button {
    position: relative;
    cursor: wait;
  }

  :host(:state(--loading)) .button .button__prefix,
  :host(:state(--loading)) .button .button__label,
  :host(:state(--loading)) .button .button__suffix,
  :host(:state(--loading)) .button .button__caret {
    visibility: hidden;
  }

  :host(:state(--loading)) .button st-spinner {
    --st-spinner-indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    inset-block-start: calc(50% - 0.5em);
    inset-inline-start: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(st-badge) {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(st-badge) {
    inset-inline-end: auto;
    inset-inline-start: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding-inline: var(--st-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding-inline: var(--st-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding-inline: var(--st-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--st-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--st-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--st-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--st-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--st-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--st-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--st-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--st-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--st-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--st-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--st-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--st-spacing-small);
  }

  /*
   * Modificador swipe
   *
   * Placa de ícone na cor da variante encostada na borda, corpo claro, e um
   * painel da mesma cor que entra deslizando da esquerda no hover.
   *
   * swipe é FORMA, não é cor: quem escolhe a cor continua sendo o variant. Daí
   * o alias local — os seletores por variante trocam só ele, e o resto do bloco
   * não repete nada.
   *
   * Os seletores levam .button junto (.button.button--swipe) porque as regras
   * de variant lá em cima têm duas classes; sem isso o swipe perde a disputa
   * de especificidade em vez de vencer por vir depois.
   */

  .button--swipe {
    --st-button-accent-color: var(--st-color-primary-600);
  }

  .button--swipe.button--success {
    --st-button-accent-color: var(--st-color-success-600);
  }

  .button--swipe.button--neutral {
    --st-button-accent-color: var(--st-color-neutral-600);
  }

  .button--swipe.button--warning {
    --st-button-accent-color: var(--st-color-warning-600);
  }

  .button--swipe.button--danger {
    --st-button-accent-color: var(--st-color-danger-600);
  }

  .button.button--swipe {
    position: relative;
    overflow: hidden;
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-button-accent-color);
    color: var(--st-color-neutral-700);
    box-shadow: var(--st-shadow-large);
    /*
     * A cor do rótulo acompanha o painel: no x-fast herdado o texto ficaria
     * branco no branco enquanto o painel ainda estivesse a caminho.
     */
    transition:
      var(--st-transition-x-fast) background-color,
      var(--st-transition-x-fast) border-color,
      var(--st-transition-medium) color;
  }

  /* A placa encosta na borda — o respiro do prefixo é dela, não do botão. */
  .button.button--swipe.button--has-prefix {
    padding-inline-start: 0;
  }

  .button--swipe .button__decor {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: var(--st-button-accent-color);
    translate: -100% 0;
    transition: var(--st-transition-medium) translate;
  }

  /* Tudo o que é conteúdo passa por cima do painel. */
  .button--swipe .button__prefix,
  .button--swipe .button__label,
  .button--swipe .button__suffix,
  .button--swipe .button__caret,
  .button--swipe st-spinner {
    position: relative;
    z-index: 1;
  }

  .button--swipe .button__prefix {
    align-self: stretch;
    justify-content: center;
    padding-inline: var(--st-spacing-small);
    background-color: var(--st-button-accent-color);
    color: var(--st-color-neutral-0);
  }

  .button--swipe.button--has-label .button__label,
  .button--swipe.button--has-prefix .button__label {
    padding-inline: var(--st-spacing-small) var(--st-spacing-large);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:focus-visible {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-button-accent-color);
    color: var(--st-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:hover .button__decor,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:focus-visible .button__decor {
    translate: 0 0;
  }

  /*
   * Modificador expand
   *
   * Fechado é um círculo com o ícone do slot prefix; no hover — e no foco de
   * teclado, que o original não previa — cresce em pílula, o ícone sobe para
   * fora de vista e o rótulo ocupa o lugar. O rótulo está sempre no DOM, só
   * recortado: quem usa leitor de tela ouve o botão fechado do mesmo jeito.
   *
   * A largura não é animada — não há como transicionar até "auto". Quem cresce
   * é a coluna do rótulo (0fr → 1fr) e o botão vai atrás; o min-width segura o
   * círculo enquanto ela está fechada. É também por isso que o ícone sai do
   * fluxo: no estado fechado ele não pode ter voto na largura.
   */

  .button.button--expand {
    position: relative;
    overflow: hidden;
    padding-inline: 0;
    /* Raio de pílula numa caixa quadrada é um círculo — sem animar o raio. */
    border-radius: var(--st-border-radius-pill);
  }

  .button--expand.button--small {
    min-width: var(--st-input-height-small);
  }

  .button--expand.button--medium {
    min-width: var(--st-input-height-medium);
  }

  .button--expand.button--large {
    min-width: var(--st-input-height-large);
  }

  /* O circle fixa a largura e esconde o prefixo; com expand os dois têm de ceder. */
  .button--expand.button--circle {
    width: auto;
  }

  .button--expand .button__prefix {
    display: flex;
    position: absolute;
    inset: 0;
    justify-content: center;
    transition: var(--st-transition-medium) translate;
  }

  .button--expand .button__reveal {
    display: grid;
    grid-template-columns: 0fr;
    padding-inline: 0;
    transition:
      var(--st-transition-medium) grid-template-columns,
      var(--st-transition-medium) padding-inline;
  }

  .button--expand .button__label {
    min-width: 0;
    overflow: hidden;
  }

  /* O respiro do rótulo é do invólucro, que fecha junto com a coluna. */
  .button--expand.button--has-label .button__label,
  .button--expand.button--has-prefix .button__label {
    padding-inline: 0;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__prefix,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__prefix {
    translate: 0 -200%;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__reveal,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__reveal {
    grid-template-columns: 1fr;
    padding-inline: var(--st-spacing-large);
  }

  /*
   * Sem movimento: os dois estados continuam existindo, o caminho entre eles é
   * que deixa de ser desenhado.
   */
  @media (prefers-reduced-motion: reduce) {
    .button--swipe .button__decor,
    .button--expand .button__prefix,
    .button--expand .button__reveal {
      transition: none;
    }
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-st-button-group__button--first]:not([data-st-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-st-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-st-button-group__button--last]:not([data-st-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-st-button-group__button]:not([data-st-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--st-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-st-button-group__button]:not(
          [data-st-button-group__button--first],
          [data-st-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    border-inline-start: solid 1px var(--st-color-neutral-agnostic-strong);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-st-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-st-button-group__button--focus]),
  :host([data-st-button-group__button][checked]) {
    z-index: 2;
  }
`,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,F,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,I=class extends (Ku=ti,Gu=[Vr(`.button`)],Wu=[zr()],Uu=[zr()],Hu=[D()],Vu=[D({reflect:!0})],Bu=[D({reflect:!0})],zu=[D({type:Boolean,reflect:!0})],Ru=[D({type:Boolean,reflect:!0})],Lu=[D({type:Boolean,reflect:!0})],Iu=[D({type:Boolean,reflect:!0})],Fu=[D({type:Boolean,reflect:!0})],Pu=[D({type:Boolean,reflect:!0})],Nu=[D({type:Boolean,reflect:!0})],Mu=[D({type:Boolean,reflect:!0})],ju=[D()],Au=[D()],ku=[D()],Ou=[D()],Du=[D()],Eu=[D()],Tu=[D()],wu=[D()],Cu=[D({attribute:`formaction`})],Su=[D({attribute:`formenctype`})],xu=[D({attribute:`formmethod`})],bu=[D({attribute:`formnovalidate`,type:Boolean})],yu=[D({attribute:`formtarget`})],vu=[Ur(`disabled`,{waitUntilFirstUpdate:!0})],_u=[Ur(`loading`,{waitUntilFirstUpdate:!0})],Ku){constructor(){super(...arguments),g(F,5,this),v(this,`formControlController`,new ys(this,{assumeInteractionOn:[`click`]})),v(this,`hasSlotController`,new to(this,`[default]`,`prefix`,`suffix`)),v(this,`localize`,new Vi(this)),y(this,qu,g(F,8,this)),g(F,11,this),y(this,Ju,g(F,12,this,!1)),g(F,15,this),y(this,Yu,g(F,16,this,!1)),g(F,19,this),y(this,Xu,g(F,20,this,``)),g(F,23,this),y(this,Zu,g(F,24,this,`default`)),g(F,27,this),y(this,Qu,g(F,28,this,`medium`)),g(F,31,this),y(this,$u,g(F,32,this,!1)),g(F,35,this),y(this,ed,g(F,36,this,!1)),g(F,39,this),y(this,td,g(F,40,this,!1)),g(F,43,this),y(this,nd,g(F,44,this,!1)),g(F,47,this),y(this,rd,g(F,48,this,!1)),g(F,51,this),y(this,id,g(F,52,this,!1)),g(F,55,this),y(this,ad,g(F,56,this,!1)),g(F,59,this),y(this,od,g(F,60,this,!1)),g(F,63,this),y(this,sd,g(F,64,this,`button`)),g(F,67,this),y(this,cd,g(F,68,this,``)),g(F,71,this),y(this,ld,g(F,72,this,``)),g(F,75,this),y(this,ud,g(F,76,this,``)),g(F,79,this),y(this,dd,g(F,80,this)),g(F,83,this),y(this,fd,g(F,84,this,`noreferrer noopener`)),g(F,87,this),y(this,pd,g(F,88,this)),g(F,91,this),y(this,md,g(F,92,this)),g(F,95,this),y(this,hd,g(F,96,this)),g(F,99,this),y(this,gd,g(F,100,this)),g(F,103,this),y(this,_d,g(F,104,this)),g(F,107,this),y(this,vd,g(F,108,this)),g(F,111,this),y(this,yd,g(F,112,this)),g(F,115,this)}get validity(){return this.isButton()?this.button.validity:bs}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`st-blur`)}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`st-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.isButton()&&this.formControlController.updateValidity()}handleLoadingChange(){this.toggleState(`--loading`,this.loading)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?us`a`:us`button`;return fs`
      <${t}
        part="base"
        class=${Hi({button:!0,"button--default":this.variant==="default","button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--swipe":this.swipe,"button--expand":this.expand,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${A(e?void 0:this.disabled)}
        type=${A(e?void 0:this.type)}
        title=${this.title}
        name=${A(e?void 0:this.name)}
        value=${A(e?void 0:this.value)}
        href=${A(e&&!this.disabled?this.href:void 0)}
        target=${A(e?this.target:void 0)}
        download=${A(e?this.download:void 0)}
        rel=${A(e?this.rel:void 0)}
        role=${A(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        ${this.swipe?fs`<span part="decor" class="button__decor"></span>`:``}
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        ${this.expand?fs`<span class="button__reveal"><slot part="label" class="button__label"></slot></span>`:fs`<slot part="label" class="button__label"></slot>`}
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?fs` <st-icon part="caret" class="button__caret" library="system" name="caret"></st-icon> `:``}
        ${this.loading?fs`<st-spinner part="spinner"></st-spinner>`:``}
      </${t}>
    `}};F=ge(Ku),qu=new WeakMap,Ju=new WeakMap,Yu=new WeakMap,Xu=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,$u=new WeakMap,ed=new WeakMap,td=new WeakMap,nd=new WeakMap,rd=new WeakMap,id=new WeakMap,ad=new WeakMap,od=new WeakMap,sd=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,_(F,4,`button`,Gu,I,qu),_(F,4,`hasFocus`,Wu,I,Ju),_(F,4,`invalid`,Uu,I,Yu),_(F,4,`title`,Hu,I,Xu),_(F,4,`variant`,Vu,I,Zu),_(F,4,`size`,Bu,I,Qu),_(F,4,`caret`,zu,I,$u),_(F,4,`disabled`,Ru,I,ed),_(F,4,`loading`,Lu,I,td),_(F,4,`outline`,Iu,I,nd),_(F,4,`pill`,Fu,I,rd),_(F,4,`circle`,Pu,I,id),_(F,4,`swipe`,Nu,I,ad),_(F,4,`expand`,Mu,I,od),_(F,4,`type`,ju,I,sd),_(F,4,`name`,Au,I,cd),_(F,4,`value`,ku,I,ld),_(F,4,`href`,Ou,I,ud),_(F,4,`target`,Du,I,dd),_(F,4,`rel`,Eu,I,fd),_(F,4,`download`,Tu,I,pd),_(F,4,`form`,wu,I,md),_(F,4,`formAction`,Cu,I,hd),_(F,4,`formEnctype`,Su,I,gd),_(F,4,`formMethod`,xu,I,_d),_(F,4,`formNoValidate`,bu,I,vd),_(F,4,`formTarget`,yu,I,yd),_(F,1,`handleDisabledChange`,vu,I),_(F,1,`handleLoadingChange`,_u,I),be(F,I),v(I,`styles`,[Ir,gu]),v(I,`dependencies`,{"st-icon":Mo,"st-spinner":eo});var bd=new Set(`p.br.div.span.h2.h3.h4.strong.b.em.i.u.s.strike.sub.sup.mark.ul.ol.li.blockquote.hr.a.img.table.thead.tbody.tr.th.td`.split(`.`)),xd={"*":[`class`,`style`],a:[`href`,`title`,`data-nota`],img:[`src`,`alt`],td:[`colspan`,`rowspan`],th:[`colspan`,`rowspan`]},Sd=new Set([`script`,`style`,`iframe`,`object`,`embed`,`template`]),Cd=[{classe:`destaque--azul`,termo:`editorHighlightBlue`},{classe:`destaque--verde`,termo:`editorHighlightGreen`},{classe:`destaque--vermelho`,termo:`editorHighlightRed`},{classe:`destaque--amarelo`,termo:`editorHighlightYellow`},{classe:`destaque--ciano`,termo:`editorHighlightCyan`}],wd=Cd.map(e=>e.classe),Td=new Set([...wd,`papiro-nota-ref`]);function Ed(e){let t=/text-align:\s*(left|center|right|justify)/i.exec(e);return t===null?``:`text-align: ${t[1]?.toLowerCase()??`left`}`}function Dd(e){let t=new DOMParser().parseFromString(e??``,`text/html`);for(let e of[...t.body.querySelectorAll(`*`)]){let t=e.tagName.toLowerCase();if(Sd.has(t)){e.remove();continue}if(!bd.has(t)){e.replaceWith(...e.childNodes);continue}let n=[...xd[`*`]??[],...xd[t]??[]];for(let t of[...e.attributes]){if(!n.includes(t.name)){e.removeAttribute(t.name);continue}if(t.name===`style`){let n=Ed(t.value);n===``?e.removeAttribute(`style`):e.setAttribute(`style`,n)}if(t.name===`class`){let n=t.value.split(/\s+/).filter(e=>Td.has(e));n.length===0?e.removeAttribute(`class`):e.setAttribute(`class`,n.join(` `))}if(t.name===`href`||t.name===`src`){let n=t.value.trim();/^(https?:|mailto:|#|\/|\.)/i.test(n)||t.name===`src`&&n.startsWith(`data:image/`)||e.removeAttribute(t.name)}}}return t.body.innerHTML}function Od(e){return(e??``).replace(/<[^>]+>/g,``).replace(/&nbsp;/g,` `).trim()===``}var kd=[[{icone:`arrow-back-up`,termo:`editorUndo`,comando:`undo`},{icone:`arrow-forward-up`,termo:`editorRedo`,comando:`redo`}],[{icone:`pilcrow`,termo:`editorParagraph`,comando:`formatBlock`,valor:`p`,estado:`bloco`},{icone:`h-2`,termo:`editorHeading`,comando:`formatBlock`,valor:`h2`,estado:`bloco`},{icone:`h-3`,termo:`editorSubheading`,comando:`formatBlock`,valor:`h3`,estado:`bloco`},{icone:`blockquote`,termo:`editorQuote`,comando:`formatBlock`,valor:`blockquote`,estado:`bloco`}],[{icone:`bold`,termo:`editorBold`,comando:`bold`,estado:`comando`},{icone:`italic`,termo:`editorItalic`,comando:`italic`,estado:`comando`},{icone:`underline`,termo:`editorUnderline`,comando:`underline`,estado:`comando`},{icone:`strikethrough`,termo:`editorStrikethrough`,comando:`strikeThrough`,estado:`comando`}],[{icone:`list`,termo:`editorBulletList`,comando:`insertUnorderedList`,estado:`comando`},{icone:`list-numbers`,termo:`editorNumberedList`,comando:`insertOrderedList`,estado:`comando`}],[{icone:`align-left`,termo:`editorAlignLeft`,comando:`justifyLeft`,estado:`comando`},{icone:`align-center`,termo:`editorAlignCenter`,comando:`justifyCenter`,estado:`comando`},{icone:`align-right`,termo:`editorAlignRight`,comando:`justifyRight`,estado:`comando`}],[{icone:`separator-horizontal`,termo:`editorHorizontalRule`,comando:`insertHorizontalRule`},{icone:`clear-formatting`,termo:`editorClearFormat`,comando:`removeFormat`}]];typeof document<`u`&&$o.styleSheet!==void 0&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,$o.styleSheet]);var Ad,jd,Md,Nd,Pd,Fd,Id=class extends (Md=ti,jd=[zr()],Ad=[D({type:Boolean,reflect:!0})],Md){constructor(){super(...arguments),v(this,`localize`,new Vi(this)),v(this,`area`,document.createElement(`div`)),v(this,`conteudo`,``),y(this,Pd,g(Nd,8,this,0)),g(Nd,11,this),y(this,Fd,g(Nd,12,this,!1)),g(Nd,15,this),v(this,`handleInput`,()=>{this.conteudo=this.area.innerHTML,this.emit(`st-input`,{detail:{value:this.conteudo}}),this.selecao+=1}),v(this,`handleSelectionChange`,()=>{this.selecao+=1}),v(this,`handlePaste`,e=>{e.preventDefault();let t=e.clipboardData;if(t===null)return;let n=t.getData(`text/html`),r=t.getData(`text/plain`);n===``?document.execCommand(`insertText`,!1,r):document.execCommand(`insertHTML`,!1,Dd(n)),this.handleInput()})}get value(){return this.conteudo}set value(e){let t=Dd(e??``);t===this.conteudo||t===Dd(this.conteudo)||(this.conteudo=t,this.area.innerHTML=t)}connectedCallback(){super.connectedCallback(),this.area.className=`st-editor__content st-prose`,this.area.contentEditable=this.readonly?`false`:`true`,this.area.spellcheck=!0,this.area.setAttribute(`role`,`textbox`),this.area.setAttribute(`aria-multiline`,`true`),this.area.setAttribute(`aria-label`,this.localize.term(`editorArea`)),this.area.innerHTML=this.conteudo,document.execCommand(`styleWithCSS`,!1,`false`),this.area.addEventListener(`input`,this.handleInput),this.area.addEventListener(`paste`,this.handlePaste),this.area.addEventListener(`keyup`,this.handleSelectionChange),this.area.addEventListener(`mouseup`,this.handleSelectionChange),this.area.addEventListener(`focus`,this.handleSelectionChange)}disconnectedCallback(){super.disconnectedCallback(),this.area.removeEventListener(`input`,this.handleInput),this.area.removeEventListener(`paste`,this.handlePaste),this.area.removeEventListener(`keyup`,this.handleSelectionChange),this.area.removeEventListener(`mouseup`,this.handleSelectionChange),this.area.removeEventListener(`focus`,this.handleSelectionChange)}createRenderRoot(){return this}focus(e){this.area.focus(e)}aplicar(e,t){this.area.focus(),document.execCommand(e,!1,t),this.handleInput()}blocoCorrente(){let e=getSelection()?.anchorNode;if(e==null)return;let t=(e.nodeType===Node.ELEMENT_NODE?e:e.parentElement)?.closest(`p, h2, h3, h4, li, blockquote, div`);return t!=null&&this.area.contains(t)?t:void 0}destacar(e){let t=this.blocoCorrente();if(t===void 0)return;let n=t.classList.contains(e);t.classList.remove(...wd),n||t.classList.add(e),t.className===``&&t.removeAttribute(`class`),this.handleInput()}pedirTexto(e){let t=document.createElement(`st-dialog`);return t.label=e.rotulo,document.body.append(t),new Promise(n=>{let r=null,i=e=>{r=e,t.open=!1},a=()=>{let e=t.querySelector(`st-input`),n=e?.value.trim()??``;if(n===``){e?.focus();return}i(n)};t.addEventListener(`st-after-hide`,e=>{e.target===t&&(t.remove(),n(r))}),sr(T`
          <p>${e.texto}</p>
          <st-input
            autofocus
            placeholder=${e.placeholder??``}
            .value=${e.valor??``}
            @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),a())}}
          ></st-input>
          <st-button slot="footer" @click=${()=>i(null)}>${this.localize.term(`cancel`)}</st-button>
          <st-button slot="footer" variant="primary" @click=${a}>
            ${this.localize.term(`editorInsert`)}
          </st-button>
        `,t),t.updateComplete.then(()=>{t.open=!0})})}async inserirLink(){let e=await this.pedirTexto({rotulo:this.localize.term(`editorLink`),texto:this.localize.term(`editorLinkText`),placeholder:`https://`});e!==null&&this.aplicar(`createLink`,e)}inserirImagem(){let e=document.createElement(`input`);e.type=`file`,e.accept=`image/*`,e.addEventListener(`change`,()=>{let t=e.files?.[0];if(t===void 0)return;let n=new FileReader;n.addEventListener(`load`,()=>{this.aplicar(`insertImage`,String(n.result))}),n.readAsDataURL(t)}),e.click()}async inserirNota(){let e=getSelection()?.anchorNode,t=(e?.nodeType===Node.ELEMENT_NODE?e:e?.parentElement)?.closest(`a.papiro-nota-ref`),n=await this.pedirTexto({rotulo:this.localize.term(`editorFootnote`),texto:this.localize.term(`editorFootnoteText`),placeholder:this.localize.term(`editorFootnotePlaceholder`),valor:t?.getAttribute(`data-nota`)??``});if(n===null)return;if(t!=null){t.setAttribute(`data-nota`,n),this.handleInput();return}let r=n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);this.aplicar(`insertHTML`,`<a class="papiro-nota-ref" data-nota="${r}">*</a>&nbsp;`)}ativo(e){try{if(e.estado===`comando`)return document.queryCommandState(e.comando);if(e.estado===`bloco`)return document.queryCommandValue(`formatBlock`).toLowerCase()===e.valor}catch{}return!1}renderBotao(e){let t=this.localize.term(e.termo);return T`
      <button
        type="button"
        class="st-editor__button"
        title=${t}
        aria-label=${t}
        aria-pressed=${this.ativo(e)}
        ?disabled=${this.readonly}
        @mousedown=${e=>e.preventDefault()}
        @click=${()=>this.aplicar(e.comando,e.valor)}
      >
        <st-icon name=${e.icone}></st-icon>
      </button>
    `}renderBotaoDeAcao(e,t,n){let r=this.localize.term(t);return T`
      <button
        type="button"
        class="st-editor__button"
        title=${r}
        aria-label=${r}
        ?disabled=${this.readonly}
        @mousedown=${e=>e.preventDefault()}
        @click=${n}
      >
        <st-icon name=${e}></st-icon>
      </button>
    `}render(){return this.selecao,T`
      <div class="st-editor__toolbar" role="toolbar" aria-label=${this.localize.term(`editorToolbar`)}>
        ${kd.map(e=>T`<div class="st-editor__group">${e.map(e=>this.renderBotao(e))}</div>`)}

        <div class="st-editor__group">
          <st-dropdown hoist>
            <button
              slot="trigger"
              type="button"
              class="st-editor__button"
              title=${this.localize.term(`editorHighlight`)}
              aria-label=${this.localize.term(`editorHighlight`)}
              ?disabled=${this.readonly}
              @mousedown=${e=>e.preventDefault()}
            >
              <st-icon name="highlight"></st-icon>
            </button>
            <st-menu>
              ${Cd.map(e=>T`
                  <st-menu-item @click=${()=>this.destacar(e.classe)}>
                    <span class="st-editor__sample ${e.classe}">${this.localize.term(e.termo)}</span>
                  </st-menu-item>
                `)}
            </st-menu>
          </st-dropdown>

          ${this.renderBotaoDeAcao(`link`,`editorLink`,()=>{this.inserirLink()})}
          ${this.renderBotaoDeAcao(`photo`,`editorImage`,()=>this.inserirImagem())}
          ${this.renderBotaoDeAcao(`superscript`,`editorFootnote`,()=>{this.inserirNota()})}
        </div>
      </div>

      ${this.area}
    `}};Nd=ge(Md),Pd=new WeakMap,Fd=new WeakMap,_(Nd,4,`selecao`,jd,Id,Pd),_(Nd,4,`readonly`,Ad,Id,Fd),be(Nd,Id),v(Id,`dependencies`,{"st-button":I,"st-dialog":sc,"st-dropdown":qc,"st-icon":Mo,"st-input":P,"st-menu":oi,"st-menu-item":Qo}),Id.define(`st-editor`);var Ld={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rd=e=>(...t)=>({_$litDirective$:e,values:t}),zd=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Bd=class extends zd{constructor(e){if(super(e),this.it=x,e.type!==Ld.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===x||e==null)return this._t=void 0,this.it=e;if(e===gt)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Bd.directiveName=`unsafeHTML`,Bd.resultType=1;var Vd=Rd(Bd),Hd={"&nbsp;":` `,"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&apos;":`'`,"&#39;":`'`,"&ldquo;":`“`,"&rdquo;":`”`,"&lsquo;":`‘`,"&rsquo;":`’`,"&hellip;":`…`,"&mdash;":`—`,"&ndash;":`–`};function Ud(e){return e.replace(/&[a-z]+;|&#\d+;/gi,e=>{let t=Hd[e.toLowerCase()];if(t!==void 0)return t;let n=/^&#(\d+);$/.exec(e);return n?.[1]===void 0?e:String.fromCodePoint(Number(n[1]))}).replace(/&amp;/g,`&`)}function Wd(e){return Ud((e||``).replace(/<br\s*\/?>/gi,` `).replace(/<\/(p|div|h[1-6]|li|blockquote|tr|section|article)>/gi,` `).replace(/<[^>]+>/g,``)).replace(/\s+/g,` `).trim()}function Gd(e,t=180){let n=Wd(e);return n.length>t?`${n.slice(0,t)}…`:n}function Kd(e){return e===void 0||e===0||Number.isNaN(e)?``:new Date(e).toLocaleString(`pt-BR`,{day:`2-digit`,month:`2-digit`,year:`numeric`,hour:`2-digit`,minute:`2-digit`})}function qd(e,t,n,r={}){let i=document.createElement(`st-dialog`);return i.setAttribute(`label`,e),r.semCabecalho===!0&&i.setAttribute(`no-header`,``),r.classe!==void 0&&(i.className=r.classe),document.body.append(i),new Promise(e=>{let r=t,a=e=>{r=e,i.open=!1},o=()=>{Mt(n(a,i,o),i)};i.addEventListener(`st-after-hide`,t=>{t.target===i&&(i.remove(),e(r))}),o(),i.updateComplete.then(()=>{i.open=!0})})}function Jd(e){return qd(e.titulo,!1,t=>b`
      ${e.texto??``}
      <st-button slot="footer" @click=${()=>t(!1)}>${n.acoes.cancelar}</st-button>
      <st-button
        slot="footer"
        variant=${e.variante??`primary`}
        @click=${()=>t(!0)}
      >
        ${e.rotuloConfirmar??n.acoes.confirmar}
      </st-button>
    `)}function Yd(e){return qd(e.titulo,null,(t,r)=>{let i=()=>{let i=r.querySelector(`st-input`),a=i?.value.trim()??``;if(a===``){i!=null&&(i.helpText=e.erroVazio??n.acoes.obrigatorio,i.focus());return}t(a)};return b`
      ${e.texto===void 0?``:b`<p class="dialogo__texto">${e.texto}</p>`}
      <st-input
        autofocus
        placeholder=${e.placeholder??``}
        .value=${e.valor??``}
        @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),i())}}
      ></st-input>
      <st-button slot="footer" @click=${()=>t(null)}>${n.acoes.cancelar}</st-button>
      <st-button slot="footer" variant="primary" @click=${i}>
        ${e.rotuloConfirmar??n.acoes.salvar}
      </st-button>
    `})}var Xd=[.3,.6,1.2];function Zd(e){return Xd[e-1]??Xd[1]}function Qd(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:o}=t();i&&(a||(e.scrollTop+=Zd(o)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function $d(){return typeof speechSynthesis<`u`}function ef(e,t){if(!$d()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=`pt-BR`,n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function tf(){$d()&&speechSynthesis.pause()}function nf(){$d()&&speechSynthesis.resume()}function rf(){$d()&&speechSynthesis.cancel()}function af(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function of(e){e.querySelector(`:scope > .rodape-notas`)?.remove();let t=e.querySelectorAll(`.papiro-nota-ref[data-nota]`);if(t.length===0)return;let r=document.createElement(`div`);r.className=`rodape-notas`;let i=document.createElement(`h3`);i.textContent=n.notas.titulo;let a=document.createElement(`ol`);r.append(i,a);for(let[e,r]of t.entries()){let t=r.getAttribute(`data-nota`)??``;r.textContent=String(e+1),r.href=`#`,r.title=t;let i=document.createElement(`li`);i.textContent=t;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,n.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),af(r)}),i.append(` `,o),a.append(i),r.addEventListener(`click`,e=>{e.preventDefault(),af(i)})}e.append(r)}var sf=class{apresentando=!1;pausada=!1;nivel=2;falando=!1;falaPausada=!1;#e;abrir(){this.apresentando=!0,this.pausada=!1,C();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&(of(e),this.#e=Qd(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,this.#e?.(),this.#e=void 0,this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),C()}alternarPausa(){this.pausada=!this.pausada,C()}calar(){rf(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(nf(),this.falaPausada=!1):(tf(),this.falaPausada=!0):(ef(Wd(e),()=>{this.falando=!1,this.falaPausada=!1,C()}),this.falando=!0,this.falaPausada=!1),C()}botaoFala(e){return $d()?b`
      <st-icon-button
        name=${this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`}
        label=${this.falando?this.falaPausada?n.leitura.retomarLeitura:n.leitura.pausarLeitura:n.leitura.ler}
        @click=${()=>this.alternarFala(e())}
      ></st-icon-button>
    `:x}botaoApresentar(){return b`
      <st-icon-button
        name="presentation"
        label=${n.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></st-icon-button>
    `}overlay(e,t){return this.apresentando?b`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${e}</div>
        ${this.controles(t)}
      </div>
    `:x}controles(e){return b`
      <div class="apresentacao__controles">
        <st-icon-button
          name="minus"
          label=${n.leitura.maisDevagar}
          ?disabled=${this.nivel<=1}
          @click=${()=>this.ajustar(-1)}
        ></st-icon-button>
        <span class="apresentacao__velocidade">${n.leitura.velocidade(this.nivel)}</span>
        <st-icon-button
          name="plus"
          label=${n.leitura.maisRapido}
          ?disabled=${this.nivel>=3}
          @click=${()=>this.ajustar(1)}
        ></st-icon-button>
        <st-icon-button
          name=${this.pausada?`player-play`:`player-pause`}
          label=${this.pausada?n.leitura.continuar:n.leitura.pausar}
          @click=${()=>this.alternarPausa()}
        ></st-icon-button>
        ${this.botaoFala(e)}
        <st-icon-button
          name="x"
          label=${n.acoes.fechar}
          @click=${()=>{this.fechar(),C()}}
        ></st-icon-button>
      </div>
    `}},cf=4e3,lf={success:`circle-check`,danger:`alert-triangle`,warning:`alert-triangle`,neutral:`info-circle`};function L(e,t=`success`){let n=Object.assign(document.createElement(`st-alert`),{variant:t,closable:!0,duration:cf}),r=document.createElement(`st-icon`);r.setAttribute(`slot`,`icon`),r.setAttribute(`name`,lf[t]),n.append(r,document.createTextNode(e)),document.body.append(n),n.toast()}var uf=e({CHAVE_LIVRE:()=>df,FILTROS_INICIAIS:()=>gf,MODELOS_FALLBACK:()=>ff,criarPasta:()=>Tf,excluirAnotacao:()=>wf,excluirPasta:()=>Df,filtrar:()=>_f,listarAnotacoes:()=>yf,listarModelos:()=>Sf,listarPastas:()=>xf,obterAnotacao:()=>bf,ordenar:()=>vf,renomearPasta:()=>Ef,salvarAnotacao:()=>Cf}),df=`LIVRE`,ff=[{chave:df,rotulo:`Livre`,conteudo:``},{chave:`VIDA_E_MINISTERIO`,rotulo:`Vida e Ministério`,conteudo:`<h2>Tesouros da Palavra</h2><p></p><h2>Faça Seu Melhor</h2><p></p><h2>Vida Cristã</h2><p></p>`},{chave:`DISCURSO`,rotulo:`Discurso`,conteudo:`<h2>Tema Principal</h2><p><strong>Objetivo:</strong> </p><h3>Introdução</h3><p></p><h3>Corpo</h3><p></p><h3>Conclusão</h3><p></p>`},{chave:`DESIGNACAO_DISCURSO`,rotulo:`Designação de Discurso`,conteudo:`<h2>Tema Principal</h2><p><strong>Objetivo:</strong> </p><h3>Introdução</h3><p></p><h3>Corpo</h3><p></p><h3>Conclusão</h3><p></p>`},{chave:`VISITA_PASTOREIO`,rotulo:`Visita de Pastoreio`,conteudo:`<h2>Ponto Forte</h2><p></p><h2>Desafio</h2><p></p><h2>Ajuda Prática</h2><p></p>`},{chave:`ASSEMBLEIA`,rotulo:`Assembleia`,conteudo:`<h2>Programa</h2><p></p><h2>Lições para a Vida</h2><p></p>`},{chave:`VISITA_CIRCUITO`,rotulo:`Visita do Circuito`,conteudo:`<h2>Pontos da Visita</h2><p></p><h2>Encorajamento</h2><p></p>`}],pf=()=>i(`anotacao`),mf=()=>i(`pasta`),hf=()=>i(`anotacao_modelos`),gf={arquivadas:!1,pastaId:null,modeloChave:``,busca:``};function _f(e,t){let n=t.busca.trim().toLowerCase();return e.filter(e=>e.esta_arquivada===1!==t.arquivadas||t.pastaId!==null&&e.pasta_id!==t.pastaId||t.modeloChave!==``&&e.tipo_modelo!==t.modeloChave?!1:n===``||e.titulo.toLowerCase().includes(n)||e.conteudo.toLowerCase().includes(n))}function vf(e){return[...e].sort((e,t)=>e.esta_fixada===t.esta_fixada?t.data_modificacao-e.data_modificacao:t.esta_fixada-e.esta_fixada)}async function yf(e){return vf(_f(await pf().todos(),e))}function bf(e){return pf().obter(e)}function xf(){return mf().todos()}async function Sf(){let e=await hf().todos().catch(()=>[]);return[...e.length===0?ff:e].sort((e,t)=>(e.ordem??0)-(t.ordem??0))}function Cf(e){return pf().salvar(e)}function wf(e){return pf().excluir(e)}async function Tf(e){await mf().salvar({nome:e,data_criacao:Date.now()})}async function Ef(e,t){await mf().salvar({...e,nome:t})}async function Df(e){let t=(await pf().todos()).filter(t=>t.pasta_id===e);for(let e of t)await pf().salvar({...e,pasta_id:null});await mf().excluir(e)}var Of=400,kf=1200,Af=[],jf=[],Mf=[],Nf=gf,R=null,Pf,Ff=!1,If,Lf,Rf=!1,zf=new sf;function Bf(){return document.querySelector(`st-editor`)}function Vf(e){let t=Bf();t!==null&&(t.value=e)}function Hf(e){return Af.find(t=>t.chave===e)?.rotulo??e}function Uf(e){return Af.find(t=>t.chave===e)?.conteudo}async function Wf(){Mf=await yf(Nf),C()}async function Gf(e,t){if(zf.fechar(),e===null){let e=Uf(t);R={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?df:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await bf(e);if(t===void 0){S(`anotacoes`);return}R={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}C(),Vf(R.conteudo)}function Kf(e){let t=e.args.join(`/`);Pf===t||Ff||(Pf=t,Ff=!0,(async()=>{try{[Af,jf]=await Promise.all([Sf(),xf()]);let t=e.args[0];t===void 0?(R=null,await Wf()):t===`nova`?await Gf(null,e.args[1]??`LIVRE`):await Gf(Number.parseInt(t,10),df)}finally{Ff=!1,C()}})())}function qf(e){Nf={...Nf,busca:e},clearTimeout(If),If=setTimeout(()=>void Wf(),Of)}function Jf(e){Nf={...Nf,...e},Wf()}async function Yf(){let e=await Yd({titulo:n.pasta.nova,texto:n.pasta.novaTexto,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.criar,erroVazio:n.pasta.erroVazio});e!==null&&(await Tf(e),jf=await xf(),C())}async function Xf(e){let t=await Yd({titulo:n.pasta.renomear,valor:e.nome,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.renomear,erroVazio:n.pasta.erroVazio});t!==null&&t!==e.nome&&(await Ef(e,t),jf=await xf(),await Wf())}async function Zf(e){await Jd({titulo:n.pasta.excluir,texto:n.pasta.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await Df(e),jf=await xf(),Nf.pastaId===e&&(Nf={...Nf,pastaId:null}),R?.pastaId===e&&(R={...R,pastaId:null}),await Wf())}function Qf(e){let t=Gd(e.conteudo,150);return b`
    <button
      class="cartao"
      ?data-fixada=${e.esta_fixada===1}
      @click=${()=>S(`anotacoes/${e.id??``}`)}
    >
      <span class="cartao__topo">
        ${e.esta_fixada===1?b`<st-icon class="cartao__pino" name="pin" variant="filled"></st-icon>`:x}
        <span class="cartao__titulo">${e.titulo||n.anotacoes.semTitulo}</span>
      </span>

      ${t===``?x:b`<span class="cartao__previa">${t}</span>`}

      <span class="cartao__rodape">
        ${e.tipo_modelo===`LIVRE`?x:b`<st-badge variant="neutral" pill>${Hf(e.tipo_modelo)}</st-badge>`}
        <span class="cartao__data">${Kd(e.data_modificacao)}</span>
      </span>
    </button>
  `}function $f(){let e=jf.find(e=>e.id===Nf.pastaId);return b`
    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.anotacoes.buscar}
        .value=${Nf.busca}
        @st-input=${e=>qf(e.target.value)}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>

      <st-select
        .value=${Nf.modeloChave}
        placeholder=${n.anotacoes.todosModelos}
        @st-change=${e=>Jf({modeloChave:e.target.value})}
      >
        <st-option value="">${n.anotacoes.todosModelos}</st-option>
        ${Af.map(e=>b`<st-option value=${e.chave}>${e.rotulo}</st-option>`)}
      </st-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${Nf.pastaId===null&&!Nf.arquivadas}
        @click=${()=>Jf({pastaId:null,arquivadas:!1})}
      >
        ${n.anotacoes.todas}
      </button>

      ${jf.map(e=>b`
          <button
            class="chip"
            ?data-ativo=${Nf.pastaId===e.id}
            @click=${()=>Jf({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${Nf.arquivadas}
        @click=${()=>Jf({arquivadas:!0,pastaId:null})}
      >
        <st-icon name="archive"></st-icon>${n.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${n.pasta.nova} @click=${()=>void Yf()}>
        <st-icon name="folder-plus"></st-icon>
      </button>
    </div>

    ${e===void 0?x:b`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <st-icon name="folder"></st-icon>${e.nome}
            </span>
            <st-button size="small" @click=${()=>void Xf(e)}>
              <st-icon slot="prefix" name="pencil"></st-icon>${n.acoes.renomear}
            </st-button>
            <st-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void Zf(e.id??0)}
            >
              <st-icon slot="prefix" name="trash"></st-icon>${n.acoes.excluir}
            </st-button>
          </div>
        `}

    ${Mf.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="notes"></st-icon>
            <p>${Nf.arquivadas?n.anotacoes.semArquivadas:n.anotacoes.semAnotacoes}</p>
          </div>
        `:b`<div class="cartoes">${Mf.map(e=>Qf(e))}</div>`}

    <st-dialog
      label=${n.anotacoes.escolhaModelo}
      ?open=${Rf}
      @st-after-hide=${e=>{e.target===e.currentTarget&&(Rf=!1)}}
    >
      <div class="modelos">
        ${Af.map(e=>b`
            <button
              class="modelo"
              @click=${()=>{Rf=!1,S(`anotacoes/nova/${e.chave}`)}}
            >
              <st-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></st-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </st-dialog>
  `}function ep(){R!==null&&(R={...R,status:n.anotacoes.salvando},C(),clearTimeout(Lf),Lf=setTimeout(()=>void tp(),kf))}async function tp(){if(R===null)return;if(R.titulo.trim()===``){R={...R,status:n.anotacoes.informeTitulo},C();return}let e=Date.now(),t=await Cf({titulo:R.titulo,conteudo:R.conteudo,tipo_modelo:R.tipoModelo,pasta_id:R.pastaId,esta_fixada:+!!R.fixada,esta_arquivada:+!!R.arquivada,data_modificacao:e,...R.id===null?{data_criacao:e}:{id:R.id}});R.id===null&&(R={...R,id:t},history.replaceState(null,``,`#/anotacoes/${t}`)),R={...R,status:n.anotacoes.salvoAs(Kd(e))},C()}async function np(e){if(R===null)return;let t=R.tipoModelo,r=Uf(e);if(R={...R,tipoModelo:e},r===void 0||r===``){ep();return}if(!Od(R.conteudo)&&!await Jd({titulo:n.anotacoes.aplicarModelo,texto:n.anotacoes.aplicarModeloTexto,rotuloConfirmar:n.acoes.substituir,variante:`warning`})){R={...R,tipoModelo:t},C();return}R={...R,conteudo:r},C(),Vf(r),ep()}function rp(){let e=new Date().getDay();np(e===5?`VIDA_E_MINISTERIO`:e===0?`DISCURSO`:df)}async function ip(e){R!==null&&(R=e===`fixada`?{...R,fixada:!R.fixada}:{...R,arquivada:!R.arquivada},C(),R.id!==null&&await tp())}async function ap(){let e=R?.id;e!=null&&await Jd({titulo:n.anotacoes.excluir,texto:n.anotacoes.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await wf(e),L(n.anotacoes.excluida),S(`anotacoes`))}function op(e){return b`
    <div class="editor">
      <st-input
        class="editor__titulo"
        placeholder=${n.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @st-input=${t=>{R={...e,titulo:t.target.value},ep()}}
      ></st-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{R={...e,pastaId:null},ep()}}
        >
          ${n.anotacoes.semPasta}
        </button>

        ${jf.map(t=>b`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{R={...e,pastaId:t.id??null},ep()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${n.pasta.nova} @click=${()=>void Yf()}>
          <st-icon name="folder-plus"></st-icon>
        </button>
      </div>

      <div class="editor__linha">
        <st-select
          class="editor__modelo"
          .value=${e.tipoModelo}
          label=${n.anotacoes.modelo}
          @st-change=${e=>void np(e.target.value)}
        >
          ${Af.map(e=>b`<st-option value=${e.chave}>${e.rotulo}</st-option>`)}
        </st-select>
        <span class="editor__status">${e.status}</span>
      </div>

      <st-editor
        @st-input=${t=>{R={...e,conteudo:t.detail.value},ep()}}
      ></st-editor>
    </div>

    ${cp(e)}
  `}function sp(e){return`${e.titulo}. ${e.conteudo}`}function cp(e){return zf.overlay(b`
      <h1>${e.titulo||n.anotacoes.semTitulo}</h1>
      <div class="prosa">${Vd(Dd(e.conteudo))}</div>
    `,()=>sp(e))}function lp(){return b`
    <st-icon-button
      name="plus"
      label=${n.anotacoes.nova}
      @click=${async()=>{Af=await Sf(),Rf=!0,C()}}
    ></st-icon-button>
  `}function up(e){return b`
    ${e.id===null?b`
          <st-icon-button
            name="calendar-check"
            label=${n.anotacoes.reuniao}
            @click=${rp}
          ></st-icon-button>
        `:b`
          <st-icon-button
            name="pin"
            variant=${e.fixada?`filled`:`outline`}
            label=${e.fixada?n.anotacoes.desafixar:n.anotacoes.fixar}
            @click=${()=>void ip(`fixada`)}
          ></st-icon-button>
          <st-icon-button
            name="archive"
            variant=${e.arquivada?`filled`:`outline`}
            label=${e.arquivada?n.anotacoes.restaurar:n.anotacoes.arquivar}
            @click=${()=>void ip(`arquivada`)}
          ></st-icon-button>
          ${zf.botaoApresentar()}
          <st-icon-button
            name="trash"
            label=${n.anotacoes.excluir}
            @click=${()=>void ap()}
          ></st-icon-button>
        `}
  `}var dp={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=R?.titulo.trim()??``;return t===``?n.anotacoes.nova:t},acoes(e){return e.args.length===0?lp():R===null?void 0:up(R)},conteudo(e){return Kf(e),e.args.length===0?$f():R===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:op(R)}},fp={criacao:{rotulo:`Teve um Projeto?`,icone:`compass`,cor:`#6610f2`},estudo:{rotulo:`Modo Estudo`,icone:`hourglass`,cor:`#6f42c1`},jogo:{rotulo:`Língua Pura`,icone:`device-gamepad-2`,cor:`#198754`},avulso:{rotulo:`Avulso`,icone:`notes`,cor:`#0d6efd`}};function pp(e){return fp[e]??fp.avulso}var mp=()=>i(`pap_caderno_estudo`);function hp(){return mp().todos()}var gp={origem:`todas`,busca:``};function _p(e,t){let n=t.busca.trim().toLowerCase();return e.filter(e=>t.origem===`todas`||e.origem===t.origem).filter(e=>n===``||e.titulo.toLowerCase().includes(n)||e.conteudo.toLowerCase().includes(n)||e.referencia.toLowerCase().includes(n)).sort((e,t)=>(t.atualizado||0)-(e.atualizado||0))}function vp(e){return mp().salvar(e)}function yp(e){return mp().excluir(e)}var bp=`papiro_caderno_rascunho`;function xp(e){return sessionStorage.setItem(bp,JSON.stringify(e)),`caderno/novo`}function Sp(){try{let e=sessionStorage.getItem(bp);return sessionStorage.removeItem(bp),e===null?{}:JSON.parse(e)}catch{return{}}}async function Cp(e){let t=Date.now(),n=e.ref_chave??null;return vp({...(n===null?void 0:(await hp()).find(e=>e.ref_chave===n))??{criado:t,ref_chave:n},titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,atualizado:t})}async function wp(e){if(e===null||e===``)return;let t=(await hp()).find(t=>t.ref_chave===e);t?.id!==void 0&&await yp(t.id)}var Tp=[],Ep=gp,Dp=null,Op,kp=!1;async function Ap(){Tp=await hp(),C()}function jp(){let e=Sp();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function Mp(e){let t=e.args.join(`/`);Op===t||kp||(Op=t,kp=!0,(async()=>{try{await Ap();let[t]=e.args;if(t===void 0)Dp=null;else if(t===`novo`)Dp=jp();else{let e=Number.parseInt(t,10),n=Tp.find(t=>t.id===e);if(n===void 0){S(`caderno`);return}Dp={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}finally{kp=!1,C()}})())}function Np(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function Pp(e){let t=pp(e.origem);return b`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <st-icon name=${t.icone}></st-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${Np(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?x:b`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <st-button size="small" @click=${()=>S(`caderno/${e.id??``}`)}>
          <st-icon slot="prefix" name="pencil"></st-icon>${n.acoes.editar}
        </st-button>
        <st-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void Fp(e)}
        >
          <st-icon slot="prefix" name="trash"></st-icon>
        </st-button>
      </span>
    </div>
  `}async function Fp(e){!await Jd({titulo:n.caderno.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await yp(e.id),L(n.caderno.excluida),await Ap())}function Ip(){let e=_p(Tp,Ep);return b`
    <p class="intro">${n.caderno.intro}</p>

    <div class="filtros">
      <st-select
        .value=${Ep.origem}
        @st-change=${e=>{Ep={...Ep,origem:e.target.value},C()}}
      >
        <st-option value="todas">${n.caderno.todasOrigens}</st-option>
        ${Object.entries(fp).map(([e,t])=>b`<st-option value=${e}>${t.rotulo}</st-option>`)}
      </st-select>

      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.caderno.buscar}
        .value=${Ep.busca}
        @st-input=${e=>{Ep={...Ep,busca:e.target.value},C()}}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    ${e.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="book-2"></st-icon>
            <p>${Tp.length===0?n.caderno.vazio:n.caderno.semFiltro}</p>
          </div>
        `:b`<div class="cartoes cartoes--duas">${e.map(e=>Pp(e))}</div>`}
  `}async function Lp(){if(Dp===null)return;if(Dp.conteudo.trim()===``){Dp={...Dp,aviso:n.caderno.semConteudo},C();return}let e=Date.now();await vp({...Dp.id===null?{}:{id:Dp.id},titulo:Dp.titulo.trim()||pp(Dp.origem).rotulo,conteudo:Dp.conteudo.trim(),origem:Dp.origem,referencia:Dp.referencia,ref_chave:Dp.refChave,criado:Dp.criado??e,atualizado:e}),L(n.caderno.salva),S(`caderno`)}function Rp(e){return b`
    <div class="editor">
      <st-select
        label=${n.caderno.origem}
        .value=${e.origem}
        @st-change=${t=>{Dp={...e,origem:t.target.value},C()}}
      >
        ${Object.entries(fp).map(([e,t])=>b`<st-option value=${e}>${t.rotulo}</st-option>`)}
      </st-select>

      <st-input
        label=${n.caderno.titulo}
        placeholder=${n.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @st-input=${t=>{Dp={...e,titulo:t.target.value}}}
      ></st-input>

      <st-input
        label=${n.caderno.referencia}
        placeholder=${n.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @st-input=${t=>{Dp={...e,referencia:t.target.value}}}
      ></st-input>

      <st-textarea
        label=${n.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${n.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @st-input=${t=>{Dp={...e,conteudo:t.target.value}}}
      ></st-textarea>

      ${e.aviso===``?x:b`
            <st-alert open variant="warning">
              <st-icon slot="icon" name="alert-triangle"></st-icon>${e.aviso}
            </st-alert>
          `}

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void Lp()}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button @click=${()=>S(`caderno`)}>${n.acoes.cancelar}</st-button>
      </div>
    </div>
  `}var zp={voltarPara(e){return e.args.length===0?`hub/estudo`:`caderno`},titulo(e){if(e.args.length!==0)return Dp?.id===null?n.caderno.nova:n.caderno.editar},acoes(e){if(!(e.args.length>0))return b`
      <st-icon-button
        name="plus"
        label=${n.caderno.nova}
        @click=${()=>S(`caderno/novo`)}
      ></st-icon-button>
    `},conteudo(e){return Mp(e),e.args.length===0?Ip():Dp===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:Rp(Dp)}},Bp=e({CORES:()=>Vp,ICONES:()=>Hp,calcularKpis:()=>sm,carregar:()=>Jp,comoHora:()=>Kp,contarConflitos:()=>am,corDoTipo:()=>Zp,deHora:()=>qp,diaFinal:()=>em,diaInicial:()=>$p,duracaoHoras:()=>rm,eventosDoDia:()=>tm,eventosNaFaixa:()=>nm,excluirEvento:()=>lm,excluirTipo:()=>dm,iconeDoTipo:()=>Qp,inicioDaSemana:()=>om,proximaOrdem:()=>fm,salvarEvento:()=>cm,salvarTipo:()=>um,tipoEmUso:()=>pm,tipoPorId:()=>Xp}),Vp={primary:`#0d6efd`,secondary:`#6c757d`,tertiary:`#6f42c1`,positive:`#198754`,aviso:`#ffc107`,perigo:`#dc3545`},Hp={grupo:`users`,evento:`calendar-event`,relogio:`clock`,estrela:`star`,pessoa:`user`,notificacao:`bell`},Up=[{nome:`Reunião`,cor_chave:`primary`,icone:`grupo`,ordem:0,marca_especial:0},{nome:`Compromisso`,cor_chave:`secondary`,icone:`evento`,ordem:1,marca_especial:0},{nome:`Bloco de tempo`,cor_chave:`tertiary`,icone:`relogio`,ordem:2,marca_especial:0},{nome:`Especial`,cor_chave:`positive`,icone:`estrela`,ordem:3,marca_especial:1},{nome:`Pessoal`,cor_chave:`aviso`,icone:`pessoa`,ordem:4,marca_especial:0},{nome:`Lembrete`,cor_chave:`perigo`,icone:`notificacao`,ordem:5,marca_especial:0}],Wp=()=>i(`calendario_tipos`),Gp=()=>i(`calendario_eventos`);function Kp(e){let t=Math.max(0,e);return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}function qp(e){let[t=0,n=0]=e.split(`:`).map(Number);return Math.min(23,Math.max(0,t))*60+Math.min(59,Math.max(0,n))}async function Jp(){await pn();let e=await Wp().todos();if(e.length===0){for(let e of Up)await Wp().salvar({...e});e=await Wp().todos()}let t=await Gp().todos();return{tipos:[...await Yp(e,t)].sort((e,t)=>e.ordem-t.ordem||(e.id??0)-(t.id??0)),eventos:t}}async function Yp(e,t){let n=new Set(t.map(e=>e.tipo_id)),r=new Set,i=!1;for(let t of[...e].sort((e,t)=>(e.id??0)-(t.id??0))){if(!r.has(t.nome)){r.add(t.nome);continue}t.id!==void 0&&!n.has(t.id)&&(await Wp().excluir(t.id),i=!0)}return i?await Wp().todos():[...e]}function Xp(e,t){return e.find(e=>e.id===t)}function Zp(e,t){return Vp[Xp(e,t)?.cor_chave??``]??Vp.secondary??`#6c757d`}function Qp(e,t){return Hp[Xp(e,t)?.icone??``]??`calendar-event`}function $p(e){return c(e.data_inicio_epoch)}function em(e){return c(e.data_fim_epoch)}function tm(e,t){return e.filter(e=>$p(e)<=t&&em(e)>=t).sort((e,t)=>t.dia_inteiro-e.dia_inteiro||e.hora_inicio_min-t.hora_inicio_min||e.hora_fim_min-t.hora_fim_min)}function nm(e,t,n){return e.filter(e=>$p(e)<=n&&em(e)>=t)}function rm(e){if(e.dia_inteiro===1)return 24;let t=e.hora_inicio_min,n=e.hora_fim_min;return(n>t?n-t:1440-t+n)/60}function im(e,t){let n=$p(e),r=em(e),i=$p(t),a=em(t);return r<i||a<n?!1:n===r&&i===a&&n===i?e.hora_inicio_min<t.hora_fim_min&&t.hora_inicio_min<e.hora_fim_min:!0}function am(e){let t=e.filter(e=>e.dia_inteiro===0),n=0;for(let e=0;e<t.length;e++)for(let r=e+1;r<t.length;r++){let i=t[e],a=t[r];i!==void 0&&a!==void 0&&im(i,a)&&(n+=1)}return n}function om(e){let t=new Date(e);return t.setDate(t.getDate()-(t.getDay()+6)%7),t.setHours(0,0,0,0),t}function sm(e,t){let n=new Date;n.setHours(0,0,0,0);let r=om(n),i=new Date(r);i.setDate(i.getDate()+6);let a=nm(e,c(r),c(i)),o=Math.round(a.reduce((e,t)=>e+rm(t),0)*10)/10,s=new Set(t.filter(e=>e.marca_especial===1).map(e=>e.id)),l=c(n),d=null;for(let t of e){if(!s.has(t.tipo_id))continue;let e=$p(t);if(e<l)continue;let r=Math.round((u(e)-n.getTime())/864e5);(d===null||r<d)&&(d=r)}return{horas:o,conflitos:am(a),diasParaEspecial:d}}function cm(e){return Gp().salvar(e)}function lm(e){return Gp().excluir(e)}function um(e){return Wp().salvar(e)}function dm(e){return Wp().excluir(e)}function fm(e){return e.reduce((e,t)=>Math.max(e,t.ordem),-1)+1}function pm(e,t){return e.some(e=>e.tipo_id===t)}var mm=[`dia`,`semana`,`mes`,`ano`,`agenda`],hm=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function gm(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function _m(e,t){let n=gm(e);return n.setDate(n.getDate()+t),n}function vm(e){return _m(e,-((e.getDay()+6)%7))}function ym(e,t){if(e===`dia`){let e=c(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=vm(t);return{de:c(e),ate:c(_m(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:c(e),ate:c(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:c(n),ate:c(r)}}function bm(e,t,n){let r=gm(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function xm(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=vm(t),n=_m(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function Sm(e,t){let n=vm(new Date(e,t,1)),r=_m(vm(new Date(e,t+1,0)),6),i=[];for(let e=n;e<=r;e=_m(e,1))i.push({dia:c(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function Cm(e){let t=vm(e);return Array.from({length:7},(e,n)=>{let r=_m(t,n);return{dia:c(r),rotulo:hm[n]??``,numero:r.getDate()}})}function wm(){return Array.from({length:17},(e,t)=>6+t)}function Tm(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:Sm(e,n)}))}function Em(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let a=new Date(n,r-1,i);;a=_m(a,1)){let n=c(a);if(n>e.ate)break;t.push(n)}return t}function Dm(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}function Om(e,t){let n=1380,r=1020,i=Math.min(Math.max(e,360),n),a=Math.min(Math.max(t>e?t:n,i+15),n);return{topo:(i-360)/r,altura:(a-i)/r}}var km=[],Am=[],jm={horas:0,conflitos:0,diasParaEspecial:null},Mm=`semana`,Nm=new Date,Pm=null,Fm=!1,Im=null,Lm=!1,Rm=!1;async function zm(){let e=await Jp();km=e.tipos,Am=e.eventos,jm=sm(Am,km),C()}function Bm(){Lm||Rm||(Rm=!0,(async()=>{try{await zm(),Lm=!0}finally{Rm=!1,C()}})())}function Vm(){return jm.diasParaEspecial===null?n.calendario.kpiNenhum:jm.diasParaEspecial===0?n.calendario.kpiHoje:n.calendario.kpiDias(jm.diasParaEspecial)}function Hm(){return b`
    <div class="placares">
      <div class="placar">
        <span class="placar__valor" data-tom="primaria">${jm.horas}h</span>
        <span class="placar__rotulo">${n.calendario.kpiHoras}</span>
      </div>
      <div class="placar">
        <span class="placar__valor" data-tom=${jm.conflitos>0?`perigo`:`neutro`}>
          ${jm.conflitos}
        </span>
        <span class="placar__rotulo">${n.calendario.kpiConflitos}</span>
      </div>
      <div class="placar">
        <span class="placar__valor" data-tom="sucesso">${Vm()}</span>
        <span class="placar__rotulo">${n.calendario.kpiEspecial}</span>
      </div>
    </div>
  `}function Um(){let e=Nm.getFullYear();return Array.from({length:11},(t,n)=>e-5+n)}function Wm(e,t){Nm=new Date(e,t,1),C()}function Gm(){return b`
    <div class="chips" role="group" aria-label=${n.calendario.vista}>
      ${mm.map(e=>b`
          <button
            class="chip"
            ?data-ativo=${Mm===e}
            @click=${()=>{Mm=e,C()}}
          >
            ${n.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <st-select
        label=${n.calendario.mes}
        size="small"
        .value=${String(Nm.getMonth())}
        @st-change=${e=>Wm(Nm.getFullYear(),Number(e.target.value))}
      >
        ${n.calendario.meses.map((e,t)=>b`<st-option value=${t}>${e}</st-option>`)}
      </st-select>

      <st-select
        label=${n.calendario.ano}
        size="small"
        .value=${String(Nm.getFullYear())}
        @st-change=${e=>Wm(Number(e.target.value),Nm.getMonth())}
      >
        ${Um().map(e=>b`<st-option value=${e}>${e}</st-option>`)}
      </st-select>
    </div>

    <div class="calendario__nav">
      <st-icon-button
        name="chevron-left"
        label=${n.calendario.anterior}
        @click=${()=>{Nm=bm(Mm,Nm,-1),C()}}
      ></st-icon-button>
      <st-button
        size="small"
        outline
        @click=${()=>{Nm=new Date,C()}}
      >
        ${n.calendario.hoje}
      </st-button>
      <st-icon-button
        name="chevron-right"
        label=${n.calendario.proximo}
        @click=${()=>{Nm=bm(Mm,Nm,1),C()}}
      ></st-icon-button>
      <span class="calendario__periodo">${xm(Mm,Nm)}</span>
    </div>
  `}function Km(e){Pm={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:$p(e),horaInicio:Kp(e.hora_inicio_min),dataFim:em(e),horaFim:Kp(e.hora_fim_min),descricao:e.descricao},C()}function qm(e){return b`
    <button
      class="pastilha"
      style=${`--cor-evento:${Zp(km,e.tipo_id)}`}
      title=${e.titulo}
      @click=${()=>Km(e)}
    >
      ${e.dia_inteiro===1?x:b`<span class="pastilha__hora">${Kp(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function Jm(e){let t=Zp(km,e.tipo_id),r=Xp(km,e.tipo_id);return b`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>Km(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?n.calendario.diaInteiro:`${Kp(e.hora_inicio_min)} – ${Kp(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <st-icon name=${Qp(km,e.tipo_id)}></st-icon>${e.titulo}
      </span>
      ${r===void 0?x:b`<span class="evento__tipo">${r.nome}</span>`}
      ${e.descricao===``?x:b`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function Ym(e,t){Pm={id:0,titulo:``,tipoId:km[0]?.id??0,diaInteiro:t===void 0,dataInicio:e,horaInicio:Kp(t??480),dataFim:e,horaFim:Kp((t??480)+60),descricao:``},C()}function Xm(e,t){let r=tm(Am,e.dia);return b`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${n.calendario.novoEm(e.dia)}
        @click=${()=>Ym(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${r.map(e=>qm(e))}</div>
    </div>
  `}function Zm(){let e=c();return b`
    <div class="mes">
      ${Cm(Nm).map(e=>b`<span class="mes__cabecalho">${e.rotulo}</span>`)}
      ${Sm(Nm.getFullYear(),Nm.getMonth()).map(t=>Xm(t,e))}
    </div>
  `}function Qm(e){let t=wm(),r=c();return b`
    <div class="grade" style=${`--colunas:${e.length}`}>
      <span class="grade__canto"></span>
      ${e.map(e=>b`
          <span class="grade__dia" ?data-hoje=${e.dia===r}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${t.map(e=>b`<span class="grade__hora">${Kp(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let r=tm(Am,e.dia),i=r.filter(e=>e.dia_inteiro===1),a=r.filter(e=>e.dia_inteiro===0);return b`
          <div class="grade__coluna">
            ${t.map(t=>b`
                <button
                  class="grade__vaga"
                  aria-label=${n.calendario.novoAs(e.rotulo,Kp(t*60))}
                  @click=${()=>Ym(e.dia,t*60)}
                ></button>
              `)}

            ${i.map(e=>b`
                <span class="grade__inteiro" style=${`--cor-evento:${Zp(km,e.tipo_id)}`}>
                  ${qm(e)}
                </span>
              `)}

            ${a.map(e=>{let t=Om(e.hora_inicio_min,e.hora_fim_min);return b`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${Zp(km,e.tipo_id)};top:${t.topo*100}%;height:${t.altura*100}%`}
                  @click=${()=>Km(e)}
                >
                  <span class="grade__evento-hora">${Kp(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function $m(){return Qm([{dia:c(Nm),rotulo:Nm.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:Nm.getDate()}])}function eh(){return Qm(Cm(Nm))}function th(){let e=c();return b`
    <div class="ano">
      ${Tm(Nm.getFullYear()).map(t=>b`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{Nm=new Date(Nm.getFullYear(),t.mes,1),Mm=`mes`,C()}}
            >
              ${t.rotulo}
            </button>

            <div class="ano__grade">
              ${Cm(Nm).map(e=>b`<span class="ano__cabecalho">${e.rotulo.slice(0,1)}</span>`)}
              ${t.celulas.map(t=>{let r=tm(Am,t.dia).length;return b`
                  <button
                    class="ano__dia"
                    ?data-fora=${!t.doMes}
                    ?data-hoje=${t.dia===e}
                    ?data-com-evento=${r>0}
                    title=${r===0?``:n.calendario.eventos(r)}
                    @click=${()=>{Nm=new Date(u(t.dia)),Mm=`dia`,C()}}
                  >
                    ${t.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function nh(){let e=Em(ym(`agenda`,Nm)).filter(e=>tm(Am,e).length>0);return e.length===0?b`
      <div class="vazio">
        <st-icon class="vazio__icone" name="calendar"></st-icon>
        <p>${n.calendario.semEventos}</p>
      </div>
    `:b`
    <div class="agenda">
      ${e.map(e=>b`
          <div class="agenda__dia">
            <span class="agenda__data">${Dm(e)}</span>
            ${tm(Am,e).map(e=>Jm(e))}
          </div>
        `)}
    </div>
  `}function rh(){return Mm===`dia`?$m():Mm===`semana`?eh():Mm===`mes`?Zm():Mm===`ano`?th():nh()}async function ih(e){let t=e.dataFim===``||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro;await cm({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?n.acervo.semTitulo:e.titulo.trim(),tipo_id:Number(e.tipoId)||(km[0]?.id??0),data_inicio_epoch:u(e.dataInicio),hora_inicio_min:r===1?0:qp(e.horaInicio),data_fim_epoch:u(t),hora_fim_min:r===1?1439:qp(e.horaFim),dia_inteiro:r,descricao:e.descricao.trim()}),Pm=null,L(n.calendario.eventoSalvo),await zm()}async function ah(e){await Jd({titulo:n.calendario.excluirEvento,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await lm(e.id),Pm=null,L(n.calendario.eventoExcluido),await zm())}function oh(e){return b`
    <st-dialog
      open
      label=${e.id>0?n.calendario.editarEvento:n.calendario.novoEvento}
      @st-after-hide=${()=>{Pm=null,C()}}
    >
      <div class="formulario">
        <st-input
          label=${n.calendario.titulo}
          placeholder=${n.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @st-input=${t=>{Pm={...e,titulo:t.target.value}}}
        ></st-input>

        <div>
          <span class="formulario__rotulo">${n.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${km.map(t=>b`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===t.id}
                  @click=${()=>{Pm={...e,tipoId:t.id??0},C()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${Vp[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <st-switch
          ?checked=${e.diaInteiro}
          @st-change=${t=>{Pm={...e,diaInteiro:t.target.checked},C()}}
        >
          ${n.calendario.diaInteiro}
        </st-switch>

        <div class="formulario__par">
          <st-input
            type="date"
            label=${n.calendario.dataInicio}
            .value=${e.dataInicio}
            @st-change=${t=>{let n=t.target.value;Pm={...e,dataInicio:n,dataFim:e.dataFim<n?n:e.dataFim},C()}}
          ></st-input>
          ${e.diaInteiro?x:b`
                <st-input
                  type="time"
                  label=${n.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @st-change=${t=>{Pm={...e,horaInicio:t.target.value}}}
                ></st-input>
              `}
        </div>

        <div class="formulario__par">
          <st-input
            type="date"
            label=${n.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @st-change=${t=>{Pm={...e,dataFim:t.target.value}}}
          ></st-input>
          ${e.diaInteiro?x:b`
                <st-input
                  type="time"
                  label=${n.calendario.horaFim}
                  .value=${e.horaFim}
                  @st-change=${t=>{Pm={...e,horaFim:t.target.value}}}
                ></st-input>
              `}
        </div>

        <st-textarea
          rows="2"
          label=${n.calendario.descricao}
          placeholder=${n.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @st-input=${t=>{Pm={...e,descricao:t.target.value}}}
        ></st-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?b`
              <st-button variant="danger" outline @click=${()=>void ah(e)}>
                <st-icon slot="prefix" name="trash"></st-icon>${n.acoes.excluir}
              </st-button>
            `:x}
        <st-button
          @click=${()=>{Pm=null,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
        <st-button variant="primary" @click=${()=>void ih(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
      </div>
    </st-dialog>
  `}async function sh(e){let t=e.nome.trim()===``?n.calendario.tipoSemNome:e.nome.trim();await um({...(e.id>0?Xp(km,e.id):void 0)??{ordem:fm(km)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial}),Im=null,await zm()}async function ch(e){if(e.id!==void 0){if(pm(Am,e.id)){await Jd({titulo:n.calendario.tipoEmUsoTitulo,texto:n.calendario.tipoEmUsoTexto,rotuloConfirmar:n.acoes.fechar});return}await Jd({titulo:n.calendario.excluirTipo,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await dm(e.id),await zm())}}function lh(e){return b`
    <div class="formulario formulario--cartao">
      <st-input
        label=${n.calendario.tipoNome}
        .value=${e.nome}
        @st-input=${t=>{Im={...e,nome:t.target.value}}}
      ></st-input>

      <div>
        <span class="formulario__rotulo">${n.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(Vp).map(([t,n])=>b`
              <button
                class="cor-chip"
                ?data-ativo=${e.cor===t}
                style=${`background:${n}`}
                aria-label=${t}
                @click=${()=>{Im={...e,cor:t},C()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${n.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(Hp).map(([t,n])=>b`
              <button
                class="tipo-chip"
                ?data-ativo=${e.icone===t}
                aria-label=${t}
                @click=${()=>{Im={...e,icone:t},C()}}
              >
                <st-icon name=${n}></st-icon>
              </button>
            `)}
        </div>
      </div>

      <st-switch
        ?checked=${e.especial}
        @st-change=${t=>{Im={...e,especial:t.target.checked}}}
      >
        ${n.calendario.marcaEspecial}
      </st-switch>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void sh(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button
          @click=${()=>{Im=null,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
      </div>
    </div>
  `}function uh(){return b`
    <st-dialog
      open
      label=${n.calendario.tipos}
      @st-after-hide=${()=>{Fm=!1,Im=null,C()}}
    >
      ${Im===null?b`
            <div class="tipos-lista">
              ${km.map(e=>b`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${Vp[e.cor_chave]??``}`}
                    ></span>
                    <st-icon name=${Hp[e.icone]??`calendar-event`}></st-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?b`<st-badge variant="success" pill>${n.calendario.especial}</st-badge>`:x}
                    <st-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>{Im={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},C()}}
                    ></st-icon-button>
                    <st-icon-button
                      name="trash"
                      label=${n.calendario.excluirTipo}
                      @click=${()=>void ch(e)}
                    ></st-icon-button>
                  </div>
                `)}
            </div>

            <st-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{Im={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},C()}}
            >
              <st-icon slot="prefix" name="plus"></st-icon>${n.calendario.novoTipo}
            </st-button>
          `:lh(Im)}
    </st-dialog>
  `}var dh={acoes(){return b`
      <st-icon-button
        name="tags"
        label=${n.calendario.tipos}
        @click=${()=>{Fm=!0,Im=null,C()}}
      ></st-icon-button>
      <st-icon-button
        name="plus"
        label=${n.calendario.novoEvento}
        @click=${()=>Ym(c())}
      ></st-icon-button>
    `},conteudo(){return Bm(),Lm?b`
      ${Hm()}
      ${Gm()}
      ${rh()}
      ${Pm===null?x:oh(Pm)}
      ${Fm?uh():x}
    `:b`<div class="carregando"><st-spinner></st-spinner></div>`}},{I:fh}=At,ph=e=>e.strings===void 0,mh={},hh=(e,t=mh)=>e._$AH=t,gh=Rd(class extends zd{constructor(){super(...arguments),this.key=x}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(hh(e),this.key=t),n}}),_h=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),_h(e,t);return!0},vh=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},yh=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Sh(t)}};function bh(e){this._$AN===void 0?this._$AM=e:(vh(this),this._$AM=e,yh(this))}function xh(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)_h(r[e],!1),vh(r[e]);else r!=null&&(_h(r,!1),vh(r));else _h(this,e)}var Sh=e=>{e.type==Ld.CHILD&&(e._$AP??=xh,e._$AQ??=bh)},Ch=class extends zd{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),yh(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(_h(this,e),vh(this))}setValue(e){if(ph(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},wh=()=>new Th,Th=class{},Eh=new WeakMap,Dh=Rd(class extends Ch{render(e){return x}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),x}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Eh.get(t);n===void 0&&(n=new WeakMap,Eh.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Eh.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Oh={natureza:`A Natureza`,terra:`A Terra`,entenda:`Entenda Melhor`,matematica:`Matemática`,corpo:`O Corpo Humano`,animal:`O Reino Animal`,universo:`Universo e Física`},kh=Object.keys(Oh),Ah=`natureza`;function jh(e){return Oh[e]??e}var Mh={criacao:{id:`criacao`,titulo:`Teve um Projeto?`,subtitulo:`Descubra os mistérios escondidos na criação e dê louvor à sabedoria do Criador, Jeová.`,inclui:e=>e.categoria!==`entenda`,agrupado:!0},entenda:{id:`entenda`,titulo:`Entenda Melhor`,subtitulo:`Raciocínios bíblicos que costumam travar as pessoas, refeitos passo a passo por você.`,inclui:e=>e.categoria===`entenda`,agrupado:!1}};function Nh(e){return e===`entenda`?Mh.entenda:Mh.criacao}async function Ph(){return(await i(`criacao_modulos`).todos()).sort((e,t)=>Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}function Fh(e,t){let n=new Map;for(let t of e){let e=Oh[t.categoria]===void 0?Ah:t.categoria,r=n.get(e);r===void 0?n.set(e,[t]):r.push(t)}return kh.filter(e=>(n.get(e)?.length??0)>0).map(e=>{let r=n.get(e)??[];return{chave:e,rotulo:jh(e),modulos:r,concluida:r.every(t)}})}function Ih(e){if(e===null)return{};try{let t=JSON.parse(e.config===``?`{}`:e.config);return typeof t==`object`&&t&&!Array.isArray(t)?t:{}}catch{return{}}}var Lh=`papiro_criacao_progresso`;function Rh(){return{concluidos:{}}}function zh(){try{let e=JSON.parse(localStorage.getItem(Lh)??`null`);return{...Rh(),...e}}catch{return Rh()}}function Bh(e){localStorage.setItem(Lh,JSON.stringify(e))}function Vh(e,t){let n=e.concluidos[String(t)],r={...e,concluidos:{...e.concluidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,concluidoEm:Date.now()}}};return Bh(r),r}function Hh(e,t){return t?.id!==void 0&&e.concluidos[String(t.id)]!==void 0}function Uh(e){return`criacao:${e}`}async function Wh(){let e=new Map;for(let t of await hp()){if(t.origem!==`criacao`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function Gh(e,t){let r=t[e.atual??0]??t[0];if(r===void 0)return{passo:t[0],ok:!1,leitura:``};if(r.entrada===`escolha`){let t=e.escolhido===r.correta;return{passo:r,ok:t,escolhido:e.escolhido,leitura:t?r.acerto:``,erro:r.erros[e.escolhido??``]??n.criacao.erro}}let i=e.valores[r.prop],a=typeof i==`number`&&Number.isFinite(i)?i:r.inicial;return{passo:r,...r.medir(a)}}function Kh(e){let t={};for(let n of e)n.entrada===`slider`&&(t[n.prop]=n.inicial);return t}function qh(e){return e.map(e=>e.entrada===`escolha`?{id:e.id,titulo:e.titulo,pergunta:e.pergunta,verso:e.verso,entrada:`escolha`,opcoes:e.opcoes}:{id:e.id,titulo:e.titulo,pergunta:e.pergunta,verso:e.verso,entrada:`slider`,prop:e.prop,rotulo:e.rotulo,...e.suf===void 0?{}:{suf:e.suf},min:e.min,max:e.max,step:e.step})}function Jh(e,t){return{arquetipo:`etapas`,criar(){let r={arquetipo:`etapas`,extra:t.comp,viz:t,passos:qh(e),atual:0,escolhido:null,conclusao:null,conclusaoTitulo:``,valores:Kh(e)};return{puzzle:r,info:()=>{let{passo:t,...n}=Gh(r,e);return{...n,fase:t.fase,idx:r.atual??0,total:e.length}},verificar:()=>{let t=Gh(r,e);if(!t.ok)return{tipo:`erro`,mensagem:t.erro??n.criacao.erro};let i=r.atual??0;if(i>=e.length-1)return{tipo:`ok`,mensagem:t.passo.acerto};let a=t.passo.encadeia===!0;return r.conclusao=a?t.passo.acerto:null,r.conclusaoTitulo=a?t.passo.titulo:``,r.atual=i+1,r.escolhido=null,{tipo:`avanco`}}}}}}var Yh=5730;function Xh(e){return 2**(-e/Yh)}function Zh(e){return e<=0?1/0:-5730*Math.log2(Math.min(1,e))}function Qh(e,t){let n=Math.max(0,Math.min(1,t/100));return Zh(Xh(e)*(1-n)+n)}var $h=Jh([{id:`origem`,fase:`origem`,titulo:`De onde vem o carbono-14?`,pergunta:`Quase todo o carbono do mundo é carbono-12, que não decai nunca. O carbono-14 é raro — cerca de um átomo em um trilhão — e alguém precisa estar fabricando o tempo todo, senão ele já teria acabado. Quem fabrica?`,verso:`Willard Libby, 1949 — o método que lhe valeu o Nobel de Química de 1960`,entrada:`escolha`,opcoes:[{id:`nucleo`,rotulo:`O calor do interior da Terra`,nota:`Sobe pelo solo e pelos mares.`},{id:`cosmico`,rotulo:`Raios cósmicos batendo no nitrogênio do ar`,nota:`Na parte alta da atmosfera.`},{id:`sol`,rotulo:`A luz do Sol, direto nas plantas`,nota:`Junto com a fotossíntese.`}],correta:`cosmico`,erros:{nucleo:`O interior da Terra não fabrica C-14 — o carbono que sobe de lá é justamente o mais VELHO que existe, sem C-14 nenhum. É por isso que plantas perto de fontes vulcânicas podem nascer "envelhecidas".`,sol:`A fotossíntese só CAPTURA o carbono que já está no ar; ela não fabrica isótopo nenhum. A fábrica está muito mais alto.`},acerto:`Raios cósmicos atingem o nitrogênio-14 na alta atmosfera e o convertem em carbono-14. Ele se mistura ao ar como gás carbônico, a planta o absorve, o animal come a planta — e todo ser vivo fica com a mesma proporção do ar. Enquanto está vivo, ele repõe o que decai.`,encadeia:!0},{id:`meiavida`,fase:`meiavida`,titulo:`Quanto tempo o relógio leva para andar?`,pergunta:`Morreu, parou de repor: o C-14 que estava lá começa a decair e ninguém repõe. Arraste até achar em quantos anos a metade dele desaparece — é a meia-vida, e é o ponteiro deste relógio.`,verso:`Meia-vida do carbono-14: 5.730 ± 40 anos`,entrada:`slider`,prop:`meia`,rotulo:`Meia-vida`,suf:` anos`,min:2e3,max:9e3,step:10,inicial:2e3,medir:e=>({ok:Math.abs(e-Yh)<=60,meia:e,leitura:`Com ${m(e)} anos de meia-vida, uma amostra de ${m(e*2)} anos teria ${e===0?`—`:`25%`} do C-14 original, e uma de ${m(e*4)} anos, pouco mais de 6%.`,erro:`Ainda não. A meia-vida do C-14 fica perto de 5.700 anos — é ela que dá ao método um alcance útil de umas dez meia-vidas, algo em torno de 50.000 anos.`}),acerto:`5.730 anos. Depois de dez meia-vidas — cerca de 50.000 anos — resta tão pouco C-14 que nenhuma balança separa a amostra do ruído do laboratório. É esse o limite honesto do método, e não uma opinião sobre o passado.`,encadeia:!0},{id:`idade`,fase:`idade`,titulo:`Da fração para a idade`,pergunta:`Chegou ao laboratório um pedaço de madeira com 25% do carbono-14 que teria se estivesse vivo hoje. Arraste a idade até a fração bater com essa medida.`,verso:`fração restante = 2 elevado a (−idade ÷ meia-vida)`,entrada:`slider`,prop:`idade`,rotulo:`Idade da amostra`,suf:` anos`,min:0,max:3e4,step:100,inicial:0,medir:e=>{let t=Xh(e)*100;return{ok:Math.abs(e-Yh*2)<=300,idade:e,fracao:t,leitura:`${m(e)} anos → restam ${te(t,1)}% do carbono-14 original.`,erro:t>25?`Ainda sobra C-14 demais: a amostra teria de ser mais velha.`:`Já sobrou C-14 de menos: a amostra teria de ser mais nova.`}},acerto:`11.460 anos — duas meia-vidas exatas. Repare que a conta não tem nada de arbitrário: medida a fração, a idade sai por uma linha só. O trabalho difícil não é a conta; é garantir que a fração medida seja mesmo a da amostra.`},{id:`contaminacao`,fase:`contaminacao`,titulo:`Um fio de cabelo estraga tudo`,pergunta:`Esta amostra tem 40.000 anos de verdade. Uma raiz recente atravessou o osso, ou uma gota de conservante encostou nele — carbono MODERNO se misturou. Arraste até a leitura perder dez mil anos.`,verso:`Contaminação por carbono moderno — o erro mais comum em amostras antigas`,entrada:`slider`,prop:`contaminacao`,rotulo:`Carbono moderno na amostra`,suf:`%`,min:0,max:5,step:.1,inicial:0,medir:e=>{let t=Qh(4e4,e);return{ok:t<=3e4,contaminacao:e,medida:t,real:4e4,leitura:e===0?`Amostra limpa: a balança lê os 40.000 anos verdadeiros.`:`${te(e,1)}% de carbono moderno → a balança lê ${m(Math.round(t/100)*100)} anos.`,erro:`Continue: numa amostra deste porte restava menos de 1% do C-14 original, então cada décimo de porcento de carbono novo pesa muito na conta.`}},acerto:`Menos de dois por cento de carbono moderno tiram dez mil anos da leitura. O motivo é aritmético: aos 40.000 anos restava menos de 1% do C-14 original, então a sujeira nova chega a ser mais abundante que o sinal antigo. É por isso que a preparação da amostra ocupa mais tempo no laboratório do que a medição em si — e por que o contexto de onde ela saiu vale tanto quanto o número que sai da balança.`},{id:`reservatorio`,fase:`reservatorio`,titulo:`A amostra que já nasce velha`,pergunta:`Um molusco marinho não respira o ar: ele se alimenta do carbono dissolvido na água, e essa água pode ter ficado séculos longe da superfície, decaindo o tempo todo. A concha mediu 3.000 anos. Arraste a idade do reservatório até aparecer quando o bicho de fato viveu.`,verso:`Efeito reservatório marinho — corrigido por calibração regional`,entrada:`slider`,prop:`reservatorio`,rotulo:`Idade do reservatório`,suf:` anos`,min:0,max:1200,step:25,inicial:0,medir:e=>({ok:Math.abs(e-400)<=50,reservatorio:e,leitura:`Descontando ${m(e)} anos de reservatório, a concha viveu há ${m(3e3-e)} anos.`,erro:`O desconto típico de um mar aberto fica em algumas centenas de anos, e varia de região para região — por isso ele é medido, não chutado.`}),acerto:`Cerca de 400 anos, que é a ordem de grandeza do reservatório marinho global — e ele muda de lugar para lugar, e de época para época. A mesma armadilha pega ossos de quem comia muito peixe de rio e plantas que cresceram em água rica em calcário antigo. Nada disso invalida o método: é um viés CONHECIDO, que se mede e se corrige — desde que se saiba de onde a amostra veio.`},{id:`planalto`,fase:`planalto`,titulo:`Por que uma data volta com duas respostas`,pergunta:`O C-14 do ar não foi constante: ele oscilou com o campo magnético da Terra e com a atividade solar. Por isso o resultado bruto passa por uma curva de calibração, feita com anéis de árvores contados um a um. Em alguns trechos essa curva fica quase horizontal. O que acontece com uma amostra que cai num desses trechos?`,verso:`Curva de calibração IntCal, construída por dendrocronologia`,entrada:`escolha`,opcoes:[{id:`errada`,rotulo:`A data sai errada, sem aviso`,nota:`O laboratório não percebe.`},{id:`larga`,rotulo:`A data sai certa, mas com margem larga`,nota:`Às vezes em dois ou três intervalos possíveis.`},{id:`nada`,rotulo:`Nada muda: a curva não afeta o resultado`,nota:``}],correta:`larga`,erros:{errada:`Não é que saia errada às escondidas — é que sai HONESTAMENTE imprecisa. O relatório mostra a margem larga; quem resume o achado numa manchete é que costuma apagá-la.`,nada:`Afeta, e muito. Sem calibrar, uma data de 1000 a.C. pode errar por séculos, porque a proporção de C-14 no ar daquela época não era a de hoje.`},acerto:`Num platô da curva, várias idades verdadeiras produzem quase a mesma proporção de C-14 — então a mesma medição corresponde a um intervalo largo, às vezes descontínuo. O platô entre os séculos 8 e 4 a.C. é o mais conhecido. O resultado continua correto: ele apenas diz menos do que gostaríamos, e diz isso abertamente.`},{id:`juizo`,fase:`juizo`,titulo:`Então, o que uma data de carbono vale?`,pergunta:`Você viu o método por dentro: a física é firme, e três coisas concretas podem estragar uma medição. Qual conclusão o conjunto sustenta?`,verso:`Provérbios 14:15; 18:13 — ouvir o assunto inteiro antes de responder`,entrada:`escolha`,opcoes:[{id:`descartar`,rotulo:`Nenhuma: datação por carbono não serve para nada`,nota:`Todo resultado é chute.`},{id:`aceitar`,rotulo:`Toda data publicada é exata como está escrita`,nota:`O número é o número.`},{id:`senso`,rotulo:`Vale o que a amostra e a margem permitem dizer`,nota:`Contexto conhecido, amostra limpa, margem declarada.`}],correta:`senso`,erros:{descartar:`Isso vai longe demais. O decaimento do C-14 é medido em laboratório e confirmado por amostras de idade conhecida — madeira de tumbas datadas por documentos, anéis de árvore contados um a um. Dentro da história humana, e bem feita, a medição acerta.`,aceitar:`Isso vai longe demais para o outro lado. Toda data séria vem com uma margem e depende de a amostra estar limpa e o contexto conhecido — três coisas que você acabou de ver falhar. Um número sem a margem não é o resultado inteiro.`},acerto:`Este é o bom senso do assunto. A física do decaimento não está em disputa; o que decide é a QUALIDADE da amostra e a honestidade da margem. Uma data de carbono bem feita, dentro do alcance do método, é uma boa evidência — e vem sempre com um intervalo, não com um ponto. Quando o intervalo some no caminho até a manchete, o problema não foi o laboratório. Aceitar isso não é desconfiar da ciência: é ler o resultado como o próprio laboratório o escreveu.`}],{comp:`carbono`,aspecto:`16/10`}),eg=Jh([{id:`denario`,fase:`denario`,titulo:`Quanto valia um denário?`,pergunta:`O denário é a moeda mais citada nos Evangelhos, e quase toda parábola sobre dinheiro depende dele. Na parábola dos trabalhadores da vinha, o dono combina um denário com cada homem. Um denário equivalia a quê?`,verso:`Mateus 20:2 · Apêndice B14-B (Tradução do Novo Mundo)`,entrada:`escolha`,opcoes:[{id:`pao`,rotulo:`O preço de um pão`,nota:`Uma moedinha de troco.`},{id:`dia`,rotulo:`O salário de um dia de 12 horas`,nota:`Uma jornada inteira — hoje, uns R$ 53.`},{id:`fortuna`,rotulo:`Uma pequena fortuna`,nota:`Vários meses de salário.`}],correta:`dia`,erros:{pao:`Baixo demais. Ninguém trabalharia “desde a primeira hora” por um pão — e o próprio texto mostra que o valor bastava para sustentar uma família naquele dia.`,fortuna:`Alto demais. Se um denário fosse uma fortuna, a queixa dos que trabalharam o dia inteiro não faria sentido: eles receberam o combinado, um dia de salário.`},acerto:`Um denário era o salário de um dia de trabalho de 12 horas — 3,85 g de prata. Para sentir o peso disso hoje, use o salário mínimo brasileiro arredondado, R$ 1.600 por mês: R$ 1.600 ÷ 30 dias dá uns R$ 53 por dia. Guarde essa régua — ela vale para tudo o que vem a seguir. A dracma grega valia praticamente o mesmo.`,encadeia:!0},{id:`viuva`,fase:`viuva`,titulo:`Quanto era a oferta da viúva?`,pergunta:`A viúva pobre pôs no cofre duas moedinhas de lépton. Um denário valia 64 quadrantes, e cada quadrante valia 2 léptons. Arraste até quantos léptons cabem num denário.`,verso:`Lucas 21:1-4`,entrada:`slider`,prop:`leptons`,rotulo:`Léptons num denário`,suf:` léptons`,min:8,max:200,step:8,inicial:8,medir(e){let t=e===128;return{ok:t,leptons:e,leitura:t?`64 quadrantes × 2 = 128 léptons num denário. Os dois léptons da viúva eram 1/64 do salário de um dia — cerca de 11 minutos de trabalho. ✔`:`${e} léptons. A conta é 64 quadrantes × 2 léptons cada — ${e<128?`falta`:`passou`}.`,erro:`Multiplique os 64 quadrantes do denário por 2 léptons cada.`}},acerto:`Duas moedinhas: 1/64 de um dia de salário, uns 11 minutos de trabalho — pelo salário mínimo de hoje, menos de R$ 1. Os ricos jogavam punhados de moedas ali, e Jesus disse que ela “lançou mais do que todos” — porque eles deram do que sobrava, e ela deu tudo o que tinha para viver.`},{id:`talento`,fase:`talento`,titulo:`Quanto PESA um talento?`,pergunta:`Antes de ser dinheiro, o talento era peso. A escada é esta: 50 siclos de 11,4 g fazem uma mina (570 g), e 60 minas fazem um talento. Arraste até o peso de um talento hebraico.`,verso:`Êxodo 38:25, 26 · Apêndice B14-B`,entrada:`slider`,prop:`kg`,rotulo:`Peso de um talento`,suf:` kg`,min:3,max:60,step:.6,inicial:3,medir(e){let t=Math.abs(e-34.2)<.01,n=e/.57;return{ok:t,kg:e,minas:n,leitura:t?`60 × 570 g = 34,2 kg num talento. Um só talento pesa como uma criança de dez anos — e o rei tinha milhares deles. ✔`:`${e.toString().replace(`.`,`,`)} kg ÷ 570 g = ${Math.round(n)} minas. São 60 — ${n<60?`falta`:`passou`}.`,erro:`Isso dá ${Math.round(n)} minas. Multiplique 60 × 570 g.`}},acerto:`Um talento = 34,2 kg. Agora dá para sentir o peso da coroa de Amom, de um talento de ouro, que Davi tomou (2 Samuel 12:30) — e para entender por que a Apocalipse 16:21 descreve pedras de granizo “do peso de um talento” como uma praga.`,encadeia:!0},{id:`divida`,fase:`divida`,titulo:`A dívida que o rei perdoou`,pergunta:`Na parábola, o escravo devia ao rei 10.000 talentos; cada talento grego valia 6.000 dracmas, e cada dracma era um dia de salário. Logo depois, esse mesmo escravo agarrou um conservo que lhe devia 100 denários. Veja as duas dívidas correndo na tela e responda: quantas vezes a dívida PERDOADA era maior que a cobrada?`,verso:`Mateus 18:23-35`,entrada:`escolha`,opcoes:[{id:`60`,rotulo:`60 vezes maior`,nota:`Uma diferença grande, mas comparável.`},{id:`6000`,rotulo:`6.000 vezes maior`,nota:`Uma diferença enorme.`},{id:`600000`,rotulo:`600.000 vezes maior`,nota:`Uma diferença fora de qualquer escala: R$ 5 mil contra R$ 3 bilhões.`}],correta:`600000`,erros:{60:`Muito pouco. Faça a conta inteira: 10.000 talentos × 6.000 dracmas = 60 milhões de dias de salário, contra 100.`,6e3:`Quase — mas você parou num talento. São 10.000 talentos: 60.000.000 de dias de trabalho, contra 100 dias.`},acerto:`60.000.000 ÷ 100 = 600.000 vezes. A dívida perdoada equivalia a cerca de 200.000 anos de trabalho — pelo salário mínimo de hoje, mais de R$ 3 bilhões; a cobrada, a uns três meses, uns R$ 5.300. Jesus escolheu números impossíveis de propósito — ninguém erra a moral dessa história depois de fazer a conta.`},{id:`nardo`,fase:`nardo`,titulo:`Quanto custava o perfume de Maria?`,pergunta:`Maria derramou nos pés de Jesus uma libra romana (327 g) de óleo perfumado de nardo genuíno. Judas protestou dizendo que aquilo valia 300 denários. Sabendo que cada denário é um dia de trabalho, arraste até quantos MESES de salário aquilo representava.`,verso:`João 12:3-5`,entrada:`slider`,prop:`meses`,rotulo:`Meses de salário`,suf:` meses`,min:1,max:20,step:1,inicial:1,medir(e){let t=e===10;return{ok:t,meses:e,dias:e*30,reais:e*1600,leitura:t?`300 dias de trabalho ÷ 30 = 10 meses de salário derramados de uma vez — R$ 16.000 pelo mínimo de hoje. ✔`:`${e} ${e===1?`mês`:`meses`} = ${e*30} dias de trabalho (R$ ${m(e*1600)}). São 300 denários, ou seja, 300 dias — ${e*30<300?`falta`:`passou`}.`,erro:`Divida os 300 dias de salário por 30 dias de mês.`}},acerto:`Dez meses de salário — R$ 16.000 pelo mínimo de hoje, quase um ano de trabalho num único frasco. Judas chamou aquilo de desperdício porque roubava do cofre; Jesus disse: “Deixem-na em paz.” Ela entendeu o que estava por vir, e o gesto dela é contado até hoje.`}],{comp:`dinheiro_biblia`,aspecto:`16/10`,dica:`A cena converte junto: cada moeda e cada peso medidos em dias de trabalho.`}),tg=Jh([{id:`covado`,fase:`covado`,titulo:`De onde saiu o côvado?`,pergunta:`A medida mais usada na Bíblia é o côvado, e ela não veio de um padrão guardado num cofre: veio do corpo. Que parte do corpo dá o côvado?`,verso:`Deuteronômio 3:11 · Apêndice B14-A (Tradução do Novo Mundo)`,entrada:`escolha`,opcoes:[{id:`pe`,rotulo:`O comprimento do pé`,nota:`Cerca de 25 cm.`},{id:`antebraco`,rotulo:`Do cotovelo à ponta do dedo médio`,nota:`O antebraço inteiro.`},{id:`passo`,rotulo:`Um passo largo`,nota:`Cerca de 75 cm.`}],correta:`antebraco`,erros:{pe:`O pé é curto demais. Meça no seu braço: a distância do cotovelo à ponta do dedo médio é quase o dobro disso.`,passo:`Um passo é largo demais — daria quase o dobro do côvado. A medida é do braço, não da perna.`},acerto:`O côvado é o antebraço: do cotovelo à ponta do dedo médio, cerca de 44,5 cm. Estenda o braço e você tem uma régua bíblica. Havia também o côvado longo, uma largura de mão maior (7 × 7,4 cm = 51,8 cm), usado no templo de Ezequiel.`,encadeia:!0},{id:`arca`,fase:`arca`,titulo:`De que tamanho era a arca?`,pergunta:`Jeová mandou Noé construir a arca com 300 côvados de comprimento. Todo mundo lê esse número e não enxerga nada. Arraste até achar o comprimento em metros — e veja contra o que ele encosta.`,verso:`Gênesis 6:15`,entrada:`slider`,prop:`metros`,rotulo:`Comprimento da arca`,suf:` m`,min:50,max:200,step:.5,inicial:50,medir(e){let t=Math.abs(e-133.5)<.01,n=e/.445;return{ok:t,metros:e,covados:n,leitura:t?`300 × 0,445 m = 133,5 m de comprimento (por 22,25 m de largura e 13,35 m de altura). Mais comprida que um campo de futebol e mais alta que um prédio de quatro andares. ✔`:`${e.toString().replace(`.`,`,`)} m ÷ 0,445 m = ${Math.round(n)} côvados. A arca tinha 300 — ${n<300?`falta`:`passou`}.`,erro:`Isso dá ${Math.round(n)} côvados, não 300. Multiplique: 300 × 0,445 m.`}},acerto:`A arca tinha 133,5 m × 22,25 m × 13,35 m — cerca de 40.000 m³ de volume. Não era um barquinho de história infantil: era uma caixa maior que um campo de futebol, projetada para flutuar, não para navegar.`},{id:`golias`,fase:`golias`,titulo:`Qual era a altura de Golias?`,pergunta:`O texto diz que Golias media “seis côvados e um palmo”. Um côvado são 44,5 cm; um palmo (três larguras da mão) são 22,2 cm. Arraste até a altura dele em centímetros, arredondando ao centímetro.`,verso:`1 Samuel 17:4`,entrada:`slider`,prop:`altura`,rotulo:`Altura de Golias`,suf:` cm`,min:200,max:330,step:1,inicial:200,medir(e){let t=e===289;return{ok:t,altura:e,leitura:t?`6 × 44,5 + 22,2 = 289,2 cm — quase 2,90 m. Um homem de 1,75 m bateria no peito dele, e ele não passaria por uma porta comum sem se abaixar meio metro. ✔`:`${e} cm. Some seis côvados (6 × 44,5) com um palmo (22,2) e veja o quanto ${e<289?`ainda falta`:`passou`}.`,erro:`${e} cm não fecha. A conta é 6 × 44,5 cm + 22,2 cm.`}},acerto:`Cerca de 2,89 m. E a couraça dele pesava 5.000 siclos — 57 kg —, mais do que muita gente adulta inteira. Contra isso foi um pastorzinho com cinco pedras, dizendo: “A batalha pertence a Jeová.” (1 Samuel 17:5, 45-47)`},{id:`mar`,fase:`mar`,titulo:`Quanta água cabia no “mar de fundição”?`,pergunta:`No templo de Salomão havia um reservatório de cobre chamado “o mar”, que continha 2.000 batos. Um bato são 22 litros. Arraste até a capacidade em litros.`,verso:`1 Reis 7:23-26`,entrada:`slider`,prop:`litros`,rotulo:`Capacidade do “mar”`,suf:` L`,min:4e3,max:8e4,step:1e3,inicial:4e3,medir(e){let t=e===44e3,n=e/22;return{ok:t,litros:e,batos:n,leitura:t?`2.000 × 22 L = 44.000 litros — o equivalente a 44 caixas d’água de mil litros, ou 22 mil garrafas de dois litros. ✔`:`${m(e)} L ÷ 22 L = ${m(Math.round(n))} batos. São 2.000 — ${n<2e3?`falta`:`passou`}.`,erro:`${m(e)} L dá ${m(Math.round(n))} batos. Multiplique 2.000 × 22 L.`}},acerto:`44.000 litros de água, num recipiente de cobre fundido apoiado sobre doze touros. Era ali que os sacerdotes se lavavam — a santidade do serviço a Jeová exigia essa escala.`},{id:`efa`,fase:`efa`,titulo:`Quanto maná cada um recebia?`,pergunta:`No deserto, cada israelita recolhia “um gômer” de maná por dia — 2,2 litros. O gômer é a décima parte de outra medida, a efa. Arraste até quantos gômeres cabem numa efa.`,verso:`Êxodo 16:16, 36`,entrada:`slider`,prop:`gomores`,rotulo:`Gômeres numa efa`,suf:` gômeres`,min:1,max:16,step:1,inicial:1,medir(e){let t=e===10;return{ok:t,gomores:e,litros:e*2.2,leitura:t?`10 × 2,2 L = 22 L, uma efa. E repare no detalhe elegante: a efa (secos) e o bato (líquidos) têm exatamente a mesma capacidade — 22 litros, um décimo do coro. ✔`:`${e} × 2,2 L = ${te(e*2.2)} L. O próprio Êxodo 16:36 diz que o gômer é a DÉCIMA parte da efa.`,erro:`A Bíblia dá a resposta em Êxodo 16:36: o gômer é a décima parte da efa.`}},acerto:`Dez gômeres numa efa: 22 litros. Cada família recolhia conforme o número de pessoas, e Jeová acertava a conta todo dia — “quem tinha recolhido muito não teve demais, e quem tinha recolhido pouco não teve falta”. (Êxodo 16:18)`},{id:`estadio`,fase:`estadio`,titulo:`Que distância eles caminharam?`,pergunta:`No dia da ressurreição, dois discípulos iam de Jerusalém para Emaús, “a uns sessenta estádios” de distância. Um estádio romano são 185 metros. Caminhe com eles pelo mapa e pare exatamente onde fica Emaús.`,verso:`Lucas 24:13`,entrada:`slider`,prop:`estadios`,rotulo:`Estádios caminhados`,suf:` estádios`,min:0,max:70,step:1,inicial:0,medir(e){let t=e===60,n=e*185/1e3,r=n.toLocaleString(`pt-BR`,{maximumFractionDigits:2});return{ok:t,estadios:e,metros:e*185,km:n,leitura:t?`60 × 185 m = 11,1 km — cerca de duas horas e meia de caminhada, e ainda deu para voltar no mesmo dia. ✔`:e===0?`Você ainda está no portão de Jerusalém. Arraste para caminhar.`:`${e} × 185 m = ${r} km. Emaús fica a 60 estádios — ${e<60?`você ainda não chegou`:`você passou do vilarejo`}.`,erro:e>60?`Você andou ${r} km e passou de Emaús. O texto diz “uns sessenta estádios”.`:`${r} km ainda não é Emaús. Cada estádio são 185 m; some 60 deles.`}},acerto:`60 × 185 m = 11,1 km — cerca de duas horas e meia de caminhada. Por isso o relato fecha: eles andaram até Emaús, reconheceram Jesus ao partir do pão e ainda voltaram “naquela mesma hora” a Jerusalém. (Lucas 24:30-33)`}],{comp:`medidas_biblia`,aspecto:`16/10`,dica:`A cena mede junto: mova o controle e veja a medida bíblica encostar no que você conhece.`}),ng=[{n:1,ref:`1:10–3:22`,ini:[1,10],fim:[3,22],ramo:null,resumo:`João vê por inspiração o glorificado Jesus, que envia cordiais mensagens de conselho às sete congregações.`},{n:2,ref:`4:1–5:14`,ini:[4,1],fim:[5,14],ramo:`rolo`,resumo:`Uma vista magnífica do trono celestial de Jeová Deus. Este entrega um rolo ao Cordeiro.`},{n:3,ref:`6:1-17`,ini:[6,1],fim:[6,17],ramo:`selos16`,resumo:`Rompendo os primeiros seis selos do rolo, o Cordeiro revela progressivamente uma visão composta de eventos que haviam de ocorrer no dia do Senhor. Os quatro cavaleiros do Apocalipse saem cavalgando, os martirizados escravos de Deus recebem compridas vestes brancas, e se descreve o grande dia de furor.`},{n:4,ref:`7:1-17`,ini:[7,1],fim:[7,17],ramo:`entre67`,resumo:`Anjos seguram os ventos de destruição até que os 144.000 do Israel espiritual sejam selados. Uma grande multidão de todas as nações atribui salvação a Deus e a Cristo, e é ajuntada para sobreviver à grande tribulação.`},{n:5,ref:`8:1–9:21`,ini:[8,1],fim:[9,21],ramo:`selo7`,resumo:`Ao ser aberto o sétimo selo, há sete toques de trombeta, sendo que os primeiros seis constituem a quinta visão. Estes seis toques de trombeta proclamam expressões de julgamento de Jeová sobre a humanidade. A quinta e a sexta trombeta introduzem também o primeiro e o segundo ai.`},{n:6,ref:`10:1–11:19`,ini:[10,1],fim:[11,19],ramo:`tromb7`,resumo:`Um forte anjo dá a João um pequeno rolo, mede-se o templo, e ficamos conhecendo as experiências das duas testemunhas. Culmina com o toque da sétima trombeta, que anuncia o terceiro ai para os inimigos de Deus — a entrada do Reino de Jeová e do seu Cristo.`},{n:7,ref:`12:1-17`,ini:[12,1],fim:[12,17],ramo:null,resumo:`Esta descreve o nascimento do Reino, que resulta em Miguel lançar a serpente, Satanás, para baixo, à Terra.`},{n:8,ref:`13:1-18`,ini:[13,1],fim:[13,18],ramo:null,resumo:`A poderosa fera ascende do mar, e a fera de dois chifres, semelhante a um cordeiro, exorta a humanidade a adorá-la.`},{n:9,ref:`14:1-20`,ini:[14,1],fim:[14,20],ramo:null,resumo:`Uma esplêndida previsão dos 144.000 no Monte Sião. Ouvem-se mensagens angélicas em toda a Terra, ceifa-se a videira da Terra, e pisa-se o lagar da ira de Deus.`},{n:10,ref:`15:1–16:21`,ini:[15,1],fim:[16,21],ramo:`tigelas`,resumo:`Outro vislumbre da corte celestial, seguido pelo derramamento das sete tigelas da ira de Jeová na Terra. Esta seção também termina com uma descrição profética do fim do sistema de Satanás.`},{n:11,ref:`17:1-18`,ini:[17,1],fim:[17,18],ramo:null,resumo:`A grande meretriz, Babilônia, a Grande, monta uma fera cor de escarlate, que por pouco tempo vai ao abismo, mas sai novamente e devasta a meretriz.`},{n:12,ref:`18:1–19:10`,ini:[18,1],fim:[19,10],ramo:null,resumo:`Anuncia-se a queda e derradeira destruição de Babilônia, a Grande. Após a execução dela, alguns a lamentam, outros louvam a Jeová; anuncia-se o casamento do Cordeiro.`},{n:13,ref:`19:11-21`,ini:[19,11],fim:[19,21],ramo:null,resumo:`Jesus lidera os exércitos celestiais na execução do julgamento irado de Deus sobre o sistema de Satanás, seus exércitos e seus apoiadores; aves necrófagas banqueteiam-se dos cadáveres deles.`},{n:14,ref:`20:1-10`,ini:[20,1],fim:[20,10],ramo:null,resumo:`O lançamento de Satanás, o Diabo, no abismo, o Reinado Milenar de Cristo e de seus reis associados, a prova final da humanidade e a destruição de Satanás e seus demônios.`},{n:15,ref:`20:11–21:8`,ini:[20,11],fim:[21,8],ramo:null,resumo:`A ressurreição geral e o grande Dia de Julgamento; surgem um novo céu e uma nova terra, com bênçãos eternas para a humanidade justa.`},{n:16,ref:`21:9–22:5`,ini:[21,9],fim:[22,5],ramo:null,resumo:`O Apocalipse culmina com uma gloriosa visão da Nova Jerusalém, a esposa do Cordeiro. A provisão de Deus para cura e vida da humanidade flui dessa cidade. O Apocalipse conclui com cordiais palavras de saudação e conselho da parte de Jeová, de Jesus, do anjo e do próprio João. O convite que se faz a todos é: “Vem!”`}],rg={rolo:`Aqui o rolo nasce: Jeová o entrega ao Cordeiro. Tudo o que vem a seguir sai de dentro dele — é a espiral inteira.`,selos16:`A volta de fora da espiral: o Cordeiro rompe os seis primeiros selos. Repare que ainda falta um.`,entre67:`Onde ela cai: 7:1-17 vem depois do sexto selo (capítulo 6) e antes de o sétimo ser aberto (8:1). Ela se encaixa entre os dois.`,selo7:`O encaixe que muda tudo: ao ser aberto, o 7º SELO não traz um evento — traz SETE TROMBETAS. As seis primeiras são esta visão; a quinta e a sexta introduzem o primeiro e o segundo ai. A espiral não termina no selo: ela entra para dentro.`,tromb7:`O encaixe outra vez: a 7ª TROMBETA também não traz um evento — anuncia o terceiro ai, a entrada do Reino de Jeová e do seu Cristo. É o centro da espiral, o miolo do rolo.`,tigelas:`Outra série de sete: as sete tigelas da ira. Mas repare — elas são a 10ª visão, e não saem de dentro dos selos. Nem todo sete do livro está encaixado no rolo.`},ig=`Esta visão corre em sequência: ela não se abre em outra série. Siga em frente.`,ag={arquetipo:`explorar`,criar(){let e={arquetipo:`explorar`,extra:`revelacao`,viz:{comp:`revelacao`,aspecto:`6/5`,dica:`O rolo aberto: os selos de um lado; ao abrir o 7º, o rolo VIRA nas trombetas.`},valores:{},mapa:ng.map(e=>({id:e.n,rotulo:`${e.n}ª`})),ativoMapa:1,vistos:[1]};return{puzzle:e,info:()=>{let t=ng.find(t=>t.n===e.ativoMapa)??ng[0],n=e.vistos??[],r=ng.length-n.length,i=r===0;return t===void 0?{ok:i,leitura:``}:{ok:i,ativo:t.n,vistos:[...n],total:ng.length,rotulo:`${t.n}ª`,ref:t.ref,resumo:t.resumo,ramo:t.ramo,visoes:ng,encaixe:t.ramo===null?ig:rg[t.ramo]??ig,desdobra:t.ramo===`selo7`||t.ramo===`tromb7`,leitura:i?`As 16 visões percorridas. O livro não é uma fila: o 7º selo abre as sete trombetas, e a 7ª trombeta traz o Reino. ✔`:`${n.length} de ${ng.length} visões abertas — faltam ${r}.`}},verificar:()=>({...ie,mensagem:`Mapa completo — e agora o encaixe do rolo está à vista.`})}}},og=Jh([{id:`inicio`,fase:`inicio`,titulo:`Onde a contagem começa?`,pergunta:`A árvore enorme do sonho representa o governo de Deus na Terra — exercido pelos reis em Jerusalém, que se assentavam no “trono de Jeová”. Derrubar a árvore é interromper esse governo. Que evento derrubou a árvore?`,verso:`Daniel 4:10-16, 20-22 · 1 Crônicas 29:23`,entrada:`escolha`,opcoes:[{id:`537`,rotulo:`537 AEC`,nota:`Os judeus voltam do exílio na Babilônia.`},{id:`607`,rotulo:`Outubro de 607 AEC`,nota:`Nabucodonosor destrói Jerusalém e destrona o rei.`},{id:`70`,rotulo:`70 EC`,nota:`Roma destrói Jerusalém e o templo.`}],correta:`607`,erros:{537:`A volta do exílio não derrubou nada — e nenhum rei da linhagem de Davi voltou ao trono. Nessa altura a contagem já estava correndo há décadas.`,70:`O ‘pisoteio’ não começou com Roma, em 70 EC. Começou séculos antes, quando os babilônios derrubaram a dinastia de Davi e o trono ficou vago.`},acerto:`Outubro de 607 AEC: Jerusalém cai, o “trono de Jeová” fica vago e a árvore é derrubada. É daqui que a conta parte. (2 Reis 25:1, 8-10)`,encadeia:!0},{id:`tempo`,fase:`tempo`,titulo:`Quanto dura UM “tempo”?`,pergunta:`A Bíblia explica a si mesma. Apocalipse 12:6 mede um período em “1.260 dias”; oito versículos depois, o 12:14 chama o MESMO período de “um tempo, tempos e meio tempo” — isto é, 3½ tempos. Ajuste o tamanho de um “tempo” até os 3½ darem exatamente 1.260 dias.`,verso:`Apocalipse 12:6, 14`,entrada:`slider`,prop:`dias`,rotulo:`Tamanho de um “tempo”`,suf:` dias`,min:300,max:420,step:5,inicial:300,medir(e){let t=3.5*e,n=t===1260;return{ok:n,dias:e,totalDias:t,alvoDias:1260,leitura:n?`3½ × 360 = 1.260 dias — bate exatamente com Apocalipse 12:6. ✔`:`3½ tempos × ${m(e)} dias = ${m(t)} dias. Apocalipse 12:6 diz 1.260 — ${t<1260?`ainda falta`:`passou`}.`,erro:`${m(t)} dias não é 1.260. Pense ao contrário: que número, multiplicado por 3½, dá 1.260?`}},acerto:`1.260 ÷ 3,5 = 360. Um “tempo” profético é um ano de 360 dias — 12 meses de 30. Confere: Apocalipse 11:2, 3 chama esses mesmos 1.260 dias de “42 meses” (42 × 30 = 1.260).`,encadeia:!0},{id:`sete`,fase:`sete`,titulo:`Então quanto são SETE tempos?`,pergunta:`Agora que um “tempo” tem tamanho conhecido, o resto é empilhar. O sonho diz que o toco ficaria preso por “sete tempos”. Some os sete e leia o total.`,verso:`Daniel 4:16, 23`,entrada:`slider`,prop:`tempos`,rotulo:`Tempos empilhados`,suf:` de 7`,min:0,max:7,step:1,inicial:0,medir(e){let t=e*360,n=e===7;return{ok:n,tempos:e,totalDias:t,leitura:n?`7 × 360 = 2.520 dias — exatamente o dobro dos 1.260 (que eram 3½ tempos). ✔`:`${e} ${e===1?`tempo`:`tempos`} × 360 dias = ${m(t)} dias.`,erro:`Daniel 4 fala em SETE tempos — empilhe todos os sete.`}},acerto:`Sete tempos = 7 × 360 = 2.520 dias.`,encadeia:!0},{id:`diaano`,fase:`diaano`,titulo:`2.520 dias… ou 2.520 anos?`,pergunta:`Nabucodonosor de fato passou sete anos sem sanidade — esse foi o cumprimento pequeno. Mas o sonho foi dado “para que os viventes saibam” quem governa, e Jesus ainda falava desses tempos como algo em curso, séculos depois. Meros 2.520 dias após a queda de Jerusalém as nações não largaram o governo. Que medida o cumprimento maior usa?`,verso:`Daniel 4:17, 25 · Lucas 21:24`,entrada:`escolha`,opcoes:[{id:`dias`,rotulo:`2.520 dias`,nota:`Cerca de 7 anos: a conta pararia em 600 AEC.`},{id:`anos`,rotulo:`2.520 anos`,nota:`Um dia representa um ano.`}],correta:`anos`,erros:{dias:`Sete anos depois de 607 AEC estamos em 600 AEC — e as nações continuaram governando sem nenhuma interrupção. O cumprimento maior tem de alcançar muito mais longe.`},acerto:`A Bíblia às vezes usa um dia para representar um ano — “um dia para cada ano” (Números 14:34; Ezequiel 4:6). Aplicando essa regra, os 2.520 dias representam 2.520 ANOS.`,encadeia:!0},{id:`chegada`,fase:`chegada`,titulo:`Onde a conta termina?`,pergunta:`Último passo, e é onde quase todo mundo tropeça. A contagem parte de outubro de 607 AEC e corre 2.520 anos. Arraste o marcador até o total dar exatamente 2.520 — e desconfie da soma direta.`,verso:`Lucas 21:24`,entrada:`slider`,prop:`ano`,rotulo:`Ano de chegada`,suf:` EC`,min:1908,max:1920,step:1,inicial:1908,medir(e){let t=606+e,n=t===2520;return{ok:n,ano:e,anosAec:606,anosEc:e,totalAnos:t,direta:607+e,leitura:n?`Outubro de 1914: 606 + 1.914 = 2.520 anos exatos. ✔`:`606 anos (out/607 AEC → out/1 AEC) + ${m(e)} anos (out/1 AEC → out/${e} EC) = ${m(t)} anos — ${t<2520?`falta`:`passou`} ${m(Math.abs(2520-t))}.`,erro:e===1913?`Quase — e essa é exatamente a armadilha. A soma direta 607 + 1.913 dá 2.520 e parece certa, mas ela conta um “ano zero” que nunca existiu: de 1 AEC passa-se direto para 1 EC. A contagem real dá 2.519. Falta um ano.`:`606 + ${m(e)} = ${m(t)}, e o alvo é 2.520.`}},acerto:`Outubro de 1914 — o fim dos “tempos designados das nações”. Repare no detalhe que derruba tanta gente: 607 + 1.914 = 2.521, e mesmo assim a resposta é 1914. A soma direta erra por um ano justamente porque não existe ano zero.`}],{comp:`sete_tempos`,aspecto:`16/10`,dica:`A cena acompanha cada passo: mova o controle e veja a conta se formar.`}),sg=[{ano:-850,rotulo:`Pedra Moabita`,faixa:`nome`,fases:[]},{ano:-750,rotulo:`"Jeová é o Deus de toda a terra"`,faixa:`nome`,fases:[]},{ano:-650,rotulo:`ostraco de Arade; Laquis II`,faixa:`nome`,fases:[]},{ano:-280,rotulo:`Septuaginta grega, no Egito`,faixa:`texto`,fases:[`septuaginta`]},{ano:-100,rotulo:`P. Fouad 266: o Tetragrama`,faixa:`nome`,fases:[`septuaginta`]},{ano:-50,rotulo:`Rolos do Mar Morto`,faixa:`texto`,fases:[`copias`]},{ano:98,rotulo:`Escrituras Gregas concluídas`,faixa:`texto`,fases:[`copias`]},{ano:150,rotulo:`copta, siríaco, latim, armênio…`,faixa:`texto`,fases:[`septuaginta`]},{ano:300,rotulo:`Tosefta: cristãos escreviam o Nome`,faixa:`nome`,fases:[`sumico`]},{ano:350,rotulo:`Vaticano e Sinaítico: sem o Nome`,faixa:`nome`,fases:[`sumico`]},{ano:405,rotulo:`Vulgata, de Jerônimo`,faixa:`texto`,fases:[`latim`]},{ano:450,rotulo:`Alexandrino: Kýrios no lugar`,faixa:`nome`,fases:[`sumico`]},{ano:930,rotulo:`Códice de Alepo`,faixa:`texto`,fases:[]},{ano:1008,rotulo:`Códice de Leningrado`,faixa:`texto`,fases:[`copias`]},{ano:1526,rotulo:`Tyndale imprime em inglês`,faixa:`texto`,fases:[`vernaculo`]},{ano:1530,rotulo:`Tyndale: "Iehouah"`,faixa:`nome`,fases:[`vernaculo`]},{ano:1536,rotulo:`Tyndale é executado`,faixa:`texto`,fases:[`vernaculo`]},{ano:1592,rotulo:`Vulgata oficial da Igreja`,faixa:`texto`,fases:[`latim`]},{ano:1642,rotulo:`Almeida começa, aos 14 anos`,faixa:`texto`,fases:[`almeida`]},{ano:1681,rotulo:`Almeida impresso em Amsterdã`,faixa:`texto`,fases:[]},{ano:1691,rotulo:`Almeida morre`,faixa:`texto`,fases:[]},{ano:1751,rotulo:`o último volume em português`,faixa:`texto`,fases:[`almeida`]},{ano:1819,rotulo:`Almeida num só volume: "JEHOVAH"`,faixa:`nome`,fases:[`almeida`]},{ano:1917,rotulo:`Versão Brasileira: "Jehovah"`,faixa:`nome`,fases:[]},{ano:1950,rotulo:`Tradução do Novo Mundo`,faixa:`texto`,fases:[`hoje`]},{ano:1961,rotulo:`a Bíblia completa, num volume`,faixa:`texto`,fases:[]},{ano:1967,rotulo:`completa em português`,faixa:`texto`,fases:[`hoje`]},{ano:2013,rotulo:`revisão em inglês`,faixa:`texto`,fases:[]},{ano:2015,rotulo:`revisão em português`,faixa:`texto`,fases:[]},{ano:2026,rotulo:`344 idiomas, inteira ou em parte`,faixa:`texto`,fases:[`hoje`,`juizo`]}],cg=-900,lg=2026,ug=[[-900,0],[100,.2],[500,.32],[1500,.46],[1700,.6],[1900,.72],[1950,.8],[2026,1]];function dg(e){let t=Math.max(cg,Math.min(lg,e));for(let e=1;e<ug.length;e++){let n=ug[e-1],r=ug[e];if(n===void 0||r===void 0)continue;let[i,a]=n,[o,s]=r;if(t<=o)return a+(t-i)/(o-i)*(s-a)}return 1}var fg=[{seculo:1,nome:`cópias da Septuaginta como as dos dias de Jesus`,tem:!0},{seculo:2,nome:`primeiras versões — latim antigo, siríaco, copta`,tem:!0},{seculo:3,nome:`os escritos cristãos que a Tosefta descreve`,tem:!0},{seculo:4,nome:`Códice Vaticano e Códice Sinaítico`,tem:!1},{seculo:5,nome:`Códice Alexandrino`,tem:!1},{seculo:6,nome:`as cópias gregas que restaram`,tem:!1}];function pg(e){return fg.find(t=>t.seculo===Math.round(e))??{nome:`sem manuscrito representativo`,tem:!1}}var mg=1642,hg=1691,gg=1751,_g=Jh([{id:`copias`,fase:`copias`,titulo:`Nenhum original sobreviveu. E agora?`,pergunta:`Não existe hoje um só manuscrito original da Bíblia — nem das Escrituras Hebraicas, nem das Gregas. Os materiais eram perecíveis e nada disso chegou até nós. Então como alguém pode afirmar o que o texto original dizia?`,verso:`Apêndice A3 da Tradução do Novo Mundo — "Como a Bíblia chegou até nós"`,entrada:`escolha`,opcoes:[{id:`fe`,rotulo:`Não se pode: é uma questão de fé, sem apoio nenhum`,nota:`O texto de hoje seria um chute.`},{id:`comparar`,rotulo:`Comparando milhares de cópias entre si`,nota:`Erro de copista não se repete igual em todas.`},{id:`autoridade`,rotulo:`Uma autoridade religiosa decidiu qual era o texto certo`,nota:`E as demais cópias foram descartadas.`}],correta:`comparar`,erros:{fe:`Isso vai longe demais. Um professor manda cem alunos copiarem um capítulo: mesmo que o original se perca, comparar as cem cópias revela o que ele dizia, porque é improvável que todos errem no mesmo lugar. É exatamente o que se faz com os milhares de fragmentos bíblicos — e o método é conferível por qualquer um.`,autoridade:`Não foi assim que se chegou ao texto-padrão. As cópias divergentes NÃO foram destruídas: é por elas terem sobrevivido, aos milhares, que dá para comparar umas com as outras. Foram descobertas até depois — os Rolos do Mar Morto vieram à luz na metade do século 20.`},acerto:`É a comparação que responde. Entre os Rolos do Mar Morto apareceram cerca de 220 manuscritos ou fragmentos bíblicos, mais de mil anos mais antigos que o Códice de Leningrado (1008/1009 EC), até então o massorético completo mais antigo. Comparados, trazem variações de fraseologia — e nenhuma delas muda o sentido. Sobre o texto hebraico, o erudito William H. Green: "Pode-se dizer com segurança que nenhuma outra obra da antiguidade foi transmitida com tanta exatidão."`,encadeia:!0},{id:`septuaginta`,fase:`septuaginta`,titulo:`A primeira vez que a Bíblia trocou de idioma`,pergunta:`A Bíblia foi escrita em hebraico, aramaico e grego. Em algum momento ela começou a ser traduzida — e essa é a primeira curva da trajetória. Qual foi a primeira tradução?`,verso:`Estudo Perspicaz, verbete "Septuaginta"; apêndice A5`,entrada:`escolha`,opcoes:[{id:`vulgata`,rotulo:`A Vulgata latina, por volta de 405 EC`,nota:`Feita por Jerônimo.`},{id:`septuaginta`,rotulo:`A Septuaginta grega, a partir do século 3 AEC`,nota:`No Egito, para judeus que falavam grego.`},{id:`lutero`,rotulo:`As traduções da Reforma, no século 16`,nota:`Antes disso ninguém traduzia.`}],correta:`septuaginta`,erros:{vulgata:`A Vulgata é tardia — vem quase sete séculos depois, e o próprio Jerônimo traduziu partes dela a partir da Septuaginta. Ela ainda entra nesta trilha, mas mais adiante.`,lutero:`Faltam dezoito séculos. Antes da Reforma já havia versões em armênio, copta, etíope, georgiano, latim e siríaco — e, antes de todas, uma tradução grega feita antes de Cristo.`},acerto:`A Septuaginta: a tradução das Escrituras Hebraicas para o grego, começada no Egito no século 3 AEC e terminada no século 2 AEC, por cerca de 70 eruditos judeus — daí o nome, e a sigla LXX. E há um detalhe que decide o resto desta trilha: os manuscritos mais antigos da Septuaginta TRAZEM o nome de Deus. Nos fragmentos do P. Fouad Inv. 266, do século 1 AEC, o Tetragrama aparece em letras hebraicas dentro do texto grego. Jesus e seus discípulos tinham em mãos dois textos, o hebraico e o grego — e os dois traziam o Nome.`,encadeia:!0},{id:`sumico`,fase:`sumico`,titulo:`Em que século o Nome sai dos manuscritos`,pergunta:`O Tetragrama ocorre quase 7.000 vezes no texto hebraico, e estava também nas cópias gregas do primeiro século. Mas em algum ponto os manuscritos gregos principais deixam de trazê-lo. Arraste o século até achar onde a resposta vira.`,verso:`Apêndice A5 — "O nome divino nas Escrituras Gregas Cristãs"`,entrada:`slider`,prop:`seculo`,rotulo:`Século (EC)`,suf:`º`,min:1,max:6,step:1,inicial:1,medir:e=>{let{nome:t,tem:n}=pg(e),r=pg(e-1);return{ok:!n&&r.tem,seculo:e,temNome:n,leitura:`Século ${e}: ${t} — ${n?`traz o nome divino.`:`NÃO traz o nome divino.`}`,erro:n?`Aqui o Nome ainda está no texto. Avance.`:`Já passou da virada: neste século o Nome faz tempo que saiu. Volte um pouco.`}},acerto:`O século 4. O Códice Vaticano e o Códice Sinaítico já não trazem o nome de Deus em Gênesis a Malaquias, onde os manuscritos mais antigos o traziam. No século 5, o Códice Alexandrino faz o que virou regra: o Nome não é traduzido para um equivalente grego — é SUBSTITUÍDO por uma forma abreviada de Ký·ri·os, "Senhor". Repare no que mudou de mão: não foi o texto que se perdeu; foi um nome que copistas trocaram por um título. Um século antes, a Tosefta ainda descrevia escritos cristãos que continham "referências ao Nome Divino".`},{id:`latim`,fase:`latim`,titulo:`Jerônimo sabia`,pergunta:`Por volta de 405 EC, Jerônimo termina a Vulgata — a tradução latina que, depois de revisada, a Igreja adotaria como oficial em 1592, e que reinaria por mil anos. Na introdução aos livros de Samuel e de Reis, ele escreveu: "E, mesmo hoje, encontramos o nome de Deus, o Tetragrama, em certos volumes gregos expresso em letras antigas." O que ele fez com esse nome na Vulgata?`,verso:`Estudo Perspicaz, verbete "Vulgata"`,entrada:`escolha`,opcoes:[{id:`usou`,rotulo:`Usou-o, já que sabia que estava no texto`,nota:`Milhares de vezes, como no hebraico.`},{id:`ignorava`,rotulo:`Nada: naquela época ninguém sabia que Deus tinha nome`,nota:`A informação se perdera.`},{id:`sabia`,rotulo:`Registrou que o Nome existia — e não o usou`,nota:`Reconheceu por escrito, e traduziu sem ele.`}],correta:`sabia`,erros:{usou:`Não usou. É essa a parte incômoda: ele escreveu que o Tetragrama estava lá, em letras antigas, dentro de volumes gregos que ele mesmo consultava — e ainda assim traduziu sem ele. Saber não bastou.`,ignorava:`Sabia-se, sim, e ele é a própria prova disso: deixou registrado por escrito que havia encontrado o Tetragrama nos manuscritos. A informação não se perdeu — ela foi documentada e deixada de lado.`},acerto:`Jerônimo reconheceu que Deus tinha um nome, e não o usou na Vulgata. E foi a Vulgata que atravessou a Idade Média como a Bíblia do Ocidente. Daí em diante, quem traduzisse do latim herdaria a ausência sem ter escolhido nada: a lacuna já vinha pronta no texto de partida. É como uma decisão de copista vira, mil anos depois, aquilo que "sempre foi assim".`,encadeia:!0},{id:`vernaculo`,fase:`vernaculo`,titulo:`O preço de escrever na língua do povo`,pergunta:`William Tyndale (c. 1494–1536) foi o primeiro a traduzir as Escrituras Gregas e o Pentateuco dos idiomas originais para o inglês. Fugiu para a Alemanha em 1524, imprimiu em Worms em 1526, viu suas cópias serem contrabandeadas e queimadas, e acabou executado em 1536. Em 1530 o Pentateuco dele trouxe uma estreia. Qual?`,verso:`Apêndice A4; Estudo Perspicaz, verbete "Tyndale, William"`,entrada:`escolha`,opcoes:[{id:`impressa`,rotulo:`Foi a primeira Bíblia impressa da história`,nota:`Antes dela, só cópias à mão.`},{id:`nome`,rotulo:`A primeira vez que o nome pessoal de Deus apareceu numa Bíblia em inglês`,nota:`Grafado "Iehouah".`},{id:`versiculos`,rotulo:`A divisão do texto em versículos numerados`,nota:`Que todas as Bíblias herdaram.`}],correta:`nome`,erros:{impressa:`A imprensa já rodava havia décadas quando Tyndale publicou. O que era proibido não era imprimir — era imprimir em inglês: os líderes da Igreja na Inglaterra queriam a Bíblia em latim, língua que a maioria não entendia.`,versiculos:`A divisão em versículos que usamos foi fixada no século 16, mas não é a estreia deste trecho da trajetória. O que Tyndale devolveu ao texto inglês foi outra coisa — e é a coisa que esta trilha vem seguindo.`},acerto:`Em Gênesis 15:2 do Pentateuco de Tyndale, 1530, está "Iehouah": a primeira ocorrência do nome pessoal de Deus numa Bíblia em inglês. Mil e cem anos depois de Jerônimo, o Nome reaparece — na obra de um homem que morreria por ter feito o texto falar a língua do povo. A grafia mudou com o idioma, e é dessa linhagem que vem a forma que usamos hoje.`},{id:`almeida`,fase:`almeida`,titulo:`Quanto tempo leva uma Bíblia em português`,pergunta:`João Ferreira de Almeida, órfão de Portugal, embarcou para a Ásia aos 14 anos e começou a traduzir os Evangelhos assim que chegou a Malaca, por volta de 1642. Aos 16 já tinha traduzido as Escrituras Gregas inteiras. Arraste até o ano em que o último volume da Bíblia em português dele foi publicado.`,verso:`"A primeira Bíblia em português — uma história de perseverança" (wol.jw.org)`,entrada:`slider`,prop:`ano`,rotulo:`Ano do volume final`,min:1642,max:1830,step:1,inicial:1642,medir:e=>{let t=e-mg,n=e-hg;return{ok:Math.abs(e-gg)<=3,ano:e,anos:t,leitura:e<=1691?`${e}: ${t} anos de trabalho, e Almeida ainda está vivo — ele morreu em ${hg}.`:`${e}: ${t} anos desde o começo, ${n} deles depois da morte de Almeida.`,erro:e<1751?`Ainda não. Nem a morte de Almeida encerrou a obra — ela continuou sem ele.`:`Passou. O volume final saiu antes disso, ainda em meados do século 18.`}},acerto:`1751 — quase 110 anos depois que Almeida começou. Ele não viu nada disso: morreu em 1691 enquanto traduzia o último capítulo de Ezequiel, sessenta anos antes do fim. Pelo caminho houve um manuscrito perdido nos arquivos da igreja, uma sentença de morte por heresia da Inquisição de Goa em 1661 (queimaram uma efígie dele), revisores que corromperam o texto, uma edição inteira que o governo holandês mandou destruir e um navio capturado por piratas franceses. E o Nome estava lá: usar o Tetragrama traduzido é apontado como exemplo notável da integridade de Almeida como tradutor. A primeira Bíblia completa em português num só volume, a Almeida de 1819, traz "JEHOVAH" milhares de vezes.`},{id:`hoje`,fase:`hoje`,titulo:`Onde a trajetória chegou`,pergunta:`A Tradução do Novo Mundo saiu em inglês por partes: as Escrituras Gregas em 1950, as Hebraicas entre 1953 e 1960, a Bíblia completa em um volume em 1961, o português em 1967, a revisão em 2013 e 2015. Arraste até quantos idiomas ela já alcançou — contando os que receberam a Bíblia INTEIRA e os que receberam só uma parte.`,verso:`jw.org/pt/biblioteca/biblia, consultado em 6 de agosto de 2026`,entrada:`slider`,prop:`idiomas`,rotulo:`Idiomas`,min:0,max:600,step:2,inicial:0,medir:e=>({ok:Math.abs(e-344)<=10,idiomas:e,leitura:`${m(e)} idiomas.`,erro:e<344?`Mais do que isso. Lembre que a conta inclui os lançamentos PARCIAIS — um idioma que recebeu só um livro já entra.`:`Menos do que isso. A Bíblia inteira, somando todas as traduções que existem, passa de três mil idiomas; a conta aqui é só da Tradução do Novo Mundo.`}),acerto:`344 idiomas, inteira ou em parte, e 257.854.271 exemplares produzidos até a última contagem oficial. O "em parte" não é detalhe: é o método. Assim como o texto inglês saiu aos pedaços entre 1950 e 1961, um idioma novo hoje costuma receber primeiro as Escrituras Gregas ou alguns livros, e o resto vem depois. Somando todas as traduções que existem no mundo, a Bíblia já está disponível, inteira ou em parte, em mais de 3.000 idiomas. E o Nome voltou com ela: traduções em mais de 300 idiomas usam o nome divino nas Escrituras Gregas Cristãs.`},{id:`juizo`,fase:`juizo`,titulo:`Vinte e cinco séculos depois, o que se pode dizer?`,pergunta:`Você percorreu a linha inteira: cópias conferidas umas contra as outras, uma tradução grega antes de Cristo, um nome que sai dos manuscritos no século 4, mil anos de latim, homens que morreram para pôr o texto na língua do povo, e 344 idiomas hoje. Qual conclusão o conjunto sustenta?`,verso:`Isaías 40:8; Mateus 6:9`,entrada:`escolha`,opcoes:[{id:`corrompida`,rotulo:`O texto foi corrompido a ponto de não dar mais para confiar nele`,nota:`Tanta cópia, tanta tradução.`},{id:`intacta`,rotulo:`Chegou intacta em tudo — inclusive o Nome, em toda tradução`,nota:`Nada se perdeu pelo caminho.`},{id:`restaurar`,rotulo:`A mensagem chegou íntegra; o Nome foi tirado por tradutores — e é restaurável`,nota:`Porque está documentado onde ele estava.`}],correta:`restaurar`,erros:{corrompida:`Isso contradiz o que você mesmo verificou no primeiro passo. Rolos mil anos mais antigos, comparados ao texto massorético, mostram variações de fraseologia e nenhuma mudança de sentido. Sobre as Escrituras Gregas, F. F. Bruce observou que as provas de exatidão pesam mais que as de autores clássicos que ninguém sonha em questionar.`,intacta:`A segunda metade não se sustenta. O Nome não está na maioria das Bíblias modernas: copistas o trocaram por Ký·ri·os a partir do século 4, e os tradutores que vieram depois herdaram e mantiveram a troca. Dizer que nada se perdeu é apagar justamente o que se perdeu.`},acerto:`É a leitura que os fatos permitem, e ela tem duas metades. Uma: a mensagem atravessou os séculos íntegra, e isso é conferível — por comparação de manuscritos, não por confiança em ninguém. Outra: o nome divino, que ocorre quase 7.000 vezes no texto hebraico, foi removido por decisão humana, e a decisão está datada. Justamente por estar documentada é que ela é reversível: sabe-se ONDE o Nome estava. A Tradução do Novo Mundo o restaura 7.216 vezes, das quais 237 nas Escrituras Gregas Cristãs. Repare que só esse nome foi alterado — nenhum outro nome bíblico recebeu tratamento igual. "A palavra do nosso Deus permanece para sempre." (Isaías 40:8)`}],{comp:`trajetoria_biblia`,aspecto:`16/10`}),vg={am:{nome:`metal alcalino`,cor:`#b3402a`},at:{nome:`metal alcalino-terroso`,cor:`#c06414`},mt:{nome:`metal de transição`,cor:`#7b4ab0`},pt:{nome:`metal pós-transição`,cor:`#3d7a8a`},sm:{nome:`semimetal`,cor:`#3d8a46`},nm:{nome:`não metal`,cor:`#2e6fc2`},hl:{nome:`halogênio`,cor:`#0d8a96`},gn:{nome:`gás nobre`,cor:`#8a4ab0`},ln:{nome:`lantanídeo`,cor:`#c23a7a`},ac:{nome:`actinídeo`,cor:`#b03030`}},yg={s:{nome:`sólido a 25 °C`,icone:`box`},l:{nome:`líquido a 25 °C`,icone:`droplet-half`},g:{nome:`gasoso a 25 °C`,icone:`cloud`},"?":{nome:`estado previsto`,icone:`help-circle`}},bg=[[`H`,`hidrogênio`,1.008,`nm`,`g`,`1`],[`He`,`hélio`,4.003,`gn`,`g`,`2`],[`Li`,`lítio`,6.94,`am`,`s`,`2,1`],[`Be`,`berílio`,9.012,`at`,`s`,`2,2`],[`B`,`boro`,10.81,`sm`,`s`,`2,3`],[`C`,`carbono`,12.011,`nm`,`s`,`2,4`],[`N`,`nitrogênio`,14.007,`nm`,`g`,`2,5`],[`O`,`oxigênio`,15.999,`nm`,`g`,`2,6`],[`F`,`flúor`,18.998,`hl`,`g`,`2,7`],[`Ne`,`neônio`,20.18,`gn`,`g`,`2,8`],[`Na`,`sódio`,22.99,`am`,`s`,`2,8,1`],[`Mg`,`magnésio`,24.305,`at`,`s`,`2,8,2`],[`Al`,`alumínio`,26.982,`pt`,`s`,`2,8,3`],[`Si`,`silício`,28.085,`sm`,`s`,`2,8,4`],[`P`,`fósforo`,30.974,`nm`,`s`,`2,8,5`],[`S`,`enxofre`,32.06,`nm`,`s`,`2,8,6`],[`Cl`,`cloro`,35.45,`hl`,`g`,`2,8,7`],[`Ar`,`argônio`,39.95,`gn`,`g`,`2,8,8`],[`K`,`potássio`,39.098,`am`,`s`,`2,8,8,1`],[`Ca`,`cálcio`,40.078,`at`,`s`,`2,8,8,2`],[`Sc`,`escândio`,44.956,`mt`,`s`,`2,8,9,2`],[`Ti`,`titânio`,47.867,`mt`,`s`,`2,8,10,2`],[`V`,`vanádio`,50.942,`mt`,`s`,`2,8,11,2`],[`Cr`,`cromo`,51.996,`mt`,`s`,`2,8,13,1`],[`Mn`,`manganês`,54.938,`mt`,`s`,`2,8,13,2`],[`Fe`,`ferro`,55.845,`mt`,`s`,`2,8,14,2`],[`Co`,`cobalto`,58.933,`mt`,`s`,`2,8,15,2`],[`Ni`,`níquel`,58.693,`mt`,`s`,`2,8,16,2`],[`Cu`,`cobre`,63.546,`mt`,`s`,`2,8,18,1`],[`Zn`,`zinco`,65.38,`mt`,`s`,`2,8,18,2`],[`Ga`,`gálio`,69.723,`pt`,`s`,`2,8,18,3`],[`Ge`,`germânio`,72.63,`sm`,`s`,`2,8,18,4`],[`As`,`arsênio`,74.922,`sm`,`s`,`2,8,18,5`],[`Se`,`selênio`,78.971,`nm`,`s`,`2,8,18,6`],[`Br`,`bromo`,79.904,`hl`,`l`,`2,8,18,7`],[`Kr`,`criptônio`,83.798,`gn`,`g`,`2,8,18,8`],[`Rb`,`rubídio`,85.468,`am`,`s`,`2,8,18,8,1`],[`Sr`,`estrôncio`,87.62,`at`,`s`,`2,8,18,8,2`],[`Y`,`ítrio`,88.906,`mt`,`s`,`2,8,18,9,2`],[`Zr`,`zircônio`,91.224,`mt`,`s`,`2,8,18,10,2`],[`Nb`,`nióbio`,92.906,`mt`,`s`,`2,8,18,12,1`],[`Mo`,`molibdênio`,95.95,`mt`,`s`,`2,8,18,13,1`],[`Tc`,`tecnécio`,97,`mt`,`s`,`2,8,18,13,2`],[`Ru`,`rutênio`,101.07,`mt`,`s`,`2,8,18,15,1`],[`Rh`,`ródio`,102.906,`mt`,`s`,`2,8,18,16,1`],[`Pd`,`paládio`,106.42,`mt`,`s`,`2,8,18,18`],[`Ag`,`prata`,107.868,`mt`,`s`,`2,8,18,18,1`],[`Cd`,`cádmio`,112.414,`mt`,`s`,`2,8,18,18,2`],[`In`,`índio`,114.818,`pt`,`s`,`2,8,18,18,3`],[`Sn`,`estanho`,118.71,`pt`,`s`,`2,8,18,18,4`],[`Sb`,`antimônio`,121.76,`sm`,`s`,`2,8,18,18,5`],[`Te`,`telúrio`,127.6,`sm`,`s`,`2,8,18,18,6`],[`I`,`iodo`,126.904,`hl`,`s`,`2,8,18,18,7`],[`Xe`,`xenônio`,131.293,`gn`,`g`,`2,8,18,18,8`],[`Cs`,`césio`,132.905,`am`,`s`,`2,8,18,18,8,1`],[`Ba`,`bário`,137.327,`at`,`s`,`2,8,18,18,8,2`],[`La`,`lantânio`,138.905,`ln`,`s`,`2,8,18,18,9,2`],[`Ce`,`cério`,140.116,`ln`,`s`,`2,8,18,19,9,2`],[`Pr`,`praseodímio`,140.908,`ln`,`s`,`2,8,18,21,8,2`],[`Nd`,`neodímio`,144.242,`ln`,`s`,`2,8,18,22,8,2`],[`Pm`,`promécio`,145,`ln`,`s`,`2,8,18,23,8,2`],[`Sm`,`samário`,150.36,`ln`,`s`,`2,8,18,24,8,2`],[`Eu`,`európio`,151.964,`ln`,`s`,`2,8,18,25,8,2`],[`Gd`,`gadolínio`,157.25,`ln`,`s`,`2,8,18,25,9,2`],[`Tb`,`térbio`,158.925,`ln`,`s`,`2,8,18,27,8,2`],[`Dy`,`disprósio`,162.5,`ln`,`s`,`2,8,18,28,8,2`],[`Ho`,`hólmio`,164.93,`ln`,`s`,`2,8,18,29,8,2`],[`Er`,`érbio`,167.259,`ln`,`s`,`2,8,18,30,8,2`],[`Tm`,`túlio`,168.934,`ln`,`s`,`2,8,18,31,8,2`],[`Yb`,`itérbio`,173.045,`ln`,`s`,`2,8,18,32,8,2`],[`Lu`,`lutécio`,174.967,`ln`,`s`,`2,8,18,32,9,2`],[`Hf`,`háfnio`,178.486,`mt`,`s`,`2,8,18,32,10,2`],[`Ta`,`tântalo`,180.948,`mt`,`s`,`2,8,18,32,11,2`],[`W`,`tungstênio`,183.84,`mt`,`s`,`2,8,18,32,12,2`],[`Re`,`rênio`,186.207,`mt`,`s`,`2,8,18,32,13,2`],[`Os`,`ósmio`,190.23,`mt`,`s`,`2,8,18,32,14,2`],[`Ir`,`irídio`,192.217,`mt`,`s`,`2,8,18,32,15,2`],[`Pt`,`platina`,195.084,`mt`,`s`,`2,8,18,32,17,1`],[`Au`,`ouro`,196.967,`mt`,`s`,`2,8,18,32,18,1`],[`Hg`,`mercúrio`,200.592,`mt`,`l`,`2,8,18,32,18,2`],[`Tl`,`tálio`,204.38,`pt`,`s`,`2,8,18,32,18,3`],[`Pb`,`chumbo`,207.2,`pt`,`s`,`2,8,18,32,18,4`],[`Bi`,`bismuto`,208.98,`pt`,`s`,`2,8,18,32,18,5`],[`Po`,`polônio`,209,`pt`,`s`,`2,8,18,32,18,6`],[`At`,`astato`,210,`hl`,`s`,`2,8,18,32,18,7`],[`Rn`,`radônio`,222,`gn`,`g`,`2,8,18,32,18,8`],[`Fr`,`frâncio`,223,`am`,`s`,`2,8,18,32,18,8,1`],[`Ra`,`rádio`,226,`at`,`s`,`2,8,18,32,18,8,2`],[`Ac`,`actínio`,227,`ac`,`s`,`2,8,18,32,18,9,2`],[`Th`,`tório`,232.038,`ac`,`s`,`2,8,18,32,18,10,2`],[`Pa`,`protactínio`,231.036,`ac`,`s`,`2,8,18,32,20,9,2`],[`U`,`urânio`,238.029,`ac`,`s`,`2,8,18,32,21,9,2`],[`Np`,`neptúnio`,237,`ac`,`s`,`2,8,18,32,22,9,2`],[`Pu`,`plutônio`,244,`ac`,`s`,`2,8,18,32,24,8,2`],[`Am`,`amerício`,243,`ac`,`s`,`2,8,18,32,25,8,2`],[`Cm`,`cúrio`,247,`ac`,`s`,`2,8,18,32,25,9,2`],[`Bk`,`berquélio`,247,`ac`,`s`,`2,8,18,32,27,8,2`],[`Cf`,`califórnio`,251,`ac`,`s`,`2,8,18,32,28,8,2`],[`Es`,`einstêinio`,252,`ac`,`s`,`2,8,18,32,29,8,2`],[`Fm`,`férmio`,257,`ac`,`?`,`2,8,18,32,30,8,2`],[`Md`,`mendelévio`,258,`ac`,`?`,`2,8,18,32,31,8,2`],[`No`,`nobélio`,259,`ac`,`?`,`2,8,18,32,32,8,2`],[`Lr`,`laurêncio`,266,`ac`,`?`,`2,8,18,32,32,8,3`],[`Rf`,`rutherfórdio`,267,`mt`,`?`,`2,8,18,32,32,10,2`],[`Db`,`dúbnio`,268,`mt`,`?`,`2,8,18,32,32,11,2`],[`Sg`,`seabórgio`,269,`mt`,`?`,`2,8,18,32,32,12,2`],[`Bh`,`bóhrio`,270,`mt`,`?`,`2,8,18,32,32,13,2`],[`Hs`,`hássio`,269,`mt`,`?`,`2,8,18,32,32,14,2`],[`Mt`,`meitnério`,278,`mt`,`?`,`2,8,18,32,32,15,2`],[`Ds`,`darmstádtio`,281,`mt`,`?`,`2,8,18,32,32,16,2`],[`Rg`,`roentgênio`,282,`mt`,`?`,`2,8,18,32,32,17,2`],[`Cn`,`copernício`,285,`mt`,`?`,`2,8,18,32,32,18,2`],[`Nh`,`nihônio`,286,`pt`,`?`,`2,8,18,32,32,18,3`],[`Fl`,`fleróvio`,289,`pt`,`?`,`2,8,18,32,32,18,4`],[`Mc`,`moscóvio`,290,`pt`,`?`,`2,8,18,32,32,18,5`],[`Lv`,`livermório`,293,`pt`,`?`,`2,8,18,32,32,18,6`],[`Ts`,`tenesso`,294,`hl`,`?`,`2,8,18,32,32,18,7`],[`Og`,`oganessônio`,294,`gn`,`?`,`2,8,18,32,32,18,8`]],xg={1:`É o combustível de estrelas como o Sol — e essencial para a vida.`,2:`Gás nobre: não reage com quase nada. Enche balões e resfria os ímãs dos hospitais.`,6:`Os átomos de carbono representam 20% do peso de todos os organismos vivos.`,7:`Compõe 78% do ar que você respira — e 1,4% dos átomos do seu corpo.`,8:`Dois átomos de hidrogênio + um de oxigênio = uma molécula da preciosa água.`,11:`Metal que explode na água — mas, unido ao cloro, vira o sal da sua cozinha.`,14:`O coração da areia, do vidro e dos chips de computador.`,17:`Gás venenoso sozinho — mas, unido ao sódio, tempera a sua comida.`,21:`Mendeleyev previu este elemento antes de ele ser descoberto — e acertou.`,26:`Está na hemoglobina: é ele que carrega o oxigênio no seu sangue.`,29:`Os fios da sua casa: poucos metais conduzem eletricidade tão bem.`,31:`“As predições de Mendeleyev sobre o gálio se mostraram bem exatas.” (Chemistry, 1995)`,32:`Mendeleyev previu este elemento pela LACUNA 32 da tabela — cor, peso, densidade e ponto de fusão.`,47:`De todos os metais, é o que melhor conduz calor e eletricidade.`,79:`Sólido, dourado, precioso — e o vizinho de número 80 é um líquido prateado.`,80:`Um próton e um elétron a mais que o ouro — e virou um líquido prateado.`,92:`O último elemento que em geral ocorre naturalmente na Terra.`,99:`Batizado em homenagem a Einstein — produzido em laboratório.`,101:`Homenagem a Mendeleyev, que previu elementos só pela ordem da tabela.`};function Sg(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:0}var Cg=h({viz:{comp:`asa`},preparar:e=>({params:{alvo:f(e.alvo,25),tol:f(e.tol,.5)},controles:[{rotulo:`Envergadura (b)`,prop:`b`,min:f(e.bMin,1),max:f(e.bMax,12),step:.1,suf:` m`},{rotulo:`Área da asa (S)`,prop:`s`,min:f(e.sMin,.5),max:f(e.sMax,8),step:.1,suf:` m²`}],valores:{b:f(e.b0,5),s:f(e.s0,3)}}),medir(e,t){let n=Sg(e,`b`),r=Sg(e,`s`),i=r>0?n*n/r:0,a=Math.abs(i-t.alvo)<=t.tol,o=a?`planeio longo e plano ✔`:i<t.alvo?`asa curta/larga: cai logo no mar`:`passou do alvo — ajuste b e S`;return{ok:a,ar:i,leitura:`Asa longa e estreita plana mais longe. AR = b²/S = ${i.toFixed(1)} (alvo ${t.alvo}) — ${o}`}}}),wg=h({extra:`funcao`,viz:{comp:`funcao`},preparar:e=>({params:{ampAlvo:f(e.ampAlvo,3),faseAlvo:f(e.faseAlvo,90),tol:f(e.tol,.2),tolFase:f(e.tolFase,6)},controles:[{rotulo:`Amplitude (A)`,prop:`a`,min:.5,max:5,step:.1},{rotulo:`Fase (φ)`,prop:`fase`,min:0,max:180,step:1,suf:`°`}],valores:{a:f(e.a0,1),fase:f(e.fase0,0)}}),medir(e,t){let n=Math.abs(Sg(e,`a`)-t.ampAlvo)<=t.tol&&Math.abs(Sg(e,`fase`)-t.faseAlvo)<=t.tolFase;return{ok:n,ampAlvo:t.ampAlvo,faseAlvo:t.faseAlvo,leitura:`Sincronia com o ciclo solar: ${n?`alinhada ✔`:`ajuste A e φ`}`}}}),Tg=h({viz:{comp:`lente`},preparar:e=>({params:{alvo:f(e.alvo,50),tol:f(e.tol,3)},controles:[{rotulo:`Curvatura da lente`,prop:`c`,min:0,max:100,step:1,suf:`%`}],valores:{c:f(e.c0,10)}}),medir(e,t){let n=Math.abs(Sg(e,`c`)-t.alvo)<=t.tol;return{ok:n,leitura:n?`Os raios convergem num único foco ✔`:`Os raios ainda não focam num ponto.`}}}),Eg=h({viz:{comp:`fluxo`},preparar:e=>({params:{alvo:f(e.alvo,35),tol:f(e.tol,3)},controles:[{rotulo:`Espaçamento das ranhuras`,prop:`e`,min:1,max:100,step:1,suf:` µm`}],valores:{e:f(e.e0,80)}}),medir(e,t){let n=Sg(e,`e`),r=Math.round(Math.abs(n-t.alvo)*1.5+5);return{ok:Math.abs(n-t.alvo)<=t.tol,turb:r,leitura:`Turbulência: ${r}%`}}}),Dg=h({extra:`difracao`,viz:{comp:`difracao`},preparar:e=>({params:{alvo:f(e.lambdaAlvo,470),tol:f(e.tol,12)},controles:[{rotulo:`Distância entre fendas (d)`,prop:`d`,min:200,max:800,step:5,suf:` nm`}],valores:{d:f(e.d0,600)}}),medir(e,t){let n=Sg(e,`d`)*.78;return{ok:Math.abs(n-t.alvo)<=t.tol,lambda:n,leitura:`Comprimento de onda refletido ≈ ${n.toFixed(0)} nm (azul ≈ ${t.alvo})`}}}),Og=h({extra:`ondas`,viz:{comp:`ondas`},preparar:e=>({params:{tol:f(e.tol,4)},controles:[{rotulo:`Defasagem das franjas`,prop:`fase`,min:0,max:360,step:1,suf:`°`}],valores:{fase:f(e.fase0,30)}}),medir(e,t){let n=Sg(e,`fase`),r=Math.round(Math.abs(2*Math.cos(n*Math.PI/360))*50);return{ok:r<=t.tol,ruido:r,leitura:`Ruído aerodinâmico: ${r}%`}}}),kg=h({extra:`fractal`,viz:{comp:`fractal`},preparar:e=>({params:{base:f(e.base,1),alvoArea:f(e.alvoArea,256)},controles:[{rotulo:`Nível de subdivisão`,prop:`n`,min:0,max:12,step:1}],valores:{n:p(e.n0,0)}}),medir(e,t){let n=t.base*2**Sg(e,`n`);return{ok:n>=t.alvoArea,area:n,leitura:`Área de contato: ${m(n)}× a base`}}}),Ag=h({extra:`terra`,viz:{comp:`terra3d`},preparar:e=>({params:{alvo:f(e.alvo,23.5),tol:f(e.tol,3)},controles:[{rotulo:`Inclinação do eixo`,prop:`t`,min:0,max:45,step:.5,suf:`°`}],valores:{t:f(e.t0,0)}}),medir(e,t){let n=Sg(e,`t`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Inclinação de ~23,5°: estações equilibradas e clima ameno na maior parte da Terra ✔`:n<t.alvo-t.tol?`Eixo muito reto: quase sem estações — polos congelam e trópicos fervem.`:`Eixo muito inclinado: estações extremas e clima instável.`}}}),jg=h({extra:`atomo`,viz:{comp:`atomo`},preparar:e=>({params:{raioCm:f(e.raioCm,3.5),razao:f(e.razao,86e3),alvo:f(e.alvo,3e3),tol:f(e.tol,150)},controles:[{rotulo:`Distância do elétron (na escala da bola)`,prop:`d`,min:0,max:p(e.dMax,5e3),step:50,suf:` m`}],valores:{d:p(e.d0,200)}}),medir(e,t){let n=Sg(e,`d`),r=Math.abs(n-t.alvo)<=t.tol,i=t.raioCm/100,a=n>0?(i/n)**3:1,o=n>0?Math.round(-Math.log10(a)):0,s=`${te(t.raioCm)} cm × ${m(t.razao)} ≈ ${m(Math.round(i*t.razao))} m`;return{ok:r,exp:o,frac:a,d:n,alvo:t.alvo,raioCm:t.raioCm,razao:t.razao,leitura:r?`Elétron a ${m(n)} m (${s}) — o núcleo ocupa 1 parte em 10^${o} do volume: o átomo é quase todo VAZIO. ✔`:n<t.alvo?`Elétron a ${m(n)} m — perto demais. O átomo tem cerca de ${m(t.razao)} vezes o raio do núcleo: multiplique.`:`Elétron a ${m(n)} m — longe demais. Refaça a conta: raio da bola × ${m(t.razao)}.`}}}),Mg=h({extra:`microscopio`,viz:{comp:`microscopio`},preparar:e=>({params:{alvo:f(e.alvo,8)},controles:[{rotulo:`Ampliação (10ˣ)`,prop:`x`,min:0,max:f(e.xMax,9),step:.1}],valores:{x:f(e.x0,0)}}),medir(e,t){let n=Sg(e,`x`),r=m(Math.round(10**n));return{ok:n>=t.alvo,x:n,leitura:n<1?`${r}× — a olho nu: o menor grão que você enxerga já tem mais de 10 bilhões de átomos.`:n<2.5?`${r}× — a gota de água "sem vida" fervilha de criaturas que se mexem.`:n<4?`${r}× — uma célula: fábricas, transporte e uma biblioteca de instruções lá dentro.`:n<6?`${r}× — moléculas: átomos ligados numa ordem exata (a hélice do DNA).`:n<8?`${r}× — o átomo: uma nuvem de elétrons girando bilhões de vezes por milissegundo.`:`${r}× — o núcleo: prótons e nêutrons, ~100.000 vezes menores que o átomo. Um próton pesa como 1.840 elétrons. ✔`}}}),Ng=h({extra:`relatividade`,viz:{comp:`relatividade`},preparar:e=>({params:{alvoGama:f(e.alvoGama,2),tol:f(e.tol,.06),c:f(e.c,299792)},controles:[{rotulo:`Velocidade da nave (fração de c)`,prop:`v`,min:0,max:99.5,step:.1,suf:`% de c`}],valores:{v:f(e.v0,10)}}),medir(e,t){let n=Sg(e,`v`)/100,r=1/Math.sqrt(Math.max(1e-9,1-n*n)),i=Math.abs(r-t.alvoGama)<=t.tol,a=m(Math.round(n*t.c)),o=te(12/r),s=`${a} km/s · γ = ${te(r,2)} — 12 meses na Terra = ${o} meses na nave.`;return{ok:i,gama:r,beta:n,leitura:i?`${s} O tempo da nave anda pela METADE — e a energia dela também dobrou (E = γmc²). ✔`:r<t.alvoGama?`${s} Acelere: perto de c o relógio de bordo desacelera de vez.`:`${s} Passou do ponto — o relógio da nave ficou lento demais.`}}}),Pg=h({extra:`universo_escuro`,viz:{comp:`universo_escuro`},preparar:e=>({params:{alvos:{comum:f(e.comum,4),escura:f(e.escura,22),energia:f(e.energia,74)},tol:f(e.tol,1.5)},controles:[{rotulo:`Matéria comum (o que se vê)`,prop:`comum`,min:0,max:100,step:1,suf:`%`},{rotulo:`Matéria escura (segura as galáxias)`,prop:`escura`,min:0,max:100,step:1,suf:`%`},{rotulo:`Energia escura (afasta as galáxias)`,prop:`energia`,min:0,max:100,step:1,suf:`%`}],valores:{comum:p(e.comum0,60),escura:p(e.escura0,30),energia:p(e.energia0,10)}}),medir(e,t){let n=Sg(e,`comum`),r=Sg(e,`escura`),i=Sg(e,`energia`),a=n+r+i,o=(e,n)=>Math.abs(e-n)<=t.tol,s=o(n,t.alvos.comum),c=o(r,t.alvos.escura),l=o(i,t.alvos.energia),u=s&&c&&l,d=u?`Receita do cosmo: ${t.alvos.comum}% comum · ${t.alvos.escura}% escura · ${t.alvos.energia}% energia escura. Tudo o que se vê é só ${t.alvos.comum}% — 96% do universo continua um mistério. ✔`:Math.abs(a-100)>3?`As partes somam ${Math.round(a)}% — o universo inteiro tem de dar 100%.`:c?l?`Matéria comum fora da conta: estrelas, planetas e nós somos só uma fração do total.`:i<t.alvos.energia?`Energia escura de menos: o universo para de se expandir e começa a colapsar.`:`Energia escura demais: a expansão dispara e rasga as galáxias.`:r<t.alvos.escura?`Matéria escura de menos: sem essa "cola" invisível, as galáxias giram tão rápido que se despedaçam.`:`Matéria escura demais: a gravidade freia tudo e as galáxias se enrolam.`;return{ok:u,soma:a,alvos:t.alvos,leitura:d}}}),Fg=h({extra:`desconto`,viz:{comp:`desconto`},preparar:e=>({params:{preco:f(e.preco,35),alvo:f(e.alvo,26.25),tol:f(e.tol,.3)},controles:[{rotulo:`Desconto (+) ou acréscimo (−)`,prop:`aj`,min:-100,max:100,step:1,suf:`%`}],valores:{aj:p(e.aj0,0)}}),medir(e,t){let n=Math.trunc(Sg(e,`aj`)),r=(100-n)/100,i=t.preco*r,a=t.preco-i,o=Math.abs(i-t.alvo)<=t.tol,s=`R$ ${t.preco.toFixed(0)} × ${te(r,2)} = R$ ${te(i,2)}`,c=n>0?`Desconto de ${n}%: ${s} — você economiza R$ ${te(a,2)}.`:n<0?`Acréscimo de ${-n}%: ${s} — você paga R$ ${te(-a,2)} a mais.`:`Sem ajuste: você paga o preço cheio, R$ ${te(t.preco,2)}.`;return{ok:o,pago:i,delta:a,fator:r,aj:n,preco:t.preco,alvo:t.alvo,leitura:o?`${c} ✔`:c}}});function Ig(e,t){let n=t*Math.PI/180,r={x:-Math.cos(n),y:Math.sin(n)},i={x:e.start[0],y:e.start[1]},a=[[i.x,i.y]],o=e.W/2,s=e.H/2;for(let t=0;t<=e.maxB;t++){let n=r.x>0?(o-i.x)/r.x:r.x<0?(-o-i.x)/r.x:1/0,c=r.y>0?(s-i.y)/r.y:r.y<0?(-s-i.y)/r.y:1/0,l=Math.min(n,c),u=e.target[0]-i.x,d=e.target[1]-i.y,ee=Math.max(0,Math.min(l,u*r.x+d*r.y)),f=i.x+r.x*ee,te=i.y+r.y*ee;if(Math.hypot(e.target[0]-f,e.target[1]-te)<=e.R)return a.push([f,te]),{pts:a,ok:!0,bounce:t};i={x:i.x+r.x*l,y:i.y+r.y*l},a.push([i.x,i.y]),n<c?r.x*=-1:r.y*=-1}return{pts:a,ok:!1,bounce:-1}}var Lg=h({extra:`bilhar`,viz:{comp:`bilhar`},preparar(e){let t=Array.isArray(e.start)?e.start:[8,-3.5],n=Array.isArray(e.target)?e.target:[-7,-2];return{params:{W:f(e.W,20),H:f(e.H,12),R:f(e.R,1.25),maxB:p(e.maxB,4),start:[f(t[0],8),f(t[1],-3.5)],target:[f(n[0],-7),f(n[1],-2)]},controles:[{rotulo:`Ângulo da tacada`,prop:`ang`,min:f(e.angMin,12),max:f(e.angMax,80),step:.5,suf:`°`}],valores:{ang:f(e.ang0,30)}}},medir(e,t){let n=Sg(e,`ang`),r=Ig(t,n),i=r.ok?r.bounce===0?`Na bucha! A esfera foi direto ao alvo. ✔`:`Encaçapou após ${r.bounce} ${r.bounce===1?`tabela`:`tabelas`}! Ângulo de entrada = ângulo de saída. ✔`:`A esfera passa longe do alvo — gire o ângulo e siga a linha de previsão até acertar.`;return{ok:r.ok,caminho:r.pts,bounce:r.bounce,ang:n,start:t.start,target:t.target,W:t.W,H:t.H,R:t.R,leitura:i}}}),Rg=[{p:50,nome:`Oitava`,nota:`Dó⁸`,razao:`2 : 1`,frac:`1/2`},{p:60,nome:`Sexta`,nota:`Lá`,razao:`5 : 3`,frac:`3/5`},{p:200/3,nome:`Quinta`,nota:`Sol`,razao:`3 : 2`,frac:`2/3`},{p:75,nome:`Quarta`,nota:`Fá`,razao:`4 : 3`,frac:`3/4`},{p:80,nome:`Terça`,nota:`Mi`,razao:`5 : 4`,frac:`4/5`},{p:100,nome:`Uníssono`,nota:`Dó`,razao:`1 : 1`,frac:`1/1`}],zg=h({extra:`musica`,viz:{comp:`musica`},preparar:e=>({params:{alvo:f(e.alvo,50),tol:f(e.tol,1.5),tolNota:f(e.tolNota,1.2)},controles:[{rotulo:`Comprimento que vibra (fração da corda)`,prop:`comp`,min:f(e.compMin,40),max:f(e.compMax,100),step:.5,suf:`%`}],valores:{comp:f(e.comp0,88)}}),medir(e,t){let n=Sg(e,`comp`),r=Rg[0],i=1/0;for(let e of Rg){let t=Math.abs(n-e.p);t<i&&(i=t,r=e)}let a=i<=t.tolNota,o=Math.abs(n-t.alvo)<=t.tol;return{ok:o,leitura:o?`Oitava! A corda dividida pela metade (1/2) soa a MESMA nota, o dobro da frequência (2 : 1). Matemática pura em forma de som ✔`:a&&r!==void 0?`Que acorde bonito — ${r.nome} (${r.nota}), razão ${r.razao} (fração ${r.frac}). Mas o desafio pede a OITAVA: divida a corda pela metade (1/2).`:`A corda "arranha" — este comprimento não é uma fração simples. Deslize até uma divisão exata (uma das notas marcadas).`,comp:n,alvo:t.alvo,consonante:a,nota:a?r:null,notas:Rg}}}),Bg=h({extra:`proteina`,viz:{comp:`proteina`,aspecto:`2/1`},preparar:e=>({params:{aaFunc:p(e.aaFunc,100),expUniverso:p(e.expUniverso,110)},controles:[{rotulo:`Aminoácidos na cadeia`,prop:`aa`,min:2,max:p(e.aaMax,300),step:1},{rotulo:`Tipos de aminoácidos no sorteio`,prop:`tipos`,min:2,max:20,step:1},{rotulo:`Tentativas do acaso (10ˣ)`,prop:`exp`,min:0,max:p(e.expMax,150),step:1}],valores:{aa:p(e.aa0,150),tipos:p(e.tipos0,20),exp:p(e.exp0,60)}}),medir(e,t){let n=Sg(e,`aa`),r=Sg(e,`tipos`),i=Sg(e,`exp`),a=n*Math.log10(2*r),o=i-a,s=o>=0,c=n>=t.aaFunc&&r>=20,l=e=>`10^${Math.round(e)}`,u=r<20?`só ${r} tipos de aminoácido (a vida usa os 20)`:`curta demais — ${n} aminoácidos (uma proteína funcional tem ~${t.aaFunc}+)`;return{ok:s,D:a,saldo:o,real:c,aa:n,tipos:r,exp:i,leitura:s?`1 em ${l(a)} — com ${l(i)} tentativas o acaso alcançaria. Mas isto NÃO é uma proteína funcional: ${u}. Uma proteína real precisa dos 20 tipos e de ~${t.aaFunc}+ aminoácidos. ✔`:`${c?`Proteína funcional (${n} aminoácidos, 20 tipos): 1 em ${l(a)}.`:`1 em ${l(a)}.`} Nem ${l(i)} tentativas bastam — faltam ${l(a-i)} vezes. (O universo inteiro desde o Big Bang daria ~${l(t.expUniverso)} tentativas.) Teve um Projeto?`,relogio:{necessarias:Math.round(a),disponiveis:i,faltam:Math.max(0,Math.round(a-i)),anos:Math.max(0,Math.round(a-16.5)),concluido:s}}}}),Vg=h({extra:`elementos`,viz:{comp:`elementos`,aspecto:`16/11`,dica:n.criacao.atomoDica},preparar:e=>({params:{alvo:p(e.alvo,79)},controles:[{rotulo:`Prótons no núcleo (número atômico Z)`,prop:`p`,min:1,max:p(e.pMax,118),step:1,botoes:!0}],valores:{p:p(e.p0,1)}}),medir(e,t){let n=Math.min(118,Math.max(1,Math.trunc(Sg(e,`p`)))),r=bg[n-1],i=bg[t.alvo-1];if(r===void 0||i===void 0)return{ok:!1,leitura:``,z:n};let[a,o,s,c,l,u]=r,d=n===t.alvo,ee=n>=93,f=`${ee?`[${s}]`:s.toLocaleString(`pt-BR`,{maximumFractionDigits:3})} u`,te=xg[n]??(ee?`Produzido em laboratório — e, como era de se esperar, encaixou-se no padrão da tabela periódica.`:``),p=d?``:n<t.alvo?` Sua missão: o ${i[1]} (${i[0]}), com ${t.alvo} prótons — faltam ${t.alvo-n}.`:` Passou do ${i[1]}: volte ${n-t.alvo} próton${n-t.alvo>1?`s`:``}.`,ne=t.alvo===79?` Um próton a mais (80) e seria o mercúrio — um líquido prateado.`:``;return{ok:d,z:n,simbolo:a,nome:o,massaTxt:f,fato:te,camadas:u,catNome:vg[c]?.nome??c,catCor:vg[c]?.cor??`#6c757d`,estadoNome:yg[l]?.nome??``,estadoIcone:yg[l]?.icone??`help-circle`,camadasTxt:u.split(`,`).join(` · `),leitura:d?`${t.alvo} prótons: ${o.toUpperCase()} (${a}).${ne} Cada próton muda tudo, e a ordem 1→92 não tem lacunas. ✔`:`Z = ${n}: ${o} (${a}), ${f}.${p}`}}}),Hg=[{id:`inicio`,estagio:0,rotulo:`O início`,verso:`Gênesis 1:1`,texto:`Os céus e a Terra são criados — o Universo já existia antes dos dias criativos.`,terra:{luz:.15,nuvens:.35,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`escuro`,estagio:1,rotulo:`Escuridão`,verso:`Gênesis 1:2`,texto:`A Terra está coberta de água e envolta em trevas — nenhuma luz chega à superfície.`,terra:{luz:.05,nuvens:.98,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`dia1`,estagio:2,rotulo:`1º dia`,verso:`Gênesis 1:3-5`,texto:`A luz difusa começa a atravessar a atmosfera; separa-se o dia da noite.`,terra:{luz:.5,nuvens:.8,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`dia2`,estagio:3,rotulo:`2º dia`,verso:`Gênesis 1:6-8`,texto:`Forma-se uma expansão (o “Céu”) entre as águas de baixo e o manto de vapor de cima.`,terra:{luz:.6,nuvens:.6,terraFirme:!1,verde:!1,sol:!1,vida:0,humanos:!1}},{id:`dia3`,estagio:4,rotulo:`3º dia`,verso:`Gênesis 1:9-13`,texto:`As águas baixam, surge o solo seco e a vegetação começa a brotar.`,terra:{luz:.75,nuvens:.45,terraFirme:!0,verde:!0,sol:!1,vida:0,humanos:!1}},{id:`dia4`,estagio:5,rotulo:`4º dia`,verso:`Gênesis 1:14-19`,texto:`O céu clareia o bastante para o Sol e a Lua ficarem visíveis da superfície.`,terra:{luz:1,nuvens:.2,terraFirme:!0,verde:!0,sol:!0,vida:0,humanos:!1}},{id:`dia5`,estagio:6,rotulo:`5º dia`,verso:`Gênesis 1:20-23`,texto:`Enchem-se os mares e os céus de criaturas marinhas e de aves.`,terra:{luz:1,nuvens:.18,terraFirme:!0,verde:!0,sol:!0,vida:1,humanos:!1}},{id:`dia6`,estagio:7,rotulo:`6º dia`,verso:`Gênesis 1:24-31`,texto:`Surgem os animais terrestres e, por fim, o primeiro casal humano.`,terra:{luz:1,nuvens:.15,terraFirme:!0,verde:!0,sol:!0,vida:1,humanos:!0}}],Ug={agua:{nome:`Água`,cor:`#3aa0ff`,etapas:[{id:`a1`,icone:`sol`,curto:`Evaporação`,texto:`O Sol evapora a água dos mares e rios, que sobe purificada para a atmosfera.`},{id:`a2`,icone:`nuvem`,curto:`Condensação`,texto:`Lá no alto, o vapor se condensa e forma as nuvens.`},{id:`a3`,icone:`chuva`,curto:`Precipitação`,texto:`As nuvens soltam chuva, granizo ou neve, que volta ao solo — pronta para evaporar de novo.`}]},carbono:{nome:`Carbono e oxigênio`,cor:`#3ba054`,etapas:[{id:`c1`,icone:`humano`,curto:`Você exala`,texto:`Você e os animais exalam gás carbônico (CO₂) a cada respiração.`},{id:`c2`,icone:`planta`,curto:`Fotossíntese`,texto:`As plantas absorvem esse CO₂ e, com a luz do Sol, produzem carboidratos e oxigênio.`},{id:`c3`,icone:`o2`,curto:`Você inala`,texto:`Você inala o oxigênio que as plantas liberam — e o ciclo recomeça.`}]},nitrogenio:{nome:`Nitrogênio`,cor:`#a06fd8`,etapas:[{id:`n1`,icone:`raio`,curto:`Fixação`,texto:`Os raios convertem o nitrogênio do ar (quase 80% da atmosfera) em compostos que as plantas absorvem.`},{id:`n2`,icone:`planta`,curto:`Absorção`,texto:`As plantas transformam esses compostos em moléculas orgânicas; os animais que as comem também absorvem nitrogênio.`},{id:`n3`,icone:`bacteria`,curto:`Decomposição`,texto:`Quando plantas e animais morrem, bactérias os decompõem e devolvem o nitrogênio ao solo e ao ar.`}]}};function Wg(e,t){if(t.length!==e.length)return!1;let n=e.indexOf(t[0]??``);return n<0?!1:t.every((t,r)=>t===e[(n+r)%e.length])}function Gg(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:0}var Kg={arquetipo:`numerico`,criar(e){let t=f(e.resposta,21),r={arquetipo:`numerico`,extra:`sequencia`,viz:{comp:`filotaxia`,dica:`O Sol ilumina de cima: pelo ângulo áureo (137,5°) nenhuma semente faz sombra na outra. Ao acertar, a flor desabrocha em pétalas.`},campos:[{rotulo:n.criacao.proximoNumero,prop:`n`}],valores:{n:0}},i=Array.isArray(e.sequencia)?e.sequencia:[3,5,8,13],a=f(e.angulo,137.5);return{puzzle:r,info:()=>({ok:Gg(r.valores,`n`)===t,sequencia:i,angulo:a,leitura:``}),verificar:()=>Gg(r.valores,`n`)===t?ie:{tipo:`erro`,mensagem:n.criacao.erro}}}},qg={arquetipo:`escolha`,criar(e){let t=typeof e.correta==`string`?e.correta:`hexagono`,r={arquetipo:`escolha`,viz:{comp:`tesselacao`},valores:{},opcoes:Array.isArray(e.opcoes)?e.opcoes:[{id:`triangulo`,rotulo:`Triângulos`,nota:`encaixam, mas gastam mais material`},{id:`quadrado`,rotulo:`Quadrados`,nota:`encaixam, resistência menor`},{id:`circulo`,rotulo:`Círculos`,nota:`≈ 21,46% de área vazia`},{id:`hexagono`,rotulo:`Hexágonos`,nota:`0% de desperdício, perímetro mínimo`}],escolhido:null};return{puzzle:r,info:()=>({ok:r.escolhido===t,correta:t,leitura:``}),verificar:()=>r.escolhido===null||r.escolhido===void 0?{tipo:`erro`,mensagem:n.criacao.escolha}:r.escolhido===t?ie:{tipo:`erro`,mensagem:n.criacao.erro}}}},Jg=h({viz:{comp:`balanca`},preparar(e){let t=Math.max(1,p(e.a,2)),r=p(e.b,3),i=p(e.c,11),a=(i-r)/t;return{params:{a:t,b:r,c:i},controles:[{rotulo:n.criacao.equilValorX,prop:`x`,min:0,max:Math.max(p(e.xMax,10),Math.ceil(a)+2,2),step:1}],valores:{x:p(e.x0,0)}}},medir(e,t){let r=Gg(e,`x`),i=t.a*r+t.b,a=i===t.c;return{ok:a,esq:i,dir:t.c,x:r,a:t.a,b:t.b,c:t.c,leitura:a?n.criacao.equilOk(t.c):i<t.c?n.criacao.equilPendeDir:n.criacao.equilPendeEsq}}}),Yg={arquetipo:`pares`,criar(e){let t=Array.isArray(e.fitaA)?e.fitaA:[`A`,`T`,`C`,`G`,`A`,`C`,`G`,`T`],r=Array.isArray(e.fitaB)?e.fitaB:[`T`,`A`,`G`,`C`,`T`,`C`,`C`,`A`],i={A:`T`,T:`A`,C:`G`,G:`C`},a=[];t.forEach((e,t)=>{i[e]!==r[t]&&a.push(t)});let o={arquetipo:`pares`,viz:{comp:`dna`},valores:{},colunas:t.map((e,t)=>({a:e,b:r[t]??``})),selecionados:[]},s=()=>{let e=[...o.selecionados??[]].sort((e,t)=>e-t),t=[...a].sort((e,t)=>e-t);return e.length===t.length&&e.every((e,n)=>e===t[n])};return{puzzle:o,info:()=>({ok:s(),erros:a,leitura:``}),verificar:()=>s()?ie:{tipo:`erro`,mensagem:n.criacao.paresErro}}}};function Xg(e,t){let n=1/0,r=(i,a,o)=>{if(!(o>=n)){if(i.length===0){let r=a===null?e:t[a];r!==void 0&&(n=Math.min(n,o+ne(r,e)));return}for(let n=0;n<i.length;n++){let s=i[n];if(s===void 0)continue;let c=t[s],l=a===null?e:t[a];c!==void 0&&l!==void 0&&r(i.filter((e,t)=>t!==n),s,o+ne(l,c))}}};return r(t.map((e,t)=>t),null,0),n===1/0?0:n}var Zg={arquetipo:`rota`,criar(e){let t=(Array.isArray(e.pontos)?e.pontos:[[15,25],[80,15],[50,50],[20,80],[85,75],[55,90]]).map(e=>[f(e[0],0),f(e[1],0)]),r=Array.isArray(e.colmeia)?e.colmeia:[50,8],i=[f(r[0],50),f(r[1],8)],a=Xg(i,t),o=f(e.tol,1.05),s={arquetipo:`rota`,valores:{},pontos:t,colmeia:i,otima:a,ordemPontos:[],dist:0};return{puzzle:s,info:()=>({ok:(s.dist??0)>0&&(s.dist??0)<=a*o,dist:s.dist??0,otima:a,leitura:``}),verificar:()=>(s.ordemPontos??[]).length===t.length?(s.dist??0)<=a*o?{tipo:`ok`,mensagem:n.criacao.rotaOtima}:{tipo:`erro`,mensagem:n.criacao.rotaLonga}:{tipo:`erro`,mensagem:n.criacao.rotaIncompleta}}}};function Qg(e){let t=e.pontos??[],n=e.colmeia,r=e.ordemPontos??[];if(n===void 0||r.length===0)return 0;let i=t[r[0]??-1];if(i===void 0)return 0;let a=ne(n,i);for(let e=1;e<r.length;e++){let n=t[r[e-1]??-1],i=t[r[e]??-1];n!==void 0&&i!==void 0&&(a+=ne(n,i))}if(r.length===t.length){let e=t[r[r.length-1]??-1];e!==void 0&&(a+=ne(e,n))}return a}var $g={arquetipo:`slider`,criar(e){let t=p(e.alvo,12),n=p(e.lmax,8),r={arquetipo:`slider`,extra:`area`,viz:{comp:`piso`},controles:[{rotulo:`Comprimento`,prop:`c`,min:1,max:n,step:1,suf:` m`},{rotulo:`Largura`,prop:`l`,min:1,max:n,step:1,suf:` m`}],valores:{c:3,l:2}},i=null,a=``;return{puzzle:r,info:()=>{let e=Math.trunc(Gg(r.valores,`c`)),n=Math.trunc(Gg(r.valores,`l`)),i=e*n,a=i===t;return{ok:a,area:i,c:e,l:n,alvo:t,leitura:a?`${e} m × ${n} m = ${i} m² — cobre o piso! ✓`:`${e} m × ${n} m = ${i} m²  (meta: ${t} m²)`}},verificar:()=>{let e=Math.trunc(Gg(r.valores,`c`)),n=Math.trunc(Gg(r.valores,`l`));if(e*n!==t)return{tipo:`erro`,mensagem:`Ainda não são ${t} m². Ajuste o comprimento e a largura.`};let o=[Math.min(e,n),Math.max(e,n)].join(`x`);return i===null?(i=o,a=`${e} × ${n}`,{tipo:`dica`,mensagem:`Boa! ${e} × ${n} = ${t} m². Agora encontre OUTRO jeito, com medidas diferentes, de cobrir ${t} m².`}):o===i?{tipo:`dica`,mensagem:`Esse é o mesmo retângulo de ${a} (só virado). Tente outras medidas para ${t} m².`}:{tipo:`ok`,mensagem:`Perfeito! ${a} e ${e} × ${n} — dois jeitos de cobrir ${t} m². ✓`}}}}},e_={arquetipo:`ordenar`,criar(){let e={arquetipo:`ordenar`,extra:`linha_criacao`,viz:{comp:`terra_criacao`,aspecto:`16/11`,dica:n.criacao.girar},valores:{},itens:re(Hg.map(e=>({id:e.id,texto:e.texto}))),ordem:[]},t=()=>(e.ordem??[]).filter((e,t)=>Hg[t]?.id===e).length,r=()=>{let t=e.ordem??[];return t.length===Hg.length&&t.every((e,t)=>Hg[t]?.id===e)};return{puzzle:e,info:()=>{let n=e.ordem??[],i=n.length>0?Hg.find(e=>e.id===n[n.length-1])??Hg[0]:Hg[0],a=r();return{ok:a,total:Hg.length,colocados:n.length,certos:t(),estagio:i?.estagio??0,rotulo:i?.rotulo??``,verso:i?.verso??``,terra:i?.terra,leitura:a?`A linha do tempo bate com Gênesis 1 — e com a ordem que a ciência descreve. ✔`:n.length<Hg.length?`Toque os eventos na ordem em que aconteceram (${n.length}/${Hg.length}).`:`Todos posicionados — confira a ordem e verifique.`}},verificar:()=>r()?ie:{tipo:`erro`,mensagem:`${t()} de ${Hg.length} no lugar certo — reordene e tente de novo.`}}}},t_={arquetipo:`ciclos`,criar(){let e={};for(let[t,n]of Object.entries(Ug))e[t]={nome:n.nome,cor:n.cor,correta:n.etapas.map(e=>e.id),itens:re(n.etapas.map(e=>({id:e.id,curto:e.curto,texto:e.texto,icone:e.icone}))),ordem:[]};let t={arquetipo:`ciclos`,extra:`ciclos`,viz:{comp:`ciclos`,aspecto:`16/11`,dica:n.criacao.girar},valores:{},ciclos:e,ativo:`agua`},r=Object.keys(e),i=t=>{let n=e[t];return n!==void 0&&Wg(n.correta,n.ordem)};return{puzzle:t,info:()=>{let n=r.filter(i),a=e[t.ativo??`agua`],o=n.length===r.length;if(a===void 0)return{ok:o,leitura:``};let s=a.ordem.map(e=>a.itens.find(t=>t.id===e));return{ok:o,ativo:t.ativo,cor:a.cor,nome:a.nome,completoAtivo:i(t.ativo??`agua`),seq:s,total:a.itens.length,feitos:n,ids:r,leitura:o?`Os três ciclos fecham — o mesmo ar e a mesma água circulam sem parar. Reciclagem perfeita. ✔`:i(t.ativo??`agua`)?`Ciclo da ${a.nome.toLowerCase()} fechado! Faltam: ${r.filter(e=>!n.includes(e)).map(t=>e[t]?.nome??t).join(`, `)}.`:a.ordem.length<a.itens.length?`Monte o ciclo: toque os estágios na ordem em que a matéria circula (${a.ordem.length}/${a.itens.length}).`:`Todos posicionados — mas a ordem não fecha o laço. Reordene.`}},verificar:()=>{let t=r.filter(i);if(t.length===r.length)return ie;let n=r.filter(e=>!t.includes(e)).map(t=>e[t]?.nome??t);return{tipo:`erro`,mensagem:`${t.length} de ${r.length} ciclos fechados — faltam: ${n.join(`, `)}.`}}}}},n_={arquetipo:`solar`,criar(e){let t=f(e.vCirc,29.78),r=f(e.vEsc,42.1),i=f(e.tolV,1.5),a={arquetipo:`solar`,viz:{comp:`solar`},solar:{modo:`lancamento`},resultado:null,controles:[{rotulo:`Velocidade no lançamento`,prop:`v`,min:15,max:50,step:.1,suf:` km/s`}],valores:{v:f(e.v0,18)}},o=()=>a.resultado?.situacao===`estavel`&&Math.abs(Gg(a.valores,`v`)-t)<=i;return{puzzle:a,info:()=>{let e=a.resultado?.situacao,s=Gg(a.valores,`v`),c={voando:n.criacao.orbVoando,cai:n.criacao.orbCai,escapa:n.criacao.orbEscapa,estavel:Math.abs(s-t)<=i?`Órbita circular perfeita a ${t} km/s ✔`:s<t?`Órbita elíptica (oval): acelere até ficar circular.`:`Órbita elíptica (oval): desacelere até ficar circular.`},l=e===void 0?n.criacao.orbInforme:c[e]??n.criacao.orbInforme,u=o();return{ok:u,leitura:u?l:`${l}  (circular ${t} · escape ${r} km/s)`}},verificar:()=>o()?{tipo:`ok`,mensagem:`Órbita circular perfeita a ${t} km/s!`}:{tipo:`erro`,mensagem:n.criacao.orbAjuste}}}},r_={arquetipo:`solar`,criar(e){let t=f(e.limiar,60),r={arquetipo:`solar`,viz:{comp:`solar`},solar:{modo:`escudo`},extra:`escudo`,controles:[{rotulo:`Intensidade do campo magnético`,prop:`b`,min:0,max:100,step:1,suf:`%`}],valores:{b:f(e.b0,15)}},i=()=>{let e=Gg(r.valores,`b`)>=t;return{ok:e,leitura:e?n.criacao.escudoOk:n.criacao.escudoFraco}};return{puzzle:r,info:i,verificar:()=>i().ok?ie:{tipo:`erro`,mensagem:n.criacao.ajuste}}}},i_={arquetipo:`solar`,criar(e){let t=f(e.tol,1),r=(Array.isArray(e.controles)?e.controles:[{rotulo:`Gravidade`,prop:`g`,min:90,max:110,step:.5,suf:`%`},{rotulo:`Distância ao Sol`,prop:`d`,min:90,max:110,step:.5,suf:`%`}]).map(e=>({step:.5,suf:`%`,min:90,max:110,rotulo:``,prop:``,...e})),i={};for(let e of r)i[e.prop]=100;let a={arquetipo:`solar`,viz:{comp:`solar`},solar:{modo:`constantes`},extra:`sandbox`,controles:r,valores:i},o=()=>{let e=r.filter(e=>Math.abs(Gg(a.valores,e.prop)-100)>t),n=e.length===0;return{ok:n,leitura:n?`Planeta habitável: tudo em equilíbrio ✔`:`Inviável: ${e.map(e=>e.rotulo.toLowerCase()).join(`, `)} fora do ponto exato.`}};return{puzzle:a,info:o,verificar:()=>o().ok?ie:{tipo:`erro`,mensagem:n.criacao.ajuste}}}},a_={arquetipo:`pronto`,criar(){return{puzzle:{arquetipo:`pronto`,valores:{}},info:()=>null,verificar:()=>ie}}};function z(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:0}var o_=h({extra:`vetores`,viz:{comp:`formiga`},preparar(e){let t=Array.isArray(e.vetores)?e.vetores:[[3,4],[-2,5],[1,-3]],n=t.reduce((e,t)=>e+f(t[0],0),0),r=t.reduce((e,t)=>e+f(t[1],0),0),i=Math.hypot(n,r),a=Math.max(2,Math.round(i*1.6));return{params:{sx:n,sy:r,tol:Math.max(.5,i*.08),vetores:t},controles:[{rotulo:`Direção da seta`,prop:`ang`,min:0,max:359,step:1,suf:`°`},{rotulo:`Distância (passos)`,prop:`dist`,min:0,max:a,step:.5}],valores:{ang:0,dist:0}}},medir(e,t){let n=z(e,`ang`)*Math.PI/180,r=t.sx+Math.cos(n)*z(e,`dist`),i=t.sy+Math.sin(n)*z(e,`dist`),a=Math.hypot(r,i),o=a<=t.tol,s=`Volta: ${Math.round(z(e,`dist`))} passos · reta de casa: ${Math.round(Math.hypot(t.sx,t.sy))} passos`;return{ok:o,erro:a,vetores:t.vetores,sx:t.sx,sy:t.sy,leitura:o?`${s} — Em casa! A seta reta é a soma de todos os passos da formiga. ✔`:a<=t.tol*2.5?`${s} — Quase! Ajuste a direção e a distância até a ponta tocar o ninho.`:`${s} — Gire a seta e estique até a ponta pousar no ninho.`}}}),s_=h({extra:`podometro`,viz:{comp:`podometro`},preparar:e=>({params:{alvo:f(e.alvo,100),tol:f(e.tol,4)},controles:[{rotulo:`Tamanho do passo`,prop:`passo`,min:f(e.passoMin,2),max:f(e.passoMax,9),step:.5,suf:` mm`},{rotulo:`Passos dados`,prop:`passos`,min:0,max:p(e.passosMax,60),step:1}],valores:{passo:f(e.passo0,5),passos:p(e.passos0,12)}}),medir(e,t){let n=z(e,`passo`),r=z(e,`passos`),i=n*r,a=Math.abs(i-t.alvo),o=a<=t.tol,s=n<=4?`cotos`:n>=7?`pernas-de-pau`:`normais`,c=`${r} passos × ${n.toFixed(1)} mm = ${Math.round(i)} mm · ninho a ${t.alvo} mm`;return{ok:o,erro:a,regime:s,dist:i,leitura:o?`${c} — No ninho! Distância = passos × tamanho do passo. ✔`:i<t.alvo?`${c} — ${s===`cotos`?`Pernas curtas andam menos: `:``}faltou. Dê mais passos ou alongue o passo.`:`${c} — ${s===`pernas-de-pau`?`Pernas longas andam demais: `:``}passou do ninho. Tire passos ou encurte o passo.`}}}),c_=h({extra:`termica`,viz:{comp:`formiga_prata`},preparar:e=>({params:{ambiente:f(e.ambiente,62),ganho:f(e.ganho,.18),perda:f(e.perda,.14),limite:f(e.limite,53)},controles:[{rotulo:`Reflexão da luz do sol`,prop:`refl`,min:0,max:100,step:1,suf:`%`},{rotulo:`Emissão do próprio calor`,prop:`emis`,min:0,max:100,step:1,suf:`%`}],valores:{refl:p(e.refl0,55),emis:p(e.emis0,55)}}),medir(e,t){let n=z(e,`refl`),r=z(e,`emis`),i=t.ambiente+t.ganho*(100-n)-t.perda*r,a=i<=t.limite,o=t.ambiente-t.perda*r;return{ok:a,temp:i,limite:t.limite,leitura:a?`Corpo a ${i.toFixed(1)} °C (limite ${t.limite} °C) — Sobrevive ao meio-dia do Saara! Refletir o sol E irradiar o calor, juntos. ✔`:o>t.limite?`Corpo a ${i.toFixed(1)} °C — quente demais. Falta IRRADIAR o próprio calor (emissão) para o céu.`:`Corpo a ${i.toFixed(1)} °C — quente demais. Os pelos triangulares precisam REFLETIR mais a luz do sol.`}}}),l_=h({extra:`bio`,viz:{comp:`ra_vidro`},preparar:e=>({params:{alvoTransp:f(e.alvoTransp,89),folgaCoagulo:f(e.folgaCoagulo,12),limiteAnticoag:f(e.limiteAnticoag,95)},controles:[{rotulo:`Hemácias escondidas no fígado`,prop:`armazenado`,min:0,max:100,step:1,suf:`%`},{rotulo:`Ação anticoagulante`,prop:`anticoag`,min:0,max:100,step:1,suf:`%`}],valores:{armazenado:p(e.armaz0,30),anticoag:p(e.anti0,20)}}),medir(e,t){let n=z(e,`armazenado`),r=z(e,`anticoag`),i=n,a=i>=t.alvoTransp,o=r<n-t.folgaCoagulo,s=r>t.limiteAnticoag,c=o?`Transparência ${i}% — ☠ o sangue tão concentrado COAGULOU no fígado. Sem anticoagulante suficiente, isso mataria a rã. Aumente a ação anticoagulante.`:s?`Transparência ${i}% — ☠ anticoagulante DEMAIS: um arranhão não pararia de sangrar. Reduza um pouco.`:a?`Transparência ${i}%, sem coágulos — invisível na folha e viva! Guardar quase todo o sangue sem ele coagular: teve um projeto. ✔`:`Transparência ${i}% — ainda dá para te ver na folha. Esconda mais hemácias no fígado (alvo ${t.alvoTransp}%).`;return{ok:a&&!o&&!s,transp:i,alvo:t.alvoTransp,arm:n,anti:r,coagulo:o,sangramento:s,escondida:a,leitura:c}}}),u_=h({extra:`bio`,viz:{comp:`hemoglobina`},preparar:e=>({params:{alvo:f(e.alvo,50),tol:f(e.tol,8)},controles:[{rotulo:`Força de ligação (afinidade)`,prop:`af`,min:0,max:100,step:1,suf:`%`}],valores:{af:p(e.a0,20)}}),medir(e,t){let n=z(e,`af`),r=Math.round(n/100*400*(1-n/100)),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,entrega:r,leitura:i?`Entrega de O₂: ${r}% — na medida: carrega no pulmão e solta no tecido. ✔`:n<t.alvo?`Entrega: ${r}% — fraca demais: mal segura o O₂ no pulmão.`:`Entrega: ${r}% — forte demais: agarra o O₂ e não solta no tecido.`}}}),d_=h({extra:`bio`,viz:{comp:`beija_flor`},preparar:e=>({params:{alvo:f(e.alvo,15),tol:f(e.tol,2)},controles:[{rotulo:`Lambidas por segundo`,prop:`fr`,min:2,max:28,step:1,suf:`/s`}],valores:{fr:p(e.f0,4)}}),medir(e,t){let n=z(e,`fr`),r=Math.max(0,Math.round(100*(1-((n-t.alvo)/12)**2))),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,coleta:r,leitura:i?`Néctar coletado: ${r}% — ritmo perfeito de lambidas. ✔`:n<t.alvo?`Coleta: ${r}% — devagar demais, desperdiça tempo.`:`Coleta: ${r}% — rápido demais, a língua não enche.`}}}),f_=h({extra:`onda`,viz:{comp:`grilo`},preparar:e=>({params:{alvo:f(e.alvo,4.5),tol:f(e.tol,.35)},controles:[{rotulo:`Frequência sintonizada`,prop:`fq`,min:1,max:9,step:.1,suf:` kHz`}],valores:{fq:f(e.f0,1.5)}}),medir(e,t){let n=z(e,`fq`),r=Math.round(100/(1+((n-t.alvo)/.85)**2)),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,resposta:r,leitura:i?`Ressonância: ${r}% — sintonizado no canto do parceiro. ✔`:`Ressonância: ${r}% — ajuste a frequência até o pico de audição.`}}}),p_=h({extra:`onda`,viz:{comp:`vaga_lume`},preparar:e=>({params:{alvo:f(e.alvo,60),tol:f(e.tol,6)},controles:[{rotulo:`Inclinação das escamas`,prop:`inc`,min:0,max:100,step:1,suf:`°`}],valores:{inc:p(e.i0,12)}}),medir(e,t){let n=z(e,`inc`),r=Math.max(35,Math.round(60+40*(1-((n-t.alvo)/42)**2))),i=Math.abs(n-t.alvo)<=t.tol;return{ok:i,luz:r,leitura:i?`Luz que escapa: ${r}% — inclinação ideal, brilho máximo. ✔`:`Luz que escapa: ${r}% — ajuste a inclinação até o brilho máximo.`}}}),m_=h({extra:`material`,viz:{comp:`pomelo`},preparar:e=>({params:{alvo:f(e.alvo,65),limite:f(e.limite,25)},controles:[{rotulo:`Graduação da espuma da casca`,prop:`gr`,min:0,max:100,step:1,suf:`%`}],valores:{gr:p(e.g0,15)}}),medir(e,t){let n=z(e,`gr`),r=Math.max(0,Math.round(100*(1-((n-t.alvo)/55)**2))),i=100-r,a=i<=t.limite;return{ok:a,forca:i,absorcao:r,leitura:a?`Força na polpa: ${i}% (limite ${t.limite}%) — a fruta sobrevive à queda! ✔`:`Força na polpa: ${i}% — a casca ainda transmite impacto demais. Ajuste a graduação.`}}}),h_=h({extra:`girassol`,viz:{comp:`girassol`},preparar:e=>({params:{alvo:f(e.alvo,137.5),tol:f(e.tol,.3)},controles:[{rotulo:`Ângulo de crescimento`,prop:`ang`,min:130,max:145,step:.1,suf:`°`}],valores:{ang:f(e.ang0,132)}}),medir(e,t){let n=z(e,`ang`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Empacotamento perfeito: as sementes cobrem o disco sem um buraco — o ângulo áureo (~137,5°) ✔`:n<t.alvo?`Faltam ${te(t.alvo-n)}° — repare as espirais vazias (buracos) entre as sementes.`:`Passou ${te(n-t.alvo)}° — repare as espirais vazias (buracos) entre as sementes.`}}}),g_=h({extra:`martim`,viz:{comp:`martim`},preparar:e=>({params:{alvo:f(e.alvo,80),tol:f(e.tol,6)},controles:[{rotulo:`Afinamento do bico`,prop:`f`,min:0,max:100,step:1,suf:`%`}],valores:{f:f(e.f0,15)}}),medir(e,t){let n=z(e,`f`),r=Math.abs(n-t.alvo)<=t.tol,i=Math.max(0,Math.round(100-n*1.1));return{ok:r,splash:i,leitura:r?`Mergulho sem respingo — o bico fende a água como o nariz do trem-bala ✔`:n<t.alvo?`Respingo: ${i}% — afine mais o bico para entrar sem turbulência.`:`Afinou demais — o bico ficou frágil. Ajuste de volta.`}}}),__=h({extra:`libelula`,viz:{comp:`libelula`},preparar:e=>({params:{alvo:f(e.alvo,70)},controles:[{rotulo:`Omatídios (facetas do olho)`,prop:`f`,min:1,max:100,step:1,suf:`%`}],valores:{f:f(e.f0,8)}}),medir(e,t){let n=z(e,`f`),r=n>=t.alvo,i=Math.min(100,Math.round(n));return{ok:r,nitidez:i,leitura:r?`Visão nítida! Milhares de omatídios formam uma imagem detalhada ✔`:`Nitidez: ${i}% — aumente as facetas (omatídios) para ver a presa.`}}}),v_=h({extra:`osso`,viz:{comp:`osso`},preparar:e=>({params:{alvoMin:f(e.alvoMin,45),alvoMax:f(e.alvoMax,65)},controles:[{rotulo:`Traves internas (trabéculas)`,prop:`d`,min:0,max:100,step:1,suf:`%`}],valores:{d:f(e.d0,8)}}),medir(e,t){let n=z(e,`d`),r=n>=t.alvoMin&&n<=t.alvoMax,i=(t.alvoMin+t.alvoMax)/2,a=Math.max(0,Math.round(100-Math.abs(n-i)*3));return{ok:r,fpp:a,leitura:n<t.alvoMin?`Frágil: poucas traves, o osso racha (força/peso ${a}%).`:n>t.alvoMax?`Pesado demais: quase maciço, gasta material (força/peso ${a}%).`:`Forte e leve! Trabéculas nas linhas de força — máxima força por peso ✔`}}}),y_=h({extra:`bioluz`,viz:{comp:`bioluz`},preparar:e=>({params:{alvoMin:f(e.alvoMin,55),alvoMax:f(e.alvoMax,78)},controles:[{rotulo:`Brilho do lume (luz fria)`,prop:`b`,min:0,max:100,step:1,suf:`%`}],valores:{b:f(e.b0,15)}}),medir(e,t){let n=z(e,`b`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Fraco demais: a presa nem percebe (brilho ${n}%).`:n>t.alvoMax?`Forte demais: assusta a presa e gasta energia (brilho ${n}%).`:`No ponto: o brilho atrai a presa — luz fria, quase sem calor ✔`}}}),b_=h({extra:`eco`,viz:{comp:`eco`},preparar:e=>({params:{alvo:f(e.alvo,65),tol:f(e.tol,4),vsom:1500},controles:[{rotulo:`Distância estimada`,prop:`d`,min:0,max:100,step:1,suf:` m`}],valores:{d:f(e.d0,10)}}),medir(e,t){let n=z(e,`d`),r=Math.abs(n-t.alvo)<=t.tol,i=Math.round(2*t.alvo/t.vsom*1e3);return{ok:r,tEco:i,leitura:r?`Presa a ${t.alvo} m! Distância = velocidade do som × tempo ÷ 2 ✔`:`O eco voltou em ~${i} ms. Ajuste a distância até o sonar tocar a presa.`}}}),x_=h({extra:`fotossintese`,viz:{comp:`fotossintese`},preparar:e=>({params:{alvo:f(e.alvo,85)},controles:[{rotulo:`Captação da antena de luz`,prop:`c`,min:0,max:100,step:1,suf:`%`}],valores:{c:f(e.c0,12)}}),medir(e,t){let n=z(e,`c`),r=n>=t.alvo,i=Math.min(100,Math.round(n));return{ok:r,efic:i,leitura:r?`A antena entrega quase toda a luz ao centro de reação: a folha produz açúcar e libera O₂ ✔`:`Eficiência ${i}% — parte da luz se perde como calor. Aumente a captação da antena de clorofila.`}}}),S_=h({extra:`dente_leao`,viz:{comp:`dente_leao`},preparar:e=>({params:{alvo:f(e.alvo,91),tol:f(e.tol,4)},controles:[{rotulo:`Porosidade do papo (cerdas)`,prop:`p`,min:40,max:100,step:1,suf:`%`}],valores:{p:f(e.p0,55)}}),medir(e,t){let n=z(e,`p`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Anel de vórtice estável: a semente flutua e voa longe ✔`:n<t.alvo-t.tol?`Denso demais: o ar não atravessa, o vórtice some e a semente cai.`:`Ralo demais: o ar escapa, o vórtice não se forma e a semente cai.`}}}),C_=h({extra:`concha`,viz:{comp:`concha`},preparar:e=>({params:{alvo:f(e.alvo,18),tol:f(e.tol,1.2)},controles:[{rotulo:`Fator de crescimento por volta`,prop:`b`,min:0,max:40,step:.5,suf:`%`}],valores:{b:f(e.b0,4)}}),medir(e,t){let n=z(e,`b`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Espiral logarítmica perfeita: a concha mantém a forma enquanto cresce ✔`:n<t.alvo-t.tol?`Crescimento lento: a espiral fica apertada demais (quase um círculo).`:`Crescimento rápido: a espiral abre demais e perde a forma da concha.`}}}),w_=h({extra:`planta_noite`,viz:{comp:`planta_noite`},preparar(e){let t=f(e.amido,100),n=f(e.horas,10);return{params:{amido:t,horas:n,alvo:t/n,tol:f(e.tol,.6)},controles:[{rotulo:`Consumo de amido por hora`,prop:`r`,min:2,max:20,step:.5,suf:`/h`}],valores:{r:f(e.r0,4)}}},medir(e,t){let n=z(e,`r`),r=Math.abs(n-t.alvo)<=t.tol,i=t.amido/n;return{ok:r,amido:t.amido,horas:t.horas,leitura:r?`Ritmo certo: ${t.amido} ÷ ${t.horas} h = ${te(t.alvo)}/h — o amido dura até o amanhecer ✔`:n>t.alvo?`Rápido demais: a reserva acaba em ${te(i)} h e a planta passa fome antes do sol.`:`Devagar demais: sobra amido ao amanhecer — crescimento desperdiçado.`}}}),T_=h({extra:`castor`,viz:{comp:`castor`},preparar:e=>({params:{alvoMin:f(e.alvoMin,45),alvoMax:f(e.alvoMax,72)},controles:[{rotulo:`Curvatura da represa (arco)`,prop:`c`,min:0,max:100,step:1,suf:`%`}],valores:{c:f(e.c0,8)}}),medir(e,t){let n=z(e,`c`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Parede reta demais: a pressão concentra no meio e arromba a represa.`:n>t.alvoMax?`Curva demais: gasta gravetos à toa e a represa fica frágil.`:`Arco perfeito: a curva joga a pressão para as margens e segura a água ✔`}}}),E_=h({extra:`lingua_gato`,viz:{comp:`lingua_gato`},preparar:e=>({params:{alvoMin:f(e.alvoMin,55),alvoMax:f(e.alvoMax,80)},controles:[{rotulo:`Inclinação das espículas`,prop:`a`,min:0,max:100,step:1,suf:`%`}],valores:{a:f(e.a0,12)}}),medir(e,t){let n=z(e,`a`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Retas demais: não entram no pelo e o nó continua lá.`:n>t.alvoMax?`Inclinadas demais: prendem e puxam o pelo.`:`No ângulo certo: as espículas desembaraçam o pelo e espalham a saliva ✔`}}}),D_=h({extra:`bigode_gato`,viz:{comp:`bigode_gato`},preparar:e=>({params:{alvo:f(e.alvo,50),tol:f(e.tol,5)},controles:[{rotulo:`Largura da passagem`,prop:`g`,min:10,max:100,step:1,suf:` cm`}],valores:{g:f(e.g0,92)}}),medir(e,t){let n=z(e,`g`);return{ok:Math.abs(n-t.alvo)<=t.tol,leitura:n>t.alvo+t.tol?`Folga: o gato passa fácil — ache a fresta mais justa em que os bigodes ainda tocam as bordas.`:n<t.alvo-t.tol?`Estreita demais: os bigodes dobram — o gato sabe que NÃO cabe e não tenta.`:`Na medida exata: os bigodes tocam as duas bordas — o gato sente que passa por um triz ✔`}}}),O_=h({extra:`polvo`,viz:{comp:`polvo`},preparar:e=>({params:{alvo:f(e.alvo,60),tol:f(e.tol,6)},controles:[{rotulo:`Ponto da dobra (pseudo-cotovelo)`,prop:`d`,min:0,max:100,step:1,suf:`%`}],valores:{d:f(e.d0,14)}}),medir(e,t){let n=z(e,`d`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`A dobra no ponto certo: a ventosa alcança a presa ✔`:n<t.alvo-t.tol?`A dobra ficou cedo demais: a ponta passa longe da presa.`:`A dobra ficou tarde demais: a ponta passa da presa.`}}}),k_=h({extra:`cardume`,viz:{comp:`cardume`},preparar:e=>({params:{alvoMin:f(e.alvoMin,40),alvoMax:f(e.alvoMax,70)},controles:[{rotulo:`Distância de segurança`,prop:`s`,min:0,max:100,step:1,suf:`%`}],valores:{s:f(e.s0,8)}}),medir(e,t){let n=z(e,`s`);return{ok:n>=t.alvoMin&&n<=t.alvoMax,leitura:n<t.alvoMin?`Perto demais: os peixes se chocam.`:n>t.alvoMax?`Longe demais: o cardume se desfaz e cada um vira presa fácil.`:`Distância certa: o cardume flui como um só, sem colisões ✔`}}}),A_=h({extra:`dna_dados`,viz:{comp:`dna_dados`},preparar:e=>({params:{alvo:f(e.alvo,85)},controles:[{rotulo:`Compactação dos dados no DNA`,prop:`k`,min:0,max:100,step:1,suf:`%`}],valores:{k:f(e.k0,8)}}),medir(e,t){let n=z(e,`k`),r=n>=t.alvo;return{ok:r,leitura:r?`Toda a informação cabe num punhado de DNA — densidade insuperável ✔`:`Compactação ${n}% — os dados ainda ocupam prédios de servidores. Aproveite a densidade do DNA.`}}}),j_=h({extra:`turbina`,viz:{comp:`turbina`},preparar:e=>({params:{alvoMin:f(e.alvoMin,50),alvoMax:f(e.alvoMax,80)},controles:[{rotulo:`Tubérculos no bordo de ataque`,prop:`b`,min:0,max:100,step:1,suf:`%`}],valores:{b:f(e.b0,10)}}),medir(e,t){let n=z(e,`b`),r=n>=t.alvoMin&&n<=t.alvoMax,i=(t.alvoMin+t.alvoMax)/2,a=r?100:Math.max(0,Math.round(100-Math.abs(n-i)*2.4));return{ok:r,pot:a,leitura:n<t.alvoMin?`Poucos tubérculos: o fluxo descola e a pá perde força (potência ${a}%).`:n>t.alvoMax?`Tubérculos demais: viram arrasto e a pá pesa (potência ${a}%).`:`Tubérculos no ponto: o fluxo segue colado e a turbina rende ao máximo ✔`}}}),M_=h({extra:`sonar`,viz:{comp:`sonar`},preparar:e=>({params:{alvo:f(e.alvo,62),tol:f(e.tol,5)},controles:[{rotulo:`Foco do melão (lente acústica)`,prop:`f`,min:0,max:100,step:1,suf:`%`}],valores:{f:f(e.f0,12)}}),medir(e,t){let n=z(e,`f`),r=Math.abs(n-t.alvo)<=t.tol;return{ok:r,leitura:r?`Feixe focado na presa: o golfinho "vê" pelo som com nitidez ✔`:n<t.alvo-t.tol?`Feixe largo demais: o som se espalha e a imagem fica borrada.`:`Feixe estreito demais: ele converge antes da presa e perde o alvo.`}}}),N_=h({viz:{comp:`sustentacao`},preparar:e=>({params:{alvoMin:f(e.alvoMin,16),alvoMax:f(e.alvoMax,22)},controles:[{rotulo:`Ângulo de ataque`,prop:`a`,min:0,max:30,step:1,suf:`°`}],valores:{a:f(e.a0,4)}}),medir(e,t){let n=z(e,`a`),r=n>=t.alvoMin&&n<=t.alvoMax,i=n>24,a=i?0:Math.min(100,Math.round(n*4.5));return{ok:r,estol:i,liftPct:a,leitura:i?`Ângulo demais: estol — o fluxo descola e a sustentação cai. (Os tubérculos só adiam o estol, não o impedem.)`:r?`Sustentação máxima (${a}%) — os tubérculos mantêm o fluxo colado mesmo num ângulo alto ✔`:`Sustentação ${a}% — incline mais a nadadeira para ganhar força.`}}}),P_=h({extra:`cicatrizacao`,viz:{comp:`cicatrizacao`},preparar:e=>({params:{alvoMin:f(e.alvoMin,96)},controles:[{rotulo:`Tempo de cicatrização`,prop:`t`,min:0,max:100,step:1,suf:`%`}],valores:{t:f(e.t0,0)}}),medir(e,t){let n=z(e,`t`);return{ok:n>=t.alvoMin,leitura:n<12?`Corte — a pele se rompe e um vaso sanguíneo se abre.`:n<38?`Hemostasia — os vasos se contraem e as plaquetas formam o coágulo.`:n<62?`Inflamação — os vasos dilatam; glóbulos de defesa limpam a área.`:n<88?`Proliferação — tecido novo, fibras e vasinhos preenchem o ferimento.`:`Remodelação — as fibras se reforçam e fica a cicatriz: reparo completo ✔`}}}),F_={girassol:h_,sequencia:Kg,concha:C_,dente_leao:S_,planta_noite:w_,fotossintese:x_,pomelo:m_,tesselacao:qg,terra:Ag,linha_criacao:e_,ciclos_vida:t_,campo:r_,vetores:o_,podometro:s_,formiga_prata:c_,ra_vidro:l_,beija_flor:d_,grilo:f_,vaga_lume:p_,martim:g_,libelula:__,bioluz:y_,eco:b_,castor:T_,lingua_gato:E_,bigode_gato:D_,polvo:O_,cardume:k_,turbina:j_,sonar:M_,gaivota:h({extra:`gaivota`,viz:{comp:`gaivota`,aspecto:`4/3`},preparar:e=>({params:{alvoEfic:f(e.alvoEfic,.9),ntuMax:f(e.ntuMax,12),tCorpo:f(e.tCorpo,41),tGelo:f(e.tGelo,4)},controles:[{rotulo:`Comprimento do contato entre os vasos`,prop:`L`,min:0,max:100,step:1,suf:`%`}],valores:{L:p(e.L0,25),arranjo:`mesmo`}}),medir(e,t){let n=Math.max(0,Math.min(100,z(e,`L`))),r=e.arranjo!==`mesmo`,i=n/100*t.ntuMax,a=r?i/(1+i):(1-Math.exp(-2*i))/2,o=r&&a>=t.alvoEfic,s=t.tCorpo-t.tGelo,c=t.tGelo+a*s,l=t.tCorpo-a*s,u=Math.round(a*100);return{ok:o,efic:a,oposto:r,L:n,pct:u,tRetorno:c,tPe:l,tCorpo:t.tCorpo,tGelo:t.tGelo,alvoPct:Math.round(t.alvoEfic*100),leitura:o?`Contato de ${n}% em contracorrente: o sangue volta ao corpo a ${te(c)} °C e recupera ${u}% do calor. Os pés ficam frios e o corpo, quente. ✔`:r?`Direções opostas ✓, mas o contato de ${n}% recupera só ${u}% — alongue o trocador até quase todo o calor voltar.`:`Na MESMA direção o trocador satura em 50%: metade do calor escapa pelos pés, faça o contato que fizer (agora ${u}%). Inverta o sentido.`}}}),sustentacao:N_,rotas:Zg,dna_dados:A_,hemoglobina:u_,osso:v_,cicatrizacao:P_,proteina:Bg,pareamento:Yg,equacao:Cg,funcao:wg,harmonia:Jg,area:$g,desconto:Fg,bilhar:Lg,musica:zg,fractal:kg,orbita:n_,conica:Tg,fluxo:Eg,difracao:Dg,ondas:Og,atomo:jg,microscopio:Mg,relatividade:Ng,universo_escuro:Pg,elementos:Vg,sandbox:i_,carbono:$h,sete_tempos:og,revelacao:ag,medidas_biblia:tg,dinheiro_biblia:eg,trajetoria_biblia:_g};function I_(e){return F_[e]??a_}var L_={carbono:()=>w(()=>import(`./carbono-fybKSh0N.js`),__vite__mapDeps([0,1,2]),import.meta.url),dinheiro_biblia:()=>w(()=>import(`./dinheiro-biblia-CHbQ11k4.js`),__vite__mapDeps([3,1,2]),import.meta.url),medidas_biblia:()=>w(()=>import(`./medidas-biblia-CAcTJs9w.js`),__vite__mapDeps([4,1,2]),import.meta.url),revelacao:()=>w(()=>import(`./revelacao-SRsZcwbd.js`),__vite__mapDeps([5,1,2]),import.meta.url),sete_tempos:()=>w(()=>import(`./sete-tempos-CpRKwHQJ.js`),__vite__mapDeps([6,1,2]),import.meta.url),trajetoria_biblia:()=>w(()=>import(`./trajetoria-biblia-DxGE0h0w.js`),__vite__mapDeps([7,1,2]),import.meta.url),balanca:()=>w(()=>import(`./balanca-C2I08FoX.js`),__vite__mapDeps([8,1,2]),import.meta.url),bilhar:()=>w(()=>import(`./bilhar-BmdVAa3-.js`),__vite__mapDeps([9,1,2]),import.meta.url),desconto:()=>w(()=>import(`./desconto-CXfIzAF9.js`),__vite__mapDeps([10,1,2]),import.meta.url),difracao:()=>w(()=>import(`./difracao-DdL1wyHA.js`),__vite__mapDeps([11,1,2]),import.meta.url),fractal:()=>w(()=>import(`./fractal-DkbJ2vum.js`),__vite__mapDeps([12,1,2]),import.meta.url),funcao:()=>w(()=>import(`./funcao-CY9rotv1.js`),__vite__mapDeps([13,1,2]),import.meta.url),ondas:()=>w(()=>import(`./ondas-CQyezOCA.js`),__vite__mapDeps([14,1,2]),import.meta.url),asa:()=>w(()=>import(`./asa-C4KUMp2D.js`),__vite__mapDeps([15,1,2]),import.meta.url),cicatrizacao:()=>w(()=>import(`./cicatrizacao-Ll3l1Qzk.js`),__vite__mapDeps([16,1,2]),import.meta.url),dna:()=>w(()=>import(`./dna-DsvGA0VO.js`),__vite__mapDeps([17,1,2]),import.meta.url),fluxo:()=>w(()=>import(`./fluxo-Cxsf7jn9.js`),__vite__mapDeps([18,1,2]),import.meta.url),formiga:()=>w(()=>import(`./formiga-F6bX14gH.js`),__vite__mapDeps([19,1,2]),import.meta.url),proteina:()=>w(()=>import(`./proteina-D12UGxXN.js`),__vite__mapDeps([20,1,2]),import.meta.url),ra_vidro:()=>w(()=>import(`./ra-vidro-B_VYgeTx.js`),__vite__mapDeps([21,1,2]),import.meta.url),sustentacao:()=>w(()=>import(`./sustentacao-BEysh-EE.js`),__vite__mapDeps([22,1,2]),import.meta.url),atomo:()=>w(()=>import(`./atomo-CZzZ1wLQ.js`),__vite__mapDeps([23,1,2]),import.meta.url),elementos:()=>w(()=>import(`./elementos-BqOGWtjM.js`),__vite__mapDeps([24,1,2]),import.meta.url),lente:()=>w(()=>import(`./lente-Sp-mgBSR.js`),__vite__mapDeps([25,1,2]),import.meta.url),microscopio:()=>w(()=>import(`./microscopio-CVNOeVgg.js`),__vite__mapDeps([26,1,2]),import.meta.url),musica:()=>w(()=>import(`./musica-BLIBjFXu.js`),__vite__mapDeps([27,1,2]),import.meta.url),relatividade:()=>w(()=>import(`./relatividade-DYTrIW_r.js`),__vite__mapDeps([28,1,2]),import.meta.url),solar:()=>w(()=>import(`./solar-Bk_6frUD.js`),__vite__mapDeps([29,1,2]),import.meta.url),universo_escuro:()=>w(()=>import(`./universo-escuro-CwnR-GfC.js`),__vite__mapDeps([30,1,2]),import.meta.url),ciclos:()=>w(()=>import(`./ciclos-IJ4XTfOx.js`),__vite__mapDeps([31,1,2]),import.meta.url),concha:()=>w(()=>import(`./concha-D9G1VNAI.js`),__vite__mapDeps([32,1,2]),import.meta.url),dente_leao:()=>w(()=>import(`./dente-leao-DJiQH8cO.js`),__vite__mapDeps([33,1,2]),import.meta.url),filotaxia:()=>w(()=>import(`./filotaxia-BxFMsKyF.js`),__vite__mapDeps([34,35,36,1,37,38,39,40,41,42]),import.meta.url),fotossintese:()=>w(()=>import(`./fotossintese-DkC1VlMS.js`),__vite__mapDeps([43,1,2]),import.meta.url),girassol:()=>w(()=>import(`./girassol-DF9Q96k7.js`),__vite__mapDeps([44,35,36,1,37,38,39,40,41,42]),import.meta.url),planta_noite:()=>w(()=>import(`./planta-noite-Bf1D8EbC.js`),__vite__mapDeps([45,1,2]),import.meta.url),pomelo:()=>w(()=>import(`./pomelo-BqRZy5ky.js`),__vite__mapDeps([46,1,2]),import.meta.url),terra3d:()=>w(()=>import(`./terra3d-DCexz0fL.js`),__vite__mapDeps([47,1,2,48]),import.meta.url),terra_criacao:()=>w(()=>import(`./terra-criacao-DDD-Dcv7.js`),__vite__mapDeps([49,1,2,48]),import.meta.url),tesselacao:()=>w(()=>import(`./tesselacao-BceycpHr.js`),__vite__mapDeps([50,1,2]),import.meta.url),beija_flor:()=>w(()=>import(`./beija-flor-Okd7vce8.js`),__vite__mapDeps([51,1,2]),import.meta.url),bigode_gato:()=>w(()=>import(`./bigode-gato-DrknZsDn.js`),__vite__mapDeps([52,1,2]),import.meta.url),bioluz:()=>w(()=>import(`./bioluz-BDYGfZq5.js`),__vite__mapDeps([53,1,2]),import.meta.url),cardume:()=>w(()=>import(`./cardume-Bd7SR6n-.js`),__vite__mapDeps([54,1,2]),import.meta.url),castor:()=>w(()=>import(`./castor-BGaSAV0J.js`),__vite__mapDeps([55,1,2]),import.meta.url),dna_dados:()=>w(()=>import(`./dna-dados-RedxKiti.js`),__vite__mapDeps([56,1,2]),import.meta.url),eco:()=>w(()=>import(`./eco-DkWccCo5.js`),__vite__mapDeps([57,1,2]),import.meta.url),formiga_prata:()=>w(()=>import(`./formiga-prata-AKW2TK3W.js`),__vite__mapDeps([58,1,2]),import.meta.url),gaivota:()=>w(()=>import(`./gaivota-C7OGbusy.js`),__vite__mapDeps([59,1,2]),import.meta.url),grilo:()=>w(()=>import(`./grilo-CVnfL4da.js`),__vite__mapDeps([60,1,2]),import.meta.url),libelula:()=>w(()=>import(`./libelula-DIfxzFZp.js`),__vite__mapDeps([61,1,2]),import.meta.url),lingua_gato:()=>w(()=>import(`./lingua-gato-7fbdAp2L.js`),__vite__mapDeps([62,1,2]),import.meta.url),martim:()=>w(()=>import(`./martim-C8fhxg0t.js`),__vite__mapDeps([63,1,2]),import.meta.url),piso:()=>w(()=>import(`./piso-CzQVKSCr.js`),__vite__mapDeps([64,1,2]),import.meta.url),podometro:()=>w(()=>import(`./podometro-2ioqoMJW.js`),__vite__mapDeps([65,1,2]),import.meta.url),polvo:()=>w(()=>import(`./polvo-B71KGxkE.js`),__vite__mapDeps([66,1,2]),import.meta.url),sonar:()=>w(()=>import(`./sonar-ACKuSnfK.js`),__vite__mapDeps([67,1,2]),import.meta.url),turbina:()=>w(()=>import(`./turbina-C1_hu25Z.js`),__vite__mapDeps([68,1,2]),import.meta.url),vaga_lume:()=>w(()=>import(`./vaga-lume-C8VmXvam.js`),__vite__mapDeps([69,1,2]),import.meta.url),hemoglobina:()=>w(()=>import(`./hemoglobina-BIWS420y.js`),__vite__mapDeps([70,1,2]),import.meta.url),osso:()=>w(()=>import(`./osso-Car8s-Zq.js`),__vite__mapDeps([71,1,2]),import.meta.url)};async function R_(e){let t=L_[e];if(t!==void 0)try{return(await t()).default}catch{return}}var z_=[],B_=Rh(),V_=new Map,H_=!1,U_=!1,W_=null,G_=-1,K_=!1,q_=!1,J_=``,Y_=``,X_=``,Z_=null,Q_=!1,$_=null,ev=!1,tv=wh();function nv(){H_||U_||(U_=!0,(async()=>{try{[z_,V_]=await Promise.all([Ph(),Wh()]),B_=zh(),H_=!0}finally{U_=!1,C()}})())}function rv(e){return z_.find(t=>t.id===e)}function iv(e){return z_.filter(t=>Nh(e).inclui(t))}function av(e){return e?.id!==void 0&&Hh(B_,e)&&(V_.get(e.id)??``).trim()!==``}function ov(e){return W_!==null&&G_===e.id?W_:(_v(),W_=I_(e.tipo).criar(Ih(e)),G_=e.id??-1,K_=!1,q_=!1,J_=``,Y_=``,X_=e.id===void 0?``:V_.get(e.id)??``,W_)}function sv(){_v(),W_=null,G_=-1,K_=!1,q_=!1,J_=``,Y_=``}function cv(e){switch(e.arquetipo){case`numerico`:return(e.campos??[]).every(t=>{let n=e.valores[t.prop];return n!==void 0&&n!==``});case`escolha`:return e.escolhido!==null&&e.escolhido!==void 0;case`pares`:return(e.selecionados?.length??0)>0;case`rota`:return(e.pontos?.length??0)>0&&(e.ordemPontos?.length??0)===(e.pontos?.length??0);case`ordenar`:return(e.ordem?.length??0)===(e.itens?.length??0);case`ciclos`:return Object.values(e.ciclos??{}).every(e=>e.ordem.length===e.itens.length);case`etapas`:return(e.passos??[])[e.atual??0]?.entrada!==`escolha`||e.escolhido!==null&&e.escolhido!==void 0;case`explorar`:return(e.vistos?.length??0)===(e.mapa?.length??0);case`solar`:return e.solar?.modo!==`lancamento`||e.resultado!==null&&e.resultado!==void 0&&e.resultado.situacao!==`voando`;default:return!0}}function lv(e){return e.resultado?.situacao===`voando`}function uv(e,t){if(K_)return;let r=t.verificar();r.tipo===`avanco`?(J_=``,Y_=``):r.tipo===`ok`?(K_=!0,Y_=`ok`,J_=r.mensagem??n.criacao.acerto,dv(e)):(Y_=r.tipo,J_=r.mensagem??n.criacao.erro),vv(t),C()}function dv(e){q_||e.id===void 0||(B_=Vh(B_,e.id),q_=!0)}function fv(e){K_=!0,dv(e),C()}var pv;function mv(e){clearTimeout(pv),pv=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=X_.trim();t===``?(await wp(Uh(e.id)),V_.delete(e.id)):(await Cp({origem:`criacao`,referencia:e.titulo,titulo:`${Nh(e.categoria===`entenda`?`entenda`:`criacao`).titulo} — ${e.titulo}`,conteudo:t,ref_chave:Uh(e.id)}),V_.set(e.id,t)),C()})()},500)}function hv(e){let t=e.puzzle;return{info:e.info(),valores:t.valores,escolhido:t.escolhido,selecionados:t.selecionados,ordem:t.ordem,ordemPontos:t.ordemPontos,colunas:t.colunas,pontos:t.pontos,colmeia:t.colmeia,itens:t.itens,ciclos:t.ciclos,ativo:t.ativo,ativoMapa:t.ativoMapa,vistos:t.vistos,resultado:t.resultado,extra:t.extra,resolvido:K_}}function gv(e){let t=tv.value,n=e.puzzle.viz?.comp;t===void 0||n===void 0||$_!==null||ev||(ev=!0,(async()=>{try{let r=await R_(n);if(r===void 0||W_!==e||!t.isConnected)return;$_=r(t,{...e.puzzle.solar===void 0?{}:{modo:e.puzzle.solar.modo},aoAtualizar:t=>{e.puzzle.vizDados={...t},C()},aoMudarEstado:t=>{e.puzzle.resultado={...t},C()}}),$_.aplicar?.(hv(e))}finally{ev=!1}})())}function _v(){$_?.destruir(),$_=null}function vv(e){$_?.aplicar?.(hv(e))}function yv(e,t){let n=e.valores[t];return typeof n==`number`?n:0}function bv(e,t,n){e.puzzle.valores[t]=n,J_=``,Y_=``,vv(e),C()}function xv(e){return e===null||e.leitura===``?x:b`<p class="criacao__leitura ${e.ok?`criacao__leitura--ok`:``}">${e.leitura}</p>`}function Sv(e){return b`
    <button class="criacao__cartao" @click=${()=>S(`${wv(e)}/${e.id}`)}>
      <st-icon class="criacao__icone" name=${Cv(e)}></st-icon>
      <span class="criacao__titulo">${e.titulo}</span>
      <span class="criacao__selos">
        ${Hh(B_,e)?b`<st-icon name="check" class="criacao__selo criacao__selo--ok"></st-icon>`:x}
        ${av(e)?b`
              <st-icon
                name="school"
                class="criacao__selo criacao__selo--diligente"
                title=${n.criacao.diligenteSelo}
              ></st-icon>
            `:x}
      </span>
    </button>
  `}function Cv(e){return e.icone===``?e.categoria===`entenda`?`bulb`:`compass`:e.icone}function wv(e){return e.categoria===`entenda`?`entenda`:`criacao`}function Tv(e,t){return b`
    <section class="criacao__grupo">
      ${t?b`
            <h2 class="criacao__categoria">
              ${e.rotulo}
              ${e.concluida?b`<st-icon name="rosette-discount-check"></st-icon>`:x}
            </h2>
          `:x}
      <div class="criacao__grade">${e.modulos.map(Sv)}</div>
    </section>
  `}function Ev(e){let t=iv(e),r=t.filter(e=>Hh(B_,e)).length,i=t.length>0?Math.round(r/t.length*100):0;return t.length===0?b`<p class="vazio">${U_?n.app.carregando:n.criacao.vazio}</p>`:b`
    <div class="criacao">
      <p class="criacao__subtitulo">${Nh(e).subtitulo}</p>

      <div class="criacao__progresso">
        <st-progress-bar value=${i}></st-progress-bar>
        <span class="criacao__contagem">${r}/${t.length}</span>
      </div>

      ${Fh(t,e=>Hh(B_,e)).map(t=>Tv(t,Nh(e).agrupado))}
    </div>
  `}function Dv(e){return b`
    <div class="criacao">
      <article class="criacao__bloco">
        <h2 class="criacao__secao">${n.criacao.conceito}</h2>
        <div class="prosa">${Vd(e.conceito)}</div>

        ${e.imagem===``?x:b`
              <figure class="criacao__figura">
                <img
                  src=${`imagens/${e.imagem}`}
                  alt=${e.titulo}
                  loading="lazy"
                  @click=${()=>{Z_=e.imagem,Q_=!1,C()}}
                />
                <figcaption>${n.criacao.ampliar}</figcaption>
              </figure>
            `}
      </article>

      <article class="criacao__bloco criacao__bloco--desafio">
        <h2 class="criacao__secao">${n.criacao.desafio}</h2>
        <div class="prosa">${Vd(e.desafio)}</div>
      </article>

      ${e.link_jw===``?x:b`
            <p class="criacao__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">${n.criacao.fonte}</a>
            </p>
          `}

      <p class="criacao__dica">${n.criacao.diligenteDica}</p>

      <st-button variant="primary" @click=${()=>S(`${wv(e)}/${e.id}/jogar`)}>
        ${n.criacao.comecar}
      </st-button>
    </div>
  `}function Ov(e){let t=e.puzzle,n=K_||lv(t);return b`
    ${(t.controles??[]).map(r=>b`
        <div class="criacao__controle">
          <label class="criacao__rotulo">
            <span>${r.rotulo}</span>
            <strong>${yv(t,r.prop)}${r.suf??``}</strong>
          </label>

          ${r.botoes===!0?b`
                <div class="criacao__passos">
                  <st-button
                    ?disabled=${n||yv(t,r.prop)<=r.min}
                    @click=${()=>bv(e,r.prop,Math.max(r.min,yv(t,r.prop)-r.step))}
                  >−</st-button>
                  <span class="criacao__valor">${yv(t,r.prop)}${r.suf??``}</span>
                  <st-button
                    variant="primary"
                    ?disabled=${n||yv(t,r.prop)>=r.max}
                    @click=${()=>bv(e,r.prop,Math.min(r.max,yv(t,r.prop)+r.step))}
                  >+</st-button>
                </div>
              `:x}

          <input
            type="range"
            min=${r.min}
            max=${r.max}
            step=${r.step}
            .value=${String(yv(t,r.prop))}
            ?disabled=${n}
            @input=${t=>bv(e,r.prop,Number(t.target.value))}
          />
        </div>
      `)}
  `}function kv(e){let t=e.puzzle,r=e.info(),i=Array.isArray(r?.sequencia)?r.sequencia:[];if(t.extra===`sequencia`){let r=yv(t,`n`);return b`
      <div class="criacao__sequencia">
        ${i.map(e=>b`<span class="criacao__numero">${e}</span>`)}
        <span class="criacao__numero criacao__numero--alvo">${r>0?r:`?`}</span>
      </div>
      <div class="criacao__controle">
        <label class="criacao__rotulo">
          <span>${n.criacao.proximoNumero}</span><strong>${r}</strong>
        </label>
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          .value=${String(r)}
          ?disabled=${K_}
          @input=${t=>bv(e,`n`,Number(t.target.value))}
        />
      </div>
    `}return b`
    ${(t.campos??[]).map(n=>b`
        <st-input
          label=${n.rotulo}
          type="number"
          ?disabled=${K_}
          .value=${String(t.valores[n.prop]??``)}
          @st-input=${t=>bv(e,n.prop,Number(t.target.value))}
        ></st-input>
      `)}
  `}function Av(e){let t=e.puzzle;return b`
    <div class="criacao__opcoes">
      ${(t.opcoes??[]).map(n=>b`
          <button
            class="criacao__opcao ${t.escolhido===n.id?`criacao__opcao--ativa`:``}"
            ?disabled=${K_}
            @click=${()=>{t.escolhido=n.id,J_=``,vv(e),C()}}
          >
            <strong>${n.rotulo}</strong>
            ${n.nota===void 0?x:b`<small>${n.nota}</small>`}
          </button>
        `)}
    </div>
  `}function jv(e){let t=e.puzzle,r=t.selecionados??[];return b`
    <p class="criacao__dica">${n.criacao.paresDica}</p>
    <div class="criacao__fita">
      ${(t.colunas??[]).map((t,n)=>b`
          <button
            class="criacao__base ${r.includes(n)?`criacao__base--marcada`:``}"
            ?disabled=${K_}
            @click=${()=>{let t=r.indexOf(n);t>=0?r.splice(t,1):r.push(n),vv(e),C()}}
          >
            <span>${t.a}</span><span class="criacao__ligacao">·</span><span>${t.b}</span>
          </button>
        `)}
    </div>
  `}function Mv(e){let t=e.puzzle,r=t.ordemPontos??[],i=t.colmeia??[50,8],a=t.pontos??[],o=[i,...r.map(e=>a[e]??i)];r.length===a.length&&r.length>0&&o.push(i);let s=r.length>0?a[r[r.length-1]??0]??i:i;return b`
    <p class="criacao__dica">${n.criacao.rotaDica}</p>
    <div class="criacao__campo">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points=${o.map(e=>`${e[0]},${e[1]}`).join(` `)}
          class=${K_?`criacao__trilha criacao__trilha--ok`:`criacao__trilha`}
        ></polyline>
      </svg>

      <span class="criacao__colmeia" style=${`left:${i[0]}%;top:${i[1]}%`}>🍯</span>

      ${a.map((n,i)=>b`
          <button
            class="criacao__flor ${r.includes(i)?`criacao__flor--visitada`:``}"
            style=${`left:${n[0]}%;top:${n[1]}%`}
            ?disabled=${K_}
            @click=${()=>{let n=r.indexOf(i);n>=0?r.splice(n,1):r.push(i),t.dist=Qg(t),vv(e),C()}}
          >
            ${r.includes(i)?r.indexOf(i)+1:`🌸`}
          </button>
        `)}

      <span class="criacao__abelha" style=${`left:${s[0]}%;top:${s[1]}%`}>🐝</span>
    </div>

    <div class="criacao__medida">
      <span>${n.criacao.rotaMedida(Math.round(t.dist??0),Math.round(t.otima??0))}</span>
      <st-button
        size="small"
        ?disabled=${K_}
        @click=${()=>{t.ordemPontos=[],t.dist=0,J_=``,vv(e),C()}}
      >${n.criacao.recomecar}</st-button>
    </div>
  `}function Nv(e){let t=e.puzzle,r=t.ordem??[];return b`
    <div class="criacao__cabecalho-lista">
      <p class="criacao__dica">${n.criacao.ordenarDica}</p>
      <st-button
        size="small"
        ?disabled=${K_||r.length===0}
        @click=${()=>{t.ordem=[],J_=``,vv(e),C()}}
      >${n.criacao.recomecar}</st-button>
    </div>

    <div class="criacao__cards">
      ${(t.itens??[]).map(t=>b`
          <button
            class="criacao__card ${r.includes(t.id)?`criacao__card--posto`:``}"
            ?disabled=${K_}
            @click=${()=>{let n=r.indexOf(t.id);n>=0?r.splice(n,1):r.push(t.id),J_=``,vv(e),C()}}
          >
            <span class="criacao__ordem">${r.indexOf(t.id)+1||`+`}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${xv(e.info())}
  `}function Pv(e){let t=e.puzzle,r=t.ciclos??{},i=r[t.ativo??`agua`];return i===void 0?b``:b`
    <div class="criacao__abas">
      ${Object.entries(r).map(([n,r])=>b`
          <button
            class="criacao__aba ${t.ativo===n?`criacao__aba--ativa`:``}"
            ?disabled=${K_}
            @click=${()=>{t.ativo=n,vv(e),C()}}
          >
            ${r.nome}
          </button>
        `)}
    </div>

    <div class="criacao__cabecalho-lista">
      <span></span>
      <st-button
        size="small"
        ?disabled=${K_||i.ordem.length===0}
        @click=${()=>{i.ordem=[],J_=``,vv(e),C()}}
      >${n.criacao.ciclosRecomecar}</st-button>
    </div>

    <div class="criacao__cards">
      ${i.itens.map(t=>b`
          <button
            class="criacao__card ${i.ordem.includes(t.id)?`criacao__card--posto`:``}"
            ?disabled=${K_}
            @click=${()=>{let n=i.ordem.indexOf(t.id);n>=0?i.ordem.splice(n,1):i.ordem.push(t.id),J_=``,vv(e),C()}}
          >
            <span class="criacao__ordem">${i.ordem.indexOf(t.id)+1||`+`}</span>
            <span>
              <strong>${t.curto}</strong>
              <small>${t.texto}</small>
            </span>
          </button>
        `)}
    </div>

    ${xv(e.info())}
  `}function Fv(e){let t=e.puzzle,n=t.passos??[],r=t.atual??0,i=n[r];return i===void 0?b``:b`
    <div class="criacao__trilha-passos">
      ${n.map((e,t)=>b`
          <span
            class="criacao__degrau ${t<r?`criacao__degrau--feito`:t===r?`criacao__degrau--atual`:``}"
          ></span>
        `)}
      <span class="criacao__contagem">${r+1}/${n.length}</span>
    </div>

    ${t.conclusao===null||t.conclusao===void 0?x:b`
          <div class="criacao__conclusao">
            <strong>${t.conclusaoTitulo}</strong>
            <p>${t.conclusao}</p>
          </div>
        `}

    <h2 class="criacao__passo-titulo">${i.titulo}</h2>
    <p class="criacao__passo-pergunta">${i.pergunta}</p>
    <p class="criacao__verso">${i.verso}</p>

    ${i.entrada===`escolha`?b`
          <div class="criacao__opcoes">
            ${(i.opcoes??[]).map(n=>b`
                <button
                  class="criacao__opcao ${t.escolhido===n.id?`criacao__opcao--ativa`:``}"
                  ?disabled=${K_}
                  @click=${()=>{t.escolhido=n.id,J_=``,vv(e),C()}}
                >
                  <strong>${n.rotulo}</strong>
                  ${n.nota===void 0?x:b`<small>${n.nota}</small>`}
                </button>
              `)}
          </div>
        `:b`
          <div class="criacao__controle">
            <label class="criacao__rotulo">
              <span>${i.rotulo}</span>
              <strong>${yv(t,i.prop??``)}${i.suf??``}</strong>
            </label>
            <input
              type="range"
              min=${i.min??0}
              max=${i.max??100}
              step=${i.step??1}
              .value=${String(yv(t,i.prop??``))}
              ?disabled=${K_}
              @input=${t=>bv(e,i.prop??``,Number(t.target.value))}
            />
          </div>
          ${xv(e.info())}
        `}
  `}function Iv(e){let t=e.puzzle,r=e.info();if(r===null)return b``;let i=t.vistos??[];return b`
    <div class="criacao__cabecalho-lista">
      <span class="criacao__contagem ${r.ok?`criacao__contagem--ok`:``}">
        ${i.length}/${t.mapa?.length??0} ${n.criacao.visoes}
      </span>
      <span class="criacao__dica">${n.criacao.explorarDica}</span>
    </div>

    <div class="criacao__mapa">
      ${(t.mapa??[]).map(n=>b`
          <button
            class="criacao__ponto ${t.ativoMapa===n.id?`criacao__ponto--ativo`:i.includes(n.id)?`criacao__ponto--visto`:``}"
            @click=${()=>{K_||(t.ativoMapa=n.id,i.includes(n.id)||i.push(n.id),J_=``,vv(e),C())}}
          >
            ${n.rotulo}
          </button>
        `)}
    </div>

    <article class="criacao__visao">
      <header>
        <span class="criacao__contagem">${String(r.rotulo)} visão</span>
        <span class="criacao__verso">Apocalipse ${String(r.ref)}</span>
        ${r.desdobra===!0?b`<span class="criacao__desdobra">${n.criacao.explorarDesdobra}</span>`:x}
      </header>
      <p>${String(r.resumo)}</p>
      <p class="criacao__encaixe ${r.desdobra===!0?`criacao__encaixe--forte`:``}">
        ${String(r.encaixe)}
      </p>
    </article>

    ${xv(r)}
  `}function Lv(e){let t=e.puzzle;return b`
    ${t.solar?.modo===`lancamento`?b`
          <st-button
            variant="primary"
            ?disabled=${K_||lv(t)}
            @click=${()=>{t.resultado={situacao:`voando`},$_?.lancar?.({...t.valores}),C()}}
          >${lv(t)?n.criacao.orbVoando:n.criacao.lancar}</st-button>
        `:x}
    ${Ov(e)}
    ${xv(e.info())}
  `}function Rv(e){let t=e.info(),r=e.puzzle.viz?.comp;if(t===null)return x;if(r===`proteina`){let r=t.relogio,i=e.puzzle.vizDados;return b`
      <div class="criacao__painel">
        <span class="criacao__marca">
          ${n.criacao.proteinaRecorde}: ${i?.recorde??0} / ${i?.total??yv(e.puzzle,`aa`)}
        </span>
        <span class="criacao__marca">${n.criacao.proteinaAgora}: ${i?.acertos??0}</span>
      </div>
      ${r===void 0?x:b`
            <div class="criacao__relogio">
              <strong>${n.criacao.proteinaRelogio}</strong>
              <p>${n.criacao.proteinaNecessarias}: 1 em 10<sup>${r.necessarias}</sup></p>
              ${r.concluido?x:b`
                    <p>${n.criacao.proteinaFaltam} 10<sup>${r.faltam}</sup> vezes mais tentativas.</p>
                    <p>${n.criacao.proteinaTempo} ~10<sup>${r.anos}</sup> ${n.criacao.proteinaAnos}</p>
                  `}
            </div>
          `}
    `}if(r===`elementos`)return b`
      <div class="criacao__elemento" style=${`--cor:${String(t.catCor)}`}>
        <span class="criacao__simbolo">
          <strong>${String(t.simbolo)}</strong><small>${String(t.z)}</small>
        </span>
        <span class="criacao__ficha">
          <strong>${String(t.nome)}</strong>
          <span class="criacao__marcas">
            <span class="criacao__marca">${String(t.massaTxt)}</span>
            <span class="criacao__marca">${String(t.catNome)}</span>
            <span class="criacao__marca">${String(t.estadoNome)}</span>
            <span class="criacao__marca">${n.criacao.camadas}: ${String(t.camadasTxt)}</span>
          </span>
          ${t.fato===``?x:b`<small class="criacao__fato">${String(t.fato)}</small>`}
        </span>
      </div>
    `;if(r===`ciclos`){let e=Array.isArray(t.feitos)?t.feitos.length:0,r=Array.isArray(t.ids)?t.ids.length:0;return b`
      <div class="criacao__painel">
        <span class="criacao__marca ${t.ok?`criacao__contagem--ok`:``}">
          ${e}/${r} ${n.criacao.ciclosFechados}
        </span>
      </div>
    `}if(r===`terra_criacao`)return b`
      <div class="criacao__painel">
        <span class="criacao__marca">${String(t.rotulo)}</span>
        <span class="criacao__verso">${String(t.verso)}</span>
      </div>
    `;if(r===`gaivota`){let r=e.puzzle.valores.arranjo;return b`
      <div class="criacao__abas">
        <button
          class="criacao__aba ${r===`mesmo`?`criacao__aba--ativa`:``}"
          ?disabled=${K_}
          @click=${()=>{e.puzzle.valores.arranjo=`mesmo`,vv(e),C()}}
        >${n.criacao.gaivotaMesmo}</button>
        <button
          class="criacao__aba ${r===`oposto`?`criacao__aba--ativa`:``}"
          ?disabled=${K_}
          @click=${()=>{e.puzzle.valores.arranjo=`oposto`,vv(e),C()}}
        >${n.criacao.gaivotaOposto}</button>
      </div>
      <div class="criacao__painel">
        <span class="criacao__marca">
          ${n.criacao.gaivotaVolta}: <strong>${Number(t.tRetorno).toFixed(1).replace(`.`,`,`)} °C</strong>
        </span>
        <span class="criacao__marca">
          ${n.criacao.gaivotaPe}: <strong>${Number(t.tPe).toFixed(1).replace(`.`,`,`)} °C</strong>
        </span>
        <span class="criacao__marca ${t.ok?`criacao__contagem--ok`:``}">
          ${n.criacao.gaivotaCalor}: <strong>${String(t.pct)}%</strong>
        </span>
      </div>
    `}return x}function zv(e){switch(e.puzzle.arquetipo){case`numerico`:return kv(e);case`slider`:return b`${Ov(e)}${xv(e.info())}`;case`escolha`:return Av(e);case`pares`:return jv(e);case`rota`:return Mv(e);case`ordenar`:return Nv(e);case`ciclos`:return Pv(e);case`etapas`:return Fv(e);case`explorar`:return Iv(e);case`solar`:return Lv(e);default:return b`<p class="criacao__dica">${n.criacao.leiaReflexao}</p>`}}function Bv(e){return e.arquetipo===`etapas`&&(e.atual??0)<(e.passos?.length??1)-1?n.criacao.avancar:e.arquetipo===`explorar`?n.criacao.concluirMapa:n.criacao.verificar}function Vv(e){let t=ov(e),r=t.puzzle;return b`
    <div class="criacao">
      <article class="criacao__bloco">
        ${r.viz===void 0?x:b`
              <div class="criacao__viz">
                ${Rv(t)}
                ${gh(e.id,b`
                      <canvas
                        ${Dh(tv)}
                        style=${`aspect-ratio:${r.viz.aspecto??`16/10`}`}
                      ></canvas>
                    `)}
                ${r.viz.dica===void 0?x:b`<p class="criacao__dica">${r.viz.dica}</p>`}
              </div>
            `}

        ${zv(t)}

        ${J_===``?x:b`<p class="criacao__feedback criacao__feedback--${Y_}">${J_}</p>`}

        ${r.arquetipo===`pronto`?x:b`
              <st-button
                variant="primary"
                ?disabled=${!cv(r)||K_}
                @click=${()=>uv(e,t)}
              >${Bv(r)}</st-button>
            `}
      </article>

      ${r.arquetipo===`pronto`&&!q_?b`
            <st-button variant="success" @click=${()=>fv(e)}>
              ${n.criacao.concluir}
            </st-button>
          `:x}

      ${q_?Hv(e):x}
    </div>
  `}function Hv(e){return b`
    <div class="criacao__final">
      <p class="criacao__concluido">
        <st-icon name="check"></st-icon>${n.criacao.concluido}
      </p>

      ${av(e)?b`<p class="criacao__diligente"><st-icon name="school"></st-icon>${n.criacao.diligenteFeito}</p>`:x}

      <article class="criacao__bloco criacao__bloco--sucesso">
        <h2 class="criacao__secao">
          ${e.categoria===`entenda`?n.criacao.reflexaoEntenda:n.criacao.reflexaoTitulo}
        </h2>
        <div class="prosa">${Vd(e.reflexao)}</div>
        ${e.referencia===``?x:b`<p class="criacao__verso">${e.referencia}</p>`}
        ${e.link_jw===``?x:b`
              <p class="criacao__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${n.criacao.lerFonte}</a>
              </p>
            `}
      </article>

      <div class="criacao__caderno">
        <div class="criacao__cabecalho-lista">
          <label for="criacao-caderno">${n.criacao.cadernoTitulo}</label>
          <a href="#/caderno">${n.criacao.cadernoVer}</a>
        </div>
        <textarea
          id="criacao-caderno"
          rows="4"
          placeholder=${n.criacao.cadernoPlaceholder}
          .value=${X_}
          @input=${t=>{X_=t.target.value,mv(e)}}
        ></textarea>
      </div>

      <div class="criacao__saidas">
        <st-button variant="primary" @click=${()=>S(wv(e))}>
          ${n.criacao.outrosModulos}
        </st-button>
        <st-button @click=${()=>S(`home`)}>${n.criacao.inicio}</st-button>
      </div>
    </div>
  `}function Uv(e){return Z_===null?x:b`
    <div
      class="criacao__zoom"
      @click=${e=>{e.target===e.currentTarget&&(Z_=null,C())}}
    >
      <st-icon-button
        name="x"
        label=${n.criacao.fechar}
        @click=${()=>{Z_=null,C()}}
      ></st-icon-button>
      <img
        src=${`imagens/${Z_}`}
        alt=${e.titulo}
        class=${Q_?`criacao__zoom-img criacao__zoom-img--ampliada`:`criacao__zoom-img`}
        @click=${()=>{Q_=!Q_,C()}}
      />
    </div>
  `}function Wv(e){let t=Number(e.args[0]);return Number.isFinite(t)?rv(t):void 0}function Gv(e){return e.args[1]===`jogar`}var Kv={titulo(e){return Wv(e)?.titulo},voltarPara(e){let t=e.modulo===`entenda`?`entenda`:`criacao`,n=Wv(e);return n===void 0?`hub/estudo`:Gv(e)?`${t}/${n.id}`:t},conteudo(e){nv();let t=e.modulo===`entenda`?`entenda`:`criacao`,n=Wv(e);if((n===void 0||!Gv(e))&&(W_!==null&&sv(),Q_=Z_!==null&&Q_),n===void 0)return Ev(t);if(!Gv(e))return b`${Dv(n)}${Uv(n)}`;let r=Vv(n);return queueMicrotask(()=>{W_!==null&&gv(W_)}),r}},qv={criacao:`A Criação`,pre_diluvio:`Antes do Dilúvio`,patriarcas:`Os Patriarcas`,exodo_juizes:`Êxodo e Juízes`,reis:`Os Reis`,exilio:`O Exílio`,restauracao:`A Restauração`,jesus:`Jesus na Terra`,primeiro_seculo:`O Primeiro Século`,apostasia:`A Grande Apostasia`,restauracao_moderna:`Restauração Moderna`,ultimos_dias:`Os Últimos Dias`,expansao_mundial:`Expansão Mundial`,nossos_dias:`Nossos Dias`},Jv=Object.keys(qv),Yv={biblica:`Bíblica`,mundial:`Mundial`,historica:`Histórica`},Xv=()=>i(`cronologia`);async function Zv(){return(await Xv().todos().catch(()=>[])).sort((e,t)=>Number(e.ordem_absoluta)-Number(t.ordem_absoluta)||Number(e.id??0)-Number(t.id??0))}var Qv={trilhas:{biblica:!0,mundial:!0,historica:!0},busca:``};function $v(e,t){let n=t.busca.trim().toLowerCase();return e.filter(e=>t.trilhas[e.trilha]===!1?!1:n===``||e.titulo.toLowerCase().includes(n)||e.resumo.toLowerCase().includes(n)||e.referencia.toLowerCase().includes(n))}function ey(e){let t=new Map;for(let n of e){let e=qv[n.periodo]===void 0?Jv[0]:n.periodo;if(e===void 0)continue;let r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return Jv.filter(e=>(t.get(e)?.length??0)>0).map(e=>({chave:e,rotulo:qv[e]??e,eventos:t.get(e)??[]}))}function ty(e,t){let n=new Set(e.map(e=>e.periodo)),r=new Set(t.map(e=>e.chave));return Jv.filter(e=>n.has(e)).map(e=>({chave:e,rotulo:qv[e]??e,presente:r.has(e)}))}function ny(e){let t=e.precisao===`aprox`?`c. `:``,n=Number(e.ano_fim)>0?`–${e.ano_fim}`:``;return`${t}${e.ano_inicio}${n} ${e.era}`}var ry=[],iy=Qv,ay=null,oy=``,sy=!1,cy=!1,ly=0;function uy(){sy||cy||(cy=!0,(async()=>{try{ry=await Zv(),oy=ey($v(ry,iy))[0]?.chave??``,sy=!0}finally{cy=!1,C()}})())}function dy(){return(document.querySelector(`.barra`)?.getBoundingClientRect().height??0)+(document.querySelector(`.crono__contexto`)?.getBoundingClientRect().height??0)}function fy(e){oy=e,ly=performance.now()+900,C();let t=document.getElementById(`crono-periodo-${e}`);if(t===null)return;let n=t.getBoundingClientRect().top+scrollY-dy()-8;scrollTo({top:Math.max(n,0),behavior:`smooth`})}var py=!1;function my(){if(py)return;py=!0;let e=!1,t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;let n=document.querySelectorAll(`[data-periodo]`);if(n.length===0){removeEventListener(`scroll`,t),py=!1;return}if(performance.now()<ly)return;let r=dy()+12,i=``;for(let e of n)e.getBoundingClientRect().top<=r&&(i=e.dataset.periodo??``);i!==``&&i!==oy&&(oy=i,C())}))};addEventListener(`scroll`,t,{passive:!0})}function hy(e){iy={...iy,trilhas:{...iy.trilhas,[e]:iy.trilhas[e]===!1}},C()}function gy(){iy=Qv,C()}function _y(e){let t=ay===e.id,r=Yv[e.trilha]===void 0?`biblica`:e.trilha;return b`
    <li class="crono__item" data-trilha=${r}>
      <span class="crono__marca" aria-hidden="true"></span>

      <div class="crono__cartao">
        <button
          class="crono__alvo"
          aria-expanded=${t?`true`:`false`}
          @click=${()=>{ay=t?null:e.id??null,C()}}
        >
          <span class="crono__ano">${ny(e)}</span>
          <span class="crono__titulo">${e.titulo}</span>
          <span class="crono__trilha">${Yv[r]}</span>
        </button>

        ${t?b`
              <div class="crono__detalhe">
                ${e.resumo===``?x:b`<p>${e.resumo}</p>`}
                ${e.referencia===``?x:b`<p class="crono__referencia">${e.referencia}</p>`}
                ${e.link_fonte===``?x:b`
                      <a class="crono__fonte" href=${e.link_fonte} target="_blank" rel="noreferrer">
                        <st-icon name="external-link"></st-icon>
                        ${e.obra_fonte===``?n.cronologia.fonte:e.obra_fonte}
                      </a>
                    `}
              </div>
            `:x}
      </div>
    </li>
  `}function vy(e){return b`
    <section class="crono__trecho">
      <h2 class="crono__era" id=${`crono-periodo-${e.chave}`} data-periodo=${e.chave}>
        ${e.rotulo}
        <small>${n.cronologia.eventos(e.eventos.length)}</small>
      </h2>
      <ol class="crono__lista">${e.eventos.map(e=>_y(e))}</ol>
    </section>
  `}var yy={voltarPara(){return`hub/estudo`},conteudo(e){if(uy(),!sy)return b`<div class="carregando"><st-spinner></st-spinner></div>`;let t=ey($v(ry,iy));return t.length>0&&queueMicrotask(my),b`
      <p class="intro">${n.cronologia.intro}</p>

      <div class="crono__contexto">
        <div class="crono__paradas">
          ${ty(ry,t).map(e=>b`
              <button
                class="chip chip--pequeno"
                ?data-ativo=${e.chave===oy}
                ?disabled=${!e.presente}
                @click=${()=>fy(e.chave)}
              >
                ${e.rotulo}
              </button>
            `)}
        </div>
      </div>

      <div class="filtros">
        <st-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${n.cronologia.buscar}
          .value=${iy.busca}
          @st-input=${e=>{iy={...iy,busca:e.target.value},C()}}
        >
          <st-icon slot="prefix" name="search"></st-icon>
        </st-input>
      </div>

      <div class="chips">
        ${Object.entries(Yv).map(([e,t])=>b`
            <button
              class="chip"
              data-trilha=${e}
              ?data-ativo=${iy.trilhas[e]!==!1}
              @click=${()=>hy(e)}
            >
              ${t}
            </button>
          `)}
        <button class="chip" title=${n.cronologia.limpar} @click=${gy}>
          <st-icon name="filter-off"></st-icon>
        </button>
      </div>

      ${t.length===0?b`
            <div class="vazio">
              <st-icon class="vazio__icone" name="timeline"></st-icon>
              <p>${ry.length===0?n.cronologia.vazio:n.cronologia.semFiltro}</p>
            </div>
          `:b`<div class="crono">${t.map(e=>vy(e))}</div>`}
    `}},by=e({ALVOS_MIN:()=>Sy,TIPOS:()=>xy,emojiDoTipo:()=>wy,excluirSessao:()=>Iy,horasEMinutos:()=>Ny,listarSessoes:()=>Ay,ordenar:()=>jy,perolaComoAnotacao:()=>Ry,perolaNoCaderno:()=>zy,relogio:()=>Py,rotuloDoTipo:()=>Cy,salvarSessao:()=>Fy,totalDeMinutos:()=>My}),xy={leitura:{rotulo:`Leitura da Bíblia`,emoji:`📖`},pessoal:{rotulo:`Estudo Pessoal`,emoji:`🔍`},reuniao:{rotulo:`Preparação de Reunião`,emoji:`👥`},meditacao:{rotulo:`Meditação`,emoji:`⏳`}},Sy=[15,25,45,60];function Cy(e){return xy[e]?.rotulo??e}function wy(e){return xy[e]?.emoji??`❓`}var Ty=`Pérolas`,Ey=()=>i(`sessoes_estudo`),Dy=()=>i(`anotacao`),Oy=()=>i(`pasta`);async function ky(){let e=(await Oy().todos()).find(e=>e.nome===Ty);return e?.id===void 0?Oy().salvar({nome:Ty,data_criacao:Date.now()}):e.id}function Ay(){return Ey().todos()}function jy(e){return[...e].sort((e,t)=>(t.concluido_em||0)-(e.concluido_em||0))}function My(e){return e.reduce((e,t)=>e+(Number(t.duracao_minutos)||0),0)}function Ny(e){return`${Math.floor(e/60)}h ${e%60}m`}function Py(e){return`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`}function Fy(e){return Ey().salvar(e)}function Iy(e){return Ey().excluir(e)}function Ly(e){return`<p>${e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\n/g,`<br>`)}</p>`}async function Ry(e){let t=e.nota_meditacao.trim();if(t===``||e.anotacao_criada===1)return;let n=Date.now(),r=e.assunto===``?Cy(e.tipo_ciclo):e.assunto;await Dy().salvar({titulo:`Pérola — ${r}`,conteudo:Ly(t),tipo_modelo:`estudo`,pasta_id:await ky(),esta_fixada:0,esta_arquivada:0,data_criacao:n,data_modificacao:n}),await Fy({...e,anotacao_criada:1})}async function zy(e){let t=e.nota_meditacao.trim();if(t===``)return;let n=e.assunto===``?Cy(e.tipo_ciclo):e.assunto;await Cp({origem:`estudo`,referencia:n,titulo:`Estudo — ${n}`,conteudo:t})}var By=90,Vy=2*Math.PI*By,Hy=`inicio`,Uy=`pessoal`,Wy=``,Gy=30,Ky=!1,qy=0,Jy=0,Yy=0,Xy,Zy=``,Qy=null,$y=!1,eb=!1,tb=[],nb=!1,rb=!1;async function ib(){tb=await Ay(),C()}function ab(){nb||rb||(rb=!0,(async()=>{try{await ib(),nb=!0}finally{rb=!1,C()}})())}function ob(){Ky=!0,Yy=Date.now(),clearInterval(Xy),Xy=setInterval(()=>{qy=Jy+Math.floor((Date.now()-Yy)/1e3),C()},250),C()}function sb(){Ky&&(Jy+=Math.floor((Date.now()-Yy)/1e3),qy=Jy,Ky=!1,clearInterval(Xy),Xy=void 0,C())}function cb(){let e=Gy*60;return e<=0?0:Math.min(1,qy/e)}function lb(){return Math.max(0,Math.round(qy/60))}function ub(){Hy=`oracao`,C()}function db(){qy=0,Jy=0,Zy=``,Qy=null,$y=!1,eb=!1,Hy=`cronometro`,ob()}function fb(){sb(),Hy=`perola`,C()}async function pb(){let e={...Qy?.id===void 0?{}:{id:Qy.id},assunto:Wy===``?n.estudo.semAssunto:Wy,tipo_ciclo:Uy,duracao_minutos:lb(),concluido_em:Date.now(),nota_meditacao:Zy,anotacao_criada:+!!$y},t=await Fy(e);return Qy={...e,id:t},await ib(),Qy}async function mb(){Qy===null&&await pb(),Wy=``,Hy=`inicio`,S(`estudo/historico`)}function hb(){clearInterval(Xy),Xy=void 0,Ky=!1,Wy=``,qy=0,Jy=0,Hy=`inicio`,C()}function gb(){return b`
    <p class="intro">${n.estudo.intro}</p>

    <h2 class="secao">${n.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(xy).map(([e,t])=>b`
          <button
            class="tipo"
            ?data-ativo=${Uy===e}
            @click=${()=>{Uy=e,C()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <st-input
      label=${n.estudo.assunto}
      placeholder=${n.estudo.assuntoPlaceholder}
      .value=${Wy}
      @st-input=${e=>{Wy=e.target.value}}
    ></st-input>

    <h2 class="secao">${n.estudo.alvo}</h2>
    <div class="chips">
      ${Sy.map(e=>b`
          <button
            class="chip"
            ?data-ativo=${Gy===e}
            @click=${()=>{Gy=e,C()}}
          >
            ${n.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <st-button variant="primary" size="large" @click=${ub}>
        <st-icon slot="prefix" name="player-play"></st-icon>${n.estudo.comecar}
      </st-button>
    </div>
  `}function _b(){return b`
    <div class="oracao">
      <st-icon class="oracao__icone" name="hand-stop"></st-icon>
      <h2>${n.estudo.oracaoTitulo}</h2>
      <p>${n.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${db}>${n.estudo.orei}</st-button>
        <st-button
          @click=${()=>{Hy=`inicio`,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
      </div>
    </div>
  `}function vb(){let e=cb(),t=qy>=Gy*60;return b`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${By}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${By}
          ?data-completo=${t}
          stroke-dasharray=${Vy}
          stroke-dashoffset=${Vy*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${Py(qy)}</span>
        <span class="cronometro__alvo">${n.estudo.de(Gy)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${wy(Uy)} ${Wy===``?Cy(Uy):Wy}
    </p>

    ${t?b`
          <st-alert open variant="success">
            <st-icon slot="icon" name="circle-check"></st-icon>${n.estudo.alvoAtingido}
          </st-alert>
        `:x}

    <div class="editor__acoes">
      <st-button variant="primary" @click=${()=>Ky?sb():ob()}>
        <st-icon slot="prefix" name=${Ky?`player-pause`:`player-play`}></st-icon>
        ${Ky?n.leitura.pausar:n.leitura.continuar}
      </st-button>
      <st-button variant="success" outline @click=${fb}>
        <st-icon slot="prefix" name="flag"></st-icon>${n.estudo.encerrar}
      </st-button>
      <st-button variant="danger" outline @click=${hb}>${n.estudo.descartar}</st-button>
    </div>
  `}function yb(){return b`
    <p class="intro">${n.estudo.perolaIntro(lb())}</p>

    <st-textarea
      rows="5"
      resize="auto"
      label=${n.estudo.perola}
      placeholder=${n.estudo.perolaPlaceholder}
      .value=${Zy}
      @st-input=${e=>{Zy=e.target.value,C()}}
    ></st-textarea>

    <div class="editor__acoes">
      <st-button
        ?disabled=${Zy.trim()===``||$y}
        @click=${async()=>{await Ry({...Qy??await pb(),nota_meditacao:Zy}),$y=!0,L(n.estudo.viraAnotacaoFeito),await ib()}}
      >
        <st-icon slot="prefix" name="notes"></st-icon>
        ${$y?n.estudo.viraAnotacaoFeito:n.estudo.viraAnotacao}
      </st-button>

      <st-button
        ?disabled=${Zy.trim()===``||eb}
        @click=${async()=>{await zy({...Qy??await pb(),nota_meditacao:Zy}),eb=!0,L(n.estudo.vaiCadernoFeito),C()}}
      >
        <st-icon slot="prefix" name="book-2"></st-icon>
        ${eb?n.estudo.vaiCadernoFeito:n.estudo.vaiCaderno}
      </st-button>
    </div>

    <div class="editor__acoes">
      <st-button variant="primary" @click=${()=>void mb()}>
        <st-icon slot="prefix" name="check"></st-icon>${n.estudo.salvarSessao}
      </st-button>
      <st-button variant="danger" outline @click=${hb}>${n.estudo.descartar}</st-button>
    </div>
  `}function bb(){let e=jy(tb),t=My(tb);return b`
    <p class="intro">${n.estudo.totais(e.length,Ny(t))}</p>

    ${e.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="hourglass"></st-icon>
            <p>${n.estudo.semSessoes}</p>
          </div>
        `:b`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>b`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${wy(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <st-badge variant="neutral" pill>
                      ${n.estudo.minutos(e.duracao_minutos)}
                    </st-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${Cy(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?x:b`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?x:b`
                          <st-button
                            size="small"
                            @click=${async()=>{await Ry(e),await ib()}}
                          >
                            <st-icon slot="prefix" name="notes"></st-icon>${n.estudo.viraAnotacao}
                          </st-button>
                        `}
                    <st-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void xb(e)}
                    >
                      <st-icon slot="prefix" name="trash"></st-icon>
                    </st-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function xb(e){!await Jd({titulo:n.estudo.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await Iy(e.id),await ib())}var Sb={voltarPara(e){return e.args[0]===`historico`?`estudo`:`hub/estudo`},titulo(e){if(e.args[0]===`historico`)return n.estudo.historico;if(Hy===`oracao`)return n.estudo.oracaoTitulo;if(Hy===`cronometro`)return n.estudo.emSessao;if(Hy===`perola`)return n.estudo.perola},acoes(e){if(Hy===`inicio`&&e.args[0]!==`historico`)return b`
      <st-icon-button
        name="history"
        label=${n.estudo.historico}
        @click=${()=>S(`estudo/historico`)}
      ></st-icon-button>
    `},conteudo(e){return ab(),e.args[0]===`historico`?bb():Hy===`oracao`?_b():Hy===`cronometro`?vb():Hy===`perola`?yb():gb()}},Cb=e({TIPO_DESPESA:()=>1,TIPO_RECEITA:()=>0,alternarAtivo:()=>Bb,alternarPago:()=>zb,carregar:()=>jb,excluirCategoria:()=>Vb,excluirRecorrencia:()=>Ub,excluirTransacao:()=>Hb,gerarPendentes:()=>Ab,paraCategoria:()=>Mb,paraRecorrencia:()=>Pb,paraTransacao:()=>Nb,proximaGeracao:()=>Ob,salvarCategoria:()=>Ib,salvarRecorrencia:()=>Rb,salvarTransacao:()=>Lb}),wb=()=>i(`categorias_financeiro`),Tb=()=>i(`transacoes`),Eb=()=>i(`recorrencias_financeiro`);function Db(e=new Date){let t=new Date(e);return t.setHours(0,0,0,0),t}function Ob(e,t=Db()){let n=Db(t);if(e.periodicidade===`diaria`)return n.setDate(n.getDate()+1),n.getTime();if(e.periodicidade===`semanal`){let t=n.getDay()===0?7:n.getDay(),r=(e.dia_semana_iso-t+7)%7;return n.setDate(n.getDate()+(r===0?7:r)),n.getTime()}if(e.periodicidade===`anual`)return n.setFullYear(n.getFullYear()+1),n.getTime();let r=new Date(n);e.dia_mes<=n.getDate()&&r.setMonth(r.getMonth()+1,1);let i=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();return r.setDate(Math.min(e.dia_mes,i)),Db(r).getTime()}var kb=60;async function Ab(e){let t=Date.now(),n=!1;for(let r of e){if(r.ativo!==1)continue;let e=r.proxima_geracao_epoch||Ob(r),i=0;for(;e<=t&&i<kb;)await Tb().salvar({descricao:r.descricao,valor:r.valor,tipo:r.tipo,categoria_id:r.categoria_id,data_vencimento:e,esta_pago:+(r.gerar_como_pago===1),data_criacao:t,data_marcado_pago:r.gerar_como_pago===1?t:0,origem_recorrencia:r.id??0}),e=Ob(r,Db(new Date(e))),i+=1,n=!0;e!==r.proxima_geracao_epoch&&await Eb().salvar({...r,proxima_geracao_epoch:e})}return n}async function jb(){let[e,t,n]=await Promise.all([wb().todos(),Tb().todos(),Eb().todos()]);return{categorias:e,transacoes:t,recorrencias:n}}function Mb(e){return{id:e.id??0,nome:e.nome,icone:e.icone,cor:e.hex_cor,limite:e.limite_mensal}}function Nb(e){return{id:e.id??0,descricao:e.descricao,valor:e.valor,tipo:e.tipo===0?`receita`:`despesa`,categoria:e.categoria_id,vencimento:e.data_vencimento,pago:e.esta_pago===1}}function Pb(e){return{id:e.id??0,descricao:e.descricao,valor:e.valor,tipo:e.tipo===0?`receita`:`despesa`,categoria:e.categoria_id,periodicidade:e.periodicidade,diaMes:e.dia_mes,diaSemana:e.dia_semana_iso,gerarComoPago:e.gerar_como_pago===1,ativa:e.ativo===1,proxima:e.proxima_geracao_epoch}}function Fb(e){return e>0?{id:e}:{}}function Ib(e){return wb().salvar({...Fb(e.id),nome:e.nome,icone:e.icone,hex_cor:e.cor,limite_mensal:Math.max(0,e.limite)})}function Lb(e,t){let n=Date.now();return Tb().salvar({...Fb(e.id),descricao:e.descricao,valor:Math.abs(e.valor),tipo:e.tipo===`receita`?0:1,categoria_id:e.categoria,data_vencimento:e.vencimento,esta_pago:+!!e.pago,data_criacao:t?.data_criacao===void 0?n:t.data_criacao,data_marcado_pago:e.pago?t?.data_marcado_pago||n:0,...t?.origem_recorrencia===void 0?{}:{origem_recorrencia:t.origem_recorrencia}})}function Rb(e,t){let n={...Fb(e.id),descricao:e.descricao,valor:Math.abs(e.valor),tipo:e.tipo===`receita`?0:1,categoria_id:e.categoria,periodicidade:e.periodicidade,dia_mes:e.diaMes,dia_semana_iso:e.diaSemana,gerar_como_pago:+!!e.gerarComoPago,ativo:+!!e.ativa,data_criacao:t?.data_criacao===void 0?Date.now():t.data_criacao,proxima_geracao_epoch:0};return Eb().salvar({...n,proxima_geracao_epoch:Ob(n)})}function zb(e){let t=e.esta_pago===1?0:1;return Tb().salvar({...e,esta_pago:t,data_marcado_pago:t===1?Date.now():0})}function Bb(e){return Eb().salvar({...e,ativo:e.ativo===1?0:1})}function Vb(e){return wb().excluir(e)}function Hb(e){return Tb().excluir(e)}function Ub(e){return Eb().excluir(e)}var Wb=[],Gb=[],Kb=[],qb=!0,Jb=!1,Yb=``,Xb=!1,Zb=!1,Qb=!1;async function $b(){let e=await jb();Wb=e.categorias,Gb=e.transacoes,Kb=e.recorrencias,C()}function ex(){Zb||Qb||(Qb=!0,(async()=>{try{await $b(),await Ab(Kb)&&await $b(),Zb=!0}finally{Qb=!1,C()}})())}function tx(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function nx(){Jb||(qb=!0,Jb=!0,ix())}var rx=!1;function ix(){rx||(rx=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(Jb=!1,fx?.fechar(),Xb=!1)}))}function ax(e,t){return t>0?e.find(e=>e.id===t):void 0}async function ox(e){if(e.especie===`transacao`){await Lb(e.registro,ax(Gb,e.registro.id)),L(n.financeiro.transacaoSalva),await $b();return}if(e.especie===`categoria`){await Ib(e.registro),L(n.financeiro.categoriaSalva),await $b();return}await Rb(e.registro,ax(Kb,e.registro.id)),L(n.financeiro.recorrenciaSalva),await $b(),await Ab(Kb)&&await $b()}var sx={transacao:{titulo:n.financeiro.excluirTransacao,texto:n.acervo.excluirTexto,feito:n.financeiro.transacaoExcluida,excluir:Hb},categoria:{titulo:n.financeiro.excluirCategoria,texto:n.financeiro.excluirCategoriaTexto,feito:n.financeiro.categoriaExcluida,excluir:Vb},recorrencia:{titulo:n.financeiro.excluirRecorrencia,texto:n.financeiro.excluirRecorrenciaTexto,feito:n.financeiro.recorrenciaExcluida,excluir:Ub}};async function cx(e){let t=sx[e.especie];await Jd({titulo:t.titulo,texto:t.texto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await t.excluir(e.registro.id),L(t.feito),await $b())}async function lx(e){if(e.especie===`transacao`){let t=ax(Gb,e.registro.id);t!==void 0&&await zb(t)}if(e.especie===`recorrencia`){let t=ax(Kb,e.registro.id);t!==void 0&&await Bb(t)}await $b()}var ux={painel:void 0,transacoes:n.financeiro.transacoes,categorias:n.financeiro.categorias,recorrencias:n.financeiro.recorrencias},dx={transacoes:n.financeiro.novaTransacao,categorias:n.financeiro.novaCategoria,recorrencias:n.financeiro.novaRecorrencia},fx;function px(e){return e.detail}var mx={voltarPara(e){return tx(e)===`painel`?`hub/pessoal`:`financeiro`},titulo(e){return ux[tx(e)]},acoes(e){let t=tx(e);if(!(t===`painel`||Xb))return b`
      <st-icon-button
        name="plus"
        label=${dx[t]}
        @click=${()=>fx?.novo()}
      ></st-icon-button>
    `},conteudo(e){return ex(),nx(),Zb?b`
      <st-financeiro
        vista=${tx(e)}
        mes=${Yb}
        ?oculto=${qb}
        .categorias=${Wb.map(Mb)}
        .transacoes=${Gb.map(Nb)}
        .recorrencias=${Kb.map(Pb)}
        ${Dh(e=>{fx=e})}
        @st-navigate=${e=>{let{vista:t}=e.detail;S(`financeiro/${t}`)}}
        @st-month=${e=>{Yb=e.detail.mes}}
        @st-visibility=${e=>{qb=e.detail.oculto}}
        @st-form=${e=>{Xb=e.detail.aberto,C()}}
        @st-save=${e=>void ox(px(e))}
        @st-delete=${e=>void cx(px(e))}
        @st-toggle=${e=>void lx(px(e))}
      ></st-financeiro>
    `:b`<div class="carregando"><st-spinner></st-spinner></div>`}};async function hx(e,t){let r=`${e}\n\n${t}`;if(typeof navigator.share==`function`){try{await navigator.share({title:e,text:r})}catch{}return}try{await navigator.clipboard.writeText(r),L(n.leitura.copiado)}catch{L(n.leitura.semCopiar,`warning`)}}function gx(e,t){return[...t.map(e=>({...e,local:!0})),...e.map(e=>({...e,local:!1}))]}function _x(e,t,n){let r=t.trim().toLowerCase();return r===``?[...e]:e.filter(e=>n(e).some(e=>(e??``).toLowerCase().includes(r)))}function vx(e){return[...e].sort((e,t)=>(e.titulo||``).localeCompare(t.titulo||``,`pt-BR`,{sensitivity:`base`}))}function yx(e){return Number(e.data_criacao)||Number(e.data_atualizacao)||Number(e.id)||0}function bx(e,t=()=>!1){return[...e].sort((e,n)=>{let r=Number(t(n))-Number(t(e));if(r!==0)return r;let i=yx(n)-yx(e);return i===0?Number(n.id??0)-Number(e.id??0):i})}function xx(e){let t=(e??``).trim().split(/\s+/)[0]??``;return/\p{Extended_Pictographic}/u.test(t)?t:`🍽️`}function Sx(e){return(e??``).replace(/<[^>]+>/g,``).trim()===``}var Cx=()=>i(`guias`),wx=()=>i(`guias_local`);async function Tx(e){let[t,n]=await Promise.all([Cx().todos(),wx().todos()]);return vx(_x(gx(t,n),e,e=>[e.titulo,e.texto]))}function Ex(e,t){return(t?wx():Cx()).obter(e)}function Dx(e){return wx().salvar(e)}function Ox(e){return wx().excluir(e)}function kx(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var Ax=400,jx=1200,Mx=[],Nx=``,Px=null,Fx=!1,B=null,Ix,Lx=!1,Rx,zx,Bx=new sf;function Vx(){return document.querySelector(`st-editor`)}function Hx(e){let t=Vx();t!==null&&(t.value=e)}async function Ux(){Mx=await Tx(Nx),C()}async function Wx(e,t){Fx=t,Px=await Ex(e,t)??null,Px===null&&S(`guias`)}async function Gx(e){if(e===null)B={id:null,titulo:``,texto:``,status:``};else{let t=await Ex(e,!0);if(t===void 0){S(`guias`);return}B={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}C(),Hx(B.texto)}function Kx(e){let t=e.args.join(`/`);Ix===t||Lx||(Ix=t,Lx=!0,Bx.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(Px=null,B=null,await Ux()):t===`nova`?(Px=null,await Gx(null)):t===`editar`?(Px=null,await Gx(Number.parseInt(n??``,10))):t===`local`?(B=null,await Wx(Number.parseInt(n??``,10),!0)):(B=null,await Wx(Number.parseInt(t,10),!1))}finally{Lx=!1,C()}})())}function qx(e){Nx=e,clearTimeout(Rx),Rx=setTimeout(()=>void Ux(),Ax)}function Jx(e){let t=Gd(e.texto,180);return b`
    <button
      class="cartao"
      @click=${()=>S(e.local?`guias/local/${e.id??``}`:`guias/${e.id??``}`)}
    >
      <span class="cartao__topo">
        <st-icon class="cartao__icone" name="map-2"></st-icon>
        <span class="cartao__titulo">${e.titulo||n.acervo.semTitulo}</span>
        ${e.local?b`<st-badge variant="success" pill>${n.acervo.meu}</st-badge>`:x}
      </span>

      ${t===``?x:b`<span class="cartao__previa">${t}</span>`}
    </button>
  `}function Yx(){return b`
    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.guias.buscar}
        .value=${Nx}
        @st-input=${e=>qx(e.target.value)}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    ${Mx.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="map-2"></st-icon>
            <p>${n.guias.vazio}</p>
          </div>
        `:b`<div class="cartoes">${Mx.map(e=>Jx(e))}</div>`}
  `}function Xx(e){return`${e.titulo}. ${kx(e)}`}function Zx(e){return b`<div class="prosa">${Vd(Dd(kx(e)))}</div>`}function Qx(e){return b`
    ${Zx(e)}
    ${Bx.overlay(b`
          <h1>${e.titulo}</h1>
          ${Zx(e)}
        `,()=>Xx(e))}
  `}async function $x(){let e=Px?.id;e===void 0||!Fx||await Jd({titulo:n.guias.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await Ox(e),L(n.guias.excluida),S(`guias`))}function eS(){B!==null&&(B={...B,status:n.acervo.salvando},C(),clearTimeout(zx),zx=setTimeout(()=>void tS(),jx))}async function tS(){if(B===null)return;if(B.titulo.trim()===``||Sx(B.texto)){B={...B,status:n.acervo.tituloEConteudo},C();return}let e=Date.now(),t=await Dx({titulo:B.titulo,texto:B.texto,publicar:0,data_atualizacao:e,...B.id===null?{data_criacao:e}:{id:B.id}});B.id===null&&(B={...B,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),B={...B,status:n.acervo.salvoAs(Kd(e))},C()}function nS(e){return b`
    <div class="editor">
      <st-input
        class="editor__titulo"
        placeholder=${n.guias.tituloPlaceholder}
        .value=${e.titulo}
        @st-input=${t=>{B={...e,titulo:t.target.value},eS()}}
      ></st-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <st-editor
        @st-input=${t=>{B={...e,texto:t.detail.value},eS()}}
      ></st-editor>
    </div>
  `}function rS(e){return b`
    ${Bx.botaoApresentar()}
    ${Bx.botaoFala(()=>Xx(e))}
    <st-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void hx(e.titulo,Wd(kx(e)))}
    ></st-icon-button>
    ${Fx?b`
          <st-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>S(`guias/editar/${e.id??``}`)}
          ></st-icon-button>
          <st-icon-button
            name="trash"
            label=${n.guias.excluir}
            @click=${()=>void $x()}
          ></st-icon-button>
        `:x}
  `}var iS={voltarPara(e){return e.args.length===0?`prep`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=B?.titulo.trim()??``;return e===``?n.guias.novaTitulo:e}return Px?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return b`
        <st-icon-button
          name="plus"
          label=${n.guias.nova}
          @click=${()=>S(`guias/nova`)}
        ></st-icon-button>
      `;if(t!==`nova`&&t!==`editar`)return Px===null?void 0:rS(Px)},conteudo(e){Kx(e);let[t]=e.args;return t===void 0?Yx():t===`nova`||t===`editar`?B===null?aS():nS(B):Px===null?aS():Qx(Px)}};function aS(){return b`<div class="carregando"><st-spinner></st-spinner></div>`}var oS={1:10,2:15,3:20},sS={0:45,1:60,2:50,3:30},cS=20,lS=[0,1,2,3],uS=`papiro_jogo_progresso`;function dS(){return{xpSaldo:0,xpHistorico:0,sequenciaAtual:0,acertosTotal:0,errosTotal:0,perguntasRespondidas:[],perguntasAcertadas:[]}}function fS(){try{let e=JSON.parse(localStorage.getItem(uS)??`null`);return{...dS(),...e}}catch{return dS()}}function pS(e){localStorage.setItem(uS,JSON.stringify(e))}function mS(e){return Math.floor(Math.sqrt(Math.max(0,e)/100))}function hS(e){return e>=20?4:e>=10?3:e>=5?2:1}function gS(e){return oS[e]??10}function _S(e){return sS[e]??45}function vS(e,t,n,r){let i=gS(Number(e.dificuldade))*hS(t);return r<=0?i:i+Math.floor(n/r*cS)}function yS(e){return Math.floor((e.acertosTotal+e.errosTotal)/10)}function bS(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function xS(e){return bS([{texto:e.resposta1,original:1},{texto:e.resposta2,original:2},{texto:e.resposta3,original:3},{texto:e.resposta4,original:4}])}function SS(e,t){return t.original===Number(e.correta)}function CS(e,t){return t===0?e:e.filter(e=>Number(e.dificuldade)===t)}function wS(e,t){let n=new Set(t.perguntasRespondidas);return e.filter(e=>!n.has(e.id??-1)).length}function TS(e,t,n){let r=new Set(n.perguntasRespondidas),i=CS(e,t),a=bS(i.filter(e=>!r.has(e.id??-1))),o=bS(i.filter(e=>r.has(e.id??-1)));return[...a,...o].slice(0,10)}function ES(e,t){return bS(t.map((e,t)=>({alternativa:e,indice:t})).filter(({alternativa:t})=>!SS(e,t))).slice(0,2).map(({indice:e})=>e)}function DS(e,t){t!==void 0&&!e.includes(t)&&e.push(t)}function OS(){return i(`perguntas`).todos()}var kS=`lobby`,AS=[],V=dS(),jS=`estudo`,MS=0,NS=``,PS=[],FS=0,IS=[],LS=!1,RS=null,zS=!1,BS=!1,VS=0,HS=0,US=0,WS=!1,GS=[],KS=0,qS=0,JS=0,YS=!1,XS,ZS=!1,QS=!1;function $S(){ZS||QS||(QS=!0,tC(),(async()=>{try{AS=await OS(),V=fS(),ZS=!0}finally{QS=!1,C()}})())}var eC=!1;function tC(){eC||(eC=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(kS===`quiz`&&jS===`desafio`&&!LS&&(YS=!0,KS=Math.max(0,Math.ceil((JS-Date.now())/1e3))),nC())}))}function nC(){clearInterval(XS),XS=void 0}function rC(){nC(),XS=setInterval(()=>{if(KS=Math.max(0,Math.ceil((JS-Date.now())/1e3)),KS===0){nC(),lC(null);return}C()},250)}function iC(){qS=_S(MS),KS=qS,JS=Date.now()+qS*1e3,YS=!1,rC()}function aC(){YS=!YS,YS?(KS=Math.max(0,Math.ceil((JS-Date.now())/1e3)),nC()):(JS=Date.now()+KS*1e3,rC()),C()}function oC(){return PS[FS]}function sC(){let e=oC();e!==void 0&&(LS=!1,RS=null,zS=!1,BS=!1,VS=0,WS=!1,GS=[],IS=xS(e),nC(),YS=!1,jS===`desafio`?iC():(qS=0,KS=0))}function cC(){if(CS(AS,MS).length<2){NS=n.jogo.semPerguntas,C();return}NS=``,PS=TS(AS,MS,V),FS=0,HS=0,US=0,sC(),kS=`quiz`,C()}function lC(e){if(LS)return;let t=oC();t!==void 0&&(nC(),LS=!0,BS=e===null,zS=e!==null&&SS(t,e),zS?(HS+=1,V.acertosTotal+=1,V.sequenciaAtual+=1,VS=vS(t,V.sequenciaAtual,KS,qS),V.xpSaldo+=VS,V.xpHistorico+=VS,US+=VS,DS(V.perguntasAcertadas,t.id)):(V.errosTotal+=1,V.sequenciaAtual=0),DS(V.perguntasRespondidas,t.id),pS(V),C())}function uC(){if(FS+1>=PS.length){kS=`resultado`,C();return}FS+=1,sC(),C()}function dC(){nC(),kS=`lobby`,C()}function fC(){let e=oC();e===void 0||LS||WS||V.xpSaldo<15||(V.xpSaldo-=15,pS(V),GS=ES(e,IS),WS=!0,C())}async function pC(){await Jd({titulo:n.jogo.reiniciarTitulo,texto:n.jogo.reiniciarTexto,rotuloConfirmar:n.jogo.reiniciar})&&(V.perguntasRespondidas=[],V.perguntasAcertadas=[],pS(V),C())}function mC(e,t,n=`neutro`){return b`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function hC(){let e=CS(AS,MS),t=wS(e,V),r=e.length>0&&t===0,i=AS.length===0;return b`
    <div class="placares">
      ${mC(t,n.jogo.restantes,`primaria`)}
      ${mC(V.acertosTotal,n.jogo.acertos,`sucesso`)}
      ${mC(V.errosTotal,n.jogo.erros,`perigo`)}
      ${mC(yS(V),n.jogo.partidas)}
      ${mC(V.xpSaldo,n.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${n.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>b`
          <button
            class="modo"
            ?data-ativo=${jS===e}
            @click=${()=>{jS=e,NS=``,C()}}
          >
            <st-icon name=${e===`estudo`?`book`:`bolt`}></st-icon>
            ${n.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${jS===`desafio`?b`<p class="discreto">${n.jogo.desafioAjuda}</p>`:x}

    <h2 class="secao">${n.jogo.dificuldade}</h2>
    <div class="chips">
      ${lS.map(e=>b`
          <button
            class="chip"
            ?data-ativo=${MS===e}
            @click=${()=>{MS=e,NS=``,C()}}
          >
            ${n.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <st-button variant="primary" class="jogo__jogar" ?disabled=${i} @click=${cC}>
      <st-icon slot="prefix" name="player-play"></st-icon>
      ${i?n.jogo.semBanco:n.jogo.jogar}
    </st-button>

    ${NS===``?x:b`<st-alert variant="warning" open>${NS}</st-alert>`}

    ${r?b`
          <st-alert variant="success" open>
            <st-icon slot="icon" name="trophy"></st-icon>
            ${n.jogo.tudoConcluido}
            <st-button size="small" variant="success" outline @click=${()=>void pC()}>
              <st-icon slot="prefix" name="rotate"></st-icon>${n.jogo.reiniciar}
            </st-button>
          </st-alert>
        `:x}
  `}var gC=/(https?:\/\/[^\s<]+)/g,_C=/^https?:\/\/[^\s<]+$/;function vC(e){return b`
    <p class="jogo__referencia">
      ${e.split(gC).map(e=>_C.test(e)?b`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function yC(e,t,n){return LS?SS(e,t)?`certa`:n===RS?`errada`:`apagada`:`neutro`}function bC(e){return String.fromCharCode(65+e)}function xC(){let e=PS.length===0?0:Math.round(FS/PS.length*100),t=hS(V.sequenciaAtual);return b`
    <div class="quiz__topo">
      <st-icon-button name="x" label=${n.jogo.encerrar} @click=${dC}></st-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${FS+1}/${PS.length}</span>

      ${t>1?b`<st-badge variant="warning" pill>x${t}</st-badge>`:x}
      ${jS===`desafio`?b`
            <st-badge variant=${KS<=10?`danger`:`neutral`} pill>
              ${YS?n.jogo.pausadoSelo:n.jogo.segundos(KS)}
            </st-badge>
          `:x}
    </div>
  `}function SC(){let e=oC();return e===void 0?b`<div class="carregando"><st-spinner></st-spinner></div>`:b`
    ${xC()}

    <div class="jogo__pergunta">${Vd(Dd(e.pergunta))}</div>
    ${e.referencia===``?x:vC(e.referencia)}

    <div class="alternativas">
      ${IS.map((t,n)=>b`
          <button
            class="alternativa"
            data-tom=${yC(e,t,n)}
            ?data-oculta=${GS.includes(n)}
            ?disabled=${LS||GS.includes(n)}
            @click=${()=>lC(t)}
          >
            <span class="alternativa__letra">${bC(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${LS?b`
          <st-alert variant=${zS?`success`:`danger`} open>
            ${BS?n.jogo.feedbackTempo:zS?n.jogo.feedbackCorreto(VS):n.jogo.feedbackIncorreto}
          </st-alert>

          ${e.explicacao===``?x:b`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <st-icon name="info-circle"></st-icon>${n.jogo.explicacao}
                  </span>
                  <div class="prosa">${Vd(Dd(e.explicacao))}</div>
                </div>
              `}

          <st-button variant="primary" class="jogo__jogar" @click=${uC}>
            ${FS+1<PS.length?n.jogo.proxima:n.jogo.verResultado}
            <st-icon slot="suffix" name="arrow-right"></st-icon>
          </st-button>
        `:b`
          <div class="jogo__controles">
            <st-button
              size="small"
              variant="primary"
              outline
              ?disabled=${WS||V.xpSaldo<15}
              @click=${fC}
            >
              <st-icon slot="prefix" name="bulb"></st-icon>${n.jogo.dica(15)}
            </st-button>

            ${jS===`desafio`?b`
                  <st-button size="small" outline @click=${aC}>
                    <st-icon
                      slot="prefix"
                      name=${YS?`player-play`:`player-pause`}
                    ></st-icon>
                    ${YS?n.jogo.retomar:n.jogo.pausar}
                  </st-button>
                `:x}
          </div>
        `}
  `}function CC(e){return e===100?n.jogo.resultados.perfeito:e>=80?n.jogo.resultados.excelente:e>=60?n.jogo.resultados.muitoBem:e>=40?n.jogo.resultados.continue:n.jogo.resultados.naoDesista}function wC(){let e=PS.length,t=e===0?0:Math.round(HS/e*100);return b`
    <h2 class="resultado__titulo">${CC(t)}</h2>
    <p class="resultado__linha">${n.jogo.acertosDe(HS,e,t)}</p>

    <div class="placares">
      ${mC(`+${US}`,n.jogo.xpGanho,`aviso`)}
      ${mC(`Nv ${mS(V.xpHistorico)}`,n.jogo.nivel,`primaria`)}
      ${mC(V.xpSaldo,n.jogo.xpSaldo)}
    </div>

    <st-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>S(xp({origem:`jogo`,referencia:n.jogo.cadernoReferencia,titulo:n.jogo.cadernoTitulo,conteudo:n.jogo.cadernoConteudo(HS,e,t)}))}
    >
      <st-icon slot="prefix" name="bookmark"></st-icon>${n.jogo.anotarNoCaderno}
    </st-button>

    <div class="jogo__controles">
      <st-button
        outline
        @click=${()=>{kS=`lobby`,V=fS(),C()}}
      >
        <st-icon slot="prefix" name="rotate"></st-icon>${n.jogo.jogarDeNovo}
      </st-button>
      <st-button @click=${()=>S(`home`)}>
        <st-icon slot="prefix" name="home"></st-icon>${n.jogo.inicio}
      </st-button>
    </div>
  `}var TC={voltarPara(){return`hub/estudo`},titulo(){return kS===`resultado`?n.jogo.tituloResultado:void 0},conteudo(){return $S(),ZS?kS===`quiz`?SC():kS===`resultado`?wC():hC():b`<div class="carregando"><st-spinner></st-spinner></div>`}},EC=[{nome:`Gênesis`,capitulos:50},{nome:`Êxodo`,capitulos:40},{nome:`Levítico`,capitulos:27},{nome:`Números`,capitulos:36},{nome:`Deuteronômio`,capitulos:34},{nome:`Josué`,capitulos:24},{nome:`Juízes`,capitulos:21},{nome:`Rute`,capitulos:4},{nome:`1 Samuel`,capitulos:31},{nome:`2 Samuel`,capitulos:24},{nome:`1 Reis`,capitulos:22},{nome:`2 Reis`,capitulos:25},{nome:`1 Crônicas`,capitulos:29},{nome:`2 Crônicas`,capitulos:36},{nome:`Esdras`,capitulos:10},{nome:`Neemias`,capitulos:13},{nome:`Ester`,capitulos:10},{nome:`Jó`,capitulos:42},{nome:`Salmos`,capitulos:150},{nome:`Provérbios`,capitulos:31},{nome:`Eclesiastes`,capitulos:12},{nome:`Cântico de Salomão`,capitulos:8},{nome:`Isaías`,capitulos:66},{nome:`Jeremias`,capitulos:52},{nome:`Lamentações`,capitulos:5},{nome:`Ezequiel`,capitulos:48},{nome:`Daniel`,capitulos:12},{nome:`Oseias`,capitulos:14},{nome:`Joel`,capitulos:3},{nome:`Amós`,capitulos:9},{nome:`Obadias`,capitulos:1},{nome:`Jonas`,capitulos:4},{nome:`Miqueias`,capitulos:7},{nome:`Naum`,capitulos:3},{nome:`Habacuque`,capitulos:3},{nome:`Sofonias`,capitulos:3},{nome:`Ageu`,capitulos:2},{nome:`Zacarias`,capitulos:14},{nome:`Malaquias`,capitulos:4},{nome:`Mateus`,capitulos:28},{nome:`Marcos`,capitulos:16},{nome:`Lucas`,capitulos:24},{nome:`João`,capitulos:21},{nome:`Atos`,capitulos:28},{nome:`Romanos`,capitulos:16},{nome:`1 Coríntios`,capitulos:16},{nome:`2 Coríntios`,capitulos:13},{nome:`Gálatas`,capitulos:6},{nome:`Efésios`,capitulos:6},{nome:`Filipenses`,capitulos:4},{nome:`Colossenses`,capitulos:4},{nome:`1 Tessalonicenses`,capitulos:5},{nome:`2 Tessalonicenses`,capitulos:3},{nome:`1 Timóteo`,capitulos:6},{nome:`2 Timóteo`,capitulos:4},{nome:`Tito`,capitulos:3},{nome:`Filêmon`,capitulos:1},{nome:`Hebreus`,capitulos:13},{nome:`Tiago`,capitulos:5},{nome:`1 Pedro`,capitulos:5},{nome:`2 Pedro`,capitulos:3},{nome:`1 João`,capitulos:5},{nome:`2 João`,capitulos:1},{nome:`3 João`,capitulos:1},{nome:`Judas`,capitulos:1},{nome:`Apocalipse`,capitulos:22}],DC=EC.reduce((e,t)=>e+t.capitulos,0),OC=[{escritor:`Moisés`,local:`Deserto`,quando:`1513 AEC`,ano:-1513},{escritor:`Moisés`,local:`Deserto`,quando:`1512 AEC`,ano:-1512},{escritor:`Moisés`,local:`Deserto`,quando:`1512 AEC`,ano:-1512},{escritor:`Moisés`,local:`Deserto e Planícies de Moabe`,quando:`1473 AEC`,ano:-1473},{escritor:`Moisés`,local:`Planícies de Moabe`,quando:`1473 AEC`,ano:-1473},{escritor:`Josué`,local:`Canaã`,quando:`c. 1450 AEC`,ano:-1450},{escritor:`Samuel`,local:`Israel`,quando:`c. 1100 AEC`,ano:-1100},{escritor:`Samuel`,local:`Israel`,quando:`c. 1090 AEC`,ano:-1090},{escritor:`Samuel; Gade; Natã`,local:`Israel`,quando:`c. 1078 AEC`,ano:-1078,grupo:`Samuel`},{escritor:`Gade; Natã`,local:`Israel`,quando:`c. 1040 AEC`,ano:-1040,grupo:`Gade e Natã`},{escritor:`Jeremias`,local:`Judá`,quando:`580 AEC`,ano:-580},{escritor:`Jeremias`,local:`Judá e Egito`,quando:`580 AEC`,ano:-580},{escritor:`Esdras`,local:`Jerusalém (?)`,quando:`c. 460 AEC`,ano:-460},{escritor:`Esdras`,local:`Jerusalém (?)`,quando:`c. 460 AEC`,ano:-460},{escritor:`Esdras`,local:`Jerusalém`,quando:`c. 460 AEC`,ano:-460},{escritor:`Neemias`,local:`Jerusalém`,quando:`depois de 443 AEC`,ano:-443},{escritor:`Mordecai`,local:`Susã, Elão`,quando:`c. 475 AEC`,ano:-475},{escritor:`Moisés`,local:`Deserto`,quando:`c. 1473 AEC`,ano:-1473},{escritor:`Davi e outros`,local:`—`,quando:`c. 460 AEC`,ano:-460},{escritor:`Salomão; Agur; Lemuel`,local:`Jerusalém`,quando:`c. 717 AEC`,ano:-717,grupo:`Salomão`},{escritor:`Salomão`,local:`Jerusalém`,quando:`antes de 1000 AEC`,ano:-1e3},{escritor:`Salomão`,local:`Jerusalém`,quando:`c. 1020 AEC`,ano:-1020},{escritor:`Isaías`,local:`Jerusalém`,quando:`depois de 732 AEC`,ano:-732},{escritor:`Jeremias`,local:`Judá; Egito`,quando:`580 AEC`,ano:-580},{escritor:`Jeremias`,local:`Perto de Jerusalém`,quando:`607 AEC`,ano:-607},{escritor:`Ezequiel`,local:`Babilônia`,quando:`c. 591 AEC`,ano:-591},{escritor:`Daniel`,local:`Babilônia`,quando:`c. 536 AEC`,ano:-536},{escritor:`Oseias`,local:`Samaria (distrito)`,quando:`depois de 745 AEC`,ano:-745},{escritor:`Joel`,local:`Judá`,quando:`c. 820 AEC (?)`,ano:-820},{escritor:`Amós`,local:`Judá`,quando:`c. 804 AEC`,ano:-804},{escritor:`Obadias`,local:`—`,quando:`c. 607 AEC`,ano:-607},{escritor:`Jonas`,local:`—`,quando:`c. 844 AEC`,ano:-844},{escritor:`Miqueias`,local:`Judá`,quando:`antes de 717 AEC`,ano:-718},{escritor:`Naum`,local:`Judá`,quando:`antes de 632 AEC`,ano:-633},{escritor:`Habacuque`,local:`Judá`,quando:`c. 628 AEC (?)`,ano:-628},{escritor:`Sofonias`,local:`Judá`,quando:`antes de 648 AEC`,ano:-649},{escritor:`Ageu`,local:`Jerusalém reconstruída`,quando:`520 AEC`,ano:-520},{escritor:`Zacarias`,local:`Jerusalém reconstruída`,quando:`518 AEC`,ano:-518},{escritor:`Malaquias`,local:`Jerusalém reconstruída`,quando:`depois de 443 AEC`,ano:-443},{escritor:`Mateus`,local:`Israel`,quando:`c. 41 EC`,ano:41},{escritor:`Marcos`,local:`Roma`,quando:`c. 60–65 EC`,ano:62},{escritor:`Lucas`,local:`Cesareia`,quando:`c. 56–58 EC`,ano:57},{escritor:`Apóstolo João`,local:`Éfeso, ou perto`,quando:`c. 98 EC`,ano:98},{escritor:`Lucas`,local:`Roma`,quando:`c. 61 EC`,ano:61},{escritor:`Paulo`,local:`Corinto`,quando:`c. 56 EC`,ano:56},{escritor:`Paulo`,local:`Éfeso`,quando:`c. 55 EC`,ano:55},{escritor:`Paulo`,local:`Macedônia`,quando:`c. 55 EC`,ano:55},{escritor:`Paulo`,local:`Corinto ou Antioquia da Síria`,quando:`c. 50–52 EC`,ano:51},{escritor:`Paulo`,local:`Roma`,quando:`c. 60–61 EC`,ano:60},{escritor:`Paulo`,local:`Roma`,quando:`c. 60–61 EC`,ano:60},{escritor:`Paulo`,local:`Roma`,quando:`c. 60–61 EC`,ano:60},{escritor:`Paulo`,local:`Corinto`,quando:`c. 50 EC`,ano:50},{escritor:`Paulo`,local:`Corinto`,quando:`c. 51 EC`,ano:51},{escritor:`Paulo`,local:`Macedônia`,quando:`c. 61–64 EC`,ano:63},{escritor:`Paulo`,local:`Roma`,quando:`c. 65 EC`,ano:65},{escritor:`Paulo`,local:`Macedônia (?)`,quando:`c. 61–64 EC`,ano:63},{escritor:`Paulo`,local:`Roma`,quando:`c. 60–61 EC`,ano:60},{escritor:`Paulo`,local:`Roma`,quando:`c. 61 EC`,ano:61},{escritor:`Tiago (irmão de Jesus)`,local:`Jerusalém`,quando:`antes de 62 EC`,ano:61},{escritor:`Pedro`,local:`Babilônia`,quando:`c. 62–64 EC`,ano:63},{escritor:`Pedro`,local:`Babilônia (?)`,quando:`c. 64 EC`,ano:64},{escritor:`Apóstolo João`,local:`Éfeso, ou perto`,quando:`c. 98 EC`,ano:98},{escritor:`Apóstolo João`,local:`Éfeso, ou perto`,quando:`c. 98 EC`,ano:98},{escritor:`Apóstolo João`,local:`Éfeso, ou perto`,quando:`c. 98 EC`,ano:98},{escritor:`Judas (irmão de Jesus)`,local:`Israel (?)`,quando:`c. 65 EC`,ano:65},{escritor:`Apóstolo João`,local:`Patmos`,quando:`c. 96 EC`,ano:96}],kC=EC.map((e,t)=>t).sort((e,t)=>(OC[e]?.ano??0)-(OC[t]?.ano??0)||e-t),AC=(()=>{let e=new Map;for(let t of kC){let n=OC[t];if(n===void 0)continue;let r=n.grupo??n.escritor,i=e.get(r);i===void 0?e.set(r,[t]):i.push(t)}return[...e].map(([e,t])=>({nome:e,livros:[...t].sort((e,t)=>e-t)}))})(),jC=[{id:`n08`,dia:`Nisã 8`,evento:`Jesus chega a Betânia, seis dias antes da Páscoa`,leituras:[`João 11:55–12:1`]},{id:`n09a`,dia:`Nisã 9 (noite)`,evento:`Jantar na casa de Simão, o leproso; Maria unge Jesus com óleo perfumado`,leituras:[`Mateus 26:6-13`,`Marcos 14:3-9`,`João 12:2-11`]},{id:`n09b`,dia:`Nisã 9 (dia)`,evento:`Entra em Jerusalém como Rei, montado num jumentinho`,leituras:[`Mateus 21:1-11, 14-17`,`Marcos 11:1-11`,`Lucas 19:29-44`,`João 12:12-19`]},{id:`n10`,dia:`Nisã 10`,evento:`Amaldiçoa a figueira; purifica o templo pela segunda vez`,leituras:[`Mateus 21:12, 13, 18, 19`,`Marcos 11:12-19`,`Lucas 19:45-48`,`João 12:20-50`]},{id:`n11`,dia:`Nisã 11`,evento:`Ensina no templo com ilustrações; dá o sinal da sua presença`,leituras:[`Mateus 21:19–25:46`,`Marcos 11:20–13:37`,`Lucas 20:1–21:38`]},{id:`n12`,dia:`Nisã 12`,evento:`Os líderes conspiram para matá-lo; Judas combina a traição`,leituras:[`Mateus 26:1-5, 14-16`,`Marcos 14:1, 2, 10, 11`,`Lucas 22:1-6`]},{id:`n13`,dia:`Nisã 13`,evento:`Preparativos para a última Páscoa`,leituras:[`Mateus 26:17-19`,`Marcos 14:12-16`,`Lucas 22:7-13`]},{id:`n14a`,dia:`Nisã 14 (noite)`,evento:`Celebra a Páscoa; institui a Celebração da sua morte; é traído e preso`,leituras:[`Mateus 26:20-75`,`Marcos 14:17-72`,`Lucas 22:14-65`,`João 13:1–18:27`]},{id:`n14b`,dia:`Nisã 14 (dia)`,evento:`É julgado e executado; morre por volta das 15h; é sepultado`,leituras:[`Mateus 27:1-61`,`Marcos 15:1-47`,`Lucas 22:66–23:56`,`João 18:28–19:42`]},{id:`n15`,dia:`Nisã 15`,evento:`Sábado; guardas vigiam o túmulo`,leituras:[`Mateus 27:62-66`,`Marcos 16:1`]},{id:`n16`,dia:`Nisã 16`,evento:`Jesus é ressuscitado e aparece aos discípulos`,leituras:[`Mateus 28:1-15`,`Marcos 16:2-8`,`Lucas 24:1-49`,`João 20:1-25`]}],MC=e({VISOES:()=>IC,alternarCapitulo:()=>nw,alternarDia:()=>iw,capituloLido:()=>KC,capitulosDe:()=>WC,capitulosDoGrupo:()=>$C,detalheDoLivro:()=>ow,diasLidos:()=>tw,itensDaVisao:()=>aw,lerCelebracao:()=>BC,lerLidos:()=>RC,lerVisao:()=>HC,lidosDoGrupo:()=>QC,lidosDoLivro:()=>GC,livroCompleto:()=>JC,livrosConcluidos:()=>ZC,marcarLivro:()=>rw,percentualCelebracao:()=>ew,percentualDoLivro:()=>qC,percentualGeral:()=>XC,salvarCelebracao:()=>VC,salvarLidos:()=>zC,salvarVisao:()=>UC,totalLidos:()=>YC}),NC=`papiro_leitura_biblia`,PC=`papiro_leitura_visao`,FC=`papiro_leitura_celebracao`,IC=[`canonica`,`cronologica`,`escritor`,`celebracao`];function LC(e){try{let t=JSON.parse(localStorage.getItem(e)??`{}`);return typeof t==`object`&&t?t:{}}catch{return{}}}function RC(){let e=new Map;for(let[t,n]of Object.entries(LC(NC))){if(typeof n!=`object`||!n)continue;let r=Object.keys(n).map(Number).filter(e=>Number.isInteger(e));r.length>0&&e.set(Number(t),new Set(r))}return e}function zC(e){let t={};for(let[n,r]of e)r.size!==0&&(t[String(n)]=Object.fromEntries([...r].map(e=>[String(e),1])));localStorage.setItem(NC,JSON.stringify(t))}function BC(){return new Set(Object.keys(LC(FC)))}function VC(e){localStorage.setItem(FC,JSON.stringify(Object.fromEntries([...e].map(e=>[e,1]))))}function HC(){let e=localStorage.getItem(PC);return IC.includes(e)?e:`canonica`}function UC(e){localStorage.setItem(PC,e)}function WC(e){return EC[e]?.capitulos??0}function GC(e,t){return e.get(t)?.size??0}function KC(e,t,n){return e.get(t)?.has(n)===!0}function qC(e,t){let n=WC(t);return n===0?0:Math.round(GC(e,t)/n*100)}function JC(e,t){let n=WC(t);return n>0&&GC(e,t)>=n}function YC(e){let t=0;for(let n of e.values())t+=n.size;return t}function XC(e){return Math.round(YC(e)/DC*100)}function ZC(e){return EC.reduce((t,n,r)=>t+ +!!JC(e,r),0)}function QC(e,t){return t.reduce((t,n)=>t+GC(e,n),0)}function $C(e){return e.reduce((e,t)=>e+WC(t),0)}function ew(e){return Math.round(tw(e)/jC.length*100)}function tw(e){return jC.filter(t=>e.has(t.id)).length}function nw(e,t,n){let r=new Map(e),i=new Set(r.get(t));return i.delete(n)||i.add(n),r.set(t,i),zC(r),r}function rw(e,t,n){let r=new Map(e),i=WC(t);return r.set(t,n?new Set(Array.from({length:i},(e,t)=>t+1)):new Set),zC(r),r}function iw(e,t){let n=new Set(e);return n.delete(t)||n.add(t),VC(n),n}function aw(e){return e===`cronologica`?kC.map(e=>({tipo:`livro`,livro:e})):e===`escritor`?AC.flatMap(e=>[{tipo:`grupo`,grupo:e},...e.livros.map(e=>({tipo:`livro`,livro:e}))]):EC.map((e,t)=>({tipo:`livro`,livro:t}))}function ow(e,t){let n=OC[t];return n===void 0?``:e===`cronologica`?`${n.quando} · ${n.escritor} · ${n.local}`:e===`escritor`?`${n.quando} · ${n.local}`:``}var sw=new Map,cw=new Set,lw=`canonica`,uw=null,dw=!1;function fw(){dw||(dw=!0,sw=RC(),cw=BC(),lw=HC())}function pw(e){lw=e,uw=null,UC(e),C()}function mw(e){return b`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${e}%`}></div>
    </div>
  `}function hw(){let e=XC(sw);return b`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${e}%</span>
      </div>
      ${mw(e)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.capitulos(YC(sw),DC)} ·
        ${n.leituraBiblia.livros(ZC(sw),EC.length)}
      </span>
    </div>
  `}function gw(e){let t=WC(e);return b`
    <div class="capitulos">
      ${Array.from({length:t},(e,t)=>t+1).map(t=>b`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${KC(sw,e,t)}
            aria-pressed=${KC(sw,e,t)}
            @click=${()=>{sw=nw(sw,e,t),C()}}
          >
            ${t}
          </button>
        `)}
    </div>

    <div class="capitulos__acoes">
      <st-button
        size="small"
        variant="success"
        outline
        @click=${()=>{sw=rw(sw,e,!0),C()}}
      >
        <st-icon slot="prefix" name="checks"></st-icon>${n.leituraBiblia.livroInteiro}
      </st-button>
      <st-button
        size="small"
        outline
        @click=${()=>{sw=rw(sw,e,!1),C()}}
      >
        <st-icon slot="prefix" name="eraser"></st-icon>${n.leituraBiblia.limpar}
      </st-button>
    </div>
  `}function _w(e){let t=uw===e,n=JC(sw,e),r=ow(lw,e);return b`
    <div class="livro" ?data-completo=${n}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${t}
        @click=${()=>{uw=t?null:e,C()}}
      >
        <st-icon class="livro__icone" name=${n?`circle-check`:`book`}></st-icon>
        <span class="livro__nome">${EC[e]?.nome??``}</span>
        <span class="livro__contagem">${GC(sw,e)}/${WC(e)}</span>
        <st-icon name=${t?`chevron-up`:`chevron-down`}></st-icon>
      </button>

      ${r===``?x:b`<span class="livro__detalhe">${r}</span>`}
      ${mw(qC(sw,e))}
      ${t?gw(e):x}
    </div>
  `}function vw(e,t){return b`
    <div class="grupo-escritor">
      <st-icon name="user-check"></st-icon>
      <span class="grupo-escritor__nome">${e}</span>
      <span class="grupo-escritor__contagem">
        ${n.leituraBiblia.capituloAbrev(QC(sw,t),$C(t))}
      </span>
    </div>
  `}function yw(e){return e.tipo===`grupo`?vw(e.grupo.nome,e.grupo.livros):_w(e.livro)}function bw(){return b`
    ${hw()}
    <div class="livros">${aw(lw).map(e=>yw(e))}</div>
  `}function xw(){let e=ew(cw);return b`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${e}%</span>
      </div>
      ${mw(e)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.trechos(tw(cw),jC.length)}
      </span>
      <p class="progresso-leitura__nota">${n.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${jC.map(e=>{let t=cw.has(e.id);return b`
          <div class="dia" ?data-lido=${t}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${t}
              @click=${()=>{cw=iw(cw,e.id),C()}}
            >
              <st-icon class="dia__icone" name=${t?`circle-check`:`circle`}></st-icon>
              <span class="dia__texto">
                <span class="dia__nome">${e.dia}</span>
                <span class="dia__evento">${e.evento}</span>
                <span class="dia__leituras">
                  ${e.leituras.map(e=>b`<st-badge variant="success" pill>${e}</st-badge>`)}
                </span>
              </span>
            </button>
          </div>
        `})}
    </div>
  `}var Sw={canonica:`list-numbers`,cronologica:`hourglass`,escritor:`user-check`,celebracao:`calendar-week`};function Cw(){return b`
    <div class="chips" role="group" aria-label=${n.leituraBiblia.visualizacao}>
      ${IC.map(e=>b`
          <button
            class="chip"
            ?data-ativo=${lw===e}
            title=${n.leituraBiblia.visoesAjuda[e]}
            @click=${()=>pw(e)}
          >
            <st-icon name=${Sw[e]}></st-icon>
            ${n.leituraBiblia.visoes[e]}
          </button>
        `)}
    </div>
  `}var ww={voltarPara(){return`hub/estudo`},conteudo(){return fw(),b`
      ${Cw()}
      ${lw===`celebracao`?xw():bw()}
    `}},Tw=e({AUTOMATICAS:()=>Dw,CATEGORIAS:()=>Ew,ajustar:()=>Yw,alternarConclusao:()=>Xw,carregarFontes:()=>Fw,categoriaDe:()=>Ow,concluida:()=>Rw,excluirMeta:()=>Jw,listar:()=>Gw,listarMetas:()=>Kw,medida:()=>Hw,percentual:()=>zw,rotuloCategoria:()=>Ww,salvarMeta:()=>qw,statusPrazo:()=>Vw,sufixo:()=>Uw,valorAtual:()=>Lw,valorAutomatico:()=>Iw}),Ew=[{chave:`fin_poupanca`,modulo:`Financeiro`,ativo:`Poupança / Saldo`,unidade:`VALOR`},{chave:`fin_gastos`,modulo:`Financeiro`,ativo:`Total de Gastos`,unidade:`VALOR`},{chave:`fin_categoria`,modulo:`Financeiro`,ativo:`Categoria Específica`,unidade:`VALOR`,precisaAtivo:!0},{chave:`min_horas`,modulo:`Ministério`,ativo:`Horas de Campo`,unidade:`TEMPO_HORAS`},{chave:`min_estudos`,modulo:`Ministério`,ativo:`Estudos Bíblicos`,unidade:`QUANTIDADE`},{chave:`min_revisitas`,modulo:`Ministério`,ativo:`Revisitas`,unidade:`QUANTIDADE`},{chave:`est_foco_min`,modulo:`Modo Estudo`,ativo:`Minutos de Foco`,unidade:`TEMPO_MINUTOS`},{chave:`est_sessoes`,modulo:`Modo Estudo`,ativo:`Sessões Completadas`,unidade:`QUANTIDADE`},{chave:`jog_perguntas`,modulo:`Jogo Língua Pura`,ativo:`Perguntas Respondidas`,unidade:`QUANTIDADE`},{chave:`poe_lidas`,modulo:`Poesias`,ativo:`Poesias Lidas`,unidade:`QUANTIDADE`}],Dw=new Set([`fin_poupanca`,`fin_gastos`,`fin_categoria`,`min_horas`,`min_estudos`,`min_revisitas`,`est_foco_min`,`est_sessoes`,`jog_perguntas`]);function Ow(e){return Ew.find(t=>t.chave===e)??{chave:e,modulo:`Geral`,ativo:`Meta`,unidade:`QUANTIDADE`}}var kw=0,Aw=1,jw=`papiro_jogo_progresso`;function Mw(e,t){return e.reduce((e,n)=>e+(Number(t(n))||0),0)}function Nw(e,t){try{return JSON.parse(localStorage.getItem(e)??`null`)??t}catch{return t}}var Pw=()=>i(`meta`);async function Fw(){let e=()=>()=>Promise.resolve([]),[t,n,r,a,o,s]=await Promise.all([i(`transacoes`).todos().catch(e()),i(`categorias_financeiro`).todos().catch(e()),i(`relatorios_ministerio`).todos().catch(e()),i(`contadores_ministerio`).todos().catch(e()),i(`estudos_biblicos`).todos().catch(e()),i(`sessoes_estudo`).todos().catch(e())]),c=t.filter(e=>e.tipo===Aw),l=new Map(n.map(e=>[e.id,e.nome??``])),u={};for(let e of c){let t=l.get(e.categoria_id)??``;u[t]=(u[t]??0)+(Number(e.valor)||0)}return{fontes:{receitas:Mw(t.filter(e=>e.tipo===kw),e=>e.valor),despesas:Mw(c,e=>e.valor),despesaPorCategoria:u,horas:Mw(r,e=>e.horas),revisitas:Mw(a,e=>e.revisitas),estudos:o.length,focoMin:Mw(s,e=>e.duracao_minutos),sessoes:s.length,perguntas:(Nw(jw,{}).perguntasRespondidas??[]).length},categoriasFinanceiro:[...n].sort((e,t)=>(e.nome??``).localeCompare(t.nome??``,`pt-BR`,{sensitivity:`base`}))}}function Iw(e,t){if(t===null||!Dw.has(e.item))return null;switch(e.item){case`fin_poupanca`:return t.receitas-t.despesas;case`fin_gastos`:return t.despesas;case`fin_categoria`:return t.despesaPorCategoria[e.ativo_nome]??0;case`min_horas`:return t.horas;case`min_estudos`:return t.estudos;case`min_revisitas`:return t.revisitas;case`est_foco_min`:return t.focoMin;case`est_sessoes`:return t.sessoes;case`jog_perguntas`:return t.perguntas;default:return null}}function Lw(e,t){let n=Iw(e,t);return n===null?Number(e.progresso_atual)||0:n}function Rw(e,t){if(e.esta_concluida===1)return!0;let n=Number(e.progresso_alvo)||0;return Dw.has(e.item)&&n>0&&Lw(e,t)>=n}function zw(e,t){let n=Number(e.progresso_alvo)||0;return n<=0?0:Math.max(0,Math.min(100,Math.round(Lw(e,t)/n*100)))}var Bw=6048e5;function Vw(e,t){if(Rw(e,t))return`concluida`;let n=Number(e.prazo_final)||0;if(n<=0)return`normal`;let r=Date.now();return n<r?`atrasada`:n<r+Bw?`proxima`:`normal`}function Hw(e,t){let n=Ow(t).unidade;return n===`VALOR`?l(e):n===`TEMPO_HORAS`?`${d(e)} h`:n===`TEMPO_MINUTOS`?`${d(e)} min`:n===`PERCENTUAL`?`${d(e)}%`:d(e)}function Uw(e){return{VALOR:`R$`,TEMPO_HORAS:`h`,TEMPO_MINUTOS:`min`,PERCENTUAL:`%`,QUANTIDADE:`un`}[Ow(e).unidade]}function Ww(e){let t=Ow(e.item),n=`${t.modulo}: ${t.ativo}`;return e.ativo_nome===``?n:`${n} · ${e.ativo_nome}`}function Gw(e,t,n,r){let i=r.trim().toLowerCase();return e.filter(e=>{let r=Rw(e,t);return n===`ativas`&&r||n===`concluidas`&&!r?!1:i===``||e.titulo.toLowerCase().includes(i)||Ww(e).toLowerCase().includes(i)}).sort((e,n)=>{let r=Number(Rw(e,t))-Number(Rw(n,t));return r===0?(e.prazo_final||0)-(n.prazo_final||0):r})}function Kw(){return Pw().todos()}function qw(e){return Pw().salvar(e)}function Jw(e){return Pw().excluir(e)}async function Yw(e,t){let n=Number(e.progresso_alvo)||1,r=Math.max(1,Math.round(n/10)),i=Math.min(n,Math.max(0,Number(e.progresso_atual)+t*r));await qw({...e,progresso_atual:i,esta_concluida:i>=n?1:e.esta_concluida})}async function Xw(e){let t=e.esta_concluida===1?0:1;await qw({...e,esta_concluida:t,progresso_atual:t===1?Number(e.progresso_alvo):e.progresso_atual})}var Zw=[],Qw=null,$w=[],eT=`ativas`,tT=``,H=null,nT,rT=!1;async function iT(){let[e,t]=await Promise.all([Kw(),Fw()]);Zw=e,Qw=t.fontes,$w=t.categoriasFinanceiro,C()}function aT(){return{id:0,titulo:``,item:Ew[0]?.chave??``,ativoNome:``,dataMeta:c(),prazoFinal:s(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function oT(e){let t=e.args.join(`/`);nT===t||rT||(nT=t,rT=!0,(async()=>{try{await iT();let[t]=e.args;if(t===void 0)H=null;else if(t===`nova`)H=aT();else{let e=Zw.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){S(`metas`);return}H={id:e.id??0,titulo:e.titulo,item:e.item,ativoNome:e.ativo_nome,dataMeta:e.data_meta?c(e.data_meta):c(),prazoFinal:e.prazo_final?c(e.prazo_final):s(30),progressoAtual:e.progresso_atual,progressoAlvo:e.progresso_alvo,concluida:e.esta_concluida}}}finally{rT=!1,C()}})())}function sT(e){let t=Vw(e,Qw),r=Dw.has(e.item),i=Rw(e,Qw);return b`
    <div class="meta" data-status=${t}>
      <div class="meta__topo">
        <span class="meta__titulo">${e.titulo}</span>
        <st-badge variant=${i?`success`:`neutral`} pill>
          ${zw(e,Qw)}%
        </st-badge>
      </div>

      <span class="meta__categoria">${Ww(e)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${zw(e,Qw)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${Hw(Lw(e,Qw),e.item)} /
          ${Hw(e.progresso_alvo,e.item)}
        </span>
        <span class="meta__prazo">${n.metas.prazo(ee(e.prazo_final))}</span>
      </div>

      <div class="meta__acoes">
        ${r?b`
              <span class="meta__auto" title=${n.metas.automaticaAjuda}>
                <st-icon name="refresh"></st-icon>${n.metas.automatica}
              </span>
            `:b`
              <st-icon-button
                name="minus"
                label=${n.metas.diminuir}
                @click=${async()=>{await Yw(e,-1),await iT()}}
              ></st-icon-button>
              <st-icon-button
                name="plus"
                label=${n.metas.aumentar}
                @click=${async()=>{await Yw(e,1),await iT()}}
              ></st-icon-button>
            `}

        <st-button
          size="small"
          variant=${i?`neutral`:`success`}
          outline
          @click=${async()=>{await Xw(e),await iT()}}
        >
          <st-icon slot="prefix" name=${i?`rotate`:`check`}></st-icon>
          ${i?n.metas.reabrir:n.metas.concluir}
        </st-button>

        <st-icon-button
          name="pencil"
          label=${n.acoes.editar}
          @click=${()=>S(`metas/${e.id??``}`)}
        ></st-icon-button>
        <st-icon-button
          name="trash"
          label=${n.metas.excluir}
          @click=${()=>void cT(e)}
        ></st-icon-button>
      </div>
    </div>
  `}async function cT(e){!await Jd({titulo:n.metas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await Jw(e.id),L(n.metas.excluida),await iT())}function lT(){let e=Gw(Zw,Qw,eT,tT),t=Zw.filter(e=>!Rw(e,Qw)).length;return b`
    <p class="intro">${n.metas.resumo(t,Zw.length-t)}</p>

    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.metas.buscar}
        .value=${tT}
        @st-input=${e=>{tT=e.target.value,C()}}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>b`
          <button
            class="chip"
            ?data-ativo=${eT===e}
            @click=${()=>{eT=e,C()}}
          >
            ${n.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="target"></st-icon>
            <p>${Zw.length===0?n.metas.vazio:n.metas.semFiltro}</p>
          </div>
        `:b`<div class="metas">${e.map(e=>sT(e))}</div>`}
  `}async function uT(){if(H===null)return;if(H.titulo.trim()===``){L(n.metas.informeTitulo,`warning`);return}let e=Dw.has(H.item),t=Number(H.progressoAlvo)>0?Number(H.progressoAlvo):1,r=e?0:Math.max(0,Number(H.progressoAtual));await qw({...H.id>0?{id:H.id}:{},titulo:H.titulo,item:H.item,ativo_id:0,ativo_nome:Ow(H.item).precisaAtivo===!0?H.ativoNome:``,data_meta:H.dataMeta===``?Date.now():u(H.dataMeta),prazo_final:H.prazoFinal===``?Date.now():u(H.prazoFinal),progresso_atual:r,progresso_alvo:t,esta_concluida:+(H.concluida===1||!e&&r>=t)}),L(n.metas.salva),S(`metas`)}function dT(e){let t=Ow(e.item),r=Dw.has(e.item),i=Iw({titulo:e.titulo,item:e.item,ativo_nome:e.ativoNome,data_meta:0,prazo_final:0,progresso_atual:e.progressoAtual,progresso_alvo:e.progressoAlvo,esta_concluida:e.concluida},Qw);return b`
    <div class="formulario">
      <st-input
        label=${n.metas.titulo}
        placeholder=${n.metas.tituloPlaceholder}
        .value=${e.titulo}
        @st-input=${t=>{H={...e,titulo:t.target.value}}}
      ></st-input>

      <st-select
        label=${n.metas.categoria}
        .value=${e.item}
        @st-change=${t=>{H={...e,item:t.target.value},C()}}
      >
        ${Ew.map(e=>b`<st-option value=${e.chave}>${e.modulo}: ${e.ativo}</st-option>`)}
      </st-select>

      ${t.precisaAtivo===!0?b`
            <st-select
              label=${n.metas.ativo}
              .value=${e.ativoNome}
              @st-change=${t=>{H={...e,ativoNome:t.target.value},C()}}
            >
              <st-option value="">${n.perfil.selecione}</st-option>
              ${$w.map(e=>b`<st-option value=${e.nome??``}>${e.nome}</st-option>`)}
            </st-select>
          `:x}

      <div class="formulario__par">
        <st-input
          type="number"
          label=${n.metas.alvo(Uw(e.item))}
          .value=${String(e.progressoAlvo)}
          @st-input=${t=>{H={...e,progressoAlvo:Number(t.target.value)}}}
        ></st-input>

        ${r?b`
              <st-input
                readonly
                label=${n.metas.atualAutomatico}
                .value=${Hw(i??0,e.item)}
                help-text=${n.metas.automaticaAjuda}
              ></st-input>
            `:b`
              <st-input
                type="number"
                label=${n.metas.atual(Uw(e.item))}
                .value=${String(e.progressoAtual)}
                @st-input=${t=>{H={...e,progressoAtual:Number(t.target.value)}}}
              ></st-input>
            `}
      </div>

      <div class="formulario__par">
        <st-input
          type="date"
          label=${n.metas.inicio}
          .value=${e.dataMeta}
          @st-change=${t=>{H={...e,dataMeta:t.target.value}}}
        ></st-input>
        <st-input
          type="date"
          label=${n.metas.prazoFinal}
          .value=${e.prazoFinal}
          @st-change=${t=>{H={...e,prazoFinal:t.target.value}}}
        ></st-input>
      </div>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void uT()}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button @click=${()=>S(`metas`)}>${n.acoes.cancelar}</st-button>
      </div>
    </div>
  `}var fT={voltarPara(e){return e.args.length===0?`hub/pessoal`:`metas`},titulo(e){if(e.args.length!==0)return H!==null&&H.id>0?n.metas.editar:n.metas.nova},acoes(e){if(!(e.args.length>0))return b`
      <st-icon-button
        name="plus"
        label=${n.metas.nova}
        @click=${()=>S(`metas/nova`)}
      ></st-icon-button>
    `},conteudo(e){return oT(e),e.args.length===0?lT():H===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:dT(H)}},pT=e({DIAS_DA_SEMANA:()=>_T,L7_DIAS:()=>15,MESES:()=>hT,TIPOS_PUBLICADOR:()=>gT,ajustado:()=>LT,alternarEnviado:()=>PT,anoDeServico:()=>yT,carregar:()=>wT,comoHorario:()=>TT,contadorTemAtividade:()=>FT,contadorZerado:()=>RT,corDoEstudo:()=>qT,deHorario:()=>ET,esfriando:()=>WT,estaEsfriando:()=>UT,estudosVisiveis:()=>YT,excluirEstudo:()=>QT,excluirRegistro:()=>eE,excluirRelatorio:()=>NT,horasDoContador:()=>BT,iniciais:()=>GT,lembreteDoRelatorio:()=>AT,mesEAno:()=>DT,observacoesDoContador:()=>zT,ordenarRelatorios:()=>OT,registrosDoEstudo:()=>VT,relataHoras:()=>vT,salvarContador:()=>IT,salvarEstudo:()=>ZT,salvarRegistro:()=>$T,salvarRelatorio:()=>MT,textoDoEstudo:()=>XT,textoDoRelatorio:()=>jT,ultimoRegistroEm:()=>HT,ultimoRelativo:()=>JT,ultimoRelatorio:()=>kT}),mT=1296e6,hT=[``,`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`],gT={publicador:`Publicador`,auxiliar:`Pioneiro Auxiliar`,regular:`Pioneiro Regular`,especial:`Pioneiro Especial`},_T=[`Segunda`,`Terça`,`Quarta`,`Quinta`,`Sexta`,`Sábado`,`Domingo`];function vT(e){return e===`auxiliar`||e===`regular`||e===`especial`}function yT(e,t){return e>=9?t+1:t}var bT=()=>i(`relatorios_ministerio`),xT=()=>i(`contadores_ministerio`),ST=()=>i(`estudos_biblicos`),CT=()=>i(`estudo_registros`);async function wT(){let[e,t,n,r]=await Promise.all([bT().todos(),ST().todos(),CT().todos(),xT().todos()]),i=new Date,a=i.getMonth()+1,o=i.getFullYear(),s={mes:a,ano:o,minutos:0,estudos:0,revisitas:0,publicacoes:0,videos:0};return{relatorios:e,estudos:t,registros:n,contador:r.find(e=>e.mes===a&&e.ano===o)??s}}function TT(e){let t=Math.max(0,Number(e)||0);return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}function ET(e){let[t=0,n=0]=e.split(`:`).map(Number);return Math.max(0,Math.min(1439,t*60+n))}function DT(e,t){return`${hT[e]??``} ${t}`}function OT(e){return[...e].sort((e,t)=>t.ano-e.ano||t.mes-e.mes)}function kT(e){return OT(e)[0]??null}function AT(e,t=new Date){let n=t.getDate(),r,i;if(n<=10){let e=new Date(t.getFullYear(),t.getMonth()-1,1);r=e.getMonth()+1,i=e.getFullYear()}else if(n>=26)r=t.getMonth()+1,i=t.getFullYear();else return null;let a=e.find(e=>e.mes===r&&e.ano===i);return a!==void 0&&a.relatorio_enviado===1?null:{mes:r,ano:i,existe:a!==void 0}}function jT(e){let t=[n.ministerio.relatorioDe(DT(e.mes,e.ano)),n.ministerio.linhaTipo(gT[e.tipo_publicador]??e.tipo_publicador),n.ministerio.linhaParticipacao(e.participacao===1)];return vT(e.tipo_publicador)&&t.push(n.ministerio.linhaHoras(e.horas)),t.push(n.ministerio.linhaEstudos(e.estudos)),e.notas_publicacoes!==``&&t.push(n.ministerio.linhaObservacoes(e.notas_publicacoes)),t.join(`
`)}function MT(e){return bT().salvar({...e,ano_servico:yT(e.mes,e.ano)})}function NT(e){return bT().excluir(e)}function PT(e){let t=e.relatorio_enviado===1?0:1;return MT({...e,relatorio_enviado:t,data_envio_relatorio:t===1?Date.now():0})}function FT(e){return e.minutos>0||e.estudos>0||e.revisitas>0||e.publicacoes>0||e.videos>0}async function IT(e){let t={...e.id===void 0?{}:{id:e.id},mes:e.mes,ano:e.ano,minutos:Math.max(0,Number(e.minutos)||0),estudos:Math.max(0,Number(e.estudos)||0),revisitas:Math.max(0,Number(e.revisitas)||0),publicacoes:Math.max(0,Number(e.publicacoes)||0),videos:Math.max(0,Number(e.videos)||0),data_atualizacao:Date.now()},n=await xT().salvar(t);return{...t,id:n}}function LT(e,t,n){return{...e,[t]:Math.max(0,(Number(e[t])||0)+n)}}function RT(e){return{...e,minutos:0,estudos:0,revisitas:0,publicacoes:0,videos:0}}function zT(e){return[e.revisitas>0?n.ministerio.obsRevisitas(e.revisitas):``,e.publicacoes>0?n.ministerio.obsPublicacoes(e.publicacoes):``,e.videos>0?n.ministerio.obsVideos(e.videos):``,e.minutos>0?n.ministerio.obsTempo(TT(e.minutos)):``].filter(e=>e!==``).join(` · `)}function BT(e){return Math.round(e/60*2)/2}function VT(e,t){return t===void 0?[]:e.filter(e=>e.estudo_id===t).sort((e,t)=>(t.registrado_em||0)-(e.registrado_em||0))}function HT(e,t){return VT(e,t.id)[0]?.registrado_em??0}function UT(e,t){let n=HT(e,t);return n===0||Date.now()-n>=mT}function WT(e,t){return e.filter(e=>UT(t,e))}function GT(e){let t=(e.nome===``?`?`:e.nome).trim().split(/\s+/);return((t[0]?.[0]??``)+(t.length>1?t.at(-1)?.[0]??``:``)||`?`).toUpperCase()}var KT=[`#0d6efd`,`#6f42c1`,`#20c997`,`#fd7e14`,`#0dcaf0`,`#d63384`,`#198754`,`#6610f2`];function qT(e){let t=0;for(let n of e.nome)t=t*31+n.charCodeAt(0)>>>0;return KT[t%KT.length]??KT[0]}function JT(e,t){let r=HT(e,t);if(r===0)return{texto:n.ministerio.nenhumRegistro,tom:`nunca`};let i=new Date().setHours(0,0,0,0),a=Math.round((i-new Date(r).setHours(0,0,0,0))/864e5);return a<=0?{texto:n.ministerio.hoje,tom:`recente`}:a===1?{texto:n.ministerio.ontem,tom:`recente`}:{texto:n.ministerio.haDias(a),tom:a>=15?`frio`:`normal`}}function YT(e,t,n){let r=n.trim().toLowerCase();return(r===``?[...e]:e.filter(e=>e.nome.toLowerCase().includes(r)||e.contato.toLowerCase().includes(r)||e.publicacao_atual.toLowerCase().includes(r))).sort((e,n)=>{let r=Number(UT(t,e))-Number(UT(t,n));return r===0?HT(t,n)-HT(t,e):-r})}function XT(e,t){let r=VT(t,e.id)[0];return[n.ministerio.estudoDe(e.nome),e.publicacao_atual===``?``:n.ministerio.linhaPublicacao(e.publicacao_atual),r===void 0?``:n.ministerio.linhaOndeParou(r.onde_parou),e.dia_semana===``?``:n.ministerio.linhaDia(e.dia_semana,TT(e.horario_minutos)),e.contato===``?``:n.ministerio.linhaContato(e.contato),e.endereco===``?``:n.ministerio.linhaEndereco(e.endereco)].filter(e=>e!==``).join(`
`)}function ZT(e){return ST().salvar(e)}async function QT(e,t){for(let n of VT(t,e))n.id!==void 0&&await CT().excluir(n.id);await ST().excluir(e)}function $T(e){return CT().salvar(e)}function eE(e){return CT().excluir(e)}var tE=[],nE=[],rE=[],iE=null,aE=``,oE=null,sE=null,cE=null,lE=!1,uE=!1;async function dE(){let e=await wT();tE=e.relatorios,nE=e.estudos,rE=e.registros,iE=e.contador,C()}function fE(){lE||uE||(uE=!0,(async()=>{try{await dE(),lE=!0}finally{uE=!1,C()}})())}function pE(e,t,n,r){return b`
    <button class="atalho" @click=${()=>S(r)}>
      <st-icon class="atalho__icone" name=${e}></st-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function mE(e,t,r,i,a,o){return b`
    <div class="tally__linha">
      <span class="tally__nome"><st-icon name=${t}></st-icon>${r}</span>
      <st-icon-button
        name="minus"
        label=${n.ministerio.diminuir(r)}
        @click=${()=>void hE(e,-i)}
      ></st-icon-button>
      <span class="tally__valor">${a}</span>
      <st-icon-button
        name="plus"
        label=${n.ministerio.aumentar(r)}
        @click=${()=>void hE(e,i)}
      ></st-icon-button>
      ${o??x}
    </div>
  `}async function hE(e,t){iE!==null&&(iE=await IT(LT(iE,e,t)),C())}async function gE(){iE!==null&&(!await Jd({titulo:n.ministerio.zerar,texto:n.ministerio.zerarTexto,rotuloConfirmar:n.ministerio.zerar,variante:`warning`})||iE===null||(iE=await IT(RT(iE)),C()))}function _E(e){let t=FT(e);return b`
    <div class="tally">
      <div class="tally__topo">
        <st-icon class="tally__icone" name="stopwatch"></st-icon>
        <span class="tally__titulo">
          ${n.ministerio.contadores}
          <small>${DT(e.mes,e.ano)}</small>
        </span>
        ${t?b`
              <st-icon-button
                name="rotate-clockwise"
                label=${n.ministerio.zerar}
                @click=${()=>void gE()}
              ></st-icon-button>
            `:x}
      </div>

      ${mE(`minutos`,`clock`,n.ministerio.tempo,15,TT(e.minutos),b`
          <st-button size="small" outline @click=${()=>void hE(`minutos`,60)}>
            ${n.ministerio.maisUmaHora}
          </st-button>
        `)}
      ${mE(`estudos`,`book`,n.ministerio.estudos,1,String(e.estudos))}
      ${mE(`revisitas`,`rotate`,n.ministerio.revisitas,1,String(e.revisitas))}
      ${mE(`publicacoes`,`books`,n.ministerio.publicacoes,1,String(e.publicacoes))}
      ${mE(`videos`,`player-play`,n.ministerio.videos,1,String(e.videos))}

      <st-button variant="primary" class="tally__gerar" @click=${vE}>
        <st-icon slot="prefix" name="file-text"></st-icon>${n.ministerio.gerarRelatorio}
      </st-button>
    </div>
  `}function vE(){iE!==null&&(oE={id:0,mes:iE.mes,ano:iE.ano,horas:BT(iE.minutos),estudos:iE.estudos,participacao:+!!FT(iE),tipo:kT(tE)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:zT(iE),enviado:0,dataEnvio:0},S(`ministerio/relatorios`))}function yE(){let e=AT(tE);if(e!==null){if(iE!==null&&iE.mes===e.mes&&iE.ano===e.ano){vE();return}oE={...xE(),mes:e.mes,ano:e.ano},S(`ministerio/relatorios`)}}function bE(){let e=WT(nE,rE),t=AT(tE),r=kT(tE);return b`
    ${e.length===0?x:b`
          <st-alert variant="danger" open>
            <st-icon slot="icon" name="temperature-snow"></st-icon>
            ${n.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${n.ministerio.verEstudos}</a>
          </st-alert>
        `}

    ${t===null?x:b`
          <st-alert variant="warning" open>
            <st-icon slot="icon" name="bell"></st-icon>
            ${n.ministerio.lembrete(DT(t.mes,t.ano),t.existe)}
            <st-button size="small" variant="warning" @click=${yE}>
              ${n.ministerio.preencher}
            </st-button>
          </st-alert>
        `}

    <div class="atalhos atalhos--quatro">
      ${pE(`file-text`,n.ministerio.atalhoRelatorios,n.ministerio.atalhoRelatoriosSub(tE.length),`ministerio/relatorios`)}
      ${pE(`book`,n.ministerio.atalhoEstudos,n.ministerio.atalhoEstudosSub(nE.length),`ministerio/estudos`)}
      ${pE(`target`,n.ministerio.atalhoMetas,n.ministerio.atalhoMetasSub,`metas`)}
      ${pE(`trending-up`,n.ministerio.atalhoServico,n.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${iE===null?x:_E(iE)}

    ${r===null?x:b`
          <div class="ultimo">
            <span class="ultimo__rotulo">${n.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${DT(r.mes,r.ano)}
                <small>
                  ${r.participacao===1?n.ministerio.participou:n.ministerio.naoParticipou}
                  · ${n.ministerio.estudosDoRelatorio(r.estudos)}
                </small>
              </span>
              <st-badge variant=${r.relatorio_enviado===1?`success`:`neutral`} pill>
                ${r.relatorio_enviado===1?n.ministerio.enviado:n.ministerio.pendente}
              </st-badge>
            </div>
          </div>
        `}
  `}function xE(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function SE(e){await MT({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),oE=null,L(n.ministerio.relatorioSalvo),await dE()}function CE(e){return b`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?n.ministerio.editarRelatorio:n.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <st-select
          label=${n.ministerio.mes}
          .value=${String(e.mes)}
          @st-change=${t=>{oE={...e,mes:Number(t.target.value)}}}
        >
          ${hT.map((e,t)=>t===0?x:b`<st-option value=${t}>${e}</st-option>`)}
        </st-select>

        <st-input
          type="number"
          label=${n.ministerio.ano}
          .value=${String(e.ano)}
          @st-input=${t=>{oE={...e,ano:Number(t.target.value)}}}
        ></st-input>
      </div>

      <st-select
        label=${n.ministerio.tipoPublicador}
        .value=${e.tipo}
        @st-change=${t=>{oE={...e,tipo:t.target.value},C()}}
      >
        ${Object.entries(gT).map(([e,t])=>b`<st-option value=${e}>${t}</st-option>`)}
      </st-select>

      <st-switch
        ?checked=${e.participacao===1}
        @st-change=${t=>{oE={...e,participacao:+!!t.target.checked}}}
      >
        ${n.ministerio.participacao}
      </st-switch>

      ${vT(e.tipo)?b`
            <div class="formulario__par">
              <st-input
                type="number"
                step="0.5"
                min="0"
                label=${n.ministerio.horas}
                .value=${String(e.horas)}
                @st-input=${t=>{oE={...e,horas:Number(t.target.value)}}}
              ></st-input>
              <st-input
                type="number"
                min="0"
                label=${n.ministerio.metaHoras}
                .value=${String(e.metaHoras)}
                @st-input=${t=>{oE={...e,metaHoras:Number(t.target.value)}}}
              ></st-input>
            </div>
          `:x}

      <st-input
        type="number"
        min="0"
        label=${n.ministerio.estudosBiblicos}
        .value=${String(e.estudos)}
        @st-input=${t=>{oE={...e,estudos:Number(t.target.value)}}}
      ></st-input>

      <st-textarea
        rows="2"
        label=${n.ministerio.observacoes}
        .value=${e.observacoes}
        @st-input=${t=>{oE={...e,observacoes:t.target.value}}}
      ></st-textarea>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void SE(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button
          @click=${()=>{oE=null,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
      </div>
    </div>
  `}async function wE(e){await hx(n.ministerio.relatorioDe(DT(e.mes,e.ano)),jT(e)),e.relatorio_enviado!==1&&(await MT({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await dE())}async function TE(e){!await Jd({titulo:n.ministerio.excluirRelatorio,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await NT(e.id),L(n.ministerio.relatorioExcluido),await dE())}function EE(e){let t=e.relatorio_enviado===1,r=gT[e.tipo_publicador]??e.tipo_publicador;return b`
    <div class="registro" data-status=${t?`enviado`:`pendente`}>
      <span class="registro__avatar">${(hT[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{oE={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},C()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${DT(e.mes,e.ano)}</span>
          <st-badge variant=${t?`success`:`warning`} pill>
            ${t?n.ministerio.enviado:n.ministerio.pendente}
          </st-badge>
        </span>
        <span class="registro__resumo">
          ${n.ministerio.resumoRelatorio(r,e.participacao===1,e.estudos,vT(e.tipo_publicador)?n.ministerio.sufixoHoras(e.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <st-icon-button
          name="share"
          label=${n.ministerio.compartilhar}
          @click=${()=>void wE(e)}
        ></st-icon-button>
        <st-icon-button
          name=${t?`mail-check`:`send`}
          label=${t?n.ministerio.marcarPendente:n.ministerio.marcarEnviado}
          @click=${async()=>{await PT(e),await dE()}}
        ></st-icon-button>
        <st-icon-button
          name="trash"
          label=${n.ministerio.excluirRelatorio}
          @click=${()=>void TE(e)}
        ></st-icon-button>
      </div>
    </div>
  `}function DE(){if(oE!==null)return CE(oE);let e=OT(tE);return e.length===0?b`
      <div class="vazio">
        <st-icon class="vazio__icone" name="file-text"></st-icon>
        <p>${n.ministerio.semRelatorios}</p>
      </div>
    `:b`<div class="registros">${e.map(e=>EE(e))}</div>`}function OE(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function kE(e){if(e.nome.trim()===``){L(n.ministerio.informeNome,`warning`);return}await ZT({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ET(e.horario),notas:e.notas}),sE=null,L(n.ministerio.estudoSalvo),await dE()}function AE(e){return b`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?n.ministerio.editarEstudo:n.ministerio.novoEstudo}
      </h2>

      <st-input
        label=${n.ministerio.nome}
        .value=${e.nome}
        @st-input=${t=>{sE={...e,nome:t.target.value}}}
      ></st-input>

      <div class="formulario__par">
        <st-input
          label=${n.ministerio.contato}
          placeholder=${n.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @st-input=${t=>{sE={...e,contato:t.target.value}}}
        ></st-input>
        <st-input
          label=${n.ministerio.endereco}
          .value=${e.endereco}
          @st-input=${t=>{sE={...e,endereco:t.target.value}}}
        ></st-input>
      </div>

      <st-input
        label=${n.ministerio.publicacaoAtual}
        placeholder=${n.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @st-input=${t=>{sE={...e,publicacao:t.target.value}}}
      ></st-input>

      <div class="formulario__par">
        <st-select
          label=${n.ministerio.diaSemana}
          .value=${e.dia}
          @st-change=${t=>{sE={...e,dia:t.target.value}}}
        >
          <st-option value="">${n.ministerio.escolhaDia}</st-option>
          ${_T.map(e=>b`<st-option value=${e}>${e}</st-option>`)}
        </st-select>

        <st-input
          type="time"
          label=${n.ministerio.horario}
          .value=${e.horario}
          @st-change=${t=>{sE={...e,horario:t.target.value}}}
        ></st-input>
      </div>

      <st-textarea
        rows="2"
        label=${n.ministerio.notas}
        .value=${e.notas}
        @st-input=${t=>{sE={...e,notas:t.target.value}}}
      ></st-textarea>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void kE(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button
          @click=${()=>{sE=null,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
      </div>
    </div>
  `}async function jE(e){!await Jd({titulo:n.ministerio.excluirEstudo,texto:n.ministerio.excluirEstudoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await QT(e.id,rE),L(n.ministerio.estudoExcluido),await dE())}function ME(e){let t=JT(rE,e),r=t.tom===`frio`||t.tom===`nunca`,i=VT(rE,e.id)[0],a=qT(e);return b`
    <div class="registro" data-status=${r?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${a} 15%, transparent);color:${a}`}
      >
        ${GT(e)}
      </span>

      <button class="registro__alvo" @click=${()=>S(`ministerio/estudos/${e.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${e.nome===``?n.ministerio.semNome:e.nome}
          </span>
          ${r?b`
                <st-badge variant="danger" pill>
                  <st-icon name="temperature-snow"></st-icon>${n.ministerio.seloEsfriando}
                </st-badge>
              `:x}
        </span>

        ${e.publicacao_atual===``?x:b`
              <span class="registro__resumo">
                <st-icon name="book"></st-icon>${e.publicacao_atual}
              </span>
            `}
        ${e.dia_semana===``?x:b`
              <span class="registro__resumo">
                <st-icon name="calendar-week"></st-icon>
                ${e.dia_semana} · ${TT(e.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${t.tom}>
          <st-icon name="history"></st-icon>${n.ministerio.ultimoEstudo} ${t.texto}
        </span>

        ${i===void 0?x:b`
              <span class="registro__parou">
                <st-icon name="bookmark"></st-icon>${n.ministerio.parouEm} ${i.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <st-icon-button
          name="pencil"
          label=${n.ministerio.editarEstudo}
          @click=${()=>{sE={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:TT(e.horario_minutos),notas:e.notas},C()}}
        ></st-icon-button>
        <st-icon-button
          name="share"
          label=${n.ministerio.compartilhar}
          @click=${()=>void hx(n.ministerio.estudoDe(e.nome),XT(e,rE))}
        ></st-icon-button>
        <st-icon-button
          name="trash"
          label=${n.ministerio.excluirEstudo}
          @click=${()=>void jE(e)}
        ></st-icon-button>
      </div>
    </div>
  `}function NE(){if(sE!==null)return AE(sE);let e=YT(nE,rE,aE);return b`
    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.ministerio.buscarEstudos}
        .value=${aE}
        @st-input=${e=>{aE=e.target.value,C()}}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    ${e.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="book"></st-icon>
            <p>${nE.length===0?n.ministerio.semEstudos:n.ministerio.semEstudosFiltro}</p>
          </div>
        `:b`<div class="registros">${e.map(e=>ME(e))}</div>`}
  `}function PE(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:nE.find(e=>e.id===t)}async function FE(e){if(e.ondeParou.trim()===``){cE={...e,erro:!0},C();return}await $T({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():u(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),cE=null,L(n.ministerio.registroSalvo),await dE()}function IE(e){return b`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?n.ministerio.editarRegistro:n.ministerio.registrarEstudo}
      </h2>

      <st-input
        type="date"
        label=${n.ministerio.data}
        .value=${e.data}
        @st-change=${t=>{cE={...e,data:t.target.value}}}
      ></st-input>

      <st-input
        label=${n.ministerio.ondeParou}
        placeholder=${n.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?n.ministerio.informeOndeParou:``}
        @st-input=${t=>{cE={...e,ondeParou:t.target.value,erro:!1}}}
      ></st-input>

      <st-textarea
        rows="2"
        label=${n.ministerio.comentario}
        placeholder=${n.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @st-input=${t=>{cE={...e,comentario:t.target.value}}}
      ></st-textarea>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void FE(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button
          @click=${()=>{cE=null,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
      </div>
    </div>
  `}async function LE(e){!await Jd({titulo:n.ministerio.excluirRegistro,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await eE(e.id),L(n.ministerio.registroExcluido),await dE())}function RE(e){if(cE!==null)return IE(cE);let t=VT(rE,e.id);return t.length===0?b`
      <div class="vazio">
        <st-icon class="vazio__icone" name="history"></st-icon>
        <p>${n.ministerio.semRegistros}</p>
      </div>
    `:b`
    <div class="registros">
      ${t.map(e=>b`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${ee(e.registrado_em)}</span>
              <span class="sessao__parou">
                <st-icon name="bookmark"></st-icon>${e.onde_parou}
              </span>
              ${e.comentario===``?x:b`<span class="sessao__comentario">${e.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <st-icon-button
                name="pencil"
                label=${n.acoes.editar}
                @click=${()=>{cE={id:e.id??0,estudoId:e.estudo_id,data:e.registrado_em===0?c():c(e.registrado_em),ondeParou:e.onde_parou,comentario:e.comentario,erro:!1},C()}}
              ></st-icon-button>
              <st-icon-button
                name="trash"
                label=${n.ministerio.excluirRegistro}
                @click=${()=>void LE(e)}
              ></st-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function zE(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var BE={voltarPara(e){let t=zE(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=zE(e);if(t===`relatorios`)return n.ministerio.atalhoRelatorios;if(t===`estudos`)return n.ministerio.atalhoEstudos;if(t===`linha`)return PE(e)?.nome??n.ministerio.linhaDoTempo},acoes(e){let t=zE(e);if(t===`relatorios`&&oE===null)return b`
        <st-icon-button
          name="plus"
          label=${n.ministerio.novoRelatorio}
          @click=${()=>{oE=xE(),C()}}
        ></st-icon-button>
      `;if(t===`estudos`&&sE===null)return b`
        <st-icon-button
          name="plus"
          label=${n.ministerio.novoEstudo}
          @click=${()=>{sE=OE(),C()}}
        ></st-icon-button>
      `;if(t===`linha`&&cE===null){let t=PE(e);return t?.id===void 0?void 0:b`
        <st-icon-button
          name="plus"
          label=${n.ministerio.registrarEstudo}
          @click=${()=>{cE={id:0,estudoId:t.id??0,data:c(),ondeParou:``,comentario:``,erro:!1},C()}}
        ></st-icon-button>
      `}},conteudo(e){if(fE(),!lE)return b`<div class="carregando"><st-spinner></st-spinner></div>`;let t=zE(e);if(t===`relatorios`)return DE();if(t===`estudos`)return NE();if(t===`linha`){let t=PE(e);return t===void 0?(S(`ministerio/estudos`),b`<div class="carregando"><st-spinner></st-spinner></div>`):RE(t)}return bE()}},VE=1,HE={id:VE,nome:``,telefone:``,email:``,link:``,comentario:``,nomeSecretario:``,telefoneSecretario:``,tipoSanguineo:``,doadorOrgaos:0,alergias:``,medicamentosEmUso:``,observacoesMedicas:``,gravida:0,gravidezMeses:``,dataPrevistaParto:``,recusaTransfusao:0,fracoesAceitas:``,uriScanDpa:``,contatoEmergencia:``,contatoEmergenciaTelefone:``,nomeColih:``,telefoneColih:``,cartaoSusNumero:``,cpfTitular:``,upaReferencia:``,dpaCategoriaAtualizado:0,dpaAssinadoEmEpoch:0},UE=[`A+`,`A−`,`B+`,`B−`,`AB+`,`AB−`,`O+`,`O−`,`Desconhecido`],WE=()=>i(`meu_perfil`);async function GE(){let e=await WE().obter(VE).catch(()=>void 0);return e===void 0?{...HE}:{...HE,...e}}async function KE(e){let t=+!!e.gravida,n=+!!e.dpaCategoriaAtualizado,r={...e,id:VE,doadorOrgaos:+!!e.doadorOrgaos,recusaTransfusao:+!!e.recusaTransfusao,gravida:t,gravidezMeses:t===0?``:e.gravidezMeses,dataPrevistaParto:t===0?``:e.dataPrevistaParto,dpaCategoriaAtualizado:n,dpaAssinadoEmEpoch:n===0?0:e.dpaAssinadoEmEpoch||Date.now()};return await WE().salvar(r),r}function qE(e){return e.replace(/[^\d+]/g,``)}function JE(e){let t=qE(e.telefone),n=[`BEGIN:VCARD`,`VERSION:3.0`,`N:;${e.nome};;;`,`FN:${e.nome}`,`TEL;TYPE=CELL:${e.telefone}`];e.email!==``&&n.push(`EMAIL:${e.email}`),t!==``&&n.push(`URL:https://wa.me/${t}`);let r=e.link.trim(),i=/^https?:\/\//i.test(r);i&&n.push(`URL;TYPE=WORK:${r}`);let a=r!==``&&!i?r:e.comentario.trim();return a!==``&&n.push(`NOTE:${a}`),n.push(`END:VCARD`),n.join(`
`)}function YE(e){let t=qE(e.telefone);return t===``?``:`https://wa.me/${t}`}async function XE(e){if(e.nome===``&&e.telefone===``)return``;let{default:t}=await w(async()=>{let{default:e}=await import(`./qrcode-DtWdxa9d.js`);return{default:e}},[],import.meta.url),n=t(0,`M`);return n.addData(JE(e)),n.make(),n.createDataURL(6,8)}function ZE(e){return e.nome!==``||e.tipoSanguineo!==``||e.doadorOrgaos===1||e.gravida===1||e.alergias!==``||e.medicamentosEmUso!==``||e.contatoEmergencia!==``||e.nomeColih!==``}function QE(e){let t=e.dataPrevistaParto.trim();if(t===``)return``;let[n,r,i]=t.split(`-`);return n!==void 0&&r!==void 0&&i!==void 0?`${i}/${r}/${n}`:t}var $E=864e5;function eD(e){if(e.dpaAssinadoEmEpoch===0)return null;let t=e.dpaAssinadoEmEpoch+365*$E;return{data:new Date(e.dpaAssinadoEmEpoch).toLocaleDateString(`pt-BR`),dias:Math.ceil((t-Date.now())/$E)}}var tD=1e3,U={...HE},nD=``,rD=``,iD=!1,aD=!1,oD;function sD(){iD||aD||(aD=!0,(async()=>{try{U=await GE(),nD=await XE(U),iD=!0}finally{aD=!1,C()}})())}function cD(){rD=n.acervo.salvando,C(),clearTimeout(oD),oD=setTimeout(()=>void lD(),tD)}async function lD(){U=await KE(U),nD=await XE(U),rD=n.acervo.salvoAs(Kd(Date.now())),C()}function uD(e,t){U={...U,[e]:t},cD()}function dD(e,t,n=`text`){return b`
    <st-input
      type=${n}
      label=${t}
      .value=${String(U[e]??``)}
      @st-input=${t=>uD(e,t.target.value)}
    ></st-input>
  `}function fD(e,t){return b`
    <st-textarea
      rows="2"
      resize="auto"
      label=${t}
      .value=${String(U[e]??``)}
      @st-input=${t=>uD(e,t.target.value)}
    ></st-textarea>
  `}function pD(e,t){return b`
    <st-switch
      ?checked=${U[e]===1}
      @st-change=${t=>uD(e,+!!t.target.checked)}
    >
      ${t}
    </st-switch>
  `}function mD(){return b`
    <div class="formulario">
      <p class="editor__status">${rD}</p>

      <h2 class="secao">${n.perfil.cartao}</h2>
      ${dD(`nome`,n.perfil.nome)}
      ${dD(`telefone`,n.perfil.telefone,`tel`)}
      ${dD(`email`,n.perfil.email,`email`)}
      ${dD(`link`,n.perfil.link)}
      ${dD(`comentario`,n.perfil.comentario)}

      <h2 class="secao">${n.perfil.secretario}</h2>
      ${dD(`nomeSecretario`,n.perfil.nome)}
      ${dD(`telefoneSecretario`,n.perfil.telefone,`tel`)}

      <h2 class="secao">${n.perfil.saude}</h2>
      <st-select
        label=${n.perfil.tipoSanguineo}
        .value=${U.tipoSanguineo}
        @st-change=${e=>uD(`tipoSanguineo`,e.target.value)}
      >
        <st-option value="">${n.perfil.selecione}</st-option>
        ${UE.map(e=>b`<st-option value=${e}>${e}</st-option>`)}
      </st-select>
      ${pD(`doadorOrgaos`,n.perfil.doador)}
      ${dD(`alergias`,n.perfil.alergias)}
      ${fD(`medicamentosEmUso`,n.perfil.medicamentos)}
      ${fD(`observacoesMedicas`,n.perfil.observacoes)}

      <h2 class="secao">${n.perfil.gestacao}</h2>
      ${pD(`gravida`,n.perfil.gestante)}
      ${U.gravida===1?b`
            <div class="formulario__par">
              <st-select
                label=${n.perfil.meses}
                .value=${U.gravidezMeses}
                @st-change=${e=>uD(`gravidezMeses`,e.target.value)}
              >
                <st-option value="">—</st-option>
                ${Array.from({length:9},(e,t)=>t+1).map(e=>b`<st-option value=${String(e)}>${n.perfil.mes(e)}</st-option>`)}
              </st-select>
              ${dD(`dataPrevistaParto`,n.perfil.parto,`date`)}
            </div>
          `:x}

      <h2 class="secao">${n.perfil.dpa}</h2>
      ${pD(`recusaTransfusao`,n.perfil.recusa)}
      ${U.recusaTransfusao===1?b`
            <st-alert open variant="danger">
              <st-icon slot="icon" name="alert-octagon"></st-icon>
              <strong>${n.perfil.naoApliqueSangue}</strong>
            </st-alert>
          `:x}
      ${fD(`fracoesAceitas`,n.perfil.fracoes)}
      ${dD(`uriScanDpa`,n.perfil.scanDpa)}
      ${pD(`dpaCategoriaAtualizado`,n.perfil.dpaAssinado)}

      <h2 class="secao">${n.perfil.emergencia}</h2>
      ${dD(`contatoEmergencia`,n.perfil.contatoNome)}
      ${dD(`contatoEmergenciaTelefone`,n.perfil.contatoTelefone,`tel`)}

      <h2 class="secao">${n.perfil.colih}</h2>
      ${dD(`nomeColih`,n.perfil.contatoNome)}
      ${dD(`telefoneColih`,n.perfil.contatoTelefone,`tel`)}

      <h2 class="secao">${n.perfil.identificacao}</h2>
      ${dD(`cartaoSusNumero`,n.perfil.sus)}
      ${dD(`cpfTitular`,n.perfil.cpf)}
      ${dD(`upaReferencia`,n.perfil.upa)}
    </div>
  `}function hD(){let e=YE(U);return b`
    <div class="cartao-contato">
      <h2 class="cartao-contato__nome">${U.nome||n.perfil.semNome}</h2>
      <p class="cartao-contato__telefone">${U.telefone}</p>

      ${nD===``?b`
            <div class="vazio">
              <st-icon class="vazio__icone" name="qrcode"></st-icon>
              <p>${n.perfil.semCartao}</p>
            </div>
          `:b`<img class="cartao-contato__qr" src=${nD} alt=${n.perfil.qrAlt} />`}

      ${U.comentario===``?x:b`<p class="cartao-contato__nota">${U.comentario}</p>`}

      ${nD===``?x:b`
            <div class="cartao-contato__acoes">
              ${e===``?x:b`
                    <st-button variant="success" href=${e} target="_blank">
                      <st-icon slot="prefix" name="brand-whatsapp"></st-icon>WhatsApp
                    </st-button>
                  `}
              <st-button
                variant="primary"
                outline
                @click=${()=>void hx(U.nome||n.perfil.semNome,JE(U))}
              >
                <st-icon slot="prefix" name="share"></st-icon>${n.leitura.compartilhar}
              </st-button>
            </div>
          `}
    </div>
  `}function gD(e,t){return t===``?x:b`
    <div class="ice__dado">
      <span class="ice__rotulo">${e}</span>
      <span class="ice__valor">${t}</span>
    </div>
  `}function _D(e,t,n){return t===``?x:b`
    <div class="ice__contato">
      <span><strong>${e}</strong> ${t}</span>
      ${n===``?x:b`
            <st-button size="small" variant="success" outline href=${`tel:${n}`}>
              <st-icon slot="prefix" name="phone"></st-icon>${n}
            </st-button>
          `}
    </div>
  `}function vD(){let e=[U.gravidezMeses===``?``:n.perfil.mesesGestacao(Number(U.gravidezMeses)),QE(U)===``?``:n.perfil.partoEm(QE(U))].filter(e=>e!==``).join(` · `),t=eD(U);return b`
    ${U.recusaTransfusao===1?b`
          <st-alert open variant="danger" class="ice__alerta">
            <st-icon slot="icon" name="alert-octagon"></st-icon>
            <strong>${n.perfil.naoApliqueSangue}</strong>
            <span>${n.perfil.portadorDiretriz}</span>
          </st-alert>
        `:x}

    ${U.gravida===1?b`
          <st-alert open variant="warning" class="ice__alerta">
            <st-icon slot="icon" name="alert-triangle"></st-icon>
            <strong>${n.perfil.gestanteMaiusculo}</strong>
            <span>${e}</span>
          </st-alert>
        `:x}

    ${ZE(U)?b`
          <div class="ice">
            <h2 class="ice__nome">${U.nome||`—`}</h2>
            <div class="ice__grade">
              ${gD(n.perfil.tipoSanguineo,U.tipoSanguineo)}
              ${gD(n.perfil.doador,U.doadorOrgaos===1?n.perfil.sim:``)}
              ${gD(n.perfil.alergias,U.alergias)}
              ${gD(n.perfil.gestante,U.gravida===1?e:``)}
            </div>
            ${gD(n.perfil.medicamentos,U.medicamentosEmUso)}
            ${gD(n.perfil.observacoes,U.observacoesMedicas)}
            ${gD(n.perfil.fracoes,U.fracoesAceitas)}
          </div>

          ${U.contatoEmergencia===``&&U.nomeColih===``?x:b`
                <div class="ice">
                  ${_D(n.perfil.emergencia,U.contatoEmergencia,U.contatoEmergenciaTelefone)}
                  ${_D(n.perfil.colih,U.nomeColih,U.telefoneColih)}
                </div>
              `}

          <div class="ice">
            ${gD(n.perfil.sus,U.cartaoSusNumero)}
            ${gD(n.perfil.cpf,U.cpfTitular)}
            ${gD(n.perfil.upa,U.upaReferencia)}
            ${t===null?x:b`
                  <p class="ice__dpa" ?data-vencido=${t.dias<0}>
                    <st-icon name="calendar-check"></st-icon>
                    ${n.perfil.dpaAssinadoEm(t.data)}
                    ${t.dias<0?n.perfil.dpaVencido:n.perfil.dpaRenovar(t.dias)}
                  </p>
                `}
          </div>
        `:b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="heartbeat"></st-icon>
            <p>${n.perfil.semFicha}</p>
          </div>
        `}
  `}var yD={voltarPara(e){return e.args.length===0?`hub/pessoal`:`perfil`},titulo(e){let[t]=e.args;if(t===`cartao`)return n.perfil.tituloCartao;if(t===`ice`)return n.perfil.tituloFicha},conteudo(e){if(sD(),!iD)return b`<div class="carregando"><st-spinner></st-spinner></div>`;let[t]=e.args;return t===`cartao`?hD():t===`ice`?vD():mD()}},bD=e({alternarFavorito:()=>wD,chaveFavorito:()=>xD,lerFavoritos:()=>SD,salvarFavoritos:()=>CD});function xD(e,t){return(e===`local`?`l`:`c`)+String(t??``)}function SD(e){try{let t=JSON.parse(localStorage.getItem(e)??`[]`);return new Set(Array.isArray(t)?t.map(String):[])}catch{return new Set}}function CD(e,t){localStorage.setItem(e,JSON.stringify([...t]))}function wD(e,t,n){let r=new Set(t);return r.delete(n)||r.add(n),CD(e,r),r}var TD=()=>i(`poesias`),ED=()=>i(`poesias_local`),DD=`papiro_fav_poesias`;async function OD(e,t){let[n,r]=await Promise.all([TD().todos(),ED().todos()]);return bx(_x(gx(n,r),e,e=>[e.titulo,e.conteudo]),t)}function kD(e,t){return(t?ED():TD()).obter(e)}function AD(e){return ED().salvar(e)}function jD(e){return ED().excluir(e)}function MD(e){let t=e?.conteudo??``,n=/<p[^>]*>(?:\s|&nbsp;)*<img[^>]*>(?:\s|&nbsp;)*<\/p>/i;return n.test(t)?t.replace(n,``):t.replace(/<img[^>]*>/i,``)}function ND(e){let t=e.conteudo?.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi)??[],n=/<img\s/i.test(t[0]??``),r=/^<p[^>]*>\s*(?:<em>\s*)?[“"]/i.test(t[1]??``);return n&&r?Wd(t[1]??``):Gd(e.conteudo,180)}var PD=400,FD=1200,ID=[],LD=``,RD=new Set,zD=!1,BD=!1,VD=null,HD=!1,UD=null,WD,GD=!1,KD,qD,JD=new sf;function YD(){return document.querySelector(`st-editor`)}function XD(e){let t=YD();t!==null&&(t.value=e)}function ZD(e,t){return xD(t?`local`:`curado`,e.id)}function QD(e,t){return RD.has(ZD(e,t))}async function $D(e,t){RD=wD(DD,RD,ZD(e,t)),VD===null?await eO():C()}async function eO(){ID=await OD(LD,e=>QD(e,e.local)),C()}async function tO(e,t){HD=t,VD=await kD(e,t)??null,VD===null&&S(`poesia`)}async function nO(e){if(e===null)UD={id:null,titulo:``,conteudo:``,status:``};else{let t=await kD(e,!0);if(t===void 0){S(`poesia`);return}UD={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}C(),XD(UD.conteudo)}function rO(e){let t=e.args.join(`/`);WD===t||GD||(WD=t,GD=!0,JD.fechar(),zD||=(RD=SD(DD),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(VD=null,UD=null,await eO()):t===`nova`?(VD=null,await nO(null)):t===`editar`?(VD=null,await nO(Number.parseInt(n??``,10))):t===`local`?(UD=null,await tO(Number.parseInt(n??``,10),!0)):(UD=null,await tO(Number.parseInt(t,10),!1))}finally{GD=!1,C()}})())}function iO(e){LD=e,clearTimeout(KD),KD=setTimeout(()=>void eO(),PD)}function aO(e){let t=QD(e,e.local);return b`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>S(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <st-badge variant="neutral" pill>${n.poesia.referencia(e.id)}</st-badge>
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||n.acervo.semTitulo}
          </span>
          ${e.local?b`<st-badge variant="success" pill>${n.acervo.meu}</st-badge>`:x}
        </span>
        <span class="cartao__previa">${ND(e)}</span>
      </button>

      <st-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?n.poesia.desfavoritar:n.poesia.favoritar}
        @click=${()=>void $D(e,e.local)}
      ></st-icon-button>
    </div>
  `}function oO(){return b`
    ${BD?b`
          <st-alert open variant="primary" class="aviso-acervo">
            <st-icon slot="icon" name="info-circle"></st-icon>
            ${n.poesia.aviso.map(e=>b`<p>${e}</p>`)}
          </st-alert>
        `:x}

    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.poesia.buscar}
        .value=${LD}
        @st-input=${e=>iO(e.target.value)}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    ${ID.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="feather"></st-icon>
            <p>${n.poesia.vazio}</p>
          </div>
        `:b`<div class="cartoes cartoes--duas">${ID.map(e=>aO(e))}</div>`}
  `}function sO(e){return`${e.titulo}. ${MD(e)}`}function cO(e){return b`
    <div class="prosa prosa--verso">${Vd(Dd(MD(e)))}</div>
  `}function lO(e){return b`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${cO(e)}

    ${HD?x:b`
          <nav class="sequencia">
            <st-button
              size="small"
              ?disabled=${!e.anteriorId}
              @click=${()=>S(`poesia/${e.anteriorId??``}`)}
            >
              <st-icon slot="prefix" name="chevron-left"></st-icon>${n.poesia.anterior}
            </st-button>
            <st-button
              size="small"
              ?disabled=${!e.proximoId}
              @click=${()=>S(`poesia/${e.proximoId??``}`)}
            >
              ${n.poesia.proxima}<st-icon slot="suffix" name="chevron-right"></st-icon>
            </st-button>
          </nav>
        `}

    ${JD.overlay(b`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${cO(e)}
        `,()=>sO(e))}
  `}async function uO(){let e=VD?.id;e===void 0||!HD||await Jd({titulo:n.poesia.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await jD(e),L(n.poesia.excluida),S(`poesia`))}function dO(){UD!==null&&(UD={...UD,status:n.acervo.salvando},C(),clearTimeout(qD),qD=setTimeout(()=>void fO(),FD))}async function fO(){if(UD===null)return;if(UD.titulo.trim()===``||Sx(UD.conteudo)){UD={...UD,status:n.acervo.tituloEConteudo},C();return}let e=Date.now(),t=await AD({titulo:UD.titulo,conteudo:UD.conteudo,publicar:0,data_atualizacao:e,...UD.id===null?{data_criacao:e}:{id:UD.id}});UD.id===null&&(UD={...UD,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),UD={...UD,status:n.acervo.salvoAs(Kd(e))},C()}function pO(e){return b`
    <div class="editor">
      <st-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${n.poesia.tituloPlaceholder}
        .value=${e.titulo}
        @st-input=${t=>{UD={...e,titulo:t.target.value},dO()}}
      ></st-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <st-editor
        @st-input=${t=>{UD={...e,conteudo:t.detail.value},dO()}}
      ></st-editor>
    </div>
  `}function mO(){return b`
    <st-icon-button
      name="info-circle"
      label=${n.poesia.sobre}
      @click=${()=>{BD=!BD,C()}}
    ></st-icon-button>
    <st-icon-button
      name="plus"
      label=${n.poesia.nova}
      @click=${()=>S(`poesia/nova`)}
    ></st-icon-button>
  `}function hO(e){let t=QD(e,HD);return b`
    <st-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?n.poesia.desfavoritar:n.poesia.favoritar}
      @click=${()=>void $D(e,HD)}
    ></st-icon-button>
    ${JD.botaoApresentar()}
    ${JD.botaoFala(()=>sO(e))}
    <st-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void hx(e.titulo,Wd(MD(e)))}
    ></st-icon-button>
    ${HD?b`
          <st-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>S(`poesia/editar/${e.id??``}`)}
          ></st-icon-button>
          <st-icon-button
            name="trash"
            label=${n.poesia.excluir}
            @click=${()=>void uO()}
          ></st-icon-button>
        `:x}
  `}var gO={voltarPara(e){return e.args.length===0?`hub/estudo`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=UD?.titulo.trim()??``;return e===``?n.poesia.novaTitulo:e}return VD?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return mO();if(t!==`nova`&&t!==`editar`)return VD===null?void 0:hO(VD)},conteudo(e){rO(e);let[t]=e.args;return t===void 0?oO():t===`nova`||t===`editar`?UD===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:pO(UD):VD===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:lO(VD)}},_O=`papiro_cofre_pin`,vO=2e5,yO=16,bO=12,xO=()=>i(`documentos_cofre`);async function SO(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:vO,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function CO(e,t){let n=crypto.getRandomValues(new Uint8Array(yO)),r=crypto.getRandomValues(new Uint8Array(bO)),i=await SO(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,yO),o.set(new Uint8Array(a),28),o}async function wO(e,t){let n=t.slice(0,yO),r=t.slice(yO,28),i=t.slice(28),a=await SO(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}async function TO(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function EO(){return localStorage.getItem(_O)!==null}async function DO(e){return await TO(e)===localStorage.getItem(_O)}async function OO(e){localStorage.setItem(_O,await TO(e))}function kO(){return xO().todos()}async function AO(e,t,n){await xO().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await CO(e,await t.arrayBuffer()),data_criacao:Date.now()})}function jO(e,t){return xO().salvar({...e,rotulo:t})}function MO(e){return xO().excluir(e)}async function NO(e,t){let n=await wO(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var PO=[{nome:`Ração de Emergência e Pronto Consumo (Sem Cozimento)`,ordem:1,fria:!0,quente:!1,emoji:`🥫`,cor:`#dc2626`},{nome:`Hidratação Estratégica e Bebidas Isotônicas`,ordem:2,fria:!1,quente:!1,emoji:`💧`,cor:`#0ea5e9`},{nome:`Estoque Calórico de Longo Prazo (Exige Água/Fogo)`,ordem:3,fria:!1,quente:!0,emoji:`🌾`,cor:`#d97706`},{nome:`Concentrados, Lácteos e Nutrição de Resiliência`,ordem:4,fria:!1,quente:!0,emoji:`🥛`,cor:`#3b82f6`},{nome:`Vitaminas, Fibras e Hortifrúti em Conserva`,ordem:5,fria:!1,quente:!1,emoji:`🥗`,cor:`#16a34a`},{nome:`Logística de Cozinha, Conservantes e Defesa de Paladar`,ordem:6,fria:!1,quente:!1,emoji:`🧂`,cor:`#6b7280`},{nome:`Nutrição Tática e Suporte de Campo (MRE / Ração de Combate)`,ordem:7,fria:!0,quente:!1,emoji:`🎖️`,cor:`#7c3aed`},{nome:`Outros Itens de Subsistência`,ordem:8,fria:!1,quente:!1,emoji:`📦`,cor:`#8b5cf6`}],FO=PO[0]?.nome??``,IO=PO[4]?.nome??``,LO={nome:FO,ordem:8,fria:!1,quente:!1,emoji:`📦`,cor:`#6b7280`};function RO(e){return PO.find(t=>t.nome===e)??LO}var zO={BEBE:{rotulo:`Bebê`,kcal:1e3},CRIANCA:{rotulo:`Criança`,kcal:1500},ADOLESCENTE:{rotulo:`Adolescente`,kcal:2200},ADULTO_M:{rotulo:`Adulto (homem)`,kcal:2500},ADULTO_F:{rotulo:`Adulto (mulher)`,kcal:2e3},IDOSO:{rotulo:`Idoso`,kcal:1800},MISTO:{rotulo:`Misto (família)`,kcal:1833}},BO={SEDENTARIO:{rotulo:`Sedentário`,multiplicador:1},LEVE:{rotulo:`Leve`,multiplicador:1.2},MODERADO:{rotulo:`Moderado`,multiplicador:1.4},INTENSO:{rotulo:`Intenso`,multiplicador:1.7}},VO=[12,18,36,18,24,36,60,48],HO=[[`Sardinha em Óleo (Lata Abertura Rápida)`,0,12,125,285],[`Atum Sólido em Óleo (Lata)`,0,12,170,165],[`Carne Bovina Enlatada (Fiambre Tático)`,0,8,320,220],[`Frango Desfiado em Conserva (Lata)`,0,6,150,130],[`Pasta de Amendoim Integral`,0,4,500,600],[`Barras de Energia de Alta Densidade`,0,30,60,420],[`Chocolate Meio Amargo (80%)`,0,15,90,540],[`Biscoito Cream Cracker (Vácuo)`,0,10,400,440],[`Sais de Reidratação Oral (Sachê)`,1,40,28,320],[`Pastilhas de Eletrólitos Isotônicos`,1,5,100,250],[`Suco em Pó com Vitamina C`,1,20,30,360],[`Arroz Agulhinha (PET Selada)`,2,10,1e3,360],[`Feijão Carioca (Vácuo)`,2,10,1e3,330],[`Lentilha Seca`,2,5,500,320],[`Macarrão Tipo Espaguete`,2,12,500,370],[`Farinha de Mandioca Torrada`,2,4,1e3,360],[`Flocos de Milho Pré-Cozidos (Cuscuz)`,2,8,500,350],[`Leite em Pó Integral (Lata)`,3,8,400,500],[`Fórmula Infantil de Reserva`,3,4,800,490],[`Ovo Integral Desidratado em Pó`,3,2,500,540],[`Aveia em Flocos Finos (Lata)`,3,6,400,390],[`Leite Condensado (Lata)`,3,6,395,320],[`Milho Verde em Conserva (Lata)`,4,10,170,100],[`Ervilha em Conserva`,4,10,170,75],[`Extrato de Tomate Concentrado`,4,6,300,80],[`Purê de Batata Instantâneo (Flocos)`,4,5,200,350],[`Óleo de Soja`,5,6,900,884],[`Sal Refinado Iodado`,5,4,1e3,0],[`Açúcar Cristal`,5,4,1e3,387],[`Café Torrado e Moído (Vácuo)`,5,8,500,0],[`Ração Compactada (72h)`,6,6,500,460],[`Prato Operacional (MRE)`,6,5,400,150],[`Pastilha de Sal / Eletrólitos (Tubo)`,7,10,80,0],[`Bicarbonato de Sódio (Uso Múltiplo)`,7,4,100,0]],UO={idade:`ADULTO_M`,atividade:`MODERADO`,pessoas:2};function WO(e){return e.quantidade===0||e.peso_unitario===0||e.calorias_por_100g===0?null:Math.round(e.quantidade*e.peso_unitario*e.calorias_por_100g/100)}function GO(e){let t=zO[e.idade]?.kcal??2e3;return Math.round(t*(BO[e.atividade]?.multiplicador??1))}function KO(e){return Math.max(1,GO(e)*Math.max(1,e.pessoas))}function qO(e,t){let n=e.reduce((e,t)=>e+(WO(t)??0),0);return Math.floor(n/KO(t))}function JO(e,t){let n=e.itens??[];if(n.length===0)return 0;let r=t[String(e.id)]??{};return Math.round(n.filter(e=>r[String(e.id)]===!0).length/n.length*100)}function YO(e){let t=e.kits.length===0?0:e.kits.reduce((t,n)=>t+JO(n,e.progresso)/100,0)/e.kits.length,n=Math.min(qO(e.estoque,e.perfil)/30,1);return Math.round((t*.6+n*.4)*100)}function XO(e){return e>=70?`sucesso`:e>=40?`aviso`:`perigo`}var ZO=`papiro_prep_calc`,QO=()=>i(`estoque_alimentos`),$O=()=>i(`estoque_catalogo`);function ek(){try{let e=JSON.parse(localStorage.getItem(ZO)??`null`);return{...UO,...e}}catch{return UO}}function tk(e){let t={...e,pessoas:Math.max(1,Number(e.pessoas)||1)};localStorage.setItem(ZO,JSON.stringify(t))}var nk=[`BEBE`,`CRIANCA`,`ADOLESCENTE`,`ADULTO_M`,`ADULTO_F`,`IDOSO`,`MISTO`],rk=[`SEDENTARIO`,`LEVE`,`MODERADO`,`INTENSO`];function ik(e){return zO[e]?.rotulo??e}function ak(e){return BO[e]?.rotulo??e}var ok=30,sk;function ck(){return sk??=(async()=>{if((await QO().todos()).length>0)return;let e=Date.now(),t=await $O().todos(),n=t.length>0?t.map(e=>({item:e.item??``,categoria:e.categoria??FO,quantidade:Number(e.quantidade)||0,peso_unitario:Number(e.peso_unitario)||0,calorias_por_100g:Number(e.calorias_por_100g)||0,validadeMeses:Number(e.validade_meses)||12})):HO.map(([e,t,n,r,i])=>({item:e,categoria:PO[t]?.nome??FO,quantidade:n,peso_unitario:r,calorias_por_100g:i,validadeMeses:VO[t]??12}));for(let t of n)await QO().salvar({item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso_unitario:t.peso_unitario,calorias_por_100g:t.calorias_por_100g,data_vencimento:e+t.validadeMeses*ok*864e5})})(),sk}async function lk(){return await ck(),QO().todos()}function uk(e){return QO().obter(e)}function dk(e){return QO().salvar(e)}function fk(e){return QO().excluir(e)}function pk(e,t){let n=t.trim().toLowerCase();return(n===``?[...e]:e.filter(e=>e.item.toLowerCase().includes(n)||e.categoria.toLowerCase().includes(n))).sort((e,t)=>RO(e.categoria).ordem-RO(t.categoria).ordem||e.item.localeCompare(t.item,`pt-BR`,{sensitivity:`base`}))}function mk(e){let t=new Map;for(let n of e){let e=RO(n.categoria).nome,r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return[...t].map(([e,t])=>({nome:e,info:RO(e),itens:t}))}function hk(e){return e.quantidade*e.peso_unitario/1e3}function gk(e,t){let n=e.reduce((e,t)=>e+(WO(t)??0),0),r=KO(t),i=Math.floor(n/r),a=Math.max(1,t.pessoas);return{kcalTotal:n,porPessoa:Math.round(r/a),doGrupo:r,dias:i,metaPercentual:Math.min(100,Math.round(i/30*100)),litrosDeAgua:Math.ceil(a*i*3),pesoTotalKg:Math.round(e.reduce((e,t)=>e+hk(t),0)*10)/10,tom:i>=30?`sucesso`:i>=7?`aviso`:`perigo`}}function _k(e,t){let n=0,r=0,i=0;for(let t of e){let e=RO(t.categoria),a=WO(t)??0;e.fria?n+=a:e.quente&&(r+=a),e.nome===IO&&(i+=t.quantidade)}let a=KO(t),o=n+r;return{consolidadas:o,diasFrios:Math.floor(n/a),diasTotais:Math.floor(o/a),fibras:i,vulneravel:i<5}}var vk=6048e5;function yk(e){if(e.data_vencimento===0)return`ok`;let t=e.data_vencimento-Date.now();return t<0?`vencido`:t<vk?`proximo`:`ok`}function bk(e){let t=Date.now(),n=t+vk,r=e.filter(e=>e.data_vencimento>0&&e.data_vencimento<t),i=e.filter(e=>e.data_vencimento>=t&&e.data_vencimento<n);return{vencidos:r,aVencer:i,total:r.length+i.length}}function xk(e){return e.data_vencimento===0?null:Math.ceil((e.data_vencimento-Date.now())/864e5)}var Sk=`papiro_prep_kits`,Ck=()=>i(`kits`),wk=()=>i(`kits_local`);function Tk(){try{let e=JSON.parse(localStorage.getItem(Sk)??`{}`);return typeof e==`object`&&e?e:{}}catch{return{}}}function Ek(e){localStorage.setItem(Sk,JSON.stringify(e))}async function Dk(){if((await wk().todos()).length>0)return;let e=await Ck().todos();if(e.length===0)return;let t=Date.now(),n=e.map((e,n)=>({id:n+1,nome:e.nome??``,icone:e.icone??``,itens:(e.itens??[]).map((e,t)=>({id:t+1,descricao:e.rotulo??e.descricao??``,quantidade:String(e.quantidade??``),observacoes:e.observacoes??``,data_vencimento:e.data_vencimento??0})),data_criacao:t,data_atualizacao:t}));await wk().substituirTudo(n)}async function Ok(){return await Dk(),(await wk().todos()).sort((e,t)=>e.nome.localeCompare(t.nome,`pt-BR`,{sensitivity:`base`}))}function kk(e){return wk().obter(e)}function Ak(e,t,n){return e[String(t.id)]?.[String(n)]===!0}function jk(e,t,n){let r=String(t.id),i={...e[r]??{}};i[String(n)]=!i[String(n)];let a={...e,[r]:i};return Ek(a),a}function Mk(e,t){let n=e[String(t.id)]??{};return t.itens.filter(e=>n[String(e.id)]===!0).length}function Nk(e,t){return t.itens.length===0?0:Math.round(Mk(e,t)/t.itens.length*100)}function Pk(e,t){return t.itens.length>0&&Mk(e,t)===t.itens.length}async function Fk(e){let t=Date.now(),r=e.itens.map((e,t)=>({id:t+1,descricao:e.descricao.trim(),quantidade:e.quantidade.trim(),observacoes:e.observacoes.trim(),data_vencimento:e.vencimento===``?0:u(e.vencimento)})).filter(e=>e.descricao!==``);await wk().salvar({...e.id>0?{id:e.id}:{},nome:e.nome.trim()===``?n.prep.kitSemNome:e.nome.trim(),icone:e.icone,itens:r,data_criacao:e.criacao===0?t:e.criacao,data_atualizacao:t})}async function Ik(e,t){let n={...t};return delete n[String(e.id)],Ek(n),e.id!==void 0&&await wk().excluir(e.id),n}var Lk=[],Rk={},zk=[],Bk=ek(),Vk=new Set,Hk=new Set,Uk=!1,Wk=``,Gk=null,Kk=null,qk=null,Jk=[],Yk=``,Xk=``,Zk=``,Qk=null,$k=!1,eA=!1;async function tA(){[Lk,zk]=await Promise.all([Ok(),lk()]),Rk=Tk(),C()}function nA(){$k||eA||(eA=!0,sA(),(async()=>{try{await tA(),$k=!0}finally{eA=!1,C()}})())}function rA(e){let t=e.args[0];return t===`kits`||t===`estoque`||t===`cofre`||t===`checklist`?t:`painel`}function iA(){qk=null,Jk=[],Yk=``,Xk=``,Zk=``,aA()}function aA(){Qk!==null&&URL.revokeObjectURL(Qk.url),Qk=null}var oA=!1;function sA(){oA||(oA=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&iA()}))}function cA(){let e=YO({kits:Lk,progresso:Rk,estoque:zk,perfil:Bk}),t=XO(e),r=gk(zk,Bk);return b`
    <div class="prontidao" data-tom=${t}>
      <div class="prontidao__topo">
        <span class="prontidao__texto">
          ${n.prep.indice}
          <small>${n.prep.indiceAjuda}</small>
        </span>
        <span class="prontidao__percentual">${e}%</span>
      </div>
      <div class="prontidao__barra" role="presentation">
        <div class="prontidao__preenchido" style=${`width:${e}%`}></div>
      </div>
    </div>

    <div class="atalhos atalhos--quatro">
      ${[[`clipboard-list`,n.prep.kits,n.prep.contagemKits(Lk.length),`prep/kits`],[`package`,n.prep.estoque,n.prep.diasAutonomia(r.dias),`prep/estoque`],[`lock`,n.prep.cofre,n.prep.cofreResumo,`prep/cofre`],[`map-2`,n.prep.guias,n.prep.guiasResumo,`guias`]].map(([e,t,n,r])=>b`
          <button class="atalho" @click=${()=>S(r)}>
            <st-icon class="atalho__icone" name=${e}></st-icon>
            <span class="atalho__rotulo">${t}</span>
            <span class="atalho__resumo">${n}</span>
          </button>
        `)}
    </div>
  `}function lA(){return Lk.length===0?b`
      <div class="vazio">
        <st-icon class="vazio__icone" name="clipboard-list"></st-icon>
        <p>${n.prep.semKits}</p>
      </div>
    `:b`
    <div class="livros">
      ${Lk.map(e=>{let t=String(e.id),r=Vk.has(t);return b`
          <div class="livro" ?data-completo=${Pk(Rk,e)}>
            <button
              type="button"
              class="livro__alvo"
              aria-expanded=${r}
              @click=${()=>{let e=new Set(Vk);e.delete(t)||e.add(t),Vk=e,C()}}
            >
              <span class="livro__icone">${e.icone===``?`📋`:e.icone}</span>
              <span class="livro__nome">${e.nome}</span>
              <span class="livro__contagem">
                ${Mk(Rk,e)}/${e.itens.length}
              </span>
              <st-icon name=${r?`chevron-up`:`chevron-down`}></st-icon>
            </button>

            <div class="progresso-leitura__barra" role="presentation">
              <div
                class="progresso-leitura__preenchido"
                style=${`width:${Nk(Rk,e)}%`}
              ></div>
            </div>

            ${r?b`
                  <div class="itens-do-kit">
                    ${e.itens.map(t=>b`
                        <button
                          class="item-do-kit"
                          ?data-marcado=${Ak(Rk,e,t.id)}
                          aria-pressed=${Ak(Rk,e,t.id)}
                          @click=${()=>{Rk=jk(Rk,e,t.id),C()}}
                        >
                          <st-icon
                            name=${Ak(Rk,e,t.id)?`circle-check`:`circle`}
                          ></st-icon>
                          <span class="item-do-kit__texto">
                            <span class="item-do-kit__descricao">${t.descricao}</span>
                            ${t.quantidade===``&&t.observacoes===``&&t.data_vencimento===0?x:b`
                                  <span class="item-do-kit__detalhe">
                                    ${t.quantidade===``?``:t.quantidade}
                                    ${t.observacoes===``?``:`· ${t.observacoes}`}
                                    ${t.data_vencimento===0?``:`· ${n.prep.vence(ee(t.data_vencimento))}`}
                                  </span>
                                `}
                          </span>
                        </button>
                      `)}
                  </div>

                  <div class="capitulos__acoes">
                    <st-button
                      size="small"
                      outline
                      @click=${()=>S(`prep/checklist/${e.id??``}`)}
                    >
                      <st-icon slot="prefix" name="pencil"></st-icon>${n.acoes.editar}
                    </st-button>
                    <st-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void uA(e)}
                    >
                      <st-icon slot="prefix" name="trash"></st-icon>${n.acoes.excluir}
                    </st-button>
                  </div>
                `:x}
          </div>
        `})}
    </div>
  `}async function uA(e){await Jd({titulo:n.prep.excluirKit,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(Rk=await Ik(e,Rk),L(n.prep.kitExcluido),await tA())}function dA(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}var fA=null;function pA(e){let t=e.args.join(`/`);if(fA===t)return;fA=t;let n=e.args[1];if(n===void 0){Gk={id:0,nome:``,icone:``,itens:[dA()],criacao:0},C();return}(async()=>{let e=await kk(Number.parseInt(n,10));if(e===void 0){S(`prep/kits`);return}Gk={id:e.id??0,nome:e.nome,icone:e.icone,criacao:e.data_criacao,itens:e.itens.length===0?[dA()]:e.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:c(e.data_vencimento)}))},C()})()}function mA(e){let t=(t,n,r)=>{let i=e.itens.map((e,i)=>i===t?{...e,[n]:r}:e);Gk={...e,itens:i}};return b`
    <div class="formulario">
      <st-input
        label=${n.prep.nomeDoKit}
        .value=${e.nome}
        @st-input=${t=>{Gk={...e,nome:t.target.value}}}
      ></st-input>

      <st-input
        label=${n.prep.emoji}
        maxlength="4"
        .value=${e.icone}
        help-text=${n.prep.emojiAjuda}
        @st-input=${t=>{Gk={...e,icone:t.target.value}}}
      ></st-input>

      <h2 class="secao">${n.prep.itens}</h2>

      ${e.itens.map((r,i)=>b`
          <div class="item-editor">
            <div class="item-editor__topo">
              <st-input
                class="item-editor__descricao"
                placeholder=${n.prep.descricaoDoItem}
                .value=${r.descricao}
                @st-input=${e=>t(i,`descricao`,e.target.value)}
              ></st-input>
              <st-icon-button
                name="trash"
                label=${n.prep.removerItem}
                @click=${()=>void hA(e,i)}
              ></st-icon-button>
            </div>

            <div class="formulario__par">
              <st-input
                size="small"
                placeholder=${n.prep.quantidade}
                .value=${r.quantidade}
                @st-input=${e=>t(i,`quantidade`,e.target.value)}
              ></st-input>
              <st-input
                size="small"
                type="date"
                .value=${r.vencimento}
                @st-change=${e=>t(i,`vencimento`,e.target.value)}
              ></st-input>
            </div>

            <st-input
              size="small"
              placeholder=${n.prep.observacoes}
              .value=${r.observacoes}
              @st-input=${e=>t(i,`observacoes`,e.target.value)}
            ></st-input>
          </div>
        `)}

      <st-button
        outline
        @click=${()=>{Gk={...e,itens:[...e.itens,dA()]},C()}}
      >
        <st-icon slot="prefix" name="plus"></st-icon>${n.prep.adicionarItem}
      </st-button>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void gA(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button @click=${()=>S(`prep/kits`)}>${n.acoes.cancelar}</st-button>
      </div>
    </div>
  `}async function hA(e,t){await Jd({titulo:n.prep.removerItem,texto:n.prep.removerItemTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(Gk={...e,itens:e.itens.filter((e,n)=>n!==t)},C())}async function gA(e){let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){S(`prep/kits`);return}await Fk(e),Gk=null,fA=null,L(n.prep.kitSalvo),await tA(),S(`prep/kits`)}function _A(){return{id:0,item:``,categoria:FO,quantidade:1,peso:0,kcal:0,vencimento:``}}async function vA(e){await dk({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?FO:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:yA(e.vencimento)}),Kk=null,L(n.prep.itemSalvo),await tA()}function yA(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function bA(e){return b`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?n.prep.editarItem:n.prep.novoItem}
      </h2>

      <st-input
        label=${n.prep.item}
        .value=${e.item}
        @st-input=${t=>{Kk={...e,item:t.target.value}}}
      ></st-input>

      <st-select
        label=${n.prep.categoria}
        .value=${e.categoria}
        @st-change=${t=>{Kk={...e,categoria:t.target.value}}}
      >
        ${PO.map(e=>b`
            <st-option value=${e.nome}>${e.emoji} ${e.nome}</st-option>
          `)}
      </st-select>

      <div class="formulario__par">
        <st-input
          type="number"
          min="0"
          label=${n.prep.quantidade}
          .value=${String(e.quantidade)}
          @st-input=${t=>{Kk={...e,quantidade:Number(t.target.value)}}}
        ></st-input>
        <st-input
          type="number"
          min="0"
          label=${n.prep.pesoUnitario}
          .value=${String(e.peso)}
          @st-input=${t=>{Kk={...e,peso:Number(t.target.value)}}}
        ></st-input>
      </div>

      <div class="formulario__par">
        <st-input
          type="number"
          min="0"
          label=${n.prep.kcal}
          .value=${String(e.kcal)}
          @st-input=${t=>{Kk={...e,kcal:Number(t.target.value)}}}
        ></st-input>
        <st-input
          type="date"
          label=${n.prep.validade}
          .value=${e.vencimento}
          @st-change=${t=>{Kk={...e,vencimento:t.target.value}}}
        ></st-input>
      </div>

      <div class="editor__acoes">
        <st-button variant="primary" @click=${()=>void vA(e)}>
          <st-icon slot="prefix" name="check"></st-icon>${n.acoes.salvar}
        </st-button>
        <st-button
          @click=${()=>{Kk=null,C()}}
        >
          ${n.acoes.cancelar}
        </st-button>
      </div>
    </div>
  `}function xA(e){let t=e=>{Bk={...Bk,...e,pessoas:Math.max(1,e.pessoas??Bk.pessoas)},tk(Bk),C()},r=_k(zk,Bk);return b`
    <div class="tally">
      <div class="tally__topo">
        <st-icon class="tally__icone" name="calculator"></st-icon>
        <span class="tally__titulo">
          ${n.prep.calculadora}
          <small>${n.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <st-select
          label=${n.prep.faixaEtaria}
          size="small"
          .value=${Bk.idade}
          @st-change=${e=>t({idade:e.target.value})}
        >
          ${nk.map(e=>b`<st-option value=${e}>${ik(e)}</st-option>`)}
        </st-select>

        <st-select
          label=${n.prep.atividade}
          size="small"
          .value=${Bk.atividade}
          @st-change=${e=>t({atividade:e.target.value})}
        >
          ${rk.map(e=>b`<st-option value=${e}>${ak(e)}</st-option>`)}
        </st-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><st-icon name="users"></st-icon>${n.prep.pessoas}</span>
        <st-icon-button
          name="minus"
          label=${n.prep.menosPessoas}
          @click=${()=>t({pessoas:Bk.pessoas-1})}
        ></st-icon-button>
        <span class="tally__valor">${Bk.pessoas}</span>
        <st-icon-button
          name="plus"
          label=${n.prep.maisPessoas}
          @click=${()=>t({pessoas:Bk.pessoas+1})}
        ></st-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${e.tom===`sucesso`?`sucesso`:e.tom===`aviso`?`aviso`:`perigo`}>
            ${e.dias}
          </span>
          <span class="placar__rotulo">${n.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${d(e.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${n.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${d(e.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${n.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${e.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${n.prep.metaAutonomia(e.metaPercentual)} ·
        ${n.prep.necessidadeDiaria(d(e.doGrupo))}
      </p>

      <h3 class="secao">${n.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${r.diasFrios}</span>
          <span class="placar__rotulo">${n.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${r.diasTotais}</span>
          <span class="placar__rotulo">${n.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${r.vulneravel?`perigo`:`sucesso`}>
            ${r.fibras}
          </span>
          <span class="placar__rotulo">${n.prep.itensDeFibra}</span>
        </div>
      </div>

      ${r.vulneravel?b`
            <st-alert variant="warning" open>
              <st-icon slot="icon" name="alert-triangle"></st-icon>
              ${n.prep.vulneravel}
            </st-alert>
          `:x}
    </div>
  `}function SA(e){let t=xk(e);return t===null?x:t<0?b`<st-badge variant="danger" pill>${n.prep.vencidoHa(Math.abs(t))}</st-badge>`:t===0?b`<st-badge variant="danger" pill>${n.prep.venceHoje}</st-badge>`:t<7?b`<st-badge variant="warning" pill>${n.prep.venceEm(t)}</st-badge>`:x}function CA(e){let t=RO(e.categoria),r=WO(e);return b`
    <div class="registro" data-status=${yk(e)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${t.cor} 15%, transparent)`}>
        ${t.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void wA(e)}>
        <span class="registro__topo">
          <span class="registro__titulo">${e.item}</span>
          ${SA(e)}
        </span>
        <span class="registro__resumo">
          ${n.prep.resumoDoItem(e.quantidade,d(e.peso_unitario))}
          ${r===null?``:`· ${d(r)} kcal`}
        </span>
        ${e.data_vencimento===0?x:b`<span class="registro__resumo">${n.prep.vence(ee(e.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <st-icon-button
          name="pencil"
          label=${n.acoes.editar}
          @click=${()=>void wA(e)}
        ></st-icon-button>
        <st-icon-button
          name="trash"
          label=${n.prep.excluirItem}
          @click=${()=>void TA(e)}
        ></st-icon-button>
      </div>
    </div>
  `}async function wA(e){if(e.id===void 0)return;let t=await uk(e.id)??e;Kk={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:c(t.data_vencimento)},C()}async function TA(e){!await Jd({titulo:n.prep.excluirItem,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await fk(e.id),L(n.prep.itemExcluido),await tA())}function EA(){if(Kk!==null)return bA(Kk);let e=gk(zk,Bk),t=bk(zk),r=mk(pk(zk,Wk));return b`
    ${t.total===0?x:b`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${Uk}
              @click=${()=>{Uk=!Uk,C()}}
            >
              <st-icon name="alert-triangle"></st-icon>
              <span class="alertas__titulo">${n.prep.alertas(t.total)}</span>
              <st-icon name=${Uk?`chevron-up`:`chevron-down`}></st-icon>
            </button>

            ${Uk?b`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>b`
                        <span class="alertas__item">
                          ${SA(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:x}
          </div>
        `}

    ${xA(e)}

    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.prep.buscarItens}
        .value=${Wk}
        @st-input=${e=>{Wk=e.target.value,C()}}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    ${r.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="package"></st-icon>
            <p>${zk.length===0?n.prep.semEstoque:n.prep.semEstoqueFiltro}</p>
          </div>
        `:b`
          <div class="grupos">
            ${r.map(e=>{let t=Hk.has(e.nome);return b`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(Hk);t.delete(e.nome)||t.add(e.nome),Hk=t,C()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <st-icon name=${t?`chevron-up`:`chevron-down`}></st-icon>
                  </button>

                  ${t?b`
                        <div class="registros">
                          ${e.itens.map(e=>CA(e))}
                        </div>
                      `:x}
                </div>
              `})}
          </div>
        `}
  `}async function DA(){if(Zk=``,Yk===``){Zk=n.prep.digitePin,C();return}if(!await DO(Yk)){Zk=n.prep.pinIncorreto,Yk=``,C();return}qk=Yk,Yk=``,Jk=await kO(),C()}async function OA(){if(Zk=``,Yk.length<4){Zk=n.prep.pinCurto(4),C();return}if(Yk!==Xk){Zk=n.prep.pinNaoConfere,C();return}await OO(Yk),qk=Yk,Yk=``,Xk=``,Jk=await kO(),C()}async function kA(e){let t=e.files?.[0];if(t===void 0||qk===null)return;let r=await Yd({titulo:n.prep.nomeDoDocumento,valor:t.name,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.salvar,erroVazio:n.prep.informeNome});e.value=``,r!==null&&(await AO(qk,t,r),Jk=await kO(),L(n.prep.documentoGuardado),C())}function AA(){return EO()?qk===null?b`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.cofreTrancado}</h2>
        <p class="discreto">${n.prep.destranqueAjuda}</p>

        <st-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${n.prep.pin}
          .value=${Yk}
          @st-input=${e=>{Yk=e.target.value}}
          @keydown=${e=>{e.key===`Enter`&&DA()}}
        ></st-input>

        ${Zk===``?x:b`<p class="erro">${Zk}</p>`}

        <st-button variant="primary" @click=${()=>void DA()}>
          <st-icon slot="prefix" name="lock-open"></st-icon>${n.prep.destrancar}
        </st-button>
      </div>
    `:b`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <st-icon name="upload"></st-icon>
        ${n.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void kA(e.target)}
        />
      </label>
      <st-button
        outline
        @click=${()=>{iA(),C()}}
      >
        <st-icon slot="prefix" name="lock"></st-icon>${n.prep.trancar}
      </st-button>
    </div>

    ${Jk.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="lock"></st-icon>
            <p>${n.prep.semDocumentos}</p>
          </div>
        `:b`
          <div class="registros">
            ${Jk.map(e=>b`
                <div class="registro">
                  <span class="registro__avatar"><st-icon name="file"></st-icon></span>

                  <button class="registro__alvo" @click=${()=>void jA(e)}>
                    <span class="registro__titulo">${e.rotulo}</span>
                    <span class="registro__resumo">
                      ${e.tipo_mime} · ${ee(e.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <st-icon-button
                      name="pencil"
                      label=${n.acoes.renomear}
                      @click=${()=>void MA(e)}
                    ></st-icon-button>
                    <st-icon-button
                      name="trash"
                      label=${n.prep.excluirDocumento}
                      @click=${()=>void NA(e)}
                    ></st-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${Qk===null?x:b`
          <st-dialog
            open
            label=${Qk.rotulo}
            @st-after-hide=${()=>{aA(),C()}}
          >
            ${Qk.tipo.startsWith(`image/`)?b`<img class="previa" src=${Qk.url} alt=${Qk.rotulo} />`:b`
                  <p>${n.prep.semPreVisualizacao}</p>
                  <st-button variant="primary" href=${Qk.url} download=${Qk.rotulo}>
                    <st-icon slot="prefix" name="download"></st-icon>${n.prep.baixar}
                  </st-button>
                `}
          </st-dialog>
        `}
  `:b`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.configurarPin}</h2>
        <p class="discreto">${n.prep.pinAjuda}</p>

        <st-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${n.prep.pin}
          .value=${Yk}
          @st-input=${e=>{Yk=e.target.value}}
        ></st-input>
        <st-input
          type="password"
          inputmode="numeric"
          label=${n.prep.confirmarPin}
          .value=${Xk}
          @st-input=${e=>{Xk=e.target.value}}
        ></st-input>

        ${Zk===``?x:b`<p class="erro">${Zk}</p>`}

        <st-button variant="primary" @click=${()=>void OA()}>
          <st-icon slot="prefix" name="lock"></st-icon>${n.prep.criarCofre}
        </st-button>
      </div>
    `}async function jA(e){if(qk!==null)try{aA(),Qk={rotulo:e.rotulo,url:await NO(qk,e),tipo:e.tipo_mime},C()}catch{L(n.prep.falhaAoDecifrar,`warning`)}}async function MA(e){let t=await Yd({titulo:n.prep.renomearDocumento,valor:e.rotulo,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.renomear,erroVazio:n.prep.informeNome});t!==null&&t!==e.rotulo&&(await jO(e,t),Jk=await kO(),C())}async function NA(e){!await Jd({titulo:n.prep.excluirDocumento,texto:n.prep.excluirDocumentoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await MO(e.id),Jk=await kO(),L(n.prep.documentoExcluido),C())}var PA={painel:void 0,kits:n.prep.kits,estoque:n.prep.estoque,cofre:n.prep.cofre,checklist:void 0},FA={voltarPara(e){let t=rA(e);return t===`painel`?`home`:t===`checklist`?`prep/kits`:`prep`},aoVoltar(e){return rA(e)!==`estoque`||Kk===null?!1:(Kk=null,C(),!0)},titulo(e){let t=rA(e);return t===`checklist`?Gk!==null&&Gk.id>0?n.prep.editarKit:n.prep.novoKit:PA[t]},acoes(e){let t=rA(e);if(t===`kits`)return b`
        <st-icon-button
          name="plus"
          label=${n.prep.novoKit}
          @click=${()=>S(`prep/checklist`)}
        ></st-icon-button>
      `;if(t===`estoque`&&Kk===null)return b`
        <st-icon-button
          name="plus"
          label=${n.prep.novoItem}
          @click=${()=>{Kk=_A(),C()}}
        ></st-icon-button>
      `},conteudo(e){nA();let t=rA(e);return t===`checklist`?(pA(e),Gk===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:mA(Gk)):(fA=null,t!==`estoque`&&(Kk=null),$k?t===`kits`?lA():t===`estoque`?EA():t===`cofre`?AA():cA():b`<div class="carregando"><st-spinner></st-spinner></div>`)}},IA=e({CATEGORIAS:()=>LA,CHAVE_FAVORITOS:()=>RA,excluirReceita:()=>WA,listarReceitas:()=>VA,obterReceita:()=>HA,salvarReceita:()=>UA}),LA=`🍽️.🥗.🍲.🍰.🥤.🍞.🍝.🥩.🐟.🍕.☕.🍎.🎂.🧁.🍫.🥧.🍮.🥞.🍳.🧀.🥘.🍤.🍚.🍜.🌮.🥟.🥦.🍓.🍇.🥑.🍯.🥛`.split(`.`),RA=`papiro_fav_receitas`,zA=()=>i(`receitas`),BA=()=>i(`receitas_local`);async function VA(e,t){let[n,r]=await Promise.all([zA().todos(),BA().todos()]),i=gx(n,r),a=[...new Set(i.map(e=>e.categoria).filter(Boolean))].sort(),o=_x(i,e,e=>[e.titulo,e.categoria]);return t!==``&&(o=o.filter(e=>e.categoria===t)),{itens:o,categorias:a}}function HA(e,t){return(t?BA():zA()).obter(e)}function UA(e,t){return(t?BA():zA()).salvar(e)}function WA(e,t){return(t?BA():zA()).excluir(e)}var GA=400,KA=1200,qA=[],JA=[],YA=``,XA=``,ZA=new Set,QA=!1,$A=null,ej=!1,W=null,tj,nj=!1,rj,ij,aj=new sf;function oj(e,t){return xD(t?`local`:`curado`,e.id)}function sj(e,t){return ZA.has(oj(e,t))}function cj(e,t){ZA=wD(RA,ZA,oj(e,t)),C()}async function lj(){let e=await VA(YA,XA);qA=e.itens,JA=e.categorias,C()}async function uj(e,t){ej=t,$A=await HA(e,t)??null,$A===null&&S(`receitas`)}async function dj(e,t){if(e===null){W={id:null,local:!0,titulo:``,categoria:LA[0]??``,ingredientes:``,instrucoes:``,status:``},C();return}let n=await HA(e,t);if(n===void 0){S(`receitas`);return}W={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(LA[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},C()}function fj(e){let t=e.args.join(`/`);tj===t||nj||(tj=t,nj=!0,aj.fechar(),QA||=(ZA=SD(RA),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?($A=null,W=null,await lj()):t===`nova`?($A=null,await dj(null,!0)):t===`editar`?($A=null,await dj(r,!0)):t===`editar-curada`?($A=null,await dj(r,!1)):t===`local`?(W=null,await uj(r,!0)):(W=null,await uj(Number.parseInt(t,10),!1))}finally{nj=!1,C()}})())}function pj(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function mj(e){YA=e,clearTimeout(rj),rj=setTimeout(()=>void lj(),GA)}function hj(e){XA=XA===e?``:e,lj()}function gj(e){let t=sj(e,e.local);return b`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>S(e.local?`receitas/local/${e.id??``}`:`receitas/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${xx(e.categoria)}</span>
          <span class="cartao__titulo">${e.titulo||n.acervo.semTitulo}</span>
          ${e.local?b`<st-badge variant="success" pill>${n.acervo.meu}</st-badge>`:x}
        </span>
      </button>

      <st-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?n.receitas.desfavoritar:n.receitas.favoritar}
        @click=${()=>cj(e,e.local)}
      ></st-icon-button>
    </div>
  `}function _j(){return b`
    <div class="filtros">
      <st-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.receitas.buscar}
        .value=${YA}
        @st-input=${e=>mj(e.target.value)}
      >
        <st-icon slot="prefix" name="search"></st-icon>
      </st-input>
    </div>

    ${JA.length===0?x:b`
          <div class="chips">
            <button class="chip" ?data-ativo=${XA===``} @click=${()=>hj(``)}>
              ${n.receitas.todas}
            </button>
            ${JA.map(e=>b`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${XA===e}
                  title=${e}
                  @click=${()=>hj(e)}
                >
                  ${xx(e)}
                </button>
              `)}
          </div>
        `}

    ${qA.length===0?b`
          <div class="vazio">
            <st-icon class="vazio__icone" name="chef-hat"></st-icon>
            <p>${n.receitas.vazio}</p>
          </div>
        `:b`<div class="cartoes">${qA.map(e=>gj(e))}</div>`}
  `}function vj(e){return`${e.titulo}. ${n.receitas.ingredientes}. ${Wd(e.ingredientes)}. ${n.receitas.preparo}. ${Wd(e.instrucoes)}`}function yj(e){return b`
    ${e.categoria===``?x:b`<p class="receita__categoria" aria-hidden="true">${xx(e.categoria)}</p>`}

    <h2 class="secao">${n.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${Vd(Dd(e.ingredientes))}</div>

    <h2 class="secao">${n.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${Vd(Dd(e.instrucoes))}</div>
  `}function bj(e){return b`
    ${yj(e)}
    ${aj.overlay(b`
          <h1>${e.titulo}</h1>
          ${yj(e)}
        `,()=>vj(e))}
  `}async function xj(){let e=$A?.id;e!==void 0&&await Jd({titulo:n.receitas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await WA(e,ej),L(n.receitas.excluida),S(`receitas`))}function Sj(){W!==null&&(W={...W,status:n.acervo.salvando},C(),clearTimeout(ij),ij=setTimeout(()=>void Cj(),KA))}async function Cj(){if(W===null)return;if(W.titulo.trim()===``){W={...W,status:n.acervo.informeTitulo},C();return}let e=Date.now(),t=await UA({...W.id===null?{}:await HA(W.id,W.local)??{},titulo:W.titulo,categoria:W.categoria,ingredientes:W.ingredientes,instrucoes:W.instrucoes,data_atualizacao:e,...W.id===null?{publicar:0,data_criacao:e}:{id:W.id}},W.local);W.id===null&&(W={...W,id:t},history.replaceState(null,``,`#/receitas/editar/${t}`)),W={...W,status:n.acervo.salvoAs(Kd(e))},C()}function wj(e){let t=t=>e.categoria===t||xx(e.categoria)===t;return b`
    <div class="editor">
      <st-input
        class="editor__titulo"
        placeholder=${n.receitas.tituloPlaceholder}
        .value=${e.titulo}
        @st-input=${t=>{W={...e,titulo:t.target.value},Sj()}}
      ></st-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <h2 class="secao">${n.receitas.categoria}</h2>
      <div class="chips">
        ${LA.map(n=>b`
            <button
              class="chip chip--emoji"
              ?data-ativo=${t(n)}
              @click=${()=>{W={...e,categoria:n},Sj()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h2 class="secao">${n.receitas.ingredientes}</h2>
      <st-textarea
        rows="8"
        resize="auto"
        placeholder=${n.receitas.ingredientesPlaceholder}
        .value=${e.ingredientes}
        @st-input=${t=>{W={...e,ingredientes:t.target.value},Sj()}}
      ></st-textarea>

      <h2 class="secao">${n.receitas.preparo}</h2>
      <st-textarea
        rows="10"
        resize="auto"
        placeholder=${n.receitas.preparoPlaceholder}
        .value=${e.instrucoes}
        @st-input=${t=>{W={...e,instrucoes:t.target.value},Sj()}}
      ></st-textarea>
    </div>
  `}function Tj(e){let t=sj(e,ej),r=ej?`receitas/editar/`:`receitas/editar-curada/`;return b`
    <st-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?n.receitas.desfavoritar:n.receitas.favoritar}
      @click=${()=>cj(e,ej)}
    ></st-icon-button>
    ${aj.botaoApresentar()}
    ${aj.botaoFala(()=>vj(e))}
    <st-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void hx(e.titulo,vj(e))}
    ></st-icon-button>
    <st-icon-button
      name="pencil"
      label=${n.acoes.editar}
      @click=${()=>S(`${r}${e.id??``}`)}
    ></st-icon-button>
    <st-icon-button
      name="trash"
      label=${n.receitas.excluir}
      @click=${()=>void xj()}
    ></st-icon-button>
  `}var Ej={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(pj(e)){let e=W?.titulo.trim()??``;return e===``?n.receitas.novaTitulo:e}return $A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return b`
        <st-icon-button
          name="plus"
          label=${n.receitas.nova}
          @click=${()=>S(`receitas/nova`)}
        ></st-icon-button>
      `;if(!pj(e))return $A===null?void 0:Tj($A)},conteudo(e){fj(e);let[t]=e.args;return t===void 0?_j():pj(e)?W===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:wj(W):$A===null?b`<div class="carregando"><st-spinner></st-spinner></div>`:bj($A)}},Dj=4.348,Oj=[{chave:`publicador`,nome:`Publicador`,horasMes:0,resumo:`Sem cota de horas — o que se relata é a participação.`},{chave:`auxiliar`,nome:`Pioneiro auxiliar`,horasMes:30,resumo:`Um mês por vez, ao lado do trabalho ou do estudo.`},{chave:`regular`,nome:`Pioneiro regular`,horasMes:50,resumo:`O ano de serviço inteiro, como rotina de vida.`},{chave:`especial`,nome:`Pioneiro especial`,horasMes:100,resumo:`Designação de tempo integral, sustentada pela organização.`}];function kj(e){return Oj.find(t=>t.chave===e)??Oj[0]}var Aj=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`];function jj(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/Dj,o=r*Dj,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function Mj(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function Nj(e,t,n){let r=new Date(e,t,1),i=new Date(e,t+1,0).getDate(),a=r.getDay(),o=new Set(n),s=[];for(let n=0;n<42;n++){let r=n-a+1,c=r>=1&&r<=i;s.push({dia:c?r:0,fora:!c,deServico:c&&o.has(new Date(e,t,r).getDay())})}return s}function Pj(e,t){let n=new Date(e,t,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return n.charAt(0).toUpperCase()+n.slice(1)}function Fj(e,t,n){return Nj(e,t,n).filter(e=>e.deServico).length}function Ij(e,t,n=new Date){let r=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:u(`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,`0`)}-${String(r.getDate()).padStart(2,`0`)}`),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var Lj=[0,3],Rj=`regular`,zj=600,Bj=12,Vj=[...Lj],Hj=0,Uj=!1,Wj=!1;function Gj(){return{totalHoras:zj,meses:Bj,dias:Vj}}function Kj(e){Rj=e;let t=kj(e).horasMes;t>0&&(zj=t*Bj),Wj=!1,C()}function qj(e){let t=kj(Rj).horasMes;Bj=e,t>0&&(zj=t*e),Wj=!1,C()}function Jj(e){Vj=Vj.includes(e)?Vj.filter(t=>t!==e):[...Vj,e].sort(),Wj=!1,C()}function Yj(e,t,n,r,i,a,o){return b`
    <div class="servico__controle">
      <label class="servico__rotulo">
        <span>${e}</span>
        <strong>${t}</strong>
      </label>
      <input
        type="range"
        min=${n}
        max=${r}
        step=${i}
        .value=${String(a)}
        @input=${e=>o(Number(e.target.value))}
      />
    </div>
  `}function Xj(){let e=kj(Rj);return b`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${Oj.map(e=>b`
            <button
              class="servico__modalidade ${e.chave===Rj?`servico__modalidade--ativa`:``}"
              @click=${()=>Kj(e.chave)}
            >
              <strong>${e.nome}</strong>
              <span>${e.horasMes===0?n.servico.semCota:n.servico.horasMes(e.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${e.resumo}</p>
    </section>
  `}function Zj(){return b`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${Aj.map((e,t)=>b`
            <button
              class="servico__dia ${Vj.includes(t)?`servico__dia--ativo`:``}"
              aria-pressed=${Vj.includes(t)}
              @click=${()=>Jj(t)}
            >${e}</button>
          `)}
      </div>
    </section>
  `}function Qj(){let e=jj(Gj()),t=(e,t,n=!1)=>b`
    <div class="servico__linha ${n?`servico__linha--destaque`:``}">
      <span>${e}</span>
      <strong>${t}</strong>
    </div>
  `;return b`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.gradeTitulo}</h2>

      ${Vj.length===0?b`<st-alert variant="warning" open>${n.servico.semDias}</st-alert>`:t(n.servico.porSaida,Mj(e.porSaida),!0)}
      ${t(n.servico.porSemana,Mj(e.porSemana))}
      ${t(n.servico.porMes,Mj(e.porMes))}
      ${t(n.servico.porAno,Mj(e.porAno))}
      ${t(n.servico.saidas,n.servico.saidasValor(e.saidasTotais))}

      ${e.inviavel?b`<st-alert variant="danger" open>${n.servico.inviavel}</st-alert>`:x}
    </section>
  `}function $j(){let e=jj(Gj()),t=new Date,r=new Date(t.getFullYear(),t.getMonth()+Hj,1),i=r.getFullYear(),a=r.getMonth(),o=Fj(i,a,Vj),s=o===0?0:e.porMes/o;return b`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <st-icon-button
          name="chevron-left"
          label=${n.servico.mesAnterior}
          ?disabled=${Hj===0}
          @click=${()=>{Hj=Math.max(0,Hj-1),C()}}
        ></st-icon-button>
        <strong>${Pj(i,a)}</strong>
        <st-icon-button
          name="chevron-right"
          label=${n.servico.mesSeguinte}
          ?disabled=${Hj>=Bj-1}
          @click=${()=>{Hj=Math.min(Bj-1,Hj+1),C()}}
        ></st-icon-button>
      </div>

      <div class="servico__grade">
        ${Aj.map(e=>b`<span class="servico__cabeca">${e}</span>`)}
        ${Nj(i,a,Vj).map(e=>b`
            <span
              class="servico__cela ${e.fora?`servico__cela--fora`:``} ${e.deServico?`servico__cela--servico`:``}"
            >
              ${e.fora?``:e.dia}
              ${e.deServico?b`<small>${Mj(s)}</small>`:x}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${n.servico.resumoDoMes(o,Mj(e.porMes))}
      </p>
    </section>
  `}function eM(){Uj||(Uj=!0,C(),(async()=>{try{await qw(Ij(Gj(),n.servico.tituloDaMeta(kj(Rj).nome))),Wj=!0}finally{Uj=!1,C()}})())}function tM(){return b`
    <section class="servico__bloco">
      <st-button variant="primary" ?disabled=${Uj||zj<=0} @click=${eM}>
        ${Uj?n.servico.gravando:n.servico.registrar}
      </st-button>

      ${Wj?b`
            <st-alert variant="success" open>
              ${n.servico.gravada}
              <st-button size="small" variant="success" @click=${()=>S(`metas`)}>
                ${n.servico.verMetas}
              </st-button>
            </st-alert>
          `:x}

      <p class="servico__nota servico__nota--fonte">
        ${n.servico.fonteAviso}
        ${n.servico.referencias.map(e=>b`
            <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.rotulo}</a>
          `)}
      </p>
    </section>
  `}var nM={voltarPara:()=>`ministerio`,conteudo(e){let t=jj(Gj());return b`
      <div class="servico">
        <p class="servico__intro">${n.servico.intro}</p>

        ${Xj()}

        <section class="servico__bloco">
          ${Yj(n.servico.alvo,n.servico.alvoValor(zj),0,2400,10,zj,e=>{zj=e,Wj=!1,C()})}
          ${Yj(n.servico.prazo,n.servico.prazoValor(Bj),1,12,1,Bj,e=>{qj(e),Hj=Math.min(Hj,e-1)})}
          <p class="servico__nota">${n.servico.mediaMes(Mj(t.porMes))}</p>
        </section>

        ${Zj()}
        ${Qj()}
        ${$j()}
        ${tM()}
      </div>
    `}},rM=`papiro-boas-vindas-visto`,iM=[{id:`bemVindo`,icone:`sparkles`,cor:`#0d6efd`},{id:`painel`,icone:`layout-grid`,cor:`#6f42c1`},{id:`offline`,icone:`wifi-off`,cor:`#198754`},{id:`privado`,icone:`shield-lock`,cor:`#dc3545`},{id:`instalar`,icone:`device-mobile`,cor:`#fd7e14`}];function aM(){try{return localStorage.getItem(rM)!==null}catch{return!0}}function oM(){try{localStorage.setItem(rM,`1`)}catch{}}function sM(e){let t=iM[e];if(t===void 0)return b``;let r=n.boasVindas.passos[t.id];return b`
    <div class="bv" style="--cor: ${t.cor}">
      <span class="bv__icone">
        <st-icon name=${t.icone}></st-icon>
      </span>

      <h2 class="bv__titulo">${r.titulo}</h2>
      <p class="bv__texto">${r.texto}</p>

      <p class="bv__dica">
        <st-icon name="bulb"></st-icon>
        ${r.dica}
      </p>

      <div
        class="bv__passos"
        role="progressbar"
        aria-valuemin="1"
        aria-valuemax=${iM.length}
        aria-valuenow=${e+1}
        aria-valuetext=${n.boasVindas.passo(e+1,iM.length)}
      >
        ${iM.map((t,n)=>b`<span class="bv__ponto ${n===e?`bv__ponto--atual`:``}"></span>`)}
      </div>
    </div>
  `}function cM(){let e=0;return qd(n.boasVindas.passos.bemVindo.titulo,void 0,(t,r,i)=>{let a=e===iM.length-1;return b`
        ${sM(e)}

        ${e===0?x:b`
              <st-button slot="footer" @click=${()=>{e!==0&&(--e,i())}}>
                <st-icon slot="prefix" name="arrow-left"></st-icon>
                ${n.boasVindas.voltar}
              </st-button>
            `}
        ${a?x:b`
              <st-button slot="footer" variant="text" @click=${()=>t(void 0)}>
                ${n.boasVindas.pular}
              </st-button>
            `}
        <st-button slot="footer" variant="primary" @click=${()=>{if(a){t(void 0);return}e+=1,i()}}>
          ${a?n.boasVindas.comecar:n.boasVindas.proximo}
          <st-icon slot="suffix" name=${a?`check`:`arrow-right`}></st-icon>
        </st-button>
      `},{semCabecalho:!0,classe:`bv__dialogo`}).then(oM)}async function lM(){aM()||await cM()}function uM(e){return{tipo:`paragrafo`,partes:[{texto:e}]}}function dM(...e){return{tipo:`paragrafo`,partes:e.map((e,t)=>({texto:e,forte:t%2==1})).filter(e=>e.texto!==``)}}function G(e){return{tipo:`titulo`,texto:e}}function fM(...e){return{tipo:`lista`,itens:e.map(e=>[{texto:e}])}}var pM=[{id:`guia`,titulo:`Guia do Usuário`,icone:`book-2`,subtitulo:`Como aproveitar o Papiro, seu companheiro pessoal offline-first.`,blocos:[G(`1. O que é o Papiro`),dM(`O Papiro é um aplicativo pessoal que reúne, num só lugar, ferramentas de estudo, organização e preparo — funcionando `,`inteiramente no seu dispositivo`,`, mesmo sem internet. Tudo o que você cria fica guardado localmente e é só seu.`),G(`2. Instalar no aparelho`),uM(`O Papiro é um app instalável. Instalar deixa tudo mais rápido e disponível offline:`),{tipo:`lista`,itens:[[{texto:`Celular (Android/Chrome): `,forte:!0},{texto:`abra o menu do navegador e toque em "Instalar app" ou "Adicionar à tela inicial".`}],[{texto:`iPhone/iPad (Safari): `,forte:!0},{texto:`toque em Compartilhar e depois em "Adicionar à Tela de Início".`}],[{texto:`Computador (Chrome/Edge): `,forte:!0},{texto:`clique no ícone de instalar na barra de endereço.`}]]},dM(`Na primeira vez, abra o app `,`com internet`,` por alguns segundos: ele baixa o conteúdo de estudo e guarda tudo para uso offline. Depois disso, funciona sem rede.`),G(`3. Navegando pelo app`),{tipo:`lista`,itens:[[{texto:`Tela inicial: `,forte:!0},{texto:`mostra os módulos em uma grade e um resumo do dia. Toque em um card para abrir.`}],[{texto:`Grupos: `,forte:!0},{texto:`alguns cards reúnem módulos relacionados (Meu Estudo Pessoal, Pessoal) — toque para ver o que há dentro.`}],[{texto:`Voltar: `,forte:!0},{texto:`use a seta no topo de cada tela para retornar.`}],[{texto:`Cartão e ficha: `,forte:!0},{texto:`os dois botões à direita da barra de topo abrem, de qualquer tela, o cartão de contato e a ficha de emergência.`}],[{texto:`Sobre: `,forte:!0},{texto:`o rodapé leva a esta tela, com este guia, os documentos legais e o contato.`}]]},G(`4. Os módulos`),{tipo:`definicoes`,itens:[{nome:`Anotações`,texto:`escreva e organize suas notas pessoais.`},{nome:`Guias`,texto:`checklists e guias práticos, com os conteúdos básicos e os que você mesmo criar.`},{nome:`Poesia`,texto:`uma coletânea de poesias para leitura e meditação.`},{nome:`Receitas`,texto:`guarde e consulte suas receitas.`},{nome:`Língua Pura`,texto:`um jogo de perguntas para aprender e fixar, com base no estudo das Escrituras.`},{nome:`Teve um Projeto?`,texto:`desafios interativos que mostram o design na criação por meio da matemática — sequências, geometria dos favos, órbitas, DNA e mais.`},{nome:`Entenda Melhor`,texto:`explicações com gráficos para assuntos que pedem mais do que um parágrafo.`},{nome:`Cronologia`,texto:`a linha do tempo bíblica, mundial e histórica, lado a lado.`},{nome:`Caderno de Estudo`,texto:`registre, com suas palavras, o que cada estudo lhe ensinou.`},{nome:`Esteja Preparado`,texto:`preparo pessoal e familiar (detalhado abaixo).`},{nome:`Financeiro`,texto:`acompanhe receitas e despesas por categoria, com uma visão geral do seu orçamento.`},{nome:`Metas`,texto:`defina objetivos e acompanhe o progresso.`},{nome:`Vida e Ministério`,texto:`organize suas atividades e designações.`},{nome:`Modo Estudo`,texto:`sessões de estudo com foco e tempo, para se concentrar.`},{nome:`Leitura da Bíblia`,texto:`acompanhe seu progresso de leitura da Bíblia.`},{nome:`Calendário`,texto:`registre eventos e compromissos.`},{nome:`Perfil / ICE`,texto:`seus dados de perfil e as informações de emergência (ICE — In Case of Emergency), úteis a quem precisar ajudá-lo.`},{nome:`Tutorial`,texto:`um tópico por módulo, explicando o que ele faz e como usar.`}]},G(`5. Esteja Preparado`),uM(`O módulo de preparo tem sub-telas próprias:`),{tipo:`lista`,itens:[[{texto:`Kits — `,forte:!0},{texto:`checklists de itens (mochila de emergência, primeiros socorros, documentos…). Marque cada item conforme reúne, e acompanhe o percentual de cada kit. Você pode editar, criar e apagar seus próprios kits; se apagar todos, os kits padrão retornam.`}],[{texto:`Estoque — `,forte:!0},{texto:`controle de alimentos e itens, com validade.`}],[{texto:`Cofre — `,forte:!0},{texto:`um espaço protegido por senha para guardar documentos e informações sensíveis, sempre no seu aparelho.`}]]},dM(`A tela do módulo mostra um `,`índice de prontidão`,` que resume o quanto você está preparado.`),G(`6. Conteúdo e atualizações`),uM(`Os conteúdos básicos (guias, poesias, receitas, perguntas e afins) são baixados quando você abre o app com internet e ficam guardados para uso offline. Quando houver novidades, elas chegam automaticamente na próxima vez que você abrir o app conectado — ou quando você toca em "Sincronizar", na tela inicial.`),G(`7. Seus dados`),dM(`Tudo o que você cria fica `,`somente no seu aparelho`,` — nada é enviado para servidores. Isso significa que:`),fM(`Você tem privacidade total: ninguém além de você acessa seus dados.`,`A responsabilidade pela preservação é sua: como não há backup em nuvem, desinstalar o app, limpar os dados do navegador ou perder o aparelho apaga tudo de forma definitiva.`,`Para apagar seus dados, limpe o armazenamento do app — ver a Política de Privacidade.`),{tipo:`veja`,documentos:[`termos`,`privacidade`,`terceiros`,`licenca`]}]},{id:`termos`,titulo:`Termos de Uso`,icone:`file-text`,subtitulo:`Última atualização: julho de 2026`,blocos:[G(`1. Aceitação dos termos`),uM(`Ao instalar, acessar ou utilizar o aplicativo Papiro, você concorda com estes Termos de Uso. Se não concordar com qualquer parte deles, não utilize o aplicativo.`),G(`2. Descrição do serviço`),uM(`O Papiro é um aplicativo pessoal de uso offline, voltado a organização pessoal, estudo, gestão financeira e produtividade. Ele opera integralmente no aparelho do usuário, sem dependência de servidores externos em tempo de uso.`),G(`3. Propriedade dos dados`),uM(`Todos os dados inseridos no Papiro pertencem exclusivamente ao usuário e são armazenados localmente no aparelho. O desenvolvedor não acessa, não coleta, não transmite e não armazena qualquer informação do usuário em servidores externos. O tratamento de dados é detalhado na Política de Privacidade.`),G(`4. Responsabilidade pelos dados`),dM(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade do usuário. A desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou a perda do aparelho resultará em `,`perda definitiva e irrecuperável`,` de todos os dados.`),G(`5. Uso permitido`),uM(`O aplicativo destina-se exclusivamente ao uso pessoal e não comercial. É vedado:`),fM(`Realizar engenharia reversa, descompilar ou desmontar o aplicativo além do permitido em lei;`,`Utilizar o aplicativo para fins ilegais ou que violem direitos de terceiros;`,`Tentar contornar mecanismos de segurança do aplicativo;`,`Redistribuir ou comercializar o aplicativo ou seu conteúdo padrão como se fosse de sua autoria.`),G(`6. Limitação de responsabilidade`),dM(`O Papiro é fornecido `,`"no estado em que se encontra" (as is)`,`, sem garantias expressas ou implícitas. O desenvolvedor não se responsabiliza por:`),fM(`Perda de dados decorrente de falha de hardware, desinstalação ou limpeza de armazenamento;`,`Decisões financeiras, de saúde, legais ou pessoais tomadas com base no conteúdo do aplicativo;`,`Danos indiretos ou consequentes relacionados ao uso do aplicativo.`),uM(`O conteúdo de caráter educativo, financeiro ou de estudo tem finalidade informativa e não substitui aconselhamento profissional.`),G(`7. Propriedade intelectual`),uM(`O aplicativo Papiro — código-fonte, design, logotipos e recursos originais — é de propriedade do desenvolvedor e protegido pelas leis de direitos autorais. O conteúdo que você insere (anotações, metas, receitas e afins) permanece de sua propriedade exclusiva.`),dM(`Materiais de terceiros eventualmente referenciados no conteúdo padrão — incluindo textos bíblicos, publicações e marcas de seus respectivos titulares — pertencem a esses titulares e são citados apenas para fins de estudo pessoal. O Papiro é um `,`projeto independente`,`, sem afiliação com, patrocínio de ou endosso por tais organizações.`),G(`8. Alterações nos termos`),uM(`Estes termos podem ser atualizados periodicamente. O uso continuado do aplicativo após a publicação de alterações constitui aceitação dos novos termos.`),G(`9. Lei aplicável`),uM(`Estes termos são regidos pela legislação brasileira, em especial a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e o Código de Defesa do Consumidor (Lei nº 8.078/1990).`),G(`10. Contato`),uM(`Para questões relacionadas a estes termos, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`privacidade`,`licenca`]}]},{id:`privacidade`,titulo:`Política de Privacidade`,icone:`shield-lock`,subtitulo:`Última atualização: julho de 2026`,blocos:[G(`1. Filosofia local-first`),dM(`O Papiro foi concebido sob o princípio de Privacy by Design. Todos os dados que você insere — textos, registros, configurações, documentos e histórico — são armazenados `,`exclusivamente no banco de dados local do seu aparelho`,`. Nenhuma informação pessoal é transmitida para servidores externos, nem para o desenvolvedor.`),G(`2. Dados que coletamos`),dM(``,`Nenhum.`,` O desenvolvedor não coleta, não recebe e não armazena qualquer dado seu. Tudo o que você registra permanece somente no seu aparelho, sob seu controle.`),G(`3. Transmissão de dados`),dM(`O aplicativo `,`não transmite para fora do seu aparelho`,` nenhuma informação, incluindo:`),fM(`Nome, endereço, e-mail ou qualquer dado de identificação pessoal;`,`Dados de localização geográfica;`,`Contatos, agenda ou arquivos do aparelho;`,`Dados biométricos;`,`Dados de saúde, financeiros, itens de estoque ou documentos do Cofre.`),dM(`Recursos como Financeiro, Estoque e Cofre funcionam inteiramente no seu aparelho: os dados que você digita neles são armazenados e processados `,`apenas localmente`,` e nunca saem do aparelho.`),G(`4. Telemetria e logs`),dM(`O Papiro `,`não envia telemetria a servidores externos`,`. Eventuais registros técnicos de depuração existem apenas em memória durante o uso e são descartados ao encerrar o aplicativo.`),G(`5. Segurança dos dados`),uM(`O banco de dados local é protegido pelos mecanismos de segurança do próprio aparelho. O desenvolvedor não tem acesso a ele. Recomendamos:`),fM(`Utilizar bloqueio de tela no aparelho;`,`Manter o sistema operacional e o navegador atualizados;`,`Estar ciente de que, por serem locais, os dados dependem inteiramente do seu aparelho (ver a seção 8).`),G(`6. Direitos do usuário (LGPD)`),dM(`O Papiro foi projetado de modo que `,`não há tratamento dos seus dados em servidores próprios`,` — não existe um controlador externo retendo suas informações. Por isso, você exerce seus direitos previstos na Lei nº 13.709/2018 `,`diretamente, sem intermediários`,`:`),{tipo:`lista`,itens:[[{texto:`Acesso: `,forte:!0},{texto:`todos os dados ficam visíveis na própria interface do app, a qualquer momento;`}],[{texto:`Correção: `,forte:!0},{texto:`edite ou remova qualquer registro diretamente nas telas do aplicativo;`}],[{texto:`Exclusão: `,forte:!0},{texto:`apague os dados locais conforme a seção 7;`}],[{texto:`Portabilidade: `,forte:!0},{texto:`como não mantemos dados sob nossa guarda, não há informação a transferir a terceiros — os dados estão inteiramente sob seu controle, no aparelho.`}]]},G(`7. Exclusão de dados`),dM(`Para apagar permanentemente seus dados, `,`limpe o armazenamento do aplicativo`,` no seu aparelho (num navegador: apagar os dados do site do Papiro; num app instalado: limpar o armazenamento do app nas configurações do sistema). Isso destrói de forma definitiva o banco de dados local e todas as preferências. `,`A operação é irreversível e não existe mecanismo de recuperação.`),G(`8. Responsabilidade pelos dados`),dM(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade do usuário. A perda do aparelho, a desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou uma redefinição de fábrica resultará na `,`perda definitiva e irrecuperável`,` de todos os dados.`),G(`9. Menores de idade`),uM(`O Papiro não transmite nem armazena fora do aparelho dados de nenhum usuário, inclusive menores de idade. Se você é responsável por uma criança que utiliza o aplicativo, saiba que nenhum dado pessoal deixa o aparelho.`),G(`10. Alterações nesta política`),uM(`Esta política pode ser atualizada periodicamente. Recomendamos revisitar este documento a cada atualização do aplicativo. O uso continuado após alterações constitui aceitação da nova versão.`),G(`11. Contato`),uM(`Para exercer seus direitos ou relatar problemas de privacidade, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`termos`,`guia`]}]},{id:`terceiros`,titulo:`Direitos de Terceiros`,icone:`users`,subtitulo:`Última atualização: agosto de 2026`,blocos:[uM(`O Papiro respeita a propriedade intelectual de terceiros. Esta página reconhece os materiais e softwares de terceiros utilizados ou referenciados no aplicativo.`),G(`1. Conteúdo de estudo referenciado`),dM(`Parte do conteúdo educativo do Papiro faz referência a publicações e textos bíblicos de terceiros, incluindo a `,`Tradução do Novo Mundo das Escrituras Sagradas`,` e materiais dos sites jw.org e wol.jw.org.`),dM(`Esses textos, publicações e materiais são de `,`propriedade e direitos autorais de Watch Tower Bible and Tract Society of Pennsylvania`,` e das entidades associadas às Testemunhas de Jeová. Marcas como "jw.org", "Tradução do Novo Mundo" e "Testemunhas de Jeová" pertencem aos seus respectivos titulares.`),dM(`Eventuais trechos são citados `,`exclusivamente para fins de estudo pessoal e não comercial`,`. O Papiro é um `,`projeto independente e pessoal`,`, `,`sem qualquer afiliação, patrocínio, autorização ou endosso oficial`,` dessas organizações. Para o conteúdo oficial e completo, consulte diretamente as fontes de seus titulares.`),uM(`Se você é titular de direitos e identificar uso indevido, utilize o contato indicado na tela "Sobre" para solicitarmos a correção ou remoção.`),G(`2. Software de código aberto`),uM(`O Papiro é construído sobre bibliotecas de código aberto, cada uma sob sua própria licença, às quais agradecemos:`),{tipo:`tabela`,colunas:[`Biblioteca`,`Licença`],linhas:[[`Lit`,`BSD-3-Clause`],[`PixiJS`,`MIT`],[`qrcode-generator`,`MIT`],[`SQLite (build WebAssembly)`,`Domínio público`],[`Vite (ferramenta de build)`,`MIT`],[`Workbox (service worker)`,`MIT`]]},uM(`Os textos completos das licenças estão disponíveis nos repositórios oficiais de cada projeto.`),G(`3. Ícones e fontes`),dM(`Os ícones de interface são do conjunto `,`Tabler Icons`,` (MIT, © Paweł Kuna). A tipografia é a `,`Noto Sans`,` (SIL Open Font License 1.1), servida pelo próprio aplicativo — o Papiro não busca fontes, scripts ou imagens de nenhum servidor externo em tempo de uso.`),{tipo:`veja`,documentos:[`licenca`,`termos`]}]},{id:`licenca`,titulo:`Licença`,icone:`copyright`,subtitulo:`© 2026 Luiz Marin. Todos os direitos reservados.`,blocos:[dM(`O aplicativo `,`Papiro`,` — incluindo seu código-fonte, design, identidade visual, logotipos, textos originais e demais recursos autorais — é `,`software proprietário`,`, de titularidade exclusiva de Luiz Marin.`),G(`1. Uso permitido`),dM(`É concedida ao usuário final uma licença `,`pessoal, intransferível e não comercial`,` para instalar e utilizar o aplicativo, nos termos dos Termos de Uso. Nenhuma licença de código aberto é concedida.`),G(`2. Restrições`),uM(`Salvo autorização expressa e por escrito do titular, é vedado:`),fM(`Copiar, reproduzir ou redistribuir o aplicativo ou partes dele;`,`Vender, sublicenciar, alugar ou comercializar o aplicativo;`,`Modificar, adaptar ou criar obras derivadas;`,`Remover ou alterar avisos de direitos autorais e de titularidade.`),G(`3. Conteúdo do usuário`),dM(`Os dados e o conteúdo que você cria no aplicativo (anotações, metas, registros e afins) permanecem de `,`sua propriedade exclusiva`,` e não são abrangidos por esta licença.`),G(`4. Materiais de terceiros`),uM(`Bibliotecas de código aberto e conteúdos referenciados de terceiros possuem seus próprios direitos e licenças, descritos em Direitos de Terceiros.`),G(`5. Isenção de garantias`),dM(`O aplicativo é fornecido `,`"no estado em que se encontra"`,`, sem garantias de qualquer natureza. O titular não se responsabiliza por danos decorrentes do uso, conforme os Termos de Uso.`),G(`6. Contato`),uM(`Para solicitar autorizações ou esclarecer dúvidas sobre esta licença, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`terceiros`,`termos`]}]}],mM=new Map(pM.map(e=>[e.id,e]));function hM(e){return mM.get(e)}var gM={projetos:{marinx:{versao:`1.0.0`,build:`2026-08-08T11:23:12.114Z`},admin:{versao:`1.0.35`,build:`2026-08-08T11:23:12.114Z`},papiro:{versao:`0.0.66`,build:`2026-08-08T11:19:31.904Z`},stratum:{versao:`1.0.13`,build:`2026-08-08T00:48:05.693Z`},vscode:{versao:`1.1.29`,build:`2026-08-07T15:31:01.421Z`},localzap:{versao:``,build:``}},componentesStratum:81,pacotes:[{nome:`@marinx/core`,versao:`0.0.0`,caminho:`packages/core`},{nome:`@marinx/flavors`,versao:`0.0.0`,caminho:`packages/flavors`},{nome:`@marinx/stratum`,versao:`1.0.13`,caminho:`packages/stratum`},{nome:`@marinx/admin`,versao:`1.0.35`,caminho:`apps/admin`},{nome:`@marinx/localzap`,versao:`0.0.27`,caminho:`apps/localzap`},{nome:`@marinx/papiro`,versao:`0.0.66`,caminho:`apps/papiro`},{nome:`marin-x-intellisuite`,versao:`1.1.29`,caminho:`apps/vscode`}],sementes:{mar_respostas_rapidas:8,pap_anotacao_modelos:7,pap_calendario_tipos:6,pap_categorias_financeiro:17,pap_criacao_modulos:63,pap_cronologia_eventos:594,pap_estoque_alimentos:32,pap_guias:15,pap_itens_checklist:96,pap_kits_checklist:6,pap_perguntas:1624,pap_poesias:274,pap_receitas:4}}.projetos.papiro?.versao??``;function _M(e){return b`${e.map(e=>e.forte===!0?b`<strong>${e.texto}</strong>`:b`${e.texto}`)}`}function vM(e){switch(e.tipo){case`titulo`:return b`<h2 class="doc__titulo">${e.texto}</h2>`;case`paragrafo`:return b`<p>${_M(e.partes)}</p>`;case`lista`:return b`<ul class="doc__lista">
        ${e.itens.map(e=>b`<li>${_M(e)}</li>`)}
      </ul>`;case`definicoes`:return b`<dl class="doc__definicoes">
        ${e.itens.map(e=>b`
            <div class="doc__definicao">
              <dt>${e.nome}</dt>
              <dd>${e.texto}</dd>
            </div>
          `)}
      </dl>`;case`tabela`:return b`
        <div class="doc__rolagem">
          <table class="doc__tabela">
            <thead>
              <tr>
                <th>${e.colunas[0]}</th>
                <th>${e.colunas[1]}</th>
              </tr>
            </thead>
            <tbody>
              ${e.linhas.map(e=>b`<tr><td>${e[0]}</td><td>${e[1]}</td></tr>`)}
            </tbody>
          </table>
        </div>
      `;case`veja`:return b`
        <nav class="doc__veja" aria-label=${n.sobre.vejaTambem}>
          <h2 class="doc__titulo">${n.sobre.vejaTambem}</h2>
          ${e.documentos.map(e=>{let t=hM(e);return t===void 0?x:bM(t)})}
        </nav>
      `}}function yM(e){return b`
    <article class="doc">
      <p class="doc__sub">${e.subtitulo}</p>
      ${e.blocos.map(e=>vM(e))}
    </article>
  `}function bM(e){return b`
    <button class="linha" @click=${()=>S(`sobre/${e.id}`)}>
      <st-icon class="linha__icone" name=${e.icone}></st-icon>
      <span class="linha__rotulo">${e.titulo}</span>
      <st-icon class="linha__seta" name="chevron-right"></st-icon>
    </button>
  `}function xM(e,t){return b`
    <span class="selo">
      <st-icon name=${e}></st-icon>
      ${t}
    </span>
  `}function SM(e,t,n,r){return b`
    <div class="recurso" style="--cor: ${t}">
      <st-icon class="recurso__icone" name=${e}></st-icon>
      <span class="recurso__titulo">${n}</span>
      <span class="recurso__texto">${r}</span>
    </div>
  `}function CM(){return b`
    <section class="sobre__capa">
      <img class="sobre__logo" src="./icons/papiro.svg" alt="" width="96" height="96" />
      <h2 class="sobre__nome">${n.app.nome}</h2>
      ${gM===``?x:b`<st-badge variant="primary" pill>${n.sobre.versao(gM)}</st-badge>`}
      <p class="sobre__lema">${n.sobre.lema}</p>
    </section>

    <div class="selos">
      ${xM(`wifi-off`,n.sobre.seloOffline)}
      ${xM(`shield-lock`,n.sobre.seloPrivado)}
      ${xM(`eye-off`,n.sobre.seloSemRastreio)}
      ${xM(`device-mobile`,n.sobre.seloInstalavel)}
    </div>

    <h2 class="secao">${n.sobre.tudoNumLugar}</h2>
    <div class="recursos">
      ${SM(`book`,`#6f42c1`,n.sobre.recEstudo,n.sobre.recEstudoTexto)}
      ${SM(`device-gamepad-2`,`#198754`,n.sobre.recJogo,n.sobre.recJogoTexto)}
      ${SM(`feather`,`#e0399a`,n.sobre.recCriar,n.sobre.recCriarTexto)}
      ${SM(`cash`,`#16a34a`,n.sobre.recFinancas,n.sobre.recFinancasTexto)}
      ${SM(`shield-check`,`#dc2626`,n.sobre.recPreparo,n.sobre.recPreparoTexto)}
      ${SM(`users`,`#0dcaf0`,n.sobre.recMinisterio,n.sobre.recMinisterioTexto)}
    </div>

    <div class="sobre__privacidade">
      <st-icon class="sobre__cadeado" name="shield-lock"></st-icon>
      <div>
        <strong>${n.sobre.privacidadeTitulo}</strong>
        <p>${n.sobre.privacidadeTexto}</p>
      </div>
    </div>

    <div class="lista sobre__boasvindas">
      <button class="linha" @click=${()=>void cM()}>
        <st-icon class="linha__icone" name="sparkles"></st-icon>
        <span class="linha__rotulo">${n.boasVindas.reabrir}</span>
        <st-icon class="linha__seta" name="chevron-right"></st-icon>
      </button>
    </div>

    <h2 class="secao">${n.sobre.documentos}</h2>
    <div class="lista sobre__documentos">${pM.map(e=>bM(e))}</div>

    <p class="sobre__contato">
      <st-icon name="mail"></st-icon>
      ${n.sobre.contato}
      <a href="mailto:${n.sobre.email}">${n.sobre.email}</a>
    </p>
  `}var wM={voltarPara(e){return e.args.length===0?`home`:`sobre`},titulo(e){let[t]=e.args;return t===void 0?void 0:hM(t)?.titulo},conteudo(e){let[t]=e.args;if(t===void 0)return CM();let n=hM(t);return n===void 0?CM():yM(n)}},TM=[`_migracoes`,`mar_licencas`,`mar_marketing`,`mar_respostas_rapidas`,`mar_traducoes`,`pap_anotacao_modelos`,`pap_calendario_tipos`,`pap_categorias_financeiro`,`pap_configuracoes`,`pap_criacao_modulos`,`pap_cronologia_eventos`,`pap_estoque_alimentos`,`pap_guias`,`pap_itens_checklist`,`pap_kits_checklist`,`pap_logs`,`pap_perguntas`,`pap_poesias`,`pap_receitas`],EM=[`mar_produtos`,`pap_tutorial`];[...TM,...EM].sort();function DM(e,t,n,r,i){return{id:e,modulo_id:t,titulo:n,resumo:r,conteudo:i.map(e=>`<p>${e}</p>`).join(``),ordem:e,publicar:1}}var OM=[DM(1,``,`Visão geral`,`O que é o Papiro e como ele guarda suas coisas`,[`O Papiro é um aplicativo <strong>do seu aparelho</strong>. Tudo o que você escreve — anotações, metas, finanças, relatórios — fica gravado localmente e não é enviado a servidor nenhum.`,`A tela inicial é o mapa do app: cada tile abre um módulo, e alguns tiles são <em>hubs</em>, que agrupam módulos parecidos. O botão de voltar do cabeçalho sempre sobe um nível.`,`O botão de sincronizar, na tela inicial, baixa o <strong>conteúdo curado</strong> (guias, poesias, receitas, perguntas do jogo). Ele nunca apaga o que é seu, e o app funciona sem rede: sincronizar só atualiza o acervo.`,`Em cada módulo, o botão “?” do cabeçalho abre exatamente o tópico daquele módulo aqui no tutorial.`]),DM(2,`anotacoes`,`Anotações`,`Escrever, organizar em pastas e apresentar`,[`Serve para tudo que você escreve: reuniões, discursos, visitas, estudos. Toque em <strong>+</strong> e escolha um modelo — ele já entra com os títulos prontos.`,`A gravação é automática: o texto é salvo pouco depois de você parar de digitar, e o rodapé do editor mostra a hora do último salvamento. Sem título, nada é gravado.`,`Dicas: <strong>fixe</strong> a anotação que você abre toda semana; <strong>arquive</strong> em vez de excluir o que já passou; e use o modo <strong>apresentar</strong> para ler no palco — o texto rola sozinho e a velocidade é ajustável.`]),DM(3,`guias`,`Guias`,`Ler os guias do acervo e escrever os seus`,[`Os guias são explicações prontas, que vêm no acervo curado. A lista mistura os do acervo com os seus; os seus aparecem com a marca <em>Minha</em>.`,`No guia aberto você pode ouvir em voz alta, apresentar com rolagem automática ou compartilhar o texto. Editar e excluir só valem para os seus.`,`Dica: toque em <strong>+</strong> para escrever um guia próprio — ele fica no aparelho e nunca é substituído por uma sincronização.`]),DM(4,`poesia`,`Poesia`,`Ler o acervo, favoritar e escrever`,[`O acervo de poesias é curado; as suas entram pelo <strong>+</strong> e ficam misturadas na mesma lista, com a marca <em>Minha</em>.`,`Na leitura há navegação sequencial (anterior/próxima) pelo acervo, barra de progresso, leitura em voz alta e modo apresentação.`,`Dica: a <strong>estrela</strong> marca favoritos, e favoritos sobem para o topo da lista. O botão de informação, na lista, explica o propósito das obras.`]),DM(5,`receitas`,`Receitas`,`Buscar por categoria e guardar as suas`,[`A lista traz o acervo curado e as suas receitas. Os chips de emoji filtram por categoria — toque de novo no chip aceso para ver todas.`,`Ingredientes e modo de preparo são campos de <strong>linhas</strong>: um item por linha. É o formato que fica legível na leitura e na hora de ouvir em voz alta.`,`Dica: aqui você pode editar até as receitas do acervo — a sua versão fica no aparelho.`]),DM(6,`jogo`,`Língua Pura`,`Praticar com as perguntas do acervo`,[`É um jogo de perguntas para fixar o que você estuda. As perguntas vêm do acervo curado e aumentam a cada sincronização.`,`Dica: erre sem medo — a explicação de cada resposta é a parte que ensina.`]),DM(7,`criacao`,`Teve um Projeto?`,`Puzzles sobre o projeto na natureza`,[`Cada módulo apresenta um ser vivo e o que a engenharia aprendeu dele. Você mexe nos controles do gráfico e vê o efeito na hora.`,`Dica: a ilustração de cada módulo ensina o que o puzzle não mostra — a conta, o mecanismo, o contexto. Vale abrir.`]),DM(8,`entenda`,`Entenda Melhor`,`Assuntos explicados com gráficos`,[`Assuntos que rendem mais quando visualizados: escalas, medições, cronologias. Os controles ficam dentro do próprio gráfico, e os textos mudam conforme você mexe.`,`Dica: as referências ficam no fim de cada assunto — vale conferir a fonte.`]),DM(9,`cronologia`,`Cronologia`,`A linha do tempo dos períodos bíblicos`,[`A linha do tempo vai da criação aos nossos dias. Toque num período para posicionar a linha nele e ver os eventos daquele trecho.`,`Dica: use junto do Caderno de Estudo — datar o que você lê ajuda a fixar.`]),DM(10,`caderno`,`Caderno de Estudo`,`Perguntas e respostas do seu estudo`,[`Um caderno para as suas perguntas e o que você descobriu sobre cada uma. Diferente das Anotações, aqui o formato é pergunta e resposta.`,`Dica: registre a pergunta assim que ela aparecer, mesmo sem resposta. A lista de perguntas abertas é o seu roteiro de estudo.`]),DM(11,`prep`,`Esteja Preparado`,`Kits, estoque e documentos`,[`Reúne o preparo para emergências: listas de verificação (kits), estoque de alimentos com validade e um cofre de documentos.`,`O cofre guarda os documentos <strong>cifrados</strong> no próprio aparelho, com a sua senha. Sem a senha ninguém abre — nem o app.`,`Dica: comece pelo kit sugerido e marque o que já tem; o indicador de prontidão mostra o quanto falta.`]),DM(12,`financeiro`,`Financeiro`,`Entradas, saídas e recorrências`,[`Lançamentos de entrada e saída por categoria, com recorrências para o que repete todo mês.`,`Dica: crie as categorias que você realmente usa e apague as que não usa — relatório com categoria vazia não informa nada.`]),DM(13,`metas`,`Metas`,`Objetivos com progresso`,[`Metas com prazo e progresso, acessadas de dentro de Vida e Ministério.`,`Dica: meta boa é a que caber num número — horas, capítulos, visitas. O progresso se calcula sozinho a partir dele.`]),DM(14,`ministerio`,`Vida e Ministério`,`Relatório do mês e contadores`,[`Os contadores do mês e o relatório. Os contadores somam durante o dia, e o relatório fecha o mês com o total.`,`Dica: registre no fim de cada saída, não no fim do mês — é a diferença entre um número exato e um número lembrado.`]),DM(15,`estudo`,`Modo Estudo`,`Sessões de estudo com tempo`,[`Marca sessões de estudo com duração, para você ver quanto tempo dedicou e a quê.`,`Dica: uma sessão curta registrada vale mais que uma longa esquecida.`]),DM(16,`leitura`,`Leitura da Bíblia`,`Acompanhar a leitura por livro`,[`Acompanha a leitura livro por livro, marcando o que já foi lido.`,`Dica: o progresso é por capítulo — marcar assim que terminar mantém o histórico honesto.`]),DM(17,`calendario`,`Calendário`,`Eventos por tipo`,[`Eventos do mês, coloridos por tipo (reunião, assembleia, saída de campo, pessoal).`,`Dica: os tipos padrão já vêm criados; você pode criar os seus e reaproveitar em cada evento.`]),DM(18,`perfil`,`Perfil / ICE`,`Seus dados e o cartão de emergência`,[`Guarda os seus dados, incluindo as informações de emergência (ICE) e a recusa de sangue.`,`Dica: preencha os contatos de emergência mesmo que pareça improvável precisar — é a tela que outra pessoa vai abrir no seu lugar.`]),DM(19,`tutorial`,`Tutorial`,`Este próprio guia`,[`Este módulo. A lista tem um tópico por módulo, e cada módulo tem um botão “?” que abre o tópico dele direto.`,`O conteúdo é curado: ele melhora a cada sincronização, sem precisar atualizar o app.`])],kM=()=>i(`tutorial`);async function AM(){let e=await kM().todos().catch(()=>[]);return[...e.length===0?OM:e].filter(e=>e.publicar!==0).sort((e,t)=>(e.ordem??0)-(t.ordem??0))}function jM(e){return e.find(e=>e.modulo_id===``)}function MM(e){return new Map(e.filter(e=>e.modulo_id!==``).map(e=>[e.modulo_id,e]))}var NM=`visao-geral`,PM=[],FM=!1,IM=!1;function LM(){FM||IM||(IM=!0,(async()=>{try{PM=await AM(),FM=!0}finally{IM=!1,C()}})())}function RM(e){return e===`visao-geral`?jM(PM):MM(PM).get(e)}function zM(e){let t=Vt(e.modulo_id),n=e.modulo_id===``?NM:e.modulo_id;return b`
    <button
      class="linha"
      style=${t===void 0?``:`--cor:${t.cor}`}
      @click=${()=>S(`tutorial/${n}`)}
    >
      <st-icon class="linha__icone" name=${t?.icone??`help-circle`}></st-icon>
      <span class="linha__rotulo">
        ${e.titulo}
        ${e.resumo===``?x:b`<small class="linha__resumo">${e.resumo}</small>`}
      </span>
      <st-icon class="linha__seta" name="chevron-right"></st-icon>
    </button>
  `}function BM(){if(PM.length===0)return b`
      <div class="vazio">
        <st-icon class="vazio__icone" name="help-circle"></st-icon>
        <p>${n.tutorial.vazio}</p>
      </div>
    `;let e=jM(PM),t=MM(PM),r=It.map(e=>t.get(e.id)).filter(e=>e!==void 0);return b`
    <p class="intro">${n.tutorial.intro}</p>

    ${e===void 0?x:b`
          <h2 class="secao">${n.tutorial.visaoGeral}</h2>
          <div class="lista">${zM(e)}</div>
        `}

    <h2 class="secao">${n.tutorial.modulos}</h2>
    <div class="lista">${r.map(e=>zM(e))}</div>
  `}function VM(e){return b`<div class="prosa">${Vd(Dd(e.conteudo))}</div>`}var HM={voltarPara(e){return e.args.length===0?`home`:`tutorial`},titulo(e){let[t]=e.args;if(t!==void 0)return RM(t)?.titulo},conteudo(e){LM();let[t]=e.args;if(t===void 0)return BM();let r=RM(t);return r===void 0?FM?b`
      <div class="vazio">
        <st-icon class="vazio__icone" name="help-circle"></st-icon>
        <p>${n.tutorial.semTopico}</p>
      </div>
    `:b`<div class="carregando"><st-spinner></st-spinner></div>`:VM(r)}};function UM(e){return b`
    <div class="aviso">
      <st-icon class="aviso__icone" style="color: ${e.cor}" name=${e.icone}></st-icon>
      <h2>${n.emBreve.titulo}</h2>
      <p>${n.emBreve.texto(e.rotulo)}</p>
      <p class="discreto">${n.emBreve.ajuda}</p>
      <st-button variant="primary" @click=${()=>S(`home`)}>
        ${n.emBreve.voltar}
      </st-button>
    </div>
  `}function WM(){return b`
    <div class="aviso">
      <st-icon class="aviso__icone" name="map-question"></st-icon>
      <h2>${n.erro.naoEncontrado}</h2>
      <p>${n.erro.naoEncontradoTexto}</p>
      <st-button variant="primary" @click=${()=>S(`home`)}>
        ${n.emBreve.voltar}
      </st-button>
    </div>
  `}var K={anotacoes:0,eventosHoje:[],contasVencendo:0,leituraPercentual:0,metasAtivas:0,metasConcluidas:0,focoMinutos:0,horasDoMes:0,receitasFavoritas:0},GM=!1,KM=!1,qM=!0,JM=!1;function YM(){JM||(JM=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`home`&&(qM=!0)}))}async function XM(e,t){try{return await e()}catch{return t}}async function ZM(){let e=c(),t=o(),[r,i,a,s,l,u,d,ee]=await Promise.all([XM(async()=>{let{FILTROS_INICIAIS:e,listarAnotacoes:t}=await w(async()=>{let{FILTROS_INICIAIS:e,listarAnotacoes:t}=await Promise.resolve().then(()=>uf);return{FILTROS_INICIAIS:e,listarAnotacoes:t}},void 0,import.meta.url);return(await t(e)).length},0),XM(async()=>{let t=await w(()=>Promise.resolve().then(()=>Bp),void 0,import.meta.url),{eventos:r,tipos:i}=await t.carregar();return t.eventosDoDia(r,e).map(e=>({titulo:e.titulo,quando:e.dia_inteiro===1?n.painel.diaInteiro:t.comoHora(e.hora_inicio_min),cor:t.corDoTipo(i,e.tipo_id)}))},[]),XM(async()=>{let{carregar:t,TIPO_DESPESA:n}=await w(async()=>{let{carregar:e,TIPO_DESPESA:t}=await Promise.resolve().then(()=>Cb);return{carregar:e,TIPO_DESPESA:t}},void 0,import.meta.url),{transacoes:r}=await t(),i=new Date(`${e}T23:59:59`).getTime();return r.filter(e=>e.tipo===n&&e.esta_pago!==1&&e.data_vencimento!==0&&e.data_vencimento<=i).length},0),XM(async()=>{let{lerLidos:e,percentualGeral:t}=await w(async()=>{let{lerLidos:e,percentualGeral:t}=await Promise.resolve().then(()=>MC);return{lerLidos:e,percentualGeral:t}},void 0,import.meta.url);return t(e())},0),XM(async()=>{let{listarMetas:e}=await w(async()=>{let{listarMetas:e}=await Promise.resolve().then(()=>Tw);return{listarMetas:e}},void 0,import.meta.url),t=await e();return{ativas:t.filter(e=>e.esta_concluida!==1).length,concluidas:t.filter(e=>e.esta_concluida===1).length}},{ativas:0,concluidas:0}),XM(async()=>{let{listarSessoes:e,totalDeMinutos:n}=await w(async()=>{let{listarSessoes:e,totalDeMinutos:t}=await Promise.resolve().then(()=>by);return{listarSessoes:e,totalDeMinutos:t}},void 0,import.meta.url);return n((await e()).filter(e=>o(e.concluido_em)===t))},0),XM(async()=>{let{carregar:e}=await w(async()=>{let{carregar:e}=await Promise.resolve().then(()=>pT);return{carregar:e}},void 0,import.meta.url),{contador:t}=await e();return Math.floor(t.minutos/60)},0),XM(async()=>{let{lerFavoritos:e}=await w(async()=>{let{lerFavoritos:e}=await Promise.resolve().then(()=>bD);return{lerFavoritos:e}},void 0,import.meta.url),{CHAVE_FAVORITOS:t}=await w(async()=>{let{CHAVE_FAVORITOS:e}=await Promise.resolve().then(()=>IA);return{CHAVE_FAVORITOS:e}},void 0,import.meta.url);return e(t).size},0)]);return{anotacoes:r,eventosHoje:i,contasVencendo:a,leituraPercentual:s,metasAtivas:l.ativas,metasConcluidas:l.concluidas,focoMinutos:u,horasDoMes:d,receitasFavoritas:ee}}function QM(){YM(),!(KM||!qM)&&(qM=!1,KM=!0,(async()=>{try{K=await ZM(),GM=!0}finally{KM=!1,C()}})())}function $M(e){if(!(!GM||!Ut(e))){if(e===`anotacoes`&&K.anotacoes>0)return n.painel.anotacoes(K.anotacoes);if(e===`calendario`&&K.eventosHoje.length>0)return n.painel.eventosHoje(K.eventosHoje.length);if(e===`financeiro`&&K.contasVencendo>0)return n.painel.contasVencendo(K.contasVencendo);if(e===`leitura`&&K.leituraPercentual>0)return n.painel.leitura(K.leituraPercentual);if(e===`metas`&&K.metasAtivas>0)return n.painel.metas(K.metasAtivas);if(e===`ministerio`&&K.horasDoMes>0)return n.painel.horas(K.horasDoMes);if(e===`estudo`&&K.focoMinutos>0)return n.painel.foco(K.focoMinutos);if(e===`receitas`&&K.receitasFavoritas>0)return n.painel.favoritas(K.receitasFavoritas)}}function eN(e){let t=e.map(e=>$M(e)).filter(e=>e!==void 0);return t.length===0?void 0:t.join(` · `)}function tN(e,t,n){return b`
    <div class="indicador">
      <st-icon class="indicador__icone" name=${n}></st-icon>
      <span class="indicador__valor">${e}</span>
      <span class="indicador__rotulo">${t}</span>
    </div>
  `}function nN(){return b`
    <section class="painel__hoje">
      <header class="painel__topo">
        <span class="painel__data">${new Date().toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}</span>
        ${K.contasVencendo===0?x:b`
              <st-badge variant="warning" pill>
                ${n.painel.contasVencendo(K.contasVencendo)}
              </st-badge>
            `}
      </header>

      ${K.eventosHoje.length===0?b`<p class="discreto">${n.painel.semEventos}</p>`:b`
            <ul class="agenda">
              ${K.eventosHoje.map(e=>b`
                  <li class="agenda__linha">
                    <span class="agenda__hora">${e.quando}</span>
                    <span class="agenda__titulo">${e.titulo}</span>
                  </li>
                `)}
            </ul>
          `}
    </section>
  `}function rN(){let e=[K.leituraPercentual>0?tN(`${K.leituraPercentual}%`,n.painel.rotuloLeitura,`book`):x,K.horasDoMes>0?tN(String(K.horasDoMes),n.painel.rotuloHoras,`users`):x,K.focoMinutos>0?tN(n.painel.emHoras(K.focoMinutos),n.painel.rotuloFoco,`hourglass`):x,K.metasAtivas+K.metasConcluidas>0?tN(`${K.metasConcluidas}/${K.metasAtivas+K.metasConcluidas}`,n.painel.rotuloMetas,`target`):x].filter(e=>e!==x);return e.length===0?x:b`<div class="indicadores">${e}</div>`}function iN(){return QM(),GM?b`${nN()} ${rN()}`:b`<p class="intro">${n.home.sub}</p>`}function aN(e){let t=Ut(e.id),r=$M(e.id);return b`
    <button class="tile" style="--cor: ${e.cor}" ?data-em-breve=${!t} @click=${()=>S(e.id)}>
      <st-icon class="tile__icone" name=${e.icone}></st-icon>
      <span class="tile__rotulo">${e.rotulo}</span>
      ${t?x:b`<span class="tile__selo">${n.emBreve.titulo}</span>`}
      ${r===void 0?x:b`<span class="tile__resumo">${r}</span>`}
    </button>
  `}function oN(e){let t=eN(e.modulos)??e.resumo;return b`
    <button class="tile" style="--cor: ${e.cor}" @click=${()=>S(`hub/${e.id}`)}>
      <st-icon class="tile__icone" name=${e.icone}></st-icon>
      <span class="tile__rotulo">${e.rotulo}</span>
      <span class="tile__resumo">${t}</span>
    </button>
  `}function sN(e){let t=Ut(e.id);return b`
    <button class="linha" style="--cor: ${e.cor}" @click=${()=>S(e.id)}>
      <st-icon class="linha__icone" name=${e.icone}></st-icon>
      <span class="linha__rotulo">${e.rotulo}</span>
      ${t?x:b`<st-badge variant="neutral" pill>${n.emBreve.titulo}</st-badge>`}
      <st-icon class="linha__seta" name="chevron-right"></st-icon>
    </button>
  `}function cN(e){return b`
    <button
      class="tile"
      style="--cor: #0dcaf0"
      ?disabled=${e.ocupado}
      @click=${()=>e.executar()}
    >
      <st-icon class="tile__icone" name="refresh"></st-icon>
      <span class="tile__rotulo">${n.home.sincronizar}</span>
      ${e.ocupado?b`<span class="tile__resumo">${n.home.sincronizando}</span>`:x}
    </button>
  `}function lN(){return b`
    <button
      class="tile"
      style="--cor: #20c997"
      @click=${async()=>{let{abrirConvite:e}=await w(async()=>{let{abrirConvite:e}=await import(`./convite-Bw1Sa0Vs.js`);return{abrirConvite:e}},__vite__mapDeps([72,73,74]),import.meta.url);await e()}}
    >
      <st-icon class="tile__icone" name="share"></st-icon>
      <span class="tile__rotulo">${n.convite.tile}</span>
      <span class="tile__resumo">${n.convite.tileResumo}</span>
    </button>
  `}function uN(e){return b`
    ${iN()}

    <div class="tiles">
      ${Rt.map(t=>{if(t.tipo===`acao`)return t.id===`sincronizar`?cN(e):t.id===`convite`?lN():x;if(t.tipo===`hub`){let e=Ht(t.id);return e===void 0?x:oN(e)}let n=Vt(t.id);return n===void 0?x:aN(n)})}
    </div>
  `}function dN(e){return e.map(e=>Vt(e)).filter(e=>e!==void 0).sort((e,t)=>e.rotulo.localeCompare(t.rotulo,`pt-BR`,{sensitivity:`base`}))}function fN(e){let t=Ht(e);return t===void 0?WM():b`
    <p class="intro">${t.resumo}</p>
    <div class="lista">${dN(t.modulos).map(e=>sN(e))}</div>
  `}Fi({$code:`pt`,$name:`Português (Brasil)`,$dir:`ltr`,actions:`Ações`,browseFiles:`Escolher arquivos`,cancel:`Cancelar`,carousel:`Carrossel`,clearEntry:`Limpar entrada`,clearFilters:`Limpar filtros`,close:`Fechar`,copied:`Copiado`,copy:`Copiar`,currentValue:`Valor atual`,deleteItem:`Excluir registro`,dropFiles:`Solte os arquivos aqui`,editItem:`Editar registro`,editorAlignCenter:`Centralizar`,editorAlignLeft:`Alinhar à esquerda`,editorAlignRight:`Alinhar à direita`,editorArea:`Área de edição`,editorBold:`Negrito`,editorBulletList:`Lista`,editorClearFormat:`Limpar formatação`,editorFootnote:`Nota de rodapé`,editorFootnotePlaceholder:`Texto da nota`,editorFootnoteText:`O texto aparece no rodapé, numerado na leitura.`,editorHeading:`Título`,editorHighlight:`Destaque`,editorHighlightBlue:`Azul`,editorHighlightCyan:`Ciano`,editorHighlightGreen:`Verde`,editorHighlightRed:`Vermelho`,editorHighlightYellow:`Amarelo`,editorHorizontalRule:`Linha horizontal`,editorImage:`Imagem`,editorInsert:`Inserir`,editorItalic:`Itálico`,editorLink:`Link`,editorLinkText:`Endereço do link.`,editorNumberedList:`Lista numerada`,editorParagraph:`Parágrafo`,editorQuote:`Citação`,editorRedo:`Refazer`,editorStrikethrough:`Tachado`,editorSubheading:`Subtítulo`,editorToolbar:`Barra de formatação`,editorUnderline:`Sublinhado`,editorUndo:`Desfazer`,error:`Erro`,financeActive:`Ativa`,financeAmount:`Valor`,financeAmountRequired:`Informe um valor maior que zero.`,financeBalance:`Saldo total`,financeByCategory:`Por categoria`,financeCategories:`Categorias`,financeCategory:`Categoria`,financeColor:`Cor`,financeCount:e=>e===1?`1 registro`:`${e} registros`,financeDaily:`Diária`,financeDayNum:e=>`dia ${e}`,financeDayOfMonth:`Dia do mês`,financeDayOfMonthHelp:`O dia 31 cai no último dia dos meses mais curtos.`,financeDayOfMonthRequired:`Informe um dia entre 1 e 31.`,financeDescription:`Descrição`,financeDescriptionRequired:`Informe a descrição.`,financeDueDate:`Vencimento`,financeEditCategory:`Editar categoria`,financeEditRecurrence:`Editar recorrência`,financeEditTransaction:`Editar lançamento`,financeExpenseOne:`Despesa`,financeExpenses:`Despesas`,financeGenerateAsPaid:`Lançar já pago`,financeHiddenValues:`Os valores estão ocultos.`,financeHide:`Ocultar valores`,financeIcon:`Ícone`,financeIncome:`Receitas`,financeIncomeOne:`Receita`,financeLimitHelp:`Zero significa sem limite.`,financeLimitOf:e=>`Limite ${e}`,financeLimits:`Limites do mês`,financeMarkPaid:`Marcar como pago`,financeMonth:`Mês`,financeMonthly:`Mensal`,financeMonthlyLimit:`Limite mensal`,financeName:`Nome`,financeNameRequired:`Informe o nome.`,financeNewCategory:`Nova categoria`,financeNewRecurrence:`Nova recorrência`,financeNewTransaction:`Novo lançamento`,financeNext:e=>`Pr\xF3xima: ${e}`,financeNoActivity:`Sem movimento no mês.`,financeNoCategories:`Nenhuma categoria ainda.`,financeNoCategory:`Sem categoria`,financeNoParty:`Sem vínculo`,financeNoRecurrences:`Nenhuma recorrência ainda.`,financeNoTransactions:`Nenhum lançamento ainda.`,financeNoTransactionsInMonth:`Nenhum lançamento neste mês.`,financeOfLimit:e=>`de ${e}`,financePaid:`Pago`,financeParty:`Cliente ou fornecedor`,financePause:`Pausar`,financePeriodicity:`Periodicidade`,financeRecurrences:`Recorrências`,financeResume:`Retomar`,financeShow:`Mostrar valores`,financeToPay:`A pagar`,financeToReceive:`A receber`,financeTransactions:`Lançamentos`,financeType:`Tipo`,financeUnmarkPaid:`Desmarcar pago`,financeWeekday:`Dia da semana`,financeWeekly:`Semanal`,financeYear:`Ano`,financeYearly:`Anual`,finish:`Concluir`,firstPage:`Primeira página`,goToSlide:(e,t)=>`V\xE1 para o slide ${e} de ${t}`,hidePassword:`Esconder a senha`,alpha:`Alfa`,hsv:`HSV`,hue:`Matiz`,lastPage:`Última página`,loading:`Carregando`,menu:`Menu`,newItem:`Novo registro`,next:`Avançar`,nextPage:`Próxima página`,nextSlide:`Próximo slide`,noResults:`Nenhum resultado encontrado`,numOptionsSelected:e=>e===0?`Nenhuma opção selecionada`:e===1?`1 opção selecionada`:`${e} op\xE7\xF5es selecionadas`,page:e=>`P\xE1gina ${e}`,pagination:`Paginação`,previous:`Voltar`,previousPage:`Página anterior`,previousSlide:`Slide anterior`,progress:`Progresso`,remove:`Remover`,resize:`Mudar o tamanho`,resultsPerPage:`Registros por página`,save:`Salvar`,search:`Pesquisar`,scrollToEnd:`Rolar até o final`,scrollToStart:`Rolar até o início`,selectAColorFromTheScreen:`Selecionar uma cor da tela`,selectAll:`Selecionar tudo`,selectRow:`Selecionar a linha`,showingResults:(e,t,n)=>`Mostrando ${e}\u2013${t} de ${n}`,showPassword:`Mostrar senha`,slideNum:e=>`Slide ${e}`,sortAscending:`Ordenar em ordem crescente`,sortClear:`Remover ordenação`,sortDescending:`Ordenar em ordem decrescente`,stepNum:(e,t)=>`Etapa ${e} de ${t}`,toggleColorFormat:`Trocar o formato de cor`});var pN=e=>{let{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()},mN=mr`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;

    /*
     * A cor da variante, e o véu que sai dela. O padrão é o da variante padrão do
     * componente (primary): as cinco classes .alert--* trocam só esta linha, e a
     * faixa, o ícone, a contagem regressiva e a tinta seguem juntos por construção.
     * Um token por peça seria uma chance a mais de eles discordarem.
     *
     * A receita do véu (força e alcance) vem da folha de tema, e é a mesma de
     * st-card e st-stat — o porquê está escrito lá.
     */
    --st-alert-accent-color: var(--st-color-primary-600);
    --st-alert-tint-extent: var(--st-tint-extent);
    --st-alert-tint-strength: var(--st-tint-strength);
  }

  .alert {
    --st-alert-tint-color: color-mix(
      in oklab,
      var(--st-alert-accent-color) var(--st-alert-tint-strength),
      transparent
    );

    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--st-panel-background-color);
    background-image: linear-gradient(
      to bottom,
      var(--st-alert-tint-color),
      transparent var(--st-alert-tint-extent)
    );
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-block-start-width: calc(var(--st-panel-border-width) * 3);
    border-block-start-color: var(--st-alert-accent-color);
    border-radius: var(--st-border-radius-medium);
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-small);
    font-weight: var(--st-font-weight-normal);
    line-height: 1.6;
    color: var(--st-color-neutral-700);
    margin: inherit;
    overflow: hidden;

    /*
     * NÃO declare container-type aqui. Como o :host é display: contents, é este .alert
     * que participa do layout do avô — e com contenção de tamanho inline ele para de
     * tirar a largura do próprio conteúdo. Em contexto de bloco ainda funcionava, mas
     * dentro de um flex o alerta encolhia para 2px e virava um risco na tela. Vale o
     * mesmo raciocínio do card.styles.ts, onde isto está explicado por extenso.
     */
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--st-font-size-large);
    padding-inline-start: var(--st-spacing-large);
    color: var(--st-alert-accent-color);
  }

  .alert--has-countdown {
    border-block-end: none;
  }

  .alert--primary {
    --st-alert-accent-color: var(--st-color-primary-600);
  }

  .alert--success {
    --st-alert-accent-color: var(--st-color-success-600);
  }

  .alert--neutral {
    --st-alert-accent-color: var(--st-color-neutral-600);
  }

  .alert--warning {
    --st-alert-accent-color: var(--st-color-warning-600);
  }

  .alert--danger {
    --st-alert-accent-color: var(--st-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--st-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--st-font-size-medium);
    margin-inline-end: var(--st-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 100%;
    height: calc(var(--st-panel-border-width) * 3);
    background-color: var(--st-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
    background-color: var(--st-alert-accent-color);
  }

  .alert__timer {
    display: none;
  }
`,hN,gN,_N,vN,yN,bN,xN,SN,CN,wN,TN,q,EN,DN,ON,kN,AN,jN,MN,NN,PN=class e extends (TN=ti,wN=[Vr(`[part~="base"]`)],CN=[Vr(`.alert__countdown-elapsed`)],SN=[D({type:Boolean,reflect:!0})],xN=[D({type:Boolean,reflect:!0})],bN=[D({reflect:!0})],yN=[D({type:Number})],vN=[D({type:String,reflect:!0})],_N=[zr()],gN=[Ur(`open`,{waitUntilFirstUpdate:!0})],hN=[Ur(`duration`)],TN){constructor(){super(...arguments),g(q,5,this),v(this,`autoHideTimeout`),v(this,`remainingTimeInterval`),v(this,`countdownAnimation`),v(this,`hasSlotController`,new to(this,`icon`,`suffix`)),v(this,`localize`,new Vi(this)),y(this,EN,g(q,8,this)),g(q,11,this),y(this,DN,g(q,12,this)),g(q,15,this),y(this,ON,g(q,16,this,!1)),g(q,19,this),y(this,kN,g(q,20,this,!1)),g(q,23,this),y(this,AN,g(q,24,this,`primary`)),g(q,27,this),y(this,jN,g(q,28,this,1/0)),g(q,31,this),y(this,MN,g(q,32,this)),g(q,35,this),y(this,NN,g(q,36,this,this.duration)),g(q,39,this)}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`st-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`st-show`),this.duration<1/0&&this.restartAutoHide(),await Sc(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=os(this,`alert.show`,{dir:this.localize.dir()});await bc(this.base,e,t),this.emit(`st-after-show`)}else{pN(this),this.emit(`st-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Sc(this.base);let{keyframes:e,options:t}=os(this,`alert.hide`,{dir:this.localize.dir()});await bc(this.base,e,t),this.base.hidden=!0,this.emit(`st-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,yc(this,`st-after-show`)}async hide(){if(this.open)return this.open=!1,yc(this,`st-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`st-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`st-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return T`
      <div
        part="base"
        class=${Hi({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?T`
              <st-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></st-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?T`
              <div
                class=${Hi({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};q=ge(TN),EN=new WeakMap,DN=new WeakMap,ON=new WeakMap,kN=new WeakMap,AN=new WeakMap,jN=new WeakMap,MN=new WeakMap,NN=new WeakMap,_(q,4,`base`,wN,PN,EN),_(q,4,`countdownElement`,CN,PN,DN),_(q,4,`open`,SN,PN,ON),_(q,4,`closable`,xN,PN,kN),_(q,4,`variant`,bN,PN,AN),_(q,4,`duration`,yN,PN,jN),_(q,4,`countdown`,vN,PN,MN),_(q,4,`remainingTime`,_N,PN,NN),_(q,1,`handleOpenChange`,gN,PN),_(q,1,`handleDurationChange`,hN,PN),be(q,PN),v(PN,`styles`,[Ir,mN]),v(PN,`dependencies`,{"st-icon-button":Ys}),v(PN,`currentToastStack`);var FN=PN;as(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),as(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),FN.define(`st-alert`);var IN=mr`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--st-font-weight-semibold);
    letter-spacing: var(--st-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--st-border-radius-small);
    border: solid 1px var(--st-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
  }

  .badge--success {
    background-color: var(--st-color-success-600);
    color: var(--st-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--st-color-neutral-600);
    color: var(--st-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--st-color-warning-600);
    color: var(--st-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--st-color-danger-600);
    color: var(--st-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--st-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --st-badge-pulse-color: var(--st-color-primary-600);
  }

  .badge--pulse.badge--success {
    --st-badge-pulse-color: var(--st-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --st-badge-pulse-color: var(--st-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --st-badge-pulse-color: var(--st-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --st-badge-pulse-color: var(--st-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--st-badge-pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,LN,RN,zN,BN,VN,HN,UN,WN,GN=class extends (BN=ti,zN=[D({reflect:!0})],RN=[D({type:Boolean,reflect:!0})],LN=[D({type:Boolean,reflect:!0})],BN){constructor(){super(...arguments),y(this,HN,g(VN,8,this,`primary`)),g(VN,11,this),y(this,UN,g(VN,12,this,!1)),g(VN,15,this),y(this,WN,g(VN,16,this,!1)),g(VN,19,this)}render(){return T`
      <span
        part="base"
        class=${Hi({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};VN=ge(BN),HN=new WeakMap,UN=new WeakMap,WN=new WeakMap,_(VN,4,`variant`,zN,GN,HN),_(VN,4,`pill`,RN,GN,UN),_(VN,4,`pulse`,LN,GN,WN),be(VN,GN),v(GN,`styles`,[Ir,IN]),GN.define(`st-badge`),I.define(`st-button`);var KN=mr`
  :host {
    --st-card-border-color: var(--st-color-neutral-200);
    --st-card-border-radius: var(--st-border-radius-medium);
    --st-card-border-width: 1px;
    --st-card-padding: var(--st-spacing-large);
    --st-card-image-size: 12rem;
    /*
     * A tinta da variante sai da folha de tema, onde a receita é única para cartão,
     * alerta e indicador. Ficam como botões do componente para quem precise de um
     * cartão mais ou menos tingido que os irmãos — o que não pode é cada componente
     * escolher a própria força e a família se desfazer.
     */
    --st-card-tint-extent: var(--st-tint-extent);
    --st-card-tint-strength: var(--st-tint-strength);

    /*
     * NÃO declare container-type aqui.
     *
     * Houve uma tentativa de pôr container-type: inline-size neste :host, para uma
     * consulta @container que reduzia o padding abaixo de 300px. Só que essa
     * propriedade aplica contenção de tamanho inline — o conteúdo deixa de contribuir
     * para a largura do próprio elemento —, e num elemento dimensionado pelo conteúdo,
     * como este, as duas coisas juntas resolvem para ZERO. O cartão sumia da tela: 0px
     * em bloco comum, 0px como item de flex, 0px até com max-width declarado, porque
     * max-width limita mas não define largura. Sobrava um risco vertical.
     *
     * Contenção inline só é segura em elemento de largura definida — e um cartão, que
     * tanto ocupa a linha inteira quanto fica lado a lado num flex, não é um deles. Se
     * o padding responsivo voltar a fazer falta, ele tem de vir de outro mecanismo (um
     * atributo size, por exemplo), não de container query no host.
     */
    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--st-panel-background-color);
    box-shadow: var(--st-shadow-x-small);
    border: solid var(--st-card-border-width) var(--st-card-border-color);
    border-radius: var(--st-card-border-radius);
  }

  /*
   * O cartão com variante: uma faixa de acento no topo e o corpo tingido pela mesma
   * cor, desbotando para o fundo do painel.
   *
   * É a mesma gramática de st-alert e st-stat — faixa de acento e véu da mesma cor —,
   * e isso é de propósito: um alerta, um cartão de destaque e um indicador lado a
   * lado têm de parecer da mesma família. A receita do véu (força e alcance) está em
   * themes/stratum.css, com o porquê escrito lá; aqui fica só a montagem.
   *
   * Cada variante declara só a cor de acento; a tinta sai dela. Um segundo token por
   * variante seria uma segunda chance de as duas discordarem.
   *
   * --st-card-accent-color fica sem valor no cartão comum: sem variante nenhuma
   * regra daqui se aplica, e a aparência é exatamente a de antes.
   */
  .card--variant {
    --st-card-tint-color: color-mix(
      in oklab,
      var(--st-card-accent-color) var(--st-card-tint-strength),
      transparent
    );

    border-block-start-width: calc(var(--st-card-border-width) * 3);
    border-block-start-color: var(--st-card-accent-color);
    background-image: linear-gradient(
      to bottom,
      var(--st-card-tint-color),
      transparent var(--st-card-tint-extent)
    );
  }

  .card--primary {
    --st-card-accent-color: var(--st-color-primary-600);
  }

  .card--success {
    --st-card-accent-color: var(--st-color-success-600);
  }

  .card--neutral {
    --st-card-accent-color: var(--st-color-neutral-600);
  }

  .card--warning {
    --st-card-accent-color: var(--st-color-warning-600);
  }

  .card--danger {
    --st-card-accent-color: var(--st-color-danger-600);
  }

  .card__image {
    display: flex;
    border-start-start-radius: var(--st-card-border-radius);
    border-start-end-radius: var(--st-card-border-radius);
    margin: calc(-1 * var(--st-card-border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-block-end: solid var(--st-card-border-width) var(--st-card-border-color);
    padding: calc(var(--st-card-padding) / 2) var(--st-card-padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-start-start-radius: var(--st-card-border-radius);
    border-start-end-radius: var(--st-card-border-radius);
  }

  .card__body {
    display: block;
    padding: var(--st-card-padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-block-start: solid var(--st-card-border-width) var(--st-card-border-color);
    padding: var(--st-card-padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }

  /*
   * O cartão horizontal é uma grade de duas colunas — imagem e conteúdo —, e não um
   * flex em linha: o conteúdo precisa empilhar cabeçalho, corpo e rodapé por dentro,
   * o que exige uma coluna própria em vez de virar mais um irmão da imagem.
   */
  .card--horizontal {
    display: grid;
    grid-template-columns: var(--st-card-image-size) minmax(0, 1fr);
    grid-template-rows: auto 1fr auto;
  }

  .card--horizontal .card__image {
    grid-row: 1 / -1;
    block-size: 100%;
    margin: calc(-1 * var(--st-card-border-width));
    margin-inline-end: 0;
    border-radius: 0;
    border-start-start-radius: var(--st-card-border-radius);
    border-end-start-radius: var(--st-card-border-radius);
  }

  .card--horizontal .card__image::slotted(img) {
    block-size: 100%;
    object-fit: cover;
  }

  /* Sem imagem, o conteúdo toma a largura toda em vez de deixar a coluna vazia. */
  .card--horizontal:not(.card--has-image) {
    grid-template-columns: minmax(0, 1fr);
  }

  .card--horizontal .card__header,
  .card--horizontal .card__body,
  .card--horizontal .card__footer {
    grid-column: -2;
  }
`,qN,JN,YN,XN,ZN,QN,$N=class extends (YN=ti,JN=[D({reflect:!0})],qN=[D({reflect:!0})],YN){constructor(){super(...arguments),v(this,`hasSlotController`,new to(this,`footer`,`header`,`image`)),y(this,ZN,g(XN,8,this,`vertical`)),g(XN,11,this),y(this,QN,g(XN,12,this,`default`)),g(XN,15,this)}render(){return T`
      <div
        part="base"
        class=${Hi({card:!0,"card--horizontal":this.orientation===`horizontal`,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`),"card--variant":this.variant!=="default",[`card--${this.variant}`]:this.variant!=="default"})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};XN=ge(YN),ZN=new WeakMap,QN=new WeakMap,_(XN,4,`orientation`,JN,$N,ZN),_(XN,4,`variant`,qN,$N,QN),be(XN,$N),v($N,`styles`,[Ir,KN]),$N.define(`st-card`),sc.define(`st-dialog`),qc.define(`st-dropdown`);var eP=mr`
  :host {
    display: block;

    /*
     * Entrou e saiu são verde e vermelho porque em dinheiro isso significa algo —
     * mas a cor nunca é a única pista: todo valor vem escrito, a ordem dentro do
     * grupo é sempre a mesma e o sinal (+/−) acompanha o número. Verde e vermelho
     * são justamente o par que um leitor com deuteranopia não separa.
     *
     * Por isso o padrão NÃO é success-600/danger-600, que era o que estava aqui:
     * esse par simétrico marca ΔE 5,9 em deuteranopia. Os tokens abaixo escolhem
     * os degraus que marcam 16,9 — ver a seção 4 de themes/stratum.css.
     */
    --st-financeiro-receita: var(--st-color-income);
    --st-financeiro-despesa: var(--st-color-expense);
  }

  .financeiro {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-medium);
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-medium);
    color: var(--st-color-neutral-700);
  }

  .discreto {
    margin: 0;
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-small);
  }

  .erro {
    margin: 0;
    color: var(--st-color-danger-600);
    font-size: var(--st-font-size-small);
  }

  .secao {
    margin: 0;
    font-size: var(--st-font-size-medium);
    font-weight: var(--st-font-weight-semibold);
  }

  .vazio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--st-spacing-x-small);
    padding: var(--st-spacing-2x-large) var(--st-spacing-medium);
    color: var(--st-color-text-muted);
    text-align: center;
  }

  .vazio__icone {
    font-size: 2.5rem;
  }

  /* ── Saldo ────────────────────────────────────────────────────────────── */

  .saldo {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-2x-small);
    padding: var(--st-spacing-medium);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-large);
  }

  .saldo__topo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--st-spacing-x-small);
  }

  .saldo__rotulo {
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-small);
  }

  .saldo__valor {
    font-size: var(--st-font-size-2x-large);
    font-weight: var(--st-font-weight-bold);
    font-variant-numeric: tabular-nums;
  }

  .saldo__valor[data-negativo] {
    color: var(--st-financeiro-despesa);
  }

  /* ── Período ──────────────────────────────────────────────────────────── */

  .periodo {
    display: grid;
    grid-template-columns: 1fr 8rem;
    gap: var(--st-spacing-x-small);
  }

  /* ── Placares ─────────────────────────────────────────────────────────── */

  /*
   * Quantos couberem por linha, e não um número fixo: os placares são quatro
   * (receitas, despesas, a receber, a pagar) e num painel estreito quatro
   * colunas espremeriam o valor até ele quebrar no meio do número.
   */
  .placares {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: var(--st-spacing-x-small);
  }

  .placar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--st-spacing-3x-small);
    padding-block: var(--st-spacing-x-small);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-large);
  }

  .placar__valor {
    font-size: var(--st-font-size-x-large);
    font-weight: var(--st-font-weight-bold);
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .placar__valor[data-tom='receita'] {
    color: var(--st-financeiro-receita);
  }

  .placar__valor[data-tom='despesa'] {
    color: var(--st-financeiro-despesa);
  }

  .placar__valor[data-tom='aviso'] {
    color: var(--st-color-warning-600);
  }

  .placar__rotulo {
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-x-small);
    text-align: center;
  }

  /* ── Gráfico ──────────────────────────────────────────────────────────── */

  /*
   * Barras horizontais em HTML: os nomes das categorias ficam deitados e
   * legíveis, as duas séries dividem a mesma escala (um eixo só) e não há
   * biblioteca de desenho no caminho — o que também é o que faz o gráfico
   * responder ao tema em vez de ao tema de outra biblioteca.
   */
  .grafico {
    margin: 0;
    padding: var(--st-spacing-medium);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-large);
  }

  .grafico__titulo {
    margin-block-end: var(--st-spacing-x-small);
    font-size: var(--st-font-size-small);
    font-weight: var(--st-font-weight-semibold);
  }

  .grafico__legenda {
    display: flex;
    flex-wrap: wrap;
    gap: var(--st-spacing-small);
    margin-block-end: var(--st-spacing-small);
  }

  .legenda__item {
    display: inline-flex;
    align-items: center;
    gap: var(--st-spacing-3x-small);
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-x-small);
  }

  .legenda__marca {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: var(--st-border-radius-small);
  }

  .legenda__item[data-tom='receita'] .legenda__marca {
    background-color: var(--st-financeiro-receita);
  }

  .legenda__item[data-tom='despesa'] .legenda__marca {
    background-color: var(--st-financeiro-despesa);
  }

  .grafico__linhas {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-small);
  }

  .grafico__grupo {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .grafico__categoria {
    font-size: var(--st-font-size-small);
  }

  .barra {
    display: flex;
    align-items: center;
    gap: var(--st-spacing-x-small);
  }

  .barra__trilho {
    flex: 1;
    min-width: 0;
    height: 0.6rem;
    border-radius: var(--st-border-radius-pill);
    background-color: var(--st-color-neutral-100);
  }

  .barra__preenchido {
    height: 100%;
    /* Só a ponta é arredondada: a base fica ancorada no zero do eixo. */
    border-start-end-radius: 4px;
    border-end-end-radius: 4px;
    transition: width var(--st-transition-medium) ease;
  }

  .barra[data-tom='receita'] .barra__preenchido {
    background-color: var(--st-financeiro-receita);
  }

  .barra[data-tom='despesa'] .barra__preenchido {
    background-color: var(--st-financeiro-despesa);
  }

  /* O valor vai em cor de texto, nunca na cor da série. */
  .barra__valor {
    flex-shrink: 0;
    min-width: 5.5rem;
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-x-small);
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  /* ── Limites por categoria ────────────────────────────────────────────── */

  .limites {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-x-small);
  }

  .limite {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-3x-small);
    padding: var(--st-spacing-x-small) var(--st-spacing-small);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-large);
  }

  .limite[data-estourou] {
    border-color: var(--st-financeiro-despesa);
  }

  .limite__topo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--st-spacing-x-small);
  }

  .limite__nome {
    display: inline-flex;
    align-items: center;
    gap: var(--st-spacing-3x-small);
    min-width: 0;
  }

  .limite__valores {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  .limite__valores small {
    color: var(--st-color-text-muted);
  }

  .limite__barra {
    display: block;
    height: 0.4rem;
    border-radius: var(--st-border-radius-pill);
    background-color: var(--st-color-neutral-100);
    overflow: hidden;
  }

  .limite__preenchido {
    display: block;
    height: 100%;
    border-radius: var(--st-border-radius-pill);
    transition: width var(--st-transition-medium) ease;
  }

  /* ── Atalhos do painel ────────────────────────────────────────────────── */

  .atalhos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--st-spacing-x-small);
  }

  .atalho {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-3x-small);
    padding: var(--st-spacing-medium);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-large);
    background: none;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .atalho:hover {
    border-color: var(--st-color-primary-600);
  }

  .atalho__icone {
    font-size: 1.5rem;
    color: var(--st-color-primary-600);
  }

  .atalho__rotulo {
    font-weight: var(--st-font-weight-semibold);
  }

  .atalho__resumo {
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-x-small);
  }

  /* ── Registros ────────────────────────────────────────────────────────── */

  .registros {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-x-small);
  }

  .registro {
    display: flex;
    align-items: flex-start;
    gap: var(--st-spacing-small);
    padding: var(--st-spacing-x-small) var(--st-spacing-small);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-inline-start: solid 3px var(--st-financeiro-status-color, transparent);
    border-radius: var(--st-border-radius-large);
  }

  .registro[data-status='ok'] {
    --st-financeiro-status-color: var(--st-color-success-600);
  }

  .registro[data-status='pendente'] {
    --st-financeiro-status-color: var(--st-color-warning-600);
  }

  .registro__avatar {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--st-border-radius-circle);
    background-color: color-mix(in oklab, var(--st-color-primary-600) 12%, transparent);
    color: var(--st-color-primary-700);
    font-size: var(--st-font-size-small);
  }

  /*
   * O corpo é o alvo da ação do dia a dia — abrir o lançamento para editar. As
   * ações laterais são botões próprios, fora dele.
   */
  .registro__alvo {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--st-spacing-3x-small);
    min-width: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .registro__topo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--st-spacing-2x-small);
  }

  .registro__titulo {
    font-weight: var(--st-font-weight-semibold);
  }

  .registro__valor {
    font-variant-numeric: tabular-nums;
  }

  .registro__valor[data-tom='receita'] {
    color: var(--st-financeiro-receita);
  }

  .registro__valor[data-tom='despesa'] {
    color: var(--st-financeiro-despesa);
  }

  .registro__resumo {
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-small);
  }

  .registro__acoes {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: var(--st-spacing-3x-small);
  }

  /* ── Categorias ───────────────────────────────────────────────────────── */

  .categorias {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-2x-small);
  }

  .categoria {
    display: flex;
    align-items: center;
    gap: var(--st-spacing-x-small);
    padding: var(--st-spacing-2x-small) var(--st-spacing-x-small);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-medium);
  }

  .categoria__cor {
    display: inline-block;
    flex-shrink: 0;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: var(--st-border-radius-circle);
  }

  .categoria__nome {
    flex: 1;
    min-width: 0;
  }

  /* ── Formulário ───────────────────────────────────────────────────────── */

  .formulario {
    display: flex;
    flex-direction: column;
    gap: var(--st-spacing-small);
    padding: var(--st-spacing-medium);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-large);
  }

  .formulario__titulo {
    margin-block: 0;
    font-size: var(--st-font-size-medium);
  }

  .formulario__rotulo {
    display: block;
    margin-block-end: var(--st-spacing-3x-small);
    color: var(--st-color-text-muted);
    font-size: var(--st-font-size-small);
  }

  .formulario__acoes {
    display: flex;
    gap: var(--st-spacing-x-small);
  }

  .tipos {
    display: flex;
    flex-wrap: wrap;
    gap: var(--st-spacing-2x-small);
  }

  .tipo {
    display: inline-flex;
    align-items: center;
    gap: var(--st-spacing-3x-small);
    padding: var(--st-spacing-3x-small) var(--st-spacing-x-small);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-pill);
    background: none;
    color: inherit;
    font: inherit;
    font-size: var(--st-font-size-small);
    cursor: pointer;
  }

  .tipo[aria-pressed='true'] {
    border-color: var(--st-color-primary-600);
    background-color: color-mix(in oklab, var(--st-color-primary-600) 12%, transparent);
  }

  .icones {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));
    gap: var(--st-spacing-3x-small);
  }

  .icone {
    aspect-ratio: 1;
    padding: 0;
    border: solid var(--st-panel-border-width) transparent;
    border-radius: var(--st-border-radius-medium);
    background: none;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
  }

  .icone:hover {
    background-color: var(--st-color-neutral-100);
  }

  .icone[aria-pressed='true'] {
    border-color: var(--st-color-primary-600);
    background-color: color-mix(in oklab, var(--st-color-primary-600) 12%, transparent);
  }
`,tP=mr`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --st-switch-height: var(--st-toggle-size-small);
    --st-switch-thumb-size: calc(var(--st-toggle-size-small) + 4px);
    --st-switch-width: calc(var(--st-switch-height) * 2);

    font-size: var(--st-input-font-size-small);
  }

  :host([size='medium']) {
    --st-switch-height: var(--st-toggle-size-medium);
    --st-switch-thumb-size: calc(var(--st-toggle-size-medium) + 4px);
    --st-switch-width: calc(var(--st-switch-height) * 2);

    font-size: var(--st-input-font-size-medium);
  }

  :host([size='large']) {
    --st-switch-height: var(--st-toggle-size-large);
    --st-switch-thumb-size: calc(var(--st-toggle-size-large) + 4px);
    --st-switch-width: calc(var(--st-switch-height) * 2);

    font-size: var(--st-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--st-input-font-family);
    font-size: inherit;
    font-weight: var(--st-input-font-weight);
    color: var(--st-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--st-switch-width);
    height: var(--st-switch-height);
    background-color: var(--st-color-neutral-400);
    border: solid var(--st-input-border-width) var(--st-color-neutral-400);
    border-radius: var(--st-switch-height);
    transition:
      var(--st-transition-fast) border-color,
      var(--st-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--st-switch-thumb-size);
    height: var(--st-switch-thumb-size);
    background-color: var(--st-color-neutral-0);
    border-radius: 50%;
    border: solid var(--st-input-border-width) var(--st-color-neutral-400);
    translate: calc((var(--st-switch-width) - var(--st-switch-height)) / -2);
    transition:
      var(--st-transition-fast) translate ease,
      var(--st-transition-fast) background-color,
      var(--st-transition-fast) border-color,
      var(--st-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--st-color-neutral-400);
    border-color: var(--st-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--st-color-neutral-400);
    border-color: var(--st-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-color-primary-600);
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--st-color-primary-600);
    border-color: var(--st-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-color-primary-600);
    translate: calc((var(--st-switch-width) - var(--st-switch-height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--st-color-primary-600);
    border-color: var(--st-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--st-color-primary-600);
    border-color: var(--st-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--st-color-neutral-0);
    border-color: var(--st-color-primary-600);
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--st-switch-height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--st-input-required-content);
    color: var(--st-input-required-content-color);
    margin-inline-start: var(--st-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,nP,rP,iP,aP,oP,sP,cP,lP,uP,dP,fP,pP,mP,hP,gP,J,_P,vP,yP,bP,xP,SP,CP,wP,TP,EP,DP,OP=class extends (gP=ti,hP=[Vr(`input[type="checkbox"]`)],mP=[zr()],pP=[D()],fP=[D()],dP=[D()],uP=[D({reflect:!0})],lP=[D({type:Boolean,reflect:!0})],cP=[D({type:Boolean,reflect:!0})],sP=[Kr(`checked`)],oP=[D({reflect:!0})],aP=[D({type:Boolean,reflect:!0})],iP=[D({attribute:`help-text`})],rP=[Ur(`checked`,{waitUntilFirstUpdate:!0})],nP=[Ur(`disabled`,{waitUntilFirstUpdate:!0})],gP){constructor(){super(...arguments),g(J,5,this),v(this,`formControlController`,new ys(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=!!t})),v(this,`hasSlotController`,new to(this,`help-text`)),y(this,_P,g(J,8,this)),g(J,11,this),y(this,vP,g(J,12,this,!1)),g(J,15,this),y(this,yP,g(J,16,this,``)),g(J,19,this),y(this,bP,g(J,20,this,``)),g(J,23,this),y(this,xP,g(J,24,this)),g(J,27,this),y(this,SP,g(J,28,this,`medium`)),g(J,31,this),y(this,CP,g(J,32,this,!1)),g(J,35,this),y(this,wP,g(J,36,this,!1)),g(J,39,this),v(this,`defaultChecked`,g(J,52,this,!1)),g(J,55,this),y(this,TP,g(J,40,this,``)),g(J,43,this),y(this,EP,g(J,44,this,!1)),g(J,47,this),y(this,DP,g(J,48,this,``)),g(J,51,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`st-blur`)}handleInput(){this.emit(`st-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit(`st-change`)}handleFocus(){this.hasFocus=!0,this.emit(`st-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`st-change`),this.emit(`st-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`st-change`),this.emit(`st-input`))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return T`
      <div
        class=${Hi({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Hi({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${A(this.value)}
            .checked=${Yc(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J=ge(gP),_P=new WeakMap,vP=new WeakMap,yP=new WeakMap,bP=new WeakMap,xP=new WeakMap,SP=new WeakMap,CP=new WeakMap,wP=new WeakMap,TP=new WeakMap,EP=new WeakMap,DP=new WeakMap,_(J,4,`input`,hP,OP,_P),_(J,4,`hasFocus`,mP,OP,vP),_(J,4,`title`,pP,OP,yP),_(J,4,`name`,fP,OP,bP),_(J,4,`value`,dP,OP,xP),_(J,4,`size`,uP,OP,SP),_(J,4,`disabled`,lP,OP,CP),_(J,4,`checked`,cP,OP,wP),_(J,4,`form`,oP,OP,TP),_(J,4,`required`,aP,OP,EP),_(J,4,`helpText`,iP,OP,DP),_(J,1,`handleCheckedChange`,rP,OP),_(J,1,`handleDisabledChange`,nP,OP),_(J,5,`defaultChecked`,sP,OP),be(J,OP),v(OP,`styles`,[Ir,Qc,tP]);var kP=mr`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--st-input-font-family);
    font-weight: var(--st-input-font-weight);
    letter-spacing: var(--st-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--st-transition-fast) color,
      var(--st-transition-fast) border,
      var(--st-transition-fast) box-shadow,
      var(--st-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--st-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--st-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--st-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--st-spacing-2x-small);
  }

  .select__tags::slotted(st-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(st-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--st-input-background-color);
    border: solid var(--st-input-border-width) var(--st-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--st-input-background-color-disabled);
    border-color: var(--st-input-border-color-disabled);
    color: var(--st-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--st-input-background-color-focus);
    border-color: var(--st-input-border-color-focus);
    box-shadow: 0 0 0 var(--st-focus-ring-width) var(--st-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--st-input-filled-background-color);
    color: var(--st-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--st-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--st-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--st-input-filled-background-color-focus);
    outline: var(--st-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--st-input-border-radius-small);
    font-size: var(--st-input-font-size-small);
    min-height: var(--st-input-height-small);
    padding-block: 0;
    padding-inline: var(--st-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--st-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--st-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--st-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--st-input-border-radius-medium);
    font-size: var(--st-input-font-size-medium);
    min-height: var(--st-input-height-medium);
    padding-block: 0;
    padding-inline: var(--st-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--st-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--st-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--st-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--st-input-border-radius-large);
    font-size: var(--st-input-font-size-large);
    min-height: var(--st-input-height-large);
    padding-block: 0;
    padding-inline: var(--st-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--st-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--st-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--st-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--st-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--st-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--st-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--st-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--st-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--st-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--st-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--st-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--st-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--st-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-medium);
    font-weight: var(--st-font-weight-normal);
    box-shadow: var(--st-shadow-large);
    background: var(--st-panel-background-color);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-medium);
    padding-block: var(--st-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--st-popup-auto-size-available-width);
    max-height: var(--st-popup-auto-size-available-height);
  }

  .select__listbox ::slotted(st-divider) {
    --st-divider-spacing: var(--st-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--st-font-size-small);
    font-weight: var(--st-font-weight-semibold);
    color: var(--st-color-text-muted);
    padding-block: var(--st-spacing-2x-small);
    padding-inline: var(--st-spacing-x-large);
  }
`,AP=class extends hi{constructor(e){if(super(e),this.it=E,e.type!==pi.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===E||e==null)return this._t=void 0,this.it=e;if(e===Gn)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};AP.directiveName=`unsafeHTML`,AP.resultType=1;var jP=mi(AP);function MP(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function NP(e,t,n=`vertical`,r=`smooth`){let i=MP(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var PP=mr`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--st-color-primary-50);
    border-color: var(--st-color-primary-200);
    color: var(--st-color-primary-800);
  }

  .tag--primary:active > st-icon-button {
    color: var(--st-color-primary-600);
  }

  .tag--success {
    background-color: var(--st-color-success-50);
    border-color: var(--st-color-success-200);
    color: var(--st-color-success-800);
  }

  .tag--success:active > st-icon-button {
    color: var(--st-color-success-600);
  }

  .tag--neutral {
    background-color: var(--st-color-neutral-50);
    border-color: var(--st-color-neutral-200);
    color: var(--st-color-neutral-800);
  }

  .tag--neutral:active > st-icon-button {
    color: var(--st-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--st-color-warning-50);
    border-color: var(--st-color-warning-200);
    color: var(--st-color-warning-800);
  }

  .tag--warning:active > st-icon-button {
    color: var(--st-color-warning-600);
  }

  .tag--danger {
    background-color: var(--st-color-danger-50);
    border-color: var(--st-color-danger-200);
    color: var(--st-color-danger-800);
  }

  .tag--danger:active > st-icon-button {
    color: var(--st-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--st-button-font-size-small);
    height: calc(var(--st-input-height-small) * 0.8);
    line-height: calc(var(--st-input-height-small) - var(--st-input-border-width) * 2);
    border-radius: var(--st-input-border-radius-small);
    padding: 0 var(--st-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--st-button-font-size-medium);
    height: calc(var(--st-input-height-medium) * 0.8);
    line-height: calc(var(--st-input-height-medium) - var(--st-input-border-width) * 2);
    border-radius: var(--st-input-border-radius-medium);
    padding: 0 var(--st-spacing-small);
  }

  .tag--large {
    font-size: var(--st-button-font-size-large);
    height: calc(var(--st-input-height-large) * 0.8);
    line-height: calc(var(--st-input-height-large) - var(--st-input-border-width) * 2);
    border-radius: var(--st-input-border-radius-large);
    padding: 0 var(--st-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--st-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--st-border-radius-pill);
  }
`,FP,IP,LP,RP,zP,BP,VP,HP,UP,WP,GP=class extends (zP=ti,RP=[D({reflect:!0})],LP=[D({reflect:!0})],IP=[D({type:Boolean,reflect:!0})],FP=[D({type:Boolean})],zP){constructor(){super(...arguments),v(this,`localize`,new Vi(this)),y(this,VP,g(BP,8,this,`neutral`)),g(BP,11,this),y(this,HP,g(BP,12,this,`medium`)),g(BP,15,this),y(this,UP,g(BP,16,this,!1)),g(BP,19,this),y(this,WP,g(BP,20,this,!1)),g(BP,23,this)}handleRemoveClick(){this.emit(`st-remove`)}render(){return T`
      <span
        part="base"
        class=${Hi({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?T`
              <st-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></st-icon-button>
            `:``}
      </span>
    `}};BP=ge(zP),VP=new WeakMap,HP=new WeakMap,UP=new WeakMap,WP=new WeakMap,_(BP,4,`variant`,RP,GP,VP),_(BP,4,`size`,LP,GP,HP),_(BP,4,`pill`,IP,GP,UP),_(BP,4,`removable`,FP,GP,WP),be(BP,GP),v(GP,`styles`,[Ir,PP]),v(GP,`dependencies`,{"st-icon-button":Ys});var KP,qP,JP,YP,XP,ZP,QP,$P,eF,tF,nF,rF,iF,aF,oF,sF,cF,lF,uF,dF,fF,pF,mF,hF,gF,_F,vF,yF,bF,xF,SF,CF,Y,wF,TF,EF,DF,OF,kF,AF,jF,MF,NF,PF,FF,IF,LF,RF,zF,BF,VF,HF,UF,WF,GF,KF,qF,JF,YF,XF,X=class extends (CF=ti,SF=[Vr(`.select`)],xF=[Vr(`.select__combobox`)],bF=[Vr(`.select__display-input`)],yF=[Vr(`.select__value-input`)],vF=[Vr(`.select__listbox`)],_F=[zr()],gF=[zr()],hF=[zr()],mF=[zr()],pF=[zr()],fF=[D()],dF=[zr()],uF=[D({attribute:`value`})],lF=[D({reflect:!0})],cF=[D()],sF=[D({type:Boolean,reflect:!0})],oF=[D({attribute:`max-options-visible`,type:Number})],aF=[D({type:Boolean,reflect:!0})],iF=[D({type:Boolean})],rF=[D({type:Boolean,reflect:!0})],nF=[D({type:Boolean,reflect:!0})],tF=[D({type:Boolean,reflect:!0})],eF=[D()],$P=[D({reflect:!0})],QP=[D({attribute:`help-text`})],ZP=[D({reflect:!0,converter:ps})],XP=[D({type:Boolean,reflect:!0})],YP=[D()],JP=[Ur(`disabled`,{waitUntilFirstUpdate:!0})],qP=[Ur([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],KP=[Ur(`open`,{waitUntilFirstUpdate:!0})],CF){constructor(){super(...arguments),g(Y,5,this),v(this,`validade`,new Zc(this,{interacaoEm:[`st-blur`,`st-input`]})),v(this,`hasSlotController`,new to(this,`help-text`,`label`)),v(this,`localize`,new Vi(this)),v(this,`typeToSelectString`,``),v(this,`typeToSelectTimeout`),v(this,`closeWatcher`),y(this,wF,g(Y,8,this)),g(Y,11,this),y(this,TF,g(Y,12,this)),g(Y,15,this),y(this,EF,g(Y,16,this)),g(Y,19,this),y(this,DF,g(Y,20,this)),g(Y,23,this),y(this,OF,g(Y,24,this)),g(Y,27,this),y(this,kF,g(Y,28,this,!1)),g(Y,31,this),y(this,AF,g(Y,32,this,``)),g(Y,35,this),y(this,jF,g(Y,36,this)),g(Y,39,this),y(this,MF,g(Y,40,this,[])),g(Y,43,this),y(this,NF,g(Y,44,this,!1)),g(Y,47,this),y(this,PF,g(Y,48,this,``)),g(Y,51,this),v(this,`_value`,``),y(this,FF,g(Y,52,this,``)),g(Y,55,this),y(this,IF,g(Y,56,this,`medium`)),g(Y,59,this),y(this,LF,g(Y,60,this,``)),g(Y,63,this),y(this,RF,g(Y,64,this,!1)),g(Y,67,this),y(this,zF,g(Y,68,this,3)),g(Y,71,this),y(this,BF,g(Y,72,this,!1)),g(Y,75,this),y(this,VF,g(Y,76,this,!1)),g(Y,79,this),y(this,HF,g(Y,80,this,!1)),g(Y,83,this),y(this,UF,g(Y,84,this,!1)),g(Y,87,this),y(this,WF,g(Y,88,this,!1)),g(Y,91,this),y(this,GF,g(Y,92,this,``)),g(Y,95,this),y(this,KF,g(Y,96,this,`bottom`)),g(Y,99,this),y(this,qF,g(Y,100,this,``)),g(Y,103,this),y(this,JF,g(Y,104,this,``)),g(Y,107,this),y(this,YF,g(Y,108,this,!1)),g(Y,111,this),y(this,XF,g(Y,112,this,e=>T`
      <st-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @st-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </st-tag>
    `)),g(Y,115,this),v(this,`handleDocumentFocusIn`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}),v(this,`handleDocumentKeyDown`,e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`st-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`st-input`),this.emit(`st-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}}),v(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()})}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`st-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`st-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`st-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`st-clear`),this.emit(`st-input`),this.emit(`st-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`st-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`st-input`),this.emit(`st-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`st-option`)||customElements.whenDefined(`st-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>r.push(e.value)),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`st-input`),this.emit(`st-change`)}))}getAllOptions(){return[...this.querySelectorAll(`st-option`)]}getFirstOption(){return this.querySelector(`st-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected);let t=this.valueHasChanged;if(this.multiple){let e=this.selectedOptions.map(e=>e.value);this.value=e,this.displayLabel=this.placeholder&&this.value.length===0?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);let t=new FormData;e.forEach(e=>t.append(this.name,e)),this._internals.setFormValue(t)}else{let e=this.selectedOptions[0],t=e?.value??``;this.value=t,this.displayLabel=e?.getTextLabel?.()??``,this._internals.setFormValue(t)}this.valueHasChanged=t,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return T`<div @st-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?jP(n):n}
        </div>`}return t===this.maxOptionsVisible?T`<st-tag size=${this.size}>+${this.selectedOptions.length-t}</st-tag>`:T``})}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`st-show`),this.addOpenListeners(),await Sc(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=os(this,`select.show`,{dir:this.localize.dir()});await bc(this.popup.popup,e,t),this.currentOption&&NP(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`st-after-show`)}else{this.emit(`st-hide`),this.removeOpenListeners(),await Sc(this);let{keyframes:e,options:t}=os(this,`select.hide`,{dir:this.localize.dir()});await bc(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`st-after-hide`)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,yc(this,`st-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,yc(this,`st-after-hide`)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.valueInput.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.valueInput.validity,Xc(this.valueInput),this.valueInput)}emitInvalidEvent(e){let t=new CustomEvent(`st-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return T`
      <div
        part="form-control"
        class=${Hi({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <st-popup
            class=${Hi({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?T`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?T`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <st-icon name="circle-x" library="system"></st-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <st-icon library="system" name="chevron-down"></st-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </st-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y=ge(CF),wF=new WeakMap,TF=new WeakMap,EF=new WeakMap,DF=new WeakMap,OF=new WeakMap,kF=new WeakMap,AF=new WeakMap,jF=new WeakMap,MF=new WeakMap,NF=new WeakMap,PF=new WeakMap,FF=new WeakMap,IF=new WeakMap,LF=new WeakMap,RF=new WeakMap,zF=new WeakMap,BF=new WeakMap,VF=new WeakMap,HF=new WeakMap,UF=new WeakMap,WF=new WeakMap,GF=new WeakMap,KF=new WeakMap,qF=new WeakMap,JF=new WeakMap,YF=new WeakMap,XF=new WeakMap,_(Y,4,`popup`,SF,X,wF),_(Y,4,`combobox`,xF,X,TF),_(Y,4,`displayInput`,bF,X,EF),_(Y,4,`valueInput`,yF,X,DF),_(Y,4,`listbox`,vF,X,OF),_(Y,4,`hasFocus`,_F,X,kF),_(Y,4,`displayLabel`,gF,X,AF),_(Y,4,`currentOption`,hF,X,jF),_(Y,4,`selectedOptions`,mF,X,MF),_(Y,4,`valueHasChanged`,pF,X,NF),_(Y,4,`name`,fF,X,PF),_(Y,3,`value`,dF,X),_(Y,4,`defaultValue`,uF,X,FF),_(Y,4,`size`,lF,X,IF),_(Y,4,`placeholder`,cF,X,LF),_(Y,4,`multiple`,sF,X,RF),_(Y,4,`maxOptionsVisible`,oF,X,zF),_(Y,4,`disabled`,aF,X,BF),_(Y,4,`clearable`,iF,X,VF),_(Y,4,`open`,rF,X,HF),_(Y,4,`filled`,nF,X,UF),_(Y,4,`pill`,tF,X,WF),_(Y,4,`label`,eF,X,GF),_(Y,4,`placement`,$P,X,KF),_(Y,4,`helpText`,QP,X,qF),_(Y,4,`form`,ZP,X,JF),_(Y,4,`required`,XP,X,YF),_(Y,4,`getTag`,YP,X,XF),_(Y,1,`handleDisabledChange`,JP,X),_(Y,1,`handleValueChange`,qP,X),_(Y,1,`handleOpenChange`,KP,X),be(Y,X),v(X,`styles`,[Ir,Qc,kP]),v(X,`dependencies`,{"st-icon":Mo,"st-popup":k,"st-tag":GP}),v(X,`formAssociated`,!0),as(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),as(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}});var ZF=mr`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-medium);
    font-weight: var(--st-font-weight-normal);
    line-height: var(--st-line-height-normal);
    letter-spacing: var(--st-letter-spacing-normal);
    color: var(--st-color-neutral-700);
    padding: var(--st-spacing-x-small) var(--st-spacing-medium) var(--st-spacing-x-small) var(--st-spacing-x-small);
    transition: var(--st-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--st-color-neutral-100);
    color: var(--st-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--st-color-primary-600);
    color: var(--st-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--st-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--st-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--st-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--st-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,QF,$F,eI,tI,nI,rI,iI,aI,oI,sI,cI,lI,uI,dI,fI,pI,mI,hI=class extends (sI=ti,oI=[Vr(`.option__label`)],aI=[zr()],iI=[zr()],rI=[zr()],nI=[D({reflect:!0})],tI=[D({type:Boolean,reflect:!0})],eI=[Ur(`disabled`)],$F=[Ur(`selected`)],QF=[Ur(`value`)],sI){constructor(){super(...arguments),g(cI,5,this),v(this,`localize`,new Vi(this)),v(this,`isInitialized`,!1),y(this,lI,g(cI,8,this)),g(cI,11,this),y(this,uI,g(cI,12,this,!1)),g(cI,15,this),y(this,dI,g(cI,16,this,!1)),g(cI,19,this),y(this,fI,g(cI,20,this,!1)),g(cI,23,this),y(this,pI,g(cI,24,this,``)),g(cI,27,this),y(this,mI,g(cI,28,this,!1)),g(cI,31,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`st-select`).then(()=>{let e=this.closest(`st-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replaceAll(` `,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return T`
      <div
        part="base"
        class=${Hi({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <st-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></st-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};cI=ge(sI),lI=new WeakMap,uI=new WeakMap,dI=new WeakMap,fI=new WeakMap,pI=new WeakMap,mI=new WeakMap,_(cI,4,`defaultSlot`,oI,hI,lI),_(cI,4,`current`,aI,hI,uI),_(cI,4,`selected`,iI,hI,dI),_(cI,4,`hasHover`,rI,hI,fI),_(cI,4,`value`,nI,hI,pI),_(cI,4,`disabled`,tI,hI,mI),_(cI,1,`handleDisabledChange`,eI,hI),_(cI,1,`handleSelectedChange`,$F,hI),_(cI,1,`handleValueChange`,QF,hI),be(cI,hI),v(hI,`styles`,[Ir,ZF]),v(hI,`dependencies`,{"st-icon":Mo});var gI=`🛒.🍕.☕.🏠.💡.💧.🔌.🚌.⛽.🚗.💊.🏥.🩺.👕.🎁.🎮.🎵.📚.🎓.🏖️.💰.💳.🧾.🐾.📱.💼.💇.🧴.🧺.🏋️.🛡️.🧸`.split(`.`),_I=[[`diaria`,`financeDaily`],[`semanal`,`financeWeekly`],[`mensal`,`financeMonthly`],[`anual`,`financeYearly`]],vI=`••••`,yI={descricao:!1,valor:!1,diaMes:!1};function bI(e){let t=new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function xI(e){return bI(e).slice(0,7)}function SI(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t??1970,(n??1)-1,r??1).getTime()}var CI,wI,TI,EI,DI,OI,kI,AI,jI,MI,NI,Z,PI,FI,II,LI,RI,zI,BI,VI,HI,UI=class e extends (NI=ti,MI=[D({reflect:!0})],jI=[D({type:Array})],AI=[D({type:Array})],kI=[D({type:Array})],OI=[D({type:Array})],DI=[D({reflect:!0})],EI=[D({type:Boolean,reflect:!0})],TI=[D()],wI=[zr()],CI=[Ur(`vista`,{waitUntilFirstUpdate:!0})],NI){constructor(){super(...arguments),g(Z,5,this),v(this,`localize`,new Vi(this)),y(this,PI,g(Z,8,this,`painel`)),g(Z,11,this),y(this,FI,g(Z,12,this,[])),g(Z,15,this),y(this,II,g(Z,16,this,[])),g(Z,19,this),y(this,LI,g(Z,20,this,[])),g(Z,23,this),y(this,RI,g(Z,24,this,[])),g(Z,27,this),y(this,zI,g(Z,28,this,``)),g(Z,31,this),y(this,BI,g(Z,32,this,!1)),g(Z,35,this),y(this,VI,g(Z,36,this,`BRL`)),g(Z,39,this),y(this,HI,g(Z,40,this,null)),g(Z,43,this)}get aberto(){return this.formulario!==null}novo(){this.vista===`transacoes`&&this.abrir({especie:`transacao`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,vencimento:bI(Date.now()),pago:!1,parte:0}}),this.vista===`categorias`&&this.abrir({especie:`categoria`,dados:{id:0,nome:``,icone:``,cor:`#0d6efd`,limite:``,erroNome:!1}}),this.vista===`recorrencias`&&this.abrir({especie:`recorrencia`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,periodicidade:`mensal`,diaMes:1,diaSemana:1,gerarComoPago:!1,ativa:!0,erros:yI}})}fechar(){this.formulario!==null&&(this.formulario=null,this.emit(`st-form`,{detail:{aberto:!1}}))}handleVistaChange(){this.fechar()}abrir(e){this.formulario=e,this.emit(`st-form`,{detail:{aberto:!0}})}get mesCorrente(){return this.mes===``?xI(Date.now()):this.mes}dinheiro(e){return this.localize.number(e,{style:`currency`,currency:this.moeda,minimumFractionDigits:2,maximumFractionDigits:2})}cifra(e){return this.oculto?vI:this.dinheiro(e)}data(e){return e===0?`—`:this.localize.date(new Date(e),{dateStyle:`short`})}get simboloDaMoeda(){return new Intl.NumberFormat(this.localize.lang(),{style:`currency`,currency:this.moeda}).formatToParts(0).find(e=>e.type===`currency`)?.value??this.moeda}get separadores(){let e=new Intl.NumberFormat(this.localize.lang(),{minimumFractionDigits:2}).formatToParts(1234.5);return{grupo:e.find(e=>e.type===`group`)?.value??`.`,decimal:e.find(e=>e.type===`decimal`)?.value??`,`}}mascarar(e){let t=e.replace(/\D/g,``).replace(/^0+(?=\d)/,``);if(t===``)return``;let n=t.padStart(3,`0`),r=Number(n.slice(0,-2));return`${this.localize.number(r)}${this.separadores.decimal}${n.slice(-2)}`}desmascarar(e){let{grupo:t,decimal:n}=this.separadores,r=Number(e.split(t).join(``).replace(n,`.`));return Number.isFinite(r)?Math.abs(r):0}valorEmTexto(e){return e===0?``:this.localize.number(e,{minimumFractionDigits:2,maximumFractionDigits:2})}categoriaPorId(e){return this.categorias.find(t=>t.id===e)}partePorId(e){return e===void 0||e===0?void 0:this.partes.find(t=>t.id===e)}get partesOrdenadas(){return[...this.partes].sort((e,t)=>e.nome.localeCompare(t.nome,this.localize.lang(),{sensitivity:`base`}))}get categoriasOrdenadas(){return[...this.categorias].sort((e,t)=>e.nome.localeCompare(t.nome,this.localize.lang(),{sensitivity:`base`}))}get doMes(){return this.transacoes.filter(e=>e.vencimento!==0&&xI(e.vencimento)===this.mesCorrente)}static soma(e){return e.reduce((e,t)=>e+Number(t.valor),0)}corDa(e){let t=this.categoriaPorId(e.categoria);return t!==void 0&&t.cor!==``?t.cor:e.tipo===`receita`?`var(--st-financeiro-receita)`:`var(--st-financeiro-despesa)`}get anosComMovimento(){let e=new Set([new Date().getFullYear(),Number(this.mesCorrente.slice(0,4))]);for(let t of this.transacoes)t.vencimento!==0&&e.add(new Date(t.vencimento).getFullYear());return[...e].sort((e,t)=>t-e)}renderSaldo(){let e=this.transacoes.reduce((e,t)=>e+(t.tipo===`receita`?Number(t.valor):-Number(t.valor)),0);return T`
      <div class="saldo">
        <div class="saldo__topo">
          <span class="saldo__rotulo">${this.localize.term(`financeBalance`)}</span>
          <st-icon-button
            name=${this.oculto?`eye`:`eye-off`}
            label=${this.localize.term(this.oculto?`financeShow`:`financeHide`)}
            @click=${()=>{this.oculto=!this.oculto,this.emit(`st-visibility`,{detail:{oculto:this.oculto}})}}
          ></st-icon-button>
        </div>
        <span class="saldo__valor" ?data-negativo=${e<0}>${this.cifra(e)}</span>
      </div>
    `}renderPeriodo(){let[e=0,t=1]=this.mesCorrente.split(`-`).map(Number),n=(e,t)=>{this.mes=`${e}-${String(t).padStart(2,`0`)}`,this.emit(`st-month`,{detail:{mes:this.mes}})};return T`
      <div class="periodo">
        <st-select
          label=${this.localize.term(`financeMonth`)}
          size="small"
          .value=${String(t)}
          @st-change=${t=>n(e,Number(t.target.value))}
        >
          ${Array.from({length:12},(e,t)=>t).map(e=>T`
              <st-option value=${e+1}>
                ${this.localize.date(new Date(2001,e,1),{month:`long`})}
              </st-option>
            `)}
        </st-select>

        <st-select
          label=${this.localize.term(`financeYear`)}
          size="small"
          .value=${String(e)}
          @st-change=${e=>n(Number(e.target.value),t)}
        >
          ${this.anosComMovimento.map(e=>T`<st-option value=${e}>${e}</st-option>`)}
        </st-select>
      </div>
    `}renderPlacares(){let t=this.doMes,n=e.soma(t.filter(e=>e.tipo===`receita`)),r=e.soma(t.filter(e=>e.tipo===`despesa`)),i=e.soma(t.filter(e=>e.tipo===`despesa`&&!e.pago)),a=e.soma(t.filter(e=>e.tipo===`receita`&&!e.pago));return T`
      <div class="placares">
        ${[[n,`receita`,this.localize.term(`financeIncome`)],[r,`despesa`,this.localize.term(`financeExpenses`)],[a,`aviso`,this.localize.term(`financeToReceive`)],[i,`aviso`,this.localize.term(`financeToPay`)]].map(([e,t,n])=>T`
            <div class="placar">
              <span class="placar__valor" data-tom=${t}>${this.cifra(e)}</span>
              <span class="placar__rotulo">${n}</span>
            </div>
          `)}
      </div>
    `}renderGrafico(){let e=new Map;for(let t of this.doMes){let n=e.get(t.categoria)??{receita:0,despesa:0};t.tipo===`receita`?n.receita+=Number(t.valor):n.despesa+=Number(t.valor),e.set(t.categoria,n)}let t=[...e].map(([e,t])=>({nome:this.categoriaPorId(e)?.nome??this.localize.term(`financeNoCategory`),...t})).sort((e,t)=>t.receita+t.despesa-(e.receita+e.despesa));if(t.length===0)return this.renderVazio(`chart-bar`,this.localize.term(`financeNoActivity`));let n=Math.max(...t.map(e=>Math.max(e.receita,e.despesa))),r=e=>n<=0||e<=0?`0%`:`${Math.max(1.5,e/n*100)}%`,i=(e,t)=>T`
      <div class="barra" data-tom=${t}>
        <div class="barra__trilho">
          <div class="barra__preenchido" style=${`width:${r(e)}`}></div>
        </div>
        <span class="barra__valor">${this.dinheiro(e)}</span>
      </div>
    `;return T`
      <figure class="grafico">
        <figcaption class="grafico__titulo">${this.localize.term(`financeByCategory`)}</figcaption>

        <div class="grafico__legenda">
          <span class="legenda__item" data-tom="receita">
            <span class="legenda__marca"></span>${this.localize.term(`financeIncome`)}
          </span>
          <span class="legenda__item" data-tom="despesa">
            <span class="legenda__marca"></span>${this.localize.term(`financeExpenses`)}
          </span>
        </div>

        <div class="grafico__linhas">
          ${t.map(e=>T`
              <div class="grafico__grupo">
                <span class="grafico__categoria">${e.nome}</span>
                ${e.receita>0?i(e.receita,`receita`):E}
                ${e.despesa>0?i(e.despesa,`despesa`):E}
              </div>
            `)}
        </div>
      </figure>
    `}renderLimites(){let e=new Map;for(let t of this.doMes)t.tipo===`despesa`&&e.set(t.categoria,(e.get(t.categoria)??0)+Number(t.valor));let t=[...e].map(([e,t])=>{let n=this.categoriaPorId(e);return{nome:n?.nome??this.localize.term(`financeNoCategory`),cor:n?.cor??`var(--st-financeiro-despesa)`,icone:n?.icone??``,limite:n?.limite??0,total:t}}).sort((e,t)=>t.total-e.total);return t.length===0?E:T`
      <h2 class="secao">${this.localize.term(`financeLimits`)}</h2>
      <div class="limites">
        ${t.map(e=>{let t=e.limite>0&&e.total>e.limite,n=e.limite>0?Math.min(100,e.total/e.limite*100):0;return T`
            <div class="limite" ?data-estourou=${t}>
              <span class="limite__topo">
                <span class="limite__nome">
                  ${e.icone===``?E:T`<span>${e.icone}</span>`} ${e.nome}
                </span>
                <span class="limite__valores">
                  ${this.cifra(e.total)}
                  ${e.limite===0?E:T`<small>
                        ${this.localize.term(`financeOfLimit`,this.oculto?vI:this.dinheiro(e.limite))}
                      </small>`}
                </span>
              </span>

              ${e.limite===0?E:T`
                    <span class="limite__barra" role="presentation">
                      <span
                        class="limite__preenchido"
                        style=${`width:${n}%;background:${t?`var(--st-financeiro-despesa)`:e.cor}`}
                      ></span>
                    </span>
                  `}
            </div>
          `})}
      </div>
    `}renderAtalhos(){return T`
      <div class="atalhos">
        ${[[`transacoes`,`receipt`,this.localize.term(`financeTransactions`),this.transacoes.length],[`categorias`,`tags`,this.localize.term(`financeCategories`),this.categorias.length],[`recorrencias`,`repeat`,this.localize.term(`financeRecurrences`),this.recorrencias.length]].map(([e,t,n,r])=>T`
            <button
              class="atalho"
              type="button"
              @click=${()=>this.emit(`st-navigate`,{detail:{vista:e}})}
            >
              <st-icon class="atalho__icone" name=${t}></st-icon>
              <span class="atalho__rotulo">${n}</span>
              <span class="atalho__resumo">${this.localize.term(`financeCount`,r)}</span>
            </button>
          `)}
      </div>
    `}renderPainel(){return T`
      ${this.renderSaldo()} ${this.renderPeriodo()} ${this.renderPlacares()}
      ${this.renderLimites()} ${this.renderAtalhos()}
      ${this.oculto?T`<p class="discreto">${this.localize.term(`financeHiddenValues`)}</p>`:this.renderGrafico()}
    `}renderVazio(e,t){return T`
      <div class="vazio">
        <st-icon class="vazio__icone" name=${e}></st-icon>
        <p>${t}</p>
      </div>
    `}renderCampoValor(e,t,n){return T`
      <st-input
        label=${t}
        inputmode="numeric"
        .value=${e}
        @st-input=${e=>{let t=e.target,r=this.mascarar(t.value);t.value=r,n(r)}}
      >
        <span slot="prefix">${this.simboloDaMoeda}</span>
      </st-input>
    `}renderTipos(e,t){let n=[[`receita`,`arrow-up`,this.localize.term(`financeIncomeOne`)],[`despesa`,`arrow-down`,this.localize.term(`financeExpenseOne`)]];return T`
      <div>
        <span class="formulario__rotulo">${this.localize.term(`financeType`)}</span>
        <div class="tipos">
          ${n.map(([n,r,i])=>T`
              <button
                class="tipo"
                type="button"
                aria-pressed=${e===n}
                @click=${()=>t(n)}
              >
                <st-icon name=${r}></st-icon>${i}
              </button>
            `)}
        </div>
      </div>
    `}renderSeletorDeCategoria(e,t){return T`
      <st-select
        label=${this.localize.term(`financeCategory`)}
        .value=${String(e)}
        @st-change=${e=>t(Number(e.target.value))}
      >
        <st-option value="0">${this.localize.term(`financeNoCategory`)}</st-option>
        ${this.categoriasOrdenadas.map(e=>T`
            <st-option value=${e.id}>
              ${e.icone===``?``:`${e.icone} `}${e.nome}
            </st-option>
          `)}
      </st-select>
    `}renderSeletorDeParte(e,t){return this.partes.length===0?E:T`
      <st-select
        label=${this.localize.term(`financeParty`)}
        .value=${String(e)}
        @st-change=${e=>t(Number(e.target.value))}
      >
        <st-option value="0">${this.localize.term(`financeNoParty`)}</st-option>
        ${this.partesOrdenadas.map(e=>T`<st-option value=${e.id}>${e.nome}</st-option>`)}
      </st-select>
    `}renderAcoes(e){return T`
      <div class="formulario__acoes">
        <st-button variant="primary" @click=${e}>
          <st-icon slot="prefix" name="check"></st-icon>${this.localize.term(`save`)}
        </st-button>
        <st-button @click=${()=>this.fechar()}>${this.localize.term(`cancel`)}</st-button>
      </div>
    `}salvar(e,t){this.formulario=null,this.emit(`st-form`,{detail:{aberto:!1}}),this.emit(`st-save`,{detail:{especie:e,registro:t}})}renderFormTransacao(e){let t=t=>{this.formulario={especie:`transacao`,dados:{...e,...t}}};return T`
      <div class="formulario">
        <h2 class="formulario__titulo">
          ${this.localize.term(e.id>0?`financeEditTransaction`:`financeNewTransaction`)}
        </h2>

        <st-input
          label=${this.localize.term(`financeDescription`)}
          .value=${e.descricao}
          @st-input=${e=>t({descricao:e.target.value})}
        ></st-input>

        ${this.renderCampoValor(e.valor,this.localize.term(`financeAmount`),e=>t({valor:e}))}
        ${this.renderTipos(e.tipo,e=>t({tipo:e}))}
        ${this.renderSeletorDeCategoria(e.categoria,e=>t({categoria:e}))}
        ${this.renderSeletorDeParte(e.parte,e=>t({parte:e}))}

        <st-input
          type="date"
          label=${this.localize.term(`financeDueDate`)}
          .value=${e.vencimento}
          @st-change=${e=>t({vencimento:e.target.value})}
        ></st-input>

        <st-switch
          ?checked=${e.pago}
          @st-change=${e=>t({pago:e.target.checked})}
        >
          ${this.localize.term(`financePaid`)}
        </st-switch>

        ${this.renderAcoes(()=>this.salvar(`transacao`,{id:e.id,descricao:e.descricao.trim(),valor:this.desmascarar(e.valor),tipo:e.tipo,categoria:Number(e.categoria),vencimento:e.vencimento===``?Date.now():SI(e.vencimento),pago:e.pago,parte:Number(e.parte)}))}
      </div>
    `}renderTransacoes(){if(this.transacoes.length===0)return this.renderVazio(`receipt`,this.localize.term(`financeNoTransactions`));let e=this.doMes.sort((e,t)=>t.vencimento-e.vencimento);return e.length===0?T`
        ${this.renderPeriodo()}
        ${this.renderVazio(`receipt`,this.localize.term(`financeNoTransactionsInMonth`))}
      `:T`
      ${this.renderPeriodo()}
      <div class="registros">
        ${e.map(e=>{let t=e.tipo===`receita`,n=this.categoriaPorId(e.categoria),r=this.partePorId(e.parte),i=this.corDa(e);return T`
            <div class="registro" data-status=${e.pago?`ok`:`pendente`}>
              <span
                class="registro__avatar"
                style=${`background:color-mix(in oklab, ${i} 15%, transparent);color:${i}`}
              >
                ${n===void 0||n.icone===``?T`<st-icon name=${t?`arrow-up`:`arrow-down`}></st-icon>`:n.icone}
              </span>

              <button
                class="registro__alvo"
                type="button"
                @click=${()=>this.abrir({especie:`transacao`,dados:{id:e.id,descricao:e.descricao,valor:this.valorEmTexto(e.valor),tipo:e.tipo,categoria:e.categoria,vencimento:bI(e.vencimento===0?Date.now():e.vencimento),pago:e.pago,parte:e.parte??0}})}
              >
                <span class="registro__topo">
                  <span class="registro__titulo">${e.descricao}</span>
                  <span class="registro__valor" data-tom=${e.tipo}>
                    ${t?`+`:`−`} ${this.cifra(e.valor)}
                  </span>
                </span>
                <span class="registro__resumo">
                  ${this.data(e.vencimento)}
                  ${n===void 0?``:`\xB7 ${n.nome}`}
                  ${r===void 0?``:`\xB7 ${r.nome}`}
                </span>
              </button>

              <div class="registro__acoes">
                <st-icon-button
                  name=${e.pago?`circle-check`:`circle`}
                  label=${this.localize.term(e.pago?`financeUnmarkPaid`:`financeMarkPaid`)}
                  @click=${()=>this.emit(`st-toggle`,{detail:{especie:`transacao`,registro:{...e,pago:!e.pago}}})}
                ></st-icon-button>
                <st-icon-button
                  name="trash"
                  label=${this.localize.term(`deleteItem`)}
                  @click=${()=>this.emit(`st-delete`,{detail:{especie:`transacao`,registro:e}})}
                ></st-icon-button>
              </div>
            </div>
          `})}
      </div>
    `}renderFormCategoria(e){let t=t=>{this.formulario={especie:`categoria`,dados:{...e,...t}}};return T`
      <div class="formulario">
        <h2 class="formulario__titulo">
          ${this.localize.term(e.id>0?`financeEditCategory`:`financeNewCategory`)}
        </h2>

        <st-input
          label=${this.localize.term(`financeName`)}
          .value=${e.nome}
          help-text=${e.erroNome?this.localize.term(`financeNameRequired`):``}
          @st-input=${e=>t({nome:e.target.value,erroNome:!1})}
        ></st-input>

        <div>
          <span class="formulario__rotulo">${this.localize.term(`financeIcon`)}</span>
          <div class="icones">
            ${gI.map(n=>T`
                <button
                  class="icone"
                  type="button"
                  aria-label=${n}
                  aria-pressed=${e.icone===n}
                  @click=${()=>t({icone:e.icone===n?``:n})}
                >
                  ${n}
                </button>
              `)}
          </div>
        </div>

        <st-input
          type="color"
          label=${this.localize.term(`financeColor`)}
          .value=${e.cor}
          @st-input=${e=>t({cor:e.target.value})}
        ></st-input>

        ${this.renderCampoValor(e.limite,this.localize.term(`financeMonthlyLimit`),e=>t({limite:e}))}
        <p class="discreto">${this.localize.term(`financeLimitHelp`)}</p>

        ${this.renderAcoes(()=>{if(e.nome.trim()===``){t({erroNome:!0});return}this.salvar(`categoria`,{id:e.id,nome:e.nome.trim(),icone:e.icone,cor:e.cor,limite:this.desmascarar(e.limite)})})}
      </div>
    `}renderCategorias(){return this.categorias.length===0?this.renderVazio(`tags`,this.localize.term(`financeNoCategories`)):T`
      <div class="categorias">
        ${this.categoriasOrdenadas.map(e=>T`
            <div class="categoria">
              <span class="categoria__cor" style=${`background:${e.cor}`}></span>
              <span>${e.icone}</span>
              <span class="categoria__nome">${e.nome}</span>
              ${e.limite>0?T`
                    <span class="discreto">
                      ${this.localize.term(`financeLimitOf`,this.oculto?vI:this.dinheiro(e.limite))}
                    </span>
                  `:E}
              <st-icon-button
                name="pencil"
                label=${this.localize.term(`editItem`)}
                @click=${()=>this.abrir({especie:`categoria`,dados:{id:e.id,nome:e.nome,icone:e.icone,cor:e.cor,limite:this.valorEmTexto(e.limite),erroNome:!1}})}
              ></st-icon-button>
              <st-icon-button
                name="trash"
                label=${this.localize.term(`deleteItem`)}
                @click=${()=>this.emit(`st-delete`,{detail:{especie:`categoria`,registro:e}})}
              ></st-icon-button>
            </div>
          `)}
      </div>
    `}nomeDaPeriodicidade(e){let t=_I.find(([t])=>t===e);return t===void 0?e:this.localize.term(t[1])}descreverPeriodo(e){let t=this.nomeDaPeriodicidade(e.periodicidade);return e.periodicidade===`mensal`?`${t} \xB7 ${this.localize.term(`financeDayNum`,e.diaMes)}`:e.periodicidade===`semanal`?`${t} \xB7 ${this.nomeDoDia(e.diaSemana)}`:t}nomeDoDia(e){return this.localize.date(new Date(2001,0,e),{weekday:`long`})}renderFormRecorrencia(e){let t=t=>{this.formulario={especie:`recorrencia`,dados:{...e,...t}}};return T`
      <div class="formulario">
        <h2 class="formulario__titulo">
          ${this.localize.term(e.id>0?`financeEditRecurrence`:`financeNewRecurrence`)}
        </h2>

        <st-input
          label=${this.localize.term(`financeDescription`)}
          .value=${e.descricao}
          help-text=${e.erros.descricao?this.localize.term(`financeDescriptionRequired`):``}
          @st-input=${n=>t({descricao:n.target.value,erros:{...e.erros,descricao:!1}})}
        ></st-input>

        ${this.renderCampoValor(e.valor,this.localize.term(`financeAmount`),n=>t({valor:n,erros:{...e.erros,valor:!1}}))}
        ${e.erros.valor?T`<p class="erro">${this.localize.term(`financeAmountRequired`)}</p>`:E}
        ${this.renderTipos(e.tipo,e=>t({tipo:e}))}
        ${this.renderSeletorDeCategoria(e.categoria,e=>t({categoria:e}))}

        <st-select
          label=${this.localize.term(`financePeriodicity`)}
          .value=${e.periodicidade}
          @st-change=${n=>t({periodicidade:n.target.value,erros:{...e.erros,diaMes:!1}})}
        >
          ${_I.map(([e,t])=>T`<st-option value=${e}>${this.localize.term(t)}</st-option>`)}
        </st-select>

        ${e.periodicidade===`mensal`?T`
              <st-input
                type="number"
                min="1"
                max="31"
                label=${this.localize.term(`financeDayOfMonth`)}
                .value=${String(e.diaMes)}
                help-text=${this.localize.term(e.erros.diaMes?`financeDayOfMonthRequired`:`financeDayOfMonthHelp`)}
                @st-input=${n=>t({diaMes:Number(n.target.value),erros:{...e.erros,diaMes:!1}})}
              ></st-input>
            `:E}
        ${e.periodicidade===`semanal`?T`
              <st-select
                label=${this.localize.term(`financeWeekday`)}
                .value=${String(e.diaSemana)}
                @st-change=${e=>t({diaSemana:Number(e.target.value)})}
              >
                ${[1,2,3,4,5,6,7].map(e=>T`<st-option value=${e}>${this.nomeDoDia(e)}</st-option>`)}
              </st-select>
            `:E}

        <st-switch
          ?checked=${e.gerarComoPago}
          @st-change=${e=>t({gerarComoPago:e.target.checked})}
        >
          ${this.localize.term(`financeGenerateAsPaid`)}
        </st-switch>

        <st-switch
          ?checked=${e.ativa}
          @st-change=${e=>t({ativa:e.target.checked})}
        >
          ${this.localize.term(`financeActive`)}
        </st-switch>

        ${this.renderAcoes(()=>{let n={descricao:e.descricao.trim()===``,valor:this.desmascarar(e.valor)<=0,diaMes:e.periodicidade===`mensal`&&!(e.diaMes>=1&&e.diaMes<=31)};if(n.descricao||n.valor||n.diaMes){t({erros:n});return}this.salvar(`recorrencia`,{id:e.id,descricao:e.descricao.trim(),valor:this.desmascarar(e.valor),tipo:e.tipo,categoria:Number(e.categoria),periodicidade:e.periodicidade,diaMes:Math.min(31,Math.max(1,Number(e.diaMes))),diaSemana:Math.min(7,Math.max(1,Number(e.diaSemana))),gerarComoPago:e.gerarComoPago,ativa:e.ativa,proxima:0})})}
      </div>
    `}renderRecorrencias(){return this.recorrencias.length===0?this.renderVazio(`repeat`,this.localize.term(`financeNoRecurrences`)):T`
      <div class="registros">
        ${this.recorrencias.map(e=>{let t=e.tipo===`receita`;return T`
            <div class="registro" data-status=${e.ativa?`ok`:`pendente`}>
              <span class="registro__avatar">
                <st-icon name=${t?`arrow-up`:`arrow-down`}></st-icon>
              </span>

              <button
                class="registro__alvo"
                type="button"
                @click=${()=>this.abrir({especie:`recorrencia`,dados:{id:e.id,descricao:e.descricao,valor:this.valorEmTexto(e.valor),tipo:e.tipo,categoria:e.categoria,periodicidade:e.periodicidade,diaMes:e.diaMes,diaSemana:e.diaSemana,gerarComoPago:e.gerarComoPago,ativa:e.ativa,erros:yI}})}
              >
                <span class="registro__topo">
                  <span class="registro__titulo">${e.descricao}</span>
                  <span class="registro__valor" data-tom=${e.tipo}>
                    ${t?`+`:`−`} ${this.cifra(e.valor)}
                  </span>
                </span>
                <span class="registro__resumo">${this.descreverPeriodo(e)}</span>
                <span class="registro__resumo">
                  ${this.localize.term(`financeNext`,this.data(e.proxima))}
                </span>
              </button>

              <div class="registro__acoes">
                <st-icon-button
                  name=${e.ativa?`player-pause`:`player-play`}
                  label=${this.localize.term(e.ativa?`financePause`:`financeResume`)}
                  @click=${()=>this.emit(`st-toggle`,{detail:{especie:`recorrencia`,registro:{...e,ativa:!e.ativa}}})}
                ></st-icon-button>
                <st-icon-button
                  name="trash"
                  label=${this.localize.term(`deleteItem`)}
                  @click=${()=>this.emit(`st-delete`,{detail:{especie:`recorrencia`,registro:e}})}
                ></st-icon-button>
              </div>
            </div>
          `})}
      </div>
    `}renderVista(){let e=this.formulario;return e===null?this.vista===`transacoes`?this.renderTransacoes():this.vista===`categorias`?this.renderCategorias():this.vista===`recorrencias`?this.renderRecorrencias():this.renderPainel():e.especie===`transacao`?this.renderFormTransacao(e.dados):e.especie===`categoria`?this.renderFormCategoria(e.dados):this.renderFormRecorrencia(e.dados)}render(){return T`<div part="base" class="financeiro">${this.renderVista()}</div>`}};Z=ge(NI),PI=new WeakMap,FI=new WeakMap,II=new WeakMap,LI=new WeakMap,RI=new WeakMap,zI=new WeakMap,BI=new WeakMap,VI=new WeakMap,HI=new WeakMap,_(Z,4,`vista`,MI,UI,PI),_(Z,4,`categorias`,jI,UI,FI),_(Z,4,`partes`,AI,UI,II),_(Z,4,`transacoes`,kI,UI,LI),_(Z,4,`recorrencias`,OI,UI,RI),_(Z,4,`mes`,DI,UI,zI),_(Z,4,`oculto`,EI,UI,BI),_(Z,4,`moeda`,TI,UI,VI),_(Z,4,`formulario`,wI,UI,HI),_(Z,1,`handleVistaChange`,CI,UI),be(Z,UI),v(UI,`styles`,[Ir,eP]),v(UI,`dependencies`,{"st-button":I,"st-icon":Mo,"st-icon-button":Ys,"st-input":P,"st-option":hI,"st-select":X,"st-switch":OP}),UI.define(`st-financeiro`),Mo.define(`st-icon`),Ys.define(`st-icon-button`),P.define(`st-input`),oi.define(`st-menu`),Qo.define(`st-menu-item`),hI.define(`st-option`),X.define(`st-select`),eo.define(`st-spinner`),OP.define(`st-switch`);var WI=mr`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--st-input-font-family);
    font-weight: var(--st-input-font-weight);
    line-height: var(--st-line-height-normal);
    letter-spacing: var(--st-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--st-transition-fast) color,
      var(--st-transition-fast) border,
      var(--st-transition-fast) box-shadow,
      var(--st-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--st-input-background-color);
    border: solid var(--st-input-border-width) var(--st-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--st-input-background-color-hover);
    border-color: var(--st-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--st-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--st-input-background-color-focus);
    border-color: var(--st-input-border-color-focus);
    color: var(--st-input-color-focus);
    box-shadow: 0 0 0 var(--st-focus-ring-width) var(--st-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--st-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--st-input-background-color-disabled);
    border-color: var(--st-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--st-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--st-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--st-input-filled-background-color);
    color: var(--st-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--st-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--st-input-filled-background-color-focus);
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--st-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--st-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--st-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--st-input-border-radius-small);
    font-size: var(--st-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--st-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--st-input-border-radius-medium);
    font-size: var(--st-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--st-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--st-input-border-radius-large);
    font-size: var(--st-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--st-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,GI,KI,qI,JI,YI,XI,ZI,QI,$I,eL,tL,nL,rL,iL,aL,oL,sL,cL,lL,uL,dL,fL,pL,mL,hL,gL,_L,vL,yL,bL,xL,Q,SL,CL,wL,TL,EL,DL,OL,kL,AL,jL,ML,NL,PL,FL,IL,LL,RL,zL,BL,VL,HL,UL,WL,GL,KL,qL,$=class extends (xL=ti,bL=[Vr(`.textarea__control`)],yL=[Vr(`.textarea__size-adjuster`)],vL=[zr()],_L=[D()],gL=[D()],hL=[D()],mL=[D({reflect:!0})],pL=[D({type:Boolean,reflect:!0})],fL=[D()],dL=[D({attribute:`help-text`})],uL=[D()],lL=[D({type:Number})],cL=[D()],sL=[D({type:Boolean,reflect:!0})],oL=[D({type:Boolean,reflect:!0})],aL=[D({reflect:!0})],iL=[D({type:Boolean,reflect:!0})],rL=[D({type:Number})],nL=[D({type:Number})],tL=[D()],eL=[D({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],$I=[D()],QI=[D({type:Boolean})],ZI=[D()],XI=[D({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],YI=[D()],JI=[Kr()],qI=[Ur(`disabled`,{waitUntilFirstUpdate:!0})],KI=[Ur(`rows`,{waitUntilFirstUpdate:!0})],GI=[Ur(`value`,{waitUntilFirstUpdate:!0})],xL){constructor(){super(...arguments),g(Q,5,this),v(this,`formControlController`,new ys(this,{assumeInteractionOn:[`st-blur`,`st-input`]})),v(this,`hasSlotController`,new to(this,`help-text`,`label`)),v(this,`resizeObserver`),y(this,SL,g(Q,8,this)),g(Q,11,this),y(this,CL,g(Q,12,this)),g(Q,15,this),y(this,wL,g(Q,16,this,!1)),g(Q,19,this),y(this,TL,g(Q,20,this,``)),g(Q,23,this),y(this,EL,g(Q,24,this,``)),g(Q,27,this),y(this,DL,g(Q,28,this,``)),g(Q,31,this),y(this,OL,g(Q,32,this,`medium`)),g(Q,35,this),y(this,kL,g(Q,36,this,!1)),g(Q,39,this),y(this,AL,g(Q,40,this,``)),g(Q,43,this),y(this,jL,g(Q,44,this,``)),g(Q,47,this),y(this,ML,g(Q,48,this,``)),g(Q,51,this),y(this,NL,g(Q,52,this,4)),g(Q,55,this),y(this,PL,g(Q,56,this,`vertical`)),g(Q,59,this),y(this,FL,g(Q,60,this,!1)),g(Q,63,this),y(this,IL,g(Q,64,this,!1)),g(Q,67,this),y(this,LL,g(Q,68,this,``)),g(Q,71,this),y(this,RL,g(Q,72,this,!1)),g(Q,75,this),y(this,zL,g(Q,76,this)),g(Q,79,this),y(this,BL,g(Q,80,this)),g(Q,83,this),y(this,VL,g(Q,84,this)),g(Q,87,this),y(this,HL,g(Q,88,this,!0)),g(Q,91,this),y(this,UL,g(Q,92,this)),g(Q,95,this),y(this,WL,g(Q,96,this)),g(Q,99,this),y(this,GL,g(Q,100,this)),g(Q,103,this),y(this,KL,g(Q,104,this,!0)),g(Q,107,this),y(this,qL,g(Q,108,this)),g(Q,111,this),v(this,`defaultValue`,g(Q,112,this,``)),g(Q,115,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit(`st-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`st-change`)}handleFocus(){this.hasFocus=!0,this.emit(`st-focus`)}handleInput(){this.value=this.input.value,this.emit(`st-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return T`
      <div
        part="form-control"
        class=${Hi({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Hi({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${A(this.name)}
              .value=${Yc(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${A(this.placeholder)}
              rows=${A(this.rows)}
              minlength=${A(this.minlength)}
              maxlength=${A(this.maxlength)}
              autocapitalize=${A(this.autocapitalize)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${A(this.spellcheck)}
              enterkeyhint=${A(this.enterkeyhint)}
              inputmode=${A(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q=ge(xL),SL=new WeakMap,CL=new WeakMap,wL=new WeakMap,TL=new WeakMap,EL=new WeakMap,DL=new WeakMap,OL=new WeakMap,kL=new WeakMap,AL=new WeakMap,jL=new WeakMap,ML=new WeakMap,NL=new WeakMap,PL=new WeakMap,FL=new WeakMap,IL=new WeakMap,LL=new WeakMap,RL=new WeakMap,zL=new WeakMap,BL=new WeakMap,VL=new WeakMap,HL=new WeakMap,UL=new WeakMap,WL=new WeakMap,GL=new WeakMap,KL=new WeakMap,qL=new WeakMap,_(Q,4,`input`,bL,$,SL),_(Q,4,`sizeAdjuster`,yL,$,CL),_(Q,4,`hasFocus`,vL,$,wL),_(Q,4,`title`,_L,$,TL),_(Q,4,`name`,gL,$,EL),_(Q,4,`value`,hL,$,DL),_(Q,4,`size`,mL,$,OL),_(Q,4,`filled`,pL,$,kL),_(Q,4,`label`,fL,$,AL),_(Q,4,`helpText`,dL,$,jL),_(Q,4,`placeholder`,uL,$,ML),_(Q,4,`rows`,lL,$,NL),_(Q,4,`resize`,cL,$,PL),_(Q,4,`disabled`,sL,$,FL),_(Q,4,`readonly`,oL,$,IL),_(Q,4,`form`,aL,$,LL),_(Q,4,`required`,iL,$,RL),_(Q,4,`minlength`,rL,$,zL),_(Q,4,`maxlength`,nL,$,BL),_(Q,4,`autocapitalize`,tL,$,VL),_(Q,4,`autocorrect`,eL,$,HL),_(Q,4,`autocomplete`,$I,$,UL),_(Q,4,`autofocus`,QI,$,WL),_(Q,4,`enterkeyhint`,ZI,$,GL),_(Q,4,`spellcheck`,XI,$,KL),_(Q,4,`inputmode`,YI,$,qL),_(Q,1,`handleDisabledChange`,qI,$),_(Q,1,`handleRowsChange`,KI,$),_(Q,1,`handleValueChange`,GI,$),_(Q,5,`defaultValue`,JI,$),be(Q,$),v($,`styles`,[Ir,Qc,WI]),$.define(`st-textarea`),se(`./stratum`);var JL=document.querySelector(`#app`);function YL(e){if(e.modulo===`home`)return{cabecalho:{titulo:n.home.saudacao},conteudo:uN({executar:()=>void nR(!0),ocupado:$L})};if(e.modulo===`hub`){let t=e.args[0]??``;return{cabecalho:{titulo:QL(t),voltarPara:`home`},conteudo:fN(t)}}let t=Vt(e.modulo);if(t===void 0)return{cabecalho:{titulo:n.erro.naoEncontrado,voltarPara:`home`},conteudo:WM()};let r=XL[t.id];return r===void 0||!Ut(t.id)?{cabecalho:{titulo:t.rotulo,voltarPara:`home`,acoes:ZL(t.id,e,void 0)},conteudo:UM(t)}:{cabecalho:{titulo:r.titulo?.(e)??t.rotulo,voltarPara:r.voltarPara?.(e)??`home`,aoVoltar:()=>r.aoVoltar?.(e)??!1,acoes:ZL(t.id,e,r.acoes?.(e))},conteudo:r.conteudo(e)}}var XL={anotacoes:dp,caderno:zp,calendario:dh,criacao:Kv,entenda:Kv,cronologia:yy,estudo:Sb,financeiro:mx,guias:iS,jogo:TC,leitura:ww,metas:fT,ministerio:BE,perfil:yD,poesia:gO,prep:FA,receitas:Ej,servico:nM,sobre:wM,tutorial:HM};function ZL(e,t,r){let i=e!==`tutorial`&&e!==`sobre`&&Ut(`tutorial`)&&t.args.length===0;return b`
    ${r??x}
    ${i?b`
          <st-icon-button
            name="help-circle"
            label=${n.tutorial.ajuda}
            @click=${()=>S(`tutorial/${e}`)}
          ></st-icon-button>
        `:x}
  `}function QL(e){return Ht(e)?.rotulo??n.erro.naoEncontrado}var $L=!1;function eR(){if(JL===null)return;let e=tR,{cabecalho:n,conteudo:r}=YL(e);document.title=e.modulo===`home`?t.displayName:`${n.titulo} — ${t.displayName}`,Mt(Cn(n,r,eR),JL)}var tR={modulo:`home`,args:[],query:new URLSearchParams};async function nR(e){if(!$L){$L=!0,eR();try{let t=await un();if(!e)return;t.ok?L(n.home.sincronizado(t.atualizados.length)):L(t.motivo===`offline`?n.home.semRede:n.home.semManifesto,`warning`)}finally{$L=!1,eR()}}}function rR(){JL!==null&&Mt(b`
      <div class="carregando">
        <st-spinner></st-spinner>
        <p>${n.app.carregando}</p>
      </div>
    `,JL)}function iR(e){JL!==null&&Mt(b`
      <div class="aviso">
        <st-icon class="aviso__icone" name="alert-triangle"></st-icon>
        <h2>${n.erro.banco}</h2>
        <pre class="detalhe">${e}</pre>
      </div>
    `,JL)}async function aR(){rR(),qt(eR);try{(await r()).persistente||L(n.armazenamento.memoria,`warning`)}catch(e){iR(String(e));return}JL?.removeAttribute(`aria-busy`),Gt(e=>{tR=e,eR(),scrollTo({top:0})}),nn(),nR(!1),lM()}window.__papiro={repositorio:i,navegacao:{MODULOS:It,HUBS:Lt,HOME:Rt}},location.hash===``&&S(`home`),aR();export{cg as a,dg as c,w as d,b as f,lg as i,L as l,mg as n,sg as o,hg as r,pg as s,Rg as t,qd as u};
//# sourceMappingURL=index-ByWlZ2cq.js.map