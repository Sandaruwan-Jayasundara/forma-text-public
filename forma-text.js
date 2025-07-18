import He, { useState as R, useRef as Q, useCallback as V, useEffect as J } from "react";
import o from "prop-types";
import Mr from "mammoth";
import { diff_match_patch as Pr, DIFF_EQUAL as qr, DIFF_DELETE as Br, DIFF_INSERT as Ur } from "diff-match-patch";
import { ChevronDown as _t, Palette as $t, Highlighter as Dt, Smile as Ht, Undo as Mt, Redo as Pt, Bold as qt, Italic as Bt, Underline as Ut, Strikethrough as Vt, Superscript as Yt, Subscript as Wt, AlignLeft as Kt, AlignCenter as Gt, AlignRight as Jt, ListOrdered as Xt, List as Zt, Outdent as Qt, Indent as er, Quote as tr, Code as rr, Link as rt, Minus as or, Eraser as nr, Image as ir, Video as vt, Table as jt, Columns as sr, FileUp as ar, Sparkles as ot, Pilcrow as xr, Type as Vr, ArrowDownUp as Yr, GripVertical as Wr, PinOff as Kr, Pin as Gr, ExternalLink as Jr, ChevronsDownUp as Xr, Minimize as Ct, CodeXml as lr, Maximize as cr, Sigma as Zr, Binary as Qr, Info as eo, AlignStartVertical as to, AlignCenterVertical as ro, AlignEndVertical as oo, Trash2 as no } from "lucide-react";
import hr from "react-dom";
import { jwtDecode as io } from "jwt-decode";
var St = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function so() {
  if (ur) return Xe;
  ur = 1;
  var n = He, r = Symbol.for("react.element"), l = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(j, u, q) {
    var C, k = {}, f = null, F = null;
    q !== void 0 && (f = "" + q), u.key !== void 0 && (f = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (C in u) i.call(u, C) && !x.hasOwnProperty(C) && (k[C] = u[C]);
    if (j && j.defaultProps) for (C in u = j.defaultProps, u) k[C] === void 0 && (k[C] = u[C]);
    return { $$typeof: r, type: j, key: f, ref: F, props: k, _owner: b.current };
  }
  return Xe.Fragment = l, Xe.jsx = g, Xe.jsxs = g, Xe;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function ao() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = He, r = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), j = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), T = Symbol.iterator, N = "@@iterator";
    function ee(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = T && t[T] || t[N];
      return typeof s == "function" ? s : null;
    }
    var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(t) {
      {
        for (var s = arguments.length, h = new Array(s > 1 ? s - 1 : 0), w = 1; w < s; w++)
          h[w - 1] = arguments[w];
        d("error", t, h);
      }
    }
    function d(t, s, h) {
      {
        var w = $.ReactDebugCurrentFrame, A = w.getStackAddendum();
        A !== "" && (s += "%s", h = h.concat([A]));
        var H = h.map(function(z) {
          return String(z);
        });
        H.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, H);
      }
    }
    var S = !1, _ = !1, Y = !1, te = !1, re = !1, v;
    v = Symbol.for("react.module.reference");
    function I(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === x || re || t === b || t === q || t === C || te || t === F || S || _ || Y || typeof t == "object" && t !== null && (t.$$typeof === f || t.$$typeof === k || t.$$typeof === g || t.$$typeof === j || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === v || t.getModuleId !== void 0));
    }
    function X(t, s, h) {
      var w = t.displayName;
      if (w)
        return w;
      var A = s.displayName || s.name || "";
      return A !== "" ? h + "(" + A + ")" : h;
    }
    function oe(t) {
      return t.displayName || "Context";
    }
    function W(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case l:
          return "Portal";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case q:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case j:
            var s = t;
            return oe(s) + ".Consumer";
          case g:
            var h = t;
            return oe(h._context) + ".Provider";
          case u:
            return X(t, t.render, "ForwardRef");
          case k:
            var w = t.displayName || null;
            return w !== null ? w : W(t.type) || "Memo";
          case f: {
            var A = t, H = A._payload, z = A._init;
            try {
              return W(z(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ie = 0, ve, Se, Le, nt, Re, Pe, Ie;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function qe() {
      {
        if (ie === 0) {
          ve = console.log, Se = console.info, Le = console.warn, nt = console.error, Re = console.group, Pe = console.groupCollapsed, Ie = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: it,
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
        ie++;
      }
    }
    function Be() {
      {
        if (ie--, ie === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, t, {
              value: ve
            }),
            info: K({}, t, {
              value: Se
            }),
            warn: K({}, t, {
              value: Le
            }),
            error: K({}, t, {
              value: nt
            }),
            group: K({}, t, {
              value: Re
            }),
            groupCollapsed: K({}, t, {
              value: Pe
            }),
            groupEnd: K({}, t, {
              value: Ie
            })
          });
        }
        ie < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = $.ReactCurrentDispatcher, Ue;
    function je(t, s, h) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (A) {
            var w = A.stack.trim().match(/\n( *(at )?)/);
            Ue = w && w[1] || "";
          }
        return `
` + Ue + t;
      }
    }
    var Te = !1, Ee;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new se();
    }
    function Ce(t, s) {
      if (!t || Te)
        return "";
      {
        var h = Ee.get(t);
        if (h !== void 0)
          return h;
      }
      var w;
      Te = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = Ae.current, Ae.current = null, qe();
      try {
        if (s) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (le) {
              w = le;
            }
            Reflect.construct(t, [], z);
          } else {
            try {
              z.call();
            } catch (le) {
              w = le;
            }
            t.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            w = le;
          }
          t();
        }
      } catch (le) {
        if (le && w && typeof le.stack == "string") {
          for (var E = le.stack.split(`
`), ae = w.stack.split(`
`), G = E.length - 1, Z = ae.length - 1; G >= 1 && Z >= 0 && E[G] !== ae[Z]; )
            Z--;
          for (; G >= 1 && Z >= 0; G--, Z--)
            if (E[G] !== ae[Z]) {
              if (G !== 1 || Z !== 1)
                do
                  if (G--, Z--, Z < 0 || E[G] !== ae[Z]) {
                    var pe = `
` + E[G].replace(" at new ", " at ");
                    return t.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", t.displayName)), typeof t == "function" && Ee.set(t, pe), pe;
                  }
                while (G >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        Te = !1, Ae.current = H, Be(), Error.prepareStackTrace = A;
      }
      var De = t ? t.displayName || t.name : "", ze = De ? je(De) : "";
      return typeof t == "function" && Ee.set(t, ze), ze;
    }
    function Ve(t, s, h) {
      return Ce(t, !1);
    }
    function Oe(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function fe(t, s, h) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ce(t, Oe(t));
      if (typeof t == "string")
        return je(t);
      switch (t) {
        case q:
          return je("Suspense");
        case C:
          return je("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return Ve(t.render);
          case k:
            return fe(t.type, s, h);
          case f: {
            var w = t, A = w._payload, H = w._init;
            try {
              return fe(H(A), s, h);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, ne = {}, be = $.ReactDebugCurrentFrame;
    function ce(t) {
      if (t) {
        var s = t._owner, h = fe(t.type, t._source, s ? s.type : null);
        be.setExtraStackFrame(h);
      } else
        be.setExtraStackFrame(null);
    }
    function wt(t, s, h, w, A) {
      {
        var H = Function.call.bind(ue);
        for (var z in t)
          if (H(t, z)) {
            var E = void 0;
            try {
              if (typeof t[z] != "function") {
                var ae = Error((w || "React class") + ": " + h + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              E = t[z](s, z, w, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              E = G;
            }
            E && !(E instanceof Error) && (ce(A), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", h, z, typeof E), ce(null)), E instanceof Error && !(E.message in ne) && (ne[E.message] = !0, ce(A), p("Failed %s type: %s", h, E.message), ce(null));
          }
      }
    }
    var we = Array.isArray;
    function Ye(t) {
      return we(t);
    }
    function de(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, h = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h;
      }
    }
    function yt(t) {
      try {
        return st(t), !1;
      } catch {
        return !0;
      }
    }
    function st(t) {
      return "" + t;
    }
    function at(t) {
      if (yt(t))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", de(t)), st(t);
    }
    var _e = $.ReactCurrentOwner, kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ct;
    function Ft(t) {
      if (ue.call(t, "ref")) {
        var s = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Nt(t) {
      if (ue.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, s) {
      typeof t.ref == "string" && _e.current;
    }
    function We(t, s) {
      {
        var h = function() {
          lt || (lt = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Tt(t, s) {
      {
        var h = function() {
          ct || (ct = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Et = function(t, s, h, w, A, H, z) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: s,
        ref: h,
        props: z,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Ot(t, s, h, w, A) {
      {
        var H, z = {}, E = null, ae = null;
        h !== void 0 && (at(h), E = "" + h), Nt(s) && (at(s.key), E = "" + s.key), Ft(s) && (ae = s.ref, Rt(s, A));
        for (H in s)
          ue.call(s, H) && !kt.hasOwnProperty(H) && (z[H] = s[H]);
        if (t && t.defaultProps) {
          var G = t.defaultProps;
          for (H in G)
            z[H] === void 0 && (z[H] = G[H]);
        }
        if (E || ae) {
          var Z = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          E && We(z, Z), ae && Tt(z, Z);
        }
        return Et(t, E, ae, A, w, _e.current, z);
      }
    }
    var Ke = $.ReactCurrentOwner, dt = $.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var s = t._owner, h = fe(t.type, t._source, s ? s.type : null);
        dt.setExtraStackFrame(h);
      } else
        dt.setExtraStackFrame(null);
    }
    var c;
    c = !1;
    function a(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function m() {
      {
        if (Ke.current) {
          var t = W(Ke.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function O(t) {
      return "";
    }
    var y = {};
    function L(t) {
      {
        var s = m();
        if (!s) {
          var h = typeof t == "string" ? t : t.displayName || t.name;
          h && (s = `

Check the top-level render call using <` + h + ">.");
        }
        return s;
      }
    }
    function B(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var h = L(s);
        if (y[h])
          return;
        y[h] = !0;
        var w = "";
        t && t._owner && t._owner !== Ke.current && (w = " It was passed a child from " + W(t._owner.type) + "."), ye(t), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, w), ye(null);
      }
    }
    function U(t, s) {
      {
        if (typeof t != "object")
          return;
        if (Ye(t))
          for (var h = 0; h < t.length; h++) {
            var w = t[h];
            a(w) && B(w, s);
          }
        else if (a(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var A = ee(t);
          if (typeof A == "function" && A !== t.entries)
            for (var H = A.call(t), z; !(z = H.next()).done; )
              a(z.value) && B(z.value, s);
        }
      }
    }
    function me(t) {
      {
        var s = t.type;
        if (s == null || typeof s == "string")
          return;
        var h;
        if (typeof s == "function")
          h = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === k))
          h = s.propTypes;
        else
          return;
        if (h) {
          var w = W(s);
          wt(h, t.props, "prop", w, t);
        } else if (s.PropTypes !== void 0 && !c) {
          c = !0;
          var A = W(s);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ge(t) {
      {
        for (var s = Object.keys(t.props), h = 0; h < s.length; h++) {
          var w = s[h];
          if (w !== "children" && w !== "key") {
            ye(t), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), p("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    var ut = {};
    function $e(t, s, h, w, A, H) {
      {
        var z = I(t);
        if (!z) {
          var E = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = O();
          ae ? E += ae : E += m();
          var G;
          t === null ? G = "null" : Ye(t) ? G = "array" : t !== void 0 && t.$$typeof === r ? (G = "<" + (W(t.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : G = typeof t, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, E);
        }
        var Z = Ot(t, s, h, A, H);
        if (Z == null)
          return Z;
        if (z) {
          var pe = s.children;
          if (pe !== void 0)
            if (w)
              if (Ye(pe)) {
                for (var De = 0; De < pe.length; De++)
                  U(pe[De], t);
                Object.freeze && Object.freeze(pe);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              U(pe, t);
        }
        if (ue.call(s, "key")) {
          var ze = W(t), le = Object.keys(s).filter(function(Hr) {
            return Hr !== "key";
          }), zt = le.length > 0 ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ut[ze + zt]) {
            var Dr = le.length > 0 ? "{" + le.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zt, ze, Dr, ze), ut[ze + zt] = !0;
          }
        }
        return t === i ? Ge(Z) : me(Z), Z;
      }
    }
    function dr(t, s, h) {
      return $e(t, s, h, !0);
    }
    function Je(t, s, h) {
      return $e(t, s, h, !1);
    }
    var _r = Je, $r = dr;
    Ze.Fragment = i, Ze.jsx = _r, Ze.jsxs = $r;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? St.exports = so() : St.exports = ao();
var e = St.exports;
const M = He.memo(
  ({ onClick: n, title: r, command: l, activeStyles: i, disabled: b = !1, children: x }) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: n,
      onMouseDown: (g) => g.preventDefault(),
      className: `btn btn-outline-secondary ${i && i.has(l) ? "active" : ""}`,
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "bottom",
      disabled: b,
      children: x
    }
  ) })
);
M.propTypes = { onClick: o.func.isRequired, title: o.string.isRequired, command: o.string, activeStyles: o.object, disabled: o.bool, children: o.node.isRequired };
M.displayName = "ToolbarButton";
const lo = () => /* @__PURE__ */ e.jsx("style", { children: '.dropdown-menu{background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.375rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.175);padding:.5rem}.dropdown-menu>*:not(div){display:block;width:100%;padding:.5rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0;text-decoration:none;border-radius:.25rem}.dropdown-menu>*:not(div):hover{background-color:#f8f9fa;color:#1e2125}.dropdown-menu div[class*="flex-wrap"] .btn{font-size:1.5rem;line-height:1;padding:.25rem;background-color:transparent;border:1px solid transparent;border-radius:.375rem;transition:background-color .15s ease-in-out}.dropdown-menu div[class*="flex-wrap"] .btn:hover{background-color:#e9ecef}' }), ke = ({ title: n, icon: r, children: l, disabled: i = !1, selectedValue: b }) => {
  const [x, g] = R(!1), j = Q(null), u = V(() => {
    g((C) => !C);
  }, []);
  J(() => {
    const C = (k) => {
      const f = document.querySelector(".dropdown-menu-portal");
      j.current && !j.current.contains(k.target) && (!f || !f.contains(k.target)) && g(!1);
    };
    return x && document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [x]);
  const q = () => {
    const C = Q(null), [k, f] = R({ opacity: 0, position: "fixed" });
    return J(() => {
      if (j.current && C.current) {
        const F = j.current.getBoundingClientRect(), T = C.current.offsetWidth, N = C.current.offsetHeight, ee = window.innerWidth, $ = window.innerHeight;
        let p = F.bottom + 4, d = F.left;
        d + T > ee && (d = F.right - T), p + N > $ && (p = F.top - N - 4), f({
          position: "fixed",
          top: `${Math.max(5, p)}px`,
          left: `${Math.max(5, d)}px`,
          zIndex: 2050,
          opacity: 1
        });
      }
    }, []), /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: C,
        className: "dropdown-menu dropdown-menu-portal show",
        style: k,
        onClick: (F) => {
          F.target.closest("button") && g(!1);
        },
        children: l
      }
    );
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(lo, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "btn-group", ref: j, children: [
      /* @__PURE__ */ e.jsxs("button", { type: "button", onClick: u, onMouseDown: (C) => C.preventDefault(), className: "btn btn-outline-secondary d-flex align-items-center gap-1 py-2 px-2", "aria-haspopup": "true", "aria-expanded": x, title: n, disabled: i, style: { minWidth: b ? "110px" : "auto" }, children: [
        b ? /* @__PURE__ */ e.jsx("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "13px", textAlign: "left", flexGrow: 1 }, children: b }) : r,
        /* @__PURE__ */ e.jsx(_t, { size: 14, style: { marginLeft: "auto" } })
      ] }),
      x && hr.createPortal(/* @__PURE__ */ e.jsx(q, {}), document.body)
    ] })
  ] });
};
ke.propTypes = { title: o.string.isRequired, icon: o.node, children: o.node.isRequired, disabled: o.bool, selectedValue: o.string };
const co = () => /* @__PURE__ */ e.jsx("style", { children: ".color-swatch{width:24px;height:24px;border-radius:50%;border:1px solid rgba(0,0,0,.1);cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.color-swatch:hover{transform:scale(1.15);box-shadow:0 0 0 3px rgba(0,0,0,.1)}" }), uo = [
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
], Lt = ({ command: n, applyStyle: r, currentStyles: l }) => {
  const [i, b] = R(n === "foreColor" ? "#000000" : "#ffff00"), x = n === "foreColor" ? "Text Color" : "Highlight Color";
  J(() => {
    if (l) {
      const u = n === "foreColor" ? l.foreColor : l.backColor;
      u && b(u);
    }
  }, [l, n]);
  const g = (u) => {
    b(u), r(n, u);
  }, j = /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px"
      },
      children: [
        n === "foreColor" ? /* @__PURE__ */ e.jsx($t, { size: 18 }) : /* @__PURE__ */ e.jsx(Dt, { size: 18 }),
        /* @__PURE__ */ e.jsx("div", { style: { width: "15px", height: "4px", backgroundColor: i, borderRadius: "2px", border: "1px solid #ced4da" } })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(co, {}),
    /* @__PURE__ */ e.jsx(ke, { title: x, icon: j, children: /* @__PURE__ */ e.jsx("div", { className: "p-3 d-flex flex-wrap gap-1", style: { width: "160px" }, children: uo.map((u) => /* @__PURE__ */ e.jsx("button", { type: "button", className: "color-swatch", style: { backgroundColor: u }, onClick: () => g(u), "aria-label": u }, u)) }) })
  ] });
};
Lt.propTypes = { command: o.oneOf(["foreColor", "backColor"]).isRequired, applyStyle: o.func.isRequired, currentStyles: o.object };
const po = [
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
], gr = ({ applyStyle: n }) => /* @__PURE__ */ e.jsx(ke, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(Ht, { size: 16 }), children: /* @__PURE__ */ e.jsx("div", { className: "p-2 d-flex flex-wrap gap-1", style: { maxHeight: "200px", width: "250px", overflowY: "auto" }, children: po.map((r) => /* @__PURE__ */ e.jsx("button", { className: "btn btn-sm btn-light fs-5", onClick: () => n("insertText", r), children: r }, r)) }) });
gr.propTypes = { applyStyle: o.func.isRequired };
const fr = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], fo = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, mo = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, Qe = { Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" }, bo = {
  "13.3333px": "Small",
  "16px": "Normal",
  "24px": "Large",
  "42.6667px": "Huge"
}, xo = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  p: "Paragraph"
}, pt = "width: 100%; border-collapse: collapse; table-layout: fixed;  margin: 0;  padding: 0;", xe = "padding: 0; vertical-align: top;", ft = "<style>@media screen and (max-width: 600px) { .responsive-cell { display: block !important; width: 100% !important; box-sizing: border-box !important; } }</style>", ho = {
  "2 Columns (1:1)": `${ft}<table class="responsive-table" style="${pt}"><tbody><tr><td class="responsive-cell" style="${xe} width: 50%;"><p>C1</p></td><td class="responsive-cell" style="${xe} width: 50%;"><p>C2</p></td></tr></tbody></table>`,
  "3 Columns (1:1:1)": `${ft}<table class="responsive-table" style="${pt}"><tbody><tr><td class="responsive-cell" style="${xe} width: 33.33%;"><p>C1</p></td><td class="responsive-cell" style="${xe} width: 33.33%;"><p>C2</p></td><td class="responsive-cell" style="${xe} width: 33.33%;"><p>C3</p></td></tr></tbody></table>`,
  "2 Columns (1:2)": `${ft}<table class="responsive-table" style="${pt}"><tbody><tr><td class="responsive-cell" style="${xe} width: 33.33%;"><p>C1</p></td><td class="responsive-cell" style="${xe} width: 66.66%;"><p>C2</p></td></tr></tbody></table>`,
  "2 Columns (2:1)": `${ft}<table class="responsive-table" style="${pt}"><tbody><tr><td class="responsive-cell" style="${xe} width: 66.66%;"><p>C1</p></td><td class="responsive-cell" style="${xe} width: 33.33%;"><p>C2</p></td></tr></tbody></table>`
}, vr = ({
  currentStyles: n,
  applyStyle: r,
  applyLineHeight: l,
  activeStyles: i,
  onOpenLinkModal: b,
  onImageUpload: x,
  onDocxUpload: g,
  onVideoModalOpen: j,
  onTableModalOpen: u,
  onAiRefactor: q,
  content: C,
  isGenerating: k,
  isAiLoadingMinimized: f
}) => {
  const F = Q(null), T = Q(null), N = Q(null), [ee, $] = R({
    headings: "Paragraph",
    fontFamily: "Arial",
    fontSize: "Normal",
    lineHeight: "Single"
  });
  J(() => {
    var d;
    if (n && Object.keys(n).length > 0) {
      const S = {};
      S.headings = xo[n.formatBlock] || "Paragraph", S.fontFamily = fr.find(
        (re) => {
          var v;
          return (v = n.fontName) == null ? void 0 : v.toLowerCase().includes(re.toLowerCase());
        }
      ) || "Arial", S.fontSize = ((d = Object.entries(bo).find(
        ([re]) => {
          var v;
          return (v = n.fontSize) == null ? void 0 : v.includes(re);
        }
      )) == null ? void 0 : d[1]) || "Normal";
      let _ = "Single";
      const Y = n.lineHeight, te = n.fontSize;
      if (Y && Y !== "normal")
        if (Y.endsWith("px") && (te != null && te.endsWith("px"))) {
          const re = parseFloat(Y), v = parseFloat(te);
          if (v > 0) {
            const I = (re / v).toFixed(2);
            _ = Object.keys(Qe).find(
              (X) => parseFloat(Qe[X]).toFixed(2) === I
            ) || _;
          }
        } else
          _ = Object.keys(Qe).find(
            (re) => Qe[re] === Y
          ) || _;
      else Y === "normal" && (_ = "1.15");
      S.lineHeight = _, $((re) => ({ ...re, ...S }));
    }
  }, [n]);
  const p = (d, S) => {
    $((_) => ({ ..._, [d]: S }));
  };
  return J(() => {
    if (F.current && typeof window.bootstrap < "u") {
      const S = [].slice.call(
        F.current.querySelectorAll('[data-bs-toggle="tooltip"]')
      ).map(
        (_) => new window.bootstrap.Tooltip(_)
      );
      return () => S.forEach((_) => _ == null ? void 0 : _.dispose());
    }
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { ref: F, className: "p-2 border-bottom d-flex flex-wrap align-items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", role: "group", children: [
        /* @__PURE__ */ e.jsx(M, { title: "Undo (Ctrl+Z)", onClick: () => r("undo"), children: /* @__PURE__ */ e.jsx(Mt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Redo (Ctrl+Y)", onClick: () => r("redo"), children: /* @__PURE__ */ e.jsx(Pt, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(ke, { title: "Headings", selectedValue: ee.headings, children: Object.entries(mo).map(([d, S]) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            className: "dropdown-item",
            onClick: () => {
              r("formatBlock", S), p("headings", d);
            },
            children: [
              d,
              " "
            ]
          },
          d
        )) }),
        /* @__PURE__ */ e.jsx(ke, { title: "Font Family", selectedValue: ee.fontFamily, children: fr.map((d) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            className: "dropdown-item",
            style: { fontFamily: d },
            onClick: () => {
              r("fontName", d), p("fontFamily", d);
            },
            children: [
              " ",
              d
            ]
          },
          d
        )) }),
        /* @__PURE__ */ e.jsx(ke, { title: "Font Size", selectedValue: ee.fontSize, children: Object.entries(fo).map(([d, S]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "dropdown-item",
            onClick: () => {
              r("fontSize", S), p("fontSize", d);
            },
            children: d
          },
          d
        )) }),
        /* @__PURE__ */ e.jsxs(
          ke,
          {
            title: "Line Height",
            selectedValue: ee.lineHeight,
            children: [
              Object.entries(Qe).map(([d, S]) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  className: "dropdown-item",
                  style: { fontSize: "14px" },
                  onClick: () => {
                    l(S), p("lineHeight", d);
                  },
                  children: [
                    d,
                    " "
                  ]
                },
                d
              )),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "dropdown-item text-danger border-top mt-2",
                  style: { fontSize: "14px" },
                  onClick: () => {
                    l("normal"), p("lineHeight", "Single");
                  },
                  children: " Remove Height "
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(M, { title: "Bold (Ctrl+B)", command: "bold", activeStyles: i, onClick: () => r("bold"), children: /* @__PURE__ */ e.jsx(qt, { size: 14 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Italic (Ctrl+I)", command: "italic", activeStyles: i, onClick: () => r("italic"), children: /* @__PURE__ */ e.jsx(Bt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Underline (Ctrl+U)", command: "underline", activeStyles: i, onClick: () => r("underline"), children: /* @__PURE__ */ e.jsx(Ut, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Strikethrough", command: "strikeThrough", activeStyles: i, onClick: () => r("strikeThrough"), children: /* @__PURE__ */ e.jsx(Vt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Superscript", command: "superscript", activeStyles: i, onClick: () => r("superscript"), children: /* @__PURE__ */ e.jsx(Yt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Subscript", command: "subscript", activeStyles: i, onClick: () => r("subscript"), children: /* @__PURE__ */ e.jsx(Wt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(gr, { applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(Lt, { command: "foreColor", applyStyle: r, currentStyles: n }),
        /* @__PURE__ */ e.jsx(Lt, { command: "backColor", applyStyle: r, currentStyles: n })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(M, { title: "Align Left", command: "justifyLeft", activeStyles: i, onClick: () => r("justifyLeft"), children: /* @__PURE__ */ e.jsx(Kt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Align Center", command: "justifyCenter", activeStyles: i, onClick: () => r("justifyCenter"), children: /* @__PURE__ */ e.jsx(Gt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Align Right", command: "justifyRight", activeStyles: i, onClick: () => r("justifyRight"), children: /* @__PURE__ */ e.jsx(Jt, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(M, { title: "Ordered List", command: "insertOrderedList", activeStyles: i, onClick: () => r("insertOrderedList"), children: /* @__PURE__ */ e.jsx(Xt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Unordered List", command: "insertUnorderedList", activeStyles: i, onClick: () => r("insertUnorderedList"), children: /* @__PURE__ */ e.jsx(Zt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Outdent", onClick: () => r("outdent"), children: /* @__PURE__ */ e.jsx(Qt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Indent", onClick: () => r("indent"), children: /* @__PURE__ */ e.jsx(er, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(M, { title: "Blockquote", onClick: () => r("formatBlock", "<blockquote>"), children: /* @__PURE__ */ e.jsx(tr, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Code Block", onClick: () => r("formatBlock", "<pre>"), children: /* @__PURE__ */ e.jsx(rr, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Add/Edit Link (Ctrl+K)", onClick: b, children: /* @__PURE__ */ e.jsx(rt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Horizontal Line", onClick: () => r("insertHorizontalRule"), children: /* @__PURE__ */ e.jsx(or, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Clear Formatting", onClick: () => r("removeFormat"), children: /* @__PURE__ */ e.jsx(nr, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
        /* @__PURE__ */ e.jsx(M, { title: "Insert Image", onClick: () => {
          var d;
          return (d = T.current) == null ? void 0 : d.click();
        }, children: /* @__PURE__ */ e.jsx(ir, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Insert Video", onClick: j, children: /* @__PURE__ */ e.jsx(vt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(M, { title: "Insert Table", onClick: u, children: /* @__PURE__ */ e.jsx(jt, { size: 16 }) }),
        /* @__PURE__ */ e.jsx(ke, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx(sr, { size: 16 }), children: Object.entries(ho).map(([d, S]) => /* @__PURE__ */ e.jsx("button", { className: "dropdown-item", style: { fontSize: "14px" }, onClick: () => r("insertHTML", S + "<p><br></p>"), children: d }, d)) }),
        /* @__PURE__ */ e.jsx(M, { title: "Import from Word (.docx)", onClick: () => {
          var d;
          return (d = N.current) == null ? void 0 : d.click();
        }, children: /* @__PURE__ */ e.jsx(ar, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "btn-group", children: /* @__PURE__ */ e.jsx(M, { title: "Improve with AI", onClick: q, disabled: !C || C === "" || k, children: k && !f ? /* @__PURE__ */ e.jsx("div", { className: "spinner-border spinner-border-sm", role: "status", children: /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) : /* @__PURE__ */ e.jsx(ot, { size: 16 }) }) })
    ] }),
    /* @__PURE__ */ e.jsx("input", { type: "file", accept: "image/*", ref: T, onChange: x, className: "d-none" }),
    /* @__PURE__ */ e.jsx("input", { type: "file", accept: ".docx", ref: N, onChange: g, className: "d-none" })
  ] });
};
vr.propTypes = { currentStyles: o.object, applyStyle: o.func.isRequired, applyLineHeight: o.func.isRequired, activeStyles: o.object.isRequired, onOpenLinkModal: o.func.isRequired, onImageUpload: o.func.isRequired, onDocxUpload: o.func.isRequired, onVideoModalOpen: o.func.isRequired, onTableModalOpen: o.func.isRequired, onAiRefactor: o.func.isRequired, content: o.string, isGenerating: o.bool.isRequired, isAiLoadingMinimized: o.bool.isRequired };
const go = () => /* @__PURE__ */ e.jsx("style", { children: '.forma-text-tooltip-container{position:relative;display:inline-block}.forma-text-tooltip{visibility:hidden;opacity:0;width:max-content;background-color:#63b1ff;color:#fff;text-align:center;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:500;position:absolute;z-index:10;top:130%;left:50%;transform:translateX(-50%);transition:opacity .2s ease-in-out}.forma-text-tooltip::after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #63b1ff transparent}.forma-text-tooltip-container:hover .forma-text-tooltip{visibility:visible;opacity:1}' }), P = He.memo(
  ({
    onClick: n,
    title: r,
    command: l,
    activeStyles: i,
    disabled: b = !1,
    children: x,
    className: g = ""
  }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(go, {}),
    /* @__PURE__ */ e.jsx("div", { className: "forma-text-tooltip-container", children: /* @__PURE__ */ e.jsx("button", { type: "button", onClick: n, onMouseDown: (j) => j.preventDefault(), className: `modern-toolbar-button ${i && i.has(l) ? "active" : ""} ${g}`, disabled: b, children: x }) })
  ] })
);
P.propTypes = { onClick: o.func.isRequired, title: o.string.isRequired, command: o.string, activeStyles: o.object, disabled: o.bool, children: o.node.isRequired, className: o.string };
P.displayName = "ModernToolbarButton";
const vo = () => /* @__PURE__ */ e.jsx("style", { children: '.dropdown-menu{background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.375rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.175);padding:.5rem}.dropdown-menu>*:not(div){display:block;width:100%;padding:.5rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0;text-decoration:none;border-radius:.25rem}.dropdown-menu>*:not(div):hover{background-color:#f8f9fa;color:#1e2125}.dropdown-menu div[class*="flex-wrap"] .btn{font-size:1.5rem;line-height:1;padding:.25rem;background-color:transparent;border:1px solid transparent;border-radius:.375rem;transition:background-color .15s ease-in-out}.dropdown-menu div[class*="flex-wrap"] .btn:hover{background-color:#007dfbff!important}.btn.forma-text-toolbar-button:hover{background-color:#e8f0fe!important;color:#1967d2!important}' }), Fe = ({ title: n, icon: r, children: l, disabled: i = !1, selectedValue: b }) => {
  const [x, g] = R(!1), j = Q(null), u = V(() => {
    g((C) => !C);
  }, []);
  J(() => {
    const C = (k) => {
      const f = document.querySelector(".dropdown-menu-portal");
      j.current && !j.current.contains(k.target) && (!f || !f.contains(k.target)) && g(!1);
    };
    return x && document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [x]);
  const q = () => {
    const C = Q(null), [k, f] = R({
      opacity: 0,
      position: "fixed"
    });
    return J(() => {
      if (j.current && C.current) {
        const F = j.current.getBoundingClientRect(), T = C.current.offsetWidth, N = C.current.offsetHeight, ee = window.innerWidth, $ = window.innerHeight;
        let p = F.bottom + 4, d = F.left;
        d + T > ee && (d = F.right - T), p + N > $ && (p = F.top - N - 4), f({
          position: "fixed",
          top: `${Math.max(5, p)}px`,
          left: `${Math.max(5, d)}px`,
          zIndex: 2050,
          opacity: 1
        });
      }
    }, []), /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: C,
        className: "dropdown-menu dropdown-menu-portal show",
        style: k,
        onClick: (F) => {
          F.target.closest("button") && g(!1);
        },
        children: l
      }
    );
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(vo, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "btn-group ", ref: j, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: u,
          onMouseDown: (C) => C.preventDefault(),
          className: "btn  d-flex align-items-center gap-1 py-2 px-2 forma-text-toolbar-button",
          "aria-haspopup": "true",
          "aria-expanded": x,
          title: n,
          disabled: i,
          style: { minWidth: b ? "110px" : "auto" },
          children: [
            b ? /* @__PURE__ */ e.jsxs(
              "span",
              {
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: "13px",
                  textAlign: "left",
                  flexGrow: 1
                },
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "me-2", children: r }),
                  " ",
                  b
                ]
              }
            ) : r,
            /* @__PURE__ */ e.jsx(_t, { size: 14 })
          ]
        }
      ),
      x && hr.createPortal(/* @__PURE__ */ e.jsx(q, {}), document.body)
    ] })
  ] });
};
Fe.propTypes = {
  title: o.string.isRequired,
  icon: o.node,
  children: o.node.isRequired,
  disabled: o.bool,
  selectedValue: o.string
};
const jo = [
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
], It = ({ command: n, applyStyle: r, currentStyles: l }) => {
  const [i, b] = R(
    n === "foreColor" ? "#000000" : "#FFFF00"
  ), x = n === "foreColor" ? "Text Color" : "Highlight Color";
  J(() => {
    if (l) {
      const u = n === "foreColor" ? l.foreColor : l.backColor;
      u && b(u);
    }
  }, [l, n]);
  const g = (u) => {
    b(u), r(n, u);
  }, j = n === "foreColor" ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ e.jsx($t, { size: 18 }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "16px",
              height: "4px",
              backgroundColor: i,
              borderRadius: "2px",
              marginTop: "2px"
            }
          }
        )
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ e.jsx(Dt, { size: 18 }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "16px",
              height: "4px",
              backgroundColor: i,
              borderRadius: "2px",
              marginTop: "2px"
            }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ e.jsx(Fe, { title: x, icon: j, children: /* @__PURE__ */ e.jsx("div", { className: "modern-color-picker", children: jo.map((u) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "modern-color-swatch",
      style: { backgroundColor: u },
      onClick: () => g(u),
      "aria-label": u
    },
    u
  )) }) });
};
It.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired,
  // We now expect the currentStyles from the parent
  currentStyles: o.object
};
const Co = [
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
], jr = ({ applyStyle: n }) => /* @__PURE__ */ e.jsx(Fe, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(Ht, { size: 18 }), children: /* @__PURE__ */ e.jsx("div", { className: "modern-emoji-picker", children: Co.map((r) => /* @__PURE__ */ e.jsx("button", { type: "button", className: "modern-emoji", onClick: () => n("insertText", r), children: r }, r)) }) });
jr.propTypes = { applyStyle: o.func.isRequired };
const wo = () => /* @__PURE__ */ e.jsx("style", { children: ".modern-toolbar{display:flex;flex-wrap:wrap;align-items:center;padding:8px;gap:4px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.1);transition:background-color .3s ease,border-color .3s ease}.toolbar-group{display:flex;align-items:center;gap:4px}.toolbar-separator{width:1px;height:24px;margin:0 8px;transition:background-color .3s ease}.modern-toolbar-button{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:8px;width:40px;height:36px;cursor:pointer;transition:background-color .2s ease,color .2s ease;position:relative}.modern-toolbar-button:disabled{opacity:.4;cursor:not-allowed}@keyframes pulse-glow{0%,100%{transform:scale(1);filter:drop-shadow(0 0 4px rgba(0,230,230,.7))}50%{transform:scale(1.15);filter:drop-shadow(0 0 10px rgba(128,255,255,1)) drop-shadow(0 0 20px rgba(128,255,255,.7))}}.modern-ai-button{border:1px solid rgba(0,230,230,.3);background:linear-gradient(45deg,#2a2a72,#009ffd);overflow:hidden}.modern-ai-button svg{color:#cceeff;animation:pulse-glow 2.5s infinite ease-in-out;transition:all .3s ease-in-out}.modern-ai-button:hover:not(:disabled) svg{animation-play-state:paused;transform:scale(1.2);color:#fff;filter:drop-shadow(0 0 6px #fff) drop-shadow(0 0 12px rgba(128,255,255,1))}.modern-ai-button .spinner{width:18px;height:18px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.forma-text-dropdown{position:relative;display:inline-block}.forma-text-toolbar-button{color:#3c4043;border:1px solid transparent;border-radius:8px;padding:8px;font-size:14px;cursor:pointer;display:flex;align-items:center;gap:4px;transition:background-color .2s ease,border-color .2s ease;background:transparent}.forma-text-toolbar-button:hover{background-color:#bbe7fdff}.forma-text-toolbar-button:disabled{color:#adb5bd;cursor:not-allowed}.forma-text-toolbar-button.active{background-color:#e8f0fe;color:#1967d2}.forma-text-dropdown-menu{position:absolute;top:100%;margin-top:8px;border-radius:8px;padding:8px;z-index:1000;opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity .2s ease,transform .2s ease,visibility .2s;box-shadow:0 8px 24px rgba(0,0,0,.15);background-color:#fff;border:1px solid #e0e0e0;min-width:auto}.forma-text-dropdown-menu.show{opacity:1;visibility:visible;transform:translateY(0)}.forma-text-dropdown-item{display:block;width:100%;padding:8px 12px;border:none;background:none;text-align:left;border-radius:6px;cursor:pointer;white-space:nowrap;transition:background-color .2s ease;font-size:15px;color:#3c4043}.forma-text-dropdown-item:hover{background-color:#34bbffff}.modern-dropdown{position:relative}.modern-dropdown-menu{position:absolute;top:100%;left:0;margin-top:8px;border-radius:8px;padding:8px;z-index:9999!important;opacity:0;visibility:hidden;transform:translateY(0);transition:opacity .2s ease,transform .2s ease,visibility .2s;box-shadow:0 8px 24px rgba(0,0,0,.15);background-color:#fff;border:1px solid #e0e0e0}.modern-dropdown-menu.show{opacity:1;visibility:visible;transform:translateY(0)}.modern-dropdown-item{display:block;width:100%;padding:8px 12px;border:none;background:none;text-align:left;border-radius:6px;cursor:pointer;white-space:nowrap;transition:background-color .2s ease;font-size:16px;color:#3c4043}.modern-dropdown-item:hover{background-color:#f1f3f4}.modern-emoji:hover{background-color:#f1f3f4}.modern-color-picker{display:grid;grid-template-columns:repeat(auto-fit,minmax(24px,1fr));gap:6px;width:120px;padding:4px;max-height:200px;overflow-y:auto;overflow-x:hidden}.modern-color-swatch{width:24px;height:24px;border-radius:50%;border:1px solid rgba(0,0,0,.1);cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.modern-color-swatch:hover{transform:scale(1.15);box-shadow:0 0 0 3px rgba(0,0,0,.1)}.modern-emoji-picker{display:grid;grid-template-columns:repeat(2,1fr);max-height:200px;overflow-y:auto;overflow-x:hidden;padding:4px;width:120px}.modern-emoji{font-size:20px;background:none;border:none;padding:4px;border-radius:8px;cursor:pointer;transition:background-color .2s ease}.modern-color-picker::-webkit-scrollbar,.modern-emoji-picker::-webkit-scrollbar{width:8px}.modern-color-picker::-webkit-scrollbar-track,.modern-emoji-picker::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}.modern-color-picker::-webkit-scrollbar-thumb,.modern-emoji-picker::-webkit-scrollbar-thumb{background:#ccc;border-radius:10px}.modern-color-picker::-webkit-scrollbar-thumb:hover,.modern-emoji-picker::-webkit-scrollbar-thumb:hover{background:#aaa}.modern-toolbar{background-color:#fff;border:1px solid #e0e0e0}.toolbar-separator{background-color:#e0e0e0}.modern-toolbar-button{background-color:transparent;color:#5f6368}.modern-toolbar-button:hover:not(:disabled){background-color:#f1f3f4}.modern-toolbar-button.active{background-color:#e8f0fe;color:#1967d2}.modern-toolbar-button:hover{color:#1967d2}" }), mr = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], yo = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, et = {
  Single: "1",
  1.15: "1.15",
  1.5: "1.5",
  Double: "2"
}, ko = { Small: "2", Normal: "3", Large: "5", Huge: "6" }, Fo = {
  "13px": "Small",
  "16px": "Normal",
  "24px": "Large",
  "32px": "Huge"
}, No = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  p: "Paragraph"
}, mt = "width: 100%; border-collapse: collapse; table-layout: fixed;  margin: 0;  padding: 0;", he = "padding: 0; vertical-align: top;", bt = `
  <style>
    @media screen and (max-width: 600px) {
      .responsive-cell {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
    }
  </style>
`, Ro = {
  "2 Columns (1:1)": `
    ${bt}
    <table class="responsive-table" style="${mt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${he} width: 50%;">
            <p>Column 1</p>
          </td>
          <td class="responsive-cell" style="${he} width: 50%;">
            <p>Column 2</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  "3 Columns (1:1:1)": `
    ${bt}
    <table class="responsive-table" style="${mt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${he} width: 33.33%;">
            <p>C1</p>
          </td>
          <td class="responsive-cell" style="${he} width: 33.33%;">
            <p>C2</p>
          </td>
          <td class="responsive-cell" style="${he} width: 33.33%;">
            <p>C3</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  "2 Columns (1:2)": `
    ${bt}
    <table class="responsive-table" style="${mt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${he} width: 33.33%;">
            <p>C1</p>
          </td>
          <td class="responsive-cell" style="${he} width: 66.66%;">
            <p>C2</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  "2 Columns (2:1)": `
    ${bt}
    <table class="responsive-table" style="${mt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${he} width: 66.66%;">
            <p>C1</p>
          </td>
          <td class="responsive-cell" style="${he} width: 33.33%;">
            <p>C2</p>
          </td>
        </tr>
      </tbody>
    </table>`
}, Cr = ({
  currentStyles: n,
  applyStyle: r,
  applyLineHeight: l,
  activeStyles: i,
  onOpenLinkModal: b,
  onImageUpload: x,
  onDocxUpload: g,
  onVideoModalOpen: j,
  onTableModalOpen: u,
  onAiRefactor: q,
  content: C,
  isGenerating: k,
  isAiLoadingMinimized: f
}) => {
  const F = Q(null), T = Q(null), [N, ee] = R({
    headings: "Paragraph",
    fontFamily: "Arial",
    fontSize: "Normal",
    lineHeight: "Single"
  });
  J(() => {
    if (n && Object.keys(n).length > 0) {
      const p = {};
      p.headings = No[n.formatBlock] || "Paragraph", p.fontFamily = mr.find((Y) => {
        var te;
        return (te = n.fontName) == null ? void 0 : te.toLowerCase().includes(Y.toLowerCase());
      }) || "Arial", p.fontSize = Fo[n.fontSize] || "Normal";
      let d = "Single";
      const S = n.lineHeight, _ = n.fontSize;
      if (S && S !== "normal")
        if (S.endsWith("px") && _ && _.endsWith("px")) {
          const Y = parseFloat(S), te = parseFloat(_);
          if (te > 0) {
            const re = (Y / te).toFixed(2);
            d = Object.keys(et).find(
              (I) => parseFloat(et[I]).toFixed(2) === re
            ) || d;
          }
        } else
          d = Object.keys(et).find(
            (Y) => et[Y] === S
          ) || d;
      else S === "normal" && (d = "1.15");
      p.lineHeight = d, ee((Y) => ({ ...Y, ...p }));
    }
  }, [n]);
  const $ = (p, d) => {
    ee((S) => ({ ...S, [p]: d }));
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(wo, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "modern-toolbar", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Undo (Ctrl+Z)",
            onClick: () => r("undo"),
            children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Redo (Ctrl+Y)",
            onClick: () => r("redo"),
            children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          Fe,
          {
            title: "Headings",
            icon: /* @__PURE__ */ e.jsx(xr, { size: 16 }),
            selectedValue: N.headings,
            children: Object.entries(yo).map(([p, d]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "modern-dropdown-item",
                onClick: () => {
                  r("formatBlock", d), $("headings", p);
                },
                children: p
              },
              p
            ))
          }
        ),
        /* @__PURE__ */ e.jsx(
          Fe,
          {
            title: "Font Family",
            icon: /* @__PURE__ */ e.jsx(Vr, { size: 16 }),
            selectedValue: N.fontFamily,
            children: mr.map((p) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "modern-dropdown-item",
                style: { fontFamily: p },
                onClick: () => {
                  r("fontName", p), $("fontFamily", p);
                },
                children: p
              },
              p
            ))
          }
        ),
        /* @__PURE__ */ e.jsx(
          Fe,
          {
            title: "Font Size",
            icon: /* @__PURE__ */ e.jsx("span", { style: { fontSize: "17px" }, children: "F" }),
            selectedValue: N.fontSize,
            children: Object.entries(ko).map(([p, d]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "modern-dropdown-item",
                onClick: () => {
                  r("fontSize", d), $("fontSize", p);
                },
                children: p
              },
              p
            ))
          }
        ),
        /* @__PURE__ */ e.jsx(
          Fe,
          {
            title: "Line Height",
            icon: /* @__PURE__ */ e.jsx(Yr, { size: 16 }),
            selectedValue: N.lineHeight,
            children: Object.entries(et).map(([p, d]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "modern-dropdown-item",
                onClick: () => {
                  l(d), $("lineHeight", p);
                },
                children: p
              },
              p
            ))
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Bold (Ctrl+B)",
            command: "bold",
            activeStyles: i,
            onClick: () => r("bold"),
            children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Italic (Ctrl+I)",
            command: "italic",
            activeStyles: i,
            onClick: () => r("italic"),
            children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Underline (Ctrl+U)",
            command: "underline",
            activeStyles: i,
            onClick: () => r("underline"),
            children: /* @__PURE__ */ e.jsx(Ut, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Strikethrough",
            command: "strikeThrough",
            activeStyles: i,
            onClick: () => r("strikeThrough"),
            children: /* @__PURE__ */ e.jsx(Vt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Superscript",
            command: "superscript",
            activeStyles: i,
            onClick: () => r("superscript"),
            children: /* @__PURE__ */ e.jsx(Yt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Subscript",
            command: "subscript",
            activeStyles: i,
            onClick: () => r("subscript"),
            children: /* @__PURE__ */ e.jsx(Wt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(jr, { applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(It, { command: "foreColor", applyStyle: r }),
        /* @__PURE__ */ e.jsx(It, { command: "backColor", applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Align Left",
            command: "justifyLeft",
            activeStyles: i,
            onClick: () => r("justifyLeft"),
            children: /* @__PURE__ */ e.jsx(Kt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Align Center",
            command: "justifyCenter",
            activeStyles: i,
            onClick: () => r("justifyCenter"),
            children: /* @__PURE__ */ e.jsx(Gt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Align Right",
            command: "justifyRight",
            activeStyles: i,
            onClick: () => r("justifyRight"),
            children: /* @__PURE__ */ e.jsx(Jt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Ordered List",
            command: "insertOrderedList",
            activeStyles: i,
            onClick: () => r("insertOrderedList"),
            children: /* @__PURE__ */ e.jsx(Xt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Unordered List",
            command: "insertUnorderedList",
            activeStyles: i,
            onClick: () => r("insertUnorderedList"),
            children: /* @__PURE__ */ e.jsx(Zt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Outdent",
            onClick: () => r("outdent"),
            children: /* @__PURE__ */ e.jsx(Qt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Indent",
            onClick: () => r("indent"),
            children: /* @__PURE__ */ e.jsx(er, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Blockquote",
            onClick: () => r("formatBlock", "<blockquote>"),
            children: /* @__PURE__ */ e.jsx(tr, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Code Block",
            onClick: () => r("formatBlock", "<pre>"),
            children: /* @__PURE__ */ e.jsx(rr, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Add/Edit Link (Ctrl+K)",
            onClick: b,
            children: /* @__PURE__ */ e.jsx(rt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Horizontal Line",
            onClick: () => r("insertHorizontalRule"),
            children: /* @__PURE__ */ e.jsx(or, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Insert Image",
            onClick: () => {
              var p;
              return (p = F.current) == null ? void 0 : p.click();
            },
            children: /* @__PURE__ */ e.jsx(ir, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(P, { title: "Insert Video", onClick: j, children: /* @__PURE__ */ e.jsx(vt, { size: 20 }) }),
        /* @__PURE__ */ e.jsx(P, { title: "Insert Table", onClick: u, children: /* @__PURE__ */ e.jsx(jt, { size: 18 }) }),
        /* @__PURE__ */ e.jsx(Fe, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx(sr, { size: 18 }), children: Object.entries(Ro).map(([p, d]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("insertHTML", d + "<p><br></p>"),
            children: p
          },
          p
        )) }),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Import from Word (.docx)",
            onClick: () => {
              var p;
              return (p = T.current) == null ? void 0 : p.click();
            },
            children: /* @__PURE__ */ e.jsx(ar, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Clear Formatting",
            onClick: () => r("removeFormat"),
            children: /* @__PURE__ */ e.jsx(nr, { size: 18, style: { color: "red" } })
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
        /* @__PURE__ */ e.jsx(
          P,
          {
            title: "Improve with AI",
            onClick: q,
            disabled: !C || C === "" || k,
            className: "modern-ai-button mx-0 rounded-3",
            children: k && !f ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(ot, { size: 20 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: F,
        onChange: x,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: T,
        onChange: g,
        style: { display: "none" }
      }
    )
  ] });
};
Cr.propTypes = { currentStyles: o.object, applyStyle: o.func.isRequired, applyLineHeight: o.func.isRequired, activeStyles: o.object.isRequired, onOpenLinkModal: o.func.isRequired, onImageUpload: o.func.isRequired, onDocxUpload: o.func.isRequired, onVideoModalOpen: o.func.isRequired, onTableModalOpen: o.func.isRequired, onAiRefactor: o.func.isRequired, content: o.string, isGenerating: o.bool.isRequired, isAiLoadingMinimized: o.bool.isRequired };
const D = He.memo(
  ({
    onClick: n,
    title: r,
    cmd: l,
    active: i,
    disabled: b = !1,
    children: x,
    className: g = ""
  }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: n,
      onMouseDown: (j) => j.preventDefault(),
      className: `futuristic-button ${i && i.has(l) ? "active" : ""} ${g}`,
      title: r,
      disabled: b,
      children: /* @__PURE__ */ e.jsx("span", { className: "button-content", children: x })
    }
  )
);
D.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  cmd: o.string,
  active: o.object,
  disabled: o.bool,
  children: o.node.isRequired,
  className: o.string
};
D.displayName = "FuturisticToolbarButton";
const Ne = ({ title: n, icon: r, children: l, selectedValue: i }) => {
  const [b, x] = R(!1), g = Q(null), j = Q(null);
  return J(() => {
    const u = (q) => {
      g.current && !g.current.contains(q.target) && j.current && !j.current.contains(q.target) && x(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "futuristic-dropdown ps-2", ref: g, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        title: n,
        onClick: () => x(!b),
        onMouseDown: (u) => u.preventDefault(),
        className: "futuristic-button",
        "aria-expanded": b,
        style: { padding: "0 8px", minWidth: i ? "110px" : "auto" },
        children: /* @__PURE__ */ e.jsxs("span", { className: "button-content", children: [
          i ? /* @__PURE__ */ e.jsx(
            "span",
            {
              style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "13px",
                textAlign: "left",
                flexGrow: 1
              },
              children: i
            }
          ) : r,
          /* @__PURE__ */ e.jsx(
            _t,
            {
              size: 16,
              className: `chevron-icon ${b ? "open" : ""}`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: j,
        className: `futuristic-dropdown-menu ${b ? "show" : ""}`,
        onClick: () => x(!1),
        children: l
      }
    )
  ] });
};
Ne.propTypes = {
  title: o.string.isRequired,
  icon: o.node.isRequired,
  children: o.node.isRequired,
  selectedValue: o.string
};
const To = [
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
], At = ({ command: n, applyStyle: r, currentStyles: l }) => {
  const [i, b] = R(
    n === "foreColor" ? "#FFFFFF" : "#00FFFF"
  ), x = n === "foreColor" ? "Text Color" : "Highlight Color";
  J(() => {
    if (l) {
      const u = n === "foreColor" ? l.foreColor : l.backColor;
      u && b(u);
    }
  }, [l, n]);
  const g = (u) => {
    b(u), r(n, u);
  }, j = /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        n === "foreColor" ? /* @__PURE__ */ e.jsx($t, { size: 18 }) : /* @__PURE__ */ e.jsx(Dt, { size: 18 }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              bottom: "-4px",
              width: "6px",
              height: "6px",
              backgroundColor: i,
              borderRadius: "50%",
              boxShadow: `0 0 5px ${i}`
            }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ e.jsx(Ne, { title: x, icon: j, children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-color-picker", children: To.map((u) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "color-swatch-hexagon",
      onClick: () => g(u),
      "aria-label": u,
      children: /* @__PURE__ */ e.jsx("div", { className: "hexagon-inner", style: { backgroundColor: u } })
    },
    u
  )) }) });
};
At.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired,
  currentStyles: o.object
};
const Eo = [
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
], wr = ({ applyStyle: n }) => /* @__PURE__ */ e.jsx(Ne, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(Ht, { size: 18 }), children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-emoji-picker", children: Eo.map((r) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "futuristic-emoji",
    onClick: () => n("insertText", r),
    children: r
  },
  r
)) }) });
wr.propTypes = {
  applyStyle: o.func.isRequired
};
const Oo = () => /* @__PURE__ */ e.jsx("style", { children: "@keyframes pulse-glow{0%,100%{filter:drop-shadow(0 0 3px var(--glow-color-faded))}50%{filter:drop-shadow(0 0 8px var(--glow-color))}}@keyframes scanline{0%{transform:translateY(-100%)}100%{transform:translateY(100%)}}@keyframes subtle-breathing{0%,100%{box-shadow:0 0 20px rgba(0,255,255,0.1),inset 0 0 5px rgba(138,43,226,0.2)}50%{box-shadow:0 0 25px rgba(0,255,255,0.2),inset 0 0 8px rgba(138,43,226,0.3)}}:root{--bg-color:rgba(15,18,32,.7);--border-color:rgba(0,255,255,.25);--glow-color:#0ff;--glow-color-faded:rgba(0,255,255,.5);--text-color:#e0e0e0;--active-bg:rgba(0,255,255,.1);--hover-bg:rgba(255,255,255,.08);--animation-speed:.1s}.futuristic-toolbar{position:fixed;display:flex;align-items:stretch;padding:8px;background:var(--bg-color);backdrop-filter:blur(12px) saturate(150%);border-radius:12px;border:1px solid var(--border-color);z-index:500;color:var(--text-color);animation:subtle-breathing 6s infinite ease-in-out;transition:all var(--animation-speed) ease;transform:none}.futuristic-toolbar.docked{position:relative;width:auto;max-width:98%;top:auto!important;left:auto!important;transform:none!important;margin:8px auto;animation:none;backdrop-filter:none;background:rgba(15,15,25,.8)}.futuristic-toolbar::before,.futuristic-toolbar::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;border-radius:12px}.futuristic-toolbar::before{background-image:linear-gradient(var(--border-color) 1px,transparent 1px),linear-gradient(to right,var(--border-color) 1px,transparent 1px);background-size:30px 30px;opacity:.1}.futuristic-toolbar::after{background:linear-gradient(to bottom,transparent 0%,var(--glow-color-faded) 50%,transparent 100%);opacity:.05;animation:scanline 8s linear infinite}.futuristic-toolbar.docked::before,.futuristic-toolbar.docked::after{display:none}.toolbar-content{display:flex;align-items:start;flex-wrap:wrap;gap:4px;justify-content:start}.drag-handle{display:flex;align-items:center;justify-content:center;padding:0 8px;margin-right:8px;border-right:1px solid var(--border-color);cursor:grab;color:var(--glow-color);transition:opacity var(--animation-speed) ease,color var(--animation-speed) ease;animation:pulse-glow 4s infinite ease-in-out}.drag-handle:hover{animation-play-state:paused;filter:drop-shadow(0 0 10px var(--glow-color))}.drag-handle:active{cursor:grabbing;color:#fff}.toolbar-group{display:flex;gap:4px}.toolbar-separator{width:2px;height:20px;align-self:center;background:var(--border-color);margin:0 8px;opacity:.5;box-shadow:0 0 5px var(--glow-color-faded)}.futuristic-button{background:transparent;border:1px solid transparent;color:var(--text-color);width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;position:relative;transition:background var(--animation-speed) ease,color var(--animation-speed) ease;clip-path:polygon(10% 0,100% 0,100% 90%,90% 100%,0 100%,0 10%)}.button-content{display:flex;align-items:center;justify-content:center;gap:4px;z-index:2}.futuristic-button:hover:not(:disabled){background:var(--hover-bg);color:#fff}.futuristic-button:hover:not(:disabled) .button-content{filter:drop-shadow(0 0 5px var(--glow-color))}.futuristic-button.active{background:var(--active-bg);color:var(--glow-color);box-shadow:inset 0 0 10px var(--active-bg)}.futuristic-button.active .button-content{filter:drop-shadow(0 0 8px var(--glow-color))}.ai-button{background:radial-gradient(circle,rgba(0,255,255,.1) 0%,transparent 70%);border:1px solid var(--glow-color-faded)}.ai-button .button-content{color:var(--glow-color);animation:pulse-glow 3s infinite ease-in-out}.ai-button:hover:not(:disabled){border-color:var(--glow-color);background:radial-gradient(circle,rgba(0,255,255,.2) 0%,transparent 70%)}.ai-button:hover:not(:disabled) .button-content{animation-play-state:paused;color:#fff}.futuristic-dropdown{position:relative}.futuristic-dropdown-menu{position:absolute;top:calc(100% + 8px);left:0;background:var(--bg-color);backdrop-filter:blur(12px) saturate(180%);border:1px solid var(--border-color);border-radius:8px;padding:8px;z-index:1001;width:max-content;min-width:160px;opacity:0;visibility:hidden;transform:translateY(10px);transition:all var(--animation-speed) cubic-bezier(0.16,1,0.3,1)}.futuristic-dropdown-menu.show{opacity:1;visibility:visible;transform:translateY(0)}.futuristic-dropdown-item{background:none;border:none;color:var(--text-color);padding:8px 12px;border-radius:6px;cursor:pointer;display:block;width:100%;text-align:left;transition:background var(--animation-speed) ease,color var(--animation-speed) ease}.futuristic-dropdown-item:hover{background:var(--hover-bg);color:#fff}.chevron-icon{transition:transform var(--animation-speed) ease}.chevron-icon.open{transform:rotate(180deg)}" }), br = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], zo = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, tt = { Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" }, So = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, Lo = {
  "13px": "Small",
  "16px": "Normal",
  "24px": "Large",
  "32px": "Huge"
}, Io = { h1: "H1", h2: "H2", h3: "H3", p: "Paragraph" }, xt = "width: 100%; border-collapse: collapse; table-layout: fixed; margin: 0; padding: 0;", ge = "padding: 0; vertical-align: top;", ht = "<style>@media screen and (max-width: 600px) { .responsive-cell { display: block !important; width: 100% !important; box-sizing: border-box !important; } }</style>", Ao = {
  "2 Columns (1:1)": `
    ${ht}
    <table class="responsive-table" style="${xt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${ge} width: 50%;">
            <p>Column 1</p>
          </td>
          <td class="responsive-cell" style="${ge} width: 50%;">
            <p>Column 2</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  "3 Columns (1:1:1)": `
    ${ht}
    <table class="responsive-table" style="${xt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${ge} width: 33.33%;">
            <p>C1</p>
          </td>
          <td class="responsive-cell" style="${ge} width: 33.33%;">
            <p>C2</p>
          </td>
          <td class="responsive-cell" style="${ge} width: 33.33%;">
            <p>C3</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  "2 Columns (1:2)": `
    ${ht}
    <table class="responsive-table" style="${xt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${ge} width: 33.33%;">
            <p>C1</p>
          </td>
          <td class="responsive-cell" style="${ge} width: 66.66%;">
            <p>C2</p>
          </td>
        </tr>
      </tbody>
    </table>`,
  "2 Columns (2:1)": `
    ${ht}
    <table class="responsive-table" style="${xt}">
      <tbody>
        <tr>
          <td class="responsive-cell" style="${ge} width: 66.66%;">
            <p>C1</p>
          </td>
          <td class="responsive-cell" style="${ge} width: 33.33%;">
            <p>C2</p>
          </td>
        </tr>
      </tbody>
    </table>`
}, yr = ({
  currentStyles: n,
  applyStyle: r,
  applyLineHeight: l,
  activeStyles: i,
  onOpenLinkModal: b,
  onImageUpload: x,
  onDocxUpload: g,
  onVideoModalOpen: j,
  onTableModalOpen: u,
  onAiRefactor: q,
  content: C,
  isGenerating: k
}) => {
  const f = Q(null), F = Q(null), T = Q(null), [N, ee] = R(!0), $ = Q(!1), p = Q({ x: 50, y: 50 }), d = Q({ x: 0, y: 0 }), S = V(
    (v) => {
      if (v.button !== 0 || N) return;
      $.current = !0;
      const I = T.current;
      I && (d.current = {
        x: v.clientX - p.current.x,
        y: v.clientY - p.current.y
      }, I.classList.add("is-dragging"), v.preventDefault());
    },
    [N]
  );
  J(() => {
    const v = (X) => {
      if (!$.current || N) return;
      const oe = X.clientX - d.current.x, W = X.clientY - d.current.y;
      T.current.style.left = `${oe}px`, T.current.style.top = `${W}px`;
    }, I = (X) => {
      if (!$.current) return;
      $.current = !1;
      const oe = T.current;
      oe && (oe.classList.remove("is-dragging"), p.current = {
        x: X.clientX - d.current.x,
        y: X.clientY - d.current.y
      });
    };
    return window.addEventListener("mousemove", v), window.addEventListener("mouseup", I), () => {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", I);
    };
  }, [N]);
  const [_, Y] = R({
    headings: "Paragraph",
    fontFamily: "Arial",
    fontSize: "Normal",
    lineHeight: "Single"
  });
  J(() => {
    var v;
    if (n && Object.keys(n).length > 0) {
      const I = {};
      I.headings = Io[n.formatBlock] || "Paragraph", I.fontFamily = br.find(
        (K) => {
          var ie;
          return (ie = n.fontName) == null ? void 0 : ie.toLowerCase().includes(K.toLowerCase());
        }
      ) || "Arial", I.fontSize = ((v = Object.entries(Lo).find(
        ([K]) => {
          var ie;
          return (ie = n.fontSize) == null ? void 0 : ie.includes(K);
        }
      )) == null ? void 0 : v[1]) || "Normal";
      let X = "Single";
      const oe = n.lineHeight, W = n.fontSize;
      if (oe && oe !== "normal")
        if (oe.endsWith("px") && (W != null && W.endsWith("px"))) {
          const K = parseFloat(oe), ie = parseFloat(W);
          if (ie > 0) {
            const ve = (K / ie).toFixed(2);
            X = Object.keys(tt).find(
              (Se) => parseFloat(tt[Se]).toFixed(2) === ve
            ) || X;
          }
        } else
          X = Object.keys(tt).find(
            (K) => tt[K] === oe
          ) || X;
      else oe === "normal" && (X = "1.15");
      I.lineHeight = X, Y((K) => ({ ...K, ...I }));
    }
  }, [n]);
  const te = (v, I) => {
    Y((X) => ({ ...X, [v]: I }));
  }, re = () => ee((v) => !v);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Oo, {}),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: T,
        className: `futuristic-toolbar ${N ? "docked" : ""}`,
        style: N ? {} : {
          top: `${p.current.y}px`,
          left: `${p.current.x}px`
        },
        children: [
          !N && /* @__PURE__ */ e.jsx("div", { className: "drag-handle", onMouseDown: S, title: "Drag Toolbar", children: /* @__PURE__ */ e.jsx(Wr, { size: 20 }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "toolbar-content", children: [
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-group", children: /* @__PURE__ */ e.jsx(D, { title: N ? "Undock Toolbar" : "Dock Toolbar to Top", onClick: re, children: N ? /* @__PURE__ */ e.jsx(Kr, { size: 18 }) : /* @__PURE__ */ e.jsx(Gr, { size: 18 }) }) }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Undo",
                  onClick: () => r("undo"),
                  children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Redo",
                  onClick: () => r("redo"),
                  children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                Ne,
                {
                  title: "Headings",
                  selectedValue: _.headings,
                  children: Object.entries(zo).map(([v, I]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => {
                        r("formatBlock", I), te("headings", v);
                      },
                      children: v
                    },
                    v
                  ))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ne,
                {
                  title: "Font",
                  selectedValue: _.fontFamily,
                  children: br.map((v) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      style: { fontFamily: v },
                      onClick: () => {
                        r("fontName", v), te("fontFamily", v);
                      },
                      children: v
                    },
                    v
                  ))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ne,
                {
                  title: "Font Size",
                  selectedValue: _.fontSize,
                  children: Object.entries(So).map(([v, I]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => {
                        r("fontSize", I), te("fontSize", v);
                      },
                      children: v
                    },
                    v
                  ))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ne,
                {
                  title: "Line Height",
                  selectedValue: _.lineHeight,
                  children: Object.entries(tt).map(([v, I]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => {
                        l(I), te("lineHeight", v);
                      },
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
                D,
                {
                  title: "Bold",
                  cmd: "bold",
                  active: i,
                  onClick: () => r("bold"),
                  children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Italic",
                  cmd: "italic",
                  active: i,
                  onClick: () => r("italic"),
                  children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Underline",
                  cmd: "underline",
                  active: i,
                  onClick: () => r("underline"),
                  children: /* @__PURE__ */ e.jsx(Ut, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Strikethrough",
                  cmd: "strikeThrough",
                  active: i,
                  onClick: () => r("strikeThrough"),
                  children: /* @__PURE__ */ e.jsx(Vt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Superscript",
                  cmd: "superscript",
                  active: i,
                  onClick: () => r("superscript"),
                  children: /* @__PURE__ */ e.jsx(Yt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Subscript",
                  cmd: "subscript",
                  active: i,
                  onClick: () => r("subscript"),
                  children: /* @__PURE__ */ e.jsx(Wt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                At,
                {
                  command: "foreColor",
                  applyStyle: r,
                  currentStyles: n
                }
              ),
              /* @__PURE__ */ e.jsx(
                At,
                {
                  command: "backColor",
                  applyStyle: r,
                  currentStyles: n
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Align Left",
                  cmd: "justifyLeft",
                  active: i,
                  onClick: () => r("justifyLeft"),
                  children: /* @__PURE__ */ e.jsx(Kt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Align Center",
                  cmd: "justifyCenter",
                  active: i,
                  onClick: () => r("justifyCenter"),
                  children: /* @__PURE__ */ e.jsx(Gt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Align Right",
                  cmd: "justifyRight",
                  active: i,
                  onClick: () => r("justifyRight"),
                  children: /* @__PURE__ */ e.jsx(Jt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Ordered List",
                  cmd: "insertOrderedList",
                  active: i,
                  onClick: () => r("insertOrderedList"),
                  children: /* @__PURE__ */ e.jsx(Xt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Unordered List",
                  cmd: "insertUnorderedList",
                  active: i,
                  onClick: () => r("insertUnorderedList"),
                  children: /* @__PURE__ */ e.jsx(Zt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Outdent",
                  onClick: () => r("outdent"),
                  children: /* @__PURE__ */ e.jsx(Qt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Indent",
                  onClick: () => r("indent"),
                  children: /* @__PURE__ */ e.jsx(er, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Add/Edit Link",
                  onClick: b,
                  children: /* @__PURE__ */ e.jsx(rt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsxs(D, { title: "Blockquote", onClick: () => r("formatBlock", "<blockquote>"), children: [
                " ",
                /* @__PURE__ */ e.jsx(tr, { size: 18 })
              ] }),
              /* @__PURE__ */ e.jsx(D, { title: "Code Block", onClick: () => r("formatBlock", "<pre>"), children: /* @__PURE__ */ e.jsx(rr, { size: 18 }) }),
              /* @__PURE__ */ e.jsx(D, { title: "Horizontal Line", onClick: () => r("insertHorizontalRule"), children: /* @__PURE__ */ e.jsx(or, { size: 18 }) })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(D, { title: "Insert Image", onClick: () => {
                var v;
                return (v = f.current) == null ? void 0 : v.click();
              }, children: /* @__PURE__ */ e.jsx(ir, { size: 18 }) }),
              /* @__PURE__ */ e.jsx(D, { title: "Insert Video", onClick: j, children: /* @__PURE__ */ e.jsx(vt, { size: 18 }) }),
              /* @__PURE__ */ e.jsx(D, { title: "Insert Table", onClick: u, children: /* @__PURE__ */ e.jsx(jt, { size: 18 }) }),
              /* @__PURE__ */ e.jsx(Ne, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx(sr, { size: 18 }), children: Object.entries(Ao).map(([v, I]) => /* @__PURE__ */ e.jsx("button", { className: "futuristic-dropdown-item", onClick: () => r("insertHTML", I + "<p><br></p>"), children: v }, v)) }),
              /* @__PURE__ */ e.jsx(D, { title: "Import from Word", onClick: () => {
                var v;
                return (v = F.current) == null ? void 0 : v.click();
              }, children: /* @__PURE__ */ e.jsx(ar, { size: 18 }) }),
              /* @__PURE__ */ e.jsx(wr, { applyStyle: r })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                D,
                {
                  title: "Clear Formatting",
                  onClick: () => r("removeFormat"),
                  children: /* @__PURE__ */ e.jsx(nr, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
              /* @__PURE__ */ e.jsx(D, { title: "Improve with AI", onClick: q, disabled: !C || k, className: "ai-button rounded-3", children: k ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(ot, { size: 18 }) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("input", { type: "file", accept: "image/*", ref: f, onChange: x, style: { display: "none" } }),
    /* @__PURE__ */ e.jsx("input", { type: "file", accept: ".docx", ref: F, onChange: g, style: { display: "none" } })
  ] });
};
yr.propTypes = { currentStyles: o.object, applyStyle: o.func.isRequired, activeStyles: o.object.isRequired, applyLineHeight: o.func.isRequired, onOpenLinkModal: o.func.isRequired, onImageUpload: o.func.isRequired, onDocxUpload: o.func.isRequired, onVideoModalOpen: o.func.isRequired, onTableModalOpen: o.func.isRequired, onAiRefactor: o.func.isRequired, content: o.string, isGenerating: o.bool.isRequired };
const kr = ({ theme: n, ...r }) => n === "modern" ? /* @__PURE__ */ e.jsx(Cr, { ...r }) : n === "futuristic" ? /* @__PURE__ */ e.jsx(yr, { ...r }) : /* @__PURE__ */ e.jsx(vr, { ...r });
kr.propTypes = {
  theme: o.oneOf(["classic", "modern", "futuristic"])
};
const Fr = ({
  editorRef: n,
  content: r,
  showSource: l,
  onContentChange: i,
  onKeyDown: b,
  textContentClass: x
}) => l ? /* @__PURE__ */ e.jsx("textarea", { value: r || "", onChange: i, className: "form-control rounded-0 border-0  font-monospace small bg-dark text-light forma-text-source-view" }) : /* @__PURE__ */ e.jsx(
  "div",
  {
    ref: n,
    contentEditable: !0,
    suppressContentEditableWarning: !0,
    className: `forma-text-editor-content form-control rounded-0 border-0 h-100 p-3 ${x}`,
    style: { minHeight: "60vh" },
    onInput: i,
    onKeyDown: b
  }
);
Fr.propTypes = { editorRef: o.object.isRequired, content: o.string, showSource: o.bool.isRequired, onContentChange: o.func.isRequired, onKeyDown: o.func.isRequired, textContentClass: o.string };
const Me = ({ children: n, onClose: r, title: l, icon: i, size: b = "modal-dialog-centered" }) => /* @__PURE__ */ e.jsx("div", { className: "modal fade show", style: { display: "block", backgroundColor: "rgba(0,0,0,0.5)" }, onClick: r, children: /* @__PURE__ */ e.jsx("div", { className: `modal-dialog ${b}`, onClick: (x) => x.stopPropagation(), children: /* @__PURE__ */ e.jsxs("div", { className: "modal-content border-0 shadow-lg", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "modal-header bg-light border-0", children: [
    /* @__PURE__ */ e.jsxs("h5", { className: "modal-title d-flex align-items-center gap-2", children: [
      " ",
      i,
      " ",
      l,
      " "
    ] }),
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn-close", onClick: r })
  ] }),
  n
] }) }) });
Me.propTypes = { children: o.node.isRequired, onClose: o.func.isRequired, title: o.string.isRequired, icon: o.node, size: o.string };
const Nr = ({ isOpen: n, onClose: r, onApply: l, initialData: i, isEditing: b }) => {
  const [x, g] = R({ text: "", href: "" });
  return J(() => {
    n && g(i);
  }, [n, i]), n ? /* @__PURE__ */ e.jsxs(Me, { onClose: r, title: b ? "Edit Link" : "Add Link", icon: /* @__PURE__ */ e.jsx(rt, { size: 20, className: "text-primary" }), children: [
    /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Link Text" }),
        /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "input-group-text", children: [
            " ",
            /* @__PURE__ */ e.jsx(xr, { size: 16 }),
            " "
          ] }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              className: "form-control",
              value: x.text,
              onChange: (j) => g({ ...x, text: j.target.value })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Link URL" }),
        /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "input-group-text", children: [
            " ",
            /* @__PURE__ */ e.jsx(Jr, { size: 16 })
          ] }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "url",
              className: "form-control",
              value: x.href,
              onChange: (j) => g({ ...x, href: j.target.value }),
              placeholder: "https://example.com",
              autoFocus: !0
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
      /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-secondary", onClick: r, children: "Cancel" }),
      /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: () => l(x), children: "Apply Link" })
    ] })
  ] }) : null;
};
Nr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onApply: o.func.isRequired,
  initialData: o.shape({
    text: o.string,
    href: o.string
  }).isRequired,
  isEditing: o.bool.isRequired
};
const Rr = ({ isOpen: n, onClose: r, onInsert: l }) => {
  const [i, b] = R("");
  if (!n) return null;
  const x = () => {
    l(i), b("");
  };
  return /* @__PURE__ */ e.jsxs(Me, { onClose: r, title: "Insert Video", icon: /* @__PURE__ */ e.jsx(vt, { size: 20, className: "text-primary" }), children: [
    /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
      /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Video URL" }),
      /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "input-group-text", children: [
          " ",
          /* @__PURE__ */ e.jsx(rt, { size: 16 })
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "url",
            className: "form-control",
            value: i,
            onChange: (g) => b(g.target.value),
            placeholder: "e.g., https://www.youtube.com/watch?v=...",
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "form-text video-modal-title", children: "Supports YouTube and Vimeo links." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
      /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-secondary", onClick: r, children: " Cancel" }),
      /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: x, children: "Insert Video" })
    ] })
  ] });
};
Rr.propTypes = { isOpen: o.bool.isRequired, onClose: o.func.isRequired, onInsert: o.func.isRequired };
const Tr = ({ isOpen: n, onClose: r, onCreate: l }) => {
  const [i, b] = R({ rows: 3, cols: 3 });
  return n ? /* @__PURE__ */ e.jsxs(Me, { onClose: r, title: "Create Table", icon: /* @__PURE__ */ e.jsx(jt, { size: 20, className: "text-primary" }), children: [
    /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Rows" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            className: "form-control",
            value: i.rows,
            min: "1",
            max: "20",
            onChange: (x) => b({
              ...i,
              rows: parseInt(x.target.value, 10) || 1
            })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Columns" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            className: "form-control",
            value: i.cols,
            min: "1",
            max: "30",
            onChange: (x) => b({
              ...i,
              cols: parseInt(x.target.value, 10) || 1
            })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
      /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-secondary", onClick: r, children: "Cancel " }),
      /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: () => l(i), children: "Create" })
    ] })
  ] }) : null;
};
Tr.propTypes = { isOpen: o.bool.isRequired, onClose: o.func.isRequired, onCreate: o.func.isRequired };
const Er = ({ status: n, isMinimized: r, onMinimizeToggle: l }) => r ? /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-popup-minimized", children: [
  /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "spinner-border spinner-border-sm text-primary",
      role: "status"
    }
  ),
  /* @__PURE__ */ e.jsx("span", { className: "ms-2 small", children: "AI is working..." }),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: l,
      className: "btn btn-sm btn-light ms-auto",
      children: /* @__PURE__ */ e.jsx(Xr, { size: 14 })
    }
  )
] }) : /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-popup", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
    /* @__PURE__ */ e.jsxs("h6", { className: "mb-0 d-flex align-items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(ot, { size: 18, className: "text-primary" }),
      "AI Assistant"
    ] }),
    /* @__PURE__ */ e.jsx("button", { onClick: l, className: "btn btn-sm btn-light", children: /* @__PURE__ */ e.jsx(Ct, { size: 14 }) })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "d-flex align-items-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "spinner-border text-primary me-3", role: "status", children: /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Loading..." }) }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "mb-0 fw-bold", children: "Working on it..." }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-0 text-muted small", children: n })
    ] })
  ] })
] });
Er.propTypes = {
  status: o.string.isRequired,
  isMinimized: o.bool.isRequired,
  onMinimizeToggle: o.func.isRequired
};
const Or = ({ isOpen: n, onClose: r, onApply: l, originalContent: i, suggestion: b, highlightedDiff: x }) => n ? /* @__PURE__ */ e.jsxs(Me, { onClose: r, title: "AI Content Suggestion", icon: /* @__PURE__ */ e.jsx(ot, { size: 20, className: "text-primary" }), size: "modal-xl", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
    /* @__PURE__ */ e.jsxs("ul", { className: "nav nav-tabs mb-3", role: "tablist", children: [
      /* @__PURE__ */ e.jsx("li", { className: "nav-item", role: "presentation", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "nav-link active",
          id: "preview-tab",
          "data-bs-toggle": "tab",
          "data-bs-target": "#preview-pane",
          type: "button",
          role: "tab",
          "aria-controls": "preview-pane",
          "aria-selected": "true",
          children: "Preview Changes"
        }
      ) }),
      /* @__PURE__ */ e.jsx("li", { className: "nav-item", role: "presentation", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "nav-link",
          id: "diff-tab",
          "data-bs-toggle": "tab",
          "data-bs-target": "#diff-pane",
          type: "button",
          role: "tab",
          "aria-controls": "diff-pane",
          "aria-selected": "false",
          children: "Highlight Changes"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "tab-content", children: [
      /* @__PURE__ */ e.jsx("div", { className: "tab-pane fade show active", id: "preview-pane", role: "tabpanel", "aria-labelledby": "preview-tab", children: /* @__PURE__ */ e.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-muted", children: "Original Content" }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: i } })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-success", children: "AI Suggestion" }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: b } })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "tab-pane fade", id: "diff-pane", role: "tabpanel", "aria-labelledby": "diff-tab", children: [
        /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-primary", children: "Highlighted Differences" }),
        /* @__PURE__ */ e.jsxs("p", { className: "small text-muted", children: [
          /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 me-2 rounded", style: { backgroundColor: "#d4edda" }, children: "Added content" }),
          /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 rounded", style: { backgroundColor: "#f8d7da" }, children: "Removed content" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: x } })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-secondary", onClick: r, children: "Cancel" }),
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: l, children: "Apply Suggestion" })
  ] })
] }) : null;
Or.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onApply: o.func.isRequired,
  originalContent: o.string,
  suggestion: o.string,
  highlightedDiff: o.string
};
const gt = He.memo(
  ({ onClick: n, title: r, command: l, activeStyles: i, disabled: b = !1, children: x }) => /* @__PURE__ */ e.jsx("button", { type: "button", onClick: n, onMouseDown: (g) => g.preventDefault(), className: `btn btn-outline-secondary ${i && i.has(l) ? "active" : ""}`, "data-bs-toggle": "tooltip", "data-bs-placement": "bottom", title: r, disabled: b, children: x })
);
gt.propTypes = { onClick: o.func.isRequired, title: o.string.isRequired, command: o.string, activeStyles: o.object, disabled: o.bool, children: o.node.isRequired };
gt.displayName = "StatusToolbarButton";
const zr = ({ wordCount: n, charCount: r, onToggleSource: l, showSource: i, onToggleFullScreen: b, isFullScreen: x }) => /* @__PURE__ */ e.jsxs("div", { className: "flex-shrink-0 p-2 border-top bg-light d-flex justify-content-between align-items-center small text-muted", children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "footer-text-area", children: [
      "Words: ",
      n
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "mx-2", children: "|" }),
    /* @__PURE__ */ e.jsxs("span", { className: "footer-text-area", children: [
      "Characters: ",
      r
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
    /* @__PURE__ */ e.jsx(gt, { title: "View HTML Source", onClick: l, children: /* @__PURE__ */ e.jsx(lr, { size: 16 }) }),
    /* @__PURE__ */ e.jsx(gt, { title: x ? "Exit Full Screen" : "Full Screen", onClick: b, children: x ? /* @__PURE__ */ e.jsx(Ct, { size: 16 }) : /* @__PURE__ */ e.jsx(cr, { size: 16 }) })
  ] })
] });
zr.propTypes = { wordCount: o.number.isRequired, charCount: o.number.isRequired, onToggleSource: o.func.isRequired, showSource: o.bool.isRequired, onToggleFullScreen: o.func.isRequired, isFullScreen: o.bool.isRequired, isPremium: o.bool };
const _o = () => /* @__PURE__ */ e.jsx("style", { children: '.futuristic-statusbar-v2{position:relative;width:98%;margin:10px auto 0;left:auto;transform:none;z-index:100;font-family:"Orbitron","Segoe UI",sans-serif;background:rgba(15,15,25,.8);margin-bottom:10px;color:var(--text-color,#e0e0e0);border:1px solid var(--border-color,rgba(138,43,226,.4));border-radius:12px;opacity:0}.futuristic-statusbar-v2.is-booted{opacity:1;transform:translateY(0)}.grid-background{position:absolute;top:0;left:0;right:0;bottom:0;background-image:linear-gradient(var(--glow-color,#00ffff) 1px,transparent 1px),linear-gradient(to right,var(--glow-color,#00ffff) 1px,transparent 1px);background-size:40px 40px;opacity:.05;animation:move-grid 20s linear infinite;z-index:1}@keyframes move-grid{from{background-position:0 0}to{background-position:40px 40px}}.statusbar-content{position:relative;display:flex;justify-content:space-between;align-items:center;padding:10px 25px;z-index:2}.corner-bracket{position:absolute;width:20px;height:20px;border-style:solid;border-color:var(--glow-color,#00ffff);opacity:0;transition:opacity 1s ease .5s}.futuristic-statusbar-v2.is-booted .corner-bracket{opacity:.5}.corner-bracket.top-left{top:-2px;left:-2px;border-width:2px 0 0 2px;border-radius:8px 0 0 0}.corner-bracket.top-right{top:-2px;right:-2px;border-width:2px 2px 0 0;border-radius:0 8px 0 0}.corner-bracket.bottom-left{bottom:-2px;left:-2px;border-width:0 0 2px 2px;border-radius:0 0 0 8px}.corner-bracket.bottom-right{bottom:-2px;right:-2px;border-width:0 2px 2px 0;border-radius:0 0 8px 0}.status-group-v2{display:flex;align-items:center;gap:24px}.data-readout{display:flex;align-items:center;gap:8px;color:#aab5c3}.data-icon{color:var(--glow-color,#00ffff);filter:drop-shadow(0 0 3px var(--glow-color,#00ffff))}.data-label{font-size:12px;font-weight:600;letter-spacing:1px;opacity:.6}.data-value{font-family:"Roboto Mono",monospace;font-size:16px;font-weight:700;color:#fff}.action-button{background:transparent;border:1px solid transparent;color:#aab5c3;width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;position:relative;transition:all .3s cubic-bezier(.25,.8,.25,1)}.action-button::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;border:1px solid var(--border-color,rgba(138,43,226,.4));transition:all .3s ease}.action-button:hover{color:#fff}.action-button:hover::before{transform:scale(1.2);opacity:0}.action-button:active{transform:scale(.9)}.futuristic-dropdown{position:relative}.futuristic-dropdown-menu{position:absolute;top:calc(100% + 8px);left:0;background:var(--bg-color);backdrop-filter:blur(12px) saturate(180%);border:1px solid var(--border-color);border-radius:8px;padding:8px;z-index:1001;width:max-content;min-width:150px;opacity:0;visibility:hidden;transform:translateY(10px) scale(.95);transform-origin:top left;transition:all var(--animation-speed) cubic-bezier(.16,1,.3,1)}.futuristic-dropdown-menu.show{opacity:1;visibility:visible;transform:translateY(0) scale(1)}.futuristic-dropdown-item{background:none;border:none;color:var(--text-color);padding:8px 12px;border-radius:6px;cursor:pointer;display:block;width:100%;text-align:left;transition:background var(--animation-speed) ease,color var(--animation-speed) ease}.futuristic-dropdown-item:hover{background:var(--hover-bg);color:#fff}.chevron-icon{transition:transform var(--animation-speed) ease}.chevron-icon.open{transform:rotate(180deg)}.futuristic-color-picker{display:grid;grid-template-columns:repeat(5,1fr);gap:10px 4px;width:160px}.color-swatch-hexagon{width:30px;height:34.64px;background:none;border:none;cursor:pointer;position:relative;transition:transform var(--animation-speed) ease}.color-swatch-hexagon:hover{transform:scale(1.15) rotate(10deg)}.hexagon-inner{position:absolute;top:0;left:0;width:100%;height:100%;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);border:1px solid rgba(255,255,255,.2)}.futuristic-emoji-picker{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.futuristic-emoji{font-size:24px;background:none;border:none;padding:4px;border-radius:8px;cursor:pointer;transition:background var(--animation-speed) ease,transform var(--animation-speed) ease}.futuristic-emoji:hover{background:var(--hover-bg);transform:scale(1.2)}' }), Sr = ({ wordCount: n, charCount: r, onToggleSource: l, isFullScreen: i, onToggleFullScreen: b }) => {
  const [x, g] = R(!1);
  return J(() => {
    const j = setTimeout(() => g(!0), 100);
    return () => clearTimeout(j);
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(_o, {}),
    /* @__PURE__ */ e.jsxs("div", { className: `futuristic-statusbar-v2 ${x ? "is-booted" : ""}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket top-left" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket top-right" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket bottom-left" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket bottom-right" }),
      /* @__PURE__ */ e.jsx("div", { className: "grid-background" }),
      /* @__PURE__ */ e.jsxs("div", { className: "statusbar-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "status-group-v2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "data-readout", title: "Word Count", children: [
            /* @__PURE__ */ e.jsx(Zr, { size: 16, className: "data-icon" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-label", children: "WORDS" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-value", children: n.toString().padStart(4, "0") })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "data-readout", title: "Character Count", children: [
            /* @__PURE__ */ e.jsx(Qr, { size: 16, className: "data-icon" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-label", children: "CHARS" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-value", children: r.toString().padStart(5, "0") })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "status-group-v2", children: [
          /* @__PURE__ */ e.jsx("button", { className: "action-button", title: "View HTML Source", onClick: l, children: /* @__PURE__ */ e.jsx(lr, { size: 18 }) }),
          /* @__PURE__ */ e.jsx("button", { className: "action-button", title: i ? "Exit Full Screen" : "Full Screen", onClick: b, children: i ? /* @__PURE__ */ e.jsx(Ct, { size: 18 }) : /* @__PURE__ */ e.jsx(cr, { size: 18 }) })
        ] })
      ] })
    ] })
  ] });
};
Sr.propTypes = { wordCount: o.number.isRequired, charCount: o.number.isRequired, onToggleSource: o.func.isRequired, onToggleFullScreen: o.func.isRequired, isFullScreen: o.bool.isRequired };
const $o = () => /* @__PURE__ */ e.jsx("style", { children: ".modern-statusbar{display:flex;justify-content:space-between;align-items:center;padding:6px 16px;font-size:13px;transition:background-color .3s ease,border-color .3s ease,color .3s ease;border-top:2px solid #1967d2}.statusbar-segment{display:flex;align-items:center;gap:12px}.statusbar-divider{opacity:.5}.statusbar-button{background:none;border:none;border-radius:6px;padding:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:background-color .2s ease,color .2s ease}.theme-light .modern-statusbar{background-color:#f8f9fa;border-color:#e0e0e0;color:#5f6368}.theme-light .statusbar-button{color:#5f6368}.theme-light .statusbar-button:hover{background-color:#f1f3f4;color:#202124}.theme-dark .modern-statusbar{background-color:#2c2d2f;border-color:#3c4043;color:#bdc1c6}.theme-dark .statusbar-button{color:#bdc1c6}.theme-dark .statusbar-button:hover{background-color:#3c4043;color:#e8eaed}" }), Lr = ({ wordCount: n, charCount: r, onToggleSource: l, isFullScreen: i, onToggleFullScreen: b }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx($o, {}),
  /* @__PURE__ */ e.jsxs("div", { className: "modern-statusbar", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "statusbar-segment", children: [
      /* @__PURE__ */ e.jsxs("span", { className: "statusbar-item", children: [
        "Words: ",
        n
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "statusbar-divider", children: "|" }),
      /* @__PURE__ */ e.jsxs("span", { className: "statusbar-item", children: [
        "Characters: ",
        r
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "statusbar-segment", children: [
      /* @__PURE__ */ e.jsx("button", { className: "statusbar-button", title: "View HTML Source", onClick: l, children: /* @__PURE__ */ e.jsx(lr, { size: 18 }) }),
      /* @__PURE__ */ e.jsx("button", { className: "statusbar-button", title: i ? "Exit Full Screen" : "Full Screen", onClick: b, children: i ? /* @__PURE__ */ e.jsx(Ct, { size: 18 }) : /* @__PURE__ */ e.jsx(cr, { size: 18 }) })
    ] })
  ] })
] });
Lr.propTypes = { wordCount: o.number.isRequired, charCount: o.number.isRequired, onToggleSource: o.func.isRequired, onToggleFullScreen: o.func.isRequired, isFullScreen: o.bool.isRequired };
const Ir = ({ theme: n, ...r }) => n === "modern" ? /* @__PURE__ */ e.jsx(Lr, { ...r }) : n === "futuristic" ? /* @__PURE__ */ e.jsx(Sr, { ...r }) : /* @__PURE__ */ e.jsx(zr, { ...r });
Ir.propTypes = { theme: o.oneOf(["classic", "modern", "futuristic"]) };
function Do(n) {
  if (typeof document > "u")
    return;
  const r = `bootstrap-css-scoped-${n}`, l = "bootstrap-js-cdn-script";
  if (!document.getElementById(r) && (fetch("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css").then((i) => {
    if (!i.ok)
      throw new Error("Network response was not ok fetching Bootstrap CSS.");
    return i.text();
  }).then((i) => {
    const b = `#${n}`, x = (u) => {
      const q = /([^{}]*)({[^{}]*})/g;
      return u.replace(q, (C, k, f) => {
        if (k.trim() === "")
          return C;
        if (k.trim().startsWith("@")) {
          const T = x(f.substring(1, f.length - 1));
          return `${k}{${T}}`;
        }
        return `${k.split(",").map((T) => {
          const N = T.trim();
          return N ? N === "body" || N === "html" || N === ":root" ? `${b}${N.replace(
            /body|html|:root/,
            ""
          )}` : N.match(/^\d{1,2}%$/) || N === "from" || N === "to" ? N : `${b} ${N}` : "";
        }).join(", ")} ${f}`;
      });
    }, g = x(i), j = document.createElement("style");
    j.id = r, j.textContent = g, document.head.appendChild(j);
  }).catch((i) => console.error("Failed to fetch and scope Bootstrap CSS:", i)), !document.getElementById(l))) {
    const i = document.createElement("script");
    i.id = l, i.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", i.crossOrigin = "anonymous", i.defer = !0, document.body.appendChild(i);
  }
}
const Ho = () => /* @__PURE__ */ e.jsx("style", { children: ".forma-text-source-view{min-height:60vh!important;max-height:75vh;resize:none;display:block;width:98%;height:100%;margin:auto;font-family:monospace;font-size:.875em;color:#f8f9fa;background-color:#212529;border:none;border-radius:0;outline:none;white-space:pre-wrap;word-wrap:break-word;overflow-x:hidden}.forma-text-editor-container{display:flex;flex-direction:column;border:1px solid #dee2e6;border-radius:.375rem;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);background-color:#fff;max-height:90vh;overflow:hidden!important}.forma-text-fullscreen{position:fixed;top:0;left:0;width:100vw;height:100vh!important;max-height:100vh!important;z-index:1050;border-radius:0;border:none}.forma-text-toolbar-container{flex-shrink:0;border-bottom:1px solid #dee2e6;background-color:#f8f9fa}.forma-text-editor-area{flex-grow:1;overflow:auto;position:relative;padding:15px}.forma-text-editor-content:focus{outline:none;box-shadow:none}.forma-text-editor-content blockquote{border-left:4px solid #ccc;margin-left:0;padding-left:1rem;color:#6c757d}.forma-text-editor-content pre{background-color:#f8f9fa;border:1px solid #dee2e6;padding:1rem;border-radius:.25rem;white-space:pre-wrap;word-break:break-all}.forma-text-image-wrapper{position:relative;display:inline-block;line-height:0}.forma-text-image-wrapper img{max-width:100%;height:auto}.forma-text-video-wrapper{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;background:#000;margin:1rem 0}.forma-text-video-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}.forma-text-selection-overlay{position:absolute;pointer-events:none;margin-top:13px;margin-left:13px;border:2px solid #0d6efd;z-index:10;border-radius:4px}.forma-text-context-toolbar{position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);display:flex;gap:4px;padding:15px;border-radius:6px;pointer-events:auto;z-index:11}.forma-text-context-toolbar button{background-color:#495057;color:#fff;border:none;border-radius:4px;padding:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background-color .2s}.forma-text-context-toolbar button:hover{background-color:#6c757d}.forma-text-context-toolbar button.forma-text-delete-btn{background-color:#dc3545}.forma-text-context-toolbar button.forma-text-delete-btn:hover{background-color:#c82333}.forma-text-resize-handle{position:absolute;bottom:-7px;right:-7px;width:14px;height:14px;background-color:#0d6efd;border:2px solid #fff;border-radius:50%;cursor:se-resize;pointer-events:auto;z-index:12}.ai-loading-popup{position:fixed;bottom:20px;right:20px;z-index:1100;width:350px;background-color:#fff;border-radius:.5rem;box-shadow:0 5px 15px rgba(0,0,0,.2);padding:1rem}.ai-loading-popup-minimized{position:fixed;bottom:20px;right:20px;z-index:1100;background-color:#fff;border-radius:.5rem;box-shadow:0 5px 15px rgba(0,0,0,.1);padding:.5rem 1rem;display:flex;align-items:center}.ai-preview-pane{height:400px;overflow-y:auto;border:1px solid #dee2e6;padding:1rem;border-radius:.25rem;background-color:#fff}.forma-text-diff-view ins{background-color:#d4edda;text-decoration:none}.forma-text-diff-view del{background-color:#f8d7da;text-decoration:line-through;color:#721c24}.forma-text-diff-view span{white-space:pre-wrap;word-break:break-word}.forma-text-diff-view br[data-original-break]{display:none}.modal .editor-primary{background-color:#4285f4!important;color:#fff!important;font-size:14px;border-radius:0}.modal .editor-secondary{border:1px solid #252525ff!important;color:#252525ff!important;font-size:14px;border-radius:0}" }), Mo = () => {
  let n = localStorage.getItem("deviceId");
  return n || (n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function(r) {
      var l = Math.random() * 16 | 0, i = r === "x" ? l : l & 3 | 8;
      return i.toString(16);
    }
  ), localStorage.setItem("deviceId", n)), n;
}, Po = (n) => {
  const [r, l] = R(!1), [i, b] = R(null), [x, g] = R(""), [j, u] = R({
    isOpen: !1,
    title: "",
    message: ""
  }), q = "TRIAL-KEY-7d1f2e9b";
  return J(() => {
    if (!i) {
      g("");
      return;
    }
    const k = io(i).exp * 1e3, f = setInterval(() => {
      const F = (/* @__PURE__ */ new Date()).getTime(), T = k - F;
      if (T < 0) {
        clearInterval(f), g("Trial Expired"), l(!1);
        return;
      }
      const N = Math.floor(
        T % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), ee = Math.floor(T % (1e3 * 60 * 60) / (1e3 * 60)), $ = Math.floor(T % (1e3 * 60) / 1e3);
      g(`Trial expires in: ${N}h ${ee}m ${$}s`);
    }, 1e3);
    return () => clearInterval(f);
  }, [i]), J(() => {
    (async (k) => {
      if (!k) {
        l(!1);
        return;
      }
      if (k === q) {
        if (i) return;
        try {
          const f = Mo(), F = await fetch(
            "https://text-editor-verification-api.vercel.app/api/activate-trial",
            { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ deviceId: f }) }
          ), T = await F.json();
          F.ok && T.sessionKey ? (b(T.sessionKey), l(!0)) : (l(!1), u({ isOpen: !0, title: "Trial Activation Failed", message: T.message || "Your free trial for this device has expired. Please purchase a premium key to continue." }));
        } catch {
          l(!1), u({ isOpen: !0, title: "Connection Error", message: "Could not connect to the server to activate the trial. Please check your internet connection and try again." });
        }
        return;
      }
      try {
        const f = await fetch(
          "https://text-editor-verification-api.vercel.app/api/verify-key",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ apiKey: k })
          }
        ), F = await f.json();
        f.ok && F.isValid ? (l(!0), b(null), g("")) : l(!1);
      } catch {
        l(!1);
      }
    })(n);
  }, [n, i]), {
    isPremium: r,
    trialExpiresIn: x,
    modalInfo: j,
    closeModal: () => u({ isOpen: !1, title: "", message: "" })
  };
}, Ar = ({ isOpen: n, onClose: r, title: l, message: i }) => n ? /* @__PURE__ */ e.jsxs(Me, { onClose: r, title: l, icon: /* @__PURE__ */ e.jsx(eo, { size: 20, className: "text-primary" }), children: [
  /* @__PURE__ */ e.jsx("div", { className: "modal-body p-4", children: /* @__PURE__ */ e.jsx("p", { children: i }) }),
  /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
    " ",
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: r, children: "OK" })
  ] })
] }) : null;
Ar.propTypes = { isOpen: o.bool, onClose: o.func, title: o.string, message: o.string };
function qo({
  content: n = "",
  setContent: r = () => {
  },
  geminiApiKey: l = "",
  parentEditorClass: i = "",
  toolBarClass: b = "",
  textContentClass: x = "",
  theme: g = "classic",
  premiumApiKey: j = ""
}) {
  const [u] = R(
    `forma-text-editor-${Math.random().toString(36).substring(2, 9)}`
  ), { isPremium: q, modalInfo: C, closeModal: k } = Po(j), f = Q(null), F = Q(null), T = Q(!1), [N, ee] = R(/* @__PURE__ */ new Set()), [$, p] = R({ words: 0, chars: 0 }), [d, S] = R(!1), [_, Y] = R(!1), [te, re] = R({}), [v, I] = R(!1), [X, oe] = R({ text: "", href: "" }), [W, K] = R(null), [ie, ve] = R(!1), [Se, Le] = R(!1), [nt, Re] = R(!1), [Pe, Ie] = R(""), [it, qe] = R(""), [Be, Ae] = R(!1), [Ue, je] = R(""), [Te, Ee] = R(!1), [se, Ce] = R(null), [Ve, Oe] = R(null), [fe, ue] = R(null);
  J(() => {
    Do(u);
  }, [u]);
  const ne = V(() => {
    f.current && (T.current = !0, r(f.current.innerHTML));
  }, [r]), be = V(() => {
    const c = window.getSelection();
    if (c.rangeCount > 0) {
      const a = c.getRangeAt(0);
      f.current && f.current.contains(a.commonAncestorContainer) && (F.current = a);
    }
  }, []), ce = V(() => {
    if (F.current) {
      const c = window.getSelection();
      c.removeAllRanges(), c.addRange(F.current);
    }
  }, []);
  J(() => {
    if (T.current) {
      T.current = !1;
      return;
    }
    f.current && !d && n !== f.current.innerHTML && (f.current.innerHTML = n || "");
  }, [n, d]);
  const wt = V(
    (c) => {
      const a = d ? c.target.value : c.currentTarget.innerHTML;
      T.current = !0, r(a);
    },
    [d, r]
  );
  J(() => {
    const c = document.createElement("div");
    c.innerHTML = n || "";
    const a = c.textContent || "", m = a.trim().split(/\s+/).filter(Boolean).length;
    p({ words: m, chars: a.length });
  }, [n]);
  const we = V(() => {
    var y;
    const c = /* @__PURE__ */ new Set(), a = {}, m = window.getSelection();
    if ([
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
    ].forEach((L) => {
      document.queryCommandState(L) && c.add(L);
    }), m.rangeCount > 0 && m.anchorNode) {
      const L = m.anchorNode.nodeType === 3 ? m.anchorNode.parentElement : m.anchorNode;
      if ((y = f.current) != null && y.contains(L)) {
        const B = window.getComputedStyle(L);
        a.fontName = B.fontFamily.split(",")[0].replace(/"/g, "").trim(), a.fontSize = B.fontSize, a.lineHeight = B.lineHeight;
        let U = L;
        for (; U && U !== f.current; ) {
          const me = U.tagName.toLowerCase();
          if ([
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "pre"
          ].includes(me)) {
            a.formatBlock = me;
            break;
          }
          U = U.parentElement;
        }
      }
    }
    ee(c), re(a);
  }, []), Ye = (c) => {
    if (!c.rangeCount) return null;
    let a = c.getRangeAt(0).startContainer;
    for (a = a.nodeType === 3 ? a.parentNode : a; a && a !== f.current; ) {
      const m = window.getComputedStyle(a).display;
      if (m === "block" || m.includes("table") || m.includes("list-item"))
        return a;
      a = a.parentNode;
    }
    return f.current;
  }, de = V(
    (c, a = null) => {
      var y;
      (y = f.current) == null || y.focus(), ce(), document.execCommand("styleWithCSS", !1, !0);
      const m = window.getSelection();
      if (!m || m.rangeCount === 0) return;
      const O = ["fontName", "fontSize", "foreColor", "backColor"];
      if (m.isCollapsed && O.includes(c)) {
        const L = m.getRangeAt(0), B = document.createElement("span");
        if (c === "fontName")
          B.style.fontFamily = a;
        else if (c === "foreColor")
          B.style.color = a;
        else if (c === "backColor")
          B.style.backgroundColor = a;
        else if (c === "fontSize") {
          const U = {
            1: "0.75rem",
            2: "0.875rem",
            3: "1rem",
            4: "1.125rem",
            5: "1.5rem",
            6: "2rem",
            7: "3rem"
          };
          B.style.fontSize = U[a] || "inherit";
        }
        B.innerHTML = "\uFEFF", L.insertNode(B), L.selectNodeContents(B), L.collapse(!1), m.removeAllRanges(), m.addRange(L);
      } else
        document.execCommand(c, !1, a);
      ne(), we();
    },
    [ce, ne, we]
  ), yt = V(
    (c) => {
      var O;
      (O = f.current) == null || O.focus(), ce();
      const a = window.getSelection(), m = Ye(a);
      m && (m.style.lineHeight = c), ne(), we();
    },
    [ce, ne, we]
  );
  J(() => {
    const c = () => {
      const a = window.getSelection();
      if (a.rangeCount > 0) {
        const m = a.getRangeAt(0);
        f.current && f.current.contains(m.commonAncestorContainer) && (be(), we());
      }
    };
    return document.addEventListener("selectionchange", c), () => document.removeEventListener("selectionchange", c);
  }, [be, we]);
  const st = V((c) => {
    const a = c.target, m = a.closest("img"), O = a.closest("table.forma-text-table");
    if (m && f.current.contains(m)) {
      Oe(null), Ce(m);
      const y = m.getBoundingClientRect(), L = f.current.getBoundingClientRect();
      ue({
        top: y.top - L.top + f.current.scrollTop,
        left: y.left - L.left + f.current.scrollLeft,
        width: y.width,
        height: y.height
      });
    } else if (O && f.current.contains(O)) {
      Ce(null), Oe(O);
      const y = O.getBoundingClientRect(), L = f.current.getBoundingClientRect();
      ue({
        top: y.top - L.top + f.current.scrollTop,
        left: y.left - L.left + f.current.scrollLeft,
        width: y.width,
        height: y.height
      });
    } else
      Ce(null), Oe(null), ue(null);
  }, []), at = V(() => {
    setTimeout(() => {
      var c;
      document.activeElement !== f.current && !((c = f.current) != null && c.contains(document.activeElement)) && (Ce(null), Oe(null), ue(null));
    }, 100);
  }, []), _e = V(() => {
    var m;
    be();
    const c = window.getSelection(), a = (m = c.anchorNode) == null ? void 0 : m.parentElement.closest("a");
    (a == null ? void 0 : a.tagName) === "A" ? (oe({
      text: a.textContent,
      href: a.href
    }), K(a)) : (oe({ text: c.toString(), href: "" }), K(null)), I(!0);
  }, [be]), kt = V(
    (c) => {
      if (c.ctrlKey || c.metaKey) {
        const a = {
          b: "bold",
          i: "italic",
          u: "underline",
          k: () => _e(),
          z: "undo",
          y: "redo"
        };
        a[c.key] && (c.preventDefault(), typeof a[c.key] == "function" ? a[c.key]() : de(a[c.key]));
      }
    },
    [de, _e]
  ), lt = V(
    (c) => {
      if (I(!1), ce(), f.current.focus(), W)
        W.href = c.href, W.textContent = c.text;
      else {
        const a = `<a href="${c.href}" target="_blank" rel="noopener noreferrer">${c.text}</a>`;
        de("insertHTML", a);
      }
      K(null), ne();
    },
    [W, ce, de, ne]
  ), ct = V(
    (c) => {
      const a = c.target.files[0];
      if (!a) return;
      const m = new FileReader();
      m.onload = (O) => {
        const y = `<span class="forma-text-image-wrapper" contenteditable="false"><img src="${O.target.result}" style="width: 250px; height: auto;" alt=""/></span>`;
        de("insertHTML", y);
      }, m.readAsDataURL(a), c.target.value = "";
    },
    [de]
  ), Ft = V(
    (c) => {
      const a = c.target.files[0];
      if (!a) return;
      const m = new FileReader();
      m.onload = (O) => {
        Mr.convertToHtml({ arrayBuffer: O.target.result }).then((y) => r(y.value)).catch(
          (y) => console.error("Error converting .docx to HTML:", y)
        );
      }, m.readAsArrayBuffer(a), c.target.value = "";
    },
    [r]
  ), Nt = V(
    (c) => {
      if (ve(!1), !c) return;
      const m = ((y) => {
        let L;
        return y.includes("youtube.com/watch?v=") ? L = y.split("v=")[1].split("&")[0] : y.includes("youtu.be/") ? L = y.split("youtu.be/")[1].split("?")[0] : y.includes("vimeo.com/") && (L = y.split("vimeo.com/")[1].split("?")[0]), y.includes("youtube") || y.includes("youtu.be") ? `https://www.youtube.com/embed/${L}` : y.includes("vimeo") ? `https://player.vimeo.com/video/${L}` : null;
      })(c);
      if (!m) {
        alert("Invalid video URL. Please use a valid YouTube or Vimeo link.");
        return;
      }
      ce(), f.current.focus();
      const O = `<div class="forma-text-video-wrapper" contenteditable="false"><iframe src="${m}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;
      de("insertHTML", O), ne();
    },
    [ce, de, ne]
  ), Rt = V(
    (c) => {
      Le(!1);
      let a = '<table class="forma-text-table" style="width:90%; border-collapse: collapse; border: 1px solid #a0a0a0ff; margin: 1rem auto; "><tbody>';
      for (let m = 0; m < c.rows; m++) {
        a += "<tr>";
        for (let O = 0; O < c.cols; O++)
          a += '<td style="border: 1px solid #afafafff; padding: 0.75rem; minWidth: 40px;"><br></td>';
        a += "</tr>";
      }
      a += "</tbody></table>", de("insertHTML", a);
    },
    [de]
  ), We = V(
    (c) => {
      const a = se == null ? void 0 : se.parentElement;
      if (!a || !a.classList.contains("forma-text-image-wrapper"))
        return;
      let m = a.parentElement;
      for (; m && m !== f.current; ) {
        const O = window.getComputedStyle(m).display;
        if (O === "block" || O === "flex" || O === "grid")
          break;
        m = m.parentElement;
      }
      switch (a.style.float = "", a.style.display = "inline-block", a.style.marginLeft = "", a.style.marginRight = "", m && (m.style.textAlign = ""), c) {
        case "center":
          m ? m.style.textAlign = "center" : (a.style.display = "block", a.style.marginLeft = "auto", a.style.marginRight = "auto");
          break;
        case "left":
          m && (m.style.textAlign = "left"), a.style.float = "left", a.style.marginRight = "1rem";
          break;
        case "right":
          m && (m.style.textAlign = "right"), a.style.float = "right", a.style.marginLeft = "1rem";
          break;
        default:
          m && (m.style.textAlign = "");
          break;
      }
      ne();
    },
    [se, ne]
  ), Tt = V(() => {
    se && (se.parentElement.remove(), Ce(null)), Ve && (Ve.remove(), Oe(null)), ue(null), ne();
  }, [se, Ve, ne]), Et = V(
    (c) => {
      c.preventDefault();
      const a = c.clientX, m = se.offsetWidth, O = (L) => {
        const B = m + (L.clientX - a);
        if (B > 40) {
          se.style.width = `${B}px`, se.style.height = "auto";
          const U = se.getBoundingClientRect(), me = f.current.getBoundingClientRect();
          ue({
            top: U.top - me.top + f.current.scrollTop,
            left: U.left - me.left + f.current.scrollLeft,
            width: U.width,
            height: U.height
          });
        }
      }, y = () => {
        document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", y), ne();
      };
      document.addEventListener("mousemove", O), document.addEventListener("mouseup", y);
    },
    [se, ne]
  ), Ot = (c, a) => {
    const m = new Pr(), O = m.diff_main(c, a);
    m.diff_cleanupSemantic(O);
    let y = "";
    for (const [L, B] of O) {
      const U = B.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "&para;<br>");
      switch (L) {
        case Ur:
          y += `<ins style="background-color: #d4edda; text-decoration: none;">${U}</ins>`;
          break;
        case Br:
          y += `<del style="background-color: #f8d7da; text-decoration: none;">${U}</del>`;
          break;
        case qr:
          y += `<span>${U}</span>`;
          break;
      }
    }
    return y;
  }, Ke = async () => {
    var y, L, B, U, me;
    if (!n.trim() || Be) return;
    Ae(!0), Ie(""), Ee(!1);
    const c = [
      "Analyzing...",
      "Generating suggestions...",
      "Optimizing flow...",
      "Finalizing..."
    ];
    let a = 0;
    je(c[a]);
    const m = setInterval(() => {
      a = (a + 1) % c.length, je(c[a]);
    }, 2e3);
    let O = `
<TASK>
You are a content editor with experience in HTML formatting and basic SEO best practices. Your job is to clean up, format, and slightly improve the provided HTML content.
</TASK>

<INSTRUCTIONS>
1. **Improve Readability and Style:**
   * Fix spelling, grammar, and punctuation mistakes.
   * Add simple inline CSS for basic styling (example: font size, spacing).
   * Keep the tone clear and professional.

2. **Basic SEO Enhancements:**
   * Make sure there is only one main \`<h1>\`.
   * Use headings for sections and sub-sections.

3. **Content Rules:**
   * Do not change the meaning of the text.
   * Keep styling simple with inline CSS only.
</INSTRUCTIONS>

<OUTPUT_RULES>
- Output **only the HTML code**, no explanations or extra text.
- Do not include \`<html>\`, \`<head>\`, \`<body>\`, \`<title>\`, \`<meta>\`, or \`<script>\` tags.
</OUTPUT_RULES>

<CONTENT_TO_EDIT>
${n}
</CONTENT_TO_EDIT>
`;
    q && (O = `
<TASK>
You are a world-class content editor, Generative AI SEO expert, and a senior SEO strategist with elite proficiency in **English, Japanese, Hindi, French, Spanish, Sinhalese,Arabic and Chinese **. Your task is to reformat, stylish, and enhance the provided HTML content.
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
${n}
</CONTENT_TO_IMPROVE>
`);
    try {
      const Ge = {
        contents: [{ role: "user", parts: [{ text: O }] }]
      }, ut = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${l}`, $e = await fetch(ut, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Ge)
      });
      if (!$e.ok) throw new Error(`API call failed: ${$e.status}`);
      const Je = (me = (U = (B = (L = (y = (await $e.json()).candidates) == null ? void 0 : y[0]) == null ? void 0 : L.content) == null ? void 0 : B.parts) == null ? void 0 : U[0]) == null ? void 0 : me.text;
      if (Je)
        Ie(Je), qe(Ot(n, Je)), Re(!0);
      else
        throw new Error("Invalid AI response format");
    } catch (Ge) {
      qe(`<p>Sorry, an error occurred. ${Ge.message}</p>`), Re(!0);
    } finally {
      clearInterval(m), Ae(!1), je("");
    }
  }, dt = () => {
    r(Pe), Re(!1), Ie(""), qe("");
  }, ye = [
    "forma-text-editor-container",
    i,
    _ ? "forma-text-fullscreen" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Ho, {}),
    /* @__PURE__ */ e.jsxs("div", { id: u, className: ye, "data-theme": g, children: [
      /* @__PURE__ */ e.jsx("div", { className: `forma-text-toolbar-container ${b}`, children: /* @__PURE__ */ e.jsx(
        kr,
        {
          theme: g,
          currentStyles: te,
          applyStyle: de,
          applyLineHeight: yt,
          activeStyles: N,
          onOpenLinkModal: _e,
          onImageUpload: ct,
          onDocxUpload: Ft,
          onVideoModalOpen: () => {
            be(), ve(!0);
          },
          onTableModalOpen: () => {
            be(), Le(!0);
          },
          onAiRefactor: Ke,
          content: n,
          isGenerating: Be,
          isAiLoadingMinimized: Te
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-editor-area", onClick: st, onBlur: at, children: [
        /* @__PURE__ */ e.jsx(Fr, { editorRef: f, content: n, showSource: d, onContentChange: wt, onKeyDown: kt, textContentClass: `forma-text-editor-content ${x}` }),
        fe && !d && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "forma-text-selection-overlay",
            style: {
              top: `${fe.top}px`,
              left: `${fe.left}px`,
              width: `${fe.width}px`,
              height: `${fe.height}px`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-context-toolbar", children: [
                se && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx("button", { title: "Align Left", onClick: () => We("left"), children: /* @__PURE__ */ e.jsx(to, { size: 16 }) }),
                  /* @__PURE__ */ e.jsx("button", { title: "Align Center", onClick: () => We("center"), children: /* @__PURE__ */ e.jsx(ro, { size: 16 }) }),
                  /* @__PURE__ */ e.jsx("button", { title: "Align Right", onClick: () => We("right"), children: /* @__PURE__ */ e.jsx(oo, { size: 16 }) })
                ] }),
                /* @__PURE__ */ e.jsx("button", { title: "Delete", className: "forma-text-delete-btn rounded-5", onClick: Tt, children: /* @__PURE__ */ e.jsx(no, { size: 16 }) })
              ] }),
              se && /* @__PURE__ */ e.jsx("div", { className: "forma-text-resize-handle ", onMouseDown: Et })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(Ir, { theme: g, wordCount: $.words, charCount: $.chars, onToggleSource: () => S(!d), showSource: d, onToggleFullScreen: () => Y(!_), isFullScreen: _ }),
      Be && /* @__PURE__ */ e.jsx(Er, { status: Ue, isMinimized: Te, onMinimizeToggle: () => Ee(!Te) }),
      /* @__PURE__ */ e.jsx(Ar, { isOpen: C.isOpen, onClose: k, title: C.title, message: C.message }),
      /* @__PURE__ */ e.jsx(Nr, { isOpen: v, onClose: () => I(!1), onApply: lt, initialData: X, isEditing: !!W }),
      /* @__PURE__ */ e.jsx(Rr, { isOpen: ie, onClose: () => ve(!1), onInsert: Nt }),
      /* @__PURE__ */ e.jsx(Tr, { isOpen: Se, onClose: () => Le(!1), onCreate: Rt }),
      /* @__PURE__ */ e.jsx(Or, { isOpen: nt, onClose: () => Re(!1), onApply: dt, originalContent: n, suggestion: Pe, highlightedDiff: it })
    ] })
  ] });
}
qo.propTypes = { content: o.string, setContent: o.func, geminiApiKey: o.string, parentEditorClass: o.string, toolBarClass: o.string, textContentClass: o.string, theme: o.string, premiumApiKey: o.string };
export {
  qo as default
};
//# sourceMappingURL=forma-text.js.map
