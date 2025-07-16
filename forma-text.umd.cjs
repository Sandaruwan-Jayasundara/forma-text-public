(function(a,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("prop-types"),require("mammoth"),require("diff-match-patch"),require("lucide-react")):typeof define=="function"&&define.amd?define(["react","prop-types","mammoth","diff-match-patch","lucide-react"],n):(a=typeof globalThis<"u"?globalThis:a||self,a.FormaText=n(a.React,a.PropTypes,a.mammoth,a.diff_match_patch,a["lucide-react"]))})(this,function(a,n,Bt,Re,o){"use strict";var tt={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xt;function Ht(){if(xt)return Ie;xt=1;var r=a,s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function g(C,h,$){var S,D={},T=null,U=null;$!==void 0&&(T=""+$),h.key!==void 0&&(T=""+h.key),h.ref!==void 0&&(U=h.ref);for(S in h)d.call(h,S)&&!b.hasOwnProperty(S)&&(D[S]=h[S]);if(C&&C.defaultProps)for(S in h=C.defaultProps,h)D[S]===void 0&&(D[S]=h[S]);return{$$typeof:s,type:C,key:T,ref:U,props:D,_owner:u.current}}return Ie.Fragment=l,Ie.jsx=g,Ie.jsxs=g,Ie}var Ae={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht;function Ut(){return ht||(ht=1,process.env.NODE_ENV!=="production"&&function(){var r=a,s=Symbol.for("react.element"),l=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),C=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),w=Symbol.iterator,p="@@iterator";function V(t){if(t===null||typeof t!="object")return null;var i=w&&t[w]||t[p];return typeof i=="function"?i:null}var q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(t){{for(var i=arguments.length,f=new Array(i>1?i-1:0),v=1;v<i;v++)f[v-1]=arguments[v];he("error",t,f)}}function he(t,i,f){{var v=q.ReactDebugCurrentFrame,E=v.getStackAddendum();E!==""&&(i+="%s",f=f.concat([E]));var I=f.map(function(y){return String(y)});I.unshift("Warning: "+i),Function.prototype.apply.call(console[t],console,I)}}var ge=!1,N=!1,X=!1,te=!1,_e=!1,Ye;Ye=Symbol.for("react.module.reference");function De(t){return!!(typeof t=="string"||typeof t=="function"||t===d||t===b||_e||t===u||t===$||t===S||te||t===U||ge||N||X||typeof t=="object"&&t!==null&&(t.$$typeof===T||t.$$typeof===D||t.$$typeof===g||t.$$typeof===C||t.$$typeof===h||t.$$typeof===Ye||t.getModuleId!==void 0))}function it(t,i,f){var v=t.displayName;if(v)return v;var E=i.displayName||i.name||"";return E!==""?f+"("+E+")":f}function Ce(t){return t.displayName||"Context"}function re(t){if(t==null)return null;if(typeof t.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case d:return"Fragment";case l:return"Portal";case b:return"Profiler";case u:return"StrictMode";case $:return"Suspense";case S:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C:var i=t;return Ce(i)+".Consumer";case g:var f=t;return Ce(f._context)+".Provider";case h:return it(t,t.render,"ForwardRef");case D:var v=t.displayName||null;return v!==null?v:re(t.type)||"Memo";case T:{var E=t,I=E._payload,y=E._init;try{return re(y(I))}catch{return null}}}return null}var Q=Object.assign,xe=0,we,We,ke,Ne,Me,Ge,ye;function Fe(){}Fe.__reactDisabledLog=!0;function Ke(){{if(xe===0){we=console.log,We=console.info,ke=console.warn,Ne=console.error,Me=console.group,Ge=console.groupCollapsed,ye=console.groupEnd;var t={configurable:!0,enumerable:!0,value:Fe,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}xe++}}function G(){{if(xe--,xe===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Q({},t,{value:we}),info:Q({},t,{value:We}),warn:Q({},t,{value:ke}),error:Q({},t,{value:Ne}),group:Q({},t,{value:Me}),groupCollapsed:Q({},t,{value:Ge}),groupEnd:Q({},t,{value:ye})})}xe<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var de=q.ReactCurrentDispatcher,ve;function ne(t,i,f){{if(ve===void 0)try{throw Error()}catch(E){var v=E.stack.trim().match(/\n( *(at )?)/);ve=v&&v[1]||""}return`
`+ve+t}}var ce=!1,ee;{var K=typeof WeakMap=="function"?WeakMap:Map;ee=new K}function ue(t,i){if(!t||ce)return"";{var f=ee.get(t);if(f!==void 0)return f}var v;ce=!0;var E=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var I;I=de.current,de.current=null,Ke();try{if(i){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(Z){v=Z}Reflect.construct(t,[],y)}else{try{y.call()}catch(Z){v=Z}t.call(y.prototype)}}else{try{throw Error()}catch(Z){v=Z}t()}}catch(Z){if(Z&&v&&typeof Z.stack=="string"){for(var k=Z.stack.split(`
`),J=v.stack.split(`
`),M=k.length-1,B=J.length-1;M>=1&&B>=0&&k[M]!==J[B];)B--;for(;M>=1&&B>=0;M--,B--)if(k[M]!==J[B]){if(M!==1||B!==1)do if(M--,B--,B<0||k[M]!==J[B]){var P=`
`+k[M].replace(" at new "," at ");return t.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",t.displayName)),typeof t=="function"&&ee.set(t,P),P}while(M>=1&&B>=0);break}}}finally{ce=!1,de.current=I,G(),Error.prepareStackTrace=E}var Le=t?t.displayName||t.name:"",je=Le?ne(Le):"";return typeof t=="function"&&ee.set(t,je),je}function oe(t,i,f){return ue(t,!1)}function st(t){var i=t.prototype;return!!(i&&i.isReactComponent)}function fe(t,i,f){if(t==null)return"";if(typeof t=="function")return ue(t,st(t));if(typeof t=="string")return ne(t);switch(t){case $:return ne("Suspense");case S:return ne("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case h:return oe(t.render);case D:return fe(t.type,i,f);case T:{var v=t,E=v._payload,I=v._init;try{return fe(I(E),i,f)}catch{}}}return""}var Y=Object.prototype.hasOwnProperty,Xe={},Je=q.ReactDebugCurrentFrame;function Ee(t){if(t){var i=t._owner,f=fe(t.type,t._source,i?i.type:null);Je.setExtraStackFrame(f)}else Je.setExtraStackFrame(null)}function $e(t,i,f,v,E){{var I=Function.call.bind(Y);for(var y in t)if(I(t,y)){var k=void 0;try{if(typeof t[y]!="function"){var J=Error((v||"React class")+": "+f+" type `"+y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[y]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw J.name="Invariant Violation",J}k=t[y](i,y,v,f,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(M){k=M}k&&!(k instanceof Error)&&(Ee(E),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",v||"React class",f,y,typeof k),Ee(null)),k instanceof Error&&!(k.message in Xe)&&(Xe[k.message]=!0,Ee(E),R("Failed %s type: %s",f,k.message),Ee(null))}}}var at=Array.isArray;function qe(t){return at(t)}function lt(t){{var i=typeof Symbol=="function"&&Symbol.toStringTag,f=i&&t[Symbol.toStringTag]||t.constructor.name||"Object";return f}}function dt(t){try{return Ze(t),!1}catch{return!0}}function Ze(t){return""+t}function Qe(t){if(dt(t))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",lt(t)),Ze(t)}var Se=q.ReactCurrentOwner,ct={key:!0,ref:!0,__self:!0,__source:!0},Pe,et;function ut(t){if(Y.call(t,"ref")){var i=Object.getOwnPropertyDescriptor(t,"ref").get;if(i&&i.isReactWarning)return!1}return t.ref!==void 0}function ft(t){if(Y.call(t,"key")){var i=Object.getOwnPropertyDescriptor(t,"key").get;if(i&&i.isReactWarning)return!1}return t.key!==void 0}function mt(t,i){typeof t.ref=="string"&&Se.current}function m(t,i){{var f=function(){Pe||(Pe=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};f.isReactWarning=!0,Object.defineProperty(t,"key",{get:f,configurable:!0})}}function c(t,i){{var f=function(){et||(et=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};f.isReactWarning=!0,Object.defineProperty(t,"ref",{get:f,configurable:!0})}}var x=function(t,i,f,v,E,I,y){var k={$$typeof:s,type:t,key:i,ref:f,props:y,_owner:I};return k._store={},Object.defineProperty(k._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(k,"_self",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.defineProperty(k,"_source",{configurable:!1,enumerable:!1,writable:!1,value:E}),Object.freeze&&(Object.freeze(k.props),Object.freeze(k)),k};function F(t,i,f,v,E){{var I,y={},k=null,J=null;f!==void 0&&(Qe(f),k=""+f),ft(i)&&(Qe(i.key),k=""+i.key),ut(i)&&(J=i.ref,mt(i,E));for(I in i)Y.call(i,I)&&!ct.hasOwnProperty(I)&&(y[I]=i[I]);if(t&&t.defaultProps){var M=t.defaultProps;for(I in M)y[I]===void 0&&(y[I]=M[I])}if(k||J){var B=typeof t=="function"?t.displayName||t.name||"Unknown":t;k&&m(y,B),J&&c(y,B)}return x(t,k,J,E,v,Se.current,y)}}var j=q.ReactCurrentOwner,_=q.ReactDebugCurrentFrame;function W(t){if(t){var i=t._owner,f=fe(t.type,t._source,i?i.type:null);_.setExtraStackFrame(f)}else _.setExtraStackFrame(null)}var A;A=!1;function H(t){return typeof t=="object"&&t!==null&&t.$$typeof===s}function me(){{if(j.current){var t=re(j.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function pt(t){return""}var Oe={};function Mt(t){{var i=me();if(!i){var f=typeof t=="string"?t:t.displayName||t.name;f&&(i=`

Check the top-level render call using <`+f+">.")}return i}}function ze(t,i){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var f=Mt(i);if(Oe[f])return;Oe[f]=!0;var v="";t&&t._owner&&t._owner!==j.current&&(v=" It was passed a child from "+re(t._owner.type)+"."),W(t),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',f,v),W(null)}}function $t(t,i){{if(typeof t!="object")return;if(qe(t))for(var f=0;f<t.length;f++){var v=t[f];H(v)&&ze(v,i)}else if(H(t))t._store&&(t._store.validated=!0);else if(t){var E=V(t);if(typeof E=="function"&&E!==t.entries)for(var I=E.call(t),y;!(y=I.next()).done;)H(y.value)&&ze(y.value,i)}}}function gr(t){{var i=t.type;if(i==null||typeof i=="string")return;var f;if(typeof i=="function")f=i.propTypes;else if(typeof i=="object"&&(i.$$typeof===h||i.$$typeof===D))f=i.propTypes;else return;if(f){var v=re(i);$e(f,t.props,"prop",v,t)}else if(i.PropTypes!==void 0&&!A){A=!0;var E=re(i);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E||"Unknown")}typeof i.getDefaultProps=="function"&&!i.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vr(t){{for(var i=Object.keys(t.props),f=0;f<i.length;f++){var v=i[f];if(v!=="children"&&v!=="key"){W(t),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",v),W(null);break}}t.ref!==null&&(W(t),R("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}var qt={};function Rt(t,i,f,v,E,I){{var y=De(t);if(!y){var k="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(k+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var J=pt();J?k+=J:k+=me();var M;t===null?M="null":qe(t)?M="array":t!==void 0&&t.$$typeof===s?(M="<"+(re(t.type)||"Unknown")+" />",k=" Did you accidentally export a JSX literal instead of a component?"):M=typeof t,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",M,k)}var B=F(t,i,f,E,I);if(B==null)return B;if(y){var P=i.children;if(P!==void 0)if(v)if(qe(P)){for(var Le=0;Le<P.length;Le++)$t(P[Le],t);Object.freeze&&Object.freeze(P)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else $t(P,t)}if(Y.call(i,"key")){var je=re(t),Z=Object.keys(i).filter(function(yr){return yr!=="key"}),bt=Z.length>0?"{key: someKey, "+Z.join(": ..., ")+": ...}":"{key: someKey}";if(!qt[je+bt]){var Nr=Z.length>0?"{"+Z.join(": ..., ")+": ...}":"{}";R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,bt,je,Nr,je),qt[je+bt]=!0}}return t===d?vr(B):gr(B),B}}function jr(t,i,f){return Rt(t,i,f,!0)}function Cr(t,i,f){return Rt(t,i,f,!1)}var wr=Cr,kr=jr;Ae.Fragment=d,Ae.jsx=wr,Ae.jsxs=kr}()),Ae}process.env.NODE_ENV==="production"?tt.exports=Ht():tt.exports=Ut();var e=tt.exports;const Vt=()=>e.jsx("style",{children:`
           .forma-text-classic-tooltip-container {
  position: relative;
  display: inline-block;
}
  
.forma-text-classic-tooltip {
  visibility: hidden;
  opacity: 0;
  width: max-content;
  background-color: #686868ff;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  z-index: 10;
  top: 130%; /* Changed from 'bottom' */
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.2s ease-in-out;
}

.forma-text-classic-tooltip::after {
  content: "";
  position: absolute;
  bottom: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #666666ff transparent;
}

.forma-text-classic-tooltip-container:hover .forma-text-classic-tooltip {
  visibility: visible;
  opacity: 1;
}
 
            
            
            `}),O=a.memo(({onClick:r,title:s,command:l,activeStyles:d,disabled:u=!1,children:b})=>e.jsxs(e.Fragment,{children:[e.jsx(Vt,{}),e.jsx("div",{className:"forma-text-classic-tooltip-container",children:e.jsxs("button",{type:"button",onClick:r,onMouseDown:g=>g.preventDefault(),className:`btn btn-outline-secondary ${d&&d.has(l)?"active":""}`,"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:s,disabled:u,children:[b,e.jsx("span",{className:"forma-text-classic-tooltip",children:s})]})})]}));O.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,command:n.string,activeStyles:n.object,disabled:n.bool,children:n.node.isRequired},O.displayName="ToolbarButton";const ie=({title:r,icon:s,children:l})=>{const[d,u]=a.useState(!1),b=a.useRef(null);return a.useEffect(()=>{const g=C=>{b.current&&!b.current.contains(C.target)&&u(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),e.jsxs("div",{className:"btn-group",ref:b,children:[e.jsx("button",{type:"button",onClick:()=>u(!d),onMouseDown:g=>g.preventDefault(),className:"btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1 py-2","aria-expanded":d,children:s}),e.jsx("div",{className:`dropdown-menu ${d?"show":""}`,onClick:g=>{g.target.closest("button")&&u(!1)},children:l})]})};ie.propTypes={title:n.string.isRequired,icon:n.node.isRequired,children:n.node.isRequired};const Yt=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],rt=({command:r,applyStyle:s})=>{const l=r==="foreColor"?"Text Color":"Highlight Color",d=r==="foreColor"?e.jsx(o.Palette,{size:16}):e.jsx(o.Highlighter,{size:16});return e.jsx(ie,{title:l,icon:d,children:e.jsx("div",{className:"p-2 d-flex flex-wrap gap-1",style:{width:"160px"},children:Yt.map(u=>e.jsx("button",{type:"button",className:"color-swatch",style:{backgroundColor:u},onClick:()=>s(r,u),"aria-label":u},u))})})};rt.propTypes={command:n.oneOf(["foreColor","backColor"]).isRequired,applyStyle:n.func.isRequired};const Wt=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],gt=({applyStyle:r})=>e.jsx(ie,{title:"Insert Emoji",icon:e.jsx(o.Smile,{size:16}),children:e.jsx("div",{className:"p-2 d-flex flex-wrap gap-1",style:{maxHeight:"200px",width:"250px",overflowY:"auto"},children:Wt.map(s=>e.jsx("button",{className:"btn btn-sm btn-light fs-5",onClick:()=>r("insertText",s),children:s},s))})});gt.propTypes={applyStyle:n.func.isRequired};const Gt=["Arial","Georgia","Helvetica","Tahoma","Times New Roman","Verdana","Courier New"],Kt={Small:"2",Normal:"3",Large:"5",Huge:"7"},Xt={"Heading 1":"<h1>","Heading 2":"<h2>","Heading 3":"<h3>","Heading 4":"<h4>","Heading 5":"<h5>",Paragraph:"<p>"},Jt={None:"0.5",Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},Be="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 1rem; position: relative; margin: 1rem 0;",se="padding: 1rem; vertical-align: top;",vt={"2 Columns (1:1)":`
    <div style="position: relative;">
      
      <table style="${Be}">
        <tbody>
          <tr>
            <td style="${se} width: 50%;"><p>Column 1</p></td>
            <td style="${se} width: 50%;"><p>Column 2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"3 Columns (1:1:1)":`
    <div style="position: relative;">
      
      <table style="${Be}">
        <tbody>
          <tr>
            <td style="${se} width: 33.33%;"><p>C1</p></td>
            <td style="${se} width: 33.33%;"><p>C2</p></td>
            <td style="${se} width: 33.33%;"><p>C3</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"2 Columns (1:2)":`
    <div style="position: relative;">
      
      <table style="${Be}">
        <tbody>
          <tr>
            <td style="${se} width: 33.33%;"><p>C1</p></td>
            <td style="${se} width: 66.66%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"2 Columns (2:1)":`
    <div style="position: relative;">
      
      <table style="${Be}">
        <tbody>
          <tr>
            <td style="${se} width: 66.66%;"><p>C1</p></td>
            <td style="${se} width: 33.33%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`},jt=({applyStyle:r,applyLineHeight:s,activeStyles:l,onOpenLinkModal:d,onImageUpload:u,onDocxUpload:b,onVideoModalOpen:g,onTableModalOpen:C,onAiRefactor:h,content:$,isGenerating:S,isAiLoadingMinimized:D})=>{const T=a.useRef(null),U=a.useRef(null),w=a.useRef(null);return a.useEffect(()=>{if(T.current&&typeof window.bootstrap<"u"){const V=[].slice.call(T.current.querySelectorAll('[data-bs-toggle="tooltip"]')).map(q=>new window.bootstrap.Tooltip(q));return()=>V.forEach(q=>q==null?void 0:q.dispose())}},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:T,className:"p-2 border-bottom d-flex flex-wrap align-items-center gap-2",children:[e.jsxs("div",{className:"btn-group",role:"group",children:[e.jsx(O,{title:"Undo (Ctrl+Z)",onClick:()=>r("undo"),children:e.jsx(o.Undo,{size:16})}),e.jsx(O,{title:"Redo (Ctrl+Y)",onClick:()=>r("redo"),children:e.jsx(o.Redo,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(ie,{title:"Headings",icon:e.jsx(o.Pilcrow,{size:14}),children:Object.entries(Xt).map(([p,V])=>e.jsx("button",{className:"dropdown-item",onClick:()=>r("formatBlock",V),children:p},p))}),e.jsx(ie,{title:"Font Family",icon:e.jsx("span",{className:"fw-bold small",style:{fontSize:"12px"},children:"Aa"}),children:Gt.map(p=>e.jsx("button",{className:"dropdown-item",style:{fontFamily:p},onClick:()=>r("fontName",p),children:p},p))}),e.jsx(ie,{title:"Font Size",icon:e.jsx(o.Type,{size:14}),children:Object.entries(Kt).map(([p,V])=>e.jsx("button",{className:"dropdown-item",onClick:()=>r("fontSize",V),children:p},p))}),e.jsxs(ie,{title:"Line Height",icon:e.jsx(o.ArrowDownUp,{size:14}),children:[Object.entries(Jt).map(([p,V])=>e.jsx("button",{className:"dropdown-item",style:{fontSize:"14px"},onClick:()=>s(V),children:p},p)),e.jsx("button",{className:"dropdown-item text-danger border-top border-danger mt-2",style:{fontSize:"14px"},onClick:()=>s("normal"),children:"Remove Height"})]})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(O,{title:"Bold (Ctrl+B)",command:"bold",activeStyles:l,onClick:()=>r("bold"),children:e.jsx(o.Bold,{size:14})}),e.jsx(O,{title:"Italic (Ctrl+I)",command:"italic",activeStyles:l,onClick:()=>r("italic"),children:e.jsx(o.Italic,{size:16})}),e.jsx(O,{title:"Underline (Ctrl+U)",command:"underline",activeStyles:l,onClick:()=>r("underline"),children:e.jsx(o.Underline,{size:16})}),e.jsx(O,{title:"Strikethrough",command:"strikeThrough",activeStyles:l,onClick:()=>r("strikeThrough"),children:e.jsx(o.Strikethrough,{size:16})}),e.jsx(O,{title:"Superscript",command:"superscript",activeStyles:l,onClick:()=>r("superscript"),children:e.jsx(o.Superscript,{size:16})}),e.jsx(O,{title:"Subscript",command:"subscript",activeStyles:l,onClick:()=>r("subscript"),children:e.jsx(o.Subscript,{size:16})}),e.jsx(gt,{applyStyle:r})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(rt,{command:"foreColor",applyStyle:r}),e.jsx(rt,{command:"backColor",applyStyle:r})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(O,{title:"Align Left",command:"justifyLeft",activeStyles:l,onClick:()=>r("justifyLeft"),children:e.jsx(o.AlignLeft,{size:16})}),e.jsx(O,{title:"Align Center",command:"justifyCenter",activeStyles:l,onClick:()=>r("justifyCenter"),children:e.jsx(o.AlignCenter,{size:16})}),e.jsx(O,{title:"Align Right",command:"justifyRight",activeStyles:l,onClick:()=>r("justifyRight"),children:e.jsx(o.AlignRight,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(O,{title:"Ordered List",command:"insertOrderedList",activeStyles:l,onClick:()=>r("insertOrderedList"),children:e.jsx(o.ListOrdered,{size:16})}),e.jsx(O,{title:"Unordered List",command:"insertUnorderedList",activeStyles:l,onClick:()=>r("insertUnorderedList"),children:e.jsx(o.List,{size:16})}),e.jsx(O,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(o.Outdent,{size:16})}),e.jsx(O,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(o.Indent,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(O,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(o.Quote,{size:16})}),e.jsx(O,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(o.Code,{size:16})}),e.jsx(O,{title:"Add/Edit Link (Ctrl+K)",onClick:d,children:e.jsx(o.Link,{size:16})}),e.jsx(O,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(o.Minus,{size:16})}),e.jsx(O,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(o.Eraser,{size:16})})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(O,{title:"Insert Image",onClick:()=>{var p;return(p=U.current)==null?void 0:p.click()},children:e.jsx(o.Image,{size:16})}),e.jsx(O,{title:"Insert Video",onClick:g,children:e.jsx(o.Video,{size:16})}),e.jsx(O,{title:"Insert Table",onClick:C,children:e.jsx(o.Table,{size:16})}),e.jsx(ie,{title:"Insert Columns",icon:e.jsx(o.Columns,{size:16}),children:Object.entries(vt).map(([p,V])=>e.jsx("button",{className:"dropdown-item",style:{fontSize:"14px"},onClick:()=>r("insertHTML",V+"<p><br></p>"),children:p},p))}),e.jsx(ie,{title:"Insert Columns",icon:e.jsx(o.Columns,{size:26}),children:Object.entries(vt).map(([p,V])=>e.jsx("button",{className:"dropdown-item",onClick:()=>r("insertHTML",V+"<p><br></p>"),children:p},p))}),e.jsx(O,{title:"Import from Word (.docx)",onClick:()=>{var p;return(p=w.current)==null?void 0:p.click()},children:e.jsx(o.FileUp,{size:16})})]}),e.jsx("div",{className:"btn-group",children:e.jsx(O,{title:"Improve with AI",onClick:h,disabled:!$||$===""||S,children:S&&!D?e.jsx("div",{className:"spinner-border spinner-border-sm",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}):e.jsx(o.Sparkles,{size:16})})})]}),e.jsx("input",{type:"file",accept:"image/*",ref:U,onChange:u,className:"d-none"}),e.jsx("input",{type:"file",accept:".docx",ref:w,onChange:b,className:"d-none"})]})};jt.propTypes={applyStyle:n.func.isRequired,applyLineHeight:n.func.isRequired,activeStyles:n.object.isRequired,onOpenLinkModal:n.func.isRequired,onImageUpload:n.func.isRequired,onDocxUpload:n.func.isRequired,onVideoModalOpen:n.func.isRequired,onTableModalOpen:n.func.isRequired,onAiRefactor:n.func.isRequired,content:n.string,isGenerating:n.bool.isRequired,isAiLoadingMinimized:n.bool.isRequired};const Zt=()=>e.jsx("style",{children:`
.forma-text-tooltip-container {
  position: relative;
  display: inline-block;
}
  
.forma-text-tooltip {
  visibility: hidden;
  opacity: 0;
  width: max-content;
  background-color: #63b1ffff;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  z-index: 10;
  top: 130%; /* Changed from 'bottom' */
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.2s ease-in-out;
}

.forma-text-tooltip::after {
  content: "";
  position: absolute;
  bottom: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #63b1ffff transparent;
}

.forma-text-tooltip-container:hover .forma-text-tooltip {
  visibility: visible;
  opacity: 1;
}


`}),z=a.memo(({onClick:r,title:s,command:l,activeStyles:d,disabled:u=!1,children:b,className:g=""})=>e.jsxs(e.Fragment,{children:[e.jsx(Zt,{}),e.jsx("div",{className:"forma-text-tooltip-container",children:e.jsxs("button",{type:"button",onClick:r,onMouseDown:C=>C.preventDefault(),className:`modern-toolbar-button ${d&&d.has(l)?"active":""} ${g}`,disabled:u,children:[b,e.jsx("span",{className:"forma-text-tooltip",children:s})]})})]}));z.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,command:n.string,activeStyles:n.object,disabled:n.bool,children:n.node.isRequired,className:n.string},z.displayName="ModernToolbarButton";const pe=({title:r,icon:s,children:l})=>{const[d,u]=a.useState(!1),b=a.useRef(null);return a.useEffect(()=>{const g=C=>{b.current&&!b.current.contains(C.target)&&u(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),e.jsxs("div",{className:"modern-dropdown",ref:b,children:[e.jsxs("button",{type:"button",onClick:()=>u(!d),onMouseDown:g=>g.preventDefault(),className:"modern-toolbar-button","aria-expanded":d,children:[s,e.jsx(o.ChevronDown,{size:14,style:{marginLeft:"4px"}})]}),e.jsx("div",{className:`modern-dropdown-menu ${d?"show":""}`,onClick:()=>u(!1),children:l})]})};pe.propTypes={title:n.string.isRequired,icon:n.node.isRequired,children:n.node.isRequired};const Qt=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],nt=({command:r,applyStyle:s})=>{const l=r==="foreColor"?"Text Color":"Highlight Color",d=r==="foreColor"?e.jsx(o.Palette,{size:26}):e.jsx(o.Highlighter,{size:26});return e.jsx(pe,{title:l,icon:d,children:e.jsx("div",{className:"modern-color-picker",children:Qt.map(u=>e.jsx("button",{type:"button",className:"modern-color-swatch",style:{backgroundColor:u},onClick:()=>s(r,u),"aria-label":u},u))})})};nt.propTypes={command:n.oneOf(["foreColor","backColor"]).isRequired,applyStyle:n.func.isRequired};const Pt=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],Ct=({applyStyle:r})=>e.jsx(pe,{title:"Insert Emoji",icon:e.jsx(o.Smile,{size:26}),children:e.jsx("div",{className:"modern-emoji-picker",children:Pt.map(s=>e.jsx("button",{type:"button",className:"modern-emoji",onClick:()=>r("insertText",s),children:s},s))})});Ct.propTypes={applyStyle:n.func.isRequired};const er=()=>e.jsx("style",{children:`
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

    `}),tr=["Arial","Georgia","Helvetica","Tahoma","Times New Roman","Verdana","Courier New"],rr={Small:"2",Normal:"3",Large:"5",Huge:"7"},nr={"Heading 1":"<h1>","Heading 2":"<h2>","Heading 3":"<h3>","Heading 4":"<h4>","Heading 5":"<h5>",Paragraph:"<p>"},or={None:"0.5",Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},He="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 1rem; position: relative; margin: 1rem 0;",ae="padding: 1rem; vertical-align: top;",ir={"2 Columns (1:1)":`
    <div style="position: relative;">
      
      <table style="${He}">
        <tbody>
          <tr>
            <td style="${ae} width: 50%;"><p>Column 1</p></td>
            <td style="${ae} width: 50%;"><p>Column 2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"3 Columns (1:1:1)":`
    <div style="position: relative;">
      
      <table style="${He}">
        <tbody>
          <tr>
            <td style="${ae} width: 33.33%;"><p>C1</p></td>
            <td style="${ae} width: 33.33%;"><p>C2</p></td>
            <td style="${ae} width: 33.33%;"><p>C3</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"2 Columns (1:2)":`
    <div style="position: relative;">
      
      <table style="${He}">
        <tbody>
          <tr>
            <td style="${ae} width: 33.33%;"><p>C1</p></td>
            <td style="${ae} width: 66.66%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"2 Columns (2:1)":`
    <div style="position: relative;">
      
      <table style="${He}">
        <tbody>
          <tr>
            <td style="${ae} width: 66.66%;"><p>C1</p></td>
            <td style="${ae} width: 33.33%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`},wt=({applyStyle:r,applyLineHeight:s,activeStyles:l,onOpenLinkModal:d,onImageUpload:u,onDocxUpload:b,onVideoModalOpen:g,onTableModalOpen:C,onAiRefactor:h,content:$,isGenerating:S,isAiLoadingMinimized:D})=>{const T=a.useRef(null),U=a.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(er,{}),e.jsxs("div",{className:"modern-toolbar",children:[e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Undo (Ctrl+Z)",onClick:()=>r("undo"),children:e.jsx(o.Undo,{size:18})}),e.jsx(z,{title:"Redo (Ctrl+Y)",onClick:()=>r("redo"),children:e.jsx(o.Redo,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(pe,{title:"Headings",icon:e.jsx(o.Pilcrow,{size:26}),children:Object.entries(nr).map(([w,p])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("formatBlock",p),children:w},w))}),e.jsx(pe,{title:"Font Family",icon:e.jsx(o.Type,{size:26}),children:tr.map(w=>e.jsx("button",{className:"modern-dropdown-item",style:{fontFamily:w},onClick:()=>r("fontName",w),children:w},w))}),e.jsx(pe,{title:"Font Size",icon:"F",children:Object.entries(rr).map(([w,p])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("fontSize",p),children:w},w))}),e.jsx(pe,{title:"Line Height",icon:e.jsx(o.ArrowDownUp,{size:26}),children:Object.entries(or).map(([w,p])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>s(p),children:w},w))})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Bold (Ctrl+B)",command:"bold",activeStyles:l,onClick:()=>r("bold"),children:e.jsx(o.Bold,{size:18})}),e.jsx(z,{title:"Italic (Ctrl+I)",command:"italic",activeStyles:l,onClick:()=>r("italic"),children:e.jsx(o.Italic,{size:18})}),e.jsx(z,{title:"Underline (Ctrl+U)",command:"underline",activeStyles:l,onClick:()=>r("underline"),children:e.jsx(o.Underline,{size:18})}),e.jsx(z,{title:"Strikethrough",command:"strikeThrough",activeStyles:l,onClick:()=>r("strikeThrough"),children:e.jsx(o.Strikethrough,{size:18})}),e.jsx(z,{title:"Superscript",command:"superscript",activeStyles:l,onClick:()=>r("superscript"),children:e.jsx(o.Superscript,{size:18})}),e.jsx(z,{title:"Subscript",command:"subscript",activeStyles:l,onClick:()=>r("subscript"),children:e.jsx(o.Subscript,{size:18})}),e.jsx(Ct,{applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(nt,{command:"foreColor",applyStyle:r}),e.jsx(nt,{command:"backColor",applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Align Left",command:"justifyLeft",activeStyles:l,onClick:()=>r("justifyLeft"),children:e.jsx(o.AlignLeft,{size:18})}),e.jsx(z,{title:"Align Center",command:"justifyCenter",activeStyles:l,onClick:()=>r("justifyCenter"),children:e.jsx(o.AlignCenter,{size:18})}),e.jsx(z,{title:"Align Right",command:"justifyRight",activeStyles:l,onClick:()=>r("justifyRight"),children:e.jsx(o.AlignRight,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Ordered List",command:"insertOrderedList",activeStyles:l,onClick:()=>r("insertOrderedList"),children:e.jsx(o.ListOrdered,{size:18})}),e.jsx(z,{title:"Unordered List",command:"insertUnorderedList",activeStyles:l,onClick:()=>r("insertUnorderedList"),children:e.jsx(o.List,{size:18})}),e.jsx(z,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(o.Outdent,{size:18})}),e.jsx(z,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(o.Indent,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(o.Quote,{size:18})}),e.jsx(z,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(o.Code,{size:18})}),e.jsx(z,{title:"Add/Edit Link (Ctrl+K)",onClick:d,children:e.jsx(o.Link,{size:18})}),e.jsx(z,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(o.Minus,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Insert Image",onClick:()=>{var w;return(w=T.current)==null?void 0:w.click()},children:e.jsx(o.Image,{size:18})}),e.jsx(z,{title:"Insert Video",onClick:g,children:e.jsx(o.Video,{size:20})}),e.jsx(z,{title:"Insert Table",onClick:C,children:e.jsx(o.Table,{size:18})}),e.jsx(pe,{title:"Insert Columns",icon:e.jsx(o.Columns,{size:26}),children:Object.entries(ir).map(([w,p])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("insertHTML",p+"<p><br></p>"),children:w},w))}),e.jsx(z,{title:"Import from Word (.docx)",onClick:()=>{var w;return(w=U.current)==null?void 0:w.click()},children:e.jsx(o.FileUp,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(o.Eraser,{size:18,style:{color:"red"}})}),e.jsx(z,{title:"Improve with AI",onClick:h,disabled:!$||$===""||S,className:"modern-ai-button mx-0 rounded-3",children:S&&!D?e.jsx("div",{className:"spinner"}):e.jsx(o.Sparkles,{size:20})})]})]}),e.jsx("input",{type:"file",accept:"image/*",ref:T,onChange:u,style:{display:"none"}}),e.jsx("input",{type:"file",accept:".docx",ref:U,onChange:b,style:{display:"none"}})]})};wt.propTypes={applyStyle:n.func.isRequired,applyLineHeight:n.func.isRequired,activeStyles:n.object.isRequired,onOpenLinkModal:n.func.isRequired,onImageUpload:n.func.isRequired,onDocxUpload:n.func.isRequired,onVideoModalOpen:n.func.isRequired,onTableModalOpen:n.func.isRequired,onAiRefactor:n.func.isRequired,content:n.string,isGenerating:n.bool.isRequired,isAiLoadingMinimized:n.bool.isRequired};const L=a.memo(({onClick:r,title:s,cmd:l,active:d,disabled:u=!1,children:b,className:g=""})=>e.jsx("button",{type:"button",onClick:r,onMouseDown:C=>C.preventDefault(),className:`futuristic-button ${d&&d.has(l)?"active":""} ${g}`,title:s,disabled:u,children:e.jsx("span",{className:"button-content",children:b})}));L.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,cmd:n.string,active:n.object,disabled:n.bool,children:n.node.isRequired,className:n.string},L.displayName="FuturisticToolbarButton";const be=({title:r,icon:s,children:l})=>{const[d,u]=a.useState(!1),b=a.useRef(null);return a.useEffect(()=>{const g=C=>{b.current&&!b.current.contains(C.target)&&u(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),e.jsxs("div",{className:"futuristic-dropdown",ref:b,children:[e.jsx("button",{type:"button",title:r,onClick:()=>u(!d),onMouseDown:g=>g.preventDefault(),className:"futuristic-button","aria-expanded":d,children:e.jsxs("span",{className:"button-content",children:[s,e.jsx(o.ChevronDown,{size:16,className:`chevron-icon ${d?"open":""}`})]})}),e.jsx("div",{className:`futuristic-dropdown-menu ${d?"show":""}`,onClick:()=>u(!1),children:l})]})};be.propTypes={title:n.string.isRequired,icon:n.node.isRequired,children:n.node.isRequired};const sr=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],ot=({command:r,applyStyle:s})=>{const l=r==="foreColor"?"Text Color":"Highlight Color",d=r==="foreColor"?e.jsx(o.Palette,{size:18}):e.jsx(o.Highlighter,{size:18});return e.jsx(be,{title:l,icon:d,children:e.jsx("div",{className:"futuristic-color-picker",children:sr.map(u=>e.jsx("button",{type:"button",className:"color-swatch-hexagon",onClick:()=>s(r,u),"aria-label":u,children:e.jsx("div",{className:"hexagon-inner",style:{backgroundColor:u}})},u))})})};ot.propTypes={command:n.oneOf(["foreColor","backColor"]).isRequired,applyStyle:n.func.isRequired};const ar=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],kt=({applyStyle:r})=>e.jsx(be,{title:"Insert Emoji",icon:e.jsx(o.Smile,{size:18}),children:e.jsx("div",{className:"futuristic-emoji-picker",children:ar.map(s=>e.jsx("button",{type:"button",className:"futuristic-emoji",onClick:()=>r("insertText",s),children:s},s))})});kt.propTypes={applyStyle:n.func.isRequired};const lr=()=>e.jsx("style",{children:`
      @property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

:root {
  --bg-color: rgba(10, 10, 20, 0.6);
  --border-color: rgba(230, 228, 231, 0.45);
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

      `}),dr=["Arial","Georgia","Verdana","Courier New"],cr={H1:"<h1>",H2:"<h2>",H3:"<h3>",Paragraph:"<p>"},ur={None:"0.5",Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},fr={Small:"2",Normal:"3",Large:"5",Huge:"7"},Ue="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 1rem; position: relative; margin: 1rem 0;",le="padding: 1rem; vertical-align: top;",mr={"2 Columns (1:1)":`
    <div style="position: relative;">
      
      <table style="${Ue}">
        <tbody>
          <tr>
            <td style="${le} width: 50%;"><p>Column 1</p></td>
            <td style="${le} width: 50%;"><p>Column 2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"3 Columns (1:1:1)":`
    <div style="position: relative;">
      
      <table style="${Ue}">
        <tbody>
          <tr>
            <td style="${le} width: 33.33%;"><p>C1</p></td>
            <td style="${le} width: 33.33%;"><p>C2</p></td>
            <td style="${le} width: 33.33%;"><p>C3</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"2 Columns (1:2)":`
    <div style="position: relative;">
      
      <table style="${Ue}">
        <tbody>
          <tr>
            <td style="${le} width: 33.33%;"><p>C1</p></td>
            <td style="${le} width: 66.66%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,"2 Columns (2:1)":`
    <div style="position: relative;">
      
      <table style="${Ue}">
        <tbody>
          <tr>
            <td style="${le} width: 66.66%;"><p>C1</p></td>
            <td style="${le} width: 33.33%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`},Nt=({applyStyle:r,applyLineHeight:s,activeStyles:l,onOpenLinkModal:d,onImageUpload:u,onDocxUpload:b,onVideoModalOpen:g,onTableModalOpen:C,onAiRefactor:h,content:$,isGenerating:S,isAiLoadingMinimized:D})=>{const T=a.useRef(null),U=a.useRef(null),w=a.useRef(null),[p,V]=a.useState({x:50,y:50}),[q,R]=a.useState(!1),he=a.useRef({x:0,y:0}),ge=N=>{N.button===0&&(R(!0),he.current={x:N.clientX-p.x,y:N.clientY-p.y},N.preventDefault())};return a.useEffect(()=>{const N=te=>{q&&V({x:te.clientX-he.current.x,y:te.clientY-he.current.y})},X=()=>R(!1);return window.addEventListener("mousemove",N),window.addEventListener("mouseup",X),()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",X)}},[q]),e.jsxs(e.Fragment,{children:[e.jsx(lr,{}),e.jsxs("div",{ref:w,className:`futuristic-toolbar ${q?"is-dragging":""}`,style:{top:`${p.y}px`,left:`${p.x}px`},children:[e.jsx("div",{className:"drag-handle",onMouseDown:ge,title:"Drag Toolbar",children:e.jsx(o.GripVertical,{size:20})}),e.jsxs("div",{className:"toolbar-content",children:[e.jsxs("div",{className:"toolbar-group",children:[e.jsx(L,{title:"Undo",onClick:()=>r("undo"),children:e.jsx(o.Undo,{size:18})}),e.jsx(L,{title:"Redo",onClick:()=>r("redo"),children:e.jsx(o.Redo,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(be,{title:"Headings",icon:e.jsx(o.Pilcrow,{size:18}),children:Object.entries(cr).map(([N,X])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>r("formatBlock",X),children:N},N))}),e.jsx(be,{title:"Font",icon:e.jsx(o.Type,{size:18}),children:dr.map(N=>e.jsx("button",{className:"futuristic-dropdown-item",style:{fontFamily:N},onClick:()=>r("fontName",N),children:N},N))}),e.jsx(be,{title:"Font Size",icon:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",fontSize:"19px"},children:"F"}),children:Object.entries(fr).map(([N,X])=>e.jsx("button",{className:"dropdown-item",onClick:()=>r("fontSize",X),children:N},N))}),e.jsx(be,{title:"Line Height",icon:e.jsx(o.ArrowDownUp,{size:18}),children:Object.entries(ur).map(([N,X])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>s(X),children:N},N))})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(L,{title:"Bold",cmd:"bold",active:l,onClick:()=>r("bold"),children:e.jsx(o.Bold,{size:18})}),e.jsx(L,{title:"Italic",cmd:"italic",active:l,onClick:()=>r("italic"),children:e.jsx(o.Italic,{size:18})}),e.jsx(L,{title:"Underline",cmd:"underline",active:l,onClick:()=>r("underline"),children:e.jsx(o.Underline,{size:18})}),e.jsx(L,{title:"Strikethrough",cmd:"strikeThrough",active:l,onClick:()=>r("strikeThrough"),children:e.jsx(o.Strikethrough,{size:18})}),e.jsx(L,{title:"Superscript",cmd:"superscript",active:l,onClick:()=>r("superscript"),children:e.jsx(o.Superscript,{size:18})}),e.jsx(L,{title:"Subscript",cmd:"subscript",active:l,onClick:()=>r("subscript"),children:e.jsx(o.Subscript,{size:18})}),e.jsx(ot,{command:"foreColor",applyStyle:r}),e.jsx(ot,{command:"backColor",applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(L,{title:"Align Left",cmd:"justifyLeft",active:l,onClick:()=>r("justifyLeft"),children:e.jsx(o.AlignLeft,{size:18})}),e.jsx(L,{title:"Align Center",cmd:"justifyCenter",active:l,onClick:()=>r("justifyCenter"),children:e.jsx(o.AlignCenter,{size:18})}),e.jsx(L,{title:"Align Right",cmd:"justifyRight",active:l,onClick:()=>r("justifyRight"),children:e.jsx(o.AlignRight,{size:18})}),e.jsx(L,{title:"Ordered List",cmd:"insertOrderedList",active:l,onClick:()=>r("insertOrderedList"),children:e.jsx(o.ListOrdered,{size:18})}),e.jsx(L,{title:"Unordered List",cmd:"insertUnorderedList",active:l,onClick:()=>r("insertUnorderedList"),children:e.jsx(o.List,{size:18})}),e.jsx(L,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(o.Outdent,{size:18})}),e.jsx(L,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(o.Indent,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(L,{title:"Add/Edit Link",onClick:d,children:e.jsx(o.Link,{size:18})}),e.jsx(L,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(o.Quote,{size:18})}),e.jsx(L,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(o.Code,{size:18})}),e.jsx(L,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(o.Minus,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(L,{title:"Insert Image",onClick:()=>{var N;return(N=T.current)==null?void 0:N.click()},children:e.jsx(o.Image,{size:18})}),e.jsx(L,{title:"Insert Video",onClick:g,children:e.jsx(o.Video,{size:18})}),e.jsx(L,{title:"Insert Table",onClick:C,children:e.jsx(o.Table,{size:18})}),e.jsx(be,{title:"Insert Columns",icon:e.jsx(Columns,{size:18}),children:Object.entries(mr).map(([N,X])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>r("insertHTML",X+"<p><br></p>"),children:N},N))}),e.jsx(L,{title:"Import from Word",onClick:()=>{var N;return(N=U.current)==null?void 0:N.click()},children:e.jsx(o.FileUp,{size:18})}),e.jsx(kt,{applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(L,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(o.Eraser,{size:18})}),e.jsx("div",{className:"toolbar-separator"}),e.jsx(L,{title:"Improve with AI",onClick:h,disabled:!$||S,className:"ai-button rounded-3",children:S?e.jsx("div",{className:"spinner"}):e.jsx(o.Sparkles,{size:18})})]})]})]}),e.jsx("input",{type:"file",accept:"image/*",ref:T,onChange:u,style:{display:"none"}}),e.jsx("input",{type:"file",accept:".docx",ref:U,onChange:b,style:{display:"none"}})]})};Nt.propTypes={applyStyle:n.func.isRequired,activeStyles:n.object.isRequired,applyLineHeight:n.func.isRequired,onOpenLinkModal:n.func.isRequired,onImageUpload:n.func.isRequired,onDocxUpload:n.func.isRequired,onVideoModalOpen:n.func.isRequired,onTableModalOpen:n.func.isRequired,onAiRefactor:n.func.isRequired,content:n.string,isGenerating:n.bool.isRequired,isAiLoadingMinimized:n.bool.isRequired};const yt=({theme:r,...s})=>r==="modern"?e.jsx(wt,{...s}):r==="futuristic"?e.jsx(Nt,{...s}):e.jsx(jt,{...s});yt.propTypes={theme:n.oneOf(["classic","modern","futuristic"])};const Ft=({editorRef:r,content:s,showSource:l,onContentChange:d,onKeyDown:u,textContentClass:b})=>l?e.jsx("textarea",{value:s||"",onChange:d,className:"form-control rounded-0 border-0  font-monospace small bg-dark text-light forma-text-source-view  "}):e.jsx("div",{ref:r,contentEditable:!0,suppressContentEditableWarning:!0,className:`forma-text-editor-content form-control rounded-0 border-0 h-100 p-3 ${b}`,style:{minHeight:"60vh"},onInput:d,onKeyDown:u});Ft.propTypes={editorRef:n.object.isRequired,content:n.string,showSource:n.bool.isRequired,onContentChange:n.func.isRequired,onKeyDown:n.func.isRequired,textContentClass:n.string};const Te=({children:r,onClose:s,title:l,icon:d,size:u="modal-dialog-centered"})=>e.jsx("div",{className:"modal fade show",style:{display:"block",backgroundColor:"rgba(0,0,0,0.5)"},onClick:s,children:e.jsx("div",{className:`modal-dialog ${u}`,onClick:b=>b.stopPropagation(),children:e.jsxs("div",{className:"modal-content border-0 shadow-lg",children:[e.jsxs("div",{className:"modal-header bg-light border-0",children:[e.jsxs("h5",{className:"modal-title d-flex align-items-center gap-2",children:[d,l]}),e.jsx("button",{type:"button",className:"btn-close",onClick:s})]}),r]})})});Te.propTypes={children:n.node.isRequired,onClose:n.func.isRequired,title:n.string.isRequired,icon:n.node,size:n.string};const Et=({isOpen:r,onClose:s,onApply:l,initialData:d,isEditing:u})=>{const[b,g]=a.useState({text:"",href:""});return a.useEffect(()=>{r&&g(d)},[r,d]),r?e.jsxs(Te,{onClose:s,title:u?"Edit Link":"Add Link",icon:e.jsx(o.Link,{size:20,className:"text-primary"}),children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Link Text"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:e.jsx(o.Pilcrow,{size:16})}),e.jsx("input",{type:"text",className:"form-control",value:b.text,onChange:C=>g({...b,text:C.target.value})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label fw-semibold",children:"Link URL"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:e.jsx(o.ExternalLink,{size:16})}),e.jsx("input",{type:"url",className:"form-control",value:b.href,onChange:C=>g({...b,href:C.target.value}),placeholder:"https://example.com",autoFocus:!0})]})]})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:()=>l(b),children:"Apply Link"})]})]}):null};Et.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onApply:n.func.isRequired,initialData:n.shape({text:n.string,href:n.string}).isRequired,isEditing:n.bool.isRequired};const St=({isOpen:r,onClose:s,onInsert:l})=>{const[d,u]=a.useState("");if(!r)return null;const b=()=>{l(d),u("")};return e.jsxs(Te,{onClose:s,title:"Insert Video",icon:e.jsx(o.Video,{size:20,className:"text-primary"}),children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Video URL"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:e.jsx(o.Link,{size:16})}),e.jsx("input",{type:"url",className:"form-control",value:d,onChange:g=>u(g.target.value),placeholder:"e.g., https://www.youtube.com/watch?v=...",autoFocus:!0})]}),e.jsx("div",{className:"form-text video-modal-title",children:"Supports YouTube and Vimeo links."})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:b,children:"Insert Video"})]})]})};St.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onInsert:n.func.isRequired};const Ot=({isOpen:r,onClose:s,onCreate:l})=>{const[d,u]=a.useState({rows:3,cols:3});return r?e.jsxs(Te,{onClose:s,title:"Create Table",icon:e.jsx(o.Table,{size:20,className:"text-primary"}),children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Rows"}),e.jsx("input",{type:"number",className:"form-control",value:d.rows,min:"1",onChange:b=>u({...d,rows:parseInt(b.target.value,10)||1})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label fw-semibold",children:"Columns"}),e.jsx("input",{type:"number",className:"form-control",value:d.cols,min:"1",onChange:b=>u({...d,cols:parseInt(b.target.value,10)||1})})]})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:()=>l(d),children:"Create"})]})]}):null};Ot.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onCreate:n.func.isRequired};const zt=({status:r,isMinimized:s,onMinimizeToggle:l})=>s?e.jsxs("div",{className:"ai-loading-popup-minimized",children:[e.jsx("div",{className:"spinner-border spinner-border-sm text-primary",role:"status"}),e.jsx("span",{className:"ms-2 small",children:"AI is working..."}),e.jsx("button",{onClick:l,className:"btn btn-sm btn-light ms-auto",children:e.jsx(o.ChevronsDownUp,{size:14})})]}):e.jsxs("div",{className:"ai-loading-popup",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("h6",{className:"mb-0 d-flex align-items-center gap-2",children:[e.jsx(o.Sparkles,{size:18,className:"text-primary"}),"AI Assistant"]}),e.jsx("button",{onClick:l,className:"btn btn-sm btn-light",children:e.jsx(o.Minimize,{size:14})})]}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"spinner-border text-primary me-3",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 fw-bold",children:"Working on it..."}),e.jsx("p",{className:"mb-0 text-muted small",children:r})]})]})]});zt.propTypes={status:n.string.isRequired,isMinimized:n.bool.isRequired,onMinimizeToggle:n.func.isRequired};const Lt=({isOpen:r,onClose:s,onApply:l,originalContent:d,suggestion:u,highlightedDiff:b})=>r?e.jsxs(Te,{onClose:s,title:"AI Content Suggestion",icon:e.jsx(o.Sparkles,{size:20,className:"text-primary"}),size:"modal-xl",children:[e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("ul",{className:"nav nav-tabs mb-3",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link active",id:"preview-tab","data-bs-toggle":"tab","data-bs-target":"#preview-pane",type:"button",role:"tab","aria-controls":"preview-pane","aria-selected":"true",children:"Preview Changes"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link",id:"diff-tab","data-bs-toggle":"tab","data-bs-target":"#diff-pane",type:"button",role:"tab","aria-controls":"diff-pane","aria-selected":"false",children:"Highlight Changes"})})]}),e.jsxs("div",{className:"tab-content",children:[e.jsx("div",{className:"tab-pane fade show active",id:"preview-pane",role:"tabpanel","aria-labelledby":"preview-tab",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h6",{className:"mb-2 text-muted",children:"Original Content"}),e.jsx("div",{className:"ai-preview-pane",dangerouslySetInnerHTML:{__html:d}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h6",{className:"mb-2 text-success",children:"AI Suggestion"}),e.jsx("div",{className:"ai-preview-pane",dangerouslySetInnerHTML:{__html:u}})]})]})}),e.jsxs("div",{className:"tab-pane fade",id:"diff-pane",role:"tabpanel","aria-labelledby":"diff-tab",children:[e.jsx("h6",{className:"mb-2 text-primary",children:"Highlighted Differences"}),e.jsxs("p",{className:"small text-muted",children:[e.jsx("span",{className:"px-2 py-1 me-2 rounded",style:{backgroundColor:"#d4edda"},children:"Added content"}),e.jsx("span",{className:"px-2 py-1 rounded",style:{backgroundColor:"#f8d7da"},children:"Removed content"})]}),e.jsx("div",{className:"ai-preview-pane",dangerouslySetInnerHTML:{__html:b}})]})]})]}),e.jsxs("div",{className:"modal-footer border-0 bg-light",children:[e.jsx("button",{type:"button",className:"btn editor-secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn editor-primary",onClick:l,children:"Apply Suggestion"})]})]}):null;Lt.propTypes={isOpen:n.bool.isRequired,onClose:n.func.isRequired,onApply:n.func.isRequired,originalContent:n.string,suggestion:n.string,highlightedDiff:n.string};const Ve=a.memo(({onClick:r,title:s,command:l,activeStyles:d,disabled:u=!1,children:b})=>e.jsx("button",{type:"button",onClick:r,onMouseDown:g=>g.preventDefault(),className:`btn btn-outline-secondary ${d&&d.has(l)?"active":""}`,"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:s,disabled:u,children:b}));Ve.propTypes={onClick:n.func.isRequired,title:n.string.isRequired,command:n.string,activeStyles:n.object,disabled:n.bool,children:n.node.isRequired},Ve.displayName="StatusToolbarButton";const It=({wordCount:r,charCount:s,onToggleSource:l,showSource:d,onToggleFullScreen:u,isFullScreen:b,trialExpiresIn:g})=>e.jsxs("div",{className:"flex-shrink-0 p-2 border-top bg-light d-flex justify-content-between align-items-center small text-muted",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"footer-text-area",children:["Words: ",r]}),e.jsx("span",{className:"mx-2",children:"|"}),e.jsxs("span",{className:"footer-text-area",children:["Characters: ",s]})]}),e.jsxs("div",{className:"btn-group",children:[e.jsx(Ve,{title:"View HTML Source",onClick:l,children:e.jsx(o.CodeXml,{size:16})}),e.jsx(Ve,{title:b?"Exit Full Screen":"Full Screen",onClick:u,children:b?e.jsx(o.Minimize,{size:16}):e.jsx(o.Maximize,{size:16})})]})]});It.propTypes={wordCount:n.number.isRequired,charCount:n.number.isRequired,onToggleSource:n.func.isRequired,showSource:n.bool.isRequired,onToggleFullScreen:n.func.isRequired,isFullScreen:n.bool.isRequired,isPremium:n.bool};const pr=()=>e.jsx("style",{children:`
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

      `}),At=({wordCount:r,charCount:s,onToggleSource:l,isFullScreen:d,onToggleFullScreen:u})=>{const[b,g]=a.useState(!1);return a.useEffect(()=>{const C=setTimeout(()=>g(!0),100);return()=>clearTimeout(C)},[]),e.jsxs(e.Fragment,{children:[e.jsx(pr,{}),e.jsxs("div",{className:`futuristic-statusbar-v2 ${b?"is-booted":""}`,children:[e.jsx("div",{className:"corner-bracket top-left"}),e.jsx("div",{className:"corner-bracket top-right"}),e.jsx("div",{className:"corner-bracket bottom-left"}),e.jsx("div",{className:"corner-bracket bottom-right"}),e.jsx("div",{className:"grid-background"}),e.jsxs("div",{className:"statusbar-content",children:[e.jsxs("div",{className:"status-group-v2",children:[e.jsxs("div",{className:"data-readout",title:"Word Count",children:[e.jsx(o.Sigma,{size:16,className:"data-icon"}),e.jsx("span",{className:"data-label",children:"WORDS"}),e.jsx("span",{className:"data-value",children:r.toString().padStart(4,"0")})]}),e.jsxs("div",{className:"data-readout",title:"Character Count",children:[e.jsx(o.Binary,{size:16,className:"data-icon"}),e.jsx("span",{className:"data-label",children:"CHARS"}),e.jsx("span",{className:"data-value",children:s.toString().padStart(5,"0")})]})]}),e.jsxs("div",{className:"status-group-v2",children:[e.jsx("button",{className:"action-button",title:"View HTML Source",onClick:l,children:e.jsx(o.CodeXml,{size:18})}),e.jsx("button",{className:"action-button",title:d?"Exit Full Screen":"Full Screen",onClick:u,children:d?e.jsx(o.Minimize,{size:18}):e.jsx(o.Maximize,{size:18})})]})]})]})]})};At.propTypes={wordCount:n.number.isRequired,charCount:n.number.isRequired,onToggleSource:n.func.isRequired,onToggleFullScreen:n.func.isRequired,isFullScreen:n.bool.isRequired};const br=()=>e.jsx("style",{children:`
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

    `}),Tt=({wordCount:r,charCount:s,onToggleSource:l,isFullScreen:d,onToggleFullScreen:u})=>e.jsxs(e.Fragment,{children:[e.jsx(br,{}),e.jsxs("div",{className:"modern-statusbar",children:[e.jsxs("div",{className:"statusbar-segment",children:[e.jsxs("span",{className:"statusbar-item",children:["Words: ",r]}),e.jsx("span",{className:"statusbar-divider",children:"|"}),e.jsxs("span",{className:"statusbar-item",children:["Characters: ",s]})]}),e.jsxs("div",{className:"statusbar-segment",children:[e.jsx("button",{className:"statusbar-button",title:"View HTML Source",onClick:l,children:e.jsx(o.CodeXml,{size:18})}),e.jsx("button",{className:"statusbar-button",title:d?"Exit Full Screen":"Full Screen",onClick:u,children:d?e.jsx(o.Minimize,{size:18}):e.jsx(o.Maximize,{size:18})})]})]})]});Tt.propTypes={wordCount:n.number.isRequired,charCount:n.number.isRequired,onToggleSource:n.func.isRequired,onToggleFullScreen:n.func.isRequired,isFullScreen:n.bool.isRequired};const _t=({theme:r,...s})=>r==="modern"?e.jsx(Tt,{...s}):r==="futuristic"?e.jsx(At,{...s}):e.jsx(It,{...s});_t.propTypes={theme:n.oneOf(["classic","modern","futuristic"])};function xr(r){if(typeof document>"u")return;const s=`bootstrap-css-scoped-${r}`,l="bootstrap-js-cdn-script";if(!document.getElementById(s)&&(fetch("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css").then(d=>{if(!d.ok)throw new Error("Network response was not ok fetching Bootstrap CSS.");return d.text()}).then(d=>{const u=`#${r}`,b=h=>{const $=/([^{}]*)({[^{}]*})/g;return h.replace($,(S,D,T)=>{if(D.trim()==="")return S;if(D.trim().startsWith("@")){const w=b(T.substring(1,T.length-1));return`${D}{${w}}`}return`${D.split(",").map(w=>{const p=w.trim();return p?p==="body"||p==="html"||p===":root"?`${u}${p.replace(/body|html|:root/,"")}`:p.match(/^\d{1,2}%$/)||p==="from"||p==="to"?p:`${u} ${p}`:""}).join(", ")} ${T}`})},g=b(d),C=document.createElement("style");C.id=s,C.textContent=g,document.head.appendChild(C)}).catch(d=>console.error("Failed to fetch and scope Bootstrap CSS:",d)),!document.getElementById(l))){const d=document.createElement("script");d.id=l,d.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",d.crossOrigin="anonymous",d.defer=!0,document.body.appendChild(d)}}const hr=()=>e.jsx("style",{children:`
      /* --- Main Container & Layout --- */
            .forma-text-source-view {
              min-height: 60vh !important;
              max-height: 75vh;
              resize: none;
              display: block;
              width: 98%;
              height: 100%;
            margin: auto;
              font-family: monospace;
              font-size: 0.875em;
              color: #f8f9fa;
              background-color: #212529;
              border: none;
              border-radius: 0;
              outline: none;
                   white-space: pre-wrap;
              word-wrap: break-word;
            overflow-x: hidden;
            }

      /* --- Main Container & Layout --- */
      .forma-text-editor-container {
        display: flex;
        flex-direction: column;
        border: 1px solid #dee2e6;
        border-radius: 0.375rem;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        background-color: #ffffff;
        max-height: 90vh;
        overflow: hidden !important; /* Prevents children from breaking border radius */
      }
      .forma-text-fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh !important;
                max-height: 100vh !important;
        z-index: 1050;
        border-radius: 0;
        border: none;
      }
      .forma-text-toolbar-container {
        flex-shrink: 0;
        border-bottom: 1px solid #dee2e6;
        background-color: #f8f9fa;
      }
      .forma-text-editor-area {
        flex-grow: 1;
        overflow: auto;
        position: relative;
        padding: 15px;
      }
      .forma-text-editor-content:focus {
        outline: none;
        box-shadow: none;
      }

      /* --- Content Styling (Blockquote, Code) --- */
      .forma-text-editor-content blockquote {
        border-left: 4px solid #ccc;
        margin-left: 0;
        padding-left: 1rem;
        color: #6c757d;
      }
      .forma-text-editor-content pre {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        padding: 1rem;
        border-radius: 0.25rem;
        white-space: pre-wrap;
        word-break: break-all;
      }

      /* --- Image, Video, Table Specific Styles --- */
      .forma-text-image-wrapper {
        position: relative;
        display: inline-block;
        line-height: 0; /* Removes extra space below image */
      }
      .forma-text-image-wrapper img {
        max-width: 100%;
        height: auto;
      }
      .forma-text-video-wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        max-width: 100%;
        background: #000;
        margin: 1rem 0;
      }
      .forma-text-video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .forma-text-table {
        width: 90%;
        border-collapse: collapse;
        border: 1px solid #a0a0a0;
        margin: 1rem auto;
      }
      .forma-text-table td {
        border: 1px solid #afafaf;
        padding: 0.75rem;
        min-width: 40px;
      }

      /* --- Selection Overlays & Contextual Toolbars --- */
      .forma-text-selection-overlay {
        position: absolute;
        pointer-events: none;
        margin-top: 13px;
        margin-left: 13px;
        border: 2px solid #0d6efd;
        z-index: 10;
        border-radius: 4px;
      }
      .forma-text-context-toolbar {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 4px;
        padding: 15px;
        border-radius: 6px;
        pointer-events: auto;
        z-index: 11;
      }
      .forma-text-context-toolbar button {
        background-color: #495057;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
      }
      .forma-text-context-toolbar button:hover {
        background-color: #6c757d;
      }
      .forma-text-context-toolbar button.forma-text-delete-btn {
        background-color: #dc3545;
      }
      .forma-text-context-toolbar button.forma-text-delete-btn:hover {
        background-color: #c82333;
      }

      /* --- Image Resize Handle --- */
      .forma-text-resize-handle {
        position: absolute;
        bottom: -7px;
        right: -7px;
        width: 14px;
        height: 14px;
        background-color: #0d6efd;
        border: 2px solid white;
        border-radius: 50%;
        cursor: se-resize;
        pointer-events: auto;
        z-index: 12;
      }

      /* --- AI Related Popups & Modals --- */
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
      .ai-preview-pane {
        height: 400px;
        overflow-y: auto;
        border: 1px solid #dee2e6;
        padding: 1rem;
        border-radius: 0.25rem;
        background-color: #fff;
      }
      .forma-text-diff-view ins {
        background-color: #d4edda;
        text-decoration: none;
      }
      .forma-text-diff-view del {
        background-color: #f8d7da;
        text-decoration: line-through;
        color: #721c24;
      }
      .forma-text-diff-view span {
        white-space: pre-wrap;
        word-break: break-word;
      }
      .forma-text-diff-view br[data-original-break] {
        display: none;
      }

      /* --- Modal & Button Overrides --- */
      .modal .editor-primary {
        background-color: #4285f4 !important;
        color: white !important;
        font-size: 14px;
        border-radius: 0px;
      }
      .modal .editor-secondary {
        border: 1px solid #252525ff !important;
        color: #252525ff !important;
        font-size: 14px;
        border-radius: 0px;
      }
    `});function Dt({content:r="",setContent:s=()=>{},geminiApiKey:l="",parentEditorClass:d="",toolBarClass:u="",textContentClass:b="",theme:g="classic"}){const[C]=a.useState(`forma-text-editor-${Math.random().toString(36).substring(2,9)}`),h=a.useRef(null),$=a.useRef(null),S=a.useRef(!1),[D,T]=a.useState(new Set),[U,w]=a.useState({words:0,chars:0}),[p,V]=a.useState(!1),[q,R]=a.useState(!1),[he,ge]=a.useState(!1),[N,X]=a.useState({text:"",href:""}),[te,_e]=a.useState(null),[Ye,De]=a.useState(!1),[it,Ce]=a.useState(!1),[re,Q]=a.useState(!1),[xe,we]=a.useState(""),[We,ke]=a.useState(""),[Ne,Me]=a.useState(!1),[Ge,ye]=a.useState(""),[Fe,Ke]=a.useState(!1),[G,de]=a.useState(null),[ve,ne]=a.useState(null),[ce,ee]=a.useState(null);a.useEffect(()=>{xr(C)},[C]);const K=a.useCallback(()=>{h.current&&(S.current=!0,s(h.current.innerHTML))},[s]),ue=a.useCallback(()=>{const m=window.getSelection();if(m.rangeCount>0){const c=m.getRangeAt(0);h.current&&h.current.contains(c.commonAncestorContainer)&&($.current=c)}},[]),oe=a.useCallback(()=>{if($.current){const m=window.getSelection();m.removeAllRanges(),m.addRange($.current)}},[]);a.useEffect(()=>{if(S.current){S.current=!1;return}h.current&&!p&&r!==h.current.innerHTML&&(h.current.innerHTML=r||"")},[r,p]);const st=a.useCallback(m=>{const c=p?m.target.value:m.currentTarget.innerHTML;S.current=!0,s(c)},[p,s]);a.useEffect(()=>{const m=document.createElement("div");m.innerHTML=r||"";const c=m.textContent||"",x=c.trim().split(/\s+/).filter(Boolean).length;w({words:x,chars:c.length})},[r]);const fe=a.useCallback(()=>{const m=new Set;["bold","italic","underline","strikeThrough","justifyLeft","justifyCenter","justifyRight","insertOrderedList","insertUnorderedList","superscript","subscript"].forEach(x=>{document.queryCommandState(x)&&m.add(x)}),T(m)},[]),Y=a.useCallback((m,c=null)=>{var x;(x=h.current)==null||x.focus(),oe(),document.execCommand(m,!1,c),K(),fe()},[oe,K,fe]),Xe=a.useCallback(m=>{var W;(W=h.current)==null||W.focus(),oe();const c=window.getSelection();if(!c.rangeCount)return;const x=A=>{let H=A.nodeType===Node.ELEMENT_NODE?A:A.parentNode;for(;H&&H!==h.current;){if(window.getComputedStyle(H).display.match(/block|table|list-item/))return H;H=H.parentNode}return null},F=c.getRangeAt(0),j=x(F.startContainer),_=x(F.endContainer);if(j){let A=j;const H=[];for(;A&&(H.push(A),A!==_);)A=A.nextElementSibling;H.forEach(me=>{me.style.lineHeight=m})}K()},[oe,K]);a.useEffect(()=>{const m=()=>{const c=window.getSelection();if(c.rangeCount>0){const x=c.getRangeAt(0);h.current&&h.current.contains(x.commonAncestorContainer)&&(ue(),fe())}};return document.addEventListener("selectionchange",m),()=>document.removeEventListener("selectionchange",m)},[ue,fe]);const Je=a.useCallback(m=>{const c=m.target,x=c.closest("img"),F=c.closest("table.forma-text-table");if(x&&h.current.contains(x)){ne(null),de(x);const j=x.getBoundingClientRect(),_=h.current.getBoundingClientRect();ee({top:j.top-_.top+h.current.scrollTop,left:j.left-_.left+h.current.scrollLeft,width:j.width,height:j.height})}else if(F&&h.current.contains(F)){de(null),ne(F);const j=F.getBoundingClientRect(),_=h.current.getBoundingClientRect();ee({top:j.top-_.top+h.current.scrollTop,left:j.left-_.left+h.current.scrollLeft,width:j.width,height:j.height})}else de(null),ne(null),ee(null)},[]),Ee=a.useCallback(()=>{setTimeout(()=>{var m;document.activeElement!==h.current&&!((m=h.current)!=null&&m.contains(document.activeElement))&&(de(null),ne(null),ee(null))},100)},[]),$e=a.useCallback(()=>{var x;ue();const m=window.getSelection(),c=(x=m.anchorNode)==null?void 0:x.parentElement.closest("a");(c==null?void 0:c.tagName)==="A"?(X({text:c.textContent,href:c.href}),_e(c)):(X({text:m.toString(),href:""}),_e(null)),ge(!0)},[ue]),at=a.useCallback(m=>{if(m.ctrlKey||m.metaKey){const c={b:"bold",i:"italic",u:"underline",k:()=>$e(),z:"undo",y:"redo"};c[m.key]&&(m.preventDefault(),typeof c[m.key]=="function"?c[m.key]():Y(c[m.key]))}},[Y,$e]),qe=a.useCallback(m=>{if(ge(!1),oe(),h.current.focus(),te)te.href=m.href,te.textContent=m.text;else{const c=`<a href="${m.href}" target="_blank" rel="noopener noreferrer">${m.text}</a>`;Y("insertHTML",c)}_e(null),K()},[te,oe,Y,K]),lt=a.useCallback(m=>{const c=m.target.files[0];if(!c)return;const x=new FileReader;x.onload=F=>{const j=`<span class="forma-text-image-wrapper" contenteditable="false"><img src="${F.target.result}" style="width: 250px; height: auto;" alt=""/></span>`;Y("insertHTML",j)},x.readAsDataURL(c),m.target.value=""},[Y]),dt=a.useCallback(m=>{const c=m.target.files[0];if(!c)return;const x=new FileReader;x.onload=F=>{Bt.convertToHtml({arrayBuffer:F.target.result}).then(j=>s(j.value)).catch(j=>console.error("Error converting .docx to HTML:",j))},x.readAsArrayBuffer(c),m.target.value=""},[s]),Ze=a.useCallback(m=>{if(De(!1),!m)return;const x=(j=>{let _;return j.includes("youtube.com/watch?v=")?_=j.split("v=")[1].split("&")[0]:j.includes("youtu.be/")?_=j.split("youtu.be/")[1].split("?")[0]:j.includes("vimeo.com/")&&(_=j.split("vimeo.com/")[1].split("?")[0]),j.includes("youtube")||j.includes("youtu.be")?`https://www.youtube.com/embed/${_}`:j.includes("vimeo")?`https://player.vimeo.com/video/${_}`:null})(m);if(!x){alert("Invalid video URL. Please use a valid YouTube or Vimeo link.");return}oe(),h.current.focus();const F=`<div class="forma-text-video-wrapper" contenteditable="false"><iframe src="${x}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;Y("insertHTML",F),K()},[oe,Y,K]),Qe=a.useCallback(m=>{Ce(!1);let c='<table class="forma-text-table" style="width:90%; border-collapse: collapse; border: 1px solid #a0a0a0ff; margin: auto;"><tbody>';for(let x=0;x<m.rows;x++){c+="<tr>";for(let F=0;F<m.cols;F++)c+='<td style="border: 1px solid #afafafff; padding: 0.75rem;"><br></td>';c+="</tr>"}c+="</tbody></table><p><br></p>",Y("insertHTML",c)},[Y]),Se=a.useCallback(m=>{const c=G==null?void 0:G.parentElement;if(!c||!c.classList.contains("forma-text-image-wrapper"))return;let x=c.parentElement;for(;x&&x!==h.current;){const F=window.getComputedStyle(x).display;if(F==="block"||F==="flex"||F==="grid")break;x=x.parentElement}switch(c.style.float="",c.style.display="inline-block",c.style.marginLeft="",c.style.marginRight="",x&&(x.style.textAlign=""),m){case"center":x?x.style.textAlign="center":(c.style.display="block",c.style.marginLeft="auto",c.style.marginRight="auto");break;case"left":x&&(x.style.textAlign="left"),c.style.float="left",c.style.marginRight="1rem";break;case"right":x&&(x.style.textAlign="right"),c.style.float="right",c.style.marginLeft="1rem";break;default:x&&(x.style.textAlign="");break}K()},[G,K]),ct=a.useCallback(()=>{G&&(G.parentElement.remove(),de(null)),ve&&(ve.remove(),ne(null)),ee(null),K()},[G,ve,K]),Pe=a.useCallback(m=>{m.preventDefault();const c=m.clientX,x=G.offsetWidth,F=_=>{const W=x+(_.clientX-c);if(W>40){G.style.width=`${W}px`,G.style.height="auto";const A=G.getBoundingClientRect(),H=h.current.getBoundingClientRect();ee({top:A.top-H.top+h.current.scrollTop,left:A.left-H.left+h.current.scrollLeft,width:A.width,height:A.height})}},j=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",j),K()};document.addEventListener("mousemove",F),document.addEventListener("mouseup",j)},[G,K]),et=(m,c)=>{const x=new Re.diff_match_patch,F=x.diff_main(m,c);x.diff_cleanupSemantic(F);let j="";for(const[_,W]of F){const A=W.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">").replace(/\n/g,"¶<br>");switch(_){case Re.DIFF_INSERT:j+=`<ins style="background-color: #d4edda; text-decoration: none;">${A}</ins>`;break;case Re.DIFF_DELETE:j+=`<del style="background-color: #f8d7da; text-decoration: none;">${A}</del>`;break;case Re.DIFF_EQUAL:j+=`<span>${A}</span>`;break}}return j},ut=async()=>{var j,_,W,A,H;if(!r.trim()||Ne)return;Me(!0),we(""),Ke(!1);const m=["Analyzing...","Generating suggestions...","Optimizing flow...","Finalizing..."];let c=0;ye(m[c]);const x=setInterval(()=>{c=(c+1)%m.length,ye(m[c])},2e3),F=`
<TASK>
You are a world-class content editor and a senior SEO strategist with elite proficiency in **English, Japanese, Hindi, French, Spanish, Sinhalese,Arabic and Chinese **. Your task is to reformat, stylish, and enhance the provided HTML content.
</TASK>

<LANGUAGE_PROTOCOL>
1. **Identify the Language:** Your first step is to determine if the content's primary language is one of the following:**English, Japanese, Hindi, French, Spanish, Sinhalese,Arabic and Chinese **.
  * **CRITICAL CLARIFICATION:** To do this, analyze **only the human-readable text**. You **must ignore all HTML tags** (e.g., \`<p>\`, \`<div>\`) during this language identification step.
2. **Lock the Language:** All subsequent tasks **must** be performed exclusively in the single language you have identified.
3. **No Translation:** You **must not** translate the content.
</LANGUAGE_PROTOCOL>

<INSTRUCTIONS>
1. **IMPROVE READABILITY & PROFESSIONALISM (in the identified language):**
  * Correct all grammar, spelling, and punctuation errors.
  * **Style tags appropriately using inline CSS. Ensure a clear visual hierarchy (e.g., "<h1 style="font-size: 2em;">", "<h2 style="font-size: 1.5em;">", "<p style="font-size: 1em;">").**
  * Add proper spaces and line heigh and font height for text
  * Maintain a professional and authoritative yet accessible tone.

2. **ENHANCE SEO & STRUCTURE (in the identified language):**
  * Ensure there is one single, compelling \`<h1>\` tag that captures the main topic.
  * Structure the content logically using \`<h2>\` for main sections and \`<h3>\` for sub-sections.
  * Where appropriate, convert lists or series of items into bulleted (\`<ul>\`) or numbered (\`<ol>\`) lists for better scannability.
  * Use \`<strong>\` for important keywords or phrases instead of \`<b>\`. Use \`<em>\` for emphasis instead of \`<i>\`.

3. **CORE CONTENT REQUIREMENTS:**
  * Preserve the original core message, facts, and meaning.
  * Use **inline CSS** for any styling (e.g., \`<p style="color: #333;">\`).
</INSTRUCTIONS>

<ABSOLUTE_OUTPUT_FORMAT>
-  **CRITICAL:** Your entire response must be **RAW HTML code ONLY**.
-  **DO NOT** under any circumstances wrap your response in markdown fences like \`\`\`html or \`\`\`.
-  **DO NOT** include any commentary, notes, or explanations before or after the code.
-  **DO NOT** include \`<html>\`, \`<head>\`, \`<body>\`, \`<title>\`, \`<meta>\`, or \`<script>\` tags.
-  Your response must start directly with the first HTML tag (e.g., \`<h1>\`) and end with the last closing tag.
</ABSOLUTE_OUTPUT_FORMAT>

<CONTENT_TO_IMPROVE>
${r}
</CONTENT_TO_IMPROVE>
`;try{const me={contents:[{role:"user",parts:[{text:F}]}]},pt=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${l}`,Oe=await fetch(pt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(me)});if(!Oe.ok)throw new Error(`API call failed: ${Oe.status}`);const ze=(H=(A=(W=(_=(j=(await Oe.json()).candidates)==null?void 0:j[0])==null?void 0:_.content)==null?void 0:W.parts)==null?void 0:A[0])==null?void 0:H.text;if(ze)we(ze),ke(et(r,ze)),Q(!0);else throw new Error("Invalid AI response format")}catch(me){console.error("Error calling Gemini API:",me),ke(`<p>Sorry, an error occurred. ${me.message}</p>`),Q(!0)}finally{clearInterval(x),Me(!1),ye("")}},ft=()=>{s(xe),Q(!1),we(""),ke("")},mt=["forma-text-editor-container",d,q?"forma-text-fullscreen":""].filter(Boolean).join(" ");return e.jsxs(e.Fragment,{children:[e.jsx(hr,{}),e.jsxs("div",{id:C,className:mt,"data-theme":g,children:[e.jsx("div",{className:`forma-text-toolbar-container ${u}`,children:e.jsx(yt,{theme:g,applyStyle:Y,applyLineHeight:Xe,activeStyles:D,onOpenLinkModal:$e,onImageUpload:lt,onDocxUpload:dt,onVideoModalOpen:()=>{ue(),De(!0)},onTableModalOpen:()=>{ue(),Ce(!0)},onAiRefactor:ut,content:r,isGenerating:Ne,isAiLoadingMinimized:Fe})}),e.jsxs("div",{className:"forma-text-editor-area",onClick:Je,onBlur:Ee,children:[e.jsx(Ft,{editorRef:h,content:r,showSource:p,onContentChange:st,onKeyDown:at,textContentClass:`forma-text-editor-content ${b}`}),ce&&!p&&e.jsxs("div",{className:"forma-text-selection-overlay",style:{top:`${ce.top}px`,left:`${ce.left}px`,width:`${ce.width}px`,height:`${ce.height}px`},children:[e.jsxs("div",{className:"forma-text-context-toolbar",children:[G&&e.jsxs(e.Fragment,{children:[e.jsx("button",{title:"Align Left",onClick:()=>Se("left"),children:e.jsx(o.AlignStartVertical,{size:16})}),e.jsx("button",{title:"Align Center",onClick:()=>Se("center"),children:e.jsx(o.AlignCenterVertical,{size:16})}),e.jsx("button",{title:"Align Right",onClick:()=>Se("right"),children:e.jsx(o.AlignEndVertical,{size:16})})]}),e.jsx("button",{title:"Delete",className:"forma-text-delete-btn rounded-5",onClick:ct,children:e.jsx(o.Trash2,{size:16})})]}),G&&e.jsx("div",{className:"forma-text-resize-handle ",onMouseDown:Pe})]})]}),e.jsx(_t,{theme:g,wordCount:U.words,charCount:U.chars,onToggleSource:()=>V(!p),showSource:p,onToggleFullScreen:()=>R(!q),isFullScreen:q}),Ne&&e.jsx(zt,{status:Ge,isMinimized:Fe,onMinimizeToggle:()=>Ke(!Fe)}),e.jsx(Et,{isOpen:he,onClose:()=>ge(!1),onApply:qe,initialData:N,isEditing:!!te}),e.jsx(St,{isOpen:Ye,onClose:()=>De(!1),onInsert:Ze}),e.jsx(Ot,{isOpen:it,onClose:()=>Ce(!1),onCreate:Qe}),e.jsx(Lt,{isOpen:re,onClose:()=>Q(!1),onApply:ft,originalContent:r,suggestion:xe,highlightedDiff:We})]})]})}return Dt.propTypes={content:n.string,setContent:n.func,geminiApiKey:n.string,parentEditorClass:n.string,toolBarClass:n.string,textContentClass:n.string,theme:n.string},Dt});
//# sourceMappingURL=forma-text.umd.cjs.map
