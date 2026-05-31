"use strict";
(() => {
  var Fl = Object.create;
  var Qt = Object.defineProperty,
    ql = Object.defineProperties,
    $l = Object.getOwnPropertyDescriptor,
    Kl = Object.getOwnPropertyDescriptors,
    Wl = Object.getOwnPropertyNames,
    Bs = Object.getOwnPropertySymbols,
    Gl = Object.getPrototypeOf,
    Vs = Object.prototype.hasOwnProperty,
    Zl = Object.prototype.propertyIsEnumerable;
  var Os = (e, t, o) =>
      t in e
        ? Qt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
        : (e[t] = o),
    L = (e, t) => {
      for (var o in (t ||= {})) Vs.call(t, o) && Os(e, o, t[o]);
      if (Bs) for (var o of Bs(t)) Zl.call(t, o) && Os(e, o, t[o]);
      return e;
    },
    re = (e, t) => ql(e, Kl(t));
  var Us = (e, t) => () => (e && (t = e((e = 0))), t);
  var Ql = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t),
      t.exports
    ),
    Fs = (e, t) => {
      for (var o in t) Qt(e, o, { get: t[o], enumerable: !0 });
    },
    qs = (e, t, o, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let s of Wl(t))
          !Vs.call(e, s) &&
            s !== o &&
            Qt(e, s, {
              get: () => t[s],
              enumerable: !(r = $l(t, s)) || r.enumerable,
            });
      return e;
    };
  var Yl = (e, t, o) => (
      (o = e != null ? Fl(Gl(e)) : {}),
      qs(
        t || !e || !e.__esModule
          ? Qt(o, "default", { value: e, enumerable: !0 })
          : o,
        e,
      )
    ),
    $s = (e) => qs(Qt({}, "__esModule", { value: !0 }), e);
  var nn = {};
  Fs(nn, {
    Component: () => T,
    Fragment: () => te,
    cloneElement: () => sn,
    createContext: () => gr,
    createElement: () => tt,
    createRef: () => le,
    h: () => tt,
    hydrate: () => pr,
    isValidElement: () => bo,
    options: () => A,
    render: () => ft,
    toChildArray: () => It,
  });
  function Ke(e, t) {
    for (var o in t) e[o] = t[o];
    return e;
  }
  function Js(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function tt(e, t, o) {
    var r,
      s,
      a,
      i = {};
    for (a in t)
      a == "key" ? (r = t[a]) : a == "ref" ? (s = t[a]) : (i[a] = t[a]);
    if (
      (arguments.length > 2 &&
        (i.children = arguments.length > 3 ? Jt.call(arguments, 2) : o),
      typeof e == "function" && e.defaultProps != null)
    )
      for (a in e.defaultProps) i[a] === void 0 && (i[a] = e.defaultProps[a]);
    return Yt(e, i, r, s, null);
  }
  function Yt(e, t, o, r, s) {
    var a = {
      type: e,
      props: t,
      key: o,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: s ?? ++Zs,
      __i: -1,
      __u: 0,
    };
    return (s == null && A.vnode != null && A.vnode(a), a);
  }
  function le() {
    return { current: null };
  }
  function te(e) {
    return e.children;
  }
  function T(e, t) {
    ((this.props = e), (this.context = t));
  }
  function mt(e, t) {
    if (t == null) return e.__ ? mt(e.__, e.__i + 1) : null;
    for (var o; t < e.__k.length; t++)
      if ((o = e.__k[t]) != null && o.__e != null) return o.__e;
    return typeof e.type == "function" ? mt(e) : null;
  }
  function en(e) {
    var t, o;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((o = e.__k[t]) != null && o.__e != null) {
          e.__e = e.__c.base = o.__e;
          break;
        }
      return en(e);
    }
  }
  function lr(e) {
    ((!e.__d && (e.__d = !0) && gt.push(e) && !wo.__r++) ||
      Ks !== A.debounceRendering) &&
      ((Ks = A.debounceRendering) || Qs)(wo);
  }
  function wo() {
    var e, t, o, r, s, a, i, l;
    for (gt.sort(nr); (e = gt.shift()); )
      e.__d &&
        ((t = gt.length),
        (r = void 0),
        (a = (s = (o = e).__v).__e),
        (i = []),
        (l = []),
        o.__P &&
          (((r = Ke({}, s)).__v = s.__v + 1),
          A.vnode && A.vnode(r),
          dr(
            o.__P,
            r,
            s,
            o.__n,
            o.__P.namespaceURI,
            32 & s.__u ? [a] : null,
            i,
            a ?? mt(s),
            !!(32 & s.__u),
            l,
          ),
          (r.__v = s.__v),
          (r.__.__k[r.__i] = r),
          rn(i, r, l),
          r.__e != a && en(r)),
        gt.length > t && gt.sort(nr));
    wo.__r = 0;
  }
  function tn(e, t, o, r, s, a, i, l, c, u, g) {
    var h,
      b,
      v,
      C,
      P,
      N = (r && r.__k) || Xs,
      R = t.length;
    for (o.__d = c, Jl(o, t, N), c = o.__d, h = 0; h < R; h++)
      (v = o.__k[h]) != null &&
        typeof v != "boolean" &&
        typeof v != "function" &&
        ((b = v.__i === -1 ? Xt : N[v.__i] || Xt),
        (v.__i = h),
        dr(e, v, b, s, a, i, l, c, u, g),
        (C = v.__e),
        v.ref &&
          b.ref != v.ref &&
          (b.ref && hr(b.ref, null, v), g.push(v.ref, v.__c || C, v)),
        P == null && C != null && (P = C),
        65536 & v.__u || b.__k === v.__k
          ? (c = on(v, c, e))
          : typeof v.type == "function" && v.__d !== void 0
            ? (c = v.__d)
            : C && (c = C.nextSibling),
        (v.__d = void 0),
        (v.__u &= -196609));
    ((o.__d = c), (o.__e = P));
  }
  function Jl(e, t, o) {
    var r,
      s,
      a,
      i,
      l,
      c = t.length,
      u = o.length,
      g = u,
      h = 0;
    for (e.__k = [], r = 0; r < c; r++)
      ((i = r + h),
        (s = e.__k[r] =
          (s = t[r]) == null || typeof s == "boolean" || typeof s == "function"
            ? null
            : typeof s == "string" ||
                typeof s == "number" ||
                typeof s == "bigint" ||
                s.constructor == String
              ? Yt(null, s, null, null, null)
              : _o(s)
                ? Yt(te, { children: s }, null, null, null)
                : s.constructor === void 0 && s.__b > 0
                  ? Yt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                  : s) != null
          ? ((s.__ = e),
            (s.__b = e.__b + 1),
            (l = ec(s, o, i, g)),
            (s.__i = l),
            (a = null),
            l !== -1 && (g--, (a = o[l]) && (a.__u |= 131072)),
            a == null || a.__v === null
              ? (l == -1 && h--,
                typeof s.type != "function" && (s.__u |= 65536))
              : l !== i &&
                (l == i - 1
                  ? h--
                  : l == i + 1
                    ? h++
                    : l > i
                      ? g > c - i
                        ? (h += l - i)
                        : h--
                      : l < i && (l == i - h ? (h -= l - i) : h++),
                l !== r + h && (s.__u |= 65536)))
          : (a = o[i]) &&
            a.key == null &&
            a.__e &&
            (131072 & a.__u) == 0 &&
            (a.__e == e.__d && (e.__d = mt(a)),
            cr(a, a, !1),
            (o[i] = null),
            g--));
    if (g)
      for (r = 0; r < u; r++)
        (a = o[r]) != null &&
          (131072 & a.__u) == 0 &&
          (a.__e == e.__d && (e.__d = mt(a)), cr(a, a));
  }
  function on(e, t, o) {
    var r, s;
    if (typeof e.type == "function") {
      for (r = e.__k, s = 0; r && s < r.length; s++)
        r[s] && ((r[s].__ = e), (t = on(r[s], t, o)));
      return t;
    }
    e.__e != t &&
      (t && e.type && !o.contains(t) && (t = mt(e)),
      o.insertBefore(e.__e, t || null),
      (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType === 8);
    return t;
  }
  function It(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (_o(e)
          ? e.some(function (o) {
              It(o, t);
            })
          : t.push(e)),
      t
    );
  }
  function ec(e, t, o, r) {
    var s = e.key,
      a = e.type,
      i = o - 1,
      l = o + 1,
      c = t[o];
    if (
      c === null ||
      (c && s == c.key && a === c.type && (131072 & c.__u) == 0)
    )
      return o;
    if (r > (c != null && (131072 & c.__u) == 0 ? 1 : 0))
      for (; i >= 0 || l < t.length; ) {
        if (i >= 0) {
          if ((c = t[i]) && (131072 & c.__u) == 0 && s == c.key && a === c.type)
            return i;
          i--;
        }
        if (l < t.length) {
          if ((c = t[l]) && (131072 & c.__u) == 0 && s == c.key && a === c.type)
            return l;
          l++;
        }
      }
    return -1;
  }
  function Ws(e, t, o) {
    t[0] === "-"
      ? e.setProperty(t, o ?? "")
      : (e[t] =
          o == null ? "" : typeof o != "number" || Xl.test(t) ? o : o + "px");
  }
  function vo(e, t, o, r, s) {
    var a;
    e: if (t === "style")
      if (typeof o == "string") e.style.cssText = o;
      else {
        if ((typeof r == "string" && (e.style.cssText = r = ""), r))
          for (t in r) (o && t in o) || Ws(e.style, t, "");
        if (o) for (t in o) (r && o[t] === r[t]) || Ws(e.style, t, o[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      ((a = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
        (t =
          t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
            ? t.toLowerCase().slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + a] = o),
        o
          ? r
            ? (o.u = r.u)
            : ((o.u = ur), e.addEventListener(t, a ? ir : ar, a))
          : e.removeEventListener(t, a ? ir : ar, a));
    else {
      if (s == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t != "popover" &&
        t in e
      )
        try {
          e[t] = o ?? "";
          break e;
        } catch {}
      typeof o == "function" ||
        (o == null || (o === !1 && t[4] !== "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == "popover" && o == 1 ? "" : o));
    }
  }
  function Gs(e) {
    return function (t) {
      if (this.l) {
        var o = this.l[t.type + e];
        if (t.t == null) t.t = ur++;
        else if (t.t < o.u) return;
        return o(A.event ? A.event(t) : t);
      }
    };
  }
  function dr(e, t, o, r, s, a, i, l, c, u) {
    var g,
      h,
      b,
      v,
      C,
      P,
      N,
      R,
      H,
      Xe,
      je,
      dt,
      Je,
      Wt,
      ht,
      pt,
      Te = t.type;
    if (t.constructor !== void 0) return null;
    (128 & o.__u && ((c = !!(32 & o.__u)), (a = [(l = t.__e = o.__e)])),
      (g = A.__b) && g(t));
    e: if (typeof Te == "function")
      try {
        if (
          ((R = t.props),
          (H = "prototype" in Te && Te.prototype.render),
          (Xe = (g = Te.contextType) && r[g.__c]),
          (je = g ? (Xe ? Xe.props.value : g.__) : r),
          o.__c
            ? (N = (h = t.__c = o.__c).__ = h.__E)
            : (H
                ? (t.__c = h = new Te(R, je))
                : ((t.__c = h = new T(R, je)),
                  (h.constructor = Te),
                  (h.render = oc)),
              Xe && Xe.sub(h),
              (h.props = R),
              h.state || (h.state = {}),
              (h.context = je),
              (h.__n = r),
              (b = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          H && h.__s == null && (h.__s = h.state),
          H &&
            Te.getDerivedStateFromProps != null &&
            (h.__s == h.state && (h.__s = Ke({}, h.__s)),
            Ke(h.__s, Te.getDerivedStateFromProps(R, h.__s))),
          (v = h.props),
          (C = h.state),
          (h.__v = t),
          b)
        )
          (H &&
            Te.getDerivedStateFromProps == null &&
            h.componentWillMount != null &&
            h.componentWillMount(),
            H &&
              h.componentDidMount != null &&
              h.__h.push(h.componentDidMount));
        else {
          if (
            (H &&
              Te.getDerivedStateFromProps == null &&
              R !== v &&
              h.componentWillReceiveProps != null &&
              h.componentWillReceiveProps(R, je),
            !h.__e &&
              ((h.shouldComponentUpdate != null &&
                h.shouldComponentUpdate(R, h.__s, je) === !1) ||
                t.__v === o.__v))
          ) {
            for (
              t.__v !== o.__v &&
                ((h.props = R), (h.state = h.__s), (h.__d = !1)),
                t.__e = o.__e,
                t.__k = o.__k,
                t.__k.forEach(function (et) {
                  et && (et.__ = t);
                }),
                dt = 0;
              dt < h._sb.length;
              dt++
            )
              h.__h.push(h._sb[dt]);
            ((h._sb = []), h.__h.length && i.push(h));
            break e;
          }
          (h.componentWillUpdate != null && h.componentWillUpdate(R, h.__s, je),
            H &&
              h.componentDidUpdate != null &&
              h.__h.push(function () {
                h.componentDidUpdate(v, C, P);
              }));
        }
        if (
          ((h.context = je),
          (h.props = R),
          (h.__P = e),
          (h.__e = !1),
          (Je = A.__r),
          (Wt = 0),
          H)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              Je && Je(t),
              g = h.render(h.props, h.state, h.context),
              ht = 0;
            ht < h._sb.length;
            ht++
          )
            h.__h.push(h._sb[ht]);
          h._sb = [];
        } else
          do
            ((h.__d = !1),
              Je && Je(t),
              (g = h.render(h.props, h.state, h.context)),
              (h.state = h.__s));
          while (h.__d && ++Wt < 25);
        ((h.state = h.__s),
          h.getChildContext != null && (r = Ke(Ke({}, r), h.getChildContext())),
          H &&
            !b &&
            h.getSnapshotBeforeUpdate != null &&
            (P = h.getSnapshotBeforeUpdate(v, C)),
          tn(
            e,
            _o(
              (pt =
                g != null && g.type === te && g.key == null
                  ? g.props.children
                  : g),
            )
              ? pt
              : [pt],
            t,
            o,
            r,
            s,
            a,
            i,
            l,
            c,
            u,
          ),
          (h.base = t.__e),
          (t.__u &= -161),
          h.__h.length && i.push(h),
          N && (h.__E = h.__ = null));
      } catch (et) {
        if (((t.__v = null), c || a != null)) {
          for (t.__u |= c ? 160 : 32; l && l.nodeType === 8 && l.nextSibling; )
            l = l.nextSibling;
          ((a[a.indexOf(l)] = null), (t.__e = l));
        } else ((t.__e = o.__e), (t.__k = o.__k));
        A.__e(et, t, o);
      }
    else
      a == null && t.__v === o.__v
        ? ((t.__k = o.__k), (t.__e = o.__e))
        : (t.__e = tc(o.__e, t, o, r, s, a, i, c, u));
    (g = A.diffed) && g(t);
  }
  function rn(e, t, o) {
    t.__d = void 0;
    for (var r = 0; r < o.length; r++) hr(o[r], o[++r], o[++r]);
    (A.__c && A.__c(t, e),
      e.some(function (s) {
        try {
          ((e = s.__h),
            (s.__h = []),
            e.some(function (a) {
              a.call(s);
            }));
        } catch (a) {
          A.__e(a, s.__v);
        }
      }));
  }
  function tc(e, t, o, r, s, a, i, l, c) {
    var u,
      g,
      h,
      b,
      v,
      C,
      P,
      N = o.props,
      R = t.props,
      H = t.type;
    if (
      (H === "svg"
        ? (s = "http://www.w3.org/2000/svg")
        : H === "math"
          ? (s = "http://www.w3.org/1998/Math/MathML")
          : s || (s = "http://www.w3.org/1999/xhtml"),
      a != null)
    ) {
      for (u = 0; u < a.length; u++)
        if (
          (v = a[u]) &&
          "setAttribute" in v == !!H &&
          (H ? v.localName === H : v.nodeType === 3)
        ) {
          ((e = v), (a[u] = null));
          break;
        }
    }
    if (e == null) {
      if (H === null) return document.createTextNode(R);
      ((e = document.createElementNS(s, H, R.is && R)), (a = null), (l = !1));
    }
    if (H === null) N === R || (l && e.data === R) || (e.data = R);
    else {
      if (
        ((a = a && Jt.call(e.childNodes)), (N = o.props || Xt), !l && a != null)
      )
        for (N = {}, u = 0; u < e.attributes.length; u++)
          N[(v = e.attributes[u]).name] = v.value;
      for (u in N)
        if (((v = N[u]), u != "children")) {
          if (u == "dangerouslySetInnerHTML") h = v;
          else if (u !== "key" && !(u in R)) {
            if (
              (u == "value" && "defaultValue" in R) ||
              (u == "checked" && "defaultChecked" in R)
            )
              continue;
            vo(e, u, null, v, s);
          }
        }
      for (u in R)
        ((v = R[u]),
          u == "children"
            ? (b = v)
            : u == "dangerouslySetInnerHTML"
              ? (g = v)
              : u == "value"
                ? (C = v)
                : u == "checked"
                  ? (P = v)
                  : u === "key" ||
                    (l && typeof v != "function") ||
                    N[u] === v ||
                    vo(e, u, v, N[u], s));
      if (g)
        (l ||
          (h && (g.__html === h.__html || g.__html === e.innerHTML)) ||
          (e.innerHTML = g.__html),
          (t.__k = []));
      else if (
        (h && (e.innerHTML = ""),
        tn(
          e,
          _o(b) ? b : [b],
          t,
          o,
          r,
          H === "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
          a,
          i,
          a ? a[0] : o.__k && mt(o, 0),
          l,
          c,
        ),
        a != null)
      )
        for (u = a.length; u--; ) a[u] != null && Js(a[u]);
      l ||
        ((u = "value"),
        C !== void 0 &&
          (C !== e[u] ||
            (H === "progress" && !C) ||
            (H === "option" && C !== N[u])) &&
          vo(e, u, C, N[u], s),
        (u = "checked"),
        P !== void 0 && P !== e[u] && vo(e, u, P, N[u], s));
    }
    return e;
  }
  function hr(e, t, o) {
    try {
      if (typeof e == "function") {
        var r = typeof e.__u == "function";
        (r && e.__u(), (r && t == null) || (e.__u = e(t)));
      } else e.current = t;
    } catch (s) {
      A.__e(s, o);
    }
  }
  function cr(e, t, o) {
    var r, s;
    if (
      (A.unmount && A.unmount(e),
      (r = e.ref) && ((r.current && r.current !== e.__e) || hr(r, null, t)),
      (r = e.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (a) {
          A.__e(a, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k))
      for (s = 0; s < r.length; s++)
        r[s] && cr(r[s], t, o || typeof e.type != "function");
    (o || e.__e == null || Js(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0));
  }
  function oc(e, t, o) {
    return this.constructor(e, o);
  }
  function ft(e, t, o) {
    var r, s, a, i;
    (A.__ && A.__(e, t),
      (s = (r = typeof o == "function") ? null : (o && o.__k) || t.__k),
      (a = []),
      (i = []),
      dr(
        t,
        (e = ((!r && o) || t).__k = tt(te, null, [e])),
        s || Xt,
        Xt,
        t.namespaceURI,
        !r && o ? [o] : s ? null : t.firstChild ? Jt.call(t.childNodes) : null,
        a,
        !r && o ? o : s ? s.__e : t.firstChild,
        r,
        i,
      ),
      rn(a, e, i));
  }
  function pr(e, t) {
    ft(e, t, pr);
  }
  function sn(e, t, o) {
    var r,
      s,
      a,
      i,
      l = Ke({}, e.props);
    for (a in (e.type && e.type.defaultProps && (i = e.type.defaultProps), t))
      a == "key"
        ? (r = t[a])
        : a == "ref"
          ? (s = t[a])
          : (l[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a]);
    return (
      arguments.length > 2 &&
        (l.children = arguments.length > 3 ? Jt.call(arguments, 2) : o),
      Yt(e.type, l, r || e.key, s || e.ref, null)
    );
  }
  function gr(e, t) {
    var o = {
      __c: (t = "__cC" + Ys++),
      __: e,
      Consumer: function (r, s) {
        return r.children(s);
      },
      Provider: function (r) {
        var s, a;
        return (
          this.getChildContext ||
            ((s = []),
            ((a = {})[t] = this),
            (this.getChildContext = function () {
              return a;
            }),
            (this.componentWillUnmount = function () {
              s = null;
            }),
            (this.shouldComponentUpdate = function (i) {
              this.props.value !== i.value &&
                s.some(function (l) {
                  ((l.__e = !0), lr(l));
                });
            }),
            (this.sub = function (i) {
              s.push(i);
              var l = i.componentWillUnmount;
              i.componentWillUnmount = function () {
                (s && s.splice(s.indexOf(i), 1), l && l.call(i));
              };
            })),
          r.children
        );
      },
    };
    return (o.Provider.__ = o.Consumer.contextType = o);
  }
  var Jt,
    A,
    Zs,
    bo,
    gt,
    Ks,
    Qs,
    nr,
    ur,
    ar,
    ir,
    Ys,
    Xt,
    Xs,
    Xl,
    _o,
    U = Us(() => {
      ((Xt = {}),
        (Xs = []),
        (Xl =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i),
        (_o = Array.isArray));
      ((Jt = Xs.slice),
        (A = {
          __e: function (e, t, o, r) {
            for (var s, a, i; (t = t.__); )
              if ((s = t.__c) && !s.__)
                try {
                  if (
                    ((a = s.constructor) &&
                      a.getDerivedStateFromError != null &&
                      (s.setState(a.getDerivedStateFromError(e)), (i = s.__d)),
                    s.componentDidCatch != null &&
                      (s.componentDidCatch(e, r || {}), (i = s.__d)),
                    i)
                  )
                    return (s.__E = s);
                } catch (l) {
                  e = l;
                }
            throw e;
          },
        }),
        (Zs = 0),
        (bo = function (e) {
          return e != null && e.constructor == null;
        }),
        (T.prototype.setState = function (e, t) {
          var o;
          ((o =
            this.__s != null && this.__s !== this.state
              ? this.__s
              : (this.__s = Ke({}, this.state))),
            typeof e == "function" && (e = e(Ke({}, o), this.props)),
            e && Ke(o, e),
            e != null && this.__v && (t && this._sb.push(t), lr(this)));
        }),
        (T.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), lr(this));
        }),
        (T.prototype.render = te),
        (gt = []),
        (Qs =
          typeof Promise == "function"
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (nr = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (wo.__r = 0),
        (ur = 0),
        (ar = Gs(!1)),
        (ir = Gs(!0)),
        (Ys = 0));
    });
  var xa = {};
  Fs(xa, {
    useCallback: () => M,
    useContext: () => wa,
    useDebugValue: () => ba,
    useEffect: () => Se,
    useErrorBoundary: () => Wc,
    useId: () => _a,
    useImperativeHandle: () => va,
    useLayoutEffect: () => Mr,
    useMemo: () => yt,
    useReducer: () => Cr,
    useRef: () => ce,
    useState: () => X,
  });
  function _t(e, t) {
    (oe.__h && oe.__h(W, e, At || t), (At = 0));
    var o = W.__H || (W.__H = { __: [], __h: [] });
    return (e >= o.__.length && o.__.push({}), o.__[e]);
  }
  function X(e) {
    return ((At = 1), Cr(ya, e));
  }
  function Cr(e, t, o) {
    var r = _t(Ge++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          o ? o(t) : ya(void 0, t),
          function (l) {
            var c = r.__N ? r.__N[0] : r.__[0],
              u = r.t(c, l);
            c !== u && ((r.__N = [u, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = W),
        !W.u))
    ) {
      var s = function (l, c, u) {
        if (!r.__c.__H) return !0;
        var g = r.__c.__H.__.filter(function (b) {
          return !!b.__c;
        });
        if (
          g.every(function (b) {
            return !b.__N;
          })
        )
          return !a || a.call(this, l, c, u);
        var h = !1;
        return (
          g.forEach(function (b) {
            if (b.__N) {
              var v = b.__[0];
              ((b.__ = b.__N), (b.__N = void 0), v !== b.__[0] && (h = !0));
            }
          }),
          !(!h && r.__c.props === l) && (!a || a.call(this, l, c, u))
        );
      };
      W.u = !0;
      var a = W.shouldComponentUpdate,
        i = W.componentWillUpdate;
      ((W.componentWillUpdate = function (l, c, u) {
        if (this.__e) {
          var g = a;
          ((a = void 0), s(l, c, u), (a = g));
        }
        i && i.call(this, l, c, u);
      }),
        (W.shouldComponentUpdate = s));
    }
    return r.__N || r.__;
  }
  function Se(e, t) {
    var o = _t(Ge++, 3);
    !oe.__s && Ir(o.__H, t) && ((o.__ = e), (o.i = t), W.__H.__h.push(o));
  }
  function Mr(e, t) {
    var o = _t(Ge++, 4);
    !oe.__s && Ir(o.__H, t) && ((o.__ = e), (o.i = t), W.__h.push(o));
  }
  function ce(e) {
    return (
      (At = 5),
      yt(function () {
        return { current: e };
      }, [])
    );
  }
  function va(e, t, o) {
    ((At = 6),
      Mr(
        function () {
          return typeof e == "function"
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
              ? ((e.current = t()),
                function () {
                  return (e.current = null);
                })
              : void 0;
        },
        o == null ? o : o.concat(e),
      ));
  }
  function yt(e, t) {
    var o = _t(Ge++, 7);
    return (Ir(o.__H, t) && ((o.__ = e()), (o.__H = t), (o.__h = e)), o.__);
  }
  function M(e, t) {
    return (
      (At = 8),
      yt(function () {
        return e;
      }, t)
    );
  }
  function wa(e) {
    var t = W.context[e.__c],
      o = _t(Ge++, 9);
    return (
      (o.c = e),
      t ? (o.__ == null && ((o.__ = !0), t.sub(W)), t.props.value) : e.__
    );
  }
  function ba(e, t) {
    oe.useDebugValue && oe.useDebugValue(t ? t(e) : e);
  }
  function Wc(e) {
    var t = _t(Ge++, 10),
      o = X();
    return (
      (t.__ = e),
      W.componentDidCatch ||
        (W.componentDidCatch = function (r, s) {
          (t.__ && t.__(r, s), o[1](r));
        }),
      [
        o[0],
        function () {
          o[1](void 0);
        },
      ]
    );
  }
  function _a() {
    var e = _t(Ge++, 11);
    if (!e.__) {
      for (var t = W.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var o = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + o[0] + "-" + o[1]++;
    }
    return e.__;
  }
  function Gc() {
    for (var e; (e = fa.shift()); )
      if (e.__P && e.__H)
        try {
          (e.__H.__h.forEach(Lo), e.__H.__h.forEach(kr), (e.__H.__h = []));
        } catch (t) {
          ((e.__H.__h = []), oe.__e(t, e.__v));
        }
  }
  function Zc(e) {
    var t,
      o = function () {
        (clearTimeout(r), ma && cancelAnimationFrame(t), setTimeout(e));
      },
      r = setTimeout(o, 100);
    ma && (t = requestAnimationFrame(o));
  }
  function Lo(e) {
    var t = W,
      o = e.__c;
    (typeof o == "function" && ((e.__c = void 0), o()), (W = t));
  }
  function kr(e) {
    var t = W;
    ((e.__c = e.__()), (W = t));
  }
  function Ir(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (o, r) {
        return o !== e[r];
      })
    );
  }
  function ya(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  var Ge,
    W,
    Sr,
    la,
    At,
    fa,
    oe,
    ca,
    ua,
    da,
    ha,
    pa,
    ga,
    ma,
    se = Us(() => {
      U();
      ((At = 0),
        (fa = []),
        (oe = A),
        (ca = oe.__b),
        (ua = oe.__r),
        (da = oe.diffed),
        (ha = oe.__c),
        (pa = oe.unmount),
        (ga = oe.__));
      ((oe.__b = function (e) {
        ((W = null), ca && ca(e));
      }),
        (oe.__ = function (e, t) {
          (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ga && ga(e, t));
        }),
        (oe.__r = function (e) {
          (ua && ua(e), (Ge = 0));
          var t = (W = e.__c).__H;
          (t &&
            (Sr === W
              ? ((t.__h = []),
                (W.__h = []),
                t.__.forEach(function (o) {
                  (o.__N && (o.__ = o.__N), (o.i = o.__N = void 0));
                }))
              : (t.__h.forEach(Lo), t.__h.forEach(kr), (t.__h = []), (Ge = 0))),
            (Sr = W));
        }),
        (oe.diffed = function (e) {
          da && da(e);
          var t = e.__c;
          (t &&
            t.__H &&
            (t.__H.__h.length &&
              ((fa.push(t) !== 1 && la === oe.requestAnimationFrame) ||
                ((la = oe.requestAnimationFrame) || Zc)(Gc)),
            t.__H.__.forEach(function (o) {
              (o.i && (o.__H = o.i), (o.i = void 0));
            })),
            (Sr = W = null));
        }),
        (oe.__c = function (e, t) {
          (t.some(function (o) {
            try {
              (o.__h.forEach(Lo),
                (o.__h = o.__h.filter(function (r) {
                  return !r.__ || kr(r);
                })));
            } catch (r) {
              (t.some(function (s) {
                s.__h && (s.__h = []);
              }),
                (t = []),
                oe.__e(r, o.__v));
            }
          }),
            ha && ha(e, t));
        }),
        (oe.unmount = function (e) {
          pa && pa(e);
          var t,
            o = e.__c;
          o &&
            o.__H &&
            (o.__H.__.forEach(function (r) {
              try {
                Lo(r);
              } catch (s) {
                t = s;
              }
            }),
            (o.__H = void 0),
            t && oe.__e(t, o.__v));
        }));
      ma = typeof requestAnimationFrame == "function";
    });
  var pi = Ql((j) => {
    var I = (U(), $s(nn)),
      K = (se(), $s(xa));
    function qa(e, t) {
      for (var o in t) e[o] = t[o];
      return e;
    }
    function Ur(e, t) {
      for (var o in e) if (o !== "__source" && !(o in t)) return !0;
      for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
      return !1;
    }
    function Fo(e, t) {
      ((this.props = e), (this.context = t));
    }
    function $a(e, t) {
      function o(s) {
        var a = this.props.ref,
          i = a == s.ref;
        return (
          !i && a && (a.call ? a(null) : (a.current = null)),
          t ? !t(this.props, s) || !i : Ur(this.props, s)
        );
      }
      function r(s) {
        return ((this.shouldComponentUpdate = o), I.createElement(e, s));
      }
      return (
        (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
        (r.prototype.isReactComponent = !0),
        (r.__f = !0),
        r
      );
    }
    (((Fo.prototype = new I.Component()).isPureReactComponent = !0),
      (Fo.prototype.shouldComponentUpdate = function (e, t) {
        return Ur(this.props, e) || Ur(this.state, t);
      }));
    var za = I.options.__b;
    I.options.__b = function (e) {
      (e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
        za && za(e));
    };
    var o0 =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
      3911;
    function Ka(e) {
      function t(o) {
        var r = qa({}, o);
        return (delete r.ref, e(r, o.ref || null));
      }
      return (
        (t.$$typeof = o0),
        (t.render = t),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
        t
      );
    }
    var ja = function (e, t) {
        return e == null ? null : I.toChildArray(I.toChildArray(e).map(t));
      },
      Wa = {
        map: ja,
        forEach: ja,
        count: function (e) {
          return e ? I.toChildArray(e).length : 0;
        },
        only: function (e) {
          var t = I.toChildArray(e);
          if (t.length !== 1) throw "Children.only";
          return t[0];
        },
        toArray: I.toChildArray,
      },
      r0 = I.options.__e;
    I.options.__e = function (e, t, o, r) {
      if (e.then) {
        for (var s, a = t; (a = a.__); )
          if ((s = a.__c) && s.__c)
            return (
              t.__e == null && ((t.__e = o.__e), (t.__k = o.__k)),
              s.__c(e, t)
            );
      }
      r0(e, t, o, r);
    };
    var Ha = I.options.unmount;
    function Ga(e, t, o) {
      return (
        e &&
          (e.__c &&
            e.__c.__H &&
            (e.__c.__H.__.forEach(function (r) {
              typeof r.__c == "function" && r.__c();
            }),
            (e.__c.__H = null)),
          (e = qa({}, e)).__c != null &&
            (e.__c.__P === o && (e.__c.__P = t), (e.__c = null)),
          (e.__k =
            e.__k &&
            e.__k.map(function (r) {
              return Ga(r, t, o);
            }))),
        e
      );
    }
    function Za(e, t, o) {
      return (
        e &&
          o &&
          ((e.__v = null),
          (e.__k =
            e.__k &&
            e.__k.map(function (r) {
              return Za(r, t, o);
            })),
          e.__c &&
            e.__c.__P === t &&
            (e.__e && o.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = o))),
        e
      );
    }
    function ao() {
      ((this.__u = 0), (this.t = null), (this.__b = null));
    }
    function Qa(e) {
      var t = e.__.__c;
      return t && t.__a && t.__a(e);
    }
    function Ya(e) {
      var t, o, r;
      function s(a) {
        if (
          (t ||
            (t = e()).then(
              function (i) {
                o = i.default || i;
              },
              function (i) {
                r = i;
              },
            ),
          r)
        )
          throw r;
        if (!o) throw t;
        return I.createElement(o, a);
      }
      return ((s.displayName = "Lazy"), (s.__f = !0), s);
    }
    function jt() {
      ((this.u = null), (this.o = null));
    }
    ((I.options.unmount = function (e) {
      var t = e.__c;
      (t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ha && Ha(e));
    }),
      ((ao.prototype = new I.Component()).__c = function (e, t) {
        var o = t.__c,
          r = this;
        (r.t == null && (r.t = []), r.t.push(o));
        var s = Qa(r.__v),
          a = !1,
          i = function () {
            a || ((a = !0), (o.__R = null), s ? s(l) : l());
          };
        o.__R = i;
        var l = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var c = r.state.__a;
              r.__v.__k[0] = Za(c, c.__c.__P, c.__c.__O);
            }
            var u;
            for (r.setState({ __a: (r.__b = null) }); (u = r.t.pop()); )
              u.forceUpdate();
          }
        };
        (r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
          e.then(i, i));
      }),
      (ao.prototype.componentWillUnmount = function () {
        this.t = [];
      }),
      (ao.prototype.render = function (e, t) {
        if (this.__b) {
          if (this.__v.__k) {
            var o = document.createElement("div"),
              r = this.__v.__k[0].__c;
            this.__v.__k[0] = Ga(this.__b, o, (r.__O = r.__P));
          }
          this.__b = null;
        }
        var s = t.__a && I.createElement(I.Fragment, null, e.fallback);
        return (
          s && (s.__u &= -33),
          [I.createElement(I.Fragment, null, t.__a ? null : e.children), s]
        );
      }));
    var Ba = function (e, t, o) {
      if (
        (++o[1] === o[0] && e.o.delete(t),
        e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      )
        for (o = e.u; o; ) {
          for (; o.length > 3; ) o.pop()();
          if (o[1] < o[0]) break;
          e.u = o = o[2];
        }
    };
    function s0(e) {
      return (
        (this.getChildContext = function () {
          return e.context;
        }),
        e.children
      );
    }
    function n0(e) {
      var t = this,
        o = e.i;
      ((t.componentWillUnmount = function () {
        (I.render(null, t.l), (t.l = null), (t.i = null));
      }),
        t.i && t.i !== o && t.componentWillUnmount(),
        t.l ||
          ((t.i = o),
          (t.l = {
            nodeType: 1,
            parentNode: o,
            childNodes: [],
            contains: function () {
              return !0;
            },
            appendChild: function (r) {
              (this.childNodes.push(r), t.i.appendChild(r));
            },
            insertBefore: function (r, s) {
              (this.childNodes.push(r), t.i.appendChild(r));
            },
            removeChild: function (r) {
              (this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                t.i.removeChild(r));
            },
          })),
        I.render(I.createElement(s0, { context: t.context }, e.__v), t.l));
    }
    function Xa(e, t) {
      var o = I.createElement(n0, { __v: e, i: t });
      return ((o.containerInfo = t), o);
    }
    (((jt.prototype = new I.Component()).__a = function (e) {
      var t = this,
        o = Qa(t.__v),
        r = t.o.get(e);
      return (
        r[0]++,
        function (s) {
          var a = function () {
            t.props.revealOrder ? (r.push(s), Ba(t, e, r)) : s();
          };
          o ? o(a) : a();
        }
      );
    }),
      (jt.prototype.render = function (e) {
        ((this.u = null), (this.o = new Map()));
        var t = I.toChildArray(e.children);
        e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
        for (var o = t.length; o--; )
          this.o.set(t[o], (this.u = [1, 0, this.u]));
        return e.children;
      }),
      (jt.prototype.componentDidUpdate = jt.prototype.componentDidMount =
        function () {
          var e = this;
          this.o.forEach(function (t, o) {
            Ba(e, o, t);
          });
        }));
    var Ja =
        (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
        60103,
      a0 =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      i0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
      l0 = /[A-Z0-9]/g,
      c0 = typeof document < "u",
      u0 = function (e) {
        return (
          typeof Symbol < "u" && typeof Symbol() == "symbol"
            ? /fil|che|rad/
            : /fil|che|ra/
        ).test(e);
      };
    function ei(e, t, o) {
      return (
        t.__k == null && (t.textContent = ""),
        I.render(e, t),
        typeof o == "function" && o(),
        e ? e.__c : null
      );
    }
    function ti(e, t, o) {
      return (I.hydrate(e, t), typeof o == "function" && o(), e ? e.__c : null);
    }
    ((I.Component.prototype.isReactComponent = {}),
      [
        "componentWillMount",
        "componentWillReceiveProps",
        "componentWillUpdate",
      ].forEach(function (e) {
        Object.defineProperty(I.Component.prototype, e, {
          configurable: !0,
          get: function () {
            return this["UNSAFE_" + e];
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      }));
    var Oa = I.options.event;
    function d0() {}
    function h0() {
      return this.cancelBubble;
    }
    function p0() {
      return this.defaultPrevented;
    }
    I.options.event = function (e) {
      return (
        Oa && (e = Oa(e)),
        (e.persist = d0),
        (e.isPropagationStopped = h0),
        (e.isDefaultPrevented = p0),
        (e.nativeEvent = e)
      );
    };
    var Fr,
      g0 = {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this.class;
        },
      },
      Va = I.options.vnode;
    I.options.vnode = function (e) {
      (typeof e.type == "string" &&
        (function (t) {
          var o = t.props,
            r = t.type,
            s = {},
            a = r.indexOf("-") === -1;
          for (var i in o) {
            var l = o[i];
            if (
              !(
                (i === "value" && "defaultValue" in o && l == null) ||
                (c0 && i === "children" && r === "noscript") ||
                i === "class" ||
                i === "className"
              )
            ) {
              var c = i.toLowerCase();
              (i === "defaultValue" && "value" in o && o.value == null
                ? (i = "value")
                : i === "download" && l === !0
                  ? (l = "")
                  : c === "translate" && l === "no"
                    ? (l = !1)
                    : c[0] === "o" && c[1] === "n"
                      ? c === "ondoubleclick"
                        ? (i = "ondblclick")
                        : c !== "onchange" ||
                            (r !== "input" && r !== "textarea") ||
                            u0(o.type)
                          ? c === "onfocus"
                            ? (i = "onfocusin")
                            : c === "onblur"
                              ? (i = "onfocusout")
                              : i0.test(i) && (i = c)
                          : (c = i = "oninput")
                      : a && a0.test(i)
                        ? (i = i.replace(l0, "-$&").toLowerCase())
                        : l === null && (l = void 0),
                c === "oninput" && s[(i = c)] && (i = "oninputCapture"),
                (s[i] = l));
            }
          }
          (r == "select" &&
            s.multiple &&
            Array.isArray(s.value) &&
            (s.value = I.toChildArray(o.children).forEach(function (u) {
              u.props.selected = s.value.indexOf(u.props.value) != -1;
            })),
            r == "select" &&
              s.defaultValue != null &&
              (s.value = I.toChildArray(o.children).forEach(function (u) {
                u.props.selected = s.multiple
                  ? s.defaultValue.indexOf(u.props.value) != -1
                  : s.defaultValue == u.props.value;
              })),
            o.class && !o.className
              ? ((s.class = o.class), Object.defineProperty(s, "className", g0))
              : ((o.className && !o.class) || (o.class && o.className)) &&
                (s.class = s.className = o.className),
            (t.props = s));
        })(e),
        (e.$$typeof = Ja),
        Va && Va(e));
    };
    var Ua = I.options.__r;
    I.options.__r = function (e) {
      (Ua && Ua(e), (Fr = e.__c));
    };
    var Fa = I.options.diffed;
    I.options.diffed = function (e) {
      Fa && Fa(e);
      var t = e.props,
        o = e.__e;
      (o != null &&
        e.type === "textarea" &&
        "value" in t &&
        t.value !== o.value &&
        (o.value = t.value == null ? "" : t.value),
        (Fr = null));
    };
    var oi = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return Fr.__n[e.__c].props.value;
          },
          useCallback: K.useCallback,
          useContext: K.useContext,
          useDebugValue: K.useDebugValue,
          useDeferredValue: $r,
          useEffect: K.useEffect,
          useId: K.useId,
          useImperativeHandle: K.useImperativeHandle,
          useInsertionEffect: Wr,
          useLayoutEffect: K.useLayoutEffect,
          useMemo: K.useMemo,
          useReducer: K.useReducer,
          useRef: K.useRef,
          useState: K.useState,
          useSyncExternalStore: Gr,
          useTransition: Kr,
        },
      },
    };
    function ri(e) {
      return I.createElement.bind(null, e);
    }
    function io(e) {
      return !!e && e.$$typeof === Ja;
    }
    function si(e) {
      return io(e) && e.type === I.Fragment;
    }
    function ni(e) {
      return (
        !!e &&
        !!e.displayName &&
        (typeof e.displayName == "string" || e.displayName instanceof String) &&
        e.displayName.startsWith("Memo(")
      );
    }
    function ai(e) {
      return io(e) ? I.cloneElement.apply(null, arguments) : e;
    }
    function ii(e) {
      return !!e.__k && (I.render(null, e), !0);
    }
    function li(e) {
      return (e && (e.base || (e.nodeType === 1 && e))) || null;
    }
    var ci = function (e, t) {
        return e(t);
      },
      ui = function (e, t) {
        return e(t);
      },
      di = I.Fragment;
    function qr(e) {
      e();
    }
    function $r(e) {
      return e;
    }
    function Kr() {
      return [!1, qr];
    }
    var Wr = K.useLayoutEffect,
      hi = io;
    function Gr(e, t) {
      var o = t(),
        r = K.useState({ p: { __: o, h: t } }),
        s = r[0].p,
        a = r[1];
      return (
        K.useLayoutEffect(
          function () {
            ((s.__ = o), (s.h = t), Vr(s) && a({ p: s }));
          },
          [e, o, t],
        ),
        K.useEffect(
          function () {
            return (
              Vr(s) && a({ p: s }),
              e(function () {
                Vr(s) && a({ p: s });
              })
            );
          },
          [e],
        ),
        o
      );
    }
    function Vr(e) {
      var t,
        o,
        r = e.h,
        s = e.__;
      try {
        var a = r();
        return !(
          ((t = s) === (o = a) && (t !== 0 || 1 / t == 1 / o)) ||
          (t != t && o != o)
        );
      } catch {
        return !0;
      }
    }
    var m0 = {
      useState: K.useState,
      useId: K.useId,
      useReducer: K.useReducer,
      useEffect: K.useEffect,
      useLayoutEffect: K.useLayoutEffect,
      useInsertionEffect: Wr,
      useTransition: Kr,
      useDeferredValue: $r,
      useSyncExternalStore: Gr,
      startTransition: qr,
      useRef: K.useRef,
      useImperativeHandle: K.useImperativeHandle,
      useMemo: K.useMemo,
      useCallback: K.useCallback,
      useContext: K.useContext,
      useDebugValue: K.useDebugValue,
      version: "17.0.2",
      Children: Wa,
      render: ei,
      hydrate: ti,
      unmountComponentAtNode: ii,
      createPortal: Xa,
      createElement: I.createElement,
      createContext: I.createContext,
      createFactory: ri,
      cloneElement: ai,
      createRef: I.createRef,
      Fragment: I.Fragment,
      isValidElement: io,
      isElement: hi,
      isFragment: si,
      isMemo: ni,
      findDOMNode: li,
      Component: I.Component,
      PureComponent: Fo,
      memo: $a,
      forwardRef: Ka,
      flushSync: ui,
      unstable_batchedUpdates: ci,
      StrictMode: di,
      Suspense: ao,
      SuspenseList: jt,
      lazy: Ya,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: oi,
    };
    (Object.defineProperty(j, "Component", {
      enumerable: !0,
      get: function () {
        return I.Component;
      },
    }),
      Object.defineProperty(j, "Fragment", {
        enumerable: !0,
        get: function () {
          return I.Fragment;
        },
      }),
      Object.defineProperty(j, "createContext", {
        enumerable: !0,
        get: function () {
          return I.createContext;
        },
      }),
      Object.defineProperty(j, "createElement", {
        enumerable: !0,
        get: function () {
          return I.createElement;
        },
      }),
      Object.defineProperty(j, "createRef", {
        enumerable: !0,
        get: function () {
          return I.createRef;
        },
      }),
      (j.Children = Wa),
      (j.PureComponent = Fo),
      (j.StrictMode = di),
      (j.Suspense = ao),
      (j.SuspenseList = jt),
      (j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oi),
      (j.cloneElement = ai),
      (j.createFactory = ri),
      (j.createPortal = Xa),
      (j.default = m0),
      (j.findDOMNode = li),
      (j.flushSync = ui),
      (j.forwardRef = Ka),
      (j.hydrate = ti),
      (j.isElement = hi),
      (j.isFragment = si),
      (j.isMemo = ni),
      (j.isValidElement = io),
      (j.lazy = Ya),
      (j.memo = $a),
      (j.render = ei),
      (j.startTransition = qr),
      (j.unmountComponentAtNode = ii),
      (j.unstable_batchedUpdates = ci),
      (j.useDeferredValue = $r),
      (j.useInsertionEffect = Wr),
      (j.useSyncExternalStore = Gr),
      (j.useTransition = Kr),
      (j.version = "17.0.2"),
      Object.keys(K).forEach(function (e) {
        e === "default" ||
          j.hasOwnProperty(e) ||
          Object.defineProperty(j, e, {
            enumerable: !0,
            get: function () {
              return K[e];
            },
          });
      }));
  });
  U();
  var an;
  ((t) => {
    let e;
    ((a) => {
      let o;
      ((l) => (l.MODIFY_HEADERS = "modifyHeaders"))(
        (o = a.RuleActionType || (a.RuleActionType = {})),
      );
      let r;
      ((c) => ((c.REMOVE = "remove"), (c.SET = "set")))(
        (r = a.HeaderOperation || (a.HeaderOperation = {})),
      );
      let s;
      ((c) => ((c.MAIN_FRAME = "main_frame"), (c.SUB_FRAME = "sub_frame")))(
        (s = a.ResourceType || (a.ResourceType = {})),
      );
    })((e = t.declarativeNetRequest || (t.declarativeNetRequest = {})));
  })(an || (an = {}));
  var rc = (e) => chrome.runtime.getURL(e),
    sc = (e, t, o = (r) => {}) => {
      o ? chrome.tabs.sendMessage(e, t, o) : chrome.tabs.sendMessage(e, t);
    },
    nc = (e, t = (o) => {}) => {
      t ? chrome.runtime.sendMessage(e, t) : chrome.runtime.sendMessage(e);
    };
  async function ac() {
    try {
      return (await chrome.tabs.query({ active: !0, currentWindow: !0 }))[0];
    } catch (e) {
      throw e;
    }
  }
  async function ic() {
    try {
      return await chrome.tabs.query({});
    } catch (e) {
      throw e;
    }
  }
  var lc = async (e) => await chrome.tabs.get(e);
  function cc(e, t = {}) {
    chrome.tabs.create(L({ url: e }, t));
  }
  var uc = async (e) => {
      try {
        return await chrome.tabs.captureVisibleTab(e, {
          format: "png",
          quality: 100,
        });
      } catch (t) {
        throw t;
      }
    },
    dc = {
      reload: (e) => {
        chrome.tabs.reload(e);
      },
    },
    hc = {
      create: async (e) => {
        let t = L({}, e);
        if (t.width && t.height) {
          let o = await chrome.windows.getCurrent(),
            r = Math.round((o.left || 0) + ((o.width || 1920) - t.width) / 2),
            s = Math.round((o.top || 0) + ((o.height || 1080) - t.height) / 2);
          ((t.left = r), (t.top = s));
        }
        await chrome.windows.create(t);
      },
    },
    pc = {
      download: async (e, t, o) => {
        let r = re(L({}, o), { url: e, filename: t });
        try {
          await chrome.downloads.download(r);
        } catch (s) {
          console.log(s);
        }
      },
    },
    gc = {
      executeScriptFromFile: async (e, t, o) => {
        await chrome.scripting.executeScript({
          target: L({ tabId: e }, o),
          files: t,
        });
      },
      executeScriptFromFunction: async (e, t, o) =>
        await chrome.scripting.executeScript({
          injectImmediately: !0,
          world: "MAIN",
          target: { tabId: e },
          func: t,
          args: o,
        }),
      executeFromCode: async (e, t) => {
        await chrome.scripting.executeScript({
          injectImmediately: !0,
          world: "MAIN",
          target: { tabId: e },
          func: (o) => {
            let r = document.createElement("script");
            ((r.textContent = `(async()=>{${o}
})().catch((e)=>{try{console.error(\`"\${e.message}" \${e.stack.split("\\n")[1].trim()}\`);}catch(err){console.error(e);}});`),
              document.documentElement.appendChild(r),
              r.remove());
          },
          args: [t],
        });
      },
    },
    mc = {
      onCompleted: (e) => {
        chrome.webNavigation.onCompleted.addListener(e);
      },
    },
    fc = {
      session: {
        getRules: async () =>
          await chrome.declarativeNetRequest.getSessionRules(),
        addRules: async (e) => {
          try {
            await chrome.declarativeNetRequest.updateSessionRules({
              addRules: e,
              removeRuleIds: e.map((t) => t.id),
            });
          } catch (t) {
            throw t;
          }
        },
        removeRules: async (e) => {
          try {
            await chrome.declarativeNetRequest.updateSessionRules({
              removeRuleIds: e,
            });
          } catch (t) {
            throw t;
          }
        },
      },
      dynamic: {
        getRules: async () =>
          await chrome.declarativeNetRequest.getDynamicRules(),
        addRules: async (e) => {
          try {
            await chrome.declarativeNetRequest.updateDynamicRules({
              addRules: e,
              removeRuleIds: e.map((t) => t.id),
            });
          } catch (t) {
            throw t;
          }
        },
        removeRules: async (e) => {
          try {
            await chrome.declarativeNetRequest.updateDynamicRules({
              removeRuleIds: e,
            });
          } catch (t) {
            throw t;
          }
        },
      },
    },
    vc = {
      local: {
        store: async (e, t) => {
          try {
            await chrome.storage.local.set({ [e]: t });
          } catch (o) {
            throw (console.log(o), o);
          }
        },
        get: async (e) => {
          try {
            let t = await chrome.storage.local.get([e]);
            return t[e] ? t[e] : null;
          } catch (t) {
            throw (console.log(t), t);
          }
        },
        remove: async (e) => {
          try {
            await chrome.storage.local.remove([e]);
          } catch (t) {
            throw (console.log(t), t);
          }
        },
        clear: async () => {
          try {
            await chrome.storage.local.clear();
          } catch (e) {
            throw (console.log(e), e);
          }
        },
      },
      session: {
        store: async (e, t) => {
          try {
            await chrome.storage.session.set({ [e]: t });
          } catch (o) {
            throw (console.log(o), o);
          }
        },
        get: async (e) => {
          try {
            let t = await chrome.storage.session.get([e]);
            return t[e] ? t[e] : null;
          } catch (t) {
            throw (console.log(t), t);
          }
        },
        remove: async (e) => {
          try {
            await chrome.storage.session.remove([e]);
          } catch (t) {
            throw (console.log(t), t);
          }
        },
      },
    },
    wc = {
      remove: async (e, t) => {
        try {
          await chrome.browsingData.remove(e, t);
        } catch (o) {
          throw o;
        }
      },
    },
    bc = {
      getAuthToken: async (e) => await chrome.identity.getAuthToken(e),
      launchWebAuthFlow: async (e) =>
        await chrome.identity.launchWebAuthFlow(e),
      getRedirectURL: () => chrome.identity.getRedirectURL(),
    },
    _c = {
      create: async (e, t) => await chrome.alarms.create(e, t),
      clear: async (e) => await chrome.alarms.clear(e),
      clearAll: async () => await chrome.alarms.clearAll(),
      onAlarm: (e) => chrome.alarms.onAlarm.addListener(e),
    },
    yc = { getAll: async (e) => await chrome.cookies.getAll({ url: e }) },
    xc = {
      getURL: rc,
      sendMessage: nc,
      sendMessageToTab: sc,
      getActiveTab: ac,
      getAllTabs: ic,
      openTab: cc,
      getTab: lc,
      captureVisibleArea: uc,
      tabs: dc,
      windows: hc,
      downloads: pc,
      scripting: gc,
      storage: vc,
      netRequest: fc,
      webNavigation: mc,
      browsingData: wc,
      identity: bc,
      alarms: _c,
      cookies: yc,
    },
    f = xc;
  var Sc = (e, t = {}, o) => {
      let r = { action: e, data: t, type: "sync" };
      o ? f.sendMessageToTab(o, r) : f.sendMessage(r);
    },
    kc = (e, t = {}) =>
      new Promise((o, r) => {
        let s = { action: e, data: t, type: "async" };
        f.sendMessage(s, (a) => {
          chrome.runtime.lastError
            ? r(chrome.runtime.lastError)
            : a.status
              ? o(a.data)
              : r(new Error(a.err));
        });
      }),
    Cc = (e, t = {}) => {
      let o = { action: e, data: t, type: "sync" };
      chrome.tabs.query({}, (r) => {
        r.forEach((s) => {
          s.url &&
            (s.url.startsWith("http") ||
              s.url.startsWith("file") ||
              s.url.startsWith("chrome-extension://") ||
              s.url.startsWith("moz-extension://")) &&
            f.sendMessageToTab(s.id, o);
        });
      });
    },
    Mc = (e) => {
      let t = (o, r, s) => {
        if (o.type === "sync") return (s({}), e(o.action, o.data, r), !0);
      };
      return (chrome.runtime.onMessage.addListener(t), t);
    },
    Ic = (e) => {
      let t = (o, r, s) => {
        if (o.type === "async")
          return (
            (async () => {
              let a = await e(o.action, o.data, r);
              !a || s(a);
            })(),
            !0
          );
      };
      return (chrome.runtime.onMessage.addListener(t), t);
    },
    Pc = (e) => chrome.runtime.onMessage.removeListener(e),
    Tc = {
      send: Sc,
      sendAsync: kc,
      broadcastToTabs: Cc,
      listen: Mc,
      listenAsync: Ic,
      neglect: Pc,
    },
    y = Tc;
  var Ec = {
      auth: { check: "auth.check", setStatus: "auth.setStatus" },
      background: { init: "background.init" },
      messaging: {
        sendToSelf: "messaging.sendToSelf",
        broadcast: "messaging.broadcast",
      },
      window: { open: "window.open" },
      tools: { getStatus: "tools.getStatus", setStatus: "tools.setStatus" },
      downloader: {
        download: "downloader.download",
        zip: "downloader.zip",
        zipCompleted: "downloader.zipCompleted",
      },
      settings: { set: "settings.set" },
      shortcuts: { refresh: "shortcuts.refresh" },
      library: {
        signInWithGoogle: "library.signInWithGoogle",
        ensureValidToken: "library.ensureValidToken",
      },
      inspector: {
        enable: "inspector.enable",
        disable: "inspector.disable",
        toggle: "inspector.toggle",
        togglePlayback: "inspector.togglePlayback",
        broadcastToBase: "inspector.broadcastToBase",
        onIframeEnter: "inspector.onIframeEnter",
        onIframeLeave: "inspector.onIframeLeave",
        onUIEnter: "inspector.onUIEnter",
        onUILeave: "inspector.onUILeave",
        enableTool: "inspector.enableTool",
        disableTool: "inspector.disableTool",
        addTabToHotReload: "inspector.addTabToHotReload",
        removeTabToHotReload: "inspector.removeTabToHotReload",
        elements: { fetchStylesheet: "inspector.elements.fetchStylesheet" },
        trash: {
          setMode: "inspector.trash.setMode",
          addElement: "inspector.trash.addElement",
          removeElement: "inspector.trash.removeElement",
        },
        fonts: {
          getFonts: "inspector.fonts.getFonts",
          setFonts: "inspector.fonts.setFonts",
        },
        color_palette: {
          getColors: "inspector.color_palette.getColors",
          setColors: "inspector.color_palette.setColor",
        },
        search: { setQuery: "inspector.search.setQuery" },
      },
      color_eyedropper: {
        enable: "color_eyedropper.enable",
        disable: "color_eyedropper.disable",
        toggle: "color_eyedropper.toggle",
        getScreenshot: "color_eyedropper.getScreenshot",
        setScreenshot: "color_eyedropper.setScreenshot",
      },
      assets: {
        enable: "assets.enable",
        disable: "assets.disable",
        toggle: "assets.toggle",
        get: "assets.get",
        set: "assets.set",
        getSizes: "assets.getSizes",
        setSize: "assets.setSize",
        download: "assets.download",
      },
      responsive: {
        enable: "responsive.enable",
        disable: "responsive.disable",
        toggle: "responsive.toggle",
        register: "responsive.register",
        unregister: "responsive.unregister",
        setUserAgent: "responsive.setUserAgent",
        getUserAgent: "responsive.getUserAgent",
        removeUserAgent: "responsive.removeUserAgent",
        iframes: {
          register: "responsive.iframes.register",
          click: "responsive.iframes.click",
          onClick: "responsive.iframes.onClick",
          scroll: "responsive.iframes.scroll",
          onScroll: "responsive.iframes.onScroll",
          setSync: "responsive.iframes.setSync",
          setScrollbars: "responsive.iframes.setScrollbars",
          navigate: "responsive.iframes.navigate",
          back: "responsive.iframes.back",
          forward: "responsive.iframes.forward",
          setUrl: "responsive.iframes.setUrl",
        },
      },
      debug: {
        custom_code: {
          preview: "debug.custom_code.preview",
          edit: "debug.custom_code.edit",
          executeScript: "debug.custom_code.executeScript",
        },
        optimize_images: {
          enable: "debug.optimize_images.enable",
          disable: "debug.optimize_images.disable",
          getSizes: "debug.optimize_images.getSizes",
          setSize: "debug.optimize_images.setSize",
        },
      },
      seo: {
        enable: "seo.enable",
        disable: "seo.disable",
        toggle: "seo.toggle",
        insights: {
          getCrUX: "seo.insights.getCrUX",
          setCrUX: "seo.insights.setCrUX",
          getPageSpeed: "seo.insights.getPageSpeed",
          setPageSpeed: "seo.insights.setPageSpeed",
        },
        links: {
          checkLinks: "seo.links.checkLinks",
          setLinkStatus: "seo.links.setURLStatus",
        },
        hse: { getHSE: "seo.hse.getHSE", setHSE: "seo.hse.setHSE" },
      },
      capture: {
        enable: "capture.enable",
        disable: "capture.disable",
        takeScreenshot: "capture.takeScreenshot",
        openScreenshotsModal: "capture.openScreenshotsModal",
        setScreenshot: "capture.setScreenshot",
        setScreenshots: "capture.setScreenshots",
        savePDF: "capture.savePDF",
        savePDFCompleted: "capture.savePDFCompleted",
        visible_area: {},
        full_page: {
          clearBuffer: "capture.full_page.clearBuffer",
          takeScreenshot: "capture.full_page.takeScreenshot",
          scroll: "capture.full_page.scroll",
          createImageFromBuffer: "capture.full_page.createImageFromBuffer",
        },
        select_area: { takeScreenshot: "capture.select_area.takeScreenshot" },
        select_element: {
          takeScreenshot: "capture.select_element.takeScreenshot",
        },
      },
      site_stack: {
        hosting: {
          get: "site_stack.hosting.get",
          set: "site_stack.hosting.set",
        },
        tech: {
          getPageData: "site_stack.tech.getPageData",
          setPageData: "site_stack.tech.setPageData",
          get: "site_stack.tech.get",
          set: "site_stack.tech.set",
        },
        dns: { get: "site_stack.dns.get", set: "site_stack.dns.set" },
        ssl: { get: "site_stack.ssl.get", set: "site_stack.ssl.set" },
        wordpress: {
          get: "site_stack.wordpress.get",
          set: "site_stack.wordpress.set",
        },
      },
    },
    w = Ec;
  U();
  function ln() {
    for (var e = 0, t, o, r = ""; e < arguments.length; )
      (t = arguments[e++]) && (o = cn(t)) && (r && (r += " "), (r += o));
    return r;
  }
  function cn(e) {
    if (typeof e == "string") return e;
    for (var t, o = "", r = 0; r < e.length; r++)
      e[r] && (t = cn(e[r])) && (o && (o += " "), (o += t));
    return o;
  }
  var fr = "-";
  function hn(e) {
    var t = Ac(e),
      o = e.conflictingClassGroups,
      r = e.conflictingClassGroupModifiers,
      s = r === void 0 ? {} : r;
    function a(l) {
      var c = l.split(fr);
      return (c[0] === "" && c.length !== 1 && c.shift(), pn(c, t) || Nc(l));
    }
    function i(l, c) {
      var u = o[l] || [];
      return c && s[l] ? [].concat(u, s[l]) : u;
    }
    return { getClassGroupId: a, getConflictingClassGroupIds: i };
  }
  function pn(e, t) {
    if (e.length === 0) return t.classGroupId;
    var o = e[0],
      r = t.nextPart.get(o),
      s = r ? pn(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length !== 0) {
      var a = e.join(fr);
      return t.validators.find(function (i) {
        var l = i.validator;
        return l(a);
      })?.classGroupId;
    }
  }
  var un = /^\[(.+)\]$/;
  function Nc(e) {
    if (un.test(e)) {
      var t = un.exec(e)[1],
        o = t?.substring(0, t.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  }
  function Ac(e) {
    var t = e.theme,
      o = e.prefix,
      r = { nextPart: new Map(), validators: [] },
      s = Dc(Object.entries(e.classGroups), o);
    return (
      s.forEach(function (a) {
        var i = a[0],
          l = a[1];
        mr(l, r, i, t);
      }),
      r
    );
  }
  function mr(e, t, o, r) {
    e.forEach(function (s) {
      if (typeof s == "string") {
        var a = s === "" ? t : dn(t, s);
        a.classGroupId = o;
        return;
      }
      if (typeof s == "function") {
        if (Lc(s)) {
          mr(s(r), t, o, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: o });
        return;
      }
      Object.entries(s).forEach(function (i) {
        var l = i[0],
          c = i[1];
        mr(c, dn(t, l), o, r);
      });
    });
  }
  function dn(e, t) {
    var o = e;
    return (
      t.split(fr).forEach(function (r) {
        (o.nextPart.has(r) ||
          o.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(r)));
      }),
      o
    );
  }
  function Lc(e) {
    return e.isThemeGetter;
  }
  function Dc(e, t) {
    return t
      ? e.map(function (o) {
          var r = o[0],
            s = o[1],
            a = s.map(function (i) {
              return typeof i == "string"
                ? t + i
                : typeof i == "object"
                  ? Object.fromEntries(
                      Object.entries(i).map(function (l) {
                        var c = l[0],
                          u = l[1];
                        return [t + c, u];
                      }),
                    )
                  : i;
            });
          return [r, a];
        })
      : e;
  }
  function gn(e) {
    if (e < 1) return { get: function () {}, set: function () {} };
    var t = 0,
      o = new Map(),
      r = new Map();
    function s(a, i) {
      (o.set(a, i), t++, t > e && ((t = 0), (r = o), (o = new Map())));
    }
    return {
      get: function (i) {
        var l = o.get(i);
        if (l !== void 0) return l;
        if ((l = r.get(i)) !== void 0) return (s(i, l), l);
      },
      set: function (i, l) {
        o.has(i) ? o.set(i, l) : s(i, l);
      },
    };
  }
  var vr = "!";
  function mn(e) {
    var t = e.separator || ":",
      o = t.length === 1,
      r = t[0],
      s = t.length;
    return function (i) {
      for (var l = [], c = 0, u = 0, g, h = 0; h < i.length; h++) {
        var b = i[h];
        if (c === 0) {
          if (b === r && (o || i.slice(h, h + s) === t)) {
            (l.push(i.slice(u, h)), (u = h + s));
            continue;
          }
          if (b === "/") {
            g = h;
            continue;
          }
        }
        b === "[" ? c++ : b === "]" && c--;
      }
      var v = l.length === 0 ? i : i.substring(u),
        C = v.startsWith(vr),
        P = C ? v.substring(1) : v,
        N = g && g > u ? g - u : void 0;
      return {
        modifiers: l,
        hasImportantModifier: C,
        baseClassName: P,
        maybePostfixModifierPosition: N,
      };
    };
  }
  function fn(e) {
    if (e.length <= 1) return e;
    var t = [],
      o = [];
    return (
      e.forEach(function (r) {
        var s = r[0] === "[";
        s ? (t.push.apply(t, o.sort().concat([r])), (o = [])) : o.push(r);
      }),
      t.push.apply(t, o.sort()),
      t
    );
  }
  function vn(e) {
    return { cache: gn(e.cacheSize), splitModifiers: mn(e), ...hn(e) };
  }
  var Rc = /\s+/;
  function wn(e, t) {
    var o = t.splitModifiers,
      r = t.getClassGroupId,
      s = t.getConflictingClassGroupIds,
      a = new Set();
    return e
      .trim()
      .split(Rc)
      .map(function (i) {
        var l = o(i),
          c = l.modifiers,
          u = l.hasImportantModifier,
          g = l.baseClassName,
          h = l.maybePostfixModifierPosition,
          b = r(h ? g.substring(0, h) : g),
          v = Boolean(h);
        if (!b) {
          if (!h) return { isTailwindClass: !1, originalClassName: i };
          if (((b = r(g)), !b))
            return { isTailwindClass: !1, originalClassName: i };
          v = !1;
        }
        var C = fn(c).join(":"),
          P = u ? C + vr : C;
        return {
          isTailwindClass: !0,
          modifierId: P,
          classGroupId: b,
          originalClassName: i,
          hasPostfixModifier: v,
        };
      })
      .reverse()
      .filter(function (i) {
        if (!i.isTailwindClass) return !0;
        var l = i.modifierId,
          c = i.classGroupId,
          u = i.hasPostfixModifier,
          g = l + c;
        return a.has(g)
          ? !1
          : (a.add(g),
            s(c, u).forEach(function (h) {
              return a.add(l + h);
            }),
            !0);
      })
      .reverse()
      .map(function (i) {
        return i.originalClassName;
      })
      .join(" ");
  }
  function bn() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
      t[o] = arguments[o];
    var r,
      s,
      a,
      i = l;
    function l(u) {
      var g = t[0],
        h = t.slice(1),
        b = h.reduce(function (v, C) {
          return C(v);
        }, g());
      return ((r = vn(b)), (s = r.cache.get), (a = r.cache.set), (i = c), c(u));
    }
    function c(u) {
      var g = s(u);
      if (g) return g;
      var h = wn(u, r);
      return (a(u, h), h);
    }
    return function () {
      return i(ln.apply(null, arguments));
    };
  }
  function Q(e) {
    var t = function (r) {
      return r[e] || [];
    };
    return ((t.isThemeGetter = !0), t);
  }
  var yn = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    zc = /^\d+\/\d+$/,
    jc = new Set(["px", "full", "screen"]),
    Hc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Bc =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Oc = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  function He(e) {
    return ot(e) || jc.has(e) || zc.test(e) || yo(e);
  }
  function yo(e) {
    return vt(e, "length", Vc);
  }
  function xn(e) {
    return vt(e, "size", In);
  }
  function Sn(e) {
    return vt(e, "position", In);
  }
  function kn(e) {
    return vt(e, "url", Uc);
  }
  function eo(e) {
    return vt(e, "number", ot);
  }
  function ot(e) {
    return !Number.isNaN(Number(e));
  }
  function Cn(e) {
    return e.endsWith("%") && ot(e.slice(0, -1));
  }
  function Pt(e) {
    return _n(e) || vt(e, "number", _n);
  }
  function z(e) {
    return yn.test(e);
  }
  function Tt() {
    return !0;
  }
  function We(e) {
    return Hc.test(e);
  }
  function Mn(e) {
    return vt(e, "", Fc);
  }
  function vt(e, t, o) {
    var r = yn.exec(e);
    return r ? (r[1] ? r[1] === t : o(r[2])) : !1;
  }
  function Vc(e) {
    return Bc.test(e);
  }
  function In() {
    return !1;
  }
  function Uc(e) {
    return e.startsWith("url(");
  }
  function _n(e) {
    return Number.isInteger(Number(e));
  }
  function Fc(e) {
    return Oc.test(e);
  }
  function Pn() {
    var e = Q("colors"),
      t = Q("spacing"),
      o = Q("blur"),
      r = Q("brightness"),
      s = Q("borderColor"),
      a = Q("borderRadius"),
      i = Q("borderSpacing"),
      l = Q("borderWidth"),
      c = Q("contrast"),
      u = Q("grayscale"),
      g = Q("hueRotate"),
      h = Q("invert"),
      b = Q("gap"),
      v = Q("gradientColorStops"),
      C = Q("gradientColorStopPositions"),
      P = Q("inset"),
      N = Q("margin"),
      R = Q("opacity"),
      H = Q("padding"),
      Xe = Q("saturate"),
      je = Q("scale"),
      dt = Q("sepia"),
      Je = Q("skew"),
      Wt = Q("space"),
      ht = Q("translate"),
      pt = function () {
        return ["auto", "contain", "none"];
      },
      Te = function () {
        return ["auto", "hidden", "clip", "visible", "scroll"];
      },
      et = function () {
        return ["auto", z, t];
      },
      J = function () {
        return [z, t];
      },
      Rs = function () {
        return ["", He];
      },
      go = function () {
        return ["auto", ot, z];
      },
      zs = function () {
        return [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ];
      },
      mo = function () {
        return ["solid", "dashed", "dotted", "double", "none"];
      },
      js = function () {
        return [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
          "plus-lighter",
        ];
      },
      sr = function () {
        return [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ];
      },
      Gt = function () {
        return ["", "0", z];
      },
      Hs = function () {
        return [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ];
      },
      Zt = function () {
        return [ot, eo];
      },
      fo = function () {
        return [ot, z];
      };
    return {
      cacheSize: 500,
      theme: {
        colors: [Tt],
        spacing: [He],
        blur: ["none", "", We, z],
        brightness: Zt(),
        borderColor: [e],
        borderRadius: ["none", "", "full", We, z],
        borderSpacing: J(),
        borderWidth: Rs(),
        contrast: Zt(),
        grayscale: Gt(),
        hueRotate: fo(),
        invert: Gt(),
        gap: J(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Cn, yo],
        inset: et(),
        margin: et(),
        opacity: Zt(),
        padding: J(),
        saturate: Zt(),
        scale: Zt(),
        sepia: Gt(),
        skew: fo(),
        space: J(),
        translate: J(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", z] }],
        container: ["container"],
        columns: [{ columns: [We] }],
        "break-after": [{ "break-after": Hs() }],
        "break-before": [{ "break-before": Hs() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none"] }],
        clear: [{ clear: ["left", "right", "both", "none"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [].concat(zs(), [z]) }],
        overflow: [{ overflow: Te() }],
        "overflow-x": [{ "overflow-x": Te() }],
        "overflow-y": [{ "overflow-y": Te() }],
        overscroll: [{ overscroll: pt() }],
        "overscroll-x": [{ "overscroll-x": pt() }],
        "overscroll-y": [{ "overscroll-y": pt() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [P] }],
        "inset-x": [{ "inset-x": [P] }],
        "inset-y": [{ "inset-y": [P] }],
        start: [{ start: [P] }],
        end: [{ end: [P] }],
        top: [{ top: [P] }],
        right: [{ right: [P] }],
        bottom: [{ bottom: [P] }],
        left: [{ left: [P] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Pt] }],
        basis: [{ basis: et() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", z] }],
        grow: [{ grow: Gt() }],
        shrink: [{ shrink: Gt() }],
        order: [{ order: ["first", "last", "none", Pt] }],
        "grid-cols": [{ "grid-cols": [Tt] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Pt] }, z] }],
        "col-start": [{ "col-start": go() }],
        "col-end": [{ "col-end": go() }],
        "grid-rows": [{ "grid-rows": [Tt] }],
        "row-start-end": [{ row: ["auto", { span: [Pt] }, z] }],
        "row-start": [{ "row-start": go() }],
        "row-end": [{ "row-end": go() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
        gap: [{ gap: [b] }],
        "gap-x": [{ "gap-x": [b] }],
        "gap-y": [{ "gap-y": [b] }],
        "justify-content": [{ justify: ["normal"].concat(sr()) }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal"].concat(sr(), ["baseline"]) }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [].concat(sr(), ["baseline"]) }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [H] }],
        px: [{ px: [H] }],
        py: [{ py: [H] }],
        ps: [{ ps: [H] }],
        pe: [{ pe: [H] }],
        pt: [{ pt: [H] }],
        pr: [{ pr: [H] }],
        pb: [{ pb: [H] }],
        pl: [{ pl: [H] }],
        m: [{ m: [N] }],
        mx: [{ mx: [N] }],
        my: [{ my: [N] }],
        ms: [{ ms: [N] }],
        me: [{ me: [N] }],
        mt: [{ mt: [N] }],
        mr: [{ mr: [N] }],
        mb: [{ mb: [N] }],
        ml: [{ ml: [N] }],
        "space-x": [{ "space-x": [Wt] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Wt] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", z, t] }],
        "min-w": [{ "min-w": ["min", "max", "fit", z, He] }],
        "max-w": [
          {
            "max-w": [
              "0",
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [We] },
              We,
              z,
            ],
          },
        ],
        h: [{ h: [z, t, "auto", "min", "max", "fit"] }],
        "min-h": [{ "min-h": ["min", "max", "fit", z, He] }],
        "max-h": [{ "max-h": [z, t, "min", "max", "fit"] }],
        "font-size": [{ text: ["base", We, yo] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              eo,
            ],
          },
        ],
        "font-family": [{ font: [Tt] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              z,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ot, eo] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              z,
              He,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", z] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [R] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [R] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [].concat(mo(), ["wavy"]) }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", He] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", z, He] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        indent: [{ indent: J() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [R] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [].concat(zs(), [Sn]) }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", xn] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              kn,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [C] }],
        "gradient-via-pos": [{ via: [C] }],
        "gradient-to-pos": [{ to: [C] }],
        "gradient-from": [{ from: [v] }],
        "gradient-via": [{ via: [v] }],
        "gradient-to": [{ to: [v] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [R] }],
        "border-style": [{ border: [].concat(mo(), ["hidden"]) }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [R] }],
        "divide-style": [{ divide: mo() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: [""].concat(mo()) }],
        "outline-offset": [{ "outline-offset": [z, He] }],
        "outline-w": [{ outline: [He] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Rs() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [R] }],
        "ring-offset-w": [{ "ring-offset": [He] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", We, Mn] }],
        "shadow-color": [{ shadow: [Tt] }],
        opacity: [{ opacity: [R] }],
        "mix-blend": [{ "mix-blend": js() }],
        "bg-blend": [{ "bg-blend": js() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [o] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", We, z] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [h] }],
        saturate: [{ saturate: [Xe] }],
        sepia: [{ sepia: [dt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [o] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [h] }],
        "backdrop-opacity": [{ "backdrop-opacity": [R] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Xe] }],
        "backdrop-sepia": [{ "backdrop-sepia": [dt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              z,
            ],
          },
        ],
        duration: [{ duration: fo() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
        delay: [{ delay: fo() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [je] }],
        "scale-x": [{ "scale-x": [je] }],
        "scale-y": [{ "scale-y": [je] }],
        rotate: [{ rotate: [Pt, z] }],
        "translate-x": [{ "translate-x": [ht] }],
        "translate-y": [{ "translate-y": [ht] }],
        "skew-x": [{ "skew-x": [Je] }],
        "skew-y": [{ "skew-y": [Je] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              z,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: ["appearance-none"],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              z,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": J() }],
        "scroll-mx": [{ "scroll-mx": J() }],
        "scroll-my": [{ "scroll-my": J() }],
        "scroll-ms": [{ "scroll-ms": J() }],
        "scroll-me": [{ "scroll-me": J() }],
        "scroll-mt": [{ "scroll-mt": J() }],
        "scroll-mr": [{ "scroll-mr": J() }],
        "scroll-mb": [{ "scroll-mb": J() }],
        "scroll-ml": [{ "scroll-ml": J() }],
        "scroll-p": [{ "scroll-p": J() }],
        "scroll-px": [{ "scroll-px": J() }],
        "scroll-py": [{ "scroll-py": J() }],
        "scroll-ps": [{ "scroll-ps": J() }],
        "scroll-pe": [{ "scroll-pe": J() }],
        "scroll-pt": [{ "scroll-pt": J() }],
        "scroll-pr": [{ "scroll-pr": J() }],
        "scroll-pb": [{ "scroll-pb": J() }],
        "scroll-pl": [{ "scroll-pl": J() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "pinch-zoom",
              "manipulation",
              { pan: ["x", "left", "right", "y", "up", "down"] },
            ],
          },
        ],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", z] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [He, eo] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  }
  var _ = bn(Pn);
  U();
  U();
  var qc = 0,
    Y2 = Array.isArray;
  function n(e, t, o, r, s, a) {
    t || (t = {});
    var i,
      l,
      c = t;
    if ("ref" in c)
      for (l in ((c = {}), t)) l == "ref" ? (i = t[l]) : (c[l] = t[l]);
    var u = {
      type: e,
      props: c,
      key: o,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: --qc,
      __i: -1,
      __u: 0,
      __source: s,
      __self: a,
    };
    if (typeof e == "function" && (i = e.defaultProps))
      for (l in i) c[l] === void 0 && (c[l] = i[l]);
    return (A.vnode && A.vnode(u), u);
  }
  var Tn = (e) =>
      n("svg", {
        class: e.class,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": e.stroke || "2",
            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
          }),
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": e.stroke || "2",
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          }),
        ],
      }),
    rt = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 2,
        stroke: "currentColor",
        class: e.class,
        children: [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z",
          }),
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
          }),
        ],
      });
  var En = (e) =>
      n("svg", {
        class: e.class,
        fill: "currentColor",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: n("path", {
          d: "M14.586 12L9.293 6.707a1 1 0 1 1 1.414-1.414L12 6.586l3.293-3.293a3.828 3.828 0 0 1 5.414 5.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1.828 1.828 0 0 0-2.586-2.586L13.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L16 13.414l-7.293 7.293A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l5.5-5.5a1 1 0 0 1 1.414 1.414L5 16.414V19h2.586l7-7z",
          "fill-rule": "nonzero",
        }),
      }),
    Nn = (e) => {
      var t;
      return n("svg", {
        class: e.class,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.stroke || 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "data-tooltip": (t = e.tooltip) == null ? void 0 : t.content,
        children: [
          n("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2",
          }),
          n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
          n("polyline", { points: "21 15 16 10 5 21" }),
        ],
      });
    },
    Et = (e) =>
      n("svg", {
        class: e.class,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.stroke || 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: n("path", {
          d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
        }),
      }),
    xo = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        class: e.class,
        children: n("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": e.stroke || 1.5,
          children: [
            n("rect", { width: "8", height: "14", x: "8", y: "6", rx: "4" }),
            n("path", {
              d: "m19 7l-3 2M5 7l3 2m11 10l-3-2M5 19l3-2m12-4h-4M4 13h4m2-9l1 2m3-2l-1 2",
            }),
          ],
        }),
      }),
    An = (e) =>
      n("svg", {
        class: e.class,
        fill: "none",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        stroke: "currentColor",
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": e.stroke || 2,
          d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
        }),
      }),
    Ln = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        "stroke-width": e.stroke || 2,
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: [
          n("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
          n("polyline", { points: "12 19 5 12 12 5" }),
        ],
      });
  var wr = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 2,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
        }),
      }),
    br = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        "stroke-width": e.stroke || 2,
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: n("path", {
          d: "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5M3 10h18M10 3v18m6-2h6m-3-3l3 3l-3 3",
        }),
      }),
    wt = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        stroke: "currentColor",
        "stroke-width": e.stroke || 2,
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: [
          n("polyline", { points: "1 4 1 10 7 10" }),
          n("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }),
        ],
      }),
    st = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        children: n("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linejoin": "round",
          "stroke-width": e.stroke || 4,
          children: [
            n("path", {
              "stroke-linecap": "round",
              d: "M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.188 35h-4.672",
            }),
            n("path", {
              fill: "currentColor",
              d: "M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.188V15.811A2.813 2.813 0 0 0 32.188 13Z",
            }),
          ],
        }),
      });
  var So = (e) =>
    n("svg", {
      class: e.class,
      fill: "none",
      stroke: "currentColor",
      "stroke-width": e.stroke || "2",
      viewBox: "0 0 24 24",
      children: n("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M6 18L18 6M6 6l12 12",
      }),
    });
  var Dn = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          n("path", {
            fill: "currentColor",
            d: "M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z",
          }),
          n("path", {
            fill: "currentColor",
            d: "M17.003 20a4.895 4.895 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.699 5.699 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.617 16.617 0 0 1 10 24H8a17.342 17.342 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13.025 13.025 0 0 0 17.596 28Z",
          }),
        ],
      }),
    ko = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M4.5 12.75l6 6 9-13.5",
        }),
      }),
    Fe = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke ? e.stroke : "1.5",
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
        }),
      }),
    Co = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke ? e.stroke : "1.5",
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
        }),
      }),
    Rn = (e) =>
      n("svg", {
        fill: "currentColor",
        width: "24",
        height: "24",
        x: "0px",
        y: "0px",
        viewBox: "0 0 64 64",
        class: e.class,
        children: n("g", {
          children: [
            n("path", {
              d: `M35.4,18.9l-9-6.9c-0.8-0.6-1.9-0.6-2.7,0l-9,6.9c-1,0.8-1.2,2.2-0.4,3.2c0.8,1,2.2,1.2,3.2,0.4l0.4-0.3v4.8
                c0,1.2,1,2.3,2.3,2.3h10c1.2,0,2.3-1,2.3-2.3v-4.8l0.4,0.3c0.4,0.3,0.9,0.5,1.4,0.5c0.7,0,1.3-0.3,1.8-0.9
                C36.6,21,36.4,19.6,35.4,18.9z M27.8,24.7h-5.5v-6l2.7-2.1l2.7,2.1V24.7z`,
            }),
            n("path", {
              d: "M18.3,41.7h8.9c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3h-8.9c-1.2,0-2.3,1-2.3,2.3S17,41.7,18.3,41.7z",
            }),
            n("path", {
              d: "M31.7,46.3H18.3c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h13.5c1.2,0,2.3-1,2.3-2.3S33,46.3,31.7,46.3z",
            }),
            n("path", {
              d: `M55.8,33.4h-7.2V8.5c0-3.7-3-6.8-6.8-6.8H9.7c-3.7,0-6.8,3-6.8,6.8v46.9c0,3.7,3,6.8,6.8,6.8h45c3.5,0,6.4-2.9,6.4-6.4
                V38.6C61.1,35.7,58.7,33.4,55.8,33.4z M7.4,55.5V8.5c0-1.3,1-2.3,2.3-2.3h32.1c1.3,0,2.3,1,2.3,2.3v47.3c0,0.7,0.1,1.3,0.3,1.9H9.7
                C8.5,57.8,7.4,56.7,7.4,55.5z M56.6,55.9c0,1-0.8,1.9-1.9,1.9h-4.2c-1,0-1.9-0.8-1.9-1.9v-18h7.2c0.4,0,0.8,0.3,0.8,0.8V55.9z`,
            }),
          ],
        }),
      });
  var zn = (e) =>
    n("svg", {
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": e.stroke ? e.stroke : "1.5",
      stroke: "currentColor",
      class: e.class,
      children: n("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z",
      }),
    });
  var jn = (e) =>
    n("svg", {
      class: e.class,
      fill: "none",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": e.stroke ? e.stroke : "2",
      children: n("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }),
    });
  var Hn = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 2,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3",
        }),
      }),
    Nt = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: e.class,
        viewBox: "0 0 24 24",
        children: n("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-width": e.stroke || 2,
          children: [
            n("path", {
              d: "M16 21v-2c0-1.886 0-2.828-.586-3.414C14.828 15 13.886 15 12 15h-1c-1.886 0-2.828 0-3.414.586C7 16.172 7 17.114 7 19v2",
            }),
            n("path", { "stroke-linecap": "round", d: "M7 8h5" }),
            n("path", {
              d: "M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h7.172c.408 0 .613 0 .796.076c.184.076.329.22.618.51l2.828 2.828c.29.29.434.434.51.618c.076.183.076.388.076.796V15c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15z",
            }),
          ],
        }),
      }),
    _r = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        class: e.class,
        children: n("path", {
          "fill-rule": "evenodd",
          d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
          "clip-rule": "evenodd",
        }),
      });
  var xe = (e) =>
    n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      class: e.class,
      children: n("path", {
        "fill-rule": "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        "clip-rule": "evenodd",
      }),
    });
  var Bn = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || "2",
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z",
        }),
      }),
    On = (e) =>
      n("svg", {
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        "stroke-width": e.stroke || "2",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: e.class,
        children: [
          n("path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          }),
          n("polyline", { points: "15 3 21 3 21 9" }),
          n("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
        ],
      }),
    Vn = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
        }),
      });
  var Un = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
        }),
      }),
    to = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 2,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 4.5v15m7.5-7.5h-15",
        }),
      });
  var Mo = (e) =>
    n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": e.stroke || 1.5,
      stroke: "currentColor",
      class: e.class,
      children: n("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
      }),
    });
  var Fn = (e) =>
    n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": e.stroke || 2,
      stroke: "currentColor",
      class: e.class,
      children: n("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M18 12H6",
      }),
    });
  var qn = (e) =>
    n("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      class: e.class,
      children: [
        n("path", {
          fill: "currentColor",
          d: "M16 0H0v16h16zm-3 15v-1h-1v1H1V1h12v1h1V1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1z",
        }),
        n("path", {
          fill: "currentColor",
          d: "M13 3h1v1h-1zm-1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-1-1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1z",
        }),
      ],
    });
  var $n = (e) =>
    n("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      class: e.class,
      children: [
        n("path", {
          fill: "currentColor",
          d: "M0 16h16V0H0zM3 1v1h1V1h11v14H3v-1H2v1H1v-1h1v-1H1v-1h1v-1H1v-1h1V9H1V8h1V7H1V6h1V5H1V4h1V3H1V2h1V1z",
        }),
        n("path", {
          fill: "currentColor",
          d: "M2 12h1v1H2zm1 1h1v1H3zm0-2h1v1H3zm0-2h1v1H3zm-1 1h1v1H2zm0-2h1v1H2zm0-2h1v1H2zm1 1h1v1H3zm0-2h1v1H3zm0-2h1v1H3zM2 4h1v1H2zm0-2h1v1H2z",
        }),
      ],
    });
  var Kn = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z",
          }),
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z",
          }),
        ],
      }),
    Wn = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: n("path", {
          fill: "currentColor",
          d: "M27 22.142V9.858A3.992 3.992 0 1 0 22.142 5H9.858A3.992 3.992 0 1 0 5 9.858v12.284A3.992 3.992 0 1 0 9.858 27h12.284A3.992 3.992 0 1 0 27 22.142M26 4a2 2 0 1 1-2 2a2.002 2.002 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2.002 2.002 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m16.142-3H9.858A3.994 3.994 0 0 0 7 22.142V9.858A3.995 3.995 0 0 0 9.858 7h12.284A3.994 3.994 0 0 0 25 9.858v12.284A3.993 3.993 0 0 0 22.142 25M26 28a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2",
        }),
      }),
    Gn = (e) =>
      n("svg", {
        class: e.class,
        "stroke-width": e.stroke || 3,
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        children: n("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linejoin": "round",
          children: [
            n("rect", { width: "36", height: "36", x: "6", y: "6", rx: "3" }),
            n("path", { "stroke-linecap": "round", d: "M6 17h36M17 42V17" }),
          ],
        }),
      }),
    Zn = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
        }),
      }),
    Io = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
        }),
      }),
    Po = (e) =>
      n("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
        }),
      });
  var Qn = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6",
        }),
      }),
    Yn = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
        }),
      }),
    Xn = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15",
        }),
      });
  var Jn = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: e.class,
        viewBox: "0 0 24 24",
        children: n("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-width": e.stroke || 1.5,
          children: [
            n("path", {
              d: "m9.852 14.633l-6.2-3.946a2 2 0 0 1 0-3.374l6.2-3.946a4 4 0 0 1 4.296 0l6.2 3.946a2 2 0 0 1 0 3.374l-6.2 3.946a4 4 0 0 1-4.296 0Z",
            }),
            n("path", {
              d: "m18.286 12l2.063 1.313a2 2 0 0 1 0 3.374l-6.201 3.946a4 4 0 0 1-4.296 0l-6.2-3.946a2 2 0 0 1 0-3.374L5.714 12",
            }),
          ],
        }),
      }),
    ea = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
        }),
      }),
    To = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
        }),
      });
  var ta = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: e.class,
        viewBox: "0 0 24 24",
        children: n("path", {
          fill: "currentColor",
          d: "M19 10V7c0-1.103-.897-2-2-2h-3c0-1.654-1.346-3-3-3S8 3.346 8 5H5c-1.103 0-2 .897-2 2v3.881l.659.239C4.461 11.41 5 12.166 5 13s-.539 1.59-1.341 1.88L3 15.119V19c0 1.103.897 2 2 2h3.881l.239-.659C9.41 19.539 10.166 19 11 19s1.59.539 1.88 1.341l.239.659H17c1.103 0 2-.897 2-2v-3c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-2l-.003 5h-2.545c-.711-1.22-2.022-2-3.452-2s-2.741.78-3.452 2H5v-2.548C6.22 15.741 7 14.43 7 13s-.78-2.741-2-3.452V7h5V5a1 1 0 0 1 2 0v2h5v5h2a1 1 0 0 1 0 2z",
        }),
      }),
    oa = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": e.stroke || 1.5,
        stroke: "currentColor",
        class: e.class,
        children: n("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
        }),
      }),
    ra = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14 14",
        "stroke-width": e.stroke || 1.5,
        class: e.class,
        children: n("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          children: [
            n("path", { d: "M7 .5A6.5 6.5 0 1 1 .5 7a7.23 7.23 0 0 1 2-5" }),
            n("path", { d: "m.5 2.5l2-.5l.5 2m4-.5v4l2.6 1.3" }),
          ],
        }),
      }),
    Eo = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: e.class,
        viewBox: "0 0 16 16",
        children: n("path", {
          fill: "currentColor",
          d: "m5.122.282l-.348 1.071A2.206 2.206 0 0 1 3.376 2.75l-1.072.348l-.022.006a.423.423 0 0 0 0 .798l1.072.348a2.208 2.208 0 0 1 1.399 1.397l.348 1.07a.423.423 0 0 0 .798 0l.348-1.07a2.204 2.204 0 0 1 1.399-1.403l1.072-.348a.423.423 0 0 0 0-.798L7.646 2.75a2.208 2.208 0 0 1-1.377-1.397L5.92.283a.423.423 0 0 0-.799 0ZM.217 8.213l.766-.248a1.577 1.577 0 0 0 .998-.999l.25-.764a.302.302 0 0 1 .57 0l.248.764a1.575 1.575 0 0 0 .984.999l.765.248a.302.302 0 0 1 0 .57l-.765.249a1.577 1.577 0 0 0-1 1.002l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.575 1.575 0 0 0-.999-.999l-.765-.248a.302.302 0 0 1 0-.57l.015-.004ZM3 11.901v.599A2.5 2.5 0 0 0 5.5 15h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 12.5 3H9.912c.058.156.088.323.088.496c0 .176-.031.346-.091.504h2.59a1.5 1.5 0 0 1 1.5 1.5v7c0 .232-.053.45-.146.647L10.2 9.495a1.7 1.7 0 0 0-2.404 0l-3.652 3.652A1.494 1.494 0 0 1 4 12.5v-2.19a.959.959 0 0 0-.015.037l-.26.802c-.1.25-.26.46-.48.62a1.32 1.32 0 0 1-.245.132Zm8.498-4.397a1.002 1.002 0 1 0 0-2.004a1.002 1.002 0 0 0 0 2.004Zm-2.003 2.698l3.652 3.652A1.494 1.494 0 0 1 12.5 14h-7c-.232 0-.45-.053-.647-.146l3.652-3.652a.7.7 0 0 1 .99 0Z",
        }),
      });
  var sa = (e) =>
    n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": e.stroke || 1.5,
      stroke: "currentColor",
      class: e.class,
      children: n("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z",
      }),
    });
  var na = (e) =>
    n("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: e.class,
      transform: "rotate(0 0 0)",
      children: [
        n("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M4.75 9.75V18.5C4.75 18.9142 5.08579 19.25 5.5 19.25H9.74805V20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5C3.25 4.25736 4.25736 3.25 5.5 3.25H18.4985C19.7412 3.25 20.7485 4.25736 20.7485 5.5L20.7485 9.75H4.75ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H18.4985C18.9128 4.75 19.2485 5.08579 19.2485 5.5L19.2485 8.25H4.75V5.5Z",
          fill: "currentColor",
        }),
        n("path", {
          d: "M14.4908 15.2942C14.4908 14.8524 14.849 14.4942 15.2908 14.4942H15.2962C15.738 14.4942 16.0962 14.8524 16.0962 15.2942C16.0962 15.736 15.738 16.0942 15.2962 16.0942H15.2908C14.849 16.0942 14.4908 15.736 14.4908 15.2942Z",
          fill: "currentColor",
        }),
        n("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M14.1717 11.9236C12.9291 11.9236 11.9217 12.9309 11.9217 14.1736V19.5972C11.9217 20.5521 12.7207 21.3262 13.7064 21.3262H14.1517L14.1717 21.3263H19.0744L19.0943 21.3262H19.5396C20.5252 21.3262 21.3243 20.5521 21.3243 19.5972L21.3243 19.0949L21.3244 19.0763V14.1736C21.3244 12.9309 20.317 11.9236 19.0744 11.9236H14.1717ZM19.8244 17.213V14.1736C19.8244 13.7594 19.4886 13.4236 19.0744 13.4236H14.1717C13.7575 13.4236 13.4217 13.7594 13.4217 14.1736V17.9845L14.1862 17.595C14.7277 17.319 15.3773 17.331 15.9076 17.6268L16.9653 18.2169C17.683 18.6172 18.5906 18.4867 19.1573 17.9017L19.8244 17.213Z",
          fill: "currentColor",
        }),
      ],
    });
  var bt = (e) =>
    n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      class: e.class,
      viewBox: "0 0 24 24",
      children: n("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": e.stroke || 1.5,
        children: [
          n("rect", {
            width: "3.998",
            height: "15",
            x: "2.75",
            y: "4.504",
            rx: "1.5",
          }),
          n("rect", {
            width: "3.998",
            height: "15",
            x: "9.201",
            y: "4.504",
            rx: "1.5",
          }),
          n("path", {
            d: "M15.267 8.378c-.165-.615.2-1.247.814-1.411l1.038-.278c.614-.165 1.245.2 1.41.814l2.681 10.014a1.15 1.15 0 0 1-.814 1.41l-1.038.279a1.15 1.15 0 0 1-1.41-.815z",
          }),
        ],
      }),
    });
  var yr = (e) =>
    n("svg", {
      viewBox: "0 0 24 24",
      class: e.class,
      children: n("path", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": e.stroke,
        d: "M4.513 19.487c2.512 2.392 5.503 1.435 6.7.466c.618-.501.897-.825 1.136-1.065c.837-.777.784-1.555.24-2.177c-.219-.249-1.616-1.591-2.956-2.967c-.694-.694-1.172-1.184-1.582-1.58c-.547-.546-1.026-1.172-1.744-1.154c-.658 0-1.136.58-1.735 1.179c-.688.688-1.196 1.555-1.375 2.333c-.539 2.273.299 3.888 1.316 4.965m0 0L2 21.999M19.487 4.515c-2.513-2.394-5.494-1.42-6.69-.45c-.62.502-.898.826-1.138 1.066c-.837.778-.784 1.556-.239 2.178c.078.09.31.32.635.644m7.432-3.438c1.017 1.077 1.866 2.71 1.327 4.985c-.18.778-.688 1.645-1.376 2.334c-.598.598-1.077 1.179-1.735 1.179c-.718.018-1.09-.502-1.639-1.048m3.423-7.45L22 2m-5.936 9.964c-.41-.395-.994-.993-1.688-1.687c-.858-.882-1.74-1.75-2.321-2.325m4.009 4.012l-1.562 1.524m-3.99-3.983l1.543-1.553",
      }),
    });
  var No = (e) =>
      n("svg", {
        class: e.class,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: n("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2 6C2 4.75736 3.00736 3.75 4.25 3.75H8.5C9.2082 3.75 9.87508 4.08344 10.3 4.65L11.65 6.45C11.7916 6.63885 12.0139 6.75 12.25 6.75H18.5C19.7426 6.75 20.75 7.75736 20.75 9V10.7349C21.7266 11.2231 22.2676 12.3956 21.8591 13.5189L19.95 18.7689C19.6267 19.6581 18.7816 20.25 17.8355 20.25H4.25C3.00736 20.25 2 19.2426 2 18V6ZM4.25678 18.75H17.8355C18.1509 18.75 18.4325 18.5527 18.5403 18.2563L20.4494 13.0063C20.6273 12.5172 20.265 12 19.7446 12H6.16588C5.8505 12 5.56881 12.1973 5.46103 12.4937L3.55194 17.7437C3.37407 18.2328 3.73631 18.75 4.25678 18.75ZM3.5 13.4973V6C3.5 5.58579 3.83579 5.25 4.25 5.25H8.5C8.73607 5.25 8.95836 5.36115 9.1 5.55L10.45 7.35C10.8749 7.91656 11.5418 8.25 12.25 8.25H18.5C18.9142 8.25 19.25 8.58579 19.25 9V10.5H6.16588C5.21974 10.5 4.37468 11.0919 4.05134 11.9811L3.5 13.4973Z",
        }),
      }),
    aa = (e) =>
      n("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: e.class,
        viewBox: "0 0 512 512",
        children: [
          n("path", {
            fill: "#0074A8",
            d: "M491 326V92.143C491 79.021 480.259 68 467.137 68H341.13c-9.287 0-17.723 5.603-21.596 14.044l-12.709 27.903C302.952 118.388 294.516 124 285.229 124H67.538C54.416 124 44 134.426 44 147.549v216.363C44 377.034 54.416 388 67.538 388h399.599c.628 0 1.248-.36 1.863-.408V433h.342c0 6 4.877 10.636 10.829 10.636c5.952 0 10.829-4.967 10.829-10.919V326z",
          }),
          n("path", {
            fill: "#59CAFC",
            d: "M480.171 443.636c-5.952 0-10.829-4.636-10.829-10.636H469V210.181C469 197.058 458.661 186 445.539 186H45.94C32.818 186 22 197.058 22 210.181V449.37C22 462.492 32.818 473 45.94 473h399.599c1.385 0 2.741-.06 4.061-.288c1.639.227 3.31.385 5.012.385c20.04 0 36.136-16.229 36.136-36.269c0-.534-.036-1.058-.058-1.586c-1.147 4.766-5.435 8.394-10.519 8.394z",
          }),
        ],
      });
  var Ao = (e) =>
    n("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: e.class,
      children: [
        n("path", {
          d: "M2 6C2 4.75736 3.00736 3.75 4.25 3.75H8.5C9.2082 3.75 9.87508 4.08344 10.3 4.65L11.65 6.45C11.7916 6.63885 12.0139 6.75 12.25 6.75H19.75C20.9926 6.75 22 7.75736 22 9V12.338C21.5725 11.8027 21.0667 11.3327 20.5 10.9453V9C20.5 8.58579 20.1642 8.25 19.75 8.25H12.25C11.5418 8.25 10.8749 7.91656 10.45 7.35L9.1 5.55C8.95836 5.36115 8.73607 5.25 8.5 5.25H4.25C3.83579 5.25 3.5 5.58579 3.5 6V18C3.5 18.4142 3.83579 18.75 4.25 18.75H10.0847C10.2572 19.2813 10.4926 19.7842 10.7822 20.25H4.25C3.00736 20.25 2 19.2426 2 18V6Z",
          fill: "currentColor",
        }),
        n("path", {
          d: "M15.8751 14.9999C15.8751 14.5857 16.2109 14.2499 16.6251 14.2499C17.0393 14.2499 17.3751 14.5857 17.3751 14.9999V15.8749H18.2502C18.6644 15.8749 19.0002 16.2107 19.0002 16.6249C19.0002 17.0391 18.6644 17.3749 18.2502 17.3749H17.3751V18.25C17.3751 18.6643 17.0393 19 16.6251 19C16.2109 19 15.8751 18.6643 15.8751 18.25V17.3749H15C14.5858 17.3749 14.25 17.0391 14.25 16.6249C14.25 16.2107 14.5858 15.8749 15 15.8749H15.8751V14.9999Z",
          fill: "currentColor",
        }),
        n("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M11.25 16.625C11.25 13.6565 13.6565 11.25 16.625 11.25C19.5935 11.25 22 13.6565 22 16.625C22 19.5935 19.5935 22 16.625 22C13.6565 22 11.25 19.5935 11.25 16.625ZM16.625 12.75C14.4849 12.75 12.75 14.4849 12.75 16.625C12.75 18.7651 14.4849 20.5 16.625 20.5C18.7651 20.5 20.5 18.7651 20.5 16.625C20.5 14.4849 18.7651 12.75 16.625 12.75Z",
          fill: "currentColor",
        }),
      ],
    });
  var fe = null;
  function $c(e) {
    let t = _(
        "max-w-xs w-auto mt-2 first:mt-4 px-3 py-2 flex items-center text-neutral-900 font-body font-medium text-sm bg-white/80 rounded-lg border border-white/20 shadow-lg transition-all duration-300 -translate-y-full opacity-0 scale-0",
        e.class,
      ),
      o = e.icon || n(_r, { class: "w-7 h-7 flex-shrink-0 fill-teal-500" });
    return n("div", {
      class: t,
      style: { backdropFilter: "blur(5px)" },
      children: [
        o,
        n("span", {
          class:
            "ml-2 break-words whitespace-normal overflow-hidden overflow-ellipsis",
          children: e.message,
        }),
      ],
    });
  }
  var xr = class extends T {
    constructor(o) {
      super(o);
      this.show = (o) => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.setState(
              (r) => {
                let s = [...r.toasts],
                  a = s.find((i) => i.id === o);
                return (
                  a && (a.class = "opacity-100 scale-100 translate-y-0"),
                  { toasts: s }
                );
              },
              () => this.close(o),
            );
          });
        }, 50);
      };
      this.close = (o) => {
        setTimeout(() => {
          this.setState(
            (r) => {
              let s = [...r.toasts],
                a = s.find((i) => i.id === o);
              return (a && (a.class = ""), { toasts: s });
            },
            () => this.remove(o),
          );
        }, 3300);
      };
      this.remove = (o) => {
        setTimeout(() => {
          this.setState((r) => ({
            toasts: [...r.toasts.filter((a) => a.id !== o)],
          }));
        }, 300);
      };
      this.add = (o, r) => {
        let s = Date.now(),
          a = n(_r, { class: "w-6 h-6 flex-shrink-0 fill-teal-600" });
        switch (r) {
          case "error":
            a = n(xe, { class: "w-6 h-6 flex-shrink-0 fill-rose-600" });
            break;
          case "warning":
            break;
        }
        this.setState(
          (i) => ({
            toasts: [{ id: s, message: o, icon: a, class: "" }, ...i.toasts],
          }),
          () => {
            this.show(s);
          },
        );
      };
      this.state = { toasts: [] };
    }
    render() {
      let o = "top-center";
      switch (this.props.position) {
        case "top-center":
          o = "top-0 left-1/2 -translate-x-1/2";
          break;
        case "top-right":
          o = "right-0 top-0";
          break;
        default:
          o = "top-0 left-1/2 -translate-x-1/2";
          break;
      }
      let r = _(
        "max-w-xs w-full fixed z-top flex flex-col items-center",
        o,
        this.props.class,
      );
      return n("div", {
        class: r,
        children: this.state.toasts.map((s) =>
          n(
            $c,
            { position: o, class: s.class, message: s.message, icon: s.icon },
            s.id,
          ),
        ),
      });
    }
  };
  function Kc(e) {
    return n(xr, { class: e.class, ref: fe, position: e.position });
  }
  var k = {
      create: () => {
        fe = le();
      },
      success: (e) => {
        !(fe != null && fe.current) ||
          fe == null ||
          fe.current.add(e, "success");
      },
      error: (e) => {
        !(fe != null && fe.current) || fe == null || fe.current.add(e, "error");
      },
      destroy: () => {
        fe && fe.current && ((fe.current = null), (fe = null));
      },
    },
    ia = Kc;
  U();
  se();
  var Qc = Symbol.for("preact-signals");
  function Tr() {
    if (Lt > 1) Lt--;
    else {
      for (var e, t = !1; oo !== void 0; ) {
        var o = oo;
        for (oo = void 0, Pr++; o !== void 0; ) {
          var r = o.o;
          if (((o.o = void 0), (o.f &= -3), !(8 & o.f) && ka(o)))
            try {
              o.c();
            } catch (s) {
              t || ((e = s), (t = !0));
            }
          o = r;
        }
      }
      if (((Pr = 0), Lt--, t)) throw e;
    }
  }
  var G = void 0;
  var oo = void 0,
    Lt = 0,
    Pr = 0,
    Do = 0;
  function Sa(e) {
    if (G !== void 0) {
      var t = e.n;
      if (t === void 0 || t.t !== G)
        return (
          (t = {
            i: 0,
            S: e,
            p: G.s,
            n: void 0,
            t: G,
            e: void 0,
            x: void 0,
            r: t,
          }),
          G.s !== void 0 && (G.s.n = t),
          (G.s = t),
          (e.n = t),
          32 & G.f && e.S(t),
          t
        );
      if (t.i === -1)
        return (
          (t.i = 0),
          t.n !== void 0 &&
            ((t.n.p = t.p),
            t.p !== void 0 && (t.p.n = t.n),
            (t.p = G.s),
            (t.n = void 0),
            (G.s.n = t),
            (G.s = t)),
          t
        );
    }
  }
  function pe(e) {
    ((this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0));
  }
  pe.prototype.brand = Qc;
  pe.prototype.h = function () {
    return !0;
  };
  pe.prototype.S = function (e) {
    this.t !== e &&
      e.e === void 0 &&
      ((e.x = this.t), this.t !== void 0 && (this.t.e = e), (this.t = e));
  };
  pe.prototype.U = function (e) {
    if (this.t !== void 0) {
      var t = e.e,
        o = e.x;
      (t !== void 0 && ((t.x = o), (e.e = void 0)),
        o !== void 0 && ((o.e = t), (e.x = void 0)),
        e === this.t && (this.t = o));
    }
  };
  pe.prototype.subscribe = function (e) {
    var t = this;
    return xt(function () {
      var o = t.value,
        r = G;
      G = void 0;
      try {
        e(o);
      } finally {
        G = r;
      }
    });
  };
  pe.prototype.valueOf = function () {
    return this.value;
  };
  pe.prototype.toString = function () {
    return this.value + "";
  };
  pe.prototype.toJSON = function () {
    return this.value;
  };
  pe.prototype.peek = function () {
    var e = G;
    G = void 0;
    try {
      return this.value;
    } finally {
      G = e;
    }
  };
  Object.defineProperty(pe.prototype, "value", {
    get: function () {
      var e = Sa(this);
      return (e !== void 0 && (e.i = this.i), this.v);
    },
    set: function (e) {
      if (e !== this.v) {
        if (Pr > 100) throw new Error("Cycle detected");
        ((this.v = e), this.i++, Do++, Lt++);
        try {
          for (var t = this.t; t !== void 0; t = t.x) t.t.N();
        } finally {
          Tr();
        }
      }
    },
  });
  function nt(e) {
    return new pe(e);
  }
  function ka(e) {
    for (var t = e.s; t !== void 0; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1;
  }
  function Ca(e) {
    for (var t = e.s; t !== void 0; t = t.n) {
      var o = t.S.n;
      if (
        (o !== void 0 && (t.r = o), (t.S.n = t), (t.i = -1), t.n === void 0)
      ) {
        e.s = t;
        break;
      }
    }
  }
  function Ma(e) {
    for (var t = e.s, o = void 0; t !== void 0; ) {
      var r = t.p;
      (t.i === -1
        ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r))
        : (o = t),
        (t.S.n = t.r),
        t.r !== void 0 && (t.r = void 0),
        (t = r));
    }
    e.s = o;
  }
  function Dt(e) {
    (pe.call(this, void 0),
      (this.x = e),
      (this.s = void 0),
      (this.g = Do - 1),
      (this.f = 4));
  }
  (Dt.prototype = new pe()).h = function () {
    if (((this.f &= -3), 1 & this.f)) return !1;
    if ((36 & this.f) == 32 || ((this.f &= -5), this.g === Do)) return !0;
    if (((this.g = Do), (this.f |= 1), this.i > 0 && !ka(this)))
      return ((this.f &= -2), !0);
    var e = G;
    try {
      (Ca(this), (G = this));
      var t = this.x();
      (16 & this.f || this.v !== t || this.i === 0) &&
        ((this.v = t), (this.f &= -17), this.i++);
    } catch (o) {
      ((this.v = o), (this.f |= 16), this.i++);
    }
    return ((G = e), Ma(this), (this.f &= -2), !0);
  };
  Dt.prototype.S = function (e) {
    if (this.t === void 0) {
      this.f |= 36;
      for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
    }
    pe.prototype.S.call(this, e);
  };
  Dt.prototype.U = function (e) {
    if (
      this.t !== void 0 &&
      (pe.prototype.U.call(this, e), this.t === void 0)
    ) {
      this.f &= -33;
      for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
    }
  };
  Dt.prototype.N = function () {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var e = this.t; e !== void 0; e = e.x) e.t.N();
    }
  };
  Object.defineProperty(Dt.prototype, "value", {
    get: function () {
      if (1 & this.f) throw new Error("Cycle detected");
      var e = Sa(this);
      if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f)) throw this.v;
      return this.v;
    },
  });
  function Er(e) {
    return new Dt(e);
  }
  function Ia(e) {
    var t = e.u;
    if (((e.u = void 0), typeof t == "function")) {
      Lt++;
      var o = G;
      G = void 0;
      try {
        t();
      } catch (r) {
        throw ((e.f &= -2), (e.f |= 8), Nr(e), r);
      } finally {
        ((G = o), Tr());
      }
    }
  }
  function Nr(e) {
    for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
    ((e.x = void 0), (e.s = void 0), Ia(e));
  }
  function Yc(e) {
    if (G !== this) throw new Error("Out-of-order effect");
    (Ma(this), (G = e), (this.f &= -2), 8 & this.f && Nr(this), Tr());
  }
  function ro(e) {
    ((this.x = e),
      (this.u = void 0),
      (this.s = void 0),
      (this.o = void 0),
      (this.f = 32));
  }
  ro.prototype.c = function () {
    var e = this.S();
    try {
      if (8 & this.f || this.x === void 0) return;
      var t = this.x();
      typeof t == "function" && (this.u = t);
    } finally {
      e();
    }
  };
  ro.prototype.S = function () {
    if (1 & this.f) throw new Error("Cycle detected");
    ((this.f |= 1), (this.f &= -9), Ia(this), Ca(this), Lt++);
    var e = G;
    return ((G = this), Yc.bind(this, e));
  };
  ro.prototype.N = function () {
    2 & this.f || ((this.f |= 2), (this.o = oo), (oo = this));
  };
  ro.prototype.d = function () {
    ((this.f |= 8), 1 & this.f || Nr(this));
  };
  function xt(e) {
    var t = new ro(e);
    try {
      t.c();
    } catch (o) {
      throw (t.d(), o);
    }
    return t.d.bind(t);
  }
  var Lr, Ar;
  function Rt(e, t) {
    A[e] = t.bind(null, A[e] || function () {});
  }
  function Ro(e) {
    (Ar && Ar(), (Ar = e && e.S()));
  }
  function Pa(e) {
    var t = this,
      o = e.data,
      r = Jc(o);
    r.value = o;
    var s = yt(function () {
      for (var a = t.__v; (a = a.__); )
        if (a.__c) {
          a.__c.__$f |= 4;
          break;
        }
      return (
        (t.__$u.c = function () {
          var i;
          !bo(s.peek()) && ((i = t.base) == null ? void 0 : i.nodeType) === 3
            ? (t.base.data = s.peek())
            : ((t.__$f |= 1), t.setState({}));
        }),
        Er(function () {
          var i = r.value.value;
          return i === 0 ? 0 : i === !0 ? "" : i || "";
        })
      );
    }, []);
    return s.value;
  }
  Pa.displayName = "_st";
  Object.defineProperties(pe.prototype, {
    constructor: { configurable: !0, value: void 0 },
    type: { configurable: !0, value: Pa },
    props: {
      configurable: !0,
      get: function () {
        return { data: this };
      },
    },
    __b: { configurable: !0, value: 1 },
  });
  Rt("__b", function (e, t) {
    if (typeof t.type == "string") {
      var o,
        r = t.props;
      for (var s in r)
        if (s !== "children") {
          var a = r[s];
          a instanceof pe &&
            (o || (t.__np = o = {}), (o[s] = a), (r[s] = a.peek()));
        }
    }
    e(t);
  });
  Rt("__r", function (e, t) {
    Ro();
    var o,
      r = t.__c;
    (r &&
      ((r.__$f &= -2),
      (o = r.__$u) === void 0 &&
        (r.__$u = o =
          (function (s) {
            var a;
            return (
              xt(function () {
                a = this;
              }),
              (a.c = function () {
                ((r.__$f |= 1), r.setState({}));
              }),
              a
            );
          })())),
      (Lr = r),
      Ro(o),
      e(t));
  });
  Rt("__e", function (e, t, o, r) {
    (Ro(), (Lr = void 0), e(t, o, r));
  });
  Rt("diffed", function (e, t) {
    (Ro(), (Lr = void 0));
    var o;
    if (typeof t.type == "string" && (o = t.__e)) {
      var r = t.__np,
        s = t.props;
      if (r) {
        var a = o.U;
        if (a)
          for (var i in a) {
            var l = a[i];
            l !== void 0 && !(i in r) && (l.d(), (a[i] = void 0));
          }
        else o.U = a = {};
        for (var c in r) {
          var u = a[c],
            g = r[c];
          u === void 0 ? ((u = Xc(o, c, g, s)), (a[c] = u)) : u.o(g, s);
        }
      }
    }
    e(t);
  });
  function Xc(e, t, o, r) {
    var s = t in e && e.ownerSVGElement === void 0,
      a = nt(o);
    return {
      o: function (i, l) {
        ((a.value = i), (r = l));
      },
      d: xt(function () {
        var i = a.value.value;
        r[t] !== i &&
          ((r[t] = i),
          s ? (e[t] = i) : i ? e.setAttribute(t, i) : e.removeAttribute(t));
      }),
    };
  }
  Rt("unmount", function (e, t) {
    if (typeof t.type == "string") {
      var o = t.__e;
      if (o) {
        var r = o.U;
        if (r) {
          o.U = void 0;
          for (var s in r) {
            var a = r[s];
            a && a.d();
          }
        }
      }
    } else {
      var i = t.__c;
      if (i) {
        var l = i.__$u;
        l && ((i.__$u = void 0), l.d());
      }
    }
    e(t);
  });
  Rt("__h", function (e, t, o, r) {
    ((r < 3 || r === 9) && (t.__$f |= 2), e(t, o, r));
  });
  T.prototype.shouldComponentUpdate = function (e, t) {
    var o = this.__$u;
    if (!((o && o.s !== void 0) || 4 & this.__$f) || 3 & this.__$f) return !0;
    for (var r in t) return !0;
    for (var s in e) if (s !== "__source" && e[s] !== this.props[s]) return !0;
    for (var a in this.props) if (!(a in e)) return !0;
    return !1;
  };
  function Jc(e) {
    return yt(function () {
      return nt(e);
    }, []);
  }
  var so = nt([]),
    e1 = nt({}),
    t1 = nt({
      inspector: !1,
      color_eyedropper: !1,
      assets: !1,
      responsive: !1,
      seo: !1,
    }),
    o1 = () => {
      let e = [...so.value];
      (e.pop(), (so.value = e));
    },
    r1 = (e, t = {}) => {
      so.value = [...so.value, { name: e, props: t }];
    },
    s1 = { history: so, tab: e1, toolStatus: t1, back: o1, goto: r1 },
    p = s1;
  U();
  function n1(e) {
    let t = "w-full h-full flex flex-col";
    return n("div", {
      class: e.class ? _(t, e.class) : t,
      children: e.children,
    });
  }
  var $ = n1;
  function a1(e, t) {
    ((document.querySelector("html").style.width = `${e}px`),
      (document.querySelector("html").style.height = `${t}px`),
      (document.body.style.width = `${e}px`),
      (document.body.style.height = `${t}px`));
  }
  var i1 = { resizePopup: a1 },
    q = i1;
  function l1(e) {
    let t = _(
      "w-6 h-6 text-white/20 animate-spin-fast fill-white",
      e.color,
      e.size,
      e.class,
    );
    return n("svg", {
      role: "status",
      "aria-hidden": "true",
      class: t,
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        n("path", {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor",
        }),
        n("path", {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill",
        }),
      ],
    });
  }
  var at = l1;
  var Dr = class extends T {
      constructor(t) {
        super(t);
      }
      componentDidMount() {
        q.resizePopup(340, 200);
      }
      render() {
        return n($, {
          class: "flex items-center justify-center",
          children: n(at, {}),
        });
      }
    },
    Ta = Dr;
  U();
  function c1(e) {
    let t = _("h-5 relative inline-flex items-center font-body", e.class),
      o =
        "w-9 h-5 peer-focus:outline-none peer-focus:ring-4 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all marker:border-gray-600 peer-checked:bg-yellow-500 cursor-pointer";
    return n("div", {
      class: t,
      children: [
        n("input", {
          type: "checkbox",
          class: "sr-only peer",
          checked: e.checked,
          disabled: e.disabled,
        }),
        n("div", { class: o, onClick: e.onClick }),
        e.label &&
          n("label", {
            class: "ml-3 text-xs font-medium text-gray-400",
            children: e.label,
          }),
      ],
    });
  }
  var ke = c1;
  se();
  function u1(e) {
    let t = _(
        "group mb-2 px-2 py-2 flex items-center rounded-md text-gray-400 hover:text-white transition select-none",
        e.onClick ? "hover:bg-sky-700 cursor-pointer" : "hover:bg-white/5",
        e.disabled ? "cursor-not-allowed" : "",
      ),
      o = _(
        "flex-1 ml-2 font-body font-medium text-base",
        e.disabled ? "" : "group-hover:ml-4 transition-all",
      ),
      r = M(() => {
        e.disabled || !e.onClick || e.onClick();
      }, [e.disabled]);
    return n("div", {
      onClick: r,
      class: t,
      children: [
        e.icon,
        n("span", { class: o, children: e.name }),
        e.toggle
          ? n(ke, { checked: !!e.toggleChecked, onClick: e.onToggleClick })
          : [],
      ],
    });
  }
  var Ze = u1;
  var d1 = (e) => {
      var r, s, a;
      let t = "hover:bg-white/10";
      switch (e.theme) {
        case "white":
          t = "hover:bg-white hover:text-gray-800 text-white bg-white/10";
          break;
        case "teal":
          t = "hover:bg-teal-700";
          break;
        case "blue":
          t = "hover:bg-blue-700";
          break;
        case "red":
          t = "hover:bg-red-700";
          break;
        case "rose":
          t = "hover:bg-rose-700";
          break;
      }
      let o = _(
        "w-8 h-8 flex items-center justify-center text-gray-400 rounded-full cursor-pointer hover:text-white transition-colors select-none",
        t,
        e.class,
      );
      return n("div", {
        ref: e.containerRef,
        class: o,
        onClick: e.onClick,
        "data-tooltip": (r = e.tooltip) == null ? void 0 : r.content,
        "data-tooltip-position": (s = e.tooltip) == null ? void 0 : s.position,
        "data-tooltip-shortcut": (a = e.tooltip) == null ? void 0 : a.shortcut,
        children: e.children,
      });
    },
    V = d1;
  var Ea = "0123456789",
    Na = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz${Ea}`;
  function h1(e, t = Na) {
    let o = "",
      r = t.length;
    for (let s = 0; s < e; s++) o += t.charAt(Math.floor(Math.random() * r));
    return o;
  }
  function p1(e) {
    let t = e.split(" ");
    for (let o in t) t[o] = t[o].charAt(0).toUpperCase() + t[o].slice(1);
    return t.join(" ");
  }
  var g1 = (e) => {
      let t = atob(e),
        o = Uint8Array.from(t, (r) => r.codePointAt(0));
      return new TextDecoder().decode(o);
    },
    m1 = (e) => {
      let t = new TextEncoder().encode(e),
        o = String.fromCodePoint(...t);
      return btoa(o);
    };
  function f1(e) {
    return new Blob([e]).size;
  }
  var v1 = {
      NUMBERS: Ea,
      ALPHABETS: Na,
      random: h1,
      capitalize: p1,
      fromBase64: g1,
      toBase64: m1,
      getSize: f1,
    },
    zo = v1;
  var jo,
    w1 = new Uint8Array(16);
  function Rr() {
    if (
      !jo &&
      ((jo =
        typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !jo)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return jo(w1);
  }
  var be = [];
  for (let e = 0; e < 256; ++e) be.push((e + 256).toString(16).slice(1));
  function Aa(e, t = 0) {
    return (
      be[e[t + 0]] +
      be[e[t + 1]] +
      be[e[t + 2]] +
      be[e[t + 3]] +
      "-" +
      be[e[t + 4]] +
      be[e[t + 5]] +
      "-" +
      be[e[t + 6]] +
      be[e[t + 7]] +
      "-" +
      be[e[t + 8]] +
      be[e[t + 9]] +
      "-" +
      be[e[t + 10]] +
      be[e[t + 11]] +
      be[e[t + 12]] +
      be[e[t + 13]] +
      be[e[t + 14]] +
      be[e[t + 15]]
    );
  }
  var b1 =
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
    zr = { randomUUID: b1 };
  function _1(e, t, o) {
    if (zr.randomUUID && !t && !e) return zr.randomUUID();
    e = e || {};
    let r = e.random || (e.rng || Rr)();
    if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
      o = o || 0;
      for (let s = 0; s < 16; ++s) t[o + s] = r[s];
      return t;
    }
    return Aa(r);
  }
  var jr = _1;
  var y1 = {
      IPhone:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      IPad: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1",
      Android:
        "Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.179 Mobile Safari/537.36",
      "Microsoft Edge":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.179 Safari/537.36 Edg/116.0.5845.179",
      "Chrome Desktop":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.179 Safari/537.36",
      "Firefox Desktop":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0",
      "Safari Desktop":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15",
    },
    La = y1;
  var x1 = {
    os: {
      ios: {
        name: "iOS",
        statusBar: {
          portrait: { height: 44, padding: { top: 0, left: 24, right: 18 } },
          iconMargin: 2,
        },
      },
      android: {
        name: "Android",
        statusBar: {
          portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
        },
      },
    },
  };
  async function Ho() {
    try {
      let e = await d.get(d.Schema.responsive.tabs);
      return Array.isArray(e) ? {} : e;
    } catch (e) {
      return {};
    }
  }
  async function S1(e) {
    try {
      let t = await Ho();
      return (
        t[e] ||
          ((t[e] = {
            url: "https://www.google.com",
            userAgent: { device: "IPhone", value: La.IPhone },
          }),
          await d.store(d.Schema.responsive.tabs, t)),
        t[e]
      );
    } catch (t) {
      throw t;
    }
  }
  async function k1(e) {
    try {
      let t = await Ho();
      (delete t[e], await d.store(d.Schema.responsive.tabs, t));
    } catch (t) {
      throw t;
    }
  }
  async function C1(e, t, o) {
    try {
      let r = await Ho();
      return (
        (r[e].userAgent = { device: t, value: o }),
        await d.store(d.Schema.responsive.tabs, r),
        r[e]
      );
    } catch (r) {
      throw r;
    }
  }
  async function M1() {
    try {
      return await d.get(d.Schema.responsive.settings.zoom);
    } catch (e) {
      return 100;
    }
  }
  async function I1(e) {
    try {
      await d.store(d.Schema.responsive.settings.zoom, e);
    } catch (t) {
      throw t;
    }
  }
  async function P1() {
    try {
      return await d.get(d.Schema.responsive.settings.sync);
    } catch (e) {
      return { clicks: !0, scroll: !0 };
    }
  }
  async function T1(e, t) {
    try {
      let o = { clicks: e, scroll: t };
      await d.store(d.Schema.responsive.settings.sync, o);
    } catch (o) {
      throw o;
    }
  }
  async function E1() {
    try {
      return await d.get(d.Schema.responsive.settings.view);
    } catch (e) {
      return { os: !0, frame: !0 };
    }
  }
  async function N1(e, t) {
    try {
      let o = { os: e, frame: t };
      await d.store(d.Schema.responsive.settings.view, o);
    } catch (o) {
      throw o;
    }
  }
  async function A1() {
    try {
      return await d.get(d.Schema.responsive.settings.scrollbars);
    } catch (e) {
      return { horizontal: !0, vertical: !0 };
    }
  }
  async function L1(e, t) {
    try {
      let o = { horizontal: e, vertical: t };
      await d.store(d.Schema.responsive.settings.scrollbars, o);
    } catch (o) {
      throw o;
    }
  }
  async function zt() {
    try {
      return await d.get(d.Schema.responsive.devices);
    } catch (e) {
      return [];
    }
  }
  async function D1(e) {
    try {
      return (await zt()).find((r) => r.id === e) || null;
    } catch (t) {
      throw (console.log(t), t);
    }
  }
  async function R1(e) {
    let t = e.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&"),
      o = new RegExp(t, "i");
    try {
      let r = await zt(),
        s = [];
      for (let a of r) a.name.search(o) !== -1 && s.push(a);
      return s;
    } catch (r) {
      throw r;
    }
  }
  async function z1(e, t, o, r, s, a, i) {
    try {
      let l = {
        id: e || jr(),
        name: t,
        width: o,
        height: r,
        os: s,
        builtIn: i,
      };
      a && (l.frame = a);
      let c = await zt();
      if (c.findIndex((g) => g.id === e || g.name === t) !== -1)
        throw new Error("Device already exists");
      (c.push(l), await d.store(d.Schema.responsive.devices, c));
    } catch (l) {
      throw l;
    }
  }
  async function j1(e, t, o, r, s, a) {
    try {
      let i = await zt(),
        l = i.findIndex((c) => c.id === e);
      if (l >= 0) {
        let c = L({}, i[l]);
        ((c.name = t || c.name),
          (c.width = o || c.width),
          (c.height = r || c.height),
          (c.os = s || c.os),
          a && (c.frame = a),
          (i[l] = c));
      }
      await d.store(d.Schema.responsive.devices, i);
    } catch (i) {
      throw i;
    }
  }
  async function H1(e) {
    try {
      let t = await zt(),
        o = t.findIndex((r) => r.id === e && !r.builtIn);
      (o >= 0 && t.splice(o, 1), await d.store(d.Schema.responsive.devices, t));
    } catch (t) {
      throw t;
    }
  }
  async function Bo() {
    try {
      return d.get(d.Schema.responsive.board);
    } catch (e) {
      return [];
    }
  }
  async function B1(e, t) {
    try {
      let o = await Bo(),
        r = `${e}:${Date.now()}`;
      return (
        o.push({ id: r, style: t }),
        await d.store(d.Schema.responsive.board, o),
        o
      );
    } catch (o) {
      throw o;
    }
  }
  async function O1(e) {
    try {
      let t = await Bo(),
        o = t.filter((r) => r.id.split(":")[0] !== e);
      return (await d.store(d.Schema.responsive.board, o), t);
    } catch (t) {
      throw t;
    }
  }
  async function V1(e) {
    try {
      let t = (await Bo()).filter((o) => o.id !== e);
      return (await d.store(d.Schema.responsive.board, t), t);
    } catch (t) {
      throw t;
    }
  }
  async function U1(e) {
    try {
      await d.store(d.Schema.responsive.board, e);
    } catch (t) {
      throw t;
    }
  }
  var F1 = {
      Defaults: x1,
      getTabs: Ho,
      registerTab: S1,
      unregisterTab: k1,
      setUserAgent: C1,
      getZoom: M1,
      setZoom: I1,
      getSync: P1,
      setSync: T1,
      getView: E1,
      setView: N1,
      getScrollbars: A1,
      setScrollbars: L1,
      getDevice: D1,
      getDevices: zt,
      searchDevices: R1,
      createDevice: z1,
      updateDevice: j1,
      removeDevice: H1,
      getBoard: Bo,
      addToBoard: B1,
      removeDeviceFromBoard: O1,
      removeByIdFromBoard: V1,
      updateBoard: U1,
    },
    Da = F1;
  var Hr;
  ((o) => {
    let e;
    ((a) => ((a.LEFT = "left"), (a.RIGHT = "right")))(
      (e = o.Alignment || (o.Alignment = {})),
    );
    let t;
    ((a) => (
      (a[(a.EXTERNAL = 0)] = "EXTERNAL"),
      (a[(a.INTERNAL = 1)] = "INTERNAL")
    ))((t = o.LinkType || (o.LinkType = {})));
  })(Hr || (Hr = {}));
  var no = Hr;
  var q1 = {
      inspector: {
        pseudoElementsAndClasses: !0,
        htmlAttributes: !0,
        mediaQueries: !0,
        keyframeAnimations: !0,
        hotReload: !1,
        iframes: !0,
        guidelines_on_startup: !0,
        css_box_on_startup: !1,
      },
      colorEyedropper: { zoom: 5 },
      seo: { alignment: no.Alignment.RIGHT },
      capture: { full_page_capture_delay: 500 },
      screenshot_editor: { default_annotation_color: "#dc2626" },
    },
    ve = q1;
  var $1 = {
      inspector: {
        inspectPause: { title: "Inspect / Pause", key: "P" },
        toggleElements: { title: "Toggle Elements", key: "I" },
        toggleEdit: { title: "Toggle Edit", key: "E" },
        toggleTrash: { title: "Toggle Trash", key: "D" },
        toggleFonts: { title: "Toggle Fonts", key: "F" },
        toggleColorPalette: { title: "Toggle Color Palette", key: "C" },
        toggleSearch: { title: "Toggle Search", key: "S" },
        toggleGrids: { title: "Toggle Grids", key: "G" },
        toggleGuidelines: { title: "Toggle Guidelines", key: "H" },
        toggleCssBox: { title: "Toggle CSS Box", key: "B" },
      },
    },
    Oo = $1;
  var K1 = [
      {
        id: "iphone_16_pro_max",
        name: "iPhone 16 Pro Max",
        width: 440,
        height: 956,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 8, left: 48, right: 40 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro_max/black_titanium.webp",
              ),
            },
            {
              name: "Natural Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro_max/natural_titanium.webp",
              ),
            },
            {
              name: "White Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro_max/white_titanium.webp",
              ),
            },
            {
              name: "Gold Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro_max/gold_titanium.webp",
              ),
            },
          ],
          width: 474,
          height: 984,
          rounded: 30,
          padding: { top: 14, left: 17 },
        },
      },
      {
        id: "iphone_16_pro",
        name: "iPhone 16 Pro",
        width: 402,
        height: 874,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 6, left: 40, right: 32 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro/black_titanium.webp",
              ),
            },
            {
              name: "Natural Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro/natural_titanium.webp",
              ),
            },
            {
              name: "White Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro/white_titanium.webp",
              ),
            },
            {
              name: "Gold Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_16_pro/gold_titanium.webp",
              ),
            },
          ],
          width: 436,
          height: 902,
          rounded: 30,
          padding: { top: 14, left: 17 },
        },
      },
      {
        id: "iphone_16_plus",
        name: "iPhone 16 Plus",
        width: 430,
        height: 932,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 8, left: 48, right: 40 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL(
                "./assets/images/devices/iphone_16_plus/black.webp",
              ),
            },
            {
              name: "Ultramarine",
              src: f.getURL(
                "./assets/images/devices/iphone_16_plus/ultramarine.webp",
              ),
            },
            {
              name: "Teal",
              src: f.getURL("./assets/images/devices/iphone_16_plus/teal.webp"),
            },
            {
              name: "Pink",
              src: f.getURL("./assets/images/devices/iphone_16_plus/pink.webp"),
            },
            {
              name: "White",
              src: f.getURL(
                "./assets/images/devices/iphone_16_plus/white.webp",
              ),
            },
          ],
          width: 474,
          height: 970,
          rounded: 20,
          padding: { top: 19, left: 22 },
        },
      },
      {
        id: "iphone_16",
        name: "iPhone 16",
        width: 393,
        height: 852,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 6, left: 40, right: 32 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/iphone_16/black.webp"),
            },
            {
              name: "Ultramarine",
              src: f.getURL(
                "./assets/images/devices/iphone_16/ultramarine.webp",
              ),
            },
            {
              name: "Teal",
              src: f.getURL("./assets/images/devices/iphone_16/teal.webp"),
            },
            {
              name: "Pink",
              src: f.getURL("./assets/images/devices/iphone_16/pink.webp"),
            },
            {
              name: "White",
              src: f.getURL("./assets/images/devices/iphone_16/white.webp"),
            },
          ],
          width: 436,
          height: 890,
          rounded: 20,
          padding: { top: 19, left: 22 },
        },
      },
      {
        id: "iphone_15_pro_max",
        name: "iPhone 15 Pro Max",
        width: 430,
        height: 932,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 8, left: 48, right: 40 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro_max/black_titanium.webp",
              ),
            },
            {
              name: "Natural Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro_max/natural_titanium.webp",
              ),
            },
            {
              name: "White Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro_max/white_titanium.webp",
              ),
            },
            {
              name: "Dark Blue",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro_max/dark_blue.webp",
              ),
            },
          ],
          width: 468,
          height: 964,
          rounded: 20,
          padding: { top: 16, left: 19 },
        },
      },
      {
        id: "iphone_15_pro",
        name: "iPhone 15 Pro",
        width: 393,
        height: 852,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 6, left: 40, right: 32 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro/black_titanium.webp",
              ),
            },
            {
              name: "Natural Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro/natural_titanium.webp",
              ),
            },
            {
              name: "White Titanium",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro/white_titanium.webp",
              ),
            },
            {
              name: "Dark Blue",
              src: f.getURL(
                "./assets/images/devices/iphone_15_pro/dark_blue.webp",
              ),
            },
          ],
          width: 430,
          height: 884,
          rounded: 20,
          padding: { top: 16, left: 19, right: 18 },
        },
      },
      {
        id: "iphone_15_plus",
        name: "iPhone 15 Plus",
        width: 430,
        height: 932,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 8, left: 48, right: 40 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL(
                "./assets/images/devices/iphone_15_plus/black.webp",
              ),
            },
            {
              name: "Blue",
              src: f.getURL("./assets/images/devices/iphone_15_plus/blue.webp"),
            },
            {
              name: "Green",
              src: f.getURL(
                "./assets/images/devices/iphone_15_plus/green.webp",
              ),
            },
            {
              name: "Pink",
              src: f.getURL("./assets/images/devices/iphone_15_plus/pink.webp"),
            },
            {
              name: "Yellow",
              src: f.getURL(
                "./assets/images/devices/iphone_15_plus/yellow.webp",
              ),
            },
          ],
          width: 474,
          height: 970,
          rounded: 20,
          padding: { top: 19, left: 22 },
        },
      },
      {
        id: "iphone_15",
        name: "iPhone 15",
        width: 393,
        height: 852,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 6, left: 40, right: 32 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/iphone_15/black.webp"),
            },
            {
              name: "Blue",
              src: f.getURL("./assets/images/devices/iphone_15/blue.webp"),
            },
            {
              name: "Green",
              src: f.getURL("./assets/images/devices/iphone_15/green.webp"),
            },
            {
              name: "Pink",
              src: f.getURL("./assets/images/devices/iphone_15/pink.webp"),
            },
            {
              name: "Yellow",
              src: f.getURL("./assets/images/devices/iphone_15/yellow.webp"),
            },
          ],
          width: 436,
          height: 890,
          rounded: 20,
          padding: { top: 19, left: 22 },
        },
      },
      {
        id: "iphone_14_pro_max",
        name: "iPhone 14 Pro Max",
        width: 430,
        height: 932,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 8, left: 48, right: 40 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Space Black",
              src: f.getURL(
                "./assets/images/devices/iphone_14_pro_max/space_black.webp",
              ),
            },
          ],
          width: 472,
          height: 970,
          rounded: 16,
          padding: { top: 18, left: 21 },
        },
      },
      {
        id: "iphone_14_pro",
        name: "iPhone 14 Pro",
        width: 393,
        height: 852,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 56, padding: { top: 6, left: 40, right: 32 } },
            iconMargin: 6,
          },
        },
        frame: {
          styles: [
            {
              name: "Space Black",
              src: f.getURL(
                "./assets/images/devices/iphone_14_pro/space_black.webp",
              ),
            },
          ],
          width: 436,
          height: 890,
          rounded: 16,
          padding: { top: 19, left: 22, right: 21 },
        },
      },
      {
        id: "iphone_14",
        name: "iPhone 14",
        width: 390,
        height: 844,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 24, right: 18 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Midnight",
              src: f.getURL("./assets/images/devices/iphone_14/midnight.webp"),
            },
          ],
          width: 435,
          height: 884,
          rounded: 16,
          padding: { top: 20, left: 24, right: 22 },
        },
      },
      {
        id: "iphone_14_plus",
        name: "iPhone 14 Plus",
        width: 428,
        height: 926,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 28, right: 22 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Midnight",
              src: f.getURL(
                "./assets/images/devices/iphone_14_plus/midnight.webp",
              ),
            },
          ],
          width: 474,
          height: 965,
          rounded: 16,
          padding: { top: 19, left: 24, right: 22 },
        },
      },
      {
        id: "iphone_12_pro_max",
        name: "iPhone 12 Pro Max",
        width: 428,
        height: 926,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 28, right: 22 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Graphite",
              src: f.getURL(
                "./assets/images/devices/iphone_12_pro_max/graphite.webp",
              ),
            },
          ],
          width: 474,
          height: 965,
          rounded: 16,
          padding: { top: 19, left: 24, right: 22 },
        },
      },
      {
        id: "iphone_12",
        name: "iPhone 12",
        width: 390,
        height: 844,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 24, right: 18 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/iphone_12/black.webp"),
            },
          ],
          width: 436,
          height: 883,
          rounded: 16,
          padding: { top: 19, left: 22 },
        },
      },
      {
        id: "iphone_12_mini",
        name: "iPhone 12 Mini",
        width: 360,
        height: 780,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 12, right: 10 } },
            iconMargin: 1,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL(
                "./assets/images/devices/iphone_12_mini/black.webp",
              ),
            },
          ],
          width: 405,
          height: 818,
          rounded: 16,
          padding: { top: 19, left: 22 },
        },
      },
      {
        id: "iphone_11",
        name: "iPhone 11",
        width: 414,
        height: 896,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 24, right: 18 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/iphone_11/black.webp"),
            },
          ],
          width: 487,
          height: 966,
          rounded: 16,
          padding: { top: 35, left: 36 },
        },
      },
      {
        id: "samsung_galaxy_s20_utlra",
        name: "Galaxy S20 Ultra",
        width: 412,
        height: 915,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Cosmic Black",
              src: f.getURL(
                "./assets/images/devices/galaxy_s20_ultra/cosmic_black.webp",
              ),
            },
          ],
          width: 436,
          height: 946,
          rounded: 16,
          padding: { top: 12, left: 11, right: 13 },
        },
      },
      {
        id: "samsung_galaxy_s20_plus",
        name: "Galaxy S20+",
        width: 384,
        height: 854,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Cosmic Black",
              src: f.getURL(
                "./assets/images/devices/galaxy_s20_plus/cosmic_black.webp",
              ),
            },
          ],
          width: 406,
          height: 883,
          rounded: 16,
          padding: { top: 12, left: 10, right: 13 },
        },
      },
      {
        id: "samsung_galaxy_s20",
        name: "Galaxy S20",
        width: 360,
        height: 800,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Cosmic Gray",
              src: f.getURL(
                "./assets/images/devices/galaxy_s20/cosmic_gray.webp",
              ),
            },
          ],
          width: 383,
          height: 833,
          rounded: 16,
          padding: { top: 14, left: 10 },
        },
      },
      {
        id: "samsung_galaxy_note_10",
        name: "Galaxy Note 10",
        width: 412,
        height: 869,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Aura Black",
              src: f.getURL(
                "./assets/images/devices/galaxy_note_10/aura_black.webp",
              ),
            },
          ],
          width: 430,
          height: 901,
          rounded: 12,
          padding: { top: 12, left: 10 },
        },
      },
      {
        id: "samsung_galaxy_note_10_plus",
        name: "Galaxy Note 10+",
        width: 412,
        height: 869,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Aura Black",
              src: f.getURL(
                "./assets/images/devices/galaxy_note_10_plus/aura_black.webp",
              ),
            },
          ],
          width: 430,
          height: 901,
          rounded: 12,
          padding: { top: 12, left: 10 },
        },
      },
      {
        id: "google_pixel_4",
        name: "Pixel 4",
        width: 393,
        height: 830,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/pixel_4/black.webp"),
            },
          ],
          width: 427,
          height: 907,
          rounded: 12,
          padding: { top: 52, left: 15, right: 19 },
        },
      },
      {
        id: "google_pixel_5",
        name: "Pixel 5",
        width: 393,
        height: 851,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 48, padding: { top: 0, left: 48, right: 20 } },
            landscape: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Just Black",
              src: f.getURL("./assets/images/devices/pixel_5/just_black.webp"),
            },
          ],
          width: 437,
          height: 892,
          rounded: 12,
          padding: { top: 21, left: 21, right: 24 },
        },
      },
      {
        id: "google_pixel_7_pro",
        name: "Pixel 7 Pro",
        width: 412,
        height: 892,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 48, padding: { top: 0, left: 20, right: 20 } },
            landscape: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Hazel",
              src: f.getURL("./assets/images/devices/pixel_7_pro/hazel.webp"),
            },
            {
              name: "Obsidian",
              src: f.getURL(
                "./assets/images/devices/pixel_7_pro/obsidian.webp",
              ),
            },
            {
              name: "Snow",
              src: f.getURL("./assets/images/devices/pixel_7_pro/snow.webp"),
            },
          ],
          width: 442,
          height: 934,
          rounded: 12,
          padding: { top: 18, left: 13, right: 17 },
        },
      },
      {
        id: "nothing_phone",
        name: "Nothing Phone",
        width: 432,
        height: 960,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 48, padding: { top: 12, left: 68, right: 24 } },
            landscape: { height: 38, padding: { top: 0, left: 40, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/nothing_phone/black.webp"),
            },
            {
              name: "White",
              src: f.getURL("./assets/images/devices/nothing_phone/white.webp"),
            },
          ],
          width: 474,
          height: 992,
          rounded: 12,
          padding: { top: 15, left: 21 },
        },
      },
      {
        id: "ipad",
        name: "iPad",
        width: 768,
        height: 1024,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 24, right: 18 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Space Black",
              src: f.getURL("./assets/images/devices/ipad/space_black.webp"),
            },
          ],
          width: 876,
          height: 1246,
          rounded: 0,
          padding: { top: 111, left: 54 },
        },
      },
      {
        id: "ipad_pro_11",
        name: "iPad Pro 11",
        width: 834,
        height: 1194,
        os: {
          name: "iOS",
          statusBar: {
            portrait: { height: 44, padding: { top: 0, left: 24, right: 18 } },
            iconMargin: 2,
          },
        },
        frame: {
          styles: [
            {
              name: "Silver",
              src: f.getURL("./assets/images/devices/ipad_pro_11/silver.webp"),
            },
          ],
          width: 922,
          height: 1283,
          rounded: 16,
          padding: { top: 46, left: 44 },
        },
      },
      {
        id: "nexus_7",
        name: "Nexus 7",
        width: 600,
        height: 960,
        os: {
          name: "Android",
          statusBar: {
            portrait: { height: 38, padding: { top: 0, left: 20, right: 20 } },
          },
        },
        frame: {
          styles: [
            {
              name: "Black",
              src: f.getURL("./assets/images/devices/nexus_7/black.webp"),
            },
          ],
          width: 712,
          height: 1252,
          padding: { top: 148, left: 56 },
        },
      },
      { id: "tailwind_sm", name: "Tailwind sm", width: 640, height: 480 },
      { id: "tailwind_md", name: "Tailwind md", width: 768, height: 576 },
      { id: "tailwind_lg", name: "Tailwind lg", width: 1024, height: 768 },
      { id: "tailwind_xl", name: "Tailwind xl", width: 1280, height: 960 },
      { id: "tailwind_2xl", name: "Tailwind 2xl", width: 1536, height: 1152 },
    ],
    Br = K1;
  var m = {
    auth: {
      token: { key: "auth.token", value: "" },
      email: { key: "auth.email", value: "" },
      activation_name: { key: "auth.activation_name", value: "" },
      renew_message: { key: "auth.renew_message", value: !1 },
      integration: { key: "auth.integration", value: null },
      beta: { key: "auth.beta", value: !1 },
    },
    settings: { key: "settings", value: ve },
    inspector: {
      hot_reload_tabs: { key: "inspector.hot_reload_tabs", value: [] },
    },
    color_eyedropper: {
      recents: { key: "color_eyedroper.recents", value: [] },
    },
    assets: { download_buffer: { key: "assets.download_buffer", value: {} } },
    responsive: {
      tabs: { key: "responsive.tabs", value: {} },
      devices: { key: "responsive.devices", value: [] },
      board: { key: "responsive.board", value: [] },
      settings: {
        zoom: { key: "responsive.zoom", value: 75 },
        sync: { key: "responsive.sync", value: { clicks: !0, scroll: !0 } },
        view: { key: "responsive.view", value: { os: !0, frame: !0 } },
        scrollbars: {
          key: "responsive.scrollbars",
          value: { horizontal: !0, vertical: !1 },
        },
      },
    },
    seo: { insights: { cache: { key: "seo.insights.cache", value: {} } } },
    debug: {
      clear_browsing_data: {
        config: { key: "debug.clear_browsing_data.config", value: {} },
      },
      custom_code: {
        editor_scripts: { key: "debug.custom_code.editor_scripts", value: [] },
        scripts: { key: "debug.custom_code.scripts", value: [] },
      },
      optimize_images: {
        download_buffer: {
          key: "debug.optimize_images.download_buffer",
          value: [],
        },
      },
    },
    capture: {
      buffer: { key: "capture.buffer", value: [] },
      editor_buffer: { key: "capture.editor_buffer", value: {} },
    },
    site_stack: {
      hosting: { cache: { key: "site_stack.hosting.cache", value: {} } },
      tech: {
        fingerprints: { key: "site_stack.tech.fingerprints", value: {} },
        cache: { key: "site_stack.tech.cache", value: {} },
        headers: { key: "site_stack.tech.headers", value: {} },
        xhr: { key: "site_stack.tech.xhr", value: {} },
      },
      dns: { cache: { key: "site_stack.dns.cache", value: {} } },
      ssl: { cache: { key: "site_stack.ssl.cache", value: {} } },
      wordpress: { cache: { key: "site_stack.wordpress.cache", value: {} } },
    },
    shortcuts: { key: "shortcuts", value: Oo },
    library: {
      projects: { key: "library.projects", value: [] },
      buffer: { key: "library.buffer", value: {} },
    },
  };
  async function W1() {
    try {
      let t = (await Vo(m.debug.custom_code.scripts)).map(
        (o) => (
          o.active === void 0 && (o.active = !0),
          !o.hosts && o.host && (o.hosts = [o.host]),
          delete o.host,
          o
        ),
      );
      await F(m.debug.custom_code.scripts, t);
    } catch (e) {
      console.log(e);
    }
    try {
      let t = (await Vo(m.responsive.board)).map((o) => {
        var r;
        if (typeof o == "string") {
          let s = o,
            a = Br.find((i) => i.id === s.split(":")[0]);
          return a
            ? {
                id: s,
                style:
                  ((r = a.frame) == null ? void 0 : r.styles[0].name) || "",
              }
            : { id: s, style: "" };
        }
        return o;
      });
      await F(m.responsive.board, t);
    } catch (e) {
      console.log(e);
    }
    try {
      (Uo(m.site_stack.tech.headers), Uo(m.site_stack.tech.xhr));
    } catch (e) {
      console.log(e);
    }
  }
  async function G1() {
    try {
      (await O(m.auth.token),
        await O(m.auth.email),
        await O(m.auth.activation_name),
        await O(m.auth.renew_message),
        await O(m.auth.integration),
        await O(m.auth.beta),
        await O(m.settings),
        await O(m.inspector.hot_reload_tabs),
        await O(m.color_eyedropper.recents),
        await O(m.assets.download_buffer),
        await O(m.responsive.tabs),
        await O(m.responsive.devices),
        await O(m.responsive.board),
        await O(m.responsive.settings.zoom),
        await O(m.responsive.settings.sync),
        await O(m.responsive.settings.view),
        await O(m.responsive.settings.scrollbars),
        await O(m.seo.insights.cache),
        await O(m.debug.clear_browsing_data.config),
        await O(m.debug.custom_code.editor_scripts),
        await O(m.debug.custom_code.scripts),
        await O(m.debug.optimize_images.download_buffer),
        await O(m.capture.buffer),
        await O(m.capture.editor_buffer),
        await O(m.site_stack.hosting.cache),
        await O(m.site_stack.tech.fingerprints),
        await O(m.site_stack.tech.cache),
        await O(m.site_stack.dns.cache),
        await O(m.site_stack.ssl.cache),
        await O(m.site_stack.wordpress.cache),
        await O(m.shortcuts),
        await O(m.library.projects),
        await O(m.library.buffer),
        await W1());
    } catch (e) {
      console.log(e);
    }
  }
  async function Z1() {
    try {
      (await F(m.settings, m.settings.value),
        await F(m.inspector.hot_reload_tabs, m.inspector.hot_reload_tabs.value),
        await F(m.color_eyedropper.recents, m.color_eyedropper.recents.value),
        await F(m.assets.download_buffer, m.assets.download_buffer.value),
        await F(m.responsive.tabs, m.responsive.tabs.value),
        await Uo(m.responsive.devices));
      for (let e of Br)
        await Da.createDevice(
          e.id,
          e.name,
          e.width,
          e.height,
          e.os,
          e.frame,
          !0,
        );
      (await F(m.responsive.board, m.responsive.board.value),
        await F(m.responsive.settings.zoom, m.responsive.settings.zoom.value),
        await F(m.responsive.settings.sync, m.responsive.settings.sync.value),
        await F(m.responsive.settings.view, m.responsive.settings.view.value),
        await F(
          m.responsive.settings.scrollbars,
          m.responsive.settings.scrollbars.value,
        ),
        await F(m.seo.insights.cache, m.seo.insights.cache.value),
        await F(
          m.debug.clear_browsing_data.config,
          m.debug.clear_browsing_data.config.value,
        ),
        await F(
          m.debug.custom_code.editor_scripts,
          m.debug.custom_code.editor_scripts.value,
        ),
        await F(m.debug.custom_code.scripts, m.debug.custom_code.scripts.value),
        await F(
          m.debug.optimize_images.download_buffer,
          m.debug.optimize_images.download_buffer.value,
        ),
        await F(m.capture.buffer, m.capture.buffer.value),
        await F(m.capture.editor_buffer, m.capture.editor_buffer.value),
        await F(m.site_stack.hosting.cache, m.site_stack.hosting.cache.value),
        await F(
          m.site_stack.tech.fingerprints,
          m.site_stack.tech.fingerprints.value,
        ),
        await F(m.site_stack.tech.cache, m.site_stack.tech.cache.value),
        await F(m.site_stack.dns.cache, m.site_stack.dns.cache.value),
        await F(m.site_stack.ssl.cache, m.site_stack.ssl.cache.value),
        await F(
          m.site_stack.wordpress.cache,
          m.site_stack.wordpress.cache.value,
        ),
        await F(m.shortcuts, m.shortcuts.value),
        await F(m.library.projects, m.library.projects.value),
        await F(m.library.buffer, m.library.buffer.value));
    } catch (e) {
      console.log(e);
    }
  }
  async function O(e) {
    try {
      await Vo(e);
    } catch (t) {
      (console.log("[CREATING STORAGE]", e.key), await F(e, e.value));
    }
  }
  async function F(e, t) {
    let o = e.key.split(".");
    try {
      let r = await f.storage.local.get(o[0]);
      if ((r == null && (r = {}), o.length > 1)) {
        let s = r;
        for (let a = 1; a <= o.length - 1; a++) {
          if (a === o.length - 1) {
            s[o[a]] = t;
            break;
          }
          (s[o[a]] || (s[o[a]] = {}), (s = s[o[a]]));
        }
        await f.storage.local.store(o[0], r);
      } else await f.storage.local.store(o[0], t);
    } catch (r) {
      throw r;
    }
  }
  async function Vo(e) {
    let t = e.key.split(".");
    try {
      let o = await f.storage.local.get(t[0]);
      if (o == null) throw new Error(`"${t[0]}" does not exist.`);
      let r = o;
      for (let s = 1; s < t.length; s++)
        if (((r = r[t[s]]), r == null))
          throw new Error(`"${t[s]}" does not exist.`);
      return r;
    } catch (o) {
      throw o;
    }
  }
  async function Uo(e) {
    let t = e.key.split(".");
    try {
      let o = await f.storage.local.get(t[0]);
      if (!o) throw new Error(`"${t[0]}" does not exist.`);
      if (t.length > 1) {
        let r = o;
        for (let s = 1; s < t.length - 1; s++)
          if (((r = r[t[s]]), !r)) throw new Error(`"${t[s]}" does not exist.`);
        (delete r[t[t.length - 1]], await f.storage.local.store(t[0], o));
      } else await f.storage.local.remove(t[0]);
    } catch (o) {
      throw o;
    }
  }
  var Q1 = { Schema: m, init: G1, store: F, get: Vo, remove: Uo, reset: Z1 },
    d = Q1;
  se();
  function Y1(e) {
    let t = ce(null),
      [o, r] = X(
        _(
          "w-full flex flex-col shadow-lg rounded-lg bg-gray-900 border border-white/20 scale-50 opacity-0 transition-all duration-200",
          e.winClass,
        ),
      ),
      s = ce(!1);
    Se(() => {
      !t.current ||
        (e.open && !s.current
          ? (t.current.classList.remove("hidden"),
            t.current.classList.add("flex"),
            setTimeout(() => {
              !t.current ||
                (t.current.classList.remove("bg-opacity-0"),
                t.current.classList.add("bg-opacity-100"),
                r("scale-100 opacity-100"),
                (s.current = !0));
            }, 50))
          : !e.open &&
            s.current &&
            (t.current.classList.remove("bg-opacity-100"),
            t.current.classList.add("bg-opacity-0"),
            r("scale-50 opacity-0"),
            setTimeout(() => {
              !t.current ||
                (t.current.classList.remove("flex"),
                t.current.classList.add("hidden"),
                (s.current = !1));
            }, 200)));
    }, [e.open]);
    let a = _(
      "w-full flex flex-col shadow-lg rounded-lg bg-gray-900 border border-white/20 scale-50 opacity-0 transition-all duration-200",
      e.winClass,
      o,
    );
    return n("div", {
      ref: t,
      class: _(
        "w-full h-full fixed top-0 left-0 p-4 hidden items-center justify-center bg-black/30 bg-opacity-0 transition-all duration-200",
        e.isTop ? "z-top" : "z-top-10",
        e.class,
      ),
      children: n("div", { class: a, children: e.children }),
    });
  }
  function Ce(e) {
    let t = M(() => {
      e.onClose && e.onClose();
    }, [e.onClose]);
    return n("div", {
      class:
        "h-12 pl-4 pr-2 pt-2 pb-2 flex items-center border-b border-white/10",
      children: [
        n("h1", {
          class: "flex-1 text-lg font-bold text-white font-display",
          children: e.children,
        }),
        n(V, { onClick: t, children: n(So, { class: "w-6 h-6" }) }),
      ],
    });
  }
  function ge(e) {
    let t = _("p-4 flex flex-col flex-1", e.class);
    return n("div", { class: t, ref: e.containerRef, children: e.children });
  }
  function _e(e) {
    let t = _(
      "h-14 px-4 flex items-center justify-end border-t border-white/10 shrink-0",
      e.class,
    );
    return n("div", { class: t, children: e.children });
  }
  var me = Y1;
  U();
  function X1(e) {
    var r, s;
    let t = "bg-sky-600 hover:bg-sky-700";
    switch (e.theme) {
      case "gray":
        t = "bg-gray-600 hover:bg-gray-700";
        break;
      case "teal":
        t = "bg-teal-700 hover:bg-teal-800";
        break;
      case "blue":
        t = "bg-blue-700 hover:bg-blue-800";
        break;
      case "red":
        t = "bg-red-700 hover:bg-red-800";
        break;
    }
    let o = _(
      "h-9 px-2 relative flex items-center justify-center rounded font-body font-medium text-sm text-white transition-colors",
      t,
      e.class,
      e.disabled ? "cursor-not-allowed opacity-50" : "",
    );
    return n("button", {
      ref: e.containerRef,
      class: o,
      onClick: e.onClick,
      "data-tooltip": (r = e.tooltip) == null ? void 0 : r.content,
      "data-tooltip-position": (s = e.tooltip) == null ? void 0 : s.position,
      disabled: e.disabled,
      children: [
        e.loading
          ? n("div", {
              class:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              children: n(at, { size: "w-5 h-5" }),
            })
          : n(te, {}),
        n("div", {
          class: _(
            "flex items-center justify-center invisible",
            e.loading ? "" : "visible",
          ),
          children: [
            e.icon,
            e.value
              ? n("span", { class: e.icon ? "ml-2" : "", children: e.value })
              : null,
          ],
        }),
      ],
    });
  }
  var B = X1;
  var Or = class extends T {
      constructor(o) {
        super(o);
        this.disableRenewMessage = async () => {
          try {
            await d.store(d.Schema.auth.renew_message, !1);
          } catch (o) {
            console.log(o);
          }
        };
        this.closeRenewPopup = () => {
          (this.disableRenewMessage(), this.setState({ renew_popup: !1 }));
        };
        this.renew = async () => {
          (await this.disableRenewMessage(),
            y.send(w.window.open, {
              url: "https://dashboard.tryhoverify.com",
              options: {},
            }));
        };
        this.reloadCurrentTab = () => {
          (f.tabs.reload(p.tab.value.id), window.close());
        };
        this.disableTools = (o) => {
          let r = [
            w.inspector.disable,
            w.color_eyedropper.disable,
            w.assets.disable,
            w.capture.disable,
          ];
          for (let s of r) s !== o && y.send(s, {}, p.tab.value.id);
        };
        this.inspectChange = (o) => {
          (o.stopPropagation(), this.disableTools(w.inspector.disable));
          let r = L({}, p.toolStatus.value);
          ((r.inspector = !r.inspector),
            (p.toolStatus.value = r),
            r.inspector
              ? (y.send(w.inspector.enable, {}, p.tab.value.id),
                setTimeout(() => window.close(), 200))
              : y.send(w.inspector.disable, {}, p.tab.value.id));
        };
        this.colorEyedropperChange = (o) => {
          (o.stopPropagation(), this.disableTools(w.color_eyedropper.disable));
          let r = L({}, p.toolStatus.value);
          ((r.color_eyedropper = !r.color_eyedropper),
            (p.toolStatus.value = r),
            r.color_eyedropper
              ? (y.send(w.color_eyedropper.enable, {}, p.tab.value.id),
                setTimeout(() => window.close(), 200))
              : y.send(w.color_eyedropper.disable, {}, p.tab.value.id));
        };
        this.assetsChange = (o) => {
          (o.stopPropagation(), this.disableTools(w.assets.disable));
          let r = L({}, p.toolStatus.value);
          ((r.assets = !r.assets),
            (p.toolStatus.value = r),
            r.assets
              ? (y.send(w.assets.enable, {}, p.tab.value.id),
                setTimeout(() => window.close(), 200))
              : y.send(w.assets.disable, {}, p.tab.value.id));
        };
        this.responsiveChange = (o) => {
          (o.stopPropagation(), this.disableTools(w.responsive.disable));
          let r = L({}, p.toolStatus.value);
          ((r.responsive = !r.responsive),
            (p.toolStatus.value = r),
            r.responsive
              ? (y.send(w.responsive.enable, {}, p.tab.value.id),
                setTimeout(() => window.close(), 200))
              : y.send(w.responsive.disable, {}, p.tab.value.id));
        };
        this.openResponsive = () => {
          let o = "responsive.html";
          (p.tab.value.url.startsWith("http") &&
            (o += `?u=${zo.toBase64(p.tab.value.url)}`),
            y.send(w.window.open, {
              href: o,
              options: {
                windowId: p.tab.value.window_id,
                index: p.tab.value.index + 1,
                openerTabId: p.tab.value.id,
              },
            }),
            setTimeout(() => window.close(), 200));
        };
        this.seoChange = (o) => {
          (o.stopPropagation(), this.disableTools(w.seo.disable));
          let r = L({}, p.toolStatus.value);
          ((r.seo = !r.seo),
            (p.toolStatus.value = r),
            r.seo
              ? (y.send(w.seo.enable, {}, p.tab.value.id),
                setTimeout(() => window.close(), 200))
              : y.send(w.seo.disable, {}, p.tab.value.id));
        };
        this.state = { renew_popup: !1 };
      }
      async componentDidMount() {
        xt(() => {
          // BYPASS FOR TESTING: always use smaller size
          q.resizePopup(340, 465);
          // !p.tab.value.is_injectable ||
          // (p.tab.value.is_injectable && !p.tab.value.is_injected)
          //   ? q.resizePopup(340, 528)
          //   : q.resizePopup(340, 465);
        });
        try {
          let o = await d.get(d.Schema.auth.token),
            r = await d.get(d.Schema.auth.renew_message);
          // BYPASS FOR TESTING: don't redirect to auth when no token
          // (o || p.goto("auth"), r && this.setState({ renew_popup: !0 }));
          r && this.setState({ renew_popup: !0 });
        } catch (o) {
          (console.log(o), k.error(o.message));
        }
      }
      render() {
        return n($, {
          children: [
            n(me, {
              open: this.state.renew_popup,
              winClass: "max-w-xs",
              children: [
                n(ge, {
                  class: "relative px-4 py-10 items-center",
                  children: [
                    n(V, {
                      class: "absolute right-1 top-1",
                      onClick: this.closeRenewPopup,
                      children: n(So, { class: "w-5 h-5" }),
                    }),
                    n(xe, { class: "w-16 h-16 text-yellow-500" }),
                    n("h2", {
                      class:
                        "mt-4 font-body text-white text-base font-medium text-center",
                      children: "Your license key is expiring soon",
                    }),
                    n("p", {
                      class: "mt-2 font-body text-gray-300 text-sm text-center",
                      children:
                        "Your license key is about to expire. Please renew your license key to continue using Hoverify after expiration.",
                    }),
                  ],
                }),
                n(_e, {
                  children: n(B, {
                    class: "w-full",
                    theme: "teal",
                    value: "Renew",
                    icon: n(ra, { class: "w-4 h-4" }),
                    onClick: this.renew,
                  }),
                }),
              ],
            }),
            n("div", {
              class: "p-4 flex items-center",
              children: [
                n("img", {
                  class: "w-6 h-6",
                  src: "/assets/images/logo_transparent_200.png",
                }),
                n("h1", {
                  class:
                    "flex-1 ml-2 font-display font-bold text-2xl text-white",
                  children: "Hoverify",
                }),
                n(V, {
                  onClick: () => p.goto("library"),
                  tooltip: { content: "Library", position: "bottom" },
                  children: n(bt, { class: "w-6 h-6", stroke: 1.5 }),
                }),
                n(V, {
                  onClick: () => p.goto("shortcuts"),
                  tooltip: { content: "Shortcuts", position: "bottom" },
                  children: n(Jn, { class: "w-6 h-6", stroke: 2 }),
                }),
                n(V, {
                  onClick: () => p.goto("settings"),
                  tooltip: { content: "Settings", position: "bottom" },
                  children: n(Tn, { class: "w-6 h-6" }),
                }),
              ],
            }),
            // BYPASS FOR TESTING: don't show "reload to enable" banner
            false && p.tab.value.is_injectable && !p.tab.value.is_injected
              ? n("div", {
                  class: "px-4 mb-4",
                  children: n("div", {
                    class:
                      "p-2 flex items-center gap-2 text-xs rounded-lg bg-gray-700 text-yellow-500",
                    children: [
                      n(wr, { class: "w-6 h-6 text-yellow-500" }),
                      n("p", {
                        class: "flex-1",
                        children:
                          "Some features may be disabled, reload the page to enable them.",
                      }),
                      n(V, {
                        onClick: this.reloadCurrentTab,
                        children: n(wt, { class: "w-4 h-4", stroke: 2.5 }),
                      }),
                    ],
                  }),
                })
              : null,
            p.tab.value.is_injectable
              ? null
              : n("div", {
                  class: "px-4 mb-4",
                  children: n("div", {
                    class:
                      "p-2 flex items-center gap-2 text-xs rounded-lg bg-gray-700 text-yellow-500",
                    children: [
                      n(wr, { class: "w-6 h-6 text-yellow-500" }),
                      n("p", {
                        class: "flex-1",
                        children:
                          "Page interaction features are unavailable on this page.",
                      }),
                    ],
                  }),
                }),
            n("div", {
              class: "px-2 flex flex-col",
              children: [
                // BYPASS FOR TESTING: tool toggles always enabled (disabled: !1, toggle: !0)
                n(Ze, {
                  icon: n(rt, { class: "w-7 h-7" }),
                  name: "Inspector",
                  disabled: !1,
                  toggle: !0,
                  toggleChecked: p.toolStatus.value.inspector,
                  onToggleClick: this.inspectChange,
                }),
                n(Ze, {
                  onClick: () => p.goto("color_eyedropper"),
                  icon: n(En, { class: "w-6 h-6" }),
                  name: "Color Eyedropper",
                  toggle: !0,
                  toggleChecked: p.toolStatus.value.color_eyedropper,
                  onToggleClick: this.colorEyedropperChange,
                }),
                n(Ze, {
                  icon: n(Nn, { class: "w-6 h-6" }),
                  name: "Assets",
                  disabled: !1,
                  toggle: !0,
                  toggleChecked: p.toolStatus.value.assets,
                  onToggleClick: this.assetsChange,
                }),
                n(Ze, {
                  onClick: this.openResponsive,
                  icon: n(Vn, { class: "w-7 h-7" }),
                  name: "Responsive",
                  toggle: !0,
                  toggleChecked: p.toolStatus.value.responsive,
                  onToggleClick: this.responsiveChange,
                }),
                n(Ze, {
                  icon: n(Co, { class: "w-7 h-7" }),
                  name: "SEO",
                  toggle: !0,
                  toggleChecked: p.toolStatus.value.seo,
                  onToggleClick: this.seoChange,
                  disabled: !1,
                }),
                n(Ze, {
                  onClick: () => p.goto("debug"),
                  icon: n(xo, { class: "w-7 h-7" }),
                  name: "Debug",
                }),
                n(Ze, {
                  onClick: () => p.goto("capture"),
                  icon: n(Et, { class: "w-6 h-6" }),
                  name: "Capture",
                }),
                n(Ze, {
                  onClick: () => p.goto("site_stack"),
                  icon: n(An, { class: "w-6 h-6" }),
                  name: "Site Stack",
                  disabled: !1,
                }),
              ],
            }),
          ],
        });
      }
    },
    Ra = Or;
  U();
  var J1 = () => n("div", { class: "flex-1" }),
    Be = J1;
  function e0(e) {
    return n("div", {
      class:
        "h-14 shrink-0 pl-2 pr-4 flex items-center border-b border-white/10 shadow-lg",
      children: [
        e.noBack
          ? []
          : n(V, {
              class: "w-6 h-6",
              onClick: p.back,
              children: n(Ln, { class: "w-5 h-5" }),
            }),
        n("div", {
          class: "ml-2",
          children: [
            n("h1", {
              class: "font-display font-semibold text-lg text-white",
              children: e.title,
            }),
            e.description
              ? n("p", {
                  class: "max-w-xs mt-[-4px] text-xs text-gray-400 truncate",
                  children: e.description,
                })
              : [],
          ],
        }),
        e.beta
          ? n("span", {
              class:
                "ml-2 text-xs font-medium font-body text-orange-400 bg-orange-400/20 px-1.5 py-0.5 rounded",
              children: "BETA",
            })
          : null,
        n(Be, {}),
        n("div", { class: "flex items-center gap-2", children: e.children }),
      ],
    });
  }
  var ne = e0;
  function t0(e) {
    let t = _("p-4 flex flex-col flex-1", e.class);
    return n("div", { class: t, children: e.children });
  }
  var ae = t0;
  var E = Yl(pi(), 1);
  function St() {
    return (
      (St = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
          }),
      St.apply(null, arguments)
    );
  }
  function Xr(e, t) {
    if (e == null) return {};
    var o = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (t.includes(r)) continue;
        o[r] = e[r];
      }
    return o;
  }
  function Qr(e) {
    var t = (0, E.useRef)(e),
      o = (0, E.useRef)(function (r) {
        t.current && t.current(r);
      });
    return ((t.current = e), o.current);
  }
  var Ht = function (e, t, o) {
      return (
        t === void 0 && (t = 0),
        o === void 0 && (o = 1),
        e > o ? o : e < t ? t : e
      );
    },
    f0 = ["onMove", "onKey"],
    gi = function (e, t, o) {
      var r = e.getBoundingClientRect(),
        s = t;
      return {
        left: Ht((s.pageX - (r.left + window.scrollX)) / r.width),
        top: Ht((s.pageY - (r.top + window.scrollY)) / r.height),
      };
    },
    mi = function (e) {
      e.preventDefault();
    },
    Jr = E.default.memo(function (e) {
      var t = e.onMove,
        o = e.onKey,
        r = Xr(e, f0),
        s = (0, E.useRef)(null),
        a = Qr(t),
        i = Qr(o);
      (0, E.useRef)(null);
      var l = (0, E.useRef)(!1),
        c = (0, E.useMemo)(
          function () {
            var b = function (C) {
              (mi(C), C.buttons > 0 && s.current ? a(gi(s.current, C)) : v(!1));
            };
            function v(C) {
              C
                ? window.addEventListener("mousemove", b)
                : window.removeEventListener("mousemove", b);
            }
            return [
              function (C) {
                var P = C.nativeEvent,
                  N = s.current;
                N &&
                  (mi(P),
                  !(function (R, H) {
                    return H && !0;
                  })(0, l.current) &&
                    N &&
                    (N.focus(), a(gi(N, P)), v(!0)));
              },
              function (C) {
                var P = C.which || C.keyCode;
                P < 37 ||
                  P > 40 ||
                  (C.preventDefault(),
                  i({
                    left: P === 39 ? 0.05 : P === 37 ? -0.05 : 0,
                    top: P === 40 ? 0.05 : P === 38 ? -0.05 : 0,
                  }));
              },
              v,
            ];
          },
          [i, a],
        ),
        u = c[0],
        g = c[1],
        h = c[2];
      return (
        (0, E.useEffect)(
          function () {
            return h;
          },
          [h],
        ),
        E.default.createElement(
          "div",
          St({}, r, {
            onMouseDown: u,
            className: "react-colorful__interactive",
            ref: s,
            onKeyDown: g,
            tabIndex: 0,
            role: "slider",
          }),
        )
      );
    }),
    lo = function (e) {
      return e.filter(Boolean).join(" ");
    },
    es = function (e) {
      var t = e.color,
        o = e.left,
        r = e.top,
        s = r === void 0 ? 0.5 : r,
        a = lo(["react-colorful__pointer", e.className]);
      return E.default.createElement(
        "div",
        { className: a, style: { top: 100 * s + "%", left: 100 * o + "%" } },
        E.default.createElement("div", {
          className: "react-colorful__pointer-fill",
          style: { backgroundColor: t },
        }),
      );
    },
    Me = function (e, t, o) {
      return (
        t === void 0 && (t = 0),
        o === void 0 && (o = Math.pow(10, t)),
        Math.round(o * e) / o
      );
    },
    dg = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
  var vi = function (e) {
      var t = e.s,
        o = e.v,
        r = e.a,
        s = ((200 - t) * o) / 100;
      return {
        h: Me(e.h),
        s: Me(
          s > 0 && s < 200
            ? ((t * o) / 100 / (s <= 100 ? s : 200 - s)) * 100
            : 0,
        ),
        l: Me(s / 2),
        a: Me(r, 2),
      };
    },
    Yr = function (e) {
      var t = vi(e);
      return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
    },
    Zr = function (e) {
      var t = vi(e);
      return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
    },
    wi = function (e) {
      var t = e.h,
        o = e.s,
        r = e.v,
        s = e.a;
      ((t = (t / 360) * 6), (o /= 100), (r /= 100));
      var a = Math.floor(t),
        i = r * (1 - o),
        l = r * (1 - (t - a) * o),
        c = r * (1 - (1 - t + a) * o),
        u = a % 6;
      return {
        r: Me(255 * [r, l, i, i, c, r][u]),
        g: Me(255 * [c, r, r, l, i, i][u]),
        b: Me(255 * [i, i, c, r, r, l][u]),
        a: Me(s, 2),
      };
    };
  var bi = function (e) {
    var t = e.r,
      o = e.g,
      r = e.b,
      s = e.a,
      a = Math.max(t, o, r),
      i = a - Math.min(t, o, r),
      l = i
        ? a === t
          ? (o - r) / i
          : a === o
            ? 2 + (r - t) / i
            : 4 + (t - o) / i
        : 0;
    return {
      h: Me(60 * (l < 0 ? l + 6 : l)),
      s: Me(a ? (i / a) * 100 : 0),
      v: Me((a / 255) * 100),
      a: s,
    };
  };
  var _i = E.default.memo(function (e) {
      var t = e.hue,
        o = e.onChange,
        r = lo(["react-colorful__hue", e.className]);
      return E.default.createElement(
        "div",
        { className: r },
        E.default.createElement(
          Jr,
          {
            onMove: function (s) {
              o({ h: 360 * s.left });
            },
            onKey: function (s) {
              o({ h: Ht(t + 360 * s.left, 0, 360) });
            },
            "aria-label": "Hue",
            "aria-valuenow": Me(t),
            "aria-valuemax": "360",
            "aria-valuemin": "0",
          },
          E.default.createElement(es, {
            className: "react-colorful__hue-pointer",
            left: t / 360,
            color: Yr({ h: t, s: 100, v: 100, a: 1 }),
          }),
        ),
      );
    }),
    yi = E.default.memo(function (e) {
      var t = e.hsva,
        o = e.onChange,
        r = { backgroundColor: Yr({ h: t.h, s: 100, v: 100, a: 1 }) };
      return E.default.createElement(
        "div",
        { className: "react-colorful__saturation", style: r },
        E.default.createElement(
          Jr,
          {
            onMove: function (s) {
              o({ s: 100 * s.left, v: 100 - 100 * s.top });
            },
            onKey: function (s) {
              o({
                s: Ht(t.s + 100 * s.left, 0, 100),
                v: Ht(t.v - 100 * s.top, 0, 100),
              });
            },
            "aria-label": "Color",
            "aria-valuetext":
              "Saturation " + Me(t.s) + "%, Brightness " + Me(t.v) + "%",
          },
          E.default.createElement(es, {
            className: "react-colorful__saturation-pointer",
            top: 1 - t.v / 100,
            left: t.s / 100,
            color: Yr(t),
          }),
        ),
      );
    }),
    ts = function (e, t) {
      if (e === t) return !0;
      for (var o in e) if (e[o] !== t[o]) return !1;
      return !0;
    };
  function xi(e, t, o) {
    var r = Qr(o),
      s = (0, E.useState)(function () {
        return e.toHsva(t);
      }),
      a = s[0],
      i = s[1],
      l = (0, E.useRef)({ color: t, hsva: a });
    ((0, E.useEffect)(
      function () {
        if (!e.equal(t, l.current.color)) {
          var u = e.toHsva(t);
          ((l.current = { hsva: u, color: t }), i(u));
        }
      },
      [t, e],
    ),
      (0, E.useEffect)(
        function () {
          var u;
          ts(a, l.current.hsva) ||
            e.equal((u = e.fromHsva(a)), l.current.color) ||
            ((l.current = { hsva: a, color: u }), r(u));
        },
        [a, e, r],
      ));
    var c = (0, E.useCallback)(function (u) {
      i(function (g) {
        return Object.assign({}, g, u);
      });
    }, []);
    return [a, c];
  }
  var v0,
    w0 = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
    b0 = function () {
      return (
        v0 || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0)
      );
    };
  var fi = new Map(),
    Si = function (e, t) {
      w0(function () {
        var o = e.current ? e.current.ownerDocument : document;
        if (o !== void 0 && !fi.has(o)) {
          var r = o.createElement("style");
          ((r.innerHTML = `.react-colorful{cursor:default;display:flex;flex-direction:column;height:200px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:200px}.react-colorful__saturation{background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0));border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{border-radius:inherit;bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;bottom:0;left:0;outline:none;position:absolute;right:0;top:0;touch-action:none}.react-colorful__pointer{background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);box-sizing:border-box;height:28px;position:absolute;transform:translate(-50%,-50%);width:28px;z-index:1}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
            fi.set(o, r));
          var s = b0();
          (s && r.setAttribute("nonce", s),
            t ? t.prepend(r) : o.head.appendChild(r));
        }
      }, []);
    },
    _0 = ["className", "colorModel", "color", "onChange", "root"],
    y0 = function (e) {
      var t = e.className,
        o = e.colorModel,
        r = e.color,
        s = r === void 0 ? o.defaultColor : r,
        a = e.onChange,
        i = e.root,
        l = Xr(e, _0),
        c = (0, E.useRef)(null);
      Si(c, i);
      var u = xi(o, s, a),
        g = u[0],
        h = u[1],
        b = lo(["react-colorful", t]);
      return E.default.createElement(
        "div",
        St({}, l, { ref: c, className: b }),
        E.default.createElement(yi, { hsva: g, onChange: h }),
        E.default.createElement(_i, {
          hue: g.h,
          onChange: h,
          className: "react-colorful__last-control",
        }),
      );
    };
  var x0 = function (e) {
      var t = e.className,
        o = e.hsva,
        r = e.onChange,
        s = {
          backgroundImage:
            "linear-gradient(90deg, " +
            Zr(Object.assign({}, o, { a: 0 })) +
            ", " +
            Zr(Object.assign({}, o, { a: 1 })) +
            ")",
        },
        a = lo(["react-colorful__alpha", t]),
        i = Me(100 * o.a);
      return E.default.createElement(
        "div",
        { className: a },
        E.default.createElement("div", {
          className: "react-colorful__alpha-gradient",
          style: s,
        }),
        E.default.createElement(
          Jr,
          {
            onMove: function (l) {
              r({ a: l.left });
            },
            onKey: function (l) {
              r({ a: Ht(o.a + l.left) });
            },
            "aria-label": "Alpha",
            "aria-valuetext": i + "%",
            "aria-valuenow": i,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
          },
          E.default.createElement(es, {
            className: "react-colorful__alpha-pointer",
            left: o.a,
            color: Zr(o),
          }),
        ),
      );
    },
    S0 = ["className", "colorModel", "color", "onChange", "root"],
    k0 = function (e) {
      var t = e.className,
        o = e.colorModel,
        r = e.color,
        s = r === void 0 ? o.defaultColor : r,
        a = e.onChange,
        i = e.root,
        l = Xr(e, S0),
        c = (0, E.useRef)(null);
      Si(c, i);
      var u = xi(o, s, a),
        g = u[0],
        h = u[1],
        b = lo(["react-colorful", t]);
      return E.default.createElement(
        "div",
        St({}, l, { ref: c, className: b }),
        E.default.createElement(yi, { hsva: g, onChange: h }),
        E.default.createElement(_i, { hue: g.h, onChange: h }),
        E.default.createElement(x0, {
          hsva: g,
          onChange: h,
          className: "react-colorful__last-control",
        }),
      );
    };
  var C0 = {
      defaultColor: { r: 0, g: 0, b: 0, a: 1 },
      toHsva: bi,
      fromHsva: wi,
      equal: ts,
    },
    ki = function (e) {
      return E.default.createElement(k0, St({}, e, { colorModel: C0 }));
    };
  var M0 = {
      defaultColor: { r: 0, g: 0, b: 0 },
      toHsva: function (e) {
        return bi({ r: e.r, g: e.g, b: e.b, a: 1 });
      },
      fromHsva: function (e) {
        return { r: (t = wi(e)).r, g: t.g, b: t.b };
        var t;
      },
      equal: ts,
    },
    Ci = function (e) {
      return E.default.createElement(y0, St({}, e, { colorModel: M0 }));
    };
  function I0(e) {
    let t = e.type ? e.type : "text",
      o = e.label || e.labelActions,
      r = _(o ? "h-14" : "h-9", "flex flex-col", e.class),
      s = _(
        "w-full flex-1 min-w-0 rounded bg-gray-700 px-2 text-sm text-white font-body outline-none disabled:text-gray-300",
        e.inputClass,
      );
    return n("div", {
      class: r,
      children: [
        o
          ? n("div", {
              class:
                "mb-1 flex items-center text-xs text-gray-400 font-body font-medium",
              children: [
                n("label", { class: "flex-1", children: e.label }),
                e.labelActions,
              ],
            })
          : null,
        n("input", {
          type: t,
          class: s,
          value: e.value,
          placeholder: e.placeholder,
          maxLength: e.maxLength,
          onInput: e.onInput,
          onBlur: e.onBlur,
          onKeyDown: e.onKeyDown,
          onFocus: e.onFocus,
          disabled: e.disabled,
          spellcheck: !1,
          readOnly: e.readOnly,
        }),
      ],
    });
  }
  var ie = I0;
  var os = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
  for (let e in os) Object.freeze(os[e]);
  var Bt = Object.freeze(os);
  var Mi = Object.create(null);
  for (let e in Bt) Object.hasOwn(Bt, e) && (Mi[Bt[e]] = e);
  var Ee = { to: {}, get: {} };
  Ee.get = function (e) {
    let t = e.slice(0, 3).toLowerCase(),
      o,
      r;
    switch (t) {
      case "hsl": {
        ((o = Ee.get.hsl(e)), (r = "hsl"));
        break;
      }
      case "hwb": {
        ((o = Ee.get.hwb(e)), (r = "hwb"));
        break;
      }
      default: {
        ((o = Ee.get.rgb(e)), (r = "rgb"));
        break;
      }
    }
    return o ? { model: r, value: o } : null;
  };
  Ee.get.rgb = function (e) {
    if (!e) return null;
    let t = /^#([a-f\d]{3,4})$/i,
      o = /^#([a-f\d]{6})([a-f\d]{2})?$/i,
      r =
        /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i,
      s =
        /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i,
      a = /^(\w+)$/,
      i = [0, 0, 0, 1],
      l,
      c,
      u;
    if ((l = e.match(o))) {
      for (u = l[2], l = l[1], c = 0; c < 3; c++) {
        let g = c * 2;
        i[c] = Number.parseInt(l.slice(g, g + 2), 16);
      }
      u && (i[3] = Number.parseInt(u, 16) / 255);
    } else if ((l = e.match(t))) {
      for (l = l[1], u = l[3], c = 0; c < 3; c++)
        i[c] = Number.parseInt(l[c] + l[c], 16);
      u && (i[3] = Number.parseInt(u + u, 16) / 255);
    } else if ((l = e.match(r))) {
      for (c = 0; c < 3; c++) i[c] = Number.parseFloat(l[c + 1]);
      l[4] &&
        (i[3] = l[5]
          ? Number.parseFloat(l[4]) * 0.01
          : Number.parseFloat(l[4]));
    } else if ((l = e.match(s))) {
      for (c = 0; c < 3; c++)
        i[c] = Math.round(Number.parseFloat(l[c + 1]) * 2.55);
      l[4] &&
        (i[3] = l[5]
          ? Number.parseFloat(l[4]) * 0.01
          : Number.parseFloat(l[4]));
    } else
      return (l = e.toLowerCase().match(a))
        ? l[1] === "transparent"
          ? [0, 0, 0, 0]
          : Object.hasOwn(Bt, l[1])
            ? ((i = Bt[l[1]].slice()), (i[3] = 1), i)
            : null
        : null;
    for (c = 0; c < 3; c++) i[c] = it(i[c], 0, 255);
    return ((i[3] = it(i[3], 0, 1)), i);
  };
  Ee.get.hsl = function (e) {
    if (!e) return null;
    let t =
        /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i,
      o = e.match(t);
    if (o) {
      let r = Number.parseFloat(o[4]),
        s = ((Number.parseFloat(o[1]) % 360) + 360) % 360,
        a = it(Number.parseFloat(o[2]), 0, 100),
        i = it(Number.parseFloat(o[3]), 0, 100),
        l = it(Number.isNaN(r) ? 1 : r, 0, 1);
      return [s, a, i, l];
    }
    return null;
  };
  Ee.get.hwb = function (e) {
    if (!e) return null;
    let t =
        /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i,
      o = e.match(t);
    if (o) {
      let r = Number.parseFloat(o[4]),
        s = ((Number.parseFloat(o[1]) % 360) + 360) % 360,
        a = it(Number.parseFloat(o[2]), 0, 100),
        i = it(Number.parseFloat(o[3]), 0, 100),
        l = it(Number.isNaN(r) ? 1 : r, 0, 1);
      return [s, a, i, l];
    }
    return null;
  };
  Ee.to.hex = function (...e) {
    return (
      "#" +
      qo(e[0]) +
      qo(e[1]) +
      qo(e[2]) +
      (e[3] < 1 ? qo(Math.round(e[3] * 255)) : "")
    );
  };
  Ee.to.rgb = function (...e) {
    return e.length < 4 || e[3] === 1
      ? "rgb(" +
          Math.round(e[0]) +
          ", " +
          Math.round(e[1]) +
          ", " +
          Math.round(e[2]) +
          ")"
      : "rgba(" +
          Math.round(e[0]) +
          ", " +
          Math.round(e[1]) +
          ", " +
          Math.round(e[2]) +
          ", " +
          e[3] +
          ")";
  };
  Ee.to.rgb.percent = function (...e) {
    let t = Math.round((e[0] / 255) * 100),
      o = Math.round((e[1] / 255) * 100),
      r = Math.round((e[2] / 255) * 100);
    return e.length < 4 || e[3] === 1
      ? "rgb(" + t + "%, " + o + "%, " + r + "%)"
      : "rgba(" + t + "%, " + o + "%, " + r + "%, " + e[3] + ")";
  };
  Ee.to.hsl = function (...e) {
    return e.length < 4 || e[3] === 1
      ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
      : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
  };
  Ee.to.hwb = function (...e) {
    let t = "";
    return (
      e.length >= 4 && e[3] !== 1 && (t = ", " + e[3]),
      "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
    );
  };
  Ee.to.keyword = function (...e) {
    return Mi[e.slice(0, 3)];
  };
  function it(e, t, o) {
    return Math.min(Math.max(t, e), o);
  }
  function qo(e) {
    let t = Math.round(e).toString(16).toUpperCase();
    return t.length < 2 ? "0" + t : t;
  }
  var kt = Ee;
  var rs = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
  for (let e in rs) Object.freeze(rs[e]);
  var Ot = Object.freeze(rs);
  var Ii = {};
  for (let e of Object.keys(Ot)) Ii[Ot[e]] = e;
  var x = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
      lch: { channels: 3, labels: "lch" },
      oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] },
    },
    Ye = x,
    Qe = (6 / 29) ** 3;
  function Vt(e) {
    let t = e > 0.0031308 ? 1.055 * e ** 0.4166666666666667 - 0.055 : e * 12.92;
    return Math.min(Math.max(0, t), 1);
  }
  function Ut(e) {
    return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
  }
  for (let e of Object.keys(x)) {
    if (!("channels" in x[e]))
      throw new Error("missing channels property: " + e);
    if (!("labels" in x[e]))
      throw new Error("missing channel labels property: " + e);
    if (x[e].labels.length !== x[e].channels)
      throw new Error("channel and label counts mismatch: " + e);
    let { channels: t, labels: o } = x[e];
    (delete x[e].channels,
      delete x[e].labels,
      Object.defineProperty(x[e], "channels", { value: t }),
      Object.defineProperty(x[e], "labels", { value: o }));
  }
  x.rgb.hsl = function (e) {
    let t = e[0] / 255,
      o = e[1] / 255,
      r = e[2] / 255,
      s = Math.min(t, o, r),
      a = Math.max(t, o, r),
      i = a - s,
      l,
      c;
    switch (a) {
      case s: {
        l = 0;
        break;
      }
      case t: {
        l = (o - r) / i;
        break;
      }
      case o: {
        l = 2 + (r - t) / i;
        break;
      }
      case r: {
        l = 4 + (t - o) / i;
        break;
      }
    }
    ((l = Math.min(l * 60, 360)), l < 0 && (l += 360));
    let u = (s + a) / 2;
    return (
      a === s ? (c = 0) : u <= 0.5 ? (c = i / (a + s)) : (c = i / (2 - a - s)),
      [l, c * 100, u * 100]
    );
  };
  x.rgb.hsv = function (e) {
    let t,
      o,
      r,
      s,
      a,
      i = e[0] / 255,
      l = e[1] / 255,
      c = e[2] / 255,
      u = Math.max(i, l, c),
      g = u - Math.min(i, l, c),
      h = function (b) {
        return (u - b) / 6 / g + 1 / 2;
      };
    if (g === 0) ((s = 0), (a = 0));
    else {
      switch (((a = g / u), (t = h(i)), (o = h(l)), (r = h(c)), u)) {
        case i: {
          s = r - o;
          break;
        }
        case l: {
          s = 1 / 3 + t - r;
          break;
        }
        case c: {
          s = 2 / 3 + o - t;
          break;
        }
      }
      s < 0 ? (s += 1) : s > 1 && (s -= 1);
    }
    return [s * 360, a * 100, u * 100];
  };
  x.rgb.hwb = function (e) {
    let t = e[0],
      o = e[1],
      r = e[2],
      s = x.rgb.hsl(e)[0],
      a = (1 / 255) * Math.min(t, Math.min(o, r));
    return (
      (r = 1 - (1 / 255) * Math.max(t, Math.max(o, r))),
      [s, a * 100, r * 100]
    );
  };
  x.rgb.oklab = function (e) {
    let t = Ut(e[0] / 255),
      o = Ut(e[1] / 255),
      r = Ut(e[2] / 255),
      s = Math.cbrt(0.4122214708 * t + 0.5363325363 * o + 0.0514459929 * r),
      a = Math.cbrt(0.2119034982 * t + 0.6806995451 * o + 0.1073969566 * r),
      i = Math.cbrt(0.0883024619 * t + 0.2817188376 * o + 0.6299787005 * r),
      l = 0.2104542553 * s + 0.793617785 * a - 0.0040720468 * i,
      c = 1.9779984951 * s - 2.428592205 * a + 0.4505937099 * i,
      u = 0.0259040371 * s + 0.7827717662 * a - 0.808675766 * i;
    return [l * 100, c * 100, u * 100];
  };
  x.rgb.cmyk = function (e) {
    let t = e[0] / 255,
      o = e[1] / 255,
      r = e[2] / 255,
      s = Math.min(1 - t, 1 - o, 1 - r),
      a = (1 - t - s) / (1 - s) || 0,
      i = (1 - o - s) / (1 - s) || 0,
      l = (1 - r - s) / (1 - s) || 0;
    return [a * 100, i * 100, l * 100, s * 100];
  };
  function P0(e, t) {
    return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
  }
  x.rgb.keyword = function (e) {
    let t = Ii[e];
    if (t) return t;
    let o = Number.POSITIVE_INFINITY,
      r;
    for (let s of Object.keys(Ot)) {
      let a = Ot[s],
        i = P0(e, a);
      i < o && ((o = i), (r = s));
    }
    return r;
  };
  x.keyword.rgb = function (e) {
    return [...Ot[e]];
  };
  x.rgb.xyz = function (e) {
    let t = Ut(e[0] / 255),
      o = Ut(e[1] / 255),
      r = Ut(e[2] / 255),
      s = t * 0.4124564 + o * 0.3575761 + r * 0.1804375,
      a = t * 0.2126729 + o * 0.7151522 + r * 0.072175,
      i = t * 0.0193339 + o * 0.119192 + r * 0.9503041;
    return [s * 100, a * 100, i * 100];
  };
  x.rgb.lab = function (e) {
    let t = x.rgb.xyz(e),
      o = t[0],
      r = t[1],
      s = t[2];
    ((o /= 95.047),
      (r /= 100),
      (s /= 108.883),
      (o = o > Qe ? o ** (1 / 3) : 7.787 * o + 16 / 116),
      (r = r > Qe ? r ** (1 / 3) : 7.787 * r + 16 / 116),
      (s = s > Qe ? s ** (1 / 3) : 7.787 * s + 16 / 116));
    let a = 116 * r - 16,
      i = 500 * (o - r),
      l = 200 * (r - s);
    return [a, i, l];
  };
  x.hsl.rgb = function (e) {
    let t = e[0] / 360,
      o = e[1] / 100,
      r = e[2] / 100,
      s,
      a;
    if (o === 0) return ((a = r * 255), [a, a, a]);
    let i = r < 0.5 ? r * (1 + o) : r + o - r * o,
      l = 2 * r - i,
      c = [0, 0, 0];
    for (let u = 0; u < 3; u++)
      ((s = t + (1 / 3) * -(u - 1)),
        s < 0 && s++,
        s > 1 && s--,
        6 * s < 1
          ? (a = l + (i - l) * 6 * s)
          : 2 * s < 1
            ? (a = i)
            : 3 * s < 2
              ? (a = l + (i - l) * (2 / 3 - s) * 6)
              : (a = l),
        (c[u] = a * 255));
    return c;
  };
  x.hsl.hsv = function (e) {
    let t = e[0],
      o = e[1] / 100,
      r = e[2] / 100,
      s = o,
      a = Math.max(r, 0.01);
    ((r *= 2), (o *= r <= 1 ? r : 2 - r), (s *= a <= 1 ? a : 2 - a));
    let i = (r + o) / 2,
      l = r === 0 ? (2 * s) / (a + s) : (2 * o) / (r + o);
    return [t, l * 100, i * 100];
  };
  x.hsv.rgb = function (e) {
    let t = e[0] / 60,
      o = e[1] / 100,
      r = e[2] / 100,
      s = Math.floor(t) % 6,
      a = t - Math.floor(t),
      i = 255 * r * (1 - o),
      l = 255 * r * (1 - o * a),
      c = 255 * r * (1 - o * (1 - a));
    switch (((r *= 255), s)) {
      case 0:
        return [r, c, i];
      case 1:
        return [l, r, i];
      case 2:
        return [i, r, c];
      case 3:
        return [i, l, r];
      case 4:
        return [c, i, r];
      case 5:
        return [r, i, l];
    }
  };
  x.hsv.hsl = function (e) {
    let t = e[0],
      o = e[1] / 100,
      r = e[2] / 100,
      s = Math.max(r, 0.01),
      a,
      i;
    i = (2 - o) * r;
    let l = (2 - o) * s;
    return (
      (a = o * s),
      (a /= l <= 1 ? l : 2 - l),
      (a = a || 0),
      (i /= 2),
      [t, a * 100, i * 100]
    );
  };
  x.hwb.rgb = function (e) {
    let t = e[0] / 360,
      o = e[1] / 100,
      r = e[2] / 100,
      s = o + r,
      a;
    s > 1 && ((o /= s), (r /= s));
    let i = Math.floor(6 * t),
      l = 1 - r;
    ((a = 6 * t - i), (i & 1) !== 0 && (a = 1 - a));
    let c = o + a * (l - o),
      u,
      g,
      h;
    switch (i) {
      default:
      case 6:
      case 0: {
        ((u = l), (g = c), (h = o));
        break;
      }
      case 1: {
        ((u = c), (g = l), (h = o));
        break;
      }
      case 2: {
        ((u = o), (g = l), (h = c));
        break;
      }
      case 3: {
        ((u = o), (g = c), (h = l));
        break;
      }
      case 4: {
        ((u = c), (g = o), (h = l));
        break;
      }
      case 5: {
        ((u = l), (g = o), (h = c));
        break;
      }
    }
    return [u * 255, g * 255, h * 255];
  };
  x.cmyk.rgb = function (e) {
    let t = e[0] / 100,
      o = e[1] / 100,
      r = e[2] / 100,
      s = e[3] / 100,
      a = 1 - Math.min(1, t * (1 - s) + s),
      i = 1 - Math.min(1, o * (1 - s) + s),
      l = 1 - Math.min(1, r * (1 - s) + s);
    return [a * 255, i * 255, l * 255];
  };
  x.xyz.rgb = function (e) {
    let t = e[0] / 100,
      o = e[1] / 100,
      r = e[2] / 100,
      s,
      a,
      i;
    return (
      (s = t * 3.2404542 + o * -1.5371385 + r * -0.4985314),
      (a = t * -0.969266 + o * 1.8760108 + r * 0.041556),
      (i = t * 0.0556434 + o * -0.2040259 + r * 1.0572252),
      (s = Vt(s)),
      (a = Vt(a)),
      (i = Vt(i)),
      [s * 255, a * 255, i * 255]
    );
  };
  x.xyz.lab = function (e) {
    let t = e[0],
      o = e[1],
      r = e[2];
    ((t /= 95.047),
      (o /= 100),
      (r /= 108.883),
      (t = t > Qe ? t ** (1 / 3) : 7.787 * t + 16 / 116),
      (o = o > Qe ? o ** (1 / 3) : 7.787 * o + 16 / 116),
      (r = r > Qe ? r ** (1 / 3) : 7.787 * r + 16 / 116));
    let s = 116 * o - 16,
      a = 500 * (t - o),
      i = 200 * (o - r);
    return [s, a, i];
  };
  x.xyz.oklab = function (e) {
    let t = e[0] / 100,
      o = e[1] / 100,
      r = e[2] / 100,
      s = Math.cbrt(0.8189330101 * t + 0.3618667424 * o - 0.1288597137 * r),
      a = Math.cbrt(0.0329845436 * t + 0.9293118715 * o + 0.0361456387 * r),
      i = Math.cbrt(0.0482003018 * t + 0.2643662691 * o + 0.633851707 * r),
      l = 0.2104542553 * s + 0.793617785 * a - 0.0040720468 * i,
      c = 1.9779984951 * s - 2.428592205 * a + 0.4505937099 * i,
      u = 0.0259040371 * s + 0.7827717662 * a - 0.808675766 * i;
    return [l * 100, c * 100, u * 100];
  };
  x.oklab.oklch = function (e) {
    return x.lab.lch(e);
  };
  x.oklab.xyz = function (e) {
    let t = e[0] / 100,
      o = e[1] / 100,
      r = e[2] / 100,
      s = (0.999999998 * t + 0.396337792 * o + 0.215803758 * r) ** 3,
      a = (1.000000008 * t - 0.105561342 * o - 0.063854175 * r) ** 3,
      i = (1.000000055 * t - 0.089484182 * o - 1.291485538 * r) ** 3,
      l = 1.227013851 * s - 0.55779998 * a + 0.281256149 * i,
      c = -0.040580178 * s + 1.11225687 * a - 0.071676679 * i,
      u = -0.076381285 * s - 0.421481978 * a + 1.58616322 * i;
    return [l * 100, c * 100, u * 100];
  };
  x.oklab.rgb = function (e) {
    let t = e[0] / 100,
      o = e[1] / 100,
      r = e[2] / 100,
      s = (t + 0.3963377774 * o + 0.2158037573 * r) ** 3,
      a = (t - 0.1055613458 * o - 0.0638541728 * r) ** 3,
      i = (t - 0.0894841775 * o - 1.291485548 * r) ** 3,
      l = Vt(4.0767416621 * s - 3.3077115913 * a + 0.2309699292 * i),
      c = Vt(-1.2684380046 * s + 2.6097574011 * a - 0.3413193965 * i),
      u = Vt(-0.0041960863 * s - 0.7034186147 * a + 1.707614701 * i);
    return [l * 255, c * 255, u * 255];
  };
  x.oklch.oklab = function (e) {
    return x.lch.lab(e);
  };
  x.lab.xyz = function (e) {
    let t = e[0],
      o = e[1],
      r = e[2],
      s,
      a,
      i;
    ((a = (t + 16) / 116), (s = o / 500 + a), (i = a - r / 200));
    let l = a ** 3,
      c = s ** 3,
      u = i ** 3;
    return (
      (a = l > Qe ? l : (a - 16 / 116) / 7.787),
      (s = c > Qe ? c : (s - 16 / 116) / 7.787),
      (i = u > Qe ? u : (i - 16 / 116) / 7.787),
      (s *= 95.047),
      (a *= 100),
      (i *= 108.883),
      [s, a, i]
    );
  };
  x.lab.lch = function (e) {
    let t = e[0],
      o = e[1],
      r = e[2],
      s;
    ((s = (Math.atan2(r, o) * 360) / 2 / Math.PI), s < 0 && (s += 360));
    let i = Math.sqrt(o * o + r * r);
    return [t, i, s];
  };
  x.lch.lab = function (e) {
    let t = e[0],
      o = e[1],
      s = (e[2] / 360) * 2 * Math.PI,
      a = o * Math.cos(s),
      i = o * Math.sin(s);
    return [t, a, i];
  };
  x.rgb.ansi16 = function (e, t = null) {
    let [o, r, s] = e,
      a = t === null ? x.rgb.hsv(e)[2] : t;
    if (((a = Math.round(a / 50)), a === 0)) return 30;
    let i =
      30 +
      ((Math.round(s / 255) << 2) |
        (Math.round(r / 255) << 1) |
        Math.round(o / 255));
    return (a === 2 && (i += 60), i);
  };
  x.hsv.ansi16 = function (e) {
    return x.rgb.ansi16(x.hsv.rgb(e), e[2]);
  };
  x.rgb.ansi256 = function (e) {
    let t = e[0],
      o = e[1],
      r = e[2];
    return t >> 4 === o >> 4 && o >> 4 === r >> 4
      ? t < 8
        ? 16
        : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
      : 16 +
          36 * Math.round((t / 255) * 5) +
          6 * Math.round((o / 255) * 5) +
          Math.round((r / 255) * 5);
  };
  x.ansi16.rgb = function (e) {
    e = e[0];
    let t = e % 10;
    if (t === 0 || t === 7)
      return (e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]);
    let o = (Math.trunc(e > 50) + 1) * 0.5,
      r = (t & 1) * o * 255,
      s = ((t >> 1) & 1) * o * 255,
      a = ((t >> 2) & 1) * o * 255;
    return [r, s, a];
  };
  x.ansi256.rgb = function (e) {
    if (((e = e[0]), e >= 232)) {
      let a = (e - 232) * 10 + 8;
      return [a, a, a];
    }
    e -= 16;
    let t,
      o = (Math.floor(e / 36) / 5) * 255,
      r = (Math.floor((t = e % 36) / 6) / 5) * 255,
      s = ((t % 6) / 5) * 255;
    return [o, r, s];
  };
  x.rgb.hex = function (e) {
    let o = (
      ((Math.round(e[0]) & 255) << 16) +
      ((Math.round(e[1]) & 255) << 8) +
      (Math.round(e[2]) & 255)
    )
      .toString(16)
      .toUpperCase();
    return "000000".slice(o.length) + o;
  };
  x.hex.rgb = function (e) {
    let t = e.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
    if (!t) return [0, 0, 0];
    let o = t[0];
    t[0].length === 3 && (o = [...o].map((l) => l + l).join(""));
    let r = Number.parseInt(o, 16),
      s = (r >> 16) & 255,
      a = (r >> 8) & 255,
      i = r & 255;
    return [s, a, i];
  };
  x.rgb.hcg = function (e) {
    let t = e[0] / 255,
      o = e[1] / 255,
      r = e[2] / 255,
      s = Math.max(Math.max(t, o), r),
      a = Math.min(Math.min(t, o), r),
      i = s - a,
      l,
      c = i < 1 ? a / (1 - i) : 0;
    return (
      i <= 0
        ? (l = 0)
        : s === t
          ? (l = ((o - r) / i) % 6)
          : s === o
            ? (l = 2 + (r - t) / i)
            : (l = 4 + (t - o) / i),
      (l /= 6),
      (l %= 1),
      [l * 360, i * 100, c * 100]
    );
  };
  x.hsl.hcg = function (e) {
    let t = e[1] / 100,
      o = e[2] / 100,
      r = o < 0.5 ? 2 * t * o : 2 * t * (1 - o),
      s = 0;
    return (r < 1 && (s = (o - 0.5 * r) / (1 - r)), [e[0], r * 100, s * 100]);
  };
  x.hsv.hcg = function (e) {
    let t = e[1] / 100,
      o = e[2] / 100,
      r = t * o,
      s = 0;
    return (r < 1 && (s = (o - r) / (1 - r)), [e[0], r * 100, s * 100]);
  };
  x.hcg.rgb = function (e) {
    let t = e[0] / 360,
      o = e[1] / 100,
      r = e[2] / 100;
    if (o === 0) return [r * 255, r * 255, r * 255];
    let s = [0, 0, 0],
      a = (t % 1) * 6,
      i = a % 1,
      l = 1 - i,
      c = 0;
    switch (Math.floor(a)) {
      case 0: {
        ((s[0] = 1), (s[1] = i), (s[2] = 0));
        break;
      }
      case 1: {
        ((s[0] = l), (s[1] = 1), (s[2] = 0));
        break;
      }
      case 2: {
        ((s[0] = 0), (s[1] = 1), (s[2] = i));
        break;
      }
      case 3: {
        ((s[0] = 0), (s[1] = l), (s[2] = 1));
        break;
      }
      case 4: {
        ((s[0] = i), (s[1] = 0), (s[2] = 1));
        break;
      }
      default:
        ((s[0] = 1), (s[1] = 0), (s[2] = l));
    }
    return (
      (c = (1 - o) * r),
      [(o * s[0] + c) * 255, (o * s[1] + c) * 255, (o * s[2] + c) * 255]
    );
  };
  x.hcg.hsv = function (e) {
    let t = e[1] / 100,
      o = e[2] / 100,
      r = t + o * (1 - t),
      s = 0;
    return (r > 0 && (s = t / r), [e[0], s * 100, r * 100]);
  };
  x.hcg.hsl = function (e) {
    let t = e[1] / 100,
      r = (e[2] / 100) * (1 - t) + 0.5 * t,
      s = 0;
    return (
      r > 0 && r < 0.5
        ? (s = t / (2 * r))
        : r >= 0.5 && r < 1 && (s = t / (2 * (1 - r))),
      [e[0], s * 100, r * 100]
    );
  };
  x.hcg.hwb = function (e) {
    let t = e[1] / 100,
      o = e[2] / 100,
      r = t + o * (1 - t);
    return [e[0], (r - t) * 100, (1 - r) * 100];
  };
  x.hwb.hcg = function (e) {
    let t = e[1] / 100,
      r = 1 - e[2] / 100,
      s = r - t,
      a = 0;
    return (s < 1 && (a = (r - s) / (1 - s)), [e[0], s * 100, a * 100]);
  };
  x.apple.rgb = function (e) {
    return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
  };
  x.rgb.apple = function (e) {
    return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
  };
  x.gray.rgb = function (e) {
    return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
  };
  x.gray.hsl = function (e) {
    return [0, 0, e[0]];
  };
  x.gray.hsv = x.gray.hsl;
  x.gray.hwb = function (e) {
    return [0, 100, e[0]];
  };
  x.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  };
  x.gray.lab = function (e) {
    return [e[0], 0, 0];
  };
  x.gray.hex = function (e) {
    let t = Math.round((e[0] / 100) * 255) & 255,
      r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".slice(r.length) + r;
  };
  x.rgb.gray = function (e) {
    return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
  };
  function T0() {
    let e = {},
      t = Object.keys(Ye);
    for (let { length: o } = t, r = 0; r < o; r++)
      e[t[r]] = { distance: -1, parent: null };
    return e;
  }
  function E0(e) {
    let t = T0(),
      o = [e];
    for (t[e].distance = 0; o.length > 0; ) {
      let r = o.pop(),
        s = Object.keys(Ye[r]);
      for (let { length: a } = s, i = 0; i < a; i++) {
        let l = s[i],
          c = t[l];
        c.distance === -1 &&
          ((c.distance = t[r].distance + 1), (c.parent = r), o.unshift(l));
      }
    }
    return t;
  }
  function N0(e, t) {
    return function (o) {
      return t(e(o));
    };
  }
  function A0(e, t) {
    let o = [t[e].parent, e],
      r = Ye[t[e].parent][e],
      s = t[e].parent;
    for (; t[s].parent; )
      (o.unshift(t[s].parent),
        (r = N0(Ye[t[s].parent][s], r)),
        (s = t[s].parent));
    return ((r.conversion = o), r);
  }
  function L0(e) {
    let t = E0(e),
      o = {},
      r = Object.keys(t);
    for (let { length: s } = r, a = 0; a < s; a++) {
      let i = r[a];
      t[i].parent !== null && (o[i] = A0(i, t));
    }
    return o;
  }
  var Pi = L0;
  var Ft = {},
    D0 = Object.keys(Ye);
  function R0(e) {
    let t = function (...o) {
      let r = o[0];
      return r == null ? r : (r.length > 1 && (o = r), e(o));
    };
    return ("conversion" in e && (t.conversion = e.conversion), t);
  }
  function z0(e) {
    let t = function (...o) {
      let r = o[0];
      if (r == null) return r;
      r.length > 1 && (o = r);
      let s = e(o);
      if (typeof s == "object")
        for (let { length: a } = s, i = 0; i < a; i++) s[i] = Math.round(s[i]);
      return s;
    };
    return ("conversion" in e && (t.conversion = e.conversion), t);
  }
  for (let e of D0) {
    ((Ft[e] = {}),
      Object.defineProperty(Ft[e], "channels", { value: Ye[e].channels }),
      Object.defineProperty(Ft[e], "labels", { value: Ye[e].labels }));
    let t = Pi(e),
      o = Object.keys(t);
    for (let r of o) {
      let s = t[r];
      ((Ft[e][r] = z0(s)), (Ft[e][r].raw = R0(s)));
    }
  }
  var Ne = Ft;
  var Ti = ["keyword", "gray", "hex"],
    ss = {};
  for (let e of Object.keys(Ne)) ss[[...Ne[e].labels].sort().join("")] = e;
  function j0(e) {
    let t = /^oklch\(\s*([^)]+)\s*\)$/i,
      o = e.match(t);
    if (!o) return null;
    let r = o[1].split(/[,/\s]+/).filter(Boolean);
    if (r.length < 3 || r.length > 4) return null;
    let s = [],
      a = Number.parseFloat(r[0]);
    (r[0].includes("%") && (a /= 100), s.push(a * 100));
    let i = Number.parseFloat(r[1]);
    s.push(i * 100);
    let l = Number.parseFloat(r[2]);
    s.push(l);
    let c = 1;
    return (
      r.length === 4 &&
        ((c = Number.parseFloat(r[3])), r[3].includes("%") && (c /= 100)),
      s.push(c),
      s[0] < 0 ||
      s[0] > 100 ||
      s[1] < 0 ||
      s[1] > 40 ||
      s[2] < 0 ||
      s[2] > 360 ||
      s[3] < 0 ||
      s[3] > 1
        ? null
        : { model: "oklch", value: s }
    );
  }
  function H0(e) {
    let t = /^oklab\(\s*([^)]+)\s*\)$/i,
      o = e.match(t);
    if (!o) return null;
    let r = o[1].split(/[,/\s]+/).filter(Boolean);
    if (r.length < 3 || r.length > 4) return null;
    let s = [],
      a = Number.parseFloat(r[0]);
    (r[0].includes("%") && (a /= 100), s.push(a * 100));
    let i = Number.parseFloat(r[1]);
    s.push(i * 100);
    let l = Number.parseFloat(r[2]);
    s.push(l * 100);
    let c = 1;
    return (
      r.length === 4 &&
        ((c = Number.parseFloat(r[3])), r[3].includes("%") && (c /= 100)),
      s.push(c),
      s[0] < 0 || s[0] > 100 || s[3] < 0 || s[3] > 1
        ? null
        : { model: "oklab", value: s }
    );
  }
  function B0(e) {
    let t = /^rgba?\(\s*([^)]+)\s*\)$/i,
      o = e.match(t);
    if (!o) return null;
    let r = o[1].split(/[,/\s]+/).filter(Boolean);
    if (r.length < 3 || r.length > 4) return null;
    let s = [];
    for (let i = 0; i < 3; i++) {
      let l = Number.parseFloat(r[i]);
      (r[i].includes("%") && (l = (l / 100) * 255),
        (l = Math.round(Math.max(0, Math.min(255, l)))),
        s.push(l));
    }
    let a = 1;
    return (
      r.length === 4 &&
        ((a = Number.parseFloat(r[3])),
        r[3].includes("%") && (a /= 100),
        (a = Math.max(0, Math.min(1, a)))),
      s.push(a),
      { model: "rgb", value: s }
    );
  }
  var ns = {};
  function we(e, t) {
    if (!(this instanceof we)) return new we(e, t);
    if ((t && t in Ti && (t = null), t && !(t in Ne)))
      throw new Error("Unknown model: " + t);
    let o, r;
    if (e == null)
      ((this.model = "rgb"), (this.color = [0, 0, 0]), (this.valpha = 1));
    else if (e instanceof we)
      ((this.model = e.model),
        (this.color = [...e.color]),
        (this.valpha = e.valpha));
    else if (typeof e == "string") {
      let s = kt.get(e);
      if (
        (s === null && (s = j0(e)),
        s === null && (s = H0(e)),
        s === null && (s = B0(e)),
        s === null)
      )
        throw new Error("Unable to parse color from string: " + e);
      ((this.model = s.model),
        (r = Ne[this.model].channels),
        (this.color = s.value.slice(0, r)),
        (this.valpha = typeof s.value[r] == "number" ? s.value[r] : 1));
    } else if (e.length > 0) {
      ((this.model = t || "rgb"), (r = Ne[this.model].channels));
      let s = Array.prototype.slice.call(e, 0, r);
      ((this.color = as(s, r)),
        (this.valpha = typeof e[r] == "number" ? e[r] : 1));
    } else if (typeof e == "number")
      ((this.model = "rgb"),
        (this.color = [(e >> 16) & 255, (e >> 8) & 255, e & 255]),
        (this.valpha = 1));
    else {
      this.valpha = 1;
      let s = Object.keys(e);
      "alpha" in e &&
        (s.splice(s.indexOf("alpha"), 1),
        (this.valpha = typeof e.alpha == "number" ? e.alpha : 0));
      let a = s.sort().join("");
      if (!(a in ss))
        throw new Error(
          "Unable to parse color from object: " + JSON.stringify(e),
        );
      this.model = ss[a];
      let { labels: i } = Ne[this.model],
        l = [];
      for (o = 0; o < i.length; o++) l.push(e[i[o]]);
      this.color = as(l);
    }
    if (ns[this.model])
      for (r = Ne[this.model].channels, o = 0; o < r; o++) {
        let s = ns[this.model][o];
        s && (this.color[o] = s(this.color[o]));
      }
    ((this.valpha = Math.max(0, Math.min(1, this.valpha))),
      Object.freeze && Object.freeze(this));
  }
  we.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(e) {
      let t = typeof e == "number" ? e : 1,
        o = (a, i) => {
          let l = a.toFixed(i);
          return l.includes(".") ? l.replace(/\.?0+$/, "") || "0" : l;
        };
      if (this.model === "oklch") {
        let [a, i, l] = this.color,
          c = o(a, t),
          u = t === 1 ? 3 : t,
          g = o(i / 100, u),
          h = i < 0.01 ? "0" : o(l, t);
        return this.valpha === 1
          ? `oklch(${c}% ${g} ${h})`
          : `oklch(${c}% ${g} ${h} / ${this.valpha})`;
      }
      if (this.model === "oklab") {
        let [a, i, l] = this.color,
          c = o(a, t),
          u = t === 1 ? 3 : t,
          g = o(i / 100, u),
          h = o(l / 100, u);
        return this.valpha === 1
          ? `oklab(${c}% ${g} ${h})`
          : `oklab(${c}% ${g} ${h} / ${this.valpha})`;
      }
      let r = this.model in kt.to ? this : this.rgb();
      r = r.round(t);
      let s = r.valpha === 1 ? r.color : [...r.color, this.valpha];
      return kt.to[r.model](...s);
    },
    percentString(e) {
      let t = this.rgb().round(typeof e == "number" ? e : 1),
        o = t.valpha === 1 ? t.color : [...t.color, this.valpha];
      return kt.to.rgb.percent(...o);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      let e = {},
        { channels: t } = Ne[this.model],
        { labels: o } = Ne[this.model];
      for (let r = 0; r < t; r++) e[o[r]] = this.color[r];
      return (this.valpha !== 1 && (e.alpha = this.valpha), e);
    },
    unitArray() {
      let e = this.rgb().color;
      return (
        (e[0] /= 255),
        (e[1] /= 255),
        (e[2] /= 255),
        this.valpha !== 1 && e.push(this.valpha),
        e
      );
    },
    unitObject() {
      let e = this.rgb().object();
      return (
        (e.r /= 255),
        (e.g /= 255),
        (e.b /= 255),
        this.valpha !== 1 && (e.alpha = this.valpha),
        e
      );
    },
    round(e) {
      return (
        (e = Math.max(e || 0, 0)),
        new we([...this.color.map(V0(e)), this.valpha], this.model)
      );
    },
    alpha(e) {
      return e !== void 0
        ? new we([...this.color, Math.max(0, Math.min(1, e))], this.model)
        : this.valpha;
    },
    red: Z("rgb", 0, he(255)),
    green: Z("rgb", 1, he(255)),
    blue: Z("rgb", 2, he(255)),
    hue: Z(
      ["hsl", "hsv", "hsl", "hwb", "hcg"],
      0,
      (e) => ((e % 360) + 360) % 360,
    ),
    saturationl: Z("hsl", 1, he(100)),
    lightness: Z("hsl", 2, he(100)),
    saturationv: Z("hsv", 1, he(100)),
    value: Z("hsv", 2, he(100)),
    chroma: Z("hcg", 1, he(100)),
    gray: Z("hcg", 2, he(100)),
    white: Z("hwb", 1, he(100)),
    wblack: Z("hwb", 2, he(100)),
    cyan: Z("cmyk", 0, he(100)),
    magenta: Z("cmyk", 1, he(100)),
    yellow: Z("cmyk", 2, he(100)),
    black: Z("cmyk", 3, he(100)),
    x: Z("xyz", 0, he(95.047)),
    y: Z("xyz", 1, he(100)),
    z: Z("xyz", 2, he(108.833)),
    l: Z("lab", 0, he(100)),
    a: Z("lab", 1),
    b: Z("lab", 2),
    okl: Z(["oklch", "oklab"], 0, he(100)),
    okc: Z("oklch", 1),
    okh: Z("oklch", 2, (e) => ((e % 360) + 360) % 360),
    oka: Z("oklab", 1),
    okb: Z("oklab", 2),
    keyword(e) {
      return e !== void 0 ? new we(e) : Ne[this.model].keyword(this.color);
    },
    hex(e) {
      return e !== void 0 ? new we(e) : kt.to.hex(...this.rgb().round().color);
    },
    hexa(e) {
      if (e !== void 0) return new we(e);
      let t = this.rgb().round().color,
        o = Math.round(this.valpha * 255)
          .toString(16)
          .toUpperCase();
      return (o.length === 1 && (o = "0" + o), kt.to.hex(...t) + o);
    },
    rgbNumber() {
      let e = this.rgb().color;
      return ((e[0] & 255) << 16) | ((e[1] & 255) << 8) | (e[2] & 255);
    },
    luminosity() {
      let e = this.rgb().color,
        t = [];
      for (let [o, r] of e.entries()) {
        let s = r / 255;
        t[o] = s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
    },
    contrast(e) {
      let t = this.luminosity(),
        o = e.luminosity();
      return t > o ? (t + 0.05) / (o + 0.05) : (o + 0.05) / (t + 0.05);
    },
    level(e) {
      let t = this.contrast(e);
      return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
    },
    isDark() {
      let e = this.rgb().color;
      return (e[0] * 2126 + e[1] * 7152 + e[2] * 722) / 1e4 < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      let e = this.rgb();
      for (let t = 0; t < 3; t++) e.color[t] = 255 - e.color[t];
      return e;
    },
    lighten(e) {
      let t = this.hsl();
      return ((t.color[2] += t.color[2] * e), t);
    },
    darken(e) {
      let t = this.hsl();
      return ((t.color[2] -= t.color[2] * e), t);
    },
    saturate(e) {
      let t = this.hsl();
      return ((t.color[1] += t.color[1] * e), t);
    },
    desaturate(e) {
      let t = this.hsl();
      return ((t.color[1] -= t.color[1] * e), t);
    },
    whiten(e) {
      let t = this.hwb();
      return ((t.color[1] += t.color[1] * e), t);
    },
    blacken(e) {
      let t = this.hwb();
      return ((t.color[2] += t.color[2] * e), t);
    },
    grayscale() {
      let e = this.rgb().color,
        t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
      return we.rgb(t, t, t);
    },
    fade(e) {
      return this.alpha(this.valpha - this.valpha * e);
    },
    opaquer(e) {
      return this.alpha(this.valpha + this.valpha * e);
    },
    rotate(e) {
      let t = this.hsl(),
        o = t.color[0];
      return (
        (o = (o + e) % 360),
        (o = o < 0 ? 360 + o : o),
        (t.color[0] = o),
        t
      );
    },
    mix(e, t) {
      if (!e || !e.rgb)
        throw new Error(
          'Argument to "mix" was not a Color instance, but rather an instance of ' +
            typeof e,
        );
      let o = e.rgb(),
        r = this.rgb(),
        s = t === void 0 ? 0.5 : t,
        a = 2 * s - 1,
        i = o.alpha() - r.alpha(),
        l = ((a * i === -1 ? a : (a + i) / (1 + a * i)) + 1) / 2,
        c = 1 - l;
      return we.rgb(
        l * o.red() + c * r.red(),
        l * o.green() + c * r.green(),
        l * o.blue() + c * r.blue(),
        o.alpha() * s + r.alpha() * (1 - s),
      );
    },
  };
  for (let e of Object.keys(Ne)) {
    if (Ti.includes(e)) continue;
    let { channels: t } = Ne[e];
    ((we.prototype[e] = function (...o) {
      return this.model === e
        ? new we(this)
        : o.length > 0
          ? new we(o, e)
          : new we([...U0(Ne[this.model][e].raw(this.color)), this.valpha], e);
    }),
      (we[e] = function (...o) {
        let r = o[0];
        return (typeof r == "number" && (r = as(o, t)), new we(r, e));
      }));
  }
  function O0(e, t) {
    return Number(e.toFixed(t));
  }
  function V0(e) {
    return function (t) {
      return O0(t, e);
    };
  }
  function Z(e, t, o) {
    e = Array.isArray(e) ? e : [e];
    for (let r of e) (ns[r] ||= [])[t] = o;
    return (
      (e = e[0]),
      function (r) {
        let s;
        return r !== void 0
          ? (o && (r = o(r)), (s = this[e]()), (s.color[t] = r), s)
          : ((s = this[e]().color[t]), o && (s = o(s)), s);
      }
    );
  }
  function he(e) {
    return function (t) {
      return Math.max(0, Math.min(e, t));
    };
  }
  function U0(e) {
    return Array.isArray(e) ? e : [e];
  }
  function as(e, t) {
    for (let o = 0; o < t; o++) typeof e[o] != "number" && (e[o] = 0);
    return e;
  }
  var ue = we;
  function F0(e) {
    let t = () => {
      let o = document.createElement("textarea");
      (document.body.appendChild(o),
        (o.innerHTML = e),
        o.select(),
        document.execCommand("copy"),
        o.remove());
    };
    navigator.clipboard
      ? (async () => {
          try {
            return (await navigator.clipboard.writeText(e), !0);
          } catch (o) {
            t();
          }
        })()
      : t();
  }
  async function q0(e, t) {
    try {
      let r = await (await fetch(e)).blob(),
        s = new ClipboardItem({ [`image/${t || "png"}`]: r });
      await navigator.clipboard.write([s]);
    } catch (o) {
      throw o;
    }
  }
  var $0 = { copyText: F0, copyImage: q0 },
    $o = $0;
  function K0(e) {
    let t = _(
        "mt-6 flex flex-col items-center justify-center font-body text-gray-500 text-center",
        e.class,
      ),
      o = _("w-14 h-14", e.iconClass),
      r = e.icon;
    return n("div", {
      class: t,
      children: [
        n(r, { class: o }),
        n("h4", {
          class: "mt-2 text-gray-400 text-base font-semibold",
          children: e.title,
        }),
        n("p", { class: "mt-1 text-sm font-medium", children: e.description }),
        e.children ? n("div", { class: "mt-4", children: e.children }) : null,
      ],
    });
  }
  var Y = K0;
  se();
  var W0 = (e) => {
      let t = _(
          "rounded-md overflow-hidden bg-transparent-img bg-clip-padding border border-white/20 aspect-square",
          e.class,
        ),
        o = M(() => {
          e.onClick && e.onClick(e.color);
        }, [e.color]);
      return n("div", {
        class: t,
        onClick: o,
        children: n("div", {
          class: "w-full h-full",
          style: { backgroundColor: e.color },
        }),
      });
    },
    Ko = W0;
  var is = class extends T {
      constructor(o) {
        super(o);
        this.focusedScheme = "";
        this.focusedSchemeValue = "";
        this.toggleColorEyedropper = () => {
          let o = L({}, p.toolStatus.value);
          ((o.color_eyedropper = !o.color_eyedropper),
            (p.toolStatus.value = o),
            o.color_eyedropper
              ? (y.send(w.color_eyedropper.enable, {}, p.tab.value.id),
                setTimeout(() => window.close(), 200))
              : y.send(w.color_eyedropper.disable, {}, p.tab.value.id));
        };
        this.selectColor = (o) => {
          this.setState({ color: ue(o) });
        };
        this.onColorChange = (o) => {
          this.setState({ color: ue({ r: o.r, g: o.g, b: o.b }) });
        };
        this.onRGBChange = (o) => {
          let r = o.target;
          ((this.focusedScheme = "rgb"), (this.focusedSchemeValue = r.value));
          let s = r.value.split(",").map((a) => parseInt(a.trim()));
          s.length === 3 &&
            !s.some((a) => isNaN(a)) &&
            this.setState({ color: ue({ r: s[0], g: s[1], b: s[2] }) });
        };
        this.onOKLCHChange = (o) => {
          let r = o.target;
          ((this.focusedScheme = "oklch"), (this.focusedSchemeValue = r.value));
          let s = r.value.split(" ").map((a) => parseFloat(a));
          if (s.length === 3 && !s.some((a) => isNaN(a))) {
            let a = s[0],
              i = s[1],
              l = s[2];
            this.setState({ color: ue(`oklch(${a}% ${i} ${l})`) });
          }
        };
        this.onCMYKChange = (o) => {
          let r = o.target;
          ((this.focusedScheme = "cmyk"), (this.focusedSchemeValue = r.value));
          let s = r.value
            .split(",")
            .map((a) => parseInt(a.trim().replace("%", "")));
          s.length === 4 &&
            !s.some((a) => isNaN(a)) &&
            this.setState({
              color: ue({ c: s[0], m: s[1], y: s[2], k: s[3] }),
            });
        };
        this.onHSLChange = (o) => {
          let r = o.target;
          ((this.focusedScheme = "hsl"), (this.focusedSchemeValue = r.value));
          let s = r.value
            .split(",")
            .map((a) => parseInt(a.trim().replace("%", "")));
          s.length === 3 &&
            !s.some((a) => isNaN(a)) &&
            this.setState({ color: ue({ h: s[0], s: s[1], l: s[2] }) });
        };
        this.onHexChange = (o) => {
          let r = o.target;
          ((this.focusedScheme = "hex"), (this.focusedSchemeValue = r.value));
          let s = this.focusedSchemeValue.trim();
          (s.startsWith("#") || (s = `#${s}`),
            (s.length === 7 || s.length === 4) &&
              this.setState({ color: ue(s) }));
        };
        this.onSchemeBlur = () => {
          ((this.focusedScheme = ""), this.forceUpdate());
        };
        this.copyColor = (o) => {
          let r = this.getColorString(o);
          ($o.copyText(r), k.success("Copied to clipboard"));
        };
        this.getColorString = (o) => {
          let r = this.state.color,
            s = "";
          switch (o) {
            case "rgb":
              s = r.rgb().string().replace("rgb(", "").replace(")", "");
              break;
            case "oklch":
              s = r.oklch().string().replace("oklch(", "").replace(")", "");
              break;
            case "cmyk":
              s = `${Math.round(r.cyan())}%, ${Math.round(r.magenta())}%, ${Math.round(r.yellow())}%, ${Math.round(r.black())}%`;
              break;
            case "hsl":
              s = `${Math.round(r.hue())}, ${Math.round(r.saturationl())}%, ${Math.round(r.lightness())}%`;
              break;
            case "hsv":
              s = `${Math.round(r.hue())}, ${Math.round(r.saturationv())}%, ${Math.round(r.value())}%`;
              break;
            case "hex":
              s = r.hex();
              break;
          }
          return s;
        };
        this.state = { color: ue("#ffffff"), recents: [] };
      }
      async componentDidMount() {
        q.resizePopup(460, 552);
        try {
          let o = await d.get(d.Schema.color_eyedropper.recents);
          this.setState({ recents: o });
        } catch (o) {
          console.log(o);
        }
      }
      render() {
        let o = {
            r: this.state.color.red(),
            g: this.state.color.green(),
            b: this.state.color.blue(),
          },
          r =
            this.focusedScheme === "rgb"
              ? this.focusedSchemeValue
              : this.getColorString("rgb"),
          s =
            this.focusedScheme === "oklch"
              ? this.focusedSchemeValue
              : this.getColorString("oklch"),
          a =
            this.focusedScheme === "cmyk"
              ? this.focusedSchemeValue
              : this.getColorString("cmyk"),
          i =
            this.focusedScheme === "hsl"
              ? this.focusedSchemeValue
              : this.getColorString("hsl"),
          l =
            this.focusedScheme === "hex"
              ? this.focusedSchemeValue
              : this.getColorString("hex");
        return n($, {
          children: [
            n(ne, {
              title: "Color Eyedropper",
              children: !0 /* BYPASS FOR TESTING: show eyedropper toggle */ 
                ? n(ke, {
                    checked: p.toolStatus.value.color_eyedropper,
                    onClick: this.toggleColorEyedropper,
                  })
                : [],
            }),
            n(ae, {
              children: [
                n("div", {
                  class: "flex flex-col",
                  children: [
                    n("div", {
                      id: "color_eyedropper_picker",
                      children: n(Ci, {
                        color: o,
                        onChange: this.onColorChange,
                      }),
                    }),
                    n("div", {
                      class: "mt-4 grid grid-cols-3 gap-2",
                      children: [
                        n(ie, {
                          label: "RGB",
                          value: r,
                          onInput: this.onRGBChange,
                          onBlur: this.onSchemeBlur,
                          labelActions: n(V, {
                            class: "w-3.5 h-3.5 hover:bg-transparent",
                            onClick: () => this.copyColor("rgb"),
                            children: n(st, { class: "w-3.5 h-3.5" }),
                          }),
                        }),
                        n(ie, {
                          label: "OKLCH",
                          value: s,
                          onInput: this.onOKLCHChange,
                          onBlur: this.onSchemeBlur,
                          labelActions: n(V, {
                            class: "w-3.5 h-3.5 hover:bg-transparent",
                            onClick: () => this.copyColor("oklch"),
                            children: n(st, { class: "w-3.5 h-3.5" }),
                          }),
                        }),
                        n(ie, {
                          label: "CMYK",
                          value: a,
                          onInput: this.onCMYKChange,
                          onBlur: this.onSchemeBlur,
                          labelActions: n(V, {
                            class: "w-3.5 h-3.5 hover:bg-transparent",
                            onClick: () => this.copyColor("cmyk"),
                            children: n(st, { class: "w-3.5 h-3.5" }),
                          }),
                        }),
                        n(ie, {
                          label: "HSL",
                          value: i,
                          onInput: this.onHSLChange,
                          onBlur: this.onSchemeBlur,
                          labelActions: n(V, {
                            class: "w-3.5 h-3.5 hover:bg-transparent",
                            onClick: () => this.copyColor("hsl"),
                            children: n(st, { class: "w-3.5 h-3.5" }),
                          }),
                        }),
                        n(ie, {
                          label: "HEX",
                          value: l,
                          onInput: this.onHexChange,
                          onBlur: this.onSchemeBlur,
                          labelActions: n(V, {
                            class: "w-3.5 h-3.5 hover:bg-transparent",
                            onClick: () => this.copyColor("hex"),
                            children: n(st, { class: "w-3.5 h-3.5" }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n("div", {
                  class: "mt-4 pt-4 border-t border-white/10 flex flex-col",
                  children: [
                    n("h3", {
                      class: "text-base text-white font-body font-medium",
                      children: "Recently Picked",
                    }),
                    this.state.recents.length
                      ? n("div", {
                          class: "mt-2 grid grid-cols-8 gap-1.5",
                          children: this.state.recents.map((c, u) =>
                            n(
                              Ko,
                              {
                                class: "cursor-pointer",
                                color: c,
                                onClick: this.selectColor,
                              },
                              u,
                            ),
                          ),
                        })
                      : n(Y, {
                          class: "mt-4",
                          icon: Bn,
                          title: "No colors selected",
                          description: "Use color eyedropper to pick colors.",
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    Ei = is;
  U();
  function G0(e) {
    return n("div", {
      class: _(
        "w-full aspect-square p-3 flex flex-col items-center justify-center text-gray-300 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition hover:text-white hover:bg-sky-700",
        e.class,
        e.disabled ? "opacity-50 cursor-not-allowed" : "",
      ),
      onClick: e.onClick,
      children: [
        e.icon,
        n("span", {
          class: "mt-4 text-center text-sm font-body font-medium",
          children: e.title,
        }),
      ],
    });
  }
  var qt = G0;
  var ls = class extends T {
      constructor(t) {
        super(t);
      }
      componentDidMount() {
        q.resizePopup(360, 416);
      }
      render() {
        return n($, {
          children: [
            n(ne, { title: "Debug" }),
            n(ae, {
              children: n("div", {
                class: "grid grid-cols-2 gap-2",
                children: [
                  n(qt, {
                    title: "Clear Browsing Data",
                    icon: n(Dn, { class: "w-14 h-14" }),
                    onClick: this.goToClearBrowsingData,
                  }),
                  n(qt, {
                    title: "Custom Code",
                    icon: n(oa, { class: "w-14 h-14" }),
                    onClick: this.gotoCustomCode,
                  }),
                  n(qt, {
                    title: "Optimize Images",
                    icon: n(na, { class: "w-14 h-14" }),
                    onClick: this.optimizeImages,
                    disabled: !1,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      goToClearBrowsingData() {
        p.goto("clear_browsing_data");
      }
      gotoCustomCode() {
        p.goto("custom_code");
      }
      optimizeImages() {
        (y.send(w.debug.optimize_images.enable, {}, p.tab.value.id),
          window.close());
      }
    },
    Ni = ls;
  U();
  function Z0(e) {
    var o;
    let t = _(
      "h-9 px-2 flex items-center rounded transition-colors text-sm font-body bg-gray-700",
      e.class,
    );
    return n("div", {
      class: t,
      children: [
        n("label", {
          class: "mr-1 text-gray-300 font-medium",
          children: e.label,
        }),
        n("select", {
          class:
            "min-w-0 p-0 h-8 flex-1 text-white bg-gray-700 disabled:text-gray-300 outline-none",
          value: e.value,
          onChange: e.onChange,
          disabled: e.disabled,
          children:
            (o = e.options) == null
              ? void 0
              : o.map((r) => {
                  let s = typeof r != "string" ? r.value : r,
                    a = typeof r != "string" ? r.label : r;
                  return n("option", { value: s, children: a }, s);
                }),
        }),
      ],
    });
  }
  var co = Z0;
  function Q0(e) {
    let t = _(
      "w-full p-4 absolute top-0 bottom-0 overflow-y-auto block",
      e.class,
    );
    return n("div", {
      id: e.id,
      class: "flex-1 w-full relative overflow-hidden",
      children: n("div", {
        class: t,
        ref: e.contentRef,
        onScroll: e.onScroll,
        children: e.children,
      }),
    });
  }
  var de = Q0;
  var Y0 = [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
    ],
    X0 = [
      { name: "Windows Phone", value: "Windows Phone", version: "OS" },
      { name: "Windows", value: "Win", version: "NT" },
      { name: "iPhone", value: "iPhone", version: "OS" },
      { name: "iPad", value: "iPad", version: "OS" },
      { name: "Kindle", value: "Silk", version: "Silk" },
      { name: "Android", value: "Android", version: "Android" },
      { name: "PlayBook", value: "PlayBook", version: "OS" },
      { name: "BlackBerry", value: "BlackBerry", version: "/" },
      { name: "Macintosh", value: "Mac", version: "OS X" },
      { name: "Linux", value: "Linux", version: "rv" },
      { name: "Palm", value: "Palm", version: "PalmOS" },
    ],
    J0 = [
      { name: "Chrome", value: "Chrome", version: "Chrome" },
      { name: "Firefox", value: "Firefox", version: "Firefox" },
      { name: "Safari", value: "Safari", version: "Version" },
      { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
      { name: "Opera", value: "Opera", version: "Opera" },
      { name: "BlackBerry", value: "CLDC", version: "CLDC" },
      { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
    ];
  function Di(e, t) {
    let o = 0,
      r = 0,
      s,
      a,
      i,
      l,
      c;
    for (o = 0; o < t.length; o += 1)
      if (((s = new RegExp(t[o].value, "i")), (i = s.test(e)), i)) {
        if (
          ((a = new RegExp(t[o].version + "[- /:;]([\\d._]+)", "i")),
          (l = e.match(a)),
          (c = ""),
          l && l[1] && (l = l[1]),
          l)
        )
          for (l = l.split(/[._]+/), r = 0; r < l.length; r += 1)
            r === 0 ? (c += l[r] + ".") : (c += l[r]);
        else c = "0";
        return { name: t[o].name, version: parseFloat(c) };
      }
    return { name: "unknown", version: 0 };
  }
  var Ri = Y0.join(" "),
    Ai = Di(Ri, X0),
    Li = Di(Ri, J0),
    eu = {
      os: Ai,
      browser: Li,
      isFirefox: Li.name === "Firefox",
      isMac: Ai.name === "Macintosh",
    },
    D = eu;
  function tu(e, t) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
    return !0;
  }
  function ou(e, t) {
    let o = new Map();
    for (let [r, s] of e) (!t.has(r) || t.get(r) !== s) && o.set(r, s);
    return o;
  }
  function ru(e) {
    return D.isFirefox && e.startsWith("https://chromewebstore.google.com")
      ? !1
      : e.startsWith("http") || e.startsWith("file");
  }
  var su = { isArrayEqual: tu, compareMaps: ou, isEligibleForCs: ru },
    Ct = su;
  var cs;
  ((t) => {
    let e;
    ((s) => ((s.New = "new"), (s.Edit = "edit")))(
      (e = t.CustomCodeMode || (t.CustomCodeMode = {})),
    );
  })(cs || (cs = {}));
  var Wo = cs;
  se();
  function nu(e) {
    let t = M(() => {
        e.onStatusChange(e.script.id, !e.script.active);
      }, [e.script.active]),
      o = M((s) => {
        e.onEdit(e.script.id);
      }, []),
      r = M((s) => {
        e.onDelete(e.script);
      }, []);
    return n("div", {
      class: "py-4 p-2 flex items-center border-b border-white/5",
      children: [
        n(ke, { checked: e.script.active, onClick: t }),
        n("div", {
          class: "ml-3 flex flex-col flex-1 font-body text-sm text-white",
          children: [
            n("span", { children: e.script.name }),
            n("span", {
              class: "max-w-xs text-xs text-gray-300 truncate",
              children: e.script.hosts
                .map((s) => (s === "*" ? "All sites" : s))
                .join(", "),
            }),
          ],
        }),
        n(V, {
          class: "ml-3",
          onClick: o,
          children: n(Mo, { class: "w-5 h-5", stroke: 2 }),
        }),
        n(V, {
          theme: "red",
          onClick: r,
          children: n(Fe, { class: "w-5 h-5", stroke: 2 }),
        }),
      ],
    });
  }
  var zi = nu;
  async function S(e) {
    try {
      return { data: await e, error: null };
    } catch (t) {
      return { data: null, error: t };
    }
  }
  var ji = {
      checkHosts: (e) => {
        for (let t of e) if (t !== "*" || Ct.isEligibleForCs(t)) return !1;
        return !0;
      },
      matchHosts: (e, t) => {
        if (e === "*") return !0;
        for (let o of t) {
          if (o === "*") return !0;
          let r =
              o.startsWith("http") || o.startsWith("file") ? o : `http://${o}`,
            s = new URL(r);
          if (e === o || e === s.host) return !0;
        }
        return !1;
      },
      isEligibleForInjection: (e, t) => {
        let o = new URL(e).host;
        for (let r of t) if (r === "*" || r === o || r === e) return !0;
        return !1;
      },
      createNewScript: async (e, t) => {
        let o = { id: Date.now(), hosts: e },
          { data: r, error: s } = await S(
            d.get(d.Schema.debug.custom_code.editor_scripts),
          );
        if (s) throw s;
        (r.length >= 20 && r.shift(), r.push(o));
        let { error: a } = await S(
          d.store(d.Schema.debug.custom_code.editor_scripts, r),
        );
        if (a) throw a;
        let i = Wo.CustomCodeMode.New;
        f.windows.create({
          url: f.getURL(`customCodeEditor.html?mode=${i}&id=${o.id}&&tab=${t}`),
          type: "popup",
          width: 600,
          height: 800,
          focused: !0,
        });
      },
      createNewScriptFromShortcut: async () => {
        let e = [],
          { data: t, error: o } = await S(f.getActiveTab());
        if (o) throw o;
        if (!t.id) throw new Error("Tab ID not found.");
        if (t.url && Ct.isEligibleForCs(t.url)) {
          let s = new URL(t.url);
          (e.push(s.hostname), e.push(t.url));
        } else e.push("");
        let { error: r } = await S(ji.createNewScript(e, t.id));
        if (r) throw r;
      },
    },
    au = { customCode: ji },
    Go = au;
  U();
  se();
  function iu(e) {
    let t = M(() => {
        if (e.hosts.length >= 20) {
          k.error("Maximum 20 hosts allowed.");
          return;
        }
        let s = [...e.hosts];
        (s.push(""), e.onHostsUpdate(s, !0));
      }, [e.hosts]),
      o = M(
        (s, a) => {
          let l = s.target.value,
            c = [...e.hosts];
          ((c[a] = l), e.onHostsUpdate(c));
        },
        [e.hosts],
      ),
      r = M(
        (s) => {
          let a = [...e.hosts];
          if (a.length === 1) return {};
          (a.splice(s, 1), e.onHostsUpdate(a));
        },
        [e.hosts],
      );
    return n(te, {
      children: [
        n("div", {
          class: "flex flex-col text-sm text-white font-body",
          children: [
            n("label", { class: "font-medium", children: "Hosts" }),
            n("span", {
              class: "mt-1 text-xs text-gray-300 font-normal",
              children:
                "Add hosts or specific urls where you want to run this script. Add * to match all urls.",
            }),
          ],
        }),
        n("div", {
          class: "mt-3 flex flex-col gap-2",
          children: e.hosts.map((s, a) =>
            n(
              "div",
              {
                class: "flex items-center gap-2",
                children: [
                  n(ie, { class: "flex-1", value: s, onInput: (i) => o(i, a) }),
                  n(V, {
                    onClick: (i) => r(a),
                    children: n(Fn, { class: "w-5 h-5" }),
                  }),
                ],
              },
              a,
            ),
          ),
        }),
        n(B, {
          theme: "gray",
          class: "mt-4 text-xs h-7 px-1.5",
          icon: n(to, { class: "w-4 h-4" }),
          value: "Add Host",
          onClick: t,
        }),
      ],
    });
  }
  var Hi = iu;
  var us = class extends T {
      constructor(o) {
        super(o);
        this.allScripts = [];
        this.newModalScrollViewRef = le();
        this.scriptToDelete = null;
        this.onHostChange = (o) => {
          let r = o.target,
            s = r.value,
            a = this.allScripts.filter((i) =>
              Go.customCode.matchHosts(s, i.hosts),
            );
          this.setState({ host: r.value, scripts: a });
        };
        this.openNewPopup = () => {
          this.setState({ new_popup: !0 });
        };
        this.onNewHostsUpdate = (o, r) => {
          this.setState({ new_popup_hosts: o }, () => {
            var s;
            r &&
              ((s = this.newModalScrollViewRef.current) == null ||
                s.scrollTo(0, this.newModalScrollViewRef.current.scrollHeight));
          });
        };
        this.closeNewPopup = () => {
          this.setState({ new_popup: !1 });
        };
        this.newSheet = async () => {
          let o = p.tab.value.id,
            r = this.state.new_popup_hosts
              .filter((s) => s.trim())
              .map((s) => s.trim());
          r.length || k.error("Please enter at least one valid host.");
          try {
            (await Go.customCode.createNewScript(r, o),
              setTimeout(() => {
                window.close();
              }, 100));
          } catch (s) {
            k.error(s.message);
          }
        };
        this.setScriptStatus = async (o, r) => {
          try {
            let s = await d.get(d.Schema.debug.custom_code.scripts),
              a = s.findIndex((i) => i.id === o);
            if (a === -1) throw new Error("Script not found.");
            ((s[a].active = r),
              await d.store(d.Schema.debug.custom_code.scripts, s),
              (this.allScripts = s),
              this.setState((i) => {
                let l = [...i.scripts],
                  c = l.findIndex((u) => u.id === o);
                return c === -1 ? {} : ((l[c].active = r), { scripts: l });
              }));
          } catch (s) {
            k.error(s.message);
          }
        };
        this.editScript = async (o) => {
          let r = Wo.CustomCodeMode.Edit,
            s = p.tab.value.id;
          (chrome.windows.create({
            url: f.getURL(`customCodeEditor.html?mode=${r}&id=${o}&tab=${s}`),
            type: "popup",
            width: 600,
            height: 800,
            focused: !0,
          }),
            window.close());
        };
        this.openDeletePopup = (o) => {
          ((this.scriptToDelete = o), this.setState({ delete_popup: !0 }));
        };
        this.closeDeletePopup = () => {
          this.setState({ delete_popup: !1 });
        };
        this.deleteScript = async () => {
          try {
            let o = await d.get(d.Schema.debug.custom_code.scripts),
              r = o.findIndex((s) => {
                var a;
                return (
                  s.id === ((a = this.scriptToDelete) == null ? void 0 : a.id)
                );
              });
            if (r === -1) return;
            (o.splice(r, 1),
              await d.store(d.Schema.debug.custom_code.scripts, o),
              (this.allScripts = o),
              this.setState((s) => ({
                scripts: s.scripts.filter((i) => {
                  var l;
                  return (
                    i.id !== ((l = this.scriptToDelete) == null ? void 0 : l.id)
                  );
                }),
              })),
              this.closeDeletePopup(),
              k.success("Script deleted."));
          } catch (o) {
            (console.log(o), k.error("Error while deleting script."));
          }
        };
        this.state = {
          host: "*",
          hosts: [{ value: "*", label: "All Sites" }],
          scripts: [],
          new_popup: !1,
          new_popup_hosts: [],
          delete_popup: !1,
        };
      }
      async componentDidMount() {
        q.resizePopup(500, 560);
        try {
          this.allScripts = await d.get(d.Schema.debug.custom_code.scripts);
        } catch (o) {
          (console.log(o), k.error("Error while fetching scripts."));
        }
        Ct.isEligibleForCs(p.tab.value.url)
          ? this.setState((o) => {
              let r = new URL(p.tab.value.url),
                s = this.allScripts.filter((a) =>
                  Go.customCode.matchHosts(r.host, a.hosts),
                );
              return {
                host: r.hostname,
                hosts: [
                  { label: r.host, value: r.host },
                  { label: p.tab.value.url, value: p.tab.value.url },
                  ...o.hosts,
                ],
                scripts: s,
                new_popup_hosts: [r.hostname, p.tab.value.url],
              };
            })
          : this.setState({ scripts: this.allScripts, new_popup_hosts: [""] });
      }
      render() {
        var o;
        return n($, {
          children: [
            n(me, {
              open: this.state.delete_popup,
              winClass: "max-w-xs",
              children: [
                n(Ce, {
                  onClose: this.closeDeletePopup,
                  children: "Delete Script",
                }),
                n(ge, {
                  children: n("p", {
                    class: "text-sm font-body text-gray-300",
                    children: [
                      "Do you want to permanently delete ",
                      n("b", {
                        class: "text-white",
                        children:
                          (o = this.scriptToDelete) == null ? void 0 : o.name,
                      }),
                      "?",
                    ],
                  }),
                }),
                n(_e, {
                  children: n(B, {
                    theme: "red",
                    icon: n(Fe, { class: "w-5 h-5" }),
                    value: "Delete",
                    onClick: this.deleteScript,
                  }),
                }),
              ],
            }),
            n(me, {
              open: this.state.new_popup,
              winClass: "max-w-sm h-120",
              children: [
                n(Ce, { onClose: this.closeNewPopup, children: "Create New" }),
                n(ge, {
                  class: "p-0",
                  children: n(de, {
                    contentRef: this.newModalScrollViewRef,
                    children: n(Hi, {
                      hosts: this.state.new_popup_hosts,
                      onHostsUpdate: this.onNewHostsUpdate,
                    }),
                  }),
                }),
                n(_e, {
                  children: n(B, {
                    theme: "blue",
                    icon: n(to, { class: "w-5 h-5" }),
                    value: "Create",
                    onClick: this.newSheet,
                  }),
                }),
              ],
            }),
            n(ne, {
              title: "Custom Code",
              children: n(B, {
                theme: "blue",
                icon: n(to, { class: "w-5 h-5" }),
                value: "New",
                onClick: this.openNewPopup,
              }),
            }),
            n(ae, {
              class: "p-0",
              children: [
                n("div", {
                  class:
                    "px-4 py-2 flex items-center justify-end border-b border-white/10",
                  children: n(co, {
                    class: "w-52",
                    label: n(Po, { class: "w-5 h-5" }),
                    options: this.state.hosts,
                    value: this.state.host,
                    onChange: this.onHostChange,
                  }),
                }),
                this.state.scripts.length
                  ? n(de, {
                      children: this.state.scripts.map((r) =>
                        n(
                          zi,
                          {
                            script: r,
                            onDelete: this.openDeletePopup,
                            onEdit: this.editScript,
                            onStatusChange: this.setScriptStatus,
                          },
                          r.id,
                        ),
                      ),
                    })
                  : n(Y, {
                      title: "No custom scripts found",
                      description:
                        "Create a new custom scripts for the current site or hostname.",
                      icon: Rn,
                    }),
              ],
            }),
          ],
        });
      }
    },
    Bi = us;
  U();
  se();
  function lu(e) {
    let t = M(
        (a) => {
          e.disabled || (e.onChange && e.onChange(!e.checked));
        },
        [e.disabled, e.checked],
      ),
      o = _(
        "flex transition-colors text-gray-300 font-body text-sm select-none",
        e.class,
        e.disabled
          ? "opacity-80 cursor-not-allowed"
          : "cursor-pointer hover:text-white",
      ),
      r =
        "w-5 h-5 flex items-center justify-center rounded border text-white transition-colors " +
        (e.checked
          ? "bg-sky-600 border-sky-600"
          : "bg-transparent border-white/20"),
      s =
        "w-3.5 h-3.5 transition-transform " +
        (e.checked ? "scale-100" : "scale-0");
    return n("div", {
      class: o,
      onClick: t,
      children: [
        n("div", { class: r, children: n(ko, { class: s, stroke: 3 }) }),
        n("div", {
          class: "ml-2 flex flex-col flex-1",
          children: [
            n("label", { class: "font-medium", children: e.label }),
            e.description
              ? n("p", {
                  class: "text-gray-400 font-normal",
                  children: e.description,
                })
              : null,
          ],
        }),
      ],
    });
  }
  var De = lu;
  var ds = class extends T {
      constructor(o) {
        super(o);
        this.onTimeRangeChange = (o) => {
          let r = o.target;
          this.setState({ time_range: r.value });
        };
        this.onOriginChange = (o) => {
          let r = o.target;
          this.setState((s) => {
            let a = {
              origin: r.value,
              history: s.history,
              download: s.download,
              history_disabled: !1,
              download_disabled: !1,
            };
            return (
              a.origin !== "All sites" &&
                ((a.history = !1),
                (a.history_disabled = !0),
                (a.download = !1),
                (a.download_disabled = !0)),
              a
            );
          });
        };
        this.onCacheChange = (o) => {
          this.setState({ cache: o });
        };
        this.onCookiesChange = (o) => {
          this.setState({ cookies: o });
        };
        this.onLocalStorageChange = (o) => {
          this.setState({ local_storage: o });
        };
        this.onHistoryChange = (o) => {
          this.setState({ history: o });
        };
        this.onDownloadChange = (o) => {
          this.setState({ download: o });
        };
        this.onRefreshPageChange = (o) => {
          this.setState({ refresh_page: o });
        };
        this.clear = async () => {
          this.setState({ clearing: !0 });
          let o = new Date().getTime();
          switch (this.state.time_range) {
            case "Last hour":
              o -= 60 * 60 * 1e3;
              break;
            case "Last 24 hours":
              o -= 24 * 60 * 60 * 1e3;
              break;
            case "Last 7 days":
              o -= 7 * 24 * 60 * 60 * 1e3;
              break;
            case "Last 30 days":
              o -= 30 * 24 * 60 * 60 * 1e3;
              break;
            case "All time":
              o = 0;
              break;
          }
          let r = {},
            s = {
              cache: this.state.cache,
              cookies: this.state.cookies,
              localStorage: this.state.local_storage,
              history: this.state.history,
              downloads: this.state.download,
            };
          (this.state.origin.startsWith("All sites") ||
            (D.browser.name === "Firefox"
              ? (r.hostnames = [this.state.origin])
              : (r.origins = [this.state.origin])),
            D.isFirefox || (s.cacheStorage = this.state.cache));
          try {
            (await f.browsingData.remove(r, s),
              k.success("Browsing data cleared."));
          } catch (a) {
            (k.error("Failed to clear browsing data."), console.log(a));
          }
          try {
            let a = {
              time_range: this.state.time_range,
              is_all_sites: this.state.origin.startsWith("All sites"),
              cache: this.state.cache,
              cookies: this.state.cookies,
              local_storage: this.state.local_storage,
              history: this.state.history,
              download: this.state.download,
              refresh_page: this.state.refresh_page,
            };
            await d.store(d.Schema.debug.clear_browsing_data.config, a);
          } catch (a) {
            console.log(a);
          }
          (this.state.refresh_page && f.tabs.reload(p.tab.value.id),
            this.setState({ clearing: !1 }));
        };
        this.state = {
          hostname: "",
          origins: [],
          time_range: "Last 1 hour",
          origin: "",
          cache: !0,
          cookies: !0,
          local_storage: !0,
          history: !1,
          history_disabled: !0,
          download: !1,
          download_disabled: !0,
          clearing: !1,
          refresh_page: !0,
        };
      }
      async componentDidMount() {
        q.resizePopup(500, 490);
        let o = new URL(p.tab.value.url),
          r = o.hostname,
          s = ["All sites"];
        Ct.isEligibleForCs(p.tab.value.url) &&
          (!D.isFirefox && o.origin && s.unshift(o.origin),
          D.isFirefox && r && s.unshift(r));
        try {
          let a = await d.get(d.Schema.debug.clear_browsing_data.config);
          this.setState({
            origins: s,
            origin: a.is_all_sites ? "All sites" : s[0],
            time_range: a.time_range ? a.time_range : "Last 1 hour",
            cache: a.cache === void 0 ? !0 : a.cache,
            cookies: a.cookies === void 0 ? !0 : a.cookies,
            local_storage: a.local_storage === void 0 ? !0 : a.local_storage,
            history: a.history === void 0 ? !1 : a.history,
            download: a.download === void 0 ? !1 : a.download,
            history_disabled: a.is_all_sites === void 0 ? !0 : !a.is_all_sites,
            download_disabled: a.is_all_sites === void 0 ? !0 : !a.is_all_sites,
            refresh_page: !!a.refresh_page,
          });
        } catch (a) {
          (console.log(a), this.setState({ origins: s, origin: s[0] }));
        }
        this.setState({ hostname: r });
      }
      render() {
        return n($, {
          children: [
            n(ne, {
              title: "Clear Browsing Data",
              description: this.state.hostname,
            }),
            n(ae, {
              children: [
                n("div", {
                  class: "flex items-center justify-between",
                  children: [
                    n(co, {
                      label: n(Io, { class: "w-5 h-5" }),
                      value: this.state.time_range,
                      options: [
                        "Last 1 hour",
                        "Last 24 hours",
                        "Last 7 days",
                        "Last 30 days",
                        "All time",
                      ],
                      onChange: this.onTimeRangeChange,
                    }),
                    n(co, {
                      class: "w-52",
                      value: this.state.origin,
                      label: n(Po, { class: "w-5 h-5" }),
                      options: this.state.origins,
                      onChange: this.onOriginChange,
                    }),
                  ],
                }),
                n("div", {
                  class: "mt-6",
                  children: [
                    n(De, {
                      label: "Cache",
                      description: "Frees up images and files.",
                      checked: this.state.cache,
                      onChange: this.onCacheChange,
                    }),
                    n(De, {
                      class: "mt-4",
                      label: "Cookies",
                      description: "Clears all the cookies of sites.",
                      checked: this.state.cookies,
                      onChange: this.onCookiesChange,
                    }),
                    n(De, {
                      class: "mt-4",
                      label: "Local storage",
                      description: "Clears local storage of sites.",
                      checked: this.state.local_storage,
                      onChange: this.onLocalStorageChange,
                    }),
                    n(De, {
                      class: "mt-4",
                      label: "History",
                      description: "Clears browser history.",
                      checked: this.state.history,
                      disabled: this.state.history_disabled,
                      onChange: this.onHistoryChange,
                    }),
                    n(De, {
                      class: "mt-4",
                      label: "Download",
                      description: "Clears download history.",
                      checked: this.state.download,
                      disabled: this.state.download_disabled,
                      onChange: this.onDownloadChange,
                    }),
                  ],
                }),
                n("div", {
                  class:
                    "mt-5 pt-4 flex gap-4 items-center border-t border-white/10 justify-between",
                  children: [
                    n(De, {
                      label: "Refresh page",
                      checked: this.state.refresh_page,
                      onChange: this.onRefreshPageChange,
                    }),
                    n(B, {
                      class: "w-28 self-center",
                      theme: "blue",
                      icon: n(Fe, { class: "w-5 h-5", stroke: 2 }),
                      value: "Clear",
                      onClick: this.clear,
                      loading: this.state.clearing,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    Oi = ds;
  U();
  var cu = {
      visible_area: { id: "visible_area", name: "Visible Area" },
      full_page: { id: "full_page", name: "Full Page" },
      select_area: { id: "select_area", name: "Select Area" },
      select_element: { id: "select_element", name: "Select Element" },
    },
    Mt = cu;
  var hs = class extends T {
      constructor(o) {
        super(o);
        this.captureScreenshot = () => {
          // BYPASS FOR TESTING: allow capture even when is_injected is false
          (y.send(
              w.capture.enable,
              { tool_id: Mt.visible_area.id },
              p.tab.value.id,
            ),
            window.close());
        };
        this.captureFullPage = () => {
          (y.send(
              w.capture.enable,
              { tool_id: Mt.full_page.id },
              p.tab.value.id,
            ),
            window.close());
        };
        this.captureSelectArea = () => {
          (y.send(
              w.capture.enable,
              { tool_id: Mt.select_area.id },
              p.tab.value.id,
            ),
            window.close());
        };
        this.captureSelectElement = () => {
          (y.send(
              w.capture.enable,
              { tool_id: Mt.select_element.id },
              p.tab.value.id,
            ),
            window.close());
        };
        this.openScreenshotEditor = () => {
          (y.send(w.window.open, {
            href: "screenshotEditor.html",
            options: {
              windowId: p.tab.value.window_id,
              index: p.tab.value.index + 1,
              openerTabId: p.tab.value.id,
            },
          }),
            setTimeout(() => window.close(), 200));
        };
      }
      componentDidMount() {
        q.resizePopup(400, 244);
      }
      render() {
        // BYPASS FOR TESTING: show capture options as enabled even when tab not marked injected
        let o = ""; // p.tab.value.is_injected ? "" : "opacity-50 cursor-not-allowed";
        return n($, {
          children: [
            n(ne, { title: "Capture" }),
            n(ae, {
              children: [
                n("div", {
                  class:
                    "flex flex-col rounded-lg border border-white/20 overflow-hidden text-gray-300 font-medium text-sm font-body bg-white/5",
                  children: [
                    n("div", {
                      class: "flex items-center border-b border-white/20",
                      children: [
                        n("div", {
                          class: _(
                            "p-3 flex flex-1 items-center border-r border-white/20 cursor-pointer hover:text-white hover:bg-white/5 transition-colors",
                            o,
                          ),
                          onClick: this.captureScreenshot,
                          children: [
                            n(Kn, { class: "w-6 h-6" }),
                            n("span", { class: "ml-2", children: "Capture" }),
                          ],
                        }),
                        n("div", {
                          class: _(
                            "p-3 flex flex-1 items-center cursor-pointer hover:text-white hover:bg-white/5 transition-colors",
                            o,
                          ),
                          onClick: this.captureFullPage,
                          children: [
                            n(Gn, { class: "w-6 h-6" }),
                            n("span", { class: "ml-2", children: "Full page" }),
                          ],
                        }),
                      ],
                    }),
                    n("div", {
                      class: "flex items-center",
                      children: [
                        n("div", {
                          class: _(
                            "p-3 flex flex-1 items-center cursor-pointer border-r border-white/20 hover:text-white hover:bg-white/5 transition-colors",
                            o,
                          ),
                          onClick: this.captureSelectElement,
                          children: [
                            n(zn, { class: "w-6 h-6" }),
                            n("span", {
                              class: "ml-2",
                              children: "Select element",
                            }),
                          ],
                        }),
                        n("div", {
                          class: _(
                            "p-3 flex flex-1 items-center cursor-pointer hover:text-white hover:bg-white/5 transition-colors",
                            o,
                          ),
                          onClick: this.captureSelectArea,
                          children: [
                            n(Wn, { class: "w-6 h-6" }),
                            n("span", {
                              class: "ml-2",
                              children: "Select area",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n("div", {
                  class:
                    "mt-2 flex items-center rounded-lg border border-white/20 overflow-hidden text-gray-300 font-medium text-sm font-body bg-white/5",
                  children: n("div", {
                    class:
                      "p-3 flex flex-1 items-center cursor-pointer hover:text-white hover:bg-white/5 transition-colors",
                    onClick: this.openScreenshotEditor,
                    children: [
                      n(Eo, { class: "w-6 h-6" }),
                      n("span", {
                        class: "ml-2",
                        children: "Screenshot editor",
                      }),
                    ],
                  }),
                }),
                n("div", {
                  class:
                    "mt-6 hidden items-center rounded-lg border border-white/20 overflow-hidden text-gray-300 font-medium text-sm font-body bg-white/5",
                  children: [
                    n("div", {
                      class:
                        "p-3 flex flex-1 items-center border-r border-white/20 cursor-pointer hover:text-white hover:bg-white/5 transition-colors",
                      children: [
                        n(Zn, { class: "w-6 h-6" }),
                        n("span", { class: "ml-2", children: "Record tab" }),
                      ],
                    }),
                    n("div", {
                      class:
                        "p-3 flex flex-1 items-center cursor-pointer hover:text-white hover:bg-white/5 transition-colors",
                      children: [
                        n(Un, { class: "w-6 h-6" }),
                        n("span", {
                          class: "ml-2",
                          children: "Record desktop",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    Vi = hs;
  U();
  function uu(e) {
    return n("div", {
      class: "w-full h-full flex justify-center items-center",
      children: n(at, { size: "w-10 h-10" }),
    });
  }
  var Oe = uu;
  function du(e) {
    let t = _("w-full h-5 p-1 bg-gray-700 rounded-full", e.class);
    return n("div", {
      class: t,
      children: n("div", {
        class:
          "w-full h-full bg-gradient-to-b from-white/30 to-white/5 bg-sky-600 rounded-full transition-[width] origin-left",
        style: { width: `${e.progress}%` },
      }),
    });
  }
  var Ui = du;
  var ps = class extends T {
      constructor(o) {
        super(o);
        this.pageHeight = 0;
        this.pageWidth = 0;
        this.windowWidth = 0;
        this.arrangements = [];
        this.numberOfArrangements = 0;
        this.currentArrangement = [0, 0];
        this.canvas = null;
        this.ctx = null;
        this.startCapture = (o, r, s, a) => {
          ((this.canvas = document.createElement("canvas")),
            (this.ctx = this.canvas.getContext("2d")),
            (this.pageHeight = r),
            (this.pageWidth = o),
            (this.windowWidth = s),
            (this.arrangements = a),
            (this.numberOfArrangements = a.length),
            (this.canvas.width = s),
            (this.canvas.height = r),
            this.setState({ preparing: !1, progress: 0 }));
        };
        this.processFragment = () => {
          let [o, r] = this.arrangements.shift();
          setTimeout(() => {
            ((this.currentArrangement = [o, r]),
              y.send(w.capture.takeScreenshot, {}));
          }, 500);
        };
        this.takeScreenshot = async () => {
          let o = "";
          try {
            o = await f.captureVisibleArea(p.tab.value.window_id);
          } catch (s) {
            console.log(s);
          }
          if (!o) return;
          let r = new Image();
          ((r.onload = () => {
            let [s, a] = this.currentArrangement;
            if (window.innerWidth !== r.width) {
              let i = window.innerWidth / r.width;
              ((s = s * i), (a = a * i));
            }
            if ((this.ctx.drawImage(r, s, a), this.arrangements.length)) {
              let i =
                (this.arrangements.length / this.numberOfArrangements) * 100;
              (this.setState({ progress: i }), this.processFragment());
            }
          }),
            (r.src = o));
        };
        this.onMessage = (o, r) => {};
        this.state = { preparing: !0, progress: 0 };
      }
      componentDidMount() {
        ((this.listener = y.listen(this.onMessage)),
          q.resizePopup(400, 160),
          y.send(
            w.capture.enable,
            { tool_id: Mt.full_page.id },
            p.tab.value.id,
          ));
      }
      componentWillUnmount() {
        y.neglect(this.listener);
      }
      render() {
        return n($, {
          children: [
            n(ne, { title: "Full Page" }),
            n(ae, {
              children: this.state.preparing
                ? n(Oe, {})
                : n("div", {
                    class: "flex flex-1 items-center justify-center",
                    children: n(Ui, { progress: this.state.progress }),
                  }),
            }),
          ],
        });
      }
    },
    Fi = ps;
  U();
  U();
  se();
  function hu(e) {
    let [t, o] = X([e.active]),
      r = _("h-full flex-1 flex flex-col", e.class),
      s = _(
        "px-4 flex items-center" +
          (e.tabBarCenter ? " justify-center" : "") +
          (e.fullWidth ? " pb-0" : " pb-1"),
        e.tabBarClass,
      ),
      a = M((i) => {
        e.onTabChange(i);
      }, []);
    return (
      Se(() => {
        o((i) => (i.includes(e.active) ? i : [...i, e.active]));
      }, [e.active]),
      n("div", {
        class: r,
        style: e.style,
        children: [
          n("div", {
            class: s,
            children: [
              n("ul", {
                class: _(
                  "w-fit p-1 flex flex-wrap bg-slate-800 rounded-lg select-none justify-center border border-white/10",
                  e.fullWidth ? "flex-1" : "",
                ),
                children: e.children.map((i) => {
                  let l = _(
                    "mr-1 last:mr-0 px-3 py-2 flex flex-col items-center rounded-md text-sm font-body font-medium text-center text-gray-400 cursor-pointer transition",
                    e.fullWidth ? "flex-1" : "",
                    i.props.name === e.active
                      ? "text-white bg-sky-700 shadow"
                      : "hover:text-white hover:bg-slate-700",
                  );
                  return n("li", {
                    class: l,
                    onClick: () => a(i.props.name),
                    children: i.props.name,
                  });
                }),
              }),
              e.actions
                ? n("div", { class: "ml-4 flex-1", children: e.actions })
                : null,
            ],
          }),
          n("div", {
            class: "w-full flex-1 flex flex-col",
            children: e.children.map((i) => {
              let l = i.props,
                c = l.component;
              return n(c, {
                ref: l.tabRef,
                initialized: t.includes(l.name),
                active: l.name === e.active,
                extraProps: l.extraProps,
              });
            }),
          }),
        ],
      })
    );
  }
  function $t(e) {
    return n(te, {});
  }
  var Ve = class extends T {
      constructor(o) {
        super(o);
        this.state = { initialized: o.initialized, active: o.active };
      }
      componentDidMount() {
        this.state.initialized && this.onMount();
      }
      componentWillUnmount() {
        this.state.initialized && this.onUnmount();
      }
      componentWillReceiveProps(o) {
        (o.initialized &&
          !this.state.initialized &&
          (this.setState({ initialized: !0 }), this.onMount()),
          o.active !== this.state.active && this.setState({ active: o.active }),
          this.onReceiveProps(o));
      }
      render() {
        if (this.state.initialized) {
          let o = _(
            "w-full flex-1 flex flex-col",
            this.props.class,
            this.state.active ? "" : "hidden",
          );
          return n("div", { class: o, children: this.onRender() });
        } else return n(te, {});
      }
      onMount() {}
      onUnmount() {}
      onReceiveProps(o) {}
      onRender() {
        return n(te, {});
      }
    },
    qi = hu;
  var gs = class extends Ve {
      constructor(o) {
        super(o);
        this.getHosting = (o) => {
          (this.setState({ loading: !0 }),
            y.send(w.site_stack.hosting.get, { hostname: o }));
        };
        this.setHosting = (o, r) => {
          if (r || !o) {
            (k.error(r), this.setState({ loading: !1, error: r || "" }));
            return;
          }
          this.setState({ hosting: o, loading: !1, error: "" });
        };
        this.state = re(L({}, this.state), {
          loading: !1,
          error: "",
          hosting: {},
        });
      }
      onMount() {
        !this.props.extraProps.hostname ||
          this.getHosting(this.props.extraProps.hostname);
      }
      onReceiveProps(o) {
        !o.active ||
          this.props.extraProps.hostname === o.extraProps.hostname ||
          this.getHosting(o.extraProps.hostname);
      }
      onRender() {
        let o = null;
        return (
          this.state.loading
            ? (o = n(Oe, {}))
            : !Object.keys(this.state.hosting).length || this.state.error
              ? (o = n(Y, {
                  class: "mt-4",
                  icon: xe,
                  title: this.state.error
                    ? "Something went wrong"
                    : "No Data Found",
                  description: this.state.error
                    ? this.state.error
                    : "No hosting data found for this website.",
                }))
              : (o = n(de, {
                  children: n("table", {
                    class:
                      "w-full border border-gray-600 text-center font-body text-sm text-white",
                    children: Object.entries(this.state.hosting).map(([r, s]) =>
                      n("tr", {
                        class: "border-b border-gray-600",
                        children: [
                          n("td", {
                            class:
                              "px-2 py-4 whitespace-nowrap font-medium border-r border-gray-600",
                            children: r,
                          }),
                          n("td", {
                            class:
                              "px-2 py-4 break-all font-light border-r border-gray-600",
                            children: s,
                          }),
                        ],
                      }),
                    ),
                  }),
                })),
          n("div", {
            class: "mt-2 flex-1 flex flex-col border-t border-white/10",
            children: o,
          })
        );
      }
    },
    $i = gs;
  function pu(e) {
    let t = _(
      "p-4 bg-white/5 rounded-lg shadow-md border border-white/10",
      e.class,
    );
    return n("div", {
      class: t,
      style: e.style,
      onClick: e.onClick,
      children: e.children,
    });
  }
  var Ie = pu;
  var ms = class extends Ve {
      constructor(o) {
        super(o);
        this.listener = null;
        this.onImageError = (o) => {
          let r = o.target;
          r.src =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InJvdGF0ZSgwIDAgMCkiPgo8ZyBvcGFjaXR5PSIwLjQiPgo8cGF0aCBkPSJNMy4yNSA1LjVDMy4yNSA0LjI1NzM2IDQuMjU3MzYgMy4yNSA1LjUgMy4yNUgxOC41QzE5Ljc0MjYgMy4yNSAyMC43NSA0LjI1NzM2IDIwLjc1IDUuNVYxMS4yNUgzLjI1VjUuNVpNNi42OTcwNyA4QzYuNjk3MDcgOC40NDE4MyA3LjA1NTI0IDguOCA3LjQ5NzA3IDguOEg4LjQ5NzA3QzguOTM4OSA4LjggOS4yOTcwNyA4LjQ0MTgzIDkuMjk3MDcgOEM5LjI5NzA3IDcuNTU4MTcgOC45Mzg5IDcuMiA4LjQ5NzA3IDcuMkg3LjQ5NzA3QzcuMDU1MjQgNy4yIDYuNjk3MDcgNy41NTgxNyA2LjY5NzA3IDhaTTExLjQ5NTEgNy4yQzExLjA1MzMgNy4yIDEwLjY5NTEgNy41NTgxNyAxMC42OTUxIDhDMTAuNjk1MSA4LjQ0MTgzIDExLjA1MzMgOC44IDExLjQ5NTEgOC44SDEyLjQ5NTFDMTIuOTM2OSA4LjggMTMuMjk1MSA4LjQ0MTgzIDEzLjI5NTEgOEMxMy4yOTUxIDcuNTU4MTcgMTIuOTM2OSA3LjIgMTIuNDk1MSA3LjJIMTEuNDk1MVoiIGZpbGw9IiNlZGVkZWQiPjwvcGF0aD4KPHBhdGggZD0iTTMuMjUgMTIuNzVWMTguNUMzLjI1IDE5Ljc0MjYgNC4yNTczNiAyMC43NSA1LjUgMjAuNzVIMTguNUMxOS43NDI2IDIwLjc1IDIwLjc1IDE5Ljc0MjYgMjAuNzUgMTguNVYxMi43NUgzLjI1Wk03LjQ5ODA1IDE1LjJIOC40OTgwNUM4LjkzOTg3IDE1LjIgOS4yOTgwNSAxNS41NTgyIDkuMjk4MDUgMTZDOS4yOTgwNSAxNi40NDE4IDguOTM5ODcgMTYuOCA4LjQ5ODA1IDE2LjhINy40OTgwNUM3LjA1NjIyIDE2LjggNi42OTgwNSAxNi40NDE4IDYuNjk4MDUgMTZDNi42OTgwNSAxNS41NTgyIDcuMDU2MjIgMTUuMiA3LjQ5ODA1IDE1LjJaTTEwLjcwNDkgMTZDMTAuNzA0OSAxNS41NTgyIDExLjA2MzEgMTUuMiAxMS41MDQ5IDE1LjJIMTIuNTA0OUMxMi45NDY3IDE1LjIgMTMuMzA0OSAxNS41NTgyIDEzLjMwNDkgMTZDMTMuMzA0OSAxNi40NDE4IDEyLjk0NjcgMTYuOCAxMi41MDQ5IDE2LjhIMTEuNTA0OUMxMS4wNjMxIDE2LjggMTAuNzA0OSAxNi40NDE4IDEwLjcwNDkgMTZaIiBmaWxsPSIjZWRlZGVkIj48L3BhdGg+CjwvZz4KPHBhdGggZD0iTTcuNDk3MjcgNy4yMDAyQzcuMDU1NDQgNy4yMDAyIDYuNjk3MjcgNy41NTgzNyA2LjY5NzI3IDguMDAwMkM2LjY5NzI3IDguNDQyMDIgNy4wNTU0NCA4LjgwMDIgNy40OTcyNyA4LjgwMDJIOC40OTcyN0M4LjkzOTA5IDguODAwMiA5LjI5NzI3IDguNDQyMDIgOS4yOTcyNyA4LjAwMDJDOS4yOTcyNyA3LjU1ODM3IDguOTM5MDkgNy4yMDAyIDguNDk3MjcgNy4yMDAySDcuNDk3MjdaIiBmaWxsPSIjZWRlZGVkIj48L3BhdGg+CjxwYXRoIGQ9Ik0xMC42OTUzIDguMDAwMkMxMC42OTUzIDcuNTU4MzcgMTEuMDUzNSA3LjIwMDIgMTEuNDk1MyA3LjIwMDJIMTIuNDk1M0MxMi45MzcxIDcuMjAwMiAxMy4yOTUzIDcuNTU4MzcgMTMuMjk1MyA4LjAwMDJDMTMuMjk1MyA4LjQ0MjAyIDEyLjkzNzEgOC44MDAyIDEyLjQ5NTMgOC44MDAySDExLjQ5NTNDMTEuMDUzNSA4LjgwMDIgMTAuNjk1MyA4LjQ0MjAyIDEwLjY5NTMgOC4wMDAyWiIgZmlsbD0iI2VkZWRlZCI+PC9wYXRoPgo8cGF0aCBkPSJNNi42OTgyNCAxNi4wMDAyQzYuNjk4MjQgMTUuNTU4NCA3LjA1NjQxIDE1LjIwMDIgNy40OTgyNCAxNS4yMDAySDguNDk4MjRDOC45NDAwNyAxNS4yMDAyIDkuMjk4MjQgMTUuNTU4NCA5LjI5ODI0IDE2LjAwMDJDOS4yOTgyNCAxNi40NDIgOC45NDAwNyAxNi44MDAyIDguNDk4MjQgMTYuODAwMkg3LjQ5ODI0QzcuMDU2NDEgMTYuODAwMiA2LjY5ODI0IDE2LjQ0MiA2LjY5ODI0IDE2LjAwMDJaIiBmaWxsPSIjZWRlZGVkIj48L3BhdGg+CjxwYXRoIGQ9Ik0xMS41MDUxIDE1LjIwMDJDMTEuMDYzMyAxNS4yMDAyIDEwLjcwNTEgMTUuNTU4NCAxMC43MDUxIDE2LjAwMDJDMTAuNzA1MSAxNi40NDIgMTEuMDYzMyAxNi44MDAyIDExLjUwNTEgMTYuODAwMkgxMi41MDUxQzEyLjk0NjkgMTYuODAwMiAxMy4zMDUxIDE2LjQ0MiAxMy4zMDUxIDE2LjAwMDJDMTMuMzA1MSAxNS41NTg0IDEyLjk0NjkgMTUuMjAwMiAxMi41MDUxIDE1LjIwMDJIMTEuNTA1MVoiIGZpbGw9IiNlZGVkZWQiPjwvcGF0aD4KPC9zdmc+";
        };
        this.getTech = async () => {
          this.state.loading ||
            (this.setState({ loading: !0 }),
            (this.listener = y.listen(this.onMessage)),
            y.send(w.site_stack.tech.getPageData, {}, p.tab.value.id));
        };
        this.setTech = async (o, r) => {
          if (r || !o) {
            (k.error(r), this.setState({ loading: !1, error: r || "" }));
            return;
          }
          this.setState({ tech: o, loading: !1, error: "" });
        };
        this.onMessage = (o, r) => {
          o === w.site_stack.tech.setPageData &&
            (y.send(w.site_stack.tech.get, {
              tab_id: p.tab.value.id,
              tab_url: p.tab.value.url,
              page_data: r.result.page_data,
              techs_with_dom_matches: r.result.techs_with_dom_matches,
            }),
            y.neglect(this.listener),
            (this.listener = null));
        };
        this.state = re(L({}, this.state), {
          loading: !1,
          error: "",
          tech: {},
        });
      }
      onMount() {
        !this.props.extraProps.hostname || this.getTech();
      }
      onReceiveProps(o) {
        !o.active ||
          this.props.extraProps.hostname === o.extraProps.hostname ||
          this.getTech();
      }
      onRender() {
        let o = null;
        return (
          this.state.loading
            ? (o = n(Oe, {}))
            : !Object.keys(this.state.tech).length || this.state.error
              ? (o = n(Y, {
                  class: "mt-4",
                  icon: sa,
                  title: this.state.error
                    ? "Something went wrong"
                    : "No Data Found",
                  description: this.state.error
                    ? this.state.error
                    : "No Tech data found for this website.",
                }))
              : (o = n(de, {
                  children: n("div", {
                    class: "grid grid-cols-1 gap-2",
                    children: Object.entries(this.state.tech).map(([r, s]) =>
                      n(Ie, {
                        children: [
                          n("h2", {
                            class:
                              "text-base text-yellow-500 font-display font-bold",
                            children: r,
                          }),
                          n("ul", {
                            class: "mt-4",
                            children: s.map((a) =>
                              n("li", {
                                class: "mt-2 flex items-center",
                                children: [
                                  n("div", {
                                    class:
                                      "w-7 h-7 flex items-center justify-center bg-white/5 border border-white/10 rounded-md",
                                    children: n("img", {
                                      class: "w-5 h-5",
                                      src: `https://raw.githubusercontent.com/enthec/webappanalyzer/main/src/images/icons/${a.icon}`,
                                      onError: this.onImageError,
                                    }),
                                  }),
                                  n("h4", {
                                    class:
                                      "ml-2 flex-1 text-sm text-white font-body",
                                    children: a.name,
                                  }),
                                ],
                              }),
                            ),
                          }),
                        ],
                      }),
                    ),
                  }),
                })),
          n("div", {
            class: "mt-2 flex-1 flex flex-col border-t border-white/10",
            children: o,
          })
        );
      }
    },
    Ki = ms;
  var fs = class extends Ve {
      constructor(o) {
        super(o);
        this.formatTTL = (o) =>
          o < 60
            ? `${o}s`
            : o < 3600
              ? `${Math.floor(o / 60)}m ${o % 60}s`
              : o < 86400
                ? `${Math.floor(o / 3600)}h ${Math.floor((o % 3600) / 60)}m`
                : `${Math.floor(o / 86400)}d ${Math.floor((o % 86400) / 3600)}h`;
        this.getDNS = (o) => {
          (this.setState({ loading: !0 }),
            y.send(w.site_stack.dns.get, { hostname: o }));
        };
        this.setDNS = (o, r) => {
          if (r || !o) {
            (k.error(r), this.setState({ loading: !1, error: r || "" }));
            return;
          }
          this.setState({ dns: o, loading: !1, error: "" });
        };
        this.state = re(L({}, this.state), { loading: !1, error: "", dns: {} });
      }
      onMount() {
        !this.props.extraProps.hostname ||
          this.getDNS(this.props.extraProps.hostname);
      }
      onReceiveProps(o) {
        !o.active ||
          this.props.extraProps.hostname === o.extraProps.hostname ||
          this.getDNS(o.extraProps.hostname);
      }
      onRender() {
        let o = null;
        return (
          this.state.loading
            ? (o = n(Oe, {}))
            : !Object.keys(this.state.dns).length || this.state.error
              ? (o = n(Y, {
                  class: "mt-4",
                  icon: xe,
                  title: this.state.error
                    ? "Something went wrong"
                    : "No Data Found",
                  description: this.state.error
                    ? this.state.error
                    : "No DNS data found for this website.",
                }))
              : (o = n(de, {
                  children: n("div", {
                    class: "grid grid-cols-1 gap-2",
                    children: Object.entries(this.state.dns).map(([r, s]) =>
                      s.map((a, i) =>
                        n(
                          Ie,
                          {
                            children: [
                              n("h2", {
                                class:
                                  "text-base text-yellow-500 font-display font-bold",
                                children: [r, " Record"],
                              }),
                              n("table", {
                                class:
                                  "mt-4 w-full border border-gray-600 text-center font-body text-sm text-white",
                                children: [
                                  n("tr", {
                                    class: "border-b border-gray-600",
                                    children: [
                                      n("td", {
                                        class:
                                          "w-24 px-2 py-4 whitespace-nowrap font-medium border-r border-gray-600",
                                        children: "Name",
                                      }),
                                      n("td", {
                                        class:
                                          "px-2 py-4 break-all font-light border-r border-gray-600",
                                        children: a.name,
                                      }),
                                    ],
                                  }),
                                  n("tr", {
                                    class: "border-b border-gray-600",
                                    children: [
                                      n("td", {
                                        class:
                                          "w-24 px-2 py-4 whitespace-nowrap font-medium border-r border-gray-600",
                                        children: "Value",
                                      }),
                                      n("td", {
                                        class:
                                          "px-2 py-4 break-all font-light border-r border-gray-600",
                                        children: a.data,
                                      }),
                                    ],
                                  }),
                                  n("tr", {
                                    class: "border-b border-gray-600",
                                    children: [
                                      n("td", {
                                        class:
                                          "w-24 px-2 py-4 whitespace-nowrap font-medium border-r border-gray-600",
                                        children: "TTL",
                                      }),
                                      n("td", {
                                        class:
                                          "px-2 py-4 break-all font-light border-r border-gray-600",
                                        children: this.formatTTL(a.TTL),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          `${r}-${i}`,
                        ),
                      ),
                    ),
                  }),
                })),
          n("div", {
            class: "mt-2 flex-1 flex flex-col border-t border-white/10",
            children: o,
          })
        );
      }
    },
    Wi = fs;
  var vs = class extends Ve {
      constructor(o) {
        super(o);
        this.getSSL = (o) => {
          (this.setState({ loading: !0 }),
            y.send(w.site_stack.ssl.get, { hostname: o }));
        };
        this.setSSL = async (o, r) => {
          if (r || !o) {
            (k.error(r), this.setState({ loading: !1, error: r || "" }));
            return;
          }
          this.setState({ loading: !1, ssl: o, error: "" });
        };
        this.state = re(L({}, this.state), { loading: !1, error: "", ssl: {} });
      }
      onMount() {
        !this.props.extraProps.hostname ||
          this.getSSL(this.props.extraProps.hostname);
      }
      onReceiveProps(o) {
        !o.active ||
          this.props.extraProps.hostname === o.extraProps.hostname ||
          this.getSSL(o.extraProps.hostname);
      }
      onRender() {
        let o = null;
        return (
          this.state.loading
            ? (o = n(Oe, {}))
            : !Object.keys(this.state.ssl).length || this.state.error
              ? (o = n(Y, {
                  class: "mt-4",
                  icon: xe,
                  title: this.state.error
                    ? "Something went wrong"
                    : "No Data Found",
                  description: this.state.error
                    ? this.state.error
                    : "No SSL data found for this website.",
                }))
              : (o = n(de, {
                  children: n("div", {
                    class: "grid grid-cols-1 gap-2",
                    children: Object.entries(this.state.ssl).map(([r, s]) =>
                      n(
                        Ie,
                        {
                          children: [
                            n("h2", {
                              class:
                                "text-base text-yellow-500 font-display font-bold",
                              children: r,
                            }),
                            n("ul", {
                              class: "mt-4",
                              children: Object.entries(s).map(([a, i]) =>
                                n(
                                  "li",
                                  {
                                    class: "mt-2",
                                    children: [
                                      n("h4", {
                                        class: "text-sm text-white font-body",
                                        children: a,
                                      }),
                                      n("p", {
                                        class:
                                          "mt-0.5 text-sm text-gray-400 font-body break-all",
                                        children: i,
                                      }),
                                    ],
                                  },
                                  a,
                                ),
                              ),
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                })),
          n("div", {
            class: "mt-2 flex-1 flex flex-col border-t border-white/10",
            children: o,
          })
        );
      }
    },
    Gi = vs;
  U();
  function gu(e) {
    let t = "bg-gray-600/10 text-gray-700 ring-gray-600/20";
    switch (e.theme) {
      case "green":
        t = "bg-green-600/20 text-green-700 ring-green-600/20";
        break;
      case "red":
        t = "bg-rose-500/20 text-rose-500 ring-rose-500/20";
        break;
      case "blue":
        t = "bg-blue-500/20 text-blue-500 ring-blue-500/20";
        break;
      case "yellow":
        t = "bg-yellow-500/20 text-yellow-500 ring-yellow-500/80";
        break;
      case "purple":
        t = "bg-purple-600/20 text-purple-700 ring-purple-600/20";
        break;
      case "pink":
        t = "bg-pink-600/20 text-pink-700 ring-pink-600/20";
        break;
      case "gray":
      default:
        t = "bg-gray-300/10 text-gray-400 ring-gray-400/50";
        break;
    }
    let o = _(
      "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium ring-1 ring-inset font-body",
      t,
      e.class,
    );
    return n("div", { class: o, children: e.children });
  }
  var Zi = gu;
  var Qi =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="572" height="429" viewBox="0 0 572 429"%3E%3Crect fill="%236b7280" width="572" height="429"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Preview%3C/text%3E%3C/svg%3E',
    Yi =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"%3E%3Crect fill="%236b7280" width="256" height="256"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Icon%3C/text%3E%3C/svg%3E',
    ws = class extends Ve {
      constructor(o) {
        super(o);
        this.hostname = "";
        this.getWordPress = async () => {
          (this.setState({ loading: !0 }),
            y.send(w.site_stack.wordpress.get, { url: p.tab.value.url }));
        };
        this.setWordPress = (o, r) => {
          if (r || !o) {
            let s = r !== "Not a WordPress site";
            (s && k.error(r),
              this.setState({
                loading: !1,
                is_wordpress_site: s,
                error: r || "",
              }));
            return;
          }
          this.setState({
            wordpress: o,
            is_wordpress_site: !0,
            loading: !1,
            error: "",
          });
        };
        this.state = re(L({}, this.state), {
          loading: !1,
          is_wordpress_site: !1,
          error: "",
          wordpress: { themes: [], plugins: [] },
        });
      }
      onMount() {
        !this.props.extraProps.hostname || this.getWordPress();
      }
      onReceiveProps(o) {
        !o.active ||
          this.props.extraProps.hostname === o.extraProps.hostname ||
          this.getWordPress();
      }
      onRender() {
        let o = null;
        return (
          this.state.loading
            ? (o = n(Oe, {}))
            : this.state.is_wordpress_site
              ? this.state.error
                ? (o = n(Y, {
                    class: "mt-4",
                    icon: xe,
                    title: "Something went wrong",
                    description: this.state.error,
                  }))
                : !this.state.wordpress.themes.length &&
                    !this.state.wordpress.plugins.length
                  ? (o = n(Y, {
                      class: "mt-4",
                      icon: xe,
                      title: "No Data Found",
                      description:
                        "No WordPress themes and plugins found for this website.",
                    }))
                  : (o = n(de, {
                      children: [
                        n("div", {
                          class:
                            "flex items-center font-display text-base font-bold text-yellow-500",
                          children: [
                            n("h3", {
                              children:
                                this.state.wordpress.themes.length > 1
                                  ? "Themes"
                                  : "Theme",
                            }),
                            n("span", {
                              class: "ml-1",
                              children: [
                                "(",
                                this.state.wordpress.themes.length,
                                ")",
                              ],
                            }),
                          ],
                        }),
                        this.state.wordpress.themes.length
                          ? n("div", {
                              class: "mt-4 grid grid-cols-1 gap-2",
                              children: this.state.wordpress.themes.map((r) =>
                                n(Ie, {
                                  class: "flex",
                                  children: [
                                    n("img", {
                                      class: "w-36 rounded-md bg-gray-500",
                                      src: r.img || Qi,
                                      onError: (s) => {
                                        let a = s.target;
                                        a.dataset.fallback ||
                                          ((a.dataset.fallback = "true"),
                                          (a.src = Qi));
                                      },
                                    }),
                                    n("div", {
                                      class: "ml-4 flex-1",
                                      children: [
                                        n("h2", {
                                          class:
                                            "text-base text-white font-display font-medium",
                                          children: r.name,
                                        }),
                                        r.author &&
                                          n("p", {
                                            class:
                                              "mt-2 flex items-center text-gray-400 text-sm",
                                            children: [
                                              "Author:",
                                              n("span", {
                                                class:
                                                  "ml-1 font-medium text-white",
                                                children: r.author,
                                              }),
                                            ],
                                          }),
                                        r.version &&
                                          n("p", {
                                            class:
                                              "mt-1 flex items-center text-gray-400 text-sm",
                                            children: [
                                              "Version:",
                                              n("span", {
                                                class:
                                                  "ml-1 font-medium text-white",
                                                children: r.version,
                                              }),
                                            ],
                                          }),
                                        r.description &&
                                          n("p", {
                                            class:
                                              "mt-1 text-gray-400 line-clamp-2 text-sm",
                                            children: r.description,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ),
                            })
                          : n(Y, {
                              class: "mt-4",
                              icon: xe,
                              title: "No Themes Found",
                              description:
                                "No WordPress themes found for this website.",
                            }),
                        n("div", {
                          class:
                            "mt-8 flex items-center font-display text-base font-bold text-yellow-500",
                          children: [
                            n("h3", {
                              children:
                                this.state.wordpress.plugins.length > 1
                                  ? "Plugins"
                                  : "Plugin",
                            }),
                            n("span", {
                              class: "ml-1",
                              children: [
                                "(",
                                this.state.wordpress.plugins.length,
                                ")",
                              ],
                            }),
                          ],
                        }),
                        this.state.wordpress.plugins.length
                          ? n("div", {
                              class: "mt-4 grid grid-cols-1 gap-2",
                              children: this.state.wordpress.plugins.map((r) =>
                                n(Ie, {
                                  class: "flex",
                                  children: [
                                    n("img", {
                                      class: "w-36 rounded-md",
                                      src: r.img || Yi,
                                      onError: (s) => {
                                        let a = s.target;
                                        a.dataset.fallback ||
                                          ((a.dataset.fallback = "true"),
                                          (a.src = Yi));
                                      },
                                    }),
                                    n("div", {
                                      class: "ml-4 flex-1",
                                      children: [
                                        n("h2", {
                                          class:
                                            "text-base text-white font-display font-medium",
                                          children: [
                                            r.name,
                                            r.premium
                                              ? n(Zi, {
                                                  class: "ml-2 text-xs p-1.5",
                                                  theme: "yellow",
                                                  children: "Premium",
                                                })
                                              : null,
                                          ],
                                        }),
                                        r.premium
                                          ? null
                                          : n(te, {
                                              children: [
                                                n("p", {
                                                  class:
                                                    "mt-2 flex items-center text-gray-400 text-sm",
                                                  children: [
                                                    "Rating:",
                                                    n("span", {
                                                      class:
                                                        "ml-1 font-medium text-white",
                                                      children: r.rating,
                                                    }),
                                                  ],
                                                }),
                                                n("p", {
                                                  class:
                                                    "mt-1 flex items-center text-gray-400 text-sm",
                                                  children: [
                                                    "Version:",
                                                    n("span", {
                                                      class:
                                                        "ml-1 font-medium text-white",
                                                      children: r.version,
                                                    }),
                                                  ],
                                                }),
                                                n("p", {
                                                  class:
                                                    "mt-1 text-sm text-gray-400 line-clamp-2",
                                                  children: r.description,
                                                }),
                                              ],
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              ),
                            })
                          : n(Y, {
                              class: "mt-4",
                              icon: xe,
                              title: "No Plugins Found",
                              description:
                                "No WordPress plugins found for this website.",
                            }),
                      ],
                    }))
              : (o = n(Y, {
                  class: "mt-4",
                  icon: xe,
                  title: "Not a WordPress Site",
                  description: `${this.props.extraProps.hostname} does not appear to be a WordPress site.`,
                })),
          n("div", {
            class: "mt-2 flex-1 flex flex-col border-t border-white/10",
            children: o,
          })
        );
      }
    },
    Xi = ws;
  function mu(e) {
    let t = _(
      "h-9 bg-gray-700 flex items-center rounded overflow-hidden text-sm font-body",
      e.class,
    );
    return n("div", {
      class: t,
      children: e.options.map((o) => {
        var a, i;
        let s =
          "flex-1 h-full flex items-center justify-center transition-colors hover:cursor-pointer select-none" +
          (e.value === o.value
            ? " text-white bg-sky-600"
            : " text-gray-300 hover:bg-gray-600 hover:text-white");
        return n(
          "div",
          {
            class: s,
            onClick: () => (e.onChange ? e.onChange(o.value) : null),
            "data-tooltip": (a = o.tooltip) == null ? void 0 : a.content,
            "data-tooltip-position":
              (i = o.tooltip) == null ? void 0 : i.position,
            children: o.label,
          },
          o.value,
        );
      }),
    });
  }
  var Zo = mu;
  function fu(e) {
    return e < 60
      ? `${e}s`
      : e < 3600
        ? `${Math.floor(e / 60)}m ${e % 60}s`
        : e < 86400
          ? `${Math.floor(e / 3600)}h ${Math.floor((e % 3600) / 60)}m`
          : `${Math.floor(e / 86400)}d ${Math.floor((e % 86400) / 3600)}h`;
  }
  function vu(e) {
    let t = new Set();
    return e.filter((o) => {
      let r = `${o.name}|${o.type}|${o.data}`;
      return t.has(r) ? !1 : (t.add(r), !0);
    });
  }
  function ee(e) {
    return e
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function wu(e) {
    let t = parseFloat(e);
    return isNaN(t) ? 0 : Math.round(t);
  }
  function bu(e) {
    let t = wu(e),
      o = '<span class="stars">';
    for (let r = 0; r < 5; r++)
      o +=
        r < t
          ? '<span class="star filled">\u2605</span>'
          : '<span class="star empty">\u2606</span>';
    return ((o += `<span class="rating-num">${ee(e)}</span></span>`), o);
  }
  function _u() {
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB0cmFuc2Zvcm09InJvdGF0ZSgwIDAgMCkiPgo8ZyBvcGFjaXR5PSIwLjQiPgo8cGF0aCBkPSJNMy4yNSA1LjVDMy4yNSA0LjI1NzM2IDQuMjU3MzYgMy4yNSA1LjUgMy4yNUgxOC41QzE5Ljc0MjYgMy4yNSAyMC43NSA0LjI1NzM2IDIwLjc1IDUuNVYxMS4yNUgzLjI1VjUuNVpNNi42OTcwNyA4QzYuNjk3MDcgOC40NDE4MyA3LjA1NTI0IDguOCA3LjQ5NzA3IDguOEg4LjQ5NzA3QzguOTM4OSA4LjggOS4yOTcwNyA4LjQ0MTgzIDkuMjk3MDcgOEM5LjI5NzA3IDcuNTU4MTcgOC45Mzg5IDcuMiA4LjQ5NzA3IDcuMkg3LjQ5NzA3QzcuMDU1MjQgNy4yIDYuNjk3MDcgNy41NTgxNyA2LjY5NzA3IDhaTTExLjQ5NTEgNy4yQzExLjA1MzMgNy4yIDEwLjY5NTEgNy41NTgxNyAxMC42OTUxIDhDMTAuNjk1MSA4LjQ0MTgzIDExLjA1MzMgOC44IDExLjQ5NTEgOC44SDEyLjQ5NTFDMTIuOTM2OSA4LjggMTMuMjk1MSA4LjQ0MTgzIDEzLjI5NTEgOEMxMy4yOTUxIDcuNTU4MTcgMTIuOTM2OSA3LjIgMTIuNDk1MSA3LjJIMTEuNDk1MVoiIGZpbGw9IiMzNDNDNTQiPjwvcGF0aD4KPHBhdGggZD0iTTMuMjUgMTIuNzVWMTguNUMzLjI1IDE5Ljc0MjYgNC4yNTczNiAyMC43NSA1LjUgMjAuNzVIMTguNUMxOS43NDI2IDIwLjc1IDIwLjc1IDE5Ljc0MjYgMjAuNzUgMTguNVYxMi43NUgzLjI1Wk03LjQ5ODA1IDE1LjJIOC40OTgwNUM4LjkzOTg3IDE1LjIgOS4yOTgwNSAxNS41NTgyIDkuMjk4MDUgMTZDOS4yOTgwNSAxNi40NDE4IDguOTM5ODcgMTYuOCA4LjQ5ODA1IDE2LjhINy40OTgwNUM3LjA1NjIyIDE2LjggNi42OTgwNSAxNi40NDE4IDYuNjk4MDUgMTZDNi42OTgwNSAxNS41NTgyIDcuMDU2MjIgMTUuMiA3LjQ5ODA1IDE1LjJaTTEwLjcwNDkgMTZDMTAuNzA0OSAxNS41NTgyIDExLjA2MzEgMTUuMiAxMS41MDQ5IDE1LjJIMTIuNTA0OUMxMi45NDY3IDE1LjIgMTMuMzA0OSAxNS41NTgyIDEzLjMwNDkgMTZDMTMuMzA0OSAxNi40NDE4IDEyLjk0NjcgMTYuOCAxMi41MDQ5IDE2LjhIMTEuNTA0OUMxMS4wNjMxIDE2LjggMTAuNzA0OSAxNi40NDE4IDEwLjcwNDkgMTZaIiBmaWxsPSIjMzQzQzU0Ij48L3BhdGg+CjwvZz4KPHBhdGggZD0iTTcuNDk3MjcgNy4yMDAyQzcuMDU1NDQgNy4yMDAyIDYuNjk3MjcgNy41NTgzNyA2LjY5NzI3IDguMDAwMkM2LjY5NzI3IDguNDQyMDIgNy4wNTU0NCA4LjgwMDIgNy40OTcyNyA4LjgwMDJIOC40OTcyN0M4LjkzOTA5IDguODAwMiA5LjI5NzI3IDguNDQyMDIgOS4yOTcyNyA4LjAwMDJDOS4yOTcyNyA3LjU1ODM3IDguOTM5MDkgNy4yMDAyIDguNDk3MjcgNy4yMDAySDcuNDk3MjdaIiBmaWxsPSIjMzQzQzU0Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xMC42OTUzIDguMDAwMkMxMC42OTUzIDcuNTU4MzcgMTEuMDUzNSA3LjIwMDIgMTEuNDk1MyA3LjIwMDJIMTIuNDk1M0MxMi45MzcxIDcuMjAwMiAxMy4yOTUzIDcuNTU4MzcgMTMuMjk1MyA4LjAwMDJDMTMuMjk1MyA4LjQ0MjAyIDEyLjkzNzEgOC44MDAyIDEyLjQ5NTMgOC44MDAySDExLjQ5NTNDMTEuMDUzNSA4LjgwMDIgMTAuNjk1MyA4LjQ0MjAyIDEwLjY5NTMgOC4wMDAyWiIgZmlsbD0iIzM0M0M1NCI+PC9wYXRoPgo8cGF0aCBkPSJNNi42OTgyNCAxNi4wMDAyQzYuNjk4MjQgMTUuNTU4NCA3LjA1NjQxIDE1LjIwMDIgNy40OTgyNCAxNS4yMDAySDguNDk4MjRDOC45NDAwNyAxNS4yMDAyIDkuMjk4MjQgMTUuNTU4NCA5LjI5ODI0IDE2LjAwMDJDOS4yOTgyNCAxNi40NDIgOC45NDAwNyAxNi44MDAyIDguNDk4MjQgMTYuODAwMkg3LjQ5ODI0QzcuMDU2NDEgMTYuODAwMiA2LjY5ODI0IDE2LjQ0MiA2LjY5ODI0IDE2LjAwMDJaIiBmaWxsPSIjMzQzQzU0Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xMS41MDUxIDE1LjIwMDJDMTEuMDYzMyAxNS4yMDAyIDEwLjcwNTEgMTUuNTU4NCAxMC43MDUxIDE2LjAwMDJDMTAuNzA1MSAxNi40NDIgMTEuMDYzMyAxNi44MDAyIDExLjUwNTEgMTYuODAwMkgxMi41MDUxQzEyLjk0NjkgMTYuODAwMiAxMy4zMDUxIDE2LjQ0MiAxMy4zMDUxIDE2LjAwMDJDMTMuMzA1MSAxNS41NTg0IDEyLjk0NjkgMTUuMjAwMiAxMi41MDUxIDE1LjIwMDJIMTEuNTA1MVoiIGZpbGw9IiMzNDNDNTQiPjwvcGF0aD4KPC9zdmc+";
  }
  function yu(e) {
    let t = {
      hosting:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
      tech: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      dns: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      ssl: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
      wordpress:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    };
    return t[e] || t.hosting;
  }
  function xu() {
    return `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
            --accent: #0091FF;
            --accent-subtle: #E8F4FF;
            --accent-border: #B8DBFF;
            --accent-dark: #0070CC;

            --surface: #ffffff;
            --surface-raised: #F7F8FA;
            --surface-sunken: #F0F2F5;

            --border: #E4E7EC;
            --border-subtle: #EEF0F3;

            --text-primary: #111827;
            --text-secondary: #4B5563;
            --text-tertiary: #9CA3AF;
            --text-inverse: #F9FAFB;

            --cover-bg: #0A0F1E;
            --cover-surface: rgba(15, 23, 42, 0.85);
            --cover-grid: rgba(255, 255, 255, 0.04);
            --cover-glow: rgba(0, 145, 255, 0.12);

            --green-bg: #ECFDF5;
            --green-border: #A7F3D0;
            --green-text: #059669;

            --amber-bg: #FFFBEB;
            --amber-border: #FDE68A;
            --amber-text: #D97706;

            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 12px;
            --radius-xl: 16px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--text-primary);
            background: var(--surface);
            font-size: 11px;
            line-height: 1.5;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            -webkit-font-smoothing: antialiased;
        }

        .cover {
            width: 100%;
            height: 100vh;
            min-height: 297mm;
            background: var(--cover-bg);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .cover-accent-bar {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--accent) 0%, #38BDF8 50%, var(--accent) 100%);
            z-index: 10;
        }

        .cover-grid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(var(--cover-grid) 1px, transparent 1px),
                linear-gradient(90deg, var(--cover-grid) 1px, transparent 1px);
            background-size: 32px 32px;
        }

        .cover-glow {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, var(--cover-glow) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .cover-content {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 40px;
        }

        .cover-label {
            display: inline-block;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--accent);
            margin-bottom: 28px;
        }

        .cover-title {
            font-size: 56px;
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -1.5px;
            margin-bottom: 12px;
        }

        .cover-title .white { color: var(--text-inverse); }
        .cover-title .accent { color: var(--accent); }

        .cover-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin: 32px 0;
        }

        .cover-divider-line {
            width: 40px;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
        }

        .cover-divider-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent);
        }

        .cover-hostname {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            font-weight: 500;
            color: #CBD5E1;
            background: var(--cover-surface);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: var(--radius-lg);
            padding: 12px 28px;
            margin-bottom: 24px;
            backdrop-filter: blur(8px);
        }

        .cover-hostname-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #34D399;
            flex-shrink: 0;
        }

        .cover-date {
            font-size: 12px;
            font-weight: 400;
            color: rgba(148, 163, 184, 0.7);
            letter-spacing: 0.3px;
        }

        .cover-footer {
            position: absolute;
            bottom: 32px;
            left: 0;
            right: 0;
            z-index: 2;
            text-align: center;
        }

        .cover-footer-brand {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 10px;
            font-weight: 500;
            color: rgba(100, 116, 139, 0.6);
            letter-spacing: 0.5px;
        }

        .cover-footer-sep {
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: rgba(100, 116, 139, 0.4);
        }

        .content {
            max-width: 210mm;
            margin: 0 auto;
            padding: 36px 24mm 48px;
        }

        .section-heading {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 36px;
            margin-bottom: 18px;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--text-primary);
        }

        .section-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: var(--radius-md);
            background: var(--accent-subtle);
            color: var(--accent);
            flex-shrink: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        .section-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: -0.3px;
        }

        .section-count {
            font-size: 10px;
            font-weight: 600;
            color: var(--text-tertiary);
            margin-left: auto;
            white-space: nowrap;
        }

        .sub-heading {
            font-size: 10px;
            font-weight: 700;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-top: 22px;
            margin-bottom: 10px;
            padding-left: 2px;
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 10.5px;
            margin-bottom: 8px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            overflow: hidden;
        }

        thead tr {
            background: var(--surface-raised);
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        th {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            text-align: left;
            padding: 10px 14px;
            border-bottom: 1px solid var(--border);
            background: var(--surface-raised);
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        th:not(:last-child) {
            border-right: 1px solid var(--border-subtle);
        }

        td {
            padding: 9px 14px;
            border-bottom: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            vertical-align: middle;
        }

        td:not(:last-child) {
            border-right: 1px solid var(--border-subtle);
        }

        tr:last-child td {
            border-bottom: none;
        }

        tbody tr:nth-child(even) {
            background: rgba(247, 248, 250, 0.5);
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        .col-label {
            font-weight: 600;
            color: var(--text-primary);
            width: 170px;
            white-space: nowrap;
        }

        .col-mono {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            color: var(--text-primary);
            word-break: break-all;
        }

        .col-bold {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .col-bold img {
            width: 18px;
            height: 18px;
            border-radius: 3px;
        }

        .col-center {
            text-align: center;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            font-size: 8px;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 100px;
            letter-spacing: 0.3px;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        .badge-confidence {
            background: var(--accent-subtle);
            border: 1px solid var(--accent-border);
            color: var(--accent-dark);
        }

        .badge-premium {
            background: var(--amber-bg);
            border: 1px solid var(--amber-border);
            color: var(--amber-text);
            font-size: 7px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
        }

        .stars {
            display: inline-flex;
            align-items: center;
            gap: 1px;
        }

        .star {
            font-size: 10px;
            line-height: 1;
        }

        .star.filled { color: #F59E0B; }
        .star.empty { color: var(--border); }

        .rating-num {
            font-size: 9px;
            font-weight: 500;
            color: var(--text-tertiary);
            margin-left: 5px;
        }

        .empty-note {
            font-style: italic;
            font-size: 11px;
            color: var(--text-tertiary);
            padding: 12px 14px;
            background: var(--surface-raised);
            border-radius: var(--radius-md);
            border: 1px dashed var(--border);
        }

        @media print {

            @page cover-page {
                size: A4;
                margin: 0;
            }

            @page {
                size: A4;
                margin: 22mm 22mm 26mm 22mm;
            }

            body {
                margin: 0;
                padding: 0;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            .cover {
                page: cover-page;
                width: 210mm;
                height: 297mm;
                min-height: 0;
                max-height: 297mm;
                overflow: hidden;
                break-after: page;
            }

            .content {
                padding: 0;
            }

            .section-heading {
                break-after: avoid;
            }

            .sub-heading {
                break-after: avoid;
            }

            ${!D.isFirefox && "table {page-break-inside: auto;}"}

            thead {
                display: table-header-group;
            }

            ${
              D.isFirefox
                ? `
                    tr {
                        page-break-inside: auto;
                        break-inside: auto;
                    }
                    
                    td, th, .col-label, .col-mono, .col-bold {
                        color: #000000 !important;
                    }
                `
                : `
                    tr {
                        break-inside: avoid;
                    }
                `
            }

            .section-icon,
            .badge,
            th,
            thead tr,
            tbody tr:nth-child(even) {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            ${
              D.isFirefox &&
              `
                    .cover-glow,
                    .cover-grid {
                        display: none !important;
                    }

                    .cover-hostname {
                        backdrop-filter: none;
                        -webkit-backdrop-filter: none;
                        background: rgba(15, 23, 42, 0.95);
                    }

                    /*
                    * FIX 3: STRICT TABLE RESET
                    * border-collapse: separate (used for rounded corners) causes 
                    * content clipping in Firefox at page breaks.
                    * We force 'collapse' and remove border-radius for print.
                    */
                    table {
                        overflow: visible !important;
                        border-radius: 0 !important;
                        page-break-inside: auto;
                        break-inside: auto;
                        border-collapse: collapse !important;
                        border: 1px solid #ccc; /* Simple fallback border */
                    }

                    .print-group {
                        page-break-inside: auto;
                        break-inside: auto;
                        display: block;
                    }

                    td, th {
                        page-break-inside: auto;
                        break-inside: auto;
                        border: 1px solid #eee; /* Ensure grid lines are visible */
                    }

                    .section-heading + .print-group,
                    .section-heading + table {
                        page-break-before: avoid;
                        break-before: avoid;
                    }
                `
            }
        }
    `;
  }
  function Su(e) {
    let t = Object.entries(e);
    if (!t.length) return "";
    let o = uo("Hosting", "hosting", `${t.length} properties`);
    ((o += "<table>"),
      (o += "<thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>"));
    for (let [r, s] of t)
      o += `<tr>
            <td class="col-label">${ee(r)}</td>
            <td class="col-mono">${ee(String(s))}</td>
        </tr>`;
    return ((o += "</tbody></table>"), o);
  }
  function ku(e) {
    let t = Object.entries(e);
    if (!t.length) return "";
    let o = t.reduce((s, [, a]) => s + a.length, 0),
      r = uo("Technologies", "tech", `${o} detected`);
    for (let [s, a] of t) {
      ((r += `<div class="sub-heading">${ee(s)} (${a.length})</div>`),
        (r += "<table>"),
        (r +=
          "<thead><tr><th>Technology</th><th>Version</th><th>Confidence</th></tr></thead><tbody>"));
      for (let i of a) {
        let l = `<img src="${i.icon ? `https://raw.githubusercontent.com/enthec/webappanalyzer/main/src/images/icons/${i.icon}` : _u()}" />`;
        r += `<tr>
                <td class="col-bold">${l} ${ee(i.name)}</td>
                <td class="col-center col-mono">${ee(i.version || "\u2014")}</td>
                <td class="col-center"><span class="badge badge-confidence">${ee(i.confidence.toString())}%</span></td>
            </tr>`;
      }
      r += "</tbody></table>";
    }
    return r;
  }
  function Cu(e) {
    let t = Object.entries(e);
    if (!t.length) return "";
    let o = t.reduce((s, [, a]) => s + a.length, 0),
      r = uo("DNS Records", "dns", `${o} records`);
    for (let [s, a] of t) {
      let i = vu(a);
      ((r += `<div class="sub-heading">${ee(s)} Records (${i.length})</div>`),
        (r += "<table>"),
        (r +=
          "<thead><tr><th>Name</th><th>Value</th><th>TTL</th></tr></thead><tbody>"));
      for (let l of i)
        r += `<tr>
                <td class="col-mono">${ee(l.name)}</td>
                <td class="col-mono">${ee(l.data)}</td>
                <td class="col-center" style="white-space:nowrap">${ee(fu(l.TTL))}</td>
            </tr>`;
      r += "</tbody></table>";
    }
    return r;
  }
  function Mu(e) {
    let t = Object.entries(e);
    if (!t.length) return "";
    let o = uo("SSL / TLS", "ssl", `${t.length} groups`);
    for (let [r, s] of t) {
      ((o += `<div class="sub-heading">${ee(r)}</div>`),
        (o += "<table>"),
        (o +=
          "<thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>"));
      for (let [a, i] of Object.entries(s))
        o += `<tr>
                <td class="col-label">${ee(a)}</td>
                <td class="col-mono">${ee(String(i))}</td>
            </tr>`;
      o += "</tbody></table>";
    }
    return o;
  }
  function Iu(e) {
    let t = e.themes.length + e.plugins.length,
      o = uo("WordPress", "wordpress", `${t} items`);
    if (
      ((o += `<div class="sub-heading">Themes (${e.themes.length})</div>`),
      e.themes.length)
    ) {
      ((o += "<table>"),
        (o +=
          "<thead><tr><th>Theme</th><th>Author</th><th>Version</th></tr></thead><tbody>"));
      for (let r of e.themes)
        o += `<tr>
                <td class="col-bold">${ee(r.name)}</td>
                <td>${ee(r.author || "\u2014")}</td>
                <td class="col-center col-mono">${ee(r.version || "\u2014")}</td>
            </tr>`;
      o += "</tbody></table>";
    } else o += '<p class="empty-note">No themes detected.</p>';
    if (
      ((o += `<div class="sub-heading">Plugins (${e.plugins.length})</div>`),
      e.plugins.length)
    ) {
      ((o += "<table>"),
        (o +=
          "<thead><tr><th>Plugin</th><th>Version</th><th>Rating</th><th></th></tr></thead><tbody>"));
      for (let r of e.plugins) {
        let s = !r.premium && r.rating ? bu(r.rating) : "\u2014",
          a = r.premium
            ? '<span class="badge badge-premium">Premium</span>'
            : "";
        o += `<tr>
                <td class="col-bold">${ee(r.name)}</td>
                <td class="col-center col-mono">${ee(r.version || "\u2014")}</td>
                <td class="col-center">${s}</td>
                <td class="col-center">${a}</td>
            </tr>`;
      }
      o += "</tbody></table>";
    } else o += '<p class="empty-note">No plugins detected.</p>';
    return o;
  }
  function uo(e, t, o) {
    return `
        <div class="section-heading">
            <div class="section-icon">${yu(t)}</div>
            <div class="section-title">${ee(e)}</div>
            ${o ? `<div class="section-count">${ee(o)}</div>` : ""}
        </div>
    `;
  }
  function Pu(e, t, o) {
    let r = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      s = "";
    return (
      o.hosting &&
        t.hosting &&
        Object.keys(t.hosting).length &&
        (s += Su(t.hosting)),
      o.tech && t.tech && Object.keys(t.tech).length && (s += ku(t.tech)),
      o.dns && t.dns && Object.keys(t.dns).length && (s += Cu(t.dns)),
      o.ssl && t.ssl && Object.keys(t.ssl).length && (s += Mu(t.ssl)),
      o.wordpress &&
        t.wordpress &&
        (t.wordpress.themes.length || t.wordpress.plugins.length) &&
        (s += Iu(t.wordpress)),
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Stack Report \u2014 ${ee(e)}</title>
    <style>${xu()}</style>
</head>
<body>

    <!-- Cover Page -->
    <div class="cover">
        <div class="cover-accent-bar"></div>
        <div class="cover-grid"></div>
        <div class="cover-glow"></div>

        <div class="cover-content">
            <div class="cover-label">Website Analysis</div>
            <div class="cover-title">
                <span class="white">Site </span><span class="accent">Stack</span><br>
                <span class="white">Report</span>
            </div>

            <div class="cover-divider">
                <span class="cover-divider-line"></span>
                <span class="cover-divider-dot"></span>
                <span class="cover-divider-line"></span>
            </div>

            <div class="cover-hostname">
                <span class="cover-hostname-dot"></span>
                ${ee(e)}
            </div>
            <br>
            <div class="cover-date">${ee(r)}</div>
        </div>

        <div class="cover-footer">
            <div class="cover-footer-brand">
                Powered by Hoverify
                <span class="cover-footer-sep"></span>
                tryhoverify.com
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="content">
        ${s}
    </div>

</body>
</html>`
    );
  }
  var Tu = { generateSiteStackHTML: Pu },
    Ji = Tu;
  var bs = class extends T {
      constructor(o) {
        super(o);
        this.listener = null;
        this.hostingRef = le();
        this.techRef = le();
        this.dnsRef = le();
        this.sslRef = le();
        this.wordPressRef = le();
        this.onTabChange = (o) => {
          this.setState({ tab: o });
        };
        this.openExportPopup = () => {
          this.setState({ export_popup: !0 });
        };
        this.closeExportPopup = () => {
          this.setState({ export_popup: !1 });
        };
        this.changeExportOptions = (o) => {
          this.setState((r) => {
            let s = r.export_options;
            return ((s[o] = !s[o]), { export_options: s });
          });
        };
        this.onFormatChange = (o) => {
          this.setState({ export_format: o });
        };
        this.export = async () => {
          (this.setState({
            exporting: !0,
            export_data_status: {
              hosting: !1,
              tech: !1,
              dns: !1,
              ssl: !1,
              wordpress: !1,
            },
          }),
            this.state.export_options.hosting &&
              this.hostingRef.current &&
              !this.hostingRef.current.state.loading &&
              this.hostingRef.current.getHosting(this.state.hostname),
            this.state.export_options.tech &&
              this.techRef.current &&
              !this.techRef.current.state.loading &&
              this.techRef.current.getTech(),
            this.state.export_options.dns &&
              this.dnsRef.current &&
              !this.dnsRef.current.state.loading &&
              this.dnsRef.current.getDNS(this.state.hostname),
            this.state.export_options.ssl &&
              this.sslRef.current &&
              !this.sslRef.current.state.loading &&
              this.sslRef.current.getSSL(this.state.hostname),
            this.state.export_options.wordpress &&
              this.wordPressRef.current &&
              !this.wordPressRef.current.state.loading &&
              this.wordPressRef.current.getWordPress());
        };
        this.exportJSON = (o) => {
          let r = JSON.stringify(o, null, 4);
          y.send(w.downloader.download, {
            content: { src: r, type: "application/json;charset=utf-8" },
            filename: `site_stack-[${this.state.hostname}].json`,
          });
        };
        this.exportPDF = (o) => {
          try {
            let r = Ji.generateSiteStackHTML(
                this.state.hostname,
                o,
                this.state.export_options,
              ),
              s = new Blob([r], { type: "text/html" }),
              a = URL.createObjectURL(s);
            (chrome.tabs.create({ url: a }), setTimeout(window.close, 100));
          } catch (r) {
            (console.error("PDF export failed:", r),
              k.error("Failed to generate PDF report"));
          }
        };
        this.addExportData = (o, r) => {
          !this.state.exporting ||
            this.setState(
              (s) => {
                let a = s.export_data_status;
                return ((a[o] = !0), { export_data_status: a });
              },
              () => {
                var s, a, i, l, c;
                if (
                  this.state.export_options.hosting ===
                    this.state.export_data_status.hosting &&
                  this.state.export_options.tech ===
                    this.state.export_data_status.tech &&
                  this.state.export_options.dns ===
                    this.state.export_data_status.dns &&
                  this.state.export_options.ssl ===
                    this.state.export_data_status.ssl &&
                  this.state.export_options.wordpress ===
                    this.state.export_data_status.wordpress
                ) {
                  let u = {
                    hosting:
                      ((s = this.hostingRef.current) == null
                        ? void 0
                        : s.state.hosting) || null,
                    tech:
                      ((a = this.techRef.current) == null
                        ? void 0
                        : a.state.tech) || null,
                    dns:
                      ((i = this.dnsRef.current) == null
                        ? void 0
                        : i.state.dns) || null,
                    ssl:
                      ((l = this.sslRef.current) == null
                        ? void 0
                        : l.state.ssl) || null,
                    wordpress:
                      ((c = this.wordPressRef.current) == null
                        ? void 0
                        : c.state.wordpress) || null,
                  };
                  (this.state.export_format === "pdf"
                    ? this.exportPDF(u)
                    : this.exportJSON(u),
                    this.setState({ exporting: !1 }),
                    this.closeExportPopup(),
                    k.success("Export Done"));
                }
              },
            );
        };
        this.setHosting = (o, r) => {
          !this.hostingRef.current ||
            (this.hostingRef.current.setHosting(o, r),
            this.addExportData("hosting", o));
        };
        this.setTech = (o, r) => {
          !this.techRef.current ||
            (this.techRef.current.setTech(o, r), this.addExportData("tech", o));
        };
        this.setDNS = (o, r) => {
          !this.dnsRef.current ||
            (this.dnsRef.current.setDNS(o, r), this.addExportData("dns", o));
        };
        this.setSSL = (o, r) => {
          !this.sslRef.current ||
            (this.sslRef.current.setSSL(o, r), this.addExportData("ssl", o));
        };
        this.setWordPress = (o, r) => {
          !this.wordPressRef.current ||
            (this.wordPressRef.current.setWordPress(o, r),
            this.addExportData("wordpress", o));
        };
        this.onMessage = (o, r) => {
          switch (o) {
            case w.site_stack.hosting.set:
              this.setHosting(r.result, r.error);
              break;
            case w.site_stack.tech.set:
              this.setTech(r.result, r.error);
              break;
            case w.site_stack.dns.set:
              this.setDNS(r.result, r.error);
              break;
            case w.site_stack.ssl.set:
              this.setSSL(r.result, r.error);
              break;
            case w.site_stack.wordpress.set:
              this.setWordPress(r.result, r.error);
              break;
          }
        };
        let r = new URL(p.tab.value.url).hostname;
        (p.tab.value.url.startsWith("http") || (r = ""),
          (this.state = {
            tab: "Hosting",
            hostname: r,
            export_popup: !1,
            export_format: "pdf",
            export_options: {
              hosting: !0,
              tech: !0,
              dns: !0,
              ssl: !0,
              wordpress: !0,
            },
            export_data_status: {
              hosting: !1,
              tech: !1,
              dns: !1,
              ssl: !1,
              wordpress: !1,
            },
            exporting: !1,
          }));
      }
      componentDidMount() {
        (q.resizePopup(500, 600), (this.listener = y.listen(this.onMessage)));
      }
      componentWillUnmount() {
        (y.neglect(this.listener), (this.listener = null));
      }
      render() {
        return n($, {
          children: [
            n(me, {
              open: this.state.export_popup,
              winClass: "max-w-xs",
              children: [
                n(Ce, { onClose: this.closeExportPopup, children: "Export" }),
                n(ge, {
                  class: "grid grid-cols-1 gap-4",
                  children: [
                    n(De, {
                      checked: this.state.export_options.hosting,
                      label: "Hosting",
                      disabled: this.state.exporting,
                      onChange: () => this.changeExportOptions("hosting"),
                    }),
                    n(De, {
                      checked: this.state.export_options.tech,
                      label: "Tech",
                      disabled: this.state.exporting,
                      onChange: () => this.changeExportOptions("tech"),
                    }),
                    n(De, {
                      checked: this.state.export_options.dns,
                      label: "DNS",
                      disabled: this.state.exporting,
                      onChange: () => this.changeExportOptions("dns"),
                    }),
                    n(De, {
                      checked: this.state.export_options.ssl,
                      label: "SSL",
                      disabled: this.state.exporting,
                      onChange: () => this.changeExportOptions("ssl"),
                    }),
                    n(De, {
                      checked: this.state.export_options.wordpress,
                      label: "WordPress",
                      disabled: this.state.exporting,
                      onChange: () => this.changeExportOptions("wordpress"),
                    }),
                    D.isFirefox && this.state.export_format === "pdf"
                      ? n("span", {
                          class: "text-xs text-gray-400",
                          children:
                            "For better PDF generation, use Chrome instead of Firefox.",
                        })
                      : null,
                  ],
                }),
                n(_e, {
                  children: [
                    n(Zo, {
                      class: "h-9 w-24",
                      value: this.state.export_format,
                      options: [
                        { value: "pdf", label: "PDF" },
                        { value: "json", label: "JSON" },
                      ],
                      onChange: this.onFormatChange,
                    }),
                    n(Be, {}),
                    n(B, {
                      theme: "blue",
                      icon: n(br, { class: "w-5 h-5" }),
                      value: "Export",
                      loading: this.state.exporting,
                      onClick: this.export,
                    }),
                  ],
                }),
              ],
            }),
            n(ne, {
              title: "Site Stack",
              description: this.state.hostname,
              children: n(B, {
                theme: "blue",
                icon: n(br, { class: "w-5 h-5" }),
                value: "Export",
                onClick: this.openExportPopup,
              }),
            }),
            n(ae, {
              class: "p-0 pt-3",
              children: n(qi, {
                active: this.state.tab,
                onTabChange: this.onTabChange,
                children: [
                  n($t, {
                    tabRef: this.hostingRef,
                    name: "Hosting",
                    component: $i,
                    extraProps: { hostname: this.state.hostname },
                  }),
                  n($t, {
                    tabRef: this.techRef,
                    name: "Tech",
                    component: Ki,
                    extraProps: { hostname: this.state.hostname },
                  }),
                  n($t, {
                    tabRef: this.dnsRef,
                    name: "DNS",
                    component: Wi,
                    extraProps: { hostname: this.state.hostname },
                  }),
                  n($t, {
                    tabRef: this.sslRef,
                    name: "SSL",
                    component: Gi,
                    extraProps: { hostname: this.state.hostname },
                  }),
                  n($t, {
                    tabRef: this.wordPressRef,
                    name: "WordPress",
                    component: Xi,
                    extraProps: { hostname: this.state.hostname },
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    el = bs;
  U();
  function Eu(e) {
    let t = _(
      "font-body text-sm text-slate-400 hover:text-sky-500 transition-colors cursor-pointer",
      e.class,
    );
    return n("div", {
      class: t,
      onClick: () => {
        e.url && y.send(w.window.open, { url: e.url, options: {} });
      },
      children: e.children,
    });
  }
  var _s = Eu;
  async function Nu(e, t) {
    let { data: o, error: r } = await S(d.get(d.Schema.library.buffer));
    if (r) throw r;
    let s = zo.random(20);
    o[s] = { project: e, items: t };
    let { error: a } = await S(d.store(d.Schema.library.buffer, o));
    if (r) throw a;
    return s;
  }
  async function Au(e, t) {
    let { data: o, error: r } = await S(d.get(d.Schema.library.projects));
    if (r) throw r;
    o.push({ id: e, name: t });
    let { error: s } = await S(d.store(d.Schema.library.projects, o));
    if (s) throw s;
  }
  async function Lu(e, t) {
    let { data: o, error: r } = await S(d.get(d.Schema.library.projects));
    if (r) throw r;
    let s = o.find((i) => i.id === e);
    if (!s) throw new Error("Project not found!");
    s.name = t;
    let { error: a } = await S(d.store(d.Schema.library.projects, o));
    if (a) throw a;
  }
  async function Du(e) {
    let { data: t, error: o } = await S(d.get(d.Schema.library.projects));
    if (o) throw o;
    let r = t.findIndex((a) => a.id === e);
    if (r === -1) throw new Error("Project not found!");
    t.splice(r, 1);
    let { error: s } = await S(d.store(d.Schema.library.projects, t));
    if (s) throw s;
  }
  var Ru = {
      storeInBuffer: Nu,
      createProject: Au,
      renameProject: Lu,
      deleteProject: Du,
    },
    Qo = Ru;
  var Ae = "https://api.tryhoverify.com/app";
  async function ho() {
    let { data: e, error: t } = await S(d.get(d.Schema.auth.token));
    return t ? "" : e;
  }
  async function Yo() {
    (await d.remove(d.Schema.auth.token),
      await d.remove(d.Schema.auth.activation_name),
      await d.remove(d.Schema.auth.renew_message),
      await d.remove(d.Schema.auth.integration),
      await d.remove(d.Schema.library.projects));
  }
  async function zu(e, t, o) {
    let r = new URLSearchParams();
    (r.append("key", e),
      r.append("email", t),
      r.append("device_name", o),
      r.append("os", D.os.name),
      r.append("os_version", D.os.version.toString()),
      r.append("browser", D.browser.name),
      r.append("browser_version", D.browser.version.toString()));
    try {
      let a = await (
        await fetch(`${Ae}/activate`, {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: r,
        })
      ).json();
      if (a.status === ":)")
        return (
          await d.store(d.Schema.auth.token, a.message.token),
          await d.store(d.Schema.auth.activation_name, o),
          await d.store(d.Schema.auth.renew_message, !1),
          await d.store(d.Schema.auth.beta, a.message.beta),
          a.message.integration
            ? await d.store(d.Schema.auth.integration, {
                provider: a.message.integration.provider,
                access_token: a.message.integration.access_token,
                expiry: new Date(
                  Date.now() + a.message.integration.expires_in * 1e3,
                ).toISOString(),
                name: a.message.integration.name,
                email: a.message.integration.email,
                profile_picture: a.message.integration.profile_picture,
                folder_id: a.message.integration.folder_id,
                re_auth: a.message.integration.re_auth,
              })
            : await d.store(d.Schema.auth.integration, null),
          await d.store(
            d.Schema.library.projects,
            a.message.library.projects ? a.message.library.projects : [],
          ),
          a.message.token
        );
      throw new Error(a.error.message);
    } catch (s) {
      throw s;
    }
  }
  async function ju() {
    // BYPASS FOR TESTING: skip real checkup, always report auth OK
    return (console.log("[AUTH CHECKUP] BYPASSED FOR TESTING"), !0);
    /* original checkup disabled for testing
    let { data: e, error: t } = await S(d.get(d.Schema.auth.integration));
    try {
      let o = await ho(),
        r = await d.get(d.Schema.auth.activation_name);
      if (!o || !r)
        return (console.log("[AUTH CHECKUP] NO CREDENTIALS FOUND"), !1);
      let s = await fetch(`${Ae}/checkup`, {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${o}`,
        },
      });
      if (!s.ok)
        throw s.status === 401 || s.status === 403
          ? (await Yo(), new Error("[AUTH CHECKUP] UNAUTHORIZED"))
          : new Error(`server error: ${s.status}`);
      let a = await s.json();
      if (a.status === ":)") {
        if (a.message.expired) throw (await Yo(), new Error("license expired"));
        return (
          console.log("[AUTH CHECKUP] OK"),
          await d.store(d.Schema.auth.token, a.message.token),
          await d.store(d.Schema.auth.renew_message, a.message.renew_message),
          await d.store(d.Schema.auth.beta, a.message.beta),
          a.message.integration
            ? await d.store(d.Schema.auth.integration, {
                provider: a.message.integration.provider,
                access_token: (e == null ? void 0 : e.access_token) || "",
                expiry: (e == null ? void 0 : e.expiry) || "",
                name: a.message.integration.name,
                email: a.message.integration.email,
                profile_picture: a.message.integration.profile_picture,
                folder_id: a.message.integration.folder_id,
                re_auth: a.message.integration.re_auth,
              })
            : await d.store(d.Schema.auth.integration, null),
          await d.store(
            d.Schema.library.projects,
            a.message.library.projects ? a.message.library.projects : [],
          ),
          !0
        );
      } else throw (await Yo(), new Error(a.error.message));
    } catch (o) {
      if (o.message === "Failed to fetch")
        return (console.log("[AUTH CHECKUP] NETWORK ERROR"), !0);
      throw o;
    }
    */
  }
  async function Hu() {
    try {
      let e = await ho();
      if (!e) throw new Error("token not found");
      let o = await (
        await fetch(`${Ae}/deactivate`, {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: `Bearer ${e}`,
          },
        })
      ).json();
      if (o.status === ":)") await Yo();
      else throw new Error(o.error.message);
    } catch (e) {
      throw e;
    }
  }
  async function Bu() {
    try {
      let e = await ho();
      if (!e) throw new Error("token not found");
      let o = await (
        await fetch(`${Ae}/device_name`, {
          method: "GET",
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: `Bearer ${e}`,
          },
        })
      ).json();
      if (o.status === ":)")
        return (
          await d.store(d.Schema.auth.activation_name, o.message.device_name),
          o.message.device_name
        );
      throw new Error(o.error.message);
    } catch (e) {
      throw e;
    }
  }
  async function Ou(e) {
    try {
      let t = await ho();
      if (!t) throw new Error("token not found");
      let o = new URLSearchParams();
      o.append("device_name", e);
      let s = await (
        await fetch(`${Ae}/change_device_name`, {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            authorization: `Bearer ${t}`,
          },
          body: o,
        })
      ).json();
      if (s.status === ":)") await d.store(d.Schema.auth.activation_name, e);
      else throw new Error(s.error.message);
    } catch (t) {
      throw t;
    }
  }
  async function Vu(e) {
    let { data: t, error: o } = await S(d.get(d.Schema.auth.token));
    if (o || !t) throw new Error("token not found");
    let r = new URLSearchParams();
    (r.append("code", e),
      r.append("redirect_uri", f.identity.getRedirectURL()));
    let { data: s, error: a } = await S(
      fetch(`${Ae}/integrate`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${t}`,
        },
        body: r,
      }),
    );
    if (a) throw new Error(a.message);
    let { data: i, error: l } = await S(s.json());
    if (l) throw new Error(l.message);
    if (i.status === ":)") {
      let { error: c } = await S(
        d.store(d.Schema.auth.integration, {
          provider: i.message.provider,
          access_token: i.message.access_token,
          expiry: new Date(
            Date.now() + i.message.expires_in * 1e3,
          ).toISOString(),
          name: i.message.name,
          email: i.message.email,
          profile_picture: i.message.profile_picture,
          folder_id: i.message.folder_id,
          re_auth: !1,
        }),
      );
      if (c) throw new Error(c.message);
      await d.store(d.Schema.library.projects, i.message.projects);
    } else throw new Error(i.error.message);
  }
  async function lt(e) {
    if (e.status === ":)") return e.message;
    throw e.error.message === "reauth"
      ? (await d.store(d.Schema.auth.integration, {
          re_auth: !0,
          provider: 0,
          access_token: "",
          expiry: "",
          name: "",
          email: "",
          profile_picture: "",
          folder_id: "",
        }),
        new Error("reauth"))
      : new Error(e.error.message);
  }
  async function Uu() {
    let { data: e, error: t } = await S(d.get(d.Schema.auth.token));
    if (t || !e) throw new Error("token not found");
    let { data: o, error: r } = await S(d.get(d.Schema.auth.integration));
    if (r) throw new Error(r.message);
    if (!o) throw new Error("integration not found");
    let { data: s, error: a } = await S(
      fetch(`${Ae}/integration/refresh`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${e}`,
        },
      }),
    );
    if (a) throw new Error(a.message);
    let { data: i, error: l } = await S(s.json());
    if (l) throw new Error(l.message);
    let { data: c, error: u } = await S(lt(i));
    if (u && u.message === "reauth") return { data: "", re_auth: !0 };
    if (u) throw new Error(u.message);
    return (
      await S(
        d.store(d.Schema.auth.integration, {
          provider: o.provider,
          access_token: c.access_token,
          expiry: new Date(Date.now() + c.expires_in * 1e3).toISOString(),
          name: o.name,
          email: o.email,
          profile_picture: o.profile_picture,
          folder_id: o.folder_id,
          re_auth: !1,
        }),
      ),
      { data: c.access_token, re_auth: !1 }
    );
  }
  async function Fu(e) {
    let { data: t, error: o } = await S(d.get(d.Schema.auth.token));
    if (o || !t) throw new Error("token not found");
    let r = new URLSearchParams();
    r.append("name", e);
    let { data: s, error: a } = await S(
      fetch(`${Ae}/library/project/create`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${t}`,
        },
        body: r,
      }),
    );
    if (a) throw new Error(a.message);
    let { data: i, error: l } = await S(s.json());
    if (l) throw new Error(l.message);
    let { data: c, error: u } = await S(lt(i));
    if (u && u.message === "reauth") return { data: "", re_auth: !0 };
    if (u) throw new Error(u.message);
    return (await Qo.createProject(c.id, c.name), { data: c.id, re_auth: !1 });
  }
  async function qu(e, t) {
    let { data: o, error: r } = await S(d.get(d.Schema.auth.token));
    if (r || !o) throw new Error("token not found");
    let s = new URLSearchParams();
    (s.append("project_id", e), s.append("name", t));
    let { data: a, error: i } = await S(
      fetch(`${Ae}/library/project/rename`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${o}`,
        },
        body: s,
      }),
    );
    if (i) throw new Error(i.message);
    let { data: l, error: c } = await S(a.json());
    if (c) throw new Error(c.message);
    let { error: u } = await S(lt(l));
    if (u && u.message === "reauth") return { data: void 0, re_auth: !0 };
    if (u) throw new Error(u.message);
    return (await Qo.renameProject(e, t), { data: void 0, re_auth: !1 });
  }
  async function $u(e) {
    let { data: t, error: o } = await S(d.get(d.Schema.auth.token));
    if (o || !t) throw new Error("token not found");
    let r = new URLSearchParams();
    r.append("project_id", e);
    let { data: s, error: a } = await S(
      fetch(`${Ae}/library/project/delete`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${t}`,
        },
        body: r,
      }),
    );
    if (a) throw new Error(a.message);
    let { data: i, error: l } = await S(s.json());
    if (l) throw new Error(l.message);
    let { error: c } = await S(lt(i));
    if (c && c.message === "reauth") return { data: void 0, re_auth: !0 };
    if (c) throw new Error(c.message);
    return (await Qo.deleteProject(e), { data: void 0, re_auth: !1 });
  }
  async function Ku(e, t, o, r, s) {
    let { data: a, error: i } = await S(d.get(d.Schema.auth.token));
    if (i || !a) throw new Error("token not found");
    let l = new URLSearchParams();
    (l.append("file_id", e),
      l.append("project_id", t),
      l.append("name", o),
      l.append("mime_type", r),
      l.append("content", s));
    let { data: c, error: u } = await S(
      fetch(`${Ae}/library/project/upload`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${a}`,
        },
        body: l,
      }),
    );
    if (u) throw new Error(u.message);
    let { data: g, error: h } = await S(c.json());
    if (h) throw new Error(h.message);
    let { error: b } = await S(lt(g));
    if (b && b.message === "reauth") return { data: void 0, re_auth: !0 };
    if (b) throw new Error(b.message);
    return { data: void 0, re_auth: !1 };
  }
  async function Wu(e, t = 0) {
    let { data: o, error: r } = await S(d.get(d.Schema.auth.token));
    if (r || !o) throw new Error("token not found");
    let { data: s, error: a } = await S(
      fetch(`${Ae}/library/project/${e}/files/${t}`, {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${o}`,
        },
      }),
    );
    if (a) throw new Error(a.message);
    let { data: i, error: l } = await S(s.json());
    if (l) throw new Error(l.message);
    let { error: c } = await S(lt(i));
    if (c && c.message === "reauth")
      return { data: { files: [], end: !1 }, re_auth: !0 };
    if (c) throw new Error(c.message);
    return {
      data: { files: i.message.files, end: i.message.end },
      re_auth: !1,
    };
  }
  async function Gu(e, t) {
    let { data: o, error: r } = await S(d.get(d.Schema.auth.token));
    if (r || !o) throw new Error("token not found");
    let s = new URLSearchParams();
    (s.append("file_id", e), s.append("name", t));
    let { data: a, error: i } = await S(
      fetch(`${Ae}/library/file/rename`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${o}`,
        },
        body: s,
      }),
    );
    if (i) throw new Error(i.message);
    let { data: l, error: c } = await S(a.json());
    if (c) throw new Error(c.message);
    let { error: u } = await S(lt(l));
    if (u && u.message === "reauth") return { data: void 0, re_auth: !0 };
    if (u) throw new Error(u.message);
    return { data: void 0, re_auth: !1 };
  }
  async function Zu(e) {
    let { data: t, error: o } = await S(d.get(d.Schema.auth.token));
    if (o || !t) throw new Error("token not found");
    let r = new URLSearchParams();
    r.append("file_id", e);
    let { data: s, error: a } = await S(
      fetch(`${Ae}/library/file/delete`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${t}`,
        },
        body: r,
      }),
    );
    if (a) throw new Error(a.message);
    let { data: i, error: l } = await S(s.json());
    if (l) throw new Error(l.message);
    let { error: c } = await S(lt(i));
    if (c && c.message === "reauth") return { data: void 0, re_auth: !0 };
    if (c) throw new Error(c.message);
    return { data: void 0, re_auth: !1 };
  }
  var Qu = {
      getToken: ho,
      login: zu,
      checkup: ju,
      deactivate: Hu,
      deviceName: Bu,
      changeDeviceName: Ou,
      integrate: Vu,
      refreshIntegration: Uu,
      library: {
        createProject: Fu,
        renameProject: qu,
        deleteProject: $u,
        upload: Ku,
        getFiles: Wu,
        renameFile: Gu,
        deleteFile: Zu,
      },
    },
    Pe = Qu;
  function ys(e) {
    return e.code.startsWith("Key")
      ? e.code.slice(3)
      : e.code.startsWith("Digit")
        ? e.code.slice(5)
        : e.code;
  }
  function Yu(e, t = !1) {
    let o = (r) => {
      let s = null,
        a = ys(r);
      ((s = xs(a)), e(s, r));
    };
    return (document.addEventListener("keydown", o, t), o);
  }
  function Xu(e, t = !1) {
    let o = (r) => {
      let s = null,
        a = ys(r);
      ((s = xs(a)), e(s, r));
    };
    return (document.addEventListener("keyup", o, t), o);
  }
  function Ju(e, t = !1) {
    document.removeEventListener("keydown", e, t);
  }
  function ed(e, t = !1) {
    document.removeEventListener("keyup", e, t);
  }
  function xs(e) {
    let t = null;
    return (
      e === "Escape" || e === "Esc"
        ? (t = "Esc")
        : e === "Enter" || e === "\u23CE"
          ? (t = "Enter")
          : e === "ArrowUp" || e === "\u2191"
            ? (t = "ArrowUp")
            : e === "ArrowDown" || e === "\u2193"
              ? (t = "ArrowDown")
              : e === "ArrowLeft" || e === "\u2190"
                ? (t = "ArrowLeft")
                : e === "ArrowRight" || e === "\u2192"
                  ? (t = "ArrowRight")
                  : e === "Space" || e === "\u23B5"
                    ? (t = "Space")
                    : e === "Backspace" || e === "\u232B"
                      ? (t = "Backspace")
                      : e === "Delete"
                        ? (t = "Delete")
                        : e === "A"
                          ? (t = "A")
                          : e === "B"
                            ? (t = "B")
                            : e === "C"
                              ? (t = "C")
                              : e === "D"
                                ? (t = "D")
                                : e === "E"
                                  ? (t = "E")
                                  : e === "F"
                                    ? (t = "F")
                                    : e === "G"
                                      ? (t = "G")
                                      : e === "H"
                                        ? (t = "H")
                                        : e === "I"
                                          ? (t = "I")
                                          : e === "J"
                                            ? (t = "J")
                                            : e === "K"
                                              ? (t = "K")
                                              : e === "L"
                                                ? (t = "L")
                                                : e === "M"
                                                  ? (t = "M")
                                                  : e === "N"
                                                    ? (t = "N")
                                                    : e === "O"
                                                      ? (t = "O")
                                                      : e === "P"
                                                        ? (t = "P")
                                                        : e === "Q"
                                                          ? (t = "Q")
                                                          : e === "R"
                                                            ? (t = "R")
                                                            : e === "S"
                                                              ? (t = "S")
                                                              : e === "T"
                                                                ? (t = "T")
                                                                : e === "U"
                                                                  ? (t = "U")
                                                                  : e === "V"
                                                                    ? (t = "V")
                                                                    : e === "W"
                                                                      ? (t =
                                                                          "W")
                                                                      : e ===
                                                                          "X"
                                                                        ? (t =
                                                                            "X")
                                                                        : e ===
                                                                            "Y"
                                                                          ? (t =
                                                                              "Y")
                                                                          : e ===
                                                                              "Z"
                                                                            ? (t =
                                                                                "Z")
                                                                            : e ===
                                                                                "0"
                                                                              ? (t =
                                                                                  "0")
                                                                              : e ===
                                                                                  "1"
                                                                                ? (t =
                                                                                    "1")
                                                                                : e ===
                                                                                    "2"
                                                                                  ? (t =
                                                                                      "2")
                                                                                  : e ===
                                                                                      "3"
                                                                                    ? (t =
                                                                                        "3")
                                                                                    : e ===
                                                                                        "4"
                                                                                      ? (t =
                                                                                          "4")
                                                                                      : e ===
                                                                                          "5"
                                                                                        ? (t =
                                                                                            "5")
                                                                                        : e ===
                                                                                            "6"
                                                                                          ? (t =
                                                                                              "6")
                                                                                          : e ===
                                                                                              "7"
                                                                                            ? (t =
                                                                                                "7")
                                                                                            : e ===
                                                                                                "8"
                                                                                              ? (t =
                                                                                                  "8")
                                                                                              : e ===
                                                                                                  "9"
                                                                                                ? (t =
                                                                                                    "9")
                                                                                                : e ===
                                                                                                    "Minus"
                                                                                                  ? (t =
                                                                                                      "Minus")
                                                                                                  : e ===
                                                                                                      "Equal"
                                                                                                    ? (t =
                                                                                                        "Equal")
                                                                                                    : e ===
                                                                                                        "Period"
                                                                                                      ? (t =
                                                                                                          "Period")
                                                                                                      : e ===
                                                                                                          "Comma"
                                                                                                        ? (t =
                                                                                                            "Comma")
                                                                                                        : e ===
                                                                                                            "Slash"
                                                                                                          ? (t =
                                                                                                              "Slash")
                                                                                                          : e ===
                                                                                                              "Semicolon"
                                                                                                            ? (t =
                                                                                                                "Semicolon")
                                                                                                            : e ===
                                                                                                                "Quote"
                                                                                                              ? (t =
                                                                                                                  "Quote")
                                                                                                              : e ===
                                                                                                                  "BracketLeft"
                                                                                                                ? (t =
                                                                                                                    "BracketLeft")
                                                                                                                : e ===
                                                                                                                    "BracketRight"
                                                                                                                  ? (t =
                                                                                                                      "BracketRight")
                                                                                                                  : e ===
                                                                                                                      "Backslash"
                                                                                                                    ? (t =
                                                                                                                        "Backslash")
                                                                                                                    : e ===
                                                                                                                        "Backquote" &&
                                                                                                                      (t =
                                                                                                                        "Backquote"),
      t
    );
  }
  function tl(e, t) {
    let o = ys(t);
    return e === "Esc" ? o === "Escape" || o === "Esc" : o === e;
  }
  function td(e) {
    let t = "",
      o = [],
      r = "";
    return (
      e.code.startsWith("Key")
        ? (r = e.code.slice(3))
        : e.code.startsWith("Digit")
          ? (r = e.code.slice(5))
          : (r = e.code),
      e.ctrlKey && o.push(D.isMac ? "^" : "Ctrl"),
      e.altKey && o.push(D.isMac ? "\u2325" : "Alt"),
      e.metaKey && o.push(D.isMac ? "\u2318" : "Win"),
      e.shiftKey && o.push(D.isMac ? "\u21E7" : "Shift"),
      [
        "ControlLeft",
        "ControlRight",
        "ShiftLeft",
        "ShiftRight",
        "AltLeft",
        "AltRight",
        "MetaLeft",
        "MetaRight",
      ].includes(r) ||
        (r === "Space"
          ? (r = "\u23B5")
          : r === "ArrowUp"
            ? (r = "\u2191")
            : r === "ArrowDown"
              ? (r = "\u2193")
              : r === "ArrowLeft"
                ? (r = "\u2190")
                : r === "ArrowRight"
                  ? (r = "\u2192")
                  : r === "Enter"
                    ? (r = "\u23CE")
                    : r === "Backspace"
                      ? (r = "\u232B")
                      : r === "Equal"
                        ? (r = "=")
                        : r === "Minus"
                          ? (r = "-")
                          : r === "Period"
                            ? (r = ".")
                            : r === "Comma"
                              ? (r = ",")
                              : r === "Slash"
                                ? (r = "/")
                                : r === "Semicolon"
                                  ? (r = ";")
                                  : r === "Quote"
                                    ? (r = '"')
                                    : r === "BracketLeft"
                                      ? (r = "[")
                                      : r === "BracketRight"
                                        ? (r = "]")
                                        : r === "Backslash"
                                          ? (r = "\\")
                                          : r === "Backquote"
                                            ? (r = "`")
                                            : r.length === 1 &&
                                              (r = r.toUpperCase()),
        o.push(r)),
      D.isMac ? (t = o.join("")) : (t = o.join("+")),
      t
    );
  }
  function od(e) {
    let t = D.isMac ? e.split("") : e.split("+"),
      o = D.isMac ? t.includes("^") : t.includes("Ctrl"),
      r = D.isMac ? t.includes("\u2325") : t.includes("Alt"),
      s = D.isMac ? t.includes("\u2318") : t.includes("Win"),
      a = D.isMac ? t.includes("\u21E7") : t.includes("Shift");
    return (
      o && t.splice(D.isMac ? t.indexOf("^") : t.indexOf("Ctrl"), 1),
      r && t.splice(D.isMac ? t.indexOf("\u2325") : t.indexOf("Alt"), 1),
      s && t.splice(D.isMac ? t.indexOf("\u2318") : t.indexOf("Win"), 1),
      a && t.splice(D.isMac ? t.indexOf("\u21E7") : t.indexOf("Shift"), 1),
      {
        key: t.length > 0 ? xs(t[0]) : null,
        ctrlKey: o,
        altKey: r,
        metaKey: s,
        shiftKey: a,
      }
    );
  }
  function rd(e, t) {
    let o = od(e);
    return !(
      !o.key ||
      o.ctrlKey !== t.ctrlKey ||
      o.altKey !== t.altKey ||
      o.metaKey !== t.metaKey ||
      o.shiftKey !== t.shiftKey ||
      !tl(o.key, t)
    );
  }
  function sd(e) {
    return D.isMac
      ? e.split("").map((t) => t.toUpperCase())
      : e.split("+").map((t) => t.trim().toUpperCase());
  }
  var nd = {
      listen: Yu,
      listenUp: Xu,
      neglect: Ju,
      neglectUp: ed,
      isKey: tl,
      getShortcut: td,
      matchShortcut: rd,
      createKeysFromShortcut: sd,
    },
    Re = nd;
  var Ss = class extends T {
      constructor(o) {
        super(o);
        this.onLicenseKeyInput = (o) => {
          let r = o.target;
          this.setState({ license_key: r.value });
        };
        this.onEmailInput = (o) => {
          let r = o.target;
          this.setState({ email: r.value });
        };
        this.onActivationNameInput = (o) => {
          let r = o.target;
          /^[a-zA-Z0-9_-]*$/.test(r.value)
            ? this.setState({ activation_name: r.value })
            : (r.value = this.state.activation_name);
        };
        this.onKeyDown = (o) => {
          Re.isKey("Enter", o) && this.login();
        };
        this.login = async () => {
          // BYPASS FOR TESTING: skip real login, go straight to index
          this.setState({ signing_in: !0 });
          try {
            y.send(w.background.init, {}), p.goto("index");
          } catch (a) {
            (console.log(a), k.error(a.message));
          }
          this.setState({ signing_in: !1 });
        };
        this.state = {
          license_key: "",
          email: "",
          activation_name: "",
          signing_in: !1,
        };
      }
      componentDidMount() {
        q.resizePopup(420, 510);
      }
      render() {
        return n($, {
          class: "p-4 bg-stairs bg-cover bg-no-repeat bg-bottom",
          children: [
            n("div", {
              class: "w-full flex items-center justify-center",
              children: [
                n("img", {
                  class: "w-6 h-6",
                  src: "/assets/images/logo_transparent_200.png",
                }),
                n("h1", {
                  class: "ml-2 font-display font-bold text-2xl text-white",
                  children: "Hoverify",
                }),
              ],
            }),
            n(Ie, {
              class: "w-full mt-4 flex-1",
              style: { backdropFilter: "blur(4px)" },
              children: [
                n("h2", {
                  class: "font-body text-white text-xl",
                  children: "Sign in to your account",
                }),
                n("div", {
                  class: "mt-8 grid grid-cols-1 gap-4",
                  children: [
                    n(ie, {
                      label: "License key",
                      value: this.state.license_key,
                      placeholder: "XXXXX-XXXXX-XXXXX-XXXXX",
                      onInput: this.onLicenseKeyInput,
                      onKeyDown: this.onKeyDown,
                    }),
                    n(ie, {
                      label: "Email address",
                      value: this.state.email,
                      placeholder: "john@gmail.com",
                      onInput: this.onEmailInput,
                      onKeyDown: this.onKeyDown,
                    }),
                    n(ie, {
                      label: "Activation name",
                      value: this.state.activation_name,
                      placeholder: "himanshu-chrome-mac",
                      onInput: this.onActivationNameInput,
                      onKeyDown: this.onKeyDown,
                      maxLength: 20,
                    }),
                  ],
                }),
                n("span", {
                  class: "block mt-1.5 text-xs font-body text-neutral-300",
                  children:
                    "Provide a unique name to this login/activation, so that it can be recognized later in the dasboard.",
                }),
                n(B, {
                  theme: "blue",
                  class: "w-full mt-6",
                  value: "Sign In",
                  loading: this.state.signing_in,
                  onClick: this.login,
                }),
              ],
            }),
            n("div", {
              class: "mt-4 flex items-center",
              children: [
                n(_s, {
                  url: "https://tryhoverify.com/#pricing",
                  class: "font-medium",
                  children: "Don't have a license key?",
                }),
                n(Be, {}),
                n(_s, {
                  url: "https://dashboard.tryhoverify.com",
                  class: "font-medium",
                  children: "Dashboard",
                }),
              ],
            }),
          ],
        });
      }
    },
    ol = Ss;
  U();
  function ad(e) {
    let t =
      "p-4 flex border-b last:border-0 border-white/5" +
      (e.description ? "" : " items-center");
    return n("div", {
      class: t,
      children: [
        n("div", {
          class: "flex-1",
          children: [
            n("h3", {
              class: "flex-1 text-white text-sm font-medium font-body",
              children: e.title,
            }),
            e.description
              ? n("p", {
                  class: "mt-1 text-xs text-gray-400",
                  children: e.description,
                })
              : null,
          ],
        }),
        n("div", { class: "ml-2", children: e.children }),
      ],
    });
  }
  var ye = ad;
  function id(e) {
    return n("div", {
      class: "flex flex-col",
      children: [
        n("div", {
          class: "flex items-center text-gray-300",
          children: [
            e.icon,
            n("h2", {
              class: "ml-2 text-base font-semibold",
              children: e.title,
            }),
          ],
        }),
        n(Ie, { class: "p-0 mt-2", children: e.children }),
      ],
    });
  }
  var ct = id;
  U();
  function ld(e, t, o) {
    return Math.min(Math.max(e, t), o);
  }
  function cd(e, t) {
    return (
      parseFloat(e) * parseFloat(getComputedStyle(t.documentElement).fontSize)
    );
  }
  function ud(e, t) {
    return (
      parseFloat(e) / parseFloat(getComputedStyle(t.documentElement).fontSize)
    );
  }
  function dd(e, t) {
    let o = e.x * t.x + e.y * t.y,
      r = Math.sqrt(e.x ** 2 + e.y ** 2),
      s = Math.sqrt(t.x ** 2 + t.y ** 2),
      a = o / (r * s),
      i = Math.acos(Math.min(1, Math.max(-1, a)));
    return (e.x * t.y - e.y * t.x < 0 ? -i : i) * (180 / Math.PI);
  }
  var hd = {
      clamp: ld,
      convertRemToPixels: cd,
      convertPixelsToRem: ud,
      calculateAngleBetweenVectors: dd,
    },
    ks = hd;
  var pd = /-?\d+\.?\d*/g,
    gd = /^-?\d+\.?\d*$/g,
    md = /[^\d.]/g,
    fd = /#[0-9a-f]{3,6}/gi,
    vd = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i,
    wd = /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/gi,
    bd = /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i,
    _d = /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/gi,
    yd = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i,
    xd = {
      NUMBERS: pd,
      ONLY_NUMBERS: gd,
      EXCEPT_NUMBERS: md,
      HEX: fd,
      ONLY_HEX: vd,
      RGB: wd,
      ONLY_RGB: yd,
      RGBA: _d,
      ONLY_RGBA: bd,
    },
    ze = xd;
  var Ue;
  function rl() {
    return n("div", {
      ref: Ue,
      class:
        "w-screen h-screen fixed z-top left-0 top-0 cursor-ew-resize select-none",
      style: { display: "none" },
    });
  }
  var Cs = class extends T {
      constructor(o) {
        super(o);
        this.clientX = le();
        this.onUnitChange = (o) => {
          !this.props.onInput ||
            this.props.onInput({
              val: this.state.value.val,
              unit: o.target.value,
            });
        };
        this.onInput = (o) => {
          let r = o.target.value;
          isNaN(parseFloat(r)) ||
            !this.props.onInput ||
            this.props.onInput({ val: r, unit: this.props.value.unit });
        };
        this.onBlur = (o) => {
          if (!this.props.onInput) return;
          let r = parseFloat(o.target.value);
          if (
            !isNaN(r) &&
            this.props.min !== void 0 &&
            this.props.max !== void 0
          )
            ((r = ks.clamp(r, this.props.min, this.props.max)),
              this.props.onInput({
                val: r.toString(),
                unit: this.state.value.unit,
              }));
          else if (!ze.ONLY_NUMBERS.test(o.target.value)) {
            let s = o.target.value.replace(ze.EXCEPT_NUMBERS, "").trim() || "0";
            this.props.onInput({ val: s, unit: this.state.value.unit });
          }
        };
        this.onStart = (o) => {
          this.props.noDrag ||
            (Ue && Ue.current && (Ue.current.style.display = "block"),
            (this.clientX.current = o.clientX),
            (this.snapshot.current = this.props.value),
            this.snapshot.current.val || (this.snapshot.current.val = "0"),
            this.props.units &&
              this.props.units[this.snapshot.current.unit] &&
              this.props.unitDefaultsTo &&
              (this.snapshot.current.unit = this.props.unitDefaultsTo),
            this.setState({ moving: !0 }),
            document.addEventListener("mousemove", this.onMove),
            document.addEventListener("mouseup", this.onStop),
            document.addEventListener("mouseleave", this.onStop),
            this.props.onDragStart && this.props.onDragStart());
        };
        this.onMove = (o) => {
          if (!this.snapshot.current || !this.clientX.current) return;
          let r = parseFloat(this.snapshot.current.val),
            s = Math.ceil(r - (this.clientX.current - o.clientX) * 0.2);
          (this.props.min !== void 0 &&
            this.props.max !== void 0 &&
            (s = ks.clamp(s, this.props.min, this.props.max)),
            this.props.onInput &&
              this.props.onInput({
                val: s.toString(),
                unit: this.snapshot.current.unit,
              }));
        };
        this.onStop = () => {
          (Ue && Ue.current && (Ue.current.style.display = "none"),
            this.setState({ moving: !1 }),
            document.removeEventListener("mousemove", this.onMove),
            document.removeEventListener("mouseup", this.onStop),
            document.addEventListener("mouseleave", this.onStop),
            this.props.onDragEnd && this.props.onDragEnd());
        };
        ((this.snapshot = le()),
          (this.clientX.current = 0),
          (this.state = { value: o.value, moving: !1 }));
      }
      componentWillReceiveProps(o) {
        (o.value.val !== this.state.value.val ||
          o.value.unit !== this.state.value.unit) &&
          this.setState({ value: o.value });
      }
      render() {
        let o = _(
          "h-9 pr-1 flex items-center rounded transition-colors text-sm font-body bg-gray-700",
          this.props.class,
        );
        return n("div", {
          class: o,
          children: [
            n("label", {
              onMouseDown: this.onStart,
              class: "px-2 text-gray-300 font-medium cursor-ew-resize",
              children: this.props.label,
            }),
            n("input", {
              class:
                "pr-1 appearance-none min-w-0 text-right flex-1 bg-transparent text-white disabled:text-gray-300 outline-none",
              spellCheck: !1,
              onInput: this.onInput,
              onBlur: this.onBlur,
              disabled: this.props.disabled,
              style: {
                display:
                  this.props.units && this.props.units[this.state.value.unit]
                    ? "none"
                    : "block",
              },
              value: this.state.value.val,
            }),
            this.props.units &&
              n("select", {
                class:
                  "pr-1 appearance-none min-w-0 bg-transparent outline-none text-white",
                onChange: this.onUnitChange,
                value: this.state.value.unit,
                children: Object.keys(this.props.units).map((r) =>
                  n("option", { class: "bg-gray-700", children: r }, r),
                ),
              }),
          ],
        });
      }
    },
    sl = {
      create: () => {
        Ue = le();
      },
      convertToIDragInputValue: (e) => {
        let t = e.replace(ze.NUMBERS, "");
        return { val: e.replace(t, "") || "0", unit: t };
      },
      destroy: () => {
        !Ue || ((Ue.current = null), (Ue = null));
      },
    },
    ut = Cs;
  U();
  se();
  function Sd(e) {
    let t = e.type ? e.type : "text",
      o = _(
        "h-9 px-2 flex items-center rounded transition-colors text-sm font-body bg-gray-700",
        e.class,
      ),
      r = _(
        "h-9 appearance-none min-w-0 flex-1 bg-transparent text-white disabled:text-gray-300 outline-none",
        e.inputClass,
      );
    return n("div", {
      class: o,
      children: [
        n("label", {
          class: "mr-2 text-gray-300 font-medium",
          children: e.label,
        }),
        n("input", {
          ref: e.inputRef,
          type: t,
          class: r,
          value: e.value,
          placeholder: e.placeholder,
          maxLength: e.maxLength,
          onInput: e.onInput,
          onBlur: e.onBlur,
          onKeyDown: e.onKeyDown,
          disabled: e.disabled,
          spellcheck: !1,
        }),
        e.actions &&
          n("div", {
            class: "ml-2 flex items-center gap-2",
            children: e.actions,
          }),
      ],
    });
  }
  var nl = Sd;
  var al = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };
  function kd(e) {
    let t = new Set();
    for (let [a, i] of Object.entries(al))
      if (e.includes(a)) {
        let l = new ue(a);
        t.add(l.hex());
      }
    let o = e.match(ze.HEX);
    if (o)
      for (let a of o) {
        let i = new ue(a);
        t.add(i.hex());
      }
    let r = e.match(ze.RGB);
    if (r)
      for (let a of r) {
        let i = new ue(a);
        t.add(i.hex());
      }
    let s = e.match(ze.RGBA);
    if (s)
      for (let a of s)
        new ue(a).alpha() === 0 ? t.add("transparent") : t.add(a);
    return [...t];
  }
  function Cd(e) {
    if (!e) return null;
    let t = e.toLowerCase();
    return al[t];
  }
  function Md(e) {
    return ue(`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`).hex();
  }
  var Id = { extract: kd, convertNameToHex: Cd, convertRgbaToHex: Md },
    il = Id;
  var Jo = 224,
    er = 316,
    qe = null,
    Ms = class extends T {
      constructor(o) {
        super(o);
        this.triggerRef = le();
        this.popupRef = le();
        this.top = 0;
        this.left = 0;
        this.onChange = (o) => {
          (this.setColor(o), this.setHex(o));
        };
        this.onRedInput = (o) => {
          let r = parseInt(o.val),
            s = re(L({}, this.state.color), { r });
          (this.setColor(s), this.setHex(s));
        };
        this.onGreenInput = (o) => {
          let r = parseInt(o.val),
            s = re(L({}, this.state.color), { g: r });
          (this.setColor(s), this.setHex(s));
        };
        this.onBlueInput = (o) => {
          let r = parseInt(o.val),
            s = re(L({}, this.state.color), { b: r });
          (this.setColor(s), this.setHex(s));
        };
        this.onAlphaInput = (o) => {
          let r = parseInt(o.val),
            s = re(L({}, this.state.color), { a: r / 100 });
          (this.setColor(s), this.setHex(s));
        };
        this.onHexInput = (o) => {
          if (!o.target) return;
          let r = o.target,
            s = r.value.startsWith("#") ? r.value : `#${r.value}`;
          if (!ze.ONLY_HEX.test(s)) return;
          this.setState({ hex: s.substring(1) });
          let a = ue(s),
            i = { r: a.red(), g: a.green(), b: a.blue(), a: a.alpha() };
          this.setColor(i);
        };
        this.setHex = (o) => {
          let r = il.convertRgbaToHex(o);
          this.setState({ hex: r.substring(1) });
        };
        this.setColor = (o, r) => {
          this.setState({ color: o }, () => {
            if (!r && this.changeListener) {
              let s = ue(`rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`),
                a = s.hex();
              (s.alpha() !== 1 &&
                (a = `rgba(${s.red()}, ${s.green()}, ${s.blue()}, ${s.alpha()})`),
                this.changeListener(s, a));
            }
          });
        };
        this.close = () => {
          (this.setState({ visible: !1 }),
            window.removeEventListener("mousedown", this.hide));
        };
        this.hide = (o) => {
          if (!this.popupRef.current || !this.triggerRef.current) return;
          let r = o.clientX + window.scrollX,
            s = o.clientY + window.scrollY,
            a = this.triggerRef.current.getBoundingClientRect(),
            i = a.width,
            l = a.height;
          (r >= this.left &&
            r <= this.left + Jo &&
            s >= this.top &&
            s <= this.top + er) ||
            (r >= a.left && r <= a.left + i && s >= a.top && s <= a.top + l) ||
            this.close();
        };
        this.show = (o, r, s) => {
          if (!o.current || !this.popupRef.current) return;
          this.triggerRef.current = o.current;
          let a = o.current.getBoundingClientRect(),
            i = a.left + window.scrollX - Jo - 8,
            l = a.top + window.scrollY - er / 2;
          (i < 0 && ((i += Jo + 8), (l -= er / 2 + 8)),
            (this.left = i),
            (this.top = l),
            (this.changeListener = s));
          let c = { r: r.red(), g: r.green(), b: r.blue(), a: r.alpha() };
          (this.setColor(c, !0),
            this.setHex(c),
            this.setState({ visible: !0 }),
            window.addEventListener("mousedown", this.hide));
        };
        this.isVisible = () => this.state.visible;
        this.state = {
          visible: !1,
          color: { r: 255, g: 255, b: 255, a: 1 },
          hex: "",
        };
      }
      componentWillUnmount() {
        window.removeEventListener("mousedown", this.hide);
      }
      render() {
        let o = _(
            "p-4 absolute z-top flex flex-col bg-gray-800/80 rounded-lg border border-white/20",
            this.state.visible ? "" : "hidden",
          ),
          r = { val: "" + this.state.color.r, unit: "" },
          s = { val: "" + this.state.color.g, unit: "" },
          a = { val: "" + this.state.color.b, unit: "" },
          i = { val: "" + (this.state.color.a * 100).toFixed(0), unit: "" };
        return n("div", {
          ref: this.popupRef,
          id: "color_picker_popup",
          class: o,
          style: {
            width: `${Jo}px`,
            height: `${er}px`,
            top: `${this.top}px`,
            left: `${this.left}px`,
            backdropFilter: "blur(8px)",
          },
          children: [
            n(ki, {
              color: this.state.color,
              onChange: this.onChange,
              root: this.props.root,
            }),
            n("div", {
              class: "mt-3 grid grid-cols-3 gap-2",
              children: [
                n(ut, {
                  label: "R",
                  value: r,
                  min: 0,
                  max: 255,
                  onInput: this.onRedInput,
                }),
                n(ut, {
                  label: "G",
                  value: s,
                  min: 0,
                  max: 255,
                  onInput: this.onGreenInput,
                }),
                n(ut, {
                  label: "B",
                  value: a,
                  min: 0,
                  max: 255,
                  onInput: this.onBlueInput,
                }),
              ],
            }),
            n("div", {
              class: "mt-2 grid grid-cols-2 gap-2",
              children: [
                n(nl, {
                  inputClass: "text-right",
                  label: "#",
                  value: this.state.hex,
                  onInput: this.onHexInput,
                }),
                n(ut, {
                  label: "A",
                  value: i,
                  min: 0,
                  max: 100,
                  onInput: this.onAlphaInput,
                }),
              ],
            }),
          ],
        });
      }
    };
  function ll(e) {
    return n(Ms, { ref: qe, root: e.root });
  }
  function Pd(e) {
    let t = ce(null),
      o = M(() => {
        !qe ||
          !qe.current ||
          (qe.current.isVisible()
            ? qe.current.close()
            : qe.current.show(t, e.color, e.onChange));
      }, [e.color]),
      r = M((l) => {
        if (!l.target || !e.onChange) return;
        let u = l.target.value;
        if (
          !ze.ONLY_HEX.test(u) &&
          !ze.ONLY_RGB.test(u) &&
          !ze.ONLY_RGBA.test(u)
        )
          return;
        let g = ue(u);
        e.onChange(g, u);
      }, []),
      s =
        e.name ||
        `rgba(${e.color.red()}, ${e.color.green()}, ${e.color.blue()}, ${e.color.alpha()})`,
      a = e.label || e.labelActions,
      i = _(a ? "h-14" : "h-9", "flex flex-col", e.class);
    return n("div", {
      ref: t,
      class: i,
      children: [
        a
          ? n("div", {
              class:
                "mb-0.5 flex items-center text-xs text-gray-400 font-body font-medium",
              children: [
                n("label", { class: "flex-1", children: e.label }),
                e.labelActions,
              ],
            })
          : null,
        n("div", {
          class: "h-9 px-2 flex items-center flex-1 bg-gray-700 rounded",
          children: [
            n(Ko, { class: "w-5 h-5 cursor-pointer", color: s, onClick: o }),
            n("input", {
              type: "text",
              class:
                "ml-2 min-w-0 h-full flex-1 text-sm font-body font-normal text-white bg-transparent outline-none",
              value: s,
              onInput: r,
              spellcheck: !1,
            }),
          ],
        }),
      ],
    });
  }
  var cl = {
      create: () => {
        qe = le();
      },
      destroy: () => {
        !qe || ((qe.current = null), (qe = null));
      },
    },
    ul = Pd;
  var Is = class extends T {
      constructor(o) {
        super(o);
        this.onPseudoElementsAndClassesToggle = (o) => {
          this.setState({
            pseudo_elements_and_classes:
              !this.state.pseudo_elements_and_classes,
          });
        };
        this.onHTMLAttributesToggle = (o) => {
          this.setState({ html_attributes: !this.state.html_attributes });
        };
        this.onMediaQueriesToggle = (o) => {
          this.setState({ media_queries: !this.state.media_queries });
        };
        this.onKeyframeAnimationsToggle = (o) => {
          this.setState({
            keyframe_animations: !this.state.keyframe_animations,
          });
        };
        this.onHotReloadToggle = (o) => {
          this.setState({ hot_reload: !this.state.hot_reload });
        };
        this.onIFramesToggle = (o) => {
          this.setState({ iframes: !this.state.iframes });
        };
        this.onGuidelinesOnStartupToggle = (o) => {
          this.setState({
            guidelines_on_startup: !this.state.guidelines_on_startup,
          });
        };
        this.onCSSBoxOnStartupToggle = (o) => {
          this.setState({ css_box_on_startup: !this.state.css_box_on_startup });
        };
        this.onZoomInput = (o) => {
          this.setState({ zoom: o });
        };
        this.onSEOAlignmentChange = (o) => {
          this.setState({ seo_alignment: o });
        };
        this.onFullPageCaptureDelayInput = (o) => {
          this.setState({ full_page_capture_delay: o });
        };
        this.onScreenshotEditorDefaultAnnotationColorChange = (o, r) => {
          !r ||
            this.setState({ screenshot_editor_default_annotation_color: r });
        };
        this.onActivationNameInput = (o) => {
          let r = o.target;
          /^[a-zA-Z0-9_-]*$/.test(r.value)
            ? this.setState({ activation_name: r.value })
            : (r.value = this.state.activation_name);
        };
        this.openDashboard = () => {
          (y.send(w.window.open, { url: "https://dashboard.tryhoverify.com" }),
            setTimeout(() => {
              window.close();
            }, 100));
        };
        this.openResetPopup = () => {
          this.setState({ reset_popup: !0 });
        };
        this.closeResetPopup = () => {
          this.setState({ reset_popup: !1 });
        };
        this.loadSettings = async () => {
          var s, a;
          let o = await d.get(d.Schema.settings),
            r = await d.get(d.Schema.auth.activation_name);
          (this.setState({
            pseudo_elements_and_classes: o.inspector.pseudoElementsAndClasses,
            html_attributes: o.inspector.htmlAttributes,
            media_queries: o.inspector.mediaQueries,
            keyframe_animations: o.inspector.keyframeAnimations,
            hot_reload: o.inspector.hotReload,
            iframes: o.inspector.iframes,
            guidelines_on_startup: o.inspector.guidelines_on_startup || !1,
            css_box_on_startup: o.inspector.css_box_on_startup || !1,
            zoom: { val: o.colorEyedropper.zoom.toString(), unit: "" },
            seo_alignment:
              ((s = o.seo) == null ? void 0 : s.alignment) || ve.seo.alignment,
            full_page_capture_delay: {
              val: o.capture
                ? o.capture.full_page_capture_delay.toString()
                : ve.capture.full_page_capture_delay.toString(),
              unit: "",
            },
            screenshot_editor_default_annotation_color:
              ((a = o.screenshot_editor) == null
                ? void 0
                : a.default_annotation_color) ||
              ve.screenshot_editor.default_annotation_color,
            activation_name: r,
          }),
            (r = await Pe.deviceName()),
            this.setState({ activation_name: r }));
        };
        this.reset = async () => {
          try {
            (this.setState({ resetting: !0 }),
              await d.reset(),
              k.success("Extension reset successfully!"),
              await this.loadSettings(),
              this.setState({ reset_popup: !1, resetting: !1 }));
          } catch (o) {
            k.error(o.message);
          }
        };
        this.save = async () => {
          this.setState({ saving: !0 });
          try {
            let o = {
              inspector: {
                pseudoElementsAndClasses:
                  this.state.pseudo_elements_and_classes,
                htmlAttributes: this.state.html_attributes,
                mediaQueries: this.state.media_queries,
                keyframeAnimations: this.state.keyframe_animations,
                hotReload: this.state.hot_reload,
                iframes: this.state.iframes,
                guidelines_on_startup: this.state.guidelines_on_startup,
                css_box_on_startup: this.state.css_box_on_startup,
              },
              colorEyedropper: { zoom: parseInt(this.state.zoom.val) },
              seo: { alignment: this.state.seo_alignment },
              capture: {
                full_page_capture_delay: parseInt(
                  this.state.full_page_capture_delay.val,
                ),
              },
              screenshot_editor: {
                default_annotation_color:
                  this.state.screenshot_editor_default_annotation_color,
              },
            };
            if (!this.state.activation_name)
              throw new Error("Activation name cannot be empty");
            (await d.store(d.Schema.settings, o),
              await Pe.changeDeviceName(this.state.activation_name),
              k.success("Settings saved successfully!"),
              y.broadcastToTabs(w.settings.set, { settings: o }));
          } catch (o) {
            k.error(o.message);
          }
          this.setState({ saving: !1 });
        };
        this.deactivate = async () => {
          this.setState({ deactivating: !0 });
          try {
            (await Pe.deactivate(),
              k.success("Deactivated successfully!"),
              p.goto("auth"));
          } catch (o) {
            k.error(o.message);
          }
          this.setState({ deactivating: !1 });
        };
        this.state = {
          saving: !1,
          deactivating: !1,
          pseudo_elements_and_classes: ve.inspector.pseudoElementsAndClasses,
          html_attributes: ve.inspector.htmlAttributes,
          media_queries: ve.inspector.mediaQueries,
          keyframe_animations: ve.inspector.keyframeAnimations,
          hot_reload: ve.inspector.hotReload,
          iframes: ve.inspector.iframes,
          guidelines_on_startup: ve.inspector.guidelines_on_startup,
          css_box_on_startup: ve.inspector.css_box_on_startup,
          zoom: { val: ve.colorEyedropper.zoom.toString(), unit: "" },
          seo_alignment: ve.seo.alignment,
          full_page_capture_delay: {
            val: ve.capture.full_page_capture_delay.toString(),
            unit: "",
          },
          screenshot_editor_default_annotation_color:
            ve.screenshot_editor.default_annotation_color,
          activation_name: "",
          reset_popup: !1,
          resetting: !1,
        };
      }
      async componentDidMount() {
        q.resizePopup(460, 560);
        try {
          await this.loadSettings();
        } catch (o) {
          k.error(o.message);
        }
      }
      render() {
        return n($, {
          children: [
            n(me, {
              open: this.state.reset_popup,
              winClass: "max-w-xs",
              children: [
                n(Ce, {
                  onClose: this.closeResetPopup,
                  children: "Reset Extension",
                }),
                n(ge, {
                  class: "grid grid-cols-1 gap-4",
                  children: n("p", {
                    class: "text-sm font-body text-white font-normal",
                    children:
                      "Are you sure you want to reset the extension settings and storage to default?",
                  }),
                }),
                n(_e, {
                  children: n(B, {
                    theme: "red",
                    icon: n(wt, { class: "w-5 h-5" }),
                    value: "Reset",
                    loading: this.state.resetting,
                    onClick: this.reset,
                  }),
                }),
              ],
            }),
            n(ne, {
              title: "Settings",
              children: n(B, {
                theme: "blue",
                class: "w-20",
                value: "Save",
                icon: n(Nt, { class: "w-5 h-5", stroke: 2 }),
                onClick: this.save,
                loading: this.state.saving,
              }),
            }),
            n(ae, {
              class: "p-0",
              children: n(de, {
                children: [
                  n("div", {
                    class: "grid grid-cols-1 gap-4 font-body",
                    children: [
                      n(ct, {
                        title: "Inspector",
                        icon: n(rt, { class: "w-6 h-6", stroke: 2 }),
                        children: [
                          n(ye, {
                            title: "Pseudo Elements & Classes",
                            description:
                              "View, edit, and export pseudo elements & classes",
                            children: n(ke, {
                              checked: this.state.pseudo_elements_and_classes,
                              onClick: this.onPseudoElementsAndClassesToggle,
                            }),
                          }),
                          n(ye, {
                            title: "Media Queries",
                            description: "View, edit, and export media queries",
                            children: n(ke, {
                              checked: this.state.media_queries,
                              onClick: this.onMediaQueriesToggle,
                            }),
                          }),
                          n(ye, {
                            title: "Keyframe Animations",
                            description:
                              "View, edit, and export keyframe animations",
                            children: n(ke, {
                              checked: this.state.keyframe_animations,
                              onClick: this.onKeyframeAnimationsToggle,
                            }),
                          }),
                          n(ye, {
                            title: "HTML Attributes",
                            description:
                              "View html attributes while inspecting",
                            children: n(ke, {
                              checked: this.state.html_attributes,
                              onClick: this.onHTMLAttributesToggle,
                            }),
                          }),
                          n(ye, {
                            title: "Hot Reload",
                            description:
                              "Automatically enable inspector when the page changes",
                            children: n(ke, {
                              checked: this.state.hot_reload,
                              onClick: this.onHotReloadToggle,
                            }),
                          }),
                          n(ye, {
                            title: "IFrames",
                            description:
                              "Enable inspector for iframes. This requires a page reload to take effect. Disable Inspector before reloading.",
                            children: n(ke, {
                              checked: this.state.iframes,
                              onClick: this.onIFramesToggle,
                            }),
                          }),
                          n(ye, {
                            title: "Guidelines on startup",
                            description:
                              'Automatically enable "Guidelines" when the inspector is enabled.',
                            children: n(ke, {
                              checked: this.state.guidelines_on_startup,
                              onClick: this.onGuidelinesOnStartupToggle,
                            }),
                          }),
                          n(ye, {
                            title: "CSS Box on startup",
                            description:
                              'Automatically enable "CSS Box" when the inspector is enabled.',
                            children: n(ke, {
                              checked: this.state.css_box_on_startup,
                              onClick: this.onCSSBoxOnStartupToggle,
                            }),
                          }),
                        ],
                      }),
                      n(ct, {
                        title: "Color Eyedropper",
                        icon: n(jn, { class: "w-6 h-6", stroke: 2 }),
                        children: n(ye, {
                          title: "Zoom",
                          children: n(ut, {
                            class: "w-16",
                            label: n(Qn, { class: "w-5 h-5", stroke: 2 }),
                            value: this.state.zoom,
                            onInput: this.onZoomInput,
                            min: 5,
                            max: 15,
                          }),
                        }),
                      }),
                      n(ct, {
                        title: "SEO",
                        icon: n(Co, { class: "w-6 h-6", stroke: 2 }),
                        children: n(ye, {
                          title: "Alignment",
                          description:
                            "Align SEO window to the left or right of the viewport.",
                          children: n(Zo, {
                            class: "w-24",
                            options: [
                              {
                                value: no.Alignment.LEFT,
                                label: n($n, { class: "w-4 h-4" }),
                                tooltip: { content: "Left" },
                              },
                              {
                                value: no.Alignment.RIGHT,
                                label: n(qn, { class: "w-4 h-4" }),
                                tooltip: { content: "Right" },
                              },
                            ],
                            value: this.state.seo_alignment,
                            onChange: this.onSEOAlignmentChange,
                          }),
                        }),
                      }),
                      n(ct, {
                        title: "Capture",
                        icon: n(Et, { class: "w-6 h-6", stroke: 2 }),
                        children: n(ye, {
                          title: "Full Page Capture Delay",
                          description:
                            "Delay between each fragment while taking a full page screenshot.",
                          children: n(ut, {
                            class: "w-20",
                            label: n(Io, { class: "w-5 h-5", stroke: 2 }),
                            value: this.state.full_page_capture_delay,
                            onInput: this.onFullPageCaptureDelayInput,
                            min: 250,
                            max: 1500,
                          }),
                        }),
                      }),
                      n(ct, {
                        title: "Screenshot Editor",
                        icon: n(Eo, { class: "w-6 h-6", stroke: 2 }),
                        children: n(ye, {
                          title: "Default Annotation Color",
                          description:
                            "Default color for new annotations in screenshot editor.",
                          children: n(ul, {
                            class: "w-28",
                            color: ue(
                              this.state
                                .screenshot_editor_default_annotation_color,
                            ),
                            name: this.state
                              .screenshot_editor_default_annotation_color,
                            onChange:
                              this
                                .onScreenshotEditorDefaultAnnotationColorChange,
                          }),
                        }),
                      }),
                      n(ct, {
                        title: "Activation",
                        icon: n(Yn, { class: "w-6 h-6", stroke: 2 }),
                        children: [
                          n(ye, {
                            title: "Activation Name",
                            children: n(ie, {
                              class: "w-28",
                              placeholder: "himanshu-chrome-mac",
                              value: this.state.activation_name,
                              onInput: this.onActivationNameInput,
                            }),
                          }),
                          n(ye, {
                            title: "Dashboard",
                            children: n(B, {
                              class: "w-20",
                              icon: n(On, { class: "w-4 h-4", stroke: 2.5 }),
                              value: "Visit",
                              onClick: this.openDashboard,
                            }),
                          }),
                          n(ye, {
                            title: "",
                            children: n(B, {
                              theme: "red",
                              class: "w-28",
                              icon: n(Xn, { class: "w-5 h-5", stroke: 2 }),
                              value: "Deactivate",
                              loading: this.state.deactivating,
                              onClick: this.deactivate,
                            }),
                          }),
                        ],
                      }),
                      n(ct, {
                        title: "Extension",
                        icon: n(ta, { class: "w-6 h-6", stroke: 2 }),
                        children: n(ye, {
                          title: "Reset Extension",
                          description:
                            "Reset extension settings and storage to default. This will not affect your activation.",
                          children: n(B, {
                            theme: "red",
                            class: "w-24",
                            icon: n(wt, { class: "w-5 h-5", stroke: 2 }),
                            value: "Reset",
                            onClick: this.openResetPopup,
                          }),
                        }),
                      }),
                    ],
                  }),
                  n("div", {
                    class:
                      "mt-4 flex justify-center text-sm font-body text-gray-300",
                    children: ["v", chrome.runtime.getManifest().version],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    dl = Is;
  U();
  se();
  se();
  function Td(e) {
    return n("div", {
      class:
        "min-w-9 h-9 px-2 flex items-center justify-center border border-white/10 rounded-md bg-neutral-950/50 text-gray-400 font-body text-sm font-medium shadow-md",
      children: e.children,
    });
  }
  function Ed(e) {
    let [t, o] = X(""),
      [r, s] = X([]),
      a = M((u) => {
        D.isMac
          ? D.isMac && D.isFirefox && u.includes("+")
            ? s(
                u.split("+").map((g) => {
                  switch (g) {
                    case "Ctrl":
                      return "^";
                    case "Alt":
                      return "\u2325";
                    case "Meta":
                      return "\u2318";
                    case "Shift":
                      return "\u21E7";
                    case "Space":
                      return "\u23B5";
                    default:
                      return g.toUpperCase();
                  }
                }),
              )
            : s(u.split("").map((g) => g))
          : s(u.split("+").map((g) => g.toUpperCase()));
      }, []),
      i = M((u) => {
        if ((u.preventDefault(), Re.isKey("Esc", u))) return;
        let g = Re.getShortcut(u);
        (o(g),
          a(g),
          e.onShortcutChange && e.onShortcutChange(e.tool, e.command, g));
      }, []),
      l = M(() => {
        (o(""), s([]));
      }, []);
    return (
      Se(() => {
        (o(e.shortcut), a(e.shortcut));
      }, [e.shortcut]),
      n("div", {
        class:
          "px-4 py-2 flex items-center border-b last:border-0 border-white/5",
        children: [
          n("h3", {
            class: "flex-1 text-white text-sm font-body",
            children: e.command,
          }),
          n("div", {
            class: "flex items-center gap-0.5",
            children: [
              e.isEditing &&
                n(ie, {
                  class: "w-24",
                  inputClass: "text-center",
                  value: t,
                  placeholder: "Press keys",
                  onKeyDown: i,
                  onFocus: l,
                }),
              !e.isEditing &&
                (t
                  ? r.map((u) => n(Td, { children: u }))
                  : n("span", {
                      class:
                        "h-9 flex items-center justify-center text-neutral-400 font-body",
                      children: "-",
                    })),
            ],
          }),
        ],
      })
    );
  }
  var hl = Ed;
  function Nd(e) {
    let [t, o] = X(!1),
      r = M(() => {
        e.redirectToBrowserShortcuts
          ? (y.send(w.window.open, {
              url: D.isFirefox
                ? "https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox"
                : "chrome://extensions/shortcuts",
              options: {
                windowId: p.tab.value.window_id,
                index: p.tab.value.index + 1,
                openerTabId: p.tab.value.id,
              },
            }),
            setTimeout(() => window.close(), 200))
          : o(!t);
      }, [e.redirectToBrowserShortcuts]),
      s = M(() => {
        (o(!1), e.onSave && e.onSave());
      }, [e.shortcuts]);
    return n("div", {
      class: "flex flex-col",
      children: [
        n("div", {
          class: "flex items-center text-gray-300",
          children: [
            e.icon,
            n("h2", {
              class: "flex-1 ml-2 text-base font-semibold",
              children: e.tool,
            }),
            t
              ? n(V, {
                  onClick: s,
                  theme: "blue",
                  children: n(ko, { class: "w-4 h-4", stroke: 3 }),
                })
              : n(V, {
                  onClick: r,
                  children: n(Mo, { class: "w-5 h-5", stroke: 2 }),
                }),
          ],
        }),
        n(Ie, {
          class: "p-0 mt-2",
          children: Object.entries(e.shortcuts).map(([a, i]) =>
            n(
              hl,
              {
                tool: e.tool,
                command: a,
                shortcut: i,
                isEditing: t,
                onShortcutChange: e.onShortcutChange,
              },
              a,
            ),
          ),
        }),
      ],
    });
  }
  var po = Nd;
  var Ps = class extends T {
      constructor(o) {
        super(o);
        this.onShortcutChange = (o, r, s) => {
          switch (o) {
            case "Inspector":
              {
                let a = L({}, this.state.inspector),
                  i = Object.keys(a);
                for (let l of i)
                  a[l].title === r
                    ? (a[l].key = s)
                    : a[l].title !== r && a[l].key === s && (a[l].key = "");
                this.setState({ inspector: a });
              }
              break;
          }
        };
        this.onSave = async () => {
          await d.remove(d.Schema.shortcuts);
          let o = { inspector: this.state.inspector };
          (await d.store(d.Schema.shortcuts, o),
            k.success("Shortcuts saved"),
            y.broadcastToTabs(w.shortcuts.refresh, {}));
        };
        this.state = {
          tools: {
            "Toggle Inspector": "",
            "Toggle Color Eyedropper": "",
            "Toggle Assets": "",
            "Open in Responsive Viewer": "",
            "Toggle SEO": "",
          },
          inspector: Oo.inspector,
          debug: { "Create new custom code script": "" },
          capture: {
            "Capture tab": "",
            "Capture full page screenshot": "",
            "Capture selected area": "",
            "Capture selected element": "",
          },
        };
      }
      async componentDidMount() {
        q.resizePopup(420, 560);
        let { data: o, error: r } = await S(chrome.commands.getAll());
        if (r) {
          console.log(r);
          return;
        }
        for (let i of o)
          !i.description ||
            this.setState((l) => {
              let c = L({}, l.tools),
                u = L({}, l.capture),
                g = L({}, l.debug);
              return (
                i.description.includes("Toggle Inspector")
                  ? (c["Toggle Inspector"] = i.shortcut || "")
                  : i.description.includes("Toggle Color Eyedropper")
                    ? (c["Toggle Color Eyedropper"] = i.shortcut || "")
                    : i.description.includes("Toggle Assets")
                      ? (c["Toggle Assets"] = i.shortcut || "")
                      : i.description.includes("Open in Responsive Viewer")
                        ? (c["Open in Responsive Viewer"] = i.shortcut || "")
                        : i.description.includes("Toggle SEO")
                          ? (c["Toggle SEO"] = i.shortcut || "")
                          : i.description.includes("Capture tab")
                            ? (u["Capture tab"] = i.shortcut || "")
                            : i.description.includes(
                                  "Capture full page screenshot",
                                )
                              ? (u["Capture full page screenshot"] =
                                  i.shortcut || "")
                              : i.description.includes("Capture selected area")
                                ? (u["Capture selected area"] =
                                    i.shortcut || "")
                                : i.description.includes(
                                      "Capture selected element",
                                    )
                                  ? (u["Capture selected element"] =
                                      i.shortcut || "")
                                  : i.description.includes(
                                      "Create new custom code script",
                                    ) &&
                                    (g["Create new custom code script"] =
                                      i.shortcut || ""),
                { tools: c, capture: u, debug: g }
              );
            });
        let { data: s, error: a } = await S(d.get(d.Schema.shortcuts));
        if (a) {
          console.log(a);
          return;
        }
        this.setState({ inspector: s.inspector });
      }
      render() {
        let o = {};
        for (let [r, s] of Object.entries(this.state.inspector))
          o[s.title] = s.key;
        return n($, {
          children: [
            n(ne, { title: "Shortcuts" }),
            n(ae, {
              class: "p-0",
              children: n(de, {
                children: n("div", {
                  class: "grid grid-cols-1 gap-4 font-body",
                  children: [
                    n(po, {
                      tool: "Tools",
                      icon: n(ea, { class: "w-5 h-5" }),
                      shortcuts: this.state.tools,
                      redirectToBrowserShortcuts: !0,
                    }),
                    n(po, {
                      tool: "Inspector",
                      icon: n(rt, { class: "w-5 h-5" }),
                      shortcuts: o,
                      onShortcutChange: this.onShortcutChange,
                      onSave: this.onSave,
                    }),
                    n(po, {
                      tool: "Debug",
                      icon: n(xo, { class: "w-5 h-5" }),
                      shortcuts: this.state.debug,
                      redirectToBrowserShortcuts: !0,
                    }),
                    n(po, {
                      tool: "Capture",
                      icon: n(Et, { class: "w-5 h-5" }),
                      shortcuts: this.state.capture,
                      redirectToBrowserShortcuts: !0,
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    pl = Ps;
  se();
  function Ad(e) {
    var l, c, u;
    let t = ce([]),
      [o, r] = X(null),
      s = ce(null),
      a = ce(null),
      i = ce();
    return (
      Se(() => {
        let g = (b) => {
            let v = Array.from(e.root.querySelectorAll("[data-tooltip]"));
            for (let C of v) {
              if (t.current.includes(C)) continue;
              C.addEventListener("mouseenter", () => {
                ((i.current = {
                  content: C.dataset.tooltip,
                  shortcut: C.dataset.tooltipShortcut,
                  position: C.dataset.tooltipPosition,
                }),
                  r(C));
              });
              let P = ["mouseleave", "mousedown"];
              for (let N of P)
                C.addEventListener(N, () => {
                  r(null);
                });
            }
            t.current = v;
          },
          h = new MutationObserver(g);
        return (
          h.observe(e.root, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-tooltip"],
            attributeOldValue: !0,
          }),
          g([]),
          () => {
            h.disconnect();
          }
        );
      }, [e.root]),
      Se(() => {
        var g, h;
        if (!!s.current)
          if ((a.current && clearTimeout(a.current), o && i.current)) {
            let b = o.getBoundingClientRect(),
              v = s.current.getBoundingClientRect(),
              C = `${b.left + b.width / 2 - v.width / 2}px`,
              P = `${b.top - v.height - 4}px`;
            (((g = i.current) == null ? void 0 : g.position) === "bottom"
              ? (P = `${b.bottom + 4}px`)
              : ((h = i.current) == null ? void 0 : h.position) === "left" &&
                ((C = `${b.left - v.width - 4}px`),
                (P = `${b.top + b.height / 2 - v.height / 2}px`)),
              (s.current.style.left = C),
              (s.current.style.top = P),
              (a.current = setTimeout(() => {
                !s.current || (s.current.style.opacity = "1");
              }, 500)));
          } else
            a.current = setTimeout(() => {
              !s.current ||
                ((s.current.style.opacity = "0"), (i.current = void 0));
            }, 200);
      }, [o]),
      n("div", {
        ref: s,
        class:
          "max-w-sm py-1.5 px-2.5 fixed z-top flex items-center gap-2.5 bg-neutral-900/70 backdrop-blur-sm rounded-md border border-white/10 text-white text-xs font-body opacity-0 pointer-events-none shadow transition-opacity duration-200",
        children: [
          n("span", { children: (l = i.current) == null ? void 0 : l.content }),
          ((c = i.current) == null ? void 0 : c.shortcut) &&
            n("div", {
              class: "flex items-center gap-0.5",
              children: Re.createKeysFromShortcut(
                (u = i.current) == null ? void 0 : u.shortcut,
              ).map((g) =>
                n("div", {
                  class:
                    "flex h-5 px-1.5 min-w-5 items-center justify-center bg-neutral-700 rounded shadow text-neutral-300 font-bold",
                  children: g,
                }),
              ),
            }),
        ],
      })
    );
  }
  var gl = Ad;
  U();
  se();
  se();
  U();
  U();
  se();
  se();
  function Ld(e, t) {
    for (var o in t) e[o] = t[o];
    return e;
  }
  function ml(e, t) {
    for (var o in e) if (o !== "__source" && !(o in t)) return !0;
    for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
    return !1;
  }
  function fl(e, t) {
    ((this.props = e), (this.context = t));
  }
  (((fl.prototype = new T()).isPureReactComponent = !0),
    (fl.prototype.shouldComponentUpdate = function (e, t) {
      return ml(this.props, e) || ml(this.state, t);
    }));
  var vl = A.__b;
  A.__b = function (e) {
    (e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      vl && vl(e));
  };
  var xb =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  var Dd = A.__e;
  A.__e = function (e, t, o, r) {
    if (e.then) {
      for (var s, a = t; (a = a.__); )
        if ((s = a.__c) && s.__c)
          return (
            t.__e == null && ((t.__e = o.__e), (t.__k = o.__k)),
            s.__c(e, t)
          );
    }
    Dd(e, t, o, r);
  };
  var wl = A.unmount;
  function kl(e, t, o) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (r) {
            typeof r.__c == "function" && r.__c();
          }),
          (e.__c.__H = null)),
        (e = Ld({}, e)).__c != null &&
          (e.__c.__P === o && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return kl(r, t, o);
          }))),
      e
    );
  }
  function Cl(e, t, o) {
    return (
      e &&
        o &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Cl(r, t, o);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && o.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = o))),
      e
    );
  }
  function Ts() {
    ((this.__u = 0), (this.t = null), (this.__b = null));
  }
  function Ml(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function tr() {
    ((this.u = null), (this.o = null));
  }
  ((A.unmount = function (e) {
    var t = e.__c;
    (t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), wl && wl(e));
  }),
    ((Ts.prototype = new T()).__c = function (e, t) {
      var o = t.__c,
        r = this;
      (r.t == null && (r.t = []), r.t.push(o));
      var s = Ml(r.__v),
        a = !1,
        i = function () {
          a || ((a = !0), (o.__R = null), s ? s(l) : l());
        };
      o.__R = i;
      var l = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var c = r.state.__a;
            r.__v.__k[0] = Cl(c, c.__c.__P, c.__c.__O);
          }
          var u;
          for (r.setState({ __a: (r.__b = null) }); (u = r.t.pop()); )
            u.forceUpdate();
        }
      };
      (r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
        e.then(i, i));
    }),
    (Ts.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (Ts.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var o = document.createElement("div"),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = kl(this.__b, o, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var s = t.__a && tt(te, null, e.fallback);
      return (
        s && (s.__u &= -33),
        [tt(te, null, t.__a ? null : e.children), s]
      );
    }));
  var bl = function (e, t, o) {
    if (
      (++o[1] === o[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    )
      for (o = e.u; o; ) {
        for (; o.length > 3; ) o.pop()();
        if (o[1] < o[0]) break;
        e.u = o = o[2];
      }
  };
  function Rd(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function zd(e) {
    var t = this,
      o = e.i;
    ((t.componentWillUnmount = function () {
      (ft(null, t.l), (t.l = null), (t.i = null));
    }),
      t.i && t.i !== o && t.componentWillUnmount(),
      t.l ||
        ((t.i = o),
        (t.l = {
          nodeType: 1,
          parentNode: o,
          childNodes: [],
          contains: function () {
            return !0;
          },
          appendChild: function (r) {
            (this.childNodes.push(r), t.i.appendChild(r));
          },
          insertBefore: function (r, s) {
            (this.childNodes.push(r), t.i.appendChild(r));
          },
          removeChild: function (r) {
            (this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
              t.i.removeChild(r));
          },
        })),
      ft(tt(Rd, { context: t.context }, e.__v), t.l));
  }
  function Il(e, t) {
    var o = tt(zd, { __v: e, i: t });
    return ((o.containerInfo = t), o);
  }
  (((tr.prototype = new T()).__a = function (e) {
    var t = this,
      o = Ml(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (s) {
        var a = function () {
          t.props.revealOrder ? (r.push(s), bl(t, e, r)) : s();
        };
        o ? o(a) : a();
      }
    );
  }),
    (tr.prototype.render = function (e) {
      ((this.u = null), (this.o = new Map()));
      var t = It(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var o = t.length; o--; ) this.o.set(t[o], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (tr.prototype.componentDidUpdate = tr.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, o) {
          bl(e, o, t);
        });
      }));
  var jd =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    Hd =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Bd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Od = /[A-Z0-9]/g,
    Vd = typeof document < "u",
    Ud = function (e) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  ((T.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(T.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    }));
  var _l = A.event;
  function Fd() {}
  function qd() {
    return this.cancelBubble;
  }
  function $d() {
    return this.defaultPrevented;
  }
  A.event = function (e) {
    return (
      _l && (e = _l(e)),
      (e.persist = Fd),
      (e.isPropagationStopped = qd),
      (e.isDefaultPrevented = $d),
      (e.nativeEvent = e)
    );
  };
  var Pl,
    Kd = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    yl = A.vnode;
  A.vnode = function (e) {
    (typeof e.type == "string" &&
      (function (t) {
        var o = t.props,
          r = t.type,
          s = {},
          a = r.indexOf("-") === -1;
        for (var i in o) {
          var l = o[i];
          if (
            !(
              (i === "value" && "defaultValue" in o && l == null) ||
              (Vd && i === "children" && r === "noscript") ||
              i === "class" ||
              i === "className"
            )
          ) {
            var c = i.toLowerCase();
            (i === "defaultValue" && "value" in o && o.value == null
              ? (i = "value")
              : i === "download" && l === !0
                ? (l = "")
                : c === "translate" && l === "no"
                  ? (l = !1)
                  : c[0] === "o" && c[1] === "n"
                    ? c === "ondoubleclick"
                      ? (i = "ondblclick")
                      : c !== "onchange" ||
                          (r !== "input" && r !== "textarea") ||
                          Ud(o.type)
                        ? c === "onfocus"
                          ? (i = "onfocusin")
                          : c === "onblur"
                            ? (i = "onfocusout")
                            : Bd.test(i) && (i = c)
                        : (c = i = "oninput")
                    : a && Hd.test(i)
                      ? (i = i.replace(Od, "-$&").toLowerCase())
                      : l === null && (l = void 0),
              c === "oninput" && s[(i = c)] && (i = "oninputCapture"),
              (s[i] = l));
          }
        }
        (r == "select" &&
          s.multiple &&
          Array.isArray(s.value) &&
          (s.value = It(o.children).forEach(function (u) {
            u.props.selected = s.value.indexOf(u.props.value) != -1;
          })),
          r == "select" &&
            s.defaultValue != null &&
            (s.value = It(o.children).forEach(function (u) {
              u.props.selected = s.multiple
                ? s.defaultValue.indexOf(u.props.value) != -1
                : s.defaultValue == u.props.value;
            })),
          o.class && !o.className
            ? ((s.class = o.class), Object.defineProperty(s, "className", Kd))
            : ((o.className && !o.class) || (o.class && o.className)) &&
              (s.class = s.className = o.className),
          (t.props = s));
      })(e),
      (e.$$typeof = jd),
      yl && yl(e));
  };
  var xl = A.__r;
  A.__r = function (e) {
    (xl && xl(e), (Pl = e.__c));
  };
  var Sl = A.diffed;
  A.diffed = function (e) {
    Sl && Sl(e);
    var t = e.props,
      o = e.__e;
    (o != null &&
      e.type === "textarea" &&
      "value" in t &&
      t.value !== o.value &&
      (o.value = t.value == null ? "" : t.value),
      (Pl = null));
  };
  function Wd(e) {
    let t = ce(null),
      [o, r] = X({ top: 0, left: 0, visible: !1 }),
      s = M(() => {
        (r((l) => ({ top: l.top, left: l.left, visible: !1 })),
          window.removeEventListener("mousedown", a),
          window.removeEventListener("scroll", s),
          e.onClose && e.onClose());
      }, []),
      a = M(
        (l) => {
          if (!t.current || !e.element) return;
          let c = l.clientX,
            u = l.clientY,
            g = t.current.getBoundingClientRect(),
            h = g.width,
            b = g.height,
            v = e.element.getBoundingClientRect(),
            C = v.width,
            P = v.height;
          (c >= g.left && c <= g.left + h && u >= g.top && u <= g.top + b) ||
            (c >= v.left && c <= v.left + C && u >= v.top && u <= v.top + P) ||
            s();
        },
        [e.element],
      );
    Se(() => {
      if (!e.open) {
        s();
        return;
      }
      return (
        setTimeout(() => {
          var b;
          if (!t.current || !e.element) return;
          let l = (b = t.current) == null ? void 0 : b.getBoundingClientRect(),
            c = e.element.getBoundingClientRect(),
            g = c.left + c.width / 2 - l.width / 2,
            h = c.top + c.height + 4;
          (window.addEventListener("mousedown", a),
            window.addEventListener("scroll", s),
            r({ left: g, top: h, visible: !0 }));
        }, 100),
        () => {
          (window.removeEventListener("mousedown", a),
            window.removeEventListener("scroll", s));
        }
      );
    }, [e.open]);
    let i =
      "p-2 fixed z-top flex flex-col bg-gray-800/80 rounded-lg border border-white/20 cursor-default transition-opacity";
    return (
      (i = _(i, e.class)),
      e.portalInto
        ? Il(
            n("div", {
              ref: t,
              class: i,
              style: {
                top: `${o.top}px`,
                left: `${o.left}px`,
                opacity: o.visible ? 1 : 0,
                pointerEvents: o.visible ? "auto" : "none",
                backdropFilter: "blur(8px)",
              },
              children: e.children,
            }),
            e.portalInto,
          )
        : n("div", {
            ref: t,
            class: i,
            style: {
              top: `${o.top}px`,
              left: `${o.left}px`,
              opacity: o.visible ? 1 : 0,
              pointerEvents: o.visible ? "auto" : "none",
              backdropFilter: "blur(8px)",
            },
            children: e.children,
          })
    );
  }
  var or = Wd;
  function Gd(e) {
    let t = ce(null),
      [o, r] = X(!1),
      s = M(() => {
        r((u) => !u);
      }, []),
      a = M(() => {
        r(!1);
      }, []),
      i = M(() => {
        p.goto("project_explorer", { project: e.folder });
      }, []),
      l = M(() => {
        (r(!1), e.onRename(e.folder.id));
      }, []),
      c = M(() => {
        (r(!1), e.onDelete(e.folder.id));
      }, []);
    return n("div", {
      class: "relative",
      children: [
        n(qt, {
          class: "hover:bg-white/10",
          title: e.folder.name,
          icon: n(aa, { class: "w-14 h-14" }),
          onClick: i,
        }),
        n(V, {
          containerRef: t,
          class: "w-6 h-6 absolute top-1 right-1",
          onClick: s,
          children: n(To, { class: "w-5 h-5", stroke: 2 }),
        }),
        n(or, {
          class: "w-28",
          element: t.current,
          open: o,
          onClose: a,
          children: n("ul", {
            class: "text-xs font-body text-gray-300",
            children: [
              n("li", {
                class:
                  "px-2 py-1.5 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer",
                onClick: l,
                children: "Rename",
              }),
              n("li", {
                class:
                  "px-2 py-1.5 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer",
                onClick: c,
                children: "Delete",
              }),
            ],
          }),
        }),
      ],
    });
  }
  var Tl = Gd;
  se();
  function Zd(e) {
    let [t, o] = X(""),
      [r, s] = X(!1),
      a = M((c) => {
        let u = c.target;
        o(u.value.slice(0, 30));
      }, []),
      i = M(async () => {
        let c = t.trim();
        if (!c) throw new Error("Project name is required.");
        s(!0);
        let { error: u } = await S(Pe.library.createProject(c));
        if (u) {
          (console.log(u), k.error(u.message), s(!1));
          return;
        }
        (k.success("Project created successfully!"),
          s(!1),
          o(""),
          e.onSuccess());
      }, [t]),
      l = M(
        (c) => {
          Re.isKey("Enter", c) && i();
        },
        [i],
      );
    return n(me, {
      winClass: "max-w-sm",
      open: e.open,
      children: [
        n(Ce, { onClose: e.onClose, children: "Create New Project" }),
        n(ge, {
          children: n(ie, {
            label: "Project Name",
            value: t,
            onInput: a,
            maxLength: 30,
            onKeyDown: l,
          }),
        }),
        n(_e, {
          children: [
            n("span", {
              class: "text-sm text-gray-400",
              children: [t.length, " / 30"],
            }),
            n(Be, {}),
            n(B, {
              theme: "blue",
              value: "Create",
              icon: n(Ao, { class: "w-5 h-5" }),
              loading: r,
              onClick: i,
            }),
          ],
        }),
      ],
    });
  }
  var El = Zd;
  se();
  function Qd(e) {
    let t = M(() => {
      (y.send(w.window.open, { href: "integrate.html", options: {} }),
        window.close());
    }, []);
    return n(me, {
      winClass: "max-w-lg",
      open: e.open,
      children: n(ge, {
        children: n("div", {
          class: "p-10 flex flex-1 justify-center items-center",
          children: n(Y, {
            class: "mt-0",
            icon: bt,
            title: "Integration Requires Re-Authentication",
            description:
              "Your integration has expired. Please re-authenticate your account to continue using the library.",
            children: n(B, {
              theme: "blue",
              value: "Re-Authenticate Account",
              icon: n(wt, { class: "w-4 h-4", stroke: 2 }),
              onClick: t,
            }),
          }),
        }),
      }),
    });
  }
  var rr = Qd;
  var Es = class extends T {
      constructor(o) {
        super(o);
        this.connectGoogleAccount = async () => {
          y.send(w.window.open, {
            href: "integrate.html",
            options: {
              windowId: p.tab.value.window_id,
              index: p.tab.value.index + 1,
            },
          });
        };
        this.getProjects = async () => {
          let { data: o } = await S(d.get(d.Schema.library.projects));
          this.setState({ projects: o || [] });
        };
        this.createNewProject = () => {
          this.setState({ newProjectPopupOpen: !0 });
        };
        this.onNewProjectSuccess = () => {
          (this.getProjects(), this.setState({ newProjectPopupOpen: !1 }));
        };
        this.openRenameProjectPopup = (o) => {
          var r;
          this.setState({
            renameProjectPopupOpen: !0,
            currentOptionProjectId: o,
            renameProjectName:
              ((r = this.state.projects.find((s) => s.id === o)) == null
                ? void 0
                : r.name) || "",
          });
        };
        this.openDeleteProjectPopup = (o) => {
          this.setState({
            deleteProjectPopupOpen: !0,
            currentOptionProjectId: o,
          });
        };
        this.onRenameProjectNameInput = (o) => {
          let r = o.target;
          this.setState({ renameProjectName: r.value.slice(0, 30) });
        };
        this.onRenameProjectKeyDown = (o) => {
          Re.isKey("Enter", o) && this.renameProject();
        };
        this.renameProject = async () => {
          let o = this.state.renameProjectName.trim();
          if (!o) throw new Error("Project name is required.");
          this.setState({ optionInProgress: !0 });
          let { data: r, error: s } = await S(
            Pe.library.renameProject(this.state.currentOptionProjectId, o),
          );
          if (s) {
            (console.log(s),
              k.error(s.message),
              this.setState({ optionInProgress: !1 }));
            return;
          }
          if (r.re_auth) {
            this.setState({
              reAuthOpen: !0,
              renameProjectPopupOpen: !1,
              optionInProgress: !1,
            });
            return;
          }
          (k.success("Project renamed successfully!"),
            this.setState({ optionInProgress: !1, renameProjectPopupOpen: !1 }),
            this.getProjects());
        };
        this.deleteProject = async () => {
          this.setState({ optionInProgress: !0 });
          let { data: o, error: r } = await S(
            Pe.library.deleteProject(this.state.currentOptionProjectId),
          );
          if (r) {
            (console.log(r),
              k.error(r.message),
              this.setState({ optionInProgress: !1 }));
            return;
          }
          if (o.re_auth) {
            this.setState({
              reAuthOpen: !0,
              deleteProjectPopupOpen: !1,
              optionInProgress: !1,
            });
            return;
          }
          (k.success("Project deleted successfully!"),
            this.setState({ optionInProgress: !1, deleteProjectPopupOpen: !1 }),
            this.getProjects());
        };
        this.state = {
          reAuthOpen: !1,
          integration: null,
          projects: [],
          newProjectPopupOpen: !1,
          renameProjectPopupOpen: !1,
          currentOptionProjectId: "",
          renameProjectName: "",
          deleteProjectPopupOpen: !1,
          optionInProgress: !1,
        };
      }
      async componentDidMount() {
        q.resizePopup(600, 600);
        let { data: o, error: r } = await S(d.get(d.Schema.auth.integration));
        if (r) {
          console.log(r);
          return;
        }
        (this.setState({ integration: o }), this.getProjects());
      }
      render() {
        var o;
        return n($, {
          children: [
            n(ne, {
              title: "Library",
              beta: !0,
              children:
                this.state.integration &&
                !this.state.integration.re_auth &&
                n(B, {
                  theme: "blue",
                  icon: n(Ao, { class: "w-5 h-5" }),
                  value: "New Project",
                  onClick: this.createNewProject,
                }),
            }),
            n(ae, {
              class: "p-0",
              children: this.state.integration
                ? this.state.integration.re_auth
                  ? n("div", {
                      class: "px-10 flex flex-1 justify-center items-center",
                      children: n(Y, {
                        class: "mt-0",
                        icon: bt,
                        title: "Integration Requires Re-Authentication",
                        description:
                          "Your integration has expired. Please re-authenticate your account to continue using the library.",
                        children: n(B, {
                          theme: "blue",
                          value: "Re-Authenticate Account",
                          icon: n(yr, { class: "w-4 h-4", stroke: 2 }),
                          onClick: this.connectGoogleAccount,
                        }),
                      }),
                    })
                  : this.state.projects.length > 0
                    ? n(de, {
                        children: n("div", {
                          class: "grid grid-cols-4 gap-2",
                          children: this.state.projects.map((r) =>
                            n(
                              Tl,
                              {
                                folder: r,
                                onRename: this.openRenameProjectPopup,
                                onDelete: this.openDeleteProjectPopup,
                              },
                              r.id,
                            ),
                          ),
                        }),
                      })
                    : n("div", {
                        class: "px-10 flex flex-1 justify-center items-center",
                        children: n(Y, {
                          class: "mt-0",
                          icon: No,
                          title: "No Projects",
                          description:
                            "Create a new project to start saving your assets.",
                        }),
                      })
                : n("div", {
                    class: "px-10 flex flex-1 justify-center items-center",
                    children: n(Y, {
                      class: "mt-0",
                      icon: bt,
                      title: "Welcome to Library",
                      description:
                        "To get started, sign in with your Google account. We will use Google Drive to store some of your Assets.",
                      children: n(B, {
                        theme: "blue",
                        value: "Connect Account",
                        icon: n(yr, { class: "w-4 h-4", stroke: 2 }),
                        onClick: this.connectGoogleAccount,
                      }),
                    }),
                  }),
            }),
            n(El, {
              open: this.state.newProjectPopupOpen,
              onSuccess: this.onNewProjectSuccess,
              onClose: () => this.setState({ newProjectPopupOpen: !1 }),
            }),
            n(me, {
              winClass: "max-w-sm",
              open: this.state.renameProjectPopupOpen,
              children: [
                n(Ce, {
                  onClose: () => this.setState({ renameProjectPopupOpen: !1 }),
                  children: "Create New Project",
                }),
                n(ge, {
                  children: n(ie, {
                    label: "Project Name",
                    value: this.state.renameProjectName,
                    onInput: this.onRenameProjectNameInput,
                    maxLength: 30,
                    onKeyDown: this.onRenameProjectKeyDown,
                  }),
                }),
                n(_e, {
                  children: [
                    n("span", {
                      class: "text-sm text-gray-400",
                      children: [this.state.renameProjectName.length, " / 30"],
                    }),
                    n(Be, {}),
                    n(B, {
                      theme: "blue",
                      value: "Save",
                      icon: n(Nt, { class: "w-5 h-5" }),
                      loading: this.state.optionInProgress,
                      onClick: this.renameProject,
                    }),
                  ],
                }),
              ],
            }),
            n(me, {
              winClass: "max-w-sm",
              open: this.state.deleteProjectPopupOpen,
              children: [
                n(Ce, {
                  onClose: () => this.setState({ deleteProjectPopupOpen: !1 }),
                  children: "Delete Project",
                }),
                n(ge, {
                  children: n("p", {
                    class: "text-sm text-gray-400",
                    children: [
                      'Are you sure you want to delete "',
                      n("span", {
                        class: "text-white font-medium",
                        children:
                          (o = this.state.projects.find(
                            (r) => r.id === this.state.currentOptionProjectId,
                          )) == null
                            ? void 0
                            : o.name,
                      }),
                      '" and all of its assets? This action cannot be undone.',
                    ],
                  }),
                }),
                n(_e, {
                  children: n(B, {
                    theme: "red",
                    value: "Delete",
                    icon: n(Fe, { class: "w-5 h-5" }),
                    loading: this.state.optionInProgress,
                    onClick: this.deleteProject,
                  }),
                }),
              ],
            }),
            n(rr, { open: this.state.reAuthOpen }),
          ],
        });
      }
    },
    Nl = Es;
  U();
  se();
  function Yd(e) {
    let t = ce(null),
      [o, r] = X(!1);
    return (
      Se(() => {
        let s = new IntersectionObserver((a) => {
          a.forEach((i) => {
            i.isIntersecting && (r(!0), s.disconnect());
          });
        });
        return (t.current && s.observe(t.current), () => s.disconnect());
      }, []),
      n("div", {
        ref: t,
        class: e.class,
        style: e.style,
        children: o ? e.children : null,
      })
    );
  }
  var Al = Yd;
  se();
  var Ns = ["kb", "mb", "gb"];
  function Xd(e) {
    return new Promise((t) => {
      let o = new FileReader();
      ((o.onloadend = () => t(o.result)), o.readAsDataURL(e));
    });
  }
  function As(e) {
    let t = `${e.toFixed(1)}kb`;
    for (let o = 0; o < Ns.length && !(e < 1024); o++)
      ((e = e / 1024),
        (t = `${e.toFixed(1)}${Ns[o >= Ns.length - 1 ? o : o + 1]}`));
    return t;
  }
  async function Jd(e) {
    try {
      let t = { bytes: 0, formatted: "0" },
        o = await fetch(e).then((s) => s.blob()),
        r = parseFloat((o.size / 1024).toFixed(1));
      return ((t.bytes = r), (t.formatted = As(r)), t);
    } catch (t) {
      throw t;
    }
  }
  function e2(e, t) {
    let o = e.bytes - t.bytes,
      r = As(o);
    return { bytes: o, formatted: r };
  }
  function t2(e) {
    let t = document.createElement("a");
    return ((t.href = e), t.href);
  }
  function o2(e, t = "") {
    let o = "";
    return (
      e.startsWith("data:")
        ? (o = `unnamed.${e.split(";")[0].split(":")[1].split("/")[1].split("+")[0]}`)
        : (o = new URL(e).pathname.split("/").pop() || "unnamed"),
      o && o.includes(".") ? o : t ? `unnamed.${t}` : "unnamed"
    );
  }
  function r2(e) {
    let t = e.split(","),
      o = t[0].match(/:(.*?);/)[1],
      r = atob(t[1]),
      s = r.length,
      a = new Uint8Array(s);
    for (; s--; ) a[s] = r.charCodeAt(s);
    return new Blob([a], { type: o });
  }
  function s2(e) {
    let t = e.toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"].includes(t)
      ? t.includes("svg")
        ? "image/svg+xml"
        : `image/${e}`
      : ["mp4", "webm", "ogg"].includes(t)
        ? `video/${e}`
        : ["pdf", "zip", "json"].includes(t)
          ? `application/${e}`
          : ["html"].includes(t)
            ? "text/html"
            : ["ico"].includes(t)
              ? "image/x-icon"
              : ["color"].includes(t)
                ? "text/color"
                : "text/plain";
  }
  var n2 = {
      readAsync: Xd,
      getSize: Jd,
      getSizeDifference: e2,
      getFormattedSize: As,
      getURLFromHref: t2,
      getNameFromURL: o2,
      dataURLtoBlob: r2,
      getMimeType: s2,
    },
    Ll = n2;
  var Dl = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/avif",
      "image/svg+xml",
    ],
    Rl = ["video/mp4", "video/webm", "video/ogg"],
    zl = ["application/pdf"],
    jl = ["application/json"],
    Hl = ["image/x-icon"],
    Ls = ["text/svg"],
    Bl = ["text/color"],
    a2 = [...Bl, ...Ls];
  function i2(e) {
    return !a2.includes(e);
  }
  function Kt(e, t) {
    let o = !1;
    for (let r of t) {
      let s = r.split("/").pop();
      s && e.endsWith(s) && (o = !0);
    }
    return o;
  }
  function l2(e, t) {
    return !e || !t
      ? !1
      : c2(t)
        ? Kt(e, Dl)
        : u2(t)
          ? Kt(e, Rl)
          : d2(t)
            ? Kt(e, zl)
            : h2(t)
              ? Kt(e, jl)
              : p2(t)
                ? Kt(e, Hl)
                : Ol(t)
                  ? Kt(e, Ls)
                  : !0;
  }
  function c2(e) {
    return Dl.includes(e);
  }
  function u2(e) {
    return Rl.includes(e);
  }
  function d2(e) {
    return zl.includes(e);
  }
  function h2(e) {
    return jl.includes(e);
  }
  function p2(e) {
    return Hl.includes(e);
  }
  function Ol(e) {
    return Ls.includes(e);
  }
  function g2(e) {
    return Bl.includes(e);
  }
  var m2 = { isGoogleDriveAsset: i2, validateName: l2, isSvg: Ol, isColor: g2 },
    $e = m2;
  function f2(e) {
    let t = ce(null),
      [o, r] = X(!1),
      s = M((N) => {
        (N.stopImmediatePropagation(), r((R) => !R));
      }, []),
      a = M(() => {
        r(!1);
      }, []),
      i = M((N) => {
        (N.stopImmediatePropagation(), r(!1), e.onRename(e.file.id));
      }, []),
      l = M((N) => {
        (N.stopImmediatePropagation(), r(!1), e.onDelete(e.file.id));
      }, []),
      c = M((N) => {
        (N.stopImmediatePropagation(),
          $o.copyText(e.file.content),
          $e.isSvg(e.file.mime_type)
            ? k.success("SVG copied to clipboard")
            : $e.isColor(e.file.mime_type)
              ? k.success("Color copied to clipboard")
              : k.success("URL copied to clipboard"));
      }, []),
      u = M(() => {
        e.onToggleSelect && e.onToggleSelect(e.file.id);
      }, []),
      g = M(() => {
        y.send(w.window.open, { url: e.file.content, options: { active: !1 } });
      }, []),
      h = M(() => {
        y.send(w.downloader.download, {
          content: { src: e.file.content, type: "image/svg+xml" },
          filename: e.file.name,
        });
      }, []),
      b = "Copy File URL",
      v = null;
    $e.isSvg(e.file.mime_type)
      ? ((v = n("div", {
          class: "file-svg",
          dangerouslySetInnerHTML: { __html: e.file.content },
        })),
        (b = "Copy SVG"))
      : $e.isColor(e.file.mime_type)
        ? ((b = "Copy Color"),
          (v = n("div", {
            class: "w-24 h-24 rounded-full border border-white/10",
            style: { backgroundColor: e.file.content },
          })))
        : (v = n(Al, {
            class: "max-w-full max-h-full",
            children: n("img", {
              class: "max-w-full max-h-full min-w-20",
              src: e.file.thumbnail,
            }),
          }));
    let C = Ll.getFormattedSize(e.file.size),
      P = e.file.name;
    if ($e.isGoogleDriveAsset(e.file.mime_type)) {
      let N = e.file.name.split(".").slice(0, -1).join("."),
        R = e.file.name.split(".").pop();
      P = P.length > 10 ? `${N.substring(0, 10)}...${R}` : P;
    } else P = P.length > 10 ? `${P.substring(0, 10)}...` : P;
    return n("div", {
      class:
        "relative group w-full flex flex-col items-center justify-center text-gray-300 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition hover:text-white hover:bg-white/10",
      children: [
        n("div", {
          class:
            "relative w-full h-full p-2 aspect-square flex items-center justify-center bg-transparent-dark-img bg-no-repeat bg-cover bg-clip-padding rounded-t-lg cursor-pointer overflow-hidden",
          children: [
            v,
            n("div", {
              class:
                "absolute inset-0 flex items-center justify-center gap-1 bg-black/50 rounded-t-lg  transition-opacity opacity-0 group-hover:opacity-100",
              children: [
                n(V, {
                  theme: "white",
                  class: "w-8 h-8",
                  onClick: c,
                  tooltip: { content: b },
                  children: n(st, { class: "w-4 h-4", stroke: 2 }),
                }),
                $e.isSvg(e.file.mime_type)
                  ? n(V, {
                      theme: "white",
                      class: "w-8 h-8",
                      onClick: h,
                      tooltip: { content: "Open" },
                      children: n(Hn, { class: "w-5 h-5", stroke: 2 }),
                    })
                  : null,
                $e.isGoogleDriveAsset(e.file.mime_type)
                  ? n(V, {
                      theme: "white",
                      class: "w-8 h-8",
                      onClick: g,
                      tooltip: { content: "Open" },
                      children: n(rt, { class: "w-5 h-5", stroke: 2 }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        n("div", {
          class: "w-full p-2 flex flex-col",
          children: [
            n("span", {
              class: "text-sm text-white font-display",
              children: P,
            }),
            n("div", {
              class: "mt-1 text-xs flex items-center",
              children: n("span", {
                class: "text-gray-300 font-body",
                children: C,
              }),
            }),
          ],
        }),
        n(V, {
          containerRef: t,
          class: "w-6 h-6 absolute top-1 right-1",
          onClick: s,
          children: n(To, { class: "w-5 h-5", stroke: 2 }),
        }),
        n(or, {
          class: "w-28",
          element: t.current,
          open: o,
          onClose: a,
          children: n("ul", {
            class: "text-xs font-body text-gray-300",
            children: [
              n("li", {
                class:
                  "px-2 py-1.5 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer",
                onClick: i,
                children: "Rename",
              }),
              n("li", {
                class:
                  "px-2 py-1.5 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer",
                onClick: l,
                children: "Delete",
              }),
            ],
          }),
        }),
      ],
    });
  }
  var Vl = f2;
  var Ds = class extends T {
      constructor(o) {
        super(o);
        this.offset = 0;
        this.end = !1;
        this.styling = `
        .file-svg svg {
            min-width: 80px;
            min-height: 80px;
        }
    `;
        this.onScroll = (o) => {
          let r = o.currentTarget;
          r.scrollTop + r.clientHeight >= r.scrollHeight - 1 && this.getFiles();
        };
        this.getFiles = async () => {
          if (this.state.loading || this.end) return;
          this.setState({ loading: !0 });
          let { data: o, error: r } = await S(
            Pe.library.getFiles(this.props.project.id, this.offset),
          );
          if (r) {
            (console.log(r),
              k.error(r.message),
              this.setState({ loading: !1 }));
            return;
          }
          if (o.re_auth) {
            this.setState({
              reAuthOpen: !0,
              renamePopupOpen: !1,
              optionInProgress: !1,
            });
            return;
          }
          ((this.offset += o.data.files.length),
            (this.end = o.data.end),
            this.setState((s) => ({
              loading: !1,
              files: [...s.files, ...o.data.files],
            })));
        };
        this.openRenamePopup = (o) => {
          var r;
          this.setState({
            renamePopupOpen: !0,
            currentFileId: o,
            renameName:
              ((r = this.state.files.find((s) => s.id === o)) == null
                ? void 0
                : r.name) || "",
          });
        };
        this.openDeletePopup = (o) => {
          this.setState({ deletePopupOpen: !0, currentFileId: o });
        };
        this.onRenameNameInput = (o) => {
          let r = o.target;
          this.setState({ renameName: r.value.slice(0, 30) });
        };
        this.onRenameNameKeyDown = (o) => {
          Re.isKey("Enter", o) && this.renameFile();
        };
        this.renameFile = async () => {
          let o = this.state.renameName.trim(),
            r = this.state.files.find((i) => i.id === this.state.currentFileId);
          if (!r) return k.error("File not found.");
          if (!$e.validateName(o, r.mime_type))
            return k.error(
              "Name should include an extension for Images, Videos, PDFs, SVGs, Favicons and Lottie files.",
            );
          this.setState({ optionInProgress: !0 });
          let { data: s, error: a } = await S(
            Pe.library.renameFile(this.state.currentFileId, o),
          );
          if (a) {
            (console.log(a),
              k.error(a.message),
              this.setState({ optionInProgress: !1 }));
            return;
          }
          if (s.re_auth) {
            this.setState({
              reAuthOpen: !0,
              renamePopupOpen: !1,
              optionInProgress: !1,
            });
            return;
          }
          (k.success("File renamed successfully!"),
            this.setState((i) => ({
              optionInProgress: !1,
              renamePopupOpen: !1,
              files: i.files.map((l) =>
                l.id === this.state.currentFileId
                  ? re(L({}, l), { name: o })
                  : l,
              ),
            })));
        };
        this.deleteFile = async () => {
          this.setState({ optionInProgress: !0 });
          let { data: o, error: r } = await S(
            Pe.library.deleteFile(this.state.currentFileId),
          );
          if (r) {
            (console.log(r),
              k.error(r.message),
              this.setState({ optionInProgress: !1 }));
            return;
          }
          if (o.re_auth) {
            this.setState({
              reAuthOpen: !0,
              deletePopupOpen: !1,
              optionInProgress: !1,
            });
            return;
          }
          (k.success("File deleted successfully!"),
            this.setState((s) => ({
              optionInProgress: !1,
              deletePopupOpen: !1,
              files: s.files.filter((a) => a.id !== this.state.currentFileId),
            })));
        };
        this.state = {
          reAuthOpen: !1,
          files: [],
          loading: !1,
          renamePopupOpen: !1,
          currentFileId: "",
          renameName: "",
          deletePopupOpen: !1,
          optionInProgress: !1,
        };
      }
      async componentDidMount() {
        (q.resizePopup(600, 600), this.getFiles());
      }
      render() {
        var o;
        return n($, {
          children: [
            n(ne, { title: this.props.project.name }),
            n(ae, {
              class: "p-0",
              children: [
                n("style", {
                  dangerouslySetInnerHTML: { __html: this.styling },
                }),
                n(de, {
                  onScroll: this.onScroll,
                  children: [
                    this.state.files.length > 0
                      ? n("div", {
                          class: "grid grid-cols-4 gap-2",
                          children: this.state.files.map((r) =>
                            n(
                              Vl,
                              {
                                file: r,
                                onRename: this.openRenamePopup,
                                onDelete: this.openDeletePopup,
                              },
                              r.id,
                            ),
                          ),
                        })
                      : null,
                    this.state.files.length == 0 && !this.state.loading
                      ? n("div", {
                          class:
                            "px-10 h-full flex flex-1 justify-center items-center",
                          children: n(Y, {
                            class: "mt-0",
                            icon: No,
                            title: "No Assets",
                            description:
                              "Save assets to your library to get started.",
                          }),
                        })
                      : null,
                    this.state.loading
                      ? n("div", {
                          class: "mt-4 w-full flex justify-center",
                          children: n(at, { size: "w-8 h-8" }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            n(me, {
              winClass: "max-w-sm",
              open: this.state.renamePopupOpen,
              children: [
                n(Ce, {
                  onClose: () => this.setState({ renamePopupOpen: !1 }),
                  children: "Rename File",
                }),
                n(ge, {
                  children: n(ie, {
                    label: "File Name",
                    value: this.state.renameName,
                    onInput: this.onRenameNameInput,
                    maxLength: 30,
                    onKeyDown: this.onRenameNameKeyDown,
                  }),
                }),
                n(_e, {
                  children: [
                    n("span", {
                      class: "text-sm text-gray-400",
                      children: [this.state.renameName.length, " / 30"],
                    }),
                    n(Be, {}),
                    n(B, {
                      theme: "blue",
                      value: "Save",
                      icon: n(Nt, { class: "w-5 h-5" }),
                      loading: this.state.optionInProgress,
                      onClick: this.renameFile,
                    }),
                  ],
                }),
              ],
            }),
            n(me, {
              winClass: "max-w-sm",
              open: this.state.deletePopupOpen,
              children: [
                n(Ce, {
                  onClose: () => this.setState({ deletePopupOpen: !1 }),
                  children: "Delete File",
                }),
                n(ge, {
                  children: n("p", {
                    class: "text-sm text-gray-400",
                    children: [
                      'Are you sure you want to delete "',
                      n("span", {
                        class: "text-white font-medium",
                        children:
                          (o = this.state.files.find(
                            (r) => r.id === this.state.currentFileId,
                          )) == null
                            ? void 0
                            : o.name,
                      }),
                      '"? This action cannot be undone.',
                    ],
                  }),
                }),
                n(_e, {
                  children: n(B, {
                    theme: "red",
                    value: "Delete",
                    icon: n(Fe, { class: "w-5 h-5" }),
                    loading: this.state.optionInProgress,
                    onClick: this.deleteFile,
                  }),
                }),
              ],
            }),
            n(rr, { open: this.state.reAuthOpen }),
          ],
        });
      }
    },
    Ul = Ds;
  var v2 = {
    loading: Ta,
    auth: ol,
    index: Ra,
    settings: dl,
    shortcuts: pl,
    library: Nl,
    color_eyedropper: Ei,
    debug: Ni,
    custom_code: Bi,
    clear_browsing_data: Oi,
    capture: Vi,
    full_page: Fi,
    site_stack: el,
    project_explorer: Ul,
  };
  function w2() {
    let e = p.history.value[p.history.value.length - 1],
      t = v2[e.name];
    return n(te, {
      children: [
        n(t, L({}, e.props)),
        n(rl, {}),
        n(ll, {}),
        n(ia, {}),
        n(gl, { root: document.body }),
      ],
    });
  }
  async function b2() {
    (cl.create(),
      sl.create(),
      k.create(),
      p.goto("loading"),
      ft(n(w2, {}), document.body));
  }
  y.listen((e, t, o) => {
    switch (e) {
      case w.auth.setStatus:
        // BYPASS FOR TESTING: always show index, skip auth popup
        (p.tab.value.url.startsWith("http") ||
              p.tab.value.url.startsWith("file")) &&
              ((p.tab.value = re(L({}, p.tab.value), { is_injectable: !0 })),
              y.send(w.tools.getStatus, {}, p.tab.value.id));
        p.goto("index");
        // t.status
        //   ? ((p.tab.value.url.startsWith("http") ||
        //       p.tab.value.url.startsWith("file")) &&
        //       ((p.tab.value = re(L({}, p.tab.value), { is_injectable: !0 })),
        //       y.send(w.tools.getStatus, {}, p.tab.value.id)),
        //     p.goto("index"))
        //   : p.goto("auth");
        break;
      case w.tools.setStatus:
        ((p.tab.value = re(L({}, p.tab.value), { is_injected: !0 })),
          (p.toolStatus.value = {
            inspector: t.inspector,
            color_eyedropper: t.color_eyedropper,
            assets: t.assets,
            responsive: t.responsive,
            seo: t.seo,
          }));
        break;
    }
  });
  window.onload = async () => {
    let e;
    try {
      e = await f.getActiveTab();
    } catch (t) {
      console.log(t);
    }
    !e ||
      ((p.tab.value = {
        id: e.id,
        url: e.url,
        window_id: e.windowId,
        index: e.index,
        is_injected: !1,
        is_injectable: !1,
      }),
      b2(),
      // BYPASS FOR TESTING: auth check disabled
      // y.send(w.auth.check, {})
      p.goto("index"));
  };
})();
