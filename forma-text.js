import Ie, { useState as F, useRef as J, useEffect as re, useCallback as P } from "react";
import o from "prop-types";
import Lr from "mammoth";
import { diff_match_patch as Sr, DIFF_EQUAL as Ir, DIFF_DELETE as Ar, DIFF_INSERT as _r } from "diff-match-patch";
import { Palette as Rt, Highlighter as Nt, Smile as Ft, Undo as Tt, Redo as Et, Pilcrow as it, Type as Ot, ArrowDownUp as zt, Bold as Lt, Italic as St, Underline as It, Strikethrough as At, Superscript as _t, Subscript as Dt, AlignLeft as Mt, AlignCenter as $t, AlignRight as qt, ListOrdered as Bt, List as Pt, Outdent as Ht, Indent as Ut, Quote as Vt, Code as Yt, Link as Pe, Minus as Wt, Eraser as Gt, Image as Kt, Video as st, Table as at, Columns as jt, FileUp as Xt, Sparkles as He, ChevronDown as sr, GripVertical as Dr, ExternalLink as Mr, ChevronsDownUp as $r, Minimize as lt, CodeXml as Jt, Maximize as Zt, Sigma as qr, Binary as Br, AlignStartVertical as Pr, AlignCenterVertical as Hr, AlignEndVertical as Ur, Trash2 as Vr } from "lucide-react";
var Ct = { exports: {} }, qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Yr() {
  if (or) return qe;
  or = 1;
  var r = Ie, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(v, b, D) {
    var N, A = {}, S = null, H = null;
    D !== void 0 && (S = "" + D), b.key !== void 0 && (S = "" + b.key), b.ref !== void 0 && (H = b.ref);
    for (N in b) a.call(b, N) && !f.hasOwnProperty(N) && (A[N] = b[N]);
    if (v && v.defaultProps) for (N in b = v.defaultProps, b) A[N] === void 0 && (A[N] = b[N]);
    return { $$typeof: i, type: v, key: S, ref: H, props: A, _owner: c.current };
  }
  return qe.Fragment = s, qe.jsx = x, qe.jsxs = x, qe;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Wr() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ie, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), j = Symbol.iterator, p = "@@iterator";
    function U(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = j && t[j] || t[p];
      return typeof n == "function" ? n : null;
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var n = arguments.length, d = new Array(n > 1 ? n - 1 : 0), h = 1; h < n; h++)
          d[h - 1] = arguments[h];
        ve("error", t, d);
      }
    }
    function ve(t, n, d) {
      {
        var h = M.ReactDebugCurrentFrame, R = h.getStackAddendum();
        R !== "" && (n += "%s", d = d.concat([R]));
        var T = d.map(function(y) {
          return String(y);
        });
        T.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var je = !1, w = !1, K = !1, oe = !1, Ae = !1, Ve;
    Ve = Symbol.for("react.module.reference");
    function _e(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === f || Ae || t === c || t === D || t === N || oe || t === H || je || w || K || typeof t == "object" && t !== null && (t.$$typeof === S || t.$$typeof === A || t.$$typeof === x || t.$$typeof === v || t.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ve || t.getModuleId !== void 0));
    }
    function ct(t, n, d) {
      var h = t.displayName;
      if (h)
        return h;
      var R = n.displayName || n.name || "";
      return R !== "" ? d + "(" + R + ")" : d;
    }
    function ye(t) {
      return t.displayName || "Context";
    }
    function ne(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case D:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            var n = t;
            return ye(n) + ".Consumer";
          case x:
            var d = t;
            return ye(d._context) + ".Provider";
          case b:
            return ct(t, t.render, "ForwardRef");
          case A:
            var h = t.displayName || null;
            return h !== null ? h : ne(t.type) || "Memo";
          case S: {
            var R = t, T = R._payload, y = R._init;
            try {
              return ne(y(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, xe = 0, ke, Ye, Re, Ne, De, We, Fe;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Ge() {
      {
        if (xe === 0) {
          ke = console.log, Ye = console.info, Re = console.warn, Ne = console.error, De = console.group, We = console.groupCollapsed, Fe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        xe++;
      }
    }
    function W() {
      {
        if (xe--, xe === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, t, {
              value: ke
            }),
            info: Q({}, t, {
              value: Ye
            }),
            warn: Q({}, t, {
              value: Re
            }),
            error: Q({}, t, {
              value: Ne
            }),
            group: Q({}, t, {
              value: De
            }),
            groupCollapsed: Q({}, t, {
              value: We
            }),
            groupEnd: Q({}, t, {
              value: Fe
            })
          });
        }
        xe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = M.ReactCurrentDispatcher, Ce;
    function ie(t, n, d) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (R) {
            var h = R.stack.trim().match(/\n( *(at )?)/);
            Ce = h && h[1] || "";
          }
        return `
` + Ce + t;
      }
    }
    var le = !1, te;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      te = new G();
    }
    function ce(t, n) {
      if (!t || le)
        return "";
      {
        var d = te.get(t);
        if (d !== void 0)
          return d;
      }
      var h;
      le = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = ae.current, ae.current = null, Ge();
      try {
        if (n) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (Z) {
              h = Z;
            }
            Reflect.construct(t, [], y);
          } else {
            try {
              y.call();
            } catch (Z) {
              h = Z;
            }
            t.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            h = Z;
          }
          t();
        }
      } catch (Z) {
        if (Z && h && typeof Z.stack == "string") {
          for (var C = Z.stack.split(`
`), X = h.stack.split(`
`), _ = C.length - 1, q = X.length - 1; _ >= 1 && q >= 0 && C[_] !== X[q]; )
            q--;
          for (; _ >= 1 && q >= 0; _--, q--)
            if (C[_] !== X[q]) {
              if (_ !== 1 || q !== 1)
                do
                  if (_--, q--, q < 0 || C[_] !== X[q]) {
                    var ee = `
` + C[_].replace(" at new ", " at ");
                    return t.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, ee), ee;
                  }
                while (_ >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        le = !1, ae.current = T, W(), Error.prepareStackTrace = R;
      }
      var Se = t ? t.displayName || t.name : "", we = Se ? ie(Se) : "";
      return typeof t == "function" && te.set(t, we), we;
    }
    function se(t, n, d) {
      return ce(t, !1);
    }
    function dt(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function de(t, n, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ce(t, dt(t));
      if (typeof t == "string")
        return ie(t);
      switch (t) {
        case D:
          return ie("Suspense");
        case N:
          return ie("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case b:
            return se(t.render);
          case A:
            return de(t.type, n, d);
          case S: {
            var h = t, R = h._payload, T = h._init;
            try {
              return de(T(R), n, d);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Ke = {}, Xe = M.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var n = t._owner, d = de(t.type, t._source, n ? n.type : null);
        Xe.setExtraStackFrame(d);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Me(t, n, d, h, R) {
      {
        var T = Function.call.bind(V);
        for (var y in t)
          if (T(t, y)) {
            var C = void 0;
            try {
              if (typeof t[y] != "function") {
                var X = Error((h || "React class") + ": " + d + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              C = t[y](n, y, h, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              C = _;
            }
            C && !(C instanceof Error) && (Ee(R), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", d, y, typeof C), Ee(null)), C instanceof Error && !(C.message in Ke) && (Ke[C.message] = !0, Ee(R), $("Failed %s type: %s", d, C.message), Ee(null));
          }
      }
    }
    var ut = Array.isArray;
    function $e(t) {
      return ut(t);
    }
    function pt(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, d = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function ft(t) {
      try {
        return Je(t), !1;
      } catch {
        return !0;
      }
    }
    function Je(t) {
      return "" + t;
    }
    function Ze(t) {
      if (ft(t))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(t)), Je(t);
    }
    var Oe = M.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, et;
    function bt(t) {
      if (V.call(t, "ref")) {
        var n = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function xt(t) {
      if (V.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ht(t, n) {
      typeof t.ref == "string" && Oe.current;
    }
    function u(t, n) {
      {
        var d = function() {
          Qe || (Qe = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function l(t, n) {
      {
        var d = function() {
          et || (et = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var m = function(t, n, d, h, R, T, y) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: t,
        key: n,
        ref: d,
        props: y,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function k(t, n, d, h, R) {
      {
        var T, y = {}, C = null, X = null;
        d !== void 0 && (Ze(d), C = "" + d), xt(n) && (Ze(n.key), C = "" + n.key), bt(n) && (X = n.ref, ht(n, R));
        for (T in n)
          V.call(n, T) && !mt.hasOwnProperty(T) && (y[T] = n[T]);
        if (t && t.defaultProps) {
          var _ = t.defaultProps;
          for (T in _)
            y[T] === void 0 && (y[T] = _[T]);
        }
        if (C || X) {
          var q = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          C && u(y, q), X && l(y, q);
        }
        return m(t, C, X, R, h, Oe.current, y);
      }
    }
    var g = M.ReactCurrentOwner, I = M.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var n = t._owner, d = de(t.type, t._source, n ? n.type : null);
        I.setExtraStackFrame(d);
      } else
        I.setExtraStackFrame(null);
    }
    var L;
    L = !1;
    function B(t) {
      return typeof t == "object" && t !== null && t.$$typeof === i;
    }
    function ue() {
      {
        if (g.current) {
          var t = ne(g.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function gt(t) {
      return "";
    }
    var ze = {};
    function Qt(t) {
      {
        var n = ue();
        if (!n) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (n = `

Check the top-level render call using <` + d + ">.");
        }
        return n;
      }
    }
    function Le(t, n) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = Qt(n);
        if (ze[d])
          return;
        ze[d] = !0;
        var h = "";
        t && t._owner && t._owner !== g.current && (h = " It was passed a child from " + ne(t._owner.type) + "."), Y(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, h), Y(null);
      }
    }
    function er(t, n) {
      {
        if (typeof t != "object")
          return;
        if ($e(t))
          for (var d = 0; d < t.length; d++) {
            var h = t[d];
            B(h) && Le(h, n);
          }
        else if (B(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = U(t);
          if (typeof R == "function" && R !== t.entries)
            for (var T = R.call(t), y; !(y = T.next()).done; )
              B(y.value) && Le(y.value, n);
        }
      }
    }
    function kr(t) {
      {
        var n = t.type;
        if (n == null || typeof n == "string")
          return;
        var d;
        if (typeof n == "function")
          d = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === A))
          d = n.propTypes;
        else
          return;
        if (d) {
          var h = ne(n);
          Me(d, t.props, "prop", h, t);
        } else if (n.PropTypes !== void 0 && !L) {
          L = !0;
          var R = ne(n);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(t) {
      {
        for (var n = Object.keys(t.props), d = 0; d < n.length; d++) {
          var h = n[d];
          if (h !== "children" && h !== "key") {
            Y(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var tr = {};
    function rr(t, n, d, h, R, T) {
      {
        var y = _e(t);
        if (!y) {
          var C = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = gt();
          X ? C += X : C += ue();
          var _;
          t === null ? _ = "null" : $e(t) ? _ = "array" : t !== void 0 && t.$$typeof === i ? (_ = "<" + (ne(t.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, C);
        }
        var q = k(t, n, d, R, T);
        if (q == null)
          return q;
        if (y) {
          var ee = n.children;
          if (ee !== void 0)
            if (h)
              if ($e(ee)) {
                for (var Se = 0; Se < ee.length; Se++)
                  er(ee[Se], t);
                Object.freeze && Object.freeze(ee);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(ee, t);
        }
        if (V.call(n, "key")) {
          var we = ne(t), Z = Object.keys(n).filter(function(zr) {
            return zr !== "key";
          }), vt = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!tr[we + vt]) {
            var Or = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, vt, we, Or, we), tr[we + vt] = !0;
          }
        }
        return t === a ? Rr(q) : kr(q), q;
      }
    }
    function Nr(t, n, d) {
      return rr(t, n, d, !0);
    }
    function Fr(t, n, d) {
      return rr(t, n, d, !1);
    }
    var Tr = Fr, Er = Nr;
    Be.Fragment = a, Be.jsx = Tr, Be.jsxs = Er;
  }()), Be;
}
process.env.NODE_ENV === "production" ? Ct.exports = Yr() : Ct.exports = Wr();
var e = Ct.exports;
const Gr = () => /* @__PURE__ */ e.jsx("style", { children: `
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
 
            
            
            ` }), E = Ie.memo(
  ({ onClick: r, title: i, command: s, activeStyles: a, disabled: c = !1, children: f }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Gr, {}),
    /* @__PURE__ */ e.jsx("div", { className: "forma-text-classic-tooltip-container", children: /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: r,
        onMouseDown: (x) => x.preventDefault(),
        className: `btn btn-outline-secondary ${a && a.has(s) ? "active" : ""}`,
        "data-bs-toggle": "tooltip",
        "data-bs-placement": "bottom",
        title: i,
        disabled: c,
        children: [
          f,
          /* @__PURE__ */ e.jsx("span", { className: "forma-text-classic-tooltip", children: i })
        ]
      }
    ) })
  ] })
);
E.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  command: o.string,
  activeStyles: o.object,
  disabled: o.bool,
  children: o.node.isRequired
};
E.displayName = "ToolbarButton";
const be = ({ title: r, icon: i, children: s }) => {
  const [a, c] = F(!1), f = J(null);
  return re(() => {
    const x = (v) => {
      f.current && !f.current.contains(v.target) && c(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "btn-group", ref: f, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => c(!a),
        onMouseDown: (x) => x.preventDefault(),
        className: "btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1 py-2",
        "aria-expanded": a,
        children: i
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `dropdown-menu ${a ? "show" : ""}`,
        onClick: (x) => {
          x.target.closest("button") && c(!1);
        },
        children: s
      }
    )
  ] });
};
be.propTypes = {
  title: o.string.isRequired,
  icon: o.node.isRequired,
  children: o.node.isRequired
};
const Kr = [
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
], wt = ({ command: r, applyStyle: i }) => {
  const s = r === "foreColor" ? "Text Color" : "Highlight Color", a = r === "foreColor" ? /* @__PURE__ */ e.jsx(Rt, { size: 16 }) : /* @__PURE__ */ e.jsx(Nt, { size: 16 });
  return /* @__PURE__ */ e.jsx(be, { title: s, icon: a, children: /* @__PURE__ */ e.jsx("div", { className: "p-2 d-flex flex-wrap gap-1", style: { width: "160px" }, children: Kr.map((c) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "color-swatch",
      style: { backgroundColor: c },
      onClick: () => i(r, c),
      "aria-label": c
    },
    c
  )) }) });
};
wt.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired
};
const Xr = [
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
], ar = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(be, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(Ft, { size: 16 }), children: /* @__PURE__ */ e.jsx(
  "div",
  {
    className: "p-2 d-flex flex-wrap gap-1",
    style: { maxHeight: "200px", width: "250px", overflowY: "auto" },
    children: Xr.map((i) => /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "btn btn-sm btn-light fs-5",
        onClick: () => r("insertText", i),
        children: i
      },
      i
    ))
  }
) });
ar.propTypes = {
  applyStyle: o.func.isRequired
};
const Jr = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], Zr = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, Qr = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, eo = {
  None: "0.5",
  Single: "1",
  1.15: "1.15",
  1.5: "1.5",
  Double: "2"
}, tt = "width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 1rem; position: relative; margin: 1rem 0;", pe = "padding: 1rem; vertical-align: top;", ir = {
  "2 Columns (1:1)": `
    <div style="position: relative;">
      
      <table style="${tt}">
        <tbody>
          <tr>
            <td style="${pe} width: 50%;"><p>Column 1</p></td>
            <td style="${pe} width: 50%;"><p>Column 2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "3 Columns (1:1:1)": `
    <div style="position: relative;">
      
      <table style="${tt}">
        <tbody>
          <tr>
            <td style="${pe} width: 33.33%;"><p>C1</p></td>
            <td style="${pe} width: 33.33%;"><p>C2</p></td>
            <td style="${pe} width: 33.33%;"><p>C3</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "2 Columns (1:2)": `
    <div style="position: relative;">
      
      <table style="${tt}">
        <tbody>
          <tr>
            <td style="${pe} width: 33.33%;"><p>C1</p></td>
            <td style="${pe} width: 66.66%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "2 Columns (2:1)": `
    <div style="position: relative;">
      
      <table style="${tt}">
        <tbody>
          <tr>
            <td style="${pe} width: 66.66%;"><p>C1</p></td>
            <td style="${pe} width: 33.33%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`
}, lr = ({
  applyStyle: r,
  applyLineHeight: i,
  activeStyles: s,
  onOpenLinkModal: a,
  onImageUpload: c,
  onDocxUpload: f,
  onVideoModalOpen: x,
  onTableModalOpen: v,
  onAiRefactor: b,
  content: D,
  isGenerating: N,
  isAiLoadingMinimized: A
}) => {
  const S = J(null), H = J(null), j = J(null);
  return re(() => {
    if (S.current && typeof window.bootstrap < "u") {
      const U = [].slice.call(
        S.current.querySelectorAll('[data-bs-toggle="tooltip"]')
      ).map(
        (M) => new window.bootstrap.Tooltip(M)
      );
      return () => U.forEach((M) => M == null ? void 0 : M.dispose());
    }
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: S,
        className: "p-2 border-bottom d-flex flex-wrap align-items-center gap-2",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", role: "group", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Undo (Ctrl+Z)",
                onClick: () => r("undo"),
                children: /* @__PURE__ */ e.jsx(Tt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Redo (Ctrl+Y)",
                onClick: () => r("redo"),
                children: /* @__PURE__ */ e.jsx(Et, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(be, { title: "Headings", icon: /* @__PURE__ */ e.jsx(it, { size: 14 }), children: Object.entries(Qr).map(([p, U]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                onClick: () => r("formatBlock", U),
                children: p
              },
              p
            )) }),
            /* @__PURE__ */ e.jsx(
              be,
              {
                title: "Font Family",
                icon: /* @__PURE__ */ e.jsx("span", { className: "fw-bold small", style: { fontSize: "12px" }, children: "Aa" }),
                children: Jr.map((p) => /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    className: "dropdown-item",
                    style: { fontFamily: p },
                    onClick: () => r("fontName", p),
                    children: p
                  },
                  p
                ))
              }
            ),
            /* @__PURE__ */ e.jsx(be, { title: "Font Size", icon: /* @__PURE__ */ e.jsx(Ot, { size: 14 }), children: Object.entries(Zr).map(([p, U]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                onClick: () => r("fontSize", U),
                children: p
              },
              p
            )) }),
            /* @__PURE__ */ e.jsxs(be, { title: "Line Height", icon: /* @__PURE__ */ e.jsx(zt, { size: 14 }), children: [
              Object.entries(eo).map(([p, U]) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "dropdown-item",
                  style: { fontSize: "14px" },
                  onClick: () => i(U),
                  children: p
                },
                p
              )),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "dropdown-item text-danger border-top border-danger mt-2",
                  style: { fontSize: "14px" },
                  onClick: () => i("normal"),
                  children: "Remove Height"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Bold (Ctrl+B)",
                command: "bold",
                activeStyles: s,
                onClick: () => r("bold"),
                children: /* @__PURE__ */ e.jsx(Lt, { size: 14 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Italic (Ctrl+I)",
                command: "italic",
                activeStyles: s,
                onClick: () => r("italic"),
                children: /* @__PURE__ */ e.jsx(St, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Underline (Ctrl+U)",
                command: "underline",
                activeStyles: s,
                onClick: () => r("underline"),
                children: /* @__PURE__ */ e.jsx(It, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Strikethrough",
                command: "strikeThrough",
                activeStyles: s,
                onClick: () => r("strikeThrough"),
                children: /* @__PURE__ */ e.jsx(At, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Superscript",
                command: "superscript",
                activeStyles: s,
                onClick: () => r("superscript"),
                children: /* @__PURE__ */ e.jsx(_t, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Subscript",
                command: "subscript",
                activeStyles: s,
                onClick: () => r("subscript"),
                children: /* @__PURE__ */ e.jsx(Dt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(ar, { applyStyle: r })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(wt, { command: "foreColor", applyStyle: r }),
            /* @__PURE__ */ e.jsx(wt, { command: "backColor", applyStyle: r })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Align Left",
                command: "justifyLeft",
                activeStyles: s,
                onClick: () => r("justifyLeft"),
                children: /* @__PURE__ */ e.jsx(Mt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Align Center",
                command: "justifyCenter",
                activeStyles: s,
                onClick: () => r("justifyCenter"),
                children: /* @__PURE__ */ e.jsx($t, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Align Right",
                command: "justifyRight",
                activeStyles: s,
                onClick: () => r("justifyRight"),
                children: /* @__PURE__ */ e.jsx(qt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Ordered List",
                command: "insertOrderedList",
                activeStyles: s,
                onClick: () => r("insertOrderedList"),
                children: /* @__PURE__ */ e.jsx(Bt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Unordered List",
                command: "insertUnorderedList",
                activeStyles: s,
                onClick: () => r("insertUnorderedList"),
                children: /* @__PURE__ */ e.jsx(Pt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(E, { title: "Outdent", onClick: () => r("outdent"), children: /* @__PURE__ */ e.jsx(Ht, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(E, { title: "Indent", onClick: () => r("indent"), children: /* @__PURE__ */ e.jsx(Ut, { size: 16 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Blockquote",
                onClick: () => r("formatBlock", "<blockquote>"),
                children: /* @__PURE__ */ e.jsx(Vt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Code Block",
                onClick: () => r("formatBlock", "<pre>"),
                children: /* @__PURE__ */ e.jsx(Yt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Add/Edit Link (Ctrl+K)",
                onClick: a,
                children: /* @__PURE__ */ e.jsx(Pe, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Horizontal Line",
                onClick: () => r("insertHorizontalRule"),
                children: /* @__PURE__ */ e.jsx(Wt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Clear Formatting",
                onClick: () => r("removeFormat"),
                children: /* @__PURE__ */ e.jsx(Gt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Insert Image",
                onClick: () => {
                  var p;
                  return (p = H.current) == null ? void 0 : p.click();
                },
                children: /* @__PURE__ */ e.jsx(Kt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(E, { title: "Insert Video", onClick: x, children: /* @__PURE__ */ e.jsx(st, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(E, { title: "Insert Table", onClick: v, children: /* @__PURE__ */ e.jsx(at, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(be, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx(jt, { size: 16 }), children: Object.entries(ir).map(([p, U]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                style: { fontSize: "14px" },
                onClick: () => r("insertHTML", U + "<p><br></p>"),
                children: p
              },
              p
            )) }),
            /* @__PURE__ */ e.jsx(be, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx(jt, { size: 26 }), children: Object.entries(ir).map(([p, U]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                onClick: () => r("insertHTML", U + "<p><br></p>"),
                children: p
              },
              p
            )) }),
            /* @__PURE__ */ e.jsx(
              E,
              {
                title: "Import from Word (.docx)",
                onClick: () => {
                  var p;
                  return (p = j.current) == null ? void 0 : p.click();
                },
                children: /* @__PURE__ */ e.jsx(Xt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "btn-group", children: /* @__PURE__ */ e.jsx(
            E,
            {
              title: "Improve with AI",
              onClick: b,
              disabled: !D || D === "" || N,
              children: N && !A ? /* @__PURE__ */ e.jsx("div", { className: "spinner-border spinner-border-sm", role: "status", children: /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) : /* @__PURE__ */ e.jsx(He, { size: 16 })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: H,
        onChange: c,
        className: "d-none"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: j,
        onChange: f,
        className: "d-none"
      }
    )
  ] });
};
lr.propTypes = {
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
const to = () => /* @__PURE__ */ e.jsx("style", { children: `
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


` }), O = Ie.memo(
  ({
    onClick: r,
    title: i,
    command: s,
    activeStyles: a,
    disabled: c = !1,
    children: f,
    className: x = ""
  }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(to, {}),
    /* @__PURE__ */ e.jsx("div", { className: "forma-text-tooltip-container", children: /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: r,
        onMouseDown: (v) => v.preventDefault(),
        className: `modern-toolbar-button ${a && a.has(s) ? "active" : ""} ${x}`,
        disabled: c,
        children: [
          f,
          /* @__PURE__ */ e.jsx("span", { className: "forma-text-tooltip", children: i })
        ]
      }
    ) })
  ] })
);
O.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  command: o.string,
  activeStyles: o.object,
  disabled: o.bool,
  children: o.node.isRequired,
  className: o.string
};
O.displayName = "ModernToolbarButton";
const he = ({ title: r, icon: i, children: s }) => {
  const [a, c] = F(!1), f = J(null);
  return re(() => {
    const x = (v) => {
      f.current && !f.current.contains(v.target) && c(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "modern-dropdown", ref: f, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => c(!a),
        onMouseDown: (x) => x.preventDefault(),
        className: "modern-toolbar-button",
        "aria-expanded": a,
        children: [
          i,
          /* @__PURE__ */ e.jsx(sr, { size: 14, style: { marginLeft: "4px" } })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `modern-dropdown-menu ${a ? "show" : ""}`,
        onClick: () => c(!1),
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
const ro = [
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
], yt = ({ command: r, applyStyle: i }) => {
  const s = r === "foreColor" ? "Text Color" : "Highlight Color", a = r === "foreColor" ? /* @__PURE__ */ e.jsx(Rt, { size: 26 }) : /* @__PURE__ */ e.jsx(Nt, { size: 26 });
  return /* @__PURE__ */ e.jsx(he, { title: s, icon: a, children: /* @__PURE__ */ e.jsx("div", { className: "modern-color-picker", children: ro.map((c) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "modern-color-swatch",
      style: { backgroundColor: c },
      onClick: () => i(r, c),
      "aria-label": c
    },
    c
  )) }) });
};
yt.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired
};
const oo = [
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
], cr = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(he, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(Ft, { size: 26 }), children: /* @__PURE__ */ e.jsx("div", { className: "modern-emoji-picker", children: oo.map((i) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "modern-emoji",
    onClick: () => r("insertText", i),
    children: i
  },
  i
)) }) });
cr.propTypes = {
  applyStyle: o.func.isRequired
};
const no = () => /* @__PURE__ */ e.jsx("style", { children: `
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

    ` }), io = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], so = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, ao = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, lo = {
  None: "0.5",
  Single: "1",
  1.15: "1.15",
  1.5: "1.5",
  Double: "2"
}, rt = "width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 1rem; position: relative; margin: 1rem 0;", fe = "padding: 1rem; vertical-align: top;", co = {
  "2 Columns (1:1)": `
    <div style="position: relative;">
      
      <table style="${rt}">
        <tbody>
          <tr>
            <td style="${fe} width: 50%;"><p>Column 1</p></td>
            <td style="${fe} width: 50%;"><p>Column 2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "3 Columns (1:1:1)": `
    <div style="position: relative;">
      
      <table style="${rt}">
        <tbody>
          <tr>
            <td style="${fe} width: 33.33%;"><p>C1</p></td>
            <td style="${fe} width: 33.33%;"><p>C2</p></td>
            <td style="${fe} width: 33.33%;"><p>C3</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "2 Columns (1:2)": `
    <div style="position: relative;">
      
      <table style="${rt}">
        <tbody>
          <tr>
            <td style="${fe} width: 33.33%;"><p>C1</p></td>
            <td style="${fe} width: 66.66%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "2 Columns (2:1)": `
    <div style="position: relative;">
      
      <table style="${rt}">
        <tbody>
          <tr>
            <td style="${fe} width: 66.66%;"><p>C1</p></td>
            <td style="${fe} width: 33.33%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`
}, dr = ({
  applyStyle: r,
  applyLineHeight: i,
  activeStyles: s,
  onOpenLinkModal: a,
  onImageUpload: c,
  onDocxUpload: f,
  onVideoModalOpen: x,
  onTableModalOpen: v,
  onAiRefactor: b,
  content: D,
  isGenerating: N,
  isAiLoadingMinimized: A
}) => {
  const S = J(null), H = J(null);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(no, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "modern-toolbar", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Undo (Ctrl+Z)",
            onClick: () => r("undo"),
            children: /* @__PURE__ */ e.jsx(Tt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Redo (Ctrl+Y)",
            onClick: () => r("redo"),
            children: /* @__PURE__ */ e.jsx(Et, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(he, { title: "Headings", icon: /* @__PURE__ */ e.jsx(it, { size: 26 }), children: Object.entries(ao).map(([j, p]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("formatBlock", p),
            children: j
          },
          j
        )) }),
        /* @__PURE__ */ e.jsx(he, { title: "Font Family", icon: /* @__PURE__ */ e.jsx(Ot, { size: 26 }), children: io.map((j) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            style: { fontFamily: j },
            onClick: () => r("fontName", j),
            children: j
          },
          j
        )) }),
        /* @__PURE__ */ e.jsx(he, { title: "Font Size", icon: "F", children: Object.entries(so).map(([j, p]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("fontSize", p),
            children: j
          },
          j
        )) }),
        /* @__PURE__ */ e.jsx(he, { title: "Line Height", icon: /* @__PURE__ */ e.jsx(zt, { size: 26 }), children: Object.entries(lo).map(([j, p]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => i(p),
            children: j
          },
          j
        )) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Bold (Ctrl+B)",
            command: "bold",
            activeStyles: s,
            onClick: () => r("bold"),
            children: /* @__PURE__ */ e.jsx(Lt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Italic (Ctrl+I)",
            command: "italic",
            activeStyles: s,
            onClick: () => r("italic"),
            children: /* @__PURE__ */ e.jsx(St, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Underline (Ctrl+U)",
            command: "underline",
            activeStyles: s,
            onClick: () => r("underline"),
            children: /* @__PURE__ */ e.jsx(It, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Strikethrough",
            command: "strikeThrough",
            activeStyles: s,
            onClick: () => r("strikeThrough"),
            children: /* @__PURE__ */ e.jsx(At, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Superscript",
            command: "superscript",
            activeStyles: s,
            onClick: () => r("superscript"),
            children: /* @__PURE__ */ e.jsx(_t, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Subscript",
            command: "subscript",
            activeStyles: s,
            onClick: () => r("subscript"),
            children: /* @__PURE__ */ e.jsx(Dt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(cr, { applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(yt, { command: "foreColor", applyStyle: r }),
        /* @__PURE__ */ e.jsx(yt, { command: "backColor", applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Align Left",
            command: "justifyLeft",
            activeStyles: s,
            onClick: () => r("justifyLeft"),
            children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Align Center",
            command: "justifyCenter",
            activeStyles: s,
            onClick: () => r("justifyCenter"),
            children: /* @__PURE__ */ e.jsx($t, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Align Right",
            command: "justifyRight",
            activeStyles: s,
            onClick: () => r("justifyRight"),
            children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Ordered List",
            command: "insertOrderedList",
            activeStyles: s,
            onClick: () => r("insertOrderedList"),
            children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Unordered List",
            command: "insertUnorderedList",
            activeStyles: s,
            onClick: () => r("insertUnorderedList"),
            children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Outdent",
            onClick: () => r("outdent"),
            children: /* @__PURE__ */ e.jsx(Ht, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Indent",
            onClick: () => r("indent"),
            children: /* @__PURE__ */ e.jsx(Ut, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Blockquote",
            onClick: () => r("formatBlock", "<blockquote>"),
            children: /* @__PURE__ */ e.jsx(Vt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Code Block",
            onClick: () => r("formatBlock", "<pre>"),
            children: /* @__PURE__ */ e.jsx(Yt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Add/Edit Link (Ctrl+K)",
            onClick: a,
            children: /* @__PURE__ */ e.jsx(Pe, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Horizontal Line",
            onClick: () => r("insertHorizontalRule"),
            children: /* @__PURE__ */ e.jsx(Wt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Insert Image",
            onClick: () => {
              var j;
              return (j = S.current) == null ? void 0 : j.click();
            },
            children: /* @__PURE__ */ e.jsx(Kt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(O, { title: "Insert Video", onClick: x, children: /* @__PURE__ */ e.jsx(st, { size: 20 }) }),
        /* @__PURE__ */ e.jsx(O, { title: "Insert Table", onClick: v, children: /* @__PURE__ */ e.jsx(at, { size: 18 }) }),
        /* @__PURE__ */ e.jsx(he, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx(jt, { size: 26 }), children: Object.entries(co).map(([j, p]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("insertHTML", p + "<p><br></p>"),
            children: j
          },
          j
        )) }),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Import from Word (.docx)",
            onClick: () => {
              var j;
              return (j = H.current) == null ? void 0 : j.click();
            },
            children: /* @__PURE__ */ e.jsx(Xt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Clear Formatting",
            onClick: () => r("removeFormat"),
            children: /* @__PURE__ */ e.jsx(Gt, { size: 18, style: { color: "red" } })
          }
        ),
        /* @__PURE__ */ e.jsx(
          O,
          {
            title: "Improve with AI",
            onClick: b,
            disabled: !D || D === "" || N,
            className: "modern-ai-button mx-0 rounded-3",
            children: N && !A ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(He, { size: 20 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: S,
        onChange: c,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: H,
        onChange: f,
        style: { display: "none" }
      }
    )
  ] });
};
dr.propTypes = {
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
const z = Ie.memo(
  ({
    onClick: r,
    title: i,
    cmd: s,
    active: a,
    disabled: c = !1,
    children: f,
    className: x = ""
  }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (v) => v.preventDefault(),
      className: `futuristic-button ${a && a.has(s) ? "active" : ""} ${x}`,
      title: i,
      disabled: c,
      children: /* @__PURE__ */ e.jsx("span", { className: "button-content", children: f })
    }
  )
);
z.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  cmd: o.string,
  active: o.object,
  disabled: o.bool,
  children: o.node.isRequired,
  className: o.string
};
z.displayName = "FuturisticToolbarButton";
const ge = ({ title: r, icon: i, children: s }) => {
  const [a, c] = F(!1), f = J(null);
  return re(() => {
    const x = (v) => {
      f.current && !f.current.contains(v.target) && c(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "futuristic-dropdown", ref: f, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        title: r,
        onClick: () => c(!a),
        onMouseDown: (x) => x.preventDefault(),
        className: "futuristic-button",
        "aria-expanded": a,
        children: /* @__PURE__ */ e.jsxs("span", { className: "button-content", children: [
          i,
          /* @__PURE__ */ e.jsx(
            sr,
            {
              size: 16,
              className: `chevron-icon ${a ? "open" : ""}`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `futuristic-dropdown-menu ${a ? "show" : ""}`,
        onClick: () => c(!1),
        children: s
      }
    )
  ] });
};
ge.propTypes = {
  title: o.string.isRequired,
  icon: o.node.isRequired,
  children: o.node.isRequired
};
const uo = [
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
], kt = ({ command: r, applyStyle: i }) => {
  const s = r === "foreColor" ? "Text Color" : "Highlight Color", a = r === "foreColor" ? /* @__PURE__ */ e.jsx(Rt, { size: 18 }) : /* @__PURE__ */ e.jsx(Nt, { size: 18 });
  return /* @__PURE__ */ e.jsx(ge, { title: s, icon: a, children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-color-picker", children: uo.map((c) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "color-swatch-hexagon",
      onClick: () => i(r, c),
      "aria-label": c,
      children: /* @__PURE__ */ e.jsx("div", { className: "hexagon-inner", style: { backgroundColor: c } })
    },
    c
  )) }) });
};
kt.propTypes = {
  command: o.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: o.func.isRequired
};
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
], ur = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(ge, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(Ft, { size: 18 }), children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-emoji-picker", children: po.map((i) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "futuristic-emoji",
    onClick: () => r("insertText", i),
    children: i
  },
  i
)) }) });
ur.propTypes = {
  applyStyle: o.func.isRequired
};
const fo = () => /* @__PURE__ */ e.jsx("style", { children: `
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

      ` }), mo = ["Arial", "Georgia", "Verdana", "Courier New"], bo = { H1: "<h1>", H2: "<h2>", H3: "<h3>", Paragraph: "<p>" }, xo = {
  None: "0.5",
  Single: "1",
  1.15: "1.15",
  1.5: "1.5",
  Double: "2"
}, ho = { Small: "2", Normal: "3", Large: "5", Huge: "7" }, ot = "width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 1rem; position: relative; margin: 1rem 0;", me = "padding: 1rem; vertical-align: top;", go = {
  "2 Columns (1:1)": `
    <div style="position: relative;">
      
      <table style="${ot}">
        <tbody>
          <tr>
            <td style="${me} width: 50%;"><p>Column 1</p></td>
            <td style="${me} width: 50%;"><p>Column 2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "3 Columns (1:1:1)": `
    <div style="position: relative;">
      
      <table style="${ot}">
        <tbody>
          <tr>
            <td style="${me} width: 33.33%;"><p>C1</p></td>
            <td style="${me} width: 33.33%;"><p>C2</p></td>
            <td style="${me} width: 33.33%;"><p>C3</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "2 Columns (1:2)": `
    <div style="position: relative;">
      
      <table style="${ot}">
        <tbody>
          <tr>
            <td style="${me} width: 33.33%;"><p>C1</p></td>
            <td style="${me} width: 66.66%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  "2 Columns (2:1)": `
    <div style="position: relative;">
      
      <table style="${ot}">
        <tbody>
          <tr>
            <td style="${me} width: 66.66%;"><p>C1</p></td>
            <td style="${me} width: 33.33%;"><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>`
}, pr = ({
  applyStyle: r,
  applyLineHeight: i,
  activeStyles: s,
  onOpenLinkModal: a,
  onImageUpload: c,
  onDocxUpload: f,
  onVideoModalOpen: x,
  onTableModalOpen: v,
  onAiRefactor: b,
  content: D,
  isGenerating: N,
  isAiLoadingMinimized: A
}) => {
  const S = J(null), H = J(null), j = J(null), [p, U] = F({ x: 50, y: 50 }), [M, $] = F(!1), ve = J({ x: 0, y: 0 }), je = (w) => {
    w.button === 0 && ($(!0), ve.current = {
      x: w.clientX - p.x,
      y: w.clientY - p.y
    }, w.preventDefault());
  };
  return re(() => {
    const w = (oe) => {
      M && U({
        x: oe.clientX - ve.current.x,
        y: oe.clientY - ve.current.y
      });
    }, K = () => $(!1);
    return window.addEventListener("mousemove", w), window.addEventListener("mouseup", K), () => {
      window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", K);
    };
  }, [M]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(fo, {}),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: j,
        className: `futuristic-toolbar ${M ? "is-dragging" : ""}`,
        style: { top: `${p.y}px`, left: `${p.x}px` },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "drag-handle",
              onMouseDown: je,
              title: "Drag Toolbar",
              children: /* @__PURE__ */ e.jsx(Dr, { size: 20 })
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "toolbar-content", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Undo",
                  onClick: () => r("undo"),
                  children: /* @__PURE__ */ e.jsx(Tt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Redo",
                  onClick: () => r("redo"),
                  children: /* @__PURE__ */ e.jsx(Et, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(ge, { title: "Headings", icon: /* @__PURE__ */ e.jsx(it, { size: 18 }), children: Object.entries(bo).map(([w, K]) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "futuristic-dropdown-item",
                  onClick: () => r("formatBlock", K),
                  children: w
                },
                w
              )) }),
              /* @__PURE__ */ e.jsx(ge, { title: "Font", icon: /* @__PURE__ */ e.jsx(Ot, { size: 18 }), children: mo.map((w) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "futuristic-dropdown-item",
                  style: { fontFamily: w },
                  onClick: () => r("fontName", w),
                  children: w
                },
                w
              )) }),
              /* @__PURE__ */ e.jsx(
                ge,
                {
                  title: "Font Size",
                  icon: /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "19px"
                      },
                      children: "F"
                    }
                  ),
                  children: Object.entries(ho).map(([w, K]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "dropdown-item",
                      onClick: () => r("fontSize", K),
                      children: w
                    },
                    w
                  ))
                }
              ),
              /* @__PURE__ */ e.jsx(
                ge,
                {
                  title: "Line Height",
                  icon: /* @__PURE__ */ e.jsx(zt, { size: 18 }),
                  children: Object.entries(xo).map(([w, K]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => i(K),
                      children: w
                    },
                    w
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Bold",
                  cmd: "bold",
                  active: s,
                  onClick: () => r("bold"),
                  children: /* @__PURE__ */ e.jsx(Lt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Italic",
                  cmd: "italic",
                  active: s,
                  onClick: () => r("italic"),
                  children: /* @__PURE__ */ e.jsx(St, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Underline",
                  cmd: "underline",
                  active: s,
                  onClick: () => r("underline"),
                  children: /* @__PURE__ */ e.jsx(It, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Strikethrough",
                  cmd: "strikeThrough",
                  active: s,
                  onClick: () => r("strikeThrough"),
                  children: /* @__PURE__ */ e.jsx(At, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Superscript",
                  cmd: "superscript",
                  active: s,
                  onClick: () => r("superscript"),
                  children: /* @__PURE__ */ e.jsx(_t, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Subscript",
                  cmd: "subscript",
                  active: s,
                  onClick: () => r("subscript"),
                  children: /* @__PURE__ */ e.jsx(Dt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                kt,
                {
                  command: "foreColor",
                  applyStyle: r
                }
              ),
              /* @__PURE__ */ e.jsx(
                kt,
                {
                  command: "backColor",
                  applyStyle: r
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Align Left",
                  cmd: "justifyLeft",
                  active: s,
                  onClick: () => r("justifyLeft"),
                  children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Align Center",
                  cmd: "justifyCenter",
                  active: s,
                  onClick: () => r("justifyCenter"),
                  children: /* @__PURE__ */ e.jsx($t, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Align Right",
                  cmd: "justifyRight",
                  active: s,
                  onClick: () => r("justifyRight"),
                  children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Ordered List",
                  cmd: "insertOrderedList",
                  active: s,
                  onClick: () => r("insertOrderedList"),
                  children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Unordered List",
                  cmd: "insertUnorderedList",
                  active: s,
                  onClick: () => r("insertUnorderedList"),
                  children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Outdent",
                  onClick: () => r("outdent"),
                  children: /* @__PURE__ */ e.jsx(Ht, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Indent",
                  onClick: () => r("indent"),
                  children: /* @__PURE__ */ e.jsx(Ut, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Add/Edit Link",
                  onClick: a,
                  children: /* @__PURE__ */ e.jsx(Pe, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Blockquote",
                  onClick: () => r("formatBlock", "<blockquote>"),
                  children: /* @__PURE__ */ e.jsx(Vt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Code Block",
                  onClick: () => r("formatBlock", "<pre>"),
                  children: /* @__PURE__ */ e.jsx(Yt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Horizontal Line",
                  onClick: () => r("insertHorizontalRule"),
                  children: /* @__PURE__ */ e.jsx(Wt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Insert Image",
                  onClick: () => {
                    var w;
                    return (w = S.current) == null ? void 0 : w.click();
                  },
                  children: /* @__PURE__ */ e.jsx(Kt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Insert Video",
                  onClick: x,
                  children: /* @__PURE__ */ e.jsx(st, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Insert Table",
                  onClick: v,
                  children: /* @__PURE__ */ e.jsx(at, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                ge,
                {
                  title: "Insert Columns",
                  icon: /* @__PURE__ */ e.jsx(Columns, { size: 18 }),
                  children: Object.entries(go).map(([w, K]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => r("insertHTML", K + "<p><br></p>"),
                      children: w
                    },
                    w
                  ))
                }
              ),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Import from Word",
                  onClick: () => {
                    var w;
                    return (w = H.current) == null ? void 0 : w.click();
                  },
                  children: /* @__PURE__ */ e.jsx(Xt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(ur, { applyStyle: r })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Clear Formatting",
                  onClick: () => r("removeFormat"),
                  children: /* @__PURE__ */ e.jsx(Gt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
              /* @__PURE__ */ e.jsx(
                z,
                {
                  title: "Improve with AI",
                  onClick: b,
                  disabled: !D || N,
                  className: "ai-button rounded-3",
                  children: N ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(He, { size: 18 })
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
        ref: S,
        onChange: c,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: H,
        onChange: f,
        style: { display: "none" }
      }
    )
  ] });
};
pr.propTypes = {
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
const fr = ({ theme: r, ...i }) => r === "modern" ? /* @__PURE__ */ e.jsx(dr, { ...i }) : r === "futuristic" ? /* @__PURE__ */ e.jsx(pr, { ...i }) : /* @__PURE__ */ e.jsx(lr, { ...i });
fr.propTypes = {
  theme: o.oneOf(["classic", "modern", "futuristic"])
};
const mr = ({
  editorRef: r,
  content: i,
  showSource: s,
  onContentChange: a,
  onKeyDown: c,
  textContentClass: f
}) => s ? /* @__PURE__ */ e.jsx(
  "textarea",
  {
    value: i || "",
    onChange: a,
    className: "form-control rounded-0 border-0  font-monospace small bg-dark text-light forma-text-source-view  "
  }
) : /* @__PURE__ */ e.jsx(
  "div",
  {
    ref: r,
    contentEditable: !0,
    suppressContentEditableWarning: !0,
    className: `forma-text-editor-content form-control rounded-0 border-0 h-100 p-3 ${f}`,
    style: { minHeight: "60vh" },
    onInput: a,
    onKeyDown: c
  }
);
mr.propTypes = {
  editorRef: o.object.isRequired,
  content: o.string,
  showSource: o.bool.isRequired,
  onContentChange: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  textContentClass: o.string
};
const Ue = ({ children: r, onClose: i, title: s, icon: a, size: c = "modal-dialog-centered" }) => /* @__PURE__ */ e.jsx("div", { className: "modal fade show", style: { display: "block", backgroundColor: "rgba(0,0,0,0.5)" }, onClick: i, children: /* @__PURE__ */ e.jsx("div", { className: `modal-dialog ${c}`, onClick: (f) => f.stopPropagation(), children: /* @__PURE__ */ e.jsxs("div", { className: "modal-content border-0 shadow-lg", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "modal-header bg-light border-0", children: [
    /* @__PURE__ */ e.jsxs("h5", { className: "modal-title d-flex align-items-center gap-2", children: [
      a,
      s
    ] }),
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn-close", onClick: i })
  ] }),
  r
] }) }) });
Ue.propTypes = {
  children: o.node.isRequired,
  onClose: o.func.isRequired,
  title: o.string.isRequired,
  icon: o.node,
  size: o.string
};
const br = ({ isOpen: r, onClose: i, onApply: s, initialData: a, isEditing: c }) => {
  const [f, x] = F({ text: "", href: "" });
  return re(() => {
    r && x(a);
  }, [r, a]), r ? /* @__PURE__ */ e.jsxs(
    Ue,
    {
      onClose: i,
      title: c ? "Edit Link" : "Add Link",
      icon: /* @__PURE__ */ e.jsx(Pe, { size: 20, className: "text-primary" }),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Link Text" }),
            /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ e.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ e.jsx(it, { size: 16 }) }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  value: f.text,
                  onChange: (v) => x({ ...f, text: v.target.value })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Link URL" }),
            /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ e.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ e.jsx(Mr, { size: 16 }) }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "url",
                  className: "form-control",
                  value: f.href,
                  onChange: (v) => x({ ...f, href: v.target.value }),
                  placeholder: "https://example.com",
                  autoFocus: !0
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-secondary",
              onClick: i,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-primary",
              onClick: () => s(f),
              children: "Apply Link"
            }
          )
        ] })
      ]
    }
  ) : null;
};
br.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onApply: o.func.isRequired,
  initialData: o.shape({
    text: o.string,
    href: o.string
  }).isRequired,
  isEditing: o.bool.isRequired
};
const xr = ({ isOpen: r, onClose: i, onInsert: s }) => {
  const [a, c] = F("");
  if (!r) return null;
  const f = () => {
    s(a), c("");
  };
  return /* @__PURE__ */ e.jsxs(
    Ue,
    {
      onClose: i,
      title: "Insert Video",
      icon: /* @__PURE__ */ e.jsx(st, { size: 20, className: "text-primary" }),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
          /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Video URL" }),
          /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ e.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ e.jsx(Pe, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "url",
                className: "form-control",
                value: a,
                onChange: (x) => c(x.target.value),
                placeholder: "e.g., https://www.youtube.com/watch?v=...",
                autoFocus: !0
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "form-text video-modal-title", children: "Supports YouTube and Vimeo links." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-secondary",
              onClick: i,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-primary",
              onClick: f,
              children: "Insert Video"
            }
          )
        ] })
      ]
    }
  );
};
xr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onInsert: o.func.isRequired
};
const hr = ({ isOpen: r, onClose: i, onCreate: s }) => {
  const [a, c] = F({ rows: 3, cols: 3 });
  return r ? /* @__PURE__ */ e.jsxs(
    Ue,
    {
      onClose: i,
      title: "Create Table",
      icon: /* @__PURE__ */ e.jsx(at, { size: 20, className: "text-primary" }),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Rows" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "number",
                className: "form-control",
                value: a.rows,
                min: "1",
                onChange: (f) => c({
                  ...a,
                  rows: parseInt(f.target.value, 10) || 1
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
                value: a.cols,
                min: "1",
                onChange: (f) => c({
                  ...a,
                  cols: parseInt(f.target.value, 10) || 1
                })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-secondary",
              onClick: i,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-primary",
              onClick: () => s(a),
              children: "Create"
            }
          )
        ] })
      ]
    }
  ) : null;
};
hr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onCreate: o.func.isRequired
};
const gr = ({ status: r, isMinimized: i, onMinimizeToggle: s }) => i ? /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-popup-minimized", children: [
  /* @__PURE__ */ e.jsx("div", { className: "spinner-border spinner-border-sm text-primary", role: "status" }),
  /* @__PURE__ */ e.jsx("span", { className: "ms-2 small", children: "AI is working..." }),
  /* @__PURE__ */ e.jsx("button", { onClick: s, className: "btn btn-sm btn-light ms-auto", children: /* @__PURE__ */ e.jsx($r, { size: 14 }) })
] }) : /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-popup", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
    /* @__PURE__ */ e.jsxs("h6", { className: "mb-0 d-flex align-items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(He, { size: 18, className: "text-primary" }),
      "AI Assistant"
    ] }),
    /* @__PURE__ */ e.jsx("button", { onClick: s, className: "btn btn-sm btn-light", children: /* @__PURE__ */ e.jsx(lt, { size: 14 }) })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "d-flex align-items-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "spinner-border text-primary me-3", role: "status", children: /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Loading..." }) }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "mb-0 fw-bold", children: "Working on it..." }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-0 text-muted small", children: r })
    ] })
  ] })
] });
gr.propTypes = {
  status: o.string.isRequired,
  isMinimized: o.bool.isRequired,
  onMinimizeToggle: o.func.isRequired
};
const vr = ({ isOpen: r, onClose: i, onApply: s, originalContent: a, suggestion: c, highlightedDiff: f }) => r ? /* @__PURE__ */ e.jsxs(Ue, { onClose: i, title: "AI Content Suggestion", icon: /* @__PURE__ */ e.jsx(He, { size: 20, className: "text-primary" }), size: "modal-xl", children: [
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
          /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: a } })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-success", children: "AI Suggestion" }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: c } })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "tab-pane fade", id: "diff-pane", role: "tabpanel", "aria-labelledby": "diff-tab", children: [
        /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-primary", children: "Highlighted Differences" }),
        /* @__PURE__ */ e.jsxs("p", { className: "small text-muted", children: [
          /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 me-2 rounded", style: { backgroundColor: "#d4edda" }, children: "Added content" }),
          /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 rounded", style: { backgroundColor: "#f8d7da" }, children: "Removed content" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: f } })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-secondary", onClick: i, children: "Cancel" }),
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: s, children: "Apply Suggestion" })
  ] })
] }) : null;
vr.propTypes = {
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  onApply: o.func.isRequired,
  originalContent: o.string,
  suggestion: o.string,
  highlightedDiff: o.string
};
const nt = Ie.memo(
  ({ onClick: r, title: i, command: s, activeStyles: a, disabled: c = !1, children: f }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (x) => x.preventDefault(),
      className: `btn btn-outline-secondary ${a && a.has(s) ? "active" : ""}`,
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "bottom",
      title: i,
      disabled: c,
      children: f
    }
  )
);
nt.propTypes = {
  onClick: o.func.isRequired,
  title: o.string.isRequired,
  command: o.string,
  activeStyles: o.object,
  disabled: o.bool,
  children: o.node.isRequired
};
nt.displayName = "StatusToolbarButton";
const jr = ({
  wordCount: r,
  charCount: i,
  onToggleSource: s,
  showSource: a,
  onToggleFullScreen: c,
  isFullScreen: f,
  trialExpiresIn: x
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex-shrink-0 p-2 border-top bg-light d-flex justify-content-between align-items-center small text-muted", children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "footer-text-area", children: [
      "Words: ",
      r
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "mx-2", children: "|" }),
    /* @__PURE__ */ e.jsxs("span", { className: "footer-text-area", children: [
      "Characters: ",
      i
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
    /* @__PURE__ */ e.jsx(nt, { title: "View HTML Source", onClick: s, children: /* @__PURE__ */ e.jsx(Jt, { size: 16 }) }),
    /* @__PURE__ */ e.jsx(
      nt,
      {
        title: f ? "Exit Full Screen" : "Full Screen",
        onClick: c,
        children: f ? /* @__PURE__ */ e.jsx(lt, { size: 16 }) : /* @__PURE__ */ e.jsx(Zt, { size: 16 })
      }
    )
  ] })
] });
jr.propTypes = {
  wordCount: o.number.isRequired,
  charCount: o.number.isRequired,
  onToggleSource: o.func.isRequired,
  showSource: o.bool.isRequired,
  onToggleFullScreen: o.func.isRequired,
  isFullScreen: o.bool.isRequired,
  isPremium: o.bool
};
const vo = () => /* @__PURE__ */ e.jsx("style", { children: `
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

      ` }), Cr = ({
  wordCount: r,
  charCount: i,
  onToggleSource: s,
  isFullScreen: a,
  onToggleFullScreen: c
}) => {
  const [f, x] = F(!1);
  return re(() => {
    const v = setTimeout(() => x(!0), 100);
    return () => clearTimeout(v);
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(vo, {}),
    /* @__PURE__ */ e.jsxs("div", { className: `futuristic-statusbar-v2 ${f ? "is-booted" : ""}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket top-left" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket top-right" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket bottom-left" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket bottom-right" }),
      /* @__PURE__ */ e.jsx("div", { className: "grid-background" }),
      /* @__PURE__ */ e.jsxs("div", { className: "statusbar-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "status-group-v2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "data-readout", title: "Word Count", children: [
            /* @__PURE__ */ e.jsx(qr, { size: 16, className: "data-icon" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-label", children: "WORDS" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-value", children: r.toString().padStart(4, "0") })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "data-readout", title: "Character Count", children: [
            /* @__PURE__ */ e.jsx(Br, { size: 16, className: "data-icon" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-label", children: "CHARS" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-value", children: i.toString().padStart(5, "0") })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "status-group-v2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "action-button",
              title: "View HTML Source",
              onClick: s,
              children: /* @__PURE__ */ e.jsx(Jt, { size: 18 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "action-button",
              title: a ? "Exit Full Screen" : "Full Screen",
              onClick: c,
              children: a ? /* @__PURE__ */ e.jsx(lt, { size: 18 }) : /* @__PURE__ */ e.jsx(Zt, { size: 18 })
            }
          )
        ] })
      ] })
    ] })
  ] });
};
Cr.propTypes = {
  wordCount: o.number.isRequired,
  charCount: o.number.isRequired,
  onToggleSource: o.func.isRequired,
  onToggleFullScreen: o.func.isRequired,
  isFullScreen: o.bool.isRequired
};
const jo = () => /* @__PURE__ */ e.jsx("style", { children: `
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

    ` }), wr = ({
  wordCount: r,
  charCount: i,
  onToggleSource: s,
  isFullScreen: a,
  onToggleFullScreen: c
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(jo, {}),
  /* @__PURE__ */ e.jsxs("div", { className: "modern-statusbar", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "statusbar-segment", children: [
      /* @__PURE__ */ e.jsxs("span", { className: "statusbar-item", children: [
        "Words: ",
        r
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "statusbar-divider", children: "|" }),
      /* @__PURE__ */ e.jsxs("span", { className: "statusbar-item", children: [
        "Characters: ",
        i
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "statusbar-segment", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "statusbar-button",
          title: "View HTML Source",
          onClick: s,
          children: /* @__PURE__ */ e.jsx(Jt, { size: 18 })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "statusbar-button",
          title: a ? "Exit Full Screen" : "Full Screen",
          onClick: c,
          children: a ? /* @__PURE__ */ e.jsx(lt, { size: 18 }) : /* @__PURE__ */ e.jsx(Zt, { size: 18 })
        }
      )
    ] })
  ] })
] });
wr.propTypes = {
  wordCount: o.number.isRequired,
  charCount: o.number.isRequired,
  onToggleSource: o.func.isRequired,
  onToggleFullScreen: o.func.isRequired,
  isFullScreen: o.bool.isRequired
};
const yr = ({ theme: r, ...i }) => r === "modern" ? /* @__PURE__ */ e.jsx(wr, { ...i }) : r === "futuristic" ? /* @__PURE__ */ e.jsx(Cr, { ...i }) : /* @__PURE__ */ e.jsx(jr, { ...i });
yr.propTypes = {
  theme: o.oneOf(["classic", "modern", "futuristic"])
};
function Co(r) {
  if (typeof document > "u")
    return;
  const i = `bootstrap-css-scoped-${r}`, s = "bootstrap-js-cdn-script";
  if (!document.getElementById(i) && (fetch(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  ).then((a) => {
    if (!a.ok)
      throw new Error("Network response was not ok fetching Bootstrap CSS.");
    return a.text();
  }).then((a) => {
    const c = `#${r}`, f = (b) => {
      const D = /([^{}]*)({[^{}]*})/g;
      return b.replace(D, (N, A, S) => {
        if (A.trim() === "")
          return N;
        if (A.trim().startsWith("@")) {
          const j = f(
            S.substring(1, S.length - 1)
          );
          return `${A}{${j}}`;
        }
        return `${A.split(",").map((j) => {
          const p = j.trim();
          return p ? p === "body" || p === "html" || p === ":root" ? `${c}${p.replace(
            /body|html|:root/,
            ""
          )}` : p.match(/^\d{1,2}%$/) || p === "from" || p === "to" ? p : `${c} ${p}` : "";
        }).join(", ")} ${S}`;
      });
    }, x = f(a), v = document.createElement("style");
    v.id = i, v.textContent = x, document.head.appendChild(v);
  }).catch(
    (a) => console.error("Failed to fetch and scope Bootstrap CSS:", a)
  ), !document.getElementById(s))) {
    const a = document.createElement("script");
    a.id = s, a.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", a.crossOrigin = "anonymous", a.defer = !0, document.body.appendChild(a);
  }
}
const wo = () => /* @__PURE__ */ e.jsx("style", { children: `
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
    ` });
function yo({
  content: r = "",
  setContent: i = () => {
  },
  geminiApiKey: s = "",
  parentEditorClass: a = "",
  toolBarClass: c = "",
  textContentClass: f = "",
  theme: x = "classic"
}) {
  const [v] = F(
    `forma-text-editor-${Math.random().toString(36).substring(2, 9)}`
  ), b = J(null), D = J(null), N = J(!1), [A, S] = F(/* @__PURE__ */ new Set()), [H, j] = F({ words: 0, chars: 0 }), [p, U] = F(!1), [M, $] = F(!1), [ve, je] = F(!1), [w, K] = F({ text: "", href: "" }), [oe, Ae] = F(null), [Ve, _e] = F(!1), [ct, ye] = F(!1), [ne, Q] = F(!1), [xe, ke] = F(""), [Ye, Re] = F(""), [Ne, De] = F(!1), [We, Fe] = F(""), [Te, Ge] = F(!1), [W, ae] = F(null), [Ce, ie] = F(null), [le, te] = F(null);
  re(() => {
    Co(v);
  }, [v]);
  const G = P(() => {
    b.current && (N.current = !0, i(b.current.innerHTML));
  }, [i]), ce = P(() => {
    const u = window.getSelection();
    if (u.rangeCount > 0) {
      const l = u.getRangeAt(0);
      b.current && b.current.contains(l.commonAncestorContainer) && (D.current = l);
    }
  }, []), se = P(() => {
    if (D.current) {
      const u = window.getSelection();
      u.removeAllRanges(), u.addRange(D.current);
    }
  }, []);
  re(() => {
    if (N.current) {
      N.current = !1;
      return;
    }
    b.current && !p && r !== b.current.innerHTML && (b.current.innerHTML = r || "");
  }, [r, p]);
  const dt = P((u) => {
    const l = p ? u.target.value : u.currentTarget.innerHTML;
    N.current = !0, i(l);
  }, [p, i]);
  re(() => {
    const u = document.createElement("div");
    u.innerHTML = r || "";
    const l = u.textContent || "", m = l.trim().split(/\s+/).filter(Boolean).length;
    j({ words: m, chars: l.length });
  }, [r]);
  const de = P(() => {
    const u = /* @__PURE__ */ new Set();
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
    ].forEach((m) => {
      document.queryCommandState(m) && u.add(m);
    }), S(u);
  }, []), V = P((u, l = null) => {
    var m;
    (m = b.current) == null || m.focus(), se(), document.execCommand(u, !1, l), G(), de();
  }, [se, G, de]), Ke = P((u) => {
    var Y;
    (Y = b.current) == null || Y.focus(), se();
    const l = window.getSelection();
    if (!l.rangeCount) return;
    const m = (L) => {
      let B = L.nodeType === Node.ELEMENT_NODE ? L : L.parentNode;
      for (; B && B !== b.current; ) {
        if (window.getComputedStyle(B).display.match(/block|table|list-item/))
          return B;
        B = B.parentNode;
      }
      return null;
    }, k = l.getRangeAt(0), g = m(k.startContainer), I = m(k.endContainer);
    if (g) {
      let L = g;
      const B = [];
      for (; L && (B.push(L), L !== I); )
        L = L.nextElementSibling;
      B.forEach((ue) => {
        ue.style.lineHeight = u;
      });
    }
    G();
  }, [se, G]);
  re(() => {
    const u = () => {
      const l = window.getSelection();
      if (l.rangeCount > 0) {
        const m = l.getRangeAt(0);
        b.current && b.current.contains(m.commonAncestorContainer) && (ce(), de());
      }
    };
    return document.addEventListener("selectionchange", u), () => document.removeEventListener("selectionchange", u);
  }, [ce, de]);
  const Xe = P((u) => {
    const l = u.target, m = l.closest("img"), k = l.closest("table.forma-text-table");
    if (m && b.current.contains(m)) {
      ie(null), ae(m);
      const g = m.getBoundingClientRect(), I = b.current.getBoundingClientRect();
      te({
        top: g.top - I.top + b.current.scrollTop,
        left: g.left - I.left + b.current.scrollLeft,
        width: g.width,
        height: g.height
      });
    } else if (k && b.current.contains(k)) {
      ae(null), ie(k);
      const g = k.getBoundingClientRect(), I = b.current.getBoundingClientRect();
      te({
        top: g.top - I.top + b.current.scrollTop,
        left: g.left - I.left + b.current.scrollLeft,
        width: g.width,
        height: g.height
      });
    } else
      ae(null), ie(null), te(null);
  }, []), Ee = P(() => {
    setTimeout(() => {
      var u;
      document.activeElement !== b.current && !((u = b.current) != null && u.contains(document.activeElement)) && (ae(null), ie(null), te(null));
    }, 100);
  }, []), Me = P(() => {
    var m;
    ce();
    const u = window.getSelection(), l = (m = u.anchorNode) == null ? void 0 : m.parentElement.closest("a");
    (l == null ? void 0 : l.tagName) === "A" ? (K({ text: l.textContent, href: l.href }), Ae(l)) : (K({ text: u.toString(), href: "" }), Ae(null)), je(!0);
  }, [ce]), ut = P((u) => {
    if (u.ctrlKey || u.metaKey) {
      const l = {
        b: "bold",
        i: "italic",
        u: "underline",
        k: () => Me(),
        z: "undo",
        y: "redo"
      };
      l[u.key] && (u.preventDefault(), typeof l[u.key] == "function" ? l[u.key]() : V(l[u.key]));
    }
  }, [V, Me]), $e = P((u) => {
    if (je(!1), se(), b.current.focus(), oe)
      oe.href = u.href, oe.textContent = u.text;
    else {
      const l = `<a href="${u.href}" target="_blank" rel="noopener noreferrer">${u.text}</a>`;
      V("insertHTML", l);
    }
    Ae(null), G();
  }, [oe, se, V, G]), pt = P((u) => {
    const l = u.target.files[0];
    if (!l) return;
    const m = new FileReader();
    m.onload = (k) => {
      const g = `<span class="forma-text-image-wrapper" contenteditable="false"><img src="${k.target.result}" style="width: 250px; height: auto;" alt=""/></span>`;
      V("insertHTML", g);
    }, m.readAsDataURL(l), u.target.value = "";
  }, [V]), ft = P((u) => {
    const l = u.target.files[0];
    if (!l) return;
    const m = new FileReader();
    m.onload = (k) => {
      Lr.convertToHtml({ arrayBuffer: k.target.result }).then((g) => i(g.value)).catch((g) => console.error("Error converting .docx to HTML:", g));
    }, m.readAsArrayBuffer(l), u.target.value = "";
  }, [i]), Je = P((u) => {
    if (_e(!1), !u) return;
    const m = ((g) => {
      let I;
      return g.includes("youtube.com/watch?v=") ? I = g.split("v=")[1].split("&")[0] : g.includes("youtu.be/") ? I = g.split("youtu.be/")[1].split("?")[0] : g.includes("vimeo.com/") && (I = g.split("vimeo.com/")[1].split("?")[0]), g.includes("youtube") || g.includes("youtu.be") ? `https://www.youtube.com/embed/${I}` : g.includes("vimeo") ? `https://player.vimeo.com/video/${I}` : null;
    })(u);
    if (!m) {
      alert("Invalid video URL. Please use a valid YouTube or Vimeo link.");
      return;
    }
    se(), b.current.focus();
    const k = `<div class="forma-text-video-wrapper" contenteditable="false"><iframe src="${m}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;
    V("insertHTML", k), G();
  }, [se, V, G]), Ze = P((u) => {
    ye(!1);
    let l = '<table class="forma-text-table" style="width:90%; border-collapse: collapse; border: 1px solid #a0a0a0ff; margin: auto;"><tbody>';
    for (let m = 0; m < u.rows; m++) {
      l += "<tr>";
      for (let k = 0; k < u.cols; k++)
        l += '<td style="border: 1px solid #afafafff; padding: 0.75rem;"><br></td>';
      l += "</tr>";
    }
    l += "</tbody></table><p><br></p>", V("insertHTML", l);
  }, [V]), Oe = P((u) => {
    const l = W == null ? void 0 : W.parentElement;
    if (!l || !l.classList.contains("forma-text-image-wrapper")) return;
    let m = l.parentElement;
    for (; m && m !== b.current; ) {
      const k = window.getComputedStyle(m).display;
      if (k === "block" || k === "flex" || k === "grid")
        break;
      m = m.parentElement;
    }
    switch (l.style.float = "", l.style.display = "inline-block", l.style.marginLeft = "", l.style.marginRight = "", m && (m.style.textAlign = ""), u) {
      case "center":
        m ? m.style.textAlign = "center" : (l.style.display = "block", l.style.marginLeft = "auto", l.style.marginRight = "auto");
        break;
      case "left":
        m && (m.style.textAlign = "left"), l.style.float = "left", l.style.marginRight = "1rem";
        break;
      case "right":
        m && (m.style.textAlign = "right"), l.style.float = "right", l.style.marginLeft = "1rem";
        break;
      default:
        m && (m.style.textAlign = "");
        break;
    }
    G();
  }, [W, G]), mt = P(() => {
    W && (W.parentElement.remove(), ae(null)), Ce && (Ce.remove(), ie(null)), te(null), G();
  }, [W, Ce, G]), Qe = P((u) => {
    u.preventDefault();
    const l = u.clientX, m = W.offsetWidth, k = (I) => {
      const Y = m + (I.clientX - l);
      if (Y > 40) {
        W.style.width = `${Y}px`, W.style.height = "auto";
        const L = W.getBoundingClientRect(), B = b.current.getBoundingClientRect();
        te({
          top: L.top - B.top + b.current.scrollTop,
          left: L.left - B.left + b.current.scrollLeft,
          width: L.width,
          height: L.height
        });
      }
    }, g = () => {
      document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", g), G();
    };
    document.addEventListener("mousemove", k), document.addEventListener("mouseup", g);
  }, [W, G]), et = (u, l) => {
    const m = new Sr(), k = m.diff_main(u, l);
    m.diff_cleanupSemantic(k);
    let g = "";
    for (const [I, Y] of k) {
      const L = Y.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/\n/g, "¶<br>");
      switch (I) {
        case _r:
          g += `<ins style="background-color: #d4edda; text-decoration: none;">${L}</ins>`;
          break;
        case Ar:
          g += `<del style="background-color: #f8d7da; text-decoration: none;">${L}</del>`;
          break;
        case Ir:
          g += `<span>${L}</span>`;
          break;
      }
    }
    return g;
  }, bt = async () => {
    var g, I, Y, L, B;
    if (!r.trim() || Ne) return;
    De(!0), ke(""), Ge(!1);
    const u = ["Analyzing...", "Generating suggestions...", "Optimizing flow...", "Finalizing..."];
    let l = 0;
    Fe(u[l]);
    const m = setInterval(() => {
      l = (l + 1) % u.length, Fe(u[l]);
    }, 2e3), k = `
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
      const ue = { contents: [{ role: "user", parts: [{ text: k }] }] }, gt = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${s}`, ze = await fetch(gt, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ue)
      });
      if (!ze.ok) throw new Error(`API call failed: ${ze.status}`);
      const Le = (B = (L = (Y = (I = (g = (await ze.json()).candidates) == null ? void 0 : g[0]) == null ? void 0 : I.content) == null ? void 0 : Y.parts) == null ? void 0 : L[0]) == null ? void 0 : B.text;
      if (Le)
        ke(Le), Re(et(r, Le)), Q(!0);
      else
        throw new Error("Invalid AI response format");
    } catch (ue) {
      console.error("Error calling Gemini API:", ue), Re(`<p>Sorry, an error occurred. ${ue.message}</p>`), Q(!0);
    } finally {
      clearInterval(m), De(!1), Fe("");
    }
  }, xt = () => {
    i(xe), Q(!1), ke(""), Re("");
  }, ht = [
    "forma-text-editor-container",
    a,
    M ? "forma-text-fullscreen" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(wo, {}),
    /* @__PURE__ */ e.jsxs("div", { id: v, className: ht, "data-theme": x, children: [
      /* @__PURE__ */ e.jsx("div", { className: `forma-text-toolbar-container ${c}`, children: /* @__PURE__ */ e.jsx(
        fr,
        {
          theme: x,
          applyStyle: V,
          applyLineHeight: Ke,
          activeStyles: A,
          onOpenLinkModal: Me,
          onImageUpload: pt,
          onDocxUpload: ft,
          onVideoModalOpen: () => {
            ce(), _e(!0);
          },
          onTableModalOpen: () => {
            ce(), ye(!0);
          },
          onAiRefactor: bt,
          content: r,
          isGenerating: Ne,
          isAiLoadingMinimized: Te
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { className: "forma-text-editor-area", onClick: Xe, onBlur: Ee, children: [
        /* @__PURE__ */ e.jsx(
          mr,
          {
            editorRef: b,
            content: r,
            showSource: p,
            onContentChange: dt,
            onKeyDown: ut,
            textContentClass: `forma-text-editor-content ${f}`
          }
        ),
        le && !p && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "forma-text-selection-overlay",
            style: {
              top: `${le.top}px`,
              left: `${le.left}px`,
              width: `${le.width}px`,
              height: `${le.height}px`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "forma-text-context-toolbar", children: [
                W && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx("button", { title: "Align Left", onClick: () => Oe("left"), children: /* @__PURE__ */ e.jsx(Pr, { size: 16 }) }),
                  /* @__PURE__ */ e.jsx("button", { title: "Align Center", onClick: () => Oe("center"), children: /* @__PURE__ */ e.jsx(Hr, { size: 16 }) }),
                  /* @__PURE__ */ e.jsx("button", { title: "Align Right", onClick: () => Oe("right"), children: /* @__PURE__ */ e.jsx(Ur, { size: 16 }) })
                ] }),
                /* @__PURE__ */ e.jsx("button", { title: "Delete", className: "forma-text-delete-btn rounded-5", onClick: mt, children: /* @__PURE__ */ e.jsx(Vr, { size: 16 }) })
              ] }),
              W && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "forma-text-resize-handle ",
                  onMouseDown: Qe
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        yr,
        {
          theme: x,
          wordCount: H.words,
          charCount: H.chars,
          onToggleSource: () => U(!p),
          showSource: p,
          onToggleFullScreen: () => $(!M),
          isFullScreen: M
        }
      ),
      Ne && /* @__PURE__ */ e.jsx(
        gr,
        {
          status: We,
          isMinimized: Te,
          onMinimizeToggle: () => Ge(!Te)
        }
      ),
      /* @__PURE__ */ e.jsx(
        br,
        {
          isOpen: ve,
          onClose: () => je(!1),
          onApply: $e,
          initialData: w,
          isEditing: !!oe
        }
      ),
      /* @__PURE__ */ e.jsx(
        xr,
        {
          isOpen: Ve,
          onClose: () => _e(!1),
          onInsert: Je
        }
      ),
      /* @__PURE__ */ e.jsx(
        hr,
        {
          isOpen: ct,
          onClose: () => ye(!1),
          onCreate: Ze
        }
      ),
      /* @__PURE__ */ e.jsx(
        vr,
        {
          isOpen: ne,
          onClose: () => Q(!1),
          onApply: xt,
          originalContent: r,
          suggestion: xe,
          highlightedDiff: Ye
        }
      )
    ] })
  ] });
}
yo.propTypes = {
  content: o.string,
  setContent: o.func,
  geminiApiKey: o.string,
  parentEditorClass: o.string,
  toolBarClass: o.string,
  textContentClass: o.string,
  theme: o.string
};
export {
  yo as default
};
//# sourceMappingURL=forma-text.js.map
