(function(l,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("react"),require("prop-types"),require("mammoth"),require("diff-match-patch"),require("lucide-react")):typeof define=="function"&&define.amd?define(["react","prop-types","mammoth","diff-match-patch","lucide-react"],o):(l=typeof globalThis<"u"?globalThis:l||self,l.FormaText=o(l.React,l.PropTypes,l.mammoth,l.diff_match_patch,l["lucide-react"]))})(this,function(l,o,It,qe,n){"use strict";var Xe={exports:{}},ze={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st;function At(){if(st)return ze;st=1;var r=l,s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function p(m,v,O){var y,R={},_=null,M=null;O!==void 0&&(_=""+O),v.key!==void 0&&(_=""+v.key),v.ref!==void 0&&(M=v.ref);for(y in v)u.call(v,y)&&!g.hasOwnProperty(y)&&(R[y]=v[y]);if(m&&m.defaultProps)for(y in v=m.defaultProps,v)R[y]===void 0&&(R[y]=v[y]);return{$$typeof:s,type:m,key:_,ref:M,props:R,_owner:x.current}}return ze.Fragment=d,ze.jsx=p,ze.jsxs=p,ze}var Se={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt;function Tt(){return lt||(lt=1,process.env.NODE_ENV!=="production"&&function(){var r=l,s=Symbol.for("react.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),b=Symbol.iterator,L="@@iterator";function H(t){if(t===null||typeof t!="object")return null;var i=b&&t[b]||t[L];return typeof i=="function"?i:null}var W=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function I(t){{for(var i=arguments.length,f=new Array(i>1?i-1:0),j=1;j<i;j++)f[j-1]=arguments[j];J("error",t,f)}}function J(t,i,f){{var j=W.ReactDebugCurrentFrame,F=j.getStackAddendum();F!==""&&(i+="%s",f=f.concat([F]));var S=f.map(function(w){return String(w)});S.unshift("Warning: "+i),Function.prototype.apply.call(console[t],console,S)}}var ae=!1,k=!1,$=!1,se=!1,Qe=!1,he;he=Symbol.for("react.module.reference");function Pe(t){return!!(typeof t=="string"||typeof t=="function"||t===u||t===g||Qe||t===x||t===O||t===y||se||t===M||ae||k||$||typeof t=="object"&&t!==null&&(t.$$typeof===_||t.$$typeof===R||t.$$typeof===p||t.$$typeof===m||t.$$typeof===v||t.$$typeof===he||t.getModuleId!==void 0))}function Le(t,i,f){var j=t.displayName;if(j)return j;var F=i.displayName||i.name||"";return F!==""?f+"("+F+")":f}function Be(t){return t.displayName||"Context"}function K(t){if(t==null)return null;if(typeof t.tag=="number"&&I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case u:return"Fragment";case d:return"Portal";case g:return"Profiler";case x:return"StrictMode";case O:return"Suspense";case y:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m:var i=t;return Be(i)+".Consumer";case p:var f=t;return Be(f._context)+".Provider";case v:return Le(t,t.render,"ForwardRef");case R:var j=t.displayName||null;return j!==null?j:K(t.type)||"Memo";case _:{var F=t,S=F._payload,w=F._init;try{return K(w(S))}catch{return null}}}return null}var te=Object.assign,re=0,He,je,ve,Ie,Ue,Ce,ke;function Ae(){}Ae.__reactDisabledLog=!0;function le(){{if(re===0){He=console.log,je=console.info,ve=console.warn,Ie=console.error,Ue=console.group,Ce=console.groupCollapsed,ke=console.groupEnd;var t={configurable:!0,enumerable:!0,value:Ae,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}re++}}function Te(){{if(re--,re===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:te({},t,{value:He}),info:te({},t,{value:je}),warn:te({},t,{value:ve}),error:te({},t,{value:Ie}),group:te({},t,{value:Ue}),groupCollapsed:te({},t,{value:Ce}),groupEnd:te({},t,{value:ke})})}re<0&&I("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var me=W.ReactCurrentDispatcher,fe;function Re(t,i,f){{if(fe===void 0)try{throw Error()}catch(F){var j=F.stack.trim().match(/\n( *(at )?)/);fe=j&&j[1]||""}return`
`+fe+t}}var _e=!1,P;{var oe=typeof WeakMap=="function"?WeakMap:Map;P=new oe}function U(t,i){if(!t||_e)return"";{var f=P.get(t);if(f!==void 0)return f}var j;_e=!0;var F=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var S;S=me.current,me.current=null,le();try{if(i){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(X){j=X}Reflect.construct(t,[],w)}else{try{w.call()}catch(X){j=X}t.call(w.prototype)}}else{try{throw Error()}catch(X){j=X}t()}}catch(X){if(X&&j&&typeof X.stack=="string"){for(var C=X.stack.split(`
`),G=j.stack.split(`
`),q=C.length-1,B=G.length-1;q>=1&&B>=0&&C[q]!==G[B];)B--;for(;q>=1&&B>=0;q--,B--)if(C[q]!==G[B]){if(q!==1||B!==1)do if(q--,B--,B<0||C[q]!==G[B]){var Q=`
`+C[q].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),typeof t=="function"&&P.set(t,Q),Q}while(q>=1&&B>=0);break}}}finally{_e=!1,me.current=S,Te(),Error.prepareStackTrace=F}var Ee=t?t.displayName||t.name:"",ge=Ee?Re(Ee):"";return typeof t=="function"&&P.set(t,ge),ge}function et(t,i,f){return U(t,!1)}function we(t){var i=t.prototype;return!!(i&&i.isReactComponent)}function V(t,i,f){if(t==null)return"";if(typeof t=="function")return U(t,we(t));if(typeof t=="string")return Re(t);switch(t){case O:return Re("Suspense");case y:return Re("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case v:return et(t.render);case R:return V(t.type,i,f);case _:{var j=t,F=j._payload,S=j._init;try{return V(S(F),i,f)}catch{}}}return""}var xe=Object.prototype.hasOwnProperty,ye={},$e=W.ReactDebugCurrentFrame;function pe(t){if(t){var i=t._owner,f=V(t.type,t._source,i?i.type:null);$e.setExtraStackFrame(f)}else $e.setExtraStackFrame(null)}function tt(t,i,f,j,F){{var S=Function.call.bind(xe);for(var w in t)if(S(t,w)){var C=void 0;try{if(typeof t[w]!="function"){var G=Error((j||"React class")+": "+f+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw G.name="Invariant Violation",G}C=t[w](i,w,j,f,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(q){C=q}C&&!(C instanceof Error)&&(pe(F),I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",j||"React class",f,w,typeof C),pe(null)),C instanceof Error&&!(C.message in ye)&&(ye[C.message]=!0,pe(F),I("Failed %s type: %s",f,C.message),pe(null))}}}var rt=Array.isArray;function De(t){return rt(t)}function ot(t){{var i=typeof Symbol=="function"&&Symbol.toStringTag,f=i&&t[Symbol.toStringTag]||t.constructor.name||"Object";return f}}function nt(t){try{return Ve(t),!1}catch{return!0}}function Ve(t){return""+t}function We(t){if(nt(t))return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ot(t)),Ve(t)}var Ye=W.ReactCurrentOwner,it={key:!0,ref:!0,__self:!0,__source:!0},Fe,a;function c(t){if(xe.call(t,"ref")){var i=Object.getOwnPropertyDescriptor(t,"ref").get;if(i&&i.isReactWarning)return!1}return t.ref!==void 0}function h(t){if(xe.call(t,"key")){var i=Object.getOwnPropertyDescriptor(t,"key").get;if(i&&i.isReactWarning)return!1}return t.key!==void 0}function T(t,i){typeof t.ref=="string"&&Ye.current}function A(t,i){{var f=function(){Fe||(Fe=!0,I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};f.isReactWarning=!0,Object.defineProperty(t,"key",{get:f,configurable:!0})}}function ne(t,i){{var f=function(){a||(a=!0,I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};f.isReactWarning=!0,Object.defineProperty(t,"ref",{get:f,configurable:!0})}}var Z=function(t,i,f,j,F,S,w){var C={$$typeof:s,type:t,key:i,ref:f,props:w,_owner:S};return C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(C,"_self",{configurable:!1,enumerable:!1,writable:!1,value:j}),Object.defineProperty(C,"_source",{configurable:!1,enumerable:!1,writable:!1,value:F}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C};function D(t,i,f,j,F){{var S,w={},C=null,G=null;f!==void 0&&(We(f),C=""+f),h(i)&&(We(i.key),C=""+i.key),c(i)&&(G=i.ref,T(i,F));for(S in i)xe.call(i,S)&&!it.hasOwnProperty(S)&&(w[S]=i[S]);if(t&&t.defaultProps){var q=t.defaultProps;for(S in q)w[S]===void 0&&(w[S]=q[S])}if(C||G){var B=typeof t=="function"?t.displayName||t.name||"Unknown":t;C&&A(w,B),G&&ne(w,B)}return Z(t,C,G,F,j,Ye.current,w)}}var Y=W.ReactCurrentOwner,ee=W.ReactDebugCurrentFrame;function ie(t){if(t){var i=t._owner,f=V(t.type,t._source,i?i.type:null);ee.setExtraStackFrame(f)}else ee.setExtraStackFrame(null)}var be;be=!1;function Ge(t){return typeof t=="object"&&t!==null&&t.$$typeof===s}function Ne(){{if(Y.current){var t=K(Y.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function xr(t){return""}var Et={};function pr(t){{var i=Ne();if(!i){var f=typeof t=="string"?t:t.displayName||t.name;f&&(i=`

Check the top-level render call using <`+f+">.")}return i}}function zt(t,i){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var f=pr(i);if(Et[f])return;Et[f]=!0;var j="";t&&t._owner&&t._owner!==Y.current&&(j=" It was passed a child from "+K(t._owner.type)+"."),ie(t),I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',f,j),ie(null)}}function St(t,i){{if(typeof t!="object")return;if(De(t))for(var f=0;f<t.length;f++){var j=t[f];Ge(j)&&zt(j,i)}else if(Ge(t))t._store&&(t._store.validated=!0);else if(t){var F=H(t);if(typeof F=="function"&&F!==t.entries)for(var S=F.call(t),w;!(w=S.next()).done;)Ge(w.value)&&zt(w.value,i)}}}function br(t){{var i=t.type;if(i==null||typeof i=="string")return;var f;if(typeof i=="function")f=i.propTypes;else if(typeof i=="object"&&(i.$$typeof===v||i.$$typeof===R))f=i.propTypes;else return;if(f){var j=K(i);tt(f,t.props,"prop",j,t)}else if(i.PropTypes!==void 0&&!be){be=!0;var F=K(i);I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",F||"Unknown")}typeof i.getDefaultProps=="function"&&!i.getDefaultProps.isReactClassApproved&&I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gr(t){{for(var i=Object.keys(t.props),f=0;f<i.length;f++){var j=i[f];if(j!=="children"&&j!=="key"){ie(t),I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",j),ie(null);break}}t.ref!==null&&(ie(t),I("Invalid attribute `ref` supplied to `React.Fragment`."),ie(null))}}var Ot={};function Lt(t,i,f,j,F,S){{var w=Pe(t);if(!w){var C="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var G=xr();G?C+=G:C+=Ne();var q;t===null?q="null":De(t)?q="array":t!==void 0&&t.$$typeof===s?(q="<"+(K(t.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):q=typeof t,I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",q,C)}var B=D(t,i,f,F,S);if(B==null)return B;if(w){var Q=i.children;if(Q!==void 0)if(j)if(De(Q)){for(var Ee=0;Ee<Q.length;Ee++)St(Q[Ee],t);Object.freeze&&Object.freeze(Q)}else I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else St(Q,t)}if(xe.call(i,"key")){var ge=K(t),X=Object.keys(i).filter(function(wr){return wr!=="key"}),at=X.length>0?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}";if(!Ot[ge+at]){var kr=X.length>0?"{"+X.join(": ..., ")+": ...}":"{}";I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,at,ge,kr,ge),Ot[ge+at]=!0}}return t===u?gr(B):br(B),B}}function hr(t,i,f){return Lt(t,i,f,!0)}function jr(t,i,f){return Lt(t,i,f,!1)}var vr=jr,Cr=hr;Se.Fragment=u,Se.jsx=vr,Se.jsxs=Cr}()),Se}process.env.NODE_ENV==="production"?Xe.exports=At():Xe.exports=Tt();var e=Xe.exports;const Rt=()=>e.jsx("style",{children:`
          .forma-text-toolbar-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #6c757d;
            background-color: transparent;
            border: 1px solid #6c757d;
            border-radius: 0.25rem;
            cursor: pointer;
            user-select: none;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
          }

          .forma-text-toolbar-button:hover {
            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;
          }

          .forma-text-toolbar-button--active {
            color: #fff;
            background-color: #5a6268;
            border-color: #545b62;
          }

          .forma-text-toolbar-button:disabled {
            pointer-events: none;
            opacity: 0.65;
          }




/* --- Custom Tooltip Styles --- */

/* 1. The container (no changes needed here) */
.forma-text-tooltip-container {
  position: relative;
  display: inline-block;
}

/* 2. The tooltip bubble */
.forma-text-tooltip {
  visibility: hidden;
  opacity: 0;
  width: max-content;
  background-color: #212529;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  
  /* --- CHANGED --- */
  /* Position it BELOW the button */
  position: absolute;
  z-index: 10;
  top: 130%; /* Changed from 'bottom' */
  left: 50%;
  transform: translateX(-50%);
  
  transition: opacity 0.2s ease-in-out;
}

/* 3. The small arrow pointing UP to the button */
.forma-text-tooltip::after {
  content: "";
  position: absolute;
  
  /* --- CHANGED --- */
  bottom: 100%; /* Position arrow at the TOP of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  /* Flip the arrow direction to point up */
  border-color: transparent transparent #212529 transparent;
}

/* 4. The hover logic (no changes needed here) */
.forma-text-tooltip-container:hover .forma-text-tooltip {
  visibility: visible;
  opacity: 1;
}




        `}),N=l.memo(({onClick:r,title:s,command:d,activeStyles:u,disabled:x=!1,children:g})=>{const p=["forma-text-toolbar-button",u&&u.has(d)?"forma-text-toolbar-button--active":""].join(" ").trim();return e.jsxs(e.Fragment,{children:[e.jsx(Rt,{}),e.jsxs("div",{className:"forma-text-tooltip-container",children:[e.jsx("button",{type:"button",onClick:r,onMouseDown:m=>m.preventDefault(),className:p,disabled:x,"aria-label":s,children:g}),e.jsx("span",{className:"forma-text-tooltip",children:s})]})]})});N.propTypes={onClick:o.func.isRequired,title:o.string.isRequired,command:o.string,activeStyles:o.object,disabled:o.bool,children:o.node.isRequired},N.displayName="FormaTextToolbarButton";const _t=()=>e.jsx("style",{children:`
        .forma-text-dropdown {
          position: relative;
          display: inline-flex;
        }
        
        .forma-text-dropdown-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #6c757d;
          background-color: transparent;
          border: 1px solid #6c757d;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        }

        .forma-text-dropdown-toggle:hover {
          color: #fff;
          background-color: #6c757d;
        }

        /* The little down arrow */
        .forma-text-dropdown-toggle::after {
          display: inline-block;
          margin-left: 0.255em;
          vertical-align: 0.255em;
          content: "";
          border-top: 0.3em solid;
          border-right: 0.3em solid transparent;
          border-bottom: 0;
          border-left: 0.3em solid transparent;
        }

        .forma-text-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          display: none; /* Hidden by default */
          min-width: 10rem;
          padding: 0.5rem 0;
          margin-top: 0.125rem;
          font-size: 1rem;
          color: #212529;
          text-align: left;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0.25rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
        }

        .forma-text-dropdown-menu--show {
          display: block; /* Shown when the 'show' class is added */
        }
      `}),de=({title:r,icon:s,children:d})=>{const[u,x]=l.useState(!1),g=l.useRef(null);return l.useEffect(()=>{const p=m=>{g.current&&!g.current.contains(m.target)&&x(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),e.jsxs(e.Fragment,{children:[e.jsx(_t,{}),e.jsxs("div",{className:"forma-text-dropdown",ref:g,children:[e.jsx("button",{type:"button",title:r,onClick:()=>x(!u),onMouseDown:p=>p.preventDefault(),className:"forma-text-dropdown-toggle","aria-expanded":u,children:s}),e.jsx("div",{className:`forma-text-dropdown-menu ${u?"forma-text-dropdown-menu--show":""}`,onClick:p=>{p.target.closest("button")&&x(!1)},children:d})]})]})};de.propTypes={title:o.string.isRequired,icon:o.node.isRequired,children:o.node.isRequired};const Dt=()=>e.jsx("style",{children:`
        .forma-text-color-grid {
          width: 160px;
          padding: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .forma-text-color-swatch {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid #ddd;
          padding: 0;
          cursor: pointer;
          transition: transform 0.1s ease-in-out;
        }
        .forma-text-color-swatch:hover {
          transform: scale(1.1);
        }
      `}),qt=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],Ke=({command:r,applyStyle:s})=>{const d=r==="foreColor"?"Text Color":"Highlight Color",u=r==="foreColor"?e.jsx(n.Palette,{size:16}):e.jsx(n.Highlighter,{size:16});return e.jsxs(e.Fragment,{children:[e.jsx(Dt,{}),e.jsx(de,{title:d,icon:u,children:e.jsx("div",{className:"forma-text-color-grid",children:qt.map(x=>e.jsx("button",{type:"button",className:"forma-text-color-swatch",style:{backgroundColor:x},onClick:()=>s(r,x),"aria-label":x},x))})})]})};Ke.propTypes={command:o.oneOf(["foreColor","backColor"]).isRequired,applyStyle:o.func.isRequired};const Mt=()=>e.jsx("style",{children:`
      .forma-text-emoji-grid {
        max-height: 200px;
        width: 250px;
        overflow-y: auto;
        padding: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
      }
      .forma-text-emoji-button {
        padding: 0.25rem 0.5rem;
        font-size: 1.25rem; /* Replicates Bootstrap's fs-5 */
        color: #212529;
        background-color: #f8f9fa; /* Replicates btn-light */
        border: 1px solid #f8f9fa;
        border-radius: 0.25rem;
        cursor: pointer;
        line-height: 1.5;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
      }
      .forma-text-emoji-button:hover {
        color: #000;
        background-color: #e2e6ea;
        border-color: #dae0e5;
      }
    `}),Bt=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],dt=({applyStyle:r})=>e.jsxs(e.Fragment,{children:[e.jsx(Mt,{}),e.jsx(de,{title:"Insert Emoji",icon:e.jsx(n.Smile,{size:16}),children:e.jsx("div",{className:"forma-text-emoji-grid",children:Bt.map(s=>e.jsx("button",{className:"forma-text-emoji-button",onClick:()=>r("insertText",s),children:s},s))})})]});dt.propTypes={applyStyle:o.func.isRequired};const Ht=()=>e.jsx("style",{children:`
        .forma-text-classic-toolbar {
          padding: 0.5rem;
          border-bottom: 1px solid #dee2e6;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }
        .forma-text-btn-group {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .forma-text-dropdown-item {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
          font-size: 14px;
          text-align: left;
          color: #212529;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out;
        }
        .forma-text-dropdown-item:hover {
          background-color: #f8f9fa;
        }
        .forma-text-dropdown-item--danger {
          color: #dc3545;
          margin-top: 0.5rem;
          border-top: 1px solid #dc3545;
        }
        .forma-text-font-icon {
            font-weight: bold;
            font-size: 12px;
        }
        .forma-text-row {
            display: flex;
            gap: 1rem;
            position: relative;
            margin: 1rem 0;
        }
        .forma-text-row:hover .forma-text-delete-btn {
            display: flex;
        }
        .forma-text-col {
            border: 1px dashed #ccc;
            padding: 1rem;
            min-height: 100px;
        }
        .forma-text-col--1 { flex: 1; }
        .forma-text-col--2 { flex: 2; }

        .forma-text-delete-btn {
            display: none;
            position: absolute;
            top: -10px;
            right: -10px;
            z-index: 10;
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        @keyframes forma-text-spinner-border {
          to { transform: rotate(360deg); }
        }
        .forma-text-spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          vertical-align: text-bottom;
          border: 0.2em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: forma-text-spinner-border .75s linear infinite;
        }
        .forma-text-hidden {
            display: none;
        }
      `}),Ut=["Arial","Georgia","Helvetica","Tahoma","Times New Roman","Verdana","Courier New"],$t={Small:"2",Normal:"3",Large:"5",Huge:"7"},Vt={"Heading 1":"<h1>","Heading 2":"<h2>","Heading 3":"<h3>","Heading 4":"<h4>","Heading 5":"<h5>",Paragraph:"<p>"},Wt={Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},ct=({applyStyle:r,applyLineHeight:s,activeStyles:d,onOpenLinkModal:u,onImageUpload:x,onDocxUpload:g,onVideoModalOpen:p,onTableModalOpen:m,onAiRefactor:v,content:O,isGenerating:y,isAiLoadingMinimized:R})=>{const _=l.useRef(null),M=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(Ht,{}),e.jsxs("div",{className:"forma-text-classic-toolbar",children:[e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(N,{title:"Undo (Ctrl+Z)",onClick:()=>r("undo"),children:e.jsx(n.Undo,{size:16})}),e.jsx(N,{title:"Redo (Ctrl+Y)",onClick:()=>r("redo"),children:e.jsx(n.Redo,{size:16})})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(de,{title:"Headings",icon:e.jsx(n.Pilcrow,{size:14}),children:Object.entries(Vt).map(([b,L])=>e.jsx("button",{className:"forma-text-dropdown-item",onClick:()=>r("formatBlock",L),children:b},b))}),e.jsx(de,{title:"Font Family",icon:e.jsx("span",{className:"forma-text-font-icon",children:"Aa"}),children:Ut.map(b=>e.jsx("button",{className:"forma-text-dropdown-item",style:{fontFamily:b},onClick:()=>r("fontName",b),children:b},b))}),e.jsx(de,{title:"Font Size",icon:e.jsx(n.Type,{size:14}),children:Object.entries($t).map(([b,L])=>e.jsx("button",{className:"forma-text-dropdown-item",onClick:()=>r("fontSize",L),children:b},b))}),e.jsxs(de,{title:"Line Height",icon:e.jsx(n.ArrowDownUp,{size:14}),children:[Object.entries(Wt).map(([b,L])=>e.jsx("button",{className:"forma-text-dropdown-item",onClick:()=>s(L),children:b},b)),e.jsx("button",{className:"forma-text-dropdown-item forma-text-dropdown-item--danger",onClick:()=>s("normal"),children:"Remove Height"})]})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(N,{title:"Bold (Ctrl+B)",command:"bold",activeStyles:d,onClick:()=>r("bold"),children:e.jsx(n.Bold,{size:14})}),e.jsx(N,{title:"Italic (Ctrl+I)",command:"italic",activeStyles:d,onClick:()=>r("italic"),children:e.jsx(n.Italic,{size:16})}),e.jsx(N,{title:"Underline (Ctrl+U)",command:"underline",activeStyles:d,onClick:()=>r("underline"),children:e.jsx(n.Underline,{size:16})}),e.jsx(N,{title:"Strikethrough",command:"strikeThrough",activeStyles:d,onClick:()=>r("strikeThrough"),children:e.jsx(n.Strikethrough,{size:16})}),e.jsx(N,{title:"Superscript",command:"superscript",activeStyles:d,onClick:()=>r("superscript"),children:e.jsx(n.Superscript,{size:16})}),e.jsx(N,{title:"Subscript",command:"subscript",activeStyles:d,onClick:()=>r("subscript"),children:e.jsx(n.Subscript,{size:16})}),e.jsx(dt,{applyStyle:r})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(Ke,{command:"foreColor",applyStyle:r}),e.jsx(Ke,{command:"backColor",applyStyle:r})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(N,{title:"Align Left",command:"justifyLeft",activeStyles:d,onClick:()=>r("justifyLeft"),children:e.jsx(n.AlignLeft,{size:16})}),e.jsx(N,{title:"Align Center",command:"justifyCenter",activeStyles:d,onClick:()=>r("justifyCenter"),children:e.jsx(n.AlignCenter,{size:16})}),e.jsx(N,{title:"Align Right",command:"justifyRight",activeStyles:d,onClick:()=>r("justifyRight"),children:e.jsx(n.AlignRight,{size:16})})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(N,{title:"Ordered List",command:"insertOrderedList",activeStyles:d,onClick:()=>r("insertOrderedList"),children:e.jsx(n.ListOrdered,{size:16})}),e.jsx(N,{title:"Unordered List",command:"insertUnorderedList",activeStyles:d,onClick:()=>r("insertUnorderedList"),children:e.jsx(n.List,{size:16})}),e.jsx(N,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(n.Outdent,{size:16})}),e.jsx(N,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(n.Indent,{size:16})})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(N,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(n.Quote,{size:16})}),e.jsx(N,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(n.Code,{size:16})}),e.jsx(N,{title:"Add/Edit Link (Ctrl+K)",onClick:u,children:e.jsx(n.Link,{size:16})}),e.jsx(N,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(n.Minus,{size:16})}),e.jsx(N,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(n.Eraser,{size:16})})]}),e.jsxs("div",{className:"forma-text-btn-group",children:[e.jsx(N,{title:"Insert Image",onClick:()=>{var b;return(b=_.current)==null?void 0:b.click()},children:e.jsx(n.Image,{size:16})}),e.jsx(N,{title:"Insert Video",onClick:p,children:e.jsx(n.Video,{size:16})}),e.jsx(N,{title:"Insert Table",onClick:m,children:e.jsx(n.Table,{size:16})}),e.jsx(N,{title:"Import from Word (.docx)",onClick:()=>{var b;return(b=M.current)==null?void 0:b.click()},children:e.jsx(n.FileUp,{size:16})})]}),e.jsx("div",{className:"forma-text-btn-group",children:e.jsx(N,{title:"Improve with AI",onClick:v,disabled:!O||O===""||y,children:y&&!R?e.jsx("div",{className:"forma-text-spinner",role:"status"}):e.jsx(n.Sparkles,{size:16})})})]}),e.jsx("input",{type:"file",accept:"image/*",ref:_,onChange:x,className:"forma-text-hidden"}),e.jsx("input",{type:"file",accept:".docx",ref:M,onChange:g,className:"forma-text-hidden"})]})};ct.propTypes={applyStyle:o.func.isRequired,applyLineHeight:o.func.isRequired,activeStyles:o.object.isRequired,onOpenLinkModal:o.func.isRequired,onImageUpload:o.func.isRequired,onDocxUpload:o.func.isRequired,onVideoModalOpen:o.func.isRequired,onTableModalOpen:o.func.isRequired,onAiRefactor:o.func.isRequired,content:o.string,isGenerating:o.bool.isRequired,isAiLoadingMinimized:o.bool.isRequired};const E=l.memo(({onClick:r,title:s,command:d,activeStyles:u,disabled:x=!1,children:g,className:p=""})=>e.jsx("div",{className:"forma-text-tooltip-container",children:e.jsxs("button",{type:"button",onClick:r,onMouseDown:m=>m.preventDefault(),className:`modern-toolbar-button ${u&&u.has(d)?"active":""} ${p}`,disabled:x,children:[g,e.jsx("span",{className:"forma-text-tooltip",children:s})]})}));E.propTypes={onClick:o.func.isRequired,title:o.string.isRequired,command:o.string,activeStyles:o.object,disabled:o.bool,children:o.node.isRequired,className:o.string},E.displayName="ModernToolbarButton";const ce=({title:r,icon:s,children:d})=>{const[u,x]=l.useState(!1),g=l.useRef(null);return l.useEffect(()=>{const p=m=>{g.current&&!g.current.contains(m.target)&&x(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),e.jsxs("div",{className:"modern-dropdown",ref:g,children:[e.jsxs("button",{type:"button",title:r,onClick:()=>x(!u),onMouseDown:p=>p.preventDefault(),className:"modern-toolbar-button","aria-expanded":u,children:[s,e.jsx(n.ChevronDown,{size:14,style:{marginLeft:"4px"}})]}),e.jsx("div",{className:`modern-dropdown-menu ${u?"show":""}`,onClick:()=>x(!1),children:d})]})};ce.propTypes={title:o.string.isRequired,icon:o.node.isRequired,children:o.node.isRequired};const Yt=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],Je=({command:r,applyStyle:s})=>{const d=r==="foreColor"?"Text Color":"Highlight Color",u=r==="foreColor"?e.jsx(n.Palette,{size:26}):e.jsx(n.Highlighter,{size:26});return e.jsx(ce,{title:d,icon:u,children:e.jsx("div",{className:"modern-color-picker",children:Yt.map(x=>e.jsx("button",{type:"button",className:"modern-color-swatch",style:{backgroundColor:x},onClick:()=>s(r,x),"aria-label":x},x))})})};Je.propTypes={command:o.oneOf(["foreColor","backColor"]).isRequired,applyStyle:o.func.isRequired};const Gt=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],ut=({applyStyle:r})=>e.jsx(ce,{title:"Insert Emoji",icon:e.jsx(n.Smile,{size:26}),children:e.jsx("div",{className:"modern-emoji-picker",children:Gt.map(s=>e.jsx("button",{type:"button",className:"modern-emoji",onClick:()=>r("insertText",s),children:s},s))})});ut.propTypes={applyStyle:o.func.isRequired};const Xt=()=>e.jsx("style",{children:`
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

.modern-ai-button {
  border: 1px solid rgba(0, 230, 230, 0.3);
  background: linear-gradient(45deg, #2a2a72, #009ffd);
  overflow: hidden; /* Ensures effects don't bleed out */
}

.modern-ai-button svg {
  color: #cceeff;
  animation: pulse-glow 2.5s infinite ease-in-out;
  transition: all 0.3s ease-in-out;
}

.modern-ai-button:hover:not(:disabled) svg {
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
  padding: 8px 30px;
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
  font-size: 14px;
  color: #3c4043;
}

.modern-dropdown-item:hover {
  background-color: #f1f3f4;
}
 .modern-dropdown-item-remove-line-height{
  color: #8b0000ff;
     font-size: 14px;
    padding-top: 5px;
    width: 100%;
  background: #fffafaff;
  border: none;
  border-top: 1px solid red;
  
  }

.modern-emoji:hover {
  background-color: #f1f3f4;
}

.forma-text-toolbar-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6c757d;
  background-color: transparent;
  border: 1px solid #6c757d;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
          }

.forma-text-toolbar-button:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.forma-text-toolbar-button--active {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.forma-text-toolbar-button:disabled {
  pointer-events: none;
  opacity: 0.65;
 }


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
    `}),Kt=["Arial","Georgia","Helvetica","Tahoma","Times New Roman","Verdana","Courier New"],Jt={Small:"2",Normal:"3",Large:"5",Huge:"7"},Zt={"Heading 1":"<h1>","Heading 2":"<h2>","Heading 3":"<h3>","Heading 4":"<h4>","Heading 5":"<h5>",Paragraph:"<p>"},Qt={Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"},mt=({applyStyle:r,applyLineHeight:s,activeStyles:d,onOpenLinkModal:u,onImageUpload:x,onDocxUpload:g,onVideoModalOpen:p,onTableModalOpen:m,onAiRefactor:v,content:O,isGenerating:y,isAiLoadingMinimized:R})=>{const _=l.useRef(null),M=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(Xt,{}),e.jsxs("div",{className:"modern-toolbar",children:[e.jsxs("div",{className:"toolbar-group",children:[e.jsx(E,{title:"Undo (Ctrl+Z)",onClick:()=>r("undo"),children:e.jsx(n.Undo,{size:18})}),e.jsx(E,{title:"Redo (Ctrl+Y)",onClick:()=>r("redo"),children:e.jsx(n.Redo,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(ce,{title:"Headings",icon:e.jsx(n.Pilcrow,{size:26}),children:Object.entries(Zt).map(([b,L])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("formatBlock",L),children:b},b))}),e.jsx(ce,{title:"Font Family",icon:e.jsx(n.Type,{size:26}),children:Kt.map(b=>e.jsx("button",{className:"modern-dropdown-item",style:{fontFamily:b},onClick:()=>r("fontName",b),children:b},b))}),e.jsx(ce,{title:"Font Size",icon:e.jsx(n.Type,{size:14}),children:Object.entries(Jt).map(([b,L])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>r("fontSize",L),children:b},b))}),e.jsxs(ce,{title:"Line Height",icon:e.jsx(n.ArrowDownUp,{size:26}),children:[Object.entries(Qt).map(([b,L])=>e.jsx("button",{className:"modern-dropdown-item",onClick:()=>s(L),children:b},b)),e.jsx("button",{className:"modern-dropdown-item-remove-line-height",onClick:()=>s("normal"),children:"Remove"})]})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(E,{title:"Bold (Ctrl+B)",command:"bold",activeStyles:d,onClick:()=>r("bold"),children:e.jsx(n.Bold,{size:18})}),e.jsx(E,{title:"Italic (Ctrl+I)",command:"italic",activeStyles:d,onClick:()=>r("italic"),children:e.jsx(n.Italic,{size:18})}),e.jsx(E,{title:"Underline (Ctrl+U)",command:"underline",activeStyles:d,onClick:()=>r("underline"),children:e.jsx(n.Underline,{size:18})}),e.jsx(E,{title:"Strikethrough",command:"strikeThrough",activeStyles:d,onClick:()=>r("strikeThrough"),children:e.jsx(n.Strikethrough,{size:18})}),e.jsx(E,{title:"Superscript",command:"superscript",activeStyles:d,onClick:()=>r("superscript"),children:e.jsx(n.Superscript,{size:18})}),e.jsx(E,{title:"Subscript",command:"subscript",activeStyles:d,onClick:()=>r("subscript"),children:e.jsx(n.Subscript,{size:18})}),e.jsx(ut,{applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(Je,{command:"foreColor",applyStyle:r}),e.jsx(Je,{command:"backColor",applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(E,{title:"Align Left",command:"justifyLeft",activeStyles:d,onClick:()=>r("justifyLeft"),children:e.jsx(n.AlignLeft,{size:18})}),e.jsx(E,{title:"Align Center",command:"justifyCenter",activeStyles:d,onClick:()=>r("justifyCenter"),children:e.jsx(n.AlignCenter,{size:18})}),e.jsx(E,{title:"Align Right",command:"justifyRight",activeStyles:d,onClick:()=>r("justifyRight"),children:e.jsx(n.AlignRight,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(E,{title:"Ordered List",command:"insertOrderedList",activeStyles:d,onClick:()=>r("insertOrderedList"),children:e.jsx(n.ListOrdered,{size:18})}),e.jsx(E,{title:"Unordered List",command:"insertUnorderedList",activeStyles:d,onClick:()=>r("insertUnorderedList"),children:e.jsx(n.List,{size:18})}),e.jsx(E,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(n.Outdent,{size:18})}),e.jsx(E,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(n.Indent,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(E,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(n.Quote,{size:18})}),e.jsx(E,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(n.Code,{size:18})}),e.jsx(E,{title:"Add/Edit Link (Ctrl+K)",onClick:u,children:e.jsx(n.Link,{size:18})}),e.jsx(E,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(n.Minus,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(E,{title:"Insert Image",onClick:()=>{var b;return(b=_.current)==null?void 0:b.click()},children:e.jsx(n.Image,{size:18})}),e.jsx(E,{title:"Insert Video",onClick:p,children:e.jsx(n.Video,{size:20})}),e.jsx(E,{title:"Insert Table",onClick:m,children:e.jsx(n.Table,{size:18})}),e.jsx(E,{title:"Import from Word (.docx)",onClick:()=>{var b;return(b=M.current)==null?void 0:b.click()},children:e.jsx(n.FileUp,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsx("div",{className:"toolbar-group",children:e.jsx(E,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(n.Eraser,{size:18,style:{color:"red"}})})}),e.jsx("div",{className:"toolbar-separator"}),e.jsx("div",{className:"toolbar-group",children:e.jsx(E,{title:"Improve with AI",onClick:v,disabled:!O||O===""||y,className:"modern-ai-button",children:y&&!R?e.jsx("div",{className:"spinner"}):e.jsx(n.Sparkles,{size:20})})})]}),e.jsx("input",{type:"file",accept:"image/*",ref:_,onChange:x,style:{display:"none"}}),e.jsx("input",{type:"file",accept:".docx",ref:M,onChange:g,style:{display:"none"}})]})};mt.propTypes={applyStyle:o.func.isRequired,applyLineHeight:o.func.isRequired,activeStyles:o.object.isRequired,onOpenLinkModal:o.func.isRequired,onImageUpload:o.func.isRequired,onDocxUpload:o.func.isRequired,onVideoModalOpen:o.func.isRequired,onTableModalOpen:o.func.isRequired,onAiRefactor:o.func.isRequired,content:o.string,isGenerating:o.bool.isRequired,isAiLoadingMinimized:o.bool.isRequired};const z=l.memo(({onClick:r,title:s,cmd:d,active:u,disabled:x=!1,children:g,className:p=""})=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      
      

.futuristic-forma-text-tooltip {
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

.futuristic-forma-text-tooltip::after {
  content: "";
  position: absolute;
  bottom: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #63b1ffff transparent;
}

.futuristic-forma-text-tooltip {
  visibility: visible;
  opacity: 1;
}



      
      `}),e.jsxs("button",{type:"button",onClick:r,onMouseDown:m=>m.preventDefault(),className:`futuristic-button ${u&&u.has(d)?"active":""} ${p}`,title:s,disabled:x,children:[e.jsx("span",{className:"button-content",children:g}),e.jsx("span",{className:"futuristic-forma-text-tooltip",children:s})]})]}));z.propTypes={onClick:o.func.isRequired,title:o.string.isRequired,cmd:o.string,active:o.object,disabled:o.bool,children:o.node.isRequired,className:o.string},z.displayName="FuturisticToolbarButton";const ue=({title:r,icon:s,children:d})=>{const[u,x]=l.useState(!1),g=l.useRef(null);return l.useEffect(()=>{const p=m=>{g.current&&!g.current.contains(m.target)&&x(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),e.jsxs("div",{className:"futuristic-dropdown",ref:g,children:[e.jsx("button",{type:"button",title:r,onClick:()=>x(!u),onMouseDown:p=>p.preventDefault(),className:"futuristic-button","aria-expanded":u,children:e.jsxs("span",{className:"button-content",children:[s,e.jsx(n.ChevronDown,{size:16,className:`chevron-icon ${u?"open":""}`})]})}),e.jsx("div",{className:`futuristic-dropdown-menu ${u?"show":""}`,onClick:()=>x(!1),children:d})]})};ue.propTypes={title:o.string.isRequired,icon:o.node.isRequired,children:o.node.isRequired};const Pt=["#000000","#222222","#444444","#666666","#888888","#999999","#BBBBBB","#CCCCCC","#DDDDDD","#EEEEEE","#FFFFFF","#FF0000","#CC0000","#990000","#660000","#FF6666","#FF9900","#FF6600","#CC6600","#FFB84D","#FFFF00","#FFEE00","#CCCC00","#999900","#00FF00","#00CC00","#009900","#66FF66","#33CC33","#00FFFF","#00CCCC","#009999","#66FFFF","#0000FF","#0000CC","#000099","#6666FF","#3366FF","#9900FF","#6600CC","#9933FF","#CC99FF","#FF00FF","#CC00CC","#FF66FF","#FF99FF"],Ze=({command:r,applyStyle:s})=>{const d=r==="foreColor"?"Text Color":"Highlight Color",u=r==="foreColor"?e.jsx(n.Palette,{size:18}):e.jsx(n.Highlighter,{size:18});return e.jsx(ue,{title:d,icon:u,children:e.jsx("div",{className:"futuristic-color-picker",children:Pt.map(x=>e.jsx("button",{type:"button",className:"color-swatch-hexagon",onClick:()=>s(r,x),"aria-label":x,children:e.jsx("div",{className:"hexagon-inner",style:{backgroundColor:x}})},x))})})};Ze.propTypes={command:o.oneOf(["foreColor","backColor"]).isRequired,applyStyle:o.func.isRequired};const er=["💻","🖥️","🖱️","⌨️","🖨️","📱","📲","🕹️","🧑‍💻","👨‍💻","👩‍💻","🔧","🔨","⚙️","🧰","📡","🌐","🔌","💾","📂","📁","🗂️","📝","📊","📈","📉","🔒","🔓","🛡️","🐞","⚡","🚀","🧪","💡","🤖","🧩","🧬","🛠️","📧","🔍","📥","📤"],ft=({applyStyle:r})=>e.jsx(ue,{title:"Insert Emoji",icon:e.jsx(n.Smile,{size:18}),children:e.jsx("div",{className:"futuristic-emoji-picker",children:er.map(s=>e.jsx("button",{type:"button",className:"futuristic-emoji",onClick:()=>r("insertText",s),children:s},s))})});ft.propTypes={applyStyle:o.func.isRequired};const tr=()=>e.jsx("style",{children:`
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

.futuristic-toolbar {
  position: fixed;
  display: flex;
  align-items: stretch;
  padding: 10px 30px 10px 30px;
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

      `}),rr=["Arial","Georgia","Verdana","Courier New"],or={H1:"<h1>",H2:"<h2>",H3:"<h3>",Paragraph:"<p>"},nr={Single:"1",1.5:"1.5",Double:"2"},ir={Small:"2",Normal:"3",Large:"5",Huge:"7"},xt=({applyStyle:r,applyLineHeight:s,activeStyles:d,onOpenLinkModal:u,onImageUpload:x,onDocxUpload:g,onVideoModalOpen:p,onTableModalOpen:m,onAiRefactor:v,content:O,isGenerating:y,isAiLoadingMinimized:R})=>{const _=l.useRef(null),M=l.useRef(null),b=l.useRef(null),[L,H]=l.useState({x:50,y:50}),[W,I]=l.useState(!1),J=l.useRef({x:0,y:0}),ae=k=>{k.button===0&&(I(!0),J.current={x:k.clientX-L.x,y:k.clientY-L.y},k.preventDefault())};return l.useEffect(()=>{const k=se=>{W&&H({x:se.clientX-J.current.x,y:se.clientY-J.current.y})},$=()=>I(!1);return window.addEventListener("mousemove",k),window.addEventListener("mouseup",$),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",$)}},[W]),e.jsxs(e.Fragment,{children:[e.jsx(tr,{}),e.jsxs("div",{ref:b,className:"futuristic-toolbar ",style:{top:`${L.y}px`,left:`${L.x}px`},children:[e.jsx("div",{className:"drag-handle",onMouseDown:ae,title:"Drag Toolbar",children:e.jsx(n.GripVertical,{size:20})}),e.jsxs("div",{className:"toolbar-content",children:[e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Undo",onClick:()=>r("undo"),children:e.jsx(n.Undo,{size:18})}),e.jsx(z,{title:"Redo",onClick:()=>r("redo"),children:e.jsx(n.Redo,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(ue,{title:"Headings",icon:e.jsx(n.Pilcrow,{size:18}),children:Object.entries(or).map(([k,$])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>r("formatBlock",$),children:k},k))}),e.jsx(ue,{title:"Font",icon:e.jsx(n.Type,{size:18}),children:rr.map(k=>e.jsx("button",{className:"futuristic-dropdown-item",style:{fontFamily:k},onClick:()=>r("fontName",k),children:k},k))}),e.jsx(ue,{title:"Font Size",icon:e.jsx(n.Type,{size:14}),children:Object.entries(ir).map(([k,$])=>e.jsx("button",{className:"forma-text-dropdown-item",onClick:()=>r("fontSize",$),children:k},k))}),e.jsx(ue,{title:"Line Height",icon:e.jsx(n.ArrowDownUp,{size:18}),children:Object.entries(nr).map(([k,$])=>e.jsx("button",{className:"futuristic-dropdown-item",onClick:()=>s($),children:k},k))})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Bold",cmd:"bold",active:d,onClick:()=>r("bold"),children:e.jsx(n.Bold,{size:18})}),e.jsx(z,{title:"Italic",cmd:"italic",active:d,onClick:()=>r("italic"),children:e.jsx(n.Italic,{size:18})}),e.jsx(z,{title:"Underline",cmd:"underline",active:d,onClick:()=>r("underline"),children:e.jsx(n.Underline,{size:18})}),e.jsx(z,{title:"Strikethrough",cmd:"strikeThrough",active:d,onClick:()=>r("strikeThrough"),children:e.jsx(n.Strikethrough,{size:18})}),e.jsx(z,{title:"Superscript",cmd:"superscript",active:d,onClick:()=>r("superscript"),children:e.jsx(n.Superscript,{size:18})}),e.jsx(z,{title:"Subscript",cmd:"subscript",active:d,onClick:()=>r("subscript"),children:e.jsx(n.Subscript,{size:18})}),e.jsx(Ze,{command:"foreColor",applyStyle:r}),e.jsx(Ze,{command:"backColor",applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Align Left",cmd:"justifyLeft",active:d,onClick:()=>r("justifyLeft"),children:e.jsx(n.AlignLeft,{size:18})}),e.jsx(z,{title:"Align Center",cmd:"justifyCenter",active:d,onClick:()=>r("justifyCenter"),children:e.jsx(n.AlignCenter,{size:18})}),e.jsx(z,{title:"Align Right",cmd:"justifyRight",active:d,onClick:()=>r("justifyRight"),children:e.jsx(n.AlignRight,{size:18})}),e.jsx(z,{title:"Ordered List",cmd:"insertOrderedList",active:d,onClick:()=>r("insertOrderedList"),children:e.jsx(n.ListOrdered,{size:18})}),e.jsx(z,{title:"Unordered List",cmd:"insertUnorderedList",active:d,onClick:()=>r("insertUnorderedList"),children:e.jsx(n.List,{size:18})}),e.jsx(z,{title:"Outdent",onClick:()=>r("outdent"),children:e.jsx(n.Outdent,{size:18})}),e.jsx(z,{title:"Indent",onClick:()=>r("indent"),children:e.jsx(n.Indent,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Add/Edit Link",onClick:u,children:e.jsx(n.Link,{size:18})}),e.jsx(z,{title:"Blockquote",onClick:()=>r("formatBlock","<blockquote>"),children:e.jsx(n.Quote,{size:18})}),e.jsx(z,{title:"Code Block",onClick:()=>r("formatBlock","<pre>"),children:e.jsx(n.Code,{size:18})}),e.jsx(z,{title:"Horizontal Line",onClick:()=>r("insertHorizontalRule"),children:e.jsx(n.Minus,{size:18})})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Insert Image",onClick:()=>{var k;return(k=_.current)==null?void 0:k.click()},children:e.jsx(n.Image,{size:18})}),e.jsx(z,{title:"Insert Video",onClick:p,children:e.jsx(n.Video,{size:18})}),e.jsx(z,{title:"Insert Table",onClick:m,children:e.jsx(n.Table,{size:18})}),e.jsx(z,{title:"Import from Word",onClick:()=>{var k;return(k=M.current)==null?void 0:k.click()},children:e.jsx(n.FileUp,{size:18})}),e.jsx(ft,{applyStyle:r})]}),e.jsx("div",{className:"toolbar-separator"}),e.jsxs("div",{className:"toolbar-group",children:[e.jsx(z,{title:"Improve with AI",onClick:v,disabled:!O||y,className:"ai-button",children:y?e.jsx("div",{className:"spinner"}):e.jsx(n.Sparkles,{size:18})}),e.jsx(z,{title:"Clear Formatting",onClick:()=>r("removeFormat"),children:e.jsx(n.Eraser,{size:18})})]})]})]}),e.jsx("input",{type:"file",accept:"image/*",ref:_,onChange:x,style:{display:"none"}}),e.jsx("input",{type:"file",accept:".docx",ref:M,onChange:g,style:{display:"none"}})]})};xt.propTypes={applyStyle:o.func.isRequired,activeStyles:o.object.isRequired,applyLineHeight:o.func.isRequired,onOpenLinkModal:o.func.isRequired,onImageUpload:o.func.isRequired,onDocxUpload:o.func.isRequired,onVideoModalOpen:o.func.isRequired,onTableModalOpen:o.func.isRequired,onAiRefactor:o.func.isRequired,content:o.string,isGenerating:o.bool.isRequired,isAiLoadingMinimized:o.bool.isRequired};const pt=({theme:r,...s})=>r==="modern"?e.jsx(mt,{...s}):r==="futuristic"?e.jsx(xt,{...s}):e.jsx(ct,{...s});pt.propTypes={theme:o.oneOf(["classic","modern","futuristic"])};const ar=()=>e.jsx("style",{children:`
            .forma-text-source-view {
              min-height: 60vh;
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
            .forma-text-editor-content {
              min-height: 60vh;
              height: 100%;
              padding: 1rem;
              border: none;
              border-radius: 0;
              outline: none;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          `}),bt=({editorRef:r,content:s,showSource:d,onContentChange:u,onKeyDown:x,textContentClass:g})=>e.jsxs(e.Fragment,{children:[e.jsx(ar,{}),d?e.jsx("textarea",{value:s||"",onChange:u,className:"forma-text-source-view"}):e.jsx("div",{ref:r,contentEditable:!0,suppressContentEditableWarning:!0,className:`forma-text-editor-content ${g}`,onInput:u,onKeyDown:x})]});bt.propTypes={editorRef:o.object.isRequired,content:o.string,showSource:o.bool.isRequired,onContentChange:o.func.isRequired,onKeyDown:o.func.isRequired,textContentClass:o.string};const sr=()=>e.jsx("style",{children:`
        .forma-text-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }
        .forma-text-modal-dialog {
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
          width: 90%; /* More responsive on small screens */
          max-width: var(--forma-text-modal-width, 500px); /* Use CSS variable */
          display: flex;
          flex-direction: column;
          max-height: 90vh;
        }
        .forma-text-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #dee2e6;
          background-color: #f8f9fa;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        .forma-text-modal-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .forma-text-modal-close-button {
          background: transparent;
          border: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
          opacity: 0.5;
          cursor: pointer;
          padding: 0.5rem;
          line-height: 1;
          transition: opacity 0.15s ease-in-out;
        }
        .forma-text-modal-close-button:hover {
          opacity: 0.75;
        }
        .forma-text-modal-content {
          overflow-y: auto;
        }
      `}),Oe=({children:r,onClose:s,title:d,icon:u,size:x="500px"})=>{const g={"--forma-text-modal-width":x};return e.jsxs(e.Fragment,{children:[e.jsx(sr,{}),e.jsx("div",{className:"forma-text-modal-overlay",onClick:s,children:e.jsxs("div",{className:"forma-text-modal-dialog",style:g,onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"forma-text-modal-header",children:[e.jsxs("h5",{className:"forma-text-modal-title",children:[u,d]}),e.jsx("button",{className:"forma-text-modal-close-button",onClick:s,children:"×"})]}),e.jsx("div",{className:"forma-text-modal-content",children:r})]})})]})};Oe.propTypes={children:o.node.isRequired,onClose:o.func.isRequired,title:o.string.isRequired,icon:o.node,size:o.string};const lr=()=>e.jsx("style",{children:`
        .forma-text-link-modal-body {
          padding: 1.5rem;
        }
        .forma-text-link-form-group {
          margin-bottom: 1rem;
        }
        .forma-text-link-label {
          margin-bottom: 0.5rem;
          font-weight: 600;
          display: block;
        }
        .forma-text-link-input-group {
          display: flex;
          align-items: center;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
        }
        .forma-text-link-input-icon {
          padding: 0.5rem 0.75rem;
          background-color: #e9ecef;
          border-right: 1px solid #ced4da;
        }
        .forma-text-link-input {
          flex: 1;
          border: none;
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
          outline: none;
          border-radius: 0 0.25rem 0.25rem 0;
        }
        .forma-text-link-modal-footer {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
          background-color: #f8f9fa;
          border-top: 1px solid #dee2e6;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        .forma-text-link-button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 14px;
          margin-left: 0.5rem;
          transition: background-color 0.15s ease-in-out;
        }
        .forma-text-link-button--secondary {
          background-color: #6c757d;
          color: white;
        }
        .forma-text-link-button--secondary:hover {
          background-color: #5a6268;
        }
        .forma-text-link-button--primary {
          background-color: #4285f4;
          color: white;
        }
        .forma-text-link-button--primary:hover {
          background-color: #357ae8;
        }
      `}),gt=({isOpen:r,onClose:s,onApply:d,initialData:u,isEditing:x})=>{const[g,p]=l.useState({text:"",href:""});return l.useEffect(()=>{r&&p(u)},[r,u]),r?e.jsxs(e.Fragment,{children:[e.jsx(lr,{}),e.jsxs(Oe,{onClose:s,title:x?"Edit Link":"Add Link",icon:e.jsx(n.Link,{size:20}),children:[e.jsxs("div",{className:"forma-text-link-modal-body",children:[e.jsxs("div",{className:"forma-text-link-form-group",children:[e.jsx("label",{className:"forma-text-link-label",children:"Link Text"}),e.jsxs("div",{className:"forma-text-link-input-group",children:[e.jsx("span",{className:"forma-text-link-input-icon",children:e.jsx(n.Pilcrow,{size:16})}),e.jsx("input",{type:"text",className:"forma-text-link-input",value:g.text,onChange:m=>p({...g,text:m.target.value})})]})]}),e.jsxs("div",{className:"forma-text-link-form-group",children:[e.jsx("label",{className:"forma-text-link-label",children:"Link URL"}),e.jsxs("div",{className:"forma-text-link-input-group",children:[e.jsx("span",{className:"forma-text-link-input-icon",children:e.jsx(n.ExternalLink,{size:16})}),e.jsx("input",{type:"url",className:"forma-text-link-input",value:g.href,onChange:m=>p({...g,href:m.target.value}),placeholder:"https://example.com",autoFocus:!0})]})]})]}),e.jsxs("div",{className:"forma-text-link-modal-footer",children:[e.jsx("button",{type:"button",className:"forma-text-link-button forma-text-link-button--secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"forma-text-link-button forma-text-link-button--primary",onClick:()=>d(g),children:"Apply Link"})]})]})]}):null};gt.propTypes={isOpen:o.bool.isRequired,onClose:o.func.isRequired,onApply:o.func.isRequired,initialData:o.shape({text:o.string,href:o.string}).isRequired,isEditing:o.bool.isRequired};const dr=()=>e.jsx("style",{children:`
        .forma-text-video-modal-body {
          padding: 1.5rem;
        }
        .forma-text-video-label {
          margin-bottom: 0.5rem;
          font-weight: 600;
          display: block;
        }
        .forma-text-video-input-group {
          display: flex;
          align-items: center;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          margin-bottom: 0.5rem;
        }
        .forma-text-video-input-icon {
          padding: 0.5rem 0.75rem;
          background-color: #e9ecef;
          border-right: 1px solid #ced4da;
        }
        .forma-text-video-input {
          flex: 1;
          border: none;
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
          outline: none;
          border-radius: 0 0.25rem 0.25rem 0;
        }
        .forma-text-video-form-text {
          font-size: 14px;
          color: #6c757d;
        }
        .forma-text-video-modal-footer {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
          background-color: #f8f9fa;
          border-top: 1px solid #dee2e6;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        .forma-text-video-button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 14px;
          margin-left: 0.5rem;
          transition: background-color 0.15s ease-in-out;
        }
        .forma-text-video-button--secondary {
          background-color: #6c757d;
          color: white;
        }
        .forma-text-video-button--secondary:hover {
          background-color: #5a6268;
        }
        .forma-text-video-button--primary {
          background-color: #4285f4;
          color: white;
        }
        .forma-text-video-button--primary:hover {
          background-color: #357ae8;
        }
      `}),ht=({isOpen:r,onClose:s,onInsert:d})=>{const[u,x]=l.useState(""),g=()=>{d(u),x("")};return r?e.jsxs(e.Fragment,{children:[e.jsx(dr,{}),e.jsxs(Oe,{onClose:s,title:"Insert Video",icon:e.jsx(n.Video,{size:20}),children:[e.jsxs("div",{className:"forma-text-video-modal-body",children:[e.jsx("label",{className:"forma-text-video-label",children:"Video URL"}),e.jsxs("div",{className:"forma-text-video-input-group",children:[e.jsx("span",{className:"forma-text-video-input-icon",children:e.jsx(n.Link,{size:16})}),e.jsx("input",{type:"url",className:"forma-text-video-input",value:u,onChange:p=>x(p.target.value),placeholder:"e.g., https://www.youtube.com/watch?v=...",autoFocus:!0})]}),e.jsx("div",{className:"forma-text-video-form-text",children:"Supports YouTube and Vimeo links."})]}),e.jsxs("div",{className:"forma-text-video-modal-footer",children:[e.jsx("button",{type:"button",className:"forma-text-video-button forma-text-video-button--secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"forma-text-video-button forma-text-video-button--primary",onClick:g,children:"Insert Video"})]})]})]}):null};ht.propTypes={isOpen:o.bool.isRequired,onClose:o.func.isRequired,onInsert:o.func.isRequired};const cr=()=>e.jsx("style",{children:`
        .forma-text-table-modal-body {
          padding: 1.5rem;
        }
        .forma-text-table-form-group {
          margin-bottom: 1rem;
        }
        .forma-text-table-label {
          margin-bottom: 0.5rem;
          font-weight: 600;
          display: block;
        }
        .forma-text-table-input {
          width: 100%; /* Changed to 100% for better responsiveness */
          box-sizing: border-box; /* Ensures padding doesn't affect width */
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
          outline: none;
        }
        .forma-text-table-modal-footer {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
          background-color: #f8f9fa;
          border-top: 1px solid #dee2e6;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        .forma-text-table-button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 14px;
          margin-left: 0.5rem;
          transition: background-color 0.15s ease-in-out;
        }
        .forma-text-table-button--secondary {
          background-color: #6c757d;
          color: white;
        }
        .forma-text-table-button--secondary:hover {
          background-color: #5a6268;
        }
        .forma-text-table-button--primary {
          background-color: #4285f4;
          color: white;
        }
        .forma-text-table-button--primary:hover {
          background-color: #357ae8;
        }
      `}),jt=({isOpen:r,onClose:s,onCreate:d})=>{const[u,x]=l.useState({rows:3,cols:3});return r?e.jsxs(e.Fragment,{children:[e.jsx(cr,{}),e.jsxs(Oe,{onClose:s,title:"Create Table",icon:e.jsx(n.Table,{size:20}),children:[e.jsxs("div",{className:"forma-text-table-modal-body",children:[e.jsxs("div",{className:"forma-text-table-form-group",children:[e.jsx("label",{className:"forma-text-table-label",children:"Rows"}),e.jsx("input",{type:"number",className:"forma-text-table-input",value:u.rows,min:"1",onChange:g=>x({...u,rows:parseInt(g.target.value,10)||1})})]}),e.jsxs("div",{className:"forma-text-table-form-group",children:[e.jsx("label",{className:"forma-text-table-label",children:"Columns"}),e.jsx("input",{type:"number",className:"forma-text-table-input",value:u.cols,min:"1",onChange:g=>x({...u,cols:parseInt(g.target.value,10)||1})})]})]}),e.jsxs("div",{className:"forma-text-table-modal-footer",children:[e.jsx("button",{type:"button",className:"forma-text-table-button forma-text-table-button--secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"forma-text-table-button forma-text-table-button--primary",onClick:()=>d(u),children:"Create"})]})]})]}):null};jt.propTypes={isOpen:o.bool.isRequired,onClose:o.func.isRequired,onCreate:o.func.isRequired};const ur=()=>e.jsx("style",{children:`
        /* Base styles for the popup container */
        .forma-text-ai-popup, .forma-text-ai-popup-minimized {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1100;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Full-size popup */
        .forma-text-ai-popup {
          width: 350px;
          padding: 1rem;
        }
        .forma-text-ai-popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .forma-text-ai-popup-title {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem; /* h6 default */
          font-weight: 500; /* h6 default */
        }
        .forma-text-ai-popup-body {
          display: flex;
          align-items: center;
        }
        .forma-text-popup-text-main {
          margin: 0;
          font-weight: 700;
        }
        .forma-text-popup-text-status {
          margin: 0;
          color: #6c757d;
          font-size: 0.875em;
        }
        .forma-text-icon--primary {
          color: #0d6efd;
        }
        
        /* Minimized popup */
        .forma-text-ai-popup-minimized {
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .forma-text-minimized-text {
            font-size: 0.875em;
        }
        
        /* Shared minimize/toggle button */
        .forma-text-ai-popup-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          color: #212529;
          background-color: #f8f9fa;
          border: 1px solid #f8f9fa;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out;
        }
        .forma-text-ai-popup-btn:hover {
            background-color: #e2e6ea;
        }
        .forma-text-ai-popup-btn--auto-margin {
            margin-left: auto;
        }

        /* Spinner animation and styles */
        @keyframes forma-text-spinner-border {
          to { transform: rotate(360deg); }
        }
        .forma-text-spinner {
          display: inline-block;
          vertical-align: text-bottom;
          border: 0.25em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: forma-text-spinner-border .75s linear infinite;
          width: 2rem;
          height: 2rem;
          margin-right: 1rem;
        }
        .forma-text-spinner--sm {
          width: 1rem;
          height: 1rem;
          border-width: 0.2em;
          margin-right: 0;
        }
      `}),vt=({status:r,isMinimized:s,onMinimizeToggle:d})=>e.jsxs(e.Fragment,{children:[e.jsx(ur,{}),s?e.jsxs("div",{className:"forma-text-ai-popup-minimized",children:[e.jsx("div",{className:"forma-text-spinner forma-text-spinner--sm forma-text-icon--primary",role:"status"}),e.jsx("span",{className:"forma-text-minimized-text",children:"AI is working..."}),e.jsx("button",{onClick:d,className:"forma-text-ai-popup-btn forma-text-ai-popup-btn--auto-margin",children:e.jsx(n.ChevronsDownUp,{size:14})})]}):e.jsxs("div",{className:"forma-text-ai-popup",children:[e.jsxs("div",{className:"forma-text-ai-popup-header",children:[e.jsxs("h6",{className:"forma-text-ai-popup-title",children:[e.jsx(n.Sparkles,{size:18,className:"forma-text-icon--primary"}),"AI Assistant"]}),e.jsx("button",{onClick:d,className:"forma-text-ai-popup-btn",children:e.jsx(n.Minimize,{size:14})})]}),e.jsxs("div",{className:"forma-text-ai-popup-body",children:[e.jsx("div",{className:"forma-text-spinner forma-text-icon--primary",role:"status"}),e.jsxs("div",{children:[e.jsx("p",{className:"forma-text-popup-text-main",children:"Working on it..."}),e.jsx("p",{className:"forma-text-popup-text-status",children:r})]})]})]})]});vt.propTypes={status:o.string.isRequired,isMinimized:o.bool.isRequired,onMinimizeToggle:o.func.isRequired};const mr=()=>e.jsx("style",{children:`
        .forma-text-ai-modal-body {
          padding: 1.5rem;
        }
        .forma-text-ai-modal-tab-container {
          display: flex;
          border-bottom: 1px solid #dee2e6;
          margin-bottom: 1rem;
        button{
           font-size: 0.89rem}
        }
        .forma-text-ai-modal-tab-button {
          padding: 0.75rem 1rem;
          border: none;
          background: none;
          cursor: pointer;
          margin-bottom: -1px; /* Aligns with the container's bottom border */
          border-bottom: 2px solid transparent;
        }
        .forma-text-ai-modal-tab-button--active {
          color: #0d6efd;
          border-bottom-color: #0d6efd;
        }
        .forma-text-ai-modal-tab-content {
          display: flex;
          gap: 1rem;
        }
        .forma-text-ai-modal-pane {
          width: 50%;
        }
        .forma-text-ai-modal-pane-title {
          margin: 1rem 0 0.8rem 0.5rem;
          color: #6c757d;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .forma-text-ai-modal-pane-title--suggestion {
            color: #198754;
        }
        .forma-text-ai-modal-pane-title--diff {
            color: #0d6efd;
        }
        .forma-text-ai-modal-preview-pane {
          height: 300px;
          overflow-y: auto;
          border: 1px solid #dee2e6;
          padding: 1rem;
          border-radius: 0.25rem;
          background-color: #fff;
        }
        .forma-text-ai-modal-diff-legend {
          display: flex;
          gap: 1rem;
          font-size: 14px;
          color: #6c757d;
          margin-bottom: 1rem;
        }
        .forma-text-ai-modal-legend-added {
          background-color: #d4edda;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }
        .forma-text-ai-modal-legend-removed {
          background-color: #f8d7da;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }
        .forma-text-ai-modal-footer {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
          background-color: #f8f9fa;
          border-top: 1px solid #dee2e6;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        .forma-text-ai-modal-button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 14px;
          margin-left: 0.5rem;
          transition: background-color 0.15s ease-in-out;
        }
        .forma-text-ai-modal-button--secondary {
          background-color: #6c757d;
          color: white;
        }
        .forma-text-ai-modal-button--secondary:hover {
          background-color: #5a6268;
        }
        .forma-text-ai-modal-button--primary {
          background-color: #4285f4;
          color: white;
        }
        .forma-text-ai-modal-button--primary:hover {
          background-color: #357ae8;
        }
      `}),Ct=({isOpen:r,onClose:s,onApply:d,originalContent:u,suggestion:x,highlightedDiff:g})=>{const[p,m]=l.useState("preview");if(!r)return null;const v=O=>{let y="forma-text-ai-modal-tab-button";return p===O&&(y+=" forma-text-ai-modal-tab-button--active"),y};return e.jsxs(e.Fragment,{children:[e.jsx(mr,{}),e.jsxs(Oe,{onClose:s,title:"AI Content Suggestion",icon:e.jsx(n.Sparkles,{size:20}),size:"1200px",children:[e.jsxs("div",{className:"forma-text-ai-modal-body",children:[e.jsxs("div",{className:"forma-text-ai-modal-tab-container",children:[e.jsx("button",{className:v("preview"),onClick:()=>m("preview"),children:"Preview Changes"}),e.jsx("button",{className:v("diff"),onClick:()=>m("diff"),children:"Highlight Changes"})]}),p==="preview"&&e.jsxs("div",{className:"forma-text-ai-modal-tab-content",children:[e.jsxs("div",{className:"forma-text-ai-modal-pane",children:[e.jsx("h6",{className:"forma-text-ai-modal-pane-title",children:"Original Content"}),e.jsx("div",{className:"forma-text-ai-modal-preview-pane",dangerouslySetInnerHTML:{__html:u}})]}),e.jsxs("div",{className:"forma-text-ai-modal-pane",children:[e.jsx("h6",{className:"forma-text-ai-modal-pane-title forma-text-ai-modal-pane-title--suggestion",children:"AI Suggestion"}),e.jsx("div",{className:"forma-text-ai-modal-preview-pane",dangerouslySetInnerHTML:{__html:x}})]})]}),p==="diff"&&e.jsxs("div",{children:[e.jsx("h6",{className:"forma-text-ai-modal-pane-title forma-text-ai-modal-pane-title--diff",children:"Highlighted Differences"}),e.jsxs("div",{className:"forma-text-ai-modal-diff-legend",children:[e.jsx("span",{className:"forma-text-ai-modal-legend-added",children:"Added content"}),e.jsx("span",{className:"forma-text-ai-modal-legend-removed",children:"Removed content"})]}),e.jsx("div",{className:"forma-text-ai-modal-preview-pane",dangerouslySetInnerHTML:{__html:g}})]})]}),e.jsxs("div",{className:"forma-text-ai-modal-footer",children:[e.jsx("button",{type:"button",className:"forma-text-ai-modal-button forma-text-ai-modal-button--secondary",onClick:s,children:"Cancel"}),e.jsx("button",{type:"button",className:"forma-text-ai-modal-button forma-text-ai-modal-button--primary",onClick:d,children:"Apply Suggestion"})]})]})]})};Ct.propTypes={isOpen:o.bool.isRequired,onClose:o.func.isRequired,onApply:o.func.isRequired,originalContent:o.string,suggestion:o.string,highlightedDiff:o.string};const Me=l.memo(({onClick:r,title:s,command:d,activeStyles:u,disabled:x=!1,children:g})=>{const p={color:"#fff",backgroundColor:"#6c757d",borderColor:"#6c757d"},m=u&&u.has(d)?p:{};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .forma-text-statusbar-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            border: 1px solid #6c757d;
            background-color: transparent;
            color: #6c757d;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
          }
          .forma-text-statusbar-button:hover {
            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;
          }
          .forma-text-statusbar-button:disabled {
            pointer-events: none;
            opacity: 0.65;
          }
        `}),e.jsx("button",{type:"button",onClick:r,onMouseDown:v=>v.preventDefault(),className:"forma-text-statusbar-button",title:s,disabled:x,style:m,children:g})]})});Me.propTypes={onClick:o.func.isRequired,title:o.string.isRequired,command:o.string,activeStyles:o.object,disabled:o.bool,children:o.node.isRequired},Me.displayName="FormaTextStatusbarButton";const kt=({wordCount:r,charCount:s,onToggleSource:d,isFullScreen:u,onToggleFullScreen:x})=>{const g={flexShrink:0,padding:"0.5rem",borderTop:"1px solid #dee2e6",backgroundColor:"#f8f9fa",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.875em",color:"#6c757d"},p={fontSize:"14px",fontWeight:600},m={margin:"0 0.5rem"},v={display:"inline-flex",verticalAlign:"middle",gap:"4px"};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"forma-text-classic-statusbar",style:g,children:[e.jsxs("div",{children:[e.jsxs("span",{className:"forma-text-footer-text-areas",style:p,children:["Words: ",r]}),e.jsx("span",{style:m,children:"|"}),e.jsxs("span",{className:"forma-text-footer-text-area",style:p,children:["Characters: ",s]})]}),e.jsxs("div",{className:"forma-text-btn-group",style:v,children:[e.jsx(Me,{title:"View HTML Source",onClick:d,children:e.jsx(n.CodeXml,{size:16})}),e.jsx(Me,{title:u?"Exit Full Screen":"Full Screen",onClick:x,children:u?e.jsx(n.Minimize,{size:16}):e.jsx(n.Maximize,{size:16})})]})]})})};kt.propTypes={wordCount:o.number.isRequired,charCount:o.number.isRequired,onToggleSource:o.func.isRequired,showSource:o.bool.isRequired,onToggleFullScreen:o.func.isRequired,isFullScreen:o.bool.isRequired};const wt=({wordCount:r,charCount:s,onToggleSource:d,isFullScreen:u,onToggleFullScreen:x})=>{const[g,p]=l.useState(!1);l.useEffect(()=>{const k=setTimeout(()=>p(!0),100);return()=>clearTimeout(k)},[]);const m="#00ffff",v="rgba(138, 43, 226, 0.4)",y={position:"fixed",bottom:"0px",left:"50%",width:"100%",zIndex:1999,fontFamily:'"Orbitron", "Segoe UI", sans-serif',background:"rgba(15, 15, 25, 0.5)",backdropFilter:"blur(16px) saturate(200%)",color:"#e0e0e0",border:`1px solid ${v}`,overflow:"hidden",opacity:g?1:0,transform:g?"translateX(-50%) translateY(0)":"translateX(-50%) translateY(20px)",transition:"opacity 0.8s ease-out, transform 0.8s ease-out"},R={position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:`linear-gradient(${m} 1px, transparent 1px), linear-gradient(to right, ${m} 1px, transparent 1px)`,backgroundSize:"40px 40px",opacity:.05,animation:"forma-text-move-grid 20s linear infinite",zIndex:1},_={position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 25px",zIndex:2},M={position:"absolute",width:"20px",height:"20px",borderStyle:"solid",borderColor:m,opacity:g?.5:0,transition:"opacity 1s ease 0.5s"},b={topLeft:{...M,top:"-2px",left:"-2px",borderWidth:"2px 0 0 2px",borderRadius:"8px 0 0 0"},topRight:{...M,top:"-2px",right:"-2px",borderWidth:"2px 2px 0 0",borderRadius:"0 8px 0 0"},bottomLeft:{...M,bottom:"-2px",left:"-2px",borderWidth:"0 0 2px 2px",borderRadius:"0 0 0 8px"},bottomRight:{...M,bottom:"-2px",right:"-2px",borderWidth:"0 2px 2px 0",borderRadius:"0 0 8px 0"}},L={display:"flex",alignItems:"center",gap:"24px"},H={display:"flex",alignItems:"center",gap:"8px",color:"#aab5c3"},W={color:m,filter:`drop-shadow(0 0 3px ${m})`},I={fontSize:"12px",fontWeight:600,letterSpacing:"1px",opacity:.6},J={fontFamily:'"Roboto Mono", monospace',fontSize:"16px",fontWeight:700,color:"white"},ae={background:"transparent",border:"1px solid transparent",color:"#aab5c3",width:"36px",height:"36px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",cursor:"pointer",position:"relative",transition:"all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    /* Styles that cannot be inlined: animations, pseudo-elements, and pseudo-classes */
        @keyframes forma-text-move-grid {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }

        .forma-text-action-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 1px solid ${v};
          transition: all 0.3s ease;
        }

        .forma-text-action-button:hover {
          color: white;
        }

        .forma-text-action-button:hover::before {
          transform: scale(1.2);
          opacity: 0;
        }

        .forma-text-action-button:active {
          transform: scale(0.9);
        }
   `}),e.jsxs("div",{className:"forma-text-futuristic-statusbar",style:y,children:[e.jsx("div",{className:"forma-text-corner-bracket",style:b.topLeft}),e.jsx("div",{className:"forma-text-corner-bracket",style:b.topRight}),e.jsx("div",{className:"forma-text-corner-bracket",style:b.bottomLeft}),e.jsx("div",{className:"forma-text-corner-bracket",style:b.bottomRight}),e.jsx("div",{className:"forma-text-grid-background",style:R}),e.jsxs("div",{className:"forma-text-statusbar-content",style:_,children:[e.jsxs("div",{className:"forma-text-status-group",style:L,children:[e.jsxs("div",{className:"forma-text-data-readout",title:"Word Count",style:H,children:[e.jsx(n.Sigma,{size:16,style:W}),e.jsx("span",{style:I,children:"WORDS"}),e.jsx("span",{style:J,children:r.toString().padStart(4,"0")})]}),e.jsxs("div",{className:"forma-text-data-readout",title:"Character Count",style:H,children:[e.jsx(n.Binary,{size:16,style:W}),e.jsx("span",{style:I,children:"CHARS"}),e.jsx("span",{style:J,children:s.toString().padStart(5,"0")})]})]}),e.jsxs("div",{className:"forma-text-status-group",style:L,children:[e.jsx("button",{className:"forma-text-action-button",title:"View HTML Source",onClick:d,style:ae,children:e.jsx(n.CodeXml,{size:18})}),e.jsx("button",{className:"forma-text-action-button",title:u?"Exit Full Screen":"Full Screen",onClick:x,style:ae,children:u?e.jsx(n.Minimize,{size:18}):e.jsx(n.Maximize,{size:18})})]})]})]})]})};wt.propTypes={wordCount:o.number.isRequired,charCount:o.number.isRequired,onToggleSource:o.func.isRequired,onToggleFullScreen:o.func.isRequired,isFullScreen:o.bool.isRequired};const yt=({wordCount:r,charCount:s,onToggleSource:d,isFullScreen:u,onToggleFullScreen:x,theme:g="light"})=>{const p={light:{barBg:"#f8f9fa",barBorder:"#e0e0e0",barColor:"#5f6368",btnHoverBg:"#f1f3f4",btnHoverColor:"#202124"},dark:{barBg:"#2c2d2f",barBorder:"#3c4043",barColor:"#bdc1c6",btnHoverBg:"#3c4043",btnHoverColor:"#e8eaed"}},m=p[g]||p.light,v={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 16px",borderTop:`1px solid ${m.barBorder}`,backgroundColor:m.barBg,color:m.barColor,transition:"background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease"},O={display:"flex",alignItems:"center",gap:"12px"},y={opacity:.5},R={background:"none",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",color:m.barColor,transition:"background-color 0.2s ease, color 0.2s ease"};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .forma-text-statusbar-button:hover {
            background-color: ${m.btnHoverBg};
            color: ${m.btnHoverColor};
          }

          .forma-text-statusbar-item{
          font-size: 14px;
          font-weight: 800;
          font-style: italic;
          }
        `}),e.jsxs("div",{className:"forma-text-modern-statusbar",style:v,children:[e.jsxs("div",{className:"forma-text-statusbar-segment",style:O,children:[e.jsxs("span",{className:"forma-text-statusbar-item",children:["Words: ",r]}),e.jsx("span",{className:"forma-text-statusbar-divider",style:y,children:"|"}),e.jsxs("span",{className:"forma-text-statusbar-item",children:["Characters: ",s]})]}),e.jsxs("div",{className:"forma-text-statusbar-segment",style:O,children:[e.jsx("button",{className:"forma-text-statusbar-button",title:"View HTML Source",onClick:d,style:R,children:e.jsx(n.CodeXml,{size:18})}),e.jsx("button",{className:"forma-text-statusbar-button",title:u?"Exit Full Screen":"Full Screen",onClick:x,style:R,children:u?e.jsx(n.Minimize,{size:18}):e.jsx(n.Maximize,{size:18})})]})]})]})};yt.propTypes={wordCount:o.number.isRequired,charCount:o.number.isRequired,onToggleSource:o.func.isRequired,onToggleFullScreen:o.func.isRequired,isFullScreen:o.bool.isRequired,theme:o.string};const Ft=({theme:r,...s})=>r==="modern"?e.jsx(yt,{...s}):r==="futuristic"?e.jsx(wt,{...s}):e.jsx(kt,{...s});Ft.propTypes={theme:o.oneOf(["classic","modern","futuristic"])};const fr=()=>e.jsx("style",{children:`
.forma-text-editor-container {
  overflow: hidden !important;
}

.forma-text-editor-content:focus {
box-shadow: none;
}
.forma-text-modal .forma-text-editor-secondary {
background-color: #6c757d;
color: white;
font-size: 14px;
border-radius: 0px;
}
.forma-text-modal .forma-text-editor-primary {
background-color: #4285f4;
color: white;
font-size: 14px;
border-radius: 0px;
}
.forma-text-editor-content .forma-text-row {
position: relative;
margin: 1rem 0;
}
.forma-text-editor-content .forma-text-row:hover .forma-text-delete-column-btn {
display: flex;
}
.forma-text-delete-column-btn {
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
.forma-text-editor-content .forma-text-row > [class^="col-"] {
border: 1px dashed #ccc;
padding: 1rem;
min-height: 100px;
}
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
.forma-text-color-swatch {
width: 24px;
height: 24px;
border-radius: 50%;
cursor: pointer;
border: 1px solid #ddd;
transition: transform 0.1s ease-in-out;
padding: 0;
}
.forma-text-color-swatch:hover {
transform: scale(1.1);
}
.forma-text-btn-group .forma-text-btn {
display: flex;
align-items: center;
justify-content: center;
}
.forma-text-image-wrapper {
position: relative;
display: inline-block;
}
.forma-text-image-wrapper.selected {
outline: 2px solid #0d6efd;
}
.forma-text-resize-handle {
position: absolute;
width: 12px;
height: 12px;
background-color: #0d6efd;
border: 2px solid #fff;
border-radius: 50%;
z-index: 10;
}
.forma-text-resize-handle.bottom-right {
bottom: -6px;
right: -6px;
cursor: nwse-resize;
}
.forma-text-image-toolbar,
.forma-text-table-toolbar {
  position: absolute;
  z-index: 10;
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 5px;
}



.forma-text-video-wrapper {
position: relative;
padding-bottom: 56.25%;
height: 0;
overflow: hidden;
max-width: 100%;
background: #000;
border-radius: 0.25rem;
margin: 1rem 0;
}
.forma-text-video-wrapper iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
.forma-text-video-modal-title {
font-size: 14px;
}
.forma-text-footer-text-area {
font-size: 18px;
font-weight: 600;
}
.forma-text-ai-preview-pane {
height: 400px;
overflow-y: auto;
border: 1px solid #dee2e6;
padding: 1rem;
border-radius: 0.25rem;
background-color: #fff;
}
.forma-text-ai-loading-popup {
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
.forma-text-ai-loading-popup-minimized {
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
`});function Nt({content:r="",setContent:s="",geminiApiKey:d="",parentEditorClass:u="",toolBarClass:x="",textContentClass:g="",theme:p=""}){const m=l.useRef(null),v=l.useRef(null),O=l.useRef(!1),[y,R]=l.useState(new Set),[_,M]=l.useState({words:0,chars:0}),[b,L]=l.useState(!1),[H,W]=l.useState(!1),[I,J]=l.useState(!1),[ae,k]=l.useState({text:"",href:""}),[$,se]=l.useState(null),[Qe,he]=l.useState(!1),[Pe,Le]=l.useState(!1),[Be,K]=l.useState(!1),[te,re]=l.useState(""),[He,je]=l.useState(""),[ve,Ie]=l.useState(!1),[Ue,Ce]=l.useState(""),[ke,Ae]=l.useState(!1),[le,Te]=l.useState(null),[me,fe]=l.useState(null),[Re,_e]=l.useState(0),P=l.useCallback(()=>{const a=window.getSelection();if(a.rangeCount>0){const c=a.getRangeAt(0);m.current&&m.current.contains(c.commonAncestorContainer)&&(v.current=c)}},[]),oe=l.useCallback(()=>{if(v.current){const a=window.getSelection();a.removeAllRanges(),a.addRange(v.current)}},[]),U=l.useCallback(()=>{m.current&&(O.current=!0,s(m.current.innerHTML))},[]),et=l.useCallback(a=>{const c=b?a.target.value:a.currentTarget.innerHTML;O.current=!0,s(c)},[b]),we=l.useCallback(()=>{const a=new Set;["bold","italic","underline","strikeThrough","justifyLeft","justifyCenter","justifyRight","insertOrderedList","insertUnorderedList","superscript","subscript"].forEach(h=>{document.queryCommandState(h)&&a.add(h)}),R(a)},[]),V=l.useCallback((a,c=null)=>{var h;(h=m.current)==null||h.focus(),oe(),document.execCommand(a,!1,c),U(),we()},[oe,U,we]),xe=l.useCallback(a=>{var Z;(Z=m.current)==null||Z.focus(),oe();const c=window.getSelection();if(!c.rangeCount)return;const h=D=>{let Y=D.nodeType===Node.ELEMENT_NODE?D:D.parentNode;for(;Y&&Y!==m.current;){if(window.getComputedStyle(Y).display.match(/block|table|list-item/))return Y;Y=Y.parentNode}return null},T=c.getRangeAt(0),A=h(T.startContainer),ne=h(T.endContainer);if(A){let D=A;for(;D&&(D.style.lineHeight=a,D!==ne);)D=D.nextElementSibling}U()},[oe,U]);l.useEffect(()=>{if(O.current){O.current=!1;return}m.current&&!b&&r!==m.current.innerHTML&&(m.current.innerHTML=r||"")},[r,b]),l.useEffect(()=>{const a=document.createElement("div");a.innerHTML=r||"";const c=a.textContent||"",h=c.trim().split(/\s+/).filter(Boolean).length;M({words:h,chars:c.length})},[r]);const ye=l.useCallback(()=>{const a=window.getSelection();if(a.rangeCount>0){const c=a.getRangeAt(0);m.current&&m.current.contains(c.commonAncestorContainer)&&(P(),we())}},[P,we]);l.useEffect(()=>(document.addEventListener("selectionchange",ye),()=>document.removeEventListener("selectionchange",ye)),[ye]);const $e=l.useCallback(a=>{if(a.ctrlKey||a.metaKey){const c={b:"bold",i:"italic",u:"underline",k:()=>pe(),z:"undo",y:"redo"};c[a.key]&&(a.preventDefault(),typeof c[a.key]=="function"?c[a.key]():V(c[a.key]))}},[V]),pe=l.useCallback(()=>{var h;P();const a=window.getSelection(),c=(h=a.anchorNode)==null?void 0:h.parentElement.closest("a");(c==null?void 0:c.tagName)==="A"?(k({text:c.textContent,href:c.href}),se(c)):(k({text:a.toString(),href:""}),se(null)),J(!0)},[P]),tt=l.useCallback(a=>{if(J(!1),oe(),m.current.focus(),$)$.href=a.href,$.textContent=a.text;else{const c=`<a href="${a.href}" target="_blank" rel="noopener noreferrer">${a.text}</a>`;V("insertHTML",c)}se(null),U()},[$,oe,V,U]),rt=l.useCallback(a=>{const c=a.target.files[0];if(!c)return;const h=new FileReader;h.onload=T=>{const A=`<span class="forma-text-image-wrapper" style="display: inline-block;"><img src="${T.target.result}" class="forma-text-img-fluid" style="max-width: 100%; height: auto; border-radius: 0.25rem; width: 250px;" /></span>`;V("insertHTML",A)},h.readAsDataURL(c),a.target.value=""},[V]),De=l.useCallback(a=>{const c=a.target.files[0];if(!c)return;const h=new FileReader;h.onload=T=>{It.convertToHtml({arrayBuffer:T.target.result}).then(A=>s(A.value)).catch(A=>console.error("Error converting .docx to HTML:",A))},h.readAsArrayBuffer(c),a.target.value=""},[]),ot=a=>{let c="",h;return a.includes("youtube.com/watch?v=")?(h=a.split("v=")[1].split("&")[0],c=`https://www.youtube.com/embed/${h}`):a.includes("youtu.be/")?(h=a.split("youtu.be/")[1].split("?")[0],c=`https://www.youtube.com/embed/${h}`):a.includes("vimeo.com/")&&(h=a.split("vimeo.com/")[1].split("?")[0],c=`https://player.vimeo.com/video/${h}`),c},nt=l.useCallback(a=>{if(he(!1),!a)return;const c=ot(a);if(!c){console.warn("Invalid video URL. Please use a valid YouTube or Vimeo link.");return}oe(),m.current.focus();const h=`<div class="forma-text-video-wrapper"><iframe src="${c}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;V("insertHTML",h),U()},[oe,V,U]),Ve=l.useCallback(a=>{Le(!1);let c='<table class="forma-text-table" style="width: 100%; border-collapse: collapse; border: 1px solid #dee2e6;"><tbody>';for(let h=0;h<a.rows;h++){c+="<tr>";for(let T=0;T<a.cols;T++)c+='<td style="border: 1px solid #dee2e6; padding: 0.75rem;"><br></td>';c+="</tr>"}c+="</tbody></table><p><br></p>",V("insertHTML",c)},[V]),We=(a,c)=>{const h=new qe.diff_match_patch,T=h.diff_main(a,c);h.diff_cleanupSemantic(T);let A="";for(const[ne,Z]of T){const D=Z.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">").replace(/\n/g,"¶<br>");switch(ne){case qe.DIFF_INSERT:A+=`<ins style="background-color: #d4edda; text-decoration: none;">${D}</ins>`;break;case qe.DIFF_DELETE:A+=`<del style="background-color: #f8d7da; text-decoration: none;">${D}</del>`;break;case qe.DIFF_EQUAL:A+=`<span>${D}</span>`;break}}return A},Ye=async()=>{var A,ne,Z,D,Y;if(!r||r===""||ve)return;Ie(!0),re(""),Ae(!1);const a=["Analyzing...","Generating suggestions...","Optimizing flow...","Finalizing..."];let c=0;Ce(a[c]);const h=setInterval(()=>{c=(c+1)%a.length,Ce(a[c])},2e3),T=`
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
`;try{const ee={contents:[{role:"user",parts:[{text:T}]}]},ie=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${d}`,be=await fetch(ie,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)});if(!be.ok)throw new Error(`API call failed: ${be.status}`);const Ne=(Y=(D=(Z=(ne=(A=(await be.json()).candidates)==null?void 0:A[0])==null?void 0:ne.content)==null?void 0:Z.parts)==null?void 0:D[0])==null?void 0:Y.text;if(Ne)re(Ne),je(We(r,Ne)),K(!0);else throw new Error("Invalid AI response format")}catch(ee){console.error("Error calling Gemini API:",ee),re(`<p>Sorry, an error occurred. ${ee.message}</p>`),je(`<p>Error: ${ee.message}</p>`),K(!0)}finally{clearInterval(h),Ie(!1),Ce("")}},it=()=>{s(te),K(!1),re(""),je("")};l.useEffect(()=>{const a=m.current;if(!a)return;const c=h=>{if(h.target.closest(".forma-text-delete-column-btn")){h.target.closest(".forma-text-row").remove(),U();return}const T=h.target.closest("img"),A=h.target.closest("table");Te(T),fe(A),T&&fe(null),A&&Te(null)};return a.addEventListener("click",c),()=>a.removeEventListener("click",c)},[U]);const Fe=(a,c)=>{a&&(a.style.display="inline-block",a.style.margin="0",a.style.float="none",c==="center"?(a.style.display="block",a.style.margin="0 auto"):c==="left"?(a.style.float="left",a.style.marginRight="1rem",a.style.marginBottom="1rem"):c==="right"&&(a.style.float="right",a.style.marginLeft="1rem",a.style.marginBottom="1rem"),U())};return e.jsxs(e.Fragment,{children:[e.jsx(fr,{}),e.jsxs("div",{className:`forma-text-editor-container ${u}`,style:{display:"flex",flexDirection:"column",border:"1px solid #dee2e6",borderRadius:"0.375rem",boxShadow:"0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",position:H?"fixed":"relative",top:H?0:"auto",left:H?0:"auto",width:H?"100%":"auto",height:H?"100%":"auto",minHeight:H?"100%":"60vh",maxHeight:H?"100%":"95vh",backgroundColor:H?"white":"transparent",zIndex:H?1050:"auto",overflowX:"hidden"},children:[e.jsx("div",{className:`forma-text-toolbar-container ${x}`,style:{flexShrink:0,borderBottom:"1px solid #dee2e6"},children:e.jsx(pt,{theme:p,applyStyle:V,applyLineHeight:xe,activeStyles:y,onOpenLinkModal:pe,onImageUpload:rt,onDocxUpload:De,onVideoModalOpen:()=>{P(),he(!0)},onTableModalOpen:()=>{P(),Le(!0)},onAiRefactor:Ye,content:r,isGenerating:ve,isAiLoadingMinimized:ke})}),e.jsxs("div",{className:"forma-text-editor-area",style:{flexGrow:1,overflow:"auto",position:"relative",paddingTop:"1rem"},children:[e.jsx(bt,{editorRef:m,content:r,showSource:b,onContentChange:et,onKeyDown:$e,textContentClass:g}),le&&!b&&(()=>{const a=m.current.getBoundingClientRect(),c=le.getBoundingClientRect(),h=le.parentElement;return e.jsxs("div",{className:"forma-text-image-wrapper forma-text-selected",style:{position:"absolute",top:c.top-a.top+m.current.scrollTop,left:c.left-a.left+m.current.scrollLeft,width:c.width,height:c.height,pointerEvents:"none"},children:[e.jsxs("div",{className:"forma-text-image-toolbar",style:{pointerEvents:"auto"},children:[e.jsx("button",{className:"forma-text-btn",style:{backgroundColor:"#212529",color:"white",border:"none",padding:"0.25rem 0.5rem",fontSize:"0.875rem",borderRadius:"0.25rem"},onClick:()=>Fe(h,"left"),children:e.jsx(n.AlignStartVertical,{size:14})}),e.jsx("button",{className:"forma-text-btn",style:{backgroundColor:"#212529",color:"white",border:"none",padding:"0.25rem 0.5rem",fontSize:"0.875rem",borderRadius:"0.25rem"},onClick:()=>Fe(h,"center"),children:e.jsx(n.AlignCenterVertical,{size:14})}),e.jsx("button",{className:"forma-text-btn",style:{backgroundColor:"#212529",color:"white",border:"none",padding:"0.25rem 0.5rem",fontSize:"0.875rem",borderRadius:"0.25rem"},onClick:()=>Fe(h,"right"),children:e.jsx(n.AlignEndVertical,{size:14})}),e.jsx("button",{className:"forma-text-btn",style:{backgroundColor:"#dc3545",color:"white",border:"none",padding:"0.25rem 0.5rem",fontSize:"0.875rem",borderRadius:"0.25rem"},onClick:()=>{h.remove(),U(),Te(null)},children:e.jsx(n.Trash2,{size:14})})]}),e.jsx("div",{className:"forma-text-resize-handle bottom-right",style:{pointerEvents:"auto"},onMouseDown:T=>{T.preventDefault();const A=T.clientX,ne=le.offsetWidth,Z=Y=>{const ee=ne+(Y.clientX-A);ee>20&&(le.style.width=`${ee}px`,le.style.height="auto",_e(ie=>ie+1))},D=()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",D),U()};document.addEventListener("mousemove",Z),document.addEventListener("mouseup",D)}})]})})(),me&&!b&&(()=>{const a=m.current.getBoundingClientRect(),c=me.getBoundingClientRect();return e.jsx("div",{className:"forma-text-table-toolbar",style:{position:"absolute",top:`${c.top-a.top+m.current.scrollTop-15}px`,left:`${c.left-a.left+m.current.scrollLeft+c.width}px`,transform:"translateX(-100%)",pointerEvents:"auto"},children:e.jsx("button",{className:"forma-text-btn",style:{backgroundColor:"#dc3545",color:"white",border:"none",padding:"0.4rem",fontSize:"0.875rem",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0.25rem"},onClick:()=>{me.remove(),U(),fe(null)},children:e.jsx(n.Trash2,{size:14})})})})()]}),e.jsx(Ft,{theme:p,wordCount:_.words,charCount:_.chars,onToggleSource:()=>L(!b),showSource:b,onToggleFullScreen:()=>W(!H),isFullScreen:H}),ve&&e.jsx(vt,{status:Ue,isMinimized:ke,onMinimizeToggle:()=>Ae(!ke)}),e.jsx(gt,{isOpen:I,onClose:()=>J(!1),onApply:tt,initialData:ae,isEditing:!!$}),e.jsx(ht,{isOpen:Qe,onClose:()=>he(!1),onInsert:nt}),e.jsx(jt,{isOpen:Pe,onClose:()=>Le(!1),onCreate:Ve}),e.jsx(Ct,{isOpen:Be,onClose:()=>K(!1),onApply:it,originalContent:r,suggestion:te,highlightedDiff:He})]})]})}return Nt.propTypes={content:o.string,setContent:o.func,geminiApiKey:o.string,parentEditorClass:o.string,toolBarClass:o.string,textContentClass:o.string,theme:o.string},Nt});
//# sourceMappingURL=forma-text.umd.cjs.map
