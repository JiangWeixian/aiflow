var v2 = Object.defineProperty;
var x2 = (e, t, n) => t in e ? v2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => (x2(e, typeof t != "symbol" ? t + "" : t, n), n);
function w2(e, t) {
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
var b2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wv = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : b2, function(n) {
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
        const y = (E, P = {}, R = {}) => {
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
                V = y(V, P[F], R[F]);
              else if (h(R, "*"))
                V = y(V, P[F], R["*"]);
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
        }), p = new s((E) => typeof E != "function" ? E : function(R) {
          const T = y(
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
        let v = !1;
        const x = new s((E) => typeof E != "function" ? E : function(R, T, O) {
          let D = !1, z, F = new Promise((I) => {
            z = function(N) {
              v || (console.warn(o, new Error().stack), v = !0), D = !0, I(N);
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
        return a.privacy = {
          network: {
            "*": $
          },
          services: {
            "*": $
          },
          websites: {
            "*": $
          }
        }, y(l, S, a);
      };
      if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
        throw new Error("This script should only be loaded in a browser extension.");
      n.exports = i(chrome);
    } else
      n.exports = browser;
  });
})(Wv);
const it = Wv.exports;
let qv = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class Ys extends Error {
  constructor(t) {
    super(Ys._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, Ys);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const S2 = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], bd = Symbol(".toJSON called"), k2 = (e) => {
  e[bd] = !0;
  const t = e.toJSON();
  return delete e[bd], t;
}, bh = ({
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
  if (typeof e.toJSON == "function" && e[bd] !== !0)
    return k2(e);
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
        i++, l[a] = bh({
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
  for (const { property: a, enumerable: s } of S2)
    typeof e[a] == "string" && Object.defineProperty(l, a, {
      value: e[a],
      enumerable: r ? !0 : s,
      configurable: !0,
      writable: !0
    });
  return l;
}, C2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? bh({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, E2 = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return bh({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new Ys(e);
};
var $2 = {
  serializeError: C2,
  deserializeError: E2
}, Yu = { exports: {} };
const A2 = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), Qv = (e = 7, t = !1) => Array.from({ length: e }, A2(t ? 16 : 36)).join("");
Yu.exports = Qv;
Yu.exports.default = Qv;
var P2 = Object.defineProperty, _2 = Object.defineProperties, R2 = Object.getOwnPropertyDescriptors, Rg = Object.getOwnPropertySymbols, T2 = Object.prototype.hasOwnProperty, I2 = Object.prototype.propertyIsEnumerable, Tg = (e, t, n) => t in e ? P2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Gv = (e, t) => {
  for (var n in t || (t = {}))
    T2.call(t, n) && Tg(e, n, t[n]);
  if (Rg)
    for (var n of Rg(t))
      I2.call(t, n) && Tg(e, n, t[n]);
  return e;
}, Kv = (e, t) => _2(e, R2(t)), O2 = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, Yv = (e) => {
  const [, t, n] = e.match(O2) || [];
  return {
    context: t,
    tabId: +n
  };
}, Zc = (e) => it[e], Me = Zc("devtools") ? "devtools" : Zc("tabs") ? "background" : Zc("extension") ? "content-script" : typeof document < "u" ? "window" : null, Ig = Yu.exports(), Sd = /* @__PURE__ */ new Map(), Xv = /* @__PURE__ */ new Map(), kd = /* @__PURE__ */ new Set(), Cd = /* @__PURE__ */ new Map(), Ur = null, Xs, Zv;
N2();
function N2() {
  if (Me === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Me === "window" || Me === "content-script") && window.addEventListener("message", D2), Me === "content-script" && top === window && (Ur = it.runtime.connect(), Ur.onMessage.addListener((e) => {
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
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = Yv(t);
    !n || (Cd.set(t, e), kd.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), kd.delete(r));
    }), e.onDisconnect.addListener(() => {
      Cd.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, Zo(r));
    }));
  });
}
function Zo(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(Ig) && (e.hops.push(Ig), !(Me === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !Zv))) {
    if (!n)
      return M2(e);
    if (n.context) {
      if (Me === "window")
        return Ed(window, e);
      if (Me === "content-script" && n.context === "window")
        return e.destination = null, Ed(window, e);
      if (Me === "devtools" || Me === "content-script")
        return n.context === "background" && (e.destination = null), Ur.postMessage(e);
      if (Me === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, a = Cd.get(l);
        a ? a.postMessage(e) : kd.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function M2(e) {
  const { transactionId: t, messageID: n, messageType: r } = e, o = () => {
    const l = Sd.get(t);
    if (l) {
      const { err: a, data: s } = e;
      if (a) {
        const u = a, c = self[u.name], f = new (typeof c == "function" ? c : Error)(u.message);
        for (const d in u)
          f[d] = u[d];
        l.reject(f);
      } else
        l.resolve(s);
      Sd.delete(t);
    }
  }, i = async () => {
    let l, a, s = !1;
    try {
      const u = Xv.get(n);
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
      if (a && (e.err = $2.serializeError(a)), Zo(Kv(Gv({}, e), {
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
async function D2({ data: e, ports: t }) {
  if (!(Me === "content-script" && !Zv)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === Xs && e.context !== Me)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === Xs && e.context !== Me) {
      const { payload: n } = e;
      Me === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), Zo(n);
    }
  }
}
function Ed(e, t) {
  L2();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, Ed(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: Xs,
      context: Me,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: Xs,
    context: Me
  }, "*", [n.port2]);
}
function L2() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function Sh(e, t) {
  Xv.set(e, t);
}
async function yl(e, t, n = "background") {
  const r = typeof n == "string" ? Yv(n) : n, o = "Bridge#sendMessage ->";
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
      transactionId: Yu.exports(),
      origin: { context: Me, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    Sd.set(a.transactionId, { resolve: i, reject: l }), Zo(a);
  });
}
var Lo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = qv(), this.isClosed = !1, Lo.initDone || (Sh("__crx_bridge_stream_transfer__", (t) => {
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
    yl("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), yl("__crx_bridge_stream_transfer__", {
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
}, kh = Lo;
kh.initDone = !1;
kh.openStreams = /* @__PURE__ */ new Map();
var F2 = /* @__PURE__ */ new Map(), z2 = qv();
Sh("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const a = () => {
    const s = F2.get(o);
    typeof s == "function" ? (s(new kh(Kv(Gv({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = z2.on("did-change-stream-callbacks", a));
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
var Pa = Symbol.for("react.element"), B2 = Symbol.for("react.portal"), j2 = Symbol.for("react.fragment"), V2 = Symbol.for("react.strict_mode"), H2 = Symbol.for("react.profiler"), U2 = Symbol.for("react.provider"), W2 = Symbol.for("react.context"), q2 = Symbol.for("react.forward_ref"), Q2 = Symbol.for("react.suspense"), G2 = Symbol.for("react.memo"), K2 = Symbol.for("react.lazy"), Og = Symbol.iterator;
function Y2(e) {
  return e === null || typeof e != "object" ? null : (e = Og && e[Og] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Jv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ex = Object.assign, tx = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = tx, this.updater = n || Jv;
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
function nx() {
}
nx.prototype = Pi.prototype;
function Ch(e, t, n) {
  this.props = e, this.context = t, this.refs = tx, this.updater = n || Jv;
}
var Eh = Ch.prototype = new nx();
Eh.constructor = Ch;
ex(Eh, Pi.prototype);
Eh.isPureReactComponent = !0;
var Ng = Array.isArray, rx = Object.prototype.hasOwnProperty, $h = { current: null }, ox = { key: !0, ref: !0, __self: !0, __source: !0 };
function ix(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      rx.call(t, r) && !ox.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Pa, type: e, key: i, ref: l, props: o, _owner: $h.current };
}
function X2(e, t) {
  return { $$typeof: Pa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ah(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pa;
}
function Z2(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Mg = /\/+/g;
function Jc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Z2("" + e.key) : t.toString(36);
}
function Ts(e, t, n, r, o) {
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
          case B2:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + Jc(l, 0) : r, Ng(o) ? (n = "", e != null && (n = e.replace(Mg, "$&/") + "/"), Ts(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Ah(o) && (o = X2(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Mg, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Ng(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Jc(i, a);
      l += Ts(i, t, n, s, o);
    }
  else if (s = Y2(e), typeof s == "function")
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, s = r + Jc(i, a++), l += Ts(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ga(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ts(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function J2(e) {
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
var ht = { current: null }, Is = { transition: null }, eE = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Is, ReactCurrentOwner: $h };
fe.Children = { map: Ga, forEach: function(e, t, n) {
  Ga(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ga(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ga(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ah(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Pi;
fe.Fragment = j2;
fe.Profiler = H2;
fe.PureComponent = Ch;
fe.StrictMode = V2;
fe.Suspense = Q2;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eE;
fe.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ex({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = $h.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (s in t)
      rx.call(t, s) && !ox.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
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
fe.createContext = function(e) {
  return e = { $$typeof: W2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: U2, _context: e }, e.Consumer = e;
};
fe.createElement = ix;
fe.createFactory = function(e) {
  var t = ix.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: q2, render: e };
};
fe.isValidElement = Ah;
fe.lazy = function(e) {
  return { $$typeof: K2, _payload: { _status: -1, _result: e }, _init: J2 };
};
fe.memo = function(e, t) {
  return { $$typeof: G2, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = Is.transition;
  Is.transition = {};
  try {
    e();
  } finally {
    Is.transition = t;
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
const Ve = /* @__PURE__ */ wh(m.exports), tE = /* @__PURE__ */ w2({
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
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function nE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ph(...e) {
  return (t) => e.forEach(
    (n) => nE(n, t)
  );
}
function xe(...e) {
  return m.exports.useCallback(Ph(...e), e);
}
function vo(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = /* @__PURE__ */ m.exports.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: g, ...h } = f, y = (d == null ? void 0 : d[e][s]) || a, w = m.exports.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ m.exports.createElement(y.Provider, {
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
    rE(o, ...t)
  ];
}
function rE(...e) {
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
var hn = { exports: {} }, It = {}, lx = { exports: {} }, ax = {};
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
    var l = Date, a = l.now();
    e.unstable_now = function() {
      return l.now() - a;
    };
  }
  var s = [], u = [], c = 1, f = null, d = 3, g = !1, h = !1, y = !1, w = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
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
    if (y = !1, x(M), !h)
      if (n(s) !== null)
        h = !0, _(A);
      else {
        var I = n(u);
        I !== null && V(b, I.startTime - M);
      }
  }
  function A(M, I) {
    h = !1, y && (y = !1, p(E), E = -1), g = !0;
    var N = d;
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
  if (typeof v == "function")
    D = function() {
      v(O);
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
    return C = N + C, M = { id: c++, callback: I, priorityLevel: M, startTime: N, expirationTime: C, sortIndex: -1 }, N > k ? (M.sortIndex = N, t(u, M), n(s) === null && M === n(u) && (y ? (p(E), E = -1) : y = !0, V(b, N - k))) : (M.sortIndex = C, t(s, M), h || g || (h = !0, _(A))), M;
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
})(ax);
(function(e) {
  e.exports = ax;
})(lx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sx = m.exports, Tt = lx.exports;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ux = /* @__PURE__ */ new Set(), jl = {};
function xo(e, t) {
  hi(e, t), hi(e + "Capture", t);
}
function hi(e, t) {
  for (jl[e] = t, e = 0; e < t.length; e++)
    ux.add(t[e]);
}
var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $d = Object.prototype.hasOwnProperty, oE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Dg = {}, Lg = {};
function iE(e) {
  return $d.call(Lg, e) ? !0 : $d.call(Dg, e) ? !1 : oE.test(e) ? Lg[e] = !0 : (Dg[e] = !0, !1);
}
function lE(e, t, n, r) {
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
function aE(e, t, n, r) {
  if (t === null || typeof t > "u" || lE(e, t, n, r))
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
var _h = /[\-:]([a-z])/g;
function Rh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    _h,
    Rh
  );
  et[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(_h, Rh);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(_h, Rh);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Th(e, t, n, r) {
  var o = et.hasOwnProperty(t) ? et[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (aE(t, n, o, r) && (n = null), r || o === null ? iE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ka = Symbol.for("react.element"), zo = Symbol.for("react.portal"), Bo = Symbol.for("react.fragment"), Ih = Symbol.for("react.strict_mode"), Ad = Symbol.for("react.profiler"), cx = Symbol.for("react.provider"), fx = Symbol.for("react.context"), Oh = Symbol.for("react.forward_ref"), Pd = Symbol.for("react.suspense"), _d = Symbol.for("react.suspense_list"), Nh = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), dx = Symbol.for("react.offscreen"), Fg = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object" ? null : (e = Fg && e[Fg] || e["@@iterator"], typeof e == "function" ? e : null);
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
    tf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? cl(e) : "";
}
function sE(e) {
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
function Rd(e) {
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
    case Ad:
      return "Profiler";
    case Ih:
      return "StrictMode";
    case Pd:
      return "Suspense";
    case _d:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fx:
        return (e.displayName || "Context") + ".Consumer";
      case cx:
        return (e._context.displayName || "Context") + ".Provider";
      case Oh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Nh:
        return t = e.displayName || null, t !== null ? t : Rd(e.type) || "Memo";
      case dr:
        t = e._payload, e = e._init;
        try {
          return Rd(e(t));
        } catch {
        }
    }
  return null;
}
function uE(e) {
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
      return Rd(t);
    case 8:
      return t === Ih ? "StrictMode" : "Mode";
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
function px(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function cE(e) {
  var t = px(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ya(e) {
  e._valueTracker || (e._valueTracker = cE(e));
}
function hx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = px(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Zs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Td(e, t) {
  var n = t.checked;
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function zg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Or(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function mx(e, t) {
  t = t.checked, t != null && Th(e, "checked", t, !1);
}
function Id(e, t) {
  mx(e, t);
  var n = Or(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Od(e, t.type, n) : t.hasOwnProperty("defaultValue") && Od(e, t.type, Or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Bg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Od(e, t, n) {
  (t !== "number" || Zs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function Nd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function jg(e, t) {
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
function gx(e, t) {
  var n = Or(t.value), r = Or(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Md(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? yx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Xa, vx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Xa = Xa || document.createElement("div"), Xa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xa.firstChild; e.firstChild; )
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
var vl = {
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
}, fE = ["Webkit", "ms", "Moz", "O"];
Object.keys(vl).forEach(function(e) {
  fE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), vl[t] = vl[e];
  });
});
function xx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vl.hasOwnProperty(e) && vl[e] ? ("" + t).trim() : t + "px";
}
function wx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = xx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var dE = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Dd(e, t) {
  if (t) {
    if (dE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ld(e, t) {
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
var Fd = null;
function Mh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var zd = null, ei = null, ti = null;
function Hg(e) {
  if (e = Ta(e)) {
    if (typeof zd != "function")
      throw Error(j(280));
    var t = e.stateNode;
    t && (t = tc(t), zd(e.stateNode, e.type, t));
  }
}
function bx(e) {
  ei ? ti ? ti.push(e) : ti = [e] : ei = e;
}
function Sx() {
  if (ei) {
    var e = ei, t = ti;
    if (ti = ei = null, Hg(e), t)
      for (e = 0; e < t.length; e++)
        Hg(t[e]);
  }
}
function kx(e, t) {
  return e(t);
}
function Cx() {
}
var rf = !1;
function Ex(e, t, n) {
  if (rf)
    return e(t, n);
  rf = !0;
  try {
    return kx(e, t, n);
  } finally {
    rf = !1, (ei !== null || ti !== null) && (Cx(), Sx());
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
var Bd = !1;
if (jn)
  try {
    var Ui = {};
    Object.defineProperty(Ui, "passive", { get: function() {
      Bd = !0;
    } }), window.addEventListener("test", Ui, Ui), window.removeEventListener("test", Ui, Ui);
  } catch {
    Bd = !1;
  }
function pE(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xl = !1, Js = null, eu = !1, jd = null, hE = { onError: function(e) {
  xl = !0, Js = e;
} };
function mE(e, t, n, r, o, i, l, a, s) {
  xl = !1, Js = null, pE.apply(hE, arguments);
}
function gE(e, t, n, r, o, i, l, a, s) {
  if (mE.apply(this, arguments), xl) {
    if (xl) {
      var u = Js;
      xl = !1, Js = null;
    } else
      throw Error(j(198));
    eu || (eu = !0, jd = u);
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
function $x(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ug(e) {
  if (wo(e) !== e)
    throw Error(j(188));
}
function yE(e) {
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
          return Ug(o), e;
        if (i === r)
          return Ug(o), t;
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
function Ax(e) {
  return e = yE(e), e !== null ? Px(e) : null;
}
function Px(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Px(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var _x = Tt.unstable_scheduleCallback, Wg = Tt.unstable_cancelCallback, vE = Tt.unstable_shouldYield, xE = Tt.unstable_requestPaint, Fe = Tt.unstable_now, wE = Tt.unstable_getCurrentPriorityLevel, Dh = Tt.unstable_ImmediatePriority, Rx = Tt.unstable_UserBlockingPriority, tu = Tt.unstable_NormalPriority, bE = Tt.unstable_LowPriority, Tx = Tt.unstable_IdlePriority, Xu = null, Sn = null;
function SE(e) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(Xu, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var un = Math.clz32 ? Math.clz32 : EE, kE = Math.log, CE = Math.LN2;
function EE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (kE(e) / CE | 0) | 0;
}
var Za = 64, Ja = 4194304;
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
    var a = l & ~o;
    a !== 0 ? r = dl(a) : (i &= l, i !== 0 && (r = dl(i)));
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
function $E(e, t) {
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
function AE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - un(i), a = 1 << l, s = o[l];
    s === -1 ? ((a & n) === 0 || (a & r) !== 0) && (o[l] = $E(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Vd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ix() {
  var e = Za;
  return Za <<= 1, (Za & 4194240) === 0 && (Za = 64), e;
}
function of(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function _a(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - un(t), e[t] = n;
}
function PE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - un(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Lh(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - un(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var be = 0;
function Ox(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Nx, Fh, Mx, Dx, Lx, Hd = !1, es = [], kr = null, Cr = null, Er = null, Ul = /* @__PURE__ */ new Map(), Wl = /* @__PURE__ */ new Map(), hr = [], _E = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qg(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ta(t), t !== null && Fh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function RE(e, t, n, r, o) {
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
function Fx(e) {
  var t = eo(e.target);
  if (t !== null) {
    var n = wo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = $x(n), t !== null) {
          e.blockedOn = t, Lx(e.priority, function() {
            Mx(n);
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
function Os(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ud(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Fd = r, n.target.dispatchEvent(r), Fd = null;
    } else
      return t = Ta(n), t !== null && Fh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Qg(e, t, n) {
  Os(e) && n.delete(t);
}
function TE() {
  Hd = !1, kr !== null && Os(kr) && (kr = null), Cr !== null && Os(Cr) && (Cr = null), Er !== null && Os(Er) && (Er = null), Ul.forEach(Qg), Wl.forEach(Qg);
}
function qi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Hd || (Hd = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, TE)));
}
function ql(e) {
  function t(o) {
    return qi(o, e);
  }
  if (0 < es.length) {
    qi(es[0], e);
    for (var n = 1; n < es.length; n++) {
      var r = es[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kr !== null && qi(kr, e), Cr !== null && qi(Cr, e), Er !== null && qi(Er, e), Ul.forEach(t), Wl.forEach(t), n = 0; n < hr.length; n++)
    r = hr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hr.length && (n = hr[0], n.blockedOn === null); )
    Fx(n), n.blockedOn === null && hr.shift();
}
var ni = Kn.ReactCurrentBatchConfig, ru = !0;
function IE(e, t, n, r) {
  var o = be, i = ni.transition;
  ni.transition = null;
  try {
    be = 1, zh(e, t, n, r);
  } finally {
    be = o, ni.transition = i;
  }
}
function OE(e, t, n, r) {
  var o = be, i = ni.transition;
  ni.transition = null;
  try {
    be = 4, zh(e, t, n, r);
  } finally {
    be = o, ni.transition = i;
  }
}
function zh(e, t, n, r) {
  if (ru) {
    var o = Ud(e, t, n, r);
    if (o === null)
      mf(e, t, r, ou, n), qg(e, r);
    else if (RE(o, e, t, n, r))
      r.stopPropagation();
    else if (qg(e, r), t & 4 && -1 < _E.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ta(o);
        if (i !== null && Nx(i), i = Ud(e, t, n, r), i === null && mf(e, t, r, ou, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      mf(e, t, r, null, n);
  }
}
var ou = null;
function Ud(e, t, n, r) {
  if (ou = null, e = Mh(r), e = eo(e), e !== null)
    if (t = wo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = $x(t), e !== null)
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
function zx(e) {
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
      switch (wE()) {
        case Dh:
          return 1;
        case Rx:
          return 4;
        case tu:
        case bE:
          return 16;
        case Tx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gr = null, Bh = null, Ns = null;
function Bx() {
  if (Ns)
    return Ns;
  var e, t = Bh, n = t.length, r, o = "value" in gr ? gr.value : gr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Ns = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ms(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ts() {
  return !0;
}
function Gg() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ts : Gg, this.isPropagationStopped = Gg, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ts);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ts);
  }, persist: function() {
  }, isPersistent: ts }), t;
}
var _i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, jh = Ot(_i), Ra = Oe({}, _i, { view: 0, detail: 0 }), NE = Ot(Ra), lf, af, Qi, Zu = Oe({}, Ra, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (lf = e.screenX - Qi.screenX, af = e.screenY - Qi.screenY) : af = lf = 0, Qi = e), lf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : af;
} }), Kg = Ot(Zu), ME = Oe({}, Zu, { dataTransfer: 0 }), DE = Ot(ME), LE = Oe({}, Ra, { relatedTarget: 0 }), sf = Ot(LE), FE = Oe({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zE = Ot(FE), BE = Oe({}, _i, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jE = Ot(BE), VE = Oe({}, _i, { data: 0 }), Yg = Ot(VE), HE = {
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
}, UE = {
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
}, WE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = WE[e]) ? !!t[e] : !1;
}
function Vh() {
  return qE;
}
var QE = Oe({}, Ra, { key: function(e) {
  if (e.key) {
    var t = HE[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ms(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? UE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vh, charCode: function(e) {
  return e.type === "keypress" ? Ms(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), GE = Ot(QE), KE = Oe({}, Zu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xg = Ot(KE), YE = Oe({}, Ra, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vh }), XE = Ot(YE), ZE = Oe({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), JE = Ot(ZE), e$ = Oe({}, Zu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), t$ = Ot(e$), n$ = [9, 13, 27, 32], Hh = jn && "CompositionEvent" in window, wl = null;
jn && "documentMode" in document && (wl = document.documentMode);
var r$ = jn && "TextEvent" in window && !wl, jx = jn && (!Hh || wl && 8 < wl && 11 >= wl), Zg = String.fromCharCode(32), Jg = !1;
function Vx(e, t) {
  switch (e) {
    case "keyup":
      return n$.indexOf(t.keyCode) !== -1;
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
function Hx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jo = !1;
function o$(e, t) {
  switch (e) {
    case "compositionend":
      return Hx(t);
    case "keypress":
      return t.which !== 32 ? null : (Jg = !0, Zg);
    case "textInput":
      return e = t.data, e === Zg && Jg ? null : e;
    default:
      return null;
  }
}
function i$(e, t) {
  if (jo)
    return e === "compositionend" || !Hh && Vx(e, t) ? (e = Bx(), Ns = Bh = gr = null, jo = !1, e) : null;
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
      return jx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var l$ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function e0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!l$[e.type] : t === "textarea";
}
function Ux(e, t, n, r) {
  bx(r), t = iu(t, "onChange"), 0 < t.length && (n = new jh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bl = null, Ql = null;
function a$(e) {
  tw(e, 0);
}
function Ju(e) {
  var t = Uo(e);
  if (hx(t))
    return e;
}
function s$(e, t) {
  if (e === "change")
    return t;
}
var Wx = !1;
if (jn) {
  var uf;
  if (jn) {
    var cf = "oninput" in document;
    if (!cf) {
      var t0 = document.createElement("div");
      t0.setAttribute("oninput", "return;"), cf = typeof t0.oninput == "function";
    }
    uf = cf;
  } else
    uf = !1;
  Wx = uf && (!document.documentMode || 9 < document.documentMode);
}
function n0() {
  bl && (bl.detachEvent("onpropertychange", qx), Ql = bl = null);
}
function qx(e) {
  if (e.propertyName === "value" && Ju(Ql)) {
    var t = [];
    Ux(t, Ql, e, Mh(e)), Ex(a$, t);
  }
}
function u$(e, t, n) {
  e === "focusin" ? (n0(), bl = t, Ql = n, bl.attachEvent("onpropertychange", qx)) : e === "focusout" && n0();
}
function c$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ju(Ql);
}
function f$(e, t) {
  if (e === "click")
    return Ju(t);
}
function d$(e, t) {
  if (e === "input" || e === "change")
    return Ju(t);
}
function p$(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dn = typeof Object.is == "function" ? Object.is : p$;
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
    if (!$d.call(t, o) || !dn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function r0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function o0(e, t) {
  var n = r0(e);
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
    n = r0(n);
  }
}
function Qx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gx() {
  for (var e = window, t = Zs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Zs(e.document);
  }
  return t;
}
function Uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function h$(e) {
  var t = Gx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qx(n.ownerDocument.documentElement, n)) {
    if (r !== null && Uh(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = o0(n, i);
        var l = o0(
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
var m$ = jn && "documentMode" in document && 11 >= document.documentMode, Vo = null, Wd = null, Sl = null, qd = !1;
function i0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qd || Vo == null || Vo !== Zs(r) || (r = Vo, "selectionStart" in r && Uh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sl && Gl(Sl, r) || (Sl = r, r = iu(Wd, "onSelect"), 0 < r.length && (t = new jh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vo)));
}
function ns(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ho = { animationend: ns("Animation", "AnimationEnd"), animationiteration: ns("Animation", "AnimationIteration"), animationstart: ns("Animation", "AnimationStart"), transitionend: ns("Transition", "TransitionEnd") }, ff = {}, Kx = {};
jn && (Kx = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);
function ec(e) {
  if (ff[e])
    return ff[e];
  if (!Ho[e])
    return e;
  var t = Ho[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Kx)
      return ff[e] = t[n];
  return e;
}
var Yx = ec("animationend"), Xx = ec("animationiteration"), Zx = ec("animationstart"), Jx = ec("transitionend"), ew = /* @__PURE__ */ new Map(), l0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dr(e, t) {
  ew.set(e, t), xo(t, [e]);
}
for (var df = 0; df < l0.length; df++) {
  var pf = l0[df], g$ = pf.toLowerCase(), y$ = pf[0].toUpperCase() + pf.slice(1);
  Dr(g$, "on" + y$);
}
Dr(Yx, "onAnimationEnd");
Dr(Xx, "onAnimationIteration");
Dr(Zx, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(Jx, "onTransitionEnd");
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
var pl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), v$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(pl));
function a0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, gE(r, t, void 0, e), e.currentTarget = null;
}
function tw(e, t) {
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
          a0(o, a, u), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (a = r[l], s = a.instance, u = a.currentTarget, a = a.listener, s !== i && o.isPropagationStopped())
            break e;
          a0(o, a, u), i = s;
        }
    }
  }
  if (eu)
    throw e = jd, eu = !1, jd = null, e;
}
function $e(e, t) {
  var n = t[Xd];
  n === void 0 && (n = t[Xd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nw(t, e, 2, !1), n.add(r));
}
function hf(e, t, n) {
  var r = 0;
  t && (r |= 4), nw(n, e, r, t);
}
var rs = "_reactListening" + Math.random().toString(36).slice(2);
function Kl(e) {
  if (!e[rs]) {
    e[rs] = !0, ux.forEach(function(n) {
      n !== "selectionchange" && (v$.has(n) || hf(n, !1, e), hf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rs] || (t[rs] = !0, hf("selectionchange", !1, t));
  }
}
function nw(e, t, n, r) {
  switch (zx(t)) {
    case 1:
      var o = IE;
      break;
    case 4:
      o = OE;
      break;
    default:
      o = zh;
  }
  n = o.bind(null, t, n, e), o = void 0, !Bd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
  Ex(function() {
    var u = i, c = Mh(n), f = [];
    e: {
      var d = ew.get(e);
      if (d !== void 0) {
        var g = jh, h = e;
        switch (e) {
          case "keypress":
            if (Ms(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = GE;
            break;
          case "focusin":
            h = "focus", g = sf;
            break;
          case "focusout":
            h = "blur", g = sf;
            break;
          case "beforeblur":
          case "afterblur":
            g = sf;
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
            g = Kg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = DE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = XE;
            break;
          case Yx:
          case Xx:
          case Zx:
            g = zE;
            break;
          case Jx:
            g = JE;
            break;
          case "scroll":
            g = NE;
            break;
          case "wheel":
            g = t$;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = jE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Xg;
        }
        var y = (t & 4) !== 0, w = !y && e === "scroll", p = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var v = u, x; v !== null; ) {
          x = v;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Hl(v, p), b != null && y.push(Yl(v, b, x)))), w)
            break;
          v = v.return;
        }
        0 < y.length && (d = new g(d, h, null, n, c), f.push({ event: d, listeners: y }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Fd && (h = n.relatedTarget || n.fromElement) && (eo(h) || h[Vn]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? eo(h) : null, h !== null && (w = wo(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
          if (y = Kg, b = "onMouseLeave", p = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (y = Xg, b = "onPointerLeave", p = "onPointerEnter", v = "pointer"), w = g == null ? d : Uo(g), x = h == null ? d : Uo(h), d = new y(b, v + "leave", g, n, c), d.target = w, d.relatedTarget = x, b = null, eo(c) === u && (y = new y(p, v + "enter", h, n, c), y.target = x, y.relatedTarget = w, b = y), w = b, g && h)
            t: {
              for (y = g, p = h, v = 0, x = y; x; x = Ao(x))
                v++;
              for (x = 0, b = p; b; b = Ao(b))
                x++;
              for (; 0 < v - x; )
                y = Ao(y), v--;
              for (; 0 < x - v; )
                p = Ao(p), x--;
              for (; v--; ) {
                if (y === p || p !== null && y === p.alternate)
                  break t;
                y = Ao(y), p = Ao(p);
              }
              y = null;
            }
          else
            y = null;
          g !== null && s0(f, d, g, y, !1), h !== null && w !== null && s0(f, w, h, y, !0);
        }
      }
      e: {
        if (d = u ? Uo(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var A = s$;
        else if (e0(d))
          if (Wx)
            A = d$;
          else {
            A = c$;
            var S = u$;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = f$);
        if (A && (A = A(e, u))) {
          Ux(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Od(d, "number", d.value);
      }
      switch (S = u ? Uo(u) : window, e) {
        case "focusin":
          (e0(S) || S.contentEditable === "true") && (Vo = S, Wd = u, Sl = null);
          break;
        case "focusout":
          Sl = Wd = Vo = null;
          break;
        case "mousedown":
          qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          qd = !1, i0(f, n, c);
          break;
        case "selectionchange":
          if (m$)
            break;
        case "keydown":
        case "keyup":
          i0(f, n, c);
      }
      var $;
      if (Hh)
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
        jo ? Vx(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (jx && n.locale !== "ko" && (jo || E !== "onCompositionStart" ? E === "onCompositionEnd" && jo && ($ = Bx()) : (gr = c, Bh = "value" in gr ? gr.value : gr.textContent, jo = !0)), S = iu(u, E), 0 < S.length && (E = new Yg(E, e, null, n, c), f.push({ event: E, listeners: S }), $ ? E.data = $ : ($ = Hx(n), $ !== null && (E.data = $)))), ($ = r$ ? o$(e, n) : i$(e, n)) && (u = iu(u, "onBeforeInput"), 0 < u.length && (c = new Yg("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = $));
    }
    tw(f, t);
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
function s0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, u = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (s = Hl(n, i), s != null && l.unshift(Yl(n, s, a))) : o || (s = Hl(n, i), s != null && l.push(Yl(n, s, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var x$ = /\r\n?/g, w$ = /\u0000|\uFFFD/g;
function u0(e) {
  return (typeof e == "string" ? e : "" + e).replace(x$, `
`).replace(w$, "");
}
function os(e, t, n) {
  if (t = u0(t), u0(e) !== t && n)
    throw Error(j(425));
}
function lu() {
}
var Qd = null, Gd = null;
function Kd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Yd = typeof setTimeout == "function" ? setTimeout : void 0, b$ = typeof clearTimeout == "function" ? clearTimeout : void 0, c0 = typeof Promise == "function" ? Promise : void 0, S$ = typeof queueMicrotask == "function" ? queueMicrotask : typeof c0 < "u" ? function(e) {
  return c0.resolve(null).then(e).catch(k$);
} : Yd;
function k$(e) {
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
function f0(e) {
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
var Ri = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Ri, Xl = "__reactProps$" + Ri, Vn = "__reactContainer$" + Ri, Xd = "__reactEvents$" + Ri, C$ = "__reactListeners$" + Ri, E$ = "__reactHandles$" + Ri;
function eo(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Vn] || n[bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = f0(e); e !== null; ) {
          if (n = e[bn])
            return n;
          e = f0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ta(e) {
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
var Zd = [], Wo = -1;
function Lr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Wo || (e.current = Zd[Wo], Zd[Wo] = null, Wo--);
}
function Ee(e, t) {
  Wo++, Zd[Wo] = e.current, e.current = t;
}
var Nr = {}, lt = Lr(Nr), bt = Lr(!1), so = Nr;
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
function au() {
  Pe(bt), Pe(lt);
}
function d0(e, t, n) {
  if (lt.current !== Nr)
    throw Error(j(168));
  Ee(lt, t), Ee(bt, n);
}
function rw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(j(108, uE(e) || "Unknown", o));
  return Oe({}, n, r);
}
function su(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nr, so = lt.current, Ee(lt, e), Ee(bt, bt.current), !0;
}
function p0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(j(169));
  n ? (e = rw(e, t, so), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(lt), Ee(lt, e)) : Pe(bt), Ee(bt, n);
}
var Dn = null, nc = !1, yf = !1;
function ow(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function $$(e) {
  nc = !0, ow(e);
}
function Fr() {
  if (!yf && Dn !== null) {
    yf = !0;
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
      throw Dn !== null && (Dn = Dn.slice(e + 1)), _x(Dh, Fr), o;
    } finally {
      be = t, yf = !1;
    }
  }
  return null;
}
var qo = [], Qo = 0, uu = null, cu = 0, Dt = [], Lt = 0, uo = null, Ln = 1, Fn = "";
function Wr(e, t) {
  qo[Qo++] = cu, qo[Qo++] = uu, uu = e, cu = t;
}
function iw(e, t, n) {
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
function Wh(e) {
  e.return !== null && (Wr(e, 1), iw(e, 1, 0));
}
function qh(e) {
  for (; e === uu; )
    uu = qo[--Qo], qo[Qo] = null, cu = qo[--Qo], qo[Qo] = null;
  for (; e === uo; )
    uo = Dt[--Lt], Dt[Lt] = null, Fn = Dt[--Lt], Dt[Lt] = null, Ln = Dt[--Lt], Dt[Lt] = null;
}
var _t = null, $t = null, Re = !1, nn = null;
function lw(e, t) {
  var n = Ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function h0(e, t) {
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
function Jd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ep(e) {
  if (Re) {
    var t = $t;
    if (t) {
      var n = t;
      if (!h0(e, t)) {
        if (Jd(e))
          throw Error(j(418));
        t = $r(n.nextSibling);
        var r = _t;
        t && h0(e, t) ? lw(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (Jd(e))
        throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function m0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function is(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return m0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Kd(e.type, e.memoizedProps)), t && (t = $t)) {
    if (Jd(e))
      throw aw(), Error(j(418));
    for (; t; )
      lw(e, t), t = $r(t.nextSibling);
  }
  if (m0(e), e.tag === 13) {
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
function aw() {
  for (var e = $t; e; )
    e = $r(e.nextSibling);
}
function gi() {
  $t = _t = null, Re = !1;
}
function Qh(e) {
  nn === null ? nn = [e] : nn.push(e);
}
var A$ = Kn.ReactCurrentBatchConfig;
function en(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fu = Lr(null), du = null, Go = null, Gh = null;
function Kh() {
  Gh = Go = du = null;
}
function Yh(e) {
  var t = fu.current;
  Pe(fu), e._currentValue = t;
}
function tp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ri(e, t) {
  du = e, Gh = Go = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function qt(e) {
  var t = e._currentValue;
  if (Gh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Go === null) {
      if (du === null)
        throw Error(j(308));
      Go = e, du.dependencies = { lanes: 0, firstContext: e };
    } else
      Go = Go.next = e;
  return t;
}
var to = null;
function Xh(e) {
  to === null ? to = [e] : to.push(e);
}
function sw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Xh(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Hn(e, r);
}
function Hn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var pr = !1;
function Zh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function uw(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, Xh(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Hn(e, n);
}
function Ds(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lh(e, n);
  }
}
function g0(e, t) {
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
          var h = e, y = a;
          switch (d = t, g = n, y.tag) {
            case 1:
              if (h = y.payload, typeof h == "function") {
                f = h.call(g, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = y.payload, d = typeof h == "function" ? h.call(g, f, d) : h, d == null)
                break e;
              f = Oe({}, f, d);
              break e;
            case 2:
              pr = !0;
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
function y0(e, t, n) {
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
var cw = new sx.Component().refs;
function np(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rc = { isMounted: function(e) {
  return (e = e._reactInternals) ? wo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = _r(e), i = zn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ar(e, i, o), t !== null && (cn(t, e, o, r), Ds(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = _r(e), i = zn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ar(e, i, o), t !== null && (cn(t, e, o, r), Ds(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pt(), r = _r(e), o = zn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ar(e, o, r), t !== null && (cn(t, e, r, n), Ds(t, e, r));
} };
function v0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Gl(n, r) || !Gl(o, i) : !0;
}
function fw(e, t, n) {
  var r = !1, o = Nr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qt(i) : (o = St(t) ? so : lt.current, r = t.contextTypes, i = (r = r != null) ? mi(e, o) : Nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function x0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rc.enqueueReplaceState(t, t.state, null);
}
function rp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = cw, Zh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = qt(i) : (i = St(t) ? so : lt.current, o.context = mi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (np(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && rc.enqueueReplaceState(o, o.state, null), pu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
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
        var a = o.refs;
        a === cw && (a = o.refs = {}), l === null ? delete a[i] : a[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(j(284));
    if (!n._owner)
      throw Error(j(290, e));
  }
  return e;
}
function ls(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function w0(e) {
  var t = e._init;
  return t(e._payload);
}
function dw(e) {
  function t(p, v) {
    if (e) {
      var x = p.deletions;
      x === null ? (p.deletions = [v], p.flags |= 16) : x.push(v);
    }
  }
  function n(p, v) {
    if (!e)
      return null;
    for (; v !== null; )
      t(p, v), v = v.sibling;
    return null;
  }
  function r(p, v) {
    for (p = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? p.set(v.key, v) : p.set(v.index, v), v = v.sibling;
    return p;
  }
  function o(p, v) {
    return p = Rr(p, v), p.index = 0, p.sibling = null, p;
  }
  function i(p, v, x) {
    return p.index = x, e ? (x = p.alternate, x !== null ? (x = x.index, x < v ? (p.flags |= 2, v) : x) : (p.flags |= 2, v)) : (p.flags |= 1048576, v);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, v, x, b) {
    return v === null || v.tag !== 6 ? (v = Cf(x, p.mode, b), v.return = p, v) : (v = o(v, x), v.return = p, v);
  }
  function s(p, v, x, b) {
    var A = x.type;
    return A === Bo ? c(p, v, x.props.children, b, x.key) : v !== null && (v.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && w0(A) === v.type) ? (b = o(v, x.props), b.ref = Gi(p, v, x), b.return = p, b) : (b = Vs(x.type, x.key, x.props, null, p.mode, b), b.ref = Gi(p, v, x), b.return = p, b);
  }
  function u(p, v, x, b) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== x.containerInfo || v.stateNode.implementation !== x.implementation ? (v = Ef(x, p.mode, b), v.return = p, v) : (v = o(v, x.children || []), v.return = p, v);
  }
  function c(p, v, x, b, A) {
    return v === null || v.tag !== 7 ? (v = oo(x, p.mode, b, A), v.return = p, v) : (v = o(v, x), v.return = p, v);
  }
  function f(p, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return v = Cf("" + v, p.mode, x), v.return = p, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ka:
          return x = Vs(v.type, v.key, v.props, null, p.mode, x), x.ref = Gi(p, null, v), x.return = p, x;
        case zo:
          return v = Ef(v, p.mode, x), v.return = p, v;
        case dr:
          var b = v._init;
          return f(p, b(v._payload), x);
      }
      if (fl(v) || Hi(v))
        return v = oo(v, p.mode, x, null), v.return = p, v;
      ls(p, v);
    }
    return null;
  }
  function d(p, v, x, b) {
    var A = v !== null ? v.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : a(p, v, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ka:
          return x.key === A ? s(p, v, x, b) : null;
        case zo:
          return x.key === A ? u(p, v, x, b) : null;
        case dr:
          return A = x._init, d(
            p,
            v,
            A(x._payload),
            b
          );
      }
      if (fl(x) || Hi(x))
        return A !== null ? null : c(p, v, x, b, null);
      ls(p, x);
    }
    return null;
  }
  function g(p, v, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, a(v, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ka:
          return p = p.get(b.key === null ? x : b.key) || null, s(v, p, b, A);
        case zo:
          return p = p.get(b.key === null ? x : b.key) || null, u(v, p, b, A);
        case dr:
          var S = b._init;
          return g(p, v, x, S(b._payload), A);
      }
      if (fl(b) || Hi(b))
        return p = p.get(x) || null, c(v, p, b, A, null);
      ls(v, b);
    }
    return null;
  }
  function h(p, v, x, b) {
    for (var A = null, S = null, $ = v, E = v = 0, P = null; $ !== null && E < x.length; E++) {
      $.index > E ? (P = $, $ = null) : P = $.sibling;
      var R = d(p, $, x[E], b);
      if (R === null) {
        $ === null && ($ = P);
        break;
      }
      e && $ && R.alternate === null && t(p, $), v = i(R, v, E), S === null ? A = R : S.sibling = R, S = R, $ = P;
    }
    if (E === x.length)
      return n(p, $), Re && Wr(p, E), A;
    if ($ === null) {
      for (; E < x.length; E++)
        $ = f(p, x[E], b), $ !== null && (v = i($, v, E), S === null ? A = $ : S.sibling = $, S = $);
      return Re && Wr(p, E), A;
    }
    for ($ = r(p, $); E < x.length; E++)
      P = g($, p, E, x[E], b), P !== null && (e && P.alternate !== null && $.delete(P.key === null ? E : P.key), v = i(P, v, E), S === null ? A = P : S.sibling = P, S = P);
    return e && $.forEach(function(T) {
      return t(p, T);
    }), Re && Wr(p, E), A;
  }
  function y(p, v, x, b) {
    var A = Hi(x);
    if (typeof A != "function")
      throw Error(j(150));
    if (x = A.call(x), x == null)
      throw Error(j(151));
    for (var S = A = null, $ = v, E = v = 0, P = null, R = x.next(); $ !== null && !R.done; E++, R = x.next()) {
      $.index > E ? (P = $, $ = null) : P = $.sibling;
      var T = d(p, $, R.value, b);
      if (T === null) {
        $ === null && ($ = P);
        break;
      }
      e && $ && T.alternate === null && t(p, $), v = i(T, v, E), S === null ? A = T : S.sibling = T, S = T, $ = P;
    }
    if (R.done)
      return n(
        p,
        $
      ), Re && Wr(p, E), A;
    if ($ === null) {
      for (; !R.done; E++, R = x.next())
        R = f(p, R.value, b), R !== null && (v = i(R, v, E), S === null ? A = R : S.sibling = R, S = R);
      return Re && Wr(p, E), A;
    }
    for ($ = r(p, $); !R.done; E++, R = x.next())
      R = g($, p, E, R.value, b), R !== null && (e && R.alternate !== null && $.delete(R.key === null ? E : R.key), v = i(R, v, E), S === null ? A = R : S.sibling = R, S = R);
    return e && $.forEach(function(O) {
      return t(p, O);
    }), Re && Wr(p, E), A;
  }
  function w(p, v, x, b) {
    if (typeof x == "object" && x !== null && x.type === Bo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ka:
          e: {
            for (var A = x.key, S = v; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === Bo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), v = o(S, x.props.children), v.return = p, p = v;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === dr && w0(A) === S.type) {
                  n(p, S.sibling), v = o(S, x.props), v.ref = Gi(p, S, x), v.return = p, p = v;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === Bo ? (v = oo(x.props.children, p.mode, b, x.key), v.return = p, p = v) : (b = Vs(x.type, x.key, x.props, null, p.mode, b), b.ref = Gi(p, v, x), b.return = p, p = b);
          }
          return l(p);
        case zo:
          e: {
            for (S = x.key; v !== null; ) {
              if (v.key === S)
                if (v.tag === 4 && v.stateNode.containerInfo === x.containerInfo && v.stateNode.implementation === x.implementation) {
                  n(p, v.sibling), v = o(v, x.children || []), v.return = p, p = v;
                  break e;
                } else {
                  n(p, v);
                  break;
                }
              else
                t(p, v);
              v = v.sibling;
            }
            v = Ef(x, p.mode, b), v.return = p, p = v;
          }
          return l(p);
        case dr:
          return S = x._init, w(p, v, S(x._payload), b);
      }
      if (fl(x))
        return h(p, v, x, b);
      if (Hi(x))
        return y(p, v, x, b);
      ls(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, v !== null && v.tag === 6 ? (n(p, v.sibling), v = o(v, x), v.return = p, p = v) : (n(p, v), v = Cf(x, p.mode, b), v.return = p, p = v), l(p)) : n(p, v);
  }
  return w;
}
var yi = dw(!0), pw = dw(!1), Ia = {}, kn = Lr(Ia), Zl = Lr(Ia), Jl = Lr(Ia);
function no(e) {
  if (e === Ia)
    throw Error(j(174));
  return e;
}
function Jh(e, t) {
  switch (Ee(Jl, t), Ee(Zl, e), Ee(kn, Ia), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Md(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Md(t, e);
  }
  Pe(kn), Ee(kn, t);
}
function vi() {
  Pe(kn), Pe(Zl), Pe(Jl);
}
function hw(e) {
  no(Jl.current);
  var t = no(kn.current), n = Md(t, e.type);
  t !== n && (Ee(Zl, e), Ee(kn, n));
}
function em(e) {
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
var vf = [];
function tm() {
  for (var e = 0; e < vf.length; e++)
    vf[e]._workInProgressVersionPrimary = null;
  vf.length = 0;
}
var Ls = Kn.ReactCurrentDispatcher, xf = Kn.ReactCurrentBatchConfig, co = 0, Ie = null, qe = null, Ge = null, mu = !1, kl = !1, ea = 0, P$ = 0;
function tt() {
  throw Error(j(321));
}
function nm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dn(e[n], t[n]))
      return !1;
  return !0;
}
function rm(e, t, n, r, o, i) {
  if (co = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ls.current = e === null || e.memoizedState === null ? I$ : O$, e = n(r, o), kl) {
    i = 0;
    do {
      if (kl = !1, ea = 0, 25 <= i)
        throw Error(j(301));
      i += 1, Ge = qe = null, t.updateQueue = null, Ls.current = N$, e = n(r, o);
    } while (kl);
  }
  if (Ls.current = gu, t = qe !== null && qe.next !== null, co = 0, Ge = qe = Ie = null, mu = !1, t)
    throw Error(j(300));
  return e;
}
function om() {
  var e = ea !== 0;
  return ea = 0, e;
}
function yn() {
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
function ta(e, t) {
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
    s === null ? l = r : s.next = a, dn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
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
function mw() {
}
function gw(e, t) {
  var n = Ie, r = Qt(), o = t(), i = !dn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, im(xw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, na(9, vw.bind(null, n, r, o, t), void 0, null), Ye === null)
      throw Error(j(349));
    (co & 30) !== 0 || yw(n, t, o);
  }
  return o;
}
function yw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ww(t) && bw(e);
}
function xw(e, t, n) {
  return n(function() {
    ww(t) && bw(e);
  });
}
function ww(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dn(e, n);
  } catch {
    return !0;
  }
}
function bw(e) {
  var t = Hn(e, 1);
  t !== null && cn(t, e, 1, -1);
}
function b0(e) {
  var t = yn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: e }, t.queue = e, e = e.dispatch = T$.bind(null, Ie, e), [t.memoizedState, e];
}
function na(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sw() {
  return Qt().memoizedState;
}
function Fs(e, t, n, r) {
  var o = yn();
  Ie.flags |= e, o.memoizedState = na(1 | t, n, void 0, r === void 0 ? null : r);
}
function oc(e, t, n, r) {
  var o = Qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (qe !== null) {
    var l = qe.memoizedState;
    if (i = l.destroy, r !== null && nm(r, l.deps)) {
      o.memoizedState = na(t, n, i, r);
      return;
    }
  }
  Ie.flags |= e, o.memoizedState = na(1 | t, n, i, r);
}
function S0(e, t) {
  return Fs(8390656, 8, e, t);
}
function im(e, t) {
  return oc(2048, 8, e, t);
}
function kw(e, t) {
  return oc(4, 2, e, t);
}
function Cw(e, t) {
  return oc(4, 4, e, t);
}
function Ew(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function $w(e, t, n) {
  return n = n != null ? n.concat([e]) : null, oc(4, 4, Ew.bind(null, t, e), n);
}
function lm() {
}
function Aw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pw(e, t) {
  var n = Qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _w(e, t, n) {
  return (co & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (dn(n, t) || (n = Ix(), Ie.lanes |= n, fo |= n, e.baseState = !0), t);
}
function _$(e, t) {
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
function Rw() {
  return Qt().memoizedState;
}
function R$(e, t, n) {
  var r = _r(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Tw(e))
    Iw(t, n);
  else if (n = sw(e, t, n, r), n !== null) {
    var o = pt();
    cn(n, e, r, o), Ow(n, t, r);
  }
}
function T$(e, t, n) {
  var r = _r(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tw(e))
    Iw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, a = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = a, dn(a, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, Xh(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = sw(e, t, o, r), n !== null && (o = pt(), cn(n, e, r, o), Ow(n, t, r));
  }
}
function Tw(e) {
  var t = e.alternate;
  return e === Ie || t !== null && t === Ie;
}
function Iw(e, t) {
  kl = mu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ow(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lh(e, n);
  }
}
var gu = { readContext: qt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, I$ = { readContext: qt, useCallback: function(e, t) {
  return yn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qt, useEffect: S0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fs(
    4194308,
    4,
    Ew.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = R$.bind(null, Ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yn();
  return e = { current: e }, t.memoizedState = e;
}, useState: b0, useDebugValue: lm, useDeferredValue: function(e) {
  return yn().memoizedState = e;
}, useTransition: function() {
  var e = b0(!1), t = e[0];
  return e = _$.bind(null, e[1]), yn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ie, o = yn();
  if (Re) {
    if (n === void 0)
      throw Error(j(407));
    n = n();
  } else {
    if (n = t(), Ye === null)
      throw Error(j(349));
    (co & 30) !== 0 || yw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, S0(xw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, na(9, vw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = yn(), t = Ye.identifierPrefix;
  if (Re) {
    var n = Fn, r = Ln;
    n = (r & ~(1 << 32 - un(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ea++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = P$++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, O$ = {
  readContext: qt,
  useCallback: Aw,
  useContext: qt,
  useEffect: im,
  useImperativeHandle: $w,
  useInsertionEffect: kw,
  useLayoutEffect: Cw,
  useMemo: Pw,
  useReducer: wf,
  useRef: Sw,
  useState: function() {
    return wf(ta);
  },
  useDebugValue: lm,
  useDeferredValue: function(e) {
    var t = Qt();
    return _w(t, qe.memoizedState, e);
  },
  useTransition: function() {
    var e = wf(ta)[0], t = Qt().memoizedState;
    return [e, t];
  },
  useMutableSource: mw,
  useSyncExternalStore: gw,
  useId: Rw,
  unstable_isNewReconciler: !1
}, N$ = { readContext: qt, useCallback: Aw, useContext: qt, useEffect: im, useImperativeHandle: $w, useInsertionEffect: kw, useLayoutEffect: Cw, useMemo: Pw, useReducer: bf, useRef: Sw, useState: function() {
  return bf(ta);
}, useDebugValue: lm, useDeferredValue: function(e) {
  var t = Qt();
  return qe === null ? t.memoizedState = e : _w(t, qe.memoizedState, e);
}, useTransition: function() {
  var e = bf(ta)[0], t = Qt().memoizedState;
  return [e, t];
}, useMutableSource: mw, useSyncExternalStore: gw, useId: Rw, unstable_isNewReconciler: !1 };
function xi(e, t) {
  try {
    var n = "", r = t;
    do
      n += sE(r), r = r.return;
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
function op(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var M$ = typeof WeakMap == "function" ? WeakMap : Map;
function Nw(e, t, n) {
  n = zn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    vu || (vu = !0, hp = r), op(e, t);
  }, n;
}
function Mw(e, t, n) {
  n = zn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      op(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    op(e, t), typeof r != "function" && (Pr === null ? Pr = /* @__PURE__ */ new Set([this]) : Pr.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function k0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new M$();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = K$.bind(null, e, t, n), t.then(e, e));
}
function C0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function E0(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zn(-1, 1), t.tag = 2, Ar(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var D$ = Kn.ReactCurrentOwner, wt = !1;
function ft(e, t, n, r) {
  t.child = e === null ? pw(t, null, n, r) : yi(t, e.child, n, r);
}
function $0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ri(t, o), r = rm(e, t, n, r, i, o), n = om(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Un(e, t, o)) : (Re && n && Wh(t), t.flags |= 1, ft(e, t, r, o), t.child);
}
function A0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !hm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Dw(e, t, i, r, o)) : (e = Vs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Gl, n(l, r) && e.ref === t.ref)
      return Un(e, t, o);
  }
  return t.flags |= 1, e = Rr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Dw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gl(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, Un(e, t, o);
  }
  return ip(e, t, n, r, o);
}
function Lw(e, t, n) {
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
function Fw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ip(e, t, n, r, o) {
  var i = St(n) ? so : lt.current;
  return i = mi(t, i), ri(t, o), n = rm(e, t, n, r, i, o), r = om(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Un(e, t, o)) : (Re && r && Wh(t), t.flags |= 1, ft(e, t, n, o), t.child);
}
function P0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    su(t);
  } else
    i = !1;
  if (ri(t, o), t.stateNode === null)
    zs(e, t), fw(t, n, r), rp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var s = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qt(u) : (u = St(n) ? so : lt.current, u = mi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && x0(t, l, r, u), pr = !1;
    var d = t.memoizedState;
    l.state = d, pu(t, r, l, o), s = t.memoizedState, a !== r || d !== s || bt.current || pr ? (typeof c == "function" && (np(t, n, c, r), s = t.memoizedState), (a = pr || v0(t, n, a, r, d, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, uw(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : en(t.type, a), l.props = u, f = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = qt(s) : (s = St(n) ? so : lt.current, s = mi(t, s));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== s) && x0(t, l, r, s), pr = !1, d = t.memoizedState, l.state = d, pu(t, r, l, o);
    var h = t.memoizedState;
    a !== f || d !== h || bt.current || pr ? (typeof g == "function" && (np(t, n, g, r), h = t.memoizedState), (u = pr || v0(t, n, u, r, d, h, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return lp(e, t, n, r, i, o);
}
function lp(e, t, n, r, o, i) {
  Fw(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && p0(t, n, !1), Un(e, t, i);
  r = t.stateNode, D$.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = yi(t, e.child, null, i), t.child = yi(t, null, a, i)) : ft(e, t, a, i), t.memoizedState = r.state, o && p0(t, n, !0), t.child;
}
function zw(e) {
  var t = e.stateNode;
  t.pendingContext ? d0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && d0(e, t.context, !1), Jh(e, t.containerInfo);
}
function _0(e, t, n, r, o) {
  return gi(), Qh(o), t.flags |= 256, ft(e, t, n, r), t.child;
}
var ap = { dehydrated: null, treeContext: null, retryLane: 0 };
function sp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bw(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(Te, o & 1), e === null)
    return ep(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = ac(l, r, 0, null), e = oo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = sp(n), t.memoizedState = ap, e) : am(t, l));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return L$(e, t, l, r, a, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, a = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Rr(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Rr(a, i) : (i = oo(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? sp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ap, r;
  }
  return i = e.child, e = i.sibling, r = Rr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function am(e, t) {
  return t = ac({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function as(e, t, n, r) {
  return r !== null && Qh(r), yi(t, e.child, null, n), e = am(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function L$(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Sf(Error(j(422))), as(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ac({ mode: "visible", children: r.children }, o, 0, null), i = oo(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && yi(t, e.child, null, l), t.child.memoizedState = sp(l), t.memoizedState = ap, i);
  if ((t.mode & 1) === 0)
    return as(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(j(419)), r = Sf(i, r, void 0), as(e, t, l, r);
  }
  if (a = (l & e.childLanes) !== 0, wt || a) {
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
    return pm(), r = Sf(Error(j(421))), as(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Y$.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, $t = $r(o.nextSibling), _t = t, Re = !0, nn = null, e !== null && (Dt[Lt++] = Ln, Dt[Lt++] = Fn, Dt[Lt++] = uo, Ln = e.id, Fn = e.overflow, uo = t), t = am(t, r.children), t.flags |= 4096, t);
}
function R0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), tp(e.return, t, n);
}
function kf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function jw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ft(e, t, r.children, n), r = Te.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && R0(e, n, t);
          else if (e.tag === 19)
            R0(e, n, t);
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
function zs(e, t) {
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
function F$(e, t, n) {
  switch (t.tag) {
    case 3:
      zw(t), gi();
      break;
    case 5:
      hw(t);
      break;
    case 1:
      St(t.type) && su(t);
      break;
    case 4:
      Jh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ee(fu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ee(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Bw(e, t, n) : (Ee(Te, Te.current & 1), e = Un(e, t, n), e !== null ? e.sibling : null);
      Ee(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return jw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Lw(e, t, n);
  }
  return Un(e, t, n);
}
var Vw, up, Hw, Uw;
Vw = function(e, t) {
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
up = function() {
};
Hw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, no(kn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Td(e, o), r = Td(e, r), i = [];
        break;
      case "select":
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Nd(e, o), r = Nd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lu);
    }
    Dd(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a)
            a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (jl.hasOwnProperty(u) ? (s != null && u === "onScroll" && $e("scroll", e), i || a === s || (i = [])) : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Uw = function(e, t, n, r) {
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
function z$(e, t, n) {
  var r = t.pendingProps;
  switch (qh(t), t.tag) {
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
      return St(t.type) && au(), nt(t), null;
    case 3:
      return r = t.stateNode, vi(), Pe(bt), Pe(lt), tm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (is(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, nn !== null && (yp(nn), nn = null))), up(e, t), nt(t), null;
    case 5:
      em(t);
      var o = no(Jl.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Hw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(j(166));
          return nt(t), null;
        }
        if (e = no(kn.current), is(t)) {
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
              zg(r, i), $e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, $e("invalid", r);
              break;
            case "textarea":
              jg(r, i), $e("invalid", r);
          }
          Dd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && os(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && os(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : jl.hasOwnProperty(l) && a != null && l === "onScroll" && $e("scroll", r);
            }
          switch (n) {
            case "input":
              Ya(r), Bg(r, i, !0);
              break;
            case "textarea":
              Ya(r), Vg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = lu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[Xl] = r, Vw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ld(n, r), n) {
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
                zg(e, r), o = Td(e, r), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), $e("invalid", e);
                break;
              case "textarea":
                jg(e, r), o = Nd(e, r), $e("invalid", e);
                break;
              default:
                o = r;
            }
            Dd(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style" ? wx(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vx(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Vl(e, s) : typeof s == "number" && Vl(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (jl.hasOwnProperty(i) ? s != null && i === "onScroll" && $e("scroll", e) : s != null && Th(e, i, s, l));
              }
            switch (n) {
              case "input":
                Ya(e), Bg(e, r, !1);
                break;
              case "textarea":
                Ya(e), Vg(e);
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
        Uw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(j(166));
        if (n = no(Jl.current), no(kn.current), is(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                os(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && os(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return nt(t), null;
    case 13:
      if (Pe(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && $t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          aw(), gi(), t.flags |= 98560, i = !1;
        else if (i = is(t), r !== null && r.dehydrated !== null) {
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
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : pm())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
    case 4:
      return vi(), up(e, t), e === null && Kl(t.stateNode.containerInfo), nt(t), null;
    case 10:
      return Yh(t.type._context), nt(t), null;
    case 17:
      return St(t.type) && au(), nt(t), null;
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
      return dm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Et & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function B$(e, t) {
  switch (qh(t), t.tag) {
    case 1:
      return St(t.type) && au(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vi(), Pe(bt), Pe(lt), tm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return em(t), null;
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
      return vi(), null;
    case 10:
      return Yh(t.type._context), null;
    case 22:
    case 23:
      return dm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ss = !1, rt = !1, j$ = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
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
function cp(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var T0 = !1;
function V$(e, t) {
  if (Qd = ru, e = Gx(), Uh(e)) {
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
  for (Gd = { focusedElem: e, selectionRange: n }, ru = !1, Y = t; Y !== null; )
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
                  var y = h.memoizedProps, w = h.memoizedState, p = t.stateNode, v = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : en(t.type, y), w);
                  p.__reactInternalSnapshotBeforeUpdate = v;
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
  return h = T0, T0 = !1, h;
}
function Cl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && cp(t, n, i);
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
function fp(e) {
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
function Ww(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ww(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[Xl], delete t[Xd], delete t[C$], delete t[E$])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function I0(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qw(e.return))
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
function dp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lu));
  else if (r !== 4 && (e = e.child, e !== null))
    for (dp(e, t, n), e = e.sibling; e !== null; )
      dp(e, t, n), e = e.sibling;
}
function pp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (pp(e, t, n), e = e.sibling; e !== null; )
      pp(e, t, n), e = e.sibling;
}
var Xe = null, tn = !1;
function lr(e, t, n) {
  for (n = n.child; n !== null; )
    Qw(e, t, n), n = n.sibling;
}
function Qw(e, t, n) {
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
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && cp(n, t, l), o = o.next;
        } while (o !== r);
      }
      lr(e, t, n);
      break;
    case 1:
      if (!rt && (Ko(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, lr(e, t, n), rt = r) : lr(e, t, n);
      break;
    default:
      lr(e, t, n);
  }
}
function O0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new j$()), t.forEach(function(r) {
      var o = X$.bind(null, e, r);
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
        var i = e, l = t, a = l;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                Xe = a.stateNode, tn = !1;
                break e;
              case 3:
                Xe = a.stateNode.containerInfo, tn = !0;
                break e;
              case 4:
                Xe = a.stateNode.containerInfo, tn = !0;
                break e;
            }
            a = a.return;
          }
        if (Xe === null)
          throw Error(j(160));
        Qw(i, l, o), Xe = null, tn = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Gw(t, e), t = t.sibling;
}
function Gw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xt(t, e), gn(e), r & 4) {
        try {
          Cl(3, e, e.return), ic(3, e);
        } catch (y) {
          Ne(e, e.return, y);
        }
        try {
          Cl(5, e, e.return);
        } catch (y) {
          Ne(e, e.return, y);
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
        } catch (y) {
          Ne(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && mx(o, i), Ld(a, l);
            var u = Ld(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l], f = s[l + 1];
              c === "style" ? wx(o, f) : c === "dangerouslySetInnerHTML" ? vx(o, f) : c === "children" ? Vl(o, f) : Th(o, c, f, u);
            }
            switch (a) {
              case "input":
                Id(o, i);
                break;
              case "textarea":
                gx(o, i);
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
          } catch (y) {
            Ne(e, e.return, y);
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
        } catch (y) {
          Ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Xt(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ql(t.containerInfo);
        } catch (y) {
          Ne(e, e.return, y);
        }
      break;
    case 4:
      Xt(t, e), gn(e);
      break;
    case 13:
      Xt(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (cm = Fe())), r & 4 && O0(e);
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
                    } catch (y) {
                      Ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ko(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    M0(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, Y = g) : M0(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = xx("display", l));
                } catch (y) {
                  Ne(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (y) {
                  Ne(e, e.return, y);
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
      Xt(t, e), gn(e), r & 4 && O0(e);
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
          if (qw(n)) {
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
          var i = I0(e);
          pp(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = I0(e);
          dp(e, a, l);
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
function H$(e, t, n) {
  Y = e, Kw(e);
}
function Kw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ss;
      if (!l) {
        var a = o.alternate, s = a !== null && a.memoizedState !== null || rt;
        a = ss;
        var u = rt;
        if (ss = l, (rt = s) && !u)
          for (Y = o; Y !== null; )
            l = Y, s = l.child, l.tag === 22 && l.memoizedState !== null ? D0(o) : s !== null ? (s.return = l, Y = s) : D0(o);
        for (; i !== null; )
          Y = i, Kw(i), i = i.sibling;
        Y = o, ss = a, rt = u;
      }
      N0(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, Y = i) : N0(e);
  }
}
function N0(e) {
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
              i !== null && y0(t, i, r);
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
                y0(t, l, n);
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
        rt || t.flags & 512 && fp(t);
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
function M0(e) {
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
function D0(e) {
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
            fp(t);
          } catch (s) {
            Ne(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            fp(t);
          } catch (s) {
            Ne(t, l, s);
          }
      }
    } catch (s) {
      Ne(t, t.return, s);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, Y = a;
      break;
    }
    Y = t.return;
  }
}
var U$ = Math.ceil, yu = Kn.ReactCurrentDispatcher, sm = Kn.ReactCurrentOwner, Wt = Kn.ReactCurrentBatchConfig, ge = 0, Ye = null, He = null, Je = 0, Et = 0, Yo = Lr(0), Qe = 0, ra = null, fo = 0, lc = 0, um = 0, El = null, xt = null, cm = 0, wi = 1 / 0, In = null, vu = !1, hp = null, Pr = null, us = !1, yr = null, xu = 0, $l = 0, mp = null, Bs = -1, js = 0;
function pt() {
  return (ge & 6) !== 0 ? Fe() : Bs !== -1 ? Bs : Bs = Fe();
}
function _r(e) {
  return (e.mode & 1) === 0 ? 1 : (ge & 2) !== 0 && Je !== 0 ? Je & -Je : A$.transition !== null ? (js === 0 && (js = Ix()), js) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : zx(e.type)), e);
}
function cn(e, t, n, r) {
  if (50 < $l)
    throw $l = 0, mp = null, Error(j(185));
  _a(e, n, r), ((ge & 2) === 0 || e !== Ye) && (e === Ye && ((ge & 2) === 0 && (lc |= n), Qe === 4 && mr(e, Je)), kt(e, r), n === 1 && ge === 0 && (t.mode & 1) === 0 && (wi = Fe() + 500, nc && Fr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  AE(e, t);
  var r = nu(e, e === Ye ? Je : 0);
  if (r === 0)
    n !== null && Wg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Wg(n), t === 1)
      e.tag === 0 ? $$(L0.bind(null, e)) : ow(L0.bind(null, e)), S$(function() {
        (ge & 6) === 0 && Fr();
      }), n = null;
    else {
      switch (Ox(r)) {
        case 1:
          n = Dh;
          break;
        case 4:
          n = Rx;
          break;
        case 16:
          n = tu;
          break;
        case 536870912:
          n = Tx;
          break;
        default:
          n = tu;
      }
      n = rb(n, Yw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Yw(e, t) {
  if (Bs = -1, js = 0, (ge & 6) !== 0)
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
    var i = Zw();
    (Ye !== e || Je !== t) && (In = null, wi = Fe() + 500, ro(e, t));
    do
      try {
        Q$();
        break;
      } catch (a) {
        Xw(e, a);
      }
    while (1);
    Kh(), yu.current = i, ge = o, He !== null ? t = 0 : (Ye = null, Je = 0, t = Qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Vd(e), o !== 0 && (r = o, t = gp(e, o))), t === 1)
      throw n = ra, ro(e, 0), mr(e, r), kt(e, Fe()), n;
    if (t === 6)
      mr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !W$(o) && (t = wu(e, r), t === 2 && (i = Vd(e), i !== 0 && (r = i, t = gp(e, i))), t === 1))
        throw n = ra, ro(e, 0), mr(e, r), kt(e, Fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          qr(e, xt, In);
          break;
        case 3:
          if (mr(e, r), (r & 130023424) === r && (t = cm + 500 - Fe(), 10 < t)) {
            if (nu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              pt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Yd(qr.bind(null, e, xt, In), t);
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
          if (r = o, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * U$(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Yd(qr.bind(null, e, xt, In), r);
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
  return kt(e, Fe()), e.callbackNode === n ? Yw.bind(null, e) : null;
}
function gp(e, t) {
  var n = El;
  return e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256), e = wu(e, t), e !== 2 && (t = xt, xt = n, t !== null && yp(t)), e;
}
function yp(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function W$(e) {
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
  for (t &= ~um, t &= ~lc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - un(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function L0(e) {
  if ((ge & 6) !== 0)
    throw Error(j(327));
  oi();
  var t = nu(e, 0);
  if ((t & 1) === 0)
    return kt(e, Fe()), null;
  var n = wu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vd(e);
    r !== 0 && (t = r, n = gp(e, r));
  }
  if (n === 1)
    throw n = ra, ro(e, 0), mr(e, t), kt(e, Fe()), n;
  if (n === 6)
    throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qr(e, xt, In), kt(e, Fe()), null;
}
function fm(e, t) {
  var n = ge;
  ge |= 1;
  try {
    return e(t);
  } finally {
    ge = n, ge === 0 && (wi = Fe() + 500, nc && Fr());
  }
}
function po(e) {
  yr !== null && yr.tag === 0 && (ge & 6) === 0 && oi();
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
function dm() {
  Et = Yo.current, Pe(Yo);
}
function ro(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, b$(n)), He !== null)
    for (n = He.return; n !== null; ) {
      var r = n;
      switch (qh(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && au();
          break;
        case 3:
          vi(), Pe(bt), Pe(lt), tm();
          break;
        case 5:
          em(r);
          break;
        case 4:
          vi();
          break;
        case 13:
          Pe(Te);
          break;
        case 19:
          Pe(Te);
          break;
        case 10:
          Yh(r.type._context);
          break;
        case 22:
        case 23:
          dm();
      }
      n = n.return;
    }
  if (Ye = e, He = e = Rr(e.current, null), Je = Et = t, Qe = 0, ra = null, um = lc = fo = 0, xt = El = null, to !== null) {
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
function Xw(e, t) {
  do {
    var n = He;
    try {
      if (Kh(), Ls.current = gu, mu) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        mu = !1;
      }
      if (co = 0, Ge = qe = Ie = null, kl = !1, ea = 0, sm.current = null, n === null || n.return === null) {
        Qe = 1, ra = t, He = null;
        break;
      }
      e: {
        var i = e, l = n.return, a = n, s = t;
        if (t = Je, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s, c = a, f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = C0(l);
          if (g !== null) {
            g.flags &= -257, E0(g, l, a, i, t), g.mode & 1 && k0(i, u, t), t = g, s = u;
            var h = t.updateQueue;
            if (h === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              h.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              k0(i, u, t), pm();
              break e;
            }
            s = Error(j(426));
          }
        } else if (Re && a.mode & 1) {
          var w = C0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), E0(w, l, a, i, t), Qh(xi(s, a));
            break e;
          }
        }
        i = s = xi(s, a), Qe !== 4 && (Qe = 2), El === null ? El = [i] : El.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Nw(i, s, t);
              g0(i, p);
              break e;
            case 1:
              a = s;
              var v = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Pr === null || !Pr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Mw(i, a, t);
                g0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      eb(n);
    } catch (A) {
      t = A, He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Zw() {
  var e = yu.current;
  return yu.current = gu, e === null ? gu : e;
}
function pm() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Ye === null || (fo & 268435455) === 0 && (lc & 268435455) === 0 || mr(Ye, Je);
}
function wu(e, t) {
  var n = ge;
  ge |= 2;
  var r = Zw();
  (Ye !== e || Je !== t) && (In = null, ro(e, t));
  do
    try {
      q$();
      break;
    } catch (o) {
      Xw(e, o);
    }
  while (1);
  if (Kh(), ge = n, yu.current = r, He !== null)
    throw Error(j(261));
  return Ye = null, Je = 0, Qe;
}
function q$() {
  for (; He !== null; )
    Jw(He);
}
function Q$() {
  for (; He !== null && !vE(); )
    Jw(He);
}
function Jw(e) {
  var t = nb(e.alternate, e, Et);
  e.memoizedProps = e.pendingProps, t === null ? eb(e) : He = t, sm.current = null;
}
function eb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = z$(n, t, Et), n !== null) {
        He = n;
        return;
      }
    } else {
      if (n = B$(n, t), n !== null) {
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
    Wt.transition = null, be = 1, G$(e, t, n, r);
  } finally {
    Wt.transition = o, be = r;
  }
  return null;
}
function G$(e, t, n, r) {
  do
    oi();
  while (yr !== null);
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
  if (PE(e, i), e === Ye && (He = Ye = null, Je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || us || (us = !0, rb(tu, function() {
    return oi(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = Wt.transition, Wt.transition = null;
    var l = be;
    be = 1;
    var a = ge;
    ge |= 4, sm.current = null, V$(e, n), Gw(n, e), h$(Gd), ru = !!Qd, Gd = Qd = null, e.current = n, H$(n), xE(), ge = a, be = l, Wt.transition = i;
  } else
    e.current = n;
  if (us && (us = !1, yr = e, xu = o), i = e.pendingLanes, i === 0 && (Pr = null), SE(n.stateNode), kt(e, Fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vu)
    throw vu = !1, e = hp, hp = null, e;
  return (xu & 1) !== 0 && e.tag !== 0 && oi(), i = e.pendingLanes, (i & 1) !== 0 ? e === mp ? $l++ : ($l = 0, mp = e) : $l = 0, Fr(), null;
}
function oi() {
  if (yr !== null) {
    var e = Ox(xu), t = Wt.transition, n = be;
    try {
      if (Wt.transition = null, be = 16 > e ? 16 : e, yr === null)
        var r = !1;
      else {
        if (e = yr, yr = null, xu = 0, (ge & 6) !== 0)
          throw Error(j(331));
        var o = ge;
        for (ge |= 4, Y = e.current; Y !== null; ) {
          var i = Y, l = i.child;
          if ((Y.flags & 16) !== 0) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
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
                      if (Ww(c), c === u) {
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
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var w = y.sibling;
                    y.sibling = null, y = w;
                  } while (y !== null);
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
        var v = e.current;
        for (Y = v; Y !== null; ) {
          l = Y;
          var x = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && x !== null)
            x.return = l, Y = x;
          else
            e:
              for (l = v; Y !== null; ) {
                if (a = Y, (a.flags & 2048) !== 0)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ic(9, a);
                    }
                  } catch (A) {
                    Ne(a, a.return, A);
                  }
                if (a === l) {
                  Y = null;
                  break e;
                }
                var b = a.sibling;
                if (b !== null) {
                  b.return = a.return, Y = b;
                  break e;
                }
                Y = a.return;
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
function F0(e, t, n) {
  t = xi(n, t), t = Nw(e, t, 1), e = Ar(e, t, 1), t = pt(), e !== null && (_a(e, 1, t), kt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3)
    F0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        F0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pr === null || !Pr.has(r))) {
          e = xi(n, e), e = Mw(t, e, 1), t = Ar(t, e, 1), e = pt(), t !== null && (_a(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function K$(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Je & n) === n && (Qe === 4 || Qe === 3 && (Je & 130023424) === Je && 500 > Fe() - cm ? ro(e, 0) : um |= n), kt(e, t);
}
function tb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ja, Ja <<= 1, (Ja & 130023424) === 0 && (Ja = 4194304)));
  var n = pt();
  e = Hn(e, t), e !== null && (_a(e, t, n), kt(e, n));
}
function Y$(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tb(e, n);
}
function X$(e, t) {
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
  r !== null && r.delete(t), tb(e, n);
}
var nb;
nb = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, F$(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Re && (t.flags & 1048576) !== 0 && iw(t, cu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zs(e, t), e = t.pendingProps;
      var o = mi(t, lt.current);
      ri(t, n), o = rm(null, t, r, e, o, n);
      var i = om();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, su(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Zh(t), o.updater = rc, t.stateNode = o, o._reactInternals = t, rp(t, r, e, n), t = lp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && Wh(t), ft(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = J$(r), e = en(r, e), o) {
          case 0:
            t = ip(null, t, r, e, n);
            break e;
          case 1:
            t = P0(null, t, r, e, n);
            break e;
          case 11:
            t = $0(null, t, r, e, n);
            break e;
          case 14:
            t = A0(null, t, r, en(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), ip(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), P0(e, t, r, o, n);
    case 3:
      e: {
        if (zw(t), e === null)
          throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, uw(e, t), pu(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = xi(Error(j(423)), t), t = _0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = xi(Error(j(424)), t), t = _0(e, t, r, n, o);
            break e;
          } else
            for ($t = $r(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, nn = null, n = pw(t, null, r, n), t.child = n; n; )
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
      return hw(t), e === null && ep(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Kd(r, o) ? l = null : i !== null && Kd(r, i) && (t.flags |= 32), Fw(e, t), ft(e, t, l, n), t.child;
    case 6:
      return e === null && ep(t), null;
    case 13:
      return Bw(e, t, n);
    case 4:
      return Jh(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = yi(t, null, r, n) : ft(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), $0(e, t, r, o, n);
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
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = zn(-1, n & -n), s.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), tp(
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
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), tp(l, n, t), l = i.sibling;
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
      return r = t.type, o = en(r, t.pendingProps), o = en(r.type, o), A0(e, t, r, o, n);
    case 15:
      return Dw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : en(r, o), zs(e, t), t.tag = 1, St(r) ? (e = !0, su(t)) : e = !1, ri(t, n), fw(t, r, o), rp(t, r, o, n), lp(null, t, r, !0, e, n);
    case 19:
      return jw(e, t, n);
    case 22:
      return Lw(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function rb(e, t) {
  return _x(e, t);
}
function Z$(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, n, r) {
  return new Z$(e, t, n, r);
}
function hm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function J$(e) {
  if (typeof e == "function")
    return hm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Oh)
      return 11;
    if (e === Nh)
      return 14;
  }
  return 2;
}
function Rr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vs(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    hm(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case Bo:
          return oo(n.children, o, i, t);
        case Ih:
          l = 8, o |= 8;
          break;
        case Ad:
          return e = Ut(12, n, t, o | 2), e.elementType = Ad, e.lanes = i, e;
        case Pd:
          return e = Ut(13, n, t, o), e.elementType = Pd, e.lanes = i, e;
        case _d:
          return e = Ut(19, n, t, o), e.elementType = _d, e.lanes = i, e;
        case dx:
          return ac(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cx:
                l = 10;
                break e;
              case fx:
                l = 9;
                break e;
              case Oh:
                l = 11;
                break e;
              case Nh:
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
function ac(e, t, n, r) {
  return e = Ut(22, e, r, t), e.elementType = dx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Cf(e, t, n) {
  return e = Ut(6, e, null, t), e.lanes = n, e;
}
function Ef(e, t, n) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function eA(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = of(0), this.expirationTimes = of(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = of(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function mm(e, t, n, r, o, i, l, a, s) {
  return e = new eA(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zh(i), e;
}
function tA(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ob(e) {
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
      return rw(e, n, t);
  }
  return t;
}
function ib(e, t, n, r, o, i, l, a, s) {
  return e = mm(n, r, !0, e, o, i, l, a, s), e.context = ob(null), n = e.current, r = pt(), o = _r(n), i = zn(r, o), i.callback = t != null ? t : null, Ar(n, i, o), e.current.lanes = o, _a(e, o, r), kt(e, r), e;
}
function sc(e, t, n, r) {
  var o = t.current, i = pt(), l = _r(o);
  return n = ob(n), t.context === null ? t.context = n : t.pendingContext = n, t = zn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ar(o, t, l), e !== null && (cn(e, o, l, i), Ds(e, o, l)), l;
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
function z0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gm(e, t) {
  z0(e, t), (e = e.alternate) && z0(e, t);
}
function nA() {
  return null;
}
var lb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ym(e) {
  this._internalRoot = e;
}
uc.prototype.render = ym.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(j(409));
  sc(e, t, null, null);
};
uc.prototype.unmount = ym.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    po(function() {
      sc(null, e, null, null);
    }), t[Vn] = null;
  }
};
function uc(e) {
  this._internalRoot = e;
}
uc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hr.length && t !== 0 && t < hr[n].priority; n++)
      ;
    hr.splice(n, 0, e), n === 0 && Fx(e);
  }
};
function vm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function cc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function B0() {
}
function rA(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = bu(l);
        i.call(u);
      };
    }
    var l = ib(t, r, e, 0, null, !1, !1, "", B0);
    return e._reactRootContainer = l, e[Vn] = l.current, Kl(e.nodeType === 8 ? e.parentNode : e), po(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = bu(s);
      a.call(u);
    };
  }
  var s = mm(e, 0, !1, null, null, !1, !1, "", B0);
  return e._reactRootContainer = s, e[Vn] = s.current, Kl(e.nodeType === 8 ? e.parentNode : e), po(function() {
    sc(t, s, n, r);
  }), s;
}
function fc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var s = bu(l);
        a.call(s);
      };
    }
    sc(t, l, e, o);
  } else
    l = rA(n, t, e, o, r);
  return bu(l);
}
Nx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dl(t.pendingLanes);
        n !== 0 && (Lh(t, n | 1), kt(t, Fe()), (ge & 6) === 0 && (wi = Fe() + 500, Fr()));
      }
      break;
    case 13:
      po(function() {
        var r = Hn(e, 1);
        if (r !== null) {
          var o = pt();
          cn(r, e, 1, o);
        }
      }), gm(e, 1);
  }
};
Fh = function(e) {
  if (e.tag === 13) {
    var t = Hn(e, 134217728);
    if (t !== null) {
      var n = pt();
      cn(t, e, 134217728, n);
    }
    gm(e, 134217728);
  }
};
Mx = function(e) {
  if (e.tag === 13) {
    var t = _r(e), n = Hn(e, t);
    if (n !== null) {
      var r = pt();
      cn(n, e, t, r);
    }
    gm(e, t);
  }
};
Dx = function() {
  return be;
};
Lx = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
  }
};
zd = function(e, t, n) {
  switch (t) {
    case "input":
      if (Id(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = tc(r);
            if (!o)
              throw Error(j(90));
            hx(r), Id(r, o);
          }
        }
      }
      break;
    case "textarea":
      gx(e, n);
      break;
    case "select":
      t = n.value, t != null && Jo(e, !!n.multiple, t, !1);
  }
};
kx = fm;
Cx = po;
var oA = { usingClientEntryPoint: !1, Events: [Ta, Uo, tc, bx, Sx, fm] }, Yi = { findFiberByHostInstance: eo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, iA = { bundleType: Yi.bundleType, version: Yi.version, rendererPackageName: Yi.rendererPackageName, rendererConfig: Yi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ax(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yi.findFiberByHostInstance || nA, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cs.isDisabled && cs.supportsFiber)
    try {
      Xu = cs.inject(iA), Sn = cs;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oA;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vm(t))
    throw Error(j(200));
  return tA(e, t, null, n);
};
It.createRoot = function(e, t) {
  if (!vm(e))
    throw Error(j(299));
  var n = !1, r = "", o = lb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = mm(e, 1, !1, null, null, n, !1, r, o), e[Vn] = t.current, Kl(e.nodeType === 8 ? e.parentNode : e), new ym(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Ax(t), e = e === null ? null : e.stateNode, e;
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
  if (!vm(e))
    throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = lb;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ib(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Vn] = t.current, Kl(e), r)
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
It.unstable_batchedUpdates = fm;
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
const ab = /* @__PURE__ */ wh(hn.exports), bi = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(aA);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ m.exports.createElement(vp, G({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(vp, G({}, r, {
    ref: t
  }), n);
});
bi.displayName = "Slot";
const vp = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...sA(r, n.props),
    ref: Ph(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
vp.displayName = "SlotClone";
const lA = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function aA(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === lA;
}
function sA(e, t) {
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
const uA = [
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
], Ue = uA.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? bi : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(a, G({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function cA(e, t) {
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
function fA(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const xp = "dismissableLayer.update", dA = "dismissableLayer.pointerDownOutside", pA = "dismissableLayer.focusOutside";
let j0;
const hA = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: a, onDismiss: s, ...u } = e, c = m.exports.useContext(hA), [f, d] = m.exports.useState(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = m.exports.useState({}), y = xe(
    t,
    (E) => d(E)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), v = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= v, S = mA((E) => {
    const P = E.target, R = [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    );
    !A || R || (i == null || i(E), a == null || a(E), E.defaultPrevented || s == null || s());
  }, g), $ = gA((E) => {
    const P = E.target;
    [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    ) || (l == null || l(E), a == null || a(E), E.defaultPrevented || s == null || s());
  }, g);
  return fA((E) => {
    x === c.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
  }, g), m.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (j0 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), V0(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = j0);
      };
  }, [
    f,
    g,
    r,
    c
  ]), m.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), V0());
  }, [
    f,
    c
  ]), m.exports.useEffect(() => {
    const E = () => h({});
    return document.addEventListener(xp, E), () => document.removeEventListener(xp, E);
  }, []), /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, u, {
    ref: y,
    style: {
      pointerEvents: b ? A ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: se(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: se(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: se(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function mA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.exports.useRef(!1), o = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          sb(dA, n, u, {
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
function gA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && sb(pA, n, {
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
function V0() {
  const e = new CustomEvent(xp);
  document.dispatchEvent(e);
}
function sb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? cA(o, i) : o.dispatchEvent(i);
}
let $f = 0;
function dc() {
  m.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : H0()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : H0()), $f++, () => {
      $f === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), $f--;
    };
  }, []);
}
function H0() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Af = "focusScope.autoFocusOnMount", Pf = "focusScope.autoFocusOnUnmount", U0 = {
  bubbles: !1,
  cancelable: !0
}, wm = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = m.exports.useState(null), u = ze(o), c = ze(i), f = m.exports.useRef(null), d = xe(
    t,
    (y) => s(y)
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
      }, v = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Qr(f.current, {
          select: !0
        });
      };
      var y = p, w = v;
      return document.addEventListener("focusin", p), document.addEventListener("focusout", v), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v);
      };
    }
  }, [
    r,
    a,
    g.paused
  ]), m.exports.useEffect(() => {
    if (a) {
      q0.add(g);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const p = new CustomEvent(Af, U0);
        a.addEventListener(Af, u), a.dispatchEvent(p), p.defaultPrevented || (yA(SA(ub(a)), {
          select: !0
        }), document.activeElement === y && Qr(a));
      }
      return () => {
        a.removeEventListener(Af, u), setTimeout(() => {
          const p = new CustomEvent(Pf, U0);
          a.addEventListener(Pf, c), a.dispatchEvent(p), p.defaultPrevented || Qr(y != null ? y : document.body, {
            select: !0
          }), a.removeEventListener(Pf, c), q0.remove(g);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    g
  ]);
  const h = m.exports.useCallback((y) => {
    if (!n && !r || g.paused)
      return;
    const w = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, p = document.activeElement;
    if (w && p) {
      const v = y.currentTarget, [x, b] = vA(v);
      x && b ? !y.shiftKey && p === b ? (y.preventDefault(), n && Qr(x, {
        select: !0
      })) : y.shiftKey && p === x && (y.preventDefault(), n && Qr(b, {
        select: !0
      })) : p === v && y.preventDefault();
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
function yA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function vA(e) {
  const t = ub(e), n = W0(t, e), r = W0(t.reverse(), e);
  return [
    n,
    r
  ];
}
function ub(e) {
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
function W0(e, t) {
  for (const n of e)
    if (!xA(n, {
      upTo: t
    }))
      return n;
}
function xA(e, { upTo: t }) {
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
function wA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && wA(e) && t && e.select();
  }
}
const q0 = bA();
function bA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Q0(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Q0(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Q0(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function SA(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Ze = Boolean(globalThis == null ? void 0 : globalThis.document) ? m.exports.useLayoutEffect : () => {
}, kA = tE["useId".toString()] || (() => {
});
let CA = 0;
function Bn(e) {
  const [t, n] = m.exports.useState(kA());
  return Ze(() => {
    e || n(
      (r) => r != null ? r : String(CA++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function bo(e) {
  return e.split("-")[0];
}
function Oa(e) {
  return e.split("-")[1];
}
function Ti(e) {
  return ["top", "bottom"].includes(bo(e)) ? "x" : "y";
}
function bm(e) {
  return e === "y" ? "height" : "width";
}
function G0(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, a = Ti(t), s = bm(a), u = r[s] / 2 - o[s] / 2, c = bo(t), f = a === "x";
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
const EA = async (e, t, n) => {
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
  } = G0(s, r, a), f = r, d = {}, g = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: y,
      fn: w
    } = i[h], {
      x: p,
      y: v,
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
    if (u = p != null ? p : u, c = v != null ? v : c, d = {
      ...d,
      [y]: {
        ...d[y],
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
      } = G0(s, f, a)), h = -1;
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
function $A(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function cb(e) {
  return typeof e != "number" ? $A(e) : {
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
async function oa(e, t) {
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
  } = t, h = cb(g), w = a[d ? f === "floating" ? "reference" : "floating" : f], p = Su(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: s
  })), v = Su(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: f === "floating" ? {
      ...l.floating,
      x: r,
      y: o
    } : l.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    strategy: s
  }) : l[f]);
  return {
    top: p.top - v.top + h.top,
    bottom: v.bottom - p.bottom + h.bottom,
    left: p.left - v.left + h.left,
    right: v.right - p.right + h.right
  };
}
const AA = Math.min, Gr = Math.max;
function wp(e, t, n) {
  return Gr(e, AA(t, n));
}
const K0 = (e) => ({
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
    const u = cb(r), c = {
      x: o,
      y: i
    }, f = Ti(l), d = Oa(l), g = bm(f), h = await s.getDimensions(n), y = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = a.reference[g] + a.reference[f] - c[f] - a.floating[g], v = c[f] - a.reference[f], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = a.floating[g]);
    const A = p / 2 - v / 2, S = u[y], $ = b - h[g] - u[w], E = b / 2 - h[g] / 2 + A, P = wp(S, E, $), O = (d === "start" ? u[y] : u[w]) > 0 && E !== P && a.reference[g] <= a.floating[g] ? E < S ? S - E : $ - E : 0;
    return {
      [f]: c[f] - O,
      data: {
        [f]: P,
        centerOffset: E - P
      }
    };
  }
}), PA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ku(e) {
  return e.replace(/left|right|bottom|top/g, (t) => PA[t]);
}
function _A(e, t, n) {
  n === void 0 && (n = !1);
  const r = Oa(e), o = Ti(e), i = bm(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = ku(l)), {
    main: l,
    cross: ku(l)
  };
}
const RA = {
  start: "end",
  end: "start"
};
function Y0(e) {
  return e.replace(/start|end/g, (t) => RA[t]);
}
const TA = ["top", "right", "bottom", "left"];
function IA(e) {
  const t = ku(e);
  return [Y0(e), t, Y0(t)];
}
const OA = function(e) {
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
      } = e, y = bo(r), p = f || (y === l || !g ? [ku(l)] : IA(l)), v = [l, ...p], x = await oa(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[y]), c) {
        const {
          main: P,
          cross: R
        } = _A(r, i, await (a.isRTL == null ? void 0 : a.isRTL(s.floating)));
        b.push(x[P], x[R]);
      }
      if (A = [...A, {
        placement: r,
        overflows: b
      }], !b.every((P) => P <= 0)) {
        var S, $;
        const P = ((S = ($ = o.flip) == null ? void 0 : $.index) != null ? S : 0) + 1, R = v[P];
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
function X0(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Z0(e) {
  return TA.some((t) => e[t] >= 0);
}
const NA = function(e) {
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
          const i = await oa(r, {
            ...n,
            elementContext: "reference"
          }), l = X0(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Z0(l)
            }
          };
        }
        case "escaped": {
          const i = await oa(r, {
            ...n,
            altBoundary: !0
          }), l = X0(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Z0(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function MA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = bo(n), a = Oa(n), s = Ti(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = typeof t == "function" ? t(e) : t;
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
const DA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await MA(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function fb(e) {
  return e === "x" ? "y" : "x";
}
const LA = function(e) {
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
              y: v
            } = w;
            return {
              x: p,
              y: v
            };
          }
        },
        ...s
      } = e, u = {
        x: n,
        y: r
      }, c = await oa(t, s), f = Ti(bo(o)), d = fb(f);
      let g = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", v = g + c[w], x = g - c[p];
        g = wp(v, g, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", v = h + c[w], x = h - c[p];
        h = wp(v, h, x);
      }
      const y = a.fn({
        ...t,
        [f]: g,
        [d]: h
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r
        }
      };
    }
  };
}, FA = function(e) {
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
      }, f = Ti(o), d = fb(f);
      let g = c[f], h = c[d];
      const y = typeof a == "function" ? a({
        ...i,
        placement: o
      }) : a, w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (s) {
        const A = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[A] + w.mainAxis, $ = i.reference[f] + i.reference[A] - w.mainAxis;
        g < S ? g = S : g > $ && (g = $);
      }
      if (u) {
        var p, v, x, b;
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(bo(o)), $ = i.reference[d] - i.floating[A] + (S && (p = (v = l.offset) == null ? void 0 : v[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), E = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < $ ? h = $ : h > E && (h = E);
      }
      return {
        [f]: g,
        [d]: h
      };
    }
  };
}, zA = function(e) {
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
      } = e, s = await oa(t, a), u = bo(n), c = Oa(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const g = Gr(s.left, 0), h = Gr(s.right, 0), y = Gr(s.top, 0), w = Gr(s.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (y !== 0 || w !== 0 ? y + w : Gr(s.top, s.bottom)) : s[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || h !== 0 ? g + h : Gr(s.left, s.right)) : s[d])
      }, v = await o.getDimensions(i.floating);
      l == null || l({
        ...t,
        ...p
      });
      const x = await o.getDimensions(i.floating);
      return v.width !== x.width || v.height !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function db(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Yn(e) {
  if (e == null)
    return window;
  if (!db(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Na(e) {
  return Yn(e).getComputedStyle(e);
}
function Wn(e) {
  return db(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function pb() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Cn(e) {
  return e instanceof Yn(e).HTMLElement;
}
function Mr(e) {
  return e instanceof Yn(e).Element;
}
function BA(e) {
  return e instanceof Yn(e).Node;
}
function Sm(e) {
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
  } = Na(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function jA(e) {
  return ["table", "td", "th"].includes(Wn(e));
}
function hb(e) {
  const t = /firefox/i.test(pb()), n = Na(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function mb() {
  return !/^((?!chrome|android).)*safari/i.test(pb());
}
const J0 = Math.min, Al = Math.max, Cu = Math.round;
function qn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect();
  let s = 1, u = 1;
  t && Cn(e) && (s = e.offsetWidth > 0 && Cu(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Cu(a.height) / e.offsetHeight || 1);
  const c = Mr(e) ? Yn(e) : window, f = !mb() && n, d = (a.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / s, g = (a.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = a.width / s, y = a.height / u;
  return {
    width: h,
    height: y,
    top: g,
    right: d + h,
    bottom: g + y,
    left: d,
    x: d,
    y: g
  };
}
function zr(e) {
  return ((BA(e) ? e.ownerDocument : e.document) || window.document).documentElement;
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
function gb(e) {
  return qn(zr(e)).left + hc(e).scrollLeft;
}
function VA(e) {
  const t = qn(e);
  return Cu(t.width) !== e.offsetWidth || Cu(t.height) !== e.offsetHeight;
}
function HA(e, t, n) {
  const r = Cn(t), o = zr(t), i = qn(
    e,
    r && VA(t),
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
    if ((Wn(t) !== "body" || pc(o)) && (l = hc(t)), Cn(t)) {
      const s = qn(t, !0);
      a.x = s.x + t.clientLeft, a.y = s.y + t.clientTop;
    } else
      o && (a.x = gb(o));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function yb(e) {
  return Wn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Sm(e) ? e.host : null) || zr(e);
}
function e1(e) {
  return !Cn(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function UA(e) {
  let t = yb(e);
  for (Sm(t) && (t = t.host); Cn(t) && !["html", "body"].includes(Wn(t)); ) {
    if (hb(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function bp(e) {
  const t = Yn(e);
  let n = e1(e);
  for (; n && jA(n) && getComputedStyle(n).position === "static"; )
    n = e1(n);
  return n && (Wn(n) === "html" || Wn(n) === "body" && getComputedStyle(n).position === "static" && !hb(n)) ? t : n || UA(e) || t;
}
function t1(e) {
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
function WA(e) {
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
  const a = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Wn(n) !== "body" || pc(i)) && (l = hc(n)), Cn(n))) {
    const s = qn(n, !0);
    a.x = s.x + n.clientLeft, a.y = s.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + a.x,
    y: t.y - l.scrollTop + a.y
  };
}
function qA(e, t) {
  const n = Yn(e), r = zr(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = mb();
    (u || !u && t === "fixed") && (a = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function QA(e) {
  var t;
  const n = zr(e), r = hc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Al(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Al(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + gb(e);
  const s = -r.scrollTop;
  return Na(o || n).direction === "rtl" && (a += Al(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function vb(e) {
  const t = yb(e);
  return ["html", "body", "#document"].includes(Wn(t)) ? e.ownerDocument.body : Cn(t) && pc(t) ? t : vb(t);
}
function Eu(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = vb(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Yn(r), l = o ? [i].concat(i.visualViewport || [], pc(r) ? r : []) : r, a = t.concat(l);
  return o ? a : a.concat(Eu(l));
}
function GA(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Sm(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function KA(e, t) {
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
function n1(e, t, n) {
  return t === "viewport" ? Su(qA(e, n)) : Mr(t) ? KA(t, n) : Su(QA(zr(e)));
}
function YA(e) {
  const t = Eu(e), r = ["absolute", "fixed"].includes(Na(e).position) && Cn(e) ? bp(e) : e;
  return Mr(r) ? t.filter((o) => Mr(o) && GA(o, r) && Wn(o) !== "body") : [];
}
function XA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? YA(t) : [].concat(n), r], a = l[0], s = l.reduce((u, c) => {
    const f = n1(t, c, o);
    return u.top = Al(f.top, u.top), u.right = J0(f.right, u.right), u.bottom = J0(f.bottom, u.bottom), u.left = Al(f.left, u.left), u;
  }, n1(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const ZA = {
  getClippingRect: XA,
  convertOffsetParentRelativeRectToViewportRelativeRect: WA,
  isElement: Mr,
  getDimensions: t1,
  getOffsetParent: bp,
  getDocumentElement: zr,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: HA(t, bp(n), r),
      floating: {
        ...t1(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Na(e).direction === "rtl"
};
function JA(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: a = !1
  } = r, s = o && !a, u = i && !a, c = s || u ? [...Mr(e) ? Eu(e) : [], ...Eu(t)] : [];
  c.forEach((y) => {
    s && y.addEventListener("scroll", n, {
      passive: !0
    }), u && y.addEventListener("resize", n);
  });
  let f = null;
  if (l) {
    let y = !0;
    f = new ResizeObserver(() => {
      y || n(), y = !1;
    }), Mr(e) && !a && f.observe(e), f.observe(t);
  }
  let d, g = a ? qn(e) : null;
  a && h();
  function h() {
    const y = qn(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    c.forEach((w) => {
      s && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (y = f) == null || y.disconnect(), f = null, a && cancelAnimationFrame(d);
  };
}
const e5 = (e, t, n) => EA(e, t, {
  platform: ZA,
  ...n
});
var Sp = typeof document < "u" ? m.exports.useLayoutEffect : m.exports.useEffect;
function kp(e, t) {
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
        if (!kp(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !kp(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function t5(e) {
  const t = m.exports.useRef(e);
  return Sp(() => {
    t.current = e;
  }), t;
}
function n5(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = m.exports.useRef(null), l = m.exports.useRef(null), a = t5(o), s = m.exports.useRef(null), [u, c] = m.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = m.exports.useState(t);
  kp(f == null ? void 0 : f.map((x) => {
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
    !i.current || !l.current || e5(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && hn.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  Sp(() => {
    h.current && g();
  }, [g]);
  const h = m.exports.useRef(!1);
  Sp(() => (h.current = !0, () => {
    h.current = !1;
  }), []);
  const y = m.exports.useCallback(() => {
    if (typeof s.current == "function" && (s.current(), s.current = null), i.current && l.current)
      if (a.current) {
        const x = a.current(i.current, l.current, g);
        s.current = x;
      } else
        g();
  }, [g, a]), w = m.exports.useCallback((x) => {
    i.current = x, y();
  }, [y]), p = m.exports.useCallback((x) => {
    l.current = x, y();
  }, [y]), v = m.exports.useMemo(() => ({
    reference: i,
    floating: l
  }), []);
  return m.exports.useMemo(() => ({
    ...u,
    update: g,
    refs: v,
    reference: w,
    floating: p
  }), [u, g, v, w, p]);
}
const r5 = (e) => {
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
      return r(t) ? t.current != null ? K0({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? K0({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function o5(e) {
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
const xb = "Popper", [km, mc] = vo(xb), [i5, wb] = km(xb), l5 = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.exports.useState(null);
  return /* @__PURE__ */ m.exports.createElement(i5, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, a5 = "PopperAnchor", s5 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = wb(a5, n), l = m.exports.useRef(null), a = xe(t, l);
  return m.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: a
  }));
}), $u = "PopperContent", [u5, NF] = km($u), [c5, f5] = km($u, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), d5 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n, r, o, i, l, a, s, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: g = "center", alignOffset: h = 0, arrowPadding: y = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: v = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, $ = wb($u, c), [E, P] = m.exports.useState(null), R = xe(
    t,
    (or) => P(or)
  ), [T, O] = m.exports.useState(null), D = o5(T), z = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0, F = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0, _ = f + (g !== "center" ? "-" + g : ""), V = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, M = Array.isArray(w) ? w : [
    w
  ], I = M.length > 0, N = {
    padding: V,
    boundary: M.filter(h5),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: ne, y: ue, placement: ee, middlewareData: Q, update: ie } = n5({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: JA,
    middleware: [
      m5(),
      DA({
        mainAxis: d + F,
        alignmentAxis: h
      }),
      b ? LA({
        mainAxis: !0,
        crossAxis: !1,
        limiter: v === "partial" ? FA() : void 0,
        ...N
      }) : void 0,
      T ? r5({
        element: T,
        padding: y
      }) : void 0,
      b ? OA({
        ...N
      }) : void 0,
      zA({
        ...N,
        apply: ({ elements: or, availableWidth: Kc, availableHeight: Yc }) => {
          or.floating.style.setProperty("--radix-popper-available-width", `${Kc}px`), or.floating.style.setProperty("--radix-popper-available-height", `${Yc}px`);
        }
      }),
      g5({
        arrowWidth: z,
        arrowHeight: F
      }),
      x ? NA({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(p5)
  });
  Ze(() => {
    k($.anchor);
  }, [
    k,
    $.anchor
  ]);
  const we = ne !== null && ue !== null, [ce, de] = bb(ee), ae = ze(A);
  Ze(() => {
    we && (ae == null || ae());
  }, [
    we,
    ae
  ]);
  const st = (o = Q.arrow) === null || o === void 0 ? void 0 : o.x, ut = (i = Q.arrow) === null || i === void 0 ? void 0 : i.y, jr = ((l = Q.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [er, tr] = m.exports.useState();
  Ze(() => {
    E && tr(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]);
  const { hasParent: Qa, positionUpdateFns: nr } = f5($u, c), rr = !Qa;
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
      transform: we ? `translate3d(${Math.round(ne)}px, ${Math.round(ue)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: er,
      ["--radix-popper-transform-origin"]: [
        (s = Q.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = Q.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ m.exports.createElement(u5, {
    scope: c,
    placedSide: ce,
    onArrowChange: O,
    arrowX: st,
    arrowY: ut,
    shouldHideArrow: jr
  }, rr ? /* @__PURE__ */ m.exports.createElement(c5, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: nr
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, Bi)) : /* @__PURE__ */ m.exports.createElement(Ue.div, Bi)));
});
function p5(e) {
  return e !== void 0;
}
function h5(e) {
  return e !== null;
}
const m5 = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), g5 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, g = f ? 0 : e.arrowHeight, [h, y] = bb(a), w = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[y], p = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + d / 2, v = ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0 ? i : 0) + g / 2;
    let x = "", b = "";
    return h === "bottom" ? (x = f ? w : `${p}px`, b = `${-g}px`) : h === "top" ? (x = f ? w : `${p}px`, b = `${s.floating.height + g}px`) : h === "right" ? (x = `${-g}px`, b = f ? w : `${v}px`) : h === "left" && (x = `${s.floating.width + g}px`, b = f ? w : `${v}px`), {
      data: {
        x,
        y: b
      }
    };
  }
});
function bb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Sb = l5, kb = s5, Cb = d5, Eb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ab.createPortal(/* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: t
  })), r) : null;
});
function y5(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const mn = (e) => {
  const { present: t, children: n } = e, r = v5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : m.exports.Children.only(n), i = xe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ m.exports.cloneElement(o, {
    ref: i
  }) : null;
};
mn.displayName = "Presence";
function v5(e) {
  const [t, n] = m.exports.useState(), r = m.exports.useRef({}), o = m.exports.useRef(e), i = m.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = y5(l, {
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
    const u = fs(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), Ze(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, g = fs(u);
      e ? s("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Ze(() => {
    if (t) {
      const u = (f) => {
        const g = fs(r.current).includes(f.animationName);
        f.target === t && g && hn.exports.flushSync(
          () => s("ANIMATION_END")
        );
      }, c = (f) => {
        f.target === t && (i.current = fs(r.current));
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
function fs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ia({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = x5({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = ze(n), s = m.exports.useCallback((u) => {
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
function x5({ defaultProp: e, onChange: t }) {
  const n = m.exports.useState(e), [r] = n, o = m.exports.useRef(r), i = ze(t);
  return m.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var w5 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Po = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), ps = {}, _f = 0, $b = function(e) {
  return e && (e.host || $b(e.parentNode));
}, b5 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = $b(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, S5 = function(e, t, n, r) {
  var o = b5(t, Array.isArray(e) ? e : [e]);
  ps[n] || (ps[n] = /* @__PURE__ */ new WeakMap());
  var i = ps[n], l = [], a = /* @__PURE__ */ new Set(), s = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        c(d);
      else {
        var g = d.getAttribute(r), h = g !== null && g !== "false", y = (Po.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        Po.set(d, y), i.set(d, w), l.push(d), y === 1 && h && ds.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), a.clear(), _f++, function() {
    l.forEach(function(f) {
      var d = Po.get(f) - 1, g = i.get(f) - 1;
      Po.set(f, d), i.set(f, g), d || (ds.has(f) || f.removeAttribute(r), ds.delete(f)), g || f.removeAttribute(n);
    }), _f--, _f || (Po = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), ps = {});
  };
}, gc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || w5(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), S5(r, o, n, "aria-hidden")) : function() {
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
function Cm(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ab(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Pl = "right-scroll-bar-position", _l = "width-before-scroll-bar", k5 = "with-scroll-bars-hidden", C5 = "--removed-body-scroll-bar-size";
function E5(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $5(e, t) {
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
function Pb(e, t) {
  return $5(t || null, function(n) {
    return e.forEach(function(r) {
      return E5(r, n);
    });
  });
}
var yc = { exports: {} }, vc = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A5 = m.exports, P5 = Symbol.for("react.element"), _5 = Symbol.for("react.fragment"), R5 = Object.prototype.hasOwnProperty, T5 = A5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function _b(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    R5.call(t, r) && !I5.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: P5, type: e, key: i, ref: l, props: o, _owner: T5.current };
}
vc.Fragment = _5;
vc.jsx = _b;
vc.jsxs = _b;
(function(e) {
  e.exports = vc;
})(yc);
const Xn = yc.exports.Fragment, B = yc.exports.jsx, pe = yc.exports.jsxs;
function O5(e) {
  return e;
}
function N5(e, t) {
  t === void 0 && (t = O5);
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
function Rb(e) {
  e === void 0 && (e = {});
  var t = N5(null);
  return t.options = ot({ async: !0, ssr: !1 }, e), t;
}
var Tb = function(e) {
  var t = e.sideCar, n = Cm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...ot({}, n)
  });
};
Tb.isSideCarExport = !0;
function Ib(e, t) {
  return e.useMedium(t), Tb;
}
var Ob = Rb(), Rf = function() {
}, xc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Rf,
    onWheelCapture: Rf,
    onTouchMoveCapture: Rf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, y = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, v = Cm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Pb([n, t]), A = ot(ot({}, v), o);
  return /* @__PURE__ */ pe(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Ob,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!y,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(a), ot(ot({}, A), {
      ref: b
    })) : /* @__PURE__ */ B(p, {
      ...ot({}, A, {
        className: s,
        ref: b
      }),
      children: a
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
var M5 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function D5() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = M5();
  return t && e.setAttribute("nonce", t), e;
}
function L5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function F5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var z5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = D5()) && (L5(t, n), F5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, B5 = function() {
  var e = z5();
  return function(t, n) {
    m.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Em = function() {
  var e = B5(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, j5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tf = function(e) {
  return parseInt(e || "", 10) || 0;
}, V5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tf(n), Tf(r), Tf(o)];
}, H5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return j5;
  var t = V5(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, U5 = Em(), W5 = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(k5, ` {
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
  
  .`).concat(Pl, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(_l, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Pl, " .").concat(Pl, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_l, " .").concat(_l, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(C5, ": ").concat(a, `px;
  }
`);
}, Nb = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.exports.useMemo(function() {
    return H5(o);
  }, [o]);
  return /* @__PURE__ */ B(U5, {
    styles: W5(i, !t, o, n ? "" : "!important")
  });
}, Cp = !1;
if (typeof window < "u")
  try {
    var hs = Object.defineProperty({}, "passive", {
      get: function() {
        return Cp = !0, !0;
      }
    });
    window.addEventListener("test", hs, hs), window.removeEventListener("test", hs, hs);
  } catch {
    Cp = !1;
  }
var _o = Cp ? { passive: !1 } : !1, q5 = function(e) {
  return e.tagName === "TEXTAREA";
}, Mb = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !q5(e) && n[t] === "visible");
}, Q5 = function(e) {
  return Mb(e, "overflowY");
}, G5 = function(e) {
  return Mb(e, "overflowX");
}, r1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Db(e, n);
    if (r) {
      var o = Lb(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, K5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Y5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Db = function(e, t) {
  return e === "v" ? Q5(t) : G5(t);
}, Lb = function(e, t) {
  return e === "v" ? K5(t) : Y5(t);
}, X5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Z5 = function(e, t, n, r, o) {
  var i = X5(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = Lb(e, a), h = g[0], y = g[1], w = g[2], p = y - w - i * h;
    (h || p) && Db(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ms = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, o1 = function(e) {
  return [e.deltaX, e.deltaY];
}, i1 = function(e) {
  return e && "current" in e ? e.current : e;
}, J5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, eP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, tP = 0, Ro = [];
function nP(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(tP++)[0], i = m.exports.useState(function() {
    return Em();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = Ab([e.lockRef.current], (e.shards || []).map(i1), !0).filter(Boolean);
      return y.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.exports.useCallback(function(y, w) {
    if ("touches" in y && y.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = ms(y), v = n.current, x = "deltaX" in y ? y.deltaX : v[0] - p[0], b = "deltaY" in y ? y.deltaY : v[1] - p[1], A, S = y.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in y && $ === "h" && S.type === "range")
      return !1;
    var E = r1($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = r1($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in y && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return Z5(P, w, y, P === "h" ? x : b, !0);
  }, []), s = m.exports.useCallback(function(y) {
    var w = y;
    if (!(!Ro.length || Ro[Ro.length - 1] !== i)) {
      var p = "deltaY" in w ? o1(w) : ms(w), v = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && J5(A.delta, p);
      })[0];
      if (v && v.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!v) {
        var x = (l.current.shards || []).map(i1).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = m.exports.useCallback(function(y, w, p, v) {
    var x = {
      name: y,
      delta: w,
      target: p,
      should: v
    };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== x;
      });
    }, 1);
  }, []), c = m.exports.useCallback(function(y) {
    n.current = ms(y), r.current = void 0;
  }, []), f = m.exports.useCallback(function(y) {
    u(y.type, o1(y), y.target, a(y, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(y) {
    u(y.type, ms(y), y.target, a(y, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Ro.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, _o), document.addEventListener("touchmove", s, _o), document.addEventListener("touchstart", c, _o), function() {
      Ro = Ro.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", s, _o), document.removeEventListener("touchmove", s, _o), document.removeEventListener("touchstart", c, _o);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ pe(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: eP(o)
    }) : null, g ? /* @__PURE__ */ B(Nb, {
      gapMode: "margin"
    }) : null]
  });
}
const rP = Ib(Ob, nP);
var Fb = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(xc, {
    ...ot({}, e, {
      ref: t,
      sideCar: rP
    })
  });
});
Fb.classNames = xc.classNames;
const zb = Fb, Bb = "Popover", [jb, MF] = vo(Bb, [
  mc
]), $m = mc(), [oP, Ma] = jb(Bb), iP = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, a = $m(t), s = m.exports.useRef(null), [u, c] = m.exports.useState(!1), [f = !1, d] = ia({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(Sb, a, /* @__PURE__ */ m.exports.createElement(oP, {
    scope: t,
    contentId: Bn(),
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
}, lP = "PopoverTrigger", aP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ma(lP, n), i = $m(n), l = xe(t, o.triggerRef), a = /* @__PURE__ */ m.exports.createElement(Ue.button, G({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Hb(o.open)
  }, r, {
    ref: l,
    onClick: se(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? a : /* @__PURE__ */ m.exports.createElement(kb, G({
    asChild: !0
  }, i), a);
}), sP = "PopoverPortal", [DF, uP] = jb(sP, {
  forceMount: void 0
}), la = "PopoverContent", cP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = uP(la, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ma(la, e.__scopePopover);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(fP, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(dP, G({}, o, {
    ref: t
  })));
}), fP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ma(la, e.__scopePopover), r = m.exports.useRef(null), o = xe(t, r), i = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return gc(l);
  }, []), /* @__PURE__ */ m.exports.createElement(zb, {
    as: bi,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(Vb, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: se(e.onCloseAutoFocus, (l) => {
      var a;
      l.preventDefault(), i.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: se(e.onPointerDownOutside, (l) => {
      const a = l.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || s;
      i.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: se(
      e.onFocusOutside,
      (l) => l.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), dP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Ma(la, e.__scopePopover), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Vb, G({}, e, {
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
}), Vb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Ma(la, n), g = $m(n);
  return dc(), /* @__PURE__ */ m.exports.createElement(wm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(xm, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(Cb, G({
    "data-state": Hb(d.open),
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
function Hb(e) {
  return e ? "open" : "closed";
}
const pP = iP, hP = aP, mP = cP, Ub = "Dialog", [Wb, LF] = vo(Ub), [gP, Da] = Wb(Ub), yP = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = m.exports.useRef(null), s = m.exports.useRef(null), [u = !1, c] = ia({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(gP, {
    scope: t,
    triggerRef: a,
    contentRef: s,
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
}, qb = "DialogPortal", [vP, xP] = Wb(qb, {
  forceMount: void 0
}), wP = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Da(qb, t);
  return /* @__PURE__ */ m.exports.createElement(vP, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(Eb, {
      asChild: !0,
      container: o
    }, l))
  ));
}, aa = "DialogContent", bP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = xP(aa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Da(aa, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(SP, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(kP, G({}, o, {
    ref: t
  })));
}), SP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Da(aa, e.__scopeDialog), r = m.exports.useRef(null), o = xe(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return gc(i);
  }, []), /* @__PURE__ */ m.exports.createElement(Qb, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: se(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: se(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: se(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), kP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Da(aa, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(Qb, G({}, e, {
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
}), Qb = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = Da(aa, n), s = m.exports.useRef(null), u = xe(t, s);
  return dc(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(wm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(xm, G({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": CP(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function CP(e) {
  return e ? "open" : "closed";
}
const EP = yP, $P = wP, AP = bP, Am = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.exports.Children.toArray(n), i = o.find(_P);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? m.exports.Children.count(l) > 1 ? m.exports.Children.only(null) : /* @__PURE__ */ m.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ m.exports.createElement(Ep, G({}, r, {
      ref: t
    }), /* @__PURE__ */ m.exports.isValidElement(l) ? /* @__PURE__ */ m.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ m.exports.createElement(Ep, G({}, r, {
    ref: t
  }), n);
});
Am.displayName = "Slot";
const Ep = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ m.exports.isValidElement(n) ? /* @__PURE__ */ m.exports.cloneElement(n, {
    ...RP(r, n.props),
    ref: Ph(t, n.ref)
  }) : m.exports.Children.count(n) > 1 ? m.exports.Children.only(null) : null;
});
Ep.displayName = "SlotClone";
const PP = ({ children: e }) => /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, e);
function _P(e) {
  return /* @__PURE__ */ m.exports.isValidElement(e) && e.type === PP;
}
function RP(e, t) {
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
const TP = [
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
], wc = TP.reduce((e, t) => {
  const n = /* @__PURE__ */ m.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? Am : t;
    return m.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ m.exports.createElement(a, G({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function IP(e, t) {
  e && hn.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function OP(e) {
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
const $p = "dismissableLayer.update", NP = "dismissableLayer.pointerDownOutside", MP = "dismissableLayer.focusOutside";
let l1;
const DP = /* @__PURE__ */ m.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), LP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: a, ...s } = e, u = m.exports.useContext(DP), [c, f] = m.exports.useState(null), [, d] = m.exports.useState({}), g = xe(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [y] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(y), p = c ? h.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = FP((S) => {
    const $ = S.target, E = [
      ...u.branches
    ].some(
      (P) => P.contains($)
    );
    !x || E || (o == null || o(S), l == null || l(S), S.defaultPrevented || a == null || a());
  }), A = zP((S) => {
    const $ = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains($)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || a == null || a());
  });
  return OP((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
  }), m.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (l1 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), a1(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = l1);
      };
  }, [
    c,
    n,
    u
  ]), m.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), a1());
  }, [
    c,
    u
  ]), m.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener($p, S), () => document.removeEventListener($p, S);
  }, []), /* @__PURE__ */ m.exports.createElement(wc.div, G({}, s, {
    ref: g,
    style: {
      pointerEvents: v ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: se(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: se(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: se(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function FP(e) {
  const t = ze(e), n = m.exports.useRef(!1), r = m.exports.useRef(() => {
  });
  return m.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          Gb(NP, t, s, {
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
function zP(e) {
  const t = ze(e), n = m.exports.useRef(!1);
  return m.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && Gb(MP, t, {
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
function a1() {
  const e = new CustomEvent($p);
  document.dispatchEvent(e);
}
function Gb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? IP(o, i) : o.dispatchEvent(i);
}
const If = "focusScope.autoFocusOnMount", Of = "focusScope.autoFocusOnUnmount", s1 = {
  bubbles: !1,
  cancelable: !0
}, BP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = m.exports.useState(null), u = ze(o), c = ze(i), f = m.exports.useRef(null), d = xe(
    t,
    (y) => s(y)
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
      }, v = function(x) {
        g.paused || !a || a.contains(x.relatedTarget) || Kr(f.current, {
          select: !0
        });
      };
      var y = p, w = v;
      return document.addEventListener("focusin", p), document.addEventListener("focusout", v), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v);
      };
    }
  }, [
    r,
    a,
    g.paused
  ]), m.exports.useEffect(() => {
    if (a) {
      c1.add(g);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const p = new CustomEvent(If, s1);
        a.addEventListener(If, u), a.dispatchEvent(p), p.defaultPrevented || (jP(qP(Kb(a)), {
          select: !0
        }), document.activeElement === y && Kr(a));
      }
      return () => {
        a.removeEventListener(If, u), setTimeout(() => {
          const p = new CustomEvent(Of, s1);
          a.addEventListener(Of, c), a.dispatchEvent(p), p.defaultPrevented || Kr(y != null ? y : document.body, {
            select: !0
          }), a.removeEventListener(Of, c), c1.remove(g);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    g
  ]);
  const h = m.exports.useCallback((y) => {
    if (!n && !r || g.paused)
      return;
    const w = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, p = document.activeElement;
    if (w && p) {
      const v = y.currentTarget, [x, b] = VP(v);
      x && b ? !y.shiftKey && p === b ? (y.preventDefault(), n && Kr(x, {
        select: !0
      })) : y.shiftKey && p === x && (y.preventDefault(), n && Kr(b, {
        select: !0
      })) : p === v && y.preventDefault();
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
function jP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Kr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function VP(e) {
  const t = Kb(e), n = u1(t, e), r = u1(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Kb(e) {
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
function u1(e, t) {
  for (const n of e)
    if (!HP(n, {
      upTo: t
    }))
      return n;
}
function HP(e, { upTo: t }) {
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
function UP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && UP(e) && t && e.select();
  }
}
const c1 = WP();
function WP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = f1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = f1(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function f1(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qP(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const QP = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ab.createPortal(/* @__PURE__ */ m.exports.createElement(wc.div, G({}, o, {
    ref: t
  })), r) : null;
});
var Yb = Rb(), Nf = function() {
}, bc = m.exports.forwardRef(function(e, t) {
  var n = m.exports.useRef(null), r = m.exports.useState({
    onScrollCapture: Nf,
    onWheelCapture: Nf,
    onTouchMoveCapture: Nf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, h = e.inert, y = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, v = Cm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Pb([n, t]), A = ot(ot({}, v), o);
  return /* @__PURE__ */ pe(Xn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: Yb,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!y,
      lockRef: n
    }), l ? m.exports.cloneElement(m.exports.Children.only(a), ot(ot({}, A), {
      ref: b
    })) : /* @__PURE__ */ B(p, {
      ...ot({}, A, {
        className: s,
        ref: b
      }),
      children: a
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
var Ap = !1;
if (typeof window < "u")
  try {
    var gs = Object.defineProperty({}, "passive", {
      get: function() {
        return Ap = !0, !0;
      }
    });
    window.addEventListener("test", gs, gs), window.removeEventListener("test", gs, gs);
  } catch {
    Ap = !1;
  }
var To = Ap ? { passive: !1 } : !1, GP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, KP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, d1 = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Xb(e, n);
    if (r) {
      var o = Zb(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, YP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, XP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xb = function(e, t) {
  return e === "v" ? GP(t) : KP(t);
}, Zb = function(e, t) {
  return e === "v" ? YP(t) : XP(t);
}, ZP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, JP = function(e, t, n, r, o) {
  var i = ZP(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var g = Zb(e, a), h = g[0], y = g[1], w = g[2], p = y - w - i * h;
    (h || p) && Xb(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ys = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, p1 = function(e) {
  return [e.deltaX, e.deltaY];
}, h1 = function(e) {
  return e && "current" in e ? e.current : e;
}, e3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, t3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, n3 = 0, Io = [];
function r3(e) {
  var t = m.exports.useRef([]), n = m.exports.useRef([0, 0]), r = m.exports.useRef(), o = m.exports.useState(n3++)[0], i = m.exports.useState(function() {
    return Em();
  })[0], l = m.exports.useRef(e);
  m.exports.useEffect(function() {
    l.current = e;
  }, [e]), m.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = Ab([e.lockRef.current], (e.shards || []).map(h1), !0).filter(Boolean);
      return y.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.exports.useCallback(function(y, w) {
    if ("touches" in y && y.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = ys(y), v = n.current, x = "deltaX" in y ? y.deltaX : v[0] - p[0], b = "deltaY" in y ? y.deltaY : v[1] - p[1], A, S = y.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in y && $ === "h" && S.type === "range")
      return !1;
    var E = d1($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = d1($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in y && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return JP(P, w, y, P === "h" ? x : b, !0);
  }, []), s = m.exports.useCallback(function(y) {
    var w = y;
    if (!(!Io.length || Io[Io.length - 1] !== i)) {
      var p = "deltaY" in w ? p1(w) : ys(w), v = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && e3(A.delta, p);
      })[0];
      if (v && v.should) {
        w.preventDefault();
        return;
      }
      if (!v) {
        var x = (l.current.shards || []).map(h1).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.preventDefault();
      }
    }
  }, []), u = m.exports.useCallback(function(y, w, p, v) {
    var x = {
      name: y,
      delta: w,
      target: p,
      should: v
    };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== x;
      });
    }, 1);
  }, []), c = m.exports.useCallback(function(y) {
    n.current = ys(y), r.current = void 0;
  }, []), f = m.exports.useCallback(function(y) {
    u(y.type, p1(y), y.target, a(y, e.lockRef.current));
  }, []), d = m.exports.useCallback(function(y) {
    u(y.type, ys(y), y.target, a(y, e.lockRef.current));
  }, []);
  m.exports.useEffect(function() {
    return Io.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", s, To), document.addEventListener("touchmove", s, To), document.addEventListener("touchstart", c, To), function() {
      Io = Io.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", s, To), document.removeEventListener("touchmove", s, To), document.removeEventListener("touchstart", c, To);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ pe(Xn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: t3(o)
    }) : null, g ? /* @__PURE__ */ B(Nb, {
      gapMode: "margin"
    }) : null]
  });
}
const o3 = Ib(Yb, r3);
var Jb = m.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(bc, {
    ...ot({}, e, {
      ref: t,
      sideCar: o3
    })
  });
});
Jb.classNames = bc.classNames;
const i3 = Jb, eS = "Dialog", [tS, FF] = vo(eS), [l3, So] = tS(eS), a3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = m.exports.useRef(null), s = m.exports.useRef(null), [u = !1, c] = ia({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ m.exports.createElement(l3, {
    scope: t,
    triggerRef: a,
    contentRef: s,
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
}, nS = "DialogPortal", [s3, rS] = tS(nS, {
  forceMount: void 0
}), u3 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = So(nS, t);
  return /* @__PURE__ */ m.exports.createElement(s3, {
    scope: t,
    forceMount: n
  }, m.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ m.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ m.exports.createElement(QP, {
      asChild: !0,
      container: o
    }, l))
  ));
}, Pp = "DialogOverlay", c3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = rS(Pp, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = So(Pp, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, /* @__PURE__ */ m.exports.createElement(f3, G({}, o, {
    ref: t
  }))) : null;
}), f3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = So(Pp, n);
  return /* @__PURE__ */ m.exports.createElement(i3, {
    as: Am,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ m.exports.createElement(wc.div, G({
    "data-state": iS(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), sa = "DialogContent", d3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = rS(sa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = So(sa, e.__scopeDialog);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ m.exports.createElement(p3, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ m.exports.createElement(h3, G({}, o, {
    ref: t
  })));
}), p3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = So(sa, e.__scopeDialog), r = m.exports.useRef(null), o = xe(t, n.contentRef, r);
  return m.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return gc(i);
  }, []), /* @__PURE__ */ m.exports.createElement(oS, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: se(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: se(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: se(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), h3 = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = So(sa, e.__scopeDialog), r = m.exports.useRef(!1);
  return /* @__PURE__ */ m.exports.createElement(oS, G({}, e, {
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
}), oS = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = So(sa, n), s = m.exports.useRef(null), u = xe(t, s);
  return dc(), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(BP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ m.exports.createElement(LP, G({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": iS(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function iS(e) {
  return e ? "open" : "closed";
}
const m3 = a3, g3 = u3, y3 = c3, v3 = d3;
var m1 = 1, x3 = 0.9, w3 = 0.3, Mf = 0.1, b3 = 0, Df = 0.999, S3 = 0.9999, k3 = 0.99, g1 = /[\\\/\-_+.# \t"@\[\(\{&]/, C3 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function _p(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? m1 : k3;
  for (var l = r.charAt(i), a = n.indexOf(l, o), s = 0, u, c, f; a >= 0; )
    u = _p(e, t, n, r, a + 1, i + 1), u > s && (a === o ? u *= m1 : g1.test(e.charAt(a - 1)) ? (u *= x3, f = e.slice(o, a - 1).match(C3), f && o > 0 && (u *= Math.pow(Df, f.length))) : g1.test(e.slice(o, a - 1)) ? (u *= b3, o > 0 && (u *= Math.pow(Df, a - o))) : (u *= w3, o > 0 && (u *= Math.pow(Df, a - o))), e.charAt(a) !== t.charAt(i) && (u *= S3)), u < Mf && n.charAt(a - 1) === r.charAt(i + 1) && n.charAt(a - 1) !== r.charAt(i) && (c = _p(e, t, n, r, a + 1, i + 2), c * Mf > u && (u = c * Mf)), u > s && (s = u), a = n.indexOf(l, a + 1);
  return s;
}
function E3(e, t) {
  return _p(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var $3 = E3, A3 = '[cmdk-list-sizer=""]', Xi = '[cmdk-group=""]', Lf = '[cmdk-group-items=""]', P3 = '[cmdk-group-heading=""]', lS = '[cmdk-item=""]', y1 = `${lS}:not([aria-disabled="true"])`, Rp = "cmdk-item-select", fr = "data-value", _3 = (e, t) => $3(e, t), aS = m.exports.createContext(void 0), La = () => m.exports.useContext(aS), sS = m.exports.createContext(void 0), Pm = () => m.exports.useContext(sS), uS = m.exports.createContext(void 0), cS = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(null), r = Fo(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Fo(() => /* @__PURE__ */ new Set()), i = Fo(() => /* @__PURE__ */ new Map()), l = Fo(() => /* @__PURE__ */ new Map()), a = Fo(() => /* @__PURE__ */ new Set()), s = fS(e), { label: u, children: c, value: f, onValueChange: d, filter: g, shouldFilter: h, ...y } = e, w = m.exports.useId(), p = m.exports.useId(), v = m.exports.useId(), x = B3();
  Ii(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, R), b.emit();
    }
  }, [f]);
  let b = m.exports.useMemo(() => ({ subscribe: (I) => (a.current.add(I), () => a.current.delete(I)), snapshot: () => r.current, setState: (I, N, k) => {
    var C, J, ne;
    if (!Object.is(r.current[I], N)) {
      if (r.current[I] = N, I === "search")
        P(), $(), x(1, E);
      else if (I === "value")
        if (((C = s.current) == null ? void 0 : C.value) !== void 0) {
          (ne = (J = s.current).onValueChange) == null || ne.call(J, N);
          return;
        } else
          k || x(5, R);
      b.emit();
    }
  }, emit: () => {
    a.current.forEach((I) => I());
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
  }), filter: () => s.current.shouldFilter, label: u || e["aria-label"], listId: w, inputId: v, labelId: p }), []);
  function S(I) {
    var C;
    var N;
    let k = (C = (N = s.current) == null ? void 0 : N.filter) != null ? C : _3;
    return I ? k(I, r.current.search) : 0;
  }
  function $() {
    if (!n.current || !r.current.search || s.current.shouldFilter === !1)
      return;
    let I = r.current.filtered.items, N = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), ne = 0;
      J.forEach((ue) => {
        let ee = I.get(ue);
        ne = Math.max(ee, ne);
      }), N.push([C, ne]);
    });
    let k = n.current.querySelector(A3);
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
    if (!r.current.search || s.current.shouldFilter === !1) {
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
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (N = C.closest(Xi)) == null ? void 0 : N.querySelector(P3)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    return n.current.querySelector(`${lS}[aria-selected="true"]`);
  }
  function O() {
    return Array.from(n.current.querySelectorAll(y1));
  }
  function D(I) {
    let N = O()[I];
    N && b.setState("value", N.getAttribute(fr));
  }
  function z(I) {
    var N;
    let k = T(), C = O(), J = C.findIndex((ue) => ue === k), ne = C[J + I];
    (N = s.current) != null && N.loop && (ne = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), ne && b.setState("value", ne.getAttribute(fr));
  }
  function F(I) {
    let N = T(), k = N == null ? void 0 : N.closest(Xi), C;
    for (; k && !C; )
      k = I > 0 ? F3(k, Xi) : z3(k, Xi), C = k == null ? void 0 : k.querySelector(y1);
    C ? b.setState("value", C.getAttribute(fr)) : z(I);
  }
  let _ = () => D(O().length - 1), V = (I) => {
    I.preventDefault(), I.metaKey ? _() : I.altKey ? F(1) : z(1);
  }, M = (I) => {
    I.preventDefault(), I.metaKey ? D(0) : I.altKey ? F(-1) : z(-1);
  };
  return m.exports.createElement("div", { ref: Fa([n, t]), ...y, "cmdk-root": "", onKeyDown: (I) => {
    var N;
    if ((N = y.onKeyDown) == null || N.call(y, I), !I.defaultPrevented)
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
            let C = new Event(Rp);
            k.dispatchEvent(C);
          }
        }
      }
  } }, m.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: j3 }, u), m.exports.createElement(sS.Provider, { value: b }, m.exports.createElement(aS.Provider, { value: A }, c)));
}), R3 = m.exports.forwardRef((e, t) => {
  let n = m.exports.useId(), r = m.exports.useRef(null), o = m.exports.useContext(uS), i = La(), l = fS(e);
  Ii(() => i.item(n, o), []);
  let a = dS(n, r, [e.value, e.children, r]), s = Pm(), u = Qn((p) => p.value && p.value === a.current), c = Qn((p) => i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  m.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(Rp, f), () => p.removeEventListener(Rp, f);
  }, [c, e.onSelect, e.disabled]);
  function f() {
    var p, v;
    (v = (p = l.current).onSelect) == null || v.call(p, a.current);
  }
  function d() {
    s.setState("value", a.current, !0);
  }
  if (!c)
    return null;
  let { disabled: g, value: h, onSelect: y, ...w } = e;
  return m.exports.createElement("div", { ref: Fa([r, t]), ...w, "cmdk-item": "", role: "option", "aria-disabled": g || void 0, "aria-selected": u || void 0, "data-selected": u || void 0, onPointerMove: g ? void 0 : d, onClick: g ? void 0 : f }, e.children);
}), T3 = m.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = m.exports.useId(), l = m.exports.useRef(null), a = m.exports.useRef(null), s = m.exports.useId(), u = La(), c = Qn((d) => u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Ii(() => u.group(i), []), dS(i, l, [e.value, e.heading, a]);
  let f = m.exports.createElement(uS.Provider, { value: i }, r);
  return m.exports.createElement("div", { ref: Fa([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && m.exports.createElement("div", { ref: a, "cmdk-group-heading": "", "aria-hidden": !0, id: s }, n), m.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? s : void 0 }, f));
}), I3 = m.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.exports.useRef(null), i = Qn((l) => !l.search);
  return !n && !i ? null : m.exports.createElement("div", { ref: Fa([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), O3 = m.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Pm(), l = Qn((s) => s.search), a = La();
  return m.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), m.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": a.listId, "aria-labelledby": a.labelId, id: a.inputId, type: "text", value: o ? e.value : l, onChange: (s) => {
    o || i.setState("search", s.target.value), n == null || n(s.target.value);
  } });
}), N3 = m.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = m.exports.useRef(null), i = m.exports.useRef(null), l = La();
  return m.exports.useEffect(() => {
    if (i.current && o.current) {
      let a = i.current, s = o.current, u, c = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let f = a.getBoundingClientRect().height;
          s.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return c.observe(a), () => {
        cancelAnimationFrame(u), c.unobserve(a);
      };
    }
  }, []), m.exports.createElement("div", { ref: Fa([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, m.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), M3 = m.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...i } = e;
  return m.exports.createElement(m3, { open: n, onOpenChange: r }, m.exports.createElement(g3, { container: o }, m.exports.createElement(y3, { "cmdk-overlay": "" }), m.exports.createElement(v3, { "aria-label": e.label, "cmdk-dialog": "" }, m.exports.createElement(cS, { ref: t, ...i }))));
}), D3 = m.exports.forwardRef((e, t) => {
  let n = m.exports.useRef(!0), r = Qn((o) => o.filtered.count === 0);
  return m.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : m.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), L3 = m.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return m.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, m.exports.createElement("div", { "aria-hidden": !0 }, r));
}), ln = Object.assign(cS, { List: N3, Item: R3, Input: O3, Group: T3, Separator: I3, Dialog: M3, Empty: D3, Loading: L3 });
function F3(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function z3(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function fS(e) {
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
function Fa(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Qn(e) {
  let t = Pm(), n = () => e(t.snapshot());
  return m.exports.useSyncExternalStore(t.subscribe, n, n);
}
function dS(e, t, n) {
  let r = m.exports.useRef(), o = La();
  return Ii(() => {
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
    o.value(e, l), (i = t.current) == null || i.setAttribute(fr, l), r.current = l;
  }), r;
}
var B3 = () => {
  let [e, t] = m.exports.useState(), n = Fo(() => /* @__PURE__ */ new Map());
  return Ii(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, j3 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
let _m = Ba();
const re = (e) => za(e, _m);
let Rm = Ba();
re.write = (e) => za(e, Rm);
let Sc = Ba();
re.onStart = (e) => za(e, Sc);
let Tm = Ba();
re.onFrame = (e) => za(e, Tm);
let Im = Ba();
re.onFinish = (e) => za(e, Im);
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
  return ii.splice(pS(n), 0, o), xr += 1, hS(), o;
};
let pS = (e) => ~(~ii.findIndex((t) => t.time > e) || ~ii.length);
re.cancel = (e) => {
  Sc.delete(e), Tm.delete(e), _m.delete(e), Rm.delete(e), Im.delete(e);
};
re.sync = (e) => {
  Tp = !0, re.batchedUpdates(e), Tp = !1;
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
let Om = typeof window < "u" ? window.requestAnimationFrame : () => {
};
re.use = (e) => Om = e;
re.now = typeof performance < "u" ? () => performance.now() : Date.now;
re.batchedUpdates = (e) => e();
re.catch = console.error;
re.frameLoop = "always";
re.advance = () => {
  re.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : gS();
};
let vr = -1, xr = 0, Tp = !1;
function za(e, t) {
  Tp ? (t.delete(e), e(0)) : (t.add(e), hS());
}
function hS() {
  vr < 0 && (vr = 0, re.frameLoop !== "demand" && Om(mS));
}
function V3() {
  vr = -1;
}
function mS() {
  ~vr && (Om(mS), re.batchedUpdates(gS));
}
function gS() {
  let e = vr;
  vr = re.now();
  let t = pS(vr);
  t && (yS(ii.splice(0, t), (n) => n.handler()), xr -= t), Sc.flush(), _m.flush(e ? Math.min(64, vr - e) : 16.667), Tm.flush(), Rm.flush(), Im.flush(), xr || V3();
}
function Ba() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      xr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return xr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), xr -= t.size, yS(t, (r) => r(n) && e.add(r)), xr += e.size, t = e);
    }
  };
}
function yS(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      re.catch(r);
    }
  });
}
function Ip() {
}
const H3 = (e, t, n) => Object.defineProperty(e, t, {
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
const hl = (e, ...t) => Rl(e, (n) => n(...t)), vS = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let Nm, xS, Tr = null, wS = !1, Mm = Ip;
const U3 = (e) => {
  e.to && (xS = e.to), e.now && (re.now = e.now), e.colors !== void 0 && (Tr = e.colors), e.skipAnimation != null && (wS = e.skipAnimation), e.createStringInterpolator && (Nm = e.createStringInterpolator), e.requestAnimationFrame && re.use(e.requestAnimationFrame), e.batchedUpdates && (re.batchedUpdates = e.batchedUpdates), e.willAdvance && (Mm = e.willAdvance), e.frameLoop && (re.frameLoop = e.frameLoop);
};
var $n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Nm;
  },
  get to() {
    return xS;
  },
  get colors() {
    return Tr;
  },
  get skipAnimation() {
    return wS;
  },
  get willAdvance() {
    return Mm;
  },
  assign: U3
});
const Tl = /* @__PURE__ */ new Set();
let jt = [], Ff = [], Au = 0;
const kc = {
  get idle() {
    return !Tl.size && !jt.length;
  },
  start(e) {
    Au > e.priority ? (Tl.add(e), re.onStart(W3)) : (bS(e), re(Op));
  },
  advance: Op,
  sort(e) {
    if (Au)
      re.onFrame(() => kc.sort(e));
    else {
      const t = jt.indexOf(e);
      ~t && (jt.splice(t, 1), SS(e));
    }
  },
  clear() {
    jt = [], Tl.clear();
  }
};
function W3() {
  Tl.forEach(bS), Tl.clear(), re(Op);
}
function bS(e) {
  jt.includes(e) || SS(e);
}
function SS(e) {
  jt.splice(q3(jt, (t) => t.priority > e.priority), 0, e);
}
function Op(e) {
  const t = Ff;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    Au = r.priority, r.idle || (Mm(r), r.advance(e), r.idle || t.push(r));
  }
  return Au = 0, Ff = jt, Ff.length = 0, jt = t, jt.length > 0;
}
function q3(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const Q3 = {
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
}, an = "[-+]?\\d*\\.?\\d+", Pu = an + "%";
function Cc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const G3 = new RegExp("rgb" + Cc(an, an, an)), K3 = new RegExp("rgba" + Cc(an, an, an, an)), Y3 = new RegExp("hsl" + Cc(an, Pu, Pu)), X3 = new RegExp("hsla" + Cc(an, Pu, Pu, an)), Z3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, J3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e_ = /^#([0-9a-fA-F]{6})$/, t_ = /^#([0-9a-fA-F]{8})$/;
function n_(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = e_.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Tr && Tr[e] !== void 0 ? Tr[e] : (t = G3.exec(e)) ? (Oo(t[1]) << 24 | Oo(t[2]) << 16 | Oo(t[3]) << 8 | 255) >>> 0 : (t = K3.exec(e)) ? (Oo(t[1]) << 24 | Oo(t[2]) << 16 | Oo(t[3]) << 8 | w1(t[4])) >>> 0 : (t = Z3.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = t_.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = J3.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Y3.exec(e)) ? (v1(x1(t[1]), vs(t[2]), vs(t[3])) | 255) >>> 0 : (t = X3.exec(e)) ? (v1(x1(t[1]), vs(t[2]), vs(t[3])) | w1(t[4])) >>> 0 : null;
}
function zf(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function v1(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = zf(o, r, e + 1 / 3), l = zf(o, r, e), a = zf(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Oo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function x1(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function w1(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function vs(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function b1(e) {
  let t = n_(e);
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
    return Nm(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    const c = o_(u, i);
    return r_(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function r_(e, t, n, r, o, i, l, a, s) {
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
function o_(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function Np() {
  return Np = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Np.apply(this, arguments);
}
const Si = Symbol.for("FluidValue.get"), ho = Symbol.for("FluidValue.observers"), Ft = (e) => Boolean(e && e[Si]), yt = (e) => e && e[Si] ? e[Si]() : e, S1 = (e) => e[ho] || null;
function i_(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ca(e, t) {
  let n = e[ho];
  n && n.forEach((r) => {
    i_(r, t);
  });
}
class kS {
  constructor(t) {
    if (this[Si] = void 0, this[ho] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    l_(this, t);
  }
}
const l_ = (e, t) => CS(e, Si, t);
function Oi(e, t) {
  if (e[Si]) {
    let n = e[ho];
    n || CS(e, ho, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
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
const CS = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Hs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, a_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, k1 = new RegExp(`(${Hs.source})(%|[a-z]+)`, "i"), s_ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ec = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, ES = (e) => {
  const [t, n] = u_(e);
  if (!t || vS())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Ec.test(n))
      return ES(n);
    if (n)
      return n;
  }
  return e;
}, u_ = (e) => {
  const t = Ec.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let Bf;
const c_ = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, $S = (e) => {
  Bf || (Bf = Tr ? new RegExp(`(${Object.keys(Tr).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => yt(i).replace(Ec, ES).replace(a_, b1).replace(Bf, b1)), n = t.map((i) => i.match(Hs).map(Number)), o = n[0].map((i, l) => n.map((a) => {
    if (!(l in a))
      throw Error('The arity of each "output" value must be equal');
    return a[l];
  })).map((i) => ua(Np({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const a = !k1.test(t[0]) && ((l = t.find((u) => k1.test(u))) == null ? void 0 : l.replace(Hs, ""));
    let s = 0;
    return t[0].replace(Hs, () => `${o[s++](i)}${a || ""}`).replace(s_, c_);
  };
}, Dm = "react-spring: ", AS = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Dm}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, f_ = AS(console.warn);
function d_() {
  f_(`${Dm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const p_ = AS(console.warn);
function h_() {
  p_(`${Dm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function $c(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !vS() && Ec.test(e) || e in (Tr || {}));
}
const Lm = typeof window < "u" && window.document && window.document.createElement ? m.exports.useLayoutEffect : m.exports.useEffect, m_ = () => {
  const e = m.exports.useRef(!1);
  return Lm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function PS() {
  const e = m.exports.useState()[1], t = m_();
  return () => {
    t.current && e(Math.random());
  };
}
function g_(e, t) {
  const [n] = m.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = m.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && y_(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function y_(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const _S = (e) => m.exports.useEffect(e, v_), v_ = [];
function C1(e) {
  const t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const da = Symbol.for("Animated:node"), x_ = (e) => !!e && e[da] === e, xn = (e) => e && e[da], Fm = (e, t) => H3(e, da, t), Ac = (e) => e && e[da] && e[da].getPayload();
class RS {
  constructor() {
    this.payload = void 0, Fm(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Ni extends RS {
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
    super(0), this._string = null, this._toString = void 0, this._toString = ua({
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
    t && (this._toString = ua({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const _u = {
  dependencies: null
};
class Pc extends RS {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return En(this.source, (r, o) => {
      x_(r) ? n[o] = r.getValue(t) : Ft(r) ? n[o] = yt(r) : t || (n[o] = r);
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
class zm extends Pc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new zm(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(w_)), !0);
  }
}
function w_(e) {
  return ($c(e) ? ki : Ni).create(e);
}
function Mp(e) {
  const t = xn(e);
  return t ? t.constructor : W.arr(e) ? zm : $c(e) ? ki : Ni;
}
function Dp() {
  return Dp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dp.apply(this, arguments);
}
const E1 = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    const i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = k_(o, h);
    }, [o]), [a, s] = S_(r, t), u = PS(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new b_(c, s), d = m.exports.useRef();
    Lm(() => (d.current = f, he(s, (h) => Oi(h, f)), () => {
      d.current && (he(d.current.deps, (h) => fa(h, d.current)), re.cancel(d.current.update));
    })), m.exports.useEffect(c, []), _S(() => () => {
      const h = d.current;
      he(h.deps, (y) => fa(y, h));
    });
    const g = t.getComponentProps(a.getValue());
    return /* @__PURE__ */ B(e, {
      ...g,
      ref: l
    });
  });
};
class b_ {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && re.write(this.update);
  }
}
function S_(e, t) {
  const n = /* @__PURE__ */ new Set();
  return _u.dependencies = n, e.style && (e = Dp({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Pc(e), _u.dependencies = null, [e, n];
}
function k_(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const $1 = Symbol.for("AnimatedComponent"), C_ = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Pc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const a = A1(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = E1(l, o)) : l = l[$1] || (l[$1] = E1(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return En(e, (l, a) => {
    W.arr(e) && (a = A1(l)), i[a] = i(l);
  }), {
    animated: i
  };
}, A1 = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
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
const Il = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), TS = (e, t) => W.obj(e) ? t && e[t] : e, IS = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, E_ = (e) => e, Bm = (e, t = E_) => {
  let n = $_;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, $_ = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], A_ = {
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
function P_(e) {
  const t = {};
  let n = 0;
  if (En(e, (r, o) => {
    A_[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function OS(e) {
  const t = P_(e);
  if (t) {
    const n = {
      to: t
    };
    return En(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ke({}, e);
}
function pa(e) {
  return e = yt(e), W.arr(e) ? e.map(pa) : $c(e) ? $n.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function __(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Lp(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function R_(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function T_(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const I_ = {
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
}, Ru = 1.70158, xs = Ru * 1.525, P1 = Ru + 1, _1 = 2 * Math.PI / 3, R1 = 2 * Math.PI / 4.5, ws = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, O_ = {
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
  easeInBack: (e) => P1 * e * e * e - Ru * e * e,
  easeOutBack: (e) => 1 + P1 * Math.pow(e - 1, 3) + Ru * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((xs + 1) * 2 * e - xs) / 2 : (Math.pow(2 * e - 2, 2) * ((xs + 1) * (e * 2 - 2) + xs) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * _1),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * _1) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * R1)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * R1) / 2 + 1,
  easeInBounce: (e) => 1 - ws(1 - e),
  easeOutBounce: ws,
  easeInOutBounce: (e) => e < 0.5 ? (1 - ws(1 - 2 * e)) / 2 : (1 + ws(2 * e - 1)) / 2
}, Fp = Ke({}, I_.default, {
  mass: 1,
  damping: 1,
  easing: O_.linear,
  clamp: !1
});
class N_ {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, Fp);
  }
}
function M_(e, t, n) {
  n && (n = Ke({}, n), T1(n, t), t = Ke({}, n, t)), T1(e, t), Object.assign(e, t);
  for (const l in Fp)
    e[l] == null && (e[l] = Fp[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function T1(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const I1 = [];
class D_ {
  constructor() {
    this.changed = !1, this.values = I1, this.toValues = null, this.fromValues = I1, this.to = void 0, this.from = void 0, this.config = new N_(), this.immediate = !1;
  }
}
function NS(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, a) => {
    var s;
    let u, c, f = Il((s = n.cancel) != null ? s : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Il(n.pause, t));
      let y = r == null ? void 0 : r.pause;
      y !== !0 && (y = o.paused || Il(y, t)), u = Zr(n.delay || 0, t), y ? (o.resumeQueue.add(g), i.pause()) : (i.resume(), g());
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
      } catch (y) {
        a(y);
      }
    }
  });
}
const jm = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? li(e.get()) : t.every((n) => n.noop) ? MS(e.get()) : rn(e.get(), t.every((n) => n.finished)), MS = (e) => ({
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
function DS(e, t, n, r) {
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
    const u = Bm(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      const p = o <= (n.cancelId || 0) && li(r) || o !== n.asyncId && rn(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const v = new O1(), x = new N1();
      return (async () => {
        if ($n.skipAnimation)
          throw ha(n), x.result = rn(r, !1), f(x), x;
        g(v);
        const b = W.obj(w) ? Ke({}, w) : Ke({}, p, {
          to: w
        });
        b.parentId = o, En(u, (S, $) => {
          W.und(b[$]) && (b[$] = S);
        });
        const A = await r.start(b);
        return g(v), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    };
    let y;
    if ($n.skipAnimation)
      return ha(n), rn(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const v of p)
          await h(v);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), y = rn(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof O1)
        y = w.result;
      else if (w instanceof N1)
        y = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return W.fun(l) && re.batchedUpdates(() => {
      l(y, r, r.item);
    }), y;
  })();
}
function ha(e, t) {
  Rl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class O1 extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class N1 extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const zp = (e) => e instanceof Vm;
let L_ = 1;
class Vm extends kS {
  constructor(...t) {
    super(...t), this.id = L_++, this.key = void 0, this._priority = 0;
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
    return d_(), $n.to(this, t);
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
    this.idle || kc.sort(this), ca(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const mo = Symbol.for("SpringPhase"), LS = 1, Bp = 2, jp = 4, jf = (e) => (e[mo] & LS) > 0, ar = (e) => (e[mo] & Bp) > 0, Zi = (e) => (e[mo] & jp) > 0, M1 = (e, t) => t ? e[mo] |= Bp | LS : e[mo] &= ~Bp, D1 = (e, t) => t ? e[mo] |= jp : e[mo] &= ~jp;
class F_ extends Vm {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new D_(), this.queue = void 0, this.defaultProps = {}, this._state = {
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
    return !(ar(this) || this._state.asyncTo) || Zi(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    const t = xn(this);
    return t instanceof Ni ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return jf(this);
  }
  get isAnimating() {
    return ar(this);
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
    const a = Ac(o.to);
    !a && Ft(o.to) && (l = At(yt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == ki ? 1 : a ? a[f].lastPosition : l[f];
      let g = o.immediate, h = d;
      if (!g) {
        if (h = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let y = c.elapsedTime += t;
        const w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = W.arr(i.velocity) ? i.velocity[f] : i.velocity;
        let v;
        if (W.und(i.duration))
          if (i.decay) {
            const x = i.decay === !0 ? 0.998 : i.decay, b = Math.exp(-(1 - x) * y);
            h = w + p / (1 - x) * (1 - b), g = Math.abs(c.lastPosition - h) < 0.1, v = p * b;
          } else {
            v = c.lastVelocity == null ? p : c.lastVelocity;
            const x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3)), b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !W.und(A), $ = w == d ? c.v0 > 0 : w < d;
            let E, P = !1;
            const R = 1, T = Math.ceil(t / R);
            for (let O = 0; O < T && (E = Math.abs(v) > b, !(!E && (g = Math.abs(d - h) <= x, g))); ++O) {
              S && (P = h == d || h > d == $, P && (v = -v * A, h = d));
              const D = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * v, F = (D + z) / i.mass;
              v = v + F * R, h = h + v * R;
            }
          }
        else {
          let x = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, y = c.elapsedTime += t)), x = (i.progress || 0) + y / this._memoizedDuration, x = x > 1 ? 1 : x < 0 ? 0 : x, c.durationProgress = x), h = w + i.easing(x) * (d - w), v = (h - c.lastPosition) / t, g = x == 1;
        }
        c.lastVelocity = v, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      a && !a[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    const s = xn(this), u = s.getValue();
    if (n) {
      const c = yt(o.to);
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
    return W.und(t) ? (r = this.queue || [], this.queue = []) : r = [W.obj(t) ? t : Ke({}, n, {
      to: t
    })], Promise.all(r.map((o) => this._update(o))).then((o) => jm(this, o));
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
    r = W.obj(r) ? r[n] : r, (r == null || Lp(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return jf(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), W.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ke({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, Bm(r, (s, u) => /^on/.test(u) ? TS(s, o) : s)), F1(this, r, "onProps"), el(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const a = this._state;
    return NS(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: a,
      actions: {
        pause: () => {
          Zi(this) || (D1(this, !0), hl(a.pauseQueue), el(this, "onPause", rn(this, Ji(this, this.animation.to)), this));
        },
        resume: () => {
          Zi(this) && (D1(this, !1), ar(this) && this._resume(), hl(a.resumeQueue), el(this, "onResume", rn(this, Ji(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((s) => {
      if (r.loop && s.finished && !(n && s.noop)) {
        const u = FS(r);
        if (u)
          return this._update(u, !0);
      }
      return s;
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
    const g = !On(d, c);
    g && (s.from = d), d = yt(d);
    const h = !On(f, u);
    h && this._focus(f);
    const y = Lp(n.to), {
      config: w
    } = s, {
      decay: p,
      velocity: v
    } = w;
    (o || i) && (w.velocity = 0), n.config && !y && M_(w, Zr(n.config, l), n.config !== a.config ? Zr(a.config, l) : void 0);
    let x = xn(this);
    if (!x || W.und(f))
      return r(rn(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Il(n.reset, l), A = b ? d : this.get(), S = pa(f), $ = W.num(S) || W.arr(S) || $c(S), E = !y && (!$ || Il(a.immediate || n.immediate, l));
    if (h) {
      const O = Mp(f);
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
      (h || O) && (T = On(pa(A), S), R = !T), (!On(s.immediate, E) && !E || !On(w.decay, p) || !On(w.velocity, v)) && (R = !0);
    }
    if (T && ar(this) && (s.changed && !b ? R = !0 : R || this._stop(u)), !y && ((R || Ft(u)) && (s.values = x.getPayload(), s.toValues = Ft(f) ? null : P == ki ? [1] : At(S)), s.immediate != E && (s.immediate = E, !E && !b && this._set(u)), R)) {
      const {
        onRest: O
      } = s;
      he(B_, (z) => F1(this, n, z));
      const D = rn(this, Ji(this, u));
      hl(this._pendingCalls, D), this._pendingCalls.add(r), s.changed && re.batchedUpdates(() => {
        s.changed = !b, O == null || O(D, this), b ? Zr(a.onRest, D) : s.onStart == null || s.onStart(D, this);
      });
    }
    b && this._set(A), y ? r(DS(n.to, n, this._state, this)) : R ? this._start() : ar(this) && !h ? this._pendingCalls.add(r) : r(MS(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (S1(this) && this._detach(), n.to = t, S1(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Ft(n) && (Oi(n, this), zp(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Ft(t) && fa(t, this);
  }
  _set(t, n = !0) {
    const r = yt(t);
    if (!W.und(r)) {
      const o = xn(this);
      if (!o || !On(r, o.getValue())) {
        const i = Mp(r);
        !o || o.constructor != i ? Fm(this, i.create(r)) : o.setValue(r), o && re.batchedUpdates(() => {
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
    xn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), ar(this) || (M1(this, !0), Zi(this) || this._resume());
  }
  _resume() {
    $n.skipAnimation ? this.finish() : kc.start(this);
  }
  _stop(t, n) {
    if (ar(this)) {
      M1(this, !1);
      const r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ca(this, {
        type: "idle",
        parent: this
      });
      const o = n ? li(this.get()) : rn(this.get(), Ji(this, t != null ? t : r.to));
      hl(this._pendingCalls, o), r.changed && (r.changed = !1, el(this, "onRest", o, this));
    }
  }
}
function Ji(e, t) {
  const n = pa(t), r = pa(e.get());
  return On(r, n);
}
function FS(e, t = e.loop, n = e.to) {
  let r = Zr(t);
  if (r) {
    const o = r !== !0 && OS(r), i = (o || e).reverse, l = !o || o.reset;
    return ma(Ke({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || Lp(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function ma(e) {
  const {
    to: t,
    from: n
  } = e = OS(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && L1(t, r), W.obj(n) && L1(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function z_(e) {
  const t = ma(e);
  return W.und(t.default) && (t.default = Bm(t)), t;
}
function L1(e, t) {
  En(e, (n, r) => n != null && t.add(r));
}
const B_ = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function F1(e, t, n) {
  e.animation[n] = t[n] !== IS(t, n) ? TS(t[n], e.key) : void 0;
}
function el(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const j_ = ["onStart", "onChange", "onRest"];
let V_ = 1;
class H_ {
  constructor(t, n) {
    this.id = V_++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
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
    return t && this.queue.push(ma(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(ma) : this.queue = [], this._flush ? this._flush(this, n) : (HS(this, n), Vp(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      he(At(n), (o) => r[o].stop(!!t));
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
    (o && !this._started || i && !this._started) && (this._started = !0, Rl(t, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const l = !o && this._started, a = i || l && r.size ? this.get() : null;
    i && n.size && Rl(n, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), l && (this._started = !1, Rl(r, ([s, u]) => {
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
function Vp(e, t) {
  return Promise.all(t.map((n) => zS(e, n))).then((n) => jm(e, n));
}
async function zS(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(j_, (y) => {
    const w = t[y];
    if (W.fun(w)) {
      const p = e._events[y];
      t[y] = ({
        finished: v,
        cancelled: x
      }) => {
        const b = p.get(w);
        b ? (v || (b.finished = !1), x && (b.cancelled = !0)) : p.set(w, {
          value: null,
          finished: v || !1,
          cancelled: x || !1
        });
      }, u && (u[y] = t[y]);
    }
  });
  const f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, hl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((y) => e.springs[y].start(t)), g = t.cancel === !0 || IS(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(NS(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Ip,
      resume: Ip,
      start(y, w) {
        g ? (ha(f, e._lastAsyncId), w(li(e))) : (y.onRest = a, w(DS(c, y, f, e)));
      }
    }
  })), f.paused && await new Promise((y) => {
    f.resumeQueue.add(y);
  });
  const h = jm(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const y = FS(t, l, o);
    if (y)
      return HS(e, [y]), zS(e, y, !0);
  }
  return s && re.batchedUpdates(() => s(h, e, e.item)), h;
}
function z1(e, t) {
  const n = Ke({}, e.springs);
  return t && he(At(t), (r) => {
    W.und(r.keys) && (r = ma(r)), W.obj(r.to) || (r = Ke({}, r, {
      to: void 0
    })), VS(n, r, (o) => jS(o));
  }), BS(e, n), n;
}
function BS(e, t) {
  En(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Oi(n, e));
  });
}
function jS(e, t) {
  const n = new F_();
  return n.key = e, t && Oi(n, t), n;
}
function VS(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function HS(e, t) {
  he(t, (n) => {
    VS(e.springs, n, (r) => jS(r, e));
  });
}
function U_(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const W_ = ["children"], _c = (e) => {
  let {
    children: t
  } = e, n = U_(e, W_);
  const r = m.exports.useContext(Tu), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = g_(() => ({
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
}, Tu = q_(_c, {});
_c.Provider = Tu.Provider;
_c.Consumer = Tu.Consumer;
function q_(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const Q_ = () => {
  const e = [], t = function(o) {
    h_();
    const i = [];
    return he(e, (l, a) => {
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
        const a = this._getProps(r, i, l);
        a && o.push(i.start(a));
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
function G_(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = m.exports.useMemo(() => r || arguments.length == 3 ? Q_() : void 0, []), i = m.exports.useRef(0), l = PS(), a = m.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, v) {
      const x = z1(p, v);
      return i.current > 0 && !a.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? Vp(p, v) : new Promise((A) => {
        BS(p, x), a.queue.push(() => {
          A(Vp(p, v));
        }), l();
      });
    }
  }), []), s = m.exports.useRef([...a.ctrls]), u = [], c = C1(e) || 0;
  m.exports.useMemo(() => {
    he(s.current.slice(e, c), (p) => {
      R_(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, v) {
    for (let x = p; x < v; x++) {
      const b = s.current[x] || (s.current[x] = new H_(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = z_(A));
    }
  }
  const d = s.current.map((p, v) => z1(p, u[v])), g = m.exports.useContext(_c), h = C1(g), y = g !== h && __(g);
  Lm(() => {
    i.current++, a.ctrls = s.current;
    const {
      queue: p
    } = a;
    p.length && (a.queue = [], he(p, (v) => v())), he(s.current, (v, x) => {
      o == null || o.add(v), y && v.start({
        default: g
      });
      const b = u[x];
      b && (T_(v, b.ref), v.ref ? v.queue.push(b) : v.start(b));
    });
  }), _S(() => () => {
    he(a.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ke({}, p));
  return o ? [w, o] : w;
}
function K_(e, t) {
  const n = W.fun(e), [[r], o] = G_(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let B1;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(B1 || (B1 = {}));
class Y_ extends Vm {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = ua(...n);
    const r = this._get(), o = Mp(r);
    Fm(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    On(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && j1(this._active) && Vf(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(yt) : At(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !j1(this._active) && (this.idle = !1, he(Ac(this), (t) => {
      t.done = !1;
    }), $n.skipAnimation ? (re.batchedUpdates(() => this.advance()), Vf(this)) : kc.start(this));
  }
  _attach() {
    let t = 1;
    he(At(this.source), (n) => {
      Ft(n) && Oi(n, this), zp(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(At(this.source), (t) => {
      Ft(t) && fa(t, this);
    }), this._active.clear(), Vf(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (zp(r) ? r.priority : 0) + 1), 0));
  }
}
function X_(e) {
  return e.idle !== !1;
}
function j1(e) {
  return !e.size || Array.from(e).every(X_);
}
function Vf(e) {
  e.idle || (e.idle = !0, he(Ac(e), (t) => {
    t.done = !0;
  }), ca(e, {
    type: "idle",
    parent: e
  }));
}
$n.assign({
  createStringInterpolator: $S,
  to: (e, t) => new Y_(e, t)
});
function Hm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Z_ = ["style", "children", "scrollTop", "scrollLeft"], US = /^--/;
function J_(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !US.test(e) && !(Ol.hasOwnProperty(e) && Ol[e]) ? t + "px" : ("" + t).trim();
}
const V1 = {};
function e4(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: a
  } = r, s = Hm(r, Z_), u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : V1[f] || (V1[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = J_(f, o[f]);
      US.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), a !== void 0 && (e.scrollLeft = a);
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
const t4 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), n4 = ["Webkit", "Ms", "Moz", "O"];
Ol = Object.keys(Ol).reduce((e, t) => (n4.forEach((n) => e[t4(n, t)] = e[t]), e), Ol);
const r4 = ["x", "y", "z"], o4 = /^(matrix|translate|scale|rotate|skew)/, i4 = /^(translate)/, l4 = /^(rotate|skew)/, Hf = (e, t) => W.num(e) && e !== 0 ? e + t : e, Us = (e, t) => W.arr(e) ? e.every((n) => Us(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class a4 extends Pc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = Hm(t, r4);
    const l = [], a = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), a.push((s) => [`translate3d(${s.map((u) => Hf(u, "px")).join(",")})`, Us(s, 0)])), En(i, (s, u) => {
      if (u === "transform")
        l.push([s || ""]), a.push((c) => [c, c === ""]);
      else if (o4.test(u)) {
        if (delete i[u], W.und(s))
          return;
        const c = i4.test(u) ? "px" : l4.test(u) ? "deg" : "";
        l.push(At(s)), a.push(u === "rotate3d" ? ([f, d, g, h]) => [`rotate3d(${f},${d},${g},${Hf(h, c)})`, Us(h, 0)] : (f) => [`${u}(${f.map((d) => Hf(d, c)).join(",")})`, Us(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new s4(l, a)), super(i);
  }
}
class s4 extends kS {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return he(this.inputs, (r, o) => {
      const i = yt(r[0]), [l, a] = this.transforms[o](W.arr(i) ? i : r.map(yt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && he(this.inputs, (n) => he(n, (r) => Ft(r) && Oi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => Ft(r) && fa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ca(this, t);
  }
}
const u4 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], c4 = ["scrollTop", "scrollLeft"];
$n.assign({
  batchedUpdates: hn.exports.unstable_batchedUpdates,
  createStringInterpolator: $S,
  colors: Q3
});
const f4 = C_(u4, {
  applyAnimatedValues: e4,
  createAnimatedStyle: (e) => new a4(e),
  getComponentProps: (e) => Hm(e, c4)
}), d4 = f4.animated;
function WS(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = WS(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function H1() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = WS(t)) && (r && (r += " "), r += n);
  return r;
}
function p4(e, t, { includes: n = [], ...r } = {}) {
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
var ke = "colors", ct = "sizes", X = "space", qS = { gap: X, gridGap: X, columnGap: X, gridColumnGap: X, rowGap: X, gridRowGap: X, inset: X, insetBlock: X, insetBlockEnd: X, insetBlockStart: X, insetInline: X, insetInlineEnd: X, insetInlineStart: X, margin: X, marginTop: X, marginRight: X, marginBottom: X, marginLeft: X, marginBlock: X, marginBlockEnd: X, marginBlockStart: X, marginInline: X, marginInlineEnd: X, marginInlineStart: X, padding: X, paddingTop: X, paddingRight: X, paddingBottom: X, paddingLeft: X, paddingBlock: X, paddingBlockEnd: X, paddingBlockStart: X, paddingInline: X, paddingInlineEnd: X, paddingInlineStart: X, top: X, right: X, bottom: X, left: X, scrollMargin: X, scrollMarginTop: X, scrollMarginRight: X, scrollMarginBottom: X, scrollMarginLeft: X, scrollMarginX: X, scrollMarginY: X, scrollMarginBlock: X, scrollMarginBlockEnd: X, scrollMarginBlockStart: X, scrollMarginInline: X, scrollMarginInlineEnd: X, scrollMarginInlineStart: X, scrollPadding: X, scrollPaddingTop: X, scrollPaddingRight: X, scrollPaddingBottom: X, scrollPaddingLeft: X, scrollPaddingX: X, scrollPaddingY: X, scrollPaddingBlock: X, scrollPaddingBlockEnd: X, scrollPaddingBlockStart: X, scrollPaddingInline: X, scrollPaddingInlineEnd: X, scrollPaddingInlineStart: X, fontSize: "fontSizes", background: ke, backgroundColor: ke, backgroundImage: ke, borderImage: ke, border: ke, borderBlock: ke, borderBlockEnd: ke, borderBlockStart: ke, borderBottom: ke, borderBottomColor: ke, borderColor: ke, borderInline: ke, borderInlineEnd: ke, borderInlineStart: ke, borderLeft: ke, borderLeftColor: ke, borderRight: ke, borderRightColor: ke, borderTop: ke, borderTopColor: ke, caretColor: ke, color: ke, columnRuleColor: ke, fill: ke, outline: ke, outlineColor: ke, stroke: ke, textDecorationColor: ke, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ct, minBlockSize: ct, maxBlockSize: ct, inlineSize: ct, minInlineSize: ct, maxInlineSize: ct, width: ct, minWidth: ct, maxWidth: ct, height: ct, minHeight: ct, maxHeight: ct, flexBasis: ct, gridTemplateColumns: ct, gridTemplateRows: ct, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, h4 = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Mi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, h4))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, io = Symbol.for("sxs.internal"), Um = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), U1 = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: m4 } = Object.prototype, Hp = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), g4 = /\s+(?![^()]*\))/, No = (e) => (t) => e(...typeof t == "string" ? String(t).split(g4) : [t]), W1 = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: No((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: No((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: No((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: No((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: No((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: No((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, Uf = /([\d.]+)([^]*)/, y4 = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, v4 = (e, t) => e in x4 && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${Hp(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${Hp(e)}:${r}fit-content`) + i) : String(t), x4 = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Gn = (e) => e ? e + "-" : "", QS = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, a) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Gn(t) + (a.includes("$") ? "" : Gn(n)) + a.replace(/\$/g, "-") : a) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), w4 = /\s*,\s*(?![^()]*\))/, b4 = Object.prototype.toString, Xo = (e, t, n, r, o) => {
  let i, l, a;
  const s = (u, c, f) => {
    let d, g;
    const h = (y) => {
      for (d in y) {
        const v = d.charCodeAt(0) === 64, x = v && Array.isArray(y[d]) ? y[d] : [y[d]];
        for (g of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof g == "object" && g && g.toString === b4 && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(g)), l = null;
              continue;
            }
          } else if (b in W1) {
            const S = W1[b];
            if (S !== a) {
              a = S, h(S(g)), a = null;
              continue;
            }
          }
          if (v && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, $, E, P, R, T) => {
            const O = Uf.test($), D = 0.0625 * (O ? -1 : 1), [z, F] = O ? [P, $] : [$, P];
            return "(" + (E[0] === "=" ? "" : E[0] === ">" === O ? "max-" : "min-") + z + ":" + (E[0] !== "=" && E.length === 1 ? F.replace(Uf, (_, V, M) => Number(V) + D * (E === ">" ? 1 : -1) + M) : F) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + z + ":" + (R.length === 1 ? T.replace(Uf, (_, V, M) => Number(V) + D * (R === ">" ? -1 : 1) + M) : T) : "") + ")";
          })), A) {
            const S = v ? f.concat(d) : [...f], $ = v ? [...c] : y4(c, d.split(w4));
            i !== void 0 && o(q1(...i)), i = void 0, s(g, $, S);
          } else
            i === void 0 && (i = [[], c, f]), d = v || d.charCodeAt(0) !== 36 ? d : `--${Gn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = A ? g : typeof g == "number" ? g && b in S4 ? String(g) + "px" : String(g) : QS(v4(b, g == null ? "" : g), r.prefix, r.themeMap[b]), i[0].push(`${v ? `${d} ` : `${Hp(d)}:`}${g}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o(q1(...i)), i = void 0;
  };
  s(e, t, n);
}, q1 = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, S4 = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Q1 = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), lo = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Q1(n % 52) + r;
  return Q1(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), ml = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], k4 = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, C4 = (e) => {
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
      if (k4(a)) {
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
          const g = d.slice(14, -3).trim().split(/\s+/), h = ml[g[0]];
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
    for (let a = ml.length - 1; a >= 0; --a) {
      const s = ml[a];
      if (!l[s]) {
        const u = ml[a + 1], c = l[u] ? l[u].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${a}}`, c), l[s] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([a]) };
      }
      E4(l[s]);
    }
  };
  return r(), t;
}, E4 = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, tl = Symbol(), $4 = Mi(), G1 = (e, t) => $4(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[io]) {
        r.type == null && (r.type = o[io].type);
        for (const i of o[io].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(A4(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), P4(e, r, t);
}), A4 = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Gn(o.prefix)}c-${lo(r)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    s[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = s, f = d, m4.call(c, f) || (s[d] = "undefined");
      const g = e[d];
      for (const h in g) {
        const y = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = g[h], p = [y, w, !U1(w)];
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
      const y = [h, g, !U1(g)];
      a.push(y);
    }
  return [i, r, l, a, s, u];
}, P4 = (e, t, n) => {
  const [r, o, i, l] = _4(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[tl].length; g++) {
        const [h, y] = d[tl][g];
        f.rules[h].apply(y);
      }
      return d[tl] = [], null;
    }
    return d[tl] = [], d.rules = {}, ml.forEach((g) => d.rules[g] = { apply: (h) => d[tl].push([g, h]) }), d;
  })(n) : null, s = (a || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || R4;
    const { css: d, ...g } = f, h = {};
    for (const p in i)
      if (delete g[p], p in f) {
        let v = f[p];
        typeof v == "object" && v ? h[p] = { "@initial": i[p], ...v } : (v = String(v), h[p] = v !== "undefined" || l.has(p) ? v : i[p]);
      } else
        h[p] = i[p];
    const y = /* @__PURE__ */ new Set([...o]);
    for (const [p, v, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), Xo(v, [`.${p}`], [], e, ($) => {
        s.styled.apply($);
      }));
      const A = K1(x, h, e.media), S = K1(b, h, e.media, !0);
      for (const $ of A)
        if ($ !== void 0)
          for (const [E, P, R] of $) {
            const T = `${p}-${lo(P)}-${E}`;
            y.add(T);
            const O = (R ? n.rules.resonevar : n.rules.onevar).cache, D = R ? s.resonevar : s.onevar;
            O.has(T) || (O.add(T), Xo(P, [`.${T}`], [], e, (z) => {
              D.apply(z);
            }));
          }
      for (const $ of S)
        if ($ !== void 0)
          for (const [E, P] of $) {
            const R = `${p}-${lo(P)}-${E}`;
            y.add(R), n.rules.allvar.cache.has(R) || (n.rules.allvar.cache.add(R), Xo(P, [`.${R}`], [], e, (T) => {
              s.allvar.apply(T);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${lo(d)}-css`;
      y.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), Xo(d, [`.${p}`], [], e, (v) => {
        s.inline.apply(v);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && y.add(p);
    const w = g.className = [...y].join(" ");
    return { type: t.type, className: w, selector: u, props: g, toString: () => w, deferredInjector: a };
  };
  return Um(c, { className: r, selector: u, [io]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, _4 = (e) => {
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
}, K1 = (e, t, n, r) => {
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
            let g, h, y = 0;
            for (const w in d) {
              if (f === String(d[w])) {
                if (w !== "@initial") {
                  const p = w.slice(1);
                  (h = h || []).push(p in n ? n[p] : w.replace(/^@media ?/, "")), c = !0;
                }
                u += y, g = !0;
              }
              ++y;
            }
            if (h && h.length && (l = { ["@media " + h.join(", ")]: l }), !g)
              continue e;
          }
        }
      }
      (o[u] = o[u] || []).push([r ? "cv" : `${s}-${i[s]}`, l, c]);
    }
  return o;
}, R4 = {}, T4 = Mi(), I4 = (e, t) => T4(e, () => (...n) => {
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
        Xo(o, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return Um(r, { toString: r });
}), O4 = Mi(), N4 = (e, t) => O4(e, () => (n) => {
  const r = `${Gn(e.prefix)}k-${lo(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      Xo(n, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return Um(o, { get name() {
    return o();
  }, toString: o });
}), M4 = class {
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
}, D4 = Mi(), L4 = (e, t) => D4(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Gn(e.prefix)}t-${lo(r)}`}`, i = {}, l = [];
  for (const s in r) {
    i[s] = {};
    for (const u in r[s]) {
      const c = `--${Gn(e.prefix)}${s}-${u}`, f = QS(String(r[s][u]), e.prefix, s);
      i[s][u] = new M4(u, f, s, e.prefix), l.push(`${c}:${f}`);
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
}), F4 = Mi(), z4 = Mi(), B4 = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = F4(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", a = typeof i.media == "object" && i.media || {}, s = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: a, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...qS }, utils: typeof i.utils == "object" && i.utils || {} }, f = C4(s), d = { css: G1(c, f), globalCss: I4(c, f), keyframes: N4(c, f), createTheme: L4(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => z4(n, () => {
    const o = G1(n, r);
    return (...i) => {
      const l = o(...i), a = l[io].type, s = Ve.forwardRef((u, c) => {
        const f = u && u.as || a, { props: d, deferredInjector: g } = l(u);
        return delete d.as, d.ref = c, g ? Ve.createElement(Ve.Fragment, null, Ve.createElement(f, d), Ve.createElement(g, null)) : Ve.createElement(f, d);
      });
      return s.className = l.className, s.displayName = `Styled.${a.displayName || a.name || a}`, s.selector = l.selector, s.toString = () => l.selector, s[io] = l[io], s;
    };
  }))(t), t;
};
function j4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ga(e, t) {
  return ga = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ga(e, t);
}
function V4(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ga(e, t);
}
function Up(e) {
  return Up = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Up(e);
}
function H4(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function U4() {
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
function Ws(e, t, n) {
  return U4() ? Ws = Reflect.construct : Ws = function(o, i, l) {
    var a = [null];
    a.push.apply(a, i);
    var s = Function.bind.apply(o, a), u = new s();
    return l && ga(u, l.prototype), u;
  }, Ws.apply(null, arguments);
}
function Wp(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wp = function(r) {
    if (r === null || !H4(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Ws(r, arguments, Up(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ga(o, r);
  }, Wp(e);
}
var wr = /* @__PURE__ */ function(e) {
  V4(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, j4(r);
  }
  return t;
}(/* @__PURE__ */ Wp(Error)), W4 = /--[\S]*/g;
function q4(e, t) {
  if (!e || !e.match(W4))
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
function Q4(e, t, n) {
  return Wf(e) + "," + Wf(t) + "," + Wf(n);
}
function Y1(e, t, n, r) {
  if (r === void 0 && (r = Q4), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), a = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (a = i, s = l) : o >= 1 && o < 2 ? (a = l, s = i) : o >= 2 && o < 3 ? (s = i, u = l) : o >= 3 && o < 4 ? (s = l, u = i) : o >= 4 && o < 5 ? (a = l, u = i) : o >= 5 && o < 6 && (a = i, u = l);
  var c = n - i / 2, f = a + c, d = s + c, g = u + c;
  return r(f, d, g);
}
var X1 = {
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
function G4(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return X1[t] ? "#" + X1[t] : e;
}
var K4 = /^#[a-fA-F0-9]{6}$/, Y4 = /^#[a-fA-F0-9]{8}$/, X4 = /^#[a-fA-F0-9]{3}$/, Z4 = /^#[a-fA-F0-9]{4}$/, qf = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, J4 = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, eR = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, tR = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function nR(e) {
  if (typeof e != "string")
    throw new wr(3);
  var t = G4(e);
  if (t.match(K4))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Y4)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(X4))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Z4)) {
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
  var i = J4.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = eR.exec(t);
  if (l) {
    var a = parseInt("" + l[1], 10), s = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + Y1(a, s, u) + ")", f = qf.exec(c);
    if (!f)
      throw new wr(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = tR.exec(t.substring(0, 50));
  if (d) {
    var g = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, y = parseInt("" + d[3], 10) / 100, w = "rgb(" + Y1(g, h, y) + ")", p = qf.exec(w);
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
var rR = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Z1 = rR;
function Mo(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function J1(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return Z1("#" + Mo(e) + Mo(t) + Mo(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return Z1("#" + Mo(e.red) + Mo(e.green) + Mo(e.blue));
  throw new wr(6);
}
function oR(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = nR(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? J1(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? J1(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new wr(7);
}
const ey = {
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
}, ty = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, Wm = B4({
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
    space: ey,
    sizes: {
      ...ey,
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
      default: ty([
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
      colors: ty([
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
      backgroundColor: oR(q4("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: qS
}), iR = Wm.styled;
Wm.globalCss;
Wm.getCssText;
var ny = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Jt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, lR = (...e) => [...e].flat().filter(Boolean), GS = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? GS(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, ry = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function aR() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = KS(t)) && (r && (r += " "), r += n);
  return r;
}
function KS(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = KS(e[r])) && (n && (n += " "), n += t);
  return n;
}
function qp() {
  return qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qp.apply(this, arguments);
}
var qm = "-";
function sR(e) {
  var t = cR(e);
  function n(o) {
    var i = o.split(qm);
    return i[0] === "" && i.length !== 1 && i.shift(), YS(i, t) || uR(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function YS(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? YS(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(qm);
    return (n = t.validators.find(function(a) {
      var s = a.validator;
      return s(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var oy = /^\[(.+)\]$/;
function uR(e) {
  if (oy.test(e)) {
    var t = oy.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function cR(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = dR(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], a = i[1];
    Qp(a, r, l, t);
  }), r;
}
function Qp(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : iy(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (fR(o)) {
        Qp(o(r), t, n, r);
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
      Qp(s, iy(t, a), n, r);
    });
  });
}
function iy(e, t) {
  var n = e;
  return t.split(qm).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function fR(e) {
  return e.isThemeGetter;
}
function dR(e, t) {
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
function pR(e) {
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
var XS = "!";
function hR(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, a = 0; a < r.length; a++) {
      var s = r[a];
      o === 0 && s === t[0] && (t.length === 1 || r.slice(a, a + t.length) === t) && (i.push(r.slice(l, a)), l = a + t.length), s === "[" ? o++ : s === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(XS), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function mR(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function gR(e) {
  return qp({
    cache: pR(e.cacheSize),
    splitModifiers: hR(e)
  }, sR(e));
}
var yR = /\s+/;
function vR(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(yR).map(function(l) {
    var a = n(l), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = mR(s).join(":"), g = u ? d + XS : d;
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
function Gp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = gR(d), o = r.cache.get, i = r.cache.set, l = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = vR(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(aR.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ZS = /^\[(?:([a-z-]+):)?(.+)\]$/i, xR = /^\d+\/\d+$/, wR = /* @__PURE__ */ new Set(["px", "full", "screen"]), bR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, SR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, kR = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Zt(e) {
  return Nl(e) || wR.has(e) || xR.test(e) || Yr(e);
}
function Yr(e) {
  return ko(e, "length", PR);
}
function CR(e) {
  return ko(e, "size", JS);
}
function ER(e) {
  return ko(e, "position", JS);
}
function $R(e) {
  return ko(e, "url", _R);
}
function Qf(e) {
  return ko(e, "number", Nl);
}
function Nl(e) {
  return !Number.isNaN(Number(e));
}
function nl(e) {
  return ly(e) || ko(e, "number", ly);
}
function Be(e) {
  return ZS.test(e);
}
function rl() {
  return !0;
}
function sr(e) {
  return bR.test(e);
}
function AR(e) {
  return ko(e, "", RR);
}
function ko(e, t, n) {
  var r = ZS.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function PR(e) {
  return SR.test(e);
}
function JS() {
  return !1;
}
function _R(e) {
  return e.startsWith("url(");
}
function ly(e) {
  return Number.isInteger(Number(e));
}
function RR(e) {
  return kR.test(e);
}
function Kp() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), a = _e("borderWidth"), s = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), g = _e("gradientColorStops"), h = _e("inset"), y = _e("margin"), w = _e("opacity"), p = _e("padding"), v = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), $ = _e("translate"), E = function() {
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
      blur: ["none", "", sr, Yr],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", sr, Yr],
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
        m: [y]
      }],
      mx: [{
        mx: [y]
      }],
      my: [{
        my: [y]
      }],
      mt: [{
        mt: [y]
      }],
      mr: [{
        mr: [y]
      }],
      mb: [{
        mb: [y]
      }],
      ml: [{
        ml: [y]
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
          screen: [sr]
        }, sr, Yr]
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
        text: ["base", sr, Yr]
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
        bg: [].concat(D(), [ER])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", CR]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $R]
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
        shadow: ["", "inner", "none", sr, AR]
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
        contrast: [s]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", sr, Be]
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
        saturate: [v]
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
        "backdrop-saturate": [v]
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
var TR = /* @__PURE__ */ Gp(Kp);
function IR(e, t) {
  for (var n in t)
    ek(e, n, t[n]);
  return e;
}
var OR = Object.prototype.hasOwnProperty, NR = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ek(e, t, n) {
  if (!OR.call(e, t) || NR.has(typeof n) || n === null) {
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
      ek(e[t], r, n[r]);
  }
}
function MR(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Gp.apply(void 0, [Kp, e].concat(n)) : Gp.apply(void 0, [function() {
    return IR(Kp(), e);
  }].concat(n));
}
var Iu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), ol = (...e) => (t = {}) => t.twMerge ? (Jt(t.twMergeConfig) ? TR : MR(t.twMergeConfig))(Iu(e)) : Iu(e), ay = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Iu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, DR = { twMerge: !0, twMergeConfig: {} }, LR = (e, t = DR) => {
  var n, r, o, i, l;
  let { slots: a = {}, variants: s = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Iu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = GS(s, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), g = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = Jt(a) ? {} : { base: e == null ? void 0 : e.base, ...a }, y = Jt((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : ay((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, Jt(h) ? { base: e == null ? void 0 : e.base } : h), w = (v) => {
    var x, b, A;
    if (Jt(d) && Jt(a) && Jt((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return ol(f, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (z, F, _ = [], V) => {
      let M = _;
      if (typeof F == "string")
        M.push(ry(F).split(" ").map((I) => `${z}:${I}`));
      else if (Array.isArray(F))
        M.push(F.flatMap((I) => `${z}:${I}`));
      else if (typeof F == "object" && typeof V == "string") {
        let I = F == null ? void 0 : F[V];
        if (I && typeof I == "string") {
          let N = ry(I);
          M[V] = M[V] ? [...M[V], ...N.split(" ").map((k) => `${z}:${k}`)] : N.split(" ").map((k) => `${z}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (M[V] = I.flatMap((N) => `${z}:${N}`));
      }
      return M;
    }, $ = (z, F = d, _ = null) => {
      let V = F == null ? void 0 : F[z];
      if (typeof V != "object" || Jt(V))
        return null;
      let M = v == null ? void 0 : v[z], I = g == null ? void 0 : g[z], N = [];
      if (M === null)
        return null;
      let k = ny(M);
      typeof k == "object" && (N = Object.keys(k).reduce((J, ne) => {
        let ue = k[ne], ee = V == null ? void 0 : V[ue];
        return ne === "initial" ? (I = ue, J) : S(ne, ee, J, _);
      }, []));
      let C = V[k] || V[ny(I)];
      return typeof N == "object" && typeof _ == "string" && N[_] ? ay(N, C) : N.length > 0 ? [C, ...N] : C;
    }, E = () => d ? Object.keys(d).map((z) => $(z, d)) : null, P = (z) => !d || typeof d != "object" ? null : Object.keys(d).map((F) => {
      let _ = $(F, d, z);
      return z === "base" && typeof _ == "string" ? _ : _ && _[z];
    }).filter(Boolean), R = v && Object.fromEntries(Object.entries(v).filter(([, z]) => z !== void 0)), T = (z = []) => z == null ? void 0 : z.filter(({ class: F, className: _, ...V }) => Object.entries(V).every(([M, I]) => {
      var N;
      let k = typeof (v == null ? void 0 : v[M]) == "object" ? (N = v[M]) == null ? void 0 : N.initial : {}, C = { ...g, ...k, ...R };
      return Array.isArray(I) ? I.includes(C[M]) : C[M] === I;
    })).flatMap(({ class: F, className: _ }) => [F, _]), O = () => {
      var z;
      let F = T(u), _ = T((z = e == null ? void 0 : e.extend) == null ? void 0 : z.compoundVariants);
      return lR(_, F);
    }, D = () => {
      let z = O();
      return Array.isArray(z) ? z.reduce((F, _) => (typeof _ == "string" && (F.base = ol(F.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([V, M]) => {
        F[V] = ol(F[V], M)(t);
      }), F), {}) : z;
    };
    if (!Jt(a) || !Jt((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let z = (A = D()) != null ? A : [];
      return { ...typeof y == "object" && !Jt(y) ? Object.keys(y).reduce((F, _) => (F[_] = (V) => ol(y[_], P(_), z == null ? void 0 : z[_], V == null ? void 0 : V.class, V == null ? void 0 : V.className)(t), F), {}) : {} };
    }
    return ol(f, E(), O(), v == null ? void 0 : v.class, v == null ? void 0 : v.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = y, w.variants = d, w.defaultVariants = g, w.compoundVariants = u, w;
};
const FR = LR({
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
}), zR = iR("div", {
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
}), BR = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, Qm = Ve.forwardRef(({
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
  }, y = "value" in a, w = m.exports.useMemo(() => y ? a.value : d, [y, d, a.value]);
  m.exports.useImperativeHandle(s, () => u.current);
  const p = K_({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: BR
  });
  p4(u, () => f(!1));
  const {
    base: v,
    effect: x,
    input: b
  } = FR({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ pe(zR, {
    style: e,
    className: H1("mayumi-input", v(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ B("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && Ve.createElement(d4.div, {
      className: H1("mayumi-input-effect", x()),
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
Qm.displayName = "input";
function jR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      n.hasOwnProperty(r) && (e[r] = n[r]);
  }
  return e;
}
function Yp(e, t) {
  return Array(t + 1).join(e);
}
function VR(e) {
  return e.replace(/^\n*/, "");
}
function HR(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; )
    t--;
  return e.substring(0, t);
}
var UR = [
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
function Gm(e) {
  return Km(e, UR);
}
var tk = [
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
function nk(e) {
  return Km(e, tk);
}
function WR(e) {
  return ok(e, tk);
}
var rk = [
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
function qR(e) {
  return Km(e, rk);
}
function QR(e) {
  return ok(e, rk);
}
function Km(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function ok(e, t) {
  return e.getElementsByTagName && t.some(function(n) {
    return e.getElementsByTagName(n).length;
  });
}
var at = {};
at.paragraph = {
  filter: "p",
  replacement: function(e) {
    return `

` + e + `

`;
  }
};
at.lineBreak = {
  filter: "br",
  replacement: function(e, t, n) {
    return n.br + `
`;
  }
};
at.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(e, t, n) {
    var r = Number(t.nodeName.charAt(1));
    if (n.headingStyle === "setext" && r < 3) {
      var o = Yp(r === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + o + `

`;
    } else
      return `

` + Yp("#", r) + " " + e + `

`;
  }
};
at.blockquote = {
  filter: "blockquote",
  replacement: function(e) {
    return e = e.replace(/^\n+|\n+$/g, ""), e = e.replace(/^/gm, "> "), `

` + e + `

`;
  }
};
at.list = {
  filter: ["ul", "ol"],
  replacement: function(e, t) {
    var n = t.parentNode;
    return n.nodeName === "LI" && n.lastElementChild === t ? `
` + e : `

` + e + `

`;
  }
};
at.listItem = {
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
at.indentedCodeBlock = {
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
at.fencedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, n) {
    for (var r = t.firstChild.getAttribute("class") || "", o = (r.match(/language-(\S+)/) || [null, ""])[1], i = t.firstChild.textContent, l = n.fence.charAt(0), a = 3, s = new RegExp("^" + l + "{3,}", "gm"), u; u = s.exec(i); )
      u[0].length >= a && (a = u[0].length + 1);
    var c = Yp(l, a);
    return `

` + c + o + `
` + i.replace(/\n$/, "") + `
` + c + `

`;
  }
};
at.horizontalRule = {
  filter: "hr",
  replacement: function(e, t, n) {
    return `

` + n.hr + `

`;
  }
};
at.inlineLink = {
  filter: function(e, t) {
    return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t) {
    var n = t.getAttribute("href"), r = Ou(t.getAttribute("title"));
    return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")";
  }
};
at.referenceLink = {
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
at.emphasis = {
  filter: ["em", "i"],
  replacement: function(e, t, n) {
    return e.trim() ? n.emDelimiter + e + n.emDelimiter : "";
  }
};
at.strong = {
  filter: ["strong", "b"],
  replacement: function(e, t, n) {
    return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : "";
  }
};
at.code = {
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
at.image = {
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
function ik(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules)
    this.array.push(e.rules[t]);
}
ik.prototype = {
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
    if (GR(o, t, n))
      return o;
  }
}
function GR(e, t, n) {
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
function KR(e) {
  var t = e.element, n = e.isBlock, r = e.isVoid, o = e.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!t.firstChild || o(t))) {
    for (var i = null, l = !1, a = null, s = sy(a, t, o); s !== t; ) {
      if (s.nodeType === 3 || s.nodeType === 4) {
        var u = s.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !l && u[0] === " " && (u = u.substr(1)), !u) {
          s = Kf(s);
          continue;
        }
        s.data = u, i = s;
      } else if (s.nodeType === 1)
        n(s) || s.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, l = !1) : r(s) || o(s) ? (i = null, l = !0) : i && (l = !1);
      else {
        s = Kf(s);
        continue;
      }
      var c = sy(a, s, o);
      a = s, s = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || Kf(i));
  }
}
function Kf(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function sy(e, t, n) {
  return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var lk = typeof window < "u" ? window : {};
function YR() {
  var e = lk.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function XR() {
  var e = function() {
  };
  return ZR() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function ZR() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
var JR = YR() ? lk.DOMParser : XR();
function eT(e, t) {
  var n;
  if (typeof e == "string") {
    var r = tT().parseFromString(
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = e.cloneNode(!0);
  return KR({
    element: n,
    isBlock: Gm,
    isVoid: nk,
    isPre: t.preformattedCode ? nT : null
  }), n;
}
var Yf;
function tT() {
  return Yf = Yf || new JR(), Yf;
}
function nT(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function rT(e, t) {
  return e.isBlock = Gm(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = oT(e), e.flankingWhitespace = iT(e, t), e;
}
function oT(e) {
  return !nk(e) && !qR(e) && /^\s*$/i.test(e.textContent) && !WR(e) && !QR(e);
}
function iT(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return { leading: "", trailing: "" };
  var n = lT(e.textContent);
  return n.leadingAscii && uy("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && uy("right", e, t) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function lT(e) {
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
function uy(e, t, n) {
  var r, o, i;
  return e === "left" ? (r = t.previousSibling, o = / $/) : (r = t.nextSibling, o = /^ /), r && (r.nodeType === 3 ? i = o.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? i = !1 : r.nodeType === 1 && !Gm(r) && (i = o.test(r.textContent))), i;
}
var aT = Array.prototype.reduce, sT = [
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
    rules: at,
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
  this.options = jR({}, t, e), this.rules = new ik(this.options);
}
Nu.prototype = {
  turndown: function(e) {
    if (!fT(e))
      throw new TypeError(
        e + " is not a string, or an element/document/fragment node."
      );
    if (e === "")
      return "";
    var t = ak.call(this, new eT(e, this.options));
    return uT.call(this, t);
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
    return sT.reduce(function(t, n) {
      return t.replace(n[0], n[1]);
    }, e);
  }
};
function ak(e) {
  var t = this;
  return aT.call(e.childNodes, function(n, r) {
    r = new rT(r, t.options);
    var o = "";
    return r.nodeType === 3 ? o = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (o = cT.call(t, r)), sk(n, o);
  }, "");
}
function uT(e) {
  var t = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (e = sk(e, n.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function cT(e) {
  var t = this.rules.forNode(e), n = ak.call(this, e), r = e.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function sk(e, t) {
  var n = HR(e), r = VR(t), o = Math.max(e.length - n.length, t.length - r.length), i = `

`.substring(0, o);
  return n + i + r;
}
function fT(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
const cy = (e) => {
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
}, dT = (e) => e ? cy(e) : cy;
var uk = { exports: {} }, ck = {}, fk = { exports: {} }, dk = {};
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
function pT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var hT = typeof Object.is == "function" ? Object.is : pT, mT = Ci.useState, gT = Ci.useEffect, yT = Ci.useLayoutEffect, vT = Ci.useDebugValue;
function xT(e, t) {
  var n = t(), r = mT({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return yT(function() {
    o.value = n, o.getSnapshot = t, Xf(o) && i({ inst: o });
  }, [e, n, t]), gT(function() {
    return Xf(o) && i({ inst: o }), e(function() {
      Xf(o) && i({ inst: o });
    });
  }, [e]), vT(n), n;
}
function Xf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !hT(e, n);
  } catch {
    return !0;
  }
}
function wT(e, t) {
  return t();
}
var bT = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? wT : xT;
dk.useSyncExternalStore = Ci.useSyncExternalStore !== void 0 ? Ci.useSyncExternalStore : bT;
(function(e) {
  e.exports = dk;
})(fk);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = m.exports, ST = fk.exports;
function kT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var CT = typeof Object.is == "function" ? Object.is : kT, ET = ST.useSyncExternalStore, $T = Rc.useRef, AT = Rc.useEffect, PT = Rc.useMemo, _T = Rc.useDebugValue;
ck.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = $T(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = PT(function() {
    function s(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, g))
            return f = h;
        }
        return f = g;
      }
      if (h = f, CT(c, g))
        return h;
      var y = r(g);
      return o !== void 0 && o(h, y) ? h : (c = g, f = y);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, d === null ? void 0 : function() {
      return s(d());
    }];
  }, [t, n, r, o]);
  var a = ET(e, i[0], i[1]);
  return AT(function() {
    l.hasValue = !0, l.value = a;
  }, [a]), _T(a), a;
};
(function(e) {
  e.exports = ck;
})(uk);
const RT = /* @__PURE__ */ wh(uk.exports), { useSyncExternalStoreWithSelector: TT } = RT;
function IT(e, t = e.getState, n) {
  const r = TT(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return m.exports.useDebugValue(r), r;
}
const fy = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? dT(e) : e, n = (r, o) => IT(t, r, o);
  return Object.assign(n, t), n;
}, Ym = (e) => e ? fy(e) : fy;
function Xm(e) {
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
const ya = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return ya(r)(n);
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
        return ya(r)(n);
      }
    };
  }
}, OT = (e, t) => (n, r, o) => {
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
  const c = ya(i.serialize), f = () => {
    const w = i.partialize({ ...r() });
    let p;
    const v = c({ state: w, version: i.version }).then(
      (x) => u.setItem(i.name, x)
    ).catch((x) => {
      p = x;
    });
    if (p)
      throw p;
    return v;
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
  const y = () => {
    var w;
    if (!u)
      return;
    l = !1, a.forEach((v) => v(r()));
    const p = ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, r())) || void 0;
    return ya(u.getItem.bind(u))(i.name).then((v) => {
      if (v)
        return i.deserialize(v);
    }).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              v.state,
              v.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return v.state;
    }).then((v) => {
      var x;
      return h = i.merge(
        v,
        (x = r()) != null ? x : g
      ), n(h, !0), f();
    }).then(() => {
      p == null || p(h, void 0), l = !0, s.forEach((v) => v(h));
    }).catch((v) => {
      p == null || p(void 0, v);
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
    rehydrate: () => y(),
    hasHydrated: () => l,
    onHydrate: (w) => (a.add(w), () => {
      a.delete(w);
    }),
    onFinishHydration: (w) => (s.add(w), () => {
      s.delete(w);
    })
  }, y(), h || g;
}, NT = (e, t) => (n, r, o) => {
  let i = {
    storage: Xm(() => localStorage),
    partialize: (y) => y,
    version: 0,
    merge: (y, w) => ({
      ...w,
      ...y
    }),
    ...t
  }, l = !1;
  const a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return e(
      (...y) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), n(...y);
      },
      r,
      o
    );
  const c = () => {
    const y = i.partialize({ ...r() });
    return u.setItem(i.name, {
      state: y,
      version: i.version
    });
  }, f = o.setState;
  o.setState = (y, w) => {
    f(y, w), c();
  };
  const d = e(
    (...y) => {
      n(...y), c();
    },
    r,
    o
  );
  let g;
  const h = () => {
    var y;
    if (!u)
      return;
    l = !1, a.forEach((p) => p(r()));
    const w = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, r())) || void 0;
    return ya(u.getItem.bind(u))(i.name).then((p) => {
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
      var v;
      return g = i.merge(
        p,
        (v = r()) != null ? v : d
      ), n(g, !0), c();
    }).then(() => {
      w == null || w(g, void 0), l = !0, s.forEach((p) => p(g));
    }).catch((p) => {
      w == null || w(void 0, p);
    });
  };
  return o.persist = {
    setOptions: (y) => {
      i = {
        ...i,
        ...y
      }, y.storage && (u = y.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => h(),
    hasHydrated: () => l,
    onHydrate: (y) => (a.add(y), () => {
      a.delete(y);
    }),
    onFinishHydration: (y) => (s.add(y), () => {
      s.delete(y);
    })
  }, h(), g || d;
}, MT = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), OT(e, t)) : NT(e, t), pk = MT;
function DT(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var i = e[t];
    i && (o[r++] = i);
  }
  return o;
}
const LT = {
  getItem: async (e) => (await it.storage.local.get(e))[e],
  setItem(e, t) {
    return it.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.local.remove(e);
  }
}, FT = {
  getItem: async (e) => (await it.storage.sync.get(e))[e],
  setItem(e, t) {
    return it.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.sync.remove(e);
  }
}, zT = (e, t) => (n, r, o) => {
  const i = (l, a, s) => {
    const u = s === void 0 ? { type: "anonymous" } : typeof s == "string" ? { type: s } : s;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, a), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, Zm = zT, hk = () => ({
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
}), BT = hk(), jT = async (e) => {
  let t = [], n = e;
  const r = 0;
  do {
    if (!n)
      break;
    const o = await BT.get(n);
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
}, va = Ym()(
  Zm(
    pk(
      (e) => ({
        conventions: {},
        upsertConventions: async (t, n) => {
          const r = await jT(n.id);
          return e((o) => ({
            conventions: {
              ...o.conventions,
              [t]: DT(r)
            }
          }), !1, "upsertConventions");
        },
        clear: () => e({ conventions: {} })
      }),
      {
        name: "aiflow-message-store",
        storage: Xm(() => LT)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), Mu = Ym()(
  Zm(
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
), mk = Ym()(
  Zm(
    pk(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: Xm(() => FT) }
    ),
    {
      name: "user-config-store"
    }
  )
), Zf = "ask-chatgpt", ai = "ask-chatgpt-with", ao = "translate-with", si = "summary-with", Xp = "ask-chatgpt-with-page", Du = "config-page", Lu = "translate-with-page", Xr = "home-page", VT = "OPENAI_API_KEY", dy = "options", py = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
function HT(e) {
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
function Zp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function UT(e) {
  const t = e + "CollectionProvider", [n, r] = vo(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (g) => {
    const { scope: h, children: y } = g, w = Ve.useRef(null), p = Ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Ve.createElement(o, {
      scope: h,
      itemMap: p,
      collectionRef: w
    }, y);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ Ve.forwardRef((g, h) => {
    const { scope: y, children: w } = g, p = i(a, y), v = xe(h, p.collectionRef);
    return /* @__PURE__ */ Ve.createElement(bi, {
      ref: v
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ Ve.forwardRef((g, h) => {
    const { scope: y, children: w, ...p } = g, v = Ve.useRef(null), x = xe(h, v), b = i(u, y);
    return Ve.useEffect(() => (b.itemMap.set(v, {
      ref: v,
      ...p
    }), () => void b.itemMap.delete(v))), /* @__PURE__ */ Ve.createElement(bi, {
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
      Slot: s,
      ItemSlot: f
    },
    d,
    r
  ];
}
const WT = /* @__PURE__ */ m.exports.createContext(void 0);
function gk(e) {
  const t = m.exports.useContext(WT);
  return e || t || "ltr";
}
function qT(e) {
  const t = m.exports.useRef({
    value: e,
    previous: e
  });
  return m.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const QT = /* @__PURE__ */ m.exports.forwardRef((e, t) => /* @__PURE__ */ m.exports.createElement(Ue.span, G({}, e, {
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
}))), GT = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], KT = [
  " ",
  "Enter"
], Tc = "Select", [Ic, Oc, YT] = UT(Tc), [Di, zF] = vo(Tc, [
  YT,
  mc
]), Jm = mc(), [XT, Co] = Di(Tc), [ZT, JT] = Di(Tc), eI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: s, dir: u, name: c, autoComplete: f, disabled: d, required: g } = e, h = Jm(t), [y, w] = m.exports.useState(null), [p, v] = m.exports.useState(null), [x, b] = m.exports.useState(!1), A = gk(u), [S = !1, $] = ia({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [E, P] = ia({
    prop: l,
    defaultProp: a,
    onChange: s
  }), R = m.exports.useRef(null), T = y ? Boolean(y.closest("form")) : !0, [O, D] = m.exports.useState(/* @__PURE__ */ new Set()), z = Array.from(O).map(
    (F) => F.props.value
  ).join(";");
  return /* @__PURE__ */ m.exports.createElement(Sb, h, /* @__PURE__ */ m.exports.createElement(XT, {
    required: g,
    scope: t,
    trigger: y,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: v,
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
  }, /* @__PURE__ */ m.exports.createElement(ZT, {
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
  }, n)), T ? /* @__PURE__ */ m.exports.createElement(xk, {
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
}, tI = "SelectTrigger", nI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Jm(n), l = Co(tI, n), a = l.disabled || r, s = xe(t, l.onTriggerChange), u = Oc(n), [c, f, d] = wk((h) => {
    const y = u().filter(
      (v) => !v.disabled
    ), w = y.find(
      (v) => v.value === l.value
    ), p = bk(y, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), g = () => {
    a || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ m.exports.createElement(kb, G({
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
    disabled: a,
    "data-disabled": a ? "" : void 0,
    "data-placeholder": l.value === void 0 ? "" : void 0
  }, o, {
    ref: s,
    onClick: se(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: se(o.onPointerDown, (h) => {
      const y = h.target;
      y.hasPointerCapture(h.pointerId) && y.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (g(), l.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: se(o.onKeyDown, (h) => {
      const y = c.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(y && h.key === " ") && GT.includes(h.key) && (g(), h.preventDefault());
    })
  })));
}), rI = "SelectValue", oI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...a } = e, s = Co(rI, n), { onValueNodeHasChildrenChange: u } = s, c = i !== void 0, f = xe(t, s.onValueNodeChange);
  return Ze(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ m.exports.createElement(Ue.span, G({}, a, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), s.value === void 0 && l !== void 0 ? l : i);
}), iI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ m.exports.createElement(Ue.span, G({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), lI = (e) => /* @__PURE__ */ m.exports.createElement(Eb, G({
  asChild: !0
}, e)), Ei = "SelectContent", aI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Co(Ei, e.__scopeSelect), [r, o] = m.exports.useState();
  if (Ze(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ hn.exports.createPortal(/* @__PURE__ */ m.exports.createElement(yk, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement(Ic.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ m.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ m.exports.createElement(sI, G({}, e, {
    ref: t
  }));
}), Nn = 10, [yk, Eo] = Di(Ei), sI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
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
    hideWhenDetached: y,
    avoidCollisions: w,
    ...p
  } = e, v = Co(Ei, n), [x, b] = m.exports.useState(null), [A, S] = m.exports.useState(null), $ = xe(
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
      (ae) => ae.ref.current
    ), [ce] = we.slice(-1), de = document.activeElement;
    for (const ae of Q)
      if (ae === de || (ae == null || ae.scrollIntoView({
        block: "nearest"
      }), ae === ie && A && (A.scrollTop = 0), ae === ce && A && (A.scrollTop = A.scrollHeight), ae == null || ae.focus(), document.activeElement !== de))
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
  const { onOpenChange: M, triggerPointerDownPosRef: I } = v;
  m.exports.useEffect(() => {
    if (x) {
      let Q = {
        x: 0,
        y: 0
      };
      const ie = (ce) => {
        var de, ae, st, ut;
        Q = {
          x: Math.abs(Math.round(ce.pageX) - ((de = (ae = I.current) === null || ae === void 0 ? void 0 : ae.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ce.pageY) - ((st = (ut = I.current) === null || ut === void 0 ? void 0 : ut.y) !== null && st !== void 0 ? st : 0))
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
  const [N, k] = wk((Q) => {
    const ie = O().filter(
      (de) => !de.disabled
    ), we = ie.find(
      (de) => de.ref.current === document.activeElement
    ), ce = bk(ie, Q, we);
    ce && setTimeout(
      () => ce.ref.current.focus()
    );
  }), C = m.exports.useCallback((Q, ie, we) => {
    const ce = !F.current && !we;
    (v.value !== void 0 && v.value === ie || ce) && (P(Q), ce && (F.current = !0));
  }, [
    v.value
  ]), J = m.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), ne = m.exports.useCallback((Q, ie, we) => {
    const ce = !F.current && !we;
    (v.value !== void 0 && v.value === ie || ce) && T(Q);
  }, [
    v.value
  ]), ue = r === "popper" ? hy : uI, ee = ue === hy ? {
    side: a,
    sideOffset: s,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: g,
    sticky: h,
    hideWhenDetached: y,
    avoidCollisions: w
  } : {};
  return /* @__PURE__ */ m.exports.createElement(yk, {
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
  }, /* @__PURE__ */ m.exports.createElement(zb, {
    as: bi,
    allowPinchZoom: !0
  }, /* @__PURE__ */ m.exports.createElement(wm, {
    asChild: !0,
    trapped: v.open,
    onMountAutoFocus: (Q) => {
      Q.preventDefault();
    },
    onUnmountAutoFocus: se(o, (Q) => {
      var ie;
      (ie = v.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), Q.preventDefault();
    })
  }, /* @__PURE__ */ m.exports.createElement(xm, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (Q) => Q.preventDefault(),
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ m.exports.createElement(ue, G({
    role: "listbox",
    id: v.contentId,
    "data-state": v.open ? "open" : "closed",
    dir: v.dir,
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
    onKeyDown: se(p.onKeyDown, (Q) => {
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
          const de = Q.target, ae = ce.indexOf(de);
          ce = ce.slice(ae + 1);
        }
        setTimeout(
          () => _(ce)
        ), Q.preventDefault();
      }
    })
  }))))));
}), uI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Co(Ei, n), l = Eo(Ei, n), [a, s] = m.exports.useState(null), [u, c] = m.exports.useState(null), f = xe(
    t,
    ($) => c($)
  ), d = Oc(n), g = m.exports.useRef(!1), h = m.exports.useRef(!0), { viewport: y, selectedItem: w, selectedItemText: p, focusSelectedItem: v } = l, x = m.exports.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && y && w && p) {
      const $ = i.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), R = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const de = R.left - E.left, ae = P.left - de, st = $.left - ae, ut = $.width + st, jr = Math.max(ut, E.width), er = window.innerWidth - Nn, tr = Zp(ae, [
          Nn,
          er - jr
        ]);
        a.style.minWidth = ut + "px", a.style.left = tr + "px";
      } else {
        const de = E.right - R.right, ae = window.innerWidth - P.right - de, st = window.innerWidth - $.right - ae, ut = $.width + st, jr = Math.max(ut, E.width), er = window.innerWidth - Nn, tr = Zp(ae, [
          Nn,
          er - jr
        ]);
        a.style.minWidth = ut + "px", a.style.right = tr + "px";
      }
      const T = d(), O = window.innerHeight - Nn * 2, D = y.scrollHeight, z = window.getComputedStyle(u), F = parseInt(z.borderTopWidth, 10), _ = parseInt(z.paddingTop, 10), V = parseInt(z.borderBottomWidth, 10), M = parseInt(z.paddingBottom, 10), I = F + _ + D + M + V, N = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(y), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), ne = $.top + $.height / 2 - Nn, ue = O - ne, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ie = F + _ + Q, we = I - ie;
      if (ie <= ne) {
        const de = w === T[T.length - 1].ref.current;
        a.style.bottom = "0px";
        const ae = u.clientHeight - y.offsetTop - y.offsetHeight, st = Math.max(ue, ee + (de ? J : 0) + ae + V), ut = ie + st;
        a.style.height = ut + "px";
      } else {
        const de = w === T[0].ref.current;
        a.style.top = "0px";
        const st = Math.max(ne, F + y.offsetTop + (de ? C : 0) + ee) + we;
        a.style.height = st + "px", y.scrollTop = ie - ne + y.offsetTop;
      }
      a.style.margin = `${Nn}px 0`, a.style.minHeight = N + "px", a.style.maxHeight = O + "px", r == null || r(), requestAnimationFrame(
        () => g.current = !0
      );
    }
  }, [
    d,
    i.trigger,
    i.valueNode,
    a,
    u,
    y,
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
    $ && h.current === !0 && (x(), v == null || v(), h.current = !1);
  }, [
    x,
    v
  ]);
  return /* @__PURE__ */ m.exports.createElement(cI, {
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
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), hy = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Nn, ...i } = e, l = Jm(n);
  return /* @__PURE__ */ m.exports.createElement(Cb, G({}, l, i, {
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
}), [cI, eg] = Di(Ei, {}), my = "SelectViewport", fI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Eo(my, n), i = eg(my, n), l = xe(t, o.onViewportChange), a = m.exports.useRef(0);
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
    onScroll: se(r.onScroll, (s) => {
      const u = s.currentTarget, { contentWrapper: c, shouldExpandOnScrollRef: f } = i;
      if (f != null && f.current && c) {
        const d = Math.abs(a.current - u.scrollTop);
        if (d > 0) {
          const g = window.innerHeight - Nn * 2, h = parseFloat(c.style.minHeight), y = parseFloat(c.style.height), w = Math.max(h, y);
          if (w < g) {
            const p = w + d, v = Math.min(g, p), x = p - v;
            c.style.height = v + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      a.current = u.scrollTop;
    })
  }))));
}), dI = "SelectGroup";
Di(dI);
const Jp = "SelectItem", [pI, hI] = Di(Jp), mI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, a = Co(Jp, n), s = Eo(Jp, n), u = a.value === r, [c, f] = m.exports.useState(i != null ? i : ""), [d, g] = m.exports.useState(!1), h = xe(t, (p) => {
    var v;
    return (v = s.itemRefCallback) === null || v === void 0 ? void 0 : v.call(s, p, r, o);
  }), y = Bn(), w = () => {
    o || (a.onValueChange(r), a.onOpenChange(!1));
  };
  return /* @__PURE__ */ m.exports.createElement(pI, {
    scope: n,
    value: r,
    disabled: o,
    textId: y,
    isSelected: u,
    onItemTextChange: m.exports.useCallback((p) => {
      f((v) => {
        var x;
        return v || ((x = p == null ? void 0 : p.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ m.exports.createElement(Ic.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: c
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    role: "option",
    "aria-labelledby": y,
    "data-highlighted": d ? "" : void 0,
    "aria-selected": u && d,
    "data-state": u ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, l, {
    ref: h,
    onFocus: se(
      l.onFocus,
      () => g(!0)
    ),
    onBlur: se(
      l.onBlur,
      () => g(!1)
    ),
    onPointerUp: se(l.onPointerUp, w),
    onPointerMove: se(l.onPointerMove, (p) => {
      if (o) {
        var v;
        (v = s.onItemLeave) === null || v === void 0 || v.call(s);
      } else
        p.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: se(l.onPointerLeave, (p) => {
      if (p.currentTarget === document.activeElement) {
        var v;
        (v = s.onItemLeave) === null || v === void 0 || v.call(s);
      }
    }),
    onKeyDown: se(l.onKeyDown, (p) => {
      var v;
      ((v = s.searchRef) === null || v === void 0 ? void 0 : v.current) !== "" && p.key === " " || (KT.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), bs = "SelectItemText", gI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = Co(bs, n), a = Eo(bs, n), s = hI(bs, n), u = JT(bs, n), [c, f] = m.exports.useState(null), d = xe(
    t,
    (p) => f(p),
    s.onItemTextChange,
    (p) => {
      var v;
      return (v = a.itemTextRefCallback) === null || v === void 0 ? void 0 : v.call(a, p, s.value, s.disabled);
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
  ), { onNativeOptionAdd: y, onNativeOptionRemove: w } = u;
  return Ze(() => (y(h), () => w(h)), [
    y,
    w,
    h
  ]), /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement(Ue.span, G({
    id: s.textId
  }, i, {
    ref: d
  })), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ hn.exports.createPortal(i.children, l.valueNode) : null);
}), gy = "SelectScrollUpButton", yI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Eo(gy, e.__scopeSelect), r = eg(gy, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = xe(t, r.onScrollButtonChange);
  return Ze(() => {
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(vk, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop - s.offsetHeight);
    }
  })) : null;
}), yy = "SelectScrollDownButton", vI = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Eo(yy, e.__scopeSelect), r = eg(yy, e.__scopeSelect), [o, i] = m.exports.useState(!1), l = xe(t, r.onScrollButtonChange);
  return Ze(() => {
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
  ]), o ? /* @__PURE__ */ m.exports.createElement(vk, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop + s.offsetHeight);
    }
  })) : null;
}), vk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Eo("SelectScrollButton", n), l = m.exports.useRef(null), a = Oc(n), s = m.exports.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return m.exports.useEffect(() => () => s(), [
    s
  ]), Ze(() => {
    var u;
    const c = a().find(
      (f) => f.ref.current === document.activeElement
    );
    c == null || (u = c.ref.current) === null || u === void 0 || u.scrollIntoView({
      block: "nearest"
    });
  }, [
    a
  ]), /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    "aria-hidden": !0
  }, o, {
    ref: t,
    style: {
      flexShrink: 0,
      ...o.style
    },
    onPointerMove: se(o.onPointerMove, () => {
      var u;
      (u = i.onItemLeave) === null || u === void 0 || u.call(i), l.current === null && (l.current = window.setInterval(r, 50));
    }),
    onPointerLeave: se(o.onPointerLeave, () => {
      s();
    })
  }));
}), xk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = m.exports.useRef(null), i = xe(t, o), l = qT(n);
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
  ]), /* @__PURE__ */ m.exports.createElement(QT, {
    asChild: !0
  }, /* @__PURE__ */ m.exports.createElement("select", G({}, r, {
    ref: i,
    defaultValue: n
  })));
});
xk.displayName = "BubbleSelect";
function wk(e) {
  const t = ze(e), n = m.exports.useRef(""), r = m.exports.useRef(0), o = m.exports.useCallback((l) => {
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
function bk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = xI(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const s = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function xI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const wI = eI, bI = nI, SI = oI, kI = iI, CI = lI, EI = aI, $I = fI, AI = mI, PI = gI, _I = yI, RI = vI;
function Sk(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Sk(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function $i() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Sk(e)) && (r && (r += " "), r += t);
  return r;
}
const TI = {
  int: "Afrikaans",
  native: "Afrikaans"
}, II = {
  int: "Albanian",
  native: "Shqip"
}, OI = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, NI = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, MI = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, DI = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, LI = {
  int: "Basque",
  native: "Euskara"
}, FI = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, zI = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, BI = {
  int: "Bosnian",
  native: "Bosanski"
}, jI = {
  int: "Breton",
  native: "Brezhoneg"
}, VI = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, HI = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, UI = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, WI = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, qI = {
  int: "Danish",
  native: "Dansk"
}, QI = {
  int: "Dutch",
  native: "Nederlands"
}, GI = {
  int: "English",
  native: "English"
}, KI = {
  int: "Esperanto",
  native: "Esperanto"
}, YI = {
  int: "Estonian",
  native: "Eesti"
}, XI = {
  int: "Faroese",
  native: "F\xF8royskt"
}, ZI = {
  int: "Finnish",
  native: "Suomi"
}, JI = {
  int: "French",
  native: "Fran\xE7ais"
}, e6 = {
  int: "Galician",
  native: "Galego"
}, t6 = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, n6 = {
  int: "German",
  native: "Deutsch"
}, r6 = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, o6 = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, i6 = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, l6 = {
  int: "Hausa",
  native: "Hrvatski"
}, a6 = {
  int: "Hausa",
  native: "Hausa"
}, s6 = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, u6 = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, c6 = {
  int: "Hungarian",
  native: "Magyar"
}, f6 = {
  int: "Icelandic",
  native: "\xCDslenska"
}, d6 = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, p6 = {
  int: "Irish",
  native: "Gaeilge"
}, h6 = {
  int: "Italian",
  native: "Italiano"
}, m6 = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, g6 = {
  int: "Javanese",
  native: "Basa Jawa"
}, y6 = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, v6 = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, x6 = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, w6 = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, b6 = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, S6 = {
  int: "Latin",
  native: "lingua latina"
}, k6 = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, C6 = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, E6 = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, $6 = {
  int: "Malagasy",
  native: "Malagasy"
}, A6 = {
  int: "Malay",
  native: "Bahasa Melayu"
}, P6 = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, _6 = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, R6 = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, T6 = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, I6 = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, O6 = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, N6 = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, M6 = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, D6 = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, L6 = {
  int: "Polish",
  native: "Polski"
}, F6 = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, z6 = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, B6 = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, j6 = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, V6 = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, H6 = {
  int: "Sardinian",
  native: "Sardu"
}, U6 = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, W6 = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, q6 = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, Q6 = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, G6 = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, K6 = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, Y6 = {
  int: "Somali",
  native: "Af-Soomaali"
}, X6 = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, Z6 = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, J6 = {
  int: "Swahili",
  native: "Kiswahili"
}, eO = {
  int: "Swedish",
  native: "Svenska"
}, tO = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, nO = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, rO = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, oO = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, iO = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, lO = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, aO = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, sO = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, uO = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, cO = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, fO = {
  int: "Uzbek",
  native: "O'zbek"
}, dO = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, pO = {
  int: "Visayan",
  native: "Bisaya"
}, hO = {
  int: "Welsh",
  native: "Cymraeg"
}, mO = {
  int: "West Frisian",
  native: "Frysk"
}, vy = {
  af: TI,
  sq: II,
  ar: OI,
  hy: NI,
  as: MI,
  az: DI,
  eu: LI,
  be: FI,
  bn: zI,
  bs: BI,
  br: jI,
  bg: VI,
  my: HI,
  ca: UI,
  cs: WI,
  da: qI,
  nl: QI,
  en: GI,
  eo: KI,
  et: YI,
  fo: XI,
  fi: ZI,
  fr: JI,
  gl: e6,
  ka: t6,
  de: n6,
  el: r6,
  gn: o6,
  gu: i6,
  hr: l6,
  ha: a6,
  he: s6,
  hi: u6,
  hu: c6,
  is: f6,
  id: d6,
  ga: p6,
  it: h6,
  ja: m6,
  jv: g6,
  kn: y6,
  kk: v6,
  km: x6,
  ko: w6,
  ku: b6,
  la: S6,
  lv: k6,
  lt: C6,
  mk: E6,
  mg: $6,
  ms: A6,
  ml: P6,
  mr: _6,
  mn: R6,
  ne: T6,
  nb: I6,
  nn: O6,
  or: N6,
  ps: M6,
  fa: D6,
  pl: L6,
  pt: F6,
  pa: z6,
  ro: B6,
  ru: j6,
  rw: V6,
  sc: H6,
  sr: U6,
  sz: W6,
  zh: q6,
  si: Q6,
  sk: G6,
  sl: K6,
  so: Y6,
  cb: X6,
  es: Z6,
  sw: J6,
  sv: eO,
  sy: tO,
  tl: nO,
  tg: rO,
  tz: oO,
  ta: iO,
  te: lO,
  th: aO,
  tr: sO,
  uk: uO,
  ur: cO,
  uz: fO,
  vi: dO,
  cx: pO,
  cy: hO,
  fy: mO
}, kk = Ve.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ B(AI, {
  className: $i("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ B(PI, {
    children: e
  })
}));
kk.displayName = "SelectItem";
const gO = (e) => {
  var n;
  const t = mk();
  return /* @__PURE__ */ pe(wI, {
    value: (n = t[dy]) == null ? void 0 : n[ao].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [dy]: {
          [ao]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ pe(bI, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      tabIndex: 2,
      children: [/* @__PURE__ */ B(SI, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ B(kI, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ B("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ B(CI, {
      container: e.container.current,
      children: /* @__PURE__ */ pe(EI, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ B(_I, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ B($I, {
          className: "p-[5px]",
          children: Object.keys(vy).map((r) => {
            const o = vy[r];
            return /* @__PURE__ */ B(kk, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ B(RI, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
}, yO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), vO = (e) => /* @__PURE__ */ m.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ m.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" }));
function xO(e, t) {
  return m.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Ck = "ScrollArea", [Ek, BF] = vo(Ck), [wO, Pn] = Ek(Ck), bO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [a, s] = m.exports.useState(null), [u, c] = m.exports.useState(null), [f, d] = m.exports.useState(null), [g, h] = m.exports.useState(null), [y, w] = m.exports.useState(null), [p, v] = m.exports.useState(0), [x, b] = m.exports.useState(0), [A, S] = m.exports.useState(!1), [$, E] = m.exports.useState(!1), P = xe(
    t,
    (T) => s(T)
  ), R = gk(o);
  return /* @__PURE__ */ m.exports.createElement(wO, {
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
    scrollbarY: y,
    onScrollbarYChange: w,
    scrollbarYEnabled: $,
    onScrollbarYEnabledChange: E,
    onCornerWidthChange: v,
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
}), SO = "ScrollAreaViewport", kO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = Pn(SO, n), l = m.exports.useRef(null), a = xe(t, l, i.onViewportChange);
  return /* @__PURE__ */ m.exports.createElement(m.exports.Fragment, null, /* @__PURE__ */ m.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ m.exports.createElement(Ue.div, G({
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
}), Zn = "ScrollAreaScrollbar", CO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, a = e.orientation === "horizontal";
  return m.exports.useEffect(() => (a ? i(!0) : l(!0), () => {
    a ? i(!1) : l(!1);
  }), [
    a,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ m.exports.createElement(EO, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ m.exports.createElement($O, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ m.exports.createElement($k, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ m.exports.createElement(tg, G({}, r, {
    ref: t
  })) : null;
}), EO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), [i, l] = m.exports.useState(!1);
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
  ]), /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || i
  }, /* @__PURE__ */ m.exports.createElement($k, G({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), $O = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Zn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = Mc(
    () => s("SCROLL_END"),
    100
  ), [a, s] = xO("hidden", {
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
  ]), /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || a !== "hidden"
  }, /* @__PURE__ */ m.exports.createElement(tg, G({
    "data-state": a === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: se(
      e.onPointerEnter,
      () => s("POINTER_ENTER")
    ),
    onPointerLeave: se(
      e.onPointerLeave,
      () => s("POINTER_LEAVE")
    )
  })));
}), $k = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const n = Pn(Zn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = m.exports.useState(!1), a = e.orientation === "horizontal", s = Mc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(a ? u : c);
    }
  }, 10);
  return zu(n.viewport, s), zu(n.content, s), /* @__PURE__ */ m.exports.createElement(mn, {
    present: r || i
  }, /* @__PURE__ */ m.exports.createElement(tg, G({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), tg = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Pn(Zn, e.__scopeScrollArea), i = m.exports.useRef(null), l = m.exports.useRef(0), [a, s] = m.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = _k(a.viewport, a.content), c = {
    ...r,
    sizes: a,
    onSizesChange: s,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, g) {
    return IO(d, l.current, a, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.exports.createElement(AO, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, g = xy(d, a, o.dir);
        i.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ m.exports.createElement(PO, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, g = xy(d, a);
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
}), AO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Pn(Zn, e.__scopeScrollArea), [l, a] = m.exports.useState(), s = m.exports.useRef(null), u = xe(t, s, i.onScrollbarXChange);
  return m.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(Pk, G({
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
        e.onWheelScroll(d), Tk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: s.current.clientWidth,
          paddingStart: Fu(l.paddingLeft),
          paddingEnd: Fu(l.paddingRight)
        }
      });
    }
  }));
}), PO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Pn(Zn, e.__scopeScrollArea), [l, a] = m.exports.useState(), s = m.exports.useRef(null), u = xe(t, s, i.onScrollbarYChange);
  return m.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ m.exports.createElement(Pk, G({
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
        e.onWheelScroll(d), Tk(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: s.current.clientHeight,
          paddingStart: Fu(l.paddingTop),
          paddingEnd: Fu(l.paddingBottom)
        }
      });
    }
  }));
}), [_O, Ak] = Ek(Zn), Pk = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: a, onThumbPositionChange: s, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, g = Pn(Zn, n), [h, y] = m.exports.useState(null), w = xe(
    t,
    (P) => y(P)
  ), p = m.exports.useRef(null), v = m.exports.useRef(""), x = g.viewport, b = r.content - r.viewport, A = ze(c), S = ze(s), $ = Mc(f, 10);
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
  ]), zu(h, $), zu(g.content, $), /* @__PURE__ */ m.exports.createElement(_O, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: ze(i),
    onThumbPointerUp: ze(l),
    onThumbPositionChange: S,
    onThumbPointerDown: ze(a)
  }, /* @__PURE__ */ m.exports.createElement(Ue.div, G({}, d, {
    ref: w,
    style: {
      position: "absolute",
      ...d.style
    },
    onPointerDown: se(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), p.current = h.getBoundingClientRect(), v.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", E(P));
    }),
    onPointerMove: se(e.onPointerMove, E),
    onPointerUp: se(e.onPointerUp, (P) => {
      const R = P.target;
      R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = v.current, p.current = null;
    })
  })));
}), eh = "ScrollAreaThumb", RO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ak(eh, e.__scopeScrollArea);
  return /* @__PURE__ */ m.exports.createElement(mn, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ m.exports.createElement(TO, G({
    ref: t
  }, r)));
}), TO = /* @__PURE__ */ m.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = Pn(eh, n), l = Ak(eh, n), { onThumbPositionChange: a } = l, s = xe(
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
          const g = OO(f, a);
          u.current = g, a();
        }
      };
      return a(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    a
  ]), /* @__PURE__ */ m.exports.createElement(Ue.div, G({
    "data-state": l.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: s,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: se(e.onPointerDownCapture, (f) => {
      const g = f.target.getBoundingClientRect(), h = f.clientX - g.left, y = f.clientY - g.top;
      l.onThumbPointerDown({
        x: h,
        y
      });
    }),
    onPointerUp: se(e.onPointerUp, l.onThumbPointerUp)
  }));
});
function Fu(e) {
  return e ? parseInt(e, 10) : 0;
}
function _k(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Nc(e) {
  const t = _k(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function IO(e, t, n, r = "ltr") {
  const o = Nc(n), i = o / 2, l = t || i, a = o - l, s = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return Rk([
    s,
    u
  ], f)(e);
}
function xy(e, t, n = "ltr") {
  const r = Nc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, a = i - r, s = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = Zp(e, s);
  return Rk([
    0,
    l
  ], [
    0,
    a
  ])(u);
}
function Rk(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Tk(e, t) {
  return e > 0 && e < t;
}
const OO = (e, t = () => {
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
const NO = bO, MO = kO, wy = CO, by = RO, Sy = (e) => typeof e == "object" && e != null && e.nodeType === 1, ky = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Jf = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return ky(n.overflowY, t) || ky(n.overflowX, t) || ((r) => {
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
}, Ss = (e, t, n, r, o, i, l, a) => i < e && l > t || i > e && l < t ? 0 : i <= e && a <= n || l >= t && a >= n ? i - e - r : l > t && a < n || i < e && a > n ? l - t + o : 0, DO = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, Cy = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: a, inline: s, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (O) => O !== u;
  if (!Sy(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, g = [];
  let h = e;
  for (; Sy(h) && f(h); ) {
    if (h = DO(h), h === d) {
      g.push(h);
      break;
    }
    h != null && h === document.body && Jf(h) && !Jf(document.documentElement) || h != null && Jf(h, c) && g.push(h);
  }
  const y = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: v } = window, { height: x, width: b, top: A, right: S, bottom: $, left: E } = e.getBoundingClientRect();
  let P = a === "start" || a === "nearest" ? A : a === "end" ? $ : A + x / 2, R = s === "center" ? E + b / 2 : s === "end" ? S : E;
  const T = [];
  for (let O = 0; O < g.length; O++) {
    const D = g[O], { height: z, width: F, top: _, right: V, bottom: M, left: I } = D.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && E >= 0 && $ <= w && S <= y && A >= _ && $ <= M && E >= I && S <= V)
      return T;
    const N = getComputedStyle(D), k = parseInt(N.borderLeftWidth, 10), C = parseInt(N.borderTopWidth, 10), J = parseInt(N.borderRightWidth, 10), ne = parseInt(N.borderBottomWidth, 10);
    let ue = 0, ee = 0;
    const Q = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - k - J : 0, ie = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - C - ne : 0, we = "offsetWidth" in D ? D.offsetWidth === 0 ? 0 : F / D.offsetWidth : 0, ce = "offsetHeight" in D ? D.offsetHeight === 0 ? 0 : z / D.offsetHeight : 0;
    if (d === D)
      ue = a === "start" ? P : a === "end" ? P - w : a === "nearest" ? Ss(v, v + w, w, C, ne, v + P, v + P + x, x) : P - w / 2, ee = s === "start" ? R : s === "center" ? R - y / 2 : s === "end" ? R - y : Ss(p, p + y, y, k, J, p + R, p + R + b, b), ue = Math.max(0, ue + v), ee = Math.max(0, ee + p);
    else {
      ue = a === "start" ? P - _ - C : a === "end" ? P - M + ne + ie : a === "nearest" ? Ss(_, M, z, C, ne + ie, P, P + x, x) : P - (_ + z / 2) + ie / 2, ee = s === "start" ? R - I - k : s === "center" ? R - (I + F / 2) + Q / 2 : s === "end" ? R - V + J + Q : Ss(I, V, F, k, J + Q, R, R + b, b);
      const { scrollLeft: de, scrollTop: ae } = D;
      ue = Math.max(0, Math.min(ae + ue / ce, D.scrollHeight - z / ce + ie)), ee = Math.max(0, Math.min(de + ee / we, D.scrollWidth - F / we + Q)), P += ae - ue, R += de - ee;
    }
    T.push({ el: D, top: ue, left: ee });
  }
  return T;
}, LO = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function FO(e, t) {
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
    return t.behavior(Cy(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of Cy(e, LO(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function Ey(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Ik = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, qs = Object.prototype.hasOwnProperty, Ok = Object.prototype.toString, $y = Object.defineProperty, Ay = Object.getOwnPropertyDescriptor, Py = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Ok.call(t) === "[object Array]";
}, _y = function(t) {
  if (!t || Ok.call(t) !== "[object Object]")
    return !1;
  var n = qs.call(t, "constructor"), r = t.constructor && t.constructor.prototype && qs.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || qs.call(t, o);
}, Ry = function(t, n) {
  $y && n.name === "__proto__" ? $y(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Ty = function(t, n) {
  if (n === "__proto__")
    if (qs.call(t, n)) {
      if (Ay)
        return Ay(t, n).value;
    } else
      return;
  return t[n];
}, Iy = function e() {
  var t, n, r, o, i, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Ty(a, n), o = Ty(t, n), a !== o && (c && o && (_y(o) || (i = Py(o))) ? (i ? (i = !1, l = r && Py(r) ? r : []) : l = r && _y(r) ? r : {}, Ry(a, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Ry(a, { name: n, newValue: o }));
  return a;
};
function th(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function zO() {
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
      o = u, c ? BO(c, a)(...u) : l(null, ...u);
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
function BO(e, t) {
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
function Ml(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Oy(e.position) : "start" in e || "end" in e ? Oy(e) : "line" in e || "column" in e ? nh(e) : "";
}
function nh(e) {
  return Ny(e && e.line) + ":" + Ny(e && e.column);
}
function Oy(e) {
  return nh(e && e.start) + "-" + nh(e && e.end);
}
function Ny(e) {
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
const vn = { basename: jO, dirname: VO, extname: HO, join: UO, sep: "/" };
function jO(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ja(e);
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
function VO(e) {
  if (ja(e), e.length === 0)
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
function HO(e) {
  ja(e);
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
function UO(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    ja(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : WO(n);
}
function WO(e) {
  ja(e);
  const t = e.charCodeAt(0) === 47;
  let n = qO(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function qO(e, t) {
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
function ja(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const QO = { cwd: GO };
function GO() {
  return "/";
}
function rh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function KO(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!rh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return YO(e);
}
function YO(e) {
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
class XO {
  constructor(t) {
    let n;
    t ? typeof t == "string" || ZO(t) ? n = { value: t } : rh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = QO.cwd(), this.value, this.stored, this.result, this.map;
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
    rh(t) && (t = KO(t)), nd(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? vn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    My(this.basename, "dirname"), this.path = vn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? vn.basename(this.path) : void 0;
  }
  set basename(t) {
    nd(t, "basename"), td(t, "basename"), this.path = vn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? vn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (td(t, "extname"), My(this.dirname, "extname"), t) {
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
    nd(t, "stem"), td(t, "stem"), this.path = vn.join(this.dirname || "", t + (this.extname || ""));
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
  if (e && e.includes(vn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + vn.sep + "`"
    );
}
function nd(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function My(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function ZO(e) {
  return Ik(e);
}
const JO = Mk().freeze(), Nk = {}.hasOwnProperty;
function Mk() {
  const e = zO(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = a, i.attachers = t, i.use = s, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = g, i.processSync = h, i;
  function i() {
    const y = Mk();
    let w = -1;
    for (; ++w < t.length; )
      y.use(...t[w]);
    return y.data(Iy(!0, {}, n)), y;
  }
  function l(y, w) {
    return typeof y == "string" ? arguments.length === 2 ? (id("data", r), n[y] = w, i) : Nk.call(n, y) && n[y] || null : y ? (id("data", r), n = y, i) : n;
  }
  function a() {
    if (r)
      return i;
    for (; ++o < t.length; ) {
      const [y, ...w] = t[o];
      if (w[0] === !1)
        continue;
      w[0] === !0 && (w[0] = void 0);
      const p = y.call(i, ...w);
      typeof p == "function" && e.use(p);
    }
    return r = !0, o = Number.POSITIVE_INFINITY, i;
  }
  function s(y, ...w) {
    let p;
    if (id("use", r), y != null)
      if (typeof y == "function")
        A(y, ...w);
      else if (typeof y == "object")
        Array.isArray(y) ? b(y) : x(y);
      else
        throw new TypeError("Expected usable value, not `" + y + "`");
    return p && (n.settings = Object.assign(n.settings || {}, p)), i;
    function v(S) {
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
            v(E);
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
      P ? (th(P[1]) && th($) && ($ = Iy(!0, P[1], $)), P[1] = $) : t.push([...arguments]);
    }
  }
  function u(y) {
    i.freeze();
    const w = il(y), p = i.Parser;
    return rd("parse", p), Dy(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(y, w) {
    i.freeze();
    const p = il(w), v = i.Compiler;
    return od("stringify", v), Ly(y), Dy(v, "compile") ? new v(y, p).compile() : v(y, p);
  }
  function f(y, w, p) {
    if (Ly(y), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(v);
    v(null, p);
    function v(x, b) {
      e.run(y, il(w), A);
      function A(S, $, E) {
        $ = $ || y, S ? b(S) : x ? x($) : p(null, $, E);
      }
    }
  }
  function d(y, w) {
    let p, v;
    return i.run(y, w, x), Fy("runSync", "run", v), p;
    function x(b, A) {
      Ey(b), p = A, v = !0;
    }
  }
  function g(y, w) {
    if (i.freeze(), rd("process", i.Parser), od("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(v, x) {
      const b = il(y);
      i.run(i.parse(b), b, (S, $, E) => {
        if (S || !$ || !E)
          A(S);
        else {
          const P = i.stringify($, E);
          P == null || (n7(P) ? E.value = P : E.result = P), A(S, E);
        }
      });
      function A(S, $) {
        S || !$ ? x(S) : v ? v($) : w(null, $);
      }
    }
  }
  function h(y) {
    let w;
    i.freeze(), rd("processSync", i.Parser), od("processSync", i.Compiler);
    const p = il(y);
    return i.process(p, v), Fy("processSync", "process", w), p;
    function v(x) {
      w = !0, Ey(x);
    }
  }
}
function Dy(e, t) {
  return typeof e == "function" && e.prototype && (e7(e.prototype) || t in e.prototype);
}
function e7(e) {
  let t;
  for (t in e)
    if (Nk.call(e, t))
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
function Ly(e) {
  if (!th(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Fy(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function il(e) {
  return t7(e) ? e : new XO(e);
}
function t7(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function n7(e) {
  return typeof e == "string" || Ik(e);
}
const r7 = {};
function o7(e, t) {
  const n = t || r7, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Dk(e, r, o);
}
function Dk(e, t, n) {
  if (i7(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return zy(e.children, t, n);
  }
  return Array.isArray(e) ? zy(e, t, n) : "";
}
function zy(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = Dk(e[o], t, n);
  return r.join("");
}
function i7(e) {
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
const By = {}.hasOwnProperty;
function Lk(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    l7(t, e[n]);
  return t;
}
function l7(e, t) {
  let n;
  for (n in t) {
    const o = (By.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      By.call(o, l) || (o[l] = []);
      const a = i[l];
      a7(
        o[l],
        Array.isArray(a) ? a : a ? [a] : []
      );
    }
  }
}
function a7(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const s7 = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Vt = Br(/[A-Za-z]/), Bu = Br(/\d/), u7 = Br(/[\dA-Fa-f]/), dt = Br(/[\dA-Za-z]/), c7 = Br(/[!-/:-@[-`{-~]/), jy = Br(/[#-'*+\--9=?A-Z^-~]/);
function xa(e) {
  return e !== null && (e < 32 || e === 127);
}
function De(e) {
  return e !== null && (e < 0 || e === 32);
}
function Z(e) {
  return e !== null && e < -2;
}
function ve(e) {
  return e === -2 || e === -1 || e === 32;
}
const Dc = Br(/\s/), Lc = Br(s7);
function Br(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function ye(e, t, n, r) {
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
const f7 = {
  tokenize: d7
};
function d7(e) {
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
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ye(e, t, "linePrefix");
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
    return Z(a) ? (e.consume(a), e.exit("chunkText"), i) : (e.consume(a), l);
  }
}
const p7 = {
  tokenize: h7
}, Vy = {
  tokenize: m7
};
function h7(e) {
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
      t.containerState._closeFlow = void 0, o && v();
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
      Vy,
      c,
      f
    )(x);
  }
  function c(x) {
    return o && v(), p(r), d(x);
  }
  function f(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, h(x);
  }
  function d(x) {
    return t.containerState = {}, e.attempt(
      Vy,
      g,
      h
    )(x);
  }
  function g(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(x);
  }
  function h(x) {
    if (x === null) {
      o && v(), p(0), e.consume(x);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: i,
      _tokenizer: o
    }), y(x);
  }
  function y(x) {
    if (x === null) {
      w(e.exit("chunkFlow"), !0), p(0), e.consume(x);
      return;
    }
    return Z(x) ? (e.consume(x), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(x), y);
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
  function v() {
    o.write([null]), i = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function m7(e, t, n) {
  return ye(
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
const oh = {
  name: "attention",
  tokenize: y7,
  resolveAll: g7
};
function g7(e, t) {
  let n = -1, r, o, i, l, a, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Hy(f, -s), Hy(d, s), l = {
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
            Fc(
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
function y7(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = ju(r);
  let i;
  return l;
  function l(s) {
    return e.enter("attentionSequence"), i = s, a(s);
  }
  function a(s) {
    if (s === i)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = ju(s), f = !c || c === 2 && o || n.includes(s), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(s);
  }
}
function Hy(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const v7 = {
  name: "autolink",
  tokenize: x7
};
function x7(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Vt(h) ? (e.consume(h), l) : jy(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || dt(h) ? a(h) : u(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), s) : (h === 43 || h === 45 || h === 46 || dt(h)) && r++ < 32 ? (e.consume(h), a) : u(h);
  }
  function s(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), g(h)) : h === null || h === 32 || h === 60 || xa(h) ? n(h) : (e.consume(h), s);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : jy(h) ? (e.consume(h), u) : n(h);
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
const Va = {
  tokenize: w7,
  partial: !0
};
function w7(e, t, n) {
  return ye(e, r, "linePrefix");
  function r(o) {
    return o === null || Z(o) ? t(o) : n(o);
  }
}
const Fk = {
  name: "blockQuote",
  tokenize: b7,
  continuation: {
    tokenize: S7
  },
  exit: k7
};
function b7(e, t, n) {
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
function S7(e, t, n) {
  return ye(
    e,
    e.attempt(Fk, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function k7(e) {
  e.exit("blockQuote");
}
const zk = {
  name: "characterEscape",
  tokenize: C7
};
function C7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return c7(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const Uy = document.createElement("i");
function ng(e) {
  const t = "&" + e + ";";
  Uy.innerHTML = t;
  const n = Uy.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const Bk = {
  name: "characterReference",
  tokenize: E7
};
function E7(e, t, n) {
  const r = this;
  let o = 0, i, l;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), s;
  }
  function s(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), i = 31, l = dt, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = u7, c) : (e.enter("characterReferenceValue"), i = 7, l = Bu, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === dt && !ng(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const Wy = {
  name: "codeFenced",
  tokenize: $7,
  concrete: !0
};
function $7(e, t, n) {
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
    return S === u ? (e.consume(S), s++, f) : (e.exit("codeFencedFenceSequence"), s < 3 ? n(S) : ye(e, d, "whitespace")(S));
  }
  function d(S) {
    return S === null || Z(S) ? w(S) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), g(S));
  }
  function g(S) {
    return S === null || De(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ye(e, h, "whitespace")(S)) : S === 96 && S === u ? n(S) : (e.consume(S), g);
  }
  function h(S) {
    return S === null || Z(S) ? w(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(S));
  }
  function y(S) {
    return S === null || Z(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), w(S)) : S === 96 && S === u ? n(S) : (e.consume(S), y);
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
        a ? ye(
          e,
          p,
          "linePrefix",
          a + 1
        ) : p
      ),
      x
    )(S) : (e.enter("codeFlowValue"), v(S));
  }
  function v(S) {
    return S === null || Z(S) ? (e.exit("codeFlowValue"), p(S)) : (e.consume(S), v);
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
    return ye(
      S,
      R,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function R(D) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), T(D);
    }
    function T(D) {
      return D === u ? (S.consume(D), P++, T) : P < s ? E(D) : (S.exit("codeFencedFenceSequence"), ye(S, O, "whitespace")(D));
    }
    function O(D) {
      return D === null || Z(D) ? (S.exit("codeFencedFence"), $(D)) : E(D);
    }
  }
}
const ld = {
  name: "codeIndented",
  tokenize: P7
}, A7 = {
  tokenize: _7,
  partial: !0
};
function P7(e, t, n) {
  const r = this;
  return o;
  function o(u) {
    return e.enter("codeIndented"), ye(e, i, "linePrefix", 4 + 1)(u);
  }
  function i(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? s(u) : Z(u) ? e.attempt(A7, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || Z(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function _7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ye(e, i, "linePrefix", 4 + 1)(l);
  }
  function i(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : Z(l) ? o(l) : n(l);
  }
}
const R7 = {
  name: "codeText",
  tokenize: O7,
  resolve: T7,
  previous: I7
};
function T7(e) {
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
function I7(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function O7(e, t, n) {
  let r = 0, o, i;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), s(f));
  }
  function s(f) {
    return f === null ? n(f) : f === 96 ? (i = e.enter("codeTextSequence"), o = 0, c(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), s) : Z(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || Z(f) ? (e.exit("codeTextData"), s(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), o++, c) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (i.type = "codeTextData", u(f));
  }
}
function jk(e) {
  const t = {};
  let n = -1, r, o, i, l, a, s, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, N7(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), a = e.slice(o, n), a.unshift(r), Rt(e, o, n - o + 1, a));
    }
  }
  return !u;
}
function N7(e, t) {
  const n = e[t][1], r = e[t][2];
  let o = t - 1;
  const i = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, s = [], u = {};
  let c, f, d = -1, g = n, h = 0, y = 0;
  const w = [y];
  for (; g; ) {
    for (; e[++o][1] !== g; )
      ;
    i.push(o), g._tokenizer || (c = r.sliceStream(g), g.next || c.push(null), f && l.defineSkip(g.start), g._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), g._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = g, g = g.next;
  }
  for (g = n; ++d < a.length; )
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (y = d + 1, w.push(y), g._tokenizer = void 0, g.previous = void 0, g = g.next);
  for (l.events = [], g ? (g._tokenizer = void 0, g.previous = void 0) : w.pop(), d = w.length; d--; ) {
    const p = a.slice(w[d], w[d + 1]), v = i.pop();
    s.unshift([v, v + p.length - 1]), Rt(e, v, 2, p);
  }
  for (d = -1; ++d < s.length; )
    u[h + s[d][0]] = h + s[d][1], h += s[d][1] - s[d][0] - 1;
  return u;
}
const M7 = {
  tokenize: F7,
  resolve: L7
}, D7 = {
  tokenize: z7,
  partial: !0
};
function L7(e) {
  return jk(e), e;
}
function F7(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(a);
  }
  function o(a) {
    return a === null ? i(a) : Z(a) ? e.check(
      D7,
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
function z7(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ye(e, i, "linePrefix");
  }
  function i(l) {
    if (l === null || Z(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function Vk(e, t, n, r, o, i, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || xa(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), y(p));
  }
  function d(p) {
    return p === 62 ? (e.enter(i), e.consume(p), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), g(p));
  }
  function g(p) {
    return p === 62 ? (e.exit("chunkString"), e.exit(a), d(p)) : p === null || p === 60 || Z(p) ? n(p) : (e.consume(p), p === 92 ? h : g);
  }
  function h(p) {
    return p === 60 || p === 62 || p === 92 ? (e.consume(p), g) : g(p);
  }
  function y(p) {
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), y) : p === 41 ? c-- ? (e.consume(p), y) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : p === null || De(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : xa(p) ? n(p) : (e.consume(p), p === 92 ? w : y);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), y) : y(p);
  }
}
function Hk(e, t, n, r, o, i) {
  const l = this;
  let a = 0, s;
  return u;
  function u(g) {
    return e.enter(r), e.enter(o), e.consume(g), e.exit(o), e.enter(i), c;
  }
  function c(g) {
    return g === null || g === 91 || g === 93 && !s || g === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs || a > 999 ? n(g) : g === 93 ? (e.exit(i), e.enter(o), e.consume(g), e.exit(o), e.exit(r), t) : Z(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(g));
  }
  function f(g) {
    return g === null || g === 91 || g === 93 || Z(g) || a++ > 999 ? (e.exit("chunkString"), c(g)) : (e.consume(g), s = s || !ve(g), g === 92 ? d : f);
  }
  function d(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), a++, f) : f(g);
  }
}
function Uk(e, t, n, r, o, i) {
  let l;
  return a;
  function a(d) {
    return e.enter(r), e.enter(o), e.consume(d), e.exit(o), l = d === 40 ? 41 : d, s;
  }
  function s(d) {
    return d === l ? (e.enter(o), e.consume(d), e.exit(o), e.exit(r), t) : (e.enter(i), u(d));
  }
  function u(d) {
    return d === l ? (e.exit(i), s(l)) : d === null ? n(d) : Z(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ye(e, u, "linePrefix")) : (e.enter("chunkString", {
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
    return Z(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : ve(o) ? ye(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(o) : t(o);
  }
}
function fn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const B7 = {
  name: "definition",
  tokenize: V7
}, j7 = {
  tokenize: H7,
  partial: !0
};
function V7(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(s) {
    return e.enter("definition"), Hk.call(
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
    return o = fn(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), s === 58 ? (e.enter("definitionMarker"), e.consume(s), e.exit("definitionMarker"), Dl(
      e,
      Vk(
        e,
        e.attempt(
          j7,
          ye(e, a, "whitespace"),
          ye(e, a, "whitespace")
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
    return s === null || Z(s) ? (e.exit("definition"), r.parser.defined.includes(o) || r.parser.defined.push(o), t(s)) : n(s);
  }
}
function H7(e, t, n) {
  return r;
  function r(l) {
    return De(l) ? Dl(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? Uk(
      e,
      ye(e, i, "whitespace"),
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
const U7 = {
  name: "hardBreakEscape",
  tokenize: W7
};
function W7(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return Z(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const q7 = {
  name: "headingAtx",
  tokenize: G7,
  resolve: Q7
};
function Q7(e, t) {
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
function G7(e, t, n) {
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
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || Z(c) ? (e.exit("atxHeading"), t(c)) : ve(c) ? ye(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || De(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const K7 = [
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
], qy = ["pre", "script", "style", "textarea"], Y7 = {
  name: "htmlFlow",
  tokenize: J7,
  resolveTo: Z7,
  concrete: !0
}, X7 = {
  tokenize: e8,
  partial: !0
};
function Z7(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function J7(e, t, n) {
  const r = this;
  let o, i, l, a, s;
  return u;
  function u(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), c;
  }
  function c(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), h) : C === 63 ? (e.consume(C), o = 3, r.interrupt ? t : I) : Vt(C) ? (e.consume(C), l = String.fromCharCode(C), i = !0, y) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", a = 0, g) : Vt(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function g(C) {
    return C === l.charCodeAt(a++) ? (e.consume(C), a === l.length ? r.interrupt ? t : T : g) : n(C);
  }
  function h(C) {
    return Vt(C) ? (e.consume(C), l = String.fromCharCode(C), y) : n(C);
  }
  function y(C) {
    return C === null || C === 47 || C === 62 || De(C) ? C !== 47 && i && qy.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : T(C)) : K7.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : T(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? v(C) : p(C)) : C === 45 || dt(C) ? (e.consume(C), l += String.fromCharCode(C), y) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : T) : n(C);
  }
  function p(C) {
    return ve(C) ? (e.consume(C), p) : P(C);
  }
  function v(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Vt(C) ? (e.consume(C), x) : ve(C) ? (e.consume(C), v) : P(C);
  }
  function x(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || dt(C) ? (e.consume(C), x) : b(C);
  }
  function b(C) {
    return C === 61 ? (e.consume(C), A) : ve(C) ? (e.consume(C), b) : v(C);
  }
  function A(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), s = C, S) : ve(C) ? (e.consume(C), A) : (s = null, $(C));
  }
  function S(C) {
    return C === null || Z(C) ? n(C) : C === s ? (e.consume(C), E) : (e.consume(C), S);
  }
  function $(C) {
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 62 || C === 96 || De(C) ? b(C) : (e.consume(C), $);
  }
  function E(C) {
    return C === 47 || C === 62 || ve(C) ? v(C) : n(C);
  }
  function P(C) {
    return C === 62 ? (e.consume(C), R) : n(C);
  }
  function R(C) {
    return ve(C) ? (e.consume(C), R) : C === null || Z(C) ? T(C) : n(C);
  }
  function T(C) {
    return C === 45 && o === 2 ? (e.consume(C), F) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), N) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), M) : Z(C) && (o === 6 || o === 7) ? e.check(
      X7,
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
    return C === 62 && qy.includes(l.toLowerCase()) ? (e.consume(C), N) : Vt(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), V) : T(C);
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
function e8(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Va, t, n);
  }
}
const t8 = {
  name: "htmlText",
  tokenize: n8
};
function n8(e, t, n) {
  const r = this;
  let o, i, l, a;
  return s;
  function s(k) {
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
    return k === null ? n(k) : k === 45 ? (e.consume(k), y) : Z(k) ? (a = h, M(k)) : (e.consume(k), h);
  }
  function y(k) {
    return k === 45 ? (e.consume(k), N) : h(k);
  }
  function w(k) {
    return k === i.charCodeAt(l++) ? (e.consume(k), l === i.length ? p : w) : n(k);
  }
  function p(k) {
    return k === null ? n(k) : k === 93 ? (e.consume(k), v) : Z(k) ? (a = p, M(k)) : (e.consume(k), p);
  }
  function v(k) {
    return k === 93 ? (e.consume(k), x) : p(k);
  }
  function x(k) {
    return k === 62 ? N(k) : k === 93 ? (e.consume(k), x) : p(k);
  }
  function b(k) {
    return k === null || k === 62 ? N(k) : Z(k) ? (a = b, M(k)) : (e.consume(k), b);
  }
  function A(k) {
    return k === null ? n(k) : k === 63 ? (e.consume(k), S) : Z(k) ? (a = A, M(k)) : (e.consume(k), A);
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
    return Z(k) ? (a = P, M(k)) : ve(k) ? (e.consume(k), P) : N(k);
  }
  function R(k) {
    return k === 45 || dt(k) ? (e.consume(k), R) : k === 47 || k === 62 || De(k) ? T(k) : n(k);
  }
  function T(k) {
    return k === 47 ? (e.consume(k), N) : k === 58 || k === 95 || Vt(k) ? (e.consume(k), O) : Z(k) ? (a = T, M(k)) : ve(k) ? (e.consume(k), T) : N(k);
  }
  function O(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || dt(k) ? (e.consume(k), O) : D(k);
  }
  function D(k) {
    return k === 61 ? (e.consume(k), z) : Z(k) ? (a = D, M(k)) : ve(k) ? (e.consume(k), D) : T(k);
  }
  function z(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, F) : Z(k) ? (a = z, M(k)) : ve(k) ? (e.consume(k), z) : (e.consume(k), o = void 0, V);
  }
  function F(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : Z(k) ? (a = F, M(k)) : (e.consume(k), F);
  }
  function _(k) {
    return k === 62 || k === 47 || De(k) ? T(k) : n(k);
  }
  function V(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || De(k) ? T(k) : (e.consume(k), V);
  }
  function M(k) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), ye(
      e,
      I,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function I(k) {
    return e.enter("htmlTextData"), a(k);
  }
  function N(k) {
    return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
  }
}
const rg = {
  name: "labelEnd",
  tokenize: s8,
  resolveTo: a8,
  resolveAll: l8
}, r8 = {
  tokenize: u8
}, o8 = {
  tokenize: c8
}, i8 = {
  tokenize: f8
};
function l8(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function a8(e, t) {
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
    Fc(
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
function s8(e, t, n) {
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
      fn(
        r.sliceSerialize({
          start: i.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(c);
  }
  function s(c) {
    return c === 40 ? e.attempt(
      r8,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      o8,
      t,
      l ? e.attempt(i8, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function u8(e, t, n) {
  return r;
  function r(s) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(s), e.exit("resourceMarker"), Dl(e, o);
  }
  function o(s) {
    return s === 41 ? a(s) : Vk(
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
    return De(s) ? Dl(e, l)(s) : a(s);
  }
  function l(s) {
    return s === 34 || s === 39 || s === 40 ? Uk(
      e,
      Dl(e, a),
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
function c8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return Hk.call(
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
function f8(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const d8 = {
  name: "labelStartImage",
  tokenize: p8,
  resolveAll: rg.resolveAll
};
function p8(e, t, n) {
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
const h8 = {
  name: "labelStartLink",
  tokenize: m8,
  resolveAll: rg.resolveAll
};
function m8(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const ad = {
  name: "lineEnding",
  tokenize: g8
};
function g8(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
}
const Qs = {
  name: "thematicBreak",
  tokenize: y8
};
function y8(e, t, n) {
  let r = 0, o;
  return i;
  function i(s) {
    return e.enter("thematicBreak"), o = s, l(s);
  }
  function l(s) {
    return s === o ? (e.enter("thematicBreakSequence"), a(s)) : ve(s) ? ye(e, l, "whitespace")(s) : r < 3 || s !== null && !Z(s) ? n(s) : (e.exit("thematicBreak"), t(s));
  }
  function a(s) {
    return s === o ? (e.consume(s), r++, a) : (e.exit("thematicBreakSequence"), l(s));
  }
}
const gt = {
  name: "list",
  tokenize: w8,
  continuation: {
    tokenize: b8
  },
  exit: k8
}, v8 = {
  tokenize: C8,
  partial: !0
}, x8 = {
  tokenize: S8,
  partial: !0
};
function w8(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return a;
  function a(g) {
    const h = r.containerState.type || (g === 42 || g === 43 || g === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || g === r.containerState.marker : Bu(g)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), g === 42 || g === 45 ? e.check(Qs, n, u)(g) : u(g);
      if (!r.interrupt || g === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(g);
    }
    return n(g);
  }
  function s(g) {
    return Bu(g) && ++l < 10 ? (e.consume(g), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? g === r.containerState.marker : g === 41 || g === 46) ? (e.exit("listItemValue"), u(g)) : n(g);
  }
  function u(g) {
    return e.enter("listItemMarker"), e.consume(g), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || g, e.check(
      Va,
      r.interrupt ? n : c,
      e.attempt(
        v8,
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
function b8(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Va, o, i);
  function o(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ye(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function i(a) {
    return r.containerState.furtherBlankLines || !ve(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(x8, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ye(
      e,
      e.attempt(gt, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a);
  }
}
function S8(e, t, n) {
  const r = this;
  return ye(
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
function k8(e) {
  e.exit(this.containerState.type);
}
function C8(e, t, n) {
  const r = this;
  return ye(
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
const Qy = {
  name: "setextUnderline",
  tokenize: $8,
  resolveTo: E8
};
function E8(e, t) {
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
function $8(e, t, n) {
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
    return c === i ? (e.consume(c), s) : (e.exit("setextHeadingLineSequence"), ye(e, u, "lineSuffix")(c));
  }
  function u(c) {
    return c === null || Z(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const A8 = {
  tokenize: P8
};
function P8(e) {
  const t = this, n = e.attempt(
    Va,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ye(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(M7, o)
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
const _8 = {
  resolveAll: qk()
}, R8 = Wk("string"), T8 = Wk("text");
function Wk(e) {
  return {
    tokenize: t,
    resolveAll: qk(
      e === "text" ? I8 : void 0
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
function qk(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function I8(e, t) {
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
function O8(e, t, n) {
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
    consume: v,
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
    defineSkip: y,
    write: f
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && i.push(t), u;
  function f(T) {
    return l = zt(l, T), w(), l[l.length - 1] !== null ? [] : (E(t, 0), u.events = Fc(i, u.events, u), u.events);
  }
  function d(T, O) {
    return M8(g(T), O);
  }
  function g(T) {
    return N8(l, T);
  }
  function h() {
    return Object.assign({}, r);
  }
  function y(T) {
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
  function v(T) {
    Z(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, R()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
  }
  function x(T, O) {
    const D = O || {};
    return D.type = T, D.start = h(), u.events.push(["enter", D, u]), a.push(D), D;
  }
  function b(T) {
    const O = a.pop();
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
            s,
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
    const T = h(), O = u.previous, D = u.currentConstruct, z = u.events.length, F = Array.from(a);
    return {
      restore: _,
      from: z
    };
    function _() {
      r = T, u.previous = O, u.currentConstruct = D, u.events.length = z, a = F, R();
    }
  }
  function R() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function N8(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function M8(e, t) {
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
const D8 = {
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
  [62]: Fk
}, L8 = {
  [91]: B7
}, F8 = {
  [-2]: ld,
  [-1]: ld,
  [32]: ld
}, z8 = {
  [35]: q7,
  [42]: Qs,
  [45]: [Qy, Qs],
  [60]: Y7,
  [61]: Qy,
  [95]: Qs,
  [96]: Wy,
  [126]: Wy
}, B8 = {
  [38]: Bk,
  [92]: zk
}, j8 = {
  [-5]: ad,
  [-4]: ad,
  [-3]: ad,
  [33]: d8,
  [38]: Bk,
  [42]: oh,
  [60]: [v7, t8],
  [91]: h8,
  [92]: [U7, zk],
  [93]: rg,
  [95]: oh,
  [96]: R7
}, V8 = {
  null: [oh, _8]
}, H8 = {
  null: [42, 95]
}, U8 = {
  null: []
}, W8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: D8,
  contentInitial: L8,
  flowInitial: F8,
  flow: z8,
  string: B8,
  text: j8,
  insideSpan: V8,
  attentionMarkers: H8,
  disable: U8
}, Symbol.toStringTag, { value: "Module" }));
function q8(e = {}) {
  const t = Lk(
    [W8].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(f7),
    document: r(p7),
    flow: r(A8),
    string: r(R8),
    text: r(T8)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return O8(n, o, l);
    }
  }
}
const Gy = /[\0\t\n\r]/g;
function Q8() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, a) {
    const s = [];
    let u, c, f, d, g;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (Gy.lastIndex = f, u = Gy.exec(i), d = u && u.index !== void 0 ? u.index : i.length, g = i.charCodeAt(d), !u) {
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
function G8(e) {
  for (; !jk(e); )
    ;
  return e;
}
function Qk(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const K8 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Gk(e) {
  return e.replace(K8, Y8);
}
function Y8(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return Qk(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return ng(n) || e;
}
const Kk = {}.hasOwnProperty, X8 = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Z8(n)(
    G8(
      q8(n).document().write(Q8()(e, t, !0))
    )
  );
};
function Z8(e) {
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
      codeFenced: a(ae),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(ae, s),
      codeText: a(st, s),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(ut),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(jr),
      hardBreakEscape: a(tr),
      hardBreakTrailing: a(tr),
      htmlFlow: a(Qa, s),
      htmlFlowData: T,
      htmlText: a(Qa, s),
      htmlTextData: T,
      image: a(nr),
      label: s,
      link: a(rr),
      listItem: a(or),
      listItemValue: h,
      listOrdered: a(Bi, g),
      listUnordered: a(Bi),
      paragraph: a(Kc),
      reference: ue,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(er),
      strong: a(Yc),
      thematicBreak: a(y2)
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
      codeFenced: c(v),
      codeFencedFence: p,
      codeFencedFenceInfo: y,
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
  Yk(t, (e || {}).mdastExtensions || []);
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
      Kk.call(Yt, L[Ce][1].type) && Yt[L[Ce][1].type].call(
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
      (Yt[1] || Ky).call(te, void 0, Yt[0]);
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
  function a(L, q) {
    return te;
    function te(Se) {
      u.call(this, L(Se), Se), q && q.call(this, Se);
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
    const te = this.stack.pop(), Se = this.tokenStack.pop();
    if (Se)
      Se[0].type !== L.type && (q ? q.call(this, L, Se[0]) : (Se[1] || Ky).call(this, L, Se[0]));
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
    return o7(this.stack.pop());
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
  function y() {
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
  function v() {
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
    (!te || te.type !== "text") && (te = g2(), te.position = {
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
    te.label = Gk(q), te.identifier = fn(q).toLowerCase();
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
    te ? (Se = Qk(
      q,
      te === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : Se = ng(q);
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
  function ae() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function st() {
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
  function Qa() {
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
  function g2() {
    return {
      type: "text",
      value: ""
    };
  }
  function y2() {
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
function Yk(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Yk(e, r) : J8(e, r);
  }
}
function J8(e, t) {
  let n;
  for (n in t)
    if (Kk.call(t, n)) {
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
function Ky(e, t) {
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
function eN(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return X8(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
var Xk = { exports: {} };
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
      for (var l = 1, a = [].slice.call(arguments), s = 0, u = i.length, c = "", f, d = !1, g, h, y = !1, w, p = function() {
        return a[l++];
      }, v = function() {
        for (var x = ""; /\d/.test(i[s]); )
          x += i[s++], f = i[s];
        return x.length > 0 ? parseInt(x) : null;
      }; s < u; ++s)
        if (f = i[s], d)
          switch (d = !1, f == "." ? (y = !1, f = i[++s]) : f == "0" && i[s + 1] == "." ? (y = !0, s += 2, f = i[s]) : y = !0, w = v(), f) {
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
              h = String(parseFloat(p()).toFixed(w || 6)), c += y ? h : h.replace(/^0/, "");
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
})(Xk);
const tN = Xk.exports, ks = Object.assign(Vr(Error), {
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
    const o = n && tN(n, ...r);
    return new e(o);
  }
}
const Cs = {}.hasOwnProperty, Yy = {
  yaml: "-",
  toml: "+"
};
function og(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = nN(r[n]);
  return t;
}
function nN(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Cs.call(Yy, t))
      throw ks("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: Yy[t]
    };
  } else if (typeof t != "object")
    throw ks("Expected matter to be an object, not `%j`", t);
  if (!Cs.call(t, "type"))
    throw ks("Missing `type` in matter `%j`", t);
  if (!Cs.call(t, "fence") && !Cs.call(t, "marker"))
    throw ks("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function rN(e) {
  const t = og(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = ih(o, "open").charCodeAt(0), l = oN(o), a = n[i];
    Array.isArray(a) ? a.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function oN(e) {
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
    return y;
    function y($) {
      const E = h.now();
      return E.column === 1 && (E.line === 1 || t) && (a = ih(e, "open"), s = 0, $ === a.charCodeAt(s)) ? (f.enter(n), f.enter(r), f.enter(o), w($)) : g($);
    }
    function w($) {
      return s === a.length ? (f.exit(o), ve($) ? (f.enter("whitespace"), p($)) : v($)) : $ === a.charCodeAt(s++) ? (f.consume($), w) : g($);
    }
    function p($) {
      return ve($) ? (f.consume($), p) : (f.exit("whitespace"), v($));
    }
    function v($) {
      return Z($) ? (f.exit(r), f.enter("lineEnding"), f.consume($), f.exit("lineEnding"), a = ih(e, "close"), s = 0, f.attempt(l, S, x)) : g($);
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
    return y;
    function y(x) {
      return x === a.charCodeAt(h) ? (f.enter(r), f.enter(o), w(x)) : g(x);
    }
    function w(x) {
      return h === a.length ? (f.exit(o), ve(x) ? (f.enter("whitespace"), p(x)) : v(x)) : x === a.charCodeAt(h++) ? (f.consume(x), w) : g(x);
    }
    function p(x) {
      return ve(x) ? (f.consume(x), p) : (f.exit("whitespace"), v(x));
    }
    function v(x) {
      return x === null || Z(x) ? (f.exit(r), d(x)) : g(x);
    }
  }
}
function ih(e, t) {
  return e.marker ? Xy(e.marker, t).repeat(3) : Xy(e.fence, t);
}
function Xy(e, t) {
  return typeof e == "string" ? e : e[t];
}
function iN(e) {
  const t = og(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = lN(i), r[i.type] = aN, r[i.type + "Value"] = sN;
  }
  return { enter: n, exit: r };
}
function lN(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function aN(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function sN(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function uN(e) {
  const t = [], n = {}, r = og(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = cN(i), t.push({ atBreak: !0, character: lh(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function cN(e) {
  const t = lh(e, "open"), n = lh(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function lh(e, t) {
  return e.marker ? Zy(e.marker, t).repeat(3) : Zy(e.fence, t);
}
function Zy(e, t) {
  return typeof e == "string" ? e : e[t];
}
function fN(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", rN(e)), n("fromMarkdownExtensions", iN(e)), n("toMarkdownExtensions", uN(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const dN = {
  tokenize: yN,
  partial: !0
}, Zk = {
  tokenize: vN,
  partial: !0
}, Jk = {
  tokenize: xN,
  partial: !0
}, ui = {
  tokenize: bN,
  partial: !0
}, eC = {
  tokenize: wN,
  partial: !0
}, tC = {
  tokenize: mN,
  previous: oC
}, nC = {
  tokenize: gN,
  previous: lg
}, Jn = {
  tokenize: hN,
  previous: iC
}, _n = {}, pN = {
  text: _n
};
let Hr = 48;
for (; Hr < 123; )
  _n[Hr] = Jn, Hr++, Hr === 58 ? Hr = 65 : Hr === 91 && (Hr = 97);
_n[43] = Jn;
_n[45] = Jn;
_n[46] = Jn;
_n[95] = Jn;
_n[72] = [Jn, nC];
_n[104] = [Jn, nC];
_n[87] = [Jn, tC];
_n[119] = [Jn, tC];
function hN(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(g) {
    return !Jy(g) || !iC(r.previous) || ag(r.events) ? n(g) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(g));
  }
  function a(g) {
    return Jy(g) ? (e.consume(g), a) : g === 64 ? (e.consume(g), s) : n(g);
  }
  function s(g) {
    return g === 46 ? e.check(ui, d, u)(g) : g === 45 || g === 95 ? e.check(ui, n, c)(g) : dt(g) ? (!i && Bu(g) && (i = !0), e.consume(g), s) : d(g);
  }
  function u(g) {
    return e.consume(g), o = !0, i = void 0, s;
  }
  function c(g) {
    return e.consume(g), f;
  }
  function f(g) {
    return g === 46 ? e.check(ui, n, u)(g) : s(g);
  }
  function d(g) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(g)) : n(g);
  }
}
function mN(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !oC(r.previous) || ag(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      dN,
      e.attempt(Zk, e.attempt(Jk, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function gN(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !lg(r.previous) || ag(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
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
    return h === null || xa(h) || Dc(h) || Lc(h) ? n(h) : e.attempt(Zk, e.attempt(Jk, g), n)(h);
  }
  function g(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function yN(e, t, n) {
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
    return s === null || Z(s) ? n(s) : t(s);
  }
}
function vN(e, t, n) {
  let r, o;
  return i;
  function i(s) {
    return s === 38 ? e.check(
      eC,
      a,
      l
    )(s) : s === 46 || s === 95 ? e.check(ui, a, l)(s) : s === null || xa(s) || Dc(s) || s !== 45 && Lc(s) ? a(s) : (e.consume(s), i);
  }
  function l(s) {
    return s === 46 ? (o = r, r = void 0, e.consume(s), i) : (s === 95 && (r = !0), e.consume(s), i);
  }
  function a(s) {
    return !o && !r ? t(s) : n(s);
  }
}
function xN(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      eC,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      ui,
      i,
      o
    )(l) : ig(l) ? t(l) : rC(l) ? e.check(ui, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function wN(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Vt(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return ig(l) ? t(l) : n(l);
  }
}
function bN(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return rC(i) ? (e.consume(i), o) : ig(i) ? t(i) : n(i);
  }
}
function rC(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function ig(e) {
  return e === null || e === 60 || De(e);
}
function Jy(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || dt(e);
}
function oC(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || De(e);
}
function lg(e) {
  return e === null || !Vt(e);
}
function iC(e) {
  return e !== 47 && lg(e);
}
function ag(e) {
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
      const a = e.charCodeAt(n + 1);
      i < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(i, a), o = 1) : l = "\uFFFD";
    } else
      l = String.fromCharCode(i);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + o + 1, l = ""), o && (n += o, o = 0);
  }
  return t.join("") + e.slice(r);
}
const SN = {
  tokenize: RN,
  partial: !0
};
function kN() {
  return {
    document: {
      [91]: {
        tokenize: AN,
        continuation: {
          tokenize: PN
        },
        exit: _N
      }
    },
    text: {
      [91]: {
        tokenize: $N
      },
      [93]: {
        add: "after",
        tokenize: CN,
        resolveTo: EN
      }
    }
  };
}
function CN(e, t, n) {
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
    const u = fn(
      r.sliceSerialize({
        start: l.end,
        end: r.now()
      })
    );
    return u.codePointAt(0) !== 94 || !i.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function EN(e, t) {
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
function $N(e, t, n) {
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
      return o.includes(fn(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return De(f) || (l = !0), i++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, u) : u(f);
  }
}
function AN(e, t, n) {
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
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return i = fn(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return De(h) || (a = !0), l++, e.consume(h), h === 92 ? f : c;
  }
  function f(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, c) : c(h);
  }
  function d(h) {
    return h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), o.includes(i) || o.push(i), ye(
      e,
      g,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(h);
  }
  function g(h) {
    return t(h);
  }
}
function PN(e, t, n) {
  return e.check(Va, t, e.attempt(SN, t, n));
}
function _N(e) {
  e.exit("gfmFootnoteDefinition");
}
function RN(e, t, n) {
  const r = this;
  return ye(
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
function TN(e) {
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
              Fc(g, l.slice(u + 1, s), a)
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
      const y = ju(u);
      if (h === 126)
        return f > 1 ? s(h) : (l.consume(h), f++, g);
      if (f < 2 && !n)
        return s(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = ju(h);
      return w._open = !p || p === 2 && Boolean(y), w._close = !y || y === 2 && Boolean(p), a(h);
    }
  }
}
const IN = {
  flow: {
    null: {
      tokenize: NN,
      resolve: ON
    }
  }
}, ev = {
  tokenize: MN,
  partial: !0
};
function ON(e, t) {
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
function NN(e, t, n) {
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
    return _ === null || Z(_) ? h(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), f) : (l && (l = void 0, i++), _ === 124 ? u(_) : (e.enter("temporaryTableCellContent"), d(_)));
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
        return r.interrupt = V, e.enter("tableDelimiterRow"), y(M);
      },
      function(M) {
        return r.interrupt = V, n(M);
      }
    )(_);
  }
  function y(_) {
    return _ === null || Z(_) ? b(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), a = !0, o.push("none"), p) : _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o.push("left"), v) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), y) : n(_);
  }
  function w(_) {
    return ve(_) ? (e.consume(_), w) : (e.exit("whitespace"), y(_));
  }
  function p(_) {
    return _ === 45 ? (e.consume(_), p) : (e.exit("tableDelimiterFiller"), _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : y(_));
  }
  function v(_) {
    return _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), a = !0, p) : n(_);
  }
  function x(_) {
    return _ === null || Z(_) ? b(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), y) : n(_);
  }
  function b(_) {
    return e.exit("tableDelimiterRow"), !a || i !== o.length ? n(_) : _ === null ? A(_) : e.check(
      ev,
      A,
      e.attempt(
        {
          tokenize: F,
          partial: !0
        },
        ye(e, S, "linePrefix", 4),
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
    return _ === null || Z(_) ? D(_) : ve(_) ? (e.enter("whitespace"), e.consume(_), R) : _ === 124 ? E(_) : (e.enter("temporaryTableCellContent"), T(_));
  }
  function R(_) {
    return ve(_) ? (e.consume(_), R) : (e.exit("whitespace"), P(_));
  }
  function T(_) {
    return _ === null || _ === 124 || De(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? O : T);
  }
  function O(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), T) : T(_);
  }
  function D(_) {
    return e.exit("tableRow"), _ === null ? z(_) : e.check(
      ev,
      z,
      e.attempt(
        {
          tokenize: F,
          partial: !0
        },
        ye(e, $, "linePrefix", 4),
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
      return _.enter("lineEnding"), _.consume(k), _.exit("lineEnding"), ye(_, N, "linePrefix");
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
function MN(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || De(l) ? t(l) : n(l);
  }
}
const DN = {
  tokenize: FN
}, LN = {
  text: {
    [91]: DN
  }
};
function FN(e, t, n) {
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
    return Z(s) ? t(s) : ve(s) ? e.check(
      {
        tokenize: zN
      },
      t,
      n
    )(s) : n(s);
  }
}
function zN(e, t, n) {
  return ye(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function BN(e) {
  return Lk([
    pN,
    kN(),
    TN(e),
    IN,
    LN
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
function jN(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const sg = function(e) {
  if (e == null)
    return WN;
  if (typeof e == "string")
    return UN(e);
  if (typeof e == "object")
    return Array.isArray(e) ? VN(e) : HN(e);
  if (typeof e == "function")
    return zc(e);
  throw new Error("Expected function, string, or object as test");
};
function VN(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = sg(e[n]);
  return zc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function HN(e) {
  return zc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function UN(e) {
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
function WN() {
  return !0;
}
const qN = !0, tv = !1, QN = "skip", lC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = sg(t), i = r ? -1 : 1;
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
      let d = [], g, h, y;
      if ((!t || o(a, s, u[u.length - 1] || null)) && (d = GN(n(a, u)), d[0] === tv))
        return d;
      if (a.children && d[0] !== QN)
        for (h = (r ? a.children.length : -1) + i, y = u.concat(a); h > -1 && h < a.children.length; ) {
          if (g = l(a.children[h], h, y)(), g[0] === tv)
            return g;
          h = typeof g[1] == "number" ? g[1] : h + i;
        }
      return d;
    }
  }
};
function GN(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [qN, e] : [e];
}
const KN = {}.hasOwnProperty, YN = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = sg(o.ignore || []), a = XN(i);
  let s = -1;
  for (; ++s < a.length; )
    lC(e, "text", u);
  return e;
  function u(f, d) {
    let g = -1, h;
    for (; ++g < d.length; ) {
      const y = d[g];
      if (l(
        y,
        h ? h.children.indexOf(y) : void 0,
        h
      ))
        return;
      h = y;
    }
    if (h)
      return c(f, d);
  }
  function c(f, d) {
    const g = d[d.length - 1], h = a[s][0], y = a[s][1];
    let w = 0;
    const p = g.children.indexOf(f);
    let v = !1, x = [];
    h.lastIndex = 0;
    let b = h.exec(f.value);
    for (; b; ) {
      const A = b.index, S = {
        index: b.index,
        input: b.input,
        stack: [...d, f]
      };
      let $ = y(...b, S);
      if (typeof $ == "string" && ($ = $.length > 0 ? { type: "text", value: $ } : void 0), $ !== !1 && (w !== A && x.push({
        type: "text",
        value: f.value.slice(w, A)
      }), Array.isArray($) ? x.push(...$) : $ && x.push($), w = A + b[0].length, v = !0), !h.global)
        break;
      b = h.exec(f.value);
    }
    return v ? (w < f.value.length && x.push({ type: "text", value: f.value.slice(w) }), g.children.splice(p, 1, ...x)) : x = [f], p + x.length;
  }
};
function XN(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        nv(e[n][0]),
        rv(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      KN.call(e, n) && t.push([nv(n), rv(e[n])]);
  }
  return t;
}
function nv(e) {
  return typeof e == "string" ? new RegExp(jN(e), "g") : e;
}
function rv(e) {
  return typeof e == "function" ? e : () => e;
}
const sd = "phrasing", ud = ["autolink", "link", "image", "label"], ZN = {
  transforms: [iM],
  enter: {
    literalAutolink: eM,
    literalAutolinkEmail: cd,
    literalAutolinkHttp: cd,
    literalAutolinkWww: cd
  },
  exit: {
    literalAutolink: oM,
    literalAutolinkEmail: rM,
    literalAutolinkHttp: tM,
    literalAutolinkWww: nM
  }
}, JN = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: sd,
      notInConstruct: ud
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: sd,
      notInConstruct: ud
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: sd, notInConstruct: ud }
  ]
};
function eM(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function cd(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function tM(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function nM(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function rM(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function oM(e) {
  this.exit(e);
}
function iM(e) {
  YN(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, lM],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, aM]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function lM(e, t, n, r, o) {
  let i = "";
  if (!aC(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !sM(n)))
    return !1;
  const l = uM(n + r);
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
function aM(e, t, n, r) {
  return !aC(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function sM(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function uM(e) {
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
function aC(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Dc(n) || Lc(n)) && (!t || n !== 47);
}
function sC(e) {
  return e.label || !e.identifier ? e.label || "" : Gk(e.identifier);
}
function cM(e, t, n) {
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
      i.move(fM(s, o[a + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function fM(e, t, n, r) {
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
const dM = /\r?\n|\r/g;
function pM(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = dM.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(a) {
    n.push(t(a, o, !a));
  }
}
function uC(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function hM(e, t) {
  return ov(e, t.inConstruct, !0) && !ov(e, t.notInConstruct, !1);
}
function ov(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function cC(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let a = -1;
  for (; ++a < e.unsafe.length; ) {
    const c = e.unsafe[a];
    if (!hM(e.stack, c))
      continue;
    const f = uC(c);
    let d;
    for (; d = f.exec(r); ) {
      const g = "before" in c || Boolean(c.atBreak), h = "after" in c, y = d.index + (g ? d[1].length : 0);
      o.includes(y) ? (l[y].before && !g && (l[y].before = !1), l[y].after && !h && (l[y].after = !1)) : (o.push(y), l[y] = { before: g, after: h });
    }
  }
  o.sort(mM);
  let s = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (a = -1; ++a < o.length; ) {
    const c = o[a];
    c < s || c >= u || c + 1 < u && o[a + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[a - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (s !== c && i.push(iv(r.slice(s, c), "\\")), s = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), s++));
  }
  return i.push(iv(r.slice(s, u), n.after)), i.join("");
}
function mM(e, t) {
  return e - t;
}
function iv(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, a = 0, s;
  for (; s = n.exec(i); )
    r.push(s.index);
  for (; ++l < r.length; )
    a !== r[l] && o.push(e.slice(a, r[l])), o.push("\\"), a = r[l];
  return o.push(e.slice(a)), o.join("");
}
function Bc(e) {
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
fC.peek = $M;
function gM() {
  return {
    enter: {
      gfmFootnoteDefinition: vM,
      gfmFootnoteDefinitionLabelString: xM,
      gfmFootnoteCall: SM,
      gfmFootnoteCallString: kM
    },
    exit: {
      gfmFootnoteDefinition: bM,
      gfmFootnoteDefinitionLabelString: wM,
      gfmFootnoteCall: EM,
      gfmFootnoteCallString: CM
    }
  };
}
function yM() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: AM, footnoteReference: fC }
  };
}
function vM(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function xM() {
  this.buffer();
}
function wM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function bM(e) {
  this.exit(e);
}
function SM(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function kM() {
  this.buffer();
}
function CM(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function EM(e) {
  this.exit(e);
}
function fC(e, t, n, r) {
  const o = Bc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return i += o.move(
    cC(n, sC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), l(), i += o.move("]"), i;
}
function $M() {
  return "[";
}
function AM(e, t, n, r) {
  const o = Bc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), a = n.enter("label");
  return i += o.move(
    cC(n, sC(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    pM(cM(e, n, o.current()), PM)
  ), l(), i;
}
function PM(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function dC(e, t, n) {
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
const _M = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
pC.peek = NM;
const RM = {
  canContainEols: ["delete"],
  enter: { strikethrough: IM },
  exit: { strikethrough: OM }
}, TM = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: _M
    }
  ],
  handlers: { delete: pC }
};
function IM(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function OM(e) {
  this.exit(e);
}
function pC(e, t, n, r) {
  const o = Bc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += dC(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function NM() {
  return "~";
}
hC.peek = MM;
function hC(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], a = uC(l);
    let s;
    if (!!l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return o + r + o;
}
function MM() {
  return "`";
}
function DM(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || FM, o = [], i = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], y = [];
    let w = -1;
    for (e[u].length > s && (s = e[u].length); ++w < e[u].length; ) {
      const p = LM(e[u][w]);
      if (t.alignDelimiters !== !1) {
        const v = r(p);
        y[w] = v, (a[w] === void 0 || v > a[w]) && (a[w] = v);
      }
      h.push(p);
    }
    i[u] = h, l[u] = y;
  }
  let c = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++c < s; )
      o[c] = lv(n[c]);
  else {
    const h = lv(n);
    for (; ++c < s; )
      o[c] = h;
  }
  c = -1;
  const f = [], d = [];
  for (; ++c < s; ) {
    const h = o[c];
    let y = "", w = "";
    h === 99 ? (y = ":", w = ":") : h === 108 ? y = ":" : h === 114 && (w = ":");
    let p = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - y.length - w.length
    );
    const v = y + "-".repeat(p) + w;
    t.alignDelimiters !== !1 && (p = y.length + p + w.length, p > a[c] && (a[c] = p), d[c] = p), f[c] = v;
  }
  i.splice(1, 0, f), l.splice(1, 0, d), u = -1;
  const g = [];
  for (; ++u < i.length; ) {
    const h = i[u], y = l[u];
    c = -1;
    const w = [];
    for (; ++c < s; ) {
      const p = h[c] || "";
      let v = "", x = "";
      if (t.alignDelimiters !== !1) {
        const b = a[c] - (y[c] || 0), A = o[c];
        A === 114 ? v = " ".repeat(b) : A === 99 ? b % 2 ? (v = " ".repeat(b / 2 + 0.5), x = " ".repeat(b / 2 - 0.5)) : (v = " ".repeat(b / 2), x = v) : x = " ".repeat(b);
      }
      t.delimiterStart !== !1 && !c && w.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && p === "") && (t.delimiterStart !== !1 || c) && w.push(" "), t.alignDelimiters !== !1 && w.push(v), w.push(p), t.alignDelimiters !== !1 && w.push(x), t.padding !== !1 && w.push(" "), (t.delimiterEnd !== !1 || c !== s - 1) && w.push("|");
    }
    g.push(
      t.delimiterEnd === !1 ? w.join("").replace(/ +$/, "") : w.join("")
    );
  }
  return g.join(`
`);
}
function LM(e) {
  return e == null ? "" : String(e);
}
function FM(e) {
  return e.length;
}
function lv(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const zM = {
  enter: {
    table: BM,
    tableData: av,
    tableHeader: av,
    tableRow: VM
  },
  exit: {
    codeText: HM,
    table: jM,
    tableData: fd,
    tableHeader: fd,
    tableRow: fd
  }
};
function BM(e) {
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
function jM(e) {
  this.exit(e), this.setData("inTable");
}
function VM(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function fd(e) {
  this.exit(e);
}
function av(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function HM(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, UM));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function UM(e, t) {
  return t === "|" ? t : e;
}
function WM(e) {
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
  function l(g, h, y, w) {
    return u(
      c(g, y, w),
      g.align
    );
  }
  function a(g, h, y, w) {
    const p = f(g, y, w), v = u([p]);
    return v.slice(0, v.indexOf(`
`));
  }
  function s(g, h, y, w) {
    const p = y.enter("tableCell"), v = y.enter("phrasing"), x = dC(g, y, {
      ...w,
      before: i,
      after: i
    });
    return v(), p(), x;
  }
  function u(g, h) {
    return DM(g, {
      align: h,
      alignDelimiters: r,
      padding: n,
      stringLength: o
    });
  }
  function c(g, h, y) {
    const w = g.children;
    let p = -1;
    const v = [], x = h.enter("table");
    for (; ++p < w.length; )
      v[p] = f(
        w[p],
        h,
        y
      );
    return x(), v;
  }
  function f(g, h, y) {
    const w = g.children;
    let p = -1;
    const v = [], x = h.enter("tableRow");
    for (; ++p < w.length; )
      v[p] = s(
        w[p],
        g,
        h,
        y
      );
    return x(), v;
  }
  function d(g, h, y) {
    let w = hC(g, h, y);
    return y.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function qM(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function QM(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function GM(e, t, n, r) {
  const o = QM(n);
  let i = n.bulletCurrent || qM(n);
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
const KM = {
  exit: {
    taskListCheckValueChecked: sv,
    taskListCheckValueUnchecked: sv,
    paragraph: XM
  }
}, YM = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: ZM }
};
function sv(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function XM(e) {
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
function ZM(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = Bc(r);
  i && a.move(l);
  let s = GM(e, t, n, {
    ...r,
    ...a.current()
  });
  return i && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function JM() {
  return [
    ZN,
    gM(),
    RM,
    zM,
    KM
  ];
}
function e9(e) {
  return {
    extensions: [
      JN,
      yM(),
      TM,
      WM(e),
      YM
    ]
  };
}
function t9(e = {}) {
  const t = this.data();
  n("micromarkExtensions", BN(e)), n("fromMarkdownExtensions", JM()), n("toMarkdownExtensions", e9(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function n9(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function r9(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function o9(e, t) {
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
function i9(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function l9(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function mC(e, t) {
  const n = String(t.identifier).toUpperCase(), r = Li(n.toLowerCase()), o = e.footnoteOrder.indexOf(n);
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
function a9(e, t) {
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
  }, mC(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function s9(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function u9(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function gC(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function c9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return gC(e, t);
  const r = { src: Li(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function f9(e, t) {
  const n = { src: Li(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function d9(e, t) {
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
function p9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return gC(e, t);
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
function h9(e, t) {
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
function m9(e, t, n) {
  const r = e.all(t), o = n ? g9(n) : yC(t), i = {}, l = [];
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
function g9(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = yC(n[r]);
  }
  return t;
}
function yC(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function y9(e, t) {
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
function v9(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function x9(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function w9(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ug = vC("start"), cg = vC("end");
function b9(e) {
  return { start: ug(e), end: cg(e) };
}
function vC(e) {
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
function S9(e, t) {
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
    }, a = ug(t.children[1]), s = cg(t.children[t.children.length - 1]);
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
function k9(e, t, n) {
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
function C9(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const uv = 9, cv = 32;
function E9(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      fv(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(fv(t.slice(o), o > 0, !1)), i.join("");
}
function fv(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === uv || i === cv; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === uv || i === cv; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function $9(e, t) {
  const n = { type: "text", value: E9(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function A9(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const P9 = {
  blockquote: n9,
  break: r9,
  code: o9,
  delete: i9,
  emphasis: l9,
  footnoteReference: mC,
  footnote: a9,
  heading: s9,
  html: u9,
  imageReference: c9,
  image: f9,
  inlineCode: d9,
  linkReference: p9,
  link: h9,
  listItem: m9,
  list: y9,
  paragraph: v9,
  root: x9,
  strong: w9,
  table: S9,
  tableCell: C9,
  tableRow: k9,
  text: $9,
  thematicBreak: A9,
  toml: Es,
  yaml: Es,
  definition: Es,
  footnoteDefinition: Es
};
function Es() {
  return null;
}
const xC = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), lC(e, t, o, r);
  function o(i, l) {
    const a = l[l.length - 1];
    return n(
      i,
      a ? a.children.indexOf(i) : null,
      a
    );
  }
};
function _9(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const dv = {}.hasOwnProperty;
function R9(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return xC(e, "definition", (r) => {
    const o = pv(r.identifier);
    o && !dv.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = pv(r);
    return o && dv.call(t, o) ? t[o] : null;
  }
}
function pv(e) {
  return String(e || "").toUpperCase();
}
const Hu = {}.hasOwnProperty;
function T9(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...P9, ...n.handlers }, l.definition = R9(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = I9, l.applyData = O9, l.one = a, l.all = s, l.wrap = M9, l.augment = i, xC(e, "footnoteDefinition", (u) => {
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
      _9(f) || (c.position = { start: ug(f), end: cg(f) });
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
    return wC(l, u, c);
  }
  function s(u) {
    return fg(l, u);
  }
}
function I9(e, t) {
  e.position && (t.position = b9(e));
}
function O9(e, t) {
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
function wC(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return Hu.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: fg(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : N9(e, t);
}
function fg(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = wC(e, r[o], t);
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
function N9(e, t) {
  const n = t.data || {}, r = "value" in t && !(Hu.call(n, "hProperties") || Hu.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: fg(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function M9(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function D9(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const o = e.all(r), i = String(r.identifier).toUpperCase(), l = Li(i.toLowerCase());
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
function bC(e, t) {
  const n = T9(e, t), r = n.one(e, null), o = D9(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const L9 = function(e, t) {
  return e && "run" in e ? z9(e, t) : B9(e || t);
}, F9 = L9;
function z9(e, t) {
  return (n, r, o) => {
    e.run(bC(n, t), r, (i) => {
      o(i);
    });
  };
}
function B9(e) {
  return (t) => bC(t, e);
}
class Ha {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Ha.prototype.property = {};
Ha.prototype.normal = {};
Ha.prototype.space = null;
function SC(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Ha(n, r, t);
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
let j9 = 0;
const le = $o(), je = $o(), kC = $o(), H = $o(), Ae = $o(), ci = $o(), Ct = $o();
function $o() {
  return 2 ** ++j9;
}
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: je,
  overloadedBoolean: kC,
  number: H,
  spaceSeparated: Ae,
  commaSeparated: ci,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), dd = Object.keys(sh);
class dg extends Kt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), hv(this, "space", o), typeof r == "number")
      for (; ++i < dd.length; ) {
        const l = dd[i];
        hv(this, dd[i], (r & sh[l]) === sh[l]);
      }
  }
}
dg.prototype.defined = !0;
function hv(e, t, n) {
  n && (e[t] = n);
}
const V9 = {}.hasOwnProperty;
function Fi(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (V9.call(e.properties, r)) {
      const o = e.properties[r], i = new dg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[ah(r)] = r, n[ah(i.attribute)] = r;
    }
  return new Ha(t, n, e.space);
}
const CC = Fi({
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
}), EC = Fi({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function $C(e, t) {
  return t in e ? e[t] : t;
}
function AC(e, t) {
  return $C(e, t.toLowerCase());
}
const PC = Fi({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: AC,
  properties: { xmlns: null, xmlnsXLink: null }
}), _C = Fi({
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
}), H9 = Fi({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: AC,
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
    download: kC,
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
}), U9 = Fi({
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
  transform: $C,
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
}), W9 = /^data[-\w.:]+$/i, mv = /-[a-z]/g, q9 = /[A-Z]/g;
function Q9(e, t) {
  const n = ah(t);
  let r = t, o = Kt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && W9.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(mv, K9);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!mv.test(i)) {
        let l = i.replace(q9, G9);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = dg;
  }
  return new o(r, t);
}
function G9(e) {
  return "-" + e.toLowerCase();
}
function K9(e) {
  return e.charAt(1).toUpperCase();
}
const Y9 = SC([EC, CC, PC, _C, H9], "html"), RC = SC([EC, CC, PC, _C, U9], "svg"), X9 = [
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
], gv = {}.hasOwnProperty;
function Z9(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const a = r.handlers;
    if (o && gv.call(o, e)) {
      const s = String(o[e]);
      l = gv.call(a, s) ? a[s] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function J9(e, t) {
  if (e = e.replace(
    t.subset ? eD(t.subset) : /["&'<>`]/g,
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
function eD(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function tD(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function nD(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const rD = [
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
}, oD = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], TC = {}.hasOwnProperty, uh = {};
let $s;
for ($s in pd)
  TC.call(pd, $s) && (uh[pd[$s]] = $s);
function iD(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (TC.call(uh, o)) {
    const i = uh[o], l = "&" + i;
    return n && rD.includes(i) && !oD.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function lD(e, t, n) {
  let r = tD(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = iD(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = nD(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function fi(e, t) {
  return J9(e, Object.assign({ format: lD }, t));
}
function aD(e, t, n, r) {
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
function sD(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function uD(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function cD(e) {
  return e.join(" ").trim();
}
function pg(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const We = OC(1), IC = OC(-1);
function OC(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, a = i && i[l];
    if (!o)
      for (; a && pg(a); )
        l += e, a = i[l];
    return a;
  }
}
const fD = {}.hasOwnProperty;
function NC(e) {
  return t;
  function t(n, r, o) {
    return fD.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const hg = NC({
  html: dD,
  head: hd,
  body: pD,
  p: hD,
  li: mD,
  dt: gD,
  dd: yD,
  rt: yv,
  rp: yv,
  optgroup: vD,
  option: xD,
  menuitem: wD,
  colgroup: hd,
  caption: hd,
  thead: bD,
  tbody: SD,
  tfoot: kD,
  tr: CD,
  td: vv,
  th: vv
});
function hd(e, t, n) {
  const r = We(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && pg(r.value.charAt(0)));
}
function dD(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function pD(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function hD(e, t, n) {
  const r = We(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function mD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function gD(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function yD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function yv(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function vD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function xD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function wD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function bD(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function SD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function kD(e, t, n) {
  return !We(n, t);
}
function CD(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function vv(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const ED = NC({
  html: $D,
  head: AD,
  body: PD,
  colgroup: _D,
  tbody: RD
});
function $D(e) {
  const t = We(e, -1);
  return !t || t.type !== "comment";
}
function AD(e) {
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
function PD(e) {
  const t = We(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && pg(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function _D(e, t, n) {
  const r = IC(n, t), o = We(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && hg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function RD(e, t, n) {
  const r = IC(n, t), o = We(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && hg(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const As = {
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
function TD(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const a = [];
  let s;
  o.space === "html" && e.tagName === "svg" && (r.schema = RC);
  const u = ID(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !ED(e, t, n)) && (a.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (s = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || s === "/" || s && s !== '"' && s !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(c), !l && (!i || !hg(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function ID(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = OD(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function OD(e, t, n) {
  const r = Q9(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, a;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const s = fi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: As.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? uD : cD)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? s : (e.settings.preferUnquoted && (a = fi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: As.unquoted[o][i],
      attribute: !0
    })
  )), a !== n && (e.settings.quoteSmart && Vu(n, l) > Vu(n, e.alternative) && (l = e.alternative), a = l + fi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? As.single : As.double)[o][i],
      attribute: !0
    })
  ) + l), s + (a && "=" + a));
}
function MC(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : fi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function ND(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : MC(e, t, n, r);
}
function MD(e, t, n, r) {
  return r.all(e);
}
const DD = Z9("type", {
  invalid: LD,
  unknown: FD,
  handlers: { comment: aD, doctype: sD, element: TD, raw: ND, root: MD, text: MC }
});
function LD(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function FD(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function zD(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: BD,
    all: jD,
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
      voids: n.voids || X9,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? RC : Y9,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function BD(e, t, n) {
  return DD(e, t, n, this);
}
function jD(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function VD(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return zD(o, n);
  }
}
async function HD(e) {
  if (!e)
    return "";
  const t = await JO().use(eN).use(fN).use(t9).use(F9).use(VD).process(e);
  return String(t);
}
const UD = ({
  content: e
}) => {
  const [t, n] = m.exports.useState("");
  return m.exports.useEffect(() => {
    HD(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, WD = (e) => {
  const t = UD(e);
  return /* @__PURE__ */ B("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, qD = ({
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
    children: /* @__PURE__ */ B(WD, {
      content: e.text
    })
  })]
}), QD = (e) => {
  var a;
  const t = m.exports.useRef(null), n = m.exports.useRef(null), {
    conventions: r
  } = va(), [o] = m.exports.useState(e.action), i = (a = r[o]) != null ? a : [];
  function l() {
    var u, c, f;
    const s = ((c = (u = t.current) == null ? void 0 : u.children.length) != null ? c : 1) - 1;
    ((f = t.current) == null ? void 0 : f.children[s]) && n.current && setTimeout(() => {
      FO(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return va.subscribe((s, u) => {
    var c, f;
    ((c = u.conventions[o]) == null ? void 0 : c.length) !== ((f = s.conventions[o]) == null ? void 0 : f.length) && l();
  }), m.exports.useEffect(() => {
    l();
  }, []), /* @__PURE__ */ B("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ pe(NO, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ B(MO, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ pe("div", {
          ref: t,
          children: [i.map((s, u) => /* @__PURE__ */ B(qD, {
            message: s
          }, u)), /* @__PURE__ */ B("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ B(wy, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ B(by, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ B(wy, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ B(by, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, mg = (e) => e.replace("-page", ""), GD = hk(), KD = (e) => {
  const t = setInterval(() => {
    e.current && (e.current.focus(), clearInterval(t));
  }, 10);
};
function YD() {
  const [e, t] = m.exports.useState(""), n = m.exports.useRef(), r = m.exports.useRef(null), o = m.exports.useRef(null), i = m.exports.useRef(null), l = m.exports.useRef(null), [a, s] = m.exports.useState([Xr]), u = a[a.length - 1], [c, f] = m.exports.useState(!1), {
    upsertConventions: d
  } = va(), {
    open: g,
    setOpen: h,
    toggle: y,
    updateChatOpen: w
  } = Mu(), p = m.exports.useCallback(() => {
    s((E) => {
      const P = [...E];
      return P.splice(-1, 1), P;
    });
  }, []);
  function v() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const x = m.exports.useCallback((E) => {
    t(E);
  }, []), b = m.exports.useCallback(async (E, P) => {
    if (console.log("handleValueSelect", E, P), E.endsWith("-page")) {
      s((R) => [...R, E]);
      return;
    }
    if (E === ai) {
      f(!0);
      const R = await yl(Zf, {
        text: P == null ? void 0 : P.text,
        action: ai
      }, "background");
      d(ai, R.message), f(!1);
    }
    if (E === ao) {
      f(!0);
      const R = await yl(Zf, {
        text: P == null ? void 0 : P.text,
        action: ao
      }, "background");
      d(ao, R.message), f(!1);
    }
    if (E === si) {
      const R = new Nu({
        blankReplacement: () => ""
      });
      R.remove(["script", "link", "nav", "footer", "img", "iframe", "audio", "canvas", "figure", "ins", "del", "next-route-announcer"]);
      const T = R.turndown(document.body), O = await yl(Zf, {
        text: T,
        action: si
      }, "background");
      d(si, O.message);
    }
    t("");
  }, [d]);
  m.exports.useEffect(() => {
    const E = (P) => {
      if (P.key === "j" && P.metaKey && (y(), u === Du && p(), w(!1)), P.key === "Escape" && u === Xr && !Mu.getState().subCommandOpen) {
        h(!1), w(!1);
        return;
      }
      P.key === "Escape" && u !== Xr && (p(), setTimeout(() => {
        var R;
        (R = i.current) == null || R.focus();
      }, 100));
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [w, u, p, y, h]), KD(i);
  const A = u === Xr, S = u === Lu || u === Xp, $ = u === Lu;
  return /* @__PURE__ */ pe(Xn, {
    children: [/* @__PURE__ */ B(EP, {
      open: g,
      children: /* @__PURE__ */ B($P, {
        container: r.current,
        children: /* @__PURE__ */ B(AP, {
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
                children: a.map((E) => /* @__PURE__ */ B("div", {
                  className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                  children: mg(E)
                }, E))
              }), $ && /* @__PURE__ */ B(gO, {
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
                E.key === "Enter" && v(), !(u === Xr || ((P = n.current) == null ? void 0 : P.length)) && E.key === "Backspace" && (E.preventDefault(), p(), v());
              }
            }, "cmdk-input"), A && /* @__PURE__ */ B("hr", {
              "cmdk-raycast-loader": ""
            }), /* @__PURE__ */ pe(ln.List, {
              className: "min-h-[400px]",
              ref: l,
              children: [u === Xr && /* @__PURE__ */ B(XD, {
                onSelect: b
              }), u === Du && /* @__PURE__ */ B(ZD, {}), S && /* @__PURE__ */ B(JD, {
                page: u
              })]
            }), /* @__PURE__ */ pe("div", {
              "cmdk-raycast-footer": "",
              className: "justify-end",
              children: [S && /* @__PURE__ */ B(eL, {
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
              }), /* @__PURE__ */ B("hr", {}), /* @__PURE__ */ B(tL, {
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
function XD({
  onSelect: e
}) {
  const {
    clear: t
  } = va();
  return /* @__PURE__ */ pe(Xn, {
    children: [/* @__PURE__ */ B(ln.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ pe(ln.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ pe(ll, {
        isCommand: !0,
        value: "clear-storage",
        onSelect: () => {
          t(), GD.clear();
        },
        children: [/* @__PURE__ */ B(yO, {}), "Clear Storage"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        onSelect: () => e(Du),
        value: Du,
        children: [/* @__PURE__ */ B(vO, {}), "Config"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        onSelect: () => e(Xp),
        value: Xp,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        onSelect: () => e(Lu),
        value: Lu,
        children: [/* @__PURE__ */ B(HT, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ pe(ll, {
        isCommand: !0,
        value: si,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-notes/0.8 text-mayumi-gray-1200"
        }), "Summary"]
      })]
    })]
  });
}
function ZD() {
  const e = mk();
  return /* @__PURE__ */ B("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ B(Qm, {
      light: !0,
      className: "w-1/2",
      value: e.OPENAI_API_KEY,
      onKeyDown: (t) => (t.key === "Enter" && e.set({
        [VT]: t.currentTarget.value
      }), !1)
    })
  });
}
function JD(e) {
  return /* @__PURE__ */ B(QD, {
    action: mg(e.page)
  });
}
function eL(e) {
  const [t, n] = m.exports.useState(""), r = m.exports.useRef(null), o = m.exports.useRef("");
  return /* @__PURE__ */ B(Qm, {
    tabIndex: 1,
    value: t,
    ghost: !0,
    placeholder: "Type your message...",
    ref: r,
    onChange: (l) => {
      n(l.target.value), o.current = l.target.value;
    },
    onKeyDown: (l) => {
      if (l.key === "Enter") {
        l.preventDefault();
        const a = mg(e.page);
        e.onSendMessage(a, {
          text: o.current
        }), o.current = "", r.current.value = "", n(""), console.log("ChatInput", r.current);
      }
    }
  }, "cmdk-ai-input");
}
function tL({
  inputRef: e,
  listRef: t,
  selectedValue: n,
  onSelect: r
}) {
  const {
    subCommandOpen: o,
    toggleSubCommand: i,
    setSubCommandOpen: l
  } = Mu(), [, a] = m.exports.useState(), s = m.exports.useRef(null), u = n !== Xr;
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
  }, [o, t]), /* @__PURE__ */ pe(pP, {
    open: o,
    onOpenChange: (c) => {
      !u || l(c);
    },
    modal: !0,
    children: [/* @__PURE__ */ pe(hP, {
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
    }), /* @__PURE__ */ B(mP, {
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
            children: [n === ai && /* @__PURE__ */ B(nL, {
              onSelect: r
            }), n === ao && /* @__PURE__ */ B(rL, {
              onSelect: r
            }), n === si && /* @__PURE__ */ B(oL, {
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ B(ln.Input, {
          autoFocus: !0,
          onValueChange: a,
          ref: s,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function nL({
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
        e(ai, {
          text: py()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: (n = py()) != null ? n : "Search input"
      })
    }), /* @__PURE__ */ B(Uu, {
      onSelect: () => {
        e(ai, {
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
function rL({
  onSelect: e
}) {
  const {
    search: t
  } = Qn((n) => n);
  return /* @__PURE__ */ B(Xn, {
    children: /* @__PURE__ */ B(Uu, {
      onSelect: () => {
        e(ao, {
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
function oL({
  onSelect: e
}) {
  const {
    search: t
  } = Qn((n) => n);
  return /* @__PURE__ */ B(Xn, {
    children: /* @__PURE__ */ B(Uu, {
      onSelect: () => {
        e(si, {
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
var gg = Wa(), oe = (e) => Ua(e, gg), yg = Wa();
oe.write = (e) => Ua(e, yg);
var jc = Wa();
oe.onStart = (e) => Ua(e, jc);
var vg = Wa();
oe.onFrame = (e) => Ua(e, vg);
var xg = Wa();
oe.onFinish = (e) => Ua(e, xg);
var di = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = di.findIndex((l) => l.cancel == r);
    ~i && di.splice(i, 1), Sr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return di.splice(DC(n), 0, o), Sr += 1, LC(), o;
};
var DC = (e) => ~(~di.findIndex((t) => t.time > e) || ~di.length);
oe.cancel = (e) => {
  jc.delete(e), vg.delete(e), xg.delete(e), gg.delete(e), yg.delete(e);
};
oe.sync = (e) => {
  ch = !0, oe.batchedUpdates(e), ch = !1;
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
var wg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => wg = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : zC();
};
var br = -1, Sr = 0, ch = !1;
function Ua(e, t) {
  ch ? (t.delete(e), e(0)) : (t.add(e), LC());
}
function LC() {
  br < 0 && (br = 0, oe.frameLoop !== "demand" && wg(FC));
}
function iL() {
  br = -1;
}
function FC() {
  ~br && (wg(FC), oe.batchedUpdates(zC));
}
function zC() {
  let e = br;
  br = oe.now();
  let t = DC(br);
  if (t && (BC(di.splice(0, t), (n) => n.handler()), Sr -= t), !Sr) {
    iL();
    return;
  }
  jc.flush(), gg.flush(e ? Math.min(64, br - e) : 16.667), vg.flush(), yg.flush(), xg.flush();
}
function Wa() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    Sr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return Sr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), Sr -= t.size, BC(t, (r) => r(n) && e.add(r)), Sr += e.size, t = e);
  } };
}
function BC(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
var lL = Object.defineProperty, aL = (e, t) => {
  for (var n in t)
    lL(e, n, { get: t[n], enumerable: !0 });
}, pn = {};
aL(pn, { assign: () => uL, colors: () => Ir, createStringInterpolator: () => Sg, skipAnimation: () => VC, to: () => jC, willAdvance: () => kg });
function fh() {
}
var sL = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), U = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
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
var gl = (e, ...t) => Ll(e, (n) => n(...t)), bg = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Sg, jC, Ir = null, VC = !1, kg = fh, uL = (e) => {
  e.to && (jC = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Ir = e.colors), e.skipAnimation != null && (VC = e.skipAnimation), e.createStringInterpolator && (Sg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (kg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
}, Fl = /* @__PURE__ */ new Set(), Ht = [], md = [], Wu = 0, Vc = { get idle() {
  return !Fl.size && !Ht.length;
}, start(e) {
  Wu > e.priority ? (Fl.add(e), oe.onStart(cL)) : (HC(e), oe(dh));
}, advance: dh, sort(e) {
  if (Wu)
    oe.onFrame(() => Vc.sort(e));
  else {
    let t = Ht.indexOf(e);
    ~t && (Ht.splice(t, 1), UC(e));
  }
}, clear() {
  Ht = [], Fl.clear();
} };
function cL() {
  Fl.forEach(HC), Fl.clear(), oe(dh);
}
function HC(e) {
  Ht.includes(e) || UC(e);
}
function UC(e) {
  Ht.splice(fL(Ht, (t) => t.priority > e.priority), 0, e);
}
function dh(e) {
  let t = md;
  for (let n = 0; n < Ht.length; n++) {
    let r = Ht[n];
    Wu = r.priority, r.idle || (kg(r), r.advance(e), r.idle || t.push(r));
  }
  return Wu = 0, md = Ht, md.length = 0, Ht = t, Ht.length > 0;
}
function fL(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var dL = (e, t, n) => Math.min(Math.max(n, e), t), pL = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, sn = "[-+]?\\d*\\.?\\d+", qu = sn + "%";
function Hc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var hL = new RegExp("rgb" + Hc(sn, sn, sn)), mL = new RegExp("rgba" + Hc(sn, sn, sn, sn)), gL = new RegExp("hsl" + Hc(sn, qu, qu)), yL = new RegExp("hsla" + Hc(sn, qu, qu, sn)), vL = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, xL = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, wL = /^#([0-9a-fA-F]{6})$/, bL = /^#([0-9a-fA-F]{8})$/;
function SL(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = wL.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ir && Ir[e] !== void 0 ? Ir[e] : (t = hL.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | 255) >>> 0 : (t = mL.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | bv(t[4])) >>> 0 : (t = vL.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = bL.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = xL.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = gL.exec(e)) ? (xv(wv(t[1]), Ps(t[2]), Ps(t[3])) | 255) >>> 0 : (t = yL.exec(e)) ? (xv(wv(t[1]), Ps(t[2]), Ps(t[3])) | bv(t[4])) >>> 0 : null;
}
function gd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function xv(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = gd(o, r, e + 1 / 3), l = gd(o, r, e), a = gd(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Do(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function wv(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function bv(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ps(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Sv(e) {
  let t = SL(e);
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
    return Sg(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    let c = CL(u, i);
    return kL(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function kL(e, t, n, r, o, i, l, a, s) {
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
function CL(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var EL = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return dL(0, 1, o / e);
}, Qu = 1.70158, _s = Qu * 1.525, kv = Qu + 1, Cv = 2 * Math.PI / 3, Ev = 2 * Math.PI / 4.5, Rs = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, $L = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => kv * e * e * e - Qu * e * e, easeOutBack: (e) => 1 + kv * Math.pow(e - 1, 3) + Qu * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((_s + 1) * 2 * e - _s) / 2 : (Math.pow(2 * e - 2, 2) * ((_s + 1) * (e * 2 - 2) + _s) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Cv), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Cv) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ev)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ev) / 2 + 1, easeInBounce: (e) => 1 - Rs(1 - e), easeOutBounce: Rs, easeInOutBounce: (e) => e < 0.5 ? (1 - Rs(1 - 2 * e)) / 2 : (1 + Rs(2 * e - 1)) / 2, steps: EL }, Ai = Symbol.for("FluidValue.get"), go = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Ai]), vt = (e) => e && e[Ai] ? e[Ai]() : e, $v = (e) => e[go] || null;
function AL(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ba(e, t) {
  let n = e[go];
  n && n.forEach((r) => {
    AL(r, t);
  });
}
var TF, IF, Uv, WC = (Uv = class {
  constructor(e) {
    K(this, TF);
    K(this, IF);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    PL(this, e);
  }
}, TF = Ai, IF = go, Uv), PL = (e, t) => qC(e, Ai, t);
function zi(e, t) {
  if (e[Ai]) {
    let n = e[go];
    n || qC(e, go, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
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
var qC = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), Gs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, _L = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Av = new RegExp(`(${Gs.source})(%|[a-z]+)`, "i"), RL = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Uc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, QC = (e) => {
  let [t, n] = TL(e);
  if (!t || bg())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && Uc.test(n) ? QC(n) : n || e;
}, TL = (e) => {
  let t = Uc.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, yd, IL = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, GC = (e) => {
  yd || (yd = Ir ? new RegExp(`(${Object.keys(Ir).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => vt(o).replace(Uc, QC).replace(_L, Sv).replace(yd, Sv)), n = t.map((o) => o.match(Gs).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => wa({ ...e, output: o }));
  return (o) => {
    var a;
    let i = !Av.test(t[0]) && ((a = t.find((s) => Av.test(s))) == null ? void 0 : a.replace(Gs, "")), l = 0;
    return t[0].replace(Gs, () => `${r[l++](o)}${i || ""}`).replace(RL, IL);
  };
}, Cg = "react-spring: ", KC = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Cg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, OL = KC(console.warn);
function NL() {
  OL(`${Cg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var ML = KC(console.warn);
function DL() {
  ML(`${Cg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Wc(e) {
  return U.str(e) && (e[0] == "#" || /\d/.test(e) || !bg() && Uc.test(e) || e in (Ir || {}));
}
var Eg = bg() ? m.exports.useEffect : m.exports.useLayoutEffect, LL = () => {
  let e = m.exports.useRef(!1);
  return Eg(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function YC() {
  let e = m.exports.useState()[1], t = LL();
  return () => {
    t.current && e(Math.random());
  };
}
function FL(e, t) {
  let [n] = m.exports.useState(() => ({ inputs: t, result: e() })), r = m.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && zL(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, m.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function zL(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var XC = (e) => m.exports.useEffect(e, BL), BL = [];
function Pv(e) {
  let t = m.exports.useRef();
  return m.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var ka = Symbol.for("Animated:node"), jL = (e) => !!e && e[ka] === e, wn = (e) => e && e[ka], $g = (e, t) => sL(e, ka, t), qc = (e) => e && e[ka] && e[ka].getPayload(), ZC = class {
  constructor() {
    K(this, "payload");
    $g(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, qa = class extends ZC {
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
    return new qa(t);
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
}, Ca = class extends qa {
  constructor(t) {
    super(0);
    K(this, "_string", null);
    K(this, "_toString");
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
}, Gu = { dependencies: null }, Qc = class extends ZC {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return An(this.source, (n, r) => {
      jL(n) ? t[r] = n.getValue(e) : Bt(n) ? t[r] = vt(n) : e || (t[r] = n);
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
}, JC = class extends Qc {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new JC(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(VL)), !0);
  }
};
function VL(e) {
  return (Wc(e) ? Ca : qa).create(e);
}
function ph(e) {
  let t = wn(e);
  return t ? t.constructor : U.arr(e) ? JC : Wc(e) ? Ca : qa;
}
var _v = (e, t) => {
  let n = !U.fun(e) || e.prototype && e.prototype.isReactComponent;
  return m.exports.forwardRef((r, o) => {
    let i = m.exports.useRef(null), l = n && m.exports.useCallback((h) => {
      i.current = WL(o, h);
    }, [o]), [a, s] = UL(r, t), u = YC(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new HL(c, s), d = m.exports.useRef();
    Eg(() => (d.current = f, me(s, (h) => zi(h, f)), () => {
      d.current && (me(d.current.deps, (h) => Sa(h, d.current)), oe.cancel(d.current.update));
    })), m.exports.useEffect(c, []), XC(() => () => {
      let h = d.current;
      me(h.deps, (y) => Sa(y, h));
    });
    let g = t.getComponentProps(a.getValue());
    return m.exports.createElement(e, { ...g, ref: l });
  });
}, HL = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && oe.write(this.update);
  }
};
function UL(e, t) {
  let n = /* @__PURE__ */ new Set();
  return Gu.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new Qc(e), Gu.dependencies = null, [e, n];
}
function WL(e, t) {
  return e && (U.fun(e) ? e(t) : e.current = t), t;
}
var Rv = Symbol.for("AnimatedComponent"), qL = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new Qc(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let a = Tv(l) || "Anonymous";
    return U.str(l) ? l = i[l] || (i[l] = _v(l, o)) : l = l[Rv] || (l[Rv] = _v(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return An(e, (l, a) => {
    U.arr(e) && (a = Tv(l)), i[a] = i(l);
  }), { animated: i };
}, Tv = (e) => U.str(e) ? e : e && U.str(e.displayName) ? e.displayName : U.fun(e) && e.name || null;
function Jr(e, ...t) {
  return U.fun(e) ? e(...t) : e;
}
var zl = (e, t) => e === !0 || !!(t && e && (U.fun(e) ? e(t) : Pt(e).includes(t))), e2 = (e, t) => U.obj(e) ? t && e[t] : e, t2 = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, QL = (e) => e, Ag = (e, t = QL) => {
  let n = GL;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    U.und(i) || (r[o] = i);
  }
  return r;
}, GL = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], KL = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function YL(e) {
  let t = {}, n = 0;
  if (An(e, (r, o) => {
    KL[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function n2(e) {
  let t = YL(e);
  if (t) {
    let n = { to: t };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function Ea(e) {
  return e = vt(e), U.arr(e) ? e.map(Ea) : Wc(e) ? pn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function XL(e) {
  for (let t in e)
    return !0;
  return !1;
}
function hh(e) {
  return U.fun(e) || U.arr(e) && U.obj(e[0]);
}
function ZL(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function JL(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var r2 = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, mh = { ...r2.default, mass: 1, damping: 1, easing: $L.linear, clamp: !1 }, eF = class {
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
    Object.assign(this, mh);
  }
};
function tF(e, t, n) {
  n && (n = { ...n }, Iv(n, t), t = { ...n, ...t }), Iv(e, t), Object.assign(e, t);
  for (let l in mh)
    e[l] == null && (e[l] = mh[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return U.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function Iv(e, t) {
  if (!U.und(t.decay))
    e.duration = void 0;
  else {
    let n = !U.und(t.tension) || !U.und(t.friction);
    (n || !U.und(t.frequency) || !U.und(t.damping) || !U.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var Ov = [], nF = class {
  constructor() {
    K(this, "changed", !1);
    K(this, "values", Ov);
    K(this, "toValues", null);
    K(this, "fromValues", Ov);
    K(this, "to");
    K(this, "from");
    K(this, "config", new eF());
    K(this, "immediate", !1);
  }
};
function o2(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, a) => {
    var h;
    let s, u, c = zl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      g();
    else {
      U.und(n.pause) || (o.paused = zl(n.pause, t));
      let y = r == null ? void 0 : r.pause;
      y !== !0 && (y = o.paused || zl(y, t)), s = Jr(n.delay || 0, t), y ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), s = u.time - oe.now();
    }
    function d() {
      s > 0 && !pn.skipAnimation ? (o.delayed = !0, u = oe.setTimeout(g, s), o.pauseQueue.add(f), o.timeouts.add(u)) : g();
    }
    function g() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(f), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
      try {
        i.start({ ...n, callId: e, cancel: c }, l);
      } catch (y) {
        a(y);
      }
    }
  });
}
var Pg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? pi(e.get()) : t.every((n) => n.noop) ? i2(e.get()) : on(e.get(), t.every((n) => n.finished)), i2 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), on = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), pi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function l2(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: a, promise: s } = n;
  return !i && e === a && !t.reset ? s : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = Ag(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), g = (w) => {
      let p = o <= (n.cancelId || 0) && pi(r) || o !== n.asyncId && on(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let v = new Nv(), x = new Mv();
      return (async () => {
        if (pn.skipAnimation)
          throw $a(n), x.result = on(r, !1), f(x), x;
        g(v);
        let b = U.obj(w) ? { ...w } : { ...p, to: w };
        b.parentId = o, An(u, (S, $) => {
          U.und(b[$]) && (b[$] = S);
        });
        let A = await r.start(b);
        return g(v), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    }, y;
    if (pn.skipAnimation)
      return $a(n), on(r, !1);
    try {
      let w;
      U.arr(e) ? w = (async (p) => {
        for (let v of p)
          await h(v);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), y = on(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof Nv)
        y = w.result;
      else if (w instanceof Mv)
        y = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return U.fun(l) && oe.batchedUpdates(() => {
      l(y, r, r.item);
    }), y;
  })();
}
function $a(e, t) {
  Ll(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Nv = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    K(this, "result");
  }
}, Mv = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    K(this, "result");
  }
}, gh = (e) => e instanceof _g, rF = 1, _g = class extends WC {
  constructor() {
    super(...arguments);
    K(this, "id", rF++);
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
    return NL(), pn.to(this, t);
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
    this.idle || Vc.sort(this), ba(this, { type: "priority", parent: this, priority: t });
  }
}, yo = Symbol.for("SpringPhase"), a2 = 1, yh = 2, vh = 4, vd = (e) => (e[yo] & a2) > 0, cr = (e) => (e[yo] & yh) > 0, al = (e) => (e[yo] & vh) > 0, Dv = (e, t) => t ? e[yo] |= yh | a2 : e[yo] &= ~yh, Lv = (e, t) => t ? e[yo] |= vh : e[yo] &= ~vh, oF = class extends _g {
  constructor(t, n) {
    super();
    K(this, "key");
    K(this, "animation", new nF());
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
    return !(cr(this) || this._state.asyncTo) || al(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    let t = wn(this);
    return t instanceof qa ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return vd(this);
  }
  get isAnimating() {
    return cr(this);
  }
  get isPaused() {
    return al(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, o = this.animation, { config: i, toValues: l } = o, a = qc(o.to);
    !a && Bt(o.to) && (l = Pt(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      let d = c.constructor == Ca ? 1 : a ? a[f].lastPosition : l[f], g = o.immediate, h = d;
      if (!g) {
        if (h = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let y = c.elapsedTime += t, w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = U.arr(i.velocity) ? i.velocity[f] : i.velocity, v, x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3));
        if (U.und(i.duration))
          if (i.decay) {
            let b = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - b) * y);
            h = w + p / (1 - b) * (1 - A), g = Math.abs(c.lastPosition - h) <= x, v = p * A;
          } else {
            v = c.lastVelocity == null ? p : c.lastVelocity;
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !U.und(A), $ = w == d ? c.v0 > 0 : w < d, E, P = !1, R = 1, T = Math.ceil(t / R);
            for (let O = 0; O < T && (E = Math.abs(v) > b, !(!E && (g = Math.abs(d - h) <= x, g))); ++O) {
              S && (P = h == d || h > d == $, P && (v = -v * A, h = d));
              let D = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * v, F = (D + z) / i.mass;
              v = v + F * R, h = h + v * R;
            }
          }
        else {
          let b = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, y = c.elapsedTime += t)), b = (i.progress || 0) + y / this._memoizedDuration, b = b > 1 ? 1 : b < 0 ? 0 : b, c.durationProgress = b), h = w + i.easing(b) * (d - w), v = (h - c.lastPosition) / t, g = b == 1;
        }
        c.lastVelocity = v, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      a && !a[f].done && (g = !1), g ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    let s = wn(this), u = s.getValue();
    if (n) {
      let c = vt(o.to);
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
    return U.und(t) ? (r = this.queue || [], this.queue = []) : r = [U.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => Pg(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), $a(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = U.obj(r) ? r[n] : r, (r == null || hh(r)) && (r = void 0), o = U.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return vd(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), U.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, Ag(t, (a, s) => /^on/.test(s) ? e2(a, r) : a)), zv(this, t, "onProps"), ul(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return o2(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      al(this) || (Lv(this, !0), gl(l.pauseQueue), ul(this, "onPause", on(this, sl(this, this.animation.to)), this));
    }, resume: () => {
      al(this) && (Lv(this, !1), cr(this) && this._resume(), gl(l.resumeQueue), ul(this, "onResume", on(this, sl(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((a) => {
      if (t.loop && a.finished && !(n && a.noop)) {
        let s = s2(t);
        if (s)
          return this._update(s, !0);
      }
      return a;
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
    let { key: l, defaultProps: a, animation: s } = this, { to: u, from: c } = s, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || U.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let g = !Mn(d, c);
    g && (s.from = d), d = vt(d);
    let h = !Mn(f, u);
    h && this._focus(f);
    let y = hh(n.to), { config: w } = s, { decay: p, velocity: v } = w;
    (o || i) && (w.velocity = 0), n.config && !y && tF(w, Jr(n.config, l), n.config !== a.config ? Jr(a.config, l) : void 0);
    let x = wn(this);
    if (!x || U.und(f))
      return r(on(this, !0));
    let b = U.und(n.reset) ? i && !n.default : !U.und(d) && zl(n.reset, l), A = b ? d : this.get(), S = Ea(f), $ = U.num(S) || U.arr(S) || Wc(S), E = !y && (!$ || zl(a.immediate || n.immediate, l));
    if (h) {
      let O = ph(f);
      if (O !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, R = Bt(f), T = !1;
    if (!R) {
      let O = b || !vd(this) && g;
      (h || O) && (T = Mn(Ea(A), S), R = !T), (!Mn(s.immediate, E) && !E || !Mn(w.decay, p) || !Mn(w.velocity, v)) && (R = !0);
    }
    if (T && cr(this) && (s.changed && !b ? R = !0 : R || this._stop(u)), !y && ((R || Bt(u)) && (s.values = x.getPayload(), s.toValues = Bt(f) ? null : P == Ca ? [1] : Pt(S)), s.immediate != E && (s.immediate = E, !E && !b && this._set(u)), R)) {
      let { onRest: O } = s;
      me(lF, (z) => zv(this, n, z));
      let D = on(this, sl(this, u));
      gl(this._pendingCalls, D), this._pendingCalls.add(r), s.changed && oe.batchedUpdates(() => {
        var z;
        s.changed = !b, O == null || O(D, this), b ? Jr(a.onRest, D) : (z = s.onStart) == null || z.call(s, D, this);
      });
    }
    b && this._set(A), y ? r(l2(n.to, n, this._state, this)) : R ? this._start() : cr(this) && !h ? this._pendingCalls.add(r) : r(i2(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && ($v(this) && this._detach(), n.to = t, $v(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (zi(n, this), gh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && Sa(t, this);
  }
  _set(t, n = !0) {
    let r = vt(t);
    if (!U.und(r)) {
      let o = wn(this);
      if (!o || !Mn(r, o.getValue())) {
        let i = ph(r);
        !o || o.constructor != i ? $g(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, ul(this, "onStart", on(this, sl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Jr(this.animation.onChange, t, this)), Jr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    wn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), cr(this) || (Dv(this, !0), al(this) || this._resume());
  }
  _resume() {
    pn.skipAnimation ? this.finish() : Vc.start(this);
  }
  _stop(t, n) {
    if (cr(this)) {
      Dv(this, !1);
      let r = this.animation;
      me(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ba(this, { type: "idle", parent: this });
      let o = n ? pi(this.get()) : on(this.get(), sl(this, t != null ? t : r.to));
      gl(this._pendingCalls, o), r.changed && (r.changed = !1, ul(this, "onRest", o, this));
    }
  }
};
function sl(e, t) {
  let n = Ea(t), r = Ea(e.get());
  return Mn(r, n);
}
function s2(e, t = e.loop, n = e.to) {
  let r = Jr(t);
  if (r) {
    let o = r !== !0 && n2(r), i = (o || e).reverse, l = !o || o.reset;
    return Aa({ ...e, loop: t, default: !1, pause: void 0, to: !i || hh(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function Aa(e) {
  let { to: t, from: n } = e = n2(e), r = /* @__PURE__ */ new Set();
  return U.obj(t) && Fv(t, r), U.obj(n) && Fv(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function iF(e) {
  let t = Aa(e);
  return U.und(t.default) && (t.default = Ag(t)), t;
}
function Fv(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
var lF = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function zv(e, t, n) {
  e.animation[n] = t[n] !== t2(t, n) ? e2(t[n], e.key) : void 0;
}
function ul(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var aF = ["onStart", "onChange", "onRest"], sF = 1, uF = class {
  constructor(e, t) {
    K(this, "id", sF++);
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
    return e && this.queue.push(Aa(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(Aa) : this.queue = [], this._flush ? this._flush(this, t) : (p2(this, t), xh(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      me(Pt(t), (r) => n[r].stop(!!e));
    } else
      $a(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
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
    (r && !this._started || o && !this._started) && (this._started = !0, Ll(e, ([a, s]) => {
      s.value = this.get(), a(s, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Ll(t, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }), i && (this._started = !1, Ll(n, ([a, s]) => {
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
function xh(e, t) {
  return Promise.all(t.map((n) => u2(e, n))).then((n) => Pg(e, n));
}
async function u2(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: a, onResolve: s } = t, u = U.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = U.arr(o) || U.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : me(aF, (y) => {
    let w = t[y];
    if (U.fun(w)) {
      let p = e._events[y];
      t[y] = ({ finished: v, cancelled: x }) => {
        let b = p.get(w);
        b ? (v || (b.finished = !1), x && (b.cancelled = !0)) : p.set(w, { value: null, finished: v || !1, cancelled: x || !1 });
      }, u && (u[y] = t[y]);
    }
  });
  let f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, gl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((y) => e.springs[y].start(t)), g = t.cancel === !0 || t2(t, "cancel") === !0;
  (c || g && f.asyncId) && d.push(o2(++e._lastAsyncId, { props: t, state: f, actions: { pause: fh, resume: fh, start(y, w) {
    g ? ($a(f, e._lastAsyncId), w(pi(e))) : (y.onRest = a, w(l2(c, y, f, e)));
  } } })), f.paused && await new Promise((y) => {
    f.resumeQueue.add(y);
  });
  let h = Pg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let y = s2(t, l, o);
    if (y)
      return p2(e, [y]), u2(e, y, !0);
  }
  return s && oe.batchedUpdates(() => s(h, e, e.item)), h;
}
function Bv(e, t) {
  let n = { ...e.springs };
  return t && me(Pt(t), (r) => {
    U.und(r.keys) && (r = Aa(r)), U.obj(r.to) || (r = { ...r, to: void 0 }), d2(n, r, (o) => f2(o));
  }), c2(e, n), n;
}
function c2(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, zi(n, e));
  });
}
function f2(e, t) {
  let n = new oF();
  return n.key = e, t && zi(n, t), n;
}
function d2(e, t, n) {
  t.keys && me(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function p2(e, t) {
  me(t, (n) => {
    d2(e.springs, n, (r) => f2(r, e));
  });
}
var Gc = ({ children: e, ...t }) => {
  let n = m.exports.useContext(Ku), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = FL(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = Ku;
  return m.exports.createElement(i, { value: t }, e);
}, Ku = cF(Gc, {});
Gc.Provider = Ku.Provider;
Gc.Consumer = Ku.Consumer;
function cF(e, t) {
  return Object.assign(e, m.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var fF = () => {
  let e = [], t = function(r) {
    DL();
    let o = [];
    return me(e, (i, l) => {
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
        let a = this._getProps(r, i, l);
        a && o.push(i.start(a));
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
function dF(e, t, n) {
  let r = U.fun(t) && t;
  r && !n && (n = []);
  let o = m.exports.useMemo(() => r || arguments.length == 3 ? fF() : void 0, []), i = m.exports.useRef(0), l = YC(), a = m.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, v) {
    let x = Bv(p, v);
    return i.current > 0 && !a.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? xh(p, v) : new Promise((b) => {
      c2(p, x), a.queue.push(() => {
        b(xh(p, v));
      }), l();
    });
  } }), []), s = m.exports.useRef([...a.ctrls]), u = [], c = Pv(e) || 0;
  m.exports.useMemo(() => {
    me(s.current.slice(e, c), (p) => {
      ZL(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), m.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, v) {
    for (let x = p; x < v; x++) {
      let b = s.current[x] || (s.current[x] = new uF(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = iF(A));
    }
  }
  let d = s.current.map((p, v) => Bv(p, u[v])), g = m.exports.useContext(Gc), h = Pv(g), y = g !== h && XL(g);
  Eg(() => {
    i.current++, a.ctrls = s.current;
    let { queue: p } = a;
    p.length && (a.queue = [], me(p, (v) => v())), me(s.current, (v, x) => {
      o == null || o.add(v), y && v.start({ default: g });
      let b = u[x];
      b && (JL(v, b.ref), v.ref ? v.queue.push(b) : v.start(b));
    });
  }), XC(() => () => {
    me(a.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function pF(e, t) {
  let n = U.fun(e), [[r], o] = dF(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var hF = class extends _g {
  constructor(t, n) {
    super();
    K(this, "key");
    K(this, "idle", !0);
    K(this, "calc");
    K(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = wa(...n);
    let r = this._get(), o = ph(r);
    $g(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Mn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && jv(this._active) && xd(this);
  }
  _get() {
    let t = U.arr(this.source) ? this.source.map(vt) : Pt(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !jv(this._active) && (this.idle = !1, me(qc(this), (t) => {
      t.done = !1;
    }), pn.skipAnimation ? (oe.batchedUpdates(() => this.advance()), xd(this)) : Vc.start(this));
  }
  _attach() {
    let t = 1;
    me(Pt(this.source), (n) => {
      Bt(n) && zi(n, this), gh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    me(Pt(this.source), (t) => {
      Bt(t) && Sa(t, this);
    }), this._active.clear(), xd(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (gh(r) ? r.priority : 0) + 1), 0));
  }
};
function mF(e) {
  return e.idle !== !1;
}
function jv(e) {
  return !e.size || Array.from(e).every(mF);
}
function xd(e) {
  e.idle || (e.idle = !0, me(qc(e), (t) => {
    t.done = !0;
  }), ba(e, { type: "idle", parent: e }));
}
pn.assign({ createStringInterpolator: GC, to: (e, t) => new hF(e, t) });
var h2 = /^--/;
function gF(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !h2.test(e) && !(Bl.hasOwnProperty(e) && Bl[e]) ? t + "px" : ("" + t).trim();
}
var Vv = {};
function yF(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: a, ...s } = t, u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : Vv[f] || (Vv[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = gF(f, r[f]);
      h2.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), a !== void 0 && e.setAttribute("viewBox", a);
}
var Bl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, vF = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), xF = ["Webkit", "Ms", "Moz", "O"];
Bl = Object.keys(Bl).reduce((e, t) => (xF.forEach((n) => e[vF(n, t)] = e[t]), e), Bl);
var wF = /^(matrix|translate|scale|rotate|skew)/, bF = /^(translate)/, SF = /^(rotate|skew)/, wd = (e, t) => U.num(e) && e !== 0 ? e + t : e, Ks = (e, t) => U.arr(e) ? e.every((n) => Ks(n, t)) : U.num(e) ? e === t : parseFloat(e) === t, kF = class extends Qc {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((a) => wd(a, "px")).join(",")})`, Ks(l, 0)])), An(r, (l, a) => {
      if (a === "transform")
        o.push([l || ""]), i.push((s) => [s, s === ""]);
      else if (wF.test(a)) {
        if (delete r[a], U.und(l))
          return;
        let s = bF.test(a) ? "px" : SF.test(a) ? "deg" : "";
        o.push(Pt(l)), i.push(a === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${wd(d, s)})`, Ks(d, 0)] : (u) => [`${a}(${u.map((c) => wd(c, s)).join(",")})`, Ks(u, a.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new CF(o, i)), super(r);
  }
}, CF = class extends WC {
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
      let i = vt(r[0]), [l, a] = this.transforms[o](U.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && me(this.inputs, (n) => me(n, (r) => Bt(r) && zi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && me(this.inputs, (n) => me(n, (r) => Bt(r) && Sa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ba(this, t);
  }
}, EF = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
pn.assign({ batchedUpdates: hn.exports.unstable_batchedUpdates, createStringInterpolator: GC, colors: pL });
var $F = qL(EF, { applyAnimatedValues: yF, createAnimatedStyle: (e) => new kF(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), AF = $F.animated;
const PF = ({
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
}), _F = () => {
  const {
    toggleChatOpen: e,
    chatOpen: t
  } = Mu(), {
    conventions: n
  } = va(), [r, o] = m.exports.useState(null), i = pF({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: r2.default
  });
  console.log(n);
  const l = Object.keys(n), a = r || l[0], s = a ? n[a] : [];
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
    }), /* @__PURE__ */ pe(AF.div, {
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
        children: s.map((u, c) => /* @__PURE__ */ B(PF, {
          message: u
        }, c))
      })]
    })]
  });
}, RF = () => /* @__PURE__ */ pe("div", {
  className: "dark",
  children: [/* @__PURE__ */ B(YD, {}), /* @__PURE__ */ B(_F, {})]
});
var m2, Hv = hn.exports;
m2 = Hv.createRoot, Hv.hydrateRoot;
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), Sh("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", it.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), m2(t).render(/* @__PURE__ */ B(RF, {}));
})();
