var Sc = Object.defineProperty;
var zc = (l, e, t) =>
  e in l
    ? Sc(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (l[e] = t);
var cn = (l, e, t) => zc(l, typeof e != "symbol" ? e + "" : e, t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const r of u.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = t(a);
    fetch(a.href, u);
  }
})();
function A() {}
const Pc = (l) => l;
function I(l, e) {
  for (const t in e) l[t] = e[t];
  return l;
}
function yr(l) {
  return l();
}
function _i() {
  return Object.create(null);
}
function at(l) {
  l.forEach(yr);
}
function g1(l) {
  return typeof l == "function";
}
function ve(l, e) {
  return l != l
    ? e == e
    : l !== e || (l && typeof l == "object") || typeof l == "function";
}
let Ml;
function _0(l, e) {
  return l === e
    ? !0
    : (Ml || (Ml = document.createElement("a")), (Ml.href = e), l === Ml.href);
}
function Oc(l) {
  return Object.keys(l).length === 0;
}
function Ar(l, ...e) {
  if (l == null) {
    for (const n of e) n(void 0);
    return A;
  }
  const t = l.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function bi(l) {
  let e;
  return (Ar(l, (t) => (e = t))(), e);
}
function gn(l, e, t) {
  l.$$.on_destroy.push(Ar(e, t));
}
function Ge(l, e, t, n) {
  if (l) {
    const a = Mr(l, e, t, n);
    return l[0](a);
  }
}
function Mr(l, e, t, n) {
  return l[1] && n ? I(t.ctx.slice(), l[1](n(e))) : t.ctx;
}
function Ye(l, e, t, n) {
  if (l[2] && n) {
    const a = l[2](n(t));
    if (e.dirty === void 0) return a;
    if (typeof a == "object") {
      const u = [],
        r = Math.max(e.dirty.length, a.length);
      for (let p = 0; p < r; p += 1) u[p] = e.dirty[p] | a[p];
      return u;
    }
    return e.dirty | a;
  }
  return e.dirty;
}
function Qe(l, e, t, n, a, u) {
  if (a) {
    const r = Mr(e, t, n, u);
    l.p(r, a);
  }
}
function Je(l) {
  if (l.ctx.length > 32) {
    const e = [],
      t = l.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function xe(l) {
  const e = {};
  for (const t in l) t[0] !== "$" && (e[t] = l[t]);
  return e;
}
function re(l, e) {
  const t = {};
  e = new Set(e);
  for (const n in l) !e.has(n) && n[0] !== "$" && (t[n] = l[n]);
  return t;
}
function E1(l) {
  return l && g1(l.destroy) ? l.destroy : A;
}
const Zr = typeof window < "u";
let Tc = Zr ? () => window.performance.now() : () => Date.now(),
  Sn = Zr ? (l) => requestAnimationFrame(l) : A;
const O0 = new Set();
function Hr(l) {
  (O0.forEach((e) => {
    e.c(l) || (O0.delete(e), e.f());
  }),
    O0.size !== 0 && Sn(Hr));
}
function Ec(l) {
  let e;
  return (
    O0.size === 0 && Sn(Hr),
    {
      promise: new Promise((t) => {
        O0.add((e = { c: l, f: t }));
      }),
      abort() {
        O0.delete(e);
      },
    }
  );
}
const Cr =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function h(l, e) {
  l.appendChild(e);
}
function Lr(l) {
  if (!l) return document;
  const e = l.getRootNode ? l.getRootNode() : l.ownerDocument;
  return e && e.host ? e : l.ownerDocument;
}
function Dc(l) {
  const e = v("style");
  return ((e.textContent = "/* empty */"), Fc(Lr(l), e), e.sheet);
}
function Fc(l, e) {
  return (h(l.head || l, e), e.sheet);
}
function b(l, e, t) {
  l.insertBefore(e, t || null);
}
function _(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function D1(l, e) {
  for (let t = 0; t < l.length; t += 1) l[t] && l[t].d(e);
}
function v(l) {
  return document.createElement(l);
}
function y(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function K(l) {
  return document.createTextNode(l);
}
function Z() {
  return K(" ");
}
function c1() {
  return K("");
}
function W(l, e, t, n) {
  return (l.addEventListener(e, t, n), () => l.removeEventListener(e, t, n));
}
function Vr(l) {
  return function (e) {
    return (e.preventDefault(), l.call(this, e));
  };
}
function a0(l) {
  return function (e) {
    return (e.stopPropagation(), l.call(this, e));
  };
}
function o(l, e, t) {
  t == null
    ? l.removeAttribute(e)
    : l.getAttribute(e) !== t && l.setAttribute(e, t);
}
function oe(l, e) {
  for (const t in e) o(l, t, e[t]);
}
function un(l) {
  return l === "" ? null : +l;
}
function Wc(l) {
  return Array.from(l.childNodes);
}
function ze(l, e) {
  ((e = "" + e), l.data !== e && (l.data = e));
}
function b1(l, e) {
  l.value = e ?? "";
}
function ce(l, e, t, n) {
  t == null ? l.style.removeProperty(e) : l.style.setProperty(e, t, "");
}
function vi(l, e, t) {
  for (let n = 0; n < l.options.length; n += 1) {
    const a = l.options[n];
    if (a.__value === e) {
      a.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (l.selectedIndex = -1);
}
function Rc(l) {
  const e = l.querySelector(":checked");
  return e && e.__value;
}
function Nt(l, e, t) {
  l.classList.toggle(e, !!t);
}
function Sr(l, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(l, { detail: e, bubbles: t, cancelable: n });
}
function ki(l, e) {
  return new l(e);
}
const Sl = new Map();
let zl = 0;
function Kc(l) {
  let e = 5381,
    t = l.length;
  for (; t--; ) e = ((e << 5) - e) ^ l.charCodeAt(t);
  return e >>> 0;
}
function Nc(l, e) {
  const t = { stylesheet: Dc(e), rules: {} };
  return (Sl.set(l, t), t);
}
function wi(l, e, t, n, a, u, r, p = 0) {
  const d = 16.666 / n;
  let c = `{\n`;
  for (let f = 0; f <= 1; f += d) {
    const M = e + (t - e) * u(f);
    c += f * 100 + `%{${r(M, 1 - M)}}\n`;
  }
  const g = c + `100% {${r(t, 1 - t)}}\n}`,
    m = `__svelte_${Kc(g)}_${p}`,
    i = Lr(l),
    { stylesheet: s, rules: w } = Sl.get(i) || Nc(i, l);
  w[m] ||
    ((w[m] = !0), s.insertRule(`@keyframes ${m} ${g}`, s.cssRules.length));
  const k = l.style.animation || "";
  return (
    (l.style.animation = `${k ? `${k}, ` : ""}${m} ${n}ms linear ${a}ms 1 both`),
    (zl += 1),
    m
  );
}
function Uc(l, e) {
  const t = (l.style.animation || "").split(", "),
    n = t.filter(
      e ? (u) => u.indexOf(e) < 0 : (u) => u.indexOf("__svelte") === -1,
    ),
    a = t.length - n.length;
  a && ((l.style.animation = n.join(", ")), (zl -= a), zl || Ic());
}
function Ic() {
  Sn(() => {
    zl ||
      (Sl.forEach((l) => {
        const { ownerNode: e } = l.stylesheet;
        e && _(e);
      }),
      Sl.clear());
  });
}
let Y0;
function X0(l) {
  Y0 = l;
}
function Nl() {
  if (!Y0) throw new Error("Function called outside component initialization");
  return Y0;
}
function b0(l) {
  Nl().$$.on_mount.push(l);
}
function Ul(l) {
  Nl().$$.on_destroy.push(l);
}
function x0() {
  const l = Nl();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const a = l.$$.callbacks[e];
    if (a) {
      const u = Sr(e, t, { cancelable: n });
      return (
        a.slice().forEach((r) => {
          r.call(l, u);
        }),
        !u.defaultPrevented
      );
    }
    return !0;
  };
}
function $e(l) {
  return Nl().$$.context.get(l);
}
function q1(l, e) {
  const t = l.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const P0 = [],
  Jt = [];
let T0 = [];
const _n = [],
  zr = Promise.resolve();
let bn = !1;
function Pr() {
  bn || ((bn = !0), zr.then(Or));
}
function Q0() {
  return (Pr(), zr);
}
function G1(l) {
  T0.push(l);
}
function F1(l) {
  _n.push(l);
}
const fn = new Set();
let L0 = 0;
function Or() {
  if (L0 !== 0) return;
  const l = Y0;
  do {
    try {
      for (; L0 < P0.length; ) {
        const e = P0[L0];
        (L0++, X0(e), Bc(e.$$));
      }
    } catch (e) {
      throw ((P0.length = 0), (L0 = 0), e);
    }
    for (X0(null), P0.length = 0, L0 = 0; Jt.length; ) Jt.pop()();
    for (let e = 0; e < T0.length; e += 1) {
      const t = T0[e];
      fn.has(t) || (fn.add(t), t());
    }
    T0.length = 0;
  } while (P0.length);
  for (; _n.length; ) _n.pop()();
  ((bn = !1), fn.clear(), X0(l));
}
function Bc(l) {
  if (l.fragment !== null) {
    (l.update(), at(l.before_update));
    const e = l.dirty;
    ((l.dirty = [-1]),
      l.fragment && l.fragment.p(l.ctx, e),
      l.after_update.forEach(G1));
  }
}
function qc(l) {
  const e = [],
    t = [];
  (T0.forEach((n) => (l.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (T0 = e));
}
let q0;
function jc() {
  return (
    q0 ||
      ((q0 = Promise.resolve()),
      q0.then(() => {
        q0 = null;
      })),
    q0
  );
}
function dn(l, e, t) {
  l.dispatchEvent(Sr(`${e ? "intro" : "outro"}${t}`));
}
const Ll = new Set();
let j1;
function Ie() {
  j1 = { r: 0, c: [], p: j1 };
}
function Be() {
  (j1.r || at(j1.c), (j1 = j1.p));
}
function C(l, e) {
  l && l.i && (Ll.delete(l), l.i(e));
}
function V(l, e, t, n) {
  if (l && l.o) {
    if (Ll.has(l)) return;
    (Ll.add(l),
      j1.c.push(() => {
        (Ll.delete(l), n && (t && l.d(1), n()));
      }),
      l.o(e));
  } else n && n();
}
const Xc = { duration: 0 };
function r0(l, e, t, n) {
  let u = e(l, t, { direction: "both" }),
    r = n ? 0 : 1,
    p = null,
    d = null,
    c = null,
    g;
  function m() {
    c && Uc(l, c);
  }
  function i(w, k) {
    const f = w.b - r;
    return (
      (k *= Math.abs(f)),
      {
        a: r,
        b: w.b,
        d: f,
        duration: k,
        start: w.start,
        end: w.start + k,
        group: w.group,
      }
    );
  }
  function s(w) {
    const {
        delay: k = 0,
        duration: f = 300,
        easing: M = Pc,
        tick: S = A,
        css: O,
      } = u || Xc,
      P = { start: Tc() + k, b: w };
    (w || ((P.group = j1), (j1.r += 1)),
      "inert" in l &&
        (w ? g !== void 0 && (l.inert = g) : ((g = l.inert), (l.inert = !0))),
      p || d
        ? (d = P)
        : (O && (m(), (c = wi(l, r, w, f, k, M, O))),
          w && S(0, 1),
          (p = i(P, f)),
          G1(() => dn(l, w, "start")),
          Ec((T) => {
            if (
              (d &&
                T > d.start &&
                ((p = i(d, f)),
                (d = null),
                dn(l, p.b, "start"),
                O && (m(), (c = wi(l, r, p.b, p.duration, 0, M, u.css)))),
              p)
            ) {
              if (T >= p.end)
                (S((r = p.b), 1 - r),
                  dn(l, p.b, "end"),
                  d || (p.b ? m() : --p.group.r || at(p.group.c)),
                  (p = null));
              else if (T >= p.start) {
                const L = T - p.start;
                ((r = p.a + p.d * M(L / p.duration)), S(r, 1 - r));
              }
            }
            return !!(p || d);
          })));
  }
  return {
    run(w) {
      g1(u)
        ? jc().then(() => {
            ((u = u({ direction: w ? "in" : "out" })), s(w));
          })
        : s(w);
    },
    end() {
      (m(), (p = d = null));
    },
  };
}
function Mt(l) {
  return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l);
}
function $0(l, e) {
  V(l, 1, 1, () => {
    e.delete(l.key);
  });
}
function el(l, e, t, n, a, u, r, p, d, c, g, m) {
  let i = l.length,
    s = u.length,
    w = i;
  const k = {};
  for (; w--; ) k[l[w].key] = w;
  const f = [],
    M = new Map(),
    S = new Map(),
    O = [];
  for (w = s; w--; ) {
    const z = m(a, u, w),
      F = t(z);
    let E = r.get(F);
    (E ? O.push(() => E.p(z, e)) : ((E = c(F, z)), E.c()),
      M.set(F, (f[w] = E)),
      F in k && S.set(F, Math.abs(w - k[F])));
  }
  const P = new Set(),
    T = new Set();
  function L(z) {
    (C(z, 1), z.m(p, g), r.set(z.key, z), (g = z.first), s--);
  }
  for (; i && s; ) {
    const z = f[s - 1],
      F = l[i - 1],
      E = z.key,
      D = F.key;
    z === F
      ? ((g = z.first), i--, s--)
      : M.has(D)
        ? !r.has(E) || P.has(E)
          ? L(z)
          : T.has(D)
            ? i--
            : S.get(E) > S.get(D)
              ? (T.add(E), L(z))
              : (P.add(D), i--)
        : (d(F, r), i--);
  }
  for (; i--; ) {
    const z = l[i];
    M.has(z.key) || d(z, r);
  }
  for (; s; ) L(f[s - 1]);
  return (at(O), f);
}
function et(l, e) {
  const t = {},
    n = {},
    a = { $$scope: 1 };
  let u = l.length;
  for (; u--; ) {
    const r = l[u],
      p = e[u];
    if (p) {
      for (const d in r) d in p || (n[d] = 1);
      for (const d in p) a[d] || ((t[d] = p[d]), (a[d] = 1));
      l[u] = p;
    } else for (const d in r) a[d] = 1;
  }
  for (const r in n) r in t || (t[r] = void 0);
  return t;
}
function W1(l, e, t) {
  const n = l.$$.props[e];
  n !== void 0 && ((l.$$.bound[n] = t), t(l.$$.ctx[n]));
}
function j(l) {
  l && l.c();
}
function B(l, e, t) {
  const { fragment: n, after_update: a } = l.$$;
  (n && n.m(e, t),
    G1(() => {
      const u = l.$$.on_mount.map(yr).filter(g1);
      (l.$$.on_destroy ? l.$$.on_destroy.push(...u) : at(u),
        (l.$$.on_mount = []));
    }),
    a.forEach(G1));
}
function q(l, e) {
  const t = l.$$;
  t.fragment !== null &&
    (qc(t.after_update),
    at(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function Gc(l, e) {
  (l.$$.dirty[0] === -1 && (P0.push(l), Pr(), l.$$.dirty.fill(0)),
    (l.$$.dirty[(e / 31) | 0] |= 1 << (e % 31)));
}
function Ae(l, e, t, n, a, u, r = null, p = [-1]) {
  const d = Y0;
  X0(l);
  const c = (l.$$ = {
    fragment: null,
    ctx: [],
    props: u,
    update: A,
    not_equal: a,
    bound: _i(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: _i(),
    dirty: p,
    skip_bound: !1,
    root: e.target || d.$$.root,
  });
  r && r(c.root);
  let g = !1;
  if (
    ((c.ctx = t
      ? t(l, e.props || {}, (m, i, ...s) => {
          const w = s.length ? s[0] : i;
          return (
            c.ctx &&
              a(c.ctx[m], (c.ctx[m] = w)) &&
              (!c.skip_bound && c.bound[m] && c.bound[m](w), g && Gc(l, m)),
            i
          );
        })
      : []),
    c.update(),
    (g = !0),
    at(c.before_update),
    (c.fragment = n ? n(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const m = Wc(e.target);
      (c.fragment && c.fragment.l(m), m.forEach(_));
    } else c.fragment && c.fragment.c();
    (e.intro && C(l.$$.fragment), B(l, e.target, e.anchor), Or());
  }
  X0(d);
}
class Me {
  constructor() {
    cn(this, "$$");
    cn(this, "$$set");
  }
  $destroy() {
    (q(this, 1), (this.$destroy = A));
  }
  $on(e, t) {
    if (!g1(t)) return A;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(t),
      () => {
        const a = n.indexOf(t);
        a !== -1 && n.splice(a, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Oc(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const Yc = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Yc);
const V0 = [];
function Tr(l, e = A) {
  let t;
  const n = new Set();
  function a(p) {
    if (ve(l, p) && ((l = p), t)) {
      const d = !V0.length;
      for (const c of n) (c[1](), V0.push(c, l));
      if (d) {
        for (let c = 0; c < V0.length; c += 2) V0[c][0](V0[c + 1]);
        V0.length = 0;
      }
    }
  }
  function u(p) {
    a(p(l));
  }
  function r(p, d = A) {
    const c = [p, d];
    return (
      n.add(c),
      n.size === 1 && (t = e(a, u) || A),
      p(l),
      () => {
        (n.delete(c), n.size === 0 && t && (t(), (t = null)));
      }
    );
  }
  return { set: a, update: u, subscribe: r };
}
function Qc(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function o0(
  l,
  { delay: e = 0, duration: t = 400, easing: n = Qc, axis: a = "y" } = {},
) {
  const u = getComputedStyle(l),
    r = +u.opacity,
    p = a === "y" ? "height" : "width",
    d = parseFloat(u[p]),
    c = a === "y" ? ["top", "bottom"] : ["left", "right"],
    g = c.map((M) => `${M[0].toUpperCase()}${M.slice(1)}`),
    m = parseFloat(u[`padding${g[0]}`]),
    i = parseFloat(u[`padding${g[1]}`]),
    s = parseFloat(u[`margin${g[0]}`]),
    w = parseFloat(u[`margin${g[1]}`]),
    k = parseFloat(u[`border${g[0]}Width`]),
    f = parseFloat(u[`border${g[1]}Width`]);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (M) =>
      `overflow: hidden;opacity: ${Math.min(M * 20, 1) * r};${p}: ${M * d}px;padding-${c[0]}: ${M * m}px;padding-${c[1]}: ${M * i}px;margin-${c[0]}: ${M * s}px;margin-${c[1]}: ${M * w}px;border-${c[0]}-width: ${M * k}px;border-${c[1]}-width: ${M * f}px;`,
  };
}
function Jc() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0];
}
function vn(l, e = !1) {
  const t = Jc(),
    n = `_${t}`;
  return (
    Object.defineProperty(window, n, {
      value: (a) => (
        e && Reflect.deleteProperty(window, n),
        l == null ? void 0 : l(a)
      ),
      writable: !1,
      configurable: !0,
    }),
    t
  );
}
async function ue(l, e = {}) {
  return new Promise((t, n) => {
    const a = vn((r) => {
        (t(r), Reflect.deleteProperty(window, `_${u}`));
      }, !0),
      u = vn((r) => {
        (n(r), Reflect.deleteProperty(window, `_${a}`));
      }, !0);
    window.__TAURI_IPC__({ cmd: l, callback: a, error: u, ...e });
  });
}
async function Se(l) {
  return ue("tauri", l);
}
async function Er(l, e) {
  return Se({
    __tauriModule: "Event",
    message: { cmd: "unlisten", event: l, eventId: e },
  });
}
async function Dr(l, e, t) {
  await Se({
    __tauriModule: "Event",
    message: { cmd: "emit", event: l, windowLabel: e, payload: t },
  });
}
async function zn(l, e, t) {
  return Se({
    __tauriModule: "Event",
    message: { cmd: "listen", event: l, windowLabel: e, handler: vn(t) },
  }).then((n) => async () => Er(l, n));
}
async function Fr(l, e, t) {
  return zn(l, e, (n) => {
    (t(n), Er(l, n.id).catch(() => {}));
  });
}
var a1;
(function (l) {
  ((l.WINDOW_RESIZED = "tauri://resize"),
    (l.WINDOW_MOVED = "tauri://move"),
    (l.WINDOW_CLOSE_REQUESTED = "tauri://close-requested"),
    (l.WINDOW_CREATED = "tauri://window-created"),
    (l.WINDOW_DESTROYED = "tauri://destroyed"),
    (l.WINDOW_FOCUS = "tauri://focus"),
    (l.WINDOW_BLUR = "tauri://blur"),
    (l.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change"),
    (l.WINDOW_THEME_CHANGED = "tauri://theme-changed"),
    (l.WINDOW_FILE_DROP = "tauri://file-drop"),
    (l.WINDOW_FILE_DROP_HOVER = "tauri://file-drop-hover"),
    (l.WINDOW_FILE_DROP_CANCELLED = "tauri://file-drop-cancelled"),
    (l.MENU = "tauri://menu"),
    (l.CHECK_UPDATE = "tauri://update"),
    (l.UPDATE_AVAILABLE = "tauri://update-available"),
    (l.INSTALL_UPDATE = "tauri://update-install"),
    (l.STATUS_UPDATE = "tauri://update-status"),
    (l.DOWNLOAD_PROGRESS = "tauri://update-download-progress"));
})(a1 || (a1 = {}));
async function C1(l, e) {
  return zn(l, null, e);
}
async function xc(l, e) {
  return Fr(l, null, e);
}
async function Wr(l, e) {
  return Dr(l, void 0, e);
}
class $c {
  constructor(e, t) {
    ((this.type = "Logical"), (this.width = e), (this.height = t));
  }
}
class kn {
  constructor(e, t) {
    ((this.type = "Physical"), (this.width = e), (this.height = t));
  }
  toLogical(e) {
    return new $c(this.width / e, this.height / e);
  }
}
class e6 {
  constructor(e, t) {
    ((this.type = "Logical"), (this.x = e), (this.y = t));
  }
}
class wn {
  constructor(e, t) {
    ((this.type = "Physical"), (this.x = e), (this.y = t));
  }
  toLogical(e) {
    return new e6(this.x / e, this.y / e);
  }
}
var yn;
(function (l) {
  ((l[(l.Critical = 1)] = "Critical"),
    (l[(l.Informational = 2)] = "Informational"));
})(yn || (yn = {}));
function yi() {
  return window.__TAURI_METADATA__.__windows.map(
    (l) => new J0(l.label, { skip: !0 }),
  );
}
const Ai = ["tauri://created", "tauri://error"];
class t6 {
  constructor(e) {
    ((this.label = e), (this.listeners = Object.create(null)));
  }
  async listen(e, t) {
    return this._handleTauriEvent(e, t)
      ? Promise.resolve(() => {
          const n = this.listeners[e];
          n.splice(n.indexOf(t), 1);
        })
      : zn(e, this.label, t);
  }
  async once(e, t) {
    return this._handleTauriEvent(e, t)
      ? Promise.resolve(() => {
          const n = this.listeners[e];
          n.splice(n.indexOf(t), 1);
        })
      : Fr(e, this.label, t);
  }
  async emit(e, t) {
    if (Ai.includes(e)) {
      for (const n of this.listeners[e] || [])
        n({ event: e, id: -1, windowLabel: this.label, payload: t });
      return Promise.resolve();
    }
    return Dr(e, this.label, t);
  }
  _handleTauriEvent(e, t) {
    return Ai.includes(e)
      ? (e in this.listeners
          ? this.listeners[e].push(t)
          : (this.listeners[e] = [t]),
        !0)
      : !1;
  }
}
class l6 extends t6 {
  async scaleFactor() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "scaleFactor" } },
      },
    });
  }
  async innerPosition() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "innerPosition" } },
      },
    }).then(({ x: e, y: t }) => new wn(e, t));
  }
  async outerPosition() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "outerPosition" } },
      },
    }).then(({ x: e, y: t }) => new wn(e, t));
  }
  async innerSize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "innerSize" } },
      },
    }).then(({ width: e, height: t }) => new kn(e, t));
  }
  async outerSize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "outerSize" } },
      },
    }).then(({ width: e, height: t }) => new kn(e, t));
  }
  async isFullscreen() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isFullscreen" } },
      },
    });
  }
  async isMinimized() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isMinimized" } },
      },
    });
  }
  async isMaximized() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isMaximized" } },
      },
    });
  }
  async isFocused() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isFocused" } },
      },
    });
  }
  async isDecorated() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isDecorated" } },
      },
    });
  }
  async isResizable() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isResizable" } },
      },
    });
  }
  async isMaximizable() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isMaximizable" } },
      },
    });
  }
  async isMinimizable() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isMinimizable" } },
      },
    });
  }
  async isClosable() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isClosable" } },
      },
    });
  }
  async isVisible() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "isVisible" } },
      },
    });
  }
  async title() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "title" } },
      },
    });
  }
  async theme() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "theme" } },
      },
    });
  }
  async center() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "center" } },
      },
    });
  }
  async requestUserAttention(e) {
    let t = null;
    return (
      e &&
        (e === yn.Critical
          ? (t = { type: "Critical" })
          : (t = { type: "Informational" })),
      Se({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: { type: "requestUserAttention", payload: t },
          },
        },
      })
    );
  }
  async setResizable(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setResizable", payload: e } },
      },
    });
  }
  async setMaximizable(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setMaximizable", payload: e },
        },
      },
    });
  }
  async setMinimizable(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setMinimizable", payload: e },
        },
      },
    });
  }
  async setClosable(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setClosable", payload: e } },
      },
    });
  }
  async setTitle(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setTitle", payload: e } },
      },
    });
  }
  async maximize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "maximize" } },
      },
    });
  }
  async unmaximize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "unmaximize" } },
      },
    });
  }
  async toggleMaximize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "toggleMaximize" } },
      },
    });
  }
  async minimize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "minimize" } },
      },
    });
  }
  async unminimize() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "unminimize" } },
      },
    });
  }
  async show() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "show" } },
      },
    });
  }
  async hide() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "hide" } },
      },
    });
  }
  async close() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "close" } },
      },
    });
  }
  async setDecorations(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setDecorations", payload: e },
        },
      },
    });
  }
  async setAlwaysOnTop(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setAlwaysOnTop", payload: e },
        },
      },
    });
  }
  async setContentProtected(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setContentProtected", payload: e },
        },
      },
    });
  }
  async setSize(e) {
    if (!e || (e.type !== "Logical" && e.type !== "Physical"))
      throw new Error(
        "the `size` argument must be either a LogicalSize or a PhysicalSize instance",
      );
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: {
            type: "setSize",
            payload: {
              type: e.type,
              data: { width: e.width, height: e.height },
            },
          },
        },
      },
    });
  }
  async setMinSize(e) {
    if (e && e.type !== "Logical" && e.type !== "Physical")
      throw new Error(
        "the `size` argument must be either a LogicalSize or a PhysicalSize instance",
      );
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: {
            type: "setMinSize",
            payload: e
              ? { type: e.type, data: { width: e.width, height: e.height } }
              : null,
          },
        },
      },
    });
  }
  async setMaxSize(e) {
    if (e && e.type !== "Logical" && e.type !== "Physical")
      throw new Error(
        "the `size` argument must be either a LogicalSize or a PhysicalSize instance",
      );
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: {
            type: "setMaxSize",
            payload: e
              ? { type: e.type, data: { width: e.width, height: e.height } }
              : null,
          },
        },
      },
    });
  }
  async setPosition(e) {
    if (!e || (e.type !== "Logical" && e.type !== "Physical"))
      throw new Error(
        "the `position` argument must be either a LogicalPosition or a PhysicalPosition instance",
      );
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: {
            type: "setPosition",
            payload: { type: e.type, data: { x: e.x, y: e.y } },
          },
        },
      },
    });
  }
  async setFullscreen(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setFullscreen", payload: e } },
      },
    });
  }
  async setFocus() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setFocus" } },
      },
    });
  }
  async setIcon(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: {
            type: "setIcon",
            payload: { icon: typeof e == "string" ? e : Array.from(e) },
          },
        },
      },
    });
  }
  async setSkipTaskbar(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setSkipTaskbar", payload: e },
        },
      },
    });
  }
  async setCursorGrab(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setCursorGrab", payload: e } },
      },
    });
  }
  async setCursorVisible(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setCursorVisible", payload: e },
        },
      },
    });
  }
  async setCursorIcon(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "setCursorIcon", payload: e } },
      },
    });
  }
  async setCursorPosition(e) {
    if (!e || (e.type !== "Logical" && e.type !== "Physical"))
      throw new Error(
        "the `position` argument must be either a LogicalPosition or a PhysicalPosition instance",
      );
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: {
            type: "setCursorPosition",
            payload: { type: e.type, data: { x: e.x, y: e.y } },
          },
        },
      },
    });
  }
  async setIgnoreCursorEvents(e) {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          label: this.label,
          cmd: { type: "setIgnoreCursorEvents", payload: e },
        },
      },
    });
  }
  async startDragging() {
    return Se({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: { label: this.label, cmd: { type: "startDragging" } },
      },
    });
  }
  async onResized(e) {
    return this.listen(a1.WINDOW_RESIZED, (t) => {
      ((t.payload = a6(t.payload)), e(t));
    });
  }
  async onMoved(e) {
    return this.listen(a1.WINDOW_MOVED, (t) => {
      ((t.payload = i6(t.payload)), e(t));
    });
  }
  async onCloseRequested(e) {
    return this.listen(a1.WINDOW_CLOSE_REQUESTED, (t) => {
      const n = new n6(t);
      Promise.resolve(e(n)).then(() => {
        if (!n.isPreventDefault()) return this.close();
      });
    });
  }
  async onFocusChanged(e) {
    const t = await this.listen(a1.WINDOW_FOCUS, (a) => {
        e({ ...a, payload: !0 });
      }),
      n = await this.listen(a1.WINDOW_BLUR, (a) => {
        e({ ...a, payload: !1 });
      });
    return () => {
      (t(), n());
    };
  }
  async onScaleChanged(e) {
    return this.listen(a1.WINDOW_SCALE_FACTOR_CHANGED, e);
  }
  async onMenuClicked(e) {
    return this.listen(a1.MENU, e);
  }
  async onFileDropEvent(e) {
    const t = await this.listen(a1.WINDOW_FILE_DROP, (u) => {
        e({ ...u, payload: { type: "drop", paths: u.payload } });
      }),
      n = await this.listen(a1.WINDOW_FILE_DROP_HOVER, (u) => {
        e({ ...u, payload: { type: "hover", paths: u.payload } });
      }),
      a = await this.listen(a1.WINDOW_FILE_DROP_CANCELLED, (u) => {
        e({ ...u, payload: { type: "cancel" } });
      });
    return () => {
      (t(), n(), a());
    };
  }
  async onThemeChanged(e) {
    return this.listen(a1.WINDOW_THEME_CHANGED, e);
  }
}
class n6 {
  constructor(e) {
    ((this._preventDefault = !1),
      (this.event = e.event),
      (this.windowLabel = e.windowLabel),
      (this.id = e.id));
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
class J0 extends l6 {
  constructor(e, t = {}) {
    (super(e),
      (t != null && t.skip) ||
        Se({
          __tauriModule: "Window",
          message: {
            cmd: "createWebview",
            data: { options: { label: e, ...t } },
          },
        })
          .then(async () => this.emit("tauri://created"))
          .catch(async (n) => this.emit("tauri://error", n)));
  }
  static getByLabel(e) {
    return yi().some((t) => t.label === e) ? new J0(e, { skip: !0 }) : null;
  }
  static async getFocusedWindow() {
    for (const e of yi()) if (await e.isFocused()) return e;
    return null;
  }
}
let An;
"__TAURI_METADATA__" in window
  ? (An = new J0(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 }))
  : (console.warn(
      `Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.`,
    ),
    (An = new J0("main", { skip: !0 })));
function i6(l) {
  return new wn(l.x, l.y);
}
function a6(l) {
  return new kn(l.width, l.height);
}
async function r6() {
  return Se({ __tauriModule: "App", message: { cmd: "getAppVersion" } });
}
function o6(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function s6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M220,104a4,4,0,0,1-8,0V49.66l-73.16,73.17a4,4,0,0,1-5.66-5.66L206.34,44H152a4,4,0,0,1,0-8h64a4,4,0,0,1,4,4Zm-36,28a4,4,0,0,0-4,4v72a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V136A4,4,0,0,0,184,132Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function c6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function u6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M222,104a6,6,0,0,1-12,0V54.49l-69.75,69.75a6,6,0,0,1-8.48-8.48L201.51,46H152a6,6,0,0,1,0-12h64a6,6,0,0,1,6,6Zm-38,26a6,6,0,0,0-6,6v72a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,80V208a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V136A6,6,0,0,0,184,130Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function f6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function d6(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M184,80V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H176A8,8,0,0,1,184,80Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function h6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function m6(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? h6
      : i[0] === "duotone"
        ? d6
        : i[0] === "fill"
          ? f6
          : i[0] === "light"
            ? u6
            : i[0] === "regular"
              ? c6
              : i[0] === "thin"
                ? s6
                : o6;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function p6(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class y1 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, p6, m6, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function g6(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function _6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function b6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function v6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function k6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function w6(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function y6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function A6(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? y6
      : i[0] === "duotone"
        ? w6
        : i[0] === "fill"
          ? k6
          : i[0] === "light"
            ? v6
            : i[0] === "regular"
              ? b6
              : i[0] === "thin"
                ? _6
                : g6;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function M6(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Pn extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, M6, A6, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Z6(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function H6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM180,96a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,96Zm0,32a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,128Zm0,32a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,160Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function C6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function L6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM182,96a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,96Zm0,32a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,128Zm0,32a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,160Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function V6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM176,168H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function S6(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function z6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM68,92A12,12,0,0,1,80,80h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,92Zm0,36a12,12,0,0,1,12-12h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,128Zm0,36a12,12,0,0,1,12-12h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,164Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function P6(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? z6
      : i[0] === "duotone"
        ? S6
        : i[0] === "fill"
          ? V6
          : i[0] === "light"
            ? L6
            : i[0] === "regular"
              ? C6
              : i[0] === "thin"
                ? H6
                : Z6;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function O6(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class T6 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, O6, P6, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function E6(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function D6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M148,144a4,4,0,0,1-4,4H112a4,4,0,0,1-3.33-6.22L136.53,100H112a4,4,0,0,1,0-8h32a4,4,0,0,1,3.33,6.22L119.47,140H144A4,4,0,0,1,148,144Zm70.38,46A11.84,11.84,0,0,1,208,196H163.77a36,36,0,0,1-71.54,0H48A12,12,0,0,1,37.65,178C43.42,168,52,140.13,52,104a76,76,0,1,1,152,0c0,36.13,8.59,64,14.36,73.95A11.92,11.92,0,0,1,218.38,190Zm-62.67,6H100.29a28,28,0,0,0,55.42,0Zm55.72-14C204,169.17,196,139.31,196,104a68,68,0,1,0-136,0c0,35.32-8,65.17-15.44,78a4,4,0,0,0,0,4A3.91,3.91,0,0,0,48,188H208a3.91,3.91,0,0,0,3.44-2A4,4,0,0,0,211.43,182Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function F6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M152,144a8,8,0,0,1-8,8H112a8,8,0,0,1-6.65-12.44L129.05,104H112a8,8,0,0,1,0-16h32a8,8,0,0,1,6.65,12.44L127,136h17A8,8,0,0,1,152,144Zm69.84,48A15.8,15.8,0,0,1,208,200H167.19a40,40,0,0,1-78.38,0H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192Zm-71.22,8H105.38a24,24,0,0,0,45.24,0ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function W6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M150,144a6,6,0,0,1-6,6H112a6,6,0,0,1-5-9.33L132.79,102H112a6,6,0,0,1,0-12h32a6,6,0,0,1,5,9.33L123.21,138H144A6,6,0,0,1,150,144Zm70.11,47a13.83,13.83,0,0,1-12.1,7H165.52a38,38,0,0,1-75,0H48a14,14,0,0,1-12.06-21.06C41.59,167.2,50,139.74,50,104a78,78,0,1,1,156,0c0,35.73,8.42,63.2,14.08,72.94A13.9,13.9,0,0,1,220.11,191Zm-66.82,7H102.71a26,26,0,0,0,50.58,0Zm56.41-15C202.13,170,194,139.68,194,104a66,66,0,1,0-132,0c0,35.69-8.14,66-15.71,79a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.7,183Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function R6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Zm16-64H112a8,8,0,0,1-6.65-12.44L129.05,104H112a8,8,0,0,1,0-16h32a8,8,0,0,1,6.65,12.44L127,136h17a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function K6(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M152,144a8,8,0,0,1-8,8H112a8,8,0,0,1-6.65-12.44L129.05,104H112a8,8,0,0,1,0-16h32a8,8,0,0,1,6.65,12.44L127,136h17A8,8,0,0,1,152,144Zm69.84,48A15.8,15.8,0,0,1,208,200H167.19a40,40,0,0,1-78.38,0H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192Zm-71.22,8H105.38a24,24,0,0,0,45.24,0ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function N6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M156,140a12,12,0,0,1-12,12H112a12,12,0,0,1-10-18.66L121.58,104H112a12,12,0,1,1,0-24h32a12,12,0,0,1,10,18.66L134.42,128H144A12,12,0,0,1,156,140Zm69.33,46A19.77,19.77,0,0,1,208,196H171.82a44,44,0,0,1-87.64,0H48a19.77,19.77,0,0,1-17.31-10,20.08,20.08,0,0,1,.05-20.06C39.39,151,44,129.58,44,104a84,84,0,0,1,168,0c0,25.57,4.59,47,13.27,61.93A20.08,20.08,0,0,1,225.34,186ZM147.6,196H108.4a20,20,0,0,0,39.2,0Zm53.74-24C192.49,154,188,131.13,188,104a60,60,0,0,0-120,0c0,27.14-4.48,50-13.33,68Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function U6(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? N6
      : i[0] === "duotone"
        ? K6
        : i[0] === "fill"
          ? R6
          : i[0] === "light"
            ? W6
            : i[0] === "regular"
              ? F6
              : i[0] === "thin"
                ? D6
                : E6;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function I6(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class B6 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, I6, U6, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function q6(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function j6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function X6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function G6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Y6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Q6(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M208,96l-80,80L48,96Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function J6(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function x6(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? J6
      : i[0] === "duotone"
        ? Q6
        : i[0] === "fill"
          ? Y6
          : i[0] === "light"
            ? G6
            : i[0] === "regular"
              ? X6
              : i[0] === "thin"
                ? j6
                : q6;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function $6(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class e8 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, $6, x6, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function t8(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function l8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function n8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function i8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function a8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function r8(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M176,128,96,208V48Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function o8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function s8(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? o8
      : i[0] === "duotone"
        ? r8
        : i[0] === "fill"
          ? a8
          : i[0] === "light"
            ? i8
            : i[0] === "regular"
              ? n8
              : i[0] === "thin"
                ? l8
                : t8;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function c8(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Pl extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, c8, s8, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function u8(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function f8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function d8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function h8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function m8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function p8(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function g8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function _8(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? g8
      : i[0] === "duotone"
        ? p8
        : i[0] === "fill"
          ? m8
          : i[0] === "light"
            ? h8
            : i[0] === "regular"
              ? d8
              : i[0] === "thin"
                ? f8
                : u8;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function b8(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Il extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, b8, _8, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function v8(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function k8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,8.09a91.58,91.58,0,0,1,24,4.27V215.64a91.58,91.58,0,0,1-24,4.27Zm32,7.25a92.21,92.21,0,0,1,24,15V197.69a92.21,92.21,0,0,1-24,15ZM36,128a92.11,92.11,0,0,1,88-91.91V219.91A92.11,92.11,0,0,1,36,128Zm160,61.9V66.1a91.83,91.83,0,0,1,0,123.8Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function w8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function y8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,12.2a89.86,89.86,0,0,1,20,3.63V214.17a89.86,89.86,0,0,1-20,3.63Zm32,8.23a90.48,90.48,0,0,1,20,12.81V196.76a90.48,90.48,0,0,1-20,12.81ZM38,128a90.12,90.12,0,0,1,84-89.8V217.8A90.12,90.12,0,0,1,38,128Zm160,56.5V71.5a89.81,89.81,0,0,1,0,113Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function A8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function M8(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,128a96,96,0,0,1-96,96V32A96,96,0,0,1,224,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm96,87.63V40.37a88,88,0,0,1,0,175.26Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Z8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,24.87a83.53,83.53,0,0,1,24,7.25V203.88a83.53,83.53,0,0,1-24,7.25ZM44,128a84.12,84.12,0,0,1,72-83.13V211.13A84.12,84.12,0,0,1,44,128Zm144,58.71V69.29a83.81,83.81,0,0,1,0,117.42Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function H8(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Z8
      : i[0] === "duotone"
        ? M8
        : i[0] === "fill"
          ? A8
          : i[0] === "light"
            ? y8
            : i[0] === "regular"
              ? w8
              : i[0] === "thin"
                ? k8
                : v8;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function C8(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class L8 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, C8, H8, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function V8(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function S8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M164,152a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,152Zm-4-36H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm52-68V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V48A12,12,0,0,1,56,36H94.08a44,44,0,0,1,67.84,0H200A12,12,0,0,1,212,48ZM92,64v4h72V64a36,36,0,0,0-72,0ZM204,48a4,4,0,0,0-4-4H167.17A43.71,43.71,0,0,1,172,64v8a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V64a43.71,43.71,0,0,1,4.83-20H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function z8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function P8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M166,152a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,152Zm-6-38H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm54-66V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V48A14,14,0,0,1,56,34H93.17a45.91,45.91,0,0,1,69.66,0H200A14,14,0,0,1,214,48ZM94,64v2h68V64a34,34,0,0,0-68,0ZM202,48a2,2,0,0,0-2-2H170.33A45.77,45.77,0,0,1,174,64v8a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V64a45.77,45.77,0,0,1,3.67-18H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function O8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function T8(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function E8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M172,164a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,164Zm-12-52H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm60-64V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V48A20,20,0,0,1,56,28H90.53a51.88,51.88,0,0,1,74.94,0H200A20,20,0,0,1,220,48ZM100.29,60h55.42a28,28,0,0,0-55.42,0ZM196,52H178.59A52.13,52.13,0,0,1,180,64v8a12,12,0,0,1-12,12H88A12,12,0,0,1,76,72V64a52.13,52.13,0,0,1,1.41-12H60V212H196Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function D8(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? E8
      : i[0] === "duotone"
        ? T8
        : i[0] === "fill"
          ? O8
          : i[0] === "light"
            ? P8
            : i[0] === "regular"
              ? z8
              : i[0] === "thin"
                ? S8
                : V8;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function F8(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class W8 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, F8, D8, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function R8(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function K8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function N8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function U8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function I8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function B8(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function q8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function j8(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? q8
      : i[0] === "duotone"
        ? B8
        : i[0] === "fill"
          ? I8
          : i[0] === "light"
            ? U8
            : i[0] === "regular"
              ? N8
              : i[0] === "thin"
                ? K8
                : R8;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function X8(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Rr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, X8, j8, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function G8(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Y8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Q8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function J8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function x8(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function $8(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M216,40V168H168V88H88V40Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function e4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function t4(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? e4
      : i[0] === "duotone"
        ? $8
        : i[0] === "fill"
          ? x8
          : i[0] === "light"
            ? J8
            : i[0] === "regular"
              ? Q8
              : i[0] === "thin"
                ? Y8
                : G8;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function l4(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class On extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, l4, t4, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function n4(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function i4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M236,136v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V136a12,12,0,0,1,12-12H72a4,4,0,0,1,0,8H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V136a4,4,0,0,0-4-4H184a4,4,0,0,1,0-8h40A12,12,0,0,1,236,136Zm-110.83-5.17a4,4,0,0,0,5.66,0l48-48a4,4,0,1,0-5.66-5.66L132,118.34V24a4,4,0,0,0-8,0v94.34L82.83,77.17a4,4,0,0,0-5.66,5.66ZM196,168a8,8,0,1,0-8,8A8,8,0,0,0,196,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function a4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function r4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M238,136v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V136a14,14,0,0,1,14-14H72a6,6,0,0,1,0,12H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2V136a2,2,0,0,0-2-2H184a6,6,0,0,1,0-12h40A14,14,0,0,1,238,136Zm-114.24-3.76a6,6,0,0,0,8.48,0l48-48a6,6,0,0,0-8.48-8.48L134,113.51V24a6,6,0,0,0-12,0v89.51L84.24,75.76a6,6,0,0,0-8.48,8.48ZM198,168a10,10,0,1,0-10,10A10,10,0,0,0,198,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function o4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M74.34,85.66A8,8,0,0,1,85.66,74.34L120,108.69V24a8,8,0,0,1,16,0v84.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0ZM240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H84.4a4,4,0,0,1,2.83,1.17L111,145A24,24,0,0,0,145,145l23.8-23.8A4,4,0,0,1,171.6,120H224A16,16,0,0,1,240,136Zm-40,32a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function s4(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function c4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M71.51,88.49a12,12,0,0,1,17-17L116,99V24a12,12,0,0,1,24,0V99l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0ZM224,116H188a12,12,0,0,0,0,24h32v56H36V140H68a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116Zm-20,52a16,16,0,1,0-16,16A16,16,0,0,0,204,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function u4(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? c4
      : i[0] === "duotone"
        ? s4
        : i[0] === "fill"
          ? o4
          : i[0] === "light"
            ? r4
            : i[0] === "regular"
              ? a4
              : i[0] === "thin"
                ? i4
                : n4;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function f4(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class d4 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, f4, u4, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function h4(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function m4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function p4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function g4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function _4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function b4(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,56l-96,88L32,56Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function v4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function k4(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? v4
      : i[0] === "duotone"
        ? b4
        : i[0] === "fill"
          ? _4
          : i[0] === "light"
            ? g4
            : i[0] === "regular"
              ? p4
              : i[0] === "thin"
                ? m4
                : h4;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function w4(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class y4 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, w4, k4, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function A4(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function M4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M179.94,152.67a53.51,53.51,0,0,1-43.28,43.27,3.68,3.68,0,0,1-.66.06,4,4,0,0,1-.66-7.94c18.18-3.06,33.63-18.51,36.72-36.73a4,4,0,0,1,7.88,1.34ZM212,144a84,84,0,0,1-168,0c0-27,10.71-54.75,31.84-82.43a4,4,0,0,1,6-.44l28.55,27.7,24.15-66.2a4,4,0,0,1,6.31-1.71C162.22,38.69,212,86.24,212,144Zm-8,0c0-50.82-41.73-93.91-63.94-113.23l-24.3,66.6a4,4,0,0,1-6.55,1.5L79.5,70C61.25,95.07,52,119.93,52,144a76,76,0,0,0,152,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Z4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function H4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M181.92,153A55.58,55.58,0,0,1,137,197.92a7,7,0,0,1-1,.08,6,6,0,0,1-1-11.92c17.38-2.92,32.13-17.68,35.08-35.08a6,6,0,1,1,11.84,2ZM214,144a86,86,0,0,1-172,0c0-27.47,10.85-55.61,32.25-83.64a6,6,0,0,1,9-.67l26.34,25.56,23.09-63.31a6,6,0,0,1,9.47-2.56C163.72,37.33,214,85.4,214,144Zm-12,0c0-48.4-38.65-89.84-61.07-109.8L117.64,98.06a6,6,0,0,1-9.82,2.25l-28-27.22C62.67,97.13,54,121,54,144a74,74,0,0,0,148,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function C4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function L4(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80l33,32,26.27-72C159.86,41.92,208,88.15,208,144Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function V4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M177.62,159.6a52,52,0,0,1-34,34,12.2,12.2,0,0,1-3.6.55,12,12,0,0,1-3.6-23.45,28,28,0,0,0,18.32-18.32,12,12,0,0,1,22.9,7.2ZM220,144a92,92,0,0,1-184,0c0-28.81,11.27-58.18,33.48-87.28a12,12,0,0,1,17.9-1.33L107.07,74.5,127,19.89a12,12,0,0,1,18.94-5.12C168.2,33.25,220,82.85,220,144Zm-24,0c0-41.71-30.61-78.39-52.52-99.29l-20.21,55.4a12,12,0,0,1-19.63,4.5L80.71,82.36C67,103.38,60,124.06,60,144a68,68,0,0,0,136,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function S4(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? V4
      : i[0] === "duotone"
        ? L4
        : i[0] === "fill"
          ? C4
          : i[0] === "light"
            ? H4
            : i[0] === "regular"
              ? Z4
              : i[0] === "thin"
                ? M4
                : A4;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function z4(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class P4 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, z4, S4, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function O4(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function T4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function E4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function D4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function F4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function W4(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function R4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l28.8,21.6A12,12,0,0,0,128,92h68v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function K4(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? R4
      : i[0] === "duotone"
        ? W4
        : i[0] === "fill"
          ? F4
          : i[0] === "light"
            ? D4
            : i[0] === "regular"
              ? E4
              : i[0] === "thin"
                ? T4
                : O4;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function N4(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class U4 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, N4, K4, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function I4(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function B4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,76H166.81a50.54,50.54,0,0,0,12.63-8A25.53,25.53,0,0,0,188,49.44,28.62,28.62,0,0,0,158.56,20,25.53,25.53,0,0,0,140,28.56c-5.91,6.67-9.63,15.36-12,23.69-2.35-8.33-6.07-17-12-23.69A25.53,25.53,0,0,0,97.44,20,28.62,28.62,0,0,0,68,49.44,25.53,25.53,0,0,0,76.56,68a50.54,50.54,0,0,0,12.63,8H40A12,12,0,0,0,28,88v32a12,12,0,0,0,12,12h4v68a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V132h4a12,12,0,0,0,12-12V88A12,12,0,0,0,216,76ZM146,33.86A17.59,17.59,0,0,1,158.8,28h.61A20.62,20.62,0,0,1,180,49.2,17.6,17.6,0,0,1,174.14,62c-12.09,10.7-33.07,13.21-42,13.79C132.76,66.93,135.26,46,146,33.86ZM76,49.2A20.62,20.62,0,0,1,96.59,28h.61A17.59,17.59,0,0,1,110,33.86c10.71,12.09,13.21,33.07,13.79,42-8.89-.58-29.87-3.09-42-13.79A17.6,17.6,0,0,1,76,49.2ZM36,120V88a4,4,0,0,1,4-4h84v40H40A4,4,0,0,1,36,120Zm16,80V132h72v72H56A4,4,0,0,1,52,200Zm152,0a4,4,0,0,1-4,4H132V132h72Zm16-80a4,4,0,0,1-4,4H132V84h84a4,4,0,0,1,4,4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function q4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function j4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,74H174.74a46.41,46.41,0,0,0,6-4.48,27.56,27.56,0,0,0,9.22-20A30.63,30.63,0,0,0,158.5,18a27.56,27.56,0,0,0-20,9.22A57.1,57.1,0,0,0,128,45.76a57.1,57.1,0,0,0-10.48-18.53A27.56,27.56,0,0,0,97.5,18,30.63,30.63,0,0,0,66,49.51a27.56,27.56,0,0,0,9.22,20,45.74,45.74,0,0,0,6,4.48H40A14,14,0,0,0,26,88v32a14,14,0,0,0,14,14h2v66a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V134h2a14,14,0,0,0,14-14V88A14,14,0,0,0,216,74ZM135.77,63c2.25-12.12,6.29-21.75,11.69-27.85A15.68,15.68,0,0,1,158.86,30h.55A18.6,18.6,0,0,1,178,49.14a15.68,15.68,0,0,1-5.18,11.4C162.1,70,143.92,72.83,134.34,73.65,134.59,70.76,135,67.08,135.77,63ZM83.45,35.45A18.69,18.69,0,0,1,96.59,30h.55a15.68,15.68,0,0,1,11.4,5.18C118,45.9,120.83,64.08,121.65,73.66c-2.89-.25-6.57-.68-10.61-1.43C98.92,70,89.29,65.94,83.19,60.53A15.64,15.64,0,0,1,78,49.14,18.65,18.65,0,0,1,83.45,35.45ZM38,120V88a2,2,0,0,1,2-2h82v36H40A2,2,0,0,1,38,120Zm16,80V134h68v68H56A2,2,0,0,1,54,200Zm148,0a2,2,0,0,1-2,2H134V134h68Zm16-80a2,2,0,0,1-2,2H134V86h82a2,2,0,0,1,2,2Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function X4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16h60a4,4,0,0,0,4-4V120H40V88h80v32h16V88h80v32H136v92a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM84.51,59a13.69,13.69,0,0,1-4.5-10A16.62,16.62,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92C109.71,70.39,94,67.43,84.51,59Zm87,0c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08,13.69,13.69,0,0,1,171.49,59Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function G4(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Y4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,68H190.06A33.82,33.82,0,0,0,196,49.69,36.62,36.62,0,0,0,158.31,12,33.44,33.44,0,0,0,134,23.25a54.65,54.65,0,0,0-6,8.3,54.65,54.65,0,0,0-6-8.3A33.44,33.44,0,0,0,97.69,12,36.62,36.62,0,0,0,60,49.69,33.82,33.82,0,0,0,65.94,68H40A20,20,0,0,0,20,88v32a20,20,0,0,0,16,19.6V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V139.6A20,20,0,0,0,236,120V88A20,20,0,0,0,216,68Zm-4,48H140V92h72ZM152,39.17A9.59,9.59,0,0,1,159,36h.35A12.62,12.62,0,0,1,172,49,9.59,9.59,0,0,1,168.83,56c-6.9,6.12-18.25,9.26-27.63,10.76C142.7,57.42,145.84,46.07,152,39.17ZM87.7,39.7A12.8,12.8,0,0,1,96.61,36H97A9.59,9.59,0,0,1,104,39.17c6.12,6.9,9.26,18.24,10.75,27.61C105.45,65.27,94,62.13,87.17,56A9.59,9.59,0,0,1,84,49,12.72,12.72,0,0,1,87.7,39.7ZM44,92h72v24H44Zm16,48h56v56H60Zm80,56V140h56v56Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Q4(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Y4
      : i[0] === "duotone"
        ? G4
        : i[0] === "fill"
          ? X4
          : i[0] === "light"
            ? j4
            : i[0] === "regular"
              ? q4
              : i[0] === "thin"
                ? B4
                : I4;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function J4(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Tn extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, J4, Q4, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function x4(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function $4(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function eu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function tu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function lu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function nu(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function iu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function au(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? iu
      : i[0] === "duotone"
        ? nu
        : i[0] === "fill"
          ? lu
          : i[0] === "light"
            ? tu
            : i[0] === "regular"
              ? eu
              : i[0] === "thin"
                ? $4
                : x4;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function ru(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class ou extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, ru, au, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function su(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function cu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function uu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function fu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function du(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function hu(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function mu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function pu(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? mu
      : i[0] === "duotone"
        ? hu
        : i[0] === "fill"
          ? du
          : i[0] === "light"
            ? fu
            : i[0] === "regular"
              ? uu
              : i[0] === "thin"
                ? cu
                : su;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function gu(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Kr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, gu, pu, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function _u(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function bu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function vu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function ku(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function wu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function yu(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Au(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Mu(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Au
      : i[0] === "duotone"
        ? yu
        : i[0] === "fill"
          ? wu
          : i[0] === "light"
            ? ku
            : i[0] === "regular"
              ? vu
              : i[0] === "thin"
                ? bu
                : _u;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Zu(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Hu extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Zu, Mu, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Cu(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Lu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Vu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Su(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function zu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Pu(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Ou(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Tu(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Ou
      : i[0] === "duotone"
        ? Pu
        : i[0] === "fill"
          ? zu
          : i[0] === "light"
            ? Su
            : i[0] === "regular"
              ? Vu
              : i[0] === "thin"
                ? Lu
                : Cu;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Eu(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Du extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Eu, Tu, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Fu(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Wu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M213.74,42.26A76,76,0,0,0,88.51,121.84l-57,57A11.93,11.93,0,0,0,28,187.31V216a12,12,0,0,0,12,12H72a4,4,0,0,0,4-4V204H96a4,4,0,0,0,4-4V180h20a4,4,0,0,0,2.83-1.17l11.33-11.34A75.72,75.72,0,0,0,160,172h.1A76,76,0,0,0,213.74,42.26Zm14.22,56c-1.15,36.22-31.6,65.72-67.87,65.77H160a67.52,67.52,0,0,1-25.21-4.83,4,4,0,0,0-4.45.83l-12,12H96a4,4,0,0,0-4,4v20H72a4,4,0,0,0-4,4v20H40a4,4,0,0,1-4-4V187.31a4.06,4.06,0,0,1,1.17-2.83L96,125.66a4,4,0,0,0,.83-4.45A67.51,67.51,0,0,1,92,95.91C92,59.64,121.55,29.19,157.77,28A68,68,0,0,1,228,98.23ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ru(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ku(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M215.15,40.85A78,78,0,0,0,86.2,121.31l-56.1,56.1a13.94,13.94,0,0,0-4.1,9.9V216a14,14,0,0,0,14,14H72a6,6,0,0,0,6-6V206H96a6,6,0,0,0,6-6V182h18a6,6,0,0,0,4.24-1.76l10.45-10.44A77.59,77.59,0,0,0,160,174h.1A78,78,0,0,0,215.15,40.85ZM226,98.16c-1.12,35.16-30.67,63.8-65.88,63.84a65.93,65.93,0,0,1-24.51-4.67,6,6,0,0,0-6.64,1.26L117.51,170H96a6,6,0,0,0-6,6v18H72a6,6,0,0,0-6,6v18H40a2,2,0,0,1-2-2V187.31a2,2,0,0,1,.58-1.41l58.83-58.83a6,6,0,0,0,1.26-6.64A65.61,65.61,0,0,1,94,95.92C94,60.71,122.68,31.16,157.83,30A66,66,0,0,1,226,98.16ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Nu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM180,92a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Uu(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M232,98.36C230.73,136.92,198.67,168,160.09,168a71.68,71.68,0,0,1-26.92-5.17h0L120,176H96v24H72v24H40a8,8,0,0,1-8-8V187.31a8,8,0,0,1,2.34-5.65l58.83-58.83h0A71.68,71.68,0,0,1,88,95.91c0-38.58,31.08-70.64,69.64-71.87A72,72,0,0,1,232,98.36Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Iu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Zm48,22.74A84.3,84.3,0,0,1,160.11,180H160a83.52,83.52,0,0,1-23.65-3.38l-7.86,7.87A12,12,0,0,1,120,188H108v12a12,12,0,0,1-12,12H84v12a12,12,0,0,1-12,12H40a20,20,0,0,1-20-20V187.31a19.86,19.86,0,0,1,5.86-14.14l53.52-53.52A84,84,0,1,1,244,98.74ZM202.43,53.57A59.48,59.48,0,0,0,158,36c-32,1-58,27.89-58,59.89a59.69,59.69,0,0,0,4.2,22.19,12,12,0,0,1-2.55,13.21L44,189v23H60V200a12,12,0,0,1,12-12H84V176a12,12,0,0,1,12-12h19l9.65-9.65a12,12,0,0,1,13.22-2.55A59.58,59.58,0,0,0,160,156h.08c32,0,58.87-26.07,59.89-58A59.55,59.55,0,0,0,202.43,53.57Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Bu(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Iu
      : i[0] === "duotone"
        ? Uu
        : i[0] === "fill"
          ? Nu
          : i[0] === "light"
            ? Ku
            : i[0] === "regular"
              ? Ru
              : i[0] === "thin"
                ? Wu
                : Fu;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function qu(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Nr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, qu, Bu, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function ju(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Xu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Zm-24-64a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,128Zm0-32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM68,160a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8h8A4,4,0,0,1,68,160Zm96,0a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,160Zm40,0a4,4,0,0,1-4,4h-8a4,4,0,0,1,0-8h8A4,4,0,0,1,204,160Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Gu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192Zm-16-64a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,128Zm0-32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM72,160a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h8A8,8,0,0,1,72,160Zm96,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm40,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,208,160Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Yu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2Zm-20-64a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,128Zm0-32a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM70,160a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12h8A6,6,0,0,1,70,160Zm96,0a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,160Zm40,0a6,6,0,0,1-6,6h-8a6,6,0,0,1,0-12h8A6,6,0,0,1,206,160Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Qu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM64,168H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm48,0H192a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ju(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M232,64V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192Zm-16-64a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,128Zm0-32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM72,160a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h8A8,8,0,0,1,72,160Zm96,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm40,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,208,160Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function xu(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H36V68H220ZM52,128a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,128Zm0-36A12,12,0,0,1,64,80H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,92Zm0,72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H64A12,12,0,0,1,52,164Zm108,0a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,164Zm44,0a12,12,0,0,1-12,12h-8a12,12,0,0,1,0-24h8A12,12,0,0,1,204,164Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function $u(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? xu
      : i[0] === "duotone"
        ? Ju
        : i[0] === "fill"
          ? Qu
          : i[0] === "light"
            ? Yu
            : i[0] === "regular"
              ? Gu
              : i[0] === "thin"
                ? Xu
                : ju;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function ef(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Ur extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, ef, $u, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function tf(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function lf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M243.68,150.42l-48-112A4,4,0,0,0,192,36H64a4,4,0,0,0-3.68,2.42l-48,112A4,4,0,0,0,16,156H124v56H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V156h64v36a4,4,0,0,0,8,0V156h36a4,4,0,0,0,3.68-5.58ZM22.07,148,66.64,44H189.36l44.57,104Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function nf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function af(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M245.51,149.64l-48-112A6,6,0,0,0,192,34H64a6,6,0,0,0-5.51,3.64l-48,112A6,6,0,0,0,16,158H122v52H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V158h60v34a6,6,0,0,0,12,0V158h34a6,6,0,0,0,5.51-8.36ZM25.1,146,68,46H188L230.9,146Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function rf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M246.68,156.4A8,8,0,0,1,240,160H208v32a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H16a8,8,0,0,1-7.35-11.15l48-112A8,8,0,0,1,64,32H192a8,8,0,0,1,7.35,4.85l48,112A8,8,0,0,1,246.68,156.4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function of(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M240,152H16L64,40H192Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function sf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M251,147.27l-48-112A12,12,0,0,0,192,28H64a12,12,0,0,0-11,7.27l-48,112A12,12,0,0,0,16,164H116v40H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V164h48v28a12,12,0,0,0,24,0V164h28a12,12,0,0,0,11-16.73ZM34.2,140,71.91,52H184.09l37.71,88Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function cf(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? sf
      : i[0] === "duotone"
        ? of
        : i[0] === "fill"
          ? rf
          : i[0] === "light"
            ? af
            : i[0] === "regular"
              ? nf
              : i[0] === "thin"
                ? lf
                : tf;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function uf(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Ir extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, uf, cf, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function ff(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function df(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm67.79,162.13-34-34a43.92,43.92,0,0,0,0-56.28l34-34a91.83,91.83,0,0,1,0,124.26ZM92,128a36,36,0,1,1,36,36A36,36,0,0,1,92,128Zm98.13-67.79-34,34a43.92,43.92,0,0,0-56.28,0l-34-34a91.83,91.83,0,0,1,124.26,0ZM60.21,65.87l34,34a43.92,43.92,0,0,0,0,56.28l-34,34a91.83,91.83,0,0,1,0-124.26Zm5.66,129.92,34-34a43.92,43.92,0,0,0,56.28,0l34,34a91.83,91.83,0,0,1-124.26,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function hf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function mf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm36.47,130a45.87,45.87,0,0,0,0-56l31.24-31.23a89.81,89.81,0,0,1,0,118.44ZM94,128a34,34,0,1,1,34,34A34,34,0,0,1,94,128Zm93.22-67.71L156,91.53a45.87,45.87,0,0,0-56,0L68.78,60.29a89.81,89.81,0,0,1,118.44,0ZM60.29,68.78,91.53,100a45.87,45.87,0,0,0,0,56L60.29,187.22a89.81,89.81,0,0,1,0-118.44Zm8.49,126.93L100,164.47a45.87,45.87,0,0,0,56,0l31.23,31.24a89.81,89.81,0,0,1-118.44,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function pf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function gf(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M195.88,195.88l-39.6-39.6a40,40,0,0,0,0-56.56l39.6-39.6A96,96,0,0,1,195.88,195.88ZM60.12,60.12a96,96,0,0,0,0,135.76l39.6-39.6a40,40,0,0,1,0-56.56Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function _f(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm44.25,135.28a51.89,51.89,0,0,0,0-54.56l23-23a83.84,83.84,0,0,1,0,100.56ZM100,128a28,28,0,1,1,28,28A28,28,0,0,1,100,128Zm78.28-67.25-23,23a51.89,51.89,0,0,0-54.56,0l-23-23a83.84,83.84,0,0,1,100.56,0Zm-117.53,17,23,23a51.89,51.89,0,0,0,0,54.56l-23,23a83.84,83.84,0,0,1,0-100.56Zm17,117.53,23-23a51.89,51.89,0,0,0,54.56,0l23,23a83.84,83.84,0,0,1-100.56,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function bf(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? _f
      : i[0] === "duotone"
        ? gf
        : i[0] === "fill"
          ? pf
          : i[0] === "light"
            ? mf
            : i[0] === "regular"
              ? hf
              : i[0] === "thin"
                ? df
                : ff;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function vf(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Br extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, vf, bf, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function kf(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function wf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function yf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Af(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Mf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm-34.9-16a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,11.32Zm85.45-34.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Zf(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Hf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Cf(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Hf
      : i[0] === "duotone"
        ? Zf
        : i[0] === "fill"
          ? Mf
          : i[0] === "light"
            ? Af
            : i[0] === "regular"
              ? yf
              : i[0] === "thin"
                ? wf
                : kf;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Lf(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Vf extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Lf, Cf, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Sf(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function zf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Pf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Of(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Tf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ef(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Df(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ff(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Df
      : i[0] === "duotone"
        ? Ef
        : i[0] === "fill"
          ? Tf
          : i[0] === "light"
            ? Of
            : i[0] === "regular"
              ? Pf
              : i[0] === "thin"
                ? zf
                : Sf;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Wf(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Rf extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Wf, Ff, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Kf(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Nf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V64A12,12,0,0,1,48,52H208a12,12,0,0,1,12,12Zm-56,48a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Uf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function If(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V64A10,10,0,0,1,48,54H208a10,10,0,0,1,10,10Zm-52,48a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,224Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Bf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function qf(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function jf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,36H48A28,28,0,0,0,20,64V176a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V64A28,28,0,0,0,208,36Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-40,52a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,228Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Xf(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? jf
      : i[0] === "duotone"
        ? qf
        : i[0] === "fill"
          ? Bf
          : i[0] === "light"
            ? If
            : i[0] === "regular"
              ? Uf
              : i[0] === "thin"
                ? Nf
                : Kf;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Gf(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class qr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Gf, Xf, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Yf(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Qf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Jf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function xf(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function $f(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function e3(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function t3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function l3(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? t3
      : i[0] === "duotone"
        ? e3
        : i[0] === "fill"
          ? $f
          : i[0] === "light"
            ? xf
            : i[0] === "regular"
              ? Jf
              : i[0] === "thin"
                ? Qf
                : Yf;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function n3(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class E0 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, n3, l3, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function i3(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function a3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M180,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h80A4,4,0,0,1,180,112Zm-4,28H96a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm52-76V184a20,20,0,0,1-20,20H32a20,20,0,0,1-20-19.92V88a4,4,0,0,1,8,0v96a12,12,0,0,0,24,0V64A12,12,0,0,1,56,52H216A12,12,0,0,1,228,64Zm-8,0a4,4,0,0,0-4-4H56a4,4,0,0,0-4,4V184a19.86,19.86,0,0,1-4,12H208a12,12,0,0,0,12-12Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function r3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function o3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M182,112a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h80A6,6,0,0,1,182,112Zm-6,26H96a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm54-74V184a22,22,0,0,1-22,22H32a22,22,0,0,1-22-21.91V88a6,6,0,0,1,12,0v96a10,10,0,0,0,20,0V64A14,14,0,0,1,56,50H216A14,14,0,0,1,230,64Zm-12,0a2,2,0,0,0-2-2H56a2,2,0,0,0-2,2V184a21.84,21.84,0,0,1-2.41,10H208a10,10,0,0,0,10-10Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function s3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,48H56A16,16,0,0,0,40,64V184a8,8,0,0,1-16,0V88A8,8,0,0,0,8,88v96.11A24,24,0,0,0,32,208H208a24,24,0,0,0,24-24V64A16,16,0,0,0,216,48ZM176,152H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function c3(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M224,64V184a16,16,0,0,1-16,16H32a16,16,0,0,0,16-16V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function u3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M92,108a12,12,0,0,1,12-12h72a12,12,0,0,1,0,24H104A12,12,0,0,1,92,108Zm12,52h72a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24ZM236,64V184a28,28,0,0,1-28,28H36A32,32,0,0,1,4,180V88a12,12,0,0,1,24,0v92a8,8,0,0,0,16,0V64A20,20,0,0,1,64,44H216A20,20,0,0,1,236,64Zm-24,4H68V180a32,32,0,0,1-1,8H208a4,4,0,0,0,4-4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function f3(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? u3
      : i[0] === "duotone"
        ? c3
        : i[0] === "fill"
          ? s3
          : i[0] === "light"
            ? o3
            : i[0] === "regular"
              ? r3
              : i[0] === "thin"
                ? a3
                : i3;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function d3(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class h3 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, d3, f3, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function m3(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function p3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M198,56.74A99.31,99.31,0,0,0,128,28h-1A100,100,0,0,0,28,128c0,41.22,25.55,75.85,66.69,90.38a28.34,28.34,0,0,0,9.42,1.63A28,28,0,0,0,132,192a20,20,0,0,1,20-20h46.21a27.84,27.84,0,0,0,27.3-21.76,100.37,100.37,0,0,0,2.49-23.1A99.26,99.26,0,0,0,198,56.74Zm19.74,91.72A19.89,19.89,0,0,1,198.21,164H152a28,28,0,0,0-28,28,20,20,0,0,1-26.64,18.83C59.51,197.46,36,165.72,36,128a92,92,0,0,1,91.05-92H128a92,92,0,0,1,89.72,112.46ZM136,76a8,8,0,1,1-8-8A8,8,0,0,1,136,76ZM92,100a8,8,0,1,1-8-8A8,8,0,0,1,92,100Zm0,56a8,8,0,1,1-8-8A8,8,0,0,1,92,156Zm88-56a8,8,0,1,1-8-8A8,8,0,0,1,180,100Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function g3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function _3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M199.37,55.31A101.32,101.32,0,0,0,128,26h-1A102,102,0,0,0,26,128c0,42.09,26.07,77.44,68,92.26A30.21,30.21,0,0,0,104.11,222,30.06,30.06,0,0,0,134,192a18,18,0,0,1,18-18h46.21a29.82,29.82,0,0,0,29.25-23.31A102.71,102.71,0,0,0,230,127.11,101.25,101.25,0,0,0,199.37,55.31ZM215.76,148a17.89,17.89,0,0,1-17.55,14H152a30,30,0,0,0-30,30,18,18,0,0,1-24,17C61,195.86,38,164.85,38,128a90,90,0,0,1,89.07-90H128a90.34,90.34,0,0,1,90,89.22A90.46,90.46,0,0,1,215.76,148ZM138,76a10,10,0,1,1-10-10A10,10,0,0,1,138,76ZM94,100A10,10,0,1,1,84,90,10,10,0,0,1,94,100Zm0,56a10,10,0,1,1-10-10A10,10,0,0,1,94,156Zm88-56a10,10,0,1,1-10-10A10,10,0,0,1,182,100Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function b3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,84,112Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,112Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function v3(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M224,127.17a96.48,96.48,0,0,1-2.39,22.18A24,24,0,0,1,198.21,168H152a24,24,0,0,0-24,24,24,24,0,0,1-32,22.61C58.73,201.44,32,169.81,32,128a96,96,0,0,1,95-96C179.84,31.47,223.55,74.35,224,127.17Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function k3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M203.57,51A107.9,107.9,0,0,0,20,128c0,44.72,27.6,82.25,72,97.94A36,36,0,0,0,140,192a12,12,0,0,1,12-12h46.21a35.79,35.79,0,0,0,35.1-28A108.6,108.6,0,0,0,236,127.09,107.23,107.23,0,0,0,203.57,51Zm6.34,95.67a11.91,11.91,0,0,1-11.7,9.3H152a36,36,0,0,0-36,36,12,12,0,0,1-16,11.3c-16.65-5.88-30.65-15.76-40.48-28.56A76,76,0,0,1,44,128a84,84,0,0,1,83.13-84H128a84.35,84.35,0,0,1,84,83.29A84.72,84.72,0,0,1,209.91,146.71ZM144,76a16,16,0,1,1-16-16A16,16,0,0,1,144,76Zm-44,24A16,16,0,1,1,84,84,16,16,0,0,1,100,100Zm0,56a16,16,0,1,1-16-16A16,16,0,0,1,100,156Zm88-56a16,16,0,1,1-16-16A16,16,0,0,1,188,100Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function w3(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? k3
      : i[0] === "duotone"
        ? v3
        : i[0] === "fill"
          ? b3
          : i[0] === "light"
            ? _3
            : i[0] === "regular"
              ? g3
              : i[0] === "thin"
                ? p3
                : m3;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function y3(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class jr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, y3, w3, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function A3(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function M3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Z3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function H3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function C3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function L3(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function V3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function S3(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? V3
      : i[0] === "duotone"
        ? L3
        : i[0] === "fill"
          ? C3
          : i[0] === "light"
            ? H3
            : i[0] === "regular"
              ? Z3
              : i[0] === "thin"
                ? M3
                : A3;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function z3(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class P3 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, z3, S3, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function O3(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function T3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.67,91.67,0,0,1-24.21,62.13L65.87,60.21A92,92,0,0,1,220,128ZM36,128A91.67,91.67,0,0,1,60.21,65.87L190.13,195.79A92,92,0,0,1,36,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function E3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function D3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.6,89.6,0,0,1-22.29,59.22L68.78,60.29A89.95,89.95,0,0,1,218,128ZM38,128A89.6,89.6,0,0,1,60.29,68.78L187.22,195.71A89.95,89.95,0,0,1,38,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function F3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M200,128a71.69,71.69,0,0,1-15.78,44.91L83.09,71.78A71.95,71.95,0,0,1,200,128ZM56,128a71.95,71.95,0,0,0,116.91,56.22L71.78,83.09A71.69,71.69,0,0,0,56,128Zm180,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-20,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function W3(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function R3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.6,83.6,0,0,1-16.75,50.28L77.72,60.75A84,84,0,0,1,212,128ZM44,128A83.6,83.6,0,0,1,60.75,77.72L178.28,195.25A84,84,0,0,1,44,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function K3(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? R3
      : i[0] === "duotone"
        ? W3
        : i[0] === "fill"
          ? F3
          : i[0] === "light"
            ? D3
            : i[0] === "regular"
              ? E3
              : i[0] === "thin"
                ? T3
                : O3;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function N3(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class En extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, N3, K3, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function U3(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function I3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M232.49,84.2,171.8,23.51a12,12,0,0,0-17,0L99.45,79.07c-8.08-3-32.79-9.45-59,11.67a12,12,0,0,0-1,17.84l51.13,51.13L45.17,205.17a4,4,0,0,0,5.66,5.66l45.46-45.47,51.12,51.12A12,12,0,0,0,155.9,220c.28,0,.57,0,.85,0a12,12,0,0,0,8.73-4.74c19.83-26.36,16.51-47.18,11.71-58.57l55.3-55.49A12,12,0,0,0,232.49,84.2Zm-5.66,11.31h0L169.56,153a4,4,0,0,0-.75,4.61c10.43,20.85-1.62,42-9.73,52.83a4,4,0,0,1-6,.4L45.17,102.93a4,4,0,0,1,.33-6C58.44,86.53,70.86,83.74,80.44,83.74A43.9,43.9,0,0,1,98.6,87.38a4,4,0,0,0,4.62-.75l57.27-57.46a4,4,0,0,1,5.66,0l60.68,60.69A4,4,0,0,1,226.83,95.51Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function B3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function q3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M233.91,82.79,173.22,22.1a14,14,0,0,0-19.81,0L98.93,76.77c-9.52-3.25-34-8.34-59.71,12.41A14,14,0,0,0,38.1,110l49.71,49.71-44.05,44a6,6,0,1,0,8.48,8.48l44.05-44.05L146,217.89a14,14,0,0,0,9.9,4.11q.49,0,1,0a14,14,0,0,0,10.19-5.54c19.72-26.21,17.15-47.23,12.46-59.3l54.37-54.55A14,14,0,0,0,233.91,82.79ZM225.42,94.1h0l-57.27,57.46a6,6,0,0,0-1.11,6.92c9.94,19.88-1.71,40.32-9.54,50.72a2,2,0,0,1-3,.2L46.58,101.51a2,2,0,0,1,.18-3c12.5-10.09,24.5-12.76,33.7-12.76a42.13,42.13,0,0,1,17.25,3.41A6,6,0,0,0,104.64,88L161.9,30.59a2,2,0,0,1,2.83,0l60.69,60.68A2,2,0,0,1,225.42,94.1Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function j3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M235.33,104l-53.47,53.65c4.56,12.67,6.45,33.89-13.19,60A15.93,15.93,0,0,1,157,224c-.38,0-.75,0-1.13,0a16,16,0,0,1-11.32-4.69L96.29,171,53.66,213.66a8,8,0,0,1-11.32-11.32L85,159.71l-48.3-48.3A16,16,0,0,1,38,87.63c25.42-20.51,49.75-16.48,60.4-13.14L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function X3(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M229.66,98.34,172.39,155.8c11.46,22.93-1.72,45.86-10.11,57a8,8,0,0,1-12,.83L42.34,105.76A8,8,0,0,1,43,93.85c29.65-23.92,57.4-10,57.4-10l57.27-57.46a8,8,0,0,1,11.31,0L229.66,87A8,8,0,0,1,229.66,98.34Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function G3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M238.15,78.54,177.46,17.86a20,20,0,0,0-28.3,0L97.2,70c-12.43-3.33-36.68-5.72-61.74,14.5a20,20,0,0,0-1.6,29.73l45.46,45.47-39.8,39.8a12,12,0,0,0,17,17l39.8-39.81,45.47,45.46A20,20,0,0,0,155.91,228c.46,0,.93,0,1.4-.05A20,20,0,0,0,171.87,220c4.69-6.23,11-16.13,14.44-28s3.45-22.88.16-33.4l51.7-51.87A20,20,0,0,0,238.15,78.54Zm-74.26,68.79a12,12,0,0,0-2.23,13.84c3.43,6.86,6.9,21-6.28,40.65L54.08,100.53c21.09-14.59,39.53-6.64,41-6a11.67,11.67,0,0,0,13.81-2.29l54.43-54.61,55,55Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Y3(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? G3
      : i[0] === "duotone"
        ? X3
        : i[0] === "fill"
          ? j3
          : i[0] === "light"
            ? q3
            : i[0] === "regular"
              ? B3
              : i[0] === "thin"
                ? I3
                : U3;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Q3(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Xr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Q3, Y3, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function J3(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function x3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function $3(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function ed(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180ZM128,74c-21,0-38,15.25-38,34v4a6,6,0,0,0,12,0v-4c0-12.13,11.66-22,26-22s26,9.87,26,22-11.66,22-26,22a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-2.42c18.11-2.58,32-16.66,32-33.58C166,89.25,149,74,128,74Zm102,54A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function td(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function ld(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function nd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function id(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? nd
      : i[0] === "duotone"
        ? ld
        : i[0] === "fill"
          ? td
          : i[0] === "light"
            ? ed
            : i[0] === "regular"
              ? $3
              : i[0] === "thin"
                ? x3
                : J3;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function ad(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Mn extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, ad, id, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function rd(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function od(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M244,104a28,28,0,0,0-48.3-19.28c-17.9-10.11-40-15.94-63-16.65l6.59-39.52L164,32.36a20,20,0,1,0,1.46-7.87l-28.87-4.44a4,4,0,0,0-4.56,3.29L124.6,68.05c-23.48.52-46.06,6.36-64.3,16.67A28,28,0,1,0,23,126.21,55.14,55.14,0,0,0,20,144c0,20.58,11.43,39.83,32.18,54.2C72.49,212.26,99.42,220,128,220s55.51-7.74,75.82-21.8C224.57,183.83,236,164.58,236,144a55.14,55.14,0,0,0-3-17.79A28.14,28.14,0,0,0,244,104ZM184,20a12,12,0,1,1-12,12A12,12,0,0,1,184,20Zm40.53,106.25A47.69,47.69,0,0,1,228,144c0,37.5-44.86,68-100,68S28,181.5,28,144a47.71,47.71,0,0,1,3.45-17.72,4,4,0,0,0-1.62-5,20,20,0,1,1,26.35-29,4,4,0,0,0,5.19,1.13l.25-.16C80,82.11,103.51,76,128,76h0c24.48,0,48,6.11,66.37,17.21l.25.16a4,4,0,0,0,5.19-1.13,20,20,0,1,1,26.35,29A4,4,0,0,0,224.53,126.25Zm-61,47.88a4,4,0,0,1-1.65,5.4,72.22,72.22,0,0,1-67.76,0,4,4,0,0,1,3.76-7.06,64.23,64.23,0,0,0,60.24,0A4,4,0,0,1,163.53,174.13ZM88,140a12,12,0,1,1,12-12A12,12,0,0,1,88,140Zm92-12a12,12,0,1,1-12-12A12,12,0,0,1,180,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function sd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.58,43.58,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.45,2.23l.36-.22C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.42.25a8,8,0,0,0,10.39-2.26,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function cd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M246,104a30,30,0,0,0-50.64-21.76C178,72.75,157,67.17,135.05,66.18l5.89-35.35,21.16,3.26a22,22,0,1,0,2.17-11.81l-27.36-4.21A6,6,0,0,0,130.08,23L122.9,66.09c-22.64.74-44.41,6.38-62.26,16.15a30,30,0,1,0-40,44.66A57.07,57.07,0,0,0,18,144c0,21.26,11.74,41.09,33.05,55.84C71.68,214.13,99,222,128,222s56.32-7.87,76.95-22.16C226.26,185.09,238,165.26,238,144a57.07,57.07,0,0,0-2.63-17.1A30.16,30.16,0,0,0,246,104ZM184,22a10,10,0,1,1-10,10A10,10,0,0,1,184,22Zm41.15,97.51a6,6,0,0,0-2.46,7.51A45.65,45.65,0,0,1,226,144c0,36.39-44,66-98,66s-98-29.61-98-66a45.63,45.63,0,0,1,3.3-16.94,6,6,0,0,0-2.45-7.55,18,18,0,1,1,23.71-26.1,6,6,0,0,0,7.79,1.7,3.79,3.79,0,0,0,.34-.2C80.7,84,103.89,78,128,78h0c24.1,0,47.28,6,65.29,16.9l.16.11a6,6,0,0,0,8-1.6,18,18,0,1,1,23.71,26.1ZM165.3,173.19a6,6,0,0,1-2.49,8.11,74.22,74.22,0,0,1-69.62,0,6,6,0,0,1,5.62-10.6,62.2,62.2,0,0,0,58.38,0A6,6,0,0,1,165.3,173.19ZM88,142a14,14,0,1,1,14-14A14,14,0,0,1,88,142Zm94-14a14,14,0,1,1-14-14A14,14,0,0,1,182,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function ud(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM72,128a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm91.75,55.07a76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0,8,8,0,1,1,7.5,14.14ZM168,144a16,16,0,1,1,16-16A16,16,0,0,1,168,144Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function fd(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M228.21,124.67h0A51.6,51.6,0,0,1,232,144c0,39.76-46.56,72-104,72S24,183.76,24,144a51.6,51.6,0,0,1,3.79-19.33h0A24,24,0,1,1,59.41,89.88h0C77.72,78.75,101.72,72,128,72s50.28,6.75,68.59,17.88h0a24,24,0,1,1,31.62,34.79Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.62,43.62,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.63,2.12l.18-.11C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.18.11a8,8,0,0,0,10.63-2.12,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function dd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M252,104a36,36,0,0,0-57.4-28.93,145.56,145.56,0,0,0-52.54-14.45l3.8-22.81,15.67,2.61a24,24,0,1,0,3.95-23.67L138,12.16A12,12,0,0,0,124.16,22l-6.38,38.31C97.48,61.62,78,66.7,61.4,75.07a36,36,0,0,0-47.52,53.68A62.87,62.87,0,0,0,12,144c0,23.29,12.65,44.87,35.63,60.78C69.26,219.75,97.8,228,128,228s58.74-8.25,80.37-23.22C231.35,188.87,244,167.29,244,144a62.87,62.87,0,0,0-1.88-15.25A36.16,36.16,0,0,0,252,104Zm-29.91,10.34a12,12,0,0,0-5,15A39.61,39.61,0,0,1,220,144c0,15.18-9,29.75-25.29,41.05C177.05,197.27,153.36,204,128,204s-49-6.73-66.71-18.95C45,173.75,36,159.18,36,144a39.74,39.74,0,0,1,2.84-14.64,12,12,0,0,0-4.93-15A12,12,0,1,1,49.71,97a12,12,0,0,0,15.94,3.18l.22-.13C82.94,89.68,105,84,128,84H128c23,0,45,5.69,62.09,16l.22.13A12,12,0,0,0,206.29,97,11.88,11.88,0,0,1,216,92a12,12,0,0,1,6.09,22.34ZM88,148a20,20,0,1,1,20-20A20,20,0,0,1,88,148Zm100-20a20,20,0,1,1-20-20A20,20,0,0,1,188,128Zm-20.52,40.52a12,12,0,0,1-8,15,111.88,111.88,0,0,1-63,0,12,12,0,0,1,7-23,88.12,88.12,0,0,0,49,0A12,12,0,0,1,167.48,168.52Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function hd(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? dd
      : i[0] === "duotone"
        ? fd
        : i[0] === "fill"
          ? ud
          : i[0] === "light"
            ? cd
            : i[0] === "regular"
              ? sd
              : i[0] === "thin"
                ? od
                : rd;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function md(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class pd extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, md, hd, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function gd(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function _d(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M219.86,47.36a12,12,0,0,0-11.22-11.22c-12-.71-42.82.38-68.35,25.91L134.35,68h-60a11.9,11.9,0,0,0-8.48,3.52L31.52,105.85a12,12,0,0,0,6.81,20.37l39.79,5.55,46.11,46.11,5.55,39.81a12,12,0,0,0,20.37,6.79l34.34-34.35a11.9,11.9,0,0,0,3.52-8.48v-60l5.94-5.94C219.48,90.18,220.57,59.41,219.86,47.36ZM36.21,115.6a3.94,3.94,0,0,1,1-4.09L71.53,77.17A4,4,0,0,1,74.35,76h52L78.58,123.76,39.44,118.3A3.94,3.94,0,0,1,36.21,115.6ZM180,181.65a4,4,0,0,1-1.17,2.83l-34.35,34.34a4,4,0,0,1-6.79-2.25l-5.46-39.15L180,129.65Zm-52-11.31L85.66,128l60.28-60.29c23.24-23.24,51.25-24.23,62.22-23.58a3.93,3.93,0,0,1,3.71,3.71c.65,11-.35,39-23.58,62.22ZM98.21,189.48C94,198.66,80,220,40,220a4,4,0,0,1-4-4c0-40,21.34-54,30.52-58.21a4,4,0,0,1,3.32,7.28c-7.46,3.41-24.43,14.66-25.76,46.85,32.19-1.33,43.44-18.3,46.85-25.76a4,4,0,1,1,7.28,3.32Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function bd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function vd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M221.86,47.24a14,14,0,0,0-13.11-13.1c-12.31-.73-43.77.39-69.88,26.5L133.52,66H74.35a13.9,13.9,0,0,0-9.89,4.1L30.11,104.44a14,14,0,0,0,7.94,23.76l39.13,5.46,45.16,45.16L127.8,218a14,14,0,0,0,23.76,7.92l34.35-34.35a13.91,13.91,0,0,0,4.1-9.89V122.48l5.35-5.35h0C221.46,91,222.59,59.56,221.86,47.24ZM38.11,115a2,2,0,0,1,.49-2L72.94,78.58A2,2,0,0,1,74.35,78h47.17L77.87,121.64l-38.14-5.32A1.93,1.93,0,0,1,38.11,115ZM178,181.65a2,2,0,0,1-.59,1.41L143.08,217.4a2,2,0,0,1-3.4-1.11l-5.32-38.16L178,134.48Zm8.87-73h0L128,167.51,88.49,128l58.87-58.88a78.47,78.47,0,0,1,60.69-23A2,2,0,0,1,209.88,48,78.47,78.47,0,0,1,186.88,108.64ZM100,190.31C95.68,199.84,81.13,222,40,222a6,6,0,0,1-6-6c0-41.13,22.16-55.68,31.69-60a6,6,0,1,1,5,10.92c-7,3.17-22.53,13.52-24.47,42.91,29.39-1.94,39.74-17.52,42.91-24.47a6,6,0,1,1,10.92,5Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function kd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function wd(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function yd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M227.85,46.89a20,20,0,0,0-18.74-18.74c-13.13-.77-46.65.42-74.48,28.24L131,60H74.36a19.83,19.83,0,0,0-14.14,5.86L25.87,100.19a20,20,0,0,0,11.35,33.95l37.14,5.18,42.32,42.32,5.19,37.18A19.88,19.88,0,0,0,135.34,235a20.13,20.13,0,0,0,6.37,1,19.9,19.9,0,0,0,14.1-5.87l34.34-34.35A19.85,19.85,0,0,0,196,181.64V125l3.6-3.59C227.43,93.54,228.62,60,227.85,46.89ZM76,84h31L75.75,115.28l-27.23-3.8ZM151.6,73.37A72.27,72.27,0,0,1,204,52a72.17,72.17,0,0,1-21.38,52.41L128,159,97,128ZM172,180l-27.49,27.49-3.8-27.23L172,149Zm-72,22c-8.71,11.85-26.19,26-60,26a12,12,0,0,1-12-12c0-33.84,14.12-51.32,26-60A12,12,0,1,1,68.18,175.3C62.3,179.63,55.51,187.8,53,203c15.21-2.51,23.37-9.3,27.7-15.18A12,12,0,1,1,100,202Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ad(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? yd
      : i[0] === "duotone"
        ? wd
        : i[0] === "fill"
          ? kd
          : i[0] === "light"
            ? vd
            : i[0] === "regular"
              ? bd
              : i[0] === "thin"
                ? _d
                : gd;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Md(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Zd extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Md, Ad, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Hd(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Cd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,68c0,38.44-14.23,69.63-42.29,92.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ld(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Vd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Sd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function zd(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Pd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Od(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Pd
      : i[0] === "duotone"
        ? zd
        : i[0] === "fill"
          ? Sd
          : i[0] === "light"
            ? Vd
            : i[0] === "regular"
              ? Ld
              : i[0] === "thin"
                ? Cd
                : Hd;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Td(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Bl extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Td, Od, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function Ed(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Dd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Fd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Wd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Rd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Kd(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Nd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ud(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Nd
      : i[0] === "duotone"
        ? Kd
        : i[0] === "fill"
          ? Rd
          : i[0] === "light"
            ? Wd
            : i[0] === "regular"
              ? Fd
              : i[0] === "thin"
                ? Dd
                : Ed;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Id(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Bd extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Id, Ud, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function qd(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function jd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M219.88,151.05a4,4,0,0,1-2.93,4.83l-28.6,7L195.86,191a4,4,0,0,1-2.83,4.9,3.65,3.65,0,0,1-1,.14,4,4,0,0,1-3.86-3L180,162.64l-48-27.71v55.41l22.83,22.83a4,4,0,0,1-5.66,5.66L128,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L124,190.34V134.93L76,162.64,67.86,193A4,4,0,0,1,64,196a3.65,3.65,0,0,1-1-.14,4,4,0,0,1-2.83-4.9l7.51-28.05-28.6-7A4,4,0,1,1,41,148.12l31,7.61L120,128,72,100.27l-31,7.61a4.07,4.07,0,0,1-1,.12,4,4,0,0,1-1-7.88l28.6-7L60.14,65A4,4,0,0,1,67.86,63L76,93.36l48,27.71V65.66L101.17,42.83a4,4,0,0,1,5.66-5.66L128,58.34l21.17-21.17a4,4,0,1,1,5.66,5.66L132,65.66v55.41l48-27.71L188.14,63A4,4,0,0,1,195.86,65l-7.51,28.05,28.6,7A4,4,0,0,1,216,108a4.07,4.07,0,0,1-1-.12l-31-7.61L136,128l48,27.73,31-7.61A4,4,0,0,1,219.88,151.05Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Xd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M223.77,150.09a8,8,0,0,1-5.86,9.68l-24.64,6,6.46,24.11a8,8,0,0,1-5.66,9.8A8.25,8.25,0,0,1,192,200a8,8,0,0,1-7.72-5.93l-7.72-28.8L136,141.86v46.83l21.66,21.65a8,8,0,0,1-11.32,11.32L128,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L120,188.69V141.86L79.45,165.27l-7.72,28.8A8,8,0,0,1,64,200a8.25,8.25,0,0,1-2.08-.27,8,8,0,0,1-5.66-9.8l6.46-24.11-24.64-6a8,8,0,0,1,3.82-15.54l29.45,7.23L112,128,71.36,104.54l-29.45,7.23A7.85,7.85,0,0,1,40,112a8,8,0,0,1-1.91-15.77l24.64-6L56.27,66.07a8,8,0,0,1,15.46-4.14l7.72,28.8L120,114.14V67.31L98.34,45.66a8,8,0,0,1,11.32-11.32L128,52.69l18.34-18.35a8,8,0,0,1,11.32,11.32L136,67.31v46.83l40.55-23.41,7.72-28.8a8,8,0,0,1,15.46,4.14l-6.46,24.11,24.64,6A8,8,0,0,1,216,112a7.85,7.85,0,0,1-1.91-.23l-29.45-7.23L144,128l40.64,23.46,29.45-7.23A8,8,0,0,1,223.77,150.09Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Gd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M221.83,150.57a6,6,0,0,1-4.4,7.26l-26.62,6.54,7,26.08a6,6,0,0,1-4.24,7.35,6.4,6.4,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45L178.27,164,134,138.39v51.13l22.24,22.24a6,6,0,1,1-8.48,8.48L128,200.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L122,189.52V138.39L77.73,164l-7.93,29.6A6,6,0,0,1,64,198a6.4,6.4,0,0,1-1.55-.2,6,6,0,0,1-4.24-7.35l7-26.08-26.62-6.54a6,6,0,0,1,2.86-11.66l30.23,7.43L116,128,71.66,102.4l-30.23,7.43A5.88,5.88,0,0,1,40,110a6,6,0,0,1-1.43-11.83l26.62-6.54-7-26.08a6,6,0,1,1,11.59-3.1l7.93,29.6L122,117.61V66.48L99.76,44.24a6,6,0,0,1,8.48-8.48L128,55.51l19.76-19.75a6,6,0,0,1,8.48,8.48L134,66.48v51.13l44.27-25.56,7.93-29.6a6,6,0,1,1,11.59,3.1l-7,26.08,26.62,6.54A6,6,0,0,1,216,110a5.88,5.88,0,0,1-1.43-.17l-30.23-7.43L140,128l44.34,25.6,30.23-7.43A6,6,0,0,1,221.83,150.57Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Yd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm42.37,119.22,18.94-6.76a8,8,0,1,1,5.38,15.08l-15.48,5.52,4.52,16.87a8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,176,184a8,8,0,0,1-7.73-5.93l-5.57-20.8L136,141.86v30.83l13.66,13.65a8,8,0,0,1-11.32,11.32L128,187.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L120,172.69V141.86L93.3,157.27l-5.57,20.8A8,8,0,0,1,80,184a8.23,8.23,0,0,1-2.07-.27,8,8,0,0,1-5.66-9.8l4.52-16.87-15.48-5.52a8,8,0,0,1,5.38-15.08l18.94,6.76L112,128,85.63,112.78l-18.94,6.76A8.18,8.18,0,0,1,64,120a8,8,0,0,1-2.69-15.54l15.48-5.52L72.27,82.07a8,8,0,0,1,15.46-4.14l5.57,20.8L120,114.14V83.31L106.34,69.66a8,8,0,0,1,11.32-11.32L128,68.69l10.34-10.35a8,8,0,0,1,11.32,11.32L136,83.31v30.83l26.7-15.41,5.57-20.8a8,8,0,0,1,15.46,4.14l-4.52,16.87,15.48,5.52A8,8,0,0,1,192,120a8.18,8.18,0,0,1-2.69-.46l-18.94-6.76L144,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Qd(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M220,128a92,92,0,1,1-92-92A92.1,92.1,0,0,1,220,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M223.77,150.09a8,8,0,0,1-5.86,9.68l-24.64,6,6.46,24.11a8,8,0,0,1-5.66,9.8A8.25,8.25,0,0,1,192,200a8,8,0,0,1-7.72-5.93l-7.72-28.8L136,141.86v46.83l21.66,21.65a8,8,0,0,1-11.32,11.32L128,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L120,188.69V141.86L79.45,165.27l-7.72,28.8A8,8,0,0,1,64,200a8.25,8.25,0,0,1-2.08-.27,8,8,0,0,1-5.66-9.8l6.46-24.11-24.64-6a8,8,0,0,1,3.82-15.54l29.45,7.23L112,128,71.36,104.54l-29.45,7.23A7.85,7.85,0,0,1,40,112a8,8,0,0,1-1.91-15.77l24.64-6L56.27,66.07a8,8,0,0,1,15.46-4.14l7.72,28.8L120,114.14V67.31L98.34,45.66a8,8,0,0,1,11.32-11.32L128,52.69l18.34-18.35a8,8,0,0,1,11.32,11.32L136,67.31v46.83l40.55-23.41,7.72-28.8a8,8,0,0,1,15.46,4.14l-6.46,24.11,24.64,6A8,8,0,0,1,216,112a7.85,7.85,0,0,1-1.91-.23l-29.45-7.23L144,128l40.64,23.46,29.45-7.23A8,8,0,0,1,223.77,150.09Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Jd(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M227.65,149.14a12,12,0,0,1-8.79,14.51l-20.67,5.08,5.4,20.16a12,12,0,0,1-23.18,6.22l-7.29-27.2L140,148.78V187l20.48,20.48a12,12,0,0,1-17,17L128,209l-15.51,15.52a12,12,0,0,1-17-17L116,187V148.78L82.88,167.91l-7.29,27.2a12,12,0,0,1-23.18-6.22l5.4-20.16-20.67-5.08a12,12,0,1,1,5.72-23.3l27.89,6.85L104,128,70.75,108.8l-27.89,6.85A11.8,11.8,0,0,1,40,116a12,12,0,0,1-2.85-23.65l20.67-5.08-5.4-20.16a12,12,0,0,1,23.18-6.22l7.29,27.2L116,107.21V69L95.52,48.48a12,12,0,0,1,17-17L128,47l15.51-15.52a12,12,0,1,1,17,17L140,69v38.24l33.12-19.12,7.29-27.2a12,12,0,0,1,23.18,6.22l-5.4,20.16,20.67,5.08A12,12,0,0,1,216,116a11.8,11.8,0,0,1-2.87-.35l-27.89-6.85L152,128l33.25,19.2,27.89-6.85A12,12,0,0,1,227.65,149.14Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function xd(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Jd
      : i[0] === "duotone"
        ? Qd
        : i[0] === "fill"
          ? Yd
          : i[0] === "light"
            ? Gd
            : i[0] === "regular"
              ? Xd
              : i[0] === "thin"
                ? jd
                : qd;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function $d(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class e5 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, $d, xd, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function t5(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function l5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function n5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function i5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function a5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function r5(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function o5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function s5(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? o5
      : i[0] === "duotone"
        ? r5
        : i[0] === "fill"
          ? a5
          : i[0] === "light"
            ? i5
            : i[0] === "regular"
              ? n5
              : i[0] === "thin"
                ? l5
                : t5;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function c5(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class u5 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, c5, s5, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function f5(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function d5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function h5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function m5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function p5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function g5(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function _5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function b5(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? _5
      : i[0] === "duotone"
        ? g5
        : i[0] === "fill"
          ? p5
          : i[0] === "light"
            ? m5
            : i[0] === "regular"
              ? h5
              : i[0] === "thin"
                ? d5
                : f5;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function v5(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class k5 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, v5, b5, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function w5(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function y5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function A5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function M5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Z5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function H5(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function C5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function L5(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? C5
      : i[0] === "duotone"
        ? H5
        : i[0] === "fill"
          ? Z5
          : i[0] === "light"
            ? M5
            : i[0] === "regular"
              ? A5
              : i[0] === "thin"
                ? y5
                : w5;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function V5(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Dn extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, V5, L5, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function S5(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function z5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M124,40V32a4,4,0,0,1,8,0v8a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-8-8a4,4,0,0,0-5.66,5.66Zm0,122.34-8,8a4,4,0,0,0,5.66,5.66l8-8a4,4,0,0,0-5.66-5.66Zm136-136-8,8a4,4,0,0,0,5.66,5.66l8-8a4,4,0,1,0-5.66-5.66Zm-2.34,136a4,4,0,0,0-5.66,5.66l8,8a4,4,0,0,0,5.66-5.66ZM40,124H32a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,128,212Zm96-88h-8a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function P5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function O5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M122,40V32a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48Zm0,119.52-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,1,0-8.48-8.48Zm136-136-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,0,0-8.48-8.48Zm.48,136a6,6,0,0,0-8.48,8.48l8,8a6,6,0,0,0,8.48-8.48ZM40,122H32a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Zm88,88a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,128,210Zm96-88h-8a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function T5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function E5(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function D5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M116,36V32a12,12,0,0,1,24,0v4a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-4-4a12,12,0,0,0-17,17Zm0,119-4,4a12,12,0,0,0,17,17l4-4a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l4-4a12,12,0,0,0-17-17l-4,4A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l4,4a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24h4A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v4a12,12,0,0,0,24,0v-4A12,12,0,0,0,128,208Zm96-92h-4a12,12,0,0,0,0,24h4a12,12,0,0,0,0-24Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function F5(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? D5
      : i[0] === "duotone"
        ? E5
        : i[0] === "fill"
          ? T5
          : i[0] === "light"
            ? O5
            : i[0] === "regular"
              ? P5
              : i[0] === "thin"
                ? z5
                : S5;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function W5(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Fn extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, W5, F5, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function R5(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function K5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function N5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function U5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function I5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function B5(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function q5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function j5(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? q5
      : i[0] === "duotone"
        ? B5
        : i[0] === "fill"
          ? I5
          : i[0] === "light"
            ? U5
            : i[0] === "regular"
              ? N5
              : i[0] === "thin"
                ? K5
                : R5;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function X5(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class g0 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, X5, j5, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function G5(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Y5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Q5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function J5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function x5(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function $5(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function eh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function th(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? eh
      : i[0] === "duotone"
        ? $5
        : i[0] === "fill"
          ? x5
          : i[0] === "light"
            ? J5
            : i[0] === "regular"
              ? Q5
              : i[0] === "thin"
                ? Y5
                : G5;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function lh(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class nh extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, lh, th, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function ih(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function ah(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M236,136v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V136a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V136a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h48A12,12,0,0,1,236,136ZM82.83,74.83,124,33.66V128a4,4,0,0,0,8,0V33.66l41.17,41.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66ZM196,168a8,8,0,1,0-8,8A8,8,0,0,0,196,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function rh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function oh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M238,136v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V136a14,14,0,0,1,14-14H80a6,6,0,0,1,0,12H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2V136a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h48A14,14,0,0,1,238,136ZM84.24,76.24,122,38.49V128a6,6,0,0,0,12,0V38.49l37.76,37.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48ZM198,168a10,10,0,1,0-10,10A10,10,0,0,0,198,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function sh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M74.34,77.66a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L136,43.31V128a8,8,0,0,1-16,0V43.31L85.66,77.66A8,8,0,0,1,74.34,77.66ZM240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16h68a4,4,0,0,1,4,4v3.46c0,13.45,11,24.79,24.46,24.54A24,24,0,0,0,152,128v-4a4,4,0,0,1,4-4h68A16,16,0,0,1,240,136Zm-40,32a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function ch(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function uh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M188,184a16,16,0,1,1,16-16A16,16,0,0,1,188,184Zm36-68H180a12,12,0,0,0,0,24h40v56H36V140H76a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116ZM88.49,80.49,116,53v75a12,12,0,0,0,24,0V53l27.51,27.52a12,12,0,1,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,1,0,17,17Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function fh(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? uh
      : i[0] === "duotone"
        ? ch
        : i[0] === "fill"
          ? sh
          : i[0] === "light"
            ? oh
            : i[0] === "regular"
              ? rh
              : i[0] === "thin"
                ? ah
                : ih;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function dh(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Gr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, dh, fh, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function hh(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function mh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function ph(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function gh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function _h(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function bh(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(e, "d", "M208,216H160L48,40H96Z"),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function vh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function kh(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? vh
      : i[0] === "duotone"
        ? bh
        : i[0] === "fill"
          ? _h
          : i[0] === "light"
            ? gh
            : i[0] === "regular"
              ? ph
              : i[0] === "thin"
                ? mh
                : hh;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function wh(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class Yr extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, wh, kh, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
function yh(l) {
  let e =
      (console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
      ),
      ""),
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p: A,
    d(n) {
      n && _(t);
    },
  };
}
function Ah(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Mh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Zh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Hh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ch(l) {
  let e, t;
  return {
    c() {
      ((e = y("path")),
        (t = y("path")),
        o(
          e,
          "d",
          "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        ),
        o(e, "opacity", "0.2"),
        o(
          t,
          "d",
          "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        ));
    },
    m(n, a) {
      (b(n, e, a), b(n, t, a));
    },
    p: A,
    d(n) {
      n && (_(e), _(t));
    },
  };
}
function Lh(l) {
  let e;
  return {
    c() {
      ((e = y("path")),
        o(
          e,
          "d",
          "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
        ));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Vh(l) {
  let e, t, n, a;
  const u = l[7].default,
    r = Ge(u, l, l[6], null);
  function p(i, s) {
    return i[0] === "bold"
      ? Lh
      : i[0] === "duotone"
        ? Ch
        : i[0] === "fill"
          ? Hh
          : i[0] === "light"
            ? Zh
            : i[0] === "regular"
              ? Mh
              : i[0] === "thin"
                ? Ah
                : yh;
  }
  let d = p(l),
    c = d(l),
    g = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: l[2] },
      { height: l[2] },
      { fill: l[1] },
      { transform: (n = l[3] ? "scale(-1, 1)" : void 0) },
      { viewBox: "0 0 256 256" },
      l[4],
      l[5],
    ],
    m = {};
  for (let i = 0; i < g.length; i += 1) m = I(m, g[i]);
  return {
    c() {
      ((e = y("svg")),
        r && r.c(),
        (t = y("rect")),
        c.c(),
        o(t, "width", "256"),
        o(t, "height", "256"),
        o(t, "fill", "none"),
        oe(e, m));
    },
    m(i, s) {
      (b(i, e, s), r && r.m(e, null), h(e, t), c.m(e, null), (a = !0));
    },
    p(i, [s]) {
      (r &&
        r.p &&
        (!a || s & 64) &&
        Qe(r, u, i, i[6], a ? Ye(u, i[6], s, null) : Je(i[6]), null),
        d === (d = p(i)) && c
          ? c.p(i, s)
          : (c.d(1), (c = d(i)), c && (c.c(), c.m(e, null))),
        oe(
          e,
          (m = et(g, [
            { xmlns: "http://www.w3.org/2000/svg" },
            (!a || s & 4) && { width: i[2] },
            (!a || s & 4) && { height: i[2] },
            (!a || s & 2) && { fill: i[1] },
            (!a || (s & 8 && n !== (n = i[3] ? "scale(-1, 1)" : void 0))) && {
              transform: n,
            },
            { viewBox: "0 0 256 256" },
            i[4],
            s & 32 && i[5],
          ])),
        ));
    },
    i(i) {
      a || (C(r, i), (a = !0));
    },
    o(i) {
      (V(r, i), (a = !1));
    },
    d(i) {
      (i && _(e), r && r.d(i), c.d());
    },
  };
}
function Sh(l, e, t) {
  const n = ["weight", "color", "size", "mirrored"];
  let a = re(e, n),
    { $$slots: u = {}, $$scope: r } = e;
  const {
    weight: p,
    color: d,
    size: c,
    mirrored: g,
    ...m
  } = $e("iconCtx") || {};
  let { weight: i = p ?? "regular" } = e,
    { color: s = d ?? "currentColor" } = e,
    { size: w = c ?? "1em" } = e,
    { mirrored: k = g || !1 } = e;
  return (
    (l.$$set = (f) => {
      ((e = I(I({}, e), xe(f))),
        t(5, (a = re(e, n))),
        "weight" in f && t(0, (i = f.weight)),
        "color" in f && t(1, (s = f.color)),
        "size" in f && t(2, (w = f.size)),
        "mirrored" in f && t(3, (k = f.mirrored)),
        "$$scope" in f && t(6, (r = f.$$scope)));
    }),
    [i, s, w, k, m, a, r, u]
  );
}
class ql extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Sh, Vh, ve, { weight: 0, color: 1, size: 2, mirrored: 3 }));
  }
}
async function Zn(l) {
  return Se({
    __tauriModule: "Clipboard",
    message: { cmd: "writeText", data: l },
  });
}
async function zh() {
  return Se({
    __tauriModule: "Clipboard",
    message: { cmd: "readText", data: null },
  });
}
var Hn;
(function (l) {
  ((l[(l.Audio = 1)] = "Audio"),
    (l[(l.Cache = 2)] = "Cache"),
    (l[(l.Config = 3)] = "Config"),
    (l[(l.Data = 4)] = "Data"),
    (l[(l.LocalData = 5)] = "LocalData"),
    (l[(l.Desktop = 6)] = "Desktop"),
    (l[(l.Document = 7)] = "Document"),
    (l[(l.Download = 8)] = "Download"),
    (l[(l.Executable = 9)] = "Executable"),
    (l[(l.Font = 10)] = "Font"),
    (l[(l.Home = 11)] = "Home"),
    (l[(l.Picture = 12)] = "Picture"),
    (l[(l.Public = 13)] = "Public"),
    (l[(l.Runtime = 14)] = "Runtime"),
    (l[(l.Template = 15)] = "Template"),
    (l[(l.Video = 16)] = "Video"),
    (l[(l.Resource = 17)] = "Resource"),
    (l[(l.App = 18)] = "App"),
    (l[(l.Log = 19)] = "Log"),
    (l[(l.Temp = 20)] = "Temp"),
    (l[(l.AppConfig = 21)] = "AppConfig"),
    (l[(l.AppData = 22)] = "AppData"),
    (l[(l.AppLocalData = 23)] = "AppLocalData"),
    (l[(l.AppCache = 24)] = "AppCache"),
    (l[(l.AppLog = 25)] = "AppLog"));
})(Hn || (Hn = {}));
async function Ph(l, e, t) {
  typeof l == "object" && Object.freeze(l);
  const n = { path: "", contents: [] };
  let a = t;
  return (
    typeof l == "string"
      ? (n.path = l)
      : ((n.path = l.path), (n.contents = l.contents)),
    e && "dir" in e ? (a = e) : typeof l == "string" && (n.contents = e ?? []),
    Se({
      __tauriModule: "Fs",
      message: {
        cmd: "writeFile",
        path: n.path,
        contents: Array.from(
          n.contents instanceof ArrayBuffer
            ? new Uint8Array(n.contents)
            : n.contents,
        ),
        options: a,
      },
    })
  );
}
var Mi;
(function (l) {
  ((l[(l.JSON = 1)] = "JSON"),
    (l[(l.Text = 2)] = "Text"),
    (l[(l.Binary = 3)] = "Binary"));
})(Mi || (Mi = {}));
function Wn() {
  return navigator.appVersion.includes("Win");
}
Wn();
Wn();
async function Oh() {
  return Se({ __tauriModule: "Process", message: { cmd: "relaunch" } });
}
async function e1(l, e) {
  return Se({
    __tauriModule: "Shell",
    message: { cmd: "open", path: l, with: e },
  });
}
async function Rn(l) {
  return C1(a1.STATUS_UPDATE, (e) => {
    l(e == null ? void 0 : e.payload);
  });
}
async function Th() {
  let l;
  function e() {
    (l && l(), (l = void 0));
  }
  return new Promise((t, n) => {
    function a(u) {
      if (u.error) {
        (e(), n(u.error));
        return;
      }
      u.status === "DONE" && (e(), t());
    }
    (Rn(a)
      .then((u) => {
        l = u;
      })
      .catch((u) => {
        throw (e(), u);
      }),
      Wr(a1.INSTALL_UPDATE).catch((u) => {
        throw (e(), u);
      }));
  });
}
async function Eh() {
  let l;
  function e() {
    (l && l(), (l = void 0));
  }
  return new Promise((t, n) => {
    function a(r) {
      (e(), t({ manifest: r, shouldUpdate: !0 }));
    }
    function u(r) {
      if (r.error) {
        (e(), n(r.error));
        return;
      }
      r.status === "UPTODATE" && (e(), t({ shouldUpdate: !1 }));
    }
    (xc(a1.UPDATE_AVAILABLE, (r) => {
      a(r == null ? void 0 : r.payload);
    }).catch((r) => {
      throw (e(), r);
    }),
      Rn(u)
        .then((r) => {
          l = r;
        })
        .catch((r) => {
          throw (e(), r);
        }),
      Wr(a1.CHECK_UPDATE).catch((r) => {
        throw (e(), r);
      }));
  });
}
Wn();
const Dh = !0,
  Fh = "direct",
  Wh = {
    mas: "Mac App Store",
    setapp: "Setapp",
    direct: "paperman.cc (self-distributed)",
  },
  Rh = {
    state: "idle",
    version: null,
    lastChecked: null,
    error: null,
    blocker: null,
  },
  r1 = Tr(Rh);
async function Qr() {
  try {
    const l = await ue("check_install_location");
    return l.canUpdate ? null : l.blocker;
  } catch (l) {
    return (
      console.warn("Install location check failed, allowing update:", l),
      null
    );
  }
}
async function Kh() {
  try {
    await ue("reveal_install_location");
  } catch (l) {
    console.warn("Could not reveal install location:", l);
  }
}
async function Cn(l = !0) {
  r1.update((t) => ({ ...t, state: "checking", error: null }));
  const e = await Qr();
  if (e)
    return (
      r1.set({
        state: "blocked",
        version: null,
        lastChecked: new Date(),
        error: null,
        blocker: e,
      }),
      { shouldUpdate: !1, version: null }
    );
  try {
    const { shouldUpdate: t, manifest: n } = await Eh(),
      a = new Date();
    return t && n != null && n.version
      ? (r1.set({
          state: "ready",
          version: n.version,
          lastChecked: a,
          error: null,
          blocker: null,
        }),
        { shouldUpdate: !0, version: n.version })
      : (r1.set({
          state: "up-to-date",
          version: null,
          lastChecked: a,
          error: null,
          blocker: null,
        }),
        { shouldUpdate: !1, version: null });
  } catch (t) {
    return (
      console.warn("Update check failed:", t),
      r1.set({
        state: "error",
        version: null,
        lastChecked: new Date(),
        error:
          (t == null ? void 0 : t.message) || "Failed to check for updates",
        blocker: null,
      }),
      { shouldUpdate: !1, version: null }
    );
  }
}
async function Jr() {
  const l = await Qr();
  if (l) {
    r1.update((e) => ({ ...e, state: "blocked", error: null, blocker: l }));
    return;
  }
  r1.update((e) => ({ ...e, state: "downloading", error: null }));
  try {
    let e = null;
    const t = await Rn(({ error: n, status: a }) => {
      (console.log(`Updater event: ${a}`, n ? `Error: ${n}` : ""),
        a === "DONE"
          ? console.log("Update download finished")
          : a === "ERROR" &&
            (console.error("Updater error:", n),
            (e = n || "Unknown updater error"),
            r1.update((u) => ({ ...u, state: "error", error: e }))));
    });
    try {
      await Th();
    } catch (n) {
      throw (t && t(), n);
    }
    (console.log("Update installed, relaunching..."),
      t && t(),
      await new Promise((n) => setTimeout(n, 1e3)),
      await Oh());
  } catch (e) {
    (console.error("Update install failed:", e),
      r1.update((t) =>
        t.state === "error" && t.error
          ? t
          : {
              ...t,
              state: "error",
              error:
                (e == null ? void 0 : e.message) ||
                e ||
                "Failed to install update",
            },
      ));
  }
}
function Zi(l) {
  let e, t;
  return {
    c() {
      ((e = v("p")), (t = K(l[3])), o(e, "class", "error-text svelte-19djhz0"));
    },
    m(n, a) {
      (b(n, e, a), h(e, t));
    },
    p(n, a) {
      a & 8 && ze(t, n[3]);
    },
    d(n) {
      n && _(e);
    },
  };
}
function Nh(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T = l[2] ? "Activating…" : "Activate License",
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X;
  ((p = new ql({ props: { size: 16, weight: "bold" } })),
    (k = new W8({ props: { size: 15, weight: "regular" } })));
  let ae = l[3] && Zi(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (a = v("div")),
        (a.innerHTML =
          '<h3 class="modal-title svelte-19djhz0">Paperman Unlimited</h3> <p class="modal-subtitle svelte-19djhz0">Enter your license key to unlock unlimited protection</p>'),
        (u = Z()),
        (r = v("button")),
        j(p.$$.fragment),
        (d = Z()),
        (c = v("div")),
        (g = v("div")),
        (m = v("input")),
        (s = Z()),
        (w = v("button")),
        j(k.$$.fragment),
        (f = Z()),
        (M = v("span")),
        (M.textContent = "Paste"),
        (S = Z()),
        ae && ae.c(),
        (O = Z()),
        (P = v("button")),
        (L = K(T)),
        (F = Z()),
        (E = v("p")),
        (D = K(`Don't have a license?\r\n        `)),
        (N = v("button")),
        (N.textContent = "Upgrade to Unlimited"),
        o(r, "class", "close-btn svelte-19djhz0"),
        o(r, "title", "Close"),
        o(n, "class", "modal-header svelte-19djhz0"),
        o(m, "class", "key-input svelte-19djhz0"),
        o(m, "type", "text"),
        o(m, "placeholder", (i = l[4] + "-XXXX-XXXX-XXXX")),
        (m.disabled = l[2]),
        o(m, "spellcheck", "false"),
        o(m, "autocomplete", "off"),
        o(w, "type", "button"),
        o(w, "class", "paste-btn svelte-19djhz0"),
        (w.disabled = l[2]),
        o(w, "title", "Paste from clipboard"),
        o(g, "class", "input-container svelte-19djhz0"),
        o(P, "class", "activate-btn svelte-19djhz0"),
        (P.disabled = z = l[2] || !l[1].trim()),
        o(N, "class", "upgrade-link svelte-19djhz0"),
        o(E, "class", "hint-text svelte-19djhz0"),
        o(c, "class", "modal-body svelte-19djhz0"),
        o(t, "class", "modal-panel svelte-19djhz0"),
        o(e, "class", "modal-overlay svelte-19djhz0"));
    },
    m(J, se) {
      (b(J, e, se),
        h(e, t),
        h(t, n),
        h(n, a),
        h(n, u),
        h(n, r),
        B(p, r, null),
        h(t, d),
        h(t, c),
        h(c, g),
        h(g, m),
        b1(m, l[1]),
        h(g, s),
        h(g, w),
        B(k, w, null),
        h(w, f),
        h(w, M),
        h(c, S),
        ae && ae.m(c, null),
        h(c, O),
        h(c, P),
        h(P, L),
        h(c, F),
        h(c, E),
        h(E, D),
        h(E, N),
        (ne = !0),
        Q ||
          ((X = [
            W(r, "click", function () {
              g1(l[0]) && l[0].apply(this, arguments);
            }),
            W(m, "input", l[11]),
            W(m, "keydown", l[8]),
            W(w, "click", l[6]),
            W(P, "click", l[7]),
            W(N, "click", l[12]),
            W(t, "click", a0(l[10])),
            W(e, "click", function () {
              g1(l[0]) && l[0].apply(this, arguments);
            }),
          ]),
          (Q = !0)));
    },
    p(J, [se]) {
      ((l = J),
        (!ne || (se & 16 && i !== (i = l[4] + "-XXXX-XXXX-XXXX"))) &&
          o(m, "placeholder", i),
        (!ne || se & 4) && (m.disabled = l[2]),
        se & 2 && m.value !== l[1] && b1(m, l[1]),
        (!ne || se & 4) && (w.disabled = l[2]),
        l[3]
          ? ae
            ? ae.p(l, se)
            : ((ae = Zi(l)), ae.c(), ae.m(c, O))
          : ae && (ae.d(1), (ae = null)),
        (!ne || se & 4) &&
          T !== (T = l[2] ? "Activating…" : "Activate License") &&
          ze(L, T),
        (!ne || (se & 6 && z !== (z = l[2] || !l[1].trim()))) &&
          (P.disabled = z));
    },
    i(J) {
      ne || (C(p.$$.fragment, J), C(k.$$.fragment, J), (ne = !0));
    },
    o(J) {
      (V(p.$$.fragment, J), V(k.$$.fragment, J), (ne = !1));
    },
    d(J) {
      (J && _(e), q(p), q(k), ae && ae.d(), (Q = !1), at(X));
    },
  };
}
function Uh(l, e, t) {
  let { onActivated: n } = e,
    { onClose: a } = e,
    u = "",
    r = !1,
    p = "",
    d = "PAPERWIN",
    c = !1;
  b0(async () => {
    try {
      (ue("set_click_through", { enabled: !1 }).catch(() => {}),
        (await ue("get_platform")) === "macos" &&
          (t(4, (d = "PAPERMAC")), t(5, (c = !0))));
    } catch {}
  });
  async function g() {
    try {
      const f = await zh();
      f && t(1, (u = f.trim().toUpperCase()));
    } catch {
      try {
        const M = await navigator.clipboard.readText();
        M && t(1, (u = M.trim().toUpperCase()));
      } catch (M) {
        console.error("Failed to read clipboard", M);
      }
    }
  }
  async function m() {
    const f = u.trim().toUpperCase();
    if (f) {
      (t(2, (r = !0)), t(3, (p = "")));
      try {
        (await ue("activate_license", { licensekey: f }), n());
      } catch (M) {
        t(
          3,
          (p =
            typeof M == "string"
              ? M
              : "Activation failed. Please check your key and try again."),
        );
      } finally {
        t(2, (r = !1));
      }
    }
  }
  function i(f) {
    var M;
    (f.key === "Enter" && m(),
      f.key === "Escape" && a(),
      (f.metaKey || f.ctrlKey) &&
        f.key.toLowerCase() === "v" &&
        (f.preventDefault(), g()),
      (f.metaKey || f.ctrlKey) &&
        f.key.toLowerCase() === "a" &&
        (f.preventDefault(), (M = f.target) == null || M.select()));
  }
  function s(f) {
    q1.call(this, l, f);
  }
  function w() {
    ((u = this.value), t(1, u));
  }
  const k = () =>
    e1(
      c
        ? "https://paperman.cc/upgrade-for-mac"
        : "https://paperman.cc/upgrade-for-windows",
    );
  return (
    (l.$$set = (f) => {
      ("onActivated" in f && t(9, (n = f.onActivated)),
        "onClose" in f && t(0, (a = f.onClose)));
    }),
    [a, u, r, p, d, c, g, m, i, n, s, w, k]
  );
}
class Ih extends Me {
  constructor(e) {
    (super(), Ae(this, e, Uh, Nh, ve, { onActivated: 9, onClose: 0 }));
  }
}
function Bh(l) {
  let e;
  return {
    c() {
      ((e = v("p")),
        (e.textContent = "No license found on this device."),
        o(e, "class", "loading-text svelte-1kvj6ik"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function qh(l) {
  var P, T;
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f = (((P = l[2]) == null ? void 0 : P.owner_name) || l[1]) && Hi(l),
    M = ((T = l[2]) == null ? void 0 : T.owner_email) && Ci(l),
    S = l[6] && Li(l),
    O = l[9] && Gh(l);
  return {
    c() {
      (f && f.c(),
        (e = Z()),
        M && M.c(),
        (t = Z()),
        S && S.c(),
        (n = Z()),
        (a = v("div")),
        (u = v("span")),
        (u.textContent = "Source"),
        (r = Z()),
        (p = v("span")),
        (p.textContent = `${Wh[l[8]]}`),
        (d = Z()),
        (c = v("div")),
        (g = v("span")),
        (g.textContent = `${l[10]}`),
        (m = Z()),
        (i = v("span")),
        (s = K(l[7])),
        (w = Z()),
        O && O.c(),
        (k = c1()),
        o(u, "class", "info-label svelte-1kvj6ik"),
        o(p, "class", "info-value svelte-1kvj6ik"),
        o(a, "class", "info-row svelte-1kvj6ik"),
        o(g, "class", "info-label svelte-1kvj6ik"),
        o(i, "class", "info-value svelte-1kvj6ik"),
        o(c, "class", "info-row svelte-1kvj6ik"));
    },
    m(L, z) {
      (f && f.m(L, z),
        b(L, e, z),
        M && M.m(L, z),
        b(L, t, z),
        S && S.m(L, z),
        b(L, n, z),
        b(L, a, z),
        h(a, u),
        h(a, r),
        h(a, p),
        b(L, d, z),
        b(L, c, z),
        h(c, g),
        h(c, m),
        h(c, i),
        h(i, s),
        b(L, w, z),
        O && O.m(L, z),
        b(L, k, z));
    },
    p(L, z) {
      var F, E;
      (((F = L[2]) != null && F.owner_name) || L[1]
        ? f
          ? f.p(L, z)
          : ((f = Hi(L)), f.c(), f.m(e.parentNode, e))
        : f && (f.d(1), (f = null)),
        (E = L[2]) != null && E.owner_email
          ? M
            ? M.p(L, z)
            : ((M = Ci(L)), M.c(), M.m(t.parentNode, t))
          : M && (M.d(1), (M = null)),
        L[6]
          ? S
            ? S.p(L, z)
            : ((S = Li(L)), S.c(), S.m(n.parentNode, n))
          : S && (S.d(1), (S = null)),
        z & 128 && ze(s, L[7]),
        L[9] && O.p(L, z));
    },
    d(L) {
      (L && (_(e), _(t), _(n), _(a), _(d), _(c), _(w), _(k)),
        f && f.d(L),
        M && M.d(L),
        S && S.d(L),
        O && O.d(L));
    },
  };
}
function jh(l) {
  let e;
  return {
    c() {
      ((e = v("p")),
        (e.textContent = "Loading…"),
        o(e, "class", "loading-text svelte-1kvj6ik"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Xh(l) {
  let e, t;
  return {
    c() {
      ((e = v("p")), (t = K(l[4])), o(e, "class", "error-text svelte-1kvj6ik"));
    },
    m(n, a) {
      (b(n, e, a), h(e, t));
    },
    p(n, a) {
      a & 16 && ze(t, n[4]);
    },
    d(n) {
      n && _(e);
    },
  };
}
function Hi(l) {
  var p;
  let e,
    t,
    n,
    a,
    u = (((p = l[2]) == null ? void 0 : p.owner_name) || l[1]) + "",
    r;
  return {
    c() {
      ((e = v("div")),
        (t = v("span")),
        (t.textContent = "Licensed to"),
        (n = Z()),
        (a = v("span")),
        (r = K(u)),
        o(t, "class", "info-label svelte-1kvj6ik"),
        o(a, "class", "info-value svelte-1kvj6ik"),
        o(e, "class", "info-row svelte-1kvj6ik"));
    },
    m(d, c) {
      (b(d, e, c), h(e, t), h(e, n), h(e, a), h(a, r));
    },
    p(d, c) {
      var g;
      c & 6 &&
        u !==
          (u = (((g = d[2]) == null ? void 0 : g.owner_name) || d[1]) + "") &&
        ze(r, u);
    },
    d(d) {
      d && _(e);
    },
  };
}
function Ci(l) {
  let e,
    t,
    n,
    a,
    u = l[2].owner_email + "",
    r;
  return {
    c() {
      ((e = v("div")),
        (t = v("span")),
        (t.textContent = "Email"),
        (n = Z()),
        (a = v("span")),
        (r = K(u)),
        o(t, "class", "info-label svelte-1kvj6ik"),
        o(a, "class", "info-value svelte-1kvj6ik"),
        o(e, "class", "info-row svelte-1kvj6ik"));
    },
    m(p, d) {
      (b(p, e, d), h(e, t), h(e, n), h(e, a), h(a, r));
    },
    p(p, d) {
      d & 4 && u !== (u = p[2].owner_email + "") && ze(r, u);
    },
    d(p) {
      p && _(e);
    },
  };
}
function Li(l) {
  let e,
    t,
    n,
    a,
    u = Vi(l[6]) + "",
    r;
  return {
    c() {
      ((e = v("div")),
        (t = v("span")),
        (t.textContent = "Activated"),
        (n = Z()),
        (a = v("span")),
        (r = K(u)),
        o(t, "class", "info-label svelte-1kvj6ik"),
        o(a, "class", "info-value svelte-1kvj6ik"),
        o(e, "class", "info-row svelte-1kvj6ik"));
    },
    m(p, d) {
      (b(p, e, d), h(e, t), h(e, n), h(e, a), h(a, r));
    },
    p(p, d) {
      d & 64 && u !== (u = Vi(p[6]) + "") && ze(r, u);
    },
    d(p) {
      p && _(e);
    },
  };
}
function Gh(l) {
  let e,
    t,
    n,
    a = l[3] ? "Removing…" : "Remove License from This Device",
    u,
    r,
    p;
  return {
    c() {
      ((e = v("div")),
        (t = Z()),
        (n = v("button")),
        (u = K(a)),
        o(e, "class", "divider svelte-1kvj6ik"),
        o(n, "class", "remove-btn svelte-1kvj6ik"),
        (n.disabled = l[3]));
    },
    m(d, c) {
      (b(d, e, c),
        b(d, t, c),
        b(d, n, c),
        h(n, u),
        r || ((p = W(n, "click", l[12])), (r = !0)));
    },
    p(d, c) {
      (c & 8 &&
        a !== (a = d[3] ? "Removing…" : "Remove License from This Device") &&
        ze(u, a),
        c & 8 && (n.disabled = d[3]));
    },
    d(d) {
      (d && (_(e), _(t), _(n)), (r = !1), p());
    },
  };
}
function Yh(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k;
  g = new ql({ props: { size: 16, weight: "bold" } });
  function f(O, P) {
    return O[4] ? Xh : O[5] ? jh : O[2] ? qh : Bh;
  }
  let M = f(l),
    S = M(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (a = v("div")),
        (u = v("h3")),
        (u.textContent = "Paperman Unlimited"),
        (r = Z()),
        (p = v("p")),
        (p.textContent = `${l[11]}`),
        (d = Z()),
        (c = v("button")),
        j(g.$$.fragment),
        (m = Z()),
        (i = v("div")),
        S.c(),
        o(u, "class", "modal-title svelte-1kvj6ik"),
        o(p, "class", "modal-subtitle svelte-1kvj6ik"),
        o(c, "class", "close-btn svelte-1kvj6ik"),
        o(c, "title", "Close"),
        o(n, "class", "modal-header svelte-1kvj6ik"),
        o(i, "class", "modal-body svelte-1kvj6ik"),
        o(t, "class", "modal-panel svelte-1kvj6ik"),
        o(e, "class", "modal-overlay svelte-1kvj6ik"));
    },
    m(O, P) {
      (b(O, e, P),
        h(e, t),
        h(t, n),
        h(n, a),
        h(a, u),
        h(a, r),
        h(a, p),
        h(n, d),
        h(n, c),
        B(g, c, null),
        h(t, m),
        h(t, i),
        S.m(i, null),
        (s = !0),
        w ||
          ((k = [
            W(c, "click", function () {
              g1(l[0]) && l[0].apply(this, arguments);
            }),
            W(t, "click", a0(l[16])),
            W(e, "click", function () {
              g1(l[0]) && l[0].apply(this, arguments);
            }),
          ]),
          (w = !0)));
    },
    p(O, [P]) {
      ((l = O),
        M === (M = f(l)) && S
          ? S.p(l, P)
          : (S.d(1), (S = M(l)), S && (S.c(), S.m(i, null))));
    },
    i(O) {
      s || (C(g.$$.fragment, O), (s = !0));
    },
    o(O) {
      (V(g.$$.fragment, O), (s = !1));
    },
    d(O) {
      (O && _(e), q(g), S.d(), (w = !1), at(k));
    },
  };
}
function Vi(l) {
  return new Date(l * 1e3).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function Qh(l, e, t) {
  let n,
    a,
    { onClose: u } = e,
    { onCleared: r = () => {} } = e,
    { isSetapp: p = !1 } = e,
    { displayName: d = "" } = e,
    { activatedAt: c = null } = e;
  const g = p ? "setapp" : Fh,
    m = g === "direct",
    i = g === "setapp" ? "Access" : "Expires",
    s =
      g === "setapp"
        ? "Unlocked through Setapp"
        : g === "mas"
          ? "Your Mac App Store purchase"
          : "Your active license";
  let w = null,
    k = !1,
    f = "",
    M = g === "direct";
  async function S() {
    if (g !== "direct") {
      (t(
        2,
        (w = {
          key: "",
          owner_name: d || null,
          owner_email: null,
          activated_at: c ?? 0,
          expires_at: null,
        }),
      ),
        t(5, (M = !1)));
      return;
    }
    try {
      t(2, (w = await ue("get_license_info")));
    } catch {
      t(4, (f = "Could not load license information."));
    } finally {
      t(5, (M = !1));
    }
  }
  async function O() {
    t(3, (k = !0));
    try {
      (await ue("clear_license"), r());
    } catch {
      t(4, (f = "Failed to remove license."));
    } finally {
      t(3, (k = !1));
    }
  }
  S();
  function P(T) {
    q1.call(this, l, T);
  }
  return (
    (l.$$set = (T) => {
      ("onClose" in T && t(0, (u = T.onClose)),
        "onCleared" in T && t(13, (r = T.onCleared)),
        "isSetapp" in T && t(14, (p = T.isSetapp)),
        "displayName" in T && t(1, (d = T.displayName)),
        "activatedAt" in T && t(15, (c = T.activatedAt)));
    }),
    (l.$$.update = () => {
      (l.$$.dirty & 4 &&
        t(
          7,
          (n =
            g === "setapp"
              ? "Active through Setapp"
              : g === "mas"
                ? "Lifetime"
                : w != null && w.expires_at
                  ? w.expires_at
                  : "Lifetime"),
        ),
        l.$$.dirty & 32772 &&
          t(6, (a = (w == null ? void 0 : w.activated_at) ?? c ?? null)));
    }),
    [u, d, w, k, f, M, a, n, g, m, i, s, O, r, p, c, P]
  );
}
class Jh extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Qh, Yh, ve, {
        onClose: 0,
        onCleared: 13,
        isSetapp: 14,
        displayName: 1,
        activatedAt: 15,
      }));
  }
}
function xr(l, e, t, n, a, u) {
  const r = Math.max(0, Math.min(u, n / 2, a / 2));
  (l.beginPath(),
    l.moveTo(e + r, t),
    l.lineTo(e + n - r, t),
    l.quadraticCurveTo(e + n, t, e + n, t + r),
    l.lineTo(e + n, t + a - r),
    l.quadraticCurveTo(e + n, t + a, e + n - r, t + a),
    l.lineTo(e + r, t + a),
    l.quadraticCurveTo(e, t + a, e, t + a - r),
    l.lineTo(e, t + r),
    l.quadraticCurveTo(e, t, e + r, t),
    l.closePath());
}
function Si(l) {
  if (!l) return 0;
  const e = Number.parseFloat(l);
  return Number.isFinite(e) ? e : 0;
}
function $r(l, e) {
  const t = l.getBoundingClientRect();
  return {
    x: t.left - e.left,
    y: t.top - e.top,
    width: t.width,
    height: t.height,
  };
}
function xh(l) {
  return [
    l.fontStyle !== "normal" ? l.fontStyle : "",
    l.fontWeight || "400",
    l.fontSize || "16px",
    l.fontFamily || "sans-serif",
  ]
    .filter(Boolean)
    .join(" ");
}
async function eo(l) {
  (l.complete && l.naturalWidth > 0) ||
    (await new Promise((e, t) => {
      ((l.onload = () => e()),
        (l.onerror = () =>
          t(new Error(`Failed to load image: ${l.currentSrc || l.src}`))));
    }));
}
function $h(l) {
  var e;
  return l instanceof HTMLInputElement
    ? l.value || l.placeholder || ""
    : (((e = l.textContent) == null ? void 0 : e.trim()) ?? "");
}
async function zi(l, e, t, n = 0) {
  await eo(e);
  const a = $r(e, t);
  (n > 0 && (l.save(), xr(l, a.x, a.y, a.width, a.height, n), l.clip()),
    l.drawImage(e, a.x, a.y, a.width, a.height),
    n > 0 && l.restore());
}
function hn(l, e, t) {
  const n = $r(e, t),
    a = window.getComputedStyle(e),
    u = $h(e);
  ((l.font = xh(a)),
    (l.fillStyle = a.color),
    (l.textAlign = "left"),
    (l.textBaseline = "top"),
    l.fillText(u, n.x, n.y));
}
async function em(l, e, t, n) {
  await eo(n);
  const a = t.getBoundingClientRect(),
    u = window.getComputedStyle(t),
    r = n.offsetWidth,
    p = n.offsetHeight;
  (t.offsetWidth, t.offsetHeight);
  const d = u.transform.match(/matrix\(([^)]+)\)/);
  let c = 0;
  if (d) {
    const i = d[1].split(",").map((s) => Number.parseFloat(s.trim()));
    i.length >= 2 && (c = Math.atan2(i[1], i[0]));
  }
  const g = a.left - e.left + a.width / 2,
    m = a.top - e.top + a.height / 2;
  (l.save(),
    l.translate(g, m),
    l.rotate(c),
    l.drawImage(n, -r / 2, -p / 2, r, p),
    l.restore());
}
async function tm(l, e = 3) {
  await document.fonts.ready;
  const t = l.getBoundingClientRect(),
    n = document.createElement("canvas");
  ((n.width = Math.ceil(t.width * e)), (n.height = Math.ceil(t.height * e)));
  const a = n.getContext("2d");
  if (!a) throw new Error("Failed to create export canvas.");
  a.scale(e, e);
  const u = window.getComputedStyle(l),
    r = u.backgroundColor || "transparent",
    p = Si(u.borderRadius);
  (a.save(),
    xr(a, 0, 0, t.width, t.height, p),
    a.clip(),
    (a.fillStyle = r),
    a.fillRect(0, 0, t.width, t.height));
  const d = l.querySelector(".profile-image"),
    c = l.querySelector(".premium-badge"),
    g = l.querySelector(".badge-image"),
    m = l.querySelector(".name-display, .name-input"),
    i = l.querySelector(".user-role"),
    s = l.querySelector(".activation-date"),
    w = l.querySelector(".qr-badge");
  if (d) {
    const f = window.getComputedStyle(d);
    await zi(a, d, t, Si(f.borderRadius));
  }
  (c && g && (await em(a, t, c, g)),
    m && hn(a, m, t),
    i && hn(a, i, t),
    s && hn(a, s, t),
    w && (await zi(a, w, t)),
    a.restore());
  const k = await new Promise((f) => {
    n.toBlob((M) => f(M), "image/png");
  });
  if (!k) throw new Error("Failed to produce the exported card image.");
  return k;
}
function lm(l) {
  let e,
    t = (l[0] || "Add your name") + "",
    n,
    a,
    u,
    r;
  return {
    c() {
      ((e = v("button")),
        (n = K(t)),
        o(
          e,
          "class",
          (a =
            "name-display " + (l[0] ? "" : "placeholder") + " svelte-1aftgd9"),
        ),
        o(e, "title", "Click to edit your name"));
    },
    m(p, d) {
      (b(p, e, d), h(e, n), u || ((r = W(e, "click", l[11])), (u = !0)));
    },
    p(p, d) {
      (d[0] & 1 && t !== (t = (p[0] || "Add your name") + "") && ze(n, t),
        d[0] & 1 &&
          a !==
            (a =
              "name-display " +
              (p[0] ? "" : "placeholder") +
              " svelte-1aftgd9") &&
          o(e, "class", a));
    },
    d(p) {
      (p && _(e), (u = !1), r());
    },
  };
}
function nm(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("input")),
        o(e, "type", "text"),
        o(e, "class", "name-input svelte-1aftgd9"),
        o(e, "placeholder", "Your name"),
        o(e, "maxlength", "30"));
    },
    m(a, u) {
      (b(a, e, u),
        l[20](e),
        b1(e, l[3]),
        t ||
          ((n = [
            W(e, "input", l[21]),
            W(e, "keydown", l[10]),
            W(e, "blur", l[9]),
          ]),
          (t = !0)));
    },
    p(a, u) {
      u[0] & 8 && e.value !== a[3] && b1(e, a[3]);
    },
    d(a) {
      (a && _(e), l[20](null), (t = !1), at(n));
    },
  };
}
function im(l) {
  let e, t;
  return (
    (e = new On({ props: { size: 18, weight: "regular" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function am(l) {
  let e, t;
  return (
    (e = new Il({ props: { size: 18, weight: "bold" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function rm(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i = (l[1] ? Ln(l[1]) : "2024") + "",
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J;
  function se(pe, G) {
    return pe[2] ? nm : lm;
  }
  let te = se(l),
    ge = te(l);
  ((T = new Gr({ props: { size: 18, weight: "regular" } })),
    (F = new d4({ props: { size: 18, weight: "regular" } })));
  const $ = [am, im],
    he = [];
  function Re(pe, G) {
    return pe[4] ? 0 : 1;
  }
  return (
    (N = Re(l)),
    (ne = he[N] = $[N](l)),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("div")),
          (a = v("div")),
          (a.innerHTML =
            '<img src="/stamp-image.png" alt="User profile" class="profile-image svelte-1aftgd9"/> <div class="premium-badge svelte-1aftgd9"><img src="/stamp-logo.png" alt="Premium badge" class="badge-image svelte-1aftgd9"/></div>'),
          (u = Z()),
          (r = v("div")),
          ge.c(),
          (p = Z()),
          (d = v("div")),
          (d.textContent = `${l[8]()}`),
          (c = Z()),
          (g = v("div")),
          (m = v("span")),
          (s = K(i)),
          (w = Z()),
          (k = v("img")),
          (S = Z()),
          (O = v("div")),
          (P = v("button")),
          j(T.$$.fragment),
          (L = Z()),
          (z = v("button")),
          j(F.$$.fragment),
          (E = Z()),
          (D = v("button")),
          ne.c(),
          o(a, "class", "profile-section svelte-1aftgd9"),
          o(d, "class", "user-role svelte-1aftgd9"),
          o(r, "class", "user-info svelte-1aftgd9"),
          o(m, "class", "activation-date svelte-1aftgd9"),
          _0(k.src, (f = "/doublone-studios-vertical.png")) || o(k, "src", f),
          o(k, "alt", "Doublone Studios"),
          o(k, "class", "qr-badge svelte-1aftgd9"),
          o(g, "class", "card-footer svelte-1aftgd9"),
          o(
            n,
            "class",
            (M =
              "license-card " +
              (l[7] ? "is-hovering" : "") +
              " svelte-1aftgd9"),
          ),
          o(P, "class", "action-btn svelte-1aftgd9"),
          o(P, "title", "Share"),
          o(P, "aria-label", "Share"),
          o(z, "class", "action-btn svelte-1aftgd9"),
          o(z, "title", "Download"),
          o(z, "aria-label", "Download"),
          o(D, "class", "action-btn svelte-1aftgd9"),
          o(D, "title", (Q = l[4] ? "Copied" : "Copy")),
          o(D, "aria-label", "Copy"),
          o(O, "class", "card-actions svelte-1aftgd9"),
          o(O, "aria-label", "Card actions"),
          o(t, "class", "card-wrapper svelte-1aftgd9"),
          o(e, "class", "license-card-wrapper svelte-1aftgd9"));
      },
      m(pe, G) {
        (b(pe, e, G),
          h(e, t),
          h(t, n),
          h(n, a),
          h(n, u),
          h(n, r),
          ge.m(r, null),
          h(r, p),
          h(r, d),
          h(n, c),
          h(n, g),
          h(g, m),
          h(m, s),
          h(g, w),
          h(g, k),
          l[22](n),
          h(t, S),
          h(t, O),
          h(O, P),
          B(T, P, null),
          h(O, L),
          h(O, z),
          B(F, z, null),
          h(O, E),
          h(O, D),
          he[N].m(D, null),
          (X = !0),
          ae ||
            ((J = [
              W(n, "pointermove", l[12]),
              W(n, "pointerleave", l[13]),
              W(P, "click", l[14]),
              W(z, "click", l[15]),
              W(D, "click", l[16]),
            ]),
            (ae = !0)));
      },
      p(pe, G) {
        (te === (te = se(pe)) && ge
          ? ge.p(pe, G)
          : (ge.d(1), (ge = te(pe)), ge && (ge.c(), ge.m(r, p))),
          (!X || G[0] & 2) &&
            i !== (i = (pe[1] ? Ln(pe[1]) : "2024") + "") &&
            ze(s, i),
          (!X ||
            (G[0] & 128 &&
              M !==
                (M =
                  "license-card " +
                  (pe[7] ? "is-hovering" : "") +
                  " svelte-1aftgd9"))) &&
            o(n, "class", M));
        let _e = N;
        ((N = Re(pe)),
          N !== _e &&
            (Ie(),
            V(he[_e], 1, 1, () => {
              he[_e] = null;
            }),
            Be(),
            (ne = he[N]),
            ne || ((ne = he[N] = $[N](pe)), ne.c()),
            C(ne, 1),
            ne.m(D, null)),
          (!X || (G[0] & 16 && Q !== (Q = pe[4] ? "Copied" : "Copy"))) &&
            o(D, "title", Q));
      },
      i(pe) {
        X || (C(T.$$.fragment, pe), C(F.$$.fragment, pe), C(ne), (X = !0));
      },
      o(pe) {
        (V(T.$$.fragment, pe), V(F.$$.fragment, pe), V(ne), (X = !1));
      },
      d(pe) {
        (pe && _(e),
          ge.d(),
          l[22](null),
          q(T),
          q(F),
          he[N].d(),
          (ae = !1),
          at(J));
      },
    }
  );
}
function Ln(l) {
  return new Date(l * 1e3).toLocaleDateString(void 0, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
function om(l, e, t) {
  let { displayName: n = "" } = e,
    { activatedAt: a = null } = e,
    { onNameChange: u = () => {} } = e,
    { onCardUpdated: r = () => {} } = e,
    { onShowToast: p = () => {} } = e;
  const d = [
      "Founding Reader",
      "First Print Member",
      "Early Edition Holder",
      "Day One Supporter",
    ],
    c = [
      "Part of the early run that helped make calmer screens real.",
      "Back from the first chapter, before any of this felt inevitable.",
      "Among the first readers to believe gentler screens were worth building.",
      "Here from the early days, shaping a calmer way to read on screen.",
      "One of the first people carrying Paperman into the world.",
      "From the first print run of readers who wanted a softer screen.",
    ];
  let g = !1,
    m = n,
    i = !1,
    s = null,
    w = null,
    k = null,
    f = null,
    M = !1;
  function S() {
    (s && clearTimeout(s),
      t(4, (i = !0)),
      (s = setTimeout(() => {
        (t(4, (i = !1)), (s = null));
      }, 2200)));
  }
  function O() {
    return (
      `${(w == null ? void 0 : w.key) ?? ""}|${n}|${a ?? 0}`
        .split("")
        .reduce((_e, He) => _e + He.charCodeAt(0), 0) || 1
    );
  }
  function P(G) {
    return G[O() % G.length];
  }
  function T() {
    return P(d);
  }
  function L() {
    return P(c);
  }
  function z() {
    const G = a ? Ln(a) : "2024";
    return `I'm part of Paperman Unlimited as a ${T()} since ${G}. ${L()} https://paperman.cc`;
  }
  function F() {
    return n
      ? `paperman-license-${n.toLowerCase().replace(/\s+/g, "-")}.png`
      : "paperman-license-card.png";
  }
  async function E() {
    return f ? await tm(f) : null;
  }
  async function D() {
    const G = await E();
    return G ? new Uint8Array(await G.arrayBuffer()) : null;
  }
  function N() {
    const G = m.trim();
    (G && G !== n && (t(0, (n = G)), u(G), r()),
      !G && n && t(3, (m = n)),
      t(2, (g = !1)));
  }
  function ne(G) {
    (G.key === "Enter" && N(),
      G.key === "Escape" && (t(3, (m = n)), t(2, (g = !1))));
  }
  async function Q() {
    (t(3, (m = n)),
      t(2, (g = !0)),
      await Q0(),
      k == null || k.focus(),
      k == null || k.select());
  }
  function X(G, _e) {
    if (!f) return;
    const He = f.getBoundingClientRect(),
      be = (G - He.left) / He.width,
      fe = (_e - He.top) / He.height,
      ke = be - 0.5,
      we = fe - 0.5,
      Oe = ke * 10,
      qe = we * -10,
      Le = ke * -8,
      Ve = we * -8;
    (f.style.setProperty("--card-rotate-x", `${qe.toFixed(2)}deg`),
      f.style.setProperty("--card-rotate-y", `${Oe.toFixed(2)}deg`),
      f.style.setProperty("--edge-shift-x", `${Le.toFixed(2)}px`),
      f.style.setProperty("--edge-shift-y", `${Ve.toFixed(2)}px`),
      f.style.setProperty("--shine-x", `${(be * 100).toFixed(2)}%`),
      f.style.setProperty("--shine-y", `${(fe * 100).toFixed(2)}%`));
  }
  function ae() {
    f &&
      (f.style.setProperty("--card-rotate-x", "0deg"),
      f.style.setProperty("--card-rotate-y", "0deg"),
      f.style.setProperty("--edge-shift-x", "0px"),
      f.style.setProperty("--edge-shift-y", "0px"),
      f.style.setProperty("--shine-x", "50%"),
      f.style.setProperty("--shine-y", "50%"));
  }
  function J(G) {
    G.pointerType !== "touch" && (t(7, (M = !0)), X(G.clientX, G.clientY));
  }
  function se() {
    (t(7, (M = !1)), ae());
  }
  async function te(G) {
    const He = G.currentTarget.getBoundingClientRect(),
      be = z();
    let fe = null;
    try {
      fe = await E();
    } catch (ke) {
      console.error("Failed to render card for sharing:", ke);
    }
    if (fe) {
      const ke = new Uint8Array(await fe.arrayBuffer());
      try {
        (await ue("set_always_on_top", { enabled: !1 }),
          await ue("share_png", {
            pngBytes: Array.from(ke),
            shareText: be,
            x: He.x,
            y: He.y,
            width: He.width,
            height: He.height,
          }));
        let we = !1;
        const Oe = async () => {
            we ||
              ((we = !0),
              await ue("set_always_on_top", { enabled: !0 }).catch(() => {}),
              qe == null || qe.then((Le) => Le()),
              window.removeEventListener("pointerdown", Oe));
          },
          qe = An.once("tauri://focus", Oe);
        window.addEventListener("pointerdown", Oe, { once: !0 });
        return;
      } catch (we) {
        (await ue("set_always_on_top", { enabled: !0 }).catch(() => {}),
          console.debug(
            "Native share unavailable, falling back to web share:",
            we,
          ));
      }
      if (navigator.share && typeof File < "u") {
        const we = new File([fe], F(), { type: "image/png" });
        try {
          if (!navigator.canShare || navigator.canShare({ files: [we] })) {
            (await ue("set_always_on_top", { enabled: !1 }),
              await navigator.share({
                title: "My Paperman Unlimited card",
                text: be,
                files: [we],
              }),
              await ue("set_always_on_top", { enabled: !0 }).catch(() => {}));
            return;
          }
        } catch (Oe) {
          if (
            (await ue("set_always_on_top", { enabled: !0 }).catch(() => {}),
            Oe instanceof Error && Oe.name === "AbortError")
          )
            return;
        }
      }
    }
    try {
      (await Zn(be), p("Share text copied. Paste it anywhere."));
    } catch (ke) {
      (console.error("Failed to share card:", ke),
        p("Sharing is unavailable on this device."));
    }
  }
  async function ge() {
    try {
      const G = await D();
      if (!G) {
        p("Could not generate the card image.");
        return;
      }
      (await Ph({ path: F(), contents: G }, { dir: Hn.Download }),
        p("Saved to Downloads"));
    } catch (G) {
      (console.error("Failed to save card image:", G),
        p("Could not save the card image."));
    }
  }
  async function $() {
    try {
      const G = await D();
      if (!G) {
        p("Could not generate the card image.");
        return;
      }
      (await ue("copy_png_to_clipboard", { pngBytes: Array.from(G) }),
        S(),
        p("Card image copied"));
    } catch (G) {
      (console.error("Failed to copy card:", G),
        p("Could not copy the card image."));
    }
  }
  (b0(async () => {
    try {
      const G = await ue("get_license_info");
      if (!G) return;
      if (((w = G), G.owner_name && !n))
        (t(0, (n = G.owner_name)), u(G.owner_name));
      else if (!G.owner_name && !n)
        try {
          const _e = await ue("fetch_owner_name");
          _e && !n && (t(0, (n = _e)), u(_e));
        } catch {}
      (G.activated_at && !a && t(1, (a = G.activated_at)), r());
    } catch (G) {
      console.debug("License info unavailable for the collectible card:", G);
    }
  }),
    Ul(() => {
      (s && clearTimeout(s), ae());
    }));
  function he(G) {
    Jt[G ? "unshift" : "push"](() => {
      ((k = G), t(5, k));
    });
  }
  function Re() {
    ((m = this.value), t(3, m), t(2, g), t(0, n));
  }
  function pe(G) {
    Jt[G ? "unshift" : "push"](() => {
      ((f = G), t(6, f));
    });
  }
  return (
    (l.$$set = (G) => {
      ("displayName" in G && t(0, (n = G.displayName)),
        "activatedAt" in G && t(1, (a = G.activatedAt)),
        "onNameChange" in G && t(17, (u = G.onNameChange)),
        "onCardUpdated" in G && t(18, (r = G.onCardUpdated)),
        "onShowToast" in G && t(19, (p = G.onShowToast)));
    }),
    (l.$$.update = () => {
      l.$$.dirty[0] & 5 && (g || t(3, (m = n)));
    }),
    [n, a, g, m, i, k, f, M, T, N, ne, Q, J, se, te, ge, $, u, r, p, he, Re, pe]
  );
}
class sm extends Me {
  constructor(e) {
    (super(),
      Ae(
        this,
        e,
        om,
        rm,
        ve,
        {
          displayName: 0,
          activatedAt: 1,
          onNameChange: 17,
          onCardUpdated: 18,
          onShowToast: 19,
        },
        null,
        [-1, -1],
      ));
  }
}
function cm(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D;
  return (
    (p = new ql({ props: { size: 16, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("div")),
          (a = v("div")),
          (a.innerHTML =
            '<h3 class="modal-title svelte-1hie5wa">Daily Limit Reached</h3> <p class="modal-subtitle svelte-1hie5wa">Your free protection for today is up</p>'),
          (u = Z()),
          (r = v("button")),
          j(p.$$.fragment),
          (d = Z()),
          (c = v("div")),
          (g = v("div")),
          (m = v("div")),
          (m.innerHTML =
            '<div class="usage-fill svelte-1hie5wa" style="width: 100%;"></div>'),
          (i = Z()),
          (s = v("p")),
          (w = K(l[0])),
          (k = K("/")),
          (f = K(um)),
          (M = K(" minutes used today")),
          (S = Z()),
          (O = v("p")),
          (O.innerHTML = `Paperman&#39;s free tier includes <strong class="svelte-1hie5wa">1 hour of paper protection per day</strong> and the <strong class="svelte-1hie5wa">Classic Matte</strong> texture only.\n        Upgrade to Paperman Unlimited for unrestricted eye care — all textures, <strong class="svelte-1hie5wa">Desk Lamp Mode</strong>, and no daily caps, ever.`),
          (P = Z()),
          (T = v("button")),
          (T.textContent = "Upgrade to Unlimited"),
          (L = Z()),
          (z = v("button")),
          (z.textContent = "I already have a license key"),
          o(r, "class", "close-btn svelte-1hie5wa"),
          o(r, "title", "Dismiss"),
          o(n, "class", "modal-header svelte-1hie5wa"),
          o(m, "class", "usage-bar svelte-1hie5wa"),
          o(s, "class", "usage-label svelte-1hie5wa"),
          o(g, "class", "usage-bar-wrap svelte-1hie5wa"),
          o(O, "class", "description svelte-1hie5wa"),
          o(T, "class", "primary-btn svelte-1hie5wa"),
          o(z, "class", "secondary-btn svelte-1hie5wa"),
          o(c, "class", "modal-body svelte-1hie5wa"),
          o(t, "class", "modal-panel svelte-1hie5wa"),
          o(e, "class", "modal-overlay svelte-1hie5wa"));
      },
      m(N, ne) {
        (b(N, e, ne),
          h(e, t),
          h(t, n),
          h(n, a),
          h(n, u),
          h(n, r),
          B(p, r, null),
          h(t, d),
          h(t, c),
          h(c, g),
          h(g, m),
          h(g, i),
          h(g, s),
          h(s, w),
          h(s, k),
          h(s, f),
          h(s, M),
          h(c, S),
          h(c, O),
          h(c, P),
          h(c, T),
          h(c, L),
          h(c, z),
          (F = !0),
          E ||
            ((D = [
              W(r, "click", function () {
                g1(l[2]) && l[2].apply(this, arguments);
              }),
              W(T, "click", l[3]),
              W(z, "click", function () {
                g1(l[1]) && l[1].apply(this, arguments);
              }),
            ]),
            (E = !0)));
      },
      p(N, [ne]) {
        ((l = N), (!F || ne & 1) && ze(w, l[0]));
      },
      i(N) {
        F || (C(p.$$.fragment, N), (F = !0));
      },
      o(N) {
        (V(p.$$.fragment, N), (F = !1));
      },
      d(N) {
        (N && _(e), q(p), (E = !1), at(D));
      },
    }
  );
}
const um = 60;
function fm(l, e, t) {
  let { dailyMinutes: n } = e,
    { onEnterKey: a } = e,
    { onClose: u } = e,
    r = !1;
  b0(async () => {
    try {
      (await ue("get_platform")) === "macos" && (r = !0);
    } catch {}
  });
  async function p() {
    await e1(
      r
        ? "https://paperman.cc/upgrade-for-mac"
        : "https://paperman.cc/upgrade-for-windows",
    );
  }
  return (
    (l.$$set = (d) => {
      ("dailyMinutes" in d && t(0, (n = d.dailyMinutes)),
        "onEnterKey" in d && t(1, (a = d.onEnterKey)),
        "onClose" in d && t(2, (u = d.onClose)));
    }),
    [n, a, u, p]
  );
}
class dm extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, fm, cm, ve, { dailyMinutes: 0, onEnterKey: 1, onClose: 2 }));
  }
}
function Pi(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("span")),
        (t = K("v")),
        (n = K(l[0])),
        o(e, "class", "about-version svelte-sos31z"));
    },
    m(a, u) {
      (b(a, e, u), h(e, t), h(e, n));
    },
    p(a, u) {
      u & 1 && ze(n, a[0]);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Oi(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s;
  function w(L, z) {
    return L[2].state === "checking"
      ? vm
      : L[2].state === "ready"
        ? bm
        : L[2].state === "downloading"
          ? _m
          : L[2].state === "error"
            ? gm
            : L[2].state === "blocked"
              ? pm
              : L[2].state === "up-to-date"
                ? mm
                : hm;
  }
  let k = w(l),
    f = k(l),
    M = l[2].state === "blocked" && Ti(l),
    S = l[2].lastChecked && l[2].state !== "blocked" && Ei(l);
  const O = [ym, wm, km],
    P = [];
  function T(L, z) {
    return L[2].state === "ready" ? 0 : L[2].state === "blocked" ? 1 : 2;
  }
  return (
    (m = T(l)),
    (i = P[m] = O[m](l)),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          (u = Z()),
          (r = v("span")),
          f.c(),
          (p = Z()),
          M && M.c(),
          (d = Z()),
          S && S.c(),
          (c = Z()),
          (g = v("div")),
          i.c(),
          o(n, "class", (a = "updater-dot " + l[2].state + " svelte-sos31z")),
          o(r, "class", "updater-status-text svelte-sos31z"),
          o(t, "class", "updater-status-row svelte-sos31z"),
          o(g, "class", "updater-action-wrap svelte-sos31z"),
          o(e, "class", "updater-card svelte-sos31z"));
      },
      m(L, z) {
        (b(L, e, z),
          h(e, t),
          h(t, n),
          h(t, u),
          h(t, r),
          f.m(r, null),
          h(e, p),
          M && M.m(e, null),
          h(e, d),
          S && S.m(e, null),
          h(e, c),
          h(e, g),
          P[m].m(g, null),
          (s = !0));
      },
      p(L, z) {
        ((!s ||
          (z & 4 &&
            a !== (a = "updater-dot " + L[2].state + " svelte-sos31z"))) &&
          o(n, "class", a),
          k === (k = w(L)) && f
            ? f.p(L, z)
            : (f.d(1), (f = k(L)), f && (f.c(), f.m(r, null))),
          L[2].state === "blocked"
            ? M
              ? M.p(L, z)
              : ((M = Ti(L)), M.c(), M.m(e, d))
            : M && (M.d(1), (M = null)),
          L[2].lastChecked && L[2].state !== "blocked"
            ? S
              ? S.p(L, z)
              : ((S = Ei(L)), S.c(), S.m(e, c))
            : S && (S.d(1), (S = null)));
        let F = m;
        ((m = T(L)),
          m === F
            ? P[m].p(L, z)
            : (Ie(),
              V(P[F], 1, 1, () => {
                P[F] = null;
              }),
              Be(),
              (i = P[m]),
              i ? i.p(L, z) : ((i = P[m] = O[m](L)), i.c()),
              C(i, 1),
              i.m(g, null)));
      },
      i(L) {
        s || (C(i), (s = !0));
      },
      o(L) {
        (V(i), (s = !1));
      },
      d(L) {
        (L && _(e), f.d(), M && M.d(), S && S.d(), P[m].d());
      },
    }
  );
}
function hm(l) {
  let e;
  return {
    c() {
      e = K("Updates checked automatically");
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function mm(l) {
  let e;
  return {
    c() {
      e = K("Paperman is fresh & up to date");
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function pm(l) {
  let e;
  return {
    c() {
      e = K("Can't update from this location");
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function gm(l) {
  let e = (l[2].error || "Unable to check for updates") + "",
    t;
  return {
    c() {
      t = K(e);
    },
    m(n, a) {
      b(n, t, a);
    },
    p(n, a) {
      a & 4 &&
        e !== (e = (n[2].error || "Unable to check for updates") + "") &&
        ze(t, e);
    },
    d(n) {
      n && _(t);
    },
  };
}
function _m(l) {
  let e;
  return {
    c() {
      e = K("Downloading & applying update...");
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function bm(l) {
  let e,
    t = l[2].version + "",
    n,
    a;
  return {
    c() {
      ((e = K("v")), (n = K(t)), (a = K(" is ready!")));
    },
    m(u, r) {
      (b(u, e, r), b(u, n, r), b(u, a, r));
    },
    p(u, r) {
      r & 4 && t !== (t = u[2].version + "") && ze(n, t);
    },
    d(u) {
      u && (_(e), _(n), _(a));
    },
  };
}
function vm(l) {
  let e;
  return {
    c() {
      e = K("Looking for fresh paper...");
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ti(l) {
  let e,
    t = (l[4][l[2].blocker ?? "read-only"] ?? l[4]["read-only"]) + "",
    n;
  return {
    c() {
      ((e = v("p")),
        (n = K(t)),
        o(e, "class", "updater-blocked-help svelte-sos31z"));
    },
    m(a, u) {
      (b(a, e, u), h(e, n));
    },
    p(a, u) {
      u & 4 &&
        t !==
          (t = (a[4][a[2].blocker ?? "read-only"] ?? a[4]["read-only"]) + "") &&
        ze(n, t);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Ei(l) {
  let e,
    t,
    n =
      l[2].lastChecked.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) + "",
    a;
  return {
    c() {
      ((e = v("span")),
        (t = K("Last checked ")),
        (a = K(n)),
        o(e, "class", "updater-last-checked svelte-sos31z"));
    },
    m(u, r) {
      (b(u, e, r), h(e, t), h(e, a));
    },
    p(u, r) {
      r & 4 &&
        n !==
          (n =
            u[2].lastChecked.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }) + "") &&
        ze(a, n);
    },
    d(u) {
      u && _(e);
    },
  };
}
function km(l) {
  let e,
    t,
    n,
    a = l[2].state === "checking" ? "Checking..." : "Check for updates",
    u,
    r,
    p,
    d,
    c;
  return (
    (t = new Pn({
      props: { size: 13, class: l[2].state === "checking" ? "spin" : "" },
    })),
    {
      c() {
        ((e = v("button")),
          j(t.$$.fragment),
          (n = Z()),
          (u = K(a)),
          o(e, "type", "button"),
          o(e, "class", "updater-btn svelte-sos31z"),
          (e.disabled = r =
            l[2].state === "checking" || l[2].state === "downloading"));
      },
      m(g, m) {
        (b(g, e, m),
          B(t, e, null),
          h(e, n),
          h(e, u),
          (p = !0),
          d || ((c = W(e, "click", l[5])), (d = !0)));
      },
      p(g, m) {
        const i = {};
        (m & 4 && (i.class = g[2].state === "checking" ? "spin" : ""),
          t.$set(i),
          (!p || m & 4) &&
            a !==
              (a =
                g[2].state === "checking"
                  ? "Checking..."
                  : "Check for updates") &&
            ze(u, a),
          (!p ||
            (m & 4 &&
              r !==
                (r =
                  g[2].state === "checking" ||
                  g[2].state === "downloading"))) &&
            (e.disabled = r));
      },
      i(g) {
        p || (C(t.$$.fragment, g), (p = !0));
      },
      o(g) {
        (V(t.$$.fragment, g), (p = !1));
      },
      d(g) {
        (g && _(e), q(t), (d = !1), c());
      },
    }
  );
}
function wm(l) {
  let e, t, n, a, u, r;
  return (
    (t = new U4({ props: { size: 13 } })),
    {
      c() {
        ((e = v("button")),
          j(t.$$.fragment),
          (n = K(`\r\n            Reveal in Finder`)),
          o(e, "type", "button"),
          o(e, "class", "updater-btn svelte-sos31z"));
      },
      m(p, d) {
        (b(p, e, d),
          B(t, e, null),
          h(e, n),
          (a = !0),
          u || ((r = W(e, "click", Kh)), (u = !0)));
      },
      p: A,
      i(p) {
        a || (C(t.$$.fragment, p), (a = !0));
      },
      o(p) {
        (V(t.$$.fragment, p), (a = !1));
      },
      d(p) {
        (p && _(e), q(t), (u = !1), r());
      },
    }
  );
}
function ym(l) {
  let e,
    t,
    n,
    a = l[2].version + "",
    u,
    r,
    p,
    d,
    c;
  return (
    (t = new u5({ props: { size: 13, weight: "fill" } })),
    {
      c() {
        ((e = v("button")),
          j(t.$$.fragment),
          (n = K(`\r\n            Update & Rerender (v`)),
          (u = K(a)),
          (r = K(")")),
          o(e, "type", "button"),
          o(e, "class", "updater-btn update-ready-btn svelte-sos31z"));
      },
      m(g, m) {
        (b(g, e, m),
          B(t, e, null),
          h(e, n),
          h(e, u),
          h(e, r),
          (p = !0),
          d || ((c = W(e, "click", Jr)), (d = !0)));
      },
      p(g, m) {
        (!p || m & 4) && a !== (a = g[2].version + "") && ze(u, a);
      },
      i(g) {
        p || (C(t.$$.fragment, g), (p = !0));
      },
      o(g) {
        (V(t.$$.fragment, g), (p = !1));
      },
      d(g) {
        (g && _(e), q(t), (d = !1), c());
      },
    }
  );
}
function Am(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J = l[0] && Pi(l),
    se = !l[1] && Oi(l);
  return (
    (O = new ou({ props: { size: 14 } })),
    (z = new h3({ props: { size: 14 } })),
    (N = new Bl({ props: { size: 14 } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("img")),
          (u = Z()),
          (r = v("h1")),
          (r.innerHTML =
            'Your screen, <em class="svelte-sos31z">softened.</em>'),
          (p = Z()),
          (d = v("p")),
          (d.textContent = `A digital matte surface for your screen, rendered by a texture engine\r\n      designed to enhance visual ergonomics with contrast attenuation and\r\n      natural grain.`),
          (c = Z()),
          J && J.c(),
          (g = Z()),
          se && se.c(),
          (m = Z()),
          (i = v("div")),
          (s = v("button")),
          (s.innerHTML =
            '<span class="studio-label svelte-sos31z">Brought to you by</span> <div class="studio-logo-container svelte-sos31z"><img src="/doublone-studios-logo.png" alt="DoublOne Studios" class="studio-logo svelte-sos31z"/></div>'),
          (w = Z()),
          (k = v("span")),
          (k.textContent = "Designed with care in Finland 🇫🇮"),
          (f = Z()),
          (M = v("div")),
          (S = v("button")),
          j(O.$$.fragment),
          (P = K(" Website")),
          (T = Z()),
          (L = v("button")),
          j(z.$$.fragment),
          (F = K(" Press")),
          (E = Z()),
          (D = v("button")),
          j(N.$$.fragment),
          (ne = K(" Privacy")),
          _0(n.src, (a = "/dark.svg")) || o(n, "src", a),
          o(n, "alt", "Paperman"),
          o(n, "class", "about-logo svelte-sos31z"),
          o(r, "class", "about-tagline svelte-sos31z"),
          o(d, "class", "about-description svelte-sos31z"),
          o(t, "class", "about-hero svelte-sos31z"),
          o(s, "type", "button"),
          o(s, "class", "studio-card svelte-sos31z"),
          o(i, "class", "about-studio-area svelte-sos31z"),
          o(k, "class", "about-origin svelte-sos31z"),
          o(S, "class", "about-link-item svelte-sos31z"),
          o(L, "class", "about-link-item svelte-sos31z"),
          o(D, "class", "about-link-item svelte-sos31z"),
          o(M, "class", "about-links-grid svelte-sos31z"),
          o(e, "class", "about-section-premium svelte-sos31z"));
      },
      m(te, ge) {
        (b(te, e, ge),
          h(e, t),
          h(t, n),
          h(t, u),
          h(t, r),
          h(t, p),
          h(t, d),
          h(t, c),
          J && J.m(t, null),
          h(e, g),
          se && se.m(e, null),
          h(e, m),
          h(e, i),
          h(i, s),
          h(e, w),
          h(e, k),
          h(e, f),
          h(e, M),
          h(M, S),
          B(O, S, null),
          h(S, P),
          h(M, T),
          h(M, L),
          B(z, L, null),
          h(L, F),
          h(M, E),
          h(M, D),
          B(N, D, null),
          h(D, ne),
          (Q = !0),
          X ||
            ((ae = [
              W(s, "click", l[6]),
              W(S, "click", l[7]),
              W(L, "click", l[8]),
              W(D, "click", l[9]),
            ]),
            (X = !0)));
      },
      p(te, [ge]) {
        (te[0]
          ? J
            ? J.p(te, ge)
            : ((J = Pi(te)), J.c(), J.m(t, null))
          : J && (J.d(1), (J = null)),
          te[1]
            ? se &&
              (Ie(),
              V(se, 1, 1, () => {
                se = null;
              }),
              Be())
            : se
              ? (se.p(te, ge), ge & 2 && C(se, 1))
              : ((se = Oi(te)), se.c(), C(se, 1), se.m(e, m)));
      },
      i(te) {
        Q ||
          (C(se),
          C(O.$$.fragment, te),
          C(z.$$.fragment, te),
          C(N.$$.fragment, te),
          (Q = !0));
      },
      o(te) {
        (V(se),
          V(O.$$.fragment, te),
          V(z.$$.fragment, te),
          V(N.$$.fragment, te),
          (Q = !1));
      },
      d(te) {
        (te && _(e),
          J && J.d(),
          se && se.d(),
          q(O),
          q(z),
          q(N),
          (X = !1),
          at(ae));
      },
    }
  );
}
function Mm(l, e, t) {
  let n;
  gn(l, r1, (s) => t(2, (n = s)));
  let { appVersion: a = "" } = e,
    { isSetapp: u = !1 } = e;
  const r = (s) => {
      e1(s);
    },
    p = {
      dmg: "Paperman is running from the disk image. Quit Paperman, drag it into your Applications folder, eject the Paperman disk, then open it from Applications.",
      translocated:
        "macOS is running Paperman from a temporary read-only copy, because it was opened without being moved to Applications first. Quit Paperman, drag the app (or the disk image you downloaded) into your Applications folder, then open it from there.",
      "read-only":
        "Paperman is installed somewhere it isn't allowed to update itself. Quit Paperman, move it into your Applications folder, then open it from there.",
    },
    d = () => Cn(!1),
    c = () => r("https://doubl.one"),
    g = () => r("https://paperman.cc"),
    m = () => r("https://doubl.one/press"),
    i = () => r("https://paperman.cc/privacy");
  return (
    (l.$$set = (s) => {
      ("appVersion" in s && t(0, (a = s.appVersion)),
        "isSetapp" in s && t(1, (u = s.isSetapp)));
    }),
    [a, u, n, r, p, d, c, g, m, i]
  );
}
class Zm extends Me {
  constructor(e) {
    (super(), Ae(this, e, Mm, Am, ve, { appVersion: 0, isSetapp: 1 }));
  }
}
const Hm = (l) => ({}),
  Di = (l) => ({});
function Cm(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c =
      (l[3] === l[1]
        ? l[4].length > 0
          ? l[4].join(" + ")
          : "Press keys..."
        : l[8](l[2]) || "Press keys...") + "",
    g,
    m,
    i,
    s;
  const w = l[11].extra,
    k = Ge(w, l, l[10], Di);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        (a = K(l[0])),
        (u = Z()),
        k && k.c(),
        (r = Z()),
        (p = v("div")),
        (d = v("button")),
        (g = K(c)),
        o(n, "class", "toggle-label"),
        o(t, "class", "shortcut-label-wrapper"),
        o(d, "class", "shortcut-button"),
        o(p, "class", "shortcut-controls"),
        o(e, "class", "toggle-option"));
    },
    m(f, M) {
      (b(f, e, M),
        h(e, t),
        h(t, n),
        h(n, a),
        h(t, u),
        k && k.m(t, null),
        h(e, r),
        h(e, p),
        h(p, d),
        h(d, g),
        (m = !0),
        i || ((s = W(d, "click", l[12])), (i = !0)));
    },
    p(f, [M]) {
      ((!m || M & 1) && ze(a, f[0]),
        k &&
          k.p &&
          (!m || M & 1024) &&
          Qe(k, w, f, f[10], m ? Ye(w, f[10], M, Hm) : Je(f[10]), Di),
        (!m || M & 30) &&
          c !==
            (c =
              (f[3] === f[1]
                ? f[4].length > 0
                  ? f[4].join(" + ")
                  : "Press keys..."
                : f[8](f[2]) || "Press keys...") + "") &&
          ze(g, c));
    },
    i(f) {
      m || (C(k, f), (m = !0));
    },
    o(f) {
      (V(k, f), (m = !1));
    },
    d(f) {
      (f && _(e), k && k.d(f), (i = !1), s());
    },
  };
}
function Lm(l, e, t) {
  let { $$slots: n = {}, $$scope: a } = e,
    { label: u } = e,
    { target: r } = e,
    { shortcut: p } = e,
    { recordingShortcut: d } = e,
    { recordedKeys: c } = e,
    { platform: g } = e,
    { onRecord: m } = e,
    { onStop: i } = e,
    { onClear: s } = e;
  function w(f) {
    const M = [];
    (f.ctrlKey && M.push("Ctrl"),
      f.metaKey && M.push(g === "macos" ? "⌘" : "Win"),
      f.shiftKey && M.push("Shift"),
      f.altKey && M.push("Alt"));
    const O =
      {
        KeyA: "A",
        KeyB: "B",
        KeyC: "C",
        KeyD: "D",
        KeyE: "E",
        KeyF: "F",
        KeyG: "G",
        KeyH: "H",
        KeyI: "I",
        KeyJ: "J",
        KeyK: "K",
        KeyL: "L",
        KeyM: "M",
        KeyN: "N",
        KeyO: "O",
        KeyP: "P",
        KeyQ: "Q",
        KeyR: "R",
        KeyS: "S",
        KeyT: "T",
        KeyU: "U",
        KeyV: "V",
        KeyW: "W",
        KeyX: "X",
        KeyY: "Y",
        KeyZ: "Z",
        ArrowUp: "↑",
        ArrowDown: "↓",
        ArrowLeft: "←",
        ArrowRight: "→",
        BracketLeft: "[",
        BracketRight: "]",
        Backslash: "\\",
        Slash: "/",
        Semicolon: ";",
        Quote: "'",
        Backquote: "`",
        Comma: ",",
        Period: ".",
        Minus: "-",
        Equal: "=",
      }[f.code] || f.code;
    return (O && M.push(O), M.join(" + "));
  }
  const k = () => {
    d === r ? (c.length === 0 && p.code ? s() : i()) : m();
  };
  return (
    (l.$$set = (f) => {
      ("label" in f && t(0, (u = f.label)),
        "target" in f && t(1, (r = f.target)),
        "shortcut" in f && t(2, (p = f.shortcut)),
        "recordingShortcut" in f && t(3, (d = f.recordingShortcut)),
        "recordedKeys" in f && t(4, (c = f.recordedKeys)),
        "platform" in f && t(9, (g = f.platform)),
        "onRecord" in f && t(5, (m = f.onRecord)),
        "onStop" in f && t(6, (i = f.onStop)),
        "onClear" in f && t(7, (s = f.onClear)),
        "$$scope" in f && t(10, (a = f.$$scope)));
    }),
    [u, r, p, d, c, m, i, s, w, g, a, n, k]
  );
}
class m0 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Lm, Cm, ve, {
        label: 0,
        target: 1,
        shortcut: 2,
        recordingShortcut: 3,
        recordedKeys: 4,
        platform: 9,
        onRecord: 5,
        onStop: 6,
        onClear: 7,
      }));
  }
}
const Vm = 0.2,
  Sm = 0.7,
  zm = 0.6,
  Pm = 0.4,
  Om = 0.1,
  Tm = 0.2,
  Em = 0.5,
  Dm = 0.34,
  Fm = 0.32,
  Wm = 0.2,
  Rm = 0.7,
  Km = 0.6,
  Nm = 0.35,
  Um = 0.1,
  Im = 0.16,
  Bm = 0.25,
  qm = 0.28,
  jm = 0.25,
  Xm = !0,
  Gm = !1,
  Ym = "09:00",
  Qm = "17:00",
  Jm = [],
  xm = "exclude",
  $m = !0,
  e7 = !1,
  t7 = "06:00",
  l7 = "18:00",
  n7 = "light",
  i7 = !1,
  a7 = "auto",
  r7 = { ctrlKey: !1, shiftKey: !1, altKey: !0, metaKey: !0, code: "KeyP" },
  o7 = { ctrlKey: !1, shiftKey: !1, altKey: !0, metaKey: !0, code: "KeyI" },
  s7 = {
    ctrlKey: !1,
    shiftKey: !1,
    altKey: !0,
    metaKey: !0,
    code: "BracketRight",
  },
  c7 = {
    ctrlKey: !1,
    shiftKey: !1,
    altKey: !0,
    metaKey: !0,
    code: "BracketLeft",
  },
  u7 = {
    ctrlKey: !1,
    shiftKey: !1,
    altKey: !0,
    metaKey: !0,
    code: "Backslash",
  },
  f7 = { ctrlKey: !1, shiftKey: !1, altKey: !0, metaKey: !0, code: "KeyT" },
  d7 = { ctrlKey: !1, shiftKey: !1, altKey: !0, metaKey: !0, code: "KeyO" },
  h7 = 5,
  m7 = !0,
  p7 = !0,
  g7 = !1,
  _7 = !0,
  b7 = !0,
  v7 = "never",
  k7 = "protection",
  w7 = !0,
  y7 = "random",
  A7 = "ink-blots",
  M7 = null,
  Z7 = "classic-matte",
  H7 = "whisper-weave",
  C7 = "classic-matte",
  L7 = ["classic-matte", "whisper-weave", "painter-press"],
  U = {
    lightClassicMatteOpacity: Vm,
    lightWhisperWeaveOpacity: Sm,
    lightSunbakedParchmentOpacity: zm,
    lightSaddleLinenOpacity: Pm,
    lightPainterPressOpacity: Om,
    lightMulberryVeilOpacity: Tm,
    lightVellumMistOpacity: Em,
    lightMonasticFeltOpacity: Dm,
    lightCarbonLedgerOpacity: Fm,
    darkClassicMatteOpacity: Wm,
    darkWhisperWeaveOpacity: Rm,
    darkSunbakedParchmentOpacity: Km,
    darkSaddleLinenOpacity: Nm,
    darkPainterPressOpacity: Um,
    darkMulberryVeilOpacity: Im,
    darkVellumMistOpacity: Bm,
    darkMonasticFeltOpacity: qm,
    darkCarbonLedgerOpacity: jm,
    alwaysOn: Xm,
    scheduleEnabled: Gm,
    startTime: Ym,
    endTime: Qm,
    excludedApps: Jm,
    exceptionsMode: xm,
    autoStartEnabled: $m,
    themeScheduleEnabled: e7,
    lightThemeStartTime: t7,
    darkThemeStartTime: l7,
    currentTheme: n7,
    confirmThemeSwitch: i7,
    appearanceMode: a7,
    toggleShortcut: r7,
    intensityShortcut: o7,
    intensityUpShortcut: s7,
    intensityDownShortcut: c7,
    snoozeShortcut: u7,
    nextTextureShortcut: f7,
    deskLampShortcut: d7,
    snoozeShortcutDuration: h7,
    hotkeysEnabled: m7,
    soundEnabled: p7,
    hideFromScreenshots: g7,
    keepMenuBarClear: _7,
    keepMenuBarClearOnlyFullscreen: b7,
    batteryBehavior: v7,
    currentSettingsTab: k7,
    animationsEnabled: w7,
    animationDirection: y7,
    randomRevealStyle: A7,
    selectedMonitorIndexes: M7,
    texture: Z7,
    lightTexture: H7,
    darkTexture: C7,
    pinnedTextures: L7,
  },
  V7 = [
    {
      id: "classic-matte",
      enabled: !0,
      name: "Classic Matte",
      lines: ["Classic", "Matte"],
      icon: "/icons/texture-classic-matte.svg",
    },
    {
      id: "whisper-weave",
      enabled: !0,
      name: "Whisper Weave",
      lines: ["Whisper", "Weave"],
      icon: "/icons/texture-whisper-weave.svg",
    },
    {
      id: "sunbaked-parchment",
      enabled: !0,
      name: "Sunbaked Parchment",
      lines: ["Sunbaked", "Parchment"],
      icon: "/icons/texture-sunbaked-parchment.svg",
    },
    {
      id: "saddle-linen",
      enabled: !0,
      name: "Saddle Linen",
      lines: ["Saddle", "Linen"],
      icon: "/icons/texture-saddle-linen.svg",
    },
    {
      id: "painter-press",
      enabled: !0,
      name: "Painter's Press",
      lines: ["Painter's", "Press"],
      icon: "/icons/texture-painter-press.svg",
    },
    {
      id: "mulberry-veil",
      enabled: !0,
      name: "Mulberry Veil",
      lines: ["Mulberry", "Veil"],
      icon: "/icons/texture-mulberry-veil.svg",
      new: !0,
    },
    {
      id: "vellum-mist",
      enabled: !0,
      name: "Vellum Mist",
      lines: ["Vellum", "Mist"],
      icon: "/icons/texture-vellum-mist.svg",
      new: !0,
    },
    {
      id: "monastic-felt",
      enabled: !1,
      name: "Monastic Felt",
      lines: ["Monastic", "Felt"],
      icon: "/icons/texture-monastic-felt.svg",
      new: !0,
    },
    {
      id: "carbon-ledger",
      enabled: !1,
      name: "Carbon Ledger",
      lines: ["Carbon", "Ledger"],
      icon: "/icons/texture-carbon-ledger.svg",
      new: !0,
    },
  ],
  Ol = V7,
  Kn = Ol.filter((l) => l.enabled).map((l) => l.id),
  S0 = Object.fromEntries(Ol.map((l) => [l.id, l])),
  D0 = 4,
  Tl = U.pinnedTextures ?? [];
function El(l) {
  return Kn.includes(l);
}
function Fi(l) {
  const e = Array.isArray(l) ? l : Tl,
    t = new Set(),
    n = [];
  for (const a of e)
    if (
      typeof a == "string" &&
      El(a) &&
      !t.has(a) &&
      (t.add(a), n.push(a), n.length >= D0)
    )
      break;
  return n.length === 0 ? Tl.filter(El).slice(0, D0) : n;
}
function s1(l) {
  return El(l) ? l : (Kn[0] ?? l);
}
function Vl(l, e = "other") {
  return l === "whisper-weave"
    ? e === "macos"
      ? { min: 0.05, max: 0.4 }
      : { min: 0.25, max: 0.8 }
    : l === "sunbaked-parchment"
      ? e === "macos"
        ? { min: 0.05, max: 0.4 }
        : { min: 0.05, max: 0.6 }
      : l === "saddle-linen"
        ? e === "macos"
          ? { min: 0.05, max: 0.4 }
          : { min: 0.05, max: 0.6 }
        : l === "painter-press"
          ? e === "macos"
            ? { min: 0.05, max: 0.4 }
            : { min: 0.05, max: 0.5 }
          : l === "mulberry-veil"
            ? e === "macos"
              ? { min: 0.05, max: 0.4 }
              : { min: 0.05, max: 0.5 }
            : l === "vellum-mist"
              ? e === "macos"
                ? { min: 0.05, max: 0.4 }
                : { min: 0.05, max: 0.6 }
              : l === "monastic-felt"
                ? e === "macos"
                  ? { min: 0.05, max: 0.4 }
                  : { min: 0.05, max: 0.5 }
                : l === "carbon-ledger"
                  ? e === "macos"
                    ? { min: 0.05, max: 0.4 }
                    : { min: 0.05, max: 0.5 }
                  : { min: 0.05, max: 0.4 };
}
function Xt(l, e, t = "other") {
  const { min: n, max: a } = Vl(l, t);
  return Math.min(a, Math.max(n, e));
}
function to(l, e, t = "other", n = "light") {
  return t === "macos" && l === "saddle-linen"
    ? Math.min(1, e * (n === "dark" ? 2.5 : 2))
    : t === "macos" && l === "vellum-mist"
      ? Math.min(1, e * 2)
      : e;
}
function lo(l, e = "other") {
  const t = l ?? {},
    n = t.lightTexture ?? t.texture ?? U.lightTexture,
    a = t.darkTexture ?? t.texture ?? U.darkTexture,
    u =
      t.whisperWeaveOpacity ??
      (e === "macos" ? 0.2 : U.lightWhisperWeaveOpacity),
    r = t.classicMatteOpacity ?? U.lightClassicMatteOpacity,
    p = t.sunbakedParchmentOpacity ?? U.lightSunbakedParchmentOpacity,
    d = t.saddleLinenOpacity ?? U.lightSaddleLinenOpacity,
    c = t.painterPressOpacity ?? U.lightPainterPressOpacity,
    g = t.mulberryVeilOpacity ?? U.lightMulberryVeilOpacity,
    m = t.vellumMistOpacity ?? U.lightVellumMistOpacity,
    i = t.monasticFeltOpacity ?? U.lightMonasticFeltOpacity,
    s = t.carbonLedgerOpacity ?? U.lightCarbonLedgerOpacity,
    w = (f) =>
      f === "whisper-weave"
        ? u
        : f === "sunbaked-parchment"
          ? p
          : f === "saddle-linen"
            ? d
            : f === "painter-press"
              ? c
              : f === "mulberry-veil"
                ? g
                : f === "vellum-mist"
                  ? m
                  : f === "monastic-felt"
                    ? i
                    : f === "carbon-ledger"
                      ? s
                      : r,
    k = {
      lightClassicMatteOpacity:
        t.lightClassicMatteOpacity ??
        (t.lightOpacity != null && n === "classic-matte"
          ? t.lightOpacity
          : w("classic-matte")),
      lightWhisperWeaveOpacity:
        t.lightWhisperWeaveOpacity ??
        (t.lightOpacity != null && n === "whisper-weave"
          ? t.lightOpacity
          : w("whisper-weave")),
      lightSunbakedParchmentOpacity:
        t.lightSunbakedParchmentOpacity ??
        (t.lightOpacity != null && n === "sunbaked-parchment"
          ? t.lightOpacity
          : w("sunbaked-parchment")),
      lightSaddleLinenOpacity:
        t.lightSaddleLinenOpacity ??
        (t.lightOpacity != null && n === "saddle-linen"
          ? t.lightOpacity
          : w("saddle-linen")),
      lightPainterPressOpacity:
        t.lightPainterPressOpacity ??
        (t.lightOpacity != null && n === "painter-press"
          ? t.lightOpacity
          : w("painter-press")),
      lightMulberryVeilOpacity:
        t.lightMulberryVeilOpacity ??
        (t.lightOpacity != null && n === "mulberry-veil"
          ? t.lightOpacity
          : w("mulberry-veil")),
      lightVellumMistOpacity:
        t.lightVellumMistOpacity ??
        (t.lightOpacity != null && n === "vellum-mist"
          ? t.lightOpacity
          : w("vellum-mist")),
      lightMonasticFeltOpacity:
        t.lightMonasticFeltOpacity ??
        (t.lightOpacity != null && n === "monastic-felt"
          ? t.lightOpacity
          : w("monastic-felt")),
      lightCarbonLedgerOpacity:
        t.lightCarbonLedgerOpacity ??
        (t.lightOpacity != null && n === "carbon-ledger"
          ? t.lightOpacity
          : w("carbon-ledger")),
      darkClassicMatteOpacity:
        t.darkClassicMatteOpacity ??
        (t.darkOpacity != null && a === "classic-matte"
          ? t.darkOpacity
          : w("classic-matte")),
      darkWhisperWeaveOpacity:
        t.darkWhisperWeaveOpacity ??
        (t.darkOpacity != null && a === "whisper-weave"
          ? t.darkOpacity
          : w("whisper-weave")),
      darkSunbakedParchmentOpacity:
        t.darkSunbakedParchmentOpacity ??
        (t.darkOpacity != null && a === "sunbaked-parchment"
          ? t.darkOpacity
          : w("sunbaked-parchment")),
      darkSaddleLinenOpacity:
        t.darkSaddleLinenOpacity ??
        (t.darkOpacity != null && a === "saddle-linen"
          ? t.darkOpacity
          : w("saddle-linen")),
      darkPainterPressOpacity:
        t.darkPainterPressOpacity ??
        (t.darkOpacity != null && a === "painter-press"
          ? t.darkOpacity
          : (t.painterPressOpacity ?? U.darkPainterPressOpacity)),
      darkMulberryVeilOpacity:
        t.darkMulberryVeilOpacity ??
        (t.darkOpacity != null && a === "mulberry-veil"
          ? t.darkOpacity
          : (t.mulberryVeilOpacity ?? U.darkMulberryVeilOpacity)),
      darkVellumMistOpacity:
        t.darkVellumMistOpacity ??
        (t.darkOpacity != null && a === "vellum-mist"
          ? t.darkOpacity
          : (t.vellumMistOpacity ?? U.darkVellumMistOpacity)),
      darkMonasticFeltOpacity:
        t.darkMonasticFeltOpacity ??
        (t.darkOpacity != null && a === "monastic-felt"
          ? t.darkOpacity
          : (t.monasticFeltOpacity ?? U.darkMonasticFeltOpacity)),
      darkCarbonLedgerOpacity:
        t.darkCarbonLedgerOpacity ??
        (t.darkOpacity != null && a === "carbon-ledger"
          ? t.darkOpacity
          : (t.carbonLedgerOpacity ?? U.darkCarbonLedgerOpacity)),
      lightTexture: s1(n),
      darkTexture: s1(a),
    };
  return (
    (k.lightClassicMatteOpacity = Xt(
      "classic-matte",
      k.lightClassicMatteOpacity,
      e,
    )),
    (k.lightWhisperWeaveOpacity = Xt(
      "whisper-weave",
      k.lightWhisperWeaveOpacity,
      e,
    )),
    (k.lightSunbakedParchmentOpacity = Xt(
      "sunbaked-parchment",
      k.lightSunbakedParchmentOpacity,
      e,
    )),
    (k.lightSaddleLinenOpacity = Xt(
      "saddle-linen",
      k.lightSaddleLinenOpacity,
      e,
    )),
    (k.darkClassicMatteOpacity = Xt(
      "classic-matte",
      k.darkClassicMatteOpacity,
      e,
    )),
    (k.darkWhisperWeaveOpacity = Xt(
      "whisper-weave",
      k.darkWhisperWeaveOpacity,
      e,
    )),
    (k.darkSunbakedParchmentOpacity = Xt(
      "sunbaked-parchment",
      k.darkSunbakedParchmentOpacity,
      e,
    )),
    (k.darkSaddleLinenOpacity = Xt(
      "saddle-linen",
      k.darkSaddleLinenOpacity,
      e,
    )),
    (k.lightPainterPressOpacity = Xt(
      "painter-press",
      k.lightPainterPressOpacity,
      e,
    )),
    (k.darkPainterPressOpacity = Xt(
      "painter-press",
      k.darkPainterPressOpacity,
      e,
    )),
    (k.lightMulberryVeilOpacity = Xt(
      "mulberry-veil",
      k.lightMulberryVeilOpacity,
      e,
    )),
    (k.darkMulberryVeilOpacity = Xt(
      "mulberry-veil",
      k.darkMulberryVeilOpacity,
      e,
    )),
    (k.lightVellumMistOpacity = Xt("vellum-mist", k.lightVellumMistOpacity, e)),
    (k.darkVellumMistOpacity = Xt("vellum-mist", k.darkVellumMistOpacity, e)),
    (k.lightMonasticFeltOpacity = Xt(
      "monastic-felt",
      k.lightMonasticFeltOpacity,
      e,
    )),
    (k.darkMonasticFeltOpacity = Xt(
      "monastic-felt",
      k.darkMonasticFeltOpacity,
      e,
    )),
    (k.lightCarbonLedgerOpacity = Xt(
      "carbon-ledger",
      k.lightCarbonLedgerOpacity,
      e,
    )),
    (k.darkCarbonLedgerOpacity = Xt(
      "carbon-ledger",
      k.darkCarbonLedgerOpacity,
      e,
    )),
    k
  );
}
function S7(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c = l[2] ? "PM" : "AM",
    g,
    m,
    i;
  return {
    c() {
      ((e = v("div")),
        (t = v("input")),
        (n = Z()),
        (a = v("span")),
        (a.textContent = ":"),
        (u = Z()),
        (r = v("input")),
        (p = Z()),
        (d = v("button")),
        (g = K(c)),
        o(t, "class", "seg svelte-3wgwq9"),
        o(t, "type", "text"),
        o(t, "inputmode", "numeric"),
        (t.value = l[4]),
        o(t, "maxlength", "2"),
        (t.disabled = l[1]),
        o(a, "class", "colon svelte-3wgwq9"),
        o(r, "class", "seg svelte-3wgwq9"),
        o(r, "type", "text"),
        o(r, "inputmode", "numeric"),
        (r.value = l[3]),
        o(r, "maxlength", "2"),
        (r.disabled = l[1]),
        o(d, "class", "ampm svelte-3wgwq9"),
        o(d, "type", "button"),
        (d.disabled = l[1]),
        o(e, "class", "time-picker svelte-3wgwq9"),
        o(e, "id", l[0]),
        Nt(e, "disabled", l[1]));
    },
    m(s, w) {
      (b(s, e, w),
        h(e, t),
        h(e, n),
        h(e, a),
        h(e, u),
        h(e, r),
        h(e, p),
        h(e, d),
        h(d, g),
        m ||
          ((i = [
            W(t, "blur", l[5]),
            W(t, "keydown", l[7]),
            W(t, "focus", Wi),
            W(r, "blur", l[6]),
            W(r, "keydown", l[8]),
            W(r, "focus", Wi),
            W(d, "click", l[9]),
          ]),
          (m = !0)));
    },
    p(s, [w]) {
      (w & 16 && t.value !== s[4] && (t.value = s[4]),
        w & 2 && (t.disabled = s[1]),
        w & 8 && r.value !== s[3] && (r.value = s[3]),
        w & 2 && (r.disabled = s[1]),
        w & 4 && c !== (c = s[2] ? "PM" : "AM") && ze(g, c),
        w & 2 && (d.disabled = s[1]),
        w & 1 && o(e, "id", s[0]),
        w & 2 && Nt(e, "disabled", s[1]));
    },
    i: A,
    o: A,
    d(s) {
      (s && _(e), (m = !1), at(i));
    },
  };
}
function Wi(l) {
  l.target.select();
}
function z7(l, e, t) {
  let n,
    a,
    { value: u = "09:00" } = e,
    { id: r = "" } = e,
    { disabled: p = !1 } = e;
  const d = x0();
  let c,
    g,
    m,
    i = "";
  function s() {
    const P = m ? (c === 12 ? 12 : c + 12) : c === 12 ? 0 : c;
    return `${String(P).padStart(2, "0")}:${String(g).padStart(2, "0")}`;
  }
  function w() {
    const P = s();
    (t(13, (i = P)), t(10, (u = P)), d("change"));
  }
  function k(P) {
    let T = parseInt(P.target.value);
    ((isNaN(T) || T < 1) && (T = 1), T > 12 && (T = 12), t(11, (c = T)), w());
  }
  function f(P) {
    let T = parseInt(P.target.value);
    ((isNaN(T) || T < 0) && (T = 0), T > 59 && (T = 59), t(12, (g = T)), w());
  }
  function M(P) {
    (P.key === "Enter" && P.target.blur(),
      P.key === "ArrowUp" && (t(11, (c = c >= 12 ? 1 : c + 1)), w()),
      P.key === "ArrowDown" && (t(11, (c = c <= 1 ? 12 : c - 1)), w()));
  }
  function S(P) {
    (P.key === "Enter" && P.target.blur(),
      P.key === "ArrowUp" && (t(12, (g = g >= 59 ? 0 : g + 1)), w()),
      P.key === "ArrowDown" && (t(12, (g = g <= 0 ? 59 : g - 1)), w()));
  }
  function O() {
    (t(2, (m = !m)), w());
  }
  return (
    (l.$$set = (P) => {
      ("value" in P && t(10, (u = P.value)),
        "id" in P && t(0, (r = P.id)),
        "disabled" in P && t(1, (p = P.disabled)));
    }),
    (l.$$.update = () => {
      if (l.$$.dirty & 9216 && u !== i) {
        t(13, (i = u));
        const [P, T] = (u || "09:00").split(":").map(Number);
        (t(2, (m = P >= 12)), t(11, (c = P % 12 || 12)), t(12, (g = T)));
      }
      (l.$$.dirty & 2048 && t(4, (n = String(c).padStart(2, "0"))),
        l.$$.dirty & 4096 && t(3, (a = String(g).padStart(2, "0"))));
    }),
    [r, p, m, a, n, k, f, M, S, O, u, c, g, i]
  );
}
class Dl extends Me {
  constructor(e) {
    (super(), Ae(this, e, z7, S7, ve, { value: 10, id: 0, disabled: 1 }));
  }
}
function P7(l) {
  return () => {};
}
async function O7(l) {
  return !1;
}
function Ri(l, e, t) {
  const n = l.slice();
  return ((n[13] = e[t]), n);
}
function Ki(l, e, t) {
  const n = l.slice();
  return ((n[13] = e[t]), n);
}
function T7(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p = Mt(l[5]),
    d = [];
  for (let s = 0; s < p.length; s += 1) d[s] = Ui(Ki(l, p, s));
  let c = Mt(l[1]),
    g = [];
  for (let s = 0; s < c.length; s += 1) g[s] = Ii(Ri(l, c, s));
  let m = l[0] !== null && l[0].length === 0 && Bi(),
    i = l[1].length > 1 && qi(l);
  return {
    c() {
      e = v("div");
      for (let s = 0; s < d.length; s += 1) d[s].c();
      ((t = Z()), (n = v("div")));
      for (let s = 0; s < g.length; s += 1) g[s].c();
      ((a = Z()),
        m && m.c(),
        (u = Z()),
        i && i.c(),
        (r = c1()),
        o(e, "class", "mp-canvas svelte-hjgkih"),
        ce(e, "position", "relative"),
        ce(e, "height", Math.max(0, ...l[5].map(ji)) + "px"),
        ce(e, "width", Math.max(0, ...l[5].map(Xi)) + "px"),
        ce(e, "margin", "0 auto"),
        o(n, "class", "mp-list svelte-hjgkih"));
    },
    m(s, w) {
      b(s, e, w);
      for (let k = 0; k < d.length; k += 1) d[k] && d[k].m(e, null);
      (b(s, t, w), b(s, n, w));
      for (let k = 0; k < g.length; k += 1) g[k] && g[k].m(n, null);
      (b(s, a, w), m && m.m(s, w), b(s, u, w), i && i.m(s, w), b(s, r, w));
    },
    p(s, w) {
      if (w & 179) {
        p = Mt(s[5]);
        let k;
        for (k = 0; k < p.length; k += 1) {
          const f = Ki(s, p, k);
          d[k] ? d[k].p(f, w) : ((d[k] = Ui(f)), d[k].c(), d[k].m(e, null));
        }
        for (; k < d.length; k += 1) d[k].d(1);
        d.length = p.length;
      }
      if (
        (w & 32 && ce(e, "height", Math.max(0, ...s[5].map(ji)) + "px"),
        w & 32 && ce(e, "width", Math.max(0, ...s[5].map(Xi)) + "px"),
        w & 147)
      ) {
        c = Mt(s[1]);
        let k;
        for (k = 0; k < c.length; k += 1) {
          const f = Ri(s, c, k);
          g[k] ? g[k].p(f, w) : ((g[k] = Ii(f)), g[k].c(), g[k].m(n, null));
        }
        for (; k < g.length; k += 1) g[k].d(1);
        g.length = c.length;
      }
      (s[0] !== null && s[0].length === 0
        ? m || ((m = Bi()), m.c(), m.m(u.parentNode, u))
        : m && (m.d(1), (m = null)),
        s[1].length > 1
          ? i
            ? i.p(s, w)
            : ((i = qi(s)), i.c(), i.m(r.parentNode, r))
          : i && (i.d(1), (i = null)));
    },
    d(s) {
      (s && (_(e), _(t), _(n), _(a), _(u), _(r)),
        D1(d, s),
        D1(g, s),
        m && m.d(s),
        i && i.d(s));
    },
  };
}
function E7(l) {
  let e, t;
  return {
    c() {
      ((e = v("p")), (t = K(l[3])), o(e, "class", "mp-hint svelte-hjgkih"));
    },
    m(n, a) {
      (b(n, e, a), h(e, t));
    },
    p(n, a) {
      a & 8 && ze(t, n[3]);
    },
    d(n) {
      n && _(e);
    },
  };
}
function D7(l) {
  let e;
  return {
    c() {
      ((e = v("p")),
        (e.textContent = "Detecting monitors…"),
        o(e, "class", "mp-hint svelte-hjgkih"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Ni(l) {
  let e;
  return {
    c() {
      ((e = v("span")), o(e, "class", "mp-primary-dot svelte-hjgkih"));
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Ui(l) {
  let e,
    t,
    n = l[13].index + 1 + "",
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m = l[13].is_primary && Ni();
  function i() {
    return l[9](l[13]);
  }
  return {
    c() {
      ((e = v("button")),
        (t = v("span")),
        (a = K(n)),
        (u = Z()),
        m && m.c(),
        (r = Z()),
        o(t, "class", "mp-num svelte-hjgkih"),
        o(
          e,
          "class",
          (p =
            "mp-monitor " +
            ((l[0] ?? []).includes(l[13].index) ? "selected" : "") +
            " svelte-hjgkih"),
        ),
        ce(e, "left", l[13].lx + "px"),
        ce(e, "top", l[13].ly + "px"),
        ce(e, "width", l[13].lw + "px"),
        ce(e, "height", l[13].lh + "px"),
        o(
          e,
          "title",
          (d =
            Fl(l[13], l[1]) +
            " (" +
            l[13].width +
            "×" +
            l[13].height +
            ")" +
            (l[13].index === l[4] ? " — main display" : "")),
        ));
    },
    m(s, w) {
      (b(s, e, w),
        h(e, t),
        h(t, a),
        h(e, u),
        m && m.m(e, null),
        h(e, r),
        c || ((g = W(e, "click", i)), (c = !0)));
    },
    p(s, w) {
      ((l = s),
        w & 32 && n !== (n = l[13].index + 1 + "") && ze(a, n),
        l[13].is_primary
          ? m || ((m = Ni()), m.c(), m.m(e, r))
          : m && (m.d(1), (m = null)),
        w & 33 &&
          p !==
            (p =
              "mp-monitor " +
              ((l[0] ?? []).includes(l[13].index) ? "selected" : "") +
              " svelte-hjgkih") &&
          o(e, "class", p),
        w & 32 && ce(e, "left", l[13].lx + "px"),
        w & 32 && ce(e, "top", l[13].ly + "px"),
        w & 32 && ce(e, "width", l[13].lw + "px"),
        w & 32 && ce(e, "height", l[13].lh + "px"),
        w & 50 &&
          d !==
            (d =
              Fl(l[13], l[1]) +
              " (" +
              l[13].width +
              "×" +
              l[13].height +
              ")" +
              (l[13].index === l[4] ? " — main display" : "")) &&
          o(e, "title", d));
    },
    d(s) {
      (s && _(e), m && m.d(), (c = !1), g());
    },
  };
}
function F7(l) {
  let e;
  return {
    c() {
      ((e = v("span")),
        (e.textContent = "Primary"),
        o(e, "class", "mp-badge svelte-hjgkih"));
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function W7(l) {
  let e;
  return {
    c() {
      ((e = v("span")),
        (e.textContent = "Main"),
        o(e, "class", "mp-badge main-badge svelte-hjgkih"));
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Ii(l) {
  let e,
    t,
    n = l[13].index + 1 + "",
    a,
    u,
    r,
    p = Fl(l[13], l[1]) + "",
    d,
    c,
    g,
    m,
    i = l[13].width + "",
    s,
    w,
    k = l[13].height + "",
    f,
    M,
    S,
    O = (l[0] ?? []).includes(l[13].index) ? "✓" : "",
    P,
    T,
    L,
    z,
    F;
  function E(Q, X) {
    if (Q[13].index === Q[4]) return W7;
    if (Q[13].is_primary) return F7;
  }
  let D = E(l),
    N = D && D(l);
  function ne() {
    return l[10](l[13]);
  }
  return {
    c() {
      ((e = v("button")),
        (t = v("span")),
        (a = K(n)),
        (u = Z()),
        (r = v("span")),
        (d = K(p)),
        (c = Z()),
        N && N.c(),
        (g = Z()),
        (m = v("span")),
        (s = K(i)),
        (w = K("×")),
        (f = K(k)),
        (M = Z()),
        (S = v("span")),
        (P = K(O)),
        (T = Z()),
        o(t, "class", "mp-row-num svelte-hjgkih"),
        o(r, "class", "mp-row-label svelte-hjgkih"),
        o(m, "class", "mp-row-res svelte-hjgkih"),
        o(S, "class", "mp-check svelte-hjgkih"),
        o(S, "aria-hidden", "true"),
        o(
          e,
          "class",
          (L =
            "mp-row " +
            ((l[0] ?? []).includes(l[13].index) ? "selected" : "") +
            " svelte-hjgkih"),
        ));
    },
    m(Q, X) {
      (b(Q, e, X),
        h(e, t),
        h(t, a),
        h(e, u),
        h(e, r),
        h(r, d),
        h(r, c),
        N && N.m(r, null),
        h(e, g),
        h(e, m),
        h(m, s),
        h(m, w),
        h(m, f),
        h(e, M),
        h(e, S),
        h(S, P),
        h(e, T),
        z || ((F = W(e, "click", ne)), (z = !0)));
    },
    p(Q, X) {
      ((l = Q),
        X & 2 && n !== (n = l[13].index + 1 + "") && ze(a, n),
        X & 2 && p !== (p = Fl(l[13], l[1]) + "") && ze(d, p),
        D !== (D = E(l)) &&
          (N && N.d(1), (N = D && D(l)), N && (N.c(), N.m(r, null))),
        X & 2 && i !== (i = l[13].width + "") && ze(s, i),
        X & 2 && k !== (k = l[13].height + "") && ze(f, k),
        X & 3 &&
          O !== (O = (l[0] ?? []).includes(l[13].index) ? "✓" : "") &&
          ze(P, O),
        X & 3 &&
          L !==
            (L =
              "mp-row " +
              ((l[0] ?? []).includes(l[13].index) ? "selected" : "") +
              " svelte-hjgkih") &&
          o(e, "class", L));
    },
    d(Q) {
      (Q && _(e), N && N.d(), (z = !1), F());
    },
  };
}
function Bi(l) {
  let e;
  return {
    c() {
      ((e = v("p")),
        (e.textContent = "No display selected — overlay is off."),
        o(e, "class", "mp-hint svelte-hjgkih"),
        ce(e, "margin-top", "4px"));
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function qi(l) {
  let e, t, n, a;
  return {
    c() {
      ((e = v("p")),
        (t = K(
          "Tip: if the texture looks off after rotating, adding, or rearranging displays, right-click Paperman in the ",
        )),
        (n = K(l[6])),
        (a = K(" → Quit Paperman, then reopen.")),
        o(e, "class", "mp-tip svelte-hjgkih"));
    },
    m(u, r) {
      (b(u, e, r), h(e, t), h(e, n), h(e, a));
    },
    p(u, r) {
      r & 64 && ze(n, u[6]);
    },
    d(u) {
      u && _(e);
    },
  };
}
function R7(l) {
  let e;
  function t(u, r) {
    return u[2] ? D7 : u[3] ? E7 : T7;
  }
  let n = t(l),
    a = n(l);
  return {
    c() {
      ((e = v("div")), a.c(), o(e, "class", "monitor-picker svelte-hjgkih"));
    },
    m(u, r) {
      (b(u, e, r), a.m(e, null));
    },
    p(u, [r]) {
      n === (n = t(u)) && a
        ? a.p(u, r)
        : (a.d(1), (a = n(u)), a && (a.c(), a.m(e, null)));
    },
    i: A,
    o: A,
    d(u) {
      (u && _(e), a.d());
    },
  };
}
function Fl(l, e) {
  var a;
  const t = (a = l.name) == null ? void 0 : a.trim();
  return !t || /^monitor\s*#?\d+$/i.test(t) || /^[\\\/]{2}/.test(t)
    ? e.length === 1
      ? "Display"
      : l.is_primary
        ? "Primary Display"
        : `Display ${l.index + 1}`
    : t;
}
const ji = (l) => l.ly + l.lh,
  Xi = (l) => l.lx + l.lw;
function K7(l, e, t) {
  let n,
    a,
    { selectedIndexes: u = null } = e,
    { platform: r = "" } = e;
  const p = x0();
  let d = [],
    c = !0,
    g = "",
    m;
  b0(async () => {
    var f;
    try {
      (t(1, (d = await ue("get_monitors"))),
        t(
          4,
          (m = (f = d.find((M) => M.is_primary)) == null ? void 0 : f.index),
        ),
        m !== void 0 &&
          (p("primaryIndex", m),
          u === null && (t(0, (u = [m])), p("change", u))));
    } catch {
      t(3, (g = "Could not load monitors"));
    } finally {
      t(2, (c = !1));
    }
  });
  function i(f) {
    const M = u ?? [],
      S = M.includes(f) ? M.filter((O) => O !== f) : [...M, f];
    (t(0, (u = S)), p("change", S));
  }
  function s(f) {
    if (!f.length) return [];
    const M = (Q, X) => (r === "macos" ? Q / X : Q),
      S = (Q) => M(Q.x, Q.scale_factor),
      O = (Q) => M(Q.y, Q.scale_factor),
      P = (Q) => M(Q.width, Q.scale_factor),
      T = (Q) => M(Q.height, Q.scale_factor),
      L = Math.min(...f.map(S)),
      z = Math.min(...f.map(O)),
      F = Math.max(...f.map((Q) => S(Q) + P(Q))),
      E = Math.max(...f.map((Q) => O(Q) + T(Q))),
      D = F - L || 1,
      N = E - z || 1,
      ne = Math.min(160 / D, 80 / N);
    return f.map((Q) => ({
      ...Q,
      lx: (S(Q) - L) * ne,
      ly: (O(Q) - z) * ne,
      lw: P(Q) * ne,
      lh: T(Q) * ne,
    }));
  }
  const w = (f) => i(f.index),
    k = (f) => i(f.index);
  return (
    (l.$$set = (f) => {
      ("selectedIndexes" in f && t(0, (u = f.selectedIndexes)),
        "platform" in f && t(8, (r = f.platform)));
    }),
    (l.$$.update = () => {
      (l.$$.dirty & 256 &&
        t(
          6,
          (n =
            r === "macos"
              ? "menu bar"
              : r === "windows"
                ? "system tray"
                : "app menu"),
        ),
        l.$$.dirty & 2 && t(5, (a = s(d))));
    }),
    [u, d, c, g, m, a, n, i, r, w, k]
  );
}
class N7 extends Me {
  constructor(e) {
    (super(), Ae(this, e, K7, R7, ve, { selectedIndexes: 0, platform: 8 }));
  }
}
function U7(l) {
  let e, t;
  const n = l[1].default,
    a = Ge(n, l, l[0], null);
  return {
    c() {
      ((e = v("span")), a && a.c(), o(e, "class", "badge svelte-166fdar"));
    },
    m(u, r) {
      (b(u, e, r), a && a.m(e, null), (t = !0));
    },
    p(u, [r]) {
      a &&
        a.p &&
        (!t || r & 1) &&
        Qe(a, n, u, u[0], t ? Ye(n, u[0], r, null) : Je(u[0]), null);
    },
    i(u) {
      t || (C(a, u), (t = !0));
    },
    o(u) {
      (V(a, u), (t = !1));
    },
    d(u) {
      (u && _(e), a && a.d(u));
    },
  };
}
function I7(l, e, t) {
  let { $$slots: n = {}, $$scope: a } = e;
  return (
    (l.$$set = (u) => {
      "$$scope" in u && t(0, (a = u.$$scope));
    }),
    [a, n]
  );
}
class B7 extends Me {
  constructor(e) {
    (super(), Ae(this, e, I7, U7, ve, {}));
  }
}
function Gi(l, e, t) {
  const n = l.slice();
  return ((n[13] = e[t]), (n[15] = t), n);
}
function Yi(l) {
  let e, t;
  return (
    (e = new B7({
      props: { $$slots: { default: [q7] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      p(n, a) {
        const u = {};
        (a & 65552 && (u.$$scope = { dirty: a, ctx: n }), e.$set(u));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function q7(l) {
  let e;
  return {
    c() {
      e = K(l[4]);
    },
    m(t, n) {
      b(t, e, n);
    },
    p(t, n) {
      n & 16 && ze(e, t[4]);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Qi(l) {
  let e, t, n, a, u, r, p, d;
  return (
    (t = new Xr({
      props: { size: 13, weight: l[7] ? "fill" : "regular", color: "#FFF2C9" },
    })),
    {
      c() {
        ((e = v("span")),
          j(t.$$.fragment),
          o(
            e,
            "class",
            (n = "texture-pin " + (l[7] ? "pinned" : "") + " svelte-ig18zd"),
          ),
          o(e, "role", "button"),
          o(e, "tabindex", "0"),
          o(
            e,
            "aria-label",
            (a = l[7] ? "Unpin from Control Center" : "Pin to Control Center"),
          ),
          o(e, "aria-pressed", l[7]),
          o(
            e,
            "title",
            (u = l[7] ? "Unpin from Control Center" : "Pin to Control Center"),
          ));
      },
      m(c, g) {
        (b(c, e, g),
          B(t, e, null),
          (r = !0),
          p ||
            ((d = [W(e, "click", l[10]), W(e, "keydown", l[12])]), (p = !0)));
      },
      p(c, g) {
        const m = {};
        (g & 128 && (m.weight = c[7] ? "fill" : "regular"),
          t.$set(m),
          (!r ||
            (g & 128 &&
              n !==
                (n =
                  "texture-pin " +
                  (c[7] ? "pinned" : "") +
                  " svelte-ig18zd"))) &&
            o(e, "class", n),
          (!r ||
            (g & 128 &&
              a !==
                (a = c[7]
                  ? "Unpin from Control Center"
                  : "Pin to Control Center"))) &&
            o(e, "aria-label", a),
          (!r || g & 128) && o(e, "aria-pressed", c[7]),
          (!r ||
            (g & 128 &&
              u !==
                (u = c[7]
                  ? "Unpin from Control Center"
                  : "Pin to Control Center"))) &&
            o(e, "title", u));
      },
      i(c) {
        r || (C(t.$$.fragment, c), (r = !0));
      },
      o(c) {
        (V(t.$$.fragment, c), (r = !1));
      },
      d(c) {
        (c && _(e), q(t), (p = !1), at(d));
      },
    }
  );
}
function Ji(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("span")),
        (t = v("img")),
        _0(t.src, (n = l[1])) || o(t, "src", n),
        o(t, "alt", ""),
        o(t, "class", "svelte-ig18zd"),
        o(e, "class", "texture-icon svelte-ig18zd"));
    },
    m(a, u) {
      (b(a, e, u), h(e, t));
    },
    p(a, u) {
      u & 2 && !_0(t.src, (n = a[1])) && o(t, "src", n);
    },
    d(a) {
      a && _(e);
    },
  };
}
function j7(l) {
  let e;
  return {
    c() {
      e = v("br");
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function xi(l) {
  let e = l[13] + "",
    t,
    n = l[15] > 0 && j7();
  return {
    c() {
      (n && n.c(), (t = K(e)));
    },
    m(a, u) {
      (n && n.m(a, u), b(a, t, u));
    },
    p(a, u) {
      u & 4 && e !== (e = a[13] + "") && ze(t, e);
    },
    d(a) {
      (a && _(t), n && n.d(a));
    },
  };
}
function X7(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g = l[4] && Yi(l),
    m = l[6] && Qi(l),
    i = l[1] && Ji(l),
    s = Mt(l[2]),
    w = [];
  for (let k = 0; k < s.length; k += 1) w[k] = xi(Gi(l, s, k));
  return {
    c() {
      ((e = v("button")),
        g && g.c(),
        (t = Z()),
        m && m.c(),
        (n = Z()),
        i && i.c(),
        (a = Z()),
        (u = v("span")));
      for (let k = 0; k < w.length; k += 1) w[k].c();
      (o(u, "class", "texture-name svelte-ig18zd"),
        o(
          e,
          "class",
          (r =
            "texture-card " +
            (l[3] ? "active" : "") +
            " " +
            (l[5] ? "large" : "") +
            " " +
            (l[1] ? "" : "text-only") +
            " svelte-ig18zd"),
        ));
    },
    m(k, f) {
      (b(k, e, f),
        g && g.m(e, null),
        h(e, t),
        m && m.m(e, null),
        h(e, n),
        i && i.m(e, null),
        h(e, a),
        h(e, u));
      for (let M = 0; M < w.length; M += 1) w[M] && w[M].m(u, null);
      ((p = !0), d || ((c = W(e, "click", l[9])), (d = !0)));
    },
    p(k, [f]) {
      if (
        (k[4]
          ? g
            ? (g.p(k, f), f & 16 && C(g, 1))
            : ((g = Yi(k)), g.c(), C(g, 1), g.m(e, t))
          : g &&
            (Ie(),
            V(g, 1, 1, () => {
              g = null;
            }),
            Be()),
        k[6]
          ? m
            ? (m.p(k, f), f & 64 && C(m, 1))
            : ((m = Qi(k)), m.c(), C(m, 1), m.m(e, n))
          : m &&
            (Ie(),
            V(m, 1, 1, () => {
              m = null;
            }),
            Be()),
        k[1]
          ? i
            ? i.p(k, f)
            : ((i = Ji(k)), i.c(), i.m(e, a))
          : i && (i.d(1), (i = null)),
        f & 4)
      ) {
        s = Mt(k[2]);
        let M;
        for (M = 0; M < s.length; M += 1) {
          const S = Gi(k, s, M);
          w[M] ? w[M].p(S, f) : ((w[M] = xi(S)), w[M].c(), w[M].m(u, null));
        }
        for (; M < w.length; M += 1) w[M].d(1);
        w.length = s.length;
      }
      (!p ||
        (f & 42 &&
          r !==
            (r =
              "texture-card " +
              (k[3] ? "active" : "") +
              " " +
              (k[5] ? "large" : "") +
              " " +
              (k[1] ? "" : "text-only") +
              " svelte-ig18zd"))) &&
        o(e, "class", r);
    },
    i(k) {
      p || (C(g), C(m), (p = !0));
    },
    o(k) {
      (V(g), V(m), (p = !1));
    },
    d(k) {
      (k && _(e), g && g.d(), m && m.d(), i && i.d(), D1(w, k), (d = !1), c());
    },
  };
}
function G7(l, e, t) {
  let { id: n } = e,
    { icon: a = void 0 } = e,
    { lines: u } = e,
    { active: r = !1 } = e,
    { locked: p = !1 } = e,
    { badge: d = "" } = e,
    { large: c = !1 } = e,
    { pinnable: g = !1 } = e,
    { pinned: m = !1 } = e;
  const i = x0();
  function s() {
    i(p ? "locked" : "select", n);
  }
  function w(f) {
    (f.stopPropagation(), i("pin", n));
  }
  const k = (f) => {
    (f.key === "Enter" || f.key === " ") &&
      (f.preventDefault(), f.stopPropagation(), i("pin", n));
  };
  return (
    (l.$$set = (f) => {
      ("id" in f && t(0, (n = f.id)),
        "icon" in f && t(1, (a = f.icon)),
        "lines" in f && t(2, (u = f.lines)),
        "active" in f && t(3, (r = f.active)),
        "locked" in f && t(11, (p = f.locked)),
        "badge" in f && t(4, (d = f.badge)),
        "large" in f && t(5, (c = f.large)),
        "pinnable" in f && t(6, (g = f.pinnable)),
        "pinned" in f && t(7, (m = f.pinned)));
    }),
    [n, a, u, r, d, c, g, m, i, s, w, p, k]
  );
}
class Nn extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, G7, X7, ve, {
        id: 0,
        icon: 1,
        lines: 2,
        active: 3,
        locked: 11,
        badge: 4,
        large: 5,
        pinnable: 6,
        pinned: 7,
      }));
  }
}
function Y7(l) {
  let e, t, n, a, u, r, p, d, c, g, m;
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        (a = K(l[1])),
        (u = Z()),
        (r = v("span")),
        (p = K(l[2])),
        (d = K("%")),
        (c = Z()),
        (g = v("div")),
        (m = v("div")),
        o(n, "class", "intensity-toast-name svelte-1ykykt0"),
        o(r, "class", "intensity-toast-value svelte-1ykykt0"),
        o(t, "class", "intensity-toast-header svelte-1ykykt0"),
        o(m, "class", "intensity-toast-fill svelte-1ykykt0"),
        ce(m, "width", Math.round(l[0] * 100) + "%"),
        o(g, "class", "intensity-toast-track svelte-1ykykt0"),
        o(e, "class", "intensity-toast svelte-1ykykt0"));
    },
    m(i, s) {
      (b(i, e, s),
        h(e, t),
        h(t, n),
        h(n, a),
        h(t, u),
        h(t, r),
        h(r, p),
        h(r, d),
        h(e, c),
        h(e, g),
        h(g, m));
    },
    p(i, [s]) {
      (s & 2 && ze(a, i[1]),
        s & 4 && ze(p, i[2]),
        s & 1 && ce(m, "width", Math.round(i[0] * 100) + "%"));
    },
    i: A,
    o: A,
    d(i) {
      i && _(e);
    },
  };
}
function Q7(l, e, t) {
  let { percent: n = 0 } = e,
    { textureName: a = "" } = e,
    { rawPercent: u = 0 } = e;
  return (
    (l.$$set = (r) => {
      ("percent" in r && t(0, (n = r.percent)),
        "textureName" in r && t(1, (a = r.textureName)),
        "rawPercent" in r && t(2, (u = r.rawPercent)));
    }),
    [n, a, u]
  );
}
class J7 extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Q7, Y7, ve, { percent: 0, textureName: 1, rawPercent: 2 }));
  }
}
function $i(l, e, t) {
  const n = l.slice();
  n[8] = e[t];
  const a = n[0] === n[8].value;
  n[9] = a;
  const u = n[8].chip ?? (n[4] && n[9] ? n[3] : null);
  return ((n[10] = u), n);
}
function ea(l) {
  let e, t, n;
  var a = l[8].icon;
  function u(r, p) {
    return { props: { size: 13, weight: "fill" } };
  }
  return (
    a && (e = ki(a, u())),
    {
      c() {
        (e && j(e.$$.fragment), (t = c1()));
      },
      m(r, p) {
        (e && B(e, r, p), b(r, t, p), (n = !0));
      },
      p(r, p) {
        if (p & 2 && a !== (a = r[8].icon)) {
          if (e) {
            Ie();
            const d = e;
            (V(d.$$.fragment, 1, 0, () => {
              q(d, 1);
            }),
              Be());
          }
          a
            ? ((e = ki(a, u())),
              j(e.$$.fragment),
              C(e.$$.fragment, 1),
              B(e, t.parentNode, t))
            : (e = null);
        }
      },
      i(r) {
        n || (e && C(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        (e && V(e.$$.fragment, r), (n = !1));
      },
      d(r) {
        (r && _(t), e && q(e, r));
      },
    }
  );
}
function ta(l) {
  let e,
    t = l[10] + "",
    n;
  return {
    c() {
      ((e = v("span")),
        (n = K(t)),
        o(e, "class", "theme-now-chip svelte-gxqd3p"));
    },
    m(a, u) {
      (b(a, e, u), h(e, n));
    },
    p(a, u) {
      u & 27 && t !== (t = a[10] + "") && ze(n, t);
    },
    d(a) {
      a && _(e);
    },
  };
}
function la(l, e) {
  let t,
    n,
    a = e[8].label + "",
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s = e[8].icon && ea(e),
    w = e[10] && ta(e);
  function k() {
    return e[6](e[8]);
  }
  return {
    key: l,
    first: null,
    c() {
      ((t = v("button")),
        s && s.c(),
        (n = Z()),
        (u = K(a)),
        (r = Z()),
        w && w.c(),
        (p = Z()),
        o(
          t,
          "class",
          (d = "texture-mode-btn " + (e[9] ? "active" : "") + " svelte-gxqd3p"),
        ),
        o(t, "role", "tab"),
        o(t, "aria-selected", (c = e[9])),
        (this.first = t));
    },
    m(f, M) {
      (b(f, t, M),
        s && s.m(t, null),
        h(t, n),
        h(t, u),
        h(t, r),
        w && w.m(t, null),
        h(t, p),
        (g = !0),
        m || ((i = W(t, "click", k)), (m = !0)));
    },
    p(f, M) {
      ((e = f),
        e[8].icon
          ? s
            ? (s.p(e, M), M & 2 && C(s, 1))
            : ((s = ea(e)), s.c(), C(s, 1), s.m(t, n))
          : s &&
            (Ie(),
            V(s, 1, 1, () => {
              s = null;
            }),
            Be()),
        (!g || M & 2) && a !== (a = e[8].label + "") && ze(u, a),
        e[10]
          ? w
            ? w.p(e, M)
            : ((w = ta(e)), w.c(), w.m(t, p))
          : w && (w.d(1), (w = null)),
        (!g ||
          (M & 3 &&
            d !==
              (d =
                "texture-mode-btn " +
                (e[9] ? "active" : "") +
                " svelte-gxqd3p"))) &&
          o(t, "class", d),
        (!g || (M & 3 && c !== (c = e[9]))) && o(t, "aria-selected", c));
    },
    i(f) {
      g || (C(s), (g = !0));
    },
    o(f) {
      (V(s), (g = !1));
    },
    d(f) {
      (f && _(t), s && s.d(), w && w.d(), (m = !1), i());
    },
  };
}
function x7(l) {
  let e,
    t = [],
    n = new Map(),
    a,
    u = Mt(l[1]);
  const r = (p) => p[8].value;
  for (let p = 0; p < u.length; p += 1) {
    let d = $i(l, u, p),
      c = r(d);
    n.set(c, (t[p] = la(c, d)));
  }
  return {
    c() {
      e = v("div");
      for (let p = 0; p < t.length; p += 1) t[p].c();
      (o(e, "class", "texture-mode-toggle svelte-gxqd3p"),
        o(e, "role", "tablist"),
        o(e, "aria-label", l[2]));
    },
    m(p, d) {
      b(p, e, d);
      for (let c = 0; c < t.length; c += 1) t[c] && t[c].m(e, null);
      a = !0;
    },
    p(p, [d]) {
      (d & 59 &&
        ((u = Mt(p[1])),
        Ie(),
        (t = el(t, d, r, 1, p, u, n, e, $0, la, null, $i)),
        Be()),
        (!a || d & 4) && o(e, "aria-label", p[2]));
    },
    i(p) {
      if (!a) {
        for (let d = 0; d < u.length; d += 1) C(t[d]);
        a = !0;
      }
    },
    o(p) {
      for (let d = 0; d < t.length; d += 1) V(t[d]);
      a = !1;
    },
    d(p) {
      p && _(e);
      for (let d = 0; d < t.length; d += 1) t[d].d();
    },
  };
}
function $7(l, e, t) {
  let { options: n } = e,
    { value: a } = e,
    { ariaLabel: u = "Toggle options" } = e,
    { chipLabel: r = "Active" } = e,
    { showChipWhenSelected: p = !0 } = e;
  const d = x0();
  function c(m) {
    (t(0, (a = m)), d("change", m));
  }
  const g = (m) => c(m.value);
  return (
    (l.$$set = (m) => {
      ("options" in m && t(1, (n = m.options)),
        "value" in m && t(0, (a = m.value)),
        "ariaLabel" in m && t(2, (u = m.ariaLabel)),
        "chipLabel" in m && t(3, (r = m.chipLabel)),
        "showChipWhenSelected" in m && t(4, (p = m.showChipWhenSelected)));
    }),
    [a, n, u, r, p, c, g]
  );
}
class Un extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, $7, x7, ve, {
        options: 1,
        value: 0,
        ariaLabel: 2,
        chipLabel: 3,
        showChipWhenSelected: 4,
      }));
  }
}
const ep = [
    "top-to-bottom",
    "bottom-to-top",
    "left-to-right",
    "right-to-left",
    "random",
  ],
  no = "random";
function Wl(l) {
  return ep.includes(l) ? l : no;
}
const Vn = 2600;
function tp(l) {
  return Vn;
}
const io = [
  { cx: 0.12, cy: 0.18, radius: 0.62, delayMs: 0, durationMs: 1500 },
  { cx: 0.52, cy: 0.08, radius: 0.42, delayMs: 90, durationMs: 1650 },
  { cx: 0.88, cy: 0.22, radius: 0.58, delayMs: 260, durationMs: 1400 },
  { cx: 0.08, cy: 0.52, radius: 0.5, delayMs: 140, durationMs: 1600 },
  { cx: 0.46, cy: 0.48, radius: 0.68, delayMs: 380, durationMs: 1350 },
  { cx: 0.92, cy: 0.58, radius: 0.48, delayMs: 220, durationMs: 1700 },
  { cx: 0.18, cy: 0.86, radius: 0.6, delayMs: 460, durationMs: 1450 },
  { cx: 0.58, cy: 0.92, radius: 0.44, delayMs: 320, durationMs: 1550 },
  { cx: 0.86, cy: 0.88, radius: 0.56, delayMs: 540, durationMs: 1500 },
];
function lp() {
  return Math.max(...io.map((l) => l.delayMs + l.durationMs));
}
const ao = [
  { cx: 0.5, cy: 0.5, radius: 0.8, delayMs: 0, durationMs: 1500 },
  { cx: 0.5, cy: 0.5, radius: 0.8, delayMs: 220, durationMs: 1500 },
  { cx: 0.5, cy: 0.5, radius: 0.8, delayMs: 440, durationMs: 1500 },
];
function np() {
  return Math.max(...ao.map((l) => l.delayMs + l.durationMs));
}
const ip = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 100],
  ap = [0, -4, 5, -6, 3, -5, 6, -3, 4, -6, 2, -4, 5, 0];
function ro(l) {
  return `polygon(0% 0%, 100% 0%, ${ip
    .map((t, n) => [t, l + ap[n]])
    .reverse()
    .map(([t, n]) => `${t}% ${n}%`)
    .join(", ")})`;
}
const rp = ro(-10),
  op = ro(110),
  oo = 1900,
  sp = "polygon(0% 0%, 0.01% 0%, 0% 0.01%)",
  cp = "polygon(0% 0%, 200% 0%, 0% 200%)",
  so = 1900,
  up = [
    [0.1, -0.14],
    [-0.12, 0.09],
    [0.13, 0.11],
    [-0.09, -0.1],
  ],
  co = [
    {
      cx: 0.1,
      cy: 0.15,
      halfWidth: 0.32,
      halfHeight: 0.28,
      rotateDeg: -8,
      delayMs: 0,
      durationMs: 1400,
    },
    {
      cx: 0.5,
      cy: 0.06,
      halfWidth: 0.3,
      halfHeight: 0.22,
      rotateDeg: 6,
      delayMs: 110,
      durationMs: 1550,
    },
    {
      cx: 0.9,
      cy: 0.18,
      halfWidth: 0.3,
      halfHeight: 0.28,
      rotateDeg: -12,
      delayMs: 260,
      durationMs: 1350,
    },
    {
      cx: 0.06,
      cy: 0.5,
      halfWidth: 0.28,
      halfHeight: 0.3,
      rotateDeg: 10,
      delayMs: 160,
      durationMs: 1500,
    },
    {
      cx: 0.46,
      cy: 0.46,
      halfWidth: 0.36,
      halfHeight: 0.34,
      rotateDeg: -5,
      delayMs: 380,
      durationMs: 1300,
    },
    {
      cx: 0.94,
      cy: 0.55,
      halfWidth: 0.28,
      halfHeight: 0.3,
      rotateDeg: 14,
      delayMs: 240,
      durationMs: 1600,
    },
    {
      cx: 0.14,
      cy: 0.86,
      halfWidth: 0.32,
      halfHeight: 0.28,
      rotateDeg: -10,
      delayMs: 470,
      durationMs: 1400,
    },
    {
      cx: 0.54,
      cy: 0.94,
      halfWidth: 0.3,
      halfHeight: 0.24,
      rotateDeg: 8,
      delayMs: 340,
      durationMs: 1500,
    },
    {
      cx: 0.9,
      cy: 0.88,
      halfWidth: 0.3,
      halfHeight: 0.28,
      rotateDeg: -6,
      delayMs: 560,
      durationMs: 1450,
    },
    {
      cx: 0.3,
      cy: 0.68,
      halfWidth: 0.26,
      halfHeight: 0.26,
      rotateDeg: 16,
      delayMs: 300,
      durationMs: 1350,
    },
  ];
function fp(l) {
  return [
    [l.cx - l.halfWidth, l.cy - l.halfHeight],
    [l.cx + l.halfWidth, l.cy - l.halfHeight],
    [l.cx + l.halfWidth, l.cy + l.halfHeight],
    [l.cx - l.halfWidth, l.cy + l.halfHeight],
  ]
    .map(([t, n], a) => {
      const [u, r] = up[a],
        p = u * l.halfWidth,
        d = r * l.halfHeight;
      return `${t + p},${n + d}`;
    })
    .join(" ");
}
function dp() {
  return Math.max(...co.map((l) => l.delayMs + l.durationMs));
}
const hp = ["ink-blots", "torn-edge", "paper-scraps", "ripple", "corner-curl"],
  uo = "ink-blots";
function Rl(l) {
  return hp.includes(l) ? l : uo;
}
function mp(l) {
  switch (l) {
    case "torn-edge":
      return oo;
    case "corner-curl":
      return so;
    case "paper-scraps":
      return dp();
    case "ripple":
      return np();
    default:
      return lp();
  }
}
const { window: mn } = Cr;
function na(l, e, t) {
  const n = l.slice();
  return ((n[27] = e[t]), (n[29] = t), n);
}
function ia(l) {
  let e,
    t = [],
    n = new Map(),
    a,
    u,
    r,
    p = Mt(l[1]);
  const d = (c) => c[27].value;
  for (let c = 0; c < p.length; c += 1) {
    let g = na(l, p, c),
      m = d(g);
    n.set(m, (t[c] = ra(m, g)));
  }
  return {
    c() {
      e = v("div");
      for (let c = 0; c < t.length; c += 1) t[c].c();
      (o(e, "id", l[9] + "-listbox"),
        o(e, "class", "dropdown-menu svelte-td74lm"),
        o(e, "role", "listbox"),
        o(e, "aria-label", l[2]),
        o(e, "style", l[7]));
    },
    m(c, g) {
      b(c, e, g);
      for (let m = 0; m < t.length; m += 1) t[m] && t[m].m(e, null);
      (l[22](e), (a = !0), u || ((r = E1(gp.call(null, e))), (u = !0)));
    },
    p(c, g) {
      (g & 4675 &&
        ((p = Mt(c[1])),
        Ie(),
        (t = el(t, g, d, 1, c, p, n, e, $0, ra, null, na)),
        Be()),
        (!a || g & 4) && o(e, "aria-label", c[2]),
        (!a || g & 128) && o(e, "style", c[7]));
    },
    i(c) {
      if (!a) {
        for (let g = 0; g < p.length; g += 1) C(t[g]);
        a = !0;
      }
    },
    o(c) {
      for (let g = 0; g < t.length; g += 1) V(t[g]);
      a = !1;
    },
    d(c) {
      c && _(e);
      for (let g = 0; g < t.length; g += 1) t[g].d();
      (l[22](null), (u = !1), r());
    },
  };
}
function aa(l) {
  let e, t;
  return (
    (e = new Il({ props: { size: 12, weight: "bold" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function ra(l, e) {
  let t,
    n,
    a = e[27].label + "",
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s = e[27].value === e[0] && aa();
  function w() {
    return e[20](e[29]);
  }
  function k() {
    return e[21](e[29]);
  }
  return {
    key: l,
    first: null,
    c() {
      ((t = v("div")),
        (n = v("span")),
        (u = K(a)),
        (r = Z()),
        s && s.c(),
        (p = Z()),
        o(n, "class", "dropdown-option-label"),
        o(t, "id", (d = e[9] + "-opt-" + e[29])),
        o(t, "tabindex", "-1"),
        o(t, "class", "dropdown-option svelte-td74lm"),
        o(t, "role", "option"),
        o(t, "aria-selected", (c = e[27].value === e[0])),
        Nt(t, "active", e[29] === e[6]),
        (this.first = t));
    },
    m(f, M) {
      (b(f, t, M),
        h(t, n),
        h(n, u),
        h(t, r),
        s && s.m(t, null),
        h(t, p),
        (g = !0),
        m ||
          ((i = [
            W(t, "mousedown", Vr(e[17])),
            W(t, "click", w),
            W(t, "mouseenter", k),
          ]),
          (m = !0)));
    },
    p(f, M) {
      ((e = f),
        (!g || M & 2) && a !== (a = e[27].label + "") && ze(u, a),
        e[27].value === e[0]
          ? s
            ? M & 3 && C(s, 1)
            : ((s = aa()), s.c(), C(s, 1), s.m(t, p))
          : s &&
            (Ie(),
            V(s, 1, 1, () => {
              s = null;
            }),
            Be()),
        (!g || (M & 2 && d !== (d = e[9] + "-opt-" + e[29]))) && o(t, "id", d),
        (!g || (M & 3 && c !== (c = e[27].value === e[0]))) &&
          o(t, "aria-selected", c),
        (!g || M & 66) && Nt(t, "active", e[29] === e[6]));
    },
    i(f) {
      g || (C(s), (g = !0));
    },
    o(f) {
      (V(s), (g = !1));
    },
    d(f) {
      (f && _(t), s && s.d(), (m = !1), at(i));
    },
  };
}
function pp(l) {
  let e, t, n, a, u, r, p, d, c, g, m;
  u = new e8({ props: { size: 12, weight: "bold" } });
  let i = l[5] && ia(l);
  return {
    c() {
      ((e = v("button")),
        (t = v("span")),
        (n = K(l[8])),
        (a = Z()),
        j(u.$$.fragment),
        (p = Z()),
        i && i.c(),
        (d = c1()),
        o(t, "class", "dropdown-value svelte-td74lm"),
        o(e, "type", "button"),
        o(e, "class", "dropdown-trigger svelte-td74lm"),
        o(e, "role", "combobox"),
        o(e, "aria-label", l[2]),
        o(e, "aria-haspopup", "listbox"),
        o(e, "aria-expanded", l[5]),
        o(e, "aria-controls", l[9] + "-listbox"),
        o(
          e,
          "aria-activedescendant",
          (r = l[5] ? `${l[9]}-opt-${l[6]}` : void 0),
        ),
        Nt(e, "open", l[5]));
    },
    m(s, w) {
      (b(s, e, w),
        h(e, t),
        h(t, n),
        h(e, a),
        B(u, e, null),
        l[18](e),
        b(s, p, w),
        i && i.m(s, w),
        b(s, d, w),
        (c = !0),
        g ||
          ((m = [
            W(mn, "pointerdown", l[14]),
            W(mn, "resize", l[11]),
            W(mn, "scroll", l[15], !0),
            W(e, "click", l[19]),
            W(e, "keydown", l[13]),
          ]),
          (g = !0)));
    },
    p(s, [w]) {
      ((!c || w & 256) && ze(n, s[8]),
        (!c || w & 4) && o(e, "aria-label", s[2]),
        (!c || w & 32) && o(e, "aria-expanded", s[5]),
        (!c || (w & 96 && r !== (r = s[5] ? `${s[9]}-opt-${s[6]}` : void 0))) &&
          o(e, "aria-activedescendant", r),
        (!c || w & 32) && Nt(e, "open", s[5]),
        s[5]
          ? i
            ? (i.p(s, w), w & 32 && C(i, 1))
            : ((i = ia(s)), i.c(), C(i, 1), i.m(d.parentNode, d))
          : i &&
            (Ie(),
            V(i, 1, 1, () => {
              i = null;
            }),
            Be()));
    },
    i(s) {
      c || (C(u.$$.fragment, s), C(i), (c = !0));
    },
    o(s) {
      (V(u.$$.fragment, s), V(i), (c = !1));
    },
    d(s) {
      (s && (_(e), _(p), _(d)),
        q(u),
        l[18](null),
        i && i.d(s),
        (g = !1),
        at(m));
    },
  };
}
function gp(l) {
  return (document.body.appendChild(l), { destroy: () => l.remove() });
}
function _p(l, e, t) {
  let n,
    a,
    { options: u } = e,
    { value: r } = e,
    { ariaLabel: p = "Select an option" } = e;
  const d = x0(),
    c = `dropdown-${Math.random().toString(36).slice(2, 9)}`;
  let g,
    m,
    i = !1,
    s = 0,
    w = "";
  function k() {
    if (!g || !m) return;
    const X = g.getBoundingClientRect(),
      ae = 6,
      J = window.innerHeight - X.bottom - ae - 8,
      se = X.top - ae - 8,
      te = m.scrollHeight,
      ge = te > J && se > J,
      $ = Math.max(120, Math.floor(ge ? se : J)),
      he = ge ? Math.max(8, X.top - ae - Math.min(te, $)) : X.bottom + ae;
    t(
      7,
      (w = `left: ${Math.round(X.left)}px; top: ${Math.round(he)}px; min-width: ${Math.round(X.width)}px; max-height: ${$}px;`),
    );
  }
  async function f() {
    i || (t(6, (s = n)), t(5, (i = !0)), await Q0(), k(), S());
  }
  function M() {
    t(5, (i = !1));
  }
  function S() {
    var X;
    (X = m == null ? void 0 : m.querySelector(`#${c}-opt-${s}`)) == null ||
      X.scrollIntoView({ block: "nearest" });
  }
  async function O(X) {
    (t(6, (s = (X + u.length) % u.length)), i && (await Q0(), S()));
  }
  function P(X) {
    const ae = u[X];
    (M(),
      g == null || g.focus(),
      !(!ae || ae.value === r) &&
        (t(0, (r = ae.value)), d("change", ae.value)));
  }
  function T(X) {
    switch (X.key) {
      case "ArrowDown":
        (X.preventDefault(), i ? O(s + 1) : f());
        break;
      case "ArrowUp":
        (X.preventDefault(), i ? O(s - 1) : f());
        break;
      case "Home":
        i && (X.preventDefault(), O(0));
        break;
      case "End":
        i && (X.preventDefault(), O(u.length - 1));
        break;
      case "Enter":
      case " ":
        (X.preventDefault(), i ? P(s) : f());
        break;
      case "Escape":
        i && (X.preventDefault(), M());
        break;
      case "Tab":
        M();
        break;
    }
  }
  function L(X) {
    if (!i) return;
    const ae = X.target;
    !(g != null && g.contains(ae)) && !(m != null && m.contains(ae)) && M();
  }
  function z(X) {
    i && !(m != null && m.contains(X.target)) && M();
  }
  function F(X) {
    q1.call(this, l, X);
  }
  function E(X) {
    Jt[X ? "unshift" : "push"](() => {
      ((g = X), t(3, g));
    });
  }
  const D = () => (i ? M() : f()),
    N = (X) => P(X),
    ne = (X) => t(6, (s = X));
  function Q(X) {
    Jt[X ? "unshift" : "push"](() => {
      ((m = X), t(4, m));
    });
  }
  return (
    (l.$$set = (X) => {
      ("options" in X && t(1, (u = X.options)),
        "value" in X && t(0, (r = X.value)),
        "ariaLabel" in X && t(2, (p = X.ariaLabel)));
    }),
    (l.$$.update = () => {
      var X;
      (l.$$.dirty & 3 &&
        t(
          16,
          (n = Math.max(
            0,
            u.findIndex((ae) => ae.value === r),
          )),
        ),
        l.$$.dirty & 65538 &&
          t(8, (a = ((X = u[n]) == null ? void 0 : X.label) ?? "")));
    }),
    [r, u, p, g, m, i, s, w, a, c, f, M, P, T, L, z, n, F, E, D, N, ne, Q]
  );
}
class bp extends Me {
  constructor(e) {
    (super(), Ae(this, e, _p, pp, ve, { options: 1, value: 0, ariaLabel: 2 }));
  }
}
const vp = [
    { value: "none", label: "None" },
    { value: "top-to-bottom", label: "Top to bottom" },
    { value: "left-to-right", label: "Left to right" },
    { value: "ink-blots", label: "Ink blots" },
    { value: "paper-scraps", label: "Paper scraps" },
    { value: "ripple", label: "Ripple" },
    { value: "corner-curl", label: "Corner curl" },
  ],
  kp = ["ink-blots", "torn-edge", "paper-scraps", "ripple", "corner-curl"];
function wp(l) {
  if (!l.animationsEnabled) return "none";
  const e = Wl(l.animationDirection);
  return e !== "random" ? e : Rl(l.randomRevealStyle);
}
function yp(l, e) {
  return l === "none"
    ? { ...e, animationsEnabled: !1 }
    : kp.includes(l)
      ? {
          animationsEnabled: !0,
          animationDirection: "random",
          randomRevealStyle: l,
        }
      : {
          animationsEnabled: !0,
          animationDirection: l,
          randomRevealStyle: e.randomRevealStyle,
        };
}
function oa(l, e, t) {
  const n = l.slice();
  return ((n[24] = e[t]), n);
}
function Ap(l, e, t) {
  const n = l.slice();
  return ((n[21] = e[t]), n);
}
function sa(l) {
  let e = l[9],
    t,
    n = ca(l);
  return {
    c() {
      (n.c(), (t = c1()));
    },
    m(a, u) {
      (n.m(a, u), b(a, t, u));
    },
    p(a, u) {
      u & 512 && ve(e, (e = a[9]))
        ? (n.d(1), (n = ca(a)), n.c(), n.m(t.parentNode, t))
        : n.p(a, u);
    },
    d(a) {
      (a && _(t), n.d(a));
    },
  };
}
function ca(l) {
  let e, t;
  return {
    c() {
      ((e = v("div")),
        o(
          e,
          "class",
          (t =
            "texture-overlay texture-" +
            l[9] +
            " texture-theme-" +
            l[0] +
            " texture-fade-out svelte-q929vf"),
        ),
        ce(e, "--from-opacity", l[10]),
        ce(e, "--fade-duration", l[8] + "ms"));
    },
    m(n, a) {
      b(n, e, a);
    },
    p(n, a) {
      (a & 513 &&
        t !==
          (t =
            "texture-overlay texture-" +
            n[9] +
            " texture-theme-" +
            n[0] +
            " texture-fade-out svelte-q929vf") &&
        o(e, "class", t),
        a & 1024 && ce(e, "--from-opacity", n[10]),
        a & 256 && ce(e, "--fade-duration", n[8] + "ms"));
    },
    d(n) {
      n && _(e);
    },
  };
}
function ua(l) {
  let e, t;
  function n(r, p) {
    return r[3] === "paper-scraps" ? Zp : Mp;
  }
  let a = n(l),
    u = a(l);
  return {
    c() {
      ((e = y("svg")),
        (t = y("clipPath")),
        u.c(),
        o(t, "id", l[14]),
        o(t, "clipPathUnits", "objectBoundingBox"),
        o(e, "width", "0"),
        o(e, "height", "0"),
        ce(e, "position", "absolute"),
        o(e, "aria-hidden", "true"));
    },
    m(r, p) {
      (b(r, e, p), h(e, t), u.m(t, null));
    },
    p(r, p) {
      a === (a = n(r)) && u
        ? u.p(r, p)
        : (u.d(1), (u = a(r)), u && (u.c(), u.m(t, null)));
    },
    d(r) {
      (r && _(e), u.d());
    },
  };
}
function Mp(l) {
  let e,
    t = Mt(l[12]),
    n = [];
  for (let a = 0; a < t.length; a += 1) n[a] = fa(oa(l, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1) n[a].c();
      e = c1();
    },
    m(a, u) {
      for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(a, u);
      b(a, e, u);
    },
    p(a, u) {
      if (u & 4096) {
        t = Mt(a[12]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const p = oa(a, t, r);
          n[r]
            ? n[r].p(p, u)
            : ((n[r] = fa(p)), n[r].c(), n[r].m(e.parentNode, e));
        }
        for (; r < n.length; r += 1) n[r].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      (a && _(e), D1(n, a));
    },
  };
}
function Zp(l) {
  let e,
    t = Mt(co),
    n = [];
  for (let a = 0; a < t.length; a += 1) n[a] = Hp(Ap(l, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1) n[a].c();
      e = c1();
    },
    m(a, u) {
      for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(a, u);
      b(a, e, u);
    },
    p: A,
    d(a) {
      (a && _(e), D1(n, a));
    },
  };
}
function fa(l) {
  let e, t, n, a;
  return {
    c() {
      ((e = y("circle")),
        o(e, "cx", (t = l[24].cx)),
        o(e, "cy", (n = l[24].cy)),
        o(e, "r", (a = l[24].radius)),
        ce(e, "animation-delay", l[24].delayMs + "ms"),
        ce(e, "animation-duration", l[24].durationMs + "ms"),
        o(e, "class", "svelte-q929vf"));
    },
    m(u, r) {
      b(u, e, r);
    },
    p(u, r) {
      (r & 4096 && t !== (t = u[24].cx) && o(e, "cx", t),
        r & 4096 && n !== (n = u[24].cy) && o(e, "cy", n),
        r & 4096 && a !== (a = u[24].radius) && o(e, "r", a),
        r & 4096 && ce(e, "animation-delay", u[24].delayMs + "ms"),
        r & 4096 && ce(e, "animation-duration", u[24].durationMs + "ms"));
    },
    d(u) {
      u && _(e);
    },
  };
}
function Hp(l) {
  let e;
  return {
    c() {
      ((e = y("polygon")),
        o(e, "points", fp(l[21])),
        ce(e, "--scrap-rotate", l[21].rotateDeg + "deg"),
        ce(e, "animation-delay", l[21].delayMs + "ms"),
        ce(e, "animation-duration", l[21].durationMs + "ms"),
        o(e, "class", "svelte-q929vf"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function da(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d = l[1] && l[13] && ua(l);
  return {
    c() {
      (d && d.c(),
        (e = Z()),
        (t = v("div")),
        o(
          t,
          "class",
          (n =
            "texture-overlay texture-" +
            l[7] +
            " texture-theme-" +
            l[0] +
            " reveal-" +
            l[2] +
            " svelte-q929vf"),
        ),
        o(
          t,
          "style",
          (a =
            "--reveal-duration: " +
            Vn +
            "ms; opacity: " +
            l[5] +
            "; pointer-events: " +
            (l[4] ? "auto" : "none") +
            "; cursor: " +
            (l[4] ? "pointer" : "default") +
            "; " +
            (l[1] && l[13] ? `clip-path: url(#${l[14]});` : "")),
        ),
        Nt(t, "animate-reveal", l[1]));
    },
    m(c, g) {
      (d && d.m(c, g),
        b(c, e, g),
        b(c, t, g),
        r ||
          ((p = [E1((u = Lp.call(null, t, l[11]))), W(t, "click", l[20])]),
          (r = !0)));
    },
    p(c, g) {
      (c[1] && c[13]
        ? d
          ? d.p(c, g)
          : ((d = ua(c)), d.c(), d.m(e.parentNode, e))
        : d && (d.d(1), (d = null)),
        g & 133 &&
          n !==
            (n =
              "texture-overlay texture-" +
              c[7] +
              " texture-theme-" +
              c[0] +
              " reveal-" +
              c[2] +
              " svelte-q929vf") &&
          o(t, "class", n),
        g & 8242 &&
          a !==
            (a =
              "--reveal-duration: " +
              Vn +
              "ms; opacity: " +
              c[5] +
              "; pointer-events: " +
              (c[4] ? "auto" : "none") +
              "; cursor: " +
              (c[4] ? "pointer" : "default") +
              "; " +
              (c[1] && c[13] ? `clip-path: url(#${c[14]});` : "")) &&
          o(t, "style", a),
        u && g1(u.update) && g & 2048 && u.update.call(null, c[11]),
        g & 135 && Nt(t, "animate-reveal", c[1]));
    },
    d(c) {
      (c && (_(e), _(t)), d && d.d(c), (r = !1), at(p));
    },
  };
}
function Cp(l) {
  let e,
    t = l[1] ? `${l[7]}#${l[6]}` : "static",
    n,
    a = l[9] && sa(l),
    u = da(l);
  return {
    c() {
      (a && a.c(), (e = Z()), u.c(), (n = c1()));
    },
    m(r, p) {
      (a && a.m(r, p), b(r, e, p), u.m(r, p), b(r, n, p));
    },
    p(r, [p]) {
      (r[9]
        ? a
          ? a.p(r, p)
          : ((a = sa(r)), a.c(), a.m(e.parentNode, e))
        : a && (a.d(1), (a = null)),
        p & 194 && ve(t, (t = r[1] ? `${r[7]}#${r[6]}` : "static"))
          ? (u.d(1), (u = da(r)), u.c(), u.m(n.parentNode, n))
          : u.p(r, p));
    },
    i: A,
    o: A,
    d(r) {
      (r && (_(e), _(n)), a && a.d(r), u.d(r));
    },
  };
}
function Lp(l, e) {
  if (!e.enabled) return {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return ((l.style.transition = "none"), (l.style.clipPath = e.to), {});
  ((l.style.transition = "none"), (l.style.clipPath = e.from), l.offsetWidth);
  const t = requestAnimationFrame(() => {
    ((l.style.transition = `clip-path ${e.durationMs}ms cubic-bezier(0.65, 0, 0.35, 1)`),
      (l.style.clipPath = e.to));
  });
  return {
    destroy() {
      cancelAnimationFrame(t);
    },
  };
}
function Vp(l, e, t) {
  let n,
    a,
    u,
    r,
    { activeTexture: p } = e,
    { currentTheme: d } = e,
    { animationsEnabled: c } = e,
    { animationDirection: g } = e,
    { randomRevealStyle: m } = e,
    { interactive: i = !1 } = e,
    { displayOpacity: s } = e;
  const w = `texture-reveal-random-${Math.random().toString(36).slice(2)}`;
  let k = 0,
    f = `${g}:${m}`,
    M = p,
    S = null,
    O,
    P = s,
    T = s,
    L = 0;
  Ul(() => clearTimeout(O));
  function z(F) {
    q1.call(this, l, F);
  }
  return (
    (l.$$set = (F) => {
      ("activeTexture" in F && t(15, (p = F.activeTexture)),
        "currentTheme" in F && t(0, (d = F.currentTheme)),
        "animationsEnabled" in F && t(1, (c = F.animationsEnabled)),
        "animationDirection" in F && t(2, (g = F.animationDirection)),
        "randomRevealStyle" in F && t(3, (m = F.randomRevealStyle)),
        "interactive" in F && t(4, (i = F.interactive)),
        "displayOpacity" in F && t(5, (s = F.displayOpacity)));
    }),
    (l.$$.update = () => {
      if (
        (l.$$.dirty & 12 && t(19, (n = g === "random" ? mp(m) : tp())),
        l.$$.dirty & 12 &&
          t(
            13,
            (a =
              g === "random" &&
              (m === "ink-blots" || m === "ripple" || m === "paper-scraps")),
          ),
        l.$$.dirty & 8 && t(12, (u = m === "ripple" ? ao : io)),
        l.$$.dirty & 14 &&
          t(
            11,
            (r =
              c && g === "random" && m === "torn-edge"
                ? { enabled: !0, from: rp, to: op, durationMs: oo }
                : c && g === "random" && m === "corner-curl"
                  ? { enabled: !0, from: sp, to: cp, durationMs: so }
                  : { enabled: !1, from: "", to: "", durationMs: 0 }),
          ),
        l.$$.dirty & 65614)
      ) {
        const F = `${g}:${m}`;
        F !== f && (t(16, (f = F)), c && t(6, k++, k));
      }
      l.$$.dirty & 950690 &&
        (p !== M &&
          (c &&
            (t(9, (S = M)),
            t(10, (T = P)),
            t(8, (L = n)),
            clearTimeout(O),
            t(
              17,
              (O = setTimeout(() => {
                t(9, (S = null));
              }, L)),
            )),
          t(7, (M = p))),
        t(18, (P = s)));
    }),
    [d, c, g, m, i, s, k, M, L, S, T, r, u, a, w, p, f, O, P, n, z]
  );
}
class fo extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Vp, Cp, ve, {
        activeTexture: 15,
        currentTheme: 0,
        animationsEnabled: 1,
        animationDirection: 2,
        randomRevealStyle: 3,
        interactive: 4,
        displayOpacity: 5,
      }));
  }
}
const ha = { onBattery: !1, percent: 255 };
function Sp() {
  const { subscribe: l, set: e } = Tr(ha);
  async function t() {
    try {
      e(await ue("get_battery_status"));
    } catch {
      e(ha);
    }
  }
  return (t(), setInterval(t, 6e4), { subscribe: l, refresh: t });
}
const j0 = Sp(),
  ho = [
    {
      id: "candlelight",
      label: "Soft Candlelight",
      warmth: 0.9,
      spread: 0.25,
      dimming: 0.33,
      position: "top",
    },
    {
      id: "midnight-oil",
      label: "Midnight Oil",
      warmth: 1,
      spread: 0.25,
      dimming: 0.35,
      position: "top-left",
    },
    {
      id: "nook-lantern",
      label: "Nook Lantern",
      warmth: 0.55,
      spread: 0.45,
      dimming: 0.25,
      position: "right",
    },
    {
      id: "gallery-spot",
      label: "Gallery Spot",
      warmth: 0.2,
      spread: 0.6,
      dimming: 0.15,
      position: "top-right",
    },
    {
      id: "golden-hour",
      label: "Golden Hour",
      warmth: 0.75,
      spread: 0.9,
      dimming: 0.37,
      position: "top",
    },
    {
      id: "quiet-aurora",
      label: "Quiet Aurora",
      warmth: 0.47,
      spread: 0.82,
      dimming: 0.12,
      position: "top-left",
    },
  ],
  Zl = ho.find((l) => l.id === "quiet-aurora"),
  Ht = {
    enabled: !1,
    darkOnly: !1,
    position: Zl.position,
    warmth: Zl.warmth,
    spread: Zl.spread,
    dimming: Zl.dimming,
    animateEnter: !0,
  };
function mo(l, e) {
  return !l.enabled || e.locked
    ? !1
    : l.darkOnly
      ? e.currentTheme === "dark"
      : !0;
}
function zp(l) {
  const e = Math.max(0, Math.min(1, l)),
    t = Math.round(250 - e * 35),
    n = Math.round(210 - e * 100),
    a = Math.round(160 - e * 140);
  return { r: t, g: n, b: a };
}
function Pp(l) {
  const e = Math.max(0, Math.min(1, l)),
    t = Math.round(15 + e * 25),
    n = Math.round(65 + e * 30);
  return { innerStop: `${t}%`, outerStop: `${n}%` };
}
function Op(l) {
  switch (l) {
    case "top-left":
      return "0% 0%";
    case "top-right":
      return "100% 0%";
    case "left":
      return "0% 50%";
    case "right":
      return "100% 50%";
    case "top":
    default:
      return "50% 0%";
  }
}
function Tp(l) {
  const { r: e, g: t, b: n } = zp(l.warmth),
    { innerStop: a, outerStop: u } = Pp(l.spread),
    r = Math.round(e * 0.75),
    p = Math.round(t * 0.5),
    d = Math.round(n * 0.25);
  let c = "";
  switch (l.position) {
    case "top-left":
      c = "ellipse 150vw 150vh at 0% 0%";
      break;
    case "top-right":
      c = "ellipse 150vw 150vh at 100% 0%";
      break;
    case "left":
      c = "ellipse 100vw 150vh at 0% 50%";
      break;
    case "right":
      c = "ellipse 100vw 150vh at 100% 50%";
      break;
    case "top":
    default:
      c = "ellipse 150vw 100vh at 50% 0%";
      break;
  }
  return [
    `radial-gradient(${c},`,
    "rgb(255,248,235) 0%,",
    `rgb(${e},${t},${n}) ${a},`,
    `rgb(${r},${p},${d}) ${u},`,
    "rgba(255,245,225,0) 100%)",
  ].join(" ");
}
const Kl = ho;
function Ep(l) {
  var e;
  return (e = Kl.find(
    (t) =>
      t.position === l.position &&
      t.warmth === l.warmth &&
      t.spread === l.spread &&
      t.dimming === l.dimming,
  )) == null
    ? void 0
    : e.id;
}
function ma(l) {
  let e, t;
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        o(t, "class", "desk-lamp-glow svelte-1rwf2dm"),
        ce(t, "background-image", l[6]),
        ce(t, "opacity", l[0]),
        ce(t, "--lamp-origin", l[7]),
        Nt(t, "lamp-enter", l[4] && l[1] && l[3]),
        o(e, "class", "desk-lamp-layer svelte-1rwf2dm"),
        ce(e, "opacity", l[4] && l[5] ? 1 : 0));
    },
    m(n, a) {
      (b(n, e, a), h(e, t));
    },
    p(n, a) {
      (a & 64 && ce(t, "background-image", n[6]),
        a & 1 && ce(t, "opacity", n[0]),
        a & 128 && ce(t, "--lamp-origin", n[7]),
        a & 26 && Nt(t, "lamp-enter", n[4] && n[1] && n[3]),
        a & 48 && ce(e, "opacity", n[4] && n[5] ? 1 : 0));
    },
    d(n) {
      n && _(e);
    },
  };
}
function Dp(l) {
  let e = l[2],
    t,
    n = ma(l);
  return {
    c() {
      (n.c(), (t = c1()));
    },
    m(a, u) {
      (n.m(a, u), b(a, t, u));
    },
    p(a, [u]) {
      u & 4 && ve(e, (e = a[2]))
        ? (n.d(1), (n = ma(a)), n.c(), n.m(t.parentNode, t))
        : n.p(a, u);
    },
    i: A,
    o: A,
    d(a) {
      (a && _(t), n.d(a));
    },
  };
}
function Fp(l, e, t) {
  let n,
    a,
    u,
    { isActive: r = !1 } = e,
    { deskLampEnabled: p = Ht.enabled } = e,
    { deskLampPosition: d = Ht.position } = e,
    { deskLampWarmth: c = Ht.warmth } = e,
    { deskLampSpread: g = Ht.spread } = e,
    { deskLampDimming: m = Ht.dimming } = e,
    { deskLampAnimateEnter: i = Ht.animateEnter } = e,
    { deskLampPresetChangeToken: s = 0 } = e,
    { revealAnimating: w = !1 } = e,
    k = 0,
    f = !1,
    M = !1,
    S = s,
    O = !1,
    P = !1;
  return (
    b0(() => {
      const T = requestAnimationFrame(() => t(5, (P = !0)));
      return () => cancelAnimationFrame(T);
    }),
    (l.$$set = (T) => {
      ("isActive" in T && t(8, (r = T.isActive)),
        "deskLampEnabled" in T && t(9, (p = T.deskLampEnabled)),
        "deskLampPosition" in T && t(10, (d = T.deskLampPosition)),
        "deskLampWarmth" in T && t(11, (c = T.deskLampWarmth)),
        "deskLampSpread" in T && t(12, (g = T.deskLampSpread)),
        "deskLampDimming" in T && t(0, (m = T.deskLampDimming)),
        "deskLampAnimateEnter" in T && t(1, (i = T.deskLampAnimateEnter)),
        "deskLampPresetChangeToken" in T &&
          t(13, (s = T.deskLampPresetChangeToken)),
        "revealAnimating" in T && t(14, (w = T.revealAnimating)));
    }),
    (l.$$.update = () => {
      if (
        (l.$$.dirty & 768 && t(4, (n = p && r)),
        l.$$.dirty & 1024 && t(7, (a = Op(d))),
        l.$$.dirty & 254238)
      ) {
        const T = n && !f;
        ((T || (n && s !== S)) &&
          (t(3, (O = i && !(T && r && !M && w))), O && t(2, k++, k)),
          t(15, (f = n)),
          t(16, (M = r)),
          t(17, (S = s)));
      }
      l.$$.dirty & 7168 &&
        t(6, (u = Tp({ position: d, warmth: c, spread: g })));
    }),
    [m, i, k, O, n, P, u, a, r, p, d, c, g, s, w, f, M, S]
  );
}
class po extends Me {
  constructor(e) {
    (super(),
      Ae(this, e, Fp, Dp, ve, {
        isActive: 8,
        deskLampEnabled: 9,
        deskLampPosition: 10,
        deskLampWarmth: 11,
        deskLampSpread: 12,
        deskLampDimming: 0,
        deskLampAnimateEnter: 1,
        deskLampPresetChangeToken: 13,
        revealAnimating: 14,
      }));
  }
}
const { Boolean: Wp, window: pn } = Cr;
function pa(l, e, t) {
  const n = l.slice();
  return ((n[412] = e[t]), n);
}
function ga(l, e, t) {
  const n = l.slice();
  return ((n[415] = e[t]), n);
}
function _a(l, e, t) {
  const n = l.slice();
  return ((n[418] = e[t]), n);
}
function ba(l, e, t) {
  const n = l.slice();
  return ((n[418] = e[t]), (n[422] = t), n);
}
function Rp(l, e, t) {
  const n = l.slice();
  return ((n[423] = e[t]), n);
}
function va(l, e, t) {
  const n = l.slice();
  return ((n[423] = e[t]), n);
}
function ka(l, e, t) {
  const n = l.slice();
  return ((n[428] = e[t]), n);
}
function wa(l, e, t) {
  const n = l.slice();
  return ((n[423] = e[t]), n);
}
function ya(l) {
  let e, t, n, a;
  return (
    (e = new fo({
      props: {
        activeTexture: l[31],
        currentTheme: l[24],
        animationsEnabled: l[27],
        animationDirection: l[28],
        randomRevealStyle: l[29],
        displayOpacity: l[35],
        interactive: l[37] || l[38],
      },
    })),
    e.$on("click", l[132]),
    (n = new po({
      props: {
        isActive: !0,
        revealAnimating: l[27],
        deskLampEnabled: l[34],
        deskLampPosition: l[14],
        deskLampWarmth: l[15],
        deskLampSpread: l[16],
        deskLampDimming: l[17],
        deskLampAnimateEnter: l[56],
        deskLampPresetChangeToken: l[57],
      },
    })),
    {
      c() {
        (j(e.$$.fragment), (t = Z()), j(n.$$.fragment));
      },
      m(u, r) {
        (B(e, u, r), b(u, t, r), B(n, u, r), (a = !0));
      },
      p(u, r) {
        const p = {};
        (r[1] & 1 && (p.activeTexture = u[31]),
          r[0] & 16777216 && (p.currentTheme = u[24]),
          r[0] & 134217728 && (p.animationsEnabled = u[27]),
          r[0] & 268435456 && (p.animationDirection = u[28]),
          r[0] & 536870912 && (p.randomRevealStyle = u[29]),
          r[1] & 16 && (p.displayOpacity = u[35]),
          r[1] & 192 && (p.interactive = u[37] || u[38]),
          e.$set(p));
        const d = {};
        (r[0] & 134217728 && (d.revealAnimating = u[27]),
          r[1] & 8 && (d.deskLampEnabled = u[34]),
          r[0] & 16384 && (d.deskLampPosition = u[14]),
          r[0] & 32768 && (d.deskLampWarmth = u[15]),
          r[0] & 65536 && (d.deskLampSpread = u[16]),
          r[0] & 131072 && (d.deskLampDimming = u[17]),
          r[1] & 33554432 && (d.deskLampAnimateEnter = u[56]),
          r[1] & 67108864 && (d.deskLampPresetChangeToken = u[57]),
          n.$set(d));
      },
      i(u) {
        a || (C(e.$$.fragment, u), C(n.$$.fragment, u), (a = !0));
      },
      o(u) {
        (V(e.$$.fragment, u), V(n.$$.fragment, u), (a = !1));
      },
      d(u) {
        (u && _(t), q(e, u), q(n, u));
      },
    }
  );
}
function Aa(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("div")), o(e, "class", "modal-backdrop svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), t || ((n = W(e, "click", l[132])), (t = !0)));
    },
    p: A,
    d(a) {
      (a && _(e), (t = !1), n());
    },
  };
}
function Ma(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("div")),
        (t = v("p")),
        (n = K(l[39])),
        o(t, "class", "svelte-17i5oct"),
        o(e, "class", "toast-notification svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), h(e, t), h(t, n));
    },
    p(a, u) {
      u[1] & 256 && ze(n, a[39]);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Za(l) {
  let e, t;
  return (
    (e = new J7({
      props: {
        percent: (l[32] - l[108]) / (l[107] - l[108] || 1),
        textureName: l[131][l[31]] ?? l[31],
        rawPercent: Math.round(l[32] * 100),
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      p(n, a) {
        const u = {};
        ((a[1] & 2) | (a[3] & 49152) &&
          (u.percent = (n[32] - n[108]) / (n[107] - n[108] || 1)),
          a[1] & 1 && (u.textureName = n[131][n[31]] ?? n[31]),
          a[1] & 2 && (u.rawPercent = Math.round(n[32] * 100)),
          e.$set(u));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function Ha(l) {
  let e,
    t,
    n,
    a = l[25] === "light" ? "Light" : "Dark",
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s;
  return {
    c() {
      ((e = v("div")),
        (t = v("p")),
        (n = K("Switch to ")),
        (u = K(a)),
        (r = K(" Mode?")),
        (p = Z()),
        (d = v("div")),
        (c = v("button")),
        (c.textContent = "Switch"),
        (g = Z()),
        (m = v("button")),
        (m.textContent = "Not now"),
        o(t, "class", "svelte-17i5oct"),
        o(c, "class", "theme-confirm-btn confirm svelte-17i5oct"),
        o(m, "class", "theme-confirm-btn dismiss svelte-17i5oct"),
        o(d, "class", "theme-confirm-actions svelte-17i5oct"),
        o(e, "class", "theme-confirm-banner svelte-17i5oct"));
    },
    m(w, k) {
      (b(w, e, k),
        h(e, t),
        h(t, n),
        h(t, u),
        h(t, r),
        h(e, p),
        h(e, d),
        h(d, c),
        h(d, g),
        h(d, m),
        i || ((s = [W(c, "click", l[168]), W(m, "click", l[169])]), (i = !0)));
    },
    p(w, k) {
      k[0] & 33554432 &&
        a !== (a = w[25] === "light" ? "Light" : "Dark") &&
        ze(u, a);
    },
    d(w) {
      (w && _(e), (i = !1), at(s));
    },
  };
}
function Ca(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T = l[6] ? `Snoozed ${l[44]}m` : l[5] ? "Off" : "On",
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae = l[6] ? `${l[44]}m left` : "Snooze",
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He,
    be = Math.round(l[32] * 100) + "",
    fe,
    ke,
    we,
    Oe,
    qe,
    Le,
    Ve,
    Te,
    ot,
    Ke,
    x,
    lt,
    Ne,
    Y,
    de,
    Ce,
    Ee,
    it,
    De,
    je = [],
    Ct = new Map(),
    pt,
    wt,
    Pt,
    Lt,
    Gt,
    mt,
    Yt,
    Ue,
    gt,
    tt,
    Wt,
    It,
    Ot = l[109].state === "ready" && La(l);
  ne = new B6({ props: { size: 16, weight: "fill", color: "#FFF2C9" } });
  let nt = !l[5] && !l[6] && l[45] && Va(l);
  ((Le = new Fn({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })),
    (Y = new g0({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })));
  const Et = [Np, Kp],
    yt = [];
  function _1(ie, ye) {
    return ie[43] ? 0 : 1;
  }
  ((Ce = _1(l)), (Ee = yt[Ce] = Et[Ce](l)));
  let Fe = Mt(l[101]);
  const u1 = (ie) => ie[428];
  for (let ie = 0; ie < Fe.length; ie += 1) {
    let ye = ka(l, Fe, ie),
      Xe = u1(ye);
    Ct.set(Xe, (je[ie] = za(Xe, ye)));
  }
  return (
    (Lt = new Pl({ props: { size: 9, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("div")),
          (a = v("div")),
          (u = v("img")),
          (p = Z()),
          Ot && Ot.c(),
          (d = Z()),
          (c = v("div")),
          (g = v("div")),
          (m = v("button")),
          (i = v("div")),
          (s = v("img")),
          (f = Z()),
          (M = v("div")),
          (S = v("span")),
          (S.textContent = "Paperman Effect"),
          (O = Z()),
          (P = v("span")),
          (L = K(T)),
          (E = Z()),
          (D = v("button")),
          (N = v("div")),
          j(ne.$$.fragment),
          (Q = Z()),
          (X = v("span")),
          (J = K(ae)),
          (ge = Z()),
          nt && nt.c(),
          ($ = Z()),
          (he = v("div")),
          (Re = v("div")),
          (pe = v("div")),
          (G = v("span")),
          (G.textContent = "Intensity"),
          (_e = Z()),
          (He = v("span")),
          (fe = K(be)),
          (ke = K("%")),
          (we = Z()),
          (Oe = v("div")),
          (qe = v("button")),
          j(Le.$$.fragment),
          (Ve = Z()),
          (Te = v("div")),
          (ot = v("div")),
          (Ke = Z()),
          (x = v("input")),
          (lt = Z()),
          (Ne = v("button")),
          j(Y.$$.fragment),
          (de = Z()),
          Ee.c(),
          (it = Z()),
          (De = v("div")));
        for (let ie = 0; ie < je.length; ie += 1) je[ie].c();
        ((pt = Z()),
          (wt = v("button")),
          (Pt = K(`All textures\r\n            `)),
          j(Lt.$$.fragment),
          (mt = Z()),
          (Yt = v("button")),
          (Yt.textContent = "Go to Settings"),
          _0(u.src, (r = "/dark.svg")) || o(u, "src", r),
          o(u, "alt", "Paperman"),
          o(u, "class", "cc-logo svelte-17i5oct"),
          o(u, "draggable", "false"),
          o(a, "class", "cc-branding svelte-17i5oct"),
          Nt(a, "dragging", l[81]),
          _0(s.src, (w = "/icon.png")) || o(s, "src", w),
          o(s, "alt", "Paperman"),
          o(s, "class", "cc-feature-icon-img svelte-17i5oct"),
          o(s, "draggable", "false"),
          o(
            i,
            "class",
            (k =
              "cc-feature-icon " +
              (!l[5] && !l[6] ? "active" : "") +
              " svelte-17i5oct"),
          ),
          o(S, "class", "cc-feature-name svelte-17i5oct"),
          o(P, "class", "cc-feature-status svelte-17i5oct"),
          o(M, "class", "cc-feature-text svelte-17i5oct"),
          o(
            m,
            "class",
            (z =
              "cc-feature-card " +
              (!l[5] && !l[6] ? "active" : "") +
              " svelte-17i5oct"),
          ),
          o(
            m,
            "title",
            (F = l[6]
              ? "Snoozed — click to resume now"
              : l[5]
                ? "Enable Paperman Effect"
                : "Disable Paperman Effect"),
          ),
          o(N, "class", "cc-badge-icon svelte-17i5oct"),
          o(X, "class", "cc-badge-label svelte-17i5oct"),
          o(
            D,
            "class",
            (se =
              "cc-app-badge " +
              (l[6] || l[45] ? "active" : "") +
              " svelte-17i5oct"),
          ),
          (D.disabled = l[5]),
          o(D, "title", (te = l[6] ? "Resume now" : "Snooze")),
          o(g, "class", "cc-feature-row svelte-17i5oct"),
          o(G, "class", "cc-intensity-label svelte-17i5oct"),
          o(He, "class", "cc-intensity-value svelte-17i5oct"),
          o(pe, "class", "cc-intensity-header svelte-17i5oct"),
          o(qe, "class", "cc-intensity-btn svelte-17i5oct"),
          o(qe, "title", "Decrease intensity"),
          o(ot, "class", "cc-slider-fill svelte-17i5oct"),
          ce(ot, "width", ((l[32] - l[108]) / (l[107] - l[108])) * 100 + "%"),
          o(x, "type", "range"),
          o(x, "min", l[108]),
          o(x, "max", l[107]),
          o(x, "step", "0.01"),
          (x.value = l[32]),
          o(x, "class", "cc-slider svelte-17i5oct"),
          o(Te, "class", "cc-slider-track svelte-17i5oct"),
          o(Ne, "class", "cc-intensity-btn svelte-17i5oct"),
          o(Ne, "title", "Increase intensity"),
          o(Oe, "class", "cc-slider-row svelte-17i5oct"),
          o(Re, "class", "cc-intensity-card svelte-17i5oct"),
          o(he, "class", "cc-feature-row cc-intensity-row svelte-17i5oct"),
          o(De, "class", "cc-texture-options svelte-17i5oct"),
          ce(
            De,
            "grid-template-columns",
            "repeat(" + Math.max(l[101].length, 1) + ", 1fr)",
          ),
          o(wt, "class", "cc-edit-pins svelte-17i5oct"),
          o(c, "class", "cc-features svelte-17i5oct"),
          o(n, "class", "cc-panel svelte-17i5oct"),
          Nt(n, "has-update", l[109].state === "ready"),
          o(Yt, "class", "cc-settings-btn svelte-17i5oct"),
          o(t, "class", "cc-wrapper svelte-17i5oct"),
          o(e, "class", "controls-container w-[300px] svelte-17i5oct"),
          o(
            e,
            "style",
            (gt =
              l[77] !== null
                ? `position:fixed; left:${l[77].x}px; top:${l[77].y}px;`
                : l[78] !== null && l[79] !== null
                  ? `position:fixed; left:${l[78]}px; top:${l[79]}px;`
                  : ""),
          ),
          Nt(e, "centered", l[77] === null && l[78] === null));
      },
      m(ie, ye) {
        (b(ie, e, ye),
          h(e, t),
          h(t, n),
          h(n, a),
          h(a, u),
          h(a, p),
          Ot && Ot.m(a, null),
          h(n, d),
          h(n, c),
          h(c, g),
          h(g, m),
          h(m, i),
          h(i, s),
          h(m, f),
          h(m, M),
          h(M, S),
          h(M, O),
          h(M, P),
          h(P, L),
          h(g, E),
          h(g, D),
          h(D, N),
          B(ne, N, null),
          h(D, Q),
          h(D, X),
          h(X, J),
          h(c, ge),
          nt && nt.m(c, null),
          h(c, $),
          h(c, he),
          h(he, Re),
          h(Re, pe),
          h(pe, G),
          h(pe, _e),
          h(pe, He),
          h(He, fe),
          h(He, ke),
          h(Re, we),
          h(Re, Oe),
          h(Oe, qe),
          B(Le, qe, null),
          h(Oe, Ve),
          h(Oe, Te),
          h(Te, ot),
          h(Te, Ke),
          h(Te, x),
          h(Oe, lt),
          h(Oe, Ne),
          B(Y, Ne, null),
          h(he, de),
          yt[Ce].m(he, null),
          h(c, it),
          h(c, De));
        for (let Xe = 0; Xe < je.length; Xe += 1) je[Xe] && je[Xe].m(De, null);
        (h(c, pt),
          h(c, wt),
          h(wt, Pt),
          B(Lt, wt, null),
          h(t, mt),
          h(t, Yt),
          l[225](e),
          (tt = !0),
          Wt ||
            ((It = [
              W(a, "pointerdown", l[125]),
              W(a, "pointermove", l[126]),
              W(a, "pointerup", l[127]),
              W(a, "pointercancel", l[127]),
              E1(G0.call(null, m, 14)),
              W(m, "click", l[150]),
              E1(G0.call(null, D, 14)),
              W(D, "click", l[218]),
              W(qe, "click", l[220]),
              W(x, "input", l[221]),
              W(x, "change", l[173]),
              W(Ne, "click", l[222]),
              E1(G0.call(null, Re, 14)),
              W(wt, "click", l[112]),
              E1(
                (Gt = l[157].call(null, n, {
                  id: 1,
                  radius: 24,
                  dependsOn: [l[78], l[79], l[77]],
                })),
              ),
              E1(
                (Ue = l[157].call(null, Yt, {
                  id: 2,
                  radius: 9999,
                  dependsOn: [l[78], l[79], l[77]],
                })),
              ),
              W(Yt, "click", l[134]),
              W(e, "click", a0(l[215])),
            ]),
            (Wt = !0)));
      },
      p(ie, ye) {
        (ie[109].state === "ready"
          ? Ot
            ? Ot.p(ie, ye)
            : ((Ot = La(ie)), Ot.c(), Ot.m(a, null))
          : Ot && (Ot.d(1), (Ot = null)),
          (!tt || ye[2] & 524288) && Nt(a, "dragging", ie[81]),
          (!tt ||
            (ye[0] & 96 &&
              k !==
                (k =
                  "cc-feature-icon " +
                  (!ie[5] && !ie[6] ? "active" : "") +
                  " svelte-17i5oct"))) &&
            o(i, "class", k),
          (!tt || (ye[0] & 96) | (ye[1] & 8192)) &&
            T !== (T = ie[6] ? `Snoozed ${ie[44]}m` : ie[5] ? "Off" : "On") &&
            ze(L, T),
          (!tt ||
            (ye[0] & 96 &&
              z !==
                (z =
                  "cc-feature-card " +
                  (!ie[5] && !ie[6] ? "active" : "") +
                  " svelte-17i5oct"))) &&
            o(m, "class", z),
          (!tt ||
            (ye[0] & 96 &&
              F !==
                (F = ie[6]
                  ? "Snoozed — click to resume now"
                  : ie[5]
                    ? "Enable Paperman Effect"
                    : "Disable Paperman Effect"))) &&
            o(m, "title", F),
          (!tt || (ye[0] & 64) | (ye[1] & 8192)) &&
            ae !== (ae = ie[6] ? `${ie[44]}m left` : "Snooze") &&
            ze(J, ae),
          (!tt ||
            ((ye[0] & 64) | (ye[1] & 16384) &&
              se !==
                (se =
                  "cc-app-badge " +
                  (ie[6] || ie[45] ? "active" : "") +
                  " svelte-17i5oct"))) &&
            o(D, "class", se),
          (!tt || ye[0] & 32) && (D.disabled = ie[5]),
          (!tt ||
            (ye[0] & 64 && te !== (te = ie[6] ? "Resume now" : "Snooze"))) &&
            o(D, "title", te),
          !ie[5] && !ie[6] && ie[45]
            ? nt
              ? nt.p(ie, ye)
              : ((nt = Va(ie)), nt.c(), nt.m(c, $))
            : nt && (nt.d(1), (nt = null)),
          (!tt || ye[1] & 2) &&
            be !== (be = Math.round(ie[32] * 100) + "") &&
            ze(fe, be),
          (!tt || (ye[1] & 2) | (ye[3] & 49152)) &&
            ce(
              ot,
              "width",
              ((ie[32] - ie[108]) / (ie[107] - ie[108])) * 100 + "%",
            ),
          (!tt || ye[3] & 32768) && o(x, "min", ie[108]),
          (!tt || ye[3] & 16384) && o(x, "max", ie[107]),
          (!tt || ye[1] & 2) && (x.value = ie[32]));
        let Xe = Ce;
        ((Ce = _1(ie)),
          Ce === Xe
            ? yt[Ce].p(ie, ye)
            : (Ie(),
              V(yt[Xe], 1, 1, () => {
                yt[Xe] = null;
              }),
              Be(),
              (Ee = yt[Ce]),
              Ee ? Ee.p(ie, ye) : ((Ee = yt[Ce] = Et[Ce](ie)), Ee.c()),
              C(Ee, 1),
              Ee.m(he, null)),
          (ye[0] & 22020227) |
            (ye[1] & 1) |
            (ye[3] & 33554688) |
            (ye[5] & 262144) &&
            ((Fe = Mt(ie[101])),
            Ie(),
            (je = el(je, ye, u1, 1, ie, Fe, Ct, De, $0, za, null, ka)),
            Be()),
          (!tt || ye[3] & 256) &&
            ce(
              De,
              "grid-template-columns",
              "repeat(" + Math.max(ie[101].length, 1) + ", 1fr)",
            ),
          Gt &&
            g1(Gt.update) &&
            ye[2] & 229376 &&
            Gt.update.call(null, {
              id: 1,
              radius: 24,
              dependsOn: [ie[78], ie[79], ie[77]],
            }),
          (!tt || ye[3] & 65536) &&
            Nt(n, "has-update", ie[109].state === "ready"),
          Ue &&
            g1(Ue.update) &&
            ye[2] & 229376 &&
            Ue.update.call(null, {
              id: 2,
              radius: 9999,
              dependsOn: [ie[78], ie[79], ie[77]],
            }),
          (!tt ||
            (ye[2] & 229376 &&
              gt !==
                (gt =
                  ie[77] !== null
                    ? `position:fixed; left:${ie[77].x}px; top:${ie[77].y}px;`
                    : ie[78] !== null && ie[79] !== null
                      ? `position:fixed; left:${ie[78]}px; top:${ie[79]}px;`
                      : ""))) &&
            o(e, "style", gt),
          (!tt || ye[2] & 98304) &&
            Nt(e, "centered", ie[77] === null && ie[78] === null));
      },
      i(ie) {
        if (!tt) {
          (C(ne.$$.fragment, ie),
            C(Le.$$.fragment, ie),
            C(Y.$$.fragment, ie),
            C(Ee));
          for (let ye = 0; ye < Fe.length; ye += 1) C(je[ye]);
          (C(Lt.$$.fragment, ie), (tt = !0));
        }
      },
      o(ie) {
        (V(ne.$$.fragment, ie),
          V(Le.$$.fragment, ie),
          V(Y.$$.fragment, ie),
          V(Ee));
        for (let ye = 0; ye < je.length; ye += 1) V(je[ye]);
        (V(Lt.$$.fragment, ie), (tt = !1));
      },
      d(ie) {
        (ie && _(e),
          Ot && Ot.d(),
          q(ne),
          nt && nt.d(),
          q(Le),
          q(Y),
          yt[Ce].d());
        for (let ye = 0; ye < je.length; ye += 1) je[ye].d();
        (q(Lt), l[225](null), (Wt = !1), at(It));
      },
    }
  );
}
function La(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("button")),
        (e.textContent = "Click to update"),
        o(e, "type", "button"),
        o(e, "class", "cc-update-btn svelte-17i5oct"),
        o(e, "title", "Open About tab and update Paperman"));
    },
    m(a, u) {
      (b(a, e, u),
        t ||
          ((n = [W(e, "pointerdown", a0(l[216])), W(e, "click", a0(l[135]))]),
          (t = !0)));
    },
    p: A,
    d(a) {
      (a && _(e), (t = !1), at(n));
    },
  };
}
function Va(l) {
  let e,
    t = Mt([1, 5, 10, 15]),
    n = [];
  for (let a = 0; a < 4; a += 1) n[a] = Sa(wa(l, t, a));
  return {
    c() {
      e = v("div");
      for (let a = 0; a < 4; a += 1) n[a].c();
      o(e, "class", "cc-snooze-pills svelte-17i5oct");
    },
    m(a, u) {
      b(a, e, u);
      for (let r = 0; r < 4; r += 1) n[r] && n[r].m(e, null);
    },
    p(a, u) {
      if ((u[1] & 16384) | (u[4] & 268435456)) {
        t = Mt([1, 5, 10, 15]);
        let r;
        for (r = 0; r < 4; r += 1) {
          const p = wa(a, t, r);
          n[r] ? n[r].p(p, u) : ((n[r] = Sa(p)), n[r].c(), n[r].m(e, null));
        }
        for (; r < 4; r += 1) n[r].d(1);
      }
    },
    d(a) {
      (a && _(e), D1(n, a));
    },
  };
}
function Sa(l) {
  let e, t, n;
  function a() {
    return l[219](l[423]);
  }
  return {
    c() {
      ((e = v("button")),
        (e.textContent = `${l[423]}m`),
        o(e, "class", "cc-snooze-pill svelte-17i5oct"));
    },
    m(u, r) {
      (b(u, e, r), t || ((n = W(e, "click", a)), (t = !0)));
    },
    p(u, r) {
      l = u;
    },
    d(u) {
      (u && _(e), (t = !1), n());
    },
  };
}
function Kp(l) {
  let e, t, n, a, u, r, p, d;
  return (
    (n = new ql({ props: { size: 16, weight: "bold", color: "#FFF2C9" } })),
    {
      c() {
        ((e = v("button")),
          (t = v("div")),
          j(n.$$.fragment),
          (a = Z()),
          (u = v("span")),
          (u.textContent = "Close"),
          o(t, "class", "cc-badge-icon svelte-17i5oct"),
          o(u, "class", "cc-badge-label svelte-17i5oct"),
          o(e, "class", "cc-app-badge active svelte-17i5oct"),
          o(e, "title", "Close"));
      },
      m(c, g) {
        (b(c, e, g),
          h(e, t),
          B(n, t, null),
          h(e, a),
          h(e, u),
          (r = !0),
          p ||
            ((d = [E1(G0.call(null, e, 14)), W(e, "click", l[132])]),
            (p = !0)));
      },
      p: A,
      i(c) {
        r || (C(n.$$.fragment, c), (r = !0));
      },
      o(c) {
        (V(n.$$.fragment, c), (r = !1));
      },
      d(c) {
        (c && _(e), q(n), (p = !1), at(d));
      },
    }
  );
}
function Np(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p = l[42] ? "Enable for " + w1(l[43]) : "Disable for " + w1(l[43]),
    d,
    c,
    g,
    m,
    i,
    s;
  const w = [Ip, Up],
    k = [];
  function f(M, S) {
    return M[42] ? 0 : 1;
  }
  return (
    (n = f(l)),
    (a = k[n] = w[n](l)),
    {
      c() {
        ((e = v("button")),
          (t = v("div")),
          a.c(),
          (u = Z()),
          (r = v("span")),
          (d = K(p)),
          o(t, "class", "cc-badge-icon svelte-17i5oct"),
          o(r, "class", "cc-badge-label svelte-17i5oct"),
          o(
            e,
            "class",
            (c = "cc-app-badge " + (l[42] ? "" : "active") + " svelte-17i5oct"),
          ),
          o(
            e,
            "title",
            (g = l[42]
              ? `Enable for ${w1(l[43])}`
              : `Disable for ${w1(l[43])}`),
          ));
      },
      m(M, S) {
        (b(M, e, S),
          h(e, t),
          k[n].m(t, null),
          h(e, u),
          h(e, r),
          h(r, d),
          (m = !0),
          i ||
            ((s = [E1(G0.call(null, e, 14)), W(e, "click", l[153])]),
            (i = !0)));
      },
      p(M, S) {
        let O = n;
        ((n = f(M)),
          n !== O &&
            (Ie(),
            V(k[O], 1, 1, () => {
              k[O] = null;
            }),
            Be(),
            (a = k[n]),
            a || ((a = k[n] = w[n](M)), a.c()),
            C(a, 1),
            a.m(t, null)),
          (!m || S[1] & 6144) &&
            p !==
              (p = M[42]
                ? "Enable for " + w1(M[43])
                : "Disable for " + w1(M[43])) &&
            ze(d, p),
          (!m ||
            (S[1] & 2048 &&
              c !==
                (c =
                  "cc-app-badge " +
                  (M[42] ? "" : "active") +
                  " svelte-17i5oct"))) &&
            o(e, "class", c),
          (!m ||
            (S[1] & 6144 &&
              g !==
                (g = M[42]
                  ? `Enable for ${w1(M[43])}`
                  : `Disable for ${w1(M[43])}`))) &&
            o(e, "title", g));
      },
      i(M) {
        m || (C(a), (m = !0));
      },
      o(M) {
        (V(a), (m = !1));
      },
      d(M) {
        (M && _(e), k[n].d(), (i = !1), at(s));
      },
    }
  );
}
function Up(l) {
  let e, t;
  return (
    (e = new Bl({ props: { size: 16, weight: "fill", color: "#FFF2C9" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function Ip(l) {
  let e, t;
  return (
    (e = new En({ props: { size: 16, weight: "fill", color: "#FFF2C9" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function za(l, e) {
  let t, n, a;
  function u() {
    return e[223](e[428]);
  }
  return (
    (n = new Nn({
      props: {
        id: e[428],
        icon: S0[e[428]].icon,
        lines: S0[e[428]].lines,
        active: e[31] === e[428],
        locked: e[118](e[428]),
        badge: S0[e[428]].new ? "NEW" : "",
      },
    })),
    n.$on("select", u),
    n.$on("locked", e[224]),
    {
      key: l,
      first: null,
      c() {
        ((t = c1()), j(n.$$.fragment), (this.first = t));
      },
      m(r, p) {
        (b(r, t, p), B(n, r, p), (a = !0));
      },
      p(r, p) {
        e = r;
        const d = {};
        (p[3] & 256 && (d.id = e[428]),
          p[3] & 256 && (d.icon = S0[e[428]].icon),
          p[3] & 256 && (d.lines = S0[e[428]].lines),
          (p[1] & 1) | (p[3] & 256) && (d.active = e[31] === e[428]),
          p[3] & 256 && (d.locked = e[118](e[428])),
          p[3] & 256 && (d.badge = S0[e[428]].new ? "NEW" : ""),
          n.$set(d));
      },
      i(r) {
        a || (C(n.$$.fragment, r), (a = !0));
      },
      o(r) {
        (V(n.$$.fragment, r), (a = !1));
      },
      d(r) {
        (r && _(t), q(n, r));
      },
    }
  );
}
function Pa(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He,
    be,
    fe,
    ke,
    we,
    Oe,
    qe,
    Le,
    Ve,
    Te,
    ot,
    Ke,
    x,
    lt,
    Ne,
    Y,
    de,
    Ce,
    Ee,
    it,
    De,
    je,
    Ct,
    pt,
    wt,
    Pt,
    Lt,
    Gt,
    mt,
    Yt,
    Ue,
    gt,
    tt,
    Wt,
    It,
    Ot,
    nt,
    Et,
    yt,
    _1,
    Fe,
    u1,
    ie,
    ye,
    Xe,
    o1,
    Ut,
    Qt,
    f1,
    Bt,
    Rt,
    Zt,
    xt,
    $t,
    _t,
    L1,
    d1,
    ut = l[46] && Oa(l);
  ((w = new Bl({ props: { size: 12, weight: "fill" } })),
    (P = new jr({ props: { size: 12, weight: "fill" } })),
    (D = new Ir({ props: { size: 12, weight: "fill" } })),
    (se = new Rr({ props: { size: 12, weight: "fill" } })),
    (pe = new En({ props: { size: 12, weight: "fill" } })),
    (ke = new qr({ props: { size: 12, weight: "fill" } })),
    (Te = new Ur({ props: { size: 12, weight: "fill" } })),
    (Y = new Nr({ props: { size: 12, weight: "fill" } })));
  let me = l[18] && Ta(l);
  ((Ct = new Br({ props: { size: 12, weight: "fill" } })),
    (mt = new Kr({ props: { size: 12, weight: "fill" } })),
    (It = new Hu({ props: { size: 12, weight: "fill" } })));
  let We = l[26] === "protection" && Da(l),
    rt = l[26] === "shortcuts" && qa(l),
    Vt = l[26] === "circadian" && Xa(l),
    St = l[26] === "exceptions" && Ya(l),
    bt = l[26] === "license" && $a(l),
    vt = l[26] === "display" && er(l),
    kt = l[26] === "texture" && tr(l),
    Tt = l[26] === "desklamp" && nr(l),
    Dt = l[26] === "refer" && l[18] && or(l),
    ct = l[26] === "support" && sr(l),
    At = l[26] === "community" && hr(l),
    ht = l[26] === "about" && mr(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (a = v("nav")),
        (u = v("div")),
        (r = v("div")),
        (p = v("img")),
        (c = Z()),
        ut && ut.c(),
        (g = Z()),
        (m = v("div")),
        (i = v("button")),
        (s = v("span")),
        j(w.$$.fragment),
        (k = K(`\r\n                Protection`)),
        (M = Z()),
        (S = v("button")),
        (O = v("span")),
        j(P.$$.fragment),
        (T = K(`\r\n                Textures`)),
        (z = Z()),
        (F = v("button")),
        (E = v("span")),
        j(D.$$.fragment),
        (N = K(`\r\n                Desk Lamp\r\n                `)),
        (ne = v("span")),
        (ne.textContent = "Preview"),
        (X = Z()),
        (ae = v("button")),
        (J = v("span")),
        j(se.$$.fragment),
        (te = K(`\r\n                Circadian Rhythm`)),
        ($ = Z()),
        (he = v("button")),
        (Re = v("span")),
        j(pe.$$.fragment),
        (G = K(`\r\n                Exceptions`)),
        (He = Z()),
        (be = v("button")),
        (fe = v("span")),
        j(ke.$$.fragment),
        (we = K(`\r\n                Display`)),
        (qe = Z()),
        (Le = v("button")),
        (Ve = v("span")),
        j(Te.$$.fragment),
        (ot = K(`\r\n                Hot Keys`)),
        (x = Z()),
        (lt = v("button")),
        (Ne = v("span")),
        j(Y.$$.fragment),
        (de = K(`\r\n                License`)),
        (Ee = Z()),
        me && me.c(),
        (it = Z()),
        (De = v("button")),
        (je = v("span")),
        j(Ct.$$.fragment),
        (pt = K(`\r\n                Support`)),
        (Pt = Z()),
        (Lt = v("button")),
        (Gt = v("span")),
        j(mt.$$.fragment),
        (Yt = K(`\r\n                Community`)),
        (gt = Z()),
        (tt = v("button")),
        (Wt = v("span")),
        j(It.$$.fragment),
        (Ot = K(`\r\n                About`)),
        (Et = Z()),
        (yt = v("button")),
        (yt.textContent = "Reset to defaults"),
        (_1 = Z()),
        (Fe = v("div")),
        We && We.c(),
        (u1 = Z()),
        rt && rt.c(),
        (ie = Z()),
        Vt && Vt.c(),
        (ye = Z()),
        St && St.c(),
        (Xe = Z()),
        bt && bt.c(),
        (o1 = Z()),
        vt && vt.c(),
        (Ut = Z()),
        kt && kt.c(),
        (Qt = Z()),
        Tt && Tt.c(),
        (f1 = Z()),
        Dt && Dt.c(),
        (Bt = Z()),
        ct && ct.c(),
        (Rt = Z()),
        At && At.c(),
        (Zt = Z()),
        ht && ht.c(),
        _0(p.src, (d = "/dark.svg")) || o(p, "src", d),
        o(p, "alt", "Paperman"),
        o(p, "class", "sidebar-logo svelte-17i5oct"),
        o(r, "class", "sidebar-logo-row svelte-17i5oct"),
        Nt(r, "dragging", l[85]),
        o(s, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          i,
          "class",
          (f =
            "settings-tab " +
            (l[26] === "protection" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(O, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          S,
          "class",
          (L =
            "settings-tab " +
            (l[26] === "texture" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(E, "class", "tab-icon-wrap svelte-17i5oct"),
        o(ne, "class", "tab-tag tab-tag-compact svelte-17i5oct"),
        o(
          F,
          "class",
          (Q =
            "settings-tab " +
            (l[26] === "desklamp" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(J, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          ae,
          "class",
          (ge =
            "settings-tab " +
            (l[26] === "circadian" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(Re, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          he,
          "class",
          (_e =
            "settings-tab " +
            (l[26] === "exceptions" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(fe, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          be,
          "class",
          (Oe =
            "settings-tab " +
            (l[26] === "display" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(Ve, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          Le,
          "class",
          (Ke =
            "settings-tab " +
            (l[26] === "shortcuts" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(Ne, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          lt,
          "class",
          (Ce =
            "settings-tab " +
            (l[26] === "license" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(je, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          De,
          "class",
          (wt =
            "settings-tab " +
            (l[26] === "support" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(Gt, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          Lt,
          "class",
          (Ue =
            "settings-tab " +
            (l[26] === "community" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(Wt, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          tt,
          "class",
          (nt =
            "settings-tab " +
            (l[26] === "about" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(yt, "class", "reset-defaults-btn svelte-17i5oct"),
        o(m, "class", "settings-tabs-list svelte-17i5oct"),
        o(u, "class", "sidebar-top svelte-17i5oct"),
        o(a, "class", "settings-tabs svelte-17i5oct"),
        o(Fe, "class", "settings-content svelte-17i5oct"),
        o(n, "class", "settings-container svelte-17i5oct"),
        o(t, "class", "paper-panel settings-panel svelte-17i5oct"),
        o(e, "class", "controls-container w-[90%] max-w-2xl svelte-17i5oct"),
        o(
          e,
          "style",
          ($t =
            l[82] !== null && l[83] !== null
              ? `position:fixed; left:${l[82]}px; top:${l[83]}px;`
              : ""),
        ),
        Nt(e, "centered", l[82] === null));
    },
    m(le, Pe) {
      (b(le, e, Pe),
        h(e, t),
        h(t, n),
        h(n, a),
        h(a, u),
        h(u, r),
        h(r, p),
        h(r, c),
        ut && ut.m(r, null),
        h(u, g),
        h(u, m),
        h(m, i),
        h(i, s),
        B(w, s, null),
        h(i, k),
        h(m, M),
        h(m, S),
        h(S, O),
        B(P, O, null),
        h(S, T),
        h(m, z),
        h(m, F),
        h(F, E),
        B(D, E, null),
        h(F, N),
        h(F, ne),
        h(m, X),
        h(m, ae),
        h(ae, J),
        B(se, J, null),
        h(ae, te),
        h(m, $),
        h(m, he),
        h(he, Re),
        B(pe, Re, null),
        h(he, G),
        h(m, He),
        h(m, be),
        h(be, fe),
        B(ke, fe, null),
        h(be, we),
        h(m, qe),
        h(m, Le),
        h(Le, Ve),
        B(Te, Ve, null),
        h(Le, ot),
        h(m, x),
        h(m, lt),
        h(lt, Ne),
        B(Y, Ne, null),
        h(lt, de),
        h(m, Ee),
        me && me.m(m, null),
        h(m, it),
        h(m, De),
        h(De, je),
        B(Ct, je, null),
        h(De, pt),
        h(m, Pt),
        h(m, Lt),
        h(Lt, Gt),
        B(mt, Gt, null),
        h(Lt, Yt),
        h(m, gt),
        h(m, tt),
        h(tt, Wt),
        B(It, Wt, null),
        h(tt, Ot),
        h(m, Et),
        h(m, yt),
        h(n, _1),
        h(n, Fe),
        We && We.m(Fe, null),
        h(Fe, u1),
        rt && rt.m(Fe, null),
        h(Fe, ie),
        Vt && Vt.m(Fe, null),
        h(Fe, ye),
        St && St.m(Fe, null),
        h(Fe, Xe),
        bt && bt.m(Fe, null),
        h(Fe, o1),
        vt && vt.m(Fe, null),
        h(Fe, Ut),
        kt && kt.m(Fe, null),
        h(Fe, Qt),
        Tt && Tt.m(Fe, null),
        h(Fe, f1),
        Dt && Dt.m(Fe, null),
        h(Fe, Bt),
        ct && ct.m(Fe, null),
        h(Fe, Rt),
        At && At.m(Fe, null),
        h(Fe, Zt),
        ht && ht.m(Fe, null),
        l[340](e),
        (_t = !0),
        L1 ||
          ((d1 = [
            W(r, "pointerdown", l[128]),
            W(r, "pointermove", l[129]),
            W(r, "pointerup", l[130]),
            W(r, "pointercancel", l[130]),
            W(i, "click", l[226]),
            W(S, "click", l[227]),
            W(F, "click", l[228]),
            W(ae, "click", l[229]),
            W(he, "click", l[230]),
            W(be, "click", l[231]),
            W(Le, "click", l[232]),
            W(lt, "click", l[233]),
            W(De, "click", l[235]),
            W(Lt, "click", l[236]),
            W(tt, "click", l[237]),
            W(yt, "click", l[172]),
            E1(
              (xt = l[157].call(null, t, {
                id: 3,
                radius: 32,
                dependsOn: [l[82], l[83]],
              })),
            ),
            W(e, "click", a0(l[213])),
          ]),
          (L1 = !0)));
    },
    p(le, Pe) {
      (le[46]
        ? ut
          ? ut.p(le, Pe)
          : ((ut = Oa(le)), ut.c(), ut.m(r, null))
        : ut && (ut.d(1), (ut = null)),
        (!_t || Pe[2] & 8388608) && Nt(r, "dragging", le[85]),
        (!_t ||
          (Pe[0] & 67108864 &&
            f !==
              (f =
                "settings-tab " +
                (le[26] === "protection" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(i, "class", f),
        (!_t ||
          (Pe[0] & 67108864 &&
            L !==
              (L =
                "settings-tab " +
                (le[26] === "texture" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(S, "class", L),
        (!_t ||
          (Pe[0] & 67108864 &&
            Q !==
              (Q =
                "settings-tab " +
                (le[26] === "desklamp" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(F, "class", Q),
        (!_t ||
          (Pe[0] & 67108864 &&
            ge !==
              (ge =
                "settings-tab " +
                (le[26] === "circadian" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(ae, "class", ge),
        (!_t ||
          (Pe[0] & 67108864 &&
            _e !==
              (_e =
                "settings-tab " +
                (le[26] === "exceptions" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(he, "class", _e),
        (!_t ||
          (Pe[0] & 67108864 &&
            Oe !==
              (Oe =
                "settings-tab " +
                (le[26] === "display" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(be, "class", Oe),
        (!_t ||
          (Pe[0] & 67108864 &&
            Ke !==
              (Ke =
                "settings-tab " +
                (le[26] === "shortcuts" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(Le, "class", Ke),
        (!_t ||
          (Pe[0] & 67108864 &&
            Ce !==
              (Ce =
                "settings-tab " +
                (le[26] === "license" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(lt, "class", Ce),
        le[18]
          ? me
            ? (me.p(le, Pe), Pe[0] & 262144 && C(me, 1))
            : ((me = Ta(le)), me.c(), C(me, 1), me.m(m, it))
          : me &&
            (Ie(),
            V(me, 1, 1, () => {
              me = null;
            }),
            Be()),
        (!_t ||
          (Pe[0] & 67108864 &&
            wt !==
              (wt =
                "settings-tab " +
                (le[26] === "support" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(De, "class", wt),
        (!_t ||
          (Pe[0] & 67108864 &&
            Ue !==
              (Ue =
                "settings-tab " +
                (le[26] === "community" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(Lt, "class", Ue),
        (!_t ||
          (Pe[0] & 67108864 &&
            nt !==
              (nt =
                "settings-tab " +
                (le[26] === "about" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(tt, "class", nt),
        le[26] === "protection"
          ? We
            ? (We.p(le, Pe), Pe[0] & 67108864 && C(We, 1))
            : ((We = Da(le)), We.c(), C(We, 1), We.m(Fe, u1))
          : We &&
            (Ie(),
            V(We, 1, 1, () => {
              We = null;
            }),
            Be()),
        le[26] === "shortcuts"
          ? rt
            ? (rt.p(le, Pe), Pe[0] & 67108864 && C(rt, 1))
            : ((rt = qa(le)), rt.c(), C(rt, 1), rt.m(Fe, ie))
          : rt &&
            (Ie(),
            V(rt, 1, 1, () => {
              rt = null;
            }),
            Be()),
        le[26] === "circadian"
          ? Vt
            ? (Vt.p(le, Pe), Pe[0] & 67108864 && C(Vt, 1))
            : ((Vt = Xa(le)), Vt.c(), C(Vt, 1), Vt.m(Fe, ye))
          : Vt &&
            (Ie(),
            V(Vt, 1, 1, () => {
              Vt = null;
            }),
            Be()),
        le[26] === "exceptions"
          ? St
            ? (St.p(le, Pe), Pe[0] & 67108864 && C(St, 1))
            : ((St = Ya(le)), St.c(), C(St, 1), St.m(Fe, Xe))
          : St &&
            (Ie(),
            V(St, 1, 1, () => {
              St = null;
            }),
            Be()),
        le[26] === "license"
          ? bt
            ? (bt.p(le, Pe), Pe[0] & 67108864 && C(bt, 1))
            : ((bt = $a(le)), bt.c(), C(bt, 1), bt.m(Fe, o1))
          : bt &&
            (Ie(),
            V(bt, 1, 1, () => {
              bt = null;
            }),
            Be()),
        le[26] === "display"
          ? vt
            ? (vt.p(le, Pe), Pe[0] & 67108864 && C(vt, 1))
            : ((vt = er(le)), vt.c(), C(vt, 1), vt.m(Fe, Ut))
          : vt &&
            (Ie(),
            V(vt, 1, 1, () => {
              vt = null;
            }),
            Be()),
        le[26] === "texture"
          ? kt
            ? (kt.p(le, Pe), Pe[0] & 67108864 && C(kt, 1))
            : ((kt = tr(le)), kt.c(), C(kt, 1), kt.m(Fe, Qt))
          : kt &&
            (Ie(),
            V(kt, 1, 1, () => {
              kt = null;
            }),
            Be()),
        le[26] === "desklamp"
          ? Tt
            ? (Tt.p(le, Pe), Pe[0] & 67108864 && C(Tt, 1))
            : ((Tt = nr(le)), Tt.c(), C(Tt, 1), Tt.m(Fe, f1))
          : Tt &&
            (Ie(),
            V(Tt, 1, 1, () => {
              Tt = null;
            }),
            Be()),
        le[26] === "refer" && le[18]
          ? Dt
            ? (Dt.p(le, Pe), Pe[0] & 67371008 && C(Dt, 1))
            : ((Dt = or(le)), Dt.c(), C(Dt, 1), Dt.m(Fe, Bt))
          : Dt &&
            (Ie(),
            V(Dt, 1, 1, () => {
              Dt = null;
            }),
            Be()),
        le[26] === "support"
          ? ct
            ? (ct.p(le, Pe), Pe[0] & 67108864 && C(ct, 1))
            : ((ct = sr(le)), ct.c(), C(ct, 1), ct.m(Fe, Rt))
          : ct &&
            (Ie(),
            V(ct, 1, 1, () => {
              ct = null;
            }),
            Be()),
        le[26] === "community"
          ? At
            ? (At.p(le, Pe), Pe[0] & 67108864 && C(At, 1))
            : ((At = hr(le)), At.c(), C(At, 1), At.m(Fe, Zt))
          : At &&
            (Ie(),
            V(At, 1, 1, () => {
              At = null;
            }),
            Be()),
        le[26] === "about"
          ? ht
            ? (ht.p(le, Pe), Pe[0] & 67108864 && C(ht, 1))
            : ((ht = mr(le)), ht.c(), C(ht, 1), ht.m(Fe, null))
          : ht &&
            (Ie(),
            V(ht, 1, 1, () => {
              ht = null;
            }),
            Be()),
        xt &&
          g1(xt.update) &&
          Pe[2] & 3145728 &&
          xt.update.call(null, {
            id: 3,
            radius: 32,
            dependsOn: [le[82], le[83]],
          }),
        (!_t ||
          (Pe[2] & 3145728 &&
            $t !==
              ($t =
                le[82] !== null && le[83] !== null
                  ? `position:fixed; left:${le[82]}px; top:${le[83]}px;`
                  : ""))) &&
          o(e, "style", $t),
        (!_t || Pe[2] & 1048576) && Nt(e, "centered", le[82] === null));
    },
    i(le) {
      _t ||
        (C(w.$$.fragment, le),
        C(P.$$.fragment, le),
        C(D.$$.fragment, le),
        C(se.$$.fragment, le),
        C(pe.$$.fragment, le),
        C(ke.$$.fragment, le),
        C(Te.$$.fragment, le),
        C(Y.$$.fragment, le),
        C(me),
        C(Ct.$$.fragment, le),
        C(mt.$$.fragment, le),
        C(It.$$.fragment, le),
        C(We),
        C(rt),
        C(Vt),
        C(St),
        C(bt),
        C(vt),
        C(kt),
        C(Tt),
        C(Dt),
        C(ct),
        C(At),
        C(ht),
        (_t = !0));
    },
    o(le) {
      (V(w.$$.fragment, le),
        V(P.$$.fragment, le),
        V(D.$$.fragment, le),
        V(se.$$.fragment, le),
        V(pe.$$.fragment, le),
        V(ke.$$.fragment, le),
        V(Te.$$.fragment, le),
        V(Y.$$.fragment, le),
        V(me),
        V(Ct.$$.fragment, le),
        V(mt.$$.fragment, le),
        V(It.$$.fragment, le),
        V(We),
        V(rt),
        V(Vt),
        V(St),
        V(bt),
        V(vt),
        V(kt),
        V(Tt),
        V(Dt),
        V(ct),
        V(At),
        V(ht),
        (_t = !1));
    },
    d(le) {
      (le && _(e),
        ut && ut.d(),
        q(w),
        q(P),
        q(D),
        q(se),
        q(pe),
        q(ke),
        q(Te),
        q(Y),
        me && me.d(),
        q(Ct),
        q(mt),
        q(It),
        We && We.d(),
        rt && rt.d(),
        Vt && Vt.d(),
        St && St.d(),
        bt && bt.d(),
        vt && vt.d(),
        kt && kt.d(),
        Tt && Tt.d(),
        Dt && Dt.d(),
        ct && ct.d(),
        At && At.d(),
        ht && ht.d(),
        l[340](null),
        (L1 = !1),
        at(d1));
    },
  };
}
function Oa(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("span")),
        (t = K("v")),
        (n = K(l[46])),
        o(e, "class", "sidebar-version svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), h(e, t), h(e, n));
    },
    p(a, u) {
      u[1] & 32768 && ze(n, a[46]);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Ta(l) {
  let e, t, n, a, u, r, p, d;
  n = new Tn({ props: { size: 12, weight: "fill" } });
  let c = !l[99] && Ea();
  return {
    c() {
      ((e = v("button")),
        (t = v("span")),
        j(n.$$.fragment),
        (a = K(`\r\n                  Refer\r\n                  `)),
        c && c.c(),
        o(t, "class", "tab-icon-wrap svelte-17i5oct"),
        o(
          e,
          "class",
          (u =
            "settings-tab " +
            (l[26] === "refer" ? "active" : "") +
            " svelte-17i5oct"),
        ));
    },
    m(g, m) {
      (b(g, e, m),
        h(e, t),
        B(n, t, null),
        h(e, a),
        c && c.m(e, null),
        (r = !0),
        p || ((d = W(e, "click", l[234])), (p = !0)));
    },
    p(g, m) {
      (g[99]
        ? c && (c.d(1), (c = null))
        : c || ((c = Ea()), c.c(), c.m(e, null)),
        (!r ||
          (m[0] & 67108864 &&
            u !==
              (u =
                "settings-tab " +
                (g[26] === "refer" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(e, "class", u));
    },
    i(g) {
      r || (C(n.$$.fragment, g), (r = !0));
    },
    o(g) {
      (V(n.$$.fragment, g), (r = !1));
    },
    d(g) {
      (g && _(e), q(n), c && c.d(), (p = !1), d());
    },
  };
}
function Ea(l) {
  let e;
  return {
    c() {
      ((e = v("span")),
        (e.textContent = "New"),
        o(e, "class", "tab-tag svelte-17i5oct"));
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Da(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He,
    be,
    fe,
    ke,
    we,
    Oe,
    qe,
    Le,
    Ve,
    Te,
    ot,
    Ke,
    x,
    lt,
    Ne;
  a = new Bl({ props: { size: 16, weight: "fill" } });
  let Y = l[47] && Fa(l),
    de = l[47] && Ra(l),
    Ce = jp(l),
    Ee = l[30] !== "never" && Ua(l);
  ((fe = new bp({
    props: { options: vp, value: l[100], ariaLabel: "Texture reveal effect" },
  })),
    fe.$on("change", l[249]));
  let it = l[7] === "macos" && Ia(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        j(a.$$.fragment),
        (u = Z()),
        (r = v("h4")),
        (r.textContent = "Protection Schedule"),
        (p = Z()),
        (d = v("div")),
        (c = v("div")),
        (g = v("span")),
        (g.textContent = "Paperman Effect"),
        (m = Z()),
        (i = v("label")),
        (s = v("input")),
        (w = Z()),
        (k = v("span")),
        (f = Z()),
        Y && Y.c(),
        (S = Z()),
        de && de.c(),
        (O = Z()),
        Ce && Ce.c(),
        (P = Z()),
        (T = v("div")),
        (L = v("div")),
        (z = v("span")),
        (z.textContent = "Turn off Paperman on battery"),
        (F = Z()),
        (E = v("label")),
        (D = v("input")),
        (ne = Z()),
        (Q = v("span")),
        (X = Z()),
        Ee && Ee.c(),
        (J = Z()),
        (se = v("div")),
        (te = v("span")),
        (te.textContent = "Paper sound on toggle"),
        (ge = Z()),
        ($ = v("label")),
        (he = v("input")),
        (Re = Z()),
        (pe = v("span")),
        (G = Z()),
        (_e = v("div")),
        (He = v("span")),
        (He.textContent = "Texture reveal"),
        (be = Z()),
        j(fe.$$.fragment),
        (ke = Z()),
        (we = v("div")),
        (Oe = v("span")),
        (Oe.textContent = "Hide from screenshots"),
        (qe = Z()),
        (Le = v("label")),
        (Ve = v("input")),
        (Te = Z()),
        (ot = v("span")),
        (Ke = Z()),
        it && it.c(),
        o(n, "class", "section-icon-wrap svelte-17i5oct"),
        o(r, "class", "settings-heading svelte-17i5oct"),
        o(t, "class", "section-header svelte-17i5oct"),
        o(g, "class", "toggle-label svelte-17i5oct"),
        o(s, "type", "checkbox"),
        (s.checked = l[47]),
        o(s, "class", "svelte-17i5oct"),
        o(k, "class", "slider svelte-17i5oct"),
        o(i, "class", "toggle-switch svelte-17i5oct"),
        o(c, "class", "toggle-option-row svelte-17i5oct"),
        o(
          d,
          "class",
          (M =
            "toggle-option " +
            (l[47] ? "toggle-option-expanded" : "") +
            " svelte-17i5oct"),
        ),
        o(z, "class", "toggle-label svelte-17i5oct"),
        o(D, "type", "checkbox"),
        (D.checked = N = l[30] !== "never"),
        o(D, "class", "svelte-17i5oct"),
        o(Q, "class", "slider svelte-17i5oct"),
        o(E, "class", "toggle-switch svelte-17i5oct"),
        o(L, "class", "toggle-option-row svelte-17i5oct"),
        o(
          T,
          "class",
          (ae =
            "toggle-option " +
            (l[30] !== "never" ? "toggle-option-expanded" : "") +
            " svelte-17i5oct"),
        ),
        o(te, "class", "toggle-label svelte-17i5oct"),
        o(he, "type", "checkbox"),
        o(he, "class", "svelte-17i5oct"),
        o(pe, "class", "slider svelte-17i5oct"),
        o($, "class", "toggle-switch svelte-17i5oct"),
        o(se, "class", "toggle-option svelte-17i5oct"),
        o(He, "class", "toggle-label svelte-17i5oct"),
        o(_e, "class", "toggle-option toggle-option-control svelte-17i5oct"),
        o(Oe, "class", "toggle-label svelte-17i5oct"),
        o(Ve, "type", "checkbox"),
        o(Ve, "class", "svelte-17i5oct"),
        o(ot, "class", "slider svelte-17i5oct"),
        o(Le, "class", "toggle-switch svelte-17i5oct"),
        o(we, "class", "toggle-option svelte-17i5oct"),
        o(e, "class", "settings-section svelte-17i5oct"));
    },
    m(De, je) {
      (b(De, e, je),
        h(e, t),
        h(t, n),
        B(a, n, null),
        h(t, u),
        h(t, r),
        h(e, p),
        h(e, d),
        h(d, c),
        h(c, g),
        h(c, m),
        h(c, i),
        h(i, s),
        h(i, w),
        h(i, k),
        h(d, f),
        Y && Y.m(d, null),
        h(e, S),
        de && de.m(e, null),
        h(e, O),
        Ce && Ce.m(e, null),
        h(e, P),
        h(e, T),
        h(T, L),
        h(L, z),
        h(L, F),
        h(L, E),
        h(E, D),
        h(E, ne),
        h(E, Q),
        h(T, X),
        Ee && Ee.m(T, null),
        h(e, J),
        h(e, se),
        h(se, te),
        h(se, ge),
        h(se, $),
        h($, he),
        (he.checked = l[69]),
        h($, Re),
        h($, pe),
        h(e, G),
        h(e, _e),
        h(_e, He),
        h(_e, be),
        B(fe, _e, null),
        h(e, ke),
        h(e, we),
        h(we, Oe),
        h(we, qe),
        h(we, Le),
        h(Le, Ve),
        (Ve.checked = l[70]),
        h(Le, Te),
        h(Le, ot),
        h(e, Ke),
        it && it.m(e, null),
        (x = !0),
        lt ||
          ((Ne = [
            W(s, "change", l[151]),
            W(D, "change", l[142]),
            W(he, "change", l[248]),
            W(he, "change", l[173]),
            W(Ve, "change", l[250]),
            W(Ve, "change", l[138]),
          ]),
          (lt = !0)));
    },
    p(De, je) {
      ((!x || je[1] & 65536) && (s.checked = De[47]),
        De[47]
          ? Y
            ? (Y.p(De, je), je[1] & 65536 && C(Y, 1))
            : ((Y = Fa(De)), Y.c(), C(Y, 1), Y.m(d, null))
          : Y &&
            (Ie(),
            V(Y, 1, 1, () => {
              Y = null;
            }),
            Be()),
        (!x ||
          (je[1] & 65536 &&
            M !==
              (M =
                "toggle-option " +
                (De[47] ? "toggle-option-expanded" : "") +
                " svelte-17i5oct"))) &&
          o(d, "class", M),
        De[47]
          ? de
            ? de.p(De, je)
            : ((de = Ra(De)), de.c(), de.m(e, O))
          : de && (de.d(1), (de = null)),
        Ce.p(De, je),
        (!x || (je[0] & 1073741824 && N !== (N = De[30] !== "never"))) &&
          (D.checked = N),
        De[30] !== "never"
          ? Ee
            ? Ee.p(De, je)
            : ((Ee = Ua(De)), Ee.c(), Ee.m(T, null))
          : Ee && (Ee.d(1), (Ee = null)),
        (!x ||
          (je[0] & 1073741824 &&
            ae !==
              (ae =
                "toggle-option " +
                (De[30] !== "never" ? "toggle-option-expanded" : "") +
                " svelte-17i5oct"))) &&
          o(T, "class", ae),
        je[2] & 128 && (he.checked = De[69]));
      const Ct = {};
      (je[3] & 128 && (Ct.value = De[100]),
        fe.$set(Ct),
        je[2] & 256 && (Ve.checked = De[70]),
        De[7] === "macos"
          ? it
            ? it.p(De, je)
            : ((it = Ia(De)), it.c(), it.m(e, null))
          : it && (it.d(1), (it = null)));
    },
    i(De) {
      x || (C(a.$$.fragment, De), C(Y), C(fe.$$.fragment, De), (x = !0));
    },
    o(De) {
      (V(a.$$.fragment, De), V(Y), V(fe.$$.fragment, De), (x = !1));
    },
    d(De) {
      (De && _(e),
        q(a),
        Y && Y.d(),
        de && de.d(),
        Ce && Ce.d(),
        Ee && Ee.d(),
        q(fe),
        it && it.d(),
        (lt = !1),
        at(Ne));
    },
  };
}
function Fa(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k, f, M, S, O, P, T, L, z;
  ((n = new g0({ props: { size: 18, weight: "light" } })),
    (c = new E0({ props: { size: 18, weight: "light" } })),
    (k = new Bd({ props: { size: 18, weight: "light" } })));
  let F = l[9] === !1 && Wa(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("button")),
        j(n.$$.fragment),
        (a = Z()),
        (u = v("span")),
        (u.textContent = "All day"),
        (p = Z()),
        (d = v("button")),
        j(c.$$.fragment),
        (g = Z()),
        (m = v("span")),
        (m.textContent = "Evening only"),
        (s = Z()),
        (w = v("button")),
        j(k.$$.fragment),
        (f = Z()),
        (M = v("span")),
        (M.textContent = "Custom"),
        (O = Z()),
        F && F.c(),
        (P = c1()),
        o(u, "class", "card-option-text svelte-17i5oct"),
        o(
          t,
          "class",
          (r =
            "card-option " + (l[9] === !0 ? "active" : "") + " svelte-17i5oct"),
        ),
        o(m, "class", "card-option-text svelte-17i5oct"),
        o(
          d,
          "class",
          (i =
            "card-option " +
            (l[9] === "evening" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(M, "class", "card-option-text svelte-17i5oct"),
        o(
          w,
          "class",
          (S =
            "card-option " + (l[9] === !1 ? "active" : "") + " svelte-17i5oct"),
        ),
        o(e, "class", "card-options three-col svelte-17i5oct"),
        ce(e, "margin-top", "14px"));
    },
    m(E, D) {
      (b(E, e, D),
        h(e, t),
        B(n, t, null),
        h(t, a),
        h(t, u),
        h(e, p),
        h(e, d),
        B(c, d, null),
        h(d, g),
        h(d, m),
        h(e, s),
        h(e, w),
        B(k, w, null),
        h(w, f),
        h(w, M),
        b(E, O, D),
        F && F.m(E, D),
        b(E, P, D),
        (T = !0),
        L ||
          ((z = [
            W(t, "click", l[238]),
            W(d, "click", l[239]),
            W(w, "click", l[240]),
          ]),
          (L = !0)));
    },
    p(E, D) {
      ((!T ||
        (D[0] & 512 &&
          r !==
            (r =
              "card-option " +
              (E[9] === !0 ? "active" : "") +
              " svelte-17i5oct"))) &&
        o(t, "class", r),
        (!T ||
          (D[0] & 512 &&
            i !==
              (i =
                "card-option " +
                (E[9] === "evening" ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(d, "class", i),
        (!T ||
          (D[0] & 512 &&
            S !==
              (S =
                "card-option " +
                (E[9] === !1 ? "active" : "") +
                " svelte-17i5oct"))) &&
          o(w, "class", S),
        E[9] === !1
          ? F
            ? (F.p(E, D), D[0] & 512 && C(F, 1))
            : ((F = Wa(E)), F.c(), C(F, 1), F.m(P.parentNode, P))
          : F &&
            (Ie(),
            V(F, 1, 1, () => {
              F = null;
            }),
            Be()));
    },
    i(E) {
      T ||
        (C(n.$$.fragment, E),
        C(c.$$.fragment, E),
        C(k.$$.fragment, E),
        C(F),
        (T = !0));
    },
    o(E) {
      (V(n.$$.fragment, E),
        V(c.$$.fragment, E),
        V(k.$$.fragment, E),
        V(F),
        (T = !1));
    },
    d(E) {
      (E && (_(e), _(O), _(P)), q(n), q(c), q(k), F && F.d(E), (L = !1), at(z));
    },
  };
}
function Wa(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s;
  function w(S) {
    l[241](S);
  }
  let k = { id: "overlay-start" };
  (l[10] !== void 0 && (k.value = l[10]),
    (u = new Dl({ props: k })),
    Jt.push(() => W1(u, "value", w)),
    u.$on("change", l[173]));
  function f(S) {
    l[242](S);
  }
  let M = { id: "overlay-end" };
  return (
    l[11] !== void 0 && (M.value = l[11]),
    (m = new Dl({ props: M })),
    Jt.push(() => W1(m, "value", f)),
    m.$on("change", l[173]),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("label")),
          (n.textContent = "From"),
          (a = Z()),
          j(u.$$.fragment),
          (p = Z()),
          (d = v("div")),
          (c = v("label")),
          (c.textContent = "To"),
          (g = Z()),
          j(m.$$.fragment),
          o(n, "class", "time-label svelte-17i5oct"),
          o(n, "for", "overlay-start"),
          o(t, "class", "time-input-group svelte-17i5oct"),
          o(c, "class", "time-label svelte-17i5oct"),
          o(c, "for", "overlay-end"),
          o(d, "class", "time-input-group svelte-17i5oct"),
          o(e, "class", "time-inputs svelte-17i5oct"),
          ce(e, "margin-top", "12px"));
      },
      m(S, O) {
        (b(S, e, O),
          h(e, t),
          h(t, n),
          h(t, a),
          B(u, t, null),
          h(e, p),
          h(e, d),
          h(d, c),
          h(d, g),
          B(m, d, null),
          (s = !0));
      },
      p(S, O) {
        const P = {};
        (!r && O[0] & 1024 && ((r = !0), (P.value = S[10]), F1(() => (r = !1))),
          u.$set(P));
        const T = {};
        (!i && O[0] & 2048 && ((i = !0), (T.value = S[11]), F1(() => (i = !1))),
          m.$set(T));
      },
      i(S) {
        s || (C(u.$$.fragment, S), C(m.$$.fragment, S), (s = !0));
      },
      o(S) {
        (V(u.$$.fragment, S), V(m.$$.fragment, S), (s = !1));
      },
      d(S) {
        (S && _(e), q(u), q(m));
      },
    }
  );
}
function Ra(l) {
  let e,
    t,
    n,
    a,
    u,
    r = l[6] && Ka(l);
  function p(g, m) {
    return g[6] ? qp : Bp;
  }
  let d = p(l),
    c = d(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        (n.textContent = "Snooze"),
        (a = Z()),
        r && r.c(),
        (u = Z()),
        c.c(),
        o(n, "class", "toggle-label svelte-17i5oct"),
        o(t, "class", "toggle-option-row svelte-17i5oct"),
        o(e, "class", "toggle-option toggle-option-expanded svelte-17i5oct"));
    },
    m(g, m) {
      (b(g, e, m),
        h(e, t),
        h(t, n),
        h(t, a),
        r && r.m(t, null),
        h(e, u),
        c.m(e, null));
    },
    p(g, m) {
      (g[6]
        ? r
          ? r.p(g, m)
          : ((r = Ka(g)), r.c(), r.m(t, null))
        : r && (r.d(1), (r = null)),
        d === (d = p(g)) && c
          ? c.p(g, m)
          : (c.d(1), (c = d(g)), c && (c.c(), c.m(e, null))));
    },
    d(g) {
      (g && _(e), r && r.d(), c.d());
    },
  };
}
function Ka(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("span")),
        (t = K(l[44])),
        (n = K(" min left")),
        o(e, "class", "snooze-status svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), h(e, t), h(e, n));
    },
    p(a, u) {
      u[1] & 8192 && ze(t, a[44]);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Bp(l) {
  let e,
    t = Mt([1, 5, 10, 15]),
    n = [];
  for (let a = 0; a < 4; a += 1) n[a] = Na(va(l, t, a));
  return {
    c() {
      e = v("div");
      for (let a = 0; a < 4; a += 1) n[a].c();
      (o(e, "class", "card-options svelte-17i5oct"),
        ce(e, "margin-top", "14px"));
    },
    m(a, u) {
      b(a, e, u);
      for (let r = 0; r < 4; r += 1) n[r] && n[r].m(e, null);
    },
    p(a, u) {
      if (u[4] & 268435456) {
        t = Mt([1, 5, 10, 15]);
        let r;
        for (r = 0; r < 4; r += 1) {
          const p = va(a, t, r);
          n[r] ? n[r].p(p, u) : ((n[r] = Na(p)), n[r].c(), n[r].m(e, null));
        }
        for (; r < 4; r += 1) n[r].d(1);
      }
    },
    d(a) {
      (a && _(e), D1(n, a));
    },
  };
}
function qp(l) {
  let e, t, n, a;
  return {
    c() {
      ((e = v("div")),
        (t = v("button")),
        (t.innerHTML =
          '<span class="card-option-text svelte-17i5oct">Resume now</span>'),
        o(t, "class", "card-option svelte-17i5oct"),
        o(e, "class", "card-options svelte-17i5oct"),
        ce(e, "margin-top", "14px"));
    },
    m(u, r) {
      (b(u, e, r), h(e, t), n || ((a = W(t, "click", l[149])), (n = !0)));
    },
    p: A,
    d(u) {
      (u && _(e), (n = !1), a());
    },
  };
}
function Na(l) {
  let e, t, n, a, u;
  function r() {
    return l[243](l[423]);
  }
  return {
    c() {
      ((e = v("button")),
        (t = v("span")),
        (t.textContent = `${l[423]} min`),
        (n = Z()),
        o(t, "class", "card-option-text svelte-17i5oct"),
        o(e, "class", "card-option svelte-17i5oct"));
    },
    m(p, d) {
      (b(p, e, d), h(e, t), h(e, n), a || ((u = W(e, "click", r)), (a = !0)));
    },
    p(p, d) {
      l = p;
    },
    d(p) {
      (p && _(e), (a = !1), u());
    },
  };
}
function jp(l) {
  let e, t, n, a, u, r, p, d, c;
  return {
    c() {
      ((e = v("div")),
        (t = v("span")),
        (t.textContent = "Launch on startup"),
        (n = Z()),
        (a = v("label")),
        (u = v("input")),
        (r = Z()),
        (p = v("span")),
        o(t, "class", "toggle-label svelte-17i5oct"),
        o(u, "type", "checkbox"),
        o(u, "class", "svelte-17i5oct"),
        o(p, "class", "slider svelte-17i5oct"),
        o(a, "class", "toggle-switch svelte-17i5oct"),
        o(e, "class", "toggle-option svelte-17i5oct"));
    },
    m(g, m) {
      (b(g, e, m),
        h(e, t),
        h(e, n),
        h(e, a),
        h(a, u),
        (u.checked = l[51]),
        h(a, r),
        h(a, p),
        d ||
          ((c = [W(u, "change", l[244]), W(u, "change", l[166])]), (d = !0)));
    },
    p(g, m) {
      m[1] & 1048576 && (u.checked = g[51]);
    },
    d(g) {
      (g && _(e), (d = !1), at(c));
    },
  };
}
function Ua(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w;
  return {
    c() {
      ((e = v("div")),
        (t = v("button")),
        (n = v("span")),
        (n.textContent = "Always"),
        (u = Z()),
        (r = v("button")),
        (p = v("span")),
        (p.textContent = "Below 50%"),
        (c = Z()),
        (g = v("button")),
        (m = v("span")),
        (m.textContent = "Below 30%"),
        o(n, "class", "card-option-text svelte-17i5oct"),
        o(
          t,
          "class",
          (a =
            "card-option " +
            (l[30] === "always" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(p, "class", "card-option-text svelte-17i5oct"),
        o(
          r,
          "class",
          (d =
            "card-option " +
            (l[30] === "below50" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(m, "class", "card-option-text svelte-17i5oct"),
        o(
          g,
          "class",
          (i =
            "card-option " +
            (l[30] === "below30" ? "active" : "") +
            " svelte-17i5oct"),
        ),
        o(e, "class", "card-options svelte-17i5oct"),
        ce(e, "margin-top", "14px"));
    },
    m(k, f) {
      (b(k, e, f),
        h(e, t),
        h(t, n),
        h(e, u),
        h(e, r),
        h(r, p),
        h(e, c),
        h(e, g),
        h(g, m),
        s ||
          ((w = [
            W(t, "click", l[245]),
            W(r, "click", l[246]),
            W(g, "click", l[247]),
          ]),
          (s = !0)));
    },
    p(k, f) {
      (f[0] & 1073741824 &&
        a !==
          (a =
            "card-option " +
            (k[30] === "always" ? "active" : "") +
            " svelte-17i5oct") &&
        o(t, "class", a),
        f[0] & 1073741824 &&
          d !==
            (d =
              "card-option " +
              (k[30] === "below50" ? "active" : "") +
              " svelte-17i5oct") &&
          o(r, "class", d),
        f[0] & 1073741824 &&
          i !==
            (i =
              "card-option " +
              (k[30] === "below30" ? "active" : "") +
              " svelte-17i5oct") &&
          o(g, "class", i));
    },
    d(k) {
      (k && _(e), (s = !1), at(w));
    },
  };
}
function Ia(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s = l[71] && Ba(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (n.innerHTML =
          '<span class="toggle-label svelte-17i5oct">Hide effect around camera notch</span>'),
        (a = Z()),
        (u = v("label")),
        (r = v("input")),
        (p = Z()),
        (d = v("span")),
        (c = Z()),
        s && s.c(),
        o(n, "class", "toggle-leading svelte-17i5oct"),
        o(r, "type", "checkbox"),
        o(r, "class", "svelte-17i5oct"),
        o(d, "class", "slider svelte-17i5oct"),
        o(u, "class", "toggle-switch svelte-17i5oct"),
        o(t, "class", "toggle-option-row svelte-17i5oct"),
        o(
          e,
          "class",
          (g =
            "toggle-option " +
            (l[71] ? "toggle-option-expanded" : "") +
            " svelte-17i5oct"),
        ));
    },
    m(w, k) {
      (b(w, e, k),
        h(e, t),
        h(t, n),
        h(t, a),
        h(t, u),
        h(u, r),
        (r.checked = l[71]),
        h(u, p),
        h(u, d),
        h(e, c),
        s && s.m(e, null),
        m ||
          ((i = [W(r, "change", l[251]), W(r, "change", l[139])]), (m = !0)));
    },
    p(w, k) {
      (k[2] & 512 && (r.checked = w[71]),
        w[71]
          ? s
            ? s.p(w, k)
            : ((s = Ba(w)), s.c(), s.m(e, null))
          : s && (s.d(1), (s = null)),
        k[2] & 512 &&
          g !==
            (g =
              "toggle-option " +
              (w[71] ? "toggle-option-expanded" : "") +
              " svelte-17i5oct") &&
          o(e, "class", g));
    },
    d(w) {
      (w && _(e), s && s.d(), (m = !1), at(i));
    },
  };
}
function Ba(l) {
  let e, t, n, a, u, r, p, d, c, g;
  return {
    c() {
      ((e = v("div")),
        (t = v("button")),
        (n = v("span")),
        (n.textContent = "Always"),
        (u = Z()),
        (r = v("button")),
        (p = v("span")),
        (p.textContent = "Full-screen only"),
        o(n, "class", "card-option-text svelte-17i5oct"),
        o(
          t,
          "class",
          (a = "card-option " + (l[72] ? "" : "active") + " svelte-17i5oct"),
        ),
        o(p, "class", "card-option-text svelte-17i5oct"),
        o(
          r,
          "class",
          (d = "card-option " + (l[72] ? "active" : "") + " svelte-17i5oct"),
        ),
        o(e, "class", "card-options two-col svelte-17i5oct"),
        ce(e, "margin-top", "14px"));
    },
    m(m, i) {
      (b(m, e, i),
        h(e, t),
        h(t, n),
        h(e, u),
        h(e, r),
        h(r, p),
        c || ((g = [W(t, "click", l[252]), W(r, "click", l[253])]), (c = !0)));
    },
    p(m, i) {
      (i[2] & 1024 &&
        a !==
          (a = "card-option " + (m[72] ? "" : "active") + " svelte-17i5oct") &&
        o(t, "class", a),
        i[2] & 1024 &&
          d !==
            (d =
              "card-option " + (m[72] ? "active" : "") + " svelte-17i5oct") &&
          o(r, "class", d));
    },
    d(m) {
      (m && _(e), (c = !1), at(g));
    },
  };
}
function qa(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k, f, M, S;
  a = new Ur({ props: { size: 16, weight: "fill" } });
  let O = l[95] && ja(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        j(a.$$.fragment),
        (u = Z()),
        (r = v("h4")),
        (r.textContent = "Hot Keys"),
        (p = Z()),
        (d = v("div")),
        (c = v("span")),
        (c.textContent = "Enable hot keys"),
        (g = Z()),
        (m = v("label")),
        (i = v("input")),
        (s = Z()),
        (w = v("span")),
        (k = Z()),
        O && O.c(),
        o(n, "class", "section-icon-wrap svelte-17i5oct"),
        o(r, "class", "settings-heading svelte-17i5oct"),
        o(t, "class", "section-header svelte-17i5oct"),
        o(c, "class", "toggle-label svelte-17i5oct"),
        o(i, "type", "checkbox"),
        o(i, "class", "svelte-17i5oct"),
        o(w, "class", "slider svelte-17i5oct"),
        o(m, "class", "toggle-switch svelte-17i5oct"),
        o(d, "class", "toggle-option svelte-17i5oct"),
        o(e, "class", "settings-section svelte-17i5oct"));
    },
    m(P, T) {
      (b(P, e, T),
        h(e, t),
        h(t, n),
        B(a, n, null),
        h(t, u),
        h(t, r),
        h(e, p),
        h(e, d),
        h(d, c),
        h(d, g),
        h(d, m),
        h(m, i),
        (i.checked = l[95]),
        h(m, s),
        h(m, w),
        h(e, k),
        O && O.m(e, null),
        (f = !0),
        M ||
          ((S = [W(i, "change", l[254]), W(i, "change", l[141])]), (M = !0)));
    },
    p(P, T) {
      (T[3] & 4 && (i.checked = P[95]),
        P[95]
          ? O
            ? (O.p(P, T), T[3] & 4 && C(O, 1))
            : ((O = ja(P)), O.c(), C(O, 1), O.m(e, null))
          : O &&
            (Ie(),
            V(O, 1, 1, () => {
              O = null;
            }),
            Be()));
    },
    i(P) {
      f || (C(a.$$.fragment, P), C(O), (f = !0));
    },
    o(P) {
      (V(a.$$.fragment, P), V(O), (f = !1));
    },
    d(P) {
      (P && _(e), q(a), O && O.d(), (M = !1), at(S));
    },
  };
}
function ja(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k, f, M, S, O, P, T;
  return (
    (e = new m0({
      props: {
        label: "Toggle Paperman",
        target: "toggle",
        shortcut: l[87],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[255],
        onStop: l[256],
        onClear: l[257],
      },
    })),
    (n = new m0({
      props: {
        label: "Adjust Intensity",
        target: "intensity",
        shortcut: l[88],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[258],
        onStop: l[259],
        onClear: l[260],
      },
    })),
    (u = new m0({
      props: {
        label: "Intensity Up",
        target: "intensity-up",
        shortcut: l[89],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[261],
        onStop: l[262],
        onClear: l[263],
      },
    })),
    (p = new m0({
      props: {
        label: "Intensity Down",
        target: "intensity-down",
        shortcut: l[90],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[264],
        onStop: l[265],
        onClear: l[266],
      },
    })),
    (c = new m0({
      props: {
        label: "Toggle Snooze for",
        target: "snooze",
        shortcut: l[91],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[268],
        onStop: l[269],
        onClear: l[270],
        $$slots: { extra: [Gp] },
        $$scope: { ctx: l },
      },
    })),
    (m = new m0({
      props: {
        label: "Next Texture",
        target: "next-texture",
        shortcut: l[93],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[271],
        onStop: l[272],
        onClear: l[273],
      },
    })),
    (s = new m0({
      props: {
        label: "Desk Lamp",
        target: "desk-lamp",
        shortcut: l[94],
        recordingShortcut: l[86],
        recordedKeys: l[96],
        platform: l[7],
        onRecord: l[274],
        onStop: l[275],
        onClear: l[276],
      },
    })),
    (M = new Pn({ props: { size: 12, weight: "bold" } })),
    {
      c() {
        (j(e.$$.fragment),
          (t = Z()),
          j(n.$$.fragment),
          (a = Z()),
          j(u.$$.fragment),
          (r = Z()),
          j(p.$$.fragment),
          (d = Z()),
          j(c.$$.fragment),
          (g = Z()),
          j(m.$$.fragment),
          (i = Z()),
          j(s.$$.fragment),
          (w = Z()),
          (k = v("div")),
          (f = v("button")),
          j(M.$$.fragment),
          (S = K(`\r\n                    Reset hot keys`)),
          o(f, "class", "overlay-refresh-btn svelte-17i5oct"),
          o(k, "class", "hotkeys-reset-row svelte-17i5oct"));
      },
      m(L, z) {
        (B(e, L, z),
          b(L, t, z),
          B(n, L, z),
          b(L, a, z),
          B(u, L, z),
          b(L, r, z),
          B(p, L, z),
          b(L, d, z),
          B(c, L, z),
          b(L, g, z),
          B(m, L, z),
          b(L, i, z),
          B(s, L, z),
          b(L, w, z),
          b(L, k, z),
          h(k, f),
          B(M, f, null),
          h(f, S),
          (O = !0),
          P || ((T = W(f, "click", l[171])), (P = !0)));
      },
      p(L, z) {
        const F = {};
        (z[2] & 33554432 && (F.shortcut = L[87]),
          z[2] & 16777216 && (F.recordingShortcut = L[86]),
          z[3] & 8 && (F.recordedKeys = L[96]),
          z[0] & 128 && (F.platform = L[7]),
          e.$set(F));
        const E = {};
        (z[2] & 67108864 && (E.shortcut = L[88]),
          z[2] & 16777216 && (E.recordingShortcut = L[86]),
          z[3] & 8 && (E.recordedKeys = L[96]),
          z[0] & 128 && (E.platform = L[7]),
          n.$set(E));
        const D = {};
        (z[2] & 134217728 && (D.shortcut = L[89]),
          z[2] & 16777216 && (D.recordingShortcut = L[86]),
          z[3] & 8 && (D.recordedKeys = L[96]),
          z[0] & 128 && (D.platform = L[7]),
          u.$set(D));
        const N = {};
        (z[2] & 268435456 && (N.shortcut = L[90]),
          z[2] & 16777216 && (N.recordingShortcut = L[86]),
          z[3] & 8 && (N.recordedKeys = L[96]),
          z[0] & 128 && (N.platform = L[7]),
          p.$set(N));
        const ne = {};
        (z[2] & 536870912 && (ne.shortcut = L[91]),
          z[2] & 16777216 && (ne.recordingShortcut = L[86]),
          z[3] & 8 && (ne.recordedKeys = L[96]),
          z[0] & 128 && (ne.platform = L[7]),
          (z[2] & 1073741824) | (z[13] & 1073741824) &&
            (ne.$$scope = { dirty: z, ctx: L }),
          c.$set(ne));
        const Q = {};
        (z[3] & 1 && (Q.shortcut = L[93]),
          z[2] & 16777216 && (Q.recordingShortcut = L[86]),
          z[3] & 8 && (Q.recordedKeys = L[96]),
          z[0] & 128 && (Q.platform = L[7]),
          m.$set(Q));
        const X = {};
        (z[3] & 2 && (X.shortcut = L[94]),
          z[2] & 16777216 && (X.recordingShortcut = L[86]),
          z[3] & 8 && (X.recordedKeys = L[96]),
          z[0] & 128 && (X.platform = L[7]),
          s.$set(X));
      },
      i(L) {
        O ||
          (C(e.$$.fragment, L),
          C(n.$$.fragment, L),
          C(u.$$.fragment, L),
          C(p.$$.fragment, L),
          C(c.$$.fragment, L),
          C(m.$$.fragment, L),
          C(s.$$.fragment, L),
          C(M.$$.fragment, L),
          (O = !0));
      },
      o(L) {
        (V(e.$$.fragment, L),
          V(n.$$.fragment, L),
          V(u.$$.fragment, L),
          V(p.$$.fragment, L),
          V(c.$$.fragment, L),
          V(m.$$.fragment, L),
          V(s.$$.fragment, L),
          V(M.$$.fragment, L),
          (O = !1));
      },
      d(L) {
        (L && (_(t), _(a), _(r), _(d), _(g), _(i), _(w), _(k)),
          q(e, L),
          q(n, L),
          q(u, L),
          q(p, L),
          q(c, L),
          q(m, L),
          q(s, L),
          q(M),
          (P = !1),
          T());
      },
    }
  );
}
function Xp(l) {
  let e;
  return {
    c() {
      ((e = v("option")),
        (e.textContent = `${l[423]} min`),
        (e.__value = l[423]),
        b1(e, e.__value),
        o(e, "class", "svelte-17i5oct"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function Gp(l) {
  let e,
    t,
    n,
    a = Mt([1, 5, 10, 15, 30, 60]),
    u = [];
  for (let r = 0; r < 6; r += 1) u[r] = Xp(Rp(l, a, r));
  return {
    c() {
      e = v("select");
      for (let r = 0; r < 6; r += 1) u[r].c();
      (o(e, "slot", "extra"),
        o(e, "class", "snooze-duration-select svelte-17i5oct"),
        l[92] === void 0 && G1(() => l[267].call(e)));
    },
    m(r, p) {
      b(r, e, p);
      for (let d = 0; d < 6; d += 1) u[d] && u[d].m(e, null);
      (vi(e, l[92], !0),
        t ||
          ((n = [W(e, "change", l[267]), W(e, "change", l[173])]), (t = !0)));
    },
    p(r, p) {
      p[2] & 1073741824 && vi(e, r[92]);
    },
    d(r) {
      (r && _(e), D1(u, r), (t = !1), at(n));
    },
  };
}
function Xa(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He;
  a = new Rr({ props: { size: 16, weight: "fill" } });
  let be = l[23] && Ga(l);
  return (
    (F = new L8({ props: { size: 18, weight: "light" } })),
    (X = new g0({ props: { size: 18, weight: "light" } })),
    ($ = new E0({ props: { size: 18, weight: "light" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "Circadian Rhythm"),
          (p = Z()),
          (d = v("div")),
          (c = v("div")),
          (g = v("span")),
          (g.textContent = "Schedule theme by time"),
          (m = Z()),
          (i = v("label")),
          (s = v("input")),
          (w = Z()),
          (k = v("span")),
          (f = Z()),
          be && be.c(),
          (S = Z()),
          (O = v("div")),
          (P = v("div")),
          (P.innerHTML =
            '<span class="toggle-label svelte-17i5oct">System Appearance</span>'),
          (T = Z()),
          (L = v("div")),
          (z = v("button")),
          j(F.$$.fragment),
          (E = Z()),
          (D = v("span")),
          (D.textContent = "Auto"),
          (ne = Z()),
          (Q = v("button")),
          j(X.$$.fragment),
          (ae = Z()),
          (J = v("span")),
          (J.textContent = "Light"),
          (te = Z()),
          (ge = v("button")),
          j($.$$.fragment),
          (he = Z()),
          (Re = v("span")),
          (Re.textContent = "Dark"),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(g, "class", "toggle-label svelte-17i5oct"),
          o(s, "type", "checkbox"),
          o(s, "class", "svelte-17i5oct"),
          o(k, "class", "slider svelte-17i5oct"),
          o(i, "class", "toggle-switch svelte-17i5oct"),
          o(c, "class", "toggle-option-row svelte-17i5oct"),
          o(
            d,
            "class",
            (M =
              "toggle-option " +
              (l[23] ? "toggle-option-expanded" : "") +
              " svelte-17i5oct"),
          ),
          o(P, "class", "toggle-option-row svelte-17i5oct"),
          o(D, "class", "card-option-text svelte-17i5oct"),
          o(
            z,
            "class",
            (N =
              "card-option " +
              (l[66] === "auto" && l[23] ? "active" : "") +
              " svelte-17i5oct"),
          ),
          o(J, "class", "card-option-text svelte-17i5oct"),
          o(
            Q,
            "class",
            (se =
              "card-option " +
              (l[66] === "light" ? "active" : "") +
              " svelte-17i5oct"),
          ),
          o(Re, "class", "card-option-text svelte-17i5oct"),
          o(
            ge,
            "class",
            (pe =
              "card-option " +
              (l[66] === "dark" ? "active" : "") +
              " svelte-17i5oct"),
          ),
          o(L, "class", "card-options svelte-17i5oct"),
          ce(L, "margin-top", "14px"),
          ce(L, "margin-bottom", "0"),
          o(O, "class", "toggle-option toggle-option-expanded svelte-17i5oct"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m(fe, ke) {
        (b(fe, e, ke),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          h(e, d),
          h(d, c),
          h(c, g),
          h(c, m),
          h(c, i),
          h(i, s),
          (s.checked = l[23]),
          h(i, w),
          h(i, k),
          h(d, f),
          be && be.m(d, null),
          h(e, S),
          h(e, O),
          h(O, P),
          h(O, T),
          h(O, L),
          h(L, z),
          B(F, z, null),
          h(z, E),
          h(z, D),
          h(L, ne),
          h(L, Q),
          B(X, Q, null),
          h(Q, ae),
          h(Q, J),
          h(L, te),
          h(L, ge),
          B($, ge, null),
          h(ge, he),
          h(ge, Re),
          (G = !0),
          _e ||
            ((He = [
              W(s, "change", l[277]),
              W(s, "change", l[278]),
              W(z, "click", l[281]),
              W(Q, "click", l[282]),
              W(ge, "click", l[283]),
            ]),
            (_e = !0)));
      },
      p(fe, ke) {
        (ke[0] & 8388608 && (s.checked = fe[23]),
          fe[23]
            ? be
              ? (be.p(fe, ke), ke[0] & 8388608 && C(be, 1))
              : ((be = Ga(fe)), be.c(), C(be, 1), be.m(d, null))
            : be &&
              (Ie(),
              V(be, 1, 1, () => {
                be = null;
              }),
              Be()),
          (!G ||
            (ke[0] & 8388608 &&
              M !==
                (M =
                  "toggle-option " +
                  (fe[23] ? "toggle-option-expanded" : "") +
                  " svelte-17i5oct"))) &&
            o(d, "class", M),
          (!G ||
            ((ke[0] & 8388608) | (ke[2] & 16) &&
              N !==
                (N =
                  "card-option " +
                  (fe[66] === "auto" && fe[23] ? "active" : "") +
                  " svelte-17i5oct"))) &&
            o(z, "class", N),
          (!G ||
            (ke[2] & 16 &&
              se !==
                (se =
                  "card-option " +
                  (fe[66] === "light" ? "active" : "") +
                  " svelte-17i5oct"))) &&
            o(Q, "class", se),
          (!G ||
            (ke[2] & 16 &&
              pe !==
                (pe =
                  "card-option " +
                  (fe[66] === "dark" ? "active" : "") +
                  " svelte-17i5oct"))) &&
            o(ge, "class", pe));
      },
      i(fe) {
        G ||
          (C(a.$$.fragment, fe),
          C(be),
          C(F.$$.fragment, fe),
          C(X.$$.fragment, fe),
          C($.$$.fragment, fe),
          (G = !0));
      },
      o(fe) {
        (V(a.$$.fragment, fe),
          V(be),
          V(F.$$.fragment, fe),
          V(X.$$.fragment, fe),
          V($.$$.fragment, fe),
          (G = !1));
      },
      d(fe) {
        (fe && _(e), q(a), be && be.d(), q(F), q(X), q($), (_e = !1), at(He));
      },
    }
  );
}
function Ga(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k, f, M;
  a = new g0({ props: { size: 18, weight: "light" } });
  function S(L) {
    l[279](L);
  }
  let O = { id: "light-start" };
  (l[64] !== void 0 && (O.value = l[64]),
    (p = new Dl({ props: O })),
    Jt.push(() => W1(p, "value", S)),
    p.$on("change", l[173]),
    (i = new E0({ props: { size: 18, weight: "light" } })));
  function P(L) {
    l[280](L);
  }
  let T = { id: "dark-start" };
  return (
    l[65] !== void 0 && (T.value = l[65]),
    (k = new Dl({ props: T })),
    Jt.push(() => W1(k, "value", P)),
    k.$on("change", l[173]),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("label")),
          j(a.$$.fragment),
          (u = K(`\r\n                        Daytime`)),
          (r = Z()),
          j(p.$$.fragment),
          (c = Z()),
          (g = v("div")),
          (m = v("label")),
          j(i.$$.fragment),
          (s = K(`\r\n                        Evening`)),
          (w = Z()),
          j(k.$$.fragment),
          o(n, "class", "time-label svelte-17i5oct"),
          o(n, "for", "light-start"),
          o(t, "class", "time-input-group svelte-17i5oct"),
          o(m, "class", "time-label svelte-17i5oct"),
          o(m, "for", "dark-start"),
          o(g, "class", "time-input-group svelte-17i5oct"),
          o(e, "class", "time-inputs svelte-17i5oct"),
          ce(e, "margin-top", "14px"));
      },
      m(L, z) {
        (b(L, e, z),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(n, u),
          h(t, r),
          B(p, t, null),
          h(e, c),
          h(e, g),
          h(g, m),
          B(i, m, null),
          h(m, s),
          h(g, w),
          B(k, g, null),
          (M = !0));
      },
      p(L, z) {
        const F = {};
        (!d && z[2] & 4 && ((d = !0), (F.value = L[64]), F1(() => (d = !1))),
          p.$set(F));
        const E = {};
        (!f && z[2] & 8 && ((f = !0), (E.value = L[65]), F1(() => (f = !1))),
          k.$set(E));
      },
      i(L) {
        M ||
          (C(a.$$.fragment, L),
          C(p.$$.fragment, L),
          C(i.$$.fragment, L),
          C(k.$$.fragment, L),
          (M = !0));
      },
      o(L) {
        (V(a.$$.fragment, L),
          V(p.$$.fragment, L),
          V(i.$$.fragment, L),
          V(k.$$.fragment, L),
          (M = !1));
      },
      d(L) {
        (L && _(e), q(a), q(p), q(i), q(k));
      },
    }
  );
}
function Ya(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i =
      l[49] === "exclude"
        ? "Disable Paperman's texture for specific apps"
        : "Enable Paperman's texture only for specific apps",
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q;
  a = new En({ props: { size: 16, weight: "fill" } });
  function X($) {
    l[284]($);
  }
  let ae = {
    options: [
      { label: "Exclude listed", value: "exclude" },
      { label: "Only listed", value: "include" },
    ],
    ariaLabel: "Exception mode",
  };
  (l[49] !== void 0 && (ae.value = l[49]),
    (d = new Un({ props: ae })),
    Jt.push(() => W1(d, "value", X)),
    d.$on("change", l[285]));
  let J = l[53] && l[52].length > 0 && Qa(l);
  L = new P3({ props: { size: 14, weight: "bold" } });
  const se = [Qp, Yp],
    te = [];
  function ge($, he) {
    return $[48].length > 0 ? 0 : 1;
  }
  return (
    (E = ge(l)),
    (D = te[E] = se[E](l)),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "App Exceptions"),
          (p = Z()),
          j(d.$$.fragment),
          (g = Z()),
          (m = v("p")),
          (s = K(i)),
          (w = Z()),
          (k = v("div")),
          (f = v("div")),
          (M = v("div")),
          (S = v("input")),
          (O = Z()),
          J && J.c(),
          (P = Z()),
          (T = v("button")),
          j(L.$$.fragment),
          (z = K(`\r\n                    Add`)),
          (F = Z()),
          D.c(),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(m, "class", "settings-text svelte-17i5oct"),
          o(S, "type", "text"),
          o(S, "placeholder", "e.g., Photoshop"),
          o(S, "class", "app-input svelte-17i5oct"),
          o(S, "autocomplete", "off"),
          o(S, "autocorrect", "off"),
          o(S, "autocapitalize", "off"),
          o(S, "spellcheck", "false"),
          o(M, "class", "app-input-field svelte-17i5oct"),
          o(T, "class", "add-button svelte-17i5oct"),
          o(f, "class", "app-input-group svelte-17i5oct"),
          o(k, "class", "app-input-wrapper svelte-17i5oct"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m($, he) {
        (b($, e, he),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          B(d, e, null),
          h(e, g),
          h(e, m),
          h(m, s),
          h(e, w),
          h(e, k),
          h(k, f),
          h(f, M),
          h(M, S),
          b1(S, l[50]),
          h(M, O),
          J && J.m(M, null),
          h(f, P),
          h(f, T),
          B(L, T, null),
          h(T, z),
          h(e, F),
          te[E].m(e, null),
          (N = !0),
          ne ||
            ((Q = [
              W(S, "input", l[286]),
              W(S, "keydown", l[164]),
              W(S, "focus", l[162]),
              W(S, "blur", l[163]),
              W(S, "input", l[160]),
              W(T, "click", l[158]),
            ]),
            (ne = !0)));
      },
      p($, he) {
        const Re = {};
        (!c &&
          he[1] & 262144 &&
          ((c = !0), (Re.value = $[49]), F1(() => (c = !1))),
          d.$set(Re),
          (!N || he[1] & 262144) &&
            i !==
              (i =
                $[49] === "exclude"
                  ? "Disable Paperman's texture for specific apps"
                  : "Enable Paperman's texture only for specific apps") &&
            ze(s, i),
          he[1] & 524288 && S.value !== $[50] && b1(S, $[50]),
          $[53] && $[52].length > 0
            ? J
              ? J.p($, he)
              : ((J = Qa($)), J.c(), J.m(M, null))
            : J && (J.d(1), (J = null)));
        let pe = E;
        ((E = ge($)),
          E === pe
            ? te[E].p($, he)
            : (Ie(),
              V(te[pe], 1, 1, () => {
                te[pe] = null;
              }),
              Be(),
              (D = te[E]),
              D ? D.p($, he) : ((D = te[E] = se[E]($)), D.c()),
              C(D, 1),
              D.m(e, null)));
      },
      i($) {
        N ||
          (C(a.$$.fragment, $),
          C(d.$$.fragment, $),
          C(L.$$.fragment, $),
          C(D),
          (N = !0));
      },
      o($) {
        (V(a.$$.fragment, $),
          V(d.$$.fragment, $),
          V(L.$$.fragment, $),
          V(D),
          (N = !1));
      },
      d($) {
        ($ && _(e), q(a), q(d), J && J.d(), q(L), te[E].d(), (ne = !1), at(Q));
      },
    }
  );
}
function Qa(l) {
  let e,
    t = Mt(l[52]),
    n = [];
  for (let a = 0; a < t.length; a += 1) n[a] = Ja(ba(l, t, a));
  return {
    c() {
      e = v("div");
      for (let a = 0; a < n.length; a += 1) n[a].c();
      (o(e, "class", "autocomplete-dropdown svelte-17i5oct"),
        o(e, "role", "listbox"));
    },
    m(a, u) {
      b(a, e, u);
      for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
      l[289](e);
    },
    p(a, u) {
      if ((u[1] & 10485760) | (u[5] & 64)) {
        t = Mt(a[52]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const p = ba(a, t, r);
          n[r] ? n[r].p(p, u) : ((n[r] = Ja(p)), n[r].c(), n[r].m(e, null));
        }
        for (; r < n.length; r += 1) n[r].d(1);
        n.length = t.length;
      }
    },
    d(a) {
      (a && _(e), D1(n, a), l[289](null));
    },
  };
}
function Ja(l) {
  let e,
    t = l[418] + "",
    n,
    a,
    u,
    r;
  function p() {
    return l[287](l[422]);
  }
  function d() {
    return l[288](l[418]);
  }
  return {
    c() {
      ((e = v("button")),
        (n = K(t)),
        (a = Z()),
        o(e, "type", "button"),
        o(e, "class", "autocomplete-item svelte-17i5oct"),
        Nt(e, "selected", l[422] === l[54]));
    },
    m(c, g) {
      (b(c, e, g),
        h(e, n),
        h(e, a),
        u || ((r = [W(e, "mouseenter", p), W(e, "mousedown", d)]), (u = !0)));
    },
    p(c, g) {
      ((l = c),
        g[1] & 2097152 && t !== (t = l[418] + "") && ze(n, t),
        g[1] & 8388608 && Nt(e, "selected", l[422] === l[54]));
    },
    d(c) {
      (c && _(e), (u = !1), at(r));
    },
  };
}
function Yp(l) {
  let e;
  return {
    c() {
      ((e = v("p")),
        (e.textContent = "No apps added yet"),
        o(e, "class", "empty-state svelte-17i5oct"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && _(e);
    },
  };
}
function Qp(l) {
  let e,
    t,
    n = Mt(l[48]),
    a = [];
  for (let r = 0; r < n.length; r += 1) a[r] = xa(_a(l, n, r));
  const u = (r) =>
    V(a[r], 1, 1, () => {
      a[r] = null;
    });
  return {
    c() {
      e = v("div");
      for (let r = 0; r < a.length; r += 1) a[r].c();
      o(e, "class", "app-list svelte-17i5oct");
    },
    m(r, p) {
      b(r, e, p);
      for (let d = 0; d < a.length; d += 1) a[d] && a[d].m(e, null);
      t = !0;
    },
    p(r, p) {
      if ((p[1] & 131072) | (p[5] & 16)) {
        n = Mt(r[48]);
        let d;
        for (d = 0; d < n.length; d += 1) {
          const c = _a(r, n, d);
          a[d]
            ? (a[d].p(c, p), C(a[d], 1))
            : ((a[d] = xa(c)), a[d].c(), C(a[d], 1), a[d].m(e, null));
        }
        for (Ie(), d = n.length; d < a.length; d += 1) u(d);
        Be();
      }
    },
    i(r) {
      if (!t) {
        for (let p = 0; p < n.length; p += 1) C(a[p]);
        t = !0;
      }
    },
    o(r) {
      a = a.filter(Wp);
      for (let p = 0; p < a.length; p += 1) V(a[p]);
      t = !1;
    },
    d(r) {
      (r && _(e), D1(a, r));
    },
  };
}
function xa(l) {
  let e,
    t,
    n = w1(l[418]) + "",
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m;
  p = new nh({ props: { size: 14, weight: "bold" } });
  function i() {
    return l[290](l[418]);
  }
  return {
    c() {
      ((e = v("div")),
        (t = v("span")),
        (a = K(n)),
        (u = Z()),
        (r = v("button")),
        j(p.$$.fragment),
        (d = Z()),
        o(t, "class", "app-name svelte-17i5oct"),
        o(r, "class", "remove-button svelte-17i5oct"),
        o(e, "class", "app-item svelte-17i5oct"));
    },
    m(s, w) {
      (b(s, e, w),
        h(e, t),
        h(t, a),
        h(e, u),
        h(e, r),
        B(p, r, null),
        h(e, d),
        (c = !0),
        g || ((m = W(r, "click", i)), (g = !0)));
    },
    p(s, w) {
      ((l = s),
        (!c || w[1] & 131072) && n !== (n = w1(l[418]) + "") && ze(a, n));
    },
    i(s) {
      c || (C(p.$$.fragment, s), (c = !0));
    },
    o(s) {
      (V(p.$$.fragment, s), (c = !1));
    },
    d(s) {
      (s && _(e), q(p), (g = !1), m());
    },
  };
}
function $a(l) {
  let e, t, n, a, u, r, p, d, c, g;
  a = new Nr({ props: { size: 16, weight: "fill" } });
  const m = [xp, Jp],
    i = [];
  function s(w, k) {
    return w[18] ? 0 : 1;
  }
  return (
    (d = s(l)),
    (c = i[d] = m[d](l)),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "Paperman Unlimited"),
          (p = Z()),
          c.c(),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m(w, k) {
        (b(w, e, k),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          i[d].m(e, null),
          (g = !0));
      },
      p(w, k) {
        let f = d;
        ((d = s(w)),
          d === f
            ? i[d].p(w, k)
            : (Ie(),
              V(i[f], 1, 1, () => {
                i[f] = null;
              }),
              Be(),
              (c = i[d]),
              c ? c.p(w, k) : ((c = i[d] = m[d](w)), c.c()),
              C(c, 1),
              c.m(e, null)));
      },
      i(w) {
        g || (C(a.$$.fragment, w), C(c), (g = !0));
      },
      o(w) {
        (V(a.$$.fragment, w), V(c), (g = !1));
      },
      d(w) {
        (w && _(e), q(a), i[d].d());
      },
    }
  );
}
function Jp(l) {
  let e, t, n, a, u, r, p, d;
  function c(i, s) {
    return i[7] === "windows" ? eg : $p;
  }
  let g = c(l),
    m = g(l);
  return {
    c() {
      ((e = v("div")),
        m.c(),
        (t = Z()),
        (n = v("div")),
        (a = v("button")),
        (a.textContent = "Enter License Key"),
        (u = Z()),
        (r = v("button")),
        (r.textContent = "Upgrade to Unlimited"),
        o(e, "class", "usage-section svelte-17i5oct"),
        o(a, "class", "license-btn svelte-17i5oct"),
        o(r, "class", "upgrade-link-btn svelte-17i5oct"),
        o(n, "class", "license-actions svelte-17i5oct"));
    },
    m(i, s) {
      (b(i, e, s),
        m.m(e, null),
        b(i, t, s),
        b(i, n, s),
        h(n, a),
        h(n, u),
        h(n, r),
        p || ((d = [W(a, "click", l[296]), W(r, "click", l[297])]), (p = !0)));
    },
    p(i, s) {
      g === (g = c(i)) && m
        ? m.p(i, s)
        : (m.d(1), (m = g(i)), m && (m.c(), m.m(e, null)));
    },
    i: A,
    o: A,
    d(i) {
      (i && (_(e), _(t), _(n)), m.d(), (p = !1), at(d));
    },
  };
}
function xp(l) {
  let e, t, n, a, u, r, p, d, c;
  function g(s) {
    l[293](s);
  }
  function m(s) {
    l[294](s);
  }
  let i = { onNameChange: l[291], onCardUpdated: l[173], onShowToast: l[292] };
  return (
    l[62] !== void 0 && (i.displayName = l[62]),
    l[63] !== void 0 && (i.activatedAt = l[63]),
    (e = new sm({ props: i })),
    Jt.push(() => W1(e, "displayName", g)),
    Jt.push(() => W1(e, "activatedAt", m)),
    {
      c() {
        (j(e.$$.fragment),
          (a = Z()),
          (u = v("div")),
          (r = v("button")),
          (r.textContent = "View License Details"),
          o(r, "class", "license-link-btn svelte-17i5oct"),
          o(u, "class", "license-management"),
          ce(u, "margin-top", "-12px"),
          ce(u, "text-align", "center"));
      },
      m(s, w) {
        (B(e, s, w),
          b(s, a, w),
          b(s, u, w),
          h(u, r),
          (p = !0),
          d || ((c = W(r, "click", l[295])), (d = !0)));
      },
      p(s, w) {
        const k = {};
        (w[2] & 1 && (k.onNameChange = s[291]),
          !t &&
            w[2] & 1 &&
            ((t = !0), (k.displayName = s[62]), F1(() => (t = !1))),
          !n &&
            w[2] & 2 &&
            ((n = !0), (k.activatedAt = s[63]), F1(() => (n = !1))),
          e.$set(k));
      },
      i(s) {
        p || (C(e.$$.fragment, s), (p = !0));
      },
      o(s) {
        (V(e.$$.fragment, s), (p = !1));
      },
      d(s) {
        (s && (_(a), _(u)), q(e, s), (d = !1), c());
      },
    }
  );
}
function $p(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("div")),
        (e.innerHTML =
          '<span class="usage-label-text svelte-17i5oct">License Required</span>'),
        (t = Z()),
        (n = v("p")),
        (n.textContent =
          "Paperman for macOS requires a valid license key to activate unlimited reading mode."),
        o(e, "class", "usage-header svelte-17i5oct"),
        o(n, "class", "settings-text svelte-17i5oct"),
        ce(n, "margin-top", "4px"),
        ce(n, "margin-bottom", "8px"));
    },
    m(a, u) {
      (b(a, e, u), b(a, t, u), b(a, n, u));
    },
    p: A,
    d(a) {
      a && (_(e), _(t), _(n));
    },
  };
}
function eg(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k;
  return {
    c() {
      ((e = v("div")),
        (t = v("span")),
        (t.textContent = "Daily usage"),
        (n = Z()),
        (a = v("span")),
        (u = K(l[19])),
        (r = K("/")),
        (p = K(X1)),
        (d = K(" min")),
        (c = Z()),
        (g = v("div")),
        (m = v("div")),
        (i = Z()),
        (s = v("p")),
        (w = K("Resets in ")),
        (k = K(l[61])),
        o(t, "class", "usage-label-text svelte-17i5oct"),
        o(a, "class", "usage-count svelte-17i5oct"),
        o(e, "class", "usage-header svelte-17i5oct"),
        o(m, "class", "usage-bar-fill svelte-17i5oct"),
        ce(m, "width", Math.min(100, (l[19] / X1) * 100) + "%"),
        o(g, "class", "usage-bar-track svelte-17i5oct"),
        o(s, "class", "usage-reset-hint svelte-17i5oct"));
    },
    m(f, M) {
      (b(f, e, M),
        h(e, t),
        h(e, n),
        h(e, a),
        h(a, u),
        h(a, r),
        h(a, p),
        h(a, d),
        b(f, c, M),
        b(f, g, M),
        h(g, m),
        b(f, i, M),
        b(f, s, M),
        h(s, w),
        h(s, k));
    },
    p(f, M) {
      (M[0] & 524288 && ze(u, f[19]),
        M[0] & 524288 &&
          ce(m, "width", Math.min(100, (f[19] / X1) * 100) + "%"),
        M[1] & 1073741824 && ze(k, f[61]));
    },
    d(f) {
      f && (_(e), _(c), _(g), _(i), _(s));
    },
  };
}
function er(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k, f, M, S, O, P;
  a = new qr({ props: { size: 16, weight: "fill" } });
  function T(D) {
    l[298](D);
  }
  let L = { platform: l[7] };
  (l[73] !== void 0 && (L.selectedIndexes = l[73]),
    (g = new N7({ props: L })),
    Jt.push(() => W1(g, "selectedIndexes", T)),
    g.$on("primaryIndex", l[299]),
    g.$on("change", l[122]));
  function z(D, N) {
    return D[76] ? lg : tg;
  }
  let F = z(l),
    E = F(l);
  return (
    (f = new Pn({ props: { size: 12, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "Display"),
          (p = Z()),
          (d = v("p")),
          (d.textContent = "Choose which monitor the overlay covers."),
          (c = Z()),
          j(g.$$.fragment),
          (i = Z()),
          (s = v("div")),
          E.c(),
          (w = Z()),
          (k = v("button")),
          j(f.$$.fragment),
          (M = K(`\r\n                  Refresh display output`)),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(d, "class", "settings-text svelte-17i5oct"),
          ce(d, "margin-bottom", "4px"),
          o(k, "class", "overlay-refresh-btn svelte-17i5oct"),
          (k.disabled = l[75]),
          ce(s, "display", "flex"),
          ce(s, "justify-content", "space-between"),
          ce(s, "align-items", "center"),
          ce(s, "margin-top", "10px"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m(D, N) {
        (b(D, e, N),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          h(e, d),
          h(e, c),
          B(g, e, null),
          h(e, i),
          h(e, s),
          E.m(s, null),
          h(s, w),
          h(s, k),
          B(f, k, null),
          h(k, M),
          (S = !0),
          O || ((P = W(k, "click", l[123])), (O = !0)));
      },
      p(D, N) {
        const ne = {};
        (N[0] & 128 && (ne.platform = D[7]),
          !m &&
            N[2] & 2048 &&
            ((m = !0), (ne.selectedIndexes = D[73]), F1(() => (m = !1))),
          g.$set(ne),
          F === (F = z(D)) && E
            ? E.p(D, N)
            : (E.d(1), (E = F(D)), E && (E.c(), E.m(s, w))),
          (!S || N[2] & 8192) && (k.disabled = D[75]));
      },
      i(D) {
        S ||
          (C(a.$$.fragment, D),
          C(g.$$.fragment, D),
          C(f.$$.fragment, D),
          (S = !0));
      },
      o(D) {
        (V(a.$$.fragment, D),
          V(g.$$.fragment, D),
          V(f.$$.fragment, D),
          (S = !1));
      },
      d(D) {
        (D && _(e), q(a), q(g), E.d(), q(f), (O = !1), P());
      },
    }
  );
}
function tg(l) {
  let e;
  return {
    c() {
      e = v("span");
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    d(t) {
      t && _(e);
    },
  };
}
function lg(l) {
  let e,
    t,
    n = br(l[76]) + "",
    a;
  return {
    c() {
      ((e = v("span")),
        (t = K("Synced ")),
        (a = K(n)),
        o(e, "class", "refresh-hint svelte-17i5oct"));
    },
    m(u, r) {
      (b(u, e, r), h(e, t), h(e, a));
    },
    p(u, r) {
      r[2] & 16384 && n !== (n = br(u[76]) + "") && ze(a, n);
    },
    d(u) {
      u && _(e);
    },
  };
}
function tr(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k = l[2] === "dark" ? "Texture in Dark Mode" : "Texture in Light Mode",
    f,
    M,
    S,
    O,
    P,
    T = l[3].length + "",
    L,
    z,
    F,
    E,
    D,
    N = [],
    ne = new Map(),
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge = Math.round(l[105] * 100) + "",
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He,
    be,
    fe,
    ke,
    we,
    Oe,
    qe,
    Le,
    Ve,
    Te,
    ot;
  a = new jr({ props: { size: 16, weight: "fill" } });
  function Ke(Y) {
    l[300](Y);
  }
  let x = {
    options: [
      {
        label: "Daytime",
        value: "light",
        icon: g0,
        chip: l[24] === "light" ? "Now" : void 0,
      },
      {
        label: "Nighttime",
        value: "dark",
        icon: E0,
        chip: l[24] === "dark" ? "Now" : void 0,
      },
    ],
    ariaLabel: "Theme to edit",
    showChipWhenSelected: !1,
  };
  (l[2] !== void 0 && (x.value = l[2]),
    (g = new Un({ props: x })),
    Jt.push(() => W1(g, "value", Ke)),
    (O = new Xr({ props: { size: 11, weight: "fill" } })));
  let lt = Mt(Ol);
  const Ne = (Y) => Y[415].id;
  for (let Y = 0; Y < lt.length; Y += 1) {
    let de = ga(l, lt, Y),
      Ce = Ne(de);
    ne.set(Ce, (N[Y] = lr(Ce, de)));
  }
  return (
    (_e = new Fn({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })),
    (Le = new g0({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "Texture Presets"),
          (p = Z()),
          (d = v("p")),
          (d.textContent = `Pick a texture for each theme, and pin up to ${D0} as quick favorites in the Control Center.`),
          (c = Z()),
          j(g.$$.fragment),
          (i = Z()),
          (s = v("div")),
          (w = v("span")),
          (f = K(k)),
          (M = Z()),
          (S = v("span")),
          j(O.$$.fragment),
          (P = Z()),
          (L = K(T)),
          (z = K("/")),
          (F = K(D0)),
          (E = Z()),
          (D = v("div")));
        for (let Y = 0; Y < N.length; Y += 1) N[Y].c();
        ((Q = Z()),
          (X = v("div")),
          (ae = v("div")),
          (J = v("span")),
          (J.textContent = "Intensity"),
          (se = Z()),
          (te = v("span")),
          ($ = K(ge)),
          (he = K("%")),
          (Re = Z()),
          (pe = v("div")),
          (G = v("button")),
          j(_e.$$.fragment),
          (He = Z()),
          (be = v("div")),
          (fe = v("div")),
          (ke = Z()),
          (we = v("input")),
          (Oe = Z()),
          (qe = v("button")),
          j(Le.$$.fragment),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(d, "class", "settings-text svelte-17i5oct"),
          ce(d, "margin-top", "-4px"),
          o(S, "class", "pin-counter svelte-17i5oct"),
          o(S, "title", "Pinned to Control Center"),
          o(w, "class", "texture-preset-label svelte-17i5oct"),
          o(D, "class", "texture-cards svelte-17i5oct"),
          ce(D, "margin-top", "16px"),
          o(J, "class", "toggle-label svelte-17i5oct"),
          o(te, "class", "intensity-pct svelte-17i5oct"),
          o(ae, "class", "intensity-setting-header svelte-17i5oct"),
          o(G, "class", "cc-intensity-btn svelte-17i5oct"),
          o(G, "title", "Decrease intensity"),
          o(fe, "class", "settings-slider-fill svelte-17i5oct"),
          ce(fe, "width", ((l[105] - l[104]) / (l[103] - l[104])) * 100 + "%"),
          o(we, "type", "range"),
          o(we, "min", l[104]),
          o(we, "max", l[103]),
          o(we, "step", "0.01"),
          (we.value = l[105]),
          o(we, "class", "settings-intensity-slider svelte-17i5oct"),
          o(be, "class", "settings-slider-track svelte-17i5oct"),
          o(qe, "class", "cc-intensity-btn svelte-17i5oct"),
          o(qe, "title", "Increase intensity"),
          o(pe, "class", "intensity-slider-row svelte-17i5oct"),
          o(X, "class", "intensity-setting svelte-17i5oct"),
          ce(X, "margin-top", "14px"),
          o(s, "class", "texture-preset-group svelte-17i5oct"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m(Y, de) {
        (b(Y, e, de),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          h(e, d),
          h(e, c),
          B(g, e, null),
          h(e, i),
          h(e, s),
          h(s, w),
          h(w, f),
          h(w, M),
          h(w, S),
          B(O, S, null),
          h(S, P),
          h(S, L),
          h(S, z),
          h(S, F),
          h(s, E),
          h(s, D));
        for (let Ce = 0; Ce < N.length; Ce += 1) N[Ce] && N[Ce].m(D, null);
        (h(s, Q),
          h(s, X),
          h(X, ae),
          h(ae, J),
          h(ae, se),
          h(ae, te),
          h(te, $),
          h(te, he),
          h(X, Re),
          h(X, pe),
          h(pe, G),
          B(_e, G, null),
          h(pe, He),
          h(pe, be),
          h(be, fe),
          h(be, ke),
          h(be, we),
          h(pe, Oe),
          h(pe, qe),
          B(Le, qe, null),
          (Ve = !0),
          Te ||
            ((ot = [
              W(G, "click", l[304]),
              W(we, "input", l[305]),
              W(we, "change", l[173]),
              W(qe, "click", l[306]),
            ]),
            (Te = !0)));
      },
      p(Y, de) {
        const Ce = {};
        (de[0] & 16777216 &&
          (Ce.options = [
            {
              label: "Daytime",
              value: "light",
              icon: g0,
              chip: Y[24] === "light" ? "Now" : void 0,
            },
            {
              label: "Nighttime",
              value: "dark",
              icon: E0,
              chip: Y[24] === "dark" ? "Now" : void 0,
            },
          ]),
          !m && de[0] & 4 && ((m = !0), (Ce.value = Y[2]), F1(() => (m = !1))),
          g.$set(Ce),
          (!Ve || de[0] & 4) &&
            k !==
              (k =
                Y[2] === "dark"
                  ? "Texture in Dark Mode"
                  : "Texture in Light Mode") &&
            ze(f, k),
          (!Ve || de[0] & 8) && T !== (T = Y[3].length + "") && ze(L, T),
          (de[0] & 5243016) | (de[3] & 33956352) &&
            ((lt = Mt(Ol)),
            Ie(),
            (N = el(N, de, Ne, 1, Y, lt, ne, D, $0, lr, null, ga)),
            Be()),
          (!Ve || de[3] & 4096) &&
            ge !== (ge = Math.round(Y[105] * 100) + "") &&
            ze($, ge),
          (!Ve || de[3] & 7168) &&
            ce(
              fe,
              "width",
              ((Y[105] - Y[104]) / (Y[103] - Y[104])) * 100 + "%",
            ),
          (!Ve || de[3] & 2048) && o(we, "min", Y[104]),
          (!Ve || de[3] & 1024) && o(we, "max", Y[103]),
          (!Ve || de[3] & 4096) && (we.value = Y[105]));
      },
      i(Y) {
        if (!Ve) {
          (C(a.$$.fragment, Y), C(g.$$.fragment, Y), C(O.$$.fragment, Y));
          for (let de = 0; de < lt.length; de += 1) C(N[de]);
          (C(_e.$$.fragment, Y), C(Le.$$.fragment, Y), (Ve = !0));
        }
      },
      o(Y) {
        (V(a.$$.fragment, Y), V(g.$$.fragment, Y), V(O.$$.fragment, Y));
        for (let de = 0; de < N.length; de += 1) V(N[de]);
        (V(_e.$$.fragment, Y), V(Le.$$.fragment, Y), (Ve = !1));
      },
      d(Y) {
        (Y && _(e), q(a), q(g), q(O));
        for (let de = 0; de < N.length; de += 1) N[de].d();
        (q(_e), q(Le), (Te = !1), at(ot));
      },
    }
  );
}
function ng(l) {
  let e, t;
  function n() {
    return l[301](l[415]);
  }
  function a() {
    return l[303](l[415]);
  }
  return (
    (e = new Nn({
      props: {
        id: l[415].id,
        icon: l[415].icon,
        lines: l[415].lines,
        active: l[106] === l[415].id,
        locked: l[118](l[415].id),
        large: !0,
        pinnable: !0,
        pinned: l[3].includes(l[415].id),
        badge: l[415].id === l[102] ? "Recommended" : l[415].new ? "NEW" : "",
      },
    })),
    e.$on("select", n),
    e.$on("locked", l[302]),
    e.$on("pin", a),
    {
      c() {
        j(e.$$.fragment);
      },
      m(u, r) {
        (B(e, u, r), (t = !0));
      },
      p(u, r) {
        l = u;
        const p = {};
        (r[3] & 8192 && (p.active = l[106] === l[415].id),
          r[0] & 8 && (p.pinned = l[3].includes(l[415].id)),
          r[3] & 512 &&
            (p.badge =
              l[415].id === l[102] ? "Recommended" : l[415].new ? "NEW" : ""),
          e.$set(p));
      },
      i(u) {
        t || (C(e.$$.fragment, u), (t = !0));
      },
      o(u) {
        (V(e.$$.fragment, u), (t = !1));
      },
      d(u) {
        q(e, u);
      },
    }
  );
}
function lr(l, e) {
  let t,
    n,
    a,
    u = e[415].enabled && ng(e);
  return {
    key: l,
    first: null,
    c() {
      ((t = c1()), u && u.c(), (n = c1()), (this.first = t));
    },
    m(r, p) {
      (b(r, t, p), u && u.m(r, p), b(r, n, p), (a = !0));
    },
    p(r, p) {
      ((e = r), e[415].enabled && u.p(e, p));
    },
    i(r) {
      a || (C(u), (a = !0));
    },
    o(r) {
      (V(u), (a = !1));
    },
    d(r) {
      (r && (_(t), _(n)), u && u.d(r));
    },
  };
}
function nr(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k, f, M, S, O, P, T, L;
  a = new Ir({ props: { size: 16, weight: "fill" } });
  let z = l[36] && ir(l);
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        j(a.$$.fragment),
        (u = Z()),
        (r = v("h4")),
        (r.textContent = "Desk Lamp Mode"),
        (p = Z()),
        (d = v("span")),
        (d.textContent = "Experimental"),
        (c = Z()),
        (g = v("p")),
        (g.textContent = `Casts a warm pool of light across the screen, as if a lamp were sitting beside you.\r\n                Layers on top of your texture.`),
        (m = Z()),
        (i = v("div")),
        (s = v("span")),
        (s.textContent = "Enable Desk Lamp"),
        (w = Z()),
        (k = v("label")),
        (f = v("input")),
        (M = Z()),
        (S = v("span")),
        (O = Z()),
        z && z.c(),
        o(n, "class", "section-icon-wrap svelte-17i5oct"),
        o(r, "class", "settings-heading svelte-17i5oct"),
        o(d, "class", "settings-heading-chip svelte-17i5oct"),
        o(t, "class", "section-header svelte-17i5oct"),
        o(g, "class", "settings-text svelte-17i5oct"),
        ce(g, "margin-top", "-4px"),
        o(s, "class", "toggle-label svelte-17i5oct"),
        o(f, "type", "checkbox"),
        (f.checked = l[36]),
        o(f, "class", "svelte-17i5oct"),
        o(S, "class", "slider svelte-17i5oct"),
        o(k, "class", "toggle-switch svelte-17i5oct"),
        o(i, "class", "toggle-option svelte-17i5oct"),
        o(e, "class", "settings-section svelte-17i5oct"));
    },
    m(F, E) {
      (b(F, e, E),
        h(e, t),
        h(t, n),
        B(a, n, null),
        h(t, u),
        h(t, r),
        h(t, p),
        h(t, d),
        h(e, c),
        h(e, g),
        h(e, m),
        h(e, i),
        h(i, s),
        h(i, w),
        h(i, k),
        h(k, f),
        h(k, M),
        h(k, S),
        h(e, O),
        z && z.m(e, null),
        (P = !0),
        T || ((L = W(f, "change", l[119])), (T = !0)));
    },
    p(F, E) {
      ((!P || E[1] & 32) && (f.checked = F[36]),
        F[36]
          ? z
            ? (z.p(F, E), E[1] & 32 && C(z, 1))
            : ((z = ir(F)), z.c(), C(z, 1), z.m(e, null))
          : z &&
            (Ie(),
            V(z, 1, 1, () => {
              z = null;
            }),
            Be()));
    },
    i(F) {
      P || (C(a.$$.fragment, F), C(z), (P = !0));
    },
    o(F) {
      (V(a.$$.fragment, F), V(z), (P = !1));
    },
    d(F) {
      (F && _(e), q(a), z && z.d(), (T = !1), L());
    },
  };
}
function ir(l) {
  let e,
    t,
    n,
    a,
    u,
    r = [],
    p = new Map(),
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T = Math.round(3500 - l[15] * 1500) + "",
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e = Math.round(l[16] * 100) + "",
    He,
    be,
    fe,
    ke,
    we,
    Oe,
    qe,
    Le,
    Ve,
    Te,
    ot,
    Ke,
    x,
    lt,
    Ne,
    Y,
    de,
    Ce = Math.round(l[17] * 100) + "",
    Ee,
    it,
    De,
    je,
    Ct,
    pt,
    wt,
    Pt,
    Lt,
    Gt,
    mt,
    Yt,
    Ue,
    gt,
    tt,
    Wt,
    It,
    Ot,
    nt,
    Et,
    yt,
    _1,
    Fe,
    u1,
    ie,
    ye,
    Xe,
    o1,
    Ut,
    Qt,
    f1,
    Bt,
    Rt,
    Zt,
    xt,
    $t = Mt(Kl);
  const _t = (me) => me[412].id;
  for (let me = 0; me < $t.length; me += 1) {
    let We = pa(l, $t, me),
      rt = _t(We);
    p.set(rt, (r[me] = ar(rt, We)));
  }
  function L1(me) {
    l[308](me);
  }
  let d1 = {
    options: [
      { label: "Top-Left", value: "top-left" },
      { label: "Left", value: "left" },
      { label: "Top", value: "top" },
      { label: "Right", value: "right" },
      { label: "Top-Right", value: "top-right" },
    ],
    ariaLabel: "Light Source Position",
    showChipWhenSelected: !1,
  };
  (l[14] !== void 0 && (d1.value = l[14]),
    (w = new Un({ props: d1 })),
    Jt.push(() => W1(w, "value", L1)),
    w.$on("change", l[173]),
    (N = new e5({ props: { size: 14, weight: "bold", color: "#FFF2C9" } })),
    (ge = new P4({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })),
    (pt = new Fn({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })),
    (gt = new E0({ props: { size: 14, weight: "fill", color: "#FFF2C9" } })));
  let ut = l[97] && rr();
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        (n.textContent = "Ambiance"),
        (a = Z()),
        (u = v("div")));
      for (let me = 0; me < r.length; me += 1) r[me].c();
      ((d = Z()),
        (c = v("div")),
        (g = v("span")),
        (g.textContent = "Adjustments"),
        (m = Z()),
        (i = v("div")),
        (i.innerHTML =
          '<span class="toggle-label svelte-17i5oct" style="opacity: 0.8">Light Source</span>'),
        (s = Z()),
        j(w.$$.fragment),
        (f = Z()),
        (M = v("div")),
        (S = v("span")),
        (S.textContent = "Color Temperature"),
        (O = Z()),
        (P = v("span")),
        (L = K(T)),
        (z = K("K")),
        (F = Z()),
        (E = v("div")),
        (D = v("button")),
        j(N.$$.fragment),
        (ne = Z()),
        (Q = v("div")),
        (X = v("div")),
        (ae = Z()),
        (J = v("input")),
        (se = Z()),
        (te = v("button")),
        j(ge.$$.fragment),
        ($ = Z()),
        (he = v("div")),
        (Re = v("span")),
        (Re.textContent = "Height & Spread"),
        (pe = Z()),
        (G = v("span")),
        (He = K(_e)),
        (be = K("%")),
        (fe = Z()),
        (ke = v("div")),
        (we = v("button")),
        (we.innerHTML =
          '<img src="/icons/spread-min.svg" alt="" style="width: 14px; height: 14px;"/>'),
        (Oe = Z()),
        (qe = v("div")),
        (Le = v("div")),
        (Ve = Z()),
        (Te = v("input")),
        (ot = Z()),
        (Ke = v("button")),
        (Ke.innerHTML =
          '<img src="/icons/spread-max.svg" alt="" style="width: 14px; height: 14px;"/>'),
        (x = Z()),
        (lt = v("div")),
        (Ne = v("span")),
        (Ne.textContent = "Vignette Dimming"),
        (Y = Z()),
        (de = v("span")),
        (Ee = K(Ce)),
        (it = K("%")),
        (De = Z()),
        (je = v("div")),
        (Ct = v("button")),
        j(pt.$$.fragment),
        (wt = Z()),
        (Pt = v("div")),
        (Lt = v("div")),
        (Gt = Z()),
        (mt = v("input")),
        (Yt = Z()),
        (Ue = v("button")),
        j(gt.$$.fragment),
        (tt = Z()),
        (Wt = v("div")),
        (It = v("span")),
        (Ot = K(
          `Turn on Desk Lamp Mode on Dark Mode only\r\n                      `,
        )),
        ut && ut.c(),
        (nt = Z()),
        (Et = v("label")),
        (yt = v("input")),
        (_1 = Z()),
        (Fe = v("span")),
        (u1 = Z()),
        (ie = v("div")),
        (ye = v("span")),
        (ye.textContent = "Animate lamp switching on"),
        (Xe = Z()),
        (o1 = v("label")),
        (Ut = v("input")),
        (Qt = Z()),
        (f1 = v("span")),
        o(n, "class", "texture-preset-label svelte-17i5oct"),
        o(u, "class", "texture-cards svelte-17i5oct"),
        ce(u, "margin-top", "16px"),
        o(t, "class", "texture-preset-group svelte-17i5oct"),
        o(g, "class", "texture-preset-label svelte-17i5oct"),
        o(i, "class", "intensity-setting-header svelte-17i5oct"),
        ce(i, "margin-top", "16px"),
        ce(i, "margin-bottom", "8px"),
        o(S, "class", "toggle-label svelte-17i5oct"),
        ce(S, "opacity", "0.8"),
        o(P, "class", "intensity-pct svelte-17i5oct"),
        ce(P, "opacity", "0.8"),
        o(M, "class", "intensity-setting-header svelte-17i5oct"),
        ce(M, "margin-top", "16px"),
        o(D, "class", "cc-intensity-btn svelte-17i5oct"),
        o(D, "title", "Cooler temperature"),
        o(X, "class", "settings-slider-fill svelte-17i5oct"),
        ce(X, "width", l[15] * 100 + "%"),
        o(J, "type", "range"),
        o(J, "min", "0"),
        o(J, "max", "1"),
        o(J, "step", "0.01"),
        o(J, "class", "settings-intensity-slider svelte-17i5oct"),
        o(Q, "class", "settings-slider-track svelte-17i5oct"),
        o(te, "class", "cc-intensity-btn svelte-17i5oct"),
        o(te, "title", "Warmer temperature"),
        o(E, "class", "intensity-slider-row svelte-17i5oct"),
        ce(E, "margin-top", "4px"),
        o(Re, "class", "toggle-label svelte-17i5oct"),
        ce(Re, "opacity", "0.8"),
        o(G, "class", "intensity-pct svelte-17i5oct"),
        ce(G, "opacity", "0.8"),
        o(he, "class", "intensity-setting-header svelte-17i5oct"),
        ce(he, "margin-top", "16px"),
        o(we, "class", "cc-intensity-btn svelte-17i5oct"),
        o(we, "title", "Decrease spread"),
        o(Le, "class", "settings-slider-fill svelte-17i5oct"),
        ce(Le, "width", l[16] * 100 + "%"),
        o(Te, "type", "range"),
        o(Te, "min", "0"),
        o(Te, "max", "1"),
        o(Te, "step", "0.01"),
        o(Te, "class", "settings-intensity-slider svelte-17i5oct"),
        o(qe, "class", "settings-slider-track svelte-17i5oct"),
        o(Ke, "class", "cc-intensity-btn svelte-17i5oct"),
        o(Ke, "title", "Increase spread"),
        o(ke, "class", "intensity-slider-row svelte-17i5oct"),
        ce(ke, "margin-top", "4px"),
        o(Ne, "class", "toggle-label svelte-17i5oct"),
        ce(Ne, "opacity", "0.8"),
        o(de, "class", "intensity-pct svelte-17i5oct"),
        ce(de, "opacity", "0.8"),
        o(lt, "class", "intensity-setting-header svelte-17i5oct"),
        ce(lt, "margin-top", "16px"),
        o(Ct, "class", "cc-intensity-btn svelte-17i5oct"),
        o(Ct, "title", "Decrease dimming"),
        o(Lt, "class", "settings-slider-fill svelte-17i5oct"),
        ce(Lt, "width", ((l[17] - 0.1) / (0.5 - 0.1)) * 100 + "%"),
        o(mt, "type", "range"),
        o(mt, "min", "0.1"),
        o(mt, "max", "0.5"),
        o(mt, "step", "0.01"),
        o(mt, "class", "settings-intensity-slider svelte-17i5oct"),
        o(Pt, "class", "settings-slider-track svelte-17i5oct"),
        o(Ue, "class", "cc-intensity-btn svelte-17i5oct"),
        o(Ue, "title", "Increase dimming"),
        o(je, "class", "intensity-slider-row svelte-17i5oct"),
        ce(je, "margin-top", "4px"),
        o(c, "class", "texture-preset-group svelte-17i5oct"),
        o(It, "class", "toggle-label svelte-17i5oct"),
        o(yt, "type", "checkbox"),
        o(yt, "class", "svelte-17i5oct"),
        o(Fe, "class", "slider svelte-17i5oct"),
        o(Et, "class", "toggle-switch svelte-17i5oct"),
        o(Wt, "class", "toggle-option svelte-17i5oct"),
        o(ye, "class", "toggle-label svelte-17i5oct"),
        o(Ut, "type", "checkbox"),
        o(Ut, "class", "svelte-17i5oct"),
        o(f1, "class", "slider svelte-17i5oct"),
        o(o1, "class", "toggle-switch svelte-17i5oct"),
        o(ie, "class", "toggle-option svelte-17i5oct"),
        o(e, "class", "desk-lamp-sliders svelte-17i5oct"));
    },
    m(me, We) {
      (b(me, e, We), h(e, t), h(t, n), h(t, a), h(t, u));
      for (let rt = 0; rt < r.length; rt += 1) r[rt] && r[rt].m(u, null);
      (h(e, d),
        h(e, c),
        h(c, g),
        h(c, m),
        h(c, i),
        h(c, s),
        B(w, c, null),
        h(c, f),
        h(c, M),
        h(M, S),
        h(M, O),
        h(M, P),
        h(P, L),
        h(P, z),
        h(c, F),
        h(c, E),
        h(E, D),
        B(N, D, null),
        h(E, ne),
        h(E, Q),
        h(Q, X),
        h(Q, ae),
        h(Q, J),
        b1(J, l[15]),
        h(E, se),
        h(E, te),
        B(ge, te, null),
        h(c, $),
        h(c, he),
        h(he, Re),
        h(he, pe),
        h(he, G),
        h(G, He),
        h(G, be),
        h(c, fe),
        h(c, ke),
        h(ke, we),
        h(ke, Oe),
        h(ke, qe),
        h(qe, Le),
        h(qe, Ve),
        h(qe, Te),
        b1(Te, l[16]),
        h(ke, ot),
        h(ke, Ke),
        h(c, x),
        h(c, lt),
        h(lt, Ne),
        h(lt, Y),
        h(lt, de),
        h(de, Ee),
        h(de, it),
        h(c, De),
        h(c, je),
        h(je, Ct),
        B(pt, Ct, null),
        h(je, wt),
        h(je, Pt),
        h(Pt, Lt),
        h(Pt, Gt),
        h(Pt, mt),
        b1(mt, l[17]),
        h(je, Yt),
        h(je, Ue),
        B(gt, Ue, null),
        h(e, tt),
        h(e, Wt),
        h(Wt, It),
        h(It, Ot),
        ut && ut.m(It, null),
        h(Wt, nt),
        h(Wt, Et),
        h(Et, yt),
        (yt.checked = l[13]),
        h(Et, _1),
        h(Et, Fe),
        h(e, u1),
        h(e, ie),
        h(ie, ye),
        h(ie, Xe),
        h(ie, o1),
        h(o1, Ut),
        (Ut.checked = l[56]),
        h(o1, Qt),
        h(o1, f1),
        (Rt = !0),
        Zt ||
          ((xt = [
            W(D, "click", l[309]),
            W(J, "change", l[310]),
            W(J, "input", l[310]),
            W(J, "change", l[173]),
            W(J, "input", l[173]),
            W(te, "click", l[311]),
            W(we, "click", l[312]),
            W(Te, "change", l[313]),
            W(Te, "input", l[313]),
            W(Te, "change", l[173]),
            W(Te, "input", l[173]),
            W(Ke, "click", l[314]),
            W(Ct, "click", l[315]),
            W(mt, "change", l[316]),
            W(mt, "input", l[316]),
            W(mt, "change", l[173]),
            W(mt, "input", l[173]),
            W(Ue, "click", l[317]),
            W(yt, "change", l[318]),
            W(yt, "change", l[173]),
            W(Ut, "change", l[319]),
            W(Ut, "change", l[173]),
          ]),
          (Zt = !0)));
    },
    p(me, We) {
      We[3] & 134217760 &&
        (($t = Mt(Kl)),
        Ie(),
        (r = el(r, We, _t, 1, me, $t, p, u, $0, ar, null, pa)),
        Be());
      const rt = {};
      (!k &&
        We[0] & 16384 &&
        ((k = !0), (rt.value = me[14]), F1(() => (k = !1))),
        w.$set(rt),
        (!Rt || We[0] & 32768) &&
          T !== (T = Math.round(3500 - me[15] * 1500) + "") &&
          ze(L, T),
        (!Rt || We[0] & 32768) && ce(X, "width", me[15] * 100 + "%"),
        We[0] & 32768 && b1(J, me[15]),
        (!Rt || We[0] & 65536) &&
          _e !== (_e = Math.round(me[16] * 100) + "") &&
          ze(He, _e),
        (!Rt || We[0] & 65536) && ce(Le, "width", me[16] * 100 + "%"),
        We[0] & 65536 && b1(Te, me[16]),
        (!Rt || We[0] & 131072) &&
          Ce !== (Ce = Math.round(me[17] * 100) + "") &&
          ze(Ee, Ce),
        (!Rt || We[0] & 131072) &&
          ce(Lt, "width", ((me[17] - 0.1) / (0.5 - 0.1)) * 100 + "%"),
        We[0] & 131072 && b1(mt, me[17]),
        me[97]
          ? ut || ((ut = rr()), ut.c(), ut.m(It, null))
          : ut && (ut.d(1), (ut = null)),
        We[0] & 8192 && (yt.checked = me[13]),
        We[1] & 33554432 && (Ut.checked = me[56]));
    },
    i(me) {
      if (!Rt) {
        for (let We = 0; We < $t.length; We += 1) C(r[We]);
        (C(w.$$.fragment, me),
          C(N.$$.fragment, me),
          C(ge.$$.fragment, me),
          C(pt.$$.fragment, me),
          C(gt.$$.fragment, me),
          me &&
            G1(() => {
              Rt && (Bt || (Bt = r0(e, o0, { duration: 180 }, !0)), Bt.run(1));
            }),
          (Rt = !0));
      }
    },
    o(me) {
      for (let We = 0; We < r.length; We += 1) V(r[We]);
      (V(w.$$.fragment, me),
        V(N.$$.fragment, me),
        V(ge.$$.fragment, me),
        V(pt.$$.fragment, me),
        V(gt.$$.fragment, me),
        me && (Bt || (Bt = r0(e, o0, { duration: 180 }, !1)), Bt.run(0)),
        (Rt = !1));
    },
    d(me) {
      me && _(e);
      for (let We = 0; We < r.length; We += 1) r[We].d();
      (q(w),
        q(N),
        q(ge),
        q(pt),
        q(gt),
        ut && ut.d(),
        me && Bt && Bt.end(),
        (Zt = !1),
        at(xt));
    },
  };
}
function ar(l, e) {
  let t, n, a;
  function u() {
    return e[307](e[412]);
  }
  return (
    (n = new Nn({
      props: {
        id: e[412].id,
        lines: e[412].label.split(" "),
        active: e[412].id === e[98],
        large: !0,
      },
    })),
    n.$on("select", u),
    {
      key: l,
      first: null,
      c() {
        ((t = c1()), j(n.$$.fragment), (this.first = t));
      },
      m(r, p) {
        (b(r, t, p), B(n, r, p), (a = !0));
      },
      p(r, p) {
        e = r;
        const d = {};
        (p[3] & 32 && (d.active = e[412].id === e[98]), n.$set(d));
      },
      i(r) {
        a || (C(n.$$.fragment, r), (a = !0));
      },
      o(r) {
        (V(n.$$.fragment, r), (a = !1));
      },
      d(r) {
        (r && _(t), q(n, r));
      },
    }
  );
}
function rr(l) {
  let e;
  return {
    c() {
      ((e = v("span")),
        (e.textContent = "Paused — Daytime"),
        o(e, "class", "desk-lamp-waiting-chip svelte-17i5oct"));
    },
    m(t, n) {
      b(t, e, n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function or(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s;
  a = new Tn({ props: { size: 16, weight: "fill" } });
  function w(P, T) {
    return P[99] ? ag : ig;
  }
  let k = w(l),
    f = k(l);
  const M = [sg, og, rg],
    S = [];
  function O(P, T) {
    return P[59] ? 0 : P[58] ? 1 : 2;
  }
  return (
    (m = O(l)),
    (i = S[m] = M[m](l)),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "Refer a Friend"),
          (p = Z()),
          (d = v("div")),
          (c = v("div")),
          f.c(),
          (g = Z()),
          i.c(),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(c, "class", "refer-hero-card svelte-17i5oct"),
          o(d, "class", "refer-hero-wrap svelte-17i5oct"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m(P, T) {
        (b(P, e, T),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          h(e, d),
          h(d, c),
          f.m(c, null),
          h(c, g),
          S[m].m(c, null),
          (s = !0));
      },
      p(P, T) {
        k !== (k = w(P)) && (f.d(1), (f = k(P)), f && (f.c(), f.m(c, g)));
        let L = m;
        ((m = O(P)),
          m === L
            ? S[m].p(P, T)
            : (Ie(),
              V(S[L], 1, 1, () => {
                S[L] = null;
              }),
              Be(),
              (i = S[m]),
              i ? i.p(P, T) : ((i = S[m] = M[m](P)), i.c()),
              C(i, 1),
              i.m(c, null)));
      },
      i(P) {
        s || (C(a.$$.fragment, P), C(i), (s = !0));
      },
      o(P) {
        (V(a.$$.fragment, P), V(i), (s = !1));
      },
      d(P) {
        (P && _(e), q(a), f.d(), S[m].d());
      },
    }
  );
}
function ig(l) {
  let e, t, n, a, u;
  return {
    c() {
      ((e = v("span")),
        (e.textContent = "SPECIAL INVITATION"),
        (t = Z()),
        (n = v("h3")),
        (n.innerHTML = 'Give <em class="svelte-17i5oct">60% off</em>'),
        (a = Z()),
        (u = v("p")),
        (u.innerHTML =
          'Share your referral link and give your friends <strong class="svelte-17i5oct">60% off</strong> Paperman Unlimited.'),
        o(e, "class", "refer-label svelte-17i5oct"),
        o(n, "class", "refer-title svelte-17i5oct"),
        o(u, "class", "refer-desc svelte-17i5oct"));
    },
    m(r, p) {
      (b(r, e, p), b(r, t, p), b(r, n, p), b(r, a, p), b(r, u, p));
    },
    d(r) {
      r && (_(e), _(t), _(n), _(a), _(u));
    },
  };
}
function ag(l) {
  let e, t, n, a, u;
  return {
    c() {
      ((e = v("span")),
        (e.textContent = "COMMUNITY"),
        (t = Z()),
        (n = v("h3")),
        (n.innerHTML = 'Share <em class="svelte-17i5oct">Paperman</em>'),
        (a = Z()),
        (u = v("p")),
        (u.textContent =
          "Know someone whose eyes could use a break? Share Paperman with them on Setapp."),
        o(e, "class", "refer-label svelte-17i5oct"),
        o(n, "class", "refer-title svelte-17i5oct"),
        o(u, "class", "refer-desc svelte-17i5oct"));
    },
    m(r, p) {
      (b(r, e, p), b(r, t, p), b(r, n, p), b(r, a, p), b(r, u, p));
    },
    d(r) {
      r && (_(e), _(t), _(n), _(a), _(u));
    },
  };
}
function rg(l) {
  let e, t, n, a, u, r;
  return (
    (t = new Tn({ props: { size: 15, weight: "bold" } })),
    {
      c() {
        ((e = v("button")),
          j(t.$$.fragment),
          (n = K(`\r\n                      Generate Referral Link`)),
          o(e, "class", "refer-btn-share svelte-17i5oct"),
          ce(e, "width", "100%"));
      },
      m(p, d) {
        (b(p, e, d),
          B(t, e, null),
          h(e, n),
          (a = !0),
          u || ((r = W(e, "click", l[114])), (u = !0)));
      },
      p: A,
      i(p) {
        a || (C(t.$$.fragment, p), (a = !0));
      },
      o(p) {
        (V(t.$$.fragment, p), (a = !1));
      },
      d(p) {
        (p && _(e), q(t), (u = !1), r());
      },
    }
  );
}
function og(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d = l[60] ? "Copied" : "Copy",
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T;
  ((t = new Vf({
    props: { size: 14, weight: "regular", class: "refer-box-icon" },
  })),
    (s = new Gr({ props: { size: 15, weight: "regular" } })));
  const L = [ug, cg],
    z = [];
  function F(E, D) {
    return E[60] ? 0 : 1;
  }
  return (
    (M = F(l)),
    (S = z[M] = L[M](l)),
    {
      c() {
        ((e = v("button")),
          j(t.$$.fragment),
          (n = Z()),
          (a = v("span")),
          (u = K(l[58])),
          (r = Z()),
          (p = v("span")),
          (c = K(d)),
          (g = Z()),
          (m = v("div")),
          (i = v("button")),
          j(s.$$.fragment),
          (w = K(`\r\n                        Share`)),
          (k = Z()),
          (f = v("button")),
          S.c(),
          o(a, "class", "refer-box-url svelte-17i5oct"),
          o(p, "class", "refer-box-badge svelte-17i5oct"),
          o(e, "class", "refer-link-box svelte-17i5oct"),
          o(e, "title", "Click to copy link"),
          o(i, "class", "refer-btn-share svelte-17i5oct"),
          o(f, "class", "refer-btn-copy svelte-17i5oct"),
          o(m, "class", "refer-actions-grid svelte-17i5oct"));
      },
      m(E, D) {
        (b(E, e, D),
          B(t, e, null),
          h(e, n),
          h(e, a),
          h(a, u),
          h(e, r),
          h(e, p),
          h(p, c),
          b(E, g, D),
          b(E, m, D),
          h(m, i),
          B(s, i, null),
          h(i, w),
          h(m, k),
          h(m, f),
          z[M].m(f, null),
          (O = !0),
          P ||
            ((T = [
              W(e, "click", l[115]),
              W(i, "click", l[116]),
              W(f, "click", l[115]),
            ]),
            (P = !0)));
      },
      p(E, D) {
        ((!O || D[1] & 134217728) && ze(u, E[58]),
          (!O || D[1] & 536870912) &&
            d !== (d = E[60] ? "Copied" : "Copy") &&
            ze(c, d));
        let N = M;
        ((M = F(E)),
          M !== N &&
            (Ie(),
            V(z[N], 1, 1, () => {
              z[N] = null;
            }),
            Be(),
            (S = z[M]),
            S || ((S = z[M] = L[M](E)), S.c()),
            C(S, 1),
            S.m(f, null)));
      },
      i(E) {
        O || (C(t.$$.fragment, E), C(s.$$.fragment, E), C(S), (O = !0));
      },
      o(E) {
        (V(t.$$.fragment, E), V(s.$$.fragment, E), V(S), (O = !1));
      },
      d(E) {
        (E && (_(e), _(g), _(m)), q(t), q(s), z[M].d(), (P = !1), at(T));
      },
    }
  );
}
function sg(l) {
  let e;
  return {
    c() {
      ((e = v("div")),
        (e.innerHTML =
          '<span class="refer-link-loading-text svelte-17i5oct">Loading your referral link…</span>'),
        o(e, "class", "refer-link-box loading svelte-17i5oct"));
    },
    m(t, n) {
      b(t, e, n);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && _(e);
    },
  };
}
function cg(l) {
  let e, t, n;
  return (
    (e = new On({ props: { size: 15, weight: "regular" } })),
    {
      c() {
        (j(e.$$.fragment), (t = K(`\r\n                          Copy Link`)));
      },
      m(a, u) {
        (B(e, a, u), b(a, t, u), (n = !0));
      },
      i(a) {
        n || (C(e.$$.fragment, a), (n = !0));
      },
      o(a) {
        (V(e.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && _(t), q(e, a));
      },
    }
  );
}
function ug(l) {
  let e, t, n;
  return (
    (e = new Il({ props: { size: 15, weight: "bold" } })),
    {
      c() {
        (j(e.$$.fragment), (t = K(`\r\n                          Copied!`)));
      },
      m(a, u) {
        (B(e, a, u), b(a, t, u), (n = !0));
      },
      i(a) {
        n || (C(e.$$.fragment, a), (n = !0));
      },
      o(a) {
        (V(e.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && _(t), q(e, a));
      },
    }
  );
}
function sr(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He,
    be,
    fe,
    ke,
    we,
    Oe,
    qe;
  ((a = new Br({ props: { size: 16, weight: "fill" } })),
    (w = new y4({ props: { size: 16, weight: "regular" } })),
    (P = new y1({ props: { size: 14, weight: "bold" } })));
  const Le = [dg, fg],
    Ve = [];
  function Te(Y, de) {
    return Y[68] ? 0 : 1;
  }
  ((z = Te(l)), (F = Ve[z] = Le[z](l)));
  let ot = !1,
    Ke = l[7] === "macos" && cr(l);
  ((te = new Mn({ props: { size: 16, weight: "regular", class: "faq-icon" } })),
    ($ = new Pl({
      props: {
        size: 14,
        weight: "bold",
        class: "faq-caret " + (l[67] === 2 ? "open" : ""),
      },
    })));
  let x = l[67] === 2 && fr(),
    lt = !1;
  ((He = new Mn({ props: { size: 16, weight: "regular", class: "faq-icon" } })),
    (fe = new Pl({
      props: {
        size: 14,
        weight: "bold",
        class: "faq-caret " + (l[67] === 3 ? "open" : ""),
      },
    })));
  let Ne = l[67] === 3 && dr();
  return {
    c() {
      ((e = v("div")),
        (t = v("div")),
        (n = v("span")),
        j(a.$$.fragment),
        (u = Z()),
        (r = v("h4")),
        (r.textContent = "Support"),
        (p = Z()),
        (d = v("div")),
        (c = v("span")),
        (c.textContent = "Help us improve Paperman"),
        (g = Z()),
        (m = v("div")),
        (i = v("span")),
        (s = v("span")),
        j(w.$$.fragment),
        (k = Z()),
        (f = v("span")),
        (f.innerHTML =
          'Email us<span class="toggle-sub svelte-17i5oct">hello@doubl.one</span>'),
        (M = Z()),
        (S = v("span")),
        (O = v("span")),
        j(P.$$.fragment),
        (T = Z()),
        (L = v("button")),
        F.c(),
        (D = Z()),
        (N = v("div")),
        (ne = v("span")),
        (ne.textContent = "Frequently Asked Questions"),
        (Q = Z()),
        (X = Z()),
        Ke && Ke.c(),
        (ae = Z()),
        (J = v("div")),
        (se = v("button")),
        j(te.$$.fragment),
        (ge = K(
          `\r\n                    Why is the effect not applied properly to all my monitors?\r\n                    `,
        )),
        j($.$$.fragment),
        (he = Z()),
        x && x.c(),
        (Re = Z()),
        (pe = Z()),
        (G = v("div")),
        (_e = v("button")),
        j(He.$$.fragment),
        (be = K(
          `\r\n                    How can the Paperman effect help me?\r\n                    `,
        )),
        j(fe.$$.fragment),
        (ke = Z()),
        Ne && Ne.c(),
        o(n, "class", "section-icon-wrap svelte-17i5oct"),
        o(r, "class", "settings-heading svelte-17i5oct"),
        o(t, "class", "section-header svelte-17i5oct"),
        o(c, "class", "support-group-label svelte-17i5oct"),
        o(s, "class", "toggle-icon svelte-17i5oct"),
        o(f, "class", "toggle-label svelte-17i5oct"),
        o(i, "class", "toggle-leading svelte-17i5oct"),
        o(O, "class", "toggle-action svelte-17i5oct"),
        o(L, "class", "support-icon-button svelte-17i5oct"),
        o(L, "title", (E = l[68] ? "Copied" : "Copy email address")),
        o(L, "aria-label", "Copy email address"),
        o(S, "class", "support-item-actions svelte-17i5oct"),
        o(m, "class", "support-item svelte-17i5oct"),
        o(m, "role", "button"),
        o(m, "tabindex", "0"),
        o(m, "title", "Open in email app"),
        o(d, "class", "support-group svelte-17i5oct"),
        o(ne, "class", "support-group-label svelte-17i5oct"),
        o(se, "class", "faq-question svelte-17i5oct"),
        o(J, "class", "faq-item svelte-17i5oct"),
        o(_e, "class", "faq-question svelte-17i5oct"),
        o(G, "class", "faq-item svelte-17i5oct"),
        o(N, "class", "support-group svelte-17i5oct"),
        o(e, "class", "settings-section svelte-17i5oct"));
    },
    m(Y, de) {
      (b(Y, e, de),
        h(e, t),
        h(t, n),
        B(a, n, null),
        h(t, u),
        h(t, r),
        h(e, p),
        h(e, d),
        h(d, c),
        h(d, g),
        h(d, m),
        h(m, i),
        h(i, s),
        B(w, s, null),
        h(i, k),
        h(i, f),
        h(m, M),
        h(m, S),
        h(S, O),
        B(P, O, null),
        h(S, T),
        h(S, L),
        Ve[z].m(L, null),
        h(e, D),
        h(e, N),
        h(N, ne),
        h(N, Q),
        h(N, X),
        Ke && Ke.m(N, null),
        h(N, ae),
        h(N, J),
        h(J, se),
        B(te, se, null),
        h(se, ge),
        B($, se, null),
        h(J, he),
        x && x.m(J, null),
        h(N, Re),
        h(N, pe),
        h(N, G),
        h(G, _e),
        B(He, _e, null),
        h(_e, be),
        B(fe, _e, null),
        h(G, ke),
        Ne && Ne.m(G, null),
        (we = !0),
        Oe ||
          ((qe = [
            W(L, "click", a0(l[320])),
            W(L, "keydown", a0(l[214])),
            W(m, "click", l[137]),
            W(m, "keydown", l[321]),
            W(se, "click", l[325]),
            W(_e, "click", l[328]),
          ]),
          (Oe = !0)));
    },
    p(Y, de) {
      let Ce = z;
      ((z = Te(Y)),
        z !== Ce &&
          (Ie(),
          V(Ve[Ce], 1, 1, () => {
            Ve[Ce] = null;
          }),
          Be(),
          (F = Ve[z]),
          F || ((F = Ve[z] = Le[z](Y)), F.c()),
          C(F, 1),
          F.m(L, null)),
        (!we ||
          (de[2] & 64 &&
            E !== (E = Y[68] ? "Copied" : "Copy email address"))) &&
          o(L, "title", E),
        Y[7] === "macos"
          ? Ke
            ? (Ke.p(Y, de), de[0] & 128 && C(Ke, 1))
            : ((Ke = cr(Y)), Ke.c(), C(Ke, 1), Ke.m(N, ae))
          : Ke &&
            (Ie(),
            V(Ke, 1, 1, () => {
              Ke = null;
            }),
            Be()));
      const Ee = {};
      (de[2] & 32 && (Ee.class = "faq-caret " + (Y[67] === 2 ? "open" : "")),
        $.$set(Ee),
        Y[67] === 2
          ? x
            ? de[2] & 32 && C(x, 1)
            : ((x = fr()), x.c(), C(x, 1), x.m(J, null))
          : x &&
            (Ie(),
            V(x, 1, 1, () => {
              x = null;
            }),
            Be()));
      const it = {};
      (de[2] & 32 && (it.class = "faq-caret " + (Y[67] === 3 ? "open" : "")),
        fe.$set(it),
        Y[67] === 3
          ? Ne
            ? de[2] & 32 && C(Ne, 1)
            : ((Ne = dr()), Ne.c(), C(Ne, 1), Ne.m(G, null))
          : Ne &&
            (Ie(),
            V(Ne, 1, 1, () => {
              Ne = null;
            }),
            Be()));
    },
    i(Y) {
      we ||
        (C(a.$$.fragment, Y),
        C(w.$$.fragment, Y),
        C(P.$$.fragment, Y),
        C(F),
        C(ot),
        C(Ke),
        C(te.$$.fragment, Y),
        C($.$$.fragment, Y),
        C(x),
        C(lt),
        C(He.$$.fragment, Y),
        C(fe.$$.fragment, Y),
        C(Ne),
        (we = !0));
    },
    o(Y) {
      (V(a.$$.fragment, Y),
        V(w.$$.fragment, Y),
        V(P.$$.fragment, Y),
        V(F),
        V(ot),
        V(Ke),
        V(te.$$.fragment, Y),
        V($.$$.fragment, Y),
        V(x),
        V(lt),
        V(He.$$.fragment, Y),
        V(fe.$$.fragment, Y),
        V(Ne),
        (we = !1));
    },
    d(Y) {
      (Y && _(e),
        q(a),
        q(w),
        q(P),
        Ve[z].d(),
        Ke && Ke.d(),
        q(te),
        q($),
        x && x.d(),
        q(He),
        q(fe),
        Ne && Ne.d(),
        (Oe = !1),
        at(qe));
    },
  };
}
function fg(l) {
  let e, t;
  return (
    (e = new On({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function dg(l) {
  let e, t;
  return (
    (e = new Il({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function cr(l) {
  let e, t, n, a, u, r, p, d, c;
  ((n = new Mn({ props: { size: 16, weight: "regular", class: "faq-icon" } })),
    (u = new Pl({
      props: {
        size: 14,
        weight: "bold",
        class: "faq-caret " + (l[67] === 5 ? "open" : ""),
      },
    })));
  let g = l[67] === 5 && ur();
  return {
    c() {
      ((e = v("div")),
        (t = v("button")),
        j(n.$$.fragment),
        (a = K(
          `\r\n                      Why is the App Store purchase or download button missing?\r\n                      `,
        )),
        j(u.$$.fragment),
        (r = Z()),
        g && g.c(),
        o(t, "class", "faq-question svelte-17i5oct"),
        o(e, "class", "faq-item svelte-17i5oct"));
    },
    m(m, i) {
      (b(m, e, i),
        h(e, t),
        B(n, t, null),
        h(t, a),
        B(u, t, null),
        h(e, r),
        g && g.m(e, null),
        (p = !0),
        d || ((c = W(t, "click", l[324])), (d = !0)));
    },
    p(m, i) {
      const s = {};
      (i[2] & 32 && (s.class = "faq-caret " + (m[67] === 5 ? "open" : "")),
        u.$set(s),
        m[67] === 5
          ? g
            ? i[2] & 32 && C(g, 1)
            : ((g = ur()), g.c(), C(g, 1), g.m(e, null))
          : g &&
            (Ie(),
            V(g, 1, 1, () => {
              g = null;
            }),
            Be()));
    },
    i(m) {
      p || (C(n.$$.fragment, m), C(u.$$.fragment, m), C(g), (p = !0));
    },
    o(m) {
      (V(n.$$.fragment, m), V(u.$$.fragment, m), V(g), (p = !1));
    },
    d(m) {
      (m && _(e), q(n), q(u), g && g.d(), (d = !1), c());
    },
  };
}
function ur(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("div")),
        (e.innerHTML =
          '<div class="faq-answer svelte-17i5oct">For security reasons, macOS disables purchase and download buttons in the App Store whenever an overlay app is active. To make a purchase or download, simply quit Paperman, complete the transaction in the App Store, and reopen Paperman.</div>'),
        o(e, "class", "faq-answer-wrapper svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), (n = !0));
    },
    i(a) {
      n ||
        (a &&
          G1(() => {
            n && (t || (t = r0(e, o0, { duration: 200 }, !0)), t.run(1));
          }),
        (n = !0));
    },
    o(a) {
      (a && (t || (t = r0(e, o0, { duration: 200 }, !1)), t.run(0)), (n = !1));
    },
    d(a) {
      (a && _(e), a && t && t.end());
    },
  };
}
function fr(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("div")),
        (e.innerHTML =
          '<div class="faq-answer svelte-17i5oct">Sometimes when you change settings while Paperman is running, it might not update automatically. We recommend trying to refresh your display output. If that&#39;s not enough, quit Paperman and relaunch it. It should do the trick!</div>'),
        o(e, "class", "faq-answer-wrapper svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), (n = !0));
    },
    i(a) {
      n ||
        (a &&
          G1(() => {
            n && (t || (t = r0(e, o0, { duration: 200 }, !0)), t.run(1));
          }),
        (n = !0));
    },
    o(a) {
      (a && (t || (t = r0(e, o0, { duration: 200 }, !1)), t.run(0)), (n = !1));
    },
    d(a) {
      (a && _(e), a && t && t.end());
    },
  };
}
function dr(l) {
  let e, t, n;
  return {
    c() {
      ((e = v("div")),
        (e.innerHTML =
          '<div class="faq-answer svelte-17i5oct">Paperman&#39;s gentle filters reduce eye strain and recreate the comfortable, soft experience of reading on physical paper, helping you stay focused for longer.</div>'),
        o(e, "class", "faq-answer-wrapper svelte-17i5oct"));
    },
    m(a, u) {
      (b(a, e, u), (n = !0));
    },
    i(a) {
      n ||
        (a &&
          G1(() => {
            n && (t || (t = r0(e, o0, { duration: 200 }, !0)), t.run(1));
          }),
        (n = !0));
    },
    o(a) {
      (a && (t || (t = r0(e, o0, { duration: 200 }, !1)), t.run(0)), (n = !1));
    },
    d(a) {
      (a && _(e), a && t && t.end());
    },
  };
}
function hr(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe,
    G,
    _e,
    He,
    be,
    fe,
    ke,
    we,
    Oe,
    qe,
    Le,
    Ve,
    Te,
    ot,
    Ke,
    x,
    lt,
    Ne,
    Y,
    de,
    Ce,
    Ee,
    it,
    De,
    je,
    Ct,
    pt,
    wt,
    Pt,
    Lt;
  a = new Kr({ props: { size: 16, weight: "fill" } });
  const Gt = [gg, pg, mg, hg],
    mt = [];
  function Yt(Ue, gt) {
    return Ue[7] === "windows" ? 0 : Ue[99] ? 2 : 3;
  }
  return (
    (d = Yt(l)),
    (c = mt[d] = Gt[d](l)),
    (M = new T6({ props: { size: 16, weight: "regular" } })),
    (L = new y1({ props: { size: 14, weight: "bold" } })),
    (N = new Yr({ props: { size: 16, weight: "regular" } })),
    (J = new y1({ props: { size: 14, weight: "bold" } })),
    (he = new pd({ props: { size: 16, weight: "regular" } })),
    (He = new y1({ props: { size: 14, weight: "bold" } })),
    (Oe = new Du({ props: { size: 16, weight: "regular" } })),
    (ot = new y1({ props: { size: 14, weight: "bold" } })),
    (Ee = new k5({ props: { size: 16, weight: "regular" } })),
    (pt = new y1({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("div")),
          (n = v("span")),
          j(a.$$.fragment),
          (u = Z()),
          (r = v("h4")),
          (r.textContent = "Community"),
          (p = Z()),
          c.c(),
          (g = Z()),
          (m = v("div")),
          (i = v("span")),
          (i.textContent = "Connect with us"),
          (s = Z()),
          (w = v("button")),
          (k = v("span")),
          (f = v("span")),
          j(M.$$.fragment),
          (S = Z()),
          (O = v("span")),
          (O.innerHTML =
            'Substack<span class="toggle-sub svelte-17i5oct">Read our latest updates</span>'),
          (P = Z()),
          (T = v("span")),
          j(L.$$.fragment),
          (z = Z()),
          (F = v("button")),
          (E = v("span")),
          (D = v("span")),
          j(N.$$.fragment),
          (ne = Z()),
          (Q = v("span")),
          (Q.innerHTML =
            'X (Twitter)<span class="toggle-sub svelte-17i5oct">Follow us</span>'),
          (X = Z()),
          (ae = v("span")),
          j(J.$$.fragment),
          (se = Z()),
          (te = v("button")),
          (ge = v("span")),
          ($ = v("span")),
          j(he.$$.fragment),
          (Re = Z()),
          (pe = v("span")),
          (pe.innerHTML =
            'Reddit<span class="toggle-sub svelte-17i5oct">Join the discussion</span>'),
          (G = Z()),
          (_e = v("span")),
          j(He.$$.fragment),
          (be = Z()),
          (fe = v("button")),
          (ke = v("span")),
          (we = v("span")),
          j(Oe.$$.fragment),
          (qe = Z()),
          (Le = v("span")),
          (Le.innerHTML =
            'Instagram<span class="toggle-sub svelte-17i5oct">See our journey</span>'),
          (Ve = Z()),
          (Te = v("span")),
          j(ot.$$.fragment),
          (Ke = Z()),
          (x = v("div")),
          (lt = v("span")),
          (lt.textContent = "More from DoublOne Studios"),
          (Ne = Z()),
          (Y = v("button")),
          (de = v("span")),
          (Ce = v("span")),
          j(Ee.$$.fragment),
          (it = Z()),
          (De = v("span")),
          (De.innerHTML =
            'Discover our other apps<span class="toggle-sub svelte-17i5oct">See the full catalog</span>'),
          (je = Z()),
          (Ct = v("span")),
          j(pt.$$.fragment),
          o(n, "class", "section-icon-wrap svelte-17i5oct"),
          o(r, "class", "settings-heading svelte-17i5oct"),
          o(t, "class", "section-header svelte-17i5oct"),
          o(i, "class", "support-group-label svelte-17i5oct"),
          o(f, "class", "toggle-icon svelte-17i5oct"),
          o(O, "class", "toggle-label svelte-17i5oct"),
          o(k, "class", "toggle-leading svelte-17i5oct"),
          o(T, "class", "toggle-action svelte-17i5oct"),
          o(w, "class", "support-item svelte-17i5oct"),
          o(D, "class", "toggle-icon svelte-17i5oct"),
          o(Q, "class", "toggle-label svelte-17i5oct"),
          o(E, "class", "toggle-leading svelte-17i5oct"),
          o(ae, "class", "toggle-action svelte-17i5oct"),
          o(F, "class", "support-item svelte-17i5oct"),
          o($, "class", "toggle-icon svelte-17i5oct"),
          o(pe, "class", "toggle-label svelte-17i5oct"),
          o(ge, "class", "toggle-leading svelte-17i5oct"),
          o(_e, "class", "toggle-action svelte-17i5oct"),
          o(te, "class", "support-item svelte-17i5oct"),
          o(we, "class", "toggle-icon svelte-17i5oct"),
          o(Le, "class", "toggle-label svelte-17i5oct"),
          o(ke, "class", "toggle-leading svelte-17i5oct"),
          o(Te, "class", "toggle-action svelte-17i5oct"),
          o(fe, "class", "support-item svelte-17i5oct"),
          o(m, "class", "support-group svelte-17i5oct"),
          o(lt, "class", "support-group-label svelte-17i5oct"),
          o(Ce, "class", "toggle-icon svelte-17i5oct"),
          o(De, "class", "toggle-label svelte-17i5oct"),
          o(de, "class", "toggle-leading svelte-17i5oct"),
          o(Ct, "class", "toggle-action svelte-17i5oct"),
          o(Y, "class", "support-item svelte-17i5oct"),
          o(x, "class", "support-group svelte-17i5oct"),
          o(e, "class", "settings-section svelte-17i5oct"));
      },
      m(Ue, gt) {
        (b(Ue, e, gt),
          h(e, t),
          h(t, n),
          B(a, n, null),
          h(t, u),
          h(t, r),
          h(e, p),
          mt[d].m(e, null),
          h(e, g),
          h(e, m),
          h(m, i),
          h(m, s),
          h(m, w),
          h(w, k),
          h(k, f),
          B(M, f, null),
          h(k, S),
          h(k, O),
          h(w, P),
          h(w, T),
          B(L, T, null),
          h(m, z),
          h(m, F),
          h(F, E),
          h(E, D),
          B(N, D, null),
          h(E, ne),
          h(E, Q),
          h(F, X),
          h(F, ae),
          B(J, ae, null),
          h(m, se),
          h(m, te),
          h(te, ge),
          h(ge, $),
          B(he, $, null),
          h(ge, Re),
          h(ge, pe),
          h(te, G),
          h(te, _e),
          B(He, _e, null),
          h(m, be),
          h(m, fe),
          h(fe, ke),
          h(ke, we),
          B(Oe, we, null),
          h(ke, qe),
          h(ke, Le),
          h(fe, Ve),
          h(fe, Te),
          B(ot, Te, null),
          h(e, Ke),
          h(e, x),
          h(x, lt),
          h(x, Ne),
          h(x, Y),
          h(Y, de),
          h(de, Ce),
          B(Ee, Ce, null),
          h(de, it),
          h(de, De),
          h(Y, je),
          h(Y, Ct),
          B(pt, Ct, null),
          (wt = !0),
          Pt ||
            ((Lt = [
              W(w, "click", l[335]),
              W(F, "click", l[336]),
              W(te, "click", l[337]),
              W(fe, "click", l[338]),
              W(Y, "click", l[339]),
            ]),
            (Pt = !0)));
      },
      p(Ue, gt) {
        let tt = d;
        ((d = Yt(Ue)),
          d !== tt &&
            (Ie(),
            V(mt[tt], 1, 1, () => {
              mt[tt] = null;
            }),
            Be(),
            (c = mt[d]),
            c || ((c = mt[d] = Gt[d](Ue)), c.c()),
            C(c, 1),
            c.m(e, g)));
      },
      i(Ue) {
        wt ||
          (C(a.$$.fragment, Ue),
          C(c),
          C(M.$$.fragment, Ue),
          C(L.$$.fragment, Ue),
          C(N.$$.fragment, Ue),
          C(J.$$.fragment, Ue),
          C(he.$$.fragment, Ue),
          C(He.$$.fragment, Ue),
          C(Oe.$$.fragment, Ue),
          C(ot.$$.fragment, Ue),
          C(Ee.$$.fragment, Ue),
          C(pt.$$.fragment, Ue),
          (wt = !0));
      },
      o(Ue) {
        (V(a.$$.fragment, Ue),
          V(c),
          V(M.$$.fragment, Ue),
          V(L.$$.fragment, Ue),
          V(N.$$.fragment, Ue),
          V(J.$$.fragment, Ue),
          V(he.$$.fragment, Ue),
          V(He.$$.fragment, Ue),
          V(Oe.$$.fragment, Ue),
          V(ot.$$.fragment, Ue),
          V(Ee.$$.fragment, Ue),
          V(pt.$$.fragment, Ue),
          (wt = !1));
      },
      d(Ue) {
        (Ue && _(e),
          q(a),
          mt[d].d(),
          q(M),
          q(L),
          q(N),
          q(J),
          q(he),
          q(He),
          q(Oe),
          q(ot),
          q(Ee),
          q(pt),
          (Pt = !1),
          at(Lt));
      },
    }
  );
}
function hg(l) {
  let e,
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge;
  return (
    (p = new Yr({ props: { size: 16, weight: "regular" } })),
    (i = new y1({ props: { size: 14, weight: "bold" } })),
    (M = new Rf({ props: { size: 16, weight: "regular" } })),
    (L = new y1({ props: { size: 14, weight: "bold" } })),
    (N = new Zd({ props: { size: 16, weight: "regular" } })),
    (J = new y1({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("span")),
          (t.textContent = "Enjoying Paperman? Spread the word!"),
          (n = Z()),
          (a = v("button")),
          (u = v("span")),
          (r = v("span")),
          j(p.$$.fragment),
          (d = Z()),
          (c = v("span")),
          (c.innerHTML =
            'Twitter<span class="toggle-sub svelte-17i5oct">Share with your followers</span>'),
          (g = Z()),
          (m = v("span")),
          j(i.$$.fragment),
          (s = Z()),
          (w = v("button")),
          (k = v("span")),
          (f = v("span")),
          j(M.$$.fragment),
          (S = Z()),
          (O = v("span")),
          (O.innerHTML =
            'LinkedIn<span class="toggle-sub svelte-17i5oct">Share with your network</span>'),
          (P = Z()),
          (T = v("span")),
          j(L.$$.fragment),
          (z = Z()),
          (F = v("button")),
          (E = v("span")),
          (D = v("span")),
          j(N.$$.fragment),
          (ne = Z()),
          (Q = v("span")),
          (Q.innerHTML =
            'Product Hunt<span class="toggle-sub svelte-17i5oct">Support us on Product Hunt</span>'),
          (X = Z()),
          (ae = v("span")),
          j(J.$$.fragment),
          o(t, "class", "support-group-label svelte-17i5oct"),
          o(r, "class", "toggle-icon svelte-17i5oct"),
          o(c, "class", "toggle-label svelte-17i5oct"),
          o(u, "class", "toggle-leading svelte-17i5oct"),
          o(m, "class", "toggle-action svelte-17i5oct"),
          o(a, "class", "support-item svelte-17i5oct"),
          o(f, "class", "toggle-icon svelte-17i5oct"),
          o(O, "class", "toggle-label svelte-17i5oct"),
          o(k, "class", "toggle-leading svelte-17i5oct"),
          o(T, "class", "toggle-action svelte-17i5oct"),
          o(w, "class", "support-item svelte-17i5oct"),
          o(D, "class", "toggle-icon svelte-17i5oct"),
          o(Q, "class", "toggle-label svelte-17i5oct"),
          o(E, "class", "toggle-leading svelte-17i5oct"),
          o(ae, "class", "toggle-action svelte-17i5oct"),
          o(F, "class", "support-item svelte-17i5oct"),
          o(e, "class", "support-group svelte-17i5oct"));
      },
      m($, he) {
        (b($, e, he),
          h(e, t),
          h(e, n),
          h(e, a),
          h(a, u),
          h(u, r),
          B(p, r, null),
          h(u, d),
          h(u, c),
          h(a, g),
          h(a, m),
          B(i, m, null),
          h(e, s),
          h(e, w),
          h(w, k),
          h(k, f),
          B(M, f, null),
          h(k, S),
          h(k, O),
          h(w, P),
          h(w, T),
          B(L, T, null),
          h(e, z),
          h(e, F),
          h(F, E),
          h(E, D),
          B(N, D, null),
          h(E, ne),
          h(E, Q),
          h(F, X),
          h(F, ae),
          B(J, ae, null),
          (se = !0),
          te ||
            ((ge = [
              W(a, "click", l[332]),
              W(w, "click", l[333]),
              W(F, "click", l[334]),
            ]),
            (te = !0)));
      },
      i($) {
        se ||
          (C(p.$$.fragment, $),
          C(i.$$.fragment, $),
          C(M.$$.fragment, $),
          C(L.$$.fragment, $),
          C(N.$$.fragment, $),
          C(J.$$.fragment, $),
          (se = !0));
      },
      o($) {
        (V(p.$$.fragment, $),
          V(i.$$.fragment, $),
          V(M.$$.fragment, $),
          V(L.$$.fragment, $),
          V(N.$$.fragment, $),
          V(J.$$.fragment, $),
          (se = !1));
      },
      d($) {
        ($ && _(e), q(p), q(i), q(M), q(L), q(N), q(J), (te = !1), at(ge));
      },
    }
  );
}
function mg(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k;
  return (
    (p = new Dn({ props: { size: 16, weight: "regular" } })),
    (i = new y1({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("span")),
          (t.textContent = "Enjoying Paperman?"),
          (n = Z()),
          (a = v("button")),
          (u = v("span")),
          (r = v("span")),
          j(p.$$.fragment),
          (d = Z()),
          (c = v("span")),
          (c.innerHTML =
            'Leave a review<span class="toggle-sub svelte-17i5oct">on Setapp</span>'),
          (g = Z()),
          (m = v("span")),
          j(i.$$.fragment),
          o(t, "class", "support-group-label svelte-17i5oct"),
          o(r, "class", "toggle-icon svelte-17i5oct"),
          o(c, "class", "toggle-label svelte-17i5oct"),
          o(u, "class", "toggle-leading svelte-17i5oct"),
          o(m, "class", "toggle-action svelte-17i5oct"),
          o(a, "class", "support-item svelte-17i5oct"),
          o(e, "class", "support-group svelte-17i5oct"));
      },
      m(f, M) {
        (b(f, e, M),
          h(e, t),
          h(e, n),
          h(e, a),
          h(a, u),
          h(u, r),
          B(p, r, null),
          h(u, d),
          h(u, c),
          h(a, g),
          h(a, m),
          B(i, m, null),
          (s = !0),
          w || ((k = W(a, "click", l[331])), (w = !0)));
      },
      i(f) {
        s || (C(p.$$.fragment, f), C(i.$$.fragment, f), (s = !0));
      },
      o(f) {
        (V(p.$$.fragment, f), V(i.$$.fragment, f), (s = !1));
      },
      d(f) {
        (f && _(e), q(p), q(i), (w = !1), k());
      },
    }
  );
}
function pg(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k;
  return (
    (p = new Dn({ props: { size: 16, weight: "regular" } })),
    (i = new y1({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("span")),
          (t.textContent = "Enjoying Paperman?"),
          (n = Z()),
          (a = v("button")),
          (u = v("span")),
          (r = v("span")),
          j(p.$$.fragment),
          (d = Z()),
          (c = v("span")),
          (c.innerHTML =
            'Leave a review<span class="toggle-sub svelte-17i5oct">on the App Store</span>'),
          (g = Z()),
          (m = v("span")),
          j(i.$$.fragment),
          o(t, "class", "support-group-label svelte-17i5oct"),
          o(r, "class", "toggle-icon svelte-17i5oct"),
          o(c, "class", "toggle-label svelte-17i5oct"),
          o(u, "class", "toggle-leading svelte-17i5oct"),
          o(m, "class", "toggle-action svelte-17i5oct"),
          o(a, "class", "support-item svelte-17i5oct"),
          o(e, "class", "support-group svelte-17i5oct"));
      },
      m(f, M) {
        (b(f, e, M),
          h(e, t),
          h(e, n),
          h(e, a),
          h(a, u),
          h(u, r),
          B(p, r, null),
          h(u, d),
          h(u, c),
          h(a, g),
          h(a, m),
          B(i, m, null),
          (s = !0),
          w || ((k = W(a, "click", l[330])), (w = !0)));
      },
      i(f) {
        s || (C(p.$$.fragment, f), C(i.$$.fragment, f), (s = !0));
      },
      o(f) {
        (V(p.$$.fragment, f), V(i.$$.fragment, f), (s = !1));
      },
      d(f) {
        (f && _(e), q(p), q(i), (w = !1), k());
      },
    }
  );
}
function gg(l) {
  let e, t, n, a, u, r, p, d, c, g, m, i, s, w, k;
  return (
    (p = new Dn({ props: { size: 16, weight: "regular" } })),
    (i = new y1({ props: { size: 14, weight: "bold" } })),
    {
      c() {
        ((e = v("div")),
          (t = v("span")),
          (t.textContent = "Enjoying Paperman?"),
          (n = Z()),
          (a = v("button")),
          (u = v("span")),
          (r = v("span")),
          j(p.$$.fragment),
          (d = Z()),
          (c = v("span")),
          (c.innerHTML =
            'Leave a review<span class="toggle-sub svelte-17i5oct">on the Microsoft Store</span>'),
          (g = Z()),
          (m = v("span")),
          j(i.$$.fragment),
          o(t, "class", "support-group-label svelte-17i5oct"),
          o(r, "class", "toggle-icon svelte-17i5oct"),
          o(c, "class", "toggle-label svelte-17i5oct"),
          o(u, "class", "toggle-leading svelte-17i5oct"),
          o(m, "class", "toggle-action svelte-17i5oct"),
          o(a, "class", "support-item svelte-17i5oct"),
          o(e, "class", "support-group svelte-17i5oct"));
      },
      m(f, M) {
        (b(f, e, M),
          h(e, t),
          h(e, n),
          h(e, a),
          h(a, u),
          h(u, r),
          B(p, r, null),
          h(u, d),
          h(u, c),
          h(a, g),
          h(a, m),
          B(i, m, null),
          (s = !0),
          w || ((k = W(a, "click", l[329])), (w = !0)));
      },
      i(f) {
        s || (C(p.$$.fragment, f), C(i.$$.fragment, f), (s = !0));
      },
      o(f) {
        (V(p.$$.fragment, f), V(i.$$.fragment, f), (s = !1));
      },
      d(f) {
        (f && _(e), q(p), q(i), (w = !1), k());
      },
    }
  );
}
function mr(l) {
  let e, t;
  return (
    (e = new Zm({ props: { appVersion: l[46], isSetapp: l[99] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      p(n, a) {
        const u = {};
        (a[1] & 32768 && (u.appVersion = n[46]),
          a[3] & 64 && (u.isSetapp = n[99]),
          e.$set(u));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function pr(l) {
  let e, t;
  return (
    (e = new Ih({ props: { onActivated: l[154], onClose: l[341] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      p(n, a) {
        const u = {};
        (a[0] & 1048576 && (u.onClose = n[341]), e.$set(u));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function gr(l) {
  let e, t;
  return (
    (e = new Jh({
      props: {
        isSetapp: l[8],
        displayName: l[62],
        activatedAt: l[63],
        onClose: l[342],
        onCleared: l[155],
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      p(n, a) {
        const u = {};
        (a[0] & 256 && (u.isSetapp = n[8]),
          a[2] & 1 && (u.displayName = n[62]),
          a[2] & 2 && (u.activatedAt = n[63]),
          a[0] & 2097152 && (u.onClose = n[342]),
          e.$set(u));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function _r(l) {
  let e, t;
  return (
    (e = new dm({
      props: { dailyMinutes: l[19], onEnterKey: l[156], onClose: l[343] },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(n, a) {
        (B(e, n, a), (t = !0));
      },
      p(n, a) {
        const u = {};
        (a[0] & 524288 && (u.dailyMinutes = n[19]),
          a[0] & 4194304 && (u.onClose = n[343]),
          e.$set(u));
      },
      i(n) {
        t || (C(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        (V(e.$$.fragment, n), (t = !1));
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function _g(l) {
  let e =
      !l[4] &&
      !l[5] &&
      !l[6] &&
      l[12] &&
      !l[33] &&
      (l[18] || (l[7] === "windows" && l[19] < X1)) &&
      (l[74] === void 0 || l[73] === null || l[73].includes(l[74])),
    t,
    n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k = e && ya(l),
    f = (l[37] || l[38]) && Aa(l),
    M = l[40] && Ma(l),
    S = l[41] && !l[37] && !l[38] && Za(l),
    O = l[25] && Ha(l),
    P = l[37] && !l[38] && Ca(l),
    T = l[38] && Pa(l),
    L = l[20] && pr(l),
    z = l[21] && gr(l),
    F = l[22] && _r(l);
  return {
    c() {
      (k && k.c(),
        (t = Z()),
        f && f.c(),
        (n = Z()),
        M && M.c(),
        (a = Z()),
        S && S.c(),
        (u = Z()),
        O && O.c(),
        (r = Z()),
        P && P.c(),
        (p = Z()),
        T && T.c(),
        (d = Z()),
        L && L.c(),
        (c = Z()),
        z && z.c(),
        (g = Z()),
        F && F.c(),
        (m = c1()));
    },
    m(E, D) {
      (k && k.m(E, D),
        b(E, t, D),
        f && f.m(E, D),
        b(E, n, D),
        M && M.m(E, D),
        b(E, a, D),
        S && S.m(E, D),
        b(E, u, D),
        O && O.m(E, D),
        b(E, r, D),
        P && P.m(E, D),
        b(E, p, D),
        T && T.m(E, D),
        b(E, d, D),
        L && L.m(E, D),
        b(E, c, D),
        z && z.m(E, D),
        b(E, g, D),
        F && F.m(E, D),
        b(E, m, D),
        (i = !0),
        s ||
          ((w = [
            W(pn, "keydown", function () {
              g1(l[86] ? l[147] : l[148]) &&
                (l[86] ? l[147] : l[148]).apply(this, arguments);
            }),
            W(pn, "contextmenu", Vr(l[217])),
            W(pn, "resize", l[124]),
          ]),
          (s = !0)));
    },
    p(E, D) {
      ((l = E),
        (D[0] & 790768) | (D[1] & 4) | (D[2] & 6144) &&
          (e =
            !l[4] &&
            !l[5] &&
            !l[6] &&
            l[12] &&
            !l[33] &&
            (l[18] || (l[7] === "windows" && l[19] < X1)) &&
            (l[74] === void 0 || l[73] === null || l[73].includes(l[74]))),
        e
          ? k
            ? (k.p(l, D),
              (D[0] & 790768) | (D[1] & 4) | (D[2] & 6144) && C(k, 1))
            : ((k = ya(l)), k.c(), C(k, 1), k.m(t.parentNode, t))
          : k &&
            (Ie(),
            V(k, 1, 1, () => {
              k = null;
            }),
            Be()),
        l[37] || l[38]
          ? f
            ? f.p(l, D)
            : ((f = Aa(l)), f.c(), f.m(n.parentNode, n))
          : f && (f.d(1), (f = null)),
        l[40]
          ? M
            ? M.p(l, D)
            : ((M = Ma(l)), M.c(), M.m(a.parentNode, a))
          : M && (M.d(1), (M = null)),
        l[41] && !l[37] && !l[38]
          ? S
            ? (S.p(l, D), D[1] & 1216 && C(S, 1))
            : ((S = Za(l)), S.c(), C(S, 1), S.m(u.parentNode, u))
          : S &&
            (Ie(),
            V(S, 1, 1, () => {
              S = null;
            }),
            Be()),
        l[25]
          ? O
            ? O.p(l, D)
            : ((O = Ha(l)), O.c(), O.m(r.parentNode, r))
          : O && (O.d(1), (O = null)),
        l[37] && !l[38]
          ? P
            ? (P.p(l, D), D[1] & 192 && C(P, 1))
            : ((P = Ca(l)), P.c(), C(P, 1), P.m(p.parentNode, p))
          : P &&
            (Ie(),
            V(P, 1, 1, () => {
              P = null;
            }),
            Be()),
        l[38]
          ? T
            ? (T.p(l, D), D[1] & 128 && C(T, 1))
            : ((T = Pa(l)), T.c(), C(T, 1), T.m(d.parentNode, d))
          : T &&
            (Ie(),
            V(T, 1, 1, () => {
              T = null;
            }),
            Be()),
        l[20]
          ? L
            ? (L.p(l, D), D[0] & 1048576 && C(L, 1))
            : ((L = pr(l)), L.c(), C(L, 1), L.m(c.parentNode, c))
          : L &&
            (Ie(),
            V(L, 1, 1, () => {
              L = null;
            }),
            Be()),
        l[21]
          ? z
            ? (z.p(l, D), D[0] & 2097152 && C(z, 1))
            : ((z = gr(l)), z.c(), C(z, 1), z.m(g.parentNode, g))
          : z &&
            (Ie(),
            V(z, 1, 1, () => {
              z = null;
            }),
            Be()),
        l[22]
          ? F
            ? (F.p(l, D), D[0] & 4194304 && C(F, 1))
            : ((F = _r(l)), F.c(), C(F, 1), F.m(m.parentNode, m))
          : F &&
            (Ie(),
            V(F, 1, 1, () => {
              F = null;
            }),
            Be()));
    },
    i(E) {
      i || (C(k), C(S), C(P), C(T), C(L), C(z), C(F), (i = !0));
    },
    o(E) {
      (V(k), V(S), V(P), V(T), V(L), V(z), V(F), (i = !1));
    },
    d(E) {
      (E && (_(t), _(n), _(a), _(u), _(r), _(p), _(d), _(c), _(g), _(m)),
        k && k.d(E),
        f && f.d(E),
        M && M.d(E),
        S && S.d(E),
        O && O.d(E),
        P && P.d(E),
        T && T.d(E),
        L && L.d(E),
        z && z.d(E),
        F && F.d(E),
        (s = !1),
        at(w));
    },
  };
}
const bg = "whisper-weave",
  vg = "classic-matte",
  X1 = 60,
  Hl = "/desk-lamp-ding.mp3";
function G0(l, e = 14) {
  function t() {
    const a = l.offsetWidth,
      u = l.offsetHeight,
      r = Math.min(e, a / 2, u / 2),
      p = 0.6,
      d = [
        `M ${r},0`,
        `C ${r * (1 - p)},0 0,${r * (1 - p)} 0,${r}`,
        `L 0,${u - r}`,
        `C 0,${u - r * (1 - p)} ${r * (1 - p)},${u} ${r},${u}`,
        `L ${a - r},${u}`,
        `C ${a - r * (1 - p)},${u} ${a},${u - r * (1 - p)} ${a},${u - r}`,
        `L ${a},${r}`,
        `C ${a},${r * (1 - p)} ${a - r * (1 - p)},0 ${a - r},0 Z`,
      ].join(" ");
    l.style.clipPath = `path('${d}')`;
  }
  t();
  const n = new ResizeObserver(t);
  return (
    n.observe(l),
    {
      destroy() {
        n.disconnect();
      },
    }
  );
}
function z0(l, e, t) {
  const { width: n, height: a } = t.getBoundingClientRect();
  return [
    Math.max(0, Math.min(l, window.innerWidth - n)),
    Math.max(0, Math.min(e, window.innerHeight - a)),
  ];
}
function br(l) {
  return l.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
function vr(l) {
  return JSON.stringify(l.map((e) => [e.x, e.y, e.width, e.height]).sort());
}
function p0(l) {
  const e = [];
  (l.ctrlKey && e.push("Ctrl"),
    l.shiftKey && e.push("Shift"),
    l.altKey && e.push("Alt"),
    l.metaKey && e.push("Super"));
  const n = {
    KeyA: "A",
    KeyB: "B",
    KeyC: "C",
    KeyD: "D",
    KeyE: "E",
    KeyF: "F",
    KeyG: "G",
    KeyH: "H",
    KeyI: "I",
    KeyJ: "J",
    KeyK: "K",
    KeyL: "L",
    KeyM: "M",
    KeyN: "N",
    KeyO: "O",
    KeyP: "P",
    KeyQ: "Q",
    KeyR: "R",
    KeyS: "S",
    KeyT: "T",
    KeyU: "U",
    KeyV: "V",
    KeyW: "W",
    KeyX: "X",
    KeyY: "Y",
    KeyZ: "Z",
    Digit0: "0",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    F1: "F1",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    Space: "Space",
    Minus: "Minus",
    Equal: "Equal",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight",
    Semicolon: "Semicolon",
    Quote: "Quote",
    Backquote: "Backquote",
    Backslash: "Backslash",
    Comma: "Comma",
    Period: "Period",
    Slash: "Slash",
    ArrowUp: "Up",
    ArrowDown: "Down",
    ArrowLeft: "Left",
    ArrowRight: "Right",
  }[l.code];
  return n ? (e.push(n), e.join("+")) : "";
}
function H1(l) {
  let e = l.trim().toLowerCase();
  return (e.endsWith(".exe") && (e = e.slice(0, -4).trim()), e);
}
function Cl(l) {
  return H1(l) === "paperman";
}
function w1(l) {
  let e = l.trim();
  return !e ||
    (e.toLowerCase().endsWith(".exe") && (e = e.slice(0, -4).trim()), !e)
    ? ""
    : e === e.toLowerCase()
      ? e.charAt(0).toUpperCase() + e.slice(1)
      : e;
}
function kr(l) {
  const [e, t] = l.split(":").map(Number);
  return e * 60 + t;
}
function kg(l, e, t) {
  let n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s,
    w,
    k,
    f,
    M,
    S,
    O,
    P,
    T,
    L,
    z,
    F,
    E,
    D,
    N,
    ne,
    Q,
    X,
    ae,
    J,
    se,
    te,
    ge,
    $,
    he,
    Re,
    pe;
  (gn(l, j0, (H) => t(212, (Re = H))), gn(l, r1, (H) => t(109, (pe = H))));
  let G = U.lightClassicMatteOpacity,
    _e = U.lightWhisperWeaveOpacity,
    He = U.lightSunbakedParchmentOpacity,
    be = U.lightSaddleLinenOpacity,
    fe = U.lightPainterPressOpacity,
    ke = U.lightMulberryVeilOpacity,
    we = U.lightVellumMistOpacity,
    Oe = U.lightMonasticFeltOpacity,
    qe = U.lightCarbonLedgerOpacity,
    Le = U.darkClassicMatteOpacity,
    Ve = U.darkWhisperWeaveOpacity,
    Te = U.darkSunbakedParchmentOpacity,
    ot = U.darkSaddleLinenOpacity,
    Ke = U.darkPainterPressOpacity,
    x = U.darkMulberryVeilOpacity,
    lt = U.darkVellumMistOpacity,
    Ne = U.darkMonasticFeltOpacity,
    Y = U.darkCarbonLedgerOpacity,
    de = s1(U.lightTexture),
    Ce = s1(U.darkTexture),
    Ee = "light",
    it = [...Tl];
  function De(H) {
    (Ee === "dark" ? t(1, (Ce = H)) : t(0, (de = H)), Ze());
  }
  function je(H) {
    if (it.includes(H)) {
      if (it.length <= 1) {
        ft("Keep at least one texture pinned", 2500, !1);
        return;
      }
      t(3, (it = it.filter((R) => R !== H)));
    } else if (it.length >= D0) {
      ft(`Pin up to ${D0} textures — unpin one first`, 2500, !1);
      return;
    } else t(3, (it = [...it, H]));
    Ze();
  }
  async function Ct() {
    (t(26, (S1 = "texture")), Ze(), await R0());
  }
  function pt(H) {
    (t(26, (S1 = H)), Ze());
  }
  let wt = !1,
    Pt = !1,
    Lt = "",
    Gt = !1,
    mt,
    Yt = !1,
    Ue,
    gt = !1,
    tt = !1,
    Wt = "",
    It = "",
    Ot = !1,
    nt = !1,
    Et = !1,
    yt = null,
    _1 = null,
    Fe = null,
    u1 = 0,
    ie = !1,
    ye = "",
    Xe = "other",
    o1 = !1,
    Ut = U.alwaysOn,
    Qt = U.scheduleEnabled,
    f1 = U.startTime,
    Bt = U.endTime,
    Rt = !0,
    Zt = U.excludedApps,
    xt = U.exceptionsMode,
    $t = "",
    _t = U.autoStartEnabled,
    L1 = [],
    d1 = [],
    ut = !1,
    me = -1,
    We = null,
    rt = Ht.enabled,
    Vt = Ht.darkOnly,
    St = Ht.position,
    bt = Ht.warmth,
    vt = Ht.spread,
    kt = Ht.dimming,
    Tt = Ht.animateEnter,
    Dt = 0,
    ct = !0,
    At = 0,
    ht = !1,
    le = !1,
    Pe = !1,
    tl = !1,
    s0 = "",
    jl = !1,
    Xl = !1;
  async function In() {
    if (!s0) {
      if (te) {
        t(58, (s0 = "https://setapp.com/apps/paperman"));
        return;
      }
      t(59, (jl = !0));
      try {
        t(58, (s0 = await ue("get_refer_url")));
      } catch {
        ft("Failed to load referral link. Please try again.");
      }
      t(59, (jl = !1));
    }
  }
  async function Bn() {
    try {
      return (
        await Zn(s0),
        t(60, (Xl = !0)),
        setTimeout(() => t(60, (Xl = !1)), 2e3),
        !0
      );
    } catch {
      return (ft("Failed to copy link."), !1);
    }
  }
  async function go() {
    if (!s0) return;
    let H =
      "Know someone whose eyes could use a break? Give them 60% off Paperman with your personal link:";
    if (
      (te &&
        (H =
          "Know someone whose eyes could use a break? Check out Paperman on Setapp:"),
      navigator.share)
    )
      try {
        (await ue("set_always_on_top", { enabled: !1 }),
          await navigator.share({ title: "Try Paperman", text: H, url: s0 }),
          await ue("set_always_on_top", { enabled: !0 }));
        return;
      } catch (ee) {
        if (
          (await ue("set_always_on_top", { enabled: !0 }),
          ee instanceof Error && ee.name === "AbortError")
        )
          return;
      }
    (await Bn()) && ft("Link copied to clipboard.");
  }
  let ll = "";
  const _o = 4 * 60 * 60 * 1e3;
  let qn;
  function v0(H, R, ee) {
    ((ee = Xt(R, ee, Xe)),
      H === "dark"
        ? R === "whisper-weave"
          ? t(184, (Ve = ee))
          : R === "sunbaked-parchment"
            ? t(185, (Te = ee))
            : R === "saddle-linen"
              ? t(186, (ot = ee))
              : R === "painter-press"
                ? t(187, (Ke = ee))
                : R === "mulberry-veil"
                  ? t(188, (x = ee))
                  : R === "vellum-mist"
                    ? t(189, (lt = ee))
                    : R === "monastic-felt"
                      ? t(190, (Ne = ee))
                      : R === "carbon-ledger"
                        ? t(191, (Y = ee))
                        : t(183, (Le = ee))
        : R === "whisper-weave"
          ? t(175, (_e = ee))
          : R === "sunbaked-parchment"
            ? t(176, (He = ee))
            : R === "saddle-linen"
              ? t(177, (be = ee))
              : R === "painter-press"
                ? t(178, (fe = ee))
                : R === "mulberry-veil"
                  ? t(179, (ke = ee))
                  : R === "vellum-mist"
                    ? t(180, (we = ee))
                    : R === "monastic-felt"
                      ? t(181, (Oe = ee))
                      : R === "carbon-ledger"
                        ? t(182, (qe = ee))
                        : t(174, (G = ee)));
  }
  function jn(H) {
    return !ct && H !== p;
  }
  function bo(H) {
    const R = H.currentTarget;
    if (c) {
      ((R.checked = !1), Xe === "macos" ? t(20, (ht = !0)) : t(22, (Pe = !0)));
      return;
    }
    (t(192, (rt = R.checked)), Ze(), bl(Hl));
  }
  function vo() {
    if (c) {
      ft("Desk Lamp is an Unlimited feature");
      return;
    }
    (t(192, (rt = !rt)),
      Ze(),
      ft(
        rt
          ? Vt && Ft !== "dark"
            ? "Desk Lamp on — waiting for Nighttime"
            : "Desk Lamp on"
          : "Desk Lamp off",
        3e3,
        !0,
        Hl,
      ));
  }
  function Xn(H) {
    const R = Kl.find((ee) => ee.id === H);
    R &&
      (t(14, (St = R.position)),
      t(15, (bt = R.warmth)),
      t(16, (vt = R.spread)),
      t(17, (kt = R.dimming)),
      t(57, Dt++, Dt),
      Ze());
  }
  let k0 = "",
    A1 = null,
    V1 = U.themeScheduleEnabled,
    c0 = U.lightThemeStartTime,
    u0 = U.darkThemeStartTime,
    Ft = U.currentTheme,
    w0 = U.confirmThemeSwitch,
    v1 = null,
    R1 = "auto",
    S1 = U.currentSettingsTab,
    M1 = null,
    Gl = !1,
    f0 = !0,
    y0 = U.animationsEnabled,
    A0 = Wl(U.animationDirection),
    M0 = Rl(U.randomRevealStyle);
  function Gn(H) {
    const R = yp(H, {
      animationsEnabled: y0,
      animationDirection: A0,
      randomRevealStyle: M0,
    });
    (t(27, (y0 = R.animationsEnabled)),
      t(28, (A0 = R.animationDirection)),
      t(29, (M0 = R.randomRevealStyle)),
      Ze());
  }
  let Y1 = U.hideFromScreenshots,
    Q1 = U.keepMenuBarClear,
    K1 = U.keepMenuBarClearOnlyFullscreen,
    k1 = U.batteryBehavior,
    nl = !1,
    Kt = null,
    Yl,
    Z1 = null,
    il = [];
  function ko(H) {
    if (il.length > 0) {
      const R = H.detail
        .map((ee) => ({ idx: ee, m: il[ee] }))
        .filter((ee) => !!ee.m);
      (t(73, (Kt = R.map((ee) => ee.idx))),
        (Z1 = R.map((ee) => ({
          x: ee.m.x,
          y: ee.m.y,
          width: ee.m.width,
          height: ee.m.height,
        }))));
    } else t(73, (Kt = H.detail));
    (Ze(), O1());
  }
  let Ql = !1,
    Yn = null;
  async function wo() {
    (t(75, (Ql = !0)), await O1(), t(76, (Yn = new Date())), t(75, (Ql = !1)));
  }
  function yo() {
    (t1 !== null &&
      l1 !== null &&
      N1 &&
      (t(78, ([t1, l1] = z0(t1, l1, N1)), t1, t(79, l1)), Ze()),
      n1 !== null &&
        i1 !== null &&
        U1 &&
        (t(82, ([n1, i1] = z0(n1, i1, U1)), n1, t(83, i1)), Ze()));
  }
  let Jl = null,
    al,
    rl,
    ol,
    sl,
    cl,
    ul,
    fl,
    dl,
    hl,
    ml,
    pl,
    xl = !1,
    $l = null,
    gl = null;
  Ul(() => {
    (gl == null || gl(),
      al == null || al(),
      rl == null || rl(),
      ol == null || ol(),
      sl == null || sl(),
      cl == null || cl(),
      ul == null || ul(),
      fl == null || fl(),
      dl == null || dl(),
      clearInterval(li),
      clearInterval(qn),
      nn.forEach(clearTimeout),
      hl && document.removeEventListener("visibilitychange", hl),
      ml && pl && ml.removeEventListener("change", pl));
  });
  let t1 = null,
    l1 = null,
    N1,
    F0 = !1,
    Qn = 0,
    Jn = 0;
  function Ao(H) {
    if (H.button !== 0) return;
    (H.preventDefault(), t(77, (Jl = null)));
    const R = N1.getBoundingClientRect();
    (t(78, (t1 = t1 ?? R.left)),
      t(79, (l1 = l1 ?? R.top)),
      (Qn = H.clientX - t1),
      (Jn = H.clientY - l1),
      t(81, (F0 = !0)),
      H.currentTarget.setPointerCapture(H.pointerId));
  }
  function Mo(H) {
    F0 &&
      t(78, ([t1, l1] = z0(H.clientX - Qn, H.clientY - Jn, N1)), t1, t(79, l1));
  }
  function Zo(H) {
    F0 && (t(81, (F0 = !1)), Ze());
  }
  let n1 = null,
    i1 = null,
    U1,
    W0 = !1,
    xn = 0,
    $n = 0;
  function Ho(H) {
    if (H.button !== 0) return;
    H.preventDefault();
    const R = U1.getBoundingClientRect();
    (t(82, (n1 = n1 ?? R.left)),
      t(83, (i1 = i1 ?? R.top)),
      (xn = H.clientX - n1),
      ($n = H.clientY - i1),
      t(85, (W0 = !0)),
      H.currentTarget.setPointerCapture(H.pointerId));
  }
  function Co(H) {
    W0 &&
      t(82, ([n1, i1] = z0(H.clientX - xn, H.clientY - $n, U1)), n1, t(83, i1));
  }
  function Lo(H) {
    W0 && (t(85, (W0 = !1)), Ze());
  }
  let qt = null,
    J1 = { ctrlKey: !0, shiftKey: !0, altKey: !1, metaKey: !1, code: "KeyP" },
    x1 = { ctrlKey: !0, shiftKey: !0, altKey: !1, metaKey: !1, code: "KeyI" },
    $1 = U.intensityUpShortcut,
    e0 = U.intensityDownShortcut,
    t0 = U.snoozeShortcut,
    l0 = U.snoozeShortcutDuration,
    d0 = U.nextTextureShortcut,
    h0 = U.deskLampShortcut,
    n0 = U.hotkeysEnabled,
    en = !1,
    tn = null;
  const Vo = Kn,
    ei = {
      "classic-matte": "Classic Matte",
      "whisper-weave": "Whisper Weave",
      "sunbaked-parchment": "Sunbaked Parchment",
      "saddle-linen": "Saddle Linen",
      "painter-press": "Painter's Press",
      "mulberry-veil": "Mulberry Veil",
      "vellum-mist": "Vellum Mist",
      "monastic-felt": "Monastic Felt",
      "carbon-ledger": "Carbon Ledger",
    };
  function So() {
    const H = Vo.filter((h1) => !jn(h1));
    if (H.length === 0) return;
    const R = Ft === "dark" ? Ce : de,
      ee = H.indexOf(R),
      dt = H[(ee + 1) % H.length];
    (Ft === "dark" ? t(1, (Ce = dt)) : t(0, (de = dt)), Ze());
    const st = !en;
    ((en = !0),
      tn && clearTimeout(tn),
      (tn = setTimeout(() => {
        en = !1;
      }, 3e3)),
      ft(`Switched to ${ei[dt] ?? dt}`, 3e3, st));
  }
  let I1 = [];
  async function z1(H) {
    try {
      (await ue("set_click_through", { enabled: H }),
        console.log(`Click-through ${H ? "enabled" : "disabled"}`));
    } catch (R) {
      console.error("Failed to set click-through:", R);
    }
  }
  async function zo() {
    try {
      await ue("set_always_on_top", { enabled: !0 });
    } catch (H) {
      console.error("Failed to set always on top:", H);
    }
  }
  async function Po(H) {
    if (Xe === "macos")
      try {
        await ue("set_window_alpha", { alpha: H });
      } catch {}
  }
  async function ti() {
    (t(37, (wt = !0)),
      t(38, (Pt = !1)),
      await z1(!1),
      await Q0(),
      t1 !== null &&
        l1 !== null &&
        N1 &&
        t(78, ([t1, l1] = z0(t1, l1, N1)), t1, t(79, l1)));
  }
  async function _l() {
    (t(37, (wt = !1)),
      t(38, (Pt = !1)),
      qt && (I1.length === 0 && T1(qt), t(86, (qt = null)), t(96, (I1 = []))),
      await P1());
  }
  async function P1() {
    !wt && !Pt && !ht && !le && !Pe && !v1 && (await z1(!0));
  }
  async function R0() {
    (t(2, (Ee = Ft === "dark" ? "dark" : "light")),
      t(38, (Pt = !0)),
      t(37, (wt = !1)),
      await z1(!1),
      await Q0(),
      n1 !== null &&
        i1 !== null &&
        U1 &&
        t(82, ([n1, i1] = z0(n1, i1, U1)), n1, t(83, i1)));
  }
  async function Oo() {
    (t(26, (S1 = "about")), Ze(), await R0(), Jr());
  }
  async function O1() {
    var H;
    try {
      const [R, ee] = await Promise.all([
        ue("get_open_overlay_indices"),
        ue("get_monitors"),
      ]);
      if (ee.length === 0) {
        ln = !0;
        return;
      }
      il = ee;
      const dt =
        (H = ee.find((zt) => zt.is_primary)) == null ? void 0 : H.index;
      let st;
      if (Z1 === null) {
        if (((st = Kt), Kt !== null && ee.length > 0)) {
          const zt = Kt.filter((m1) => m1 < ee.length);
          ((Z1 = zt.map((m1) => ({
            x: ee[m1].x,
            y: ee[m1].y,
            width: ee[m1].width,
            height: ee[m1].height,
          }))),
            zt.length !== Kt.length && (t(73, (Kt = zt)), (st = zt)),
            Ze());
        }
      } else if (Z1.length === 0) st = [];
      else {
        let zt = !1,
          m1 = !1;
        const jt = Z1.map((p1, Vc) => {
            const gi = ee.findIndex(
              (Al) =>
                Al.x === p1.x &&
                Al.y === p1.y &&
                Al.width === p1.width &&
                Al.height === p1.height,
            );
            if (gi >= 0) return gi;
            const sn = (Kt == null ? void 0 : Kt[Vc]) ?? -1;
            return sn >= 0 && sn < ee.length
              ? ((zt = !0), sn)
              : ((m1 = !0), -1);
          }),
          B0 = [...new Set(jt.filter((p1) => p1 >= 0))];
        ((st = B0),
          !m1 &&
            zt &&
            ((Z1 = B0.map((p1) => ee[p1])
              .filter(Boolean)
              .map((p1) => ({
                x: p1.x,
                y: p1.y,
                width: p1.width,
                height: p1.height,
              }))),
            t(73, (Kt = B0)),
            Ze()));
      }
      st !== null &&
        Kt !== null &&
        Z1 !== null &&
        st.length === Z1.length &&
        st !== Kt &&
        t(73, (Kt = st));
      const h1 = (st ?? []).filter((zt) => zt !== dt),
        C0 =
          !gt &&
          !nt &&
          !Et &&
          Rt &&
          !he &&
          (ct || (Xe === "windows" && At < X1));
      for (const zt of R)
        h1.includes(zt) ||
          (await ue("close_overlay_window", { monitorIndex: zt }).catch((m1) =>
            console.warn(`close_overlay_window(${zt}) failed:`, m1),
          ));
      if (C0)
        for (const zt of h1)
          await ue("open_overlay_window", { monitorIndex: zt }).catch((m1) =>
            console.warn(`open_overlay_window(${zt}) failed:`, m1),
          );
      K0 = vr(ee);
    } catch (R) {
      console.error("Failed to sync overlay windows:", R);
    }
  }
  let K0 = "",
    li,
    ln = !1,
    nn = [];
  function bl(H = "/paperman-ding.mp3") {
    if (f0)
      try {
        new Audio(H).play().catch(() => {});
      } catch {}
  }
  function ft(H, R = 3e3, ee = !0, dt = "/paperman-ding.mp3") {
    (t(39, (Lt = H)),
      t(40, (Gt = !0)),
      ee && bl(dt),
      clearTimeout(mt),
      (mt = setTimeout(() => {
        t(40, (Gt = !1));
      }, R)));
  }
  async function ni() {
    try {
      const H = Xe === "windows" ? "PC" : te ? "SetApp" : "SD",
        [R, ee] = await Promise.all([
          ue("get_diagnostics_info").catch(() => null),
          ue("get_monitors").catch(() =>
            il.map((jt) => ({
              width: jt.width,
              height: jt.height,
              is_primary: jt.is_primary,
            })),
          ),
        ]),
        dt =
          (ee ?? [])
            .map((jt) => {
              const B0 =
                  jt.scale_factor && jt.scale_factor !== 1
                    ? ` @${jt.scale_factor}x`
                    : "",
                p1 = jt.is_primary ? " (primary)" : "";
              return `${jt.width}×${jt.height}${B0}${p1}`;
            })
            .join(", ") || "unknown",
        st = A1 ? new Date(A1 * 1e3).toISOString().slice(0, 10) : "unknown";
      let h1 = "unknown";
      try {
        const jt = bi(r1);
        h1 = Dh
          ? jt.state === "ready" && jt.version
            ? `Update available: v${jt.version} (not yet installed)`
            : jt.state === "blocked"
              ? `Blocked (${jt.blocker ?? "unknown reason"})`
              : jt.state === "error"
                ? `Check failed: ${jt.error ?? "unknown error"}`
                : "Up to date"
          : `Managed by ${H === "MAS" ? "Mac App Store" : "Setapp"}`;
      } catch {}
      const C0 = rt
          ? `${s ?? "Custom"}, ${m ? "currently on" : i ? "waiting for dark" : "off (locked)"}`
          : "Off",
        zt = `Paperman Feedback — v${ye || "unknown"} (${H})`,
        m1 = `Hey Paperman team! 👋\n\n<Write your message here — we read every one and love hearing from you!>\n\n\n---\nDiagnostic info (leave this in, it helps us help you faster):\nApp version: ${ye || "unknown"} (${H})\nPlatform: ${Xe === "macos" ? "macOS" : Xe === "windows" ? "Windows" : Xe}\nArchitecture: ${(R == null ? void 0 : R.arch) ?? "unknown"}\nOS version: ${(R == null ? void 0 : R.os_version) ?? "unknown"}\nMonitors: ${(ee ?? []).length || "unknown"} (${dt})\nApp storage: ${(R == null ? void 0 : R.app_data_dir) ?? "unknown"}\nUpdate status: ${h1}\nLicense: ${ct ? "Active" : "Not licensed / expired"}\nPurchase/activation date: ${st}\nAuto-start on login: ${_t ? "On" : "Off"}\nBattery-saver pause: ${he ? "Active (overlay currently paused)" : "Not active"}\nTheme: ${Ft || "unknown"}\nOverlay: ${d || "unknown"} texture, ${Number.isFinite(w) ? Math.round(w * 100) + "%" : "unknown"} opacity\nDesk lamp mode: ${C0}\n`;
      await e1(
        `mailto:hello@doubl.one?subject=${encodeURIComponent(zt)}&body=${encodeURIComponent(m1)}`,
      );
    } catch {
      ft("Failed to open mail app");
    }
  }
  async function Z0() {
    try {
      const H = !n0;
      await ue("register_global_shortcuts", {
        toggle: H ? "" : p0(J1),
        intensity: H ? "" : p0(x1),
        intensityUp: H ? "" : p0($1),
        intensityDown: H ? "" : p0(e0),
        snooze: H ? "" : p0(t0),
        nextTexture: H ? "" : p0(d0),
        deskLamp: H ? "" : p0(h0),
      });
    } catch (H) {
      console.error("Failed to register global shortcuts:", H);
    }
  }
  async function To() {
    (await ue("set_screenshot_excluded", { excluded: Y1 }).catch(() => {}),
      Ze());
  }
  async function Eo() {
    (await ue("set_notch_strip_excluded", { excluded: Q1 }).catch(() => {}),
      await ue("set_notch_only_fullscreen", { onlyFullscreen: K1 }).catch(
        () => {},
      ),
      Ze());
  }
  async function an() {
    (await ue("set_notch_only_fullscreen", { onlyFullscreen: K1 }).catch(
      () => {},
    ),
      Ze());
  }
  function Do() {
    (n0 || t(86, (qt = null)), Z0(), Ze());
  }
  function Fo(H) {
    const R = H.currentTarget.checked;
    (t(30, (k1 = R ? "always" : "never")), Ze(), j0.refresh());
  }
  function N0(H) {
    const R = Xt(d, parseFloat((w + H).toFixed(2)), Xe);
    (v0(Ft, d, R),
      Ze(),
      t(41, (Yt = !0)),
      clearTimeout(Ue),
      (Ue = setTimeout(() => {
        t(41, (Yt = !1));
      }, 2e3)));
  }
  function vl(H) {
    const R = H1(H);
    return Zt.find((ee) => R.includes(H1(ee)));
  }
  function ii(H) {
    if (!H || Cl(H)) return;
    ((It = H), t(43, (Wt = H)));
    const R = !!vl(H);
    t(42, (tt = xt === "exclude" ? R : !R));
  }
  function i0(H) {
    (qt && qt !== H && I1.length === 0 && T1(qt),
      t(86, (qt = H)),
      t(96, (I1 = [])));
  }
  function B1() {
    t(86, (qt = null));
  }
  function T1(H) {
    (H === "toggle"
      ? t(
          87,
          (J1 = {
            ctrlKey: !1,
            shiftKey: !1,
            altKey: !1,
            metaKey: !1,
            code: "",
          }),
        )
      : H === "intensity"
        ? t(
            88,
            (x1 = {
              ctrlKey: !1,
              shiftKey: !1,
              altKey: !1,
              metaKey: !1,
              code: "",
            }),
          )
        : H === "intensity-up"
          ? t(
              89,
              ($1 = {
                ctrlKey: !1,
                shiftKey: !1,
                altKey: !1,
                metaKey: !1,
                code: "",
              }),
            )
          : H === "intensity-down"
            ? t(
                90,
                (e0 = {
                  ctrlKey: !1,
                  shiftKey: !1,
                  altKey: !1,
                  metaKey: !1,
                  code: "",
                }),
              )
            : H === "snooze"
              ? t(
                  91,
                  (t0 = {
                    ctrlKey: !1,
                    shiftKey: !1,
                    altKey: !1,
                    metaKey: !1,
                    code: "",
                  }),
                )
              : H === "next-texture"
                ? t(
                    93,
                    (d0 = {
                      ctrlKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      metaKey: !1,
                      code: "",
                    }),
                  )
                : H === "desk-lamp" &&
                  t(
                    94,
                    (h0 = {
                      ctrlKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      metaKey: !1,
                      code: "",
                    }),
                  ),
      t(86, (qt = null)),
      Ze(),
      Z0());
  }
  function Wo(H) {
    if (!qt) return;
    H.preventDefault();
    const R = [
        "ControlLeft",
        "ControlRight",
        "ShiftLeft",
        "ShiftRight",
        "AltLeft",
        "AltRight",
        "MetaLeft",
        "MetaRight",
      ],
      ee = [];
    if (
      (H.ctrlKey && ee.push("Ctrl"),
      H.metaKey && ee.push(Xe === "macos" ? "⌘" : "Win"),
      H.shiftKey && ee.push("Shift"),
      H.altKey && ee.push("Alt"),
      t(96, (I1 = ee)),
      !R.includes(H.code))
    ) {
      const dt = {
        KeyA: "A",
        KeyB: "B",
        KeyC: "C",
        KeyD: "D",
        KeyE: "E",
        KeyF: "F",
        KeyG: "G",
        KeyH: "H",
        KeyI: "I",
        KeyJ: "J",
        KeyK: "K",
        KeyL: "L",
        KeyM: "M",
        KeyN: "N",
        KeyO: "O",
        KeyP: "P",
        KeyQ: "Q",
        KeyR: "R",
        KeyS: "S",
        KeyT: "T",
        KeyU: "U",
        KeyV: "V",
        KeyW: "W",
        KeyX: "X",
        KeyY: "Y",
        KeyZ: "Z",
        Digit0: "0",
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        F1: "F1",
        F2: "F2",
        F3: "F3",
        F4: "F4",
        F5: "F5",
        F6: "F6",
        F7: "F7",
        F8: "F8",
        F9: "F9",
        F10: "F10",
        F11: "F11",
        F12: "F12",
        Space: "Space",
        Minus: "Minus",
        Equal: "Equal",
        BracketLeft: "BracketLeft",
        BracketRight: "BracketRight",
        Semicolon: "Semicolon",
        Quote: "Quote",
        Backquote: "Backquote",
        Backslash: "Backslash",
        Comma: "Comma",
        Period: "Period",
        Slash: "Slash",
      };
      if (!dt[H.code]) return;
      const st = {
        ctrlKey: H.ctrlKey,
        shiftKey: H.shiftKey,
        altKey: H.altKey,
        metaKey: H.metaKey,
        code: H.code,
      };
      (qt === "toggle"
        ? t(87, (J1 = st))
        : qt === "intensity"
          ? t(88, (x1 = st))
          : qt === "intensity-up"
            ? t(89, ($1 = st))
            : qt === "intensity-down"
              ? t(90, (e0 = st))
              : qt === "snooze"
                ? t(91, (t0 = st))
                : qt === "next-texture"
                  ? t(93, (d0 = st))
                  : qt === "desk-lamp" && t(94, (h0 = st)),
        t(96, (I1 = [...I1, dt[H.code] || H.code])),
        B1(),
        Ze(),
        Z0());
    }
  }
  function Ro(H) {
    H.code === "Escape" &&
      (le || ht || Pe
        ? (H.preventDefault(),
          t(21, (le = !1)),
          t(20, (ht = !1)),
          t(22, (Pe = !1)),
          P1())
        : (wt || Pt) && (H.preventDefault(), _l()));
  }
  function Ko() {
    wt ? _l() : ti();
  }
  function No() {
    R0();
  }
  function H0() {
    (_1 !== null && (clearTimeout(_1), (_1 = null)),
      Fe !== null && (clearInterval(Fe), (Fe = null)),
      t(6, (Et = !1)),
      (yt = null),
      t(44, (u1 = 0)));
  }
  function ai() {
    return Xe === "macos" && !ct
      ? ((tl = !0),
        t(5, (nt = !0)),
        t(47, (Qt = !1)),
        ft("License key required to activate Paperman"),
        t(20, (ht = !0)),
        z1(!1),
        !0)
      : !1;
  }
  function ri() {
    const H = Et;
    (H0(),
      H || t(5, (nt = !nt)),
      t(47, (Qt = !nt)),
      Ze(),
      ue("set_tray_pause_label", { paused: nt }).catch(() => {}),
      nt || ue("reassert_overlay_front").catch(() => {}));
  }
  async function oi() {
    ai() || (ri(), ft(nt ? "Protection Paused" : "Protection Resumed"));
  }
  function Uo() {
    ai() || (ri(), bl());
  }
  async function Io() {
    if (Xe === "macos" && !ct) {
      ((tl = !0),
        t(5, (nt = !0)),
        t(47, (Qt = !1)),
        ft("License key required to activate Paperman"),
        t(20, (ht = !0)),
        z1(!1));
      return;
    }
    (H0(),
      t(47, (Qt = !Qt)),
      t(5, (nt = !Qt)),
      Ze(),
      bl(),
      ue("set_tray_pause_label", { paused: nt }).catch(() => {}));
  }
  function U0(H) {
    (H0(),
      t(6, (Et = !0)),
      t(44, (u1 = H)),
      (yt = Date.now() + H * 60 * 1e3),
      ue("set_tray_pause_label", { paused: !0 }).catch(() => {}),
      ft(`Paperman snoozed for ${H} ${H === 1 ? "minute" : "min"}`),
      (Fe = setInterval(() => {
        t(44, (u1 = Math.max(1, Math.ceil((yt - Date.now()) / 6e4))));
      }, 3e4)),
      (_1 = setTimeout(
        () => {
          (Fe !== null && (clearInterval(Fe), (Fe = null)),
            t(6, (Et = !1)),
            (yt = null),
            t(44, (u1 = 0)),
            (_1 = null),
            ue("set_tray_pause_label", { paused: nt }).catch(() => {}),
            ft("Paperman resumed"));
        },
        H * 60 * 1e3,
      )));
  }
  async function si() {
    try {
      const H = Wt || It;
      if (H && !Cl(H)) {
        const R = w1(H),
          ee = vl(H);
        (xt === "exclude"
          ? ee
            ? (t(48, (Zt = Zt.filter((dt) => dt !== ee))),
              t(42, (tt = !1)),
              t(4, (gt = !1)),
              ft(`Enabled for ${R}`))
            : (t(48, (Zt = [...Zt, R])),
              t(42, (tt = !0)),
              t(4, (gt = !0)),
              ft(`Disabled for ${R}`))
          : ee
            ? (t(48, (Zt = Zt.filter((dt) => dt !== ee))),
              t(42, (tt = !0)),
              t(4, (gt = !0)),
              ft("Removed from allowed apps"))
            : (t(48, (Zt = [...Zt, R])),
              t(42, (tt = !1)),
              t(4, (gt = !1)),
              ft("Added to allowed apps")),
          Ze(),
          ue("set_tray_disable_app_label", {
            isExcluded: tt,
            appName: H,
          }).catch(() => {}));
      }
    } catch {
      ft("Failed to get active app");
    }
  }
  function Bo() {
    (t(18, (ct = !0)),
      t(20, (ht = !1)),
      t(22, (Pe = !1)),
      tl && (t(5, (nt = !1)), t(47, (Qt = !0))),
      A1 || t(63, (A1 = Math.floor(Date.now() / 1e3))),
      Ze(),
      ue("set_tray_pause_label", { paused: nt }).catch(() => {}),
      ue("set_tray_license_item", { isLicensed: true }).catch(() => {}),
      ft("Paperman Unlimited activated!"),
      P1());
  }
  function qo() {
    (t(18, (ct = !1)),
      t(21, (le = !1)),
      t(19, (At = 0)),
      ue("set_tray_license_item", { isLicensed: true }).catch(() => {}),
      ft("License removed from this device"),
      P1());
  }
  function jo() {
    (t(22, (Pe = !1)), t(20, (ht = !0)));
  }
  function Xo() {
    return !nt && !Et && !gt && Rt;
  }
  function ci() {
    const H = new Date(),
      R = new Date(H.getFullYear(), H.getMonth(), H.getDate() + 1),
      ee = Math.max(0, Math.floor((R.getTime() - H.getTime()) / 1e3)),
      dt = Math.floor(ee / 3600),
      st = Math.floor((ee % 3600) / 60),
      h1 = ee % 60;
    dt > 0
      ? t(61, (ll = `${dt}h ${st}m`))
      : st > 0
        ? t(61, (ll = `${st}m`))
        : t(61, (ll = `${h1}s`));
  }
  function Go(H, { id: R, radius: ee, dependsOn: dt }) {
    if (Xe !== "macos") return {};
    let st = !0;
    function h1() {
      if (!st) return;
      const zt = H.getBoundingClientRect();
      ue("sync_mac_native_blur", {
        id: R,
        x: zt.x,
        y: zt.y,
        width: zt.width,
        height: zt.height,
        radius: ee,
        visible: !0,
      }).catch(() => {});
    }
    const C0 = new ResizeObserver(h1);
    return (
      C0.observe(H),
      h1(),
      {
        update(zt) {
          h1();
        },
        destroy() {
          ((st = !1),
            C0.disconnect(),
            ue("sync_mac_native_blur", {
              id: R,
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              radius: 0,
              visible: !1,
            }).catch(() => {}));
        },
      }
    );
  }
  function Yo() {
    setInterval(async () => {
      if (Xe === "windows" && !ct && Xo())
        try {
          const H = await ue("record_usage_tick");
          (t(19, (At = H)), At >= X1 && (t(22, (Pe = !0)), z1(!1)));
        } catch {}
    }, 6e4);
  }
  typeof window < "u" &&
    ((window.showControls = Ko),
    (window.showSettings = No),
    (window.togglePause = oi),
    (window.handleSnooze = U0),
    (window.disableCurrentApp = si),
    (window.setDisableTargetForApp = (H) => {
      ii(H);
    }),
    (window.handleTrayCheckUpdates = async () => {
      (t(26, (S1 = "about")), Ze(), await R0(), Cn(!1));
    }),
    (window.updaterStore = r1),
    (window.simulateUpdate = (H = "3.3.0") => {
      r1.set({
        state: "ready",
        version: H,
        lastChecked: new Date(),
        error: null,
        blocker: null,
      });
    }),
    (window.simulateBlockedUpdate = (H = "translocated") => {
      r1.set({
        state: "blocked",
        version: null,
        lastChecked: new Date(),
        error: null,
        blocker: H,
      });
    }),
    (window.resetUpdate = () => {
      r1.set({
        state: "idle",
        version: null,
        lastChecked: null,
        error: null,
        blocker: null,
      });
    }),
    (window.handleTrayLicenseAction = async () => {
      (await z1(!1), ct ? t(21, (le = !0)) : t(20, (ht = !0)));
    }));
  function rn() {
    const H = w1($t);
    if (!H) return;
    const R = H1(H);
    Zt.some((ee) => H1(ee) === R) ||
      (t(48, (Zt = [...Zt, H])),
      t(50, ($t = "")),
      t(53, (ut = !1)),
      t(54, (me = -1)),
      Ze());
  }
  function ui(H) {
    const R = H1(H);
    (t(48, (Zt = Zt.filter((ee) => H1(ee) !== R))), Ze());
  }
  async function Qo() {
    try {
      L1 = await ue("get_running_apps");
    } catch {
      L1 = [];
    }
  }
  function fi() {
    t(54, (me = -1));
    const H = $t.trim().toLowerCase(),
      R = new Set(Zt.map((ee) => H1(ee)));
    (H
      ? t(52, (d1 = L1.filter((ee) => H1(ee).includes(H) && !R.has(H1(ee)))))
      : t(52, (d1 = L1.filter((ee) => !R.has(H1(ee))))),
      t(53, (ut = d1.length > 0)));
  }
  function on(H) {
    (t(50, ($t = H)), t(53, (ut = !1)), t(54, (me = -1)), rn());
  }
  function Jo() {
    Qo().then(() => fi());
  }
  function xo() {
    setTimeout(() => {
      (t(53, (ut = !1)), t(54, (me = -1)));
    }, 200);
  }
  function di() {
    if (!We) return;
    const H = We.querySelector(".autocomplete-item.selected");
    H && H.scrollIntoView({ block: "nearest" });
  }
  function $o(H) {
    if (ut && d1.length > 0) {
      if (H.key === "ArrowDown") {
        (H.preventDefault(),
          t(54, (me = me < d1.length - 1 ? me + 1 : 0)),
          setTimeout(di, 0));
        return;
      } else if (H.key === "ArrowUp") {
        (H.preventDefault(),
          t(54, (me = me > 0 ? me - 1 : d1.length - 1)),
          setTimeout(di, 0));
        return;
      } else if (H.key === "Enter") {
        if (me >= 0 && me < d1.length) {
          (H.preventDefault(), on(d1[me]));
          return;
        }
      } else if (H.key === "Escape") {
        (H.preventDefault(), t(53, (ut = !1)), t(54, (me = -1)));
        return;
      }
    }
    H.key === "Enter" && rn();
  }
  async function kl() {
    try {
      const H = await ue("get_active_app");
      H && H.toLowerCase() === "app store"
        ? Ot ||
          (ft(
            "App Store purchases may require quitting Paperman (or other overlay apps) from the menu bar.",
            9e3,
          ),
          (Ot = !0))
        : (Ot = !1);
      const R = Cl(H);
      if (!R) ii(H);
      else if (Wt) {
        const dt = !!vl(Wt);
        t(42, (tt = xt === "exclude" ? dt : !dt));
      }
      const ee = R ? Wt || It : H;
      if (ee && !Cl(ee)) {
        const dt = !!vl(ee),
          st = xt === "exclude" ? dt : !dt;
        (t(4, (gt = st)),
          t(42, (tt = st)),
          ue("set_tray_disable_app_label", {
            isExcluded: st,
            appName: ee,
          }).catch(() => {}));
      } else t(4, (gt = !1));
    } catch {
      t(4, (gt = !1));
    }
  }
  async function e2() {
    try {
      (await ue("toggle_auto_start", { enabled: _t }), Ze());
    } catch (H) {
      console.error("Failed to toggle auto-start:", H);
    }
  }
  async function I0(H) {
    try {
      ((xl = !0),
        $l && clearTimeout($l),
        ($l = setTimeout(() => {
          xl = !1;
        }, 1e3)),
        await ue("set_windows_theme", { theme: H }),
        t(24, (Ft = H)),
        ue("set_tray_icon", { theme: H }).catch(() => {}),
        Ze(),
        ft(`Switched to ${H === "light" ? "Light Mode" : "Dark Mode"}`));
    } catch (R) {
      (console.error("Failed to set theme:", R), ft("Failed to change theme"));
    }
  }
  function wl() {
    if (Ut) {
      t(12, (Rt = !0));
      return;
    }
    const H = new Date(),
      R = H.getHours() * 60 + H.getMinutes(),
      ee = kr(f1),
      dt = kr(Bt);
    t(12, (Rt = ee <= dt ? R >= ee && R < dt : R >= ee || R < dt));
  }
  function t2() {
    v1 && (I0(v1), t(25, (v1 = null)), P1());
  }
  function l2() {
    v1 && (t(24, (Ft = v1)), Ze(), t(25, (v1 = null)), P1());
  }
  function yl() {
    if (!V1 || R1 !== "auto") return;
    const H = new Date(),
      R = `${H.getHours().toString().padStart(2, "0")}:${H.getMinutes().toString().padStart(2, "0")}`,
      ee = c0,
      dt = u0,
      st = R >= ee && R < dt ? "light" : "dark";
    Ft !== st && (w0 ? v1 !== st && t(25, (v1 = st)) : I0(st));
  }
  function n2() {
    (t(86, (qt = null)),
      t(96, (I1 = [])),
      t(87, (J1 = U.toggleShortcut)),
      t(88, (x1 = U.intensityShortcut)),
      t(89, ($1 = U.intensityUpShortcut)),
      t(90, (e0 = U.intensityDownShortcut)),
      t(91, (t0 = U.snoozeShortcut)),
      t(92, (l0 = U.snoozeShortcutDuration)),
      t(93, (d0 = U.nextTextureShortcut)),
      t(94, (h0 = U.deskLampShortcut)),
      Ze(),
      Z0(),
      ft("Hot keys reset to defaults"));
  }
  function i2() {
    const H = Xe === "macos";
    (t(174, (G = U.lightClassicMatteOpacity)),
      t(175, (_e = H ? 0.2 : U.lightWhisperWeaveOpacity)),
      t(176, (He = H ? 0.2 : U.lightSunbakedParchmentOpacity)),
      t(177, (be = H ? 0.2 : U.lightSaddleLinenOpacity)),
      t(178, (fe = H ? 0.2 : U.lightPainterPressOpacity)),
      t(179, (ke = H ? 0.2 : U.lightMulberryVeilOpacity)),
      t(180, (we = H ? 0.2 : U.lightVellumMistOpacity)),
      t(181, (Oe = H ? 0.2 : U.lightMonasticFeltOpacity)),
      t(182, (qe = H ? 0.2 : U.lightCarbonLedgerOpacity)),
      t(183, (Le = U.darkClassicMatteOpacity)),
      t(184, (Ve = H ? 0.2 : U.darkWhisperWeaveOpacity)),
      t(185, (Te = H ? 0.2 : U.darkSunbakedParchmentOpacity)),
      t(186, (ot = H ? 0.2 : U.darkSaddleLinenOpacity)),
      t(187, (Ke = H ? 0.2 : U.darkPainterPressOpacity)),
      t(188, (x = H ? 0.2 : U.darkMulberryVeilOpacity)),
      t(189, (lt = H ? 0.2 : U.darkVellumMistOpacity)),
      t(190, (Ne = H ? 0.2 : U.darkMonasticFeltOpacity)),
      t(191, (Y = H ? 0.2 : U.darkCarbonLedgerOpacity)),
      t(0, (de = s1(U.lightTexture))),
      t(1, (Ce = s1(U.darkTexture))),
      t(3, (it = Fi(Tl))),
      t(9, (Ut = U.alwaysOn)),
      t(47, (Qt = U.scheduleEnabled)),
      t(10, (f1 = U.startTime)),
      t(11, (Bt = U.endTime)),
      t(48, (Zt = [...U.excludedApps])),
      t(49, (xt = U.exceptionsMode)),
      t(51, (_t = U.autoStartEnabled)),
      t(23, (V1 = U.themeScheduleEnabled)),
      t(64, (c0 = U.lightThemeStartTime)),
      t(65, (u0 = U.darkThemeStartTime)),
      t(193, (w0 = U.confirmThemeSwitch)),
      t(66, (R1 = U.appearanceMode)),
      t(87, (J1 = U.toggleShortcut)),
      t(88, (x1 = U.intensityShortcut)),
      t(89, ($1 = U.intensityUpShortcut)),
      t(90, (e0 = U.intensityDownShortcut)),
      t(91, (t0 = U.snoozeShortcut)),
      t(92, (l0 = U.snoozeShortcutDuration)),
      t(95, (n0 = U.hotkeysEnabled)),
      t(69, (f0 = U.soundEnabled)),
      t(70, (Y1 = U.hideFromScreenshots)),
      t(71, (Q1 = U.keepMenuBarClear)),
      t(72, (K1 = U.keepMenuBarClearOnlyFullscreen)),
      t(30, (k1 = U.batteryBehavior)),
      t(73, (Kt = null)),
      (Z1 = null),
      t(74, (Yl = void 0)),
      t(78, (t1 = null)),
      t(79, (l1 = null)),
      t(82, (n1 = null)),
      t(83, (i1 = null)),
      Ze(),
      Z0(),
      O1(),
      wl(),
      ue("toggle_auto_start", { enabled: U.autoStartEnabled }).catch(() => {}),
      ue("set_screenshot_excluded", { excluded: U.hideFromScreenshots }).catch(
        () => {},
      ),
      ue("set_notch_strip_excluded", { excluded: U.keepMenuBarClear }).catch(
        () => {},
      ),
      ue("set_notch_only_fullscreen", {
        onlyFullscreen: U.keepMenuBarClearOnlyFullscreen,
      }).catch(() => {}),
      ft("Settings reset to defaults"));
  }
  function hi() {
    return {
      lightClassicMatteOpacity: G,
      lightWhisperWeaveOpacity: _e,
      lightSunbakedParchmentOpacity: He,
      lightSaddleLinenOpacity: be,
      lightPainterPressOpacity: fe,
      lightMulberryVeilOpacity: ke,
      lightVellumMistOpacity: we,
      lightMonasticFeltOpacity: Oe,
      lightCarbonLedgerOpacity: qe,
      darkClassicMatteOpacity: Le,
      darkWhisperWeaveOpacity: Ve,
      darkSunbakedParchmentOpacity: Te,
      darkSaddleLinenOpacity: ot,
      darkPainterPressOpacity: Ke,
      darkMulberryVeilOpacity: x,
      darkVellumMistOpacity: lt,
      darkMonasticFeltOpacity: Ne,
      darkCarbonLedgerOpacity: Y,
      lightTexture: s1(de),
      darkTexture: s1(Ce),
      pinnedTextures: it,
      alwaysOn: Ut,
      scheduleEnabled: Qt,
      startTime: f1,
      endTime: Bt,
      excludedApps: Zt,
      exceptionsMode: xt,
      autoStartEnabled: _t,
      themeScheduleEnabled: V1,
      lightThemeStartTime: c0,
      darkThemeStartTime: u0,
      currentTheme: Ft,
      appearanceMode: R1,
      toggleShortcut: J1,
      intensityShortcut: x1,
      intensityUpShortcut: $1,
      intensityDownShortcut: e0,
      snoozeShortcut: t0,
      snoozeShortcutDuration: l0,
      nextTextureShortcut: d0,
      deskLampShortcut: h0,
      hotkeysEnabled: n0,
      soundEnabled: f0,
      hideFromScreenshots: Y1,
      keepMenuBarClear: Q1,
      keepMenuBarClearOnlyFullscreen: K1,
      batteryBehavior: k1,
      currentSettingsTab: S1,
      animationsEnabled: y0,
      animationDirection: A0,
      randomRevealStyle: M0,
      confirmThemeSwitch: w0,
      selectedMonitorIndexes: Kt,
      selectedMonitorGeometries: Z1,
      panelX: t1,
      panelY: l1,
      settingsPanelX: n1,
      settingsPanelY: i1,
      licenseDisplayName: k0,
      licenseActivatedAt: A1,
      deskLampEnabled: rt,
      deskLampDarkOnly: Vt,
      deskLampPosition: St,
      deskLampWarmth: bt,
      deskLampSpread: vt,
      deskLampDimming: kt,
      deskLampAnimateEnter: Tt,
      deskLampPresetChangeToken: Dt,
    };
  }
  function mi(H) {
    ue("broadcast_settings", { settings: H }).catch(() => {});
  }
  function Ze() {
    const H = hi();
    (localStorage.setItem("paperman-settings", JSON.stringify(H)), mi(H));
  }
  function a2() {
    const H = localStorage.getItem("paperman-settings");
    if (H)
      try {
        const R = JSON.parse(H);
        (t(
          174,
          ({
            lightClassicMatteOpacity: G,
            lightWhisperWeaveOpacity: _e,
            lightSunbakedParchmentOpacity: He,
            lightSaddleLinenOpacity: be,
            lightPainterPressOpacity: fe,
            lightMulberryVeilOpacity: ke,
            lightVellumMistOpacity: we,
            lightMonasticFeltOpacity: Oe,
            lightCarbonLedgerOpacity: qe,
            darkClassicMatteOpacity: Le,
            darkWhisperWeaveOpacity: Ve,
            darkSunbakedParchmentOpacity: Te,
            darkSaddleLinenOpacity: ot,
            darkPainterPressOpacity: Ke,
            darkMulberryVeilOpacity: x,
            darkVellumMistOpacity: lt,
            darkMonasticFeltOpacity: Ne,
            darkCarbonLedgerOpacity: Y,
            lightTexture: de,
            darkTexture: Ce,
          } = lo(R, Xe)),
          G,
          t(175, _e),
          t(176, He),
          t(177, be),
          t(178, fe),
          t(179, ke),
          t(180, we),
          t(181, Oe),
          t(182, qe),
          t(183, Le),
          t(184, Ve),
          t(185, Te),
          t(186, ot),
          t(187, Ke),
          t(188, x),
          t(189, lt),
          t(190, Ne),
          t(191, Y),
          t(0, de),
          t(1, Ce),
        ),
          t(3, (it = Fi(R.pinnedTextures))),
          t(9, (Ut = R.alwaysOn ?? U.alwaysOn)),
          t(47, (Qt = R.scheduleEnabled ?? U.scheduleEnabled)),
          t(5, (nt = !Qt)),
          t(10, (f1 = R.startTime ?? U.startTime)),
          t(11, (Bt = R.endTime ?? U.endTime)),
          t(48, (Zt = R.excludedApps ?? [...U.excludedApps])),
          t(49, (xt = R.exceptionsMode ?? U.exceptionsMode)),
          t(51, (_t = R.autoStartEnabled ?? U.autoStartEnabled)),
          t(23, (V1 = R.themeScheduleEnabled ?? U.themeScheduleEnabled)),
          t(64, (c0 = R.lightThemeStartTime ?? U.lightThemeStartTime)),
          t(65, (u0 = R.darkThemeStartTime ?? U.darkThemeStartTime)),
          t(24, (Ft = R.currentTheme ?? U.currentTheme)),
          t(193, (w0 = R.confirmThemeSwitch ?? U.confirmThemeSwitch)),
          t(66, (R1 = R.appearanceMode ?? U.appearanceMode)),
          t(
            87,
            (J1 = R.toggleShortcut ?? R.customShortcut ?? U.toggleShortcut),
          ),
          t(88, (x1 = R.intensityShortcut ?? U.intensityShortcut)),
          t(89, ($1 = R.intensityUpShortcut ?? U.intensityUpShortcut)),
          t(90, (e0 = R.intensityDownShortcut ?? U.intensityDownShortcut)),
          t(91, (t0 = R.snoozeShortcut ?? U.snoozeShortcut)),
          t(92, (l0 = R.snoozeShortcutDuration ?? U.snoozeShortcutDuration)),
          t(93, (d0 = R.nextTextureShortcut ?? U.nextTextureShortcut)),
          t(94, (h0 = R.deskLampShortcut ?? U.deskLampShortcut)),
          t(95, (n0 = R.hotkeysEnabled ?? U.hotkeysEnabled)),
          t(69, (f0 = R.soundEnabled ?? U.soundEnabled)),
          t(70, (Y1 = R.hideFromScreenshots ?? U.hideFromScreenshots)),
          t(71, (Q1 = R.keepMenuBarClear ?? U.keepMenuBarClear)),
          t(
            72,
            (K1 =
              R.keepMenuBarClearOnlyFullscreen ??
              U.keepMenuBarClearOnlyFullscreen),
          ),
          t(
            30,
            (k1 =
              R.batteryBehavior ??
              (R.pauseOnBattery ? "always" : U.batteryBehavior)),
          ),
          t(26, (S1 = R.currentSettingsTab ?? U.currentSettingsTab)),
          t(27, (y0 = R.animationsEnabled ?? U.animationsEnabled)),
          t(28, (A0 = Wl(R.animationDirection ?? U.animationDirection))),
          t(29, (M0 = Rl(R.randomRevealStyle ?? U.randomRevealStyle))),
          Array.isArray(R.selectedMonitorIndexes)
            ? t(73, (Kt = R.selectedMonitorIndexes))
            : typeof R.selectedMonitorIndex == "number" &&
                R.selectedMonitorIndex > 0
              ? t(73, (Kt = [R.selectedMonitorIndex]))
              : t(73, (Kt = null)),
          (Z1 = Array.isArray(R.selectedMonitorGeometries)
            ? R.selectedMonitorGeometries
            : null),
          t(78, (t1 = R.panelX ?? null)),
          t(79, (l1 = R.panelY ?? null)),
          t(82, (n1 = R.settingsPanelX ?? null)),
          t(83, (i1 = R.settingsPanelY ?? null)),
          t(62, (k0 = R.licenseDisplayName ?? "")),
          t(63, (A1 = R.licenseActivatedAt ?? null)),
          t(192, (rt = R.deskLampEnabled ?? Ht.enabled)),
          t(13, (Vt = R.deskLampDarkOnly ?? Ht.darkOnly)),
          t(14, (St = R.deskLampPosition ?? Ht.position)),
          t(15, (bt = R.deskLampWarmth ?? Ht.warmth)),
          t(16, (vt = R.deskLampSpread ?? Ht.spread)),
          t(17, (kt = R.deskLampDimming ?? Ht.dimming)),
          t(56, (Tt = R.deskLampAnimateEnter ?? Ht.animateEnter)));
      } catch (R) {
        console.error("Failed to load settings:", R);
      }
  }
  b0(async () => {
    try {
      (t(7, (Xe = await ue("get_platform"))),
        t(8, (o1 = await ue("is_setapp_build").catch(() => !1))),
        document.documentElement.setAttribute("data-platform", Xe));
    } catch {}
    (a2(),
      ue("set_screenshot_excluded", { excluded: Y1 }).catch(() => {}),
      ue("set_notch_strip_excluded", { excluded: Q1 }).catch(() => {}),
      ue("set_notch_only_fullscreen", { onlyFullscreen: K1 }).catch(() => {}),
      Xe === "macos" &&
        !localStorage.getItem("paperman-settings") &&
        (t(175, (_e = 0.2)),
        t(176, (He = 0.2)),
        t(184, (Ve = 0.2)),
        t(185, (Te = 0.2))),
      o1 && !A1 && (t(63, (A1 = Math.floor(Date.now() / 1e3))), Ze()),
      mi(hi()),
      ue("set_tray_pause_label", { paused: nt }).catch(() => {}),
      r6()
        .then((H) => t(46, (ye = H)))
        .catch(() => {}),
      await z1(!0),
      await Z0(),
      (rl = await C1("shortcut-toggle", () => oi())),
      (sl = await C1("shortcut-intensity-up", () => N0(0.05))),
      (cl = await C1("shortcut-intensity-down", () => N0(-0.05))),
      (ul = await C1("shortcut-snooze", () => {
        Et ? H0() : nt || U0(l0);
      })),
      (fl = await C1("shortcut-next-texture", () => So())),
      (dl = await C1("shortcut-desk-lamp", () => vo())),
      (ol = await C1("shortcut-intensity", () => {
        wt ? _l() : Pt || ti();
      })),
      Xe === "macos" &&
        (al = await C1("tray-left-click", ({ payload: H }) => {
          const R = window.devicePixelRatio || 1,
            ee = (H.x + H.width / 2) / R,
            dt = 300,
            st = Math.max(8, Math.min(ee - dt / 2, window.innerWidth - dt - 8)),
            h1 = window.screen.availTop ?? 0;
          (t(77, (Jl = { x: st, y: h1 + 4 })), O7());
        })),
      (gl = P7()),
      O1(),
      await Po(1),
      await zo(),
      setTimeout(() => ue("reassert_overlay_front").catch(() => {}), 500));
    try {
      await ue("fix_mac_transparency");
    } catch {}
    try {
      (t(24, (Ft = await ue("get_windows_theme"))),
        ue("set_tray_icon", { theme: Ft }).catch(() => {}));
    } catch (H) {
      console.error("Failed to get system theme:", H);
    }
    if (
      ((ml = window.matchMedia("(prefers-color-scheme: dark)")),
      (pl = (H) => {
        if (xl) return;
        const R = H.matches ? "dark" : "light";
        Ft !== R &&
          (t(24, (Ft = R)),
          ue("set_tray_icon", { theme: Ft }).catch(() => {}),
          Ze(),
          ft(
            `System changed to ${R === "light" ? "Light Mode" : "Dark Mode"}`,
          ));
      }),
      ml.addEventListener("change", pl),
      wl(),
      yl(),
      ci(),
      setInterval(() => {
        (wl(), yl(), ci());
      }, 6e4),
      kl(),
      setInterval(kl, 1e3),
      (li = setInterval(async () => {
        try {
          const H = await ue("get_monitors"),
            R = vr(H);
          if (H.length > 0 && ln) {
            ((ln = !1),
              (K0 = R),
              O1(),
              nn.forEach(clearTimeout),
              (nn = [setTimeout(O1, 1500), setTimeout(O1, 4e3)]));
            return;
          }
          (K0 && R !== K0 && O1(), (K0 = R));
        } catch {}
      }, 5e3)),
      Xe === "macos" &&
        (document.body.classList.add("is-mac"),
        (hl = () => {
          document.visibilityState === "visible" && O1();
        }),
        document.addEventListener("visibilitychange", hl)),
      !o1)
    ) {
      try {
        t(18, (ct = await ue("check_license_smart_command")));
      } catch {
        t(18, (ct = !1));
      }
      if (!ct && Xe === "windows") {
        try {
          t(19, (At = await ue("get_daily_usage")));
        } catch {
          t(19, (At = 0));
        }
        At >= X1 && t(22, (Pe = !0));
      }
      (Yo(),
        ue("set_tray_license_item", {
          isLicensed: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa,
        }).catch(() => {}),
        pi(),
        (qn = setInterval(pi, _o)));
      const ct = true;
    }
  });
  async function pi() {
    const H = bi(r1);
    if (
      !(
        H.state === "ready" ||
        H.state === "downloading" ||
        H.state === "blocked"
      )
    )
      try {
        const R = await Cn(!0);
        R != null &&
          R.shouldUpdate &&
          R.version &&
          ft(`✨ Fresh paper (v${R.version}) ready! Check About tab to update`);
      } catch (R) {
        console.warn("Update check skipped or failed:", R);
      }
  }
  function r2(H) {
    q1.call(this, l, H);
  }
  function o2(H) {
    q1.call(this, l, H);
  }
  function s2(H) {
    q1.call(this, l, H);
  }
  function c2(H) {
    q1.call(this, l, H);
  }
  function u2(H) {
    q1.call(this, l, H);
  }
  const f2 = () => {
      if (Et) {
        H0();
        return;
      }
      nt || t(45, (ie = !ie));
    },
    d2 = (H) => {
      (t(45, (ie = !1)), U0(H));
    },
    h2 = () => N0(-0.01),
    m2 = (H) => {
      const R = parseFloat(H.currentTarget.value);
      (v0(Ft, d, R), Ze());
    },
    p2 = () => N0(0.01),
    g2 = (H) => {
      (Ft === "dark" ? t(1, (Ce = H)) : t(0, (de = H)), Ze());
    },
    _2 = () => {
      Xe === "macos" ? t(20, (ht = !0)) : t(22, (Pe = !0));
    };
  function b2(H) {
    Jt[H ? "unshift" : "push"](() => {
      ((N1 = H), t(80, N1));
    });
  }
  const v2 = () => pt("protection"),
    k2 = () => pt("texture"),
    w2 = () => pt("desklamp"),
    y2 = () => pt("circadian"),
    A2 = () => pt("exceptions"),
    M2 = () => pt("display"),
    Z2 = () => pt("shortcuts"),
    H2 = () => pt("license"),
    C2 = () => pt("refer"),
    L2 = () => pt("support"),
    V2 = () => pt("community"),
    S2 = () => pt("about"),
    z2 = () => {
      (t(9, (Ut = !0)), Ze());
    },
    P2 = () => {
      (t(9, (Ut = "evening")), Ze());
    },
    O2 = () => {
      (t(9, (Ut = !1)), Ze());
    };
  function T2(H) {
    ((f1 = H), t(10, f1));
  }
  function E2(H) {
    ((Bt = H), t(11, Bt));
  }
  const D2 = (H) => U0(H);
  function F2() {
    ((_t = this.checked), t(51, _t));
  }
  const W2 = () => {
      (t(30, (k1 = "always")), Ze(), j0.refresh());
    },
    R2 = () => {
      (t(30, (k1 = "below50")), Ze(), j0.refresh());
    },
    K2 = () => {
      (t(30, (k1 = "below30")), Ze(), j0.refresh());
    };
  function N2() {
    ((f0 = this.checked), t(69, f0));
  }
  const U2 = (H) => Gn(H.detail);
  function I2() {
    ((Y1 = this.checked), t(70, Y1));
  }
  function B2() {
    ((Q1 = this.checked), t(71, Q1));
  }
  const q2 = () => {
      (t(72, (K1 = !1)), an());
    },
    j2 = () => {
      (t(72, (K1 = !0)), an());
    };
  function X2() {
    ((n0 = this.checked), t(95, n0));
  }
  const G2 = () => i0("toggle"),
    Y2 = () => B1(),
    Q2 = () => T1("toggle"),
    J2 = () => i0("intensity"),
    x2 = () => B1(),
    $2 = () => T1("intensity"),
    es = () => i0("intensity-up"),
    ts = () => B1(),
    ls = () => T1("intensity-up"),
    ns = () => i0("intensity-down"),
    is = () => B1(),
    as = () => T1("intensity-down");
  function rs() {
    ((l0 = Rc(this)), t(92, l0));
  }
  const os = () => i0("snooze"),
    ss = () => B1(),
    cs = () => T1("snooze"),
    us = () => i0("next-texture"),
    fs = () => B1(),
    ds = () => T1("next-texture"),
    hs = () => i0("desk-lamp"),
    ms = () => B1(),
    ps = () => T1("desk-lamp");
  function gs() {
    ((V1 = this.checked), t(23, V1));
  }
  const _s = () => {
    (V1 && t(66, (R1 = "auto")), Ze());
  };
  function bs(H) {
    ((c0 = H), t(64, c0));
  }
  function vs(H) {
    ((u0 = H), t(65, u0));
  }
  const ks = () => {
      (t(66, (R1 = "auto")), t(23, (V1 = !0)), yl(), Ze());
    },
    ws = () => {
      (t(66, (R1 = "light")), I0("light"), Ze());
    },
    ys = () => {
      (t(66, (R1 = "dark")), I0("dark"), Ze());
    };
  function As(H) {
    ((xt = H), t(49, xt));
  }
  const Ms = () => {
    (Ze(), kl());
  };
  function Zs() {
    (($t = this.value), t(50, $t));
  }
  const Hs = (H) => {
      t(54, (me = H));
    },
    Cs = (H) => on(H);
  function Ls(H) {
    Jt[H ? "unshift" : "push"](() => {
      ((We = H), t(55, We));
    });
  }
  const Vs = (H) => ui(H),
    Ss = (H) => {
      (t(62, (k0 = H)), Ze());
    },
    zs = (H) => ft(H, 3e3, !1);
  function Ps(H) {
    ((k0 = H), t(62, k0));
  }
  function Os(H) {
    ((A1 = H), t(63, A1));
  }
  const Ts = () => t(21, (le = !0)),
    Es = () => t(20, (ht = !0)),
    Ds = () =>
      e1(
        Xe === "macos"
          ? "https://paperman.cc/upgrade-for-mac"
          : "https://paperman.cc/upgrade-for-windows",
      );
  function Fs(H) {
    ((Kt = H), t(73, Kt));
  }
  const Ws = (H) => {
    t(74, (Yl = H.detail));
  };
  function Rs(H) {
    ((Ee = H), t(2, Ee));
  }
  const Ks = (H) => De(H.id),
    Ns = () => {
      Xe === "macos" ? t(20, (ht = !0)) : t(22, (Pe = !0));
    },
    Us = (H) => je(H.id),
    Is = () => {
      (v0(Ee, ne, Math.max(X, Q - 0.01)), Ze());
    },
    Bs = (H) => {
      const R = parseFloat(H.currentTarget.value);
      (v0(Ee, ne, R), Ze());
    },
    qs = () => {
      (v0(Ee, ne, Math.min(ae, Q + 0.01)), Ze());
    },
    js = (H) => Xn(H.id);
  function Xs(H) {
    ((St = H), t(14, St));
  }
  const Gs = () => {
    (t(15, (bt = Math.max(0, Math.round((bt - 0.05) * 100) / 100))), Ze());
  };
  function Ys() {
    ((bt = un(this.value)), t(15, bt));
  }
  const Qs = () => {
      (t(15, (bt = Math.min(1, Math.round((bt + 0.05) * 100) / 100))), Ze());
    },
    Js = () => {
      (t(16, (vt = Math.max(0, Math.round((vt - 0.05) * 100) / 100))), Ze());
    };
  function xs() {
    ((vt = un(this.value)), t(16, vt));
  }
  const $s = () => {
      (t(16, (vt = Math.min(1, Math.round((vt + 0.05) * 100) / 100))), Ze());
    },
    ec = () => {
      (t(17, (kt = Math.max(0.1, Math.round((kt - 0.02) * 100) / 100))), Ze());
    };
  function tc() {
    ((kt = un(this.value)), t(17, kt));
  }
  const lc = () => {
    (t(17, (kt = Math.min(0.5, Math.round((kt + 0.02) * 100) / 100))), Ze());
  };
  function nc() {
    ((Vt = this.checked), t(13, Vt));
  }
  function ic() {
    ((Tt = this.checked), t(56, Tt));
  }
  const ac = async () => {
      try {
        (await Zn("hello@doubl.one"),
          t(68, (Gl = !0)),
          setTimeout(() => t(68, (Gl = !1)), 2e3),
          ft("Email copied to clipboard"));
      } catch {
        ft("Failed to copy email");
      }
    },
    rc = (H) => {
      (H.key === "Enter" || H.key === " ") && (H.preventDefault(), ni());
    },
    oc = () => t(67, (M1 = M1 === 1 ? null : 1)),
    sc = () => e1("https://doubl.one/blog/paperman-full-screen-support"),
    cc = () => t(67, (M1 = M1 === 5 ? null : 5)),
    uc = () => t(67, (M1 = M1 === 2 ? null : 2)),
    fc = () => t(67, (M1 = M1 === 4 ? null : 4)),
    dc = () => e1("https://doubl.one/blog/paperman-drag-to-edge-apps"),
    hc = () => t(67, (M1 = M1 === 3 ? null : 3)),
    mc = () => e1("ms-windows-store://review/?ProductId=xp8bxdgcdggwn9"),
    pc = () => {
      e1("macappstore://apps.apple.com/app/id6761328838?action=write-review");
    },
    gc = () => e1("https://setapp.com/apps/paperman"),
    _c = () =>
      e1(
        "https://twitter.com/intent/tweet?text=Upgraded%20my%20reading%20experience%20with%20Paperman%20for%20Mac.%20It%20makes%20my%20screen%20feel%20like%20paper!%20Built%20by%20%40lofifounder%20%26%20%40lofidesigner%20%E2%98%95%EF%B8%8F%0A%0Apaperman.cc",
      ),
    bc = () =>
      e1(
        "https://www.linkedin.com/sharing/share-offsite/?url=https://paperman.cc",
      ),
    vc = () => e1("https://www.producthunt.com/products/paperman"),
    kc = () => e1("https://doublone.substack.com/"),
    wc = () => e1("https://x.com/doubl_one"),
    yc = () => e1("https://www.reddit.com/r/DoublOneStudios/"),
    Ac = () => e1("https://www.instagram.com/doubl.one/"),
    Mc = () => e1("https://doubl.one/catalog");
  function Zc(H) {
    Jt[H ? "unshift" : "push"](() => {
      ((U1 = H), t(84, U1));
    });
  }
  const Hc = () => {
      (t(20, (ht = !1)), P1());
    },
    Cc = () => {
      (t(21, (le = !1)), P1());
    },
    Lc = () => {
      (t(22, (Pe = !1)), P1());
    };
  return (
    (l.$$.update = () => {
      if (
        (l.$$.dirty[0] & 1 && t(209, (n = s1(de))),
        l.$$.dirty[0] & 2 && t(207, (a = s1(Ce))),
        (l.$$.dirty[0] & 16777216) | (l.$$.dirty[6] & 10485760) &&
          t(211, (u = Ft === "dark" ? a : n)),
        l.$$.dirty[0] & 262144 && t(208, (r = !ct)),
        l.$$.dirty[6] & 37749760 && t(31, (d = r && u !== p ? p : u)),
        l.$$.dirty[0] & 262144 && t(195, (c = !ct)),
        l.$$.dirty[6] & 576 && t(36, (g = rt && !c)),
        (l.$$.dirty[0] & 16785408) | (l.$$.dirty[6] & 576) &&
          t(
            34,
            (m = mo(
              { enabled: rt, darkOnly: Vt },
              { locked: c, currentTheme: Ft },
            )),
          ),
        l.$$.dirty[1] & 40 && t(97, (i = g && !m)),
        l.$$.dirty[0] & 245760 &&
          t(
            98,
            (s = Ep({ position: St, warmth: bt, spread: vt, dimming: kt })),
          ),
        (l.$$.dirty[0] & 16777216) |
          (l.$$.dirty[1] & 1) |
          (l.$$.dirty[5] & 2146959360) |
          (l.$$.dirty[6] & 63) &&
          t(
            32,
            (w =
              Ft === "dark"
                ? d === "whisper-weave"
                  ? Ve
                  : d === "sunbaked-parchment"
                    ? Te
                    : d === "saddle-linen"
                      ? ot
                      : d === "painter-press"
                        ? Ke
                        : d === "mulberry-veil"
                          ? x
                          : d === "vellum-mist"
                            ? lt
                            : d === "monastic-felt"
                              ? Ne
                              : d === "carbon-ledger"
                                ? Y
                                : Le
                : d === "whisper-weave"
                  ? _e
                  : d === "sunbaked-parchment"
                    ? He
                    : d === "saddle-linen"
                      ? be
                      : d === "painter-press"
                        ? fe
                        : d === "mulberry-veil"
                          ? ke
                          : d === "vellum-mist"
                            ? we
                            : d === "monastic-felt"
                              ? Oe
                              : d === "carbon-ledger"
                                ? qe
                                : G),
          ),
        (l.$$.dirty[0] & 128) | (l.$$.dirty[1] & 1) && t(210, (k = Vl(d, Xe))),
        l.$$.dirty[6] & 16777216 && t(108, (f = k.min)),
        l.$$.dirty[6] & 16777216 && t(107, (M = k.max)),
        l.$$.dirty[6] & 12583936 && t(203, (S = r && n !== p ? p : n)),
        l.$$.dirty[6] & 6292480 && t(204, (O = r && a !== p ? p : a)),
        (l.$$.dirty[5] & 267911168) | (l.$$.dirty[6] & 131072) &&
          t(
            201,
            (P =
              S === "whisper-weave"
                ? _e
                : S === "sunbaked-parchment"
                  ? He
                  : S === "saddle-linen"
                    ? be
                    : S === "painter-press"
                      ? fe
                      : S === "mulberry-veil"
                        ? ke
                        : S === "vellum-mist"
                          ? we
                          : S === "monastic-felt"
                            ? Oe
                            : S === "carbon-ledger"
                              ? qe
                              : G),
          ),
        (l.$$.dirty[5] & 1879048192) | (l.$$.dirty[6] & 262207) &&
          t(
            202,
            (T =
              O === "whisper-weave"
                ? Ve
                : O === "sunbaked-parchment"
                  ? Te
                  : O === "saddle-linen"
                    ? ot
                    : O === "painter-press"
                      ? Ke
                      : O === "mulberry-veil"
                        ? x
                        : O === "vellum-mist"
                          ? lt
                          : O === "monastic-felt"
                            ? Ne
                            : O === "carbon-ledger"
                              ? Y
                              : Le),
          ),
        (l.$$.dirty[0] & 128) | (l.$$.dirty[6] & 131072) &&
          t(206, (L = Vl(S, Xe))),
        l.$$.dirty[6] & 1048576 && t(199, (z = L.min)),
        l.$$.dirty[6] & 1048576 && t(197, (F = L.max)),
        (l.$$.dirty[0] & 128) | (l.$$.dirty[6] & 262144) &&
          t(205, (E = Vl(O, Xe))),
        l.$$.dirty[6] & 524288 && t(200, (D = E.min)),
        l.$$.dirty[6] & 524288 && t(198, (N = E.max)),
        (l.$$.dirty[0] & 4) | (l.$$.dirty[6] & 393216) &&
          t(106, (ne = Ee === "dark" ? O : S)),
        (l.$$.dirty[0] & 4) | (l.$$.dirty[6] & 98304) &&
          t(105, (Q = Ee === "dark" ? T : P)),
        (l.$$.dirty[0] & 4) | (l.$$.dirty[6] & 24576) &&
          t(104, (X = Ee === "dark" ? D : z)),
        (l.$$.dirty[0] & 4) | (l.$$.dirty[6] & 6144) &&
          t(103, (ae = Ee === "dark" ? N : F)),
        l.$$.dirty[0] & 4 && t(102, (J = Ee === "dark" ? vg : bg)),
        l.$$.dirty[0] & 8 && t(101, (se = it.filter(El))),
        l.$$.dirty[0] & 67371008 &&
          S1 === "refer" &&
          !ct &&
          (t(26, (S1 = U.currentSettingsTab)), Ze()),
        l.$$.dirty[0] & 67371008 && S1 === "refer" && ct && In(),
        l.$$.dirty[0] & 256 && t(99, (te = o1)),
        l.$$.dirty[0] & 1048576 && (ht || (tl = !1)),
        l.$$.dirty[0] & 939524096 &&
          t(
            100,
            (ge = wp({
              animationsEnabled: y0,
              animationDirection: A0,
              randomRevealStyle: M0,
            })),
          ),
        (l.$$.dirty[0] & 16777344) | (l.$$.dirty[1] & 3) &&
          t(35, ($ = to(d, w, Xe, Ft))),
        l.$$.dirty[1] & 16 &&
          typeof document < "u" &&
          document.documentElement.style.setProperty(
            "--texture-opacity",
            $.toString(),
          ),
        (l.$$.dirty[0] & 1073741824) | (l.$$.dirty[6] & 67108864) &&
          t(
            33,
            (he =
              k1 !== "never" &&
              Re.onBattery &&
              (k1 === "always" ||
                (k1 === "below50" && Re.percent !== 255 && Re.percent <= 50) ||
                (k1 === "below30" && Re.percent !== 255 && Re.percent <= 30))),
          ),
        (l.$$.dirty[0] & 790768) | (l.$$.dirty[1] & 4) &&
          typeof localStorage < "u")
      ) {
        const H =
          !gt &&
          !nt &&
          !Et &&
          Rt &&
          !he &&
          (ct || (Xe === "windows" && At < X1));
        (localStorage.setItem("paperman-overlay-active", String(H)),
          ue("set_overlay_active", { active: H }).catch(() => {}));
      }
      ((l.$$.dirty[1] & 4) | (l.$$.dirty[6] & 256) &&
        (he && !nl
          ? ft("Paperman paused — on battery")
          : !he && nl && (ft("Paperman resumed"), O1()),
        t(194, (nl = he))),
        l.$$.dirty[0] & 7340032 && (ht || le || Pe) && z1(!1),
        l.$$.dirty[0] & 3584 && wl(),
        (l.$$.dirty[0] & 8388608) | (l.$$.dirty[6] & 128) &&
          (!V1 || !w0) &&
          t(25, (v1 = null)),
        l.$$.dirty[0] & 33554432 && v1 && z1(!1));
    }),
    t(196, (p = s1("classic-matte"))),
    [
      de,
      Ce,
      Ee,
      it,
      gt,
      nt,
      Et,
      Xe,
      o1,
      Ut,
      f1,
      Bt,
      Rt,
      Vt,
      St,
      bt,
      vt,
      kt,
      ct,
      At,
      ht,
      le,
      Pe,
      V1,
      Ft,
      v1,
      S1,
      y0,
      A0,
      M0,
      k1,
      d,
      w,
      he,
      m,
      $,
      g,
      wt,
      Pt,
      Lt,
      Gt,
      Yt,
      tt,
      Wt,
      u1,
      ie,
      ye,
      Qt,
      Zt,
      xt,
      $t,
      _t,
      d1,
      ut,
      me,
      We,
      Tt,
      Dt,
      s0,
      jl,
      Xl,
      ll,
      k0,
      A1,
      c0,
      u0,
      R1,
      M1,
      Gl,
      f0,
      Y1,
      Q1,
      K1,
      Kt,
      Yl,
      Ql,
      Yn,
      Jl,
      t1,
      l1,
      N1,
      F0,
      n1,
      i1,
      U1,
      W0,
      qt,
      J1,
      x1,
      $1,
      e0,
      t0,
      l0,
      d0,
      h0,
      n0,
      I1,
      i,
      s,
      te,
      ge,
      se,
      J,
      ae,
      X,
      Q,
      ne,
      M,
      f,
      pe,
      De,
      je,
      Ct,
      pt,
      In,
      Bn,
      go,
      v0,
      jn,
      bo,
      Xn,
      Gn,
      ko,
      wo,
      yo,
      Ao,
      Mo,
      Zo,
      Ho,
      Co,
      Lo,
      ei,
      _l,
      P1,
      R0,
      Oo,
      ft,
      ni,
      To,
      Eo,
      an,
      Do,
      Fo,
      N0,
      i0,
      B1,
      T1,
      Wo,
      Ro,
      H0,
      Uo,
      Io,
      U0,
      si,
      Bo,
      qo,
      jo,
      Go,
      rn,
      ui,
      fi,
      on,
      Jo,
      xo,
      $o,
      kl,
      e2,
      I0,
      t2,
      l2,
      yl,
      n2,
      i2,
      Ze,
      G,
      _e,
      He,
      be,
      fe,
      ke,
      we,
      Oe,
      qe,
      Le,
      Ve,
      Te,
      ot,
      Ke,
      x,
      lt,
      Ne,
      Y,
      rt,
      w0,
      nl,
      c,
      p,
      F,
      N,
      z,
      D,
      P,
      T,
      S,
      O,
      E,
      L,
      a,
      r,
      n,
      k,
      u,
      Re,
      r2,
      o2,
      s2,
      c2,
      u2,
      f2,
      d2,
      h2,
      m2,
      p2,
      g2,
      _2,
      b2,
      v2,
      k2,
      w2,
      y2,
      A2,
      M2,
      Z2,
      H2,
      C2,
      L2,
      V2,
      S2,
      z2,
      P2,
      O2,
      T2,
      E2,
      D2,
      F2,
      W2,
      R2,
      K2,
      N2,
      U2,
      I2,
      B2,
      q2,
      j2,
      X2,
      G2,
      Y2,
      Q2,
      J2,
      x2,
      $2,
      es,
      ts,
      ls,
      ns,
      is,
      as,
      rs,
      os,
      ss,
      cs,
      us,
      fs,
      ds,
      hs,
      ms,
      ps,
      gs,
      _s,
      bs,
      vs,
      ks,
      ws,
      ys,
      As,
      Ms,
      Zs,
      Hs,
      Cs,
      Ls,
      Vs,
      Ss,
      zs,
      Ps,
      Os,
      Ts,
      Es,
      Ds,
      Fs,
      Ws,
      Rs,
      Ks,
      Ns,
      Us,
      Is,
      Bs,
      qs,
      js,
      Xs,
      Gs,
      Ys,
      Qs,
      Js,
      xs,
      $s,
      ec,
      tc,
      lc,
      nc,
      ic,
      ac,
      rc,
      oc,
      sc,
      cc,
      uc,
      fc,
      dc,
      hc,
      mc,
      pc,
      gc,
      _c,
      bc,
      vc,
      kc,
      wc,
      yc,
      Ac,
      Mc,
      Zc,
      Hc,
      Cc,
      Lc,
    ]
  );
}
class wg extends Me {
  constructor(e) {
    (super(),
      Ae(
        this,
        e,
        kg,
        _g,
        ve,
        {},
        null,
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      ));
  }
}
function wr(l) {
  let e, t, n, a;
  return (
    (e = new fo({
      props: {
        activeTexture: l[2],
        currentTheme: l[0],
        animationsEnabled: l[3],
        animationDirection: l[4],
        randomRevealStyle: l[5],
        displayOpacity: l[1],
      },
    })),
    (n = new po({
      props: {
        isActive: l[6],
        revealAnimating: l[3],
        deskLampEnabled: l[13],
        deskLampPosition: l[7],
        deskLampWarmth: l[8],
        deskLampSpread: l[9],
        deskLampDimming: l[10],
        deskLampAnimateEnter: l[11],
        deskLampPresetChangeToken: l[12],
      },
    })),
    {
      c() {
        (j(e.$$.fragment), (t = Z()), j(n.$$.fragment));
      },
      m(u, r) {
        (B(e, u, r), b(u, t, r), B(n, u, r), (a = !0));
      },
      p(u, r) {
        const p = {};
        (r[0] & 4 && (p.activeTexture = u[2]),
          r[0] & 1 && (p.currentTheme = u[0]),
          r[0] & 8 && (p.animationsEnabled = u[3]),
          r[0] & 16 && (p.animationDirection = u[4]),
          r[0] & 32 && (p.randomRevealStyle = u[5]),
          r[0] & 2 && (p.displayOpacity = u[1]),
          e.$set(p));
        const d = {};
        (r[0] & 64 && (d.isActive = u[6]),
          r[0] & 8 && (d.revealAnimating = u[3]),
          r[0] & 8192 && (d.deskLampEnabled = u[13]),
          r[0] & 128 && (d.deskLampPosition = u[7]),
          r[0] & 256 && (d.deskLampWarmth = u[8]),
          r[0] & 512 && (d.deskLampSpread = u[9]),
          r[0] & 1024 && (d.deskLampDimming = u[10]),
          r[0] & 2048 && (d.deskLampAnimateEnter = u[11]),
          r[0] & 4096 && (d.deskLampPresetChangeToken = u[12]),
          n.$set(d));
      },
      i(u) {
        a || (C(e.$$.fragment, u), C(n.$$.fragment, u), (a = !0));
      },
      o(u) {
        (V(e.$$.fragment, u), V(n.$$.fragment, u), (a = !1));
      },
      d(u) {
        (u && _(t), q(e, u), q(n, u));
      },
    }
  );
}
function yg(l) {
  let e,
    t,
    n = l[6] && wr(l);
  return {
    c() {
      (n && n.c(), (e = c1()));
    },
    m(a, u) {
      (n && n.m(a, u), b(a, e, u), (t = !0));
    },
    p(a, u) {
      a[6]
        ? n
          ? (n.p(a, u), u[0] & 64 && C(n, 1))
          : ((n = wr(a)), n.c(), C(n, 1), n.m(e.parentNode, e))
        : n &&
          (Ie(),
          V(n, 1, 1, () => {
            n = null;
          }),
          Be());
    },
    i(a) {
      t || (C(n), (t = !0));
    },
    o(a) {
      (V(n), (t = !1));
    },
    d(a) {
      (a && _(e), n && n.d(a));
    },
  };
}
function Ag(l, e, t) {
  let n,
    a,
    u,
    r,
    p,
    d,
    c,
    g,
    m,
    i,
    s = 0.2,
    w = 0.7,
    k = 0.6,
    f = 0.4,
    M = 0.1,
    S = 0.2,
    O = 0.5,
    P = 0.34,
    T = 0.32,
    L = 0.2,
    z = 0.7,
    F = 0.6,
    E = 0.35,
    D = 0.1,
    N = 0.16,
    ne = 0.25,
    Q = 0.28,
    X = 0.25,
    ae = s1("whisper-weave"),
    J = s1("classic-matte"),
    se = "light",
    te = "",
    ge = !1,
    $ = !0,
    he = no,
    Re = uo,
    pe = !1,
    G = Ht.enabled,
    _e = Ht.darkOnly,
    He = Ht.position,
    be = Ht.warmth,
    fe = Ht.spread,
    ke = Ht.dimming,
    we = Ht.animateEnter,
    Oe = 0,
    qe,
    Le,
    Ve;
  function Te(x) {
    (t(
      14,
      ({
        lightClassicMatteOpacity: s,
        lightWhisperWeaveOpacity: w,
        lightSunbakedParchmentOpacity: k,
        lightSaddleLinenOpacity: f,
        lightPainterPressOpacity: M,
        lightMulberryVeilOpacity: S,
        lightVellumMistOpacity: O,
        lightMonasticFeltOpacity: P,
        lightCarbonLedgerOpacity: T,
        darkClassicMatteOpacity: L,
        darkWhisperWeaveOpacity: z,
        darkSunbakedParchmentOpacity: F,
        darkSaddleLinenOpacity: E,
        darkPainterPressOpacity: D,
        darkMulberryVeilOpacity: N,
        darkVellumMistOpacity: ne,
        darkMonasticFeltOpacity: Q,
        darkCarbonLedgerOpacity: X,
        lightTexture: ae,
        darkTexture: J,
      } = lo(x, te)),
      s,
      t(15, w),
      t(16, k),
      t(17, f),
      t(18, M),
      t(19, S),
      t(20, O),
      t(21, P),
      t(22, T),
      t(23, L),
      t(24, z),
      t(25, F),
      t(26, E),
      t(27, D),
      t(28, N),
      t(29, ne),
      t(30, Q),
      t(31, X),
      t(32, ae),
      t(33, J),
    ),
      typeof x.currentTheme == "string" && t(0, (se = x.currentTheme)),
      t(3, ($ = x.animationsEnabled ?? $)),
      t(4, (he = Wl(x.animationDirection ?? he))),
      t(5, (Re = Rl(x.randomRevealStyle ?? Re))),
      t(36, (G = x.deskLampEnabled ?? G)),
      t(37, (_e = x.deskLampDarkOnly ?? _e)),
      t(7, (He = x.deskLampPosition ?? He)),
      t(8, (be = x.deskLampWarmth ?? be)),
      t(9, (fe = x.deskLampSpread ?? fe)),
      t(10, (ke = x.deskLampDimming ?? ke)),
      t(11, (we = x.deskLampAnimateEnter ?? we)),
      t(12, (Oe = x.deskLampPresetChangeToken ?? Oe)));
  }
  function ot() {
    try {
      const x = localStorage.getItem("paperman-settings");
      x && Te(JSON.parse(x));
    } catch {}
  }
  function Ke(x) {
    if (x.key === "paperman-settings" && x.newValue)
      try {
        Te(JSON.parse(x.newValue));
      } catch {}
    x.key === "paperman-overlay-active" && t(6, (pe = x.newValue === "true"));
  }
  return (
    b0(async () => {
      try {
        (t(34, (te = await ue("get_platform"))),
          document.documentElement.setAttribute("data-platform", te));
      } catch {}
      if ((ot(), window.addEventListener("storage", Ke), te === "windows"))
        try {
          t(35, (ge = await ue("check_license_smart_command")));
        } catch {}
      try {
        t(6, (pe = await ue("get_overlay_active")));
      } catch {}
      try {
        const x = await ue("get_current_settings");
        x && Te(x);
      } catch {}
      try {
        qe = await C1("paperman-overlay-active", (x) => {
          t(6, (pe = x.payload));
        });
      } catch {}
      try {
        Le = await C1("paperman-settings-changed", (x) => {
          Te(x.payload);
        });
      } catch {}
      try {
        await ue("set_click_through", { enabled: !0 });
      } catch {}
      try {
        await ue("set_always_on_top", { enabled: !0 });
      } catch {}
      try {
        await ue("fix_mac_transparency");
      } catch {}
      ((Ve = async () => {
        if (document.visibilityState === "visible") {
          try {
            await ue("set_always_on_top", { enabled: !0 });
          } catch {}
          try {
            await ue("fix_mac_transparency");
          } catch {}
          try {
            await ue("set_click_through", { enabled: !0 });
          } catch {}
        }
      }),
        document.addEventListener("visibilitychange", Ve));
    }),
    Ul(() => {
      (window.removeEventListener("storage", Ke),
        qe == null || qe(),
        Le == null || Le(),
        Ve && document.removeEventListener("visibilitychange", Ve));
    }),
    (l.$$.update = () => {
      (l.$$.dirty[1] & 2 && t(43, (n = s1(ae))),
        l.$$.dirty[1] & 4 && t(44, (a = s1(J))),
        (l.$$.dirty[0] & 1) | (l.$$.dirty[1] & 12288) &&
          t(40, (u = se === "dark" ? a : n)),
        l.$$.dirty[1] & 24 && t(41, (r = te === "windows" && !ge)),
        l.$$.dirty[1] & 24 && t(42, (p = te === "windows" && !ge)),
        (l.$$.dirty[0] & 1) | (l.$$.dirty[1] & 2144) &&
          t(
            13,
            (d = mo(
              { enabled: G, darkOnly: _e },
              { locked: p, currentTheme: se },
            )),
          ),
        l.$$.dirty[1] & 1664 && t(2, (g = r && u !== c ? c : u)),
        (l.$$.dirty[0] & 2147467269) | (l.$$.dirty[1] & 1) &&
          t(
            39,
            (m =
              se === "dark"
                ? g === "whisper-weave"
                  ? z
                  : g === "sunbaked-parchment"
                    ? F
                    : g === "saddle-linen"
                      ? E
                      : g === "painter-press"
                        ? D
                        : g === "mulberry-veil"
                          ? N
                          : g === "vellum-mist"
                            ? ne
                            : g === "monastic-felt"
                              ? Q
                              : g === "carbon-ledger"
                                ? X
                                : L
                : g === "whisper-weave"
                  ? w
                  : g === "sunbaked-parchment"
                    ? k
                    : g === "saddle-linen"
                      ? f
                      : g === "painter-press"
                        ? M
                        : g === "mulberry-veil"
                          ? S
                          : g === "vellum-mist"
                            ? O
                            : g === "monastic-felt"
                              ? P
                              : g === "carbon-ledger"
                                ? T
                                : s),
          ),
        (l.$$.dirty[0] & 5) | (l.$$.dirty[1] & 264) &&
          t(1, (i = to(g, m, te, se))),
        l.$$.dirty[0] & 2 &&
          document.documentElement.style.setProperty(
            "--texture-opacity",
            String(i),
          ));
    }),
    t(38, (c = s1("classic-matte"))),
    [
      se,
      i,
      g,
      $,
      he,
      Re,
      pe,
      He,
      be,
      fe,
      ke,
      we,
      Oe,
      d,
      s,
      w,
      k,
      f,
      M,
      S,
      O,
      P,
      T,
      L,
      z,
      F,
      E,
      D,
      N,
      ne,
      Q,
      X,
      ae,
      J,
      te,
      ge,
      G,
      _e,
      c,
      m,
      u,
      r,
      p,
      n,
      a,
    ]
  );
}
class Mg extends Me {
  constructor(e) {
    (super(), Ae(this, e, Ag, yg, ve, {}, null, [-1, -1]));
  }
}
const Zg = new URLSearchParams(window.location.search).get("mode"),
  Hg = Zg === "overlay" ? Mg : wg;
new Hg({ target: document.getElementById("app") });
