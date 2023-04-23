var U2 = Object.defineProperty;
var W2 = (e, t, n) => t in e ? U2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var G = (e, t, n) => (W2(e, typeof t != "symbol" ? t + "" : t, n), n);
function q2(e, t) {
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
var Q2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Q2, function(n) {
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
          constructor(P, R = void 0) {
            super(R), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const u = ($) => $ && typeof $ == "object" && typeof $.then == "function", c = ($, P) => (...R) => {
          l.runtime.lastError ? $.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || R.length <= 1 && P.singleCallbackArg !== !1 ? $.resolve(R[0]) : $.resolve(R);
        }, f = ($) => $ == 1 ? "argument" : "arguments", d = ($, P) => function(T, ...N) {
          if (N.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${N.length}`);
          if (N.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${N.length}`);
          return new Promise((D, z) => {
            if (P.fallbackToNoCallback)
              try {
                T[$](...N, c({
                  resolve: D,
                  reject: z
                }, P));
              } catch (F) {
                console.warn(`${$} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, F), T[$](...N), P.fallbackToNoCallback = !1, P.noCallback = !0, D();
              }
            else
              P.noCallback ? (T[$](...N), D()) : T[$](...N, c({
                resolve: D,
                reject: z
              }, P));
          });
        }, g = ($, P, R) => new Proxy(P, {
          apply(T, N, D) {
            return R.call(N, $, ...D);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = ($, P = {}, R = {}) => {
          let T = /* @__PURE__ */ Object.create(null), N = {
            has(z, F) {
              return F in $ || F in T;
            },
            get(z, F, _) {
              if (F in T)
                return T[F];
              if (!(F in $))
                return;
              let H = $[F];
              if (typeof H == "function")
                if (typeof P[F] == "function")
                  H = g($, $[F], P[F]);
                else if (h(R, F)) {
                  let M = d(F, R[F]);
                  H = g($, $[F], M);
                } else
                  H = H.bind($);
              else if (typeof H == "object" && H !== null && (h(P, F) || h(R, F)))
                H = v(H, P[F], R[F]);
              else if (h(R, "*"))
                H = v(H, P[F], R["*"]);
              else
                return Object.defineProperty(T, F, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return $[F];
                  },
                  set(M) {
                    $[F] = M;
                  }
                }), H;
              return T[F] = H, H;
            },
            set(z, F, _, H) {
              return F in T ? T[F] = _ : $[F] = _, !0;
            },
            defineProperty(z, F, _) {
              return Reflect.defineProperty(T, F, _);
            },
            deleteProperty(z, F) {
              return Reflect.deleteProperty(T, F);
            }
          }, D = Object.create($);
          return new Proxy(D, N);
        }, w = ($) => ({
          addListener(P, R, ...T) {
            P.addListener($.get(R), ...T);
          },
          hasListener(P, R) {
            return P.hasListener($.get(R));
          },
          removeListener(P, R) {
            P.removeListener($.get(R));
          }
        }), p = new s(($) => typeof $ != "function" ? $ : function(R) {
          const T = v(
            R,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          $(T);
        });
        let y = !1;
        const x = new s(($) => typeof $ != "function" ? $ : function(R, T, N) {
          let D = !1, z, F = new Promise((I) => {
            z = function(O) {
              y || (console.warn(o, new Error().stack), y = !0), D = !0, I(O);
            };
          }), _;
          try {
            _ = $(R, T, z);
          } catch (I) {
            _ = Promise.reject(I);
          }
          const H = _ !== !0 && u(_);
          if (_ !== !0 && !H && !D)
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
          return M(H ? _ : F), !0;
        }), b = ({
          reject: $,
          resolve: P
        }, R) => {
          l.runtime.lastError ? l.runtime.lastError.message === r ? P() : $(new Error(l.runtime.lastError.message)) : R && R.__mozWebExtensionPolyfillReject__ ? $(new Error(R.message)) : P(R);
        }, A = ($, P, R, ...T) => {
          if (T.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${$}(), got ${T.length}`);
          if (T.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${$}(), got ${T.length}`);
          return new Promise((N, D) => {
            const z = b.bind(null, {
              resolve: N,
              reject: D
            });
            T.push(z), R.sendMessage(...T);
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
})(dx);
const ot = dx.exports;
let px = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class su extends Error {
  constructor(t) {
    super(su._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, su);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const G2 = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], Ld = Symbol(".toJSON called"), K2 = (e) => {
  e[Ld] = !0;
  const t = e.toJSON();
  return delete e[Ld], t;
}, Bh = ({
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
  if (typeof e.toJSON == "function" && e[Ld] !== !0)
    return K2(e);
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
        i++, l[a] = Bh({
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
  for (const { property: a, enumerable: s } of G2)
    typeof e[a] == "string" && Object.defineProperty(l, a, {
      value: e[a],
      enumerable: r ? !0 : s,
      configurable: !0,
      writable: !0
    });
  return l;
}, Y2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Bh({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, X2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return Bh({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new su(e);
};
var Z2 = {
  serializeError: Y2,
  deserializeError: X2
}, ac = { exports: {} };
const J2 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), hx = (e = 7, t = !1) => Array.from({ length: e }, J2(t ? 16 : 36)).join("");
ac.exports = hx;
ac.exports.default = hx;
var e$ = Object.defineProperty, t$ = Object.defineProperties, n$ = Object.getOwnPropertyDescriptors, Kg = Object.getOwnPropertySymbols, r$ = Object.prototype.hasOwnProperty, o$ = Object.prototype.propertyIsEnumerable, Yg = (e, t, n) => t in e ? e$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mx = (e, t) => {
  for (var n in t || (t = {}))
    r$.call(t, n) && Yg(e, n, t[n]);
  if (Kg)
    for (var n of Kg(t))
      o$.call(t, n) && Yg(e, n, t[n]);
  return e;
}, gx = (e, t) => t$(e, n$(t)), i$ = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, vx = (e) => {
  const [, t, n] = e.match(i$) || [];
  return {
    context: t,
    tabId: +n
  };
}, ff = (e) => ot[e], Me = ff("devtools") ? "devtools" : ff("tabs") ? "background" : ff("extension") ? "content-script" : typeof document < "u" ? "window" : null, Xg = ac.exports(), Fd = /* @__PURE__ */ new Map(), yx = /* @__PURE__ */ new Map(), zd = /* @__PURE__ */ new Set(), Bd = /* @__PURE__ */ new Map(), Ur = null, uu, xx;
l$();
function l$() {
  if (Me === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Me === "window" || Me === "content-script") && window.addEventListener("message", s$), Me === "content-script" && top === window && (Ur = ot.runtime.connect(), Ur.onMessage.addListener((e) => {
    ti(e);
  })), Me === "devtools") {
    const { tabId: e } = ot.devtools.inspectedWindow, t = `devtools@${e}`;
    Ur = ot.runtime.connect(void 0, { name: t }), Ur.onMessage.addListener((n) => {
      ti(n);
    }), Ur.onDisconnect.addListener(() => {
      Ur = null;
    });
  }
  Me === "background" && ot.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = vx(t);
    !n || (Bd.set(t, e), zd.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), zd.delete(r));
    }), e.onDisconnect.addListener(() => {
      Bd.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, ti(r));
    }));
  });
}
function ti(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Xg) && (e.hops.push(Xg), !(Me === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !xx))) {
    if (!n)
      return a$(e);
    if (n.context) {
      if (Me === "window")
        return jd(window, e);
      if (Me === "content-script" && n.context === "window")
        return e.destination = null, jd(window, e);
      if (Me === "devtools" || Me === "content-script")
        return n.context === "background" && (e.destination = null), Ur.postMessage(e);
      if (Me === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, a = Bd.get(l);
        a ? a.postMessage(e) : zd.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function a$(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Fd.get(t);
    if (l) {
      const { err: a, data: s } = e;
      if (a) {
        const u = a, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(s);
      Fd.delete(t);
    }
  }, i = async () => {
    let l, a, s = !1;
    try {
      const u = yx.get(n);
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
      if (a && (e.err = Z2.serializeError(a)), ti(gx(mx({}, e), {
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
async function s$({ data: e, ports: t }) {
  if (!(Me === "content-script" && !xx)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === uu && e.context !== Me)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === uu && e.context !== Me) {
      const { payload: n } = e;
      Me === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), ti(n);
    }
  }
}
function jd(e, t) {
  u$();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, jd(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: uu,
      context: Me,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: uu,
    context: Me
  }, "*", [n.port2]);
}
function u$() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function sc(e, t) {
  yx.set(e, t);
}
async function Sl(e, t, n = "background") {
  const r = typeof n == "string" ? vx(n) : n, o = "Bridge#sendMessage ->";
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
      transactionId: ac.exports(),
      origin: { context: Me, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Fd.set(a.transactionId, { resolve: i, reject: l }), ti(a);
  });
}
var Bo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = px(), this.isClosed = !1, Bo.initDone || (sc("__crx_bridge_stream_transfer__", (t) => {
      const { streamId: n, streamTransfer: r, action: o } = t.data, i = Bo.openStreams.get(n);
      i && !i.isClosed && (o === "transfer" && i.emitter.emit("message", r), o === "close" && (Bo.openStreams.delete(n), i.handleStreamClose()));
    }), Bo.initDone = !0), Bo.openStreams.set(e.streamId, this);
  }
  get info() {
    return this.internalInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    Sl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), Sl("__crx_bridge_stream_transfer__", {
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
}, jh = Bo;
jh.initDone = !1;
jh.openStreams = /* @__PURE__ */ new Map();
var c$ = /* @__PURE__ */ new Map(), f$ = px();
sc("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const a = () => {
    const s = c$.get(o);
    typeof s == "function" ? (s(new jh(gx(mx({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = f$.on("did-change-stream-callbacks", a));
  };
  a();
}));
var m = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra = Symbol.for("react.element"), d$ = Symbol.for("react.portal"), p$ = Symbol.for("react.fragment"), h$ = Symbol.for("react.strict_mode"), m$ = Symbol.for("react.profiler"), g$ = Symbol.for("react.provider"), v$ = Symbol.for("react.context"), y$ = Symbol.for("react.forward_ref"), x$ = Symbol.for("react.suspense"), w$ = Symbol.for("react.memo"), b$ = Symbol.for("react.lazy"), Zg = Symbol.iterator;
function S$(e) {
  return e === null || typeof e != "object" ? null : (e = Zg && e[Zg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var wx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bx = Object.assign, Sx = {};
function Oi(e, t, n) {
  this.props = e, this.context = t, this.refs = Sx, this.updater = n || wx;
}
Oi.prototype.isReactComponent = {};
Oi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Oi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kx() {
}
kx.prototype = Oi.prototype;
function Hh(e, t, n) {
  this.props = e, this.context = t, this.refs = Sx, this.updater = n || wx;
}
var Vh = Hh.prototype = new kx();
Vh.constructor = Hh;
bx(Vh, Oi.prototype);
Vh.isPureReactComponent = !0;
var Jg = Array.isArray, Cx = Object.prototype.hasOwnProperty, Uh = { current: null }, $x = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ex(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Cx.call(t, r) && !$x.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ra, type: e, key: i, ref: l, props: o, _owner: Uh.current };
}
function k$(e, t) {
  return { $$typeof: Ra, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ra;
}
function C$(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var e0 = /\/+/g;
function df(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? C$("" + e.key) : t.toString(36);
}
function Ls(e, t, n, r, o) {
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
          case Ra:
          case d$:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + df(l, 0) : r, Jg(o) ? (n = "", e != null && (n = e.replace(e0, "$&/") + "/"), Ls(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Wh(o) && (o = k$(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(e0, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Jg(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + df(i, a);
      l += Ls(i, t, n, s, o);
    }
  else if (s = S$(e), typeof s == "function")
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, s = r + df(i, a++), l += Ls(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Xa(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ls(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function $$(e) {
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
var ht = { current: null }, Fs = { transition: null }, E$ = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Fs, ReactCurrentOwner: Uh };
fe.Children = { map: Xa, forEach: function(e, t, n) {
  Xa(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xa(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xa(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Wh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Oi;
fe.Fragment = p$;
fe.Profiler = m$;
fe.PureComponent = Hh;
fe.StrictMode = h$;
fe.Suspense = x$;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E$;
fe.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bx({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Uh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (s in t)
      Cx.call(t, s) && !$x.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
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
  return { $$typeof: Ra, type: e.type, key: o, ref: i, props: r, _owner: l };
};
fe.createContext = function(e) {
  return e = { $$typeof: v$, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: g$, _context: e }, e.Consumer = e;
};
fe.createElement = Ex;
fe.createFactory = function(e) {
  var t = Ex.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: y$, render: e };
};
fe.isValidElement = Wh;
fe.lazy = function(e) {
  return { $$typeof: b$, _payload: { _status: -1, _result: e }, _init: $$ };
};
fe.memo = function(e, t) {
  return { $$typeof: w$, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = Fs.transition;
  Fs.transition = {};
  try {
    e();
  } finally {
    Fs.transition = t;
  }
};
fe.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
fe.useCallback = function(e, t) {
  return ht.current.useCallback(e, t);
};
fe.useContext = function(e) {
  return ht.current.useContext(e);
};
fe.useDebugValue = function() {
};
fe.useDeferredValue = function(e) {
  return ht.current.useDeferredValue(e);
};
fe.useEffect = function(e, t) {
  return ht.current.useEffect(e, t);
};
fe.useId = function() {
  return ht.current.useId();
};
fe.useImperativeHandle = function(e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function(e, t) {
  return ht.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function(e, t) {
  return ht.current.useLayoutEffect(e, t);
};
fe.useMemo = function(e, t) {
  return ht.current.useMemo(e, t);
};
fe.useReducer = function(e, t, n) {
  return ht.current.useReducer(e, t, n);
};
fe.useRef = function(e) {
  return ht.current.useRef(e);
};
fe.useState = function(e) {
  return ht.current.useState(e);
};
fe.useSyncExternalStore = function(e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function() {
  return ht.current.useTransition();
};
fe.version = "18.2.0";
(function(e) {
  e.exports = fe;
})(m);
const je = /* @__PURE__ */ zh(m.exports), Ax = /* @__PURE__ */ q2({
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
function A$(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Px(...e) {
  return (t) => e.forEach(
    (n) => A$(n, t)
  );
}
function Ce(...e) {
  return m.exports.useCallback(Px(...e), e);
}
function Ni(e, t = []) {
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
    P$(o, ...t)
  ];
}
function P$(...e) {
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
var Gt = { exports: {} }, It = {}, _x = { exports: {} }, Rx = {};
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
        I !== null && H(b, I.startTime - M);
      }
  }
  function A(M, I) {
    h = !1, v && (v = !1, p($), $ = -1), g = !0;
    var O = d;
    try {
      for (x(I), f = n(s); f !== null && (!(f.expirationTime > I) || M && !T()); ) {
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
        ne !== null && H(b, ne.startTime - I), J = !1;
      }
      return J;
    } finally {
      f = null, d = O, g = !1;
    }
  }
  var S = !1, E = null, $ = -1, P = 5, R = -1;
  function T() {
    return !(e.unstable_now() - R < P);
  }
  function N() {
    if (E !== null) {
      var M = e.unstable_now();
      R = M;
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
  function H(M, I) {
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
    return C = O + C, M = { id: c++, callback: I, priorityLevel: M, startTime: O, expirationTime: C, sortIndex: -1 }, O > k ? (M.sortIndex = O, t(u, M), n(s) === null && M === n(u) && (v ? (p($), $ = -1) : v = !0, H(b, O - k))) : (M.sortIndex = C, t(s, M), h || g || (h = !0, _(A))), M;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(M) {
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
})(Rx);
(function(e) {
  e.exports = Rx;
})(_x);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tx = m.exports, Tt = _x.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ix = /* @__PURE__ */ new Set(), Ul = {};
function wo(e, t) {
  vi(e, t), vi(e + "Capture", t);
}
function vi(e, t) {
  for (Ul[e] = t, e = 0; e < t.length; e++)
    Ix.add(t[e]);
}
var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hd = Object.prototype.hasOwnProperty, _$ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, t0 = {}, n0 = {};
function R$(e) {
  return Hd.call(n0, e) ? !0 : Hd.call(t0, e) ? !1 : _$.test(e) ? n0[e] = !0 : (t0[e] = !0, !1);
}
function T$(e, t, n, r) {
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
function I$(e, t, n, r) {
  if (t === null || typeof t > "u" || T$(e, t, n, r))
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
var qh = /[\-:]([a-z])/g;
function Qh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qh,
    Qh
  );
  Je[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qh, Qh);
  Je[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qh, Qh);
  Je[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gh(e, t, n, r) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I$(t, n, o, r) && (n = null), r || o === null ? R$(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Za = Symbol.for("react.element"), Ho = Symbol.for("react.portal"), Vo = Symbol.for("react.fragment"), Kh = Symbol.for("react.strict_mode"), Vd = Symbol.for("react.profiler"), Ox = Symbol.for("react.provider"), Nx = Symbol.for("react.context"), Yh = Symbol.for("react.forward_ref"), Ud = Symbol.for("react.suspense"), Wd = Symbol.for("react.suspense_list"), Xh = Symbol.for("react.memo"), fr = Symbol.for("react.lazy"), Mx = Symbol.for("react.offscreen"), r0 = Symbol.iterator;
function Ki(e) {
  return e === null || typeof e != "object" ? null : (e = r0 && e[r0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oe = Object.assign, pf;
function ml(e) {
  if (pf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pf = t && t[1] || "";
    }
  return `
` + pf + e;
}
var hf = !1;
function mf(e, t) {
  if (!e || hf)
    return "";
  hf = !0;
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
    hf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ml(e) : "";
}
function O$(e) {
  switch (e.tag) {
    case 5:
      return ml(e.type);
    case 16:
      return ml("Lazy");
    case 13:
      return ml("Suspense");
    case 19:
      return ml("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = mf(e.type, !1), e;
    case 11:
      return e = mf(e.type.render, !1), e;
    case 1:
      return e = mf(e.type, !0), e;
    default:
      return "";
  }
}
function qd(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Vo:
      return "Fragment";
    case Ho:
      return "Portal";
    case Vd:
      return "Profiler";
    case Kh:
      return "StrictMode";
    case Ud:
      return "Suspense";
    case Wd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nx:
        return (e.displayName || "Context") + ".Consumer";
      case Ox:
        return (e._context.displayName || "Context") + ".Provider";
      case Yh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Xh:
        return t = e.displayName || null, t !== null ? t : qd(e.type) || "Memo";
      case fr:
        t = e._payload, e = e._init;
        try {
          return qd(e(t));
        } catch {
        }
    }
  return null;
}
function N$(e) {
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
      return qd(t);
    case 8:
      return t === Kh ? "StrictMode" : "Mode";
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
function Ir(e) {
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
function Dx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function M$(e) {
  var t = Dx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ja(e) {
  e._valueTracker || (e._valueTracker = M$(e));
}
function Lx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Dx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function cu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qd(e, t) {
  var n = t.checked;
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function o0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ir(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Fx(e, t) {
  t = t.checked, t != null && Gh(e, "checked", t, !1);
}
function Gd(e, t) {
  Fx(e, t);
  var n = Ir(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Kd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kd(e, t.type, Ir(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function i0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Kd(e, t, n) {
  (t !== "number" || cu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gl = Array.isArray;
function ni(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ir(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function l0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(j(92));
      if (gl(n)) {
        if (1 < n.length)
          throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ir(n) };
}
function zx(e, t) {
  var n = Ir(t.value), r = Ir(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function a0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Bx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var es, jx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (es = es || document.createElement("div"), es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = es.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Wl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kl = {
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
}, D$ = ["Webkit", "ms", "Moz", "O"];
Object.keys(kl).forEach(function(e) {
  D$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kl[t] = kl[e];
  });
});
function Hx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kl.hasOwnProperty(e) && kl[e] ? ("" + t).trim() : t + "px";
}
function Vx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Hx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var L$ = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zd(e, t) {
  if (t) {
    if (L$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Jd(e, t) {
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
var ep = null;
function Zh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var tp = null, ri = null, oi = null;
function s0(e) {
  if (e = Oa(e)) {
    if (typeof tp != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = pc(t), tp(e.stateNode, e.type, t));
  }
}
function Ux(e) {
  ri ? oi ? oi.push(e) : oi = [e] : ri = e;
}
function Wx() {
  if (ri) {
    var e = ri, t = oi;
    if (oi = ri = null, s0(e), t)
      for (e = 0; e < t.length; e++)
        s0(t[e]);
  }
}
function qx(e, t) {
  return e(t);
}
function Qx() {
}
var gf = !1;
function Gx(e, t, n) {
  if (gf)
    return e(t, n);
  gf = !0;
  try {
    return qx(e, t, n);
  } finally {
    gf = !1, (ri !== null || oi !== null) && (Qx(), Wx());
  }
}
function ql(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = pc(n);
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
var np = !1;
if (Hn)
  try {
    var Yi = {};
    Object.defineProperty(Yi, "passive", { get: function() {
      np = !0;
    } }), window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi);
  } catch {
    np = !1;
  }
function F$(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Cl = !1, fu = null, du = !1, rp = null, z$ = { onError: function(e) {
  Cl = !0, fu = e;
} };
function B$(e, t, n, r, o, i, l, a, s) {
  Cl = !1, fu = null, F$.apply(z$, arguments);
}
function j$(e, t, n, r, o, i, l, a, s) {
  if (B$.apply(this, arguments), Cl) {
    if (Cl) {
      var u = fu;
      Cl = !1, fu = null;
    } else
      throw Error(j(198));
    du || (du = !0, rp = u);
  }
}
function bo(e) {
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
function Kx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function u0(e) {
  if (bo(e) !== e)
    throw Error(j(188));
}
function H$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bo(e), t === null)
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
          return u0(o), e;
        if (i === r)
          return u0(o), t;
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
function Yx(e) {
  return e = H$(e), e !== null ? Xx(e) : null;
}
function Xx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Xx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Zx = Tt.unstable_scheduleCallback, c0 = Tt.unstable_cancelCallback, V$ = Tt.unstable_shouldYield, U$ = Tt.unstable_requestPaint, Fe = Tt.unstable_now, W$ = Tt.unstable_getCurrentPriorityLevel, Jh = Tt.unstable_ImmediatePriority, Jx = Tt.unstable_UserBlockingPriority, pu = Tt.unstable_NormalPriority, q$ = Tt.unstable_LowPriority, ew = Tt.unstable_IdlePriority, uc = null, kn = null;
function Q$(e) {
  if (kn && typeof kn.onCommitFiberRoot == "function")
    try {
      kn.onCommitFiberRoot(uc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var cn = Math.clz32 ? Math.clz32 : Y$, G$ = Math.log, K$ = Math.LN2;
function Y$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (G$(e) / K$ | 0) | 0;
}
var ts = 64, ns = 4194304;
function vl(e) {
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
function hu(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? r = vl(a) : (i &= l, i !== 0 && (r = vl(i)));
  } else
    l = n & ~o, l !== 0 ? r = vl(l) : i !== 0 && (r = vl(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - cn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function X$(e, t) {
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
function Z$(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - cn(i), a = 1 << l, s = o[l];
    s === -1 ? ((a & n) === 0 || (a & r) !== 0) && (o[l] = X$(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function op(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function tw() {
  var e = ts;
  return ts <<= 1, (ts & 4194240) === 0 && (ts = 64), e;
}
function vf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ta(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - cn(t), e[t] = n;
}
function J$(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - cn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function em(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - cn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var we = 0;
function nw(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var rw, tm, ow, iw, lw, ip = !1, rs = [], Sr = null, kr = null, Cr = null, Ql = /* @__PURE__ */ new Map(), Gl = /* @__PURE__ */ new Map(), pr = [], eE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function f0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sr = null;
      break;
    case "dragenter":
    case "dragleave":
      kr = null;
      break;
    case "mouseover":
    case "mouseout":
      Cr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ql.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gl.delete(t.pointerId);
  }
}
function Xi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Oa(t), t !== null && tm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function tE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Sr = Xi(Sr, e, t, n, r, o), !0;
    case "dragenter":
      return kr = Xi(kr, e, t, n, r, o), !0;
    case "mouseover":
      return Cr = Xi(Cr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ql.set(i, Xi(Ql.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Gl.set(i, Xi(Gl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function aw(e) {
  var t = eo(e.target);
  if (t !== null) {
    var n = bo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Kx(n), t !== null) {
          e.blockedOn = t, lw(e.priority, function() {
            ow(n);
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
function zs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ep = r, n.target.dispatchEvent(r), ep = null;
    } else
      return t = Oa(n), t !== null && tm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function d0(e, t, n) {
  zs(e) && n.delete(t);
}
function nE() {
  ip = !1, Sr !== null && zs(Sr) && (Sr = null), kr !== null && zs(kr) && (kr = null), Cr !== null && zs(Cr) && (Cr = null), Ql.forEach(d0), Gl.forEach(d0);
}
function Zi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ip || (ip = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, nE)));
}
function Kl(e) {
  function t(o) {
    return Zi(o, e);
  }
  if (0 < rs.length) {
    Zi(rs[0], e);
    for (var n = 1; n < rs.length; n++) {
      var r = rs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Sr !== null && Zi(Sr, e), kr !== null && Zi(kr, e), Cr !== null && Zi(Cr, e), Ql.forEach(t), Gl.forEach(t), n = 0; n < pr.length; n++)
    r = pr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pr.length && (n = pr[0], n.blockedOn === null); )
    aw(n), n.blockedOn === null && pr.shift();
}
var ii = Kn.ReactCurrentBatchConfig, mu = !0;
function rE(e, t, n, r) {
  var o = we, i = ii.transition;
  ii.transition = null;
  try {
    we = 1, nm(e, t, n, r);
  } finally {
    we = o, ii.transition = i;
  }
}
function oE(e, t, n, r) {
  var o = we, i = ii.transition;
  ii.transition = null;
  try {
    we = 4, nm(e, t, n, r);
  } finally {
    we = o, ii.transition = i;
  }
}
function nm(e, t, n, r) {
  if (mu) {
    var o = lp(e, t, n, r);
    if (o === null)
      Af(e, t, r, gu, n), f0(e, r);
    else if (tE(o, e, t, n, r))
      r.stopPropagation();
    else if (f0(e, r), t & 4 && -1 < eE.indexOf(e)) {
      for (; o !== null; ) {
        var i = Oa(o);
        if (i !== null && rw(i), i = lp(e, t, n, r), i === null && Af(e, t, r, gu, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Af(e, t, r, null, n);
  }
}
var gu = null;
function lp(e, t, n, r) {
  if (gu = null, e = Zh(r), e = eo(e), e !== null)
    if (t = bo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Kx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return gu = e, null;
}
function sw(e) {
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
      switch (W$()) {
        case Jh:
          return 1;
        case Jx:
          return 4;
        case pu:
        case q$:
          return 16;
        case ew:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mr = null, rm = null, Bs = null;
function uw() {
  if (Bs)
    return Bs;
  var e, t = rm, n = t.length, r, o = "value" in mr ? mr.value : mr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Bs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function js(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function os() {
  return !0;
}
function p0() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? os : p0, this.isPropagationStopped = p0, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = os);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = os);
  }, persist: function() {
  }, isPersistent: os }), t;
}
var Mi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, om = Ot(Mi), Ia = Oe({}, Mi, { view: 0, detail: 0 }), iE = Ot(Ia), yf, xf, Ji, cc = Oe({}, Ia, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: im, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ji && (Ji && e.type === "mousemove" ? (yf = e.screenX - Ji.screenX, xf = e.screenY - Ji.screenY) : xf = yf = 0, Ji = e), yf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xf;
} }), h0 = Ot(cc), lE = Oe({}, cc, { dataTransfer: 0 }), aE = Ot(lE), sE = Oe({}, Ia, { relatedTarget: 0 }), wf = Ot(sE), uE = Oe({}, Mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cE = Ot(uE), fE = Oe({}, Mi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), dE = Ot(fE), pE = Oe({}, Mi, { data: 0 }), m0 = Ot(pE), hE = {
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
}, mE = {
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
}, gE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gE[e]) ? !!t[e] : !1;
}
function im() {
  return vE;
}
var yE = Oe({}, Ia, { key: function(e) {
  if (e.key) {
    var t = hE[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: im, charCode: function(e) {
  return e.type === "keypress" ? js(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xE = Ot(yE), wE = Oe({}, cc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), g0 = Ot(wE), bE = Oe({}, Ia, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: im }), SE = Ot(bE), kE = Oe({}, Mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), CE = Ot(kE), $E = Oe({}, cc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), EE = Ot($E), AE = [9, 13, 27, 32], lm = Hn && "CompositionEvent" in window, $l = null;
Hn && "documentMode" in document && ($l = document.documentMode);
var PE = Hn && "TextEvent" in window && !$l, cw = Hn && (!lm || $l && 8 < $l && 11 >= $l), v0 = String.fromCharCode(32), y0 = !1;
function fw(e, t) {
  switch (e) {
    case "keyup":
      return AE.indexOf(t.keyCode) !== -1;
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
function dw(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Uo = !1;
function _E(e, t) {
  switch (e) {
    case "compositionend":
      return dw(t);
    case "keypress":
      return t.which !== 32 ? null : (y0 = !0, v0);
    case "textInput":
      return e = t.data, e === v0 && y0 ? null : e;
    default:
      return null;
  }
}
function RE(e, t) {
  if (Uo)
    return e === "compositionend" || !lm && fw(e, t) ? (e = uw(), Bs = rm = mr = null, Uo = !1, e) : null;
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
      return cw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var TE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function x0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TE[e.type] : t === "textarea";
}
function pw(e, t, n, r) {
  Ux(r), t = vu(t, "onChange"), 0 < t.length && (n = new om("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var El = null, Yl = null;
function IE(e) {
  Cw(e, 0);
}
function fc(e) {
  var t = Qo(e);
  if (Lx(t))
    return e;
}
function OE(e, t) {
  if (e === "change")
    return t;
}
var hw = !1;
if (Hn) {
  var bf;
  if (Hn) {
    var Sf = "oninput" in document;
    if (!Sf) {
      var w0 = document.createElement("div");
      w0.setAttribute("oninput", "return;"), Sf = typeof w0.oninput == "function";
    }
    bf = Sf;
  } else
    bf = !1;
  hw = bf && (!document.documentMode || 9 < document.documentMode);
}
function b0() {
  El && (El.detachEvent("onpropertychange", mw), Yl = El = null);
}
function mw(e) {
  if (e.propertyName === "value" && fc(Yl)) {
    var t = [];
    pw(t, Yl, e, Zh(e)), Gx(IE, t);
  }
}
function NE(e, t, n) {
  e === "focusin" ? (b0(), El = t, Yl = n, El.attachEvent("onpropertychange", mw)) : e === "focusout" && b0();
}
function ME(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fc(Yl);
}
function DE(e, t) {
  if (e === "click")
    return fc(t);
}
function LE(e, t) {
  if (e === "input" || e === "change")
    return fc(t);
}
function FE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pn = typeof Object.is == "function" ? Object.is : FE;
function Xl(e, t) {
  if (pn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hd.call(t, o) || !pn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function S0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function k0(e, t) {
  var n = S0(e);
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
    n = S0(n);
  }
}
function gw(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gw(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function vw() {
  for (var e = window, t = cu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = cu(e.document);
  }
  return t;
}
function am(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function zE(e) {
  var t = vw(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gw(n.ownerDocument.documentElement, n)) {
    if (r !== null && am(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = k0(n, i);
        var l = k0(
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
var BE = Hn && "documentMode" in document && 11 >= document.documentMode, Wo = null, ap = null, Al = null, sp = !1;
function C0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sp || Wo == null || Wo !== cu(r) || (r = Wo, "selectionStart" in r && am(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Al && Xl(Al, r) || (Al = r, r = vu(ap, "onSelect"), 0 < r.length && (t = new om("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Wo)));
}
function is(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qo = { animationend: is("Animation", "AnimationEnd"), animationiteration: is("Animation", "AnimationIteration"), animationstart: is("Animation", "AnimationStart"), transitionend: is("Transition", "TransitionEnd") }, kf = {}, yw = {};
Hn && (yw = document.createElement("div").style, "AnimationEvent" in window || (delete qo.animationend.animation, delete qo.animationiteration.animation, delete qo.animationstart.animation), "TransitionEvent" in window || delete qo.transitionend.transition);
function dc(e) {
  if (kf[e])
    return kf[e];
  if (!qo[e])
    return e;
  var t = qo[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in yw)
      return kf[e] = t[n];
  return e;
}
var xw = dc("animationend"), ww = dc("animationiteration"), bw = dc("animationstart"), Sw = dc("transitionend"), kw = /* @__PURE__ */ new Map(), $0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mr(e, t) {
  kw.set(e, t), wo(t, [e]);
}
for (var Cf = 0; Cf < $0.length; Cf++) {
  var $f = $0[Cf], jE = $f.toLowerCase(), HE = $f[0].toUpperCase() + $f.slice(1);
  Mr(jE, "on" + HE);
}
Mr(xw, "onAnimationEnd");
Mr(ww, "onAnimationIteration");
Mr(bw, "onAnimationStart");
Mr("dblclick", "onDoubleClick");
Mr("focusin", "onFocus");
Mr("focusout", "onBlur");
Mr(Sw, "onTransitionEnd");
vi("onMouseEnter", ["mouseout", "mouseover"]);
vi("onMouseLeave", ["mouseout", "mouseover"]);
vi("onPointerEnter", ["pointerout", "pointerover"]);
vi("onPointerLeave", ["pointerout", "pointerover"]);
wo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), VE = new Set("cancel close invalid load scroll toggle".split(" ").concat(yl));
function E0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, j$(r, t, void 0, e), e.currentTarget = null;
}
function Cw(e, t) {
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
          E0(o, a, u), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (a = r[l], s = a.instance, u = a.currentTarget, a = a.listener, s !== i && o.isPropagationStopped())
            break e;
          E0(o, a, u), i = s;
        }
    }
  }
  if (du)
    throw e = rp, du = !1, rp = null, e;
}
function Ee(e, t) {
  var n = t[pp];
  n === void 0 && (n = t[pp] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($w(t, e, 2, !1), n.add(r));
}
function Ef(e, t, n) {
  var r = 0;
  t && (r |= 4), $w(n, e, r, t);
}
var ls = "_reactListening" + Math.random().toString(36).slice(2);
function Zl(e) {
  if (!e[ls]) {
    e[ls] = !0, Ix.forEach(function(n) {
      n !== "selectionchange" && (VE.has(n) || Ef(n, !1, e), Ef(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ls] || (t[ls] = !0, Ef("selectionchange", !1, t));
  }
}
function $w(e, t, n, r) {
  switch (sw(t)) {
    case 1:
      var o = rE;
      break;
    case 4:
      o = oE;
      break;
    default:
      o = nm;
  }
  n = o.bind(null, t, n, e), o = void 0, !np || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Af(e, t, n, r, o) {
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
            if (l = eo(a), l === null)
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
  Gx(function() {
    var u = i, c = Zh(n), f = [];
    e: {
      var d = kw.get(e);
      if (d !== void 0) {
        var g = om, h = e;
        switch (e) {
          case "keypress":
            if (js(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = xE;
            break;
          case "focusin":
            h = "focus", g = wf;
            break;
          case "focusout":
            h = "blur", g = wf;
            break;
          case "beforeblur":
          case "afterblur":
            g = wf;
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
            g = h0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = aE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = SE;
            break;
          case xw:
          case ww:
          case bw:
            g = cE;
            break;
          case Sw:
            g = CE;
            break;
          case "scroll":
            g = iE;
            break;
          case "wheel":
            g = EE;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = dE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = g0;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = ql(y, p), b != null && v.push(Jl(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== ep && (h = n.relatedTarget || n.fromElement) && (eo(h) || h[Vn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? eo(h) : null, h !== null && (w = bo(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (v = h0, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = g0, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : Qo(g), x = h == null ? d : Qo(h), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, eo(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && h)
            t: {
              for (v = g, p = h, y = 0, x = v; x; x = Po(x))
                y++;
              for (x = 0, b = p; b; b = Po(b))
                x++;
              for (; 0 < y - x; )
                v = Po(v), y--;
              for (; 0 < x - y; )
                p = Po(p), x--;
              for (; y--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = Po(v), p = Po(p);
              }
              v = null;
            }
          else
            v = null;
          g !== null && A0(f, d, g, v, !1), h !== null && w !== null && A0(f, w, h, v, !0);
        }
      }
      e: {
        if (d = u ? Qo(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = OE;
        else if (x0(d))
          if (hw)
            A = LE;
          else {
            A = ME;
            var S = NE;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = DE);
        if (A && (A = A(e, u))) {
          pw(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Kd(d, "number", d.value);
      }
      switch (S = u ? Qo(u) : window, e) {
        case "focusin":
          (x0(S) || S.contentEditable === "true") && (Wo = S, ap = u, Al = null);
          break;
        case "focusout":
          Al = ap = Wo = null;
          break;
        case "mousedown":
          sp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sp = !1, C0(f, n, c);
          break;
        case "selectionchange":
          if (BE)
            break;
        case "keydown":
        case "keyup":
          C0(f, n, c);
      }
      var E;
      if (lm)
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
        Uo ? fw(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (cw && n.locale !== "ko" && (Uo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Uo && (E = uw()) : (mr = c, rm = "value" in mr ? mr.value : mr.textContent, Uo = !0)), S = vu(u, $), 0 < S.length && ($ = new m0($, e, null, n, c), f.push({ event: $, listeners: S }), E ? $.data = E : (E = dw(n), E !== null && ($.data = E)))), (E = PE ? _E(e, n) : RE(e, n)) && (u = vu(u, "onBeforeInput"), 0 < u.length && (c = new m0("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = E));
    }
    Cw(f, t);
  });
}
function Jl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ql(e, n), i != null && r.unshift(Jl(e, i, o)), i = ql(e, t), i != null && r.push(Jl(e, i, o))), e = e.return;
  }
  return r;
}
function Po(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function A0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, u = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (s = ql(n, i), s != null && l.unshift(Jl(n, s, a))) : o || (s = ql(n, i), s != null && l.push(Jl(n, s, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var UE = /\r\n?/g, WE = /\u0000|\uFFFD/g;
function P0(e) {
  return (typeof e == "string" ? e : "" + e).replace(UE, `
`).replace(WE, "");
}
function as(e, t, n) {
  if (t = P0(t), P0(e) !== t && n)
    throw Error(j(425));
}
function yu() {
}
var up = null, cp = null;
function fp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var dp = typeof setTimeout == "function" ? setTimeout : void 0, qE = typeof clearTimeout == "function" ? clearTimeout : void 0, _0 = typeof Promise == "function" ? Promise : void 0, QE = typeof queueMicrotask == "function" ? queueMicrotask : typeof _0 < "u" ? function(e) {
  return _0.resolve(null).then(e).catch(GE);
} : dp;
function GE(e) {
  setTimeout(function() {
    throw e;
  });
}
function Pf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Kl(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Kl(t);
}
function $r(e) {
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
function R0(e) {
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
var Di = Math.random().toString(36).slice(2), wn = "__reactFiber$" + Di, ea = "__reactProps$" + Di, Vn = "__reactContainer$" + Di, pp = "__reactEvents$" + Di, KE = "__reactListeners$" + Di, YE = "__reactHandles$" + Di;
function eo(e) {
  var t = e[wn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Vn] || n[wn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = R0(e); e !== null; ) {
          if (n = e[wn])
            return n;
          e = R0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Oa(e) {
  return e = e[wn] || e[Vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function pc(e) {
  return e[ea] || null;
}
var hp = [], Go = -1;
function Dr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Go || (e.current = hp[Go], hp[Go] = null, Go--);
}
function $e(e, t) {
  Go++, hp[Go] = e.current, e.current = t;
}
var Or = {}, it = Dr(Or), bt = Dr(!1), so = Or;
function yi(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Or;
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
function xu() {
  Pe(bt), Pe(it);
}
function T0(e, t, n) {
  if (it.current !== Or)
    throw Error(j(168));
  $e(it, t), $e(bt, n);
}
function Ew(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, N$(e) || "Unknown", o));
  return Oe({}, n, r);
}
function wu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Or, so = it.current, $e(it, e), $e(bt, bt.current), !0;
}
function I0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = Ew(e, t, so), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(it), $e(it, e)) : Pe(bt), $e(bt, n);
}
var Fn = null, hc = !1, _f = !1;
function Aw(e) {
  Fn === null ? Fn = [e] : Fn.push(e);
}
function XE(e) {
  hc = !0, Aw(e);
}
function Lr() {
  if (!_f && Fn !== null) {
    _f = !0;
    var e = 0, t = we;
    try {
      var n = Fn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Fn = null, hc = !1;
    } catch (o) {
      throw Fn !== null && (Fn = Fn.slice(e + 1)), Zx(Jh, Lr), o;
    } finally {
      we = t, _f = !1;
    }
  }
  return null;
}
var Ko = [], Yo = 0, bu = null, Su = 0, Dt = [], Lt = 0, uo = null, zn = 1, Bn = "";
function Wr(e, t) {
  Ko[Yo++] = Su, Ko[Yo++] = bu, bu = e, Su = t;
}
function Pw(e, t, n) {
  Dt[Lt++] = zn, Dt[Lt++] = Bn, Dt[Lt++] = uo, uo = e;
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
function sm(e) {
  e.return !== null && (Wr(e, 1), Pw(e, 1, 0));
}
function um(e) {
  for (; e === bu; )
    bu = Ko[--Yo], Ko[Yo] = null, Su = Ko[--Yo], Ko[Yo] = null;
  for (; e === uo; )
    uo = Dt[--Lt], Dt[Lt] = null, Bn = Dt[--Lt], Dt[Lt] = null, zn = Dt[--Lt], Dt[Lt] = null;
}
var _t = null, Et = null, Re = !1, rn = null;
function _w(e, t) {
  var n = Ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function O0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = $r(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = uo !== null ? { id: zn, overflow: Bn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Et = null, !0) : !1;
    default:
      return !1;
  }
}
function mp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gp(e) {
  if (Re) {
    var t = Et;
    if (t) {
      var n = t;
      if (!O0(e, t)) {
        if (mp(e))
          throw Error(j(418));
        t = $r(n.nextSibling);
        var r = _t;
        t && O0(e, t) ? _w(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (mp(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function N0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function ss(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return N0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fp(e.type, e.memoizedProps)), t && (t = Et)) {
    if (mp(e))
      throw Rw(), Error(j(418));
    for (; t; )
      _w(e, t), t = $r(t.nextSibling);
  }
  if (N0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = $r(e.nextSibling);
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
    Et = _t ? $r(e.stateNode.nextSibling) : null;
  return !0;
}
function Rw() {
  for (var e = Et; e; )
    e = $r(e.nextSibling);
}
function xi() {
  Et = _t = null, Re = !1;
}
function cm(e) {
  rn === null ? rn = [e] : rn.push(e);
}
var ZE = Kn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ku = Dr(null), Cu = null, Xo = null, fm = null;
function dm() {
  fm = Xo = Cu = null;
}
function pm(e) {
  var t = ku.current;
  Pe(ku), e._currentValue = t;
}
function vp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function li(e, t) {
  Cu = e, fm = Xo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function qt(e) {
  var t = e._currentValue;
  if (fm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Xo === null) {
      if (Cu === null)
        throw Error(j(308));
      Xo = e, Cu.dependencies = { lanes: 0, firstContext: e };
    } else
      Xo = Xo.next = e;
  return t;
}
var to = null;
function hm(e) {
  to === null ? to = [e] : to.push(e);
}
function Tw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, hm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Un(e, r);
}
function Un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dr = !1;
function mm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Iw(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Er(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (me & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Un(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, hm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Un(e, n);
}
function Hs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, em(e, n);
  }
}
function M0(e, t) {
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
function $u(e, t, n, r) {
  var o = e.updateQueue;
  dr = !1;
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
              dr = !0;
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
    fo |= l, e.lanes = l, e.memoizedState = f;
  }
}
function D0(e, t, n) {
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
var Ow = new Tx.Component().refs;
function yp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var mc = { isMounted: function(e) {
  return (e = e._reactInternals) ? bo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = dt(), o = Pr(e), i = jn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Er(e, i, o), t !== null && (fn(t, e, o, r), Hs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = dt(), o = Pr(e), i = jn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Er(e, i, o), t !== null && (fn(t, e, o, r), Hs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = dt(), r = Pr(e), o = jn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Er(e, o, r), t !== null && (fn(t, e, r, n), Hs(t, e, r));
} };
function L0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Xl(n, r) || !Xl(o, i) : !0;
}
function Nw(e, t, n) {
  var r = !1, o = Or, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qt(i) : (o = St(t) ? so : it.current, r = t.contextTypes, i = (r = r != null) ? yi(e, o) : Or), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = mc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function F0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mc.enqueueReplaceState(t, t.state, null);
}
function xp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Ow, mm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = qt(i) : (i = St(t) ? so : it.current, o.context = yi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (yp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && mc.enqueueReplaceState(o, o.state, null), $u(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function el(e, t, n) {
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
        a === Ow && (a = o.refs = {}), l === null ? delete a[i] : a[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function us(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function z0(e) {
  var t = e._init;
  return t(e._payload);
}
function Mw(e) {
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
    return p = _r(p, y), p.index = 0, p.sibling = null, p;
  }
  function i(p, y, x) {
    return p.index = x, e ? (x = p.alternate, x !== null ? (x = x.index, x < y ? (p.flags |= 2, y) : x) : (p.flags |= 2, y)) : (p.flags |= 1048576, y);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, y, x, b) {
    return y === null || y.tag !== 6 ? (y = Df(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function s(p, y, x, b) {
    var A = x.type;
    return A === Vo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === fr && z0(A) === y.type) ? (b = o(y, x.props), b.ref = el(p, y, x), b.return = p, b) : (b = Gs(x.type, x.key, x.props, null, p.mode, b), b.ref = el(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Lf(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = oo(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Df("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Za:
          return x = Gs(y.type, y.key, y.props, null, p.mode, x), x.ref = el(p, null, y), x.return = p, x;
        case Ho:
          return y = Lf(y, p.mode, x), y.return = p, y;
        case fr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (gl(y) || Ki(y))
        return y = oo(y, p.mode, x, null), y.return = p, y;
      us(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : a(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Za:
          return x.key === A ? s(p, y, x, b) : null;
        case Ho:
          return x.key === A ? u(p, y, x, b) : null;
        case fr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (gl(x) || Ki(x))
        return A !== null ? null : c(p, y, x, b, null);
      us(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, a(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Za:
          return p = p.get(b.key === null ? x : b.key) || null, s(y, p, b, A);
        case Ho:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case fr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (gl(b) || Ki(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      us(y, b);
    }
    return null;
  }
  function h(p, y, x, b) {
    for (var A = null, S = null, E = y, $ = y = 0, P = null; E !== null && $ < x.length; $++) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var R = d(p, E, x[$], b);
      if (R === null) {
        E === null && (E = P);
        break;
      }
      e && E && R.alternate === null && t(p, E), y = i(R, y, $), S === null ? A = R : S.sibling = R, S = R, E = P;
    }
    if ($ === x.length)
      return n(p, E), Re && Wr(p, $), A;
    if (E === null) {
      for (; $ < x.length; $++)
        E = f(p, x[$], b), E !== null && (y = i(E, y, $), S === null ? A = E : S.sibling = E, S = E);
      return Re && Wr(p, $), A;
    }
    for (E = r(p, E); $ < x.length; $++)
      P = g(E, p, $, x[$], b), P !== null && (e && P.alternate !== null && E.delete(P.key === null ? $ : P.key), y = i(P, y, $), S === null ? A = P : S.sibling = P, S = P);
    return e && E.forEach(function(T) {
      return t(p, T);
    }), Re && Wr(p, $), A;
  }
  function v(p, y, x, b) {
    var A = Ki(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, E = y, $ = y = 0, P = null, R = x.next(); E !== null && !R.done; $++, R = x.next()) {
      E.index > $ ? (P = E, E = null) : P = E.sibling;
      var T = d(p, E, R.value, b);
      if (T === null) {
        E === null && (E = P);
        break;
      }
      e && E && T.alternate === null && t(p, E), y = i(T, y, $), S === null ? A = T : S.sibling = T, S = T, E = P;
    }
    if (R.done)
      return n(
        p,
        E
      ), Re && Wr(p, $), A;
    if (E === null) {
      for (; !R.done; $++, R = x.next())
        R = f(p, R.value, b), R !== null && (y = i(R, y, $), S === null ? A = R : S.sibling = R, S = R);
      return Re && Wr(p, $), A;
    }
    for (E = r(p, E); !R.done; $++, R = x.next())
      R = g(E, p, $, R.value, b), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? $ : R.key), y = i(R, y, $), S === null ? A = R : S.sibling = R, S = R);
    return e && E.forEach(function(N) {
      return t(p, N);
    }), Re && Wr(p, $), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === Vo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Za:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === Vo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === fr && z0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = el(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === Vo ? (y = oo(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = Gs(x.type, x.key, x.props, null, p.mode, b), b.ref = el(p, y, x), b.return = p, p = b);
          }
          return l(p);
        case Ho:
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
            y = Lf(x, p.mode, b), y.return = p, p = y;
          }
          return l(p);
        case fr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (gl(x))
        return h(p, y, x, b);
      if (Ki(x))
        return v(p, y, x, b);
      us(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Df(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var wi = Mw(!0), Dw = Mw(!1), Na = {}, Cn = Dr(Na), ta = Dr(Na), na = Dr(Na);
function no(e) {
  if (e === Na)
    throw Error(j(174));
  return e;
}
function gm(e, t) {
  switch ($e(na, t), $e(ta, e), $e(Cn, Na), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xd(t, e);
  }
  Pe(Cn), $e(Cn, t);
}
function bi() {
  Pe(Cn), Pe(ta), Pe(na);
}
function Lw(e) {
  no(na.current);
  var t = no(Cn.current), n = Xd(t, e.type);
  t !== n && ($e(ta, e), $e(Cn, n));
}
function vm(e) {
  ta.current === e && (Pe(Cn), Pe(ta));
}
var Te = Dr(0);
function Eu(e) {
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
var Rf = [];
function ym() {
  for (var e = 0; e < Rf.length; e++)
    Rf[e]._workInProgressVersionPrimary = null;
  Rf.length = 0;
}
var Vs = Kn.ReactCurrentDispatcher, Tf = Kn.ReactCurrentBatchConfig, co = 0, Ie = null, We = null, Qe = null, Au = !1, Pl = !1, ra = 0, JE = 0;
function et() {
  throw Error(j(321));
}
function xm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pn(e[n], t[n]))
      return !1;
  return !0;
}
function wm(e, t, n, r, o, i) {
  if (co = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vs.current = e === null || e.memoizedState === null ? r5 : o5, e = n(r, o), Pl) {
    i = 0;
    do {
      if (Pl = !1, ra = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Qe = We = null, t.updateQueue = null, Vs.current = i5, e = n(r, o);
    } while (Pl);
  }
  if (Vs.current = Pu, t = We !== null && We.next !== null, co = 0, Qe = We = Ie = null, Au = !1, t)
    throw Error(j(300));
  return e;
}
function bm() {
  var e = ra !== 0;
  return ra = 0, e;
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
function oa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function If(e) {
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
      if ((co & c) === c)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (a = s = f, l = r) : s = s.next = f, Ie.lanes |= c, fo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? l = r : s.next = a, pn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ie.lanes |= i, fo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Of(e) {
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
function Fw() {
}
function zw(e, t) {
  var n = Ie, r = Qt(), o = t(), i = !pn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, Sm(Hw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Qe !== null && Qe.memoizedState.tag & 1) {
    if (n.flags |= 2048, ia(9, jw.bind(null, n, r, o, t), void 0, null), Ke === null)
      throw Error(j(349));
    (co & 30) !== 0 || Bw(n, t, o);
  }
  return o;
}
function Bw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Vw(t) && Uw(e);
}
function Hw(e, t, n) {
  return n(function() {
    Vw(t) && Uw(e);
  });
}
function Vw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pn(e, n);
  } catch {
    return !0;
  }
}
function Uw(e) {
  var t = Un(e, 1);
  t !== null && fn(t, e, 1, -1);
}
function B0(e) {
  var t = gn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oa, lastRenderedState: e }, t.queue = e, e = e.dispatch = n5.bind(null, Ie, e), [t.memoizedState, e];
}
function ia(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ww() {
  return Qt().memoizedState;
}
function Us(e, t, n, r) {
  var o = gn();
  Ie.flags |= e, o.memoizedState = ia(1 | t, n, void 0, r === void 0 ? null : r);
}
function gc(e, t, n, r) {
  var o = Qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (We !== null) {
    var l = We.memoizedState;
    if (i = l.destroy, r !== null && xm(r, l.deps)) {
      o.memoizedState = ia(t, n, i, r);
      return;
    }
  }
  Ie.flags |= e, o.memoizedState = ia(1 | t, n, i, r);
}
function j0(e, t) {
  return Us(8390656, 8, e, t);
}
function Sm(e, t) {
  return gc(2048, 8, e, t);
}
function qw(e, t) {
  return gc(4, 2, e, t);
}
function Qw(e, t) {
  return gc(4, 4, e, t);
}
function Gw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Kw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gc(4, 4, Gw.bind(null, t, e), n);
}
function km() {
}
function Yw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Xw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Zw(e, t, n) {
  return (co & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (pn(n, t) || (n = tw(), Ie.lanes |= n, fo |= n, e.baseState = !0), t);
}
function e5(e, t) {
  var n = we;
  we = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Tf.transition;
  Tf.transition = {};
  try {
    e(!1), t();
  } finally {
    we = n, Tf.transition = r;
  }
}
function Jw() {
  return Qt().memoizedState;
}
function t5(e, t, n) {
  var r = Pr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, eb(e))
    tb(t, n);
  else if (n = Tw(e, t, n, r), n !== null) {
    var o = dt();
    fn(n, e, r, o), nb(n, t, r);
  }
}
function n5(e, t, n) {
  var r = Pr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (eb(e))
    tb(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, a = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = a, pn(a, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, hm(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Tw(e, t, o, r), n !== null && (o = dt(), fn(n, e, r, o), nb(n, t, r));
  }
}
function eb(e) {
  var t = e.alternate;
  return e === Ie || t !== null && t === Ie;
}
function tb(e, t) {
  Pl = Au = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function nb(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, em(e, n);
  }
}
var Pu = { readContext: qt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, r5 = { readContext: qt, useCallback: function(e, t) {
  return gn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qt, useEffect: j0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Us(
    4194308,
    4,
    Gw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Us(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Us(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = t5.bind(null, Ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gn();
  return e = { current: e }, t.memoizedState = e;
}, useState: B0, useDebugValue: km, useDeferredValue: function(e) {
  return gn().memoizedState = e;
}, useTransition: function() {
  var e = B0(!1), t = e[0];
  return e = e5.bind(null, e[1]), gn().memoizedState = e, [t, e];
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
    (co & 30) !== 0 || Bw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, j0(Hw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ia(9, jw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = gn(), t = Ke.identifierPrefix;
  if (Re) {
    var n = Bn, r = zn;
    n = (r & ~(1 << 32 - cn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ra++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = JE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, o5 = {
  readContext: qt,
  useCallback: Yw,
  useContext: qt,
  useEffect: Sm,
  useImperativeHandle: Kw,
  useInsertionEffect: qw,
  useLayoutEffect: Qw,
  useMemo: Xw,
  useReducer: If,
  useRef: Ww,
  useState: function() {
    return If(oa);
  },
  useDebugValue: km,
  useDeferredValue: function(e) {
    var t = Qt();
    return Zw(t, We.memoizedState, e);
  },
  useTransition: function() {
    var e = If(oa)[0], t = Qt().memoizedState;
    return [e, t];
  },
  useMutableSource: Fw,
  useSyncExternalStore: zw,
  useId: Jw,
  unstable_isNewReconciler: !1
}, i5 = { readContext: qt, useCallback: Yw, useContext: qt, useEffect: Sm, useImperativeHandle: Kw, useInsertionEffect: qw, useLayoutEffect: Qw, useMemo: Xw, useReducer: Of, useRef: Ww, useState: function() {
  return Of(oa);
}, useDebugValue: km, useDeferredValue: function(e) {
  var t = Qt();
  return We === null ? t.memoizedState = e : Zw(t, We.memoizedState, e);
}, useTransition: function() {
  var e = Of(oa)[0], t = Qt().memoizedState;
  return [e, t];
}, useMutableSource: Fw, useSyncExternalStore: zw, useId: Jw, unstable_isNewReconciler: !1 };
function Si(e, t) {
  try {
    var n = "", r = t;
    do
      n += O$(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nf(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function wp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var l5 = typeof WeakMap == "function" ? WeakMap : Map;
function rb(e, t, n) {
  n = jn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ru || (Ru = !0, Rp = r), wp(e, t);
  }, n;
}
function ob(e, t, n) {
  n = jn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      wp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    wp(e, t), typeof r != "function" && (Ar === null ? Ar = /* @__PURE__ */ new Set([this]) : Ar.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function H0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new l5();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = w5.bind(null, e, t, n), t.then(e, e));
}
function V0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function U0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jn(-1, 1), t.tag = 2, Er(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var a5 = Kn.ReactCurrentOwner, wt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Dw(t, null, n, r) : wi(t, e.child, n, r);
}
function W0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return li(t, o), r = wm(e, t, n, r, i, o), n = bm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wn(e, t, o)) : (Re && n && sm(t), t.flags |= 1, ct(e, t, r, o), t.child);
}
function q0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Tm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ib(e, t, i, r, o)) : (e = Gs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xl, n(l, r) && e.ref === t.ref)
      return Wn(e, t, o);
  }
  return t.flags |= 1, e = _r(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ib(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xl(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, Wn(e, t, o);
  }
  return bp(e, t, n, r, o);
}
function lb(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(Jo, $t), $t |= n;
    else {
      if ((n & 1073741824) === 0)
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(Jo, $t), $t |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, $e(Jo, $t), $t |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, $e(Jo, $t), $t |= r;
  return ct(e, t, o, n), t.child;
}
function ab(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bp(e, t, n, r, o) {
  var i = St(n) ? so : it.current;
  return i = yi(t, i), li(t, o), n = wm(e, t, n, r, i, o), r = bm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wn(e, t, o)) : (Re && r && sm(t), t.flags |= 1, ct(e, t, n, o), t.child);
}
function Q0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    wu(t);
  } else
    i = !1;
  if (li(t, o), t.stateNode === null)
    Ws(e, t), Nw(t, n, r), xp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var s = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qt(u) : (u = St(n) ? so : it.current, u = yi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && F0(t, l, r, u), dr = !1;
    var d = t.memoizedState;
    l.state = d, $u(t, r, l, o), s = t.memoizedState, a !== r || d !== s || bt.current || dr ? (typeof c == "function" && (yp(t, n, c, r), s = t.memoizedState), (a = dr || L0(t, n, a, r, d, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Iw(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : tn(t.type, a), l.props = u, f = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = qt(s) : (s = St(n) ? so : it.current, s = yi(t, s));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== s) && F0(t, l, r, s), dr = !1, d = t.memoizedState, l.state = d, $u(t, r, l, o);
    var h = t.memoizedState;
    a !== f || d !== h || bt.current || dr ? (typeof g == "function" && (yp(t, n, g, r), h = t.memoizedState), (u = dr || L0(t, n, u, r, d, h, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sp(e, t, n, r, i, o);
}
function Sp(e, t, n, r, o, i) {
  ab(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && I0(t, n, !1), Wn(e, t, i);
  r = t.stateNode, a5.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = wi(t, e.child, null, i), t.child = wi(t, null, a, i)) : ct(e, t, a, i), t.memoizedState = r.state, o && I0(t, n, !0), t.child;
}
function sb(e) {
  var t = e.stateNode;
  t.pendingContext ? T0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && T0(e, t.context, !1), gm(e, t.containerInfo);
}
function G0(e, t, n, r, o) {
  return xi(), cm(o), t.flags |= 256, ct(e, t, n, r), t.child;
}
var kp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ub(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), $e(Te, o & 1), e === null)
    return gp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = xc(l, r, 0, null), e = oo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cp(n), t.memoizedState = kp, e) : Cm(t, l));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return s5(e, t, l, r, a, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, a = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = _r(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = _r(a, i) : (i = oo(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Cp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = kp, r;
  }
  return i = e.child, e = i.sibling, r = _r(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Cm(e, t) {
  return t = xc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function cs(e, t, n, r) {
  return r !== null && cm(r), wi(t, e.child, null, n), e = Cm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function s5(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Nf(Error(j(422))), cs(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = xc({ mode: "visible", children: r.children }, o, 0, null), i = oo(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && wi(t, e.child, null, l), t.child.memoizedState = Cp(l), t.memoizedState = kp, i);
  if ((t.mode & 1) === 0)
    return cs(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(j(419)), r = Nf(i, r, void 0), cs(e, t, l, r);
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
    return Rm(), r = Nf(Error(j(421))), cs(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = b5.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Et = $r(o.nextSibling), _t = t, Re = !0, rn = null, e !== null && (Dt[Lt++] = zn, Dt[Lt++] = Bn, Dt[Lt++] = uo, zn = e.id, Bn = e.overflow, uo = t), t = Cm(t, r.children), t.flags |= 4096, t);
}
function K0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vp(e.return, t, n);
}
function Mf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function cb(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ct(e, t, r.children, n), r = Te.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && K0(e, n, t);
          else if (e.tag === 19)
            K0(e, n, t);
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
          e = n.alternate, e !== null && Eu(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Mf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Eu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Mf(t, !0, n, null, i);
        break;
      case "together":
        Mf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ws(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), fo |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = _r(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = _r(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function u5(e, t, n) {
  switch (t.tag) {
    case 3:
      sb(t), xi();
      break;
    case 5:
      Lw(t);
      break;
    case 1:
      St(t.type) && wu(t);
      break;
    case 4:
      gm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      $e(ku, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($e(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ub(e, t, n) : ($e(Te, Te.current & 1), e = Wn(e, t, n), e !== null ? e.sibling : null);
      $e(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return cb(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), $e(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, lb(e, t, n);
  }
  return Wn(e, t, n);
}
var fb, $p, db, pb;
fb = function(e, t) {
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
$p = function() {
};
db = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, no(Cn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Qd(e, o), r = Qd(e, r), i = [];
        break;
      case "select":
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Yd(e, o), r = Yd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yu);
    }
    Zd(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a)
            a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ul.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ul.hasOwnProperty(u) ? (s != null && u === "onScroll" && Ee("scroll", e), i || a === s || (i = [])) : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
pb = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tl(e, t) {
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
function c5(e, t, n) {
  var r = t.pendingProps;
  switch (um(t), t.tag) {
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
      return St(t.type) && xu(), tt(t), null;
    case 3:
      return r = t.stateNode, bi(), Pe(bt), Pe(it), ym(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ss(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rn !== null && (Op(rn), rn = null))), $p(e, t), tt(t), null;
    case 5:
      vm(t);
      var o = no(na.current);
      if (n = t.type, e !== null && t.stateNode != null)
        db(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return tt(t), null;
        }
        if (e = no(Cn.current), ss(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[wn] = t, r[ea] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < yl.length; o++)
                Ee(yl[o], r);
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
              o0(r, i), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              l0(r, i), Ee("invalid", r);
          }
          Zd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && as(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && as(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : Ul.hasOwnProperty(l) && a != null && l === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              Ja(r), i0(r, i, !0);
              break;
            case "textarea":
              Ja(r), a0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = yu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[wn] = t, e[ea] = r, fb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Jd(n, r), n) {
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
                for (o = 0; o < yl.length; o++)
                  Ee(yl[o], e);
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
                o0(e, r), o = Qd(e, r), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), Ee("invalid", e);
                break;
              case "textarea":
                l0(e, r), o = Yd(e, r), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            Zd(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style" ? Vx(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && jx(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Wl(e, s) : typeof s == "number" && Wl(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ul.hasOwnProperty(i) ? s != null && i === "onScroll" && Ee("scroll", e) : s != null && Gh(e, i, s, l));
              }
            switch (n) {
              case "input":
                Ja(e), i0(e, r, !1);
                break;
              case "textarea":
                Ja(e), a0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ir(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ni(e, !!r.multiple, i, !1) : r.defaultValue != null && ni(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = yu);
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
        pb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = no(na.current), no(Cn.current), ss(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[wn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                as(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && as(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wn] = t, t.stateNode = r;
      }
      return tt(t), null;
    case 13:
      if (Pe(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Rw(), xi(), t.flags |= 98560, i = !1;
        else if (i = ss(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(j(317));
            i[wn] = t;
          } else
            xi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          rn !== null && (Op(rn), rn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? qe === 0 && (qe = 3) : Rm())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return bi(), $p(e, t), e === null && Zl(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return pm(t.type._context), tt(t), null;
    case 17:
      return St(t.type) && xu(), tt(t), null;
    case 19:
      if (Pe(Te), i = t.memoizedState, i === null)
        return tt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          tl(i, !1);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = Eu(e), l !== null) {
                for (t.flags |= 128, tl(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $e(Te, Te.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > ki && (t.flags |= 128, r = !0, tl(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Eu(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tl(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return tt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > ki && n !== 1073741824 && (t.flags |= 128, r = !0, tl(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Te.current, $e(Te, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return _m(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? ($t & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function f5(e, t) {
  switch (um(t), t.tag) {
    case 1:
      return St(t.type) && xu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bi(), Pe(bt), Pe(it), ym(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return vm(t), null;
    case 13:
      if (Pe(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(j(340));
        xi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Te), null;
    case 4:
      return bi(), null;
    case 10:
      return pm(t.type._context), null;
    case 22:
    case 23:
      return _m(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fs = !1, nt = !1, d5 = typeof WeakSet == "function" ? WeakSet : Set, K = null;
function Zo(e, t) {
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
function Ep(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var Y0 = !1;
function p5(e, t) {
  if (up = mu, e = vw(), am(e)) {
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
  for (cp = { focusedElem: e, selectionRange: n }, mu = !1, K = t; K !== null; )
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
  return h = Y0, Y0 = !1, h;
}
function _l(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Ep(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function vc(e, t) {
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
function Ap(e) {
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
function hb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, hb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wn], delete t[ea], delete t[pp], delete t[KE], delete t[YE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function mb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function X0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || mb(e.return))
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
function Pp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yu));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Pp(e, t, n), e = e.sibling; e !== null; )
      Pp(e, t, n), e = e.sibling;
}
function _p(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (_p(e, t, n), e = e.sibling; e !== null; )
      _p(e, t, n), e = e.sibling;
}
var Ye = null, nn = !1;
function lr(e, t, n) {
  for (n = n.child; n !== null; )
    gb(e, t, n), n = n.sibling;
}
function gb(e, t, n) {
  if (kn && typeof kn.onCommitFiberUnmount == "function")
    try {
      kn.onCommitFiberUnmount(uc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      nt || Zo(n, t);
    case 6:
      var r = Ye, o = nn;
      Ye = null, lr(e, t, n), Ye = r, nn = o, Ye !== null && (nn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null && (nn ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? Pf(e.parentNode, n) : e.nodeType === 1 && Pf(e, n), Kl(e)) : Pf(Ye, n.stateNode));
      break;
    case 4:
      r = Ye, o = nn, Ye = n.stateNode.containerInfo, nn = !0, lr(e, t, n), Ye = r, nn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Ep(n, t, l), o = o.next;
        } while (o !== r);
      }
      lr(e, t, n);
      break;
    case 1:
      if (!nt && (Zo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Ne(n, t, a);
        }
      lr(e, t, n);
      break;
    case 21:
      lr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, lr(e, t, n), nt = r) : lr(e, t, n);
      break;
    default:
      lr(e, t, n);
  }
}
function Z0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new d5()), t.forEach(function(r) {
      var o = S5.bind(null, e, r);
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
        gb(i, l, o), Ye = null, nn = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      vb(t, e), t = t.sibling;
}
function vb(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Zt(t, e), mn(e), r & 4) {
        try {
          _l(3, e, e.return), vc(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          _l(5, e, e.return);
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 1:
      Zt(t, e), mn(e), r & 512 && n !== null && Zo(n, n.return);
      break;
    case 5:
      if (Zt(t, e), mn(e), r & 512 && n !== null && Zo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Wl(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Fx(o, i), Jd(a, l);
            var u = Jd(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l], f = s[l + 1];
              c === "style" ? Vx(o, f) : c === "dangerouslySetInnerHTML" ? jx(o, f) : c === "children" ? Wl(o, f) : Gh(o, c, f, u);
            }
            switch (a) {
              case "input":
                Gd(o, i);
                break;
              case "textarea":
                zx(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? ni(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? ni(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ni(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ea] = i;
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
          Kl(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      Zt(t, e), mn(e);
      break;
    case 13:
      Zt(t, e), mn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Am = Fe())), r & 4 && Z0(e);
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
                  _l(4, d, d.return);
                  break;
                case 1:
                  Zo(d, d.return);
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
                  Zo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    e1(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, K = g) : e1(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Hx("display", l));
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
      Zt(t, e), mn(e), r & 4 && Z0(e);
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
          if (mb(n)) {
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
          r.flags & 32 && (Wl(o, ""), r.flags &= -33);
          var i = X0(e);
          _p(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = X0(e);
          Pp(e, a, l);
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
function h5(e, t, n) {
  K = e, yb(e);
}
function yb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || fs;
      if (!l) {
        var a = o.alternate, s = a !== null && a.memoizedState !== null || nt;
        a = fs;
        var u = nt;
        if (fs = l, (nt = s) && !u)
          for (K = o; K !== null; )
            l = K, s = l.child, l.tag === 22 && l.memoizedState !== null ? t1(o) : s !== null ? (s.return = l, K = s) : t1(o);
        for (; i !== null; )
          K = i, yb(i), i = i.sibling;
        K = o, fs = a, nt = u;
      }
      J0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, K = i) : J0(e);
  }
}
function J0(e) {
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
              nt || vc(5, t);
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
              i !== null && D0(t, i, r);
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
                D0(t, l, n);
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
                    f !== null && Kl(f);
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
        nt || t.flags & 512 && Ap(t);
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
function e1(e) {
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
function t1(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vc(4, t);
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
            Ap(t);
          } catch (s) {
            Ne(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ap(t);
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
var m5 = Math.ceil, _u = Kn.ReactCurrentDispatcher, $m = Kn.ReactCurrentOwner, Wt = Kn.ReactCurrentBatchConfig, me = 0, Ke = null, He = null, Ze = 0, $t = 0, Jo = Dr(0), qe = 0, la = null, fo = 0, yc = 0, Em = 0, Rl = null, xt = null, Am = 0, ki = 1 / 0, On = null, Ru = !1, Rp = null, Ar = null, ds = !1, gr = null, Tu = 0, Tl = 0, Tp = null, qs = -1, Qs = 0;
function dt() {
  return (me & 6) !== 0 ? Fe() : qs !== -1 ? qs : qs = Fe();
}
function Pr(e) {
  return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Ze !== 0 ? Ze & -Ze : ZE.transition !== null ? (Qs === 0 && (Qs = tw()), Qs) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : sw(e.type)), e);
}
function fn(e, t, n, r) {
  if (50 < Tl)
    throw Tl = 0, Tp = null, Error(j(185));
  Ta(e, n, r), ((me & 2) === 0 || e !== Ke) && (e === Ke && ((me & 2) === 0 && (yc |= n), qe === 4 && hr(e, Ze)), kt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (ki = Fe() + 500, hc && Lr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  Z$(e, t);
  var r = hu(e, e === Ke ? Ze : 0);
  if (r === 0)
    n !== null && c0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && c0(n), t === 1)
      e.tag === 0 ? XE(n1.bind(null, e)) : Aw(n1.bind(null, e)), QE(function() {
        (me & 6) === 0 && Lr();
      }), n = null;
    else {
      switch (nw(r)) {
        case 1:
          n = Jh;
          break;
        case 4:
          n = Jx;
          break;
        case 16:
          n = pu;
          break;
        case 536870912:
          n = ew;
          break;
        default:
          n = pu;
      }
      n = Eb(n, xb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function xb(e, t) {
  if (qs = -1, Qs = 0, (me & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (ai() && e.callbackNode !== n)
    return null;
  var r = hu(e, e === Ke ? Ze : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Iu(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = bb();
    (Ke !== e || Ze !== t) && (On = null, ki = Fe() + 500, ro(e, t));
    do
      try {
        y5();
        break;
      } catch (a) {
        wb(e, a);
      }
    while (1);
    dm(), _u.current = i, me = o, He !== null ? t = 0 : (Ke = null, Ze = 0, t = qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = op(e), o !== 0 && (r = o, t = Ip(e, o))), t === 1)
      throw n = la, ro(e, 0), hr(e, r), kt(e, Fe()), n;
    if (t === 6)
      hr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !g5(o) && (t = Iu(e, r), t === 2 && (i = op(e), i !== 0 && (r = i, t = Ip(e, i))), t === 1))
        throw n = la, ro(e, 0), hr(e, r), kt(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          qr(e, xt, On);
          break;
        case 3:
          if (hr(e, r), (r & 130023424) === r && (t = Am + 500 - Fe(), 10 < t)) {
            if (hu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              dt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = dp(qr.bind(null, e, xt, On), t);
            break;
          }
          qr(e, xt, On);
          break;
        case 4:
          if (hr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - cn(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * m5(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = dp(qr.bind(null, e, xt, On), r);
            break;
          }
          qr(e, xt, On);
          break;
        case 5:
          qr(e, xt, On);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return kt(e, Fe()), e.callbackNode === n ? xb.bind(null, e) : null;
}
function Ip(e, t) {
  var n = Rl;
  return e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256), e = Iu(e, t), e !== 2 && (t = xt, xt = n, t !== null && Op(t)), e;
}
function Op(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function g5(e) {
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
function hr(e, t) {
  for (t &= ~Em, t &= ~yc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - cn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function n1(e) {
  if ((me & 6) !== 0)
    throw Error(j(327));
  ai();
  var t = hu(e, 0);
  if ((t & 1) === 0)
    return kt(e, Fe()), null;
  var n = Iu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = op(e);
    r !== 0 && (t = r, n = Ip(e, r));
  }
  if (n === 1)
    throw n = la, ro(e, 0), hr(e, t), kt(e, Fe()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qr(e, xt, On), kt(e, Fe()), null;
}
function Pm(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && (ki = Fe() + 500, hc && Lr());
  }
}
function po(e) {
  gr !== null && gr.tag === 0 && (me & 6) === 0 && ai();
  var t = me;
  me |= 1;
  var n = Wt.transition, r = we;
  try {
    if (Wt.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, Wt.transition = n, me = t, (me & 6) === 0 && Lr();
  }
}
function _m() {
  $t = Jo.current, Pe(Jo);
}
function ro(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, qE(n)), He !== null)
    for (n = He.return; n !== null; ) {
      var r = n;
      switch (um(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && xu();
          break;
        case 3:
          bi(), Pe(bt), Pe(it), ym();
          break;
        case 5:
          vm(r);
          break;
        case 4:
          bi();
          break;
        case 13:
          Pe(Te);
          break;
        case 19:
          Pe(Te);
          break;
        case 10:
          pm(r.type._context);
          break;
        case 22:
        case 23:
          _m();
      }
      n = n.return;
    }
  if (Ke = e, He = e = _r(e.current, null), Ze = $t = t, qe = 0, la = null, Em = yc = fo = 0, xt = Rl = null, to !== null) {
    for (t = 0; t < to.length; t++)
      if (n = to[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    to = null;
  }
  return e;
}
function wb(e, t) {
  do {
    var n = He;
    try {
      if (dm(), Vs.current = Pu, Au) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Au = !1;
      }
      if (co = 0, Qe = We = Ie = null, Pl = !1, ra = 0, $m.current = null, n === null || n.return === null) {
        qe = 1, la = t, He = null;
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
          var g = V0(l);
          if (g !== null) {
            g.flags &= -257, U0(g, l, a, i, t), g.mode & 1 && H0(i, u, t), t = g, s = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else
              h.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              H0(i, u, t), Rm();
              break e;
            }
            s = Error(j(426));
          }
        } else if (Re && a.mode & 1) {
          var w = V0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), U0(w, l, a, i, t), cm(Si(s, a));
            break e;
          }
        }
        i = s = Si(s, a), qe !== 4 && (qe = 2), Rl === null ? Rl = [i] : Rl.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = rb(i, s, t);
              M0(i, p);
              break e;
            case 1:
              a = s;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Ar === null || !Ar.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = ob(i, a, t);
                M0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kb(n);
    } catch (A) {
      t = A, He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function bb() {
  var e = _u.current;
  return _u.current = Pu, e === null ? Pu : e;
}
function Rm() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Ke === null || (fo & 268435455) === 0 && (yc & 268435455) === 0 || hr(Ke, Ze);
}
function Iu(e, t) {
  var n = me;
  me |= 2;
  var r = bb();
  (Ke !== e || Ze !== t) && (On = null, ro(e, t));
  do
    try {
      v5();
      break;
    } catch (o) {
      wb(e, o);
    }
  while (1);
  if (dm(), me = n, _u.current = r, He !== null)
    throw Error(j(261));
  return Ke = null, Ze = 0, qe;
}
function v5() {
  for (; He !== null; )
    Sb(He);
}
function y5() {
  for (; He !== null && !V$(); )
    Sb(He);
}
function Sb(e) {
  var t = $b(e.alternate, e, $t);
  e.memoizedProps = e.pendingProps, t === null ? kb(e) : He = t, $m.current = null;
}
function kb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = c5(n, t, $t), n !== null) {
        He = n;
        return;
      }
    } else {
      if (n = f5(n, t), n !== null) {
        n.flags &= 32767, He = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        qe = 6, He = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      He = t;
      return;
    }
    He = t = e;
  } while (t !== null);
  qe === 0 && (qe = 5);
}
function qr(e, t, n) {
  var r = we, o = Wt.transition;
  try {
    Wt.transition = null, we = 1, x5(e, t, n, r);
  } finally {
    Wt.transition = o, we = r;
  }
  return null;
}
function x5(e, t, n, r) {
  do
    ai();
  while (gr !== null);
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
  if (J$(e, i), e === Ke && (He = Ke = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ds || (ds = !0, Eb(pu, function() {
    return ai(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = Wt.transition, Wt.transition = null;
    var l = we;
    we = 1;
    var a = me;
    me |= 4, $m.current = null, p5(e, n), vb(n, e), zE(cp), mu = !!up, cp = up = null, e.current = n, h5(n), U$(), me = a, we = l, Wt.transition = i;
  } else
    e.current = n;
  if (ds && (ds = !1, gr = e, Tu = o), i = e.pendingLanes, i === 0 && (Ar = null), Q$(n.stateNode), kt(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ru)
    throw Ru = !1, e = Rp, Rp = null, e;
  return (Tu & 1) !== 0 && e.tag !== 0 && ai(), i = e.pendingLanes, (i & 1) !== 0 ? e === Tp ? Tl++ : (Tl = 0, Tp = e) : Tl = 0, Lr(), null;
}
function ai() {
  if (gr !== null) {
    var e = nw(Tu), t = Wt.transition, n = we;
    try {
      if (Wt.transition = null, we = 16 > e ? 16 : e, gr === null)
        var r = !1;
      else {
        if (e = gr, gr = null, Tu = 0, (me & 6) !== 0)
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
                      _l(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, K = f;
                  else
                    for (; K !== null; ) {
                      c = K;
                      var d = c.sibling, g = c.return;
                      if (hb(c), c === u) {
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
                      _l(9, i, i.return);
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
                        vc(9, a);
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
        if (me = o, Lr(), kn && typeof kn.onPostCommitFiberRoot == "function")
          try {
            kn.onPostCommitFiberRoot(uc, e);
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
function r1(e, t, n) {
  t = Si(n, t), t = rb(e, t, 1), e = Er(e, t, 1), t = dt(), e !== null && (Ta(e, 1, t), kt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3)
    r1(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        r1(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ar === null || !Ar.has(r))) {
          e = Si(n, e), e = ob(t, e, 1), t = Er(t, e, 1), e = dt(), t !== null && (Ta(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function w5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & n, Ke === e && (Ze & n) === n && (qe === 4 || qe === 3 && (Ze & 130023424) === Ze && 500 > Fe() - Am ? ro(e, 0) : Em |= n), kt(e, t);
}
function Cb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ns, ns <<= 1, (ns & 130023424) === 0 && (ns = 4194304)));
  var n = dt();
  e = Un(e, t), e !== null && (Ta(e, t, n), kt(e, n));
}
function b5(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Cb(e, n);
}
function S5(e, t) {
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
  r !== null && r.delete(t), Cb(e, n);
}
var $b;
$b = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, u5(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Re && (t.flags & 1048576) !== 0 && Pw(t, Su, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ws(e, t), e = t.pendingProps;
      var o = yi(t, it.current);
      li(t, n), o = wm(null, t, r, e, o, n);
      var i = bm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, wu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, mm(t), o.updater = mc, t.stateNode = o, o._reactInternals = t, xp(t, r, e, n), t = Sp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && sm(t), ct(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ws(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = C5(r), e = tn(r, e), o) {
          case 0:
            t = bp(null, t, r, e, n);
            break e;
          case 1:
            t = Q0(null, t, r, e, n);
            break e;
          case 11:
            t = W0(null, t, r, e, n);
            break e;
          case 14:
            t = q0(null, t, r, tn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), bp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), Q0(e, t, r, o, n);
    case 3:
      e: {
        if (sb(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Iw(e, t), $u(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Si(Error(j(423)), t), t = G0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Si(Error(j(424)), t), t = G0(e, t, r, n, o);
            break e;
          } else
            for (Et = $r(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, rn = null, n = Dw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xi(), r === o) {
            t = Wn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Lw(t), e === null && gp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, fp(r, o) ? l = null : i !== null && fp(r, i) && (t.flags |= 32), ab(e, t), ct(e, t, l, n), t.child;
    case 6:
      return e === null && gp(t), null;
    case 13:
      return ub(e, t, n);
    case 4:
      return gm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wi(t, null, r, n) : ct(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), W0(e, t, r, o, n);
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, $e(ku, r._currentValue), r._currentValue = l, i !== null)
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
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), vp(
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
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), vp(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, li(t, n), o = qt(o), r = r(o), t.flags |= 1, ct(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = tn(r, t.pendingProps), o = tn(r.type, o), q0(e, t, r, o, n);
    case 15:
      return ib(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), Ws(e, t), t.tag = 1, St(r) ? (e = !0, wu(t)) : e = !1, li(t, n), Nw(t, r, o), xp(t, r, o, n), Sp(null, t, r, !0, e, n);
    case 19:
      return cb(e, t, n);
    case 22:
      return lb(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Eb(e, t) {
  return Zx(e, t);
}
function k5(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, n, r) {
  return new k5(e, t, n, r);
}
function Tm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function C5(e) {
  if (typeof e == "function")
    return Tm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yh)
      return 11;
    if (e === Xh)
      return 14;
  }
  return 2;
}
function _r(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Gs(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Tm(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Vo:
          return oo(n.children, o, i, t);
        case Kh:
          l = 8, o |= 8;
          break;
        case Vd:
          return e = Ut(12, n, t, o | 2), e.elementType = Vd, e.lanes = i, e;
        case Ud:
          return e = Ut(13, n, t, o), e.elementType = Ud, e.lanes = i, e;
        case Wd:
          return e = Ut(19, n, t, o), e.elementType = Wd, e.lanes = i, e;
        case Mx:
          return xc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ox:
                l = 10;
                break e;
              case Nx:
                l = 9;
                break e;
              case Yh:
                l = 11;
                break e;
              case Xh:
                l = 14;
                break e;
              case fr:
                l = 16, r = null;
                break e;
            }
          throw Error(j(130, e == null ? e : typeof e, ""));
      }
  return t = Ut(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function oo(e, t, n, r) {
  return e = Ut(7, e, r, t), e.lanes = n, e;
}
function xc(e, t, n, r) {
  return e = Ut(22, e, r, t), e.elementType = Mx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Df(e, t, n) {
  return e = Ut(6, e, null, t), e.lanes = n, e;
}
function Lf(e, t, n) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $5(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vf(0), this.expirationTimes = vf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Im(e, t, n, r, o, i, l, a, s) {
  return e = new $5(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mm(i), e;
}
function E5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ho, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ab(e) {
  if (!e)
    return Or;
  e = e._reactInternals;
  e: {
    if (bo(e) !== e || e.tag !== 1)
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
      return Ew(e, n, t);
  }
  return t;
}
function Pb(e, t, n, r, o, i, l, a, s) {
  return e = Im(n, r, !0, e, o, i, l, a, s), e.context = Ab(null), n = e.current, r = dt(), o = Pr(n), i = jn(r, o), i.callback = t != null ? t : null, Er(n, i, o), e.current.lanes = o, Ta(e, o, r), kt(e, r), e;
}
function wc(e, t, n, r) {
  var o = t.current, i = dt(), l = Pr(o);
  return n = Ab(n), t.context === null ? t.context = n : t.pendingContext = n, t = jn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Er(o, t, l), e !== null && (fn(e, o, l, i), Hs(e, o, l)), l;
}
function Ou(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function o1(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Om(e, t) {
  o1(e, t), (e = e.alternate) && o1(e, t);
}
function A5() {
  return null;
}
var _b = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Nm(e) {
  this._internalRoot = e;
}
bc.prototype.render = Nm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  wc(e, t, null, null);
};
bc.prototype.unmount = Nm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    po(function() {
      wc(null, e, null, null);
    }), t[Vn] = null;
  }
};
function bc(e) {
  this._internalRoot = e;
}
bc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = iw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pr.length && t !== 0 && t < pr[n].priority; n++)
      ;
    pr.splice(n, 0, e), n === 0 && aw(e);
  }
};
function Mm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function i1() {
}
function P5(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Ou(l);
        i.call(u);
      };
    }
    var l = Pb(t, r, e, 0, null, !1, !1, "", i1);
    return e._reactRootContainer = l, e[Vn] = l.current, Zl(e.nodeType === 8 ? e.parentNode : e), po(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Ou(s);
      a.call(u);
    };
  }
  var s = Im(e, 0, !1, null, null, !1, !1, "", i1);
  return e._reactRootContainer = s, e[Vn] = s.current, Zl(e.nodeType === 8 ? e.parentNode : e), po(function() {
    wc(t, s, n, r);
  }), s;
}
function kc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var s = Ou(l);
        a.call(s);
      };
    }
    wc(t, l, e, o);
  } else
    l = P5(n, t, e, o, r);
  return Ou(l);
}
rw = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vl(t.pendingLanes);
        n !== 0 && (em(t, n | 1), kt(t, Fe()), (me & 6) === 0 && (ki = Fe() + 500, Lr()));
      }
      break;
    case 13:
      po(function() {
        var r = Un(e, 1);
        if (r !== null) {
          var o = dt();
          fn(r, e, 1, o);
        }
      }), Om(e, 1);
  }
};
tm = function(e) {
  if (e.tag === 13) {
    var t = Un(e, 134217728);
    if (t !== null) {
      var n = dt();
      fn(t, e, 134217728, n);
    }
    Om(e, 134217728);
  }
};
ow = function(e) {
  if (e.tag === 13) {
    var t = Pr(e), n = Un(e, t);
    if (n !== null) {
      var r = dt();
      fn(n, e, t, r);
    }
    Om(e, t);
  }
};
iw = function() {
  return we;
};
lw = function(e, t) {
  var n = we;
  try {
    return we = e, t();
  } finally {
    we = n;
  }
};
tp = function(e, t, n) {
  switch (t) {
    case "input":
      if (Gd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pc(r);
            if (!o)
              throw Error(j(90));
            Lx(r), Gd(r, o);
          }
        }
      }
      break;
    case "textarea":
      zx(e, n);
      break;
    case "select":
      t = n.value, t != null && ni(e, !!n.multiple, t, !1);
  }
};
qx = Pm;
Qx = po;
var _5 = { usingClientEntryPoint: !1, Events: [Oa, Qo, pc, Ux, Wx, Pm] }, nl = { findFiberByHostInstance: eo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, R5 = { bundleType: nl.bundleType, version: nl.version, rendererPackageName: nl.rendererPackageName, rendererConfig: nl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Yx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: nl.findFiberByHostInstance || A5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ps.isDisabled && ps.supportsFiber)
    try {
      uc = ps.inject(R5), kn = ps;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _5;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mm(t))
    throw Error(j(200));
  return E5(e, t, null, n);
};
It.createRoot = function(e, t) {
  if (!Mm(e))
    throw Error(j(299));
  var n = !1, r = "", o = _b;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Im(e, 1, !1, null, null, n, !1, r, o), e[Vn] = t.current, Zl(e.nodeType === 8 ? e.parentNode : e), new Nm(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Yx(t), e = e === null ? null : e.stateNode, e;
};
It.flushSync = function(e) {
  return po(e);
};
It.hydrate = function(e, t, n) {
  if (!Sc(t))
    throw Error(j(200));
  return kc(null, e, t, !0, n);
};
It.hydrateRoot = function(e, t, n) {
  if (!Mm(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = _b;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Pb(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Vn] = t.current, Zl(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new bc(t);
};
It.render = function(e, t, n) {
  if (!Sc(t))
    throw Error(j(200));
  return kc(null, e, t, !1, n);
};
It.unmountComponentAtNode = function(e) {
  if (!Sc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (po(function() {
    kc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Vn] = null;
    });
  }), !0) : !1;
};
It.unstable_batchedUpdates = Pm;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return kc(e, t, n, !1, r);
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
const Rb = /* @__PURE__ */ zh(Gt.exports), Ci = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(I5);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ m.exports.createElement(Np, Z({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Np, Z({}, r, {
    ref: t
  }), n);
});
Ci.displayName = "Slot";
const Np = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...O5(r, n.props),
    ref: Px(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Np.displayName = "SlotClone";
const T5 = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function I5(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === T5;
}
function O5(e, t) {
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
const N5 = [
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
], Ve = N5.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? Ci : t;
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
function M5(e, t) {
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
function D5(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const Mp = "dismissableLayer.update", L5 = "dismissableLayer.pointerDownOutside", F5 = "dismissableLayer.focusOutside";
let l1;
const z5 = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Dm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: a, onDismiss: s, ...u } = e, c = m.exports.useContext(z5), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), v = Ce(
    t,
    ($) => d($)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = B5(($) => {
    const P = $.target, R = [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    );
    !A || R || (i == null || i($), a == null || a($), $.defaultPrevented || s == null || s());
  }, g), E = j5(($) => {
    const P = $.target;
    [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    ) || (l == null || l($), a == null || a($), $.defaultPrevented || s == null || s());
  }, g);
  return D5(($) => {
    x === c.layers.size - 1 && (o == null || o($), !$.defaultPrevented && s && ($.preventDefault(), s()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (l1 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), a1(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = l1);
      };
  }, [
    f,
    g,
    r,
    c
  ]), m.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), a1());
  }, [
    f,
    c
  ]), m.exports.useEffect(() => {
    const $ = () => h({});
    return document.addEventListener(Mp, $), () => document.removeEventListener(Mp, $);
  }, []), /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, u, {
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
function B5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          Tb(L5, n, u, {
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
function j5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rt(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Tb(F5, n, {
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
function a1() {
  const e = new CustomEvent(Mp);
  document.dispatchEvent(e);
}
function Tb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? M5(o, i) : o.dispatchEvent(i);
}
let Ff = 0;
function Lm() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : s1()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : s1()), Ff++, () => {
      Ff === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Ff--;
    };
  }, []);
}
function s1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const zf = "focusScope.autoFocusOnMount", Bf = "focusScope.autoFocusOnUnmount", u1 = {
  bubbles: !1,
  cancelable: !0
}, Fm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
        a.contains(b) ? f.current = b : Qr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Qr(f.current, {
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
      f1.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(zf, u1);
        a.addEventListener(zf, u), a.dispatchEvent(p), p.defaultPrevented || (H5(Q5(Ib(a)), {
          select: !0
        }), document.activeElement === v && Qr(a));
      }
      return () => {
        a.removeEventListener(zf, u), setTimeout(() => {
          const p = new CustomEvent(Bf, u1);
          a.addEventListener(Bf, c), a.dispatchEvent(p), p.defaultPrevented || Qr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(Bf, c), f1.remove(g);
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
      const y = v.currentTarget, [x, b] = V5(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Qr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Qr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function H5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function V5(e) {
  const t = Ib(e), n = c1(t, e), r = c1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Ib(e) {
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
function c1(e, t) {
  for (const n of e)
    if (!U5(n, {
      upTo: t
    }))
      return n;
}
function U5(e, { upTo: t }) {
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
function W5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && W5(e) && t && e.select();
  }
}
const f1 = q5();
function q5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = d1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = d1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function d1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Q5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Xe = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, G5 = Ax["useId".toString()] || (() => {
});
let K5 = 0;
function si(e) {
  const [t, n] = m.exports.useState(G5());
  return Xe(() => {
    e || n(
      (r) => r != null ? r : String(K5++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function So(e) {
  return e.split("-")[0];
}
function Ma(e) {
  return e.split("-")[1];
}
function Li(e) {
  return ["top", "bottom"].includes(So(e)) ? "x" : "y";
}
function zm(e) {
  return e === "y" ? "height" : "width";
}
function p1(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, a = Li(t), s = zm(a), u = r[s] / 2 - o[s] / 2, c = So(t), f = a === "x";
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
  switch (Ma(t)) {
    case "start":
      d[a] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[a] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const Y5 = async (e, t, n) => {
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
  } = p1(s, r, a), f = r, d = {}, g = 0;
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
      } = p1(s, f, a)), h = -1;
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
function X5(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ob(e) {
  return typeof e != "number" ? X5(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nu(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function aa(e, t) {
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
  } = t, h = Ob(g), w = a[d ? f === "floating" ? "reference" : "floating" : f], p = Nu(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: s
  })), y = Nu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Z5 = Math.min, Gr = Math.max;
function Dp(e, t, n) {
  return Gr(e, Z5(t, n));
}
const h1 = (e) => ({
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
    const u = Ob(r), c = {
      x: o,
      y: i
    }, f = Li(l), d = Ma(l), g = zm(f), h = await s.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = a.reference[g] + a.reference[f] - c[f] - a.floating[g], y = c[f] - a.reference[f], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = a.floating[g]);
    const A = p / 2 - y / 2, S = u[v], E = b - h[g] - u[w], $ = b / 2 - h[g] / 2 + A, P = Dp(S, $, E), N = (d === "start" ? u[v] : u[w]) > 0 && $ !== P && a.reference[g] <= a.floating[g] ? $ < S ? S - $ : E - $ : 0;
    return {
      [f]: c[f] - N,
      data: {
        [f]: P,
        centerOffset: $ - P
      }
    };
  }
}), J5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => J5[t]);
}
function eA(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ma(e), o = Li(e), i = zm(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Mu(l)), {
    main: l,
    cross: Mu(l)
  };
}
const tA = {
  start: "end",
  end: "start"
};
function m1(e) {
  return e.replace(/start|end/g, (t) => tA[t]);
}
const nA = ["top", "right", "bottom", "left"];
function rA(e) {
  const t = Mu(e);
  return [m1(e), t, m1(t)];
}
const oA = function(e) {
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
      } = e, v = So(r), p = f || (v === l || !g ? [Mu(l)] : rA(l)), y = [l, ...p], x = await aa(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: R
        } = eA(r, i, await (a.isRTL == null ? void 0 : a.isRTL(s.floating)));
        b.push(x[P], x[R]);
      }
      if (A = [...A, {
        placement: r,
        overflows: b
      }], !b.every((P) => P <= 0)) {
        var S, E;
        const P = ((S = (E = o.flip) == null ? void 0 : E.index) != null ? S : 0) + 1, R = y[P];
        if (R)
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: R
            }
          };
        let T = "bottom";
        switch (d) {
          case "bestFit": {
            var $;
            const N = ($ = A.map((D) => [D, D.overflows.filter((z) => z > 0).reduce((z, F) => z + F, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : $[0].placement;
            N && (T = N);
            break;
          }
          case "initialPlacement":
            T = l;
            break;
        }
        if (r !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function g1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function v1(e) {
  return nA.some((t) => e[t] >= 0);
}
const iA = function(e) {
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
          const i = await aa(r, {
            ...n,
            elementContext: "reference"
          }), l = g1(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: v1(l)
            }
          };
        }
        case "escaped": {
          const i = await aa(r, {
            ...n,
            altBoundary: !0
          }), l = g1(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: v1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function lA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = So(n), a = Ma(n), s = Li(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = typeof t == "function" ? t(e) : t;
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
const aA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await lA(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Nb(e) {
  return e === "x" ? "y" : "x";
}
const sA = function(e) {
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
      }, c = await aa(t, s), f = Li(So(o)), d = Nb(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = Dp(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = Dp(y, h, x);
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
}, uA = function(e) {
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
      }, f = Li(o), d = Nb(f);
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
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(So(o)), E = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), $ = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < E ? h = E : h > $ && (h = $);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, cA = function(e) {
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
      } = e, s = await aa(t, a), u = So(n), c = Ma(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Gr(s.left, 0), h = Gr(s.right, 0), v = Gr(s.top, 0), w = Gr(s.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Gr(s.top, s.bottom)) : s[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || h !== 0 ? g + h : Gr(s.left, s.right)) : s[d])
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
function Mb(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Yn(e) {
  if (e == null)
    return window;
  if (!Mb(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Da(e) {
  return Yn(e).getComputedStyle(e);
}
function qn(e) {
  return Mb(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Db() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function $n(e) {
  return e instanceof Yn(e).HTMLElement;
}
function Nr(e) {
  return e instanceof Yn(e).Element;
}
function fA(e) {
  return e instanceof Yn(e).Node;
}
function Bm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Yn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Cc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Da(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function dA(e) {
  return ["table", "td", "th"].includes(qn(e));
}
function Lb(e) {
  const t = /firefox/i.test(Db()), n = Da(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function Fb() {
  return !/^((?!chrome|android).)*safari/i.test(Db());
}
const y1 = Math.min, Il = Math.max, Du = Math.round;
function Qn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect();
  let s = 1, u = 1;
  t && $n(e) && (s = e.offsetWidth > 0 && Du(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Du(a.height) / e.offsetHeight || 1);
  const c = Nr(e) ? Yn(e) : window, f = !Fb() && n, d = (a.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / s, g = (a.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = a.width / s, v = a.height / u;
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
function Fr(e) {
  return ((fA(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $c(e) {
  return Nr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function zb(e) {
  return Qn(Fr(e)).left + $c(e).scrollLeft;
}
function pA(e) {
  const t = Qn(e);
  return Du(t.width) !== e.offsetWidth || Du(t.height) !== e.offsetHeight;
}
function hA(e, t, n) {
  const r = $n(t), o = Fr(t), i = Qn(
    e,
    r && pA(t),
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
    if ((qn(t) !== "body" || Cc(o)) && (l = $c(t)), $n(t)) {
      const s = Qn(t, !0);
      a.x = s.x + t.clientLeft, a.y = s.y + t.clientTop;
    } else
      o && (a.x = zb(o));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function Bb(e) {
  return qn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Bm(e) ? e.host : null) || Fr(e);
}
function x1(e) {
  return !$n(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function mA(e) {
  let t = Bb(e);
  for (Bm(t) && (t = t.host); $n(t) && !["html", "body"].includes(qn(t)); ) {
    if (Lb(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Lp(e) {
  const t = Yn(e);
  let n = x1(e);
  for (; n && dA(n) && getComputedStyle(n).position === "static"; )
    n = x1(n);
  return n && (qn(n) === "html" || qn(n) === "body" && getComputedStyle(n).position === "static" && !Lb(n)) ? t : n || mA(e) || t;
}
function w1(e) {
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
function gA(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = $n(n), i = Fr(n);
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
  if ((o || !o && r !== "fixed") && ((qn(n) !== "body" || Cc(i)) && (l = $c(n)), $n(n))) {
    const s = Qn(n, !0);
    a.x = s.x + n.clientLeft, a.y = s.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + a.x,
    y: t.y - l.scrollTop + a.y
  };
}
function vA(e, t) {
  const n = Yn(e), r = Fr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Fb();
    (u || !u && t === "fixed") && (a = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function yA(e) {
  var t;
  const n = Fr(e), r = $c(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Il(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Il(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + zb(e);
  const s = -r.scrollTop;
  return Da(o || n).direction === "rtl" && (a += Il(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function jb(e) {
  const t = Bb(e);
  return ["html", "body", "#document"].includes(qn(t)) ? e.ownerDocument.body : $n(t) && Cc(t) ? t : jb(t);
}
function Lu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = jb(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Yn(r), l = o ? [i].concat(i.visualViewport || [], Cc(r) ? r : []) : r, a = t.concat(l);
  return o ? a : a.concat(Lu(l));
}
function xA(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Bm(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function wA(e, t) {
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
function b1(e, t, n) {
  return t === "viewport" ? Nu(vA(e, n)) : Nr(t) ? wA(t, n) : Nu(yA(Fr(e)));
}
function bA(e) {
  const t = Lu(e), r = ["absolute", "fixed"].includes(Da(e).position) && $n(e) ? Lp(e) : e;
  return Nr(r) ? t.filter((o) => Nr(o) && xA(o, r) && qn(o) !== "body") : [];
}
function SA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? bA(t) : [].concat(n), r], a = l[0], s = l.reduce((u, c) => {
    const f = b1(t, c, o);
    return u.top = Il(f.top, u.top), u.right = y1(f.right, u.right), u.bottom = y1(f.bottom, u.bottom), u.left = Il(f.left, u.left), u;
  }, b1(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const kA = {
  getClippingRect: SA,
  convertOffsetParentRelativeRectToViewportRelativeRect: gA,
  isElement: Nr,
  getDimensions: w1,
  getOffsetParent: Lp,
  getDocumentElement: Fr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: hA(t, Lp(n), r),
      floating: {
        ...w1(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Da(e).direction === "rtl"
};
function CA(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: a = !1
  } = r, s = o && !a, u = i && !a, c = s || u ? [...Nr(e) ? Lu(e) : [], ...Lu(t)] : [];
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
    }), Nr(e) && !a && f.observe(e), f.observe(t);
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
const $A = (e, t, n) => Y5(e, t, {
  platform: kA,
  ...n
});
var Fp = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function zp(e, t) {
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
        if (!zp(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !zp(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function EA(e) {
  const t = m.exports.useRef(e);
  return Fp(() => {
    t.current = e;
  }), t;
}
function AA(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), a = EA(o), s = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
  zp(f == null ? void 0 : f.map((x) => {
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
    !i.current || !l.current || $A(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && Gt.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  Fp(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  Fp(() => (h.current = !0, () => {
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
const PA = (e) => {
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
      return r(t) ? t.current != null ? h1({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? h1({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function _A(e) {
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
const Hb = "Popper", [jm, Ec] = Ni(Hb), [RA, Vb] = jm(Hb), TA = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(RA, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, IA = "PopperAnchor", OA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Vb(IA, n), l = m.exports.useRef(null), a = Ce(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: a
  }));
}), Fu = "PopperContent", [NA, Qz] = jm(Fu), [MA, DA] = jm(Fu, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), LA = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, a, s, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, E = Vb(Fu, c), [$, P] = m.exports.useState(null), R = Ce(
    t,
    (or) => P(or)
  ), [T, N] = m.exports.useState(null), D = _A(T), z = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0, F = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0, _ = f + (g !== "center" ? "-" + g : ""), H = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, M = Array.isArray(w) ? w : [
    w
  ], I = M.length > 0, O = {
    padding: H,
    boundary: M.filter(zA),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: ne, y: ae, placement: ee, middlewareData: Q, update: ie } = AA({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: CA,
    middleware: [
      BA(),
      aA({
        mainAxis: d + F,
        alignmentAxis: h
      }),
      b ? sA({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? uA() : void 0,
        ...O
      }) : void 0,
      T ? PA({
        element: T,
        padding: v
      }) : void 0,
      b ? oA({
        ...O
      }) : void 0,
      cA({
        ...O,
        apply: ({ elements: or, availableWidth: sf, availableHeight: uf }) => {
          or.floating.style.setProperty("--radix-popper-available-width", `${sf}px`), or.floating.style.setProperty("--radix-popper-available-height", `${uf}px`);
        }
      }),
      jA({
        arrowWidth: z,
        arrowHeight: F
      }),
      x ? iA({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(FA)
  });
  Xe(() => {
    k(E.anchor);
  }, [
    k,
    E.anchor
  ]);
  const xe = ne !== null && ae !== null, [ue, de] = Ub(ee), se = rt(A);
  Xe(() => {
    xe && (se == null || se());
  }, [
    xe,
    se
  ]);
  const at = (o = Q.arrow) === null || o === void 0 ? void 0 : o.x, st = (i = Q.arrow) === null || i === void 0 ? void 0 : i.y, jr = ((l = Q.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [er, tr] = m.exports.useState();
  Xe(() => {
    $ && tr(window.getComputedStyle($).zIndex);
  }, [
    $
  ]);
  const { hasParent: Ya, positionUpdateFns: nr } = DA(Fu, c), rr = !Ya;
  m.exports.useLayoutEffect(() => {
    if (!rr)
      return nr.add(ie), () => {
        nr.delete(ie);
      };
  }, [
    rr,
    nr,
    ie
  ]), Xe(() => {
    rr && xe && Array.from(nr).reverse().forEach(
      (or) => requestAnimationFrame(or)
    );
  }, [
    rr,
    xe,
    nr
  ]);
  const qi = {
    "data-side": ue,
    "data-align": de,
    ...S,
    ref: R,
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
      zIndex: er,
      ["--radix-popper-transform-origin"]: [
        (s = Q.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = Q.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ m.exports.createElement(NA, {
    scope: c,
    placedSide: ue,
    onArrowChange: N,
    arrowX: at,
    arrowY: st,
    shouldHideArrow: jr
  }, rr ? /* @__PURE__ */ m.exports.createElement(MA, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: nr
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, qi)) : /* @__PURE__ */ m.exports.createElement(Ve.div, qi)));
});
function FA(e) {
  return e !== void 0;
}
function zA(e) {
  return e !== null;
}
const BA = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), jA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, v] = Ub(a), w = {
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
function Ub(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Wb = TA, qb = OA, Qb = LA, Gb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Rb.createPortal(/* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: t
  })), r) : null;
});
function HA(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const zr = (e) => {
  const { present: t, children: n } = e, r = VA(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
zr.displayName = "Presence";
function VA(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = HA(l, {
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
    const u = hs(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), Xe(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = hs(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Xe(() => {
    if (t) {
      const u = (f) => {
        const g = hs(r.current).includes(f.animationName);
        f.target === t && g && Gt.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = hs(r.current));
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
function hs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function zu({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = UA({
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
function UA({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = rt(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var WA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _o = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), gs = {}, jf = 0, Kb = function(e) {
  return e && (e.host || Kb(e.parentNode));
}, qA = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Kb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, QA = function(e, t, n, r) {
  var o = qA(t, Array.isArray(e) ? e : [e]);
  gs[n] || (gs[n] = /* @__PURE__ */ new WeakMap());
  var i = gs[n], l = [], a = /* @__PURE__ */ new Set(), s = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", v = (_o.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        _o.set(d, v), i.set(d, w), l.push(d), v === 1 && h && ms.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), a.clear(), jf++, function() {
    l.forEach(function(f) {
      var d = _o.get(f) - 1, g = i.get(f) - 1;
      _o.set(f, d), i.set(f, g), d || (ms.has(f) || f.removeAttribute(r), ms.delete(f)), g || f.removeAttribute(n);
    }), jf--, jf || (_o = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), gs = {});
  };
}, Hm = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || WA(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), QA(r, o, n, "aria-hidden")) : function() {
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
function Yb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function GA(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ks = "right-scroll-bar-position", Ys = "width-before-scroll-bar", KA = "with-scroll-bars-hidden", YA = "--removed-body-scroll-bar-size";
function XA(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ZA(e, t) {
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
function JA(e, t) {
  return ZA(t || null, function(n) {
    return e.forEach(function(r) {
      return XA(r, n);
    });
  });
}
var Ac = { exports: {} }, Pc = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e3 = m.exports, t3 = Symbol.for("react.element"), n3 = Symbol.for("react.fragment"), r3 = Object.prototype.hasOwnProperty, o3 = e3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i3 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xb(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    r3.call(t, r) && !i3.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: t3, type: e, key: i, ref: l, props: o, _owner: o3.current };
}
Pc.Fragment = n3;
Pc.jsx = Xb;
Pc.jsxs = Xb;
(function(e) {
  e.exports = Pc;
})(Ac);
const Xn = Ac.exports.Fragment, B = Ac.exports.jsx, ce = Ac.exports.jsxs;
function l3(e) {
  return e;
}
function a3(e, t) {
  t === void 0 && (t = l3);
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
function s3(e) {
  e === void 0 && (e = {});
  var t = a3(null);
  return t.options = bn({ async: !0, ssr: !1 }, e), t;
}
var Zb = function(e) {
  var t = e.sideCar, n = Yb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...bn({}, n)
  });
};
Zb.isSideCarExport = !0;
function u3(e, t) {
  return e.useMedium(t), Zb;
}
var Jb = s3(), Hf = function() {
}, _c = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Hf,
    onWheelCapture: Hf,
    onTouchMoveCapture: Hf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = Yb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = JA([n, t]), A = bn(bn({}, y), o);
  return /* @__PURE__ */ ce(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Jb,
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
_c.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_c.classNames = {
  fullWidth: Ys,
  zeroRight: Ks
};
var c3 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function f3() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = c3();
  return t && e.setAttribute("nonce", t), e;
}
function d3(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function p3(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var h3 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = f3()) && (d3(t, n), p3(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, m3 = function() {
  var e = h3();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, eS = function() {
  var e = m3(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, g3 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vf = function(e) {
  return parseInt(e || "", 10) || 0;
}, v3 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Vf(n), Vf(r), Vf(o)];
}, y3 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return g3;
  var t = v3(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, x3 = eS(), w3 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(KA, ` {
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
    `).concat(YA, ": ").concat(a, `px;
  }
`);
}, b3 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return y3(o);
  }, [o]);
  return /* @__PURE__ */ B(x3, {
    styles: w3(i, !t, o, n ? "" : "!important")
  });
}, Bp = !1;
if (typeof window < "u")
  try {
    var vs = Object.defineProperty({}, "passive", {
      get: function() {
        return Bp = !0, !0;
      }
    });
    window.addEventListener("test", vs, vs), window.removeEventListener("test", vs, vs);
  } catch {
    Bp = !1;
  }
var Ro = Bp ? { passive: !1 } : !1, S3 = function(e) {
  return e.tagName === "TEXTAREA";
}, tS = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !S3(e) && n[t] === "visible");
}, k3 = function(e) {
  return tS(e, "overflowY");
}, C3 = function(e) {
  return tS(e, "overflowX");
}, S1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = nS(e, n);
    if (r) {
      var o = rS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, $3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, E3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, nS = function(e, t) {
  return e === "v" ? k3(t) : C3(t);
}, rS = function(e, t) {
  return e === "v" ? $3(t) : E3(t);
}, A3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, P3 = function(e, t, n, r, o) {
  var i = A3(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = rS(e, a), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && nS(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ys = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, k1 = function(e) {
  return [e.deltaX, e.deltaY];
}, C1 = function(e) {
  return e && "current" in e ? e.current : e;
}, _3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, R3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, T3 = 0, To = [];
function I3(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(T3++)[0], i = m.exports.useState(function() {
    return eS();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = GA([e.lockRef.current], (e.shards || []).map(C1), !0).filter(Boolean);
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
    var p = ys(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = S1(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = S1(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return P3(P, w, v, P === "h" ? x : b, !0);
  }, []), s = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!To.length || To[To.length - 1] !== i)) {
      var p = "deltaY" in w ? k1(w) : ys(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && _3(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(C1).filter(Boolean).filter(function(A) {
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
    n.current = ys(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, k1(v), v.target, a(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, ys(v), v.target, a(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return To.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, Ro), document.addEventListener("touchmove", s, Ro), document.addEventListener("touchstart", c, Ro), function() {
      To = To.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, Ro), document.removeEventListener("touchmove", s, Ro), document.removeEventListener("touchstart", c, Ro);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ ce(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: R3(o)
    }) : null, g ? /* @__PURE__ */ B(b3, {
      gapMode: "margin"
    }) : null]
  });
}
const O3 = u3(Jb, I3);
var oS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(_c, {
    ...bn({}, e, {
      ref: t,
      sideCar: O3
    })
  });
});
oS.classNames = _c.classNames;
const iS = oS, lS = "Popover", [aS, Gz] = Ni(lS, [
  Ec
]), Vm = Ec(), [N3, La] = aS(lS), M3 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, a = Vm(t), s = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = zu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Wb, a, /* @__PURE__ */ m.exports.createElement(N3, {
    scope: t,
    contentId: si(),
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
}, D3 = "PopoverTrigger", L3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = La(D3, n), i = Vm(n), l = Ce(t, o.triggerRef), a = /* @__PURE__ */ m.exports.createElement(Ve.button, Z({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": uS(o.open)
  }, r, {
    ref: l,
    onClick: ye(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? a : /* @__PURE__ */ m.exports.createElement(qb, Z({
    asChild: !0
  }, i), a);
}), F3 = "PopoverPortal", [Kz, z3] = aS(F3, {
  forceMount: void 0
}), sa = "PopoverContent", B3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = z3(sa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = La(sa, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(zr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(j3, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(H3, Z({}, o, {
    ref: t
  })));
}), j3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = La(sa, e.__scopePopover), r = m.exports.useRef(null), o = Ce(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return Hm(l);
  }, []), /* @__PURE__ */ m.exports.createElement(iS, {
    as: Ci,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(sS, Z({}, e, {
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
}), H3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = La(sa, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(sS, Z({}, e, {
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
}), sS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = La(sa, n), g = Vm(n);
  return Lm(), /* @__PURE__ */ m.exports.createElement(Fm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(Dm, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(Qb, Z({
    "data-state": uS(d.open),
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
function uS(e) {
  return e ? "open" : "closed";
}
const V3 = M3, U3 = L3, W3 = B3, cS = "Dialog", [fS, Yz] = Ni(cS), [q3, Fa] = fS(cS), Q3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = m.exports.useRef(null), s = m.exports.useRef(null), [u = !1, c] = zu({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(q3, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: si(),
    titleId: si(),
    descriptionId: si(),
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
}, dS = "DialogPortal", [G3, K3] = fS(dS, {
  forceMount: void 0
}), Y3 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Fa(dS, t);
  return /* @__PURE__ */ m.exports.createElement(G3, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(zr, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(Gb, {
      asChild: !0,
      container: o
    }, l))
  ));
}, ua = "DialogContent", X3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = K3(ua, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Fa(ua, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(zr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(Z3, Z({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(J3, Z({}, o, {
    ref: t
  })));
}), Z3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Fa(ua, e.__scopeDialog), r = m.exports.useRef(null), o = Ce(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return Hm(i);
  }, []), /* @__PURE__ */ m.exports.createElement(pS, Z({}, e, {
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
}), J3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Fa(ua, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(pS, Z({}, e, {
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
}), pS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = Fa(ua, n), s = m.exports.useRef(null), u = Ce(t, s);
  return Lm(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Fm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(Dm, Z({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": eP(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function eP(e) {
  return e ? "open" : "closed";
}
const tP = Q3, nP = Y3, rP = X3;
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
function ui(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function oP(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function hS(...e) {
  return (t) => e.forEach(
    (n) => oP(n, t)
  );
}
function za(...e) {
  return m.exports.useCallback(hS(...e), e);
}
function iP(e, t = []) {
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
    lP(o, ...t)
  ];
}
function lP(...e) {
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
const jp = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, aP = Ax["useId".toString()] || (() => {
});
let sP = 0;
function Uf(e) {
  const [t, n] = m.exports.useState(aP());
  return jp(() => {
    e || n(
      (r) => r != null ? r : String(sP++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function ho(e) {
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
function uP({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = cP({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = ho(n), s = m.exports.useCallback((u) => {
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
function cP({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = ho(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
const Um = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(dP);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ m.exports.createElement(Hp, pt({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Hp, pt({}, r, {
    ref: t
  }), n);
});
Um.displayName = "Slot";
const Hp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...pP(r, n.props),
    ref: hS(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Hp.displayName = "SlotClone";
const fP = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function dP(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === fP;
}
function pP(e, t) {
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
const hP = [
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
], Rc = hP.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? Um : t;
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
function mP(e, t) {
  e && Gt.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function gP(e) {
  const t = ho(e);
  m.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Vp = "dismissableLayer.update", vP = "dismissableLayer.pointerDownOutside", yP = "dismissableLayer.focusOutside";
let $1;
const xP = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), wP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: a, ...s } = e, u = m.exports.useContext(xP), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = za(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = bP((S) => {
    const E = S.target, $ = [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    );
    !x || $ || (o == null || o(S), l == null || l(S), S.defaultPrevented || a == null || a());
  }), A = SP((S) => {
    const E = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains(E)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || a == null || a());
  });
  return gP((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($1 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), E1(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = $1);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), E1());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(Vp, S), () => document.removeEventListener(Vp, S);
  }, []), /* @__PURE__ */ m.exports.createElement(Rc.div, pt({}, s, {
    ref: g,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ui(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: ui(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: ui(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function bP(e) {
  const t = ho(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          mS(vP, t, s, {
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
function SP(e) {
  const t = ho(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && mS(yP, t, {
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
function E1() {
  const e = new CustomEvent(Vp);
  document.dispatchEvent(e);
}
function mS(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? mP(o, i) : o.dispatchEvent(i);
}
const Wf = "focusScope.autoFocusOnMount", qf = "focusScope.autoFocusOnUnmount", A1 = {
  bubbles: !1,
  cancelable: !0
}, kP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = m.exports.useState(null), u = ho(o), c = ho(i), f = m.exports.useRef(null), d = za(
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
        a.contains(b) ? f.current = b : Kr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Kr(f.current, {
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
      _1.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(Wf, A1);
        a.addEventListener(Wf, u), a.dispatchEvent(p), p.defaultPrevented || (CP(_P(gS(a)), {
          select: !0
        }), document.activeElement === v && Kr(a));
      }
      return () => {
        a.removeEventListener(Wf, u), setTimeout(() => {
          const p = new CustomEvent(qf, A1);
          a.addEventListener(qf, c), a.dispatchEvent(p), p.defaultPrevented || Kr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(qf, c), _1.remove(g);
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
      const y = v.currentTarget, [x, b] = $P(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Kr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Kr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ m.exports.createElement(Rc.div, pt({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function CP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Kr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function $P(e) {
  const t = gS(e), n = P1(t, e), r = P1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function gS(e) {
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
function P1(e, t) {
  for (const n of e)
    if (!EP(n, {
      upTo: t
    }))
      return n;
}
function EP(e, { upTo: t }) {
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
function AP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && AP(e) && t && e.select();
  }
}
const _1 = PP();
function PP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = R1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = R1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function R1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function _P(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const RP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Rb.createPortal(/* @__PURE__ */ m.exports.createElement(Rc.div, pt({}, o, {
    ref: t
  })), r) : null;
});
function TP(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Tc = (e) => {
  const { present: t, children: n } = e, r = IP(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = za(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
Tc.displayName = "Presence";
function IP(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = TP(l, {
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
    const u = xs(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), jp(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = xs(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), jp(() => {
    if (t) {
      const u = (f) => {
        const g = xs(r.current).includes(f.animationName);
        f.target === t && g && Gt.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = xs(r.current));
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
function xs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Qf = 0;
function OP() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : T1()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : T1()), Qf++, () => {
      Qf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Qf--;
    };
  }, []);
}
function T1() {
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
function vS(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function NP(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Xs = "right-scroll-bar-position", Zs = "width-before-scroll-bar", MP = "with-scroll-bars-hidden", DP = "--removed-body-scroll-bar-size";
function LP(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function FP(e, t) {
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
function zP(e, t) {
  return FP(t || null, function(n) {
    return e.forEach(function(r) {
      return LP(r, n);
    });
  });
}
function BP(e) {
  return e;
}
function jP(e, t) {
  t === void 0 && (t = BP);
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
function HP(e) {
  e === void 0 && (e = {});
  var t = jP(null);
  return t.options = Sn({ async: !0, ssr: !1 }, e), t;
}
var yS = function(e) {
  var t = e.sideCar, n = vS(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...Sn({}, n)
  });
};
yS.isSideCarExport = !0;
function VP(e, t) {
  return e.useMedium(t), yS;
}
var xS = HP(), Gf = function() {
}, Ic = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Gf,
    onWheelCapture: Gf,
    onTouchMoveCapture: Gf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = vS(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = zP([n, t]), A = Sn(Sn({}, y), o);
  return /* @__PURE__ */ ce(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: xS,
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
Ic.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ic.classNames = {
  fullWidth: Zs,
  zeroRight: Xs
};
var UP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function WP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = UP();
  return t && e.setAttribute("nonce", t), e;
}
function qP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function QP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var GP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = WP()) && (qP(t, n), QP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, KP = function() {
  var e = GP();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, wS = function() {
  var e = KP(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, YP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Kf = function(e) {
  return parseInt(e || "", 10) || 0;
}, XP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Kf(n), Kf(r), Kf(o)];
}, ZP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return YP;
  var t = XP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, JP = wS(), e_ = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(MP, ` {
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
  
  .`).concat(Xs, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Zs, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Xs, " .").concat(Xs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Zs, " .").concat(Zs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(DP, ": ").concat(a, `px;
  }
`);
}, t_ = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return ZP(o);
  }, [o]);
  return /* @__PURE__ */ B(JP, {
    styles: e_(i, !t, o, n ? "" : "!important")
  });
}, Up = !1;
if (typeof window < "u")
  try {
    var ws = Object.defineProperty({}, "passive", {
      get: function() {
        return Up = !0, !0;
      }
    });
    window.addEventListener("test", ws, ws), window.removeEventListener("test", ws, ws);
  } catch {
    Up = !1;
  }
var Io = Up ? { passive: !1 } : !1, n_ = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, r_ = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, I1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = bS(e, n);
    if (r) {
      var o = SS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, o_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, i_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, bS = function(e, t) {
  return e === "v" ? n_(t) : r_(t);
}, SS = function(e, t) {
  return e === "v" ? o_(t) : i_(t);
}, l_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, a_ = function(e, t, n, r, o) {
  var i = l_(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = SS(e, a), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && bS(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, bs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, O1 = function(e) {
  return [e.deltaX, e.deltaY];
}, N1 = function(e) {
  return e && "current" in e ? e.current : e;
}, s_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, u_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, c_ = 0, Oo = [];
function f_(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(c_++)[0], i = m.exports.useState(function() {
    return wS();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = NP([e.lockRef.current], (e.shards || []).map(N1), !0).filter(Boolean);
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
    var p = bs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, E = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var $ = I1(E, S);
    if (!$)
      return !0;
    if ($ ? A = E : (A = E === "v" ? "h" : "v", $ = I1(E, S)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return a_(P, w, v, P === "h" ? x : b, !0);
  }, []), s = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Oo.length || Oo[Oo.length - 1] !== i)) {
      var p = "deltaY" in w ? O1(w) : bs(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && s_(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(N1).filter(Boolean).filter(function(A) {
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
    n.current = bs(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, O1(v), v.target, a(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, bs(v), v.target, a(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Oo.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, Io), document.addEventListener("touchmove", s, Io), document.addEventListener("touchstart", c, Io), function() {
      Oo = Oo.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", s, Io), document.removeEventListener("touchmove", s, Io), document.removeEventListener("touchstart", c, Io);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ ce(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: u_(o)
    }) : null, g ? /* @__PURE__ */ B(t_, {
      gapMode: "margin"
    }) : null]
  });
}
const d_ = VP(xS, f_);
var kS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(Ic, {
    ...Sn({}, e, {
      ref: t,
      sideCar: d_
    })
  });
});
kS.classNames = Ic.classNames;
const p_ = kS;
var h_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, No = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), ks = {}, Yf = 0, m_ = function(e, t, n) {
  t === void 0 && (t = h_(e)), n === void 0 && (n = "data-aria-hidden");
  var r = Array.isArray(e) ? e : [e];
  ks[n] || (ks[n] = /* @__PURE__ */ new WeakMap());
  var o = ks[n], i = [], l = /* @__PURE__ */ new Set(), a = function(u) {
    !u || l.has(u) || (l.add(u), a(u.parentNode));
  };
  r.forEach(a);
  var s = function(u) {
    !u || r.indexOf(u) >= 0 || Array.prototype.forEach.call(u.children, function(c) {
      if (l.has(c))
        s(c);
      else {
        var f = c.getAttribute("aria-hidden"), d = f !== null && f !== "false", g = (No.get(c) || 0) + 1, h = (o.get(c) || 0) + 1;
        No.set(c, g), o.set(c, h), i.push(c), g === 1 && d && Ss.set(c, !0), h === 1 && c.setAttribute(n, "true"), d || c.setAttribute("aria-hidden", "true");
      }
    });
  };
  return s(t), l.clear(), Yf++, function() {
    i.forEach(function(u) {
      var c = No.get(u) - 1, f = o.get(u) - 1;
      No.set(u, c), o.set(u, f), c || (Ss.has(u) || u.removeAttribute("aria-hidden"), Ss.delete(u)), f || u.removeAttribute(n);
    }), Yf--, Yf || (No = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), ks = {});
  };
};
const CS = "Dialog", [$S, Xz] = iP(CS), [g_, ko] = $S(CS), v_ = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = m.exports.useRef(null), s = m.exports.useRef(null), [u = !1, c] = uP({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(g_, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: Uf(),
    titleId: Uf(),
    descriptionId: Uf(),
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
}, ES = "DialogPortal", [y_, AS] = $S(ES, {
  forceMount: void 0
}), x_ = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = ko(ES, t);
  return /* @__PURE__ */ m.exports.createElement(y_, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(Tc, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(RP, {
      asChild: !0,
      container: o
    }, l))
  ));
}, Wp = "DialogOverlay", w_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = AS(Wp, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = ko(Wp, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(Tc, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(b_, pt({}, o, {
    ref: t
  }))) : null;
}), b_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ko(Wp, n);
  return /* @__PURE__ */ m.exports.createElement(p_, {
    as: Um,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(Rc.div, pt({
    "data-state": _S(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), ca = "DialogContent", S_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = AS(ca, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = ko(ca, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(Tc, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(k_, pt({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(C_, pt({}, o, {
    ref: t
  })));
}), k_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = ko(ca, e.__scopeDialog), r = m.exports.useRef(null), o = za(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return m_(i);
  }, []), /* @__PURE__ */ m.exports.createElement(PS, pt({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ui(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ui(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: ui(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), C_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = ko(ca, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(PS, pt({}, e, {
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
}), PS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = ko(ca, n), s = m.exports.useRef(null), u = za(t, s);
  return OP(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(kP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(wP, pt({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": _S(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function _S(e) {
  return e ? "open" : "closed";
}
const $_ = v_, E_ = x_, A_ = w_, P_ = S_;
var M1 = 1, __ = 0.9, R_ = 0.3, Xf = 0.1, T_ = 0, Zf = 0.999, I_ = 0.9999, O_ = 0.99, D1 = /[\\\/\-_+.# \t"@\[\(\{&]/, N_ = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function qp(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? M1 : O_;
  for (var l = r.charAt(i), a = n.indexOf(l, o), s = 0, u, c, f; a >= 0; )
    u = qp(e, t, n, r, a + 1, i + 1), u > s && (a === o ? u *= M1 : D1.test(e.charAt(a - 1)) ? (u *= __, f = e.slice(o, a - 1).match(N_), f && o > 0 && (u *= Math.pow(Zf, f.length))) : D1.test(e.slice(o, a - 1)) ? (u *= T_, o > 0 && (u *= Math.pow(Zf, a - o))) : (u *= R_, o > 0 && (u *= Math.pow(Zf, a - o))), e.charAt(a) !== t.charAt(i) && (u *= I_)), u < Xf && n.charAt(a - 1) === r.charAt(i + 1) && n.charAt(a - 1) !== r.charAt(i) && (c = qp(e, t, n, r, a + 1, i + 2), c * Xf > u && (u = c * Xf)), u > s && (s = u), a = n.indexOf(l, a + 1);
  return s;
}
function M_(e, t) {
  return qp(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var D_ = M_, L_ = '[cmdk-list-sizer=""]', rl = '[cmdk-group=""]', Jf = '[cmdk-group-items=""]', F_ = '[cmdk-group-heading=""]', Wm = '[cmdk-item=""]', L1 = `${Wm}:not([aria-disabled="true"])`, Qp = "cmdk-item-select", Nn = "data-value", z_ = (e, t) => D_(e, t), RS = m.exports.createContext(void 0), Ba = () => m.exports.useContext(RS), TS = m.exports.createContext(void 0), qm = () => m.exports.useContext(TS), IS = m.exports.createContext(void 0), OS = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = jo(() => {
    var I;
    return { search: "", value: (I = e.value) != null ? I : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = jo(() => /* @__PURE__ */ new Set()), i = jo(() => /* @__PURE__ */ new Map()), l = jo(() => /* @__PURE__ */ new Map()), a = jo(() => /* @__PURE__ */ new Set()), s = NS(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...v } = e, w = m.exports.useId(), p = m.exports.useId(), y = m.exports.useId(), x = Y_();
  Fi(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, R), b.emit();
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
          k || x(5, R);
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
    let k = T();
    x(4, () => {
      P(), (k == null ? void 0 : k.getAttribute("id")) === I && $(), b.emit();
    });
  }), group: (I) => (i.current.has(I) || i.current.set(I, /* @__PURE__ */ new Set()), () => {
    l.current.delete(I), i.current.delete(I);
  }), filter: () => s.current.shouldFilter, label: u || e["aria-label"], commandRef: n, listId: w, inputId: y, labelId: p }), []);
  function S(I) {
    var C;
    var O;
    let k = (C = (O = s.current) == null ? void 0 : O.filter) != null ? C : z_;
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
    let k = n.current.querySelector(L_);
    N().sort((C, J) => {
      var ee, Q;
      let ne = C.getAttribute(Nn), ae = J.getAttribute(Nn);
      return ((ee = I.get(ae)) != null ? ee : 0) - ((Q = I.get(ne)) != null ? Q : 0);
    }).forEach((C) => {
      let J = C.closest(Jf);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${Jf} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${Jf} > *`));
    }), O.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${rl}[${Nn}="${C[0]}"]`);
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
  function R() {
    var I, O, k;
    let C = T();
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (O = C.closest(rl)) == null ? void 0 : O.querySelector(F_)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    var I;
    return (I = n.current) == null ? void 0 : I.querySelector(`${Wm}[aria-selected="true"]`);
  }
  function N() {
    return Array.from(n.current.querySelectorAll(L1));
  }
  function D(I) {
    let O = N()[I];
    O && b.setState("value", O.getAttribute(Nn));
  }
  function z(I) {
    var O;
    let k = T(), C = N(), J = C.findIndex((ae) => ae === k), ne = C[J + I];
    (O = s.current) != null && O.loop && (ne = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), ne && b.setState("value", ne.getAttribute(Nn));
  }
  function F(I) {
    let O = T(), k = O == null ? void 0 : O.closest(rl), C;
    for (; k && !C; )
      k = I > 0 ? G_(k, rl) : K_(k, rl), C = k == null ? void 0 : k.querySelector(L1);
    C ? b.setState("value", C.getAttribute(Nn)) : z(I);
  }
  let _ = () => D(N().length - 1), H = (I) => {
    I.preventDefault(), I.metaKey ? _() : I.altKey ? F(1) : z(1);
  }, M = (I) => {
    I.preventDefault(), I.metaKey ? D(0) : I.altKey ? F(-1) : z(-1);
  };
  return m.exports.createElement("div", { ref: ja([n, t]), ...v, "cmdk-root": "", onKeyDown: (I) => {
    var O;
    if ((O = v.onKeyDown) == null || O.call(v, I), !I.defaultPrevented)
      switch (I.key) {
        case "n":
        case "j": {
          I.ctrlKey && H(I);
          break;
        }
        case "ArrowDown": {
          H(I);
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
          let k = T();
          if (k) {
            let C = new Event(Qp);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: X_ }, u), m.exports.createElement(TS.Provider, { value: b }, m.exports.createElement(RS.Provider, { value: A }, c)));
}), B_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(IS), i = Ba(), l = NS(e);
  Fi(() => i.item(n, o), []);
  let a = MS(n, r, [e.value, e.children, r]), s = qm(), u = mo((p) => p.value && p.value === a.current), c = mo((p) => e.forceMount || i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(Qp, f), () => p.removeEventListener(Qp, f);
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
  return m.exports.createElement("div", { ref: ja([r, t]), ...w, id: n, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-disabled": g || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), j_ = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), a = m.exports.useRef(null), s = m.exports.useId(), u = Ba(), c = mo((d) => e.forceMount || u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Fi(() => u.group(i), []), MS(i, l, [e.value, e.heading, a]);
  let f = m.exports.createElement(IS.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: ja([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: a, "cmdk-group-heading": "", "aria-hidden": !0, id: s }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? s : void 0 }, f));
}), H_ = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = mo((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: ja([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), V_ = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = qm(), l = mo((c) => c.search), a = mo((c) => c.value), s = Ba(), u = m.exports.useMemo(() => {
    var c;
    let f = (c = s.commandRef.current) == null ? void 0 : c.querySelector(`${Wm}[${Nn}="${a}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, [a, s.commandRef]);
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": s.listId, "aria-labelledby": s.labelId, "aria-activedescendant": u, id: s.inputId, type: "text", value: o ? e.value : l, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), U_ = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = Ba();
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
  }, []), m.exports.createElement("div", { ref: ja([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), W_ = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: l, ...a } = e;
  return m.exports.createElement($_, { open: n, onOpenChange: r }, m.exports.createElement(E_, { container: l }, m.exports.createElement(A_, { "cmdk-overlay": "", className: o }), m.exports.createElement(P_, { "aria-label": e.label, "cmdk-dialog": "", className: i }, m.exports.createElement(OS, { ref: t, ...a }))));
}), q_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = mo((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), Q_ = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), an = Object.assign(OS, { List: U_, Item: B_, Input: V_, Group: j_, Separator: H_, Dialog: W_, Empty: q_, Loading: Q_ });
function G_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function K_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function NS(e) {
  let t = m.exports.useRef(e);
  return Fi(() => {
    t.current = e;
  }), t;
}
var Fi = typeof window > "u" ? m.exports.useEffect : m.exports.useLayoutEffect;
function jo(e) {
  let t = m.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ja(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function mo(e) {
  let t = qm(), n = () => e(t.snapshot());
  return m.exports.useSyncExternalStore(t.subscribe, n, n);
}
function MS(e, t, n) {
  let r = m.exports.useRef(), o = Ba();
  return Fi(() => {
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
var Y_ = () => {
  let [e, t] = m.exports.useState(), n = jo(() => /* @__PURE__ */ new Map());
  return Fi(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, X_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let Qm = Va();
const re = (e) => Ha(e, Qm);
let Gm = Va();
re.write = (e) => Ha(e, Gm);
let Oc = Va();
re.onStart = (e) => Ha(e, Oc);
let Km = Va();
re.onFrame = (e) => Ha(e, Km);
let Ym = Va();
re.onFinish = (e) => Ha(e, Ym);
let ci = [];
re.setTimeout = (e, t) => {
  let n = re.now() + t, r = () => {
    let i = ci.findIndex((l) => l.cancel == r);
    ~i && ci.splice(i, 1), yr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return ci.splice(DS(n), 0, o), yr += 1, LS(), o;
};
let DS = (e) => ~(~ci.findIndex((t) => t.time > e) || ~ci.length);
re.cancel = (e) => {
  Oc.delete(e), Km.delete(e), Qm.delete(e), Gm.delete(e), Ym.delete(e);
};
re.sync = (e) => {
  Gp = !0, re.batchedUpdates(e), Gp = !1;
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
    Oc.delete(n), t = null;
  }, r;
};
let Xm = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => Xm = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : zS();
};
let vr = -1, yr = 0, Gp = !1;
function Ha(e, t) {
  Gp ? (t.delete(e), e(0)) : (t.add(e), LS());
}
function LS() {
  vr < 0 && (vr = 0, re.frameLoop !== "demand" && Xm(FS));
}
function Z_() {
  vr = -1;
}
function FS() {
  ~vr && (Xm(FS), re.batchedUpdates(zS));
}
function zS() {
  let e = vr;
  vr = re.now();
  let t = DS(vr);
  t && (BS(ci.splice(0, t), (n) => n.handler()), yr -= t), Oc.flush(), Qm.flush(e ? Math.min(64, vr - e) : 16.667), Km.flush(), Gm.flush(), Ym.flush(), yr || Z_();
}
function Va() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      yr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return yr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), yr -= t.size, BS(t, (r) => r(n) && e.add(r)), yr += e.size, t = e);
    }
  };
}
function BS(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
function Kp() {
}
const J_ = (e, t, n) => Object.defineProperty(e, t, {
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
const pe = (e, t) => e.forEach(t);
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
function Ol(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), pe(n, t);
  }
}
const xl = (e, ...t) => Ol(e, (n) => n(...t)), jS = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Zm, HS, Rr = null, VS = !1, Jm = Kp;
const e4 = (e) => {
  e.to && (HS = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Rr = e.colors), e.skipAnimation != null && (VS = e.skipAnimation), e.createStringInterpolator && (Zm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Jm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
};
var An = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Zm;
  },
  get to() {
    return HS;
  },
  get colors() {
    return Rr;
  },
  get skipAnimation() {
    return VS;
  },
  get willAdvance() {
    return Jm;
  },
  assign: e4
});
const Nl = /* @__PURE__ */ new Set();
let jt = [], ed = [], Bu = 0;
const Nc = {
  get idle() {
    return !Nl.size && !jt.length;
  },
  start(e) {
    Bu > e.priority ? (Nl.add(e), re.onStart(t4)) : (US(e), re(Yp));
  },
  advance: Yp,
  sort(e) {
    if (Bu)
      re.onFrame(() => Nc.sort(e));
    else {
      const t = jt.indexOf(e);
      ~t && (jt.splice(t, 1), WS(e));
    }
  },
  clear() {
    jt = [], Nl.clear();
  }
};
function t4() {
  Nl.forEach(US), Nl.clear(), re(Yp);
}
function US(e) {
  jt.includes(e) || WS(e);
}
function WS(e) {
  jt.splice(n4(jt, (t) => t.priority > e.priority), 0, e);
}
function Yp(e) {
  const t = ed;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    Bu = r.priority, r.idle || (Jm(r), r.advance(e), r.idle || t.push(r));
  }
  return Bu = 0, ed = jt, ed.length = 0, jt = t, jt.length > 0;
}
function n4(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const r4 = {
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
}, sn = "[-+]?\\d*\\.?\\d+", ju = sn + "%";
function Mc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const o4 = new RegExp("rgb" + Mc(sn, sn, sn)), i4 = new RegExp("rgba" + Mc(sn, sn, sn, sn)), l4 = new RegExp("hsl" + Mc(sn, ju, ju)), a4 = new RegExp("hsla" + Mc(sn, ju, ju, sn)), s4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, u4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, c4 = /^#([0-9a-fA-F]{6})$/, f4 = /^#([0-9a-fA-F]{8})$/;
function d4(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = c4.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Rr && Rr[e] !== void 0 ? Rr[e] : (t = o4.exec(e)) ? (Mo(t[1]) << 24 | Mo(t[2]) << 16 | Mo(t[3]) << 8 | 255) >>> 0 : (t = i4.exec(e)) ? (Mo(t[1]) << 24 | Mo(t[2]) << 16 | Mo(t[3]) << 8 | B1(t[4])) >>> 0 : (t = s4.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = f4.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = u4.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = l4.exec(e)) ? (F1(z1(t[1]), Cs(t[2]), Cs(t[3])) | 255) >>> 0 : (t = a4.exec(e)) ? (F1(z1(t[1]), Cs(t[2]), Cs(t[3])) | B1(t[4])) >>> 0 : null;
}
function td(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function F1(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = td(o, r, e + 1 / 3), l = td(o, r, e), a = td(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Mo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function z1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function B1(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Cs(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function j1(e) {
  let t = d4(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const fa = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return fa({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return Zm(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    const c = h4(u, i);
    return p4(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function p4(e, t, n, r, o, i, l, a, s) {
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
function h4(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function Xp() {
  return Xp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xp.apply(this, arguments);
}
const $i = Symbol.for("FluidValue.get"), go = Symbol.for("FluidValue.observers"), Ft = (e) => Boolean(e && e[$i]), vt = (e) => e && e[$i] ? e[$i]() : e, H1 = (e) => e[go] || null;
function m4(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function da(e, t) {
  let n = e[go];
  n && n.forEach((r) => {
    m4(r, t);
  });
}
class qS {
  constructor(t) {
    if (this[$i] = void 0, this[go] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    g4(this, t);
  }
}
const g4 = (e, t) => QS(e, $i, t);
function zi(e, t) {
  if (e[$i]) {
    let n = e[go];
    n || QS(e, go, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function pa(e, t) {
  let n = e[go];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[go] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const QS = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Js = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, v4 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, V1 = new RegExp(`(${Js.source})(%|[a-z]+)`, "i"), y4 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Dc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, GS = (e) => {
  const [t, n] = x4(e);
  if (!t || jS())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Dc.test(n))
      return GS(n);
    if (n)
      return n;
  }
  return e;
}, x4 = (e) => {
  const t = Dc.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let nd;
const w4 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, KS = (e) => {
  nd || (nd = Rr ? new RegExp(`(${Object.keys(Rr).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => vt(i).replace(Dc, GS).replace(v4, j1).replace(nd, j1)), n = t.map((i) => i.match(Js).map(Number)), o = n[0].map((i, l) => n.map((a) => {
    if (!(l in a))
      throw Error('The arity of each "output" value must be equal');
    return a[l];
  })).map((i) => fa(Xp({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const a = !V1.test(t[0]) && ((l = t.find((u) => V1.test(u))) == null ? void 0 : l.replace(Js, ""));
    let s = 0;
    return t[0].replace(Js, () => `${o[s++](i)}${a || ""}`).replace(y4, w4);
  };
}, eg = "react-spring: ", YS = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${eg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, b4 = YS(console.warn);
function S4() {
  b4(`${eg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const k4 = YS(console.warn);
function C4() {
  k4(`${eg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Lc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !jS() && Dc.test(e) || e in (Rr || {}));
}
const tg = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, $4 = () => {
  const e = m.exports.useRef(!1);
  return tg(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function XS() {
  const e = m.exports.useState()[1], t = $4();
  return () => {
    t.current && e(Math.random());
  };
}
function E4(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && A4(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function A4(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const ZS = (e) => m.exports.useEffect(e, P4), P4 = [];
function U1(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const ha = Symbol.for("Animated:node"), _4 = (e) => !!e && e[ha] === e, yn = (e) => e && e[ha], ng = (e, t) => J_(e, ha, t), Fc = (e) => e && e[ha] && e[ha].getPayload();
class JS {
  constructor() {
    this.payload = void 0, ng(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Bi extends JS {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Bi(t);
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
class Ei extends Bi {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = fa({
      output: [t, t]
    });
  }
  static create(t) {
    return new Ei(t);
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
    t && (this._toString = fa({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const Hu = {
  dependencies: null
};
class zc extends JS {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return En(this.source, (r, o) => {
      _4(r) ? n[o] = r.getValue(t) : Ft(r) ? n[o] = vt(r) : t || (n[o] = r);
    }), n;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && pe(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      const n = /* @__PURE__ */ new Set();
      return En(t, this._addToPayload, n), Array.from(n);
    }
  }
  _addToPayload(t) {
    Hu.dependencies && Ft(t) && Hu.dependencies.add(t);
    const n = Fc(t);
    n && pe(n, (r) => this.add(r));
  }
}
class rg extends zc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new rg(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(R4)), !0);
  }
}
function R4(e) {
  return (Lc(e) ? Ei : Bi).create(e);
}
function Zp(e) {
  const t = yn(e);
  return t ? t.constructor : W.arr(e) ? rg : Lc(e) ? Ei : Bi;
}
function Jp() {
  return Jp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Jp.apply(this, arguments);
}
const W1 = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = O4(o, h);
    }, [o]), [a, s] = I4(r, t), u = XS(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new T4(c, s), d = m.exports.useRef();
    tg(() => (d.current = f, pe(s, (h) => zi(h, f)), () => {
      d.current && (pe(d.current.deps, (h) => pa(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), ZS(() => () => {
      const h = d.current;
      pe(h.deps, (v) => pa(v, h));
    });
    const g = t.getComponentProps(a.getValue());
    return /* @__PURE__ */ B(e, {
      ...g,
      ref: l
    });
  });
};
class T4 {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && re.write(this.update);
  }
}
function I4(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Hu.dependencies = n, e.style && (e = Jp({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new zc(e), Hu.dependencies = null, [e, n];
}
function O4(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const q1 = Symbol.for("AnimatedComponent"), N4 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new zc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const a = Q1(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = W1(l, o)) : l = l[q1] || (l[q1] = W1(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return En(e, (l, a) => {
    W.arr(e) && (a = Q1(l)), i[a] = i(l);
  }), {
    animated: i
  };
}, Q1 = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
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
function Zr(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Ml = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), ek = (e, t) => W.obj(e) ? t && e[t] : e, tk = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, M4 = (e) => e, og = (e, t = M4) => {
  let n = D4;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, D4 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], L4 = {
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
function F4(e) {
  const t = {};
  let n = 0;
  if (En(e, (r, o) => {
    L4[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function nk(e) {
  const t = F4(e);
  if (t) {
    const n = {
      to: t
    };
    return En(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ge({}, e);
}
function ma(e) {
  return e = vt(e), W.arr(e) ? e.map(ma) : Lc(e) ? An.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function z4(e) {
  for (const t in e)
    return !0;
  return !1;
}
function eh(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function B4(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function j4(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const H4 = {
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
}, Vu = 1.70158, $s = Vu * 1.525, G1 = Vu + 1, K1 = 2 * Math.PI / 3, Y1 = 2 * Math.PI / 4.5, Es = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, V4 = {
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
  easeInBack: (e) => G1 * e * e * e - Vu * e * e,
  easeOutBack: (e) => 1 + G1 * Math.pow(e - 1, 3) + Vu * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * (($s + 1) * 2 * e - $s) / 2 : (Math.pow(2 * e - 2, 2) * (($s + 1) * (e * 2 - 2) + $s) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * K1),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * K1) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Y1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Y1) / 2 + 1,
  easeInBounce: (e) => 1 - Es(1 - e),
  easeOutBounce: Es,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Es(1 - 2 * e)) / 2 : (1 + Es(2 * e - 1)) / 2
}, th = Ge({}, H4.default, {
  mass: 1,
  damping: 1,
  easing: V4.linear,
  clamp: !1
});
class U4 {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, th);
  }
}
function W4(e, t, n) {
  n && (n = Ge({}, n), X1(n, t), t = Ge({}, n, t)), X1(e, t), Object.assign(e, t);
  for (const l in th)
    e[l] == null && (e[l] = th[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function X1(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const Z1 = [];
class q4 {
  constructor() {
    this.changed = !1, this.values = Z1, this.toValues = null, this.fromValues = Z1, this.to = void 0, this.from = void 0, this.config = new U4(), this.immediate = !1;
  }
}
function rk(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, a) => {
    var s;
    let u, c, f = Ml((s = n.cancel) != null ? s : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Ml(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Ml(v, t)), u = Zr(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
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
const ig = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? fi(e.get()) : t.every((n) => n.noop) ? ok(e.get()) : on(e.get(), t.every((n) => n.finished)), ok = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), on = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), fi = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function ik(e, t, n, r) {
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
    const u = og(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && fi(r) || o !== n.asyncId && on(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new J1(), x = new ev();
      return (async () => {
        if (An.skipAnimation)
          throw ga(n), x.result = on(r, !1), f(x), x;
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
      return ga(n), on(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = on(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof J1)
        v = w.result;
      else if (w instanceof ev)
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
function ga(e, t) {
  Ol(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class J1 extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class ev extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const nh = (e) => e instanceof lg;
let Q4 = 1;
class lg extends qS {
  constructor(...t) {
    super(...t), this.id = Q4++, this.key = void 0, this._priority = 0;
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
    return S4(), An.to(this, t);
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
    da(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Nc.sort(this), da(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const vo = Symbol.for("SpringPhase"), lk = 1, rh = 2, oh = 4, rd = (e) => (e[vo] & lk) > 0, ar = (e) => (e[vo] & rh) > 0, ol = (e) => (e[vo] & oh) > 0, tv = (e, t) => t ? e[vo] |= rh | lk : e[vo] &= ~rh, nv = (e, t) => t ? e[vo] |= oh : e[vo] &= ~oh;
class G4 extends lg {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new q4(), this.queue = void 0, this.defaultProps = {}, this._state = {
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
    return !(ar(this) || this._state.asyncTo) || ol(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    const t = yn(this);
    return t instanceof Bi ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return rd(this);
  }
  get isAnimating() {
    return ar(this);
  }
  get isPaused() {
    return ol(this);
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
    const a = Fc(o.to);
    !a && Ft(o.to) && (l = At(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == Ei ? 1 : a ? a[f].lastPosition : l[f];
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
            const R = 1, T = Math.ceil(t / R);
            for (let N = 0; N < T && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++N) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              const D = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * y, F = (D + z) / i.mass;
              y = y + F * R, h = h + y * R;
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
    if (ar(this)) {
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
    })], Promise.all(r.map((o) => this._update(o))).then((o) => ig(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), ga(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
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
    r = W.obj(r) ? r[n] : r, (r == null || eh(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return rd(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), W.und(o) ? yn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ge({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, og(r, (s, u) => /^on/.test(u) ? ek(s, o) : s)), ov(this, r, "onProps"), ll(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const a = this._state;
    return rk(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: a,
      actions: {
        pause: () => {
          ol(this) || (nv(this, !0), xl(a.pauseQueue), ll(this, "onPause", on(this, il(this, this.animation.to)), this));
        },
        resume: () => {
          ol(this) && (nv(this, !1), ar(this) && this._resume(), xl(a.resumeQueue), ll(this, "onResume", on(this, il(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((s) => {
      if (r.loop && s.finished && !(n && s.noop)) {
        const u = ak(r);
        if (u)
          return this._update(u, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(fi(this));
    const o = !W.und(t.to), i = !W.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(fi(this));
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
    const v = eh(n.to), {
      config: w
    } = s, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && W4(w, Zr(n.config, l), n.config !== a.config ? Zr(a.config, l) : void 0);
    let x = yn(this);
    if (!x || W.und(f))
      return r(on(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Ml(n.reset, l), A = b ? d : this.get(), S = ma(f), E = W.num(S) || W.arr(S) || Lc(S), $ = !v && (!E || Ml(a.immediate || n.immediate, l));
    if (h) {
      const N = Zp(f);
      if (N !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${N.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let R = Ft(f), T = !1;
    if (!R) {
      const N = b || !rd(this) && g;
      (h || N) && (T = Mn(ma(A), S), R = !T), (!Mn(s.immediate, $) && !$ || !Mn(w.decay, p) || !Mn(w.velocity, y)) && (R = !0);
    }
    if (T && ar(this) && (s.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || Ft(u)) && (s.values = x.getPayload(), s.toValues = Ft(f) ? null : P == Ei ? [1] : At(S)), s.immediate != $ && (s.immediate = $, !$ && !b && this._set(u)), R)) {
      const {
        onRest: N
      } = s;
      pe(Y4, (z) => ov(this, n, z));
      const D = on(this, il(this, u));
      xl(this._pendingCalls, D), this._pendingCalls.add(r), s.changed && re.batchedUpdates(() => {
        s.changed = !b, N == null || N(D, this), b ? Zr(a.onRest, D) : s.onStart == null || s.onStart(D, this);
      });
    }
    b && this._set(A), v ? r(ik(n.to, n, this._state, this)) : R ? this._start() : ar(this) && !h ? this._pendingCalls.add(r) : r(ok(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (H1(this) && this._detach(), n.to = t, H1(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Ft(n) && (zi(n, this), nh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Ft(t) && pa(t, this);
  }
  _set(t, n = !0) {
    const r = vt(t);
    if (!W.und(r)) {
      const o = yn(this);
      if (!o || !Mn(r, o.getValue())) {
        const i = Zp(r);
        !o || o.constructor != i ? ng(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return yn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, ll(this, "onStart", on(this, il(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Zr(this.animation.onChange, t, this)), Zr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    yn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), ar(this) || (tv(this, !0), ol(this) || this._resume());
  }
  _resume() {
    An.skipAnimation ? this.finish() : Nc.start(this);
  }
  _stop(t, n) {
    if (ar(this)) {
      tv(this, !1);
      const r = this.animation;
      pe(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), da(this, {
        type: "idle",
        parent: this
      });
      const o = n ? fi(this.get()) : on(this.get(), il(this, t != null ? t : r.to));
      xl(this._pendingCalls, o), r.changed && (r.changed = !1, ll(this, "onRest", o, this));
    }
  }
}
function il(e, t) {
  const n = ma(t), r = ma(e.get());
  return Mn(r, n);
}
function ak(e, t = e.loop, n = e.to) {
  let r = Zr(t);
  if (r) {
    const o = r !== !0 && nk(r), i = (o || e).reverse, l = !o || o.reset;
    return va(Ge({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || eh(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function va(e) {
  const {
    to: t,
    from: n
  } = e = nk(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && rv(t, r), W.obj(n) && rv(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function K4(e) {
  const t = va(e);
  return W.und(t.default) && (t.default = og(t)), t;
}
function rv(e, t) {
  En(e, (n, r) => n != null && t.add(r));
}
const Y4 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function ov(e, t, n) {
  e.animation[n] = t[n] !== tk(t, n) ? ek(t[n], e.key) : void 0;
}
function ll(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const X4 = ["onStart", "onChange", "onRest"];
let Z4 = 1;
class J4 {
  constructor(t, n) {
    this.id = Z4++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
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
    return t && this.queue.push(va(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(va) : this.queue = [], this._flush ? this._flush(this, n) : (dk(this, n), ih(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      pe(At(n), (o) => r[o].stop(!!t));
    } else
      ga(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  pause(t) {
    if (W.und(t))
      this.start({
        pause: !0
      });
    else {
      const n = this.springs;
      pe(At(t), (r) => n[r].pause());
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
      pe(At(t), (r) => n[r].resume());
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
    (o && !this._started || i && !this._started) && (this._started = !0, Ol(t, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const l = !o && this._started, a = i || l && r.size ? this.get() : null;
    i && n.size && Ol(n, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), l && (this._started = !1, Ol(r, ([s, u]) => {
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
function ih(e, t) {
  return Promise.all(t.map((n) => sk(e, n))).then((n) => ig(e, n));
}
async function sk(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : pe(X4, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, xl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || tk(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(rk(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Kp,
      resume: Kp,
      start(v, w) {
        g ? (ga(f, e._lastAsyncId), w(fi(e))) : (v.onRest = a, w(ik(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = ig(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = ak(t, l, o);
    if (v)
      return dk(e, [v]), sk(e, v, !0);
  }
  return s && re.batchedUpdates(() => s(h, e, e.item)), h;
}
function iv(e, t) {
  const n = Ge({}, e.springs);
  return t && pe(At(t), (r) => {
    W.und(r.keys) && (r = va(r)), W.obj(r.to) || (r = Ge({}, r, {
      to: void 0
    })), fk(n, r, (o) => ck(o));
  }), uk(e, n), n;
}
function uk(e, t) {
  En(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, zi(n, e));
  });
}
function ck(e, t) {
  const n = new G4();
  return n.key = e, t && zi(n, t), n;
}
function fk(e, t, n) {
  t.keys && pe(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function dk(e, t) {
  pe(t, (n) => {
    fk(e.springs, n, (r) => ck(r, e));
  });
}
function eR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const tR = ["children"], Bc = (e) => {
  let {
    children: t
  } = e, n = eR(e, tR);
  const r = m.exports.useContext(Uu), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = E4(() => ({
    pause: o,
    immediate: i
  }), [o, i]);
  const {
    Provider: l
  } = Uu;
  return /* @__PURE__ */ B(l, {
    value: n,
    children: t
  });
}, Uu = nR(Bc, {});
Bc.Provider = Uu.Provider;
Bc.Consumer = Uu.Consumer;
function nR(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const rR = () => {
  const e = [], t = function(o) {
    C4();
    const i = [];
    return pe(e, (l, a) => {
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
    return pe(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return pe(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    pe(e, (o) => o.set(r));
  }, t.start = function(r) {
    const o = [];
    return pe(e, (i, l) => {
      if (W.und(r))
        o.push(i.start());
      else {
        const a = this._getProps(r, i, l);
        a && o.push(i.start(a));
      }
    }), o;
  }, t.stop = function() {
    return pe(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return pe(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  const n = function(o, i, l) {
    return W.fun(o) ? o(l, i) : o;
  };
  return t._getProps = n, t;
};
function oR(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? rR() : void 0, []), i = m.exports.useRef(0), l = XS(), a = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = iv(p, y);
      return i.current > 0 && !a.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? ih(p, y) : new Promise((A) => {
        uk(p, x), a.queue.push(() => {
          A(ih(p, y));
        }), l();
      });
    }
  }), []), s = m.exports.useRef([...a.ctrls]), u = [], c = U1(e) || 0;
  m.exports.useMemo(() => {
    pe(s.current.slice(e, c), (p) => {
      B4(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = s.current[x] || (s.current[x] = new J4(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = K4(A));
    }
  }
  const d = s.current.map((p, y) => iv(p, u[y])), g = m.exports.useContext(Bc), h = U1(g), v = g !== h && z4(g);
  tg(() => {
    i.current++, a.ctrls = s.current;
    const {
      queue: p
    } = a;
    p.length && (a.queue = [], pe(p, (y) => y())), pe(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: g
      });
      const b = u[x];
      b && (j4(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), ZS(() => () => {
    pe(a.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ge({}, p));
  return o ? [w, o] : w;
}
function iR(e, t) {
  const n = W.fun(e), [[r], o] = oR(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let lv;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(lv || (lv = {}));
class lR extends lg {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = fa(...n);
    const r = this._get(), o = Zp(r);
    ng(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    Mn(n, r) || (yn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && av(this._active) && od(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(vt) : At(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !av(this._active) && (this.idle = !1, pe(Fc(this), (t) => {
      t.done = !1;
    }), An.skipAnimation ? (re.batchedUpdates(() => this.advance()), od(this)) : Nc.start(this));
  }
  _attach() {
    let t = 1;
    pe(At(this.source), (n) => {
      Ft(n) && zi(n, this), nh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    pe(At(this.source), (t) => {
      Ft(t) && pa(t, this);
    }), this._active.clear(), od(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (nh(r) ? r.priority : 0) + 1), 0));
  }
}
function aR(e) {
  return e.idle !== !1;
}
function av(e) {
  return !e.size || Array.from(e).every(aR);
}
function od(e) {
  e.idle || (e.idle = !0, pe(Fc(e), (t) => {
    t.done = !0;
  }), da(e, {
    type: "idle",
    parent: e
  }));
}
An.assign({
  createStringInterpolator: KS,
  to: (e, t) => new lR(e, t)
});
function ag(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const sR = ["style", "children", "scrollTop", "scrollLeft"], pk = /^--/;
function uR(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !pk.test(e) && !(Dl.hasOwnProperty(e) && Dl[e]) ? t + "px" : ("" + t).trim();
}
const sv = {};
function cR(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: a
  } = r, s = ag(r, sR), u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : sv[f] || (sv[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = uR(f, o[f]);
      pk.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), a !== void 0 && (e.scrollLeft = a);
}
let Dl = {
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
const fR = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), dR = ["Webkit", "Ms", "Moz", "O"];
Dl = Object.keys(Dl).reduce((e, t) => (dR.forEach((n) => e[fR(n, t)] = e[t]), e), Dl);
const pR = ["x", "y", "z"], hR = /^(matrix|translate|scale|rotate|skew)/, mR = /^(translate)/, gR = /^(rotate|skew)/, id = (e, t) => W.num(e) && e !== 0 ? e + t : e, eu = (e, t) => W.arr(e) ? e.every((n) => eu(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class vR extends zc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = ag(t, pR);
    const l = [], a = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), a.push((s) => [`translate3d(${s.map((u) => id(u, "px")).join(",")})`, eu(s, 0)])), En(i, (s, u) => {
      if (u === "transform")
        l.push([s || ""]), a.push((c) => [c, c === ""]);
      else if (hR.test(u)) {
        if (delete i[u], W.und(s))
          return;
        const c = mR.test(u) ? "px" : gR.test(u) ? "deg" : "";
        l.push(At(s)), a.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${id(h, c)})`, eu(h, 0)] : (f) => [`${u}(${f.map((d) => id(d, c)).join(",")})`, eu(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new yR(l, a)), super(i);
  }
}
class yR extends qS {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return pe(this.inputs, (r, o) => {
      const i = vt(r[0]), [l, a] = this.transforms[o](W.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && pe(this.inputs, (n) => pe(n, (r) => Ft(r) && zi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && pe(this.inputs, (n) => pe(n, (r) => Ft(r) && pa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), da(this, t);
  }
}
const xR = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], wR = ["scrollTop", "scrollLeft"];
An.assign({
  batchedUpdates: Gt.exports.unstable_batchedUpdates,
  createStringInterpolator: KS,
  colors: r4
});
const bR = N4(xR, {
  applyAnimatedValues: cR,
  createAnimatedStyle: (e) => new vR(e),
  getComponentProps: (e) => ag(e, wR)
}), SR = bR.animated;
function hk(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = hk(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function uv() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = hk(t)) && (r && (r += " "), r += n);
  return r;
}
function kR(e, t, { includes: n = [], ...r } = {}) {
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
var Se = "colors", ut = "sizes", Y = "space", mk = { gap: Y, gridGap: Y, columnGap: Y, gridColumnGap: Y, rowGap: Y, gridRowGap: Y, inset: Y, insetBlock: Y, insetBlockEnd: Y, insetBlockStart: Y, insetInline: Y, insetInlineEnd: Y, insetInlineStart: Y, margin: Y, marginTop: Y, marginRight: Y, marginBottom: Y, marginLeft: Y, marginBlock: Y, marginBlockEnd: Y, marginBlockStart: Y, marginInline: Y, marginInlineEnd: Y, marginInlineStart: Y, padding: Y, paddingTop: Y, paddingRight: Y, paddingBottom: Y, paddingLeft: Y, paddingBlock: Y, paddingBlockEnd: Y, paddingBlockStart: Y, paddingInline: Y, paddingInlineEnd: Y, paddingInlineStart: Y, top: Y, right: Y, bottom: Y, left: Y, scrollMargin: Y, scrollMarginTop: Y, scrollMarginRight: Y, scrollMarginBottom: Y, scrollMarginLeft: Y, scrollMarginX: Y, scrollMarginY: Y, scrollMarginBlock: Y, scrollMarginBlockEnd: Y, scrollMarginBlockStart: Y, scrollMarginInline: Y, scrollMarginInlineEnd: Y, scrollMarginInlineStart: Y, scrollPadding: Y, scrollPaddingTop: Y, scrollPaddingRight: Y, scrollPaddingBottom: Y, scrollPaddingLeft: Y, scrollPaddingX: Y, scrollPaddingY: Y, scrollPaddingBlock: Y, scrollPaddingBlockEnd: Y, scrollPaddingBlockStart: Y, scrollPaddingInline: Y, scrollPaddingInlineEnd: Y, scrollPaddingInlineStart: Y, fontSize: "fontSizes", background: Se, backgroundColor: Se, backgroundImage: Se, borderImage: Se, border: Se, borderBlock: Se, borderBlockEnd: Se, borderBlockStart: Se, borderBottom: Se, borderBottomColor: Se, borderColor: Se, borderInline: Se, borderInlineEnd: Se, borderInlineStart: Se, borderLeft: Se, borderLeftColor: Se, borderRight: Se, borderRightColor: Se, borderTop: Se, borderTopColor: Se, caretColor: Se, color: Se, columnRuleColor: Se, fill: Se, outline: Se, outlineColor: Se, stroke: Se, textDecorationColor: Se, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ut, minBlockSize: ut, maxBlockSize: ut, inlineSize: ut, minInlineSize: ut, maxInlineSize: ut, width: ut, minWidth: ut, maxWidth: ut, height: ut, minHeight: ut, maxHeight: ut, flexBasis: ut, gridTemplateColumns: ut, gridTemplateRows: ut, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, CR = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, ji = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, CR))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, io = Symbol.for("sxs.internal"), sg = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), cv = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: $R } = Object.prototype, lh = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), ER = /\s+(?![^()]*\))/, Do = (e) => (t) => e(...typeof t == "string" ? String(t).split(ER) : [t]), fv = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Do((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Do((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Do((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Do((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Do((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Do((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, ld = /([\d.]+)([^]*)/, AR = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, PR = (e, t) => e in _R && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${lh(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${lh(e)}:${r}fit-content`) + i) : String(t), _R = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Gn = (e) => e ? e + "-" : "", gk = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, a) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Gn(t) + (a.includes("$") ? "" : Gn(n)) + a.replace(/\$/g, "-") : a) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), RR = /\s*,\s*(?![^()]*\))/, TR = Object.prototype.toString, ei = (e, t, n, r, o) => {
  let i, l, a;
  const s = (u, c, f) => {
    let d, g;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === TR && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in fv) {
            const S = fv[b];
            if (S !== a) {
              a = S, h(S(g)), a = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, E, $, P, R, T) => {
            const N = ld.test(E), D = 0.0625 * (N ? -1 : 1), [z, F] = N ? [P, E] : [E, P];
            return "(" + ($[0] === "=" ? "" : $[0] === ">" === N ? "max-" : "min-") + z + ":" + ($[0] !== "=" && $.length === 1 ? F.replace(ld, (_, H, M) => Number(H) + D * ($ === ">" ? 1 : -1) + M) : F) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + z + ":" + (R.length === 1 ? T.replace(ld, (_, H, M) => Number(H) + D * (R === ">" ? -1 : 1) + M) : T) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], E = y ? [...c] : AR(c, d.split(RR));
            i !== void 0 && o(dv(...i)), i = void 0, s(g, E, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Gn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in IR ? String(g) + "px" : String(g) : gk(PR(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${lh(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(dv(...i)), i = void 0;
  };
  s(e, t, n);
}, dv = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, IR = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, pv = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), lo = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = pv(n % 52) + r;
  return pv(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), wl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], OR = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, NR = (e) => {
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
      if (OR(a)) {
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
          const g = d.slice(14, -3).trim().split(/\s+/), h = wl[g[0]];
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
    for (let a = wl.length - 1; a >= 0; --a) {
      const s = wl[a];
      if (!l[s]) {
        const u = wl[a + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${a}}`, c), l[s] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([a]) };
      }
      MR(l[s]);
    }
  };
  return r(), t;
}, MR = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, al = Symbol(), DR = ji(), hv = (e, t) => DR(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[io]) {
        r.type == null && (r.type = o[io].type);
        for (const i of o[io].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(LR(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), FR(e, r, t);
}), LR = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Gn(o.prefix)}c-${lo(r)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    s[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = s, f = d, $R.call(c, f) || (s[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [v, w, !cv(w)];
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
      const v = [h, g, !cv(g)];
      a.push(v);
    }
  return [i, r, l, a, s, u];
}, FR = (e, t, n) => {
  const [r, o, i, l] = zR(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[al].length; g++) {
        const [h, v] = d[al][g];
        f.rules[h].apply(v);
      }
      return d[al] = [], null;
    }
    return d[al] = [], d.rules = {}, wl.forEach((g) => d.rules[g] = { apply: (h) => d[al].push([g, h]) }), d;
  })(n) : null, s = (a || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || BR;
    const { css: d, ...g } = f, h = {};
    for (const p in i)
      if (delete g[p], p in f) {
        let y = f[p];
        typeof y == "object" && y ? h[p] = { "@initial": i[p], ...y } : (y = String(y), h[p] = y !== "undefined" || l.has(p) ? y : i[p]);
      } else
        h[p] = i[p];
    const v = /* @__PURE__ */ new Set([...o]);
    for (const [p, y, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), ei(y, [`.${p}`], [], e, (E) => {
        s.styled.apply(E);
      }));
      const A = mv(x, h, e.media), S = mv(b, h, e.media, !0);
      for (const E of A)
        if (E !== void 0)
          for (const [$, P, R] of E) {
            const T = `${p}-${lo(P)}-${$}`;
            v.add(T);
            const N = (R ? n.rules.resonevar : n.rules.onevar).cache, D = R ? s.resonevar : s.onevar;
            N.has(T) || (N.add(T), ei(P, [`.${T}`], [], e, (z) => {
              D.apply(z);
            }));
          }
      for (const E of S)
        if (E !== void 0)
          for (const [$, P] of E) {
            const R = `${p}-${lo(P)}-${$}`;
            v.add(R), n.rules.allvar.cache.has(R) || (n.rules.allvar.cache.add(R), ei(P, [`.${R}`], [], e, (T) => {
              s.allvar.apply(T);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${lo(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), ei(d, [`.${p}`], [], e, (y) => {
        s.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = g.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: a };
  };
  return sg(c, { className: r, selector: u, [io]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, zR = (e) => {
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
}, mv = (e, t, n, r) => {
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
}, BR = {}, jR = ji(), HR = (e, t) => jR(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = lo(o);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in o) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(o["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, l++);
          delete o["@import"];
        }
        ei(o, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return sg(r, { toString: r });
}), VR = ji(), UR = (e, t) => VR(e, () => (n) => {
  const r = `${Gn(e.prefix)}k-${lo(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      ei(n, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return sg(o, { get name() {
    return o();
  }, toString: o });
}), WR = class {
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
}, qR = ji(), QR = (e, t) => qR(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Gn(e.prefix)}t-${lo(r)}`}`, i = {}, l = [];
  for (const s in r) {
    i[s] = {};
    for (const u in r[s]) {
      const c = `--${Gn(e.prefix)}${s}-${u}`, f = gk(String(r[s][u]), e.prefix, s);
      i[s][u] = new WR(u, f, s, e.prefix), l.push(`${c}:${f}`);
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
}), GR = ji(), KR = ji(), YR = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = GR(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", a = typeof i.media == "object" && i.media || {}, s = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: a, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...mk }, utils: typeof i.utils == "object" && i.utils || {} }, f = NR(s), d = { css: hv(c, f), globalCss: HR(c, f), keyframes: UR(c, f), createTheme: QR(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => KR(n, () => {
    const o = hv(n, r);
    return (...i) => {
      const l = o(...i), a = l[io].type, s = je.forwardRef((u, c) => {
        const f = u && u.as || a, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? je.createElement(je.Fragment, null, je.createElement(f, d), je.createElement(g, null)) : je.createElement(f, d);
      });
      return s.className = l.className, s.displayName = `Styled.${a.displayName || a.name || a}`, s.selector = l.selector, s.toString = () => l.selector, s[io] = l[io], s;
    };
  }))(t), t;
};
function XR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ya(e, t) {
  return ya = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ya(e, t);
}
function ZR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ya(e, t);
}
function ah(e) {
  return ah = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ah(e);
}
function JR(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function eT() {
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
function tu(e, t, n) {
  return eT() ? tu = Reflect.construct : tu = function(o, i, l) {
    var a = [null];
    a.push.apply(a, i);
    var s = Function.bind.apply(o, a), u = new s();
    return l && ya(u, l.prototype), u;
  }, tu.apply(null, arguments);
}
function sh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sh = function(r) {
    if (r === null || !JR(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return tu(r, arguments, ah(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ya(o, r);
  }, sh(e);
}
var xr = /* @__PURE__ */ function(e) {
  ZR(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, XR(r);
  }
  return t;
}(/* @__PURE__ */ sh(Error)), tT = /--[\S]*/g;
function nT(e, t) {
  if (!e || !e.match(tT))
    throw new xr(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new xr(74);
}
function ad(e) {
  return Math.round(e * 255);
}
function rT(e, t, n) {
  return ad(e) + "," + ad(t) + "," + ad(n);
}
function gv(e, t, n, r) {
  if (r === void 0 && (r = rT), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), a = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (a = i, s = l) : o >= 1 && o < 2 ? (a = l, s = i) : o >= 2 && o < 3 ? (s = i, u = l) : o >= 3 && o < 4 ? (s = l, u = i) : o >= 4 && o < 5 ? (a = l, u = i) : o >= 5 && o < 6 && (a = i, u = l);
  var c = n - i / 2, f = a + c, d = s + c, g = u + c;
  return r(f, d, g);
}
var vv = {
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
function oT(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return vv[t] ? "#" + vv[t] : e;
}
var iT = /^#[a-fA-F0-9]{6}$/, lT = /^#[a-fA-F0-9]{8}$/, aT = /^#[a-fA-F0-9]{3}$/, sT = /^#[a-fA-F0-9]{4}$/, sd = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, uT = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, cT = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, fT = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function dT(e) {
  if (typeof e != "string")
    throw new xr(3);
  var t = oT(e);
  if (t.match(iT))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(lT)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(aT))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(sT)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r
    };
  }
  var o = sd.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = uT.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = cT.exec(t);
  if (l) {
    var a = parseInt("" + l[1], 10), s = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + gv(a, s, u) + ")", f = sd.exec(c);
    if (!f)
      throw new xr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = fT.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + gv(g, h, v) + ")", p = sd.exec(w);
    if (!p)
      throw new xr(4, t, w);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10),
      alpha: parseFloat("" + d[4])
    };
  }
  throw new xr(5);
}
var pT = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, yv = pT;
function Lo(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function xv(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return yv("#" + Lo(e) + Lo(t) + Lo(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return yv("#" + Lo(e.red) + Lo(e.green) + Lo(e.blue));
  throw new xr(6);
}
function hT(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = dT(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? xv(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? xv(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new xr(7);
}
const wv = {
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
}, bv = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, ug = YR({
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
    space: wv,
    sizes: {
      ...wv,
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
      default: bv([
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
      colors: bv([
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
      backgroundColor: hT(nT("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: mk
}), mT = ug.styled;
ug.globalCss;
ug.getCssText;
var Sv = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, en = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, gT = (...e) => [...e].flat().filter(Boolean), vk = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? vk(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, kv = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function vT() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = yk(t)) && (r && (r += " "), r += n);
  return r;
}
function yk(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = yk(e[r])) && (n && (n += " "), n += t);
  return n;
}
function uh() {
  return uh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uh.apply(this, arguments);
}
var cg = "-";
function yT(e) {
  var t = wT(e);
  function n(o) {
    var i = o.split(cg);
    return i[0] === "" && i.length !== 1 && i.shift(), xk(i, t) || xT(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function xk(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? xk(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(cg);
    return (n = t.validators.find(function(a) {
      var s = a.validator;
      return s(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var Cv = /^\[(.+)\]$/;
function xT(e) {
  if (Cv.test(e)) {
    var t = Cv.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function wT(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = ST(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], a = i[1];
    ch(a, r, l, t);
  }), r;
}
function ch(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : $v(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (bT(o)) {
        ch(o(r), t, n, r);
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
      ch(s, $v(t, a), n, r);
    });
  });
}
function $v(e, t) {
  var n = e;
  return t.split(cg).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function bT(e) {
  return e.isThemeGetter;
}
function ST(e, t) {
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
function kT(e) {
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
var wk = "!";
function CT(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, a = 0; a < r.length; a++) {
      var s = r[a];
      o === 0 && s === t[0] && (t.length === 1 || r.slice(a, a + t.length) === t) && (i.push(r.slice(l, a)), l = a + t.length), s === "[" ? o++ : s === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(wk), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function $T(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function ET(e) {
  return uh({
    cache: kT(e.cacheSize),
    splitModifiers: CT(e)
  }, yT(e));
}
var AT = /\s+/;
function PT(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(AT).map(function(l) {
    var a = n(l), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = $T(s).join(":"), g = u ? d + wk : d;
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
function fh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = ET(d), o = r.cache.get, i = r.cache.set, l = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = PT(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(vT.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var bk = /^\[(?:([a-z-]+):)?(.+)\]$/i, _T = /^\d+\/\d+$/, RT = /* @__PURE__ */ new Set(["px", "full", "screen"]), TT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, IT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, OT = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Jt(e) {
  return Ll(e) || RT.has(e) || _T.test(e) || Yr(e);
}
function Yr(e) {
  return Co(e, "length", FT);
}
function NT(e) {
  return Co(e, "size", Sk);
}
function MT(e) {
  return Co(e, "position", Sk);
}
function DT(e) {
  return Co(e, "url", zT);
}
function ud(e) {
  return Co(e, "number", Ll);
}
function Ll(e) {
  return !Number.isNaN(Number(e));
}
function sl(e) {
  return Ev(e) || Co(e, "number", Ev);
}
function ze(e) {
  return bk.test(e);
}
function ul() {
  return !0;
}
function sr(e) {
  return TT.test(e);
}
function LT(e) {
  return Co(e, "", BT);
}
function Co(e, t, n) {
  var r = bk.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function FT(e) {
  return IT.test(e);
}
function Sk() {
  return !1;
}
function zT(e) {
  return e.startsWith("url(");
}
function Ev(e) {
  return Number.isInteger(Number(e));
}
function BT(e) {
  return OT.test(e);
}
function dh() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), a = _e("borderWidth"), s = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), E = _e("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, R = function() {
    return ["auto", t];
  }, T = function() {
    return ["", Jt];
  }, N = function() {
    return ["auto", Ll, ze];
  }, D = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, H = function() {
    return ["", "0", ze];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [Ll, ud];
  }, O = function() {
    return [Ll, ze];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ul],
      spacing: [Jt],
      blur: ["none", "", sr, Yr],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", sr, Yr],
      borderSpacing: [t],
      borderWidth: T(),
      contrast: I(),
      grayscale: H(),
      hueRotate: O(),
      invert: H(),
      gap: [t],
      gradientColorStops: [e],
      inset: R(),
      margin: R(),
      opacity: I(),
      padding: [t],
      saturate: I(),
      scale: I(),
      sepia: H(),
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
        columns: [sr]
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
        z: ["auto", sl]
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
        grow: H()
      }],
      shrink: [{
        shrink: H()
      }],
      order: [{
        order: ["first", "last", "none", sl]
      }],
      "grid-cols": [{
        "grid-cols": [ul]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [sl]
        }, ze]
      }],
      "col-start": [{
        "col-start": N()
      }],
      "col-end": [{
        "col-end": N()
      }],
      "grid-rows": [{
        "grid-rows": [ul]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [sl]
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
          screen: [sr]
        }, sr, Yr]
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
        text: ["base", sr, Yr]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ud]
      }],
      "font-family": [{
        font: [ul]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Yr]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Yr]
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
        bg: [].concat(D(), [MT])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", NT]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, DT]
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
        ring: T()
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
        shadow: ["", "inner", "none", sr, LT]
      }],
      "shadow-color": [{
        shadow: [ul]
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
        "drop-shadow": ["", "none", sr, ze]
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
        rotate: [sl, ze]
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
        stroke: [Jt, ud]
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
var jT = /* @__PURE__ */ fh(dh);
function HT(e, t) {
  for (var n in t)
    kk(e, n, t[n]);
  return e;
}
var VT = Object.prototype.hasOwnProperty, UT = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function kk(e, t, n) {
  if (!VT.call(e, t) || UT.has(typeof n) || n === null) {
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
      kk(e[t], r, n[r]);
  }
}
function WT(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? fh.apply(void 0, [dh, e].concat(n)) : fh.apply(void 0, [function() {
    return HT(dh(), e);
  }].concat(n));
}
var Wu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), cl = (...e) => (t = {}) => t.twMerge ? (en(t.twMergeConfig) ? jT : WT(t.twMergeConfig))(Wu(e)) : Wu(e), Av = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Wu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, qT = { twMerge: !0, twMergeConfig: {} }, QT = (e, t = qT) => {
  var n, r, o, i, l;
  let { slots: a = {}, variants: s = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Wu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = vk(s, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = en(a) ? {} : { base: e == null ? void 0 : e.base, ...a }, v = en((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : Av((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, en(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (en(d) && en(a) && en((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return cl(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (z, F, _ = [], H) => {
      let M = _;
      if (typeof F == "string")
        M.push(kv(F).split(" ").map((I) => `${z}:${I}`));
      else if (Array.isArray(F))
        M.push(F.flatMap((I) => `${z}:${I}`));
      else if (typeof F == "object" && typeof H == "string") {
        let I = F == null ? void 0 : F[H];
        if (I && typeof I == "string") {
          let O = kv(I);
          M[H] = M[H] ? [...M[H], ...O.split(" ").map((k) => `${z}:${k}`)] : O.split(" ").map((k) => `${z}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (M[H] = I.flatMap((O) => `${z}:${O}`));
      }
      return M;
    }, E = (z, F = d, _ = null) => {
      let H = F == null ? void 0 : F[z];
      if (typeof H != "object" || en(H))
        return null;
      let M = y == null ? void 0 : y[z], I = g == null ? void 0 : g[z], O = [];
      if (M === null)
        return null;
      let k = Sv(M);
      typeof k == "object" && (O = Object.keys(k).reduce((J, ne) => {
        let ae = k[ne], ee = H == null ? void 0 : H[ae];
        return ne === "initial" ? (I = ae, J) : S(ne, ee, J, _);
      }, []));
      let C = H[k] || H[Sv(I)];
      return typeof O == "object" && typeof _ == "string" && O[_] ? Av(O, C) : O.length > 0 ? [C, ...O] : C;
    }, $ = () => d ? Object.keys(d).map((z) => E(z, d)) : null, P = (z) => !d || typeof d != "object" ? null : Object.keys(d).map((F) => {
      let _ = E(F, d, z);
      return z === "base" && typeof _ == "string" ? _ : _ && _[z];
    }).filter(Boolean), R = y && Object.fromEntries(Object.entries(y).filter(([, z]) => z !== void 0)), T = (z = []) => z == null ? void 0 : z.filter(({ class: F, className: _, ...H }) => Object.entries(H).every(([M, I]) => {
      var O;
      let k = typeof (y == null ? void 0 : y[M]) == "object" ? (O = y[M]) == null ? void 0 : O.initial : {}, C = { ...g, ...k, ...R };
      return Array.isArray(I) ? I.includes(C[M]) : C[M] === I;
    })).flatMap(({ class: F, className: _ }) => [F, _]), N = () => {
      var z;
      let F = T(u), _ = T((z = e == null ? void 0 : e.extend) == null ? void 0 : z.compoundVariants);
      return gT(_, F);
    }, D = () => {
      let z = N();
      return Array.isArray(z) ? z.reduce((F, _) => (typeof _ == "string" && (F.base = cl(F.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([H, M]) => {
        F[H] = cl(F[H], M)(t);
      }), F), {}) : z;
    };
    if (!en(a) || !en((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let z = (A = D()) != null ? A : [];
      return { ...typeof v == "object" && !en(v) ? Object.keys(v).reduce((F, _) => (F[_] = (H) => cl(v[_], P(_), z == null ? void 0 : z[_], H == null ? void 0 : H.class, H == null ? void 0 : H.className)(t), F), {}) : {} };
    }
    return cl(f, $(), N(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const GT = QT({
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
}), KT = mT("div", {
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
}), YT = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, fg = je.forwardRef(({
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
  const p = iR({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: YT
  });
  kR(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = GT({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ ce(KT, {
    style: e,
    className: uv("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ B("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && je.createElement(SR.div, {
      className: uv("mayumi-input-effect", x()),
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
fg.displayName = "input";
function Ck(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ck(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ai() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ck(e)) && (r && (r += " "), r += t);
  return r;
}
const Pv = (e) => {
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
}, XT = (e) => e ? Pv(e) : Pv;
var $k = { exports: {} }, Ek = {}, Ak = { exports: {} }, Pk = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi = m.exports;
function ZT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var JT = typeof Object.is == "function" ? Object.is : ZT, e6 = Pi.useState, t6 = Pi.useEffect, n6 = Pi.useLayoutEffect, r6 = Pi.useDebugValue;
function o6(e, t) {
  var n = t(), r = e6({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return n6(function() {
    o.value = n, o.getSnapshot = t, cd(o) && i({ inst: o });
  }, [e, n, t]), t6(function() {
    return cd(o) && i({ inst: o }), e(function() {
      cd(o) && i({ inst: o });
    });
  }, [e]), r6(n), n;
}
function cd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !JT(e, n);
  } catch {
    return !0;
  }
}
function i6(e, t) {
  return t();
}
var l6 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? i6 : o6;
Pk.useSyncExternalStore = Pi.useSyncExternalStore !== void 0 ? Pi.useSyncExternalStore : l6;
(function(e) {
  e.exports = Pk;
})(Ak);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jc = m.exports, a6 = Ak.exports;
function s6(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var u6 = typeof Object.is == "function" ? Object.is : s6, c6 = a6.useSyncExternalStore, f6 = jc.useRef, d6 = jc.useEffect, p6 = jc.useMemo, h6 = jc.useDebugValue;
Ek.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = f6(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = p6(function() {
    function s(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, g))
            return f = h;
        }
        return f = g;
      }
      if (h = f, u6(c, g))
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
  var a = c6(e, i[0], i[1]);
  return d6(function() {
    l.hasValue = !0, l.value = a;
  }, [a]), h6(a), a;
};
(function(e) {
  e.exports = Ek;
})($k);
const m6 = /* @__PURE__ */ zh($k.exports), { useSyncExternalStoreWithSelector: g6 } = m6;
function v6(e, t = e.getState, n) {
  const r = g6(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return m.exports.useDebugValue(r), r;
}
const _v = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? XT(e) : e, n = (r, o) => v6(t, r, o);
  return Object.assign(n, t), n;
}, dg = (e) => e ? _v(e) : _v;
function pg(e) {
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
const xa = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return xa(r)(n);
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
        return xa(r)(n);
      }
    };
  }
}, y6 = (e, t) => (n, r, o) => {
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
  const c = xa(i.serialize), f = () => {
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
    return xa(u.getItem.bind(u))(i.name).then((y) => {
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
}, x6 = (e, t) => (n, r, o) => {
  let i = {
    storage: pg(() => localStorage),
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
    return xa(u.getItem.bind(u))(i.name).then((p) => {
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
}, w6 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), y6(e, t)) : x6(e, t), _k = w6, b6 = {
  getItem: async (e) => (await ot.storage.local.get(e))[e],
  setItem(e, t) {
    return ot.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.local.remove(e);
  }
}, S6 = {
  getItem: async (e) => (await ot.storage.sync.get(e))[e],
  setItem(e, t) {
    return ot.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return ot.storage.sync.remove(e);
  }
}, k6 = (e, t) => (n, r, o) => {
  const i = (l, a, s) => {
    const u = s === void 0 ? { type: "anonymous" } : typeof s == "string" ? { type: s } : s;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, a), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, hg = k6, _i = dg()(
  hg(
    _k(
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
        storage: pg(() => b6)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), ao = dg()(
  hg(
    (e) => ({
      open: !1,
      isChat: !1,
      subCommandOpen: !1,
      historyOpen: !1,
      setIsChat(t) {
        e(() => ({
          isChat: t
        }));
      },
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
      toggleHistoryOpen() {
        e((t) => ({
          historyOpen: !t.historyOpen
        }));
      },
      updateHistoryOpen(t) {
        e(() => ({
          historyOpen: !!t
        }));
      }
    }),
    {
      name: "cmdk-store"
    }
  )
), Rk = dg()(
  hg(
    _k(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: pg(() => S6) }
    ),
    {
      name: "user-config-store"
    }
  )
), nu = "ask-chatgpt", ph = "ask-chatgpt-with", qu = "translate-with", ru = "summary-with", wa = "ask-chatgpt-with-page", Qu = "config-page", Ri = "translate-with-page", Xr = "home-page", C6 = "OPENAI_API_KEY", Rv = "options", Tv = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
function $6(e) {
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
function hh(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function E6(e) {
  const t = e + "CollectionProvider", [n, r] = Ni(t), [o, i] = n(t, {
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
    return /* @__PURE__ */ je.createElement(Ci, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ je.forwardRef((g, h) => {
    const { scope: v, children: w, ...p } = g, y = je.useRef(null), x = Ce(h, y), b = i(u, v);
    return je.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ je.createElement(Ci, {
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
const A6 = /* @__PURE__ */ m.exports.createContext(void 0);
function Tk(e) {
  const t = m.exports.useContext(A6);
  return e || t || "ltr";
}
function P6(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const _6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(Ve.span, Z({}, e, {
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
}))), R6 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], T6 = [
  " ",
  "Enter"
], Hc = "Select", [Vc, Uc, I6] = E6(Hc), [Hi, Zz] = Ni(Hc, [
  I6,
  Ec
]), mg = Ec(), [O6, $o] = Hi(Hc), [N6, M6] = Hi(Hc), D6 = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: s, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = mg(t), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = Tk(u), [S = !1, E] = zu({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [$, P] = zu({
    prop: l,
    defaultProp: a,
    onChange: s
  }), R = m.exports.useRef(null), T = v ? Boolean(v.closest("form")) : !0, [N, D] = m.exports.useState(/* @__PURE__ */ new Set()), z = Array.from(N).map(
    (F) => F.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Wb, h, /* @__PURE__ */ m.exports.createElement(O6, {
    required: g,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: si(),
    value: $,
    onValueChange: P,
    open: S,
    onOpenChange: E,
    dir: A,
    triggerPointerDownPosRef: R,
    disabled: d
  }, /* @__PURE__ */ m.exports.createElement(Vc.Provider, {
    scope: t
  }, /* @__PURE__ */ m.exports.createElement(N6, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: m.exports.useCallback((F) => {
      D(
        (_) => new Set(_).add(F)
      );
    }, []),
    onNativeOptionRemove: m.exports.useCallback((F) => {
      D((_) => {
        const H = new Set(_);
        return H.delete(F), H;
      });
    }, [])
  }, n)), T ? /* @__PURE__ */ m.exports.createElement(Nk, {
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
}, L6 = "SelectTrigger", F6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = mg(n), l = $o(L6, n), a = l.disabled || r, s = Ce(t, l.onTriggerChange), u = Uc(n), [c, f, d] = Mk((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = Dk(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    a || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement(qb, Z({
    asChild: !0
  }, i), /* @__PURE__ */ m.exports.createElement(Ve.button, Z({
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && R6.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), z6 = "SelectValue", B6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...a } = e, s = $o(z6, n), { onValueNodeHasChildrenChange: u } = s, c = i !== void 0, f = Ce(t, s.onValueNodeChange);
  return Xe(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ m.exports.createElement(Ve.span, Z({}, a, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), s.value === void 0 && l !== void 0 ? l : i);
}), j6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(Ve.span, Z({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), H6 = (e) => /* @__PURE__ */ m.exports.createElement(Gb, Z({
  asChild: !0
}, e)), Ti = "SelectContent", V6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = $o(Ti, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Xe(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ Gt.exports.createPortal(/* @__PURE__ */ m.exports.createElement(Ik, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(Vc.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(U6, Z({}, e, {
    ref: t
  }));
}), Dn = 10, [Ik, Eo] = Hi(Ti), U6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
  } = e, y = $o(Ti, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), E = Ce(
    t,
    (Q) => b(Q)
  ), [$, P] = m.exports.useState(null), [R, T] = m.exports.useState(null), N = Uc(n), [D, z] = m.exports.useState(!1), F = m.exports.useRef(!1);
  m.exports.useEffect(() => {
    if (x)
      return Hm(x);
  }, [
    x
  ]), Lm();
  const _ = m.exports.useCallback((Q) => {
    const [ie, ...xe] = N().map(
      (se) => se.ref.current
    ), [ue] = xe.slice(-1), de = document.activeElement;
    for (const se of Q)
      if (se === de || (se == null || se.scrollIntoView({
        block: "nearest"
      }), se === ie && A && (A.scrollTop = 0), se === ue && A && (A.scrollTop = A.scrollHeight), se == null || se.focus(), document.activeElement !== de))
        return;
  }, [
    N,
    A
  ]), H = m.exports.useCallback(
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
    D && H();
  }, [
    D,
    H
  ]);
  const { onOpenChange: M, triggerPointerDownPosRef: I } = y;
  m.exports.useEffect(() => {
    if (x) {
      let Q = {
        x: 0,
        y: 0
      };
      const ie = (ue) => {
        var de, se, at, st;
        Q = {
          x: Math.abs(Math.round(ue.pageX) - ((de = (se = I.current) === null || se === void 0 ? void 0 : se.x) !== null && de !== void 0 ? de : 0)),
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
  const [O, k] = Mk((Q) => {
    const ie = N().filter(
      (de) => !de.disabled
    ), xe = ie.find(
      (de) => de.ref.current === document.activeElement
    ), ue = Dk(ie, Q, xe);
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
    (y.value !== void 0 && y.value === ie || ue) && T(Q);
  }, [
    y.value
  ]), ae = r === "popper" ? Iv : W6, ee = ae === Iv ? {
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
  return /* @__PURE__ */ m.exports.createElement(Ik, {
    scope: n,
    content: x,
    viewport: A,
    onViewportChange: S,
    itemRefCallback: C,
    selectedItem: $,
    onItemLeave: J,
    itemTextRefCallback: ne,
    focusSelectedItem: H,
    selectedItemText: R,
    position: r,
    isPositioned: D,
    searchRef: O
  }, /* @__PURE__ */ m.exports.createElement(iS, {
    as: Ci,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Fm, {
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
  }, /* @__PURE__ */ m.exports.createElement(Dm, {
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
          (de) => !de.disabled
        ).map(
          (de) => de.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Q.key) && (ue = ue.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Q.key)) {
          const de = Q.target, se = ue.indexOf(de);
          ue = ue.slice(se + 1);
        }
        setTimeout(
          () => _(ue)
        ), Q.preventDefault();
      }
    })
  }))))));
}), W6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = $o(Ti, n), l = Eo(Ti, n), [a, s] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = Ce(
    t,
    (E) => c(E)
  ), d = Uc(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && v && w && p) {
      const E = i.trigger.getBoundingClientRect(), $ = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), R = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const de = R.left - $.left, se = P.left - de, at = E.left - se, st = E.width + at, jr = Math.max(st, $.width), er = window.innerWidth - Dn, tr = hh(se, [
          Dn,
          er - jr
        ]);
        a.style.minWidth = st + "px", a.style.left = tr + "px";
      } else {
        const de = $.right - R.right, se = window.innerWidth - P.right - de, at = window.innerWidth - E.right - se, st = E.width + at, jr = Math.max(st, $.width), er = window.innerWidth - Dn, tr = hh(se, [
          Dn,
          er - jr
        ]);
        a.style.minWidth = st + "px", a.style.right = tr + "px";
      }
      const T = d(), N = window.innerHeight - Dn * 2, D = v.scrollHeight, z = window.getComputedStyle(u), F = parseInt(z.borderTopWidth, 10), _ = parseInt(z.paddingTop, 10), H = parseInt(z.borderBottomWidth, 10), M = parseInt(z.paddingBottom, 10), I = F + _ + D + M + H, O = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = E.top + E.height / 2 - Dn, ae = N - ne, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ie = F + _ + Q, xe = I - ie;
      if (ie <= ne) {
        const de = w === T[T.length - 1].ref.current;
        a.style.bottom = "0px";
        const se = u.clientHeight - v.offsetTop - v.offsetHeight, at = Math.max(ae, ee + (de ? J : 0) + se + H), st = ie + at;
        a.style.height = st + "px";
      } else {
        const de = w === T[0].ref.current;
        a.style.top = "0px";
        const at = Math.max(ne, F + v.offsetTop + (de ? C : 0) + ee) + xe;
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
  return /* @__PURE__ */ m.exports.createElement(q6, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Iv = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Dn, ...i } = e, l = mg(n);
  return /* @__PURE__ */ m.exports.createElement(Qb, Z({}, l, i, {
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
}), [q6, gg] = Hi(Ti, {}), Ov = "SelectViewport", Q6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Eo(Ov, n), i = gg(Ov, n), l = Ce(t, o.onViewportChange), a = m.exports.useRef(0);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Vc.Slot, {
    scope: n
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
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
}), G6 = "SelectGroup";
Hi(G6);
const mh = "SelectItem", [K6, Y6] = Hi(mh), X6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, a = $o(mh, n), s = Eo(mh, n), u = a.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = Ce(t, (p) => {
    var y;
    return (y = s.itemRefCallback) === null || y === void 0 ? void 0 : y.call(s, p, r, o);
  }), v = si(), w = () => {
    o || (a.onValueChange(r), a.onOpenChange(!1));
  };
  return /* @__PURE__ */ m.exports.createElement(K6, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
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
      ((y = s.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (T6.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), As = "SelectItemText", Z6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = $o(As, n), a = Eo(As, n), s = Y6(As, n), u = M6(As, n), [c, f] = m.exports.useState(null), d = Ce(
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
  ]), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Ve.span, Z({
    id: s.textId
  }, i, {
    ref: d
  })), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ Gt.exports.createPortal(i.children, l.valueNode) : null);
}), Nv = "SelectScrollUpButton", J6 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Eo(Nv, e.__scopeSelect), r = gg(Nv, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(Ok, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop - s.offsetHeight);
    }
  })) : null;
}), Mv = "SelectScrollDownButton", eI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Eo(Mv, e.__scopeSelect), r = gg(Mv, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = Ce(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(Ok, Z({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop + s.offsetHeight);
    }
  })) : null;
}), Ok = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Eo("SelectScrollButton", n), l = m.exports.useRef(null), a = Uc(n), s = m.exports.useCallback(() => {
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
  ]), /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
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
}), Nk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = Ce(t, o), l = P6(n);
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
  ]), /* @__PURE__ */ m.exports.createElement(_6, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", Z({}, r, {
    ref: i,
    defaultValue: n
  })));
});
Nk.displayName = "BubbleSelect";
function Mk(e) {
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
function Dk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = tI(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const s = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function tI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const nI = D6, rI = F6, oI = B6, iI = j6, lI = H6, aI = V6, sI = Q6, uI = X6, cI = Z6, fI = J6, dI = eI, pI = {
  int: "Afrikaans",
  native: "Afrikaans"
}, hI = {
  int: "Albanian",
  native: "Shqip"
}, mI = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, gI = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, vI = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, yI = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, xI = {
  int: "Basque",
  native: "Euskara"
}, wI = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, bI = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, SI = {
  int: "Bosnian",
  native: "Bosanski"
}, kI = {
  int: "Breton",
  native: "Brezhoneg"
}, CI = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, $I = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, EI = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, AI = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, PI = {
  int: "Danish",
  native: "Dansk"
}, _I = {
  int: "Dutch",
  native: "Nederlands"
}, RI = {
  int: "English",
  native: "English"
}, TI = {
  int: "Esperanto",
  native: "Esperanto"
}, II = {
  int: "Estonian",
  native: "Eesti"
}, OI = {
  int: "Faroese",
  native: "F\xF8royskt"
}, NI = {
  int: "Finnish",
  native: "Suomi"
}, MI = {
  int: "French",
  native: "Fran\xE7ais"
}, DI = {
  int: "Galician",
  native: "Galego"
}, LI = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, FI = {
  int: "German",
  native: "Deutsch"
}, zI = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, BI = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, jI = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, HI = {
  int: "Hausa",
  native: "Hrvatski"
}, VI = {
  int: "Hausa",
  native: "Hausa"
}, UI = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, WI = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, qI = {
  int: "Hungarian",
  native: "Magyar"
}, QI = {
  int: "Icelandic",
  native: "\xCDslenska"
}, GI = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, KI = {
  int: "Irish",
  native: "Gaeilge"
}, YI = {
  int: "Italian",
  native: "Italiano"
}, XI = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, ZI = {
  int: "Javanese",
  native: "Basa Jawa"
}, JI = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, eO = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, tO = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, nO = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, rO = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, oO = {
  int: "Latin",
  native: "lingua latina"
}, iO = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, lO = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, aO = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, sO = {
  int: "Malagasy",
  native: "Malagasy"
}, uO = {
  int: "Malay",
  native: "Bahasa Melayu"
}, cO = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, fO = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, dO = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, pO = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, hO = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, mO = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, gO = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, vO = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, yO = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, xO = {
  int: "Polish",
  native: "Polski"
}, wO = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, bO = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, SO = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, kO = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, CO = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, $O = {
  int: "Sardinian",
  native: "Sardu"
}, EO = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, AO = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, PO = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, _O = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, RO = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, TO = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, IO = {
  int: "Somali",
  native: "Af-Soomaali"
}, OO = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, NO = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, MO = {
  int: "Swahili",
  native: "Kiswahili"
}, DO = {
  int: "Swedish",
  native: "Svenska"
}, LO = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, FO = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, zO = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, BO = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, jO = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, HO = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, VO = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, UO = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, WO = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, qO = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, QO = {
  int: "Uzbek",
  native: "O'zbek"
}, GO = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, KO = {
  int: "Visayan",
  native: "Bisaya"
}, YO = {
  int: "Welsh",
  native: "Cymraeg"
}, XO = {
  int: "West Frisian",
  native: "Frysk"
}, Dv = {
  af: pI,
  sq: hI,
  ar: mI,
  hy: gI,
  as: vI,
  az: yI,
  eu: xI,
  be: wI,
  bn: bI,
  bs: SI,
  br: kI,
  bg: CI,
  my: $I,
  ca: EI,
  cs: AI,
  da: PI,
  nl: _I,
  en: RI,
  eo: TI,
  et: II,
  fo: OI,
  fi: NI,
  fr: MI,
  gl: DI,
  ka: LI,
  de: FI,
  el: zI,
  gn: BI,
  gu: jI,
  hr: HI,
  ha: VI,
  he: UI,
  hi: WI,
  hu: qI,
  is: QI,
  id: GI,
  ga: KI,
  it: YI,
  ja: XI,
  jv: ZI,
  kn: JI,
  kk: eO,
  km: tO,
  ko: nO,
  ku: rO,
  la: oO,
  lv: iO,
  lt: lO,
  mk: aO,
  mg: sO,
  ms: uO,
  ml: cO,
  mr: fO,
  mn: dO,
  ne: pO,
  nb: hO,
  nn: mO,
  or: gO,
  ps: vO,
  fa: yO,
  pl: xO,
  pt: wO,
  pa: bO,
  ro: SO,
  ru: kO,
  rw: CO,
  sc: $O,
  sr: EO,
  sz: AO,
  zh: PO,
  si: _O,
  sk: RO,
  sl: TO,
  so: IO,
  cb: OO,
  es: NO,
  sw: MO,
  sv: DO,
  sy: LO,
  tl: FO,
  tg: zO,
  tz: BO,
  ta: jO,
  te: HO,
  th: VO,
  tr: UO,
  uk: WO,
  ur: qO,
  uz: QO,
  vi: GO,
  cx: KO,
  cy: YO,
  fy: XO
}, Lk = je.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ B(uI, {
  className: Ai("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ B(cI, {
    children: e
  })
}));
Lk.displayName = "SelectItem";
const ZO = (e) => {
  var n;
  const t = Rk();
  return /* @__PURE__ */ ce(nI, {
    value: (n = t[Rv]) == null ? void 0 : n[qu].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [Rv]: {
          [qu]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ ce(rI, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ B(oI, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ B(iI, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ B("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ B(lI, {
      container: e.container.current,
      children: /* @__PURE__ */ ce(aI, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ B(fI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ B(sI, {
          className: "p-[5px]",
          children: Object.keys(Dv).map((r) => {
            const o = Dv[r];
            return /* @__PURE__ */ B(Lk, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ B(dI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
}, JO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), e7 = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z", fill: "currentColor" })), t7 = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" })), n7 = () => ({
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
function r7(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Fk = "ScrollArea", [zk, Jz] = Ni(Fk), [o7, _n] = zk(Fk), i7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [a, s] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [E, $] = m.exports.useState(!1), P = Ce(
    t,
    (T) => s(T)
  ), R = Tk(o);
  return /* @__PURE__ */ m.exports.createElement(o7, {
    scope: n,
    type: r,
    dir: R,
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
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
    dir: R
  }, l, {
    ref: P,
    style: {
      position: "relative",
      ["--radix-scroll-area-corner-width"]: p + "px",
      ["--radix-scroll-area-corner-height"]: x + "px",
      ...e.style
    }
  })));
}), l7 = "ScrollAreaViewport", a7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = _n(l7, n), l = m.exports.useRef(null), a = Ce(t, l, i.onViewportChange);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
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
}), Zn = "ScrollAreaScrollbar", s7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _n(Zn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, a = e.orientation === "horizontal";
  return m.exports.useEffect(() => (a ? i(!0) : l(!0), () => {
    a ? i(!1) : l(!1);
  }), [
    a,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(u7, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement(c7, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement(Bk, Z({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(vg, Z({}, r, {
    ref: t
  })) : null;
}), u7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _n(Zn, e.__scopeScrollArea), [i, l] = m.exports.useState(!1);
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
  ]), /* @__PURE__ */ m.exports.createElement(zr, {
    present: n || i
  }, /* @__PURE__ */ m.exports.createElement(Bk, Z({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), c7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _n(Zn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = qc(
    () => s("SCROLL_END"),
    100
  ), [a, s] = r7("hidden", {
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
  ]), /* @__PURE__ */ m.exports.createElement(zr, {
    present: n || a !== "hidden"
  }, /* @__PURE__ */ m.exports.createElement(vg, Z({
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
}), Bk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = _n(Zn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), a = e.orientation === "horizontal", s = qc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(a ? u : c);
    }
  }, 10);
  return Ku(n.viewport, s), Ku(n.content, s), /* @__PURE__ */ m.exports.createElement(zr, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(vg, Z({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), vg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = _n(Zn, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [a, s] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = Vk(a.viewport, a.content), c = {
    ...r,
    sizes: a,
    onSizesChange: s,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return g7(d, l.current, a, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(f7, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = Lv(d, a, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(d7, Z({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = Lv(d, a);
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
}), f7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = _n(Zn, e.__scopeScrollArea), [l, a] = m.exports.useState(), s = m.exports.useRef(null), u = Ce(t, s, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(Hk, Z({
    "data-orientation": "horizontal"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Wc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
    onDragScroll: (c) => e.onDragScroll(c.x),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollLeft + c.deltaX;
        e.onWheelScroll(d), Wk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: s.current.clientWidth,
          paddingStart: Gu(l.paddingLeft),
          paddingEnd: Gu(l.paddingRight)
        }
      });
    }
  }));
}), d7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = _n(Zn, e.__scopeScrollArea), [l, a] = m.exports.useState(), s = m.exports.useRef(null), u = Ce(t, s, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(Hk, Z({
    "data-orientation": "vertical"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Wc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
    onDragScroll: (c) => e.onDragScroll(c.y),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollTop + c.deltaY;
        e.onWheelScroll(d), Wk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: s.current.clientHeight,
          paddingStart: Gu(l.paddingTop),
          paddingEnd: Gu(l.paddingBottom)
        }
      });
    }
  }));
}), [p7, jk] = zk(Zn), Hk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: a, onThumbPositionChange: s, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = _n(Zn, n), [h, v] = m.exports.useState(null), w = Ce(
    t,
    (P) => v(P)
  ), p = m.exports.useRef(null), y = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = rt(c), S = rt(s), E = qc(f, 10);
  function $(P) {
    if (p.current) {
      const R = P.clientX - p.current.left, T = P.clientY - p.current.top;
      u({
        x: R,
        y: T
      });
    }
  }
  return m.exports.useEffect(() => {
    const P = (R) => {
      const T = R.target;
      (h == null ? void 0 : h.contains(T)) && A(R, b);
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
  ]), Ku(h, E), Ku(g.content, E), /* @__PURE__ */ m.exports.createElement(p7, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: rt(i),
    onThumbPointerUp: rt(l),
    onThumbPositionChange: S,
    onThumbPointerDown: rt(a)
  }, /* @__PURE__ */ m.exports.createElement(Ve.div, Z({}, d, {
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
      const R = P.target;
      R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), gh = "ScrollAreaThumb", h7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = jk(gh, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(zr, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(m7, Z({
    ref: t
  }, r)));
}), m7 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = _n(gh, n), l = jk(gh, n), { onThumbPositionChange: a } = l, s = Ce(
    t,
    (f) => l.onThumbChange(f)
  ), u = m.exports.useRef(), c = qc(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return m.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const g = v7(f, a);
          u.current = g, a();
        }
      };
      return a(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    a
  ]), /* @__PURE__ */ m.exports.createElement(Ve.div, Z({
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
function Gu(e) {
  return e ? parseInt(e, 10) : 0;
}
function Vk(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Wc(e) {
  const t = Vk(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function g7(e, t, n, r = "ltr") {
  const o = Wc(n), i = o / 2, l = t || i, a = o - l, s = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return Uk([
    s,
    u
  ], f)(e);
}
function Lv(e, t, n = "ltr") {
  const r = Wc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, a = i - r, s = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = hh(e, s);
  return Uk([
    0,
    l
  ], [
    0,
    a
  ])(u);
}
function Uk(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Wk(e, t) {
  return e > 0 && e < t;
}
const v7 = (e, t = () => {
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
function qc(e, t) {
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
function Ku(e, t) {
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
const y7 = i7, x7 = a7, Fv = s7, zv = h7, Bv = (e) => typeof e == "object" && e != null && e.nodeType === 1, jv = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", fd = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return jv(n.overflowY, t) || jv(n.overflowX, t) || ((r) => {
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
}, Ps = (e, t, n, r, o, i, l, a) => i < e && l > t || i > e && l < t ? 0 : i <= e && a <= n || l >= t && a >= n ? i - e - r : l > t && a < n || i < e && a > n ? l - t + o : 0, w7 = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, Hv = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: a, inline: s, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (N) => N !== u;
  if (!Bv(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Bv(h) && f(h); ) {
    if (h = w7(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && fd(h) && !fd(document.documentElement) || h != null && fd(h, c) && g.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: E, left: $ } = e.getBoundingClientRect();
  let P = a === "start" || a === "nearest" ? A : a === "end" ? E : A + x / 2, R = s === "center" ? $ + b / 2 : s === "end" ? S : $;
  const T = [];
  for (let N = 0; N < g.length; N++) {
    const D = g[N], { height: z, width: F, top: _, right: H, bottom: M, left: I } = D.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && $ >= 0 && E <= w && S <= v && A >= _ && E <= M && $ >= I && S <= H)
      return T;
    const O = getComputedStyle(D), k = parseInt(O.borderLeftWidth, 10), C = parseInt(O.borderTopWidth, 10), J = parseInt(O.borderRightWidth, 10), ne = parseInt(O.borderBottomWidth, 10);
    let ae = 0, ee = 0;
    const Q = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - k - J : 0, ie = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - C - ne : 0, xe = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : F / D.offsetWidth : 0, ue = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : z / D.offsetHeight : 0;
    if (d === D)
      ae = a === "start" ? P : a === "end" ? P - w : a === "nearest" ? Ps(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = s === "start" ? R : s === "center" ? R - v / 2 : s === "end" ? R - v : Ps(p, p + v, v, k, J, p + R, p + R + b, b), ae = Math.max(0, ae + y), ee = Math.max(0, ee + p);
    else {
      ae = a === "start" ? P - _ - C : a === "end" ? P - M + ne + ie : a === "nearest" ? Ps(_, M, z, C, ne + ie, P, P + x, x) : P - (_ + z / 2) + ie / 2, ee = s === "start" ? R - I - k : s === "center" ? R - (I + F / 2) + Q / 2 : s === "end" ? R - H + J + Q : Ps(I, H, F, k, J + Q, R, R + b, b);
      const { scrollLeft: de, scrollTop: se } = D;
      ae = Math.max(0, Math.min(se + ae / ue, D.scrollHeight - z / ue + ie)), ee = Math.max(0, Math.min(de + ee / xe, D.scrollWidth - F / xe + Q)), P += se - ae, R += de - ee;
    }
    T.push({ el: D, top: ae, left: ee });
  }
  return T;
}, b7 = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function S7(e, t) {
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
    return t.behavior(Hv(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of Hv(e, b7(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function Vv(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var qk = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, ou = Object.prototype.hasOwnProperty, Qk = Object.prototype.toString, Uv = Object.defineProperty, Wv = Object.getOwnPropertyDescriptor, qv = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Qk.call(t) === "[object Array]";
}, Qv = function(t) {
  if (!t || Qk.call(t) !== "[object Object]")
    return !1;
  var n = ou.call(t, "constructor"), r = t.constructor && t.constructor.prototype && ou.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || ou.call(t, o);
}, Gv = function(t, n) {
  Uv && n.name === "__proto__" ? Uv(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Kv = function(t, n) {
  if (n === "__proto__")
    if (ou.call(t, n)) {
      if (Wv)
        return Wv(t, n).value;
    } else
      return;
  return t[n];
}, Yv = function e() {
  var t, n, r, o, i, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Kv(a, n), o = Kv(t, n), a !== o && (c && o && (Qv(o) || (i = qv(o))) ? (i ? (i = !1, l = r && qv(r) ? r : []) : l = r && Qv(r) ? r : {}, Gv(a, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Gv(a, { name: n, newValue: o }));
  return a;
};
function vh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function k7() {
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
      o = u, c ? C7(c, a)(...u) : l(null, ...u);
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
function C7(e, t) {
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
function Fl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Xv(e.position) : "start" in e || "end" in e ? Xv(e) : "line" in e || "column" in e ? yh(e) : "";
}
function yh(e) {
  return Zv(e && e.line) + ":" + Zv(e && e.column);
}
function Xv(e) {
  return yh(e && e.start) + "-" + yh(e && e.end);
}
function Zv(e) {
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
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = Fl(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = o[0], this.ruleId = o[1], this.file, this.actual, this.expected, this.url, this.note;
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
const vn = { basename: $7, dirname: E7, extname: A7, join: P7, sep: "/" };
function $7(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Ua(e);
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
function E7(e) {
  if (Ua(e), e.length === 0)
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
function A7(e) {
  Ua(e);
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
function P7(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Ua(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : _7(n);
}
function _7(e) {
  Ua(e);
  const t = e.charCodeAt(0) === 47;
  let n = R7(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function R7(e, t) {
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
function Ua(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const T7 = { cwd: I7 };
function I7() {
  return "/";
}
function xh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function O7(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!xh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return N7(e);
}
function N7(e) {
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
const dd = ["history", "path", "basename", "stem", "extname", "dirname"];
class M7 {
  constructor(t) {
    let n;
    t ? typeof t == "string" || D7(t) ? n = { value: t } : xh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = T7.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < dd.length; ) {
      const i = dd[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      dd.includes(o) || (this[o] = n[o]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    xh(t) && (t = O7(t)), hd(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? vn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Jv(this.basename, "dirname"), this.path = vn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? vn.basename(this.path) : void 0;
  }
  set basename(t) {
    hd(t, "basename"), pd(t, "basename"), this.path = vn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? vn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (pd(t, "extname"), Jv(this.dirname, "extname"), t) {
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
    hd(t, "stem"), pd(t, "stem"), this.path = vn.join(this.dirname || "", t + (this.extname || ""));
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
function pd(e, t) {
  if (e && e.includes(vn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + vn.sep + "`"
    );
}
function hd(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Jv(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function D7(e) {
  return qk(e);
}
const L7 = Kk().freeze(), Gk = {}.hasOwnProperty;
function Kk() {
  const e = k7(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = a, i.attachers = t, i.use = s, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const v = Kk();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(Yv(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (vd("data", r), n[v] = w, i) : Gk.call(n, v) && n[v] || null : v ? (vd("data", r), n = v, i) : n;
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
    if (vd("use", r), v != null)
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
      P ? (vh(P[1]) && vh(E) && (E = Yv(!0, P[1], E)), P[1] = E) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = fl(v), p = i.Parser;
    return md("parse", p), ey(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = fl(w), y = i.Compiler;
    return gd("stringify", y), ty(v), ey(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (ty(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(y);
    y(null, p);
    function y(x, b) {
      e.run(v, fl(w), A);
      function A(S, E, $) {
        E = E || v, S ? b(S) : x ? x(E) : p(null, E, $);
      }
    }
  }
  function d(v, w) {
    let p, y;
    return i.run(v, w, x), ny("runSync", "run", y), p;
    function x(b, A) {
      Vv(b), p = A, y = !0;
    }
  }
  function g(v, w) {
    if (i.freeze(), md("process", i.Parser), gd("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = fl(v);
      i.run(i.parse(b), b, (S, E, $) => {
        if (S || !E || !$)
          A(S);
        else {
          const P = i.stringify(E, $);
          P == null || (B7(P) ? $.value = P : $.result = P), A(S, $);
        }
      });
      function A(S, E) {
        S || !E ? x(S) : y ? y(E) : w(null, E);
      }
    }
  }
  function h(v) {
    let w;
    i.freeze(), md("processSync", i.Parser), gd("processSync", i.Compiler);
    const p = fl(v);
    return i.process(p, y), ny("processSync", "process", w), p;
    function y(x) {
      w = !0, Vv(x);
    }
  }
}
function ey(e, t) {
  return typeof e == "function" && e.prototype && (F7(e.prototype) || t in e.prototype);
}
function F7(e) {
  let t;
  for (t in e)
    if (Gk.call(e, t))
      return !0;
  return !1;
}
function md(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function gd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function vd(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ty(e) {
  if (!vh(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ny(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function fl(e) {
  return z7(e) ? e : new M7(e);
}
function z7(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function B7(e) {
  return typeof e == "string" || qk(e);
}
const j7 = {};
function H7(e, t) {
  const n = t || j7, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Yk(e, r, o);
}
function Yk(e, t, n) {
  if (V7(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ry(e.children, t, n);
  }
  return Array.isArray(e) ? ry(e, t, n) : "";
}
function ry(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = Yk(e[o], t, n);
  return r.join("");
}
function V7(e) {
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
const oy = {}.hasOwnProperty;
function Xk(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    U7(t, e[n]);
  return t;
}
function U7(e, t) {
  let n;
  for (n in t) {
    const o = (oy.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      oy.call(o, l) || (o[l] = []);
      const a = i[l];
      W7(
        o[l],
        Array.isArray(a) ? a : a ? [a] : []
      );
    }
  }
}
function W7(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const q7 = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ht = Br(/[A-Za-z]/), Yu = Br(/\d/), Q7 = Br(/[\dA-Fa-f]/), ft = Br(/[\dA-Za-z]/), G7 = Br(/[!-/:-@[-`{-~]/), iy = Br(/[#-'*+\--9=?A-Z^-~]/);
function ba(e) {
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
const Qc = Br(/\s/), Gc = Br(q7);
function Br(e) {
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
const K7 = {
  tokenize: Y7
};
function Y7(e) {
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
const X7 = {
  tokenize: Z7
}, ly = {
  tokenize: J7
};
function Z7(e) {
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
      ly,
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
      ly,
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
      let $ = E, P, R;
      for (; $--; )
        if (t.events[$][0] === "exit" && t.events[$][1].type === "chunkFlow") {
          if (P) {
            R = t.events[$][1].end;
            break;
          }
          P = !0;
        }
      for (p(r), S = E; S < t.events.length; )
        t.events[S][1].end = Object.assign({}, R), S++;
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
function J7(e, t, n) {
  return ge(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Xu(e) {
  if (e === null || De(e) || Qc(e))
    return 1;
  if (Gc(e))
    return 2;
}
function Kc(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const wh = {
  name: "attention",
  tokenize: t8,
  resolveAll: e8
};
function e8(e, t) {
  let n = -1, r, o, i, l, a, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          ay(f, -s), ay(d, s), l = {
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
            Kc(
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
function t8(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Xu(r);
  let i;
  return l;
  function l(s) {
    return e.enter("attentionSequence"), i = s, a(s);
  }
  function a(s) {
    if (s === i)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Xu(s), f = !c || c === 2 && o || n.includes(s), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(s);
  }
}
function ay(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const n8 = {
  name: "autolink",
  tokenize: r8
};
function r8(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Ht(h) ? (e.consume(h), l) : iy(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || ft(h) ? a(h) : u(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), s) : (h === 43 || h === 45 || h === 46 || ft(h)) && r++ < 32 ? (e.consume(h), a) : u(h);
  }
  function s(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || ba(h) ? n(h) : (e.consume(h), s);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : iy(h) ? (e.consume(h), u) : n(h);
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
const Wa = {
  tokenize: o8,
  partial: !0
};
function o8(e, t, n) {
  return ge(e, r, "linePrefix");
  function r(o) {
    return o === null || X(o) ? t(o) : n(o);
  }
}
const Zk = {
  name: "blockQuote",
  tokenize: i8,
  continuation: {
    tokenize: l8
  },
  exit: a8
};
function i8(e, t, n) {
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
function l8(e, t, n) {
  return ge(
    e,
    e.attempt(Zk, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function a8(e) {
  e.exit("blockQuote");
}
const Jk = {
  name: "characterEscape",
  tokenize: s8
};
function s8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return G7(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const sy = document.createElement("i");
function yg(e) {
  const t = "&" + e + ";";
  sy.innerHTML = t;
  const n = sy.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const eC = {
  name: "characterReference",
  tokenize: u8
};
function u8(e, t, n) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = Q7, c) : (e.enter("characterReferenceValue"), i = 7, l = Yu, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === ft && !yg(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const uy = {
  name: "codeFenced",
  tokenize: c8,
  concrete: !0
};
function c8(e, t, n) {
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
    return R;
    function R(N) {
      return S.enter("lineEnding"), S.consume(N), S.exit("lineEnding"), T;
    }
    function T(N) {
      return P.parser.lazy[P.now().line] ? $(N) : E(N);
    }
  }
  function A(S, E, $) {
    let P = 0;
    return ge(
      S,
      R,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function R(D) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), T(D);
    }
    function T(D) {
      return D === u ? (S.consume(D), P++, T) : P < s ? $(D) : (S.exit("codeFencedFenceSequence"), ge(S, N, "whitespace")(D));
    }
    function N(D) {
      return D === null || X(D) ? (S.exit("codeFencedFence"), E(D)) : $(D);
    }
  }
}
const yd = {
  name: "codeIndented",
  tokenize: d8
}, f8 = {
  tokenize: p8,
  partial: !0
};
function d8(e, t, n) {
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
    return u === null ? s(u) : X(u) ? e.attempt(f8, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || X(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function p8(e, t, n) {
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
const h8 = {
  name: "codeText",
  tokenize: v8,
  resolve: m8,
  previous: g8
};
function m8(e) {
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
function g8(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function v8(e, t, n) {
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
function tC(e) {
  const t = {};
  let n = -1, r, o, i, l, a, s, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, y8(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), a = e.slice(o, n), a.unshift(r), Rt(e, o, n - o + 1, a));
    }
  }
  return !u;
}
function y8(e, t) {
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
const x8 = {
  tokenize: S8,
  resolve: b8
}, w8 = {
  tokenize: k8,
  partial: !0
};
function b8(e) {
  return tC(e), e;
}
function S8(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(a);
  }
  function o(a) {
    return a === null ? i(a) : X(a) ? e.check(
      w8,
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
function k8(e, t, n) {
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
function nC(e, t, n, r, o, i, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || ba(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
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
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : ba(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function rC(e, t, n, r, o, i) {
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
function oC(e, t, n, r, o, i) {
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
function zl(e, t) {
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
const C8 = {
  name: "definition",
  tokenize: E8
}, $8 = {
  tokenize: A8,
  partial: !0
};
function E8(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(s) {
    return e.enter("definition"), rC.call(
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
    ), s === 58 ? (e.enter("definitionMarker"), e.consume(s), e.exit("definitionMarker"), zl(
      e,
      nC(
        e,
        e.attempt(
          $8,
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
function A8(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? zl(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? oC(
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
const P8 = {
  name: "hardBreakEscape",
  tokenize: _8
};
function _8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return X(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const R8 = {
  name: "headingAtx",
  tokenize: I8,
  resolve: T8
};
function T8(e, t) {
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
function I8(e, t, n) {
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
const O8 = [
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
], cy = ["pre", "script", "style", "textarea"], N8 = {
  name: "htmlFlow",
  tokenize: L8,
  resolveTo: D8,
  concrete: !0
}, M8 = {
  tokenize: F8,
  partial: !0
};
function D8(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function L8(e, t, n) {
  const r = this;
  let o, i, l, a, s;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : I) : Ht(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", a = 0, g) : Ht(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(a++) ? (e.consume(C), a === l.length ? r.interrupt ? t : T : g) : n(C);
  }
  function h(C) {
    return Ht(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && cy.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : T(C)) : O8.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : T(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || ft(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : T) : n(C);
  }
  function p(C) {
    return ve(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Ht(C) ? (e.consume(C), x) : ve(C) ? (e.consume(C), y) : P(C);
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
    return C === 62 ? (e.consume(C), R) : n(C);
  }
  function R(C) {
    return ve(C) ? (e.consume(C), R) : C === null || X(C) ? T(C) : n(C);
  }
  function T(C) {
    return C === 45 && o === 2 ? (e.consume(C), F) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), O) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), M) : X(C) && (o === 6 || o === 7) ? e.check(
      M8,
      O,
      N
    )(C) : C === null || X(C) ? N(C) : (e.consume(C), T);
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
    )(C) : (e.enter("htmlFlowData"), T(C));
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
    return C === 45 ? (e.consume(C), I) : T(C);
  }
  function _(C) {
    return C === 47 ? (e.consume(C), l = "", H) : T(C);
  }
  function H(C) {
    return C === 62 && cy.includes(l.toLowerCase()) ? (e.consume(C), O) : Ht(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), H) : T(C);
  }
  function M(C) {
    return C === 93 ? (e.consume(C), I) : T(C);
  }
  function I(C) {
    return C === 62 ? (e.consume(C), O) : C === 45 && o === 2 ? (e.consume(C), I) : T(C);
  }
  function O(C) {
    return C === null || X(C) ? (e.exit("htmlFlowData"), k(C)) : (e.consume(C), O);
  }
  function k(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function F8(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Wa, t, n);
  }
}
const z8 = {
  name: "htmlText",
  tokenize: B8
};
function B8(e, t, n) {
  const r = this;
  let o, i, l, a;
  return s;
  function s(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), E) : k === 63 ? (e.consume(k), A) : Ht(k) ? (e.consume(k), R) : n(k);
  }
  function c(k) {
    return k === 45 ? (e.consume(k), f) : k === 91 ? (e.consume(k), i = "CDATA[", l = 0, w) : Ht(k) ? (e.consume(k), b) : n(k);
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
    return Ht(k) ? (e.consume(k), $) : n(k);
  }
  function $(k) {
    return k === 45 || ft(k) ? (e.consume(k), $) : P(k);
  }
  function P(k) {
    return X(k) ? (a = P, M(k)) : ve(k) ? (e.consume(k), P) : O(k);
  }
  function R(k) {
    return k === 45 || ft(k) ? (e.consume(k), R) : k === 47 || k === 62 || De(k) ? T(k) : n(k);
  }
  function T(k) {
    return k === 47 ? (e.consume(k), O) : k === 58 || k === 95 || Ht(k) ? (e.consume(k), N) : X(k) ? (a = T, M(k)) : ve(k) ? (e.consume(k), T) : O(k);
  }
  function N(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ft(k) ? (e.consume(k), N) : D(k);
  }
  function D(k) {
    return k === 61 ? (e.consume(k), z) : X(k) ? (a = D, M(k)) : ve(k) ? (e.consume(k), D) : T(k);
  }
  function z(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, F) : X(k) ? (a = z, M(k)) : ve(k) ? (e.consume(k), z) : (e.consume(k), o = void 0, H);
  }
  function F(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : X(k) ? (a = F, M(k)) : (e.consume(k), F);
  }
  function _(k) {
    return k === 62 || k === 47 || De(k) ? T(k) : n(k);
  }
  function H(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? T(k) : (e.consume(k), H);
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
const xg = {
  name: "labelEnd",
  tokenize: q8,
  resolveTo: W8,
  resolveAll: U8
}, j8 = {
  tokenize: Q8
}, H8 = {
  tokenize: G8
}, V8 = {
  tokenize: K8
};
function U8(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function W8(e, t) {
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
    Kc(
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
function q8(e, t, n) {
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
      j8,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      H8,
      t,
      l ? e.attempt(V8, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function Q8(e, t, n) {
  return r;
  function r(s) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(s), e.exit("resourceMarker"), zl(e, o);
  }
  function o(s) {
    return s === 41 ? a(s) : nC(
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
    return De(s) ? zl(e, l)(s) : a(s);
  }
  function l(s) {
    return s === 34 || s === 39 || s === 40 ? oC(
      e,
      zl(e, a),
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
function G8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return rC.call(
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
function K8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const Y8 = {
  name: "labelStartImage",
  tokenize: X8,
  resolveAll: xg.resolveAll
};
function X8(e, t, n) {
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
const Z8 = {
  name: "labelStartLink",
  tokenize: J8,
  resolveAll: xg.resolveAll
};
function J8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const xd = {
  name: "lineEnding",
  tokenize: eN
};
function eN(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const iu = {
  name: "thematicBreak",
  tokenize: tN
};
function tN(e, t, n) {
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
  tokenize: oN,
  continuation: {
    tokenize: iN
  },
  exit: aN
}, nN = {
  tokenize: sN,
  partial: !0
}, rN = {
  tokenize: lN,
  partial: !0
};
function oN(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return a;
  function a(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : Yu(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(iu, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(g);
    }
    return n(g);
  }
  function s(g) {
    return Yu(g) && ++l < 10 ? (e.consume(g), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Wa,
      r.interrupt ? n : c,
      e.attempt(
        nN,
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
function iN(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Wa, o, i);
  function o(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ge(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function i(a) {
    return r.containerState.furtherBlankLines || !ve(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(rN, t, l)(a));
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
function lN(e, t, n) {
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
function aN(e) {
  e.exit(this.containerState.type);
}
function sN(e, t, n) {
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
const fy = {
  name: "setextUnderline",
  tokenize: cN,
  resolveTo: uN
};
function uN(e, t) {
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
function cN(e, t, n) {
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
const fN = {
  tokenize: dN
};
function dN(e) {
  const t = this, n = e.attempt(
    Wa,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ge(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(x8, o)
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
const pN = {
  resolveAll: lC()
}, hN = iC("string"), mN = iC("text");
function iC(e) {
  return {
    tokenize: t,
    resolveAll: lC(
      e === "text" ? gN : void 0
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
function lC(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function gN(e, t) {
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
function vN(e, t, n) {
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
  function f(T) {
    return l = zt(l, T), w(), l[l.length - 1] !== null ? [] : ($(t, 0), u.events = Kc(i, u.events, u), u.events);
  }
  function d(T, N) {
    return xN(g(T), N);
  }
  function g(T) {
    return yN(l, T);
  }
  function h() {
    return Object.assign({}, r);
  }
  function v(T) {
    o[T.line] = T.column, R();
  }
  function w() {
    let T;
    for (; r._index < l.length; ) {
      const N = l[r._index];
      if (typeof N == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < N.length; )
          p(N.charCodeAt(r._bufferIndex));
      else
        p(N);
    }
  }
  function p(T) {
    c = c(T);
  }
  function y(T) {
    X(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, R()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
  }
  function x(T, N) {
    const D = N || {};
    return D.type = T, D.start = h(), u.events.push(["enter", D, u]), a.push(D), D;
  }
  function b(T) {
    const N = a.pop();
    return N.end = h(), u.events.push(["exit", N, u]), N;
  }
  function A(T, N) {
    $(T, N.from);
  }
  function S(T, N) {
    N.restore();
  }
  function E(T, N) {
    return D;
    function D(z, F, _) {
      let H, M, I, O;
      return Array.isArray(z) ? C(z) : "tokenize" in z ? C([z]) : k(z);
      function k(ee) {
        return Q;
        function Q(ie) {
          const xe = ie !== null && ee[ie], ue = ie !== null && ee.null, de = [
            ...Array.isArray(xe) ? xe : xe ? [xe] : [],
            ...Array.isArray(ue) ? ue : ue ? [ue] : []
          ];
          return C(de)(ie);
        }
      }
      function C(ee) {
        return H = ee, M = 0, ee.length === 0 ? _ : J(ee[M]);
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
        return T(I, O), F;
      }
      function ae(ee) {
        return O.restore(), ++M < H.length ? J(H[M]) : _;
      }
    }
  }
  function $(T, N) {
    T.resolveAll && !i.includes(T) && i.push(T), T.resolve && Rt(
      u.events,
      N,
      u.events.length - N,
      T.resolve(u.events.slice(N), u)
    ), T.resolveTo && (u.events = T.resolveTo(u.events, u));
  }
  function P() {
    const T = h(), N = u.previous, D = u.currentConstruct, z = u.events.length, F = Array.from(a);
    return {
      restore: _,
      from: z
    };
    function _() {
      r = T, u.previous = N, u.currentConstruct = D, u.events.length = z, a = F, R();
    }
  }
  function R() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function yN(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function xN(e, t) {
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
const wN = {
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
  [62]: Zk
}, bN = {
  [91]: C8
}, SN = {
  [-2]: yd,
  [-1]: yd,
  [32]: yd
}, kN = {
  [35]: R8,
  [42]: iu,
  [45]: [fy, iu],
  [60]: N8,
  [61]: fy,
  [95]: iu,
  [96]: uy,
  [126]: uy
}, CN = {
  [38]: eC,
  [92]: Jk
}, $N = {
  [-5]: xd,
  [-4]: xd,
  [-3]: xd,
  [33]: Y8,
  [38]: eC,
  [42]: wh,
  [60]: [n8, z8],
  [91]: Z8,
  [92]: [P8, Jk],
  [93]: xg,
  [95]: wh,
  [96]: h8
}, EN = {
  null: [wh, pN]
}, AN = {
  null: [42, 95]
}, PN = {
  null: []
}, _N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: wN,
  contentInitial: bN,
  flowInitial: SN,
  flow: kN,
  string: CN,
  text: $N,
  insideSpan: EN,
  attentionMarkers: AN,
  disable: PN
}, Symbol.toStringTag, { value: "Module" }));
function RN(e = {}) {
  const t = Xk(
    [_N].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(K7),
    document: r(X7),
    flow: r(fN),
    string: r(hN),
    text: r(mN)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return vN(n, o, l);
    }
  }
}
const dy = /[\0\t\n\r]/g;
function TN() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, a) {
    const s = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (dy.lastIndex = f, u = dy.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
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
function IN(e) {
  for (; !tC(e); )
    ;
  return e;
}
function aC(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const ON = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function sC(e) {
  return e.replace(ON, NN);
}
function NN(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return aC(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return yg(n) || e;
}
const uC = {}.hasOwnProperty, MN = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), DN(n)(
    IN(
      RN(n).document().write(TN()(e, t, !0))
    )
  );
};
function DN(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(rr),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(er),
      blockQuote: a(de),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(se),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(se, s),
      codeText: a(at, s),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(st),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(jr),
      hardBreakEscape: a(tr),
      hardBreakTrailing: a(tr),
      htmlFlow: a(Ya, s),
      htmlFlowData: T,
      htmlText: a(Ya, s),
      htmlTextData: T,
      image: a(nr),
      label: s,
      link: a(rr),
      listItem: a(or),
      listItemValue: h,
      listOrdered: a(qi, g),
      listUnordered: a(qi),
      paragraph: a(sf),
      reference: ae,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(er),
      strong: a(uf),
      thematicBreak: a(V2)
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
      codeText: c(H),
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
      setextHeading: c(R),
      setextHeadingLineSequence: P,
      setextHeadingText: $,
      strong: c(),
      thematicBreak: c()
    }
  };
  cC(t, (e || {}).mdastExtensions || []);
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
      uC.call(Xt, L[ke][1].type) && Xt[L[ke][1].type].call(
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
      (Xt[1] || py).call(te, void 0, Xt[0]);
    }
    for (q.position = {
      start: ur(
        L.length > 0 ? L[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: ur(
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
    let be = q - 1, ke = -1, Xt = !1, ir, Tn, Qi, Gi;
    for (; ++be <= te; ) {
      const Le = L[be];
      if (Le[1].type === "listUnordered" || Le[1].type === "listOrdered" || Le[1].type === "blockQuote" ? (Le[0] === "enter" ? ke++ : ke--, Gi = void 0) : Le[1].type === "lineEndingBlank" ? Le[0] === "enter" && (ir && !Gi && !ke && !Qi && (Qi = be), Gi = void 0) : Le[1].type === "linePrefix" || Le[1].type === "listItemValue" || Le[1].type === "listItemMarker" || Le[1].type === "listItemPrefix" || Le[1].type === "listItemPrefixWhitespace" || (Gi = void 0), !ke && Le[0] === "enter" && Le[1].type === "listItemPrefix" || ke === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (ir) {
          let cf = be;
          for (Tn = void 0; cf--; ) {
            const In = L[cf];
            if (In[1].type === "lineEnding" || In[1].type === "lineEndingBlank") {
              if (In[0] === "exit")
                continue;
              Tn && (L[Tn][1].type = "lineEndingBlank", Xt = !0), In[1].type = "lineEnding", Tn = cf;
            } else if (!(In[1].type === "linePrefix" || In[1].type === "blockQuotePrefix" || In[1].type === "blockQuotePrefixWhitespace" || In[1].type === "blockQuoteMarker" || In[1].type === "listItemIndent"))
              break;
          }
          Qi && (!Tn || Qi < Tn) && (ir._spread = !0), ir.end = Object.assign(
            {},
            Tn ? L[Tn][1].start : Le[1].end
          ), L.splice(Tn || be, 0, ["exit", ir, Le[2]]), be++, te++;
        }
        Le[1].type === "listItemPrefix" && (ir = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, Le[1].start)
        }, L.splice(be, 0, ["enter", ir, Le[2]]), be++, te++, Qi = void 0, Gi = !0);
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
      start: ur(q.start)
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
      be[0].type !== L.type && (q ? q.call(this, L, be[0]) : (be[1] || py).call(this, L, be[0]));
    else
      throw new Error(
        "Cannot close `" + L.type + "` (" + Fl({
          start: L.start,
          end: L.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = ur(L.end), te;
  }
  function d() {
    return H7(this.stack.pop());
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
  function R() {
    i("setextHeadingSlurpLineEnding");
  }
  function T(L) {
    const q = this.stack[this.stack.length - 1];
    let te = q.children[q.children.length - 1];
    (!te || te.type !== "text") && (te = H2(), te.position = {
      start: ur(L.start)
    }, q.children.push(te)), this.stack.push(te);
  }
  function N(L) {
    const q = this.stack.pop();
    q.value += this.sliceSerialize(L), q.position.end = ur(L.end);
  }
  function D(L) {
    const q = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const te = q.children[q.children.length - 1];
      te.position.end = ur(L.end), i("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (T.call(this, L), N.call(this, L));
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
  function H() {
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
    te.label = sC(q), te.identifier = dn(q).toLowerCase();
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
    te ? (be = aC(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : be = yg(q);
    const ke = this.stack.pop();
    ke.value += be, ke.position.end = ur(L.end);
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
  function de() {
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
  function jr() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function er() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function tr() {
    return {
      type: "break"
    };
  }
  function Ya() {
    return {
      type: "html",
      value: ""
    };
  }
  function nr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function rr() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function qi(L) {
    return {
      type: "list",
      ordered: L.type === "listOrdered",
      start: null,
      spread: L._spread,
      children: []
    };
  }
  function or(L) {
    return {
      type: "listItem",
      spread: L._spread,
      checked: null,
      children: []
    };
  }
  function sf() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function uf() {
    return {
      type: "strong",
      children: []
    };
  }
  function H2() {
    return {
      type: "text",
      value: ""
    };
  }
  function V2() {
    return {
      type: "thematicBreak"
    };
  }
}
function ur(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function cC(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? cC(e, r) : LN(e, r);
  }
}
function LN(e, t) {
  let n;
  for (n in t)
    if (uC.call(t, n)) {
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
function py(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + Fl({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Fl({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + Fl({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function FN(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return MN(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
var fC = { exports: {} };
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
})(fC);
const zN = fC.exports, _s = Object.assign(Hr(Error), {
  eval: Hr(EvalError),
  range: Hr(RangeError),
  reference: Hr(ReferenceError),
  syntax: Hr(SyntaxError),
  type: Hr(TypeError),
  uri: Hr(URIError)
});
function Hr(e) {
  return t.displayName = e.displayName || e.name, t;
  function t(n, ...r) {
    const o = n && zN(n, ...r);
    return new e(o);
  }
}
const Rs = {}.hasOwnProperty, hy = {
  yaml: "-",
  toml: "+"
};
function wg(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = BN(r[n]);
  return t;
}
function BN(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Rs.call(hy, t))
      throw _s("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: hy[t]
    };
  } else if (typeof t != "object")
    throw _s("Expected matter to be an object, not `%j`", t);
  if (!Rs.call(t, "type"))
    throw _s("Missing `type` in matter `%j`", t);
  if (!Rs.call(t, "fence") && !Rs.call(t, "marker"))
    throw _s("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function jN(e) {
  const t = wg(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = bh(o, "open").charCodeAt(0), l = HN(o), a = n[i];
    Array.isArray(a) ? a.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function HN(e) {
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
      return $.column === 1 && ($.line === 1 || t) && (a = bh(e, "open"), s = 0, E === a.charCodeAt(s)) ? (f.enter(n), f.enter(r), f.enter(o), w(E)) : g(E);
    }
    function w(E) {
      return s === a.length ? (f.exit(o), ve(E) ? (f.enter("whitespace"), p(E)) : y(E)) : E === a.charCodeAt(s++) ? (f.consume(E), w) : g(E);
    }
    function p(E) {
      return ve(E) ? (f.consume(E), p) : (f.exit("whitespace"), y(E));
    }
    function y(E) {
      return X(E) ? (f.exit(r), f.enter("lineEnding"), f.consume(E), f.exit("lineEnding"), a = bh(e, "close"), s = 0, f.attempt(l, S, x)) : g(E);
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
function bh(e, t) {
  return e.marker ? my(e.marker, t).repeat(3) : my(e.fence, t);
}
function my(e, t) {
  return typeof e == "string" ? e : e[t];
}
function VN(e) {
  const t = wg(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = UN(i), r[i.type] = WN, r[i.type + "Value"] = qN;
  }
  return { enter: n, exit: r };
}
function UN(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function WN(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function qN(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function QN(e) {
  const t = [], n = {}, r = wg(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = GN(i), t.push({ atBreak: !0, character: Sh(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function GN(e) {
  const t = Sh(e, "open"), n = Sh(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function Sh(e, t) {
  return e.marker ? gy(e.marker, t).repeat(3) : gy(e.fence, t);
}
function gy(e, t) {
  return typeof e == "string" ? e : e[t];
}
function KN(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", jN(e)), n("fromMarkdownExtensions", VN(e)), n("toMarkdownExtensions", QN(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const YN = {
  tokenize: t9,
  partial: !0
}, dC = {
  tokenize: n9,
  partial: !0
}, pC = {
  tokenize: r9,
  partial: !0
}, di = {
  tokenize: i9,
  partial: !0
}, hC = {
  tokenize: o9,
  partial: !0
}, mC = {
  tokenize: JN,
  previous: yC
}, gC = {
  tokenize: e9,
  previous: Sg
}, Jn = {
  tokenize: ZN,
  previous: xC
}, Rn = {}, XN = {
  text: Rn
};
let Vr = 48;
for (; Vr < 123; )
  Rn[Vr] = Jn, Vr++, Vr === 58 ? Vr = 65 : Vr === 91 && (Vr = 97);
Rn[43] = Jn;
Rn[45] = Jn;
Rn[46] = Jn;
Rn[95] = Jn;
Rn[72] = [Jn, gC];
Rn[104] = [Jn, gC];
Rn[87] = [Jn, mC];
Rn[119] = [Jn, mC];
function ZN(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !vy(g) || !xC(r.previous) || kg(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(g));
  }
  function a(g) {
    return vy(g) ? (e.consume(g), a) : g === 64 ? (e.consume(g), s) : n(g);
  }
  function s(g) {
    return g === 46 ? e.check(di, d, u)(g) : g === 45 || g === 95 ? e.check(di, n, c)(g) : ft(g) ? (!i && Yu(g) && (i = !0), e.consume(g), s) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, s;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(di, n, u)(g) : s(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function JN(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !yC(r.previous) || kg(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      YN,
      e.attempt(dC, e.attempt(pC, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function e9(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !Sg(r.previous) || kg(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
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
    return h === null || ba(h) || Qc(h) || Gc(h) ? n(h) : e.attempt(dC, e.attempt(pC, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function t9(e, t, n) {
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
function n9(e, t, n) {
  let r, o;
  return i;
  function i(s) {
    return s === 38 ? e.check(
      hC,
      a,
      l
    )(s) : s === 46 || s === 95 ? e.check(di, a, l)(s) : s === null || ba(s) || Qc(s) || s !== 45 && Gc(s) ? a(s) : (e.consume(s), i);
  }
  function l(s) {
    return s === 46 ? (o = r, r = void 0, e.consume(s), i) : (s === 95 && (r = !0), e.consume(s), i);
  }
  function a(s) {
    return !o && !r ? t(s) : n(s);
  }
}
function r9(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      hC,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      di,
      i,
      o
    )(l) : bg(l) ? t(l) : vC(l) ? e.check(di, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function o9(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Ht(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return bg(l) ? t(l) : n(l);
  }
}
function i9(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return vC(i) ? (e.consume(i), o) : bg(i) ? t(i) : n(i);
  }
}
function vC(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function bg(e) {
  return e === null || e === 60 || De(e);
}
function vy(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ft(e);
}
function yC(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function Sg(e) {
  return e === null || !Ht(e);
}
function xC(e) {
  return e !== 47 && Sg(e);
}
function kg(e) {
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
function Vi(e) {
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
const l9 = {
  tokenize: h9,
  partial: !0
};
function a9() {
  return {
    document: {
      [91]: {
        tokenize: f9,
        continuation: {
          tokenize: d9
        },
        exit: p9
      }
    },
    text: {
      [91]: {
        tokenize: c9
      },
      [93]: {
        add: "after",
        tokenize: s9,
        resolveTo: u9
      }
    }
  };
}
function s9(e, t, n) {
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
function u9(e, t) {
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
function c9(e, t, n) {
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
function f9(e, t, n) {
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
function d9(e, t, n) {
  return e.check(Wa, t, e.attempt(l9, t, n));
}
function p9(e) {
  e.exit("gfmFootnoteDefinition");
}
function h9(e, t, n) {
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
function m9(e) {
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
              Kc(g, l.slice(u + 1, s), a)
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
      const v = Xu(u);
      if (h === 126)
        return f > 1 ? s(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return s(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = Xu(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), a(h);
    }
  }
}
const g9 = {
  flow: {
    null: {
      tokenize: y9,
      resolve: v9
    }
  }
}, yy = {
  tokenize: x9,
  partial: !0
};
function v9(e, t) {
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
function y9(e, t, n) {
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
    const H = r.interrupt;
    return r.interrupt = !0, e.attempt(
      {
        tokenize: F,
        partial: !0
      },
      function(M) {
        return r.interrupt = H, e.enter("tableDelimiterRow"), v(M);
      },
      function(M) {
        return r.interrupt = H, n(M);
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
      yy,
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
    return e.enter("tableRow"), _ === 124 ? $(_) : (e.enter("temporaryTableCellContent"), T(_));
  }
  function $(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), P;
  }
  function P(_) {
    return _ === null || X(_) ? D(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), R) : _ === 124 ? $(_) : (e.enter("temporaryTableCellContent"), T(_));
  }
  function R(_) {
    return ve(_) ? (e.consume(_), R) : (e.exit("whitespace"), P(_));
  }
  function T(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? N : T);
  }
  function N(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), T) : T(_);
  }
  function D(_) {
    return e.exit("tableRow"), _ === null ? z(_) : e.check(
      yy,
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
  function F(_, H, M) {
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
          return r._gfmTableDynamicInterruptHack = !1, H(J);
        }
      )(k));
    }
  }
}
function x9(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const w9 = {
  tokenize: S9
}, b9 = {
  text: {
    [91]: w9
  }
};
function S9(e, t, n) {
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
        tokenize: k9
      },
      t,
      n
    )(s) : n(s);
  }
}
function k9(e, t, n) {
  return ge(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function C9(e) {
  return Xk([
    XN,
    a9(),
    m9(e),
    g9,
    b9
  ]);
}
function Zu(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function $9(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Cg = function(e) {
  if (e == null)
    return _9;
  if (typeof e == "string")
    return P9(e);
  if (typeof e == "object")
    return Array.isArray(e) ? E9(e) : A9(e);
  if (typeof e == "function")
    return Yc(e);
  throw new Error("Expected function, string, or object as test");
};
function E9(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Cg(e[n]);
  return Yc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function A9(e) {
  return Yc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function P9(e) {
  return Yc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Yc(e) {
  return t;
  function t(n, ...r) {
    return Boolean(
      n && typeof n == "object" && "type" in n && Boolean(e.call(this, n, ...r))
    );
  }
}
function _9() {
  return !0;
}
const R9 = !0, xy = !1, T9 = "skip", wC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = Cg(t), i = r ? -1 : 1;
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
      if ((!t || o(a, s, u[u.length - 1] || null)) && (d = I9(n(a, u)), d[0] === xy))
        return d;
      if (a.children && d[0] !== T9)
        for (h = (r ? a.children.length : -1) + i, v = u.concat(a); h > -1 && h < a.children.length; ) {
          if (g = l(a.children[h], h, v)(), g[0] === xy)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function I9(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [R9, e] : [e];
}
const O9 = {}.hasOwnProperty, N9 = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = Cg(o.ignore || []), a = M9(i);
  let s = -1;
  for (; ++s < a.length; )
    wC(e, "text", u);
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
function M9(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        wy(e[n][0]),
        by(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      O9.call(e, n) && t.push([wy(n), by(e[n])]);
  }
  return t;
}
function wy(e) {
  return typeof e == "string" ? new RegExp($9(e), "g") : e;
}
function by(e) {
  return typeof e == "function" ? e : () => e;
}
const wd = "phrasing", bd = ["autolink", "link", "image", "label"], D9 = {
  transforms: [V9],
  enter: {
    literalAutolink: F9,
    literalAutolinkEmail: Sd,
    literalAutolinkHttp: Sd,
    literalAutolinkWww: Sd
  },
  exit: {
    literalAutolink: H9,
    literalAutolinkEmail: j9,
    literalAutolinkHttp: z9,
    literalAutolinkWww: B9
  }
}, L9 = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: wd,
      notInConstruct: bd
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: wd,
      notInConstruct: bd
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: wd, notInConstruct: bd }
  ]
};
function F9(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Sd(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function z9(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function B9(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function j9(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function H9(e) {
  this.exit(e);
}
function V9(e) {
  N9(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, U9],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, W9]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function U9(e, t, n, r, o) {
  let i = "";
  if (!bC(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !q9(n)))
    return !1;
  const l = Q9(n + r);
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
function W9(e, t, n, r) {
  return !bC(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function q9(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Q9(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = Zu(e, "(");
  let i = Zu(e, ")");
  for (; r !== -1 && o > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function bC(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Qc(n) || Gc(n)) && (!t || n !== 47);
}
function SC(e) {
  return e.label || !e.identifier ? e.label || "" : sC(e.identifier);
}
function G9(e, t, n) {
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
      i.move(K9(s, o[a + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function K9(e, t, n, r) {
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
const Y9 = /\r?\n|\r/g;
function X9(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = Y9.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(a) {
    n.push(t(a, o, !a));
  }
}
function kC(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function Z9(e, t) {
  return Sy(e, t.inConstruct, !0) && !Sy(e, t.notInConstruct, !1);
}
function Sy(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function CC(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let a = -1;
  for (; ++a < e.unsafe.length; ) {
    const c = e.unsafe[a];
    if (!Z9(e.stack, c))
      continue;
    const f = kC(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: h });
    }
  }
  o.sort(J9);
  let s = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (a = -1; ++a < o.length; ) {
    const c = o[a];
    c < s || c >= u || c + 1 < u && o[a + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[a - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (s !== c && i.push(ky(r.slice(s, c), "\\")), s = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), s++));
  }
  return i.push(ky(r.slice(s, u), n.after)), i.join("");
}
function J9(e, t) {
  return e - t;
}
function ky(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, a = 0, s;
  for (; s = n.exec(i); )
    r.push(s.index);
  for (; ++l < r.length; )
    a !== r[l] && o.push(e.slice(a, r[l])), o.push("\\"), a = r[l];
  return o.push(e.slice(a)), o.join("");
}
function Xc(e) {
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
$C.peek = cM;
function eM() {
  return {
    enter: {
      gfmFootnoteDefinition: nM,
      gfmFootnoteDefinitionLabelString: rM,
      gfmFootnoteCall: lM,
      gfmFootnoteCallString: aM
    },
    exit: {
      gfmFootnoteDefinition: iM,
      gfmFootnoteDefinitionLabelString: oM,
      gfmFootnoteCall: uM,
      gfmFootnoteCallString: sM
    }
  };
}
function tM() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: fM, footnoteReference: $C }
  };
}
function nM(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function rM() {
  this.buffer();
}
function oM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = dn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function iM(e) {
  this.exit(e);
}
function lM(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function aM() {
  this.buffer();
}
function sM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = dn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function uM(e) {
  this.exit(e);
}
function $C(e, t, n, r) {
  const o = Xc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return i += o.move(
    CC(n, SC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), l(), i += o.move("]"), i;
}
function cM() {
  return "[";
}
function fM(e, t, n, r) {
  const o = Xc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), a = n.enter("label");
  return i += o.move(
    CC(n, SC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    X9(G9(e, n, o.current()), dM)
  ), l(), i;
}
function dM(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function EC(e, t, n) {
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
const pM = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
AC.peek = yM;
const hM = {
  canContainEols: ["delete"],
  enter: { strikethrough: gM },
  exit: { strikethrough: vM }
}, mM = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: pM
    }
  ],
  handlers: { delete: AC }
};
function gM(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function vM(e) {
  this.exit(e);
}
function AC(e, t, n, r) {
  const o = Xc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += EC(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function yM() {
  return "~";
}
PC.peek = xM;
function PC(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], a = kC(l);
    let s;
    if (!!l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return o + r + o;
}
function xM() {
  return "`";
}
function wM(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || SM, o = [], i = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > s && (s = e[u].length); ++w < e[u].length; ) {
      const p = bM(e[u][w]);
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
      o[c] = Cy(n[c]);
  else {
    const h = Cy(n);
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
function bM(e) {
  return e == null ? "" : String(e);
}
function SM(e) {
  return e.length;
}
function Cy(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const kM = {
  enter: {
    table: CM,
    tableData: $y,
    tableHeader: $y,
    tableRow: EM
  },
  exit: {
    codeText: AM,
    table: $M,
    tableData: kd,
    tableHeader: kd,
    tableRow: kd
  }
};
function CM(e) {
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
function $M(e) {
  this.exit(e), this.setData("inTable");
}
function EM(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function kd(e) {
  this.exit(e);
}
function $y(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function AM(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, PM));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function PM(e, t) {
  return t === "|" ? t : e;
}
function _M(e) {
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
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = EC(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, h) {
    return wM(g, {
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
    let w = PC(g, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function RM(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function TM(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function IM(e, t, n, r) {
  const o = TM(n);
  let i = n.bulletCurrent || RM(n);
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
const OM = {
  exit: {
    taskListCheckValueChecked: Ey,
    taskListCheckValueUnchecked: Ey,
    paragraph: MM
  }
}, NM = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: DM }
};
function Ey(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function MM(e) {
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
function DM(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = Xc(r);
  i && a.move(l);
  let s = IM(e, t, n, {
    ...r,
    ...a.current()
  });
  return i && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function LM() {
  return [
    D9,
    eM(),
    hM,
    kM,
    OM
  ];
}
function FM(e) {
  return {
    extensions: [
      L9,
      tM(),
      mM,
      _M(e),
      NM
    ]
  };
}
function zM(e = {}) {
  const t = this.data();
  n("micromarkExtensions", C9(e)), n("fromMarkdownExtensions", LM()), n("toMarkdownExtensions", FM(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function BM(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function jM(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function HM(e, t) {
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
function VM(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function UM(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function _C(e, t) {
  const n = String(t.identifier).toUpperCase(), r = Vi(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
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
function WM(e, t) {
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
  }, _C(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function qM(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function QM(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function RC(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function GM(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return RC(e, t);
  const r = { src: Vi(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function KM(e, t) {
  const n = { src: Vi(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function YM(e, t) {
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
function XM(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return RC(e, t);
  const r = { href: Vi(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function ZM(e, t) {
  const n = { href: Vi(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function JM(e, t, n) {
  const r = e.all(t), o = n ? eD(n) : TC(t), i = {}, l = [];
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
function eD(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = TC(n[r]);
  }
  return t;
}
function TC(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function tD(e, t) {
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
function nD(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rD(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function oD(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const $g = IC("start"), Eg = IC("end");
function iD(e) {
  return { start: $g(e), end: Eg(e) };
}
function IC(e) {
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
function lD(e, t) {
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
    }, a = $g(t.children[1]), s = Eg(t.children[t.children.length - 1]);
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
function aD(e, t, n) {
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
function sD(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ay = 9, Py = 32;
function uD(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      _y(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(_y(t.slice(o), o > 0, !1)), i.join("");
}
function _y(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === Ay || i === Py; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === Ay || i === Py; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function cD(e, t) {
  const n = { type: "text", value: uD(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function fD(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const dD = {
  blockquote: BM,
  break: jM,
  code: HM,
  delete: VM,
  emphasis: UM,
  footnoteReference: _C,
  footnote: WM,
  heading: qM,
  html: QM,
  imageReference: GM,
  image: KM,
  inlineCode: YM,
  linkReference: XM,
  link: ZM,
  listItem: JM,
  list: tD,
  paragraph: nD,
  root: rD,
  strong: oD,
  table: lD,
  tableCell: sD,
  tableRow: aD,
  text: cD,
  thematicBreak: fD,
  toml: Ts,
  yaml: Ts,
  definition: Ts,
  footnoteDefinition: Ts
};
function Ts() {
  return null;
}
const OC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), wC(e, t, o, r);
  function o(i, l) {
    const a = l[l.length - 1];
    return n(
      i,
      a ? a.children.indexOf(i) : null,
      a
    );
  }
};
function pD(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const Ry = {}.hasOwnProperty;
function hD(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return OC(e, "definition", (r) => {
    const o = Ty(r.identifier);
    o && !Ry.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = Ty(r);
    return o && Ry.call(t, o) ? t[o] : null;
  }
}
function Ty(e) {
  return String(e || "").toUpperCase();
}
const Ju = {}.hasOwnProperty;
function mD(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...dD, ...n.handlers }, l.definition = hD(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = gD, l.applyData = vD, l.one = a, l.all = s, l.wrap = xD, l.augment = i, OC(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    Ju.call(o, c) || (o[c] = u);
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
      pD(f) || (c.position = { start: $g(f), end: Eg(f) });
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
    return NC(l, u, c);
  }
  function s(u) {
    return Ag(l, u);
  }
}
function gD(e, t) {
  e.position && (t.position = iD(e));
}
function vD(e, t) {
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
function NC(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return Ju.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: Ag(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : yD(e, t);
}
function Ag(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = NC(e, r[o], t);
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
function yD(e, t) {
  const n = t.data || {}, r = "value" in t && !(Ju.call(n, "hProperties") || Ju.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: Ag(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function xD(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function wD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = Vi(i.toLowerCase());
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
function MC(e, t) {
  const n = mD(e, t), r = n.one(e, null), o = wD(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const bD = function(e, t) {
  return e && "run" in e ? kD(e, t) : CD(e || t);
}, SD = bD;
function kD(e, t) {
  return (n, r, o) => {
    e.run(MC(n, t), r, (i) => {
      o(i);
    });
  };
}
function CD(e) {
  return (t) => MC(t, e);
}
class qa {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
qa.prototype.property = {};
qa.prototype.normal = {};
qa.prototype.space = null;
function DC(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new qa(n, r, t);
}
function kh(e) {
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
let $D = 0;
const le = Ao(), Be = Ao(), LC = Ao(), V = Ao(), Ae = Ao(), pi = Ao(), Ct = Ao();
function Ao() {
  return 2 ** ++$D;
}
const Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Be,
  overloadedBoolean: LC,
  number: V,
  spaceSeparated: Ae,
  commaSeparated: pi,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), Cd = Object.keys(Ch);
class Pg extends Yt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), Iy(this, "space", o), typeof r == "number")
      for (; ++i < Cd.length; ) {
        const l = Cd[i];
        Iy(this, Cd[i], (r & Ch[l]) === Ch[l]);
      }
  }
}
Pg.prototype.defined = !0;
function Iy(e, t, n) {
  n && (e[t] = n);
}
const ED = {}.hasOwnProperty;
function Ui(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (ED.call(e.properties, r)) {
      const o = e.properties[r], i = new Pg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[kh(r)] = r, n[kh(i.attribute)] = r;
    }
  return new qa(t, n, e.space);
}
const FC = Ui({
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
}), zC = Ui({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function BC(e, t) {
  return t in e ? e[t] : t;
}
function jC(e, t) {
  return BC(e, t.toLowerCase());
}
const HC = Ui({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: jC,
  properties: { xmlns: null, xmlnsXLink: null }
}), VC = Ui({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Be,
    ariaAutoComplete: null,
    ariaBusy: Be,
    ariaChecked: Be,
    ariaColCount: V,
    ariaColIndex: V,
    ariaColSpan: V,
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
    ariaLevel: V,
    ariaLive: null,
    ariaModal: Be,
    ariaMultiLine: Be,
    ariaMultiSelectable: Be,
    ariaOrientation: null,
    ariaOwns: Ae,
    ariaPlaceholder: null,
    ariaPosInSet: V,
    ariaPressed: Be,
    ariaReadOnly: Be,
    ariaRelevant: null,
    ariaRequired: Be,
    ariaRoleDescription: Ae,
    ariaRowCount: V,
    ariaRowIndex: V,
    ariaRowSpan: V,
    ariaSelected: Be,
    ariaSetSize: V,
    ariaSort: null,
    ariaValueMax: V,
    ariaValueMin: V,
    ariaValueNow: V,
    ariaValueText: null,
    role: null
  }
}), AD = Ui({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: jC,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: pi,
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
    cols: V,
    colSpan: null,
    content: null,
    contentEditable: Be,
    controls: le,
    controlsList: Ae,
    coords: V | pi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: LC,
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
    height: V,
    hidden: le,
    high: V,
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
    low: V,
    manifest: null,
    max: null,
    maxLength: V,
    media: null,
    method: null,
    min: null,
    minLength: V,
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
    optimum: V,
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
    rows: V,
    rowSpan: V,
    sandbox: Ae,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shape: null,
    size: V,
    sizes: null,
    slot: null,
    span: V,
    spellCheck: Be,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: V,
    step: null,
    style: null,
    tabIndex: V,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: Be,
    width: V,
    wrap: null,
    align: null,
    aLink: null,
    archive: Ae,
    axis: null,
    background: null,
    bgColor: null,
    border: V,
    borderColor: null,
    bottomMargin: V,
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
    hSpace: V,
    leftMargin: V,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: V,
    marginWidth: V,
    noResize: le,
    noHref: le,
    noShade: le,
    noWrap: le,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: V,
    rules: null,
    scheme: null,
    scrolling: Be,
    standby: null,
    summary: null,
    text: null,
    topMargin: V,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: V,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: V,
    security: null,
    unselectable: null
  }
}), PD = Ui({
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
  transform: BC,
  properties: {
    about: Ct,
    accentHeight: V,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: V,
    amplitude: V,
    arabicForm: null,
    ascent: V,
    attributeName: null,
    attributeType: null,
    azimuth: V,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: V,
    by: null,
    calcMode: null,
    capHeight: V,
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
    descent: V,
    diffuseConstant: V,
    direction: null,
    display: null,
    dur: null,
    divisor: V,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: V,
    enableBackground: null,
    end: null,
    event: null,
    exponent: V,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: V,
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
    g1: pi,
    g2: pi,
    glyphName: pi,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: V,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: V,
    horizOriginX: V,
    horizOriginY: V,
    id: null,
    ideographic: V,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: V,
    k: V,
    k1: V,
    k2: V,
    k3: V,
    k4: V,
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
    limitingConeAngle: V,
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
    mediaSize: V,
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
    overlinePosition: V,
    overlineThickness: V,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: V,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ae,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: V,
    pointsAtY: V,
    pointsAtZ: V,
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
    specularConstant: V,
    specularExponent: V,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: V,
    strikethroughThickness: V,
    string: null,
    stroke: null,
    strokeDashArray: Ct,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: V,
    strokeOpacity: V,
    strokeWidth: null,
    style: null,
    surfaceScale: V,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ct,
    tabIndex: V,
    tableValues: null,
    target: null,
    targetX: V,
    targetY: V,
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
    underlinePosition: V,
    underlineThickness: V,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: V,
    values: null,
    vAlphabetic: V,
    vMathematical: V,
    vectorEffect: null,
    vHanging: V,
    vIdeographic: V,
    version: null,
    vertAdvY: V,
    vertOriginX: V,
    vertOriginY: V,
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
    xHeight: V,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), _D = /^data[-\w.:]+$/i, Oy = /-[a-z]/g, RD = /[A-Z]/g;
function TD(e, t) {
  const n = kh(t);
  let r = t, o = Yt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && _D.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(Oy, OD);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!Oy.test(i)) {
        let l = i.replace(RD, ID);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Pg;
  }
  return new o(r, t);
}
function ID(e) {
  return "-" + e.toLowerCase();
}
function OD(e) {
  return e.charAt(1).toUpperCase();
}
const ND = DC([zC, FC, HC, VC, AD], "html"), UC = DC([zC, FC, HC, VC, PD], "svg"), MD = [
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
], Ny = {}.hasOwnProperty;
function DD(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const a = r.handlers;
    if (o && Ny.call(o, e)) {
      const s = String(o[e]);
      l = Ny.call(a, s) ? a[s] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function LD(e, t) {
  if (e = e.replace(
    t.subset ? FD(t.subset) : /["&'<>`]/g,
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
function FD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function zD(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function BD(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const jD = [
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
], $d = {
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
}, HD = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], WC = {}.hasOwnProperty, $h = {};
let Is;
for (Is in $d)
  WC.call($d, Is) && ($h[$d[Is]] = Is);
function VD(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (WC.call($h, o)) {
    const i = $h[o], l = "&" + i;
    return n && jD.includes(i) && !HD.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function UD(e, t, n) {
  let r = zD(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = VD(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = BD(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function hi(e, t) {
  return LD(e, Object.assign({ format: UD }, t));
}
function WD(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + hi(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, o) + "-->";
  function o(i) {
    return hi(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function qD(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function QD(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function GD(e) {
  return e.join(" ").trim();
}
function _g(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const Ue = QC(1), qC = QC(-1);
function QC(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, a = i && i[l];
    if (!o)
      for (; a && _g(a); )
        l += e, a = i[l];
    return a;
  }
}
const KD = {}.hasOwnProperty;
function GC(e) {
  return t;
  function t(n, r, o) {
    return KD.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const Rg = GC({
  html: YD,
  head: Ed,
  body: XD,
  p: ZD,
  li: JD,
  dt: eL,
  dd: tL,
  rt: My,
  rp: My,
  optgroup: nL,
  option: rL,
  menuitem: oL,
  colgroup: Ed,
  caption: Ed,
  thead: iL,
  tbody: lL,
  tfoot: aL,
  tr: sL,
  td: Dy,
  th: Dy
});
function Ed(e, t, n) {
  const r = Ue(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && _g(r.value.charAt(0)));
}
function YD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function XD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type !== "comment";
}
function ZD(e, t, n) {
  const r = Ue(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function JD(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function eL(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function tL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function My(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function nL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function rL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function oL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function iL(e, t, n) {
  const r = Ue(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function lL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function aL(e, t, n) {
  return !Ue(n, t);
}
function sL(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function Dy(e, t, n) {
  const r = Ue(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const uL = GC({
  html: cL,
  head: fL,
  body: dL,
  colgroup: pL,
  tbody: hL
});
function cL(e) {
  const t = Ue(e, -1);
  return !t || t.type !== "comment";
}
function fL(e) {
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
function dL(e) {
  const t = Ue(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && _g(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function pL(e, t, n) {
  const r = qC(n, t), o = Ue(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && Rg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function hL(e, t, n) {
  const r = qC(n, t), o = Ue(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && Rg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const Os = {
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
function mL(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const a = [];
  let s;
  o.space === "html" && e.tagName === "svg" && (r.schema = UC);
  const u = gL(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !uL(e, t, n)) && (a.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (s = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || s === "/" || s && s !== '"' && s !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(c), !l && (!i || !Rg(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function gL(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = vL(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function vL(e, t, n) {
  const r = TD(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, a;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const s = hi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: Os.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? QD : GD)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? s : (e.settings.preferUnquoted && (a = hi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: Os.unquoted[o][i],
      attribute: !0
    })
  )), a !== n && (e.settings.quoteSmart && Zu(n, l) > Zu(n, e.alternative) && (l = e.alternative), a = l + hi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? Os.single : Os.double)[o][i],
      attribute: !0
    })
  ) + l), s + (a && "=" + a));
}
function KC(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : hi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function yL(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : KC(e, t, n, r);
}
function xL(e, t, n, r) {
  return r.all(e);
}
const wL = DD("type", {
  invalid: bL,
  unknown: SL,
  handlers: { comment: WD, doctype: qD, element: mL, raw: yL, root: xL, text: KC }
});
function bL(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function SL(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function kL(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: CL,
    all: $L,
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
      voids: n.voids || MD,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? UC : ND,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function CL(e, t, n) {
  return wL(e, t, n, this);
}
function $L(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function EL(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return kL(o, n);
  }
}
function AL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      n.hasOwnProperty(r) && (e[r] = n[r]);
  }
  return e;
}
function Eh(e, t) {
  return Array(t + 1).join(e);
}
function PL(e) {
  return e.replace(/^\n*/, "");
}
function _L(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; )
    t--;
  return e.substring(0, t);
}
var RL = [
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
function Tg(e) {
  return Ig(e, RL);
}
var YC = [
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
function XC(e) {
  return Ig(e, YC);
}
function TL(e) {
  return JC(e, YC);
}
var ZC = [
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
function IL(e) {
  return Ig(e, ZC);
}
function OL(e) {
  return JC(e, ZC);
}
function Ig(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function JC(e, t) {
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
      var o = Eh(r === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + o + `

`;
    } else
      return `

` + Eh("#", r) + " " + e + `

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
    var c = Eh(l, a);
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
    var n = t.getAttribute("href"), r = ec(t.getAttribute("title"));
    return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")";
  }
};
lt.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, n) {
    var r = t.getAttribute("href"), o = ec(t.getAttribute("title"));
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
    var n = ec(t.getAttribute("alt")), r = t.getAttribute("src") || "", o = ec(t.getAttribute("title")), i = o ? ' "' + o + '"' : "";
    return r ? "![" + n + "](" + r + i + ")" : "";
  }
};
function ec(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function e2(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules)
    this.array.push(e.rules[t]);
}
e2.prototype = {
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
    return (t = Ad(this.array, e, this.options)) || (t = Ad(this._keep, e, this.options)) || (t = Ad(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++)
      e(this.array[t], t);
  }
};
function Ad(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    if (NL(o, t, n))
      return o;
  }
}
function NL(e, t, n) {
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
function ML(e) {
  var t = e.element, n = e.isBlock, r = e.isVoid, o = e.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!t.firstChild || o(t))) {
    for (var i = null, l = !1, a = null, s = Ly(a, t, o); s !== t; ) {
      if (s.nodeType === 3 || s.nodeType === 4) {
        var u = s.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !l && u[0] === " " && (u = u.substr(1)), !u) {
          s = Pd(s);
          continue;
        }
        s.data = u, i = s;
      } else if (s.nodeType === 1)
        n(s) || s.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, l = !1) : r(s) || o(s) ? (i = null, l = !0) : i && (l = !1);
      else {
        s = Pd(s);
        continue;
      }
      var c = Ly(a, s, o);
      a = s, s = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || Pd(i));
  }
}
function Pd(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function Ly(e, t, n) {
  return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var t2 = typeof window < "u" ? window : {};
function DL() {
  var e = t2.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function LL() {
  var e = function() {
  };
  return FL() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function FL() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
var zL = DL() ? t2.DOMParser : LL();
function BL(e, t) {
  var n;
  if (typeof e == "string") {
    var r = jL().parseFromString(
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = e.cloneNode(!0);
  return ML({
    element: n,
    isBlock: Tg,
    isVoid: XC,
    isPre: t.preformattedCode ? HL : null
  }), n;
}
var _d;
function jL() {
  return _d = _d || new zL(), _d;
}
function HL(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function VL(e, t) {
  return e.isBlock = Tg(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = UL(e), e.flankingWhitespace = WL(e, t), e;
}
function UL(e) {
  return !XC(e) && !IL(e) && /^\s*$/i.test(e.textContent) && !TL(e) && !OL(e);
}
function WL(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return { leading: "", trailing: "" };
  var n = qL(e.textContent);
  return n.leadingAscii && Fy("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && Fy("right", e, t) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function qL(e) {
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
function Fy(e, t, n) {
  var r, o, i;
  return e === "left" ? (r = t.previousSibling, o = / $/) : (r = t.nextSibling, o = /^ /), r && (r.nodeType === 3 ? i = o.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? i = !1 : r.nodeType === 1 && !Tg(r) && (i = o.test(r.textContent))), i;
}
var QL = Array.prototype.reduce, GL = [
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
function tc(e) {
  if (!(this instanceof tc))
    return new tc(e);
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
  this.options = AL({}, t, e), this.rules = new e2(this.options);
}
tc.prototype = {
  turndown: function(e) {
    if (!XL(e))
      throw new TypeError(
        e + " is not a string, or an element/document/fragment node."
      );
    if (e === "")
      return "";
    var t = n2.call(this, new BL(e, this.options));
    return KL.call(this, t);
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
    return GL.reduce(function(t, n) {
      return t.replace(n[0], n[1]);
    }, e);
  }
};
function n2(e) {
  var t = this;
  return QL.call(e.childNodes, function(n, r) {
    r = new VL(r, t.options);
    var o = "";
    return r.nodeType === 3 ? o = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (o = YL.call(t, r)), r2(n, o);
  }, "");
}
function KL(e) {
  var t = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (e = r2(e, n.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function YL(e) {
  var t = this.rules.forNode(e), n = n2.call(this, e), r = e.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function r2(e, t) {
  var n = _L(e), r = PL(t), o = Math.max(e.length - n.length, t.length - r.length), i = `

`.substring(0, o);
  return n + i + r;
}
function XL(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
async function ZL(e) {
  if (!e)
    return "";
  const t = await L7().use(FN).use(KN).use(zM).use(SD).use(EL).process(e);
  return String(t);
}
async function JL(e) {
  const t = new tc({
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
const eF = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    ZL(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, o2 = (e) => {
  const t = eF(e);
  return /* @__PURE__ */ B("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, i2 = m.exports.memo(({
  message: e
}) => /* @__PURE__ */ ce("div", {
  className: Ai("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ B(o2, {
      content: e.text
    })
  })]
}), (e, t) => e.message.text === t.message.text);
i2.displayName = "MessageItem";
const tF = (e) => {
  var s;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r,
    updateOrUpsertConventions: o
  } = _i(), [i] = m.exports.useState(e.action), l = (s = r[i]) != null ? s : [];
  function a() {
    var c, f, d;
    const u = ((f = (c = t.current) == null ? void 0 : c.children.length) != null ? f : 1) - 1;
    ((d = t.current) == null ? void 0 : d.children[u]) && n.current && setTimeout(() => {
      S7(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return _i.subscribe((u, c) => {
    var f, d;
    ((f = c.conventions[i]) == null ? void 0 : f.length) !== ((d = u.conventions[i]) == null ? void 0 : d.length) && a();
  }), m.exports.useEffect(() => {
    sc(nu, (u) => {
      const {
        data: c
      } = u;
      o(c.action, c.message);
    }), a();
  }, [o]), /* @__PURE__ */ B("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ ce(y7, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ B(x7, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ ce("div", {
          ref: t,
          children: [l.map((u) => /* @__PURE__ */ B(i2, {
            message: u
          }, u.id)), /* @__PURE__ */ B("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ B(Fv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ B(zv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ B(Fv, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ B(zv, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, Zc = (e) => e.replace("-page", "");
function Ah(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? Ah(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const nF = { run: (e) => e() }, rF = () => nF, l2 = typeof console.createTask < "u" ? console.createTask : rF;
function oF(e, t) {
  const n = t.shift(), r = l2(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function iF(e, t) {
  const n = t.shift(), r = l2(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function Rd(e, t) {
  for (const n of [...e])
    n(t);
}
class lF {
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
    const n = Ah(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Ah(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(oF, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(iF, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Rd(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && Rd(this._after, o);
    }) : (this._after && o && Rd(this._after, o), i);
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
function aF() {
  return new lF();
}
const Ph = aF(), Og = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && Ph.hook(t.name, n), n();
}, sF = n7();
function uF() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [a, s] = m.exports.useState([Xr]), u = a[a.length - 1], [c, f] = m.exports.useState(!1), {
    upsertConventions: d
  } = _i(), {
    open: g,
    setOpen: h,
    toggle: v,
    updateHistoryOpen: w,
    setIsChat: p
  } = ao(), y = m.exports.useCallback(() => {
    s((P) => {
      const R = [...P];
      return R.splice(-1, 1), R;
    }), p(!1), Ph.callHook("command-input");
  }, [p]);
  function x() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const b = m.exports.useCallback((P) => {
    t(P);
  }, []), A = m.exports.useCallback(async (P, R) => {
    if (console.log("handleValueSelect", P, R), P.endsWith("-page")) {
      p(!0), s((T) => [...T, P]);
      return;
    }
    if (P === ph && (f(!0), await Sl(nu, {
      text: R == null ? void 0 : R.text,
      action: ph
    }, "background"), f(!1)), P === qu && (f(!0), await Sl(nu, {
      text: R == null ? void 0 : R.text,
      action: qu
    }, "background"), f(!1)), P === ru) {
      const T = await JL(document.body), N = await Sl(nu, {
        text: T,
        action: ru
      }, "background");
      d(ru, N.message);
    }
    t("");
  }, [d, p]);
  m.exports.useEffect(() => {
    const P = (R) => {
      if (R.key === "j" && R.metaKey && (v(), u === Qu && y(), w(!1)), R.key === "Escape" && u === Xr && !ao.getState().subCommandOpen) {
        h(!1), w(!1);
        return;
      }
      R.key === "Escape" && u !== Xr && !ao.getState().subCommandOpen && (y(), Ph.callHook("command-input"));
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [w, u, y, v, h]), Og(i, {
    name: "command-input"
  });
  const S = u === Xr, E = u === Ri || u === wa, $ = u === Ri;
  return /* @__PURE__ */ ce(Xn, {
    children: [/* @__PURE__ */ B(tP, {
      open: g,
      children: /* @__PURE__ */ B(nP, {
        container: r.current,
        children: /* @__PURE__ */ B(rP, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ ce(an, {
            ref: o,
            value: e,
            onValueChange: b,
            loop: !0,
            children: [/* @__PURE__ */ B("div", {
              "cmdk-raycast-top-shine": ""
            }), /* @__PURE__ */ ce("div", {
              className: "flex items-center justify-between px-3 pt-1",
              children: [/* @__PURE__ */ B("div", {
                className: "flex items-center justify-start gap-2",
                children: a.map((P) => /* @__PURE__ */ B("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: Zc(P)
                }, P))
              }), $ && /* @__PURE__ */ B(ZO, {
                container: r
              })]
            }), /* @__PURE__ */ B(an.Input, {
              ref: (P) => {
                i.current = P;
              },
              onValueChange: (P) => {
                n.current = P;
              },
              autoFocus: !0,
              tabIndex: 1,
              className: Ai({
                hidden: !S
              }),
              placeholder: "Search for commands...",
              onKeyDown: (P) => {
                var R;
                P.key === "Enter" && x(), !(u === Xr || ((R = n.current) == null ? void 0 : R.length)) && P.key === "Backspace" && (P.preventDefault(), y(), x());
              }
            }, "cmdk-input"), S && /* @__PURE__ */ B("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ ce(an.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === Xr && /* @__PURE__ */ B(cF, {
                onSelect: A
              }), u === Qu && /* @__PURE__ */ B(fF, {
                onExit: y
              }), E && /* @__PURE__ */ B(dF, {
                page: u
              })]
            }), /* @__PURE__ */ ce("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [E && /* @__PURE__ */ B(pF, {
                page: u,
                onSendMessage: A
              }), E && c && /* @__PURE__ */ B("i", {
                className: "spinner gg-spinner/0.75"
              }), /* @__PURE__ */ B("button", {
                tabIndex: 2,
                "cmdk-raycast-open-trigger": "",
                children: /* @__PURE__ */ B("kbd", {
                  children: "\u21B5"
                })
              }), /* @__PURE__ */ B("hr", {}), /* @__PURE__ */ B(hF, {
                listRef: l,
                selectedValue: e,
                inputRef: i,
                onSelect: A
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
function cF({
  onSelect: e
}) {
  const {
    clear: t
  } = _i(), {
    updateHistoryOpen: n,
    setOpen: r
  } = ao();
  return /* @__PURE__ */ ce(Xn, {
    children: [/* @__PURE__ */ B(an.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ ce(an.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ ce(Fo, {
        isCommand: !0,
        value: "open-convenstions-history",
        onSelect: () => {
          r(!1), n(!0);
        },
        children: [/* @__PURE__ */ B(e7, {}), "View History"]
      }), /* @__PURE__ */ ce(Fo, {
        isCommand: !0,
        value: "clear-storage",
        onSelect: () => {
          t(), sF.clear();
        },
        children: [/* @__PURE__ */ B(JO, {}), "Clear Storage"]
      }), /* @__PURE__ */ ce(Fo, {
        isCommand: !0,
        onSelect: () => e(Qu),
        value: Qu,
        children: [/* @__PURE__ */ B(t7, {}), "Config"]
      }), /* @__PURE__ */ ce(Fo, {
        isCommand: !0,
        onSelect: () => e(wa),
        value: wa,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ ce(Fo, {
        isCommand: !0,
        onSelect: () => e(Ri),
        value: Ri,
        children: [/* @__PURE__ */ B($6, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ ce(Fo, {
        isCommand: !0,
        value: ru,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-notes/0.8 text-mayumi-gray-1200"
        }), "Summary"]
      })]
    })]
  });
}
function fF(e) {
  const t = Rk();
  return /* @__PURE__ */ B("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ B(fg, {
      light: !0,
      className: "w-1/2",
      value: t.OPENAI_API_KEY,
      onKeyDown: (n) => {
        var r;
        return n.key === "Enter" && (t.set({
          [C6]: n.currentTarget.value
        }), (r = e.onExit) == null || r.call(e)), !1;
      }
    })
  });
}
function dF(e) {
  return /* @__PURE__ */ B(tF, {
    action: Zc(e.page)
  });
}
function pF(e) {
  const [t, n] = m.exports.useState(""), r = m.exports.useRef(!1), o = m.exports.useRef(null), i = m.exports.useRef(""), l = (a) => {
    if (a.key === "Enter" && r.current === !1) {
      a.preventDefault();
      const s = Zc(e.page);
      e.onSendMessage(s, {
        text: i.current
      }), i.current = "", o.current.value = "", n(""), console.log("ChatInput", o.current);
    }
  };
  return Og(o, {
    name: "chat-input"
  }), /* @__PURE__ */ B(fg, {
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
function hF({
  inputRef: e,
  listRef: t,
  selectedValue: n,
  onSelect: r
}) {
  const {
    subCommandOpen: o,
    toggleSubCommand: i,
    setSubCommandOpen: l,
    isChat: a
  } = ao(), [, s] = m.exports.useState(), u = m.exports.useRef(null), c = n !== Xr;
  return m.exports.useEffect(() => {
    function f(d) {
      d.key === "m" && d.metaKey && (d.preventDefault(), c && i());
    }
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [c, i, l, e]), m.exports.useEffect(() => {
    const f = t.current;
    !f || (o ? f.style.overflow = "hidden" : f.style.overflow = "");
  }, [o, t]), o && Og(u, {
    name: "subcommand-input"
  }), /* @__PURE__ */ ce(V3, {
    open: o,
    onOpenChange: (f) => {
      !c || l(f);
    },
    modal: !0,
    children: [/* @__PURE__ */ ce(U3, {
      tabIndex: 3,
      disabled: !c,
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
    }), /* @__PURE__ */ B(W3, {
      side: "top",
      align: "end",
      className: "raycast-submenu outline-none",
      sideOffset: 16,
      alignOffset: 0,
      onEscapeKeyDown: () => {
        l(!1);
      },
      onCloseAutoFocus: (f) => {
        var d;
        f.preventDefault(), (d = e == null ? void 0 : e.current) == null || d.focus();
      },
      children: /* @__PURE__ */ ce(an, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ B(an.List, {
          children: /* @__PURE__ */ ce(an.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [a && /* @__PURE__ */ B(mF, {
              page: n
            }), !a && /* @__PURE__ */ B(gF, {
              value: n,
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ B(an.Input, {
          autoFocus: !0,
          onValueChange: s,
          ref: u,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function mF({
  page: e
}) {
  const {
    newConvention: t
  } = _i((n) => n);
  return /* @__PURE__ */ B(Xn, {
    children: /* @__PURE__ */ B(Ng, {
      value: "new-convention",
      onSelect: () => {
        t(Zc(e));
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: "New Convention"
      })
    })
  });
}
function gF(e) {
  return e.value === wa ? /* @__PURE__ */ B(vF, {
    onSelect: e.onSelect
  }) : e.value === Ri ? /* @__PURE__ */ B(yF, {
    onSelect: e.onSelect
  }) : null;
}
function a2(e) {
  const {
    setSubCommandOpen: t
  } = ao();
  return /* @__PURE__ */ B(Ng, {
    value: "open-chat",
    onSelect: () => {
      t(!1), e.onSelect(e.page);
    },
    shortcut: "\u21B5",
    children: /* @__PURE__ */ B("span", {
      className: "truncate",
      children: "Open Chat"
    })
  });
}
function vF({
  onSelect: e
}) {
  var t;
  return /* @__PURE__ */ ce(Xn, {
    children: [/* @__PURE__ */ B(Ng, {
      value: "search-input",
      onSelect: () => {
        e(ph, {
          text: Tv()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: (t = Tv()) != null ? t : "Search input"
      })
    }), /* @__PURE__ */ B(a2, {
      page: wa,
      onSelect: e
    })]
  });
}
function yF({
  onSelect: e
}) {
  return /* @__PURE__ */ B(Xn, {
    children: /* @__PURE__ */ B(a2, {
      page: Ri,
      onSelect: e
    })
  });
}
function Fo({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1
}) {
  return /* @__PURE__ */ ce(an.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ B("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function Ng({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ ce(an.Item, {
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
var Mg = Ga(), oe = (e) => Qa(e, Mg), Dg = Ga();
oe.write = (e) => Qa(e, Dg);
var Jc = Ga();
oe.onStart = (e) => Qa(e, Jc);
var Lg = Ga();
oe.onFrame = (e) => Qa(e, Lg);
var Fg = Ga();
oe.onFinish = (e) => Qa(e, Fg);
var mi = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = mi.findIndex((l) => l.cancel == r);
    ~i && mi.splice(i, 1), br -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return mi.splice(s2(n), 0, o), br += 1, u2(), o;
};
var s2 = (e) => ~(~mi.findIndex((t) => t.time > e) || ~mi.length);
oe.cancel = (e) => {
  Jc.delete(e), Lg.delete(e), Fg.delete(e), Mg.delete(e), Dg.delete(e);
};
oe.sync = (e) => {
  _h = !0, oe.batchedUpdates(e), _h = !1;
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
    Jc.delete(n), t = null;
  }, r;
};
var zg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => zg = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : f2();
};
var wr = -1, br = 0, _h = !1;
function Qa(e, t) {
  _h ? (t.delete(e), e(0)) : (t.add(e), u2());
}
function u2() {
  wr < 0 && (wr = 0, oe.frameLoop !== "demand" && zg(c2));
}
function xF() {
  wr = -1;
}
function c2() {
  ~wr && (zg(c2), oe.batchedUpdates(f2));
}
function f2() {
  let e = wr;
  wr = oe.now();
  let t = s2(wr);
  if (t && (d2(mi.splice(0, t), (n) => n.handler()), br -= t), !br) {
    xF();
    return;
  }
  Jc.flush(), Mg.flush(e ? Math.min(64, wr - e) : 16.667), Lg.flush(), Dg.flush(), Fg.flush();
}
function Ga() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    br += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return br -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), br -= t.size, d2(t, (r) => r(n) && e.add(r)), br += e.size, t = e);
  } };
}
function d2(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
var wF = Object.defineProperty, bF = (e, t) => {
  for (var n in t)
    wF(e, n, { get: t[n], enumerable: !0 });
}, hn = {};
bF(hn, { assign: () => kF, colors: () => Tr, createStringInterpolator: () => jg, skipAnimation: () => h2, to: () => p2, willAdvance: () => Hg });
function Rh() {
}
var SF = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
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
var he = (e, t) => e.forEach(t);
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
function Bl(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), he(n, t);
  }
}
var bl = (e, ...t) => Bl(e, (n) => n(...t)), Bg = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), jg, p2, Tr = null, h2 = !1, Hg = Rh, kF = (e) => {
  e.to && (p2 = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Tr = e.colors), e.skipAnimation != null && (h2 = e.skipAnimation), e.createStringInterpolator && (jg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (Hg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
}, jl = /* @__PURE__ */ new Set(), Vt = [], Td = [], nc = 0, ef = { get idle() {
  return !jl.size && !Vt.length;
}, start(e) {
  nc > e.priority ? (jl.add(e), oe.onStart(CF)) : (m2(e), oe(Th));
}, advance: Th, sort(e) {
  if (nc)
    oe.onFrame(() => ef.sort(e));
  else {
    let t = Vt.indexOf(e);
    ~t && (Vt.splice(t, 1), g2(e));
  }
}, clear() {
  Vt = [], jl.clear();
} };
function CF() {
  jl.forEach(m2), jl.clear(), oe(Th);
}
function m2(e) {
  Vt.includes(e) || g2(e);
}
function g2(e) {
  Vt.splice($F(Vt, (t) => t.priority > e.priority), 0, e);
}
function Th(e) {
  let t = Td;
  for (let n = 0; n < Vt.length; n++) {
    let r = Vt[n];
    nc = r.priority, r.idle || (Hg(r), r.advance(e), r.idle || t.push(r));
  }
  return nc = 0, Td = Vt, Td.length = 0, Vt = t, Vt.length > 0;
}
function $F(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var EF = (e, t, n) => Math.min(Math.max(n, e), t), AF = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, un = "[-+]?\\d*\\.?\\d+", rc = un + "%";
function tf(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var PF = new RegExp("rgb" + tf(un, un, un)), _F = new RegExp("rgba" + tf(un, un, un, un)), RF = new RegExp("hsl" + tf(un, rc, rc)), TF = new RegExp("hsla" + tf(un, rc, rc, un)), IF = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, OF = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, NF = /^#([0-9a-fA-F]{6})$/, MF = /^#([0-9a-fA-F]{8})$/;
function DF(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = NF.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Tr && Tr[e] !== void 0 ? Tr[e] : (t = PF.exec(e)) ? (zo(t[1]) << 24 | zo(t[2]) << 16 | zo(t[3]) << 8 | 255) >>> 0 : (t = _F.exec(e)) ? (zo(t[1]) << 24 | zo(t[2]) << 16 | zo(t[3]) << 8 | jy(t[4])) >>> 0 : (t = IF.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = MF.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = OF.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = RF.exec(e)) ? (zy(By(t[1]), Ns(t[2]), Ns(t[3])) | 255) >>> 0 : (t = TF.exec(e)) ? (zy(By(t[1]), Ns(t[2]), Ns(t[3])) | jy(t[4])) >>> 0 : null;
}
function Id(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function zy(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Id(o, r, e + 1 / 3), l = Id(o, r, e), a = Id(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function zo(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function By(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function jy(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ns(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Hy(e) {
  let t = DF(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var Sa = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return Sa({ range: e, output: t, extrapolate: n });
  if (U.str(e.output[0]))
    return jg(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    let c = FF(u, i);
    return LF(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function LF(e, t, n, r, o, i, l, a, s) {
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
function FF(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var zF = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return EF(0, 1, o / e);
}, oc = 1.70158, Ms = oc * 1.525, Vy = oc + 1, Uy = 2 * Math.PI / 3, Wy = 2 * Math.PI / 4.5, Ds = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, BF = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => Vy * e * e * e - oc * e * e, easeOutBack: (e) => 1 + Vy * Math.pow(e - 1, 3) + oc * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Ms + 1) * 2 * e - Ms) / 2 : (Math.pow(2 * e - 2, 2) * ((Ms + 1) * (e * 2 - 2) + Ms) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Uy), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Uy) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Wy)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Wy) / 2 + 1, easeInBounce: (e) => 1 - Ds(1 - e), easeOutBounce: Ds, easeInOutBounce: (e) => e < 0.5 ? (1 - Ds(1 - 2 * e)) / 2 : (1 + Ds(2 * e - 1)) / 2, steps: zF }, Ii = Symbol.for("FluidValue.get"), yo = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Ii]), yt = (e) => e && e[Ii] ? e[Ii]() : e, qy = (e) => e[yo] || null;
function jF(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ka(e, t) {
  let n = e[yo];
  n && n.forEach((r) => {
    jF(r, t);
  });
}
var Uz, Wz, fx, v2 = (fx = class {
  constructor(e) {
    G(this, Uz);
    G(this, Wz);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    HF(this, e);
  }
}, Uz = Ii, Wz = yo, fx), HF = (e, t) => y2(e, Ii, t);
function Wi(e, t) {
  if (e[Ii]) {
    let n = e[yo];
    n || y2(e, yo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Ca(e, t) {
  let n = e[yo];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[yo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var y2 = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), lu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, VF = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Qy = new RegExp(`(${lu.source})(%|[a-z]+)`, "i"), UF = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, nf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, x2 = (e) => {
  let [t, n] = WF(e);
  if (!t || Bg())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && nf.test(n) ? x2(n) : n || e;
}, WF = (e) => {
  let t = nf.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, Od, qF = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, w2 = (e) => {
  Od || (Od = Tr ? new RegExp(`(${Object.keys(Tr).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => yt(o).replace(nf, x2).replace(VF, Hy).replace(Od, Hy)), n = t.map((o) => o.match(lu).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => Sa({ ...e, output: o }));
  return (o) => {
    var a;
    let i = !Qy.test(t[0]) && ((a = t.find((s) => Qy.test(s))) == null ? void 0 : a.replace(lu, "")), l = 0;
    return t[0].replace(lu, () => `${r[l++](o)}${i || ""}`).replace(UF, qF);
  };
}, Vg = "react-spring: ", b2 = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Vg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, QF = b2(console.warn);
function GF() {
  QF(`${Vg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var KF = b2(console.warn);
function YF() {
  KF(`${Vg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function rf(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !Bg() && nf.test(e) || e in (Tr || {}));
}
var Ug = Bg() ? m.exports.useEffect : m.exports.useLayoutEffect, XF = () => {
  let e = m.exports.useRef(!1);
  return Ug(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function S2() {
  let e = m.exports.useState()[1], t = XF();
  return () => {
    t.current && e(Math.random());
  };
}
function ZF(e, t) {
  let [n] = m.exports.useState(() => ({ inputs: t, result: e() })), r = m.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && JF(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function JF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var k2 = (e) => m.exports.useEffect(e, ez), ez = [];
function Gy(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var $a = Symbol.for("Animated:node"), tz = (e) => !!e && e[$a] === e, xn = (e) => e && e[$a], Wg = (e, t) => SF(e, $a, t), of = (e) => e && e[$a] && e[$a].getPayload(), C2 = class {
  constructor() {
    G(this, "payload");
    Wg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, Ka = class extends C2 {
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
    return new Ka(t);
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
}, Ea = class extends Ka {
  constructor(t) {
    super(0);
    G(this, "_string", null);
    G(this, "_toString");
    this._toString = Sa({ output: [t, t] });
  }
  static create(t) {
    return new Ea(t);
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
    t && (this._toString = Sa({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, ic = { dependencies: null }, lf = class extends C2 {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return Pn(this.source, (n, r) => {
      tz(n) ? t[r] = n.getValue(e) : Bt(n) ? t[r] = yt(n) : e || (t[r] = n);
    }), t;
  }
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && he(this.payload, (e) => e.reset());
  }
  _makePayload(e) {
    if (e) {
      let t = /* @__PURE__ */ new Set();
      return Pn(e, this._addToPayload, t), Array.from(t);
    }
  }
  _addToPayload(e) {
    ic.dependencies && Bt(e) && ic.dependencies.add(e);
    let t = of(e);
    t && he(t, (n) => this.add(n));
  }
}, $2 = class extends lf {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new $2(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(nz)), !0);
  }
};
function nz(e) {
  return (rf(e) ? Ea : Ka).create(e);
}
function Ih(e) {
  let t = xn(e);
  return t ? t.constructor : U.arr(e) ? $2 : rf(e) ? Ea : Ka;
}
var Ky = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = iz(o, h);
    }, [o]), [a, s] = oz(r, t), u = S2(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new rz(c, s), d = m.exports.useRef();
    Ug(() => (d.current = f, he(s, (h) => Wi(h, f)), () => {
      d.current && (he(d.current.deps, (h) => Ca(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), k2(() => () => {
      let h = d.current;
      he(h.deps, (v) => Ca(v, h));
    });
    let g = t.getComponentProps(a.getValue());
    return m.exports.createElement(e, { ...g, ref: l });
  });
}, rz = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && oe.write(this.update);
  }
};
function oz(e, t) {
  let n = /* @__PURE__ */ new Set();
  return ic.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new lf(e), ic.dependencies = null, [e, n];
}
function iz(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var Yy = Symbol.for("AnimatedComponent"), lz = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new lf(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let a = Xy(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = Ky(l, o)) : l = l[Yy] || (l[Yy] = Ky(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return Pn(e, (l, a) => {
    U.arr(e) && (a = Xy(l)), i[a] = i(l);
  }), { animated: i };
}, Xy = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function Jr(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var Hl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), E2 = (e, t) => U.obj(e) ? t && e[t] : e, A2 = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, az = (e) => e, qg = (e, t = az) => {
  let n = sz;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, sz = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], uz = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function cz(e) {
  let t = {}, n = 0;
  if (Pn(e, (r, o) => {
    uz[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function P2(e) {
  let t = cz(e);
  if (t) {
    let n = { to: t };
    return Pn(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function Aa(e) {
  return e = yt(e), U.arr(e) ? e.map(Aa) : rf(e) ? hn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function fz(e) {
  for (let t in e)
    return !0;
  return !1;
}
function Oh(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function dz(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function pz(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var _2 = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Nh = { ..._2.default, mass: 1, damping: 1, easing: BF.linear, clamp: !1 }, hz = class {
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
    Object.assign(this, Nh);
  }
};
function mz(e, t, n) {
  n && (n = { ...n }, Zy(n, t), t = { ...n, ...t }), Zy(e, t), Object.assign(e, t);
  for (let l in Nh)
    e[l] == null && (e[l] = Nh[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function Zy(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var Jy = [], gz = class {
  constructor() {
    G(this, "changed", !1);
    G(this, "values", Jy);
    G(this, "toValues", null);
    G(this, "fromValues", Jy);
    G(this, "to");
    G(this, "from");
    G(this, "config", new hz());
    G(this, "immediate", !1);
  }
};
function R2(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, a) => {
    var h;
    let s, u, c = Hl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = Hl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Hl(v, t)), s = Jr(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
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
var Qg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? gi(e.get()) : t.every((n) => n.noop) ? T2(e.get()) : ln(e.get(), t.every((n) => n.finished)), T2 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), ln = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), gi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function I2(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: a, promise: s } = n;
  return !i && e === a && !t.reset ? s : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = qg(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && gi(r) || o !== n.asyncId && ln(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new ex(), x = new tx();
      return (async () => {
        if (hn.skipAnimation)
          throw Pa(n), x.result = ln(r, !1), f(x), x;
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
      return Pa(n), ln(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = ln(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof ex)
        v = w.result;
      else if (w instanceof tx)
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
function Pa(e, t) {
  Bl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var ex = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    G(this, "result");
  }
}, tx = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    G(this, "result");
  }
}, Mh = (e) => e instanceof Gg, vz = 1, Gg = class extends v2 {
  constructor() {
    super(...arguments);
    G(this, "id", vz++);
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
    return GF(), hn.to(this, t);
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
    ka(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || ef.sort(this), ka(this, { type: "priority", parent: this, priority: t });
  }
}, xo = Symbol.for("SpringPhase"), O2 = 1, Dh = 2, Lh = 4, Nd = (e) => (e[xo] & O2) > 0, cr = (e) => (e[xo] & Dh) > 0, dl = (e) => (e[xo] & Lh) > 0, nx = (e, t) => t ? e[xo] |= Dh | O2 : e[xo] &= ~Dh, rx = (e, t) => t ? e[xo] |= Lh : e[xo] &= ~Lh, yz = class extends Gg {
  constructor(t, n) {
    super();
    G(this, "key");
    G(this, "animation", new gz());
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
    return !(cr(this) || this._state.asyncTo) || dl(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    let t = xn(this);
    return t instanceof Ka ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Nd(this);
  }
  get isAnimating() {
    return cr(this);
  }
  get isPaused() {
    return dl(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, a = of(o.to);
    !a && Bt(o.to) && (l = Pt(yt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == Ea ? 1 : a ? a[f].lastPosition : l[f], g = o.immediate, h = d;
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
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), E = w == d ? c.v0 > 0 : w < d, $, P = !1, R = 1, T = Math.ceil(t / R);
            for (let N = 0; N < T && ($ = Math.abs(y) > b, !(!$ && (g = Math.abs(d - h) <= x, g))); ++N) {
              S && (P = h == d || h > d == E, P && (y = -y * A, h = d));
              let D = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * y, F = (D + z) / i.mass;
              y = y + F * R, h = h + y * R;
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
    if (cr(this)) {
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
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => Qg(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), Pa(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || Oh(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return Nd(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), U.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, qg(t, (a, s) => /^on/.test(s) ? E2(a, r) : a)), ix(this, t, "onProps"), hl(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return R2(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      dl(this) || (rx(this, !0), bl(l.pauseQueue), hl(this, "onPause", ln(this, pl(this, this.animation.to)), this));
    }, resume: () => {
      dl(this) && (rx(this, !1), cr(this) && this._resume(), bl(l.resumeQueue), hl(this, "onResume", ln(this, pl(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((a) => {
      if (t.loop && a.finished && !(n && a.noop)) {
        let s = N2(t);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(gi(this));
    let o = !U.und(t.to), i = !U.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(gi(this));
    let { key: l, defaultProps: a, animation: s } = this, { to: u, from: c } = s, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Ln(d, c);
    g && (s.from = d), d = yt(d);
    let h = !Ln(f, u);
    h && this._focus(f);
    let v = Oh(n.to), { config: w } = s, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && mz(w, Jr(n.config, l), n.config !== a.config ? Jr(a.config, l) : void 0);
    let x = xn(this);
    if (!x || U.und(f))
      return r(ln(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && Hl(n.reset, l), A = b ? d : this.get(), S = Aa(f), E = U.num(S) || U.arr(S) || rf(S), $ = !v && (!E || Hl(a.immediate || n.immediate, l));
    if (h) {
      let N = Ih(f);
      if (N !== x.constructor)
        if ($)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${N.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, R = Bt(f), T = !1;
    if (!R) {
      let N = b || !Nd(this) && g;
      (h || N) && (T = Ln(Aa(A), S), R = !T), (!Ln(s.immediate, $) && !$ || !Ln(w.decay, p) || !Ln(w.velocity, y)) && (R = !0);
    }
    if (T && cr(this) && (s.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || Bt(u)) && (s.values = x.getPayload(), s.toValues = Bt(f) ? null : P == Ea ? [1] : Pt(S)), s.immediate != $ && (s.immediate = $, !$ && !b && this._set(u)), R)) {
      let { onRest: N } = s;
      he(wz, (z) => ix(this, n, z));
      let D = ln(this, pl(this, u));
      bl(this._pendingCalls, D), this._pendingCalls.add(r), s.changed && oe.batchedUpdates(() => {
        var z;
        s.changed = !b, N == null || N(D, this), b ? Jr(a.onRest, D) : (z = s.onStart) == null || z.call(s, D, this);
      });
    }
    b && this._set(A), v ? r(I2(n.to, n, this._state, this)) : R ? this._start() : cr(this) && !h ? this._pendingCalls.add(r) : r(T2(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (qy(this) && this._detach(), n.to = t, qy(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (Wi(n, this), Mh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && Ca(t, this);
  }
  _set(t, n = !0) {
    let r = yt(t);
    if (!U.und(r)) {
      let o = xn(this);
      if (!o || !Ln(r, o.getValue())) {
        let i = Ih(r);
        !o || o.constructor != i ? Wg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, hl(this, "onStart", ln(this, pl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Jr(this.animation.onChange, t, this)), Jr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    xn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), cr(this) || (nx(this, !0), dl(this) || this._resume());
  }
  _resume() {
    hn.skipAnimation ? this.finish() : ef.start(this);
  }
  _stop(t, n) {
    if (cr(this)) {
      nx(this, !1);
      let r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ka(this, { type: "idle", parent: this });
      let o = n ? gi(this.get()) : ln(this.get(), pl(this, t != null ? t : r.to));
      bl(this._pendingCalls, o), r.changed && (r.changed = !1, hl(this, "onRest", o, this));
    }
  }
};
function pl(e, t) {
  let n = Aa(t), r = Aa(e.get());
  return Ln(r, n);
}
function N2(e, t = e.loop, n = e.to) {
  let r = Jr(t);
  if (r) {
    let o = r !== !0 && P2(r), i = (o || e).reverse, l = !o || o.reset;
    return _a({ ...e, loop: t, default: !1, pause: void 0, to: !i || Oh(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function _a(e) {
  let { to: t, from: n } = e = P2(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && ox(t, r), U.obj(n) && ox(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function xz(e) {
  let t = _a(e);
  return U.und(t.default) && (t.default = qg(t)), t;
}
function ox(e, t) {
  Pn(e, (n, r) => n != null && t.add(r));
}
var wz = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function ix(e, t, n) {
  e.animation[n] = t[n] !== A2(t, n) ? E2(t[n], e.key) : void 0;
}
function hl(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var bz = ["onStart", "onChange", "onRest"], Sz = 1, kz = class {
  constructor(e, t) {
    G(this, "id", Sz++);
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
    return e && this.queue.push(_a(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(_a) : this.queue = [], this._flush ? this._flush(this, t) : (z2(this, t), Fh(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      he(Pt(t), (r) => n[r].stop(!!e));
    } else
      Pa(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (U.und(e))
      this.start({ pause: !0 });
    else {
      let t = this.springs;
      he(Pt(e), (n) => t[n].pause());
    }
    return this;
  }
  resume(e) {
    if (U.und(e))
      this.start({ pause: !1 });
    else {
      let t = this.springs;
      he(Pt(e), (n) => t[n].resume());
    }
    return this;
  }
  each(e) {
    Pn(this.springs, e);
  }
  _onFrame() {
    let { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Bl(e, ([a, s]) => {
      s.value = this.get(), a(s, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Bl(t, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }), i && (this._started = !1, Bl(n, ([a, s]) => {
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
function Fh(e, t) {
  return Promise.all(t.map((n) => M2(e, n))).then((n) => Qg(e, n));
}
async function M2(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: a, onResolve: s } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(bz, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, bl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || A2(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(R2(++e._lastAsyncId, { props: t, state: f, actions: { pause: Rh, resume: Rh, start(v, w) {
    g ? (Pa(f, e._lastAsyncId), w(gi(e))) : (v.onRest = a, w(I2(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = Qg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = N2(t, l, o);
    if (v)
      return z2(e, [v]), M2(e, v, !0);
  }
  return s && oe.batchedUpdates(() => s(h, e, e.item)), h;
}
function lx(e, t) {
  let n = { ...e.springs };
  return t && he(Pt(t), (r) => {
    U.und(r.keys) && (r = _a(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), F2(n, r, (o) => L2(o));
  }), D2(e, n), n;
}
function D2(e, t) {
  Pn(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Wi(n, e));
  });
}
function L2(e, t) {
  let n = new yz();
  return n.key = e, t && Wi(n, t), n;
}
function F2(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function z2(e, t) {
  he(t, (n) => {
    F2(e.springs, n, (r) => L2(r, e));
  });
}
var af = ({ children: e, ...t }) => {
  let n = m.exports.useContext(lc), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = ZF(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = lc;
  return m.exports.createElement(i, { value: t }, e);
}, lc = Cz(af, {});
af.Provider = lc.Provider;
af.Consumer = lc.Consumer;
function Cz(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var $z = () => {
  let e = [], t = function(r) {
    YF();
    let o = [];
    return he(e, (i, l) => {
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
    return he(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return he(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    he(e, (o, i) => {
      let l = U.fun(r) ? r(i, o) : r;
      l && o.set(l);
    });
  }, t.start = function(r) {
    let o = [];
    return he(e, (i, l) => {
      if (U.und(r))
        o.push(i.start());
      else {
        let a = this._getProps(r, i, l);
        a && o.push(i.start(a));
      }
    }), o;
  }, t.stop = function() {
    return he(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return he(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  let n = function(r, o, i) {
    return U.fun(r) ? r(i, o) : r;
  };
  return t._getProps = n, t;
};
function Ez(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? $z() : void 0, []), i = m.exports.useRef(0), l = S2(), a = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = lx(p, y);
    return i.current > 0 && !a.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? Fh(p, y) : new Promise((b) => {
      D2(p, x), a.queue.push(() => {
        b(Fh(p, y));
      }), l();
    });
  } }), []), s = m.exports.useRef([...a.ctrls]), u = [], c = Gy(e) || 0;
  m.exports.useMemo(() => {
    he(s.current.slice(e, c), (p) => {
      dz(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = s.current[x] || (s.current[x] = new kz(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = xz(A));
    }
  }
  let d = s.current.map((p, y) => lx(p, u[y])), g = m.exports.useContext(af), h = Gy(g), v = g !== h && fz(g);
  Ug(() => {
    i.current++, a.ctrls = s.current;
    let { queue: p } = a;
    p.length && (a.queue = [], he(p, (y) => y())), he(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (pz(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), k2(() => () => {
    he(a.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function Az(e, t) {
  let n = U.fun(e), [[r], o] = Ez(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var Pz = class extends Gg {
  constructor(t, n) {
    super();
    G(this, "key");
    G(this, "idle", !0);
    G(this, "calc");
    G(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = Sa(...n);
    let r = this._get(), o = Ih(r);
    Wg(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Ln(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ax(this._active) && Md(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(yt) : Pt(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !ax(this._active) && (this.idle = !1, he(of(this), (t) => {
      t.done = !1;
    }), hn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), Md(this)) : ef.start(this));
  }
  _attach() {
    let t = 1;
    he(Pt(this.source), (n) => {
      Bt(n) && Wi(n, this), Mh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(Pt(this.source), (t) => {
      Bt(t) && Ca(t, this);
    }), this._active.clear(), Md(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (Mh(r) ? r.priority : 0) + 1), 0));
  }
};
function _z(e) {
  return e.idle !== !1;
}
function ax(e) {
  return !e.size || Array.from(e).every(_z);
}
function Md(e) {
  e.idle || (e.idle = !0, he(of(e), (t) => {
    t.done = !0;
  }), ka(e, { type: "idle", parent: e }));
}
hn.assign({ createStringInterpolator: w2, to: (e, t) => new Pz(e, t) });
var B2 = /^--/;
function Rz(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !B2.test(e) && !(Vl.hasOwnProperty(e) && Vl[e]) ? t + "px" : ("" + t).trim();
}
var sx = {};
function Tz(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: a, ...s } = t, u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : sx[f] || (sx[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = Rz(f, r[f]);
      B2.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), a !== void 0 && e.setAttribute("viewBox", a);
}
var Vl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Iz = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Oz = ["Webkit", "Ms", "Moz", "O"];
Vl = Object.keys(Vl).reduce((e, t) => (Oz.forEach((n) => e[Iz(n, t)] = e[t]), e), Vl);
var Nz = /^(matrix|translate|scale|rotate|skew)/, Mz = /^(translate)/, Dz = /^(rotate|skew)/, Dd = (e, t) => U.num(e) && e !== 0 ? e + t : e, au = (e, t) => U.arr(e) ? e.every((n) => au(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, Lz = class extends lf {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((a) => Dd(a, "px")).join(",")})`, au(l, 0)])), Pn(r, (l, a) => {
      if (a === "transform")
        o.push([l || ""]), i.push((s) => [s, s === ""]);
      else if (Nz.test(a)) {
        if (delete r[a], U.und(l))
          return;
        let s = Mz.test(a) ? "px" : Dz.test(a) ? "deg" : "";
        o.push(Pt(l)), i.push(a === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Dd(d, s)})`, au(d, 0)] : (u) => [`${a}(${u.map((c) => Dd(c, s)).join(",")})`, au(u, a.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new Fz(o, i)), super(r);
  }
}, Fz = class extends v2 {
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
    return he(this.inputs, (r, o) => {
      let i = yt(r[0]), [l, a] = this.transforms[o](U.arr(i) ? i : r.map(yt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && he(this.inputs, (n) => he(n, (r) => Bt(r) && Wi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => Bt(r) && Ca(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ka(this, t);
  }
}, zz = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
hn.assign({ batchedUpdates: Gt.exports.unstable_batchedUpdates, createStringInterpolator: w2, colors: AF });
var Bz = lz(zz, { applyAnimatedValues: Tz, createAnimatedStyle: (e) => new Lz(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), ux = Bz.animated;
const jz = ({
  message: e
}) => /* @__PURE__ */ ce("div", {
  className: Ai("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1",
    children: /* @__PURE__ */ B(o2, {
      content: e.text
    })
  })]
}), Hz = () => {
  const {
    toggleHistoryOpen: e,
    historyOpen: t
  } = ao(), {
    conventions: n
  } = _i(), [r, o] = m.exports.useState(null), i = Az({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: _2.default
  }), l = Object.keys(n), a = r || l[0], s = a ? n[a] : [];
  return /* @__PURE__ */ ce(ux.div, {
    style: {
      opacity: i.opacity
    },
    className: "aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg",
    children: [/* @__PURE__ */ ce("div", {
      onClick: () => {
        e();
      },
      className: Ai("flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400", {
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
    }), /* @__PURE__ */ ce(ux.div, {
      style: {
        height: i.h,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ B("div", {
        className: "grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ B("div", {
          className: Ai("flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200", {
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
        children: s.map((u, c) => /* @__PURE__ */ B(jz, {
          message: u
        }, c))
      })]
    })]
  });
}, Vz = () => /* @__PURE__ */ ce("div", {
  className: "dark",
  children: [/* @__PURE__ */ B(uF, {}), /* @__PURE__ */ B(Hz, {})]
});
var j2, cx = Gt.exports;
j2 = cx.createRoot, cx.hydrateRoot;
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), sc("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", ot.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), j2(t).render(/* @__PURE__ */ B(Vz, {}));
})();
