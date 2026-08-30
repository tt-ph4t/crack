const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../chunks/CG_8iP63.js",
      "../chunks/7ol_VW9s.js",
      "../chunks/_GAXbv_D.js",
      "../chunks/DaUwuU3_.js",
    ]),
) => i.map((i) => d[i]);
import { invoke as pt } from "../chunks/7ol_VW9s.js";
import { g as gt } from "../chunks/_nf8ct5q.js";
import { p as u } from "../chunks/B5V8Zx5R.js";
import { i as st } from "../chunks/BCckag03.js";
import { f as vt } from "../chunks/BGie5nsa.js";
import { f as d } from "../chunks/BiPJWrah.js";
import { e as He, a as Ve, i as ze } from "../chunks/BY1_Qz1i.js";
import { s as rt } from "../chunks/ChCTrGLB.js";
import { o as G, w as Q, c as re, a as te } from "../chunks/CoIjocXH.js";
import { b as g, _ as m } from "../chunks/CPEzg5DG.js";
import {
  g as at,
  h as ct,
  k as dt,
  X as lt,
  C as ot,
  b as ut,
} from "../chunks/D0C8T787.js";
import { r as A, a as C, d as M } from "../chunks/D2lMCD-f.js";
import {
  p as Ge,
  b as Je,
  s as Ke,
  l as Xe,
  a as Ye,
} from "../chunks/DjQOSlIw.js";
import { i as Qe, d as tt, t as Ze } from "../chunks/DQ6Vrfks.js";
import { l as ft } from "../chunks/DR3Xu7Cb.js";
import { I as je, s as Ne } from "../chunks/Ds8f1-XV.js";
import { c as nt } from "../chunks/GH0SP5Vr.js";
import { i as h, c as v } from "../chunks/Pbi5YRdk.js";
import { f as $, c as b, t as F, a as k, e as S } from "../chunks/QV5tk4KD.js";
import { S as We } from "../chunks/RQwhyxuE.js";
import { b as ht } from "../chunks/tbclA83P.js";
import {
  t as $e,
  r as _e,
  Y as Ae,
  s as be,
  p as ce,
  m as Ce,
  b as Ee,
  a as Fe,
  u as ge,
  X as Ie,
  c as pe,
  n as qe,
  f as se,
  g as ue,
  Z as ve,
} from "../chunks/TzQjjcCr.js";
function isBrowser() {
  return "undefined" != typeof window;
}
function detectEnvironment() {
  try {
  } catch {}
  return "production";
}
function isDevelopment() {
  return (
    "development" ===
    (function () {
      return (isBrowser() ? window.vam : detectEnvironment()) || "production";
    })()
  );
}
function getScriptSrc(u) {
  return u.scriptSrc
    ? makeAbsolute(u.scriptSrc)
    : isDevelopment()
      ? "https://va.vercel-scripts.com/v1/script.debug.js"
      : u.basePath
        ? makeAbsolute(`${u.basePath}/insights/script.js`)
        : "/_vercel/insights/script.js";
}
function loadProps(u, d) {
  var h;
  let v = u;
  if (d)
    try {
      v = { ...(null == (h = JSON.parse(d)) ? void 0 : h.analytics), ...u };
    } catch {}
  !(function (u = "auto") {
    window.vam = "auto" !== u ? u : detectEnvironment();
  })(v.mode);
  const g = {
    sdkn: "@vercel/analytics" + (v.framework ? `/${v.framework}` : ""),
    sdkv: "2.0.1",
  };
  return (
    v.disableAutoTrack && (g.disableAutoTrack = "1"),
    v.viewEndpoint && (g.viewEndpoint = makeAbsolute(v.viewEndpoint)),
    v.eventEndpoint && (g.eventEndpoint = makeAbsolute(v.eventEndpoint)),
    v.sessionEndpoint && (g.sessionEndpoint = makeAbsolute(v.sessionEndpoint)),
    isDevelopment() && !1 === v.debug && (g.debug = "false"),
    v.dsn && (g.dsn = v.dsn),
    v.endpoint
      ? (g.endpoint = v.endpoint)
      : v.basePath && (g.endpoint = makeAbsolute(`${v.basePath}/insights`)),
    { beforeSend: v.beforeSend, src: getScriptSrc(v), dataset: g }
  );
}
function makeAbsolute(u) {
  return u.startsWith("http://") ||
    u.startsWith("https://") ||
    u.startsWith("/")
    ? u
    : `/${u}`;
}
function inject(u = { debug: !0 }, d) {
  var h;
  if (!isBrowser()) return;
  const { beforeSend: v, src: g, dataset: m } = loadProps(u, d);
  if (
    ((() => {
      window.va ||
        (window.va = function (...u) {
          (window.vaq || (window.vaq = []), window.vaq.push(u));
        });
    })(),
    v && (null == (h = window.va) || h.call(window, "beforeSend", v)),
    document.head.querySelector(`script[src*="${g}"]`))
  )
    return;
  const b = document.createElement("script");
  b.src = g;
  for (const [k, S] of Object.entries(m)) b.dataset[k] = S;
  ((b.defer = !0),
    (b.onerror = () => {
      isDevelopment();
    }),
    document.head.appendChild(b));
}
function getBasePath() {
  try {
    return;
  } catch {}
}
var _t = "undefined" != typeof window ? window : void 0,
  mt = "undefined" != typeof globalThis ? globalThis : _t;
("undefined" == typeof self && (mt.self = mt),
  "undefined" == typeof File && (mt.File = function () {}));
var yt = null == mt ? void 0 : mt.navigator,
  bt = null == mt ? void 0 : mt.document,
  wt = null == mt ? void 0 : mt.location,
  xt = null == mt ? void 0 : mt.fetch,
  kt =
    null != mt &&
    mt.XMLHttpRequest &&
    "withCredentials" in new mt.XMLHttpRequest()
      ? mt.XMLHttpRequest
      : void 0,
  Et = null == mt ? void 0 : mt.AbortController,
  Pt = null == mt ? void 0 : mt.CompressionStream,
  St = null == yt ? void 0 : yt.userAgent,
  $t = null != _t ? _t : {},
  Ft = "1.376.0",
  Ct = { DEBUG: !1, LIB_VERSION: Ft, LIB_NAME: "web", JS_SDK_VERSION: Ft };
function c(u, d, h, v, g, m, b) {
  try {
    var k = u[m](b),
      S = k.value;
  } catch (u) {
    return void h(u);
  }
  k.done ? d(S) : Promise.resolve(S).then(v, g);
}
function p(u) {
  return function () {
    var d = this,
      h = arguments;
    return new Promise(function (v, g) {
      var m = u.apply(d, h);
      function o(u) {
        c(m, v, g, o, a, "next", u);
      }
      function a(u) {
        c(m, v, g, o, a, "throw", u);
      }
      o(void 0);
    });
  };
}
function f() {
  return (
    (f = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var d = 1; arguments.length > d; d++) {
            var h = arguments[d];
            for (var v in h) ({}).hasOwnProperty.call(h, v) && (u[v] = h[v]);
          }
          return u;
        }),
    f.apply(null, arguments)
  );
}
function _(u, d) {
  if (null == u) return {};
  var h = {};
  for (var v in u)
    if ({}.hasOwnProperty.call(u, v)) {
      if (-1 !== d.indexOf(v)) continue;
      h[v] = u[v];
    }
  return h;
}
var Mt,
  It = (function (u) {
    return ((u.GZipJS = "gzip-js"), (u.Base64 = "base64"), u);
  })({}),
  Rt = [
    "$snapshot",
    "$pageview",
    "$pageleave",
    "$set",
    "survey dismissed",
    "survey sent",
    "survey shown",
    "$identify",
    "$groupidentify",
    "$create_alias",
    "$$client_ingestion_warning",
    "$web_experiment_applied",
    "$feature_enrollment_update",
    "$feature_flag_called",
  ],
  Tt = "NativeGzipValidationError",
  w = (u) => u.length >= 2 && 31 === u[0] && 139 === u[1],
  x = (u) =>
    !(!u || "object" != typeof u) &&
    "NotReadableError" === ("name" in u ? String(u.name) : ""),
  E = (u) => {
    var d = new Error("Native gzip produced invalid output: " + u);
    throw ((d.name = Tt), d);
  },
  Ot = (function () {
    var u = p(function* (u, d) {
      18 > u.size && E("too-short");
      var h = new Uint8Array(yield u.slice(0, 10).arrayBuffer());
      (w(h) && 8 === h[2]) || E("invalid-header");
      var v = new DataView(yield u.slice(u.size - 8).arrayBuffer());
      v.getUint32(0, !0) !==
        ((u) => {
          for (
            var d = (() => {
                if (Mt) return Mt;
                Mt = [];
                for (var u = 0; 256 > u; u++) {
                  for (var d = u, h = 0; 8 > h; h++)
                    d = 1 & d ? 3988292384 ^ (d >>> 1) : d >>> 1;
                  Mt[u] = d >>> 0;
                }
                return Mt;
              })(),
              h = 4294967295,
              v = 0;
            u.length > v;
            v++
          )
            h = d[255 & (h ^ u[v])] ^ (h >>> 8);
          return (4294967295 ^ h) >>> 0;
        })(d) && E("invalid-crc");
      var g = d.length >>> 0;
      v.getUint32(4, !0) !== g && E("invalid-size");
    });
    return function (d, h) {
      return u.apply(this, arguments);
    };
  })();
function T() {
  return (
    (T = p(function* (u, d, h) {
      void 0 === d && (d = !0);
      try {
        var v = new TextEncoder().encode(u),
          g = new CompressionStream("gzip"),
          m = g.writable.getWriter(),
          b = m
            .write(v)
            .then(() => m.close())
            .catch(
              (function () {
                var u = p(function* (u) {
                  try {
                    yield m.abort(u);
                  } catch (u) {}
                  throw u;
                });
                return function (d) {
                  return u.apply(this, arguments);
                };
              })(),
            ),
          k = new Response(g.readable).blob(),
          [S] = yield Promise.all([k, b]);
        return (yield Ot(S, v), S);
      } catch (u) {
        if (null != h && h.rethrow) throw u;
        return null;
      }
    })),
    T.apply(this, arguments)
  );
}
var At = [
    "amazonbot",
    "amazonproductbot",
    "app.hypefactors.com",
    "applebot",
    "archive.org_bot",
    "awariobot",
    "backlinksextendedbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "dataforseobot",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "leikibot",
    "linkedinbot",
    "meta-externalagent",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterest",
    "prerender",
    "rogerbot",
    "screaming frog",
    "sebot-wa",
    "sitebulb",
    "slackbot",
    "slurp",
    "trendictionbot",
    "turnitin",
    "twitterbot",
    "vercel-screenshot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "zoombot",
    "bot.htm",
    "bot.php",
    "(bot;",
    "bot/",
    "crawler",
    "ahrefsbot",
    "ahrefssiteaudit",
    "semrushbot",
    "siteauditbot",
    "splitsignalbot",
    "gptbot",
    "oai-searchbot",
    "chatgpt-user",
    "perplexitybot",
    "better uptime bot",
    "sentryuptimebot",
    "uptimerobot",
    "headlesschrome",
    "cypress",
    "google-hoteladsverifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleother",
    "google-cloudvertexbot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "google-inspectiontool",
    "bytespider",
  ],
  R = function (u, d) {
    if ((void 0 === d && (d = []), !u)) return !1;
    var h = u.toLowerCase();
    return At.concat(d).some((u) => {
      var d = u.toLowerCase();
      return -1 !== h.indexOf(d);
    });
  };
function P(u, d) {
  return -1 !== u.indexOf(d);
}
var O = function (u) {
    return u.trim();
  },
  I = function (u) {
    return u.replace(/^\$/, "");
  },
  Lt = Object.prototype,
  qt = Lt.hasOwnProperty,
  Dt = Lt.toString,
  jt =
    Array.isArray ||
    function (u) {
      return "[object Array]" === Dt.call(u);
    },
  D = (u) => "function" == typeof u,
  U = (u) => u === Object(u) && !jt(u),
  L = (u) => {
    if (U(u)) {
      for (var d in u) if (qt.call(u, d)) return !1;
      return !0;
    }
    return !1;
  },
  N = (u) => void 0 === u,
  j = (u) => "[object String]" == Dt.call(u),
  z = (u) => j(u) && 0 === u.trim().length,
  B = (u) => null === u,
  H = (u) => N(u) || B(u),
  q = (u) => "[object Number]" == Dt.call(u) && u == u,
  V = (u) => q(u) && u > 0,
  W = (u) => "[object Boolean]" === Dt.call(u),
  Y = (u) => P(Rt, u);
function J(u) {
  return null === u || "object" != typeof u;
}
function K(u, d) {
  return {}.toString.call(u) === "[object " + d + "]";
}
function X(u) {
  return (
    "undefined" != typeof Event &&
    (function (u, d) {
      try {
        return u instanceof d;
      } catch (u) {
        return !1;
      }
    })(u, Event)
  );
}
var Nt = [!0, "true", 1, "1", "yes"],
  Z = (u) => P(Nt, u),
  Ut = [!1, "false", 0, "0", "no"];
function et(u, d, h, v, g) {
  return (
    d > h && (v.warn("min cannot be greater than max."), (d = h)),
    q(u)
      ? u > h
        ? (v.warn(
            " cannot be  greater than max: " + h + ". Using max value instead.",
          ),
          h)
        : d > u
          ? (v.warn(
              " cannot be less than min: " + d + ". Using min value instead.",
            ),
            d)
          : u
      : (v.warn(
          " must be a number. using max or fallback. max: " +
            h +
            ", fallback: " +
            g,
        ),
        et(g || h, d, h, v))
  );
}
class it {
  constructor(u) {
    ((this.$t = {}),
      (this.zt = u.zt),
      (this.Zt = et(u.bucketSize, 0, 100, u.Gt)),
      (this.Qt = et(u.refillRate, 0, this.Zt, u.Gt)),
      (this.Jt = et(u.refillInterval, 0, 864e5, u.Gt)));
  }
  Kt(u, d) {
    var h = Math.floor((d - u.lastAccess) / this.Jt);
    h > 0 &&
      ((u.tokens = Math.min(u.tokens + h * this.Qt, this.Zt)),
      (u.lastAccess = u.lastAccess + h * this.Jt));
  }
  consumeRateLimit(u) {
    var d,
      h = Date.now(),
      v = String(u),
      g = this.$t[v];
    return (
      g ? this.Kt(g, h) : (this.$t[v] = g = { tokens: this.Zt, lastAccess: h }),
      0 === g.tokens ||
        (g.tokens--,
        0 === g.tokens && (null == (d = this.zt) || d.call(this, u)),
        0 === g.tokens)
    );
  }
  stop() {
    this.$t = {};
  }
}
var zt,
  Ht,
  Bt,
  Vt = "Mobile",
  Wt = "iOS",
  Kt = "Android",
  Gt = "Tablet",
  Yt = Kt + " " + Gt,
  Jt = "iPad",
  Qt = "Apple",
  ei = Qt + " Watch",
  ti = "Safari",
  ii = "BlackBerry",
  ri = "Samsung",
  si = ri + "Browser",
  ni = ri + " Internet",
  oi = "Chrome",
  ai = oi + " OS",
  li = oi + " " + Wt,
  ci = "Internet Explorer",
  ui = ci + " " + Vt,
  di = "Opera",
  hi = di + " Mini",
  pi = "Edge",
  vi = "Microsoft " + pi,
  gi = "Firefox",
  fi = gi + " " + Wt,
  _i = "Nintendo",
  mi = "PlayStation",
  yi = "Xbox",
  bi = Kt + " " + Vt,
  wi = Vt + " " + ti,
  xi = "Windows",
  ki = xi + " Phone",
  Ei = "Nokia",
  Pi = "Ouya",
  Si = "Generic",
  $i = Si + " " + Vt.toLowerCase(),
  Fi = Si + " " + Gt.toLowerCase(),
  Ci = "Konqueror",
  Mi = "Oculus Browser",
  Ii = "(\\d+(\\.\\d+)?)",
  Ri = new RegExp("Version/" + Ii),
  Ti = new RegExp(yi, "i"),
  Oi = new RegExp(mi + " \\w+", "i"),
  Ai = new RegExp(_i + " \\w+", "i"),
  Li = new RegExp(ii + "|PlayBook|BB10", "i"),
  qi = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    5.1: "XP",
    5.2: "XP",
    "6.0": "Vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    6.4: "10",
    "10.0": "10",
  },
  Xt = function (u, d) {
    return (
      (d = d || ""),
      P(u, " OPR/") && P(u, "Mini")
        ? hi
        : P(u, " OPR/")
          ? di
          : Li.test(u)
            ? ii
            : P(u, "IE" + Vt) || P(u, "WPDesktop")
              ? ui
              : P(u, "OculusBrowser")
                ? Mi
                : P(u, si)
                  ? ni
                  : P(u, pi) || P(u, "Edg/")
                    ? vi
                    : P(u, "FBIOS")
                      ? "Facebook " + Vt
                      : P(u, "UCWEB") || P(u, "UCBrowser")
                        ? "UC Browser"
                        : P(u, "CriOS")
                          ? li
                          : P(u, "CrMo") || P(u, oi)
                            ? oi
                            : P(u, Kt) && P(u, ti)
                              ? bi
                              : P(u, "FxiOS")
                                ? fi
                                : P(u.toLowerCase(), Ci.toLowerCase())
                                  ? Ci
                                  : ((u, d) =>
                                        (d && P(d, Qt)) ||
                                        (function (u) {
                                          return (
                                            P(u, ti) && !P(u, oi) && !P(u, Kt)
                                          );
                                        })(u))(u, d)
                                    ? P(u, Vt)
                                      ? wi
                                      : ti
                                    : P(u, gi)
                                      ? gi
                                      : P(u, "MSIE") || P(u, "Trident/")
                                        ? ci
                                        : P(u, "Gecko")
                                          ? gi
                                          : ""
    );
  },
  Di = {
    [ui]: [new RegExp("rv:" + Ii)],
    [vi]: [new RegExp(pi + "?\\/" + Ii)],
    [oi]: [new RegExp("(" + oi + "|CrMo)\\/" + Ii)],
    [li]: [new RegExp("CriOS\\/" + Ii)],
    "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + Ii)],
    [ti]: [Ri],
    [wi]: [Ri],
    [di]: [new RegExp("(Opera|OPR)\\/" + Ii)],
    [gi]: [new RegExp(gi + "\\/" + Ii)],
    [fi]: [new RegExp("FxiOS\\/" + Ii)],
    [Ci]: [new RegExp("Konqueror[:/]?" + Ii, "i")],
    [ii]: [new RegExp(ii + " " + Ii), Ri],
    [bi]: [new RegExp("android\\s" + Ii, "i")],
    [ni]: [new RegExp(si + "\\/" + Ii)],
    [Mi]: [new RegExp("OculusBrowser\\/" + Ii)],
    [ci]: [new RegExp("(rv:|MSIE )" + Ii)],
    Mozilla: [new RegExp("rv:" + Ii)],
  },
  Zt = function (u, d) {
    var h = Xt(u, d),
      v = Di[h];
    if (N(v)) return null;
    for (var g = 0; v.length > g; g++) {
      var m = u.match(v[g]);
      if (m) return parseFloat(m[m.length - 2]);
    }
    return null;
  },
  ji = [
    [
      new RegExp(yi + "; " + yi + " (.*?)[);]", "i"),
      (u) => [yi, (u && u[1]) || ""],
    ],
    [new RegExp(_i, "i"), [_i, ""]],
    [new RegExp(mi, "i"), [mi, ""]],
    [Li, [ii, ""]],
    [
      new RegExp(xi, "i"),
      (u, d) => {
        if (/Phone/.test(d) || /WPDesktop/.test(d)) return [ki, ""];
        if (new RegExp(Vt).test(d) && !/IEMobile\b/.test(d))
          return [xi + " " + Vt, ""];
        var h = /Windows NT ([0-9.]+)/i.exec(d);
        if (h && h[1]) {
          var v = qi[h[1]] || "";
          return (/arm/i.test(d) && (v = "RT"), [xi, v]);
        }
        return [xi, ""];
      },
    ],
    [
      /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
      (u) => (u && u[3] ? [Wt, [u[3], u[4], u[5] || "0"].join(".")] : [Wt, ""]),
    ],
    [
      /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
      (u) => {
        var d = "";
        return (
          u && u.length >= 3 && (d = N(u[2]) ? u[3] : u[2]),
          ["watchOS", d]
        );
      },
    ],
    [
      new RegExp("(" + Kt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + Kt + ")", "i"),
      (u) => (u && u[2] ? [Kt, [u[2], u[3], u[4] || "0"].join(".")] : [Kt, ""]),
    ],
    [
      /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
      (u) => {
        var d = ["Mac OS X", ""];
        return (u && u[1] && (d[1] = [u[1], u[2], u[3] || "0"].join(".")), d);
      },
    ],
    [/Mac/i, ["Mac OS X", ""]],
    [/CrOS/, [ai, ""]],
    [/Linux|debian/i, ["Linux", ""]],
  ],
  ee = function (u) {
    return Ai.test(u)
      ? _i
      : Oi.test(u)
        ? mi
        : Ti.test(u)
          ? yi
          : new RegExp(Pi, "i").test(u)
            ? Pi
            : new RegExp("(" + ki + "|WPDesktop)", "i").test(u)
              ? ki
              : /iPad/.test(u)
                ? Jt
                : /iPod/.test(u)
                  ? "iPod Touch"
                  : /iPhone/.test(u)
                    ? "iPhone"
                    : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(u)
                      ? ei
                      : Li.test(u)
                        ? ii
                        : /(kobo)\s(ereader|touch)/i.test(u)
                          ? "Kobo"
                          : new RegExp(Ei, "i").test(u)
                            ? Ei
                            : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(u) ||
                                /(kf[a-z]+)( bui|\)).+silk\//i.test(u)
                              ? "Kindle Fire"
                              : /(Android|ZTE)/i.test(u)
                                ? (new RegExp(Vt).test(u) &&
                                    !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(
                                      u,
                                    )) ||
                                  (/pixel[\daxl ]{1,6}/i.test(u) &&
                                    !/pixel c/i.test(u)) ||
                                  /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(
                                    u,
                                  ) ||
                                  (/lmy47v/i.test(u) && !/QTAQZ3/i.test(u))
                                  ? Kt
                                  : Yt
                                : new RegExp("(pda|" + Vt + ")", "i").test(u)
                                  ? $i
                                  : new RegExp(Gt, "i").test(u) &&
                                      !new RegExp(Gt + " pc", "i").test(u)
                                    ? Fi
                                    : "";
  },
  ie = (u) => u instanceof Error,
  Ni = {
    trace: { text: "TRACE", number: 1 },
    debug: { text: "DEBUG", number: 5 },
    info: { text: "INFO", number: 9 },
    warn: { text: "WARN", number: 13 },
    error: { text: "ERROR", number: 17 },
    fatal: { text: "FATAL", number: 21 },
  },
  Ui = Ni.info;
function ne(u) {
  if (W(u)) return { boolValue: u };
  if ("number" == typeof u)
    return Number.isFinite(u)
      ? Number.isInteger(u)
        ? { intValue: u }
        : { doubleValue: u }
      : { stringValue: String(u) };
  if ("string" == typeof u) return { stringValue: u };
  if (jt(u)) return { arrayValue: { values: u.map((u) => ne(u)) } };
  try {
    return { stringValue: JSON.stringify(u) };
  } catch (mt) {
    return { stringValue: String(u) };
  }
}
function oe(u) {
  var d = [];
  for (var h in u) {
    var v = u[h];
    B(v) || N(v) || d.push({ key: h, value: ne(v) });
  }
  return d;
}
function ae(u) {
  var d = globalThis._posthogChunkIds;
  if (d) {
    var h = Object.keys(d);
    return (
      (Bt && h.length === Ht) ||
        ((Ht = h.length),
        (Bt = h.reduce((h, v) => {
          zt || (zt = {});
          var g = zt[v];
          if (g) h[g[0]] = g[1];
          else
            for (var m = u(v), b = m.length - 1; b >= 0; b--) {
              var k = m[b],
                S = null == k ? void 0 : k.filename,
                $ = d[v];
              if (S && $) {
                ((h[S] = $), (zt[v] = [S, $]));
                break;
              }
            }
          return h;
        }, {}))),
      Bt
    );
  }
}
class le {
  constructor(u, d, h) {
    (void 0 === h && (h = []),
      (this.coercers = u),
      (this.stackParser = d),
      (this.modifiers = h));
  }
  buildFromUnknown(u, d) {
    void 0 === d && (d = {});
    var h = (d && d.mechanism) || { handled: !0, type: "generic" },
      v = this.buildCoercingContext(h, d, 0).apply(u),
      g = this.buildParsingContext(d),
      m = this.parseStacktrace(v, g);
    return {
      $exception_list: this.convertToExceptionList(m, h),
      $exception_level: "error",
    };
  }
  modifyFrames(u) {
    var d = this;
    return p(function* () {
      for (var h of u)
        h.stacktrace &&
          h.stacktrace.frames &&
          jt(h.stacktrace.frames) &&
          (h.stacktrace.frames = yield d.applyModifiers(h.stacktrace.frames));
      return u;
    })();
  }
  coerceFallback(u) {
    var d;
    return {
      type: "Error",
      value: "Unknown error",
      stack: null == (d = u.syntheticException) ? void 0 : d.stack,
      synthetic: !0,
    };
  }
  parseStacktrace(u, d) {
    var h, v;
    return (
      null != u.cause && (h = this.parseStacktrace(u.cause, d)),
      "" != u.stack &&
        null != u.stack &&
        (v = this.applyChunkIds(
          this.stackParser(u.stack, u.synthetic ? d.skipFirstLines : 0),
          d.chunkIdMap,
        )),
      f({}, u, { cause: h, stack: v })
    );
  }
  applyChunkIds(u, d) {
    return u.map((u) => (u.filename && d && (u.chunk_id = d[u.filename]), u));
  }
  applyCoercers(u, d) {
    for (var h of this.coercers) if (h.match(u)) return h.coerce(u, d);
    return this.coerceFallback(d);
  }
  applyModifiers(u) {
    var d = this;
    return p(function* () {
      var h = u;
      for (var v of d.modifiers) h = yield v(h);
      return h;
    })();
  }
  convertToExceptionList(u, d) {
    var h,
      v,
      g,
      m = {
        type: u.type,
        value: u.value,
        mechanism: {
          type: null !== (h = d.type) && void 0 !== h ? h : "generic",
          handled: null === (v = d.handled) || void 0 === v || v,
          synthetic: null !== (g = u.synthetic) && void 0 !== g && g,
        },
      };
    u.stack && (m.stacktrace = { type: "raw", frames: u.stack });
    var b = [m];
    return (
      null != u.cause &&
        b.push(
          ...this.convertToExceptionList(u.cause, f({}, d, { handled: !0 })),
        ),
      b
    );
  }
  buildParsingContext(u) {
    var d;
    return {
      chunkIdMap: ae(this.stackParser),
      skipFirstLines: null !== (d = u.skipFirstLines) && void 0 !== d ? d : 1,
    };
  }
  buildCoercingContext(u, d, h) {
    void 0 === h && (h = 0);
    var r = (h, v) => {
      if (4 >= v) {
        var g = this.buildCoercingContext(u, d, v);
        return this.applyCoercers(h, g);
      }
    };
    return f({}, d, {
      syntheticException: 0 == h ? d.syntheticException : void 0,
      mechanism: u,
      apply: (u) => r(u, h),
      next: (u) => r(u, h + 1),
    });
  }
}
var zi = "?";
function he(u, d, h, v, g) {
  var m = {
    platform: u,
    filename: d,
    function: "<anonymous>" === h ? zi : h,
    in_app: !0,
  };
  return (N(v) || (m.lineno = v), N(g) || (m.colno = g), m);
}
var de = (u, d) => {
    var h = -1 !== u.indexOf("safari-extension"),
      v = -1 !== u.indexOf("safari-web-extension");
    return h || v
      ? [
          -1 !== u.indexOf("@") ? u.split("@")[0] : zi,
          h ? "safari-extension:" + d : "safari-web-extension:" + d,
        ]
      : [u, d];
  },
  Hi = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  Bi =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Vi = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  fe = (u, d) => {
    var h = Hi.exec(u);
    if (h) {
      var [, v, g, m] = h;
      return he(d, v, zi, +g, +m);
    }
    var b = Bi.exec(u);
    if (b) {
      if (b[2] && 0 === b[2].indexOf("eval")) {
        var k = Vi.exec(b[2]);
        k && ((b[2] = k[1]), (b[3] = k[2]), (b[4] = k[3]));
      }
      var [S, $] = de(b[1] || zi, b[2]);
      return he(d, $, S, b[3] ? +b[3] : void 0, b[4] ? +b[4] : void 0);
    }
  },
  Wi =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Gi = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  me = (u, d) => {
    var h = Wi.exec(u);
    if (h) {
      if (h[3] && h[3].indexOf(" > eval") > -1) {
        var v = Gi.exec(h[3]);
        v &&
          ((h[1] = h[1] || "eval"), (h[3] = v[1]), (h[4] = v[2]), (h[5] = ""));
      }
      var g = h[3],
        m = h[1] || zi;
      return (
        ([m, g] = de(m, g)),
        he(d, g, m, h[4] ? +h[4] : void 0, h[5] ? +h[5] : void 0)
      );
    }
  },
  Yi = /\(error: (.*)\)/;
class ye {
  match(u) {
    return this.isDOMException(u) || this.isDOMError(u);
  }
  coerce(u, d) {
    var h = j(u.stack);
    return {
      type: this.getType(u),
      value: this.getValue(u),
      stack: h ? u.stack : void 0,
      cause: u.cause ? d.next(u.cause) : void 0,
      synthetic: !1,
    };
  }
  getType(u) {
    return this.isDOMError(u) ? "DOMError" : "DOMException";
  }
  getValue(u) {
    var d = u.name || (this.isDOMError(u) ? "DOMError" : "DOMException");
    return u.message ? d + ": " + u.message : d;
  }
  isDOMException(u) {
    return K(u, "DOMException");
  }
  isDOMError(u) {
    return K(u, "DOMError");
  }
}
class we {
  match(u) {
    return ((u) => u instanceof Error)(u);
  }
  coerce(u, d) {
    return {
      type: this.getType(u),
      value: this.getMessage(u, d),
      stack: this.getStack(u),
      cause: u.cause ? d.next(u.cause) : void 0,
      synthetic: !1,
    };
  }
  getType(u) {
    return u.name || u.constructor.name;
  }
  getMessage(u, d) {
    var h = u.message;
    return String(
      h.error && "string" == typeof h.error.message ? h.error.message : h,
    );
  }
  getStack(u) {
    return u.stacktrace || u.stack || void 0;
  }
}
class xe {
  constructor() {}
  match(u) {
    return K(u, "ErrorEvent") && null != u.error;
  }
  coerce(u, d) {
    var h;
    return (
      d.apply(u.error) || {
        type: "ErrorEvent",
        value: u.message,
        stack: null == (h = d.syntheticException) ? void 0 : h.stack,
        synthetic: !0,
      }
    );
  }
}
var Ji =
  /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
class Se {
  match(u) {
    return "string" == typeof u;
  }
  coerce(u, d) {
    var h,
      [v, g] = this.getInfos(u);
    return {
      type: null != v ? v : "Error",
      value: null != g ? g : u,
      stack: null == (h = d.syntheticException) ? void 0 : h.stack,
      synthetic: !0,
    };
  }
  getInfos(u) {
    var d = "Error",
      h = u,
      v = u.match(Ji);
    return (v && ((d = v[1]), (h = v[2])), [d, h]);
  }
}
var rr = ["fatal", "error", "warning", "log", "info", "debug"];
function Te(u, d) {
  void 0 === d && (d = 40);
  var h = Object.keys(u);
  if ((h.sort(), !h.length)) return "[object has no keys]";
  for (var v = h.length; v > 0; v--) {
    var g = h.slice(0, v).join(", ");
    if (d >= g.length)
      return v === h.length ? g : g.length > d ? g.slice(0, d) + "..." : g;
  }
  return "";
}
class ke {
  match(u) {
    return "object" == typeof u && null !== u;
  }
  coerce(u, d) {
    var h,
      v = this.getErrorPropertyFromObject(u);
    return v
      ? d.apply(v)
      : {
          type: this.getType(u),
          value: this.getValue(u),
          stack: null == (h = d.syntheticException) ? void 0 : h.stack,
          level: this.isSeverityLevel(u.level) ? u.level : "error",
          synthetic: !0,
        };
  }
  getType(u) {
    return X(u) ? u.constructor.name : "Error";
  }
  getValue(u) {
    if ("name" in u && "string" == typeof u.name) {
      var d = "'" + u.name + "' captured as exception";
      return (
        "message" in u &&
          "string" == typeof u.message &&
          (d += " with message: '" + u.message + "'"),
        d
      );
    }
    if ("message" in u && "string" == typeof u.message) return u.message;
    var h = this.getObjectClassName(u);
    return (
      (h && "Object" !== h ? "'" + h + "'" : "Object") +
      " captured as exception with keys: " +
      Te(u)
    );
  }
  isSeverityLevel(u) {
    return j(u) && !z(u) && rr.indexOf(u) >= 0;
  }
  getErrorPropertyFromObject(u) {
    for (var d in u)
      if ({}.hasOwnProperty.call(u, d)) {
        var h = u[d];
        if (ie(h)) return h;
      }
  }
  getObjectClassName(u) {
    try {
      var d = Object.getPrototypeOf(u);
      return d ? d.constructor.name : void 0;
    } catch (u) {
      return;
    }
  }
}
class Re {
  match(u) {
    return X(u);
  }
  coerce(u, d) {
    var h,
      v = u.constructor.name;
    return {
      type: v,
      value: v + " captured as exception with keys: " + Te(u),
      stack: null == (h = d.syntheticException) ? void 0 : h.stack,
      synthetic: !0,
    };
  }
}
class Pe {
  match(u) {
    return J(u);
  }
  coerce(u, d) {
    var h;
    return {
      type: "Error",
      value: "Primitive value captured as exception: " + String(u),
      stack: null == (h = d.syntheticException) ? void 0 : h.stack,
      synthetic: !0,
    };
  }
}
class Oe {
  match(u) {
    return (
      K(u, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(u)
    );
  }
  isCustomEventWrappingRejection(u) {
    if (!X(u)) return !1;
    try {
      var d = u.detail;
      return null != d && "object" == typeof d && "reason" in d;
    } catch (u) {
      return !1;
    }
  }
  coerce(u, d) {
    var h,
      v = this.getUnhandledRejectionReason(u);
    return J(v)
      ? {
          type: "UnhandledRejection",
          value:
            "Non-Error promise rejection captured with value: " + String(v),
          stack: null == (h = d.syntheticException) ? void 0 : h.stack,
          synthetic: !0,
        }
      : d.apply(v);
  }
  getUnhandledRejectionReason(u) {
    try {
      if ("reason" in u) return u.reason;
      if (
        "detail" in u &&
        null != u.detail &&
        "object" == typeof u.detail &&
        "reason" in u.detail
      )
        return u.detail.reason;
    } catch (u) {}
    return u;
  }
}
var ur = "$message",
  pr = "$timestamp",
  gr = new Set([ur, pr]),
  fr = { enabled: !0, max_bytes: 32768 };
function Me(u) {
  var d;
  return u
    ? {
        enabled: null !== (d = u.enabled) && void 0 !== d ? d : fr.enabled,
        max_bytes: Ue(u.max_bytes, fr.max_bytes),
      }
    : f({}, fr);
}
class De {
  constructor(u) {
    ((this.Yt = []), (this.Xt = 0), (this.qt = Me(u)));
  }
  setConfig(u) {
    ((this.qt = Me(u)), this.er());
  }
  add(u) {
    var d = (function (u) {
      var d = (function (u) {
        var d = new WeakSet();
        try {
          return JSON.stringify(u, (u, h) => {
            if ("bigint" == typeof h) return h.toString();
            if ("function" != typeof h && "symbol" != typeof h) {
              if (h instanceof Date) return h.toISOString();
              if (h instanceof Error)
                return { name: h.name, message: h.message, stack: h.stack };
              if (h && "object" == typeof h) {
                if (d.has(h)) return "[Circular]";
                d.add(h);
              }
              return h;
            }
          });
        } catch (u) {
          return;
        }
      })(u);
      if (d)
        try {
          var h = JSON.parse(d);
          if (!U(h)) return;
          var v = h,
            g = v[ur],
            m = v[pr];
          if (!j(g) || 0 === g.trim().length) return;
          if (!j(m) && !q(m)) return;
          return { step: v, json: d };
        } catch (u) {
          return;
        }
    })(u);
    if (d) {
      var h = (function (u) {
        if ("undefined" != typeof TextEncoder)
          return new TextEncoder().encode(u).length;
        for (var d = encodeURIComponent(u), h = 0, v = 0; d.length > v; v++)
          "%" === d[v] ? ((h += 1), (v += 2)) : (h += 1);
        return h;
      })(d.json);
      h > this.qt.max_bytes ||
        (this.Yt.push({ step: d.step, bytes: h }), (this.Xt += h), this.er());
    }
  }
  getAttachable() {
    return this.Yt.map((u) => u.step);
  }
  clear() {
    ((this.Yt = []), (this.Xt = 0));
  }
  size() {
    return this.Yt.length;
  }
  er() {
    for (; this.Xt > this.qt.max_bytes && this.Yt.length > 0; ) {
      var u = this.Yt.shift();
      u && (this.Xt -= u.bytes);
    }
  }
}
function Ue(u, d) {
  if (!q(u) || u === 1 / 0 || u === -1 / 0) return d;
  var h = Math.floor(u);
  return 0 > h ? d : h;
}
var Le = function (u, d) {
    var { debugEnabled: h } = void 0 === d ? {} : d,
      v = {
        k(d) {
          if (
            _t &&
            (Ct.DEBUG || $t.POSTHOG_DEBUG || h) &&
            !N(_t.console) &&
            _t.console
          ) {
            for (
              var v =
                  ("__rrweb_original__" in _t.console[d])
                    ? _t.console[d].__rrweb_original__
                    : _t.console[d],
                g = arguments.length,
                m = new Array(g > 1 ? g - 1 : 0),
                b = 1;
              g > b;
              b++
            )
              m[b - 1] = arguments[b];
            v(u, ...m);
          }
        },
        debug() {
          for (var u = arguments.length, d = new Array(u), h = 0; u > h; h++)
            d[h] = arguments[h];
          v.k("debug", ...d);
        },
        info() {
          for (var u = arguments.length, d = new Array(u), h = 0; u > h; h++)
            d[h] = arguments[h];
          v.k("log", ...d);
        },
        warn() {
          for (var u = arguments.length, d = new Array(u), h = 0; u > h; h++)
            d[h] = arguments[h];
          v.k("warn", ...d);
        },
        error() {
          for (var u = arguments.length, d = new Array(u), h = 0; u > h; h++)
            d[h] = arguments[h];
          v.k("error", ...d);
        },
        critical() {
          for (var u = arguments.length, d = new Array(u), h = 0; u > h; h++)
            d[h] = arguments[h];
        },
        uninitializedWarning(u) {
          v.error("You must initialize PostHog before calling " + u);
        },
        createLogger: (d, h) => Le(u + " " + d, h),
      };
    return v;
  },
  _r = Le("[PostHog.js]"),
  mr = _r.createLogger,
  yr = mr("[ExternalScriptsLoader]"),
  Be = (u, d, h) => {
    if (u.config.disable_external_dependency_loading)
      return (
        yr.warn(
          d + " was requested but loading of external scripts is disabled.",
        ),
        h("Loading of external scripts is disabled")
      );
    var v = null == bt ? void 0 : bt.querySelectorAll("script");
    if (v)
      for (
        var g,
          o = function () {
            if (v[m].src === d) {
              var u = v[m];
              return u.__posthog_loading_callback_fired
                ? { v: h() }
                : (u.addEventListener("load", (d) => {
                    ((u.__posthog_loading_callback_fired = !0), h(void 0, d));
                  }),
                  (u.onerror = (u) => h(u)),
                  { v: void 0 });
            }
          },
          m = 0;
        v.length > m;
        m++
      )
        if ((g = o())) return g.v;
    var l = () => {
      if (!bt) return h("document not found");
      var v = bt.createElement("script");
      if (
        ((v.type = "text/javascript"),
        (v.crossOrigin = "anonymous"),
        (v.src = d),
        (v.onload = (u) => {
          ((v.__posthog_loading_callback_fired = !0), h(void 0, u));
        }),
        (v.onerror = (u) => h(u)),
        u.config.prepare_external_dependency_script &&
          (v = u.config.prepare_external_dependency_script(v)),
        !v)
      )
        return h("prepare_external_dependency_script returned null");
      if ("head" === u.config.external_scripts_inject_target)
        bt.head.appendChild(v);
      else {
        var g,
          m = bt.querySelectorAll("body > script");
        m.length > 0
          ? null == (g = m[0].parentNode) || g.insertBefore(v, m[0])
          : bt.body.appendChild(v);
      }
    };
    null != bt && bt.body
      ? l()
      : null == bt || bt.addEventListener("DOMContentLoaded", l);
  };
(($t.__PosthogExtensions__ = $t.__PosthogExtensions__ || {}),
  ($t.__PosthogExtensions__.loadExternalDependency = (u, d, h) => {
    if ("remote-config" !== d) {
      var v;
      if (u.config.__preview_external_dependency_versioned_paths)
        v = u.requestRouter.endpointFor(
          "assets",
          "/static/" + u.version + "/" + d + ".js",
        );
      else {
        var g = "/static/" + d + ".js?v=" + u.version;
        if ("toolbar" === d) {
          var m = 3e5;
          g = g + "&t=" + Math.floor(Date.now() / m) * m;
        }
        v = u.requestRouter.endpointFor("assets", g);
      }
      Be(u, v, h);
    } else {
      var b = u.requestRouter.endpointFor(
        "assets",
        "/array/" + u.config.token + "/config.js",
      );
      Be(u, b, h);
    }
  }),
  ($t.__PosthogExtensions__.loadSiteApp = (u, d, h) => {
    var v = u.requestRouter.endpointFor("api", d);
    Be(u, v, h);
  }));
var br = "$people_distinct_id",
  wr = "$device_id",
  xr = "__alias",
  Er = "__timers",
  Pr = "$autocapture_disabled_server_side",
  $r = "$heatmaps_enabled_server_side",
  Fr = "$exception_capture_enabled_server_side",
  Mr = "$error_tracking_suppression_rules",
  Or = "$error_tracking_capture_extension_exceptions",
  qr = "$web_vitals_enabled_server_side",
  jr = "$dead_clicks_enabled_server_side",
  zr = "$product_tours_enabled_server_side",
  Hr = "$web_vitals_allowed_metrics",
  Br = "$session_recording_remote_config",
  Jr = "$replay_override_sampling",
  es = "$replay_override_linked_flag",
  rs = "$replay_override_url_trigger",
  ss = "$replay_override_event_trigger",
  ns = "$sesid",
  os = "$session_is_sampled",
  as = "$enabled_feature_flags",
  ls = "$active_feature_flags",
  cs = "$early_access_features",
  us = "$feature_flag_details",
  ds = "$feature_flag_payloads",
  hs = "$feature_flag_request_id",
  ps = "$override_feature_flags",
  vs = "$override_feature_flag_payloads",
  gs = "$stored_person_properties",
  fs = "$stored_group_properties",
  _s = "$surveys",
  bs = "$surveys_activated",
  ws = "ph_product_tours",
  xs = "$flag_call_reported",
  ks = "$flag_call_reported_session_id",
  Es = "$feature_flag_errors",
  Ss = "$feature_flag_evaluated_at",
  $s = "$user_state",
  Fs = "$client_session_props",
  Cs = "$capture_rate_limit",
  Ms = "$initial_campaign_params",
  Is = "$initial_referrer_info",
  Rs = "$initial_person_info",
  Ts = "$epp",
  Os = "__POSTHOG_TOOLBAR__",
  As = "$posthog_cookieless",
  Ls = "$sdk_debug_extensions_init_method",
  js = "$sdk_debug_extensions_init_time_ms",
  Ns = "$sdk_debug_recording_script_not_loaded",
  Us = "PostHog loadExternalDependency extension not found.",
  Xs = "on_reject",
  Qs = "always",
  en = "anonymous",
  tn = "identified",
  rn = "identified_only",
  sn = "visibilitychange",
  cn = "beforeunload",
  hn = "$pageview",
  vn = "$pageleave",
  fn = "$identify",
  wn = "$groupidentify";
function Ki(u, d) {
  jt(u) && u.forEach(d);
}
function Xi(u, d) {
  if (!H(u))
    if (jt(u)) u.forEach(d);
    else if (((u) => u instanceof FormData)(u)) u.forEach((u, h) => d(u, h));
    else for (var h in u) qt.call(u, h) && d(u[h], h);
}
var Qi = function (u) {
  for (
    var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), v = 1;
    d > v;
    v++
  )
    h[v - 1] = arguments[v];
  for (var g of h) for (var m in g) void 0 !== g[m] && (u[m] = g[m]);
  return u;
};
function Zi(u) {
  for (var d = Object.keys(u), h = d.length, v = new Array(h); h--; )
    v[h] = [d[h], u[d[h]]];
  return v;
}
var tr = function (u) {
    try {
      return u();
    } catch (u) {
      return;
    }
  },
  er = function (u) {
    return function () {
      try {
        for (var d = arguments.length, h = new Array(d), v = 0; d > v; v++)
          h[v] = arguments[v];
        return u.apply(this, h);
      } catch (u) {
        (_r.critical(
          "Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.",
        ),
          _r.critical(u));
      }
    };
  },
  ir = function (u) {
    var d = {};
    return (
      Xi(u, function (u, h) {
        ((j(u) && u.length > 0) || q(u)) && (d[h] = u);
      }),
      d
    );
  };
var Pn = ["herokuapp.com", "vercel.app", "netlify.app"];
function sr(u) {
  var d = null == u ? void 0 : u.hostname;
  if (!j(d)) return !1;
  var h = d.split(".").slice(-2).join(".");
  for (var v of Pn) if (h === v) return !1;
  return !0;
}
function nr(u, d, h, v) {
  var { capture: g = !1, passive: m = !0 } = null != v ? v : {};
  null == u || u.addEventListener(d, h, { capture: g, passive: m });
}
function or(u) {
  return "ph_toolbar_internal" === u.name;
}
(Math.trunc ||
  (Math.trunc = function (u) {
    return 0 > u ? Math.ceil(u) : Math.floor(u);
  }),
  Number.isInteger ||
    (Number.isInteger = function (u) {
      return q(u) && isFinite(u) && Math.floor(u) === u;
    }));
class ar {
  constructor(u) {
    if (((this.bytes = u), 16 !== u.length))
      throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(u, d, h, v) {
    if (
      !Number.isInteger(u) ||
      !Number.isInteger(d) ||
      !Number.isInteger(h) ||
      !Number.isInteger(v) ||
      0 > u ||
      0 > d ||
      0 > h ||
      0 > v ||
      u > 0xffffffffffff ||
      d > 4095 ||
      h > 1073741823 ||
      v > 4294967295
    )
      throw new RangeError("invalid field value");
    var g = new Uint8Array(16);
    return (
      (g[0] = u / Math.pow(2, 40)),
      (g[1] = u / Math.pow(2, 32)),
      (g[2] = u / Math.pow(2, 24)),
      (g[3] = u / Math.pow(2, 16)),
      (g[4] = u / Math.pow(2, 8)),
      (g[5] = u),
      (g[6] = 112 | (d >>> 8)),
      (g[7] = d),
      (g[8] = 128 | (h >>> 24)),
      (g[9] = h >>> 16),
      (g[10] = h >>> 8),
      (g[11] = h),
      (g[12] = v >>> 24),
      (g[13] = v >>> 16),
      (g[14] = v >>> 8),
      (g[15] = v),
      new ar(g)
    );
  }
  toString() {
    for (var u = "", d = 0; this.bytes.length > d; d++)
      ((u =
        u +
        (this.bytes[d] >>> 4).toString(16) +
        (15 & this.bytes[d]).toString(16)),
        (3 !== d && 5 !== d && 7 !== d && 9 !== d) || (u += "-"));
    if (36 !== u.length) throw new Error("Invalid UUIDv7 was generated");
    return u;
  }
  clone() {
    return new ar(this.bytes.slice(0));
  }
  equals(u) {
    return 0 === this.compareTo(u);
  }
  compareTo(u) {
    for (var d = 0; 16 > d; d++) {
      var h = this.bytes[d] - u.bytes[d];
      if (0 !== h) return Math.sign(h);
    }
    return 0;
  }
}
class lr {
  constructor() {
    ((this.S = 0), (this.C = 0), (this.I = new dr()));
  }
  generate() {
    var u = this.generateOrAbort();
    if (N(u)) {
      this.S = 0;
      var d = this.generateOrAbort();
      if (N(d))
        throw new Error("Could not generate UUID after timestamp reset");
      return d;
    }
    return u;
  }
  generateOrAbort() {
    var u = Date.now();
    if (u > this.S) ((this.S = u), this.T());
    else {
      if (this.S >= u + 1e4) return;
      (this.C++, this.C > 4398046511103 && (this.S++, this.T()));
    }
    return ar.fromFieldsV7(
      this.S,
      Math.trunc(this.C / Math.pow(2, 30)),
      this.C & (Math.pow(2, 30) - 1),
      this.I.nextUint32(),
    );
  }
  T() {
    this.C = 1024 * this.I.nextUint32() + (1023 & this.I.nextUint32());
  }
}
var Fn,
  hr = (u) => {
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
      throw new Error("no cryptographically strong RNG available");
    for (var d = 0; u.length > d; d++)
      u[d] =
        65536 * Math.trunc(65536 * Math.random()) +
        Math.trunc(65536 * Math.random());
    return u;
  };
_t &&
  !N(_t.crypto) &&
  crypto.getRandomValues &&
  (hr = (u) => crypto.getRandomValues(u));
class dr {
  constructor() {
    ((this.M = new Uint32Array(8)), (this.O = 1 / 0));
  }
  nextUint32() {
    return (
      this.M.length > this.O || (hr(this.M), (this.O = 0)),
      this.M[this.O++]
    );
  }
}
var vr = () => cr().toString(),
  cr = () => (Fn || (Fn = new lr())).generate(),
  Mn = "",
  In = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
var Tn = {
    R: () => !!bt,
    D(u) {
      _r.error("cookieStore error: " + u);
    },
    A(u) {
      if (bt) {
        try {
          for (
            var d = u + "=",
              h = bt.cookie.split(";").filter((u) => u.length),
              v = 0;
            h.length > v;
            v++
          ) {
            for (var g = h[v]; " " == g.charAt(0); )
              g = g.substring(1, g.length);
            if (0 === g.indexOf(d))
              return decodeURIComponent(g.substring(d.length, g.length));
          }
        } catch (u) {}
        return null;
      }
    },
    F(u) {
      var d;
      try {
        d = JSON.parse(Tn.A(u)) || {};
      } catch (u) {}
      return d;
    },
    N(u, d, h, v, g) {
      if (bt)
        try {
          var m = "",
            b = "",
            k = (function (u, d) {
              if (d) {
                var h = (function (u, d) {
                  if ((void 0 === d && (d = bt), Mn)) return Mn;
                  if (!d) return "";
                  if (["localhost", "127.0.0.1"].includes(u)) return "";
                  for (
                    var h = u.split("."),
                      v = Math.min(h.length, 8),
                      g = "dmn_chk_" + vr();
                    !Mn && v--;
                  ) {
                    var m = h.slice(v).join("."),
                      b = g + "=1;domain=." + m + ";path=/";
                    ((d.cookie = b + ";max-age=3"),
                      d.cookie.includes(g) &&
                        ((d.cookie = b + ";max-age=0"), (Mn = m)));
                  }
                  return Mn;
                })(u);
                if (!h) {
                  var v = ((u) => {
                    var d = u.match(In);
                    return d ? d[0] : "";
                  })(u);
                  (v !== h &&
                    _r.info(
                      "Warning: cookie subdomain discovery mismatch",
                      v,
                      h,
                    ),
                    (h = v));
                }
                return h ? "; domain=." + h : "";
              }
              return "";
            })(bt.location.hostname, v);
          if (h) {
            var S = new Date();
            (S.setTime(S.getTime() + 864e5 * h),
              (m = "; expires=" + S.toUTCString()));
          }
          g && (b = "; secure");
          var $ =
            u +
            "=" +
            encodeURIComponent(JSON.stringify(d)) +
            m +
            "; SameSite=Lax; path=/" +
            k +
            b;
          return (
            $.length > 3686.4 &&
              _r.warn("cookieStore warning: large cookie, len=" + $.length),
            (bt.cookie = $),
            $
          );
        } catch (u) {
          return;
        }
    },
    q(u, d) {
      if (null != bt && bt.cookie)
        try {
          Tn.N(u, "", -1, d);
        } catch (u) {
          return;
        }
    },
  },
  On = null,
  An = {
    R() {
      if (!B(On)) return On;
      var u = !0;
      if (N(_t)) u = !1;
      else
        try {
          var d = "__mplssupport__";
          (An.N(d, "xyz"), '"xyz"' !== An.A(d) && (u = !1), An.q(d));
        } catch (_t) {
          u = !1;
        }
      return (
        u || _r.error("localStorage unsupported; falling back to cookie store"),
        (On = u),
        u
      );
    },
    D(u) {
      _r.error("localStorage error: " + u);
    },
    A(u) {
      try {
        return null == _t ? void 0 : _t.localStorage.getItem(u);
      } catch (_t) {
        An.D(_t);
      }
      return null;
    },
    F(u) {
      try {
        return JSON.parse(An.A(u)) || {};
      } catch (u) {}
      return null;
    },
    N(u, d) {
      try {
        null == _t || _t.localStorage.setItem(u, JSON.stringify(d));
      } catch (_t) {
        An.D(_t);
      }
    },
    q(u) {
      try {
        null == _t || _t.localStorage.removeItem(u);
      } catch (_t) {
        An.D(_t);
      }
    },
  },
  Ln = [wr, "distinct_id", ns, os, Ts, Rs, $s],
  qn = {},
  Dn = {
    R: () => !0,
    D(u) {
      _r.error("memoryStorage error: " + u);
    },
    A: (u) => qn[u] || null,
    F: (u) => qn[u] || null,
    N(u, d) {
      qn[u] = d;
    },
    q(u) {
      delete qn[u];
    },
  },
  jn = null,
  Un = {
    R() {
      if (!B(jn)) return jn;
      if (((jn = !0), N(_t))) jn = !1;
      else
        try {
          var u = "__support__";
          (Un.N(u, "xyz"), '"xyz"' !== Un.A(u) && (jn = !1), Un.q(u));
        } catch (_t) {
          jn = !1;
        }
      return jn;
    },
    D(u) {
      _r.error("sessionStorage error: ", u);
    },
    A(u) {
      try {
        return null == _t ? void 0 : _t.sessionStorage.getItem(u);
      } catch (_t) {
        Un.D(_t);
      }
      return null;
    },
    F(u) {
      try {
        return JSON.parse(Un.A(u)) || null;
      } catch (u) {}
      return null;
    },
    N(u, d) {
      try {
        null == _t || _t.sessionStorage.setItem(u, JSON.stringify(d));
      } catch (_t) {
        Un.D(_t);
      }
    },
    q(u) {
      try {
        null == _t || _t.sessionStorage.removeItem(u);
      } catch (_t) {
        Un.D(_t);
      }
    },
  };
class Sr {
  constructor(u) {
    this._instance = u;
  }
  get qt() {
    return this._instance.config;
  }
  get consent() {
    return this.rr() ? 0 : this.ir;
  }
  isOptedOut() {
    return (
      this.qt.cookieless_mode === Qs ||
      this.isRejected() ||
      (-1 === this.consent && this.qt.cookieless_mode === Xs)
    );
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  isExplicitlyOptedOut() {
    return 0 === this.consent;
  }
  isRejected() {
    return (
      0 === this.consent ||
      (-1 === this.consent && this.qt.opt_out_capturing_by_default)
    );
  }
  optInOut(u) {
    this.nr.N(
      this.sr,
      u ? 1 : 0,
      this.qt.cookie_expiration,
      this.qt.cross_subdomain_cookie,
      this.qt.secure_cookie,
    );
  }
  reset() {
    this.nr.q(this.sr, this.qt.cross_subdomain_cookie);
  }
  get sr() {
    var {
      token: u,
      opt_out_capturing_cookie_prefix: d,
      consent_persistence_name: h,
    } = this._instance.config;
    return h || (d ? d + u : "__ph_opt_in_out_" + u);
  }
  get ir() {
    var u = this.nr.A(this.sr);
    return Z(u) ? 1 : P(Ut, u) ? 0 : -1;
  }
  get nr() {
    var u = this.qt.opt_out_capturing_persistence_type,
      d = "localStorage" === u ? An : Tn;
    if (!this.ar || this.ar !== d) {
      this.ar = d;
      var h = "localStorage" === u ? Tn : An;
      h.A(this.sr) &&
        (this.ar.A(this.sr) || this.optInOut(Z(h.A(this.sr))),
        h.q(this.sr, this.qt.cross_subdomain_cookie));
    }
    return this.ar;
  }
  rr() {
    return (
      !!this.qt.respect_dnt &&
      [
        null == yt ? void 0 : yt.doNotTrack,
        null == yt ? void 0 : yt.msDoNotTrack,
        $t.doNotTrack,
      ].some((u) => Z(u))
    );
  }
}
var zn = mr("[Dead Clicks]"),
  Tr = () => !0,
  kr = (u) => {
    var d,
      h = !(null == (d = u.instance.persistence) || !d.get_property(jr)),
      v = u.instance.config.capture_dead_clicks;
    return W(v) ? v : !!U(v) || h;
  };
class Rr {
  get lazyLoadedDeadClicksAutocapture() {
    return this.ur;
  }
  constructor(u, d, h) {
    ((this.instance = u),
      (this.isEnabled = d),
      (this.onCapture = h),
      this.startIfEnabledOrStop());
  }
  onRemoteConfig(u) {
    "captureDeadClicks" in u &&
      (this.instance.persistence &&
        this.instance.persistence.register({ [jr]: u.captureDeadClicks }),
      this.startIfEnabledOrStop());
  }
  startIfEnabledOrStop() {
    this.isEnabled(this)
      ? this.lr(() => {
          this.hr();
        })
      : this.stop();
  }
  lr(u) {
    var d, h;
    (null != (d = $t.__PosthogExtensions__) &&
      d.initDeadClicksAutocapture &&
      u(),
      null == (h = $t.__PosthogExtensions__) ||
        null == h.loadExternalDependency ||
        h.loadExternalDependency(
          this.instance,
          "dead-clicks-autocapture",
          (d) => {
            d ? zn.error("failed to load script", d) : u();
          },
        ));
  }
  hr() {
    var u;
    if (bt) {
      if (
        !this.ur &&
        null != (u = $t.__PosthogExtensions__) &&
        u.initDeadClicksAutocapture
      ) {
        var d = U(this.instance.config.capture_dead_clicks)
          ? this.instance.config.capture_dead_clicks
          : {};
        ((d.__onCapture = this.onCapture),
          (this.ur = $t.__PosthogExtensions__.initDeadClicksAutocapture(
            this.instance,
            d,
          )),
          this.ur.start(bt),
          zn.info("starting..."));
      }
    } else zn.error("`document` not found. Cannot start.");
  }
  stop() {
    this.ur && (this.ur.stop(), (this.ur = void 0), zn.info("stopping..."));
  }
}
var Bn = mr("[SegmentIntegration]");
var Vn = "posthog-js";
function Ir(u, d) {
  var {
    organization: h,
    projectId: v,
    prefix: g,
    severityAllowList: m = ["error"],
    sendExceptionsToPostHog: b = !0,
  } = void 0 === d ? {} : d;
  return (d) => {
    var k, S, $, F, C;
    if (("*" !== m && !m.includes(d.level)) || !u.__loaded) return d;
    d.tags || (d.tags = {});
    var M = u.requestRouter.endpointFor(
      "ui",
      "/project/" + u.config.token + "/person/" + u.get_distinct_id(),
    );
    ((d.tags["PostHog Person URL"] = M),
      u.sessionRecordingStarted() &&
        (d.tags["PostHog Recording URL"] = u.get_session_replay_url({
          withTimestamp: !0,
        })));
    var A,
      G = (null == (k = d.exception) ? void 0 : k.values) || [],
      Q = G.map((u) =>
        f({}, u, {
          stacktrace: u.stacktrace
            ? f({}, u.stacktrace, {
                type: "raw",
                frames: (u.stacktrace.frames || []).map((u) =>
                  f({}, u, { platform: "web:javascript" }),
                ),
              })
            : void 0,
        }),
      ),
      te = {
        $exception_message:
          (null == (S = G[0]) ? void 0 : S.value) || d.message,
        $exception_type: null == ($ = G[0]) ? void 0 : $.type,
        $exception_level: d.level,
        $exception_list: Q,
        $sentry_event_id: d.event_id,
        $sentry_exception: d.exception,
        $sentry_exception_message:
          (null == (F = G[0]) ? void 0 : F.value) || d.message,
        $sentry_exception_type: null == (C = G[0]) ? void 0 : C.type,
        $sentry_tags: d.tags,
      };
    return (
      h &&
        v &&
        (te.$sentry_url =
          (g || "https://sentry.io/organizations/") +
          h +
          "/issues/?project=" +
          v +
          "&query=" +
          d.event_id),
      b && (null == (A = u.exceptions) || A.sendExceptionEvent(te)),
      d
    );
  };
}
class Cr {
  constructor(u, d, h, v, g, m) {
    ((this.name = Vn),
      (this.setupOnce = function (b) {
        b(
          Ir(u, {
            organization: d,
            projectId: h,
            prefix: v,
            severityAllowList: g,
            sendExceptionsToPostHog: null == m || m,
          }),
        );
      }));
  }
}
class Ar {
  constructor(u) {
    ((this.cr = (u, d, h) => {
      h &&
        (h.noSessionId || h.activityTimeout || h.sessionPastMaximumLength) &&
        (_r.info("[PageViewManager] Session rotated, clearing pageview state", {
          sessionId: u,
          changeReason: h,
        }),
        (this.dr = void 0),
        this._instance.scrollManager.resetContext());
    }),
      (this._instance = u),
      this.vr());
  }
  vr() {
    var u;
    this.pr =
      null == (u = this._instance.sessionManager)
        ? void 0
        : u.onSessionId(this.cr);
  }
  destroy() {
    var u;
    (null == (u = this.pr) || u.call(this), (this.pr = void 0));
  }
  doPageView(u, d) {
    var h,
      v = this.gr(u, d);
    return (
      (this.dr = {
        pathname:
          null !== (h = null == _t ? void 0 : _t.location.pathname) &&
          void 0 !== h
            ? h
            : "",
        pageViewId: d,
        timestamp: u,
      }),
      this._instance.scrollManager.resetContext(),
      v
    );
  }
  doPageLeave(u) {
    var d;
    return this.gr(u, null == (d = this.dr) ? void 0 : d.pageViewId);
  }
  doEvent() {
    var u;
    return { $pageview_id: null == (u = this.dr) ? void 0 : u.pageViewId };
  }
  gr(u, d) {
    var h = this.dr;
    if (!h) return { $pageview_id: d };
    var v = { $pageview_id: d, $prev_pageview_id: h.pageViewId },
      g = this._instance.scrollManager.getContext();
    if (g && !this._instance.config.disable_scroll_properties) {
      var {
        maxScrollHeight: m,
        lastScrollY: b,
        maxScrollY: k,
        maxContentHeight: S,
        lastContentY: $,
        maxContentY: F,
      } = g;
      if (!(N(m) || N(b) || N(k) || N(S) || N($) || N(F))) {
        ((m = Math.ceil(m)),
          (b = Math.ceil(b)),
          (k = Math.ceil(k)),
          (S = Math.ceil(S)),
          ($ = Math.ceil($)),
          (F = Math.ceil(F)));
        var C = m > 1 ? et(b / m, 0, 1, _r) : 1,
          M = m > 1 ? et(k / m, 0, 1, _r) : 1,
          A = S > 1 ? et($ / S, 0, 1, _r) : 1,
          G = S > 1 ? et(F / S, 0, 1, _r) : 1;
        v = Qi(v, {
          $prev_pageview_last_scroll: b,
          $prev_pageview_last_scroll_percentage: C,
          $prev_pageview_max_scroll: k,
          $prev_pageview_max_scroll_percentage: M,
          $prev_pageview_last_content: $,
          $prev_pageview_last_content_percentage: A,
          $prev_pageview_max_content: F,
          $prev_pageview_max_content_percentage: G,
        });
      }
    }
    return (
      h.pathname && (v.$prev_pageview_pathname = h.pathname),
      h.timestamp &&
        (v.$prev_pageview_duration =
          (u.getTime() - h.timestamp.getTime()) / 1e3),
      v
    );
  }
}
var Wn = {
    [br]: { exposure: "hidden" },
    [xr]: { exposure: "hidden" },
    __cmpns: { exposure: "hidden" },
    [Er]: { exposure: "hidden" },
    [Pr]: { exposure: "event" },
    [$r]: { exposure: "hidden" },
    [Fr]: { exposure: "event" },
    [Mr]: { exposure: "hidden" },
    [Or]: { exposure: "event" },
    [qr]: { exposure: "event" },
    [jr]: { exposure: "event" },
    [zr]: { exposure: "hidden" },
    [Hr]: { exposure: "event" },
    [Br]: { exposure: "hidden" },
    $session_recording_enabled_server_side: { exposure: "hidden" },
    [ns]: { exposure: "hidden" },
    [os]: { exposure: "event" },
    $session_past_minimum_duration: { exposure: "event" },
    $session_recording_url_trigger_activated_session: { exposure: "event" },
    $session_recording_event_trigger_activated_session: { exposure: "event" },
    $debug_first_full_snapshot_timestamp: { exposure: "event" },
    [as]: {
      exposure: "derived",
      shouldSkipFromEventProperties: (u, d) => d(),
      transformToEventProperties(u) {
        if (!U(u)) return {};
        for (var d = {}, h = Object.keys(u), v = 0; h.length > v; v++)
          d["$feature/" + h[v]] = u[h[v]];
        return d;
      },
    },
    [ls]: { exposure: "event" },
    [cs]: { exposure: "hidden" },
    [us]: { exposure: "hidden" },
    [ds]: { exposure: "event" },
    [hs]: { exposure: "event" },
    [ps]: { exposure: "event" },
    [vs]: { exposure: "hidden" },
    [gs]: { exposure: "hidden" },
    [fs]: { exposure: "hidden" },
    [_s]: { exposure: "hidden" },
    [bs]: { exposure: "event" },
    [ws]: { exposure: "hidden" },
    $product_tours_activated: { exposure: "hidden" },
    $conversations_widget_session_id: { exposure: "event" },
    $conversations_ticket_id: { exposure: "event" },
    $conversations_widget_state: { exposure: "event" },
    $conversations_user_traits: { exposure: "event" },
    [xs]: { exposure: "hidden" },
    [ks]: { exposure: "hidden" },
    [Es]: { exposure: "hidden" },
    [Ss]: { exposure: "hidden" },
    [$s]: { exposure: "hidden" },
    [Fs]: { exposure: "hidden" },
    [Cs]: { exposure: "hidden" },
    [Ms]: { exposure: "hidden" },
    [Is]: { exposure: "hidden" },
    [Rs]: { exposure: "hidden" },
    [Ts]: { exposure: "hidden" },
    [Jr]: { exposure: "event" },
    [es]: { exposure: "event" },
    [rs]: { exposure: "event" },
    [ss]: { exposure: "event" },
    [Ls]: { exposure: "event" },
    [js]: { exposure: "event" },
    [Ns]: { exposure: "event" },
    $sdk_debug_replay_event_trigger_status: { exposure: "event" },
    $sdk_debug_replay_linked_flag_trigger_status: { exposure: "event" },
    $sdk_debug_replay_matched_recording_trigger_groups: { exposure: "event" },
    $sdk_debug_replay_remote_trigger_matching_config: { exposure: "event" },
    $sdk_debug_replay_trigger_groups_count: { exposure: "event" },
    $sdk_debug_replay_url_trigger_status: { exposure: "event" },
    $session_recording_start_reason: { exposure: "event" },
  },
  Xn = [
    ["$posthog_sr_group_event_trigger_", { exposure: "hidden" }],
    ["$posthog_sr_group_url_trigger_", { exposure: "hidden" }],
    ["$posthog_sr_group_sampling_", { exposure: "hidden" }],
  ],
  Dr = (u) => {
    var d = null == bt ? void 0 : bt.createElement("a");
    return N(d) ? null : ((d.href = u), d);
  },
  Ur = function (u, d) {
    for (
      var h,
        v = ((u.split("#")[0] || "").split(/\?(.*)/)[1] || "")
          .replace(/^\?+/g, "")
          .split("&"),
        g = 0;
      v.length > g;
      g++
    ) {
      var m = v[g].split("=");
      if (m[0] === d) {
        h = m;
        break;
      }
    }
    if (!jt(h) || 2 > h.length) return "";
    var b = h[1];
    try {
      b = decodeURIComponent(b);
    } catch (u) {
      _r.error("Skipping decoding for malformed query param: " + b);
    }
    return b.replace(/\+/g, " ");
  },
  Lr = function (u, d, h) {
    if (!u || !d || !d.length) return u;
    for (
      var v = u.split("#"),
        g = v[1],
        m = (v[0] || "").split("?"),
        b = m[1],
        k = m[0],
        S = (b || "").split("&"),
        $ = [],
        F = 0;
      S.length > F;
      F++
    ) {
      var C = S[F].split("=");
      jt(C) && (d.includes(C[0]) ? $.push(C[0] + "=" + h) : $.push(S[F]));
    }
    var M = k;
    return (
      null != b && (M += "?" + $.join("&")),
      null != g && (M += "#" + g),
      M
    );
  },
  Nr = function (u, d) {
    var h = u.match(new RegExp(d + "=([^&]*)"));
    return h ? h[1] : null;
  },
  Gn = "https?://(.*)",
  Yn = [
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "irclid",
    "_kx",
  ],
  Jn = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid",
    ...Yn,
  ],
  eo = "<masked>",
  io = ["li_fat_id"];
function Vr(u, d, h) {
  if (!bt) return {};
  var v,
    g = d ? [...Yn, ...(h || [])] : [],
    m = Wr(Lr(bt.URL, g, eo), u),
    b =
      ((v = {}),
      Xi(io, function (u) {
        var d = Tn.A(u);
        v[u] = d || null;
      }),
      v);
  return Qi(b, m);
}
function Wr(u, d) {
  var h = Jn.concat(d || []),
    v = {};
  return (
    Xi(h, function (d) {
      var h = Ur(u, d);
      v[d] = h || null;
    }),
    v
  );
}
function Gr(u) {
  var d = (function (u) {
      return u
        ? 0 === u.search(Gn + "google.([^/?]*)")
          ? "google"
          : 0 === u.search(Gn + "bing.com")
            ? "bing"
            : 0 === u.search(Gn + "yahoo.com")
              ? "yahoo"
              : 0 === u.search(Gn + "duckduckgo.com")
                ? "duckduckgo"
                : null
        : null;
    })(u),
    h = "yahoo" != d ? "q" : "p",
    v = {};
  if (!B(d)) {
    v.$search_engine = d;
    var g = bt ? Ur(bt.referrer, h) : "";
    g.length && (v.ph_keyword = g);
  }
  return v;
}
function Yr() {
  return navigator.language || navigator.userLanguage;
}
var ro = "$direct";
function Kr() {
  return (null == bt ? void 0 : bt.referrer) || ro;
}
function Xr(u, d) {
  var h = u ? [...Yn, ...(d || [])] : [],
    v = null == wt ? void 0 : wt.href.substring(0, 1e3);
  return { r: Kr().substring(0, 1e3), u: v ? Lr(v, h, eo) : void 0 };
}
function Qr(u) {
  var d,
    { r: h, u: v } = u,
    g = {
      $referrer: h,
      $referring_domain:
        null == h
          ? void 0
          : h == ro
            ? ro
            : null == (d = Dr(h))
              ? void 0
              : d.host,
    };
  if (v) {
    g.$current_url = v;
    var m = Dr(v);
    ((g.$host = null == m ? void 0 : m.host),
      (g.$pathname = null == m ? void 0 : m.pathname));
    var b = Wr(v);
    Qi(g, b);
  }
  if (h) {
    var k = Gr(h);
    Qi(g, k);
  }
  return g;
}
function Zr() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (_t) {
    return;
  }
}
function ts() {
  try {
    return new Date().getTimezoneOffset();
  } catch (_t) {
    return;
  }
}
var _o = [
  "cookie",
  "localstorage",
  "localstorage+cookie",
  "sessionstorage",
  "memory",
];
class is {
  constructor(u, d) {
    ((this.qt = u),
      (this.props = {}),
      (this.mr = !1),
      (this.yr = ((u) => {
        var d = "";
        return (
          u.token &&
            (d = u.token
              .replace(/\+/g, "PL")
              .replace(/\//g, "SL")
              .replace(/=/g, "EQ")),
          u.persistence_name
            ? "ph_" + u.persistence_name
            : "ph_" + d + "_posthog"
        );
      })(u)),
      (this.nr = this.br(u)),
      this.load(),
      u.debug &&
        _r.info("Persistence loaded", u.persistence, f({}, this.props)),
      this.update_config(u, u, d),
      this.save());
  }
  isDisabled() {
    return !!this._r;
  }
  br(u) {
    -1 === _o.indexOf(u.persistence.toLowerCase()) &&
      (_r.critical(
        "Unknown persistence type " +
          u.persistence +
          "; falling back to localStorage+cookie",
      ),
      (u.persistence = "localStorage+cookie"));
    var d = (function (u) {
        void 0 === u && (u = []);
        var d = [...Ln, ...u];
        return f({}, An, {
          F(u) {
            try {
              var d = {};
              try {
                d = Tn.F(u) || {};
              } catch (u) {}
              var h = Qi(d, JSON.parse(An.A(u) || "{}"));
              return (An.N(u, h), h);
            } catch (u) {}
            return null;
          },
          N(u, h, v, g, m, b) {
            try {
              An.N(u, h, void 0, void 0, b);
              var k = {};
              (d.forEach((u) => {
                h[u] && (k[u] = h[u]);
              }),
                Object.keys(k).length && Tn.N(u, k, v, g, m, b));
            } catch (u) {
              An.D(u);
            }
          },
          q(u, d) {
            try {
              (null == _t || _t.localStorage.removeItem(u), Tn.q(u, d));
            } catch (_t) {
              An.D(_t);
            }
          },
        });
      })(u.cookie_persisted_properties || []),
      h = u.persistence.toLowerCase();
    return "localstorage" === h && An.R()
      ? An
      : "localstorage+cookie" === h && d.R()
        ? d
        : "sessionstorage" === h && Un.R()
          ? Un
          : "memory" === h
            ? Dn
            : "cookie" === h
              ? Tn
              : d.R()
                ? d
                : Tn;
  }
  wr(u) {
    var d = null != u ? u : this.qt.feature_flag_cache_ttl_ms;
    if (!d || 0 >= d) return !1;
    var h = this.props[Ss];
    return !h || "number" != typeof h || Date.now() - h > d;
  }
  properties() {
    var u = {};
    return (
      Xi(this.props, (d, h) => {
        var v = ((u) => {
          var d = Wn[u];
          if (d) return d;
          for (var [h, v] of Xn) if (0 === u.indexOf(h)) return v;
        })(h);
        if ("derived" === (null == v ? void 0 : v.exposure)) {
          if (
            null != v.shouldSkipFromEventProperties &&
            v.shouldSkipFromEventProperties(
              d,
              h === as ? () => this.wr() : () => !1,
            )
          )
            return;
          v.transformToEventProperties &&
            Qi(u, v.transformToEventProperties(d));
        } else (v && "event" !== v.exposure) || (u[h] = d);
      }),
      u
    );
  }
  load() {
    if (!this._r) {
      var u = this.nr.F(this.yr);
      u && (this.props = Qi({}, u));
    }
  }
  save() {
    this._r ||
      this.nr.N(this.yr, this.props, this.Sr, this.kr, this.Cr, this.qt.debug);
  }
  remove() {
    (this.nr.q(this.yr, !1), this.nr.q(this.yr, !0));
  }
  clear() {
    (this.remove(), (this.props = {}));
  }
  register_once(u, d, h) {
    if (U(u)) {
      (N(d) && (d = "None"), (this.Sr = N(h) ? this.Ir : h));
      var v = !1;
      if (
        (Xi(u, (u, h) => {
          (this.props.hasOwnProperty(h) && this.props[h] !== d) ||
            (this.Tr(h, u), (v = !0));
        }),
        v)
      )
        return (this.save(), !0);
    }
    return !1;
  }
  register(u, d) {
    if (U(u)) {
      this.Sr = N(d) ? this.Ir : d;
      var h = !1;
      if (
        (Xi(u, (d, v) => {
          u.hasOwnProperty(v) &&
            this.props[v] !== d &&
            (this.Tr(v, d), (h = !0));
        }),
        h)
      )
        return (this.save(), !0);
    }
    return !1;
  }
  unregister(u) {
    u in this.props && (this.Er(u), this.save());
  }
  update_campaign_params() {
    if (!this.mr) {
      var u = Vr(
        this.qt.custom_campaign_params,
        this.qt.mask_personal_data_properties,
        this.qt.custom_personal_data_properties,
      );
      (L(ir(u)) || this.register(u), (this.mr = !0));
    }
  }
  update_search_keyword() {
    var u;
    this.register((u = null == bt ? void 0 : bt.referrer) ? Gr(u) : {});
  }
  update_referrer_info() {
    var u;
    this.register_once(
      {
        $referrer: Kr(),
        $referring_domain:
          (null != bt &&
            bt.referrer &&
            (null == (u = Dr(bt.referrer)) ? void 0 : u.host)) ||
          ro,
      },
      void 0,
    );
  }
  set_initial_person_info() {
    this.props[Ms] ||
      this.props[Is] ||
      this.register_once(
        {
          [Rs]: Xr(
            this.qt.mask_personal_data_properties,
            this.qt.custom_personal_data_properties,
          ),
        },
        void 0,
      );
  }
  get_initial_props() {
    var u = {};
    Xi([Is, Ms], (d) => {
      var h = this.props[d];
      h &&
        Xi(h, function (d, h) {
          u["$initial_" + I(h)] = d;
        });
    });
    var d,
      h,
      v = this.props[Rs];
    if (v) {
      var g =
        ((d = Qr(v)),
        (h = {}),
        Xi(d, function (u, d) {
          h["$initial_" + I(d)] = u;
        }),
        h);
      Qi(u, g);
    }
    return u;
  }
  safe_merge(u) {
    return (
      Xi(this.props, function (d, h) {
        h in u || (u[h] = d);
      }),
      u
    );
  }
  update_config(u, d, h) {
    if (
      ((this.Ir = this.Sr = u.cookie_expiration),
      this.set_disabled(u.disable_persistence || !!h),
      this.set_cross_subdomain(u.cross_subdomain_cookie),
      this.set_secure(u.secure_cookie),
      u.persistence !== d.persistence ||
        !((u, d) => {
          if (u.length !== d.length) return !1;
          var h = [...u].sort(),
            v = [...d].sort();
          return h.every((u, d) => u === v[d]);
        })(
          u.cookie_persisted_properties || [],
          d.cookie_persisted_properties || [],
        ))
    ) {
      var v = this.br(u),
        g = this.props;
      (this.clear(), (this.nr = v), (this.props = g), this.save());
    }
  }
  set_disabled(u) {
    ((this._r = u), this._r ? this.remove() : this.save());
  }
  set_cross_subdomain(u) {
    u !== this.kr && ((this.kr = u), this.remove(), this.save());
  }
  set_secure(u) {
    u !== this.Cr && ((this.Cr = u), this.remove(), this.save());
  }
  set_event_timer(u, d) {
    var h = this.props[Er] || {};
    ((h[u] = d), this.Tr(Er, h), this.save());
  }
  remove_event_timer(u) {
    var d = this.props[Er] || {},
      h = d[u];
    return (N(h) || (delete d[u], this.Tr(Er, d), this.save()), h);
  }
  get_property(u) {
    return this.props[u];
  }
  set_property(u, d) {
    (this.Tr(u, d), this.save());
  }
  Tr(u, d) {
    this.props[u] = d;
  }
  Er(u) {
    delete this.props[u];
  }
}
var yo = "events",
  bo = "cancelEvents",
  ko = "popover",
  Po = "api",
  $o = "widget",
  Ro = "survey shown",
  To = "survey dismissed",
  Oo = "survey sent",
  Lo = "$survey_id",
  qo = "$survey_iteration",
  Uo = "$survey_last_seen_date",
  zo = "popover",
  Bo = "inline",
  Vo = "product tour shown",
  Wo = "$product_tour_last_seen_date",
  Xo = "$product_tour_type",
  Ko = mr("[RateLimiter]");
class ms {
  constructor(u) {
    ((this.serverLimits = {}),
      (this.lastEventRateLimited = !1),
      (this.checkForLimiting = (u) => {
        var d = u.text;
        if (d && d.length)
          try {
            (JSON.parse(d).quota_limited || []).forEach((u) => {
              (Ko.info((u || "events") + " is quota limited."),
                (this.serverLimits[u] = new Date().getTime() + 6e4));
            });
          } catch (u) {
            return void Ko.warn(
              'could not rate limit - continuing. Error: "' +
                (null == u ? void 0 : u.message) +
                '"',
              { text: d },
            );
          }
      }),
      (this.instance = u),
      (this.lastEventRateLimited =
        this.clientRateLimitContext(!0).isRateLimited));
  }
  get captureEventsPerSecond() {
    var u;
    return (
      (null == (u = this.instance.config.rate_limiting)
        ? void 0
        : u.events_per_second) || 10
    );
  }
  get captureEventsBurstLimit() {
    var u;
    return Math.max(
      (null == (u = this.instance.config.rate_limiting)
        ? void 0
        : u.events_burst_limit) || 10 * this.captureEventsPerSecond,
      this.captureEventsPerSecond,
    );
  }
  clientRateLimitContext(u) {
    var d, h, v;
    void 0 === u && (u = !1);
    var { captureEventsBurstLimit: g, captureEventsPerSecond: m } = this,
      b = new Date().getTime(),
      k =
        null !==
          (d =
            null == (h = this.instance.persistence)
              ? void 0
              : h.get_property(Cs)) && void 0 !== d
          ? d
          : { tokens: g, last: b };
    ((k.tokens += ((b - k.last) / 1e3) * m),
      (k.last = b),
      k.tokens > g && (k.tokens = g));
    var S = 1 > k.tokens;
    return (
      S || u || (k.tokens = Math.max(0, k.tokens - 1)),
      !S ||
        this.lastEventRateLimited ||
        u ||
        this.instance.capture(
          "$$client_ingestion_warning",
          {
            $$client_ingestion_warning_message:
              "posthog-js client rate limited. Config is set to " +
              m +
              " events per second and " +
              g +
              " events burst limit.",
          },
          { skip_client_rate_limiting: !0 },
        ),
      (this.lastEventRateLimited = S),
      null == (v = this.instance.persistence) || v.set_property(Cs, k),
      { isRateLimited: S, remainingTokens: k.tokens }
    );
  }
  isServerRateLimited(u) {
    var d = this.serverLimits[u || "events"] || !1;
    return !1 !== d && new Date().getTime() < d;
  }
}
var Go = mr("[RemoteConfig]");
class ys {
  constructor(u) {
    this._instance = u;
  }
  get remoteConfig() {
    var u;
    return null == (u = $t._POSTHOG_REMOTE_CONFIG) ||
      null == (u = u[this._instance.config.token])
      ? void 0
      : u.config;
  }
  Mr(u) {
    var d, h;
    null != (d = $t.__PosthogExtensions__) && d.loadExternalDependency
      ? null == (h = $t.__PosthogExtensions__) ||
        null == h.loadExternalDependency ||
        h.loadExternalDependency(this._instance, "remote-config", () =>
          u(this.remoteConfig),
        )
      : u();
  }
  Pr(u) {
    this._instance._send_request({
      method: "GET",
      url: this._instance.requestRouter.endpointFor(
        "assets",
        "/array/" + this._instance.config.token + "/config",
      ),
      callback(d) {
        u(d.json);
      },
    });
  }
  load() {
    try {
      if (this.remoteConfig)
        return (
          Go.info("Using preloaded remote config", this.remoteConfig),
          this.Rr(this.remoteConfig),
          void this.Or()
        );
      if (this._instance.Lr())
        return void Go.warn(
          "Remote config is disabled. Falling back to local config.",
        );
      this.Mr((u) => {
        if (!u)
          return (
            Go.info(
              "No config found after loading remote JS config. Falling back to JSON.",
            ),
            void this.Pr((u) => {
              (this.Rr(u), this.Or());
            })
          );
        (this.Rr(u), this.Or());
      });
    } catch (_t) {
      Go.error("Error loading remote config", _t);
    }
  }
  stop() {
    this.Fr && (clearInterval(this.Fr), (this.Fr = void 0));
  }
  refresh() {
    !this._instance.Lr() &&
      bt &&
      "hidden" !== bt.visibilityState &&
      this._instance.reloadFeatureFlags();
  }
  Or() {
    var u;
    if (!this.Fr) {
      var d =
        null !==
          (u = this._instance.config.remote_config_refresh_interval_ms) &&
        void 0 !== u
          ? u
          : 3e5;
      0 !== d &&
        (this.Fr = setInterval(() => {
          this.refresh();
        }, d));
    }
  }
  Rr(u) {
    var d;
    (u || Go.error("Failed to fetch remote config from PostHog."),
      this._instance.Rr(null != u ? u : {}),
      !1 !== (null == u ? void 0 : u.hasFeatureFlags) &&
        (this._instance.config.advanced_disable_feature_flags_on_first_load ||
          null == (d = this._instance.featureFlags) ||
          d.ensureFlagsLoaded()));
  }
}
var Yo = "gzip-js",
  Jo = "base64",
  Zo = Uint8Array,
  Qo = Uint16Array,
  ea = Uint32Array,
  ia = new Zo([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  ra = new Zo([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  sa = new Zo([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  Ps = function (u, d) {
    for (var h = new Qo(31), v = 0; 31 > v; ++v) h[v] = d += 1 << u[v - 1];
    var g = new ea(h[30]);
    for (v = 1; 30 > v; ++v)
      for (var m = h[v]; h[v + 1] > m; ++m) g[m] = ((m - h[v]) << 5) | v;
    return [h, g];
  },
  ca = Ps(ia, 2),
  ua = ca[1];
((ca[0][28] = 258), (ua[258] = 28));
for (var da = Ps(ra, 0)[1], ha = new Qo(32768), pa = 0; 32768 > pa; ++pa) {
  var va = ((43690 & pa) >>> 1) | ((21845 & pa) << 1);
  ha[pa] =
    (((65280 &
      (va =
        ((61680 & (va = ((52428 & va) >>> 2) | ((13107 & va) << 2))) >>> 4) |
        ((3855 & va) << 4))) >>>
      8) |
      ((255 & va) << 8)) >>>
    1;
}
var Ds = function (u, d, h) {
    for (var v = u.length, g = 0, m = new Qo(d); v > g; ++g) ++m[u[g] - 1];
    var b,
      k = new Qo(d);
    for (g = 0; d > g; ++g) k[g] = (k[g - 1] + m[g - 1]) << 1;
    for (b = new Qo(v), g = 0; v > g; ++g)
      b[g] = ha[k[u[g] - 1]++] >>> (15 - u[g]);
    return b;
  },
  fa = new Zo(288);
for (pa = 0; 144 > pa; ++pa) fa[pa] = 8;
for (pa = 144; 256 > pa; ++pa) fa[pa] = 9;
for (pa = 256; 280 > pa; ++pa) fa[pa] = 7;
for (pa = 280; 288 > pa; ++pa) fa[pa] = 8;
var _a = new Zo(32);
for (pa = 0; 32 > pa; ++pa) _a[pa] = 5;
var ya = Ds(fa, 9),
  ba = Ds(_a, 5),
  zs = function (u) {
    return ((u / 8) | 0) + (7 & u && 1);
  },
  Bs = function (u, d, h) {
    (null == h || h > u.length) && (h = u.length);
    var v = new (u instanceof Qo ? Qo : u instanceof ea ? ea : Zo)(h - d);
    return (v.set(u.subarray(d, h)), v);
  },
  Hs = function (u, d, h) {
    var v = (d / 8) | 0;
    ((u[v] |= h <<= 7 & d), (u[v + 1] |= h >>> 8));
  },
  qs = function (u, d, h) {
    var v = (d / 8) | 0;
    ((u[v] |= h <<= 7 & d), (u[v + 1] |= h >>> 8), (u[v + 2] |= h >>> 16));
  },
  Vs = function (u, d) {
    for (var h = [], v = 0; u.length > v; ++v)
      u[v] && h.push({ s: v, f: u[v] });
    var g = h.length,
      m = h.slice();
    if (!g) return [new Zo(0), 0];
    if (1 == g) {
      var b = new Zo(h[0].s + 1);
      return ((b[h[0].s] = 1), [b, 1]);
    }
    (h.sort(function (u, d) {
      return u.f - d.f;
    }),
      h.push({ s: -1, f: 25001 }));
    var k = h[0],
      S = h[1],
      $ = 0,
      F = 1,
      C = 2;
    for (h[0] = { s: -1, f: k.f + S.f, l: k, r: S }; F != g - 1; )
      ((k = h[h[C].f > h[$].f ? $++ : C++]),
        (S = h[$ != F && h[C].f > h[$].f ? $++ : C++]),
        (h[F++] = { s: -1, f: k.f + S.f, l: k, r: S }));
    var M = m[0].s;
    for (v = 1; g > v; ++v) m[v].s > M && (M = m[v].s);
    var A = new Qo(M + 1),
      G = Ws(h[F - 1], A, 0);
    if (G > d) {
      v = 0;
      var Q = 0,
        te = G - d,
        re = 1 << te;
      for (
        m.sort(function (u, d) {
          return A[d.s] - A[u.s] || u.f - d.f;
        });
        g > v;
        ++v
      ) {
        var se = m[v].s;
        if (d >= A[se]) break;
        ((Q += re - (1 << (G - A[se]))), (A[se] = d));
      }
      for (Q >>>= te; Q > 0; ) {
        var ce = m[v].s;
        d > A[ce] ? (Q -= 1 << (d - A[ce]++ - 1)) : ++v;
      }
      for (; v >= 0 && Q; --v) {
        var ue = m[v].s;
        A[ue] == d && (--A[ue], ++Q);
      }
      G = d;
    }
    return [new Zo(A), G];
  },
  Ws = function (u, d, h) {
    return -1 == u.s
      ? Math.max(Ws(u.l, d, h + 1), Ws(u.r, d, h + 1))
      : (d[u.s] = h);
  },
  Gs = function (u) {
    for (var d = u.length; d && !u[--d]; );
    for (
      var h = new Qo(++d),
        v = 0,
        g = u[0],
        m = 1,
        o = function (u) {
          h[v++] = u;
        },
        b = 1;
      d >= b;
      ++b
    )
      if (u[b] == g && b != d) ++m;
      else {
        if (!g && m > 2) {
          for (; m > 138; m -= 138) o(32754);
          m > 2 &&
            (o(m > 10 ? ((m - 11) << 5) | 28690 : ((m - 3) << 5) | 12305),
            (m = 0));
        } else if (m > 3) {
          for (o(g), --m; m > 6; m -= 6) o(8304);
          m > 2 && (o(((m - 3) << 5) | 8208), (m = 0));
        }
        for (; m--; ) o(g);
        ((m = 1), (g = u[b]));
      }
    return [h.subarray(0, v), d];
  },
  Ys = function (u, d) {
    for (var h = 0, v = 0; d.length > v; ++v) h += u[v] * d[v];
    return h;
  },
  Js = function (u, d, h) {
    var v = h.length,
      g = zs(d + 2);
    ((u[g] = 255 & v),
      (u[g + 1] = v >>> 8),
      (u[g + 2] = 255 ^ u[g]),
      (u[g + 3] = 255 ^ u[g + 1]));
    for (var m = 0; v > m; ++m) u[g + m + 4] = h[m];
    return 8 * (g + 4 + v);
  },
  Ks = function (u, d, h, v, g, m, b, k, S, $, F) {
    (Hs(d, F++, h), ++g[256]);
    for (
      var C = Vs(g, 15),
        M = C[0],
        A = C[1],
        G = Vs(m, 15),
        Q = G[0],
        te = G[1],
        re = Gs(M),
        se = re[0],
        ce = re[1],
        ue = Gs(Q),
        pe = ue[0],
        ve = ue[1],
        ge = new Qo(19),
        _e = 0;
      se.length > _e;
      ++_e
    )
      ge[31 & se[_e]]++;
    for (_e = 0; pe.length > _e; ++_e) ge[31 & pe[_e]]++;
    for (
      var be = Vs(ge, 7), Ee = be[0], $e = be[1], Fe = 19;
      Fe > 4 && !Ee[sa[Fe - 1]];
      --Fe
    );
    var Ce,
      Ie,
      Ae,
      qe,
      je = ($ + 5) << 3,
      Ne = Ys(g, fa) + Ys(m, _a) + b,
      ze =
        Ys(g, M) +
        Ys(m, Q) +
        b +
        14 +
        3 * Fe +
        Ys(ge, Ee) +
        (2 * ge[16] + 3 * ge[17] + 7 * ge[18]);
    if (Ne >= je && ze >= je) return Js(d, F, u.subarray(S, S + $));
    if ((Hs(d, F, 1 + (Ne > ze)), (F += 2), Ne > ze)) {
      ((Ce = Ds(M, A)), (Ie = M), (Ae = Ds(Q, te)), (qe = Q));
      var He = Ds(Ee, $e);
      for (
        Hs(d, F, ce - 257),
          Hs(d, F + 5, ve - 1),
          Hs(d, F + 10, Fe - 4),
          F += 14,
          _e = 0;
        Fe > _e;
        ++_e
      )
        Hs(d, F + 3 * _e, Ee[sa[_e]]);
      F += 3 * Fe;
      for (var Ve = [se, pe], We = 0; 2 > We; ++We) {
        var Xe = Ve[We];
        for (_e = 0; Xe.length > _e; ++_e)
          (Hs(d, F, He[(Ke = 31 & Xe[_e])]),
            (F += Ee[Ke]),
            Ke > 15 && (Hs(d, F, (Xe[_e] >>> 5) & 127), (F += Xe[_e] >>> 12)));
      }
    } else ((Ce = ya), (Ie = fa), (Ae = ba), (qe = _a));
    for (_e = 0; k > _e; ++_e)
      if (v[_e] > 255) {
        var Ke;
        (qs(d, F, Ce[257 + (Ke = (v[_e] >>> 18) & 31)]),
          (F += Ie[Ke + 257]),
          Ke > 7 && (Hs(d, F, (v[_e] >>> 23) & 31), (F += ia[Ke])));
        var Ge = 31 & v[_e];
        (qs(d, F, Ae[Ge]),
          (F += qe[Ge]),
          Ge > 3 && (qs(d, F, (v[_e] >>> 5) & 8191), (F += ra[Ge])));
      } else (qs(d, F, Ce[v[_e]]), (F += Ie[v[_e]]));
    return (qs(d, F, Ce[256]), F + Ie[256]);
  },
  wa = new ea([
    65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
  ]),
  ka = (function () {
    for (var u = new ea(256), d = 0; 256 > d; ++d) {
      for (var h = d, v = 9; --v; ) h = (1 & h && 3988292384) ^ (h >>> 1);
      u[d] = h;
    }
    return u;
  })(),
  Zs = function (u, d, h) {
    for (; h; ++d) ((u[d] = h), (h >>>= 8));
  };
var Ea = !!kt || !!xt,
  Pa = "text/plain",
  Sa = !1,
  nn = (u, d) => {
    var [h, v] = u.split("#"),
      [g, m] = h.split("?");
    if (!m) return u;
    var b = m
      .split("&")
      .filter((u) => u.split("=")[0] !== d)
      .join("&");
    return g + (b ? "?" + b : "") + (v ? "#" + v : "");
  },
  on = function (u, d, h) {
    var v;
    void 0 === h && (h = !0);
    var [g, m] = u.split("?"),
      b = f({}, d),
      k =
        null !==
          (v =
            null == m
              ? void 0
              : m.split("&").map((u) => {
                  var d,
                    [v, g] = u.split("="),
                    m = h && null !== (d = b[v]) && void 0 !== d ? d : g;
                  return (delete b[v], v + "=" + m);
                })) && void 0 !== v
          ? v
          : [],
      S = (function (u, d) {
        var h, v;
        void 0 === d && (d = "&");
        var g = [];
        return (
          Xi(u, function (u, d) {
            N(u) ||
              N(d) ||
              "undefined" === d ||
              ((h = encodeURIComponent(
                ((u) => u instanceof File)(u) ? u.name : u.toString(),
              )),
              (v = encodeURIComponent(d)),
              (g[g.length] = v + "=" + h));
          }),
          g.join(d)
        );
      })(b);
    return (S && k.push(S), g + "?" + k.join("&"));
  },
  an = (u, d) =>
    JSON.stringify(u, (u, d) => ("bigint" == typeof d ? d.toString() : d), d),
  ln = (u) => {
    if (u.tr) return u.tr;
    var { data: d, compression: h } = u;
    if (d) {
      if (h === Yo) {
        var v = (function (u, d) {
          void 0 === d && (d = {});
          var h = (function () {
              var u = 4294967295;
              return {
                p(d) {
                  for (var h = u, v = 0; d.length > v; ++v)
                    h = ka[(255 & h) ^ d[v]] ^ (h >>> 8);
                  u = h;
                },
                d: () => 4294967295 ^ u,
              };
            })(),
            v = u.length;
          h.p(u);
          var g,
            m,
            b,
            k,
            S =
              ((k = 10 + (((g = d).filename && g.filename.length + 1) || 0)),
              (function (u, d, h, v) {
                var g = u.length,
                  m = new Zo(v + g + 5 * (1 + Math.floor(g / 7e3)) + 8),
                  b = m.subarray(v, m.length - 8),
                  k = 0;
                if (!d || 8 > g)
                  for (var S = 0; g >= S; S += 65535) {
                    var $ = S + 65535;
                    g > $
                      ? (k = Js(b, k, u.subarray(S, $)))
                      : ((b[S] = !0), (k = Js(b, k, u.subarray(S, g))));
                  }
                else {
                  for (
                    var F = wa[d - 1],
                      C = F >>> 13,
                      M = 8191 & F,
                      A = (1 << h) - 1,
                      G = new Qo(32768),
                      Q = new Qo(A + 1),
                      te = Math.ceil(h / 3),
                      re = 2 * te,
                      y = function (d) {
                        return (u[d] ^ (u[d + 1] << te) ^ (u[d + 2] << re)) & A;
                      },
                      se = new ea(25e3),
                      ce = new Qo(288),
                      ue = new Qo(32),
                      pe = 0,
                      ve = 0,
                      ge = ((S = 0), 0),
                      _e = 0,
                      be = 0;
                    g > S;
                    ++S
                  ) {
                    var Ee = y(S),
                      $e = 32767 & S,
                      Fe = Q[Ee];
                    if (((G[$e] = Fe), (Q[Ee] = $e), S >= _e)) {
                      var Ce = g - S;
                      if ((pe > 7e3 || ge > 24576) && Ce > 423) {
                        ((k = Ks(u, b, 0, se, ce, ue, ve, ge, be, S - be, k)),
                          (ge = pe = ve = 0),
                          (be = S));
                        for (var Ie = 0; 286 > Ie; ++Ie) ce[Ie] = 0;
                        for (Ie = 0; 30 > Ie; ++Ie) ue[Ie] = 0;
                      }
                      var Ae = 2,
                        qe = 0,
                        je = M,
                        Ne = ($e - Fe) & 32767;
                      if (Ce > 2 && Ee == y(S - Ne))
                        for (
                          var ze = Math.min(C, Ce) - 1,
                            He = Math.min(32767, S),
                            Ve = Math.min(258, Ce);
                          He >= Ne && --je && $e != Fe;
                        ) {
                          if (u[S + Ae] == u[S + Ae - Ne]) {
                            for (
                              var We = 0;
                              Ve > We && u[S + We] == u[S + We - Ne];
                              ++We
                            );
                            if (We > Ae) {
                              if (((Ae = We), (qe = Ne), We > ze)) break;
                              var Xe = Math.min(Ne, We - 2),
                                Ke = 0;
                              for (Ie = 0; Xe > Ie; ++Ie) {
                                var Ge = (S - Ne + Ie + 32768) & 32767,
                                  Ye = (Ge - G[Ge] + 32768) & 32767;
                                Ye > Ke && ((Ke = Ye), (Fe = Ge));
                              }
                            }
                          }
                          Ne += (($e = Fe) - (Fe = G[$e]) + 32768) & 32767;
                        }
                      if (qe) {
                        se[ge++] = 268435456 | (ua[Ae] << 18) | da[qe];
                        var Je = 31 & ua[Ae],
                          Ze = 31 & da[qe];
                        ((ve += ia[Je] + ra[Ze]),
                          ++ce[257 + Je],
                          ++ue[Ze],
                          (_e = S + Ae),
                          ++pe);
                      } else ((se[ge++] = u[S]), ++ce[u[S]]);
                    }
                  }
                  k = Ks(u, b, !0, se, ce, ue, ve, ge, be, S - be, k);
                }
                return Bs(m, 0, v + zs(k) + 8);
              })(
                (m = u),
                null == (b = d).level ? 6 : b.level,
                null == b.mem
                  ? Math.ceil(
                      1.5 * Math.max(8, Math.min(13, Math.log(m.length))),
                    )
                  : 12 + b.mem,
                k,
              )),
            $ = S.length;
          return (
            (function (u, d) {
              var h = d.filename;
              if (
                ((u[0] = 31),
                (u[1] = 139),
                (u[2] = 8),
                (u[8] = 2 > d.level ? 4 : 9 == d.level ? 2 : 0),
                (u[9] = 3),
                0 != d.mtime &&
                  Zs(u, 4, Math.floor(new Date(d.mtime || Date.now()) / 1e3)),
                h)
              ) {
                u[3] = 8;
                for (var v = 0; h.length >= v; ++v) u[v + 10] = h.charCodeAt(v);
              }
            })(S, d),
            Zs(S, $ - 8, h.d()),
            Zs(S, $ - 4, v),
            S
          );
        })(
          (function (u) {
            var d = u.length;
            if ("undefined" != typeof TextEncoder)
              return new TextEncoder().encode(u);
            for (
              var h = new Zo(u.length + (u.length >>> 1)),
                v = 0,
                n = function (u) {
                  h[v++] = u;
                },
                g = 0;
              d > g;
              ++g
            ) {
              if (v + 5 > h.length) {
                var m = new Zo(v + 8 + ((d - g) << 1));
                (m.set(h), (h = m));
              }
              var b = u.charCodeAt(g);
              128 > b
                ? n(b)
                : 2048 > b
                  ? (n(192 | (b >>> 6)), n(128 | (63 & b)))
                  : b > 55295 && 57344 > b
                    ? (n(
                        240 |
                          ((b =
                            (65536 + (1047552 & b)) |
                            (1023 & u.charCodeAt(++g))) >>>
                            18),
                      ),
                      n(128 | ((b >>> 12) & 63)),
                      n(128 | ((b >>> 6) & 63)),
                      n(128 | (63 & b)))
                    : (n(224 | (b >>> 12)),
                      n(128 | ((b >>> 6) & 63)),
                      n(128 | (63 & b)));
            }
            return Bs(h, 0, v);
          })(an(d)),
          { mtime: 0 },
        );
        return {
          contentType: Pa,
          body: v.buffer.slice(v.byteOffset, v.byteOffset + v.byteLength),
          estimatedSize: v.byteLength,
        };
      }
      if (h === Jo) {
        var g = (function (u) {
            return u
              ? btoa(
                  encodeURIComponent(u).replace(/%([0-9A-F]{2})/g, (u, d) =>
                    String.fromCharCode(parseInt(d, 16)),
                  ),
                )
              : u;
          })(an(d)),
          m = ((u) =>
            "data=" + encodeURIComponent("string" == typeof u ? u : an(u)))(g);
        return {
          contentType: "application/x-www-form-urlencoded",
          body: m,
          estimatedSize: new Blob([m]).size,
        };
      }
      var b = an(d);
      return {
        contentType: "application/json",
        body: b,
        estimatedSize: new Blob([b]).size,
      };
    }
  },
  un = (u) => {
    var d,
      h,
      v,
      g = ln(u);
    return !g ||
      ((h = u.compression),
      (v = Ur(u.url, "compression")),
      h !== It.GZipJS && v !== It.GZipJS && "gzip" !== v) ||
      ((d = g.body) instanceof ArrayBuffer
        ? w(new Uint8Array(d))
        : ArrayBuffer.isView(d) &&
          w(new Uint8Array(d.buffer, d.byteOffset, d.byteLength)))
      ? { url: u.url, encodedBody: g }
      : ((Sa = !0),
        {
          url: nn(u.url, "compression"),
          encodedBody: ln(f({}, u, { compression: void 0, tr: void 0 })),
        });
  },
  $a = (function () {
    var u = p(function* (u) {
      var d = an(u.data),
        h = yield (function (u, d, h) {
          return T.apply(this, arguments);
        })(d, Ct.DEBUG, { rethrow: !0 });
      if (!h) return u;
      var v = yield h.arrayBuffer();
      return f({}, u, {
        tr: { contentType: Pa, body: v, estimatedSize: v.byteLength },
      });
    });
    return function (d) {
      return u.apply(this, arguments);
    };
  })(),
  dn = (u, d) =>
    on(u, {
      _: new Date().getTime().toString(),
      ver: Ct.JS_SDK_VERSION,
      compression: d,
    }),
  Fa = [];
(xt &&
  Fa.push({
    transport: "fetch",
    method(u) {
      var d,
        { url: h, encodedBody: v } = un(u),
        { contentType: g, body: m, estimatedSize: b } = null != v ? v : {},
        k = new Headers();
      (Xi(u.headers, function (u, d) {
        k.append(d, u);
      }),
        g && k.append("Content-Type", g));
      var S = null;
      if (Et) {
        var $ = new Et();
        S = {
          signal: $.signal,
          timeout: setTimeout(() => $.abort(), u.timeout),
        };
      }
      xt(
        h,
        f(
          {
            method: (null == u ? void 0 : u.method) || "GET",
            headers: k,
            keepalive: "POST" === u.method && 52428.8 > (b || 0),
            body: m,
            signal: null == (d = S) ? void 0 : d.signal,
          },
          u.fetchOptions,
        ),
      )
        .then((d) =>
          d.text().then((h) => {
            var v = { statusCode: d.status, text: h };
            if (200 === d.status)
              try {
                v.json = JSON.parse(h);
              } catch (u) {
                _r.error(u);
              }
            null == u.callback || u.callback(v);
          }),
        )
        .catch((d) => {
          (_r.error(d),
            null == u.callback || u.callback({ statusCode: 0, error: d }));
        })
        .finally(() => (S ? clearTimeout(S.timeout) : null));
    },
  }),
  kt &&
    Fa.push({
      transport: "XHR",
      method(u) {
        var d = new kt(),
          { url: h, encodedBody: v } = un(u);
        d.open(u.method || "GET", h, !0);
        var { contentType: g, body: m } = null != v ? v : {};
        (Xi(u.headers, function (u, h) {
          d.setRequestHeader(h, u);
        }),
          g && d.setRequestHeader("Content-Type", g),
          u.timeout && (d.timeout = u.timeout),
          u.disableXHRCredentials || (d.withCredentials = !0),
          (d.onreadystatechange = () => {
            if (4 === d.readyState) {
              var h = { statusCode: d.status, text: d.responseText };
              if (200 === d.status)
                try {
                  h.json = JSON.parse(d.responseText);
                } catch (u) {}
              null == u.callback || u.callback(h);
            }
          }),
          d.send(m));
      },
    }),
  null != yt &&
    yt.sendBeacon &&
    Fa.push({
      transport: "sendBeacon",
      method(u) {
        try {
          var { url: d, encodedBody: h } = un(u),
            v = on(d, { beacon: "1" }),
            { contentType: g, body: m } = null != h ? h : {};
          if (!m) return;
          var b = m instanceof Blob ? m : new Blob([m], { type: g });
          yt.sendBeacon(v, b);
        } catch (u) {}
      },
    }));
var Ca = 3e3;
class pn {
  constructor(u, d) {
    ((this.Ar = !0),
      (this.Nr = []),
      (this.$r = et(
        (null == d ? void 0 : d.flush_interval_ms) || Ca,
        250,
        5e3,
        _r.createLogger("flush interval"),
        Ca,
      )),
      (this.Dr = u));
  }
  enqueue(u) {
    (this.Nr.push(u), this.qr || this.jr());
  }
  unload() {
    this.Hr();
    var u = this.Nr.length > 0 ? this.Ur() : {},
      d = Object.values(u);
    [
      ...d.filter((u) => 0 === u.url.indexOf("/e")),
      ...d.filter((u) => 0 !== u.url.indexOf("/e")),
    ].map((u) => {
      this.Dr(f({}, u, { transport: "sendBeacon" }));
    });
  }
  enable() {
    ((this.Ar = !1), this.jr());
  }
  jr() {
    var u = this;
    this.Ar ||
      (this.qr = setTimeout(() => {
        if ((this.Hr(), this.Nr.length > 0)) {
          var d = this.Ur(),
            i = function () {
              var v = d[h],
                g = new Date().getTime();
              (v.data &&
                jt(v.data) &&
                Xi(v.data, (u) => {
                  ((u.offset = Math.abs(u.timestamp - g)), delete u.timestamp);
                }),
                u.Dr(v));
            };
          for (var h in d) i();
        }
      }, this.$r));
  }
  Hr() {
    (clearTimeout(this.qr), (this.qr = void 0));
  }
  Ur() {
    var u = {};
    return (
      Xi(this.Nr, (d) => {
        var h,
          v = d,
          g = (v ? v.batchKey : null) || v.url;
        (N(u[g]) && (u[g] = f({}, v, { data: [] })),
          null == (h = u[g].data) || h.push(v.data));
      }),
      (this.Nr = []),
      u
    );
  }
}
var Ma = ["retriesPerformedSoFar"];
class _n {
  constructor(u) {
    ((this.Br = !1),
      (this.zr = 3e3),
      (this.Nr = []),
      (this._instance = u),
      (this.Nr = []),
      (this.Vr = !0),
      !N(_t) &&
        "onLine" in _t.navigator &&
        ((this.Vr = _t.navigator.onLine),
        (this.Wr = () => {
          ((this.Vr = !0), this.Zr());
        }),
        (this.Gr = () => {
          this.Vr = !1;
        }),
        nr(_t, "online", this.Wr),
        nr(_t, "offline", this.Gr)));
  }
  get length() {
    return this.Nr.length;
  }
  retriableRequest(u) {
    var { retriesPerformedSoFar: d } = u,
      h = _(u, Ma);
    (V(d) && (h.url = on(h.url, { retry_count: d })),
      this._instance._send_request(
        f({}, h, {
          callback: (u) => {
            200 === u.statusCode ||
            (u.statusCode >= 400 && 500 > u.statusCode) ||
            (null != d ? d : 0) >= 10
              ? null == h.callback || h.callback(u)
              : this.Qr(f({ retriesPerformedSoFar: d }, h));
          },
        }),
      ));
  }
  Qr(u) {
    var d = u.retriesPerformedSoFar || 0;
    u.retriesPerformedSoFar = d + 1;
    var h = (function (u) {
        var d = 3e3 * Math.pow(2, u),
          h = d / 2,
          v = Math.min(18e5, d),
          g = Math.random() - 0.5;
        return Math.ceil(v + g * (v - h));
      })(d),
      v = Date.now() + h;
    this.Nr.push({ retryAt: v, requestOptions: u });
    var g = "Enqueued failed request for retry in " + h;
    (navigator.onLine || (g += " (Browser is offline)"),
      _r.warn(g),
      this.Br || ((this.Br = !0), this.Jr()));
  }
  Jr() {
    if ((this.Kr && clearTimeout(this.Kr), 0 === this.Nr.length))
      return ((this.Br = !1), void (this.Kr = void 0));
    this.Kr = setTimeout(() => {
      (this.Vr && this.Nr.length > 0 && this.Zr(), this.Jr());
    }, this.zr);
  }
  Zr() {
    var u = Date.now(),
      d = [],
      h = this.Nr.filter((h) => u > h.retryAt || (d.push(h), !1));
    if (((this.Nr = d), h.length > 0))
      for (var { requestOptions: v } of h) this.retriableRequest(v);
  }
  unload() {
    for (var { requestOptions: u } of (this.Kr &&
      (clearTimeout(this.Kr), (this.Kr = void 0)),
    (this.Br = !1),
    N(_t) ||
      (this.Wr &&
        (_t.removeEventListener("online", this.Wr), (this.Wr = void 0)),
      this.Gr &&
        (_t.removeEventListener("offline", this.Gr), (this.Gr = void 0))),
    this.Nr))
      try {
        this._instance._send_request(f({}, u, { transport: "sendBeacon" }));
      } catch (_t) {
        _r.error(_t);
      }
    this.Nr = [];
  }
}
class gn {
  constructor(u) {
    ((this.Yr = () => {
      var u, d, h, v;
      this.Xr || (this.Xr = {});
      var g = this.scrollElement(),
        m = this.scrollY(),
        b = g ? Math.max(0, g.scrollHeight - g.clientHeight) : 0,
        k = m + ((null == g ? void 0 : g.clientHeight) || 0),
        S = (null == g ? void 0 : g.scrollHeight) || 0;
      ((this.Xr.lastScrollY = Math.ceil(m)),
        (this.Xr.maxScrollY = Math.max(
          m,
          null !== (u = this.Xr.maxScrollY) && void 0 !== u ? u : 0,
        )),
        (this.Xr.maxScrollHeight = Math.max(
          b,
          null !== (d = this.Xr.maxScrollHeight) && void 0 !== d ? d : 0,
        )),
        (this.Xr.lastContentY = k),
        (this.Xr.maxContentY = Math.max(
          k,
          null !== (h = this.Xr.maxContentY) && void 0 !== h ? h : 0,
        )),
        (this.Xr.maxContentHeight = Math.max(
          S,
          null !== (v = this.Xr.maxContentHeight) && void 0 !== v ? v : 0,
        )));
    }),
      (this._instance = u));
  }
  get ei() {
    return this._instance.config.scroll_root_selector;
  }
  getContext() {
    return this.Xr;
  }
  resetContext() {
    var u = this.Xr;
    return (setTimeout(this.Yr, 0), u);
  }
  startMeasuringScrollPosition() {
    (nr(_t, "scroll", this.Yr, { capture: !0 }),
      nr(_t, "scrollend", this.Yr, { capture: !0 }),
      nr(_t, "resize", this.Yr));
  }
  scrollElement() {
    if (!this.ei) return null == _t ? void 0 : _t.document.documentElement;
    var u = jt(this.ei) ? this.ei : [this.ei];
    for (var d of u) {
      var h = null == _t ? void 0 : _t.document.querySelector(d);
      if (h) return h;
    }
  }
  scrollY() {
    if (this.ei) {
      var u = this.scrollElement();
      return (u && u.scrollTop) || 0;
    }
    return (
      (_t &&
        (_t.scrollY ||
          _t.pageYOffset ||
          _t.document.documentElement.scrollTop)) ||
      0
    );
  }
  scrollX() {
    if (this.ei) {
      var u = this.scrollElement();
      return (u && u.scrollLeft) || 0;
    }
    return (
      (_t &&
        (_t.scrollX ||
          _t.pageXOffset ||
          _t.document.documentElement.scrollLeft)) ||
      0
    );
  }
}
var mn = (u) =>
  Xr(
    null == u ? void 0 : u.config.mask_personal_data_properties,
    null == u ? void 0 : u.config.custom_personal_data_properties,
  );
class bn {
  constructor(u, d, h, v) {
    ((this.ti = (u) => {
      var d = this.ri();
      if (!d || d.sessionId !== u) {
        var h = { sessionId: u, props: this.ii(this._instance) };
        this.ni.register({ [Fs]: h });
      }
    }),
      (this._instance = u),
      (this.si = d),
      (this.ni = h),
      (this.ii = v || mn),
      this.si.onSessionId(this.ti));
  }
  ri() {
    return this.ni.props[Fs];
  }
  getSetOnceProps() {
    var u,
      d = null == (u = this.ri()) ? void 0 : u.props;
    return d
      ? "r" in d
        ? Qr(d)
        : {
            $referring_domain: d.referringDomain,
            $pathname: d.initialPathName,
            utm_source: d.utm_source,
            utm_campaign: d.utm_campaign,
            utm_medium: d.utm_medium,
            utm_content: d.utm_content,
            utm_term: d.utm_term,
          }
      : {};
  }
  getSessionProps() {
    var u = {};
    return (
      Xi(ir(this.getSetOnceProps()), (d, h) => {
        ("$current_url" === h && (h = "url"),
          (u["$session_entry_" + I(h)] = d));
      }),
      u
    );
  }
}
class yn {
  constructor() {
    this.oi = {};
  }
  on(u, d) {
    return (
      this.oi[u] || (this.oi[u] = []),
      this.oi[u].push(d),
      () => {
        this.oi[u] = this.oi[u].filter((u) => u !== d);
      }
    );
  }
  emit(u, d) {
    for (var h of this.oi[u] || []) h(d);
    for (var v of this.oi["*"] || []) v(u, d);
  }
}
var Ia = mr("[SessionId]");
class xn {
  on(u, d) {
    return this.ai.on(u, d);
  }
  constructor(u, d, h) {
    var v;
    if (
      ((this.ui = []),
      (this.li = void 0),
      (this.ai = new yn()),
      (this.hi = (u, d) =>
        !(!V(u) || !V(d)) && Math.abs(u - d) > this.sessionTimeoutMs),
      !u.persistence)
    )
      throw new Error(
        "SessionIdManager requires a PostHogPersistence instance",
      );
    if (u.config.cookieless_mode === Qs)
      throw new Error(
        'SessionIdManager cannot be used with cookieless_mode="always"',
      );
    ((this.qt = u.config),
      (this.ni = u.persistence),
      (this.ci = void 0),
      (this.di = void 0),
      (this._sessionStartTimestamp = null),
      (this._sessionActivityTimestamp = null),
      (this.vi = d || vr),
      (this.fi = h || vr));
    var g = this.qt.persistence_name || this.qt.token;
    if (
      ((this._sessionTimeoutMs =
        1e3 *
        et(
          this.qt.session_idle_timeout_seconds || 1800,
          60,
          36e3,
          Ia.createLogger("session_idle_timeout_seconds"),
          1800,
        )),
      u.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }),
      this.pi(),
      (this.gi = "ph_" + g + "_window_id"),
      (this.mi = "ph_" + g + "_primary_window_exists"),
      this.yi())
    ) {
      var m = Un.F(this.gi),
        b = Un.F(this.mi);
      (m && !b ? (this.ci = m) : Un.q(this.gi), Un.N(this.mi, !0));
    }
    if (null != (v = this.qt.bootstrap) && v.sessionID)
      try {
        var k = (() => {
          var u = this.qt.bootstrap.sessionID.replace(/-/g, "");
          if (32 !== u.length) throw new Error("Not a valid UUID");
          if ("7" !== u[12]) throw new Error("Not a UUIDv7");
          return parseInt(u.substring(0, 12), 16);
        })();
        this.bi(this.qt.bootstrap.sessionID, new Date().getTime(), k);
      } catch (u) {
        Ia.error("Invalid sessionID in bootstrap", u);
      }
    this.wi();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(u) {
    return (
      N(this.ui) && (this.ui = []),
      this.ui.push(u),
      this.di && u(this.di, this.ci),
      () => {
        this.ui = this.ui.filter((d) => d !== u);
      }
    );
  }
  yi() {
    return "memory" !== this.qt.persistence && !this.ni._r && Un.R();
  }
  xi(u) {
    u !== this.ci && ((this.ci = u), this.yi() && Un.N(this.gi, u));
  }
  Si() {
    return this.ci ? this.ci : this.yi() ? Un.F(this.gi) : null;
  }
  bi(u, d, h) {
    (u === this.di &&
      d === this._sessionActivityTimestamp &&
      h === this._sessionStartTimestamp) ||
      ((this._sessionStartTimestamp = h),
      (this._sessionActivityTimestamp = d),
      (this.di = u),
      this.ni.register({ [ns]: [d, u, h] }));
  }
  ki() {
    var u = this.ni.props[ns];
    return (jt(u) && 2 === u.length && u.push(u[0]), u || [0, null, 0]);
  }
  resetSessionId() {
    this.bi(null, null, null);
  }
  destroy() {
    (clearTimeout(this.Ci),
      (this.Ci = void 0),
      this.li &&
        _t &&
        (_t.removeEventListener(cn, this.li, { capture: !1 }),
        (this.li = void 0)),
      (this.ui = []));
  }
  wi() {
    ((this.li = () => {
      this.yi() && Un.q(this.mi);
    }),
      nr(_t, cn, this.li, { capture: !1 }));
  }
  checkAndGetSessionAndWindowId(u, d) {
    if (
      (void 0 === u && (u = !1),
      void 0 === d && (d = null),
      this.qt.cookieless_mode === Qs)
    )
      throw new Error(
        'checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"',
      );
    var h = d || new Date().getTime(),
      [v, g, m] = this.ki(),
      b = this.Si(),
      k = V(m) && Math.abs(h - m) > 864e5,
      S = !1,
      $ = !g,
      F = !$ && !u && this.hi(h, v);
    $ || F || k
      ? ((g = this.vi()),
        (b = this.fi()),
        Ia.info("new session ID generated", {
          sessionId: g,
          windowId: b,
          changeReason: {
            noSessionId: $,
            activityTimeout: F,
            sessionPastMaximumLength: k,
          },
        }),
        (m = h),
        (S = !0))
      : b || ((b = this.fi()), (S = !0));
    var C = V(v) && u && !k ? v : h,
      M = V(m) ? m : new Date().getTime();
    return (
      this.xi(b),
      this.bi(g, C, M),
      u || this.pi(),
      S &&
        this.ui.forEach((u) =>
          u(
            g,
            b,
            S
              ? {
                  noSessionId: $,
                  activityTimeout: F,
                  sessionPastMaximumLength: k,
                }
              : void 0,
          ),
        ),
      {
        sessionId: g,
        windowId: b,
        sessionStartTimestamp: M,
        changeReason: S
          ? { noSessionId: $, activityTimeout: F, sessionPastMaximumLength: k }
          : void 0,
        lastActivityTimestamp: v,
      }
    );
  }
  pi() {
    (clearTimeout(this.Ci),
      (this.Ci = setTimeout(() => {
        var [u] = this.ki();
        if (this.hi(new Date().getTime(), u)) {
          var d = this.di;
          (this.resetSessionId(),
            this.ai.emit("forcedIdleReset", { idleSessionId: d }));
        }
      }, 1.1 * this.sessionTimeoutMs)));
  }
}
var En = function (u, d) {
    if (!u) return !1;
    var h = u.userAgent;
    if (h && R(h, d)) return !0;
    try {
      var v = null == u ? void 0 : u.userAgentData;
      if (
        null != v &&
        v.brands &&
        v.brands.some((u) => R(null == u ? void 0 : u.brand, d))
      )
        return !0;
    } catch (u) {}
    return !!u.webdriver;
  },
  Sn = function (u, d) {
    if (
      !(function (u) {
        try {
          new RegExp(u);
        } catch (u) {
          return !1;
        }
        return !0;
      })(d)
    )
      return !1;
    try {
      return new RegExp(d).test(u);
    } catch (u) {
      return !1;
    }
  };
function $n(u, d, h) {
  return an({
    distinct_id: u,
    userPropertiesToSet: d,
    userPropertiesToSetOnce: h,
  });
}
var Ra = {
    exact: (u, d) => d.some((d) => u.some((u) => d === u)),
    is_not: (u, d) => d.every((d) => u.every((u) => d !== u)),
    regex: (u, d) => d.some((d) => u.some((u) => Sn(d, u))),
    not_regex: (u, d) => d.every((d) => u.every((u) => !Sn(d, u))),
    icontains: (u, d) =>
      d.map(kn).some((d) => u.map(kn).some((u) => d.includes(u))),
    not_icontains: (u, d) =>
      d.map(kn).every((d) => u.map(kn).every((u) => !d.includes(u))),
    gt: (u, d) =>
      d.some((d) => {
        var h = parseFloat(d);
        return !isNaN(h) && u.some((u) => h > parseFloat(u));
      }),
    lt: (u, d) =>
      d.some((d) => {
        var h = parseFloat(d);
        return !isNaN(h) && u.some((u) => h < parseFloat(u));
      }),
  },
  kn = (u) => u.toLowerCase();
function Rn(u, d) {
  return (
    !u ||
    Object.entries(u).every((u) => {
      var [h, v] = u,
        g = null == d ? void 0 : d[h];
      if (N(g) || B(g)) return !1;
      var m = [String(g)],
        b = Ra[v.operator];
      return !!b && b(v.values, m);
    })
  );
}
var Ta = "custom",
  Oa = "i.posthog.com",
  Aa = /^\/static\//;
class Cn {
  constructor(u) {
    ((this.Ii = {}), (this.instance = u));
  }
  get apiHost() {
    var u = this.instance.config.api_host.trim().replace(/\/$/, "");
    return "https://app.posthog.com" === u ? "https://us.i.posthog.com" : u;
  }
  get flagsApiHost() {
    var u = this.instance.config.flags_api_host;
    return u ? u.trim().replace(/\/$/, "") : this.apiHost;
  }
  get uiHost() {
    var u,
      d =
        null == (u = this.instance.config.ui_host)
          ? void 0
          : u.replace(/\/$/, "");
    return (
      d || (d = this.apiHost.replace("." + Oa, ".posthog.com")),
      "https://app.posthog.com" === d ? "https://us.posthog.com" : d
    );
  }
  get region() {
    return (
      this.Ii[this.apiHost] ||
        (this.Ii[this.apiHost] =
          /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
            ? "us"
            : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
              ? "eu"
              : Ta),
      this.Ii[this.apiHost]
    );
  }
  Ti(u) {
    var d = this.instance.config.__preview_external_dependency_versioned_paths;
    if ("string" == typeof d && Aa.test(u))
      return d.trim().replace(/\/$/, "") || void 0;
  }
  endpointFor(u, d) {
    if (
      (void 0 === d && (d = ""),
      d && (d = "/" === d[0] ? d : "/" + d),
      "ui" === u)
    )
      return this.uiHost + d;
    if ("flags" === u) return this.flagsApiHost + d;
    if ("assets" === u) {
      var h = this.Ti(d);
      if (h) return "" + h + d;
    }
    if (this.region === Ta) return this.apiHost + d;
    var v = Oa + d;
    switch (u) {
      case "assets":
        return "https://" + this.region + "-assets." + v;
      case "api":
        return "https://" + this.region + "." + v;
    }
  }
}
var La = mr("[Surveys]"),
  qa = "seenSurvey_",
  Da = [ko, $o, Po],
  ja = { ignoreConditions: !1, ignoreDelay: !1, displayType: zo },
  Na = mr("[PostHog ExternalIntegrations]"),
  Ua = {
    intercom: "intercom-integration",
    crispChat: "crisp-chat-integration",
  };
class Nn {
  constructor(u) {
    this._instance = u;
  }
  lr(u, d) {
    var h;
    null == (h = $t.__PosthogExtensions__) ||
      null == h.loadExternalDependency ||
      h.loadExternalDependency(this._instance, u, (u) => {
        if (u) return Na.error("failed to load script", u);
        d();
      });
  }
  startIfEnabledOrStop() {
    var u = this,
      e = function (d) {
        var v, g, m;
        (!h ||
          (null != (v = $t.__PosthogExtensions__) &&
            null != (v = v.integrations) &&
            v[d]) ||
          u.lr(Ua[d], () => {
            var h;
            null == (h = $t.__PosthogExtensions__) ||
              null == (h = h.integrations) ||
              null == (h = h[d]) ||
              h.start(u._instance);
          }),
          !h &&
            null != (g = $t.__PosthogExtensions__) &&
            null != (g = g.integrations) &&
            g[d] &&
            (null == (m = $t.__PosthogExtensions__) ||
              null == (m = m.integrations) ||
              null == (m = m[d]) ||
              m.stop()));
      };
    for (var [d, h] of Object.entries(
      null !== (v = this._instance.config.integrations) && void 0 !== v
        ? v
        : {},
    )) {
      var v;
      e(d);
    }
  }
}
var za,
  Ha = {},
  Ba = 0,
  Hn = () => {},
  Va =
    'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
  Wa = "Surveys module not available",
  Xa = "sanitize_properties is deprecated. Use before_send instead",
  Ka = "Invalid value for property_denylist config: ",
  Ga = "posthog",
  Ya =
    !Ea &&
    -1 === (null == St ? void 0 : St.indexOf("MSIE")) &&
    -1 === (null == St ? void 0 : St.indexOf("Mozilla")),
  Kn = (u) => {
    var d;
    return f(
      {
        api_host: "https://us.i.posthog.com",
        flags_api_host: null,
        ui_host: null,
        token: "",
        autocapture: !0,
        cross_subdomain_cookie: sr(null == bt ? void 0 : bt.location),
        persistence: "localStorage+cookie",
        persistence_name: "",
        cookie_persisted_properties: [],
        loaded: Hn,
        save_campaign_params: !0,
        custom_campaign_params: [],
        custom_blocked_useragents: [],
        save_referrer: !0,
        capture_pageleave: "if_capture_pageview",
        defaults: null != u ? u : "unset",
        __preview_deferred_init_extensions: !1,
        __preview_external_dependency_versioned_paths: !1,
        debug:
          (wt &&
            j(null == wt ? void 0 : wt.search) &&
            -1 !== wt.search.indexOf("__posthog_debug=true")) ||
          !1,
        cookie_expiration: 365,
        upgrade: !1,
        disable_session_recording: !1,
        disable_persistence: !1,
        disable_web_experiments: !0,
        disable_surveys: !1,
        disable_surveys_automatic_display: !1,
        disable_conversations: !1,
        disable_product_tours: !1,
        disable_external_dependency_loading: !1,
        enable_recording_console_log: void 0,
        secure_cookie:
          "https:" ===
          (null == _t || null == (d = _t.location) ? void 0 : d.protocol),
        ip: !1,
        opt_out_capturing_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_useragent_filter: !1,
        opt_out_capturing_persistence_type: "localStorage",
        consent_persistence_name: null,
        opt_out_capturing_cookie_prefix: null,
        opt_in_site_apps: !1,
        property_denylist: [],
        respect_dnt: !1,
        sanitize_properties: null,
        request_headers: {},
        request_batching: !0,
        properties_string_max_length: 65535,
        mask_all_element_attributes: !1,
        mask_all_text: !1,
        mask_personal_data_properties: !1,
        custom_personal_data_properties: [],
        advanced_disable_flags: !1,
        advanced_disable_decide: !1,
        advanced_disable_feature_flags: !1,
        advanced_disable_feature_flags_on_first_load: !1,
        advanced_only_evaluate_survey_feature_flags: !1,
        advanced_feature_flags_dedup_per_session: !1,
        advanced_enable_surveys: !1,
        advanced_disable_toolbar_metrics: !1,
        feature_flag_request_timeout_ms: 3e3,
        surveys_request_timeout_ms: 1e4,
        on_request_error(u) {
          _r.error("Bad HTTP status: " + u.statusCode + " " + u.text);
        },
        get_device_id: (u) => u,
        capture_performance: void 0,
        name: "posthog",
        bootstrap: {},
        disable_compression: !1,
        session_idle_timeout_seconds: 1800,
        person_profiles: rn,
        before_send: void 0,
        request_queue_config: { flush_interval_ms: Ca },
        error_tracking: {},
        _onCapture: Hn,
        __preview_eager_load_replay: !1,
      },
      ((u) => ({
        rageclick: !u || "2025-11-30" > u || { content_ignorelist: !0 },
        capture_pageview: !u || "2025-05-24" > u || "history_change",
        session_recording:
          u && u >= "2025-11-30" ? { strictMinimumDuration: !0 } : {},
        external_scripts_inject_target:
          u && u >= "2026-01-30" ? "head" : "body",
        internal_or_test_user_hostname:
          u && u >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
      }))(u),
    );
  },
  Ja = [
    ["process_person", "person_profiles"],
    ["xhr_headers", "request_headers"],
    ["cookie_name", "persistence_name"],
    ["disable_cookie", "disable_persistence"],
    ["store_google", "save_campaign_params"],
    ["verbose", "debug"],
  ],
  Qn = (u) => {
    var d = {};
    for (var [h, v] of Ja) N(u[h]) || (d[v] = u[h]);
    var g = Qi({}, d, u);
    return (
      jt(u.property_blacklist) &&
        (N(u.property_denylist)
          ? (g.property_denylist = u.property_blacklist)
          : jt(u.property_denylist)
            ? (g.property_denylist = [
                ...u.property_blacklist,
                ...u.property_denylist,
              ])
            : _r.error(Ka + u.property_denylist)),
      g
    );
  };
class Zn {
  constructor() {
    this.__forceAllowLocalhost = !1;
  }
  get Ei() {
    return this.__forceAllowLocalhost;
  }
  set Ei(u) {
    (_r.error(
      "WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`",
    ),
      (this.__forceAllowLocalhost = u));
  }
}
class to {
  Mi(u, d) {
    if (u) {
      var h = this.Pi.indexOf(u);
      -1 !== h && this.Pi.splice(h, 1);
    }
    return (this.Pi.push(d), null == d.initialize || d.initialize(), d);
  }
  Ri() {
    return (
      this.config.cookieless_mode === Qs ||
      (this.config.cookieless_mode === Xs && this.consent.isRejected())
    );
  }
  get decideEndpointWasHit() {
    var u, d;
    return (
      null !==
        (u = null == (d = this.featureFlags) ? void 0 : d.hasLoadedFlags) &&
      void 0 !== u &&
      u
    );
  }
  get flagsEndpointWasHit() {
    var u, d;
    return (
      null !==
        (u = null == (d = this.featureFlags) ? void 0 : d.hasLoadedFlags) &&
      void 0 !== u &&
      u
    );
  }
  constructor() {
    var u;
    ((this.webPerformance = new Zn()),
      (this.Oi = !1),
      (this.version = Ct.LIB_VERSION),
      (this.Li = new yn()),
      (this.Pi = []),
      (this._calculate_event_properties =
        this.calculateEventProperties.bind(this)),
      (this.config = Kn()),
      (this.SentryIntegration = Cr),
      (this.sentryIntegration = (u) =>
        (function (u, d) {
          var h = Ir(u, d);
          return { name: Vn, processEvent: (u) => h(u) };
        })(this, u)),
      (this.__request_queue = []),
      (this.__loaded = !1),
      (this.analyticsDefaultEndpoint = "/e/"),
      (this.Fi = !1),
      (this.Ai = null),
      (this.Ni = null),
      (this.$i = null),
      (this.scrollManager = new gn(this)),
      (this.pageViewManager = new Ar(this)),
      (this.rateLimiter = new ms(this)),
      (this.requestRouter = new Cn(this)),
      (this.consent = new Sr(this)),
      (this.externalIntegrations = new Nn(this)));
    var d =
      null !== (u = to.__defaultExtensionClasses) && void 0 !== u ? u : {};
    ((this.featureFlags = d.featureFlags && new d.featureFlags(this)),
      (this.toolbar = d.toolbar && new d.toolbar(this)),
      (this.surveys = d.surveys && new d.surveys(this)),
      (this.conversations = d.conversations && new d.conversations(this)),
      (this.logs = d.logs && new d.logs(this)),
      (this.experiments = d.experiments && new d.experiments(this)),
      (this.exceptions = d.exceptions && new d.exceptions(this)),
      (this.people = {
        set: (u, d, h) => {
          var v = j(u) ? { [u]: d } : u;
          (this.setPersonProperties(v), null == h || h({}));
        },
        set_once: (u, d, h) => {
          var v = j(u) ? { [u]: d } : u;
          (this.setPersonProperties(void 0, v), null == h || h({}));
        },
      }),
      this.on("eventCaptured", (u) =>
        _r.info('send "' + (null == u ? void 0 : u.event) + '"', u),
      ));
  }
  init(u, d, h) {
    if (h && h !== Ga) {
      var v,
        g = null !== (v = Ha[h]) && void 0 !== v ? v : new to();
      return (g._init(u, d, h), (Ha[h] = g), (Ha[Ga][h] = g), g);
    }
    return this._init(u, d, h);
  }
  _init(u, d, h) {
    var v, g;
    if ((void 0 === d && (d = {}), N(u) || z(u)))
      return (
        _r.critical(
          "PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()",
        ),
        this
      );
    if (this.__loaded) return this;
    ((this.__loaded = !0),
      (this.config = {}),
      (d.debug = this.Di(d.debug)),
      (this.qi = d),
      (this.ji = []),
      d.person_profiles
        ? (this.Ni = d.person_profiles)
        : d.process_person && (this.Ni = d.process_person),
      this.set_config(Qi({}, Kn(d.defaults), Qn(d), { name: h, token: u })),
      this.config.on_xhr_error &&
        _r.error("on_xhr_error is deprecated. Use on_request_error instead"),
      (this.compression = d.disable_compression ? void 0 : Yo));
    var m = this.Hi();
    ((this.persistence = new is(this.config, m)),
      (this.sessionPersistence =
        "sessionStorage" === this.config.persistence ||
        "memory" === this.config.persistence
          ? this.persistence
          : new is(f({}, this.config, { persistence: "sessionStorage" }), m)));
    var b = f({}, this.persistence.props),
      k = f({}, this.sessionPersistence.props);
    (this.register({ $initialization_time: new Date().toISOString() }),
      (this.Ui = new pn((u) => this.Bi(u), this.config.request_queue_config)),
      (this.zi = new _n(this)),
      (this.__request_queue = []));
    var S = this.Ri();
    if (
      (S ||
        ((this.sessionManager = new xn(this)),
        (this.sessionPropsManager = new bn(
          this,
          this.sessionManager,
          this.persistence,
        ))),
      this.config.__preview_deferred_init_extensions
        ? (_r.info(
            "Deferring extension initialization to improve startup performance",
          ),
          setTimeout(() => {
            this.Vi(S);
          }, 0))
        : (_r.info("Initializing extensions synchronously"), this.Vi(S)),
      (Ct.DEBUG = Ct.DEBUG || this.config.debug),
      Ct.DEBUG &&
        _r.info("Starting in debug mode", {
          this: this,
          config: d,
          thisC: f({}, this.config),
          p: b,
          s: k,
        }),
      !this.config.identity_distinct_id ||
        (null != (v = d.bootstrap) && v.distinctID) ||
        (d.bootstrap = f({}, d.bootstrap, {
          distinctID: this.config.identity_distinct_id,
          isIdentifiedID: !0,
        })),
      void 0 !== (null == (g = d.bootstrap) ? void 0 : g.distinctID))
    ) {
      var $ = d.bootstrap.distinctID,
        F = this.get_distinct_id(),
        C = this.persistence.get_property($s);
      if (d.bootstrap.isIdentifiedID && null != F && F !== $ && C === en)
        this.identify($);
      else if (d.bootstrap.isIdentifiedID && null != F && F !== $ && C === tn)
        _r.warn(
          "Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.",
        );
      else {
        var M = this.config.get_device_id(vr()),
          A = d.bootstrap.isIdentifiedID ? M : $;
        (this.persistence.set_property(
          $s,
          d.bootstrap.isIdentifiedID ? tn : en,
        ),
          this.register({ distinct_id: $, $device_id: A }));
      }
    }
    if (S) this.register_once({ distinct_id: As, $device_id: null }, "");
    else if (!this.get_distinct_id()) {
      var G = this.config.get_device_id(vr());
      (this.register_once({ distinct_id: G, $device_id: G }, ""),
        this.persistence.set_property($s, en));
    }
    return (
      nr(
        _t,
        "onpagehide" in self ? "pagehide" : "unload",
        this._handle_unload.bind(this),
        { passive: !1 },
      ),
      d.segment
        ? (function (u, d) {
            var h = u.config.segment;
            if (!h) return d();
            !(function (u, d) {
              var h = u.config.segment;
              if (!h) return d();
              var r = (h) => {
                  var r = () => h.anonymousId() || vr();
                  ((u.config.get_device_id = r),
                    h.id() &&
                      (u.register({ distinct_id: h.id(), $device_id: r() }),
                      u.persistence.set_property($s, tn)),
                    d());
                },
                v = h.user();
              "then" in v && D(v.then) ? v.then(r) : r(v);
            })(u, () => {
              h.register(
                ((u) => {
                  (Promise && Promise.resolve) ||
                    Bn.warn(
                      "This browser does not have Promise support, and can not use the segment integration",
                    );
                  var e = (d, h) => {
                    if (!h) return d;
                    (d.event.userId ||
                      d.event.anonymousId === u.get_distinct_id() ||
                      (Bn.info("No userId set, resetting PostHog"), u.reset()),
                      d.event.userId &&
                        d.event.userId !== u.get_distinct_id() &&
                        (Bn.info("UserId set, identifying with PostHog"),
                        u.identify(d.event.userId)));
                    var v = u.calculateEventProperties(h, d.event.properties);
                    return (
                      (d.event.properties = Object.assign(
                        {},
                        v,
                        d.event.properties,
                      )),
                      d
                    );
                  };
                  return {
                    name: "PostHog JS",
                    type: "enrichment",
                    version: "1.0.0",
                    isLoaded: () => !0,
                    load: () => Promise.resolve(),
                    track: (u) => e(u, u.event.event),
                    page: (u) => e(u, hn),
                    identify: (u) => e(u, fn),
                    screen: (u) => e(u, "$screen"),
                  };
                })(u),
              ).then(() => {
                d();
              });
            });
          })(this, () => this.Wi())
        : this.Wi(),
      D(this.config._onCapture) &&
        this.config._onCapture !== Hn &&
        (_r.warn("onCapture is deprecated. Please use `before_send` instead"),
        this.on("eventCaptured", (u) => this.config._onCapture(u.event, u))),
      this.config.ip &&
        _r.warn(
          'The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.',
        ),
      this
    );
  }
  Vi(u) {
    var d,
      h,
      v,
      g,
      m,
      b,
      k,
      S = performance.now(),
      $ = f({}, to.__defaultExtensionClasses, this.config.__extensionClasses),
      F = [];
    ($.featureFlags &&
      this.Pi.push(
        (this.featureFlags =
          null !== (d = this.featureFlags) && void 0 !== d
            ? d
            : new $.featureFlags(this)),
      ),
      $.exceptions &&
        this.Pi.push(
          (this.exceptions =
            null !== (h = this.exceptions) && void 0 !== h
              ? h
              : new $.exceptions(this)),
        ),
      $.historyAutocapture &&
        this.Pi.push(
          (this.historyAutocapture = new $.historyAutocapture(this)),
        ),
      $.tracingHeaders && this.Pi.push(new $.tracingHeaders(this)),
      $.siteApps && this.Pi.push((this.siteApps = new $.siteApps(this))),
      $.sessionRecording &&
        !u &&
        this.Pi.push((this.sessionRecording = new $.sessionRecording(this))),
      this.config.disable_scroll_properties ||
        F.push(() => {
          this.scrollManager.startMeasuringScrollPosition();
        }),
      $.autocapture &&
        this.Pi.push((this.autocapture = new $.autocapture(this))),
      $.surveys &&
        this.Pi.push(
          (this.surveys =
            null !== (v = this.surveys) && void 0 !== v
              ? v
              : new $.surveys(this)),
        ),
      $.logs &&
        this.Pi.push(
          (this.logs =
            null !== (g = this.logs) && void 0 !== g ? g : new $.logs(this)),
        ),
      $.conversations &&
        this.Pi.push(
          (this.conversations =
            null !== (m = this.conversations) && void 0 !== m
              ? m
              : new $.conversations(this)),
        ),
      $.productTours &&
        this.Pi.push((this.productTours = new $.productTours(this))),
      $.heatmaps && this.Pi.push((this.heatmaps = new $.heatmaps(this))),
      $.webVitalsAutocapture &&
        this.Pi.push(
          (this.webVitalsAutocapture = new $.webVitalsAutocapture(this)),
        ),
      $.exceptionObserver &&
        this.Pi.push((this.exceptionObserver = new $.exceptionObserver(this))),
      $.deadClicksAutocapture &&
        this.Pi.push(
          (this.deadClicksAutocapture = new $.deadClicksAutocapture(this, kr)),
        ),
      $.toolbar &&
        this.Pi.push(
          (this.toolbar =
            null !== (b = this.toolbar) && void 0 !== b
              ? b
              : new $.toolbar(this)),
        ),
      $.experiments &&
        this.Pi.push(
          (this.experiments =
            null !== (k = this.experiments) && void 0 !== k
              ? k
              : new $.experiments(this)),
        ),
      this.Pi.forEach((u) => {
        u.initialize &&
          F.push(() => {
            null == u.initialize || u.initialize();
          });
      }),
      F.push(() => {
        if (this.Zi) {
          var u = this.Zi;
          ((this.Zi = void 0), this.Rr(u));
        }
      }),
      this.Gi(F, S));
  }
  Gi(u, d) {
    for (; u.length > 0; ) {
      if (
        this.config.__preview_deferred_init_extensions &&
        performance.now() - d >= 30 &&
        u.length > 0
      )
        return void setTimeout(() => {
          this.Gi(u, d);
        }, 0);
      var h = u.shift();
      if (h)
        try {
          h();
        } catch (u) {
          _r.error("Error initializing extension:", u);
        }
    }
    var v = Math.round(performance.now() - d);
    (this.register_for_session({
      [Ls]: this.config.__preview_deferred_init_extensions
        ? "deferred"
        : "synchronous",
      [js]: v,
    }),
      this.config.__preview_deferred_init_extensions &&
        _r.info("PostHog extensions initialized (" + v + "ms)"));
  }
  Rr(u) {
    var d;
    if (!bt || !bt.body)
      return (
        _r.info("document not ready yet, trying again in 500 milliseconds..."),
        void setTimeout(() => {
          this.Rr(u);
        }, 500)
      );
    (this.config.__preview_deferred_init_extensions && (this.Zi = u),
      (this.Qi = u),
      (this.compression = void 0),
      u.supportedCompression &&
        !this.config.disable_compression &&
        (this.compression = P(u.supportedCompression, Yo)
          ? Yo
          : P(u.supportedCompression, Jo)
            ? Jo
            : void 0),
      null != (d = u.analytics) &&
        d.endpoint &&
        (this.analyticsDefaultEndpoint = u.analytics.endpoint),
      this.set_config({ person_profiles: this.Ni ? this.Ni : rn }),
      this.Pi.forEach((d) =>
        null == d.onRemoteConfig ? void 0 : d.onRemoteConfig(u),
      ));
  }
  Wi() {
    try {
      this.config.loaded(this);
    } catch (u) {
      _r.critical("`loaded` function failed", u);
    }
    if (
      (this.Ji(),
      this.config.internal_or_test_user_hostname && null != wt && wt.hostname)
    ) {
      var u = wt.hostname,
        d = this.config.internal_or_test_user_hostname;
      ("string" == typeof d ? u === d : d.test(u)) &&
        this.setInternalOrTestUser();
    }
    (this.config.capture_pageview &&
      setTimeout(() => {
        (this.consent.isOptedIn() || this.Ri()) && this.Ki();
      }, 1),
      (this.Yi = new ys(this)),
      this.Yi.load());
  }
  Ji() {
    var u;
    this.is_capturing() &&
      this.config.request_batching &&
      (null == (u = this.Ui) || u.enable());
  }
  _dom_loaded() {
    (this.is_capturing() && Ki(this.__request_queue, (u) => this.Bi(u)),
      (this.__request_queue = []),
      this.Ji());
  }
  _handle_unload() {
    var u, d, h, v;
    (null == (u = this.surveys) || u.handlePageUnload(),
      this.config.request_batching
        ? (this.Xi() && this.capture(vn),
          null == (d = this.logs) || d.flushLogs("sendBeacon"),
          null == (h = this.Ui) || h.unload(),
          null == (v = this.zi) || v.unload())
        : this.Xi() && this.capture(vn, null, { transport: "sendBeacon" }));
  }
  _send_request(u) {
    this.__loaded &&
      (Ya
        ? this.__request_queue.push(u)
        : this.rateLimiter.isServerRateLimited(u.batchKey) ||
          ((u.transport = u.transport || this.config.api_transport),
          (u.url = on(u.url, { ip: this.config.ip ? 1 : 0 })),
          (u.headers = f({}, this.config.request_headers, u.headers)),
          (u.compression =
            "best-available" === u.compression
              ? this.compression
              : u.compression),
          (u.disableXHRCredentials =
            this.config.__preview_disable_xhr_credentials),
          this.config.__preview_disable_beacon &&
            (u.disableTransport = ["sendBeacon"]),
          (u.fetchOptions = u.fetchOptions || this.config.fetch_options),
          ((u) => {
            var d,
              h,
              v,
              g = f({}, u);
            ((g.timeout = g.timeout || 6e4),
              (g.url = dn(g.url, g.compression)));
            var m = null !== (d = g.transport) && void 0 !== d ? d : "fetch",
              b = Fa.filter(
                (u) =>
                  !g.disableTransport ||
                  !u.transport ||
                  !g.disableTransport.includes(u.transport),
              ),
              k =
                null !==
                  (h =
                    null ==
                    (v = (function (u) {
                      for (var d = 0; u.length > d; d++)
                        if (u[d].transport === m) return u[d];
                    })(b))
                      ? void 0
                      : v.method) && void 0 !== h
                  ? h
                  : b[0].method;
            if (!k) throw new Error("No available transport method");
            "sendBeacon" !== m && g.data && g.compression === Yo && Pt && !Sa
              ? $a(g)
                  .then((u) => {
                    k(u);
                  })
                  .catch((d) => {
                    if (x(d))
                      return (
                        (Sa = !0),
                        void k(
                          f({}, g, {
                            compression: void 0,
                            url: dn(u.url, void 0),
                          }),
                        )
                      );
                    (((u) => {
                      if (!u || "object" != typeof u) return !1;
                      var d = "name" in u ? String(u.name) : "";
                      return x(u) || d === Tt;
                    })(d) && (Sa = !0),
                      k(g));
                  })
              : k(g);
          })(
            f({}, u, {
              callback: (d) => {
                var h, v;
                (this.rateLimiter.checkForLimiting(d),
                  400 > d.statusCode ||
                    null == (h = (v = this.config).on_request_error) ||
                    h.call(v, d),
                  null == u.callback || u.callback(d));
              },
            }),
          )));
  }
  Bi(u) {
    this.zi ? this.zi.retriableRequest(u) : this._send_request(u);
  }
  _execute_array(u) {
    Ba++;
    try {
      var d,
        h = [],
        v = [],
        g = [];
      Ki(u, (u) => {
        if (u)
          if (jt((d = u[0]))) g.push(u);
          else if (D(u))
            try {
              u.call(this);
            } catch (d) {
              _r.error("Error executing queued PostHog call", u, d);
            }
          else
            jt(u) && "alias" === d
              ? h.push(u)
              : jt(u) && -1 !== d.indexOf("capture") && D(this[d])
                ? g.push(u)
                : v.push(u);
      });
      var n = function (u, d) {
        Ki(u, function (u) {
          try {
            if (jt(u[0])) {
              var h = d;
              Xi(u, function (u) {
                h = h[u[0]].apply(h, u.slice(1));
              });
            } else d[u[0]].apply(d, u.slice(1));
          } catch (d) {
            _r.error("Error executing queued PostHog call", u, d);
          }
        });
      };
      (n(h, this), n(v, this), n(g, this));
    } finally {
      Ba--;
    }
  }
  push(u) {
    if (Ba > 0 && jt(u) && j(u[0])) {
      var d = to.prototype[u[0]];
      D(d) && d.apply(this, u.slice(1));
    } else this._execute_array([u]);
  }
  capture(u, d, h) {
    var v, g, m, b, k;
    if (
      this.__loaded &&
      this.persistence &&
      this.sessionPersistence &&
      this.Ui
    ) {
      if (this.is_capturing())
        if (!N(u) && j(u)) {
          var S = !this.config.opt_out_useragent_filter && this._is_bot();
          if (!S || this.config.__preview_capture_bot_pageviews) {
            var $ =
              null != h && h.skip_client_rate_limiting
                ? void 0
                : this.rateLimiter.clientRateLimitContext();
            if (null == $ || !$.isRateLimited) {
              (null != d &&
                d.$current_url &&
                !j(null == d ? void 0 : d.$current_url) &&
                (_r.error(
                  "Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value.",
                ),
                null == d || delete d.$current_url),
                "$exception" !== u ||
                  (null != h && h.en) ||
                  _r.warn(
                    "Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically.",
                  ),
                this.sessionPersistence.update_search_keyword(),
                this.config.save_campaign_params &&
                  this.sessionPersistence.update_campaign_params(),
                this.config.save_referrer &&
                  this.sessionPersistence.update_referrer_info(),
                (this.config.save_campaign_params ||
                  this.config.save_referrer) &&
                  this.persistence.set_initial_person_info());
              var F = new Date(),
                C = (null == h ? void 0 : h.timestamp) || F,
                M = (null == h ? void 0 : h.uuid) || vr(),
                A = {
                  uuid: M,
                  event: u,
                  properties: this.calculateEventProperties(u, d || {}, C, M),
                };
              (u === hn &&
                this.config.__preview_capture_bot_pageviews &&
                S &&
                ((A.event = "$bot_pageview"),
                (A.properties.$browser_type = "bot")),
                $ &&
                  (A.properties.$lib_rate_limit_remaining_tokens =
                    $.remainingTokens),
                (null == h ? void 0 : h.$set) &&
                  (A.$set = null == h ? void 0 : h.$set));
              var G,
                Q,
                te,
                re = this.tn(
                  null == h ? void 0 : h.$set_once,
                  u !== wn,
                  u === fn,
                );
              if (
                (re && (A.$set_once = re),
                (null != h && h._noTruncate) ||
                  ((g = this.config.properties_string_max_length),
                  (m = A),
                  (b = (u) => (j(u) ? u.slice(0, g) : u)),
                  (k = new Set()),
                  (A = (function t(u, d) {
                    return u !== Object(u)
                      ? b
                        ? b(u)
                        : u
                      : k.has(u)
                        ? void 0
                        : (k.add(u),
                          jt(u)
                            ? ((h = []),
                              Ki(u, (u) => {
                                h.push(t(u));
                              }))
                            : ((h = {}),
                              Xi(u, (u, d) => {
                                k.has(u) || (h[d] = t(u));
                              })),
                          h);
                    var h;
                  })(m))),
                (A.timestamp = C),
                N(null == h ? void 0 : h.timestamp) ||
                  ((A.properties.$event_time_override_provided = !0),
                  (A.properties.$event_time_override_system_time = F)),
                u === To || u === Oo)
              ) {
                var se = null == d ? void 0 : d[Lo],
                  ce = null == d ? void 0 : d[qo];
                (((u) => {
                  try {
                    var d = ((u) =>
                      ((u, d) => {
                        var h = "" + qa + d.id;
                        return (
                          d.current_iteration &&
                            d.current_iteration > 0 &&
                            (h = "" + qa + d.id + "_" + d.current_iteration),
                          h
                        );
                      })(0, u))(u);
                    if (localStorage.getItem(d)) return;
                    localStorage.setItem(d, "true");
                  } catch (u) {
                    La.error("Failed to persist survey seen state", u);
                  }
                })({ id: se, current_iteration: ce }),
                  (A.$set = f({}, A.$set, {
                    [((G = { id: se, current_iteration: ce }),
                    (Q = u === Oo ? "responded" : "dismissed"),
                    (te = "$survey_" + Q + "/" + G.id),
                    G.current_iteration &&
                      G.current_iteration > 0 &&
                      (te =
                        "$survey_" +
                        Q +
                        "/" +
                        G.id +
                        "/" +
                        G.current_iteration),
                    te)]: !0,
                  })));
              } else
                u === Ro &&
                  (A.$set = f({}, A.$set, { [Uo]: new Date().toISOString() }));
              if (u === Vo) {
                var ue = null == d ? void 0 : d[Xo];
                ue &&
                  (A.$set = f({}, A.$set, {
                    [Wo + "/" + ue]: new Date().toISOString(),
                  }));
              }
              var pe = f({}, A.properties.$set, A.$set);
              if (
                (L(pe) || this.setPersonPropertiesForFlags(pe),
                !H(this.config.before_send))
              ) {
                var ve = this.rn(A);
                if (!ve) return;
                A = ve;
              }
              this.Li.emit("eventCaptured", A);
              var ge = {
                method: "POST",
                url:
                  null !== (v = null == h ? void 0 : h._url) && void 0 !== v
                    ? v
                    : this.requestRouter.endpointFor(
                        "api",
                        this.analyticsDefaultEndpoint,
                      ),
                data: A,
                compression: "best-available",
                batchKey: null == h ? void 0 : h._batchKey,
                transport: null == h ? void 0 : h.transport,
              };
              return (
                !this.config.request_batching ||
                (h && (null == h || !h._batchKey)) ||
                (null != h && h.send_instantly)
                  ? this.Bi(ge)
                  : this.Ui.enqueue(ge),
                A
              );
            }
            _r.critical(
              "This capture call is ignored due to client rate limiting.",
            );
          }
        } else _r.error("No event name provided to posthog.capture");
    } else _r.uninitializedWarning("posthog.capture");
  }
  _addCaptureHook(u) {
    return this.on("eventCaptured", (d) => u(d.event, d));
  }
  calculateEventProperties(u, d, h, v, g) {
    if (((h = h || new Date()), !this.persistence || !this.sessionPersistence))
      return d;
    var m = g ? void 0 : this.persistence.remove_event_timer(u),
      b = f({}, d);
    if (
      ((b.token = this.config.token),
      (b.$config_defaults = this.config.defaults),
      this.Ri() && (b.$cookieless_mode = !0),
      "$snapshot" === u)
    ) {
      var k = f(
        {},
        this.persistence.properties(),
        this.sessionPersistence.properties(),
      );
      return (
        (b.distinct_id = k.distinct_id),
        ((!j(b.distinct_id) && !q(b.distinct_id)) || z(b.distinct_id)) &&
          _r.error(
            "Invalid distinct_id for replay event. This indicates a bug in your implementation",
          ),
        b
      );
    }
    var S,
      $ = (function (u, d) {
        var h, v, g, m;
        if (!St) return {};
        var b,
          k,
          S,
          $,
          F,
          C,
          M,
          A,
          G = u ? [...Yn, ...(d || [])] : [],
          [Q, te] = (function (u) {
            for (var d = 0; ji.length > d; d++) {
              var [h, v] = ji[d],
                g = h.exec(u),
                m = g && (D(v) ? v(g, u) : v);
              if (m) return m;
            }
            return ["", ""];
          })(St);
        return Qi(
          ir({
            $os: Q,
            $os_version: te,
            $browser: Xt(St, navigator.vendor),
            $device: ee(St),
            $device_type:
              ((k = St),
              (S = {
                userAgentDataPlatform:
                  null == (h = navigator) || null == (h = h.userAgentData)
                    ? void 0
                    : h.platform,
                maxTouchPoints:
                  null == (v = navigator) ? void 0 : v.maxTouchPoints,
                screenWidth:
                  null == _t || null == (g = _t.screen) ? void 0 : g.width,
                screenHeight:
                  null == _t || null == (m = _t.screen) ? void 0 : m.height,
                devicePixelRatio: null == _t ? void 0 : _t.devicePixelRatio,
              }),
              (A = ee(k)),
              A === Jt ||
              A === Yt ||
              "Kobo" === A ||
              "Kindle Fire" === A ||
              A === Fi
                ? Gt
                : A === _i || A === yi || A === mi || A === Pi
                  ? "Console"
                  : A === ei
                    ? "Wearable"
                    : A
                      ? Vt
                      : "Android" ===
                            (null == S ? void 0 : S.userAgentDataPlatform) &&
                          (null !==
                            ($ = null == S ? void 0 : S.maxTouchPoints) &&
                          void 0 !== $
                            ? $
                            : 0) > 0
                        ? 600 >
                          Math.min(
                            null !== (F = null == S ? void 0 : S.screenWidth) &&
                              void 0 !== F
                              ? F
                              : 0,
                            null !==
                              (C = null == S ? void 0 : S.screenHeight) &&
                              void 0 !== C
                              ? C
                              : 0,
                          ) /
                            (null !==
                              (M = null == S ? void 0 : S.devicePixelRatio) &&
                            void 0 !== M
                              ? M
                              : 1)
                          ? Vt
                          : Gt
                        : "Desktop"),
            $timezone: Zr(),
            $timezone_offset: ts(),
          }),
          {
            $current_url: Lr(null == wt ? void 0 : wt.href, G, eo),
            $host: null == wt ? void 0 : wt.host,
            $pathname: null == wt ? void 0 : wt.pathname,
            $raw_user_agent:
              St.length > 1e3 ? St.substring(0, 997) + "..." : St,
            $browser_version: Zt(St, navigator.vendor),
            $browser_language: Yr(),
            $browser_language_prefix:
              ((b = Yr()), "string" == typeof b ? b.split("-")[0] : void 0),
            $screen_height: null == _t ? void 0 : _t.screen.height,
            $screen_width: null == _t ? void 0 : _t.screen.width,
            $viewport_height: null == _t ? void 0 : _t.innerHeight,
            $viewport_width: null == _t ? void 0 : _t.innerWidth,
            $lib: Ct.LIB_NAME,
            $lib_version: Ct.LIB_VERSION,
            $insert_id:
              Math.random().toString(36).substring(2, 10) +
              Math.random().toString(36).substring(2, 10),
            $time: Date.now() / 1e3,
          },
        );
      })(
        this.config.mask_personal_data_properties,
        this.config.custom_personal_data_properties,
      );
    if (this.sessionManager) {
      var { sessionId: F, windowId: C } =
        this.sessionManager.checkAndGetSessionAndWindowId(g, h.getTime());
      ((b.$session_id = F), (b.$window_id = C));
    }
    this.sessionPropsManager &&
      Qi(b, this.sessionPropsManager.getSessionProps());
    try {
      var M;
      (this.sessionRecording && Qi(b, this.sessionRecording.sdkDebugProperties),
        (b.$sdk_debug_retry_queue_size =
          null == (M = this.zi) ? void 0 : M.length));
    } catch (_t) {
      b.$sdk_debug_error_capturing_properties = String(_t);
    }
    if (
      (this.requestRouter.region === Ta &&
        (b.$lib_custom_api_host = this.config.api_host),
      (S =
        u !== hn || g
          ? u !== vn || g
            ? this.pageViewManager.doEvent()
            : this.pageViewManager.doPageLeave(h)
          : this.pageViewManager.doPageView(h, v)),
      (b = Qi(b, S)),
      u === hn && bt && (b.title = bt.title),
      !N(m))
    ) {
      var A = h.getTime() - m;
      b.$duration = parseFloat((A / 1e3).toFixed(3));
    }
    (St &&
      this.config.opt_out_useragent_filter &&
      (b.$browser_type = this._is_bot() ? "bot" : "browser"),
      ((b = Qi(
        {},
        $,
        this.persistence.properties(),
        this.sessionPersistence.properties(),
        b,
      )).$is_identified = this._isIdentified()),
      jt(this.config.property_denylist)
        ? Xi(this.config.property_denylist, function (u) {
            delete b[u];
          })
        : _r.error(
            Ka +
              this.config.property_denylist +
              " or property_blacklist config: " +
              this.config.property_blacklist,
          ));
    var G = this.config.sanitize_properties;
    G && (_r.error(Xa), (b = G(b, u)));
    var Q = this.nn();
    return (
      (b.$process_person_profile = Q),
      Q && !g && this.sn("_calculate_event_properties"),
      b
    );
  }
  tn(u, d, h) {
    var v;
    if (
      (void 0 === d && (d = !0),
      void 0 === h && (h = !1),
      !this.persistence || !this.nn())
    )
      return u;
    if (this.Oi && !h) return u;
    var g = this.persistence.get_initial_props(),
      m = null == (v = this.sessionPropsManager) ? void 0 : v.getSetOnceProps(),
      b = Qi({}, g, m || {}, u || {}),
      k = this.config.sanitize_properties;
    return (
      k && (_r.error(Xa), (b = k(b, "$set_once"))),
      d && (this.Oi = !0),
      L(b) ? void 0 : b
    );
  }
  register(u, d) {
    var h;
    null == (h = this.persistence) || h.register(u, d);
  }
  register_once(u, d, h) {
    var v;
    null == (v = this.persistence) || v.register_once(u, d, h);
  }
  register_for_session(u) {
    var d;
    null == (d = this.sessionPersistence) || d.register(u);
  }
  unregister(u) {
    var d;
    null == (d = this.persistence) || d.unregister(u);
  }
  unregister_for_session(u) {
    var d;
    null == (d = this.sessionPersistence) || d.unregister(u);
  }
  an(u, d) {
    this.register({ [u]: d });
  }
  getFeatureFlag(u, d) {
    var h;
    return null == (h = this.featureFlags) ? void 0 : h.getFeatureFlag(u, d);
  }
  getFeatureFlagPayload(u) {
    var d;
    return null == (d = this.featureFlags)
      ? void 0
      : d.getFeatureFlagPayload(u);
  }
  getFeatureFlagResult(u, d) {
    var h;
    return null == (h = this.featureFlags)
      ? void 0
      : h.getFeatureFlagResult(u, d);
  }
  isFeatureEnabled(u, d) {
    var h;
    return null == (h = this.featureFlags) ? void 0 : h.isFeatureEnabled(u, d);
  }
  reloadFeatureFlags() {
    var u;
    null == (u = this.featureFlags) || u.reloadFeatureFlags();
  }
  updateFlags(u, d, h) {
    var v;
    null == (v = this.featureFlags) || v.updateFlags(u, d, h);
  }
  updateEarlyAccessFeatureEnrollment(u, d, h) {
    var v;
    null == (v = this.featureFlags) ||
      v.updateEarlyAccessFeatureEnrollment(u, d, h);
  }
  getEarlyAccessFeatures(u, d, h) {
    var v;
    return (
      void 0 === d && (d = !1),
      null == (v = this.featureFlags)
        ? void 0
        : v.getEarlyAccessFeatures(u, d, h)
    );
  }
  on(u, d) {
    return this.Li.on(u, d);
  }
  onFeatureFlags(u) {
    return this.featureFlags
      ? this.featureFlags.onFeatureFlags(u)
      : (u([], {}, { errorsLoading: !0 }), () => {});
  }
  onSurveysLoaded(u) {
    return this.surveys
      ? this.surveys.onSurveysLoaded(u)
      : (u([], { isLoaded: !1, error: Wa }), () => {});
  }
  onSessionId(u) {
    var d, h;
    return null !==
      (d = null == (h = this.sessionManager) ? void 0 : h.onSessionId(u)) &&
      void 0 !== d
      ? d
      : () => {};
  }
  getSurveys(u, d) {
    (void 0 === d && (d = !1),
      this.surveys
        ? this.surveys.getSurveys(u, d)
        : u([], { isLoaded: !1, error: Wa }));
  }
  getActiveMatchingSurveys(u, d) {
    (void 0 === d && (d = !1),
      this.surveys
        ? this.surveys.getActiveMatchingSurveys(u, d)
        : u([], { isLoaded: !1, error: Wa }));
  }
  renderSurvey(u, d) {
    var h;
    null == (h = this.surveys) || h.renderSurvey(u, d);
  }
  displaySurvey(u, d) {
    var h;
    (void 0 === d && (d = ja),
      null == (h = this.surveys) || h.displaySurvey(u, d));
  }
  cancelPendingSurvey(u) {
    var d;
    null == (d = this.surveys) || d.cancelPendingSurvey(u);
  }
  canRenderSurvey(u) {
    var d, h;
    return null !==
      (d = null == (h = this.surveys) ? void 0 : h.canRenderSurvey(u)) &&
      void 0 !== d
      ? d
      : { visible: !1, disabledReason: Wa };
  }
  canRenderSurveyAsync(u, d) {
    var h, v;
    return (
      void 0 === d && (d = !1),
      null !==
        (h =
          null == (v = this.surveys) ? void 0 : v.canRenderSurveyAsync(u, d)) &&
      void 0 !== h
        ? h
        : Promise.resolve({ visible: !1, disabledReason: Wa })
    );
  }
  un(u) {
    return !u || z(u)
      ? (_r.critical("Unique user id has not been set in posthog.identify"), !1)
      : u === As
        ? (_r.critical(
            'The string "' +
              u +
              '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.',
          ),
          !1)
        : (!["distinct_id", "distinctid"].includes(u.toLowerCase()) &&
            !["undefined", "null"].includes(u.toLowerCase())) ||
          (_r.critical(
            'The string "' +
              u +
              '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.',
          ),
          !1);
  }
  identify(u, d, h) {
    if (!this.__loaded || !this.persistence)
      return _r.uninitializedWarning("posthog.identify");
    if (
      (q(u) &&
        ((u = u.toString()),
        _r.warn(
          "The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.",
        )),
      this.un(u) && this.sn("posthog.identify"))
    ) {
      var v = this.get_distinct_id();
      (this.register({ $user_id: u }),
        this.get_property(wr) ||
          this.register_once(
            { $had_persisted_distinct_id: !0, $device_id: v },
            "",
          ),
        u !== v &&
          u !== this.get_property(xr) &&
          (this.unregister(xr), this.register({ distinct_id: u })));
      var g,
        m = (this.persistence.get_property($s) || en) === en;
      (u !== v && m
        ? (this.persistence.set_property($s, tn),
          this.setPersonPropertiesForFlags(
            { $set: d || {}, $set_once: h || {} },
            !1,
          ),
          this.capture(
            fn,
            { distinct_id: u, $anon_distinct_id: v },
            { $set: d || {}, $set_once: h || {} },
          ),
          (this.$i = $n(u, d, h)),
          null == (g = this.featureFlags) || g.setAnonymousDistinctId(v))
        : (d || h) && this.setPersonProperties(d, h),
        u !== v && (this.reloadFeatureFlags(), this.unregister(xs)));
    }
  }
  setPersonProperties(u, d) {
    if ((u || d) && this.sn("posthog.setPersonProperties")) {
      var h = $n(this.get_distinct_id(), u, d);
      this.$i !== h
        ? (this.setPersonPropertiesForFlags(
            { $set: u || {}, $set_once: d || {} },
            !0,
          ),
          this.capture("$set", { $set: u || {}, $set_once: d || {} }),
          (this.$i = h))
        : _r.info(
            "A duplicate setPersonProperties call was made with the same properties. It has been ignored.",
          );
    }
  }
  group(u, d, h) {
    if (u && d) {
      var v = this.getGroups(),
        g = v[u] !== d;
      if (
        (g && this.resetGroupPropertiesForFlags(u),
        this.register({ $groups: f({}, v, { [u]: d }) }),
        g || h)
      ) {
        var m = { $group_type: u, $group_key: d };
        (h && (m.$group_set = h), this.capture(wn, m));
      }
      (h && this.setGroupPropertiesForFlags({ [u]: h }),
        g && !h && this.reloadFeatureFlags());
    } else _r.error("posthog.group requires a group type and group key");
  }
  resetGroups() {
    (this.register({ $groups: {} }),
      this.resetGroupPropertiesForFlags(),
      this.reloadFeatureFlags());
  }
  setPersonPropertiesForFlags(u, d) {
    var h;
    (void 0 === d && (d = !0),
      null == (h = this.featureFlags) || h.setPersonPropertiesForFlags(u, d));
  }
  resetPersonPropertiesForFlags() {
    var u;
    null == (u = this.featureFlags) || u.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(u, d) {
    var h;
    (void 0 === d && (d = !0),
      this.sn("posthog.setGroupPropertiesForFlags") &&
        (null == (h = this.featureFlags) ||
          h.setGroupPropertiesForFlags(u, d)));
  }
  resetGroupPropertiesForFlags(u) {
    var d;
    null == (d = this.featureFlags) || d.resetGroupPropertiesForFlags(u);
  }
  reset(u) {
    var d, h, v, g, m, b, k, S;
    if ((_r.info("reset"), !this.__loaded))
      return _r.uninitializedWarning("posthog.reset");
    var $,
      F = this.get_property(wr),
      C = this.get_property(Br);
    if (
      (this.consent.reset(),
      null == (d = this.persistence) || d.clear(),
      null == (h = this.sessionPersistence) || h.clear(),
      N(C) || null == ($ = this.persistence) || $.register({ [Br]: C }),
      null == (v = this.surveys) || v.reset(),
      null == (g = this.Yi) || g.stop(),
      null == (m = this.featureFlags) || m.reset(),
      null == (b = this.conversations) || b.reset(),
      null == (k = this.persistence) || k.set_property($s, en),
      null == (S = this.sessionManager) || S.resetSessionId(),
      (this.$i = null),
      this.config.cookieless_mode === Qs)
    )
      this.register_once({ distinct_id: As, $device_id: null }, "");
    else {
      var M = this.config.get_device_id(vr());
      this.register_once({ distinct_id: M, $device_id: u ? M : F }, "");
    }
    (this.register({ $last_posthog_reset: new Date().toISOString() }, 1),
      delete this.config.identity_distinct_id,
      delete this.config.identity_hash,
      this.reloadFeatureFlags());
  }
  setIdentity(u, d) {
    var h;
    ((this.config.identity_distinct_id = u),
      (this.config.identity_hash = d),
      this.alias(u),
      null == (h = this.conversations) || h.ln());
  }
  clearIdentity() {
    var u;
    (delete this.config.identity_distinct_id,
      delete this.config.identity_hash,
      null == (u = this.conversations) || u.hn());
  }
  get_distinct_id() {
    return this.get_property("distinct_id");
  }
  getGroups() {
    return this.get_property("$groups") || {};
  }
  get_session_id() {
    var u, d;
    return null !==
      (u =
        null == (d = this.sessionManager)
          ? void 0
          : d.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== u
      ? u
      : "";
  }
  get_session_replay_url(u) {
    if (!this.sessionManager) return "";
    var { sessionId: d, sessionStartTimestamp: h } =
        this.sessionManager.checkAndGetSessionAndWindowId(!0),
      v = this.requestRouter.endpointFor(
        "ui",
        "/project/" + this.config.token + "/replay/" + d,
      );
    if (null != u && u.withTimestamp && h) {
      var g,
        m = null !== (g = u.timestampLookBack) && void 0 !== g ? g : 10;
      if (!h) return v;
      v +=
        "?t=" + Math.max(Math.floor((new Date().getTime() - h) / 1e3) - m, 0);
    }
    return v;
  }
  alias(u, d) {
    return u === this.get_property(br)
      ? (_r.critical(
          "Attempting to create alias for existing People user - aborting.",
        ),
        -2)
      : this.sn("posthog.alias")
        ? (N(d) && (d = this.get_distinct_id()),
          u !== d
            ? (this.an(xr, u),
              this.capture("$create_alias", { alias: u, distinct_id: d }))
            : (_r.warn(
                "alias matches current distinct_id - skipping api call.",
              ),
              this.identify(u),
              -1))
        : void 0;
  }
  set_config(u) {
    var d = f({}, this.config);
    if (U(u)) {
      var h, v, g, m, b, k, S, $, F, C;
      Qi(this.config, Qn(u));
      var M = this.Hi();
      (null == (h = this.persistence) || h.update_config(this.config, d, M),
        (this.sessionPersistence =
          "sessionStorage" === this.config.persistence ||
          "memory" === this.config.persistence
            ? this.persistence
            : new is(
                f({}, this.config, { persistence: "sessionStorage" }),
                M,
              )));
      var A = this.Di(this.config.debug);
      (W(A) && (this.config.debug = A),
        W(this.config.debug) &&
          (this.config.debug
            ? ((Ct.DEBUG = !0),
              An.R() && An.N("ph_debug", !0),
              _r.info("set_config", {
                config: u,
                oldConfig: d,
                newConfig: f({}, this.config),
              }))
            : ((Ct.DEBUG = !1), An.R() && An.q("ph_debug"))),
        null == (v = this.exceptionObserver) || v.onConfigChange(),
        null == (g = this.exceptions) || g.onConfigChange(),
        null == (m = this.sessionRecording) || m.startIfEnabledOrStop(),
        null == (b = this.autocapture) || b.startIfEnabled(),
        null == (k = this.heatmaps) || k.startIfEnabled(),
        null == (S = this.exceptionObserver) || S.startIfEnabledOrStop(),
        null == ($ = this.deadClicksAutocapture) || $.startIfEnabledOrStop(),
        null == (F = this.surveys) || F.loadIfEnabled(),
        this.cn(),
        null == (C = this.externalIntegrations) || C.startIfEnabledOrStop());
    }
  }
  _overrideSDKInfo(u, d) {
    ((Ct.LIB_NAME = u), (Ct.LIB_VERSION = d));
  }
  startSessionRecording(u) {
    var d,
      h,
      v,
      g,
      m,
      b = !0 === u,
      k = {
        sampling: b || !(null == u || !u.sampling),
        linked_flag: b || !(null == u || !u.linked_flag),
        url_trigger: b || !(null == u || !u.url_trigger),
        event_trigger: b || !(null == u || !u.event_trigger),
      };
    (Object.values(k).some(Boolean) &&
      (null == (d = this.sessionManager) || d.checkAndGetSessionAndWindowId(),
      k.sampling &&
        (null == (h = this.sessionRecording) || h.overrideSampling()),
      k.linked_flag &&
        (null == (v = this.sessionRecording) || v.overrideLinkedFlag()),
      k.url_trigger &&
        (null == (g = this.sessionRecording) || g.overrideTrigger("url")),
      k.event_trigger &&
        (null == (m = this.sessionRecording) || m.overrideTrigger("event"))),
      this.set_config({ disable_session_recording: !1 }));
  }
  stopSessionRecording() {
    this.set_config({ disable_session_recording: !0 });
  }
  sessionRecordingStarted() {
    var u;
    return !(null == (u = this.sessionRecording) || !u.started);
  }
  captureException(u, d) {
    if (this.exceptions) {
      var h = new Error("PostHog syntheticException"),
        v = this.exceptions.buildProperties(u, {
          handled: !0,
          syntheticException: h,
        });
      return this.exceptions.sendExceptionEvent(f({}, v, d));
    }
  }
  addExceptionStep(u, d) {
    var h;
    null == (h = this.exceptions) || h.addExceptionStep(u, d);
  }
  captureLog(u) {
    var d;
    null == (d = this.logs) || d.captureLog(u);
  }
  get logger() {
    var u, d;
    return null !== (u = null == (d = this.logs) ? void 0 : d.logger) &&
      void 0 !== u
      ? u
      : to.dn;
  }
  startExceptionAutocapture(u) {
    this.set_config({ capture_exceptions: null == u || u });
  }
  stopExceptionAutocapture() {
    this.set_config({ capture_exceptions: !1 });
  }
  loadToolbar(u) {
    var d, h;
    return (
      null !== (d = null == (h = this.toolbar) ? void 0 : h.loadToolbar(u)) &&
      void 0 !== d &&
      d
    );
  }
  get_property(u) {
    var d;
    return null == (d = this.persistence) ? void 0 : d.props[u];
  }
  getSessionProperty(u) {
    var d;
    return null == (d = this.sessionPersistence) ? void 0 : d.props[u];
  }
  toString() {
    var u,
      d = null !== (u = this.config.name) && void 0 !== u ? u : Ga;
    return (d !== Ga && (d = Ga + "." + d), d);
  }
  _isIdentified() {
    var u, d;
    return (
      (null == (u = this.persistence) ? void 0 : u.get_property($s)) === tn ||
      (null == (d = this.sessionPersistence) ? void 0 : d.get_property($s)) ===
        tn
    );
  }
  nn() {
    var u, d;
    return !(
      "never" === this.config.person_profiles ||
      (this.config.person_profiles === rn &&
        !this._isIdentified() &&
        L(this.getGroups()) &&
        (null == (u = this.persistence) || null == (u = u.props) || !u[xr]) &&
        (null == (d = this.persistence) || null == (d = d.props) || !d[Ts]))
    );
  }
  Xi() {
    return (
      !0 === this.config.capture_pageleave ||
      ("if_capture_pageview" === this.config.capture_pageleave &&
        (!0 === this.config.capture_pageview ||
          "history_change" === this.config.capture_pageview))
    );
  }
  createPersonProfile() {
    this.nn() ||
      (this.sn("posthog.createPersonProfile") &&
        this.setPersonProperties({}, {}));
  }
  setInternalOrTestUser() {
    this.sn("posthog.setInternalOrTestUser") &&
      this.setPersonProperties({ $internal_or_test_user: !0 });
  }
  sn(u) {
    return "never" === this.config.person_profiles
      ? (_r.error(
          u +
            ' was called, but process_person is set to "never". This call will be ignored.',
        ),
        !1)
      : (this.an(Ts, !0), !0);
  }
  Hi() {
    if ("always" === this.config.cookieless_mode) return !0;
    var u = this.consent.isOptedOut();
    return (
      this.config.disable_persistence ||
      (u &&
        !(
          !this.config.opt_out_persistence_by_default &&
          this.config.cookieless_mode !== Xs
        ))
    );
  }
  cn() {
    var u,
      d,
      h,
      v,
      g = this.Hi();
    return (
      (null == (u = this.persistence) ? void 0 : u._r) !== g &&
        (null == (h = this.persistence) || h.set_disabled(g)),
      (null == (d = this.sessionPersistence) ? void 0 : d._r) !== g &&
        (null == (v = this.sessionPersistence) || v.set_disabled(g)),
      g
    );
  }
  opt_in_capturing(u) {
    var d;
    if (this.config.cookieless_mode !== Qs) {
      if (this.Ri()) {
        var h, v, g, m, b;
        (this.reset(!0),
          null == (h = this.sessionManager) || h.destroy(),
          null == (v = this.pageViewManager) || v.destroy(),
          (this.sessionManager = new xn(this)),
          (this.pageViewManager = new Ar(this)),
          this.persistence &&
            (this.sessionPropsManager = new bn(
              this,
              this.sessionManager,
              this.persistence,
            )));
        var k,
          S =
            null !==
              (g =
                null == (m = this.config.__extensionClasses)
                  ? void 0
                  : m.sessionRecording) && void 0 !== g
              ? g
              : null == (b = to.__defaultExtensionClasses)
                ? void 0
                : b.sessionRecording;
        S &&
          ((this.sessionRecording = this.Mi(
            this.sessionRecording,
            new S(this),
          )),
          this.Qi &&
            (null == (k = this.sessionRecording) ||
              null == k.onRemoteConfig ||
              k.onRemoteConfig(this.Qi)));
      }
      var $, F;
      (this.consent.optInOut(!0),
        this.cn(),
        this.Ji(),
        null == (d = this.sessionRecording) || d.startIfEnabledOrStop(),
        this.config.cookieless_mode == Xs &&
          (null == ($ = this.surveys) || $.loadIfEnabled()),
        (N(null == u ? void 0 : u.captureEventName) ||
          (null != u && u.captureEventName)) &&
          this.capture(
            null !== (F = null == u ? void 0 : u.captureEventName) &&
              void 0 !== F
              ? F
              : "$opt_in",
            null == u ? void 0 : u.captureProperties,
            { send_instantly: !0 },
          ),
        this.config.capture_pageview && this.Ki());
    } else _r.warn(Va);
  }
  opt_out_capturing() {
    var u, d, h;
    this.config.cookieless_mode !== Qs
      ? (this.config.cookieless_mode === Xs &&
          this.consent.isOptedIn() &&
          this.reset(!0),
        this.consent.optInOut(!1),
        this.cn(),
        this.config.cookieless_mode === Xs &&
          (this.register({ distinct_id: As, $device_id: null }),
          null == (u = this.sessionRecording) || u.stopRecording(),
          (this.sessionRecording = void 0),
          null == (d = this.sessionManager) || d.destroy(),
          null == (h = this.pageViewManager) || h.destroy(),
          (this.sessionManager = void 0),
          (this.sessionPropsManager = void 0),
          this.Ki()))
      : _r.warn(Va);
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  get_explicit_consent_status() {
    var u = this.consent.consent;
    return 1 === u ? "granted" : 0 === u ? "denied" : "pending";
  }
  is_capturing() {
    return (
      this.config.cookieless_mode === Qs ||
      (this.config.cookieless_mode === Xs
        ? this.consent.isRejected() || this.consent.isOptedIn()
        : !this.has_opted_out_capturing())
    );
  }
  clear_opt_in_out_capturing() {
    (this.consent.reset(), this.cn());
  }
  _is_bot() {
    return yt ? En(yt, this.config.custom_blocked_useragents) : void 0;
  }
  Ki() {
    bt &&
      ("visible" === bt.visibilityState
        ? this.Fi ||
          ((this.Fi = !0),
          this.capture(hn, { title: bt.title }, { send_instantly: !0 }),
          this.Ai && (bt.removeEventListener(sn, this.Ai), (this.Ai = null)))
        : this.Ai || ((this.Ai = this.Ki.bind(this)), nr(bt, sn, this.Ai)));
  }
  debug(u) {
    !1 === u
      ? (null == _t || _t.console.log("You've disabled debug mode."),
        this.set_config({ debug: !1 }))
      : (null == _t ||
          _t.console.log(
            "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`.",
          ),
        this.set_config({ debug: !0 }));
  }
  Lr() {
    var u,
      d,
      h,
      v,
      g,
      m,
      b = this.qi || {};
    return "advanced_disable_flags" in b
      ? !!b.advanced_disable_flags
      : !1 !== this.config.advanced_disable_flags
        ? !!this.config.advanced_disable_flags
        : !0 === this.config.advanced_disable_decide
          ? (_r.warn(
              "Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version.",
            ),
            !0)
          : ((h = "advanced_disable_decide"),
            (v = _r),
            (g = (d = "advanced_disable_flags") in (u = b) && !H(u[d])),
            (m = h in u && !H(u[h])),
            g
              ? u[d]
              : !!m &&
                (v &&
                  v.warn(
                    "Config field '" +
                      h +
                      "' is deprecated. Please use '" +
                      d +
                      "' instead. The old field will be removed in a future major version.",
                  ),
                u[h]));
  }
  rn(u) {
    if (H(this.config.before_send)) return u;
    var d = jt(this.config.before_send)
        ? this.config.before_send
        : [this.config.before_send],
      h = u;
    for (var v of d) {
      if (((h = v(h)), H(h))) {
        var g = "Event '" + u.event + "' was rejected in beforeSend function";
        return (
          Y(u.event)
            ? _r.warn(g + ". This can cause unexpected behavior.")
            : _r.info(g),
          null
        );
      }
      (h.properties && !L(h.properties)) ||
        _r.warn(
          "Event '" +
            u.event +
            "' has no properties after beforeSend function, this is likely an error.",
        );
    }
    return h;
  }
  getPageViewId() {
    var u;
    return null == (u = this.pageViewManager.dr) ? void 0 : u.pageViewId;
  }
  captureTraceFeedback(u, d) {
    this.capture("$ai_feedback", {
      $ai_trace_id: String(u),
      $ai_feedback_text: d,
    });
  }
  captureTraceMetric(u, d, h) {
    this.capture("$ai_metric", {
      $ai_trace_id: String(u),
      $ai_metric_name: d,
      $ai_metric_value: String(h),
    });
  }
  Di(u) {
    var d = W(u) && !u,
      h = An.R() && "true" === An.A("ph_debug");
    return !d && (!!h || u);
  }
}
((to.__defaultExtensionClasses = {}),
  (to.dn = {
    trace: (za = () => {}),
    debug: za,
    info: za,
    warn: za,
    error: za,
    fatal: za,
  }),
  (function (u, d) {
    for (var h = 0; d.length > h; h++)
      u.prototype[d[h]] = er(u.prototype[d[h]]);
  })(to, ["identify"]));
function so(u) {
  return (
    u instanceof Element &&
    (u.id === Os ||
      !(null == u.closest || !u.closest(".toolbar-global-fade-container")))
  );
}
function no(u) {
  return !!u && 1 === u.nodeType;
}
function oo(u, d) {
  return !!u && !!u.tagName && u.tagName.toLowerCase() === d.toLowerCase();
}
function ao(u) {
  return !!u && 3 === u.nodeType;
}
function lo(u) {
  return !!u && 11 === u.nodeType && no(u.host);
}
function uo(u) {
  return u ? O(u).split(/\s+/) : [];
}
function ho(u) {
  var d = null == _t ? void 0 : _t.location.href;
  return !!(d && u && u.some((u) => d.match(u)));
}
function vo(u) {
  var d = "";
  switch (typeof u.className) {
    case "string":
      d = u.className;
      break;
    case "object":
      d =
        (u.className && "baseVal" in u.className
          ? u.className.baseVal
          : null) ||
        u.getAttribute("class") ||
        "";
      break;
    default:
      d = "";
  }
  return uo(d);
}
function co(u) {
  return H(u)
    ? null
    : O(u)
        .split(/(\s+)/)
        .filter((u) => Io(u))
        .join("")
        .replace(/[\r\n]/g, " ")
        .replace(/[ ]+/g, " ")
        .substring(0, 255);
}
function po(u) {
  var d = "";
  return (
    Eo(u) &&
      !So(u) &&
      u.childNodes &&
      u.childNodes.length &&
      Xi(u.childNodes, function (u) {
        var h;
        ao(u) &&
          u.textContent &&
          (d += null !== (h = co(u.textContent)) && void 0 !== h ? h : "");
      }),
    O(d)
  );
}
function fo(u) {
  return N(u.target)
    ? u.srcElement || null
    : null != (d = u.target) && d.shadowRoot
      ? u.composedPath()[0] || null
      : u.target || null;
  var d;
}
var Za = ["a", "button", "form", "input", "select", "textarea", "label"];
function go(u, d) {
  if (N(d)) return !0;
  var h,
    r = function (u) {
      if (d.some((d) => u.matches(d))) return { v: !0 };
    };
  for (var v of u) if ((h = r(v))) return h.v;
  return !1;
}
function mo(u) {
  var d = u.parentNode;
  return !(!d || !no(d)) && d;
}
var Qa = ["next", "previous", "prev", ">", "<"],
  el = [".ph-no-rageclick", ".ph-no-capture"];
var wo = (u) => !u || oo(u, "html") || !no(u),
  xo = (u, d) => {
    if (!_t || wo(u))
      return { parentIsUsefulElement: !1, targetElementList: [] };
    for (var h = !1, v = [u], g = u; g.parentNode && !oo(g, "body"); )
      if (lo(g.parentNode))
        (v.push(g.parentNode.host), (g = g.parentNode.host));
      else {
        var m = mo(g);
        if (!m) break;
        if (d || Za.indexOf(m.tagName.toLowerCase()) > -1) h = !0;
        else {
          var b = _t.getComputedStyle(m);
          b && "pointer" === b.getPropertyValue("cursor") && (h = !0);
        }
        (v.push(m), (g = m));
      }
    return { parentIsUsefulElement: h, targetElementList: v };
  };
function Eo(u) {
  for (var d = u; d.parentNode && !oo(d, "body"); d = d.parentNode) {
    var h = vo(d);
    if (P(h, "ph-sensitive") || P(h, "ph-no-capture")) return !1;
  }
  if (P(vo(u), "ph-include")) return !0;
  var v = u.type || "";
  if (j(v))
    switch (v.toLowerCase()) {
      case "hidden":
      case "password":
        return !1;
    }
  var g = u.name || u.id || "";
  return (
    !j(g) ||
    !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
      g.replace(/[^a-zA-Z0-9]/g, ""),
    )
  );
}
function So(u) {
  return !!(
    (oo(u, "input") &&
      !["button", "checkbox", "submit", "reset"].includes(u.type)) ||
    oo(u, "select") ||
    oo(u, "textarea") ||
    "true" === u.getAttribute("contenteditable")
  );
}
var tl =
    "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
  il = new RegExp("^(?:" + tl + ")$"),
  rl = new RegExp(tl),
  sl = "\\d{3}-?\\d{2}-?\\d{4}",
  nl = new RegExp("^(" + sl + ")$"),
  ol = new RegExp("(" + sl + ")");
function Io(u, d) {
  if ((void 0 === d && (d = !0), H(u))) return !1;
  if (j(u)) {
    if (((u = O(u)), (d ? il : rl).test((u || "").replace(/[- ]/g, ""))))
      return !1;
    if ((d ? nl : ol).test(u)) return !1;
  }
  return !0;
}
function Co(u) {
  var d = po(u);
  return Io((d = (d + " " + Ao(u)).trim())) ? d : "";
}
function Ao(u) {
  var d = "";
  return (
    u &&
      u.childNodes &&
      u.childNodes.length &&
      Xi(u.childNodes, function (u) {
        var h;
        if (
          u &&
          "span" === (null == (h = u.tagName) ? void 0 : h.toLowerCase())
        )
          try {
            var v = po(u);
            ((d = (d + " " + v).trim()),
              u.childNodes &&
                u.childNodes.length &&
                (d = (d + " " + Ao(u)).trim()));
          } catch (u) {
            _r.error("[AutoCapture]", u);
          }
      }),
    d
  );
}
function Fo(u) {
  return u.replace(/"|\\"/g, '\\"');
}
function Mo(u) {
  var d = u.attr__class;
  return d ? (jt(d) ? d : uo(d)) : void 0;
}
class Do {
  constructor(u) {
    this.disabled = !1 === u;
    var d = U(u) ? u : {};
    ((this.thresholdPx = d.threshold_px || 30),
      (this.timeoutMs = d.timeout_ms || 1e3),
      (this.clickCount = d.click_count || 3),
      (this.clicks = []));
  }
  isRageClick(u, d, h) {
    if (this.disabled) return !1;
    var v = this.clicks[this.clicks.length - 1];
    if (
      v &&
      Math.abs(u - v.x) + Math.abs(d - v.y) < this.thresholdPx &&
      this.timeoutMs > h - v.timestamp
    ) {
      if (
        (this.clicks.push({ x: u, y: d, timestamp: h }),
        this.clicks.length === this.clickCount)
      )
        return !0;
    } else this.clicks = [{ x: u, y: d, timestamp: h }];
    return !1;
  }
}
var al = "$copy_autocapture",
  ll = mr("[AutoCapture]");
function No(u, d) {
  return d.length > u ? d.slice(0, u) + "..." : d;
}
function jo(u) {
  if (u.previousElementSibling) return u.previousElementSibling;
  var d = u;
  do {
    d = d.previousSibling;
  } while (d && !no(d));
  return d;
}
var cl = mr("[ExceptionAutocapture]");
function Ho(u, d, h) {
  try {
    if (!(d in u)) return () => {};
    var v = u[d],
      g = h(v);
    return (
      D(g) &&
        ((g.prototype = g.prototype || {}),
        Object.defineProperties(g, {
          __posthog_wrapped__: { enumerable: !1, value: !0 },
        })),
      (u[d] = g),
      () => {
        u[d] = v;
      }
    );
  } catch (u) {
    return () => {};
  }
}
var ul = mr("[TracingHeaders]"),
  dl = mr("[Web Vitals]"),
  hl = 9e5,
  pl = "disabled",
  vl = "lazy_loading",
  gl = "awaiting_config",
  fl = "missing_config";
(mr("[SessionRecording]"), mr("[SessionRecording]"));
var _l = "[SessionRecording]",
  ml = mr(_l),
  yl = mr("[Heatmaps]");
function ta(u) {
  return (
    U(u) && "clientX" in u && "clientY" in u && q(u.clientX) && q(u.clientY)
  );
}
var bl = mr("[Product Tours]"),
  wl = ["$set_once", "$set"],
  xl = mr("[SiteApps]"),
  kl = "Error while initializing PostHog app with config id ";
function na(u, d, h) {
  if (H(u)) return !1;
  switch (h) {
    case "exact":
      return u === d;
    case "contains":
      var v = d
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/_/g, ".")
        .replace(/%/g, ".*");
      return new RegExp(v, "i").test(u);
    case "regex":
      try {
        return new RegExp(d).test(u);
      } catch (u) {
        return !1;
      }
    default:
      return !1;
  }
}
class oa {
  constructor(u) {
    ((this.vn = new yn()),
      (this.fn = (u, d) =>
        this.pn(u, d) && this.gn(u, d) && this.mn(u, d) && this.yn(u, d)),
      (this.pn = (u, d) =>
        null == d ||
        !d.event ||
        (null == u ? void 0 : u.event) === (null == d ? void 0 : d.event)),
      (this._instance = u),
      (this.bn = new Set()),
      (this._n = new Set()));
  }
  init() {
    var u, d;
    N(null == (u = this._instance) ? void 0 : u._addCaptureHook) ||
      null == (d = this._instance) ||
      d._addCaptureHook((u, d) => {
        this.on(u, d);
      });
  }
  register(u) {
    var d, h;
    if (
      !N(null == (d = this._instance) ? void 0 : d._addCaptureHook) &&
      (u.forEach((u) => {
        var d, h;
        (null == (d = this._n) || d.add(u),
          null == (h = u.steps) ||
            h.forEach((u) => {
              var d;
              null == (d = this.bn) ||
                d.add((null == u ? void 0 : u.event) || "");
            }));
      }),
      null != (h = this._instance) && h.autocapture)
    ) {
      var v,
        g = new Set();
      (u.forEach((u) => {
        var d;
        null == (d = u.steps) ||
          d.forEach((u) => {
            null != u && u.selector && g.add(null == u ? void 0 : u.selector);
          });
      }),
        null == (v = this._instance) || v.autocapture.setElementSelectors(g));
    }
  }
  on(u, d) {
    var h;
    null != d &&
      0 != u.length &&
      (this.bn.has(u) || this.bn.has(null == d ? void 0 : d.event)) &&
      this._n &&
      (null == (h = this._n) ? void 0 : h.size) > 0 &&
      this._n.forEach((u) => {
        this.wn(d, u) && this.vn.emit("actionCaptured", u.name);
      });
  }
  xn(u) {
    this.onAction("actionCaptured", (d) => u(d));
  }
  wn(u, d) {
    if (null == (null == d ? void 0 : d.steps)) return !1;
    for (var h of d.steps) if (this.fn(u, h)) return !0;
    return !1;
  }
  onAction(u, d) {
    return this.vn.on(u, d);
  }
  gn(u, d) {
    if (null != d && d.url) {
      var h,
        v = null == u || null == (h = u.properties) ? void 0 : h.$current_url;
      if (!v || "string" != typeof v) return !1;
      if (!na(v, d.url, d.url_matching || "contains")) return !1;
    }
    return !0;
  }
  mn(u, d) {
    return !!this.Sn(u, d) && !!this.kn(u, d) && !!this.Cn(u, d);
  }
  Sn(u, d) {
    var h;
    if (null == d || !d.href) return !0;
    var v = this.In(u);
    if (v.length > 0)
      return v.some((u) => na(u.href, d.href, d.href_matching || "exact"));
    var g,
      m =
        (null == u || null == (h = u.properties)
          ? void 0
          : h.$elements_chain) || "";
    return (
      !!m &&
      na(
        (g = m.match(/(?::|")href="(.*?)"/)) ? g[1] : "",
        d.href,
        d.href_matching || "exact",
      )
    );
  }
  kn(u, d) {
    var h;
    if (null == d || !d.text) return !0;
    var v = this.In(u);
    if (v.length > 0)
      return v.some(
        (u) =>
          na(u.text, d.text, d.text_matching || "exact") ||
          na(u.$el_text, d.text, d.text_matching || "exact"),
      );
    var g,
      m,
      b,
      k =
        (null == u || null == (h = u.properties)
          ? void 0
          : h.$elements_chain) || "";
    return (
      !!k &&
      ((g = (function (u) {
        for (var d, h = [], v = /(?::|")text="(.*?)"/g; !H((d = v.exec(u))); )
          h.includes(d[1]) || h.push(d[1]);
        return h;
      })(k)),
      (m = d.text),
      (b = d.text_matching || "exact"),
      g.some((u) => na(u, m, b)))
    );
  }
  Cn(u, d) {
    var h, v;
    if (null == d || !d.selector) return !0;
    var g =
      null == u || null == (h = u.properties) ? void 0 : h.$element_selectors;
    if (null != g && g.includes(d.selector)) return !0;
    var m =
      (null == u || null == (v = u.properties) ? void 0 : v.$elements_chain) ||
      "";
    if (d.selector_regex && m)
      try {
        return new RegExp(d.selector_regex).test(m);
      } catch (u) {
        return !1;
      }
    return !1;
  }
  In(u) {
    var d;
    return null ==
      (null == u || null == (d = u.properties) ? void 0 : d.$elements)
      ? []
      : null == u
        ? void 0
        : u.properties.$elements;
  }
  yn(u, d) {
    return (
      null == d ||
      !d.properties ||
      0 === d.properties.length ||
      Rn(
        d.properties.reduce((u, d) => {
          var h = jt(d.value)
            ? d.value.map(String)
            : null != d.value
              ? [String(d.value)]
              : [];
          return (
            (u[d.key] = { values: h, operator: d.operator || "exact" }),
            u
          );
        }, {}),
        null == u ? void 0 : u.properties,
      )
    );
  }
}
class aa {
  constructor(u) {
    ((this._instance = u),
      (this.Tn = new Map()),
      (this.En = new Map()),
      (this.Mn = new Map()));
  }
  Pn(u, d) {
    return !!u && Rn(u.propertyFilters, null == d ? void 0 : d.properties);
  }
  Rn(u, d) {
    var h = new Map();
    return (
      u.forEach((u) => {
        var v;
        null == (v = u.conditions) ||
          null == (v = v[d]) ||
          null == (v = v.values) ||
          v.forEach((d) => {
            if (null != d && d.name) {
              var v = h.get(d.name) || [];
              (v.push(u.id), h.set(d.name, v));
            }
          });
      }),
      h
    );
  }
  On(u, d, h) {
    var v = (h === yo ? this.Tn : this.En).get(u),
      g = [];
    return (
      this.Ln((u) => {
        g = u.filter((u) => (null == v ? void 0 : v.includes(u.id)));
      }),
      g.filter((v) => {
        var g,
          m =
            null == (g = v.conditions) ||
            null == (g = g[h]) ||
            null == (g = g.values)
              ? void 0
              : g.find((d) => d.name === u);
        return this.Pn(m, d);
      })
    );
  }
  register(u) {
    var d;
    N(null == (d = this._instance) ? void 0 : d._addCaptureHook) ||
      (this.Fn(u), this.An(u));
  }
  An(u) {
    var d = u.filter((u) => {
      var d, h;
      return (
        (null == (d = u.conditions) ? void 0 : d.actions) &&
        (null == (h = u.conditions) ||
        null == (h = h.actions) ||
        null == (h = h.values)
          ? void 0
          : h.length) > 0
      );
    });
    0 !== d.length &&
      (null == this.Nn &&
        ((this.Nn = new oa(this._instance)),
        this.Nn.init(),
        this.Nn.xn((u) => {
          this.onAction(u);
        })),
      d.forEach((u) => {
        var d, h, v, g, m;
        u.conditions &&
          null != (d = u.conditions) &&
          d.actions &&
          null != (h = u.conditions) &&
          null != (h = h.actions) &&
          h.values &&
          (null == (v = u.conditions) ||
          null == (v = v.actions) ||
          null == (v = v.values)
            ? void 0
            : v.length) > 0 &&
          (null == (g = this.Nn) || g.register(u.conditions.actions.values),
          null == (m = u.conditions) ||
            null == (m = m.actions) ||
            null == (m = m.values) ||
            m.forEach((d) => {
              if (d && d.name) {
                var h = this.Mn.get(d.name);
                (h && h.push(u.id), this.Mn.set(d.name, h || [u.id]));
              }
            }));
      }));
  }
  Fn(u) {
    var d,
      h = u.filter((u) => {
        var d, h;
        return (
          (null == (d = u.conditions) ? void 0 : d.events) &&
          (null == (h = u.conditions) ||
          null == (h = h.events) ||
          null == (h = h.values)
            ? void 0
            : h.length) > 0
        );
      }),
      v = u.filter((u) => {
        var d, h;
        return (
          (null == (d = u.conditions) ? void 0 : d.cancelEvents) &&
          (null == (h = u.conditions) ||
          null == (h = h.cancelEvents) ||
          null == (h = h.values)
            ? void 0
            : h.length) > 0
        );
      });
    (0 === h.length && 0 === v.length) ||
      (null == (d = this._instance) ||
        d._addCaptureHook((u, d) => {
          this.onEvent(u, d);
        }),
      (this.Tn = this.Rn(u, yo)),
      (this.En = this.Rn(u, bo)));
  }
  onEvent(u, d) {
    var h,
      v = this.le(),
      g = this.$n(),
      m = this.Dn(),
      b =
        (null == (h = this._instance) || null == (h = h.persistence)
          ? void 0
          : h.props[g]) || [];
    if (m === u && d && b.length > 0) {
      var k, S;
      v.info("event matched, removing item from activated items", {
        event: u,
        eventPayload: d,
        existingActivatedItems: b,
      });
      var $ =
        (null == d || null == (k = d.properties) ? void 0 : k.$survey_id) ||
        (null == d || null == (S = d.properties) ? void 0 : S.$product_tour_id);
      if ($) {
        var F = b.indexOf($);
        0 > F || (b.splice(F, 1), this.qn(b));
      }
    } else {
      if (this.En.has(u)) {
        var C = this.On(u, d, bo);
        C.length > 0 &&
          (v.info("cancel event matched, cancelling items", {
            event: u,
            itemsToCancel: C.map((u) => u.id),
          }),
          C.forEach((u) => {
            var d = b.indexOf(u.id);
            (0 > d || b.splice(d, 1), this.jn(u.id));
          }),
          this.qn(b));
      }
      if (this.Tn.has(u)) {
        v.info("event name matched", {
          event: u,
          eventPayload: d,
          items: this.Tn.get(u),
        });
        var M = this.On(u, d, yo);
        this.qn(b.concat(M.map((u) => u.id) || []));
      }
    }
  }
  onAction(u) {
    var d,
      h = this.$n(),
      v =
        (null == (d = this._instance) || null == (d = d.persistence)
          ? void 0
          : d.props[h]) || [];
    this.Mn.has(u) && this.qn(v.concat(this.Mn.get(u) || []));
  }
  qn(u) {
    var d = this.le(),
      h = [...new Set(u)].filter((u) => !this.Hn(u));
    (d.info("updating activated items", { activatedItems: h }), this.Un(h));
  }
  getActivatedIds() {
    var u,
      d = this.$n();
    return (
      (null == (u = this._instance) || null == (u = u.persistence)
        ? void 0
        : u.props[d]) || []
    );
  }
  getEventToItemsMap() {
    return this.Tn;
  }
  Bn() {
    return this.Nn;
  }
}
class la extends aa {
  constructor(u) {
    super(u);
  }
  $n() {
    return bs;
  }
  Dn() {
    return Ro;
  }
  Ln(u) {
    var d;
    null == (d = this._instance) || d.getSurveys(u);
  }
  jn(u) {
    var d;
    null == (d = this._instance) || d.cancelPendingSurvey(u);
  }
  le() {
    return La;
  }
  Un(u) {
    var d;
    null == (d = this._instance) ||
      null == (d = d.persistence) ||
      d.register({ [bs]: u });
  }
  Hn() {
    return !1;
  }
  getSurveys() {
    return this.getActivatedIds();
  }
  getEventToSurveys() {
    return this.getEventToItemsMap();
  }
}
var El = "SDK is not enabled or survey functionality is not yet loaded",
  Pl = "Disabled. Not loading surveys.",
  Sl =
    null != _t && _t.location
      ? Nr(_t.location.hash, "__posthog") || Nr(location.hash, "state")
      : null,
  $l = "_postHogToolbarParams",
  Fl = mr("[Toolbar]"),
  Cl = mr("[FeatureFlags]"),
  Ml = mr("[FeatureFlags]", { debugEnabled: !0 }),
  Il = "\" failed. Feature flags didn't load in time.",
  ga = (u) => {
    for (var d = {}, h = 0; u.length > h; h++) d[u[h]] = !0;
    return d;
  },
  ma = (u) => {
    var d = {};
    for (var [h, v] of Zi(u || {})) v && (d[h] = v);
    return d;
  },
  Rl = mr("[Error tracking]"),
  Tl = "Refusing to render web experiment since the viewer is a likely bot",
  Ol = {
    icontains: (u, d) =>
      !!_t && d.href.toLowerCase().indexOf(u.toLowerCase()) > -1,
    not_icontains: (u, d) =>
      !!_t && -1 === d.href.toLowerCase().indexOf(u.toLowerCase()),
    regex: (u, d) => !!_t && Sn(d.href, u),
    not_regex: (u, d) => !!_t && !Sn(d.href, u),
    exact: (u, d) => d.href === u,
    is_not: (u, d) => d.href !== u,
  };
class xa {
  get qt() {
    return this._instance.config;
  }
  constructor(u) {
    var d = this;
    ((this.getWebExperimentsAndEvaluateDisplayLogic = function (u) {
      (void 0 === u && (u = !1),
        d.getWebExperiments((u) => {
          (xa.zn("retrieved web experiments from the server"),
            (d.Vn = new Map()),
            u.forEach((u) => {
              if (u.feature_flag_key) {
                var h;
                d.Vn &&
                  (xa.zn(
                    "setting flag key ",
                    u.feature_flag_key,
                    " to web experiment ",
                    u,
                  ),
                  null == (h = d.Vn) || h.set(u.feature_flag_key, u));
                var v = d._instance.getFeatureFlag(u.feature_flag_key);
                j(v) &&
                  u.variants[v] &&
                  d.Wn(u.name, v, u.variants[v].transforms);
              } else if (u.variants)
                for (var g in u.variants) {
                  var m = u.variants[g];
                  xa.Zn(m) && d.Wn(u.name, g, m.transforms);
                }
            }));
        }, u));
    }),
      (this._instance = u),
      this._instance.onFeatureFlags((u) => {
        this.onFeatureFlags(u);
      }));
  }
  initialize() {}
  onFeatureFlags(u) {
    if (this._is_bot()) xa.zn(Tl);
    else if (!this.qt.disable_web_experiments) {
      if (H(this.Vn))
        return (
          (this.Vn = new Map()),
          this.loadIfEnabled(),
          void this.previewWebExperiment()
        );
      (xa.zn("applying feature flags", u),
        u.forEach((u) => {
          var d;
          if (this.Vn && null != (d = this.Vn) && d.has(u)) {
            var h,
              v = this._instance.getFeatureFlag(u),
              g = null == (h = this.Vn) ? void 0 : h.get(u);
            v &&
              null != g &&
              g.variants[v] &&
              this.Wn(g.name, v, g.variants[v].transforms);
          }
        }));
    }
  }
  previewWebExperiment() {
    var u = xa.getWindowLocation();
    if (null != u && u.search) {
      var d = Ur(null == u ? void 0 : u.search, "__experiment_id"),
        h = Ur(null == u ? void 0 : u.search, "__experiment_variant");
      d &&
        h &&
        (xa.zn("previewing web experiments " + d + " && " + h),
        this.getWebExperiments(
          (u) => {
            this.Gn(parseInt(d), h, u);
          },
          !1,
          !0,
        ));
    }
  }
  loadIfEnabled() {
    this.qt.disable_web_experiments ||
      this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperiments(u, d, h) {
    if (this.qt.disable_web_experiments && !h) return u([]);
    var v = this._instance.get_property("$web_experiments");
    if (v && !d) return u(v);
    this._instance._send_request({
      url: this._instance.requestRouter.endpointFor(
        "api",
        "/api/web_experiments/?token=" + this.qt.token,
      ),
      method: "GET",
      callback: (d) =>
        u((200 === d.statusCode && d.json && d.json.experiments) || []),
    });
  }
  Gn(u, d, h) {
    var v = h.filter((d) => d.id === u);
    v &&
      v.length > 0 &&
      (xa.zn(
        "Previewing web experiment [" +
          v[0].name +
          "] with variant [" +
          d +
          "]",
      ),
      this.Wn(v[0].name, d, v[0].variants[d].transforms));
  }
  static Zn(u) {
    return !H(u.conditions) && xa.Qn(u) && xa.Jn(u);
  }
  static Qn(u) {
    var d;
    if (H(u.conditions) || H(null == (d = u.conditions) ? void 0 : d.url))
      return !0;
    var h,
      v,
      g,
      m = xa.getWindowLocation();
    return (
      !!m &&
      (null == (h = u.conditions) ||
        !h.url ||
        Ol[
          null !== (v = null == (g = u.conditions) ? void 0 : g.urlMatchType) &&
          void 0 !== v
            ? v
            : "icontains"
        ](u.conditions.url, m))
    );
  }
  static getWindowLocation() {
    return null == _t ? void 0 : _t.location;
  }
  static Jn(u) {
    var d;
    if (H(u.conditions) || H(null == (d = u.conditions) ? void 0 : d.utm))
      return !0;
    var h = Vr();
    if (h.utm_source) {
      var v,
        g,
        m,
        b,
        k,
        S,
        $,
        F,
        C =
          null == (v = u.conditions) ||
          null == (v = v.utm) ||
          !v.utm_campaign ||
          (null == (g = u.conditions) || null == (g = g.utm)
            ? void 0
            : g.utm_campaign) == h.utm_campaign,
        M =
          null == (m = u.conditions) ||
          null == (m = m.utm) ||
          !m.utm_source ||
          (null == (b = u.conditions) || null == (b = b.utm)
            ? void 0
            : b.utm_source) == h.utm_source,
        A =
          null == (k = u.conditions) ||
          null == (k = k.utm) ||
          !k.utm_medium ||
          (null == (S = u.conditions) || null == (S = S.utm)
            ? void 0
            : S.utm_medium) == h.utm_medium,
        G =
          null == ($ = u.conditions) ||
          null == ($ = $.utm) ||
          !$.utm_term ||
          (null == (F = u.conditions) || null == (F = F.utm)
            ? void 0
            : F.utm_term) == h.utm_term;
      return C && A && G && M;
    }
    return !1;
  }
  static zn(u) {
    for (
      var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), v = 1;
      d > v;
      v++
    )
      h[v - 1] = arguments[v];
    _r.info("[WebExperiments] " + u, h);
  }
  Wn(u, d, h) {
    this._is_bot()
      ? xa.zn(Tl)
      : "control" !== d
        ? h.forEach((h) => {
            if (h.selector) {
              var v;
              xa.zn(
                "applying transform of variant " +
                  d +
                  " for experiment " +
                  u +
                  " ",
                h,
              );
              var g =
                null == (v = document)
                  ? void 0
                  : v.querySelectorAll(h.selector);
              null == g ||
                g.forEach((u) => {
                  var d = u;
                  (h.html && (d.innerHTML = h.html),
                    h.css && d.setAttribute("style", h.css));
                });
            }
          })
        : xa.zn("Control variants leave the page unmodified.");
  }
  _is_bot() {
    return yt && this._instance
      ? En(yt, this.qt.custom_blocked_useragents)
      : void 0;
  }
}
var Al = mr("[Conversations]"),
  Ll = "Conversations not available yet.",
  ql = {
    featureFlags: class {
      constructor(u) {
        ((this.Kn = !1),
          (this.Yn = !1),
          (this.Xn = !1),
          (this.es = !1),
          (this.ts = !1),
          (this.rs = !1),
          (this.ns = !1),
          (this.ss = !1),
          (this._instance = u),
          (this.featureFlagEventHandlers = []));
      }
      get qt() {
        return this._instance.config;
      }
      get ni() {
        return this._instance.persistence;
      }
      os(u) {
        return this._instance.get_property(u);
      }
      us() {
        var u, d;
        return (
          null !==
            (u =
              null == (d = this.ni)
                ? void 0
                : d.wr(this.qt.feature_flag_cache_ttl_ms)) &&
          void 0 !== u &&
          u
        );
      }
      ls() {
        return (
          !!this.us() &&
          (this.ss ||
            this.Xn ||
            ((this.ss = !0),
            Cl.warn("Feature flag cache is stale, triggering refresh..."),
            this.reloadFeatureFlags()),
          !0)
        );
      }
      hs() {
        var u,
          d =
            null !== (u = this.qt.evaluation_contexts) && void 0 !== u
              ? u
              : this.qt.evaluation_environments;
        return (
          !this.qt.evaluation_environments ||
            this.qt.evaluation_contexts ||
            this.ns ||
            (Cl.warn(
              "evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version.",
            ),
            (this.ns = !0)),
          null != d && d.length
            ? d.filter((u) => {
                var d = u && "string" == typeof u && u.trim().length > 0;
                return (
                  d ||
                    Cl.error(
                      "Invalid evaluation context found:",
                      u,
                      "Expected non-empty string",
                    ),
                  d
                );
              })
            : []
        );
      }
      cs() {
        return this.hs().length > 0;
      }
      ds() {
        var u = this.qt.flag_keys;
        if (!N(u)) {
          if (jt(u))
            return u.filter((u) => {
              var d = u && "string" == typeof u && u.trim().length > 0;
              return (
                d ||
                  Cl.error(
                    "Invalid flag key found:",
                    u,
                    "Expected non-empty string",
                  ),
                d
              );
            });
          Cl.error(
            "Invalid flag_keys found:",
            u,
            "Expected array of non-empty strings",
          );
        }
      }
      initialize() {
        var u,
          d,
          { config: h } = this._instance,
          v =
            null !==
              (u = null == (d = h.bootstrap) ? void 0 : d.featureFlags) &&
            void 0 !== u
              ? u
              : {};
        if (Object.keys(v).length) {
          var g,
            m,
            b =
              null !==
                (g =
                  null == (m = h.bootstrap) ? void 0 : m.featureFlagPayloads) &&
              void 0 !== g
                ? g
                : {},
            k = Object.keys(v)
              .filter((u) => !!v[u])
              .reduce((u, d) => ((u[d] = v[d] || !1), u), {}),
            S = Object.keys(b)
              .filter((u) => k[u])
              .reduce((u, d) => (b[d] && (u[d] = b[d]), u), {});
          this.receivedFeatureFlags({
            featureFlags: k,
            featureFlagPayloads: S,
          });
        }
      }
      updateFlags(u, d, h) {
        var v = null != h && h.merge ? this.getFlagVariants() : {},
          g = null != h && h.merge ? this.getFlagPayloads() : {},
          m = f({}, v, u),
          b = f({}, g, d),
          k = {};
        for (var [S, $] of Object.entries(m)) {
          var F = "string" == typeof $;
          k[S] = {
            key: S,
            enabled: !!F || Boolean($),
            variant: F ? $ : void 0,
            reason: void 0,
            metadata: N(null == b ? void 0 : b[S])
              ? void 0
              : { id: 0, version: void 0, description: void 0, payload: b[S] },
          };
        }
        this.receivedFeatureFlags({ flags: k });
      }
      get hasLoadedFlags() {
        return this.Yn;
      }
      getFlags() {
        return Object.keys(this.getFlagVariants());
      }
      getFlagsWithDetails() {
        var u = this.os(us),
          d = this.os(ps),
          h = this.os(vs);
        if (!h && !d) return u || {};
        var v = Qi({}, u || {}),
          g = [...new Set([...Object.keys(h || {}), ...Object.keys(d || {})])];
        for (var m of g) {
          var b,
            k,
            S = v[m],
            $ = null == d ? void 0 : d[m],
            F = N($)
              ? null !== (b = null == S ? void 0 : S.enabled) &&
                void 0 !== b &&
                b
              : !!$,
            C = N($) ? S.variant : "string" == typeof $ ? $ : void 0,
            M = null == h ? void 0 : h[m],
            A = f({}, S, {
              enabled: F,
              variant: F
                ? null != C
                  ? C
                  : null == S
                    ? void 0
                    : S.variant
                : void 0,
            });
          (F !== (null == S ? void 0 : S.enabled) &&
            (A.original_enabled = null == S ? void 0 : S.enabled),
            C !== (null == S ? void 0 : S.variant) &&
              (A.original_variant = null == S ? void 0 : S.variant),
            M &&
              (A.metadata = f({}, null == S ? void 0 : S.metadata, {
                payload: M,
                original_payload:
                  null == S || null == (k = S.metadata) ? void 0 : k.payload,
              })),
            (v[m] = A));
        }
        return (
          this.Kn ||
            (Cl.warn(" Overriding feature flag details!", {
              flagDetails: u,
              overriddenPayloads: h,
              finalDetails: v,
            }),
            (this.Kn = !0)),
          v
        );
      }
      getFlagVariants() {
        var u = this.os(as),
          d = this.os(ps);
        if (!d) return u || {};
        for (var h = Qi({}, u), v = Object.keys(d), g = 0; v.length > g; g++)
          h[v[g]] = d[v[g]];
        return (
          this.Kn ||
            (Cl.warn(" Overriding feature flags!", {
              enabledFlags: u,
              overriddenFlags: d,
              finalFlags: h,
            }),
            (this.Kn = !0)),
          h
        );
      }
      getFlagPayloads() {
        var u = this.os(ds),
          d = this.os(vs);
        if (!d) return u || {};
        for (
          var h = Qi({}, u || {}), v = Object.keys(d), g = 0;
          v.length > g;
          g++
        )
          h[v[g]] = d[v[g]];
        return (
          this.Kn ||
            (Cl.warn(" Overriding feature flag payloads!", {
              flagPayloads: u,
              overriddenPayloads: d,
              finalPayloads: h,
            }),
            (this.Kn = !0)),
          h
        );
      }
      reloadFeatureFlags() {
        this.es ||
          this.qt.advanced_disable_feature_flags ||
          this.vs ||
          (this._instance.Li.emit("featureFlagsReloading", !0),
          (this.vs = setTimeout(() => {
            this.fs();
          }, 5)));
      }
      ps() {
        (clearTimeout(this.vs), (this.vs = void 0));
      }
      ensureFlagsLoaded() {
        this.Yn || this.Xn || this.vs || this.reloadFeatureFlags();
      }
      setAnonymousDistinctId(u) {
        this.$anon_distinct_id = u;
      }
      setReloadingPaused(u) {
        this.es = u;
      }
      fs(u) {
        var d;
        if ((this.ps(), !this._instance.Lr()))
          if (this.Xn) this.ts = !0;
          else {
            var h = this.qt.token,
              v = this.os(wr),
              g = {
                token: h,
                distinct_id: this._instance.get_distinct_id(),
                groups: this._instance.getGroups(),
                $anon_distinct_id: this.$anon_distinct_id,
                person_properties: f(
                  {},
                  (null == (d = this.ni) ? void 0 : d.get_initial_props()) ||
                    {},
                  this.os(gs) || {},
                ),
                group_properties: this.os(fs),
                timezone: Zr(),
              };
            (B(v) || N(v) || (g.$device_id = v),
              ((null != u && u.disableFlags) ||
                this.qt.advanced_disable_feature_flags) &&
                (g.disable_flags = !0),
              this.cs() && (g.evaluation_contexts = this.hs()));
            var m = this.ds();
            N(m) || (g.flag_keys = m);
            var b = !!this.qt.advanced_only_evaluate_survey_feature_flags,
              k = this._instance.requestRouter.endpointFor(
                "flags",
                "/flags/?v=2" +
                  (this.qt.advanced_only_evaluate_survey_feature_flags
                    ? "&only_evaluate_survey_feature_flags=true"
                    : ""),
              );
            ((this.Xn = !0),
              this._instance._send_request({
                method: "POST",
                url: k,
                data: g,
                compression: this.qt.disable_compression ? void 0 : Jo,
                timeout: this.qt.feature_flag_request_timeout_ms,
                callback: (u) => {
                  var d,
                    h,
                    v,
                    m = !0;
                  if (
                    (200 === u.statusCode &&
                      (this.ts || (this.$anon_distinct_id = void 0), (m = !1)),
                    (this.Xn = !1),
                    !g.disable_flags || this.ts)
                  ) {
                    this.rs = !m;
                    var k = [];
                    (u.error
                      ? u.error instanceof Error
                        ? k.push(
                            "AbortError" === u.error.name
                              ? "timeout"
                              : "connection_error",
                          )
                        : k.push("unknown_error")
                      : 200 !== u.statusCode &&
                        k.push("api_error_" + u.statusCode),
                      null != (d = u.json) &&
                        d.errorsWhileComputingFlags &&
                        k.push("errors_while_computing_flags"));
                    var S,
                      $ = !(
                        null == (h = u.json) ||
                        null == (h = h.quotaLimited) ||
                        !h.includes("feature_flags")
                      );
                    ($ && k.push("quota_limited"),
                      null == (v = this.ni) || v.register({ [Es]: k }),
                      $
                        ? Cl.warn(
                            "You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.",
                          )
                        : (g.disable_flags ||
                            this.receivedFeatureFlags(
                              null !== (S = u.json) && void 0 !== S ? S : {},
                              m,
                              { partialResponse: b },
                            ),
                          this.ts && ((this.ts = !1), this.fs())));
                  }
                },
              }));
          }
      }
      getFeatureFlag(u, d) {
        var h;
        if ((void 0 === d && (d = {}), !d.fresh || this.rs))
          if (this.Yn || (this.getFlags() && this.getFlags().length > 0)) {
            if (!this.ls()) {
              var v = this.getFeatureFlagResult(u, d);
              return null !== (h = null == v ? void 0 : v.variant) &&
                void 0 !== h
                ? h
                : null == v
                  ? void 0
                  : v.enabled;
            }
          } else Cl.warn('getFeatureFlag for key "' + u + Il);
      }
      getFeatureFlagDetails(u) {
        return this.getFlagsWithDetails()[u];
      }
      getFeatureFlagPayload(u) {
        var d = this.getFeatureFlagResult(u, { send_event: !1 });
        return null == d ? void 0 : d.payload;
      }
      getFeatureFlagResult(u, d) {
        if ((void 0 === d && (d = {}), !d.fresh || this.rs))
          if (this.Yn || (this.getFlags() && this.getFlags().length > 0)) {
            if (!this.ls()) {
              var h = this.getFlagVariants(),
                v = u in h,
                g = h[u],
                m = this.getFlagPayloads()[u],
                b = String(g),
                k = this.os(hs) || void 0,
                S = this.os(Ss) || void 0,
                $ = this.os(xs) || {};
              if (this.qt.advanced_feature_flags_dedup_per_session) {
                var F,
                  C = this._instance.get_session_id(),
                  M = this.os(ks);
                C &&
                  C !== M &&
                  (($ = {}),
                  null == (F = this.ni) || F.register({ [xs]: $, [ks]: C }));
              }
              if (
                (d.send_event || !("send_event" in d)) &&
                (!(u in $) || !$[u].includes(b))
              ) {
                var A, G, Q, te, re, se, ce, ue, pe, ve;
                (jt($[u]) ? $[u].push(b) : ($[u] = [b]),
                  null == (A = this.ni) || A.register({ [xs]: $ }));
                var ge = this.getFeatureFlagDetails(u),
                  _e = [
                    ...(null !== (G = this.os(Es)) && void 0 !== G ? G : []),
                  ];
                N(g) && _e.push("flag_missing");
                var be = {
                  $feature_flag: u,
                  $feature_flag_response: g,
                  $feature_flag_payload: m || null,
                  $feature_flag_request_id: k,
                  $feature_flag_evaluated_at: S,
                  $feature_flag_bootstrapped_response:
                    (null == (Q = this.qt.bootstrap) ||
                    null == (Q = Q.featureFlags)
                      ? void 0
                      : Q[u]) || null,
                  $feature_flag_bootstrapped_payload:
                    (null == (te = this.qt.bootstrap) ||
                    null == (te = te.featureFlagPayloads)
                      ? void 0
                      : te[u]) || null,
                  $used_bootstrap_value: !this.rs,
                };
                N(
                  null == ge || null == (re = ge.metadata)
                    ? void 0
                    : re.version,
                ) || (be.$feature_flag_version = ge.metadata.version);
                var Ee,
                  $e =
                    null !==
                      (se =
                        null == ge || null == (ce = ge.reason)
                          ? void 0
                          : ce.description) && void 0 !== se
                      ? se
                      : null == ge || null == (ue = ge.reason)
                        ? void 0
                        : ue.code;
                ($e && (be.$feature_flag_reason = $e),
                  null != ge &&
                    null != (pe = ge.metadata) &&
                    pe.id &&
                    (be.$feature_flag_id = ge.metadata.id),
                  (N(null == ge ? void 0 : ge.original_variant) &&
                    N(null == ge ? void 0 : ge.original_enabled)) ||
                    (be.$feature_flag_original_response = N(ge.original_variant)
                      ? ge.original_enabled
                      : ge.original_variant),
                  null != ge &&
                    null != (ve = ge.metadata) &&
                    ve.original_payload &&
                    (be.$feature_flag_original_payload =
                      null == ge || null == (Ee = ge.metadata)
                        ? void 0
                        : Ee.original_payload),
                  _e.length && (be.$feature_flag_error = _e.join(",")),
                  this._instance.capture("$feature_flag_called", be));
              }
              if (v) {
                var Fe = m;
                if (!N(m))
                  try {
                    Fe = JSON.parse(m);
                  } catch (u) {}
                return {
                  key: u,
                  enabled: !!g,
                  variant: "string" == typeof g ? g : void 0,
                  payload: Fe,
                };
              }
            }
          } else Cl.warn('getFeatureFlagResult for key "' + u + Il);
      }
      getRemoteConfigPayload(u, d) {
        var h = this.qt.token,
          v = { distinct_id: this._instance.get_distinct_id(), token: h };
        this.cs() && (v.evaluation_contexts = this.hs());
        var g = this.ds();
        (N(g) || (v.flag_keys = g),
          this._instance._send_request({
            method: "POST",
            url: this._instance.requestRouter.endpointFor(
              "flags",
              "/flags/?v=2",
            ),
            data: v,
            compression: this.qt.disable_compression ? void 0 : Jo,
            timeout: this.qt.feature_flag_request_timeout_ms,
            callback(h) {
              var v,
                g = null == (v = h.json) ? void 0 : v.featureFlagPayloads;
              d((null == g ? void 0 : g[u]) || void 0);
            },
          }));
      }
      isFeatureEnabled(u, d) {
        if ((void 0 === d && (d = {}), !d.fresh || this.rs)) {
          if (this.Yn || (this.getFlags() && this.getFlags().length > 0)) {
            var h = this.getFeatureFlag(u, d);
            return N(h) ? void 0 : !!h;
          }
          Cl.warn('isFeatureEnabled for key "' + u + Il);
        }
      }
      addFeatureFlagsHandler(u) {
        this.featureFlagEventHandlers.push(u);
      }
      removeFeatureFlagsHandler(u) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(
          (d) => d !== u,
        );
      }
      receivedFeatureFlags(u, d, h) {
        if (this.ni) {
          this.Yn = !0;
          var v = this.getFlagVariants(),
            g = this.getFlagPayloads(),
            m = this.getFlagsWithDetails();
          (!(function (u, d, h, v, g, m) {
            (void 0 === h && (h = {}),
              void 0 === v && (v = {}),
              void 0 === g && (g = {}));
            var b = ((u) => {
                var d = u.flags;
                return (
                  d
                    ? ((u.featureFlags = Object.fromEntries(
                        Object.keys(d).map((u) => {
                          var h;
                          return [
                            u,
                            null !== (h = d[u].variant) && void 0 !== h
                              ? h
                              : d[u].enabled,
                          ];
                        }),
                      )),
                      (u.featureFlagPayloads = Object.fromEntries(
                        Object.keys(d)
                          .filter((u) => d[u].enabled)
                          .filter((u) => {
                            var h;
                            return null == (h = d[u].metadata)
                              ? void 0
                              : h.payload;
                          })
                          .map((u) => {
                            var h;
                            return [
                              u,
                              null == (h = d[u].metadata) ? void 0 : h.payload,
                            ];
                          }),
                      )))
                    : Cl.warn(
                        "Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version",
                      ),
                  u
                );
              })(u),
              k = b.flags,
              S = b.featureFlags,
              $ = b.featureFlagPayloads;
            if (S) {
              var F = u.requestId,
                C = u.evaluatedAt;
              if (jt(S)) {
                Cl.warn(
                  "v1 of the feature flags endpoint is deprecated. Please use the latest version.",
                );
                var M = {};
                if (S) for (var A = 0; S.length > A; A++) M[S[A]] = !0;
                d && d.register({ [ls]: S, [as]: M });
              } else {
                var G = S,
                  Q = $,
                  te = k;
                if (null != m && m.partialResponse)
                  ((G = f({}, h, G)), (Q = f({}, v, Q)), (te = f({}, g, te)));
                else if (u.errorsWhileComputingFlags)
                  if (k) {
                    var re = new Set(
                      Object.keys(k).filter((u) => {
                        var d;
                        return !(null != (d = k[u]) && d.failed);
                      }),
                    );
                    ((G = f(
                      {},
                      h,
                      Object.fromEntries(
                        Object.entries(G).filter((u) => {
                          var [d] = u;
                          return re.has(d);
                        }),
                      ),
                    )),
                      (Q = f(
                        {},
                        v,
                        Object.fromEntries(
                          Object.entries(Q || {}).filter((u) => {
                            var [d] = u;
                            return re.has(d);
                          }),
                        ),
                      )),
                      (te = f(
                        {},
                        g,
                        Object.fromEntries(
                          Object.entries(te || {}).filter((u) => {
                            var [d] = u;
                            return re.has(d);
                          }),
                        ),
                      )));
                  } else
                    ((G = f({}, h, G)), (Q = f({}, v, Q)), (te = f({}, g, te)));
                d &&
                  d.register(
                    f(
                      {
                        [ls]: Object.keys(ma(G)),
                        [as]: G || {},
                        [ds]: Q || {},
                        [us]: te || {},
                      },
                      F ? { [hs]: F } : {},
                      C ? { [Ss]: C } : {},
                    ),
                  );
              }
            }
          })(u, this.ni, v, g, m, h),
            d || (this.ss = !1),
            this.gs(d));
        }
      }
      override(u, d) {
        (void 0 === d && (d = !1),
          Cl.warn(
            "override is deprecated. Please use overrideFeatureFlags instead.",
          ),
          this.overrideFeatureFlags({ flags: u, suppressWarning: d }));
      }
      overrideFeatureFlags(u) {
        if (!this._instance.__loaded || !this.ni)
          return Cl.uninitializedWarning(
            "posthog.featureFlags.overrideFeatureFlags",
          );
        if (!1 === u)
          return (
            this.ni.unregister(ps),
            this.ni.unregister(vs),
            this.gs(),
            Ml.info("All overrides cleared")
          );
        if (jt(u)) {
          var d = ga(u);
          return (
            this.ni.register({ [ps]: d }),
            this.gs(),
            Ml.info("Flag overrides set", { flags: u })
          );
        }
        if (u && "object" == typeof u && ("flags" in u || "payloads" in u)) {
          var h,
            v = u;
          if (
            ((this.Kn = Boolean(
              null !== (h = v.suppressWarning) && void 0 !== h && h,
            )),
            "flags" in v)
          )
            if (!1 === v.flags)
              (this.ni.unregister(ps), Ml.info("Flag overrides cleared"));
            else if (v.flags) {
              if (jt(v.flags)) {
                var g = ga(v.flags);
                this.ni.register({ [ps]: g });
              } else this.ni.register({ [ps]: v.flags });
              Ml.info("Flag overrides set", { flags: v.flags });
            }
          return (
            "payloads" in v &&
              (!1 === v.payloads
                ? (this.ni.unregister(vs), Ml.info("Payload overrides cleared"))
                : v.payloads &&
                  (this.ni.register({ [vs]: v.payloads }),
                  Ml.info("Payload overrides set", { payloads: v.payloads }))),
            void this.gs()
          );
        }
        if (u && "object" == typeof u)
          return (
            this.ni.register({ [ps]: u }),
            this.gs(),
            Ml.info("Flag overrides set", { flags: u })
          );
        Cl.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
          overrideOptions: u,
        });
      }
      onFeatureFlags(u) {
        if ((this.addFeatureFlagsHandler(u), this.Yn)) {
          var { flags: d, flagVariants: h } = this.ys();
          u(d, h);
        }
        return () => this.removeFeatureFlagsHandler(u);
      }
      updateEarlyAccessFeatureEnrollment(u, d, h) {
        var v,
          g = (this.os(cs) || []).find((d) => d.flagKey === u),
          m = { ["$feature_enrollment/" + u]: d },
          b = { $feature_flag: u, $feature_enrollment: d, $set: m };
        (g && (b.$early_access_feature_name = g.name),
          h && (b.$feature_enrollment_stage = h),
          this._instance.capture("$feature_enrollment_update", b),
          this.setPersonPropertiesForFlags(m, !1));
        var k = f({}, this.getFlagVariants(), { [u]: d });
        (null == (v = this.ni) ||
          v.register({ [ls]: Object.keys(ma(k)), [as]: k }),
          this.gs());
      }
      getEarlyAccessFeatures(u, d, h) {
        void 0 === d && (d = !1);
        var v = this.os(cs),
          g = h ? "&" + h.map((u) => "stage=" + u).join("&") : "";
        if (v && !d) return u(v);
        this._instance._send_request({
          url: this._instance.requestRouter.endpointFor(
            "api",
            "/api/early_access_features/?token=" + this.qt.token + g,
          ),
          method: "GET",
          callback: (d) => {
            var h, v;
            if (d.json) {
              var g = d.json.earlyAccessFeatures;
              return (
                null == (h = this.ni) || h.unregister(cs),
                null == (v = this.ni) || v.register({ [cs]: g }),
                u(g)
              );
            }
          },
        });
      }
      ys() {
        var u = this.getFlags(),
          d = this.getFlagVariants();
        return {
          flags: u.filter((u) => d[u]),
          flagVariants: Object.keys(d)
            .filter((u) => d[u])
            .reduce((u, h) => ((u[h] = d[h]), u), {}),
        };
      }
      gs(u) {
        var { flags: d, flagVariants: h } = this.ys();
        this.featureFlagEventHandlers.forEach((v) =>
          v(d, h, { errorsLoading: u }),
        );
      }
      setPersonPropertiesForFlags(u, d) {
        void 0 === d && (d = !0);
        var h = this.os(gs) || {},
          v =
            (null == u ? void 0 : u.$set) ||
            (null != u && u.$set_once ? {} : u),
          g = null == u ? void 0 : u.$set_once,
          m = {};
        if (g)
          for (var b in g)
            ({}).hasOwnProperty.call(g, b) && (b in h || (m[b] = g[b]));
        (this._instance.register({ [gs]: f({}, h, m, v) }),
          d && this._instance.reloadFeatureFlags());
      }
      resetPersonPropertiesForFlags() {
        this._instance.unregister(gs);
      }
      setGroupPropertiesForFlags(u, d) {
        void 0 === d && (d = !0);
        var h = this.os(fs) || {};
        (0 !== Object.keys(h).length &&
          Object.keys(h).forEach((d) => {
            ((h[d] = f({}, h[d], u[d])), delete u[d]);
          }),
          this._instance.register({ [fs]: f({}, h, u) }),
          d && this._instance.reloadFeatureFlags());
      }
      resetGroupPropertiesForFlags(u) {
        if (u) {
          var d = this.os(fs) || {};
          this._instance.register({ [fs]: f({}, d, { [u]: {} }) });
        } else this._instance.unregister(fs);
      }
      reset() {
        ((this.Yn = !1),
          (this.Xn = !1),
          (this.es = !1),
          (this.ts = !1),
          (this.rs = !1),
          (this.$anon_distinct_id = void 0),
          this.ps(),
          (this.Kn = !1));
      }
    },
  },
  Dl = {
    sessionRecording: class {
      get qt() {
        return this._instance.config;
      }
      get ni() {
        return this._instance.persistence;
      }
      get started() {
        var u;
        return !(null == (u = this.bs) || !u.isStarted);
      }
      get status() {
        var u, d;
        return this._s === gl || this._s === fl
          ? this._s
          : null !== (u = null == (d = this.bs) ? void 0 : d.status) &&
              void 0 !== u
            ? u
            : this._s;
      }
      constructor(u) {
        if (
          ((this._forceAllowLocalhostNetworkCapture = !1),
          (this._s = pl),
          (this.ws = void 0),
          (this._instance = u),
          !this._instance.sessionManager)
        )
          throw (
            ml.error("started without valid sessionManager"),
            new Error(
              _l + " started without valid sessionManager. This is a bug.",
            )
          );
        if (this.qt.cookieless_mode === Qs)
          throw new Error(_l + ' cannot be used with cookieless_mode="always"');
      }
      initialize() {
        this.startIfEnabledOrStop();
      }
      get xs() {
        var u,
          d = !(null == (u = this._instance.get_property(Br)) || !u.enabled),
          h = !this.qt.disable_session_recording,
          v =
            this.qt.disable_session_recording ||
            this._instance.consent.isOptedOut();
        return _t && d && h && !v;
      }
      startIfEnabledOrStop(u) {
        var d;
        if (!this.xs || null == (d = this.bs) || !d.isStarted) {
          var h = !N(Object.assign) && !N(Array.from);
          this.xs && h
            ? (this.Ss(u), ml.info("starting"))
            : ((this._s = pl), this.stopRecording());
        }
      }
      Ss(u) {
        var d, h, v;
        this.xs &&
          (this._s !== gl && this._s !== fl && (this._s = vl),
          null != $t &&
          null != (d = $t.__PosthogExtensions__) &&
          null != (d = d.rrweb) &&
          d.record &&
          null != (h = $t.__PosthogExtensions__) &&
          h.initSessionRecording
            ? this.ks(u)
            : null == (v = $t.__PosthogExtensions__) ||
              null == v.loadExternalDependency ||
              v.loadExternalDependency(this._instance, this.Cs, (d) => {
                if (d) return ml.error("could not load recorder", d);
                this.ks(u);
              }));
      }
      stopRecording() {
        var u, d;
        (null == (u = this.ws) || u.call(this),
          (this.ws = void 0),
          null == (d = this.bs) || d.stop());
      }
      Is() {
        var u, d;
        (null == (u = this.ws) || u.call(this),
          (this.ws = void 0),
          null == (d = this.bs) || d.discard());
      }
      Ts() {
        var u;
        null == (u = this.ni) || u.unregister(os);
      }
      Es(u, d) {
        if (H(u)) return null;
        var h,
          v = q(u) ? u : parseFloat(u);
        return "number" != typeof (h = v) ||
          !Number.isFinite(h) ||
          0 > h ||
          h > 1
          ? (ml.warn(
              d + " must be between 0 and 1. Ignoring invalid value:",
              u,
            ),
            null)
          : v;
      }
      Ms(u) {
        if (this.ni) {
          var d,
            h,
            v = this.ni,
            s = () => {
              var d,
                h = !1 === u.sessionRecording ? void 0 : u.sessionRecording,
                g = this.Es(
                  null == (d = this.qt.session_recording)
                    ? void 0
                    : d.sampleRate,
                  "session_recording.sampleRate",
                ),
                m = this.Es(
                  null == h ? void 0 : h.sampleRate,
                  "remote config sampleRate",
                ),
                b = null != g ? g : m;
              H(b) && this.Ts();
              var k = null == h ? void 0 : h.minimumDurationMilliseconds;
              v.register({
                [Br]: f({ cache_timestamp: Date.now(), enabled: !!h }, h, {
                  networkPayloadCapture: f(
                    { capturePerformance: u.capturePerformance },
                    null == h ? void 0 : h.networkPayloadCapture,
                  ),
                  canvasRecording: {
                    enabled: null == h ? void 0 : h.recordCanvas,
                    fps: null == h ? void 0 : h.canvasFps,
                    quality: null == h ? void 0 : h.canvasQuality,
                  },
                  sampleRate: b,
                  minimumDurationMilliseconds: N(k) ? null : k,
                  endpoint: null == h ? void 0 : h.endpoint,
                  triggerMatchType: null == h ? void 0 : h.triggerMatchType,
                  masking: null == h ? void 0 : h.masking,
                  urlTriggers: null == h ? void 0 : h.urlTriggers,
                  version: null == h ? void 0 : h.version,
                  triggerGroups: null == h ? void 0 : h.triggerGroups,
                }),
              });
            };
          (s(),
            null == (d = this.ws) || d.call(this),
            (this.ws =
              null == (h = this._instance.sessionManager)
                ? void 0
                : h.onSessionId(s)));
        }
      }
      onRemoteConfig(u) {
        return "sessionRecording" in u
          ? !1 === u.sessionRecording
            ? (this.Ms(u), void this.Is())
            : (this.Ms(u), void this.startIfEnabledOrStop())
          : (this._s === gl &&
              ((this._s = fl),
              ml.warn(
                "config refresh failed, recording will not start until page reload",
              )),
            void this.startIfEnabledOrStop());
      }
      log(u, d) {
        var h;
        (void 0 === d && (d = "log"),
          null != (h = this.bs) && h.log
            ? this.bs.log(u, d)
            : ml.warn("log called before recorder was ready"));
      }
      get Cs() {
        var u,
          d,
          h =
            null == (u = this._instance) || null == (u = u.persistence)
              ? void 0
              : u.get_property(Br);
        return (
          (null == h || null == (d = h.scriptConfig) ? void 0 : d.script) ||
          "lazy-recorder"
        );
      }
      Ps() {
        var u,
          d,
          h = this._instance.get_property(Br);
        if (!h) return !1;
        try {
          d = "object" == typeof h ? h : JSON.parse(h);
        } catch (u) {
          return (
            ml.warn(
              "persisted remote config for session recording is invalid and will be ignored",
              u,
            ),
            !1
          );
        }
        var v =
          null !== (u = d.cache_timestamp) && void 0 !== u ? u : Date.now();
        return 36e5 >= Date.now() - v;
      }
      ks(u) {
        var d, h;
        if (null == (d = $t.__PosthogExtensions__) || !d.initSessionRecording)
          return (
            ml.warn(
              "Called on script loaded before session recording is available. This can be caused by adblockers.",
            ),
            void this._instance.register_for_session({ [Ns]: !0 })
          );
        if (
          (this.bs ||
            ((this.bs =
              null == (h = $t.__PosthogExtensions__)
                ? void 0
                : h.initSessionRecording(this._instance)),
            (this.bs._forceAllowLocalhostNetworkCapture =
              this._forceAllowLocalhostNetworkCapture)),
          !this.Ps())
        ) {
          if (this._s === fl || this._s === gl) return;
          return (
            (this._s = gl),
            ml.info(
              "persisted remote config is stale, requesting fresh config before starting",
            ),
            void new ys(this._instance).load()
          );
        }
        ((this._s = vl), this.bs.start(u));
      }
      onRRwebEmit(u) {
        var d;
        null == (d = this.bs) || null == d.onRRwebEmit || d.onRRwebEmit(u);
      }
      overrideLinkedFlag() {
        var u, d;
        (this.bs || null == (d = this.ni) || d.register({ [es]: !0 }),
          null == (u = this.bs) || u.overrideLinkedFlag());
      }
      overrideSampling() {
        var u, d;
        (this.bs || null == (d = this.ni) || d.register({ [Jr]: !0 }),
          null == (u = this.bs) || u.overrideSampling());
      }
      overrideTrigger(u) {
        var d, h;
        (this.bs ||
          null == (h = this.ni) ||
          h.register({ ["url" === u ? rs : ss]: !0 }),
          null == (d = this.bs) || d.overrideTrigger(u));
      }
      get sdkDebugProperties() {
        var u;
        return (
          (null == (u = this.bs) ? void 0 : u.sdkDebugProperties) || {
            $recording_status: this.status,
          }
        );
      }
      tryAddCustomEvent(u, d) {
        var h;
        return !(null == (h = this.bs) || !h.tryAddCustomEvent(u, d));
      }
    },
  },
  jl = {
    autocapture: class {
      constructor(u) {
        ((this.Rs = !1),
          (this.Os = null),
          (this.Ls = !1),
          (this.instance = u),
          (this.rageclicks = new Do(u.config.rageclick)),
          (this.Fs = null));
      }
      initialize() {
        this.startIfEnabled();
      }
      get qt() {
        var u,
          d,
          h = U(this.instance.config.autocapture)
            ? this.instance.config.autocapture
            : {};
        return (
          (h.url_allowlist =
            null == (u = h.url_allowlist)
              ? void 0
              : u.map((u) => new RegExp(u))),
          (h.url_ignorelist =
            null == (d = h.url_ignorelist)
              ? void 0
              : d.map((u) => new RegExp(u))),
          h
        );
      }
      As() {
        if (this.isBrowserSupported()) {
          if (_t && bt) {
            var e = (u) => {
              u = u || (null == _t ? void 0 : _t.event);
              try {
                this.Ns(u);
              } catch (_t) {
                ll.error("Failed to capture event", _t);
              }
            };
            if (
              (nr(bt, "submit", e, { capture: !0 }),
              nr(bt, "change", e, { capture: !0 }),
              nr(bt, "click", e, { capture: !0 }),
              this.qt.capture_copied_text)
            ) {
              var i = (u) => {
                u = u || (null == _t ? void 0 : _t.event);
                try {
                  this.Ns(u, al);
                } catch (_t) {
                  ll.error("Failed to capture copy/cut event", _t);
                }
              };
              (nr(bt, "copy", i, { capture: !0 }),
                nr(bt, "cut", i, { capture: !0 }));
            }
          }
        } else
          ll.info(
            "Disabling Automatic Event Collection because this browser is not supported",
          );
      }
      startIfEnabled() {
        this.isEnabled && !this.Rs && (this.As(), (this.Rs = !0));
      }
      onRemoteConfig(u) {
        (u.elementsChainAsString && (this.Ls = u.elementsChainAsString),
          this.instance.persistence &&
            this.instance.persistence.register({
              [Pr]: !!u.autocapture_opt_out,
            }),
          (this.Os = !!u.autocapture_opt_out),
          this.startIfEnabled());
      }
      setElementSelectors(u) {
        this.Fs = u;
      }
      getElementSelectors(u) {
        var d,
          h = [];
        return (
          null == (d = this.Fs) ||
            d.forEach((d) => {
              var v = null == bt ? void 0 : bt.querySelectorAll(d);
              null == v ||
                v.forEach((v) => {
                  u === v && h.push(d);
                });
            }),
          h
        );
      }
      get isEnabled() {
        var u,
          d,
          h = null == (u = this.instance.persistence) ? void 0 : u.props[Pr];
        if (B(this.Os) && !W(h) && !this.instance.Lr()) return !1;
        var v = null !== (d = this.Os) && void 0 !== d ? d : !!h;
        return !!this.instance.config.autocapture && !v;
      }
      Ns(u, d) {
        if ((void 0 === d && (d = "$autocapture"), this.isEnabled)) {
          var h,
            v = fo(u);
          (ao(v) && (v = v.parentNode || null),
            "$autocapture" === d &&
              "click" === u.type &&
              u instanceof MouseEvent &&
              this.instance.config.rageclick &&
              null != (h = this.rageclicks) &&
              h.isRageClick(
                u.clientX,
                u.clientY,
                u.timeStamp || new Date().getTime(),
              ) &&
              (function (u, d) {
                if (!_t || wo(u)) return !1;
                var h, v, g;
                if (
                  (W(d)
                    ? ((h = !!d && el), (v = void 0))
                    : ((h =
                        null !==
                          (g =
                            null == d ? void 0 : d.css_selector_ignorelist) &&
                        void 0 !== g
                          ? g
                          : el),
                      (v = null == d ? void 0 : d.content_ignorelist)),
                  !1 === h)
                )
                  return !1;
                var { targetElementList: m } = xo(u, !1);
                return (
                  !(function (u, d) {
                    if (!1 === u || N(u)) return !1;
                    var h;
                    if (!0 === u) h = Qa;
                    else {
                      if (!jt(u)) return !1;
                      if (u.length > 10)
                        return (
                          _r.error(
                            "[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching.",
                          ),
                          !1
                        );
                      h = u.map((u) => u.toLowerCase());
                    }
                    return d.some((u) => {
                      var { safeText: d, ariaLabel: v } = u;
                      return h.some((u) => d.includes(u) || v.includes(u));
                    });
                  })(
                    v,
                    m.map((u) => {
                      var d;
                      return {
                        safeText: po(u).toLowerCase(),
                        ariaLabel:
                          (null == (d = u.getAttribute("aria-label"))
                            ? void 0
                            : d.toLowerCase().trim()) || "",
                      };
                    }),
                  ) && !go(m, h)
                );
              })(v, this.instance.config.rageclick) &&
              this.Ns(u, "$rageclick"));
          var g = d === al;
          if (
            v &&
            (function (u, d, h, v, g) {
              var m, b, k, S;
              if ((void 0 === h && (h = void 0), !_t || wo(u))) return !1;
              if (null != (m = h) && m.url_allowlist && !ho(h.url_allowlist))
                return !1;
              if (null != (b = h) && b.url_ignorelist && ho(h.url_ignorelist))
                return !1;
              if (null != (k = h) && k.dom_event_allowlist) {
                var $ = h.dom_event_allowlist;
                if ($ && !$.some((u) => d.type === u)) return !1;
              }
              var { parentIsUsefulElement: F, targetElementList: C } = xo(u, v);
              if (
                !(function (u, d) {
                  var h = null == d ? void 0 : d.element_allowlist;
                  if (N(h)) return !0;
                  var v,
                    s = function (u) {
                      if (h.some((d) => u.tagName.toLowerCase() === d))
                        return { v: !0 };
                    };
                  for (var g of u) if ((v = s(g))) return v.v;
                  return !1;
                })(C, h)
              )
                return !1;
              if (!go(C, null == (S = h) ? void 0 : S.css_selector_allowlist))
                return !1;
              var M = _t.getComputedStyle(u);
              if (
                M &&
                "pointer" === M.getPropertyValue("cursor") &&
                "click" === d.type
              )
                return !0;
              var A = u.tagName.toLowerCase();
              switch (A) {
                case "html":
                  return !1;
                case "form":
                  return (g || ["submit"]).indexOf(d.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (g || ["change", "click"]).indexOf(d.type) >= 0;
                default:
                  return F
                    ? (g || ["click"]).indexOf(d.type) >= 0
                    : (g || ["click"]).indexOf(d.type) >= 0 &&
                        (Za.indexOf(A) > -1 ||
                          "true" === u.getAttribute("contenteditable"));
              }
            })(v, u, this.qt, g, g ? ["copy", "cut"] : void 0)
          ) {
            var { props: m, explicitNoCapture: b } = (function (u, d) {
              var h,
                v,
                {
                  e: g,
                  maskAllElementAttributes: m,
                  maskAllText: b,
                  elementAttributeIgnoreList: k,
                  elementsChainAsString: S,
                } = d;
              if (!no(u)) return { props: {} };
              for (var $ = [u], F = u; F.parentNode && !oo(F, "body"); )
                if (lo(F.parentNode))
                  ($.push(F.parentNode.host), (F = F.parentNode.host));
                else {
                  if (!no(F.parentNode)) break;
                  ($.push(F.parentNode), (F = F.parentNode));
                }
              var C,
                M,
                A = [],
                G = {},
                Q = !1,
                te = !1;
              if (
                (Xi($, (u) => {
                  var d = Eo(u);
                  if (oo(u, "a")) {
                    var h = u.getAttribute("href");
                    Q = d && !!h && Io(h) && h;
                  }
                  (P(vo(u), "ph-no-capture") && (te = !0),
                    A.push(
                      (function (u, d, h, v) {
                        var g = u.tagName.toLowerCase(),
                          m = { tag_name: g };
                        Za.indexOf(g) > -1 &&
                          !h &&
                          (m.$el_text =
                            "a" === g.toLowerCase() ||
                            "button" === g.toLowerCase()
                              ? No(1024, Co(u))
                              : No(1024, po(u)));
                        var b = vo(u);
                        (b.length > 0 &&
                          (m.classes = b.filter(function (u) {
                            return "" !== u;
                          })),
                          Xi(u.attributes, function (h) {
                            var g;
                            if (
                              (!So(u) ||
                                -1 !==
                                  ["name", "id", "class", "aria-label"].indexOf(
                                    h.name,
                                  )) &&
                              (null == v || !v.includes(h.name)) &&
                              !d &&
                              Io(h.value) &&
                              (!j((g = h.name)) ||
                                ("_ngcontent" !== g.substring(0, 10) &&
                                  "_nghost" !== g.substring(0, 7)))
                            ) {
                              var b = h.value;
                              ("class" === h.name && (b = uo(b).join(" ")),
                                (m["attr__" + h.name] = No(1024, b)));
                            }
                          }));
                        for (var k = 1, S = 1, $ = u; ($ = jo($)); )
                          (k++, $.tagName === u.tagName && S++);
                        return ((m.nth_child = k), (m.nth_of_type = S), m);
                      })(u, m, b, k),
                    ));
                  var v = (function (u) {
                    if (!Eo(u)) return {};
                    var d = {};
                    return (
                      Xi(u.attributes, function (u) {
                        if (
                          u.name &&
                          0 === u.name.indexOf("data-ph-capture-attribute")
                        ) {
                          var h = u.name.replace(
                              "data-ph-capture-attribute-",
                              "",
                            ),
                            v = u.value;
                          h && v && Io(v) && (d[h] = v);
                        }
                      }),
                      d
                    );
                  })(u);
                  Qi(G, v);
                }),
                te)
              )
                return { props: {}, explicitNoCapture: te };
              if (
                (b ||
                  (A[0].$el_text =
                    oo(u, "a") || oo(u, "button") ? Co(u) : po(u)),
                Q)
              ) {
                var re, se;
                A[0].attr__href = Q;
                var ce = null == (re = Dr(Q)) ? void 0 : re.host,
                  ue =
                    null == _t || null == (se = _t.location) ? void 0 : se.host;
                ce && ue && ce !== ue && (C = Q);
              }
              return {
                props: Qi(
                  { $event_type: g.type, $ce_version: 1 },
                  S ? {} : { $elements: A },
                  {
                    $elements_chain:
                      ((M = A),
                      (function (u) {
                        return u
                          .map((u) => {
                            var d,
                              h,
                              v = "";
                            if ((u.tag_name && (v += u.tag_name), u.attr_class))
                              for (var g of (u.attr_class.sort(), u.attr_class))
                                v += "." + g.replace(/"/g, "");
                            var m = f(
                                {},
                                u.text ? { text: u.text } : {},
                                {
                                  "nth-child":
                                    null !== (d = u.nth_child) && void 0 !== d
                                      ? d
                                      : 0,
                                  "nth-of-type":
                                    null !== (h = u.nth_of_type) && void 0 !== h
                                      ? h
                                      : 0,
                                },
                                u.href ? { href: u.href } : {},
                                u.attr_id ? { attr_id: u.attr_id } : {},
                                u.attributes,
                              ),
                              b = {};
                            return (
                              Zi(m)
                                .sort((u, d) => {
                                  var [h] = u,
                                    [v] = d;
                                  return h.localeCompare(v);
                                })
                                .forEach((u) => {
                                  var [d, h] = u;
                                  return (b[Fo(d.toString())] = Fo(
                                    h.toString(),
                                  ));
                                }),
                              (v += ":") +
                                Zi(b)
                                  .map((u) => {
                                    var [d, h] = u;
                                    return d + '="' + h + '"';
                                  })
                                  .join("")
                            );
                          })
                          .join(";");
                      })(
                        (function (u) {
                          return u.map((u) => {
                            var d,
                              h,
                              v = {
                                text:
                                  null == (d = u.$el_text)
                                    ? void 0
                                    : d.slice(0, 400),
                                tag_name: u.tag_name,
                                href:
                                  null == (h = u.attr__href)
                                    ? void 0
                                    : h.slice(0, 2048),
                                attr_class: Mo(u),
                                attr_id: u.attr__id,
                                nth_child: u.nth_child,
                                nth_of_type: u.nth_of_type,
                                attributes: {},
                              };
                            return (
                              Zi(u)
                                .filter((u) => {
                                  var [d] = u;
                                  return 0 === d.indexOf("attr__");
                                })
                                .forEach((u) => {
                                  var [d, h] = u;
                                  return (v.attributes[d] = h);
                                }),
                              v
                            );
                          });
                        })(M),
                      )),
                  },
                  null != (h = A[0]) && h.$el_text
                    ? { $el_text: null == (v = A[0]) ? void 0 : v.$el_text }
                    : {},
                  C && "click" === g.type ? { $external_click_url: C } : {},
                  G,
                ),
              };
            })(v, {
              e: u,
              maskAllElementAttributes:
                this.instance.config.mask_all_element_attributes,
              maskAllText: this.instance.config.mask_all_text,
              elementAttributeIgnoreList: this.qt.element_attribute_ignorelist,
              elementsChainAsString: this.Ls,
            });
            if (b) return !1;
            var k = this.getElementSelectors(v);
            if ((k && k.length > 0 && (m.$element_selectors = k), d === al)) {
              var S,
                $ = co(
                  null == _t || null == (S = _t.getSelection())
                    ? void 0
                    : S.toString(),
                ),
                F = u.type || "clipboard";
              if (!$) return !1;
              ((m.$selected_content = $), (m.$copy_type = F));
            }
            return (this.instance.capture(d, m), !0);
          }
        }
      }
      isBrowserSupported() {
        return D(null == bt ? void 0 : bt.querySelectorAll);
      }
    },
    historyAutocapture: class {
      constructor(u) {
        var d;
        ((this._instance = u),
          (this.$s =
            (null == _t || null == (d = _t.location) ? void 0 : d.pathname) ||
            ""));
      }
      initialize() {
        this.startIfEnabled();
      }
      get isEnabled() {
        return "history_change" === this._instance.config.capture_pageview;
      }
      startIfEnabled() {
        this.isEnabled &&
          (_r.info("History API monitoring enabled, starting..."),
          this.monitorHistoryChanges());
      }
      stop() {
        (this.Ds && this.Ds(),
          (this.Ds = void 0),
          _r.info("History API monitoring stopped"));
      }
      monitorHistoryChanges() {
        var u, d;
        if (_t && _t.history) {
          var h = this;
          ((null != (u = _t.history.pushState) && u.__posthog_wrapped__) ||
            Ho(
              _t.history,
              "pushState",
              (u) =>
                function (d, v, g) {
                  (u.call(this, d, v, g), h.qs("pushState"));
                },
            ),
            (null != (d = _t.history.replaceState) && d.__posthog_wrapped__) ||
              Ho(
                _t.history,
                "replaceState",
                (u) =>
                  function (d, v, g) {
                    (u.call(this, d, v, g), h.qs("replaceState"));
                  },
              ),
            this.js());
        }
      }
      qs(u) {
        try {
          var d,
            h = null == _t || null == (d = _t.location) ? void 0 : d.pathname;
          if (!h) return;
          (h !== this.$s &&
            this.isEnabled &&
            this._instance.capture(hn, { navigation_type: u }),
            (this.$s = h));
        } catch (_t) {
          _r.error("Error capturing " + u + " pageview", _t);
        }
      }
      js() {
        if (!this.Ds) {
          var e = () => {
            this.qs("popstate");
          };
          (nr(_t, "popstate", e),
            (this.Ds = () => {
              _t && _t.removeEventListener("popstate", e);
            }));
        }
      }
    },
    heatmaps: class {
      get qt() {
        return this.instance.config;
      }
      constructor(u) {
        var d;
        ((this.Hs = !1),
          (this.Rs = !1),
          (this.Us = null),
          (this.instance = u),
          (this.Hs = !(
            null == (d = this.instance.persistence) || !d.props[$r]
          )),
          (this.rageclicks = new Do(u.config.rageclick)));
      }
      initialize() {
        this.startIfEnabled();
      }
      get flushIntervalMilliseconds() {
        var u = 5e3;
        return (
          U(this.qt.capture_heatmaps) &&
            this.qt.capture_heatmaps.flush_interval_milliseconds &&
            (u = this.qt.capture_heatmaps.flush_interval_milliseconds),
          u
        );
      }
      get isEnabled() {
        return H(this.qt.capture_heatmaps)
          ? H(this.qt.enable_heatmaps)
            ? this.Hs
            : this.qt.enable_heatmaps
          : !1 !== this.qt.capture_heatmaps;
      }
      startIfEnabled() {
        if (this.isEnabled) {
          if (this.Rs) return;
          (yl.info("starting..."), this.Bs(), this.At());
        } else {
          var u;
          (clearInterval(null !== (u = this.Us) && void 0 !== u ? u : void 0),
            this.zs(),
            this.getAndClearBuffer());
        }
      }
      onRemoteConfig(u) {
        if ("heatmaps" in u) {
          var d = !!u.heatmaps;
          (this.instance.persistence &&
            this.instance.persistence.register({ [$r]: d }),
            (this.Hs = d),
            this.startIfEnabled());
        }
      }
      getAndClearBuffer() {
        var u = this.M;
        return ((this.M = void 0), u);
      }
      Vs(u) {
        this.Mt(u.originalEvent, "deadclick");
      }
      At() {
        (this.Us && clearInterval(this.Us),
          (this.Us =
            "visible" === (null == bt ? void 0 : bt.visibilityState)
              ? setInterval(this.Zr.bind(this), this.flushIntervalMilliseconds)
              : null));
      }
      Bs() {
        _t &&
          bt &&
          ((this.Ws = this.Zr.bind(this)),
          nr(_t, cn, this.Ws),
          (this.Zs = (u) => this.Mt(u || (null == _t ? void 0 : _t.event))),
          nr(bt, "click", this.Zs, { capture: !0 }),
          (this.Gs = (u) => this.Qs(u || (null == _t ? void 0 : _t.event))),
          nr(bt, "mousemove", this.Gs, { capture: !0 }),
          (this.Js = new Rr(this.instance, Tr, this.Vs.bind(this))),
          this.Js.startIfEnabledOrStop(),
          (this.Ks = this.At.bind(this)),
          nr(bt, sn, this.Ks),
          (this.Rs = !0));
      }
      zs() {
        var u;
        _t &&
          bt &&
          (this.Ws && _t.removeEventListener(cn, this.Ws),
          this.Zs && bt.removeEventListener("click", this.Zs, { capture: !0 }),
          this.Gs &&
            bt.removeEventListener("mousemove", this.Gs, { capture: !0 }),
          this.Ks && bt.removeEventListener(sn, this.Ks),
          clearTimeout(this.Ys),
          null == (u = this.Js) || u.stop(),
          (this.Rs = !1));
      }
      Xs(u, d) {
        var h = this.instance.scrollManager.scrollY(),
          v = this.instance.scrollManager.scrollX(),
          g = this.instance.scrollManager.scrollElement(),
          m = (function (u, d, h) {
            for (var v = u; v && no(v) && !oo(v, "body"); ) {
              if (v === h) return !1;
              if (P(d, null == _t ? void 0 : _t.getComputedStyle(v).position))
                return !0;
              v = mo(v);
            }
            return !1;
          })(fo(u), ["fixed", "sticky"], g);
        return {
          x: u.clientX + (m ? 0 : v),
          y: u.clientY + (m ? 0 : h),
          target_fixed: m,
          type: d,
        };
      }
      Mt(u, d) {
        var h;
        if ((void 0 === d && (d = "click"), !so(u.target) && ta(u))) {
          var v = this.Xs(u, d);
          (null != (h = this.rageclicks) &&
            h.isRageClick(u.clientX, u.clientY, new Date().getTime()) &&
            this.eo(f({}, v, { type: "rageclick" })),
            this.eo(v));
        }
      }
      Qs(u) {
        !so(u.target) &&
          ta(u) &&
          (clearTimeout(this.Ys),
          (this.Ys = setTimeout(() => {
            this.eo(this.Xs(u, "mousemove"));
          }, 500)));
      }
      eo(u) {
        if (_t) {
          var d = _t.location.href,
            h = this.qt.custom_personal_data_properties,
            v = this.qt.mask_personal_data_properties
              ? [...Yn, ...(h || [])]
              : [],
            g = Lr(d, v, eo);
          ((this.M = this.M || {}),
            this.M[g] || (this.M[g] = []),
            this.M[g].push(u));
        }
      }
      Zr() {
        this.M &&
          !L(this.M) &&
          this.instance.capture("$$heatmap", {
            $heatmap_data: this.getAndClearBuffer(),
          });
      }
    },
    deadClicksAutocapture: Rr,
    webVitalsAutocapture: class {
      constructor(u) {
        var d;
        ((this.Hs = !1),
          (this.Rs = !1),
          (this.M = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }),
          (this.ro = () => {
            (clearTimeout(this.io),
              0 !== this.M.metrics.length &&
                (this._instance.capture(
                  "$web_vitals",
                  this.M.metrics.reduce(
                    (u, d) =>
                      f({}, u, {
                        ["$web_vitals_" + d.name + "_event"]: f({}, d),
                        ["$web_vitals_" + d.name + "_value"]: d.value,
                      }),
                    {},
                  ),
                ),
                (this.M = {
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0,
                })));
          }),
          (this.ht = (u) => {
            var d;
            this.M = this.M || {
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0,
            };
            var h = this.no();
            if (!N(h))
              if (
                H(null == u ? void 0 : u.name) ||
                H(null == u ? void 0 : u.value)
              )
                dl.error("Invalid metric received", u);
              else if (!this.so || this.so > u.value) {
                (this.M.url !== h &&
                  (this.ro(),
                  (this.io = setTimeout(
                    this.ro,
                    this.flushToCaptureTimeoutMs,
                  ))),
                  N(this.M.url) && (this.M.url = h),
                  (this.M.firstMetricTimestamp = N(this.M.firstMetricTimestamp)
                    ? Date.now()
                    : this.M.firstMetricTimestamp),
                  u.attribution &&
                    u.attribution.interactionTargetElement &&
                    (u.attribution.interactionTargetElement = void 0));
                var v =
                    null == (d = this._instance.sessionManager)
                      ? void 0
                      : d.checkAndGetSessionAndWindowId(!0),
                  g = f({}, u, { $current_url: h, timestamp: Date.now() });
                (N(v) ||
                  ((g.$session_id = v.sessionId), (g.$window_id = v.windowId)),
                  this.M.metrics.push(g),
                  this.M.metrics.length === this.allowedMetrics.length &&
                    this.ro());
              } else dl.error("Ignoring metric with value >= " + this.so, u);
          }),
          (this.oo = () => {
            if (!this.Rs) {
              var u,
                d,
                h,
                v,
                g = $t.__PosthogExtensions__;
              (N(g) ||
                N(g.postHogWebVitalsCallbacks) ||
                ({
                  onLCP: u,
                  onCLS: d,
                  onFCP: h,
                  onINP: v,
                } = g.postHogWebVitalsCallbacks),
                u && d && h && v
                  ? (this.allowedMetrics.indexOf("LCP") > -1 &&
                      u(this.ht.bind(this)),
                    this.allowedMetrics.indexOf("CLS") > -1 &&
                      d(this.ht.bind(this)),
                    this.allowedMetrics.indexOf("FCP") > -1 &&
                      h(this.ht.bind(this)),
                    this.allowedMetrics.indexOf("INP") > -1 &&
                      v(this.ht.bind(this)),
                    (this.Rs = !0))
                  : dl.error("web vitals callbacks not loaded - not starting"));
            }
          }),
          (this._instance = u),
          (this.Hs = !(
            null == (d = this._instance.persistence) || !d.props[qr]
          )),
          this.startIfEnabled());
      }
      get ao() {
        return this._instance.config.capture_performance;
      }
      get allowedMetrics() {
        var u,
          d,
          h = U(this.ao)
            ? null == (u = this.ao)
              ? void 0
              : u.web_vitals_allowed_metrics
            : void 0;
        return H(h)
          ? (null == (d = this._instance.persistence)
              ? void 0
              : d.props[Hr]) || ["CLS", "FCP", "INP", "LCP"]
          : h;
      }
      get flushToCaptureTimeoutMs() {
        return (
          (U(this.ao) ? this.ao.web_vitals_delayed_flush_ms : void 0) || 5e3
        );
      }
      get useAttribution() {
        var u = U(this.ao) ? this.ao.web_vitals_attribution : void 0;
        return null != u && u;
      }
      get so() {
        var u =
          U(this.ao) && q(this.ao.__web_vitals_max_value)
            ? this.ao.__web_vitals_max_value
            : hl;
        return u > 0 && 6e4 >= u ? hl : u;
      }
      get isEnabled() {
        var u = null == wt ? void 0 : wt.protocol;
        if ("http:" !== u && "https:" !== u)
          return (
            dl.info("Web Vitals are disabled on non-http/https protocols"),
            !1
          );
        var d = U(this.ao) ? this.ao.web_vitals : W(this.ao) ? this.ao : void 0;
        return W(d) ? d : this.Hs;
      }
      startIfEnabled() {
        this.isEnabled &&
          !this.Rs &&
          (dl.info("enabled, starting..."), this.lr(this.oo));
      }
      onRemoteConfig(u) {
        if ("capturePerformance" in u) {
          var d = U(u.capturePerformance) && !!u.capturePerformance.web_vitals,
            h = U(u.capturePerformance)
              ? u.capturePerformance.web_vitals_allowed_metrics
              : void 0;
          (this._instance.persistence &&
            (this._instance.persistence.register({ [qr]: d }),
            this._instance.persistence.register({ [Hr]: h })),
            (this.Hs = d),
            this.startIfEnabled());
        }
      }
      lr(u) {
        var d, h;
        null != (d = $t.__PosthogExtensions__) && d.postHogWebVitalsCallbacks
          ? u()
          : null == (h = $t.__PosthogExtensions__) ||
            null == h.loadExternalDependency ||
            h.loadExternalDependency(
              this._instance,
              this.useAttribution
                ? "web-vitals-with-attribution"
                : "web-vitals",
              (d) => {
                d ? dl.error("failed to load script", d) : u();
              },
            );
      }
      no() {
        var u = _t ? _t.location.href : void 0;
        if (u) {
          var d = this._instance.config.custom_personal_data_properties,
            h = this._instance.config.mask_personal_data_properties
              ? [...Yn, ...(d || [])]
              : [];
          return Lr(u, h, eo);
        }
        dl.error("Could not determine current URL");
      }
    },
  },
  Nl = {
    exceptionObserver: class {
      constructor(u) {
        var d, h, v;
        ((this.oo = () => {
          var u;
          if (
            _t &&
            this.isEnabled &&
            null != (u = $t.__PosthogExtensions__) &&
            u.errorWrappingFunctions
          ) {
            var d = $t.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
              h =
                $t.__PosthogExtensions__.errorWrappingFunctions
                  .wrapUnhandledRejection,
              v =
                $t.__PosthogExtensions__.errorWrappingFunctions
                  .wrapConsoleError;
            try {
              (!this.uo &&
                this.qt.capture_unhandled_errors &&
                (this.uo = d(this.captureException.bind(this))),
                !this.lo &&
                  this.qt.capture_unhandled_rejections &&
                  (this.lo = h(this.captureException.bind(this))),
                !this.ho &&
                  this.qt.capture_console_errors &&
                  (this.ho = v(this.captureException.bind(this))));
            } catch (_t) {
              (cl.error("failed to start", _t), this.co());
            }
          }
        }),
          (this._instance = u),
          (this.do = !(
            null == (d = this._instance.persistence) || !d.props[Fr]
          )),
          (this.vo = new it({
            refillRate:
              null !==
                (h =
                  this._instance.config.error_tracking
                    .__exceptionRateLimiterRefillRate) && void 0 !== h
                ? h
                : 1,
            bucketSize:
              null !==
                (v =
                  this._instance.config.error_tracking
                    .__exceptionRateLimiterBucketSize) && void 0 !== v
                ? v
                : 10,
            refillInterval: 1e4,
            Gt: cl,
          })),
          (this.qt = this.fo()),
          this.startIfEnabledOrStop());
      }
      fo() {
        var u = this._instance.config.capture_exceptions,
          d = {
            capture_unhandled_errors: !1,
            capture_unhandled_rejections: !1,
            capture_console_errors: !1,
          };
        return (
          U(u)
            ? (d = f({}, d, u))
            : (N(u) ? this.do : u) &&
              (d = f({}, d, {
                capture_unhandled_errors: !0,
                capture_unhandled_rejections: !0,
              })),
          d
        );
      }
      get isEnabled() {
        return (
          this.qt.capture_console_errors ||
          this.qt.capture_unhandled_errors ||
          this.qt.capture_unhandled_rejections
        );
      }
      startIfEnabledOrStop() {
        this.isEnabled
          ? (cl.info("enabled"), this.co(), this.lr(this.oo))
          : this.co();
      }
      lr(u) {
        var d, h;
        (null != (d = $t.__PosthogExtensions__) &&
          d.errorWrappingFunctions &&
          u(),
          null == (h = $t.__PosthogExtensions__) ||
            null == h.loadExternalDependency ||
            h.loadExternalDependency(
              this._instance,
              "exception-autocapture",
              (d) => {
                if (d) return cl.error("failed to load script", d);
                u();
              },
            ));
      }
      co() {
        var u, d, h;
        (null == (u = this.uo) || u.call(this),
          (this.uo = void 0),
          null == (d = this.lo) || d.call(this),
          (this.lo = void 0),
          null == (h = this.ho) || h.call(this),
          (this.ho = void 0));
      }
      onRemoteConfig(u) {
        "autocaptureExceptions" in u &&
          ((this.do = !!u.autocaptureExceptions || !1),
          this._instance.persistence &&
            this._instance.persistence.register({ [Fr]: this.do }),
          (this.qt = this.fo()),
          this.startIfEnabledOrStop());
      }
      onConfigChange() {
        this.qt = this.fo();
      }
      captureException(u) {
        var d,
          h,
          v,
          g =
            null !==
              (d =
                null == u ||
                null == (h = u.$exception_list) ||
                null == (h = h[0])
                  ? void 0
                  : h.type) && void 0 !== d
              ? d
              : "Exception";
        this.vo.consumeRateLimit(g)
          ? cl.info(
              "Skipping exception capture because of client rate limiting.",
              { exception: g },
            )
          : null == (v = this._instance.exceptions) || v.sendExceptionEvent(u);
      }
    },
    exceptions: class {
      constructor(u) {
        var d, h;
        ((this.po = []),
          (this.mo = new le(
            [
              new ye(),
              new Oe(),
              new xe(),
              new we(),
              new Re(),
              new ke(),
              new Se(),
              new Pe(),
            ],
            (function (u) {
              for (
                var d = arguments.length,
                  h = new Array(d > 1 ? d - 1 : 0),
                  v = 1;
                d > v;
                v++
              )
                h[v - 1] = arguments[v];
              return function (d, v) {
                void 0 === v && (v = 0);
                for (var g = [], m = d.split("\n"), b = v; m.length > b; b++) {
                  var k = m[b];
                  if (1024 >= k.length) {
                    var S = Yi.test(k) ? k.replace(Yi, "$1") : k;
                    if (!S.match(/\S*Error: /)) {
                      for (var $ of h) {
                        var F = $(S, u);
                        if (F) {
                          g.push(F);
                          break;
                        }
                      }
                      if (g.length >= 50) break;
                    }
                  }
                }
                return (function (u) {
                  if (!u.length) return [];
                  var d = Array.from(u);
                  return (
                    d.reverse(),
                    d.slice(0, 50).map((u) => {
                      return f({}, u, {
                        filename:
                          u.filename ||
                          ((h = d), h[h.length - 1] || {}).filename,
                        function: u.function || zi,
                      });
                      var h;
                    })
                  );
                })(g);
              };
            })("web:javascript", fe, me),
          )),
          (this._instance = u),
          (this.po =
            null !==
              (d =
                null == (h = this._instance.persistence)
                  ? void 0
                  : h.get_property(Mr)) && void 0 !== d
              ? d
              : []),
          (this.yo = Me(this.bo())),
          (this._o = new De(this.yo)));
      }
      onConfigChange() {
        ((this.yo = Me(this.bo())), this._o.setConfig(this.yo));
      }
      onRemoteConfig(u) {
        var d, h, v;
        if ("errorTracking" in u) {
          var g =
              null !==
                (d =
                  null == (h = u.errorTracking)
                    ? void 0
                    : h.suppressionRules) && void 0 !== d
                ? d
                : [],
            m =
              null == (v = u.errorTracking)
                ? void 0
                : v.captureExtensionExceptions;
          ((this.po = g),
            this._instance.persistence &&
              this._instance.persistence.register({ [Mr]: this.po, [Or]: m }));
        }
      }
      get wo() {
        var u,
          d = !!this._instance.get_property(Or),
          h = this._instance.config.error_tracking.captureExtensionExceptions;
        return null !== (u = null != h ? h : d) && void 0 !== u && u;
      }
      buildProperties(u, d) {
        return this.mo.buildFromUnknown(u, {
          syntheticException: null == d ? void 0 : d.syntheticException,
          mechanism: { handled: null == d ? void 0 : d.handled },
        });
      }
      addExceptionStep(u, d) {
        if (this.yo.enabled)
          try {
            if (!j(u) || 0 === u.trim().length)
              return void Rl.warn(
                "Ignoring exception step because message must be a non-empty string",
              );
            var h = this.xo(d),
              { sanitizedProperties: v, droppedKeys: g } = (function (u) {
                if (!u) return { sanitizedProperties: {}, droppedKeys: [] };
                var d = [];
                return {
                  sanitizedProperties: Object.keys(u).reduce(
                    (h, v) => (gr.has(v) ? (d.push(v), h) : ((h[v] = u[v]), h)),
                    {},
                  ),
                  droppedKeys: d,
                };
              })(h);
            (g.length > 0 &&
              Rl.warn("Ignoring reserved exception step fields", {
                droppedKeys: g,
              }),
              this._o.add(f({ [ur]: u, [pr]: new Date().toISOString() }, v)));
          } catch (u) {
            Rl.error("Failed to add exception step. Ignoring breadcrumb.", u);
          }
      }
      sendExceptionEvent(u) {
        try {
          var d = u.$exception_list;
          if (this.So(d)) {
            if (this.ko(d))
              return (
                this.Co("Exception dropped: matched a suppression rule"),
                void Rl.info(
                  "Skipping exception capture because a suppression rule matched",
                )
              );
            if (!this.wo && this.Io(d))
              return (
                this.Co("Exception dropped: thrown by a browser extension"),
                void Rl.info(
                  "Skipping exception capture because it was thrown by an extension",
                )
              );
            if (
              !this._instance.config.error_tracking
                .__capturePostHogExceptions &&
              this.To(d)
            )
              return (
                this.Co("Exception dropped: thrown by the PostHog SDK"),
                void Rl.info(
                  "Skipping exception capture because it was thrown by the PostHog SDK",
                )
              );
          }
          var h = this.yo.enabled && H(u.$exception_steps) ? this.Eo(u) : u;
          try {
            var v = this._instance.capture("$exception", h, {
              _noTruncate: !0,
              _batchKey: "exceptionEvent",
              en: !0,
            });
            return (v && this._o.clear(), v);
          } catch (u) {
            return (
              Rl.error(
                "Failed to capture exception event. Dropping this exception.",
                u,
              ),
              void this._o.clear()
            );
          }
        } catch (u) {
          return void Rl.error(
            "Failed to process exception event. Ignoring this exception.",
            u,
          );
        }
      }
      Eo(u) {
        try {
          var d = this._o.getAttachable();
          return 0 === d.length ? u : f({}, u, { $exception_steps: d });
        } catch (d) {
          return (
            Rl.error(
              "Failed to read buffered exception steps. Capturing exception without steps.",
              d,
            ),
            u
          );
        }
      }
      Co(u) {
        this.yo.enabled &&
          this._o.add({ [ur]: u, [pr]: new Date().toISOString() });
      }
      xo(u) {
        return U(u) ? f({}, u) : {};
      }
      bo() {
        var u, d;
        return null !==
          (u =
            null == (d = this._instance.config.error_tracking)
              ? void 0
              : d.exception_steps) && void 0 !== u
          ? u
          : {};
      }
      ko(u) {
        if (0 === u.length) return !1;
        var d = u.reduce(
          (u, d) => {
            var { type: h, value: v } = d;
            return (
              j(h) && h.length > 0 && u.$exception_types.push(h),
              j(v) && v.length > 0 && u.$exception_values.push(v),
              u
            );
          },
          { $exception_types: [], $exception_values: [] },
        );
        return this.po.some((u) => {
          var h = u.values.map((u) => {
            var h,
              v = Ra[u.operator],
              g = jt(u.value) ? u.value : [u.value],
              m = null !== (h = d[u.key]) && void 0 !== h ? h : [];
            return g.length > 0 && v(g, m);
          });
          return "OR" === u.type ? h.some(Boolean) : h.every(Boolean);
        });
      }
      Io(u) {
        return u
          .flatMap((u) => {
            var d, h;
            return null !==
              (d = null == (h = u.stacktrace) ? void 0 : h.frames) &&
              void 0 !== d
              ? d
              : [];
          })
          .some(
            (u) => u.filename && u.filename.startsWith("chrome-extension://"),
          );
      }
      To(u) {
        if (u.length > 0) {
          var d,
            h,
            v,
            g,
            m =
              null !==
                (d = null == (h = u[0].stacktrace) ? void 0 : h.frames) &&
              void 0 !== d
                ? d
                : [],
            b = m[m.length - 1];
          return (
            null !==
              (v =
                null == b || null == (g = b.filename)
                  ? void 0
                  : g.includes("posthog.com/static")) &&
            void 0 !== v &&
            v
          );
        }
        return !1;
      }
      So(u) {
        return !H(u) && jt(u);
      }
    },
  },
  Ul = f(
    {
      productTours: class {
        get ni() {
          return this._instance.persistence;
        }
        constructor(u) {
          ((this.Mo = null), (this.Po = null), (this._instance = u));
        }
        initialize() {
          this.loadIfEnabled();
        }
        onRemoteConfig(u) {
          "productTours" in u &&
            (this.ni && this.ni.register({ [zr]: !!u.productTours }),
            this.loadIfEnabled());
        }
        loadIfEnabled() {
          var u, d;
          this.Mo ||
            (u = this._instance).config.disable_product_tours ||
            null == (d = u.persistence) ||
            !d.get_property(zr) ||
            this.lr(() => this.Ro());
        }
        lr(u) {
          var d, h;
          null != (d = $t.__PosthogExtensions__) && d.generateProductTours
            ? u()
            : null == (h = $t.__PosthogExtensions__) ||
              null == h.loadExternalDependency ||
              h.loadExternalDependency(this._instance, "product-tours", (d) => {
                d ? bl.error("Could not load product tours script", d) : u();
              });
        }
        Ro() {
          var u;
          !this.Mo &&
            null != (u = $t.__PosthogExtensions__) &&
            u.generateProductTours &&
            (this.Mo = $t.__PosthogExtensions__.generateProductTours(
              this._instance,
              !0,
            ));
        }
        getProductTours(u, d) {
          if ((void 0 === d && (d = !1), !jt(this.Po) || d)) {
            var h = this.ni;
            if (h) {
              var v = h.props[ws];
              if (jt(v) && !d)
                return ((this.Po = v), void u(v, { isLoaded: !0 }));
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor(
                "api",
                "/api/product_tours/?token=" + this._instance.config.token,
              ),
              method: "GET",
              callback: (d) => {
                var v = d.statusCode;
                if (200 !== v || !d.json) {
                  var g = "Product Tours API could not be loaded, status: " + v;
                  return (bl.error(g), void u([], { isLoaded: !1, error: g }));
                }
                var m = jt(d.json.product_tours) ? d.json.product_tours : [];
                ((this.Po = m),
                  h && h.register({ [ws]: m }),
                  u(m, { isLoaded: !0 }));
              },
            });
          } else u(this.Po, { isLoaded: !0 });
        }
        getActiveProductTours(u) {
          H(this.Mo)
            ? u([], { isLoaded: !1, error: "Product tours not loaded" })
            : this.Mo.getActiveProductTours(u);
        }
        showProductTour(u) {
          var d;
          null == (d = this.Mo) || d.showTourById(u);
        }
        previewTour(u) {
          this.Mo
            ? this.Mo.previewTour(u)
            : this.lr(() => {
                var d;
                (this.Ro(), null == (d = this.Mo) || d.previewTour(u));
              });
        }
        dismissProductTour() {
          var u;
          null == (u = this.Mo) || u.dismissTour("user_clicked_skip");
        }
        nextStep() {
          var u;
          null == (u = this.Mo) || u.nextStep();
        }
        previousStep() {
          var u;
          null == (u = this.Mo) || u.previousStep();
        }
        clearCache() {
          var u;
          ((this.Po = null), null == (u = this.ni) || u.unregister(ws));
        }
        resetTour(u) {
          var d;
          null == (d = this.Mo) || d.resetTour(u);
        }
        resetAllTours() {
          var u;
          null == (u = this.Mo) || u.resetAllTours();
        }
        cancelPendingTour(u) {
          var d;
          null == (d = this.Mo) || d.cancelPendingTour(u);
        }
      },
    },
    ql,
  ),
  zl = {
    siteApps: class {
      constructor(u) {
        ((this._instance = u), (this.Oo = []), (this.apps = {}));
      }
      get isEnabled() {
        return !!this._instance.config.opt_in_site_apps;
      }
      Lo(u, d) {
        if (d) {
          var h = this.globalsForEvent(d);
          (this.Oo.push(h),
            this.Oo.length > 1e3 && (this.Oo = this.Oo.slice(10)));
        }
      }
      get siteAppLoaders() {
        var u;
        return null == (u = $t._POSTHOG_REMOTE_CONFIG) ||
          null == (u = u[this._instance.config.token])
          ? void 0
          : u.siteApps;
      }
      initialize() {
        if (this.isEnabled) {
          var u = this._instance._addCaptureHook(this.Lo.bind(this));
          this.Fo = () => {
            (u(), (this.Oo = []), (this.Fo = void 0));
          };
        }
      }
      globalsForEvent(u) {
        var d, h, v, g, m, b, k;
        if (!u) throw new Error("Event payload is required");
        var S = {},
          $ = this._instance.get_property("$groups") || [],
          F = this._instance.get_property("$stored_group_properties") || {};
        for (var [C, M] of Object.entries(F))
          S[C] = { id: $[C], type: C, properties: M };
        var { $set_once: A, $set: G } = u;
        return {
          event: f({}, _(u, wl), {
            properties: f(
              {},
              u.properties,
              G
                ? {
                    $set: f(
                      {},
                      null !==
                        (d = null == (h = u.properties) ? void 0 : h.$set) &&
                        void 0 !== d
                        ? d
                        : {},
                      G,
                    ),
                  }
                : {},
              A
                ? {
                    $set_once: f(
                      {},
                      null !==
                        (v =
                          null == (g = u.properties) ? void 0 : g.$set_once) &&
                        void 0 !== v
                        ? v
                        : {},
                      A,
                    ),
                  }
                : {},
            ),
            elements_chain:
              null !==
                (m = null == (b = u.properties) ? void 0 : b.$elements_chain) &&
              void 0 !== m
                ? m
                : "",
            distinct_id: null == (k = u.properties) ? void 0 : k.distinct_id,
          }),
          person: {
            properties: this._instance.get_property(
              "$stored_person_properties",
            ),
          },
          groups: S,
        };
      }
      setupSiteApp(u) {
        var d = this.apps[u.id],
          i = () => {
            var h;
            (!d.errored &&
              this.Oo.length &&
              (xl.info(
                "Processing " +
                  this.Oo.length +
                  " events for site app with id " +
                  u.id,
              ),
              this.Oo.forEach((u) =>
                null == d.processEvent ? void 0 : d.processEvent(u),
              ),
              (d.processedBuffer = !0)),
              Object.values(this.apps).every(
                (u) => u.processedBuffer || u.errored,
              ) &&
                (null == (h = this.Fo) || h.call(this)));
          },
          h = !1,
          s = (v) => {
            ((d.errored = !v),
              (d.loaded = !0),
              xl.info(
                "Site app with id " + u.id + " " + (v ? "loaded" : "errored"),
              ),
              h && i());
          };
        try {
          var { processEvent: v } = u.init({
            posthog: this._instance,
            callback(u) {
              s(u);
            },
          });
          (v && (d.processEvent = v), (h = !0));
        } catch (d) {
          (xl.error(kl + u.id, d), s(!1));
        }
        if (h && d.loaded)
          try {
            i();
          } catch (i) {
            (xl.error(
              "Error while processing buffered events PostHog app with config id " +
                u.id,
              i,
            ),
              (d.errored = !0));
          }
      }
      Ao() {
        var u = this.siteAppLoaders || [];
        for (var d of u)
          this.apps[d.id] = {
            id: d.id,
            loaded: !1,
            errored: !1,
            processedBuffer: !1,
          };
        for (var h of u) this.setupSiteApp(h);
      }
      No(u) {
        if (0 !== Object.keys(this.apps).length) {
          var d = this.globalsForEvent(u);
          for (var h of Object.values(this.apps))
            try {
              null == h.processEvent || h.processEvent(d);
            } catch (d) {
              xl.error(
                "Error while processing event " +
                  u.event +
                  " for site app " +
                  h.id,
                d,
              );
            }
        }
      }
      onRemoteConfig(u) {
        var d,
          h,
          v,
          g = this;
        if (null != (d = this.siteAppLoaders) && d.length)
          return this.isEnabled
            ? (this.Ao(),
              void this._instance.on("eventCaptured", (u) => this.No(u)))
            : void xl.error(
                'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.',
              );
        if (
          (null == (h = this.Fo) || h.call(this),
          null != (v = u.siteApps) && v.length)
        )
          if (this.isEnabled) {
            var n = function (u) {
              var d;
              (($t["__$$ph_site_app_" + u] = g._instance),
                null == (d = $t.__PosthogExtensions__) ||
                  null == d.loadSiteApp ||
                  d.loadSiteApp(g._instance, b, (d) => {
                    if (d) return xl.error(kl + u, d);
                  }));
            };
            for (var { id: m, url: b } of u.siteApps) n(m);
          } else
            xl.error(
              'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.',
            );
      }
    },
  },
  Hl = {
    tracingHeaders: class {
      constructor(u) {
        ((this.$o = void 0),
          (this.Do = void 0),
          (this.oo = () => {
            var u,
              d,
              h = this.qo() || [];
            (N(this.$o) &&
              (null == (u = $t.__PosthogExtensions__) ||
                null == (u = u.tracingHeadersPatchFns) ||
                u._patchXHR(
                  h,
                  this._instance.get_distinct_id(),
                  this._instance.sessionManager,
                )),
              N(this.Do) &&
                (null == (d = $t.__PosthogExtensions__) ||
                  null == (d = d.tracingHeadersPatchFns) ||
                  d._patchFetch(
                    h,
                    this._instance.get_distinct_id(),
                    this._instance.sessionManager,
                  )));
          }),
          (this._instance = u));
      }
      initialize() {
        this.startIfEnabledOrStop();
      }
      lr(u) {
        var d, h;
        (null != (d = $t.__PosthogExtensions__) &&
          d.tracingHeadersPatchFns &&
          u(),
          null == (h = $t.__PosthogExtensions__) ||
            null == h.loadExternalDependency ||
            h.loadExternalDependency(this._instance, "tracing-headers", (d) => {
              if (d) return ul.error("failed to load script", d);
              u();
            }));
      }
      qo() {
        var u;
        return null !== (u = this._instance.config.addTracingHeaders) &&
          void 0 !== u
          ? u
          : this._instance.config.__add_tracing_headers;
      }
      startIfEnabledOrStop() {
        var u, d;
        this.qo()
          ? this.lr(this.oo)
          : (null == (u = this.$o) || u.call(this),
            null == (d = this.Do) || d.call(this),
            (this.$o = void 0),
            (this.Do = void 0));
      }
    },
  },
  Bl = f(
    {
      surveys: class {
        get qt() {
          return this._instance.config;
        }
        constructor(u) {
          ((this.jo = void 0),
            (this._surveyManager = null),
            (this.Ho = !1),
            (this.Uo = []),
            (this.Bo = null),
            (this._instance = u),
            (this._surveyEventReceiver = null));
        }
        initialize() {
          this.loadIfEnabled();
        }
        onRemoteConfig(u) {
          if (!this.qt.disable_surveys) {
            var d = u.surveys;
            if (H(d))
              return La.warn("Flags not loaded yet. Not loading surveys.");
            var h = jt(d);
            ((this.jo = h ? d.length > 0 : d),
              La.info("flags response received, isSurveysEnabled: " + this.jo),
              this.loadIfEnabled());
          }
        }
        reset() {
          localStorage.removeItem("lastSeenSurveyDate");
          for (var u = [], d = 0; d < localStorage.length; d++) {
            var h = localStorage.key(d);
            ((null != h && h.startsWith(qa)) ||
              (null != h && h.startsWith("inProgressSurvey_"))) &&
              u.push(h);
          }
          u.forEach((u) => localStorage.removeItem(u));
        }
        loadIfEnabled() {
          if (!this._surveyManager)
            if (this.Ho) La.info("Already initializing surveys, skipping...");
            else if (this.qt.disable_surveys) La.info(Pl);
            else if (
              this.qt.cookieless_mode &&
              this._instance.consent.isOptedOut()
            )
              La.info(
                "Not loading surveys in cookieless mode without consent.",
              );
            else {
              var u = null == $t ? void 0 : $t.__PosthogExtensions__;
              if (u) {
                if (!N(this.jo) || this.qt.advanced_enable_surveys) {
                  var d = this.jo || this.qt.advanced_enable_surveys;
                  this.Ho = !0;
                  try {
                    var h = u.generateSurveys;
                    if (h) return void this.zo(h, d);
                    var v = u.loadExternalDependency;
                    if (!v) return void this.Vo(Us);
                    v(this._instance, "surveys", (h) => {
                      h || !u.generateSurveys
                        ? this.Vo("Could not load surveys script", h)
                        : this.zo(u.generateSurveys, d);
                    });
                  } catch (u) {
                    throw (this.Vo("Error initializing surveys", u), u);
                  } finally {
                    this.Ho = !1;
                  }
                }
              } else La.error("PostHog Extensions not found.");
            }
        }
        zo(u, d) {
          ((this._surveyManager = u(this._instance, d)),
            (this._surveyEventReceiver = new la(this._instance)),
            La.info("Surveys loaded successfully"),
            this.Wo({ isLoaded: !0 }));
        }
        Vo(u, d) {
          (La.error(u, d), this.Wo({ isLoaded: !1, error: u }));
        }
        onSurveysLoaded(u) {
          return (
            this.Uo.push(u),
            this._surveyManager && this.Wo({ isLoaded: !0 }),
            () => {
              this.Uo = this.Uo.filter((d) => d !== u);
            }
          );
        }
        getSurveys(u, d) {
          if ((void 0 === d && (d = !1), this.qt.disable_surveys))
            return (La.info(Pl), u([]));
          var h,
            v = this._instance.get_property(_s);
          if (v && !d) return u(v, { isLoaded: !0 });
          "undefined" != typeof Promise && this.Bo
            ? this.Bo.then((d) => {
                var { surveys: h, context: v } = d;
                return u(h, v);
              })
            : ("undefined" != typeof Promise &&
                (this.Bo = new Promise((u) => {
                  h = u;
                })),
              this._instance._send_request({
                url: this._instance.requestRouter.endpointFor(
                  "api",
                  "/api/surveys/?token=" + this.qt.token,
                ),
                method: "GET",
                timeout: this.qt.surveys_request_timeout_ms,
                callback: (d) => {
                  var v;
                  this.Bo = null;
                  var g = d.statusCode;
                  if (200 !== g || !d.json) {
                    var m = "Surveys API could not be loaded, status: " + g;
                    La.error(m);
                    var b = { isLoaded: !1, error: m };
                    return (
                      u([], b),
                      void (null == h || h({ surveys: [], context: b }))
                    );
                  }
                  var k,
                    S = d.json.surveys || [],
                    $ = S.filter(
                      (u) =>
                        (function (u) {
                          return !(!u.start_date || u.end_date);
                        })(u) &&
                        ((function (u) {
                          var d;
                          return !(
                            null == (d = u.conditions) ||
                            null == (d = d.events) ||
                            null == (d = d.values) ||
                            !d.length
                          );
                        })(u) ||
                          (function (u) {
                            var d;
                            return !(
                              null == (d = u.conditions) ||
                              null == (d = d.actions) ||
                              null == (d = d.values) ||
                              !d.length
                            );
                          })(u)),
                    );
                  ($.length > 0 &&
                    (null == (k = this._surveyEventReceiver) || k.register($)),
                    null == (v = this._instance.persistence) ||
                      v.register({ [_s]: S }));
                  var F = { isLoaded: !0 };
                  (u(S, F), null == h || h({ surveys: S, context: F }));
                },
              }));
        }
        Wo(u) {
          for (var d of this.Uo)
            try {
              if (!u.isLoaded) return d([], u);
              this.getSurveys(d);
            } catch (u) {
              La.error("Error in survey callback", u);
            }
        }
        getActiveMatchingSurveys(u, d) {
          if ((void 0 === d && (d = !1), !H(this._surveyManager)))
            return this._surveyManager.getActiveMatchingSurveys(u, d);
          La.warn("init was not called");
        }
        Zo(u) {
          var d = null;
          return (
            this.getSurveys((h) => {
              var v;
              d =
                null !== (v = h.find((d) => d.id === u)) && void 0 !== v
                  ? v
                  : null;
            }),
            d
          );
        }
        Go(u) {
          if (H(this._surveyManager)) return { eligible: !1, reason: El };
          var d = "string" == typeof u ? this.Zo(u) : u;
          return d
            ? this._surveyManager.checkSurveyEligibility(d)
            : { eligible: !1, reason: "Survey not found" };
        }
        canRenderSurvey(u) {
          if (H(this._surveyManager))
            return (
              La.warn("init was not called"),
              { visible: !1, disabledReason: El }
            );
          var d = this.Go(u);
          return { visible: d.eligible, disabledReason: d.reason };
        }
        canRenderSurveyAsync(u, d) {
          return H(this._surveyManager)
            ? (La.warn("init was not called"),
              Promise.resolve({ visible: !1, disabledReason: El }))
            : new Promise((h) => {
                this.getSurveys((d) => {
                  var v,
                    g =
                      null !== (v = d.find((d) => d.id === u)) && void 0 !== v
                        ? v
                        : null;
                  if (g) {
                    var m = this.Go(g);
                    h({ visible: m.eligible, disabledReason: m.reason });
                  } else h({ visible: !1, disabledReason: "Survey not found" });
                }, d);
              });
        }
        renderSurvey(u, d, h) {
          var v;
          if (H(this._surveyManager)) La.warn("init was not called");
          else {
            var g = "string" == typeof u ? this.Zo(u) : u;
            if (null != g && g.id)
              if (Da.includes(g.type)) {
                var m = null == bt ? void 0 : bt.querySelector(d);
                if (m)
                  return null != (v = g.appearance) && v.surveyPopupDelaySeconds
                    ? (La.info(
                        "Rendering survey " +
                          g.id +
                          " with delay of " +
                          g.appearance.surveyPopupDelaySeconds +
                          " seconds",
                      ),
                      void setTimeout(() => {
                        var u, d;
                        (La.info(
                          "Rendering survey " +
                            g.id +
                            " with delay of " +
                            (null == (u = g.appearance)
                              ? void 0
                              : u.surveyPopupDelaySeconds) +
                            " seconds",
                        ),
                          null == (d = this._surveyManager) ||
                            d.renderSurvey(g, m, h),
                          La.info("Survey " + g.id + " rendered"));
                      }, 1e3 * g.appearance.surveyPopupDelaySeconds))
                    : void this._surveyManager.renderSurvey(g, m, h);
                La.warn("Survey element not found");
              } else
                La.warn(
                  "Surveys of type " +
                    g.type +
                    " cannot be rendered in the app",
                );
            else La.warn("Survey not found");
          }
        }
        displaySurvey(u, d) {
          var h;
          if (H(this._surveyManager)) La.warn("init was not called");
          else {
            var v = this.Zo(u);
            if (v) {
              var g = v;
              if (
                (null != (h = v.appearance) &&
                  h.surveyPopupDelaySeconds &&
                  d.ignoreDelay &&
                  (g = f({}, v, {
                    appearance: f({}, v.appearance, {
                      surveyPopupDelaySeconds: 0,
                    }),
                  })),
                d.displayType !== zo &&
                  d.initialResponses &&
                  La.warn(
                    "initialResponses is only supported for popover surveys. prefill will not be applied.",
                  ),
                !1 === d.ignoreConditions)
              ) {
                var m = this.canRenderSurvey(v);
                if (!m.visible)
                  return void La.warn(
                    "Survey is not eligible to be displayed: ",
                    m.disabledReason,
                  );
              }
              d.displayType !== Bo
                ? this._surveyManager.handlePopoverSurvey(g, d)
                : this.renderSurvey(g, d.selector, d.properties);
            } else La.warn("Survey not found");
          }
        }
        cancelPendingSurvey(u) {
          H(this._surveyManager)
            ? La.warn("init was not called")
            : this._surveyManager.cancelSurvey(u);
        }
        handlePageUnload() {
          var u;
          null == (u = this._surveyManager) || u.handlePageUnload();
        }
      },
    },
    ql,
  ),
  Vl = {
    toolbar: class {
      constructor(u) {
        this.instance = u;
      }
      Qo(u) {
        $t.ph_toolbar_state = u;
      }
      Jo() {
        var u;
        return null !== (u = $t.ph_toolbar_state) && void 0 !== u ? u : 0;
      }
      initialize() {
        return this.maybeLoadToolbar();
      }
      maybeLoadToolbar(u, d, h) {
        if (
          (void 0 === u && (u = void 0),
          void 0 === d && (d = void 0),
          void 0 === h && (h = void 0),
          or(this.instance.config))
        )
          return !1;
        if (!_t || !bt) return !1;
        ((u = null != u ? u : _t.location), (h = null != h ? h : _t.history));
        try {
          if (!d) {
            try {
              (_t.localStorage.setItem("test", "test"),
                _t.localStorage.removeItem("test"));
            } catch (_t) {
              return !1;
            }
            d = null == _t ? void 0 : _t.localStorage;
          }
          var v,
            g = Sl || Nr(u.hash, "__posthog") || Nr(u.hash, "state"),
            m = g
              ? tr(() => JSON.parse(atob(decodeURIComponent(g)))) ||
                tr(() => JSON.parse(decodeURIComponent(g)))
              : null;
          return (
            m && "ph_authorize" === m.action
              ? (((v = m).source = "url"),
                v &&
                  Object.keys(v).length > 0 &&
                  (m.desiredHash
                    ? (u.hash = m.desiredHash)
                    : h
                      ? h.replaceState(h.state, "", u.pathname + u.search)
                      : (u.hash = "")))
              : (((v = JSON.parse(d.getItem($l) || "{}")).source =
                  "localstorage"),
                delete v.userIntent),
            !(
              !v.token ||
              this.instance.config.token !== v.token ||
              (this.loadToolbar(v), 0)
            )
          );
        } catch (_t) {
          return !1;
        }
      }
      Ko(u) {
        var d = $t.ph_load_toolbar || $t.ph_load_editor;
        !H(d) && D(d)
          ? d(u, this.instance)
          : Fl.warn("No toolbar load function found");
      }
      loadToolbar(u) {
        var d = !(null == bt || !bt.getElementById(Os));
        if (!_t || d) return !1;
        var h =
            "custom" === this.instance.requestRouter.region &&
            this.instance.config.advanced_disable_toolbar_metrics,
          v = f(
            { token: this.instance.config.token },
            u,
            { apiURL: this.instance.requestRouter.endpointFor("ui") },
            h ? { instrument: !1 } : {},
          );
        if (
          (_t.localStorage.setItem(
            $l,
            JSON.stringify(f({}, v, { source: void 0 })),
          ),
          2 === this.Jo())
        )
          this.Ko(v);
        else if (0 === this.Jo()) {
          var g;
          (this.Qo(1),
            null == (g = $t.__PosthogExtensions__) ||
              null == g.loadExternalDependency ||
              g.loadExternalDependency(this.instance, "toolbar", (u) => {
                if (u)
                  return (
                    Fl.error("[Toolbar] Failed to load", u),
                    void this.Qo(0)
                  );
                (this.Qo(2), this.Ko(v));
              }),
            nr(_t, "turbolinks:load", () => {
              (this.Qo(0), this.loadToolbar(v));
            }));
        }
        return !0;
      }
      Yo(u) {
        return this.loadToolbar(u);
      }
      maybeLoadEditor(u, d, h) {
        return (
          void 0 === u && (u = void 0),
          void 0 === d && (d = void 0),
          void 0 === h && (h = void 0),
          this.maybeLoadToolbar(u, d, h)
        );
      }
    },
  },
  Wl = f({ experiments: xa }, ql),
  Xl = {
    conversations: class {
      constructor(u) {
        ((this.Xo = void 0),
          (this._conversationsManager = null),
          (this.ea = !1),
          (this.ta = null),
          (this._instance = u));
      }
      initialize() {
        this.loadIfEnabled();
      }
      onRemoteConfig(u) {
        if (!this._instance.config.disable_conversations) {
          var d = u.conversations;
          H(d) ||
            (W(d) ? (this.Xo = d) : ((this.Xo = d.enabled), (this.ta = d)),
            this.loadIfEnabled());
        }
      }
      reset() {
        var u;
        (null == (u = this._conversationsManager) || u.reset(),
          (this._conversationsManager = null),
          (this.Xo = void 0),
          (this.ta = null));
      }
      loadIfEnabled() {
        if (
          !(
            this._conversationsManager ||
            this.ea ||
            this._instance.config.disable_conversations ||
            or(this._instance.config) ||
            (this._instance.config.cookieless_mode &&
              this._instance.consent.isOptedOut())
          )
        ) {
          var u = null == $t ? void 0 : $t.__PosthogExtensions__;
          if (u && !N(this.Xo) && this.Xo)
            if (this.ta && this.ta.token) {
              this.ea = !0;
              try {
                var d = u.initConversations;
                if (d) return (this.ra(d), void (this.ea = !1));
                var h = u.loadExternalDependency;
                if (!h) return void this.ia(Us);
                h(this._instance, "conversations", (d) => {
                  (d || !u.initConversations
                    ? this.ia("Could not load conversations script", d)
                    : this.ra(u.initConversations),
                    (this.ea = !1));
                });
              } catch (u) {
                (this.ia("Error initializing conversations", u),
                  (this.ea = !1));
              }
            } else
              Al.error(
                "Conversations enabled but missing token in remote config.",
              );
        }
      }
      ra(u) {
        if (this.ta)
          try {
            ((this._conversationsManager = u(this.ta, this._instance)),
              Al.info("Conversations loaded successfully"));
          } catch (u) {
            this.ia("Error completing conversations initialization", u);
          }
        else Al.error("Cannot complete initialization: remote config is null");
      }
      ia(u, d) {
        (Al.error(u, d), (this._conversationsManager = null), (this.ea = !1));
      }
      show() {
        this._conversationsManager
          ? this._conversationsManager.show()
          : Al.warn("Conversations not loaded yet.");
      }
      hide() {
        this._conversationsManager && this._conversationsManager.hide();
      }
      isAvailable() {
        return !0 === this.Xo && !B(this._conversationsManager);
      }
      isVisible() {
        var u, d;
        return (
          null !==
            (u =
              null == (d = this._conversationsManager)
                ? void 0
                : d.isVisible()) &&
          void 0 !== u &&
          u
        );
      }
      sendMessage(u, d, h) {
        var v = this;
        return p(function* () {
          return v._conversationsManager
            ? v._conversationsManager.sendMessage(u, d, h)
            : (Al.warn(Ll), null);
        })();
      }
      getMessages(u, d) {
        var h = this;
        return p(function* () {
          return h._conversationsManager
            ? h._conversationsManager.getMessages(u, d)
            : (Al.warn(Ll), null);
        })();
      }
      markAsRead(u) {
        var d = this;
        return p(function* () {
          return d._conversationsManager
            ? d._conversationsManager.markAsRead(u)
            : (Al.warn(Ll), null);
        })();
      }
      getTickets(u) {
        var d = this;
        return p(function* () {
          return d._conversationsManager
            ? d._conversationsManager.getTickets(u)
            : (Al.warn(Ll), null);
        })();
      }
      requestRestoreLink(u) {
        var d = this;
        return p(function* () {
          return d._conversationsManager
            ? d._conversationsManager.requestRestoreLink(u)
            : (Al.warn(Ll), null);
        })();
      }
      restoreFromToken(u) {
        var d = this;
        return p(function* () {
          return d._conversationsManager
            ? d._conversationsManager.restoreFromToken(u)
            : (Al.warn(Ll), null);
        })();
      }
      restoreFromUrlToken() {
        var u = this;
        return p(function* () {
          return u._conversationsManager
            ? u._conversationsManager.restoreFromUrlToken()
            : (Al.warn(Ll), null);
        })();
      }
      getCurrentTicketId() {
        var u, d;
        return null !==
          (u =
            null == (d = this._conversationsManager)
              ? void 0
              : d.getCurrentTicketId()) && void 0 !== u
          ? u
          : null;
      }
      getWidgetSessionId() {
        var u, d;
        return null !==
          (u =
            null == (d = this._conversationsManager)
              ? void 0
              : d.getWidgetSessionId()) && void 0 !== u
          ? u
          : null;
      }
      ln() {
        var u;
        null == (u = this._conversationsManager) || u.setIdentity();
      }
      hn() {
        var u;
        null == (u = this._conversationsManager) || u.clearIdentity();
      }
    },
  },
  Kl = {
    logs: class {
      constructor(u) {
        var d;
        ((this.na = !1),
          (this.sa = !1),
          (this.Gt = mr("[logs]")),
          (this.oa = []),
          (this.aa = 0),
          (this.ua = 0),
          (this.la = !1),
          (this._instance = u),
          this._instance &&
            null != (d = this._instance.config.logs) &&
            d.captureConsoleLogs &&
            (this.na = !0));
      }
      initialize() {
        this.loadIfEnabled();
      }
      onRemoteConfig(u) {
        var d,
          h = null == (d = u.logs) ? void 0 : d.captureConsoleLogs;
        !H(h) && h && ((this.na = !0), this.loadIfEnabled());
      }
      reset() {
        ((this.oa = []),
          this.qr && (clearTimeout(this.qr), (this.qr = void 0)),
          (this.aa = 0),
          (this.ua = 0),
          (this.la = !1));
      }
      loadIfEnabled() {
        if (this.na && !this.sa) {
          var u = null == $t ? void 0 : $t.__PosthogExtensions__;
          if (u) {
            var d = u.loadExternalDependency;
            d
              ? d(this._instance, "logs", (d) => {
                  var h;
                  d || null == (h = u.logs) || !h.initializeLogs
                    ? this.Gt.error("Could not load logs script", d)
                    : (u.logs.initializeLogs(this._instance), (this.sa = !0));
                })
              : this.Gt.error(Us);
          } else this.Gt.error("PostHog Extensions not found.");
        }
      }
      captureLog(u) {
        var d, h, v, g, m, b;
        if (this._instance.is_capturing())
          if (u && u.body) {
            var k =
                null !==
                  (d =
                    null == (h = this._instance.config.logs)
                      ? void 0
                      : h.flushIntervalMs) && void 0 !== d
                  ? d
                  : 3e3,
              S =
                null !==
                  (v =
                    null == (g = this._instance.config.logs)
                      ? void 0
                      : g.maxLogsPerInterval) && void 0 !== v
                  ? v
                  : 1e3,
              $ = Date.now();
            if (
              (k > $ - this.ua ||
                ((this.ua = $), (this.aa = 0), (this.la = !1)),
              S > this.aa)
            ) {
              this.aa++;
              var F = (function (u, d) {
                var h = u.level || "info",
                  { text: v, number: g } = Ni[h] || Ui,
                  m = String(Date.now()) + "000000",
                  b = {};
                (d.distinctId && (b.posthogDistinctId = d.distinctId),
                  d.sessionId && (b.sessionId = d.sessionId),
                  d.currentUrl && (b["url.full"] = d.currentUrl),
                  d.screenName && (b["screen.name"] = d.screenName),
                  d.appState && (b["app.state"] = d.appState),
                  d.activeFeatureFlags &&
                    d.activeFeatureFlags.length > 0 &&
                    (b.feature_flags = d.activeFeatureFlags));
                var k = f({}, b, u.attributes || {}),
                  S = {
                    timeUnixNano: m,
                    observedTimeUnixNano: m,
                    severityNumber: g,
                    severityText: v,
                    body: { stringValue: u.body },
                    attributes: oe(k),
                  };
                return (
                  u.trace_id && (S.traceId = u.trace_id),
                  u.span_id && (S.spanId = u.span_id),
                  N(u.trace_flags) || (S.flags = u.trace_flags),
                  S
                );
              })(u, this.ha());
              (this.oa.push({ record: F }),
                (null !==
                  (m =
                    null == (b = this._instance.config.logs)
                      ? void 0
                      : b.maxBufferSize) && void 0 !== m
                  ? m
                  : 100) > this.oa.length
                  ? this.ca()
                  : this.flushLogs());
            } else
              this.la ||
                (this.Gt.warn(
                  "captureLog dropping logs: exceeded " +
                    S +
                    " logs per " +
                    k +
                    "ms",
                ),
                (this.la = !0));
          } else this.Gt.warn("captureLog requires a body");
      }
      get logger() {
        return (
          this.da ||
            (this.da = {
              trace: (u, d) =>
                this.captureLog({ body: u, level: "trace", attributes: d }),
              debug: (u, d) =>
                this.captureLog({ body: u, level: "debug", attributes: d }),
              info: (u, d) =>
                this.captureLog({ body: u, level: "info", attributes: d }),
              warn: (u, d) =>
                this.captureLog({ body: u, level: "warn", attributes: d }),
              error: (u, d) =>
                this.captureLog({ body: u, level: "error", attributes: d }),
              fatal: (u, d) =>
                this.captureLog({ body: u, level: "fatal", attributes: d }),
            }),
          this.da
        );
      }
      flushLogs(u) {
        if (
          (this.qr && (clearTimeout(this.qr), (this.qr = void 0)),
          0 !== this.oa.length)
        ) {
          var d = this.oa;
          this.oa = [];
          var h = this._instance.config.logs,
            v = f(
              {
                "service.name":
                  (null == h ? void 0 : h.serviceName) || "unknown_service",
              },
              (null == h ? void 0 : h.environment) && {
                "deployment.environment": h.environment,
              },
              (null == h ? void 0 : h.serviceVersion) && {
                "service.version": h.serviceVersion,
              },
              null == h ? void 0 : h.resourceAttributes,
            ),
            g = (function (u, d, h, v) {
              return {
                resourceLogs: [
                  {
                    resource: { attributes: oe(d) },
                    scopeLogs: [
                      { scope: { name: h, version: v }, logRecords: u },
                    ],
                  },
                ],
              };
            })(
              d.map((u) => u.record),
              v,
              Ct.LIB_NAME,
              Ct.LIB_VERSION,
            ),
            m =
              this._instance.requestRouter.endpointFor("api", "/i/v1/logs") +
              "?token=" +
              encodeURIComponent(this._instance.config.token);
          this._instance.Bi({
            method: "POST",
            url: m,
            data: g,
            compression: "best-available",
            batchKey: "logs",
            transport: u,
          });
        }
      }
      ca() {
        var u, d;
        this.qr ||
          (this.qr = setTimeout(
            () => {
              ((this.qr = void 0), this.flushLogs());
            },
            null !==
              (u =
                null == (d = this._instance.config.logs)
                  ? void 0
                  : d.flushIntervalMs) && void 0 !== u
              ? u
              : 3e3,
          ));
      }
      ha() {
        var u,
          d = {};
        if (
          ((d.distinctId = this._instance.get_distinct_id()),
          this._instance.sessionManager)
        ) {
          var { sessionId: h } =
            this._instance.sessionManager.checkAndGetSessionAndWindowId(!0);
          d.sessionId = h;
        }
        if (
          (null != $t &&
            null != (u = $t.location) &&
            u.href &&
            (d.currentUrl = $t.location.href),
          this._instance.featureFlags)
        ) {
          var v = this._instance.featureFlags.getFlags();
          v && v.length > 0 && (d.activeFeatureFlags = v);
        }
        return d;
      }
    },
  },
  Gl = f({}, ql, Dl, jl, Nl, Ul, zl, Bl, Hl, Vl, Wl, Xl, Kl);
to.__defaultExtensionClasses = f({}, Gl);
var Yl,
  Jl =
    ((Yl = Ha[Ga] = new to()),
    (function () {
      function e() {
        e.done ||
          ((e.done = !0),
          (Ya = !1),
          Xi(Ha, function (u) {
            u._dom_loaded();
          }));
      }
      null != bt && bt.addEventListener
        ? "complete" === bt.readyState
          ? e()
          : nr(bt, "DOMContentLoaded", e, { capture: !1 })
        : _t &&
          _r.error(
            "Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized",
          );
    })(),
    Yl);
let Zl = null;
const Ql = 36e5;
async function isEUUser() {
  if (Zl && Date.now() - Zl.timestamp < Ql) return Zl.showCookieBanner;
  try {
    const u = await fetch(
      "https://68cfe47c002decae7030.fra.appwrite.run//api/check-eu",
      { method: "POST", headers: { "Content-Type": "application/json" } },
    );
    if (!u.ok) throw new Error(`Geo detection failed: ${u.status}`);
    const d = await u.json();
    return (
      (Zl = { showCookieBanner: d.showCookieBanner, timestamp: Date.now() }),
      d.showCookieBanner
    );
  } catch (u) {
    return ((Zl = { showCookieBanner: !0, timestamp: Date.now() - 18e5 }), !0);
  }
}
!(function (d = {}) {
  (inject(
    {
      ...d,
      basePath: getBasePath(),
      disableAutoTrack: !0,
      framework: "sveltekit",
    },
    (function () {
      try {
        return;
      } catch {}
    })(),
  ),
    u.subscribe(({ route: u, url: d }) => {
      (null == u ? void 0 : u.id) &&
        (function ({ route: u, path: d }) {
          var h;
          null == (h = window.va) ||
            h.call(window, "pageview", { route: u, path: d });
        })({ route: u.id, path: d.pathname });
    }));
})({ mode: "production" });
function updatePostHogSettings(u) {
  u ||
    (Jl.set_config({
      cookieless_mode: void 0,
      persistence: "localStorage+cookie",
    }),
    Jl.opt_in_capturing(),
    v.accept());
}
const ec = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      load: async () => {
        window.__posthogInitialized ||
          (Jl.init(d, {
            api_host: "https://eu.i.posthog.com",
            cookieless_mode: "on_reject",
            person_profiles: "always",
          }),
          (window.__posthogInitialized = !0),
          (async function () {
            try {
              if (void 0 !== window.__isEUUser)
                return void updatePostHogSettings(window.__isEUUser);
              const u = await isEUUser();
              ((window.__isEUUser = u), updatePostHogSettings(u));
            } catch (u) {}
          })(),
          h());
      },
      prerender: !0,
      ssr: !0,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Circle_x(u, d) {
  const h = Xe(d, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */ const v = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "m9 9 6 6" }],
  ];
  je(
    u,
    Ke({ name: "circle-x" }, () => h, {
      get iconNode() {
        return v;
      },
      children: (u, h) => {
        var v = b();
        var g = se(v);
        (Ne(g, d, "default", {}), k(u, v));
      },
      $$slots: { default: !0 },
    }),
  );
}
function Info(u, d) {
  const h = Xe(d, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */ const v = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }],
  ];
  je(
    u,
    Ke({ name: "info" }, () => h, {
      get iconNode() {
        return v;
      },
      children: (u, h) => {
        var v = b();
        var g = se(v);
        (Ne(g, d, "default", {}), k(u, v));
      },
      $$slots: { default: !0 },
    }),
  );
}
function Lightbulb(u, d) {
  const h = Xe(d, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */ const v = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      },
    ],
    ["path", { d: "M9 18h6" }],
    ["path", { d: "M10 22h4" }],
  ];
  je(
    u,
    Ke({ name: "lightbulb" }, () => h, {
      get iconNode() {
        return v;
      },
      children: (u, h) => {
        var v = b();
        var g = se(v);
        (Ne(g, d, "default", {}), k(u, v));
      },
      $$slots: { default: !0 },
    }),
  );
}
function Shield(u, d) {
  const h = Xe(d, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */ const v = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      },
    ],
  ];
  je(
    u,
    Ke({ name: "shield" }, () => h, {
      get iconNode() {
        return v;
      },
      children: (u, h) => {
        var v = b();
        var g = se(v);
        (Ne(g, d, "default", {}), k(u, v));
      },
      $$slots: { default: !0 },
    }),
  );
}
function Triangle_alert(u, d) {
  const h = Xe(d, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */ const v = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      },
    ],
    ["path", { d: "M12 9v4" }],
    ["path", { d: "M12 17h.01" }],
  ];
  je(
    u,
    Ke({ name: "triangle-alert" }, () => h, {
      get iconNode() {
        return v;
      },
      children: (u, h) => {
        var v = b();
        var g = se(v);
        (Ne(g, d, "default", {}), k(u, v));
      },
      $$slots: { default: !0 },
    }),
  );
}
var tc = $(
  '<button type="button" class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors\n                  bg-sage text-white hover:bg-sage/90 dark:bg-sage/80 dark:hover:bg-sage\n                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage"> </button>',
);
var ic = $('<div class="mt-3 flex gap-2 svelte-1cpok13"></div>');
var rc = $(
  '<div class="ml-4 flex flex-shrink-0 svelte-1cpok13"><button type="button" class="inline-flex rounded-md opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"><span class="sr-only">Close</span> <!></button></div>',
);
var sc = $(
  '<div role="alert" aria-live="assertive" aria-atomic="true" tabindex="-1"><div class="p-4 svelte-1cpok13"><div class="flex items-start svelte-1cpok13"><div class="flex-shrink-0 svelte-1cpok13"><!></div> <div class="ml-3 w-0 flex-1 svelte-1cpok13"><p class="text-sm font-medium"> </p> <p class="mt-1 text-sm opacity-90"> </p> <!></div> <!></div></div></div>',
);
function Toast(u, d) {
  ce(d, !1);
  let h = Ge(d, "toast", 8);
  let v = Ce();
  const m = {
    success: ot,
    error: Circle_x,
    warning: Triangle_alert,
    info: Info,
    tip: Lightbulb,
  };
  const b = {
    success:
      "border-sage/40 bg-sage/25 text-charcoal dark:bg-sage/30 dark:text-gray-100",
    error:
      "border-sage/40 bg-sage/25 text-charcoal dark:bg-sage/30 dark:text-gray-100",
    warning:
      "border-sage/40 bg-sage/25 text-charcoal dark:bg-sage/30 dark:text-gray-100",
    info: "border-sage/40 bg-sage/25 text-charcoal dark:bg-sage/30 dark:text-gray-100",
    tip: "border-lavender/40 bg-lavender/15 text-charcoal dark:bg-lavender/20 dark:border-lavender/30 dark:text-gray-100",
  };
  const $ = {
    success: "text-sage",
    error: "text-sage",
    warning: "text-sage",
    info: "text-sage",
    tip: "text-lavender dark:text-lavender",
  };
  function dismiss() {
    Ze.removeToast(h().id);
  }
  (G(() => {
    ue(v) && ue(v).focus();
  }),
    ze());
  var F = sc();
  var M = pe(F);
  var A = pe(M);
  var Q = pe(A);
  var te = pe(Q);
  (nt(
    te,
    () => m[h().type],
    (u, d) => {
      d(u, {
        get class() {
          return `h-5 w-5 ${(ve(h()), ge(() => $[h().type]) ?? "")}`;
        },
      });
    },
  ),
    _e(Q));
  var re = be(Q, 2);
  var se = pe(re);
  var Ie = pe(se, !0);
  _e(se);
  var Ae = be(se, 2);
  var qe = pe(Ae, !0);
  _e(Ae);
  var je = be(Ae, 2);
  var consequent = (u) => {
    var d = ic();
    (He(
      d,
      5,
      () => (ve(h()), ge(() => h().actions)),
      Ve,
      (u, d) => {
        var h = tc();
        var v = pe(h, !0);
        (_e(h),
          $e(() => rt(v, (ue(d), ge(() => ue(d).label)))),
          S("click", h, () => {
            (ue(d).onClick(), dismiss());
          }),
          k(u, h));
      },
    ),
      _e(d),
      k(u, d));
  };
  (st(je, (u) => {
    (ve(h()), ge(() => h().actions && h().actions.length > 0) && u(consequent));
  }),
    _e(re));
  var Ne = be(re, 2);
  var consequent_1 = (u) => {
    var d = rc();
    var h = pe(d);
    var v = be(pe(h), 2);
    (lt(v, { class: "h-4 w-4" }),
      _e(h),
      _e(d),
      S("click", h, dismiss),
      k(u, d));
  };
  (st(Ne, (u) => {
    (ve(h()), ge(() => h().dismissible) && u(consequent_1));
  }),
    _e(A),
    _e(M),
    _e(F),
    g(
      F,
      (u) => Ee(v, u),
      () => ue(v),
    ),
    $e(() => {
      (C(
        F,
        1,
        `pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-lg ${(ve(h()), ge(() => b[h().type]) ?? "")}`,
        "svelte-1cpok13",
      ),
        rt(Ie, (ve(h()), ge(() => h().title))),
        rt(qe, (ve(h()), ge(() => h().message))));
    }),
    at(
      1,
      F,
      () => ct,
      () => ({ x: 300, duration: 300 }),
    ),
    at(
      2,
      F,
      () => ct,
      () => ({ x: 300, duration: 200 }),
    ),
    k(u, F),
    Fe());
}
var nc = $(
  '<div class="pointer-events-none fixed inset-0 z-[9999] flex items-start justify-end p-6 svelte-cqwvc2"><div class="flex w-full flex-col items-center space-y-4 sm:items-end svelte-cqwvc2"></div></div> <div class="pointer-events-none fixed inset-0 z-[9999] flex items-end justify-start pb-16 pl-6 pr-6 pt-6 svelte-cqwvc2"><div class="flex w-full flex-col items-center space-y-4 sm:items-start svelte-cqwvc2"></div></div>',
  1,
);
const oc = {
  checking: !1,
  available: !1,
  downloading: !1,
  downloaded: 0,
  contentLength: 0,
  completed: !1,
};
const ac = (function () {
  const { subscribe: u, set: d, update: h } = Q(oc);
  return {
    subscribe: u,
    reset: () => d(oc),
    setChecking: (u) => h((d) => ({ ...d, checking: u })),
    setAvailable: (u, d, v, g) =>
      h((h) => ({ ...h, available: u, version: d, date: v, body: g })),
    setDownloading: (u) => h((d) => ({ ...d, downloading: u })),
    setProgress: (u, d) =>
      h((h) => ({ ...h, downloaded: u, contentLength: d })),
    setCompleted: (u) => h((d) => ({ ...d, completed: u })),
    setError: (u) =>
      h((d) => ({ ...d, error: u, checking: !1, downloading: !1 })),
  };
})();
function UpdateManager(u, d) {
  ce(d, !1);
  let h = Ge(d, "disableAutoCheck", 8, !1);
  const v = Qe;
  let g = null;
  async function checkForUpdates() {
    if (v)
      try {
        ac.setChecking(!0);
        const { check: u } = await m(
          async () => {
            const { check: u } = await import("../chunks/CG_8iP63.js");
            return { check: u };
          },
          __vite__mapDeps([0, 1]),
          import.meta.url,
        );
        const { relaunch: d } = await m(
          async () => {
            const { relaunch: u } = await import("../chunks/_GAXbv_D.js");
            return { relaunch: u };
          },
          __vite__mapDeps([2, 1]),
          import.meta.url,
        );
        const h = await u();
        h
          ? (ac.setAvailable(!0, h.version, h.date, h.body),
            ac.setChecking(!1),
            await (async function (u, d) {
              try {
                ac.setDownloading(!0);
                let h = 0;
                let v = 0;
                (await u.downloadAndInstall((u) => {
                  switch (u.event) {
                    case "Started":
                      ((v = u.data.contentLength), ac.setProgress(0, v));
                      break;
                    case "Progress":
                      ((h += u.data.chunkLength), ac.setProgress(h, v));
                      break;
                    case "Finished":
                      (ac.setDownloading(!1), ac.setCompleted(!0));
                      break;
                  }
                }),
                  setTimeout(async () => {
                    await d();
                  }, 2e3));
              } catch (h) {
                (ac.setDownloading(!1),
                  ac.setError(`Failed to install update: ${h}`));
              }
            })(h, d))
          : ac.setChecking(!1);
      } catch (u) {
        const d = u?.toString() || "";
        d.includes("error sending request") ||
          d.includes("network") ||
          d.includes("timeout") ||
          d.includes("connection") ||
          d.includes("dns") ||
          d.includes("offline") ||
          ac.setError(`Failed to check for updates: ${u}`);
      } finally {
        (ac.setChecking(!1), ac.setDownloading(!1));
      }
  }
  function manualCheckForUpdates() {
    return (
      g ||
        (g = checkForUpdates().finally(() => {
          g = null;
        })),
      g
    );
  }
  G(() => (v && !h() ? manualCheckForUpdates() : h(), () => {}));
  var b = { manualCheckForUpdates: manualCheckForUpdates };
  return (ze(), ut(d, "manualCheckForUpdates", manualCheckForUpdates), Fe(b));
}
var lc = $(
  '<div class="flex items-center gap-3"><div class="w-5 h-5 border-2 border-sage/30 border-t-sage rounded-full animate-spin"></div> <div class="flex-1"><h3 class="font-semibold text-charcoal dark:text-gray-100 text-sm">Checking for updates...</h3> <p class="text-xs text-slate dark:text-gray-400">Looking for the latest version</p></div></div>',
);
var cc = $('<p class="text-xs text-slate dark:text-gray-400 mb-1"> </p>');
var uc = $(
  '<p class="text-xs text-slate dark:text-gray-400 mb-2 line-clamp-2 svelte-m7sngy"> </p>',
);
var dc = $(
  '<div class="flex items-start gap-3"><div class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z"></path></svg></div> <div class="flex-1"><h3 class="font-semibold text-charcoal dark:text-gray-100 text-sm mb-1">Update Available!</h3> <!> <!> <div class="text-xs text-sage font-medium">Download starting automatically...</div></div></div>',
);
var hc = $(
  '<div class="flex items-start gap-3"><div class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z"></path></svg></div> <div class="flex-1"><h3 class="font-semibold text-charcoal dark:text-gray-100 text-sm mb-1">Downloading Update...</h3> <div class="mb-2"><div class="flex justify-between text-xs text-slate dark:text-gray-400 mb-1"><span> </span> <span> </span></div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><div class="bg-gradient-to-r from-sage to-mint h-2 rounded-full transition-all duration-300 ease-out"></div></div></div> <p class="text-xs text-slate dark:text-gray-400">The app will restart automatically when complete</p></div></div>',
);
var pc = $(
  '<div class="flex items-start gap-3"><div class="w-9 h-9 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div> <div class="flex-1"><h3 class="font-semibold text-charcoal dark:text-gray-100 text-sm mb-1">Update Complete!</h3> <p class="text-xs text-slate dark:text-gray-400">Restarting application...</p></div></div>',
);
var vc = $(
  '<div class="flex items-start gap-3"><div class="w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div> <div class="flex-1"><h3 class="font-semibold text-charcoal dark:text-gray-100 text-sm mb-1">Update Failed</h3> <p class="text-xs text-red-600 dark:text-red-400 mb-2"> </p> <button class="text-xs text-sage hover:text-sage/80 font-medium">Dismiss</button></div></div>',
);
var gc = $(
  '<div class="fixed top-4 right-4 z-50 w-80 animate-fade-in svelte-m7sngy"><div class="floating-panel p-4 shadow-lg"><!> <!> <!> <!> <!></div></div>',
);
class LicenseManager {
  static instance;
  validationPromise = null;
  static getInstance() {
    return (
      LicenseManager.instance ||
        (LicenseManager.instance = new LicenseManager()),
      LicenseManager.instance
    );
  }
  async getStoredLicenseKey() {
    return null;
  }
  async activateLicense(u) {
    return { valid: !0 };
  }
  async validateLicense(u) {
    return { valid: !0 };
  }
  async clearLicense() {
    return;
  }
  async checkLicenseStatus() {
    return { valid: !0 };
  }
  async performLicenseCheck() {
    try {
      return { valid: await pt("check_license_smart_command") };
    } catch (u) {
      return {
        valid: !1,
        error: "string" == typeof u ? u : "Failed to check license status",
      };
    }
  }
}
const fc = LicenseManager.getInstance();
var _c = $(
  '<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md"> </div>',
);
var mc = $(
  '<div class="flex items-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> </div>',
);
var yc = $(
  '<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="license-modal-title" tabindex="-1"><div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"><div class="flex items-center justify-between mb-4"><h2 id="license-modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <p class="text-gray-600 mb-4"><!></p> <p class="text-sm text-gray-500 mb-4">Don\'t know your license key? You can find it on <button type="button" class="text-sage hover:text-sage/80 underline transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit">your Polar portal</button>. If you don\'t have a license key, you can purchase one from <button type="button" class="text-sage hover:text-sage/80 underline transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit">here</button>.</p> <div class="mb-4"><label for="license-key-input" class="block text-sm font-medium text-gray-700 mb-2">License Key</label> <input id="license-key-input" type="text" placeholder="Enter your license key" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"/></div> <!> <div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">Cancel</button> <button class="px-4 py-2 text-white bg-sage rounded-md hover:bg-sage/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><!></button></div></div></div>',
);
function LicenseModal(u, d) {
  ce(d, !1);
  let h = Ge(d, "isOpen", 12, !1);
  let v = Ge(d, "needsActivation", 8, !0);
  const $ = re();
  let C = Ce("");
  let M = Ce(!1);
  let Q = Ce("");
  let te = Ce();
  async function closeModal() {
    if (Qe)
      try {
        await pt("exit_app");
      } catch (u) {}
    (h(!1), Ee(C, ""), Ee(Q, ""), $("close"));
  }
  async function processLicense() {
    if (ue(C).trim()) {
      (Ee(M, !0), Ee(Q, ""));
      try {
        let u;
        if (
          ((u = v()
            ? await fc.activateLicense(ue(C).trim())
            : await fc.validateLicense(ue(C).trim())),
          u.valid)
        )
          ($("validated", { licenseKey: ue(C).trim(), wasActivation: v() }),
            (function () {
              (h(!1), Ee(C, ""), Ee(Q, ""), $("close"));
            })());
        else {
          Ee(
            Q,
            u.error ||
              (v() ? "License activation failed" : "Invalid license key"),
          );
          ue(Q).includes("not valid for Windows") ||
            ue(Q).includes("not valid for macOS") ||
            ue(Q).includes("starts with 'LEEDWIN'") ||
            ue(Q).includes("starts with 'LEEDMAC'") ||
            ue(Q).includes("polar.sh") ||
            ue(Q).includes("leed.my") ||
            Ee(Q, getErrorMessageWithLinks(ue(Q)));
        }
      } catch (u) {
        const d =
          "string" == typeof u
            ? u
            : v()
              ? "Failed to activate license key"
              : "Failed to validate license key";
        Ee(Q, getErrorMessageWithLinks(d));
      } finally {
        Ee(M, !1);
      }
    } else Ee(Q, "Please enter a license key");
  }
  function handleKeyPress(u) {
    "Enter" === u.key ? processLicense() : "Escape" === u.key && closeModal();
  }
  function handleBackdropClick(u) {
    u.target === u.currentTarget && closeModal();
  }
  async function openPolarPortal() {
    const u = "https://polar.sh/doublone-studios/portal/";
    if (Qe)
      try {
        await pt("open_external_url", { url: u });
      } catch (d) {
        try {
          const { open: d } = await m(
            async () => {
              const { open: u } = await import("../chunks/DaUwuU3_.js");
              return { open: u };
            },
            __vite__mapDeps([3, 1]),
            import.meta.url,
          );
          await d(u);
        } catch (h) {}
      }
    else window.open(u, "_blank", "noopener,noreferrer");
  }
  function getPurchaseUrl() {
    const u = navigator.userAgent.toLowerCase();
    return u.includes("mac") || u.includes("darwin")
      ? "https://leed.my/download-for-mac"
      : "https://leed.my/download-for-windows";
  }
  function getErrorMessageWithLinks(u) {
    return `${u}. You can find your license key on your Polar portal: https://polar.sh/doublone-studios/portal/ or purchase one from ${getPurchaseUrl()}`;
  }
  (G(() => {
    h() && ue(te) && ue(te).focus();
  }),
    Ie(
      () => (ve(h()), ue(te)),
      () => {
        h() && ue(te) && setTimeout(() => ue(te).focus(), 100);
      },
    ),
    Ae(),
    ze());
  var je = b();
  var Ne = se(je);
  var consequent_3 = (u) => {
    var d = yc();
    var h = pe(d);
    var b = pe(h);
    var $ = pe(b);
    var G = pe($, !0);
    _e($);
    var re = be($, 2);
    _e(b);
    var se = be(b, 2);
    var ce = pe(se);
    var consequent = (u) => {
      var d = F(
        "Welcome to LeedPDF! Please enter your license key to activate this device.",
      );
      k(u, d);
    };
    var alternate = (u) => {
      var d = F(
        "You need a valid license key to continue using LeedPDF. Please enter your license key below.",
      );
      k(u, d);
    };
    (st(ce, (u) => {
      v() ? u(consequent) : u(alternate, -1);
    }),
      _e(se));
    var ve = be(se, 2);
    var Fe = be(pe(ve));
    var Ce = be(Fe, 2);
    (qe(), _e(ve));
    var Ie = be(ve, 2);
    var Ae = be(pe(Ie), 2);
    (A(Ae),
      g(
        Ae,
        (u) => Ee(te, u),
        () => ue(te),
      ),
      _e(Ie));
    var je = be(Ie, 2);
    var consequent_1 = (u) => {
      var d = _c();
      var h = pe(d, !0);
      (_e(d), $e(() => rt(h, ue(Q))), k(u, d));
    };
    st(je, (u) => {
      ue(Q) && u(consequent_1);
    });
    var Ne = be(je, 2);
    var ze = pe(Ne);
    var He = be(ze, 2);
    var Ve = pe(He);
    var consequent_2 = (u) => {
      var d = mc();
      var h = be(pe(d));
      (_e(d),
        $e(() => rt(h, " " + (v() ? "Activating..." : "Validating..."))),
        k(u, d));
    };
    var alternate_1 = (u) => {
      var d = F();
      ($e(() => rt(d, v() ? "Activate License" : "Validate License")), k(u, d));
    };
    (st(Ve, (u) => {
      ue(M) ? u(consequent_2) : u(alternate_1, -1);
    }),
      _e(He),
      _e(Ne),
      _e(h),
      _e(d),
      $e(
        (u) => {
          (rt(G, v() ? "Activate License Key" : "License Key Required"),
            (Ae.disabled = ue(M)),
            (ze.disabled = ue(M)),
            (He.disabled = u));
        },
        [() => (ue(M), ue(C), ge(() => ue(M) || !ue(C).trim()))],
      ),
      S("click", re, closeModal),
      S("click", Fe, openPolarPortal),
      S("click", Ce, () =>
        (async function () {
          const u = getPurchaseUrl();
          if (Qe)
            try {
              await pt("open_external_url", { url: u });
            } catch (d) {
              try {
                const { open: d } = await m(
                  async () => {
                    const { open: u } = await import("../chunks/DaUwuU3_.js");
                    return { open: u };
                  },
                  __vite__mapDeps([3, 1]),
                  import.meta.url,
                );
                await d(u);
              } catch (h) {}
            }
          else window.open(u, "_blank", "noopener,noreferrer");
        })(),
      ),
      ht(
        Ae,
        () => ue(C),
        (u) => Ee(C, u),
      ),
      S("keydown", Ae, handleKeyPress),
      S("click", ze, closeModal),
      S("click", He, processLicense),
      S("click", d, handleBackdropClick),
      S("keydown", d, handleKeyPress),
      k(u, d));
  };
  (st(Ne, (u) => {
    h() && u(consequent_3);
  }),
    k(u, je),
    Fe());
}
var bc = $(
  '<div class="cookie-banner-overlay svelte-1dxwcaa" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description"><div class="cookie-banner svelte-1dxwcaa"><div class="cookie-banner-header svelte-1dxwcaa"><div class="cookie-banner-icon svelte-1dxwcaa"><!></div> <h3 id="cookie-banner-title" class="cookie-banner-title svelte-1dxwcaa">Your Privacy Matters</h3> <button class="cookie-banner-close svelte-1dxwcaa" aria-label="Close cookie banner"><!></button></div> <div class="cookie-banner-content svelte-1dxwcaa"><p id="cookie-banner-description" class="cookie-banner-text svelte-1dxwcaa">We use analytics cookies to improve your experience and understand how our PDF tool is used. \n\t\t\t\t\tYou can choose to accept or decline cookies - either way, LeedPDF works perfectly!</p> <div class="cookie-banner-benefits svelte-1dxwcaa"><div class="benefit-item svelte-1dxwcaa"><!> <span>Your PDFs stay private & local</span></div> <div class="benefit-item svelte-1dxwcaa"><!> <span>Help us improve the app</span></div></div></div> <div class="cookie-banner-actions svelte-1dxwcaa"><button class="btn-secondary svelte-1dxwcaa" type="button">Decline Cookies</button> <button class="btn-primary svelte-1dxwcaa" type="button">Accept Cookies</button></div> <div class="cookie-banner-footer svelte-1dxwcaa"><p class="text-xs text-gray-500 svelte-1dxwcaa">Declining cookies enables privacy-first analytics. <a href="/privacy" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline svelte-1dxwcaa">Learn more</a></p></div></div></div>',
);
function CookieConsentBanner(u, d) {
  ce(d, !1);
  const $consentStore = () => Je(v, "$consentStore", h);
  const [h, g] = Ye();
  let m = Ce(!1);
  let $ = Ce(!1);
  function handleAccept() {
    v.accept();
  }
  function handleDecline() {
    v.decline();
  }
  function handleClose() {
    v.decline();
  }
  (G(async () => {
    if (Qe) Ee($, !0);
    else
      try {
        let u;
        (void 0 !== window.__isEUUser
          ? (u = window.__isEUUser)
          : ((u = await isEUUser()), (window.__isEUUser = u)),
          v.initialize(u),
          Ee($, !0));
      } catch (u) {
        (v.initialize(!0), (window.__isEUUser = !0), Ee($, !0));
      }
  }),
    Ie(
      () => ($consentStore(), v),
      () => {
        $consentStore() && v.shouldShowBanner($consentStore())
          ? Ee(m, !0)
          : Ee(m, !1);
      },
    ),
    Ae(),
    ze());
  var F = b();
  var C = se(F);
  var consequent = (u) => {
    var d = bc();
    var h = pe(d);
    var v = pe(h);
    var g = pe(v);
    (Shield(pe(g), { size: 24 }), _e(g));
    var m = be(g, 4);
    var $ = pe(m);
    (lt($, { size: 18 }), _e(m), _e(v));
    var F = be(v, 2);
    var C = be(pe(F), 2);
    var M = pe(C);
    (Shield(pe(M), { size: 16, class: "text-sage" }), qe(2), _e(M));
    var A = be(M, 2);
    (!(function (u, d) {
      const h = Xe(d, ["children", "$$slots", "$$events", "$$legacy"]);
      /**
       * @license lucide-svelte v1.0.1 - ISC
       *
       * ISC License
       *
       * Copyright (c) 2026 Lucide Icons and Contributors
       *
       * Permission to use, copy, modify, and/or distribute this software for any
       * purpose with or without fee is hereby granted, provided that the above
       * copyright notice and this permission notice appear in all copies.
       *
       * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
       * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
       * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
       * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
       * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
       * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
       * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
       *
       * ---
       *
       * The following Lucide icons are derived from the Feather project:
       *
       * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
       *
       * The MIT License (MIT) (for the icons listed above)
       *
       * Copyright (c) 2013-present Cole Bemis
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       *
       */ const v = [
        [
          "path",
          {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3" }],
      ];
      je(
        u,
        Ke({ name: "eye" }, () => h, {
          get iconNode() {
            return v;
          },
          children: (u, h) => {
            var v = b();
            var g = se(v);
            (Ne(g, d, "default", {}), k(u, v));
          },
          $$slots: { default: !0 },
        }),
      );
    })(pe(A), { size: 16, class: "text-sage" }),
      qe(2),
      _e(A),
      _e(C),
      _e(F));
    var G = be(F, 2);
    var Q = pe(G);
    var te = be(Q, 2);
    (_e(G),
      qe(2),
      _e(h),
      _e(d),
      S("click", m, handleClose),
      S("click", Q, handleDecline),
      S("click", te, handleAccept),
      k(u, d));
  };
  (st(C, (u) => {
    ue(m) && ue($) && u(consequent);
  }),
    k(u, F),
    Fe(),
    g());
}
var wc = $("<!> <!> <!> <!> <!> <!> <!> <!>", 1);
function _layout(u, d) {
  ce(d, !1);
  let h = Ce(!1);
  let v = !1;
  let $ = Ce(!0);
  let F = Ce();
  (G(() => {
    const u = vt.startAutoCleanup();
    return (
      Qe &&
        (!(async function () {
          try {
            const u = await fc.checkLicenseStatus();
            u.valid
              ? ((v = !0),
                ue(F) &&
                  ue(F).manualCheckForUpdates &&
                  ue(F).manualCheckForUpdates())
              : ((v = !1), Ee($, u.needsActivation ?? !0), Ee(h, !0));
          } catch (u) {
            ((v = !1), Ee($, !0), Ee(h, !0));
          }
        })(),
        (async function () {
          try {
            await ft("deep-link", (u) => {
              let d = u.payload;
              if (
                ((d.startsWith("https//") || d.startsWith("http//")) &&
                  (d = d
                    .replace("https//", "https://")
                    .replace("http//", "http://")),
                d)
              ) {
                const u = encodeURIComponent(d);
                gt(`/pdf/${u}`);
              }
            });
            const { invoke: u } = await m(
              async () => {
                const { invoke: u } = await import("../chunks/7ol_VW9s.js");
                return { invoke: u };
              },
              [],
              import.meta.url,
            );
            await u("check_file_associations");
          } catch (u) {}
        })(),
        (async function () {
          try {
            const u = await (async function () {
              return await pt("plugin:deep-link|get_current");
            })();
            if (!u || "object" != typeof u || !("onOpenUrl" in u)) return;
            await u.onOpenUrl((u) => {
              for (const d of u)
                if (d.startsWith("leedpdf://")) {
                  let u = d.replace("leedpdf://", "");
                  if (
                    ((u.startsWith("https//") || u.startsWith("http//")) &&
                      (u = u
                        .replace("https//", "https://")
                        .replace("http//", "http://")),
                    u)
                  ) {
                    const d = encodeURIComponent(u);
                    gt(`/pdf/${d}`);
                  }
                }
            });
          } catch (u) {
            Error;
          }
        })(),
        dt()),
      u
    );
  }),
    ze());
  var C = wc();
  var A = se(C);
  We(A, {});
  var Q = be(A, 2);
  g(
    UpdateManager(0, { disableAutoCheck: !0, $$legacy: !0 }),
    (u) => Ee(F, u),
    () => ue(F),
  );
  var re = be(Q, 2);
  !(function (u, d) {
    ce(d, !1);
    const h = !Qe && "Windows" == tt();
    (G(() => {
      if (!h) return;
      const loadParityDeals = () => {
        const u = document.createElement("script");
        ((u.type = "text/javascript"),
          (u.async = !0),
          (u.defer = !0),
          (u.innerHTML =
            '\n        function resolvePdSDKFunction(e,...t){return new Promise((n,i)=>{!function r(){window.PDPromotionUISDK&&"function"==typeof window.PDPromotionUISDK[e]?window.PDPromotionUISDK[e](...t).then(n).catch(i):setTimeout(r,100)}()})}!function(e,t,n,i,r,a,c){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(Array.prototype.slice.call(arguments))},a=t.createElement(n),c=t.getElementsByTagName(n)[0],a.id="parity-deals-sdk",a.async=1,a.src=r,c.parentNode.insertBefore(a,c)}(window,document,"script","PDPromotionUISDK","https://cdn.paritydeals.com/js-promotions-ui/1.0.0/js-promotions-ui.umd.js"),window.PDPromotionUI={init:function(e){return resolvePdSDKFunction("init",e)},getUpdatedPrice:function(e,t){return resolvePdSDKFunction("getUpdatedPrice",e,t)},updatePriceElement:function(e,t){return resolvePdSDKFunction("updatePriceElement",e,t)},updatePrice:function(e){return resolvePdSDKFunction("updatePrice",e)}};\n        \n        // Wrap initialization in try-catch for error handling\n        try {\n          PDPromotionUI.init({\n            productId: \'promo_b741065231924afbb58578edb55cc43a\',\n            banner: {\n              showCloseButton: true,\n            },\n            showBanner: true\n          }).catch(function(error) {\n            console.error(\'[ParityDeals] Initialization failed:\', error);\n          });\n        } catch (error) {\n          console.error(\'[ParityDeals] Failed to initialize SDK:\', error);\n        }\n      '),
          document.body.appendChild(u));
      };
      let u;
      if ("complete" !== document.readyState) {
        const handleLoad = () => {
          u = setTimeout(loadParityDeals, 2e3);
        };
        return (
          window.addEventListener("load", handleLoad, { once: !0 }),
          () => {
            (window.removeEventListener("load", handleLoad),
              void 0 !== u && clearTimeout(u));
          }
        );
      }
      return (
        (u = setTimeout(loadParityDeals, 3e3)),
        () => {
          void 0 !== u && clearTimeout(u);
        }
      );
    }),
      ze(),
      Fe());
  })(0, {});
  var ve = be(re, 2);
  Ne(ve, d, "default", {});
  var je = be(ve, 2);
  !(function (u, d) {
    ce(d, !1);
    const $toastStore = () => Je(Ze, "$toastStore", h);
    const [h, v] = Ye();
    ze();
    var g = nc();
    var m = se(g);
    var b = pe(m);
    (He(
      b,
      5,
      () =>
        $toastStore()
          .filter((u) => "tip" !== u.type)
          .slice(-1),
      (u) => u.id,
      (u, d) => {
        Toast(u, {
          get toast() {
            return ue(d);
          },
        });
      },
    ),
      _e(b),
      _e(m));
    var S = be(m, 2);
    var $ = pe(S);
    (He(
      $,
      5,
      () =>
        $toastStore()
          .filter((u) => "tip" === u.type)
          .slice(-1),
      (u) => u.id,
      (u, d) => {
        Toast(u, {
          get toast() {
            return ue(d);
          },
        });
      },
    ),
      _e($),
      _e(S),
      k(u, g),
      Fe(),
      v());
  })(je, {});
  var Ve = be(je, 2);
  !(function (u, d) {
    ce(d, !1);
    const $updateStore = () => Je(ac, "$updateStore", h);
    const [h, v] = Ye();
    const g = Ce();
    const m = Ce();
    let $ = Ce();
    function formatBytes(u) {
      if (0 === u) return "0 B";
      const d = Math.floor(Math.log(u) / Math.log(1024));
      return (
        parseFloat((u / Math.pow(1024, d)).toFixed(1)) +
        " " +
        ["B", "KB", "MB", "GB"][d]
      );
    }
    (te(() => {
      ue($) && clearTimeout(ue($));
    }),
      Ie(
        () => $updateStore(),
        () => {
          Ee(g, $updateStore());
        },
      ),
      Ie(
        () => ue(g),
        () => {
          Ee(
            m,
            ue(g).contentLength > 0
              ? Math.round((ue(g).downloaded / ue(g).contentLength) * 100)
              : 0,
          );
        },
      ),
      Ie(
        () => (ue(g), ac),
        () => {
          ue(g).completed &&
            Ee(
              $,
              setTimeout(() => {
                ac.reset();
              }, 5e3),
            );
        },
      ),
      Ae(),
      ze());
    var F = b();
    var C = se(F);
    var consequent_7 = (u) => {
      var d = gc();
      var h = pe(d);
      var v = pe(h);
      var consequent = (u) => {
        var d = lc();
        k(u, d);
      };
      st(v, (u) => {
        (ue(g), ge(() => ue(g).checking) && u(consequent));
      });
      var b = be(v, 2);
      var consequent_3 = (u) => {
        var d = dc();
        var h = be(pe(d), 2);
        var v = be(pe(h), 2);
        var consequent_1 = (u) => {
          var d = cc();
          var h = pe(d);
          (_e(d),
            $e(() =>
              rt(h, `Version ${(ue(g), ge(() => ue(g).version) ?? "")}`),
            ),
            k(u, d));
        };
        st(v, (u) => {
          (ue(g), ge(() => ue(g).version) && u(consequent_1));
        });
        var m = be(v, 2);
        var consequent_2 = (u) => {
          var d = uc();
          var h = pe(d, !0);
          (_e(d), $e(() => rt(h, (ue(g), ge(() => ue(g).body)))), k(u, d));
        };
        (st(m, (u) => {
          (ue(g), ge(() => ue(g).body) && u(consequent_2));
        }),
          qe(2),
          _e(h),
          _e(d),
          k(u, d));
      };
      st(b, (u) => {
        (ue(g),
          ge(() => ue(g).available && !ue(g).downloading && !ue(g).completed) &&
            u(consequent_3));
      });
      var $ = be(b, 2);
      var consequent_4 = (u) => {
        var d = hc();
        var h = be(pe(d), 2);
        var v = be(pe(h), 2);
        var b = pe(v);
        var S = pe(b);
        var $ = pe(S);
        _e(S);
        var F = be(S, 2);
        var C = pe(F);
        (_e(F), _e(b));
        var A = be(b, 2);
        var G = pe(A);
        (_e(A),
          _e(v),
          qe(2),
          _e(h),
          _e(d),
          $e(
            (u, d) => {
              (rt($, `${ue(m) ?? ""}%`),
                rt(C, `${u ?? ""} / ${d ?? ""}`),
                M(G, `width: ${ue(m) ?? ""}%`));
            },
            [
              () => (ue(g), ge(() => formatBytes(ue(g).downloaded))),
              () => (ue(g), ge(() => formatBytes(ue(g).contentLength))),
            ],
          ),
          k(u, d));
      };
      st($, (u) => {
        (ue(g), ge(() => ue(g).downloading) && u(consequent_4));
      });
      var F = be($, 2);
      var consequent_5 = (u) => {
        var d = pc();
        k(u, d);
      };
      st(F, (u) => {
        (ue(g), ge(() => ue(g).completed) && u(consequent_5));
      });
      var C = be(F, 2);
      var consequent_6 = (u) => {
        var d = vc();
        var h = be(pe(d), 2);
        var v = be(pe(h), 2);
        var m = pe(v, !0);
        _e(v);
        var b = be(v, 2);
        (_e(h),
          _e(d),
          $e(() => rt(m, (ue(g), ge(() => ue(g).error)))),
          S("click", b, () => ac.reset()),
          k(u, d));
      };
      (st(C, (u) => {
        (ue(g), ge(() => ue(g).error) && u(consequent_6));
      }),
        _e(h),
        _e(d),
        k(u, d));
    };
    (st(C, (u) => {
      (ue(g),
        ge(
          () =>
            ue(g).checking ||
            ue(g).available ||
            ue(g).downloading ||
            ue(g).completed ||
            ue(g).error,
        ) && u(consequent_7));
    }),
      k(u, F),
      Fe(),
      v());
  })(Ve, {});
  var Xe = be(Ve, 2);
  (CookieConsentBanner(Xe, {}),
    LicenseModal(be(Xe, 2), {
      get isOpen() {
        return ue(h);
      },
      set isOpen(u) {
        Ee(h, u);
      },
      get needsActivation() {
        return ue($);
      },
      set needsActivation(u) {
        Ee($, u);
      },
      $$events: {
        validated: function (u) {
          const { licenseKey: d, wasActivation: g } = u.detail;
          (d.length > 4
            ? ("*".repeat(d.length - 4), d.slice(-4))
            : "*".repeat(d.length),
            Ee(h, !1),
            (v = !0),
            ue(F) &&
              ue(F).manualCheckForUpdates &&
              ue(F).manualCheckForUpdates());
        },
        close: function () {},
      },
      $$legacy: !0,
    }),
    k(u, C),
    Fe());
}
export { _layout as component, ec as universal };
