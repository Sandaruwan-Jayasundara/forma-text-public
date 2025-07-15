import ze, { useState as w, useRef as K, useEffect as se, useCallback as Y } from "react";
import o from "prop-types";
import Rr from "mammoth";
import { diff_match_patch as Fr, DIFF_EQUAL as Nr, DIFF_DELETE as Tr, DIFF_INSERT as Er } from "diff-match-patch";
import { Palette as bt, Highlighter as gt, Smile as ht, Undo as jt, Redo as vt, Pilcrow as Qe, Type as Be, ArrowDownUp as Ct, Bold as kt, Italic as yt, Underline as wt, Strikethrough as Rt, Superscript as Ft, Subscript as Nt, AlignLeft as Tt, AlignCenter as Et, AlignRight as zt, ListOrdered as Ot, List as St, Outdent as It, Indent as Lt, Quote as At, Code as _t, Link as Pe, Minus as Dt, Eraser as qt, Image as Mt, Video as et, Table as tt, FileUp as Bt, Sparkles as He, ChevronDown as Jt, GripVertical as zr, ExternalLink as Or, ChevronsDownUp as Sr, Minimize as rt, CodeXml as Pt, Maximize as Ht, Sigma as Ir, Binary as Lr, AlignStartVertical as Ar, AlignCenterVertical as _r, AlignEndVertical as Dr, Trash2 as Gt } from "lucide-react";
var mt = { exports: {} }, qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function qr() {
  if (Kt) return qe;
  Kt = 1;
  var r = ze, a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, m = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, h, E) {
    var k, L = {}, A = null, q = null;
    E !== void 0 && (A = "" + E), h.key !== void 0 && (A = "" + h.key), h.ref !== void 0 && (q = h.ref);
    for (k in h) d.call(h, k) && !x.hasOwnProperty(k) && (L[k] = h[k]);
    if (c && c.defaultProps) for (k in h = c.defaultProps, h) L[k] === void 0 && (L[k] = h[k]);
    return { $$typeof: a, type: c, key: A, ref: q, props: L, _owner: m.current };
  }
  return qe.Fragment = s, qe.jsx = f, qe.jsxs = f, qe;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function Mr() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ze, a = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), p = Symbol.iterator, z = "@@iterator";
    function B(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = p && t[p] || t[z];
      return typeof n == "function" ? n : null;
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(t) {
      {
        for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), g = 1; g < n; g++)
          u[g - 1] = arguments[g];
        J("error", t, u);
      }
    }
    function J(t, n, u) {
      {
        var g = $.ReactDebugCurrentFrame, y = g.getStackAddendum();
        y !== "" && (n += "%s", u = u.concat([y]));
        var R = u.map(function(C) {
          return String(C);
        });
        R.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, R);
      }
    }
    var le = !1, v = !1, H = !1, de = !1, ot = !1, ve;
    ve = Symbol.for("react.module.reference");
    function nt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === d || t === x || ot || t === m || t === E || t === k || de || t === q || le || v || H || typeof t == "object" && t !== null && (t.$$typeof === A || t.$$typeof === L || t.$$typeof === f || t.$$typeof === c || t.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ve || t.getModuleId !== void 0));
    }
    function Oe(t, n, u) {
      var g = t.displayName;
      if (g)
        return g;
      var y = n.displayName || n.name || "";
      return y !== "" ? u + "(" + y + ")" : u;
    }
    function $e(t) {
      return t.displayName || "Context";
    }
    function X(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case d:
          return "Fragment";
        case s:
          return "Portal";
        case x:
          return "Profiler";
        case m:
          return "StrictMode";
        case E:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var n = t;
            return $e(n) + ".Consumer";
          case f:
            var u = t;
            return $e(u._context) + ".Provider";
          case h:
            return Oe(t, t.render, "ForwardRef");
          case L:
            var g = t.displayName || null;
            return g !== null ? g : X(t.type) || "Memo";
          case A: {
            var y = t, R = y._payload, C = y._init;
            try {
              return X(C(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, oe = 0, Ve, Ce, ke, Se, We, ye, we;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function ce() {
      {
        if (oe === 0) {
          Ve = console.log, Ce = console.info, ke = console.warn, Se = console.error, We = console.group, ye = console.groupCollapsed, we = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        oe++;
      }
    }
    function Le() {
      {
        if (oe--, oe === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, t, {
              value: Ve
            }),
            info: re({}, t, {
              value: Ce
            }),
            warn: re({}, t, {
              value: ke
            }),
            error: re({}, t, {
              value: Se
            }),
            group: re({}, t, {
              value: We
            }),
            groupCollapsed: re({}, t, {
              value: ye
            }),
            groupEnd: re({}, t, {
              value: we
            })
          });
        }
        oe < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = $.ReactCurrentDispatcher, me;
    function Ae(t, n, u) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (y) {
            var g = y.stack.trim().match(/\n( *(at )?)/);
            me = g && g[1] || "";
          }
        return `
` + me + t;
      }
    }
    var _e = !1, ee;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new ne();
    }
    function P(t, n) {
      if (!t || _e)
        return "";
      {
        var u = ee.get(t);
        if (u !== void 0)
          return u;
      }
      var g;
      _e = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = ue.current, ue.current = null, ce();
      try {
        if (n) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (G) {
              g = G;
            }
            Reflect.construct(t, [], C);
          } else {
            try {
              C.call();
            } catch (G) {
              g = G;
            }
            t.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            g = G;
          }
          t();
        }
      } catch (G) {
        if (G && g && typeof G.stack == "string") {
          for (var j = G.stack.split(`
`), W = g.stack.split(`
`), D = j.length - 1, M = W.length - 1; D >= 1 && M >= 0 && j[D] !== W[M]; )
            M--;
          for (; D >= 1 && M >= 0; D--, M--)
            if (j[D] !== W[M]) {
              if (D !== 1 || M !== 1)
                do
                  if (D--, M--, M < 0 || j[D] !== W[M]) {
                    var Q = `
` + j[D].replace(" at new ", " at ");
                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), typeof t == "function" && ee.set(t, Q), Q;
                  }
                while (D >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ue.current = R, Le(), Error.prepareStackTrace = y;
      }
      var Ee = t ? t.displayName || t.name : "", be = Ee ? Ae(Ee) : "";
      return typeof t == "function" && ee.set(t, be), be;
    }
    function it(t, n, u) {
      return P(t, !1);
    }
    function Re(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function U(t, n, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return P(t, Re(t));
      if (typeof t == "string")
        return Ae(t);
      switch (t) {
        case E:
          return Ae("Suspense");
        case k:
          return Ae("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            return it(t.render);
          case L:
            return U(t.type, n, u);
          case A: {
            var g = t, y = g._payload, R = g._init;
            try {
              return U(R(y), n, u);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Fe = {}, Ye = $.ReactDebugCurrentFrame;
    function pe(t) {
      if (t) {
        var n = t._owner, u = U(t.type, t._source, n ? n.type : null);
        Ye.setExtraStackFrame(u);
      } else
        Ye.setExtraStackFrame(null);
    }
    function at(t, n, u, g, y) {
      {
        var R = Function.call.bind(fe);
        for (var C in t)
          if (R(t, C)) {
            var j = void 0;
            try {
              if (typeof t[C] != "function") {
                var W = Error((g || "React class") + ": " + u + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              j = t[C](n, C, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              j = D;
            }
            j && !(j instanceof Error) && (pe(y), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, C, typeof j), pe(null)), j instanceof Error && !(j.message in Fe) && (Fe[j.message] = !0, pe(y), O("Failed %s type: %s", u, j.message), pe(null));
          }
      }
    }
    var st = Array.isArray;
    function De(t) {
      return st(t);
    }
    function lt(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, u = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function dt(t) {
      try {
        return Ge(t), !1;
      } catch {
        return !0;
      }
    }
    function Ge(t) {
      return "" + t;
    }
    function Ke(t) {
      if (dt(t))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lt(t)), Ge(t);
    }
    var Xe = $.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, i;
    function l(t) {
      if (fe.call(t, "ref")) {
        var n = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function b(t) {
      if (fe.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function I(t, n) {
      typeof t.ref == "string" && Xe.current;
    }
    function S(t, n) {
      {
        var u = function() {
          Ne || (Ne = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ie(t, n) {
      {
        var u = function() {
          i || (i = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Z = function(t, n, u, g, y, R, C) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: n,
        ref: u,
        props: C,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function _(t, n, u, g, y) {
      {
        var R, C = {}, j = null, W = null;
        u !== void 0 && (Ke(u), j = "" + u), b(n) && (Ke(n.key), j = "" + n.key), l(n) && (W = n.ref, I(n, y));
        for (R in n)
          fe.call(n, R) && !ct.hasOwnProperty(R) && (C[R] = n[R]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (R in D)
            C[R] === void 0 && (C[R] = D[R]);
        }
        if (j || W) {
          var M = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          j && S(C, M), W && ie(C, M);
        }
        return Z(t, j, W, y, g, Xe.current, C);
      }
    }
    var V = $.ReactCurrentOwner, te = $.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var n = t._owner, u = U(t.type, t._source, n ? n.type : null);
        te.setExtraStackFrame(u);
      } else
        te.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function Te() {
      {
        if (V.current) {
          var t = X(V.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function xr(t) {
      return "";
    }
    var Ut = {};
    function br(t) {
      {
        var n = Te();
        if (!n) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (n = `

Check the top-level render call using <` + u + ">.");
        }
        return n;
      }
    }
    function $t(t, n) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = br(n);
        if (Ut[u])
          return;
        Ut[u] = !0;
        var g = "";
        t && t._owner && t._owner !== V.current && (g = " It was passed a child from " + X(t._owner.type) + "."), ae(t), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), ae(null);
      }
    }
    function Vt(t, n) {
      {
        if (typeof t != "object")
          return;
        if (De(t))
          for (var u = 0; u < t.length; u++) {
            var g = t[u];
            Je(g) && $t(g, n);
          }
        else if (Je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var y = B(t);
          if (typeof y == "function" && y !== t.entries)
            for (var R = y.call(t), C; !(C = R.next()).done; )
              Je(C.value) && $t(C.value, n);
        }
      }
    }
    function gr(t) {
      {
        var n = t.type;
        if (n == null || typeof n == "string")
          return;
        var u;
        if (typeof n == "function")
          u = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === L))
          u = n.propTypes;
        else
          return;
        if (u) {
          var g = X(n);
          at(u, t.props, "prop", g, t);
        } else if (n.PropTypes !== void 0 && !xe) {
          xe = !0;
          var y = X(n);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(t) {
      {
        for (var n = Object.keys(t.props), u = 0; u < n.length; u++) {
          var g = n[u];
          if (g !== "children" && g !== "key") {
            ae(t), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ae(null);
            break;
          }
        }
        t.ref !== null && (ae(t), O("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var Wt = {};
    function Yt(t, n, u, g, y, R) {
      {
        var C = nt(t);
        if (!C) {
          var j = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = xr();
          W ? j += W : j += Te();
          var D;
          t === null ? D = "null" : De(t) ? D = "array" : t !== void 0 && t.$$typeof === a ? (D = "<" + (X(t.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, j);
        }
        var M = _(t, n, u, y, R);
        if (M == null)
          return M;
        if (C) {
          var Q = n.children;
          if (Q !== void 0)
            if (g)
              if (De(Q)) {
                for (var Ee = 0; Ee < Q.length; Ee++)
                  Vt(Q[Ee], t);
                Object.freeze && Object.freeze(Q);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(Q, t);
        }
        if (fe.call(n, "key")) {
          var be = X(t), G = Object.keys(n).filter(function(wr) {
            return wr !== "key";
          }), ut = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wt[be + ut]) {
            var yr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, be, yr, be), Wt[be + ut] = !0;
          }
        }
        return t === d ? hr(M) : gr(M), M;
      }
    }
    function jr(t, n, u) {
      return Yt(t, n, u, !0);
    }
    function vr(t, n, u) {
      return Yt(t, n, u, !1);
    }
    var Cr = vr, kr = jr;
    Me.Fragment = d, Me.jsx = Cr, Me.jsxs = kr;
  }()), Me;
}
process.env.NODE_ENV === "production" ? mt.exports = qr() : mt.exports = Mr();
var e = mt.exports;
const Br = () => /* @__PURE__ */ e.jsx("style", { children: `
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




        ` }), F = ze.memo(
  ({ onClick: r, title: a, command: s, activeStyles: d, disabled: m = !1, children: x }) => {
    const f = [
      "forma-text-toolbar-button",
      d && d.has(s) ? "forma-text-toolbar-button--active" : ""
    ].join(" ").trim();
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(Br, {}),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-tooltip-container", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: r,
            onMouseDown: (c) => c.preventDefault(),
            className: f,
            disabled: m,
            "aria-label": a,
            children: x
          }
        ),
        /* @__PURE__ */ e.jsx("span", { className: "forma-text-tooltip", children: a })
      ] })
    ] });
  }
);
F.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  command: o.string,
  activeStyles: o.object,
  disabled: o.bool,
  children: o.node.isRequired
};
F.displayName = "FormaTextToolbarButton";
const Pr = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), ge = ({ title: r, icon: a, children: s }) => {
  const [d, m] = w(!1), x = K(null);
  return se(() => {
    const f = (c) => {
      x.current && !x.current.contains(c.target) && m(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Pr, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-dropdown", ref: x, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          title: r,
          onClick: () => m(!d),
          onMouseDown: (f) => f.preventDefault(),
          className: "forma-text-dropdown-toggle",
          "aria-expanded": d,
          children: a
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `forma-text-dropdown-menu ${d ? "forma-text-dropdown-menu--show" : ""}`,
          onClick: (f) => {
            f.target.closest("button") && m(!1);
          },
          children: s
        }
      )
    ] })
  ] });
};
ge.propTypes = {
  title: o.string.isRequired,
  icon: o.node.isRequired,
  children: o.node.isRequired
};
const Hr = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), Ur = [
  "#000000",
  "#222222",
  "#444444",
  "#666666",
  "#888888",
  "#999999",
  "#BBBBBB",
  "#CCCCCC",
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF",
  "#FF0000",
  "#CC0000",
  "#990000",
  "#660000",
  "#FF6666",
  "#FF9900",
  "#FF6600",
  "#CC6600",
  "#FFB84D",
  "#FFFF00",
  "#FFEE00",
  "#CCCC00",
  "#999900",
  "#00FF00",
  "#00CC00",
  "#009900",
  "#66FF66",
  "#33CC33",
  "#00FFFF",
  "#00CCCC",
  "#009999",
  "#66FFFF",
  "#0000FF",
  "#0000CC",
  "#000099",
  "#6666FF",
  "#3366FF",
  "#9900FF",
  "#6600CC",
  "#9933FF",
  "#CC99FF",
  "#FF00FF",
  "#CC00CC",
  "#FF66FF",
  "#FF99FF"
], ft = ({ command: r, applyStyle: a }) => {
  const s = r === "foreColor" ? "Text Color" : "Highlight Color", d = r === "foreColor" ? /* @__PURE__ */ e.jsx(bt, { size: 16 }) : /* @__PURE__ */ e.jsx(gt, { size: 16 });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Hr, {}),
    /* @__PURE__ */ e.jsx(ge, { title: s, icon: d, children: /* @__PURE__ */ e.jsx("div", { className: "forma-text-color-grid", children: Ur.map((m) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "forma-text-color-swatch",
        style: { backgroundColor: m },
        onClick: () => a(r, m),
        "aria-label": m
      },
      m
    )) }) })
  ] });
};
ft.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired
};
const $r = () => /* @__PURE__ */ e.jsx("style", { children: `
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
    ` }), Vr = [
  "💻",
  "🖥️",
  "🖱️",
  "⌨️",
  "🖨️",
  "📱",
  "📲",
  "🕹️",
  "🧑‍💻",
  "👨‍💻",
  "👩‍💻",
  "🔧",
  "🔨",
  "⚙️",
  "🧰",
  "📡",
  "🌐",
  "🔌",
  "💾",
  "📂",
  "📁",
  "🗂️",
  "📝",
  "📊",
  "📈",
  "📉",
  "🔒",
  "🔓",
  "🛡️",
  "🐞",
  "⚡",
  "🚀",
  "🧪",
  "💡",
  "🤖",
  "🧩",
  "🧬",
  "🛠️",
  "📧",
  "🔍",
  "📥",
  "📤"
], Zt = ({ applyStyle: r }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx($r, {}),
  /* @__PURE__ */ e.jsx(ge, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(ht, { size: 16 }), children: /* @__PURE__ */ e.jsx("div", { className: "forma-text-emoji-grid", children: Vr.map((a) => /* @__PURE__ */ e.jsx(
    "button",
    {
      className: "forma-text-emoji-button",
      onClick: () => r("insertText", a),
      children: a
    },
    a
  )) }) })
] });
Zt.propTypes = {
  applyStyle: o.func.isRequired
};
const Wr = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), Yr = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], Gr = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, Kr = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, Xr = { Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" }, Qt = ({
  applyStyle: r,
  applyLineHeight: a,
  activeStyles: s,
  onOpenLinkModal: d,
  onImageUpload: m,
  onDocxUpload: x,
  onVideoModalOpen: f,
  onTableModalOpen: c,
  onAiRefactor: h,
  content: E,
  isGenerating: k,
  isAiLoadingMinimized: L
}) => {
  const A = K(null), q = K(null);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Wr, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-classic-toolbar", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Undo (Ctrl+Z)",
            onClick: () => r("undo"),
            children: /* @__PURE__ */ e.jsx(jt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Redo (Ctrl+Y)",
            onClick: () => r("redo"),
            children: /* @__PURE__ */ e.jsx(vt, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(ge, { title: "Headings", icon: /* @__PURE__ */ e.jsx(Qe, { size: 14 }), children: Object.entries(Kr).map(([p, z]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "forma-text-dropdown-item",
            onClick: () => r("formatBlock", z),
            children: p
          },
          p
        )) }),
        /* @__PURE__ */ e.jsx(
          ge,
          {
            title: "Font Family",
            icon: /* @__PURE__ */ e.jsx("span", { className: "forma-text-font-icon", children: "Aa" }),
            children: Yr.map((p) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "forma-text-dropdown-item",
                style: { fontFamily: p },
                onClick: () => r("fontName", p),
                children: p
              },
              p
            ))
          }
        ),
        /* @__PURE__ */ e.jsx(ge, { title: "Font Size", icon: /* @__PURE__ */ e.jsx(Be, { size: 14 }), children: Object.entries(Gr).map(([p, z]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "forma-text-dropdown-item",
            onClick: () => r("fontSize", z),
            children: p
          },
          p
        )) }),
        /* @__PURE__ */ e.jsxs(ge, { title: "Line Height", icon: /* @__PURE__ */ e.jsx(Ct, { size: 14 }), children: [
          Object.entries(Xr).map(([p, z]) => /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "forma-text-dropdown-item",
              onClick: () => a(z),
              children: p
            },
            p
          )),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "forma-text-dropdown-item forma-text-dropdown-item--danger",
              onClick: () => a("normal"),
              children: "Remove Height"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Bold (Ctrl+B)",
            command: "bold",
            activeStyles: s,
            onClick: () => r("bold"),
            children: /* @__PURE__ */ e.jsx(kt, { size: 14 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Italic (Ctrl+I)",
            command: "italic",
            activeStyles: s,
            onClick: () => r("italic"),
            children: /* @__PURE__ */ e.jsx(yt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Underline (Ctrl+U)",
            command: "underline",
            activeStyles: s,
            onClick: () => r("underline"),
            children: /* @__PURE__ */ e.jsx(wt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Strikethrough",
            command: "strikeThrough",
            activeStyles: s,
            onClick: () => r("strikeThrough"),
            children: /* @__PURE__ */ e.jsx(Rt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Superscript",
            command: "superscript",
            activeStyles: s,
            onClick: () => r("superscript"),
            children: /* @__PURE__ */ e.jsx(Ft, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Subscript",
            command: "subscript",
            activeStyles: s,
            onClick: () => r("subscript"),
            children: /* @__PURE__ */ e.jsx(Nt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(Zt, { applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(ft, { command: "foreColor", applyStyle: r }),
        /* @__PURE__ */ e.jsx(ft, { command: "backColor", applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Align Left",
            command: "justifyLeft",
            activeStyles: s,
            onClick: () => r("justifyLeft"),
            children: /* @__PURE__ */ e.jsx(Tt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Align Center",
            command: "justifyCenter",
            activeStyles: s,
            onClick: () => r("justifyCenter"),
            children: /* @__PURE__ */ e.jsx(Et, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Align Right",
            command: "justifyRight",
            activeStyles: s,
            onClick: () => r("justifyRight"),
            children: /* @__PURE__ */ e.jsx(zt, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Ordered List",
            command: "insertOrderedList",
            activeStyles: s,
            onClick: () => r("insertOrderedList"),
            children: /* @__PURE__ */ e.jsx(Ot, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Unordered List",
            command: "insertUnorderedList",
            activeStyles: s,
            onClick: () => r("insertUnorderedList"),
            children: /* @__PURE__ */ e.jsx(St, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(F, { title: "Outdent", onClick: () => r("outdent"), children: /* @__PURE__ */ e.jsx(It, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(F, { title: "Indent", onClick: () => r("indent"), children: /* @__PURE__ */ e.jsx(Lt, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Blockquote",
            onClick: () => r("formatBlock", "<blockquote>"),
            children: /* @__PURE__ */ e.jsx(At, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Code Block",
            onClick: () => r("formatBlock", "<pre>"),
            children: /* @__PURE__ */ e.jsx(_t, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Add/Edit Link (Ctrl+K)",
            onClick: d,
            children: /* @__PURE__ */ e.jsx(Pe, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Horizontal Line",
            onClick: () => r("insertHorizontalRule"),
            children: /* @__PURE__ */ e.jsx(Dt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Clear Formatting",
            onClick: () => r("removeFormat"),
            children: /* @__PURE__ */ e.jsx(qt, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Insert Image",
            onClick: () => {
              var p;
              return (p = A.current) == null ? void 0 : p.click();
            },
            children: /* @__PURE__ */ e.jsx(Mt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx(F, { title: "Insert Video", onClick: f, children: /* @__PURE__ */ e.jsx(et, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(F, { title: "Insert Table", onClick: c, children: /* @__PURE__ */ e.jsx(tt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(
          F,
          {
            title: "Import from Word (.docx)",
            onClick: () => {
              var p;
              return (p = q.current) == null ? void 0 : p.click();
            },
            children: /* @__PURE__ */ e.jsx(Bt, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "forma-text-btn-group", children: /* @__PURE__ */ e.jsx(
        F,
        {
          title: "Improve with AI",
          onClick: h,
          disabled: !E || E === "" || k,
          children: k && !L ? /* @__PURE__ */ e.jsx("div", { className: "forma-text-spinner", role: "status" }) : /* @__PURE__ */ e.jsx(He, { size: 16 })
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: A,
        onChange: m,
        className: "forma-text-hidden"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: q,
        onChange: x,
        className: "forma-text-hidden"
      }
    )
  ] });
};
Qt.propTypes = {
  applyStyle: o.func.isRequired,
  applyLineHeight: o.func.isRequired,
  activeStyles: o.object.isRequired,
  onOpenLinkModal: o.func.isRequired,
  onImageUpload: o.func.isRequired,
  onDocxUpload: o.func.isRequired,
  onVideoModalOpen: o.func.isRequired,
  onTableModalOpen: o.func.isRequired,
  onAiRefactor: o.func.isRequired,
  content: o.string,
  isGenerating: o.bool.isRequired,
  isAiLoadingMinimized: o.bool.isRequired
};
const N = ze.memo(
  ({
    onClick: r,
    title: a,
    command: s,
    activeStyles: d,
    disabled: m = !1,
    children: x,
    className: f = ""
  }) => /* @__PURE__ */ e.jsx("div", { className: "forma-text-tooltip-container", children: /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (c) => c.preventDefault(),
      className: `modern-toolbar-button ${d && d.has(s) ? "active" : ""} ${f}`,
      disabled: m,
      children: [
        x,
        /* @__PURE__ */ e.jsx("span", { className: "forma-text-tooltip", children: a })
      ]
    }
  ) })
);
N.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  command: o.string,
  activeStyles: o.object,
  disabled: o.bool,
  children: o.node.isRequired,
  className: o.string
};
N.displayName = "ModernToolbarButton";
const he = ({ title: r, icon: a, children: s }) => {
  const [d, m] = w(!1), x = K(null);
  return se(() => {
    const f = (c) => {
      x.current && !x.current.contains(c.target) && m(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "modern-dropdown", ref: x, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        title: r,
        onClick: () => m(!d),
        onMouseDown: (f) => f.preventDefault(),
        className: "modern-toolbar-button",
        "aria-expanded": d,
        children: [
          a,
          /* @__PURE__ */ e.jsx(Jt, { size: 14, style: { marginLeft: "4px" } })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `modern-dropdown-menu ${d ? "show" : ""}`,
        onClick: () => m(!1),
        children: s
      }
    )
  ] });
};
he.propTypes = {
  title: o.string.isRequired,
  icon: o.node.isRequired,
  children: o.node.isRequired
};
const Jr = [
  "#000000",
  "#222222",
  "#444444",
  "#666666",
  "#888888",
  "#999999",
  "#BBBBBB",
  "#CCCCCC",
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF",
  "#FF0000",
  "#CC0000",
  "#990000",
  "#660000",
  "#FF6666",
  "#FF9900",
  "#FF6600",
  "#CC6600",
  "#FFB84D",
  "#FFFF00",
  "#FFEE00",
  "#CCCC00",
  "#999900",
  "#00FF00",
  "#00CC00",
  "#009900",
  "#66FF66",
  "#33CC33",
  "#00FFFF",
  "#00CCCC",
  "#009999",
  "#66FFFF",
  "#0000FF",
  "#0000CC",
  "#000099",
  "#6666FF",
  "#3366FF",
  "#9900FF",
  "#6600CC",
  "#9933FF",
  "#CC99FF",
  "#FF00FF",
  "#CC00CC",
  "#FF66FF",
  "#FF99FF"
], pt = ({ command: r, applyStyle: a }) => {
  const s = r === "foreColor" ? "Text Color" : "Highlight Color", d = r === "foreColor" ? /* @__PURE__ */ e.jsx(bt, { size: 26 }) : /* @__PURE__ */ e.jsx(gt, { size: 26 });
  return /* @__PURE__ */ e.jsx(he, { title: s, icon: d, children: /* @__PURE__ */ e.jsx("div", { className: "modern-color-picker", children: Jr.map((m) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "modern-color-swatch",
      style: { backgroundColor: m },
      onClick: () => a(r, m),
      "aria-label": m
    },
    m
  )) }) });
};
pt.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired
};
const Zr = [
  "💻",
  "🖥️",
  "🖱️",
  "⌨️",
  "🖨️",
  "📱",
  "📲",
  "🕹️",
  "🧑‍💻",
  "👨‍💻",
  "👩‍💻",
  "🔧",
  "🔨",
  "⚙️",
  "🧰",
  "📡",
  "🌐",
  "🔌",
  "💾",
  "📂",
  "📁",
  "🗂️",
  "📝",
  "📊",
  "📈",
  "📉",
  "🔒",
  "🔓",
  "🛡️",
  "🐞",
  "⚡",
  "🚀",
  "🧪",
  "💡",
  "🤖",
  "🧩",
  "🧬",
  "🛠️",
  "📧",
  "🔍",
  "📥",
  "📤"
], er = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(he, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(ht, { size: 26 }), children: /* @__PURE__ */ e.jsx("div", { className: "modern-emoji-picker", children: Zr.map((a) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "modern-emoji",
    onClick: () => r("insertText", a),
    children: a
  },
  a
)) }) });
er.propTypes = {
  applyStyle: o.func.isRequired
};
const Qr = () => /* @__PURE__ */ e.jsx("style", { children: `
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
    ` }), eo = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], to = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, ro = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, oo = { Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" }, tr = ({
  applyStyle: r,
  applyLineHeight: a,
  activeStyles: s,
  onOpenLinkModal: d,
  onImageUpload: m,
  onDocxUpload: x,
  onVideoModalOpen: f,
  onTableModalOpen: c,
  onAiRefactor: h,
  content: E,
  isGenerating: k,
  isAiLoadingMinimized: L
}) => {
  const A = K(null), q = K(null);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Qr, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "modern-toolbar", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Undo (Ctrl+Z)",
            onClick: () => r("undo"),
            children: /* @__PURE__ */ e.jsx(jt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Redo (Ctrl+Y)",
            onClick: () => r("redo"),
            children: /* @__PURE__ */ e.jsx(vt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(he, { title: "Headings", icon: /* @__PURE__ */ e.jsx(Qe, { size: 26 }), children: Object.entries(ro).map(([p, z]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("formatBlock", z),
            children: p
          },
          p
        )) }),
        /* @__PURE__ */ e.jsx(he, { title: "Font Family", icon: /* @__PURE__ */ e.jsx(Be, { size: 26 }), children: eo.map((p) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            style: { fontFamily: p },
            onClick: () => r("fontName", p),
            children: p
          },
          p
        )) }),
        /* @__PURE__ */ e.jsx(he, { title: "Font Size", icon: /* @__PURE__ */ e.jsx(Be, { size: 14 }), children: Object.entries(to).map(([p, z]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("fontSize", z),
            children: p
          },
          p
        )) }),
        /* @__PURE__ */ e.jsxs(he, { title: "Line Height", icon: /* @__PURE__ */ e.jsx(Ct, { size: 26 }), children: [
          Object.entries(oo).map(([p, z]) => /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "modern-dropdown-item",
              onClick: () => a(z),
              children: p
            },
            p
          )),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "modern-dropdown-item-remove-line-height",
              onClick: () => a("normal"),
              children: "Remove"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Bold (Ctrl+B)",
            command: "bold",
            activeStyles: s,
            onClick: () => r("bold"),
            children: /* @__PURE__ */ e.jsx(kt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Italic (Ctrl+I)",
            command: "italic",
            activeStyles: s,
            onClick: () => r("italic"),
            children: /* @__PURE__ */ e.jsx(yt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Underline (Ctrl+U)",
            command: "underline",
            activeStyles: s,
            onClick: () => r("underline"),
            children: /* @__PURE__ */ e.jsx(wt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Strikethrough",
            command: "strikeThrough",
            activeStyles: s,
            onClick: () => r("strikeThrough"),
            children: /* @__PURE__ */ e.jsx(Rt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Superscript",
            command: "superscript",
            activeStyles: s,
            onClick: () => r("superscript"),
            children: /* @__PURE__ */ e.jsx(Ft, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Subscript",
            command: "subscript",
            activeStyles: s,
            onClick: () => r("subscript"),
            children: /* @__PURE__ */ e.jsx(Nt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(er, { applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(pt, { command: "foreColor", applyStyle: r }),
        /* @__PURE__ */ e.jsx(pt, { command: "backColor", applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Align Left",
            command: "justifyLeft",
            activeStyles: s,
            onClick: () => r("justifyLeft"),
            children: /* @__PURE__ */ e.jsx(Tt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Align Center",
            command: "justifyCenter",
            activeStyles: s,
            onClick: () => r("justifyCenter"),
            children: /* @__PURE__ */ e.jsx(Et, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Align Right",
            command: "justifyRight",
            activeStyles: s,
            onClick: () => r("justifyRight"),
            children: /* @__PURE__ */ e.jsx(zt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Ordered List",
            command: "insertOrderedList",
            activeStyles: s,
            onClick: () => r("insertOrderedList"),
            children: /* @__PURE__ */ e.jsx(Ot, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Unordered List",
            command: "insertUnorderedList",
            activeStyles: s,
            onClick: () => r("insertUnorderedList"),
            children: /* @__PURE__ */ e.jsx(St, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Outdent",
            onClick: () => r("outdent"),
            children: /* @__PURE__ */ e.jsx(It, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Indent",
            onClick: () => r("indent"),
            children: /* @__PURE__ */ e.jsx(Lt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Blockquote",
            onClick: () => r("formatBlock", "<blockquote>"),
            children: /* @__PURE__ */ e.jsx(At, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Code Block",
            onClick: () => r("formatBlock", "<pre>"),
            children: /* @__PURE__ */ e.jsx(_t, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Add/Edit Link (Ctrl+K)",
            onClick: d,
            children: /* @__PURE__ */ e.jsx(Pe, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Horizontal Line",
            onClick: () => r("insertHorizontalRule"),
            children: /* @__PURE__ */ e.jsx(Dt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Insert Image",
            onClick: () => {
              var p;
              return (p = A.current) == null ? void 0 : p.click();
            },
            children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(N, { title: "Insert Video", onClick: f, children: /* @__PURE__ */ e.jsx(et, { size: 20 }) }),
        /* @__PURE__ */ e.jsx(N, { title: "Insert Table", onClick: c, children: /* @__PURE__ */ e.jsx(tt, { size: 18 }) }),
        /* @__PURE__ */ e.jsx(
          N,
          {
            title: "Import from Word (.docx)",
            onClick: () => {
              var p;
              return (p = q.current) == null ? void 0 : p.click();
            },
            children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-group", children: /* @__PURE__ */ e.jsx(
        N,
        {
          title: "Clear Formatting",
          onClick: () => r("removeFormat"),
          children: /* @__PURE__ */ e.jsx(qt, { size: 18, style: { color: "red" } })
        }
      ) }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-group", children: /* @__PURE__ */ e.jsx(
        N,
        {
          title: "Improve with AI",
          onClick: h,
          disabled: !E || E === "" || k,
          className: "modern-ai-button",
          children: k && !L ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(He, { size: 20 })
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: A,
        onChange: m,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: q,
        onChange: x,
        style: { display: "none" }
      }
    )
  ] });
};
tr.propTypes = {
  applyStyle: o.func.isRequired,
  applyLineHeight: o.func.isRequired,
  activeStyles: o.object.isRequired,
  onOpenLinkModal: o.func.isRequired,
  onImageUpload: o.func.isRequired,
  onDocxUpload: o.func.isRequired,
  onVideoModalOpen: o.func.isRequired,
  onTableModalOpen: o.func.isRequired,
  onAiRefactor: o.func.isRequired,
  content: o.string,
  isGenerating: o.bool.isRequired,
  isAiLoadingMinimized: o.bool.isRequired
};
const T = ze.memo(
  ({
    onClick: r,
    title: a,
    cmd: s,
    active: d,
    disabled: m = !1,
    children: x,
    className: f = ""
  }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
      
      

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



      
      ` }),
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: r,
        onMouseDown: (c) => c.preventDefault(),
        className: `futuristic-button ${d && d.has(s) ? "active" : ""} ${f}`,
        title: a,
        disabled: m,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "button-content", children: x }),
          /* @__PURE__ */ e.jsx("span", { className: "futuristic-forma-text-tooltip", children: a })
        ]
      }
    )
  ] })
);
T.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  cmd: o.string,
  active: o.object,
  disabled: o.bool,
  children: o.node.isRequired,
  className: o.string
};
T.displayName = "FuturisticToolbarButton";
const je = ({ title: r, icon: a, children: s }) => {
  const [d, m] = w(!1), x = K(null);
  return se(() => {
    const f = (c) => {
      x.current && !x.current.contains(c.target) && m(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "futuristic-dropdown", ref: x, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        title: r,
        onClick: () => m(!d),
        onMouseDown: (f) => f.preventDefault(),
        className: "futuristic-button",
        "aria-expanded": d,
        children: /* @__PURE__ */ e.jsxs("span", { className: "button-content", children: [
          a,
          /* @__PURE__ */ e.jsx(
            Jt,
            {
              size: 16,
              className: `chevron-icon ${d ? "open" : ""}`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `futuristic-dropdown-menu ${d ? "show" : ""}`,
        onClick: () => m(!1),
        children: s
      }
    )
  ] });
};
je.propTypes = {
  title: o.string.isRequired,
  icon: o.node.isRequired,
  children: o.node.isRequired
};
const no = [
  "#000000",
  "#222222",
  "#444444",
  "#666666",
  "#888888",
  "#999999",
  "#BBBBBB",
  "#CCCCCC",
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF",
  "#FF0000",
  "#CC0000",
  "#990000",
  "#660000",
  "#FF6666",
  "#FF9900",
  "#FF6600",
  "#CC6600",
  "#FFB84D",
  "#FFFF00",
  "#FFEE00",
  "#CCCC00",
  "#999900",
  "#00FF00",
  "#00CC00",
  "#009900",
  "#66FF66",
  "#33CC33",
  "#00FFFF",
  "#00CCCC",
  "#009999",
  "#66FFFF",
  "#0000FF",
  "#0000CC",
  "#000099",
  "#6666FF",
  "#3366FF",
  "#9900FF",
  "#6600CC",
  "#9933FF",
  "#CC99FF",
  "#FF00FF",
  "#CC00CC",
  "#FF66FF",
  "#FF99FF"
], xt = ({ command: r, applyStyle: a }) => {
  const s = r === "foreColor" ? "Text Color" : "Highlight Color", d = r === "foreColor" ? /* @__PURE__ */ e.jsx(bt, { size: 18 }) : /* @__PURE__ */ e.jsx(gt, { size: 18 });
  return /* @__PURE__ */ e.jsx(je, { title: s, icon: d, children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-color-picker", children: no.map((m) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "color-swatch-hexagon",
      onClick: () => a(r, m),
      "aria-label": m,
      children: /* @__PURE__ */ e.jsx("div", { className: "hexagon-inner", style: { backgroundColor: m } })
    },
    m
  )) }) });
};
xt.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired
};
const io = [
  "💻",
  "🖥️",
  "🖱️",
  "⌨️",
  "🖨️",
  "📱",
  "📲",
  "🕹️",
  "🧑‍💻",
  "👨‍💻",
  "👩‍💻",
  "🔧",
  "🔨",
  "⚙️",
  "🧰",
  "📡",
  "🌐",
  "🔌",
  "💾",
  "📂",
  "📁",
  "🗂️",
  "📝",
  "📊",
  "📈",
  "📉",
  "🔒",
  "🔓",
  "🛡️",
  "🐞",
  "⚡",
  "🚀",
  "🧪",
  "💡",
  "🤖",
  "🧩",
  "🧬",
  "🛠️",
  "📧",
  "🔍",
  "📥",
  "📤"
], rr = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(je, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(ht, { size: 18 }), children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-emoji-picker", children: io.map((a) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "futuristic-emoji",
    onClick: () => r("insertText", a),
    children: a
  },
  a
)) }) });
rr.propTypes = {
  applyStyle: o.func.isRequired
};
const ao = () => /* @__PURE__ */ e.jsx("style", { children: `
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

      ` }), so = ["Arial", "Georgia", "Verdana", "Courier New"], lo = { H1: "<h1>", H2: "<h2>", H3: "<h3>", Paragraph: "<p>" }, co = { Single: "1", 1.5: "1.5", Double: "2" }, uo = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, or = ({
  applyStyle: r,
  applyLineHeight: a,
  activeStyles: s,
  onOpenLinkModal: d,
  onImageUpload: m,
  onDocxUpload: x,
  onVideoModalOpen: f,
  onTableModalOpen: c,
  onAiRefactor: h,
  content: E,
  isGenerating: k,
  isAiLoadingMinimized: L
}) => {
  const A = K(null), q = K(null), p = K(null), [z, B] = w({ x: 50, y: 50 }), [$, O] = w(!1), J = K({ x: 0, y: 0 }), le = (v) => {
    v.button === 0 && (O(!0), J.current = {
      x: v.clientX - z.x,
      y: v.clientY - z.y
    }, v.preventDefault());
  };
  return se(() => {
    const v = (de) => {
      $ && B({
        x: de.clientX - J.current.x,
        y: de.clientY - J.current.y
      });
    }, H = () => O(!1);
    return window.addEventListener("mousemove", v), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", H);
    };
  }, [$]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(ao, {}),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
        className: "futuristic-toolbar ",
        style: { top: `${z.y}px`, left: `${z.x}px` },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "drag-handle",
              onMouseDown: le,
              title: "Drag Toolbar",
              children: /* @__PURE__ */ e.jsx(zr, { size: 20 })
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "toolbar-content", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Undo",
                  onClick: () => r("undo"),
                  children: /* @__PURE__ */ e.jsx(jt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Redo",
                  onClick: () => r("redo"),
                  children: /* @__PURE__ */ e.jsx(vt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(je, { title: "Headings", icon: /* @__PURE__ */ e.jsx(Qe, { size: 18 }), children: Object.entries(lo).map(([v, H]) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "futuristic-dropdown-item",
                  onClick: () => r("formatBlock", H),
                  children: v
                },
                v
              )) }),
              /* @__PURE__ */ e.jsx(je, { title: "Font", icon: /* @__PURE__ */ e.jsx(Be, { size: 18 }), children: so.map((v) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "futuristic-dropdown-item",
                  style: { fontFamily: v },
                  onClick: () => r("fontName", v),
                  children: v
                },
                v
              )) }),
              /* @__PURE__ */ e.jsx(je, { title: "Font Size", icon: /* @__PURE__ */ e.jsx(Be, { size: 14 }), children: Object.entries(uo).map(([v, H]) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "forma-text-dropdown-item",
                  onClick: () => r("fontSize", H),
                  children: v
                },
                v
              )) }),
              /* @__PURE__ */ e.jsx(
                je,
                {
                  title: "Line Height",
                  icon: /* @__PURE__ */ e.jsx(Ct, { size: 18 }),
                  children: Object.entries(co).map(([v, H]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => a(H),
                      children: v
                    },
                    v
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Bold",
                  cmd: "bold",
                  active: s,
                  onClick: () => r("bold"),
                  children: /* @__PURE__ */ e.jsx(kt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Italic",
                  cmd: "italic",
                  active: s,
                  onClick: () => r("italic"),
                  children: /* @__PURE__ */ e.jsx(yt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Underline",
                  cmd: "underline",
                  active: s,
                  onClick: () => r("underline"),
                  children: /* @__PURE__ */ e.jsx(wt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Strikethrough",
                  cmd: "strikeThrough",
                  active: s,
                  onClick: () => r("strikeThrough"),
                  children: /* @__PURE__ */ e.jsx(Rt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Superscript",
                  cmd: "superscript",
                  active: s,
                  onClick: () => r("superscript"),
                  children: /* @__PURE__ */ e.jsx(Ft, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Subscript",
                  cmd: "subscript",
                  active: s,
                  onClick: () => r("subscript"),
                  children: /* @__PURE__ */ e.jsx(Nt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                xt,
                {
                  command: "foreColor",
                  applyStyle: r
                }
              ),
              /* @__PURE__ */ e.jsx(
                xt,
                {
                  command: "backColor",
                  applyStyle: r
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Align Left",
                  cmd: "justifyLeft",
                  active: s,
                  onClick: () => r("justifyLeft"),
                  children: /* @__PURE__ */ e.jsx(Tt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Align Center",
                  cmd: "justifyCenter",
                  active: s,
                  onClick: () => r("justifyCenter"),
                  children: /* @__PURE__ */ e.jsx(Et, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Align Right",
                  cmd: "justifyRight",
                  active: s,
                  onClick: () => r("justifyRight"),
                  children: /* @__PURE__ */ e.jsx(zt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Ordered List",
                  cmd: "insertOrderedList",
                  active: s,
                  onClick: () => r("insertOrderedList"),
                  children: /* @__PURE__ */ e.jsx(Ot, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Unordered List",
                  cmd: "insertUnorderedList",
                  active: s,
                  onClick: () => r("insertUnorderedList"),
                  children: /* @__PURE__ */ e.jsx(St, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Outdent",
                  onClick: () => r("outdent"),
                  children: /* @__PURE__ */ e.jsx(It, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Indent",
                  onClick: () => r("indent"),
                  children: /* @__PURE__ */ e.jsx(Lt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Add/Edit Link",
                  onClick: d,
                  children: /* @__PURE__ */ e.jsx(Pe, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Blockquote",
                  onClick: () => r("formatBlock", "<blockquote>"),
                  children: /* @__PURE__ */ e.jsx(At, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Code Block",
                  onClick: () => r("formatBlock", "<pre>"),
                  children: /* @__PURE__ */ e.jsx(_t, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Horizontal Line",
                  onClick: () => r("insertHorizontalRule"),
                  children: /* @__PURE__ */ e.jsx(Dt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Insert Image",
                  onClick: () => {
                    var v;
                    return (v = A.current) == null ? void 0 : v.click();
                  },
                  children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Insert Video",
                  onClick: f,
                  children: /* @__PURE__ */ e.jsx(et, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Insert Table",
                  onClick: c,
                  children: /* @__PURE__ */ e.jsx(tt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Import from Word",
                  onClick: () => {
                    var v;
                    return (v = q.current) == null ? void 0 : v.click();
                  },
                  children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(rr, { applyStyle: r })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Improve with AI",
                  onClick: h,
                  disabled: !E || k,
                  className: "ai-button",
                  children: k ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(He, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  title: "Clear Formatting",
                  onClick: () => r("removeFormat"),
                  children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: A,
        onChange: m,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: q,
        onChange: x,
        style: { display: "none" }
      }
    )
  ] });
};
or.propTypes = {
  applyStyle: o.func.isRequired,
  activeStyles: o.object.isRequired,
  applyLineHeight: o.func.isRequired,
  onOpenLinkModal: o.func.isRequired,
  onImageUpload: o.func.isRequired,
  onDocxUpload: o.func.isRequired,
  onVideoModalOpen: o.func.isRequired,
  onTableModalOpen: o.func.isRequired,
  onAiRefactor: o.func.isRequired,
  content: o.string,
  isGenerating: o.bool.isRequired,
  isAiLoadingMinimized: o.bool.isRequired
};
const nr = ({ theme: r, ...a }) => r === "modern" ? /* @__PURE__ */ e.jsx(tr, { ...a }) : r === "futuristic" ? /* @__PURE__ */ e.jsx(or, { ...a }) : /* @__PURE__ */ e.jsx(Qt, { ...a });
nr.propTypes = {
  theme: o.oneOf(["classic", "modern", "futuristic"])
};
const mo = () => /* @__PURE__ */ e.jsx("style", { children: `
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
          ` }), ir = ({
  editorRef: r,
  content: a,
  showSource: s,
  onContentChange: d,
  onKeyDown: m,
  textContentClass: x
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(mo, {}),
  s ? /* @__PURE__ */ e.jsx(
    "textarea",
    {
      value: a || "",
      onChange: d,
      className: "forma-text-source-view"
    }
  ) : /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: r,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      className: `forma-text-editor-content ${x}`,
      onInput: d,
      onKeyDown: m
    }
  )
] });
ir.propTypes = {
  editorRef: o.object.isRequired,
  content: o.string,
  showSource: o.bool.isRequired,
  onContentChange: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  textContentClass: o.string
};
const fo = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), Ue = ({ children: r, onClose: a, title: s, icon: d, size: m = "500px" }) => {
  const x = {
    "--forma-text-modal-width": m
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(fo, {}),
    /* @__PURE__ */ e.jsx("div", { className: "forma-text-modal-overlay", onClick: a, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "forma-text-modal-dialog",
        style: x,
        onClick: (f) => f.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-modal-header", children: [
            /* @__PURE__ */ e.jsxs("h5", { className: "forma-text-modal-title", children: [
              d,
              s
            ] }),
            /* @__PURE__ */ e.jsx("button", { className: "forma-text-modal-close-button", onClick: a, children: "×" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "forma-text-modal-content", children: r })
        ]
      }
    ) })
  ] });
};
Ue.propTypes = {
  children: o.node.isRequired,
  onClose: o.func.isRequired,
  title: o.string.isRequired,
  icon: o.node,
  size: o.string
};
const po = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), ar = ({ isOpen: r, onClose: a, onApply: s, initialData: d, isEditing: m }) => {
  const [x, f] = w({ text: "", href: "" });
  return se(() => {
    r && f(d);
  }, [r, d]), r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(po, {}),
    /* @__PURE__ */ e.jsxs(
      Ue,
      {
        onClose: a,
        title: m ? "Edit Link" : "Add Link",
        icon: /* @__PURE__ */ e.jsx(Pe, { size: 20 }),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-link-modal-body", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-link-form-group", children: [
              /* @__PURE__ */ e.jsx("label", { className: "forma-text-link-label", children: "Link Text" }),
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-link-input-group", children: [
                /* @__PURE__ */ e.jsx("span", { className: "forma-text-link-input-icon", children: /* @__PURE__ */ e.jsx(Qe, { size: 16 }) }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    className: "forma-text-link-input",
                    value: x.text,
                    onChange: (c) => f({ ...x, text: c.target.value })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-link-form-group", children: [
              /* @__PURE__ */ e.jsx("label", { className: "forma-text-link-label", children: "Link URL" }),
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-link-input-group", children: [
                /* @__PURE__ */ e.jsx("span", { className: "forma-text-link-input-icon", children: /* @__PURE__ */ e.jsx(Or, { size: 16 }) }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "url",
                    className: "forma-text-link-input",
                    value: x.href,
                    onChange: (c) => f({ ...x, href: c.target.value }),
                    placeholder: "https://example.com",
                    autoFocus: !0
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-link-modal-footer", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-link-button forma-text-link-button--secondary",
                onClick: a,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-link-button forma-text-link-button--primary",
                onClick: () => s(x),
                children: "Apply Link"
              }
            )
          ] })
        ]
      }
    )
  ] }) : null;
};
ar.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onApply: o.func.isRequired,
  initialData: o.shape({
    text: o.string,
    href: o.string
  }).isRequired,
  isEditing: o.bool.isRequired
};
const xo = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), sr = ({ isOpen: r, onClose: a, onInsert: s }) => {
  const [d, m] = w(""), x = () => {
    s(d), m("");
  };
  return r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(xo, {}),
    /* @__PURE__ */ e.jsxs(
      Ue,
      {
        onClose: a,
        title: "Insert Video",
        icon: /* @__PURE__ */ e.jsx(et, { size: 20 }),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-video-modal-body", children: [
            /* @__PURE__ */ e.jsx("label", { className: "forma-text-video-label", children: "Video URL" }),
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-video-input-group", children: [
              /* @__PURE__ */ e.jsx("span", { className: "forma-text-video-input-icon", children: /* @__PURE__ */ e.jsx(Pe, { size: 16 }) }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "url",
                  className: "forma-text-video-input",
                  value: d,
                  onChange: (f) => m(f.target.value),
                  placeholder: "e.g., https://www.youtube.com/watch?v=...",
                  autoFocus: !0
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "forma-text-video-form-text", children: "Supports YouTube and Vimeo links." })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-video-modal-footer", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-video-button forma-text-video-button--secondary",
                onClick: a,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-video-button forma-text-video-button--primary",
                onClick: x,
                children: "Insert Video"
              }
            )
          ] })
        ]
      }
    )
  ] }) : null;
};
sr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onInsert: o.func.isRequired
};
const bo = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), lr = ({ isOpen: r, onClose: a, onCreate: s }) => {
  const [d, m] = w({ rows: 3, cols: 3 });
  return r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(bo, {}),
    /* @__PURE__ */ e.jsxs(
      Ue,
      {
        onClose: a,
        title: "Create Table",
        icon: /* @__PURE__ */ e.jsx(tt, { size: 20 }),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-table-modal-body", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-table-form-group", children: [
              /* @__PURE__ */ e.jsx("label", { className: "forma-text-table-label", children: "Rows" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  className: "forma-text-table-input",
                  value: d.rows,
                  min: "1",
                  onChange: (x) => m({
                    ...d,
                    rows: parseInt(x.target.value, 10) || 1
                  })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-table-form-group", children: [
              /* @__PURE__ */ e.jsx("label", { className: "forma-text-table-label", children: "Columns" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  className: "forma-text-table-input",
                  value: d.cols,
                  min: "1",
                  onChange: (x) => m({
                    ...d,
                    cols: parseInt(x.target.value, 10) || 1
                  })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-table-modal-footer", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-table-button forma-text-table-button--secondary",
                onClick: a,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-table-button forma-text-table-button--primary",
                onClick: () => s(d),
                children: "Create"
              }
            )
          ] })
        ]
      }
    )
  ] }) : null;
};
lr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onCreate: o.func.isRequired
};
const go = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), dr = ({ status: r, isMinimized: a, onMinimizeToggle: s }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(go, {}),
  a ? /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-popup-minimized", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "forma-text-spinner forma-text-spinner--sm forma-text-icon--primary",
        role: "status"
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "forma-text-minimized-text", children: "AI is working..." }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: s,
        className: "forma-text-ai-popup-btn forma-text-ai-popup-btn--auto-margin",
        children: /* @__PURE__ */ e.jsx(Sr, { size: 14 })
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-popup", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-popup-header", children: [
      /* @__PURE__ */ e.jsxs("h6", { className: "forma-text-ai-popup-title", children: [
        /* @__PURE__ */ e.jsx(He, { size: 18, className: "forma-text-icon--primary" }),
        "AI Assistant"
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: s,
          className: "forma-text-ai-popup-btn",
          children: /* @__PURE__ */ e.jsx(rt, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-popup-body", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "forma-text-spinner forma-text-icon--primary",
          role: "status"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { className: "forma-text-popup-text-main", children: "Working on it..." }),
        /* @__PURE__ */ e.jsx("p", { className: "forma-text-popup-text-status", children: r })
      ] })
    ] })
  ] })
] });
dr.propTypes = {
  status: o.string.isRequired,
  isMinimized: o.bool.isRequired,
  onMinimizeToggle: o.func.isRequired
};
const ho = () => /* @__PURE__ */ e.jsx("style", { children: `
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
      ` }), cr = ({
  isOpen: r,
  onClose: a,
  onApply: s,
  originalContent: d,
  suggestion: m,
  highlightedDiff: x
}) => {
  const [f, c] = w("preview");
  if (!r) return null;
  const h = (E) => {
    let k = "forma-text-ai-modal-tab-button";
    return f === E && (k += " forma-text-ai-modal-tab-button--active"), k;
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(ho, {}),
    /* @__PURE__ */ e.jsxs(
      Ue,
      {
        onClose: a,
        title: "AI Content Suggestion",
        icon: /* @__PURE__ */ e.jsx(He, { size: 20 }),
        size: "1200px",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-body", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-tab-container", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: h("preview"),
                  onClick: () => c("preview"),
                  children: "Preview Changes"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: h("diff"),
                  onClick: () => c("diff"),
                  children: "Highlight Changes"
                }
              )
            ] }),
            f === "preview" && /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-tab-content", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-pane", children: [
                /* @__PURE__ */ e.jsx("h6", { className: "forma-text-ai-modal-pane-title", children: "Original Content" }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "forma-text-ai-modal-preview-pane",
                    dangerouslySetInnerHTML: { __html: d }
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-pane", children: [
                /* @__PURE__ */ e.jsx("h6", { className: "forma-text-ai-modal-pane-title forma-text-ai-modal-pane-title--suggestion", children: "AI Suggestion" }),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "forma-text-ai-modal-preview-pane",
                    dangerouslySetInnerHTML: { __html: m }
                  }
                )
              ] })
            ] }),
            f === "diff" && /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("h6", { className: "forma-text-ai-modal-pane-title forma-text-ai-modal-pane-title--diff", children: "Highlighted Differences" }),
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-diff-legend", children: [
                /* @__PURE__ */ e.jsx("span", { className: "forma-text-ai-modal-legend-added", children: "Added content" }),
                /* @__PURE__ */ e.jsx("span", { className: "forma-text-ai-modal-legend-removed", children: "Removed content" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "forma-text-ai-modal-preview-pane",
                  dangerouslySetInnerHTML: { __html: x }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "forma-text-ai-modal-footer", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-ai-modal-button forma-text-ai-modal-button--secondary",
                onClick: a,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "forma-text-ai-modal-button forma-text-ai-modal-button--primary",
                onClick: s,
                children: "Apply Suggestion"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
cr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onApply: o.func.isRequired,
  originalContent: o.string,
  suggestion: o.string,
  highlightedDiff: o.string
};
const Ze = ze.memo(
  ({ onClick: r, title: a, command: s, activeStyles: d, disabled: m = !1, children: x }) => {
    const f = {
      color: "#fff",
      backgroundColor: "#6c757d",
      borderColor: "#6c757d"
    }, c = d && d.has(s) ? f : {};
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("style", { children: `
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
        ` }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: r,
          onMouseDown: (h) => h.preventDefault(),
          className: "forma-text-statusbar-button",
          title: a,
          disabled: m,
          style: c,
          children: x
        }
      )
    ] });
  }
);
Ze.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  command: o.string,
  activeStyles: o.object,
  disabled: o.bool,
  children: o.node.isRequired
};
Ze.displayName = "FormaTextStatusbarButton";
const ur = ({
  wordCount: r,
  charCount: a,
  onToggleSource: s,
  isFullScreen: d,
  onToggleFullScreen: m
}) => {
  const x = {
    flexShrink: 0,
    padding: "0.5rem",
    borderTop: "1px solid #dee2e6",
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.875em",
    color: "#6c757d"
  }, f = {
    fontSize: "14px",
    fontWeight: 600
  }, c = {
    margin: "0 0.5rem"
  }, h = {
    display: "inline-flex",
    verticalAlign: "middle",
    gap: "4px"
    // Adds space between buttons
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "forma-text-classic-statusbar", style: x, children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsxs(
        "span",
        {
          className: "forma-text-footer-text-areas",
          style: f,
          children: [
            "Words: ",
            r
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("span", { style: c, children: "|" }),
      /* @__PURE__ */ e.jsxs("span", { className: "forma-text-footer-text-area", style: f, children: [
        "Characters: ",
        a
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-btn-group", style: h, children: [
      /* @__PURE__ */ e.jsx(Ze, { title: "View HTML Source", onClick: s, children: /* @__PURE__ */ e.jsx(Pt, { size: 16 }) }),
      /* @__PURE__ */ e.jsx(
        Ze,
        {
          title: d ? "Exit Full Screen" : "Full Screen",
          onClick: m,
          children: d ? /* @__PURE__ */ e.jsx(rt, { size: 16 }) : /* @__PURE__ */ e.jsx(Ht, { size: 16 })
        }
      )
    ] })
  ] }) });
};
ur.propTypes = {
  wordCount: o.number.isRequired,
  charCount: o.number.isRequired,
  onToggleSource: o.func.isRequired,
  showSource: o.bool.isRequired,
  onToggleFullScreen: o.func.isRequired,
  isFullScreen: o.bool.isRequired
};
const mr = ({
  wordCount: r,
  charCount: a,
  onToggleSource: s,
  isFullScreen: d,
  onToggleFullScreen: m
}) => {
  const [x, f] = w(!1);
  se(() => {
    const v = setTimeout(() => f(!0), 100);
    return () => clearTimeout(v);
  }, []);
  const c = "#00ffff", h = "rgba(138, 43, 226, 0.4)", k = {
    position: "fixed",
    bottom: "0px",
    left: "50%",
    width: "100%",
    zIndex: 1999,
    fontFamily: '"Orbitron", "Segoe UI", sans-serif',
    background: "rgba(15, 15, 25, 0.5)",
    backdropFilter: "blur(16px) saturate(200%)",
    color: "#e0e0e0",
    border: `1px solid ${h}`,
    overflow: "hidden",
    opacity: x ? 1 : 0,
    transform: x ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(20px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
  }, L = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(${c} 1px, transparent 1px), linear-gradient(to right, ${c} 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
    opacity: 0.05,
    animation: "forma-text-move-grid 20s linear infinite",
    zIndex: 1
  }, A = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 25px",
    zIndex: 2
  }, q = {
    position: "absolute",
    width: "20px",
    height: "20px",
    borderStyle: "solid",
    borderColor: c,
    opacity: x ? 0.5 : 0,
    transition: "opacity 1s ease 0.5s"
  }, p = {
    topLeft: {
      ...q,
      top: "-2px",
      left: "-2px",
      borderWidth: "2px 0 0 2px",
      borderRadius: "8px 0 0 0"
    },
    topRight: {
      ...q,
      top: "-2px",
      right: "-2px",
      borderWidth: "2px 2px 0 0",
      borderRadius: "0 8px 0 0"
    },
    bottomLeft: {
      ...q,
      bottom: "-2px",
      left: "-2px",
      borderWidth: "0 0 2px 2px",
      borderRadius: "0 0 0 8px"
    },
    bottomRight: {
      ...q,
      bottom: "-2px",
      right: "-2px",
      borderWidth: "0 2px 2px 0",
      borderRadius: "0 0 8px 0"
    }
  }, z = {
    display: "flex",
    alignItems: "center",
    gap: "24px"
  }, B = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#aab5c3"
  }, $ = {
    color: c,
    filter: `drop-shadow(0 0 3px ${c})`
  }, O = {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "1px",
    opacity: 0.6
  }, J = {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: "16px",
    fontWeight: 700,
    color: "white"
  }, le = {
    background: "transparent",
    border: "1px solid transparent",
    color: "#aab5c3",
    width: "36px",
    height: "36px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
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
          border: 1px solid ${h};
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
   ` }),
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-futuristic-statusbar", style: k, children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "forma-text-corner-bracket",
          style: p.topLeft
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "forma-text-corner-bracket",
          style: p.topRight
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "forma-text-corner-bracket",
          style: p.bottomLeft
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "forma-text-corner-bracket",
          style: p.bottomRight
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "forma-text-grid-background",
          style: L
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "forma-text-statusbar-content",
          style: A,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-status-group", style: z, children: [
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "forma-text-data-readout",
                  title: "Word Count",
                  style: B,
                  children: [
                    /* @__PURE__ */ e.jsx(Ir, { size: 16, style: $ }),
                    /* @__PURE__ */ e.jsx("span", { style: O, children: "WORDS" }),
                    /* @__PURE__ */ e.jsx("span", { style: J, children: r.toString().padStart(4, "0") })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "forma-text-data-readout",
                  title: "Character Count",
                  style: B,
                  children: [
                    /* @__PURE__ */ e.jsx(Lr, { size: 16, style: $ }),
                    /* @__PURE__ */ e.jsx("span", { style: O, children: "CHARS" }),
                    /* @__PURE__ */ e.jsx("span", { style: J, children: a.toString().padStart(5, "0") })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "forma-text-status-group", style: z, children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "forma-text-action-button",
                  title: "View HTML Source",
                  onClick: s,
                  style: le,
                  children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "forma-text-action-button",
                  title: d ? "Exit Full Screen" : "Full Screen",
                  onClick: m,
                  style: le,
                  children: d ? /* @__PURE__ */ e.jsx(rt, { size: 18 }) : /* @__PURE__ */ e.jsx(Ht, { size: 18 })
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
};
mr.propTypes = {
  wordCount: o.number.isRequired,
  charCount: o.number.isRequired,
  onToggleSource: o.func.isRequired,
  onToggleFullScreen: o.func.isRequired,
  isFullScreen: o.bool.isRequired
};
const fr = ({
  wordCount: r,
  charCount: a,
  onToggleSource: s,
  isFullScreen: d,
  onToggleFullScreen: m,
  theme: x = "light"
  // Receive the theme prop, default to 'light'
}) => {
  const f = {
    light: {
      barBg: "#f8f9fa",
      barBorder: "#e0e0e0",
      barColor: "#5f6368",
      btnHoverBg: "#f1f3f4",
      btnHoverColor: "#202124"
    },
    dark: {
      barBg: "#2c2d2f",
      barBorder: "#3c4043",
      barColor: "#bdc1c6",
      btnHoverBg: "#3c4043",
      btnHoverColor: "#e8eaed"
    }
  }, c = f[x] || f.light, h = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 16px",
    borderTop: `1px solid ${c.barBorder}`,
    backgroundColor: c.barBg,
    color: c.barColor,
    transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease"
  }, E = {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  }, k = {
    opacity: 0.5
  }, L = {
    background: "none",
    border: "none",
    borderRadius: "6px",
    padding: "6px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: c.barColor,
    // Inherit color from the bar
    transition: "background-color 0.2s ease, color 0.2s ease"
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
          .forma-text-statusbar-button:hover {
            background-color: ${c.btnHoverBg};
            color: ${c.btnHoverColor};
          }

          .forma-text-statusbar-item{
          font-size: 14px;
          font-weight: 800;
          font-style: italic;
          }
        ` }),
    /* @__PURE__ */ e.jsxs("div", { className: "forma-text-modern-statusbar", style: h, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-statusbar-segment", style: E, children: [
        /* @__PURE__ */ e.jsxs("span", { className: "forma-text-statusbar-item", children: [
          "Words: ",
          r
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "forma-text-statusbar-divider", style: k, children: "|" }),
        /* @__PURE__ */ e.jsxs("span", { className: "forma-text-statusbar-item", children: [
          "Characters: ",
          a
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-statusbar-segment", style: E, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "forma-text-statusbar-button",
            title: "View HTML Source",
            onClick: s,
            style: L,
            children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "forma-text-statusbar-button",
            title: d ? "Exit Full Screen" : "Full Screen",
            onClick: m,
            style: L,
            children: d ? /* @__PURE__ */ e.jsx(rt, { size: 18 }) : /* @__PURE__ */ e.jsx(Ht, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
};
fr.propTypes = {
  wordCount: o.number.isRequired,
  charCount: o.number.isRequired,
  onToggleSource: o.func.isRequired,
  onToggleFullScreen: o.func.isRequired,
  isFullScreen: o.bool.isRequired,
  theme: o.string
};
const pr = ({ theme: r, ...a }) => r === "modern" ? /* @__PURE__ */ e.jsx(fr, { ...a }) : r === "futuristic" ? /* @__PURE__ */ e.jsx(mr, { ...a }) : /* @__PURE__ */ e.jsx(ur, { ...a });
pr.propTypes = {
  theme: o.oneOf(["classic", "modern", "futuristic"])
};
const jo = () => /* @__PURE__ */ e.jsx("style", { children: `
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
` });
function vo({
  content: r = "",
  setContent: a = "",
  geminiApiKey: s = "",
  parentEditorClass: d = "",
  toolBarClass: m = "",
  textContentClass: x = "",
  theme: f = ""
}) {
  const c = K(null), h = K(null), E = K(!1), [k, L] = w(/* @__PURE__ */ new Set()), [A, q] = w({ words: 0, chars: 0 }), [p, z] = w(!1), [B, $] = w(!1), [O, J] = w(!1), [le, v] = w({ text: "", href: "" }), [H, de] = w(null), [ot, ve] = w(!1), [nt, Oe] = w(!1), [$e, X] = w(!1), [re, oe] = w(""), [Ve, Ce] = w(""), [ke, Se] = w(!1), [We, ye] = w(""), [we, Ie] = w(!1), [ce, Le] = w(null), [ue, me] = w(null), [Ae, _e] = w(0), ee = Y(() => {
    const i = window.getSelection();
    if (i.rangeCount > 0) {
      const l = i.getRangeAt(0);
      c.current && c.current.contains(l.commonAncestorContainer) && (h.current = l);
    }
  }, []), ne = Y(() => {
    if (h.current) {
      const i = window.getSelection();
      i.removeAllRanges(), i.addRange(h.current);
    }
  }, []), P = Y(() => {
    c.current && (E.current = !0, a(c.current.innerHTML));
  }, []), it = Y(
    (i) => {
      const l = p ? i.target.value : i.currentTarget.innerHTML;
      E.current = !0, a(l);
    },
    [p]
  ), Re = Y(() => {
    const i = /* @__PURE__ */ new Set();
    [
      "bold",
      "italic",
      "underline",
      "strikeThrough",
      "justifyLeft",
      "justifyCenter",
      "justifyRight",
      "insertOrderedList",
      "insertUnorderedList",
      "superscript",
      "subscript"
    ].forEach((b) => {
      document.queryCommandState(b) && i.add(b);
    }), L(i);
  }, []), U = Y(
    (i, l = null) => {
      var b;
      (b = c.current) == null || b.focus(), ne(), document.execCommand(i, !1, l), P(), Re();
    },
    [ne, P, Re]
  ), fe = Y(
    (i) => {
      var Z;
      (Z = c.current) == null || Z.focus(), ne();
      const l = window.getSelection();
      if (!l.rangeCount) return;
      const b = (_) => {
        let V = _.nodeType === Node.ELEMENT_NODE ? _ : _.parentNode;
        for (; V && V !== c.current; ) {
          if (window.getComputedStyle(V).display.match(/block|table|list-item/))
            return V;
          V = V.parentNode;
        }
        return null;
      }, I = l.getRangeAt(0), S = b(I.startContainer), ie = b(I.endContainer);
      if (S) {
        let _ = S;
        for (; _ && (_.style.lineHeight = i, _ !== ie); )
          _ = _.nextElementSibling;
      }
      P();
    },
    [ne, P]
  );
  se(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    c.current && !p && r !== c.current.innerHTML && (c.current.innerHTML = r || "");
  }, [r, p]), se(() => {
    const i = document.createElement("div");
    i.innerHTML = r || "";
    const l = i.textContent || "", b = l.trim().split(/\s+/).filter(Boolean).length;
    q({ words: b, chars: l.length });
  }, [r]);
  const Fe = Y(() => {
    const i = window.getSelection();
    if (i.rangeCount > 0) {
      const l = i.getRangeAt(0);
      c.current && c.current.contains(l.commonAncestorContainer) && (ee(), Re());
    }
  }, [ee, Re]);
  se(() => (document.addEventListener("selectionchange", Fe), () => document.removeEventListener("selectionchange", Fe)), [Fe]);
  const Ye = Y(
    (i) => {
      if (i.ctrlKey || i.metaKey) {
        const l = {
          b: "bold",
          i: "italic",
          u: "underline",
          k: () => pe(),
          z: "undo",
          y: "redo"
        };
        l[i.key] && (i.preventDefault(), typeof l[i.key] == "function" ? l[i.key]() : U(l[i.key]));
      }
    },
    [U]
  ), pe = Y(() => {
    var b;
    ee();
    const i = window.getSelection(), l = (b = i.anchorNode) == null ? void 0 : b.parentElement.closest("a");
    (l == null ? void 0 : l.tagName) === "A" ? (v({
      text: l.textContent,
      href: l.href
    }), de(l)) : (v({ text: i.toString(), href: "" }), de(null)), J(!0);
  }, [ee]), at = Y(
    (i) => {
      if (J(!1), ne(), c.current.focus(), H)
        H.href = i.href, H.textContent = i.text;
      else {
        const l = `<a href="${i.href}" target="_blank" rel="noopener noreferrer">${i.text}</a>`;
        U("insertHTML", l);
      }
      de(null), P();
    },
    [H, ne, U, P]
  ), st = Y(
    (i) => {
      const l = i.target.files[0];
      if (!l) return;
      const b = new FileReader();
      b.onload = (I) => {
        const S = `<span class="forma-text-image-wrapper" style="display: inline-block;"><img src="${I.target.result}" class="forma-text-img-fluid" style="max-width: 100%; height: auto; border-radius: 0.25rem; width: 250px;" /></span>`;
        U("insertHTML", S);
      }, b.readAsDataURL(l), i.target.value = "";
    },
    [U]
  ), De = Y((i) => {
    const l = i.target.files[0];
    if (!l) return;
    const b = new FileReader();
    b.onload = (I) => {
      Rr.convertToHtml({ arrayBuffer: I.target.result }).then((S) => a(S.value)).catch(
        (S) => console.error("Error converting .docx to HTML:", S)
      );
    }, b.readAsArrayBuffer(l), i.target.value = "";
  }, []), lt = (i) => {
    let l = "", b;
    return i.includes("youtube.com/watch?v=") ? (b = i.split("v=")[1].split("&")[0], l = `https://www.youtube.com/embed/${b}`) : i.includes("youtu.be/") ? (b = i.split("youtu.be/")[1].split("?")[0], l = `https://www.youtube.com/embed/${b}`) : i.includes("vimeo.com/") && (b = i.split("vimeo.com/")[1].split("?")[0], l = `https://player.vimeo.com/video/${b}`), l;
  }, dt = Y(
    (i) => {
      if (ve(!1), !i) return;
      const l = lt(i);
      if (!l) {
        console.warn(
          "Invalid video URL. Please use a valid YouTube or Vimeo link."
        );
        return;
      }
      ne(), c.current.focus();
      const b = `<div class="forma-text-video-wrapper"><iframe src="${l}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;
      U("insertHTML", b), P();
    },
    [ne, U, P]
  ), Ge = Y(
    (i) => {
      Oe(!1);
      let l = '<table class="forma-text-table" style="width: 100%; border-collapse: collapse; border: 1px solid #dee2e6;"><tbody>';
      for (let b = 0; b < i.rows; b++) {
        l += "<tr>";
        for (let I = 0; I < i.cols; I++)
          l += '<td style="border: 1px solid #dee2e6; padding: 0.75rem;"><br></td>';
        l += "</tr>";
      }
      l += "</tbody></table><p><br></p>", U("insertHTML", l);
    },
    [U]
  ), Ke = (i, l) => {
    const b = new Fr(), I = b.diff_main(i, l);
    b.diff_cleanupSemantic(I);
    let S = "";
    for (const [ie, Z] of I) {
      const _ = Z.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/\n/g, "¶<br>");
      switch (ie) {
        case Er:
          S += `<ins style="background-color: #d4edda; text-decoration: none;">${_}</ins>`;
          break;
        case Tr:
          S += `<del style="background-color: #f8d7da; text-decoration: none;">${_}</del>`;
          break;
        case Nr:
          S += `<span>${_}</span>`;
          break;
      }
    }
    return S;
  }, Xe = async () => {
    var S, ie, Z, _, V;
    if (!r || r === "" || ke) return;
    Se(!0), oe(""), Ie(!1);
    const i = [
      "Analyzing...",
      "Generating suggestions...",
      "Optimizing flow...",
      "Finalizing..."
    ];
    let l = 0;
    ye(i[l]);
    const b = setInterval(() => {
      l = (l + 1) % i.length, ye(i[l]);
    }, 2e3), I = `
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
`;
    try {
      const te = {
        contents: [{ role: "user", parts: [{ text: I }] }]
      }, ae = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${s}`, xe = await fetch(ae, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(te)
      });
      if (!xe.ok) throw new Error(`API call failed: ${xe.status}`);
      const Te = (V = (_ = (Z = (ie = (S = (await xe.json()).candidates) == null ? void 0 : S[0]) == null ? void 0 : ie.content) == null ? void 0 : Z.parts) == null ? void 0 : _[0]) == null ? void 0 : V.text;
      if (Te)
        oe(Te), Ce(Ke(r, Te)), X(!0);
      else
        throw new Error("Invalid AI response format");
    } catch (te) {
      console.error("Error calling Gemini API:", te), oe(`<p>Sorry, an error occurred. ${te.message}</p>`), Ce(`<p>Error: ${te.message}</p>`), X(!0);
    } finally {
      clearInterval(b), Se(!1), ye("");
    }
  }, ct = () => {
    a(re), X(!1), oe(""), Ce("");
  };
  se(() => {
    const i = c.current;
    if (!i) return;
    const l = (b) => {
      if (b.target.closest(".forma-text-delete-column-btn")) {
        b.target.closest(".forma-text-row").remove(), P();
        return;
      }
      const I = b.target.closest("img"), S = b.target.closest("table");
      Le(I), me(S), I && me(null), S && Le(null);
    };
    return i.addEventListener("click", l), () => i.removeEventListener("click", l);
  }, [P]);
  const Ne = (i, l) => {
    i && (i.style.display = "inline-block", i.style.margin = "0", i.style.float = "none", l === "center" ? (i.style.display = "block", i.style.margin = "0 auto") : l === "left" ? (i.style.float = "left", i.style.marginRight = "1rem", i.style.marginBottom = "1rem") : l === "right" && (i.style.float = "right", i.style.marginLeft = "1rem", i.style.marginBottom = "1rem"), P());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(jo, {}),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `forma-text-editor-container ${d}`,
        style: {
          display: "flex",
          flexDirection: "column",
          border: "1px solid #dee2e6",
          borderRadius: "0.375rem",
          boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
          position: B ? "fixed" : "relative",
          top: B ? 0 : "auto",
          left: B ? 0 : "auto",
          width: B ? "100%" : "auto",
          height: B ? "100%" : "auto",
          minHeight: B ? "100%" : "60vh",
          maxHeight: B ? "100%" : "95vh",
          backgroundColor: B ? "white" : "transparent",
          zIndex: B ? 1050 : "auto",
          overflowX: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `forma-text-toolbar-container ${m}`,
              style: {
                flexShrink: 0,
                borderBottom: "1px solid #dee2e6"
              },
              children: /* @__PURE__ */ e.jsx(
                nr,
                {
                  theme: f,
                  applyStyle: U,
                  applyLineHeight: fe,
                  activeStyles: k,
                  onOpenLinkModal: pe,
                  onImageUpload: st,
                  onDocxUpload: De,
                  onVideoModalOpen: () => {
                    ee(), ve(!0);
                  },
                  onTableModalOpen: () => {
                    ee(), Oe(!0);
                  },
                  onAiRefactor: Xe,
                  content: r,
                  isGenerating: ke,
                  isAiLoadingMinimized: we
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "forma-text-editor-area",
              style: {
                flexGrow: 1,
                overflow: "auto",
                position: "relative",
                paddingTop: "1rem"
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  ir,
                  {
                    editorRef: c,
                    content: r,
                    showSource: p,
                    onContentChange: it,
                    onKeyDown: Ye,
                    textContentClass: x
                  }
                ),
                ce && !p && (() => {
                  const i = c.current.getBoundingClientRect(), l = ce.getBoundingClientRect(), b = ce.parentElement;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "forma-text-image-wrapper forma-text-selected",
                      style: {
                        position: "absolute",
                        top: l.top - i.top + c.current.scrollTop,
                        left: l.left - i.left + c.current.scrollLeft,
                        width: l.width,
                        height: l.height,
                        pointerEvents: "none"
                      },
                      children: [
                        /* @__PURE__ */ e.jsxs(
                          "div",
                          {
                            className: "forma-text-image-toolbar",
                            style: { pointerEvents: "auto" },
                            children: [
                              /* @__PURE__ */ e.jsx(
                                "button",
                                {
                                  className: "forma-text-btn",
                                  style: {
                                    backgroundColor: "#212529",
                                    color: "white",
                                    border: "none",
                                    padding: "0.25rem 0.5rem",
                                    fontSize: "0.875rem",
                                    borderRadius: "0.25rem"
                                  },
                                  onClick: () => Ne(b, "left"),
                                  children: /* @__PURE__ */ e.jsx(Ar, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                "button",
                                {
                                  className: "forma-text-btn",
                                  style: {
                                    backgroundColor: "#212529",
                                    color: "white",
                                    border: "none",
                                    padding: "0.25rem 0.5rem",
                                    fontSize: "0.875rem",
                                    borderRadius: "0.25rem"
                                  },
                                  onClick: () => Ne(b, "center"),
                                  children: /* @__PURE__ */ e.jsx(_r, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                "button",
                                {
                                  className: "forma-text-btn",
                                  style: {
                                    backgroundColor: "#212529",
                                    color: "white",
                                    border: "none",
                                    padding: "0.25rem 0.5rem",
                                    fontSize: "0.875rem",
                                    borderRadius: "0.25rem"
                                  },
                                  onClick: () => Ne(b, "right"),
                                  children: /* @__PURE__ */ e.jsx(Dr, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                "button",
                                {
                                  className: "forma-text-btn",
                                  style: {
                                    backgroundColor: "#dc3545",
                                    color: "white",
                                    border: "none",
                                    padding: "0.25rem 0.5rem",
                                    fontSize: "0.875rem",
                                    borderRadius: "0.25rem"
                                  },
                                  onClick: () => {
                                    b.remove(), P(), Le(null);
                                  },
                                  children: /* @__PURE__ */ e.jsx(Gt, { size: 14 })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          "div",
                          {
                            className: "forma-text-resize-handle bottom-right",
                            style: { pointerEvents: "auto" },
                            onMouseDown: (I) => {
                              I.preventDefault();
                              const S = I.clientX, ie = ce.offsetWidth, Z = (V) => {
                                const te = ie + (V.clientX - S);
                                te > 20 && (ce.style.width = `${te}px`, ce.style.height = "auto", _e((ae) => ae + 1));
                              }, _ = () => {
                                document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", _), P();
                              };
                              document.addEventListener("mousemove", Z), document.addEventListener("mouseup", _);
                            }
                          }
                        )
                      ]
                    }
                  );
                })(),
                ue && !p && (() => {
                  const i = c.current.getBoundingClientRect(), l = ue.getBoundingClientRect();
                  return /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "forma-text-table-toolbar",
                      style: {
                        position: "absolute",
                        // Position the button slightly above the table's top edge
                        top: `${l.top - i.top + c.current.scrollTop - 15}px`,
                        // Position the button's left edge at the table's right edge
                        left: `${l.left - i.left + c.current.scrollLeft + l.width}px`,
                        // Then, pull the button back to the left by its own width to align it perfectly
                        transform: "translateX(-100%)",
                        pointerEvents: "auto"
                      },
                      children: /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          className: "forma-text-btn",
                          style: {
                            backgroundColor: "#dc3545",
                            color: "white",
                            border: "none",
                            padding: "0.4rem",
                            fontSize: "0.875rem",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0.25rem"
                          },
                          onClick: () => {
                            ue.remove(), P(), me(null);
                          },
                          children: /* @__PURE__ */ e.jsx(Gt, { size: 14 })
                        }
                      )
                    }
                  );
                })()
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            pr,
            {
              theme: f,
              wordCount: A.words,
              charCount: A.chars,
              onToggleSource: () => z(!p),
              showSource: p,
              onToggleFullScreen: () => $(!B),
              isFullScreen: B
            }
          ),
          ke && /* @__PURE__ */ e.jsx(
            dr,
            {
              status: We,
              isMinimized: we,
              onMinimizeToggle: () => Ie(!we)
            }
          ),
          /* @__PURE__ */ e.jsx(
            ar,
            {
              isOpen: O,
              onClose: () => J(!1),
              onApply: at,
              initialData: le,
              isEditing: !!H
            }
          ),
          /* @__PURE__ */ e.jsx(
            sr,
            {
              isOpen: ot,
              onClose: () => ve(!1),
              onInsert: dt
            }
          ),
          /* @__PURE__ */ e.jsx(
            lr,
            {
              isOpen: nt,
              onClose: () => Oe(!1),
              onCreate: Ge
            }
          ),
          /* @__PURE__ */ e.jsx(
            cr,
            {
              isOpen: $e,
              onClose: () => X(!1),
              onApply: ct,
              originalContent: r,
              suggestion: re,
              highlightedDiff: Ve
            }
          )
        ]
      }
    )
  ] });
}
vo.propTypes = {
  content: o.string,
  setContent: o.func,
  geminiApiKey: o.string,
  parentEditorClass: o.string,
  toolBarClass: o.string,
  textContentClass: o.string,
  theme: o.string
};
export {
  vo as default
};
//# sourceMappingURL=forma-text.js.map
