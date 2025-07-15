(function(l,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("prop-types"),require("mammoth"),require("diff-match-patch"),require("lucide-react")):typeof define=="function"&&define.amd?define(["react","prop-types","mammoth","diff-match-patch","lucide-react"],n):(l=typeof globalThis<"u"?globalThis:l||self,l.FormaText=n(l.React,l.PropTypes,l.mammoth,l.diff_match_patch,l["lucide-react"]))})(this,function(l,n,_t,De,i){"use strict";function Mt(){if(typeof document<"u"){const r="bootstrap-css-cdn-link",a="bootstrap-js-cdn-script";if(!document.getElementById(r)){const s=document.createElement("link");s.id=r,s.rel="stylesheet",s.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",s.crossOrigin="anonymous",document.head.appendChild(s)}if(!document.getElementById(a)){const s=document.createElement("script");s.id=a,s.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",s.crossOrigin="anonymous",s.defer=!0,document.body.appendChild(s)}}}var Je={exports:{}},Oe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct;function qt(){if(ct)return Oe;ct=1;var r=l,a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(h,L,q){var S,U={},A=null,V=null;q!==void 0&&(A=""+q),L.key!==void 0&&(A=""+L.key),L.ref!==void 0&&(V=L.ref);for(S in L)u.call(L,S)&&!p.hasOwnProperty(S)&&(U[S]=L[S]);if(h&&h.defaultProps)for(S in L=h.defaultProps,L)U[S]===void 0&&(U[S]=L[S]);return{$$typeof:a,type:h,key:A,ref:V,props:U,_owner:m.current}}return Oe.Fragment=s,Oe.jsx=g,Oe.jsxs=g,Oe}var ze={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ut;function Dt(){return ut||(ut=1,process.env.NODE_ENV!=="production"&&function(){var r=l,a=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),j=Symbol.iterator,v="@@iterator";function D(t){if(t===null||typeof t!="object")return null;var o=j&&t[j]||t[v];return typeof o=="function"?o:null}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(t){{for(var o=arguments.length,f=new Array(o>1?o-1:0),x=1;x<o;x++)f[x-1]=arguments[x];re("error",t,f)}}function re(t,o,f){{var x=R.ReactDebugCurrentFrame,N=x.getStackAddendum();N!==""&&(o+="%s",f=f.concat([N]));var z=f.map(function(k){return String(k)});z.unshift("Warning: "+o),Function.prototype.apply.call(console[t],console,z)}}var Se=!1,w=!1,$=!1,oe=!1,tt=!1,ge;ge=Symbol.for("react.module.reference");function rt(t){return!!(typeof t=="string"||typeof t=="function"||t===u||t===p||tt||t===m||t===q||t===S||oe||t===V||Se||w||$||typeof t=="object"&&t!==null&&(t.$$typeof===A||t.$$typeof===U||t.$$typeof===g||t.$$typeof===h||t.$$typeof===L||t.$$typeof===ge||t.getModuleId!==void 0))}function ye(t,o,f){var x=t.displayName;if(x)return x;var N=o.displayName||o.name||"";return N!==""?f+"("+N+")":f}function $e(t){return t.displayName||"Context"}function G(t){if(t==null)return null;if(typeof t.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case u:return"Fragment";case s:return"Portal";case p:return"Profiler";case m:return"StrictMode";case q:return"Suspense";case S:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h:var o=t;return $e(o)+".Consumer";case g:var f=t;return $e(f._context)+".Provider";case L:return ye(t,t.render,"ForwardRef");case U:var x=t.displayName||null;return x!==null?x:G(t.type)||"Memo";case A:{var N=t,z=N._payload,k=N._init;try{return G(k(z))}catch{return null}}}return null}var Z=Object.assign,P=0,Be,xe,ve,Ie,Ve,je,Ce;function Ae(){}Ae.__reactDisabledLog=!0;function se(){{if(P===0){Be=console.log,xe=console.info,ve=console.warn,Ie=console.error,Ve=console.group,je=console.groupCollapsed,Ce=console.groupEnd;var t={configurable:!0,enumerable:!0,value:Ae,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}P++}}function Te(){{if(P--,P===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Z({},t,{value:Be}),info:Z({},t,{value:xe}),warn:Z({},t,{value:ve}),error:Z({},t,{value:Ie}),group:Z({},t,{value:Ve}),groupCollapsed:Z({},t,{value:je}),groupEnd:Z({},t,{value:Ce})})}P<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ue=R.ReactCurrentDispatcher,fe;function _e(t,o,f){{if(fe===void 0)try{throw Error()}catch(N){var x=N.stack.trim().match(/\n( *(at )?)/);fe=x&&x[1]||""}return`
`+fe+t}}var Me=!1,X;{var ee=typeof WeakMap=="function"?WeakMap:Map;X=new ee}function H(t,o){if(!t||Me)return"";{var f=X.get(t);if(f!==void 0)return f}var x;Me=!0;var N=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var z;z=ue.current,ue.current=null,se();try{if(o){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(W){x=W}Reflect.construct(t,[],k)}else{try{k.call()}catch(W){x=W}t.call(k.prototype)}}else{try{throw Error()}catch(W){x=W}t()}}catch(W){if(W&&x&&typeof W.stack=="string"){for(var C=W.stack.split(`
`),Y=x.stack.split(`
`),I=C.length-1,M=Y.length-1;I>=1&&M>=0&&C[I]!==Y[M];)M--;for(;I>=1&&M>=0;I--,M--)if(C[I]!==Y[M]){if(I!==1||M!==1)do if(I--,M--,M<0||C[I]!==Y[M]){var K=`
`+C[I].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),typeof t=="function"&&X.set(t,K),K}while(I>=1&&M>=0);break}}}finally{Me=!1,ue.current=z,Te(),Error.prepareStackTrace=N}var Fe=t?t.displayName||t.name:"",he=Fe?_e(Fe):"";return typeof t=="function"&&X.set(t,he),he}function nt(t,o,f){return H(t,!1)}function ke(t){var o=t.prototype;return!!(o&&o.isReactComponent)}function B(t,o,f){if(t==null)return"";if(typeof t=="function")return H(t,ke(t));if(typeof t=="string")return _e(t);switch(t){case q:return _e("Suspense");case S:return _e("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case L:return nt(t.render);case U:return B(t.type,o,f);case A:{var x=t,N=x._payload,z=x._init;try{return B(z(N),o,f)}catch{}}}return""}var me=Object.prototype.hasOwnProperty,we={},Ye=R.ReactDebugCurrentFrame;function pe(t){if(t){var o=t._owner,f=B(t.type,t._source,o?o.type:null);Ye.setExtraStackFrame(f)}else Ye.setExtraStackFrame(null)}function it(t,o,f,x,N){{var z=Function.call.bind(me);for(var k in t)if(z(t,k)){var C=void 0;try{if(typeof t[k]!="function"){var Y=Error((x||"React class")+": "+f+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[k]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Y.name="Invariant Violation",Y}C=t[k](o,k,x,f,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(I){C=I}C&&!(C instanceof Error)&&(pe(N),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",x||"React class",f,k,typeof C),pe(null)),C instanceof Error&&!(C.message in we)&&(we[C.message]=!0,pe(N),T("Failed %s type: %s",f,C.message),pe(null))}}}var ot=Array.isArray;function qe(t){return ot(t)}function st(t){{var o=typeof Symbol=="function"&&Symbol.toStringTag,f=o&&t[Symbol.toStringTag]||t.constructor.name||"Object";return f}}function at(t){try{return We(t),!1}catch{return!0}}function We(t){return""+t}function Ge(t){if(at(t))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",st(t)),We(t)}var Ke=R.ReactCurrentOwner,lt={key:!0,ref:!0,__self:!0,__source:!0},Ne,d;function c(t){if(me.call(t,"ref")){var o=Object.getOwnPropertyDescriptor(t,"ref").get;if(o&&o.isReactWarning)return!1}return t.ref!==void 0}function b(t){if(me.call(t,"key")){var o=Object.getOwnPropertyDescriptor(t,"key").get;if(o&&o.isReactWarning)return!1}return t.key!==void 0}function y(t,o){typeof t.ref=="string"&&Ke.current}function _(t,o){{var f=function(){Ne||(Ne=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};f.isReactWarning=!0,Object.defineProperty(t,"key",{get:f,configurable:!0})}}function ae(t,o){{var f=function(){d||(d=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};f.isReactWarning=!0,Object.defineProperty(t,"ref",{get:f,configurable:!0})}}var ne=function(t,o,f,x,N,z,k){var C={$$typeof:a,type:t,key:o,ref:f,props:k,_owner:z};return C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(C,"_self",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.defineProperty(C,"_source",{configurable:!1,enumerable:!1,writable:!1,value:N}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C};function J(t,o,f,x,N){{var z,k={},C=null,Y=null;f!==void 0&&(Ge(f),C=""+f),b(o)&&(Ge(o.key),C=""+o.key),c(o)&&(Y=o.ref,y(o,N));for(z in o)me.call(o,z)&&!lt.hasOwnProperty(z)&&(k[z]=o[z]);if(t&&t.defaultProps){var I=t.defaultProps;for(z in I)k[z]===void 0&&(k[z]=I[z])}if(C||Y){var M=typeof t=="function"?t.displayName||t.name||"Unknown":t;C&&_(k,M),Y&&ae(k,M)}return ne(t,C,Y,N,x,Ke.current,k)}}var le=R.ReactCurrentOwner,Q=R.ReactDebugCurrentFrame;function te(t){if(t){var o=t._owner,f=B(t.type,t._source,o?o.type:null);Q.setExtraStackFrame(f)}else Q.setExtraStackFrame(null)}var be;be=!1;function Xe(t){return typeof t=="object"&&t!==null&&t.$$typeof===a}function Ee(){{if(le.current){var t=G(le.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function ir(t){return""}var St={};function or(t){{var o=Ee();if(!o){var f=typeof t=="string"?t:t.displayName||t.name;f&&(o=`

Check the top-level render call using <`+f+">.")}return o}}function yt(t,o){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var f=or(o);if(St[f])return;St[f]=!0;var x="";t&&t._owner&&t._owner!==le.current&&(x=" It was passed a child from "+G(t._owner.type)+"."),te(t),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',f,x),te(null)}}function It(t,o){{if(typeof t!="object")return;if(qe(t))for(var f=0;f<t.length;f++){var x=t[f];Xe(x)&&yt(x,o)}else if(Xe(t))t._store&&(t._store.validated=!0);else if(t){var N=D(t);if(typeof N=="function"&&N!==t.entries)for(var z=N.call(t),k;!(k=z.next()).done;)Xe(k.value)&&yt(k.value,o)}}}function sr(t){{var o=t.type;if(o==null||typeof o=="string")return;var f;if(typeof o=="function")f=o.propTypes;else if(typeof o=="object"&&(o.$$typeof===L||o.$$typeof===U))f=o.propTypes;else return;if(f){var x=G(o);it(f,t.props,"prop",x,t)}else if(o.PropTypes!==void 0&&!be){be=!0;var N=G(o);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",N||"Unknown")}typeof o.getDefaultProps=="function"&&!o.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ar(t){{for(var o=Object.keys(t.props),f=0;f<o.length;f++){var x=o[f];if(x!=="children"&&x!=="key"){te(t),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",x),te(null);break}}t.ref!==null&&(te(t),T("Invalid attribute `ref` supplied to `React.Fragment`."),te(null))}}var At={};function Tt(t,o,f,x,N,z){{var k=rt(t);if(!k){var C="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Y=ir();Y?C+=Y:C+=Ee();var I;t===null?I="null":qe(t)?I="array":t!==void 0&&t.$$typeof===a?(I="<"+(G(t.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):I=typeof t,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",I,C)}var M=J(t,o,f,N,z);if(M==null)return M;if(k){var K=o.children;if(K!==void 0)if(x)if(qe(K)){for(var Fe=0;Fe<K.length;Fe++)It(K[Fe],t);Object.freeze&&Object.freeze(K)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else It(K,t)}if(me.call(o,"key")){var he=G(t),W=Object.keys(o).filter(function(mr){return mr!=="key"}),dt=W.length>0?"{key: someKey, "+W.join(": ..., ")+": ...}":"{key: someKey}";if(!At[he+dt]){var fr=W.length>0?"{"+W.join(": ..., ")+": ...}":"{}";T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,dt,he,fr,he),At[he+dt]=!0}}return t===u?ar(M):sr(M),M}}function lr(t,o,f){return Tt(t,o,f,!0)}function dr(t,o,f){return Tt(t,o,f,!1)}var cr=dr,ur=lr;ze.Fragment=u,ze.jsx=cr,ze.jsxs=ur}()),ze}process.env.NODE_ENV==="production"?Je.exports=qt():Je.exports=Dt();var e=Je.exports;const E=l.memo(({onClick:r,title:a,command:s,activeStyles:u,disabled:m=!1,children:p})=>e.jsx("button",{type:"button",onClick:r,onMouseDown:g=>g.preventDefault(),className:`btn btn-outline-secondary ${u&&u.has(s)?"active":""}`,"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:a,disabled:m,children:p}));E.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,command:n.string,activeStyles:n.object,disabled:n.bool,children:n.node.isRequired},E.displayName="ToolbarButton";const ie=({title:r,icon:a,children:s})=>{const[u,m]=l.useState(!1),p=l.useRef(null);return l.useEffect(()=>{const g=h=>{p.current&&!p.current.contains(h.target)&&m(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),e.jsxs("div",{className:"btn-group",ref:p,children:[e.jsx("button",{type:"button",title:r,onClick:()=>m(!u),onMouseDown:g=>g.preventDefault(),className:"btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1","aria-expanded":u,children:a}),e.jsx("div",{className:`dropdown-menu ${u?"show":""}`,onClick:g=>{g.target.closest("button")&&m(!1)},children:s})]})};ie.propTypes={title:n.string.isRequired,icon:n.node.isRequired,children:n.node.isRequired};const Rt=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],Qe=({command:r,applyStyle:a})=>{const s=r==="foreColor"?"Text Color":"Highlight Color",u=r==="foreColor"?e.jsx(i.Palette,{size:16}):e.jsx(i.Highlighter,{size:16});return e.jsx(ie,{title:s,icon:u,children:e.jsx("div",{className:"p-2 d-flex flex-wrap gap-1",style:{width:"160px"},children:Rt.map(m=>e.jsx("button",{type:"button",className:"color-swatch",style:{backgroundColor:m},onClick:()=>a(r,m),"aria-label":m},m))})})};Qe.propTypes={command:n.oneOf(["foreColor","backColor"]).isRequired,applyStyle:n.func.isRequired};const Ht=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],ft=({applyStyle:r})=>e.jsx(ie,{title:"Insert Emoji",icon:e.jsx(i.Smile,{size:16}),children:e.jsx("div",{className:"p-2 d-flex flex-wrap gap-1",style:{maxHeight:"200px",width:"250px",overflowY:"auto"},children:Ht.map(a=>e.jsx("button",{className:"btn btn-sm btn-light fs-5",onClick:()=>r("insertText",a),children:a},a))})});ft.propTypes={applyStyle:n.func.isRequired};const Ut=["Arial","Georgia","Helvetica","Tahoma","Times New Roman","Verdana","Courier New"],$t={Small:"2",Normal:"3",Large:"5",Huge:"7"},Bt={"Heading 1":"<h1>","Heading 2":"<h2>","Heading 3":"<h3>","Heading 4":"<h4>","Heading 5":"<h5>",Paragraph:"<p>"},Vt={Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},Re='<button class="btn btn-danger delete-column-btn" contenteditable="false" title="Delete Columns"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>',Yt={"2 Columns (1:1)":`<div class="row">${Re}<div class="col-6"><p>Column 1</p></div><div class="col-6"><p>Column 2</p></div></div>`,"3 Columns (1:1:1)":`<div class="row">${Re}<div class="col-4"><p>C1</p></div><div class="col-4"><p>C2</p></div><div class="col-4"><p>C3</p></div></div>`,"2 Columns (1:2)":`<div class="row">${Re}<div class="col-4"><p>C1</p></div><div class="col-8"><p>C2</p></div></div>`,"2 Columns (2:1)":`<div class="row">${Re}<div class="col-8"><p>C1</p></div><div class="col-4"><p>C2</p></div></div>`},mt=({applyStyle:r,applyLineHeight:a,activeStyles:s,onOpenLinkModal:u,onImageUpload:m,onDocxUpload:p,onVideoModalOpen:g,onTableModalOpen:h,onAiRefactor:L,content:q,isGenerating:S,isAiLoadingMinimized:U})=>{const A=l.useRef(null),V=l.useRef(null),j=l.useRef(null);return l.useEffect(()=>{if(A.current&&typeof window.bootstrap<"u"){const D=[].slice.call(A.current.querySelectorAll('[data-bs-toggle="tooltip"]')).map(R=>new window.bootstrap.Tooltip(R));return()=>D.forEach(R=>R==null?void 0:R.dispose())}},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:A,className:"p-2 border-bottom d-flex flex-wrap align-items-center gap-2",children:[e.jsxs("div",{className:"btn-group",role:"group",children:[e.jsx(E,{title:"Undo (Ctrl+Z)",onClick:()=>r("undo"),children:e.jsx(i.Undo,{size:16})}),e.jsx(E,{title:"Redo (Ctrl+Y)",onClick:()=>r("redo"),children:e.jsx(i.Redo,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(ie,{title:"Headings",icon:e.jsx(i.Pilcrow,{size:14}),children:Object.entries(Bt).map(([v,D])=>e.jsx("button",{className:"dropdown-item",onClick:()=>r("formatBlock",D),children:v},v))}),e.jsx(ie,{title:"Font Family",icon:e.jsx("span",{className:"fw-bold small",style:{fontSize:"12px"},children:"Aa"}),children:Ut.map(v=>e.jsx("button",{className:"dropdown-item",style:{fontFamily:v},onClick:()=>r("fontName",v),children:v},v))}),e.jsx(ie,{title:"Font Size",icon:e.jsx(i.Type,{size:14}),children:Object.entries($t).map(([v,D])=>e.jsx("button",{className:"dropdown-item",onClick:()=>r("fontSize",D),children:v},v))}),e.jsxs(ie,{title:"Line Height",icon:e.jsx(i.ArrowDownUp,{size:14}),children:[Object.entries(Vt).map(([v,D])=>e.jsx("button",{className:"dropdown-item",style:{fontSize:"14px"},onClick:()=>a(D),children:v},v)),e.jsx("button",{className:"dropdown-item text-danger border-top border-danger mt-2",style:{fontSize:"14px"},onClick:()=>a("normal"),children:"Remove Height"})]})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(E,{title:"Bold (Ctrl+B)",command:"bold",activeStyles:s,onClick:()=>r("bold"),children:e.jsx(i.Bold,{size:14})}),e.jsx(E,{title:"Italic (Ctrl+I)",command:"italic",activeStyles:s,onClick:()=>r("italic"),children:e.jsx(i.Italic,{size:16})}),e.jsx(E,{title:"Underline (Ctrl+U)",command:"underline",activeStyles:s,onClick:()=>r("underline"),children:e.jsx(i.Underline,{size:16})}),e.jsx(E,{title:"Strikethrough",command:"strikeThrough",activeStyles:s,onClick:()=>r("strikeThrough"),children:e.jsx(i.Strikethrough,{size:16})}),e.jsx(E,{title:"Superscript",command:"superscript",activeStyles:s,onClick:()=>r("superscript"),children:e.jsx(i.Superscript,{size:16})}),e.jsx(E,{title:"Subscript",command:"subscript",activeStyles:s,onClick:()=>r("subscript"),children:e.jsx(i.Subscript,{size:16})}),e.jsx(ft,{applyStyle:r})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(Qe,{command:"foreColor",applyStyle:r}),e.jsx(Qe,{command:"backColor",applyStyle:r})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(E,{title:"Align Left",command:"justifyLeft",activeStyles:s,onClick:()=>r("justifyLeft"),children:e.jsx(i.AlignLeft,{size:16})}),e.jsx(E,{title:"Align Center",command:"justifyCenter",activeStyles:s,onClick:()=>r("justifyCenter"),children:e.jsx(i.AlignCenter,{size:16})}),e.jsx(E,{title:"Align Right",command:"justifyRight",activeStyles:s,onClick:()=>r("justifyRight"),children:e.jsx(i.AlignRight,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(E,{title:"Ordered List",command:"insertOrderedList",activeStyles:s,onClick:()=>r("insertOrderedList"),children:e.jsx(i.ListOrdered,{size:16})}),e.jsx(E,{title:"Unordered List",command:"insertUnorderedList",activeStyles:s,onClick:()=>r("insertUnorderedList"),children:e.jsx(i.List,{size:16})}),e.jsx(E,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(i.Outdent,{size:16})}),e.jsx(E,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(i.Indent,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(E,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(i.Quote,{size:16})}),e.jsx(E,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(i.Code,{size:16})}),e.jsx(E,{title:"Add/Edit Link (Ctrl+K)",onClick:u,children:e.jsx(i.Link,{size:16})}),e.jsx(E,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(i.Minus,{size:16})}),e.jsx(E,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(i.Eraser,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(E,{title:"Insert Image",onClick:()=>{var v;return(v=V.current)==null?void 0:v.click()},children:e.jsx(i.Image,{size:16})}),e.jsx(E,{title:"Insert Video",onClick:g,children:e.jsx(i.Video,{size:16})}),e.jsx(E,{title:"Insert Table",onClick:h,children:e.jsx(i.Table,{size:16})}),e.jsx(ie,{title:"Insert Columns",icon:e.jsx(i.Columns,{size:16}),children:Object.entries(Yt).map(([v,D])=>e.jsx("button",{className:"dropdown-item",style:{fontSize:"14px"},onClick:()=>r("insertHTML",D+"<p><br></p>"),children:v},v))}),e.jsx(E,{title:"Import from Word (.docx)",onClick:()=>{var v;return(v=j.current)==null?void 0:v.click()},children:e.jsx(i.FileUp,{size:16})})]}),e.jsx("div",{className:"btn-group",children:e.jsx(E,{title:"Improve with AI",onClick:L,disabled:!q||q===""||S,children:S&&!U?e.jsx("div",{className:"spinner-border spinner-border-sm",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}):e.jsx(i.Sparkles,{size:16})})})]}),e.jsx("input",{type:"file",accept:"image/*",ref:V,onChange:m,className:"d-none"}),e.jsx("input",{type:"file",accept:".docx",ref:j,onChange:p,className:"d-none"})]})};mt.propTypes={applyStyle:n.func.isRequired,applyLineHeight:n.func.isRequired,activeStyles:n.object.isRequired,onOpenLinkModal:n.func.isRequired,onImageUpload:n.func.isRequired,onDocxUpload:n.func.isRequired,onVideoModalOpen:n.func.isRequired,onTableModalOpen:n.func.isRequired,onAiRefactor:n.func.isRequired,content:n.string,isGenerating:n.bool.isRequired,isAiLoadingMinimized:n.bool.isRequired};const F=l.memo(({onClick:r,title:a,command:s,activeStyles:u,disabled:m=!1,children:p,className:g=""})=>e.jsx("button",{type:"button",onClick:r,onMouseDown:h=>h.preventDefault(),className:`modern-toolbar-button ${u&&u.has(s)?"active":""} ${g}`,title:a,disabled:m,children:p}));F.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,command:n.string,activeStyles:n.object,disabled:n.bool,children:n.node.isRequired,className:n.string},F.displayName="ModernToolbarButton";const de=({title:r,icon:a,children:s})=>{const[u,m]=l.useState(!1),p=l.useRef(null);return l.useEffect(()=>{const g=h=>{p.current&&!p.current.contains(h.target)&&m(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),e.jsxs("div",{className:"modern-dropdown",ref:p,children:[e.jsxs("button",{type:"button",title:r,onClick:()=>m(!u),onMouseDown:g=>g.preventDefault(),className:"modern-toolbar-button","aria-expanded":u,children:[a,e.jsx(i.ChevronDown,{size:14,style:{marginLeft:"4px"}})]}),e.jsx("div",{className:`modern-dropdown-menu ${u?"show":""}`,onClick:()=>m(!1),children:s})]})};de.propTypes={title:n.string.isRequired,icon:n.node.isRequired,children:n.node.isRequired};const Wt=["#000000","#444444","#666666","#999999","#CCCCCC","#FFFFFF","#FF0000","#FF9900","#FFFF00","#00FF00","#00FFFF","#0000FF","#9900FF","#FF00FF","#CC0000","#CC6600","#CCCC00","#00CC00","#00CCCC","#0000CC","#6600CC","#CC00CC"],Ze=({command:r,applyStyle:a})=>{const s=r==="foreColor"?"Text Color":"Highlight Color",u=r==="foreColor"?e.jsx(i.Palette,{size:26}):e.jsx(i.Highlighter,{size:26});return e.jsx(de,{title:s,icon:u,children:e.jsx("div",{className:"modern-color-picker",children:Wt.map(m=>e.jsx("button",{type:"button",className:"modern-color-swatch",style:{backgroundColor:m},onClick:()=>a(r,m),"aria-label":m},m))})})};Ze.propTypes={command:n.oneOf(["foreColor","backColor"]).isRequired,applyStyle:n.func.isRequired};const Gt=["💻","🚀","💡","🤖","🌐","⚙️","🔧","🔬","🧪","📈","📊","📝","✅","❌","⚠️","❓","❗","❤️","👍","👎","🎉","🔥","💯","👋"],pt=({applyStyle:r})=>e.jsx(de,{title:"Insert Emoji",icon:e.jsx(i.Smile,{size:26}),children:e.jsx("div",{className:"modern-emoji-picker",children:Gt.map(a=>e.jsx("button",{type:"button",className:"modern-emoji",onClick:()=>r("insertText",a),children:a},a))})});pt.propTypes={applyStyle:n.func.isRequired};const Kt=["Arial","Georgia","Helvetica","Tahoma","Times New Roman","Verdana","Courier New"],Xt={"Heading 1":"<h1>","Heading 2":"<h2>","Heading 3":"<h3>","Heading 4":"<h4>","Heading 5":"<h5>",Paragraph:"<p>"},Jt={Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},He='<button class="btn btn-danger delete-column-btn" contenteditable="false" title="Delete Columns"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>',Qt={"2 Columns (1:1)":`<div class="row">${He}<div class="col-6"><p>Column 1</p></div><div class="col-6"><p>Column 2</p></div></div>`,"3 Columns (1:1:1)":`<div class="row">${He}<div class="col-4"><p>C1</p></div><div class="col-4"><p>C2</p></div><div class="col-4"><p>C3</p></div></div>`,"2 Columns (1:2)":`<div class="row">${He}<div class="col-4"><p>C1</p></div><div class="col-8"><p>C2</p></div></div>`,"2 Columns (2:1)":`<div class="row">${He}<div class="col-8"><p>C1</p></div><div class="col-4"><p>C2</p></div></div>`},bt=({applyStyle:r,applyLineHeight:a,activeStyles:s,onOpenLinkModal:u,onImageUpload:m,onDocxUpload:p,onVideoModalOpen:g,onTableModalOpen:h,onAiRefactor:L,content:q,isGenerating:S,isAiLoadingMinimized:U})=>{const A=l.useRef(null),V=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .modern-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.toolbar-separator {
  width: 1px;
  height: 24px;
  margin: 0 8px;
  transition: background-color 0.3s ease;
}

/* Base Button Styling */
.modern-toolbar-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 36px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  position: relative;
}

.modern-toolbar-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/*
 * Enhanced styling for the AI Sparkles Button (V2 - No SVG edit required)
 */

/* Keyframes for a more noticeable pulsing glow animation */
@keyframes pulse-glow {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 4px rgba(0, 230, 230, 0.7));
  }
  50% {
    transform: scale(1.15);
    filter: drop-shadow(0 0 10px rgba(128, 255, 255, 1))
      drop-shadow(0 0 20px rgba(128, 255, 255, 0.7));
  }
}

/* Base style for the AI button */
.modern-ai-button {
  border: 1px solid rgba(0, 230, 230, 0.3);
  background: linear-gradient(45deg, #2a2a72, #009ffd);
  overflow: hidden; /* Ensures effects don't bleed out */
}

/* Target the SVG icon inside the button */
.modern-ai-button svg {
  /* Set a single, vibrant color for the icon */
  color: #cceeff;

  /* Apply the new pulse animation */
  animation: pulse-glow 2.5s infinite ease-in-out;
  transition: all 0.3s ease-in-out;
}

/* On hover, make the effect more intense and responsive */
.modern-ai-button:hover:not(:disabled) svg {
  animation-play-state: paused; /* Pause animation to show a static bright state */
  transform: scale(1.2);
  color: #ffffff; /* Make it pure white on hover */
  filter: drop-shadow(0 0 6px #ffffff)
    drop-shadow(0 0 12px rgba(128, 255, 255, 1));
}

.modern-ai-button .spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Dropdown Styling */
.modern-dropdown {
  position: relative;
}

.modern-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  border-radius: 8px;
  padding: 8px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.modern-dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.modern-dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

/* Color Picker */
.modern-color-picker {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  width: 180px;
  padding: 4px;
}

.modern-color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.modern-color-swatch:hover {
  transform: scale(1.15);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}

/* Emoji Picker */
.modern-emoji-picker {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
  width: 220px;
}

.modern-emoji {
  font-size: 20px;
  background: none;
  border: none;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

/* --- LIGHT THEME --- */
.modern-toolbar {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}

.toolbar-separator {
  background-color: #e0e0e0;
}

.modern-toolbar-button {
  background-color: transparent;
  color: #5f6368;
}

.modern-toolbar-button:hover:not(:disabled) {
  background-color: #f1f3f4;
}

/* STYLING FOR THE ACTIVE BUTTON */
.modern-toolbar-button.active {
  background-color: #e8f0fe;
  color: #1967d2;
}

/* STYLING FOR THE ACTIVE BUTTON */
.modern-toolbar-button:hover {
  color: #1967d2;
}

.modern-dropdown-menu {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}

.modern-dropdown-item {
  font-size: 16px;
  color: #3c4043;
}

.modern-dropdown-item:hover {
  background-color: #f1f3f4;
}

.modern-emoji:hover {
  background-color: #f1f3f4;
}

    `}),e.jsxs("div",{className:"modern-toolbar",children:[e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Undo (Ctrl+Z)",onClick:()=>r("undo"),children:e.jsx(i.Undo,{size:18})}),e.jsx(F,{title:"Redo (Ctrl+Y)",onClick:()=>r("redo"),children:e.jsx(i.Redo,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(de,{title:"Headings",icon:e.jsx(i.Pilcrow,{size:26}),children:Object.entries(Xt).map(([j,v])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("formatBlock",v),children:j},j))}),e.jsx(de,{title:"Font Family",icon:e.jsx(i.Type,{size:26}),children:Kt.map(j=>e.jsx("button",{className:"modern-dropdown-item",style:{fontFamily:j},onClick:()=>r("fontName",j),children:j},j))}),e.jsx(de,{title:"Line Height",icon:e.jsx(i.ArrowDownUp,{size:26}),children:Object.entries(Jt).map(([j,v])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>a(v),children:j},j))})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Bold (Ctrl+B)",command:"bold",activeStyles:s,onClick:()=>r("bold"),children:e.jsx(i.Bold,{size:18})}),e.jsx(F,{title:"Italic (Ctrl+I)",command:"italic",activeStyles:s,onClick:()=>r("italic"),children:e.jsx(i.Italic,{size:18})}),e.jsx(F,{title:"Underline (Ctrl+U)",command:"underline",activeStyles:s,onClick:()=>r("underline"),children:e.jsx(i.Underline,{size:18})}),e.jsx(F,{title:"Strikethrough",command:"strikeThrough",activeStyles:s,onClick:()=>r("strikeThrough"),children:e.jsx(i.Strikethrough,{size:18})}),e.jsx(F,{title:"Superscript",command:"superscript",activeStyles:s,onClick:()=>r("superscript"),children:e.jsx(i.Superscript,{size:18})}),e.jsx(F,{title:"Subscript",command:"subscript",activeStyles:s,onClick:()=>r("subscript"),children:e.jsx(i.Subscript,{size:18})}),e.jsx(pt,{applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(Ze,{command:"foreColor",applyStyle:r}),e.jsx(Ze,{command:"backColor",applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Align Left",command:"justifyLeft",activeStyles:s,onClick:()=>r("justifyLeft"),children:e.jsx(i.AlignLeft,{size:18})}),e.jsx(F,{title:"Align Center",command:"justifyCenter",activeStyles:s,onClick:()=>r("justifyCenter"),children:e.jsx(i.AlignCenter,{size:18})}),e.jsx(F,{title:"Align Right",command:"justifyRight",activeStyles:s,onClick:()=>r("justifyRight"),children:e.jsx(i.AlignRight,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Ordered List",command:"insertOrderedList",activeStyles:s,onClick:()=>r("insertOrderedList"),children:e.jsx(i.ListOrdered,{size:18})}),e.jsx(F,{title:"Unordered List",command:"insertUnorderedList",activeStyles:s,onClick:()=>r("insertUnorderedList"),children:e.jsx(i.List,{size:18})}),e.jsx(F,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(i.Outdent,{size:18})}),e.jsx(F,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(i.Indent,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(i.Quote,{size:18})}),e.jsx(F,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(i.Code,{size:18})}),e.jsx(F,{title:"Add/Edit Link (Ctrl+K)",onClick:u,children:e.jsx(i.Link,{size:18})}),e.jsx(F,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(i.Minus,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Insert Image",onClick:()=>{var j;return(j=A.current)==null?void 0:j.click()},children:e.jsx(i.Image,{size:18})}),e.jsx(F,{title:"Insert Video",onClick:g,children:e.jsx(i.Video,{size:20})}),e.jsx(F,{title:"Insert Table",onClick:h,children:e.jsx(i.Table,{size:18})}),e.jsx(de,{title:"Insert Columns",icon:e.jsx(i.Columns,{size:26}),children:Object.entries(Qt).map(([j,v])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("insertHTML",v+"<p><br></p>"),children:j},j))}),e.jsx(F,{title:"Import from Word (.docx)",onClick:()=>{var j;return(j=V.current)==null?void 0:j.click()},children:e.jsx(i.FileUp,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(F,{title:"Improve with AI",onClick:L,disabled:!q||q===""||S,className:"modern-ai-button",children:S&&!U?e.jsx("div",{className:"spinner"}):e.jsx(i.Sparkles,{size:20})}),e.jsx(F,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(i.Eraser,{size:18})})]})]}),e.jsx("input",{type:"file",accept:"image/*",ref:A,onChange:m,style:{display:"none"}}),e.jsx("input",{type:"file",accept:".docx",ref:V,onChange:p,style:{display:"none"}})]})};bt.propTypes={applyStyle:n.func.isRequired,applyLineHeight:n.func.isRequired,activeStyles:n.object.isRequired,onOpenLinkModal:n.func.isRequired,onImageUpload:n.func.isRequired,onDocxUpload:n.func.isRequired,onVideoModalOpen:n.func.isRequired,onTableModalOpen:n.func.isRequired,onAiRefactor:n.func.isRequired,content:n.string,isGenerating:n.bool.isRequired,isAiLoadingMinimized:n.bool.isRequired};const O=l.memo(({onClick:r,title:a,cmd:s,active:u,disabled:m=!1,children:p,className:g=""})=>e.jsx("button",{type:"button",onClick:r,onMouseDown:h=>h.preventDefault(),className:`futuristic-button ${u&&u.has(s)?"active":""} ${g}`,title:a,disabled:m,children:e.jsx("span",{className:"button-content",children:p})}));O.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,cmd:n.string,active:n.object,disabled:n.bool,children:n.node.isRequired,className:n.string},O.displayName="FuturisticToolbarButton";const ce=({title:r,icon:a,children:s})=>{const[u,m]=l.useState(!1),p=l.useRef(null);return l.useEffect(()=>{const g=h=>{p.current&&!p.current.contains(h.target)&&m(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),e.jsxs("div",{className:"futuristic-dropdown",ref:p,children:[e.jsx("button",{type:"button",title:r,onClick:()=>m(!u),onMouseDown:g=>g.preventDefault(),className:"futuristic-button","aria-expanded":u,children:e.jsxs("span",{className:"button-content",children:[a,e.jsx(i.ChevronDown,{size:16,className:`chevron-icon ${u?"open":""}`})]})}),e.jsx("div",{className:`futuristic-dropdown-menu ${u?"show":""}`,onClick:()=>m(!1),children:s})]})};ce.propTypes={title:n.string.isRequired,icon:n.node.isRequired,children:n.node.isRequired};const Zt=["#FF00FF","#00FFFF","#FFFF00","#FF007F","#00FF7F","#FFFFFF","#C0C0C0","#808080","#404040","#000000","#FF0000","#00FF00","#0000FF","#800080","#FFA500"],Pe=({command:r,applyStyle:a})=>{const s=r==="foreColor"?"Text Color":"Highlight Color",u=r==="foreColor"?e.jsx(i.Palette,{size:18}):e.jsx(i.Highlighter,{size:18});return e.jsx(ce,{title:s,icon:u,children:e.jsx("div",{className:"futuristic-color-picker",children:Zt.map(m=>e.jsx("button",{type:"button",className:"color-swatch-hexagon",onClick:()=>a(r,m),"aria-label":m,children:e.jsx("div",{className:"hexagon-inner",style:{backgroundColor:m}})},m))})})};Pe.propTypes={command:n.oneOf(["foreColor","backColor"]).isRequired,applyStyle:n.func.isRequired};const Pt=["🚀","💡","🤖","⚡","✨","🌌","🛰️","🛸","👽","🧬","🧪","🧑‍🚀"],ht=({applyStyle:r})=>e.jsx(ce,{title:"Insert Emoji",icon:e.jsx(i.Smile,{size:18}),children:e.jsx("div",{className:"futuristic-emoji-picker",children:Pt.map(a=>e.jsx("button",{type:"button",className:"futuristic-emoji",onClick:()=>r("insertText",a),children:a},a))})});ht.propTypes={applyStyle:n.func.isRequired};const er=["Arial","Georgia","Verdana","Courier New"],tr={H1:"<h1>",H2:"<h2>",H3:"<h3>",Paragraph:"<p>"},rr={Single:"1",1.5:"1.5",Double:"2"},et='<button class="btn btn-danger delete-column-btn" contenteditable="false" title="Delete Columns"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>',nr={"1:1":`<div class="row">${et}<div class="col-6"><p>C1</p></div><div class="col-6"><p>C2</p></div></div>`,"1:1:1":`<div class="row">${et}<div class="col-4"><p>C1</p></div><div class="col-4"><p>C2</p></div><div class="col-4"><p>C3</p></div></div>`,"1:2":`<div class="row">${et}<div class="col-4"><p>C1</p></div><div class="col-8"><p>C2</p></div></div>`},gt=({applyStyle:r,applyLineHeight:a,activeStyles:s,onOpenLinkModal:u,onImageUpload:m,onDocxUpload:p,onVideoModalOpen:g,onTableModalOpen:h,onAiRefactor:L,content:q,isGenerating:S,isAiLoadingMinimized:U})=>{const A=l.useRef(null),V=l.useRef(null),j=l.useRef(null),[v,D]=l.useState({x:50,y:50}),[R,T]=l.useState(!1),re=l.useRef({x:0,y:0}),Se=w=>{w.button===0&&(T(!0),re.current={x:w.clientX-v.x,y:w.clientY-v.y},w.preventDefault())};return l.useEffect(()=>{const w=oe=>{R&&D({x:oe.clientX-re.current.x,y:oe.clientY-re.current.y})},$=()=>T(!1);return window.addEventListener("mousemove",w),window.addEventListener("mouseup",$),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",$)}},[R]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      @property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

:root {
  --bg-color: rgba(10, 10, 20, 0.6);
  --border-color: rgba(138, 43, 226, 0.4);
  --glow-color: #00ffff;
  --text-color: #e0e0e0;
  --active-bg: rgba(0, 255, 255, 0.15);
  --hover-bg: rgba(255, 255, 255, 0.1);
  --gradient: conic-gradient(
    from var(--angle),
    #ff00ff,
    #00ffff,
    #ffff00,
    #ff00ff
  );
  --animation-speed: 0.3s;
}

/* The main floating toolbar */
.futuristic-toolbar {
  position: fixed;
  display: flex;
  align-items: stretch;
  padding: 6px;
  background: var(--bg-color);
  backdrop-filter: blur(12px) saturate(180%);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1),
    inset 0 0 5px rgba(138, 43, 226, 0.2);
  z-index: 2000;
  color: var(--text-color);
  transition: box-shadow var(--animation-speed) ease;
}

.futuristic-toolbar:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2),
    inset 0 0 10px rgba(138, 43, 226, 0.3);
}

.toolbar-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

/* Drag Handle */
.drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
  margin-right: 8px;
  border-right: 1px solid var(--border-color);
  cursor: grab;
  color: var(--glow-color);
  opacity: 0.6;
  transition: opacity var(--animation-speed) ease,
    color var(--animation-speed) ease;
}
.drag-handle:hover {
  opacity: 1;
}
.drag-handle:active {
  cursor: grabbing;
  color: white;
}

.toolbar-group {
  display: flex;
  gap: 4px;
}
.toolbar-separator {
  width: 1px;
  background: var(--border-color);
  margin: 0 6px;
}

/* Base Button Style */
.futuristic-button {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-color);
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background var(--animation-speed) ease,
    color var(--animation-speed) ease, border-color var(--animation-speed) ease;
}
.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  z-index: 2;
}

/* Hover/Active States */
.futuristic-button:hover:not(:disabled) {
  background: var(--hover-bg);
  color: white;
}
.futuristic-button.active {
  background: var(--active-bg);
  color: var(--glow-color);
  text-shadow: 0 0 5px var(--glow-color);
}

/* AI Button has a special animated gradient border */
.ai-button {
  border: 1px solid transparent;
  background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
    var(--gradient) border-box;
  animation: spin-gradient 5s linear infinite;
}
@keyframes spin-gradient {
  to {
    --angle: 360deg;
  }
}

/* Dropdown Menu */
.futuristic-dropdown {
  position: relative;
}
.futuristic-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: var(--bg-color);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px;
  z-index: 1001;
  width: max-content;
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.95);
  transform-origin: top left;
  transition: all var(--animation-speed) cubic-bezier(0.16, 1, 0.3, 1);
}
.futuristic-dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}
.futuristic-dropdown-item {
  background: none;
  border: none;
  color: var(--text-color);
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;
  transition: background var(--animation-speed) ease,
    color var(--animation-speed) ease;
}
.futuristic-dropdown-item:hover {
  background: var(--hover-bg);
  color: white;
}
.chevron-icon {
  transition: transform var(--animation-speed) ease;
}
.chevron-icon.open {
  transform: rotate(180deg);
}

/* Hexagonal Color Picker */
.futuristic-color-picker {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 4px;
  width: 160px;
}
.color-swatch-hexagon {
  width: 30px;
  height: 34.64px; /* height = width * sqrt(3) / 2 * 2 */
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform var(--animation-speed) ease;
}
.color-swatch-hexagon:hover {
  transform: scale(1.15) rotate(10deg);
}
.hexagon-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Emoji Picker */
.futuristic-emoji-picker {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.futuristic-emoji {
  font-size: 24px;
  background: none;
  border: none;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background var(--animation-speed) ease,
    transform var(--animation-speed) ease;
}
.futuristic-emoji:hover {
  background: var(--hover-bg);
  transform: scale(1.2);
}

      `}),e.jsxs("div",{ref:j,className:`futuristic-toolbar ${R?"is-dragging":""}`,style:{top:`${v.y}px`,left:`${v.x}px`},children:[e.jsx("div",{className:"drag-handle",onMouseDown:Se,title:"Drag Toolbar",children:e.jsx(i.GripVertical,{size:20})}),e.jsxs("div",{className:"toolbar-content",children:[e.jsxs("div",{className:"toolbar-group",children:[e.jsx(O,{title:"Undo",onClick:()=>r("undo"),children:e.jsx(i.Undo,{size:18})}),e.jsx(O,{title:"Redo",onClick:()=>r("redo"),children:e.jsx(i.Redo,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(ce,{title:"Headings",icon:e.jsx(i.Pilcrow,{size:18}),children:Object.entries(tr).map(([w,$])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>r("formatBlock",$),children:w},w))}),e.jsx(ce,{title:"Font",icon:e.jsx(i.Type,{size:18}),children:er.map(w=>e.jsx("button",{className:"futuristic-dropdown-item",style:{fontFamily:w},onClick:()=>r("fontName",w),children:w},w))}),e.jsx(ce,{title:"Line Height",icon:e.jsx(i.ArrowDownUp,{size:18}),children:Object.entries(rr).map(([w,$])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>a($),children:w},w))})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(O,{title:"Bold",cmd:"bold",active:s,onClick:()=>r("bold"),children:e.jsx(i.Bold,{size:18})}),e.jsx(O,{title:"Italic",cmd:"italic",active:s,onClick:()=>r("italic"),children:e.jsx(i.Italic,{size:18})}),e.jsx(O,{title:"Underline",cmd:"underline",active:s,onClick:()=>r("underline"),children:e.jsx(i.Underline,{size:18})}),e.jsx(O,{title:"Strikethrough",cmd:"strikeThrough",active:s,onClick:()=>r("strikeThrough"),children:e.jsx(i.Strikethrough,{size:18})}),e.jsx(O,{title:"Superscript",cmd:"superscript",active:s,onClick:()=>r("superscript"),children:e.jsx(i.Superscript,{size:18})}),e.jsx(O,{title:"Subscript",cmd:"subscript",active:s,onClick:()=>r("subscript"),children:e.jsx(i.Subscript,{size:18})}),e.jsx(Pe,{command:"foreColor",applyStyle:r}),e.jsx(Pe,{command:"backColor",applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(O,{title:"Align Left",cmd:"justifyLeft",active:s,onClick:()=>r("justifyLeft"),children:e.jsx(i.AlignLeft,{size:18})}),e.jsx(O,{title:"Align Center",cmd:"justifyCenter",active:s,onClick:()=>r("justifyCenter"),children:e.jsx(i.AlignCenter,{size:18})}),e.jsx(O,{title:"Align Right",cmd:"justifyRight",active:s,onClick:()=>r("justifyRight"),children:e.jsx(i.AlignRight,{size:18})}),e.jsx(O,{title:"Ordered List",cmd:"insertOrderedList",active:s,onClick:()=>r("insertOrderedList"),children:e.jsx(i.ListOrdered,{size:18})}),e.jsx(O,{title:"Unordered List",cmd:"insertUnorderedList",active:s,onClick:()=>r("insertUnorderedList"),children:e.jsx(i.List,{size:18})}),e.jsx(O,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(i.Outdent,{size:18})}),e.jsx(O,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(i.Indent,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(O,{title:"Add/Edit Link",onClick:u,children:e.jsx(i.Link,{size:18})}),e.jsx(O,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(i.Quote,{size:18})}),e.jsx(O,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(i.Code,{size:18})}),e.jsx(O,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(i.Minus,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(O,{title:"Insert Image",onClick:()=>{var w;return(w=A.current)==null?void 0:w.click()},children:e.jsx(i.Image,{size:18})}),e.jsx(O,{title:"Insert Video",onClick:g,children:e.jsx(i.Video,{size:18})}),e.jsx(O,{title:"Insert Table",onClick:h,children:e.jsx(i.Table,{size:18})}),e.jsx(ce,{title:"Insert Columns",icon:e.jsx(i.Columns,{size:18}),children:Object.entries(nr).map(([w,$])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>r("insertHTML",$+"<p><br></p>"),children:w},w))}),e.jsx(O,{title:"Import from Word",onClick:()=>{var w;return(w=V.current)==null?void 0:w.click()},children:e.jsx(i.FileUp,{size:18})}),e.jsx(ht,{applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(O,{title:"Improve with AI",onClick:L,disabled:!q||S,className:"ai-button",children:S?e.jsx("div",{className:"spinner"}):e.jsx(i.Sparkles,{size:18})}),e.jsx(O,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(i.Eraser,{size:18})})]})]})]}),e.jsx("input",{type:"file",accept:"image/*",ref:A,onChange:m,style:{display:"none"}}),e.jsx("input",{type:"file",accept:".docx",ref:V,onChange:p,style:{display:"none"}})]})};gt.propTypes={applyStyle:n.func.isRequired,activeStyles:n.object.isRequired,applyLineHeight:n.func.isRequired,onOpenLinkModal:n.func.isRequired,onImageUpload:n.func.isRequired,onDocxUpload:n.func.isRequired,onVideoModalOpen:n.func.isRequired,onTableModalOpen:n.func.isRequired,onAiRefactor:n.func.isRequired,content:n.string,isGenerating:n.bool.isRequired,isAiLoadingMinimized:n.bool.isRequired};const xt=({theme:r,...a})=>r==="modern"?e.jsx(bt,{...a}):r==="futuristic"?e.jsx(gt,{...a}):e.jsx(mt,{...a});xt.propTypes={theme:n.oneOf(["classic","modern","futuristic"])};const vt=({editorRef:r,content:a,showSource:s,onContentChange:u,onKeyDown:m,textContentClass:p})=>s?e.jsx("textarea",{value:a||"",onChange:u,className:"form-control rounded-0 border-0 h-100 p-3 font-monospace small bg-dark text-light",style:{minHeight:"60vh",resize:"none"}}):e.jsx("div",{ref:r,contentEditable:!0,suppressContentEditableWarning:!0,className:`editor-content form-control rounded-0 border-0 h-100 p-3 ${p}`,style:{minHeight:"60vh"},onInput:u,onKeyDown:m});vt.propTypes={editorRef:n.object.isRequired,content:n.string,showSource:n.bool.isRequired,onContentChange:n.func.isRequired,onKeyDown:n.func.isRequired,textContentClass:n.string};const Le=({children:r,onClose:a,title:s,icon:u,size:m="modal-dialog-centered"})=>e.jsx("div",{className:"modal fade show",style:{display:"block",backgroundColor:"rgba(0,0,0,0.5)"},onClick:a,children:e.jsx("div",{className:`modal-dialog ${m}`,onClick:p=>p.stopPropagation(),children:e.jsxs("div",{className:"modal-content border-0 shadow-lg",children:[e.jsxs("div",{className:"modal-header bg-light border-0",children:[e.jsxs("h5",{className:"modal-title d-flex align-items-center gap-2",children:[u,s]}),e.jsx("button",{type:"button",className:"btn-close",onClick:a})]}),r]})})});Le.propTypes={children:n.node.isRequired,onClose:n.func.isRequired,title:n.string.isRequired,icon:n.node,size:n.string};const jt=({isOpen:r,onClose:a,onApply:s,initialData:u,isEditing:m})=>{const[p,g]=l.useState({text:"",href:""});return l.useEffect(()=>{r&&g(u)},[r,u]),r?e.jsxs(Le,{onClose:a,title:m?"Edit Link":"Add Link",icon:e.jsx(i.Link,{size:20,className:"text-primary"}),children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Link Text"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:e.jsx(i.Pilcrow,{size:16})}),e.jsx("input",{type:"text",className:"form-control",value:p.text,onChange:h=>g({...p,text:h.target.value})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label fw-semibold",children:"Link URL"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:e.jsx(i.ExternalLink,{size:16})}),e.jsx("input",{type:"url",className:"form-control",value:p.href,onChange:h=>g({...p,href:h.target.value}),placeholder:"https://example.com",autoFocus:!0})]})]})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:()=>s(p),children:"Apply Link"})]})]}):null};jt.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onApply:n.func.isRequired,initialData:n.shape({text:n.string,href:n.string}).isRequired,isEditing:n.bool.isRequired};const Ct=({isOpen:r,onClose:a,onInsert:s})=>{const[u,m]=l.useState("");if(!r)return null;const p=()=>{s(u),m("")};return e.jsxs(Le,{onClose:a,title:"Insert Video",icon:e.jsx(i.Video,{size:20,className:"text-primary"}),children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Video URL"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:e.jsx(i.Link,{size:16})}),e.jsx("input",{type:"url",className:"form-control",value:u,onChange:g=>m(g.target.value),placeholder:"e.g., https://www.youtube.com/watch?v=...",autoFocus:!0})]}),e.jsx("div",{className:"form-text video-modal-title",children:"Supports YouTube and Vimeo links."})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:p,children:"Insert Video"})]})]})};Ct.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onInsert:n.func.isRequired};const kt=({isOpen:r,onClose:a,onCreate:s})=>{const[u,m]=l.useState({rows:3,cols:3});return r?e.jsxs(Le,{onClose:a,title:"Create Table",icon:e.jsx(i.Table,{size:20,className:"text-primary"}),children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Rows"}),e.jsx("input",{type:"number",className:"form-control",value:u.rows,min:"1",onChange:p=>m({...u,rows:parseInt(p.target.value,10)||1})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label fw-semibold",children:"Columns"}),e.jsx("input",{type:"number",className:"form-control",value:u.cols,min:"1",onChange:p=>m({...u,cols:parseInt(p.target.value,10)||1})})]})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:()=>s(u),children:"Create"})]})]}):null};kt.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onCreate:n.func.isRequired};const wt=({status:r,isMinimized:a,onMinimizeToggle:s})=>a?e.jsxs("div",{className:"ai-loading-popup-minimized",children:[e.jsx("div",{className:"spinner-border spinner-border-sm text-primary",role:"status"}),e.jsx("span",{className:"ms-2 small",children:"AI is working..."}),e.jsx("button",{onClick:s,className:"btn btn-sm btn-light ms-auto",children:e.jsx(i.ChevronsDownUp,{size:14})})]}):e.jsxs("div",{className:"ai-loading-popup",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("h6",{className:"mb-0 d-flex align-items-center gap-2",children:[e.jsx(i.Sparkles,{size:18,className:"text-primary"}),"AI Assistant"]}),e.jsx("button",{onClick:s,className:"btn btn-sm btn-light",children:e.jsx(i.Minimize,{size:14})})]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"spinner-border text-primary me-3",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 fw-bold",children:"Working on it..."}),e.jsx("p",{className:"mb-0 text-muted small",children:r})]})]})]});wt.propTypes={status:n.string.isRequired,isMinimized:n.bool.isRequired,onMinimizeToggle:n.func.isRequired};const Nt=({isOpen:r,onClose:a,onApply:s,originalContent:u,suggestion:m,highlightedDiff:p})=>r?e.jsxs(Le,{onClose:a,title:"AI Content Suggestion",icon:e.jsx(i.Sparkles,{size:20,className:"text-primary"}),size:"modal-xl",children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("ul",{className:"nav nav-tabs mb-3",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link active",id:"preview-tab","data-bs-toggle":"tab","data-bs-target":"#preview-pane",type:"button",role:"tab","aria-controls":"preview-pane","aria-selected":"true",children:"Preview Changes"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link",id:"diff-tab","data-bs-toggle":"tab","data-bs-target":"#diff-pane",type:"button",role:"tab","aria-controls":"diff-pane","aria-selected":"false",children:"Highlight Changes"})})]}),e.jsxs("div",{className:"tab-content",children:[e.jsx("div",{className:"tab-pane fade show active",id:"preview-pane",role:"tabpanel","aria-labelledby":"preview-tab",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h6",{className:"mb-2 text-muted",children:"Original Content"}),e.jsx("div",{className:"ai-preview-pane",dangerouslySetInnerHTML:{__html:u}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h6",{className:"mb-2 text-success",children:"AI Suggestion"}),e.jsx("div",{className:"ai-preview-pane",dangerouslySetInnerHTML:{__html:m}})]})]})}),e.jsxs("div",{className:"tab-pane fade",id:"diff-pane",role:"tabpanel","aria-labelledby":"diff-tab",children:[e.jsx("h6",{className:"mb-2 text-primary",children:"Highlighted Differences"}),e.jsxs("p",{className:"small text-muted",children:[e.jsx("span",{className:"px-2 py-1 me-2 rounded",style:{backgroundColor:"#d4edda"},children:"Added content"}),e.jsx("span",{className:"px-2 py-1 rounded",style:{backgroundColor:"#f8d7da"},children:"Removed content"})]}),e.jsx("div",{className:"ai-preview-pane",dangerouslySetInnerHTML:{__html:p}})]})]})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:a,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:s,children:"Apply Suggestion"})]})]}):null;Nt.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onApply:n.func.isRequired,originalContent:n.string,suggestion:n.string,highlightedDiff:n.string};const Ue=l.memo(({onClick:r,title:a,command:s,activeStyles:u,disabled:m=!1,children:p})=>e.jsx("button",{type:"button",onClick:r,onMouseDown:g=>g.preventDefault(),className:`btn btn-outline-secondary ${u&&u.has(s)?"active":""}`,"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:a,disabled:m,children:p}));Ue.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,command:n.string,activeStyles:n.object,disabled:n.bool,children:n.node.isRequired},Ue.displayName="StatusToolbarButton";const Et=({wordCount:r,charCount:a,onToggleSource:s,showSource:u,onToggleFullScreen:m,isFullScreen:p,trialExpiresIn:g})=>e.jsxs("div",{className:"flex-shrink-0 p-2 border-top bg-light d-flex justify-content-between align-items-center small text-muted",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"footer-text-area",children:["Words: ",r]}),e.jsx("span",{className:"mx-2",children:"|"}),e.jsxs("span",{className:"footer-text-area",children:["Characters: ",a]})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(Ue,{title:"View HTML Source",onClick:s,children:e.jsx(i.CodeXml,{size:16})}),e.jsx(Ue,{title:p?"Exit Full Screen":"Full Screen",onClick:m,children:p?e.jsx(i.Minimize,{size:16}):e.jsx(i.Maximize,{size:16})})]})]});Et.propTypes={wordCount:n.number.isRequired,charCount:n.number.isRequired,onToggleSource:n.func.isRequired,showSource:n.bool.isRequired,onToggleFullScreen:n.func.isRequired,isFullScreen:n.bool.isRequired,isPremium:n.bool};const Ft=({wordCount:r,charCount:a,onToggleSource:s,isFullScreen:u,onToggleFullScreen:m})=>{const[p,g]=l.useState(!1);return l.useEffect(()=>{const h=setTimeout(()=>g(!0),100);return()=>clearTimeout(h)},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      /* FUTURISTIC STATUS BAR V2 STYLES */

.futuristic-statusbar-v2 {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;

  z-index: 1999;
  font-family: "Orbitron", "Segoe UI", sans-serif;

  /* Glassmorphism & Base Style */
  background: rgba(15, 15, 25, 0.5);
  backdrop-filter: blur(16px) saturate(200%);
  color: var(--text-color, #e0e0e0);
  border: 1px solid var(--border-color, rgba(138, 43, 226, 0.4));
  border-radius: 12px;
  overflow: hidden;

  /* Boot-up Animation */
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.futuristic-statusbar-v2.is-booted {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Animated Grid Background */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      var(--glow-color, #00ffff) 1px,
      transparent 1px
    ),
    linear-gradient(to right, var(--glow-color, #00ffff) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.05;
  animation: move-grid 20s linear infinite;
  z-index: 1;
}

@keyframes move-grid {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 40px;
  }
}

/* Main Content Wrapper */
.statusbar-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  z-index: 2;
}

/* Decorative Corner Brackets */
.corner-bracket {
  position: absolute;
  width: 20px;
  height: 20px;
  border-style: solid;
  border-color: var(--glow-color, #00ffff);
  opacity: 0;
  transition: opacity 1s ease 0.5s; /* Fade in after boot */
}
.futuristic-statusbar-v2.is-booted .corner-bracket {
  opacity: 0.5;
}
.corner-bracket.top-left {
  top: -2px;
  left: -2px;
  border-width: 2px 0 0 2px;
  border-radius: 8px 0 0 0;
}
.corner-bracket.top-right {
  top: -2px;
  right: -2px;
  border-width: 2px 2px 0 0;
  border-radius: 0 8px 0 0;
}
.corner-bracket.bottom-left {
  bottom: -2px;
  left: -2px;
  border-width: 0 0 2px 2px;
  border-radius: 0 0 0 8px;
}
.corner-bracket.bottom-right {
  bottom: -2px;
  right: -2px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 8px 0;
}

/* Data Readout Styling */
.status-group-v2 {
  display: flex;
  align-items: center;
  gap: 24px;
}

.data-readout {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #aab5c3;
}

.data-icon {
  color: var(--glow-color, #00ffff);
  filter: drop-shadow(0 0 3px var(--glow-color, #00ffff));
}

.data-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  opacity: 0.6;
}

.data-value {
  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 5px var(--glow-color, #00ffff);
}

/* Action Button Styling */
.action-button {
  background: transparent;
  border: 1px solid transparent;
  color: #aab5c3;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.action-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  border: 1px solid var(--border-color, rgba(138, 43, 226, 0.4));
  transition: all 0.3s ease;
}

.action-button:hover {
  color: white;
}

.action-button:hover::before {
  transform: scale(1.2);
  opacity: 0;
}

.action-button:active {
  transform: scale(0.9);
}

      `}),e.jsxs("div",{className:`futuristic-statusbar-v2 ${p?"is-booted":""}`,children:[e.jsx("div",{className:"corner-bracket top-left"}),e.jsx("div",{className:"corner-bracket top-right"}),e.jsx("div",{className:"corner-bracket bottom-left"}),e.jsx("div",{className:"corner-bracket bottom-right"}),e.jsx("div",{className:"grid-background"}),e.jsxs("div",{className:"statusbar-content",children:[e.jsxs("div",{className:"status-group-v2",children:[e.jsxs("div",{className:"data-readout",title:"Word Count",children:[e.jsx(i.Sigma,{size:16,className:"data-icon"}),e.jsx("span",{className:"data-label",children:"WORDS"}),e.jsx("span",{className:"data-value",children:r.toString().padStart(4,"0")})]}),e.jsxs("div",{className:"data-readout",title:"Character Count",children:[e.jsx(i.Binary,{size:16,className:"data-icon"}),e.jsx("span",{className:"data-label",children:"CHARS"}),e.jsx("span",{className:"data-value",children:a.toString().padStart(5,"0")})]})]}),e.jsxs("div",{className:"status-group-v2",children:[e.jsx("button",{className:"action-button",title:"View HTML Source",onClick:s,children:e.jsx(i.CodeXml,{size:18})}),e.jsx("button",{className:"action-button",title:u?"Exit Full Screen":"Full Screen",onClick:m,children:u?e.jsx(i.Minimize,{size:18}):e.jsx(i.Maximize,{size:18})})]})]})]})]})};Ft.propTypes={wordCount:n.number.isRequired,charCount:n.number.isRequired,onToggleSource:n.func.isRequired,onToggleFullScreen:n.func.isRequired,isFullScreen:n.bool.isRequired};const Ot=({wordCount:r,charCount:a,onToggleSource:s,isFullScreen:u,onToggleFullScreen:m})=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    /* MODERN STATUS BAR STYLES */

.modern-statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  font-size: 13px;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    color 0.3s ease;
  border-top: 1px solid;
}

.statusbar-segment {
  display: flex;
  align-items: center;
  gap: 12px;
}

.statusbar-divider {
  opacity: 0.5;
}

.statusbar-button {
  background: none;
  border: none;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* --- Light Theme --- */
.theme-light .modern-statusbar {
  background-color: #f8f9fa;
  border-color: #e0e0e0;
  color: #5f6368;
}

.theme-light .statusbar-button {
  color: #5f6368;
}

.theme-light .statusbar-button:hover {
  background-color: #f1f3f4;
  color: #202124;
}

/* --- Dark Theme --- */
.theme-dark .modern-statusbar {
  background-color: #2c2d2f;
  border-color: #3c4043;
  color: #bdc1c6;
}

.theme-dark .statusbar-button {
  color: #bdc1c6;
}

.theme-dark .statusbar-button:hover {
  background-color: #3c4043;
  color: #e8eaed;
}

    `}),e.jsxs("div",{className:"modern-statusbar",children:[e.jsxs("div",{className:"statusbar-segment",children:[e.jsxs("span",{className:"statusbar-item",children:["Words: ",r]}),e.jsx("span",{className:"statusbar-divider",children:"|"}),e.jsxs("span",{className:"statusbar-item",children:["Characters: ",a]})]}),e.jsxs("div",{className:"statusbar-segment",children:[e.jsx("button",{className:"statusbar-button",title:"View HTML Source",onClick:s,children:e.jsx(i.CodeXml,{size:18})}),e.jsx("button",{className:"statusbar-button",title:u?"Exit Full Screen":"Full Screen",onClick:m,children:u?e.jsx(i.Minimize,{size:18}):e.jsx(i.Maximize,{size:18})})]})]})]});Ot.propTypes={wordCount:n.number.isRequired,charCount:n.number.isRequired,onToggleSource:n.func.isRequired,onToggleFullScreen:n.func.isRequired,isFullScreen:n.bool.isRequired};const zt=({theme:r,...a})=>r==="modern"?e.jsx(Ot,{...a}):r==="futuristic"?e.jsx(Ft,{...a}):e.jsx(Et,{...a});zt.propTypes={theme:n.oneOf(["classic","modern","futuristic"])};function Lt({content:r="",setContent:a="",geminiApiKey:s="",parentEditorClass:u="",toolBarClass:m="",textContentClass:p="",theme:g=""}){const h=l.useRef(null),L=l.useRef(null),q=l.useRef(!1),[S,U]=l.useState(new Set),[A,V]=l.useState({words:0,chars:0}),[j,v]=l.useState(!1),[D,R]=l.useState(!1),[T,re]=l.useState(!1),[Se,w]=l.useState({text:"",href:""}),[$,oe]=l.useState(null),[tt,ge]=l.useState(!1),[rt,ye]=l.useState(!1),[$e,G]=l.useState(!1),[Z,P]=l.useState(""),[Be,xe]=l.useState(""),[ve,Ie]=l.useState(!1),[Ve,je]=l.useState(""),[Ce,Ae]=l.useState(!1),[se,Te]=l.useState(null),[ue,fe]=l.useState(null),[_e,Me]=l.useState(0),X=l.useCallback(()=>{const d=window.getSelection();if(d.rangeCount>0){const c=d.getRangeAt(0);h.current&&h.current.contains(c.commonAncestorContainer)&&(L.current=c)}},[]),ee=l.useCallback(()=>{if(L.current){const d=window.getSelection();d.removeAllRanges(),d.addRange(L.current)}},[]),H=l.useCallback(()=>{h.current&&(q.current=!0,a(h.current.innerHTML))},[]),nt=l.useCallback(d=>{const c=j?d.target.value:d.currentTarget.innerHTML;q.current=!0,a(c)},[j]),ke=l.useCallback(()=>{const d=new Set;["bold","italic","underline","strikeThrough","justifyLeft","justifyCenter","justifyRight","insertOrderedList","insertUnorderedList","superscript","subscript"].forEach(b=>{document.queryCommandState(b)&&d.add(b)}),U(d)},[]),B=l.useCallback((d,c=null)=>{var b;(b=h.current)==null||b.focus(),ee(),document.execCommand(d,!1,c),H(),ke()},[ee,H,ke]),me=l.useCallback(d=>{var y;(y=h.current)==null||y.focus(),ee();const c=window.getSelection();if(!c.rangeCount)return;let b=c.getRangeAt(0).commonAncestorContainer;for(;b&&b!==h.current;){if(b.nodeType===Node.ELEMENT_NODE&&window.getComputedStyle(b).display.match(/block|table|list-item/)){b.style.lineHeight=d;break}b=b.parentNode}H()},[ee,H]);l.useEffect(()=>{if(q.current){q.current=!1;return}h.current&&!j&&r!==h.current.innerHTML&&(h.current.innerHTML=r||"")},[r,j]),l.useEffect(()=>{const d=document.createElement("div");d.innerHTML=r||"";const c=d.textContent||"",b=c.trim().split(/\s+/).filter(Boolean).length;V({words:b,chars:c.length})},[r]);const we=l.useCallback(()=>{const d=window.getSelection();if(d.rangeCount>0){const c=d.getRangeAt(0);h.current&&h.current.contains(c.commonAncestorContainer)&&(X(),ke())}},[X,ke]);l.useEffect(()=>(document.addEventListener("selectionchange",we),()=>document.removeEventListener("selectionchange",we)),[we]);const Ye=l.useCallback(d=>{if(d.ctrlKey||d.metaKey){const c={b:"bold",i:"italic",u:"underline",k:()=>pe(),z:"undo",y:"redo"};c[d.key]&&(d.preventDefault(),typeof c[d.key]=="function"?c[d.key]():B(c[d.key]))}},[B]),pe=l.useCallback(()=>{var b;X();const d=window.getSelection(),c=(b=d.anchorNode)==null?void 0:b.parentElement.closest("a");(c==null?void 0:c.tagName)==="A"?(w({text:c.textContent,href:c.href}),oe(c)):(w({text:d.toString(),href:""}),oe(null)),re(!0)},[X]),it=l.useCallback(d=>{if(re(!1),ee(),h.current.focus(),$)$.href=d.href,$.textContent=d.text;else{const c=`<a href="${d.href}" target="_blank" rel="noopener noreferrer">${d.text}</a>`;B("insertHTML",c)}oe(null),H()},[$,ee,B,H]),ot=l.useCallback(d=>{const c=d.target.files[0];if(!c)return;const b=new FileReader;b.onload=y=>{const _=`<span class="image-wrapper d-inline-block"><img src="${y.target.result}" class="img-fluid rounded" style="width: 250px; height: auto;" /></span>`;B("insertHTML",_)},b.readAsDataURL(c),d.target.value=""},[B]),qe=l.useCallback(d=>{const c=d.target.files[0];if(!c)return;const b=new FileReader;b.onload=y=>{_t.convertToHtml({arrayBuffer:y.target.result}).then(_=>a(_.value)).catch(_=>console.error("Error converting .docx to HTML:",_))},b.readAsArrayBuffer(c),d.target.value=""},[]),st=d=>{let c="",b;return d.includes("youtube.com/watch?v=")?(b=d.split("v=")[1].split("&")[0],c=`https://www.youtube.com/embed/${b}`):d.includes("youtu.be/")?(b=d.split("youtu.be/")[1].split("?")[0],c=`https://www.youtube.com/embed/${b}`):d.includes("vimeo.com/")&&(b=d.split("vimeo.com/")[1].split("?")[0],c=`https://player.vimeo.com/video/${b}`),c},at=l.useCallback(d=>{if(ge(!1),!d)return;const c=st(d);if(!c){console.warn("Invalid video URL. Please use a valid YouTube or Vimeo link.");return}ee(),h.current.focus();const b=`<div class="video-wrapper"><iframe src="${c}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;B("insertHTML",b),H()},[ee,B,H]),We=l.useCallback(d=>{ye(!1);let c='<table class="table table-bordered"><tbody>';for(let b=0;b<d.rows;b++){c+="<tr>";for(let y=0;y<d.cols;y++)c+="<td><br></td>";c+="</tr>"}c+="</tbody></table><p><br></p>",B("insertHTML",c)},[B]),Ge=(d,c)=>{const b=new De.diff_match_patch,y=b.diff_main(d,c);b.diff_cleanupSemantic(y);let _="";for(const[ae,ne]of y){const J=ne.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"&para;<br>");switch(ae){case De.DIFF_INSERT:_+=`<ins style="background-color: #d4edda; text-decoration: none;">${J}</ins>`;break;case De.DIFF_DELETE:_+=`<del style="background-color: #f8d7da; text-decoration: none;">${J}</del>`;break;case De.DIFF_EQUAL:_+=`<span>${J}</span>`;break}}return _},Ke=async()=>{var _,ae,ne,J,le;if(!r||r===""||ve)return;Ie(!0),P(""),Ae(!1);const d=["Analyzing...","Generating suggestions...","Optimizing flow...","Finalizing..."];let c=0;je(d[c]);const b=setInterval(()=>{c=(c+1)%d.length,je(d[c])},2e3),y=`
<TASK>
You are a world-class content editor and a senior SEO strategist with elite proficiency in **English, Japanese, Hindi, French, Spanish, Sinhalese,Arabic and Chinese **. Your task is to reformat, stylish, and enhance the provided HTML content.
</TASK>

<LANGUAGE_PROTOCOL>
1.  **Identify the Language:** Your first step is to determine if the content's primary language is one of the following:**English, Japanese, Hindi, French, Spanish, Sinhalese,Arabic and Chinese **.
    * **CRITICAL CLARIFICATION:** To do this, analyze **only the human-readable text**. You **must ignore all HTML tags** (e.g., \`<p>\`, \`<div>\`) during this language identification step.
2.  **Lock the Language:** All subsequent tasks **must** be performed exclusively in the single language you have identified.
3.  **No Translation:** You **must not** translate the content.
</LANGUAGE_PROTOCOL>

<INSTRUCTIONS>
1.  **IMPROVE READABILITY & PROFESSIONALISM (in the identified language):**
    * Correct all grammar, spelling, and punctuation errors.
    * **Style tags appropriately using inline CSS. Ensure a clear visual hierarchy (e.g., "<h1 style="font-size: 2em;">", "<h2 style="font-size: 1.5em;">", "<p style="font-size: 1em;">").**
    * Add proper spaces and line heigh and font height for text
    * Maintain a professional and authoritative yet accessible tone.

2.  **ENHANCE SEO & STRUCTURE (in the identified language):**
    * Ensure there is one single, compelling \`<h1>\` tag that captures the main topic.
    * Structure the content logically using \`<h2>\` for main sections and \`<h3>\` for sub-sections.
    * Where appropriate, convert lists or series of items into bulleted (\`<ul>\`) or numbered (\`<ol>\`) lists for better scannability.
    * Use \`<strong>\` for important keywords or phrases instead of \`<b>\`. Use \`<em>\` for emphasis instead of \`<i>\`.

3.  **CORE CONTENT REQUIREMENTS:**
    * Preserve the original core message, facts, and meaning.
    * Use **inline CSS** for any styling (e.g., \`<p style="color: #333;">\`).
</INSTRUCTIONS>

<ABSOLUTE_OUTPUT_FORMAT>
-   **CRITICAL:** Your entire response must be **RAW HTML code ONLY**.
-   **DO NOT** under any circumstances wrap your response in markdown fences like \`\`\`html or \`\`\`.
-   **DO NOT** include any commentary, notes, or explanations before or after the code.
-   **DO NOT** include \`<html>\`, \`<head>\`, \`<body>\`, \`<title>\`, \`<meta>\`, or \`<script>\` tags.
-   Your response must start directly with the first HTML tag (e.g., \`<h1>\`) and end with the last closing tag.
</ABSOLUTE_OUTPUT_FORMAT>

<CONTENT_TO_IMPROVE>
${r}
</CONTENT_TO_IMPROVE>
`;try{const Q={contents:[{role:"user",parts:[{text:y}]}]},te=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${s}`,be=await fetch(te,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)});if(!be.ok)throw new Error(`API call failed: ${be.status}`);const Ee=(le=(J=(ne=(ae=(_=(await be.json()).candidates)==null?void 0:_[0])==null?void 0:ae.content)==null?void 0:ne.parts)==null?void 0:J[0])==null?void 0:le.text;if(Ee)P(Ee),xe(Ge(r,Ee)),G(!0);else throw new Error("Invalid AI response format")}catch(Q){console.error("Error calling Gemini API:",Q),P(`<p>Sorry, an error occurred. ${Q.message}</p>`),xe(`<p>Error: ${Q.message}</p>`),G(!0)}finally{clearInterval(b),Ie(!1),je("")}},lt=()=>{a(Z),G(!1),P(""),xe("")};l.useEffect(()=>{const d=h.current;if(!d)return;const c=b=>{if(b.target.closest(".delete-column-btn")){b.target.closest(".row").remove(),H();return}const y=b.target.closest("img"),_=b.target.closest("table");Te(y),fe(_),y&&fe(null),_&&Te(null)};return d.addEventListener("click",c),()=>d.removeEventListener("click",c)},[H]);const Ne=(d,c)=>{d&&(d.classList.remove("d-block","mx-auto","float-start","float-end","me-3","mb-3","ms-3"),c==="center"?d.classList.add("d-block","mx-auto"):c==="left"?d.classList.add("float-start","me-3","mb-3"):c==="right"&&d.classList.add("float-end","ms-3","mb-3"),H())};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
.editor-content:focus {
  box-shadow: none;
}
.modal .editor-secondary {
  background-color: #6c757d;
  color: white;
  font-size: 14px;
  border-radius: 0px;
}
.modal .editor-primary {
  background-color: #4285f4;
  color: white;
  font-size: 14px;
  border-radius: 0px;
}
.editor-content .row {
  position: relative;
  margin: 1rem 0;
}
.editor-content .row:hover .delete-column-btn {
  display: flex;
}
.delete-column-btn {
  display: none;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 10;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  padding: 0;
  align-items: center;
  justify-content: center;
}
.editor-content .row > [class^="col-"] {
  border: 1px dashed #ccc;
  padding: 1rem;
  min-height: 100px;
}
.editor-content blockquote {
  border-left: 4px solid #ccc;
  margin-left: 0;
  padding-left: 1rem;
  color: #6c757d;
}
.editor-content pre {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 1rem;
  border-radius: 0.25rem;
  white-space: pre-wrap;
  word-break: break-all;
}
.color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: transform 0.1s ease-in-out;
  padding: 0;
}
.color-swatch:hover {
  transform: scale(1.1);
}
.btn-group .btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-wrapper {
  position: relative;
  display: inline-block;
}
.image-wrapper.selected {
  outline: 2px solid #0d6efd;
}
.resize-handle {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #0d6efd;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 10;
}
.resize-handle.bottom-right {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.image-toolbar,
.table-toolbar {
  position: absolute;
  z-index: 10;
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 5px;
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 0.25rem;
  margin: 1rem 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-modal-title {
  font-size: 14px;
}
.footer-text-area {
  font-size: 14px;
  font-weight: 600;
}
.ai-preview-pane {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
}
.ai-loading-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1100;
  width: 350px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 1rem;
}
.ai-loading-popup-minimized {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1100;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}
`}),e.jsxs("div",{className:`d-flex flex-column border rounded-3 shadow-sm ${D?"position-fixed top-0 start-0 w-100 h-100 bg-white":"position-relative "}  ${u}`,style:{zIndex:D?1050:"auto"},children:[e.jsx("div",{className:`flex-shrink-0 border-bottom ${m}`,children:e.jsx(xt,{theme:g,applyStyle:B,applyLineHeight:me,activeStyles:S,onOpenLinkModal:pe,onImageUpload:ot,onDocxUpload:qe,onVideoModalOpen:()=>{X(),ge(!0)},onTableModalOpen:()=>{X(),ye(!0)},onAiRefactor:Ke,content:r,isGenerating:ve,isAiLoadingMinimized:Ce})}),e.jsxs("div",{className:"flex-grow-1 overflow-auto position-relative pt-3",children:[e.jsx(vt,{editorRef:h,content:r,showSource:j,onContentChange:nt,onKeyDown:Ye,textContentClass:p}),se&&!j&&(()=>{const d=h.current.getBoundingClientRect(),c=se.getBoundingClientRect(),b=se.parentElement;return e.jsxs("div",{className:"image-wrapper selected",style:{position:"absolute",top:c.top-d.top+h.current.scrollTop,left:c.left-d.left+h.current.scrollLeft,width:c.width,height:c.height,pointerEvents:"none"},children:[e.jsxs("div",{className:"image-toolbar",style:{pointerEvents:"auto"},children:[e.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>Ne(b,"left"),children:e.jsx(i.AlignStartVertical,{size:14})}),e.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>Ne(b,"center"),children:e.jsx(i.AlignCenterVertical,{size:14})}),e.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>Ne(b,"right"),children:e.jsx(i.AlignEndVertical,{size:14})}),e.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>{b.remove(),H(),Te(null)},children:e.jsx(i.Trash2,{size:14})})]}),e.jsx("div",{className:"resize-handle bottom-right",style:{pointerEvents:"auto"},onMouseDown:y=>{y.preventDefault();const _=y.clientX,ae=se.offsetWidth,ne=le=>{const Q=ae+(le.clientX-_);Q>20&&(se.style.width=`${Q}px`,se.style.height="auto",Me(te=>te+1))},J=()=>{document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",J),H()};document.addEventListener("mousemove",ne),document.addEventListener("mouseup",J)}})]})})(),ue&&!j&&(()=>{const d=h.current.getBoundingClientRect(),c=ue.getBoundingClientRect();return e.jsx("div",{className:"table-toolbar mt-5",style:{position:"absolute",top:c.top-d.top+h.current.scrollTop-60,right:c.left-d.left+h.current.scrollLeft,pointerEvents:"auto"},children:e.jsx("button",{className:"btn btn-sm btn-danger d-flex align-items-center rounded-5  p-1",onClick:()=>{ue.remove(),H(),fe(null)},children:e.jsx(i.Trash2,{size:14})})})})()]}),e.jsx(zt,{theme:g,wordCount:A.words,charCount:A.chars,onToggleSource:()=>v(!j),showSource:j,onToggleFullScreen:()=>R(!D),isFullScreen:D}),ve&&e.jsx(wt,{status:Ve,isMinimized:Ce,onMinimizeToggle:()=>Ae(!Ce)}),e.jsx(jt,{isOpen:T,onClose:()=>re(!1),onApply:it,initialData:Se,isEditing:!!$}),e.jsx(Ct,{isOpen:tt,onClose:()=>ge(!1),onInsert:at}),e.jsx(kt,{isOpen:rt,onClose:()=>ye(!1),onCreate:We}),e.jsx(Nt,{isOpen:$e,onClose:()=>G(!1),onApply:lt,originalContent:r,suggestion:Z,highlightedDiff:Be})]})]})}return Lt.propTypes={content:n.string,setContent:n.func,geminiApiKey:n.string,parentEditorClass:n.string,toolBarClass:n.string,textContentClass:n.string,theme:n.string},Mt(),Lt});
//# sourceMappingURL=forma-text.umd.cjs.map
