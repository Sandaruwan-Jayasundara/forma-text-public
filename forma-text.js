import Fe, { useState as T, useRef as Y, useEffect as Q, useCallback as V } from "react";
import n from "prop-types";
import Fr from "mammoth";
import { diff_match_patch as Or, DIFF_EQUAL as zr, DIFF_DELETE as Lr, DIFF_INSERT as Ir } from "diff-match-patch";
import { Palette as gt, Highlighter as vt, Smile as jt, Undo as Ct, Redo as wt, Pilcrow as et, Type as kt, ArrowDownUp as yt, Bold as Rt, Italic as Nt, Underline as Tt, Strikethrough as Et, Superscript as Ft, Subscript as Ot, AlignLeft as zt, AlignCenter as Lt, AlignRight as It, ListOrdered as At, List as St, Outdent as _t, Indent as Mt, Quote as Dt, Code as qt, Link as He, Minus as Ht, Eraser as Pt, Image as Ut, Video as tt, Table as rt, Columns as $t, FileUp as Bt, Sparkles as Pe, ChevronDown as tr, GripVertical as Ar, ExternalLink as Sr, ChevronsDownUp as _r, Minimize as nt, CodeXml as Vt, Maximize as Yt, Sigma as Mr, Binary as Dr, AlignStartVertical as qr, AlignCenterVertical as Hr, AlignEndVertical as Pr, Trash2 as Zt } from "lucide-react";
function Ur() {
  if (typeof document < "u") {
    const r = "bootstrap-css-cdn-link", s = "bootstrap-js-cdn-script";
    if (!document.getElementById(r)) {
      const i = document.createElement("link");
      i.id = r, i.rel = "stylesheet", i.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", i.crossOrigin = "anonymous", document.head.appendChild(i);
    }
    if (!document.getElementById(s)) {
      const i = document.createElement("script");
      i.id = s, i.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", i.crossOrigin = "anonymous", i.defer = !0, document.body.appendChild(i);
    }
  }
}
var ft = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function $r() {
  if (Qt) return De;
  Qt = 1;
  var r = Fe, s = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(f, E, _) {
    var F, H = {}, L = null, $ = null;
    _ !== void 0 && (L = "" + _), E.key !== void 0 && (L = "" + E.key), E.ref !== void 0 && ($ = E.ref);
    for (F in E) c.call(E, F) && !p.hasOwnProperty(F) && (H[F] = E[F]);
    if (f && f.defaultProps) for (F in E = f.defaultProps, E) H[F] === void 0 && (H[F] = E[F]);
    return { $$typeof: s, type: f, key: L, ref: $, props: H, _owner: u.current };
  }
  return De.Fragment = i, De.jsx = b, De.jsxs = b, De;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Br() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Fe, s = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), f = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), g = Symbol.iterator, x = "@@iterator";
    function M(t) {
      if (t === null || typeof t != "object")
        return null;
      var o = g && t[g] || t[x];
      return typeof o == "function" ? o : null;
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          d[h - 1] = arguments[h];
        oe("error", t, d);
      }
    }
    function oe(t, o, d) {
      {
        var h = D.ReactDebugCurrentFrame, w = h.getStackAddendum();
        w !== "" && (o += "%s", d = d.concat([w]));
        var k = d.map(function(j) {
          return String(j);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, k);
      }
    }
    var Oe = !1, C = !1, P = !1, se = !1, ot = !1, ve;
    ve = Symbol.for("react.module.reference");
    function it(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === c || t === p || ot || t === u || t === _ || t === F || se || t === $ || Oe || C || P || typeof t == "object" && t !== null && (t.$$typeof === L || t.$$typeof === H || t.$$typeof === b || t.$$typeof === f || t.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ve || t.getModuleId !== void 0));
    }
    function ze(t, o, d) {
      var h = t.displayName;
      if (h)
        return h;
      var w = o.displayName || o.name || "";
      return w !== "" ? d + "(" + w + ")" : d;
    }
    function $e(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case p:
          return "Profiler";
        case u:
          return "StrictMode";
        case _:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var o = t;
            return $e(o) + ".Consumer";
          case b:
            var d = t;
            return $e(d._context) + ".Provider";
          case E:
            return ze(t, t.render, "ForwardRef");
          case H:
            var h = t.displayName || null;
            return h !== null ? h : G(t.type) || "Memo";
          case L: {
            var w = t, k = w._payload, j = w._init;
            try {
              return G(j(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, te = 0, Be, je, Ce, Le, Ve, we, ke;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function ae() {
      {
        if (te === 0) {
          Be = console.log, je = console.info, Ce = console.warn, Le = console.error, Ve = console.group, we = console.groupCollapsed, ke = console.groupEnd;
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
        te++;
      }
    }
    function Ae() {
      {
        if (te--, te === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, t, {
              value: Be
            }),
            info: ee({}, t, {
              value: je
            }),
            warn: ee({}, t, {
              value: Ce
            }),
            error: ee({}, t, {
              value: Le
            }),
            group: ee({}, t, {
              value: Ve
            }),
            groupCollapsed: ee({}, t, {
              value: we
            }),
            groupEnd: ee({}, t, {
              value: ke
            })
          });
        }
        te < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = D.ReactCurrentDispatcher, pe;
    function Se(t, o, d) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (w) {
            var h = w.stack.trim().match(/\n( *(at )?)/);
            pe = h && h[1] || "";
          }
        return `
` + pe + t;
      }
    }
    var _e = !1, J;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      J = new re();
    }
    function q(t, o) {
      if (!t || _e)
        return "";
      {
        var d = J.get(t);
        if (d !== void 0)
          return d;
      }
      var h;
      _e = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = ue.current, ue.current = null, ae();
      try {
        if (o) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (W) {
              h = W;
            }
            Reflect.construct(t, [], j);
          } else {
            try {
              j.call();
            } catch (W) {
              h = W;
            }
            t.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            h = W;
          }
          t();
        }
      } catch (W) {
        if (W && h && typeof W.stack == "string") {
          for (var v = W.stack.split(`
`), B = h.stack.split(`
`), z = v.length - 1, S = B.length - 1; z >= 1 && S >= 0 && v[z] !== B[S]; )
            S--;
          for (; z >= 1 && S >= 0; z--, S--)
            if (v[z] !== B[S]) {
              if (z !== 1 || S !== 1)
                do
                  if (z--, S--, S < 0 || v[z] !== B[S]) {
                    var K = `
` + v[z].replace(" at new ", " at ");
                    return t.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, K), K;
                  }
                while (z >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ue.current = k, Ae(), Error.prepareStackTrace = w;
      }
      var Ee = t ? t.displayName || t.name : "", he = Ee ? Se(Ee) : "";
      return typeof t == "function" && J.set(t, he), he;
    }
    function st(t, o, d) {
      return q(t, !1);
    }
    function ye(t) {
      var o = t.prototype;
      return !!(o && o.isReactComponent);
    }
    function U(t, o, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return q(t, ye(t));
      if (typeof t == "string")
        return Se(t);
      switch (t) {
        case _:
          return Se("Suspense");
        case F:
          return Se("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case E:
            return st(t.render);
          case H:
            return U(t.type, o, d);
          case L: {
            var h = t, w = h._payload, k = h._init;
            try {
              return U(k(w), o, d);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Re = {}, Ye = D.ReactDebugCurrentFrame;
    function fe(t) {
      if (t) {
        var o = t._owner, d = U(t.type, t._source, o ? o.type : null);
        Ye.setExtraStackFrame(d);
      } else
        Ye.setExtraStackFrame(null);
    }
    function at(t, o, d, h, w) {
      {
        var k = Function.call.bind(me);
        for (var j in t)
          if (k(t, j)) {
            var v = void 0;
            try {
              if (typeof t[j] != "function") {
                var B = Error((h || "React class") + ": " + d + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              v = t[j](o, j, h, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              v = z;
            }
            v && !(v instanceof Error) && (fe(w), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", d, j, typeof v), fe(null)), v instanceof Error && !(v.message in Re) && (Re[v.message] = !0, fe(w), I("Failed %s type: %s", d, v.message), fe(null));
          }
      }
    }
    var lt = Array.isArray;
    function Me(t) {
      return lt(t);
    }
    function ct(t) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, d = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function dt(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function Ge(t) {
      if (dt(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ct(t)), We(t);
    }
    var Ke = D.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, a;
    function l(t) {
      if (me.call(t, "ref")) {
        var o = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function m(t) {
      if (me.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function O(t, o) {
      typeof t.ref == "string" && Ke.current;
    }
    function A(t, o) {
      {
        var d = function() {
          Ne || (Ne = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function le(t, o) {
      {
        var d = function() {
          a || (a = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var ie = function(t, o, d, h, w, k, j) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: t,
        key: o,
        ref: d,
        props: j,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function X(t, o, d, h, w) {
      {
        var k, j = {}, v = null, B = null;
        d !== void 0 && (Ge(d), v = "" + d), m(o) && (Ge(o.key), v = "" + o.key), l(o) && (B = o.ref, O(o, w));
        for (k in o)
          me.call(o, k) && !ut.hasOwnProperty(k) && (j[k] = o[k]);
        if (t && t.defaultProps) {
          var z = t.defaultProps;
          for (k in z)
            j[k] === void 0 && (j[k] = z[k]);
        }
        if (v || B) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          v && A(j, S), B && le(j, S);
        }
        return ie(t, v, B, w, h, Ke.current, j);
      }
    }
    var ce = D.ReactCurrentOwner, Z = D.ReactDebugCurrentFrame;
    function ne(t) {
      if (t) {
        var o = t._owner, d = U(t.type, t._source, o ? o.type : null);
        Z.setExtraStackFrame(d);
      } else
        Z.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function Je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function Te() {
      {
        if (ce.current) {
          var t = G(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function vr(t) {
      return "";
    }
    var Wt = {};
    function jr(t) {
      {
        var o = Te();
        if (!o) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (o = `

Check the top-level render call using <` + d + ">.");
        }
        return o;
      }
    }
    function Gt(t, o) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = jr(o);
        if (Wt[d])
          return;
        Wt[d] = !0;
        var h = "";
        t && t._owner && t._owner !== ce.current && (h = " It was passed a child from " + G(t._owner.type) + "."), ne(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, h), ne(null);
      }
    }
    function Kt(t, o) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var d = 0; d < t.length; d++) {
            var h = t[d];
            Je(h) && Gt(h, o);
          }
        else if (Je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = M(t);
          if (typeof w == "function" && w !== t.entries)
            for (var k = w.call(t), j; !(j = k.next()).done; )
              Je(j.value) && Gt(j.value, o);
        }
      }
    }
    function Cr(t) {
      {
        var o = t.type;
        if (o == null || typeof o == "string")
          return;
        var d;
        if (typeof o == "function")
          d = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === H))
          d = o.propTypes;
        else
          return;
        if (d) {
          var h = G(o);
          at(d, t.props, "prop", h, t);
        } else if (o.PropTypes !== void 0 && !be) {
          be = !0;
          var w = G(o);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(t) {
      {
        for (var o = Object.keys(t.props), d = 0; d < o.length; d++) {
          var h = o[d];
          if (h !== "children" && h !== "key") {
            ne(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), ne(null);
            break;
          }
        }
        t.ref !== null && (ne(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    var Jt = {};
    function Xt(t, o, d, h, w, k) {
      {
        var j = it(t);
        if (!j) {
          var v = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = vr();
          B ? v += B : v += Te();
          var z;
          t === null ? z = "null" : Me(t) ? z = "array" : t !== void 0 && t.$$typeof === s ? (z = "<" + (G(t.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : z = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, v);
        }
        var S = X(t, o, d, w, k);
        if (S == null)
          return S;
        if (j) {
          var K = o.children;
          if (K !== void 0)
            if (h)
              if (Me(K)) {
                for (var Ee = 0; Ee < K.length; Ee++)
                  Kt(K[Ee], t);
                Object.freeze && Object.freeze(K);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(K, t);
        }
        if (me.call(o, "key")) {
          var he = G(t), W = Object.keys(o).filter(function(Er) {
            return Er !== "key";
          }), pt = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jt[he + pt]) {
            var Tr = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, he, Tr, he), Jt[he + pt] = !0;
          }
        }
        return t === c ? wr(S) : Cr(S), S;
      }
    }
    function kr(t, o, d) {
      return Xt(t, o, d, !0);
    }
    function yr(t, o, d) {
      return Xt(t, o, d, !1);
    }
    var Rr = yr, Nr = kr;
    qe.Fragment = c, qe.jsx = Rr, qe.jsxs = Nr;
  }()), qe;
}
process.env.NODE_ENV === "production" ? ft.exports = $r() : ft.exports = Br();
var e = ft.exports;
const y = Fe.memo(
  ({ onClick: r, title: s, command: i, activeStyles: c, disabled: u = !1, children: p }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (b) => b.preventDefault(),
      className: `btn btn-outline-secondary ${c && c.has(i) ? "active" : ""}`,
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "bottom",
      title: s,
      disabled: u,
      children: p
    }
  )
);
y.propTypes = {
  onClick: n.func.isRequired,
  title: n.string.isRequired,
  command: n.string,
  activeStyles: n.object,
  disabled: n.bool,
  children: n.node.isRequired
};
y.displayName = "ToolbarButton";
const de = ({ title: r, icon: s, children: i }) => {
  const [c, u] = T(!1), p = Y(null);
  return Q(() => {
    const b = (f) => {
      p.current && !p.current.contains(f.target) && u(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "btn-group", ref: p, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        title: r,
        onClick: () => u(!c),
        onMouseDown: (b) => b.preventDefault(),
        className: "btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1",
        "aria-expanded": c,
        children: s
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `dropdown-menu ${c ? "show" : ""}`,
        onClick: (b) => {
          b.target.closest("button") && u(!1);
        },
        children: i
      }
    )
  ] });
};
de.propTypes = {
  title: n.string.isRequired,
  icon: n.node.isRequired,
  children: n.node.isRequired
};
const Vr = [
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
], bt = ({ command: r, applyStyle: s }) => {
  const i = r === "foreColor" ? "Text Color" : "Highlight Color", c = r === "foreColor" ? /* @__PURE__ */ e.jsx(gt, { size: 16 }) : /* @__PURE__ */ e.jsx(vt, { size: 16 });
  return /* @__PURE__ */ e.jsx(de, { title: i, icon: c, children: /* @__PURE__ */ e.jsx("div", { className: "p-2 d-flex flex-wrap gap-1", style: { width: "160px" }, children: Vr.map((u) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "color-swatch",
      style: { backgroundColor: u },
      onClick: () => s(r, u),
      "aria-label": u
    },
    u
  )) }) });
};
bt.propTypes = {
  command: n.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: n.func.isRequired
};
const Yr = [
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
], rr = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(de, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(jt, { size: 16 }), children: /* @__PURE__ */ e.jsx(
  "div",
  {
    className: "p-2 d-flex flex-wrap gap-1",
    style: { maxHeight: "200px", width: "250px", overflowY: "auto" },
    children: Yr.map((s) => /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "btn btn-sm btn-light fs-5",
        onClick: () => r("insertText", s),
        children: s
      },
      s
    ))
  }
) });
rr.propTypes = {
  applyStyle: n.func.isRequired
};
const Wr = [
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
}, Jr = { Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" }, Xr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>', Xe = `<button class="btn btn-danger delete-column-btn" contenteditable="false" title="Delete Columns">${Xr}</button>`, Zr = {
  "2 Columns (1:1)": `<div class="row">${Xe}<div class="col-6"><p>Column 1</p></div><div class="col-6"><p>Column 2</p></div></div>`,
  "3 Columns (1:1:1)": `<div class="row">${Xe}<div class="col-4"><p>C1</p></div><div class="col-4"><p>C2</p></div><div class="col-4"><p>C3</p></div></div>`,
  "2 Columns (1:2)": `<div class="row">${Xe}<div class="col-4"><p>C1</p></div><div class="col-8"><p>C2</p></div></div>`,
  "2 Columns (2:1)": `<div class="row">${Xe}<div class="col-8"><p>C1</p></div><div class="col-4"><p>C2</p></div></div>`
}, nr = ({
  applyStyle: r,
  applyLineHeight: s,
  activeStyles: i,
  onOpenLinkModal: c,
  onImageUpload: u,
  onDocxUpload: p,
  onVideoModalOpen: b,
  onTableModalOpen: f,
  onAiRefactor: E,
  content: _,
  isGenerating: F,
  isAiLoadingMinimized: H
}) => {
  const L = Y(null), $ = Y(null), g = Y(null);
  return Q(() => {
    if (L.current && typeof window.bootstrap < "u") {
      const M = [].slice.call(
        L.current.querySelectorAll('[data-bs-toggle="tooltip"]')
      ).map(
        (D) => new window.bootstrap.Tooltip(D)
      );
      return () => M.forEach((D) => D == null ? void 0 : D.dispose());
    }
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: L,
        className: "p-2 border-bottom d-flex flex-wrap align-items-center gap-2",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", role: "group", children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Undo (Ctrl+Z)",
                onClick: () => r("undo"),
                children: /* @__PURE__ */ e.jsx(Ct, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Redo (Ctrl+Y)",
                onClick: () => r("redo"),
                children: /* @__PURE__ */ e.jsx(wt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(de, { title: "Headings", icon: /* @__PURE__ */ e.jsx(et, { size: 14 }), children: Object.entries(Kr).map(([x, M]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                onClick: () => r("formatBlock", M),
                children: x
              },
              x
            )) }),
            /* @__PURE__ */ e.jsx(
              de,
              {
                title: "Font Family",
                icon: /* @__PURE__ */ e.jsx("span", { className: "fw-bold small", style: { fontSize: "12px" }, children: "Aa" }),
                children: Wr.map((x) => /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    className: "dropdown-item",
                    style: { fontFamily: x },
                    onClick: () => r("fontName", x),
                    children: x
                  },
                  x
                ))
              }
            ),
            /* @__PURE__ */ e.jsx(de, { title: "Font Size", icon: /* @__PURE__ */ e.jsx(kt, { size: 14 }), children: Object.entries(Gr).map(([x, M]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                onClick: () => r("fontSize", M),
                children: x
              },
              x
            )) }),
            /* @__PURE__ */ e.jsxs(de, { title: "Line Height", icon: /* @__PURE__ */ e.jsx(yt, { size: 14 }), children: [
              Object.entries(Jr).map(([x, M]) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "dropdown-item",
                  style: { fontSize: "14px" },
                  onClick: () => s(M),
                  children: x
                },
                x
              )),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "dropdown-item text-danger border-top border-danger mt-2",
                  style: { fontSize: "14px" },
                  onClick: () => s("normal"),
                  children: "Remove Height"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Bold (Ctrl+B)",
                command: "bold",
                activeStyles: i,
                onClick: () => r("bold"),
                children: /* @__PURE__ */ e.jsx(Rt, { size: 14 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Italic (Ctrl+I)",
                command: "italic",
                activeStyles: i,
                onClick: () => r("italic"),
                children: /* @__PURE__ */ e.jsx(Nt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Underline (Ctrl+U)",
                command: "underline",
                activeStyles: i,
                onClick: () => r("underline"),
                children: /* @__PURE__ */ e.jsx(Tt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Strikethrough",
                command: "strikeThrough",
                activeStyles: i,
                onClick: () => r("strikeThrough"),
                children: /* @__PURE__ */ e.jsx(Et, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Superscript",
                command: "superscript",
                activeStyles: i,
                onClick: () => r("superscript"),
                children: /* @__PURE__ */ e.jsx(Ft, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Subscript",
                command: "subscript",
                activeStyles: i,
                onClick: () => r("subscript"),
                children: /* @__PURE__ */ e.jsx(Ot, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(rr, { applyStyle: r })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(bt, { command: "foreColor", applyStyle: r }),
            /* @__PURE__ */ e.jsx(bt, { command: "backColor", applyStyle: r })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Align Left",
                command: "justifyLeft",
                activeStyles: i,
                onClick: () => r("justifyLeft"),
                children: /* @__PURE__ */ e.jsx(zt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Align Center",
                command: "justifyCenter",
                activeStyles: i,
                onClick: () => r("justifyCenter"),
                children: /* @__PURE__ */ e.jsx(Lt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Align Right",
                command: "justifyRight",
                activeStyles: i,
                onClick: () => r("justifyRight"),
                children: /* @__PURE__ */ e.jsx(It, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Ordered List",
                command: "insertOrderedList",
                activeStyles: i,
                onClick: () => r("insertOrderedList"),
                children: /* @__PURE__ */ e.jsx(At, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Unordered List",
                command: "insertUnorderedList",
                activeStyles: i,
                onClick: () => r("insertUnorderedList"),
                children: /* @__PURE__ */ e.jsx(St, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(y, { title: "Outdent", onClick: () => r("outdent"), children: /* @__PURE__ */ e.jsx(_t, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(y, { title: "Indent", onClick: () => r("indent"), children: /* @__PURE__ */ e.jsx(Mt, { size: 16 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Blockquote",
                onClick: () => r("formatBlock", "<blockquote>"),
                children: /* @__PURE__ */ e.jsx(Dt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Code Block",
                onClick: () => r("formatBlock", "<pre>"),
                children: /* @__PURE__ */ e.jsx(qt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Add/Edit Link (Ctrl+K)",
                onClick: c,
                children: /* @__PURE__ */ e.jsx(He, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Horizontal Line",
                onClick: () => r("insertHorizontalRule"),
                children: /* @__PURE__ */ e.jsx(Ht, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Clear Formatting",
                onClick: () => r("removeFormat"),
                children: /* @__PURE__ */ e.jsx(Pt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Insert Image",
                onClick: () => {
                  var x;
                  return (x = $.current) == null ? void 0 : x.click();
                },
                children: /* @__PURE__ */ e.jsx(Ut, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(y, { title: "Insert Video", onClick: b, children: /* @__PURE__ */ e.jsx(tt, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(y, { title: "Insert Table", onClick: f, children: /* @__PURE__ */ e.jsx(rt, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(de, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx($t, { size: 16 }), children: Object.entries(Zr).map(([x, M]) => /* @__PURE__ */ e.jsx(
              "button",
              {
                className: "dropdown-item",
                style: { fontSize: "14px" },
                onClick: () => r("insertHTML", M + "<p><br></p>"),
                children: x
              },
              x
            )) }),
            /* @__PURE__ */ e.jsx(
              y,
              {
                title: "Import from Word (.docx)",
                onClick: () => {
                  var x;
                  return (x = g.current) == null ? void 0 : x.click();
                },
                children: /* @__PURE__ */ e.jsx(Bt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "btn-group", children: /* @__PURE__ */ e.jsx(
            y,
            {
              title: "Improve with AI",
              onClick: E,
              disabled: !_ || _ === "" || F,
              children: F && !H ? /* @__PURE__ */ e.jsx("div", { className: "spinner-border spinner-border-sm", role: "status", children: /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) : /* @__PURE__ */ e.jsx(Pe, { size: 16 })
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
        ref: $,
        onChange: u,
        className: "d-none"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: g,
        onChange: p,
        className: "d-none"
      }
    )
  ] });
};
nr.propTypes = {
  applyStyle: n.func.isRequired,
  applyLineHeight: n.func.isRequired,
  activeStyles: n.object.isRequired,
  onOpenLinkModal: n.func.isRequired,
  onImageUpload: n.func.isRequired,
  onDocxUpload: n.func.isRequired,
  onVideoModalOpen: n.func.isRequired,
  onTableModalOpen: n.func.isRequired,
  onAiRefactor: n.func.isRequired,
  content: n.string,
  isGenerating: n.bool.isRequired,
  isAiLoadingMinimized: n.bool.isRequired
};
const R = Fe.memo(
  ({
    onClick: r,
    title: s,
    command: i,
    activeStyles: c,
    disabled: u = !1,
    children: p,
    className: b = ""
  }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (f) => f.preventDefault(),
      className: `modern-toolbar-button ${c && c.has(i) ? "active" : ""} ${b}`,
      title: s,
      disabled: u,
      children: p
    }
  )
);
R.propTypes = {
  onClick: n.func.isRequired,
  title: n.string.isRequired,
  command: n.string,
  activeStyles: n.object,
  disabled: n.bool,
  children: n.node.isRequired,
  className: n.string
};
R.displayName = "ModernToolbarButton";
const xe = ({ title: r, icon: s, children: i }) => {
  const [c, u] = T(!1), p = Y(null);
  return Q(() => {
    const b = (f) => {
      p.current && !p.current.contains(f.target) && u(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "modern-dropdown", ref: p, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        title: r,
        onClick: () => u(!c),
        onMouseDown: (b) => b.preventDefault(),
        className: "modern-toolbar-button",
        "aria-expanded": c,
        children: [
          s,
          /* @__PURE__ */ e.jsx(tr, { size: 14, style: { marginLeft: "4px" } })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `modern-dropdown-menu ${c ? "show" : ""}`,
        onClick: () => u(!1),
        children: i
      }
    )
  ] });
};
xe.propTypes = {
  title: n.string.isRequired,
  icon: n.node.isRequired,
  children: n.node.isRequired
};
const Qr = [
  "#000000",
  "#444444",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#FFFFFF",
  "#FF0000",
  "#FF9900",
  "#FFFF00",
  "#00FF00",
  "#00FFFF",
  "#0000FF",
  "#9900FF",
  "#FF00FF",
  "#CC0000",
  "#CC6600",
  "#CCCC00",
  "#00CC00",
  "#00CCCC",
  "#0000CC",
  "#6600CC",
  "#CC00CC"
], ht = ({ command: r, applyStyle: s }) => {
  const i = r === "foreColor" ? "Text Color" : "Highlight Color", c = r === "foreColor" ? /* @__PURE__ */ e.jsx(gt, { size: 26 }) : /* @__PURE__ */ e.jsx(vt, { size: 26 });
  return /* @__PURE__ */ e.jsx(xe, { title: i, icon: c, children: /* @__PURE__ */ e.jsx("div", { className: "modern-color-picker", children: Qr.map((u) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "modern-color-swatch",
      style: { backgroundColor: u },
      onClick: () => s(r, u),
      "aria-label": u
    },
    u
  )) }) });
};
ht.propTypes = {
  command: n.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: n.func.isRequired
};
const en = [
  "💻",
  "🚀",
  "💡",
  "🤖",
  "🌐",
  "⚙️",
  "🔧",
  "🔬",
  "🧪",
  "📈",
  "📊",
  "📝",
  "✅",
  "❌",
  "⚠️",
  "❓",
  "❗",
  "❤️",
  "👍",
  "👎",
  "🎉",
  "🔥",
  "💯",
  "👋"
], or = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(xe, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(jt, { size: 26 }), children: /* @__PURE__ */ e.jsx("div", { className: "modern-emoji-picker", children: en.map((s) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "modern-emoji",
    onClick: () => r("insertText", s),
    children: s
  },
  s
)) }) });
or.propTypes = {
  applyStyle: n.func.isRequired
};
const tn = [
  "Arial",
  "Georgia",
  "Helvetica",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New"
], rn = {
  "Heading 1": "<h1>",
  "Heading 2": "<h2>",
  "Heading 3": "<h3>",
  "Heading 4": "<h4>",
  "Heading 5": "<h5>",
  Paragraph: "<p>"
}, nn = { Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" }, on = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>', Ze = `<button class="btn btn-danger delete-column-btn" contenteditable="false" title="Delete Columns">${on}</button>`, sn = {
  "2 Columns (1:1)": `<div class="row">${Ze}<div class="col-6"><p>Column 1</p></div><div class="col-6"><p>Column 2</p></div></div>`,
  "3 Columns (1:1:1)": `<div class="row">${Ze}<div class="col-4"><p>C1</p></div><div class="col-4"><p>C2</p></div><div class="col-4"><p>C3</p></div></div>`,
  "2 Columns (1:2)": `<div class="row">${Ze}<div class="col-4"><p>C1</p></div><div class="col-8"><p>C2</p></div></div>`,
  "2 Columns (2:1)": `<div class="row">${Ze}<div class="col-8"><p>C1</p></div><div class="col-4"><p>C2</p></div></div>`
}, ir = ({
  applyStyle: r,
  applyLineHeight: s,
  activeStyles: i,
  onOpenLinkModal: c,
  onImageUpload: u,
  onDocxUpload: p,
  onVideoModalOpen: b,
  onTableModalOpen: f,
  onAiRefactor: E,
  content: _,
  isGenerating: F,
  isAiLoadingMinimized: H
}) => {
  const L = Y(null), $ = Y(null);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
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

    ` }),
    /* @__PURE__ */ e.jsxs("div", { className: "modern-toolbar", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Undo (Ctrl+Z)",
            onClick: () => r("undo"),
            children: /* @__PURE__ */ e.jsx(Ct, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Redo (Ctrl+Y)",
            onClick: () => r("redo"),
            children: /* @__PURE__ */ e.jsx(wt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(xe, { title: "Headings", icon: /* @__PURE__ */ e.jsx(et, { size: 26 }), children: Object.entries(rn).map(([g, x]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("formatBlock", x),
            children: g
          },
          g
        )) }),
        /* @__PURE__ */ e.jsx(xe, { title: "Font Family", icon: /* @__PURE__ */ e.jsx(kt, { size: 26 }), children: tn.map((g) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            style: { fontFamily: g },
            onClick: () => r("fontName", g),
            children: g
          },
          g
        )) }),
        /* @__PURE__ */ e.jsx(xe, { title: "Line Height", icon: /* @__PURE__ */ e.jsx(yt, { size: 26 }), children: Object.entries(nn).map(([g, x]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => s(x),
            children: g
          },
          g
        )) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Bold (Ctrl+B)",
            command: "bold",
            activeStyles: i,
            onClick: () => r("bold"),
            children: /* @__PURE__ */ e.jsx(Rt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Italic (Ctrl+I)",
            command: "italic",
            activeStyles: i,
            onClick: () => r("italic"),
            children: /* @__PURE__ */ e.jsx(Nt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Underline (Ctrl+U)",
            command: "underline",
            activeStyles: i,
            onClick: () => r("underline"),
            children: /* @__PURE__ */ e.jsx(Tt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Strikethrough",
            command: "strikeThrough",
            activeStyles: i,
            onClick: () => r("strikeThrough"),
            children: /* @__PURE__ */ e.jsx(Et, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Superscript",
            command: "superscript",
            activeStyles: i,
            onClick: () => r("superscript"),
            children: /* @__PURE__ */ e.jsx(Ft, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Subscript",
            command: "subscript",
            activeStyles: i,
            onClick: () => r("subscript"),
            children: /* @__PURE__ */ e.jsx(Ot, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(or, { applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(ht, { command: "foreColor", applyStyle: r }),
        /* @__PURE__ */ e.jsx(ht, { command: "backColor", applyStyle: r })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Align Left",
            command: "justifyLeft",
            activeStyles: i,
            onClick: () => r("justifyLeft"),
            children: /* @__PURE__ */ e.jsx(zt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Align Center",
            command: "justifyCenter",
            activeStyles: i,
            onClick: () => r("justifyCenter"),
            children: /* @__PURE__ */ e.jsx(Lt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Align Right",
            command: "justifyRight",
            activeStyles: i,
            onClick: () => r("justifyRight"),
            children: /* @__PURE__ */ e.jsx(It, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Ordered List",
            command: "insertOrderedList",
            activeStyles: i,
            onClick: () => r("insertOrderedList"),
            children: /* @__PURE__ */ e.jsx(At, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Unordered List",
            command: "insertUnorderedList",
            activeStyles: i,
            onClick: () => r("insertUnorderedList"),
            children: /* @__PURE__ */ e.jsx(St, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Outdent",
            onClick: () => r("outdent"),
            children: /* @__PURE__ */ e.jsx(_t, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Indent",
            onClick: () => r("indent"),
            children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Blockquote",
            onClick: () => r("formatBlock", "<blockquote>"),
            children: /* @__PURE__ */ e.jsx(Dt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Code Block",
            onClick: () => r("formatBlock", "<pre>"),
            children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Add/Edit Link (Ctrl+K)",
            onClick: c,
            children: /* @__PURE__ */ e.jsx(He, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Horizontal Line",
            onClick: () => r("insertHorizontalRule"),
            children: /* @__PURE__ */ e.jsx(Ht, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Insert Image",
            onClick: () => {
              var g;
              return (g = L.current) == null ? void 0 : g.click();
            },
            children: /* @__PURE__ */ e.jsx(Ut, { size: 18 })
          }
        ),
        /* @__PURE__ */ e.jsx(R, { title: "Insert Video", onClick: b, children: /* @__PURE__ */ e.jsx(tt, { size: 20 }) }),
        /* @__PURE__ */ e.jsx(R, { title: "Insert Table", onClick: f, children: /* @__PURE__ */ e.jsx(rt, { size: 18 }) }),
        /* @__PURE__ */ e.jsx(xe, { title: "Insert Columns", icon: /* @__PURE__ */ e.jsx($t, { size: 26 }), children: Object.entries(sn).map(([g, x]) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "modern-dropdown-item",
            onClick: () => r("insertHTML", x + "<p><br></p>"),
            children: g
          },
          g
        )) }),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Import from Word (.docx)",
            onClick: () => {
              var g;
              return (g = $.current) == null ? void 0 : g.click();
            },
            children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Improve with AI",
            onClick: E,
            disabled: !_ || _ === "" || F,
            className: "modern-ai-button",
            children: F && !H ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(Pe, { size: 20 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          R,
          {
            title: "Clear Formatting",
            onClick: () => r("removeFormat"),
            children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: L,
        onChange: u,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: $,
        onChange: p,
        style: { display: "none" }
      }
    )
  ] });
};
ir.propTypes = {
  applyStyle: n.func.isRequired,
  applyLineHeight: n.func.isRequired,
  activeStyles: n.object.isRequired,
  onOpenLinkModal: n.func.isRequired,
  onImageUpload: n.func.isRequired,
  onDocxUpload: n.func.isRequired,
  onVideoModalOpen: n.func.isRequired,
  onTableModalOpen: n.func.isRequired,
  onAiRefactor: n.func.isRequired,
  content: n.string,
  isGenerating: n.bool.isRequired,
  isAiLoadingMinimized: n.bool.isRequired
};
const N = Fe.memo(
  ({
    onClick: r,
    title: s,
    cmd: i,
    active: c,
    disabled: u = !1,
    children: p,
    className: b = ""
  }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (f) => f.preventDefault(),
      className: `futuristic-button ${c && c.has(i) ? "active" : ""} ${b}`,
      title: s,
      disabled: u,
      children: /* @__PURE__ */ e.jsx("span", { className: "button-content", children: p })
    }
  )
);
N.propTypes = {
  onClick: n.func.isRequired,
  title: n.string.isRequired,
  cmd: n.string,
  active: n.object,
  disabled: n.bool,
  children: n.node.isRequired,
  className: n.string
};
N.displayName = "FuturisticToolbarButton";
const ge = ({ title: r, icon: s, children: i }) => {
  const [c, u] = T(!1), p = Y(null);
  return Q(() => {
    const b = (f) => {
      p.current && !p.current.contains(f.target) && u(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "futuristic-dropdown", ref: p, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        title: r,
        onClick: () => u(!c),
        onMouseDown: (b) => b.preventDefault(),
        className: "futuristic-button",
        "aria-expanded": c,
        children: /* @__PURE__ */ e.jsxs("span", { className: "button-content", children: [
          s,
          /* @__PURE__ */ e.jsx(
            tr,
            {
              size: 16,
              className: `chevron-icon ${c ? "open" : ""}`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `futuristic-dropdown-menu ${c ? "show" : ""}`,
        onClick: () => u(!1),
        children: i
      }
    )
  ] });
};
ge.propTypes = {
  title: n.string.isRequired,
  icon: n.node.isRequired,
  children: n.node.isRequired
};
const an = [
  "#FF00FF",
  "#00FFFF",
  "#FFFF00",
  "#FF007F",
  "#00FF7F",
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#404040",
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#800080",
  "#FFA500"
], xt = ({ command: r, applyStyle: s }) => {
  const i = r === "foreColor" ? "Text Color" : "Highlight Color", c = r === "foreColor" ? /* @__PURE__ */ e.jsx(gt, { size: 18 }) : /* @__PURE__ */ e.jsx(vt, { size: 18 });
  return /* @__PURE__ */ e.jsx(ge, { title: i, icon: c, children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-color-picker", children: an.map((u) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "color-swatch-hexagon",
      onClick: () => s(r, u),
      "aria-label": u,
      children: /* @__PURE__ */ e.jsx("div", { className: "hexagon-inner", style: { backgroundColor: u } })
    },
    u
  )) }) });
};
xt.propTypes = {
  command: n.oneOf(["foreColor", "backColor"]).isRequired,
  applyStyle: n.func.isRequired
};
const ln = [
  "🚀",
  "💡",
  "🤖",
  "⚡",
  "✨",
  "🌌",
  "🛰️",
  "🛸",
  "👽",
  "🧬",
  "🧪",
  "🧑‍🚀"
], sr = ({ applyStyle: r }) => /* @__PURE__ */ e.jsx(ge, { title: "Insert Emoji", icon: /* @__PURE__ */ e.jsx(jt, { size: 18 }), children: /* @__PURE__ */ e.jsx("div", { className: "futuristic-emoji-picker", children: ln.map((s) => /* @__PURE__ */ e.jsx(
  "button",
  {
    type: "button",
    className: "futuristic-emoji",
    onClick: () => r("insertText", s),
    children: s
  },
  s
)) }) });
sr.propTypes = {
  applyStyle: n.func.isRequired
};
const cn = ["Arial", "Georgia", "Verdana", "Courier New"], dn = { H1: "<h1>", H2: "<h2>", H3: "<h3>", Paragraph: "<p>" }, un = { Single: "1", 1.5: "1.5", Double: "2" }, pn = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>', mt = `<button class="btn btn-danger delete-column-btn" contenteditable="false" title="Delete Columns">${pn}</button>`, mn = {
  "1:1": `<div class="row">${mt}<div class="col-6"><p>C1</p></div><div class="col-6"><p>C2</p></div></div>`,
  "1:1:1": `<div class="row">${mt}<div class="col-4"><p>C1</p></div><div class="col-4"><p>C2</p></div><div class="col-4"><p>C3</p></div></div>`,
  "1:2": `<div class="row">${mt}<div class="col-4"><p>C1</p></div><div class="col-8"><p>C2</p></div></div>`
}, ar = ({
  applyStyle: r,
  applyLineHeight: s,
  activeStyles: i,
  onOpenLinkModal: c,
  onImageUpload: u,
  onDocxUpload: p,
  onVideoModalOpen: b,
  onTableModalOpen: f,
  onAiRefactor: E,
  content: _,
  isGenerating: F,
  isAiLoadingMinimized: H
}) => {
  const L = Y(null), $ = Y(null), g = Y(null), [x, M] = T({ x: 50, y: 50 }), [D, I] = T(!1), oe = Y({ x: 0, y: 0 }), Oe = (C) => {
    C.button === 0 && (I(!0), oe.current = {
      x: C.clientX - x.x,
      y: C.clientY - x.y
    }, C.preventDefault());
  };
  return Q(() => {
    const C = (se) => {
      D && M({
        x: se.clientX - oe.current.x,
        y: se.clientY - oe.current.y
      });
    }, P = () => I(!1);
    return window.addEventListener("mousemove", C), window.addEventListener("mouseup", P), () => {
      window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", P);
    };
  }, [D]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
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

      ` }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: g,
        className: `futuristic-toolbar ${D ? "is-dragging" : ""}`,
        style: { top: `${x.y}px`, left: `${x.x}px` },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "drag-handle",
              onMouseDown: Oe,
              title: "Drag Toolbar",
              children: /* @__PURE__ */ e.jsx(Ar, { size: 20 })
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "toolbar-content", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Undo",
                  onClick: () => r("undo"),
                  children: /* @__PURE__ */ e.jsx(Ct, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Redo",
                  onClick: () => r("redo"),
                  children: /* @__PURE__ */ e.jsx(wt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(ge, { title: "Headings", icon: /* @__PURE__ */ e.jsx(et, { size: 18 }), children: Object.entries(dn).map(([C, P]) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "futuristic-dropdown-item",
                  onClick: () => r("formatBlock", P),
                  children: C
                },
                C
              )) }),
              /* @__PURE__ */ e.jsx(ge, { title: "Font", icon: /* @__PURE__ */ e.jsx(kt, { size: 18 }), children: cn.map((C) => /* @__PURE__ */ e.jsx(
                "button",
                {
                  className: "futuristic-dropdown-item",
                  style: { fontFamily: C },
                  onClick: () => r("fontName", C),
                  children: C
                },
                C
              )) }),
              /* @__PURE__ */ e.jsx(
                ge,
                {
                  title: "Line Height",
                  icon: /* @__PURE__ */ e.jsx(yt, { size: 18 }),
                  children: Object.entries(un).map(([C, P]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => s(P),
                      children: C
                    },
                    C
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Bold",
                  cmd: "bold",
                  active: i,
                  onClick: () => r("bold"),
                  children: /* @__PURE__ */ e.jsx(Rt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Italic",
                  cmd: "italic",
                  active: i,
                  onClick: () => r("italic"),
                  children: /* @__PURE__ */ e.jsx(Nt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Underline",
                  cmd: "underline",
                  active: i,
                  onClick: () => r("underline"),
                  children: /* @__PURE__ */ e.jsx(Tt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Strikethrough",
                  cmd: "strikeThrough",
                  active: i,
                  onClick: () => r("strikeThrough"),
                  children: /* @__PURE__ */ e.jsx(Et, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Superscript",
                  cmd: "superscript",
                  active: i,
                  onClick: () => r("superscript"),
                  children: /* @__PURE__ */ e.jsx(Ft, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Subscript",
                  cmd: "subscript",
                  active: i,
                  onClick: () => r("subscript"),
                  children: /* @__PURE__ */ e.jsx(Ot, { size: 18 })
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
                N,
                {
                  title: "Align Left",
                  cmd: "justifyLeft",
                  active: i,
                  onClick: () => r("justifyLeft"),
                  children: /* @__PURE__ */ e.jsx(zt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Align Center",
                  cmd: "justifyCenter",
                  active: i,
                  onClick: () => r("justifyCenter"),
                  children: /* @__PURE__ */ e.jsx(Lt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Align Right",
                  cmd: "justifyRight",
                  active: i,
                  onClick: () => r("justifyRight"),
                  children: /* @__PURE__ */ e.jsx(It, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Ordered List",
                  cmd: "insertOrderedList",
                  active: i,
                  onClick: () => r("insertOrderedList"),
                  children: /* @__PURE__ */ e.jsx(At, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Unordered List",
                  cmd: "insertUnorderedList",
                  active: i,
                  onClick: () => r("insertUnorderedList"),
                  children: /* @__PURE__ */ e.jsx(St, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Outdent",
                  onClick: () => r("outdent"),
                  children: /* @__PURE__ */ e.jsx(_t, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Indent",
                  onClick: () => r("indent"),
                  children: /* @__PURE__ */ e.jsx(Mt, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Add/Edit Link",
                  onClick: c,
                  children: /* @__PURE__ */ e.jsx(He, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Blockquote",
                  onClick: () => r("formatBlock", "<blockquote>"),
                  children: /* @__PURE__ */ e.jsx(Dt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Code Block",
                  onClick: () => r("formatBlock", "<pre>"),
                  children: /* @__PURE__ */ e.jsx(qt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Horizontal Line",
                  onClick: () => r("insertHorizontalRule"),
                  children: /* @__PURE__ */ e.jsx(Ht, { size: 18 })
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
                    var C;
                    return (C = L.current) == null ? void 0 : C.click();
                  },
                  children: /* @__PURE__ */ e.jsx(Ut, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Insert Video",
                  onClick: b,
                  children: /* @__PURE__ */ e.jsx(tt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Insert Table",
                  onClick: f,
                  children: /* @__PURE__ */ e.jsx(rt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                ge,
                {
                  title: "Insert Columns",
                  icon: /* @__PURE__ */ e.jsx($t, { size: 18 }),
                  children: Object.entries(mn).map(([C, P]) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "futuristic-dropdown-item",
                      onClick: () => r("insertHTML", P + "<p><br></p>"),
                      children: C
                    },
                    C
                  ))
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Import from Word",
                  onClick: () => {
                    var C;
                    return (C = $.current) == null ? void 0 : C.click();
                  },
                  children: /* @__PURE__ */ e.jsx(Bt, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(sr, { applyStyle: r })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "toolbar-separator" }),
            /* @__PURE__ */ e.jsxs("div", { className: "toolbar-group", children: [
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Improve with AI",
                  onClick: E,
                  disabled: !_ || F,
                  className: "ai-button",
                  children: F ? /* @__PURE__ */ e.jsx("div", { className: "spinner" }) : /* @__PURE__ */ e.jsx(Pe, { size: 18 })
                }
              ),
              /* @__PURE__ */ e.jsx(
                N,
                {
                  title: "Clear Formatting",
                  onClick: () => r("removeFormat"),
                  children: /* @__PURE__ */ e.jsx(Pt, { size: 18 })
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
        ref: L,
        onChange: u,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: $,
        onChange: p,
        style: { display: "none" }
      }
    )
  ] });
};
ar.propTypes = {
  applyStyle: n.func.isRequired,
  activeStyles: n.object.isRequired,
  applyLineHeight: n.func.isRequired,
  onOpenLinkModal: n.func.isRequired,
  onImageUpload: n.func.isRequired,
  onDocxUpload: n.func.isRequired,
  onVideoModalOpen: n.func.isRequired,
  onTableModalOpen: n.func.isRequired,
  onAiRefactor: n.func.isRequired,
  content: n.string,
  isGenerating: n.bool.isRequired,
  isAiLoadingMinimized: n.bool.isRequired
};
const lr = ({ theme: r, ...s }) => r === "modern" ? /* @__PURE__ */ e.jsx(ir, { ...s }) : r === "futuristic" ? /* @__PURE__ */ e.jsx(ar, { ...s }) : /* @__PURE__ */ e.jsx(nr, { ...s });
lr.propTypes = {
  theme: n.oneOf(["classic", "modern", "futuristic"])
};
const cr = ({
  editorRef: r,
  content: s,
  showSource: i,
  onContentChange: c,
  onKeyDown: u,
  textContentClass: p
}) => i ? /* @__PURE__ */ e.jsx(
  "textarea",
  {
    value: s || "",
    onChange: c,
    className: "form-control rounded-0 border-0 h-100 p-3 font-monospace small bg-dark text-light",
    style: { minHeight: "60vh", resize: "none" }
  }
) : /* @__PURE__ */ e.jsx(
  "div",
  {
    ref: r,
    contentEditable: !0,
    suppressContentEditableWarning: !0,
    className: `editor-content form-control rounded-0 border-0 h-100 p-3 ${p}`,
    style: { minHeight: "60vh" },
    onInput: c,
    onKeyDown: u
  }
);
cr.propTypes = {
  editorRef: n.object.isRequired,
  content: n.string,
  showSource: n.bool.isRequired,
  onContentChange: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  textContentClass: n.string
};
const Ue = ({ children: r, onClose: s, title: i, icon: c, size: u = "modal-dialog-centered" }) => /* @__PURE__ */ e.jsx("div", { className: "modal fade show", style: { display: "block", backgroundColor: "rgba(0,0,0,0.5)" }, onClick: s, children: /* @__PURE__ */ e.jsx("div", { className: `modal-dialog ${u}`, onClick: (p) => p.stopPropagation(), children: /* @__PURE__ */ e.jsxs("div", { className: "modal-content border-0 shadow-lg", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "modal-header bg-light border-0", children: [
    /* @__PURE__ */ e.jsxs("h5", { className: "modal-title d-flex align-items-center gap-2", children: [
      c,
      i
    ] }),
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn-close", onClick: s })
  ] }),
  r
] }) }) });
Ue.propTypes = {
  children: n.node.isRequired,
  onClose: n.func.isRequired,
  title: n.string.isRequired,
  icon: n.node,
  size: n.string
};
const dr = ({ isOpen: r, onClose: s, onApply: i, initialData: c, isEditing: u }) => {
  const [p, b] = T({ text: "", href: "" });
  return Q(() => {
    r && b(c);
  }, [r, c]), r ? /* @__PURE__ */ e.jsxs(
    Ue,
    {
      onClose: s,
      title: u ? "Edit Link" : "Add Link",
      icon: /* @__PURE__ */ e.jsx(He, { size: 20, className: "text-primary" }),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Link Text" }),
            /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ e.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ e.jsx(et, { size: 16 }) }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  value: p.text,
                  onChange: (f) => b({ ...p, text: f.target.value })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Link URL" }),
            /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ e.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ e.jsx(Sr, { size: 16 }) }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "url",
                  className: "form-control",
                  value: p.href,
                  onChange: (f) => b({ ...p, href: f.target.value }),
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
              onClick: s,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-primary",
              onClick: () => i(p),
              children: "Apply Link"
            }
          )
        ] })
      ]
    }
  ) : null;
};
dr.propTypes = {
  isOpen: n.bool.isRequired,
  onClose: n.func.isRequired,
  onApply: n.func.isRequired,
  initialData: n.shape({
    text: n.string,
    href: n.string
  }).isRequired,
  isEditing: n.bool.isRequired
};
const ur = ({ isOpen: r, onClose: s, onInsert: i }) => {
  const [c, u] = T("");
  if (!r) return null;
  const p = () => {
    i(c), u("");
  };
  return /* @__PURE__ */ e.jsxs(
    Ue,
    {
      onClose: s,
      title: "Insert Video",
      icon: /* @__PURE__ */ e.jsx(tt, { size: 20, className: "text-primary" }),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
          /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Video URL" }),
          /* @__PURE__ */ e.jsxs("div", { className: "input-group", children: [
            /* @__PURE__ */ e.jsx("span", { className: "input-group-text", children: /* @__PURE__ */ e.jsx(He, { size: 16 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "url",
                className: "form-control",
                value: c,
                onChange: (b) => u(b.target.value),
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
              onClick: s,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-primary",
              onClick: p,
              children: "Insert Video"
            }
          )
        ] })
      ]
    }
  );
};
ur.propTypes = {
  isOpen: n.bool.isRequired,
  onClose: n.func.isRequired,
  onInsert: n.func.isRequired
};
const pr = ({ isOpen: r, onClose: s, onCreate: i }) => {
  const [c, u] = T({ rows: 3, cols: 3 });
  return r ? /* @__PURE__ */ e.jsxs(
    Ue,
    {
      onClose: s,
      title: "Create Table",
      icon: /* @__PURE__ */ e.jsx(rt, { size: 20, className: "text-primary" }),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "modal-body p-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ e.jsx("label", { className: "form-label fw-semibold", children: "Rows" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "number",
                className: "form-control",
                value: c.rows,
                min: "1",
                onChange: (p) => u({
                  ...c,
                  rows: parseInt(p.target.value, 10) || 1
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
                value: c.cols,
                min: "1",
                onChange: (p) => u({
                  ...c,
                  cols: parseInt(p.target.value, 10) || 1
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
              onClick: s,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "btn editor-primary",
              onClick: () => i(c),
              children: "Create"
            }
          )
        ] })
      ]
    }
  ) : null;
};
pr.propTypes = {
  isOpen: n.bool.isRequired,
  onClose: n.func.isRequired,
  onCreate: n.func.isRequired
};
const mr = ({ status: r, isMinimized: s, onMinimizeToggle: i }) => s ? /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-popup-minimized", children: [
  /* @__PURE__ */ e.jsx("div", { className: "spinner-border spinner-border-sm text-primary", role: "status" }),
  /* @__PURE__ */ e.jsx("span", { className: "ms-2 small", children: "AI is working..." }),
  /* @__PURE__ */ e.jsx("button", { onClick: i, className: "btn btn-sm btn-light ms-auto", children: /* @__PURE__ */ e.jsx(_r, { size: 14 }) })
] }) : /* @__PURE__ */ e.jsxs("div", { className: "ai-loading-popup", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
    /* @__PURE__ */ e.jsxs("h6", { className: "mb-0 d-flex align-items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(Pe, { size: 18, className: "text-primary" }),
      "AI Assistant"
    ] }),
    /* @__PURE__ */ e.jsx("button", { onClick: i, className: "btn btn-sm btn-light", children: /* @__PURE__ */ e.jsx(nt, { size: 14 }) })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "d-flex align-items-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "spinner-border text-primary me-3", role: "status", children: /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Loading..." }) }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "mb-0 fw-bold", children: "Working on it..." }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-0 text-muted small", children: r })
    ] })
  ] })
] });
mr.propTypes = {
  status: n.string.isRequired,
  isMinimized: n.bool.isRequired,
  onMinimizeToggle: n.func.isRequired
};
const fr = ({ isOpen: r, onClose: s, onApply: i, originalContent: c, suggestion: u, highlightedDiff: p }) => r ? /* @__PURE__ */ e.jsxs(Ue, { onClose: s, title: "AI Content Suggestion", icon: /* @__PURE__ */ e.jsx(Pe, { size: 20, className: "text-primary" }), size: "modal-xl", children: [
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
          /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: c } })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-success", children: "AI Suggestion" }),
          /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: u } })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "tab-pane fade", id: "diff-pane", role: "tabpanel", "aria-labelledby": "diff-tab", children: [
        /* @__PURE__ */ e.jsx("h6", { className: "mb-2 text-primary", children: "Highlighted Differences" }),
        /* @__PURE__ */ e.jsxs("p", { className: "small text-muted", children: [
          /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 me-2 rounded", style: { backgroundColor: "#d4edda" }, children: "Added content" }),
          /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 rounded", style: { backgroundColor: "#f8d7da" }, children: "Removed content" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "ai-preview-pane", dangerouslySetInnerHTML: { __html: p } })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "modal-footer border-0 bg-light", children: [
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-secondary", onClick: s, children: "Cancel" }),
    /* @__PURE__ */ e.jsx("button", { type: "button", className: "btn editor-primary", onClick: i, children: "Apply Suggestion" })
  ] })
] }) : null;
fr.propTypes = {
  isOpen: n.bool.isRequired,
  onClose: n.func.isRequired,
  onApply: n.func.isRequired,
  originalContent: n.string,
  suggestion: n.string,
  highlightedDiff: n.string
};
const Qe = Fe.memo(
  ({ onClick: r, title: s, command: i, activeStyles: c, disabled: u = !1, children: p }) => /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      onClick: r,
      onMouseDown: (b) => b.preventDefault(),
      className: `btn btn-outline-secondary ${c && c.has(i) ? "active" : ""}`,
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "bottom",
      title: s,
      disabled: u,
      children: p
    }
  )
);
Qe.propTypes = {
  onClick: n.func.isRequired,
  title: n.string.isRequired,
  command: n.string,
  activeStyles: n.object,
  disabled: n.bool,
  children: n.node.isRequired
};
Qe.displayName = "StatusToolbarButton";
const br = ({
  wordCount: r,
  charCount: s,
  onToggleSource: i,
  showSource: c,
  onToggleFullScreen: u,
  isFullScreen: p,
  trialExpiresIn: b
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex-shrink-0 p-2 border-top bg-light d-flex justify-content-between align-items-center small text-muted", children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "footer-text-area", children: [
      "Words: ",
      r
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "mx-2", children: "|" }),
    /* @__PURE__ */ e.jsxs("span", { className: "footer-text-area", children: [
      "Characters: ",
      s
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "btn-group", children: [
    /* @__PURE__ */ e.jsx(Qe, { title: "View HTML Source", onClick: i, children: /* @__PURE__ */ e.jsx(Vt, { size: 16 }) }),
    /* @__PURE__ */ e.jsx(
      Qe,
      {
        title: p ? "Exit Full Screen" : "Full Screen",
        onClick: u,
        children: p ? /* @__PURE__ */ e.jsx(nt, { size: 16 }) : /* @__PURE__ */ e.jsx(Yt, { size: 16 })
      }
    )
  ] })
] });
br.propTypes = {
  wordCount: n.number.isRequired,
  charCount: n.number.isRequired,
  onToggleSource: n.func.isRequired,
  showSource: n.bool.isRequired,
  onToggleFullScreen: n.func.isRequired,
  isFullScreen: n.bool.isRequired,
  isPremium: n.bool
};
const hr = ({
  wordCount: r,
  charCount: s,
  onToggleSource: i,
  isFullScreen: c,
  onToggleFullScreen: u
}) => {
  const [p, b] = T(!1);
  return Q(() => {
    const f = setTimeout(() => b(!0), 100);
    return () => clearTimeout(f);
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
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

      ` }),
    /* @__PURE__ */ e.jsxs("div", { className: `futuristic-statusbar-v2 ${p ? "is-booted" : ""}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket top-left" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket top-right" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket bottom-left" }),
      /* @__PURE__ */ e.jsx("div", { className: "corner-bracket bottom-right" }),
      /* @__PURE__ */ e.jsx("div", { className: "grid-background" }),
      /* @__PURE__ */ e.jsxs("div", { className: "statusbar-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "status-group-v2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "data-readout", title: "Word Count", children: [
            /* @__PURE__ */ e.jsx(Mr, { size: 16, className: "data-icon" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-label", children: "WORDS" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-value", children: r.toString().padStart(4, "0") })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "data-readout", title: "Character Count", children: [
            /* @__PURE__ */ e.jsx(Dr, { size: 16, className: "data-icon" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-label", children: "CHARS" }),
            /* @__PURE__ */ e.jsx("span", { className: "data-value", children: s.toString().padStart(5, "0") })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "status-group-v2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "action-button",
              title: "View HTML Source",
              onClick: i,
              children: /* @__PURE__ */ e.jsx(Vt, { size: 18 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "action-button",
              title: c ? "Exit Full Screen" : "Full Screen",
              onClick: u,
              children: c ? /* @__PURE__ */ e.jsx(nt, { size: 18 }) : /* @__PURE__ */ e.jsx(Yt, { size: 18 })
            }
          )
        ] })
      ] })
    ] })
  ] });
};
hr.propTypes = {
  wordCount: n.number.isRequired,
  charCount: n.number.isRequired,
  onToggleSource: n.func.isRequired,
  onToggleFullScreen: n.func.isRequired,
  isFullScreen: n.bool.isRequired
};
const xr = ({
  wordCount: r,
  charCount: s,
  onToggleSource: i,
  isFullScreen: c,
  onToggleFullScreen: u
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("style", { children: `
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

    ` }),
  /* @__PURE__ */ e.jsxs("div", { className: "modern-statusbar", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "statusbar-segment", children: [
      /* @__PURE__ */ e.jsxs("span", { className: "statusbar-item", children: [
        "Words: ",
        r
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "statusbar-divider", children: "|" }),
      /* @__PURE__ */ e.jsxs("span", { className: "statusbar-item", children: [
        "Characters: ",
        s
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "statusbar-segment", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "statusbar-button",
          title: "View HTML Source",
          onClick: i,
          children: /* @__PURE__ */ e.jsx(Vt, { size: 18 })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "statusbar-button",
          title: c ? "Exit Full Screen" : "Full Screen",
          onClick: u,
          children: c ? /* @__PURE__ */ e.jsx(nt, { size: 18 }) : /* @__PURE__ */ e.jsx(Yt, { size: 18 })
        }
      )
    ] })
  ] })
] });
xr.propTypes = {
  wordCount: n.number.isRequired,
  charCount: n.number.isRequired,
  onToggleSource: n.func.isRequired,
  onToggleFullScreen: n.func.isRequired,
  isFullScreen: n.bool.isRequired
};
const gr = ({ theme: r, ...s }) => r === "modern" ? /* @__PURE__ */ e.jsx(xr, { ...s }) : r === "futuristic" ? /* @__PURE__ */ e.jsx(hr, { ...s }) : /* @__PURE__ */ e.jsx(br, { ...s });
gr.propTypes = {
  theme: n.oneOf(["classic", "modern", "futuristic"])
};
function fn({
  content: r = "",
  setContent: s = "",
  geminiApiKey: i = "",
  parentEditorClass: c = "",
  toolBarClass: u = "",
  textContentClass: p = "",
  theme: b = ""
}) {
  const f = Y(null), E = Y(null), _ = Y(!1), [F, H] = T(/* @__PURE__ */ new Set()), [L, $] = T({ words: 0, chars: 0 }), [g, x] = T(!1), [M, D] = T(!1), [I, oe] = T(!1), [Oe, C] = T({ text: "", href: "" }), [P, se] = T(null), [ot, ve] = T(!1), [it, ze] = T(!1), [$e, G] = T(!1), [ee, te] = T(""), [Be, je] = T(""), [Ce, Le] = T(!1), [Ve, we] = T(""), [ke, Ie] = T(!1), [ae, Ae] = T(null), [ue, pe] = T(null), [Se, _e] = T(0), J = V(() => {
    const a = window.getSelection();
    if (a.rangeCount > 0) {
      const l = a.getRangeAt(0);
      f.current && f.current.contains(l.commonAncestorContainer) && (E.current = l);
    }
  }, []), re = V(() => {
    if (E.current) {
      const a = window.getSelection();
      a.removeAllRanges(), a.addRange(E.current);
    }
  }, []), q = V(() => {
    f.current && (_.current = !0, s(f.current.innerHTML));
  }, []), st = V(
    (a) => {
      const l = g ? a.target.value : a.currentTarget.innerHTML;
      _.current = !0, s(l);
    },
    [g]
  ), ye = V(() => {
    const a = /* @__PURE__ */ new Set();
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
      document.queryCommandState(m) && a.add(m);
    }), H(a);
  }, []), U = V(
    (a, l = null) => {
      var m;
      (m = f.current) == null || m.focus(), re(), document.execCommand(a, !1, l), q(), ye();
    },
    [re, q, ye]
  ), me = V(
    (a) => {
      var O;
      (O = f.current) == null || O.focus(), re();
      const l = window.getSelection();
      if (!l.rangeCount) return;
      let m = l.getRangeAt(0).commonAncestorContainer;
      for (; m && m !== f.current; ) {
        if (m.nodeType === Node.ELEMENT_NODE && window.getComputedStyle(m).display.match(/block|table|list-item/)) {
          m.style.lineHeight = a;
          break;
        }
        m = m.parentNode;
      }
      q();
    },
    [re, q]
  );
  Q(() => {
    if (_.current) {
      _.current = !1;
      return;
    }
    f.current && !g && r !== f.current.innerHTML && (f.current.innerHTML = r || "");
  }, [r, g]), Q(() => {
    const a = document.createElement("div");
    a.innerHTML = r || "";
    const l = a.textContent || "", m = l.trim().split(/\s+/).filter(Boolean).length;
    $({ words: m, chars: l.length });
  }, [r]);
  const Re = V(() => {
    const a = window.getSelection();
    if (a.rangeCount > 0) {
      const l = a.getRangeAt(0);
      f.current && f.current.contains(l.commonAncestorContainer) && (J(), ye());
    }
  }, [J, ye]);
  Q(() => (document.addEventListener("selectionchange", Re), () => document.removeEventListener("selectionchange", Re)), [Re]);
  const Ye = V(
    (a) => {
      if (a.ctrlKey || a.metaKey) {
        const l = {
          b: "bold",
          i: "italic",
          u: "underline",
          k: () => fe(),
          z: "undo",
          y: "redo"
        };
        l[a.key] && (a.preventDefault(), typeof l[a.key] == "function" ? l[a.key]() : U(l[a.key]));
      }
    },
    [U]
  ), fe = V(() => {
    var m;
    J();
    const a = window.getSelection(), l = (m = a.anchorNode) == null ? void 0 : m.parentElement.closest("a");
    (l == null ? void 0 : l.tagName) === "A" ? (C({
      text: l.textContent,
      href: l.href
    }), se(l)) : (C({ text: a.toString(), href: "" }), se(null)), oe(!0);
  }, [J]), at = V(
    (a) => {
      if (oe(!1), re(), f.current.focus(), P)
        P.href = a.href, P.textContent = a.text;
      else {
        const l = `<a href="${a.href}" target="_blank" rel="noopener noreferrer">${a.text}</a>`;
        U("insertHTML", l);
      }
      se(null), q();
    },
    [P, re, U, q]
  ), lt = V(
    (a) => {
      const l = a.target.files[0];
      if (!l) return;
      const m = new FileReader();
      m.onload = (O) => {
        const A = `<span class="image-wrapper d-inline-block"><img src="${O.target.result}" class="img-fluid rounded" style="width: 250px; height: auto;" /></span>`;
        U("insertHTML", A);
      }, m.readAsDataURL(l), a.target.value = "";
    },
    [U]
  ), Me = V((a) => {
    const l = a.target.files[0];
    if (!l) return;
    const m = new FileReader();
    m.onload = (O) => {
      Fr.convertToHtml({ arrayBuffer: O.target.result }).then((A) => s(A.value)).catch(
        (A) => console.error("Error converting .docx to HTML:", A)
      );
    }, m.readAsArrayBuffer(l), a.target.value = "";
  }, []), ct = (a) => {
    let l = "", m;
    return a.includes("youtube.com/watch?v=") ? (m = a.split("v=")[1].split("&")[0], l = `https://www.youtube.com/embed/${m}`) : a.includes("youtu.be/") ? (m = a.split("youtu.be/")[1].split("?")[0], l = `https://www.youtube.com/embed/${m}`) : a.includes("vimeo.com/") && (m = a.split("vimeo.com/")[1].split("?")[0], l = `https://player.vimeo.com/video/${m}`), l;
  }, dt = V(
    (a) => {
      if (ve(!1), !a) return;
      const l = ct(a);
      if (!l) {
        console.warn(
          "Invalid video URL. Please use a valid YouTube or Vimeo link."
        );
        return;
      }
      re(), f.current.focus();
      const m = `<div class="video-wrapper"><iframe src="${l}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p><br></p>`;
      U("insertHTML", m), q();
    },
    [re, U, q]
  ), We = V(
    (a) => {
      ze(!1);
      let l = '<table class="table table-bordered"><tbody>';
      for (let m = 0; m < a.rows; m++) {
        l += "<tr>";
        for (let O = 0; O < a.cols; O++) l += "<td><br></td>";
        l += "</tr>";
      }
      l += "</tbody></table><p><br></p>", U("insertHTML", l);
    },
    [U]
  ), Ge = (a, l) => {
    const m = new Or(), O = m.diff_main(a, l);
    m.diff_cleanupSemantic(O);
    let A = "";
    for (const [le, ie] of O) {
      const X = ie.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "&para;<br>");
      switch (le) {
        case Ir:
          A += `<ins style="background-color: #d4edda; text-decoration: none;">${X}</ins>`;
          break;
        case Lr:
          A += `<del style="background-color: #f8d7da; text-decoration: none;">${X}</del>`;
          break;
        case zr:
          A += `<span>${X}</span>`;
          break;
      }
    }
    return A;
  }, Ke = async () => {
    var A, le, ie, X, ce;
    if (!r || r === "" || Ce) return;
    Le(!0), te(""), Ie(!1);
    const a = [
      "Analyzing...",
      "Generating suggestions...",
      "Optimizing flow...",
      "Finalizing..."
    ];
    let l = 0;
    we(a[l]);
    const m = setInterval(() => {
      l = (l + 1) % a.length, we(a[l]);
    }, 2e3), O = `
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
`;
    try {
      const Z = {
        contents: [{ role: "user", parts: [{ text: O }] }]
      }, ne = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${i}`, be = await fetch(ne, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Z)
      });
      if (!be.ok) throw new Error(`API call failed: ${be.status}`);
      const Te = (ce = (X = (ie = (le = (A = (await be.json()).candidates) == null ? void 0 : A[0]) == null ? void 0 : le.content) == null ? void 0 : ie.parts) == null ? void 0 : X[0]) == null ? void 0 : ce.text;
      if (Te)
        te(Te), je(Ge(r, Te)), G(!0);
      else
        throw new Error("Invalid AI response format");
    } catch (Z) {
      console.error("Error calling Gemini API:", Z), te(`<p>Sorry, an error occurred. ${Z.message}</p>`), je(`<p>Error: ${Z.message}</p>`), G(!0);
    } finally {
      clearInterval(m), Le(!1), we("");
    }
  }, ut = () => {
    s(ee), G(!1), te(""), je("");
  };
  Q(() => {
    const a = f.current;
    if (!a) return;
    const l = (m) => {
      if (m.target.closest(".delete-column-btn")) {
        m.target.closest(".row").remove(), q();
        return;
      }
      const O = m.target.closest("img"), A = m.target.closest("table");
      Ae(O), pe(A), O && pe(null), A && Ae(null);
    };
    return a.addEventListener("click", l), () => a.removeEventListener("click", l);
  }, [q]);
  const Ne = (a, l) => {
    a && (a.classList.remove(
      "d-block",
      "mx-auto",
      "float-start",
      "float-end",
      "me-3",
      "mb-3",
      "ms-3"
    ), l === "center" ? a.classList.add("d-block", "mx-auto") : l === "left" ? a.classList.add("float-start", "me-3", "mb-3") : l === "right" && a.classList.add("float-end", "ms-3", "mb-3"), q());
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
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
` }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `d-flex flex-column border rounded-3 shadow-sm ${M ? "position-fixed top-0 start-0 w-100 h-100 bg-white" : "position-relative "}  ${c}`,
        style: { zIndex: M ? 1050 : "auto" },
        children: [
          /* @__PURE__ */ e.jsx("div", { className: `flex-shrink-0 border-bottom ${u}`, children: /* @__PURE__ */ e.jsx(
            lr,
            {
              theme: b,
              applyStyle: U,
              applyLineHeight: me,
              activeStyles: F,
              onOpenLinkModal: fe,
              onImageUpload: lt,
              onDocxUpload: Me,
              onVideoModalOpen: () => {
                J(), ve(!0);
              },
              onTableModalOpen: () => {
                J(), ze(!0);
              },
              onAiRefactor: Ke,
              content: r,
              isGenerating: Ce,
              isAiLoadingMinimized: ke
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-grow-1 overflow-auto position-relative pt-3", children: [
            /* @__PURE__ */ e.jsx(
              cr,
              {
                editorRef: f,
                content: r,
                showSource: g,
                onContentChange: st,
                onKeyDown: Ye,
                textContentClass: p
              }
            ),
            ae && !g && (() => {
              const a = f.current.getBoundingClientRect(), l = ae.getBoundingClientRect(), m = ae.parentElement;
              return /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "image-wrapper selected",
                  style: {
                    position: "absolute",
                    top: l.top - a.top + f.current.scrollTop,
                    left: l.left - a.left + f.current.scrollLeft,
                    width: l.width,
                    height: l.height,
                    pointerEvents: "none"
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "image-toolbar",
                        style: { pointerEvents: "auto" },
                        children: [
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              className: "btn btn-sm btn-dark",
                              onClick: () => Ne(m, "left"),
                              children: /* @__PURE__ */ e.jsx(qr, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              className: "btn btn-sm btn-dark",
                              onClick: () => Ne(m, "center"),
                              children: /* @__PURE__ */ e.jsx(Hr, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              className: "btn btn-sm btn-dark",
                              onClick: () => Ne(m, "right"),
                              children: /* @__PURE__ */ e.jsx(Pr, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "button",
                            {
                              className: "btn btn-sm btn-danger",
                              onClick: () => {
                                m.remove(), q(), Ae(null);
                              },
                              children: /* @__PURE__ */ e.jsx(Zt, { size: 14 })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "resize-handle bottom-right",
                        style: { pointerEvents: "auto" },
                        onMouseDown: (O) => {
                          O.preventDefault();
                          const A = O.clientX, le = ae.offsetWidth, ie = (ce) => {
                            const Z = le + (ce.clientX - A);
                            Z > 20 && (ae.style.width = `${Z}px`, ae.style.height = "auto", _e((ne) => ne + 1));
                          }, X = () => {
                            document.removeEventListener("mousemove", ie), document.removeEventListener("mouseup", X), q();
                          };
                          document.addEventListener("mousemove", ie), document.addEventListener("mouseup", X);
                        }
                      }
                    )
                  ]
                }
              );
            })(),
            ue && !g && (() => {
              const a = f.current.getBoundingClientRect(), l = ue.getBoundingClientRect();
              return /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "table-toolbar mt-5",
                  style: {
                    position: "absolute",
                    top: l.top - a.top + f.current.scrollTop - 60,
                    right: l.left - a.left + f.current.scrollLeft,
                    pointerEvents: "auto"
                  },
                  children: /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      className: "btn btn-sm btn-danger d-flex align-items-center rounded-5  p-1",
                      onClick: () => {
                        ue.remove(), q(), pe(null);
                      },
                      children: /* @__PURE__ */ e.jsx(Zt, { size: 14 })
                    }
                  )
                }
              );
            })()
          ] }),
          /* @__PURE__ */ e.jsx(
            gr,
            {
              theme: b,
              wordCount: L.words,
              charCount: L.chars,
              onToggleSource: () => x(!g),
              showSource: g,
              onToggleFullScreen: () => D(!M),
              isFullScreen: M
            }
          ),
          Ce && /* @__PURE__ */ e.jsx(
            mr,
            {
              status: Ve,
              isMinimized: ke,
              onMinimizeToggle: () => Ie(!ke)
            }
          ),
          /* @__PURE__ */ e.jsx(
            dr,
            {
              isOpen: I,
              onClose: () => oe(!1),
              onApply: at,
              initialData: Oe,
              isEditing: !!P
            }
          ),
          /* @__PURE__ */ e.jsx(
            ur,
            {
              isOpen: ot,
              onClose: () => ve(!1),
              onInsert: dt
            }
          ),
          /* @__PURE__ */ e.jsx(
            pr,
            {
              isOpen: it,
              onClose: () => ze(!1),
              onCreate: We
            }
          ),
          /* @__PURE__ */ e.jsx(
            fr,
            {
              isOpen: $e,
              onClose: () => G(!1),
              onApply: ut,
              originalContent: r,
              suggestion: ee,
              highlightedDiff: Be
            }
          )
        ]
      }
    )
  ] });
}
fn.propTypes = {
  content: n.string,
  setContent: n.func,
  geminiApiKey: n.string,
  parentEditorClass: n.string,
  toolBarClass: n.string,
  textContentClass: n.string,
  theme: n.string
};
Ur();
export {
  fn as default
};
//# sourceMappingURL=forma-text.js.map
