var k2 = Object.defineProperty;
var C2 = (e, t, n) => t in e ? k2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => (C2(e, typeof t != "symbol" ? t + "" : t, n), n);
function E2(e, t) {
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
var $2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Q1 = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : $2, function(n) {
    if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
      const r = "The message port closed before a response was received.", o = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", i = (l) => {
        const s = {
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
        if (Object.keys(s).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class a extends WeakMap {
          constructor(P, R = void 0) {
            super(R), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const u = (E) => E && typeof E == "object" && typeof E.then == "function", c = (E, P) => (...R) => {
          l.runtime.lastError ? E.reject(new Error(l.runtime.lastError.message)) : P.singleCallbackArg || R.length <= 1 && P.singleCallbackArg !== !1 ? E.resolve(R[0]) : E.resolve(R);
        }, f = (E) => E == 1 ? "argument" : "arguments", d = (E, P) => function(T, ...O) {
          if (O.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${E}(), got ${O.length}`);
          if (O.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${E}(), got ${O.length}`);
          return new Promise((D, z) => {
            if (P.fallbackToNoCallback)
              try {
                T[E](...O, c({
                  resolve: D,
                  reject: z
                }, P));
              } catch (F) {
                console.warn(`${E} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, F), T[E](...O), P.fallbackToNoCallback = !1, P.noCallback = !0, D();
              }
            else
              P.noCallback ? (T[E](...O), D()) : T[E](...O, c({
                resolve: D,
                reject: z
              }, P));
          });
        }, g = (E, P, R) => new Proxy(P, {
          apply(T, O, D) {
            return R.call(O, E, ...D);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = (E, P = {}, R = {}) => {
          let T = /* @__PURE__ */ Object.create(null), O = {
            has(z, F) {
              return F in E || F in T;
            },
            get(z, F, _) {
              if (F in T)
                return T[F];
              if (!(F in E))
                return;
              let V = E[F];
              if (typeof V == "function")
                if (typeof P[F] == "function")
                  V = g(E, E[F], P[F]);
                else if (h(R, F)) {
                  let M = d(F, R[F]);
                  V = g(E, E[F], M);
                } else
                  V = V.bind(E);
              else if (typeof V == "object" && V !== null && (h(P, F) || h(R, F)))
                V = v(V, P[F], R[F]);
              else if (h(R, "*"))
                V = v(V, P[F], R["*"]);
              else
                return Object.defineProperty(T, F, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return E[F];
                  },
                  set(M) {
                    E[F] = M;
                  }
                }), V;
              return T[F] = V, V;
            },
            set(z, F, _, V) {
              return F in T ? T[F] = _ : E[F] = _, !0;
            },
            defineProperty(z, F, _) {
              return Reflect.defineProperty(T, F, _);
            },
            deleteProperty(z, F) {
              return Reflect.deleteProperty(T, F);
            }
          }, D = Object.create(E);
          return new Proxy(D, O);
        }, w = (E) => ({
          addListener(P, R, ...T) {
            P.addListener(E.get(R), ...T);
          },
          hasListener(P, R) {
            return P.hasListener(E.get(R));
          },
          removeListener(P, R) {
            P.removeListener(E.get(R));
          }
        }), p = new a((E) => typeof E != "function" ? E : function(R) {
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
          E(T);
        });
        let y = !1;
        const x = new a((E) => typeof E != "function" ? E : function(R, T, O) {
          let D = !1, z, F = new Promise((I) => {
            z = function(N) {
              y || (console.warn(o, new Error().stack), y = !0), D = !0, I(N);
            };
          }), _;
          try {
            _ = E(R, T, z);
          } catch (I) {
            _ = Promise.reject(I);
          }
          const V = _ !== !0 && u(_);
          if (_ !== !0 && !V && !D)
            return !1;
          const M = (I) => {
            I.then((N) => {
              O(N);
            }, (N) => {
              let k;
              N && (N instanceof Error || typeof N.message == "string") ? k = N.message : k = "An unexpected error occurred", O({
                __mozWebExtensionPolyfillReject__: !0,
                message: k
              });
            }).catch((N) => {
              console.error("Failed to send onMessage rejected reply", N);
            });
          };
          return M(V ? _ : F), !0;
        }), b = ({
          reject: E,
          resolve: P
        }, R) => {
          l.runtime.lastError ? l.runtime.lastError.message === r ? P() : E(new Error(l.runtime.lastError.message)) : R && R.__mozWebExtensionPolyfillReject__ ? E(new Error(R.message)) : P(R);
        }, A = (E, P, R, ...T) => {
          if (T.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${E}(), got ${T.length}`);
          if (T.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${E}(), got ${T.length}`);
          return new Promise((O, D) => {
            const z = b.bind(null, {
              resolve: O,
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
        }, $ = {
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
        return s.privacy = {
          network: {
            "*": $
          },
          services: {
            "*": $
          },
          websites: {
            "*": $
          }
        }, v(l, S, s);
      };
      if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
        throw new Error("This script should only be loaded in a browser extension.");
      n.exports = i(chrome);
    } else
      n.exports = browser;
  });
})(Q1);
const it = Q1.exports;
let G1 = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class Ya extends Error {
  constructor(t) {
    super(Ya._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, Ya);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const A2 = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], Sd = Symbol(".toJSON called"), P2 = (e) => {
  e[Sd] = !0;
  const t = e.toJSON();
  return delete e[Sd], t;
}, kh = ({
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
  if (typeof e.toJSON == "function" && e[Sd] !== !0)
    return P2(e);
  for (const [s, a] of Object.entries(e)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(a)) {
      l[s] = "[object Buffer]";
      continue;
    }
    if (typeof a != "function") {
      if (!a || typeof a != "object") {
        l[s] = a;
        continue;
      }
      if (!t.includes(e[s])) {
        i++, l[s] = kh({
          from: e[s],
          seen: t.slice(),
          forceEnumerable: r,
          maxDepth: o,
          depth: i
        });
        continue;
      }
      l[s] = "[Circular]";
    }
  }
  for (const { property: s, enumerable: a } of A2)
    typeof e[s] == "string" && Object.defineProperty(l, s, {
      value: e[s],
      enumerable: r ? !0 : a,
      configurable: !0,
      writable: !0
    });
  return l;
}, _2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? kh({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, R2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return kh({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new Ya(e);
};
var T2 = {
  serializeError: _2,
  deserializeError: R2
}, Yu = { exports: {} };
const I2 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), K1 = (e = 7, t = !1) => Array.from({ length: e }, I2(t ? 16 : 36)).join("");
Yu.exports = K1;
Yu.exports.default = K1;
var O2 = Object.defineProperty, N2 = Object.defineProperties, M2 = Object.getOwnPropertyDescriptors, Ig = Object.getOwnPropertySymbols, D2 = Object.prototype.hasOwnProperty, L2 = Object.prototype.propertyIsEnumerable, Og = (e, t, n) => t in e ? O2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Y1 = (e, t) => {
  for (var n in t || (t = {}))
    D2.call(t, n) && Og(e, n, t[n]);
  if (Ig)
    for (var n of Ig(t))
      L2.call(t, n) && Og(e, n, t[n]);
  return e;
}, X1 = (e, t) => N2(e, M2(t)), F2 = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, Z1 = (e) => {
  const [, t, n] = e.match(F2) || [];
  return {
    context: t,
    tabId: +n
  };
}, Zc = (e) => it[e], Me = Zc("devtools") ? "devtools" : Zc("tabs") ? "background" : Zc("extension") ? "content-script" : typeof document < "u" ? "window" : null, Ng = Yu.exports(), kd = /* @__PURE__ */ new Map(), J1 = /* @__PURE__ */ new Map(), Cd = /* @__PURE__ */ new Set(), Ed = /* @__PURE__ */ new Map(), Ur = null, Xa, ex;
z2();
function z2() {
  if (Me === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Me === "window" || Me === "content-script") && window.addEventListener("message", j2), Me === "content-script" && top === window && (Ur = it.runtime.connect(), Ur.onMessage.addListener((e) => {
    Zo(e);
  })), Me === "devtools") {
    const { tabId: e } = it.devtools.inspectedWindow, t = `devtools@${e}`;
    Ur = it.runtime.connect(void 0, { name: t }), Ur.onMessage.addListener((n) => {
      Zo(n);
    }), Ur.onDisconnect.addListener(() => {
      Ur = null;
    });
  }
  Me === "background" && it.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = Z1(t);
    !n || (Ed.set(t, e), Cd.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), Cd.delete(r));
    }), e.onDisconnect.addListener(() => {
      Ed.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, Zo(r));
    }));
  });
}
function Zo(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Ng) && (e.hops.push(Ng), !(Me === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !ex))) {
    if (!n)
      return B2(e);
    if (n.context) {
      if (Me === "window")
        return $d(window, e);
      if (Me === "content-script" && n.context === "window")
        return e.destination = null, $d(window, e);
      if (Me === "devtools" || Me === "content-script")
        return n.context === "background" && (e.destination = null), Ur.postMessage(e);
      if (Me === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, s = Ed.get(l);
        s ? s.postMessage(e) : Cd.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function B2(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = kd.get(t);
    if (l) {
      const { err: s, data: a } = e;
      if (s) {
        const u = s, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(a);
      kd.delete(t);
    }
  }, i = async () => {
    let l, s, a = !1;
    try {
      const u = J1.get(n);
      if (typeof u == "function")
        l = await u({
          sender: e.origin,
          id: n,
          data: e.data,
          timestamp: e.timestamp
        });
      else
        throw a = !0, new Error(`[webext-bridge] No handler registered in '${Me}' to accept messages with id '${n}'`);
    } catch (u) {
      s = u;
    } finally {
      if (s && (e.err = T2.serializeError(s)), Zo(X1(Y1({}, e), {
        messageType: "reply",
        data: l,
        origin: { context: Me, tabId: null },
        destination: e.origin,
        hops: []
      })), s && !a)
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
async function j2({ data: e, ports: t }) {
  if (!(Me === "content-script" && !ex)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === Xa && e.context !== Me)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === Xa && e.context !== Me) {
      const { payload: n } = e;
      Me === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), Zo(n);
    }
  }
}
function $d(e, t) {
  V2();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, $d(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: Xa,
      context: Me,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: Xa,
    context: Me
  }, "*", [n.port2]);
}
function V2() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function Ch(e, t) {
  J1.set(e, t);
}
async function vl(e, t, n = "background") {
  const r = typeof n == "string" ? Z1(n) : n, o = "Bridge#sendMessage ->";
  if (!r.context)
    throw new TypeError(`${o} Destination must be any one of known destinations`);
  if (Me === "background") {
    const { context: i, tabId: l } = r;
    if (i !== "background" && !l)
      throw new TypeError(`${o} When sending messages from background page, use @tabId syntax to target specific tab`);
  }
  return new Promise((i, l) => {
    const s = {
      messageID: e,
      data: t,
      destination: r,
      messageType: "message",
      transactionId: Yu.exports(),
      origin: { context: Me, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    kd.set(s.transactionId, { resolve: i, reject: l }), Zo(s);
  });
}
var Lo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = G1(), this.isClosed = !1, Lo.initDone || (Ch("__crx_bridge_stream_transfer__", (t) => {
      const { streamId: n, streamTransfer: r, action: o } = t.data, i = Lo.openStreams.get(n);
      i && !i.isClosed && (o === "transfer" && i.emitter.emit("message", r), o === "close" && (Lo.openStreams.delete(n), i.handleStreamClose()));
    }), Lo.initDone = !0), Lo.openStreams.set(e.streamId, this);
  }
  get info() {
    return this.internalInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    vl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), vl("__crx_bridge_stream_transfer__", {
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
}, Eh = Lo;
Eh.initDone = !1;
Eh.openStreams = /* @__PURE__ */ new Map();
var H2 = /* @__PURE__ */ new Map(), U2 = G1();
Ch("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const s = () => {
    const a = H2.get(o);
    typeof a == "function" ? (a(new Eh(X1(Y1({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = U2.on("did-change-stream-callbacks", s));
  };
  s();
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
var Ps = Symbol.for("react.element"), W2 = Symbol.for("react.portal"), q2 = Symbol.for("react.fragment"), Q2 = Symbol.for("react.strict_mode"), G2 = Symbol.for("react.profiler"), K2 = Symbol.for("react.provider"), Y2 = Symbol.for("react.context"), X2 = Symbol.for("react.forward_ref"), Z2 = Symbol.for("react.suspense"), J2 = Symbol.for("react.memo"), eE = Symbol.for("react.lazy"), Mg = Symbol.iterator;
function tE(e) {
  return e === null || typeof e != "object" ? null : (e = Mg && e[Mg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var tx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nx = Object.assign, rx = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = rx, this.updater = n || tx;
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ox() {
}
ox.prototype = Pi.prototype;
function $h(e, t, n) {
  this.props = e, this.context = t, this.refs = rx, this.updater = n || tx;
}
var Ah = $h.prototype = new ox();
Ah.constructor = $h;
nx(Ah, Pi.prototype);
Ah.isPureReactComponent = !0;
var Dg = Array.isArray, ix = Object.prototype.hasOwnProperty, Ph = { current: null }, lx = { key: !0, ref: !0, __self: !0, __source: !0 };
function sx(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      ix.call(t, r) && !lx.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Ps, type: e, key: i, ref: l, props: o, _owner: Ph.current };
}
function nE(e, t) {
  return { $$typeof: Ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _h(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function rE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Lg = /\/+/g;
function Jc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rE("" + e.key) : t.toString(36);
}
function Ta(e, t, n, r, o) {
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
          case Ps:
          case W2:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + Jc(l, 0) : r, Dg(o) ? (n = "", e != null && (n = e.replace(Lg, "$&/") + "/"), Ta(o, t, n, "", function(u) {
      return u;
    })) : o != null && (_h(o) && (o = nE(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Lg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Dg(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Jc(i, s);
      l += Ta(i, t, n, a, o);
    }
  else if (a = tE(e), typeof a == "function")
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, a = r + Jc(i, s++), l += Ta(i, t, n, a, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Gs(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ta(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function oE(e) {
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
var ht = { current: null }, Ia = { transition: null }, iE = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Ia, ReactCurrentOwner: Ph };
fe.Children = { map: Gs, forEach: function(e, t, n) {
  Gs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Gs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Gs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!_h(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Pi;
fe.Fragment = q2;
fe.Profiler = G2;
fe.PureComponent = $h;
fe.StrictMode = Q2;
fe.Suspense = Z2;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE;
fe.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nx({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ph.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (a in t)
      ix.call(t, a) && !lx.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ps, type: e.type, key: o, ref: i, props: r, _owner: l };
};
fe.createContext = function(e) {
  return e = { $$typeof: Y2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: K2, _context: e }, e.Consumer = e;
};
fe.createElement = sx;
fe.createFactory = function(e) {
  var t = sx.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: X2, render: e };
};
fe.isValidElement = _h;
fe.lazy = function(e) {
  return { $$typeof: eE, _payload: { _status: -1, _result: e }, _init: oE };
};
fe.memo = function(e, t) {
  return { $$typeof: J2, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = Ia.transition;
  Ia.transition = {};
  try {
    e();
  } finally {
    Ia.transition = t;
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
const Ve = /* @__PURE__ */ Sh(m.exports), lE = /* @__PURE__ */ E2({
  __proto__: null,
  default: Ve
}, [m.exports]);
function G() {
  return G = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, G.apply(this, arguments);
}
function ae(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function sE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Rh(...e) {
  return (t) => e.forEach(
    (n) => sE(n, t)
  );
}
function xe(...e) {
  return m.exports.useCallback(Rh(...e), e);
}
function yo(e, t = []) {
  let n = [];
  function r(i, l) {
    const s = /* @__PURE__ */ m.exports.createContext(l), a = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: g, ...h } = f, v = (d == null ? void 0 : d[e][a]) || s, w = m.exports.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ m.exports.createElement(v.Provider, {
        value: w
      }, g);
    }
    function c(f, d) {
      const g = (d == null ? void 0 : d[e][a]) || s, h = m.exports.useContext(g);
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
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || i;
      return m.exports.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: a
          }
        }),
        [
          s,
          a
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    aE(o, ...t)
  ];
}
function aE(...e) {
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
      const l = r.reduce((s, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return {
          ...s,
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
var hn = { exports: {} }, It = {}, ax = { exports: {} }, ux = {};
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
    var N = M.length;
    M.push(I);
    e:
      for (; 0 < N; ) {
        var k = N - 1 >>> 1, C = M[k];
        if (0 < o(C, I))
          M[k] = I, M[N] = C, N = k;
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
    var I = M[0], N = M.pop();
    if (N !== I) {
      M[0] = N;
      e:
        for (var k = 0, C = M.length, J = C >>> 1; k < J; ) {
          var ne = 2 * (k + 1) - 1, ue = M[ne], ee = ne + 1, Q = M[ee];
          if (0 > o(ue, N))
            ee < C && 0 > o(Q, ue) ? (M[k] = Q, M[ee] = N, k = ee) : (M[k] = ue, M[ne] = N, k = ne);
          else if (ee < C && 0 > o(Q, N))
            M[k] = Q, M[ee] = N, k = ee;
          else
            break e;
        }
    }
    return I;
  }
  function o(M, I) {
    var N = M.sortIndex - I.sortIndex;
    return N !== 0 ? N : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], c = 1, f = null, d = 3, g = !1, h = !1, v = !1, w = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(M) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null)
        r(u);
      else if (I.startTime <= M)
        r(u), I.sortIndex = I.expirationTime, t(a, I);
      else
        break;
      I = n(u);
    }
  }
  function b(M) {
    if (v = !1, x(M), !h)
      if (n(a) !== null)
        h = !0, _(A);
      else {
        var I = n(u);
        I !== null && V(b, I.startTime - M);
      }
  }
  function A(M, I) {
    h = !1, v && (v = !1, p(E), E = -1), g = !0;
    var N = d;
    try {
      for (x(I), f = n(a); f !== null && (!(f.expirationTime > I) || M && !T()); ) {
        var k = f.callback;
        if (typeof k == "function") {
          f.callback = null, d = f.priorityLevel;
          var C = k(f.expirationTime <= I);
          I = e.unstable_now(), typeof C == "function" ? f.callback = C : f === n(a) && r(a), x(I);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var J = !0;
      else {
        var ne = n(u);
        ne !== null && V(b, ne.startTime - I), J = !1;
      }
      return J;
    } finally {
      f = null, d = N, g = !1;
    }
  }
  var S = !1, $ = null, E = -1, P = 5, R = -1;
  function T() {
    return !(e.unstable_now() - R < P);
  }
  function O() {
    if ($ !== null) {
      var M = e.unstable_now();
      R = M;
      var I = !0;
      try {
        I = $(!0, M);
      } finally {
        I ? D() : (S = !1, $ = null);
      }
    } else
      S = !1;
  }
  var D;
  if (typeof y == "function")
    D = function() {
      y(O);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), F = z.port2;
    z.port1.onmessage = O, D = function() {
      F.postMessage(null);
    };
  } else
    D = function() {
      w(O, 0);
    };
  function _(M) {
    $ = M, S || (S = !0, D());
  }
  function V(M, I) {
    E = w(function() {
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
    return n(a);
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
    var N = d;
    d = I;
    try {
      return M();
    } finally {
      d = N;
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
    var N = d;
    d = M;
    try {
      return I();
    } finally {
      d = N;
    }
  }, e.unstable_scheduleCallback = function(M, I, N) {
    var k = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? k + N : k) : N = k, M) {
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
    return C = N + C, M = { id: c++, callback: I, priorityLevel: M, startTime: N, expirationTime: C, sortIndex: -1 }, N > k ? (M.sortIndex = N, t(u, M), n(a) === null && M === n(u) && (v ? (p(E), E = -1) : v = !0, V(b, N - k))) : (M.sortIndex = C, t(a, M), h || g || (h = !0, _(A))), M;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(M) {
    var I = d;
    return function() {
      var N = d;
      d = I;
      try {
        return M.apply(this, arguments);
      } finally {
        d = N;
      }
    };
  };
})(ux);
(function(e) {
  e.exports = ux;
})(ax);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cx = m.exports, Tt = ax.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fx = /* @__PURE__ */ new Set(), jl = {};
function xo(e, t) {
  hi(e, t), hi(e + "Capture", t);
}
function hi(e, t) {
  for (jl[e] = t, e = 0; e < t.length; e++)
    fx.add(t[e]);
}
var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ad = Object.prototype.hasOwnProperty, uE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fg = {}, zg = {};
function cE(e) {
  return Ad.call(zg, e) ? !0 : Ad.call(Fg, e) ? !1 : uE.test(e) ? zg[e] = !0 : (Fg[e] = !0, !1);
}
function fE(e, t, n, r) {
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
function dE(e, t, n, r) {
  if (t === null || typeof t > "u" || fE(e, t, n, r))
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
var et = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  et[e] = new mt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  et[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  et[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  et[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  et[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  et[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  et[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  et[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  et[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Th = /[\-:]([a-z])/g;
function Ih(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Th,
    Ih
  );
  et[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Th, Ih);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Th, Ih);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Oh(e, t, n, r) {
  var o = et.hasOwnProperty(t) ? et[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dE(t, n, o, r) && (n = null), r || o === null ? cE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ks = Symbol.for("react.element"), zo = Symbol.for("react.portal"), Bo = Symbol.for("react.fragment"), Nh = Symbol.for("react.strict_mode"), Pd = Symbol.for("react.profiler"), dx = Symbol.for("react.provider"), px = Symbol.for("react.context"), Mh = Symbol.for("react.forward_ref"), _d = Symbol.for("react.suspense"), Rd = Symbol.for("react.suspense_list"), Dh = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), hx = Symbol.for("react.offscreen"), Bg = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object" ? null : (e = Bg && e[Bg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oe = Object.assign, ef;
function cl(e) {
  if (ef === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ef = t && t[1] || "";
    }
  return `
` + ef + e;
}
var tf = !1;
function nf(e, t) {
  if (!e || tf)
    return "";
  tf = !0;
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
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if (l--, s--, 0 > s || o[l] !== i[s]) {
                var a = `
` + o[l].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    tf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? cl(e) : "";
}
function pE(e) {
  switch (e.tag) {
    case 5:
      return cl(e.type);
    case 16:
      return cl("Lazy");
    case 13:
      return cl("Suspense");
    case 19:
      return cl("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = nf(e.type, !1), e;
    case 11:
      return e = nf(e.type.render, !1), e;
    case 1:
      return e = nf(e.type, !0), e;
    default:
      return "";
  }
}
function Td(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Bo:
      return "Fragment";
    case zo:
      return "Portal";
    case Pd:
      return "Profiler";
    case Nh:
      return "StrictMode";
    case _d:
      return "Suspense";
    case Rd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case px:
        return (e.displayName || "Context") + ".Consumer";
      case dx:
        return (e._context.displayName || "Context") + ".Provider";
      case Mh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Dh:
        return t = e.displayName || null, t !== null ? t : Td(e.type) || "Memo";
      case dr:
        t = e._payload, e = e._init;
        try {
          return Td(e(t));
        } catch {
        }
    }
  return null;
}
function hE(e) {
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
      return Td(t);
    case 8:
      return t === Nh ? "StrictMode" : "Mode";
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
function Or(e) {
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
function mx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mE(e) {
  var t = mx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ys(e) {
  e._valueTracker || (e._valueTracker = mE(e));
}
function gx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = mx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Za(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Id(e, t) {
  var n = t.checked;
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function jg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Or(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vx(e, t) {
  t = t.checked, t != null && Oh(e, "checked", t, !1);
}
function Od(e, t) {
  vx(e, t);
  var n = Or(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Nd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Nd(e, t.type, Or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Nd(e, t, n) {
  (t !== "number" || Za(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fl = Array.isArray;
function Jo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Or(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Md(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hg(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(j(92));
      if (fl(n)) {
        if (1 < n.length)
          throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Or(n) };
}
function yx(e, t) {
  var n = Or(t.value), r = Or(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ug(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Xs, wx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Xs = Xs || document.createElement("div"), Xs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Vl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yl = {
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
}, gE = ["Webkit", "ms", "Moz", "O"];
Object.keys(yl).forEach(function(e) {
  gE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), yl[t] = yl[e];
  });
});
function bx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yl.hasOwnProperty(e) && yl[e] ? ("" + t).trim() : t + "px";
}
function Sx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = bx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var vE = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ld(e, t) {
  if (t) {
    if (vE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Fd(e, t) {
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
var zd = null;
function Lh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bd = null, ei = null, ti = null;
function Wg(e) {
  if (e = Ts(e)) {
    if (typeof Bd != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = tc(t), Bd(e.stateNode, e.type, t));
  }
}
function kx(e) {
  ei ? ti ? ti.push(e) : ti = [e] : ei = e;
}
function Cx() {
  if (ei) {
    var e = ei, t = ti;
    if (ti = ei = null, Wg(e), t)
      for (e = 0; e < t.length; e++)
        Wg(t[e]);
  }
}
function Ex(e, t) {
  return e(t);
}
function $x() {
}
var rf = !1;
function Ax(e, t, n) {
  if (rf)
    return e(t, n);
  rf = !0;
  try {
    return Ex(e, t, n);
  } finally {
    rf = !1, (ei !== null || ti !== null) && ($x(), Cx());
  }
}
function Hl(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = tc(n);
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
var jd = !1;
if (jn)
  try {
    var Ui = {};
    Object.defineProperty(Ui, "passive", { get: function() {
      jd = !0;
    } }), window.addEventListener("test", Ui, Ui), window.removeEventListener("test", Ui, Ui);
  } catch {
    jd = !1;
  }
function yE(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xl = !1, Ja = null, eu = !1, Vd = null, xE = { onError: function(e) {
  xl = !0, Ja = e;
} };
function wE(e, t, n, r, o, i, l, s, a) {
  xl = !1, Ja = null, yE.apply(xE, arguments);
}
function bE(e, t, n, r, o, i, l, s, a) {
  if (wE.apply(this, arguments), xl) {
    if (xl) {
      var u = Ja;
      xl = !1, Ja = null;
    } else
      throw Error(j(198));
    eu || (eu = !0, Vd = u);
  }
}
function wo(e) {
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
function Px(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function qg(e) {
  if (wo(e) !== e)
    throw Error(j(188));
}
function SE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wo(e), t === null)
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
          return qg(o), e;
        if (i === r)
          return qg(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
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
function _x(e) {
  return e = SE(e), e !== null ? Rx(e) : null;
}
function Rx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Rx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Tx = Tt.unstable_scheduleCallback, Qg = Tt.unstable_cancelCallback, kE = Tt.unstable_shouldYield, CE = Tt.unstable_requestPaint, Fe = Tt.unstable_now, EE = Tt.unstable_getCurrentPriorityLevel, Fh = Tt.unstable_ImmediatePriority, Ix = Tt.unstable_UserBlockingPriority, tu = Tt.unstable_NormalPriority, $E = Tt.unstable_LowPriority, Ox = Tt.unstable_IdlePriority, Xu = null, Sn = null;
function AE(e) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(Xu, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var un = Math.clz32 ? Math.clz32 : RE, PE = Math.log, _E = Math.LN2;
function RE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (PE(e) / _E | 0) | 0;
}
var Zs = 64, Js = 4194304;
function dl(e) {
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
function nu(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = dl(s) : (i &= l, i !== 0 && (r = dl(i)));
  } else
    l = n & ~o, l !== 0 ? r = dl(l) : i !== 0 && (r = dl(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - un(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function TE(e, t) {
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
function IE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - un(i), s = 1 << l, a = o[l];
    a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (o[l] = TE(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Hd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nx() {
  var e = Zs;
  return Zs <<= 1, (Zs & 4194240) === 0 && (Zs = 64), e;
}
function of(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function _s(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - un(t), e[t] = n;
}
function OE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - un(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function zh(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - un(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var be = 0;
function Mx(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dx, Bh, Lx, Fx, zx, Ud = !1, ea = [], kr = null, Cr = null, Er = null, Ul = /* @__PURE__ */ new Map(), Wl = /* @__PURE__ */ new Map(), hr = [], NE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kr = null;
      break;
    case "dragenter":
    case "dragleave":
      Cr = null;
      break;
    case "mouseover":
    case "mouseout":
      Er = null;
      break;
    case "pointerover":
    case "pointerout":
      Ul.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wl.delete(t.pointerId);
  }
}
function Wi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ts(t), t !== null && Bh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ME(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return kr = Wi(kr, e, t, n, r, o), !0;
    case "dragenter":
      return Cr = Wi(Cr, e, t, n, r, o), !0;
    case "mouseover":
      return Er = Wi(Er, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ul.set(i, Wi(Ul.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Wl.set(i, Wi(Wl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Bx(e) {
  var t = eo(e.target);
  if (t !== null) {
    var n = wo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Px(n), t !== null) {
          e.blockedOn = t, zx(e.priority, function() {
            Lx(n);
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
function Oa(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zd = r, n.target.dispatchEvent(r), zd = null;
    } else
      return t = Ts(n), t !== null && Bh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Kg(e, t, n) {
  Oa(e) && n.delete(t);
}
function DE() {
  Ud = !1, kr !== null && Oa(kr) && (kr = null), Cr !== null && Oa(Cr) && (Cr = null), Er !== null && Oa(Er) && (Er = null), Ul.forEach(Kg), Wl.forEach(Kg);
}
function qi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ud || (Ud = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, DE)));
}
function ql(e) {
  function t(o) {
    return qi(o, e);
  }
  if (0 < ea.length) {
    qi(ea[0], e);
    for (var n = 1; n < ea.length; n++) {
      var r = ea[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kr !== null && qi(kr, e), Cr !== null && qi(Cr, e), Er !== null && qi(Er, e), Ul.forEach(t), Wl.forEach(t), n = 0; n < hr.length; n++)
    r = hr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hr.length && (n = hr[0], n.blockedOn === null); )
    Bx(n), n.blockedOn === null && hr.shift();
}
var ni = Kn.ReactCurrentBatchConfig, ru = !0;
function LE(e, t, n, r) {
  var o = be, i = ni.transition;
  ni.transition = null;
  try {
    be = 1, jh(e, t, n, r);
  } finally {
    be = o, ni.transition = i;
  }
}
function FE(e, t, n, r) {
  var o = be, i = ni.transition;
  ni.transition = null;
  try {
    be = 4, jh(e, t, n, r);
  } finally {
    be = o, ni.transition = i;
  }
}
function jh(e, t, n, r) {
  if (ru) {
    var o = Wd(e, t, n, r);
    if (o === null)
      mf(e, t, r, ou, n), Gg(e, r);
    else if (ME(o, e, t, n, r))
      r.stopPropagation();
    else if (Gg(e, r), t & 4 && -1 < NE.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ts(o);
        if (i !== null && Dx(i), i = Wd(e, t, n, r), i === null && mf(e, t, r, ou, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      mf(e, t, r, null, n);
  }
}
var ou = null;
function Wd(e, t, n, r) {
  if (ou = null, e = Lh(r), e = eo(e), e !== null)
    if (t = wo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Px(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ou = e, null;
}
function jx(e) {
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
      switch (EE()) {
        case Fh:
          return 1;
        case Ix:
          return 4;
        case tu:
        case $E:
          return 16;
        case Ox:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gr = null, Vh = null, Na = null;
function Vx() {
  if (Na)
    return Na;
  var e, t = Vh, n = t.length, r, o = "value" in gr ? gr.value : gr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Na = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ma(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ta() {
  return !0;
}
function Yg() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ta : Yg, this.isPropagationStopped = Yg, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ta);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ta);
  }, persist: function() {
  }, isPersistent: ta }), t;
}
var _i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Hh = Ot(_i), Rs = Oe({}, _i, { view: 0, detail: 0 }), zE = Ot(Rs), lf, sf, Qi, Zu = Oe({}, Rs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Uh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (lf = e.screenX - Qi.screenX, sf = e.screenY - Qi.screenY) : sf = lf = 0, Qi = e), lf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : sf;
} }), Xg = Ot(Zu), BE = Oe({}, Zu, { dataTransfer: 0 }), jE = Ot(BE), VE = Oe({}, Rs, { relatedTarget: 0 }), af = Ot(VE), HE = Oe({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), UE = Ot(HE), WE = Oe({}, _i, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), qE = Ot(WE), QE = Oe({}, _i, { data: 0 }), Zg = Ot(QE), GE = {
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
}, KE = {
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
}, YE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function XE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = YE[e]) ? !!t[e] : !1;
}
function Uh() {
  return XE;
}
var ZE = Oe({}, Rs, { key: function(e) {
  if (e.key) {
    var t = GE[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ma(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? KE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Uh, charCode: function(e) {
  return e.type === "keypress" ? Ma(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ma(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), JE = Ot(ZE), e$ = Oe({}, Zu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jg = Ot(e$), t$ = Oe({}, Rs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Uh }), n$ = Ot(t$), r$ = Oe({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), o$ = Ot(r$), i$ = Oe({}, Zu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), l$ = Ot(i$), s$ = [9, 13, 27, 32], Wh = jn && "CompositionEvent" in window, wl = null;
jn && "documentMode" in document && (wl = document.documentMode);
var a$ = jn && "TextEvent" in window && !wl, Hx = jn && (!Wh || wl && 8 < wl && 11 >= wl), e0 = String.fromCharCode(32), t0 = !1;
function Ux(e, t) {
  switch (e) {
    case "keyup":
      return s$.indexOf(t.keyCode) !== -1;
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
function Wx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jo = !1;
function u$(e, t) {
  switch (e) {
    case "compositionend":
      return Wx(t);
    case "keypress":
      return t.which !== 32 ? null : (t0 = !0, e0);
    case "textInput":
      return e = t.data, e === e0 && t0 ? null : e;
    default:
      return null;
  }
}
function c$(e, t) {
  if (jo)
    return e === "compositionend" || !Wh && Ux(e, t) ? (e = Vx(), Na = Vh = gr = null, jo = !1, e) : null;
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
      return Hx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var f$ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function n0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!f$[e.type] : t === "textarea";
}
function qx(e, t, n, r) {
  kx(r), t = iu(t, "onChange"), 0 < t.length && (n = new Hh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bl = null, Ql = null;
function d$(e) {
  rw(e, 0);
}
function Ju(e) {
  var t = Uo(e);
  if (gx(t))
    return e;
}
function p$(e, t) {
  if (e === "change")
    return t;
}
var Qx = !1;
if (jn) {
  var uf;
  if (jn) {
    var cf = "oninput" in document;
    if (!cf) {
      var r0 = document.createElement("div");
      r0.setAttribute("oninput", "return;"), cf = typeof r0.oninput == "function";
    }
    uf = cf;
  } else
    uf = !1;
  Qx = uf && (!document.documentMode || 9 < document.documentMode);
}
function o0() {
  bl && (bl.detachEvent("onpropertychange", Gx), Ql = bl = null);
}
function Gx(e) {
  if (e.propertyName === "value" && Ju(Ql)) {
    var t = [];
    qx(t, Ql, e, Lh(e)), Ax(d$, t);
  }
}
function h$(e, t, n) {
  e === "focusin" ? (o0(), bl = t, Ql = n, bl.attachEvent("onpropertychange", Gx)) : e === "focusout" && o0();
}
function m$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ju(Ql);
}
function g$(e, t) {
  if (e === "click")
    return Ju(t);
}
function v$(e, t) {
  if (e === "input" || e === "change")
    return Ju(t);
}
function y$(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dn = typeof Object.is == "function" ? Object.is : y$;
function Gl(e, t) {
  if (dn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ad.call(t, o) || !dn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function i0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function l0(e, t) {
  var n = i0(e);
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
    n = i0(n);
  }
}
function Kx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Yx() {
  for (var e = window, t = Za(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Za(e.document);
  }
  return t;
}
function qh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function x$(e) {
  var t = Yx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Kx(n.ownerDocument.documentElement, n)) {
    if (r !== null && qh(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = l0(n, i);
        var l = l0(
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
var w$ = jn && "documentMode" in document && 11 >= document.documentMode, Vo = null, qd = null, Sl = null, Qd = !1;
function s0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qd || Vo == null || Vo !== Za(r) || (r = Vo, "selectionStart" in r && qh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sl && Gl(Sl, r) || (Sl = r, r = iu(qd, "onSelect"), 0 < r.length && (t = new Hh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vo)));
}
function na(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ho = { animationend: na("Animation", "AnimationEnd"), animationiteration: na("Animation", "AnimationIteration"), animationstart: na("Animation", "AnimationStart"), transitionend: na("Transition", "TransitionEnd") }, ff = {}, Xx = {};
jn && (Xx = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);
function ec(e) {
  if (ff[e])
    return ff[e];
  if (!Ho[e])
    return e;
  var t = Ho[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Xx)
      return ff[e] = t[n];
  return e;
}
var Zx = ec("animationend"), Jx = ec("animationiteration"), ew = ec("animationstart"), tw = ec("transitionend"), nw = /* @__PURE__ */ new Map(), a0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dr(e, t) {
  nw.set(e, t), xo(t, [e]);
}
for (var df = 0; df < a0.length; df++) {
  var pf = a0[df], b$ = pf.toLowerCase(), S$ = pf[0].toUpperCase() + pf.slice(1);
  Dr(b$, "on" + S$);
}
Dr(Zx, "onAnimationEnd");
Dr(Jx, "onAnimationIteration");
Dr(ew, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(tw, "onTransitionEnd");
hi("onMouseEnter", ["mouseout", "mouseover"]);
hi("onMouseLeave", ["mouseout", "mouseover"]);
hi("onPointerEnter", ["pointerout", "pointerover"]);
hi("onPointerLeave", ["pointerout", "pointerover"]);
xo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), k$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(pl));
function u0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, bE(r, t, void 0, e), e.currentTarget = null;
}
function rw(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l], a = s.instance, u = s.currentTarget;
          if (s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          u0(o, s, u), i = a;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped())
            break e;
          u0(o, s, u), i = a;
        }
    }
  }
  if (eu)
    throw e = Vd, eu = !1, Vd = null, e;
}
function $e(e, t) {
  var n = t[Zd];
  n === void 0 && (n = t[Zd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ow(t, e, 2, !1), n.add(r));
}
function hf(e, t, n) {
  var r = 0;
  t && (r |= 4), ow(n, e, r, t);
}
var ra = "_reactListening" + Math.random().toString(36).slice(2);
function Kl(e) {
  if (!e[ra]) {
    e[ra] = !0, fx.forEach(function(n) {
      n !== "selectionchange" && (k$.has(n) || hf(n, !1, e), hf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ra] || (t[ra] = !0, hf("selectionchange", !1, t));
  }
}
function ow(e, t, n, r) {
  switch (jx(t)) {
    case 1:
      var o = LE;
      break;
    case 4:
      o = FE;
      break;
    default:
      o = jh;
  }
  n = o.bind(null, t, n, e), o = void 0, !jd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function mf(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var a = l.tag;
              if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o))
                return;
              l = l.return;
            }
          for (; s !== null; ) {
            if (l = eo(s), l === null)
              return;
            if (a = l.tag, a === 5 || a === 6) {
              r = i = l;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  Ax(function() {
    var u = i, c = Lh(n), f = [];
    e: {
      var d = nw.get(e);
      if (d !== void 0) {
        var g = Hh, h = e;
        switch (e) {
          case "keypress":
            if (Ma(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = JE;
            break;
          case "focusin":
            h = "focus", g = af;
            break;
          case "focusout":
            h = "blur", g = af;
            break;
          case "beforeblur":
          case "afterblur":
            g = af;
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
            g = Xg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = jE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = n$;
            break;
          case Zx:
          case Jx:
          case ew:
            g = UE;
            break;
          case tw:
            g = o$;
            break;
          case "scroll":
            g = zE;
            break;
          case "wheel":
            g = l$;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = qE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Jg;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Hl(y, p), b != null && v.push(Yl(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== zd && (h = n.relatedTarget || n.fromElement) && (eo(h) || h[Vn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? eo(h) : null, h !== null && (w = wo(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (v = Xg, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = Jg, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = g == null ? d : Uo(g), x = h == null ? d : Uo(h), d = new v(b, y + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, eo(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, g && h)
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
          g !== null && c0(f, d, g, v, !1), h !== null && w !== null && c0(f, w, h, v, !0);
        }
      }
      e: {
        if (d = u ? Uo(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = p$;
        else if (n0(d))
          if (Qx)
            A = v$;
          else {
            A = m$;
            var S = h$;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = g$);
        if (A && (A = A(e, u))) {
          qx(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Nd(d, "number", d.value);
      }
      switch (S = u ? Uo(u) : window, e) {
        case "focusin":
          (n0(S) || S.contentEditable === "true") && (Vo = S, qd = u, Sl = null);
          break;
        case "focusout":
          Sl = qd = Vo = null;
          break;
        case "mousedown":
          Qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qd = !1, s0(f, n, c);
          break;
        case "selectionchange":
          if (w$)
            break;
        case "keydown":
        case "keyup":
          s0(f, n, c);
      }
      var $;
      if (Wh)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        jo ? Ux(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Hx && n.locale !== "ko" && (jo || E !== "onCompositionStart" ? E === "onCompositionEnd" && jo && ($ = Vx()) : (gr = c, Vh = "value" in gr ? gr.value : gr.textContent, jo = !0)), S = iu(u, E), 0 < S.length && (E = new Zg(E, e, null, n, c), f.push({ event: E, listeners: S }), $ ? E.data = $ : ($ = Wx(n), $ !== null && (E.data = $)))), ($ = a$ ? u$(e, n) : c$(e, n)) && (u = iu(u, "onBeforeInput"), 0 < u.length && (c = new Zg("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = $));
    }
    rw(f, t);
  });
}
function Yl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function iu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Hl(e, n), i != null && r.unshift(Yl(e, i, o)), i = Hl(e, t), i != null && r.push(Yl(e, i, o))), e = e.return;
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
function c0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (a = Hl(n, i), a != null && l.unshift(Yl(n, a, s))) : o || (a = Hl(n, i), a != null && l.push(Yl(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var C$ = /\r\n?/g, E$ = /\u0000|\uFFFD/g;
function f0(e) {
  return (typeof e == "string" ? e : "" + e).replace(C$, `
`).replace(E$, "");
}
function oa(e, t, n) {
  if (t = f0(t), f0(e) !== t && n)
    throw Error(j(425));
}
function lu() {
}
var Gd = null, Kd = null;
function Yd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xd = typeof setTimeout == "function" ? setTimeout : void 0, $$ = typeof clearTimeout == "function" ? clearTimeout : void 0, d0 = typeof Promise == "function" ? Promise : void 0, A$ = typeof queueMicrotask == "function" ? queueMicrotask : typeof d0 < "u" ? function(e) {
  return d0.resolve(null).then(e).catch(P$);
} : Xd;
function P$(e) {
  setTimeout(function() {
    throw e;
  });
}
function gf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ql(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ql(t);
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
function p0(e) {
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
var Ri = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Ri, Xl = "__reactProps$" + Ri, Vn = "__reactContainer$" + Ri, Zd = "__reactEvents$" + Ri, _$ = "__reactListeners$" + Ri, R$ = "__reactHandles$" + Ri;
function eo(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Vn] || n[bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = p0(e); e !== null; ) {
          if (n = e[bn])
            return n;
          e = p0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ts(e) {
  return e = e[bn] || e[Vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Uo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(j(33));
}
function tc(e) {
  return e[Xl] || null;
}
var Jd = [], Wo = -1;
function Lr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Wo || (e.current = Jd[Wo], Jd[Wo] = null, Wo--);
}
function Ee(e, t) {
  Wo++, Jd[Wo] = e.current, e.current = t;
}
var Nr = {}, lt = Lr(Nr), bt = Lr(!1), ao = Nr;
function mi(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Nr;
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
function su() {
  Pe(bt), Pe(lt);
}
function h0(e, t, n) {
  if (lt.current !== Nr)
    throw Error(j(168));
  Ee(lt, t), Ee(bt, n);
}
function iw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, hE(e) || "Unknown", o));
  return Oe({}, n, r);
}
function au(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nr, ao = lt.current, Ee(lt, e), Ee(bt, bt.current), !0;
}
function m0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = iw(e, t, ao), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(lt), Ee(lt, e)) : Pe(bt), Ee(bt, n);
}
var Dn = null, nc = !1, vf = !1;
function lw(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function T$(e) {
  nc = !0, lw(e);
}
function Fr() {
  if (!vf && Dn !== null) {
    vf = !0;
    var e = 0, t = be;
    try {
      var n = Dn;
      for (be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dn = null, nc = !1;
    } catch (o) {
      throw Dn !== null && (Dn = Dn.slice(e + 1)), Tx(Fh, Fr), o;
    } finally {
      be = t, vf = !1;
    }
  }
  return null;
}
var qo = [], Qo = 0, uu = null, cu = 0, Dt = [], Lt = 0, uo = null, Ln = 1, Fn = "";
function Wr(e, t) {
  qo[Qo++] = cu, qo[Qo++] = uu, uu = e, cu = t;
}
function sw(e, t, n) {
  Dt[Lt++] = Ln, Dt[Lt++] = Fn, Dt[Lt++] = uo, uo = e;
  var r = Ln;
  e = Fn;
  var o = 32 - un(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - un(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Ln = 1 << 32 - un(t) + o | n << o | r, Fn = i + e;
  } else
    Ln = 1 << i | n << o | r, Fn = e;
}
function Qh(e) {
  e.return !== null && (Wr(e, 1), sw(e, 1, 0));
}
function Gh(e) {
  for (; e === uu; )
    uu = qo[--Qo], qo[Qo] = null, cu = qo[--Qo], qo[Qo] = null;
  for (; e === uo; )
    uo = Dt[--Lt], Dt[Lt] = null, Fn = Dt[--Lt], Dt[Lt] = null, Ln = Dt[--Lt], Dt[Lt] = null;
}
var _t = null, $t = null, Re = !1, nn = null;
function aw(e, t) {
  var n = Ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function g0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, $t = $r(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, $t = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = uo !== null ? { id: Ln, overflow: Fn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, $t = null, !0) : !1;
    default:
      return !1;
  }
}
function ep(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tp(e) {
  if (Re) {
    var t = $t;
    if (t) {
      var n = t;
      if (!g0(e, t)) {
        if (ep(e))
          throw Error(j(418));
        t = $r(n.nextSibling);
        var r = _t;
        t && g0(e, t) ? aw(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (ep(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function v0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function ia(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return v0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yd(e.type, e.memoizedProps)), t && (t = $t)) {
    if (ep(e))
      throw uw(), Error(j(418));
    for (; t; )
      aw(e, t), t = $r(t.nextSibling);
  }
  if (v0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $t = $r(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $t = null;
    }
  } else
    $t = _t ? $r(e.stateNode.nextSibling) : null;
  return !0;
}
function uw() {
  for (var e = $t; e; )
    e = $r(e.nextSibling);
}
function gi() {
  $t = _t = null, Re = !1;
}
function Kh(e) {
  nn === null ? nn = [e] : nn.push(e);
}
var I$ = Kn.ReactCurrentBatchConfig;
function en(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fu = Lr(null), du = null, Go = null, Yh = null;
function Xh() {
  Yh = Go = du = null;
}
function Zh(e) {
  var t = fu.current;
  Pe(fu), e._currentValue = t;
}
function np(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ri(e, t) {
  du = e, Yh = Go = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function qt(e) {
  var t = e._currentValue;
  if (Yh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Go === null) {
      if (du === null)
        throw Error(j(308));
      Go = e, du.dependencies = { lanes: 0, firstContext: e };
    } else
      Go = Go.next = e;
  return t;
}
var to = null;
function Jh(e) {
  to === null ? to = [e] : to.push(e);
}
function cw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Jh(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Hn(e, r);
}
function Hn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var pr = !1;
function em(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fw(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function zn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ar(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (ge & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Hn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Jh(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Hn(e, n);
}
function Da(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zh(e, n);
  }
}
function y0(e, t) {
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
function pu(e, t, n, r) {
  var o = e.updateQueue;
  pr = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, c = u = a = null, s = i;
    do {
      var d = s.lane, g = s.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var h = e, v = s;
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
              pr = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [s] : d.push(s));
      } else
        g = { eventTime: g, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = g, a = f) : c = c.next = g, l |= d;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (1);
    if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    fo |= l, e.lanes = l, e.memoizedState = f;
  }
}
function x0(e, t, n) {
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
var dw = new cx.Component().refs;
function rp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rc = { isMounted: function(e) {
  return (e = e._reactInternals) ? wo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = _r(e), i = zn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ar(e, i, o), t !== null && (cn(t, e, o, r), Da(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = _r(e), i = zn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ar(e, i, o), t !== null && (cn(t, e, o, r), Da(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pt(), r = _r(e), o = zn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ar(e, o, r), t !== null && (cn(t, e, r, n), Da(t, e, r));
} };
function w0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Gl(n, r) || !Gl(o, i) : !0;
}
function pw(e, t, n) {
  var r = !1, o = Nr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qt(i) : (o = St(t) ? ao : lt.current, r = t.contextTypes, i = (r = r != null) ? mi(e, o) : Nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function b0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rc.enqueueReplaceState(t, t.state, null);
}
function op(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = dw, em(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = qt(i) : (i = St(t) ? ao : lt.current, o.context = mi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (rp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && rc.enqueueReplaceState(o, o.state, null), pu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gi(e, t, n) {
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
        var s = o.refs;
        s === dw && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function la(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function S0(e) {
  var t = e._init;
  return t(e._payload);
}
function hw(e) {
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
    return p = Rr(p, y), p.index = 0, p.sibling = null, p;
  }
  function i(p, y, x) {
    return p.index = x, e ? (x = p.alternate, x !== null ? (x = x.index, x < y ? (p.flags |= 2, y) : x) : (p.flags |= 2, y)) : (p.flags |= 1048576, y);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, y, x, b) {
    return y === null || y.tag !== 6 ? (y = Cf(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function a(p, y, x, b) {
    var A = x.type;
    return A === Bo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && S0(A) === y.type) ? (b = o(y, x.props), b.ref = Gi(p, y, x), b.return = p, b) : (b = Va(x.type, x.key, x.props, null, p.mode, b), b.ref = Gi(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Ef(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = oo(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Cf("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ks:
          return x = Va(y.type, y.key, y.props, null, p.mode, x), x.ref = Gi(p, null, y), x.return = p, x;
        case zo:
          return y = Ef(y, p.mode, x), y.return = p, y;
        case dr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (fl(y) || Hi(y))
        return y = oo(y, p.mode, x, null), y.return = p, y;
      la(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : s(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ks:
          return x.key === A ? a(p, y, x, b) : null;
        case zo:
          return x.key === A ? u(p, y, x, b) : null;
        case dr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (fl(x) || Hi(x))
        return A !== null ? null : c(p, y, x, b, null);
      la(p, x);
    }
    return null;
  }
  function g(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, s(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ks:
          return p = p.get(b.key === null ? x : b.key) || null, a(y, p, b, A);
        case zo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case dr:
          var S = b._init;
          return g(p, y, x, S(b._payload), A);
      }
      if (fl(b) || Hi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      la(y, b);
    }
    return null;
  }
  function h(p, y, x, b) {
    for (var A = null, S = null, $ = y, E = y = 0, P = null; $ !== null && E < x.length; E++) {
      $.index > E ? (P = $, $ = null) : P = $.sibling;
      var R = d(p, $, x[E], b);
      if (R === null) {
        $ === null && ($ = P);
        break;
      }
      e && $ && R.alternate === null && t(p, $), y = i(R, y, E), S === null ? A = R : S.sibling = R, S = R, $ = P;
    }
    if (E === x.length)
      return n(p, $), Re && Wr(p, E), A;
    if ($ === null) {
      for (; E < x.length; E++)
        $ = f(p, x[E], b), $ !== null && (y = i($, y, E), S === null ? A = $ : S.sibling = $, S = $);
      return Re && Wr(p, E), A;
    }
    for ($ = r(p, $); E < x.length; E++)
      P = g($, p, E, x[E], b), P !== null && (e && P.alternate !== null && $.delete(P.key === null ? E : P.key), y = i(P, y, E), S === null ? A = P : S.sibling = P, S = P);
    return e && $.forEach(function(T) {
      return t(p, T);
    }), Re && Wr(p, E), A;
  }
  function v(p, y, x, b) {
    var A = Hi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, $ = y, E = y = 0, P = null, R = x.next(); $ !== null && !R.done; E++, R = x.next()) {
      $.index > E ? (P = $, $ = null) : P = $.sibling;
      var T = d(p, $, R.value, b);
      if (T === null) {
        $ === null && ($ = P);
        break;
      }
      e && $ && T.alternate === null && t(p, $), y = i(T, y, E), S === null ? A = T : S.sibling = T, S = T, $ = P;
    }
    if (R.done)
      return n(
        p,
        $
      ), Re && Wr(p, E), A;
    if ($ === null) {
      for (; !R.done; E++, R = x.next())
        R = f(p, R.value, b), R !== null && (y = i(R, y, E), S === null ? A = R : S.sibling = R, S = R);
      return Re && Wr(p, E), A;
    }
    for ($ = r(p, $); !R.done; E++, R = x.next())
      R = g($, p, E, R.value, b), R !== null && (e && R.alternate !== null && $.delete(R.key === null ? E : R.key), y = i(R, y, E), S === null ? A = R : S.sibling = R, S = R);
    return e && $.forEach(function(O) {
      return t(p, O);
    }), Re && Wr(p, E), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === Bo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ks:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === Bo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && S0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = Gi(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === Bo ? (y = oo(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = Va(x.type, x.key, x.props, null, p.mode, b), b.ref = Gi(p, y, x), b.return = p, p = b);
          }
          return l(p);
        case zo:
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
            y = Ef(x, p.mode, b), y.return = p, p = y;
          }
          return l(p);
        case dr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (fl(x))
        return h(p, y, x, b);
      if (Hi(x))
        return v(p, y, x, b);
      la(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Cf(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var vi = hw(!0), mw = hw(!1), Is = {}, kn = Lr(Is), Zl = Lr(Is), Jl = Lr(Is);
function no(e) {
  if (e === Is)
    throw Error(j(174));
  return e;
}
function tm(e, t) {
  switch (Ee(Jl, t), Ee(Zl, e), Ee(kn, Is), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dd(t, e);
  }
  Pe(kn), Ee(kn, t);
}
function yi() {
  Pe(kn), Pe(Zl), Pe(Jl);
}
function gw(e) {
  no(Jl.current);
  var t = no(kn.current), n = Dd(t, e.type);
  t !== n && (Ee(Zl, e), Ee(kn, n));
}
function nm(e) {
  Zl.current === e && (Pe(kn), Pe(Zl));
}
var Te = Lr(0);
function hu(e) {
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
var yf = [];
function rm() {
  for (var e = 0; e < yf.length; e++)
    yf[e]._workInProgressVersionPrimary = null;
  yf.length = 0;
}
var La = Kn.ReactCurrentDispatcher, xf = Kn.ReactCurrentBatchConfig, co = 0, Ie = null, qe = null, Ge = null, mu = !1, kl = !1, es = 0, O$ = 0;
function tt() {
  throw Error(j(321));
}
function om(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dn(e[n], t[n]))
      return !1;
  return !0;
}
function im(e, t, n, r, o, i) {
  if (co = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, La.current = e === null || e.memoizedState === null ? L$ : F$, e = n(r, o), kl) {
    i = 0;
    do {
      if (kl = !1, es = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Ge = qe = null, t.updateQueue = null, La.current = z$, e = n(r, o);
    } while (kl);
  }
  if (La.current = gu, t = qe !== null && qe.next !== null, co = 0, Ge = qe = Ie = null, mu = !1, t)
    throw Error(j(300));
  return e;
}
function lm() {
  var e = es !== 0;
  return es = 0, e;
}
function vn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? Ie.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
}
function Qt() {
  if (qe === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = qe.next;
  var t = Ge === null ? Ie.memoizedState : Ge.next;
  if (t !== null)
    Ge = t, qe = e;
  else {
    if (e === null)
      throw Error(j(310));
    qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Ge === null ? Ie.memoizedState = Ge = e : Ge = Ge.next = e;
  }
  return Ge;
}
function ts(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wf(e) {
  var t = Qt(), n = t.queue;
  if (n === null)
    throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = qe, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((co & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, Ie.lanes |= c, fo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, dn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
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
function bf(e) {
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
    dn(i, t.memoizedState) || (wt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function vw() {
}
function yw(e, t) {
  var n = Ie, r = Qt(), o = t(), i = !dn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, sm(bw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, ns(9, ww.bind(null, n, r, o, t), void 0, null), Ye === null)
      throw Error(j(349));
    (co & 30) !== 0 || xw(n, t, o);
  }
  return o;
}
function xw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ww(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sw(t) && kw(e);
}
function bw(e, t, n) {
  return n(function() {
    Sw(t) && kw(e);
  });
}
function Sw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dn(e, n);
  } catch {
    return !0;
  }
}
function kw(e) {
  var t = Hn(e, 1);
  t !== null && cn(t, e, 1, -1);
}
function k0(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ts, lastRenderedState: e }, t.queue = e, e = e.dispatch = D$.bind(null, Ie, e), [t.memoizedState, e];
}
function ns(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cw() {
  return Qt().memoizedState;
}
function Fa(e, t, n, r) {
  var o = vn();
  Ie.flags |= e, o.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r);
}
function oc(e, t, n, r) {
  var o = Qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (qe !== null) {
    var l = qe.memoizedState;
    if (i = l.destroy, r !== null && om(r, l.deps)) {
      o.memoizedState = ns(t, n, i, r);
      return;
    }
  }
  Ie.flags |= e, o.memoizedState = ns(1 | t, n, i, r);
}
function C0(e, t) {
  return Fa(8390656, 8, e, t);
}
function sm(e, t) {
  return oc(2048, 8, e, t);
}
function Ew(e, t) {
  return oc(4, 2, e, t);
}
function $w(e, t) {
  return oc(4, 4, e, t);
}
function Aw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Pw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, oc(4, 4, Aw.bind(null, t, e), n);
}
function am() {
}
function _w(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && om(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && om(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Tw(e, t, n) {
  return (co & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (dn(n, t) || (n = Nx(), Ie.lanes |= n, fo |= n, e.baseState = !0), t);
}
function N$(e, t) {
  var n = be;
  be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = xf.transition;
  xf.transition = {};
  try {
    e(!1), t();
  } finally {
    be = n, xf.transition = r;
  }
}
function Iw() {
  return Qt().memoizedState;
}
function M$(e, t, n) {
  var r = _r(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ow(e))
    Nw(t, n);
  else if (n = cw(e, t, n, r), n !== null) {
    var o = pt();
    cn(n, e, r, o), Mw(n, t, r);
  }
}
function D$(e, t, n) {
  var r = _r(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ow(e))
    Nw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, s = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = s, dn(s, l)) {
          var a = t.interleaved;
          a === null ? (o.next = o, Jh(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = cw(e, t, o, r), n !== null && (o = pt(), cn(n, e, r, o), Mw(n, t, r));
  }
}
function Ow(e) {
  var t = e.alternate;
  return e === Ie || t !== null && t === Ie;
}
function Nw(e, t) {
  kl = mu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mw(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zh(e, n);
  }
}
var gu = { readContext: qt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, L$ = { readContext: qt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qt, useEffect: C0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fa(
    4194308,
    4,
    Aw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = M$.bind(null, Ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: k0, useDebugValue: am, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = k0(!1), t = e[0];
  return e = N$.bind(null, e[1]), vn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ie, o = vn();
  if (Re) {
    if (n === void 0)
      throw Error(j(407));
    n = n();
  } else {
    if (n = t(), Ye === null)
      throw Error(j(349));
    (co & 30) !== 0 || xw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, C0(bw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ns(9, ww.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Ye.identifierPrefix;
  if (Re) {
    var n = Fn, r = Ln;
    n = (r & ~(1 << 32 - un(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = es++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = O$++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, F$ = {
  readContext: qt,
  useCallback: _w,
  useContext: qt,
  useEffect: sm,
  useImperativeHandle: Pw,
  useInsertionEffect: Ew,
  useLayoutEffect: $w,
  useMemo: Rw,
  useReducer: wf,
  useRef: Cw,
  useState: function() {
    return wf(ts);
  },
  useDebugValue: am,
  useDeferredValue: function(e) {
    var t = Qt();
    return Tw(t, qe.memoizedState, e);
  },
  useTransition: function() {
    var e = wf(ts)[0], t = Qt().memoizedState;
    return [e, t];
  },
  useMutableSource: vw,
  useSyncExternalStore: yw,
  useId: Iw,
  unstable_isNewReconciler: !1
}, z$ = { readContext: qt, useCallback: _w, useContext: qt, useEffect: sm, useImperativeHandle: Pw, useInsertionEffect: Ew, useLayoutEffect: $w, useMemo: Rw, useReducer: bf, useRef: Cw, useState: function() {
  return bf(ts);
}, useDebugValue: am, useDeferredValue: function(e) {
  var t = Qt();
  return qe === null ? t.memoizedState = e : Tw(t, qe.memoizedState, e);
}, useTransition: function() {
  var e = bf(ts)[0], t = Qt().memoizedState;
  return [e, t];
}, useMutableSource: vw, useSyncExternalStore: yw, useId: Iw, unstable_isNewReconciler: !1 };
function xi(e, t) {
  try {
    var n = "", r = t;
    do
      n += pE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Sf(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function ip(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var B$ = typeof WeakMap == "function" ? WeakMap : Map;
function Dw(e, t, n) {
  n = zn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    yu || (yu = !0, mp = r), ip(e, t);
  }, n;
}
function Lw(e, t, n) {
  n = zn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ip(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ip(e, t), typeof r != "function" && (Pr === null ? Pr = /* @__PURE__ */ new Set([this]) : Pr.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function E0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new B$();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = eA.bind(null, e, t, n), t.then(e, e));
}
function $0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function A0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zn(-1, 1), t.tag = 2, Ar(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var j$ = Kn.ReactCurrentOwner, wt = !1;
function ft(e, t, n, r) {
  t.child = e === null ? mw(t, null, n, r) : vi(t, e.child, n, r);
}
function P0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ri(t, o), r = im(e, t, n, r, i, o), n = lm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Un(e, t, o)) : (Re && n && Qh(t), t.flags |= 1, ft(e, t, r, o), t.child);
}
function _0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Fw(e, t, i, r, o)) : (e = Va(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Gl, n(l, r) && e.ref === t.ref)
      return Un(e, t, o);
  }
  return t.flags |= 1, e = Rr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Fw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gl(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, Un(e, t, o);
  }
  return lp(e, t, n, r, o);
}
function zw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(Yo, Et), Et |= n;
    else {
      if ((n & 1073741824) === 0)
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ee(Yo, Et), Et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ee(Yo, Et), Et |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ee(Yo, Et), Et |= r;
  return ft(e, t, o, n), t.child;
}
function Bw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lp(e, t, n, r, o) {
  var i = St(n) ? ao : lt.current;
  return i = mi(t, i), ri(t, o), n = im(e, t, n, r, i, o), r = lm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Un(e, t, o)) : (Re && r && Qh(t), t.flags |= 1, ft(e, t, n, o), t.child);
}
function R0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    au(t);
  } else
    i = !1;
  if (ri(t, o), t.stateNode === null)
    za(e, t), pw(t, n, r), op(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qt(u) : (u = St(n) ? ao : lt.current, u = mi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && b0(t, l, r, u), pr = !1;
    var d = t.memoizedState;
    l.state = d, pu(t, r, l, o), a = t.memoizedState, s !== r || d !== a || bt.current || pr ? (typeof c == "function" && (rp(t, n, c, r), a = t.memoizedState), (s = pr || w0(t, n, s, r, d, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, fw(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : en(t.type, s), l.props = u, f = t.pendingProps, d = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = qt(a) : (a = St(n) ? ao : lt.current, a = mi(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || d !== a) && b0(t, l, r, a), pr = !1, d = t.memoizedState, l.state = d, pu(t, r, l, o);
    var h = t.memoizedState;
    s !== f || d !== h || bt.current || pr ? (typeof g == "function" && (rp(t, n, g, r), h = t.memoizedState), (u = pr || w0(t, n, u, r, d, h, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return sp(e, t, n, r, i, o);
}
function sp(e, t, n, r, o, i) {
  Bw(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && m0(t, n, !1), Un(e, t, i);
  r = t.stateNode, j$.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = vi(t, e.child, null, i), t.child = vi(t, null, s, i)) : ft(e, t, s, i), t.memoizedState = r.state, o && m0(t, n, !0), t.child;
}
function jw(e) {
  var t = e.stateNode;
  t.pendingContext ? h0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && h0(e, t.context, !1), tm(e, t.containerInfo);
}
function T0(e, t, n, r, o) {
  return gi(), Kh(o), t.flags |= 256, ft(e, t, n, r), t.child;
}
var ap = { dehydrated: null, treeContext: null, retryLane: 0 };
function up(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vw(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(Te, o & 1), e === null)
    return tp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = sc(l, r, 0, null), e = oo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = up(n), t.memoizedState = ap, e) : um(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return V$(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Rr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Rr(s, i) : (i = oo(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? up(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ap, r;
  }
  return i = e.child, e = i.sibling, r = Rr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function um(e, t) {
  return t = sc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sa(e, t, n, r) {
  return r !== null && Kh(r), vi(t, e.child, null, n), e = um(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function V$(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Sf(Error(j(422))), sa(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = sc({ mode: "visible", children: r.children }, o, 0, null), i = oo(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && vi(t, e.child, null, l), t.child.memoizedState = up(l), t.memoizedState = ap, i);
  if ((t.mode & 1) === 0)
    return sa(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(j(419)), r = Sf(i, r, void 0), sa(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, wt || s) {
    if (r = Ye, r !== null) {
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
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Hn(e, o), cn(r, e, o, -1));
    }
    return mm(), r = Sf(Error(j(421))), sa(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tA.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, $t = $r(o.nextSibling), _t = t, Re = !0, nn = null, e !== null && (Dt[Lt++] = Ln, Dt[Lt++] = Fn, Dt[Lt++] = uo, Ln = e.id, Fn = e.overflow, uo = t), t = um(t, r.children), t.flags |= 4096, t);
}
function I0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), np(e.return, t, n);
}
function kf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Hw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ft(e, t, r.children, n), r = Te.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && I0(e, n, t);
          else if (e.tag === 19)
            I0(e, n, t);
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
  if (Ee(Te, r), (t.mode & 1) === 0)
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && hu(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), kf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && hu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        kf(t, !0, n, null, i);
        break;
      case "together":
        kf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function za(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Un(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), fo |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Rr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function H$(e, t, n) {
  switch (t.tag) {
    case 3:
      jw(t), gi();
      break;
    case 5:
      gw(t);
      break;
    case 1:
      St(t.type) && au(t);
      break;
    case 4:
      tm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ee(fu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ee(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vw(e, t, n) : (Ee(Te, Te.current & 1), e = Un(e, t, n), e !== null ? e.sibling : null);
      Ee(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return Hw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, zw(e, t, n);
  }
  return Un(e, t, n);
}
var Uw, cp, Ww, qw;
Uw = function(e, t) {
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
cp = function() {
};
Ww = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, no(kn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Id(e, o), r = Id(e, r), i = [];
        break;
      case "select":
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Md(e, o), r = Md(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lu);
    }
    Ld(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in a)
              a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (jl.hasOwnProperty(u) ? (a != null && u === "onScroll" && $e("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ki(e, t) {
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
function nt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function U$(e, t, n) {
  var r = t.pendingProps;
  switch (Gh(t), t.tag) {
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
      return nt(t), null;
    case 1:
      return St(t.type) && su(), nt(t), null;
    case 3:
      return r = t.stateNode, yi(), Pe(bt), Pe(lt), rm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ia(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, nn !== null && (yp(nn), nn = null))), cp(e, t), nt(t), null;
    case 5:
      nm(t);
      var o = no(Jl.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Ww(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return nt(t), null;
        }
        if (e = no(kn.current), ia(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[bn] = t, r[Xl] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              $e("cancel", r), $e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < pl.length; o++)
                $e(pl[o], r);
              break;
            case "source":
              $e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $e(
                "error",
                r
              ), $e("load", r);
              break;
            case "details":
              $e("toggle", r);
              break;
            case "input":
              jg(r, i), $e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, $e("invalid", r);
              break;
            case "textarea":
              Hg(r, i), $e("invalid", r);
          }
          Ld(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && oa(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && oa(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : jl.hasOwnProperty(l) && s != null && l === "onScroll" && $e("scroll", r);
            }
          switch (n) {
            case "input":
              Ys(r), Vg(r, i, !0);
              break;
            case "textarea":
              Ys(r), Ug(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = lu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[Xl] = r, Uw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Fd(n, r), n) {
              case "dialog":
                $e("cancel", e), $e("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < pl.length; o++)
                  $e(pl[o], e);
                o = r;
                break;
              case "source":
                $e("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  e
                ), $e("load", e), o = r;
                break;
              case "details":
                $e("toggle", e), o = r;
                break;
              case "input":
                jg(e, r), o = Id(e, r), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), $e("invalid", e);
                break;
              case "textarea":
                Hg(e, r), o = Md(e, r), $e("invalid", e);
                break;
              default:
                o = r;
            }
            Ld(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? Sx(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && wx(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Vl(e, a) : typeof a == "number" && Vl(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (jl.hasOwnProperty(i) ? a != null && i === "onScroll" && $e("scroll", e) : a != null && Oh(e, i, a, l));
              }
            switch (n) {
              case "input":
                Ys(e), Vg(e, r, !1);
                break;
              case "textarea":
                Ys(e), Ug(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Or(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Jo(e, !!r.multiple, i, !1) : r.defaultValue != null && Jo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = lu);
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
      return nt(t), null;
    case 6:
      if (e && t.stateNode != null)
        qw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = no(Jl.current), no(kn.current), ia(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                oa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && oa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return nt(t), null;
    case 13:
      if (Pe(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && $t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          uw(), gi(), t.flags |= 98560, i = !1;
        else if (i = ia(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(j(317));
            i[bn] = t;
          } else
            gi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          nt(t), i = !1;
        } else
          nn !== null && (yp(nn), nn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : mm())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
    case 4:
      return yi(), cp(e, t), e === null && Kl(t.stateNode.containerInfo), nt(t), null;
    case 10:
      return Zh(t.type._context), nt(t), null;
    case 17:
      return St(t.type) && su(), nt(t), null;
    case 19:
      if (Pe(Te), i = t.memoizedState, i === null)
        return nt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Ki(i, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = hu(e), l !== null) {
                for (t.flags |= 128, Ki(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Ee(Te, Te.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > wi && (t.flags |= 128, r = !0, Ki(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = hu(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ki(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return nt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > wi && n !== 1073741824 && (t.flags |= 128, r = !0, Ki(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Te.current, Ee(Te, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
    case 22:
    case 23:
      return hm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Et & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function W$(e, t) {
  switch (Gh(t), t.tag) {
    case 1:
      return St(t.type) && su(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yi(), Pe(bt), Pe(lt), rm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nm(t), null;
    case 13:
      if (Pe(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(j(340));
        gi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Te), null;
    case 4:
      return yi(), null;
    case 10:
      return Zh(t.type._context), null;
    case 22:
    case 23:
      return hm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var aa = !1, rt = !1, q$ = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function Ko(e, t) {
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
function fp(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var O0 = !1;
function Q$(e, t) {
  if (Gd = ru, e = Yx(), qh(e)) {
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
          var l = 0, s = -1, a = -1, u = 0, c = 0, f = e, d = null;
          t:
            for (; ; ) {
              for (var g; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (g = f.firstChild) !== null; )
                d = f, f = g;
              for (; ; ) {
                if (f === e)
                  break t;
                if (d === n && ++u === o && (s = l), d === i && ++c === r && (a = l), (g = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = g;
            }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Kd = { focusedElem: e, selectionRange: n }, ru = !1, Y = t; Y !== null; )
    if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, Y = e;
    else
      for (; Y !== null; ) {
        t = Y;
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
                  var v = h.memoizedProps, w = h.memoizedState, p = t.stateNode, y = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : en(t.type, v), w);
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
          e.return = t.return, Y = e;
          break;
        }
        Y = t.return;
      }
  return h = O0, O0 = !1, h;
}
function Cl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && fp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ic(e, t) {
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
function dp(e) {
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
function Qw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[Xl], delete t[Zd], delete t[_$], delete t[R$])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function N0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gw(e.return))
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
function pp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lu));
  else if (r !== 4 && (e = e.child, e !== null))
    for (pp(e, t, n), e = e.sibling; e !== null; )
      pp(e, t, n), e = e.sibling;
}
function hp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (hp(e, t, n), e = e.sibling; e !== null; )
      hp(e, t, n), e = e.sibling;
}
var Xe = null, tn = !1;
function lr(e, t, n) {
  for (n = n.child; n !== null; )
    Kw(e, t, n), n = n.sibling;
}
function Kw(e, t, n) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(Xu, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      rt || Ko(n, t);
    case 6:
      var r = Xe, o = tn;
      Xe = null, lr(e, t, n), Xe = r, tn = o, Xe !== null && (tn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null && (tn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? gf(e.parentNode, n) : e.nodeType === 1 && gf(e, n), ql(e)) : gf(Xe, n.stateNode));
      break;
    case 4:
      r = Xe, o = tn, Xe = n.stateNode.containerInfo, tn = !0, lr(e, t, n), Xe = r, tn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && fp(n, t, l), o = o.next;
        } while (o !== r);
      }
      lr(e, t, n);
      break;
    case 1:
      if (!rt && (Ko(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Ne(n, t, s);
        }
      lr(e, t, n);
      break;
    case 21:
      lr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, lr(e, t, n), rt = r) : lr(e, t, n);
      break;
    default:
      lr(e, t, n);
  }
}
function M0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new q$()), t.forEach(function(r) {
      var o = nA.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, l = t, s = l;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                Xe = s.stateNode, tn = !1;
                break e;
              case 3:
                Xe = s.stateNode.containerInfo, tn = !0;
                break e;
              case 4:
                Xe = s.stateNode.containerInfo, tn = !0;
                break e;
            }
            s = s.return;
          }
        if (Xe === null)
          throw Error(j(160));
        Kw(i, l, o), Xe = null, tn = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Yw(t, e), t = t.sibling;
}
function Yw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xt(t, e), gn(e), r & 4) {
        try {
          Cl(3, e, e.return), ic(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          Cl(5, e, e.return);
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 1:
      Xt(t, e), gn(e), r & 512 && n !== null && Ko(n, n.return);
      break;
    case 5:
      if (Xt(t, e), gn(e), r & 512 && n !== null && Ko(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Vl(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && vx(o, i), Fd(s, l);
            var u = Fd(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l], f = a[l + 1];
              c === "style" ? Sx(o, f) : c === "dangerouslySetInnerHTML" ? wx(o, f) : c === "children" ? Vl(o, f) : Oh(o, c, f, u);
            }
            switch (s) {
              case "input":
                Od(o, i);
                break;
              case "textarea":
                yx(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? Jo(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? Jo(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Jo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Xl] = i;
          } catch (v) {
            Ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Xt(t, e), gn(e), r & 4) {
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
      if (Xt(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ql(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      Xt(t, e), gn(e);
      break;
    case 13:
      Xt(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (dm = Fe())), r & 4 && M0(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (u = rt) || c, Xt(t, e), rt = u) : Xt(t, e), gn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
          for (Y = e, c = e.child; c !== null; ) {
            for (f = Y = c; Y !== null; ) {
              switch (d = Y, g = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cl(4, d, d.return);
                  break;
                case 1:
                  Ko(d, d.return);
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
                  Ko(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    L0(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, Y = g) : L0(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = bx("display", l));
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
      Xt(t, e), gn(e), r & 4 && M0(e);
      break;
    case 21:
      break;
    default:
      Xt(
        t,
        e
      ), gn(e);
  }
}
function gn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gw(n)) {
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
          r.flags & 32 && (Vl(o, ""), r.flags &= -33);
          var i = N0(e);
          hp(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = N0(e);
          pp(e, s, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function G$(e, t, n) {
  Y = e, Xw(e);
}
function Xw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || aa;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || rt;
        s = aa;
        var u = rt;
        if (aa = l, (rt = a) && !u)
          for (Y = o; Y !== null; )
            l = Y, a = l.child, l.tag === 22 && l.memoizedState !== null ? F0(o) : a !== null ? (a.return = l, Y = a) : F0(o);
        for (; i !== null; )
          Y = i, Xw(i), i = i.sibling;
        Y = o, aa = s, rt = u;
      }
      D0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, Y = i) : D0(e);
  }
}
function D0(e) {
  for (; Y !== null; ) {
    var t = Y;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || ic(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : en(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && x0(t, i, r);
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
                x0(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    f !== null && ql(f);
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
        rt || t.flags & 512 && dp(t);
      } catch (d) {
        Ne(t, t.return, d);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function L0(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function F0(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ic(4, t);
          } catch (a) {
            Ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ne(t, o, a);
            }
          }
          var i = t.return;
          try {
            dp(t);
          } catch (a) {
            Ne(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            dp(t);
          } catch (a) {
            Ne(t, l, a);
          }
      }
    } catch (a) {
      Ne(t, t.return, a);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, Y = s;
      break;
    }
    Y = t.return;
  }
}
var K$ = Math.ceil, vu = Kn.ReactCurrentDispatcher, cm = Kn.ReactCurrentOwner, Wt = Kn.ReactCurrentBatchConfig, ge = 0, Ye = null, He = null, Je = 0, Et = 0, Yo = Lr(0), Qe = 0, rs = null, fo = 0, lc = 0, fm = 0, El = null, xt = null, dm = 0, wi = 1 / 0, In = null, yu = !1, mp = null, Pr = null, ua = !1, vr = null, xu = 0, $l = 0, gp = null, Ba = -1, ja = 0;
function pt() {
  return (ge & 6) !== 0 ? Fe() : Ba !== -1 ? Ba : Ba = Fe();
}
function _r(e) {
  return (e.mode & 1) === 0 ? 1 : (ge & 2) !== 0 && Je !== 0 ? Je & -Je : I$.transition !== null ? (ja === 0 && (ja = Nx()), ja) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jx(e.type)), e);
}
function cn(e, t, n, r) {
  if (50 < $l)
    throw $l = 0, gp = null, Error(j(185));
  _s(e, n, r), ((ge & 2) === 0 || e !== Ye) && (e === Ye && ((ge & 2) === 0 && (lc |= n), Qe === 4 && mr(e, Je)), kt(e, r), n === 1 && ge === 0 && (t.mode & 1) === 0 && (wi = Fe() + 500, nc && Fr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  IE(e, t);
  var r = nu(e, e === Ye ? Je : 0);
  if (r === 0)
    n !== null && Qg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Qg(n), t === 1)
      e.tag === 0 ? T$(z0.bind(null, e)) : lw(z0.bind(null, e)), A$(function() {
        (ge & 6) === 0 && Fr();
      }), n = null;
    else {
      switch (Mx(r)) {
        case 1:
          n = Fh;
          break;
        case 4:
          n = Ix;
          break;
        case 16:
          n = tu;
          break;
        case 536870912:
          n = Ox;
          break;
        default:
          n = tu;
      }
      n = ib(n, Zw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zw(e, t) {
  if (Ba = -1, ja = 0, (ge & 6) !== 0)
    throw Error(j(327));
  var n = e.callbackNode;
  if (oi() && e.callbackNode !== n)
    return null;
  var r = nu(e, e === Ye ? Je : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = wu(e, r);
  else {
    t = r;
    var o = ge;
    ge |= 2;
    var i = eb();
    (Ye !== e || Je !== t) && (In = null, wi = Fe() + 500, ro(e, t));
    do
      try {
        Z$();
        break;
      } catch (s) {
        Jw(e, s);
      }
    while (1);
    Xh(), vu.current = i, ge = o, He !== null ? t = 0 : (Ye = null, Je = 0, t = Qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Hd(e), o !== 0 && (r = o, t = vp(e, o))), t === 1)
      throw n = rs, ro(e, 0), mr(e, r), kt(e, Fe()), n;
    if (t === 6)
      mr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !Y$(o) && (t = wu(e, r), t === 2 && (i = Hd(e), i !== 0 && (r = i, t = vp(e, i))), t === 1))
        throw n = rs, ro(e, 0), mr(e, r), kt(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          qr(e, xt, In);
          break;
        case 3:
          if (mr(e, r), (r & 130023424) === r && (t = dm + 500 - Fe(), 10 < t)) {
            if (nu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              pt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Xd(qr.bind(null, e, xt, In), t);
            break;
          }
          qr(e, xt, In);
          break;
        case 4:
          if (mr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - un(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * K$(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Xd(qr.bind(null, e, xt, In), r);
            break;
          }
          qr(e, xt, In);
          break;
        case 5:
          qr(e, xt, In);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return kt(e, Fe()), e.callbackNode === n ? Zw.bind(null, e) : null;
}
function vp(e, t) {
  var n = El;
  return e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256), e = wu(e, t), e !== 2 && (t = xt, xt = n, t !== null && yp(t)), e;
}
function yp(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function Y$(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!dn(i(), o))
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
function mr(e, t) {
  for (t &= ~fm, t &= ~lc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - un(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function z0(e) {
  if ((ge & 6) !== 0)
    throw Error(j(327));
  oi();
  var t = nu(e, 0);
  if ((t & 1) === 0)
    return kt(e, Fe()), null;
  var n = wu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hd(e);
    r !== 0 && (t = r, n = vp(e, r));
  }
  if (n === 1)
    throw n = rs, ro(e, 0), mr(e, t), kt(e, Fe()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qr(e, xt, In), kt(e, Fe()), null;
}
function pm(e, t) {
  var n = ge;
  ge |= 1;
  try {
    return e(t);
  } finally {
    ge = n, ge === 0 && (wi = Fe() + 500, nc && Fr());
  }
}
function po(e) {
  vr !== null && vr.tag === 0 && (ge & 6) === 0 && oi();
  var t = ge;
  ge |= 1;
  var n = Wt.transition, r = be;
  try {
    if (Wt.transition = null, be = 1, e)
      return e();
  } finally {
    be = r, Wt.transition = n, ge = t, (ge & 6) === 0 && Fr();
  }
}
function hm() {
  Et = Yo.current, Pe(Yo);
}
function ro(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $$(n)), He !== null)
    for (n = He.return; n !== null; ) {
      var r = n;
      switch (Gh(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && su();
          break;
        case 3:
          yi(), Pe(bt), Pe(lt), rm();
          break;
        case 5:
          nm(r);
          break;
        case 4:
          yi();
          break;
        case 13:
          Pe(Te);
          break;
        case 19:
          Pe(Te);
          break;
        case 10:
          Zh(r.type._context);
          break;
        case 22:
        case 23:
          hm();
      }
      n = n.return;
    }
  if (Ye = e, He = e = Rr(e.current, null), Je = Et = t, Qe = 0, rs = null, fm = lc = fo = 0, xt = El = null, to !== null) {
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
function Jw(e, t) {
  do {
    var n = He;
    try {
      if (Xh(), La.current = gu, mu) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        mu = !1;
      }
      if (co = 0, Ge = qe = Ie = null, kl = !1, es = 0, cm.current = null, n === null || n.return === null) {
        Qe = 1, rs = t, He = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = Je, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = $0(l);
          if (g !== null) {
            g.flags &= -257, A0(g, l, s, i, t), g.mode & 1 && E0(i, u, t), t = g, a = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else
              h.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              E0(i, u, t), mm();
              break e;
            }
            a = Error(j(426));
          }
        } else if (Re && s.mode & 1) {
          var w = $0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), A0(w, l, s, i, t), Kh(xi(a, s));
            break e;
          }
        }
        i = a = xi(a, s), Qe !== 4 && (Qe = 2), El === null ? El = [i] : El.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Dw(i, a, t);
              y0(i, p);
              break e;
            case 1:
              s = a;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Pr === null || !Pr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Lw(i, s, t);
                y0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nb(n);
    } catch (A) {
      t = A, He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eb() {
  var e = vu.current;
  return vu.current = gu, e === null ? gu : e;
}
function mm() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Ye === null || (fo & 268435455) === 0 && (lc & 268435455) === 0 || mr(Ye, Je);
}
function wu(e, t) {
  var n = ge;
  ge |= 2;
  var r = eb();
  (Ye !== e || Je !== t) && (In = null, ro(e, t));
  do
    try {
      X$();
      break;
    } catch (o) {
      Jw(e, o);
    }
  while (1);
  if (Xh(), ge = n, vu.current = r, He !== null)
    throw Error(j(261));
  return Ye = null, Je = 0, Qe;
}
function X$() {
  for (; He !== null; )
    tb(He);
}
function Z$() {
  for (; He !== null && !kE(); )
    tb(He);
}
function tb(e) {
  var t = ob(e.alternate, e, Et);
  e.memoizedProps = e.pendingProps, t === null ? nb(e) : He = t, cm.current = null;
}
function nb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = U$(n, t, Et), n !== null) {
        He = n;
        return;
      }
    } else {
      if (n = W$(n, t), n !== null) {
        n.flags &= 32767, He = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Qe = 6, He = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      He = t;
      return;
    }
    He = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function qr(e, t, n) {
  var r = be, o = Wt.transition;
  try {
    Wt.transition = null, be = 1, J$(e, t, n, r);
  } finally {
    Wt.transition = o, be = r;
  }
  return null;
}
function J$(e, t, n, r) {
  do
    oi();
  while (vr !== null);
  if ((ge & 6) !== 0)
    throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (OE(e, i), e === Ye && (He = Ye = null, Je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ua || (ua = !0, ib(tu, function() {
    return oi(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = Wt.transition, Wt.transition = null;
    var l = be;
    be = 1;
    var s = ge;
    ge |= 4, cm.current = null, Q$(e, n), Yw(n, e), x$(Kd), ru = !!Gd, Kd = Gd = null, e.current = n, G$(n), CE(), ge = s, be = l, Wt.transition = i;
  } else
    e.current = n;
  if (ua && (ua = !1, vr = e, xu = o), i = e.pendingLanes, i === 0 && (Pr = null), AE(n.stateNode), kt(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yu)
    throw yu = !1, e = mp, mp = null, e;
  return (xu & 1) !== 0 && e.tag !== 0 && oi(), i = e.pendingLanes, (i & 1) !== 0 ? e === gp ? $l++ : ($l = 0, gp = e) : $l = 0, Fr(), null;
}
function oi() {
  if (vr !== null) {
    var e = Mx(xu), t = Wt.transition, n = be;
    try {
      if (Wt.transition = null, be = 16 > e ? 16 : e, vr === null)
        var r = !1;
      else {
        if (e = vr, vr = null, xu = 0, (ge & 6) !== 0)
          throw Error(j(331));
        var o = ge;
        for (ge |= 4, Y = e.current; Y !== null; ) {
          var i = Y, l = i.child;
          if ((Y.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (Y = u; Y !== null; ) {
                  var c = Y;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, Y = f;
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var d = c.sibling, g = c.return;
                      if (Qw(c), c === u) {
                        Y = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = g, Y = d;
                        break;
                      }
                      Y = g;
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
              Y = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && l !== null)
            l.return = i, Y = l;
          else
            e:
              for (; Y !== null; ) {
                if (i = Y, (i.flags & 2048) !== 0)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  p.return = i.return, Y = p;
                  break e;
                }
                Y = i.return;
              }
        }
        var y = e.current;
        for (Y = y; Y !== null; ) {
          l = Y;
          var x = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && x !== null)
            x.return = l, Y = x;
          else
            e:
              for (l = y; Y !== null; ) {
                if (s = Y, (s.flags & 2048) !== 0)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ic(9, s);
                    }
                  } catch (A) {
                    Ne(s, s.return, A);
                  }
                if (s === l) {
                  Y = null;
                  break e;
                }
                var b = s.sibling;
                if (b !== null) {
                  b.return = s.return, Y = b;
                  break e;
                }
                Y = s.return;
              }
        }
        if (ge = o, Fr(), Sn && typeof Sn.onPostCommitFiberRoot == "function")
          try {
            Sn.onPostCommitFiberRoot(Xu, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      be = n, Wt.transition = t;
    }
  }
  return !1;
}
function B0(e, t, n) {
  t = xi(n, t), t = Dw(e, t, 1), e = Ar(e, t, 1), t = pt(), e !== null && (_s(e, 1, t), kt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3)
    B0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        B0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pr === null || !Pr.has(r))) {
          e = xi(n, e), e = Lw(t, e, 1), t = Ar(t, e, 1), e = pt(), t !== null && (_s(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eA(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Je & n) === n && (Qe === 4 || Qe === 3 && (Je & 130023424) === Je && 500 > Fe() - dm ? ro(e, 0) : fm |= n), kt(e, t);
}
function rb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Js, Js <<= 1, (Js & 130023424) === 0 && (Js = 4194304)));
  var n = pt();
  e = Hn(e, t), e !== null && (_s(e, t, n), kt(e, n));
}
function tA(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rb(e, n);
}
function nA(e, t) {
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
  r !== null && r.delete(t), rb(e, n);
}
var ob;
ob = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, H$(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Re && (t.flags & 1048576) !== 0 && sw(t, cu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      za(e, t), e = t.pendingProps;
      var o = mi(t, lt.current);
      ri(t, n), o = im(null, t, r, e, o, n);
      var i = lm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, au(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, em(t), o.updater = rc, t.stateNode = o, o._reactInternals = t, op(t, r, e, n), t = sp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && Qh(t), ft(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (za(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = oA(r), e = en(r, e), o) {
          case 0:
            t = lp(null, t, r, e, n);
            break e;
          case 1:
            t = R0(null, t, r, e, n);
            break e;
          case 11:
            t = P0(null, t, r, e, n);
            break e;
          case 14:
            t = _0(null, t, r, en(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), lp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), R0(e, t, r, o, n);
    case 3:
      e: {
        if (jw(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, fw(e, t), pu(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = xi(Error(j(423)), t), t = T0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = xi(Error(j(424)), t), t = T0(e, t, r, n, o);
            break e;
          } else
            for ($t = $r(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, nn = null, n = mw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (gi(), r === o) {
            t = Un(e, t, n);
            break e;
          }
          ft(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gw(t), e === null && tp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Yd(r, o) ? l = null : i !== null && Yd(r, i) && (t.flags |= 32), Bw(e, t), ft(e, t, l, n), t.child;
    case 6:
      return e === null && tp(t), null;
    case 13:
      return Vw(e, t, n);
    case 4:
      return tm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vi(t, null, r, n) : ft(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), P0(e, t, r, o, n);
    case 7:
      return ft(e, t, t.pendingProps, n), t.child;
    case 8:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Ee(fu, r._currentValue), r._currentValue = l, i !== null)
          if (dn(i.value, l)) {
            if (i.children === o.children && !bt.current) {
              t = Un(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      a = zn(-1, n & -n), a.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), np(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10)
                l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (l = i.return, l === null)
                  throw Error(j(341));
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), np(l, n, t), l = i.sibling;
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
        ft(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ri(t, n), o = qt(o), r = r(o), t.flags |= 1, ft(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = en(r, t.pendingProps), o = en(r.type, o), _0(e, t, r, o, n);
    case 15:
      return Fw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), za(e, t), t.tag = 1, St(r) ? (e = !0, au(t)) : e = !1, ri(t, n), pw(t, r, o), op(t, r, o, n), sp(null, t, r, !0, e, n);
    case 19:
      return Hw(e, t, n);
    case 22:
      return zw(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function ib(e, t) {
  return Tx(e, t);
}
function rA(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, n, r) {
  return new rA(e, t, n, r);
}
function gm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function oA(e) {
  if (typeof e == "function")
    return gm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mh)
      return 11;
    if (e === Dh)
      return 14;
  }
  return 2;
}
function Rr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Va(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    gm(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Bo:
          return oo(n.children, o, i, t);
        case Nh:
          l = 8, o |= 8;
          break;
        case Pd:
          return e = Ut(12, n, t, o | 2), e.elementType = Pd, e.lanes = i, e;
        case _d:
          return e = Ut(13, n, t, o), e.elementType = _d, e.lanes = i, e;
        case Rd:
          return e = Ut(19, n, t, o), e.elementType = Rd, e.lanes = i, e;
        case hx:
          return sc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case dx:
                l = 10;
                break e;
              case px:
                l = 9;
                break e;
              case Mh:
                l = 11;
                break e;
              case Dh:
                l = 14;
                break e;
              case dr:
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
function sc(e, t, n, r) {
  return e = Ut(22, e, r, t), e.elementType = hx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Cf(e, t, n) {
  return e = Ut(6, e, null, t), e.lanes = n, e;
}
function Ef(e, t, n) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function iA(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = of(0), this.expirationTimes = of(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = of(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function vm(e, t, n, r, o, i, l, s, a) {
  return e = new iA(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, em(i), e;
}
function lA(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lb(e) {
  if (!e)
    return Nr;
  e = e._reactInternals;
  e: {
    if (wo(e) !== e || e.tag !== 1)
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
      return iw(e, n, t);
  }
  return t;
}
function sb(e, t, n, r, o, i, l, s, a) {
  return e = vm(n, r, !0, e, o, i, l, s, a), e.context = lb(null), n = e.current, r = pt(), o = _r(n), i = zn(r, o), i.callback = t != null ? t : null, Ar(n, i, o), e.current.lanes = o, _s(e, o, r), kt(e, r), e;
}
function ac(e, t, n, r) {
  var o = t.current, i = pt(), l = _r(o);
  return n = lb(n), t.context === null ? t.context = n : t.pendingContext = n, t = zn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ar(o, t, l), e !== null && (cn(e, o, l, i), Da(e, o, l)), l;
}
function bu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function j0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ym(e, t) {
  j0(e, t), (e = e.alternate) && j0(e, t);
}
function sA() {
  return null;
}
var ab = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function xm(e) {
  this._internalRoot = e;
}
uc.prototype.render = xm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  ac(e, t, null, null);
};
uc.prototype.unmount = xm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    po(function() {
      ac(null, e, null, null);
    }), t[Vn] = null;
  }
};
function uc(e) {
  this._internalRoot = e;
}
uc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hr.length && t !== 0 && t < hr[n].priority; n++)
      ;
    hr.splice(n, 0, e), n === 0 && Bx(e);
  }
};
function wm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function cc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function V0() {
}
function aA(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = bu(l);
        i.call(u);
      };
    }
    var l = sb(t, r, e, 0, null, !1, !1, "", V0);
    return e._reactRootContainer = l, e[Vn] = l.current, Kl(e.nodeType === 8 ? e.parentNode : e), po(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = bu(a);
      s.call(u);
    };
  }
  var a = vm(e, 0, !1, null, null, !1, !1, "", V0);
  return e._reactRootContainer = a, e[Vn] = a.current, Kl(e.nodeType === 8 ? e.parentNode : e), po(function() {
    ac(t, a, n, r);
  }), a;
}
function fc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = bu(l);
        s.call(a);
      };
    }
    ac(t, l, e, o);
  } else
    l = aA(n, t, e, o, r);
  return bu(l);
}
Dx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dl(t.pendingLanes);
        n !== 0 && (zh(t, n | 1), kt(t, Fe()), (ge & 6) === 0 && (wi = Fe() + 500, Fr()));
      }
      break;
    case 13:
      po(function() {
        var r = Hn(e, 1);
        if (r !== null) {
          var o = pt();
          cn(r, e, 1, o);
        }
      }), ym(e, 1);
  }
};
Bh = function(e) {
  if (e.tag === 13) {
    var t = Hn(e, 134217728);
    if (t !== null) {
      var n = pt();
      cn(t, e, 134217728, n);
    }
    ym(e, 134217728);
  }
};
Lx = function(e) {
  if (e.tag === 13) {
    var t = _r(e), n = Hn(e, t);
    if (n !== null) {
      var r = pt();
      cn(n, e, t, r);
    }
    ym(e, t);
  }
};
Fx = function() {
  return be;
};
zx = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
  }
};
Bd = function(e, t, n) {
  switch (t) {
    case "input":
      if (Od(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = tc(r);
            if (!o)
              throw Error(j(90));
            gx(r), Od(r, o);
          }
        }
      }
      break;
    case "textarea":
      yx(e, n);
      break;
    case "select":
      t = n.value, t != null && Jo(e, !!n.multiple, t, !1);
  }
};
Ex = pm;
$x = po;
var uA = { usingClientEntryPoint: !1, Events: [Ts, Uo, tc, kx, Cx, pm] }, Yi = { findFiberByHostInstance: eo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, cA = { bundleType: Yi.bundleType, version: Yi.version, rendererPackageName: Yi.rendererPackageName, rendererConfig: Yi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _x(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yi.findFiberByHostInstance || sA, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ca.isDisabled && ca.supportsFiber)
    try {
      Xu = ca.inject(cA), Sn = ca;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uA;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wm(t))
    throw Error(j(200));
  return lA(e, t, null, n);
};
It.createRoot = function(e, t) {
  if (!wm(e))
    throw Error(j(299));
  var n = !1, r = "", o = ab;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = vm(e, 1, !1, null, null, n, !1, r, o), e[Vn] = t.current, Kl(e.nodeType === 8 ? e.parentNode : e), new xm(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = _x(t), e = e === null ? null : e.stateNode, e;
};
It.flushSync = function(e) {
  return po(e);
};
It.hydrate = function(e, t, n) {
  if (!cc(t))
    throw Error(j(200));
  return fc(null, e, t, !0, n);
};
It.hydrateRoot = function(e, t, n) {
  if (!wm(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = ab;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = sb(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Vn] = t.current, Kl(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new uc(t);
};
It.render = function(e, t, n) {
  if (!cc(t))
    throw Error(j(200));
  return fc(null, e, t, !1, n);
};
It.unmountComponentAtNode = function(e) {
  if (!cc(e))
    throw Error(j(40));
  return e._reactRootContainer ? (po(function() {
    fc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Vn] = null;
    });
  }), !0) : !1;
};
It.unstable_batchedUpdates = pm;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!cc(n))
    throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(j(38));
  return fc(e, t, n, !1, r);
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
})(hn);
const ub = /* @__PURE__ */ Sh(hn.exports), bi = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(dA);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement(xp, G({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(xp, G({}, r, {
    ref: t
  }), n);
});
bi.displayName = "Slot";
const xp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...pA(r, n.props),
    ref: Rh(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
xp.displayName = "SlotClone";
const fA = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function dA(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === fA;
}
function pA(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
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
const hA = [
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
], Ue = hA.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? bi : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(s, G({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function mA(e, t) {
  e && hn.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function ze(e) {
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
function gA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
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
const wp = "dismissableLayer.update", vA = "dismissableLayer.pointerDownOutside", yA = "dismissableLayer.focusOutside";
let H0;
const xA = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: s, onDismiss: a, ...u } = e, c = m.exports.useContext(xA), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), v = xe(
    t,
    (E) => d(E)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = wA((E) => {
    const P = E.target, R = [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    );
    !A || R || (i == null || i(E), s == null || s(E), E.defaultPrevented || a == null || a());
  }, g), $ = bA((E) => {
    const P = E.target;
    [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    ) || (l == null || l(E), s == null || s(E), E.defaultPrevented || a == null || a());
  }, g);
  return gA((E) => {
    x === c.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (H0 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), U0(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = H0);
      };
  }, [
    f,
    g,
    r,
    c
  ]), m.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), U0());
  }, [
    f,
    c
  ]), m.exports.useEffect(() => {
    const E = () => h({});
    return document.addEventListener(wp, E), () => document.removeEventListener(wp, E);
  }, []), /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, u, {
    ref: v,
    style: {
      pointerEvents: b ? A ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ae(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: ae(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: ae(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function wA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          cb(vA, n, u, {
            discrete: !0
          });
        };
        var a = c;
        const u = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
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
function bA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && cb(yA, n, {
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
function U0() {
  const e = new CustomEvent(wp);
  document.dispatchEvent(e);
}
function cb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? mA(o, i) : o.dispatchEvent(i);
}
let $f = 0;
function dc() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : W0()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : W0()), $f++, () => {
      $f === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), $f--;
    };
  }, []);
}
function W0() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Af = "focusScope.autoFocusOnMount", Pf = "focusScope.autoFocusOnUnmount", q0 = {
  bubbles: !1,
  cancelable: !0
}, Sm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [s, a] = m.exports.useState(null), u = ze(o), c = ze(i), f = m.exports.useRef(null), d = xe(
    t,
    (v) => a(v)
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
        if (g.paused || !s)
          return;
        const b = x.target;
        s.contains(b) ? f.current = b : Qr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !s || s.contains(x.relatedTarget) || Qr(f.current, {
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
    s,
    g.paused
  ]), m.exports.useEffect(() => {
    if (s) {
      G0.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(Af, q0);
        s.addEventListener(Af, u), s.dispatchEvent(p), p.defaultPrevented || (SA(AA(fb(s)), {
          select: !0
        }), document.activeElement === v && Qr(s));
      }
      return () => {
        s.removeEventListener(Af, u), setTimeout(() => {
          const p = new CustomEvent(Pf, q0);
          s.addEventListener(Pf, c), s.dispatchEvent(p), p.defaultPrevented || Qr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(Pf, c), G0.remove(g);
        }, 0);
      };
    }
  }, [
    s,
    u,
    c,
    g
  ]);
  const h = m.exports.useCallback((v) => {
    if (!n && !r || g.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = kA(y);
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
  return /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function SA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function kA(e) {
  const t = fb(e), n = Q0(t, e), r = Q0(t.reverse(), e);
  return [
    n,
    r
  ];
}
function fb(e) {
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
function Q0(e, t) {
  for (const n of e)
    if (!CA(n, {
      upTo: t
    }))
      return n;
}
function CA(e, { upTo: t }) {
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
function EA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && EA(e) && t && e.select();
  }
}
const G0 = $A();
function $A() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = K0(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = K0(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function K0(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function AA(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Ze = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, PA = lE["useId".toString()] || (() => {
});
let _A = 0;
function Bn(e) {
  const [t, n] = m.exports.useState(PA());
  return Ze(() => {
    e || n(
      (r) => r != null ? r : String(_A++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function bo(e) {
  return e.split("-")[0];
}
function Os(e) {
  return e.split("-")[1];
}
function Ti(e) {
  return ["top", "bottom"].includes(bo(e)) ? "x" : "y";
}
function km(e) {
  return e === "y" ? "height" : "width";
}
function Y0(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, s = Ti(t), a = km(s), u = r[a] / 2 - o[a] / 2, c = bo(t), f = s === "x";
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
  switch (Os(t)) {
    case "start":
      d[s] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[s] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const RA = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let a = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: c
  } = Y0(a, r, s), f = r, d = {}, g = 0;
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
      rects: a,
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
      g++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (a = b.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : b.rects), {
        x: u,
        y: c
      } = Y0(a, f, s)), h = -1;
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
function TA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function db(e) {
  return typeof e != "number" ? TA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Su(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function os(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: g = 0
  } = t, h = db(g), w = s[d ? f === "floating" ? "reference" : "floating" : f], p = Su(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), y = Su(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: f === "floating" ? {
      ...l.floating,
      x: r,
      y: o
    } : l.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)),
    strategy: a
  }) : l[f]);
  return {
    top: p.top - y.top + h.top,
    bottom: y.bottom - p.bottom + h.bottom,
    left: p.left - y.left + h.left,
    right: y.right - p.right + h.right
  };
}
const IA = Math.min, Gr = Math.max;
function bp(e, t, n) {
  return Gr(e, IA(t, n));
}
const X0 = (e) => ({
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
      rects: s,
      platform: a
    } = t;
    if (n == null)
      return {};
    const u = db(r), c = {
      x: o,
      y: i
    }, f = Ti(l), d = Os(l), g = km(f), h = await a.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = s.reference[g] + s.reference[f] - c[f] - s.floating[g], y = c[f] - s.reference[f], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[g]);
    const A = p / 2 - y / 2, S = u[v], $ = b - h[g] - u[w], E = b / 2 - h[g] / 2 + A, P = bp(S, E, $), O = (d === "start" ? u[v] : u[w]) > 0 && E !== P && s.reference[g] <= s.floating[g] ? E < S ? S - E : $ - E : 0;
    return {
      [f]: c[f] - O,
      data: {
        [f]: P,
        centerOffset: E - P
      }
    };
  }
}), OA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ku(e) {
  return e.replace(/left|right|bottom|top/g, (t) => OA[t]);
}
function NA(e, t, n) {
  n === void 0 && (n = !1);
  const r = Os(e), o = Ti(e), i = km(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = ku(l)), {
    main: l,
    cross: ku(l)
  };
}
const MA = {
  start: "end",
  end: "start"
};
function Z0(e) {
  return e.replace(/start|end/g, (t) => MA[t]);
}
const DA = ["top", "right", "bottom", "left"];
function LA(e) {
  const t = ku(e);
  return [Z0(e), t, Z0(t)];
}
const FA = function(e) {
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
        platform: s,
        elements: a
      } = t, {
        mainAxis: u = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: d = "bestFit",
        flipAlignment: g = !0,
        ...h
      } = e, v = bo(r), p = f || (v === l || !g ? [ku(l)] : LA(l)), y = [l, ...p], x = await os(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: R
        } = NA(r, i, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
        b.push(x[P], x[R]);
      }
      if (A = [...A, {
        placement: r,
        overflows: b
      }], !b.every((P) => P <= 0)) {
        var S, $;
        const P = ((S = ($ = o.flip) == null ? void 0 : $.index) != null ? S : 0) + 1, R = y[P];
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
            var E;
            const O = (E = A.map((D) => [D, D.overflows.filter((z) => z > 0).reduce((z, F) => z + F, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : E[0].placement;
            O && (T = O);
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
function J0(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ev(e) {
  return DA.some((t) => e[t] >= 0);
}
const zA = function(e) {
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
          const i = await os(r, {
            ...n,
            elementContext: "reference"
          }), l = J0(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ev(l)
            }
          };
        }
        case "escaped": {
          const i = await os(r, {
            ...n,
            altBoundary: !0
          }), l = J0(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ev(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function BA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = bo(n), s = Os(n), a = Ti(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, f = typeof t == "function" ? t(e) : t;
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
  return s && typeof h == "number" && (g = s === "end" ? h * -1 : h), a ? {
    x: g * c,
    y: d * u
  } : {
    x: d * u,
    y: g * c
  };
}
const jA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await BA(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function pb(e) {
  return e === "x" ? "y" : "x";
}
const VA = function(e) {
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
        limiter: s = {
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
        ...a
      } = e, u = {
        x: n,
        y: r
      }, c = await os(t, a), f = Ti(bo(o)), d = pb(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + c[w], x = g - c[p];
        g = bp(y, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = bp(y, h, x);
      }
      const v = s.fn({
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
}, HA = function(e) {
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
        offset: s = 0,
        mainAxis: a = !0,
        crossAxis: u = !0
      } = e, c = {
        x: n,
        y: r
      }, f = Ti(o), d = pb(f);
      let g = c[f], h = c[d];
      const v = typeof s == "function" ? s({
        ...i,
        placement: o
      }) : s, w = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (a) {
        const A = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[A] + w.mainAxis, $ = i.reference[f] + i.reference[A] - w.mainAxis;
        g < S ? g = S : g > $ && (g = $);
      }
      if (u) {
        var p, y, x, b;
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(bo(o)), $ = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), E = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < $ ? h = $ : h > E && (h = E);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, UA = function(e) {
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
        ...s
      } = e, a = await os(t, s), u = bo(n), c = Os(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Gr(a.left, 0), h = Gr(a.right, 0), v = Gr(a.top, 0), w = Gr(a.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Gr(a.top, a.bottom)) : a[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || h !== 0 ? g + h : Gr(a.left, a.right)) : a[d])
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
function hb(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Yn(e) {
  if (e == null)
    return window;
  if (!hb(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ns(e) {
  return Yn(e).getComputedStyle(e);
}
function Wn(e) {
  return hb(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function mb() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Cn(e) {
  return e instanceof Yn(e).HTMLElement;
}
function Mr(e) {
  return e instanceof Yn(e).Element;
}
function WA(e) {
  return e instanceof Yn(e).Node;
}
function Cm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Yn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Ns(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function qA(e) {
  return ["table", "td", "th"].includes(Wn(e));
}
function gb(e) {
  const t = /firefox/i.test(mb()), n = Ns(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function vb() {
  return !/^((?!chrome|android).)*safari/i.test(mb());
}
const tv = Math.min, Al = Math.max, Cu = Math.round;
function qn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect();
  let a = 1, u = 1;
  t && Cn(e) && (a = e.offsetWidth > 0 && Cu(s.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Cu(s.height) / e.offsetHeight || 1);
  const c = Mr(e) ? Yn(e) : window, f = !vb() && n, d = (s.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / a, g = (s.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = s.width / a, v = s.height / u;
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
function zr(e) {
  return ((WA(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function hc(e) {
  return Mr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function yb(e) {
  return qn(zr(e)).left + hc(e).scrollLeft;
}
function QA(e) {
  const t = qn(e);
  return Cu(t.width) !== e.offsetWidth || Cu(t.height) !== e.offsetHeight;
}
function GA(e, t, n) {
  const r = Cn(t), o = zr(t), i = qn(
    e,
    r && QA(t),
    n === "fixed"
  );
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((Wn(t) !== "body" || pc(o)) && (l = hc(t)), Cn(t)) {
      const a = qn(t, !0);
      s.x = a.x + t.clientLeft, s.y = a.y + t.clientTop;
    } else
      o && (s.x = yb(o));
  return {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function xb(e) {
  return Wn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Cm(e) ? e.host : null) || zr(e);
}
function nv(e) {
  return !Cn(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function KA(e) {
  let t = xb(e);
  for (Cm(t) && (t = t.host); Cn(t) && !["html", "body"].includes(Wn(t)); ) {
    if (gb(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Sp(e) {
  const t = Yn(e);
  let n = nv(e);
  for (; n && qA(n) && getComputedStyle(n).position === "static"; )
    n = nv(n);
  return n && (Wn(n) === "html" || Wn(n) === "body" && getComputedStyle(n).position === "static" && !gb(n)) ? t : n || KA(e) || t;
}
function rv(e) {
  if (Cn(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = qn(e);
  return {
    width: t.width,
    height: t.height
  };
}
function YA(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Cn(n), i = zr(n);
  if (n === i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Wn(n) !== "body" || pc(i)) && (l = hc(n)), Cn(n))) {
    const a = qn(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + s.x,
    y: t.y - l.scrollTop + s.y
  };
}
function XA(e, t) {
  const n = Yn(e), r = zr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = vb();
    (u || !u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function ZA(e) {
  var t;
  const n = zr(e), r = hc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Al(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Al(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + yb(e);
  const a = -r.scrollTop;
  return Ns(o || n).direction === "rtl" && (s += Al(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function wb(e) {
  const t = xb(e);
  return ["html", "body", "#document"].includes(Wn(t)) ? e.ownerDocument.body : Cn(t) && pc(t) ? t : wb(t);
}
function Eu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = wb(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Yn(r), l = o ? [i].concat(i.visualViewport || [], pc(r) ? r : []) : r, s = t.concat(l);
  return o ? s : s.concat(Eu(l));
}
function JA(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Cm(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function e5(e, t) {
  const n = qn(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
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
function ov(e, t, n) {
  return t === "viewport" ? Su(XA(e, n)) : Mr(t) ? e5(t, n) : Su(ZA(zr(e)));
}
function t5(e) {
  const t = Eu(e), r = ["absolute", "fixed"].includes(Ns(e).position) && Cn(e) ? Sp(e) : e;
  return Mr(r) ? t.filter((o) => Mr(o) && JA(o, r) && Wn(o) !== "body") : [];
}
function n5(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? t5(t) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const f = ov(t, c, o);
    return u.top = Al(f.top, u.top), u.right = tv(f.right, u.right), u.bottom = tv(f.bottom, u.bottom), u.left = Al(f.left, u.left), u;
  }, ov(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const r5 = {
  getClippingRect: n5,
  convertOffsetParentRelativeRectToViewportRelativeRect: YA,
  isElement: Mr,
  getDimensions: rv,
  getOffsetParent: Sp,
  getDocumentElement: zr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: GA(t, Sp(n), r),
      floating: {
        ...rv(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Ns(e).direction === "rtl"
};
function o5(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = r, a = o && !s, u = i && !s, c = a || u ? [...Mr(e) ? Eu(e) : [], ...Eu(t)] : [];
  c.forEach((v) => {
    a && v.addEventListener("scroll", n, {
      passive: !0
    }), u && v.addEventListener("resize", n);
  });
  let f = null;
  if (l) {
    let v = !0;
    f = new ResizeObserver(() => {
      v || n(), v = !1;
    }), Mr(e) && !s && f.observe(e), f.observe(t);
  }
  let d, g = s ? qn(e) : null;
  s && h();
  function h() {
    const v = qn(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    c.forEach((w) => {
      a && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (v = f) == null || v.disconnect(), f = null, s && cancelAnimationFrame(d);
  };
}
const i5 = (e, t, n) => RA(e, t, {
  platform: r5,
  ...n
});
var kp = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function Cp(e, t) {
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
        if (!Cp(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Cp(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function l5(e) {
  const t = m.exports.useRef(e);
  return kp(() => {
    t.current = e;
  }), t;
}
function s5(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), s = l5(o), a = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
  Cp(f == null ? void 0 : f.map((x) => {
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
    !i.current || !l.current || i5(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && hn.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  kp(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  kp(() => (h.current = !0, () => {
    h.current = !1;
  }), []);
  const v = m.exports.useCallback(() => {
    if (typeof a.current == "function" && (a.current(), a.current = null), i.current && l.current)
      if (s.current) {
        const x = s.current(i.current, l.current, g);
        a.current = x;
      } else
        g();
  }, [g, s]), w = m.exports.useCallback((x) => {
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
const a5 = (e) => {
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
      return r(t) ? t.current != null ? X0({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? X0({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function u5(e) {
  const [t, n] = m.exports.useState(void 0);
  return Ze(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let l, s;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, u = Array.isArray(a) ? a[0] : a;
          l = u.inlineSize, s = u.blockSize;
        } else
          l = e.offsetWidth, s = e.offsetHeight;
        n({
          width: l,
          height: s
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
const bb = "Popper", [Em, mc] = yo(bb), [c5, Sb] = Em(bb), f5 = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(c5, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, d5 = "PopperAnchor", p5 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = Sb(d5, n), l = m.exports.useRef(null), s = xe(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: s
  }));
}), $u = "PopperContent", [h5, UF] = Em($u), [m5, g5] = Em($u, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), v5 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, s, a, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, $ = Sb($u, c), [E, P] = m.exports.useState(null), R = xe(
    t,
    (or) => P(or)
  ), [T, O] = m.exports.useState(null), D = u5(T), z = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0, F = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0, _ = f + (g !== "center" ? "-" + g : ""), V = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, M = Array.isArray(w) ? w : [
    w
  ], I = M.length > 0, N = {
    padding: V,
    boundary: M.filter(x5),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: ne, y: ue, placement: ee, middlewareData: Q, update: ie } = s5({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: o5,
    middleware: [
      w5(),
      jA({
        mainAxis: d + F,
        alignmentAxis: h
      }),
      b ? VA({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? HA() : void 0,
        ...N
      }) : void 0,
      T ? a5({
        element: T,
        padding: v
      }) : void 0,
      b ? FA({
        ...N
      }) : void 0,
      UA({
        ...N,
        apply: ({ elements: or, availableWidth: Kc, availableHeight: Yc }) => {
          or.floating.style.setProperty("--radix-popper-available-width", `${Kc}px`), or.floating.style.setProperty("--radix-popper-available-height", `${Yc}px`);
        }
      }),
      b5({
        arrowWidth: z,
        arrowHeight: F
      }),
      x ? zA({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(y5)
  });
  Ze(() => {
    k($.anchor);
  }, [
    k,
    $.anchor
  ]);
  const we = ne !== null && ue !== null, [ce, de] = kb(ee), se = ze(A);
  Ze(() => {
    we && (se == null || se());
  }, [
    we,
    se
  ]);
  const at = (o = Q.arrow) === null || o === void 0 ? void 0 : o.x, ut = (i = Q.arrow) === null || i === void 0 ? void 0 : i.y, jr = ((l = Q.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [er, tr] = m.exports.useState();
  Ze(() => {
    E && tr(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]);
  const { hasParent: Qs, positionUpdateFns: nr } = g5($u, c), rr = !Qs;
  m.exports.useLayoutEffect(() => {
    if (!rr)
      return nr.add(ie), () => {
        nr.delete(ie);
      };
  }, [
    rr,
    nr,
    ie
  ]), Ze(() => {
    rr && we && Array.from(nr).reverse().forEach(
      (or) => requestAnimationFrame(or)
    );
  }, [
    rr,
    we,
    nr
  ]);
  const Bi = {
    "data-side": ce,
    "data-align": de,
    ...S,
    ref: R,
    style: {
      ...S.style,
      animation: we ? void 0 : "none",
      opacity: (s = Q.hide) !== null && s !== void 0 && s.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ m.exports.createElement("div", {
    ref: C,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: J,
      left: 0,
      top: 0,
      transform: we ? `translate3d(${Math.round(ne)}px, ${Math.round(ue)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: er,
      ["--radix-popper-transform-origin"]: [
        (a = Q.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (u = Q.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ m.exports.createElement(h5, {
    scope: c,
    placedSide: ce,
    onArrowChange: O,
    arrowX: at,
    arrowY: ut,
    shouldHideArrow: jr
  }, rr ? /* @__PURE__ */ m.exports.createElement(m5, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: nr
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, Bi)) : /* @__PURE__ */ m.exports.createElement(Ue.div, Bi)));
});
function y5(e) {
  return e !== void 0;
}
function x5(e) {
  return e !== null;
}
const w5 = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), b5 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: s, rects: a, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, v] = kb(s), w = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], p = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + d / 2, y = ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0 ? i : 0) + g / 2;
    let x = "", b = "";
    return h === "bottom" ? (x = f ? w : `${p}px`, b = `${-g}px`) : h === "top" ? (x = f ? w : `${p}px`, b = `${a.floating.height + g}px`) : h === "right" ? (x = `${-g}px`, b = f ? w : `${y}px`) : h === "left" && (x = `${a.floating.width + g}px`, b = f ? w : `${y}px`), {
      data: {
        x,
        y: b
      }
    };
  }
});
function kb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Cb = f5, Eb = p5, $b = v5, Ab = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ub.createPortal(/* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: t
  })), r) : null;
});
function S5(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const mn = (e) => {
  const { present: t, children: n } = e, r = k5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = xe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
mn.displayName = "Presence";
function k5(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = S5(l, {
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
    const u = fa(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Ze(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = fa(u);
      e ? a("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    a
  ]), Ze(() => {
    if (t) {
      const u = (f) => {
        const g = fa(r.current).includes(f.animationName);
        f.target === t && g && hn.exports.flushSync(
          () => a("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = fa(r.current));
      };
      return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      a("ANIMATION_END");
  }, [
    t,
    a
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: m.exports.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function fa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function is({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = C5({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, s = ze(n), a = m.exports.useCallback((u) => {
    if (i) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && s(f);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    s
  ]);
  return [
    l,
    a
  ];
}
function C5({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = ze(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var E5 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Po = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), pa = {}, _f = 0, Pb = function(e) {
  return e && (e.host || Pb(e.parentNode));
}, $5 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Pb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, A5 = function(e, t, n, r) {
  var o = $5(t, Array.isArray(e) ? e : [e]);
  pa[n] || (pa[n] = /* @__PURE__ */ new WeakMap());
  var i = pa[n], l = [], s = /* @__PURE__ */ new Set(), a = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || a.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", v = (Po.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        Po.set(d, v), i.set(d, w), l.push(d), v === 1 && h && da.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), _f++, function() {
    l.forEach(function(f) {
      var d = Po.get(f) - 1, g = i.get(f) - 1;
      Po.set(f, d), i.set(f, g), d || (da.has(f) || f.removeAttribute(r), da.delete(f)), g || f.removeAttribute(n);
    }), _f--, _f || (Po = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), pa = {});
  };
}, gc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || E5(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), A5(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ot = function() {
  return ot = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ot.apply(this, arguments);
};
function $m(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function _b(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Pl = "right-scroll-bar-position", _l = "width-before-scroll-bar", P5 = "with-scroll-bars-hidden", _5 = "--removed-body-scroll-bar-size";
function R5(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function T5(e, t) {
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
function Rb(e, t) {
  return T5(t || null, function(n) {
    return e.forEach(function(r) {
      return R5(r, n);
    });
  });
}
var vc = { exports: {} }, yc = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I5 = m.exports, O5 = Symbol.for("react.element"), N5 = Symbol.for("react.fragment"), M5 = Object.prototype.hasOwnProperty, D5 = I5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tb(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    M5.call(t, r) && !L5.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: O5, type: e, key: i, ref: l, props: o, _owner: D5.current };
}
yc.Fragment = N5;
yc.jsx = Tb;
yc.jsxs = Tb;
(function(e) {
  e.exports = yc;
})(vc);
const Xn = vc.exports.Fragment, B = vc.exports.jsx, pe = vc.exports.jsxs;
function F5(e) {
  return e;
}
function z5(e, t) {
  t === void 0 && (t = F5);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var l = t(i, r);
      return n.push(l), function() {
        n = n.filter(function(s) {
          return s !== l;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
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
        var s = n;
        n = [], s.forEach(i), l = n;
      }
      var a = function() {
        var c = l;
        l = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(a);
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
function Ib(e) {
  e === void 0 && (e = {});
  var t = z5(null);
  return t.options = ot({ async: !0, ssr: !1 }, e), t;
}
var Ob = function(e) {
  var t = e.sideCar, n = $m(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...ot({}, n)
  });
};
Ob.isSideCarExport = !0;
function Nb(e, t) {
  return e.useMedium(t), Ob;
}
var Mb = Ib(), Rf = function() {
}, xc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Rf,
    onWheelCapture: Rf,
    onTouchMoveCapture: Rf
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = $m(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Rb([n, t]), A = ot(ot({}, y), o);
  return /* @__PURE__ */ pe(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Mb,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(s), ot(ot({}, A), {
      ref: b
    })) : /* @__PURE__ */ B(p, {
      ...ot({}, A, {
        className: a,
        ref: b
      }),
      children: s
    })]
  });
});
xc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xc.classNames = {
  fullWidth: _l,
  zeroRight: Pl
};
var B5 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function j5() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = B5();
  return t && e.setAttribute("nonce", t), e;
}
function V5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function H5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var U5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = j5()) && (V5(t, n), H5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, W5 = function() {
  var e = U5();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Am = function() {
  var e = W5(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, q5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tf = function(e) {
  return parseInt(e || "", 10) || 0;
}, Q5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tf(n), Tf(r), Tf(o)];
}, G5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return q5;
  var t = Q5(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, K5 = Am(), Y5 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(P5, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
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
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Pl, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(_l, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pl, " .").concat(Pl, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_l, " .").concat(_l, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(_5, ": ").concat(s, `px;
  }
`);
}, Db = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return G5(o);
  }, [o]);
  return /* @__PURE__ */ B(K5, {
    styles: Y5(i, !t, o, n ? "" : "!important")
  });
}, Ep = !1;
if (typeof window < "u")
  try {
    var ha = Object.defineProperty({}, "passive", {
      get: function() {
        return Ep = !0, !0;
      }
    });
    window.addEventListener("test", ha, ha), window.removeEventListener("test", ha, ha);
  } catch {
    Ep = !1;
  }
var _o = Ep ? { passive: !1 } : !1, X5 = function(e) {
  return e.tagName === "TEXTAREA";
}, Lb = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !X5(e) && n[t] === "visible");
}, Z5 = function(e) {
  return Lb(e, "overflowY");
}, J5 = function(e) {
  return Lb(e, "overflowX");
}, iv = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Fb(e, n);
    if (r) {
      var o = zb(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, eP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, tP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Fb = function(e, t) {
  return e === "v" ? Z5(t) : J5(t);
}, zb = function(e, t) {
  return e === "v" ? eP(t) : tP(t);
}, nP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rP = function(e, t, n, r, o) {
  var i = nP(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = zb(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && Fb(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ma = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, lv = function(e) {
  return [e.deltaX, e.deltaY];
}, sv = function(e) {
  return e && "current" in e ? e.current : e;
}, oP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, iP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, lP = 0, Ro = [];
function sP(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(lP++)[0], i = m.exports.useState(function() {
    return Am();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = _b([e.lockRef.current], (e.shards || []).map(sv), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = ma(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && $ === "h" && S.type === "range")
      return !1;
    var E = iv($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = iv($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return rP(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Ro.length || Ro[Ro.length - 1] !== i)) {
      var p = "deltaY" in w ? lv(w) : ma(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && oP(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(sv).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? s(w, x[0]) : !l.current.noIsolation;
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
    n.current = ma(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, lv(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, ma(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Ro.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, _o), document.addEventListener("touchmove", a, _o), document.addEventListener("touchstart", c, _o), function() {
      Ro = Ro.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, _o), document.removeEventListener("touchmove", a, _o), document.removeEventListener("touchstart", c, _o);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ pe(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: iP(o)
    }) : null, g ? /* @__PURE__ */ B(Db, {
      gapMode: "margin"
    }) : null]
  });
}
const aP = Nb(Mb, sP);
var Bb = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(xc, {
    ...ot({}, e, {
      ref: t,
      sideCar: aP
    })
  });
});
Bb.classNames = xc.classNames;
const jb = Bb, Vb = "Popover", [Hb, WF] = yo(Vb, [
  mc
]), Pm = mc(), [uP, Ms] = Hb(Vb), cP = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, s = Pm(t), a = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = is({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Cb, s, /* @__PURE__ */ m.exports.createElement(uP, {
    scope: t,
    contentId: Bn(),
    triggerRef: a,
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
}, fP = "PopoverTrigger", dP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ms(fP, n), i = Pm(n), l = xe(t, o.triggerRef), s = /* @__PURE__ */ m.exports.createElement(Ue.button, G({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Wb(o.open)
  }, r, {
    ref: l,
    onClick: ae(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ m.exports.createElement(Eb, G({
    asChild: !0
  }, i), s);
}), pP = "PopoverPortal", [qF, hP] = Hb(pP, {
  forceMount: void 0
}), ls = "PopoverContent", mP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = hP(ls, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ms(ls, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(gP, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(vP, G({}, o, {
    ref: t
  })));
}), gP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ms(ls, e.__scopePopover), r = m.exports.useRef(null), o = xe(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return gc(l);
  }, []), /* @__PURE__ */ m.exports.createElement(jb, {
    as: bi,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Ub, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ae(e.onCloseAutoFocus, (l) => {
      var s;
      l.preventDefault(), i.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ae(e.onPointerDownOutside, (l) => {
      const s = l.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || a;
      i.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ae(
      e.onFocusOutside,
      (l) => l.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), vP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ms(ls, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Ub, G({}, e, {
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
      const s = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(s)) && o.preventDefault();
    }
  }));
}), Ub = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: s, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Ms(ls, n), g = Pm(n);
  return dc(), /* @__PURE__ */ m.exports.createElement(Sm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(bm, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement($b, G({
    "data-state": Wb(d.open),
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
function Wb(e) {
  return e ? "open" : "closed";
}
const yP = cP, xP = dP, wP = mP, qb = "Dialog", [Qb, QF] = yo(qb), [bP, Ds] = Qb(qb), SP = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = is({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(bP, {
    scope: t,
    triggerRef: s,
    contentRef: a,
    contentId: Bn(),
    titleId: Bn(),
    descriptionId: Bn(),
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
}, Gb = "DialogPortal", [kP, CP] = Qb(Gb, {
  forceMount: void 0
}), EP = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ds(Gb, t);
  return /* @__PURE__ */ m.exports.createElement(kP, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(Ab, {
      asChild: !0,
      container: o
    }, l))
  ));
}, ss = "DialogContent", $P = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = CP(ss, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ds(ss, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(AP, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(PP, G({}, o, {
    ref: t
  })));
}), AP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ds(ss, e.__scopeDialog), r = m.exports.useRef(null), o = xe(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return gc(i);
  }, []), /* @__PURE__ */ m.exports.createElement(Kb, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ae(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ae(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, s = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || s) && i.preventDefault();
    }),
    onFocusOutside: ae(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), PP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ds(ss, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Kb, G({}, e, {
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
      const s = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(s)) && o.preventDefault();
    }
  }));
}), Kb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = Ds(ss, n), a = m.exports.useRef(null), u = xe(t, a);
  return dc(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Sm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(bm, G({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": _P(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function _P(e) {
  return e ? "open" : "closed";
}
const RP = SP, TP = EP, IP = $P, _m = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(NP);
  if (i) {
    const l = i.props.children, s = o.map((a) => a === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : a);
    return /* @__PURE__ */ m.exports.createElement($p, G({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, s) : null);
  }
  return /* @__PURE__ */ m.exports.createElement($p, G({}, r, {
    ref: t
  }), n);
});
_m.displayName = "Slot";
const $p = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...MP(r, n.props),
    ref: Rh(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
$p.displayName = "SlotClone";
const OP = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function NP(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === OP;
}
function MP(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...s) => {
      i == null || i(...s), o == null || o(...s);
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
const DP = [
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
], wc = DP.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, s = i ? _m : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(s, G({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function LP(e, t) {
  e && hn.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function FP(e) {
  const t = ze(e);
  m.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Ap = "dismissableLayer.update", zP = "dismissableLayer.pointerDownOutside", BP = "dismissableLayer.focusOutside";
let av;
const jP = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), VP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: s, ...a } = e, u = m.exports.useContext(jP), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = xe(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = HP((S) => {
    const $ = S.target, E = [
      ...u.branches
    ].some(
      (P) => P.contains($)
    );
    !x || E || (o == null || o(S), l == null || l(S), S.defaultPrevented || s == null || s());
  }), A = UP((S) => {
    const $ = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains($)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || s == null || s());
  });
  return FP((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (av = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), uv(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = av);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), uv());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(Ap, S), () => document.removeEventListener(Ap, S);
  }, []), /* @__PURE__ */ m.exports.createElement(wc.div, G({}, a, {
    ref: g,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ae(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: ae(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: ae(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function HP(e) {
  const t = ze(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          Yb(zP, t, a, {
            discrete: !0
          });
        };
        var s = u;
        const a = {
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
function UP(e) {
  const t = ze(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && Yb(BP, t, {
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
function uv() {
  const e = new CustomEvent(Ap);
  document.dispatchEvent(e);
}
function Yb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? LP(o, i) : o.dispatchEvent(i);
}
const If = "focusScope.autoFocusOnMount", Of = "focusScope.autoFocusOnUnmount", cv = {
  bubbles: !1,
  cancelable: !0
}, WP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [s, a] = m.exports.useState(null), u = ze(o), c = ze(i), f = m.exports.useRef(null), d = xe(
    t,
    (v) => a(v)
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
        if (g.paused || !s)
          return;
        const b = x.target;
        s.contains(b) ? f.current = b : Kr(f.current, {
          select: !0
        });
      }, y = function(x) {
        g.paused || !s || s.contains(x.relatedTarget) || Kr(f.current, {
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
    s,
    g.paused
  ]), m.exports.useEffect(() => {
    if (s) {
      dv.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const p = new CustomEvent(If, cv);
        s.addEventListener(If, u), s.dispatchEvent(p), p.defaultPrevented || (qP(XP(Xb(s)), {
          select: !0
        }), document.activeElement === v && Kr(s));
      }
      return () => {
        s.removeEventListener(If, u), setTimeout(() => {
          const p = new CustomEvent(Of, cv);
          s.addEventListener(Of, c), s.dispatchEvent(p), p.defaultPrevented || Kr(v != null ? v : document.body, {
            select: !0
          }), s.removeEventListener(Of, c), dv.remove(g);
        }, 0);
      };
    }
  }, [
    s,
    u,
    c,
    g
  ]);
  const h = m.exports.useCallback((v) => {
    if (!n && !r || g.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = QP(y);
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
  return /* @__PURE__ */ m.exports.createElement(wc.div, G({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function qP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Kr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function QP(e) {
  const t = Xb(e), n = fv(t, e), r = fv(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Xb(e) {
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
function fv(e, t) {
  for (const n of e)
    if (!GP(n, {
      upTo: t
    }))
      return n;
}
function GP(e, { upTo: t }) {
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
function KP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && KP(e) && t && e.select();
  }
}
const dv = YP();
function YP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = pv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = pv(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function pv(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function XP(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const ZP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ub.createPortal(/* @__PURE__ */ m.exports.createElement(wc.div, G({}, o, {
    ref: t
  })), r) : null;
});
var Zb = Ib(), Nf = function() {
}, bc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Nf,
    onWheelCapture: Nf,
    onTouchMoveCapture: Nf
  }), o = r[0], i = r[1], l = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = $m(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Rb([n, t]), A = ot(ot({}, y), o);
  return /* @__PURE__ */ pe(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Zb,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(s), ot(ot({}, A), {
      ref: b
    })) : /* @__PURE__ */ B(p, {
      ...ot({}, A, {
        className: a,
        ref: b
      }),
      children: s
    })]
  });
});
bc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
bc.classNames = {
  fullWidth: _l,
  zeroRight: Pl
};
var Pp = !1;
if (typeof window < "u")
  try {
    var ga = Object.defineProperty({}, "passive", {
      get: function() {
        return Pp = !0, !0;
      }
    });
    window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
  } catch {
    Pp = !1;
  }
var To = Pp ? { passive: !1 } : !1, JP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, e_ = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, hv = function(e, t) {
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
}, Jb = function(e, t) {
  return e === "v" ? JP(t) : e_(t);
}, eS = function(e, t) {
  return e === "v" ? t_(t) : n_(t);
}, r_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, o_ = function(e, t, n, r, o) {
  var i = r_(e, window.getComputedStyle(t).direction), l = i * r, s = n.target, a = t.contains(s), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = eS(e, s), h = g[0], v = g[1], w = g[2], p = v - w - i * h;
    (h || p) && Jb(e, s) && (f += p, d += h), s = s.parentNode;
  } while (!a && s !== document.body || a && (t.contains(s) || t === s));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, va = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mv = function(e) {
  return [e.deltaX, e.deltaY];
}, gv = function(e) {
  return e && "current" in e ? e.current : e;
}, i_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, l_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, s_ = 0, Io = [];
function a_(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(s_++)[0], i = m.exports.useState(function() {
    return Am();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = _b([e.lockRef.current], (e.shards || []).map(gv), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = va(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && $ === "h" && S.type === "range")
      return !1;
    var E = hv($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = hv($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return o_(P, w, v, P === "h" ? x : b, !0);
  }, []), a = m.exports.useCallback(function(v) {
    var w = v;
    if (!(!Io.length || Io[Io.length - 1] !== i)) {
      var p = "deltaY" in w ? mv(w) : va(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && i_(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(gv).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? s(w, x[0]) : !l.current.noIsolation;
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
    n.current = va(v), r.current = void 0;
  }, []), f = m.exports.useCallback(function(v) {
    u(v.type, mv(v), v.target, s(v, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(v) {
    u(v.type, va(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Io.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", a, To), document.addEventListener("touchmove", a, To), document.addEventListener("touchstart", c, To), function() {
      Io = Io.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", a, To), document.removeEventListener("touchmove", a, To), document.removeEventListener("touchstart", c, To);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ pe(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: l_(o)
    }) : null, g ? /* @__PURE__ */ B(Db, {
      gapMode: "margin"
    }) : null]
  });
}
const u_ = Nb(Zb, a_);
var tS = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(bc, {
    ...ot({}, e, {
      ref: t,
      sideCar: u_
    })
  });
});
tS.classNames = bc.classNames;
const c_ = tS, nS = "Dialog", [rS, GF] = yo(nS), [f_, So] = rS(nS), d_ = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, s = m.exports.useRef(null), a = m.exports.useRef(null), [u = !1, c] = is({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(f_, {
    scope: t,
    triggerRef: s,
    contentRef: a,
    contentId: Bn(),
    titleId: Bn(),
    descriptionId: Bn(),
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
}, oS = "DialogPortal", [p_, iS] = rS(oS, {
  forceMount: void 0
}), h_ = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = So(oS, t);
  return /* @__PURE__ */ m.exports.createElement(p_, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(ZP, {
      asChild: !0,
      container: o
    }, l))
  ));
}, _p = "DialogOverlay", m_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = iS(_p, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = So(_p, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(g_, G({}, o, {
    ref: t
  }))) : null;
}), g_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = So(_p, n);
  return /* @__PURE__ */ m.exports.createElement(c_, {
    as: _m,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(wc.div, G({
    "data-state": sS(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), as = "DialogContent", v_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = iS(as, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = So(as, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(y_, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(x_, G({}, o, {
    ref: t
  })));
}), y_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = So(as, e.__scopeDialog), r = m.exports.useRef(null), o = xe(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return gc(i);
  }, []), /* @__PURE__ */ m.exports.createElement(lS, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ae(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ae(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, s = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || s) && i.preventDefault();
    }),
    onFocusOutside: ae(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), x_ = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = So(as, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(lS, G({}, e, {
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
      const s = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(s)) && o.preventDefault();
    }
  }));
}), lS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, s = So(as, n), a = m.exports.useRef(null), u = xe(t, a);
  return dc(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(WP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(VP, G({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": sS(s.open)
  }, l, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
});
function sS(e) {
  return e ? "open" : "closed";
}
const w_ = d_, b_ = h_, S_ = m_, k_ = v_;
var vv = 1, C_ = 0.9, E_ = 0.3, Mf = 0.1, $_ = 0, Df = 0.999, A_ = 0.9999, P_ = 0.99, yv = /[\\\/\-_+.# \t"@\[\(\{&]/, __ = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Rp(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? vv : P_;
  for (var l = r.charAt(i), s = n.indexOf(l, o), a = 0, u, c, f; s >= 0; )
    u = Rp(e, t, n, r, s + 1, i + 1), u > a && (s === o ? u *= vv : yv.test(e.charAt(s - 1)) ? (u *= C_, f = e.slice(o, s - 1).match(__), f && o > 0 && (u *= Math.pow(Df, f.length))) : yv.test(e.slice(o, s - 1)) ? (u *= $_, o > 0 && (u *= Math.pow(Df, s - o))) : (u *= E_, o > 0 && (u *= Math.pow(Df, s - o))), e.charAt(s) !== t.charAt(i) && (u *= A_)), u < Mf && n.charAt(s - 1) === r.charAt(i + 1) && n.charAt(s - 1) !== r.charAt(i) && (c = Rp(e, t, n, r, s + 1, i + 2), c * Mf > u && (u = c * Mf)), u > a && (a = u), s = n.indexOf(l, s + 1);
  return a;
}
function R_(e, t) {
  return Rp(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var T_ = R_, I_ = '[cmdk-list-sizer=""]', Xi = '[cmdk-group=""]', Lf = '[cmdk-group-items=""]', O_ = '[cmdk-group-heading=""]', aS = '[cmdk-item=""]', xv = `${aS}:not([aria-disabled="true"])`, Tp = "cmdk-item-select", fr = "data-value", N_ = (e, t) => T_(e, t), uS = m.exports.createContext(void 0), Ls = () => m.exports.useContext(uS), cS = m.exports.createContext(void 0), Rm = () => m.exports.useContext(cS), fS = m.exports.createContext(void 0), dS = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = Fo(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Fo(() => /* @__PURE__ */ new Set()), i = Fo(() => /* @__PURE__ */ new Map()), l = Fo(() => /* @__PURE__ */ new Map()), s = Fo(() => /* @__PURE__ */ new Set()), a = pS(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...v } = e, w = m.exports.useId(), p = m.exports.useId(), y = m.exports.useId(), x = W_();
  Ii(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, R), b.emit();
    }
  }, [f]);
  let b = m.exports.useMemo(() => ({ subscribe: (I) => (s.current.add(I), () => s.current.delete(I)), snapshot: () => r.current, setState: (I, N, k) => {
    var C, J, ne;
    if (!Object.is(r.current[I], N)) {
      if (r.current[I] = N, I === "search")
        P(), $(), x(1, E);
      else if (I === "value")
        if (((C = a.current) == null ? void 0 : C.value) !== void 0) {
          (ne = (J = a.current).onValueChange) == null || ne.call(J, N);
          return;
        } else
          k || x(5, R);
      b.emit();
    }
  }, emit: () => {
    s.current.forEach((I) => I());
  } }), []), A = m.exports.useMemo(() => ({ value: (I, N) => {
    N !== l.current.get(I) && (l.current.set(I, N), r.current.filtered.items.set(I, S(N)), x(2, () => {
      $(), b.emit();
    }));
  }, item: (I, N) => (o.current.add(I), N && (i.current.has(N) ? i.current.get(N).add(I) : i.current.set(N, /* @__PURE__ */ new Set([I]))), x(3, () => {
    P(), $(), r.current.value || E(), b.emit();
  }), () => {
    l.current.delete(I), o.current.delete(I), r.current.filtered.items.delete(I), x(4, () => {
      P(), E(), b.emit();
    });
  }), group: (I) => (i.current.has(I) || i.current.set(I, /* @__PURE__ */ new Set()), () => {
    l.current.delete(I), i.current.delete(I);
  }), filter: () => a.current.shouldFilter, label: u || e["aria-label"], listId: w, inputId: y, labelId: p }), []);
  function S(I) {
    var C;
    var N;
    let k = (C = (N = a.current) == null ? void 0 : N.filter) != null ? C : N_;
    return I ? k(I, r.current.search) : 0;
  }
  function $() {
    if (!n.current || !r.current.search || a.current.shouldFilter === !1)
      return;
    let I = r.current.filtered.items, N = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), ne = 0;
      J.forEach((ue) => {
        let ee = I.get(ue);
        ne = Math.max(ee, ne);
      }), N.push([C, ne]);
    });
    let k = n.current.querySelector(I_);
    O().sort((C, J) => {
      var ee, Q;
      let ne = C.getAttribute(fr), ue = J.getAttribute(fr);
      return ((ee = I.get(ue)) != null ? ee : 0) - ((Q = I.get(ne)) != null ? Q : 0);
    }).forEach((C) => {
      let J = C.closest(Lf);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${Lf} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${Lf} > *`));
    }), N.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${Xi}[${fr}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function E() {
    let I = O().find((k) => !k.ariaDisabled), N = I == null ? void 0 : I.getAttribute(fr);
    b.setState("value", N || void 0);
  }
  function P() {
    if (!r.current.search || a.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let I = 0;
    for (let N of o.current) {
      let k = l.current.get(N), C = S(k);
      r.current.filtered.items.set(N, C), C > 0 && I++;
    }
    for (let [N, k] of i.current)
      for (let C of k)
        if (r.current.filtered.items.get(C) > 0) {
          r.current.filtered.groups.add(N);
          break;
        }
    r.current.filtered.count = I;
  }
  function R() {
    var I, N, k;
    let C = T();
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (N = C.closest(Xi)) == null ? void 0 : N.querySelector(O_)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    return n.current.querySelector(`${aS}[aria-selected="true"]`);
  }
  function O() {
    return Array.from(n.current.querySelectorAll(xv));
  }
  function D(I) {
    let N = O()[I];
    N && b.setState("value", N.getAttribute(fr));
  }
  function z(I) {
    var N;
    let k = T(), C = O(), J = C.findIndex((ue) => ue === k), ne = C[J + I];
    (N = a.current) != null && N.loop && (ne = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), ne && b.setState("value", ne.getAttribute(fr));
  }
  function F(I) {
    let N = T(), k = N == null ? void 0 : N.closest(Xi), C;
    for (; k && !C; )
      k = I > 0 ? H_(k, Xi) : U_(k, Xi), C = k == null ? void 0 : k.querySelector(xv);
    C ? b.setState("value", C.getAttribute(fr)) : z(I);
  }
  let _ = () => D(O().length - 1), V = (I) => {
    I.preventDefault(), I.metaKey ? _() : I.altKey ? F(1) : z(1);
  }, M = (I) => {
    I.preventDefault(), I.metaKey ? D(0) : I.altKey ? F(-1) : z(-1);
  };
  return m.exports.createElement("div", { ref: Fs([n, t]), ...v, "cmdk-root": "", onKeyDown: (I) => {
    var N;
    if ((N = v.onKeyDown) == null || N.call(v, I), !I.defaultPrevented)
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
          let k = T();
          if (k) {
            let C = new Event(Tp);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: q_ }, u), m.exports.createElement(cS.Provider, { value: b }, m.exports.createElement(uS.Provider, { value: A }, c)));
}), M_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(fS), i = Ls(), l = pS(e);
  Ii(() => i.item(n, o), []);
  let s = hS(n, r, [e.value, e.children, r]), a = Rm(), u = Qn((p) => p.value && p.value === s.current), c = Qn((p) => i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(Tp, f), () => p.removeEventListener(Tp, f);
  }, [c, e.onSelect, e.disabled]);
  function f() {
    var p, y;
    (y = (p = l.current).onSelect) == null || y.call(p, s.current);
  }
  function d() {
    a.setState("value", s.current, !0);
  }
  if (!c)
    return null;
  let { disabled: g, value: h, onSelect: v, ...w } = e;
  return m.exports.createElement("div", { ref: Fs([r, t]), ...w, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), D_ = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), s = m.exports.useRef(null), a = m.exports.useId(), u = Ls(), c = Qn((d) => u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Ii(() => u.group(i), []), hS(i, l, [e.value, e.heading, s]);
  let f = m.exports.createElement(fS.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: Fs([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: s, "cmdk-group-heading": "", "aria-hidden": !0, id: a }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? a : void 0 }, f));
}), L_ = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = Qn((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: Fs([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), F_ = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Rm(), l = Qn((a) => a.search), s = Ls();
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": s.listId, "aria-labelledby": s.labelId, id: s.inputId, type: "text", value: o ? e.value : l, onChange: (a) => {
    o || i.setState("search", a.target.value), n == null || n(a.target.value);
  } });
}), z_ = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = Ls();
  return m.exports.useEffect(() => {
    if (i.current && o.current) {
      let s = i.current, a = o.current, u, c = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let f = s.getBoundingClientRect().height;
          a.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return c.observe(s), () => {
        cancelAnimationFrame(u), c.unobserve(s);
      };
    }
  }, []), m.exports.createElement("div", { ref: Fs([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), B_ = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...i } = e;
  return m.exports.createElement(w_, { open: n, onOpenChange: r }, m.exports.createElement(b_, { container: o }, m.exports.createElement(S_, { "cmdk-overlay": "" }), m.exports.createElement(k_, { "aria-label": e.label, "cmdk-dialog": "" }, m.exports.createElement(dS, { ref: t, ...i }))));
}), j_ = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = Qn((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), V_ = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), ln = Object.assign(dS, { List: z_, Item: M_, Input: F_, Group: D_, Separator: L_, Dialog: B_, Empty: j_, Loading: V_ });
function H_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function U_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function pS(e) {
  let t = m.exports.useRef(e);
  return Ii(() => {
    t.current = e;
  }), t;
}
var Ii = typeof window > "u" ? m.exports.useEffect : m.exports.useLayoutEffect;
function Fo(e) {
  let t = m.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Fs(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Qn(e) {
  let t = Rm(), n = () => e(t.snapshot());
  return m.exports.useSyncExternalStore(t.subscribe, n, n);
}
function hS(e, t, n) {
  let r = m.exports.useRef(), o = Ls();
  return Ii(() => {
    var i;
    let l = (() => {
      var s;
      for (let a of n) {
        if (typeof a == "string")
          return a.trim().toLowerCase();
        if (typeof a == "object" && "current" in a && a.current)
          return (s = a.current.textContent) == null ? void 0 : s.trim().toLowerCase();
      }
    })();
    o.value(e, l), (i = t.current) == null || i.setAttribute(fr, l), r.current = l;
  }), r;
}
var W_ = () => {
  let [e, t] = m.exports.useState(), n = Fo(() => /* @__PURE__ */ new Map());
  return Ii(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, q_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let Tm = Bs();
const re = (e) => zs(e, Tm);
let Im = Bs();
re.write = (e) => zs(e, Im);
let Sc = Bs();
re.onStart = (e) => zs(e, Sc);
let Om = Bs();
re.onFrame = (e) => zs(e, Om);
let Nm = Bs();
re.onFinish = (e) => zs(e, Nm);
let ii = [];
re.setTimeout = (e, t) => {
  let n = re.now() + t, r = () => {
    let i = ii.findIndex((l) => l.cancel == r);
    ~i && ii.splice(i, 1), xr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return ii.splice(mS(n), 0, o), xr += 1, gS(), o;
};
let mS = (e) => ~(~ii.findIndex((t) => t.time > e) || ~ii.length);
re.cancel = (e) => {
  Sc.delete(e), Om.delete(e), Tm.delete(e), Im.delete(e), Nm.delete(e);
};
re.sync = (e) => {
  Ip = !0, re.batchedUpdates(e), Ip = !1;
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
    Sc.delete(n), t = null;
  }, r;
};
let Mm = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => Mm = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : yS();
};
let yr = -1, xr = 0, Ip = !1;
function zs(e, t) {
  Ip ? (t.delete(e), e(0)) : (t.add(e), gS());
}
function gS() {
  yr < 0 && (yr = 0, re.frameLoop !== "demand" && Mm(vS));
}
function Q_() {
  yr = -1;
}
function vS() {
  ~yr && (Mm(vS), re.batchedUpdates(yS));
}
function yS() {
  let e = yr;
  yr = re.now();
  let t = mS(yr);
  t && (xS(ii.splice(0, t), (n) => n.handler()), xr -= t), Sc.flush(), Tm.flush(e ? Math.min(64, yr - e) : 16.667), Om.flush(), Im.flush(), Nm.flush(), xr || Q_();
}
function Bs() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      xr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return xr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), xr -= t.size, xS(t, (r) => r(n) && e.add(r)), xr += e.size, t = e);
    }
  };
}
function xS(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
function Op() {
}
const G_ = (e, t, n) => Object.defineProperty(e, t, {
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
function On(e, t) {
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
const he = (e, t) => e.forEach(t);
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
function Rl(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), he(n, t);
  }
}
const hl = (e, ...t) => Rl(e, (n) => n(...t)), wS = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Dm, bS, Tr = null, SS = !1, Lm = Op;
const K_ = (e) => {
  e.to && (bS = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Tr = e.colors), e.skipAnimation != null && (SS = e.skipAnimation), e.createStringInterpolator && (Dm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Lm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
};
var $n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Dm;
  },
  get to() {
    return bS;
  },
  get colors() {
    return Tr;
  },
  get skipAnimation() {
    return SS;
  },
  get willAdvance() {
    return Lm;
  },
  assign: K_
});
const Tl = /* @__PURE__ */ new Set();
let jt = [], Ff = [], Au = 0;
const kc = {
  get idle() {
    return !Tl.size && !jt.length;
  },
  start(e) {
    Au > e.priority ? (Tl.add(e), re.onStart(Y_)) : (kS(e), re(Np));
  },
  advance: Np,
  sort(e) {
    if (Au)
      re.onFrame(() => kc.sort(e));
    else {
      const t = jt.indexOf(e);
      ~t && (jt.splice(t, 1), CS(e));
    }
  },
  clear() {
    jt = [], Tl.clear();
  }
};
function Y_() {
  Tl.forEach(kS), Tl.clear(), re(Np);
}
function kS(e) {
  jt.includes(e) || CS(e);
}
function CS(e) {
  jt.splice(X_(jt, (t) => t.priority > e.priority), 0, e);
}
function Np(e) {
  const t = Ff;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    Au = r.priority, r.idle || (Lm(r), r.advance(e), r.idle || t.push(r));
  }
  return Au = 0, Ff = jt, Ff.length = 0, jt = t, jt.length > 0;
}
function X_(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const Z_ = {
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
}, sn = "[-+]?\\d*\\.?\\d+", Pu = sn + "%";
function Cc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const J_ = new RegExp("rgb" + Cc(sn, sn, sn)), e3 = new RegExp("rgba" + Cc(sn, sn, sn, sn)), t3 = new RegExp("hsl" + Cc(sn, Pu, Pu)), n3 = new RegExp("hsla" + Cc(sn, Pu, Pu, sn)), r3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, o3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, i3 = /^#([0-9a-fA-F]{6})$/, l3 = /^#([0-9a-fA-F]{8})$/;
function s3(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = i3.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Tr && Tr[e] !== void 0 ? Tr[e] : (t = J_.exec(e)) ? (Oo(t[1]) << 24 | Oo(t[2]) << 16 | Oo(t[3]) << 8 | 255) >>> 0 : (t = e3.exec(e)) ? (Oo(t[1]) << 24 | Oo(t[2]) << 16 | Oo(t[3]) << 8 | Sv(t[4])) >>> 0 : (t = r3.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = l3.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = o3.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = t3.exec(e)) ? (wv(bv(t[1]), ya(t[2]), ya(t[3])) | 255) >>> 0 : (t = n3.exec(e)) ? (wv(bv(t[1]), ya(t[2]), ya(t[3])) | Sv(t[4])) >>> 0 : null;
}
function zf(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function wv(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = zf(o, r, e + 1 / 3), l = zf(o, r, e), s = zf(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Oo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function bv(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Sv(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ya(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function kv(e) {
  let t = s3(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const us = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return us({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return Dm(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    const c = u3(u, i);
    return a3(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function a3(e, t, n, r, o, i, l, s, a) {
  let u = a ? a(e) : e;
  if (u < t) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = n);
  }
  return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u = u + r : u = u * (o - r) + r, u);
}
function u3(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function Mp() {
  return Mp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mp.apply(this, arguments);
}
const Si = Symbol.for("FluidValue.get"), ho = Symbol.for("FluidValue.observers"), Ft = (e) => Boolean(e && e[Si]), vt = (e) => e && e[Si] ? e[Si]() : e, Cv = (e) => e[ho] || null;
function c3(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function cs(e, t) {
  let n = e[ho];
  n && n.forEach((r) => {
    c3(r, t);
  });
}
class ES {
  constructor(t) {
    if (this[Si] = void 0, this[ho] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    f3(this, t);
  }
}
const f3 = (e, t) => $S(e, Si, t);
function Oi(e, t) {
  if (e[Si]) {
    let n = e[ho];
    n || $S(e, ho, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function fs(e, t) {
  let n = e[ho];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[ho] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const $S = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Ha = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, d3 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Ev = new RegExp(`(${Ha.source})(%|[a-z]+)`, "i"), p3 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ec = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, AS = (e) => {
  const [t, n] = h3(e);
  if (!t || wS())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Ec.test(n))
      return AS(n);
    if (n)
      return n;
  }
  return e;
}, h3 = (e) => {
  const t = Ec.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let Bf;
const m3 = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, PS = (e) => {
  Bf || (Bf = Tr ? new RegExp(`(${Object.keys(Tr).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => vt(i).replace(Ec, AS).replace(d3, kv).replace(Bf, kv)), n = t.map((i) => i.match(Ha).map(Number)), o = n[0].map((i, l) => n.map((s) => {
    if (!(l in s))
      throw Error('The arity of each "output" value must be equal');
    return s[l];
  })).map((i) => us(Mp({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const s = !Ev.test(t[0]) && ((l = t.find((u) => Ev.test(u))) == null ? void 0 : l.replace(Ha, ""));
    let a = 0;
    return t[0].replace(Ha, () => `${o[a++](i)}${s || ""}`).replace(p3, m3);
  };
}, Fm = "react-spring: ", _S = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Fm}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, g3 = _S(console.warn);
function v3() {
  g3(`${Fm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const y3 = _S(console.warn);
function x3() {
  y3(`${Fm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function $c(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !wS() && Ec.test(e) || e in (Tr || {}));
}
const zm = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, w3 = () => {
  const e = m.exports.useRef(!1);
  return zm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function RS() {
  const e = m.exports.useState()[1], t = w3();
  return () => {
    t.current && e(Math.random());
  };
}
function b3(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && S3(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function S3(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const TS = (e) => m.exports.useEffect(e, k3), k3 = [];
function $v(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const ds = Symbol.for("Animated:node"), C3 = (e) => !!e && e[ds] === e, xn = (e) => e && e[ds], Bm = (e, t) => G_(e, ds, t), Ac = (e) => e && e[ds] && e[ds].getPayload();
class IS {
  constructor() {
    this.payload = void 0, Bm(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Ni extends IS {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new Ni(t);
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
class ki extends Ni {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = us({
      output: [t, t]
    });
  }
  static create(t) {
    return new ki(t);
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
    t && (this._toString = us({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const _u = {
  dependencies: null
};
class Pc extends IS {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return En(this.source, (r, o) => {
      C3(r) ? n[o] = r.getValue(t) : Ft(r) ? n[o] = vt(r) : t || (n[o] = r);
    }), n;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && he(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      const n = /* @__PURE__ */ new Set();
      return En(t, this._addToPayload, n), Array.from(n);
    }
  }
  _addToPayload(t) {
    _u.dependencies && Ft(t) && _u.dependencies.add(t);
    const n = Ac(t);
    n && he(n, (r) => this.add(r));
  }
}
class jm extends Pc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new jm(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(E3)), !0);
  }
}
function E3(e) {
  return ($c(e) ? ki : Ni).create(e);
}
function Dp(e) {
  const t = xn(e);
  return t ? t.constructor : W.arr(e) ? jm : $c(e) ? ki : Ni;
}
function Lp() {
  return Lp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lp.apply(this, arguments);
}
const Av = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = P3(o, h);
    }, [o]), [s, a] = A3(r, t), u = RS(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new $3(c, a), d = m.exports.useRef();
    zm(() => (d.current = f, he(a, (h) => Oi(h, f)), () => {
      d.current && (he(d.current.deps, (h) => fs(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), TS(() => () => {
      const h = d.current;
      he(h.deps, (v) => fs(v, h));
    });
    const g = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ B(e, {
      ...g,
      ref: l
    });
  });
};
class $3 {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && re.write(this.update);
  }
}
function A3(e, t) {
  const n = /* @__PURE__ */ new Set();
  return _u.dependencies = n, e.style && (e = Lp({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Pc(e), _u.dependencies = null, [e, n];
}
function P3(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const Pv = Symbol.for("AnimatedComponent"), _3 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Pc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const s = _v(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = Av(l, o)) : l = l[Pv] || (l[Pv] = Av(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return En(e, (l, s) => {
    W.arr(e) && (s = _v(l)), i[s] = i(l);
  }), {
    animated: i
  };
}, _v = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
function Ke() {
  return Ke = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ke.apply(this, arguments);
}
function Zr(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Il = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), OS = (e, t) => W.obj(e) ? t && e[t] : e, NS = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, R3 = (e) => e, Vm = (e, t = R3) => {
  let n = T3;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, T3 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], I3 = {
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
function O3(e) {
  const t = {};
  let n = 0;
  if (En(e, (r, o) => {
    I3[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function MS(e) {
  const t = O3(e);
  if (t) {
    const n = {
      to: t
    };
    return En(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ke({}, e);
}
function ps(e) {
  return e = vt(e), W.arr(e) ? e.map(ps) : $c(e) ? $n.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function N3(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Fp(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function M3(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function D3(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const L3 = {
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
}, Ru = 1.70158, xa = Ru * 1.525, Rv = Ru + 1, Tv = 2 * Math.PI / 3, Iv = 2 * Math.PI / 4.5, wa = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, F3 = {
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
  easeInBack: (e) => Rv * e * e * e - Ru * e * e,
  easeOutBack: (e) => 1 + Rv * Math.pow(e - 1, 3) + Ru * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((xa + 1) * 2 * e - xa) / 2 : (Math.pow(2 * e - 2, 2) * ((xa + 1) * (e * 2 - 2) + xa) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Tv),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Tv) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Iv)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Iv) / 2 + 1,
  easeInBounce: (e) => 1 - wa(1 - e),
  easeOutBounce: wa,
  easeInOutBounce: (e) => e < 0.5 ? (1 - wa(1 - 2 * e)) / 2 : (1 + wa(2 * e - 1)) / 2
}, zp = Ke({}, L3.default, {
  mass: 1,
  damping: 1,
  easing: F3.linear,
  clamp: !1
});
class z3 {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, zp);
  }
}
function B3(e, t, n) {
  n && (n = Ke({}, n), Ov(n, t), t = Ke({}, n, t)), Ov(e, t), Object.assign(e, t);
  for (const l in zp)
    e[l] == null && (e[l] = zp[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function Ov(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const Nv = [];
class j3 {
  constructor() {
    this.changed = !1, this.values = Nv, this.toValues = null, this.fromValues = Nv, this.to = void 0, this.from = void 0, this.config = new z3(), this.immediate = !1;
  }
}
function DS(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, s) => {
    var a;
    let u, c, f = Il((a = n.cancel) != null ? a : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Il(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Il(v, t)), u = Zr(n.delay || 0, t), v ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
    }
    function d() {
      o.resumeQueue.add(g), o.timeouts.delete(c), c.cancel(), u = c.time - re.now();
    }
    function g() {
      u > 0 && !$n.skipAnimation ? (o.delayed = !0, c = re.setTimeout(h, u), o.pauseQueue.add(d), o.timeouts.add(c)) : h();
    }
    function h() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0);
      try {
        i.start(Ke({}, n, {
          callId: e,
          cancel: f
        }), l);
      } catch (v) {
        s(v);
      }
    }
  });
}
const Hm = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? li(e.get()) : t.every((n) => n.noop) ? LS(e.get()) : rn(e.get(), t.every((n) => n.finished)), LS = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), rn = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), li = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function FS(e, t, n, r) {
  const {
    callId: o,
    parentId: i,
    onRest: l
  } = t, {
    asyncTo: s,
    promise: a
  } = n;
  return !i && e === s && !t.reset ? a : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    const u = Vm(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && li(r) || o !== n.asyncId && rn(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new Mv(), x = new Dv();
      return (async () => {
        if ($n.skipAnimation)
          throw hs(n), x.result = rn(r, !1), f(x), x;
        g(y);
        const b = W.obj(w) ? Ke({}, w) : Ke({}, p, {
          to: w
        });
        b.parentId = o, En(u, (S, $) => {
          W.und(b[$]) && (b[$] = S);
        });
        const A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    };
    let v;
    if ($n.skipAnimation)
      return hs(n), rn(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = rn(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof Mv)
        v = w.result;
      else if (w instanceof Dv)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? a : void 0);
    }
    return W.fun(l) && re.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function hs(e, t) {
  Rl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class Mv extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class Dv extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const Bp = (e) => e instanceof Um;
let V3 = 1;
class Um extends ES {
  constructor(...t) {
    super(...t), this.id = V3++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  get() {
    const t = xn(this);
    return t && t.getValue();
  }
  to(...t) {
    return $n.to(this, t);
  }
  interpolate(...t) {
    return v3(), $n.to(this, t);
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
    cs(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || kc.sort(this), cs(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const mo = Symbol.for("SpringPhase"), zS = 1, jp = 2, Vp = 4, jf = (e) => (e[mo] & zS) > 0, sr = (e) => (e[mo] & jp) > 0, Zi = (e) => (e[mo] & Vp) > 0, Lv = (e, t) => t ? e[mo] |= jp | zS : e[mo] &= ~jp, Fv = (e, t) => t ? e[mo] |= Vp : e[mo] &= ~Vp;
class H3 extends Um {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new j3(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !W.und(t) || !W.und(n)) {
      const r = W.obj(t) ? Ke({}, t) : Ke({}, n, {
        from: t
      });
      W.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(sr(this) || this._state.asyncTo) || Zi(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    const t = xn(this);
    return t instanceof Ni ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return jf(this);
  }
  get isAnimating() {
    return sr(this);
  }
  get isPaused() {
    return Zi(this);
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
    const s = Ac(o.to);
    !s && Ft(o.to) && (l = At(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == ki ? 1 : s ? s[f].lastPosition : l[f];
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
            const x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3)), b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !W.und(A), $ = w == d ? c.v0 > 0 : w < d;
            let E, P = !1;
            const R = 1, T = Math.ceil(t / R);
            for (let O = 0; O < T && (E = Math.abs(y) > b, !(!E && (g = Math.abs(d - h) <= x, g))); ++O) {
              S && (P = h == d || h > d == $, P && (y = -y * A, h = d));
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
      s && !s[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    const a = xn(this), u = a.getValue();
    if (n) {
      const c = vt(o.to);
      (u !== c || r) && !i.decay ? (a.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop();
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
    if (sr(this)) {
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
    return W.und(t) ? (r = this.queue || [], this.queue = []) : r = [W.obj(t) ? t : Ke({}, n, {
      to: t
    })], Promise.all(r.map((o) => this._update(o))).then((o) => Hm(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), hs(this._state, t && this._lastCallId), re.batchedUpdates(() => this._stop(n, t)), this;
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
    r = W.obj(r) ? r[n] : r, (r == null || Fp(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return jf(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), W.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ke({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, Vm(r, (a, u) => /^on/.test(u) ? OS(a, o) : a)), Bv(this, r, "onProps"), el(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const s = this._state;
    return DS(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: s,
      actions: {
        pause: () => {
          Zi(this) || (Fv(this, !0), hl(s.pauseQueue), el(this, "onPause", rn(this, Ji(this, this.animation.to)), this));
        },
        resume: () => {
          Zi(this) && (Fv(this, !1), sr(this) && this._resume(), hl(s.resumeQueue), el(this, "onResume", rn(this, Ji(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((a) => {
      if (r.loop && a.finished && !(n && a.noop)) {
        const u = BS(r);
        if (u)
          return this._update(u, !0);
      }
      return a;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(li(this));
    const o = !W.und(t.to), i = !W.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(li(this));
    const {
      key: l,
      defaultProps: s,
      animation: a
    } = this, {
      to: u,
      from: c
    } = a;
    let {
      to: f = u,
      from: d = c
    } = t;
    i && !o && (!n.default || W.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    const g = !On(d, c);
    g && (a.from = d), d = vt(d);
    const h = !On(f, u);
    h && this._focus(f);
    const v = Fp(n.to), {
      config: w
    } = a, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && B3(w, Zr(n.config, l), n.config !== s.config ? Zr(s.config, l) : void 0);
    let x = xn(this);
    if (!x || W.und(f))
      return r(rn(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Il(n.reset, l), A = b ? d : this.get(), S = ps(f), $ = W.num(S) || W.arr(S) || $c(S), E = !v && (!$ || Il(s.immediate || n.immediate, l));
    if (h) {
      const O = Dp(f);
      if (O !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let R = Ft(f), T = !1;
    if (!R) {
      const O = b || !jf(this) && g;
      (h || O) && (T = On(ps(A), S), R = !T), (!On(a.immediate, E) && !E || !On(w.decay, p) || !On(w.velocity, y)) && (R = !0);
    }
    if (T && sr(this) && (a.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || Ft(u)) && (a.values = x.getPayload(), a.toValues = Ft(f) ? null : P == ki ? [1] : At(S)), a.immediate != E && (a.immediate = E, !E && !b && this._set(u)), R)) {
      const {
        onRest: O
      } = a;
      he(W3, (z) => Bv(this, n, z));
      const D = rn(this, Ji(this, u));
      hl(this._pendingCalls, D), this._pendingCalls.add(r), a.changed && re.batchedUpdates(() => {
        a.changed = !b, O == null || O(D, this), b ? Zr(s.onRest, D) : a.onStart == null || a.onStart(D, this);
      });
    }
    b && this._set(A), v ? r(FS(n.to, n, this._state, this)) : R ? this._start() : sr(this) && !h ? this._pendingCalls.add(r) : r(LS(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (Cv(this) && this._detach(), n.to = t, Cv(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Ft(n) && (Oi(n, this), Bp(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Ft(t) && fs(t, this);
  }
  _set(t, n = !0) {
    const r = vt(t);
    if (!W.und(r)) {
      const o = xn(this);
      if (!o || !On(r, o.getValue())) {
        const i = Dp(r);
        !o || o.constructor != i ? Bm(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, el(this, "onStart", rn(this, Ji(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Zr(this.animation.onChange, t, this)), Zr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    xn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), sr(this) || (Lv(this, !0), Zi(this) || this._resume());
  }
  _resume() {
    $n.skipAnimation ? this.finish() : kc.start(this);
  }
  _stop(t, n) {
    if (sr(this)) {
      Lv(this, !1);
      const r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), cs(this, {
        type: "idle",
        parent: this
      });
      const o = n ? li(this.get()) : rn(this.get(), Ji(this, t != null ? t : r.to));
      hl(this._pendingCalls, o), r.changed && (r.changed = !1, el(this, "onRest", o, this));
    }
  }
}
function Ji(e, t) {
  const n = ps(t), r = ps(e.get());
  return On(r, n);
}
function BS(e, t = e.loop, n = e.to) {
  let r = Zr(t);
  if (r) {
    const o = r !== !0 && MS(r), i = (o || e).reverse, l = !o || o.reset;
    return ms(Ke({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || Fp(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function ms(e) {
  const {
    to: t,
    from: n
  } = e = MS(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && zv(t, r), W.obj(n) && zv(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function U3(e) {
  const t = ms(e);
  return W.und(t.default) && (t.default = Vm(t)), t;
}
function zv(e, t) {
  En(e, (n, r) => n != null && t.add(r));
}
const W3 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Bv(e, t, n) {
  e.animation[n] = t[n] !== NS(t, n) ? OS(t[n], e.key) : void 0;
}
function el(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const q3 = ["onStart", "onChange", "onRest"];
let Q3 = 1;
class G3 {
  constructor(t, n) {
    this.id = Q3++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(Ke({
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
    return t && this.queue.push(ms(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(ms) : this.queue = [], this._flush ? this._flush(this, n) : (WS(this, n), Hp(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      he(At(n), (o) => r[o].stop(!!t));
    } else
      hs(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  pause(t) {
    if (W.und(t))
      this.start({
        pause: !0
      });
    else {
      const n = this.springs;
      he(At(t), (r) => n[r].pause());
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
      he(At(t), (r) => n[r].resume());
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
    (o && !this._started || i && !this._started) && (this._started = !0, Rl(t, ([a, u]) => {
      u.value = this.get(), a(u, this, this._item);
    }));
    const l = !o && this._started, s = i || l && r.size ? this.get() : null;
    i && n.size && Rl(n, ([a, u]) => {
      u.value = s, a(u, this, this._item);
    }), l && (this._started = !1, Rl(r, ([a, u]) => {
      u.value = s, a(u, this, this._item);
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
function Hp(e, t) {
  return Promise.all(t.map((n) => jS(e, n))).then((n) => Hm(e, n));
}
async function jS(e, t, n) {
  const {
    keys: r,
    to: o,
    from: i,
    loop: l,
    onRest: s,
    onResolve: a
  } = t, u = W.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  const c = W.arr(o) || W.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(q3, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, hl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || NS(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(DS(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Op,
      resume: Op,
      start(v, w) {
        g ? (hs(f, e._lastAsyncId), w(li(e))) : (v.onRest = s, w(FS(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = Hm(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = BS(t, l, o);
    if (v)
      return WS(e, [v]), jS(e, v, !0);
  }
  return a && re.batchedUpdates(() => a(h, e, e.item)), h;
}
function jv(e, t) {
  const n = Ke({}, e.springs);
  return t && he(At(t), (r) => {
    W.und(r.keys) && (r = ms(r)), W.obj(r.to) || (r = Ke({}, r, {
      to: void 0
    })), US(n, r, (o) => HS(o));
  }), VS(e, n), n;
}
function VS(e, t) {
  En(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Oi(n, e));
  });
}
function HS(e, t) {
  const n = new H3();
  return n.key = e, t && Oi(n, t), n;
}
function US(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function WS(e, t) {
  he(t, (n) => {
    US(e.springs, n, (r) => HS(r, e));
  });
}
function K3(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Y3 = ["children"], _c = (e) => {
  let {
    children: t
  } = e, n = K3(e, Y3);
  const r = m.exports.useContext(Tu), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = b3(() => ({
    pause: o,
    immediate: i
  }), [o, i]);
  const {
    Provider: l
  } = Tu;
  return /* @__PURE__ */ B(l, {
    value: n,
    children: t
  });
}, Tu = X3(_c, {});
_c.Provider = Tu.Provider;
_c.Consumer = Tu.Consumer;
function X3(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const Z3 = () => {
  const e = [], t = function(o) {
    x3();
    const i = [];
    return he(e, (l, s) => {
      if (W.und(o))
        i.push(l.start());
      else {
        const a = n(o, l, s);
        a && i.push(l.start(a));
      }
    }), i;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    const o = e.indexOf(r);
    ~o && e.splice(o, 1);
  }, t.pause = function() {
    return he(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return he(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    he(e, (o) => o.set(r));
  }, t.start = function(r) {
    const o = [];
    return he(e, (i, l) => {
      if (W.und(r))
        o.push(i.start());
      else {
        const s = this._getProps(r, i, l);
        s && o.push(i.start(s));
      }
    }), o;
  }, t.stop = function() {
    return he(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return he(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  const n = function(o, i, l) {
    return W.fun(o) ? o(l, i) : o;
  };
  return t._getProps = n, t;
};
function J3(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? Z3() : void 0, []), i = m.exports.useRef(0), l = RS(), s = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = jv(p, y);
      return i.current > 0 && !s.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? Hp(p, y) : new Promise((A) => {
        VS(p, x), s.queue.push(() => {
          A(Hp(p, y));
        }), l();
      });
    }
  }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = $v(e) || 0;
  m.exports.useMemo(() => {
    he(a.current.slice(e, c), (p) => {
      M3(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = a.current[x] || (a.current[x] = new G3(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = U3(A));
    }
  }
  const d = a.current.map((p, y) => jv(p, u[y])), g = m.exports.useContext(_c), h = $v(g), v = g !== h && N3(g);
  zm(() => {
    i.current++, s.ctrls = a.current;
    const {
      queue: p
    } = s;
    p.length && (s.queue = [], he(p, (y) => y())), he(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: g
      });
      const b = u[x];
      b && (D3(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), TS(() => () => {
    he(s.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ke({}, p));
  return o ? [w, o] : w;
}
function e4(e, t) {
  const n = W.fun(e), [[r], o] = J3(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let Vv;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(Vv || (Vv = {}));
class t4 extends Um {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = us(...n);
    const r = this._get(), o = Dp(r);
    Bm(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    On(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Hv(this._active) && Vf(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(vt) : At(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !Hv(this._active) && (this.idle = !1, he(Ac(this), (t) => {
      t.done = !1;
    }), $n.skipAnimation ? (re.batchedUpdates(() => this.advance()), Vf(this)) : kc.start(this));
  }
  _attach() {
    let t = 1;
    he(At(this.source), (n) => {
      Ft(n) && Oi(n, this), Bp(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(At(this.source), (t) => {
      Ft(t) && fs(t, this);
    }), this._active.clear(), Vf(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (Bp(r) ? r.priority : 0) + 1), 0));
  }
}
function n4(e) {
  return e.idle !== !1;
}
function Hv(e) {
  return !e.size || Array.from(e).every(n4);
}
function Vf(e) {
  e.idle || (e.idle = !0, he(Ac(e), (t) => {
    t.done = !0;
  }), cs(e, {
    type: "idle",
    parent: e
  }));
}
$n.assign({
  createStringInterpolator: PS,
  to: (e, t) => new t4(e, t)
});
function Wm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const r4 = ["style", "children", "scrollTop", "scrollLeft"], qS = /^--/;
function o4(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !qS.test(e) && !(Ol.hasOwnProperty(e) && Ol[e]) ? t + "px" : ("" + t).trim();
}
const Uv = {};
function i4(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: s
  } = r, a = Wm(r, r4), u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : Uv[f] || (Uv[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = o4(f, o[f]);
      qS.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), s !== void 0 && (e.scrollLeft = s);
}
let Ol = {
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
const l4 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), s4 = ["Webkit", "Ms", "Moz", "O"];
Ol = Object.keys(Ol).reduce((e, t) => (s4.forEach((n) => e[l4(n, t)] = e[t]), e), Ol);
const a4 = ["x", "y", "z"], u4 = /^(matrix|translate|scale|rotate|skew)/, c4 = /^(translate)/, f4 = /^(rotate|skew)/, Hf = (e, t) => W.num(e) && e !== 0 ? e + t : e, Ua = (e, t) => W.arr(e) ? e.every((n) => Ua(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class d4 extends Pc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = Wm(t, a4);
    const l = [], s = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), s.push((a) => [`translate3d(${a.map((u) => Hf(u, "px")).join(",")})`, Ua(a, 0)])), En(i, (a, u) => {
      if (u === "transform")
        l.push([a || ""]), s.push((c) => [c, c === ""]);
      else if (u4.test(u)) {
        if (delete i[u], W.und(a))
          return;
        const c = c4.test(u) ? "px" : f4.test(u) ? "deg" : "";
        l.push(At(a)), s.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${Hf(h, c)})`, Ua(h, 0)] : (f) => [`${u}(${f.map((d) => Hf(d, c)).join(",")})`, Ua(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new p4(l, s)), super(i);
  }
}
class p4 extends ES {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return he(this.inputs, (r, o) => {
      const i = vt(r[0]), [l, s] = this.transforms[o](W.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && s;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && he(this.inputs, (n) => he(n, (r) => Ft(r) && Oi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => Ft(r) && fs(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), cs(this, t);
  }
}
const h4 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], m4 = ["scrollTop", "scrollLeft"];
$n.assign({
  batchedUpdates: hn.exports.unstable_batchedUpdates,
  createStringInterpolator: PS,
  colors: Z_
});
const g4 = _3(h4, {
  applyAnimatedValues: i4,
  createAnimatedStyle: (e) => new d4(e),
  getComponentProps: (e) => Wm(e, m4)
}), v4 = g4.animated;
function QS(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = QS(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Wv() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = QS(t)) && (r && (r += " "), r += n);
  return r;
}
function y4(e, t, { includes: n = [], ...r } = {}) {
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
var ke = "colors", ct = "sizes", X = "space", GS = { gap: X, gridGap: X, columnGap: X, gridColumnGap: X, rowGap: X, gridRowGap: X, inset: X, insetBlock: X, insetBlockEnd: X, insetBlockStart: X, insetInline: X, insetInlineEnd: X, insetInlineStart: X, margin: X, marginTop: X, marginRight: X, marginBottom: X, marginLeft: X, marginBlock: X, marginBlockEnd: X, marginBlockStart: X, marginInline: X, marginInlineEnd: X, marginInlineStart: X, padding: X, paddingTop: X, paddingRight: X, paddingBottom: X, paddingLeft: X, paddingBlock: X, paddingBlockEnd: X, paddingBlockStart: X, paddingInline: X, paddingInlineEnd: X, paddingInlineStart: X, top: X, right: X, bottom: X, left: X, scrollMargin: X, scrollMarginTop: X, scrollMarginRight: X, scrollMarginBottom: X, scrollMarginLeft: X, scrollMarginX: X, scrollMarginY: X, scrollMarginBlock: X, scrollMarginBlockEnd: X, scrollMarginBlockStart: X, scrollMarginInline: X, scrollMarginInlineEnd: X, scrollMarginInlineStart: X, scrollPadding: X, scrollPaddingTop: X, scrollPaddingRight: X, scrollPaddingBottom: X, scrollPaddingLeft: X, scrollPaddingX: X, scrollPaddingY: X, scrollPaddingBlock: X, scrollPaddingBlockEnd: X, scrollPaddingBlockStart: X, scrollPaddingInline: X, scrollPaddingInlineEnd: X, scrollPaddingInlineStart: X, fontSize: "fontSizes", background: ke, backgroundColor: ke, backgroundImage: ke, borderImage: ke, border: ke, borderBlock: ke, borderBlockEnd: ke, borderBlockStart: ke, borderBottom: ke, borderBottomColor: ke, borderColor: ke, borderInline: ke, borderInlineEnd: ke, borderInlineStart: ke, borderLeft: ke, borderLeftColor: ke, borderRight: ke, borderRightColor: ke, borderTop: ke, borderTopColor: ke, caretColor: ke, color: ke, columnRuleColor: ke, fill: ke, outline: ke, outlineColor: ke, stroke: ke, textDecorationColor: ke, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ct, minBlockSize: ct, maxBlockSize: ct, inlineSize: ct, minInlineSize: ct, maxInlineSize: ct, width: ct, minWidth: ct, maxWidth: ct, height: ct, minHeight: ct, maxHeight: ct, flexBasis: ct, gridTemplateColumns: ct, gridTemplateRows: ct, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, x4 = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Mi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, x4))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, io = Symbol.for("sxs.internal"), qm = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), qv = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: w4 } = Object.prototype, Up = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), b4 = /\s+(?![^()]*\))/, No = (e) => (t) => e(...typeof t == "string" ? String(t).split(b4) : [t]), Qv = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: No((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: No((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: No((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: No((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: No((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: No((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, Uf = /([\d.]+)([^]*)/, S4 = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, k4 = (e, t) => e in C4 && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${Up(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${Up(e)}:${r}fit-content`) + i) : String(t), C4 = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Gn = (e) => e ? e + "-" : "", KS = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, s) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Gn(t) + (s.includes("$") ? "" : Gn(n)) + s.replace(/\$/g, "-") : s) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), E4 = /\s*,\s*(?![^()]*\))/, $4 = Object.prototype.toString, Xo = (e, t, n, r, o) => {
  let i, l, s;
  const a = (u, c, f) => {
    let d, g;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === $4 && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in Qv) {
            const S = Qv[b];
            if (S !== s) {
              s = S, h(S(g)), s = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, $, E, P, R, T) => {
            const O = Uf.test($), D = 0.0625 * (O ? -1 : 1), [z, F] = O ? [P, $] : [$, P];
            return "(" + (E[0] === "=" ? "" : E[0] === ">" === O ? "max-" : "min-") + z + ":" + (E[0] !== "=" && E.length === 1 ? F.replace(Uf, (_, V, M) => Number(V) + D * (E === ">" ? 1 : -1) + M) : F) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + z + ":" + (R.length === 1 ? T.replace(Uf, (_, V, M) => Number(V) + D * (R === ">" ? -1 : 1) + M) : T) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], $ = y ? [...c] : S4(c, d.split(E4));
            i !== void 0 && o(Gv(...i)), i = void 0, a(g, $, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Gn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in A4 ? String(g) + "px" : String(g) : KS(k4(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${Up(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(Gv(...i)), i = void 0;
  };
  a(e, t, n);
}, Gv = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, A4 = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Kv = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), lo = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Kv(n % 52) + r;
  return Kv(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), ml = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], P4 = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, _4 = (e) => {
  let t;
  const n = () => {
    const { cssRules: o } = t.sheet;
    return [].map.call(o, (i, l) => {
      const { cssText: s } = i;
      let a = "";
      if (s.startsWith("--sxs"))
        return "";
      if (o[l - 1] && (a = o[l - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const u in t.rules)
          if (t.rules[u].group === i)
            return `--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;
        return i.cssRules.length ? `${a}${s}` : "";
      }
      return s;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: s, sheet: a } = t;
      if (!a.deleteRule) {
        for (; Object(Object(a.cssRules)[0]).type === 3; )
          a.cssRules.splice(0, 1);
        a.cssRules = [];
      }
      for (const u in s)
        delete s[u];
    }
    const o = Object(e).styleSheets || [];
    for (const s of o)
      if (P4(s)) {
        for (let a = 0, u = s.cssRules; u[a]; ++a) {
          const c = Object(u[a]);
          if (c.type !== 1)
            continue;
          const f = Object(u[a + 1]);
          if (f.type !== 4)
            continue;
          ++a;
          const { cssText: d } = c;
          if (!d.startsWith("--sxs"))
            continue;
          const g = d.slice(14, -3).trim().split(/\s+/), h = ml[g[0]];
          h && (t || (t = { sheet: s, reset: r, rules: {}, toString: n }), t.rules[h] = { group: f, index: a, cache: new Set(g) });
        }
        if (t)
          break;
      }
    if (!t) {
      const s = (a, u) => ({ type: u, cssRules: [], insertRule(c, f) {
        this.cssRules.splice(f, 0, s(c, { import: 3, undefined: 1 }[(c.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return a === "@media{}" ? `@media{${[].map.call(this.cssRules, (c) => c.cssText).join("")}}` : a;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : s("", "text/css"), rules: {}, reset: r, toString: n };
    }
    const { sheet: i, rules: l } = t;
    for (let s = ml.length - 1; s >= 0; --s) {
      const a = ml[s];
      if (!l[a]) {
        const u = ml[s + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${s}}`, c), l[a] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([s]) };
      }
      R4(l[a]);
    }
  };
  return r(), t;
}, R4 = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, tl = Symbol(), T4 = Mi(), Yv = (e, t) => T4(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[io]) {
        r.type == null && (r.type = o[io].type);
        for (const i of o[io].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(I4(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), O4(e, r, t);
}), I4 = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Gn(o.prefix)}c-${lo(r)}`, l = [], s = [], a = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    a[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = a, f = d, w4.call(c, f) || (a[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [v, w, !qv(w)];
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
      const v = [h, g, !qv(g)];
      s.push(v);
    }
  return [i, r, l, s, a, u];
}, O4 = (e, t, n) => {
  const [r, o, i, l] = N4(t.composers), s = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[tl].length; g++) {
        const [h, v] = d[tl][g];
        f.rules[h].apply(v);
      }
      return d[tl] = [], null;
    }
    return d[tl] = [], d.rules = {}, ml.forEach((g) => d.rules[g] = { apply: (h) => d[tl].push([g, h]) }), d;
  })(n) : null, a = (s || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || M4;
    const { css: d, ...g } = f, h = {};
    for (const p in i)
      if (delete g[p], p in f) {
        let y = f[p];
        typeof y == "object" && y ? h[p] = { "@initial": i[p], ...y } : (y = String(y), h[p] = y !== "undefined" || l.has(p) ? y : i[p]);
      } else
        h[p] = i[p];
    const v = /* @__PURE__ */ new Set([...o]);
    for (const [p, y, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), Xo(y, [`.${p}`], [], e, ($) => {
        a.styled.apply($);
      }));
      const A = Xv(x, h, e.media), S = Xv(b, h, e.media, !0);
      for (const $ of A)
        if ($ !== void 0)
          for (const [E, P, R] of $) {
            const T = `${p}-${lo(P)}-${E}`;
            v.add(T);
            const O = (R ? n.rules.resonevar : n.rules.onevar).cache, D = R ? a.resonevar : a.onevar;
            O.has(T) || (O.add(T), Xo(P, [`.${T}`], [], e, (z) => {
              D.apply(z);
            }));
          }
      for (const $ of S)
        if ($ !== void 0)
          for (const [E, P] of $) {
            const R = `${p}-${lo(P)}-${E}`;
            v.add(R), n.rules.allvar.cache.has(R) || (n.rules.allvar.cache.add(R), Xo(P, [`.${R}`], [], e, (T) => {
              a.allvar.apply(T);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${lo(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), Xo(d, [`.${p}`], [], e, (y) => {
        a.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = g.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: s };
  };
  return qm(c, { className: r, selector: u, [io]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, N4 = (e) => {
  let t = "";
  const n = [], r = {}, o = [];
  for (const [i, , , , l, s] of e) {
    t === "" && (t = i), n.push(i), o.push(...s);
    for (const a in l) {
      const u = l[a];
      (r[a] === void 0 || u !== "undefined" || s.includes(u)) && (r[a] = u);
    }
  }
  return [t, n, r, new Set(o)];
}, Xv = (e, t, n, r) => {
  const o = [];
  e:
    for (let [i, l, s] of e) {
      if (s)
        continue;
      let a, u = 0, c = !1;
      for (a in i) {
        const f = i[a];
        let d = t[a];
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
      (o[u] = o[u] || []).push([r ? "cv" : `${a}-${i[a]}`, l, c]);
    }
  return o;
}, M4 = {}, D4 = Mi(), L4 = (e, t) => D4(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = lo(o);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in o) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let s of [].concat(o["@import"]))
            s = s.includes('"') || s.includes("'") ? s : `"${s}"`, t.sheet.insertRule(`@import ${s};`, l++);
          delete o["@import"];
        }
        Xo(o, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return qm(r, { toString: r });
}), F4 = Mi(), z4 = (e, t) => F4(e, () => (n) => {
  const r = `${Gn(e.prefix)}k-${lo(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      Xo(n, [], [], e, (s) => i.push(s));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return qm(o, { get name() {
    return o();
  }, toString: o });
}), B4 = class {
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
}, j4 = Mi(), V4 = (e, t) => j4(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Gn(e.prefix)}t-${lo(r)}`}`, i = {}, l = [];
  for (const a in r) {
    i[a] = {};
    for (const u in r[a]) {
      const c = `--${Gn(e.prefix)}${a}-${u}`, f = KS(String(r[a][u]), e.prefix, a);
      i[a][u] = new B4(u, f, a, e.prefix), l.push(`${c}:${f}`);
    }
  }
  const s = () => {
    if (l.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const a = `${r === e.theme ? ":root," : ""}.${n}{${l.join(";")}}`;
      t.rules.themed.apply(a);
    }
    return n;
  };
  return { ...i, get className() {
    return s();
  }, selector: o, toString: s };
}), H4 = Mi(), U4 = Mi(), W4 = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = H4(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", s = typeof i.media == "object" && i.media || {}, a = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: s, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...GS }, utils: typeof i.utils == "object" && i.utils || {} }, f = _4(a), d = { css: Yv(c, f), globalCss: L4(c, f), keyframes: z4(c, f), createTheme: V4(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => U4(n, () => {
    const o = Yv(n, r);
    return (...i) => {
      const l = o(...i), s = l[io].type, a = Ve.forwardRef((u, c) => {
        const f = u && u.as || s, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? Ve.createElement(Ve.Fragment, null, Ve.createElement(f, d), Ve.createElement(g, null)) : Ve.createElement(f, d);
      });
      return a.className = l.className, a.displayName = `Styled.${s.displayName || s.name || s}`, a.selector = l.selector, a.toString = () => l.selector, a[io] = l[io], a;
    };
  }))(t), t;
};
function q4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gs(e, t) {
  return gs = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, gs(e, t);
}
function Q4(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gs(e, t);
}
function Wp(e) {
  return Wp = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Wp(e);
}
function G4(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function K4() {
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
function Wa(e, t, n) {
  return K4() ? Wa = Reflect.construct : Wa = function(o, i, l) {
    var s = [null];
    s.push.apply(s, i);
    var a = Function.bind.apply(o, s), u = new a();
    return l && gs(u, l.prototype), u;
  }, Wa.apply(null, arguments);
}
function qp(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return qp = function(r) {
    if (r === null || !G4(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Wa(r, arguments, Wp(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), gs(o, r);
  }, qp(e);
}
var wr = /* @__PURE__ */ function(e) {
  Q4(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, q4(r);
  }
  return t;
}(/* @__PURE__ */ qp(Error)), Y4 = /--[\S]*/g;
function X4(e, t) {
  if (!e || !e.match(Y4))
    throw new wr(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new wr(74);
}
function Wf(e) {
  return Math.round(e * 255);
}
function Z4(e, t, n) {
  return Wf(e) + "," + Wf(t) + "," + Wf(n);
}
function Zv(e, t, n, r) {
  if (r === void 0 && (r = Z4), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), s = 0, a = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, a = l) : o >= 1 && o < 2 ? (s = l, a = i) : o >= 2 && o < 3 ? (a = i, u = l) : o >= 3 && o < 4 ? (a = l, u = i) : o >= 4 && o < 5 ? (s = l, u = i) : o >= 5 && o < 6 && (s = i, u = l);
  var c = n - i / 2, f = s + c, d = a + c, g = u + c;
  return r(f, d, g);
}
var Jv = {
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
function J4(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Jv[t] ? "#" + Jv[t] : e;
}
var eR = /^#[a-fA-F0-9]{6}$/, tR = /^#[a-fA-F0-9]{8}$/, nR = /^#[a-fA-F0-9]{3}$/, rR = /^#[a-fA-F0-9]{4}$/, qf = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, oR = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, iR = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, lR = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function sR(e) {
  if (typeof e != "string")
    throw new wr(3);
  var t = J4(e);
  if (t.match(eR))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(tR)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(nR))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(rR)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r
    };
  }
  var o = qf.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = oR.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = iR.exec(t);
  if (l) {
    var s = parseInt("" + l[1], 10), a = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + Zv(s, a, u) + ")", f = qf.exec(c);
    if (!f)
      throw new wr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = lR.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + Zv(g, h, v) + ")", p = qf.exec(w);
    if (!p)
      throw new wr(4, t, w);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10),
      alpha: parseFloat("" + d[4])
    };
  }
  throw new wr(5);
}
var aR = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, ey = aR;
function Mo(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ty(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return ey("#" + Mo(e) + Mo(t) + Mo(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return ey("#" + Mo(e.red) + Mo(e.green) + Mo(e.blue));
  throw new wr(6);
}
function uR(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = sR(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? ty(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? ty(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new wr(7);
}
const ny = {
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
}, ry = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, Qm = W4({
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
    space: ny,
    sizes: {
      ...ny,
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
      default: ry([
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
      colors: ry([
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
      backgroundColor: uR(X4("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: GS
}), cR = Qm.styled;
Qm.globalCss;
Qm.getCssText;
var oy = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Jt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, fR = (...e) => [...e].flat().filter(Boolean), YS = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? YS(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, iy = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function dR() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = XS(t)) && (r && (r += " "), r += n);
  return r;
}
function XS(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = XS(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Qp() {
  return Qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qp.apply(this, arguments);
}
var Gm = "-";
function pR(e) {
  var t = mR(e);
  function n(o) {
    var i = o.split(Gm);
    return i[0] === "" && i.length !== 1 && i.shift(), ZS(i, t) || hR(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function ZS(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? ZS(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(Gm);
    return (n = t.validators.find(function(s) {
      var a = s.validator;
      return a(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var ly = /^\[(.+)\]$/;
function hR(e) {
  if (ly.test(e)) {
    var t = ly.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function mR(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = vR(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], s = i[1];
    Gp(s, r, l, t);
  }), r;
}
function Gp(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : sy(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (gR(o)) {
        Gp(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(l) {
      var s = l[0], a = l[1];
      Gp(a, sy(t, s), n, r);
    });
  });
}
function sy(e, t) {
  var n = e;
  return t.split(Gm).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function gR(e) {
  return e.isThemeGetter;
}
function vR(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], i = o.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var a = s[0], u = s[1];
        return [t + a, u];
      })) : l;
    });
    return [r, i];
  }) : e;
}
function yR(e) {
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
      var s = n.get(l);
      if (s !== void 0)
        return s;
      if ((s = r.get(l)) !== void 0)
        return o(l, s), s;
    },
    set: function(l, s) {
      n.has(l) ? n.set(l, s) : o(l, s);
    }
  };
}
var JS = "!";
function xR(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, s = 0; s < r.length; s++) {
      var a = r[s];
      o === 0 && a === t[0] && (t.length === 1 || r.slice(s, s + t.length) === t) && (i.push(r.slice(l, s)), l = s + t.length), a === "[" ? o++ : a === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(JS), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function wR(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function bR(e) {
  return Qp({
    cache: yR(e.cacheSize),
    splitModifiers: xR(e)
  }, pR(e));
}
var SR = /\s+/;
function kR(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(SR).map(function(l) {
    var s = n(l), a = s.modifiers, u = s.hasImportantModifier, c = s.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = wR(a).join(":"), g = u ? d + JS : d;
    return {
      isTailwindClass: !0,
      modifierId: g,
      classGroupId: f,
      originalClassName: l
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, a = l.classGroupId, u = s + a;
    return i.has(u) ? !1 : (i.add(u), o(a).forEach(function(c) {
      return i.add(s + c);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Kp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = s;
  function s(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = bR(d), o = r.cache.get, i = r.cache.set, l = a, a(u);
  }
  function a(u) {
    var c = o(u);
    if (c)
      return c;
    var f = kR(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(dR.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ek = /^\[(?:([a-z-]+):)?(.+)\]$/i, CR = /^\d+\/\d+$/, ER = /* @__PURE__ */ new Set(["px", "full", "screen"]), $R = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, AR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, PR = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Zt(e) {
  return Nl(e) || ER.has(e) || CR.test(e) || Yr(e);
}
function Yr(e) {
  return ko(e, "length", OR);
}
function _R(e) {
  return ko(e, "size", tk);
}
function RR(e) {
  return ko(e, "position", tk);
}
function TR(e) {
  return ko(e, "url", NR);
}
function Qf(e) {
  return ko(e, "number", Nl);
}
function Nl(e) {
  return !Number.isNaN(Number(e));
}
function nl(e) {
  return ay(e) || ko(e, "number", ay);
}
function Be(e) {
  return ek.test(e);
}
function rl() {
  return !0;
}
function ar(e) {
  return $R.test(e);
}
function IR(e) {
  return ko(e, "", MR);
}
function ko(e, t, n) {
  var r = ek.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function OR(e) {
  return AR.test(e);
}
function tk() {
  return !1;
}
function NR(e) {
  return e.startsWith("url(");
}
function ay(e) {
  return Number.isInteger(Number(e));
}
function MR(e) {
  return PR.test(e);
}
function Yp() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), s = _e("borderWidth"), a = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), $ = _e("translate"), E = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, R = function() {
    return ["auto", t];
  }, T = function() {
    return ["", Zt];
  }, O = function() {
    return ["auto", Nl, Be];
  }, D = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, V = function() {
    return ["", "0", Be];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [Nl, Qf];
  }, N = function() {
    return [Nl, Be];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [rl],
      spacing: [Zt],
      blur: ["none", "", ar, Yr],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ar, Yr],
      borderSpacing: [t],
      borderWidth: T(),
      contrast: I(),
      grayscale: V(),
      hueRotate: N(),
      invert: V(),
      gap: [t],
      gradientColorStops: [e],
      inset: R(),
      margin: R(),
      opacity: I(),
      padding: [t],
      saturate: I(),
      scale: I(),
      sepia: V(),
      skew: N(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", Be]
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
        object: [].concat(D(), [Be])
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
        overscroll: E()
      }],
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      "overscroll-y": [{
        "overscroll-y": E()
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
        z: ["auto", nl]
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
        flex: ["1", "auto", "initial", "none", Be]
      }],
      grow: [{
        grow: V()
      }],
      shrink: [{
        shrink: V()
      }],
      order: [{
        order: ["first", "last", "none", nl]
      }],
      "grid-cols": [{
        "grid-cols": [rl]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [nl]
        }, Be]
      }],
      "col-start": [{
        "col-start": O()
      }],
      "col-end": [{
        "col-end": O()
      }],
      "grid-rows": [{
        "grid-rows": [rl]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [nl]
        }, Be]
      }],
      "row-start": [{
        "row-start": O()
      }],
      "row-end": [{
        "row-end": O()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Be]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Be]
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
        "min-w": ["min", "max", "fit", Zt]
      }],
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ar]
        }, ar, Yr]
      }],
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      "min-h": [{
        "min-h": ["min", "max", "fit", Zt]
      }],
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", ar, Yr]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qf]
      }],
      "font-family": [{
        font: [rl]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Zt]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", Be]
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
        decoration: ["auto", "from-font", Zt]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", Zt]
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
        content: ["none", Be]
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
        bg: [].concat(D(), [RR])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", _R]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, TR]
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
        border: [s]
      }],
      "border-w-x": [{
        "border-x": [s]
      }],
      "border-w-y": [{
        "border-y": [s]
      }],
      "border-w-t": [{
        "border-t": [s]
      }],
      "border-w-r": [{
        "border-r": [s]
      }],
      "border-w-b": [{
        "border-b": [s]
      }],
      "border-w-l": [{
        "border-l": [s]
      }],
      "border-opacity": [{
        "border-opacity": [w]
      }],
      "border-style": [{
        border: [].concat(z(), ["hidden"])
      }],
      "divide-x": [{
        "divide-x": [s]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [s]
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
        "outline-offset": [Zt]
      }],
      "outline-w": [{
        outline: [Zt]
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
        "ring-offset": [Zt]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", ar, IR]
      }],
      "shadow-color": [{
        shadow: [rl]
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
        contrast: [a]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", ar, Be]
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
        "backdrop-contrast": [a]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Be]
      }],
      duration: [{
        duration: N()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", Be]
      }],
      delay: [{
        delay: N()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Be]
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
        rotate: [nl, Be]
      }],
      "translate-x": [{
        "translate-x": [$]
      }],
      "translate-y": [{
        "translate-y": [$]
      }],
      "skew-x": [{
        "skew-x": [A]
      }],
      "skew-y": [{
        "skew-y": [A]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Be]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: ["appearance-none"],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Be]
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
        "will-change": ["auto", "scroll", "contents", "transform", Be]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [Zt, Qf]
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
var DR = /* @__PURE__ */ Kp(Yp);
function LR(e, t) {
  for (var n in t)
    nk(e, n, t[n]);
  return e;
}
var FR = Object.prototype.hasOwnProperty, zR = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function nk(e, t, n) {
  if (!FR.call(e, t) || zR.has(typeof n) || n === null) {
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
      nk(e[t], r, n[r]);
  }
}
function BR(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Kp.apply(void 0, [Yp, e].concat(n)) : Kp.apply(void 0, [function() {
    return LR(Yp(), e);
  }].concat(n));
}
var Iu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), ol = (...e) => (t = {}) => t.twMerge ? (Jt(t.twMergeConfig) ? DR : BR(t.twMergeConfig))(Iu(e)) : Iu(e), uy = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Iu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, jR = { twMerge: !0, twMergeConfig: {} }, VR = (e, t = jR) => {
  var n, r, o, i, l;
  let { slots: s = {}, variants: a = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Iu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = YS(a, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = Jt(s) ? {} : { base: e == null ? void 0 : e.base, ...s }, v = Jt((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : uy((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, Jt(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (Jt(d) && Jt(s) && Jt((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return ol(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (z, F, _ = [], V) => {
      let M = _;
      if (typeof F == "string")
        M.push(iy(F).split(" ").map((I) => `${z}:${I}`));
      else if (Array.isArray(F))
        M.push(F.flatMap((I) => `${z}:${I}`));
      else if (typeof F == "object" && typeof V == "string") {
        let I = F == null ? void 0 : F[V];
        if (I && typeof I == "string") {
          let N = iy(I);
          M[V] = M[V] ? [...M[V], ...N.split(" ").map((k) => `${z}:${k}`)] : N.split(" ").map((k) => `${z}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (M[V] = I.flatMap((N) => `${z}:${N}`));
      }
      return M;
    }, $ = (z, F = d, _ = null) => {
      let V = F == null ? void 0 : F[z];
      if (typeof V != "object" || Jt(V))
        return null;
      let M = y == null ? void 0 : y[z], I = g == null ? void 0 : g[z], N = [];
      if (M === null)
        return null;
      let k = oy(M);
      typeof k == "object" && (N = Object.keys(k).reduce((J, ne) => {
        let ue = k[ne], ee = V == null ? void 0 : V[ue];
        return ne === "initial" ? (I = ue, J) : S(ne, ee, J, _);
      }, []));
      let C = V[k] || V[oy(I)];
      return typeof N == "object" && typeof _ == "string" && N[_] ? uy(N, C) : N.length > 0 ? [C, ...N] : C;
    }, E = () => d ? Object.keys(d).map((z) => $(z, d)) : null, P = (z) => !d || typeof d != "object" ? null : Object.keys(d).map((F) => {
      let _ = $(F, d, z);
      return z === "base" && typeof _ == "string" ? _ : _ && _[z];
    }).filter(Boolean), R = y && Object.fromEntries(Object.entries(y).filter(([, z]) => z !== void 0)), T = (z = []) => z == null ? void 0 : z.filter(({ class: F, className: _, ...V }) => Object.entries(V).every(([M, I]) => {
      var N;
      let k = typeof (y == null ? void 0 : y[M]) == "object" ? (N = y[M]) == null ? void 0 : N.initial : {}, C = { ...g, ...k, ...R };
      return Array.isArray(I) ? I.includes(C[M]) : C[M] === I;
    })).flatMap(({ class: F, className: _ }) => [F, _]), O = () => {
      var z;
      let F = T(u), _ = T((z = e == null ? void 0 : e.extend) == null ? void 0 : z.compoundVariants);
      return fR(_, F);
    }, D = () => {
      let z = O();
      return Array.isArray(z) ? z.reduce((F, _) => (typeof _ == "string" && (F.base = ol(F.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([V, M]) => {
        F[V] = ol(F[V], M)(t);
      }), F), {}) : z;
    };
    if (!Jt(s) || !Jt((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let z = (A = D()) != null ? A : [];
      return { ...typeof v == "object" && !Jt(v) ? Object.keys(v).reduce((F, _) => (F[_] = (V) => ol(v[_], P(_), z == null ? void 0 : z[_], V == null ? void 0 : V.class, V == null ? void 0 : V.className)(t), F), {}) : {} };
    }
    return ol(f, E(), O(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const HR = VR({
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
}), UR = cR("div", {
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
}), WR = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, Km = Ve.forwardRef(({
  style: e,
  className: t,
  prefix: n,
  size: r,
  css: o,
  ghost: i = !1,
  light: l = !1,
  ...s
}, a) => {
  const u = m.exports.useRef(null), [c, f] = m.exports.useState(!1), [d, g] = m.exports.useState(s.defaultValue), h = (A) => {
    var S;
    g(A.target.value), (S = s == null ? void 0 : s.onChange) == null || S.call(s, A);
  }, v = "value" in s, w = m.exports.useMemo(() => v ? s.value : d, [v, d, s.value]);
  m.exports.useImperativeHandle(a, () => u.current);
  const p = e4({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: WR
  });
  y4(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = HR({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ pe(UR, {
    style: e,
    className: Wv("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ B("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && Ve.createElement(v4.div, {
      className: Wv("mayumi-input-effect", x()),
      style: p
    }), /* @__PURE__ */ B("input", {
      ...s,
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
Km.displayName = "input";
function qR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      n.hasOwnProperty(r) && (e[r] = n[r]);
  }
  return e;
}
function Xp(e, t) {
  return Array(t + 1).join(e);
}
function QR(e) {
  return e.replace(/^\n*/, "");
}
function GR(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; )
    t--;
  return e.substring(0, t);
}
var KR = [
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
function Ym(e) {
  return Xm(e, KR);
}
var rk = [
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
function ok(e) {
  return Xm(e, rk);
}
function YR(e) {
  return lk(e, rk);
}
var ik = [
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
function XR(e) {
  return Xm(e, ik);
}
function ZR(e) {
  return lk(e, ik);
}
function Xm(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function lk(e, t) {
  return e.getElementsByTagName && t.some(function(n) {
    return e.getElementsByTagName(n).length;
  });
}
var st = {};
st.paragraph = {
  filter: "p",
  replacement: function(e) {
    return `

` + e + `

`;
  }
};
st.lineBreak = {
  filter: "br",
  replacement: function(e, t, n) {
    return n.br + `
`;
  }
};
st.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(e, t, n) {
    var r = Number(t.nodeName.charAt(1));
    if (n.headingStyle === "setext" && r < 3) {
      var o = Xp(r === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + o + `

`;
    } else
      return `

` + Xp("#", r) + " " + e + `

`;
  }
};
st.blockquote = {
  filter: "blockquote",
  replacement: function(e) {
    return e = e.replace(/^\n+|\n+$/g, ""), e = e.replace(/^/gm, "> "), `

` + e + `

`;
  }
};
st.list = {
  filter: ["ul", "ol"],
  replacement: function(e, t) {
    var n = t.parentNode;
    return n.nodeName === "LI" && n.lastElementChild === t ? `
` + e : `

` + e + `

`;
  }
};
st.listItem = {
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
st.indentedCodeBlock = {
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
st.fencedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, n) {
    for (var r = t.firstChild.getAttribute("class") || "", o = (r.match(/language-(\S+)/) || [null, ""])[1], i = t.firstChild.textContent, l = n.fence.charAt(0), s = 3, a = new RegExp("^" + l + "{3,}", "gm"), u; u = a.exec(i); )
      u[0].length >= s && (s = u[0].length + 1);
    var c = Xp(l, s);
    return `

` + c + o + `
` + i.replace(/\n$/, "") + `
` + c + `

`;
  }
};
st.horizontalRule = {
  filter: "hr",
  replacement: function(e, t, n) {
    return `

` + n.hr + `

`;
  }
};
st.inlineLink = {
  filter: function(e, t) {
    return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t) {
    var n = t.getAttribute("href"), r = Ou(t.getAttribute("title"));
    return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")";
  }
};
st.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, n) {
    var r = t.getAttribute("href"), o = Ou(t.getAttribute("title"));
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
        var s = this.references.length + 1;
        i = "[" + e + "][" + s + "]", l = "[" + s + "]: " + r + o;
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
st.emphasis = {
  filter: ["em", "i"],
  replacement: function(e, t, n) {
    return e.trim() ? n.emDelimiter + e + n.emDelimiter : "";
  }
};
st.strong = {
  filter: ["strong", "b"],
  replacement: function(e, t, n) {
    return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : "";
  }
};
st.code = {
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
st.image = {
  filter: "img",
  replacement: function(e, t) {
    var n = Ou(t.getAttribute("alt")), r = t.getAttribute("src") || "", o = Ou(t.getAttribute("title")), i = o ? ' "' + o + '"' : "";
    return r ? "![" + n + "](" + r + i + ")" : "";
  }
};
function Ou(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function sk(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules)
    this.array.push(e.rules[t]);
}
sk.prototype = {
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
    return (t = Gf(this.array, e, this.options)) || (t = Gf(this._keep, e, this.options)) || (t = Gf(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++)
      e(this.array[t], t);
  }
};
function Gf(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    if (JR(o, t, n))
      return o;
  }
}
function JR(e, t, n) {
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
function eT(e) {
  var t = e.element, n = e.isBlock, r = e.isVoid, o = e.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!t.firstChild || o(t))) {
    for (var i = null, l = !1, s = null, a = cy(s, t, o); a !== t; ) {
      if (a.nodeType === 3 || a.nodeType === 4) {
        var u = a.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !l && u[0] === " " && (u = u.substr(1)), !u) {
          a = Kf(a);
          continue;
        }
        a.data = u, i = a;
      } else if (a.nodeType === 1)
        n(a) || a.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, l = !1) : r(a) || o(a) ? (i = null, l = !0) : i && (l = !1);
      else {
        a = Kf(a);
        continue;
      }
      var c = cy(s, a, o);
      s = a, a = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || Kf(i));
  }
}
function Kf(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function cy(e, t, n) {
  return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var ak = typeof window < "u" ? window : {};
function tT() {
  var e = ak.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function nT() {
  var e = function() {
  };
  return rT() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function rT() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
var oT = tT() ? ak.DOMParser : nT();
function iT(e, t) {
  var n;
  if (typeof e == "string") {
    var r = lT().parseFromString(
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = e.cloneNode(!0);
  return eT({
    element: n,
    isBlock: Ym,
    isVoid: ok,
    isPre: t.preformattedCode ? sT : null
  }), n;
}
var Yf;
function lT() {
  return Yf = Yf || new oT(), Yf;
}
function sT(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function aT(e, t) {
  return e.isBlock = Ym(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = uT(e), e.flankingWhitespace = cT(e, t), e;
}
function uT(e) {
  return !ok(e) && !XR(e) && /^\s*$/i.test(e.textContent) && !YR(e) && !ZR(e);
}
function cT(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return { leading: "", trailing: "" };
  var n = fT(e.textContent);
  return n.leadingAscii && fy("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && fy("right", e, t) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function fT(e) {
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
function fy(e, t, n) {
  var r, o, i;
  return e === "left" ? (r = t.previousSibling, o = / $/) : (r = t.nextSibling, o = /^ /), r && (r.nodeType === 3 ? i = o.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? i = !1 : r.nodeType === 1 && !Ym(r) && (i = o.test(r.textContent))), i;
}
var dT = Array.prototype.reduce, pT = [
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
function Nu(e) {
  if (!(this instanceof Nu))
    return new Nu(e);
  var t = {
    rules: st,
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
  this.options = qR({}, t, e), this.rules = new sk(this.options);
}
Nu.prototype = {
  turndown: function(e) {
    if (!gT(e))
      throw new TypeError(
        e + " is not a string, or an element/document/fragment node."
      );
    if (e === "")
      return "";
    var t = uk.call(this, new iT(e, this.options));
    return hT.call(this, t);
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
    return pT.reduce(function(t, n) {
      return t.replace(n[0], n[1]);
    }, e);
  }
};
function uk(e) {
  var t = this;
  return dT.call(e.childNodes, function(n, r) {
    r = new aT(r, t.options);
    var o = "";
    return r.nodeType === 3 ? o = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (o = mT.call(t, r)), ck(n, o);
  }, "");
}
function hT(e) {
  var t = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (e = ck(e, n.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function mT(e) {
  var t = this.rules.forNode(e), n = uk.call(this, e), r = e.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function ck(e, t) {
  var n = GR(e), r = QR(t), o = Math.max(e.length - n.length, t.length - r.length), i = `

`.substring(0, o);
  return n + i + r;
}
function gT(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
const dy = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, u) => {
    const c = typeof a == "function" ? a(t) : a;
    if (!Object.is(c, t)) {
      const f = t;
      t = (u != null ? u : typeof c != "object") ? c : Object.assign({}, t, c), n.forEach((d) => d(t, f));
    }
  }, o = () => t, s = { setState: r, getState: o, subscribe: (a) => (n.add(a), () => n.delete(a)), destroy: () => {
    ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } };
  return t = e(r, o, s), s;
}, vT = (e) => e ? dy(e) : dy;
var fk = { exports: {} }, dk = {}, pk = { exports: {} }, hk = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci = m.exports;
function yT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var xT = typeof Object.is == "function" ? Object.is : yT, wT = Ci.useState, bT = Ci.useEffect, ST = Ci.useLayoutEffect, kT = Ci.useDebugValue;
function CT(e, t) {
  var n = t(), r = wT({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return ST(function() {
    o.value = n, o.getSnapshot = t, Xf(o) && i({ inst: o });
  }, [e, n, t]), bT(function() {
    return Xf(o) && i({ inst: o }), e(function() {
      Xf(o) && i({ inst: o });
    });
  }, [e]), kT(n), n;
}
function Xf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xT(e, n);
  } catch {
    return !0;
  }
}
function ET(e, t) {
  return t();
}
var $T = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? ET : CT;
hk.useSyncExternalStore = Ci.useSyncExternalStore !== void 0 ? Ci.useSyncExternalStore : $T;
(function(e) {
  e.exports = hk;
})(pk);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = m.exports, AT = pk.exports;
function PT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var _T = typeof Object.is == "function" ? Object.is : PT, RT = AT.useSyncExternalStore, TT = Rc.useRef, IT = Rc.useEffect, OT = Rc.useMemo, NT = Rc.useDebugValue;
dk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = TT(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = OT(function() {
    function a(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, g))
            return f = h;
        }
        return f = g;
      }
      if (h = f, _T(c, g))
        return h;
      var v = r(g);
      return o !== void 0 && o(h, v) ? h : (c = g, f = v);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return a(t());
    }, d === null ? void 0 : function() {
      return a(d());
    }];
  }, [t, n, r, o]);
  var s = RT(e, i[0], i[1]);
  return IT(function() {
    l.hasValue = !0, l.value = s;
  }, [s]), NT(s), s;
};
(function(e) {
  e.exports = dk;
})(fk);
const MT = /* @__PURE__ */ Sh(fk.exports), { useSyncExternalStoreWithSelector: DT } = MT;
function LT(e, t = e.getState, n) {
  const r = DT(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return m.exports.useDebugValue(r), r;
}
const py = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? vT(e) : e, n = (r, o) => LT(t, r, o);
  return Object.assign(n, t), n;
}, Zm = (e) => e ? py(e) : py;
function Jm(e) {
  let t;
  try {
    t = e();
  } catch {
    return;
  }
  return {
    getItem: (r) => {
      var o;
      const i = (s) => s === null ? null : JSON.parse(s), l = (o = t.getItem(r)) != null ? o : null;
      return l instanceof Promise ? l.then(i) : i(l);
    },
    setItem: (r, o) => t.setItem(r, JSON.stringify(o)),
    removeItem: (r) => t.removeItem(r)
  };
}
const vs = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return vs(r)(n);
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
        return vs(r)(n);
      }
    };
  }
}, FT = (e, t) => (n, r, o) => {
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
  const s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
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
  const c = vs(i.serialize), f = () => {
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
    l = !1, s.forEach((y) => y(r()));
    const p = ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, r())) || void 0;
    return vs(u.getItem.bind(u))(i.name).then((y) => {
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
      p == null || p(h, void 0), l = !0, a.forEach((y) => y(h));
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
    onHydrate: (w) => (s.add(w), () => {
      s.delete(w);
    }),
    onFinishHydration: (w) => (a.add(w), () => {
      a.delete(w);
    })
  }, v(), h || g;
}, zT = (e, t) => (n, r, o) => {
  let i = {
    storage: Jm(() => localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, w) => ({
      ...w,
      ...v
    }),
    ...t
  }, l = !1;
  const s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
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
    l = !1, s.forEach((p) => p(r()));
    const w = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, r())) || void 0;
    return vs(u.getItem.bind(u))(i.name).then((p) => {
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
      w == null || w(g, void 0), l = !0, a.forEach((p) => p(g));
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
    onHydrate: (v) => (s.add(v), () => {
      s.delete(v);
    }),
    onFinishHydration: (v) => (a.add(v), () => {
      a.delete(v);
    })
  }, h(), g || d;
}, BT = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), FT(e, t)) : zT(e, t), mk = BT;
function jT(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var i = e[t];
    i && (o[r++] = i);
  }
  return o;
}
const VT = {
  getItem: async (e) => (await it.storage.local.get(e))[e],
  setItem(e, t) {
    return it.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.local.remove(e);
  }
}, HT = {
  getItem: async (e) => (await it.storage.sync.get(e))[e],
  setItem(e, t) {
    return it.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.sync.remove(e);
  }
}, UT = (e, t) => (n, r, o) => {
  const i = (l, s, a) => {
    const u = a === void 0 ? { type: "anonymous" } : typeof a == "string" ? { type: a } : a;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, s), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, eg = UT, gk = () => ({
  set: async (e, t) => {
    await it.storage.local.set({ [e]: t }).then(() => {
      console.log("Value is set to", t);
    });
  },
  get: async (e) => {
    const t = await it.storage.local.get(e);
    return console.log("Value currently is", t), t[e];
  },
  getAll: async () => {
    const e = await it.storage.local.get();
    return console.log("All local storage is", e), e;
  },
  clear: async () => {
    await it.storage.local.clear();
  }
}), WT = gk(), qT = async (e) => {
  let t = [], n = e;
  const r = 0;
  do {
    if (!n)
      break;
    const o = await WT.get(n);
    if (!o)
      break;
    const i = o.role || "user";
    t = t.slice(0, r).concat([
      {
        role: i,
        text: o.text,
        name: o.name
      },
      ...t.slice(r)
    ]), n = o.parentMessageId;
  } while (!0);
  return t;
}, ys = Zm()(
  eg(
    mk(
      (e) => ({
        conventions: {},
        upsertConventions: async (t, n) => {
          const r = await qT(n.id);
          return e((o) => ({
            conventions: {
              ...o.conventions,
              [t]: jT(r)
            }
          }), !1, "upsertConventions");
        },
        clear: () => e({ conventions: {} })
      }),
      {
        name: "aiflow-message-store",
        storage: Jm(() => VT)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), Mu = Zm()(
  eg(
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
), vk = Zm()(
  eg(
    mk(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: Jm(() => HT) }
    ),
    {
      name: "user-config-store"
    }
  )
), Zf = "ask-chatgpt", si = "ask-chatgpt-with", so = "translate-with", ai = "summary-with", Zp = "ask-chatgpt-with-page", Du = "config-page", Lu = "translate-with-page", Xr = "home-page", QT = "OPENAI_API_KEY", hy = "options", my = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
function GT(e) {
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
function Jp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function KT(e) {
  const t = e + "CollectionProvider", [n, r] = yo(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (g) => {
    const { scope: h, children: v } = g, w = Ve.useRef(null), p = Ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Ve.createElement(o, {
      scope: h,
      itemMap: p,
      collectionRef: w
    }, v);
  }, s = e + "CollectionSlot", a = /* @__PURE__ */ Ve.forwardRef((g, h) => {
    const { scope: v, children: w } = g, p = i(s, v), y = xe(h, p.collectionRef);
    return /* @__PURE__ */ Ve.createElement(bi, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ Ve.forwardRef((g, h) => {
    const { scope: v, children: w, ...p } = g, y = Ve.useRef(null), x = xe(h, y), b = i(u, v);
    return Ve.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ Ve.createElement(bi, {
      [c]: "",
      ref: x
    }, w);
  });
  function d(g) {
    const h = i(e + "CollectionConsumer", g);
    return Ve.useCallback(() => {
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
      Slot: a,
      ItemSlot: f
    },
    d,
    r
  ];
}
const YT = /* @__PURE__ */ m.exports.createContext(void 0);
function yk(e) {
  const t = m.exports.useContext(YT);
  return e || t || "ltr";
}
function XT(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ZT = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(Ue.span, G({}, e, {
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
}))), JT = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], eI = [
  " ",
  "Enter"
], Tc = "Select", [Ic, Oc, tI] = KT(Tc), [Di, KF] = yo(Tc, [
  tI,
  mc
]), tg = mc(), [nI, Co] = Di(Tc), [rI, oI] = Di(Tc), iI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: s, onValueChange: a, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = tg(t), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = yk(u), [S = !1, $] = is({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [E, P] = is({
    prop: l,
    defaultProp: s,
    onChange: a
  }), R = m.exports.useRef(null), T = v ? Boolean(v.closest("form")) : !0, [O, D] = m.exports.useState(/* @__PURE__ */ new Set()), z = Array.from(O).map(
    (F) => F.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Cb, h, /* @__PURE__ */ m.exports.createElement(nI, {
    required: g,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: Bn(),
    value: E,
    onValueChange: P,
    open: S,
    onOpenChange: $,
    dir: A,
    triggerPointerDownPosRef: R,
    disabled: d
  }, /* @__PURE__ */ m.exports.createElement(Ic.Provider, {
    scope: t
  }, /* @__PURE__ */ m.exports.createElement(rI, {
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
  }, n)), T ? /* @__PURE__ */ m.exports.createElement(bk, {
    key: z,
    "aria-hidden": !0,
    required: g,
    tabIndex: -1,
    name: c,
    autoComplete: f,
    value: E,
    onChange: (F) => P(F.target.value),
    disabled: d
  }, E === void 0 ? /* @__PURE__ */ m.exports.createElement("option", {
    value: ""
  }) : null, Array.from(O)) : null));
}, lI = "SelectTrigger", sI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = tg(n), l = Co(lI, n), s = l.disabled || r, a = xe(t, l.onTriggerChange), u = Oc(n), [c, f, d] = Sk((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = kk(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    s || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement(Eb, G({
    asChild: !0
  }, i), /* @__PURE__ */ m.exports.createElement(Ue.button, G({
    type: "button",
    role: "combobox",
    "aria-controls": l.contentId,
    "aria-expanded": l.open,
    "aria-required": l.required,
    "aria-autocomplete": "none",
    dir: l.dir,
    "data-state": l.open ? "open" : "closed",
    disabled: s,
    "data-disabled": s ? "" : void 0,
    "data-placeholder": l.value === void 0 ? "" : void 0
  }, o, {
    ref: a,
    onClick: ae(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: ae(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (g(), l.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: ae(o.onKeyDown, (h) => {
      const v = c.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && JT.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), aI = "SelectValue", uI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...s } = e, a = Co(aI, n), { onValueNodeHasChildrenChange: u } = a, c = i !== void 0, f = xe(t, a.onValueNodeChange);
  return Ze(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ m.exports.createElement(Ue.span, G({}, s, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), a.value === void 0 && l !== void 0 ? l : i);
}), cI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(Ue.span, G({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), fI = (e) => /* @__PURE__ */ m.exports.createElement(Ab, G({
  asChild: !0
}, e)), Ei = "SelectContent", dI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Co(Ei, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Ze(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ hn.exports.createPortal(/* @__PURE__ */ m.exports.createElement(xk, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(Ic.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(pI, G({}, e, {
    ref: t
  }));
}), Nn = 10, [xk, Eo] = Di(Ei), pI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    side: s,
    sideOffset: a,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: g,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: w,
    ...p
  } = e, y = Co(Ei, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), $ = xe(
    t,
    (Q) => b(Q)
  ), [E, P] = m.exports.useState(null), [R, T] = m.exports.useState(null), O = Oc(n), [D, z] = m.exports.useState(!1), F = m.exports.useRef(!1);
  m.exports.useEffect(() => {
    if (x)
      return gc(x);
  }, [
    x
  ]), dc();
  const _ = m.exports.useCallback((Q) => {
    const [ie, ...we] = O().map(
      (se) => se.ref.current
    ), [ce] = we.slice(-1), de = document.activeElement;
    for (const se of Q)
      if (se === de || (se == null || se.scrollIntoView({
        block: "nearest"
      }), se === ie && A && (A.scrollTop = 0), se === ce && A && (A.scrollTop = A.scrollHeight), se == null || se.focus(), document.activeElement !== de))
        return;
  }, [
    O,
    A
  ]), V = m.exports.useCallback(
    () => _([
      E,
      x
    ]),
    [
      _,
      E,
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
      const ie = (ce) => {
        var de, se, at, ut;
        Q = {
          x: Math.abs(Math.round(ce.pageX) - ((de = (se = I.current) === null || se === void 0 ? void 0 : se.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ce.pageY) - ((at = (ut = I.current) === null || ut === void 0 ? void 0 : ut.y) !== null && at !== void 0 ? at : 0))
        };
      }, we = (ce) => {
        Q.x <= 10 && Q.y <= 10 ? ce.preventDefault() : x.contains(ce.target) || M(!1), document.removeEventListener("pointermove", ie), I.current = null;
      };
      return I.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", we, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", we, {
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
  const [N, k] = Sk((Q) => {
    const ie = O().filter(
      (de) => !de.disabled
    ), we = ie.find(
      (de) => de.ref.current === document.activeElement
    ), ce = kk(ie, Q, we);
    ce && setTimeout(
      () => ce.ref.current.focus()
    );
  }), C = m.exports.useCallback((Q, ie, we) => {
    const ce = !F.current && !we;
    (y.value !== void 0 && y.value === ie || ce) && (P(Q), ce && (F.current = !0));
  }, [
    y.value
  ]), J = m.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), ne = m.exports.useCallback((Q, ie, we) => {
    const ce = !F.current && !we;
    (y.value !== void 0 && y.value === ie || ce) && T(Q);
  }, [
    y.value
  ]), ue = r === "popper" ? gy : hI, ee = ue === gy ? {
    side: s,
    sideOffset: a,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: g,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: w
  } : {};
  return /* @__PURE__ */ m.exports.createElement(xk, {
    scope: n,
    content: x,
    viewport: A,
    onViewportChange: S,
    itemRefCallback: C,
    selectedItem: E,
    onItemLeave: J,
    itemTextRefCallback: ne,
    focusSelectedItem: V,
    selectedItemText: R,
    position: r,
    isPositioned: D,
    searchRef: N
  }, /* @__PURE__ */ m.exports.createElement(jb, {
    as: bi,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Sm, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (Q) => {
      Q.preventDefault();
    },
    onUnmountAutoFocus: ae(o, (Q) => {
      var ie;
      (ie = y.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), Q.preventDefault();
    })
  }, /* @__PURE__ */ m.exports.createElement(bm, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (Q) => Q.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(ue, G({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (Q) => Q.preventDefault()
  }, p, ee, {
    onPlaced: () => z(!0),
    ref: $,
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      ...p.style
    },
    onKeyDown: ae(p.onKeyDown, (Q) => {
      const ie = Q.ctrlKey || Q.altKey || Q.metaKey;
      if (Q.key === "Tab" && Q.preventDefault(), !ie && Q.key.length === 1 && k(Q.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Q.key)) {
        let ce = O().filter(
          (de) => !de.disabled
        ).map(
          (de) => de.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Q.key) && (ce = ce.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Q.key)) {
          const de = Q.target, se = ce.indexOf(de);
          ce = ce.slice(se + 1);
        }
        setTimeout(
          () => _(ce)
        ), Q.preventDefault();
      }
    })
  }))))));
}), hI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Co(Ei, n), l = Eo(Ei, n), [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = xe(
    t,
    ($) => c($)
  ), d = Oc(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && w && p) {
      const $ = i.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), R = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const de = R.left - E.left, se = P.left - de, at = $.left - se, ut = $.width + at, jr = Math.max(ut, E.width), er = window.innerWidth - Nn, tr = Jp(se, [
          Nn,
          er - jr
        ]);
        s.style.minWidth = ut + "px", s.style.left = tr + "px";
      } else {
        const de = E.right - R.right, se = window.innerWidth - P.right - de, at = window.innerWidth - $.right - se, ut = $.width + at, jr = Math.max(ut, E.width), er = window.innerWidth - Nn, tr = Jp(se, [
          Nn,
          er - jr
        ]);
        s.style.minWidth = ut + "px", s.style.right = tr + "px";
      }
      const T = d(), O = window.innerHeight - Nn * 2, D = v.scrollHeight, z = window.getComputedStyle(u), F = parseInt(z.borderTopWidth, 10), _ = parseInt(z.paddingTop, 10), V = parseInt(z.borderBottomWidth, 10), M = parseInt(z.paddingBottom, 10), I = F + _ + D + M + V, N = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = $.top + $.height / 2 - Nn, ue = O - ne, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ie = F + _ + Q, we = I - ie;
      if (ie <= ne) {
        const de = w === T[T.length - 1].ref.current;
        s.style.bottom = "0px";
        const se = u.clientHeight - v.offsetTop - v.offsetHeight, at = Math.max(ue, ee + (de ? J : 0) + se + V), ut = ie + at;
        s.style.height = ut + "px";
      } else {
        const de = w === T[0].ref.current;
        s.style.top = "0px";
        const at = Math.max(ne, F + v.offsetTop + (de ? C : 0) + ee) + we;
        s.style.height = at + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      s.style.margin = `${Nn}px 0`, s.style.minHeight = N + "px", s.style.maxHeight = O + "px", r == null || r(), requestAnimationFrame(
        () => g.current = !0
      );
    }
  }, [
    d,
    i.trigger,
    i.valueNode,
    s,
    u,
    v,
    w,
    p,
    i.dir,
    r
  ]);
  Ze(
    () => x(),
    [
      x
    ]
  );
  const [b, A] = m.exports.useState();
  Ze(() => {
    u && A(window.getComputedStyle(u).zIndex);
  }, [
    u
  ]);
  const S = m.exports.useCallback(($) => {
    $ && h.current === !0 && (x(), y == null || y(), h.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ m.exports.createElement(mI, {
    scope: n,
    contentWrapper: s,
    shouldExpandOnScrollRef: g,
    onScrollButtonChange: S
  }, /* @__PURE__ */ m.exports.createElement("div", {
    ref: a,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: b
    }
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), gy = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Nn, ...i } = e, l = tg(n);
  return /* @__PURE__ */ m.exports.createElement($b, G({}, l, i, {
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
}), [mI, ng] = Di(Ei, {}), vy = "SelectViewport", gI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Eo(vy, n), i = ng(vy, n), l = xe(t, o.onViewportChange), s = m.exports.useRef(0);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Ic.Slot, {
    scope: n
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({
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
    onScroll: ae(r.onScroll, (a) => {
      const u = a.currentTarget, { contentWrapper: c, shouldExpandOnScrollRef: f } = i;
      if (f != null && f.current && c) {
        const d = Math.abs(s.current - u.scrollTop);
        if (d > 0) {
          const g = window.innerHeight - Nn * 2, h = parseFloat(c.style.minHeight), v = parseFloat(c.style.height), w = Math.max(h, v);
          if (w < g) {
            const p = w + d, y = Math.min(g, p), x = p - y;
            c.style.height = y + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = u.scrollTop;
    })
  }))));
}), vI = "SelectGroup";
Di(vI);
const eh = "SelectItem", [yI, xI] = Di(eh), wI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, s = Co(eh, n), a = Eo(eh, n), u = s.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = xe(t, (p) => {
    var y;
    return (y = a.itemRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, r, o);
  }), v = Bn(), w = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ m.exports.createElement(yI, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ic.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: c
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({
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
    onFocus: ae(
      l.onFocus,
      () => g(!0)
    ),
    onBlur: ae(
      l.onBlur,
      () => g(!1)
    ),
    onPointerUp: ae(l.onPointerUp, w),
    onPointerMove: ae(l.onPointerMove, (p) => {
      if (o) {
        var y;
        (y = a.onItemLeave) === null || y === void 0 || y.call(a);
      } else
        p.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ae(l.onPointerLeave, (p) => {
      if (p.currentTarget === document.activeElement) {
        var y;
        (y = a.onItemLeave) === null || y === void 0 || y.call(a);
      }
    }),
    onKeyDown: ae(l.onKeyDown, (p) => {
      var y;
      ((y = a.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (eI.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), ba = "SelectItemText", bI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = Co(ba, n), s = Eo(ba, n), a = xI(ba, n), u = oI(ba, n), [c, f] = m.exports.useState(null), d = xe(
    t,
    (p) => f(p),
    a.onItemTextChange,
    (p) => {
      var y;
      return (y = s.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(s, p, a.value, a.disabled);
    }
  ), g = c == null ? void 0 : c.textContent, h = m.exports.useMemo(
    () => /* @__PURE__ */ m.exports.createElement("option", {
      key: a.value,
      value: a.value,
      disabled: a.disabled
    }, g),
    [
      a.disabled,
      a.value,
      g
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
  return Ze(() => (v(h), () => w(h)), [
    v,
    w,
    h
  ]), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Ue.span, G({
    id: a.textId
  }, i, {
    ref: d
  })), a.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ hn.exports.createPortal(i.children, l.valueNode) : null);
}), yy = "SelectScrollUpButton", SI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Eo(yy, e.__scopeSelect), r = ng(yy, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = xe(t, r.onScrollButtonChange);
  return Ze(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const c = a.scrollTop > 0;
        i(c);
      };
      var s = u;
      const a = n.viewport;
      return u(), a.addEventListener("scroll", u), () => a.removeEventListener("scroll", u);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), o ? /* @__PURE__ */ m.exports.createElement(wk, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop - a.offsetHeight);
    }
  })) : null;
}), xy = "SelectScrollDownButton", kI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Eo(xy, e.__scopeSelect), r = ng(xy, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = xe(t, r.onScrollButtonChange);
  return Ze(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const c = a.scrollHeight - a.clientHeight, f = Math.ceil(a.scrollTop) < c;
        i(f);
      };
      var s = u;
      const a = n.viewport;
      return u(), a.addEventListener("scroll", u), () => a.removeEventListener("scroll", u);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), o ? /* @__PURE__ */ m.exports.createElement(wk, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: a } = n;
      s && a && (s.scrollTop = s.scrollTop + a.offsetHeight);
    }
  })) : null;
}), wk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Eo("SelectScrollButton", n), l = m.exports.useRef(null), s = Oc(n), a = m.exports.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return m.exports.useEffect(() => () => a(), [
    a
  ]), Ze(() => {
    var u;
    const c = s().find(
      (f) => f.ref.current === document.activeElement
    );
    c == null || (u = c.ref.current) === null || u === void 0 || u.scrollIntoView({
      block: "nearest"
    });
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    "aria-hidden": !0
  }, o, {
    ref: t,
    style: {
      flexShrink: 0,
      ...o.style
    },
    onPointerMove: ae(o.onPointerMove, () => {
      var u;
      (u = i.onItemLeave) === null || u === void 0 || u.call(i), l.current === null && (l.current = window.setInterval(r, 50));
    }),
    onPointerLeave: ae(o.onPointerLeave, () => {
      a();
    })
  }));
}), bk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = xe(t, o), l = XT(n);
  return m.exports.useEffect(() => {
    const s = o.current, a = window.HTMLSelectElement.prototype, c = Object.getOwnPropertyDescriptor(a, "value").set;
    if (l !== n && c) {
      const f = new Event("change", {
        bubbles: !0
      });
      c.call(s, n), s.dispatchEvent(f);
    }
  }, [
    l,
    n
  ]), /* @__PURE__ */ m.exports.createElement(ZT, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", G({}, r, {
    ref: i,
    defaultValue: n
  })));
});
bk.displayName = "BubbleSelect";
function Sk(e) {
  const t = ze(e), n = m.exports.useRef(""), r = m.exports.useRef(0), o = m.exports.useCallback((l) => {
    const s = n.current + l;
    t(s), function a(u) {
      n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(
        () => a(""),
        1e3
      ));
    }(s);
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
function kk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = CI(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const a = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function CI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const EI = iI, $I = sI, AI = uI, PI = cI, _I = fI, RI = dI, TI = gI, II = wI, OI = bI, NI = SI, MI = kI;
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
function $i() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ck(e)) && (r && (r += " "), r += t);
  return r;
}
const DI = {
  int: "Afrikaans",
  native: "Afrikaans"
}, LI = {
  int: "Albanian",
  native: "Shqip"
}, FI = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, zI = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, BI = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, jI = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, VI = {
  int: "Basque",
  native: "Euskara"
}, HI = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, UI = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, WI = {
  int: "Bosnian",
  native: "Bosanski"
}, qI = {
  int: "Breton",
  native: "Brezhoneg"
}, QI = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, GI = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, KI = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, YI = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, XI = {
  int: "Danish",
  native: "Dansk"
}, ZI = {
  int: "Dutch",
  native: "Nederlands"
}, JI = {
  int: "English",
  native: "English"
}, e6 = {
  int: "Esperanto",
  native: "Esperanto"
}, t6 = {
  int: "Estonian",
  native: "Eesti"
}, n6 = {
  int: "Faroese",
  native: "F\xF8royskt"
}, r6 = {
  int: "Finnish",
  native: "Suomi"
}, o6 = {
  int: "French",
  native: "Fran\xE7ais"
}, i6 = {
  int: "Galician",
  native: "Galego"
}, l6 = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, s6 = {
  int: "German",
  native: "Deutsch"
}, a6 = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, u6 = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, c6 = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, f6 = {
  int: "Hausa",
  native: "Hrvatski"
}, d6 = {
  int: "Hausa",
  native: "Hausa"
}, p6 = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, h6 = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, m6 = {
  int: "Hungarian",
  native: "Magyar"
}, g6 = {
  int: "Icelandic",
  native: "\xCDslenska"
}, v6 = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, y6 = {
  int: "Irish",
  native: "Gaeilge"
}, x6 = {
  int: "Italian",
  native: "Italiano"
}, w6 = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, b6 = {
  int: "Javanese",
  native: "Basa Jawa"
}, S6 = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, k6 = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, C6 = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, E6 = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, $6 = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, A6 = {
  int: "Latin",
  native: "lingua latina"
}, P6 = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, _6 = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, R6 = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, T6 = {
  int: "Malagasy",
  native: "Malagasy"
}, I6 = {
  int: "Malay",
  native: "Bahasa Melayu"
}, O6 = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, N6 = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, M6 = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, D6 = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, L6 = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, F6 = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, z6 = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, B6 = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, j6 = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, V6 = {
  int: "Polish",
  native: "Polski"
}, H6 = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, U6 = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, W6 = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, q6 = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, Q6 = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, G6 = {
  int: "Sardinian",
  native: "Sardu"
}, K6 = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, Y6 = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, X6 = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, Z6 = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, J6 = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, eO = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, tO = {
  int: "Somali",
  native: "Af-Soomaali"
}, nO = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, rO = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, oO = {
  int: "Swahili",
  native: "Kiswahili"
}, iO = {
  int: "Swedish",
  native: "Svenska"
}, lO = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, sO = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, aO = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, uO = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, cO = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, fO = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, dO = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, pO = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, hO = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, mO = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, gO = {
  int: "Uzbek",
  native: "O'zbek"
}, vO = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, yO = {
  int: "Visayan",
  native: "Bisaya"
}, xO = {
  int: "Welsh",
  native: "Cymraeg"
}, wO = {
  int: "West Frisian",
  native: "Frysk"
}, wy = {
  af: DI,
  sq: LI,
  ar: FI,
  hy: zI,
  as: BI,
  az: jI,
  eu: VI,
  be: HI,
  bn: UI,
  bs: WI,
  br: qI,
  bg: QI,
  my: GI,
  ca: KI,
  cs: YI,
  da: XI,
  nl: ZI,
  en: JI,
  eo: e6,
  et: t6,
  fo: n6,
  fi: r6,
  fr: o6,
  gl: i6,
  ka: l6,
  de: s6,
  el: a6,
  gn: u6,
  gu: c6,
  hr: f6,
  ha: d6,
  he: p6,
  hi: h6,
  hu: m6,
  is: g6,
  id: v6,
  ga: y6,
  it: x6,
  ja: w6,
  jv: b6,
  kn: S6,
  kk: k6,
  km: C6,
  ko: E6,
  ku: $6,
  la: A6,
  lv: P6,
  lt: _6,
  mk: R6,
  mg: T6,
  ms: I6,
  ml: O6,
  mr: N6,
  mn: M6,
  ne: D6,
  nb: L6,
  nn: F6,
  or: z6,
  ps: B6,
  fa: j6,
  pl: V6,
  pt: H6,
  pa: U6,
  ro: W6,
  ru: q6,
  rw: Q6,
  sc: G6,
  sr: K6,
  sz: Y6,
  zh: X6,
  si: Z6,
  sk: J6,
  sl: eO,
  so: tO,
  cb: nO,
  es: rO,
  sw: oO,
  sv: iO,
  sy: lO,
  tl: sO,
  tg: aO,
  tz: uO,
  ta: cO,
  te: fO,
  th: dO,
  tr: pO,
  uk: hO,
  ur: mO,
  uz: gO,
  vi: vO,
  cx: yO,
  cy: xO,
  fy: wO
}, Ek = Ve.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ B(II, {
  className: $i("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ B(OI, {
    children: e
  })
}));
Ek.displayName = "SelectItem";
const bO = (e) => {
  var n;
  const t = vk();
  return /* @__PURE__ */ pe(EI, {
    value: (n = t[hy]) == null ? void 0 : n[so].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [hy]: {
          [so]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ pe($I, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ B(AI, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ B(PI, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ B("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ B(_I, {
      container: e.container.current,
      children: /* @__PURE__ */ pe(RI, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ B(NI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ B(TI, {
          className: "p-[5px]",
          children: Object.keys(wy).map((r) => {
            const o = wy[r];
            return /* @__PURE__ */ B(Ek, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ B(MI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
}, SO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), kO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" }));
function CO(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const $k = "ScrollArea", [Ak, YF] = yo($k), [EO, Pn] = Ak($k), $O = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [s, a] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [v, w] = m.exports.useState(null), [p, y] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [$, E] = m.exports.useState(!1), P = xe(
    t,
    (T) => a(T)
  ), R = yk(o);
  return /* @__PURE__ */ m.exports.createElement(EO, {
    scope: n,
    type: r,
    dir: R,
    scrollHideDelay: i,
    scrollArea: s,
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
    scrollbarYEnabled: $,
    onScrollbarYEnabledChange: E,
    onCornerWidthChange: y,
    onCornerHeightChange: b
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({
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
}), AO = "ScrollAreaViewport", PO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = Pn(AO, n), l = m.exports.useRef(null), s = xe(t, l, i.onViewportChange);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: s,
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
}), Zn = "ScrollAreaScrollbar", _O = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, s = e.orientation === "horizontal";
  return m.exports.useEffect(() => (s ? i(!0) : l(!0), () => {
    s ? i(!1) : l(!1);
  }), [
    s,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(RO, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement(TO, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement(Pk, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(rg, G({}, r, {
    ref: t
  })) : null;
}), RO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), [i, l] = m.exports.useState(!1);
  return m.exports.useEffect(() => {
    const s = o.scrollArea;
    let a = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(a), l(!0);
      }, c = () => {
        a = window.setTimeout(
          () => l(!1),
          o.scrollHideDelay
        );
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", c), () => {
        window.clearTimeout(a), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", c);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || i
  }, /* @__PURE__ */ m.exports.createElement(Pk, G({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), TO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = Mc(
    () => a("SCROLL_END"),
    100
  ), [s, a] = CO("hidden", {
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
    if (s === "idle") {
      const u = window.setTimeout(
        () => a("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(u);
    }
  }, [
    s,
    o.scrollHideDelay,
    a
  ]), m.exports.useEffect(() => {
    const u = o.viewport, c = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[c];
      const d = () => {
        const g = u[c];
        f !== g && (a("SCROLL"), l()), f = g;
      };
      return u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [
    o.viewport,
    i,
    a,
    l
  ]), /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || s !== "hidden"
  }, /* @__PURE__ */ m.exports.createElement(rg, G({
    "data-state": s === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: ae(
      e.onPointerEnter,
      () => a("POINTER_ENTER")
    ),
    onPointerLeave: ae(
      e.onPointerLeave,
      () => a("POINTER_LEAVE")
    )
  })));
}), Pk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Pn(Zn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), s = e.orientation === "horizontal", a = Mc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(s ? u : c);
    }
  }, 10);
  return zu(n.viewport, a), zu(n.content, a), /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(rg, G({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), rg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Pn(Zn, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [s, a] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = Tk(s.viewport, s.content), c = {
    ...r,
    sizes: s,
    onSizesChange: a,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return LO(d, l.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(IO, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = by(d, s, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(OO, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = by(d, s);
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
}), IO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Pn(Zn, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = xe(t, a, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Rk, G({
    "data-orientation": "horizontal"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Nc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
    onDragScroll: (c) => e.onDragScroll(c.x),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollLeft + c.deltaX;
        e.onWheelScroll(d), Ok(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: a.current.clientWidth,
          paddingStart: Fu(l.paddingLeft),
          paddingEnd: Fu(l.paddingRight)
        }
      });
    }
  }));
}), OO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Pn(Zn, e.__scopeScrollArea), [l, s] = m.exports.useState(), a = m.exports.useRef(null), u = xe(t, a, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Rk, G({
    "data-orientation": "vertical"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Nc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
    onDragScroll: (c) => e.onDragScroll(c.y),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollTop + c.deltaY;
        e.onWheelScroll(d), Ok(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      a.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: a.current.clientHeight,
          paddingStart: Fu(l.paddingTop),
          paddingEnd: Fu(l.paddingBottom)
        }
      });
    }
  }));
}), [NO, _k] = Ak(Zn), Rk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: s, onThumbPositionChange: a, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = Pn(Zn, n), [h, v] = m.exports.useState(null), w = xe(
    t,
    (P) => v(P)
  ), p = m.exports.useRef(null), y = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = ze(c), S = ze(a), $ = Mc(f, 10);
  function E(P) {
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
  ]), zu(h, $), zu(g.content, $), /* @__PURE__ */ m.exports.createElement(NO, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: ze(i),
    onThumbPointerUp: ze(l),
    onThumbPositionChange: S,
    onThumbPointerDown: ze(s)
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, d, {
    ref: w,
    style: {
      position: "absolute",
      ...d.style
    },
    onPointerDown: ae(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), p.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", E(P));
    }),
    onPointerMove: ae(e.onPointerMove, E),
    onPointerUp: ae(e.onPointerUp, (P) => {
      const R = P.target;
      R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), th = "ScrollAreaThumb", MO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _k(th, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(DO, G({
    ref: t
  }, r)));
}), DO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = Pn(th, n), l = _k(th, n), { onThumbPositionChange: s } = l, a = xe(
    t,
    (f) => l.onThumbChange(f)
  ), u = m.exports.useRef(), c = Mc(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return m.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const g = FO(f, s);
          u.current = g, s();
        }
      };
      return s(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    s
  ]), /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    "data-state": l.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: a,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ae(e.onPointerDownCapture, (f) => {
      const g = f.target.getBoundingClientRect(), h = f.clientX - g.left, v = f.clientY - g.top;
      l.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: ae(e.onPointerUp, l.onThumbPointerUp)
  }));
});
function Fu(e) {
  return e ? parseInt(e, 10) : 0;
}
function Tk(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Nc(e) {
  const t = Tk(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function LO(e, t, n, r = "ltr") {
  const o = Nc(n), i = o / 2, l = t || i, s = o - l, a = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return Ik([
    a,
    u
  ], f)(e);
}
function by(e, t, n = "ltr") {
  const r = Nc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, s = i - r, a = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = Jp(e, a);
  return Ik([
    0,
    l
  ], [
    0,
    s
  ])(u);
}
function Ik(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ok(e, t) {
  return e > 0 && e < t;
}
const FO = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const i = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, l = n.left !== i.left, s = n.top !== i.top;
    (l || s) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Mc(e, t) {
  const n = ze(e), r = m.exports.useRef(0);
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
function zu(e, t) {
  const n = ze(t);
  Ze(() => {
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
const zO = $O, BO = PO, Sy = _O, ky = MO, Cy = (e) => typeof e == "object" && e != null && e.nodeType === 1, Ey = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Jf = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Ey(n.overflowY, t) || Ey(n.overflowX, t) || ((r) => {
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
}, Sa = (e, t, n, r, o, i, l, s) => i < e && l > t || i > e && l < t ? 0 : i <= e && s <= n || l >= t && s >= n ? i - e - r : l > t && s < n || i < e && s > n ? l - t + o : 0, jO = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, $y = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: s, inline: a, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (O) => O !== u;
  if (!Cy(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Cy(h) && f(h); ) {
    if (h = jO(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && Jf(h) && !Jf(document.documentElement) || h != null && Jf(h, c) && g.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: $, left: E } = e.getBoundingClientRect();
  let P = s === "start" || s === "nearest" ? A : s === "end" ? $ : A + x / 2, R = a === "center" ? E + b / 2 : a === "end" ? S : E;
  const T = [];
  for (let O = 0; O < g.length; O++) {
    const D = g[O], { height: z, width: F, top: _, right: V, bottom: M, left: I } = D.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && E >= 0 && $ <= w && S <= v && A >= _ && $ <= M && E >= I && S <= V)
      return T;
    const N = getComputedStyle(D), k = parseInt(N.borderLeftWidth, 10), C = parseInt(N.borderTopWidth, 10), J = parseInt(N.borderRightWidth, 10), ne = parseInt(N.borderBottomWidth, 10);
    let ue = 0, ee = 0;
    const Q = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - k - J : 0, ie = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - C - ne : 0, we = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : F / D.offsetWidth : 0, ce = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : z / D.offsetHeight : 0;
    if (d === D)
      ue = s === "start" ? P : s === "end" ? P - w : s === "nearest" ? Sa(y, y + w, w, C, ne, y + P, y + P + x, x) : P - w / 2, ee = a === "start" ? R : a === "center" ? R - v / 2 : a === "end" ? R - v : Sa(p, p + v, v, k, J, p + R, p + R + b, b), ue = Math.max(0, ue + y), ee = Math.max(0, ee + p);
    else {
      ue = s === "start" ? P - _ - C : s === "end" ? P - M + ne + ie : s === "nearest" ? Sa(_, M, z, C, ne + ie, P, P + x, x) : P - (_ + z / 2) + ie / 2, ee = a === "start" ? R - I - k : a === "center" ? R - (I + F / 2) + Q / 2 : a === "end" ? R - V + J + Q : Sa(I, V, F, k, J + Q, R, R + b, b);
      const { scrollLeft: de, scrollTop: se } = D;
      ue = Math.max(0, Math.min(se + ue / ce, D.scrollHeight - z / ce + ie)), ee = Math.max(0, Math.min(de + ee / we, D.scrollWidth - F / we + Q)), P += se - ue, R += de - ee;
    }
    T.push({ el: D, top: ue, left: ee });
  }
  return T;
}, VO = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function HO(e, t) {
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
    return t.behavior($y(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of $y(e, VO(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function Ay(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Nk = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, qa = Object.prototype.hasOwnProperty, Mk = Object.prototype.toString, Py = Object.defineProperty, _y = Object.getOwnPropertyDescriptor, Ry = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Mk.call(t) === "[object Array]";
}, Ty = function(t) {
  if (!t || Mk.call(t) !== "[object Object]")
    return !1;
  var n = qa.call(t, "constructor"), r = t.constructor && t.constructor.prototype && qa.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || qa.call(t, o);
}, Iy = function(t, n) {
  Py && n.name === "__proto__" ? Py(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Oy = function(t, n) {
  if (n === "__proto__")
    if (qa.call(t, n)) {
      if (_y)
        return _y(t, n).value;
    } else
      return;
  return t[n];
}, Ny = function e() {
  var t, n, r, o, i, l, s = arguments[0], a = 1, u = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = Oy(s, n), o = Oy(t, n), s !== o && (c && o && (Ty(o) || (i = Ry(o))) ? (i ? (i = !1, l = r && Ry(r) ? r : []) : l = r && Ty(r) ? r : {}, Iy(s, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Iy(s, { name: n, newValue: o }));
  return s;
};
function nh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function UO() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...o) {
    let i = -1;
    const l = o.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    s(null, ...o);
    function s(a, ...u) {
      const c = e[++i];
      let f = -1;
      if (a) {
        l(a);
        return;
      }
      for (; ++f < o.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = o[f]);
      o = u, c ? WO(c, s)(...u) : l(null, ...u);
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
function WO(e, t) {
  let n;
  return r;
  function r(...l) {
    const s = e.length > l.length;
    let a;
    s && l.push(o);
    try {
      a = e.apply(this, l);
    } catch (u) {
      const c = u;
      if (s && n)
        throw c;
      return o(c);
    }
    s || (a instanceof Promise ? a.then(i, o) : a instanceof Error ? o(a) : i(a));
  }
  function o(l, ...s) {
    n || (n = !0, t(l, ...s));
  }
  function i(l) {
    o(null, l);
  }
}
function Ml(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? My(e.position) : "start" in e || "end" in e ? My(e) : "line" in e || "column" in e ? rh(e) : "";
}
function rh(e) {
  return Dy(e && e.line) + ":" + Dy(e && e.column);
}
function My(e) {
  return rh(e && e.start) + "-" + rh(e && e.end);
}
function Dy(e) {
  return e && typeof e == "number" ? e : 1;
}
class Gt extends Error {
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
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = Ml(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = o[0], this.ruleId = o[1], this.file, this.actual, this.expected, this.url, this.note;
  }
}
Gt.prototype.file = "";
Gt.prototype.name = "";
Gt.prototype.reason = "";
Gt.prototype.message = "";
Gt.prototype.stack = "";
Gt.prototype.fatal = null;
Gt.prototype.column = null;
Gt.prototype.line = null;
Gt.prototype.source = null;
Gt.prototype.ruleId = null;
Gt.prototype.position = null;
const yn = { basename: qO, dirname: QO, extname: GO, join: KO, sep: "/" };
function qO(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  js(e);
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
  let l = -1, s = t.length - 1;
  for (; o--; )
    if (e.charCodeAt(o) === 47) {
      if (i) {
        n = o + 1;
        break;
      }
    } else
      l < 0 && (i = !0, l = o + 1), s > -1 && (e.charCodeAt(o) === t.charCodeAt(s--) ? s < 0 && (r = o) : (s = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function QO(e) {
  if (js(e), e.length === 0)
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
function GO(e) {
  js(e);
  let t = e.length, n = -1, r = 0, o = -1, i = 0, l;
  for (; t--; ) {
    const s = e.charCodeAt(t);
    if (s === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), s === 46 ? o < 0 ? o = t : i !== 1 && (i = 1) : o > -1 && (i = -1);
  }
  return o < 0 || n < 0 || i === 0 || i === 1 && o === n - 1 && o === r + 1 ? "" : e.slice(o, n);
}
function KO(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    js(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : YO(n);
}
function YO(e) {
  js(e);
  const t = e.charCodeAt(0) === 47;
  let n = XO(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function XO(e, t) {
  let n = "", r = 0, o = -1, i = 0, l = -1, s, a;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      s = e.charCodeAt(l);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(o === l - 1 || i === 1))
        if (o !== l - 1 && i === 2) {
          if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              if (a = n.lastIndexOf("/"), a !== n.length - 1) {
                a < 0 ? (n = "", r = 0) : (n = n.slice(0, a), r = n.length - 1 - n.lastIndexOf("/")), o = l, i = 0;
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
      s === 46 && i > -1 ? i++ : i = -1;
  }
  return n;
}
function js(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const ZO = { cwd: JO };
function JO() {
  return "/";
}
function oh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function e7(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!oh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return t7(e);
}
function t7(e) {
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
const ed = ["history", "path", "basename", "stem", "extname", "dirname"];
class n7 {
  constructor(t) {
    let n;
    t ? typeof t == "string" || r7(t) ? n = { value: t } : oh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = ZO.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < ed.length; ) {
      const i = ed[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      ed.includes(o) || (this[o] = n[o]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    oh(t) && (t = e7(t)), nd(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Ly(this.basename, "dirname"), this.path = yn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? yn.basename(this.path) : void 0;
  }
  set basename(t) {
    nd(t, "basename"), td(t, "basename"), this.path = yn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? yn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (td(t, "extname"), Ly(this.dirname, "extname"), t) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = yn.join(this.dirname, this.stem + (t || ""));
  }
  get stem() {
    return typeof this.path == "string" ? yn.basename(this.path, this.extname) : void 0;
  }
  set stem(t) {
    nd(t, "stem"), td(t, "stem"), this.path = yn.join(this.dirname || "", t + (this.extname || ""));
  }
  toString(t) {
    return (this.value || "").toString(t || void 0);
  }
  message(t, n, r) {
    const o = new Gt(t, n, r);
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
function td(e, t) {
  if (e && e.includes(yn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function nd(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ly(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function r7(e) {
  return Nk(e);
}
const o7 = Lk().freeze(), Dk = {}.hasOwnProperty;
function Lk() {
  const e = UO(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = s, i.attachers = t, i.use = a, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const v = Lk();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(Ny(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (id("data", r), n[v] = w, i) : Dk.call(n, v) && n[v] || null : v ? (id("data", r), n = v, i) : n;
  }
  function s() {
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
  function a(v, ...w) {
    let p;
    if (id("use", r), v != null)
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
          const [$, ...E] = S;
          A($, ...E);
        } else
          x(S);
      else
        throw new TypeError("Expected usable value, not `" + S + "`");
    }
    function x(S) {
      b(S.plugins), S.settings && (p = Object.assign(p || {}, S.settings));
    }
    function b(S) {
      let $ = -1;
      if (S != null)
        if (Array.isArray(S))
          for (; ++$ < S.length; ) {
            const E = S[$];
            y(E);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + S + "`");
    }
    function A(S, $) {
      let E = -1, P;
      for (; ++E < t.length; )
        if (t[E][0] === S) {
          P = t[E];
          break;
        }
      P ? (nh(P[1]) && nh($) && ($ = Ny(!0, P[1], $)), P[1] = $) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = il(v), p = i.Parser;
    return rd("parse", p), Fy(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = il(w), y = i.Compiler;
    return od("stringify", y), zy(v), Fy(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (zy(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(y);
    y(null, p);
    function y(x, b) {
      e.run(v, il(w), A);
      function A(S, $, E) {
        $ = $ || v, S ? b(S) : x ? x($) : p(null, $, E);
      }
    }
  }
  function d(v, w) {
    let p, y;
    return i.run(v, w, x), By("runSync", "run", y), p;
    function x(b, A) {
      Ay(b), p = A, y = !0;
    }
  }
  function g(v, w) {
    if (i.freeze(), rd("process", i.Parser), od("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = il(v);
      i.run(i.parse(b), b, (S, $, E) => {
        if (S || !$ || !E)
          A(S);
        else {
          const P = i.stringify($, E);
          P == null || (s7(P) ? E.value = P : E.result = P), A(S, E);
        }
      });
      function A(S, $) {
        S || !$ ? x(S) : y ? y($) : w(null, $);
      }
    }
  }
  function h(v) {
    let w;
    i.freeze(), rd("processSync", i.Parser), od("processSync", i.Compiler);
    const p = il(v);
    return i.process(p, y), By("processSync", "process", w), p;
    function y(x) {
      w = !0, Ay(x);
    }
  }
}
function Fy(e, t) {
  return typeof e == "function" && e.prototype && (i7(e.prototype) || t in e.prototype);
}
function i7(e) {
  let t;
  for (t in e)
    if (Dk.call(e, t))
      return !0;
  return !1;
}
function rd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function od(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function id(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function zy(e) {
  if (!nh(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function By(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function il(e) {
  return l7(e) ? e : new n7(e);
}
function l7(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function s7(e) {
  return typeof e == "string" || Nk(e);
}
const a7 = {};
function u7(e, t) {
  const n = t || a7, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Fk(e, r, o);
}
function Fk(e, t, n) {
  if (c7(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return jy(e.children, t, n);
  }
  return Array.isArray(e) ? jy(e, t, n) : "";
}
function jy(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = Fk(e[o], t, n);
  return r.join("");
}
function c7(e) {
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
const Vy = {}.hasOwnProperty;
function zk(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    f7(t, e[n]);
  return t;
}
function f7(e, t) {
  let n;
  for (n in t) {
    const o = (Vy.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      Vy.call(o, l) || (o[l] = []);
      const s = i[l];
      d7(
        o[l],
        Array.isArray(s) ? s : s ? [s] : []
      );
    }
  }
}
function d7(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const p7 = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Vt = Br(/[A-Za-z]/), Bu = Br(/\d/), h7 = Br(/[\dA-Fa-f]/), dt = Br(/[\dA-Za-z]/), m7 = Br(/[!-/:-@[-`{-~]/), Hy = Br(/[#-'*+\--9=?A-Z^-~]/);
function xs(e) {
  return e !== null && (e < 32 || e === 127);
}
function De(e) {
  return e !== null && (e < 0 || e === 32);
}
function Z(e) {
  return e !== null && e < -2;
}
function ye(e) {
  return e === -2 || e === -1 || e === 32;
}
const Dc = Br(/\s/), Lc = Br(p7);
function Br(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function ve(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return l;
  function l(a) {
    return ye(a) ? (e.enter(n), s(a)) : t(a);
  }
  function s(a) {
    return ye(a) && i++ < o ? (e.consume(a), s) : (e.exit(n), t(a));
  }
}
const g7 = {
  tokenize: v7
};
function v7(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    o
  );
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ve(e, t, "linePrefix");
  }
  function o(s) {
    return e.enter("paragraph"), i(s);
  }
  function i(s) {
    const a = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = a), n = a, l(s);
  }
  function l(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return Z(s) ? (e.consume(s), e.exit("chunkText"), i) : (e.consume(s), l);
  }
}
const y7 = {
  tokenize: x7
}, Uy = {
  tokenize: w7
};
function x7(e) {
  const t = this, n = [];
  let r = 0, o, i, l;
  return s;
  function s(x) {
    if (r < n.length) {
      const b = n[r];
      return t.containerState = b[1], e.attempt(
        b[0].continuation,
        a,
        u
      )(x);
    }
    return u(x);
  }
  function a(x) {
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
      let $ = b;
      for (; $ < t.events.length; )
        t.events[$][1].end = Object.assign({}, S), $++;
      return Rt(
        t.events,
        A + 1,
        0,
        t.events.slice(b)
      ), t.events.length = $, u(x);
    }
    return s(x);
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
      Uy,
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
      Uy,
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
    return Z(x) ? (e.consume(x), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(x), v);
  }
  function w(x, b) {
    const A = t.sliceStream(x);
    if (b && A.push(null), x.previous = i, i && (i.next = x), i = x, o.defineSkip(x.start), o.write(A), t.parser.lazy[x.start.line]) {
      let S = o.events.length;
      for (; S--; )
        if (o.events[S][1].start.offset < l && (!o.events[S][1].end || o.events[S][1].end.offset > l))
          return;
      const $ = t.events.length;
      let E = $, P, R;
      for (; E--; )
        if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
          if (P) {
            R = t.events[E][1].end;
            break;
          }
          P = !0;
        }
      for (p(r), S = $; S < t.events.length; )
        t.events[S][1].end = Object.assign({}, R), S++;
      Rt(
        t.events,
        E + 1,
        0,
        t.events.slice($)
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
function w7(e, t, n) {
  return ve(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function ju(e) {
  if (e === null || De(e) || Dc(e))
    return 1;
  if (Lc(e))
    return 2;
}
function Fc(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const ih = {
  name: "attention",
  tokenize: S7,
  resolveAll: b7
};
function b7(e, t) {
  let n = -1, r, o, i, l, s, a, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Wy(f, -a), Wy(d, a), l = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: Object.assign({}, e[r][1].end)
          }, s = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: d
          }, i = {
            type: a > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, o = {
            type: a > 1 ? "strong" : "emphasis",
            start: Object.assign({}, l.start),
            end: Object.assign({}, s.end)
          }, e[r][1].end = Object.assign({}, l.start), e[n][1].start = Object.assign({}, s.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = zt(u, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), u = zt(u, [
            ["enter", o, t],
            ["enter", l, t],
            ["exit", l, t],
            ["enter", i, t]
          ]), u = zt(
            u,
            Fc(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), u = zt(u, [
            ["exit", i, t],
            ["enter", s, t],
            ["exit", s, t],
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
function S7(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = ju(r);
  let i;
  return l;
  function l(a) {
    return e.enter("attentionSequence"), i = a, s(a);
  }
  function s(a) {
    if (a === i)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), c = ju(a), f = !c || c === 2 && o || n.includes(a), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(a);
  }
}
function Wy(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const k7 = {
  name: "autolink",
  tokenize: C7
};
function C7(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Vt(h) ? (e.consume(h), l) : Hy(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || dt(h) ? s(h) : u(h);
  }
  function s(h) {
    return h === 58 ? (e.consume(h), a) : (h === 43 || h === 45 || h === 46 || dt(h)) && r++ < 32 ? (e.consume(h), s) : u(h);
  }
  function a(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || xs(h) ? n(h) : (e.consume(h), a);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : Hy(h) ? (e.consume(h), u) : n(h);
  }
  function c(h) {
    return dt(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, c) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(h)) : d(h);
  }
  function d(h) {
    return (h === 45 || dt(h)) && r++ < 63 ? (e.consume(h), h === 45 ? d : f) : n(h);
  }
  function g(h) {
    return e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t;
  }
}
const Vs = {
  tokenize: E7,
  partial: !0
};
function E7(e, t, n) {
  return ve(e, r, "linePrefix");
  function r(o) {
    return o === null || Z(o) ? t(o) : n(o);
  }
}
const Bk = {
  name: "blockQuote",
  tokenize: $7,
  continuation: {
    tokenize: A7
  },
  exit: P7
};
function $7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    if (l === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), i;
    }
    return n(l);
  }
  function i(l) {
    return ye(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function A7(e, t, n) {
  return ve(
    e,
    e.attempt(Bk, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function P7(e) {
  e.exit("blockQuote");
}
const jk = {
  name: "characterEscape",
  tokenize: _7
};
function _7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return m7(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const qy = document.createElement("i");
function og(e) {
  const t = "&" + e + ";";
  qy.innerHTML = t;
  const n = qy.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const Vk = {
  name: "characterReference",
  tokenize: R7
};
function R7(e, t, n) {
  const r = this;
  let o = 0, i, l;
  return s;
  function s(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), a;
  }
  function a(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), i = 31, l = dt, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = h7, c) : (e.enter("characterReferenceValue"), i = 7, l = Bu, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === dt && !og(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const Qy = {
  name: "codeFenced",
  tokenize: T7,
  concrete: !0
};
function T7(e, t, n) {
  const r = this, o = {
    tokenize: A,
    partial: !0
  }, i = {
    tokenize: b,
    partial: !0
  }, l = this.events[this.events.length - 1], s = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0;
  let a = 0, u;
  return c;
  function c(S) {
    return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u = S, f(S);
  }
  function f(S) {
    return S === u ? (e.consume(S), a++, f) : (e.exit("codeFencedFenceSequence"), a < 3 ? n(S) : ve(e, d, "whitespace")(S));
  }
  function d(S) {
    return S === null || Z(S) ? w(S) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), g(S));
  }
  function g(S) {
    return S === null || De(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ve(e, h, "whitespace")(S)) : S === 96 && S === u ? n(S) : (e.consume(S), g);
  }
  function h(S) {
    return S === null || Z(S) ? w(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), v(S));
  }
  function v(S) {
    return S === null || Z(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), w(S)) : S === 96 && S === u ? n(S) : (e.consume(S), v);
  }
  function w(S) {
    return e.exit("codeFencedFence"), r.interrupt ? t(S) : p(S);
  }
  function p(S) {
    return S === null ? x(S) : Z(S) ? e.attempt(
      i,
      e.attempt(
        o,
        x,
        s ? ve(
          e,
          p,
          "linePrefix",
          s + 1
        ) : p
      ),
      x
    )(S) : (e.enter("codeFlowValue"), y(S));
  }
  function y(S) {
    return S === null || Z(S) ? (e.exit("codeFlowValue"), p(S)) : (e.consume(S), y);
  }
  function x(S) {
    return e.exit("codeFenced"), t(S);
  }
  function b(S, $, E) {
    const P = this;
    return R;
    function R(O) {
      return S.enter("lineEnding"), S.consume(O), S.exit("lineEnding"), T;
    }
    function T(O) {
      return P.parser.lazy[P.now().line] ? E(O) : $(O);
    }
  }
  function A(S, $, E) {
    let P = 0;
    return ve(
      S,
      R,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function R(D) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), T(D);
    }
    function T(D) {
      return D === u ? (S.consume(D), P++, T) : P < a ? E(D) : (S.exit("codeFencedFenceSequence"), ve(S, O, "whitespace")(D));
    }
    function O(D) {
      return D === null || Z(D) ? (S.exit("codeFencedFence"), $(D)) : E(D);
    }
  }
}
const ld = {
  name: "codeIndented",
  tokenize: O7
}, I7 = {
  tokenize: N7,
  partial: !0
};
function O7(e, t, n) {
  const r = this;
  return o;
  function o(u) {
    return e.enter("codeIndented"), ve(e, i, "linePrefix", 4 + 1)(u);
  }
  function i(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? a(u) : Z(u) ? e.attempt(I7, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || Z(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function N7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ve(e, i, "linePrefix", 4 + 1)(l);
  }
  function i(l) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : Z(l) ? o(l) : n(l);
  }
}
const M7 = {
  name: "codeText",
  tokenize: F7,
  resolve: D7,
  previous: L7
};
function D7(e) {
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
function L7(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function F7(e, t, n) {
  let r = 0, o, i;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(f);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), a(f));
  }
  function a(f) {
    return f === null ? n(f) : f === 96 ? (i = e.enter("codeTextSequence"), o = 0, c(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), a) : Z(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || Z(f) ? (e.exit("codeTextData"), a(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), o++, c) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (i.type = "codeTextData", u(f));
  }
}
function Hk(e) {
  const t = {};
  let n = -1, r, o, i, l, s, a, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, i = 0, i < a.length && a[i][1].type === "lineEndingBlank" && (i += 2), i < a.length && a[i][1].type === "content"))
      for (; ++i < a.length && a[i][1].type !== "content"; )
        a[i][1].type === "chunkText" && (a[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, z7(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), s = e.slice(o, n), s.unshift(r), Rt(e, o, n - o + 1, s));
    }
  }
  return !u;
}
function z7(e, t) {
  const n = e[t][1], r = e[t][2];
  let o = t - 1;
  const i = [], l = n._tokenizer || r.parser[n.contentType](n.start), s = l.events, a = [], u = {};
  let c, f, d = -1, g = n, h = 0, v = 0;
  const w = [v];
  for (; g; ) {
    for (; e[++o][1] !== g; )
      ;
    i.push(o), g._tokenizer || (c = r.sliceStream(g), g.next || c.push(null), f && l.defineSkip(g.start), g._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), g._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = g, g = g.next;
  }
  for (g = n; ++d < s.length; )
    s[d][0] === "exit" && s[d - 1][0] === "enter" && s[d][1].type === s[d - 1][1].type && s[d][1].start.line !== s[d][1].end.line && (v = d + 1, w.push(v), g._tokenizer = void 0, g.previous = void 0, g = g.next);
  for (l.events = [], g ? (g._tokenizer = void 0, g.previous = void 0) : w.pop(), d = w.length; d--; ) {
    const p = s.slice(w[d], w[d + 1]), y = i.pop();
    a.unshift([y, y + p.length - 1]), Rt(e, y, 2, p);
  }
  for (d = -1; ++d < a.length; )
    u[h + a[d][0]] = h + a[d][1], h += a[d][1] - a[d][0] - 1;
  return u;
}
const B7 = {
  tokenize: H7,
  resolve: V7
}, j7 = {
  tokenize: U7,
  partial: !0
};
function V7(e) {
  return Hk(e), e;
}
function H7(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(s);
  }
  function o(s) {
    return s === null ? i(s) : Z(s) ? e.check(
      j7,
      l,
      i
    )(s) : (e.consume(s), o);
  }
  function i(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function l(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, o;
  }
}
function U7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ve(e, i, "linePrefix");
  }
  function i(l) {
    if (l === null || Z(l))
      return n(l);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function Uk(e, t, n, r, o, i, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || xs(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), v(p));
  }
  function d(p) {
    return p === 62 ? (e.enter(i), e.consume(p), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), g(p));
  }
  function g(p) {
    return p === 62 ? (e.exit("chunkString"), e.exit(s), d(p)) : p === null || p === 60 || Z(p) ? n(p) : (e.consume(p), p === 92 ? h : g);
  }
  function h(p) {
    return p === 60 || p === 62 || p === 92 ? (e.consume(p), g) : g(p);
  }
  function v(p) {
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(p)) : xs(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function Wk(e, t, n, r, o, i) {
  const l = this;
  let s = 0, a;
  return u;
  function u(g) {
    return e.enter(r), e.enter(o), e.consume(g), e.exit(o), e.enter(i), c;
  }
  function c(g) {
    return g === null || g === 91 || g === 93 && !a || g === 94 && !s && "_hiddenFootnoteSupport" in l.parser.constructs || s > 999 ? n(g) : g === 93 ? (e.exit(i), e.enter(o), e.consume(g), e.exit(o), e.exit(r), t) : Z(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(g));
  }
  function f(g) {
    return g === null || g === 91 || g === 93 || Z(g) || s++ > 999 ? (e.exit("chunkString"), c(g)) : (e.consume(g), a = a || !ye(g), g === 92 ? d : f);
  }
  function d(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), s++, f) : f(g);
  }
}
function qk(e, t, n, r, o, i) {
  let l;
  return s;
  function s(d) {
    return e.enter(r), e.enter(o), e.consume(d), e.exit(o), l = d === 40 ? 41 : d, a;
  }
  function a(d) {
    return d === l ? (e.enter(o), e.consume(d), e.exit(o), e.exit(r), t) : (e.enter(i), u(d));
  }
  function u(d) {
    return d === l ? (e.exit(i), a(l)) : d === null ? n(d) : Z(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ve(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === l || d === null || Z(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === l || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function Dl(e, t) {
  let n;
  return r;
  function r(o) {
    return Z(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : ye(o) ? ve(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(o) : t(o);
  }
}
function fn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const W7 = {
  name: "definition",
  tokenize: Q7
}, q7 = {
  tokenize: G7,
  partial: !0
};
function Q7(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(a) {
    return e.enter("definition"), Wk.call(
      r,
      e,
      l,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(a);
  }
  function l(a) {
    return o = fn(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), a === 58 ? (e.enter("definitionMarker"), e.consume(a), e.exit("definitionMarker"), Dl(
      e,
      Uk(
        e,
        e.attempt(
          q7,
          ve(e, s, "whitespace"),
          ve(e, s, "whitespace")
        ),
        n,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString"
      )
    )) : n(a);
  }
  function s(a) {
    return a === null || Z(a) ? (e.exit("definition"), r.parser.defined.includes(o) || r.parser.defined.push(o), t(a)) : n(a);
  }
}
function G7(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? Dl(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? qk(
      e,
      ve(e, i, "whitespace"),
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(l) : n(l);
  }
  function i(l) {
    return l === null || Z(l) ? t(l) : n(l);
  }
}
const K7 = {
  name: "hardBreakEscape",
  tokenize: Y7
};
function Y7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return Z(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const X7 = {
  name: "headingAtx",
  tokenize: J7,
  resolve: Z7
};
function Z7(e, t) {
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
function J7(e, t, n) {
  const r = this;
  let o = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && o++ < 6 ? (e.consume(c), l) : c === null || De(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : s(c)) : n(c);
  }
  function s(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), a(c)) : c === null || Z(c) ? (e.exit("atxHeading"), t(c)) : ye(c) ? ve(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function a(c) {
    return c === 35 ? (e.consume(c), a) : (e.exit("atxHeadingSequence"), s(c));
  }
  function u(c) {
    return c === null || c === 35 || De(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), u);
  }
}
const e8 = [
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
], Gy = ["pre", "script", "style", "textarea"], t8 = {
  name: "htmlFlow",
  tokenize: o8,
  resolveTo: r8,
  concrete: !0
}, n8 = {
  tokenize: i8,
  partial: !0
};
function r8(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function o8(e, t, n) {
  const r = this;
  let o, i, l, s, a;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : I) : Vt(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, v) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", s = 0, g) : Vt(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(s++) ? (e.consume(C), s === l.length ? r.interrupt ? t : T : g) : n(C);
  }
  function h(C) {
    return Vt(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && Gy.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : T(C)) : e8.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : T(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || dt(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : T) : n(C);
  }
  function p(C) {
    return ye(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Vt(C) ? (e.consume(C), x) : ye(C) ? (e.consume(C), y) : P(C);
  }
  function x(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || dt(C) ? (e.consume(C), x) : b(C);
  }
  function b(C) {
    return C === 61 ? (e.consume(C), A) : ye(C) ? (e.consume(C), b) : y(C);
  }
  function A(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), a = C, S) : ye(C) ? (e.consume(C), A) : (a = null, $(C));
  }
  function S(C) {
    return C === null || Z(C) ? n(C) : C === a ? (e.consume(C), E) : (e.consume(C), S);
  }
  function $(C) {
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 62 || C === 96 || De(C) ? b(C) : (e.consume(C), $);
  }
  function E(C) {
    return C === 47 || C === 62 || ye(C) ? y(C) : n(C);
  }
  function P(C) {
    return C === 62 ? (e.consume(C), R) : n(C);
  }
  function R(C) {
    return ye(C) ? (e.consume(C), R) : C === null || Z(C) ? T(C) : n(C);
  }
  function T(C) {
    return C === 45 && o === 2 ? (e.consume(C), F) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), N) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), M) : Z(C) && (o === 6 || o === 7) ? e.check(
      n8,
      N,
      O
    )(C) : C === null || Z(C) ? O(C) : (e.consume(C), T);
  }
  function O(C) {
    return e.exit("htmlFlowData"), D(C);
  }
  function D(C) {
    return C === null ? k(C) : Z(C) ? e.attempt(
      {
        tokenize: z,
        partial: !0
      },
      D,
      k
    )(C) : (e.enter("htmlFlowData"), T(C));
  }
  function z(C, J, ne) {
    return ue;
    function ue(Q) {
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
    return C === 47 ? (e.consume(C), l = "", V) : T(C);
  }
  function V(C) {
    return C === 62 && Gy.includes(l.toLowerCase()) ? (e.consume(C), N) : Vt(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), V) : T(C);
  }
  function M(C) {
    return C === 93 ? (e.consume(C), I) : T(C);
  }
  function I(C) {
    return C === 62 ? (e.consume(C), N) : C === 45 && o === 2 ? (e.consume(C), I) : T(C);
  }
  function N(C) {
    return C === null || Z(C) ? (e.exit("htmlFlowData"), k(C)) : (e.consume(C), N);
  }
  function k(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function i8(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Vs, t, n);
  }
}
const l8 = {
  name: "htmlText",
  tokenize: s8
};
function s8(e, t, n) {
  const r = this;
  let o, i, l, s;
  return a;
  function a(k) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), u;
  }
  function u(k) {
    return k === 33 ? (e.consume(k), c) : k === 47 ? (e.consume(k), $) : k === 63 ? (e.consume(k), A) : Vt(k) ? (e.consume(k), R) : n(k);
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
    return k === null ? n(k) : k === 45 ? (e.consume(k), v) : Z(k) ? (s = h, M(k)) : (e.consume(k), h);
  }
  function v(k) {
    return k === 45 ? (e.consume(k), N) : h(k);
  }
  function w(k) {
    return k === i.charCodeAt(l++) ? (e.consume(k), l === i.length ? p : w) : n(k);
  }
  function p(k) {
    return k === null ? n(k) : k === 93 ? (e.consume(k), y) : Z(k) ? (s = p, M(k)) : (e.consume(k), p);
  }
  function y(k) {
    return k === 93 ? (e.consume(k), x) : p(k);
  }
  function x(k) {
    return k === 62 ? N(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? N(k) : Z(k) ? (s = b, M(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : Z(k) ? (s = A, M(k)) : (e.consume(k), A);
  }
  function S(k) {
    return k === 62 ? N(k) : A(k);
  }
  function $(k) {
    return Vt(k) ? (e.consume(k), E) : n(k);
  }
  function E(k) {
    return k === 45 || dt(k) ? (e.consume(k), E) : P(k);
  }
  function P(k) {
    return Z(k) ? (s = P, M(k)) : ye(k) ? (e.consume(k), P) : N(k);
  }
  function R(k) {
    return k === 45 || dt(k) ? (e.consume(k), R) : k === 47 || k === 62 || De(k) ? T(k) : n(k);
  }
  function T(k) {
    return k === 47 ? (e.consume(k), N) : k === 58 || k === 95 || Vt(k) ? (e.consume(k), O) : Z(k) ? (s = T, M(k)) : ye(k) ? (e.consume(k), T) : N(k);
  }
  function O(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || dt(k) ? (e.consume(k), O) : D(k);
  }
  function D(k) {
    return k === 61 ? (e.consume(k), z) : Z(k) ? (s = D, M(k)) : ye(k) ? (e.consume(k), D) : T(k);
  }
  function z(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, F) : Z(k) ? (s = z, M(k)) : ye(k) ? (e.consume(k), z) : (e.consume(k), o = void 0, V);
  }
  function F(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : Z(k) ? (s = F, M(k)) : (e.consume(k), F);
  }
  function _(k) {
    return k === 62 || k === 47 || De(k) ? T(k) : n(k);
  }
  function V(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? T(k) : (e.consume(k), V);
  }
  function M(k) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), ve(
      e,
      I,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function I(k) {
    return e.enter("htmlTextData"), s(k);
  }
  function N(k) {
    return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
  }
}
const ig = {
  name: "labelEnd",
  tokenize: p8,
  resolveTo: d8,
  resolveAll: f8
}, a8 = {
  tokenize: h8
}, u8 = {
  tokenize: m8
}, c8 = {
  tokenize: g8
};
function f8(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function d8(e, t) {
  let n = e.length, r = 0, o, i, l, s;
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
  const a = {
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
  return s = [
    ["enter", a, t],
    ["enter", u, t]
  ], s = zt(s, e.slice(i + 1, i + r + 3)), s = zt(s, [["enter", c, t]]), s = zt(
    s,
    Fc(
      t.parser.constructs.insideSpan.null,
      e.slice(i + r + 4, l - 3),
      t
    )
  ), s = zt(s, [
    ["exit", c, t],
    e[l - 2],
    e[l - 1],
    ["exit", u, t]
  ]), s = zt(s, e.slice(l + 1)), s = zt(s, [["exit", a, t]]), Rt(e, i, e.length, s), e;
}
function p8(e, t, n) {
  const r = this;
  let o = r.events.length, i, l;
  for (; o--; )
    if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1]._balanced) {
      i = r.events[o][1];
      break;
    }
  return s;
  function s(c) {
    return i ? i._inactive ? u(c) : (l = r.parser.defined.includes(
      fn(
        r.sliceSerialize({
          start: i.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(c);
  }
  function a(c) {
    return c === 40 ? e.attempt(
      a8,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      u8,
      t,
      l ? e.attempt(c8, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function h8(e, t, n) {
  return r;
  function r(a) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(a), e.exit("resourceMarker"), Dl(e, o);
  }
  function o(a) {
    return a === 41 ? s(a) : Uk(
      e,
      i,
      n,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(a);
  }
  function i(a) {
    return De(a) ? Dl(e, l)(a) : s(a);
  }
  function l(a) {
    return a === 34 || a === 39 || a === 40 ? qk(
      e,
      Dl(e, s),
      n,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(a) : s(a);
  }
  function s(a) {
    return a === 41 ? (e.enter("resourceMarker"), e.consume(a), e.exit("resourceMarker"), e.exit("resource"), t) : n(a);
  }
}
function m8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return Wk.call(
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
      fn(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? t(l) : n(l);
  }
}
function g8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const v8 = {
  name: "labelStartImage",
  tokenize: y8,
  resolveAll: ig.resolveAll
};
function y8(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), i;
  }
  function i(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), l) : n(s);
  }
  function l(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const x8 = {
  name: "labelStartLink",
  tokenize: w8,
  resolveAll: ig.resolveAll
};
function w8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const sd = {
  name: "lineEnding",
  tokenize: b8
};
function b8(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ve(e, t, "linePrefix");
  }
}
const Qa = {
  name: "thematicBreak",
  tokenize: S8
};
function S8(e, t, n) {
  let r = 0, o;
  return i;
  function i(a) {
    return e.enter("thematicBreak"), o = a, l(a);
  }
  function l(a) {
    return a === o ? (e.enter("thematicBreakSequence"), s(a)) : ye(a) ? ve(e, l, "whitespace")(a) : r < 3 || a !== null && !Z(a) ? n(a) : (e.exit("thematicBreak"), t(a));
  }
  function s(a) {
    return a === o ? (e.consume(a), r++, s) : (e.exit("thematicBreakSequence"), l(a));
  }
}
const gt = {
  name: "list",
  tokenize: E8,
  continuation: {
    tokenize: $8
  },
  exit: P8
}, k8 = {
  tokenize: _8,
  partial: !0
}, C8 = {
  tokenize: A8,
  partial: !0
};
function E8(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return s;
  function s(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : Bu(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(Qa, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(g);
    }
    return n(g);
  }
  function a(g) {
    return Bu(g) && ++l < 10 ? (e.consume(g), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Vs,
      r.interrupt ? n : c,
      e.attempt(
        k8,
        d,
        f
      )
    );
  }
  function c(g) {
    return r.containerState.initialBlankLine = !0, i++, d(g);
  }
  function f(g) {
    return ye(g) ? (e.enter("listItemPrefixWhitespace"), e.consume(g), e.exit("listItemPrefixWhitespace"), d) : n(g);
  }
  function d(g) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(g);
  }
}
function $8(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Vs, o, i);
  function o(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ve(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(s);
  }
  function i(s) {
    return r.containerState.furtherBlankLines || !ye(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(C8, t, l)(s));
  }
  function l(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ve(
      e,
      e.attempt(gt, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(s);
  }
}
function A8(e, t, n) {
  const r = this;
  return ve(
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
function P8(e) {
  e.exit(this.containerState.type);
}
function _8(e, t, n) {
  const r = this;
  return ve(
    e,
    o,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function o(i) {
    const l = r.events[r.events.length - 1];
    return !ye(i) && l && l[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const Ky = {
  name: "setextUnderline",
  tokenize: T8,
  resolveTo: R8
};
function R8(e, t) {
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
function T8(e, t, n) {
  const r = this;
  let o = r.events.length, i, l;
  for (; o--; )
    if (r.events[o][1].type !== "lineEnding" && r.events[o][1].type !== "linePrefix" && r.events[o][1].type !== "content") {
      l = r.events[o][1].type === "paragraph";
      break;
    }
  return s;
  function s(c) {
    return !r.parser.lazy[r.now().line] && (r.interrupt || l) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = c, a(c)) : n(c);
  }
  function a(c) {
    return c === i ? (e.consume(c), a) : (e.exit("setextHeadingLineSequence"), ve(e, u, "lineSuffix")(c));
  }
  function u(c) {
    return c === null || Z(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const I8 = {
  tokenize: O8
};
function O8(e) {
  const t = this, n = e.attempt(
    Vs,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ve(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(B7, o)
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
const N8 = {
  resolveAll: Gk()
}, M8 = Qk("string"), D8 = Qk("text");
function Qk(e) {
  return {
    tokenize: t,
    resolveAll: Gk(
      e === "text" ? L8 : void 0
    )
  };
  function t(n) {
    const r = this, o = this.parser.constructs[e], i = n.attempt(o, l, s);
    return l;
    function l(c) {
      return u(c) ? i(c) : s(c);
    }
    function s(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), a;
    }
    function a(c) {
      return u(c) ? (n.exit("data"), i(c)) : (n.consume(c), a);
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
function Gk(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function L8(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], o = t.sliceStream(r);
      let i = o.length, l = -1, s = 0, a;
      for (; i--; ) {
        const u = o[i];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            s++, l--;
          if (l)
            break;
          l = -1;
        } else if (u === -2)
          a = !0, s++;
        else if (u !== -1) {
          i++;
          break;
        }
      }
      if (s) {
        const u = {
          type: n === e.length || a || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
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
function F8(e, t, n) {
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
  let l = [], s = [];
  const a = {
    consume: y,
    enter: x,
    exit: b,
    attempt: $(A),
    check: $(S),
    interrupt: $(S, {
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
  let c = t.tokenize.call(u, a);
  return t.resolveAll && i.push(t), u;
  function f(T) {
    return l = zt(l, T), w(), l[l.length - 1] !== null ? [] : (E(t, 0), u.events = Fc(i, u.events, u), u.events);
  }
  function d(T, O) {
    return B8(g(T), O);
  }
  function g(T) {
    return z8(l, T);
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
      const O = l[r._index];
      if (typeof O == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < O.length; )
          p(O.charCodeAt(r._bufferIndex));
      else
        p(O);
    }
  }
  function p(T) {
    c = c(T);
  }
  function y(T) {
    Z(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, R()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
  }
  function x(T, O) {
    const D = O || {};
    return D.type = T, D.start = h(), u.events.push(["enter", D, u]), s.push(D), D;
  }
  function b(T) {
    const O = s.pop();
    return O.end = h(), u.events.push(["exit", O, u]), O;
  }
  function A(T, O) {
    E(T, O.from);
  }
  function S(T, O) {
    O.restore();
  }
  function $(T, O) {
    return D;
    function D(z, F, _) {
      let V, M, I, N;
      return Array.isArray(z) ? C(z) : "tokenize" in z ? C([z]) : k(z);
      function k(ee) {
        return Q;
        function Q(ie) {
          const we = ie !== null && ee[ie], ce = ie !== null && ee.null, de = [
            ...Array.isArray(we) ? we : we ? [we] : [],
            ...Array.isArray(ce) ? ce : ce ? [ce] : []
          ];
          return C(de)(ie);
        }
      }
      function C(ee) {
        return V = ee, M = 0, ee.length === 0 ? _ : J(ee[M]);
      }
      function J(ee) {
        return Q;
        function Q(ie) {
          return N = P(), I = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? ue() : ee.tokenize.call(
            O ? Object.assign(Object.create(u), O) : u,
            a,
            ne,
            ue
          )(ie);
        }
      }
      function ne(ee) {
        return T(I, N), F;
      }
      function ue(ee) {
        return N.restore(), ++M < V.length ? J(V[M]) : _;
      }
    }
  }
  function E(T, O) {
    T.resolveAll && !i.includes(T) && i.push(T), T.resolve && Rt(
      u.events,
      O,
      u.events.length - O,
      T.resolve(u.events.slice(O), u)
    ), T.resolveTo && (u.events = T.resolveTo(u.events, u));
  }
  function P() {
    const T = h(), O = u.previous, D = u.currentConstruct, z = u.events.length, F = Array.from(s);
    return {
      restore: _,
      from: z
    };
    function _() {
      r = T, u.previous = O, u.currentConstruct = D, u.events.length = z, s = F, R();
    }
  }
  function R() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function z8(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function B8(e, t) {
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
const j8 = {
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
  [62]: Bk
}, V8 = {
  [91]: W7
}, H8 = {
  [-2]: ld,
  [-1]: ld,
  [32]: ld
}, U8 = {
  [35]: X7,
  [42]: Qa,
  [45]: [Ky, Qa],
  [60]: t8,
  [61]: Ky,
  [95]: Qa,
  [96]: Qy,
  [126]: Qy
}, W8 = {
  [38]: Vk,
  [92]: jk
}, q8 = {
  [-5]: sd,
  [-4]: sd,
  [-3]: sd,
  [33]: v8,
  [38]: Vk,
  [42]: ih,
  [60]: [k7, l8],
  [91]: x8,
  [92]: [K7, jk],
  [93]: ig,
  [95]: ih,
  [96]: M7
}, Q8 = {
  null: [ih, N8]
}, G8 = {
  null: [42, 95]
}, K8 = {
  null: []
}, Y8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: j8,
  contentInitial: V8,
  flowInitial: H8,
  flow: U8,
  string: W8,
  text: q8,
  insideSpan: Q8,
  attentionMarkers: G8,
  disable: K8
}, Symbol.toStringTag, { value: "Module" }));
function X8(e = {}) {
  const t = zk(
    [Y8].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(g7),
    document: r(y7),
    flow: r(I8),
    string: r(M8),
    text: r(D8)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return F8(n, o, l);
    }
  }
}
const Yy = /[\0\t\n\r]/g;
function Z8() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, s) {
    const a = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (Yy.lastIndex = f, u = Yy.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
        t = i.slice(f);
        break;
      }
      if (g === 10 && f === d && r)
        a.push(-3), r = void 0;
      else
        switch (r && (a.push(-5), r = void 0), f < d && (a.push(i.slice(f, d)), e += d - f), g) {
          case 0: {
            a.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, a.push(-2); e++ < c; )
              a.push(-1);
            break;
          }
          case 10: {
            a.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return s && (r && a.push(-5), t && a.push(t), a.push(null)), a;
  }
}
function J8(e) {
  for (; !Hk(e); )
    ;
  return e;
}
function Kk(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const eN = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Yk(e) {
  return e.replace(eN, tN);
}
function tN(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return Kk(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return og(n) || e;
}
const Xk = {}.hasOwnProperty, nN = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), rN(n)(
    J8(
      X8(n).document().write(Z8()(e, t, !0))
    )
  );
};
function rN(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(rr),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: s(er),
      blockQuote: s(de),
      characterEscape: T,
      characterReference: T,
      codeFenced: s(se),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: s(se, a),
      codeText: s(at, a),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: s(ut),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: s(jr),
      hardBreakEscape: s(tr),
      hardBreakTrailing: s(tr),
      htmlFlow: s(Qs, a),
      htmlFlowData: T,
      htmlText: s(Qs, a),
      htmlTextData: T,
      image: s(nr),
      label: a,
      link: s(rr),
      listItem: s(or),
      listItemValue: h,
      listOrdered: s(Bi, g),
      listUnordered: s(Bi),
      paragraph: s(Kc),
      reference: ue,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: s(er),
      strong: s(Yc),
      thematicBreak: s(S2)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: $,
      autolink: c(),
      autolinkEmail: ce,
      autolinkProtocol: we,
      blockQuote: c(),
      characterEscapeValue: O,
      characterReferenceMarkerHexadecimal: Q,
      characterReferenceMarkerNumeric: Q,
      characterReferenceValue: ie,
      codeFenced: c(y),
      codeFencedFence: p,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: w,
      codeFlowValue: O,
      codeIndented: c(x),
      codeText: c(V),
      codeTextData: O,
      data: O,
      definition: c(),
      definitionDestinationString: S,
      definitionLabelString: b,
      definitionTitleString: A,
      emphasis: c(),
      hardBreakEscape: c(z),
      hardBreakTrailing: c(z),
      htmlFlow: c(F),
      htmlFlowData: O,
      htmlText: c(_),
      htmlTextData: O,
      image: c(I),
      label: k,
      labelText: N,
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
      setextHeadingText: E,
      strong: c(),
      thematicBreak: c()
    }
  };
  Zk(t, (e || {}).mdastExtensions || []);
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
      buffer: a,
      resume: d,
      setData: i,
      getData: l
    }, Se = [];
    let Ce = -1;
    for (; ++Ce < L.length; )
      if (L[Ce][1].type === "listOrdered" || L[Ce][1].type === "listUnordered")
        if (L[Ce][0] === "enter")
          Se.push(Ce);
        else {
          const Yt = Se.pop();
          Ce = o(L, Yt, Ce);
        }
    for (Ce = -1; ++Ce < L.length; ) {
      const Yt = t[L[Ce][0]];
      Xk.call(Yt, L[Ce][1].type) && Yt[L[Ce][1].type].call(
        Object.assign(
          {
            sliceSerialize: L[Ce][2].sliceSerialize
          },
          te
        ),
        L[Ce][1]
      );
    }
    if (te.tokenStack.length > 0) {
      const Yt = te.tokenStack[te.tokenStack.length - 1];
      (Yt[1] || Xy).call(te, void 0, Yt[0]);
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
    }, Ce = -1; ++Ce < t.transforms.length; )
      q = t.transforms[Ce](q) || q;
    return q;
  }
  function o(L, q, te) {
    let Se = q - 1, Ce = -1, Yt = !1, ir, Rn, ji, Vi;
    for (; ++Se <= te; ) {
      const Le = L[Se];
      if (Le[1].type === "listUnordered" || Le[1].type === "listOrdered" || Le[1].type === "blockQuote" ? (Le[0] === "enter" ? Ce++ : Ce--, Vi = void 0) : Le[1].type === "lineEndingBlank" ? Le[0] === "enter" && (ir && !Vi && !Ce && !ji && (ji = Se), Vi = void 0) : Le[1].type === "linePrefix" || Le[1].type === "listItemValue" || Le[1].type === "listItemMarker" || Le[1].type === "listItemPrefix" || Le[1].type === "listItemPrefixWhitespace" || (Vi = void 0), !Ce && Le[0] === "enter" && Le[1].type === "listItemPrefix" || Ce === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (ir) {
          let Xc = Se;
          for (Rn = void 0; Xc--; ) {
            const Tn = L[Xc];
            if (Tn[1].type === "lineEnding" || Tn[1].type === "lineEndingBlank") {
              if (Tn[0] === "exit")
                continue;
              Rn && (L[Rn][1].type = "lineEndingBlank", Yt = !0), Tn[1].type = "lineEnding", Rn = Xc;
            } else if (!(Tn[1].type === "linePrefix" || Tn[1].type === "blockQuotePrefix" || Tn[1].type === "blockQuotePrefixWhitespace" || Tn[1].type === "blockQuoteMarker" || Tn[1].type === "listItemIndent"))
              break;
          }
          ji && (!Rn || ji < Rn) && (ir._spread = !0), ir.end = Object.assign(
            {},
            Rn ? L[Rn][1].start : Le[1].end
          ), L.splice(Rn || Se, 0, ["exit", ir, Le[2]]), Se++, te++;
        }
        Le[1].type === "listItemPrefix" && (ir = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, Le[1].start)
        }, L.splice(Se, 0, ["enter", ir, Le[2]]), Se++, te++, ji = void 0, Vi = !0);
      }
    }
    return L[q][1]._spread = Yt, te;
  }
  function i(L, q) {
    n[L] = q;
  }
  function l(L) {
    return n[L];
  }
  function s(L, q) {
    return te;
    function te(Se) {
      u.call(this, L(Se), Se), q && q.call(this, Se);
    }
  }
  function a() {
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
    const te = this.stack.pop(), Se = this.tokenStack.pop();
    if (Se)
      Se[0].type !== L.type && (q ? q.call(this, L, Se[0]) : (Se[1] || Xy).call(this, L, Se[0]));
    else
      throw new Error(
        "Cannot close `" + L.type + "` (" + Ml({
          start: L.start,
          end: L.end
        }) + "): it\u2019s not open"
      );
    return te.position.end = ur(L.end), te;
  }
  function d() {
    return u7(this.stack.pop());
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
    te.label = q, te.identifier = fn(
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
  function $(L) {
    const q = this.stack[this.stack.length - 1];
    if (!q.depth) {
      const te = this.sliceSerialize(L).length;
      q.depth = te;
    }
  }
  function E() {
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
    (!te || te.type !== "text") && (te = b2(), te.position = {
      start: ur(L.start)
    }, q.children.push(te)), this.stack.push(te);
  }
  function O(L) {
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
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (T.call(this, L), O.call(this, L));
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
  function N(L) {
    const q = this.sliceSerialize(L), te = this.stack[this.stack.length - 2];
    te.label = Yk(q), te.identifier = fn(q).toLowerCase();
  }
  function k() {
    const L = this.stack[this.stack.length - 1], q = this.resume(), te = this.stack[this.stack.length - 1];
    if (i("inReference", !0), te.type === "link") {
      const Se = L.children;
      te.children = Se;
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
  function ue() {
    i("referenceType", "collapsed");
  }
  function ee(L) {
    const q = this.resume(), te = this.stack[this.stack.length - 1];
    te.label = q, te.identifier = fn(
      this.sliceSerialize(L)
    ).toLowerCase(), i("referenceType", "full");
  }
  function Q(L) {
    i("characterReferenceType", L.type);
  }
  function ie(L) {
    const q = this.sliceSerialize(L), te = l("characterReferenceType");
    let Se;
    te ? (Se = Kk(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : Se = og(q);
    const Ce = this.stack.pop();
    Ce.value += Se, Ce.position.end = ur(L.end);
  }
  function we(L) {
    O.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(L);
  }
  function ce(L) {
    O.call(this, L);
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
  function ut() {
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
  function Qs() {
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
  function Bi(L) {
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
  function Kc() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Yc() {
    return {
      type: "strong",
      children: []
    };
  }
  function b2() {
    return {
      type: "text",
      value: ""
    };
  }
  function S2() {
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
function Zk(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Zk(e, r) : oN(e, r);
  }
}
function oN(e, t) {
  let n;
  for (n in t)
    if (Xk.call(t, n)) {
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
function Xy(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + Ml({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Ml({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + Ml({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function iN(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return nN(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
var Jk = { exports: {} };
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
      for (var l = 1, s = [].slice.call(arguments), a = 0, u = i.length, c = "", f, d = !1, g, h, v = !1, w, p = function() {
        return s[l++];
      }, y = function() {
        for (var x = ""; /\d/.test(i[a]); )
          x += i[a++], f = i[a];
        return x.length > 0 ? parseInt(x) : null;
      }; a < u; ++a)
        if (f = i[a], d)
          switch (d = !1, f == "." ? (v = !1, f = i[++a]) : f == "0" && i[a + 1] == "." ? (v = !0, a += 2, f = i[a]) : v = !0, w = y(), f) {
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
})(Jk);
const lN = Jk.exports, ka = Object.assign(Vr(Error), {
  eval: Vr(EvalError),
  range: Vr(RangeError),
  reference: Vr(ReferenceError),
  syntax: Vr(SyntaxError),
  type: Vr(TypeError),
  uri: Vr(URIError)
});
function Vr(e) {
  return t.displayName = e.displayName || e.name, t;
  function t(n, ...r) {
    const o = n && lN(n, ...r);
    return new e(o);
  }
}
const Ca = {}.hasOwnProperty, Zy = {
  yaml: "-",
  toml: "+"
};
function lg(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = sN(r[n]);
  return t;
}
function sN(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Ca.call(Zy, t))
      throw ka("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: Zy[t]
    };
  } else if (typeof t != "object")
    throw ka("Expected matter to be an object, not `%j`", t);
  if (!Ca.call(t, "type"))
    throw ka("Missing `type` in matter `%j`", t);
  if (!Ca.call(t, "fence") && !Ca.call(t, "marker"))
    throw ka("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function aN(e) {
  const t = lg(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = lh(o, "open").charCodeAt(0), l = uN(o), s = n[i];
    Array.isArray(s) ? s.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function uN(e) {
  const t = e.anywhere, n = e.type, r = n + "Fence", o = r + "Sequence", i = n + "Value", l = {
    tokenize: c,
    partial: !0
  };
  let s, a = 0;
  return {
    tokenize: u,
    concrete: !0
  };
  function u(f, d, g) {
    const h = this;
    return v;
    function v($) {
      const E = h.now();
      return E.column === 1 && (E.line === 1 || t) && (s = lh(e, "open"), a = 0, $ === s.charCodeAt(a)) ? (f.enter(n), f.enter(r), f.enter(o), w($)) : g($);
    }
    function w($) {
      return a === s.length ? (f.exit(o), ye($) ? (f.enter("whitespace"), p($)) : y($)) : $ === s.charCodeAt(a++) ? (f.consume($), w) : g($);
    }
    function p($) {
      return ye($) ? (f.consume($), p) : (f.exit("whitespace"), y($));
    }
    function y($) {
      return Z($) ? (f.exit(r), f.enter("lineEnding"), f.consume($), f.exit("lineEnding"), s = lh(e, "close"), a = 0, f.attempt(l, S, x)) : g($);
    }
    function x($) {
      return $ === null || Z($) ? A($) : (f.enter(i), b($));
    }
    function b($) {
      return $ === null || Z($) ? (f.exit(i), A($)) : (f.consume($), b);
    }
    function A($) {
      return $ === null ? g($) : (f.enter("lineEnding"), f.consume($), f.exit("lineEnding"), f.attempt(l, S, x));
    }
    function S($) {
      return f.exit(n), d($);
    }
  }
  function c(f, d, g) {
    let h = 0;
    return v;
    function v(x) {
      return x === s.charCodeAt(h) ? (f.enter(r), f.enter(o), w(x)) : g(x);
    }
    function w(x) {
      return h === s.length ? (f.exit(o), ye(x) ? (f.enter("whitespace"), p(x)) : y(x)) : x === s.charCodeAt(h++) ? (f.consume(x), w) : g(x);
    }
    function p(x) {
      return ye(x) ? (f.consume(x), p) : (f.exit("whitespace"), y(x));
    }
    function y(x) {
      return x === null || Z(x) ? (f.exit(r), d(x)) : g(x);
    }
  }
}
function lh(e, t) {
  return e.marker ? Jy(e.marker, t).repeat(3) : Jy(e.fence, t);
}
function Jy(e, t) {
  return typeof e == "string" ? e : e[t];
}
function cN(e) {
  const t = lg(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = fN(i), r[i.type] = dN, r[i.type + "Value"] = pN;
  }
  return { enter: n, exit: r };
}
function fN(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function dN(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function pN(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function hN(e) {
  const t = [], n = {}, r = lg(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = mN(i), t.push({ atBreak: !0, character: sh(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function mN(e) {
  const t = sh(e, "open"), n = sh(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function sh(e, t) {
  return e.marker ? e1(e.marker, t).repeat(3) : e1(e.fence, t);
}
function e1(e, t) {
  return typeof e == "string" ? e : e[t];
}
function gN(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", aN(e)), n("fromMarkdownExtensions", cN(e)), n("toMarkdownExtensions", hN(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const vN = {
  tokenize: SN,
  partial: !0
}, eC = {
  tokenize: kN,
  partial: !0
}, tC = {
  tokenize: CN,
  partial: !0
}, ui = {
  tokenize: $N,
  partial: !0
}, nC = {
  tokenize: EN,
  partial: !0
}, rC = {
  tokenize: wN,
  previous: lC
}, oC = {
  tokenize: bN,
  previous: ag
}, Jn = {
  tokenize: xN,
  previous: sC
}, _n = {}, yN = {
  text: _n
};
let Hr = 48;
for (; Hr < 123; )
  _n[Hr] = Jn, Hr++, Hr === 58 ? Hr = 65 : Hr === 91 && (Hr = 97);
_n[43] = Jn;
_n[45] = Jn;
_n[46] = Jn;
_n[95] = Jn;
_n[72] = [Jn, oC];
_n[104] = [Jn, oC];
_n[87] = [Jn, rC];
_n[119] = [Jn, rC];
function xN(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !t1(g) || !sC(r.previous) || ug(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(g));
  }
  function s(g) {
    return t1(g) ? (e.consume(g), s) : g === 64 ? (e.consume(g), a) : n(g);
  }
  function a(g) {
    return g === 46 ? e.check(ui, d, u)(g) : g === 45 || g === 95 ? e.check(ui, n, c)(g) : dt(g) ? (!i && Bu(g) && (i = !0), e.consume(g), a) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, a;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(ui, n, u)(g) : a(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function wN(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !lC(r.previous) || ug(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      vN,
      e.attempt(eC, e.attempt(tC, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function bN(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !ag(r.previous) || ug(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
  }
  function i(h) {
    return h === 84 || h === 116 ? (e.consume(h), l) : n(h);
  }
  function l(h) {
    return h === 84 || h === 116 ? (e.consume(h), s) : n(h);
  }
  function s(h) {
    return h === 80 || h === 112 ? (e.consume(h), a) : n(h);
  }
  function a(h) {
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
    return h === null || xs(h) || Dc(h) || Lc(h) ? n(h) : e.attempt(eC, e.attempt(tC, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function SN(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), o;
  }
  function o(a) {
    return a === 87 || a === 119 ? (e.consume(a), i) : n(a);
  }
  function i(a) {
    return a === 87 || a === 119 ? (e.consume(a), l) : n(a);
  }
  function l(a) {
    return a === 46 ? (e.consume(a), s) : n(a);
  }
  function s(a) {
    return a === null || Z(a) ? n(a) : t(a);
  }
}
function kN(e, t, n) {
  let r, o;
  return i;
  function i(a) {
    return a === 38 ? e.check(
      nC,
      s,
      l
    )(a) : a === 46 || a === 95 ? e.check(ui, s, l)(a) : a === null || xs(a) || Dc(a) || a !== 45 && Lc(a) ? s(a) : (e.consume(a), i);
  }
  function l(a) {
    return a === 46 ? (o = r, r = void 0, e.consume(a), i) : (a === 95 && (r = !0), e.consume(a), i);
  }
  function s(a) {
    return !o && !r ? t(a) : n(a);
  }
}
function CN(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      nC,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      ui,
      i,
      o
    )(l) : sg(l) ? t(l) : iC(l) ? e.check(ui, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function EN(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Vt(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return sg(l) ? t(l) : n(l);
  }
}
function $N(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return iC(i) ? (e.consume(i), o) : sg(i) ? t(i) : n(i);
  }
}
function iC(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function sg(e) {
  return e === null || e === 60 || De(e);
}
function t1(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || dt(e);
}
function lC(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function ag(e) {
  return e === null || !Vt(e);
}
function sC(e) {
  return e !== 47 && ag(e);
}
function ug(e) {
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
function Li(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let l = "";
    if (i === 37 && dt(e.charCodeAt(n + 1)) && dt(e.charCodeAt(n + 2)))
      o = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const s = e.charCodeAt(n + 1);
      i < 56320 && s > 56319 && s < 57344 ? (l = String.fromCharCode(i, s), o = 1) : l = "\uFFFD";
    } else
      l = String.fromCharCode(i);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + o + 1, l = ""), o && (n += o, o = 0);
  }
  return t.join("") + e.slice(r);
}
const AN = {
  tokenize: MN,
  partial: !0
};
function PN() {
  return {
    document: {
      [91]: {
        tokenize: IN,
        continuation: {
          tokenize: ON
        },
        exit: NN
      }
    },
    text: {
      [91]: {
        tokenize: TN
      },
      [93]: {
        add: "after",
        tokenize: _N,
        resolveTo: RN
      }
    }
  };
}
function _N(e, t, n) {
  const r = this;
  let o = r.events.length;
  const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; o--; ) {
    const a = r.events[o][1];
    if (a.type === "labelImage") {
      l = a;
      break;
    }
    if (a.type === "gfmFootnoteCall" || a.type === "labelLink" || a.type === "label" || a.type === "image" || a.type === "link")
      break;
  }
  return s;
  function s(a) {
    if (!l || !l._balanced)
      return n(a);
    const u = fn(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !i.includes(u.slice(1)) ? n(a) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a));
  }
}
function RN(e, t) {
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
  }, s = [
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
  return e.splice(n, e.length - n + 1, ...s), e;
}
function TN(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i = 0, l;
  return s;
  function s(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), a;
  }
  function a(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(f) {
    if (i > 999 || f === 93 && !l || f === null || f === 91 || De(f))
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return o.includes(fn(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return De(f) || (l = !0), i++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, u) : u(f);
  }
}
function IN(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i, l = 0, s;
  return a;
  function a(h) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(h) {
    return h === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(h);
  }
  function c(h) {
    if (l > 999 || h === 93 && !s || h === null || h === 91 || De(h))
      return n(h);
    if (h === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return i = fn(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return De(h) || (s = !0), l++, e.consume(h), h === 92 ? f : c;
  }
  function f(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, c) : c(h);
  }
  function d(h) {
    return h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), o.includes(i) || o.push(i), ve(
      e,
      g,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(h);
  }
  function g(h) {
    return t(h);
  }
}
function ON(e, t, n) {
  return e.check(Vs, t, e.attempt(AN, t, n));
}
function NN(e) {
  e.exit("gfmFootnoteDefinition");
}
function MN(e, t, n) {
  const r = this;
  return ve(
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
function DN(e) {
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
  function o(l, s) {
    let a = -1;
    for (; ++a < l.length; )
      if (l[a][0] === "enter" && l[a][1].type === "strikethroughSequenceTemporary" && l[a][1]._close) {
        let u = a;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && l[a][1].end.offset - l[a][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[a][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[a][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[a][1].start)
            }, d = [
              ["enter", c, s],
              ["enter", l[u][1], s],
              ["exit", l[u][1], s],
              ["enter", f, s]
            ], g = s.parser.constructs.insideSpan.null;
            g && Rt(
              d,
              d.length,
              0,
              Fc(g, l.slice(u + 1, a), s)
            ), Rt(d, d.length, 0, [
              ["exit", f, s],
              ["enter", l[a][1], s],
              ["exit", l[a][1], s],
              ["exit", c, s]
            ]), Rt(l, u - 1, a - u + 3, d), a = u + d.length - 2;
            break;
          }
      }
    for (a = -1; ++a < l.length; )
      l[a][1].type === "strikethroughSequenceTemporary" && (l[a][1].type = "data");
    return l;
  }
  function i(l, s, a) {
    const u = this.previous, c = this.events;
    let f = 0;
    return d;
    function d(h) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? a(h) : (l.enter("strikethroughSequenceTemporary"), g(h));
    }
    function g(h) {
      const v = ju(u);
      if (h === 126)
        return f > 1 ? a(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return a(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = ju(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), s(h);
    }
  }
}
const LN = {
  flow: {
    null: {
      tokenize: zN,
      resolve: FN
    }
  }
}, n1 = {
  tokenize: BN,
  partial: !0
};
function FN(e, t) {
  let n = -1, r, o, i, l, s, a, u;
  for (; ++n < e.length; ) {
    const c = e[n][1];
    if (i && (c.type === "temporaryTableCellContent" && (l = l || n, s = n), (c.type === "tableCellDivider" || c.type === "tableRow") && s)) {
      const f = {
        type: "tableContent",
        start: e[l][1].start,
        end: e[s][1].end
      }, d = {
        type: "chunkText",
        start: f.start,
        end: f.end,
        contentType: "text"
      };
      e.splice(
        l,
        s - l + 1,
        ["enter", f, t],
        ["enter", d, t],
        ["exit", d, t],
        ["exit", f, t]
      ), n -= s - l - 3, l = void 0, s = void 0;
    }
    if (e[n][0] === "exit" && a !== void 0 && a + (u ? 0 : 1) < n && (c.type === "tableCellDivider" || c.type === "tableRow" && (a + 3 < n || e[a][1].type !== "whitespace"))) {
      const f = {
        type: o ? "tableDelimiter" : r ? "tableHeader" : "tableData",
        start: e[a][1].start,
        end: e[n][1].end
      };
      e.splice(n + (c.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        f,
        t
      ]), e.splice(a, 0, ["enter", f, t]), n += 2, a = n + 1, u = !0;
    }
    c.type === "tableRow" && (i = e[n][0] === "enter", i && (a = n + 1, u = !1)), c.type === "tableDelimiterRow" && (o = e[n][0] === "enter", o && (a = n + 1, u = !1)), c.type === "tableHead" && (r = e[n][0] === "enter");
  }
  return e;
}
function zN(e, t, n) {
  const r = this, o = [];
  let i = 0, l, s;
  return a;
  function a(_) {
    return e.enter("table")._align = o, e.enter("tableHead"), e.enter("tableRow"), _ === 124 ? u(_) : (i++, e.enter("temporaryTableCellContent"), d(_));
  }
  function u(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), l = !0, c;
  }
  function c(_) {
    return _ === null || Z(_) ? h(_) : ye(_) ? (e.enter("whitespace"), e.consume(_), f) : (l && (l = void 0, i++), _ === 124 ? u(_) : (e.enter("temporaryTableCellContent"), d(_)));
  }
  function f(_) {
    return ye(_) ? (e.consume(_), f) : (e.exit("whitespace"), c(_));
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
    return _ === null || Z(_) ? b(_) : ye(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), s = !0, o.push("none"), p) : _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o.push("left"), y) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function w(_) {
    return ye(_) ? (e.consume(_), w) : (e.exit("whitespace"), v(_));
  }
  function p(_) {
    return _ === 45 ? (e.consume(_), p) : (e.exit("tableDelimiterFiller"), _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : v(_));
  }
  function y(_) {
    return _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), s = !0, p) : n(_);
  }
  function x(_) {
    return _ === null || Z(_) ? b(_) : ye(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function b(_) {
    return e.exit("tableDelimiterRow"), !s || i !== o.length ? n(_) : _ === null ? A(_) : e.check(
      n1,
      A,
      e.attempt(
        {
          tokenize: F,
          partial: !0
        },
        ve(e, S, "linePrefix", 4),
        A
      )
    )(_);
  }
  function A(_) {
    return e.exit("table"), t(_);
  }
  function S(_) {
    return e.enter("tableBody"), $(_);
  }
  function $(_) {
    return e.enter("tableRow"), _ === 124 ? E(_) : (e.enter("temporaryTableCellContent"), T(_));
  }
  function E(_) {
    return e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), P;
  }
  function P(_) {
    return _ === null || Z(_) ? D(_) : ye(_) ? (e.enter("whitespace"), e.consume(_), R) : _ === 124 ? E(_) : (e.enter("temporaryTableCellContent"), T(_));
  }
  function R(_) {
    return ye(_) ? (e.consume(_), R) : (e.exit("whitespace"), P(_));
  }
  function T(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? O : T);
  }
  function O(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), T) : T(_);
  }
  function D(_) {
    return e.exit("tableRow"), _ === null ? z(_) : e.check(
      n1,
      z,
      e.attempt(
        {
          tokenize: F,
          partial: !0
        },
        ve(e, $, "linePrefix", 4),
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
      return _.enter("lineEnding"), _.consume(k), _.exit("lineEnding"), ve(_, N, "linePrefix");
    }
    function N(k) {
      if (r.parser.lazy[r.now().line] || k === null || Z(k))
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
function BN(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const jN = {
  tokenize: HN
}, VN = {
  text: {
    [91]: jN
  }
};
function HN(e, t, n) {
  const r = this;
  return o;
  function o(a) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(a) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), i);
  }
  function i(a) {
    return De(a) ? (e.enter("taskListCheckValueUnchecked"), e.consume(a), e.exit("taskListCheckValueUnchecked"), l) : a === 88 || a === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(a), e.exit("taskListCheckValueChecked"), l) : n(a);
  }
  function l(a) {
    return a === 93 ? (e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(a);
  }
  function s(a) {
    return Z(a) ? t(a) : ye(a) ? e.check(
      {
        tokenize: UN
      },
      t,
      n
    )(a) : n(a);
  }
}
function UN(e, t, n) {
  return ve(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function WN(e) {
  return zk([
    yN,
    PN(),
    DN(e),
    LN,
    VN
  ]);
}
function Vu(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function qN(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const cg = function(e) {
  if (e == null)
    return YN;
  if (typeof e == "string")
    return KN(e);
  if (typeof e == "object")
    return Array.isArray(e) ? QN(e) : GN(e);
  if (typeof e == "function")
    return zc(e);
  throw new Error("Expected function, string, or object as test");
};
function QN(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = cg(e[n]);
  return zc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function GN(e) {
  return zc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function KN(e) {
  return zc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function zc(e) {
  return t;
  function t(n, ...r) {
    return Boolean(
      n && typeof n == "object" && "type" in n && Boolean(e.call(this, n, ...r))
    );
  }
}
function YN() {
  return !0;
}
const XN = !0, r1 = !1, ZN = "skip", aC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = cg(t), i = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, a, u) {
    const c = s && typeof s == "object" ? s : {};
    if (typeof c.type == "string") {
      const d = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0;
      Object.defineProperty(f, "name", {
        value: "node (" + (s.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let d = [], g, h, v;
      if ((!t || o(s, a, u[u.length - 1] || null)) && (d = JN(n(s, u)), d[0] === r1))
        return d;
      if (s.children && d[0] !== ZN)
        for (h = (r ? s.children.length : -1) + i, v = u.concat(s); h > -1 && h < s.children.length; ) {
          if (g = l(s.children[h], h, v)(), g[0] === r1)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function JN(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [XN, e] : [e];
}
const eM = {}.hasOwnProperty, tM = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = cg(o.ignore || []), s = nM(i);
  let a = -1;
  for (; ++a < s.length; )
    aC(e, "text", u);
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
    const g = d[d.length - 1], h = s[a][0], v = s[a][1];
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
      let $ = v(...b, S);
      if (typeof $ == "string" && ($ = $.length > 0 ? { type: "text", value: $ } : void 0), $ !== !1 && (w !== A && x.push({
        type: "text",
        value: f.value.slice(w, A)
      }), Array.isArray($) ? x.push(...$) : $ && x.push($), w = A + b[0].length, y = !0), !h.global)
        break;
      b = h.exec(f.value);
    }
    return y ? (w < f.value.length && x.push({ type: "text", value: f.value.slice(w) }), g.children.splice(p, 1, ...x)) : x = [f], p + x.length;
  }
};
function nM(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        o1(e[n][0]),
        i1(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      eM.call(e, n) && t.push([o1(n), i1(e[n])]);
  }
  return t;
}
function o1(e) {
  return typeof e == "string" ? new RegExp(qN(e), "g") : e;
}
function i1(e) {
  return typeof e == "function" ? e : () => e;
}
const ad = "phrasing", ud = ["autolink", "link", "image", "label"], rM = {
  transforms: [cM],
  enter: {
    literalAutolink: iM,
    literalAutolinkEmail: cd,
    literalAutolinkHttp: cd,
    literalAutolinkWww: cd
  },
  exit: {
    literalAutolink: uM,
    literalAutolinkEmail: aM,
    literalAutolinkHttp: lM,
    literalAutolinkWww: sM
  }
}, oM = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: ad,
      notInConstruct: ud
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: ad,
      notInConstruct: ud
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: ad, notInConstruct: ud }
  ]
};
function iM(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function cd(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function lM(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function sM(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function aM(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function uM(e) {
  this.exit(e);
}
function cM(e) {
  tM(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, fM],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, dM]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function fM(e, t, n, r, o) {
  let i = "";
  if (!uC(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !pM(n)))
    return !1;
  const l = hM(n + r);
  if (!l[0])
    return !1;
  const s = {
    type: "link",
    title: null,
    url: i + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [s, { type: "text", value: l[1] }] : s;
}
function dM(e, t, n, r) {
  return !uC(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function pM(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function hM(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = Vu(e, "(");
  let i = Vu(e, ")");
  for (; r !== -1 && o > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function uC(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Dc(n) || Lc(n)) && (!t || n !== 47);
}
function cC(e) {
  return e.label || !e.identifier ? e.label || "" : Yk(e.identifier);
}
function mM(e, t, n) {
  const r = t.indexStack, o = e.children || [], i = t.createTracker(n), l = [];
  let s = -1;
  for (r.push(-1); ++s < o.length; ) {
    const a = o[s];
    r[r.length - 1] = s, l.push(
      i.move(
        t.handle(a, e, t, {
          before: `
`,
          after: `
`,
          ...i.current()
        })
      )
    ), a.type !== "list" && (t.bulletLastUsed = void 0), s < o.length - 1 && l.push(
      i.move(gM(a, o[s + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function gM(e, t, n, r) {
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
const vM = /\r?\n|\r/g;
function yM(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = vM.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(s) {
    n.push(t(s, o, !s));
  }
}
function fC(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function xM(e, t) {
  return l1(e, t.inConstruct, !0) && !l1(e, t.notInConstruct, !1);
}
function l1(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function dC(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let s = -1;
  for (; ++s < e.unsafe.length; ) {
    const c = e.unsafe[s];
    if (!xM(e.stack, c))
      continue;
    const f = fC(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (g ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !g && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: g, after: h });
    }
  }
  o.sort(wM);
  let a = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (s = -1; ++s < o.length; ) {
    const c = o[s];
    c < a || c >= u || c + 1 < u && o[s + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[s - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (a !== c && i.push(s1(r.slice(a, c), "\\")), a = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), a++));
  }
  return i.push(s1(r.slice(a, u), n.after)), i.join("");
}
function wM(e, t) {
  return e - t;
}
function s1(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, s = 0, a;
  for (; a = n.exec(i); )
    r.push(a.index);
  for (; ++l < r.length; )
    s !== r[l] && o.push(e.slice(s, r[l])), o.push("\\"), s = r[l];
  return o.push(e.slice(s)), o.join("");
}
function Bc(e) {
  const t = e || {}, n = t.now || {};
  let r = t.lineShift || 0, o = n.line || 1, i = n.column || 1;
  return { move: a, current: l, shift: s };
  function l() {
    return { now: { line: o, column: i }, lineShift: r };
  }
  function s(u) {
    r += u;
  }
  function a(u) {
    const c = u || "", f = c.split(/\r?\n|\r/g), d = f[f.length - 1];
    return o += f.length - 1, i = f.length === 1 ? i + d.length : 1 + d.length + r, c;
  }
}
pC.peek = TM;
function bM() {
  return {
    enter: {
      gfmFootnoteDefinition: kM,
      gfmFootnoteDefinitionLabelString: CM,
      gfmFootnoteCall: AM,
      gfmFootnoteCallString: PM
    },
    exit: {
      gfmFootnoteDefinition: $M,
      gfmFootnoteDefinitionLabelString: EM,
      gfmFootnoteCall: RM,
      gfmFootnoteCallString: _M
    }
  };
}
function SM() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: IM, footnoteReference: pC }
  };
}
function kM(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function CM() {
  this.buffer();
}
function EM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function $M(e) {
  this.exit(e);
}
function AM(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function PM() {
  this.buffer();
}
function _M(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function RM(e) {
  this.exit(e);
}
function pC(e, t, n, r) {
  const o = Bc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), s = n.enter("reference");
  return i += o.move(
    dC(n, cC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), l(), i += o.move("]"), i;
}
function TM() {
  return "[";
}
function IM(e, t, n, r) {
  const o = Bc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), s = n.enter("label");
  return i += o.move(
    dC(n, cC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), s(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    yM(mM(e, n, o.current()), OM)
  ), l(), i;
}
function OM(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function hC(e, t, n) {
  const r = t.indexStack, o = e.children || [], i = [];
  let l = -1, s = n.before;
  r.push(-1);
  let a = t.createTracker(n);
  for (; ++l < o.length; ) {
    const u = o[l];
    let c;
    if (r[r.length - 1] = l, l + 1 < o.length) {
      let f = t.handle.handlers[o[l + 1].type];
      f && f.peek && (f = f.peek), c = f ? f(o[l + 1], e, t, {
        before: "",
        after: "",
        ...a.current()
      }).charAt(0) : "";
    } else
      c = n.after;
    i.length > 0 && (s === "\r" || s === `
`) && u.type === "html" && (i[i.length - 1] = i[i.length - 1].replace(
      /(\r?\n|\r)$/,
      " "
    ), s = " ", a = t.createTracker(n), a.move(i.join(""))), i.push(
      a.move(
        t.handle(u, e, t, {
          ...a.current(),
          before: s,
          after: c
        })
      )
    ), s = i[i.length - 1].slice(-1);
  }
  return r.pop(), i.join("");
}
const NM = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
mC.peek = zM;
const MM = {
  canContainEols: ["delete"],
  enter: { strikethrough: LM },
  exit: { strikethrough: FM }
}, DM = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: NM
    }
  ],
  handlers: { delete: mC }
};
function LM(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function FM(e) {
  this.exit(e);
}
function mC(e, t, n, r) {
  const o = Bc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += hC(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function zM() {
  return "~";
}
gC.peek = BM;
function gC(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], s = fC(l);
    let a;
    if (!!l.atBreak)
      for (; a = s.exec(r); ) {
        let u = a.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
  }
  return o + r + o;
}
function BM() {
  return "`";
}
function jM(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || HM, o = [], i = [], l = [], s = [];
  let a = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > a && (a = e[u].length); ++w < e[u].length; ) {
      const p = VM(e[u][w]);
      if (t.alignDelimiters !== !1) {
        const y = r(p);
        v[w] = y, (s[w] === void 0 || y > s[w]) && (s[w] = y);
      }
      h.push(p);
    }
    i[u] = h, l[u] = v;
  }
  let c = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++c < a; )
      o[c] = a1(n[c]);
  else {
    const h = a1(n);
    for (; ++c < a; )
      o[c] = h;
  }
  c = -1;
  const f = [], d = [];
  for (; ++c < a; ) {
    const h = o[c];
    let v = "", w = "";
    h === 99 ? (v = ":", w = ":") : h === 108 ? v = ":" : h === 114 && (w = ":");
    let p = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - v.length - w.length
    );
    const y = v + "-".repeat(p) + w;
    t.alignDelimiters !== !1 && (p = v.length + p + w.length, p > s[c] && (s[c] = p), d[c] = p), f[c] = y;
  }
  i.splice(1, 0, f), l.splice(1, 0, d), u = -1;
  const g = [];
  for (; ++u < i.length; ) {
    const h = i[u], v = l[u];
    c = -1;
    const w = [];
    for (; ++c < a; ) {
      const p = h[c] || "";
      let y = "", x = "";
      if (t.alignDelimiters !== !1) {
        const b = s[c] - (v[c] || 0), A = o[c];
        A === 114 ? y = " ".repeat(b) : A === 99 ? b % 2 ? (y = " ".repeat(b / 2 + 0.5), x = " ".repeat(b / 2 - 0.5)) : (y = " ".repeat(b / 2), x = y) : x = " ".repeat(b);
      }
      t.delimiterStart !== !1 && !c && w.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && p === "") && (t.delimiterStart !== !1 || c) && w.push(" "), t.alignDelimiters !== !1 && w.push(y), w.push(p), t.alignDelimiters !== !1 && w.push(x), t.padding !== !1 && w.push(" "), (t.delimiterEnd !== !1 || c !== a - 1) && w.push("|");
    }
    g.push(
      t.delimiterEnd === !1 ? w.join("").replace(/ +$/, "") : w.join("")
    );
  }
  return g.join(`
`);
}
function VM(e) {
  return e == null ? "" : String(e);
}
function HM(e) {
  return e.length;
}
function a1(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const UM = {
  enter: {
    table: WM,
    tableData: u1,
    tableHeader: u1,
    tableRow: QM
  },
  exit: {
    codeText: GM,
    table: qM,
    tableData: fd,
    tableHeader: fd,
    tableRow: fd
  }
};
function WM(e) {
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
function qM(e) {
  this.exit(e), this.setData("inTable");
}
function QM(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function fd(e) {
  this.exit(e);
}
function u1(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function GM(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, KM));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function KM(e, t) {
  return t === "|" ? t : e;
}
function YM(e) {
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
      tableRow: s,
      tableCell: a,
      inlineCode: d
    }
  };
  function l(g, h, v, w) {
    return u(
      c(g, v, w),
      g.align
    );
  }
  function s(g, h, v, w) {
    const p = f(g, v, w), y = u([p]);
    return y.slice(0, y.indexOf(`
`));
  }
  function a(g, h, v, w) {
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = hC(g, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(g, h) {
    return jM(g, {
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
      y[p] = a(
        w[p],
        g,
        h,
        v
      );
    return x(), y;
  }
  function d(g, h, v) {
    let w = gC(g, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function XM(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function ZM(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function JM(e, t, n, r) {
  const o = ZM(n);
  let i = n.bulletCurrent || XM(n);
  t && t.type === "list" && t.ordered && (i = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + i);
  let l = i.length + 1;
  (o === "tab" || o === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const s = n.createTracker(r);
  s.move(i + " ".repeat(l - i.length)), s.shift(l);
  const a = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, s.current()),
    c
  );
  return a(), u;
  function c(f, d, g) {
    return d ? (g ? "" : " ".repeat(l)) + f : (g ? i : i + " ".repeat(l - i.length)) + f;
  }
}
const e9 = {
  exit: {
    taskListCheckValueChecked: c1,
    taskListCheckValueUnchecked: c1,
    paragraph: n9
  }
}, t9 = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: r9 }
};
function c1(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function n9(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1], r = n.children[0];
    if (r && r.type === "text") {
      const o = t.children;
      let i = -1, l;
      for (; ++i < o.length; ) {
        const s = o[i];
        if (s.type === "paragraph") {
          l = s;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function r9(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", s = Bc(r);
  i && s.move(l);
  let a = JM(e, t, n, {
    ...r,
    ...s.current()
  });
  return i && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;
  function u(c) {
    return c + l;
  }
}
function o9() {
  return [
    rM,
    bM(),
    MM,
    UM,
    e9
  ];
}
function i9(e) {
  return {
    extensions: [
      oM,
      SM(),
      DM,
      YM(e),
      t9
    ]
  };
}
function l9(e = {}) {
  const t = this.data();
  n("micromarkExtensions", WN(e)), n("fromMarkdownExtensions", o9()), n("toMarkdownExtensions", i9(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function s9(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function a9(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function u9(e, t) {
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
function c9(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function f9(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vC(e, t) {
  const n = String(t.identifier).toUpperCase(), r = Li(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
  let i;
  o === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, i = e.footnoteOrder.length) : (e.footnoteCounts[n]++, i = o + 1);
  const l = e.footnoteCounts[n], s = {
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
  e.patch(t, s);
  const a = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, a), e.applyData(t, a);
}
function d9(e, t) {
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
  }, vC(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function p9(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function h9(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function yC(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function m9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return yC(e, t);
  const r = { src: Li(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function g9(e, t) {
  const n = { src: Li(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function v9(e, t) {
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
function y9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return yC(e, t);
  const r = { href: Li(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function x9(e, t) {
  const n = { href: Li(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function w9(e, t, n) {
  const r = e.all(t), o = n ? b9(n) : xC(t), i = {}, l = [];
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
  let s = -1;
  for (; ++s < r.length; ) {
    const c = r[s];
    (o || s !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !o ? l.push(...c.children) : l.push(c);
  }
  const a = r[r.length - 1];
  a && (o || a.type !== "element" || a.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: i, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function b9(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = xC(n[r]);
  }
  return t;
}
function xC(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function S9(e, t) {
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
function k9(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function C9(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function E9(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const fg = wC("start"), dg = wC("end");
function $9(e) {
  return { start: fg(e), end: dg(e) };
}
function wC(e) {
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
function A9(e, t) {
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
    }, s = fg(t.children[1]), a = dg(t.children[t.children.length - 1]);
    s.line && a.line && (l.position = { start: s, end: a }), o.push(l);
  }
  const i = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function P9(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, s = l ? l.length : t.children.length;
  let a = -1;
  const u = [];
  for (; ++a < s; ) {
    const f = t.children[a], d = {}, g = l ? l[a] : void 0;
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
function _9(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const f1 = 9, d1 = 32;
function R9(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      p1(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(p1(t.slice(o), o > 0, !1)), i.join("");
}
function p1(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === f1 || i === d1; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === f1 || i === d1; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function T9(e, t) {
  const n = { type: "text", value: R9(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function I9(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const O9 = {
  blockquote: s9,
  break: a9,
  code: u9,
  delete: c9,
  emphasis: f9,
  footnoteReference: vC,
  footnote: d9,
  heading: p9,
  html: h9,
  imageReference: m9,
  image: g9,
  inlineCode: v9,
  linkReference: y9,
  link: x9,
  listItem: w9,
  list: S9,
  paragraph: k9,
  root: C9,
  strong: E9,
  table: A9,
  tableCell: _9,
  tableRow: P9,
  text: T9,
  thematicBreak: I9,
  toml: Ea,
  yaml: Ea,
  definition: Ea,
  footnoteDefinition: Ea
};
function Ea() {
  return null;
}
const bC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), aC(e, t, o, r);
  function o(i, l) {
    const s = l[l.length - 1];
    return n(
      i,
      s ? s.children.indexOf(i) : null,
      s
    );
  }
};
function N9(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const h1 = {}.hasOwnProperty;
function M9(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return bC(e, "definition", (r) => {
    const o = m1(r.identifier);
    o && !h1.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = m1(r);
    return o && h1.call(t, o) ? t[o] : null;
  }
}
function m1(e) {
  return String(e || "").toUpperCase();
}
const Hu = {}.hasOwnProperty;
function D9(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...O9, ...n.handlers }, l.definition = M9(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = L9, l.applyData = F9, l.one = s, l.all = a, l.wrap = B9, l.augment = i, bC(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    Hu.call(o, c) || (o[c] = u);
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
      N9(f) || (c.position = { start: fg(f), end: dg(f) });
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
  function s(u, c) {
    return SC(l, u, c);
  }
  function a(u) {
    return pg(l, u);
  }
}
function L9(e, t) {
  e.position && (t.position = $9(e));
}
function F9(e, t) {
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
function SC(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return Hu.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: pg(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : z9(e, t);
}
function pg(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = SC(e, r[o], t);
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
function z9(e, t) {
  const n = t.data || {}, r = "value" in t && !(Hu.call(n, "hProperties") || Hu.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: pg(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function B9(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function j9(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = Li(i.toLowerCase());
    let s = 0;
    const a = [];
    for (; ++s <= e.footnoteCounts[i]; ) {
      const f = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + l + (s > 1 ? "-" + s : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      s > 1 && f.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(s) }]
      }), a.length > 0 && a.push({ type: "text", value: " " }), a.push(f);
    }
    const u = o[o.length - 1];
    if (u && u.type === "element" && u.tagName === "p") {
      const f = u.children[u.children.length - 1];
      f && f.type === "text" ? f.value += " " : u.children.push({ type: "text", value: " " }), u.children.push(...a);
    } else
      o.push(...a);
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
function kC(e, t) {
  const n = D9(e, t), r = n.one(e, null), o = j9(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const V9 = function(e, t) {
  return e && "run" in e ? U9(e, t) : W9(e || t);
}, H9 = V9;
function U9(e, t) {
  return (n, r, o) => {
    e.run(kC(n, t), r, (i) => {
      o(i);
    });
  };
}
function W9(e) {
  return (t) => kC(t, e);
}
class Hs {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Hs.prototype.property = {};
Hs.prototype.normal = {};
Hs.prototype.space = null;
function CC(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Hs(n, r, t);
}
function ah(e) {
  return e.toLowerCase();
}
class Kt {
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Kt.prototype.space = null;
Kt.prototype.boolean = !1;
Kt.prototype.booleanish = !1;
Kt.prototype.overloadedBoolean = !1;
Kt.prototype.number = !1;
Kt.prototype.commaSeparated = !1;
Kt.prototype.spaceSeparated = !1;
Kt.prototype.commaOrSpaceSeparated = !1;
Kt.prototype.mustUseProperty = !1;
Kt.prototype.defined = !1;
let q9 = 0;
const le = $o(), je = $o(), EC = $o(), H = $o(), Ae = $o(), ci = $o(), Ct = $o();
function $o() {
  return 2 ** ++q9;
}
const uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: je,
  overloadedBoolean: EC,
  number: H,
  spaceSeparated: Ae,
  commaSeparated: ci,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), dd = Object.keys(uh);
class hg extends Kt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), g1(this, "space", o), typeof r == "number")
      for (; ++i < dd.length; ) {
        const l = dd[i];
        g1(this, dd[i], (r & uh[l]) === uh[l]);
      }
  }
}
hg.prototype.defined = !0;
function g1(e, t, n) {
  n && (e[t] = n);
}
const Q9 = {}.hasOwnProperty;
function Fi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Q9.call(e.properties, r)) {
      const o = e.properties[r], i = new hg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[ah(r)] = r, n[ah(i.attribute)] = r;
    }
  return new Hs(t, n, e.space);
}
const $C = Fi({
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
}), AC = Fi({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function PC(e, t) {
  return t in e ? e[t] : t;
}
function _C(e, t) {
  return PC(e, t.toLowerCase());
}
const RC = Fi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: _C,
  properties: { xmlns: null, xmlnsXLink: null }
}), TC = Fi({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: je,
    ariaAutoComplete: null,
    ariaBusy: je,
    ariaChecked: je,
    ariaColCount: H,
    ariaColIndex: H,
    ariaColSpan: H,
    ariaControls: Ae,
    ariaCurrent: null,
    ariaDescribedBy: Ae,
    ariaDetails: null,
    ariaDisabled: je,
    ariaDropEffect: Ae,
    ariaErrorMessage: null,
    ariaExpanded: je,
    ariaFlowTo: Ae,
    ariaGrabbed: je,
    ariaHasPopup: null,
    ariaHidden: je,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ae,
    ariaLevel: H,
    ariaLive: null,
    ariaModal: je,
    ariaMultiLine: je,
    ariaMultiSelectable: je,
    ariaOrientation: null,
    ariaOwns: Ae,
    ariaPlaceholder: null,
    ariaPosInSet: H,
    ariaPressed: je,
    ariaReadOnly: je,
    ariaRelevant: null,
    ariaRequired: je,
    ariaRoleDescription: Ae,
    ariaRowCount: H,
    ariaRowIndex: H,
    ariaRowSpan: H,
    ariaSelected: je,
    ariaSetSize: H,
    ariaSort: null,
    ariaValueMax: H,
    ariaValueMin: H,
    ariaValueNow: H,
    ariaValueText: null,
    role: null
  }
}), G9 = Fi({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: _C,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: ci,
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
    contentEditable: je,
    controls: le,
    controlsList: Ae,
    coords: H | ci,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: EC,
    draggable: je,
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
    spellCheck: je,
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
    value: je,
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
    scrolling: je,
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
}), K9 = Fi({
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
  transform: PC,
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
    g1: ci,
    g2: ci,
    glyphName: ci,
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
}), Y9 = /^data[-\w.:]+$/i, v1 = /-[a-z]/g, X9 = /[A-Z]/g;
function Z9(e, t) {
  const n = ah(t);
  let r = t, o = Kt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Y9.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(v1, eD);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!v1.test(i)) {
        let l = i.replace(X9, J9);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = hg;
  }
  return new o(r, t);
}
function J9(e) {
  return "-" + e.toLowerCase();
}
function eD(e) {
  return e.charAt(1).toUpperCase();
}
const tD = CC([AC, $C, RC, TC, G9], "html"), IC = CC([AC, $C, RC, TC, K9], "svg"), nD = [
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
], y1 = {}.hasOwnProperty;
function rD(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const s = r.handlers;
    if (o && y1.call(o, e)) {
      const a = String(o[e]);
      l = y1.call(s, a) ? s[a] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function oD(e, t) {
  if (e = e.replace(
    t.subset ? iD(t.subset) : /["&'<>`]/g,
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
function iD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function lD(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function sD(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const aD = [
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
], pd = {
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
}, uD = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], OC = {}.hasOwnProperty, ch = {};
let $a;
for ($a in pd)
  OC.call(pd, $a) && (ch[pd[$a]] = $a);
function cD(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (OC.call(ch, o)) {
    const i = ch[o], l = "&" + i;
    return n && aD.includes(i) && !uD.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function fD(e, t, n) {
  let r = lD(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = cD(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = sD(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function fi(e, t) {
  return oD(e, Object.assign({ format: fD }, t));
}
function dD(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + fi(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, o) + "-->";
  function o(i) {
    return fi(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function pD(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function hD(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function mD(e) {
  return e.join(" ").trim();
}
function mg(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const We = MC(1), NC = MC(-1);
function MC(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, s = i && i[l];
    if (!o)
      for (; s && mg(s); )
        l += e, s = i[l];
    return s;
  }
}
const gD = {}.hasOwnProperty;
function DC(e) {
  return t;
  function t(n, r, o) {
    return gD.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const gg = DC({
  html: vD,
  head: hd,
  body: yD,
  p: xD,
  li: wD,
  dt: bD,
  dd: SD,
  rt: x1,
  rp: x1,
  optgroup: kD,
  option: CD,
  menuitem: ED,
  colgroup: hd,
  caption: hd,
  thead: $D,
  tbody: AD,
  tfoot: PD,
  tr: _D,
  td: w1,
  th: w1
});
function hd(e, t, n) {
  const r = We(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && mg(r.value.charAt(0)));
}
function vD(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function yD(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function xD(e, t, n) {
  const r = We(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function wD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function bD(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function SD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function x1(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function kD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function CD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function ED(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function $D(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function AD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function PD(e, t, n) {
  return !We(n, t);
}
function _D(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function w1(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const RD = DC({
  html: TD,
  head: ID,
  body: OD,
  colgroup: ND,
  tbody: MD
});
function TD(e) {
  const t = We(e, -1);
  return !t || t.type !== "comment";
}
function ID(e) {
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
function OD(e) {
  const t = We(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && mg(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function ND(e, t, n) {
  const r = NC(n, t), o = We(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && gg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function MD(e, t, n) {
  const r = NC(n, t), o = We(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && gg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const Aa = {
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
function DD(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const s = [];
  let a;
  o.space === "html" && e.tagName === "svg" && (r.schema = IC);
  const u = LD(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !RD(e, t, n)) && (s.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (a = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || a === "/" || a && a !== '"' && a !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(c), !l && (!i || !gg(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function LD(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = FD(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function FD(e, t, n) {
  const r = Z9(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, s;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const a = fi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: Aa.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? hD : mD)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? a : (e.settings.preferUnquoted && (s = fi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: Aa.unquoted[o][i],
      attribute: !0
    })
  )), s !== n && (e.settings.quoteSmart && Vu(n, l) > Vu(n, e.alternative) && (l = e.alternative), s = l + fi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? Aa.single : Aa.double)[o][i],
      attribute: !0
    })
  ) + l), a + (s && "=" + s));
}
function LC(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : fi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function zD(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : LC(e, t, n, r);
}
function BD(e, t, n, r) {
  return r.all(e);
}
const jD = rD("type", {
  invalid: VD,
  unknown: HD,
  handlers: { comment: dD, doctype: pD, element: DD, raw: zD, root: BD, text: LC }
});
function VD(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function HD(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function UD(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: WD,
    all: qD,
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
      voids: n.voids || nD,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? IC : tD,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function WD(e, t, n) {
  return jD(e, t, n, this);
}
function qD(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function QD(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return UD(o, n);
  }
}
async function GD(e) {
  if (!e)
    return "";
  const t = await o7().use(iN).use(gN).use(l9).use(H9).use(QD).process(e);
  return String(t);
}
const KD = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    GD(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, YD = (e) => {
  const t = KD(e);
  return /* @__PURE__ */ B("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, XD = ({
  message: e
}) => /* @__PURE__ */ pe("div", {
  className: $i("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ B(YD, {
      content: e.text
    })
  })]
}), ZD = (e) => {
  var s;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r
  } = ys(), [o] = m.exports.useState(e.action), i = (s = r[o]) != null ? s : [];
  function l() {
    var u, c, f;
    const a = ((c = (u = t.current) == null ? void 0 : u.children.length) != null ? c : 1) - 1;
    ((f = t.current) == null ? void 0 : f.children[a]) && n.current && setTimeout(() => {
      HO(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return ys.subscribe((a, u) => {
    var c, f;
    ((c = u.conventions[o]) == null ? void 0 : c.length) !== ((f = a.conventions[o]) == null ? void 0 : f.length) && l();
  }), m.exports.useEffect(() => {
    l();
  }, []), /* @__PURE__ */ B("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ pe(zO, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ B(BO, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ pe("div", {
          ref: t,
          children: [i.map((a, u) => /* @__PURE__ */ B(XD, {
            message: a
          }, u)), /* @__PURE__ */ B("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ B(Sy, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ B(ky, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ B(Sy, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ B(ky, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, vg = (e) => e.replace("-page", "");
function fh(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? fh(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const JD = { run: (e) => e() }, eL = () => JD, FC = typeof console.createTask < "u" ? console.createTask : eL;
function tL(e, t) {
  const n = t.shift(), r = FC(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function nL(e, t) {
  const n = t.shift(), r = FC(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function md(e, t) {
  for (const n of [...e])
    n(t);
}
class rL {
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
    const n = fh(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = fh(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(tL, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(nL, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && md(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && md(this._after, o);
    }) : (this._after && o && md(this._after, o), i);
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
function oL() {
  return new rL();
}
const zC = oL(), BC = (e, t = {}) => {
  const n = () => {
    const r = setInterval(() => {
      e.current && (e.current.focus(), clearInterval(r));
    }, 10);
  };
  t.name && zC.hook(t.name, n), n();
}, iL = gk();
function lL() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [s, a] = m.exports.useState([Xr]), u = s[s.length - 1], [c, f] = m.exports.useState(!1), {
    upsertConventions: d
  } = ys(), {
    open: g,
    setOpen: h,
    toggle: v,
    updateChatOpen: w
  } = Mu(), p = m.exports.useCallback(() => {
    a((E) => {
      const P = [...E];
      return P.splice(-1, 1), P;
    }), zC.callHook("command-input");
  }, []);
  function y() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const x = m.exports.useCallback((E) => {
    t(E);
  }, []), b = m.exports.useCallback(async (E, P) => {
    if (console.log("handleValueSelect", E, P), E.endsWith("-page")) {
      a((R) => [...R, E]);
      return;
    }
    if (E === si) {
      f(!0);
      const R = await vl(Zf, {
        text: P == null ? void 0 : P.text,
        action: si
      }, "background");
      d(si, R.message), f(!1);
    }
    if (E === so) {
      f(!0);
      const R = await vl(Zf, {
        text: P == null ? void 0 : P.text,
        action: so
      }, "background");
      d(so, R.message), f(!1);
    }
    if (E === ai) {
      const R = new Nu({
        blankReplacement: () => ""
      });
      R.remove(["script", "link", "nav", "footer", "img", "iframe", "audio", "canvas", "figure", "ins", "del", "next-route-announcer"]);
      const T = R.turndown(document.body), O = await vl(Zf, {
        text: T,
        action: ai
      }, "background");
      d(ai, O.message);
    }
    t("");
  }, [d]);
  m.exports.useEffect(() => {
    const E = (P) => {
      if (P.key === "j" && P.metaKey && (v(), u === Du && p(), w(!1)), P.key === "Escape" && u === Xr && !Mu.getState().subCommandOpen) {
        h(!1), w(!1);
        return;
      }
      P.key === "Escape" && u !== Xr && (p(), setTimeout(() => {
        var R;
        (R = i.current) == null || R.focus();
      }, 100));
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [w, u, p, v, h]), BC(i, {
    name: "command-input"
  });
  const A = u === Xr, S = u === Lu || u === Zp, $ = u === Lu;
  return /* @__PURE__ */ pe(Xn, {
    children: [/* @__PURE__ */ B(RP, {
      open: g,
      children: /* @__PURE__ */ B(TP, {
        container: r.current,
        children: /* @__PURE__ */ B(IP, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ pe(ln, {
            ref: o,
            value: e,
            onValueChange: x,
            loop: !0,
            children: [/* @__PURE__ */ B("div", {
              "cmdk-raycast-top-shine": ""
            }), /* @__PURE__ */ pe("div", {
              className: "flex items-center justify-between px-3 pt-1",
              children: [/* @__PURE__ */ B("div", {
                className: "flex items-center justify-start gap-2",
                children: s.map((E) => /* @__PURE__ */ B("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: vg(E)
                }, E))
              }), $ && /* @__PURE__ */ B(bO, {
                container: r
              })]
            }), /* @__PURE__ */ B(ln.Input, {
              ref: (E) => {
                i.current = E;
              },
              onValueChange: (E) => {
                n.current = E;
              },
              autoFocus: !0,
              tabIndex: 1,
              className: $i({
                hidden: !A
              }),
              placeholder: "Search for commands...",
              onKeyDown: (E) => {
                var P;
                E.key === "Enter" && y(), !(u === Xr || ((P = n.current) == null ? void 0 : P.length)) && E.key === "Backspace" && (E.preventDefault(), p(), y());
              }
            }, "cmdk-input"), A && /* @__PURE__ */ B("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ pe(ln.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === Xr && /* @__PURE__ */ B(sL, {
                onSelect: b
              }), u === Du && /* @__PURE__ */ B(aL, {
                onExit: p
              }), S && /* @__PURE__ */ B(uL, {
                page: u
              })]
            }), /* @__PURE__ */ pe("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [S && /* @__PURE__ */ B(cL, {
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
              }), /* @__PURE__ */ B("hr", {}), /* @__PURE__ */ B(fL, {
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
function sL({
  onSelect: e
}) {
  const {
    clear: t
  } = ys();
  return /* @__PURE__ */ pe(Xn, {
    children: [/* @__PURE__ */ B(ln.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ pe(ln.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ pe(ll, {
        isCommand: !0,
        value: "clear-storage",
        onSelect: () => {
          t(), iL.clear();
        },
        children: [/* @__PURE__ */ B(SO, {}), "Clear Storage"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        onSelect: () => e(Du),
        value: Du,
        children: [/* @__PURE__ */ B(kO, {}), "Config"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        onSelect: () => e(Zp),
        value: Zp,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        onSelect: () => e(Lu),
        value: Lu,
        children: [/* @__PURE__ */ B(GT, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        value: ai,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-notes/0.8 text-mayumi-gray-1200"
        }), "Summary"]
      })]
    })]
  });
}
function aL(e) {
  const t = vk();
  return /* @__PURE__ */ B("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ B(Km, {
      light: !0,
      className: "w-1/2",
      value: t.OPENAI_API_KEY,
      onKeyDown: (n) => {
        var r;
        return n.key === "Enter" && (t.set({
          [QT]: n.currentTarget.value
        }), (r = e.onExit) == null || r.call(e)), !1;
      }
    })
  });
}
function uL(e) {
  return /* @__PURE__ */ B(ZD, {
    action: vg(e.page)
  });
}
function cL(e) {
  const [t, n] = m.exports.useState(""), r = m.exports.useRef(!1), o = m.exports.useRef(null), i = m.exports.useRef(""), l = (s) => {
    if (s.key === "Enter" && r.current === !1) {
      s.preventDefault();
      const a = vg(e.page);
      e.onSendMessage(a, {
        text: i.current
      }), i.current = "", o.current.value = "", n(""), console.log("ChatInput", o.current);
    }
  };
  return BC(o, {
    name: "chat-input"
  }), /* @__PURE__ */ B(Km, {
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
    onChange: (s) => {
      n(s.target.value), i.current = s.target.value;
    },
    onKeyDown: l
  }, "cmdk-ai-input");
}
function fL({
  inputRef: e,
  listRef: t,
  selectedValue: n,
  onSelect: r
}) {
  const {
    subCommandOpen: o,
    toggleSubCommand: i,
    setSubCommandOpen: l
  } = Mu(), [, s] = m.exports.useState(), a = m.exports.useRef(null), u = n !== Xr;
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
  }, [o, t]), /* @__PURE__ */ pe(yP, {
    open: o,
    onOpenChange: (c) => {
      !u || l(c);
    },
    modal: !0,
    children: [/* @__PURE__ */ pe(xP, {
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
    }), /* @__PURE__ */ B(wP, {
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
      children: /* @__PURE__ */ pe(ln, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ B(ln.List, {
          children: /* @__PURE__ */ pe(ln.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [n === si && /* @__PURE__ */ B(dL, {
              onSelect: r
            }), n === so && /* @__PURE__ */ B(pL, {
              onSelect: r
            }), n === ai && /* @__PURE__ */ B(hL, {
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ B(ln.Input, {
          autoFocus: !0,
          onValueChange: s,
          ref: a,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function dL({
  onSelect: e
}) {
  var n;
  const {
    search: t
  } = Qn((r) => r);
  return /* @__PURE__ */ pe(Xn, {
    children: [/* @__PURE__ */ B(Uu, {
      value: "search-input",
      onSelect: () => {
        e(si, {
          text: my()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: (n = my()) != null ? n : "Search input"
      })
    }), /* @__PURE__ */ B(Uu, {
      onSelect: () => {
        e(si, {
          text: t
        });
      },
      value: t || "...",
      shortcut: "\u2318 \u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: t || "..."
      })
    })]
  });
}
function pL({
  onSelect: e
}) {
  const {
    search: t
  } = Qn((n) => n);
  return /* @__PURE__ */ B(Xn, {
    children: /* @__PURE__ */ B(Uu, {
      onSelect: () => {
        e(so, {
          text: t
        });
      },
      value: t || "...",
      shortcut: "\u2318 \u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: t || "..."
      })
    })
  });
}
function hL({
  onSelect: e
}) {
  const {
    search: t
  } = Qn((n) => n);
  return /* @__PURE__ */ B(Xn, {
    children: /* @__PURE__ */ B(Uu, {
      onSelect: () => {
        e(ai, {
          text: t
        });
      },
      value: t || "...",
      shortcut: "\u2318 \u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: "Summary full page"
      })
    })
  });
}
function ll({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1
}) {
  return /* @__PURE__ */ pe(ln.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ B("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function Uu({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ pe(ln.Item, {
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
var yg = Ws(), oe = (e) => Us(e, yg), xg = Ws();
oe.write = (e) => Us(e, xg);
var jc = Ws();
oe.onStart = (e) => Us(e, jc);
var wg = Ws();
oe.onFrame = (e) => Us(e, wg);
var bg = Ws();
oe.onFinish = (e) => Us(e, bg);
var di = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = di.findIndex((l) => l.cancel == r);
    ~i && di.splice(i, 1), Sr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return di.splice(jC(n), 0, o), Sr += 1, VC(), o;
};
var jC = (e) => ~(~di.findIndex((t) => t.time > e) || ~di.length);
oe.cancel = (e) => {
  jc.delete(e), wg.delete(e), bg.delete(e), yg.delete(e), xg.delete(e);
};
oe.sync = (e) => {
  dh = !0, oe.batchedUpdates(e), dh = !1;
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
    jc.delete(n), t = null;
  }, r;
};
var Sg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => Sg = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : UC();
};
var br = -1, Sr = 0, dh = !1;
function Us(e, t) {
  dh ? (t.delete(e), e(0)) : (t.add(e), VC());
}
function VC() {
  br < 0 && (br = 0, oe.frameLoop !== "demand" && Sg(HC));
}
function mL() {
  br = -1;
}
function HC() {
  ~br && (Sg(HC), oe.batchedUpdates(UC));
}
function UC() {
  let e = br;
  br = oe.now();
  let t = jC(br);
  if (t && (WC(di.splice(0, t), (n) => n.handler()), Sr -= t), !Sr) {
    mL();
    return;
  }
  jc.flush(), yg.flush(e ? Math.min(64, br - e) : 16.667), wg.flush(), xg.flush(), bg.flush();
}
function Ws() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    Sr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return Sr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), Sr -= t.size, WC(t, (r) => r(n) && e.add(r)), Sr += e.size, t = e);
  } };
}
function WC(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
var gL = Object.defineProperty, vL = (e, t) => {
  for (var n in t)
    gL(e, n, { get: t[n], enumerable: !0 });
}, pn = {};
vL(pn, { assign: () => xL, colors: () => Ir, createStringInterpolator: () => Cg, skipAnimation: () => QC, to: () => qC, willAdvance: () => Eg });
function ph() {
}
var yL = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
function Mn(e, t) {
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
var me = (e, t) => e.forEach(t);
function An(e, t, n) {
  if (U.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Pt = (e) => U.und(e) ? [] : U.arr(e) ? e : [e];
function Ll(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), me(n, t);
  }
}
var gl = (e, ...t) => Ll(e, (n) => n(...t)), kg = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Cg, qC, Ir = null, QC = !1, Eg = ph, xL = (e) => {
  e.to && (qC = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Ir = e.colors), e.skipAnimation != null && (QC = e.skipAnimation), e.createStringInterpolator && (Cg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (Eg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
}, Fl = /* @__PURE__ */ new Set(), Ht = [], gd = [], Wu = 0, Vc = { get idle() {
  return !Fl.size && !Ht.length;
}, start(e) {
  Wu > e.priority ? (Fl.add(e), oe.onStart(wL)) : (GC(e), oe(hh));
}, advance: hh, sort(e) {
  if (Wu)
    oe.onFrame(() => Vc.sort(e));
  else {
    let t = Ht.indexOf(e);
    ~t && (Ht.splice(t, 1), KC(e));
  }
}, clear() {
  Ht = [], Fl.clear();
} };
function wL() {
  Fl.forEach(GC), Fl.clear(), oe(hh);
}
function GC(e) {
  Ht.includes(e) || KC(e);
}
function KC(e) {
  Ht.splice(bL(Ht, (t) => t.priority > e.priority), 0, e);
}
function hh(e) {
  let t = gd;
  for (let n = 0; n < Ht.length; n++) {
    let r = Ht[n];
    Wu = r.priority, r.idle || (Eg(r), r.advance(e), r.idle || t.push(r));
  }
  return Wu = 0, gd = Ht, gd.length = 0, Ht = t, Ht.length > 0;
}
function bL(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var SL = (e, t, n) => Math.min(Math.max(n, e), t), kL = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, an = "[-+]?\\d*\\.?\\d+", qu = an + "%";
function Hc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var CL = new RegExp("rgb" + Hc(an, an, an)), EL = new RegExp("rgba" + Hc(an, an, an, an)), $L = new RegExp("hsl" + Hc(an, qu, qu)), AL = new RegExp("hsla" + Hc(an, qu, qu, an)), PL = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, _L = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, RL = /^#([0-9a-fA-F]{6})$/, TL = /^#([0-9a-fA-F]{8})$/;
function IL(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = RL.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ir && Ir[e] !== void 0 ? Ir[e] : (t = CL.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | 255) >>> 0 : (t = EL.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | k1(t[4])) >>> 0 : (t = PL.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = TL.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = _L.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = $L.exec(e)) ? (b1(S1(t[1]), Pa(t[2]), Pa(t[3])) | 255) >>> 0 : (t = AL.exec(e)) ? (b1(S1(t[1]), Pa(t[2]), Pa(t[3])) | k1(t[4])) >>> 0 : null;
}
function vd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function b1(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = vd(o, r, e + 1 / 3), l = vd(o, r, e), s = vd(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Do(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function S1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function k1(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Pa(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function C1(e) {
  let t = IL(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var ws = (e, t, n) => {
  if (U.fun(e))
    return e;
  if (U.arr(e))
    return ws({ range: e, output: t, extrapolate: n });
  if (U.str(e.output[0]))
    return Cg(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", a = r.easing || ((u) => u);
  return (u) => {
    let c = NL(u, i);
    return OL(u, i[c], i[c + 1], o[c], o[c + 1], a, l, s, r.map);
  };
};
function OL(e, t, n, r, o, i, l, s, a) {
  let u = a ? a(e) : e;
  if (u < t) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = n);
  }
  return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u = u + r : u = u * (o - r) + r, u);
}
function NL(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var ML = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return SL(0, 1, o / e);
}, Qu = 1.70158, _a = Qu * 1.525, E1 = Qu + 1, $1 = 2 * Math.PI / 3, A1 = 2 * Math.PI / 4.5, Ra = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, DL = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => E1 * e * e * e - Qu * e * e, easeOutBack: (e) => 1 + E1 * Math.pow(e - 1, 3) + Qu * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((_a + 1) * 2 * e - _a) / 2 : (Math.pow(2 * e - 2, 2) * ((_a + 1) * (e * 2 - 2) + _a) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * $1), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * $1) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * A1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * A1) / 2 + 1, easeInBounce: (e) => 1 - Ra(1 - e), easeOutBounce: Ra, easeInOutBounce: (e) => e < 0.5 ? (1 - Ra(1 - 2 * e)) / 2 : (1 + Ra(2 * e - 1)) / 2, steps: ML }, Ai = Symbol.for("FluidValue.get"), go = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Ai]), yt = (e) => e && e[Ai] ? e[Ai]() : e, P1 = (e) => e[go] || null;
function LL(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function bs(e, t) {
  let n = e[go];
  n && n.forEach((r) => {
    LL(r, t);
  });
}
var jF, VF, q1, YC = (q1 = class {
  constructor(e) {
    K(this, jF);
    K(this, VF);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    FL(this, e);
  }
}, jF = Ai, VF = go, q1), FL = (e, t) => XC(e, Ai, t);
function zi(e, t) {
  if (e[Ai]) {
    let n = e[go];
    n || XC(e, go, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Ss(e, t) {
  let n = e[go];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[go] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var XC = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), Ga = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, zL = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, _1 = new RegExp(`(${Ga.source})(%|[a-z]+)`, "i"), BL = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Uc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, ZC = (e) => {
  let [t, n] = jL(e);
  if (!t || kg())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && Uc.test(n) ? ZC(n) : n || e;
}, jL = (e) => {
  let t = Uc.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, yd, VL = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, JC = (e) => {
  yd || (yd = Ir ? new RegExp(`(${Object.keys(Ir).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => yt(o).replace(Uc, ZC).replace(zL, C1).replace(yd, C1)), n = t.map((o) => o.match(Ga).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => ws({ ...e, output: o }));
  return (o) => {
    var s;
    let i = !_1.test(t[0]) && ((s = t.find((a) => _1.test(a))) == null ? void 0 : s.replace(Ga, "")), l = 0;
    return t[0].replace(Ga, () => `${r[l++](o)}${i || ""}`).replace(BL, VL);
  };
}, $g = "react-spring: ", e2 = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${$g}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, HL = e2(console.warn);
function UL() {
  HL(`${$g}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var WL = e2(console.warn);
function qL() {
  WL(`${$g}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Wc(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !kg() && Uc.test(e) || e in (Ir || {}));
}
var Ag = kg() ? m.exports.useEffect : m.exports.useLayoutEffect, QL = () => {
  let e = m.exports.useRef(!1);
  return Ag(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function t2() {
  let e = m.exports.useState()[1], t = QL();
  return () => {
    t.current && e(Math.random());
  };
}
function GL(e, t) {
  let [n] = m.exports.useState(() => ({ inputs: t, result: e() })), r = m.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && KL(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function KL(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var n2 = (e) => m.exports.useEffect(e, YL), YL = [];
function R1(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var ks = Symbol.for("Animated:node"), XL = (e) => !!e && e[ks] === e, wn = (e) => e && e[ks], Pg = (e, t) => yL(e, ks, t), qc = (e) => e && e[ks] && e[ks].getPayload(), r2 = class {
  constructor() {
    K(this, "payload");
    Pg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, qs = class extends r2 {
  constructor(t) {
    super();
    K(this, "done", !0);
    K(this, "elapsedTime");
    K(this, "lastPosition");
    K(this, "lastVelocity");
    K(this, "v0");
    K(this, "durationProgress", 0);
    this._value = t, U.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new qs(t);
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
}, Cs = class extends qs {
  constructor(t) {
    super(0);
    K(this, "_string", null);
    K(this, "_toString");
    this._toString = ws({ output: [t, t] });
  }
  static create(t) {
    return new Cs(t);
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
    t && (this._toString = ws({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, Gu = { dependencies: null }, Qc = class extends r2 {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return An(this.source, (n, r) => {
      XL(n) ? t[r] = n.getValue(e) : Bt(n) ? t[r] = yt(n) : e || (t[r] = n);
    }), t;
  }
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && me(this.payload, (e) => e.reset());
  }
  _makePayload(e) {
    if (e) {
      let t = /* @__PURE__ */ new Set();
      return An(e, this._addToPayload, t), Array.from(t);
    }
  }
  _addToPayload(e) {
    Gu.dependencies && Bt(e) && Gu.dependencies.add(e);
    let t = qc(e);
    t && me(t, (n) => this.add(n));
  }
}, o2 = class extends Qc {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new o2(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(ZL)), !0);
  }
};
function ZL(e) {
  return (Wc(e) ? Cs : qs).create(e);
}
function mh(e) {
  let t = wn(e);
  return t ? t.constructor : U.arr(e) ? o2 : Wc(e) ? Cs : qs;
}
var T1 = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = tF(o, h);
    }, [o]), [s, a] = eF(r, t), u = t2(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, s.getValue(!0)) : !1) === !1 && u();
    }, f = new JL(c, a), d = m.exports.useRef();
    Ag(() => (d.current = f, me(a, (h) => zi(h, f)), () => {
      d.current && (me(d.current.deps, (h) => Ss(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), n2(() => () => {
      let h = d.current;
      me(h.deps, (v) => Ss(v, h));
    });
    let g = t.getComponentProps(s.getValue());
    return m.exports.createElement(e, { ...g, ref: l });
  });
}, JL = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && oe.write(this.update);
  }
};
function eF(e, t) {
  let n = /* @__PURE__ */ new Set();
  return Gu.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new Qc(e), Gu.dependencies = null, [e, n];
}
function tF(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var I1 = Symbol.for("AnimatedComponent"), nF = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new Qc(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let s = O1(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = T1(l, o)) : l = l[I1] || (l[I1] = T1(l, o)), l.displayName = `Animated(${s})`, l;
  };
  return An(e, (l, s) => {
    U.arr(e) && (s = O1(l)), i[s] = i(l);
  }), { animated: i };
}, O1 = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function Jr(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var zl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), i2 = (e, t) => U.obj(e) ? t && e[t] : e, l2 = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, rF = (e) => e, _g = (e, t = rF) => {
  let n = oF;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, oF = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], iF = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function lF(e) {
  let t = {}, n = 0;
  if (An(e, (r, o) => {
    iF[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function s2(e) {
  let t = lF(e);
  if (t) {
    let n = { to: t };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function Es(e) {
  return e = yt(e), U.arr(e) ? e.map(Es) : Wc(e) ? pn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function sF(e) {
  for (let t in e)
    return !0;
  return !1;
}
function gh(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function aF(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function uF(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var a2 = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, vh = { ...a2.default, mass: 1, damping: 1, easing: DL.linear, clamp: !1 }, cF = class {
  constructor() {
    K(this, "tension");
    K(this, "friction");
    K(this, "frequency");
    K(this, "damping");
    K(this, "mass");
    K(this, "velocity", 0);
    K(this, "restVelocity");
    K(this, "precision");
    K(this, "progress");
    K(this, "duration");
    K(this, "easing");
    K(this, "clamp");
    K(this, "bounce");
    K(this, "decay");
    K(this, "round");
    Object.assign(this, vh);
  }
};
function fF(e, t, n) {
  n && (n = { ...n }, N1(n, t), t = { ...n, ...t }), N1(e, t), Object.assign(e, t);
  for (let l in vh)
    e[l] == null && (e[l] = vh[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function N1(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var M1 = [], dF = class {
  constructor() {
    K(this, "changed", !1);
    K(this, "values", M1);
    K(this, "toValues", null);
    K(this, "fromValues", M1);
    K(this, "to");
    K(this, "from");
    K(this, "config", new cF());
    K(this, "immediate", !1);
  }
};
function u2(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, s) => {
    var h;
    let a, u, c = zl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = zl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || zl(v, t)), a = Jr(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), a = u.time - oe.now();
    }
    function d() {
      a > 0 && !pn.skipAnimation ? (o.delayed = !0, u = oe.setTimeout(g, a), o.pauseQueue.add(f), o.timeouts.add(u)) : g();
    }
    function g() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(f), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
      try {
        i.start({ ...n, callId: e, cancel: c }, l);
      } catch (v) {
        s(v);
      }
    }
  });
}
var Rg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? pi(e.get()) : t.every((n) => n.noop) ? c2(e.get()) : on(e.get(), t.every((n) => n.finished)), c2 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), on = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), pi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function f2(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: s, promise: a } = n;
  return !i && e === s && !t.reset ? a : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = _g(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && pi(r) || o !== n.asyncId && on(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new D1(), x = new L1();
      return (async () => {
        if (pn.skipAnimation)
          throw $s(n), x.result = on(r, !1), f(x), x;
        g(y);
        let b = U.obj(w) ? { ...w } : { ...p, to: w };
        b.parentId = o, An(u, (S, $) => {
          U.und(b[$]) && (b[$] = S);
        });
        let A = await r.start(b);
        return g(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    }, v;
    if (pn.skipAnimation)
      return $s(n), on(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = on(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof D1)
        v = w.result;
      else if (w instanceof L1)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? a : void 0);
    }
    return U.fun(l) && oe.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function $s(e, t) {
  Ll(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var D1 = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    K(this, "result");
  }
}, L1 = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    K(this, "result");
  }
}, yh = (e) => e instanceof Tg, pF = 1, Tg = class extends YC {
  constructor() {
    super(...arguments);
    K(this, "id", pF++);
    K(this, "_priority", 0);
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  get() {
    let t = wn(this);
    return t && t.getValue();
  }
  to(...t) {
    return pn.to(this, t);
  }
  interpolate(...t) {
    return UL(), pn.to(this, t);
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
    bs(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || Vc.sort(this), bs(this, { type: "priority", parent: this, priority: t });
  }
}, vo = Symbol.for("SpringPhase"), d2 = 1, xh = 2, wh = 4, xd = (e) => (e[vo] & d2) > 0, cr = (e) => (e[vo] & xh) > 0, sl = (e) => (e[vo] & wh) > 0, F1 = (e, t) => t ? e[vo] |= xh | d2 : e[vo] &= ~xh, z1 = (e, t) => t ? e[vo] |= wh : e[vo] &= ~wh, hF = class extends Tg {
  constructor(t, n) {
    super();
    K(this, "key");
    K(this, "animation", new dF());
    K(this, "queue");
    K(this, "defaultProps", {});
    K(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    K(this, "_pendingCalls", /* @__PURE__ */ new Set());
    K(this, "_lastCallId", 0);
    K(this, "_lastToId", 0);
    K(this, "_memoizedDuration", 0);
    if (!U.und(t) || !U.und(n)) {
      let r = U.obj(t) ? { ...t } : { ...n, from: t };
      U.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(cr(this) || this._state.asyncTo) || sl(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    let t = wn(this);
    return t instanceof qs ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return xd(this);
  }
  get isAnimating() {
    return cr(this);
  }
  get isPaused() {
    return sl(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, s = qc(o.to);
    !s && Bt(o.to) && (l = Pt(yt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == Cs ? 1 : s ? s[f].lastPosition : l[f], g = o.immediate, h = d;
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
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), $ = w == d ? c.v0 > 0 : w < d, E, P = !1, R = 1, T = Math.ceil(t / R);
            for (let O = 0; O < T && (E = Math.abs(y) > b, !(!E && (g = Math.abs(d - h) <= x, g))); ++O) {
              S && (P = h == d || h > d == $, P && (y = -y * A, h = d));
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
      s && !s[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    let a = wn(this), u = a.getValue();
    if (n) {
      let c = yt(o.to);
      (u !== c || r) && !i.decay ? (a.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop();
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
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => Rg(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), $s(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || gh(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return xd(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), U.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, _g(t, (s, a) => /^on/.test(a) ? i2(s, r) : s)), j1(this, t, "onProps"), ul(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return u2(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      sl(this) || (z1(this, !0), gl(l.pauseQueue), ul(this, "onPause", on(this, al(this, this.animation.to)), this));
    }, resume: () => {
      sl(this) && (z1(this, !1), cr(this) && this._resume(), gl(l.resumeQueue), ul(this, "onResume", on(this, al(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((s) => {
      if (t.loop && s.finished && !(n && s.noop)) {
        let a = p2(t);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(pi(this));
    let o = !U.und(t.to), i = !U.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(pi(this));
    let { key: l, defaultProps: s, animation: a } = this, { to: u, from: c } = a, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Mn(d, c);
    g && (a.from = d), d = yt(d);
    let h = !Mn(f, u);
    h && this._focus(f);
    let v = gh(n.to), { config: w } = a, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && fF(w, Jr(n.config, l), n.config !== s.config ? Jr(s.config, l) : void 0);
    let x = wn(this);
    if (!x || U.und(f))
      return r(on(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && zl(n.reset, l), A = b ? d : this.get(), S = Es(f), $ = U.num(S) || U.arr(S) || Wc(S), E = !v && (!$ || zl(s.immediate || n.immediate, l));
    if (h) {
      let O = mh(f);
      if (O !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, R = Bt(f), T = !1;
    if (!R) {
      let O = b || !xd(this) && g;
      (h || O) && (T = Mn(Es(A), S), R = !T), (!Mn(a.immediate, E) && !E || !Mn(w.decay, p) || !Mn(w.velocity, y)) && (R = !0);
    }
    if (T && cr(this) && (a.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || Bt(u)) && (a.values = x.getPayload(), a.toValues = Bt(f) ? null : P == Cs ? [1] : Pt(S)), a.immediate != E && (a.immediate = E, !E && !b && this._set(u)), R)) {
      let { onRest: O } = a;
      me(gF, (z) => j1(this, n, z));
      let D = on(this, al(this, u));
      gl(this._pendingCalls, D), this._pendingCalls.add(r), a.changed && oe.batchedUpdates(() => {
        var z;
        a.changed = !b, O == null || O(D, this), b ? Jr(s.onRest, D) : (z = a.onStart) == null || z.call(a, D, this);
      });
    }
    b && this._set(A), v ? r(f2(n.to, n, this._state, this)) : R ? this._start() : cr(this) && !h ? this._pendingCalls.add(r) : r(c2(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (P1(this) && this._detach(), n.to = t, P1(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (zi(n, this), yh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && Ss(t, this);
  }
  _set(t, n = !0) {
    let r = yt(t);
    if (!U.und(r)) {
      let o = wn(this);
      if (!o || !Mn(r, o.getValue())) {
        let i = mh(r);
        !o || o.constructor != i ? Pg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, ul(this, "onStart", on(this, al(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Jr(this.animation.onChange, t, this)), Jr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    wn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), cr(this) || (F1(this, !0), sl(this) || this._resume());
  }
  _resume() {
    pn.skipAnimation ? this.finish() : Vc.start(this);
  }
  _stop(t, n) {
    if (cr(this)) {
      F1(this, !1);
      let r = this.animation;
      me(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), bs(this, { type: "idle", parent: this });
      let o = n ? pi(this.get()) : on(this.get(), al(this, t != null ? t : r.to));
      gl(this._pendingCalls, o), r.changed && (r.changed = !1, ul(this, "onRest", o, this));
    }
  }
};
function al(e, t) {
  let n = Es(t), r = Es(e.get());
  return Mn(r, n);
}
function p2(e, t = e.loop, n = e.to) {
  let r = Jr(t);
  if (r) {
    let o = r !== !0 && s2(r), i = (o || e).reverse, l = !o || o.reset;
    return As({ ...e, loop: t, default: !1, pause: void 0, to: !i || gh(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function As(e) {
  let { to: t, from: n } = e = s2(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && B1(t, r), U.obj(n) && B1(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function mF(e) {
  let t = As(e);
  return U.und(t.default) && (t.default = _g(t)), t;
}
function B1(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
var gF = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function j1(e, t, n) {
  e.animation[n] = t[n] !== l2(t, n) ? i2(t[n], e.key) : void 0;
}
function ul(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var vF = ["onStart", "onChange", "onRest"], yF = 1, xF = class {
  constructor(e, t) {
    K(this, "id", yF++);
    K(this, "springs", {});
    K(this, "queue", []);
    K(this, "ref");
    K(this, "_flush");
    K(this, "_initialProps");
    K(this, "_lastAsyncId", 0);
    K(this, "_active", /* @__PURE__ */ new Set());
    K(this, "_changed", /* @__PURE__ */ new Set());
    K(this, "_started", !1);
    K(this, "_item");
    K(this, "_state", { paused: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    K(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
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
    return e && this.queue.push(As(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(As) : this.queue = [], this._flush ? this._flush(this, t) : (y2(this, t), bh(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      me(Pt(t), (r) => n[r].stop(!!e));
    } else
      $s(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (U.und(e))
      this.start({ pause: !0 });
    else {
      let t = this.springs;
      me(Pt(e), (n) => t[n].pause());
    }
    return this;
  }
  resume(e) {
    if (U.und(e))
      this.start({ pause: !1 });
    else {
      let t = this.springs;
      me(Pt(e), (n) => t[n].resume());
    }
    return this;
  }
  each(e) {
    An(this.springs, e);
  }
  _onFrame() {
    let { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Ll(e, ([s, a]) => {
      a.value = this.get(), s(a, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Ll(t, ([s, a]) => {
      a.value = l, s(a, this, this._item);
    }), i && (this._started = !1, Ll(n, ([s, a]) => {
      a.value = l, s(a, this, this._item);
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
function bh(e, t) {
  return Promise.all(t.map((n) => h2(e, n))).then((n) => Rg(e, n));
}
async function h2(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: s, onResolve: a } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : me(vF, (v) => {
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
  t.pause === !f.paused ? (f.paused = t.pause, gl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), g = t.cancel === !0 || l2(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(u2(++e._lastAsyncId, { props: t, state: f, actions: { pause: ph, resume: ph, start(v, w) {
    g ? ($s(f, e._lastAsyncId), w(pi(e))) : (v.onRest = s, w(f2(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = Rg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = p2(t, l, o);
    if (v)
      return y2(e, [v]), h2(e, v, !0);
  }
  return a && oe.batchedUpdates(() => a(h, e, e.item)), h;
}
function V1(e, t) {
  let n = { ...e.springs };
  return t && me(Pt(t), (r) => {
    U.und(r.keys) && (r = As(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), v2(n, r, (o) => g2(o));
  }), m2(e, n), n;
}
function m2(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, zi(n, e));
  });
}
function g2(e, t) {
  let n = new hF();
  return n.key = e, t && zi(n, t), n;
}
function v2(e, t, n) {
  t.keys && me(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function y2(e, t) {
  me(t, (n) => {
    v2(e.springs, n, (r) => g2(r, e));
  });
}
var Gc = ({ children: e, ...t }) => {
  let n = m.exports.useContext(Ku), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = GL(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = Ku;
  return m.exports.createElement(i, { value: t }, e);
}, Ku = wF(Gc, {});
Gc.Provider = Ku.Provider;
Gc.Consumer = Ku.Consumer;
function wF(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var bF = () => {
  let e = [], t = function(r) {
    qL();
    let o = [];
    return me(e, (i, l) => {
      if (U.und(r))
        o.push(i.start());
      else {
        let s = n(r, i, l);
        s && o.push(i.start(s));
      }
    }), o;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    let o = e.indexOf(r);
    ~o && e.splice(o, 1);
  }, t.pause = function() {
    return me(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return me(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    me(e, (o, i) => {
      let l = U.fun(r) ? r(i, o) : r;
      l && o.set(l);
    });
  }, t.start = function(r) {
    let o = [];
    return me(e, (i, l) => {
      if (U.und(r))
        o.push(i.start());
      else {
        let s = this._getProps(r, i, l);
        s && o.push(i.start(s));
      }
    }), o;
  }, t.stop = function() {
    return me(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return me(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  let n = function(r, o, i) {
    return U.fun(r) ? r(i, o) : r;
  };
  return t._getProps = n, t;
};
function SF(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? bF() : void 0, []), i = m.exports.useRef(0), l = t2(), s = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = V1(p, y);
    return i.current > 0 && !s.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? bh(p, y) : new Promise((b) => {
      m2(p, x), s.queue.push(() => {
        b(bh(p, y));
      }), l();
    });
  } }), []), a = m.exports.useRef([...s.ctrls]), u = [], c = R1(e) || 0;
  m.exports.useMemo(() => {
    me(a.current.slice(e, c), (p) => {
      aF(p, o), p.stop(!0);
    }), a.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = a.current[x] || (a.current[x] = new xF(null, s.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = mF(A));
    }
  }
  let d = a.current.map((p, y) => V1(p, u[y])), g = m.exports.useContext(Gc), h = R1(g), v = g !== h && sF(g);
  Ag(() => {
    i.current++, s.ctrls = a.current;
    let { queue: p } = s;
    p.length && (s.queue = [], me(p, (y) => y())), me(a.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: g });
      let b = u[x];
      b && (uF(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), n2(() => () => {
    me(s.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function kF(e, t) {
  let n = U.fun(e), [[r], o] = SF(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var CF = class extends Tg {
  constructor(t, n) {
    super();
    K(this, "key");
    K(this, "idle", !0);
    K(this, "calc");
    K(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = ws(...n);
    let r = this._get(), o = mh(r);
    Pg(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Mn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && H1(this._active) && wd(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(yt) : Pt(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !H1(this._active) && (this.idle = !1, me(qc(this), (t) => {
      t.done = !1;
    }), pn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), wd(this)) : Vc.start(this));
  }
  _attach() {
    let t = 1;
    me(Pt(this.source), (n) => {
      Bt(n) && zi(n, this), yh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    me(Pt(this.source), (t) => {
      Bt(t) && Ss(t, this);
    }), this._active.clear(), wd(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (yh(r) ? r.priority : 0) + 1), 0));
  }
};
function EF(e) {
  return e.idle !== !1;
}
function H1(e) {
  return !e.size || Array.from(e).every(EF);
}
function wd(e) {
  e.idle || (e.idle = !0, me(qc(e), (t) => {
    t.done = !0;
  }), bs(e, { type: "idle", parent: e }));
}
pn.assign({ createStringInterpolator: JC, to: (e, t) => new CF(e, t) });
var x2 = /^--/;
function $F(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !x2.test(e) && !(Bl.hasOwnProperty(e) && Bl[e]) ? t + "px" : ("" + t).trim();
}
var U1 = {};
function AF(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: s, ...a } = t, u = Object.values(a), c = Object.keys(a).map((f) => n || e.hasAttribute(f) ? f : U1[f] || (U1[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = $F(f, r[f]);
      x2.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), s !== void 0 && e.setAttribute("viewBox", s);
}
var Bl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, PF = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), _F = ["Webkit", "Ms", "Moz", "O"];
Bl = Object.keys(Bl).reduce((e, t) => (_F.forEach((n) => e[PF(n, t)] = e[t]), e), Bl);
var RF = /^(matrix|translate|scale|rotate|skew)/, TF = /^(translate)/, IF = /^(rotate|skew)/, bd = (e, t) => U.num(e) && e !== 0 ? e + t : e, Ka = (e, t) => U.arr(e) ? e.every((n) => Ka(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, OF = class extends Qc {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((s) => bd(s, "px")).join(",")})`, Ka(l, 0)])), An(r, (l, s) => {
      if (s === "transform")
        o.push([l || ""]), i.push((a) => [a, a === ""]);
      else if (RF.test(s)) {
        if (delete r[s], U.und(l))
          return;
        let a = TF.test(s) ? "px" : IF.test(s) ? "deg" : "";
        o.push(Pt(l)), i.push(s === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${bd(d, a)})`, Ka(d, 0)] : (u) => [`${s}(${u.map((c) => bd(c, a)).join(",")})`, Ka(u, s.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new NF(o, i)), super(r);
  }
}, NF = class extends YC {
  constructor(t, n) {
    super();
    K(this, "_value", null);
    this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return me(this.inputs, (r, o) => {
      let i = yt(r[0]), [l, s] = this.transforms[o](U.arr(i) ? i : r.map(yt));
      t += " " + l, n = n && s;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && me(this.inputs, (n) => me(n, (r) => Bt(r) && zi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && me(this.inputs, (n) => me(n, (r) => Bt(r) && Ss(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), bs(this, t);
  }
}, MF = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
pn.assign({ batchedUpdates: hn.exports.unstable_batchedUpdates, createStringInterpolator: JC, colors: kL });
var DF = nF(MF, { applyAnimatedValues: AF, createAnimatedStyle: (e) => new OF(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), LF = DF.animated;
const FF = ({
  message: e
}) => /* @__PURE__ */ pe("div", {
  className: $i("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1",
    children: e == null ? void 0 : e.text
  })]
}), zF = () => {
  const {
    toggleChatOpen: e,
    chatOpen: t
  } = Mu(), {
    conventions: n
  } = ys(), [r, o] = m.exports.useState(null), i = kF({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: a2.default
  });
  console.log(n);
  const l = Object.keys(n), s = r || l[0], a = s ? n[s] : [];
  return /* @__PURE__ */ pe("div", {
    className: "aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg",
    children: [/* @__PURE__ */ pe("div", {
      onClick: () => {
        e();
      },
      className: $i("flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400", {
        "border-b-0": !t,
        "border-b": t
      }),
      children: [/* @__PURE__ */ B("h2", {
        className: "rounded-md bg-transparent px-3 py-1 text-sm font-bold uppercase",
        children: "Chat"
      }), t && /* @__PURE__ */ B("kbd", {
        className: "flex h-5 items-center justify-center rounded bg-mayumi-gray-300 px-2 font-sans text-xs uppercase text-mayumi-gray-1100",
        children: "esc"
      })]
    }), /* @__PURE__ */ pe(LF.div, {
      style: {
        height: i.h,
        opacity: i.opacity,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ B("div", {
        className: "grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ B("div", {
          className: $i("flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200", {
            "bg-mayumi-blue-400 text-mayumi-gray-1200": u === s,
            "bg-mayumi-gray-200 text-mayumi-gray-1100": u !== s
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
        children: a.map((u, c) => /* @__PURE__ */ B(FF, {
          message: u
        }, c))
      })]
    })]
  });
}, BF = () => /* @__PURE__ */ pe("div", {
  className: "dark",
  children: [/* @__PURE__ */ B(lL, {}), /* @__PURE__ */ B(zF, {})]
});
var w2, W1 = hn.exports;
w2 = W1.createRoot, W1.hydrateRoot;
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), Ch("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", it.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), w2(t).render(/* @__PURE__ */ B(BF, {}));
})();
