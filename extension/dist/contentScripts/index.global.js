var j2 = Object.defineProperty;
var V2 = (e, t, n) => t in e ? j2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var G = (e, t, n) => (V2(e, typeof t != "symbol" ? t + "" : t, n), n);
function H2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var U2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ux = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : U2, function(n) {
    if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
      const r = "The message port closed before a response was received.", o = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", i = (l) => {
        const a = {
          alarms: {
            clear: {
              minArgs: 0,
              maxArgs: 1
            },
            clearAll: {
              minArgs: 0,
              maxArgs: 0
            },
            get: {
              minArgs: 0,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          bookmarks: {
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getChildren: {
              minArgs: 1,
              maxArgs: 1
            },
            getRecent: {
              minArgs: 1,
              maxArgs: 1
            },
            getSubTree: {
              minArgs: 1,
              maxArgs: 1
            },
            getTree: {
              minArgs: 0,
              maxArgs: 0
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeTree: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          browserAction: {
            disable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            enable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            getBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1
            },
            getBadgeText: {
              minArgs: 1,
              maxArgs: 1
            },
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            openPopup: {
              minArgs: 0,
              maxArgs: 0
            },
            setBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setBadgeText: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          browsingData: {
            remove: {
              minArgs: 2,
              maxArgs: 2
            },
            removeCache: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCookies: {
              minArgs: 1,
              maxArgs: 1
            },
            removeDownloads: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFormData: {
              minArgs: 1,
              maxArgs: 1
            },
            removeHistory: {
              minArgs: 1,
              maxArgs: 1
            },
            removeLocalStorage: {
              minArgs: 1,
              maxArgs: 1
            },
            removePasswords: {
              minArgs: 1,
              maxArgs: 1
            },
            removePluginData: {
              minArgs: 1,
              maxArgs: 1
            },
            settings: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          commands: {
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          contextMenus: {
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeAll: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          cookies: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 1,
              maxArgs: 1
            },
            getAllCookieStores: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          devtools: {
            inspectedWindow: {
              eval: {
                minArgs: 1,
                maxArgs: 2,
                singleCallbackArg: !1
              }
            },
            panels: {
              create: {
                minArgs: 3,
                maxArgs: 3,
                singleCallbackArg: !0
              },
              elements: {
                createSidebarPane: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            }
          },
          downloads: {
            cancel: {
              minArgs: 1,
              maxArgs: 1
            },
            download: {
              minArgs: 1,
              maxArgs: 1
            },
            erase: {
              minArgs: 1,
              maxArgs: 1
            },
            getFileIcon: {
              minArgs: 1,
              maxArgs: 2
            },
            open: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            pause: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFile: {
              minArgs: 1,
              maxArgs: 1
            },
            resume: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          extension: {
            isAllowedFileSchemeAccess: {
              minArgs: 0,
              maxArgs: 0
            },
            isAllowedIncognitoAccess: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          history: {
            addUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteAll: {
              minArgs: 0,
              maxArgs: 0
            },
            deleteRange: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            getVisits: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          i18n: {
            detectLanguage: {
              minArgs: 1,
              maxArgs: 1
            },
            getAcceptLanguages: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          identity: {
            launchWebAuthFlow: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          idle: {
            queryState: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          management: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getSelf: {
              minArgs: 0,
              maxArgs: 0
            },
            setEnabled: {
              minArgs: 2,
              maxArgs: 2
            },
            uninstallSelf: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          notifications: {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            create: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getPermissionLevel: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          pageAction: {
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            hide: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          permissions: {
            contains: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            request: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          runtime: {
            getBackgroundPage: {
              minArgs: 0,
              maxArgs: 0
            },
            getPlatformInfo: {
              minArgs: 0,
              maxArgs: 0
            },
            openOptionsPage: {
              minArgs: 0,
              maxArgs: 0
            },
            requestUpdateCheck: {
              minArgs: 0,
              maxArgs: 0
            },
            sendMessage: {
              minArgs: 1,
              maxArgs: 3
            },
            sendNativeMessage: {
              minArgs: 2,
              maxArgs: 2
            },
            setUninstallURL: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          sessions: {
            getDevices: {
              minArgs: 0,
              maxArgs: 1
            },
            getRecentlyClosed: {
              minArgs: 0,
              maxArgs: 1
            },
            restore: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          storage: {
            local: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            managed: {
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            sync: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            }
          },
          tabs: {
            captureVisibleTab: {
              minArgs: 0,
              maxArgs: 2
            },
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            detectLanguage: {
              minArgs: 0,
              maxArgs: 1
            },
            discard: {
              minArgs: 0,
              maxArgs: 1
            },
            duplicate: {
              minArgs: 1,
              maxArgs: 1
            },
            executeScript: {
              minArgs: 1,
              maxArgs: 2
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 0
            },
            getZoom: {
              minArgs: 0,
              maxArgs: 1
            },
            getZoomSettings: {
              minArgs: 0,
              maxArgs: 1
            },
            goBack: {
              minArgs: 0,
              maxArgs: 1
            },
            goForward: {
              minArgs: 0,
              maxArgs: 1
            },
            highlight: {
              minArgs: 1,
              maxArgs: 1
            },
            insertCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            query: {
              minArgs: 1,
              maxArgs: 1
            },
            reload: {
              minArgs: 0,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            sendMessage: {
              minArgs: 2,
              maxArgs: 3
            },
            setZoom: {
              minArgs: 1,
              maxArgs: 2
            },
            setZoomSettings: {
              minArgs: 1,
              maxArgs: 2
            },
            update: {
              minArgs: 1,
              maxArgs: 2
            }
          },
          topSites: {
            get: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          webNavigation: {
            getAllFrames: {
              minArgs: 1,
              maxArgs: 1
            },
            getFrame: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          webRequest: {
            handlerBehaviorChanged: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          windows: {
            create: {
              minArgs: 0,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 1
            },
            getLastFocused: {
              minArgs: 0,
              maxArgs: 1
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          }
        };
        if (Object.keys(a).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class s extends WeakMap {
          constructor(P, T = void 0) {
            super(T), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const u = ($) => $ && typeof $ == "object" && typeof $.then == "function", c = ($, P) => (...T) => {
          l.runtime.lastError ? $.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || T.length <= 1 && P.singleCallbackArg !== !1 ? $.resolve(T[0]) : $.resolve(T);
        }, f = ($) => $ == 1 ? "argument" : "arguments", d = ($, P) => function(R, ...N) {
          if (N.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${N.length}`);
          if (N.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${N.length}`);
          return new Promise((D, z) => {
            if (P.fallbackToNoCallback)
              try {
                R[$](...N, c({
                  resolve: D,
                  reject: z
                }, P));
              } catch (F) {
                console.warn(`${$} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, F), R[$](...N), P.fallbackToNoCallback = !1, P.noCallback = !0, D();
              }
            else
              P.noCallback ? (R[$](...N), D()) : R[$](...N, c({
                resolve: D,
                reject: z
              }, P));
          });
        }, g = ($, P, T) => new Proxy(P, {
          apply(R, N, D) {
            return T.call(N, $, ...D);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = ($, P = {}, T = {}) => {
          let R = /* @__PURE__ */ Object.create(null), N = {
            has(z, F) {
              return F in $ || F in R;
            },
            get(z, F, _) {
              if (F in R)
                return R[F];
              if (!(F in $))
                return;
              let V = $[F];
              if (typeof V == "function")
                if (typeof P[F] == "function")
                  V = g($, $[F], P[F]);
                else if (h(T, F)) {
                  let M = d(F, T[F]);
                  V = g($, $[F], M);
                } else
                  V = V.bind($);
              else if (typeof V == "object" && V !== null && (h(P, F) || h(T, F)))
                V = v(V, P[F], T[F]);
              else if (h(T, "*"))
                V = v(V, P[F], T["*"]);
              else
                return Object.defineProperty(R, F, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return $[F];
                  },
                  set(M) {
                    $[F] = M;
                  }
                }), V;
              return R[F] = V, V;
            },
            set(z, F, _, V) {
              return F in R ? R[F] = _ : $[F] = _, !0;
            },
            defineProperty(z, F, _) {
              return Reflect.defineProperty(R, F, _);
            },
            deleteProperty(z, F) {
              return Reflect.deleteProperty(R, F);
            }
          }, D = Object.create($);
          return new Proxy(D, N);
        }, w = ($) => ({
          addListener(P, T, ...R) {
            P.addListener($.get(T), ...R);
          },
          hasListener(P, T) {
            return P.hasListener($.get(T));
          },
          removeListener(P, T) {
            P.removeListener($.get(T));
          }
        }), p = new s(($) => typeof $ != "function" ? $ : function(T) {
          const R = v(
            T,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          $(R);
        });
        let y = !1;
        const x = new s(($) => typeof $ != "function" ? $ : function(T, R, N) {
          let D = !1, z, F = new Promise((I) => {
            z = function(O) {
              y || (console.warn(o, new Error().stack), y = !0), D = !0, I(O);
            };
          }), _;
          try {
            _ = $(T, R, z);
          } catch (I) {
            _ = Promise.reject(I);
          }
          const V = _ !== !0 && u(_);
          if (_ !== !0 && !V && !D)
            return !1;
          const M = (I) => {
            I.then((O) => {
              N(O);
            }, (O) => {
              let k;
              O && (O instanceof Error || typeof O.message == "string") ? k = O.message : k = "An unexpected error occurred", N({
                __mozWebExtensionPolyfillReject__: !0,
                message: k
              });
            }).catch((O) => {
              console.error("Failed to send onMessage rejected reply", O);
            });
          };
          return M(V ? _ : F), !0;
        }), b = ({
          reject: $,
          resolve: P
        }, T) => {
          l.runtime.lastError ? l.runtime.lastError.message === r ? P() : $(new Error(l.runtime.lastError.message)) : T && T.__mozWebExtensionPolyfillReject__ ? $(new Error(T.message)) : P(T);
        }, A = ($, P, T, ...R) => {
          if (R.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${R.length}`);
          if (R.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${R.length}`);
          return new Promise((N, D) => {
            const z = b.bind(null, {
              resolve: N,
              reject: D
            });
            R.push(z), T.sendMessage(...R);
          });
        }, S = {
          devtools: {
            network: {
              onRequestFinished: w(p)
            }
          },
          runtime: {
            onMessage: w(x),
            onMessageExternal: w(x),
            sendMessage: A.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: A.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        }, E = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        return a.privacy = {
          network: {
            "*": E
          },
          services: {
            "*": E
          },
          websites: {
            "*": E
          }
        }, v(l, S, a);
      };
      if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
        throw new Error("This script should only be loaded in a browser extension.");
      n.exports = i(chrome);
    } else
      n.exports = browser;
  });
})(ux);
const ot = ux.exports;
let cx = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class lu extends Error {
  constructor(t) {
    super(lu._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, lu);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const W2 = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], Dd = Symbol(".toJSON called"), q2 = (e) => {
  e[Dd] = !0;
  const t = e.toJSON();
  return delete e[Dd], t;
}, Fh = ({
  from: e,
  seen: t,
  to_: n,
  forceEnumerable: r,
  maxDepth: o,
  depth: i
}) => {
  const l = n || (Array.isArray(e) ? [] : {});
  if (t.push(e), i >= o)
    return l;
  if (typeof e.toJSON == "function" && e[Dd] !== !0)
    return q2(e);
  for (const [a, s] of Object.entries(e)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(s)) {
      l[a] = "[object Buffer]";
      continue;
    }
    if (typeof s != "function") {
      if (!s || typeof s != "object") {
        l[a] = s;
        continue;
      }
      if (!t.includes(e[a])) {
        i++, l[a] = Fh({
          from: e[a],
          seen: t.slice(),
          forceEnumerable: r,
          maxDepth: o,
          depth: i
        });
        continue;
      }
      l[a] = "[Circular]";
    }
  }
  for (const { property: a, enumerable: s } of W2)
    typeof e[a] == "string" && Object.defineProperty(l, a, {
      value: e[a],
      enumerable: r ? !0 : s,
      configurable: !0,
      writable: !0
    });
  return l;
}, Q2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Fh({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, G2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return Fh({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new lu(e);
};
var K2 = {
  serializeError: Q2,
  deserializeError: G2
}, lc = { exports: {} };
const Y2 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), fx = (e = 7, t = !1) => Array.from({ length: e }, Y2(t ? 16 : 36)).join("");
lc.exports = fx;
lc.exports.default = fx;
var X2 = Object.defineProperty, Z2 = Object.defineProperties, J2 = Object.getOwnPropertyDescriptors, qg = Object.getOwnPropertySymbols, e$ = Object.prototype.hasOwnProperty, t$ = Object.prototype.propertyIsEnumerable, Qg = (e, t, n) => t in e ? X2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dx = (e, t) => {
  for (var n in t || (t = {}))
    e$.call(t, n) && Qg(e, n, t[n]);
  if (qg)
    for (var n of qg(t))
      t$.call(t, n) && Qg(e, n, t[n]);
  return e;
}, px = (e, t) => Z2(e, J2(t)), n$ = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, hx = (e) => {
  const [, t, n] = e.match(n$) || [];
  return {
    context: t,
    tabId: +n
  };
}, cf = (e) => ot[e], Me = cf("devtools") ? "devtools" : cf("tabs") ? "background" : cf("extension") ? "content-script" : typeof document < "u" ? "window" : null, Gg = lc.exports(), Ld = /* @__PURE__ */ new Map(), mx = /* @__PURE__ */ new Map(), Fd = /* @__PURE__ */ new Set(), zd = /* @__PURE__ */ new Map(), Hr = null, au, gx;
r$();
function r$() {
  if (Me === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Me === "window" || Me === "content-script") && window.addEventListener("message", i$), Me === "content-script" && top === window && (Hr = ot.runtime.connect(), Hr.onMessage.addListener((e) => {
    ei(e);
  })), Me === "devtools") {
    const { tabId: e } = ot.devtools.inspectedWindow, t = `devtools@${e}`;
    Hr = ot.runtime.connect(void 0, { name: t }), Hr.onMessage.addListener((n) => {
      ei(n);
    }), Hr.onDisconnect.addListener(() => {
      Hr = null;
    });
  }
  Me === "background" && ot.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = hx(t);
    !n || (zd.set(t, e), Fd.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), Fd.delete(r));
    }), e.onDisconnect.addListener(() => {
      zd.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, ei(r));
    }));
  });
}
function ei(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Gg) && (e.hops.push(Gg), !(Me === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !gx))) {
    if (!n)
      return o$(e);
    if (n.context) {
      if (Me === "window")
        return Bd(window, e);
      if (Me === "content-script" && n.context === "window")
        return e.destination = null, Bd(window, e);
      if (Me === "devtools" || Me === "content-script")
        return n.context === "background" && (e.destination = null), Hr.postMessage(e);
      if (Me === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, a = zd.get(l);
        a ? a.postMessage(e) : Fd.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function o$(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Ld.get(t);
    if (l) {
      const { err: a, data: s } = e;
      if (a) {
        const u = a, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(s);
      Ld.delete(t);
    }
  }, i = async () => {
    let l, a, s = !1;
    try {
      const u = mx.get(n);
      if (typeof u == "function")
        l = await u({
          sender: e.origin,
          id: n,
          data: e.data,
          timestamp: e.timestamp
        });
      else
        throw s = !0, new Error(`[webext-bridge] No handler registered in '${Me}' to accept messages with id '${n}'`);
    } catch (u) {
      a = u;
    } finally {
      if (a && (e.err = K2.serializeError(a)), ei(px(dx({}, e), {
        messageType: "reply",
        data: l,
        origin: { context: Me, tabId: null },
        destination: e.origin,
        hops: []
      })), a && !s)
        throw l;
    }
  };
  switch (r) {
    case "reply":
      return o();
    case "message":
      return i();
  }
}
async function i$({ data: e, ports: t }) {
  if (!(Me === "content-script" && !gx)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === au && e.context !== Me)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === au && e.context !== Me) {
      const { payload: n } = e;
      Me === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), ei(n);
    }
  }
}
function Bd(e, t) {
  l$();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, Bd(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: au,
      context: Me,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: au,
    context: Me
  }, "*", [n.port2]);
}
function l$() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function ac(e, t) {
  mx.set(e, t);
}
async function wl(e, t, n = "background") {
  const r = typeof n == "string" ? hx(n) : n, o = "Bridge#sendMessage ->";
  if (!r.context)
    throw new TypeError(`${o} Destination must be any one of known destinations`);
  if (Me === "background") {
    const { context: i, tabId: l } = r;
    if (i !== "background" && !l)
      throw new TypeError(`${o} When sending messages from background page, use @tabId syntax to target specific tab`);
  }
  return new Promise((i, l) => {
    const a = {
      messageID: e,
      data: t,
      destination: r,
      messageType: "message",
      transactionId: lc.exports(),
      origin: { context: Me, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Ld.set(a.transactionId, { resolve: i, reject: l }), ei(a);
  });
}
var zo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = cx(), this.isClosed = !1, zo.initDone || (ac("__crx_bridge_stream_transfer__", (t) => {
      const { streamId: n, streamTransfer: r, action: o } = t.data, i = zo.openStreams.get(n);
      i && !i.isClosed && (o === "transfer" && i.emitter.emit("message", r), o === "close" && (zo.openStreams.delete(n), i.handleStreamClose()));
    }), zo.initDone = !0), zo.openStreams.set(e.streamId, this);
  }
  get info() {
    return this.internalInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    wl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), wl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: null,
      action: "close"
    }, this.internalInfo.endpoint);
  }
  onMessage(e) {
    return this.getDisposable("message", e);
  }
  onClose(e) {
    return this.getDisposable("closed", e);
  }
  getDisposable(e, t) {
    const n = this.emitter.on(e, t);
    return Object.assign(n, {
      dispose: n,
      close: n
    });
  }
}, zh = zo;
zh.initDone = !1;
zh.openStreams = /* @__PURE__ */ new Map();
var a$ = /* @__PURE__ */ new Map(), s$ = cx();
ac("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const a = () => {
    const s = a$.get(o);
    typeof s == "function" ? (s(new zh(px(dx({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = s$.on("did-change-stream-callbacks", a));
  };
  a();
}));
var m = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa = Symbol.for("react.element"), u$ = Symbol.for("react.portal"), c$ = Symbol.for("react.fragment"), f$ = Symbol.for("react.strict_mode"), d$ = Symbol.for("react.profiler"), p$ = Symbol.for("react.provider"), h$ = Symbol.for("react.context"), m$ = Symbol.for("react.forward_ref"), g$ = Symbol.for("react.suspense"), v$ = Symbol.for("react.memo"), y$ = Symbol.for("react.lazy"), Kg = Symbol.iterator;
function x$(e) {
  return e === null || typeof e != "object" ? null : (e = Kg && e[Kg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, yx = Object.assign, xx = {};
function Ti(e, t, n) {
  this.props = e, this.context = t, this.refs = xx, this.updater = n || vx;
}
Ti.prototype.isReactComponent = {};
Ti.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ti.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wx() {
}
wx.prototype = Ti.prototype;
function Bh(e, t, n) {
  this.props = e, this.context = t, this.refs = xx, this.updater = n || vx;
}
var jh = Bh.prototype = new wx();
jh.constructor = Bh;
yx(jh, Ti.prototype);
jh.isPureReactComponent = !0;
var Yg = Array.isArray, bx = Object.prototype.hasOwnProperty, Vh = { current: null }, Sx = { key: !0, ref: !0, __self: !0, __source: !0 };
function kx(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      bx.call(t, r) && !Sx.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
    o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++)
      s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
      o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Pa, type: e, key: i, ref: l, props: o, _owner: Vh.current };
}
function w$(e, t) {
  return { $$typeof: Pa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Hh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pa;
}
function b$(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Xg = /\/+/g;
function ff(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? b$("" + e.key) : t.toString(36);
}
function Ms(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Pa:
          case u$:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + ff(l, 0) : r, Yg(o) ? (n = "", e != null && (n = e.replace(Xg, "$&/") + "/"), Ms(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Hh(o) && (o = w$(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Xg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Yg(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + ff(i, a);
      l += Ms(i, t, n, s, o);
    }
  else if (s = x$(e), typeof s == "function")
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, s = r + ff(i, a++), l += Ms(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ka(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ms(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function S$(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ht = { current: null }, Ds = { transition: null }, k$ = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Ds, ReactCurrentOwner: Vh };
ce.Children = { map: Ka, forEach: function(e, t, n) {
  Ka(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ka(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ka(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Hh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ce.Component = Ti;
ce.Fragment = c$;
ce.Profiler = d$;
ce.PureComponent = Bh;
ce.StrictMode = f$;
ce.Suspense = g$;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k$;
ce.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = yx({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Vh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (s in t)
      bx.call(t, s) && !Sx.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++)
      a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Pa, type: e.type, key: o, ref: i, props: r, _owner: l };
};
ce.createContext = function(e) {
  return e = { $$typeof: h$, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: p$, _context: e }, e.Consumer = e;
};
ce.createElement = kx;
ce.createFactory = function(e) {
  var t = kx.bind(null, e);
  return t.type = e, t;
};
ce.createRef = function() {
  return { current: null };
};
ce.forwardRef = function(e) {
  return { $$typeof: m$, render: e };
};
ce.isValidElement = Hh;
ce.lazy = function(e) {
  return { $$typeof: y$, _payload: { _status: -1, _result: e }, _init: S$ };
};
ce.memo = function(e, t) {
  return { $$typeof: v$, type: e, compare: t === void 0 ? null : t };
};
ce.startTransition = function(e) {
  var t = Ds.transition;
  Ds.transition = {};
  try {
    e();
  } finally {
    Ds.transition = t;
  }
};
ce.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ce.useCallback = function(e, t) {
  return ht.current.useCallback(e, t);
};
ce.useContext = function(e) {
  return ht.current.useContext(e);
};
ce.useDebugValue = function() {
};
ce.useDeferredValue = function(e) {
  return ht.current.useDeferredValue(e);
};
ce.useEffect = function(e, t) {
  return ht.current.useEffect(e, t);
};
ce.useId = function() {
  return ht.current.useId();
};
ce.useImperativeHandle = function(e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
ce.useInsertionEffect = function(e, t) {
  return ht.current.useInsertionEffect(e, t);
};
ce.useLayoutEffect = function(e, t) {
  return ht.current.useLayoutEffect(e, t);
};
ce.useMemo = function(e, t) {
  return ht.current.useMemo(e, t);
};
ce.useReducer = function(e, t, n) {
  return ht.current.useReducer(e, t, n);
};
ce.useRef = function(e) {
  return ht.current.useRef(e);
};
ce.useState = function(e) {
  return ht.current.useState(e);
};
ce.useSyncExternalStore = function(e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
ce.useTransition = function() {
  return ht.current.useTransition();
};
ce.version = "18.2.0";
(function(e) {
  e.exports = ce;
})(m);
const je = /* @__PURE__ */ Lh(m.exports), Cx = /* @__PURE__ */ H2({
  __proto__: null,
  default: je
}, [m.exports]);
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Z.apply(this, arguments);
}
function ye(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function C$(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $x(...e) {
  return (t) => e.forEach(
    (n) => C$(n, t)
  );
}
function Ce(...e) {
  return m.exports.useCallback($x(...e), e);
}
function Ii(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = /* @__PURE__ */ m.exports.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: g, ...h } = f, v = (d == null ? void 0 : d[e][s]) || a, w = m.exports.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ m.exports.createElement(v.Provider, {
        value: w
      }, g);
    }
    function c(f, d) {
      const g = (d == null ? void 0 : d[e][s]) || a, h = m.exports.useContext(g);
      if (h)
        return h;
      if (l !== void 0)
        return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [
      u,
      c
    ];
  }
  const o = () => {
    const i = n.map((l) => /* @__PURE__ */ m.exports.createContext(l));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return m.exports.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: s
          }
        }),
        [
          a,
          s
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    $$(o, ...t)
  ];
}
function $$(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(i) {
      const l = r.reduce((a, { useScope: s, scopeName: u }) => {
        const f = s(i)[`__scope${u}`];
        return {
          ...a,
          ...f
        };
      }, {});
      return m.exports.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: l
        }),
        [
          l
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Gt = { exports: {} }, It = {}, Ex = { exports: {} }, Ax = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(M, I) {
    var O = M.length;
    M.push(I);
    e:
      for (; 0 < O; ) {
        var k = O - 1 >>> 1, C = M[k];
        if (0 < o(C, I))
          M[k] = I, M[O] = C, O = k;
        else
          break e;
      }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0)
      return null;
    var I = M[0], O = M.pop();
    if (O !== I) {
      M[0] = O;
      e:
        for (var k = 0, C = M.length, J = C >>> 1; k < J; ) {
          var ne = 2 * (k + 1) - 1, ae = M[ne], ee = ne + 1, Q = M[ee];
          if (0 > o(ae, O))
            ee < C && 0 > o(Q, ae) ? (M[k] = Q, M[ee] = O, k = ee) : (M[k] = ae, M[ne] = O, k = ne);
          else if (ee < C && 0 > o(Q, O))
            M[k] = Q, M[ee] = O, k = ee;
          else
            break e;
        }
    }
    return I;
  }
  function o(M, I) {
    var O = M.sortIndex - I.sortIndex;
    return O !== 0 ? O : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, a = l.now();
    e.unstable_now = function() {
      return l.now() - a;
    };
  }
  var s = [], u = [], c = 1, f = null, d = 3, g = !1, h = !1, v = !1, w = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(M) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null)
        r(u);
      else if (I.startTime <= M)
        r(u), I.sortIndex = I.expirationTime, t(s, I);
      else
        break;
      I = n(u);
    }
  }
  function b(M) {
    if (v = !1, x(M), !h)
      if (n(s) !== null)
        h = !0, _(A);
      else {
        var I = n(u);
        I !== null && V(b, I.startTime - M);
      }
  }
  function A(M, I) {
    h = !1, v && (v = !1, p($), $ = -1), g = !0;
    var O = d;
    try {
      for (x(I), f = n(s); f !== null && (!(f.expirationTime > I) || M && !R()); ) {
        var k = f.callback;
        if (typeof k == "function") {
          f.callback = null, d = f.priorityLevel;
          var C = k(f.expirationTime <= I);
          I = e.unstable_now(), typeof C == "function" ? f.callback = C : f === n(s) && r(s), x(I);
        } else
          r(s);
        f = n(s);
      }
      if (f !== null)
        var J = !0;
      else {
        var ne = n(u);
        ne !== null && V(b, ne.startTime - I), J = !1;
      }
      return J;
    } finally {
      f = null, d = O, g = !1;
    }
  }
  var S = !1, E = null, $ = -1, P = 5, T = -1;
  function R() {
    return !(e.unstable_now() - T < P);
  }
  function N() {
    if (E !== null) {
      var M = e.unstable_now();
      T = M;
      var I = !0;
      try {
        I = E(!0, M);
      } finally {
        I ? D() : (S = !1, E = null);
      }
    } else
      S = !1;
  }
  var D;
  if (typeof y == "function")
    D = function() {
      y(N);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), F = z.port2;
    z.port1.onmessage = N, D = function() {
      F.postMessage(null);
    };
  } else
    D = function() {
      w(N, 0);
    };
  function _(M) {
    E = M, S || (S = !0, D());
  }
  function V(M, I) {
    $ = w(function() {
      M(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    h || g || (h = !0, _(A));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(M) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = d;
    }
    var O = d;
    d = I;
    try {
      return M();
    } finally {
      d = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, I) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var O = d;
    d = M;
    try {
      return I();
    } finally {
      d = O;
    }
  }, e.unstable_scheduleCallback = function(M, I, O) {
    var k = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? k + O : k) : O = k, M) {
      case 1:
        var C = -1;
        break;
      case 2:
        C = 250;
        break;
      case 5:
        C = 1073741823;
        break;
      case 4:
        C = 1e4;
        break;
      default:
        C = 5e3;
    }
    return C = O + C, M = { id: c++, callback: I, priorityLevel: M, startTime: O, expirationTime: C, sortIndex: -1 }, O > k ? (M.sortIndex = O, t(u, M), n(s) === null && M === n(u) && (v ? (p($), $ = -1) : v = !0, V(b, O - k))) : (M.sortIndex = C, t(s, M), h || g || (h = !0, _(A))), M;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(M) {
    var I = d;
    return function() {
      var O = d;
      d = I;
      try {
        return M.apply(this, arguments);
      } finally {
        d = O;
      }
    };
  };
})(Ax);
(function(e) {
  e.exports = Ax;
})(Ex);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Px = m.exports, Tt = Ex.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _x = /* @__PURE__ */ new Set(), Vl = {};
function yo(e, t) {
  gi(e, t), gi(e + "Capture", t);
}
function gi(e, t) {
  for (Vl[e] = t, e = 0; e < t.length; e++)
    _x.add(t[e]);
}
var Vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), jd = Object.prototype.hasOwnProperty, E$ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zg = {}, Jg = {};
function A$(e) {
  return jd.call(Jg, e) ? !0 : jd.call(Zg, e) ? !1 : E$.test(e) ? Jg[e] = !0 : (Zg[e] = !0, !1);
}
function P$(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _$(e, t, n, r) {
  if (t === null || typeof t > "u" || P$(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Je[e] = new mt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Je[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Je[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Je[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Je[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Je[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Je[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Je[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Je[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uh = /[\-:]([a-z])/g;
function Wh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Uh,
    Wh
  );
  Je[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Uh, Wh);
  Je[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Uh, Wh);
  Je[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qh(e, t, n, r) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_$(t, n, o, r) && (n = null), r || o === null ? A$(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ya = Symbol.for("react.element"), jo = Symbol.for("react.portal"), Vo = Symbol.for("react.fragment"), Qh = Symbol.for("react.strict_mode"), Vd = Symbol.for("react.profiler"), Rx = Symbol.for("react.provider"), Tx = Symbol.for("react.context"), Gh = Symbol.for("react.forward_ref"), Hd = Symbol.for("react.suspense"), Ud = Symbol.for("react.suspense_list"), Kh = Symbol.for("react.memo"), cr = Symbol.for("react.lazy"), Ix = Symbol.for("react.offscreen"), e0 = Symbol.iterator;
function Qi(e) {
  return e === null || typeof e != "object" ? null : (e = e0 && e[e0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oe = Object.assign, df;
function pl(e) {
  if (df === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      df = t && t[1] || "";
    }
  return `
` + df + e;
}
var pf = !1;
function hf(e, t) {
  if (!e || pf)
    return "";
  pf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, a = i.length - 1; 1 <= l && 0 <= a && o[l] !== i[a]; )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if (l--, a--, 0 > a || o[l] !== i[a]) {
                var s = `
` + o[l].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    pf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? pl(e) : "";
}
function R$(e) {
  switch (e.tag) {
    case 5:
      return pl(e.type);
    case 16:
      return pl("Lazy");
    case 13:
      return pl("Suspense");
    case 19:
      return pl("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = hf(e.type, !1), e;
    case 11:
      return e = hf(e.type.render, !1), e;
    case 1:
      return e = hf(e.type, !0), e;
    default:
      return "";
  }
}
function Wd(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Vo:
      return "Fragment";
    case jo:
      return "Portal";
    case Vd:
      return "Profiler";
    case Qh:
      return "StrictMode";
    case Hd:
      return "Suspense";
    case Ud:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tx:
        return (e.displayName || "Context") + ".Consumer";
      case Rx:
        return (e._context.displayName || "Context") + ".Provider";
      case Gh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Kh:
        return t = e.displayName || null, t !== null ? t : Wd(e.type) || "Memo";
      case cr:
        t = e._payload, e = e._init;
        try {
          return Wd(e(t));
        } catch {
        }
    }
  return null;
}
function T$(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Wd(t);
    case 8:
      return t === Qh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Tr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ox(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function I$(e) {
  var t = Ox(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Xa(e) {
  e._valueTracker || (e._valueTracker = I$(e));
}
function Nx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ox(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function su(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qd(e, t) {
  var n = t.checked;
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function t0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Mx(e, t) {
  t = t.checked, t != null && qh(e, "checked", t, !1);
}
function Qd(e, t) {
  Mx(e, t);
  var n = Tr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Gd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gd(e, t.type, Tr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function n0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Gd(e, t, n) {
  (t !== "number" || su(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hl = Array.isArray;
function ti(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Kd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function r0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(j(92));
      if (hl(n)) {
        if (1 < n.length)
          throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Tr(n) };
}
function Dx(e, t) {
  var n = Tr(t.value), r = Tr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function o0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Lx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Za, Fx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Za = Za || document.createElement("div"), Za.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Za.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Hl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bl = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, O$ = ["Webkit", "ms", "Moz", "O"];
Object.keys(bl).forEach(function(e) {
  O$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), bl[t] = bl[e];
  });
});
function zx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || bl.hasOwnProperty(e) && bl[e] ? ("" + t).trim() : t + "px";
}
function Bx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = zx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var N$ = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xd(e, t) {
  if (t) {
    if (N$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(j(62));
  }
}
function Zd(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Jd = null;
function Yh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ep = null, ni = null, ri = null;
function i0(e) {
  if (e = Ta(e)) {
    if (typeof ep != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = dc(t), ep(e.stateNode, e.type, t));
  }
}
function jx(e) {
  ni ? ri ? ri.push(e) : ri = [e] : ni = e;
}
function Vx() {
  if (ni) {
    var e = ni, t = ri;
    if (ri = ni = null, i0(e), t)
      for (e = 0; e < t.length; e++)
        i0(t[e]);
  }
}
function Hx(e, t) {
  return e(t);
}
function Ux() {
}
var mf = !1;
function Wx(e, t, n) {
  if (mf)
    return e(t, n);
  mf = !0;
  try {
    return Hx(e, t, n);
  } finally {
    mf = !1, (ni !== null || ri !== null) && (Ux(), Vx());
  }
}
function Ul(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = dc(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(j(231, t, typeof n));
  return n;
}
var tp = !1;
if (Vn)
  try {
    var Gi = {};
    Object.defineProperty(Gi, "passive", { get: function() {
      tp = !0;
    } }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
  } catch {
    tp = !1;
  }
function M$(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Sl = !1, uu = null, cu = !1, np = null, D$ = { onError: function(e) {
  Sl = !0, uu = e;
} };
function L$(e, t, n, r, o, i, l, a, s) {
  Sl = !1, uu = null, M$.apply(D$, arguments);
}
function F$(e, t, n, r, o, i, l, a, s) {
  if (L$.apply(this, arguments), Sl) {
    if (Sl) {
      var u = uu;
      Sl = !1, uu = null;
    } else
      throw Error(j(198));
    cu || (cu = !0, np = u);
  }
}
function xo(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function l0(e) {
  if (xo(e) !== e)
    throw Error(j(188));
}
function z$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = xo(e), t === null)
      throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return l0(o), e;
        if (i === r)
          return l0(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          l = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            l = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!l)
          throw Error(j(189));
      }
    }
    if (n.alternate !== r)
      throw Error(j(190));
  }
  if (n.tag !== 3)
    throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Qx(e) {
  return e = z$(e), e !== null ? Gx(e) : null;
}
function Gx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Gx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Kx = Tt.unstable_scheduleCallback, a0 = Tt.unstable_cancelCallback, B$ = Tt.unstable_shouldYield, j$ = Tt.unstable_requestPaint, Fe = Tt.unstable_now, V$ = Tt.unstable_getCurrentPriorityLevel, Xh = Tt.unstable_ImmediatePriority, Yx = Tt.unstable_UserBlockingPriority, fu = Tt.unstable_NormalPriority, H$ = Tt.unstable_LowPriority, Xx = Tt.unstable_IdlePriority, sc = null, kn = null;
function U$(e) {
  if (kn && typeof kn.onCommitFiberRoot == "function")
    try {
      kn.onCommitFiberRoot(sc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var cn = Math.clz32 ? Math.clz32 : Q$, W$ = Math.log, q$ = Math.LN2;
function Q$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (W$(e) / q$ | 0) | 0;
}
var Ja = 64, es = 4194304;
function ml(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function du(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? r = ml(a) : (i &= l, i !== 0 && (r = ml(i)));
  } else
    l = n & ~o, l !== 0 ? r = ml(l) : i !== 0 && (r = ml(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - cn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function G$(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function K$(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - cn(i), a = 1 << l, s = o[l];
    s === -1 ? ((a & n) === 0 || (a & r) !== 0) && (o[l] = G$(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function rp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Zx() {
  var e = Ja;
  return Ja <<= 1, (Ja & 4194240) === 0 && (Ja = 64), e;
}
function gf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function _a(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - cn(t), e[t] = n;
}
function Y$(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - cn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Zh(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - cn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var we = 0;
function Jx(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var ew, Jh, tw, nw, rw, op = !1, ts = [], br = null, Sr = null, kr = null, Wl = /* @__PURE__ */ new Map(), ql = /* @__PURE__ */ new Map(), dr = [], X$ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function s0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      br = null;
      break;
    case "dragenter":
    case "dragleave":
      Sr = null;
      break;
    case "mouseover":
    case "mouseout":
      kr = null;
      break;
    case "pointerover":
    case "pointerout":
      Wl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ql.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ta(t), t !== null && Jh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Z$(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return br = Ki(br, e, t, n, r, o), !0;
    case "dragenter":
      return Sr = Ki(Sr, e, t, n, r, o), !0;
    case "mouseover":
      return kr = Ki(kr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Wl.set(i, Ki(Wl.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ql.set(i, Ki(ql.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ow(e) {
  var t = Jr(e.target);
  if (t !== null) {
    var n = xo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = qx(n), t !== null) {
          e.blockedOn = t, rw(e.priority, function() {
            tw(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ls(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ip(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Jd = r, n.target.dispatchEvent(r), Jd = null;
    } else
      return t = Ta(n), t !== null && Jh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function u0(e, t, n) {
  Ls(e) && n.delete(t);
}
function J$() {
  op = !1, br !== null && Ls(br) && (br = null), Sr !== null && Ls(Sr) && (Sr = null), kr !== null && Ls(kr) && (kr = null), Wl.forEach(u0), ql.forEach(u0);
}
function Yi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, op || (op = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, J$)));
}
function Ql(e) {
  function t(o) {
    return Yi(o, e);
  }
  if (0 < ts.length) {
    Yi(ts[0], e);
    for (var n = 1; n < ts.length; n++) {
      var r = ts[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (br !== null && Yi(br, e), Sr !== null && Yi(Sr, e), kr !== null && Yi(kr, e), Wl.forEach(t), ql.forEach(t), n = 0; n < dr.length; n++)
    r = dr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dr.length && (n = dr[0], n.blockedOn === null); )
    ow(n), n.blockedOn === null && dr.shift();
}
var oi = Kn.ReactCurrentBatchConfig, pu = !0;
function eE(e, t, n, r) {
  var o = we, i = oi.transition;
  oi.transition = null;
  try {
    we = 1, em(e, t, n, r);
  } finally {
    we = o, oi.transition = i;
  }
}
function tE(e, t, n, r) {
  var o = we, i = oi.transition;
  oi.transition = null;
  try {
    we = 4, em(e, t, n, r);
  } finally {
    we = o, oi.transition = i;
  }
}
function em(e, t, n, r) {
  if (pu) {
    var o = ip(e, t, n, r);
    if (o === null)
      Ef(e, t, r, hu, n), s0(e, r);
    else if (Z$(o, e, t, n, r))
      r.stopPropagation();
    else if (s0(e, r), t & 4 && -1 < X$.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ta(o);
        if (i !== null && ew(i), i = ip(e, t, n, r), i === null && Ef(e, t, r, hu, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Ef(e, t, r, null, n);
  }
}
var hu = null;
function ip(e, t, n, r) {
  if (hu = null, e = Yh(r), e = Jr(e), e !== null)
    if (t = xo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = qx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return hu = e, null;
}
function iw(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (V$()) {
        case Xh:
          return 1;
        case Yx:
          return 4;
        case fu:
        case H$:
          return 16;
        case Xx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hr = null, tm = null, Fs = null;
function lw() {
  if (Fs)
    return Fs;
  var e, t = tm, n = t.length, r, o = "value" in hr ? hr.value : hr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Fs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function zs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ns() {
  return !0;
}
function c0() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ns : c0, this.isPropagationStopped = c0, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ns);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ns);
  }, persist: function() {
  }, isPersistent: ns }), t;
}
var Oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, nm = Ot(Oi), Ra = Oe({}, Oi, { view: 0, detail: 0 }), nE = Ot(Ra), vf, yf, Xi, uc = Oe({}, Ra, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Xi && (Xi && e.type === "mousemove" ? (vf = e.screenX - Xi.screenX, yf = e.screenY - Xi.screenY) : yf = vf = 0, Xi = e), vf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : yf;
} }), f0 = Ot(uc), rE = Oe({}, uc, { dataTransfer: 0 }), oE = Ot(rE), iE = Oe({}, Ra, { relatedTarget: 0 }), xf = Ot(iE), lE = Oe({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), aE = Ot(lE), sE = Oe({}, Oi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), uE = Ot(sE), cE = Oe({}, Oi, { data: 0 }), d0 = Ot(cE), fE = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, dE = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, pE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pE[e]) ? !!t[e] : !1;
}
function rm() {
  return hE;
}
var mE = Oe({}, Ra, { key: function(e) {
  if (e.key) {
    var t = fE[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = zs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rm, charCode: function(e) {
  return e.type === "keypress" ? zs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), gE = Ot(mE), vE = Oe({}, uc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), p0 = Ot(vE), yE = Oe({}, Ra, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rm }), xE = Ot(yE), wE = Oe({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bE = Ot(wE), SE = Oe({}, uc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), kE = Ot(SE), CE = [9, 13, 27, 32], om = Vn && "CompositionEvent" in window, kl = null;
Vn && "documentMode" in document && (kl = document.documentMode);
var $E = Vn && "TextEvent" in window && !kl, aw = Vn && (!om || kl && 8 < kl && 11 >= kl), h0 = String.fromCharCode(32), m0 = !1;
function sw(e, t) {
  switch (e) {
    case "keyup":
      return CE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function uw(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ho = !1;
function EE(e, t) {
  switch (e) {
    case "compositionend":
      return uw(t);
    case "keypress":
      return t.which !== 32 ? null : (m0 = !0, h0);
    case "textInput":
      return e = t.data, e === h0 && m0 ? null : e;
    default:
      return null;
  }
}
function AE(e, t) {
  if (Ho)
    return e === "compositionend" || !om && sw(e, t) ? (e = lw(), Fs = tm = hr = null, Ho = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return aw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var PE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function g0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!PE[e.type] : t === "textarea";
}
function cw(e, t, n, r) {
  jx(r), t = mu(t, "onChange"), 0 < t.length && (n = new nm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Cl = null, Gl = null;
function _E(e) {
  bw(e, 0);
}
function cc(e) {
  var t = qo(e);
  if (Nx(t))
    return e;
}
function RE(e, t) {
  if (e === "change")
    return t;
}
var fw = !1;
if (Vn) {
  var wf;
  if (Vn) {
    var bf = "oninput" in document;
    if (!bf) {
      var v0 = document.createElement("div");
      v0.setAttribute("oninput", "return;"), bf = typeof v0.oninput == "function";
    }
    wf = bf;
  } else
    wf = !1;
  fw = wf && (!document.documentMode || 9 < document.documentMode);
}
function y0() {
  Cl && (Cl.detachEvent("onpropertychange", dw), Gl = Cl = null);
}
function dw(e) {
  if (e.propertyName === "value" && cc(Gl)) {
    var t = [];
    cw(t, Gl, e, Yh(e)), Wx(_E, t);
  }
}
function TE(e, t, n) {
  e === "focusin" ? (y0(), Cl = t, Gl = n, Cl.attachEvent("onpropertychange", dw)) : e === "focusout" && y0();
}
function IE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cc(Gl);
}
function OE(e, t) {
  if (e === "click")
    return cc(t);
}
function NE(e, t) {
  if (e === "input" || e === "change")
    return cc(t);
}
function ME(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pn = typeof Object.is == "function" ? Object.is : ME;
function Kl(e, t) {
  if (pn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!jd.call(t, o) || !pn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function x0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function w0(e, t) {
  var n = x0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = x0(n);
  }
}
function pw(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pw(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function hw() {
  for (var e = window, t = su(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = su(e.document);
  }
  return t;
}
function im(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function DE(e) {
  var t = hw(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pw(n.ownerDocument.documentElement, n)) {
    if (r !== null && im(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = w0(n, i);
        var l = w0(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var LE = Vn && "documentMode" in document && 11 >= document.documentMode, Uo = null, lp = null, $l = null, ap = !1;
function b0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ap || Uo == null || Uo !== su(r) || (r = Uo, "selectionStart" in r && im(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $l && Kl($l, r) || ($l = r, r = mu(lp, "onSelect"), 0 < r.length && (t = new nm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Uo)));
}
function rs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wo = { animationend: rs("Animation", "AnimationEnd"), animationiteration: rs("Animation", "AnimationIteration"), animationstart: rs("Animation", "AnimationStart"), transitionend: rs("Transition", "TransitionEnd") }, Sf = {}, mw = {};
Vn && (mw = document.createElement("div").style, "AnimationEvent" in window || (delete Wo.animationend.animation, delete Wo.animationiteration.animation, delete Wo.animationstart.animation), "TransitionEvent" in window || delete Wo.transitionend.transition);
function fc(e) {
  if (Sf[e])
    return Sf[e];
  if (!Wo[e])
    return e;
  var t = Wo[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in mw)
      return Sf[e] = t[n];
  return e;
}
var gw = fc("animationend"), vw = fc("animationiteration"), yw = fc("animationstart"), xw = fc("transitionend"), ww = /* @__PURE__ */ new Map(), S0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nr(e, t) {
  ww.set(e, t), yo(t, [e]);
}
for (var kf = 0; kf < S0.length; kf++) {
  var Cf = S0[kf], FE = Cf.toLowerCase(), zE = Cf[0].toUpperCase() + Cf.slice(1);
  Nr(FE, "on" + zE);
}
Nr(gw, "onAnimationEnd");
Nr(vw, "onAnimationIteration");
Nr(yw, "onAnimationStart");
Nr("dblclick", "onDoubleClick");
Nr("focusin", "onFocus");
Nr("focusout", "onBlur");
Nr(xw, "onTransitionEnd");
gi("onMouseEnter", ["mouseout", "mouseover"]);
gi("onMouseLeave", ["mouseout", "mouseover"]);
gi("onPointerEnter", ["pointerout", "pointerover"]);
gi("onPointerLeave", ["pointerout", "pointerover"]);
yo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), BE = new Set("cancel close invalid load scroll toggle".split(" ").concat(gl));
function k0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, F$(r, t, void 0, e), e.currentTarget = null;
}
function bw(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l], s = a.instance, u = a.currentTarget;
          if (a = a.listener, s !== i && o.isPropagationStopped())
            break e;
          k0(o, a, u), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (a = r[l], s = a.instance, u = a.currentTarget, a = a.listener, s !== i && o.isPropagationStopped())
            break e;
          k0(o, a, u), i = s;
        }
    }
  }
  if (cu)
    throw e = np, cu = !1, np = null, e;
}
function Ee(e, t) {
  var n = t[dp];
  n === void 0 && (n = t[dp] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sw(t, e, 2, !1), n.add(r));
}
function $f(e, t, n) {
  var r = 0;
  t && (r |= 4), Sw(n, e, r, t);
}
var os = "_reactListening" + Math.random().toString(36).slice(2);
function Yl(e) {
  if (!e[os]) {
    e[os] = !0, _x.forEach(function(n) {
      n !== "selectionchange" && (BE.has(n) || $f(n, !1, e), $f(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[os] || (t[os] = !0, $f("selectionchange", !1, t));
  }
}
function Sw(e, t, n, r) {
  switch (iw(t)) {
    case 1:
      var o = eE;
      break;
    case 4:
      o = tE;
      break;
    default:
      o = em;
  }
  n = o.bind(null, t, n, e), o = void 0, !tp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ef(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var a = r.stateNode.containerInfo;
          if (a === o || a.nodeType === 8 && a.parentNode === o)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var s = l.tag;
              if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o))
                return;
              l = l.return;
            }
          for (; a !== null; ) {
            if (l = Jr(a), l === null)
              return;
            if (s = l.tag, s === 5 || s === 6) {
              r = i = l;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
  Wx(function() {
    var u = i, c = Yh(n), f = [];
    e: {
      var d = ww.get(e);
      if (d !== void 0) {
        var g = nm, h = e;
        switch (e) {
          case "keypress":
            if (zs(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = gE;
            break;
          case "focusin":
            h = "focus", g = xf;
            break;
          case "focusout":
            h = "blur", g = xf;
            break;
          case "beforeblur":
          case "afterblur":
            g = xf;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = f0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = oE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = xE;
            break;
          case gw:
          case vw:
          case yw:
            g = aE;
            break;
          case xw:
            g = bE;
            break;
          case "scroll":
            g = nE;
            break;
          case "wheel":
            g = kE;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = uE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = p0;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Ul(y, p), b != null && v.push(Xl(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Jd && (h = n.relatedTarget || n.fromElement) && (Jr(h) || h[Hn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? Jr(h) : null, h !== null && (w = xo(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (v = f0, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = p0, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : qo(g), x = h == null ? d : qo(h), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, Jr(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && h)
            t: {
              for (v = g, p = h, y = 0, x = v; x; x = Ao(x))
                y++;
              for (x = 0, b = p; b; b = Ao(b))
                x++;
              for (; 0 < y - x; )
                v = Ao(v), y--;
              for (; 0 < x - y; )
                p = Ao(p), x--;
              for (; y--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = Ao(v), p = Ao(p);
              }
              v = null;
            }
          else
            v = null;
          g !== null && C0(f, d, g, v, !1), h !== null && w !== null && C0(f, w, h, v, !0);
        }
      }
      e: {
        if (d = u ? qo(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = RE;
        else if (g0(d))
          if (fw)
            A = NE;
          else {
            A = IE;
            var S = TE;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = OE);
        if (A && (A = A(e, u))) {
          cw(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Gd(d, "number", d.value);
      }
      switch (S = u ? qo(u) : window, e) {
        case "focusin":
          (g0(S) || S.contentEditable === "true") && (Uo = S, lp = u, $l = null);
          break;
        case "focusout":
          $l = lp = Uo = null;
          break;
        case "mousedown":
          ap = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ap = !1, b0(f, n, c);
          break;
        case "selectionchange":
          if (LE)
            break;
        case "keydown":
        case "keyup":
          b0(f, n, c);
      }
      var E;
      if (om)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Ho ? sw(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (aw && n.locale !== "ko" && (Ho || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Ho && (E = lw()) : (hr = c, tm = "value" in hr ? hr.value : hr.textContent, Ho = !0)), S = mu(u, $), 0 < S.length && ($ = new d0($, e, null, n, c), f.push({ event: $, listeners: S }), E ? $.data = E : (E = uw(n), E !== null && ($.data = E)))), (E = $E ? EE(e, n) : AE(e, n)) && (u = mu(u, "onBeforeInput"), 0 < u.length && (c = new d0("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    bw(f, t);
  });
}
function Xl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function mu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ul(e, n), i != null && r.unshift(Xl(e, i, o)), i = Ul(e, t), i != null && r.push(Xl(e, i, o))), e = e.return;
  }
  return r;
}
function Ao(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function C0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, u = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (s = Ul(n, i), s != null && l.unshift(Xl(n, s, a))) : o || (s = Ul(n, i), s != null && l.push(Xl(n, s, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var jE = /\r\n?/g, VE = /\u0000|\uFFFD/g;
function $0(e) {
  return (typeof e == "string" ? e : "" + e).replace(jE, `
`).replace(VE, "");
}
function is(e, t, n) {
  if (t = $0(t), $0(e) !== t && n)
    throw Error(j(425));
}
function gu() {
}
var sp = null, up = null;
function cp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fp = typeof setTimeout == "function" ? setTimeout : void 0, HE = typeof clearTimeout == "function" ? clearTimeout : void 0, E0 = typeof Promise == "function" ? Promise : void 0, UE = typeof queueMicrotask == "function" ? queueMicrotask : typeof E0 < "u" ? function(e) {
  return E0.resolve(null).then(e).catch(WE);
} : fp;
function WE(e) {
  setTimeout(function() {
    throw e;
  });
}
function Af(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Ql(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ql(t);
}
function Cr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function A0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ni = Math.random().toString(36).slice(2), wn = "__reactFiber$" + Ni, Zl = "__reactProps$" + Ni, Hn = "__reactContainer$" + Ni, dp = "__reactEvents$" + Ni, qE = "__reactListeners$" + Ni, QE = "__reactHandles$" + Ni;
function Jr(e) {
  var t = e[wn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Hn] || n[wn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = A0(e); e !== null; ) {
          if (n = e[wn])
            return n;
          e = A0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ta(e) {
  return e = e[wn] || e[Hn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function dc(e) {
  return e[Zl] || null;
}
var pp = [], Qo = -1;
function Mr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Qo || (e.current = pp[Qo], pp[Qo] = null, Qo--);
}
function $e(e, t) {
  Qo++, pp[Qo] = e.current, e.current = t;
}
var Ir = {}, it = Mr(Ir), bt = Mr(!1), lo = Ir;
function vi(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ir;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function St(e) {
  return e = e.childContextTypes, e != null;
}
function vu() {
  Pe(bt), Pe(it);
}
function P0(e, t, n) {
  if (it.current !== Ir)
    throw Error(j(168));
  $e(it, t), $e(bt, n);
}
function kw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, T$(e) || "Unknown", o));
  return Oe({}, n, r);
}
function yu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ir, lo = it.current, $e(it, e), $e(bt, bt.current), !0;
}
function _0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = kw(e, t, lo), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(it), $e(it, e)) : Pe(bt), $e(bt, n);
}
var Fn = null, pc = !1, Pf = !1;
function Cw(e) {
  Fn === null ? Fn = [e] : Fn.push(e);
}
function GE(e) {
  pc = !0, Cw(e);
}
function Dr() {
  if (!Pf && Fn !== null) {
    Pf = !0;
    var e = 0, t = we;
    try {
      var n = Fn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Fn = null, pc = !1;
    } catch (o) {
      throw Fn !== null && (Fn = Fn.slice(e + 1)), Kx(Xh, Dr), o;
    } finally {
      we = t, Pf = !1;
    }
  }
  return null;
}
var Go = [], Ko = 0, xu = null, wu = 0, Dt = [], Lt = 0, ao = null, zn = 1, Bn = "";
function Ur(e, t) {
  Go[Ko++] = wu, Go[Ko++] = xu, xu = e, wu = t;
}
function $w(e, t, n) {
  Dt[Lt++] = zn, Dt[Lt++] = Bn, Dt[Lt++] = ao, ao = e;
  var r = zn;
  e = Bn;
  var o = 32 - cn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - cn(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, zn = 1 << 32 - cn(t) + o | n << o | r, Bn = i + e;
  } else
    zn = 1 << i | n << o | r, Bn = e;
}
function lm(e) {
  e.return !== null && (Ur(e, 1), $w(e, 1, 0));
}
function am(e) {
  for (; e === xu; )
    xu = Go[--Ko], Go[Ko] = null, wu = Go[--Ko], Go[Ko] = null;
  for (; e === ao; )
    ao = Dt[--Lt], Dt[Lt] = null, Bn = Dt[--Lt], Dt[Lt] = null, zn = Dt[--Lt], Dt[Lt] = null;
}
var _t = null, Et = null, Re = !1, rn = null;
function Ew(e, t) {
  var n = Ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function R0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = Cr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ao !== null ? { id: zn, overflow: Bn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Et = null, !0) : !1;
    default:
      return !1;
  }
}
function hp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mp(e) {
  if (Re) {
    var t = Et;
    if (t) {
      var n = t;
      if (!R0(e, t)) {
        if (hp(e))
          throw Error(j(418));
        t = Cr(n.nextSibling);
        var r = _t;
        t && R0(e, t) ? Ew(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (hp(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function T0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function ls(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return T0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cp(e.type, e.memoizedProps)), t && (t = Et)) {
    if (hp(e))
      throw Aw(), Error(j(418));
    for (; t; )
      Ew(e, t), t = Cr(t.nextSibling);
  }
  if (T0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = Cr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Et = null;
    }
  } else
    Et = _t ? Cr(e.stateNode.nextSibling) : null;
  return !0;
}
function Aw() {
  for (var e = Et; e; )
    e = Cr(e.nextSibling);
}
function yi() {
  Et = _t = null, Re = !1;
}
function sm(e) {
  rn === null ? rn = [e] : rn.push(e);
}
var KE = Kn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bu = Mr(null), Su = null, Yo = null, um = null;
function cm() {
  um = Yo = Su = null;
}
function fm(e) {
  var t = bu.current;
  Pe(bu), e._currentValue = t;
}
function gp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ii(e, t) {
  Su = e, um = Yo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function qt(e) {
  var t = e._currentValue;
  if (um !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Yo === null) {
      if (Su === null)
        throw Error(j(308));
      Yo = e, Su.dependencies = { lanes: 0, firstContext: e };
    } else
      Yo = Yo.next = e;
  return t;
}
var eo = null;
function dm(e) {
  eo === null ? eo = [e] : eo.push(e);
}
function Pw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, dm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Un(e, r);
}
function Un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var fr = !1;
function pm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _w(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $r(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (me & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Un(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, dm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Un(e, n);
}
function Bs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zh(e, n);
  }
}
function I0(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ku(e, t, n, r) {
  var o = e.updateQueue;
  fr = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a, u = s.next;
    s.next = null, l === null ? i = u : l.next = u, l = s;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = s));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, c = u = s = null, a = i;
    do {
      var d = a.lane, g = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var h = e, v = a;
          switch (d = t, g = n, v.tag) {
            case 1:
              if (h = v.payload, typeof h == "function") {
                f = h.call(g, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = v.payload, d = typeof h == "function" ? h.call(g, f, d) : h, d == null)
                break e;
              f = Oe({}, f, d);
              break e;
            case 2:
              fr = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [a] : d.push(a));
      } else
        g = { eventTime: g, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = g, s = f) : c = c.next = g, l |= d;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        d = a, a = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (1);
    if (c === null && (s = f), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    uo |= l, e.lanes = l, e.memoizedState = f;
  }
}
function O0(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var Rw = new Px.Component().refs;
function vp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hc = { isMounted: function(e) {
  return (e = e._reactInternals) ? xo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = dt(), o = Ar(e), i = jn(r, o);
  i.payload = t, n != null && (i.callback = n), t = $r(e, i, o), t !== null && (fn(t, e, o, r), Bs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = dt(), o = Ar(e), i = jn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = $r(e, i, o), t !== null && (fn(t, e, o, r), Bs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = dt(), r = Ar(e), o = jn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = $r(e, o, r), t !== null && (fn(t, e, r, n), Bs(t, e, r));
} };
function N0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Kl(n, r) || !Kl(o, i) : !0;
}
function Tw(e, t, n) {
  var r = !1, o = Ir, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qt(i) : (o = St(t) ? lo : it.current, r = t.contextTypes, i = (r = r != null) ? vi(e, o) : Ir), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function M0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hc.enqueueReplaceState(t, t.state, null);
}
function yp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Rw, pm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = qt(i) : (i = St(t) ? lo : it.current, o.context = vi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (vp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hc.enqueueReplaceState(o, o.state, null), ku(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(j(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var a = o.refs;
        a === Rw && (a = o.refs = {}), l === null ? delete a[i] : a[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function as(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function D0(e) {
  var t = e._init;
  return t(e._payload);
}
function Iw(e) {
  function t(p, y) {
    if (e) {
      var x = p.deletions;
      x === null ? (p.deletions = [y], p.flags |= 16) : x.push(y);
    }
  }
  function n(p, y) {
    if (!e)
      return null;
    for (; y !== null; )
      t(p, y), y = y.sibling;
    return null;
  }
  function r(p, y) {
    for (p = /* @__PURE__ */ new Map(); y !== null; )
      y.key !== null ? p.set(y.key, y) : p.set(y.index, y), y = y.sibling;
    return p;
  }
  function o(p, y) {
    return p = Pr(p, y), p.index = 0, p.sibling = null, p;
  }
  function i(p, y, x) {
    return p.index = x, e ? (x = p.alternate, x !== null ? (x = x.index, x < y ? (p.flags |= 2, y) : x) : (p.flags |= 2, y)) : (p.flags |= 1048576, y);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, y, x, b) {
    return y === null || y.tag !== 6 ? (y = Mf(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function s(p, y, x, b) {
    var A = x.type;
    return A === Vo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === cr && D0(A) === y.type) ? (b = o(y, x.props), b.ref = Zi(p, y, x), b.return = p, b) : (b = qs(x.type, x.key, x.props, null, p.mode, b), b.ref = Zi(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Df(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = ro(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Mf("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ya:
          return x = qs(y.type, y.key, y.props, null, p.mode, x), x.ref = Zi(p, null, y), x.return = p, x;
        case jo:
          return y = Df(y, p.mode, x), y.return = p, y;
        case cr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (hl(y) || Qi(y))
        return y = ro(y, p.mode, x, null), y.return = p, y;
      as(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : a(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ya:
          return x.key === A ? s(p, y, x, b) : null;
        case jo:
          return x.key === A ? u(p, y, x, b) : null;
        case cr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (hl(x) || Qi(x))
        return A !== null ? null : c(p, y, x, b, null);
      as(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, a(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ya:
          return p = p.get(b.key === null ? x : b.key) || null, s(y, p, b, A);
        case jo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case cr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (hl(b) || Qi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      as(y, b);
    }
    return null;
  }
  function h(p, y, x, b) {
    for (var A = null, S = null, E = y, $ = y = 0, P = null; E !== null && $ < x.length; $++) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var T = d(p, E, x[$], b);
      if (T === null) {
        E === null && (E = P);
        break;
      }
      e && E && T.alternate === null && t(p, E), y = i(T, y, $), S === null ? A = T : S.sibling = T, S = T, E = P;
    }
    if ($ === x.length)
      return n(p, E), Re && Ur(p, $), A;
    if (E === null) {
      for (; $ < x.length; $++)
        E = f(p, x[$], b), E !== null && (y = i(E, y, $), S === null ? A = E : S.sibling = E, S = E);
      return Re && Ur(p, $), A;
    }
    for (E = r(p, E); $ < x.length; $++)
      P = g(E, p, $, x[$], b), P !== null && (e && P.alternate !== null && E.delete(P.key === null ? $ : P.key), y = i(P, y, $), S === null ? A = P : S.sibling = P, S = P);
    return e && E.forEach(function(R) {
      return t(p, R);
    }), Re && Ur(p, $), A;
  }
  function v(p, y, x, b) {
    var A = Qi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, E = y, $ = y = 0, P = null, T = x.next(); E !== null && !T.done; $++, T = x.next()) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var R = d(p, E, T.value, b);
      if (R === null) {
        E === null && (E = P);
        break;
      }
      e && E && R.alternate === null && t(p, E), y = i(R, y, $), S === null ? A = R : S.sibling = R, S = R, E = P;
    }
    if (T.done)
      return n(
        p,
        E
      ), Re && Ur(p, $), A;
    if (E === null) {
      for (; !T.done; $++, T = x.next())
        T = f(p, T.value, b), T !== null && (y = i(T, y, $), S === null ? A = T : S.sibling = T, S = T);
      return Re && Ur(p, $), A;
    }
    for (E = r(p, E); !T.done; $++, T = x.next())
      T = g(E, p, $, T.value, b), T !== null && (e && T.alternate !== null && E.delete(T.key === null ? $ : T.key), y = i(T, y, $), S === null ? A = T : S.sibling = T, S = T);
    return e && E.forEach(function(N) {
      return t(p, N);
    }), Re && Ur(p, $), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === Vo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ya:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === Vo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === cr && D0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = Zi(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === Vo ? (y = ro(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = qs(x.type, x.key, x.props, null, p.mode, b), b.ref = Zi(p, y, x), b.return = p, p = b);
          }
          return l(p);
        case jo:
          e: {
            for (S = x.key; y !== null; ) {
              if (y.key === S)
                if (y.tag === 4 && y.stateNode.containerInfo === x.containerInfo && y.stateNode.implementation === x.implementation) {
                  n(p, y.sibling), y = o(y, x.children || []), y.return = p, p = y;
                  break e;
                } else {
                  n(p, y);
                  break;
                }
              else
                t(p, y);
              y = y.sibling;
            }
            y = Df(x, p.mode, b), y.return = p, p = y;
          }
          return l(p);
        case cr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (hl(x))
        return h(p, y, x, b);
      if (Qi(x))
        return v(p, y, x, b);
      as(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Mf(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var xi = Iw(!0), Ow = Iw(!1), Ia = {}, Cn = Mr(Ia), Jl = Mr(Ia), ea = Mr(Ia);
function to(e) {
  if (e === Ia)
    throw Error(j(174));
  return e;
}
function hm(e, t) {
  switch ($e(ea, t), $e(Jl, e), $e(Cn, Ia), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yd(t, e);
  }
  Pe(Cn), $e(Cn, t);
}
function wi() {
  Pe(Cn), Pe(Jl), Pe(ea);
}
function Nw(e) {
  to(ea.current);
  var t = to(Cn.current), n = Yd(t, e.type);
  t !== n && ($e(Jl, e), $e(Cn, n));
}
function mm(e) {
  Jl.current === e && (Pe(Cn), Pe(Jl));
}
var Te = Mr(0);
function Cu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var _f = [];
function gm() {
  for (var e = 0; e < _f.length; e++)
    _f[e]._workInProgressVersionPrimary = null;
  _f.length = 0;
}
var js = Kn.ReactCurrentDispatcher, Rf = Kn.ReactCurrentBatchConfig, so = 0, Ie = null, We = null, Qe = null, $u = !1, El = !1, ta = 0, YE = 0;
function et() {
  throw Error(j(321));
}
function vm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pn(e[n], t[n]))
      return !1;
  return !0;
}
function ym(e, t, n, r, o, i) {
  if (so = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, js.current = e === null || e.memoizedState === null ? e5 : t5, e = n(r, o), El) {
    i = 0;
    do {
      if (El = !1, ta = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Qe = We = null, t.updateQueue = null, js.current = n5, e = n(r, o);
    } while (El);
  }
  if (js.current = Eu, t = We !== null && We.next !== null, so = 0, Qe = We = Ie = null, $u = !1, t)
    throw Error(j(300));
  return e;
}
function xm() {
  var e = ta !== 0;
  return ta = 0, e;
}
function gn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Qe === null ? Ie.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
}
function Qt() {
  if (We === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = We.next;
  var t = Qe === null ? Ie.memoizedState : Qe.next;
  if (t !== null)
    Qe = t, We = e;
  else {
    if (e === null)
      throw Error(j(310));
    We = e, e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }, Qe === null ? Ie.memoizedState = Qe = e : Qe = Qe.next = e;
  }
  return Qe;
}
function na(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Tf(e) {
  var t = Qt(), n = t.queue;
  if (n === null)
    throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = We, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = l = null, s = null, u = i;
    do {
      var c = u.lane;
      if ((so & c) === c)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (a = s = f, l = r) : s = s.next = f, Ie.lanes |= c, uo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? l = r : s.next = a, pn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ie.lanes |= i, uo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function If(e) {
  var t = Qt(), n = t.queue;
  if (n === null)
    throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    pn(i, t.memoizedState) || (wt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Mw() {
}
function Dw(e, t) {
  var n = Ie, r = Qt(), o = t(), i = !pn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, wm(zw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Qe !== null && Qe.memoizedState.tag & 1) {
    if (n.flags |= 2048, ra(9, Fw.bind(null, n, r, o, t), void 0, null), Ke === null)
      throw Error(j(349));
    (so & 30) !== 0 || Lw(n, t, o);
  }
  return o;
}
function Lw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Fw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Bw(t) && jw(e);
}
function zw(e, t, n) {
  return n(function() {
    Bw(t) && jw(e);
  });
}
function Bw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pn(e, n);
  } catch {
    return !0;
  }
}
function jw(e) {
  var t = Un(e, 1);
  t !== null && fn(t, e, 1, -1);
}
function L0(e) {
  var t = gn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: e }, t.queue = e, e = e.dispatch = JE.bind(null, Ie, e), [t.memoizedState, e];
}
function ra(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Vw() {
  return Qt().memoizedState;
}
function Vs(e, t, n, r) {
  var o = gn();
  Ie.flags |= e, o.memoizedState = ra(1 | t, n, void 0, r === void 0 ? null : r);
}
function mc(e, t, n, r) {
  var o = Qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (We !== null) {
    var l = We.memoizedState;
    if (i = l.destroy, r !== null && vm(r, l.deps)) {
      o.memoizedState = ra(t, n, i, r);
      return;
    }
  }
  Ie.flags |= e, o.memoizedState = ra(1 | t, n, i, r);
}
function F0(e, t) {
  return Vs(8390656, 8, e, t);
}
function wm(e, t) {
  return mc(2048, 8, e, t);
}
function Hw(e, t) {
  return mc(4, 2, e, t);
}
function Uw(e, t) {
  return mc(4, 4, e, t);
}
function Ww(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function qw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mc(4, 4, Ww.bind(null, t, e), n);
}
function bm() {
}
function Qw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Kw(e, t, n) {
  return (so & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (pn(n, t) || (n = Zx(), Ie.lanes |= n, uo |= n, e.baseState = !0), t);
}
function XE(e, t) {
  var n = we;
  we = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Rf.transition;
  Rf.transition = {};
  try {
    e(!1), t();
  } finally {
    we = n, Rf.transition = r;
  }
}
function Yw() {
  return Qt().memoizedState;
}
function ZE(e, t, n) {
  var r = Ar(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xw(e))
    Zw(t, n);
  else if (n = Pw(e, t, n, r), n !== null) {
    var o = dt();
    fn(n, e, r, o), Jw(n, t, r);
  }
}
function JE(e, t, n) {
  var r = Ar(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xw(e))
    Zw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, a = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = a, pn(a, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, dm(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Pw(e, t, o, r), n !== null && (o = dt(), fn(n, e, r, o), Jw(n, t, r));
  }
}
function Xw(e) {
  var t = e.alternate;
  return e === Ie || t !== null && t === Ie;
}
function Zw(e, t) {
  El = $u = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Jw(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zh(e, n);
  }
}
var Eu = { readContext: qt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, e5 = { readContext: qt, useCallback: function(e, t) {
  return gn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qt, useEffect: F0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vs(
    4194308,
    4,
    Ww.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ZE.bind(null, Ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gn();
  return e = { current: e }, t.memoizedState = e;
}, useState: L0, useDebugValue: bm, useDeferredValue: function(e) {
  return gn().memoizedState = e;
}, useTransition: function() {
  var e = L0(!1), t = e[0];
  return e = XE.bind(null, e[1]), gn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ie, o = gn();
  if (Re) {
    if (n === void 0)
      throw Error(j(407));
    n = n();
  } else {
    if (n = t(), Ke === null)
      throw Error(j(349));
    (so & 30) !== 0 || Lw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, F0(zw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ra(9, Fw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = gn(), t = Ke.identifierPrefix;
  if (Re) {
    var n = Bn, r = zn;
    n = (r & ~(1 << 32 - cn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ta++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = YE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, t5 = {
  readContext: qt,
  useCallback: Qw,
  useContext: qt,
  useEffect: wm,
  useImperativeHandle: qw,
  useInsertionEffect: Hw,
  useLayoutEffect: Uw,
  useMemo: Gw,
  useReducer: Tf,
  useRef: Vw,
  useState: function() {
    return Tf(na);
  },
  useDebugValue: bm,
  useDeferredValue: function(e) {
    var t = Qt();
    return Kw(t, We.memoizedState, e);
  },
  useTransition: function() {
    var e = Tf(na)[0], t = Qt().memoizedState;
    return [e, t];
  },
  useMutableSource: Mw,
  useSyncExternalStore: Dw,
  useId: Yw,
  unstable_isNewReconciler: !1
}, n5 = { readContext: qt, useCallback: Qw, useContext: qt, useEffect: wm, useImperativeHandle: qw, useInsertionEffect: Hw, useLayoutEffect: Uw, useMemo: Gw, useReducer: If, useRef: Vw, useState: function() {
  return If(na);
}, useDebugValue: bm, useDeferredValue: function(e) {
  var t = Qt();
  return We === null ? t.memoizedState = e : Kw(t, We.memoizedState, e);
}, useTransition: function() {
  var e = If(na)[0], t = Qt().memoizedState;
  return [e, t];
}, useMutableSource: Mw, useSyncExternalStore: Dw, useId: Yw, unstable_isNewReconciler: !1 };
function bi(e, t) {
  try {
    var n = "", r = t;
    do
      n += R$(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Of(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function xp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var r5 = typeof WeakMap == "function" ? WeakMap : Map;
function eb(e, t, n) {
  n = jn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pu || (Pu = !0, _p = r), xp(e, t);
  }, n;
}
function tb(e, t, n) {
  n = jn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      xp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    xp(e, t), typeof r != "function" && (Er === null ? Er = /* @__PURE__ */ new Set([this]) : Er.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function z0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new r5();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = v5.bind(null, e, t, n), t.then(e, e));
}
function B0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function j0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jn(-1, 1), t.tag = 2, $r(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var o5 = Kn.ReactCurrentOwner, wt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Ow(t, null, n, r) : xi(t, e.child, n, r);
}
function V0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ii(t, o), r = ym(e, t, n, r, i, o), n = xm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wn(e, t, o)) : (Re && n && lm(t), t.flags |= 1, ct(e, t, r, o), t.child);
}
function H0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !_m(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, nb(e, t, i, r, o)) : (e = qs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Kl, n(l, r) && e.ref === t.ref)
      return Wn(e, t, o);
  }
  return t.flags |= 1, e = Pr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function nb(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kl(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, Wn(e, t, o);
  }
  return wp(e, t, n, r, o);
}
function rb(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(Zo, $t), $t |= n;
    else {
      if ((n & 1073741824) === 0)
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(Zo, $t), $t |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, $e(Zo, $t), $t |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, $e(Zo, $t), $t |= r;
  return ct(e, t, o, n), t.child;
}
function ob(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wp(e, t, n, r, o) {
  var i = St(n) ? lo : it.current;
  return i = vi(t, i), ii(t, o), n = ym(e, t, n, r, i, o), r = xm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wn(e, t, o)) : (Re && r && lm(t), t.flags |= 1, ct(e, t, n, o), t.child);
}
function U0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    yu(t);
  } else
    i = !1;
  if (ii(t, o), t.stateNode === null)
    Hs(e, t), Tw(t, n, r), yp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var s = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qt(u) : (u = St(n) ? lo : it.current, u = vi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && M0(t, l, r, u), fr = !1;
    var d = t.memoizedState;
    l.state = d, ku(t, r, l, o), s = t.memoizedState, a !== r || d !== s || bt.current || fr ? (typeof c == "function" && (vp(t, n, c, r), s = t.memoizedState), (a = fr || N0(t, n, a, r, d, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, _w(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : tn(t.type, a), l.props = u, f = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = qt(s) : (s = St(n) ? lo : it.current, s = vi(t, s));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== s) && M0(t, l, r, s), fr = !1, d = t.memoizedState, l.state = d, ku(t, r, l, o);
    var h = t.memoizedState;
    a !== f || d !== h || bt.current || fr ? (typeof g == "function" && (vp(t, n, g, r), h = t.memoizedState), (u = fr || N0(t, n, u, r, d, h, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return bp(e, t, n, r, i, o);
}
function bp(e, t, n, r, o, i) {
  ob(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && _0(t, n, !1), Wn(e, t, i);
  r = t.stateNode, o5.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = xi(t, e.child, null, i), t.child = xi(t, null, a, i)) : ct(e, t, a, i), t.memoizedState = r.state, o && _0(t, n, !0), t.child;
}
function ib(e) {
  var t = e.stateNode;
  t.pendingContext ? P0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && P0(e, t.context, !1), hm(e, t.containerInfo);
}
function W0(e, t, n, r, o) {
  return yi(), sm(o), t.flags |= 256, ct(e, t, n, r), t.child;
}
var Sp = { dehydrated: null, treeContext: null, retryLane: 0 };
function kp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lb(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), $e(Te, o & 1), e === null)
    return mp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = yc(l, r, 0, null), e = ro(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = kp(n), t.memoizedState = Sp, e) : Sm(t, l));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return i5(e, t, l, r, a, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, a = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Pr(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Pr(a, i) : (i = ro(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? kp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Sp, r;
  }
  return i = e.child, e = i.sibling, r = Pr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Sm(e, t) {
  return t = yc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ss(e, t, n, r) {
  return r !== null && sm(r), xi(t, e.child, null, n), e = Sm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function i5(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Of(Error(j(422))), ss(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = yc({ mode: "visible", children: r.children }, o, 0, null), i = ro(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && xi(t, e.child, null, l), t.child.memoizedState = kp(l), t.memoizedState = Sp, i);
  if ((t.mode & 1) === 0)
    return ss(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(j(419)), r = Of(i, r, void 0), ss(e, t, l, r);
  }
  if (a = (l & e.childLanes) !== 0, wt || a) {
    if (r = Ke, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Un(e, o), fn(r, e, o, -1));
    }
    return Pm(), r = Of(Error(j(421))), ss(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = y5.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Et = Cr(o.nextSibling), _t = t, Re = !0, rn = null, e !== null && (Dt[Lt++] = zn, Dt[Lt++] = Bn, Dt[Lt++] = ao, zn = e.id, Bn = e.overflow, ao = t), t = Sm(t, r.children), t.flags |= 4096, t);
}
function q0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gp(e.return, t, n);
}
function Nf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function ab(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ct(e, t, r.children, n), r = Te.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && q0(e, n, t);
          else if (e.tag === 19)
            q0(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if ($e(Te, r), (t.mode & 1) === 0)
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Cu(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Nf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Cu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Nf(t, !0, n, null, i);
        break;
      case "together":
        Nf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hs(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), uo |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Pr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Pr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function l5(e, t, n) {
  switch (t.tag) {
    case 3:
      ib(t), yi();
      break;
    case 5:
      Nw(t);
      break;
    case 1:
      St(t.type) && yu(t);
      break;
    case 4:
      hm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      $e(bu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($e(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? lb(e, t, n) : ($e(Te, Te.current & 1), e = Wn(e, t, n), e !== null ? e.sibling : null);
      $e(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return ab(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), $e(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, rb(e, t, n);
  }
  return Wn(e, t, n);
}
var sb, Cp, ub, cb;
sb = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Cp = function() {
};
ub = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, to(Cn.current);
    var i = null;
    switch (n) {
      case "input":
        o = qd(e, o), r = qd(e, r), i = [];
        break;
      case "select":
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Kd(e, o), r = Kd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gu);
    }
    Xd(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a)
            a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && s !== a && (s != null || a != null))
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in s)
              s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = s;
        else
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vl.hasOwnProperty(u) ? (s != null && u === "onScroll" && Ee("scroll", e), i || a === s || (i = [])) : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
cb = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ji(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function a5(e, t, n) {
  var r = t.pendingProps;
  switch (am(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return tt(t), null;
    case 1:
      return St(t.type) && vu(), tt(t), null;
    case 3:
      return r = t.stateNode, wi(), Pe(bt), Pe(it), gm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ls(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rn !== null && (Ip(rn), rn = null))), Cp(e, t), tt(t), null;
    case 5:
      mm(t);
      var o = to(ea.current);
      if (n = t.type, e !== null && t.stateNode != null)
        ub(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return tt(t), null;
        }
        if (e = to(Cn.current), ls(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[wn] = t, r[Zl] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ee("cancel", r), Ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < gl.length; o++)
                Ee(gl[o], r);
              break;
            case "source":
              Ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ee(
                "error",
                r
              ), Ee("load", r);
              break;
            case "details":
              Ee("toggle", r);
              break;
            case "input":
              t0(r, i), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              r0(r, i), Ee("invalid", r);
          }
          Xd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && is(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && is(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : Vl.hasOwnProperty(l) && a != null && l === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              Xa(r), n0(r, i, !0);
              break;
            case "textarea":
              Xa(r), o0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = gu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[wn] = t, e[Zl] = r, sb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Zd(n, r), n) {
              case "dialog":
                Ee("cancel", e), Ee("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < gl.length; o++)
                  Ee(gl[o], e);
                o = r;
                break;
              case "source":
                Ee("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ee(
                  "error",
                  e
                ), Ee("load", e), o = r;
                break;
              case "details":
                Ee("toggle", e), o = r;
                break;
              case "input":
                t0(e, r), o = qd(e, r), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), Ee("invalid", e);
                break;
              case "textarea":
                r0(e, r), o = Kd(e, r), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            Xd(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style" ? Bx(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Fx(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Hl(e, s) : typeof s == "number" && Hl(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Vl.hasOwnProperty(i) ? s != null && i === "onScroll" && Ee("scroll", e) : s != null && qh(e, i, s, l));
              }
            switch (n) {
              case "input":
                Xa(e), n0(e, r, !1);
                break;
              case "textarea":
                Xa(e), o0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ti(e, !!r.multiple, i, !1) : r.defaultValue != null && ti(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = gu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null)
        cb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = to(ea.current), to(Cn.current), ls(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[wn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                is(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && is(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wn] = t, t.stateNode = r;
      }
      return tt(t), null;
    case 13:
      if (Pe(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Aw(), yi(), t.flags |= 98560, i = !1;
        else if (i = ls(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(j(317));
            i[wn] = t;
          } else
            yi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          rn !== null && (Ip(rn), rn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? qe === 0 && (qe = 3) : Pm())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return wi(), Cp(e, t), e === null && Yl(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return fm(t.type._context), tt(t), null;
    case 17:
      return St(t.type) && vu(), tt(t), null;
    case 19:
      if (Pe(Te), i = t.memoizedState, i === null)
        return tt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Ji(i, !1);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = Cu(e), l !== null) {
                for (t.flags |= 128, Ji(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $e(Te, Te.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > Si && (t.flags |= 128, r = !0, Ji(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Cu(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ji(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return tt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > Si && n !== 1073741824 && (t.flags |= 128, r = !0, Ji(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Te.current, $e(Te, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Am(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? ($t & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function s5(e, t) {
  switch (am(t), t.tag) {
    case 1:
      return St(t.type) && vu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return wi(), Pe(bt), Pe(it), gm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return mm(t), null;
    case 13:
      if (Pe(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(j(340));
        yi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Te), null;
    case 4:
      return wi(), null;
    case 10:
      return fm(t.type._context), null;
    case 22:
    case 23:
      return Am(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var us = !1, nt = !1, u5 = typeof WeakSet == "function" ? WeakSet : Set, K = null;
function Xo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(e, t, r);
      }
    else
      n.current = null;
}
function $p(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var Q0 = !1;
function c5(e, t) {
  if (sp = pu, e = hw(), im(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0, a = -1, s = -1, u = 0, c = 0, f = e, d = null;
          t:
            for (; ; ) {
              for (var g; f !== n || o !== 0 && f.nodeType !== 3 || (a = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (g = f.firstChild) !== null; )
                d = f, f = g;
              for (; ; ) {
                if (f === e)
                  break t;
                if (d === n && ++u === o && (a = l), d === i && ++c === r && (s = l), (g = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = g;
            }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (up = { focusedElem: e, selectionRange: n }, pu = !1, K = t; K !== null; )
    if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, K = e;
    else
      for (; K !== null; ) {
        t = K;
        try {
          var h = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var v = h.memoizedProps, w = h.memoizedState, p = t.stateNode, y = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : tn(t.type, v), w);
                  p.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (b) {
          Ne(t, t.return, b);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, K = e;
          break;
        }
        K = t.return;
      }
  return h = Q0, Q0 = !1, h;
}
function Al(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && $p(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function gc(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ep(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function fb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wn], delete t[Zl], delete t[dp], delete t[qE], delete t[QE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function db(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function G0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || db(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Ap(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gu));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ap(e, t, n), e = e.sibling; e !== null; )
      Ap(e, t, n), e = e.sibling;
}
function Pp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Pp(e, t, n), e = e.sibling; e !== null; )
      Pp(e, t, n), e = e.sibling;
}
var Ye = null, nn = !1;
function ir(e, t, n) {
  for (n = n.child; n !== null; )
    pb(e, t, n), n = n.sibling;
}
function pb(e, t, n) {
  if (kn && typeof kn.onCommitFiberUnmount == "function")
    try {
      kn.onCommitFiberUnmount(sc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      nt || Xo(n, t);
    case 6:
      var r = Ye, o = nn;
      Ye = null, ir(e, t, n), Ye = r, nn = o, Ye !== null && (nn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null && (nn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? Af(e.parentNode, n) : e.nodeType === 1 && Af(e, n), Ql(e)) : Af(Ye, n.stateNode));
      break;
    case 4:
      r = Ye, o = nn, Ye = n.stateNode.containerInfo, nn = !0, ir(e, t, n), Ye = r, nn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && $p(n, t, l), o = o.next;
        } while (o !== r);
      }
      ir(e, t, n);
      break;
    case 1:
      if (!nt && (Xo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Ne(n, t, a);
        }
      ir(e, t, n);
      break;
    case 21:
      ir(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, ir(e, t, n), nt = r) : ir(e, t, n);
      break;
    default:
      ir(e, t, n);
  }
}
function K0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new u5()), t.forEach(function(r) {
      var o = x5.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Zt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, l = t, a = l;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                Ye = a.stateNode, nn = !1;
                break e;
              case 3:
                Ye = a.stateNode.containerInfo, nn = !0;
                break e;
              case 4:
                Ye = a.stateNode.containerInfo, nn = !0;
                break e;
            }
            a = a.return;
          }
        if (Ye === null)
          throw Error(j(160));
        pb(i, l, o), Ye = null, nn = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      hb(t, e), t = t.sibling;
}
function hb(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Zt(t, e), mn(e), r & 4) {
        try {
          Al(3, e, e.return), gc(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          Al(5, e, e.return);
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 1:
      Zt(t, e), mn(e), r & 512 && n !== null && Xo(n, n.return);
      break;
    case 5:
      if (Zt(t, e), mn(e), r & 512 && n !== null && Xo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Hl(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Mx(o, i), Zd(a, l);
            var u = Zd(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l], f = s[l + 1];
              c === "style" ? Bx(o, f) : c === "dangerouslySetInnerHTML" ? Fx(o, f) : c === "children" ? Hl(o, f) : qh(o, c, f, u);
            }
            switch (a) {
              case "input":
                Qd(o, i);
                break;
              case "textarea":
                Dx(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? ti(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? ti(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ti(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Zl] = i;
          } catch (v) {
            Ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Zt(t, e), mn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(j(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Zt(t, e), mn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Ql(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      Zt(t, e), mn(e);
      break;
    case 13:
      Zt(t, e), mn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || ($m = Fe())), r & 4 && K0(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (nt = (u = nt) || c, Zt(t, e), nt = u) : Zt(t, e), mn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
          for (K = e, c = e.child; c !== null; ) {
            for (f = K = c; K !== null; ) {
              switch (d = K, g = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Al(4, d, d.return);
                  break;
                case 1:
                  Xo(d, d.return);
                  var h = d.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                    } catch (v) {
                      Ne(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Xo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    X0(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, K = g) : X0(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = zx("display", l));
                } catch (v) {
                  Ne(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (v) {
                  Ne(e, e.return, v);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e)
                break e;
              c === f && (c = null), f = f.return;
            }
            c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Zt(t, e), mn(e), r & 4 && K0(e);
      break;
    case 21:
      break;
    default:
      Zt(
        t,
        e
      ), mn(e);
  }
}
function mn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (db(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Hl(o, ""), r.flags &= -33);
          var i = G0(e);
          Pp(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = G0(e);
          Ap(e, a, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (s) {
      Ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function f5(e, t, n) {
  K = e, mb(e);
}
function mb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || us;
      if (!l) {
        var a = o.alternate, s = a !== null && a.memoizedState !== null || nt;
        a = us;
        var u = nt;
        if (us = l, (nt = s) && !u)
          for (K = o; K !== null; )
            l = K, s = l.child, l.tag === 22 && l.memoizedState !== null ? Z0(o) : s !== null ? (s.return = l, K = s) : Z0(o);
        for (; i !== null; )
          K = i, mb(i), i = i.sibling;
        K = o, us = a, nt = u;
      }
      Y0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, K = i) : Y0(e);
  }
}
function Y0(e) {
  for (; K !== null; ) {
    var t = K;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || gc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !nt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && O0(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                O0(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ql(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        nt || t.flags & 512 && Ep(t);
      } catch (d) {
        Ne(t, t.return, d);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, K = n;
      break;
    }
    K = t.return;
  }
}
function X0(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, K = n;
      break;
    }
    K = t.return;
  }
}
function Z0(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gc(4, t);
          } catch (s) {
            Ne(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Ne(t, o, s);
            }
          }
          var i = t.return;
          try {
            Ep(t);
          } catch (s) {
            Ne(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ep(t);
          } catch (s) {
            Ne(t, l, s);
          }
      }
    } catch (s) {
      Ne(t, t.return, s);
    }
    if (t === e) {
      K = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, K = a;
      break;
    }
    K = t.return;
  }
}
var d5 = Math.ceil, Au = Kn.ReactCurrentDispatcher, km = Kn.ReactCurrentOwner, Wt = Kn.ReactCurrentBatchConfig, me = 0, Ke = null, Ve = null, Ze = 0, $t = 0, Zo = Mr(0), qe = 0, oa = null, uo = 0, vc = 0, Cm = 0, Pl = null, xt = null, $m = 0, Si = 1 / 0, On = null, Pu = !1, _p = null, Er = null, cs = !1, mr = null, _u = 0, _l = 0, Rp = null, Us = -1, Ws = 0;
function dt() {
  return (me & 6) !== 0 ? Fe() : Us !== -1 ? Us : Us = Fe();
}
function Ar(e) {
  return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Ze !== 0 ? Ze & -Ze : KE.transition !== null ? (Ws === 0 && (Ws = Zx()), Ws) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : iw(e.type)), e);
}
function fn(e, t, n, r) {
  if (50 < _l)
    throw _l = 0, Rp = null, Error(j(185));
  _a(e, n, r), ((me & 2) === 0 || e !== Ke) && (e === Ke && ((me & 2) === 0 && (vc |= n), qe === 4 && pr(e, Ze)), kt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (Si = Fe() + 500, pc && Dr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  K$(e, t);
  var r = du(e, e === Ke ? Ze : 0);
  if (r === 0)
    n !== null && a0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && a0(n), t === 1)
      e.tag === 0 ? GE(J0.bind(null, e)) : Cw(J0.bind(null, e)), UE(function() {
        (me & 6) === 0 && Dr();
      }), n = null;
    else {
      switch (Jx(r)) {
        case 1:
          n = Xh;
          break;
        case 4:
          n = Yx;
          break;
        case 16:
          n = fu;
          break;
        case 536870912:
          n = Xx;
          break;
        default:
          n = fu;
      }
      n = kb(n, gb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function gb(e, t) {
  if (Us = -1, Ws = 0, (me & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n)
    return null;
  var r = du(e, e === Ke ? Ze : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Ru(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = yb();
    (Ke !== e || Ze !== t) && (On = null, Si = Fe() + 500, no(e, t));
    do
      try {
        m5();
        break;
      } catch (a) {
        vb(e, a);
      }
    while (1);
    cm(), Au.current = i, me = o, Ve !== null ? t = 0 : (Ke = null, Ze = 0, t = qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = rp(e), o !== 0 && (r = o, t = Tp(e, o))), t === 1)
      throw n = oa, no(e, 0), pr(e, r), kt(e, Fe()), n;
    if (t === 6)
      pr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !p5(o) && (t = Ru(e, r), t === 2 && (i = rp(e), i !== 0 && (r = i, t = Tp(e, i))), t === 1))
        throw n = oa, no(e, 0), pr(e, r), kt(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Wr(e, xt, On);
          break;
        case 3:
          if (pr(e, r), (r & 130023424) === r && (t = $m + 500 - Fe(), 10 < t)) {
            if (du(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              dt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = fp(Wr.bind(null, e, xt, On), t);
            break;
          }
          Wr(e, xt, On);
          break;
        case 4:
          if (pr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - cn(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * d5(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fp(Wr.bind(null, e, xt, On), r);
            break;
          }
          Wr(e, xt, On);
          break;
        case 5:
          Wr(e, xt, On);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return kt(e, Fe()), e.callbackNode === n ? gb.bind(null, e) : null;
}
function Tp(e, t) {
  var n = Pl;
  return e.current.memoizedState.isDehydrated && (no(e, t).flags |= 256), e = Ru(e, t), e !== 2 && (t = xt, xt = n, t !== null && Ip(t)), e;
}
function Ip(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function p5(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!pn(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function pr(e, t) {
  for (t &= ~Cm, t &= ~vc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - cn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function J0(e) {
  if ((me & 6) !== 0)
    throw Error(j(327));
  li();
  var t = du(e, 0);
  if ((t & 1) === 0)
    return kt(e, Fe()), null;
  var n = Ru(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rp(e);
    r !== 0 && (t = r, n = Tp(e, r));
  }
  if (n === 1)
    throw n = oa, no(e, 0), pr(e, t), kt(e, Fe()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wr(e, xt, On), kt(e, Fe()), null;
}
function Em(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && (Si = Fe() + 500, pc && Dr());
  }
}
function co(e) {
  mr !== null && mr.tag === 0 && (me & 6) === 0 && li();
  var t = me;
  me |= 1;
  var n = Wt.transition, r = we;
  try {
    if (Wt.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, Wt.transition = n, me = t, (me & 6) === 0 && Dr();
  }
}
function Am() {
  $t = Zo.current, Pe(Zo);
}
function no(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, HE(n)), Ve !== null)
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch (am(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && vu();
          break;
        case 3:
          wi(), Pe(bt), Pe(it), gm();
          break;
        case 5:
          mm(r);
          break;
        case 4:
          wi();
          break;
        case 13:
          Pe(Te);
          break;
        case 19:
          Pe(Te);
          break;
        case 10:
          fm(r.type._context);
          break;
        case 22:
        case 23:
          Am();
      }
      n = n.return;
    }
  if (Ke = e, Ve = e = Pr(e.current, null), Ze = $t = t, qe = 0, oa = null, Cm = vc = uo = 0, xt = Pl = null, eo !== null) {
    for (t = 0; t < eo.length; t++)
      if (n = eo[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    eo = null;
  }
  return e;
}
function vb(e, t) {
  do {
    var n = Ve;
    try {
      if (cm(), js.current = Eu, $u) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        $u = !1;
      }
      if (so = 0, Qe = We = Ie = null, El = !1, ta = 0, km.current = null, n === null || n.return === null) {
        qe = 1, oa = t, Ve = null;
        break;
      }
      e: {
        var i = e, l = n.return, a = n, s = t;
        if (t = Ze, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s, c = a, f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = B0(l);
          if (g !== null) {
            g.flags &= -257, j0(g, l, a, i, t), g.mode & 1 && z0(i, u, t), t = g, s = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else
              h.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              z0(i, u, t), Pm();
              break e;
            }
            s = Error(j(426));
          }
        } else if (Re && a.mode & 1) {
          var w = B0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), j0(w, l, a, i, t), sm(bi(s, a));
            break e;
          }
        }
        i = s = bi(s, a), qe !== 4 && (qe = 2), Pl === null ? Pl = [i] : Pl.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = eb(i, s, t);
              I0(i, p);
              break e;
            case 1:
              a = s;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Er === null || !Er.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = tb(i, a, t);
                I0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wb(n);
    } catch (A) {
      t = A, Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function yb() {
  var e = Au.current;
  return Au.current = Eu, e === null ? Eu : e;
}
function Pm() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Ke === null || (uo & 268435455) === 0 && (vc & 268435455) === 0 || pr(Ke, Ze);
}
function Ru(e, t) {
  var n = me;
  me |= 2;
  var r = yb();
  (Ke !== e || Ze !== t) && (On = null, no(e, t));
  do
    try {
      h5();
      break;
    } catch (o) {
      vb(e, o);
    }
  while (1);
  if (cm(), me = n, Au.current = r, Ve !== null)
    throw Error(j(261));
  return Ke = null, Ze = 0, qe;
}
function h5() {
  for (; Ve !== null; )
    xb(Ve);
}
function m5() {
  for (; Ve !== null && !B$(); )
    xb(Ve);
}
function xb(e) {
  var t = Sb(e.alternate, e, $t);
  e.memoizedProps = e.pendingProps, t === null ? wb(e) : Ve = t, km.current = null;
}
function wb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = a5(n, t, $t), n !== null) {
        Ve = n;
        return;
      }
    } else {
      if (n = s5(n, t), n !== null) {
        n.flags &= 32767, Ve = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        qe = 6, Ve = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  qe === 0 && (qe = 5);
}
function Wr(e, t, n) {
  var r = we, o = Wt.transition;
  try {
    Wt.transition = null, we = 1, g5(e, t, n, r);
  } finally {
    Wt.transition = o, we = r;
  }
  return null;
}
function g5(e, t, n, r) {
  do
    li();
  while (mr !== null);
  if ((me & 6) !== 0)
    throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Y$(e, i), e === Ke && (Ve = Ke = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || cs || (cs = !0, kb(fu, function() {
    return li(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = Wt.transition, Wt.transition = null;
    var l = we;
    we = 1;
    var a = me;
    me |= 4, km.current = null, c5(e, n), hb(n, e), DE(up), pu = !!sp, up = sp = null, e.current = n, f5(n), j$(), me = a, we = l, Wt.transition = i;
  } else
    e.current = n;
  if (cs && (cs = !1, mr = e, _u = o), i = e.pendingLanes, i === 0 && (Er = null), U$(n.stateNode), kt(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pu)
    throw Pu = !1, e = _p, _p = null, e;
  return (_u & 1) !== 0 && e.tag !== 0 && li(), i = e.pendingLanes, (i & 1) !== 0 ? e === Rp ? _l++ : (_l = 0, Rp = e) : _l = 0, Dr(), null;
}
function li() {
  if (mr !== null) {
    var e = Jx(_u), t = Wt.transition, n = we;
    try {
      if (Wt.transition = null, we = 16 > e ? 16 : e, mr === null)
        var r = !1;
      else {
        if (e = mr, mr = null, _u = 0, (me & 6) !== 0)
          throw Error(j(331));
        var o = me;
        for (me |= 4, K = e.current; K !== null; ) {
          var i = K, l = i.child;
          if ((K.flags & 16) !== 0) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (K = u; K !== null; ) {
                  var c = K;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, K = f;
                  else
                    for (; K !== null; ) {
                      c = K;
                      var d = c.sibling, g = c.return;
                      if (fb(c), c === u) {
                        K = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = g, K = d;
                        break;
                      }
                      K = g;
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var v = h.child;
                if (v !== null) {
                  h.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
              K = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && l !== null)
            l.return = i, K = l;
          else
            e:
              for (; K !== null; ) {
                if (i = K, (i.flags & 2048) !== 0)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  p.return = i.return, K = p;
                  break e;
                }
                K = i.return;
              }
        }
        var y = e.current;
        for (K = y; K !== null; ) {
          l = K;
          var x = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && x !== null)
            x.return = l, K = x;
          else
            e:
              for (l = y; K !== null; ) {
                if (a = K, (a.flags & 2048) !== 0)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gc(9, a);
                    }
                  } catch (A) {
                    Ne(a, a.return, A);
                  }
                if (a === l) {
                  K = null;
                  break e;
                }
                var b = a.sibling;
                if (b !== null) {
                  b.return = a.return, K = b;
                  break e;
                }
                K = a.return;
              }
        }
        if (me = o, Dr(), kn && typeof kn.onPostCommitFiberRoot == "function")
          try {
            kn.onPostCommitFiberRoot(sc, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      we = n, Wt.transition = t;
    }
  }
  return !1;
}
function e1(e, t, n) {
  t = bi(n, t), t = eb(e, t, 1), e = $r(e, t, 1), t = dt(), e !== null && (_a(e, 1, t), kt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3)
    e1(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        e1(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Er === null || !Er.has(r))) {
          e = bi(n, e), e = tb(t, e, 1), t = $r(t, e, 1), e = dt(), t !== null && (_a(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function v5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & n, Ke === e && (Ze & n) === n && (qe === 4 || qe === 3 && (Ze & 130023424) === Ze && 500 > Fe() - $m ? no(e, 0) : Cm |= n), kt(e, t);
}
function bb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = es, es <<= 1, (es & 130023424) === 0 && (es = 4194304)));
  var n = dt();
  e = Un(e, t), e !== null && (_a(e, t, n), kt(e, n));
}
function y5(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), bb(e, n);
}
function x5(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), bb(e, n);
}
var Sb;
Sb = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, l5(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Re && (t.flags & 1048576) !== 0 && $w(t, wu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hs(e, t), e = t.pendingProps;
      var o = vi(t, it.current);
      ii(t, n), o = ym(null, t, r, e, o, n);
      var i = xm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, yu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, pm(t), o.updater = hc, t.stateNode = o, o._reactInternals = t, yp(t, r, e, n), t = bp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && lm(t), ct(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = b5(r), e = tn(r, e), o) {
          case 0:
            t = wp(null, t, r, e, n);
            break e;
          case 1:
            t = U0(null, t, r, e, n);
            break e;
          case 11:
            t = V0(null, t, r, e, n);
            break e;
          case 14:
            t = H0(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), wp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), U0(e, t, r, o, n);
    case 3:
      e: {
        if (ib(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, _w(e, t), ku(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = bi(Error(j(423)), t), t = W0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = bi(Error(j(424)), t), t = W0(e, t, r, n, o);
            break e;
          } else
            for (Et = Cr(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, rn = null, n = Ow(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yi(), r === o) {
            t = Wn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Nw(t), e === null && mp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, cp(r, o) ? l = null : i !== null && cp(r, i) && (t.flags |= 32), ob(e, t), ct(e, t, l, n), t.child;
    case 6:
      return e === null && mp(t), null;
    case 13:
      return lb(e, t, n);
    case 4:
      return hm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xi(t, null, r, n) : ct(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), V0(e, t, r, o, n);
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, $e(bu, r._currentValue), r._currentValue = l, i !== null)
          if (pn(i.value, l)) {
            if (i.children === o.children && !bt.current) {
              t = Wn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = jn(-1, n & -n), s.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), gp(
                      i.return,
                      n,
                      t
                    ), a.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10)
                l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (l = i.return, l === null)
                  throw Error(j(341));
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), gp(l, n, t), l = i.sibling;
              } else
                l = i.child;
              if (l !== null)
                l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (i = l.sibling, i !== null) {
                    i.return = l.return, l = i;
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ct(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ii(t, n), o = qt(o), r = r(o), t.flags |= 1, ct(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = tn(r, t.pendingProps), o = tn(r.type, o), H0(e, t, r, o, n);
    case 15:
      return nb(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), Hs(e, t), t.tag = 1, St(r) ? (e = !0, yu(t)) : e = !1, ii(t, n), Tw(t, r, o), yp(t, r, o, n), bp(null, t, r, !0, e, n);
    case 19:
      return ab(e, t, n);
    case 22:
      return rb(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function kb(e, t) {
  return Kx(e, t);
}
function w5(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, n, r) {
  return new w5(e, t, n, r);
}
function _m(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function b5(e) {
  if (typeof e == "function")
    return _m(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Gh)
      return 11;
    if (e === Kh)
      return 14;
  }
  return 2;
}
function Pr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qs(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    _m(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Vo:
          return ro(n.children, o, i, t);
        case Qh:
          l = 8, o |= 8;
          break;
        case Vd:
          return e = Ut(12, n, t, o | 2), e.elementType = Vd, e.lanes = i, e;
        case Hd:
          return e = Ut(13, n, t, o), e.elementType = Hd, e.lanes = i, e;
        case Ud:
          return e = Ut(19, n, t, o), e.elementType = Ud, e.lanes = i, e;
        case Ix:
          return yc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Rx:
                l = 10;
                break e;
              case Tx:
                l = 9;
                break e;
              case Gh:
                l = 11;
                break e;
              case Kh:
                l = 14;
                break e;
              case cr:
                l = 16, r = null;
                break e;
            }
          throw Error(j(130, e == null ? e : typeof e, ""));
      }
  return t = Ut(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function ro(e, t, n, r) {
  return e = Ut(7, e, r, t), e.lanes = n, e;
}
function yc(e, t, n, r) {
  return e = Ut(22, e, r, t), e.elementType = Ix, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mf(e, t, n) {
  return e = Ut(6, e, null, t), e.lanes = n, e;
}
function Df(e, t, n) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function S5(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gf(0), this.expirationTimes = gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Rm(e, t, n, r, o, i, l, a, s) {
  return e = new S5(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pm(i), e;
}
function k5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cb(e) {
  if (!e)
    return Ir;
  e = e._reactInternals;
  e: {
    if (xo(e) !== e || e.tag !== 1)
      throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (St(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (St(n))
      return kw(e, n, t);
  }
  return t;
}
function $b(e, t, n, r, o, i, l, a, s) {
  return e = Rm(n, r, !0, e, o, i, l, a, s), e.context = Cb(null), n = e.current, r = dt(), o = Ar(n), i = jn(r, o), i.callback = t != null ? t : null, $r(n, i, o), e.current.lanes = o, _a(e, o, r), kt(e, r), e;
}
function xc(e, t, n, r) {
  var o = t.current, i = dt(), l = Ar(o);
  return n = Cb(n), t.context === null ? t.context = n : t.pendingContext = n, t = jn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $r(o, t, l), e !== null && (fn(e, o, l, i), Bs(e, o, l)), l;
}
function Tu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function t1(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tm(e, t) {
  t1(e, t), (e = e.alternate) && t1(e, t);
}
function C5() {
  return null;
}
var Eb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Im(e) {
  this._internalRoot = e;
}
wc.prototype.render = Im.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  xc(e, t, null, null);
};
wc.prototype.unmount = Im.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    co(function() {
      xc(null, e, null, null);
    }), t[Hn] = null;
  }
};
function wc(e) {
  this._internalRoot = e;
}
wc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = nw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dr.length && t !== 0 && t < dr[n].priority; n++)
      ;
    dr.splice(n, 0, e), n === 0 && ow(e);
  }
};
function Om(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function n1() {
}
function $5(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Tu(l);
        i.call(u);
      };
    }
    var l = $b(t, r, e, 0, null, !1, !1, "", n1);
    return e._reactRootContainer = l, e[Hn] = l.current, Yl(e.nodeType === 8 ? e.parentNode : e), co(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Tu(s);
      a.call(u);
    };
  }
  var s = Rm(e, 0, !1, null, null, !1, !1, "", n1);
  return e._reactRootContainer = s, e[Hn] = s.current, Yl(e.nodeType === 8 ? e.parentNode : e), co(function() {
    xc(t, s, n, r);
  }), s;
}
function Sc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var s = Tu(l);
        a.call(s);
      };
    }
    xc(t, l, e, o);
  } else
    l = $5(n, t, e, o, r);
  return Tu(l);
}
ew = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ml(t.pendingLanes);
        n !== 0 && (Zh(t, n | 1), kt(t, Fe()), (me & 6) === 0 && (Si = Fe() + 500, Dr()));
      }
      break;
    case 13:
      co(function() {
        var r = Un(e, 1);
        if (r !== null) {
          var o = dt();
          fn(r, e, 1, o);
        }
      }), Tm(e, 1);
  }
};
Jh = function(e) {
  if (e.tag === 13) {
    var t = Un(e, 134217728);
    if (t !== null) {
      var n = dt();
      fn(t, e, 134217728, n);
    }
    Tm(e, 134217728);
  }
};
tw = function(e) {
  if (e.tag === 13) {
    var t = Ar(e), n = Un(e, t);
    if (n !== null) {
      var r = dt();
      fn(n, e, t, r);
    }
    Tm(e, t);
  }
};
nw = function() {
  return we;
};
rw = function(e, t) {
  var n = we;
  try {
    return we = e, t();
  } finally {
    we = n;
  }
};
ep = function(e, t, n) {
  switch (t) {
    case "input":
      if (Qd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = dc(r);
            if (!o)
              throw Error(j(90));
            Nx(r), Qd(r, o);
          }
        }
      }
      break;
    case "textarea":
      Dx(e, n);
      break;
    case "select":
      t = n.value, t != null && ti(e, !!n.multiple, t, !1);
  }
};
Hx = Em;
Ux = co;
var E5 = { usingClientEntryPoint: !1, Events: [Ta, qo, dc, jx, Vx, Em] }, el = { findFiberByHostInstance: Jr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, A5 = { bundleType: el.bundleType, version: el.version, rendererPackageName: el.rendererPackageName, rendererConfig: el.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: el.findFiberByHostInstance || C5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fs.isDisabled && fs.supportsFiber)
    try {
      sc = fs.inject(A5), kn = fs;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E5;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Om(t))
    throw Error(j(200));
  return k5(e, t, null, n);
};
It.createRoot = function(e, t) {
  if (!Om(e))
    throw Error(j(299));
  var n = !1, r = "", o = Eb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Rm(e, 1, !1, null, null, n, !1, r, o), e[Hn] = t.current, Yl(e.nodeType === 8 ? e.parentNode : e), new Im(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Qx(t), e = e === null ? null : e.stateNode, e;
};
It.flushSync = function(e) {
  return co(e);
};
It.hydrate = function(e, t, n) {
  if (!bc(t))
    throw Error(j(200));
  return Sc(null, e, t, !0, n);
};
It.hydrateRoot = function(e, t, n) {
  if (!Om(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Eb;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = $b(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Hn] = t.current, Yl(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wc(t);
};
It.render = function(e, t, n) {
  if (!bc(t))
    throw Error(j(200));
  return Sc(null, e, t, !1, n);
};
It.unmountComponentAtNode = function(e) {
  if (!bc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (co(function() {
    Sc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Hn] = null;
    });
  }), !0) : !1;
};
It.unstable_batchedUpdates = Em;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return Sc(e, t, n, !1, r);
};
It.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), e.exports = It;
})(Gt);
const Ab = /* @__PURE__ */ Lh(Gt.exports), ki = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(_5);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ m.exports.createElement(Op, Z({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Op, Z({}, r, {
    ref: t
  }), n);
});
ki.displayName = "Slot";
const Op = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...R5(r, n.props),
    ref: $x(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Op.displayName = "SlotClone";
const P5 = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function _5(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === P5;
}
function R5(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const T5 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], He = T5.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? ki : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(a, Z({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function I5(e, t) {
  e && Gt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function rt(e) {
  const t = m.exports.useRef(e);
  return m.exports.useEffect(() => {
    t.current = e;
  }), m.exports.useMemo(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function O5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e);
  m.exports.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Np = "dismissableLayer.update", N5 = "dismissableLayer.pointerDownOutside", M5 = "dismissableLayer.focusOutside";
let r1;
const D5 = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Nm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: a, onDismiss: s, ...u } = e, c = m.exports.useContext(D5), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), v = Ce(
    t,
    ($) => d($)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = L5(($) => {
    const P = $.target, T = [
      ...c.branches
    ].some(
      (R) => R.contains(P)
    );
    !A || T || (i == null || i($), a == null || a($), $.defaultPrevented || s == null || s());
  }, g), E = F5(($) => {
    const P = $.target;
    [
      ...c.branches
    ].some(
      (R) => R.contains(P)
    ) || (l == null || l($), a == null || a($), $.defaultPrevented || s == null || s());
  }, g);
  return O5(($) => {
    x === c.layers.size - 1 && (o == null || o($), !$.defaultPrevented && s && ($.preventDefault(), s()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (r1 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), o1(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = r1);
      };
  }, [
    f,
    g,
    r,
    c
  ]), m.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), o1());
  }, [
    f,
    c
  ]), m.exports.useEffect(() => {
    const $ = () => h({});
    return document.addEventListener(Np, $), () => document.removeEventListener(Np, $);
  }, []), /* @__PURE__ */ m.exports.createElement(He.div, Z({}, u, {
    ref: v,
    style: {
      pointerEvents: b ? A ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ye(e.onFocusCapture, E.onFocusCapture),
    onBlurCapture: ye(e.onBlurCapture, E.onBlurCapture),
    onPointerDownCapture: ye(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function L5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          Pb(N5, n, u, {
            discrete: !0
          });
        };
        var s = c;
        const u = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
          once: !0
        })) : c();
      }
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    onPointerDownCapture: () => r.current = !0
  };
}
function F5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Pb(M5, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function o1() {
  const e = new CustomEvent(Np);
  document.dispatchEvent(e);
}
function Pb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? I5(o, i) : o.dispatchEvent(i);
}
let Lf = 0;
function Mm() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : i1()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : i1()), Lf++, () => {
      Lf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Lf--;
    };
  }, []);
}
function i1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Ff = "focusScope.autoFocusOnMount", zf = "focusScope.autoFocusOnUnmount", l1 = {
  bubbles: !1,
  cancelable: !0
}, Dm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = m.exports.useState(null), u = rt(o), c = rt(i), f = m.exports.useRef(null), d = Ce(
    t,
    (v) => s(v)
  ), g = m.exports.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.exports.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (g.paused || !a)
          return;
        const b = x.target;
        a.contains(b) ? f.current = b : qr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || qr(f.current, {
          select: !0
        });
      };
      var v = p, w = y;
      return document.addEventListener("focusin", p), document.addEventListener("focusout", y), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y);
      };
    }
  }, [
    r,
    a,
    g.paused
  ]), m.exports.useEffect(() => {
    if (a) {
      s1.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(Ff, l1);
        a.addEventListener(Ff, u), a.dispatchEvent(p), p.defaultPrevented || (z5(U5(_b(a)), {
          select: !0
        }), document.activeElement === v && qr(a));
      }
      return () => {
        a.removeEventListener(Ff, u), setTimeout(() => {
          const p = new CustomEvent(zf, l1);
          a.addEventListener(zf, c), a.dispatchEvent(p), p.defaultPrevented || qr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(zf, c), s1.remove(g);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    g
  ]);
  const h = m.exports.useCallback((v) => {
    if (!n && !r || g.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = B5(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && qr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && qr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ m.exports.createElement(He.div, Z({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function z5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (qr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function B5(e) {
  const t = _b(e), n = a1(t, e), r = a1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function _b(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function a1(e, t) {
  for (const n of e)
    if (!j5(n, {
      upTo: t
    }))
      return n;
}
function j5(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function V5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function qr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && V5(e) && t && e.select();
  }
}
const s1 = H5();
function H5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = u1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = u1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function u1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function U5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Xe = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, W5 = Cx["useId".toString()] || (() => {
});
let q5 = 0;
function ai(e) {
  const [t, n] = m.exports.useState(W5());
  return Xe(() => {
    e || n(
      (r) => r != null ? r : String(q5++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function wo(e) {
  return e.split("-")[0];
}
function Oa(e) {
  return e.split("-")[1];
}
function Mi(e) {
  return ["top", "bottom"].includes(wo(e)) ? "x" : "y";
}
function Lm(e) {
  return e === "y" ? "height" : "width";
}
function c1(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, a = Mi(t), s = Lm(a), u = r[s] / 2 - o[s] / 2, c = wo(t), f = a === "x";
  let d;
  switch (c) {
    case "top":
      d = {
        x: i,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: l
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: l
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Oa(t)) {
    case "start":
      d[a] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[a] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const Q5 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let s = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: c
  } = c1(s, r, a), f = r, d = {}, g = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: v,
      fn: w
    } = i[h], {
      x: p,
      y,
      data: x,
      reset: b
    } = await w({
      x: u,
      y: c,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: d,
      rects: s,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = p != null ? p : u, c = y != null ? y : c, d = {
      ...d,
      [v]: {
        ...d[v],
        ...x
      }
    }, b && g <= 50) {
      g++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (s = b.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : b.rects), {
        x: u,
        y: c
      } = c1(s, f, a)), h = -1;
      continue;
    }
  }
  return {
    x: u,
    y: c,
    placement: f,
    strategy: o,
    middlewareData: d
  };
};
function G5(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rb(e) {
  return typeof e != "number" ? G5(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Iu(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function ia(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: a,
    strategy: s
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: g = 0
  } = t, h = Rb(g), w = a[d ? f === "floating" ? "reference" : "floating" : f], p = Iu(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: s
  })), y = Iu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: f === "floating" ? {
      ...l.floating,
      x: r,
      y: o
    } : l.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    strategy: s
  }) : l[f]);
  return {
    top: p.top - y.top + h.top,
    bottom: y.bottom - p.bottom + h.bottom,
    left: p.left - y.left + h.left,
    right: y.right - p.right + h.right
  };
}
const K5 = Math.min, Qr = Math.max;
function Mp(e, t, n) {
  return Qr(e, K5(t, n));
}
const f1 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e != null ? e : {}, {
      x: o,
      y: i,
      placement: l,
      rects: a,
      platform: s
    } = t;
    if (n == null)
      return {};
    const u = Rb(r), c = {
      x: o,
      y: i
    }, f = Mi(l), d = Oa(l), g = Lm(f), h = await s.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = a.reference[g] + a.reference[f] - c[f] - a.floating[g], y = c[f] - a.reference[f], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = a.floating[g]);
    const A = p / 2 - y / 2, S = u[v], E = b - h[g] - u[w], $ = b / 2 - h[g] / 2 + A, P = Mp(S, $, E), N = (d === "start" ? u[v] : u[w]) > 0 && $ !== P && a.reference[g] <= a.floating[g] ? $ < S ? S - $ : E - $ : 0;
    return {
      [f]: c[f] - N,
      data: {
        [f]: P,
        centerOffset: $ - P
      }
    };
  }
}), Y5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ou(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Y5[t]);
}
function X5(e, t, n) {
  n === void 0 && (n = !1);
  const r = Oa(e), o = Mi(e), i = Lm(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Ou(l)), {
    main: l,
    cross: Ou(l)
  };
}
const Z5 = {
  start: "end",
  end: "start"
};
function d1(e) {
  return e.replace(/start|end/g, (t) => Z5[t]);
}
const J5 = ["top", "right", "bottom", "left"];
function eA(e) {
  const t = Ou(e);
  return [d1(e), t, d1(t)];
}
const tA = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: i,
        initialPlacement: l,
        platform: a,
        elements: s
      } = t, {
        mainAxis: u = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: d = "bestFit",
        flipAlignment: g = !0,
        ...h
      } = e, v = wo(r), p = f || (v === l || !g ? [Ou(l)] : eA(l)), y = [l, ...p], x = await ia(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: T
        } = X5(r, i, await (a.isRTL == null ? void 0 : a.isRTL(s.floating)));
        b.push(x[P], x[T]);
      }
      if (A = [...A, {
        placement: r,
        overflows: b
      }], !b.every((P) => P <= 0)) {
        var S, E;
        const P = ((S = (E = o.flip) == null ? void 0 : E.index) != null ? S : 0) + 1, T = y[P];
        if (T)
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: T
            }
          };
        let R = "bottom";
        switch (d) {
          case "bestFit": {
            var $;
            const N = ($ = A.map((D) => [D, D.overflows.filter((z) => z > 0).reduce((z, F) => z + F, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : $[0].placement;
            N && (R = N);
            break;
          }
          case "initialPlacement":
            R = l;
            break;
        }
        if (r !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function p1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function h1(e) {
  return J5.some((t) => e[t] >= 0);
}
const nA = function(e) {
  let {
    strategy: t = "referenceHidden",
    ...n
  } = e === void 0 ? {} : e;
  return {
    name: "hide",
    async fn(r) {
      const {
        rects: o
      } = r;
      switch (t) {
        case "referenceHidden": {
          const i = await ia(r, {
            ...n,
            elementContext: "reference"
          }), l = p1(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: h1(l)
            }
          };
        }
        case "escaped": {
          const i = await ia(r, {
            ...n,
            altBoundary: !0
          }), l = p1(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: h1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function rA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = wo(n), a = Oa(n), s = Mi(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), s ? {
    x: g * c,
    y: d * u
  } : {
    x: d * u,
    y: g * c
  };
}
const oA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await rA(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Tb(e) {
  return e === "x" ? "y" : "x";
}
const iA = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x: p,
              y
            } = w;
            return {
              x: p,
              y
            };
          }
        },
        ...s
      } = e, u = {
        x: n,
        y: r
      }, c = await ia(t, s), f = Mi(wo(o)), d = Tb(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = Mp(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = Mp(y, h, x);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [d]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, lA = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: l
      } = t, {
        offset: a = 0,
        mainAxis: s = !0,
        crossAxis: u = !0
      } = e, c = {
        x: n,
        y: r
      }, f = Mi(o), d = Tb(f);
      let g = c[f], h = c[d];
      const v = typeof a == "function" ? a({
        ...i,
        placement: o
      }) : a, w = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (s) {
        const A = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[A] + w.mainAxis, E = i.reference[f] + i.reference[A] - w.mainAxis;
        g < S ? g = S : g > E && (g = E);
      }
      if (u) {
        var p, y, x, b;
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(wo(o)), E = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), $ = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < E ? h = E : h > $ && (h = $);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, aA = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: l,
        ...a
      } = e, s = await ia(t, a), u = wo(n), c = Oa(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Qr(s.left, 0), h = Qr(s.right, 0), v = Qr(s.top, 0), w = Qr(s.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Qr(s.top, s.bottom)) : s[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || h !== 0 ? g + h : Qr(s.left, s.right)) : s[d])
      }, y = await o.getDimensions(i.floating);
      l == null || l({
        ...t,
        ...p
      });
      const x = await o.getDimensions(i.floating);
      return y.width !== x.width || y.height !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ib(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Yn(e) {
  if (e == null)
    return window;
  if (!Ib(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Na(e) {
  return Yn(e).getComputedStyle(e);
}
function qn(e) {
  return Ib(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Ob() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function $n(e) {
  return e instanceof Yn(e).HTMLElement;
}
function Or(e) {
  return e instanceof Yn(e).Element;
}
function sA(e) {
  return e instanceof Yn(e).Node;
}
function Fm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Yn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function kc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Na(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function uA(e) {
  return ["table", "td", "th"].includes(qn(e));
}
function Nb(e) {
  const t = /firefox/i.test(Ob()), n = Na(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function Mb() {
  return !/^((?!chrome|android).)*safari/i.test(Ob());
}
const m1 = Math.min, Rl = Math.max, Nu = Math.round;
function Qn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect();
  let s = 1, u = 1;
  t && $n(e) && (s = e.offsetWidth > 0 && Nu(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Nu(a.height) / e.offsetHeight || 1);
  const c = Or(e) ? Yn(e) : window, f = !Mb() && n, d = (a.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / s, g = (a.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = a.width / s, v = a.height / u;
  return {
    width: h,
    height: v,
    top: g,
    right: d + h,
    bottom: g + v,
    left: d,
    x: d,
    y: g
  };
}
function Lr(e) {
  return ((sA(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Cc(e) {
  return Or(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Db(e) {
  return Qn(Lr(e)).left + Cc(e).scrollLeft;
}
function cA(e) {
  const t = Qn(e);
  return Nu(t.width) !== e.offsetWidth || Nu(t.height) !== e.offsetHeight;
}
function fA(e, t, n) {
  const r = $n(t), o = Lr(t), i = Qn(
    e,
    r && cA(t),
    n === "fixed"
  );
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((qn(t) !== "body" || kc(o)) && (l = Cc(t)), $n(t)) {
      const s = Qn(t, !0);
      a.x = s.x + t.clientLeft, a.y = s.y + t.clientTop;
    } else
      o && (a.x = Db(o));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function Lb(e) {
  return qn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fm(e) ? e.host : null) || Lr(e);
}
function g1(e) {
  return !$n(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function dA(e) {
  let t = Lb(e);
  for (Fm(t) && (t = t.host); $n(t) && !["html", "body"].includes(qn(t)); ) {
    if (Nb(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Dp(e) {
  const t = Yn(e);
  let n = g1(e);
  for (; n && uA(n) && getComputedStyle(n).position === "static"; )
    n = g1(n);
  return n && (qn(n) === "html" || qn(n) === "body" && getComputedStyle(n).position === "static" && !Nb(n)) ? t : n || dA(e) || t;
}
function v1(e) {
  if ($n(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = Qn(e);
  return {
    width: t.width,
    height: t.height
  };
}
function pA(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = $n(n), i = Lr(n);
  if (n === i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((qn(n) !== "body" || kc(i)) && (l = Cc(n)), $n(n))) {
    const s = Qn(n, !0);
    a.x = s.x + n.clientLeft, a.y = s.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + a.x,
    y: t.y - l.scrollTop + a.y
  };
}
function hA(e, t) {
  const n = Yn(e), r = Lr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Mb();
    (u || !u && t === "fixed") && (a = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function mA(e) {
  var t;
  const n = Lr(e), r = Cc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Rl(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Rl(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + Db(e);
  const s = -r.scrollTop;
  return Na(o || n).direction === "rtl" && (a += Rl(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function Fb(e) {
  const t = Lb(e);
  return ["html", "body", "#document"].includes(qn(t)) ? e.ownerDocument.body : $n(t) && kc(t) ? t : Fb(t);
}
function Mu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Fb(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Yn(r), l = o ? [i].concat(i.visualViewport || [], kc(r) ? r : []) : r, a = t.concat(l);
  return o ? a : a.concat(Mu(l));
}
function gA(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fm(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function vA(e, t) {
  const n = Qn(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
  return {
    top: r,
    left: o,
    x: o,
    y: r,
    right: o + e.clientWidth,
    bottom: r + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function y1(e, t, n) {
  return t === "viewport" ? Iu(hA(e, n)) : Or(t) ? vA(t, n) : Iu(mA(Lr(e)));
}
function yA(e) {
  const t = Mu(e), r = ["absolute", "fixed"].includes(Na(e).position) && $n(e) ? Dp(e) : e;
  return Or(r) ? t.filter((o) => Or(o) && gA(o, r) && qn(o) !== "body") : [];
}
function xA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? yA(t) : [].concat(n), r], a = l[0], s = l.reduce((u, c) => {
    const f = y1(t, c, o);
    return u.top = Rl(f.top, u.top), u.right = m1(f.right, u.right), u.bottom = m1(f.bottom, u.bottom), u.left = Rl(f.left, u.left), u;
  }, y1(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const wA = {
  getClippingRect: xA,
  convertOffsetParentRelativeRectToViewportRelativeRect: pA,
  isElement: Or,
  getDimensions: v1,
  getOffsetParent: Dp,
  getDocumentElement: Lr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: fA(t, Dp(n), r),
      floating: {
        ...v1(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Na(e).direction === "rtl"
};
function bA(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: a = !1
  } = r, s = o && !a, u = i && !a, c = s || u ? [...Or(e) ? Mu(e) : [], ...Mu(t)] : [];
  c.forEach((v) => {
    s && v.addEventListener("scroll", n, {
      passive: !0
    }), u && v.addEventListener("resize", n);
  });
  let f = null;
  if (l) {
    let v = !0;
    f = new ResizeObserver(() => {
      v || n(), v = !1;
    }), Or(e) && !a && f.observe(e), f.observe(t);
  }
  let d, g = a ? Qn(e) : null;
  a && h();
  function h() {
    const v = Qn(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    c.forEach((w) => {
      s && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (v = f) == null || v.disconnect(), f = null, a && cancelAnimationFrame(d);
  };
}
const SA = (e, t, n) => Q5(e, t, {
  platform: wA,
  ...n
});
var Lp = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function Fp(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Fp(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Fp(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function kA(e) {
  const t = m.exports.useRef(e);
  return Lp(() => {
    t.current = e;
  }), t;
}
function CA(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), a = kA(o), s = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
  Fp(f == null ? void 0 : f.map((x) => {
    let {
      options: b
    } = x;
    return b;
  }), t == null ? void 0 : t.map((x) => {
    let {
      options: b
    } = x;
    return b;
  })) || d(t);
  const g = m.exports.useCallback(() => {
    !i.current || !l.current || SA(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && Gt.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  Lp(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  Lp(() => (h.current = !0, () => {
    h.current = !1;
  }), []);
  const v = m.exports.useCallback(() => {
    if (typeof s.current == "function" && (s.current(), s.current = null), i.current && l.current)
      if (a.current) {
        const x = a.current(i.current, l.current, g);
        s.current = x;
      } else
        g();
  }, [g, a]), w = m.exports.useCallback((x) => {
    i.current = x, v();
  }, [v]), p = m.exports.useCallback((x) => {
    l.current = x, v();
  }, [v]), y = m.exports.useMemo(() => ({
    reference: i,
    floating: l
  }), []);
  return m.exports.useMemo(() => ({
    ...u,
    update: g,
    refs: y,
    reference: w,
    floating: p
  }), [u, g, y, w, p]);
}
const $A = (e) => {
  const {
    element: t,
    padding: n
  } = e;
  function r(o) {
    return Object.prototype.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(o) {
      return r(t) ? t.current != null ? f1({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? f1({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function EA(e) {
  const [t, n] = m.exports.useState(void 0);
  return Xe(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let l, a;
        if ("borderBoxSize" in i) {
          const s = i.borderBoxSize, u = Array.isArray(s) ? s[0] : s;
          l = u.inlineSize, a = u.blockSize;
        } else
          l = e.offsetWidth, a = e.offsetHeight;
        n({
          width: l,
          height: a
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const zb = "Popper", [zm, $c] = Ii(zb), [AA, Bb] = zm(zb), PA = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(AA, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, _A = "PopperAnchor", RA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Bb(_A, n), l = m.exports.useRef(null), a = Ce(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(He.div, Z({}, o, {
    ref: a
  }));
}), Du = "PopperContent", [TA, Vz] = zm(Du), [IA, OA] = zm(Du, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), NA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, a, s, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, E = Bb(Du, c), [$, P] = m.exports.useState(null), T = Ce(
    t,
    (rr) => P(rr)
  ), [R, N] = m.exports.useState(null), D = EA(R), z = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0, F = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0, _ = f + (g !== "center" ? "-" + g : ""), V = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, M = Array.isArray(w) ? w : [
    w
  ], I = M.length > 0, O = {
    padding: V,
    boundary: M.filter(DA),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: ne, y: ae, placement: ee, middlewareData: Q, update: ie } = CA({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: bA,
    middleware: [
      LA(),
      oA({
        mainAxis: d + F,
        alignmentAxis: h
      }),
      b ? iA({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? lA() : void 0,
        ...O
      }) : void 0,
      R ? $A({
        element: R,
        padding: v
      }) : void 0,
      b ? tA({
        ...O
      }) : void 0,
      aA({
        ...O,
        apply: ({ elements: rr, availableWidth: af, availableHeight: sf }) => {
          rr.floating.style.setProperty("--radix-popper-available-width", `${af}px`), rr.floating.style.setProperty("--radix-popper-available-height", `${sf}px`);
        }
      }),
      FA({
        arrowWidth: z,
        arrowHeight: F
      }),
      x ? nA({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(MA)
  });
  Xe(() => {
    k(E.anchor);
  }, [
    k,
    E.anchor
  ]);
  const xe = ne !== null && ae !== null, [ue, fe] = jb(ee), se = rt(A);
  Xe(() => {
    xe && (se == null || se());
  }, [
    xe,
    se
  ]);
  const at = (o = Q.arrow) === null || o === void 0 ? void 0 : o.x, st = (i = Q.arrow) === null || i === void 0 ? void 0 : i.y, Br = ((l = Q.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [Jn, er] = m.exports.useState();
  Xe(() => {
    $ && er(window.getComputedStyle($).zIndex);
  }, [
    $
  ]);
  const { hasParent: Ga, positionUpdateFns: tr } = OA(Du, c), nr = !Ga;
  m.exports.useLayoutEffect(() => {
    if (!nr)
      return tr.add(ie), () => {
        tr.delete(ie);
      };
  }, [
    nr,
    tr,
    ie
  ]), Xe(() => {
    nr && xe && Array.from(tr).reverse().forEach(
      (rr) => requestAnimationFrame(rr)
    );
  }, [
    nr,
    xe,
    tr
  ]);
  const Ui = {
    "data-side": ue,
    "data-align": fe,
    ...S,
    ref: T,
    style: {
      ...S.style,
      animation: xe ? void 0 : "none",
      opacity: (a = Q.hide) !== null && a !== void 0 && a.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ m.exports.createElement("div", {
    ref: C,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: J,
      left: 0,
      top: 0,
      transform: xe ? `translate3d(${Math.round(ne)}px, ${Math.round(ae)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: Jn,
      ["--radix-popper-transform-origin"]: [
        (s = Q.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = Q.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ m.exports.createElement(TA, {
    scope: c,
    placedSide: ue,
    onArrowChange: N,
    arrowX: at,
    arrowY: st,
    shouldHideArrow: Br
  }, nr ? /* @__PURE__ */ m.exports.createElement(IA, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: tr
  }, /* @__PURE__ */ m.exports.createElement(He.div, Ui)) : /* @__PURE__ */ m.exports.createElement(He.div, Ui)));
});
function MA(e) {
  return e !== void 0;
}
function DA(e) {
  return e !== null;
}
const LA = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), FA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, v] = jb(a), w = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], p = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + d / 2, y = ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0 ? i : 0) + g / 2;
    let x = "", b = "";
    return h === "bottom" ? (x = f ? w : `${p}px`, b = `${-g}px`) : h === "top" ? (x = f ? w : `${p}px`, b = `${s.floating.height + g}px`) : h === "right" ? (x = `${-g}px`, b = f ? w : `${y}px`) : h === "left" && (x = `${s.floating.width + g}px`, b = f ? w : `${y}px`), {
      data: {
        x,
        y: b
      }
    };
  }
});
function jb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Vb = PA, Hb = RA, Ub = NA, Wb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Ab.createPortal(/* @__PURE__ */ m.exports.createElement(He.div, Z({}, o, {
    ref: t
  })), r) : null;
});
function zA(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Fr = (e) => {
  const { present: t, children: n } = e, r = BA(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Fr.displayName = "Presence";
function BA(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = zA(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.exports.useEffect(() => {
    const u = ds(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), Xe(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = ds(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Xe(() => {
    if (t) {
      const u = (f) => {
        const g = ds(r.current).includes(f.animationName);
        f.target === t && g && Gt.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = ds(r.current));
      };
      return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      s("ANIMATION_END");
  }, [
    t,
    s
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: m.exports.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function ds(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Lu({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = jA({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = rt(n), s = m.exports.useCallback((u) => {
    if (i) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && a(f);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    a
  ]);
  return [
    l,
    s
  ];
}
function jA({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = rt(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var VA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Po = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), hs = {}, Bf = 0, qb = function(e) {
  return e && (e.host || qb(e.parentNode));
}, HA = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = qb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, UA = function(e, t, n, r) {
  var o = HA(t, Array.isArray(e) ? e : [e]);
  hs[n] || (hs[n] = /* @__PURE__ */ new WeakMap());
  var i = hs[n], l = [], a = /* @__PURE__ */ new Set(), s = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", v = (Po.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        Po.set(d, v), i.set(d, w), l.push(d), v === 1 && h && ps.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), a.clear(), Bf++, function() {
    l.forEach(function(f) {
      var d = Po.get(f) - 1, g = i.get(f) - 1;
      Po.set(f, d), i.set(f, g), d || (ps.has(f) || f.removeAttribute(r), ps.delete(f)), g || f.removeAttribute(n);
    }), Bf--, Bf || (Po = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), hs = {});
  };
}, Bm = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || VA(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), UA(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, bn = function() {
  return bn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, bn.apply(this, arguments);
};
function Qb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function WA(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Qs = "right-scroll-bar-position", Gs = "width-before-scroll-bar", qA = "with-scroll-bars-hidden", QA = "--removed-body-scroll-bar-size";
function GA(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function KA(e, t) {
  var n = m.exports.useState(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function YA(e, t) {
  return KA(t || null, function(n) {
    return e.forEach(function(r) {
      return GA(r, n);
    });
  });
}
var Ec = { exports: {} }, Ac = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XA = m.exports, ZA = Symbol.for("react.element"), JA = Symbol.for("react.fragment"), e3 = Object.prototype.hasOwnProperty, t3 = XA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n3 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gb(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    e3.call(t, r) && !n3.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ZA, type: e, key: i, ref: l, props: o, _owner: t3.current };
}
Ac.Fragment = JA;
Ac.jsx = Gb;
Ac.jsxs = Gb;
(function(e) {
  e.exports = Ac;
})(Ec);
const bo = Ec.exports.Fragment, B = Ec.exports.jsx, he = Ec.exports.jsxs;
function r3(e) {
  return e;
}
function o3(e, t) {
  t === void 0 && (t = r3);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var l = t(i, r);
      return n.push(l), function() {
        n = n.filter(function(a) {
          return a !== l;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var l = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), l = n;
      }
      var s = function() {
        var c = l;
        l = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(s);
      };
      u(), n = {
        push: function(c) {
          l.push(c), u();
        },
        filter: function(c) {
          return l = l.filter(c), n;
        }
      };
    }
  };
  return o;
}
function i3(e) {
  e === void 0 && (e = {});
  var t = o3(null);
  return t.options = bn({ async: !0, ssr: !1 }, e), t;
}
var Kb = function(e) {
  var t = e.sideCar, n = Qb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...bn({}, n)
  });
};
Kb.isSideCarExport = !0;
function l3(e, t) {
  return e.useMedium(t), Kb;
}
var Yb = i3(), jf = function() {
}, Pc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: jf,
    onWheelCapture: jf,
    onTouchMoveCapture: jf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = Qb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = YA([n, t]), A = bn(bn({}, y), o);
  return /* @__PURE__ */ he(bo, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Yb,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(a), bn(bn({}, A), {
      ref: b
    })) : /* @__PURE__ */ B(p, {
      ...bn({}, A, {
        className: s,
        ref: b
      }),
      children: a
    })]
  });
});
Pc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pc.classNames = {
  fullWidth: Gs,
  zeroRight: Qs
};
var a3 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function s3() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = a3();
  return t && e.setAttribute("nonce", t), e;
}
function u3(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function c3(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var f3 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = s3()) && (u3(t, n), c3(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, d3 = function() {
  var e = f3();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Xb = function() {
  var e = d3(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, p3 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vf = function(e) {
  return parseInt(e || "", 10) || 0;
}, h3 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Vf(n), Vf(r), Vf(o)];
}, m3 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return p3;
  var t = h3(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, g3 = Xb(), v3 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(qA, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Qs, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Gs, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Qs, " .").concat(Qs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Gs, " .").concat(Gs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(QA, ": ").concat(a, `px;
  }
`);
}, y3 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return m3(o);
  }, [o]);
  return /* @__PURE__ */ B(g3, {
    styles: v3(i, !t, o, n ? "" : "!important")
  });
}, zp = !1;
if (typeof window < "u")
  try {
    var ms = Object.defineProperty({}, "passive", {
      get: function() {
        return zp = !0, !0;
      }
    });
    window.addEventListener("test", ms, ms), window.removeEventListener("test", ms, ms);
  } catch {
    zp = !1;
  }
var _o = zp ? { passive: !1 } : !1, x3 = function(e) {
  return e.tagName === "TEXTAREA";
}, Zb = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !x3(e) && n[t] === "visible");
}, w3 = function(e) {
  return Zb(e, "overflowY");
}, b3 = function(e) {
  return Zb(e, "overflowX");
}, x1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Jb(e, n);
    if (r) {
      var o = eS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, S3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, k3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Jb = function(e, t) {
  return e === "v" ? w3(t) : b3(t);
}, eS = function(e, t) {
  return e === "v" ? S3(t) : k3(t);
}, C3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $3 = function(e, t, n, r, o) {
  var i = C3(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = eS(e, a), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && Jb(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, gs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, w1 = function(e) {
  return [e.deltaX, e.deltaY];
}, b1 = function(e) {
  return e && "current" in e ? e.current : e;
}, E3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, A3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, P3 = 0, Ro = [];
function _3(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(P3++)[0], i = m.exports.useState(function() {
    return Xb();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = WA([e.lockRef.current], (e.shards || []).map(b1), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = gs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = x1(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = x1(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return $3(P, w, v, P === "h" ? x : b, !0);
  }, []), s = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Ro.length || Ro[Ro.length - 1] !== i)) {
      var p = "deltaY" in w ? w1(w) : gs(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && E3(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(b1).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = m.exports.useCallback(function(v, w, p, y) {
    var x = {
      name: v,
      delta: w,
      target: p,
      should: y
    };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== x;
      });
    }, 1);
  }, []), c = m.exports.useCallback(function(v) {
    n.current = gs(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, w1(v), v.target, a(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, gs(v), v.target, a(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Ro.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, _o), document.addEventListener("touchmove", s, _o), document.addEventListener("touchstart", c, _o), function() {
      Ro = Ro.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, _o), document.removeEventListener("touchmove", s, _o), document.removeEventListener("touchstart", c, _o);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ he(bo, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: A3(o)
    }) : null, g ? /* @__PURE__ */ B(y3, {
      gapMode: "margin"
    }) : null]
  });
}
const R3 = l3(Yb, _3);
var tS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(Pc, {
    ...bn({}, e, {
      ref: t,
      sideCar: R3
    })
  });
});
tS.classNames = Pc.classNames;
const nS = tS, rS = "Popover", [oS, Hz] = Ii(rS, [
  $c
]), jm = $c(), [T3, Ma] = oS(rS), I3 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, a = jm(t), s = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = Lu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Vb, a, /* @__PURE__ */ m.exports.createElement(T3, {
    scope: t,
    contentId: ai(),
    triggerRef: s,
    open: f,
    onOpenChange: d,
    onOpenToggle: m.exports.useCallback(
      () => d(
        (g) => !g
      ),
      [
        d
      ]
    ),
    hasCustomAnchor: u,
    onCustomAnchorAdd: m.exports.useCallback(
      () => c(!0),
      []
    ),
    onCustomAnchorRemove: m.exports.useCallback(
      () => c(!1),
      []
    ),
    modal: l
  }, n));
}, O3 = "PopoverTrigger", N3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ma(O3, n), i = jm(n), l = Ce(t, o.triggerRef), a = /* @__PURE__ */ m.exports.createElement(He.button, Z({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": lS(o.open)
  }, r, {
    ref: l,
    onClick: ye(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? a : /* @__PURE__ */ m.exports.createElement(Hb, Z({
    asChild: !0
  }, i), a);
}), M3 = "PopoverPortal", [Uz, D3] = oS(M3, {
  forceMount: void 0
}), la = "PopoverContent", L3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = D3(la, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ma(la, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(Fr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(F3, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(z3, Z({}, o, {
    ref: t
  })));
}), F3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ma(la, e.__scopePopover), r = m.exports.useRef(null), o = Ce(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return Bm(l);
  }, []), /* @__PURE__ */ m.exports.createElement(nS, {
    as: ki,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(iS, Z({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ye(e.onCloseAutoFocus, (l) => {
      var a;
      l.preventDefault(), i.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: ye(e.onPointerDownOutside, (l) => {
      const a = l.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || s;
      i.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ye(
      e.onFocusOutside,
      (l) => l.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), z3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ma(la, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(iS, Z({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, o), !o.defaultPrevented) {
        var l;
        r.current || (l = n.triggerRef.current) === null || l === void 0 || l.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var i, l;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, o), o.defaultPrevented || (r.current = !0);
      const a = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(a)) && o.preventDefault();
    }
  }));
}), iS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Ma(la, n), g = jm(n);
  return Mm(), /* @__PURE__ */ m.exports.createElement(Dm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(Nm, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(Ub, Z({
    "data-state": lS(d.open),
    role: "dialog",
    id: d.contentId
  }, g, f, {
    ref: t,
    style: {
      ...f.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function lS(e) {
  return e ? "open" : "closed";
}
const B3 = I3, j3 = N3, V3 = L3, aS = "Dialog", [sS, Wz] = Ii(aS), [H3, Da] = sS(aS), U3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = m.exports.useRef(null), s = m.exports.useRef(null), [u = !1, c] = Lu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(H3, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: ai(),
    titleId: ai(),
    descriptionId: ai(),
    open: u,
    onOpenChange: c,
    onOpenToggle: m.exports.useCallback(
      () => c(
        (f) => !f
      ),
      [
        c
      ]
    ),
    modal: l
  }, n);
}, uS = "DialogPortal", [W3, q3] = sS(uS, {
  forceMount: void 0
}), Q3 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Da(uS, t);
  return /* @__PURE__ */ m.exports.createElement(W3, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(Fr, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(Wb, {
      asChild: !0,
      container: o
    }, l))
  ));
}, aa = "DialogContent", G3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = q3(aa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Da(aa, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(Fr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(K3, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(Y3, Z({}, o, {
    ref: t
  })));
}), K3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Da(aa, e.__scopeDialog), r = m.exports.useRef(null), o = Ce(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return Bm(i);
  }, []), /* @__PURE__ */ m.exports.createElement(cS, Z({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ye(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ye(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: ye(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), Y3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Da(aa, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(cS, Z({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, o), !o.defaultPrevented) {
        var l;
        r.current || (l = n.triggerRef.current) === null || l === void 0 || l.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var i, l;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, o), o.defaultPrevented || (r.current = !0);
      const a = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(a)) && o.preventDefault();
    }
  }));
}), cS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = Da(aa, n), s = m.exports.useRef(null), u = Ce(t, s);
  return Mm(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Dm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(Nm, Z({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": X3(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function X3(e) {
  return e ? "open" : "closed";
}
const Z3 = U3, J3 = Q3, eP = G3;
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pt.apply(this, arguments);
}
function si(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function tP(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function fS(...e) {
  return (t) => e.forEach(
    (n) => tP(n, t)
  );
}
function La(...e) {
  return m.exports.useCallback(fS(...e), e);
}
function nP(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = /* @__PURE__ */ m.exports.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: g, ...h } = f, v = (d == null ? void 0 : d[e][s]) || a, w = m.exports.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ m.exports.createElement(v.Provider, {
        value: w
      }, g);
    }
    function c(f, d) {
      const g = (d == null ? void 0 : d[e][s]) || a, h = m.exports.useContext(g);
      if (h)
        return h;
      if (l !== void 0)
        return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [
      u,
      c
    ];
  }
  const o = () => {
    const i = n.map((l) => /* @__PURE__ */ m.exports.createContext(l));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return m.exports.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: s
          }
        }),
        [
          a,
          s
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    rP(o, ...t)
  ];
}
function rP(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(i) {
      const l = r.reduce((a, { useScope: s, scopeName: u }) => {
        const f = s(i)[`__scope${u}`];
        return {
          ...a,
          ...f
        };
      }, {});
      return m.exports.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: l
        }),
        [
          l
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Bp = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, oP = Cx["useId".toString()] || (() => {
});
let iP = 0;
function Hf(e) {
  const [t, n] = m.exports.useState(oP());
  return Bp(() => {
    e || n(
      (r) => r != null ? r : String(iP++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function fo(e) {
  const t = m.exports.useRef(e);
  return m.exports.useEffect(() => {
    t.current = e;
  }), m.exports.useMemo(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function lP({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = aP({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = fo(n), s = m.exports.useCallback((u) => {
    if (i) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && a(f);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    a
  ]);
  return [
    l,
    s
  ];
}
function aP({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = fo(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const Vm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(uP);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ m.exports.createElement(jp, pt({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(jp, pt({}, r, {
    ref: t
  }), n);
});
Vm.displayName = "Slot";
const jp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...cP(r, n.props),
    ref: fS(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
jp.displayName = "SlotClone";
const sP = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function uP(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === sP;
}
function cP(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...a) => {
      i == null || i(...a), o == null || o(...a);
    } : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const fP = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], _c = fP.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? Vm : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(a, pt({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function dP(e, t) {
  e && Gt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function pP(e) {
  const t = fo(e);
  m.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Vp = "dismissableLayer.update", hP = "dismissableLayer.pointerDownOutside", mP = "dismissableLayer.focusOutside";
let S1;
const gP = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: a, ...s } = e, u = m.exports.useContext(gP), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = La(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = yP((S) => {
    const E = S.target, $ = [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    );
    !x || $ || (o == null || o(S), l == null || l(S), S.defaultPrevented || a == null || a());
  }), A = xP((S) => {
    const E = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || a == null || a());
  });
  return pP((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (S1 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), k1(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = S1);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), k1());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(Vp, S), () => document.removeEventListener(Vp, S);
  }, []), /* @__PURE__ */ m.exports.createElement(_c.div, pt({}, s, {
    ref: g,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: si(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: si(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: si(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function yP(e) {
  const t = fo(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          dS(hP, t, s, {
            discrete: !0
          });
        };
        var a = u;
        const s = {
          originalEvent: l
        };
        l.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = u, document.addEventListener("click", r.current, {
          once: !0
        })) : u();
      }
      n.current = !1;
    }, i = window.setTimeout(() => {
      document.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(i), document.removeEventListener("pointerdown", o), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    onPointerDownCapture: () => n.current = !0
  };
}
function xP(e) {
  const t = fo(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && dS(mP, t, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", r), () => document.removeEventListener("focusin", r);
  }, [
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function k1() {
  const e = new CustomEvent(Vp);
  document.dispatchEvent(e);
}
function dS(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? dP(o, i) : o.dispatchEvent(i);
}
const Uf = "focusScope.autoFocusOnMount", Wf = "focusScope.autoFocusOnUnmount", C1 = {
  bubbles: !1,
  cancelable: !0
}, wP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = m.exports.useState(null), u = fo(o), c = fo(i), f = m.exports.useRef(null), d = La(
    t,
    (v) => s(v)
  ), g = m.exports.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.exports.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (g.paused || !a)
          return;
        const b = x.target;
        a.contains(b) ? f.current = b : Gr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Gr(f.current, {
          select: !0
        });
      };
      var v = p, w = y;
      return document.addEventListener("focusin", p), document.addEventListener("focusout", y), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y);
      };
    }
  }, [
    r,
    a,
    g.paused
  ]), m.exports.useEffect(() => {
    if (a) {
      E1.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(Uf, C1);
        a.addEventListener(Uf, u), a.dispatchEvent(p), p.defaultPrevented || (bP(EP(pS(a)), {
          select: !0
        }), document.activeElement === v && Gr(a));
      }
      return () => {
        a.removeEventListener(Uf, u), setTimeout(() => {
          const p = new CustomEvent(Wf, C1);
          a.addEventListener(Wf, c), a.dispatchEvent(p), p.defaultPrevented || Gr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(Wf, c), E1.remove(g);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    g
  ]);
  const h = m.exports.useCallback((v) => {
    if (!n && !r || g.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = SP(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Gr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Gr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ m.exports.createElement(_c.div, pt({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function bP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Gr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function SP(e) {
  const t = pS(e), n = $1(t, e), r = $1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function pS(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function $1(e, t) {
  for (const n of e)
    if (!kP(n, {
      upTo: t
    }))
      return n;
}
function kP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function CP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && CP(e) && t && e.select();
  }
}
const E1 = $P();
function $P() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = A1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = A1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function A1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function EP(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const AP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Ab.createPortal(/* @__PURE__ */ m.exports.createElement(_c.div, pt({}, o, {
    ref: t
  })), r) : null;
});
function PP(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Rc = (e) => {
  const { present: t, children: n } = e, r = _P(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = La(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Rc.displayName = "Presence";
function _P(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = PP(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.exports.useEffect(() => {
    const u = vs(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), Bp(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = vs(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Bp(() => {
    if (t) {
      const u = (f) => {
        const g = vs(r.current).includes(f.animationName);
        f.target === t && g && Gt.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = vs(r.current));
      };
      return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      s("ANIMATION_END");
  }, [
    t,
    s
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: m.exports.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function vs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let qf = 0;
function RP() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : P1()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : P1()), qf++, () => {
      qf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), qf--;
    };
  }, []);
}
function P1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Sn = function() {
  return Sn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Sn.apply(this, arguments);
};
function hS(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function TP(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ks = "right-scroll-bar-position", Ys = "width-before-scroll-bar", IP = "with-scroll-bars-hidden", OP = "--removed-body-scroll-bar-size";
function NP(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function MP(e, t) {
  var n = m.exports.useState(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function DP(e, t) {
  return MP(t || null, function(n) {
    return e.forEach(function(r) {
      return NP(r, n);
    });
  });
}
function LP(e) {
  return e;
}
function FP(e, t) {
  t === void 0 && (t = LP);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var l = t(i, r);
      return n.push(l), function() {
        n = n.filter(function(a) {
          return a !== l;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var l = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), l = n;
      }
      var s = function() {
        var c = l;
        l = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(s);
      };
      u(), n = {
        push: function(c) {
          l.push(c), u();
        },
        filter: function(c) {
          return l = l.filter(c), n;
        }
      };
    }
  };
  return o;
}
function zP(e) {
  e === void 0 && (e = {});
  var t = FP(null);
  return t.options = Sn({ async: !0, ssr: !1 }, e), t;
}
var mS = function(e) {
  var t = e.sideCar, n = hS(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...Sn({}, n)
  });
};
mS.isSideCarExport = !0;
function BP(e, t) {
  return e.useMedium(t), mS;
}
var gS = zP(), Qf = function() {
}, Tc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Qf,
    onWheelCapture: Qf,
    onTouchMoveCapture: Qf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = hS(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = DP([n, t]), A = Sn(Sn({}, y), o);
  return /* @__PURE__ */ he(bo, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: gS,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(a), Sn(Sn({}, A), {
      ref: b
    })) : /* @__PURE__ */ B(p, {
      ...Sn({}, A, {
        className: s,
        ref: b
      }),
      children: a
    })]
  });
});
Tc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Tc.classNames = {
  fullWidth: Ys,
  zeroRight: Ks
};
var jP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function VP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = jP();
  return t && e.setAttribute("nonce", t), e;
}
function HP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function UP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var WP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = VP()) && (HP(t, n), UP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, qP = function() {
  var e = WP();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vS = function() {
  var e = qP(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, QP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Gf = function(e) {
  return parseInt(e || "", 10) || 0;
}, GP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Gf(n), Gf(r), Gf(o)];
}, KP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return QP;
  var t = GP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, YP = vS(), XP = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(IP, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ks, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ys, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ks, " .").concat(Ks, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ys, " .").concat(Ys, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(OP, ": ").concat(a, `px;
  }
`);
}, ZP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return KP(o);
  }, [o]);
  return /* @__PURE__ */ B(YP, {
    styles: XP(i, !t, o, n ? "" : "!important")
  });
}, Hp = !1;
if (typeof window < "u")
  try {
    var ys = Object.defineProperty({}, "passive", {
      get: function() {
        return Hp = !0, !0;
      }
    });
    window.addEventListener("test", ys, ys), window.removeEventListener("test", ys, ys);
  } catch {
    Hp = !1;
  }
var To = Hp ? { passive: !1 } : !1, JP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, e_ = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, _1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = yS(e, n);
    if (r) {
      var o = xS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, t_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, n_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, yS = function(e, t) {
  return e === "v" ? JP(t) : e_(t);
}, xS = function(e, t) {
  return e === "v" ? t_(t) : n_(t);
}, r_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, o_ = function(e, t, n, r, o) {
  var i = r_(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = xS(e, a), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && yS(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, xs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, R1 = function(e) {
  return [e.deltaX, e.deltaY];
}, T1 = function(e) {
  return e && "current" in e ? e.current : e;
}, i_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, l_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, a_ = 0, Io = [];
function s_(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(a_++)[0], i = m.exports.useState(function() {
    return vS();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = TP([e.lockRef.current], (e.shards || []).map(T1), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = xs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = _1(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = _1(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return o_(P, w, v, P === "h" ? x : b, !0);
  }, []), s = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Io.length || Io[Io.length - 1] !== i)) {
      var p = "deltaY" in w ? R1(w) : xs(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && i_(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(T1).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.preventDefault();
      }
    }
  }, []), u = m.exports.useCallback(function(v, w, p, y) {
    var x = {
      name: v,
      delta: w,
      target: p,
      should: y
    };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== x;
      });
    }, 1);
  }, []), c = m.exports.useCallback(function(v) {
    n.current = xs(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, R1(v), v.target, a(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, xs(v), v.target, a(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Io.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, To), document.addEventListener("touchmove", s, To), document.addEventListener("touchstart", c, To), function() {
      Io = Io.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, To), document.removeEventListener("touchmove", s, To), document.removeEventListener("touchstart", c, To);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ he(bo, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: l_(o)
    }) : null, g ? /* @__PURE__ */ B(ZP, {
      gapMode: "margin"
    }) : null]
  });
}
const u_ = BP(gS, s_);
var wS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(Tc, {
    ...Sn({}, e, {
      ref: t,
      sideCar: u_
    })
  });
});
wS.classNames = Tc.classNames;
const c_ = wS;
var f_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oo = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), bs = {}, Kf = 0, d_ = function(e, t, n) {
  t === void 0 && (t = f_(e)), n === void 0 && (n = "data-aria-hidden");
  var r = Array.isArray(e) ? e : [e];
  bs[n] || (bs[n] = /* @__PURE__ */ new WeakMap());
  var o = bs[n], i = [], l = /* @__PURE__ */ new Set(), a = function(u) {
    !u || l.has(u) || (l.add(u), a(u.parentNode));
  };
  r.forEach(a);
  var s = function(u) {
    !u || r.indexOf(u) >= 0 || Array.prototype.forEach.call(u.children, function(c) {
      if (l.has(c))
        s(c);
      else {
        var f = c.getAttribute("aria-hidden"), d = f !== null && f !== "false", g = (Oo.get(c) || 0) + 1, h = (o.get(c) || 0) + 1;
        Oo.set(c, g), o.set(c, h), i.push(c), g === 1 && d && ws.set(c, !0), h === 1 && c.setAttribute(n, "true"), d || c.setAttribute("aria-hidden", "true");
      }
    });
  };
  return s(t), l.clear(), Kf++, function() {
    i.forEach(function(u) {
      var c = Oo.get(u) - 1, f = o.get(u) - 1;
      Oo.set(u, c), o.set(u, f), c || (ws.has(u) || u.removeAttribute("aria-hidden"), ws.delete(u)), f || u.removeAttribute(n);
    }), Kf--, Kf || (Oo = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), bs = {});
  };
};
const bS = "Dialog", [SS, qz] = nP(bS), [p_, So] = SS(bS), h_ = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = m.exports.useRef(null), s = m.exports.useRef(null), [u = !1, c] = lP({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(p_, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: Hf(),
    titleId: Hf(),
    descriptionId: Hf(),
    open: u,
    onOpenChange: c,
    onOpenToggle: m.exports.useCallback(
      () => c(
        (f) => !f
      ),
      [
        c
      ]
    ),
    modal: l
  }, n);
}, kS = "DialogPortal", [m_, CS] = SS(kS, {
  forceMount: void 0
}), g_ = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = So(kS, t);
  return /* @__PURE__ */ m.exports.createElement(m_, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(Rc, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(AP, {
      asChild: !0,
      container: o
    }, l))
  ));
}, Up = "DialogOverlay", v_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = CS(Up, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = So(Up, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(Rc, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(y_, pt({}, o, {
    ref: t
  }))) : null;
}), y_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = So(Up, n);
  return /* @__PURE__ */ m.exports.createElement(c_, {
    as: Vm,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(_c.div, pt({
    "data-state": ES(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), sa = "DialogContent", x_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = CS(sa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = So(sa, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(Rc, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(w_, pt({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(b_, pt({}, o, {
    ref: t
  })));
}), w_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = So(sa, e.__scopeDialog), r = m.exports.useRef(null), o = La(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return d_(i);
  }, []), /* @__PURE__ */ m.exports.createElement($S, pt({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: si(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: si(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: si(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), b_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = So(sa, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement($S, pt({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, o), !o.defaultPrevented) {
        var l;
        r.current || (l = n.triggerRef.current) === null || l === void 0 || l.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var i, l;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, o), o.defaultPrevented || (r.current = !0);
      const a = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(a)) && o.preventDefault();
    }
  }));
}), $S = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = So(sa, n), s = m.exports.useRef(null), u = La(t, s);
  return RP(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(wP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(vP, pt({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": ES(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function ES(e) {
  return e ? "open" : "closed";
}
const S_ = h_, k_ = g_, C_ = v_, $_ = x_;
var I1 = 1, E_ = 0.9, A_ = 0.3, Yf = 0.1, P_ = 0, Xf = 0.999, __ = 0.9999, R_ = 0.99, O1 = /[\\\/\-_+.# \t"@\[\(\{&]/, T_ = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Wp(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? I1 : R_;
  for (var l = r.charAt(i), a = n.indexOf(l, o), s = 0, u, c, f; a >= 0; )
    u = Wp(e, t, n, r, a + 1, i + 1), u > s && (a === o ? u *= I1 : O1.test(e.charAt(a - 1)) ? (u *= E_, f = e.slice(o, a - 1).match(T_), f && o > 0 && (u *= Math.pow(Xf, f.length))) : O1.test(e.slice(o, a - 1)) ? (u *= P_, o > 0 && (u *= Math.pow(Xf, a - o))) : (u *= A_, o > 0 && (u *= Math.pow(Xf, a - o))), e.charAt(a) !== t.charAt(i) && (u *= __)), u < Yf && n.charAt(a - 1) === r.charAt(i + 1) && n.charAt(a - 1) !== r.charAt(i) && (c = Wp(e, t, n, r, a + 1, i + 2), c * Yf > u && (u = c * Yf)), u > s && (s = u), a = n.indexOf(l, a + 1);
  return s;
}
function I_(e, t) {
  return Wp(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var O_ = I_, N_ = '[cmdk-list-sizer=""]', tl = '[cmdk-group=""]', Zf = '[cmdk-group-items=""]', M_ = '[cmdk-group-heading=""]', Hm = '[cmdk-item=""]', N1 = `${Hm}:not([aria-disabled="true"])`, qp = "cmdk-item-select", Nn = "data-value", D_ = (e, t) => O_(e, t), AS = m.exports.createContext(void 0), Fa = () => m.exports.useContext(AS), PS = m.exports.createContext(void 0), Um = () => m.exports.useContext(PS), _S = m.exports.createContext(void 0), RS = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = Bo(() => {
    var I;
    return { search: "", value: (I = e.value) != null ? I : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = Bo(() => /* @__PURE__ */ new Set()), i = Bo(() => /* @__PURE__ */ new Map()), l = Bo(() => /* @__PURE__ */ new Map()), a = Bo(() => /* @__PURE__ */ new Set()), s = TS(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...v } = e, w = m.exports.useId(), p = m.exports.useId(), y = m.exports.useId(), x = Q_();
  Di(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, T), b.emit();
    }
  }, [f]);
  let b = m.exports.useMemo(() => ({ subscribe: (I) => (a.current.add(I), () => a.current.delete(I)), snapshot: () => r.current, setState: (I, O, k) => {
    var C, J, ne;
    if (!Object.is(r.current[I], O)) {
      if (r.current[I] = O, I === "search")
        P(), E(), x(1, $);
      else if (I === "value")
        if (((C = s.current) == null ? void 0 : C.value) !== void 0) {
          let ae = O != null ? O : "";
          (ne = (J = s.current).onValueChange) == null || ne.call(J, ae);
          return;
        } else
          k || x(5, T);
      b.emit();
    }
  }, emit: () => {
    a.current.forEach((I) => I());
  } }), []), A = m.exports.useMemo(() => ({ value: (I, O) => {
    O !== l.current.get(I) && (l.current.set(I, O), r.current.filtered.items.set(I, S(O)), x(2, () => {
      E(), b.emit();
    }));
  }, item: (I, O) => (o.current.add(I), O && (i.current.has(O) ? i.current.get(O).add(I) : i.current.set(O, /* @__PURE__ */ new Set([I]))), x(3, () => {
    P(), E(), r.current.value || $(), b.emit();
  }), () => {
    l.current.delete(I), o.current.delete(I), r.current.filtered.items.delete(I);
    let k = R();
    x(4, () => {
      P(), (k == null ? void 0 : k.getAttribute("id")) === I && $(), b.emit();
    });
  }), group: (I) => (i.current.has(I) || i.current.set(I, /* @__PURE__ */ new Set()), () => {
    l.current.delete(I), i.current.delete(I);
  }), filter: () => s.current.shouldFilter, label: u || e["aria-label"], commandRef: n, listId: w, inputId: y, labelId: p }), []);
  function S(I) {
    var C;
    var O;
    let k = (C = (O = s.current) == null ? void 0 : O.filter) != null ? C : D_;
    return I ? k(I, r.current.search) : 0;
  }
  function E() {
    if (!n.current || !r.current.search || s.current.shouldFilter === !1)
      return;
    let I = r.current.filtered.items, O = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), ne = 0;
      J.forEach((ae) => {
        let ee = I.get(ae);
        ne = Math.max(ee, ne);
      }), O.push([C, ne]);
    });
    let k = n.current.querySelector(N_);
    N().sort((C, J) => {
      var ee, Q;
      let ne = C.getAttribute(Nn), ae = J.getAttribute(Nn);
      return ((ee = I.get(ae)) != null ? ee : 0) - ((Q = I.get(ne)) != null ? Q : 0);
    }).forEach((C) => {
      let J = C.closest(Zf);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${Zf} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${Zf} > *`));
    }), O.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${tl}[${Nn}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function $() {
    let I = N().find((k) => !k.ariaDisabled), O = I == null ? void 0 : I.getAttribute(Nn);
    b.setState("value", O || void 0);
  }
  function P() {
    if (!r.current.search || s.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let I = 0;
    for (let O of o.current) {
      let k = l.current.get(O), C = S(k);
      r.current.filtered.items.set(O, C), C > 0 && I++;
    }
    for (let [O, k] of i.current)
      for (let C of k)
        if (r.current.filtered.items.get(C) > 0) {
          r.current.filtered.groups.add(O);
          break;
        }
    r.current.filtered.count = I;
  }
  function T() {
    var I, O, k;
    let C = R();
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (O = C.closest(tl)) == null ? void 0 : O.querySelector(M_)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function R() {
    var I;
    return (I = n.current) == null ? void 0 : I.querySelector(`${Hm}[aria-selected="true"]`);
  }
  function N() {
    return Array.from(n.current.querySelectorAll(N1));
  }
  function D(I) {
    let O = N()[I];
    O && b.setState("value", O.getAttribute(Nn));
  }
  function z(I) {
    var O;
    let k = R(), C = N(), J = C.findIndex((ae) => ae === k), ne = C[J + I];
    (O = s.current) != null && O.loop && (ne = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), ne && b.setState("value", ne.getAttribute(Nn));
  }
  function F(I) {
    let O = R(), k = O == null ? void 0 : O.closest(tl), C;
    for (; k && !C; )
      k = I > 0 ? W_(k, tl) : q_(k, tl), C = k == null ? void 0 : k.querySelector(N1);
    C ? b.setState("value", C.getAttribute(Nn)) : z(I);
  }
  let _ = () => D(N().length - 1), V = (I) => {
    I.preventDefault(), I.metaKey ? _() : I.altKey ? F(1) : z(1);
  }, M = (I) => {
    I.preventDefault(), I.metaKey ? D(0) : I.altKey ? F(-1) : z(-1);
  };
  return m.exports.createElement("div", { ref: za([n, t]), ...v, "cmdk-root": "", onKeyDown: (I) => {
    var O;
    if ((O = v.onKeyDown) == null || O.call(v, I), !I.defaultPrevented)
      switch (I.key) {
        case "n":
        case "j": {
          I.ctrlKey && V(I);
          break;
        }
        case "ArrowDown": {
          V(I);
          break;
        }
        case "p":
        case "k": {
          I.ctrlKey && M(I);
          break;
        }
        case "ArrowUp": {
          M(I);
          break;
        }
        case "Home": {
          I.preventDefault(), D(0);
          break;
        }
        case "End": {
          I.preventDefault(), _();
          break;
        }
        case "Enter": {
          I.preventDefault();
          let k = R();
          if (k) {
            let C = new Event(qp);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: G_ }, u), m.exports.createElement(PS.Provider, { value: b }, m.exports.createElement(AS.Provider, { value: A }, c)));
}), L_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(_S), i = Fa(), l = TS(e);
  Di(() => i.item(n, o), []);
  let a = IS(n, r, [e.value, e.children, r]), s = Um(), u = po((p) => p.value && p.value === a.current), c = po((p) => e.forceMount || i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(qp, f), () => p.removeEventListener(qp, f);
  }, [c, e.onSelect, e.disabled]);
  function f() {
    var p, y;
    d(), (y = (p = l.current).onSelect) == null || y.call(p, a.current);
  }
  function d() {
    s.setState("value", a.current, !0);
  }
  if (!c)
    return null;
  let { disabled: g, value: h, onSelect: v, ...w } = e;
  return m.exports.createElement("div", { ref: za([r, t]), ...w, id: n, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-disabled": g || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), F_ = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), a = m.exports.useRef(null), s = m.exports.useId(), u = Fa(), c = po((d) => e.forceMount || u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Di(() => u.group(i), []), IS(i, l, [e.value, e.heading, a]);
  let f = m.exports.createElement(_S.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: za([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: a, "cmdk-group-heading": "", "aria-hidden": !0, id: s }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? s : void 0 }, f));
}), z_ = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = po((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: za([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), B_ = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Um(), l = po((c) => c.search), a = po((c) => c.value), s = Fa(), u = m.exports.useMemo(() => {
    var c;
    let f = (c = s.commandRef.current) == null ? void 0 : c.querySelector(`${Hm}[${Nn}="${a}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, [a, s.commandRef]);
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": s.listId, "aria-labelledby": s.labelId, "aria-activedescendant": u, id: s.inputId, type: "text", value: o ? e.value : l, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), j_ = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = Fa();
  return m.exports.useEffect(() => {
    if (i.current && o.current) {
      let a = i.current, s = o.current, u, c = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let f = a.offsetHeight;
          s.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return c.observe(a), () => {
        cancelAnimationFrame(u), c.unobserve(a);
      };
    }
  }, []), m.exports.createElement("div", { ref: za([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), V_ = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: l, ...a } = e;
  return m.exports.createElement(S_, { open: n, onOpenChange: r }, m.exports.createElement(k_, { container: l }, m.exports.createElement(C_, { "cmdk-overlay": "", className: o }), m.exports.createElement($_, { "aria-label": e.label, "cmdk-dialog": "", className: i }, m.exports.createElement(RS, { ref: t, ...a }))));
}), H_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = po((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), U_ = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), an = Object.assign(RS, { List: j_, Item: L_, Input: B_, Group: F_, Separator: z_, Dialog: V_, Empty: H_, Loading: U_ });
function W_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function q_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function TS(e) {
  let t = m.exports.useRef(e);
  return Di(() => {
    t.current = e;
  }), t;
}
var Di = typeof window > "u" ? m.exports.useEffect : m.exports.useLayoutEffect;
function Bo(e) {
  let t = m.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function za(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function po(e) {
  let t = Um(), n = () => e(t.snapshot());
  return m.exports.useSyncExternalStore(t.subscribe, n, n);
}
function IS(e, t, n) {
  let r = m.exports.useRef(), o = Fa();
  return Di(() => {
    var i;
    let l = (() => {
      var a;
      for (let s of n) {
        if (typeof s == "string")
          return s.trim().toLowerCase();
        if (typeof s == "object" && "current" in s && s.current)
          return (a = s.current.textContent) == null ? void 0 : a.trim().toLowerCase();
      }
    })();
    o.value(e, l), (i = t.current) == null || i.setAttribute(Nn, l), r.current = l;
  }), r;
}
var Q_ = () => {
  let [e, t] = m.exports.useState(), n = Bo(() => /* @__PURE__ */ new Map());
  return Di(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, G_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let Wm = ja();
const re = (e) => Ba(e, Wm);
let qm = ja();
re.write = (e) => Ba(e, qm);
let Ic = ja();
re.onStart = (e) => Ba(e, Ic);
let Qm = ja();
re.onFrame = (e) => Ba(e, Qm);
let Gm = ja();
re.onFinish = (e) => Ba(e, Gm);
let ui = [];
re.setTimeout = (e, t) => {
  let n = re.now() + t, r = () => {
    let i = ui.findIndex((l) => l.cancel == r);
    ~i && ui.splice(i, 1), vr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return ui.splice(OS(n), 0, o), vr += 1, NS(), o;
};
let OS = (e) => ~(~ui.findIndex((t) => t.time > e) || ~ui.length);
re.cancel = (e) => {
  Ic.delete(e), Qm.delete(e), Wm.delete(e), qm.delete(e), Gm.delete(e);
};
re.sync = (e) => {
  Qp = !0, re.batchedUpdates(e), Qp = !1;
};
re.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...o) {
    t = o, re.onStart(n);
  }
  return r.handler = e, r.cancel = () => {
    Ic.delete(n), t = null;
  }, r;
};
let Km = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => Km = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : DS();
};
let gr = -1, vr = 0, Qp = !1;
function Ba(e, t) {
  Qp ? (t.delete(e), e(0)) : (t.add(e), NS());
}
function NS() {
  gr < 0 && (gr = 0, re.frameLoop !== "demand" && Km(MS));
}
function K_() {
  gr = -1;
}
function MS() {
  ~gr && (Km(MS), re.batchedUpdates(DS));
}
function DS() {
  let e = gr;
  gr = re.now();
  let t = OS(gr);
  t && (LS(ui.splice(0, t), (n) => n.handler()), vr -= t), Ic.flush(), Wm.flush(e ? Math.min(64, gr - e) : 16.667), Qm.flush(), qm.flush(), Gm.flush(), vr || K_();
}
function ja() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      vr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return vr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), vr -= t.size, LS(t, (r) => r(n) && e.add(r)), vr += e.size, t = e);
    }
  };
}
function LS(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
function Gp() {
}
const Y_ = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), W = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function Mn(e, t) {
  if (W.arr(e)) {
    if (!W.arr(t) || e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  return e === t;
}
const de = (e, t) => e.forEach(t);
function En(e, t, n) {
  if (W.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
const At = (e) => W.und(e) ? [] : W.arr(e) ? e : [e];
function Tl(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), de(n, t);
  }
}
const vl = (e, ...t) => Tl(e, (n) => n(...t)), FS = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Ym, zS, _r = null, BS = !1, Xm = Gp;
const X_ = (e) => {
  e.to && (zS = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (_r = e.colors), e.skipAnimation != null && (BS = e.skipAnimation), e.createStringInterpolator && (Ym = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Xm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
};
var An = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Ym;
  },
  get to() {
    return zS;
  },
  get colors() {
    return _r;
  },
  get skipAnimation() {
    return BS;
  },
  get willAdvance() {
    return Xm;
  },
  assign: X_
});
const Il = /* @__PURE__ */ new Set();
let jt = [], Jf = [], Fu = 0;
const Oc = {
  get idle() {
    return !Il.size && !jt.length;
  },
  start(e) {
    Fu > e.priority ? (Il.add(e), re.onStart(Z_)) : (jS(e), re(Kp));
  },
  advance: Kp,
  sort(e) {
    if (Fu)
      re.onFrame(() => Oc.sort(e));
    else {
      const t = jt.indexOf(e);
      ~t && (jt.splice(t, 1), VS(e));
    }
  },
  clear() {
    jt = [], Il.clear();
  }
};
function Z_() {
  Il.forEach(jS), Il.clear(), re(Kp);
}
function jS(e) {
  jt.includes(e) || VS(e);
}
function VS(e) {
  jt.splice(J_(jt, (t) => t.priority > e.priority), 0, e);
}
function Kp(e) {
  const t = Jf;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    Fu = r.priority, r.idle || (Xm(r), r.advance(e), r.idle || t.push(r));
  }
  return Fu = 0, Jf = jt, Jf.length = 0, jt = t, jt.length > 0;
}
function J_(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const e4 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, sn = "[-+]?\\d*\\.?\\d+", zu = sn + "%";
function Nc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const t4 = new RegExp("rgb" + Nc(sn, sn, sn)), n4 = new RegExp("rgba" + Nc(sn, sn, sn, sn)), r4 = new RegExp("hsl" + Nc(sn, zu, zu)), o4 = new RegExp("hsla" + Nc(sn, zu, zu, sn)), i4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, l4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, a4 = /^#([0-9a-fA-F]{6})$/, s4 = /^#([0-9a-fA-F]{8})$/;
function u4(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = a4.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : _r && _r[e] !== void 0 ? _r[e] : (t = t4.exec(e)) ? (No(t[1]) << 24 | No(t[2]) << 16 | No(t[3]) << 8 | 255) >>> 0 : (t = n4.exec(e)) ? (No(t[1]) << 24 | No(t[2]) << 16 | No(t[3]) << 8 | L1(t[4])) >>> 0 : (t = i4.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = s4.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = l4.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = r4.exec(e)) ? (M1(D1(t[1]), Ss(t[2]), Ss(t[3])) | 255) >>> 0 : (t = o4.exec(e)) ? (M1(D1(t[1]), Ss(t[2]), Ss(t[3])) | L1(t[4])) >>> 0 : null;
}
function ed(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function M1(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = ed(o, r, e + 1 / 3), l = ed(o, r, e), a = ed(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function No(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function D1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function L1(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ss(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function F1(e) {
  let t = u4(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const ua = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return ua({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return Ym(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    const c = f4(u, i);
    return c4(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function c4(e, t, n, r, o, i, l, a, s) {
  let u = s ? s(e) : e;
  if (u < t) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = t);
  }
  if (u > n) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = n);
  }
  return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u = u + r : u = u * (o - r) + r, u);
}
function f4(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function Yp() {
  return Yp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yp.apply(this, arguments);
}
const Ci = Symbol.for("FluidValue.get"), ho = Symbol.for("FluidValue.observers"), Ft = (e) => Boolean(e && e[Ci]), vt = (e) => e && e[Ci] ? e[Ci]() : e, z1 = (e) => e[ho] || null;
function d4(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ca(e, t) {
  let n = e[ho];
  n && n.forEach((r) => {
    d4(r, t);
  });
}
class HS {
  constructor(t) {
    if (this[Ci] = void 0, this[ho] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    p4(this, t);
  }
}
const p4 = (e, t) => US(e, Ci, t);
function Li(e, t) {
  if (e[Ci]) {
    let n = e[ho];
    n || US(e, ho, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function fa(e, t) {
  let n = e[ho];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[ho] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const US = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Xs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, h4 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, B1 = new RegExp(`(${Xs.source})(%|[a-z]+)`, "i"), m4 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Mc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, WS = (e) => {
  const [t, n] = g4(e);
  if (!t || FS())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Mc.test(n))
      return WS(n);
    if (n)
      return n;
  }
  return e;
}, g4 = (e) => {
  const t = Mc.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let td;
const v4 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, qS = (e) => {
  td || (td = _r ? new RegExp(`(${Object.keys(_r).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => vt(i).replace(Mc, WS).replace(h4, F1).replace(td, F1)), n = t.map((i) => i.match(Xs).map(Number)), o = n[0].map((i, l) => n.map((a) => {
    if (!(l in a))
      throw Error('The arity of each "output" value must be equal');
    return a[l];
  })).map((i) => ua(Yp({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const a = !B1.test(t[0]) && ((l = t.find((u) => B1.test(u))) == null ? void 0 : l.replace(Xs, ""));
    let s = 0;
    return t[0].replace(Xs, () => `${o[s++](i)}${a || ""}`).replace(m4, v4);
  };
}, Zm = "react-spring: ", QS = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Zm}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, y4 = QS(console.warn);
function x4() {
  y4(`${Zm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const w4 = QS(console.warn);
function b4() {
  w4(`${Zm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Dc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !FS() && Mc.test(e) || e in (_r || {}));
}
const Jm = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, S4 = () => {
  const e = m.exports.useRef(!1);
  return Jm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function GS() {
  const e = m.exports.useState()[1], t = S4();
  return () => {
    t.current && e(Math.random());
  };
}
function k4(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && C4(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function C4(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const KS = (e) => m.exports.useEffect(e, $4), $4 = [];
function j1(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const da = Symbol.for("Animated:node"), E4 = (e) => !!e && e[da] === e, yn = (e) => e && e[da], eg = (e, t) => Y_(e, da, t), Lc = (e) => e && e[da] && e[da].getPayload();
class YS {
  constructor() {
    this.payload = void 0, eg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Fi extends YS {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Fi(t);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(t, n) {
    return W.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0);
  }
  reset() {
    const {
      done: t
    } = this;
    this.done = !1, W.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null);
  }
}
class $i extends Fi {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = ua({
      output: [t, t]
    });
  }
  static create(t) {
    return new $i(t);
  }
  getValue() {
    let t = this._string;
    return t == null ? this._string = this._toString(this._value) : t;
  }
  setValue(t) {
    if (W.str(t)) {
      if (t == this._string)
        return !1;
      this._string = t, this._value = 1;
    } else if (super.setValue(t))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(t) {
    t && (this._toString = ua({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const Bu = {
  dependencies: null
};
class Fc extends YS {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return En(this.source, (r, o) => {
      E4(r) ? n[o] = r.getValue(t) : Ft(r) ? n[o] = vt(r) : t || (n[o] = r);
    }), n;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && de(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      const n = /* @__PURE__ */ new Set();
      return En(t, this._addToPayload, n), Array.from(n);
    }
  }
  _addToPayload(t) {
    Bu.dependencies && Ft(t) && Bu.dependencies.add(t);
    const n = Lc(t);
    n && de(n, (r) => this.add(r));
  }
}
class tg extends Fc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new tg(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(A4)), !0);
  }
}
function A4(e) {
  return (Dc(e) ? $i : Fi).create(e);
}
function Xp(e) {
  const t = yn(e);
  return t ? t.constructor : W.arr(e) ? tg : Dc(e) ? $i : Fi;
}
function Zp() {
  return Zp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zp.apply(this, arguments);
}
const V1 = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = R4(o, h);
    }, [o]), [a, s] = _4(r, t), u = GS(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new P4(c, s), d = m.exports.useRef();
    Jm(() => (d.current = f, de(s, (h) => Li(h, f)), () => {
      d.current && (de(d.current.deps, (h) => fa(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), KS(() => () => {
      const h = d.current;
      de(h.deps, (v) => fa(v, h));
    });
    const g = t.getComponentProps(a.getValue());
    return /* @__PURE__ */ B(e, {
      ...g,
      ref: l
    });
  });
};
class P4 {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && re.write(this.update);
  }
}
function _4(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Bu.dependencies = n, e.style && (e = Zp({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Fc(e), Bu.dependencies = null, [e, n];
}
function R4(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const H1 = Symbol.for("AnimatedComponent"), T4 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Fc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const a = U1(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = V1(l, o)) : l = l[H1] || (l[H1] = V1(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return En(e, (l, a) => {
    W.arr(e) && (a = U1(l)), i[a] = i(l);
  }), {
    animated: i
  };
}, U1 = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
function Ge() {
  return Ge = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ge.apply(this, arguments);
}
function Xr(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Ol = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), XS = (e, t) => W.obj(e) ? t && e[t] : e, ZS = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, I4 = (e) => e, ng = (e, t = I4) => {
  let n = O4;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, O4 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], N4 = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function M4(e) {
  const t = {};
  let n = 0;
  if (En(e, (r, o) => {
    N4[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function JS(e) {
  const t = M4(e);
  if (t) {
    const n = {
      to: t
    };
    return En(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ge({}, e);
}
function pa(e) {
  return e = vt(e), W.arr(e) ? e.map(pa) : Dc(e) ? An.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function D4(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Jp(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function L4(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function F4(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const z4 = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
}, ju = 1.70158, ks = ju * 1.525, W1 = ju + 1, q1 = 2 * Math.PI / 3, Q1 = 2 * Math.PI / 4.5, Cs = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, B4 = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
  easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
  easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
  easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
  easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2),
  easeOutSine: (e) => Math.sin(e * Math.PI / 2),
  easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
  easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
  easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
  easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
  easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
  easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
  easeInBack: (e) => W1 * e * e * e - ju * e * e,
  easeOutBack: (e) => 1 + W1 * Math.pow(e - 1, 3) + ju * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((ks + 1) * 2 * e - ks) / 2 : (Math.pow(2 * e - 2, 2) * ((ks + 1) * (e * 2 - 2) + ks) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * q1),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * q1) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Q1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Q1) / 2 + 1,
  easeInBounce: (e) => 1 - Cs(1 - e),
  easeOutBounce: Cs,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Cs(1 - 2 * e)) / 2 : (1 + Cs(2 * e - 1)) / 2
}, eh = Ge({}, z4.default, {
  mass: 1,
  damping: 1,
  easing: B4.linear,
  clamp: !1
});
class j4 {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, eh);
  }
}
function V4(e, t, n) {
  n && (n = Ge({}, n), G1(n, t), t = Ge({}, n, t)), G1(e, t), Object.assign(e, t);
  for (const l in eh)
    e[l] == null && (e[l] = eh[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function G1(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const K1 = [];
class H4 {
  constructor() {
    this.changed = !1, this.values = K1, this.toValues = null, this.fromValues = K1, this.to = void 0, this.from = void 0, this.config = new j4(), this.immediate = !1;
  }
}
function ek(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, a) => {
    var s;
    let u, c, f = Ol((s = n.cancel) != null ? s : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Ol(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Ol(v, t)), u = Xr(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
    }
    function d() {
      o.resumeQueue.add(g), o.timeouts.delete(c), c.cancel(), u = c.time - re.now();
    }
    function g() {
      u > 0 && !An.skipAnimation ? (o.delayed = !0, c = re.setTimeout(h, u), o.pauseQueue.add(d), o.timeouts.add(c)) : h();
    }
    function h() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0);
      try {
        i.start(Ge({}, n, {
          callId: e,
          cancel: f
        }), l);
      } catch (v) {
        a(v);
      }
    }
  });
}
const rg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? ci(e.get()) : t.every((n) => n.noop) ? tk(e.get()) : on(e.get(), t.every((n) => n.finished)), tk = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), on = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), ci = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function nk(e, t, n, r) {
  const {
    callId: o,
    parentId: i,
    onRest: l
  } = t, {
    asyncTo: a,
    promise: s
  } = n;
  return !i && e === a && !t.reset ? s : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    const u = ng(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && ci(r) || o !== n.asyncId && on(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new Y1(), x = new X1();
      return (async () => {
        if (An.skipAnimation)
          throw ha(n), x.result = on(r, !1), f(x), x;
        g(y);
        const b = W.obj(w) ? Ge({}, w) : Ge({}, p, {
          to: w
        });
        b.parentId = o, En(u, (S, E) => {
          W.und(b[E]) && (b[E] = S);
        });
        const A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    };
    let v;
    if (An.skipAnimation)
      return ha(n), on(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = on(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof Y1)
        v = w.result;
      else if (w instanceof X1)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return W.fun(l) && re.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function ha(e, t) {
  Tl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class Y1 extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class X1 extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const th = (e) => e instanceof og;
let U4 = 1;
class og extends HS {
  constructor(...t) {
    super(...t), this.id = U4++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  get() {
    const t = yn(this);
    return t && t.getValue();
  }
  to(...t) {
    return An.to(this, t);
  }
  interpolate(...t) {
    return x4(), An.to(this, t);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(t) {
    t == 1 && this._attach();
  }
  observerRemoved(t) {
    t == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(t, n = !1) {
    ca(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Oc.sort(this), ca(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const mo = Symbol.for("SpringPhase"), rk = 1, nh = 2, rh = 4, nd = (e) => (e[mo] & rk) > 0, lr = (e) => (e[mo] & nh) > 0, nl = (e) => (e[mo] & rh) > 0, Z1 = (e, t) => t ? e[mo] |= nh | rk : e[mo] &= ~nh, J1 = (e, t) => t ? e[mo] |= rh : e[mo] &= ~rh;
class W4 extends og {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new H4(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !W.und(t) || !W.und(n)) {
      const r = W.obj(t) ? Ge({}, t) : Ge({}, n, {
        from: t
      });
      W.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(lr(this) || this._state.asyncTo) || nl(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    const t = yn(this);
    return t instanceof Fi ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return nd(this);
  }
  get isAnimating() {
    return lr(this);
  }
  get isPaused() {
    return nl(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1;
    const o = this.animation;
    let {
      config: i,
      toValues: l
    } = o;
    const a = Lc(o.to);
    !a && Ft(o.to) && (l = At(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == $i ? 1 : a ? a[f].lastPosition : l[f];
      let g = o.immediate, h = d;
      if (!g) {
        if (h = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let v = c.elapsedTime += t;
        const w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = W.arr(i.velocity) ? i.velocity[f] : i.velocity;
        let y;
        if (W.und(i.duration))
          if (i.decay) {
            const x = i.decay === !0 ? 0.998 : i.decay, b = Math.exp(-(1 - x) * v);
            h = w + p / (1 - x) * (1 - b), g = Math.abs(c.lastPosition - h) < 0.1, y = p * b;
          } else {
            y = c.lastVelocity == null ? p : c.lastVelocity;
            const x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3)), b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !W.und(A), E = w == d ? c.v0 > 0 : w < d;
            let $, P = !1;
            const T = 1, R = Math.ceil(t / T);
            for (let N = 0; N < R && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++N) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              const D = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * y, F = (D + z) / i.mass;
              y = y + F * T, h = h + y * T;
            }
          }
        else {
          let x = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, v = c.elapsedTime += t)), x = (i.progress || 0) + v / this._memoizedDuration, x = x > 1 ? 1 : x < 0 ? 0 : x, c.durationProgress = x), h = w + i.easing(x) * (d - w), y = (h - c.lastPosition) / t, g = x == 1;
        }
        c.lastVelocity = y, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      a && !a[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    const s = yn(this), u = s.getValue();
    if (n) {
      const c = vt(o.to);
      (u !== c || r) && !i.decay ? (s.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(t) {
    return re.batchedUpdates(() => {
      this._stop(), this._focus(t), this._set(t);
    }), this;
  }
  pause() {
    this._update({
      pause: !0
    });
  }
  resume() {
    this._update({
      pause: !1
    });
  }
  finish() {
    if (lr(this)) {
      const {
        to: t,
        config: n
      } = this.animation;
      re.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(t, !1), this._stop();
      });
    }
    return this;
  }
  update(t) {
    return (this.queue || (this.queue = [])).push(t), this;
  }
  start(t, n) {
    let r;
    return W.und(t) ? (r = this.queue || [], this.queue = []) : r = [W.obj(t) ? t : Ge({}, n, {
      to: t
    })], Promise.all(r.map((o) => this._update(o))).then((o) => rg(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), ha(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({
      reset: !0
    });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    const n = this.key || "";
    let {
      to: r,
      from: o
    } = t;
    r = W.obj(r) ? r[n] : r, (r == null || Jp(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return nd(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), W.und(o) ? yn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ge({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, ng(r, (s, u) => /^on/.test(u) ? XS(s, o) : s)), tv(this, r, "onProps"), ol(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const a = this._state;
    return ek(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: a,
      actions: {
        pause: () => {
          nl(this) || (J1(this, !0), vl(a.pauseQueue), ol(this, "onPause", on(this, rl(this, this.animation.to)), this));
        },
        resume: () => {
          nl(this) && (J1(this, !1), lr(this) && this._resume(), vl(a.resumeQueue), ol(this, "onResume", on(this, rl(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((s) => {
      if (r.loop && s.finished && !(n && s.noop)) {
        const u = ok(r);
        if (u)
          return this._update(u, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(ci(this));
    const o = !W.und(t.to), i = !W.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(ci(this));
    const {
      key: l,
      defaultProps: a,
      animation: s
    } = this, {
      to: u,
      from: c
    } = s;
    let {
      to: f = u,
      from: d = c
    } = t;
    i && !o && (!n.default || W.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    const g = !Mn(d, c);
    g && (s.from = d), d = vt(d);
    const h = !Mn(f, u);
    h && this._focus(f);
    const v = Jp(n.to), {
      config: w
    } = s, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && V4(w, Xr(n.config, l), n.config !== a.config ? Xr(a.config, l) : void 0);
    let x = yn(this);
    if (!x || W.und(f))
      return r(on(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Ol(n.reset, l), A = b ? d : this.get(), S = pa(f), E = W.num(S) || W.arr(S) || Dc(S), $ = !v && (!E || Ol(a.immediate || n.immediate, l));
    if (h) {
      const N = Xp(f);
      if (N !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${N.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let T = Ft(f), R = !1;
    if (!T) {
      const N = b || !nd(this) && g;
      (h || N) && (R = Mn(pa(A), S), T = !R), (!Mn(s.immediate, $) && !$ || !Mn(w.decay, p) || !Mn(w.velocity, y)) && (T = !0);
    }
    if (R && lr(this) && (s.changed && !b ? T = !0 : T || this._stop(u)), !v && ((T || Ft(u)) && (s.values = x.getPayload(), s.toValues = Ft(f) ? null : P == $i ? [1] : At(S)), s.immediate != $ && (s.immediate = $, !$ && !b && this._set(u)), T)) {
      const {
        onRest: N
      } = s;
      de(Q4, (z) => tv(this, n, z));
      const D = on(this, rl(this, u));
      vl(this._pendingCalls, D), this._pendingCalls.add(r), s.changed && re.batchedUpdates(() => {
        s.changed = !b, N == null || N(D, this), b ? Xr(a.onRest, D) : s.onStart == null || s.onStart(D, this);
      });
    }
    b && this._set(A), v ? r(nk(n.to, n, this._state, this)) : T ? this._start() : lr(this) && !h ? this._pendingCalls.add(r) : r(tk(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (z1(this) && this._detach(), n.to = t, z1(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Ft(n) && (Li(n, this), th(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Ft(t) && fa(t, this);
  }
  _set(t, n = !0) {
    const r = vt(t);
    if (!W.und(r)) {
      const o = yn(this);
      if (!o || !Mn(r, o.getValue())) {
        const i = Xp(r);
        !o || o.constructor != i ? eg(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return yn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, ol(this, "onStart", on(this, rl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Xr(this.animation.onChange, t, this)), Xr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    yn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), lr(this) || (Z1(this, !0), nl(this) || this._resume());
  }
  _resume() {
    An.skipAnimation ? this.finish() : Oc.start(this);
  }
  _stop(t, n) {
    if (lr(this)) {
      Z1(this, !1);
      const r = this.animation;
      de(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ca(this, {
        type: "idle",
        parent: this
      });
      const o = n ? ci(this.get()) : on(this.get(), rl(this, t != null ? t : r.to));
      vl(this._pendingCalls, o), r.changed && (r.changed = !1, ol(this, "onRest", o, this));
    }
  }
}
function rl(e, t) {
  const n = pa(t), r = pa(e.get());
  return Mn(r, n);
}
function ok(e, t = e.loop, n = e.to) {
  let r = Xr(t);
  if (r) {
    const o = r !== !0 && JS(r), i = (o || e).reverse, l = !o || o.reset;
    return ma(Ge({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || Jp(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function ma(e) {
  const {
    to: t,
    from: n
  } = e = JS(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && ev(t, r), W.obj(n) && ev(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function q4(e) {
  const t = ma(e);
  return W.und(t.default) && (t.default = ng(t)), t;
}
function ev(e, t) {
  En(e, (n, r) => n != null && t.add(r));
}
const Q4 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function tv(e, t, n) {
  e.animation[n] = t[n] !== ZS(t, n) ? XS(t[n], e.key) : void 0;
}
function ol(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const G4 = ["onStart", "onChange", "onRest"];
let K4 = 1;
class Y4 {
  constructor(t, n) {
    this.id = K4++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(Ge({
      default: !0
    }, t));
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((t) => t.idle && !t.isDelayed && !t.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(t) {
    this._item = t;
  }
  get() {
    const t = {};
    return this.each((n, r) => t[r] = n.get()), t;
  }
  set(t) {
    for (const n in t) {
      const r = t[n];
      W.und(r) || this.springs[n].set(r);
    }
  }
  update(t) {
    return t && this.queue.push(ma(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(ma) : this.queue = [], this._flush ? this._flush(this, n) : (uk(this, n), oh(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      de(At(n), (o) => r[o].stop(!!t));
    } else
      ha(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  pause(t) {
    if (W.und(t))
      this.start({
        pause: !0
      });
    else {
      const n = this.springs;
      de(At(t), (r) => n[r].pause());
    }
    return this;
  }
  resume(t) {
    if (W.und(t))
      this.start({
        pause: !1
      });
    else {
      const n = this.springs;
      de(At(t), (r) => n[r].resume());
    }
    return this;
  }
  each(t) {
    En(this.springs, t);
  }
  _onFrame() {
    const {
      onStart: t,
      onChange: n,
      onRest: r
    } = this._events, o = this._active.size > 0, i = this._changed.size > 0;
    (o && !this._started || i && !this._started) && (this._started = !0, Tl(t, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const l = !o && this._started, a = i || l && r.size ? this.get() : null;
    i && n.size && Tl(n, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), l && (this._started = !1, Tl(r, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }));
  }
  eventObserved(t) {
    if (t.type == "change")
      this._changed.add(t.parent), t.idle || this._active.add(t.parent);
    else if (t.type == "idle")
      this._active.delete(t.parent);
    else
      return;
    re.onFrame(this._onFrame);
  }
}
function oh(e, t) {
  return Promise.all(t.map((n) => ik(e, n))).then((n) => rg(e, n));
}
async function ik(e, t, n) {
  const {
    keys: r,
    to: o,
    from: i,
    loop: l,
    onRest: a,
    onResolve: s
  } = t, u = W.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  const c = W.arr(o) || W.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : de(G4, (v) => {
    const w = t[v];
    if (W.fun(w)) {
      const p = e._events[v];
      t[v] = ({
        finished: y,
        cancelled: x
      }) => {
        const b = p.get(w);
        b ? (y || (b.finished = !1), x && (b.cancelled = !0)) : p.set(w, {
          value: null,
          finished: y || !1,
          cancelled: x || !1
        });
      }, u && (u[v] = t[v]);
    }
  });
  const f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, vl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || ZS(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(ek(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Gp,
      resume: Gp,
      start(v, w) {
        g ? (ha(f, e._lastAsyncId), w(ci(e))) : (v.onRest = a, w(nk(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = rg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = ok(t, l, o);
    if (v)
      return uk(e, [v]), ik(e, v, !0);
  }
  return s && re.batchedUpdates(() => s(h, e, e.item)), h;
}
function nv(e, t) {
  const n = Ge({}, e.springs);
  return t && de(At(t), (r) => {
    W.und(r.keys) && (r = ma(r)), W.obj(r.to) || (r = Ge({}, r, {
      to: void 0
    })), sk(n, r, (o) => ak(o));
  }), lk(e, n), n;
}
function lk(e, t) {
  En(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Li(n, e));
  });
}
function ak(e, t) {
  const n = new W4();
  return n.key = e, t && Li(n, t), n;
}
function sk(e, t, n) {
  t.keys && de(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function uk(e, t) {
  de(t, (n) => {
    sk(e.springs, n, (r) => ak(r, e));
  });
}
function X4(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Z4 = ["children"], zc = (e) => {
  let {
    children: t
  } = e, n = X4(e, Z4);
  const r = m.exports.useContext(Vu), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = k4(() => ({
    pause: o,
    immediate: i
  }), [o, i]);
  const {
    Provider: l
  } = Vu;
  return /* @__PURE__ */ B(l, {
    value: n,
    children: t
  });
}, Vu = J4(zc, {});
zc.Provider = Vu.Provider;
zc.Consumer = Vu.Consumer;
function J4(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const eR = () => {
  const e = [], t = function(o) {
    b4();
    const i = [];
    return de(e, (l, a) => {
      if (W.und(o))
        i.push(l.start());
      else {
        const s = n(o, l, a);
        s && i.push(l.start(s));
      }
    }), i;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    const o = e.indexOf(r);
    ~o && e.splice(o, 1);
  }, t.pause = function() {
    return de(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return de(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    de(e, (o) => o.set(r));
  }, t.start = function(r) {
    const o = [];
    return de(e, (i, l) => {
      if (W.und(r))
        o.push(i.start());
      else {
        const a = this._getProps(r, i, l);
        a && o.push(i.start(a));
      }
    }), o;
  }, t.stop = function() {
    return de(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return de(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  const n = function(o, i, l) {
    return W.fun(o) ? o(l, i) : o;
  };
  return t._getProps = n, t;
};
function tR(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? eR() : void 0, []), i = m.exports.useRef(0), l = GS(), a = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = nv(p, y);
      return i.current > 0 && !a.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? oh(p, y) : new Promise((A) => {
        lk(p, x), a.queue.push(() => {
          A(oh(p, y));
        }), l();
      });
    }
  }), []), s = m.exports.useRef([...a.ctrls]), u = [], c = j1(e) || 0;
  m.exports.useMemo(() => {
    de(s.current.slice(e, c), (p) => {
      L4(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = s.current[x] || (s.current[x] = new Y4(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = q4(A));
    }
  }
  const d = s.current.map((p, y) => nv(p, u[y])), g = m.exports.useContext(zc), h = j1(g), v = g !== h && D4(g);
  Jm(() => {
    i.current++, a.ctrls = s.current;
    const {
      queue: p
    } = a;
    p.length && (a.queue = [], de(p, (y) => y())), de(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: g
      });
      const b = u[x];
      b && (F4(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), KS(() => () => {
    de(a.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ge({}, p));
  return o ? [w, o] : w;
}
function nR(e, t) {
  const n = W.fun(e), [[r], o] = tR(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let rv;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(rv || (rv = {}));
class rR extends og {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = ua(...n);
    const r = this._get(), o = Xp(r);
    eg(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    Mn(n, r) || (yn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ov(this._active) && rd(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(vt) : At(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !ov(this._active) && (this.idle = !1, de(Lc(this), (t) => {
      t.done = !1;
    }), An.skipAnimation ? (re.batchedUpdates(() => this.advance()), rd(this)) : Oc.start(this));
  }
  _attach() {
    let t = 1;
    de(At(this.source), (n) => {
      Ft(n) && Li(n, this), th(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    de(At(this.source), (t) => {
      Ft(t) && fa(t, this);
    }), this._active.clear(), rd(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (th(r) ? r.priority : 0) + 1), 0));
  }
}
function oR(e) {
  return e.idle !== !1;
}
function ov(e) {
  return !e.size || Array.from(e).every(oR);
}
function rd(e) {
  e.idle || (e.idle = !0, de(Lc(e), (t) => {
    t.done = !0;
  }), ca(e, {
    type: "idle",
    parent: e
  }));
}
An.assign({
  createStringInterpolator: qS,
  to: (e, t) => new rR(e, t)
});
function ig(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const iR = ["style", "children", "scrollTop", "scrollLeft"], ck = /^--/;
function lR(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !ck.test(e) && !(Nl.hasOwnProperty(e) && Nl[e]) ? t + "px" : ("" + t).trim();
}
const iv = {};
function aR(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: a
  } = r, s = ig(r, iR), u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : iv[f] || (iv[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = lR(f, o[f]);
      ck.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), a !== void 0 && (e.scrollLeft = a);
}
let Nl = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
const sR = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), uR = ["Webkit", "Ms", "Moz", "O"];
Nl = Object.keys(Nl).reduce((e, t) => (uR.forEach((n) => e[sR(n, t)] = e[t]), e), Nl);
const cR = ["x", "y", "z"], fR = /^(matrix|translate|scale|rotate|skew)/, dR = /^(translate)/, pR = /^(rotate|skew)/, od = (e, t) => W.num(e) && e !== 0 ? e + t : e, Zs = (e, t) => W.arr(e) ? e.every((n) => Zs(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class hR extends Fc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = ig(t, cR);
    const l = [], a = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), a.push((s) => [`translate3d(${s.map((u) => od(u, "px")).join(",")})`, Zs(s, 0)])), En(i, (s, u) => {
      if (u === "transform")
        l.push([s || ""]), a.push((c) => [c, c === ""]);
      else if (fR.test(u)) {
        if (delete i[u], W.und(s))
          return;
        const c = dR.test(u) ? "px" : pR.test(u) ? "deg" : "";
        l.push(At(s)), a.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${od(h, c)})`, Zs(h, 0)] : (f) => [`${u}(${f.map((d) => od(d, c)).join(",")})`, Zs(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new mR(l, a)), super(i);
  }
}
class mR extends HS {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return de(this.inputs, (r, o) => {
      const i = vt(r[0]), [l, a] = this.transforms[o](W.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && de(this.inputs, (n) => de(n, (r) => Ft(r) && Li(r, this)));
  }
  observerRemoved(t) {
    t == 0 && de(this.inputs, (n) => de(n, (r) => Ft(r) && fa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ca(this, t);
  }
}
const gR = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], vR = ["scrollTop", "scrollLeft"];
An.assign({
  batchedUpdates: Gt.exports.unstable_batchedUpdates,
  createStringInterpolator: qS,
  colors: e4
});
const yR = T4(gR, {
  applyAnimatedValues: aR,
  createAnimatedStyle: (e) => new hR(e),
  getComponentProps: (e) => ig(e, vR)
}), xR = yR.animated;
function fk(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = fk(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function lv() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = fk(t)) && (r && (r += " "), r += n);
  return r;
}
function wR(e, t, { includes: n = [], ...r } = {}) {
  m.exports.useEffect(
    () => {
      const o = (i) => {
        r != null && r.disable || !e.current || e.current.contains(i.target) || n.some((l) => i.target === l.current) || t(i);
      };
      return document.addEventListener("mousedown", o, !0), () => {
        document.removeEventListener("mousedown", o);
      };
    },
    [e, t, r == null ? void 0 : r.disable, n]
  );
}
var Se = "colors", ut = "sizes", Y = "space", dk = { gap: Y, gridGap: Y, columnGap: Y, gridColumnGap: Y, rowGap: Y, gridRowGap: Y, inset: Y, insetBlock: Y, insetBlockEnd: Y, insetBlockStart: Y, insetInline: Y, insetInlineEnd: Y, insetInlineStart: Y, margin: Y, marginTop: Y, marginRight: Y, marginBottom: Y, marginLeft: Y, marginBlock: Y, marginBlockEnd: Y, marginBlockStart: Y, marginInline: Y, marginInlineEnd: Y, marginInlineStart: Y, padding: Y, paddingTop: Y, paddingRight: Y, paddingBottom: Y, paddingLeft: Y, paddingBlock: Y, paddingBlockEnd: Y, paddingBlockStart: Y, paddingInline: Y, paddingInlineEnd: Y, paddingInlineStart: Y, top: Y, right: Y, bottom: Y, left: Y, scrollMargin: Y, scrollMarginTop: Y, scrollMarginRight: Y, scrollMarginBottom: Y, scrollMarginLeft: Y, scrollMarginX: Y, scrollMarginY: Y, scrollMarginBlock: Y, scrollMarginBlockEnd: Y, scrollMarginBlockStart: Y, scrollMarginInline: Y, scrollMarginInlineEnd: Y, scrollMarginInlineStart: Y, scrollPadding: Y, scrollPaddingTop: Y, scrollPaddingRight: Y, scrollPaddingBottom: Y, scrollPaddingLeft: Y, scrollPaddingX: Y, scrollPaddingY: Y, scrollPaddingBlock: Y, scrollPaddingBlockEnd: Y, scrollPaddingBlockStart: Y, scrollPaddingInline: Y, scrollPaddingInlineEnd: Y, scrollPaddingInlineStart: Y, fontSize: "fontSizes", background: Se, backgroundColor: Se, backgroundImage: Se, borderImage: Se, border: Se, borderBlock: Se, borderBlockEnd: Se, borderBlockStart: Se, borderBottom: Se, borderBottomColor: Se, borderColor: Se, borderInline: Se, borderInlineEnd: Se, borderInlineStart: Se, borderLeft: Se, borderLeftColor: Se, borderRight: Se, borderRightColor: Se, borderTop: Se, borderTopColor: Se, caretColor: Se, color: Se, columnRuleColor: Se, fill: Se, outline: Se, outlineColor: Se, stroke: Se, textDecorationColor: Se, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ut, minBlockSize: ut, maxBlockSize: ut, inlineSize: ut, minInlineSize: ut, maxInlineSize: ut, width: ut, minWidth: ut, maxWidth: ut, height: ut, minHeight: ut, maxHeight: ut, flexBasis: ut, gridTemplateColumns: ut, gridTemplateRows: ut, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, bR = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, zi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, bR))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, oo = Symbol.for("sxs.internal"), lg = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), av = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: SR } = Object.prototype, ih = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), kR = /\s+(?![^()]*\))/, Mo = (e) => (t) => e(...typeof t == "string" ? String(t).split(kR) : [t]), sv = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Mo((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Mo((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Mo((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Mo((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Mo((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Mo((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, id = /([\d.]+)([^]*)/, CR = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, $R = (e, t) => e in ER && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${ih(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${ih(e)}:${r}fit-content`) + i) : String(t), ER = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Gn = (e) => e ? e + "-" : "", pk = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, a) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Gn(t) + (a.includes("$") ? "" : Gn(n)) + a.replace(/\$/g, "-") : a) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), AR = /\s*,\s*(?![^()]*\))/, PR = Object.prototype.toString, Jo = (e, t, n, r, o) => {
  let i, l, a;
  const s = (u, c, f) => {
    let d, g;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === PR && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in sv) {
            const S = sv[b];
            if (S !== a) {
              a = S, h(S(g)), a = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, E, $, P, T, R) => {
            const N = id.test(E), D = 0.0625 * (N ? -1 : 1), [z, F] = N ? [P, E] : [E, P];
            return "(" + ($[0] === "=" ? "" : $[0] === ">" === N ? "max-" : "min-") + z + ":" + ($[0] !== "=" && $.length === 1 ? F.replace(id, (_, V, M) => Number(V) + D * ($ === ">" ? 1 : -1) + M) : F) + (T ? ") and (" + (T[0] === ">" ? "min-" : "max-") + z + ":" + (T.length === 1 ? R.replace(id, (_, V, M) => Number(V) + D * (T === ">" ? -1 : 1) + M) : R) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], E = y ? [...c] : CR(c, d.split(AR));
            i !== void 0 && o(uv(...i)), i = void 0, s(g, E, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Gn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in _R ? String(g) + "px" : String(g) : pk($R(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${ih(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(uv(...i)), i = void 0;
  };
  s(e, t, n);
}, uv = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, _R = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, cv = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), io = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = cv(n % 52) + r;
  return cv(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), yl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], RR = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, TR = (e) => {
  let t;
  const n = () => {
    const { cssRules: o } = t.sheet;
    return [].map.call(o, (i, l) => {
      const { cssText: a } = i;
      let s = "";
      if (a.startsWith("--sxs"))
        return "";
      if (o[l - 1] && (s = o[l - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const u in t.rules)
          if (t.rules[u].group === i)
            return `--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${a}`;
        return i.cssRules.length ? `${s}${a}` : "";
      }
      return a;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: a, sheet: s } = t;
      if (!s.deleteRule) {
        for (; Object(Object(s.cssRules)[0]).type === 3; )
          s.cssRules.splice(0, 1);
        s.cssRules = [];
      }
      for (const u in a)
        delete a[u];
    }
    const o = Object(e).styleSheets || [];
    for (const a of o)
      if (RR(a)) {
        for (let s = 0, u = a.cssRules; u[s]; ++s) {
          const c = Object(u[s]);
          if (c.type !== 1)
            continue;
          const f = Object(u[s + 1]);
          if (f.type !== 4)
            continue;
          ++s;
          const { cssText: d } = c;
          if (!d.startsWith("--sxs"))
            continue;
          const g = d.slice(14, -3).trim().split(/\s+/), h = yl[g[0]];
          h && (t || (t = { sheet: a, reset: r, rules: {}, toString: n }), t.rules[h] = { group: f, index: s, cache: new Set(g) });
        }
        if (t)
          break;
      }
    if (!t) {
      const a = (s, u) => ({ type: u, cssRules: [], insertRule(c, f) {
        this.cssRules.splice(f, 0, a(c, { import: 3, undefined: 1 }[(c.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return s === "@media{}" ? `@media{${[].map.call(this.cssRules, (c) => c.cssText).join("")}}` : s;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: r, toString: n };
    }
    const { sheet: i, rules: l } = t;
    for (let a = yl.length - 1; a >= 0; --a) {
      const s = yl[a];
      if (!l[s]) {
        const u = yl[a + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${a}}`, c), l[s] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([a]) };
      }
      IR(l[s]);
    }
  };
  return r(), t;
}, IR = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, il = Symbol(), OR = zi(), fv = (e, t) => OR(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[oo]) {
        r.type == null && (r.type = o[oo].type);
        for (const i of o[oo].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(NR(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), MR(e, r, t);
}), NR = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Gn(o.prefix)}c-${io(r)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    s[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = s, f = d, SR.call(c, f) || (s[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [v, w, !av(w)];
        l.push(p);
      }
    }
  var c, f;
  if (typeof t == "object" && t)
    for (const d of t) {
      let { css: g, ...h } = d;
      g = typeof g == "object" && g || {};
      for (const w in h)
        h[w] = String(h[w]);
      const v = [h, g, !av(g)];
      a.push(v);
    }
  return [i, r, l, a, s, u];
}, MR = (e, t, n) => {
  const [r, o, i, l] = DR(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[il].length; g++) {
        const [h, v] = d[il][g];
        f.rules[h].apply(v);
      }
      return d[il] = [], null;
    }
    return d[il] = [], d.rules = {}, yl.forEach((g) => d.rules[g] = { apply: (h) => d[il].push([g, h]) }), d;
  })(n) : null, s = (a || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || LR;
    const { css: d, ...g } = f, h = {};
    for (const p in i)
      if (delete g[p], p in f) {
        let y = f[p];
        typeof y == "object" && y ? h[p] = { "@initial": i[p], ...y } : (y = String(y), h[p] = y !== "undefined" || l.has(p) ? y : i[p]);
      } else
        h[p] = i[p];
    const v = /* @__PURE__ */ new Set([...o]);
    for (const [p, y, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), Jo(y, [`.${p}`], [], e, (E) => {
        s.styled.apply(E);
      }));
      const A = dv(x, h, e.media), S = dv(b, h, e.media, !0);
      for (const E of A)
        if (E !== void 0)
          for (const [$, P, T] of E) {
            const R = `${p}-${io(P)}-${$}`;
            v.add(R);
            const N = (T ? n.rules.resonevar : n.rules.onevar).cache, D = T ? s.resonevar : s.onevar;
            N.has(R) || (N.add(R), Jo(P, [`.${R}`], [], e, (z) => {
              D.apply(z);
            }));
          }
      for (const E of S)
        if (E !== void 0)
          for (const [$, P] of E) {
            const T = `${p}-${io(P)}-${$}`;
            v.add(T), n.rules.allvar.cache.has(T) || (n.rules.allvar.cache.add(T), Jo(P, [`.${T}`], [], e, (R) => {
              s.allvar.apply(R);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${io(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), Jo(d, [`.${p}`], [], e, (y) => {
        s.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = g.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: a };
  };
  return lg(c, { className: r, selector: u, [oo]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, DR = (e) => {
  let t = "";
  const n = [], r = {}, o = [];
  for (const [i, , , , l, a] of e) {
    t === "" && (t = i), n.push(i), o.push(...a);
    for (const s in l) {
      const u = l[s];
      (r[s] === void 0 || u !== "undefined" || a.includes(u)) && (r[s] = u);
    }
  }
  return [t, n, r, new Set(o)];
}, dv = (e, t, n, r) => {
  const o = [];
  e:
    for (let [i, l, a] of e) {
      if (a)
        continue;
      let s, u = 0, c = !1;
      for (s in i) {
        const f = i[s];
        let d = t[s];
        if (d !== f) {
          if (typeof d != "object" || !d)
            continue e;
          {
            let g, h, v = 0;
            for (const w in d) {
              if (f === String(d[w])) {
                if (w !== "@initial") {
                  const p = w.slice(1);
                  (h = h || []).push(p in n ? n[p] : w.replace(/^@media ?/, "")), c = !0;
                }
                u += v, g = !0;
              }
              ++v;
            }
            if (h && h.length && (l = { ["@media " + h.join(", ")]: l }), !g)
              continue e;
          }
        }
      }
      (o[u] = o[u] || []).push([r ? "cv" : `${s}-${i[s]}`, l, c]);
    }
  return o;
}, LR = {}, FR = zi(), zR = (e, t) => FR(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = io(o);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in o) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(o["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, l++);
          delete o["@import"];
        }
        Jo(o, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return lg(r, { toString: r });
}), BR = zi(), jR = (e, t) => BR(e, () => (n) => {
  const r = `${Gn(e.prefix)}k-${io(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      Jo(n, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return lg(o, { get name() {
    return o();
  }, toString: o });
}), VR = class {
  constructor(e, t, n, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + Gn(this.prefix) + Gn(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, HR = zi(), UR = (e, t) => HR(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Gn(e.prefix)}t-${io(r)}`}`, i = {}, l = [];
  for (const s in r) {
    i[s] = {};
    for (const u in r[s]) {
      const c = `--${Gn(e.prefix)}${s}-${u}`, f = pk(String(r[s][u]), e.prefix, s);
      i[s][u] = new VR(u, f, s, e.prefix), l.push(`${c}:${f}`);
    }
  }
  const a = () => {
    if (l.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const s = `${r === e.theme ? ":root," : ""}.${n}{${l.join(";")}}`;
      t.rules.themed.apply(s);
    }
    return n;
  };
  return { ...i, get className() {
    return a();
  }, selector: o, toString: a };
}), WR = zi(), qR = zi(), QR = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = WR(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", a = typeof i.media == "object" && i.media || {}, s = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: a, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...dk }, utils: typeof i.utils == "object" && i.utils || {} }, f = TR(s), d = { css: fv(c, f), globalCss: zR(c, f), keyframes: jR(c, f), createTheme: UR(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => qR(n, () => {
    const o = fv(n, r);
    return (...i) => {
      const l = o(...i), a = l[oo].type, s = je.forwardRef((u, c) => {
        const f = u && u.as || a, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? je.createElement(je.Fragment, null, je.createElement(f, d), je.createElement(g, null)) : je.createElement(f, d);
      });
      return s.className = l.className, s.displayName = `Styled.${a.displayName || a.name || a}`, s.selector = l.selector, s.toString = () => l.selector, s[oo] = l[oo], s;
    };
  }))(t), t;
};
function GR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ga(e, t) {
  return ga = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ga(e, t);
}
function KR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ga(e, t);
}
function lh(e) {
  return lh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, lh(e);
}
function YR(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function XR() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Js(e, t, n) {
  return XR() ? Js = Reflect.construct : Js = function(o, i, l) {
    var a = [null];
    a.push.apply(a, i);
    var s = Function.bind.apply(o, a), u = new s();
    return l && ga(u, l.prototype), u;
  }, Js.apply(null, arguments);
}
function ah(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ah = function(r) {
    if (r === null || !YR(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Js(r, arguments, lh(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ga(o, r);
  }, ah(e);
}
var yr = /* @__PURE__ */ function(e) {
  KR(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, GR(r);
  }
  return t;
}(/* @__PURE__ */ ah(Error)), ZR = /--[\S]*/g;
function JR(e, t) {
  if (!e || !e.match(ZR))
    throw new yr(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new yr(74);
}
function ld(e) {
  return Math.round(e * 255);
}
function e6(e, t, n) {
  return ld(e) + "," + ld(t) + "," + ld(n);
}
function pv(e, t, n, r) {
  if (r === void 0 && (r = e6), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), a = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (a = i, s = l) : o >= 1 && o < 2 ? (a = l, s = i) : o >= 2 && o < 3 ? (s = i, u = l) : o >= 3 && o < 4 ? (s = l, u = i) : o >= 4 && o < 5 ? (a = l, u = i) : o >= 5 && o < 6 && (a = i, u = l);
  var c = n - i / 2, f = a + c, d = s + c, g = u + c;
  return r(f, d, g);
}
var hv = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function t6(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return hv[t] ? "#" + hv[t] : e;
}
var n6 = /^#[a-fA-F0-9]{6}$/, r6 = /^#[a-fA-F0-9]{8}$/, o6 = /^#[a-fA-F0-9]{3}$/, i6 = /^#[a-fA-F0-9]{4}$/, ad = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, l6 = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, a6 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, s6 = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function u6(e) {
  if (typeof e != "string")
    throw new yr(3);
  var t = t6(e);
  if (t.match(n6))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(r6)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(o6))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(i6)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r
    };
  }
  var o = ad.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = l6.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = a6.exec(t);
  if (l) {
    var a = parseInt("" + l[1], 10), s = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + pv(a, s, u) + ")", f = ad.exec(c);
    if (!f)
      throw new yr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = s6.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + pv(g, h, v) + ")", p = ad.exec(w);
    if (!p)
      throw new yr(4, t, w);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10),
      alpha: parseFloat("" + d[4])
    };
  }
  throw new yr(5);
}
var c6 = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, mv = c6;
function Do(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function gv(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return mv("#" + Do(e) + Do(t) + Do(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return mv("#" + Do(e.red) + Do(e.green) + Do(e.blue));
  throw new yr(6);
}
function f6(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = u6(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? gv(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? gv(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new yr(7);
}
const vv = {
  0: "0px",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  px: "1px",
  "0_5": "0.125rem",
  "1_5": "0.375rem",
  "2_5": "0.625rem",
  "3_5": "0.875rem",
  "4_5": "1.125rem",
  "5_5": "1.375rem",
  "1-2": "50%",
  "1-5": "20%",
  "2-5": "40%",
  "3-5": "60%",
  "4-5": "80%"
}, yv = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
  100: ({ opacityValue: e }) => `hsla(212, 35.0%, 9.2%, ${e})`,
  200: ({ opacityValue: e }) => `hsla(216, 50.0%, 11.8%, ${e})`,
  300: ({ opacityValue: e }) => `hsla(214, 59.4%, 15.3%, ${e})`,
  400: ({ opacityValue: e }) => `hsla(214, 65.8%, 17.9%, ${e})`,
  500: ({ opacityValue: e }) => `hsla(213, 71.2%, 20.2%, ${e})`,
  600: ({ opacityValue: e }) => `hsla(212, 77.4%, 23.1%, ${e})`,
  700: ({ opacityValue: e }) => `hsla(211, 85.1%, 27.4%, ${e})`,
  800: ({ opacityValue: e }) => `hsla(211, 89.7%, 34.1%, ${e})`,
  900: ({ opacityValue: e }) => `hsla(206, 100%, 50.0%, ${e})`,
  1e3: ({ opacityValue: e }) => `hsla(209, 100%, 60.6%, ${e})`,
  1100: ({ opacityValue: e }) => `hsla(210, 100%, 66.1%, ${e})`,
  1200: ({ opacityValue: e }) => `hsla(206, 98.0%, 95.8%, ${e})`
}, Mt = {
  100: ({ opacityValue: e }) => `hsla(0, 0%, 8.5%, ${e})`,
  200: ({ opacityValue: e }) => `hsla(0, 0%, 11.0%, ${e})`,
  300: ({ opacityValue: e }) => `hsla(0, 0%, 13.6%, ${e})`,
  400: ({ opacityValue: e }) => `hsla(0, 0%, 15.8%, ${e})`,
  500: ({ opacityValue: e }) => `hsla(0, 0%, 17.9%, ${e})`,
  600: ({ opacityValue: e }) => `hsla(0, 0%, 20.5%, ${e})`,
  700: ({ opacityValue: e }) => `hsla(0, 0%, 24.3%, ${e})`,
  800: ({ opacityValue: e }) => `hsla(0, 0%, 31.2%, ${e})`,
  900: ({ opacityValue: e }) => `hsla(0, 0%, 43.9%, ${e})`,
  1e3: ({ opacityValue: e }) => `hsla(0, 0%, 49.4%, ${e})`,
  1100: ({ opacityValue: e }) => `hsla(0, 0%, 62.8%, ${e})`,
  1200: ({ opacityValue: e }) => `hsla(0, 0%, 93.0%, ${e})`
}, ag = QR({
  prefix: "mayumi",
  theme: {
    colors: {
      "blue-100": Nt[100]({ opacityValue: 1 }),
      "blue-200": Nt[200]({ opacityValue: 1 }),
      "blue-300": Nt[300]({ opacityValue: 1 }),
      "blue-400": Nt[400]({ opacityValue: 1 }),
      "blue-500": Nt[500]({ opacityValue: 1 }),
      "blue-600": Nt[600]({ opacityValue: 1 }),
      "blue-700": Nt[700]({ opacityValue: 1 }),
      "blue-800": Nt[800]({ opacityValue: 1 }),
      "blue-900": Nt[900]({ opacityValue: 1 }),
      "blue-1000": Nt[1e3]({ opacityValue: 1 }),
      "blue-1100": Nt[1100]({ opacityValue: 1 }),
      "blue-1200": Nt[1200]({ opacityValue: 1 }),
      "gray-100": Mt[100]({ opacityValue: 1 }),
      "gray-200": Mt[200]({ opacityValue: 1 }),
      "gray-300": Mt[300]({ opacityValue: 1 }),
      "gray-400": Mt[400]({ opacityValue: 1 }),
      "gray-500": Mt[500]({ opacityValue: 1 }),
      "gray-600": Mt[600]({ opacityValue: 1 }),
      "gray-700": Mt[700]({ opacityValue: 1 }),
      "gray-800": Mt[800]({ opacityValue: 1 }),
      "gray-900": Mt[900]({ opacityValue: 1 }),
      "gray-1000": Mt[1e3]({ opacityValue: 1 }),
      "gray-1100": Mt[1100]({ opacityValue: 1 }),
      "gray-1200": Mt[1200]({ opacityValue: 1 }),
      blue: "hsla(217.15,100%,53%,1)",
      red: "#fc2b2d",
      yellow: "#fecf0f",
      green: "#30d33b",
      gray: "rgb(152,152,157)",
      cyan: "#4cbcf2",
      base: "$gray-100",
      elevated: "$gray-200",
      white: "rgb(255 255 255)",
      black: "rgb(0 0 0)",
      current: "currentColor",
      textColor: "$gray-1200",
      labelColor: "#dddddd",
      secondaryLabelColor: "$gray-1100",
      tertiaryLabelColor: "#555555",
      quaternaryLabelColor: "$gray-600",
      textBackgroundColor: "$gray-200",
      linkColor: "#3586ff",
      placeholderTextColor: "$tertiaryLabelColor",
      selectedTextColor: "$white",
      selectedTextBackgroundColor: "$blue-500",
      keyboardFocusIndicatorColor: "$blue-700",
      separatorColor: "$quaternaryLabelColor",
      unemphasizedSelectedTextBackgroundColor: "$gray-600",
      unemphasizedSelectedContentBackgroundColor: "$unemphasizedSelectedTextBackgroundColor",
      gridColor: "$gray-100",
      headerTextColor: "$white",
      alternateSelectedControlTextColor: "$white",
      alternatingContentBackgroundColor0: "$textBackgroundColor",
      alternatingContentBackgroundColor1: "$gray-400",
      controlAccentColor: "#0a60ff",
      controlColor: "$tertiaryLabelColor",
      controlBackgroundColor: "$textBackgroundColor",
      controlTextColor: "#d9d9d9",
      disabledControlTextColor: "#606060",
      selectedControlColor: "$blue-500",
      selectedControlTextColor: "$white",
      windowBackgroundColor: "$gray-400",
      underPageBackgroundColor: "$gray-200",
      findHighlightColor: "#ffff0b",
      shadowColor: "$black",
      primary: "$blue",
      danger: "$red",
      warning: "$yellow",
      success: "$green",
      default: "$gray",
      info: "$cyan"
    },
    radii: {
      default: "0.25rem",
      none: "0px",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    space: vv,
    sizes: {
      ...vv,
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      prose: "65ch",
      screenSM: "640px",
      screenMD: "768px",
      screenLG: "1024px",
      screenXL: "1280px",
      screen2XL: "1536px"
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem"
    },
    lineHeights: {
      xs: "1rem",
      sm: "1.25rem",
      base: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
      "5xl": "1",
      "6xl": "1",
      "7xl": "1",
      "8xl": "1",
      "9xl": "1",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    },
    fonts: {
      default: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    zIndices: {
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      auto: "auto"
    },
    shadows: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": " 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      outline: "0px 0px 0px 1px $colors$shadowColor",
      focus: "0px 0px 0px 4px $colors$blue-700"
    },
    transitions: {
      default: yv([
        "color",
        "background-color",
        "border-color",
        "text-decoration-color",
        "fill",
        "stroke",
        "opacity",
        "box-shadow",
        "transform",
        "filter",
        "backdrop-filter"
      ]),
      none: "none",
      all: "all cubic-bezier(0.4, 0, 0.2, 1) 150ms",
      colors: yv([
        "color",
        "background-color",
        "border-color",
        "text-decoration-color",
        "fill",
        "stroke"
      ]),
      opacity: "opacity cubic-bezier(0.4, 0, 0.2, 1) 150ms",
      shadow: "box-shadow cubic-bezier(0.4, 0, 0.2, 1) 150ms",
      transform: "transform cubic-bezier(0.4, 0, 0.2, 1) 150ms"
    }
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 960px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
    tablet: "(min-width: 640px)",
    laptop: "(min-width: 1024px)",
    desktop: "(min-width: 1280px)"
  },
  utils: {
    p: (e) => ({
      padding: e
    }),
    pt: (e) => ({
      paddingTop: e
    }),
    pr: (e) => ({
      paddingRight: e
    }),
    pb: (e) => ({
      paddingBottom: e
    }),
    pl: (e) => ({
      paddingLeft: e
    }),
    px: (e) => ({
      paddingLeft: e,
      paddingRight: e
    }),
    py: (e) => ({
      paddingTop: e,
      paddingBottom: e
    }),
    m: (e) => ({
      margin: e
    }),
    mt: (e) => ({
      marginTop: e
    }),
    mr: (e) => ({
      marginRight: e
    }),
    mb: (e) => ({
      marginBottom: e
    }),
    ml: (e) => ({
      marginLeft: e
    }),
    mx: (e) => ({
      marginLeft: e,
      marginRight: e
    }),
    my: (e) => ({
      marginTop: e,
      marginBottom: e
    }),
    flexBox: (e) => ({
      display: "flex",
      alignItems: e,
      justifyContent: e
    }),
    rounded: (e) => ({
      borderRadius: e
    }),
    roundedT: (e) => ({
      borderTopRightRadius: e,
      borderTopLeftRadius: e
    }),
    roundedR: (e) => ({
      borderTopRightRadius: e,
      borderBottomRightRadius: e
    }),
    roundedB: (e) => ({
      borderBottomRightRadius: e,
      borderBottomLeftRadius: e
    }),
    roundedL: (e) => ({
      borderTopLeftRadius: e,
      borderBottomLeftRadius: e
    }),
    roundedTL: (e) => ({
      borderTopLeftRadius: e
    }),
    roundedTR: (e) => ({
      borderTopRightRadius: e
    }),
    roundedBL: (e) => ({
      borderBottomLeftRadius: e
    }),
    roundedBR: (e) => ({
      borderBottomRightRadius: e
    }),
    bw: (e) => ({
      borderWidth: e
    }),
    leading: (e) => ({
      lineHeight: e
    }),
    linearGradient: (e) => ({
      backgroundImage: `linear-gradient(${e})`
    }),
    w: (e) => ({ width: e }),
    h: (e) => ({ height: e }),
    mw: (e) => ({ maxWidth: e }),
    mh: (e) => ({
      maxHeight: e
    }),
    container: (e) => ({ maxWidth: e }),
    size: (e) => ({
      width: e,
      height: e
    }),
    scale: (e) => ({
      transform: `scale(${e})`
    }),
    text: (e) => ({
      lineHeight: e,
      fontSize: e
    }),
    glass: (e) => ({
      backgroundColor: f6(JR("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
      backdropFilter: `blur(${e})`,
      "-webkit-backdrop-filter": `blur(${e})`
    }),
    aspect: (e) => {
      let t = "auto";
      switch (e) {
        case "video":
          t = "16 / 9";
          break;
        case "square":
          t = "1 / 1";
          break;
        default:
          t = e;
          break;
      }
      return {
        aspectRatio: t
      };
    }
  },
  themeMap: dk
}), d6 = ag.styled;
ag.globalCss;
ag.getCssText;
var xv = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, en = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, p6 = (...e) => [...e].flat().filter(Boolean), hk = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? hk(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, wv = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function h6() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = mk(t)) && (r && (r += " "), r += n);
  return r;
}
function mk(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = mk(e[r])) && (n && (n += " "), n += t);
  return n;
}
function sh() {
  return sh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sh.apply(this, arguments);
}
var sg = "-";
function m6(e) {
  var t = v6(e);
  function n(o) {
    var i = o.split(sg);
    return i[0] === "" && i.length !== 1 && i.shift(), gk(i, t) || g6(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function gk(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? gk(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(sg);
    return (n = t.validators.find(function(a) {
      var s = a.validator;
      return s(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var bv = /^\[(.+)\]$/;
function g6(e) {
  if (bv.test(e)) {
    var t = bv.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function v6(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = x6(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], a = i[1];
    uh(a, r, l, t);
  }), r;
}
function uh(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : Sv(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (y6(o)) {
        uh(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(l) {
      var a = l[0], s = l[1];
      uh(s, Sv(t, a), n, r);
    });
  });
}
function Sv(e, t) {
  var n = e;
  return t.split(sg).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function y6(e) {
  return e.isThemeGetter;
}
function x6(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], i = o.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(a) {
        var s = a[0], u = a[1];
        return [t + s, u];
      })) : l;
    });
    return [r, i];
  }) : e;
}
function w6(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var a = n.get(l);
      if (a !== void 0)
        return a;
      if ((a = r.get(l)) !== void 0)
        return o(l, a), a;
    },
    set: function(l, a) {
      n.has(l) ? n.set(l, a) : o(l, a);
    }
  };
}
var vk = "!";
function b6(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, a = 0; a < r.length; a++) {
      var s = r[a];
      o === 0 && s === t[0] && (t.length === 1 || r.slice(a, a + t.length) === t) && (i.push(r.slice(l, a)), l = a + t.length), s === "[" ? o++ : s === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(vk), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function S6(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function k6(e) {
  return sh({
    cache: w6(e.cacheSize),
    splitModifiers: b6(e)
  }, m6(e));
}
var C6 = /\s+/;
function $6(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(C6).map(function(l) {
    var a = n(l), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = S6(s).join(":"), g = u ? d + vk : d;
    return {
      isTailwindClass: !0,
      modifierId: g,
      classGroupId: f,
      originalClassName: l
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var a = l.modifierId, s = l.classGroupId, u = a + s;
    return i.has(u) ? !1 : (i.add(u), o(s).forEach(function(c) {
      return i.add(a + c);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function ch() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = k6(d), o = r.cache.get, i = r.cache.set, l = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = $6(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(h6.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var yk = /^\[(?:([a-z-]+):)?(.+)\]$/i, E6 = /^\d+\/\d+$/, A6 = /* @__PURE__ */ new Set(["px", "full", "screen"]), P6 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _6 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, R6 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Jt(e) {
  return Ml(e) || A6.has(e) || E6.test(e) || Kr(e);
}
function Kr(e) {
  return ko(e, "length", M6);
}
function T6(e) {
  return ko(e, "size", xk);
}
function I6(e) {
  return ko(e, "position", xk);
}
function O6(e) {
  return ko(e, "url", D6);
}
function sd(e) {
  return ko(e, "number", Ml);
}
function Ml(e) {
  return !Number.isNaN(Number(e));
}
function ll(e) {
  return kv(e) || ko(e, "number", kv);
}
function ze(e) {
  return yk.test(e);
}
function al() {
  return !0;
}
function ar(e) {
  return P6.test(e);
}
function N6(e) {
  return ko(e, "", L6);
}
function ko(e, t, n) {
  var r = yk.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function M6(e) {
  return _6.test(e);
}
function xk() {
  return !1;
}
function D6(e) {
  return e.startsWith("url(");
}
function kv(e) {
  return Number.isInteger(Number(e));
}
function L6(e) {
  return R6.test(e);
}
function fh() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), a = _e("borderWidth"), s = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), E = _e("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, T = function() {
    return ["auto", t];
  }, R = function() {
    return ["", Jt];
  }, N = function() {
    return ["auto", Ml, ze];
  }, D = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, V = function() {
    return ["", "0", ze];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [Ml, sd];
  }, O = function() {
    return [Ml, ze];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [al],
      spacing: [Jt],
      blur: ["none", "", ar, Kr],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ar, Kr],
      borderSpacing: [t],
      borderWidth: R(),
      contrast: I(),
      grayscale: V(),
      hueRotate: O(),
      invert: V(),
      gap: [t],
      gradientColorStops: [e],
      inset: T(),
      margin: T(),
      opacity: I(),
      padding: [t],
      saturate: I(),
      scale: I(),
      sepia: V(),
      skew: O(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", ze]
      }],
      container: ["container"],
      columns: [{
        columns: [ar]
      }],
      "break-after": [{
        "break-after": M()
      }],
      "break-before": [{
        "break-before": M()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [].concat(D(), [ze])
      }],
      overflow: [{
        overflow: P()
      }],
      "overflow-x": [{
        "overflow-x": P()
      }],
      "overflow-y": [{
        "overflow-y": P()
      }],
      overscroll: [{
        overscroll: $()
      }],
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      "overscroll-y": [{
        "overscroll-y": $()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [h]
      }],
      "inset-x": [{
        "inset-x": [h]
      }],
      "inset-y": [{
        "inset-y": [h]
      }],
      top: [{
        top: [h]
      }],
      right: [{
        right: [h]
      }],
      bottom: [{
        bottom: [h]
      }],
      left: [{
        left: [h]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", ll]
      }],
      basis: [{
        basis: [t]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", ze]
      }],
      grow: [{
        grow: V()
      }],
      shrink: [{
        shrink: V()
      }],
      order: [{
        order: ["first", "last", "none", ll]
      }],
      "grid-cols": [{
        "grid-cols": [al]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [ll]
        }, ze]
      }],
      "col-start": [{
        "col-start": N()
      }],
      "col-end": [{
        "col-end": N()
      }],
      "grid-rows": [{
        "grid-rows": [al]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [ll]
        }, ze]
      }],
      "row-start": [{
        "row-start": N()
      }],
      "row-end": [{
        "row-end": N()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ze]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ze]
      }],
      gap: [{
        gap: [d]
      }],
      "gap-x": [{
        "gap-x": [d]
      }],
      "gap-y": [{
        "gap-y": [d]
      }],
      "justify-content": [{
        justify: _()
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: [].concat(_(), ["baseline"])
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [].concat(_(), ["baseline", "stretch"])
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [p]
      }],
      px: [{
        px: [p]
      }],
      py: [{
        py: [p]
      }],
      pt: [{
        pt: [p]
      }],
      pr: [{
        pr: [p]
      }],
      pb: [{
        pb: [p]
      }],
      pl: [{
        pl: [p]
      }],
      m: [{
        m: [v]
      }],
      mx: [{
        mx: [v]
      }],
      my: [{
        my: [v]
      }],
      mt: [{
        mt: [v]
      }],
      mr: [{
        mr: [v]
      }],
      mb: [{
        mb: [v]
      }],
      ml: [{
        ml: [v]
      }],
      "space-x": [{
        "space-x": [S]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [S]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", t]
      }],
      "min-w": [{
        "min-w": ["min", "max", "fit", Jt]
      }],
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ar]
        }, ar, Kr]
      }],
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      "min-h": [{
        "min-h": ["min", "max", "fit", Jt]
      }],
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", ar, Kr]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", sd]
      }],
      "font-family": [{
        font: [al]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Kr]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Jt]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", ze]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [w]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [].concat(z(), ["wavy"])
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Jt]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", Jt]
      }],
      "text-decoration-color": [{
        decoration: [e]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{
        indent: [t]
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Kr]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      content: [{
        content: ["none", ze]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [].concat(D(), [I6])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", T6]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, O6]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from": [{
        from: [g]
      }],
      "gradient-via": [{
        via: [g]
      }],
      "gradient-to": [{
        to: [g]
      }],
      rounded: [{
        rounded: [i]
      }],
      "rounded-t": [{
        "rounded-t": [i]
      }],
      "rounded-r": [{
        "rounded-r": [i]
      }],
      "rounded-b": [{
        "rounded-b": [i]
      }],
      "rounded-l": [{
        "rounded-l": [i]
      }],
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      "rounded-br": [{
        "rounded-br": [i]
      }],
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      "border-w": [{
        border: [a]
      }],
      "border-w-x": [{
        "border-x": [a]
      }],
      "border-w-y": [{
        "border-y": [a]
      }],
      "border-w-t": [{
        "border-t": [a]
      }],
      "border-w-r": [{
        "border-r": [a]
      }],
      "border-w-b": [{
        "border-b": [a]
      }],
      "border-w-l": [{
        "border-l": [a]
      }],
      "border-opacity": [{
        "border-opacity": [w]
      }],
      "border-style": [{
        border: [].concat(z(), ["hidden"])
      }],
      "divide-x": [{
        "divide-x": [a]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [a]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      "divide-style": [{
        divide: z()
      }],
      "border-color": [{
        border: [o]
      }],
      "border-color-x": [{
        "border-x": [o]
      }],
      "border-color-y": [{
        "border-y": [o]
      }],
      "border-color-t": [{
        "border-t": [o]
      }],
      "border-color-r": [{
        "border-r": [o]
      }],
      "border-color-b": [{
        "border-b": [o]
      }],
      "border-color-l": [{
        "border-l": [o]
      }],
      "divide-color": [{
        divide: [o]
      }],
      "outline-style": [{
        outline: [""].concat(z())
      }],
      "outline-offset": [{
        "outline-offset": [Jt]
      }],
      "outline-w": [{
        outline: [Jt]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: R()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      "ring-offset-w": [{
        "ring-offset": [Jt]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", ar, N6]
      }],
      "shadow-color": [{
        shadow: [al]
      }],
      opacity: [{
        opacity: [w]
      }],
      "mix-blend": [{
        "mix-blend": F()
      }],
      "bg-blend": [{
        "bg-blend": F()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [n]
      }],
      brightness: [{
        brightness: [r]
      }],
      contrast: [{
        contrast: [s]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", ar, ze]
      }],
      grayscale: [{
        grayscale: [u]
      }],
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      invert: [{
        invert: [f]
      }],
      saturate: [{
        saturate: [y]
      }],
      sepia: [{
        sepia: [b]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [s]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [b]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [l]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ze]
      }],
      duration: [{
        duration: O()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", ze]
      }],
      delay: [{
        delay: O()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ze]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [x]
      }],
      "scale-x": [{
        "scale-x": [x]
      }],
      "scale-y": [{
        "scale-y": [x]
      }],
      rotate: [{
        rotate: [ll, ze]
      }],
      "translate-x": [{
        "translate-x": [E]
      }],
      "translate-y": [{
        "translate-y": [E]
      }],
      "skew-x": [{
        "skew-x": [A]
      }],
      "skew-y": [{
        "skew-y": [A]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ze]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: ["appearance-none"],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ze]
      }],
      "caret-color": [{
        caret: [e]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": [t]
      }],
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      "scroll-my": [{
        "scroll-my": [t]
      }],
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      "scroll-p": [{
        "scroll-p": [t]
      }],
      "scroll-px": [{
        "scroll-px": [t]
      }],
      "scroll-py": [{
        "scroll-py": [t]
      }],
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      "scroll-pl": [{
        "scroll-pl": [t]
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ze]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [Jt, sd]
      }],
      stroke: [{
        stroke: [e, "none"]
      }],
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    }
  };
}
var F6 = /* @__PURE__ */ ch(fh);
function z6(e, t) {
  for (var n in t)
    wk(e, n, t[n]);
  return e;
}
var B6 = Object.prototype.hasOwnProperty, j6 = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function wk(e, t, n) {
  if (!B6.call(e, t) || j6.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var r in n)
      wk(e[t], r, n[r]);
  }
}
function V6(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? ch.apply(void 0, [fh, e].concat(n)) : ch.apply(void 0, [function() {
    return z6(fh(), e);
  }].concat(n));
}
var Hu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), sl = (...e) => (t = {}) => t.twMerge ? (en(t.twMergeConfig) ? F6 : V6(t.twMergeConfig))(Hu(e)) : Hu(e), Cv = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Hu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, H6 = { twMerge: !0, twMergeConfig: {} }, U6 = (e, t = H6) => {
  var n, r, o, i, l;
  let { slots: a = {}, variants: s = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Hu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = hk(s, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = en(a) ? {} : { base: e == null ? void 0 : e.base, ...a }, v = en((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : Cv((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, en(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (en(d) && en(a) && en((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return sl(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (z, F, _ = [], V) => {
      let M = _;
      if (typeof F == "string")
        M.push(wv(F).split(" ").map((I) => `${z}:${I}`));
      else if (Array.isArray(F))
        M.push(F.flatMap((I) => `${z}:${I}`));
      else if (typeof F == "object" && typeof V == "string") {
        let I = F == null ? void 0 : F[V];
        if (I && typeof I == "string") {
          let O = wv(I);
          M[V] = M[V] ? [...M[V], ...O.split(" ").map((k) => `${z}:${k}`)] : O.split(" ").map((k) => `${z}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (M[V] = I.flatMap((O) => `${z}:${O}`));
      }
      return M;
    }, E = (z, F = d, _ = null) => {
      let V = F == null ? void 0 : F[z];
      if (typeof V != "object" || en(V))
        return null;
      let M = y == null ? void 0 : y[z], I = g == null ? void 0 : g[z], O = [];
      if (M === null)
        return null;
      let k = xv(M);
      typeof k == "object" && (O = Object.keys(k).reduce((J, ne) => {
        let ae = k[ne], ee = V == null ? void 0 : V[ae];
        return ne === "initial" ? (I = ae, J) : S(ne, ee, J, _);
      }, []));
      let C = V[k] || V[xv(I)];
      return typeof O == "object" && typeof _ == "string" && O[_] ? Cv(O, C) : O.length > 0 ? [C, ...O] : C;
    }, $ = () => d ? Object.keys(d).map((z) => E(z, d)) : null, P = (z) => !d || typeof d != "object" ? null : Object.keys(d).map((F) => {
      let _ = E(F, d, z);
      return z === "base" && typeof _ == "string" ? _ : _ && _[z];
    }).filter(Boolean), T = y && Object.fromEntries(Object.entries(y).filter(([, z]) => z !== void 0)), R = (z = []) => z == null ? void 0 : z.filter(({ class: F, className: _, ...V }) => Object.entries(V).every(([M, I]) => {
      var O;
      let k = typeof (y == null ? void 0 : y[M]) == "object" ? (O = y[M]) == null ? void 0 : O.initial : {}, C = { ...g, ...k, ...T };
      return Array.isArray(I) ? I.includes(C[M]) : C[M] === I;
    })).flatMap(({ class: F, className: _ }) => [F, _]), N = () => {
      var z;
      let F = R(u), _ = R((z = e == null ? void 0 : e.extend) == null ? void 0 : z.compoundVariants);
      return p6(_, F);
    }, D = () => {
      let z = N();
      return Array.isArray(z) ? z.reduce((F, _) => (typeof _ == "string" && (F.base = sl(F.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([V, M]) => {
        F[V] = sl(F[V], M)(t);
      }), F), {}) : z;
    };
    if (!en(a) || !en((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let z = (A = D()) != null ? A : [];
      return { ...typeof v == "object" && !en(v) ? Object.keys(v).reduce((F, _) => (F[_] = (V) => sl(v[_], P(_), z == null ? void 0 : z[_], V == null ? void 0 : V.class, V == null ? void 0 : V.className)(t), F), {}) : {} };
    }
    return sl(f, $(), N(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const W6 = U6({
  slots: {
    base: "text-mayumi-gray-1200 bg-mayumi-gray-400 outline-none relative w-full border-box inline-flex items-center justify-start overflow-visible rounded-md p-2 text-sm",
    input: "appearance-none bg-mayumi-gray-400 border-none bg-transparent outline-none w-full box-border indent-1 rounded-md",
    effect: "absolute top-0 left-0 w-full h-full rounded-md pointer-events-none transform-origin-center"
  },
  variants: {
    light: {
      true: {
        base: "outline-none outline-[0px]"
      }
    },
    focus: {
      true: {
        base: "outline-none outline-[0px] border-transparent",
        effect: "shadow-[0px_0px_0px_4px_hsla(211,_85.1%,_27.4%,_1)]"
      }
    },
    ghost: {
      true: "border-none bg-transparent"
    },
    size: {
      sm: {
        input: "leading-3 h-3"
      },
      md: {
        input: "leading-4 h-4"
      }
    }
  },
  compoundVariants: [
    {
      light: !0,
      focus: !0,
      class: "focus:ring ring-4 ring-offset-[0px] ring-mayumi-primary-700"
    }
  ],
  defaultVariants: {
    light: !1,
    focus: !1,
    size: "md"
  }
}), q6 = d6("div", {
  border: "1px solid $quaternaryLabelColor",
  "& .mayumi-input-icon": {
    flexBox: "center",
    mr: "$1",
    color: "$placeholderTextColor",
    "--ggs": 0.75,
    "& i": {
      color: "$placeholderTextColor"
    }
  },
  variants: {
    size: {
      sm: {
        "& .mayumi-input-icon": {
          w: "$3",
          h: "$3"
        }
      },
      md: {
        "& .mayumi-input-icon": {
          w: "$4",
          h: "$4"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Q6 = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, ug = je.forwardRef(({
  style: e,
  className: t,
  prefix: n,
  size: r,
  css: o,
  ghost: i = !1,
  light: l = !1,
  ...a
}, s) => {
  const u = m.exports.useRef(null), [c, f] = m.exports.useState(!1), [d, g] = m.exports.useState(a.defaultValue), h = (A) => {
    var S;
    g(A.target.value), (S = a == null ? void 0 : a.onChange) == null || S.call(a, A);
  }, v = "value" in a, w = m.exports.useMemo(() => v ? a.value : d, [v, d, a.value]);
  m.exports.useImperativeHandle(s, () => u.current);
  const p = nR({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: Q6
  });
  wR(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = W6({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ he(q6, {
    style: e,
    className: lv("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ B("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && je.createElement(xR.div, {
      className: lv("mayumi-input-effect", x()),
      style: p
    }), /* @__PURE__ */ B("input", {
      ...a,
      value: w,
      onFocus: () => {
        f(!0);
      },
      className: b(),
      ref: u,
      onChange: h
    })]
  });
});
ug.displayName = "input";
function bk(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = bk(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ei() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = bk(e)) && (r && (r += " "), r += t);
  return r;
}
const $v = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (s, u) => {
    const c = typeof s == "function" ? s(t) : s;
    if (!Object.is(c, t)) {
      const f = t;
      t = (u != null ? u : typeof c != "object") ? c : Object.assign({}, t, c), n.forEach((d) => d(t, f));
    }
  }, o = () => t, a = { setState: r, getState: o, subscribe: (s) => (n.add(s), () => n.delete(s)), destroy: () => {
    ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } };
  return t = e(r, o, a), a;
}, G6 = (e) => e ? $v(e) : $v;
var Sk = { exports: {} }, kk = {}, Ck = { exports: {} }, $k = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai = m.exports;
function K6(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Y6 = typeof Object.is == "function" ? Object.is : K6, X6 = Ai.useState, Z6 = Ai.useEffect, J6 = Ai.useLayoutEffect, eT = Ai.useDebugValue;
function tT(e, t) {
  var n = t(), r = X6({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return J6(function() {
    o.value = n, o.getSnapshot = t, ud(o) && i({ inst: o });
  }, [e, n, t]), Z6(function() {
    return ud(o) && i({ inst: o }), e(function() {
      ud(o) && i({ inst: o });
    });
  }, [e]), eT(n), n;
}
function ud(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Y6(e, n);
  } catch {
    return !0;
  }
}
function nT(e, t) {
  return t();
}
var rT = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? nT : tT;
$k.useSyncExternalStore = Ai.useSyncExternalStore !== void 0 ? Ai.useSyncExternalStore : rT;
(function(e) {
  e.exports = $k;
})(Ck);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc = m.exports, oT = Ck.exports;
function iT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lT = typeof Object.is == "function" ? Object.is : iT, aT = oT.useSyncExternalStore, sT = Bc.useRef, uT = Bc.useEffect, cT = Bc.useMemo, fT = Bc.useDebugValue;
kk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = sT(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = cT(function() {
    function s(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, g))
            return f = h;
        }
        return f = g;
      }
      if (h = f, lT(c, g))
        return h;
      var v = r(g);
      return o !== void 0 && o(h, v) ? h : (c = g, f = v);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, d === null ? void 0 : function() {
      return s(d());
    }];
  }, [t, n, r, o]);
  var a = aT(e, i[0], i[1]);
  return uT(function() {
    l.hasValue = !0, l.value = a;
  }, [a]), fT(a), a;
};
(function(e) {
  e.exports = kk;
})(Sk);
const dT = /* @__PURE__ */ Lh(Sk.exports), { useSyncExternalStoreWithSelector: pT } = dT;
function hT(e, t = e.getState, n) {
  const r = pT(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return m.exports.useDebugValue(r), r;
}
const Ev = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? G6(e) : e, n = (r, o) => hT(t, r, o);
  return Object.assign(n, t), n;
}, cg = (e) => e ? Ev(e) : Ev;
function fg(e) {
  let t;
  try {
    t = e();
  } catch {
    return;
  }
  return {
    getItem: (r) => {
      var o;
      const i = (a) => a === null ? null : JSON.parse(a), l = (o = t.getItem(r)) != null ? o : null;
      return l instanceof Promise ? l.then(i) : i(l);
    },
    setItem: (r, o) => t.setItem(r, JSON.stringify(o)),
    removeItem: (r) => t.removeItem(r)
  };
}
const va = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return va(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return va(r)(n);
      }
    };
  }
}, mT = (e, t) => (n, r, o) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (w) => w,
    version: 0,
    merge: (w, p) => ({
      ...p,
      ...w
    }),
    ...t
  }, l = !1;
  const a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  let u;
  try {
    u = i.getStorage();
  } catch {
  }
  if (!u)
    return e(
      (...w) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), n(...w);
      },
      r,
      o
    );
  const c = va(i.serialize), f = () => {
    const w = i.partialize({ ...r() });
    let p;
    const y = c({ state: w, version: i.version }).then(
      (x) => u.setItem(i.name, x)
    ).catch((x) => {
      p = x;
    });
    if (p)
      throw p;
    return y;
  }, d = o.setState;
  o.setState = (w, p) => {
    d(w, p), f();
  };
  const g = e(
    (...w) => {
      n(...w), f();
    },
    r,
    o
  );
  let h;
  const v = () => {
    var w;
    if (!u)
      return;
    l = !1, a.forEach((y) => y(r()));
    const p = ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, r())) || void 0;
    return va(u.getItem.bind(u))(i.name).then((y) => {
      if (y)
        return i.deserialize(y);
    }).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var x;
      return h = i.merge(
        y,
        (x = r()) != null ? x : g
      ), n(h, !0), f();
    }).then(() => {
      p == null || p(h, void 0), l = !0, s.forEach((y) => y(h));
    }).catch((y) => {
      p == null || p(void 0, y);
    });
  };
  return o.persist = {
    setOptions: (w) => {
      i = {
        ...i,
        ...w
      }, w.getStorage && (u = w.getStorage());
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => l,
    onHydrate: (w) => (a.add(w), () => {
      a.delete(w);
    }),
    onFinishHydration: (w) => (s.add(w), () => {
      s.delete(w);
    })
  }, v(), h || g;
}, gT = (e, t) => (n, r, o) => {
  let i = {
    storage: fg(() => localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, w) => ({
      ...w,
      ...v
    }),
    ...t
  }, l = !1;
  const a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return e(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), n(...v);
      },
      r,
      o
    );
  const c = () => {
    const v = i.partialize({ ...r() });
    return u.setItem(i.name, {
      state: v,
      version: i.version
    });
  }, f = o.setState;
  o.setState = (v, w) => {
    f(v, w), c();
  };
  const d = e(
    (...v) => {
      n(...v), c();
    },
    r,
    o
  );
  let g;
  const h = () => {
    var v;
    if (!u)
      return;
    l = !1, a.forEach((p) => p(r()));
    const w = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, r())) || void 0;
    return va(u.getItem.bind(u))(i.name).then((p) => {
      if (p)
        if (typeof p.version == "number" && p.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              p.state,
              p.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return p.state;
    }).then((p) => {
      var y;
      return g = i.merge(
        p,
        (y = r()) != null ? y : d
      ), n(g, !0), c();
    }).then(() => {
      w == null || w(g, void 0), l = !0, s.forEach((p) => p(g));
    }).catch((p) => {
      w == null || w(void 0, p);
    });
  };
  return o.persist = {
    setOptions: (v) => {
      i = {
        ...i,
        ...v
      }, v.storage && (u = v.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => h(),
    hasHydrated: () => l,
    onHydrate: (v) => (a.add(v), () => {
      a.delete(v);
    }),
    onFinishHydration: (v) => (s.add(v), () => {
      s.delete(v);
    })
  }, h(), g || d;
}, vT = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), mT(e, t)) : gT(e, t), Ek = vT, yT = {
  getItem: async (e) => (await ot.storage.local.get(e))[e],
  setItem(e, t) {
    return ot.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.local.remove(e);
  }
}, xT = {
  getItem: async (e) => (await ot.storage.sync.get(e))[e],
  setItem(e, t) {
    return ot.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.sync.remove(e);
  }
}, wT = (e, t) => (n, r, o) => {
  const i = (l, a, s) => {
    const u = s === void 0 ? { type: "anonymous" } : typeof s == "string" ? { type: s } : s;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, a), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, dg = wT, Pi = cg()(
  dg(
    Ek(
      (e) => ({
        conventions: {},
        newConvention: async (t) => e((n) => ({
          conventions: {
            ...n.conventions,
            [t]: []
          }
        }), !1, "newConvention"),
        upsertConventions: async (t, n) => e((r) => ({
          conventions: {
            ...r.conventions,
            [t]: r.conventions[t].concat(n)
          }
        }), !1, "upsertConventions"),
        updateOrUpsertConventions: async (t, n) => e((r) => {
          var l;
          let o = (l = r.conventions[t]) != null ? l : [];
          const i = o[o.length - 1];
          return (i == null ? void 0 : i.id) !== n.id ? {
            conventions: {
              ...r.conventions,
              [t]: o.concat(n)
            }
          } : (o = o.map((a) => a.id === n.id ? {
            ...a,
            ...n
          } : a), {
            conventions: {
              ...r.conventions,
              [t]: o
            }
          });
        }, !1, "updateOrUpsertConventions"),
        clear: () => e({ conventions: {} })
      }),
      {
        name: "aiflow-message-store",
        storage: fg(() => yT)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), ya = cg()(
  dg(
    (e) => ({
      open: !1,
      subCommandOpen: !1,
      chatOpen: !1,
      toggle() {
        e((t) => ({
          open: !t.open
        }));
      },
      setOpen(t) {
        e(() => ({
          open: t
        }));
      },
      toggleSubCommand() {
        e((t) => ({
          subCommandOpen: !t.subCommandOpen
        }));
      },
      setSubCommandOpen(t) {
        e(() => ({
          subCommandOpen: t
        }));
      },
      toggleChatOpen() {
        e((t) => ({
          chatOpen: !t.chatOpen
        }));
      },
      updateChatOpen(t) {
        e(() => ({
          chatOpen: !!t
        }));
      }
    }),
    {
      name: "cmdk-store"
    }
  )
), Ak = cg()(
  dg(
    Ek(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: fg(() => xT) }
    ),
    {
      name: "user-config-store"
    }
  )
), eu = "ask-chatgpt", Av = "ask-chatgpt-with", Uu = "translate-with", tu = "summary-with", dh = "ask-chatgpt-with-page", Wu = "config-page", qu = "translate-with-page", Yr = "home-page", bT = "OPENAI_API_KEY", Pv = "options";
function ST(e) {
  return /* @__PURE__ */ B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ B("g", {
      fill: "none",
      children: /* @__PURE__ */ B("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm4 3a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h6.432a8.323 8.323 0 0 1-1.117 3.127L7.753 8.34a1 1 0 1 0-1.506 1.32l1.837 2.098C6.7 13.231 5.1 14 4 14a1 1 0 1 0 0 2c1.806 0 3.83-1.111 5.406-2.732l.341.39a1 1 0 0 0 1.506-1.316l-.567-.648c.908-1.341 1.573-2.941 1.76-4.694H14a1 1 0 1 0 0-2H9V4zm7.894 5.553a1 1 0 0 0-1.788 0l-3 6a.998.998 0 0 0-.055.13l-1 3a1 1 0 0 0 1.898.633L13.72 17h4.558l.772 2.316a1 1 0 0 0 1.898-.632l-1-3a.998.998 0 0 0-.055-.131l-3-6zM16 12.236L17.382 15h-2.764L16 12.236z",
        fill: "currentColor"
      })
    })
  });
}
function ph(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function kT(e) {
  const t = e + "CollectionProvider", [n, r] = Ii(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (g) => {
    const { scope: h, children: v } = g, w = je.useRef(null), p = je.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ je.createElement(o, {
      scope: h,
      itemMap: p,
      collectionRef: w
    }, v);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ je.forwardRef((g, h) => {
    const { scope: v, children: w } = g, p = i(a, v), y = Ce(h, p.collectionRef);
    return /* @__PURE__ */ je.createElement(ki, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ je.forwardRef((g, h) => {
    const { scope: v, children: w, ...p } = g, y = je.useRef(null), x = Ce(h, y), b = i(u, v);
    return je.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ je.createElement(ki, {
      [c]: "",
      ref: x
    }, w);
  });
  function d(g) {
    const h = i(e + "CollectionConsumer", g);
    return je.useCallback(() => {
      const w = h.collectionRef.current;
      if (!w)
        return [];
      const p = Array.from(w.querySelectorAll(`[${c}]`));
      return Array.from(h.itemMap.values()).sort(
        (b, A) => p.indexOf(b.ref.current) - p.indexOf(A.ref.current)
      );
    }, [
      h.collectionRef,
      h.itemMap
    ]);
  }
  return [
    {
      Provider: l,
      Slot: s,
      ItemSlot: f
    },
    d,
    r
  ];
}
const CT = /* @__PURE__ */ m.exports.createContext(void 0);
function Pk(e) {
  const t = m.exports.useContext(CT);
  return e || t || "ltr";
}
function $T(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ET = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(He.span, Z({}, e, {
  ref: t,
  style: {
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), AT = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], PT = [
  " ",
  "Enter"
], jc = "Select", [Vc, Hc, _T] = kT(jc), [Bi, Qz] = Ii(jc, [
  _T,
  $c
]), pg = $c(), [RT, Co] = Bi(jc), [TT, IT] = Bi(jc), OT = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: s, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = pg(t), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = Pk(u), [S = !1, E] = Lu({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [$, P] = Lu({
    prop: l,
    defaultProp: a,
    onChange: s
  }), T = m.exports.useRef(null), R = v ? Boolean(v.closest("form")) : !0, [N, D] = m.exports.useState(/* @__PURE__ */ new Set()), z = Array.from(N).map(
    (F) => F.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Vb, h, /* @__PURE__ */ m.exports.createElement(RT, {
    required: g,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: ai(),
    value: $,
    onValueChange: P,
    open: S,
    onOpenChange: E,
    dir: A,
    triggerPointerDownPosRef: T,
    disabled: d
  }, /* @__PURE__ */ m.exports.createElement(Vc.Provider, {
    scope: t
  }, /* @__PURE__ */ m.exports.createElement(TT, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: m.exports.useCallback((F) => {
      D(
        (_) => new Set(_).add(F)
      );
    }, []),
    onNativeOptionRemove: m.exports.useCallback((F) => {
      D((_) => {
        const V = new Set(_);
        return V.delete(F), V;
      });
    }, [])
  }, n)), R ? /* @__PURE__ */ m.exports.createElement(Tk, {
    key: z,
    "aria-hidden": !0,
    required: g,
    tabIndex: -1,
    name: c,
    autoComplete: f,
    value: $,
    onChange: (F) => P(F.target.value),
    disabled: d
  }, $ === void 0 ? /* @__PURE__ */ m.exports.createElement("option", {
    value: ""
  }) : null, Array.from(N)) : null));
}, NT = "SelectTrigger", MT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = pg(n), l = Co(NT, n), a = l.disabled || r, s = Ce(t, l.onTriggerChange), u = Hc(n), [c, f, d] = Ik((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = Ok(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    a || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement(Hb, Z({
    asChild: !0
  }, i), /* @__PURE__ */ m.exports.createElement(He.button, Z({
    type: "button",
    role: "combobox",
    "aria-controls": l.contentId,
    "aria-expanded": l.open,
    "aria-required": l.required,
    "aria-autocomplete": "none",
    dir: l.dir,
    "data-state": l.open ? "open" : "closed",
    disabled: a,
    "data-disabled": a ? "" : void 0,
    "data-placeholder": l.value === void 0 ? "" : void 0
  }, o, {
    ref: s,
    onClick: ye(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: ye(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (g(), l.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: ye(o.onKeyDown, (h) => {
      const v = c.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && AT.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), DT = "SelectValue", LT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...a } = e, s = Co(DT, n), { onValueNodeHasChildrenChange: u } = s, c = i !== void 0, f = Ce(t, s.onValueNodeChange);
  return Xe(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ m.exports.createElement(He.span, Z({}, a, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), s.value === void 0 && l !== void 0 ? l : i);
}), FT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(He.span, Z({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), zT = (e) => /* @__PURE__ */ m.exports.createElement(Wb, Z({
  asChild: !0
}, e)), _i = "SelectContent", BT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Co(_i, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Xe(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ Gt.exports.createPortal(/* @__PURE__ */ m.exports.createElement(_k, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(Vc.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(jT, Z({}, e, {
    ref: t
  }));
}), Dn = 10, [_k, $o] = Bi(_i), jT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    side: a,
    sideOffset: s,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: g,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: w,
    ...p
  } = e, y = Co(_i, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), E = Ce(
    t,
    (Q) => b(Q)
  ), [$, P] = m.exports.useState(null), [T, R] = m.exports.useState(null), N = Hc(n), [D, z] = m.exports.useState(!1), F = m.exports.useRef(!1);
  m.exports.useEffect(() => {
    if (x)
      return Bm(x);
  }, [
    x
  ]), Mm();
  const _ = m.exports.useCallback((Q) => {
    const [ie, ...xe] = N().map(
      (se) => se.ref.current
    ), [ue] = xe.slice(-1), fe = document.activeElement;
    for (const se of Q)
      if (se === fe || (se == null || se.scrollIntoView({
        block: "nearest"
      }), se === ie && A && (A.scrollTop = 0), se === ue && A && (A.scrollTop = A.scrollHeight), se == null || se.focus(), document.activeElement !== fe))
        return;
  }, [
    N,
    A
  ]), V = m.exports.useCallback(
    () => _([
      $,
      x
    ]),
    [
      _,
      $,
      x
    ]
  );
  m.exports.useEffect(() => {
    D && V();
  }, [
    D,
    V
  ]);
  const { onOpenChange: M, triggerPointerDownPosRef: I } = y;
  m.exports.useEffect(() => {
    if (x) {
      let Q = {
        x: 0,
        y: 0
      };
      const ie = (ue) => {
        var fe, se, at, st;
        Q = {
          x: Math.abs(Math.round(ue.pageX) - ((fe = (se = I.current) === null || se === void 0 ? void 0 : se.x) !== null && fe !== void 0 ? fe : 0)),
          y: Math.abs(Math.round(ue.pageY) - ((at = (st = I.current) === null || st === void 0 ? void 0 : st.y) !== null && at !== void 0 ? at : 0))
        };
      }, xe = (ue) => {
        Q.x <= 10 && Q.y <= 10 ? ue.preventDefault() : x.contains(ue.target) || M(!1), document.removeEventListener("pointermove", ie), I.current = null;
      };
      return I.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", xe, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", xe, {
          capture: !0
        });
      };
    }
  }, [
    x,
    M,
    I
  ]), m.exports.useEffect(() => {
    const Q = () => M(!1);
    return window.addEventListener("blur", Q), window.addEventListener("resize", Q), () => {
      window.removeEventListener("blur", Q), window.removeEventListener("resize", Q);
    };
  }, [
    M
  ]);
  const [O, k] = Ik((Q) => {
    const ie = N().filter(
      (fe) => !fe.disabled
    ), xe = ie.find(
      (fe) => fe.ref.current === document.activeElement
    ), ue = Ok(ie, Q, xe);
    ue && setTimeout(
      () => ue.ref.current.focus()
    );
  }), C = m.exports.useCallback((Q, ie, xe) => {
    const ue = !F.current && !xe;
    (y.value !== void 0 && y.value === ie || ue) && (P(Q), ue && (F.current = !0));
  }, [
    y.value
  ]), J = m.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), ne = m.exports.useCallback((Q, ie, xe) => {
    const ue = !F.current && !xe;
    (y.value !== void 0 && y.value === ie || ue) && R(Q);
  }, [
    y.value
  ]), ae = r === "popper" ? _v : VT, ee = ae === _v ? {
    side: a,
    sideOffset: s,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: g,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: w
  } : {};
  return /* @__PURE__ */ m.exports.createElement(_k, {
    scope: n,
    content: x,
    viewport: A,
    onViewportChange: S,
    itemRefCallback: C,
    selectedItem: $,
    onItemLeave: J,
    itemTextRefCallback: ne,
    focusSelectedItem: V,
    selectedItemText: T,
    position: r,
    isPositioned: D,
    searchRef: O
  }, /* @__PURE__ */ m.exports.createElement(nS, {
    as: ki,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Dm, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (Q) => {
      Q.preventDefault();
    },
    onUnmountAutoFocus: ye(o, (Q) => {
      var ie;
      (ie = y.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), Q.preventDefault();
    })
  }, /* @__PURE__ */ m.exports.createElement(Nm, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (Q) => Q.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(ae, Z({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (Q) => Q.preventDefault()
  }, p, ee, {
    onPlaced: () => z(!0),
    ref: E,
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      ...p.style
    },
    onKeyDown: ye(p.onKeyDown, (Q) => {
      const ie = Q.ctrlKey || Q.altKey || Q.metaKey;
      if (Q.key === "Tab" && Q.preventDefault(), !ie && Q.key.length === 1 && k(Q.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Q.key)) {
        let ue = N().filter(
          (fe) => !fe.disabled
        ).map(
          (fe) => fe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Q.key) && (ue = ue.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Q.key)) {
          const fe = Q.target, se = ue.indexOf(fe);
          ue = ue.slice(se + 1);
        }
        setTimeout(
          () => _(ue)
        ), Q.preventDefault();
      }
    })
  }))))));
}), VT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Co(_i, n), l = $o(_i, n), [a, s] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = Ce(
    t,
    (E) => c(E)
  ), d = Hc(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && v && w && p) {
      const E = i.trigger.getBoundingClientRect(), $ = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), T = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const fe = T.left - $.left, se = P.left - fe, at = E.left - se, st = E.width + at, Br = Math.max(st, $.width), Jn = window.innerWidth - Dn, er = ph(se, [
          Dn,
          Jn - Br
        ]);
        a.style.minWidth = st + "px", a.style.left = er + "px";
      } else {
        const fe = $.right - T.right, se = window.innerWidth - P.right - fe, at = window.innerWidth - E.right - se, st = E.width + at, Br = Math.max(st, $.width), Jn = window.innerWidth - Dn, er = ph(se, [
          Dn,
          Jn - Br
        ]);
        a.style.minWidth = st + "px", a.style.right = er + "px";
      }
      const R = d(), N = window.innerHeight - Dn * 2, D = v.scrollHeight, z = window.getComputedStyle(u), F = parseInt(z.borderTopWidth, 10), _ = parseInt(z.paddingTop, 10), V = parseInt(z.borderBottomWidth, 10), M = parseInt(z.paddingBottom, 10), I = F + _ + D + M + V, O = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = E.top + E.height / 2 - Dn, ae = N - ne, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ie = F + _ + Q, xe = I - ie;
      if (ie <= ne) {
        const fe = w === R[R.length - 1].ref.current;
        a.style.bottom = "0px";
        const se = u.clientHeight - v.offsetTop - v.offsetHeight, at = Math.max(ae, ee + (fe ? J : 0) + se + V), st = ie + at;
        a.style.height = st + "px";
      } else {
        const fe = w === R[0].ref.current;
        a.style.top = "0px";
        const at = Math.max(ne, F + v.offsetTop + (fe ? C : 0) + ee) + xe;
        a.style.height = at + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      a.style.margin = `${Dn}px 0`, a.style.minHeight = O + "px", a.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(
        () => g.current = !0
      );
    }
  }, [
    d,
    i.trigger,
    i.valueNode,
    a,
    u,
    v,
    w,
    p,
    i.dir,
    r
  ]);
  Xe(
    () => x(),
    [
      x
    ]
  );
  const [b, A] = m.exports.useState();
  Xe(() => {
    u && A(window.getComputedStyle(u).zIndex);
  }, [
    u
  ]);
  const S = m.exports.useCallback((E) => {
    E && h.current === !0 && (x(), y == null || y(), h.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ m.exports.createElement(HT, {
    scope: n,
    contentWrapper: a,
    shouldExpandOnScrollRef: g,
    onScrollButtonChange: S
  }, /* @__PURE__ */ m.exports.createElement("div", {
    ref: s,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: b
    }
  }, /* @__PURE__ */ m.exports.createElement(He.div, Z({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), _v = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Dn, ...i } = e, l = pg(n);
  return /* @__PURE__ */ m.exports.createElement(Ub, Z({}, l, i, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      boxSizing: "border-box",
      ...i.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [HT, hg] = Bi(_i, {}), Rv = "SelectViewport", UT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = $o(Rv, n), i = hg(Rv, n), l = Ce(t, o.onViewportChange), a = m.exports.useRef(0);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Vc.Slot, {
    scope: n
  }, /* @__PURE__ */ m.exports.createElement(He.div, Z({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: l,
    style: {
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: ye(r.onScroll, (s) => {
      const u = s.currentTarget, { contentWrapper: c, shouldExpandOnScrollRef: f } = i;
      if (f != null && f.current && c) {
        const d = Math.abs(a.current - u.scrollTop);
        if (d > 0) {
          const g = window.innerHeight - Dn * 2, h = parseFloat(c.style.minHeight), v = parseFloat(c.style.height), w = Math.max(h, v);
          if (w < g) {
            const p = w + d, y = Math.min(g, p), x = p - y;
            c.style.height = y + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      a.current = u.scrollTop;
    })
  }))));
}), WT = "SelectGroup";
Bi(WT);
const hh = "SelectItem", [qT, QT] = Bi(hh), GT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, a = Co(hh, n), s = $o(hh, n), u = a.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = Ce(t, (p) => {
    var y;
    return (y = s.itemRefCallback) === null || y === void 0 ? void 0 : y.call(s, p, r, o);
  }), v = ai(), w = () => {
    o || (a.onValueChange(r), a.onOpenChange(!1));
  };
  return /* @__PURE__ */ m.exports.createElement(qT, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: u,
    onItemTextChange: m.exports.useCallback((p) => {
      f((y) => {
        var x;
        return y || ((x = p == null ? void 0 : p.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ m.exports.createElement(Vc.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: c
  }, /* @__PURE__ */ m.exports.createElement(He.div, Z({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": d ? "" : void 0,
    "aria-selected": u && d,
    "data-state": u ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, l, {
    ref: h,
    onFocus: ye(
      l.onFocus,
      () => g(!0)
    ),
    onBlur: ye(
      l.onBlur,
      () => g(!1)
    ),
    onPointerUp: ye(l.onPointerUp, w),
    onPointerMove: ye(l.onPointerMove, (p) => {
      if (o) {
        var y;
        (y = s.onItemLeave) === null || y === void 0 || y.call(s);
      } else
        p.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ye(l.onPointerLeave, (p) => {
      if (p.currentTarget === document.activeElement) {
        var y;
        (y = s.onItemLeave) === null || y === void 0 || y.call(s);
      }
    }),
    onKeyDown: ye(l.onKeyDown, (p) => {
      var y;
      ((y = s.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (PT.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), $s = "SelectItemText", KT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = Co($s, n), a = $o($s, n), s = QT($s, n), u = IT($s, n), [c, f] = m.exports.useState(null), d = Ce(
    t,
    (p) => f(p),
    s.onItemTextChange,
    (p) => {
      var y;
      return (y = a.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, s.value, s.disabled);
    }
  ), g = c == null ? void 0 : c.textContent, h = m.exports.useMemo(
    () => /* @__PURE__ */ m.exports.createElement("option", {
      key: s.value,
      value: s.value,
      disabled: s.disabled
    }, g),
    [
      s.disabled,
      s.value,
      g
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
  return Xe(() => (v(h), () => w(h)), [
    v,
    w,
    h
  ]), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(He.span, Z({
    id: s.textId
  }, i, {
    ref: d
  })), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ Gt.exports.createPortal(i.children, l.valueNode) : null);
}), Tv = "SelectScrollUpButton", YT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = $o(Tv, e.__scopeSelect), r = hg(Tv, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
  return Xe(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const c = s.scrollTop > 0;
        i(c);
      };
      var a = u;
      const s = n.viewport;
      return u(), s.addEventListener("scroll", u), () => s.removeEventListener("scroll", u);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), o ? /* @__PURE__ */ m.exports.createElement(Rk, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop - s.offsetHeight);
    }
  })) : null;
}), Iv = "SelectScrollDownButton", XT = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = $o(Iv, e.__scopeSelect), r = hg(Iv, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
  return Xe(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const c = s.scrollHeight - s.clientHeight, f = Math.ceil(s.scrollTop) < c;
        i(f);
      };
      var a = u;
      const s = n.viewport;
      return u(), s.addEventListener("scroll", u), () => s.removeEventListener("scroll", u);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), o ? /* @__PURE__ */ m.exports.createElement(Rk, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop + s.offsetHeight);
    }
  })) : null;
}), Rk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = $o("SelectScrollButton", n), l = m.exports.useRef(null), a = Hc(n), s = m.exports.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return m.exports.useEffect(() => () => s(), [
    s
  ]), Xe(() => {
    var u;
    const c = a().find(
      (f) => f.ref.current === document.activeElement
    );
    c == null || (u = c.ref.current) === null || u === void 0 || u.scrollIntoView({
      block: "nearest"
    });
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(He.div, Z({
    "aria-hidden": !0
  }, o, {
    ref: t,
    style: {
      flexShrink: 0,
      ...o.style
    },
    onPointerMove: ye(o.onPointerMove, () => {
      var u;
      (u = i.onItemLeave) === null || u === void 0 || u.call(i), l.current === null && (l.current = window.setInterval(r, 50));
    }),
    onPointerLeave: ye(o.onPointerLeave, () => {
      s();
    })
  }));
}), Tk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = Ce(t, o), l = $T(n);
  return m.exports.useEffect(() => {
    const a = o.current, s = window.HTMLSelectElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (l !== n && c) {
      const f = new Event("change", {
        bubbles: !0
      });
      c.call(a, n), a.dispatchEvent(f);
    }
  }, [
    l,
    n
  ]), /* @__PURE__ */ m.exports.createElement(ET, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", Z({}, r, {
    ref: i,
    defaultValue: n
  })));
});
Tk.displayName = "BubbleSelect";
function Ik(e) {
  const t = rt(e), n = m.exports.useRef(""), r = m.exports.useRef(0), o = m.exports.useCallback((l) => {
    const a = n.current + l;
    t(a), function s(u) {
      n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(
        () => s(""),
        1e3
      ));
    }(a);
  }, [
    t
  ]), i = m.exports.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return m.exports.useEffect(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    i
  ];
}
function Ok(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = ZT(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const s = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function ZT(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const JT = OT, eI = MT, tI = LT, nI = FT, rI = zT, oI = BT, iI = UT, lI = GT, aI = KT, sI = YT, uI = XT, cI = {
  int: "Afrikaans",
  native: "Afrikaans"
}, fI = {
  int: "Albanian",
  native: "Shqip"
}, dI = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, pI = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, hI = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, mI = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, gI = {
  int: "Basque",
  native: "Euskara"
}, vI = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, yI = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, xI = {
  int: "Bosnian",
  native: "Bosanski"
}, wI = {
  int: "Breton",
  native: "Brezhoneg"
}, bI = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, SI = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, kI = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, CI = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, $I = {
  int: "Danish",
  native: "Dansk"
}, EI = {
  int: "Dutch",
  native: "Nederlands"
}, AI = {
  int: "English",
  native: "English"
}, PI = {
  int: "Esperanto",
  native: "Esperanto"
}, _I = {
  int: "Estonian",
  native: "Eesti"
}, RI = {
  int: "Faroese",
  native: "F\xF8royskt"
}, TI = {
  int: "Finnish",
  native: "Suomi"
}, II = {
  int: "French",
  native: "Fran\xE7ais"
}, OI = {
  int: "Galician",
  native: "Galego"
}, NI = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, MI = {
  int: "German",
  native: "Deutsch"
}, DI = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, LI = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, FI = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, zI = {
  int: "Hausa",
  native: "Hrvatski"
}, BI = {
  int: "Hausa",
  native: "Hausa"
}, jI = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, VI = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, HI = {
  int: "Hungarian",
  native: "Magyar"
}, UI = {
  int: "Icelandic",
  native: "\xCDslenska"
}, WI = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, qI = {
  int: "Irish",
  native: "Gaeilge"
}, QI = {
  int: "Italian",
  native: "Italiano"
}, GI = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, KI = {
  int: "Javanese",
  native: "Basa Jawa"
}, YI = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, XI = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, ZI = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, JI = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, eO = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, tO = {
  int: "Latin",
  native: "lingua latina"
}, nO = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, rO = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, oO = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, iO = {
  int: "Malagasy",
  native: "Malagasy"
}, lO = {
  int: "Malay",
  native: "Bahasa Melayu"
}, aO = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, sO = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, uO = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, cO = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, fO = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, dO = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, pO = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, hO = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, mO = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, gO = {
  int: "Polish",
  native: "Polski"
}, vO = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, yO = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, xO = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, wO = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, bO = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, SO = {
  int: "Sardinian",
  native: "Sardu"
}, kO = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, CO = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, $O = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, EO = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, AO = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, PO = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, _O = {
  int: "Somali",
  native: "Af-Soomaali"
}, RO = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, TO = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, IO = {
  int: "Swahili",
  native: "Kiswahili"
}, OO = {
  int: "Swedish",
  native: "Svenska"
}, NO = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, MO = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, DO = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, LO = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, FO = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, zO = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, BO = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, jO = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, VO = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, HO = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, UO = {
  int: "Uzbek",
  native: "O'zbek"
}, WO = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, qO = {
  int: "Visayan",
  native: "Bisaya"
}, QO = {
  int: "Welsh",
  native: "Cymraeg"
}, GO = {
  int: "West Frisian",
  native: "Frysk"
}, Ov = {
  af: cI,
  sq: fI,
  ar: dI,
  hy: pI,
  as: hI,
  az: mI,
  eu: gI,
  be: vI,
  bn: yI,
  bs: xI,
  br: wI,
  bg: bI,
  my: SI,
  ca: kI,
  cs: CI,
  da: $I,
  nl: EI,
  en: AI,
  eo: PI,
  et: _I,
  fo: RI,
  fi: TI,
  fr: II,
  gl: OI,
  ka: NI,
  de: MI,
  el: DI,
  gn: LI,
  gu: FI,
  hr: zI,
  ha: BI,
  he: jI,
  hi: VI,
  hu: HI,
  is: UI,
  id: WI,
  ga: qI,
  it: QI,
  ja: GI,
  jv: KI,
  kn: YI,
  kk: XI,
  km: ZI,
  ko: JI,
  ku: eO,
  la: tO,
  lv: nO,
  lt: rO,
  mk: oO,
  mg: iO,
  ms: lO,
  ml: aO,
  mr: sO,
  mn: uO,
  ne: cO,
  nb: fO,
  nn: dO,
  or: pO,
  ps: hO,
  fa: mO,
  pl: gO,
  pt: vO,
  pa: yO,
  ro: xO,
  ru: wO,
  rw: bO,
  sc: SO,
  sr: kO,
  sz: CO,
  zh: $O,
  si: EO,
  sk: AO,
  sl: PO,
  so: _O,
  cb: RO,
  es: TO,
  sw: IO,
  sv: OO,
  sy: NO,
  tl: MO,
  tg: DO,
  tz: LO,
  ta: FO,
  te: zO,
  th: BO,
  tr: jO,
  uk: VO,
  ur: HO,
  uz: UO,
  vi: WO,
  cx: qO,
  cy: QO,
  fy: GO
}, Nk = je.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ B(lI, {
  className: Ei("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ B(aI, {
    children: e
  })
}));
Nk.displayName = "SelectItem";
const KO = (e) => {
  var n;
  const t = Ak();
  return /* @__PURE__ */ he(JT, {
    value: (n = t[Pv]) == null ? void 0 : n[Uu].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [Pv]: {
          [Uu]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ he(eI, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ B(tI, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ B(nI, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ B("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ B(rI, {
      container: e.container.current,
      children: /* @__PURE__ */ he(oI, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ B(sI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ B(iI, {
          className: "p-[5px]",
          children: Object.keys(Ov).map((r) => {
            const o = Ov[r];
            return /* @__PURE__ */ B(Nk, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ B(uI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
}, YO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), XO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z", fill: "currentColor" })), ZO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" })), JO = () => ({
  set: async (e, t) => {
    await ot.storage.local.set({ [e]: t }).then(() => {
      console.log("Value is set to", t);
    });
  },
  get: async (e) => {
    const t = await ot.storage.local.get(e);
    return console.log("Value currently is", t), t[e];
  },
  getAll: async () => {
    const e = await ot.storage.local.get();
    return console.log("All local storage is", e), e;
  },
  clear: async () => {
    await ot.storage.local.clear();
  }
});
function e7(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Mk = "ScrollArea", [Dk, Gz] = Ii(Mk), [t7, _n] = Dk(Mk), n7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [a, s] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [E, $] = m.exports.useState(!1), P = Ce(
    t,
    (R) => s(R)
  ), T = Pk(o);
  return /* @__PURE__ */ m.exports.createElement(t7, {
    scope: n,
    type: r,
    dir: T,
    scrollHideDelay: i,
    scrollArea: a,
    viewport: u,
    onViewportChange: c,
    content: f,
    onContentChange: d,
    scrollbarX: g,
    onScrollbarXChange: h,
    scrollbarXEnabled: A,
    onScrollbarXEnabledChange: S,
    scrollbarY: v,
    onScrollbarYChange: w,
    scrollbarYEnabled: E,
    onScrollbarYEnabledChange: $,
    onCornerWidthChange: y,
    onCornerHeightChange: b
  }, /* @__PURE__ */ m.exports.createElement(He.div, Z({
    dir: T
  }, l, {
    ref: P,
    style: {
      position: "relative",
      ["--radix-scroll-area-corner-width"]: p + "px",
      ["--radix-scroll-area-corner-height"]: x + "px",
      ...e.style
    }
  })));
}), r7 = "ScrollAreaViewport", o7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = _n(r7, n), l = m.exports.useRef(null), a = Ce(t, l, i.onViewportChange);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(He.div, Z({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: a,
    style: {
      overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ m.exports.createElement("div", {
    ref: i.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), Xn = "ScrollAreaScrollbar", i7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _n(Xn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, a = e.orientation === "horizontal";
  return m.exports.useEffect(() => (a ? i(!0) : l(!0), () => {
    a ? i(!1) : l(!1);
  }), [
    a,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(l7, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement(a7, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement(Lk, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(mg, Z({}, r, {
    ref: t
  })) : null;
}), l7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _n(Xn, e.__scopeScrollArea), [i, l] = m.exports.useState(!1);
  return m.exports.useEffect(() => {
    const a = o.scrollArea;
    let s = 0;
    if (a) {
      const u = () => {
        window.clearTimeout(s), l(!0);
      }, c = () => {
        s = window.setTimeout(
          () => l(!1),
          o.scrollHideDelay
        );
      };
      return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", c), () => {
        window.clearTimeout(s), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", c);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ m.exports.createElement(Fr, {
    present: n || i
  }, /* @__PURE__ */ m.exports.createElement(Lk, Z({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), a7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _n(Xn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = Wc(
    () => s("SCROLL_END"),
    100
  ), [a, s] = e7("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return m.exports.useEffect(() => {
    if (a === "idle") {
      const u = window.setTimeout(
        () => s("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(u);
    }
  }, [
    a,
    o.scrollHideDelay,
    s
  ]), m.exports.useEffect(() => {
    const u = o.viewport, c = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[c];
      const d = () => {
        const g = u[c];
        f !== g && (s("SCROLL"), l()), f = g;
      };
      return u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [
    o.viewport,
    i,
    s,
    l
  ]), /* @__PURE__ */ m.exports.createElement(Fr, {
    present: n || a !== "hidden"
  }, /* @__PURE__ */ m.exports.createElement(mg, Z({
    "data-state": a === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: ye(
      e.onPointerEnter,
      () => s("POINTER_ENTER")
    ),
    onPointerLeave: ye(
      e.onPointerLeave,
      () => s("POINTER_LEAVE")
    )
  })));
}), Lk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = _n(Xn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), a = e.orientation === "horizontal", s = Wc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(a ? u : c);
    }
  }, 10);
  return Gu(n.viewport, s), Gu(n.content, s), /* @__PURE__ */ m.exports.createElement(Fr, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(mg, Z({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), mg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = _n(Xn, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [a, s] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = Bk(a.viewport, a.content), c = {
    ...r,
    sizes: a,
    onSizesChange: s,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return p7(d, l.current, a, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(s7, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = Nv(d, a, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(u7, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = Nv(d, a);
        i.current.style.transform = `translate3d(0, ${g}px, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollTop = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollTop = f(d));
    }
  })) : null;
}), s7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = _n(Xn, e.__scopeScrollArea), [l, a] = m.exports.useState(), s = m.exports.useRef(null), u = Ce(t, s, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(zk, Z({
    "data-orientation": "horizontal"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Uc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
    onDragScroll: (c) => e.onDragScroll(c.x),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollLeft + c.deltaX;
        e.onWheelScroll(d), Vk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: s.current.clientWidth,
          paddingStart: Qu(l.paddingLeft),
          paddingEnd: Qu(l.paddingRight)
        }
      });
    }
  }));
}), u7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = _n(Xn, e.__scopeScrollArea), [l, a] = m.exports.useState(), s = m.exports.useRef(null), u = Ce(t, s, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(zk, Z({
    "data-orientation": "vertical"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Uc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
    onDragScroll: (c) => e.onDragScroll(c.y),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollTop + c.deltaY;
        e.onWheelScroll(d), Vk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: s.current.clientHeight,
          paddingStart: Qu(l.paddingTop),
          paddingEnd: Qu(l.paddingBottom)
        }
      });
    }
  }));
}), [c7, Fk] = Dk(Xn), zk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: a, onThumbPositionChange: s, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = _n(Xn, n), [h, v] = m.exports.useState(null), w = Ce(
    t,
    (P) => v(P)
  ), p = m.exports.useRef(null), y = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = rt(c), S = rt(s), E = Wc(f, 10);
  function $(P) {
    if (p.current) {
      const T = P.clientX - p.current.left, R = P.clientY - p.current.top;
      u({
        x: T,
        y: R
      });
    }
  }
  return m.exports.useEffect(() => {
    const P = (T) => {
      const R = T.target;
      (h == null ? void 0 : h.contains(R)) && A(T, b);
    };
    return document.addEventListener("wheel", P, {
      passive: !1
    }), () => document.removeEventListener("wheel", P, {
      passive: !1
    });
  }, [
    x,
    h,
    b,
    A
  ]), m.exports.useEffect(S, [
    r,
    S
  ]), Gu(h, E), Gu(g.content, E), /* @__PURE__ */ m.exports.createElement(c7, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: rt(i),
    onThumbPointerUp: rt(l),
    onThumbPositionChange: S,
    onThumbPointerDown: rt(a)
  }, /* @__PURE__ */ m.exports.createElement(He.div, Z({}, d, {
    ref: w,
    style: {
      position: "absolute",
      ...d.style
    },
    onPointerDown: ye(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), p.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", $(P));
    }),
    onPointerMove: ye(e.onPointerMove, $),
    onPointerUp: ye(e.onPointerUp, (P) => {
      const T = P.target;
      T.hasPointerCapture(P.pointerId) && T.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), mh = "ScrollAreaThumb", f7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Fk(mh, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(Fr, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(d7, Z({
    ref: t
  }, r)));
}), d7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = _n(mh, n), l = Fk(mh, n), { onThumbPositionChange: a } = l, s = Ce(
    t,
    (f) => l.onThumbChange(f)
  ), u = m.exports.useRef(), c = Wc(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return m.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const g = h7(f, a);
          u.current = g, a();
        }
      };
      return a(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    a
  ]), /* @__PURE__ */ m.exports.createElement(He.div, Z({
    "data-state": l.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: s,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ye(e.onPointerDownCapture, (f) => {
      const g = f.target.getBoundingClientRect(), h = f.clientX - g.left, v = f.clientY - g.top;
      l.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: ye(e.onPointerUp, l.onThumbPointerUp)
  }));
});
function Qu(e) {
  return e ? parseInt(e, 10) : 0;
}
function Bk(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Uc(e) {
  const t = Bk(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function p7(e, t, n, r = "ltr") {
  const o = Uc(n), i = o / 2, l = t || i, a = o - l, s = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return jk([
    s,
    u
  ], f)(e);
}
function Nv(e, t, n = "ltr") {
  const r = Uc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, a = i - r, s = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = ph(e, s);
  return jk([
    0,
    l
  ], [
    0,
    a
  ])(u);
}
function jk(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Vk(e, t) {
  return e > 0 && e < t;
}
const h7 = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const i = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, l = n.left !== i.left, a = n.top !== i.top;
    (l || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Wc(e, t) {
  const n = rt(e), r = m.exports.useRef(0);
  return m.exports.useEffect(
    () => () => window.clearTimeout(r.current),
    []
  ), m.exports.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Gu(e, t) {
  const n = rt(t);
  Xe(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const m7 = n7, g7 = o7, Mv = i7, Dv = f7, Lv = (e) => typeof e == "object" && e != null && e.nodeType === 1, Fv = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", cd = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Fv(n.overflowY, t) || Fv(n.overflowX, t) || ((r) => {
      const o = ((i) => {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!o && (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth);
    })(e);
  }
  return !1;
}, Es = (e, t, n, r, o, i, l, a) => i < e && l > t || i > e && l < t ? 0 : i <= e && a <= n || l >= t && a >= n ? i - e - r : l > t && a < n || i < e && a > n ? l - t + o : 0, v7 = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, zv = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: a, inline: s, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (N) => N !== u;
  if (!Lv(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Lv(h) && f(h); ) {
    if (h = v7(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && cd(h) && !cd(document.documentElement) || h != null && cd(h, c) && g.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: E, left: $ } = e.getBoundingClientRect();
  let P = a === "start" || a === "nearest" ? A : a === "end" ? E : A + x / 2, T = s === "center" ? $ + b / 2 : s === "end" ? S : $;
  const R = [];
  for (let N = 0; N < g.length; N++) {
    const D = g[N], { height: z, width: F, top: _, right: V, bottom: M, left: I } = D.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && $ >= 0 && E <= w && S <= v && A >= _ && E <= M && $ >= I && S <= V)
      return R;
    const O = getComputedStyle(D), k = parseInt(O.borderLeftWidth, 10), C = parseInt(O.borderTopWidth, 10), J = parseInt(O.borderRightWidth, 10), ne = parseInt(O.borderBottomWidth, 10);
    let ae = 0, ee = 0;
    const Q = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - k - J : 0, ie = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - C - ne : 0, xe = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : F / D.offsetWidth : 0, ue = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : z / D.offsetHeight : 0;
    if (d === D)
      ae = a === "start" ? P : a === "end" ? P - w : a === "nearest" ? Es(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = s === "start" ? T : s === "center" ? T - v / 2 : s === "end" ? T - v : Es(p, p + v, v, k, J, p + T, p + T + b, b), ae = Math.max(0, ae + y), ee = Math.max(0, ee + p);
    else {
      ae = a === "start" ? P - _ - C : a === "end" ? P - M + ne + ie : a === "nearest" ? Es(_, M, z, C, ne + ie, P, P + x, x) : P - (_ + z / 2) + ie / 2, ee = s === "start" ? T - I - k : s === "center" ? T - (I + F / 2) + Q / 2 : s === "end" ? T - V + J + Q : Es(I, V, F, k, J + Q, T, T + b, b);
      const { scrollLeft: fe, scrollTop: se } = D;
      ae = Math.max(0, Math.min(se + ae / ue, D.scrollHeight - z / ue + ie)), ee = Math.max(0, Math.min(fe + ee / xe, D.scrollWidth - F / xe + Q)), P += se - ae, T += fe - ee;
    }
    R.push({ el: D, top: ae, left: ee });
  }
  return R;
}, y7 = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function x7(e, t) {
  if (!e.isConnected || !((r) => {
    let o = r;
    for (; o && o.parentNode; ) {
      if (o.parentNode === document)
        return !0;
      o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
    }
    return !1;
  })(e))
    return;
  if (((r) => typeof r == "object" && typeof r.behavior == "function")(t))
    return t.behavior(zv(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of zv(e, y7(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function Bv(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Hk = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, nu = Object.prototype.hasOwnProperty, Uk = Object.prototype.toString, jv = Object.defineProperty, Vv = Object.getOwnPropertyDescriptor, Hv = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Uk.call(t) === "[object Array]";
}, Uv = function(t) {
  if (!t || Uk.call(t) !== "[object Object]")
    return !1;
  var n = nu.call(t, "constructor"), r = t.constructor && t.constructor.prototype && nu.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || nu.call(t, o);
}, Wv = function(t, n) {
  jv && n.name === "__proto__" ? jv(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, qv = function(t, n) {
  if (n === "__proto__")
    if (nu.call(t, n)) {
      if (Vv)
        return Vv(t, n).value;
    } else
      return;
  return t[n];
}, Qv = function e() {
  var t, n, r, o, i, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = qv(a, n), o = qv(t, n), a !== o && (c && o && (Uv(o) || (i = Hv(o))) ? (i ? (i = !1, l = r && Hv(r) ? r : []) : l = r && Uv(r) ? r : {}, Wv(a, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Wv(a, { name: n, newValue: o }));
  return a;
};
function gh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function w7() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...o) {
    let i = -1;
    const l = o.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...o);
    function a(s, ...u) {
      const c = e[++i];
      let f = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++f < o.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = o[f]);
      o = u, c ? b7(c, a)(...u) : l(null, ...u);
    }
  }
  function r(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return e.push(o), t;
  }
}
function b7(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let s;
    a && l.push(o);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const c = u;
      if (a && n)
        throw c;
      return o(c);
    }
    a || (s instanceof Promise ? s.then(i, o) : s instanceof Error ? o(s) : i(s));
  }
  function o(l, ...a) {
    n || (n = !0, t(l, ...a));
  }
  function i(l) {
    o(null, l);
  }
}
function Dl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Gv(e.position) : "start" in e || "end" in e ? Gv(e) : "line" in e || "column" in e ? vh(e) : "";
}
function vh(e) {
  return Kv(e && e.line) + ":" + Kv(e && e.column);
}
function Gv(e) {
  return vh(e && e.start) + "-" + vh(e && e.end);
}
function Kv(e) {
  return e && typeof e == "number" ? e : 1;
}
class Kt extends Error {
  constructor(t, n, r) {
    const o = [null, null];
    let i = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? o[1] = r : (o[0] = r.slice(0, l), o[1] = r.slice(l + 1));
    }
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = Dl(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = o[0], this.ruleId = o[1], this.file, this.actual, this.expected, this.url, this.note;
  }
}
Kt.prototype.file = "";
Kt.prototype.name = "";
Kt.prototype.reason = "";
Kt.prototype.message = "";
Kt.prototype.stack = "";
Kt.prototype.fatal = null;
Kt.prototype.column = null;
Kt.prototype.line = null;
Kt.prototype.source = null;
Kt.prototype.ruleId = null;
Kt.prototype.position = null;
const vn = { basename: S7, dirname: k7, extname: C7, join: $7, sep: "/" };
function S7(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Va(e);
  let n = 0, r = -1, o = e.length, i;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.charCodeAt(o) === 47) {
        if (i) {
          n = o + 1;
          break;
        }
      } else
        r < 0 && (i = !0, r = o + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, a = t.length - 1;
  for (; o--; )
    if (e.charCodeAt(o) === 47) {
      if (i) {
        n = o + 1;
        break;
      }
    } else
      l < 0 && (i = !0, l = o + 1), a > -1 && (e.charCodeAt(o) === t.charCodeAt(a--) ? a < 0 && (r = o) : (a = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function k7(e) {
  if (Va(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.charCodeAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else
      r || (r = !0);
  return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t);
}
function C7(e) {
  Va(e);
  let t = e.length, n = -1, r = 0, o = -1, i = 0, l;
  for (; t--; ) {
    const a = e.charCodeAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), a === 46 ? o < 0 ? o = t : i !== 1 && (i = 1) : o > -1 && (i = -1);
  }
  return o < 0 || n < 0 || i === 0 || i === 1 && o === n - 1 && o === r + 1 ? "" : e.slice(o, n);
}
function $7(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Va(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : E7(n);
}
function E7(e) {
  Va(e);
  const t = e.charCodeAt(0) === 47;
  let n = A7(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function A7(e, t) {
  let n = "", r = 0, o = -1, i = 0, l = -1, a, s;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.charCodeAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(o === l - 1 || i === 1))
        if (o !== l - 1 && i === 2) {
          if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              if (s = n.lastIndexOf("/"), s !== n.length - 1) {
                s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), o = l, i = 0;
                continue;
              }
            } else if (n.length > 0) {
              n = "", r = 0, o = l, i = 0;
              continue;
            }
          }
          t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
        } else
          n.length > 0 ? n += "/" + e.slice(o + 1, l) : n = e.slice(o + 1, l), r = l - o - 1;
      o = l, i = 0;
    } else
      a === 46 && i > -1 ? i++ : i = -1;
  }
  return n;
}
function Va(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const P7 = { cwd: _7 };
function _7() {
  return "/";
}
function yh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function R7(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!yh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return T7(e);
}
function T7(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
      const r = t.charCodeAt(n + 2);
      if (r === 70 || r === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(t);
}
const fd = ["history", "path", "basename", "stem", "extname", "dirname"];
class I7 {
  constructor(t) {
    let n;
    t ? typeof t == "string" || O7(t) ? n = { value: t } : yh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = P7.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < fd.length; ) {
      const i = fd[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      fd.includes(o) || (this[o] = n[o]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    yh(t) && (t = R7(t)), pd(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? vn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Yv(this.basename, "dirname"), this.path = vn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? vn.basename(this.path) : void 0;
  }
  set basename(t) {
    pd(t, "basename"), dd(t, "basename"), this.path = vn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? vn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (dd(t, "extname"), Yv(this.dirname, "extname"), t) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = vn.join(this.dirname, this.stem + (t || ""));
  }
  get stem() {
    return typeof this.path == "string" ? vn.basename(this.path, this.extname) : void 0;
  }
  set stem(t) {
    pd(t, "stem"), dd(t, "stem"), this.path = vn.join(this.dirname || "", t + (this.extname || ""));
  }
  toString(t) {
    return (this.value || "").toString(t || void 0);
  }
  message(t, n, r) {
    const o = new Kt(t, n, r);
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
  }
  info(t, n, r) {
    const o = this.message(t, n, r);
    return o.fatal = null, o;
  }
  fail(t, n, r) {
    const o = this.message(t, n, r);
    throw o.fatal = !0, o;
  }
}
function dd(e, t) {
  if (e && e.includes(vn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + vn.sep + "`"
    );
}
function pd(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Yv(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function O7(e) {
  return Hk(e);
}
const N7 = qk().freeze(), Wk = {}.hasOwnProperty;
function qk() {
  const e = w7(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = a, i.attachers = t, i.use = s, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const v = qk();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(Qv(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (gd("data", r), n[v] = w, i) : Wk.call(n, v) && n[v] || null : v ? (gd("data", r), n = v, i) : n;
  }
  function a() {
    if (r)
      return i;
    for (; ++o < t.length; ) {
      const [v, ...w] = t[o];
      if (w[0] === !1)
        continue;
      w[0] === !0 && (w[0] = void 0);
      const p = v.call(i, ...w);
      typeof p == "function" && e.use(p);
    }
    return r = !0, o = Number.POSITIVE_INFINITY, i;
  }
  function s(v, ...w) {
    let p;
    if (gd("use", r), v != null)
      if (typeof v == "function")
        A(v, ...w);
      else if (typeof v == "object")
        Array.isArray(v) ? b(v) : x(v);
      else
        throw new TypeError("Expected usable value, not `" + v + "`");
    return p && (n.settings = Object.assign(n.settings || {}, p)), i;
    function y(S) {
      if (typeof S == "function")
        A(S);
      else if (typeof S == "object")
        if (Array.isArray(S)) {
          const [E, ...$] = S;
          A(E, ...$);
        } else
          x(S);
      else
        throw new TypeError("Expected usable value, not `" + S + "`");
    }
    function x(S) {
      b(S.plugins), S.settings && (p = Object.assign(p || {}, S.settings));
    }
    function b(S) {
      let E = -1;
      if (S != null)
        if (Array.isArray(S))
          for (; ++E < S.length; ) {
            const $ = S[E];
            y($);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + S + "`");
    }
    function A(S, E) {
      let $ = -1, P;
      for (; ++$ < t.length; )
        if (t[$][0] === S) {
          P = t[$];
          break;
        }
      P ? (gh(P[1]) && gh(E) && (E = Qv(!0, P[1], E)), P[1] = E) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = ul(v), p = i.Parser;
    return hd("parse", p), Xv(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = ul(w), y = i.Compiler;
    return md("stringify", y), Zv(v), Xv(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (Zv(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(y);
    y(null, p);
    function y(x, b) {
      e.run(v, ul(w), A);
      function A(S, E, $) {
        E = E || v, S ? b(S) : x ? x(E) : p(null, E, $);
      }
    }
  }
  function d(v, w) {
    let p, y;
    return i.run(v, w, x), Jv("runSync", "run", y), p;
    function x(b, A) {
      Bv(b), p = A, y = !0;
    }
  }
  function g(v, w) {
    if (i.freeze(), hd("process", i.Parser), md("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = ul(v);
      i.run(i.parse(b), b, (S, E, $) => {
        if (S || !E || !$)
          A(S);
        else {
          const P = i.stringify(E, $);
          P == null || (L7(P) ? $.value = P : $.result = P), A(S, $);
        }
      });
      function A(S, E) {
        S || !E ? x(S) : y ? y(E) : w(null, E);
      }
    }
  }
  function h(v) {
    let w;
    i.freeze(), hd("processSync", i.Parser), md("processSync", i.Compiler);
    const p = ul(v);
    return i.process(p, y), Jv("processSync", "process", w), p;
    function y(x) {
      w = !0, Bv(x);
    }
  }
}
function Xv(e, t) {
  return typeof e == "function" && e.prototype && (M7(e.prototype) || t in e.prototype);
}
function M7(e) {
  let t;
  for (t in e)
    if (Wk.call(e, t))
      return !0;
  return !1;
}
function hd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function md(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function gd(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Zv(e) {
  if (!gh(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Jv(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function ul(e) {
  return D7(e) ? e : new I7(e);
}
function D7(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function L7(e) {
  return typeof e == "string" || Hk(e);
}
const F7 = {};
function z7(e, t) {
  const n = t || F7, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Qk(e, r, o);
}
function Qk(e, t, n) {
  if (B7(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ey(e.children, t, n);
  }
  return Array.isArray(e) ? ey(e, t, n) : "";
}
function ey(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = Qk(e[o], t, n);
  return r.join("");
}
function B7(e) {
  return Boolean(e && typeof e == "object");
}
function Rt(e, t, n, r) {
  const o = e.length;
  let i = 0, l;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), [].splice.apply(e, l);
  else
    for (n && [].splice.apply(e, [t, n]); i < r.length; )
      l = r.slice(i, i + 1e4), l.unshift(t, 0), [].splice.apply(e, l), i += 1e4, t += 1e4;
}
function zt(e, t) {
  return e.length > 0 ? (Rt(e, e.length, 0, t), e) : t;
}
const ty = {}.hasOwnProperty;
function Gk(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    j7(t, e[n]);
  return t;
}
function j7(e, t) {
  let n;
  for (n in t) {
    const o = (ty.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      ty.call(o, l) || (o[l] = []);
      const a = i[l];
      V7(
        o[l],
        Array.isArray(a) ? a : a ? [a] : []
      );
    }
  }
}
function V7(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const H7 = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Vt = zr(/[A-Za-z]/), Ku = zr(/\d/), U7 = zr(/[\dA-Fa-f]/), ft = zr(/[\dA-Za-z]/), W7 = zr(/[!-/:-@[-`{-~]/), ny = zr(/[#-'*+\--9=?A-Z^-~]/);
function xa(e) {
  return e !== null && (e < 32 || e === 127);
}
function De(e) {
  return e !== null && (e < 0 || e === 32);
}
function X(e) {
  return e !== null && e < -2;
}
function ve(e) {
  return e === -2 || e === -1 || e === 32;
}
const qc = zr(/\s/), Qc = zr(H7);
function zr(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function ge(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return l;
  function l(s) {
    return ve(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return ve(s) && i++ < o ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const q7 = {
  tokenize: Q7
};
function Q7(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    o
  );
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
  function o(a) {
    return e.enter("paragraph"), i(a);
  }
  function i(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return X(a) ? (e.consume(a), e.exit("chunkText"), i) : (e.consume(a), l);
  }
}
const G7 = {
  tokenize: K7
}, ry = {
  tokenize: Y7
};
function K7(e) {
  const t = this, n = [];
  let r = 0, o, i, l;
  return a;
  function a(x) {
    if (r < n.length) {
      const b = n[r];
      return t.containerState = b[1], e.attempt(
        b[0].continuation,
        s,
        u
      )(x);
    }
    return u(x);
  }
  function s(x) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && y();
      const b = t.events.length;
      let A = b, S;
      for (; A--; )
        if (t.events[A][0] === "exit" && t.events[A][1].type === "chunkFlow") {
          S = t.events[A][1].end;
          break;
        }
      p(r);
      let E = b;
      for (; E < t.events.length; )
        t.events[E][1].end = Object.assign({}, S), E++;
      return Rt(
        t.events,
        A + 1,
        0,
        t.events.slice(b)
      ), t.events.length = E, u(x);
    }
    return a(x);
  }
  function u(x) {
    if (r === n.length) {
      if (!o)
        return d(x);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return h(x);
      t.interrupt = Boolean(
        o.currentConstruct && !o._gfmTableDynamicInterruptHack
      );
    }
    return t.containerState = {}, e.check(
      ry,
      c,
      f
    )(x);
  }
  function c(x) {
    return o && y(), p(r), d(x);
  }
  function f(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, h(x);
  }
  function d(x) {
    return t.containerState = {}, e.attempt(
      ry,
      g,
      h
    )(x);
  }
  function g(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(x);
  }
  function h(x) {
    if (x === null) {
      o && y(), p(0), e.consume(x);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: i,
      _tokenizer: o
    }), v(x);
  }
  function v(x) {
    if (x === null) {
      w(e.exit("chunkFlow"), !0), p(0), e.consume(x);
      return;
    }
    return X(x) ? (e.consume(x), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(x), v);
  }
  function w(x, b) {
    const A = t.sliceStream(x);
    if (b && A.push(null), x.previous = i, i && (i.next = x), i = x, o.defineSkip(x.start), o.write(A), t.parser.lazy[x.start.line]) {
      let S = o.events.length;
      for (; S--; )
        if (o.events[S][1].start.offset < l && (!o.events[S][1].end || o.events[S][1].end.offset > l))
          return;
      const E = t.events.length;
      let $ = E, P, T;
      for (; $--; )
        if (t.events[$][0] === "exit" && t.events[$][1].type === "chunkFlow") {
          if (P) {
            T = t.events[$][1].end;
            break;
          }
          P = !0;
        }
      for (p(r), S = E; S < t.events.length; )
        t.events[S][1].end = Object.assign({}, T), S++;
      Rt(
        t.events,
        $ + 1,
        0,
        t.events.slice(E)
      ), t.events.length = S;
    }
  }
  function p(x) {
    let b = n.length;
    for (; b-- > x; ) {
      const A = n[b];
      t.containerState = A[1], A[0].exit.call(t, e);
    }
    n.length = x;
  }
  function y() {
    o.write([null]), i = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function Y7(e, t, n) {
  return ge(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Yu(e) {
  if (e === null || De(e) || qc(e))
    return 1;
  if (Qc(e))
    return 2;
}
function Gc(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const xh = {
  name: "attention",
  tokenize: Z7,
  resolveAll: X7
};
function X7(e, t) {
  let n = -1, r, o, i, l, a, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          oy(f, -s), oy(d, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: Object.assign({}, e[r][1].end)
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: d
          }, i = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, o = {
            type: s > 1 ? "strong" : "emphasis",
            start: Object.assign({}, l.start),
            end: Object.assign({}, a.end)
          }, e[r][1].end = Object.assign({}, l.start), e[n][1].start = Object.assign({}, a.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = zt(u, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), u = zt(u, [
            ["enter", o, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", i, t]
          ]), u = zt(
            u,
            Gc(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), u = zt(u, [
            ["exit", i, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", o, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = zt(u, [
            ["enter", e[n][1], t],
            ["exit", e[n][1], t]
          ])) : c = 0, Rt(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Z7(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Yu(r);
  let i;
  return l;
  function l(s) {
    return e.enter("attentionSequence"), i = s, a(s);
  }
  function a(s) {
    if (s === i)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Yu(s), f = !c || c === 2 && o || n.includes(s), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(s);
  }
}
function oy(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const J7 = {
  name: "autolink",
  tokenize: e8
};
function e8(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Vt(h) ? (e.consume(h), l) : ny(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || ft(h) ? a(h) : u(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), s) : (h === 43 || h === 45 || h === 46 || ft(h)) && r++ < 32 ? (e.consume(h), a) : u(h);
  }
  function s(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || xa(h) ? n(h) : (e.consume(h), s);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : ny(h) ? (e.consume(h), u) : n(h);
  }
  function c(h) {
    return ft(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, c) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(h)) : d(h);
  }
  function d(h) {
    return (h === 45 || ft(h)) && r++ < 63 ? (e.consume(h), h === 45 ? d : f) : n(h);
  }
  function g(h) {
    return e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t;
  }
}
const Ha = {
  tokenize: t8,
  partial: !0
};
function t8(e, t, n) {
  return ge(e, r, "linePrefix");
  function r(o) {
    return o === null || X(o) ? t(o) : n(o);
  }
}
const Kk = {
  name: "blockQuote",
  tokenize: n8,
  continuation: {
    tokenize: r8
  },
  exit: o8
};
function n8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), i;
    }
    return n(l);
  }
  function i(l) {
    return ve(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function r8(e, t, n) {
  return ge(
    e,
    e.attempt(Kk, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function o8(e) {
  e.exit("blockQuote");
}
const Yk = {
  name: "characterEscape",
  tokenize: i8
};
function i8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return W7(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const iy = document.createElement("i");
function gg(e) {
  const t = "&" + e + ";";
  iy.innerHTML = t;
  const n = iy.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const Xk = {
  name: "characterReference",
  tokenize: l8
};
function l8(e, t, n) {
  const r = this;
  let o = 0, i, l;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), s;
  }
  function s(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), i = 31, l = ft, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = U7, c) : (e.enter("characterReferenceValue"), i = 7, l = Ku, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === ft && !gg(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const ly = {
  name: "codeFenced",
  tokenize: a8,
  concrete: !0
};
function a8(e, t, n) {
  const r = this, o = {
    tokenize: A,
    partial: !0
  }, i = {
    tokenize: b,
    partial: !0
  }, l = this.events[this.events.length - 1], a = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0;
  let s = 0, u;
  return c;
  function c(S) {
    return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u = S, f(S);
  }
  function f(S) {
    return S === u ? (e.consume(S), s++, f) : (e.exit("codeFencedFenceSequence"), s < 3 ? n(S) : ge(e, d, "whitespace")(S));
  }
  function d(S) {
    return S === null || X(S) ? w(S) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), g(S));
  }
  function g(S) {
    return S === null || De(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ge(e, h, "whitespace")(S)) : S === 96 && S === u ? n(S) : (e.consume(S), g);
  }
  function h(S) {
    return S === null || X(S) ? w(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), v(S));
  }
  function v(S) {
    return S === null || X(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), w(S)) : S === 96 && S === u ? n(S) : (e.consume(S), v);
  }
  function w(S) {
    return e.exit("codeFencedFence"), r.interrupt ? t(S) : p(S);
  }
  function p(S) {
    return S === null ? x(S) : X(S) ? e.attempt(
      i,
      e.attempt(
        o,
        x,
        a ? ge(
          e,
          p,
          "linePrefix",
          a + 1
        ) : p
      ),
      x
    )(S) : (e.enter("codeFlowValue"), y(S));
  }
  function y(S) {
    return S === null || X(S) ? (e.exit("codeFlowValue"), p(S)) : (e.consume(S), y);
  }
  function x(S) {
    return e.exit("codeFenced"), t(S);
  }
  function b(S, E, $) {
    const P = this;
    return T;
    function T(N) {
      return S.enter("lineEnding"), S.consume(N), S.exit("lineEnding"), R;
    }
    function R(N) {
      return P.parser.lazy[P.now().line] ? $(N) : E(N);
    }
  }
  function A(S, E, $) {
    let P = 0;
    return ge(
      S,
      T,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function T(D) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), R(D);
    }
    function R(D) {
      return D === u ? (S.consume(D), P++, R) : P < s ? $(D) : (S.exit("codeFencedFenceSequence"), ge(S, N, "whitespace")(D));
    }
    function N(D) {
      return D === null || X(D) ? (S.exit("codeFencedFence"), E(D)) : $(D);
    }
  }
}
const vd = {
  name: "codeIndented",
  tokenize: u8
}, s8 = {
  tokenize: c8,
  partial: !0
};
function u8(e, t, n) {
  const r = this;
  return o;
  function o(u) {
    return e.enter("codeIndented"), ge(e, i, "linePrefix", 4 + 1)(u);
  }
  function i(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? s(u) : X(u) ? e.attempt(s8, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || X(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function c8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ge(e, i, "linePrefix", 4 + 1)(l);
  }
  function i(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : X(l) ? o(l) : n(l);
  }
}
const f8 = {
  name: "codeText",
  tokenize: h8,
  resolve: d8,
  previous: p8
};
function d8(e) {
  let t = e.length - 4, n = 3, r, o;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    o === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (o = r) : (r === t || e[r][1].type === "lineEnding") && (e[o][1].type = "codeTextData", r !== o + 2 && (e[o][1].end = e[r - 1][1].end, e.splice(o + 2, r - o - 2), t -= r - o - 2, r = o + 2), o = void 0);
  return e;
}
function p8(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function h8(e, t, n) {
  let r = 0, o, i;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), s(f));
  }
  function s(f) {
    return f === null ? n(f) : f === 96 ? (i = e.enter("codeTextSequence"), o = 0, c(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), s) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || X(f) ? (e.exit("codeTextData"), s(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), o++, c) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (i.type = "codeTextData", u(f));
  }
}
function Zk(e) {
  const t = {};
  let n = -1, r, o, i, l, a, s, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, m8(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), a = e.slice(o, n), a.unshift(r), Rt(e, o, n - o + 1, a));
    }
  }
  return !u;
}
function m8(e, t) {
  const n = e[t][1], r = e[t][2];
  let o = t - 1;
  const i = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, s = [], u = {};
  let c, f, d = -1, g = n, h = 0, v = 0;
  const w = [v];
  for (; g; ) {
    for (; e[++o][1] !== g; )
      ;
    i.push(o), g._tokenizer || (c = r.sliceStream(g), g.next || c.push(null), f && l.defineSkip(g.start), g._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), g._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = g, g = g.next;
  }
  for (g = n; ++d < a.length; )
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (v = d + 1, w.push(v), g._tokenizer = void 0, g.previous = void 0, g = g.next);
  for (l.events = [], g ? (g._tokenizer = void 0, g.previous = void 0) : w.pop(), d = w.length; d--; ) {
    const p = a.slice(w[d], w[d + 1]), y = i.pop();
    s.unshift([y, y + p.length - 1]), Rt(e, y, 2, p);
  }
  for (d = -1; ++d < s.length; )
    u[h + s[d][0]] = h + s[d][1], h += s[d][1] - s[d][0] - 1;
  return u;
}
const g8 = {
  tokenize: x8,
  resolve: y8
}, v8 = {
  tokenize: w8,
  partial: !0
};
function y8(e) {
  return Zk(e), e;
}
function x8(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(a);
  }
  function o(a) {
    return a === null ? i(a) : X(a) ? e.check(
      v8,
      l,
      i
    )(a) : (e.consume(a), o);
  }
  function i(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, o;
  }
}
function w8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ge(e, i, "linePrefix");
  }
  function i(l) {
    if (l === null || X(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function Jk(e, t, n, r, o, i, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || xa(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(p));
  }
  function d(p) {
    return p === 62 ? (e.enter(i), e.consume(p), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(p));
  }
  function g(p) {
    return p === 62 ? (e.exit("chunkString"), e.exit(a), d(p)) : p === null || p === 60 || X(p) ? n(p) : (e.consume(p), p === 92 ? h : g);
  }
  function h(p) {
    return p === 60 || p === 62 || p === 92 ? (e.consume(p), g) : g(p);
  }
  function v(p) {
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : xa(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function eC(e, t, n, r, o, i) {
  const l = this;
  let a = 0, s;
  return u;
  function u(g) {
    return e.enter(r), e.enter(o), e.consume(g), e.exit(o), e.enter(i), c;
  }
  function c(g) {
    return g === null || g === 91 || g === 93 && !s || g === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs || a > 999 ? n(g) : g === 93 ? (e.exit(i), e.enter(o), e.consume(g), e.exit(o), e.exit(r), t) : X(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(g));
  }
  function f(g) {
    return g === null || g === 91 || g === 93 || X(g) || a++ > 999 ? (e.exit("chunkString"), c(g)) : (e.consume(g), s = s || !ve(g), g === 92 ? d : f);
  }
  function d(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), a++, f) : f(g);
  }
}
function tC(e, t, n, r, o, i) {
  let l;
  return a;
  function a(d) {
    return e.enter(r), e.enter(o), e.consume(d), e.exit(o), l = d === 40 ? 41 : d, s;
  }
  function s(d) {
    return d === l ? (e.enter(o), e.consume(d), e.exit(o), e.exit(r), t) : (e.enter(i), u(d));
  }
  function u(d) {
    return d === l ? (e.exit(i), s(l)) : d === null ? n(d) : X(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ge(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === l || d === null || X(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === l || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function Ll(e, t) {
  let n;
  return r;
  function r(o) {
    return X(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : ve(o) ? ge(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(o) : t(o);
  }
}
function dn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const b8 = {
  name: "definition",
  tokenize: k8
}, S8 = {
  tokenize: C8,
  partial: !0
};
function k8(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(s) {
    return e.enter("definition"), eC.call(
      r,
      e,
      l,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(s);
  }
  function l(s) {
    return o = dn(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), s === 58 ? (e.enter("definitionMarker"), e.consume(s), e.exit("definitionMarker"), Ll(
      e,
      Jk(
        e,
        e.attempt(
          S8,
          ge(e, a, "whitespace"),
          ge(e, a, "whitespace")
        ),
        n,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString"
      )
    )) : n(s);
  }
  function a(s) {
    return s === null || X(s) ? (e.exit("definition"), r.parser.defined.includes(o) || r.parser.defined.push(o), t(s)) : n(s);
  }
}
function C8(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? Ll(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? tC(
      e,
      ge(e, i, "whitespace"),
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(l) : n(l);
  }
  function i(l) {
    return l === null || X(l) ? t(l) : n(l);
  }
}
const $8 = {
  name: "hardBreakEscape",
  tokenize: E8
};
function E8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return X(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const A8 = {
  name: "headingAtx",
  tokenize: _8,
  resolve: P8
};
function P8(e, t) {
  let n = e.length - 2, r = 3, o, i;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (o = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, i = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Rt(e, r, n - r + 1, [
    ["enter", o, t],
    ["enter", i, t],
    ["exit", i, t],
    ["exit", o, t]
  ])), e;
}
function _8(e, t, n) {
  const r = this;
  let o = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && o++ < 6 ? (e.consume(c), l) : c === null || De(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : ve(c) ? ge(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || De(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const R8 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], ay = ["pre", "script", "style", "textarea"], T8 = {
  name: "htmlFlow",
  tokenize: N8,
  resolveTo: O8,
  concrete: !0
}, I8 = {
  tokenize: M8,
  partial: !0
};
function O8(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function N8(e, t, n) {
  const r = this;
  let o, i, l, a, s;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : I) : Vt(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", a = 0, g) : Vt(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(a++) ? (e.consume(C), a === l.length ? r.interrupt ? t : R : g) : n(C);
  }
  function h(C) {
    return Vt(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && ay.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : R(C)) : R8.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : R(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || ft(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : R) : n(C);
  }
  function p(C) {
    return ve(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Vt(C) ? (e.consume(C), x) : ve(C) ? (e.consume(C), y) : P(C);
  }
  function x(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || ft(C) ? (e.consume(C), x) : b(C);
  }
  function b(C) {
    return C === 61 ? (e.consume(C), A) : ve(C) ? (e.consume(C), b) : y(C);
  }
  function A(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), s = C, S) : ve(C) ? (e.consume(C), A) : (s = null, E(C));
  }
  function S(C) {
    return C === null || X(C) ? n(C) : C === s ? (e.consume(C), $) : (e.consume(C), S);
  }
  function E(C) {
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 62 || C === 96 || De(C) ? b(C) : (e.consume(C), E);
  }
  function $(C) {
    return C === 47 || C === 62 || ve(C) ? y(C) : n(C);
  }
  function P(C) {
    return C === 62 ? (e.consume(C), T) : n(C);
  }
  function T(C) {
    return ve(C) ? (e.consume(C), T) : C === null || X(C) ? R(C) : n(C);
  }
  function R(C) {
    return C === 45 && o === 2 ? (e.consume(C), F) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), O) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), M) : X(C) && (o === 6 || o === 7) ? e.check(
      I8,
      O,
      N
    )(C) : C === null || X(C) ? N(C) : (e.consume(C), R);
  }
  function N(C) {
    return e.exit("htmlFlowData"), D(C);
  }
  function D(C) {
    return C === null ? k(C) : X(C) ? e.attempt(
      {
        tokenize: z,
        partial: !0
      },
      D,
      k
    )(C) : (e.enter("htmlFlowData"), R(C));
  }
  function z(C, J, ne) {
    return ae;
    function ae(Q) {
      return C.enter("lineEnding"), C.consume(Q), C.exit("lineEnding"), ee;
    }
    function ee(Q) {
      return r.parser.lazy[r.now().line] ? ne(Q) : J(Q);
    }
  }
  function F(C) {
    return C === 45 ? (e.consume(C), I) : R(C);
  }
  function _(C) {
    return C === 47 ? (e.consume(C), l = "", V) : R(C);
  }
  function V(C) {
    return C === 62 && ay.includes(l.toLowerCase()) ? (e.consume(C), O) : Vt(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), V) : R(C);
  }
  function M(C) {
    return C === 93 ? (e.consume(C), I) : R(C);
  }
  function I(C) {
    return C === 62 ? (e.consume(C), O) : C === 45 && o === 2 ? (e.consume(C), I) : R(C);
  }
  function O(C) {
    return C === null || X(C) ? (e.exit("htmlFlowData"), k(C)) : (e.consume(C), O);
  }
  function k(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function M8(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Ha, t, n);
  }
}
const D8 = {
  name: "htmlText",
  tokenize: L8
};
function L8(e, t, n) {
  const r = this;
  let o, i, l, a;
  return s;
  function s(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), E) : k === 63 ? (e.consume(k), A) : Vt(k) ? (e.consume(k), T) : n(k);
  }
  function c(k) {
    return k === 45 ? (e.consume(k), f) : k === 91 ? (e.consume(k), i = "CDATA[", l = 0, w) : Vt(k) ? (e.consume(k), b) : n(k);
  }
  function f(k) {
    return k === 45 ? (e.consume(k), d) : n(k);
  }
  function d(k) {
    return k === null || k === 62 ? n(k) : k === 45 ? (e.consume(k), g) : h(k);
  }
  function g(k) {
    return k === null || k === 62 ? n(k) : h(k);
  }
  function h(k) {
    return k === null ? n(k) : k === 45 ? (e.consume(k), v) : X(k) ? (a = h, M(k)) : (e.consume(k), h);
  }
  function v(k) {
    return k === 45 ? (e.consume(k), O) : h(k);
  }
  function w(k) {
    return k === i.charCodeAt(l++) ? (e.consume(k), l === i.length ? p : w) : n(k);
  }
  function p(k) {
    return k === null ? n(k) : k === 93 ? (e.consume(k), y) : X(k) ? (a = p, M(k)) : (e.consume(k), p);
  }
  function y(k) {
    return k === 93 ? (e.consume(k), x) : p(k);
  }
  function x(k) {
    return k === 62 ? O(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? O(k) : X(k) ? (a = b, M(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : X(k) ? (a = A, M(k)) : (e.consume(k), A);
  }
  function S(k) {
    return k === 62 ? O(k) : A(k);
  }
  function E(k) {
    return Vt(k) ? (e.consume(k), $) : n(k);
  }
  function $(k) {
    return k === 45 || ft(k) ? (e.consume(k), $) : P(k);
  }
  function P(k) {
    return X(k) ? (a = P, M(k)) : ve(k) ? (e.consume(k), P) : O(k);
  }
  function T(k) {
    return k === 45 || ft(k) ? (e.consume(k), T) : k === 47 || k === 62 || De(k) ? R(k) : n(k);
  }
  function R(k) {
    return k === 47 ? (e.consume(k), O) : k === 58 || k === 95 || Vt(k) ? (e.consume(k), N) : X(k) ? (a = R, M(k)) : ve(k) ? (e.consume(k), R) : O(k);
  }
  function N(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ft(k) ? (e.consume(k), N) : D(k);
  }
  function D(k) {
    return k === 61 ? (e.consume(k), z) : X(k) ? (a = D, M(k)) : ve(k) ? (e.consume(k), D) : R(k);
  }
  function z(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, F) : X(k) ? (a = z, M(k)) : ve(k) ? (e.consume(k), z) : (e.consume(k), o = void 0, V);
  }
  function F(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : X(k) ? (a = F, M(k)) : (e.consume(k), F);
  }
  function _(k) {
    return k === 62 || k === 47 || De(k) ? R(k) : n(k);
  }
  function V(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? R(k) : (e.consume(k), V);
  }
  function M(k) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), ge(
      e,
      I,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function I(k) {
    return e.enter("htmlTextData"), a(k);
  }
  function O(k) {
    return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
  }
}
const vg = {
  name: "labelEnd",
  tokenize: H8,
  resolveTo: V8,
  resolveAll: j8
}, F8 = {
  tokenize: U8
}, z8 = {
  tokenize: W8
}, B8 = {
  tokenize: q8
};
function j8(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function V8(e, t) {
  let n = e.length, r = 0, o, i, l, a;
  for (; n--; )
    if (o = e[n][1], i) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[n][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (i = n, o.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else
      o.type === "labelEnd" && (l = n);
  const s = {
    type: e[i][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, u = {
    type: "label",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[l][1].end)
  }, c = {
    type: "labelText",
    start: Object.assign({}, e[i + r + 2][1].end),
    end: Object.assign({}, e[l - 2][1].start)
  };
  return a = [
    ["enter", s, t],
    ["enter", u, t]
  ], a = zt(a, e.slice(i + 1, i + r + 3)), a = zt(a, [["enter", c, t]]), a = zt(
    a,
    Gc(
      t.parser.constructs.insideSpan.null,
      e.slice(i + r + 4, l - 3),
      t
    )
  ), a = zt(a, [
    ["exit", c, t],
    e[l - 2],
    e[l - 1],
    ["exit", u, t]
  ]), a = zt(a, e.slice(l + 1)), a = zt(a, [["exit", s, t]]), Rt(e, i, e.length, a), e;
}
function H8(e, t, n) {
  const r = this;
  let o = r.events.length, i, l;
  for (; o--; )
    if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1]._balanced) {
      i = r.events[o][1];
      break;
    }
  return a;
  function a(c) {
    return i ? i._inactive ? u(c) : (l = r.parser.defined.includes(
      dn(
        r.sliceSerialize({
          start: i.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(c);
  }
  function s(c) {
    return c === 40 ? e.attempt(
      F8,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      z8,
      t,
      l ? e.attempt(B8, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function U8(e, t, n) {
  return r;
  function r(s) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(s), e.exit("resourceMarker"), Ll(e, o);
  }
  function o(s) {
    return s === 41 ? a(s) : Jk(
      e,
      i,
      n,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(s);
  }
  function i(s) {
    return De(s) ? Ll(e, l)(s) : a(s);
  }
  function l(s) {
    return s === 34 || s === 39 || s === 40 ? tC(
      e,
      Ll(e, a),
      n,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(s) : a(s);
  }
  function a(s) {
    return s === 41 ? (e.enter("resourceMarker"), e.consume(s), e.exit("resourceMarker"), e.exit("resource"), t) : n(s);
  }
}
function W8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return eC.call(
      r,
      e,
      i,
      n,
      "reference",
      "referenceMarker",
      "referenceString"
    )(l);
  }
  function i(l) {
    return r.parser.defined.includes(
      dn(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? t(l) : n(l);
  }
}
function q8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const Q8 = {
  name: "labelStartImage",
  tokenize: G8,
  resolveAll: vg.resolveAll
};
function G8(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), i;
  }
  function i(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const K8 = {
  name: "labelStartLink",
  tokenize: Y8,
  resolveAll: vg.resolveAll
};
function Y8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const yd = {
  name: "lineEnding",
  tokenize: X8
};
function X8(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const ru = {
  name: "thematicBreak",
  tokenize: Z8
};
function Z8(e, t, n) {
  let r = 0, o;
  return i;
  function i(s) {
    return e.enter("thematicBreak"), o = s, l(s);
  }
  function l(s) {
    return s === o ? (e.enter("thematicBreakSequence"), a(s)) : ve(s) ? ge(e, l, "whitespace")(s) : r < 3 || s !== null && !X(s) ? n(s) : (e.exit("thematicBreak"), t(s));
  }
  function a(s) {
    return s === o ? (e.consume(s), r++, a) : (e.exit("thematicBreakSequence"), l(s));
  }
}
const gt = {
  name: "list",
  tokenize: tN,
  continuation: {
    tokenize: nN
  },
  exit: oN
}, J8 = {
  tokenize: iN,
  partial: !0
}, eN = {
  tokenize: rN,
  partial: !0
};
function tN(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return a;
  function a(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : Ku(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(ru, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(g);
    }
    return n(g);
  }
  function s(g) {
    return Ku(g) && ++l < 10 ? (e.consume(g), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Ha,
      r.interrupt ? n : c,
      e.attempt(
        J8,
        d,
        f
      )
    );
  }
  function c(g) {
    return r.containerState.initialBlankLine = !0, i++, d(g);
  }
  function f(g) {
    return ve(g) ? (e.enter("listItemPrefixWhitespace"), e.consume(g), e.exit("listItemPrefixWhitespace"), d) : n(g);
  }
  function d(g) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(g);
  }
}
function nN(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Ha, o, i);
  function o(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ge(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function i(a) {
    return r.containerState.furtherBlankLines || !ve(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eN, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ge(
      e,
      e.attempt(gt, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a);
  }
}
function rN(e, t, n) {
  const r = this;
  return ge(
    e,
    o,
    "listItemIndent",
    r.containerState.size + 1
  );
  function o(i) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(i) : n(i);
  }
}
function oN(e) {
  e.exit(this.containerState.type);
}
function iN(e, t, n) {
  const r = this;
  return ge(
    e,
    o,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function o(i) {
    const l = r.events[r.events.length - 1];
    return !ve(i) && l && l[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const sy = {
  name: "setextUnderline",
  tokenize: aN,
  resolveTo: lN
};
function lN(e, t) {
  let n = e.length, r, o, i;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (o = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !i && e[n][1].type === "definition" && (i = n);
  const l = {
    type: "setextHeading",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[o][1].type = "setextHeadingText", i ? (e.splice(o, 0, ["enter", l, t]), e.splice(i + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[i][1].end)) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function aN(e, t, n) {
  const r = this;
  let o = r.events.length, i, l;
  for (; o--; )
    if (r.events[o][1].type !== "lineEnding" && r.events[o][1].type !== "linePrefix" && r.events[o][1].type !== "content") {
      l = r.events[o][1].type === "paragraph";
      break;
    }
  return a;
  function a(c) {
    return !r.parser.lazy[r.now().line] && (r.interrupt || l) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = c, s(c)) : n(c);
  }
  function s(c) {
    return c === i ? (e.consume(c), s) : (e.exit("setextHeadingLineSequence"), ge(e, u, "lineSuffix")(c));
  }
  function u(c) {
    return c === null || X(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const sN = {
  tokenize: uN
};
function uN(e) {
  const t = this, n = e.attempt(
    Ha,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ge(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(g8, o)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function o(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const cN = {
  resolveAll: rC()
}, fN = nC("string"), dN = nC("text");
function nC(e) {
  return {
    tokenize: t,
    resolveAll: rC(
      e === "text" ? pN : void 0
    )
  };
  function t(n) {
    const r = this, o = this.parser.constructs[e], i = n.attempt(o, l, a);
    return l;
    function l(c) {
      return u(c) ? i(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), s;
    }
    function s(c) {
      return u(c) ? (n.exit("data"), i(c)) : (n.consume(c), s);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = o[c];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const g = f[d];
          if (!g.previous || g.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function rC(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function pN(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], o = t.sliceStream(r);
      let i = o.length, l = -1, a = 0, s;
      for (; i--; ) {
        const u = o[i];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l)
            break;
          l = -1;
        } else if (u === -2)
          s = !0, a++;
        else if (u !== -1) {
          i++;
          break;
        }
      }
      if (a) {
        const u = {
          type: n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + i,
            _bufferIndex: i ? l : r.start._bufferIndex + l
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(
          n,
          0,
          ["enter", u, t],
          ["exit", u, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function hN(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const o = {}, i = [];
  let l = [], a = [];
  const s = {
    consume: y,
    enter: x,
    exit: b,
    attempt: E(A),
    check: E(S),
    interrupt: E(S, {
      interrupt: !0
    })
  }, u = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: g,
    sliceSerialize: d,
    now: h,
    defineSkip: v,
    write: f
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && i.push(t), u;
  function f(R) {
    return l = zt(l, R), w(), l[l.length - 1] !== null ? [] : ($(t, 0), u.events = Gc(i, u.events, u), u.events);
  }
  function d(R, N) {
    return gN(g(R), N);
  }
  function g(R) {
    return mN(l, R);
  }
  function h() {
    return Object.assign({}, r);
  }
  function v(R) {
    o[R.line] = R.column, T();
  }
  function w() {
    let R;
    for (; r._index < l.length; ) {
      const N = l[r._index];
      if (typeof N == "string")
        for (R = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === R && r._bufferIndex < N.length; )
          p(N.charCodeAt(r._bufferIndex));
      else
        p(N);
    }
  }
  function p(R) {
    c = c(R);
  }
  function y(R) {
    X(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, T()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = R;
  }
  function x(R, N) {
    const D = N || {};
    return D.type = R, D.start = h(), u.events.push(["enter", D, u]), a.push(D), D;
  }
  function b(R) {
    const N = a.pop();
    return N.end = h(), u.events.push(["exit", N, u]), N;
  }
  function A(R, N) {
    $(R, N.from);
  }
  function S(R, N) {
    N.restore();
  }
  function E(R, N) {
    return D;
    function D(z, F, _) {
      let V, M, I, O;
      return Array.isArray(z) ? C(z) : "tokenize" in z ? C([z]) : k(z);
      function k(ee) {
        return Q;
        function Q(ie) {
          const xe = ie !== null && ee[ie], ue = ie !== null && ee.null, fe = [
            ...Array.isArray(xe) ? xe : xe ? [xe] : [],
            ...Array.isArray(ue) ? ue : ue ? [ue] : []
          ];
          return C(fe)(ie);
        }
      }
      function C(ee) {
        return V = ee, M = 0, ee.length === 0 ? _ : J(ee[M]);
      }
      function J(ee) {
        return Q;
        function Q(ie) {
          return O = P(), I = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? ae() : ee.tokenize.call(
            N ? Object.assign(Object.create(u), N) : u,
            s,
            ne,
            ae
          )(ie);
        }
      }
      function ne(ee) {
        return R(I, O), F;
      }
      function ae(ee) {
        return O.restore(), ++M < V.length ? J(V[M]) : _;
      }
    }
  }
  function $(R, N) {
    R.resolveAll && !i.includes(R) && i.push(R), R.resolve && Rt(
      u.events,
      N,
      u.events.length - N,
      R.resolve(u.events.slice(N), u)
    ), R.resolveTo && (u.events = R.resolveTo(u.events, u));
  }
  function P() {
    const R = h(), N = u.previous, D = u.currentConstruct, z = u.events.length, F = Array.from(a);
    return {
      restore: _,
      from: z
    };
    function _() {
      r = R, u.previous = N, u.currentConstruct = D, u.events.length = z, a = F, T();
    }
  }
  function T() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function mN(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function gN(e, t) {
  let n = -1;
  const r = [];
  let o;
  for (; ++n < e.length; ) {
    const i = e[n];
    let l;
    if (typeof i == "string")
      l = i;
    else
      switch (i) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && o)
            continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(i);
      }
    o = i === -2, r.push(l);
  }
  return r.join("");
}
const vN = {
  [42]: gt,
  [43]: gt,
  [45]: gt,
  [48]: gt,
  [49]: gt,
  [50]: gt,
  [51]: gt,
  [52]: gt,
  [53]: gt,
  [54]: gt,
  [55]: gt,
  [56]: gt,
  [57]: gt,
  [62]: Kk
}, yN = {
  [91]: b8
}, xN = {
  [-2]: vd,
  [-1]: vd,
  [32]: vd
}, wN = {
  [35]: A8,
  [42]: ru,
  [45]: [sy, ru],
  [60]: T8,
  [61]: sy,
  [95]: ru,
  [96]: ly,
  [126]: ly
}, bN = {
  [38]: Xk,
  [92]: Yk
}, SN = {
  [-5]: yd,
  [-4]: yd,
  [-3]: yd,
  [33]: Q8,
  [38]: Xk,
  [42]: xh,
  [60]: [J7, D8],
  [91]: K8,
  [92]: [$8, Yk],
  [93]: vg,
  [95]: xh,
  [96]: f8
}, kN = {
  null: [xh, cN]
}, CN = {
  null: [42, 95]
}, $N = {
  null: []
}, EN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: vN,
  contentInitial: yN,
  flowInitial: xN,
  flow: wN,
  string: bN,
  text: SN,
  insideSpan: kN,
  attentionMarkers: CN,
  disable: $N
}, Symbol.toStringTag, { value: "Module" }));
function AN(e = {}) {
  const t = Gk(
    [EN].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(q7),
    document: r(G7),
    flow: r(sN),
    string: r(fN),
    text: r(dN)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return hN(n, o, l);
    }
  }
}
const uy = /[\0\t\n\r]/g;
function PN() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, a) {
    const s = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (uy.lastIndex = f, u = uy.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
        t = i.slice(f);
        break;
      }
      if (g === 10 && f === d && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), f < d && (s.push(i.slice(f, d)), e += d - f), g) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; )
              s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
function _N(e) {
  for (; !Zk(e); )
    ;
  return e;
}
function oC(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const RN = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function iC(e) {
  return e.replace(RN, TN);
}
function TN(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return oC(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return gg(n) || e;
}
const lC = {}.hasOwnProperty, IN = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), ON(n)(
    _N(
      AN(n).document().write(PN()(e, t, !0))
    )
  );
};
function ON(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(nr),
      autolinkProtocol: R,
      autolinkEmail: R,
      atxHeading: a(Jn),
      blockQuote: a(fe),
      characterEscape: R,
      characterReference: R,
      codeFenced: a(se),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(se, s),
      codeText: a(at, s),
      codeTextData: R,
      data: R,
      codeFlowValue: R,
      definition: a(st),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(Br),
      hardBreakEscape: a(er),
      hardBreakTrailing: a(er),
      htmlFlow: a(Ga, s),
      htmlFlowData: R,
      htmlText: a(Ga, s),
      htmlTextData: R,
      image: a(tr),
      label: s,
      link: a(nr),
      listItem: a(rr),
      listItemValue: h,
      listOrdered: a(Ui, g),
      listUnordered: a(Ui),
      paragraph: a(af),
      reference: ae,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(Jn),
      strong: a(sf),
      thematicBreak: a(B2)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: E,
      autolink: c(),
      autolinkEmail: ue,
      autolinkProtocol: xe,
      blockQuote: c(),
      characterEscapeValue: N,
      characterReferenceMarkerHexadecimal: Q,
      characterReferenceMarkerNumeric: Q,
      characterReferenceValue: ie,
      codeFenced: c(y),
      codeFencedFence: p,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: w,
      codeFlowValue: N,
      codeIndented: c(x),
      codeText: c(V),
      codeTextData: N,
      data: N,
      definition: c(),
      definitionDestinationString: S,
      definitionLabelString: b,
      definitionTitleString: A,
      emphasis: c(),
      hardBreakEscape: c(z),
      hardBreakTrailing: c(z),
      htmlFlow: c(F),
      htmlFlowData: N,
      htmlText: c(_),
      htmlTextData: N,
      image: c(I),
      label: k,
      labelText: O,
      lineEnding: D,
      link: c(M),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ee,
      resourceDestinationString: C,
      resourceTitleString: J,
      resource: ne,
      setextHeading: c(T),
      setextHeadingLineSequence: P,
      setextHeadingText: $,
      strong: c(),
      thematicBreak: c()
    }
  };
  aC(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(L) {
    let q = {
      type: "root",
      children: []
    };
    const te = {
      stack: [q],
      tokenStack: [],
      config: t,
      enter: u,
      exit: f,
      buffer: s,
      resume: d,
      setData: i,
      getData: l
    }, be = [];
    let ke = -1;
    for (; ++ke < L.length; )
      if (L[ke][1].type === "listOrdered" || L[ke][1].type === "listUnordered")
        if (L[ke][0] === "enter")
          be.push(ke);
        else {
          const Xt = be.pop();
          ke = o(L, Xt, ke);
        }
    for (ke = -1; ++ke < L.length; ) {
      const Xt = t[L[ke][0]];
      lC.call(Xt, L[ke][1].type) && Xt[L[ke][1].type].call(
        Object.assign(
          {
            sliceSerialize: L[ke][2].sliceSerialize
          },
          te
        ),
        L[ke][1]
      );
    }
    if (te.tokenStack.length > 0) {
      const Xt = te.tokenStack[te.tokenStack.length - 1];
      (Xt[1] || cy).call(te, void 0, Xt[0]);
    }
    for (q.position = {
      start: sr(
        L.length > 0 ? L[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: sr(
        L.length > 0 ? L[L.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, ke = -1; ++ke < t.transforms.length; )
      q = t.transforms[ke](q) || q;
    return q;
  }
  function o(L, q, te) {
    let be = q - 1, ke = -1, Xt = !1, or, Tn, Wi, qi;
    for (; ++be <= te; ) {
      const Le = L[be];
      if (Le[1].type === "listUnordered" || Le[1].type === "listOrdered" || Le[1].type === "blockQuote" ? (Le[0] === "enter" ? ke++ : ke--, qi = void 0) : Le[1].type === "lineEndingBlank" ? Le[0] === "enter" && (or && !qi && !ke && !Wi && (Wi = be), qi = void 0) : Le[1].type === "linePrefix" || Le[1].type === "listItemValue" || Le[1].type === "listItemMarker" || Le[1].type === "listItemPrefix" || Le[1].type === "listItemPrefixWhitespace" || (qi = void 0), !ke && Le[0] === "enter" && Le[1].type === "listItemPrefix" || ke === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (or) {
          let uf = be;
          for (Tn = void 0; uf--; ) {
            const In = L[uf];
            if (In[1].type === "lineEnding" || In[1].type === "lineEndingBlank") {
              if (In[0] === "exit")
                continue;
              Tn && (L[Tn][1].type = "lineEndingBlank", Xt = !0), In[1].type = "lineEnding", Tn = uf;
            } else if (!(In[1].type === "linePrefix" || In[1].type === "blockQuotePrefix" || In[1].type === "blockQuotePrefixWhitespace" || In[1].type === "blockQuoteMarker" || In[1].type === "listItemIndent"))
              break;
          }
          Wi && (!Tn || Wi < Tn) && (or._spread = !0), or.end = Object.assign(
            {},
            Tn ? L[Tn][1].start : Le[1].end
          ), L.splice(Tn || be, 0, ["exit", or, Le[2]]), be++, te++;
        }
        Le[1].type === "listItemPrefix" && (or = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, Le[1].start)
        }, L.splice(be, 0, ["enter", or, Le[2]]), be++, te++, Wi = void 0, qi = !0);
      }
    }
    return L[q][1]._spread = Xt, te;
  }
  function i(L, q) {
    n[L] = q;
  }
  function l(L) {
    return n[L];
  }
  function a(L, q) {
    return te;
    function te(be) {
      u.call(this, L(be), be), q && q.call(this, be);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function u(L, q, te) {
    return this.stack[this.stack.length - 1].children.push(L), this.stack.push(L), this.tokenStack.push([q, te]), L.position = {
      start: sr(q.start)
    }, L;
  }
  function c(L) {
    return q;
    function q(te) {
      L && L.call(this, te), f.call(this, te);
    }
  }
  function f(L, q) {
    const te = this.stack.pop(), be = this.tokenStack.pop();
    if (be)
      be[0].type !== L.type && (q ? q.call(this, L, be[0]) : (be[1] || cy).call(this, L, be[0]));
    else
      throw new Error(
        "Cannot close `" + L.type + "` (" + Dl({
          start: L.start,
          end: L.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = sr(L.end), te;
  }
  function d() {
    return z7(this.stack.pop());
  }
  function g() {
    i("expectingFirstListItemValue", !0);
  }
  function h(L) {
    if (l("expectingFirstListItemValue")) {
      const q = this.stack[this.stack.length - 2];
      q.start = Number.parseInt(this.sliceSerialize(L), 10), i("expectingFirstListItemValue");
    }
  }
  function v() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.lang = L;
  }
  function w() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.meta = L;
  }
  function p() {
    l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0));
  }
  function y() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), i("flowCodeInside");
  }
  function x() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L.replace(/(\r?\n|\r)$/g, "");
  }
  function b(L) {
    const q = this.resume(), te = this.stack[this.stack.length - 1];
    te.label = q, te.identifier = dn(
      this.sliceSerialize(L)
    ).toLowerCase();
  }
  function A() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = L;
  }
  function S() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = L;
  }
  function E(L) {
    const q = this.stack[this.stack.length - 1];
    if (!q.depth) {
      const te = this.sliceSerialize(L).length;
      q.depth = te;
    }
  }
  function $() {
    i("setextHeadingSlurpLineEnding", !0);
  }
  function P(L) {
    const q = this.stack[this.stack.length - 1];
    q.depth = this.sliceSerialize(L).charCodeAt(0) === 61 ? 1 : 2;
  }
  function T() {
    i("setextHeadingSlurpLineEnding");
  }
  function R(L) {
    const q = this.stack[this.stack.length - 1];
    let te = q.children[q.children.length - 1];
    (!te || te.type !== "text") && (te = z2(), te.position = {
      start: sr(L.start)
    }, q.children.push(te)), this.stack.push(te);
  }
  function N(L) {
    const q = this.stack.pop();
    q.value += this.sliceSerialize(L), q.position.end = sr(L.end);
  }
  function D(L) {
    const q = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const te = q.children[q.children.length - 1];
      te.position.end = sr(L.end), i("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (R.call(this, L), N.call(this, L));
  }
  function z() {
    i("atHardBreak", !0);
  }
  function F() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function _() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function V() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function M() {
    const L = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const q = l("referenceType") || "shortcut";
      L.type += "Reference", L.referenceType = q, delete L.url, delete L.title;
    } else
      delete L.identifier, delete L.label;
    i("referenceType");
  }
  function I() {
    const L = this.stack[this.stack.length - 1];
    if (l("inReference")) {
      const q = l("referenceType") || "shortcut";
      L.type += "Reference", L.referenceType = q, delete L.url, delete L.title;
    } else
      delete L.identifier, delete L.label;
    i("referenceType");
  }
  function O(L) {
    const q = this.sliceSerialize(L), te = this.stack[this.stack.length - 2];
    te.label = iC(q), te.identifier = dn(q).toLowerCase();
  }
  function k() {
    const L = this.stack[this.stack.length - 1], q = this.resume(), te = this.stack[this.stack.length - 1];
    if (i("inReference", !0), te.type === "link") {
      const be = L.children;
      te.children = be;
    } else
      te.alt = q;
  }
  function C() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = L;
  }
  function J() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = L;
  }
  function ne() {
    i("inReference");
  }
  function ae() {
    i("referenceType", "collapsed");
  }
  function ee(L) {
    const q = this.resume(), te = this.stack[this.stack.length - 1];
    te.label = q, te.identifier = dn(
      this.sliceSerialize(L)
    ).toLowerCase(), i("referenceType", "full");
  }
  function Q(L) {
    i("characterReferenceType", L.type);
  }
  function ie(L) {
    const q = this.sliceSerialize(L), te = l("characterReferenceType");
    let be;
    te ? (be = oC(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : be = gg(q);
    const ke = this.stack.pop();
    ke.value += be, ke.position.end = sr(L.end);
  }
  function xe(L) {
    N.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(L);
  }
  function ue(L) {
    N.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize(L);
  }
  function fe() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function se() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function at() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function st() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Br() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Jn() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function er() {
    return {
      type: "break"
    };
  }
  function Ga() {
    return {
      type: "html",
      value: ""
    };
  }
  function tr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function nr() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Ui(L) {
    return {
      type: "list",
      ordered: L.type === "listOrdered",
      start: null,
      spread: L._spread,
      children: []
    };
  }
  function rr(L) {
    return {
      type: "listItem",
      spread: L._spread,
      checked: null,
      children: []
    };
  }
  function af() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function sf() {
    return {
      type: "strong",
      children: []
    };
  }
  function z2() {
    return {
      type: "text",
      value: ""
    };
  }
  function B2() {
    return {
      type: "thematicBreak"
    };
  }
}
function sr(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function aC(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? aC(e, r) : NN(e, r);
  }
}
function NN(e, t) {
  let n;
  for (n in t)
    if (lC.call(t, n)) {
      if (n === "canContainEols") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "transforms") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "enter" || n === "exit") {
        const r = t[n];
        r && Object.assign(e[n], r);
      }
    }
}
function cy(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + Dl({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Dl({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + Dl({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function MN(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return IN(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
var sC = { exports: {} };
(function(e) {
  (function() {
    var t;
    t = e.exports = o, t.format = o, t.vsprintf = r, typeof console < "u" && typeof console.log == "function" && (t.printf = n);
    function n() {
      console.log(o.apply(null, arguments));
    }
    function r(i, l) {
      return o.apply(null, [i].concat(l));
    }
    function o(i) {
      for (var l = 1, a = [].slice.call(arguments), s = 0, u = i.length, c = "", f, d = !1, g, h, v = !1, w, p = function() {
        return a[l++];
      }, y = function() {
        for (var x = ""; /\d/.test(i[s]); )
          x += i[s++], f = i[s];
        return x.length > 0 ? parseInt(x) : null;
      }; s < u; ++s)
        if (f = i[s], d)
          switch (d = !1, f == "." ? (v = !1, f = i[++s]) : f == "0" && i[s + 1] == "." ? (v = !0, s += 2, f = i[s]) : v = !0, w = y(), f) {
            case "b":
              c += parseInt(p(), 10).toString(2);
              break;
            case "c":
              g = p(), typeof g == "string" || g instanceof String ? c += g : c += String.fromCharCode(parseInt(g, 10));
              break;
            case "d":
              c += parseInt(p(), 10);
              break;
            case "f":
              h = String(parseFloat(p()).toFixed(w || 6)), c += v ? h : h.replace(/^0/, "");
              break;
            case "j":
              c += JSON.stringify(p());
              break;
            case "o":
              c += "0" + parseInt(p(), 10).toString(8);
              break;
            case "s":
              c += p();
              break;
            case "x":
              c += "0x" + parseInt(p(), 10).toString(16);
              break;
            case "X":
              c += "0x" + parseInt(p(), 10).toString(16).toUpperCase();
              break;
            default:
              c += f;
              break;
          }
        else
          f === "%" ? d = !0 : c += f;
      return c;
    }
  })();
})(sC);
const DN = sC.exports, As = Object.assign(jr(Error), {
  eval: jr(EvalError),
  range: jr(RangeError),
  reference: jr(ReferenceError),
  syntax: jr(SyntaxError),
  type: jr(TypeError),
  uri: jr(URIError)
});
function jr(e) {
  return t.displayName = e.displayName || e.name, t;
  function t(n, ...r) {
    const o = n && DN(n, ...r);
    return new e(o);
  }
}
const Ps = {}.hasOwnProperty, fy = {
  yaml: "-",
  toml: "+"
};
function yg(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = LN(r[n]);
  return t;
}
function LN(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Ps.call(fy, t))
      throw As("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: fy[t]
    };
  } else if (typeof t != "object")
    throw As("Expected matter to be an object, not `%j`", t);
  if (!Ps.call(t, "type"))
    throw As("Missing `type` in matter `%j`", t);
  if (!Ps.call(t, "fence") && !Ps.call(t, "marker"))
    throw As("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function FN(e) {
  const t = yg(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = wh(o, "open").charCodeAt(0), l = zN(o), a = n[i];
    Array.isArray(a) ? a.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function zN(e) {
  const t = e.anywhere, n = e.type, r = n + "Fence", o = r + "Sequence", i = n + "Value", l = {
    tokenize: c,
    partial: !0
  };
  let a, s = 0;
  return {
    tokenize: u,
    concrete: !0
  };
  function u(f, d, g) {
    const h = this;
    return v;
    function v(E) {
      const $ = h.now();
      return $.column === 1 && ($.line === 1 || t) && (a = wh(e, "open"), s = 0, E === a.charCodeAt(s)) ? (f.enter(n), f.enter(r), f.enter(o), w(E)) : g(E);
    }
    function w(E) {
      return s === a.length ? (f.exit(o), ve(E) ? (f.enter("whitespace"), p(E)) : y(E)) : E === a.charCodeAt(s++) ? (f.consume(E), w) : g(E);
    }
    function p(E) {
      return ve(E) ? (f.consume(E), p) : (f.exit("whitespace"), y(E));
    }
    function y(E) {
      return X(E) ? (f.exit(r), f.enter("lineEnding"), f.consume(E), f.exit("lineEnding"), a = wh(e, "close"), s = 0, f.attempt(l, S, x)) : g(E);
    }
    function x(E) {
      return E === null || X(E) ? A(E) : (f.enter(i), b(E));
    }
    function b(E) {
      return E === null || X(E) ? (f.exit(i), A(E)) : (f.consume(E), b);
    }
    function A(E) {
      return E === null ? g(E) : (f.enter("lineEnding"), f.consume(E), f.exit("lineEnding"), f.attempt(l, S, x));
    }
    function S(E) {
      return f.exit(n), d(E);
    }
  }
  function c(f, d, g) {
    let h = 0;
    return v;
    function v(x) {
      return x === a.charCodeAt(h) ? (f.enter(r), f.enter(o), w(x)) : g(x);
    }
    function w(x) {
      return h === a.length ? (f.exit(o), ve(x) ? (f.enter("whitespace"), p(x)) : y(x)) : x === a.charCodeAt(h++) ? (f.consume(x), w) : g(x);
    }
    function p(x) {
      return ve(x) ? (f.consume(x), p) : (f.exit("whitespace"), y(x));
    }
    function y(x) {
      return x === null || X(x) ? (f.exit(r), d(x)) : g(x);
    }
  }
}
function wh(e, t) {
  return e.marker ? dy(e.marker, t).repeat(3) : dy(e.fence, t);
}
function dy(e, t) {
  return typeof e == "string" ? e : e[t];
}
function BN(e) {
  const t = yg(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = jN(i), r[i.type] = VN, r[i.type + "Value"] = HN;
  }
  return { enter: n, exit: r };
}
function jN(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function VN(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function HN(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function UN(e) {
  const t = [], n = {}, r = yg(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = WN(i), t.push({ atBreak: !0, character: bh(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function WN(e) {
  const t = bh(e, "open"), n = bh(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function bh(e, t) {
  return e.marker ? py(e.marker, t).repeat(3) : py(e.fence, t);
}
function py(e, t) {
  return typeof e == "string" ? e : e[t];
}
function qN(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", FN(e)), n("fromMarkdownExtensions", BN(e)), n("toMarkdownExtensions", UN(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const QN = {
  tokenize: ZN,
  partial: !0
}, uC = {
  tokenize: JN,
  partial: !0
}, cC = {
  tokenize: e9,
  partial: !0
}, fi = {
  tokenize: n9,
  partial: !0
}, fC = {
  tokenize: t9,
  partial: !0
}, dC = {
  tokenize: YN,
  previous: mC
}, pC = {
  tokenize: XN,
  previous: wg
}, Zn = {
  tokenize: KN,
  previous: gC
}, Rn = {}, GN = {
  text: Rn
};
let Vr = 48;
for (; Vr < 123; )
  Rn[Vr] = Zn, Vr++, Vr === 58 ? Vr = 65 : Vr === 91 && (Vr = 97);
Rn[43] = Zn;
Rn[45] = Zn;
Rn[46] = Zn;
Rn[95] = Zn;
Rn[72] = [Zn, pC];
Rn[104] = [Zn, pC];
Rn[87] = [Zn, dC];
Rn[119] = [Zn, dC];
function KN(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !hy(g) || !gC(r.previous) || bg(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(g));
  }
  function a(g) {
    return hy(g) ? (e.consume(g), a) : g === 64 ? (e.consume(g), s) : n(g);
  }
  function s(g) {
    return g === 46 ? e.check(fi, d, u)(g) : g === 45 || g === 95 ? e.check(fi, n, c)(g) : ft(g) ? (!i && Ku(g) && (i = !0), e.consume(g), s) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, s;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(fi, n, u)(g) : s(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function YN(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !mC(r.previous) || bg(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      QN,
      e.attempt(uC, e.attempt(cC, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function XN(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !wg(r.previous) || bg(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
  }
  function i(h) {
    return h === 84 || h === 116 ? (e.consume(h), l) : n(h);
  }
  function l(h) {
    return h === 84 || h === 116 ? (e.consume(h), a) : n(h);
  }
  function a(h) {
    return h === 80 || h === 112 ? (e.consume(h), s) : n(h);
  }
  function s(h) {
    return h === 83 || h === 115 ? (e.consume(h), u) : u(h);
  }
  function u(h) {
    return h === 58 ? (e.consume(h), c) : n(h);
  }
  function c(h) {
    return h === 47 ? (e.consume(h), f) : n(h);
  }
  function f(h) {
    return h === 47 ? (e.consume(h), d) : n(h);
  }
  function d(h) {
    return h === null || xa(h) || qc(h) || Qc(h) ? n(h) : e.attempt(uC, e.attempt(cC, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function ZN(e, t, n) {
  return r;
  function r(s) {
    return e.consume(s), o;
  }
  function o(s) {
    return s === 87 || s === 119 ? (e.consume(s), i) : n(s);
  }
  function i(s) {
    return s === 87 || s === 119 ? (e.consume(s), l) : n(s);
  }
  function l(s) {
    return s === 46 ? (e.consume(s), a) : n(s);
  }
  function a(s) {
    return s === null || X(s) ? n(s) : t(s);
  }
}
function JN(e, t, n) {
  let r, o;
  return i;
  function i(s) {
    return s === 38 ? e.check(
      fC,
      a,
      l
    )(s) : s === 46 || s === 95 ? e.check(fi, a, l)(s) : s === null || xa(s) || qc(s) || s !== 45 && Qc(s) ? a(s) : (e.consume(s), i);
  }
  function l(s) {
    return s === 46 ? (o = r, r = void 0, e.consume(s), i) : (s === 95 && (r = !0), e.consume(s), i);
  }
  function a(s) {
    return !o && !r ? t(s) : n(s);
  }
}
function e9(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      fC,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      fi,
      i,
      o
    )(l) : xg(l) ? t(l) : hC(l) ? e.check(fi, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function t9(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Vt(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return xg(l) ? t(l) : n(l);
  }
}
function n9(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return hC(i) ? (e.consume(i), o) : xg(i) ? t(i) : n(i);
  }
}
function hC(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function xg(e) {
  return e === null || e === 60 || De(e);
}
function hy(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ft(e);
}
function mC(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function wg(e) {
  return e === null || !Vt(e);
}
function gC(e) {
  return e !== 47 && wg(e);
}
function bg(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
function ji(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let l = "";
    if (i === 37 && ft(e.charCodeAt(n + 1)) && ft(e.charCodeAt(n + 2)))
      o = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const a = e.charCodeAt(n + 1);
      i < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(i, a), o = 1) : l = "\uFFFD";
    } else
      l = String.fromCharCode(i);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + o + 1, l = ""), o && (n += o, o = 0);
  }
  return t.join("") + e.slice(r);
}
const r9 = {
  tokenize: f9,
  partial: !0
};
function o9() {
  return {
    document: {
      [91]: {
        tokenize: s9,
        continuation: {
          tokenize: u9
        },
        exit: c9
      }
    },
    text: {
      [91]: {
        tokenize: a9
      },
      [93]: {
        add: "after",
        tokenize: i9,
        resolveTo: l9
      }
    }
  };
}
function i9(e, t, n) {
  const r = this;
  let o = r.events.length;
  const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; o--; ) {
    const s = r.events[o][1];
    if (s.type === "labelImage") {
      l = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return a;
  function a(s) {
    if (!l || !l._balanced)
      return n(s);
    const u = dn(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !i.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function l9(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, o = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  o.end.column++, o.end.offset++, o.end._bufferIndex++;
  const i = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, o.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, i.start),
    end: Object.assign({}, i.end)
  }, a = [
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    e[n + 3],
    e[n + 4],
    ["enter", o, t],
    ["exit", o, t],
    ["enter", i, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", i, t],
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function a9(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i = 0, l;
  return a;
  function a(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(f) {
    if (i > 999 || f === 93 && !l || f === null || f === 91 || De(f))
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return o.includes(dn(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return De(f) || (l = !0), i++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, u) : u(f);
  }
}
function s9(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i, l = 0, a;
  return s;
  function s(h) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(h) {
    return h === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(h);
  }
  function c(h) {
    if (l > 999 || h === 93 && !a || h === null || h === 91 || De(h))
      return n(h);
    if (h === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return i = dn(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return De(h) || (a = !0), l++, e.consume(h), h === 92 ? f : c;
  }
  function f(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, c) : c(h);
  }
  function d(h) {
    return h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), o.includes(i) || o.push(i), ge(
      e,
      g,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(h);
  }
  function g(h) {
    return t(h);
  }
}
function u9(e, t, n) {
  return e.check(Ha, t, e.attempt(r9, t, n));
}
function c9(e) {
  e.exit("gfmFootnoteDefinition");
}
function f9(e, t, n) {
  const r = this;
  return ge(
    e,
    o,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function o(i) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(i) : n(i);
  }
}
function d9(e) {
  let n = (e || {}).singleTilde;
  const r = {
    tokenize: i,
    resolveAll: o
  };
  return n == null && (n = !0), {
    text: {
      [126]: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function o(l, a) {
    let s = -1;
    for (; ++s < l.length; )
      if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[s][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[s][1].start)
            }, d = [
              ["enter", c, a],
              ["enter", l[u][1], a],
              ["exit", l[u][1], a],
              ["enter", f, a]
            ], g = a.parser.constructs.insideSpan.null;
            g && Rt(
              d,
              d.length,
              0,
              Gc(g, l.slice(u + 1, s), a)
            ), Rt(d, d.length, 0, [
              ["exit", f, a],
              ["enter", l[s][1], a],
              ["exit", l[s][1], a],
              ["exit", c, a]
            ]), Rt(l, u - 1, s - u + 3, d), s = u + d.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function i(l, a, s) {
    const u = this.previous, c = this.events;
    let f = 0;
    return d;
    function d(h) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(h) : (l.enter("strikethroughSequenceTemporary"), g(h));
    }
    function g(h) {
      const v = Yu(u);
      if (h === 126)
        return f > 1 ? s(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return s(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = Yu(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), a(h);
    }
  }
}
const p9 = {
  flow: {
    null: {
      tokenize: m9,
      resolve: h9
    }
  }
}, my = {
  tokenize: g9,
  partial: !0
};
function h9(e, t) {
  let n = -1, r, o, i, l, a, s, u;
  for (; ++n < e.length; ) {
    const c = e[n][1];
    if (i && (c.type === "temporaryTableCellContent" && (l = l || n, a = n), (c.type === "tableCellDivider" || c.type === "tableRow") && a)) {
      const f = {
        type: "tableContent",
        start: e[l][1].start,
        end: e[a][1].end
      }, d = {
        type: "chunkText",
        start: f.start,
        end: f.end,
        contentType: "text"
      };
      e.splice(
        l,
        a - l + 1,
        ["enter", f, t],
        ["enter", d, t],
        ["exit", d, t],
        ["exit", f, t]
      ), n -= a - l - 3, l = void 0, a = void 0;
    }
    if (e[n][0] === "exit" && s !== void 0 && s + (u ? 0 : 1) < n && (c.type === "tableCellDivider" || c.type === "tableRow" && (s + 3 < n || e[s][1].type !== "whitespace"))) {
      const f = {
        type: o ? "tableDelimiter" : r ? "tableHeader" : "tableData",
        start: e[s][1].start,
        end: e[n][1].end
      };
      e.splice(n + (c.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        f,
        t
      ]), e.splice(s, 0, ["enter", f, t]), n += 2, s = n + 1, u = !0;
    }
    c.type === "tableRow" && (i = e[n][0] === "enter", i && (s = n + 1, u = !1)), c.type === "tableDelimiterRow" && (o = e[n][0] === "enter", o && (s = n + 1, u = !1)), c.type === "tableHead" && (r = e[n][0] === "enter");
  }
  return e;
}
function m9(e, t, n) {
  const r = this, o = [];
  let i = 0, l, a;
  return s;
  function s(_) {
    return e.enter("table")._align = o, e.enter("tableHead"), e.enter("tableRow"), _ === 124 ? u(_) : (i++, e.enter("temporaryTableCellContent"), d(_));
  }
  function u(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), l = !0, c;
  }
  function c(_) {
    return _ === null || X(_) ? h(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), f) : (l && (l = void 0, i++), _ === 124 ? u(_) : (e.enter("temporaryTableCellContent"), d(_)));
  }
  function f(_) {
    return ve(_) ? (e.consume(_), f) : (e.exit("whitespace"), c(_));
  }
  function d(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), c(_)) : (e.consume(_), _ === 92 ? g : d);
  }
  function g(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), d) : d(_);
  }
  function h(_) {
    if (_ === null)
      return n(_);
    e.exit("tableRow"), e.exit("tableHead");
    const V = r.interrupt;
    return r.interrupt = !0, e.attempt(
      {
        tokenize: F,
        partial: !0
      },
      function(M) {
        return r.interrupt = V, e.enter("tableDelimiterRow"), v(M);
      },
      function(M) {
        return r.interrupt = V, n(M);
      }
    )(_);
  }
  function v(_) {
    return _ === null || X(_) ? b(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), a = !0, o.push("none"), p) : _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o.push("left"), y) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function w(_) {
    return ve(_) ? (e.consume(_), w) : (e.exit("whitespace"), v(_));
  }
  function p(_) {
    return _ === 45 ? (e.consume(_), p) : (e.exit("tableDelimiterFiller"), _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : v(_));
  }
  function y(_) {
    return _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), a = !0, p) : n(_);
  }
  function x(_) {
    return _ === null || X(_) ? b(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function b(_) {
    return e.exit("tableDelimiterRow"), !a || i !== o.length ? n(_) : _ === null ? A(_) : e.check(
      my,
      A,
      e.attempt(
        {
          tokenize: F,
          partial: !0
        },
        ge(e, S, "linePrefix", 4),
        A
      )
    )(_);
  }
  function A(_) {
    return e.exit("table"), t(_);
  }
  function S(_) {
    return e.enter("tableBody"), E(_);
  }
  function E(_) {
    return e.enter("tableRow"), _ === 124 ? $(_) : (e.enter("temporaryTableCellContent"), R(_));
  }
  function $(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), P;
  }
  function P(_) {
    return _ === null || X(_) ? D(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), T) : _ === 124 ? $(_) : (e.enter("temporaryTableCellContent"), R(_));
  }
  function T(_) {
    return ve(_) ? (e.consume(_), T) : (e.exit("whitespace"), P(_));
  }
  function R(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? N : R);
  }
  function N(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), R) : R(_);
  }
  function D(_) {
    return e.exit("tableRow"), _ === null ? z(_) : e.check(
      my,
      z,
      e.attempt(
        {
          tokenize: F,
          partial: !0
        },
        ge(e, E, "linePrefix", 4),
        z
      )
    )(_);
  }
  function z(_) {
    return e.exit("tableBody"), A(_);
  }
  function F(_, V, M) {
    return I;
    function I(k) {
      return _.enter("lineEnding"), _.consume(k), _.exit("lineEnding"), ge(_, O, "linePrefix");
    }
    function O(k) {
      if (r.parser.lazy[r.now().line] || k === null || X(k))
        return M(k);
      const C = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") && C && C[1].type === "linePrefix" && C[2].sliceSerialize(C[1], !0).length >= 4 ? M(k) : (r._gfmTableDynamicInterruptHack = !0, _.check(
        r.parser.constructs.flow,
        function(J) {
          return r._gfmTableDynamicInterruptHack = !1, M(J);
        },
        function(J) {
          return r._gfmTableDynamicInterruptHack = !1, V(J);
        }
      )(k));
    }
  }
}
function g9(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const v9 = {
  tokenize: x9
}, y9 = {
  text: {
    [91]: v9
  }
};
function x9(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), i);
  }
  function i(s) {
    return De(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return X(s) ? t(s) : ve(s) ? e.check(
      {
        tokenize: w9
      },
      t,
      n
    )(s) : n(s);
  }
}
function w9(e, t, n) {
  return ge(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function b9(e) {
  return Gk([
    GN,
    o9(),
    d9(e),
    p9,
    y9
  ]);
}
function Xu(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function S9(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Sg = function(e) {
  if (e == null)
    return E9;
  if (typeof e == "string")
    return $9(e);
  if (typeof e == "object")
    return Array.isArray(e) ? k9(e) : C9(e);
  if (typeof e == "function")
    return Kc(e);
  throw new Error("Expected function, string, or object as test");
};
function k9(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Sg(e[n]);
  return Kc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function C9(e) {
  return Kc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function $9(e) {
  return Kc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Kc(e) {
  return t;
  function t(n, ...r) {
    return Boolean(
      n && typeof n == "object" && "type" in n && Boolean(e.call(this, n, ...r))
    );
  }
}
function E9() {
  return !0;
}
const A9 = !0, gy = !1, P9 = "skip", vC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = Sg(t), i = r ? -1 : 1;
  l(e, void 0, [])();
  function l(a, s, u) {
    const c = a && typeof a == "object" ? a : {};
    if (typeof c.type == "string") {
      const d = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0;
      Object.defineProperty(f, "name", {
        value: "node (" + (a.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let d = [], g, h, v;
      if ((!t || o(a, s, u[u.length - 1] || null)) && (d = _9(n(a, u)), d[0] === gy))
        return d;
      if (a.children && d[0] !== P9)
        for (h = (r ? a.children.length : -1) + i, v = u.concat(a); h > -1 && h < a.children.length; ) {
          if (g = l(a.children[h], h, v)(), g[0] === gy)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function _9(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [A9, e] : [e];
}
const R9 = {}.hasOwnProperty, T9 = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = Sg(o.ignore || []), a = I9(i);
  let s = -1;
  for (; ++s < a.length; )
    vC(e, "text", u);
  return e;
  function u(f, d) {
    let g = -1, h;
    for (; ++g < d.length; ) {
      const v = d[g];
      if (l(
        v,
        h ? h.children.indexOf(v) : void 0,
        h
      ))
        return;
      h = v;
    }
    if (h)
      return c(f, d);
  }
  function c(f, d) {
    const g = d[d.length - 1], h = a[s][0], v = a[s][1];
    let w = 0;
    const p = g.children.indexOf(f);
    let y = !1, x = [];
    h.lastIndex = 0;
    let b = h.exec(f.value);
    for (; b; ) {
      const A = b.index, S = {
        index: b.index,
        input: b.input,
        stack: [...d, f]
      };
      let E = v(...b, S);
      if (typeof E == "string" && (E = E.length > 0 ? { type: "text", value: E } : void 0), E !== !1 && (w !== A && x.push({
        type: "text",
        value: f.value.slice(w, A)
      }), Array.isArray(E) ? x.push(...E) : E && x.push(E), w = A + b[0].length, y = !0), !h.global)
        break;
      b = h.exec(f.value);
    }
    return y ? (w < f.value.length && x.push({ type: "text", value: f.value.slice(w) }), g.children.splice(p, 1, ...x)) : x = [f], p + x.length;
  }
};
function I9(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        vy(e[n][0]),
        yy(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      R9.call(e, n) && t.push([vy(n), yy(e[n])]);
  }
  return t;
}
function vy(e) {
  return typeof e == "string" ? new RegExp(S9(e), "g") : e;
}
function yy(e) {
  return typeof e == "function" ? e : () => e;
}
const xd = "phrasing", wd = ["autolink", "link", "image", "label"], O9 = {
  transforms: [B9],
  enter: {
    literalAutolink: M9,
    literalAutolinkEmail: bd,
    literalAutolinkHttp: bd,
    literalAutolinkWww: bd
  },
  exit: {
    literalAutolink: z9,
    literalAutolinkEmail: F9,
    literalAutolinkHttp: D9,
    literalAutolinkWww: L9
  }
}, N9 = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: xd,
      notInConstruct: wd
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: xd,
      notInConstruct: wd
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: xd, notInConstruct: wd }
  ]
};
function M9(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function bd(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function D9(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function L9(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function F9(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function z9(e) {
  this.exit(e);
}
function B9(e) {
  T9(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, j9],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, V9]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function j9(e, t, n, r, o) {
  let i = "";
  if (!yC(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !H9(n)))
    return !1;
  const l = U9(n + r);
  if (!l[0])
    return !1;
  const a = {
    type: "link",
    title: null,
    url: i + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function V9(e, t, n, r) {
  return !yC(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function H9(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function U9(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = Xu(e, "(");
  let i = Xu(e, ")");
  for (; r !== -1 && o > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function yC(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || qc(n) || Qc(n)) && (!t || n !== 47);
}
function xC(e) {
  return e.label || !e.identifier ? e.label || "" : iC(e.identifier);
}
function W9(e, t, n) {
  const r = t.indexStack, o = e.children || [], i = t.createTracker(n), l = [];
  let a = -1;
  for (r.push(-1); ++a < o.length; ) {
    const s = o[a];
    r[r.length - 1] = a, l.push(
      i.move(
        t.handle(s, e, t, {
          before: `
`,
          after: `
`,
          ...i.current()
        })
      )
    ), s.type !== "list" && (t.bulletLastUsed = void 0), a < o.length - 1 && l.push(
      i.move(q9(s, o[a + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function q9(e, t, n, r) {
  let o = r.join.length;
  for (; o--; ) {
    const i = r.join[o](e, t, n, r);
    if (i === !0 || i === 1)
      break;
    if (typeof i == "number")
      return `
`.repeat(1 + i);
    if (i === !1)
      return `

<!---->

`;
  }
  return `

`;
}
const Q9 = /\r?\n|\r/g;
function G9(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = Q9.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(a) {
    n.push(t(a, o, !a));
  }
}
function wC(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function K9(e, t) {
  return xy(e, t.inConstruct, !0) && !xy(e, t.notInConstruct, !1);
}
function xy(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function bC(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let a = -1;
  for (; ++a < e.unsafe.length; ) {
    const c = e.unsafe[a];
    if (!K9(e.stack, c))
      continue;
    const f = wC(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: h });
    }
  }
  o.sort(Y9);
  let s = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (a = -1; ++a < o.length; ) {
    const c = o[a];
    c < s || c >= u || c + 1 < u && o[a + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[a - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (s !== c && i.push(wy(r.slice(s, c), "\\")), s = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), s++));
  }
  return i.push(wy(r.slice(s, u), n.after)), i.join("");
}
function Y9(e, t) {
  return e - t;
}
function wy(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, a = 0, s;
  for (; s = n.exec(i); )
    r.push(s.index);
  for (; ++l < r.length; )
    a !== r[l] && o.push(e.slice(a, r[l])), o.push("\\"), a = r[l];
  return o.push(e.slice(a)), o.join("");
}
function Yc(e) {
  const t = e || {}, n = t.now || {};
  let r = t.lineShift || 0, o = n.line || 1, i = n.column || 1;
  return { move: s, current: l, shift: a };
  function l() {
    return { now: { line: o, column: i }, lineShift: r };
  }
  function a(u) {
    r += u;
  }
  function s(u) {
    const c = u || "", f = c.split(/\r?\n|\r/g), d = f[f.length - 1];
    return o += f.length - 1, i = f.length === 1 ? i + d.length : 1 + d.length + r, c;
  }
}
SC.peek = aM;
function X9() {
  return {
    enter: {
      gfmFootnoteDefinition: J9,
      gfmFootnoteDefinitionLabelString: eM,
      gfmFootnoteCall: rM,
      gfmFootnoteCallString: oM
    },
    exit: {
      gfmFootnoteDefinition: nM,
      gfmFootnoteDefinitionLabelString: tM,
      gfmFootnoteCall: lM,
      gfmFootnoteCallString: iM
    }
  };
}
function Z9() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: sM, footnoteReference: SC }
  };
}
function J9(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function eM() {
  this.buffer();
}
function tM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = dn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function nM(e) {
  this.exit(e);
}
function rM(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function oM() {
  this.buffer();
}
function iM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = dn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function lM(e) {
  this.exit(e);
}
function SC(e, t, n, r) {
  const o = Yc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return i += o.move(
    bC(n, xC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), l(), i += o.move("]"), i;
}
function aM() {
  return "[";
}
function sM(e, t, n, r) {
  const o = Yc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), a = n.enter("label");
  return i += o.move(
    bC(n, xC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    G9(W9(e, n, o.current()), uM)
  ), l(), i;
}
function uM(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function kC(e, t, n) {
  const r = t.indexStack, o = e.children || [], i = [];
  let l = -1, a = n.before;
  r.push(-1);
  let s = t.createTracker(n);
  for (; ++l < o.length; ) {
    const u = o[l];
    let c;
    if (r[r.length - 1] = l, l + 1 < o.length) {
      let f = t.handle.handlers[o[l + 1].type];
      f && f.peek && (f = f.peek), c = f ? f(o[l + 1], e, t, {
        before: "",
        after: "",
        ...s.current()
      }).charAt(0) : "";
    } else
      c = n.after;
    i.length > 0 && (a === "\r" || a === `
`) && u.type === "html" && (i[i.length - 1] = i[i.length - 1].replace(
      /(\r?\n|\r)$/,
      " "
    ), a = " ", s = t.createTracker(n), s.move(i.join(""))), i.push(
      s.move(
        t.handle(u, e, t, {
          ...s.current(),
          before: a,
          after: c
        })
      )
    ), a = i[i.length - 1].slice(-1);
  }
  return r.pop(), i.join("");
}
const cM = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
CC.peek = mM;
const fM = {
  canContainEols: ["delete"],
  enter: { strikethrough: pM },
  exit: { strikethrough: hM }
}, dM = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: cM
    }
  ],
  handlers: { delete: CC }
};
function pM(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function hM(e) {
  this.exit(e);
}
function CC(e, t, n, r) {
  const o = Yc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += kC(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function mM() {
  return "~";
}
$C.peek = gM;
function $C(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], a = wC(l);
    let s;
    if (!!l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return o + r + o;
}
function gM() {
  return "`";
}
function vM(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || xM, o = [], i = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > s && (s = e[u].length); ++w < e[u].length; ) {
      const p = yM(e[u][w]);
      if (t.alignDelimiters !== !1) {
        const y = r(p);
        v[w] = y, (a[w] === void 0 || y > a[w]) && (a[w] = y);
      }
      h.push(p);
    }
    i[u] = h, l[u] = v;
  }
  let c = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++c < s; )
      o[c] = by(n[c]);
  else {
    const h = by(n);
    for (; ++c < s; )
      o[c] = h;
  }
  c = -1;
  const f = [], d = [];
  for (; ++c < s; ) {
    const h = o[c];
    let v = "", w = "";
    h === 99 ? (v = ":", w = ":") : h === 108 ? v = ":" : h === 114 && (w = ":");
    let p = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - v.length - w.length
    );
    const y = v + "-".repeat(p) + w;
    t.alignDelimiters !== !1 && (p = v.length + p + w.length, p > a[c] && (a[c] = p), d[c] = p), f[c] = y;
  }
  i.splice(1, 0, f), l.splice(1, 0, d), u = -1;
  const g = [];
  for (; ++u < i.length; ) {
    const h = i[u], v = l[u];
    c = -1;
    const w = [];
    for (; ++c < s; ) {
      const p = h[c] || "";
      let y = "", x = "";
      if (t.alignDelimiters !== !1) {
        const b = a[c] - (v[c] || 0), A = o[c];
        A === 114 ? y = " ".repeat(b) : A === 99 ? b % 2 ? (y = " ".repeat(b / 2 + 0.5), x = " ".repeat(b / 2 - 0.5)) : (y = " ".repeat(b / 2), x = y) : x = " ".repeat(b);
      }
      t.delimiterStart !== !1 && !c && w.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && p === "") && (t.delimiterStart !== !1 || c) && w.push(" "), t.alignDelimiters !== !1 && w.push(y), w.push(p), t.alignDelimiters !== !1 && w.push(x), t.padding !== !1 && w.push(" "), (t.delimiterEnd !== !1 || c !== s - 1) && w.push("|");
    }
    g.push(
      t.delimiterEnd === !1 ? w.join("").replace(/ +$/, "") : w.join("")
    );
  }
  return g.join(`
`);
}
function yM(e) {
  return e == null ? "" : String(e);
}
function xM(e) {
  return e.length;
}
function by(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const wM = {
  enter: {
    table: bM,
    tableData: Sy,
    tableHeader: Sy,
    tableRow: kM
  },
  exit: {
    codeText: CM,
    table: SM,
    tableData: Sd,
    tableHeader: Sd,
    tableRow: Sd
  }
};
function bM(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map((n) => n === "none" ? null : n),
      children: []
    },
    e
  ), this.setData("inTable", !0);
}
function SM(e) {
  this.exit(e), this.setData("inTable");
}
function kM(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Sd(e) {
  this.exit(e);
}
function Sy(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function CM(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, $M));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function $M(e, t) {
  return t === "|" ? t : e;
}
function EM(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, o = t.stringLength, i = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      { atBreak: !0, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: l,
      tableRow: a,
      tableCell: s,
      inlineCode: d
    }
  };
  function l(g, h, v, w) {
    return u(
      c(g, v, w),
      g.align
    );
  }
  function a(g, h, v, w) {
    const p = f(g, v, w), y = u([p]);
    return y.slice(0, y.indexOf(`
`));
  }
  function s(g, h, v, w) {
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = kC(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, h) {
    return vM(g, {
      align: h,
      alignDelimiters: r,
      padding: n,
      stringLength: o
    });
  }
  function c(g, h, v) {
    const w = g.children;
    let p = -1;
    const y = [], x = h.enter("table");
    for (; ++p < w.length; )
      y[p] = f(
        w[p],
        h,
        v
      );
    return x(), y;
  }
  function f(g, h, v) {
    const w = g.children;
    let p = -1;
    const y = [], x = h.enter("tableRow");
    for (; ++p < w.length; )
      y[p] = s(
        w[p],
        g,
        h,
        v
      );
    return x(), y;
  }
  function d(g, h, v) {
    let w = $C(g, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function AM(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function PM(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function _M(e, t, n, r) {
  const o = PM(n);
  let i = n.bulletCurrent || AM(n);
  t && t.type === "list" && t.ordered && (i = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + i);
  let l = i.length + 1;
  (o === "tab" || o === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = n.createTracker(r);
  a.move(i + " ".repeat(l - i.length)), a.shift(l);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, a.current()),
    c
  );
  return s(), u;
  function c(f, d, g) {
    return d ? (g ? "" : " ".repeat(l)) + f : (g ? i : i + " ".repeat(l - i.length)) + f;
  }
}
const RM = {
  exit: {
    taskListCheckValueChecked: ky,
    taskListCheckValueUnchecked: ky,
    paragraph: IM
  }
}, TM = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: OM }
};
function ky(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function IM(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1], r = n.children[0];
    if (r && r.type === "text") {
      const o = t.children;
      let i = -1, l;
      for (; ++i < o.length; ) {
        const a = o[i];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function OM(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = Yc(r);
  i && a.move(l);
  let s = _M(e, t, n, {
    ...r,
    ...a.current()
  });
  return i && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function NM() {
  return [
    O9,
    X9(),
    fM,
    wM,
    RM
  ];
}
function MM(e) {
  return {
    extensions: [
      N9,
      Z9(),
      dM,
      EM(e),
      TM
    ]
  };
}
function DM(e = {}) {
  const t = this.data();
  n("micromarkExtensions", b9(e)), n("fromMarkdownExtensions", NM()), n("toMarkdownExtensions", MM(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function LM(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function FM(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function zM(e, t) {
  const n = t.value ? t.value + `
` : "", r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null, o = {};
  r && (o.className = ["language-" + r]);
  let i = {
    type: "element",
    tagName: "code",
    properties: o,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function BM(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function jM(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function EC(e, t) {
  const n = String(t.identifier).toUpperCase(), r = ji(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
  let i;
  o === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, i = e.footnoteOrder.length) : (e.footnoteCounts[n]++, i = o + 1);
  const l = e.footnoteCounts[n], a = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + e.clobberPrefix + "fn-" + r,
      id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(i) }]
  };
  e.patch(t, a);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [a]
  };
  return e.patch(t, s), e.applyData(t, s);
}
function VM(e, t) {
  const n = e.footnoteById;
  let r = 1;
  for (; r in n; )
    r++;
  const o = String(r);
  return n[o] = {
    type: "footnoteDefinition",
    identifier: o,
    children: [{ type: "paragraph", children: t.children }],
    position: t.position
  }, EC(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function HM(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function UM(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function AC(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function WM(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return AC(e, t);
  const r = { src: ji(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function qM(e, t) {
  const n = { src: ji(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function QM(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function GM(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return AC(e, t);
  const r = { href: ji(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function KM(e, t) {
  const n = { href: ji(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function YM(e, t, n) {
  const r = e.all(t), o = n ? XM(n) : PC(t), i = {}, l = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), i.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (o || a !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !o ? l.push(...c.children) : l.push(c);
  }
  const s = r[r.length - 1];
  s && (o || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: i, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function XM(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = PC(n[r]);
  }
  return t;
}
function PC(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function ZM(e, t) {
  const n = {}, r = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < r.length; ) {
    const l = r[o];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const i = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function JM(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function eD(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function tD(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const kg = _C("start"), Cg = _C("end");
function nD(e) {
  return { start: kg(e), end: Cg(e) };
}
function _C(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    return {
      line: r.line || null,
      column: r.column || null,
      offset: r.offset > -1 ? r.offset : null
    };
  }
}
function rD(e, t) {
  const n = e.all(t), r = n.shift(), o = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), o.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = kg(t.children[1]), s = Cg(t.children[t.children.length - 1]);
    a.line && s.line && (l.position = { start: a, end: s }), o.push(l);
  }
  const i = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function oD(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const f = t.children[s], d = {}, g = l ? l[s] : void 0;
    g && (d.align = g);
    let h = { type: "element", tagName: i, properties: d, children: [] };
    f && (h.children = e.all(f), e.patch(f, h), h = e.applyData(t, h)), u.push(h);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function iD(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Cy = 9, $y = 32;
function lD(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      Ey(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(Ey(t.slice(o), o > 0, !1)), i.join("");
}
function Ey(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === Cy || i === $y; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === Cy || i === $y; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function aD(e, t) {
  const n = { type: "text", value: lD(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function sD(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const uD = {
  blockquote: LM,
  break: FM,
  code: zM,
  delete: BM,
  emphasis: jM,
  footnoteReference: EC,
  footnote: VM,
  heading: HM,
  html: UM,
  imageReference: WM,
  image: qM,
  inlineCode: QM,
  linkReference: GM,
  link: KM,
  listItem: YM,
  list: ZM,
  paragraph: JM,
  root: eD,
  strong: tD,
  table: rD,
  tableCell: iD,
  tableRow: oD,
  text: aD,
  thematicBreak: sD,
  toml: _s,
  yaml: _s,
  definition: _s,
  footnoteDefinition: _s
};
function _s() {
  return null;
}
const RC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), vC(e, t, o, r);
  function o(i, l) {
    const a = l[l.length - 1];
    return n(
      i,
      a ? a.children.indexOf(i) : null,
      a
    );
  }
};
function cD(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Ay = {}.hasOwnProperty;
function fD(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return RC(e, "definition", (r) => {
    const o = Py(r.identifier);
    o && !Ay.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = Py(r);
    return o && Ay.call(t, o) ? t[o] : null;
  }
}
function Py(e) {
  return String(e || "").toUpperCase();
}
const Zu = {}.hasOwnProperty;
function dD(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...uD, ...n.handlers }, l.definition = fD(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = pD, l.applyData = hD, l.one = a, l.all = s, l.wrap = gD, l.augment = i, RC(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    Zu.call(o, c) || (o[c] = u);
  }), l;
  function i(u, c) {
    if (u && "data" in u && u.data) {
      const f = u.data;
      f.hName && (c.type !== "element" && (c = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), c.tagName = f.hName), c.type === "element" && f.hProperties && (c.properties = { ...c.properties, ...f.hProperties }), "children" in c && c.children && f.hChildren && (c.children = f.hChildren);
    }
    if (u) {
      const f = "type" in u ? u : { position: u };
      cD(f) || (c.position = { start: kg(f), end: Cg(f) });
    }
    return c;
  }
  function l(u, c, f, d) {
    return Array.isArray(f) && (d = f, f = {}), i(u, {
      type: "element",
      tagName: c,
      properties: f || {},
      children: d || []
    });
  }
  function a(u, c) {
    return TC(l, u, c);
  }
  function s(u) {
    return $g(l, u);
  }
}
function pD(e, t) {
  e.position && (t.position = nD(e));
}
function hD(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, o = e.data.hChildren, i = e.data.hProperties;
    typeof r == "string" && (n.type === "element" ? n.tagName = r : n = {
      type: "element",
      tagName: r,
      properties: {},
      children: []
    }), n.type === "element" && i && (n.properties = { ...n.properties, ...i }), "children" in n && n.children && o !== null && o !== void 0 && (n.children = o);
  }
  return n;
}
function TC(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return Zu.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: $g(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : mD(e, t);
}
function $g(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = TC(e, r[o], t);
      if (i) {
        if (o && r[o - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = i.value.replace(/^\s+/, "")), !Array.isArray(i) && i.type === "element")) {
          const l = i.children[0];
          l && l.type === "text" && (l.value = l.value.replace(/^\s+/, ""));
        }
        Array.isArray(i) ? n.push(...i) : n.push(i);
      }
    }
  }
  return n;
}
function mD(e, t) {
  const n = t.data || {}, r = "value" in t && !(Zu.call(n, "hProperties") || Zu.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: $g(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function gD(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function vD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = ji(i.toLowerCase());
    let a = 0;
    const s = [];
    for (; ++a <= e.footnoteCounts[i]; ) {
      const f = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + l + (a > 1 ? "-" + a : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      a > 1 && f.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(a) }]
      }), s.length > 0 && s.push({ type: "text", value: " " }), s.push(f);
    }
    const u = o[o.length - 1];
    if (u && u.type === "element" && u.tagName === "p") {
      const f = u.children[u.children.length - 1];
      f && f.type === "text" ? f.value += " " : u.children.push({ type: "text", value: " " }), u.children.push(...s);
    } else
      o.push(...s);
    const c = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + l },
      children: e.wrap(o, !0)
    };
    e.patch(r, c), t.push(c);
  }
  if (t.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: e.footnoteLabelTagName,
          properties: {
            ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
            id: "footnote-label"
          },
          children: [{ type: "text", value: e.footnoteLabel }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(t, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
function IC(e, t) {
  const n = dD(e, t), r = n.one(e, null), o = vD(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const yD = function(e, t) {
  return e && "run" in e ? wD(e, t) : bD(e || t);
}, xD = yD;
function wD(e, t) {
  return (n, r, o) => {
    e.run(IC(n, t), r, (i) => {
      o(i);
    });
  };
}
function bD(e) {
  return (t) => IC(t, e);
}
class Ua {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Ua.prototype.property = {};
Ua.prototype.normal = {};
Ua.prototype.space = null;
function OC(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Ua(n, r, t);
}
function Sh(e) {
  return e.toLowerCase();
}
class Yt {
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Yt.prototype.space = null;
Yt.prototype.boolean = !1;
Yt.prototype.booleanish = !1;
Yt.prototype.overloadedBoolean = !1;
Yt.prototype.number = !1;
Yt.prototype.commaSeparated = !1;
Yt.prototype.spaceSeparated = !1;
Yt.prototype.commaOrSpaceSeparated = !1;
Yt.prototype.mustUseProperty = !1;
Yt.prototype.defined = !1;
let SD = 0;
const le = Eo(), Be = Eo(), NC = Eo(), H = Eo(), Ae = Eo(), di = Eo(), Ct = Eo();
function Eo() {
  return 2 ** ++SD;
}
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Be,
  overloadedBoolean: NC,
  number: H,
  spaceSeparated: Ae,
  commaSeparated: di,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), kd = Object.keys(kh);
class Eg extends Yt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), _y(this, "space", o), typeof r == "number")
      for (; ++i < kd.length; ) {
        const l = kd[i];
        _y(this, kd[i], (r & kh[l]) === kh[l]);
      }
  }
}
Eg.prototype.defined = !0;
function _y(e, t, n) {
  n && (e[t] = n);
}
const kD = {}.hasOwnProperty;
function Vi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (kD.call(e.properties, r)) {
      const o = e.properties[r], i = new Eg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[Sh(r)] = r, n[Sh(i.attribute)] = r;
    }
  return new Ua(t, n, e.space);
}
const MC = Vi({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), DC = Vi({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function LC(e, t) {
  return t in e ? e[t] : t;
}
function FC(e, t) {
  return LC(e, t.toLowerCase());
}
const zC = Vi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: FC,
  properties: { xmlns: null, xmlnsXLink: null }
}), BC = Vi({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Be,
    ariaAutoComplete: null,
    ariaBusy: Be,
    ariaChecked: Be,
    ariaColCount: H,
    ariaColIndex: H,
    ariaColSpan: H,
    ariaControls: Ae,
    ariaCurrent: null,
    ariaDescribedBy: Ae,
    ariaDetails: null,
    ariaDisabled: Be,
    ariaDropEffect: Ae,
    ariaErrorMessage: null,
    ariaExpanded: Be,
    ariaFlowTo: Ae,
    ariaGrabbed: Be,
    ariaHasPopup: null,
    ariaHidden: Be,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ae,
    ariaLevel: H,
    ariaLive: null,
    ariaModal: Be,
    ariaMultiLine: Be,
    ariaMultiSelectable: Be,
    ariaOrientation: null,
    ariaOwns: Ae,
    ariaPlaceholder: null,
    ariaPosInSet: H,
    ariaPressed: Be,
    ariaReadOnly: Be,
    ariaRelevant: null,
    ariaRequired: Be,
    ariaRoleDescription: Ae,
    ariaRowCount: H,
    ariaRowIndex: H,
    ariaRowSpan: H,
    ariaSelected: Be,
    ariaSetSize: H,
    ariaSort: null,
    ariaValueMax: H,
    ariaValueMin: H,
    ariaValueNow: H,
    ariaValueText: null,
    role: null
  }
}), CD = Vi({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: FC,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: di,
    acceptCharset: Ae,
    accessKey: Ae,
    action: null,
    allow: null,
    allowFullScreen: le,
    allowPaymentRequest: le,
    allowUserMedia: le,
    alt: null,
    as: null,
    async: le,
    autoCapitalize: null,
    autoComplete: Ae,
    autoFocus: le,
    autoPlay: le,
    capture: le,
    charSet: null,
    checked: le,
    cite: null,
    className: Ae,
    cols: H,
    colSpan: null,
    content: null,
    contentEditable: Be,
    controls: le,
    controlsList: Ae,
    coords: H | di,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: NC,
    draggable: Be,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: le,
    formTarget: null,
    headers: Ae,
    height: H,
    hidden: le,
    high: H,
    href: null,
    hrefLang: null,
    htmlFor: Ae,
    httpEquiv: Ae,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: le,
    itemId: null,
    itemProp: Ae,
    itemRef: Ae,
    itemScope: le,
    itemType: Ae,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: le,
    low: H,
    manifest: null,
    max: null,
    maxLength: H,
    media: null,
    method: null,
    min: null,
    minLength: H,
    multiple: le,
    muted: le,
    name: null,
    nonce: null,
    noModule: le,
    noValidate: le,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: le,
    optimum: H,
    pattern: null,
    ping: Ae,
    placeholder: null,
    playsInline: le,
    poster: null,
    preload: null,
    readOnly: le,
    referrerPolicy: null,
    rel: Ae,
    required: le,
    reversed: le,
    rows: H,
    rowSpan: H,
    sandbox: Ae,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shape: null,
    size: H,
    sizes: null,
    slot: null,
    span: H,
    spellCheck: Be,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: H,
    step: null,
    style: null,
    tabIndex: H,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: Be,
    width: H,
    wrap: null,
    align: null,
    aLink: null,
    archive: Ae,
    axis: null,
    background: null,
    bgColor: null,
    border: H,
    borderColor: null,
    bottomMargin: H,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: le,
    declare: le,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: H,
    leftMargin: H,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: H,
    marginWidth: H,
    noResize: le,
    noHref: le,
    noShade: le,
    noWrap: le,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: H,
    rules: null,
    scheme: null,
    scrolling: Be,
    standby: null,
    summary: null,
    text: null,
    topMargin: H,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: H,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: H,
    security: null,
    unselectable: null
  }
}), $D = Vi({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: LC,
  properties: {
    about: Ct,
    accentHeight: H,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: H,
    amplitude: H,
    arabicForm: null,
    ascent: H,
    attributeName: null,
    attributeType: null,
    azimuth: H,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: H,
    by: null,
    calcMode: null,
    capHeight: H,
    className: Ae,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: H,
    diffuseConstant: H,
    direction: null,
    display: null,
    dur: null,
    divisor: H,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: H,
    enableBackground: null,
    end: null,
    event: null,
    exponent: H,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: H,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: di,
    g2: di,
    glyphName: di,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: H,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: H,
    horizOriginX: H,
    horizOriginY: H,
    id: null,
    ideographic: H,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: H,
    k: H,
    k1: H,
    k2: H,
    k3: H,
    k4: H,
    kernelMatrix: Ct,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: H,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: H,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: H,
    overlineThickness: H,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: H,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ae,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: H,
    pointsAtY: H,
    pointsAtZ: H,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ct,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ct,
    rev: Ct,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ct,
    requiredFeatures: Ct,
    requiredFonts: Ct,
    requiredFormats: Ct,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: H,
    specularExponent: H,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: H,
    strikethroughThickness: H,
    string: null,
    stroke: null,
    strokeDashArray: Ct,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: H,
    strokeOpacity: H,
    strokeWidth: null,
    style: null,
    surfaceScale: H,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ct,
    tabIndex: H,
    tableValues: null,
    target: null,
    targetX: H,
    targetY: H,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ct,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: H,
    underlineThickness: H,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: H,
    values: null,
    vAlphabetic: H,
    vMathematical: H,
    vectorEffect: null,
    vHanging: H,
    vIdeographic: H,
    version: null,
    vertAdvY: H,
    vertOriginX: H,
    vertOriginY: H,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: H,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), ED = /^data[-\w.:]+$/i, Ry = /-[a-z]/g, AD = /[A-Z]/g;
function PD(e, t) {
  const n = Sh(t);
  let r = t, o = Yt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && ED.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(Ry, RD);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!Ry.test(i)) {
        let l = i.replace(AD, _D);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Eg;
  }
  return new o(r, t);
}
function _D(e) {
  return "-" + e.toLowerCase();
}
function RD(e) {
  return e.charAt(1).toUpperCase();
}
const TD = OC([DC, MC, zC, BC, CD], "html"), jC = OC([DC, MC, zC, BC, $D], "svg"), ID = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "nextid",
  "param",
  "source",
  "track",
  "wbr"
], Ty = {}.hasOwnProperty;
function OD(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const a = r.handlers;
    if (o && Ty.call(o, e)) {
      const s = String(o[e]);
      l = Ty.call(a, s) ? a[s] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function ND(e, t) {
  if (e = e.replace(
    t.subset ? MD(t.subset) : /["&'<>`]/g,
    r
  ), t.subset || t.escapeOnly)
    return e;
  return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, n).replace(
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
    r
  );
  function n(o, i, l) {
    return t.format(
      (o.charCodeAt(0) - 55296) * 1024 + o.charCodeAt(1) - 56320 + 65536,
      l.charCodeAt(i + 2),
      t
    );
  }
  function r(o, i, l) {
    return t.format(
      o.charCodeAt(0),
      l.charCodeAt(i + 1),
      t
    );
  }
}
function MD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function DD(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function LD(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const FD = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
], Cd = {
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  fnof: "\u0192",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  bull: "\u2022",
  hellip: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  oline: "\u203E",
  frasl: "\u2044",
  weierp: "\u2118",
  image: "\u2111",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  circ: "\u02C6",
  tilde: "\u02DC",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  permil: "\u2030",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  euro: "\u20AC"
}, zD = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], VC = {}.hasOwnProperty, Ch = {};
let Rs;
for (Rs in Cd)
  VC.call(Cd, Rs) && (Ch[Cd[Rs]] = Rs);
function BD(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (VC.call(Ch, o)) {
    const i = Ch[o], l = "&" + i;
    return n && FD.includes(i) && !zD.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function jD(e, t, n) {
  let r = DD(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = BD(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = LD(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function pi(e, t) {
  return ND(e, Object.assign({ format: jD }, t));
}
function VD(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + pi(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, o) + "-->";
  function o(i) {
    return pi(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function HD(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function UD(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function WD(e) {
  return e.join(" ").trim();
}
function Ag(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const Ue = UC(1), HC = UC(-1);
function UC(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, a = i && i[l];
    if (!o)
      for (; a && Ag(a); )
        l += e, a = i[l];
    return a;
  }
}
const qD = {}.hasOwnProperty;
function WC(e) {
  return t;
  function t(n, r, o) {
    return qD.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const Pg = WC({
  html: QD,
  head: $d,
  body: GD,
  p: KD,
  li: YD,
  dt: XD,
  dd: ZD,
  rt: Iy,
  rp: Iy,
  optgroup: JD,
  option: eL,
  menuitem: tL,
  colgroup: $d,
  caption: $d,
  thead: nL,
  tbody: rL,
  tfoot: oL,
  tr: iL,
  td: Oy,
  th: Oy
});
function $d(e, t, n) {
  const r = Ue(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && Ag(r.value.charAt(0)));
}
function QD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function GD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function KD(e, t, n) {
  const r = Ue(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function YD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function XD(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function ZD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function Iy(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function JD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function eL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function tL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function nL(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function rL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function oL(e, t, n) {
  return !Ue(n, t);
}
function iL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function Oy(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const lL = WC({
  html: aL,
  head: sL,
  body: uL,
  colgroup: cL,
  tbody: fL
});
function aL(e) {
  const t = Ue(e, -1);
  return !t || t.type !== "comment";
}
function sL(e) {
  const t = e.children, n = [];
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r];
    if (o.type === "element" && (o.tagName === "title" || o.tagName === "base")) {
      if (n.includes(o.tagName))
        return !1;
      n.push(o.tagName);
    }
  }
  return t.length > 0;
}
function uL(e) {
  const t = Ue(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && Ag(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function cL(e, t, n) {
  const r = HC(n, t), o = Ue(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && Pg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function fL(e, t, n) {
  const r = HC(n, t), o = Ue(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && Pg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const Ts = {
  name: [
    [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
    [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
  ],
  unquoted: [
    [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
    [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
  ],
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function dL(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const a = [];
  let s;
  o.space === "html" && e.tagName === "svg" && (r.schema = jC);
  const u = pL(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !lL(e, t, n)) && (a.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (s = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || s === "/" || s && s !== '"' && s !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(c), !l && (!i || !Pg(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function pL(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = hL(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function hL(e, t, n) {
  const r = PD(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, a;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const s = pi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: Ts.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? UD : WD)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? s : (e.settings.preferUnquoted && (a = pi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: Ts.unquoted[o][i],
      attribute: !0
    })
  )), a !== n && (e.settings.quoteSmart && Xu(n, l) > Xu(n, e.alternative) && (l = e.alternative), a = l + pi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? Ts.single : Ts.double)[o][i],
      attribute: !0
    })
  ) + l), s + (a && "=" + a));
}
function qC(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : pi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function mL(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : qC(e, t, n, r);
}
function gL(e, t, n, r) {
  return r.all(e);
}
const vL = OD("type", {
  invalid: yL,
  unknown: xL,
  handlers: { comment: VD, doctype: HD, element: dL, raw: mL, root: gL, text: qC }
});
function yL(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function xL(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function wL(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: bL,
    all: SL,
    settings: {
      omitOptionalTags: n.omitOptionalTags || !1,
      allowParseErrors: n.allowParseErrors || !1,
      allowDangerousCharacters: n.allowDangerousCharacters || !1,
      quoteSmart: n.quoteSmart || !1,
      preferUnquoted: n.preferUnquoted || !1,
      tightAttributes: n.tightAttributes || !1,
      upperDoctype: n.upperDoctype || !1,
      tightDoctype: n.tightDoctype || !1,
      bogusComments: n.bogusComments || !1,
      tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
      tightSelfClosing: n.tightSelfClosing || !1,
      collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
      allowDangerousHtml: n.allowDangerousHtml || !1,
      voids: n.voids || ID,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? jC : TD,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function bL(e, t, n) {
  return vL(e, t, n, this);
}
function SL(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function kL(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return wL(o, n);
  }
}
function CL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      n.hasOwnProperty(r) && (e[r] = n[r]);
  }
  return e;
}
function $h(e, t) {
  return Array(t + 1).join(e);
}
function $L(e) {
  return e.replace(/^\n*/, "");
}
function EL(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; )
    t--;
  return e.substring(0, t);
}
var AL = [
  "ADDRESS",
  "ARTICLE",
  "ASIDE",
  "AUDIO",
  "BLOCKQUOTE",
  "BODY",
  "CANVAS",
  "CENTER",
  "DD",
  "DIR",
  "DIV",
  "DL",
  "DT",
  "FIELDSET",
  "FIGCAPTION",
  "FIGURE",
  "FOOTER",
  "FORM",
  "FRAMESET",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "HEADER",
  "HGROUP",
  "HR",
  "HTML",
  "ISINDEX",
  "LI",
  "MAIN",
  "MENU",
  "NAV",
  "NOFRAMES",
  "NOSCRIPT",
  "OL",
  "OUTPUT",
  "P",
  "PRE",
  "SECTION",
  "TABLE",
  "TBODY",
  "TD",
  "TFOOT",
  "TH",
  "THEAD",
  "TR",
  "UL"
];
function _g(e) {
  return Rg(e, AL);
}
var QC = [
  "AREA",
  "BASE",
  "BR",
  "COL",
  "COMMAND",
  "EMBED",
  "HR",
  "IMG",
  "INPUT",
  "KEYGEN",
  "LINK",
  "META",
  "PARAM",
  "SOURCE",
  "TRACK",
  "WBR"
];
function GC(e) {
  return Rg(e, QC);
}
function PL(e) {
  return YC(e, QC);
}
var KC = [
  "A",
  "TABLE",
  "THEAD",
  "TBODY",
  "TFOOT",
  "TH",
  "TD",
  "IFRAME",
  "SCRIPT",
  "AUDIO",
  "VIDEO"
];
function _L(e) {
  return Rg(e, KC);
}
function RL(e) {
  return YC(e, KC);
}
function Rg(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function YC(e, t) {
  return e.getElementsByTagName && t.some(function(n) {
    return e.getElementsByTagName(n).length;
  });
}
var lt = {};
lt.paragraph = {
  filter: "p",
  replacement: function(e) {
    return `

` + e + `

`;
  }
};
lt.lineBreak = {
  filter: "br",
  replacement: function(e, t, n) {
    return n.br + `
`;
  }
};
lt.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(e, t, n) {
    var r = Number(t.nodeName.charAt(1));
    if (n.headingStyle === "setext" && r < 3) {
      var o = $h(r === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + o + `

`;
    } else
      return `

` + $h("#", r) + " " + e + `

`;
  }
};
lt.blockquote = {
  filter: "blockquote",
  replacement: function(e) {
    return e = e.replace(/^\n+|\n+$/g, ""), e = e.replace(/^/gm, "> "), `

` + e + `

`;
  }
};
lt.list = {
  filter: ["ul", "ol"],
  replacement: function(e, t) {
    var n = t.parentNode;
    return n.nodeName === "LI" && n.lastElementChild === t ? `
` + e : `

` + e + `

`;
  }
};
lt.listItem = {
  filter: "li",
  replacement: function(e, t, n) {
    e = e.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
    `);
    var r = n.bulletListMarker + "   ", o = t.parentNode;
    if (o.nodeName === "OL") {
      var i = o.getAttribute("start"), l = Array.prototype.indexOf.call(o.children, t);
      r = (i ? Number(i) + l : l + 1) + ".  ";
    }
    return r + e + (t.nextSibling && !/\n$/.test(e) ? `
` : "");
  }
};
lt.indentedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "indented" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, n) {
    return `

    ` + t.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
  }
};
lt.fencedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, n) {
    for (var r = t.firstChild.getAttribute("class") || "", o = (r.match(/language-(\S+)/) || [null, ""])[1], i = t.firstChild.textContent, l = n.fence.charAt(0), a = 3, s = new RegExp("^" + l + "{3,}", "gm"), u; u = s.exec(i); )
      u[0].length >= a && (a = u[0].length + 1);
    var c = $h(l, a);
    return `

` + c + o + `
` + i.replace(/\n$/, "") + `
` + c + `

`;
  }
};
lt.horizontalRule = {
  filter: "hr",
  replacement: function(e, t, n) {
    return `

` + n.hr + `

`;
  }
};
lt.inlineLink = {
  filter: function(e, t) {
    return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t) {
    var n = t.getAttribute("href"), r = Ju(t.getAttribute("title"));
    return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")";
  }
};
lt.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, n) {
    var r = t.getAttribute("href"), o = Ju(t.getAttribute("title"));
    o && (o = ' "' + o + '"');
    var i, l;
    switch (n.linkReferenceStyle) {
      case "collapsed":
        i = "[" + e + "][]", l = "[" + e + "]: " + r + o;
        break;
      case "shortcut":
        i = "[" + e + "]", l = "[" + e + "]: " + r + o;
        break;
      default:
        var a = this.references.length + 1;
        i = "[" + e + "][" + a + "]", l = "[" + a + "]: " + r + o;
    }
    return this.references.push(l), i;
  },
  references: [],
  append: function(e) {
    var t = "";
    return this.references.length && (t = `

` + this.references.join(`
`) + `

`, this.references = []), t;
  }
};
lt.emphasis = {
  filter: ["em", "i"],
  replacement: function(e, t, n) {
    return e.trim() ? n.emDelimiter + e + n.emDelimiter : "";
  }
};
lt.strong = {
  filter: ["strong", "b"],
  replacement: function(e, t, n) {
    return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : "";
  }
};
lt.code = {
  filter: function(e) {
    var t = e.previousSibling || e.nextSibling, n = e.parentNode.nodeName === "PRE" && !t;
    return e.nodeName === "CODE" && !n;
  },
  replacement: function(e) {
    if (!e)
      return "";
    e = e.replace(/\r?\n|\r/g, " ");
    for (var t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "", n = "`", r = e.match(/`+/gm) || []; r.indexOf(n) !== -1; )
      n = n + "`";
    return n + t + e + t + n;
  }
};
lt.image = {
  filter: "img",
  replacement: function(e, t) {
    var n = Ju(t.getAttribute("alt")), r = t.getAttribute("src") || "", o = Ju(t.getAttribute("title")), i = o ? ' "' + o + '"' : "";
    return r ? "![" + n + "](" + r + i + ")" : "";
  }
};
function Ju(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function XC(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules)
    this.array.push(e.rules[t]);
}
XC.prototype = {
  add: function(e, t) {
    this.array.unshift(t);
  },
  keep: function(e) {
    this._keep.unshift({
      filter: e,
      replacement: this.keepReplacement
    });
  },
  remove: function(e) {
    this._remove.unshift({
      filter: e,
      replacement: function() {
        return "";
      }
    });
  },
  forNode: function(e) {
    if (e.isBlank)
      return this.blankRule;
    var t;
    return (t = Ed(this.array, e, this.options)) || (t = Ed(this._keep, e, this.options)) || (t = Ed(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++)
      e(this.array[t], t);
  }
};
function Ed(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    if (TL(o, t, n))
      return o;
  }
}
function TL(e, t, n) {
  var r = e.filter;
  if (typeof r == "string") {
    if (r === t.nodeName.toLowerCase())
      return !0;
  } else if (Array.isArray(r)) {
    if (r.indexOf(t.nodeName.toLowerCase()) > -1)
      return !0;
  } else if (typeof r == "function") {
    if (r.call(e, t, n))
      return !0;
  } else
    throw new TypeError("`filter` needs to be a string, array, or function");
}
function IL(e) {
  var t = e.element, n = e.isBlock, r = e.isVoid, o = e.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!t.firstChild || o(t))) {
    for (var i = null, l = !1, a = null, s = Ny(a, t, o); s !== t; ) {
      if (s.nodeType === 3 || s.nodeType === 4) {
        var u = s.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !l && u[0] === " " && (u = u.substr(1)), !u) {
          s = Ad(s);
          continue;
        }
        s.data = u, i = s;
      } else if (s.nodeType === 1)
        n(s) || s.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, l = !1) : r(s) || o(s) ? (i = null, l = !0) : i && (l = !1);
      else {
        s = Ad(s);
        continue;
      }
      var c = Ny(a, s, o);
      a = s, s = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || Ad(i));
  }
}
function Ad(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function Ny(e, t, n) {
  return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var ZC = typeof window < "u" ? window : {};
function OL() {
  var e = ZC.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function NL() {
  var e = function() {
  };
  return ML() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function ML() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
var DL = OL() ? ZC.DOMParser : NL();
function LL(e, t) {
  var n;
  if (typeof e == "string") {
    var r = FL().parseFromString(
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = e.cloneNode(!0);
  return IL({
    element: n,
    isBlock: _g,
    isVoid: GC,
    isPre: t.preformattedCode ? zL : null
  }), n;
}
var Pd;
function FL() {
  return Pd = Pd || new DL(), Pd;
}
function zL(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function BL(e, t) {
  return e.isBlock = _g(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = jL(e), e.flankingWhitespace = VL(e, t), e;
}
function jL(e) {
  return !GC(e) && !_L(e) && /^\s*$/i.test(e.textContent) && !PL(e) && !RL(e);
}
function VL(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return { leading: "", trailing: "" };
  var n = HL(e.textContent);
  return n.leadingAscii && My("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && My("right", e, t) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function HL(e) {
  var t = e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: t[1],
    leadingAscii: t[2],
    leadingNonAscii: t[3],
    trailing: t[4],
    trailingNonAscii: t[5],
    trailingAscii: t[6]
  };
}
function My(e, t, n) {
  var r, o, i;
  return e === "left" ? (r = t.previousSibling, o = / $/) : (r = t.nextSibling, o = /^ /), r && (r.nodeType === 3 ? i = o.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? i = !1 : r.nodeType === 1 && !_g(r) && (i = o.test(r.textContent))), i;
}
var UL = Array.prototype.reduce, WL = [
  [/\\/g, "\\\\"],
  [/\*/g, "\\*"],
  [/^-/g, "\\-"],
  [/^\+ /g, "\\+ "],
  [/^(=+)/g, "\\$1"],
  [/^(#{1,6}) /g, "\\$1 "],
  [/`/g, "\\`"],
  [/^~~~/g, "\\~~~"],
  [/\[/g, "\\["],
  [/\]/g, "\\]"],
  [/^>/g, "\\>"],
  [/_/g, "\\_"],
  [/^(\d+)\. /g, "$1\\. "]
];
function ec(e) {
  if (!(this instanceof ec))
    return new ec(e);
  var t = {
    rules: lt,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: !1,
    blankReplacement: function(n, r) {
      return r.isBlock ? `

` : "";
    },
    keepReplacement: function(n, r) {
      return r.isBlock ? `

` + r.outerHTML + `

` : r.outerHTML;
    },
    defaultReplacement: function(n, r) {
      return r.isBlock ? `

` + n + `

` : n;
    }
  };
  this.options = CL({}, t, e), this.rules = new XC(this.options);
}
ec.prototype = {
  turndown: function(e) {
    if (!GL(e))
      throw new TypeError(
        e + " is not a string, or an element/document/fragment node."
      );
    if (e === "")
      return "";
    var t = JC.call(this, new LL(e, this.options));
    return qL.call(this, t);
  },
  use: function(e) {
    if (Array.isArray(e))
      for (var t = 0; t < e.length; t++)
        this.use(e[t]);
    else if (typeof e == "function")
      e(this);
    else
      throw new TypeError("plugin must be a Function or an Array of Functions");
    return this;
  },
  addRule: function(e, t) {
    return this.rules.add(e, t), this;
  },
  keep: function(e) {
    return this.rules.keep(e), this;
  },
  remove: function(e) {
    return this.rules.remove(e), this;
  },
  escape: function(e) {
    return WL.reduce(function(t, n) {
      return t.replace(n[0], n[1]);
    }, e);
  }
};
function JC(e) {
  var t = this;
  return UL.call(e.childNodes, function(n, r) {
    r = new BL(r, t.options);
    var o = "";
    return r.nodeType === 3 ? o = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (o = QL.call(t, r)), e2(n, o);
  }, "");
}
function qL(e) {
  var t = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (e = e2(e, n.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function QL(e) {
  var t = this.rules.forNode(e), n = JC.call(this, e), r = e.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function e2(e, t) {
  var n = EL(e), r = $L(t), o = Math.max(e.length - n.length, t.length - r.length), i = `

`.substring(0, o);
  return n + i + r;
}
function GL(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
async function KL(e) {
  if (!e)
    return "";
  const t = await N7().use(MN).use(qN).use(DM).use(xD).use(kL).process(e);
  return String(t);
}
async function YL(e) {
  const t = new ec({
    blankReplacement: () => ""
  });
  return t.remove([
    "script",
    "link",
    "nav",
    "footer",
    "img",
    "iframe",
    "audio",
    "canvas",
    "figure",
    "ins",
    "del",
    "next-route-announcer"
  ]), t.turndown(e);
}
const XL = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    KL(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, t2 = (e) => {
  const t = XL(e);
  return /* @__PURE__ */ B("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, n2 = m.exports.memo(({
  message: e
}) => /* @__PURE__ */ he("div", {
  className: Ei("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ B(t2, {
      content: e.text
    })
  })]
}), (e, t) => e.message.text === t.message.text);
n2.displayName = "MessageItem";
const ZL = (e) => {
  var s;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r,
    updateOrUpsertConventions: o
  } = Pi(), [i] = m.exports.useState(e.action), l = (s = r[i]) != null ? s : [];
  function a() {
    var c, f, d;
    const u = ((f = (c = t.current) == null ? void 0 : c.children.length) != null ? f : 1) - 1;
    ((d = t.current) == null ? void 0 : d.children[u]) && n.current && setTimeout(() => {
      x7(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return Pi.subscribe((u, c) => {
    var f, d;
    ((f = c.conventions[i]) == null ? void 0 : f.length) !== ((d = u.conventions[i]) == null ? void 0 : d.length) && a();
  }), m.exports.useEffect(() => {
    ac(eu, (u) => {
      const {
        data: c
      } = u;
      o(c.action, c.message);
    }), a();
  }, [o]), /* @__PURE__ */ B("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ he(m7, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ B(g7, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ he("div", {
          ref: t,
          children: [l.map((u) => /* @__PURE__ */ B(n2, {
            message: u
          }, u.id)), /* @__PURE__ */ B("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ B(Mv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ B(Dv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ B(Mv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ B(Dv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, Xc = (e) => e.replace("-page", "");
function Eh(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? Eh(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const JL = { run: (e) => e() }, eF = () => JL, r2 = typeof console.createTask < "u" ? console.createTask : eF;
function tF(e, t) {
  const n = t.shift(), r = r2(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function nF(e, t) {
  const n = t.shift(), r = r2(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function _d(e, t) {
  for (const n of [...e])
    n(t);
}
class rF {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const o = t;
    let i;
    for (; this._deprecatedHooks[t]; )
      i = this._deprecatedHooks[t], t = i.to;
    if (i && !r.allowDeprecated) {
      let l = i.message;
      l || (l = `${o} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(l) || (console.warn(l), this._deprecatedMessages.add(l));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let r, o = (...i) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...i));
    return r = this.hook(t, o), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r)
      this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = Eh(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Eh(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(tF, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(nF, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && _d(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && _d(this._after, o);
    }) : (this._after && o && _d(this._after, o), i);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
}
function oF() {
  return new rF();
}
const o2 = oF(), Tg = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && o2.hook(t.name, n), n();
}, iF = JO();
function lF() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [a, s] = m.exports.useState([Yr]), u = a[a.length - 1], [c, f] = m.exports.useState(!1), {
    upsertConventions: d
  } = Pi(), {
    open: g,
    setOpen: h,
    toggle: v,
    updateChatOpen: w
  } = ya(), p = m.exports.useCallback(() => {
    s(($) => {
      const P = [...$];
      return P.splice(-1, 1), P;
    }), o2.callHook("command-input");
  }, []);
  function y() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const x = m.exports.useCallback(($) => {
    t($);
  }, []), b = m.exports.useCallback(async ($, P) => {
    if (console.log("handleValueSelect", $, P), $.endsWith("-page")) {
      s((T) => [...T, $]);
      return;
    }
    if ($ === Av && (f(!0), await wl(eu, {
      text: P == null ? void 0 : P.text,
      action: Av
    }, "background"), f(!1)), $ === Uu && (f(!0), await wl(eu, {
      text: P == null ? void 0 : P.text,
      action: Uu
    }, "background"), f(!1)), $ === tu) {
      const T = await YL(document.body), R = await wl(eu, {
        text: T,
        action: tu
      }, "background");
      d(tu, R.message);
    }
    t("");
  }, [d]);
  m.exports.useEffect(() => {
    const $ = (P) => {
      if (P.key === "j" && P.metaKey && (v(), u === Wu && p(), w(!1)), P.key === "Escape" && u === Yr && !ya.getState().subCommandOpen) {
        h(!1), w(!1);
        return;
      }
      P.key === "Escape" && u !== Yr && (p(), setTimeout(() => {
        var T;
        (T = i.current) == null || T.focus();
      }, 100));
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [w, u, p, v, h]), Tg(i, {
    name: "command-input"
  });
  const A = u === Yr, S = u === qu || u === dh, E = u === qu;
  return /* @__PURE__ */ he(bo, {
    children: [/* @__PURE__ */ B(Z3, {
      open: g,
      children: /* @__PURE__ */ B(J3, {
        container: r.current,
        children: /* @__PURE__ */ B(eP, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ he(an, {
            ref: o,
            value: e,
            onValueChange: x,
            loop: !0,
            children: [/* @__PURE__ */ B("div", {
              "cmdk-raycast-top-shine": ""
            }), /* @__PURE__ */ he("div", {
              className: "flex items-center justify-between px-3 pt-1",
              children: [/* @__PURE__ */ B("div", {
                className: "flex items-center justify-start gap-2",
                children: a.map(($) => /* @__PURE__ */ B("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: Xc($)
                }, $))
              }), E && /* @__PURE__ */ B(KO, {
                container: r
              })]
            }), /* @__PURE__ */ B(an.Input, {
              ref: ($) => {
                i.current = $;
              },
              onValueChange: ($) => {
                n.current = $;
              },
              autoFocus: !0,
              tabIndex: 1,
              className: Ei({
                hidden: !A
              }),
              placeholder: "Search for commands...",
              onKeyDown: ($) => {
                var P;
                $.key === "Enter" && y(), !(u === Yr || ((P = n.current) == null ? void 0 : P.length)) && $.key === "Backspace" && ($.preventDefault(), p(), y());
              }
            }, "cmdk-input"), A && /* @__PURE__ */ B("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ he(an.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === Yr && /* @__PURE__ */ B(aF, {
                onSelect: b
              }), u === Wu && /* @__PURE__ */ B(sF, {
                onExit: p
              }), S && /* @__PURE__ */ B(uF, {
                page: u
              })]
            }), /* @__PURE__ */ he("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [S && /* @__PURE__ */ B(cF, {
                page: u,
                onSendMessage: b
              }), S && c && /* @__PURE__ */ B("i", {
                className: "spinner gg-spinner/0.75"
              }), /* @__PURE__ */ B("button", {
                tabIndex: 2,
                "cmdk-raycast-open-trigger": "",
                children: /* @__PURE__ */ B("kbd", {
                  children: "\u21B5"
                })
              }), /* @__PURE__ */ B("hr", {}), /* @__PURE__ */ B(fF, {
                listRef: l,
                selectedValue: e,
                inputRef: i,
                onSelect: b
              })]
            })]
          })
        })
      })
    }), /* @__PURE__ */ B("div", {
      id: "aiflow-dialog-container",
      className: "raycast fixed top-0 left-0",
      ref: r
    })]
  });
}
function aF({
  onSelect: e
}) {
  const {
    clear: t
  } = Pi(), {
    updateChatOpen: n,
    setOpen: r
  } = ya();
  return /* @__PURE__ */ he(bo, {
    children: [/* @__PURE__ */ B(an.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ he(an.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ he(Lo, {
        isCommand: !0,
        value: "open-convenstions-history",
        onSelect: () => {
          r(!1), n(!0);
        },
        children: [/* @__PURE__ */ B(XO, {}), "View History"]
      }), /* @__PURE__ */ he(Lo, {
        isCommand: !0,
        value: "clear-storage",
        onSelect: () => {
          t(), iF.clear();
        },
        children: [/* @__PURE__ */ B(YO, {}), "Clear Storage"]
      }), /* @__PURE__ */ he(Lo, {
        isCommand: !0,
        onSelect: () => e(Wu),
        value: Wu,
        children: [/* @__PURE__ */ B(ZO, {}), "Config"]
      }), /* @__PURE__ */ he(Lo, {
        isCommand: !0,
        onSelect: () => e(dh),
        value: dh,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ he(Lo, {
        isCommand: !0,
        onSelect: () => e(qu),
        value: qu,
        children: [/* @__PURE__ */ B(ST, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ he(Lo, {
        isCommand: !0,
        value: tu,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-notes/0.8 text-mayumi-gray-1200"
        }), "Summary"]
      })]
    })]
  });
}
function sF(e) {
  const t = Ak();
  return /* @__PURE__ */ B("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ B(ug, {
      light: !0,
      className: "w-1/2",
      value: t.OPENAI_API_KEY,
      onKeyDown: (n) => {
        var r;
        return n.key === "Enter" && (t.set({
          [bT]: n.currentTarget.value
        }), (r = e.onExit) == null || r.call(e)), !1;
      }
    })
  });
}
function uF(e) {
  return /* @__PURE__ */ B(ZL, {
    action: Xc(e.page)
  });
}
function cF(e) {
  const [t, n] = m.exports.useState(""), r = m.exports.useRef(!1), o = m.exports.useRef(null), i = m.exports.useRef(""), l = (a) => {
    if (a.key === "Enter" && r.current === !1) {
      a.preventDefault();
      const s = Xc(e.page);
      e.onSendMessage(s, {
        text: i.current
      }), i.current = "", o.current.value = "", n(""), console.log("ChatInput", o.current);
    }
  };
  return Tg(o, {
    name: "chat-input"
  }), /* @__PURE__ */ B(ug, {
    tabIndex: 1,
    value: t,
    ghost: !0,
    placeholder: "Type your message...",
    onCompositionStart: () => {
      r.current = !0;
    },
    onCompositionEnd: () => {
      r.current = !1;
    },
    ref: o,
    onChange: (a) => {
      n(a.target.value), i.current = a.target.value;
    },
    onKeyDown: l
  }, "cmdk-ai-input");
}
function fF({
  inputRef: e,
  listRef: t,
  selectedValue: n,
  onSelect: r
}) {
  const {
    subCommandOpen: o,
    toggleSubCommand: i,
    setSubCommandOpen: l
  } = ya(), [, a] = m.exports.useState(), s = m.exports.useRef(null), u = n !== Yr;
  return m.exports.useEffect(() => {
    function c(f) {
      f.key === "m" && f.metaKey && (f.preventDefault(), u && i());
    }
    return document.addEventListener("keydown", c), () => {
      document.removeEventListener("keydown", c);
    };
  }, [u, i, l, e]), m.exports.useEffect(() => {
    const c = t.current;
    !c || (o ? c.style.overflow = "hidden" : c.style.overflow = "");
  }, [o, t]), Tg(s, {
    name: "subcommand-input"
  }), /* @__PURE__ */ he(B3, {
    open: o,
    onOpenChange: (c) => {
      !u || l(c);
    },
    modal: !0,
    children: [/* @__PURE__ */ he(j3, {
      tabIndex: 3,
      disabled: !u,
      "cmdk-raycast-subcommand-trigger": "",
      onClick: () => {
        l(!0);
      },
      "aria-expanded": o,
      children: ["Actions", /* @__PURE__ */ B("kbd", {
        children: "\u2318"
      }), /* @__PURE__ */ B("kbd", {
        children: "M"
      })]
    }), /* @__PURE__ */ B(V3, {
      side: "top",
      align: "end",
      className: "raycast-submenu outline-none",
      sideOffset: 16,
      alignOffset: 0,
      onEscapeKeyDown: () => {
        l(!1);
      },
      onCloseAutoFocus: (c) => {
        var f;
        c.preventDefault(), (f = e == null ? void 0 : e.current) == null || f.focus();
      },
      children: /* @__PURE__ */ he(an, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ B(an.List, {
          children: /* @__PURE__ */ B(an.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: /* @__PURE__ */ B(dF, {
              page: n
            })
          })
        }), /* @__PURE__ */ B(an.Input, {
          autoFocus: !0,
          onValueChange: a,
          ref: s,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function dF({
  page: e
}) {
  const {
    newConvention: t
  } = Pi((n) => n);
  return /* @__PURE__ */ B(bo, {
    children: /* @__PURE__ */ B(pF, {
      value: "new-convention",
      onSelect: () => {
        t(Xc(e));
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: "New Convention"
      })
    })
  });
}
function Lo({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1
}) {
  return /* @__PURE__ */ he(an.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ B("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function pF({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ he(an.Item, {
    value: n,
    onSelect: r,
    children: [e, /* @__PURE__ */ B("div", {
      "cmdk-raycast-submenu-shortcuts": "",
      children: t.split(" ").map((o) => /* @__PURE__ */ B("kbd", {
        children: o
      }, o))
    })]
  });
}
var Ig = qa(), oe = (e) => Wa(e, Ig), Og = qa();
oe.write = (e) => Wa(e, Og);
var Zc = qa();
oe.onStart = (e) => Wa(e, Zc);
var Ng = qa();
oe.onFrame = (e) => Wa(e, Ng);
var Mg = qa();
oe.onFinish = (e) => Wa(e, Mg);
var hi = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = hi.findIndex((l) => l.cancel == r);
    ~i && hi.splice(i, 1), wr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return hi.splice(i2(n), 0, o), wr += 1, l2(), o;
};
var i2 = (e) => ~(~hi.findIndex((t) => t.time > e) || ~hi.length);
oe.cancel = (e) => {
  Zc.delete(e), Ng.delete(e), Mg.delete(e), Ig.delete(e), Og.delete(e);
};
oe.sync = (e) => {
  Ah = !0, oe.batchedUpdates(e), Ah = !1;
};
oe.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...o) {
    t = o, oe.onStart(n);
  }
  return r.handler = e, r.cancel = () => {
    Zc.delete(n), t = null;
  }, r;
};
var Dg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => Dg = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : s2();
};
var xr = -1, wr = 0, Ah = !1;
function Wa(e, t) {
  Ah ? (t.delete(e), e(0)) : (t.add(e), l2());
}
function l2() {
  xr < 0 && (xr = 0, oe.frameLoop !== "demand" && Dg(a2));
}
function hF() {
  xr = -1;
}
function a2() {
  ~xr && (Dg(a2), oe.batchedUpdates(s2));
}
function s2() {
  let e = xr;
  xr = oe.now();
  let t = i2(xr);
  if (t && (u2(hi.splice(0, t), (n) => n.handler()), wr -= t), !wr) {
    hF();
    return;
  }
  Zc.flush(), Ig.flush(e ? Math.min(64, xr - e) : 16.667), Ng.flush(), Og.flush(), Mg.flush();
}
function qa() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    wr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return wr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), wr -= t.size, u2(t, (r) => r(n) && e.add(r)), wr += e.size, t = e);
  } };
}
function u2(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
var mF = Object.defineProperty, gF = (e, t) => {
  for (var n in t)
    mF(e, n, { get: t[n], enumerable: !0 });
}, hn = {};
gF(hn, { assign: () => yF, colors: () => Rr, createStringInterpolator: () => Fg, skipAnimation: () => f2, to: () => c2, willAdvance: () => zg });
function Ph() {
}
var vF = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
function Ln(e, t) {
  if (U.arr(e)) {
    if (!U.arr(t) || e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  return e === t;
}
var pe = (e, t) => e.forEach(t);
function Pn(e, t, n) {
  if (U.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Pt = (e) => U.und(e) ? [] : U.arr(e) ? e : [e];
function Fl(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), pe(n, t);
  }
}
var xl = (e, ...t) => Fl(e, (n) => n(...t)), Lg = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Fg, c2, Rr = null, f2 = !1, zg = Ph, yF = (e) => {
  e.to && (c2 = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Rr = e.colors), e.skipAnimation != null && (f2 = e.skipAnimation), e.createStringInterpolator && (Fg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (zg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
}, zl = /* @__PURE__ */ new Set(), Ht = [], Rd = [], tc = 0, Jc = { get idle() {
  return !zl.size && !Ht.length;
}, start(e) {
  tc > e.priority ? (zl.add(e), oe.onStart(xF)) : (d2(e), oe(_h));
}, advance: _h, sort(e) {
  if (tc)
    oe.onFrame(() => Jc.sort(e));
  else {
    let t = Ht.indexOf(e);
    ~t && (Ht.splice(t, 1), p2(e));
  }
}, clear() {
  Ht = [], zl.clear();
} };
function xF() {
  zl.forEach(d2), zl.clear(), oe(_h);
}
function d2(e) {
  Ht.includes(e) || p2(e);
}
function p2(e) {
  Ht.splice(wF(Ht, (t) => t.priority > e.priority), 0, e);
}
function _h(e) {
  let t = Rd;
  for (let n = 0; n < Ht.length; n++) {
    let r = Ht[n];
    tc = r.priority, r.idle || (zg(r), r.advance(e), r.idle || t.push(r));
  }
  return tc = 0, Rd = Ht, Rd.length = 0, Ht = t, Ht.length > 0;
}
function wF(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var bF = (e, t, n) => Math.min(Math.max(n, e), t), SF = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, un = "[-+]?\\d*\\.?\\d+", nc = un + "%";
function ef(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var kF = new RegExp("rgb" + ef(un, un, un)), CF = new RegExp("rgba" + ef(un, un, un, un)), $F = new RegExp("hsl" + ef(un, nc, nc)), EF = new RegExp("hsla" + ef(un, nc, nc, un)), AF = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, PF = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, _F = /^#([0-9a-fA-F]{6})$/, RF = /^#([0-9a-fA-F]{8})$/;
function TF(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = _F.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Rr && Rr[e] !== void 0 ? Rr[e] : (t = kF.exec(e)) ? (Fo(t[1]) << 24 | Fo(t[2]) << 16 | Fo(t[3]) << 8 | 255) >>> 0 : (t = CF.exec(e)) ? (Fo(t[1]) << 24 | Fo(t[2]) << 16 | Fo(t[3]) << 8 | Fy(t[4])) >>> 0 : (t = AF.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = RF.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = PF.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = $F.exec(e)) ? (Dy(Ly(t[1]), Is(t[2]), Is(t[3])) | 255) >>> 0 : (t = EF.exec(e)) ? (Dy(Ly(t[1]), Is(t[2]), Is(t[3])) | Fy(t[4])) >>> 0 : null;
}
function Td(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Dy(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Td(o, r, e + 1 / 3), l = Td(o, r, e), a = Td(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Fo(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ly(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Fy(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Is(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function zy(e) {
  let t = TF(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var wa = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return wa({ range: e, output: t, extrapolate: n });
  if (U.str(e.output[0]))
    return Fg(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    let c = OF(u, i);
    return IF(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function IF(e, t, n, r, o, i, l, a, s) {
  let u = s ? s(e) : e;
  if (u < t) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = t);
  }
  if (u > n) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = n);
  }
  return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u = u + r : u = u * (o - r) + r, u);
}
function OF(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var NF = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return bF(0, 1, o / e);
}, rc = 1.70158, Os = rc * 1.525, By = rc + 1, jy = 2 * Math.PI / 3, Vy = 2 * Math.PI / 4.5, Ns = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, MF = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => By * e * e * e - rc * e * e, easeOutBack: (e) => 1 + By * Math.pow(e - 1, 3) + rc * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Os + 1) * 2 * e - Os) / 2 : (Math.pow(2 * e - 2, 2) * ((Os + 1) * (e * 2 - 2) + Os) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * jy), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * jy) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Vy)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Vy) / 2 + 1, easeInBounce: (e) => 1 - Ns(1 - e), easeOutBounce: Ns, easeInOutBounce: (e) => e < 0.5 ? (1 - Ns(1 - 2 * e)) / 2 : (1 + Ns(2 * e - 1)) / 2, steps: NF }, Ri = Symbol.for("FluidValue.get"), go = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Ri]), yt = (e) => e && e[Ri] ? e[Ri]() : e, Hy = (e) => e[go] || null;
function DF(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ba(e, t) {
  let n = e[go];
  n && n.forEach((r) => {
    DF(r, t);
  });
}
var zz, Bz, sx, h2 = (sx = class {
  constructor(e) {
    G(this, zz);
    G(this, Bz);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    LF(this, e);
  }
}, zz = Ri, Bz = go, sx), LF = (e, t) => m2(e, Ri, t);
function Hi(e, t) {
  if (e[Ri]) {
    let n = e[go];
    n || m2(e, go, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Sa(e, t) {
  let n = e[go];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[go] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var m2 = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), ou = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, FF = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Uy = new RegExp(`(${ou.source})(%|[a-z]+)`, "i"), zF = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, tf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, g2 = (e) => {
  let [t, n] = BF(e);
  if (!t || Lg())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && tf.test(n) ? g2(n) : n || e;
}, BF = (e) => {
  let t = tf.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, Id, jF = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, v2 = (e) => {
  Id || (Id = Rr ? new RegExp(`(${Object.keys(Rr).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => yt(o).replace(tf, g2).replace(FF, zy).replace(Id, zy)), n = t.map((o) => o.match(ou).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => wa({ ...e, output: o }));
  return (o) => {
    var a;
    let i = !Uy.test(t[0]) && ((a = t.find((s) => Uy.test(s))) == null ? void 0 : a.replace(ou, "")), l = 0;
    return t[0].replace(ou, () => `${r[l++](o)}${i || ""}`).replace(zF, jF);
  };
}, Bg = "react-spring: ", y2 = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Bg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, VF = y2(console.warn);
function HF() {
  VF(`${Bg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var UF = y2(console.warn);
function WF() {
  UF(`${Bg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function nf(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !Lg() && tf.test(e) || e in (Rr || {}));
}
var jg = Lg() ? m.exports.useEffect : m.exports.useLayoutEffect, qF = () => {
  let e = m.exports.useRef(!1);
  return jg(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function x2() {
  let e = m.exports.useState()[1], t = qF();
  return () => {
    t.current && e(Math.random());
  };
}
function QF(e, t) {
  let [n] = m.exports.useState(() => ({ inputs: t, result: e() })), r = m.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && GF(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function GF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var w2 = (e) => m.exports.useEffect(e, KF), KF = [];
function Wy(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var ka = Symbol.for("Animated:node"), YF = (e) => !!e && e[ka] === e, xn = (e) => e && e[ka], Vg = (e, t) => vF(e, ka, t), rf = (e) => e && e[ka] && e[ka].getPayload(), b2 = class {
  constructor() {
    G(this, "payload");
    Vg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Qa = class extends b2 {
  constructor(t) {
    super();
    G(this, "done", !0);
    G(this, "elapsedTime");
    G(this, "lastPosition");
    G(this, "lastVelocity");
    G(this, "v0");
    G(this, "durationProgress", 0);
    this._value = t, U.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Qa(t);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(t, n) {
    return U.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0);
  }
  reset() {
    let { done: t } = this;
    this.done = !1, U.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null);
  }
}, Ca = class extends Qa {
  constructor(t) {
    super(0);
    G(this, "_string", null);
    G(this, "_toString");
    this._toString = wa({ output: [t, t] });
  }
  static create(t) {
    return new Ca(t);
  }
  getValue() {
    let t = this._string;
    return t != null ? t : this._string = this._toString(this._value);
  }
  setValue(t) {
    if (U.str(t)) {
      if (t == this._string)
        return !1;
      this._string = t, this._value = 1;
    } else if (super.setValue(t))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(t) {
    t && (this._toString = wa({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, oc = { dependencies: null }, of = class extends b2 {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return Pn(this.source, (n, r) => {
      YF(n) ? t[r] = n.getValue(e) : Bt(n) ? t[r] = yt(n) : e || (t[r] = n);
    }), t;
  }
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && pe(this.payload, (e) => e.reset());
  }
  _makePayload(e) {
    if (e) {
      let t = /* @__PURE__ */ new Set();
      return Pn(e, this._addToPayload, t), Array.from(t);
    }
  }
  _addToPayload(e) {
    oc.dependencies && Bt(e) && oc.dependencies.add(e);
    let t = rf(e);
    t && pe(t, (n) => this.add(n));
  }
}, S2 = class extends of {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new S2(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(XF)), !0);
  }
};
function XF(e) {
  return (nf(e) ? Ca : Qa).create(e);
}
function Rh(e) {
  let t = xn(e);
  return t ? t.constructor : U.arr(e) ? S2 : nf(e) ? Ca : Qa;
}
var qy = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = ez(o, h);
    }, [o]), [a, s] = JF(r, t), u = x2(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new ZF(c, s), d = m.exports.useRef();
    jg(() => (d.current = f, pe(s, (h) => Hi(h, f)), () => {
      d.current && (pe(d.current.deps, (h) => Sa(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), w2(() => () => {
      let h = d.current;
      pe(h.deps, (v) => Sa(v, h));
    });
    let g = t.getComponentProps(a.getValue());
    return m.exports.createElement(e, { ...g, ref: l });
  });
}, ZF = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && oe.write(this.update);
  }
};
function JF(e, t) {
  let n = /* @__PURE__ */ new Set();
  return oc.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new of(e), oc.dependencies = null, [e, n];
}
function ez(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var Qy = Symbol.for("AnimatedComponent"), tz = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new of(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let a = Gy(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = qy(l, o)) : l = l[Qy] || (l[Qy] = qy(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return Pn(e, (l, a) => {
    U.arr(e) && (a = Gy(l)), i[a] = i(l);
  }), { animated: i };
}, Gy = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function Zr(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var Bl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), k2 = (e, t) => U.obj(e) ? t && e[t] : e, C2 = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, nz = (e) => e, Hg = (e, t = nz) => {
  let n = rz;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, rz = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], oz = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function iz(e) {
  let t = {}, n = 0;
  if (Pn(e, (r, o) => {
    oz[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function $2(e) {
  let t = iz(e);
  if (t) {
    let n = { to: t };
    return Pn(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function $a(e) {
  return e = yt(e), U.arr(e) ? e.map($a) : nf(e) ? hn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function lz(e) {
  for (let t in e)
    return !0;
  return !1;
}
function Th(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function az(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function sz(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var E2 = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Ih = { ...E2.default, mass: 1, damping: 1, easing: MF.linear, clamp: !1 }, uz = class {
  constructor() {
    G(this, "tension");
    G(this, "friction");
    G(this, "frequency");
    G(this, "damping");
    G(this, "mass");
    G(this, "velocity", 0);
    G(this, "restVelocity");
    G(this, "precision");
    G(this, "progress");
    G(this, "duration");
    G(this, "easing");
    G(this, "clamp");
    G(this, "bounce");
    G(this, "decay");
    G(this, "round");
    Object.assign(this, Ih);
  }
};
function cz(e, t, n) {
  n && (n = { ...n }, Ky(n, t), t = { ...n, ...t }), Ky(e, t), Object.assign(e, t);
  for (let l in Ih)
    e[l] == null && (e[l] = Ih[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function Ky(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var Yy = [], fz = class {
  constructor() {
    G(this, "changed", !1);
    G(this, "values", Yy);
    G(this, "toValues", null);
    G(this, "fromValues", Yy);
    G(this, "to");
    G(this, "from");
    G(this, "config", new uz());
    G(this, "immediate", !1);
  }
};
function A2(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, a) => {
    var h;
    let s, u, c = Bl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = Bl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Bl(v, t)), s = Zr(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), s = u.time - oe.now();
    }
    function d() {
      s > 0 && !hn.skipAnimation ? (o.delayed = !0, u = oe.setTimeout(g, s), o.pauseQueue.add(f), o.timeouts.add(u)) : g();
    }
    function g() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(f), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
      try {
        i.start({ ...n, callId: e, cancel: c }, l);
      } catch (v) {
        a(v);
      }
    }
  });
}
var Ug = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? mi(e.get()) : t.every((n) => n.noop) ? P2(e.get()) : ln(e.get(), t.every((n) => n.finished)), P2 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), ln = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), mi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function _2(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: a, promise: s } = n;
  return !i && e === a && !t.reset ? s : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = Hg(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && mi(r) || o !== n.asyncId && ln(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new Xy(), x = new Zy();
      return (async () => {
        if (hn.skipAnimation)
          throw Ea(n), x.result = ln(r, !1), f(x), x;
        g(y);
        let b = U.obj(w) ? { ...w } : { ...p, to: w };
        b.parentId = o, Pn(u, (S, E) => {
          U.und(b[E]) && (b[E] = S);
        });
        let A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    }, v;
    if (hn.skipAnimation)
      return Ea(n), ln(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = ln(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof Xy)
        v = w.result;
      else if (w instanceof Zy)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return U.fun(l) && oe.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function Ea(e, t) {
  Fl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Xy = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    G(this, "result");
  }
}, Zy = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    G(this, "result");
  }
}, Oh = (e) => e instanceof Wg, dz = 1, Wg = class extends h2 {
  constructor() {
    super(...arguments);
    G(this, "id", dz++);
    G(this, "_priority", 0);
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  get() {
    let t = xn(this);
    return t && t.getValue();
  }
  to(...t) {
    return hn.to(this, t);
  }
  interpolate(...t) {
    return HF(), hn.to(this, t);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(t) {
    t == 1 && this._attach();
  }
  observerRemoved(t) {
    t == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(t, n = !1) {
    ba(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || Jc.sort(this), ba(this, { type: "priority", parent: this, priority: t });
  }
}, vo = Symbol.for("SpringPhase"), R2 = 1, Nh = 2, Mh = 4, Od = (e) => (e[vo] & R2) > 0, ur = (e) => (e[vo] & Nh) > 0, cl = (e) => (e[vo] & Mh) > 0, Jy = (e, t) => t ? e[vo] |= Nh | R2 : e[vo] &= ~Nh, ex = (e, t) => t ? e[vo] |= Mh : e[vo] &= ~Mh, pz = class extends Wg {
  constructor(t, n) {
    super();
    G(this, "key");
    G(this, "animation", new fz());
    G(this, "queue");
    G(this, "defaultProps", {});
    G(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    G(this, "_pendingCalls", /* @__PURE__ */ new Set());
    G(this, "_lastCallId", 0);
    G(this, "_lastToId", 0);
    G(this, "_memoizedDuration", 0);
    if (!U.und(t) || !U.und(n)) {
      let r = U.obj(t) ? { ...t } : { ...n, from: t };
      U.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(ur(this) || this._state.asyncTo) || cl(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    let t = xn(this);
    return t instanceof Qa ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Od(this);
  }
  get isAnimating() {
    return ur(this);
  }
  get isPaused() {
    return cl(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, a = rf(o.to);
    !a && Bt(o.to) && (l = Pt(yt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == Ca ? 1 : a ? a[f].lastPosition : l[f], g = o.immediate, h = d;
      if (!g) {
        if (h = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let v = c.elapsedTime += t, w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = U.arr(i.velocity) ? i.velocity[f] : i.velocity, y, x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3));
        if (U.und(i.duration))
          if (i.decay) {
            let b = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - b) * v);
            h = w + p / (1 - b) * (1 - A), g = Math.abs(c.lastPosition - h) <= x, y = p * A;
          } else {
            y = c.lastVelocity == null ? p : c.lastVelocity;
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), E = w == d ? c.v0 > 0 : w < d, $, P = !1, T = 1, R = Math.ceil(t / T);
            for (let N = 0; N < R && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++N) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              let D = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * y, F = (D + z) / i.mass;
              y = y + F * T, h = h + y * T;
            }
          }
        else {
          let b = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, v = c.elapsedTime += t)), b = (i.progress || 0) + v / this._memoizedDuration, b = b > 1 ? 1 : b < 0 ? 0 : b, c.durationProgress = b), h = w + i.easing(b) * (d - w), y = (h - c.lastPosition) / t, g = b == 1;
        }
        c.lastVelocity = y, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      a && !a[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    let s = xn(this), u = s.getValue();
    if (n) {
      let c = yt(o.to);
      (u !== c || r) && !i.decay ? (s.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(t) {
    return oe.batchedUpdates(() => {
      this._stop(), this._focus(t), this._set(t);
    }), this;
  }
  pause() {
    this._update({ pause: !0 });
  }
  resume() {
    this._update({ pause: !1 });
  }
  finish() {
    if (ur(this)) {
      let { to: t, config: n } = this.animation;
      oe.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(t, !1), this._stop();
      });
    }
    return this;
  }
  update(t) {
    return (this.queue || (this.queue = [])).push(t), this;
  }
  start(t, n) {
    let r;
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => Ug(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), Ea(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || Th(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return Od(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), U.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, Hg(t, (a, s) => /^on/.test(s) ? k2(a, r) : a)), nx(this, t, "onProps"), dl(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return A2(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      cl(this) || (ex(this, !0), xl(l.pauseQueue), dl(this, "onPause", ln(this, fl(this, this.animation.to)), this));
    }, resume: () => {
      cl(this) && (ex(this, !1), ur(this) && this._resume(), xl(l.resumeQueue), dl(this, "onResume", ln(this, fl(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((a) => {
      if (t.loop && a.finished && !(n && a.noop)) {
        let s = T2(t);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(mi(this));
    let o = !U.und(t.to), i = !U.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(mi(this));
    let { key: l, defaultProps: a, animation: s } = this, { to: u, from: c } = s, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Ln(d, c);
    g && (s.from = d), d = yt(d);
    let h = !Ln(f, u);
    h && this._focus(f);
    let v = Th(n.to), { config: w } = s, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && cz(w, Zr(n.config, l), n.config !== a.config ? Zr(a.config, l) : void 0);
    let x = xn(this);
    if (!x || U.und(f))
      return r(ln(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && Bl(n.reset, l), A = b ? d : this.get(), S = $a(f), E = U.num(S) || U.arr(S) || nf(S), $ = !v && (!E || Bl(a.immediate || n.immediate, l));
    if (h) {
      let N = Rh(f);
      if (N !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${N.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, T = Bt(f), R = !1;
    if (!T) {
      let N = b || !Od(this) && g;
      (h || N) && (R = Ln($a(A), S), T = !R), (!Ln(s.immediate, $) && !$ || !Ln(w.decay, p) || !Ln(w.velocity, y)) && (T = !0);
    }
    if (R && ur(this) && (s.changed && !b ? T = !0 : T || this._stop(u)), !v && ((T || Bt(u)) && (s.values = x.getPayload(), s.toValues = Bt(f) ? null : P == Ca ? [1] : Pt(S)), s.immediate != $ && (s.immediate = $, !$ && !b && this._set(u)), T)) {
      let { onRest: N } = s;
      pe(mz, (z) => nx(this, n, z));
      let D = ln(this, fl(this, u));
      xl(this._pendingCalls, D), this._pendingCalls.add(r), s.changed && oe.batchedUpdates(() => {
        var z;
        s.changed = !b, N == null || N(D, this), b ? Zr(a.onRest, D) : (z = s.onStart) == null || z.call(s, D, this);
      });
    }
    b && this._set(A), v ? r(_2(n.to, n, this._state, this)) : T ? this._start() : ur(this) && !h ? this._pendingCalls.add(r) : r(P2(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (Hy(this) && this._detach(), n.to = t, Hy(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (Hi(n, this), Oh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && Sa(t, this);
  }
  _set(t, n = !0) {
    let r = yt(t);
    if (!U.und(r)) {
      let o = xn(this);
      if (!o || !Ln(r, o.getValue())) {
        let i = Rh(r);
        !o || o.constructor != i ? Vg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, dl(this, "onStart", ln(this, fl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Zr(this.animation.onChange, t, this)), Zr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    xn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), ur(this) || (Jy(this, !0), cl(this) || this._resume());
  }
  _resume() {
    hn.skipAnimation ? this.finish() : Jc.start(this);
  }
  _stop(t, n) {
    if (ur(this)) {
      Jy(this, !1);
      let r = this.animation;
      pe(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ba(this, { type: "idle", parent: this });
      let o = n ? mi(this.get()) : ln(this.get(), fl(this, t != null ? t : r.to));
      xl(this._pendingCalls, o), r.changed && (r.changed = !1, dl(this, "onRest", o, this));
    }
  }
};
function fl(e, t) {
  let n = $a(t), r = $a(e.get());
  return Ln(r, n);
}
function T2(e, t = e.loop, n = e.to) {
  let r = Zr(t);
  if (r) {
    let o = r !== !0 && $2(r), i = (o || e).reverse, l = !o || o.reset;
    return Aa({ ...e, loop: t, default: !1, pause: void 0, to: !i || Th(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function Aa(e) {
  let { to: t, from: n } = e = $2(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && tx(t, r), U.obj(n) && tx(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function hz(e) {
  let t = Aa(e);
  return U.und(t.default) && (t.default = Hg(t)), t;
}
function tx(e, t) {
  Pn(e, (n, r) => n != null && t.add(r));
}
var mz = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function nx(e, t, n) {
  e.animation[n] = t[n] !== C2(t, n) ? k2(t[n], e.key) : void 0;
}
function dl(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var gz = ["onStart", "onChange", "onRest"], vz = 1, yz = class {
  constructor(e, t) {
    G(this, "id", vz++);
    G(this, "springs", {});
    G(this, "queue", []);
    G(this, "ref");
    G(this, "_flush");
    G(this, "_initialProps");
    G(this, "_lastAsyncId", 0);
    G(this, "_active", /* @__PURE__ */ new Set());
    G(this, "_changed", /* @__PURE__ */ new Set());
    G(this, "_started", !1);
    G(this, "_item");
    G(this, "_state", { paused: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    G(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
    this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({ default: !0, ...e });
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle && !e.isDelayed && !e.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e;
  }
  get() {
    let e = {};
    return this.each((t, n) => e[n] = t.get()), e;
  }
  set(e) {
    for (let t in e) {
      let n = e[t];
      U.und(n) || this.springs[t].set(n);
    }
  }
  update(e) {
    return e && this.queue.push(Aa(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(Aa) : this.queue = [], this._flush ? this._flush(this, t) : (D2(this, t), Dh(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      pe(Pt(t), (r) => n[r].stop(!!e));
    } else
      Ea(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (U.und(e))
      this.start({ pause: !0 });
    else {
      let t = this.springs;
      pe(Pt(e), (n) => t[n].pause());
    }
    return this;
  }
  resume(e) {
    if (U.und(e))
      this.start({ pause: !1 });
    else {
      let t = this.springs;
      pe(Pt(e), (n) => t[n].resume());
    }
    return this;
  }
  each(e) {
    Pn(this.springs, e);
  }
  _onFrame() {
    let { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Fl(e, ([a, s]) => {
      s.value = this.get(), a(s, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Fl(t, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }), i && (this._started = !1, Fl(n, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }));
  }
  eventObserved(e) {
    if (e.type == "change")
      this._changed.add(e.parent), e.idle || this._active.add(e.parent);
    else if (e.type == "idle")
      this._active.delete(e.parent);
    else
      return;
    oe.onFrame(this._onFrame);
  }
};
function Dh(e, t) {
  return Promise.all(t.map((n) => I2(e, n))).then((n) => Ug(e, n));
}
async function I2(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: a, onResolve: s } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : pe(gz, (v) => {
    let w = t[v];
    if (U.fun(w)) {
      let p = e._events[v];
      t[v] = ({ finished: y, cancelled: x }) => {
        let b = p.get(w);
        b ? (y || (b.finished = !1), x && (b.cancelled = !0)) : p.set(w, { value: null, finished: y || !1, cancelled: x || !1 });
      }, u && (u[v] = t[v]);
    }
  });
  let f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, xl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || C2(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(A2(++e._lastAsyncId, { props: t, state: f, actions: { pause: Ph, resume: Ph, start(v, w) {
    g ? (Ea(f, e._lastAsyncId), w(mi(e))) : (v.onRest = a, w(_2(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = Ug(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = T2(t, l, o);
    if (v)
      return D2(e, [v]), I2(e, v, !0);
  }
  return s && oe.batchedUpdates(() => s(h, e, e.item)), h;
}
function rx(e, t) {
  let n = { ...e.springs };
  return t && pe(Pt(t), (r) => {
    U.und(r.keys) && (r = Aa(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), M2(n, r, (o) => N2(o));
  }), O2(e, n), n;
}
function O2(e, t) {
  Pn(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Hi(n, e));
  });
}
function N2(e, t) {
  let n = new pz();
  return n.key = e, t && Hi(n, t), n;
}
function M2(e, t, n) {
  t.keys && pe(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function D2(e, t) {
  pe(t, (n) => {
    M2(e.springs, n, (r) => N2(r, e));
  });
}
var lf = ({ children: e, ...t }) => {
  let n = m.exports.useContext(ic), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = QF(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = ic;
  return m.exports.createElement(i, { value: t }, e);
}, ic = xz(lf, {});
lf.Provider = ic.Provider;
lf.Consumer = ic.Consumer;
function xz(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var wz = () => {
  let e = [], t = function(r) {
    WF();
    let o = [];
    return pe(e, (i, l) => {
      if (U.und(r))
        o.push(i.start());
      else {
        let a = n(r, i, l);
        a && o.push(i.start(a));
      }
    }), o;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    let o = e.indexOf(r);
    ~o && e.splice(o, 1);
  }, t.pause = function() {
    return pe(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return pe(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    pe(e, (o, i) => {
      let l = U.fun(r) ? r(i, o) : r;
      l && o.set(l);
    });
  }, t.start = function(r) {
    let o = [];
    return pe(e, (i, l) => {
      if (U.und(r))
        o.push(i.start());
      else {
        let a = this._getProps(r, i, l);
        a && o.push(i.start(a));
      }
    }), o;
  }, t.stop = function() {
    return pe(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return pe(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  let n = function(r, o, i) {
    return U.fun(r) ? r(i, o) : r;
  };
  return t._getProps = n, t;
};
function bz(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? wz() : void 0, []), i = m.exports.useRef(0), l = x2(), a = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = rx(p, y);
    return i.current > 0 && !a.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? Dh(p, y) : new Promise((b) => {
      O2(p, x), a.queue.push(() => {
        b(Dh(p, y));
      }), l();
    });
  } }), []), s = m.exports.useRef([...a.ctrls]), u = [], c = Wy(e) || 0;
  m.exports.useMemo(() => {
    pe(s.current.slice(e, c), (p) => {
      az(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = s.current[x] || (s.current[x] = new yz(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = hz(A));
    }
  }
  let d = s.current.map((p, y) => rx(p, u[y])), g = m.exports.useContext(lf), h = Wy(g), v = g !== h && lz(g);
  jg(() => {
    i.current++, a.ctrls = s.current;
    let { queue: p } = a;
    p.length && (a.queue = [], pe(p, (y) => y())), pe(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (sz(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), w2(() => () => {
    pe(a.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function Sz(e, t) {
  let n = U.fun(e), [[r], o] = bz(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var kz = class extends Wg {
  constructor(t, n) {
    super();
    G(this, "key");
    G(this, "idle", !0);
    G(this, "calc");
    G(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = wa(...n);
    let r = this._get(), o = Rh(r);
    Vg(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Ln(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ox(this._active) && Nd(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(yt) : Pt(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !ox(this._active) && (this.idle = !1, pe(rf(this), (t) => {
      t.done = !1;
    }), hn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), Nd(this)) : Jc.start(this));
  }
  _attach() {
    let t = 1;
    pe(Pt(this.source), (n) => {
      Bt(n) && Hi(n, this), Oh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    pe(Pt(this.source), (t) => {
      Bt(t) && Sa(t, this);
    }), this._active.clear(), Nd(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (Oh(r) ? r.priority : 0) + 1), 0));
  }
};
function Cz(e) {
  return e.idle !== !1;
}
function ox(e) {
  return !e.size || Array.from(e).every(Cz);
}
function Nd(e) {
  e.idle || (e.idle = !0, pe(rf(e), (t) => {
    t.done = !0;
  }), ba(e, { type: "idle", parent: e }));
}
hn.assign({ createStringInterpolator: v2, to: (e, t) => new kz(e, t) });
var L2 = /^--/;
function $z(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !L2.test(e) && !(jl.hasOwnProperty(e) && jl[e]) ? t + "px" : ("" + t).trim();
}
var ix = {};
function Ez(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: a, ...s } = t, u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : ix[f] || (ix[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = $z(f, r[f]);
      L2.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), a !== void 0 && e.setAttribute("viewBox", a);
}
var jl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Az = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Pz = ["Webkit", "Ms", "Moz", "O"];
jl = Object.keys(jl).reduce((e, t) => (Pz.forEach((n) => e[Az(n, t)] = e[t]), e), jl);
var _z = /^(matrix|translate|scale|rotate|skew)/, Rz = /^(translate)/, Tz = /^(rotate|skew)/, Md = (e, t) => U.num(e) && e !== 0 ? e + t : e, iu = (e, t) => U.arr(e) ? e.every((n) => iu(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, Iz = class extends of {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((a) => Md(a, "px")).join(",")})`, iu(l, 0)])), Pn(r, (l, a) => {
      if (a === "transform")
        o.push([l || ""]), i.push((s) => [s, s === ""]);
      else if (_z.test(a)) {
        if (delete r[a], U.und(l))
          return;
        let s = Rz.test(a) ? "px" : Tz.test(a) ? "deg" : "";
        o.push(Pt(l)), i.push(a === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Md(d, s)})`, iu(d, 0)] : (u) => [`${a}(${u.map((c) => Md(c, s)).join(",")})`, iu(u, a.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new Oz(o, i)), super(r);
  }
}, Oz = class extends h2 {
  constructor(t, n) {
    super();
    G(this, "_value", null);
    this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return pe(this.inputs, (r, o) => {
      let i = yt(r[0]), [l, a] = this.transforms[o](U.arr(i) ? i : r.map(yt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && pe(this.inputs, (n) => pe(n, (r) => Bt(r) && Hi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && pe(this.inputs, (n) => pe(n, (r) => Bt(r) && Sa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ba(this, t);
  }
}, Nz = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
hn.assign({ batchedUpdates: Gt.exports.unstable_batchedUpdates, createStringInterpolator: v2, colors: SF });
var Mz = tz(Nz, { applyAnimatedValues: Ez, createAnimatedStyle: (e) => new Iz(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), lx = Mz.animated;
const Dz = ({
  message: e
}) => /* @__PURE__ */ he("div", {
  className: Ei("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1",
    children: /* @__PURE__ */ B(t2, {
      content: e.text
    })
  })]
}), Lz = () => {
  const {
    toggleChatOpen: e,
    chatOpen: t
  } = ya(), {
    conventions: n
  } = Pi(), [r, o] = m.exports.useState(null), i = Sz({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: E2.default
  }), l = Object.keys(n), a = r || l[0], s = a ? n[a] : [];
  return /* @__PURE__ */ he(lx.div, {
    style: {
      opacity: i.opacity
    },
    className: "aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg",
    children: [/* @__PURE__ */ he("div", {
      onClick: () => {
        e();
      },
      className: Ei("flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400", {
        "border-b-0": !t,
        "border-b": t
      }),
      children: [/* @__PURE__ */ B("h2", {
        className: "rounded-md bg-transparent px-3 py-1 text-sm font-bold uppercase",
        children: "History"
      }), t && /* @__PURE__ */ B("kbd", {
        className: "flex h-5 items-center justify-center rounded bg-mayumi-gray-300 px-2 font-sans text-xs uppercase text-mayumi-gray-1100",
        children: "esc"
      })]
    }), /* @__PURE__ */ he(lx.div, {
      style: {
        height: i.h,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ B("div", {
        className: "grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ B("div", {
          className: Ei("flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200", {
            "bg-mayumi-blue-400 text-mayumi-gray-1200": u === a,
            "bg-mayumi-gray-200 text-mayumi-gray-1100": u !== a
          }),
          onClick: () => {
            o(u);
          },
          children: /* @__PURE__ */ B("a", {
            className: "cursor-pointer uppercase",
            children: u
          })
        }, u))
      }), /* @__PURE__ */ B("div", {
        className: "aiflow-messages flex-1 overflow-auto bg-mayumi-gray-300",
        children: s.map((u, c) => /* @__PURE__ */ B(Dz, {
          message: u
        }, c))
      })]
    })]
  });
}, Fz = () => /* @__PURE__ */ he("div", {
  className: "dark",
  children: [/* @__PURE__ */ B(lF, {}), /* @__PURE__ */ B(Lz, {})]
});
var F2, ax = Gt.exports;
F2 = ax.createRoot, ax.hydrateRoot;
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), ac("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", ot.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), F2(t).render(/* @__PURE__ */ B(Fz, {}));
})();
