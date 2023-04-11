var kE = Object.defineProperty;
var CE = (e, t, n) => t in e ? kE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => (CE(e, typeof t != "symbol" ? t + "" : t, n), n);
function EE(e, t) {
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
var $E = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ex = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : $E, function(n) {
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
          return new Promise((F, z) => {
            if (P.fallbackToNoCallback)
              try {
                T[E](...O, c({
                  resolve: F,
                  reject: z
                }, P));
              } catch (D) {
                console.warn(`${E} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, D), T[E](...O), P.fallbackToNoCallback = !1, P.noCallback = !0, F();
              }
            else
              P.noCallback ? (T[E](...O), F()) : T[E](...O, c({
                resolve: F,
                reject: z
              }, P));
          });
        }, m = (E, P, R) => new Proxy(P, {
          apply(T, O, F) {
            return R.call(O, E, ...F);
          }
        });
        let h = Function.call.bind(Object.prototype.hasOwnProperty);
        const v = (E, P = {}, R = {}) => {
          let T = /* @__PURE__ */ Object.create(null), O = {
            has(z, D) {
              return D in E || D in T;
            },
            get(z, D, _) {
              if (D in T)
                return T[D];
              if (!(D in E))
                return;
              let j = E[D];
              if (typeof j == "function")
                if (typeof P[D] == "function")
                  j = m(E, E[D], P[D]);
                else if (h(R, D)) {
                  let M = d(D, R[D]);
                  j = m(E, E[D], M);
                } else
                  j = j.bind(E);
              else if (typeof j == "object" && j !== null && (h(P, D) || h(R, D)))
                j = v(j, P[D], R[D]);
              else if (h(R, "*"))
                j = v(j, P[D], R["*"]);
              else
                return Object.defineProperty(T, D, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return E[D];
                  },
                  set(M) {
                    E[D] = M;
                  }
                }), j;
              return T[D] = j, j;
            },
            set(z, D, _, j) {
              return D in T ? T[D] = _ : E[D] = _, !0;
            },
            defineProperty(z, D, _) {
              return Reflect.defineProperty(T, D, _);
            },
            deleteProperty(z, D) {
              return Reflect.deleteProperty(T, D);
            }
          }, F = Object.create(E);
          return new Proxy(F, O);
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
        const x = new s((E) => typeof E != "function" ? E : function(R, T, O) {
          let F = !1, z, D = new Promise((I) => {
            z = function(N) {
              y || (console.warn(o, new Error().stack), y = !0), F = !0, I(N);
            };
          }), _;
          try {
            _ = E(R, T, z);
          } catch (I) {
            _ = Promise.reject(I);
          }
          const j = _ !== !0 && u(_);
          if (_ !== !0 && !j && !F)
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
          return M(j ? _ : D), !0;
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
          return new Promise((O, F) => {
            const z = b.bind(null, {
              resolve: O,
              reject: F
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
        }, v(l, S, a);
      };
      if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
        throw new Error("This script should only be loaded in a browser extension.");
      n.exports = i(chrome);
    } else
      n.exports = browser;
  });
})(Ex);
const it = Ex.exports;
let $x = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((n) => n(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
  }
});
class ou extends Error {
  constructor(t) {
    super(ou._prepareSuperMessage(t)), Object.defineProperty(this, "name", {
      value: "NonError",
      configurable: !0,
      writable: !0
    }), Error.captureStackTrace && Error.captureStackTrace(this, ou);
  }
  static _prepareSuperMessage(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return String(t);
    }
  }
}
const AE = [
  { property: "name", enumerable: !1 },
  { property: "message", enumerable: !1 },
  { property: "stack", enumerable: !1 },
  { property: "code", enumerable: !0 }
], Dd = Symbol(".toJSON called"), PE = (e) => {
  e[Dd] = !0;
  const t = e.toJSON();
  return delete e[Dd], t;
}, jh = ({
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
    return PE(e);
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
        i++, l[a] = jh({
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
  for (const { property: a, enumerable: s } of AE)
    typeof e[a] == "string" && Object.defineProperty(l, a, {
      value: e[a],
      enumerable: r ? !0 : s,
      configurable: !0,
      writable: !0
    });
  return l;
}, _E = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? jh({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: n,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}, RE = (e, t = {}) => {
  const { maxDepth: n = Number.POSITIVE_INFINITY } = t;
  if (e instanceof Error)
    return e;
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const r = new Error();
    return jh({
      from: e,
      seen: [],
      to_: r,
      maxDepth: n,
      depth: 0
    }), r;
  }
  return new ou(e);
};
var TE = {
  serializeError: _E,
  deserializeError: RE
}, ac = { exports: {} };
const IE = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), Ax = (e = 7, t = !1) => Array.from({ length: e }, IE(t ? 16 : 36)).join("");
ac.exports = Ax;
ac.exports.default = Ax;
var OE = Object.defineProperty, NE = Object.defineProperties, ME = Object.getOwnPropertyDescriptors, i0 = Object.getOwnPropertySymbols, FE = Object.prototype.hasOwnProperty, DE = Object.prototype.propertyIsEnumerable, l0 = (e, t, n) => t in e ? OE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Px = (e, t) => {
  for (var n in t || (t = {}))
    FE.call(t, n) && l0(e, n, t[n]);
  if (i0)
    for (var n of i0(t))
      DE.call(t, n) && l0(e, n, t[n]);
  return e;
}, _x = (e, t) => NE(e, ME(t)), LE = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/, Rx = (e) => {
  const [, t, n] = e.match(LE) || [];
  return {
    context: t,
    tabId: +n
  };
}, ff = (e) => it[e], Me = ff("devtools") ? "devtools" : ff("tabs") ? "background" : ff("extension") ? "content-script" : typeof document < "u" ? "window" : null, a0 = ac.exports(), Ld = /* @__PURE__ */ new Map(), Tx = /* @__PURE__ */ new Map(), zd = /* @__PURE__ */ new Set(), Bd = /* @__PURE__ */ new Map(), Wr = null, iu, Ix;
zE();
function zE() {
  if (Me === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if ((Me === "window" || Me === "content-script") && window.addEventListener("message", jE), Me === "content-script" && top === window && (Wr = it.runtime.connect(), Wr.onMessage.addListener((e) => {
    ei(e);
  })), Me === "devtools") {
    const { tabId: e } = it.devtools.inspectedWindow, t = `devtools@${e}`;
    Wr = it.runtime.connect(void 0, { name: t }), Wr.onMessage.addListener((n) => {
      ei(n);
    }), Wr.onDisconnect.addListener(() => {
      Wr = null;
    });
  }
  Me === "background" && it.runtime.onConnect.addListener((e) => {
    const t = e.name || `content-script@${e.sender.tab.id}`, { tabId: n } = Rx(t);
    !n || (Bd.set(t, e), zd.forEach((r) => {
      r.resolvedDestination === t && (e.postMessage(r.message), zd.delete(r));
    }), e.onDisconnect.addListener(() => {
      Bd.delete(t);
    }), e.onMessage.addListener((r) => {
      var o;
      (o = r == null ? void 0 : r.origin) != null && o.context && (r.origin.tabId = n, ei(r));
    }));
  });
}
function ei(e) {
  const { origin: t, destination: n } = e;
  if (!e.hops.includes(a0) && (e.hops.push(a0), !(Me === "content-script" && [n, t].some((r) => (r == null ? void 0 : r.context) === "window") && !Ix))) {
    if (!n)
      return BE(e);
    if (n.context) {
      if (Me === "window")
        return jd(window, e);
      if (Me === "content-script" && n.context === "window")
        return e.destination = null, jd(window, e);
      if (Me === "devtools" || Me === "content-script")
        return n.context === "background" && (e.destination = null), Wr.postMessage(e);
      if (Me === "background") {
        const { context: r, tabId: o } = n, { tabId: i } = t;
        r !== "window" ? e.destination = null : e.destination.tabId = null;
        const l = `${r === "window" ? "content-script" : r}@${o || i}`, a = Bd.get(l);
        a ? a.postMessage(e) : zd.add({ resolvedDestination: l, message: e });
      }
    }
  }
}
async function BE(e) {
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
      const u = Tx.get(n);
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
      if (a && (e.err = TE.serializeError(a)), ei(_x(Px({}, e), {
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
async function jE({ data: e, ports: t }) {
  if (!(Me === "content-script" && !Ix)) {
    if (e.cmd === "__crx_bridge_verify_listening" && e.scope === iu && e.context !== Me)
      t[0].postMessage(!0);
    else if (e.cmd === "__crx_bridge_route_message" && e.scope === iu && e.context !== Me) {
      const { payload: n } = e;
      Me === "content-script" && (n.origin = {
        context: "window",
        tabId: null
      }), ei(n);
    }
  }
}
function jd(e, t) {
  VE();
  const n = new MessageChannel(), r = setTimeout(() => {
    n.port1.onmessage = null, jd(e, t);
  }, 300);
  n.port1.onmessage = () => {
    clearTimeout(r), e.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: iu,
      context: Me,
      payload: t
    }, "*");
  }, e.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: iu,
    context: Me
  }, "*", [n.port2]);
}
function VE() {
  throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
function Vh(e, t) {
  Tx.set(e, t);
}
async function Sl(e, t, n = "background") {
  const r = typeof n == "string" ? Rx(n) : n, o = "Bridge#sendMessage ->";
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
    Ld.set(a.transactionId, { resolve: i, reject: l }), ei(a);
  });
}
var Lo = class {
  constructor(e) {
    this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, this.internalInfo = e, this.emitter = $x(), this.isClosed = !1, Lo.initDone || (Vh("__crx_bridge_stream_transfer__", (t) => {
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
}, Uh = Lo;
Uh.initDone = !1;
Uh.openStreams = /* @__PURE__ */ new Map();
var UE = /* @__PURE__ */ new Map(), HE = $x();
Vh("__crx_bridge_stream_open__", (e) => new Promise((t) => {
  const { sender: n, data: r } = e, { channel: o } = r;
  let i = !1, l = () => {
  };
  const a = () => {
    const s = UE.get(o);
    typeof s == "function" ? (s(new Uh(_x(Px({}, r), { endpoint: n }))), i && l(), t(!0)) : i || (i = !0, l = HE.on("did-change-stream-callbacks", a));
  };
  a();
}));
var g = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa = Symbol.for("react.element"), WE = Symbol.for("react.portal"), qE = Symbol.for("react.fragment"), QE = Symbol.for("react.strict_mode"), GE = Symbol.for("react.profiler"), KE = Symbol.for("react.provider"), YE = Symbol.for("react.context"), XE = Symbol.for("react.forward_ref"), ZE = Symbol.for("react.suspense"), JE = Symbol.for("react.memo"), e$ = Symbol.for("react.lazy"), s0 = Symbol.iterator;
function t$(e) {
  return e === null || typeof e != "object" ? null : (e = s0 && e[s0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ox = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Nx = Object.assign, Mx = {};
function Oi(e, t, n) {
  this.props = e, this.context = t, this.refs = Mx, this.updater = n || Ox;
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
function Fx() {
}
Fx.prototype = Oi.prototype;
function Hh(e, t, n) {
  this.props = e, this.context = t, this.refs = Mx, this.updater = n || Ox;
}
var Wh = Hh.prototype = new Fx();
Wh.constructor = Hh;
Nx(Wh, Oi.prototype);
Wh.isPureReactComponent = !0;
var u0 = Array.isArray, Dx = Object.prototype.hasOwnProperty, qh = { current: null }, Lx = { key: !0, ref: !0, __self: !0, __source: !0 };
function zx(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Dx.call(t, r) && !Lx.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Fa, type: e, key: i, ref: l, props: o, _owner: qh.current };
}
function n$(e, t) {
  return { $$typeof: Fa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fa;
}
function r$(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var c0 = /\/+/g;
function df(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? r$("" + e.key) : t.toString(36);
}
function zs(e, t, n, r, o) {
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
          case Fa:
          case WE:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + df(l, 0) : r, u0(o) ? (n = "", e != null && (n = e.replace(c0, "$&/") + "/"), zs(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Qh(o) && (o = n$(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(c0, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", u0(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + df(i, a);
      l += zs(i, t, n, s, o);
    }
  else if (s = t$(e), typeof s == "function")
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      i = i.value, s = r + df(i, a++), l += zs(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function ns(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return zs(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function o$(e) {
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
var ht = { current: null }, Bs = { transition: null }, i$ = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: Bs, ReactCurrentOwner: qh };
de.Children = { map: ns, forEach: function(e, t, n) {
  ns(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ns(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ns(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
de.Component = Oi;
de.Fragment = qE;
de.Profiler = GE;
de.PureComponent = Hh;
de.StrictMode = QE;
de.Suspense = ZE;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i$;
de.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Nx({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = qh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (s in t)
      Dx.call(t, s) && !Lx.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
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
  return { $$typeof: Fa, type: e.type, key: o, ref: i, props: r, _owner: l };
};
de.createContext = function(e) {
  return e = { $$typeof: YE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: KE, _context: e }, e.Consumer = e;
};
de.createElement = zx;
de.createFactory = function(e) {
  var t = zx.bind(null, e);
  return t.type = e, t;
};
de.createRef = function() {
  return { current: null };
};
de.forwardRef = function(e) {
  return { $$typeof: XE, render: e };
};
de.isValidElement = Qh;
de.lazy = function(e) {
  return { $$typeof: e$, _payload: { _status: -1, _result: e }, _init: o$ };
};
de.memo = function(e, t) {
  return { $$typeof: JE, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function(e) {
  var t = Bs.transition;
  Bs.transition = {};
  try {
    e();
  } finally {
    Bs.transition = t;
  }
};
de.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
de.useCallback = function(e, t) {
  return ht.current.useCallback(e, t);
};
de.useContext = function(e) {
  return ht.current.useContext(e);
};
de.useDebugValue = function() {
};
de.useDeferredValue = function(e) {
  return ht.current.useDeferredValue(e);
};
de.useEffect = function(e, t) {
  return ht.current.useEffect(e, t);
};
de.useId = function() {
  return ht.current.useId();
};
de.useImperativeHandle = function(e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function(e, t) {
  return ht.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function(e, t) {
  return ht.current.useLayoutEffect(e, t);
};
de.useMemo = function(e, t) {
  return ht.current.useMemo(e, t);
};
de.useReducer = function(e, t, n) {
  return ht.current.useReducer(e, t, n);
};
de.useRef = function(e) {
  return ht.current.useRef(e);
};
de.useState = function(e) {
  return ht.current.useState(e);
};
de.useSyncExternalStore = function(e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function() {
  return ht.current.useTransition();
};
de.version = "18.2.0";
(function(e) {
  e.exports = de;
})(g);
const Ve = /* @__PURE__ */ Bh(g.exports), l$ = /* @__PURE__ */ EE({
  __proto__: null,
  default: Ve
}, [g.exports]);
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
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function a$(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Gh(...e) {
  return (t) => e.forEach(
    (n) => a$(n, t)
  );
}
function we(...e) {
  return g.exports.useCallback(Gh(...e), e);
}
function xo(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = /* @__PURE__ */ g.exports.createContext(l), s = n.length;
    n = [
      ...n,
      l
    ];
    function u(f) {
      const { scope: d, children: m, ...h } = f, v = (d == null ? void 0 : d[e][s]) || a, w = g.exports.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ g.exports.createElement(v.Provider, {
        value: w
      }, m);
    }
    function c(f, d) {
      const m = (d == null ? void 0 : d[e][s]) || a, h = g.exports.useContext(m);
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
    const i = n.map((l) => /* @__PURE__ */ g.exports.createContext(l));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return g.exports.useMemo(
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
    s$(o, ...t)
  ];
}
function s$(...e) {
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
      return g.exports.useMemo(
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
var hn = { exports: {} }, It = {}, Bx = { exports: {} }, jx = {};
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
          var te = 2 * (k + 1) - 1, se = M[te], ee = te + 1, Q = M[ee];
          if (0 > o(se, N))
            ee < C && 0 > o(Q, se) ? (M[k] = Q, M[ee] = N, k = ee) : (M[k] = se, M[te] = N, k = te);
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
  var s = [], u = [], c = 1, f = null, d = 3, m = !1, h = !1, v = !1, w = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
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
        I !== null && j(b, I.startTime - M);
      }
  }
  function A(M, I) {
    h = !1, v && (v = !1, p(E), E = -1), m = !0;
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
        var te = n(u);
        te !== null && j(b, te.startTime - I), J = !1;
      }
      return J;
    } finally {
      f = null, d = N, m = !1;
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
        I ? F() : (S = !1, $ = null);
      }
    } else
      S = !1;
  }
  var F;
  if (typeof y == "function")
    F = function() {
      y(O);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), D = z.port2;
    z.port1.onmessage = O, F = function() {
      D.postMessage(null);
    };
  } else
    F = function() {
      w(O, 0);
    };
  function _(M) {
    $ = M, S || (S = !0, F());
  }
  function j(M, I) {
    E = w(function() {
      M(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    h || m || (h = !0, _(A));
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
    return C = N + C, M = { id: c++, callback: I, priorityLevel: M, startTime: N, expirationTime: C, sortIndex: -1 }, N > k ? (M.sortIndex = N, t(u, M), n(s) === null && M === n(u) && (v ? (p(E), E = -1) : v = !0, j(b, N - k))) : (M.sortIndex = C, t(s, M), h || m || (h = !0, _(A))), M;
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
})(jx);
(function(e) {
  e.exports = jx;
})(Bx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vx = g.exports, Tt = Bx.exports;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ux = /* @__PURE__ */ new Set(), ql = {};
function wo(e, t) {
  xi(e, t), xi(e + "Capture", t);
}
function xi(e, t) {
  for (ql[e] = t, e = 0; e < t.length; e++)
    Ux.add(t[e]);
}
var Un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vd = Object.prototype.hasOwnProperty, u$ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f0 = {}, d0 = {};
function c$(e) {
  return Vd.call(d0, e) ? !0 : Vd.call(f0, e) ? !1 : u$.test(e) ? d0[e] = !0 : (f0[e] = !0, !1);
}
function f$(e, t, n, r) {
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
function d$(e, t, n, r) {
  if (t === null || typeof t > "u" || f$(e, t, n, r))
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
var Kh = /[\-:]([a-z])/g;
function Yh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Kh,
    Yh
  );
  et[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Kh, Yh);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Kh, Yh);
  et[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  et[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xh(e, t, n, r) {
  var o = et.hasOwnProperty(t) ? et[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (d$(t, n, o, r) && (n = null), r || o === null ? c$(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xn = Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, rs = Symbol.for("react.element"), Bo = Symbol.for("react.portal"), jo = Symbol.for("react.fragment"), Zh = Symbol.for("react.strict_mode"), Ud = Symbol.for("react.profiler"), Hx = Symbol.for("react.provider"), Wx = Symbol.for("react.context"), Jh = Symbol.for("react.forward_ref"), Hd = Symbol.for("react.suspense"), Wd = Symbol.for("react.suspense_list"), em = Symbol.for("react.memo"), pr = Symbol.for("react.lazy"), qx = Symbol.for("react.offscreen"), p0 = Symbol.iterator;
function Gi(e) {
  return e === null || typeof e != "object" ? null : (e = p0 && e[p0] || e["@@iterator"], typeof e == "function" ? e : null);
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
function p$(e) {
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
    case jo:
      return "Fragment";
    case Bo:
      return "Portal";
    case Ud:
      return "Profiler";
    case Zh:
      return "StrictMode";
    case Hd:
      return "Suspense";
    case Wd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wx:
        return (e.displayName || "Context") + ".Consumer";
      case Hx:
        return (e._context.displayName || "Context") + ".Provider";
      case Jh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case em:
        return t = e.displayName || null, t !== null ? t : qd(e.type) || "Memo";
      case pr:
        t = e._payload, e = e._init;
        try {
          return qd(e(t));
        } catch {
        }
    }
  return null;
}
function h$(e) {
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
      return t === Zh ? "StrictMode" : "Mode";
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
function Nr(e) {
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
function Qx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function m$(e) {
  var t = Qx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function os(e) {
  e._valueTracker || (e._valueTracker = m$(e));
}
function Gx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Qx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function lu(e) {
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
function h0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Nr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Kx(e, t) {
  t = t.checked, t != null && Xh(e, "checked", t, !1);
}
function Gd(e, t) {
  Kx(e, t);
  var n = Nr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Kd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kd(e, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function m0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Kd(e, t, n) {
  (t !== "number" || lu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gl = Array.isArray;
function ti(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nr(n), t = null, o = 0; o < e.length; o++) {
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
    throw Error(V(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function g0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(V(92));
      if (gl(n)) {
        if (1 < n.length)
          throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Nr(n) };
}
function Yx(e, t) {
  var n = Nr(t.value), r = Nr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function v0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xx(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Xx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var is, Zx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (is = is || document.createElement("div"), is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = is.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Ql(e, t) {
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
}, g$ = ["Webkit", "ms", "Moz", "O"];
Object.keys(kl).forEach(function(e) {
  g$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kl[t] = kl[e];
  });
});
function Jx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kl.hasOwnProperty(e) && kl[e] ? ("" + t).trim() : t + "px";
}
function ew(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Jx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var v$ = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zd(e, t) {
  if (t) {
    if (v$[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(V(62));
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
function tm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var tp = null, ni = null, ri = null;
function y0(e) {
  if (e = za(e)) {
    if (typeof tp != "function")
      throw Error(V(280));
    var t = e.stateNode;
    t && (t = dc(t), tp(e.stateNode, e.type, t));
  }
}
function tw(e) {
  ni ? ri ? ri.push(e) : ri = [e] : ni = e;
}
function nw() {
  if (ni) {
    var e = ni, t = ri;
    if (ri = ni = null, y0(e), t)
      for (e = 0; e < t.length; e++)
        y0(t[e]);
  }
}
function rw(e, t) {
  return e(t);
}
function ow() {
}
var gf = !1;
function iw(e, t, n) {
  if (gf)
    return e(t, n);
  gf = !0;
  try {
    return rw(e, t, n);
  } finally {
    gf = !1, (ni !== null || ri !== null) && (ow(), nw());
  }
}
function Gl(e, t) {
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
    throw Error(V(231, t, typeof n));
  return n;
}
var np = !1;
if (Un)
  try {
    var Ki = {};
    Object.defineProperty(Ki, "passive", { get: function() {
      np = !0;
    } }), window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
  } catch {
    np = !1;
  }
function y$(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Cl = !1, au = null, su = !1, rp = null, x$ = { onError: function(e) {
  Cl = !0, au = e;
} };
function w$(e, t, n, r, o, i, l, a, s) {
  Cl = !1, au = null, y$.apply(x$, arguments);
}
function b$(e, t, n, r, o, i, l, a, s) {
  if (w$.apply(this, arguments), Cl) {
    if (Cl) {
      var u = au;
      Cl = !1, au = null;
    } else
      throw Error(V(198));
    su || (su = !0, rp = u);
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
function lw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function x0(e) {
  if (bo(e) !== e)
    throw Error(V(188));
}
function S$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bo(e), t === null)
      throw Error(V(188));
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
          return x0(o), e;
        if (i === r)
          return x0(o), t;
        i = i.sibling;
      }
      throw Error(V(188));
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
          throw Error(V(189));
      }
    }
    if (n.alternate !== r)
      throw Error(V(190));
  }
  if (n.tag !== 3)
    throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function aw(e) {
  return e = S$(e), e !== null ? sw(e) : null;
}
function sw(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = sw(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var uw = Tt.unstable_scheduleCallback, w0 = Tt.unstable_cancelCallback, k$ = Tt.unstable_shouldYield, C$ = Tt.unstable_requestPaint, Le = Tt.unstable_now, E$ = Tt.unstable_getCurrentPriorityLevel, nm = Tt.unstable_ImmediatePriority, cw = Tt.unstable_UserBlockingPriority, uu = Tt.unstable_NormalPriority, $$ = Tt.unstable_LowPriority, fw = Tt.unstable_IdlePriority, sc = null, Sn = null;
function A$(e) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(sc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var un = Math.clz32 ? Math.clz32 : R$, P$ = Math.log, _$ = Math.LN2;
function R$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (P$(e) / _$ | 0) | 0;
}
var ls = 64, as = 4194304;
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
function cu(e, t) {
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
      n = 31 - un(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function T$(e, t) {
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
function I$(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - un(i), a = 1 << l, s = o[l];
    s === -1 ? ((a & n) === 0 || (a & r) !== 0) && (o[l] = T$(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function op(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function dw() {
  var e = ls;
  return ls <<= 1, (ls & 4194240) === 0 && (ls = 64), e;
}
function vf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Da(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - un(t), e[t] = n;
}
function O$(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - un(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function rm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - un(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var be = 0;
function pw(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var hw, om, mw, gw, vw, ip = !1, ss = [], Cr = null, Er = null, $r = null, Kl = /* @__PURE__ */ new Map(), Yl = /* @__PURE__ */ new Map(), mr = [], N$ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function b0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cr = null;
      break;
    case "dragenter":
    case "dragleave":
      Er = null;
      break;
    case "mouseover":
    case "mouseout":
      $r = null;
      break;
    case "pointerover":
    case "pointerout":
      Kl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yl.delete(t.pointerId);
  }
}
function Yi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = za(t), t !== null && om(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function M$(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Cr = Yi(Cr, e, t, n, r, o), !0;
    case "dragenter":
      return Er = Yi(Er, e, t, n, r, o), !0;
    case "mouseover":
      return $r = Yi($r, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Kl.set(i, Yi(Kl.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Yl.set(i, Yi(Yl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function yw(e) {
  var t = to(e.target);
  if (t !== null) {
    var n = bo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lw(n), t !== null) {
          e.blockedOn = t, vw(e.priority, function() {
            mw(n);
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
function js(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ep = r, n.target.dispatchEvent(r), ep = null;
    } else
      return t = za(n), t !== null && om(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function S0(e, t, n) {
  js(e) && n.delete(t);
}
function F$() {
  ip = !1, Cr !== null && js(Cr) && (Cr = null), Er !== null && js(Er) && (Er = null), $r !== null && js($r) && ($r = null), Kl.forEach(S0), Yl.forEach(S0);
}
function Xi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ip || (ip = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, F$)));
}
function Xl(e) {
  function t(o) {
    return Xi(o, e);
  }
  if (0 < ss.length) {
    Xi(ss[0], e);
    for (var n = 1; n < ss.length; n++) {
      var r = ss[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Cr !== null && Xi(Cr, e), Er !== null && Xi(Er, e), $r !== null && Xi($r, e), Kl.forEach(t), Yl.forEach(t), n = 0; n < mr.length; n++)
    r = mr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mr.length && (n = mr[0], n.blockedOn === null); )
    yw(n), n.blockedOn === null && mr.shift();
}
var oi = Xn.ReactCurrentBatchConfig, fu = !0;
function D$(e, t, n, r) {
  var o = be, i = oi.transition;
  oi.transition = null;
  try {
    be = 1, im(e, t, n, r);
  } finally {
    be = o, oi.transition = i;
  }
}
function L$(e, t, n, r) {
  var o = be, i = oi.transition;
  oi.transition = null;
  try {
    be = 4, im(e, t, n, r);
  } finally {
    be = o, oi.transition = i;
  }
}
function im(e, t, n, r) {
  if (fu) {
    var o = lp(e, t, n, r);
    if (o === null)
      Af(e, t, r, du, n), b0(e, r);
    else if (M$(o, e, t, n, r))
      r.stopPropagation();
    else if (b0(e, r), t & 4 && -1 < N$.indexOf(e)) {
      for (; o !== null; ) {
        var i = za(o);
        if (i !== null && hw(i), i = lp(e, t, n, r), i === null && Af(e, t, r, du, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Af(e, t, r, null, n);
  }
}
var du = null;
function lp(e, t, n, r) {
  if (du = null, e = tm(r), e = to(e), e !== null)
    if (t = bo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = lw(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return du = e, null;
}
function xw(e) {
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
      switch (E$()) {
        case nm:
          return 1;
        case cw:
          return 4;
        case uu:
        case $$:
          return 16;
        case fw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vr = null, lm = null, Vs = null;
function ww() {
  if (Vs)
    return Vs;
  var e, t = lm, n = t.length, r, o = "value" in vr ? vr.value : vr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return Vs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Us(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function us() {
  return !0;
}
function k0() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? us : k0, this.isPropagationStopped = k0, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = us);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = us);
  }, persist: function() {
  }, isPersistent: us }), t;
}
var Ni = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, am = Ot(Ni), La = Oe({}, Ni, { view: 0, detail: 0 }), z$ = Ot(La), yf, xf, Zi, uc = Oe({}, La, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Zi && (Zi && e.type === "mousemove" ? (yf = e.screenX - Zi.screenX, xf = e.screenY - Zi.screenY) : xf = yf = 0, Zi = e), yf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xf;
} }), C0 = Ot(uc), B$ = Oe({}, uc, { dataTransfer: 0 }), j$ = Ot(B$), V$ = Oe({}, La, { relatedTarget: 0 }), wf = Ot(V$), U$ = Oe({}, Ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), H$ = Ot(U$), W$ = Oe({}, Ni, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), q$ = Ot(W$), Q$ = Oe({}, Ni, { data: 0 }), E0 = Ot(Q$), G$ = {
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
}, K$ = {
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
}, Y$ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function X$(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Y$[e]) ? !!t[e] : !1;
}
function sm() {
  return X$;
}
var Z$ = Oe({}, La, { key: function(e) {
  if (e.key) {
    var t = G$[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Us(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K$[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sm, charCode: function(e) {
  return e.type === "keypress" ? Us(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Us(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), J$ = Ot(Z$), eA = Oe({}, uc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $0 = Ot(eA), tA = Oe({}, La, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sm }), nA = Ot(tA), rA = Oe({}, Ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), oA = Ot(rA), iA = Oe({}, uc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), lA = Ot(iA), aA = [9, 13, 27, 32], um = Un && "CompositionEvent" in window, El = null;
Un && "documentMode" in document && (El = document.documentMode);
var sA = Un && "TextEvent" in window && !El, bw = Un && (!um || El && 8 < El && 11 >= El), A0 = String.fromCharCode(32), P0 = !1;
function Sw(e, t) {
  switch (e) {
    case "keyup":
      return aA.indexOf(t.keyCode) !== -1;
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
function kw(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vo = !1;
function uA(e, t) {
  switch (e) {
    case "compositionend":
      return kw(t);
    case "keypress":
      return t.which !== 32 ? null : (P0 = !0, A0);
    case "textInput":
      return e = t.data, e === A0 && P0 ? null : e;
    default:
      return null;
  }
}
function cA(e, t) {
  if (Vo)
    return e === "compositionend" || !um && Sw(e, t) ? (e = ww(), Vs = lm = vr = null, Vo = !1, e) : null;
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
      return bw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fA = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fA[e.type] : t === "textarea";
}
function Cw(e, t, n, r) {
  tw(r), t = pu(t, "onChange"), 0 < t.length && (n = new am("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var $l = null, Zl = null;
function dA(e) {
  Mw(e, 0);
}
function cc(e) {
  var t = Wo(e);
  if (Gx(t))
    return e;
}
function pA(e, t) {
  if (e === "change")
    return t;
}
var Ew = !1;
if (Un) {
  var bf;
  if (Un) {
    var Sf = "oninput" in document;
    if (!Sf) {
      var R0 = document.createElement("div");
      R0.setAttribute("oninput", "return;"), Sf = typeof R0.oninput == "function";
    }
    bf = Sf;
  } else
    bf = !1;
  Ew = bf && (!document.documentMode || 9 < document.documentMode);
}
function T0() {
  $l && ($l.detachEvent("onpropertychange", $w), Zl = $l = null);
}
function $w(e) {
  if (e.propertyName === "value" && cc(Zl)) {
    var t = [];
    Cw(t, Zl, e, tm(e)), iw(dA, t);
  }
}
function hA(e, t, n) {
  e === "focusin" ? (T0(), $l = t, Zl = n, $l.attachEvent("onpropertychange", $w)) : e === "focusout" && T0();
}
function mA(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cc(Zl);
}
function gA(e, t) {
  if (e === "click")
    return cc(t);
}
function vA(e, t) {
  if (e === "input" || e === "change")
    return cc(t);
}
function yA(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dn = typeof Object.is == "function" ? Object.is : yA;
function Jl(e, t) {
  if (dn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vd.call(t, o) || !dn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function I0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function O0(e, t) {
  var n = I0(e);
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
    n = I0(n);
  }
}
function Aw(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Aw(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Pw() {
  for (var e = window, t = lu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = lu(e.document);
  }
  return t;
}
function cm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xA(e) {
  var t = Pw(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Aw(n.ownerDocument.documentElement, n)) {
    if (r !== null && cm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = O0(n, i);
        var l = O0(
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
var wA = Un && "documentMode" in document && 11 >= document.documentMode, Uo = null, ap = null, Al = null, sp = !1;
function N0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sp || Uo == null || Uo !== lu(r) || (r = Uo, "selectionStart" in r && cm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Al && Jl(Al, r) || (Al = r, r = pu(ap, "onSelect"), 0 < r.length && (t = new am("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Uo)));
}
function cs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ho = { animationend: cs("Animation", "AnimationEnd"), animationiteration: cs("Animation", "AnimationIteration"), animationstart: cs("Animation", "AnimationStart"), transitionend: cs("Transition", "TransitionEnd") }, kf = {}, _w = {};
Un && (_w = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);
function fc(e) {
  if (kf[e])
    return kf[e];
  if (!Ho[e])
    return e;
  var t = Ho[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in _w)
      return kf[e] = t[n];
  return e;
}
var Rw = fc("animationend"), Tw = fc("animationiteration"), Iw = fc("animationstart"), Ow = fc("transitionend"), Nw = /* @__PURE__ */ new Map(), M0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dr(e, t) {
  Nw.set(e, t), wo(t, [e]);
}
for (var Cf = 0; Cf < M0.length; Cf++) {
  var Ef = M0[Cf], bA = Ef.toLowerCase(), SA = Ef[0].toUpperCase() + Ef.slice(1);
  Dr(bA, "on" + SA);
}
Dr(Rw, "onAnimationEnd");
Dr(Tw, "onAnimationIteration");
Dr(Iw, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(Ow, "onTransitionEnd");
xi("onMouseEnter", ["mouseout", "mouseover"]);
xi("onMouseLeave", ["mouseout", "mouseover"]);
xi("onPointerEnter", ["pointerout", "pointerover"]);
xi("onPointerLeave", ["pointerout", "pointerover"]);
wo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kA = new Set("cancel close invalid load scroll toggle".split(" ").concat(yl));
function F0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, b$(r, t, void 0, e), e.currentTarget = null;
}
function Mw(e, t) {
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
          F0(o, a, u), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (a = r[l], s = a.instance, u = a.currentTarget, a = a.listener, s !== i && o.isPropagationStopped())
            break e;
          F0(o, a, u), i = s;
        }
    }
  }
  if (su)
    throw e = rp, su = !1, rp = null, e;
}
function $e(e, t) {
  var n = t[pp];
  n === void 0 && (n = t[pp] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fw(t, e, 2, !1), n.add(r));
}
function $f(e, t, n) {
  var r = 0;
  t && (r |= 4), Fw(n, e, r, t);
}
var fs = "_reactListening" + Math.random().toString(36).slice(2);
function ea(e) {
  if (!e[fs]) {
    e[fs] = !0, Ux.forEach(function(n) {
      n !== "selectionchange" && (kA.has(n) || $f(n, !1, e), $f(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fs] || (t[fs] = !0, $f("selectionchange", !1, t));
  }
}
function Fw(e, t, n, r) {
  switch (xw(t)) {
    case 1:
      var o = D$;
      break;
    case 4:
      o = L$;
      break;
    default:
      o = im;
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
            if (l = to(a), l === null)
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
  iw(function() {
    var u = i, c = tm(n), f = [];
    e: {
      var d = Nw.get(e);
      if (d !== void 0) {
        var m = am, h = e;
        switch (e) {
          case "keypress":
            if (Us(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            m = J$;
            break;
          case "focusin":
            h = "focus", m = wf;
            break;
          case "focusout":
            h = "blur", m = wf;
            break;
          case "beforeblur":
          case "afterblur":
            m = wf;
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
            m = C0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = j$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = nA;
            break;
          case Rw:
          case Tw:
          case Iw:
            m = H$;
            break;
          case Ow:
            m = oA;
            break;
          case "scroll":
            m = z$;
            break;
          case "wheel":
            m = lA;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = q$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = $0;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, p !== null && (b = Gl(y, p), b != null && v.push(ta(y, b, x)))), w)
            break;
          y = y.return;
        }
        0 < v.length && (d = new m(d, h, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && n !== ep && (h = n.relatedTarget || n.fromElement) && (to(h) || h[Hn]))
          break e;
        if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (h = n.relatedTarget || n.toElement, m = u, h = h ? to(h) : null, h !== null && (w = bo(h), h !== w || h.tag !== 5 && h.tag !== 6) && (h = null)) : (m = null, h = u), m !== h)) {
          if (v = C0, b = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = $0, b = "onPointerLeave", p = "onPointerEnter", y = "pointer"), w = m == null ? d : Wo(m), x = h == null ? d : Wo(h), d = new v(b, y + "leave", m, n, c), d.target = w, d.relatedTarget = x, b = null, to(c) === u && (v = new v(p, y + "enter", h, n, c), v.target = x, v.relatedTarget = w, b = v), w = b, m && h)
            t: {
              for (v = m, p = h, y = 0, x = v; x; x = Po(x))
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
          m !== null && D0(f, d, m, v, !1), h !== null && w !== null && D0(f, w, h, v, !0);
        }
      }
      e: {
        if (d = u ? Wo(u) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file")
          var A = pA;
        else if (_0(d))
          if (Ew)
            A = vA;
          else {
            A = mA;
            var S = hA;
          }
        else
          (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = gA);
        if (A && (A = A(e, u))) {
          Cw(f, A, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Kd(d, "number", d.value);
      }
      switch (S = u ? Wo(u) : window, e) {
        case "focusin":
          (_0(S) || S.contentEditable === "true") && (Uo = S, ap = u, Al = null);
          break;
        case "focusout":
          Al = ap = Uo = null;
          break;
        case "mousedown":
          sp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sp = !1, N0(f, n, c);
          break;
        case "selectionchange":
          if (wA)
            break;
        case "keydown":
        case "keyup":
          N0(f, n, c);
      }
      var $;
      if (um)
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
        Vo ? Sw(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (bw && n.locale !== "ko" && (Vo || E !== "onCompositionStart" ? E === "onCompositionEnd" && Vo && ($ = ww()) : (vr = c, lm = "value" in vr ? vr.value : vr.textContent, Vo = !0)), S = pu(u, E), 0 < S.length && (E = new E0(E, e, null, n, c), f.push({ event: E, listeners: S }), $ ? E.data = $ : ($ = kw(n), $ !== null && (E.data = $)))), ($ = sA ? uA(e, n) : cA(e, n)) && (u = pu(u, "onBeforeInput"), 0 < u.length && (c = new E0("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = $));
    }
    Mw(f, t);
  });
}
function ta(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Gl(e, n), i != null && r.unshift(ta(e, i, o)), i = Gl(e, t), i != null && r.push(ta(e, i, o))), e = e.return;
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
function D0(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, u = a.stateNode;
    if (s !== null && s === r)
      break;
    a.tag === 5 && u !== null && (a = u, o ? (s = Gl(n, i), s != null && l.unshift(ta(n, s, a))) : o || (s = Gl(n, i), s != null && l.push(ta(n, s, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var CA = /\r\n?/g, EA = /\u0000|\uFFFD/g;
function L0(e) {
  return (typeof e == "string" ? e : "" + e).replace(CA, `
`).replace(EA, "");
}
function ds(e, t, n) {
  if (t = L0(t), L0(e) !== t && n)
    throw Error(V(425));
}
function hu() {
}
var up = null, cp = null;
function fp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var dp = typeof setTimeout == "function" ? setTimeout : void 0, $A = typeof clearTimeout == "function" ? clearTimeout : void 0, z0 = typeof Promise == "function" ? Promise : void 0, AA = typeof queueMicrotask == "function" ? queueMicrotask : typeof z0 < "u" ? function(e) {
  return z0.resolve(null).then(e).catch(PA);
} : dp;
function PA(e) {
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
          e.removeChild(o), Xl(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Xl(t);
}
function Ar(e) {
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
function B0(e) {
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
var Mi = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Mi, na = "__reactProps$" + Mi, Hn = "__reactContainer$" + Mi, pp = "__reactEvents$" + Mi, _A = "__reactListeners$" + Mi, RA = "__reactHandles$" + Mi;
function to(e) {
  var t = e[bn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Hn] || n[bn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = B0(e); e !== null; ) {
          if (n = e[bn])
            return n;
          e = B0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function za(e) {
  return e = e[bn] || e[Hn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(V(33));
}
function dc(e) {
  return e[na] || null;
}
var hp = [], qo = -1;
function Lr(e) {
  return { current: e };
}
function Pe(e) {
  0 > qo || (e.current = hp[qo], hp[qo] = null, qo--);
}
function Ee(e, t) {
  qo++, hp[qo] = e.current, e.current = t;
}
var Mr = {}, lt = Lr(Mr), bt = Lr(!1), uo = Mr;
function wi(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Mr;
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
function mu() {
  Pe(bt), Pe(lt);
}
function j0(e, t, n) {
  if (lt.current !== Mr)
    throw Error(V(168));
  Ee(lt, t), Ee(bt, n);
}
function Dw(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(V(108, h$(e) || "Unknown", o));
  return Oe({}, n, r);
}
function gu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mr, uo = lt.current, Ee(lt, e), Ee(bt, bt.current), !0;
}
function V0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(V(169));
  n ? (e = Dw(e, t, uo), r.__reactInternalMemoizedMergedChildContext = e, Pe(bt), Pe(lt), Ee(lt, e)) : Pe(bt), Ee(bt, n);
}
var Ln = null, pc = !1, _f = !1;
function Lw(e) {
  Ln === null ? Ln = [e] : Ln.push(e);
}
function TA(e) {
  pc = !0, Lw(e);
}
function zr() {
  if (!_f && Ln !== null) {
    _f = !0;
    var e = 0, t = be;
    try {
      var n = Ln;
      for (be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ln = null, pc = !1;
    } catch (o) {
      throw Ln !== null && (Ln = Ln.slice(e + 1)), uw(nm, zr), o;
    } finally {
      be = t, _f = !1;
    }
  }
  return null;
}
var Qo = [], Go = 0, vu = null, yu = 0, Ft = [], Dt = 0, co = null, zn = 1, Bn = "";
function qr(e, t) {
  Qo[Go++] = yu, Qo[Go++] = vu, vu = e, yu = t;
}
function zw(e, t, n) {
  Ft[Dt++] = zn, Ft[Dt++] = Bn, Ft[Dt++] = co, co = e;
  var r = zn;
  e = Bn;
  var o = 32 - un(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - un(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, zn = 1 << 32 - un(t) + o | n << o | r, Bn = i + e;
  } else
    zn = 1 << i | n << o | r, Bn = e;
}
function fm(e) {
  e.return !== null && (qr(e, 1), zw(e, 1, 0));
}
function dm(e) {
  for (; e === vu; )
    vu = Qo[--Go], Qo[Go] = null, yu = Qo[--Go], Qo[Go] = null;
  for (; e === co; )
    co = Ft[--Dt], Ft[Dt] = null, Bn = Ft[--Dt], Ft[Dt] = null, zn = Ft[--Dt], Ft[Dt] = null;
}
var _t = null, $t = null, Re = !1, rn = null;
function Bw(e, t) {
  var n = Ht(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function U0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, $t = Ar(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, $t = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = co !== null ? { id: zn, overflow: Bn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, $t = null, !0) : !1;
    default:
      return !1;
  }
}
function mp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gp(e) {
  if (Re) {
    var t = $t;
    if (t) {
      var n = t;
      if (!U0(e, t)) {
        if (mp(e))
          throw Error(V(418));
        t = Ar(n.nextSibling);
        var r = _t;
        t && U0(e, t) ? Bw(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, _t = e);
      }
    } else {
      if (mp(e))
        throw Error(V(418));
      e.flags = e.flags & -4097 | 2, Re = !1, _t = e;
    }
  }
}
function H0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function ps(e) {
  if (e !== _t)
    return !1;
  if (!Re)
    return H0(e), Re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fp(e.type, e.memoizedProps)), t && (t = $t)) {
    if (mp(e))
      throw jw(), Error(V(418));
    for (; t; )
      Bw(e, t), t = Ar(t.nextSibling);
  }
  if (H0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $t = Ar(e.nextSibling);
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
    $t = _t ? Ar(e.stateNode.nextSibling) : null;
  return !0;
}
function jw() {
  for (var e = $t; e; )
    e = Ar(e.nextSibling);
}
function bi() {
  $t = _t = null, Re = !1;
}
function pm(e) {
  rn === null ? rn = [e] : rn.push(e);
}
var IA = Xn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xu = Lr(null), wu = null, Ko = null, hm = null;
function mm() {
  hm = Ko = wu = null;
}
function gm(e) {
  var t = xu.current;
  Pe(xu), e._currentValue = t;
}
function vp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ii(e, t) {
  wu = e, hm = Ko = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
}
function Qt(e) {
  var t = e._currentValue;
  if (hm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ko === null) {
      if (wu === null)
        throw Error(V(308));
      Ko = e, wu.dependencies = { lanes: 0, firstContext: e };
    } else
      Ko = Ko.next = e;
  return t;
}
var no = null;
function vm(e) {
  no === null ? no = [e] : no.push(e);
}
function Vw(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, vm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Wn(e, r);
}
function Wn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var hr = !1;
function ym(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Uw(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, (ve & 2) !== 0) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Wn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, vm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Wn(e, n);
}
function Hs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rm(e, n);
  }
}
function W0(e, t) {
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
function bu(e, t, n, r) {
  var o = e.updateQueue;
  hr = !1;
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
      var d = a.lane, m = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var h = e, v = a;
          switch (d = t, m = n, v.tag) {
            case 1:
              if (h = v.payload, typeof h == "function") {
                f = h.call(m, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = v.payload, d = typeof h == "function" ? h.call(m, f, d) : h, d == null)
                break e;
              f = Oe({}, f, d);
              break e;
            case 2:
              hr = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [a] : d.push(a));
      } else
        m = { eventTime: m, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = m, s = f) : c = c.next = m, l |= d;
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
    po |= l, e.lanes = l, e.memoizedState = f;
  }
}
function q0(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(V(191, o));
        o.call(r);
      }
    }
}
var Hw = new Vx.Component().refs;
function yp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hc = { isMounted: function(e) {
  return (e = e._reactInternals) ? bo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = Rr(e), i = jn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Pr(e, i, o), t !== null && (cn(t, e, o, r), Hs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pt(), o = Rr(e), i = jn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Pr(e, i, o), t !== null && (cn(t, e, o, r), Hs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pt(), r = Rr(e), o = jn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Pr(e, o, r), t !== null && (cn(t, e, r, n), Hs(t, e, r));
} };
function Q0(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Jl(n, r) || !Jl(o, i) : !0;
}
function Ww(e, t, n) {
  var r = !1, o = Mr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qt(i) : (o = St(t) ? uo : lt.current, r = t.contextTypes, i = (r = r != null) ? wi(e, o) : Mr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function G0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hc.enqueueReplaceState(t, t.state, null);
}
function xp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Hw, ym(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Qt(i) : (i = St(t) ? uo : lt.current, o.context = wi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (yp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hc.enqueueReplaceState(o, o.state, null), bu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ji(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(V(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var a = o.refs;
        a === Hw && (a = o.refs = {}), l === null ? delete a[i] : a[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(V(284));
    if (!n._owner)
      throw Error(V(290, e));
  }
  return e;
}
function hs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function K0(e) {
  var t = e._init;
  return t(e._payload);
}
function qw(e) {
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
    return p = Tr(p, y), p.index = 0, p.sibling = null, p;
  }
  function i(p, y, x) {
    return p.index = x, e ? (x = p.alternate, x !== null ? (x = x.index, x < y ? (p.flags |= 2, y) : x) : (p.flags |= 2, y)) : (p.flags |= 1048576, y);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, y, x, b) {
    return y === null || y.tag !== 6 ? (y = Ff(x, p.mode, b), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function s(p, y, x, b) {
    var A = x.type;
    return A === jo ? c(p, y, x.props.children, b, x.key) : y !== null && (y.elementType === A || typeof A == "object" && A !== null && A.$$typeof === pr && K0(A) === y.type) ? (b = o(y, x.props), b.ref = Ji(p, y, x), b.return = p, b) : (b = Ys(x.type, x.key, x.props, null, p.mode, b), b.ref = Ji(p, y, x), b.return = p, b);
  }
  function u(p, y, x, b) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = Df(x, p.mode, b), y.return = p, y) : (y = o(y, x.children || []), y.return = p, y);
  }
  function c(p, y, x, b, A) {
    return y === null || y.tag !== 7 ? (y = io(x, p.mode, b, A), y.return = p, y) : (y = o(y, x), y.return = p, y);
  }
  function f(p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Ff("" + y, p.mode, x), y.return = p, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case rs:
          return x = Ys(y.type, y.key, y.props, null, p.mode, x), x.ref = Ji(p, null, y), x.return = p, x;
        case Bo:
          return y = Df(y, p.mode, x), y.return = p, y;
        case pr:
          var b = y._init;
          return f(p, b(y._payload), x);
      }
      if (gl(y) || Gi(y))
        return y = io(y, p.mode, x, null), y.return = p, y;
      hs(p, y);
    }
    return null;
  }
  function d(p, y, x, b) {
    var A = y !== null ? y.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return A !== null ? null : a(p, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case rs:
          return x.key === A ? s(p, y, x, b) : null;
        case Bo:
          return x.key === A ? u(p, y, x, b) : null;
        case pr:
          return A = x._init, d(
            p,
            y,
            A(x._payload),
            b
          );
      }
      if (gl(x) || Gi(x))
        return A !== null ? null : c(p, y, x, b, null);
      hs(p, x);
    }
    return null;
  }
  function m(p, y, x, b, A) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return p = p.get(x) || null, a(y, p, "" + b, A);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case rs:
          return p = p.get(b.key === null ? x : b.key) || null, s(y, p, b, A);
        case Bo:
          return p = p.get(b.key === null ? x : b.key) || null, u(y, p, b, A);
        case pr:
          var S = b._init;
          return m(p, y, x, S(b._payload), A);
      }
      if (gl(b) || Gi(b))
        return p = p.get(x) || null, c(y, p, b, A, null);
      hs(y, b);
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
      return n(p, $), Re && qr(p, E), A;
    if ($ === null) {
      for (; E < x.length; E++)
        $ = f(p, x[E], b), $ !== null && (y = i($, y, E), S === null ? A = $ : S.sibling = $, S = $);
      return Re && qr(p, E), A;
    }
    for ($ = r(p, $); E < x.length; E++)
      P = m($, p, E, x[E], b), P !== null && (e && P.alternate !== null && $.delete(P.key === null ? E : P.key), y = i(P, y, E), S === null ? A = P : S.sibling = P, S = P);
    return e && $.forEach(function(T) {
      return t(p, T);
    }), Re && qr(p, E), A;
  }
  function v(p, y, x, b) {
    var A = Gi(x);
    if (typeof A != "function")
      throw Error(V(150));
    if (x = A.call(x), x == null)
      throw Error(V(151));
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
      ), Re && qr(p, E), A;
    if ($ === null) {
      for (; !R.done; E++, R = x.next())
        R = f(p, R.value, b), R !== null && (y = i(R, y, E), S === null ? A = R : S.sibling = R, S = R);
      return Re && qr(p, E), A;
    }
    for ($ = r(p, $); !R.done; E++, R = x.next())
      R = m($, p, E, R.value, b), R !== null && (e && R.alternate !== null && $.delete(R.key === null ? E : R.key), y = i(R, y, E), S === null ? A = R : S.sibling = R, S = R);
    return e && $.forEach(function(O) {
      return t(p, O);
    }), Re && qr(p, E), A;
  }
  function w(p, y, x, b) {
    if (typeof x == "object" && x !== null && x.type === jo && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case rs:
          e: {
            for (var A = x.key, S = y; S !== null; ) {
              if (S.key === A) {
                if (A = x.type, A === jo) {
                  if (S.tag === 7) {
                    n(p, S.sibling), y = o(S, x.props.children), y.return = p, p = y;
                    break e;
                  }
                } else if (S.elementType === A || typeof A == "object" && A !== null && A.$$typeof === pr && K0(A) === S.type) {
                  n(p, S.sibling), y = o(S, x.props), y.ref = Ji(p, S, x), y.return = p, p = y;
                  break e;
                }
                n(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            x.type === jo ? (y = io(x.props.children, p.mode, b, x.key), y.return = p, p = y) : (b = Ys(x.type, x.key, x.props, null, p.mode, b), b.ref = Ji(p, y, x), b.return = p, p = b);
          }
          return l(p);
        case Bo:
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
        case pr:
          return S = x._init, w(p, y, S(x._payload), b);
      }
      if (gl(x))
        return h(p, y, x, b);
      if (Gi(x))
        return v(p, y, x, b);
      hs(p, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, y !== null && y.tag === 6 ? (n(p, y.sibling), y = o(y, x), y.return = p, p = y) : (n(p, y), y = Ff(x, p.mode, b), y.return = p, p = y), l(p)) : n(p, y);
  }
  return w;
}
var Si = qw(!0), Qw = qw(!1), Ba = {}, kn = Lr(Ba), ra = Lr(Ba), oa = Lr(Ba);
function ro(e) {
  if (e === Ba)
    throw Error(V(174));
  return e;
}
function xm(e, t) {
  switch (Ee(oa, t), Ee(ra, e), Ee(kn, Ba), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xd(t, e);
  }
  Pe(kn), Ee(kn, t);
}
function ki() {
  Pe(kn), Pe(ra), Pe(oa);
}
function Gw(e) {
  ro(oa.current);
  var t = ro(kn.current), n = Xd(t, e.type);
  t !== n && (Ee(ra, e), Ee(kn, n));
}
function wm(e) {
  ra.current === e && (Pe(kn), Pe(ra));
}
var Te = Lr(0);
function Su(e) {
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
function bm() {
  for (var e = 0; e < Rf.length; e++)
    Rf[e]._workInProgressVersionPrimary = null;
  Rf.length = 0;
}
var Ws = Xn.ReactCurrentDispatcher, Tf = Xn.ReactCurrentBatchConfig, fo = 0, Ie = null, qe = null, Ge = null, ku = !1, Pl = !1, ia = 0, OA = 0;
function tt() {
  throw Error(V(321));
}
function Sm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dn(e[n], t[n]))
      return !1;
  return !0;
}
function km(e, t, n, r, o, i) {
  if (fo = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ws.current = e === null || e.memoizedState === null ? DA : LA, e = n(r, o), Pl) {
    i = 0;
    do {
      if (Pl = !1, ia = 0, 25 <= i)
        throw Error(V(301));
      i += 1, Ge = qe = null, t.updateQueue = null, Ws.current = zA, e = n(r, o);
    } while (Pl);
  }
  if (Ws.current = Cu, t = qe !== null && qe.next !== null, fo = 0, Ge = qe = Ie = null, ku = !1, t)
    throw Error(V(300));
  return e;
}
function Cm() {
  var e = ia !== 0;
  return ia = 0, e;
}
function vn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? Ie.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
}
function Gt() {
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
      throw Error(V(310));
    qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Ge === null ? Ie.memoizedState = Ge = e : Ge = Ge.next = e;
  }
  return Ge;
}
function la(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function If(e) {
  var t = Gt(), n = t.queue;
  if (n === null)
    throw Error(V(311));
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
      if ((fo & c) === c)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (a = s = f, l = r) : s = s.next = f, Ie.lanes |= c, po |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? l = r : s.next = a, dn(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ie.lanes |= i, po |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Of(e) {
  var t = Gt(), n = t.queue;
  if (n === null)
    throw Error(V(311));
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
function Kw() {
}
function Yw(e, t) {
  var n = Ie, r = Gt(), o = t(), i = !dn(r.memoizedState, o);
  if (i && (r.memoizedState = o, wt = !0), r = r.queue, Em(Jw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, aa(9, Zw.bind(null, n, r, o, t), void 0, null), Ye === null)
      throw Error(V(349));
    (fo & 30) !== 0 || Xw(n, t, o);
  }
  return o;
}
function Xw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, eb(t) && tb(e);
}
function Jw(e, t, n) {
  return n(function() {
    eb(t) && tb(e);
  });
}
function eb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dn(e, n);
  } catch {
    return !0;
  }
}
function tb(e) {
  var t = Wn(e, 1);
  t !== null && cn(t, e, 1, -1);
}
function Y0(e) {
  var t = vn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: la, lastRenderedState: e }, t.queue = e, e = e.dispatch = FA.bind(null, Ie, e), [t.memoizedState, e];
}
function aa(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nb() {
  return Gt().memoizedState;
}
function qs(e, t, n, r) {
  var o = vn();
  Ie.flags |= e, o.memoizedState = aa(1 | t, n, void 0, r === void 0 ? null : r);
}
function mc(e, t, n, r) {
  var o = Gt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (qe !== null) {
    var l = qe.memoizedState;
    if (i = l.destroy, r !== null && Sm(r, l.deps)) {
      o.memoizedState = aa(t, n, i, r);
      return;
    }
  }
  Ie.flags |= e, o.memoizedState = aa(1 | t, n, i, r);
}
function X0(e, t) {
  return qs(8390656, 8, e, t);
}
function Em(e, t) {
  return mc(2048, 8, e, t);
}
function rb(e, t) {
  return mc(4, 2, e, t);
}
function ob(e, t) {
  return mc(4, 4, e, t);
}
function ib(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function lb(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mc(4, 4, ib.bind(null, t, e), n);
}
function $m() {
}
function ab(e, t) {
  var n = Gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function sb(e, t) {
  var n = Gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ub(e, t, n) {
  return (fo & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (dn(n, t) || (n = dw(), Ie.lanes |= n, po |= n, e.baseState = !0), t);
}
function NA(e, t) {
  var n = be;
  be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Tf.transition;
  Tf.transition = {};
  try {
    e(!1), t();
  } finally {
    be = n, Tf.transition = r;
  }
}
function cb() {
  return Gt().memoizedState;
}
function MA(e, t, n) {
  var r = Rr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fb(e))
    db(t, n);
  else if (n = Vw(e, t, n, r), n !== null) {
    var o = pt();
    cn(n, e, r, o), pb(n, t, r);
  }
}
function FA(e, t, n) {
  var r = Rr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fb(e))
    db(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, a = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = a, dn(a, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, vm(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Vw(e, t, o, r), n !== null && (o = pt(), cn(n, e, r, o), pb(n, t, r));
  }
}
function fb(e) {
  var t = e.alternate;
  return e === Ie || t !== null && t === Ie;
}
function db(e, t) {
  Pl = ku = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pb(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rm(e, n);
  }
}
var Cu = { readContext: Qt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, DA = { readContext: Qt, useCallback: function(e, t) {
  return vn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qt, useEffect: X0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qs(
    4194308,
    4,
    ib.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return qs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return qs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = MA.bind(null, Ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Y0, useDebugValue: $m, useDeferredValue: function(e) {
  return vn().memoizedState = e;
}, useTransition: function() {
  var e = Y0(!1), t = e[0];
  return e = NA.bind(null, e[1]), vn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ie, o = vn();
  if (Re) {
    if (n === void 0)
      throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Ye === null)
      throw Error(V(349));
    (fo & 30) !== 0 || Xw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, X0(Jw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, aa(9, Zw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vn(), t = Ye.identifierPrefix;
  if (Re) {
    var n = Bn, r = zn;
    n = (r & ~(1 << 32 - un(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ia++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = OA++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, LA = {
  readContext: Qt,
  useCallback: ab,
  useContext: Qt,
  useEffect: Em,
  useImperativeHandle: lb,
  useInsertionEffect: rb,
  useLayoutEffect: ob,
  useMemo: sb,
  useReducer: If,
  useRef: nb,
  useState: function() {
    return If(la);
  },
  useDebugValue: $m,
  useDeferredValue: function(e) {
    var t = Gt();
    return ub(t, qe.memoizedState, e);
  },
  useTransition: function() {
    var e = If(la)[0], t = Gt().memoizedState;
    return [e, t];
  },
  useMutableSource: Kw,
  useSyncExternalStore: Yw,
  useId: cb,
  unstable_isNewReconciler: !1
}, zA = { readContext: Qt, useCallback: ab, useContext: Qt, useEffect: Em, useImperativeHandle: lb, useInsertionEffect: rb, useLayoutEffect: ob, useMemo: sb, useReducer: Of, useRef: nb, useState: function() {
  return Of(la);
}, useDebugValue: $m, useDeferredValue: function(e) {
  var t = Gt();
  return qe === null ? t.memoizedState = e : ub(t, qe.memoizedState, e);
}, useTransition: function() {
  var e = Of(la)[0], t = Gt().memoizedState;
  return [e, t];
}, useMutableSource: Kw, useSyncExternalStore: Yw, useId: cb, unstable_isNewReconciler: !1 };
function Ci(e, t) {
  try {
    var n = "", r = t;
    do
      n += p$(r), r = r.return;
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
var BA = typeof WeakMap == "function" ? WeakMap : Map;
function hb(e, t, n) {
  n = jn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    $u || ($u = !0, Rp = r), wp(e, t);
  }, n;
}
function mb(e, t, n) {
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
    wp(e, t), typeof r != "function" && (_r === null ? _r = /* @__PURE__ */ new Set([this]) : _r.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Z0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new BA();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = e5.bind(null, e, t, n), t.then(e, e));
}
function J0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ev(e, t, n, r, o) {
  return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jn(-1, 1), t.tag = 2, Pr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
}
var jA = Xn.ReactCurrentOwner, wt = !1;
function ft(e, t, n, r) {
  t.child = e === null ? Qw(t, null, n, r) : Si(t, e.child, n, r);
}
function tv(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ii(t, o), r = km(e, t, n, r, i, o), n = Cm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, qn(e, t, o)) : (Re && n && fm(t), t.flags |= 1, ft(e, t, r, o), t.child);
}
function nv(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Nm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, gb(e, t, i, r, o)) : (e = Ys(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, (e.lanes & o) === 0) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jl, n(l, r) && e.ref === t.ref)
      return qn(e, t, o);
  }
  return t.flags |= 1, e = Tr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function gb(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jl(i, r) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        (e.flags & 131072) !== 0 && (wt = !0);
      else
        return t.lanes = e.lanes, qn(e, t, o);
  }
  return bp(e, t, n, r, o);
}
function vb(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(Xo, Et), Et |= n;
    else {
      if ((n & 1073741824) === 0)
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ee(Xo, Et), Et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ee(Xo, Et), Et |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ee(Xo, Et), Et |= r;
  return ft(e, t, o, n), t.child;
}
function yb(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bp(e, t, n, r, o) {
  var i = St(n) ? uo : lt.current;
  return i = wi(t, i), ii(t, o), n = km(e, t, n, r, i, o), r = Cm(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, qn(e, t, o)) : (Re && r && fm(t), t.flags |= 1, ft(e, t, n, o), t.child);
}
function rv(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    gu(t);
  } else
    i = !1;
  if (ii(t, o), t.stateNode === null)
    Qs(e, t), Ww(t, n, r), xp(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var s = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Qt(u) : (u = St(n) ? uo : lt.current, u = wi(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && G0(t, l, r, u), hr = !1;
    var d = t.memoizedState;
    l.state = d, bu(t, r, l, o), s = t.memoizedState, a !== r || d !== s || bt.current || hr ? (typeof c == "function" && (yp(t, n, c, r), s = t.memoizedState), (a = hr || Q0(t, n, a, r, d, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Uw(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : tn(t.type, a), l.props = u, f = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Qt(s) : (s = St(n) ? uo : lt.current, s = wi(t, s));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== s) && G0(t, l, r, s), hr = !1, d = t.memoizedState, l.state = d, bu(t, r, l, o);
    var h = t.memoizedState;
    a !== f || d !== h || bt.current || hr ? (typeof m == "function" && (yp(t, n, m, r), h = t.memoizedState), (u = hr || Q0(t, n, u, r, d, h, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, h, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, h, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sp(e, t, n, r, i, o);
}
function Sp(e, t, n, r, o, i) {
  yb(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && V0(t, n, !1), qn(e, t, i);
  r = t.stateNode, jA.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Si(t, e.child, null, i), t.child = Si(t, null, a, i)) : ft(e, t, a, i), t.memoizedState = r.state, o && V0(t, n, !0), t.child;
}
function xb(e) {
  var t = e.stateNode;
  t.pendingContext ? j0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && j0(e, t.context, !1), xm(e, t.containerInfo);
}
function ov(e, t, n, r, o) {
  return bi(), pm(o), t.flags |= 256, ft(e, t, n, r), t.child;
}
var kp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wb(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(Te, o & 1), e === null)
    return gp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = yc(l, r, 0, null), e = io(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cp(n), t.memoizedState = kp, e) : Am(t, l));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return VA(e, t, l, r, a, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, a = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return (l & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Tr(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Tr(a, i) : (i = io(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Cp(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = kp, r;
  }
  return i = e.child, e = i.sibling, r = Tr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Am(e, t) {
  return t = yc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ms(e, t, n, r) {
  return r !== null && pm(r), Si(t, e.child, null, n), e = Am(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function VA(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Nf(Error(V(422))), ms(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = yc({ mode: "visible", children: r.children }, o, 0, null), i = io(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Si(t, e.child, null, l), t.child.memoizedState = Cp(l), t.memoizedState = kp, i);
  if ((t.mode & 1) === 0)
    return ms(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, i = Error(V(419)), r = Nf(i, r, void 0), ms(e, t, l, r);
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
      o = (o & (r.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Wn(e, o), cn(r, e, o, -1));
    }
    return Om(), r = Nf(Error(V(421))), ms(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = t5.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, $t = Ar(o.nextSibling), _t = t, Re = !0, rn = null, e !== null && (Ft[Dt++] = zn, Ft[Dt++] = Bn, Ft[Dt++] = co, zn = e.id, Bn = e.overflow, co = t), t = Am(t, r.children), t.flags |= 4096, t);
}
function iv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vp(e.return, t, n);
}
function Mf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function bb(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ft(e, t, r.children, n), r = Te.current, (r & 2) !== 0)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && iv(e, n, t);
          else if (e.tag === 19)
            iv(e, n, t);
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
          e = n.alternate, e !== null && Su(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Mf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Su(e) === null) {
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
function Qs(e, t) {
  (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), po |= t.lanes, (n & t.childLanes) === 0)
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Tr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Tr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function UA(e, t, n) {
  switch (t.tag) {
    case 3:
      xb(t), bi();
      break;
    case 5:
      Gw(t);
      break;
    case 1:
      St(t.type) && gu(t);
      break;
    case 4:
      xm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ee(xu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ee(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wb(e, t, n) : (Ee(Te, Te.current & 1), e = qn(e, t, n), e !== null ? e.sibling : null);
      Ee(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (r)
          return bb(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(Te, Te.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, vb(e, t, n);
  }
  return qn(e, t, n);
}
var Sb, Ep, kb, Cb;
Sb = function(e, t) {
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
Ep = function() {
};
kb = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ro(kn.current);
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
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hu);
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
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ql.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ql.hasOwnProperty(u) ? (s != null && u === "onScroll" && $e("scroll", e), i || a === s || (i = [])) : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cb = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function el(e, t) {
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
function HA(e, t, n) {
  var r = t.pendingProps;
  switch (dm(t), t.tag) {
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
      return St(t.type) && mu(), nt(t), null;
    case 3:
      return r = t.stateNode, ki(), Pe(bt), Pe(lt), bm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ps(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rn !== null && (Op(rn), rn = null))), Ep(e, t), nt(t), null;
    case 5:
      wm(t);
      var o = ro(oa.current);
      if (n = t.type, e !== null && t.stateNode != null)
        kb(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(V(166));
          return nt(t), null;
        }
        if (e = ro(kn.current), ps(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[bn] = t, r[na] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < yl.length; o++)
                $e(yl[o], r);
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
              h0(r, i), $e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, $e("invalid", r);
              break;
            case "textarea":
              g0(r, i), $e("invalid", r);
          }
          Zd(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ds(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ds(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : ql.hasOwnProperty(l) && a != null && l === "onScroll" && $e("scroll", r);
            }
          switch (n) {
            case "input":
              os(r), m0(r, i, !0);
              break;
            case "textarea":
              os(r), v0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = hu);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[bn] = t, e[na] = r, Sb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Jd(n, r), n) {
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
                for (o = 0; o < yl.length; o++)
                  $e(yl[o], e);
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
                h0(e, r), o = Qd(e, r), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), $e("invalid", e);
                break;
              case "textarea":
                g0(e, r), o = Yd(e, r), $e("invalid", e);
                break;
              default:
                o = r;
            }
            Zd(n, o), a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style" ? ew(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Zx(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Ql(e, s) : typeof s == "number" && Ql(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ql.hasOwnProperty(i) ? s != null && i === "onScroll" && $e("scroll", e) : s != null && Xh(e, i, s, l));
              }
            switch (n) {
              case "input":
                os(e), m0(e, r, !1);
                break;
              case "textarea":
                os(e), v0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nr(r.value));
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
                typeof o.onClick == "function" && (e.onclick = hu);
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
        Cb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(V(166));
        if (n = ro(oa.current), ro(kn.current), ps(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[bn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null))
            switch (e.tag) {
              case 3:
                ds(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ds(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = t, t.stateNode = r;
      }
      return nt(t), null;
    case 13:
      if (Pe(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Re && $t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          jw(), bi(), t.flags |= 98560, i = !1;
        else if (i = ps(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(V(317));
            i[bn] = t;
          } else
            bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
          nt(t), i = !1;
        } else
          rn !== null && (Op(rn), rn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? Qe === 0 && (Qe = 3) : Om())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
    case 4:
      return ki(), Ep(e, t), e === null && ea(t.stateNode.containerInfo), nt(t), null;
    case 10:
      return gm(t.type._context), nt(t), null;
    case 17:
      return St(t.type) && mu(), nt(t), null;
    case 19:
      if (Pe(Te), i = t.memoizedState, i === null)
        return nt(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          el(i, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
            for (e = t.child; e !== null; ) {
              if (l = Su(e), l !== null) {
                for (t.flags |= 128, el(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Ee(Te, Te.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Le() > Ei && (t.flags |= 128, r = !0, el(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Su(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), el(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
              return nt(t), null;
          } else
            2 * Le() - i.renderingStartTime > Ei && n !== 1073741824 && (t.flags |= 128, r = !0, el(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Le(), t.sibling = null, n = Te.current, Ee(Te, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
    case 22:
    case 23:
      return Im(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Et & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function WA(e, t) {
  switch (dm(t), t.tag) {
    case 1:
      return St(t.type) && mu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ki(), Pe(bt), Pe(lt), bm(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return wm(t), null;
    case 13:
      if (Pe(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(V(340));
        bi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Te), null;
    case 4:
      return ki(), null;
    case 10:
      return gm(t.type._context), null;
    case 22:
    case 23:
      return Im(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gs = !1, rt = !1, qA = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function Yo(e, t) {
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
var lv = !1;
function QA(e, t) {
  if (up = fu, e = Pw(), cm(e)) {
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
              for (var m; f !== n || o !== 0 && f.nodeType !== 3 || (a = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (m = f.firstChild) !== null; )
                d = f, f = m;
              for (; ; ) {
                if (f === e)
                  break t;
                if (d === n && ++u === o && (a = l), d === i && ++c === r && (s = l), (m = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = m;
            }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (cp = { focusedElem: e, selectionRange: n }, fu = !1, Y = t; Y !== null; )
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
                throw Error(V(163));
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
  return h = lv, lv = !1, h;
}
function _l(e, t, n) {
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
function Eb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Eb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[bn], delete t[na], delete t[pp], delete t[_A], delete t[RA])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $b(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function av(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $b(e.return))
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hu));
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
var Xe = null, nn = !1;
function ar(e, t, n) {
  for (n = n.child; n !== null; )
    Ab(e, t, n), n = n.sibling;
}
function Ab(e, t, n) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(sc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      rt || Yo(n, t);
    case 6:
      var r = Xe, o = nn;
      Xe = null, ar(e, t, n), Xe = r, nn = o, Xe !== null && (nn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null && (nn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? Pf(e.parentNode, n) : e.nodeType === 1 && Pf(e, n), Xl(e)) : Pf(Xe, n.stateNode));
      break;
    case 4:
      r = Xe, o = nn, Xe = n.stateNode.containerInfo, nn = !0, ar(e, t, n), Xe = r, nn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && $p(n, t, l), o = o.next;
        } while (o !== r);
      }
      ar(e, t, n);
      break;
    case 1:
      if (!rt && (Yo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Ne(n, t, a);
        }
      ar(e, t, n);
      break;
    case 21:
      ar(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (rt = (r = rt) || n.memoizedState !== null, ar(e, t, n), rt = r) : ar(e, t, n);
      break;
    default:
      ar(e, t, n);
  }
}
function sv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qA()), t.forEach(function(r) {
      var o = n5.bind(null, e, r);
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
                Xe = a.stateNode, nn = !1;
                break e;
              case 3:
                Xe = a.stateNode.containerInfo, nn = !0;
                break e;
              case 4:
                Xe = a.stateNode.containerInfo, nn = !0;
                break e;
            }
            a = a.return;
          }
        if (Xe === null)
          throw Error(V(160));
        Ab(i, l, o), Xe = null, nn = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Pb(t, e), t = t.sibling;
}
function Pb(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Zt(t, e), gn(e), r & 4) {
        try {
          _l(3, e, e.return), gc(3, e);
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
      Zt(t, e), gn(e), r & 512 && n !== null && Yo(n, n.return);
      break;
    case 5:
      if (Zt(t, e), gn(e), r & 512 && n !== null && Yo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ql(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            a === "input" && i.type === "radio" && i.name != null && Kx(o, i), Jd(a, l);
            var u = Jd(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l], f = s[l + 1];
              c === "style" ? ew(o, f) : c === "dangerouslySetInnerHTML" ? Zx(o, f) : c === "children" ? Ql(o, f) : Xh(o, c, f, u);
            }
            switch (a) {
              case "input":
                Gd(o, i);
                break;
              case "textarea":
                Yx(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null ? ti(o, !!i.multiple, m, !1) : d !== !!i.multiple && (i.defaultValue != null ? ti(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ti(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[na] = i;
          } catch (v) {
            Ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if (Zt(t, e), gn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Zt(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Xl(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      Zt(t, e), gn(e);
      break;
    case 13:
      Zt(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Rm = Le())), r & 4 && sv(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (u = rt) || c, Zt(t, e), rt = u) : Zt(t, e), gn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
          for (Y = e, c = e.child; c !== null; ) {
            for (f = Y = c; Y !== null; ) {
              switch (d = Y, m = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _l(4, d, d.return);
                  break;
                case 1:
                  Yo(d, d.return);
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
                  Yo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    cv(f);
                    continue;
                  }
              }
              m !== null ? (m.return = d, Y = m) : cv(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Jx("display", l));
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
      Zt(t, e), gn(e), r & 4 && sv(e);
      break;
    case 21:
      break;
    default:
      Zt(
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
          if ($b(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ql(o, ""), r.flags &= -33);
          var i = av(e);
          _p(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = av(e);
          Pp(e, a, l);
          break;
        default:
          throw Error(V(161));
      }
    } catch (s) {
      Ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function GA(e, t, n) {
  Y = e, _b(e);
}
function _b(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || gs;
      if (!l) {
        var a = o.alternate, s = a !== null && a.memoizedState !== null || rt;
        a = gs;
        var u = rt;
        if (gs = l, (rt = s) && !u)
          for (Y = o; Y !== null; )
            l = Y, s = l.child, l.tag === 22 && l.memoizedState !== null ? fv(o) : s !== null ? (s.return = l, Y = s) : fv(o);
        for (; i !== null; )
          Y = i, _b(i), i = i.sibling;
        Y = o, gs = a, rt = u;
      }
      uv(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, Y = i) : uv(e);
  }
}
function uv(e) {
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
              rt || gc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !rt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && q0(t, i, r);
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
                q0(t, l, n);
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
                    f !== null && Xl(f);
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
              throw Error(V(163));
          }
        rt || t.flags & 512 && Ap(t);
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
function cv(e) {
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
function fv(e) {
  for (; Y !== null; ) {
    var t = Y;
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
var KA = Math.ceil, Eu = Xn.ReactCurrentDispatcher, Pm = Xn.ReactCurrentOwner, qt = Xn.ReactCurrentBatchConfig, ve = 0, Ye = null, Ue = null, Je = 0, Et = 0, Xo = Lr(0), Qe = 0, sa = null, po = 0, vc = 0, _m = 0, Rl = null, xt = null, Rm = 0, Ei = 1 / 0, Nn = null, $u = !1, Rp = null, _r = null, vs = !1, yr = null, Au = 0, Tl = 0, Tp = null, Gs = -1, Ks = 0;
function pt() {
  return (ve & 6) !== 0 ? Le() : Gs !== -1 ? Gs : Gs = Le();
}
function Rr(e) {
  return (e.mode & 1) === 0 ? 1 : (ve & 2) !== 0 && Je !== 0 ? Je & -Je : IA.transition !== null ? (Ks === 0 && (Ks = dw()), Ks) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xw(e.type)), e);
}
function cn(e, t, n, r) {
  if (50 < Tl)
    throw Tl = 0, Tp = null, Error(V(185));
  Da(e, n, r), ((ve & 2) === 0 || e !== Ye) && (e === Ye && ((ve & 2) === 0 && (vc |= n), Qe === 4 && gr(e, Je)), kt(e, r), n === 1 && ve === 0 && (t.mode & 1) === 0 && (Ei = Le() + 500, pc && zr()));
}
function kt(e, t) {
  var n = e.callbackNode;
  I$(e, t);
  var r = cu(e, e === Ye ? Je : 0);
  if (r === 0)
    n !== null && w0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && w0(n), t === 1)
      e.tag === 0 ? TA(dv.bind(null, e)) : Lw(dv.bind(null, e)), AA(function() {
        (ve & 6) === 0 && zr();
      }), n = null;
    else {
      switch (pw(r)) {
        case 1:
          n = nm;
          break;
        case 4:
          n = cw;
          break;
        case 16:
          n = uu;
          break;
        case 536870912:
          n = fw;
          break;
        default:
          n = uu;
      }
      n = Db(n, Rb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Rb(e, t) {
  if (Gs = -1, Ks = 0, (ve & 6) !== 0)
    throw Error(V(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n)
    return null;
  var r = cu(e, e === Ye ? Je : 0);
  if (r === 0)
    return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
    t = Pu(e, r);
  else {
    t = r;
    var o = ve;
    ve |= 2;
    var i = Ib();
    (Ye !== e || Je !== t) && (Nn = null, Ei = Le() + 500, oo(e, t));
    do
      try {
        ZA();
        break;
      } catch (a) {
        Tb(e, a);
      }
    while (1);
    mm(), Eu.current = i, ve = o, Ue !== null ? t = 0 : (Ye = null, Je = 0, t = Qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = op(e), o !== 0 && (r = o, t = Ip(e, o))), t === 1)
      throw n = sa, oo(e, 0), gr(e, r), kt(e, Le()), n;
    if (t === 6)
      gr(e, r);
    else {
      if (o = e.current.alternate, (r & 30) === 0 && !YA(o) && (t = Pu(e, r), t === 2 && (i = op(e), i !== 0 && (r = i, t = Ip(e, i))), t === 1))
        throw n = sa, oo(e, 0), gr(e, r), kt(e, Le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          Qr(e, xt, Nn);
          break;
        case 3:
          if (gr(e, r), (r & 130023424) === r && (t = Rm + 500 - Le(), 10 < t)) {
            if (cu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              pt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = dp(Qr.bind(null, e, xt, Nn), t);
            break;
          }
          Qr(e, xt, Nn);
          break;
        case 4:
          if (gr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - un(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KA(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = dp(Qr.bind(null, e, xt, Nn), r);
            break;
          }
          Qr(e, xt, Nn);
          break;
        case 5:
          Qr(e, xt, Nn);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return kt(e, Le()), e.callbackNode === n ? Rb.bind(null, e) : null;
}
function Ip(e, t) {
  var n = Rl;
  return e.current.memoizedState.isDehydrated && (oo(e, t).flags |= 256), e = Pu(e, t), e !== 2 && (t = xt, xt = n, t !== null && Op(t)), e;
}
function Op(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function YA(e) {
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
function gr(e, t) {
  for (t &= ~_m, t &= ~vc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - un(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function dv(e) {
  if ((ve & 6) !== 0)
    throw Error(V(327));
  li();
  var t = cu(e, 0);
  if ((t & 1) === 0)
    return kt(e, Le()), null;
  var n = Pu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = op(e);
    r !== 0 && (t = r, n = Ip(e, r));
  }
  if (n === 1)
    throw n = sa, oo(e, 0), gr(e, t), kt(e, Le()), n;
  if (n === 6)
    throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qr(e, xt, Nn), kt(e, Le()), null;
}
function Tm(e, t) {
  var n = ve;
  ve |= 1;
  try {
    return e(t);
  } finally {
    ve = n, ve === 0 && (Ei = Le() + 500, pc && zr());
  }
}
function ho(e) {
  yr !== null && yr.tag === 0 && (ve & 6) === 0 && li();
  var t = ve;
  ve |= 1;
  var n = qt.transition, r = be;
  try {
    if (qt.transition = null, be = 1, e)
      return e();
  } finally {
    be = r, qt.transition = n, ve = t, (ve & 6) === 0 && zr();
  }
}
function Im() {
  Et = Xo.current, Pe(Xo);
}
function oo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $A(n)), Ue !== null)
    for (n = Ue.return; n !== null; ) {
      var r = n;
      switch (dm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && mu();
          break;
        case 3:
          ki(), Pe(bt), Pe(lt), bm();
          break;
        case 5:
          wm(r);
          break;
        case 4:
          ki();
          break;
        case 13:
          Pe(Te);
          break;
        case 19:
          Pe(Te);
          break;
        case 10:
          gm(r.type._context);
          break;
        case 22:
        case 23:
          Im();
      }
      n = n.return;
    }
  if (Ye = e, Ue = e = Tr(e.current, null), Je = Et = t, Qe = 0, sa = null, _m = vc = po = 0, xt = Rl = null, no !== null) {
    for (t = 0; t < no.length; t++)
      if (n = no[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    no = null;
  }
  return e;
}
function Tb(e, t) {
  do {
    var n = Ue;
    try {
      if (mm(), Ws.current = Cu, ku) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ku = !1;
      }
      if (fo = 0, Ge = qe = Ie = null, Pl = !1, ia = 0, Pm.current = null, n === null || n.return === null) {
        Qe = 1, sa = t, Ue = null;
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
          var m = J0(l);
          if (m !== null) {
            m.flags &= -257, ev(m, l, a, i, t), m.mode & 1 && Z0(i, u, t), t = m, s = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else
              h.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              Z0(i, u, t), Om();
              break e;
            }
            s = Error(V(426));
          }
        } else if (Re && a.mode & 1) {
          var w = J0(l);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256), ev(w, l, a, i, t), pm(Ci(s, a));
            break e;
          }
        }
        i = s = Ci(s, a), Qe !== 4 && (Qe = 2), Rl === null ? Rl = [i] : Rl.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = hb(i, s, t);
              W0(i, p);
              break e;
            case 1:
              a = s;
              var y = i.type, x = i.stateNode;
              if ((i.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (_r === null || !_r.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = mb(i, a, t);
                W0(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Nb(n);
    } catch (A) {
      t = A, Ue === n && n !== null && (Ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ib() {
  var e = Eu.current;
  return Eu.current = Cu, e === null ? Cu : e;
}
function Om() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Ye === null || (po & 268435455) === 0 && (vc & 268435455) === 0 || gr(Ye, Je);
}
function Pu(e, t) {
  var n = ve;
  ve |= 2;
  var r = Ib();
  (Ye !== e || Je !== t) && (Nn = null, oo(e, t));
  do
    try {
      XA();
      break;
    } catch (o) {
      Tb(e, o);
    }
  while (1);
  if (mm(), ve = n, Eu.current = r, Ue !== null)
    throw Error(V(261));
  return Ye = null, Je = 0, Qe;
}
function XA() {
  for (; Ue !== null; )
    Ob(Ue);
}
function ZA() {
  for (; Ue !== null && !k$(); )
    Ob(Ue);
}
function Ob(e) {
  var t = Fb(e.alternate, e, Et);
  e.memoizedProps = e.pendingProps, t === null ? Nb(e) : Ue = t, Pm.current = null;
}
function Nb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, (t.flags & 32768) === 0) {
      if (n = HA(n, t, Et), n !== null) {
        Ue = n;
        return;
      }
    } else {
      if (n = WA(n, t), n !== null) {
        n.flags &= 32767, Ue = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Qe = 6, Ue = null;
        return;
      }
    }
    if (t = t.sibling, t !== null) {
      Ue = t;
      return;
    }
    Ue = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function Qr(e, t, n) {
  var r = be, o = qt.transition;
  try {
    qt.transition = null, be = 1, JA(e, t, n, r);
  } finally {
    qt.transition = o, be = r;
  }
  return null;
}
function JA(e, t, n, r) {
  do
    li();
  while (yr !== null);
  if ((ve & 6) !== 0)
    throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (O$(e, i), e === Ye && (Ue = Ye = null, Je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vs || (vs = !0, Db(uu, function() {
    return li(), null;
  })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
    i = qt.transition, qt.transition = null;
    var l = be;
    be = 1;
    var a = ve;
    ve |= 4, Pm.current = null, QA(e, n), Pb(n, e), xA(cp), fu = !!up, cp = up = null, e.current = n, GA(n), C$(), ve = a, be = l, qt.transition = i;
  } else
    e.current = n;
  if (vs && (vs = !1, yr = e, Au = o), i = e.pendingLanes, i === 0 && (_r = null), A$(n.stateNode), kt(e, Le()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if ($u)
    throw $u = !1, e = Rp, Rp = null, e;
  return (Au & 1) !== 0 && e.tag !== 0 && li(), i = e.pendingLanes, (i & 1) !== 0 ? e === Tp ? Tl++ : (Tl = 0, Tp = e) : Tl = 0, zr(), null;
}
function li() {
  if (yr !== null) {
    var e = pw(Au), t = qt.transition, n = be;
    try {
      if (qt.transition = null, be = 16 > e ? 16 : e, yr === null)
        var r = !1;
      else {
        if (e = yr, yr = null, Au = 0, (ve & 6) !== 0)
          throw Error(V(331));
        var o = ve;
        for (ve |= 4, Y = e.current; Y !== null; ) {
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
                      _l(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, Y = f;
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var d = c.sibling, m = c.return;
                      if (Eb(c), c === u) {
                        Y = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = m, Y = d;
                        break;
                      }
                      Y = m;
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
                      _l(9, i, i.return);
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
                if (a = Y, (a.flags & 2048) !== 0)
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
        if (ve = o, zr(), Sn && typeof Sn.onPostCommitFiberRoot == "function")
          try {
            Sn.onPostCommitFiberRoot(sc, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      be = n, qt.transition = t;
    }
  }
  return !1;
}
function pv(e, t, n) {
  t = Ci(n, t), t = hb(e, t, 1), e = Pr(e, t, 1), t = pt(), e !== null && (Da(e, 1, t), kt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3)
    pv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
          e = Ci(n, e), e = mb(t, e, 1), t = Pr(t, e, 1), e = pt(), t !== null && (Da(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function e5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Je & n) === n && (Qe === 4 || Qe === 3 && (Je & 130023424) === Je && 500 > Le() - Rm ? oo(e, 0) : _m |= n), kt(e, t);
}
function Mb(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = as, as <<= 1, (as & 130023424) === 0 && (as = 4194304)));
  var n = pt();
  e = Wn(e, t), e !== null && (Da(e, t, n), kt(e, n));
}
function t5(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Mb(e, n);
}
function n5(e, t) {
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
      throw Error(V(314));
  }
  r !== null && r.delete(t), Mb(e, n);
}
var Fb;
Fb = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || bt.current)
      wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return wt = !1, UA(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
  else
    wt = !1, Re && (t.flags & 1048576) !== 0 && zw(t, yu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qs(e, t), e = t.pendingProps;
      var o = wi(t, lt.current);
      ii(t, n), o = km(null, t, r, e, o, n);
      var i = Cm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, gu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ym(t), o.updater = hc, t.stateNode = o, o._reactInternals = t, xp(t, r, e, n), t = Sp(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && fm(t), ft(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = o5(r), e = tn(r, e), o) {
          case 0:
            t = bp(null, t, r, e, n);
            break e;
          case 1:
            t = rv(null, t, r, e, n);
            break e;
          case 11:
            t = tv(null, t, r, e, n);
            break e;
          case 14:
            t = nv(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(V(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), bp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), rv(e, t, r, o, n);
    case 3:
      e: {
        if (xb(t), e === null)
          throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Uw(e, t), bu(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ci(Error(V(423)), t), t = ov(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Ci(Error(V(424)), t), t = ov(e, t, r, n, o);
            break e;
          } else
            for ($t = Ar(t.stateNode.containerInfo.firstChild), _t = t, Re = !0, rn = null, n = Qw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (bi(), r === o) {
            t = qn(e, t, n);
            break e;
          }
          ft(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Gw(t), e === null && gp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, fp(r, o) ? l = null : i !== null && fp(r, i) && (t.flags |= 32), yb(e, t), ft(e, t, l, n), t.child;
    case 6:
      return e === null && gp(t), null;
    case 13:
      return wb(e, t, n);
    case 4:
      return xm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Si(t, null, r, n) : ft(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), tv(e, t, r, o, n);
    case 7:
      return ft(e, t, t.pendingProps, n), t.child;
    case 8:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Ee(xu, r._currentValue), r._currentValue = l, i !== null)
          if (dn(i.value, l)) {
            if (i.children === o.children && !bt.current) {
              t = qn(e, t, n);
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
                  throw Error(V(341));
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
        ft(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ii(t, n), o = Qt(o), r = r(o), t.flags |= 1, ft(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = tn(r, t.pendingProps), o = tn(r.type, o), nv(e, t, r, o, n);
    case 15:
      return gb(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : tn(r, o), Qs(e, t), t.tag = 1, St(r) ? (e = !0, gu(t)) : e = !1, ii(t, n), Ww(t, r, o), xp(t, r, o, n), Sp(null, t, r, !0, e, n);
    case 19:
      return bb(e, t, n);
    case 22:
      return vb(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Db(e, t) {
  return uw(e, t);
}
function r5(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ht(e, t, n, r) {
  return new r5(e, t, n, r);
}
function Nm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function o5(e) {
  if (typeof e == "function")
    return Nm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Jh)
      return 11;
    if (e === em)
      return 14;
  }
  return 2;
}
function Tr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ys(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    Nm(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case jo:
          return io(n.children, o, i, t);
        case Zh:
          l = 8, o |= 8;
          break;
        case Ud:
          return e = Ht(12, n, t, o | 2), e.elementType = Ud, e.lanes = i, e;
        case Hd:
          return e = Ht(13, n, t, o), e.elementType = Hd, e.lanes = i, e;
        case Wd:
          return e = Ht(19, n, t, o), e.elementType = Wd, e.lanes = i, e;
        case qx:
          return yc(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Hx:
                l = 10;
                break e;
              case Wx:
                l = 9;
                break e;
              case Jh:
                l = 11;
                break e;
              case em:
                l = 14;
                break e;
              case pr:
                l = 16, r = null;
                break e;
            }
          throw Error(V(130, e == null ? e : typeof e, ""));
      }
  return t = Ht(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function io(e, t, n, r) {
  return e = Ht(7, e, r, t), e.lanes = n, e;
}
function yc(e, t, n, r) {
  return e = Ht(22, e, r, t), e.elementType = qx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ff(e, t, n) {
  return e = Ht(6, e, null, t), e.lanes = n, e;
}
function Df(e, t, n) {
  return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function i5(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vf(0), this.expirationTimes = vf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Mm(e, t, n, r, o, i, l, a, s) {
  return e = new i5(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ht(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ym(i), e;
}
function l5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Bo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Lb(e) {
  if (!e)
    return Mr;
  e = e._reactInternals;
  e: {
    if (bo(e) !== e || e.tag !== 1)
      throw Error(V(170));
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
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (St(n))
      return Dw(e, n, t);
  }
  return t;
}
function zb(e, t, n, r, o, i, l, a, s) {
  return e = Mm(n, r, !0, e, o, i, l, a, s), e.context = Lb(null), n = e.current, r = pt(), o = Rr(n), i = jn(r, o), i.callback = t != null ? t : null, Pr(n, i, o), e.current.lanes = o, Da(e, o, r), kt(e, r), e;
}
function xc(e, t, n, r) {
  var o = t.current, i = pt(), l = Rr(o);
  return n = Lb(n), t.context === null ? t.context = n : t.pendingContext = n, t = jn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pr(o, t, l), e !== null && (cn(e, o, l, i), Hs(e, o, l)), l;
}
function _u(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fm(e, t) {
  hv(e, t), (e = e.alternate) && hv(e, t);
}
function a5() {
  return null;
}
var Bb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Dm(e) {
  this._internalRoot = e;
}
wc.prototype.render = Dm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(V(409));
  xc(e, t, null, null);
};
wc.prototype.unmount = Dm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ho(function() {
      xc(null, e, null, null);
    }), t[Hn] = null;
  }
};
function wc(e) {
  this._internalRoot = e;
}
wc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = gw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mr.length && t !== 0 && t < mr[n].priority; n++)
      ;
    mr.splice(n, 0, e), n === 0 && yw(e);
  }
};
function Lm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mv() {
}
function s5(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = _u(l);
        i.call(u);
      };
    }
    var l = zb(t, r, e, 0, null, !1, !1, "", mv);
    return e._reactRootContainer = l, e[Hn] = l.current, ea(e.nodeType === 8 ? e.parentNode : e), ho(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = _u(s);
      a.call(u);
    };
  }
  var s = Mm(e, 0, !1, null, null, !1, !1, "", mv);
  return e._reactRootContainer = s, e[Hn] = s.current, ea(e.nodeType === 8 ? e.parentNode : e), ho(function() {
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
        var s = _u(l);
        a.call(s);
      };
    }
    xc(t, l, e, o);
  } else
    l = s5(n, t, e, o, r);
  return _u(l);
}
hw = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vl(t.pendingLanes);
        n !== 0 && (rm(t, n | 1), kt(t, Le()), (ve & 6) === 0 && (Ei = Le() + 500, zr()));
      }
      break;
    case 13:
      ho(function() {
        var r = Wn(e, 1);
        if (r !== null) {
          var o = pt();
          cn(r, e, 1, o);
        }
      }), Fm(e, 1);
  }
};
om = function(e) {
  if (e.tag === 13) {
    var t = Wn(e, 134217728);
    if (t !== null) {
      var n = pt();
      cn(t, e, 134217728, n);
    }
    Fm(e, 134217728);
  }
};
mw = function(e) {
  if (e.tag === 13) {
    var t = Rr(e), n = Wn(e, t);
    if (n !== null) {
      var r = pt();
      cn(n, e, t, r);
    }
    Fm(e, t);
  }
};
gw = function() {
  return be;
};
vw = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
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
            var o = dc(r);
            if (!o)
              throw Error(V(90));
            Gx(r), Gd(r, o);
          }
        }
      }
      break;
    case "textarea":
      Yx(e, n);
      break;
    case "select":
      t = n.value, t != null && ti(e, !!n.multiple, t, !1);
  }
};
rw = Tm;
ow = ho;
var u5 = { usingClientEntryPoint: !1, Events: [za, Wo, dc, tw, nw, Tm] }, tl = { findFiberByHostInstance: to, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, c5 = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = aw(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || a5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ys.isDisabled && ys.supportsFiber)
    try {
      sc = ys.inject(c5), Sn = ys;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u5;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lm(t))
    throw Error(V(200));
  return l5(e, t, null, n);
};
It.createRoot = function(e, t) {
  if (!Lm(e))
    throw Error(V(299));
  var n = !1, r = "", o = Bb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Mm(e, 1, !1, null, null, n, !1, r, o), e[Hn] = t.current, ea(e.nodeType === 8 ? e.parentNode : e), new Dm(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = aw(t), e = e === null ? null : e.stateNode, e;
};
It.flushSync = function(e) {
  return ho(e);
};
It.hydrate = function(e, t, n) {
  if (!bc(t))
    throw Error(V(200));
  return Sc(null, e, t, !0, n);
};
It.hydrateRoot = function(e, t, n) {
  if (!Lm(e))
    throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Bb;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = zb(t, null, e, 1, n != null ? n : null, o, !1, i, l), e[Hn] = t.current, ea(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wc(t);
};
It.render = function(e, t, n) {
  if (!bc(t))
    throw Error(V(200));
  return Sc(null, e, t, !1, n);
};
It.unmountComponentAtNode = function(e) {
  if (!bc(e))
    throw Error(V(40));
  return e._reactRootContainer ? (ho(function() {
    Sc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Hn] = null;
    });
  }), !0) : !1;
};
It.unstable_batchedUpdates = Tm;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bc(n))
    throw Error(V(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(V(38));
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
})(hn);
const jb = /* @__PURE__ */ Bh(hn.exports), $i = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = g.exports.Children.toArray(n), i = o.find(d5);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? g.exports.Children.count(l) > 1 ? g.exports.Children.only(null) : /* @__PURE__ */ g.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ g.exports.createElement(Np, G({}, r, {
      ref: t
    }), /* @__PURE__ */ g.exports.isValidElement(l) ? /* @__PURE__ */ g.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ g.exports.createElement(Np, G({}, r, {
    ref: t
  }), n);
});
$i.displayName = "Slot";
const Np = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ g.exports.isValidElement(n) ? /* @__PURE__ */ g.exports.cloneElement(n, {
    ...p5(r, n.props),
    ref: Gh(t, n.ref)
  }) : g.exports.Children.count(n) > 1 ? g.exports.Children.only(null) : null;
});
Np.displayName = "SlotClone";
const f5 = ({ children: e }) => /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, e);
function d5(e) {
  return /* @__PURE__ */ g.exports.isValidElement(e) && e.type === f5;
}
function p5(e, t) {
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
const h5 = [
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
], He = h5.reduce((e, t) => {
  const n = /* @__PURE__ */ g.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? $i : t;
    return g.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ g.exports.createElement(a, G({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function m5(e, t) {
  e && hn.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function ze(e) {
  const t = g.exports.useRef(e);
  return g.exports.useEffect(() => {
    t.current = e;
  }), g.exports.useMemo(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function g5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
  g.exports.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Mp = "dismissableLayer.update", v5 = "dismissableLayer.pointerDownOutside", y5 = "dismissableLayer.focusOutside";
let gv;
const x5 = /* @__PURE__ */ g.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zm = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: a, onDismiss: s, ...u } = e, c = g.exports.useContext(x5), [f, d] = g.exports.useState(null), m = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = g.exports.useState({}), v = we(
    t,
    (E) => d(E)
  ), w = Array.from(c.layers), [p] = [
    ...c.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(p), x = f ? w.indexOf(f) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= y, S = w5((E) => {
    const P = E.target, R = [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    );
    !A || R || (i == null || i(E), a == null || a(E), E.defaultPrevented || s == null || s());
  }, m), $ = b5((E) => {
    const P = E.target;
    [
      ...c.branches
    ].some(
      (T) => T.contains(P)
    ) || (l == null || l(E), a == null || a(E), E.defaultPrevented || s == null || s());
  }, m);
  return g5((E) => {
    x === c.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
  }, m), g.exports.useEffect(() => {
    if (!!f)
      return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (gv = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), vv(), () => {
        r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = gv);
      };
  }, [
    f,
    m,
    r,
    c
  ]), g.exports.useEffect(() => () => {
    !f || (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), vv());
  }, [
    f,
    c
  ]), g.exports.useEffect(() => {
    const E = () => h({});
    return document.addEventListener(Mp, E), () => document.removeEventListener(Mp, E);
  }, []), /* @__PURE__ */ g.exports.createElement(He.div, G({}, u, {
    ref: v,
    style: {
      pointerEvents: b ? A ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ce(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: ce(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: ce(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function w5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = g.exports.useRef(!1), o = g.exports.useRef(() => {
  });
  return g.exports.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          Vb(v5, n, u, {
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
function b5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = g.exports.useRef(!1);
  return g.exports.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Vb(y5, n, {
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
function vv() {
  const e = new CustomEvent(Mp);
  document.dispatchEvent(e);
}
function Vb(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? m5(o, i) : o.dispatchEvent(i);
}
let Lf = 0;
function kc() {
  g.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : yv()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : yv()), Lf++, () => {
      Lf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Lf--;
    };
  }, []);
}
function yv() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const zf = "focusScope.autoFocusOnMount", Bf = "focusScope.autoFocusOnUnmount", xv = {
  bubbles: !1,
  cancelable: !0
}, Bm = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = g.exports.useState(null), u = ze(o), c = ze(i), f = g.exports.useRef(null), d = we(
    t,
    (v) => s(v)
  ), m = g.exports.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.exports.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (m.paused || !a)
          return;
        const b = x.target;
        a.contains(b) ? f.current = b : Gr(f.current, {
          select: !0
        });
      }, y = function(x) {
        m.paused || !a || a.contains(x.relatedTarget) || Gr(f.current, {
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
    m.paused
  ]), g.exports.useEffect(() => {
    if (a) {
      bv.add(m);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(zf, xv);
        a.addEventListener(zf, u), a.dispatchEvent(p), p.defaultPrevented || (S5(A5(Ub(a)), {
          select: !0
        }), document.activeElement === v && Gr(a));
      }
      return () => {
        a.removeEventListener(zf, u), setTimeout(() => {
          const p = new CustomEvent(Bf, xv);
          a.addEventListener(Bf, c), a.dispatchEvent(p), p.defaultPrevented || Gr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(Bf, c), bv.remove(m);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    m
  ]);
  const h = g.exports.useCallback((v) => {
    if (!n && !r || m.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = k5(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Gr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Gr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ g.exports.createElement(He.div, G({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function S5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Gr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function k5(e) {
  const t = Ub(e), n = wv(t, e), r = wv(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Ub(e) {
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
function wv(e, t) {
  for (const n of e)
    if (!C5(n, {
      upTo: t
    }))
      return n;
}
function C5(e, { upTo: t }) {
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
function E5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && E5(e) && t && e.select();
  }
}
const bv = $5();
function $5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Sv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Sv(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Sv(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function A5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Ze = Boolean(globalThis == null ? void 0 : globalThis.document) ? g.exports.useLayoutEffect : () => {
}, P5 = l$["useId".toString()] || (() => {
});
let _5 = 0;
function Vn(e) {
  const [t, n] = g.exports.useState(P5());
  return Ze(() => {
    e || n(
      (r) => r != null ? r : String(_5++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function So(e) {
  return e.split("-")[0];
}
function ja(e) {
  return e.split("-")[1];
}
function Fi(e) {
  return ["top", "bottom"].includes(So(e)) ? "x" : "y";
}
function jm(e) {
  return e === "y" ? "height" : "width";
}
function kv(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, l = r.y + r.height / 2 - o.height / 2, a = Fi(t), s = jm(a), u = r[s] / 2 - o[s] / 2, c = So(t), f = a === "x";
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
  switch (ja(t)) {
    case "start":
      d[a] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[a] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const R5 = async (e, t, n) => {
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
  } = kv(s, r, a), f = r, d = {}, m = 0;
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
    }, b && m <= 50) {
      m++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (s = b.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : b.rects), {
        x: u,
        y: c
      } = kv(s, f, a)), h = -1;
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
function T5(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hb(e) {
  return typeof e != "number" ? T5(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ru(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function ua(e, t) {
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
    padding: m = 0
  } = t, h = Hb(m), w = a[d ? f === "floating" ? "reference" : "floating" : f], p = Ru(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: s
  })), y = Ru(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const I5 = Math.min, Kr = Math.max;
function Fp(e, t, n) {
  return Kr(e, I5(t, n));
}
const Cv = (e) => ({
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
    const u = Hb(r), c = {
      x: o,
      y: i
    }, f = Fi(l), d = ja(l), m = jm(f), h = await s.getDimensions(n), v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", p = a.reference[m] + a.reference[f] - c[f] - a.floating[m], y = c[f] - a.reference[f], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let b = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = a.floating[m]);
    const A = p / 2 - y / 2, S = u[v], $ = b - h[m] - u[w], E = b / 2 - h[m] / 2 + A, P = Fp(S, E, $), O = (d === "start" ? u[v] : u[w]) > 0 && E !== P && a.reference[m] <= a.floating[m] ? E < S ? S - E : $ - E : 0;
    return {
      [f]: c[f] - O,
      data: {
        [f]: P,
        centerOffset: E - P
      }
    };
  }
}), O5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Tu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => O5[t]);
}
function N5(e, t, n) {
  n === void 0 && (n = !1);
  const r = ja(e), o = Fi(e), i = jm(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Tu(l)), {
    main: l,
    cross: Tu(l)
  };
}
const M5 = {
  start: "end",
  end: "start"
};
function Ev(e) {
  return e.replace(/start|end/g, (t) => M5[t]);
}
const F5 = ["top", "right", "bottom", "left"];
function D5(e) {
  const t = Tu(e);
  return [Ev(e), t, Ev(t)];
}
const L5 = function(e) {
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
        flipAlignment: m = !0,
        ...h
      } = e, v = So(r), p = f || (v === l || !m ? [Tu(l)] : D5(l)), y = [l, ...p], x = await ua(t, h), b = [];
      let A = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && b.push(x[v]), c) {
        const {
          main: P,
          cross: R
        } = N5(r, i, await (a.isRTL == null ? void 0 : a.isRTL(s.floating)));
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
            const O = (E = A.map((F) => [F, F.overflows.filter((z) => z > 0).reduce((z, D) => z + D, 0)]).sort((F, z) => F[1] - z[1])[0]) == null ? void 0 : E[0].placement;
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
function $v(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Av(e) {
  return F5.some((t) => e[t] >= 0);
}
const z5 = function(e) {
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
          const i = await ua(r, {
            ...n,
            elementContext: "reference"
          }), l = $v(i, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Av(l)
            }
          };
        }
        case "escaped": {
          const i = await ua(r, {
            ...n,
            altBoundary: !0
          }), l = $v(i, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Av(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function B5(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = So(n), a = ja(n), s = Fi(n) === "x", u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: d,
    crossAxis: m,
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
  return a && typeof h == "number" && (m = a === "end" ? h * -1 : h), s ? {
    x: m * c,
    y: d * u
  } : {
    x: d * u,
    y: m * c
  };
}
const j5 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await B5(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Wb(e) {
  return e === "x" ? "y" : "x";
}
const V5 = function(e) {
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
      }, c = await ua(t, s), f = Fi(So(o)), d = Wb(f);
      let m = u[f], h = u[d];
      if (i) {
        const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = m + c[w], x = m - c[p];
        m = Fp(y, m, x);
      }
      if (l) {
        const w = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", y = h + c[w], x = h - c[p];
        h = Fp(y, h, x);
      }
      const v = a.fn({
        ...t,
        [f]: m,
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
}, U5 = function(e) {
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
      }, f = Fi(o), d = Wb(f);
      let m = c[f], h = c[d];
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
        const A = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[A] + w.mainAxis, $ = i.reference[f] + i.reference[A] - w.mainAxis;
        m < S ? m = S : m > $ && (m = $);
      }
      if (u) {
        var p, y, x, b;
        const A = f === "y" ? "width" : "height", S = ["top", "left"].includes(So(o)), $ = i.reference[d] - i.floating[A] + (S && (p = (y = l.offset) == null ? void 0 : y[d]) != null ? p : 0) + (S ? 0 : w.crossAxis), E = i.reference[d] + i.reference[A] + (S ? 0 : (x = (b = l.offset) == null ? void 0 : b[d]) != null ? x : 0) - (S ? w.crossAxis : 0);
        h < $ ? h = $ : h > E && (h = E);
      }
      return {
        [f]: m,
        [d]: h
      };
    }
  };
}, H5 = function(e) {
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
      } = e, s = await ua(t, a), u = So(n), c = ja(n);
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (d = u, f = c === "end" ? "top" : "bottom");
      const m = Kr(s.left, 0), h = Kr(s.right, 0), v = Kr(s.top, 0), w = Kr(s.bottom, 0), p = {
        availableHeight: r.floating.height - (["left", "right"].includes(n) ? 2 * (v !== 0 || w !== 0 ? v + w : Kr(s.top, s.bottom)) : s[f]),
        availableWidth: r.floating.width - (["top", "bottom"].includes(n) ? 2 * (m !== 0 || h !== 0 ? m + h : Kr(s.left, s.right)) : s[d])
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
function qb(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Zn(e) {
  if (e == null)
    return window;
  if (!qb(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Va(e) {
  return Zn(e).getComputedStyle(e);
}
function Qn(e) {
  return qb(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Qb() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Cn(e) {
  return e instanceof Zn(e).HTMLElement;
}
function Fr(e) {
  return e instanceof Zn(e).Element;
}
function W5(e) {
  return e instanceof Zn(e).Node;
}
function Vm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Zn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Cc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Va(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function q5(e) {
  return ["table", "td", "th"].includes(Qn(e));
}
function Gb(e) {
  const t = /firefox/i.test(Qb()), n = Va(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function Kb() {
  return !/^((?!chrome|android).)*safari/i.test(Qb());
}
const Pv = Math.min, Il = Math.max, Iu = Math.round;
function Gn(e, t, n) {
  var r, o, i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect();
  let s = 1, u = 1;
  t && Cn(e) && (s = e.offsetWidth > 0 && Iu(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && Iu(a.height) / e.offsetHeight || 1);
  const c = Fr(e) ? Zn(e) : window, f = !Kb() && n, d = (a.left + (f && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / s, m = (a.top + (f && (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null ? i : 0)) / u, h = a.width / s, v = a.height / u;
  return {
    width: h,
    height: v,
    top: m,
    right: d + h,
    bottom: m + v,
    left: d,
    x: d,
    y: m
  };
}
function Br(e) {
  return ((W5(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ec(e) {
  return Fr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Yb(e) {
  return Gn(Br(e)).left + Ec(e).scrollLeft;
}
function Q5(e) {
  const t = Gn(e);
  return Iu(t.width) !== e.offsetWidth || Iu(t.height) !== e.offsetHeight;
}
function G5(e, t, n) {
  const r = Cn(t), o = Br(t), i = Gn(
    e,
    r && Q5(t),
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
    if ((Qn(t) !== "body" || Cc(o)) && (l = Ec(t)), Cn(t)) {
      const s = Gn(t, !0);
      a.x = s.x + t.clientLeft, a.y = s.y + t.clientTop;
    } else
      o && (a.x = Yb(o));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function Xb(e) {
  return Qn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Vm(e) ? e.host : null) || Br(e);
}
function _v(e) {
  return !Cn(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function K5(e) {
  let t = Xb(e);
  for (Vm(t) && (t = t.host); Cn(t) && !["html", "body"].includes(Qn(t)); ) {
    if (Gb(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Dp(e) {
  const t = Zn(e);
  let n = _v(e);
  for (; n && q5(n) && getComputedStyle(n).position === "static"; )
    n = _v(n);
  return n && (Qn(n) === "html" || Qn(n) === "body" && getComputedStyle(n).position === "static" && !Gb(n)) ? t : n || K5(e) || t;
}
function Rv(e) {
  if (Cn(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = Gn(e);
  return {
    width: t.width,
    height: t.height
  };
}
function Y5(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Cn(n), i = Br(n);
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
  if ((o || !o && r !== "fixed") && ((Qn(n) !== "body" || Cc(i)) && (l = Ec(n)), Cn(n))) {
    const s = Gn(n, !0);
    a.x = s.x + n.clientLeft, a.y = s.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + a.x,
    y: t.y - l.scrollTop + a.y
  };
}
function X5(e, t) {
  const n = Zn(e), r = Br(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Kb();
    (u || !u && t === "fixed") && (a = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function Z5(e) {
  var t;
  const n = Br(e), r = Ec(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Il(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Il(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + Yb(e);
  const s = -r.scrollTop;
  return Va(o || n).direction === "rtl" && (a += Il(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: a,
    y: s
  };
}
function Zb(e) {
  const t = Xb(e);
  return ["html", "body", "#document"].includes(Qn(t)) ? e.ownerDocument.body : Cn(t) && Cc(t) ? t : Zb(t);
}
function Ou(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Zb(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Zn(r), l = o ? [i].concat(i.visualViewport || [], Cc(r) ? r : []) : r, a = t.concat(l);
  return o ? a : a.concat(Ou(l));
}
function J5(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Vm(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function eP(e, t) {
  const n = Gn(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
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
function Tv(e, t, n) {
  return t === "viewport" ? Ru(X5(e, n)) : Fr(t) ? eP(t, n) : Ru(Z5(Br(e)));
}
function tP(e) {
  const t = Ou(e), r = ["absolute", "fixed"].includes(Va(e).position) && Cn(e) ? Dp(e) : e;
  return Fr(r) ? t.filter((o) => Fr(o) && J5(o, r) && Qn(o) !== "body") : [];
}
function nP(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? tP(t) : [].concat(n), r], a = l[0], s = l.reduce((u, c) => {
    const f = Tv(t, c, o);
    return u.top = Il(f.top, u.top), u.right = Pv(f.right, u.right), u.bottom = Pv(f.bottom, u.bottom), u.left = Il(f.left, u.left), u;
  }, Tv(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const rP = {
  getClippingRect: nP,
  convertOffsetParentRelativeRectToViewportRelativeRect: Y5,
  isElement: Fr,
  getDimensions: Rv,
  getOffsetParent: Dp,
  getDocumentElement: Br,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: G5(t, Dp(n), r),
      floating: {
        ...Rv(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Va(e).direction === "rtl"
};
function oP(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = !0,
    animationFrame: a = !1
  } = r, s = o && !a, u = i && !a, c = s || u ? [...Fr(e) ? Ou(e) : [], ...Ou(t)] : [];
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
    }), Fr(e) && !a && f.observe(e), f.observe(t);
  }
  let d, m = a ? Gn(e) : null;
  a && h();
  function h() {
    const v = Gn(e);
    m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && n(), m = v, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    c.forEach((w) => {
      s && w.removeEventListener("scroll", n), u && w.removeEventListener("resize", n);
    }), (v = f) == null || v.disconnect(), f = null, a && cancelAnimationFrame(d);
  };
}
const iP = (e, t, n) => R5(e, t, {
  platform: rP,
  ...n
});
var Lp = typeof document < "u" ? g.exports.useLayoutEffect : g.exports.useEffect;
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
function lP(e) {
  const t = g.exports.useRef(e);
  return Lp(() => {
    t.current = e;
  }), t;
}
function aP(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = g.exports.useRef(null), l = g.exports.useRef(null), a = lP(o), s = g.exports.useRef(null), [u, c] = g.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n,
    middlewareData: {}
  }), [f, d] = g.exports.useState(t);
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
  const m = g.exports.useCallback(() => {
    !i.current || !l.current || iP(i.current, l.current, {
      middleware: f,
      placement: n,
      strategy: r
    }).then((x) => {
      h.current && hn.exports.flushSync(() => {
        c(x);
      });
    });
  }, [f, n, r]);
  Lp(() => {
    h.current && m();
  }, [m]);
  const h = g.exports.useRef(!1);
  Lp(() => (h.current = !0, () => {
    h.current = !1;
  }), []);
  const v = g.exports.useCallback(() => {
    if (typeof s.current == "function" && (s.current(), s.current = null), i.current && l.current)
      if (a.current) {
        const x = a.current(i.current, l.current, m);
        s.current = x;
      } else
        m();
  }, [m, a]), w = g.exports.useCallback((x) => {
    i.current = x, v();
  }, [v]), p = g.exports.useCallback((x) => {
    l.current = x, v();
  }, [v]), y = g.exports.useMemo(() => ({
    reference: i,
    floating: l
  }), []);
  return g.exports.useMemo(() => ({
    ...u,
    update: m,
    refs: y,
    reference: w,
    floating: p
  }), [u, m, y, w, p]);
}
const sP = (e) => {
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
      return r(t) ? t.current != null ? Cv({
        element: t.current,
        padding: n
      }).fn(o) : {} : t ? Cv({
        element: t,
        padding: n
      }).fn(o) : {};
    }
  };
};
function uP(e) {
  const [t, n] = g.exports.useState(void 0);
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
const Jb = "Popper", [Um, $c] = xo(Jb), [cP, eS] = Um(Jb), fP = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.exports.useState(null);
  return /* @__PURE__ */ g.exports.createElement(cP, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, dP = "PopperAnchor", pP = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = eS(dP, n), l = g.exports.useRef(null), a = we(t, l);
  return g.exports.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
  }), r ? null : /* @__PURE__ */ g.exports.createElement(He.div, G({}, o, {
    ref: a
  }));
}), Nu = "PopperContent", [hP, jB] = Um(Nu), [mP, gP] = Um(Nu, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), vP = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  var n, r, o, i, l, a, s, u;
  const { __scopePopper: c, side: f = "bottom", sideOffset: d = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: w = [], collisionPadding: p = 0, sticky: y = "partial", hideWhenDetached: x = !1, avoidCollisions: b = !0, onPlaced: A, ...S } = e, $ = eS(Nu, c), [E, P] = g.exports.useState(null), R = we(
    t,
    (ir) => P(ir)
  ), [T, O] = g.exports.useState(null), F = uP(T), z = (n = F == null ? void 0 : F.width) !== null && n !== void 0 ? n : 0, D = (r = F == null ? void 0 : F.height) !== null && r !== void 0 ? r : 0, _ = f + (m !== "center" ? "-" + m : ""), j = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, M = Array.isArray(w) ? w : [
    w
  ], I = M.length > 0, N = {
    padding: j,
    boundary: M.filter(xP),
    altBoundary: I
  }, { reference: k, floating: C, strategy: J, x: te, y: se, placement: ee, middlewareData: Q, update: ne } = aP({
    strategy: "fixed",
    placement: _,
    whileElementsMounted: oP,
    middleware: [
      wP(),
      j5({
        mainAxis: d + D,
        alignmentAxis: h
      }),
      b ? V5({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? U5() : void 0,
        ...N
      }) : void 0,
      T ? sP({
        element: T,
        padding: v
      }) : void 0,
      b ? L5({
        ...N
      }) : void 0,
      H5({
        ...N,
        apply: ({ elements: ir, availableWidth: sf, availableHeight: uf }) => {
          ir.floating.style.setProperty("--radix-popper-available-width", `${sf}px`), ir.floating.style.setProperty("--radix-popper-available-height", `${uf}px`);
        }
      }),
      bP({
        arrowWidth: z,
        arrowHeight: D
      }),
      x ? z5({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(yP)
  });
  Ze(() => {
    k($.anchor);
  }, [
    k,
    $.anchor
  ]);
  const ge = te !== null && se !== null, [ae, pe] = tS(ee), ue = ze(A);
  Ze(() => {
    ge && (ue == null || ue());
  }, [
    ge,
    ue
  ]);
  const st = (o = Q.arrow) === null || o === void 0 ? void 0 : o.x, ut = (i = Q.arrow) === null || i === void 0 ? void 0 : i.y, Vr = ((l = Q.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [tr, nr] = g.exports.useState();
  Ze(() => {
    E && nr(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]);
  const { hasParent: ts, positionUpdateFns: rr } = gP(Nu, c), or = !ts;
  g.exports.useLayoutEffect(() => {
    if (!or)
      return rr.add(ne), () => {
        rr.delete(ne);
      };
  }, [
    or,
    rr,
    ne
  ]), Ze(() => {
    or && ge && Array.from(rr).reverse().forEach(
      (ir) => requestAnimationFrame(ir)
    );
  }, [
    or,
    ge,
    rr
  ]);
  const Wi = {
    "data-side": ae,
    "data-align": pe,
    ...S,
    ref: R,
    style: {
      ...S.style,
      animation: ge ? void 0 : "none",
      opacity: (a = Q.hide) !== null && a !== void 0 && a.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ g.exports.createElement("div", {
    ref: C,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: J,
      left: 0,
      top: 0,
      transform: ge ? `translate3d(${Math.round(te)}px, ${Math.round(se)}px, 0)` : "translate3d(0, -200%, 0)",
      minWidth: "max-content",
      zIndex: tr,
      ["--radix-popper-transform-origin"]: [
        (s = Q.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = Q.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ g.exports.createElement(hP, {
    scope: c,
    placedSide: ae,
    onArrowChange: O,
    arrowX: st,
    arrowY: ut,
    shouldHideArrow: Vr
  }, or ? /* @__PURE__ */ g.exports.createElement(mP, {
    scope: c,
    hasParent: !0,
    positionUpdateFns: rr
  }, /* @__PURE__ */ g.exports.createElement(He.div, Wi)) : /* @__PURE__ */ g.exports.createElement(He.div, Wi)));
});
function yP(e) {
  return e !== void 0;
}
function xP(e) {
  return e !== null;
}
const wP = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: r, height: o } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {};
  }
}), bP = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [h, v] = tS(a), w = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], p = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + d / 2, y = ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0 ? i : 0) + m / 2;
    let x = "", b = "";
    return h === "bottom" ? (x = f ? w : `${p}px`, b = `${-m}px`) : h === "top" ? (x = f ? w : `${p}px`, b = `${s.floating.height + m}px`) : h === "right" ? (x = `${-m}px`, b = f ? w : `${y}px`) : h === "left" && (x = `${s.floating.width + m}px`, b = f ? w : `${y}px`), {
      data: {
        x,
        y: b
      }
    };
  }
});
function tS(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const nS = fP, rS = pP, oS = vP, iS = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ jb.createPortal(/* @__PURE__ */ g.exports.createElement(He.div, G({}, o, {
    ref: t
  })), r) : null;
});
function SP(e, t) {
  return g.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const mn = (e) => {
  const { present: t, children: n } = e, r = kP(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : g.exports.Children.only(n), i = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ g.exports.cloneElement(o, {
    ref: i
  }) : null;
};
mn.displayName = "Presence";
function kP(e) {
  const [t, n] = g.exports.useState(), r = g.exports.useRef({}), o = g.exports.useRef(e), i = g.exports.useRef("none"), l = e ? "mounted" : "unmounted", [a, s] = SP(l, {
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
  return g.exports.useEffect(() => {
    const u = xs(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [
    a
  ]), Ze(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = i.current, m = xs(u);
      e ? s("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(c && d !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), Ze(() => {
    if (t) {
      const u = (f) => {
        const m = xs(r.current).includes(f.animationName);
        f.target === t && m && hn.exports.flushSync(
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
    ref: g.exports.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function xs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ca({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = CP({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : r, a = ze(n), s = g.exports.useCallback((u) => {
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
function CP({ defaultProp: e, onChange: t }) {
  const n = g.exports.useState(e), [r] = n, o = g.exports.useRef(r), i = ze(t);
  return g.exports.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var EP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _o = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), bs = {}, jf = 0, lS = function(e) {
  return e && (e.host || lS(e.parentNode));
}, $P = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = lS(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, AP = function(e, t, n, r) {
  var o = $P(t, Array.isArray(e) ? e : [e]);
  bs[n] || (bs[n] = /* @__PURE__ */ new WeakMap());
  var i = bs[n], l = [], a = /* @__PURE__ */ new Set(), s = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || s.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        c(d);
      else {
        var m = d.getAttribute(r), h = m !== null && m !== "false", v = (_o.get(d) || 0) + 1, w = (i.get(d) || 0) + 1;
        _o.set(d, v), i.set(d, w), l.push(d), v === 1 && h && ws.set(d, !0), w === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
      }
    });
  };
  return c(t), a.clear(), jf++, function() {
    l.forEach(function(f) {
      var d = _o.get(f) - 1, m = i.get(f) - 1;
      _o.set(f, d), i.set(f, m), d || (ws.has(f) || f.removeAttribute(r), ws.delete(f)), m || f.removeAttribute(n);
    }), jf--, jf || (_o = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), bs = {});
  };
}, Ac = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || EP(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), AP(r, o, n, "aria-hidden")) : function() {
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
function Hm(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function aS(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ol = "right-scroll-bar-position", Nl = "width-before-scroll-bar", PP = "with-scroll-bars-hidden", _P = "--removed-body-scroll-bar-size";
function RP(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function TP(e, t) {
  var n = g.exports.useState(function() {
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
function Wm(e, t) {
  return TP(t || null, function(n) {
    return e.forEach(function(r) {
      return RP(r, n);
    });
  });
}
var Pc = { exports: {} }, _c = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IP = g.exports, OP = Symbol.for("react.element"), NP = Symbol.for("react.fragment"), MP = Object.prototype.hasOwnProperty, FP = IP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, DP = { key: !0, ref: !0, __self: !0, __source: !0 };
function sS(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    MP.call(t, r) && !DP.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: OP, type: e, key: i, ref: l, props: o, _owner: FP.current };
}
_c.Fragment = NP;
_c.jsx = sS;
_c.jsxs = sS;
(function(e) {
  e.exports = _c;
})(Pc);
const Pn = Pc.exports.Fragment, B = Pc.exports.jsx, fe = Pc.exports.jsxs;
function uS(e) {
  return e;
}
function cS(e, t) {
  t === void 0 && (t = uS);
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
function qm(e, t) {
  return t === void 0 && (t = uS), cS(e, t);
}
function Qm(e) {
  e === void 0 && (e = {});
  var t = cS(null);
  return t.options = ot({ async: !0, ssr: !1 }, e), t;
}
var fS = function(e) {
  var t = e.sideCar, n = Hm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ B(r, {
    ...ot({}, n)
  });
};
fS.isSideCarExport = !0;
function dS(e, t) {
  return e.useMedium(t), fS;
}
var pS = Qm(), Vf = function() {
}, Rc = g.exports.forwardRef(function(e, t) {
  var n = g.exports.useRef(null), r = g.exports.useState({
    onScrollCapture: Vf,
    onWheelCapture: Vf,
    onTouchMoveCapture: Vf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = Hm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Wm([n, t]), A = ot(ot({}, y), o);
  return /* @__PURE__ */ fe(Pn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: pS,
      removeScrollBar: u,
      shards: f,
      noIsolation: m,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? g.exports.cloneElement(g.exports.Children.only(a), ot(ot({}, A), {
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
Rc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Rc.classNames = {
  fullWidth: Nl,
  zeroRight: Ol
};
var LP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function zP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = LP();
  return t && e.setAttribute("nonce", t), e;
}
function BP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function jP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var VP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = zP()) && (BP(t, n), jP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, UP = function() {
  var e = VP();
  return function(t, n) {
    g.exports.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Gm = function() {
  var e = UP(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, HP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Uf = function(e) {
  return parseInt(e || "", 10) || 0;
}, WP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Uf(n), Uf(r), Uf(o)];
}, qP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return HP;
  var t = WP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, QP = Gm(), GP = function(e, t, n, r) {
  var o = e.left, i = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(PP, ` {
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
  
  .`).concat(Ol, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Nl, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ol, " .").concat(Ol, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Nl, " .").concat(Nl, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(_P, ": ").concat(a, `px;
  }
`);
}, hS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = g.exports.useMemo(function() {
    return qP(o);
  }, [o]);
  return /* @__PURE__ */ B(QP, {
    styles: GP(i, !t, o, n ? "" : "!important")
  });
}, Bp = !1;
if (typeof window < "u")
  try {
    var Ss = Object.defineProperty({}, "passive", {
      get: function() {
        return Bp = !0, !0;
      }
    });
    window.addEventListener("test", Ss, Ss), window.removeEventListener("test", Ss, Ss);
  } catch {
    Bp = !1;
  }
var Ro = Bp ? { passive: !1 } : !1, KP = function(e) {
  return e.tagName === "TEXTAREA";
}, mS = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !KP(e) && n[t] === "visible");
}, YP = function(e) {
  return mS(e, "overflowY");
}, XP = function(e) {
  return mS(e, "overflowX");
}, Iv = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = gS(e, n);
    if (r) {
      var o = vS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, ZP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, JP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, gS = function(e, t) {
  return e === "v" ? YP(t) : XP(t);
}, vS = function(e, t) {
  return e === "v" ? ZP(t) : JP(t);
}, e_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, t_ = function(e, t, n, r, o) {
  var i = e_(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var m = vS(e, a), h = m[0], v = m[1], w = m[2], p = v - w - i * h;
    (h || p) && gS(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, ks = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ov = function(e) {
  return [e.deltaX, e.deltaY];
}, Nv = function(e) {
  return e && "current" in e ? e.current : e;
}, n_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, r_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, o_ = 0, To = [];
function i_(e) {
  var t = g.exports.useRef([]), n = g.exports.useRef([0, 0]), r = g.exports.useRef(), o = g.exports.useState(o_++)[0], i = g.exports.useState(function() {
    return Gm();
  })[0], l = g.exports.useRef(e);
  g.exports.useEffect(function() {
    l.current = e;
  }, [e]), g.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = aS([e.lockRef.current], (e.shards || []).map(Nv), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = g.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = ks(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && $ === "h" && S.type === "range")
      return !1;
    var E = Iv($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = Iv($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return t_(P, w, v, P === "h" ? x : b, !0);
  }, []), s = g.exports.useCallback(function(v) {
    var w = v;
    if (!(!To.length || To[To.length - 1] !== i)) {
      var p = "deltaY" in w ? Ov(w) : ks(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && n_(A.delta, p);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(Nv).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = g.exports.useCallback(function(v, w, p, y) {
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
  }, []), c = g.exports.useCallback(function(v) {
    n.current = ks(v), r.current = void 0;
  }, []), f = g.exports.useCallback(function(v) {
    u(v.type, Ov(v), v.target, a(v, e.lockRef.current));
  }, []), d = g.exports.useCallback(function(v) {
    u(v.type, ks(v), v.target, a(v, e.lockRef.current));
  }, []);
  g.exports.useEffect(function() {
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
  var m = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ fe(Pn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: r_(o)
    }) : null, m ? /* @__PURE__ */ B(hS, {
      gapMode: "margin"
    }) : null]
  });
}
const l_ = dS(pS, i_);
var yS = g.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(Rc, {
    ...ot({}, e, {
      ref: t,
      sideCar: l_
    })
  });
});
yS.classNames = Rc.classNames;
const xS = yS, wS = "Popover", [bS, VB] = xo(wS, [
  $c
]), Km = $c(), [a_, Ua] = bS(wS), s_ = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !1 } = e, a = Km(t), s = g.exports.useRef(null), [u, c] = g.exports.useState(!1), [f = !1, d] = ca({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ g.exports.createElement(nS, a, /* @__PURE__ */ g.exports.createElement(a_, {
    scope: t,
    contentId: Vn(),
    triggerRef: s,
    open: f,
    onOpenChange: d,
    onOpenToggle: g.exports.useCallback(
      () => d(
        (m) => !m
      ),
      [
        d
      ]
    ),
    hasCustomAnchor: u,
    onCustomAnchorAdd: g.exports.useCallback(
      () => c(!0),
      []
    ),
    onCustomAnchorRemove: g.exports.useCallback(
      () => c(!1),
      []
    ),
    modal: l
  }, n));
}, u_ = "PopoverTrigger", c_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ua(u_, n), i = Km(n), l = we(t, o.triggerRef), a = /* @__PURE__ */ g.exports.createElement(He.button, G({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": kS(o.open)
  }, r, {
    ref: l,
    onClick: ce(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? a : /* @__PURE__ */ g.exports.createElement(rS, G({
    asChild: !0
  }, i), a);
}), f_ = "PopoverPortal", [UB, d_] = bS(f_, {
  forceMount: void 0
}), fa = "PopoverContent", p_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = d_(fa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ua(fa, e.__scopePopover);
  return /* @__PURE__ */ g.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ g.exports.createElement(h_, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ g.exports.createElement(m_, G({}, o, {
    ref: t
  })));
}), h_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = Ua(fa, e.__scopePopover), r = g.exports.useRef(null), o = we(t, r), i = g.exports.useRef(!1);
  return g.exports.useEffect(() => {
    const l = r.current;
    if (l)
      return Ac(l);
  }, []), /* @__PURE__ */ g.exports.createElement(xS, {
    as: $i,
    allowPinchZoom: !0
  }, /* @__PURE__ */ g.exports.createElement(SS, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ce(e.onCloseAutoFocus, (l) => {
      var a;
      l.preventDefault(), i.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: ce(e.onPointerDownOutside, (l) => {
      const a = l.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || s;
      i.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ce(
      e.onFocusOutside,
      (l) => l.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), m_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = Ua(fa, e.__scopePopover), r = g.exports.useRef(!1);
  return /* @__PURE__ */ g.exports.createElement(SS, G({}, e, {
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
}), SS = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: l, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: u, onInteractOutside: c, ...f } = e, d = Ua(fa, n), m = Km(n);
  return kc(), /* @__PURE__ */ g.exports.createElement(Bm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ g.exports.createElement(zm, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: c,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ g.exports.createElement(oS, G({
    "data-state": kS(d.open),
    role: "dialog",
    id: d.contentId
  }, m, f, {
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
function kS(e) {
  return e ? "open" : "closed";
}
const g_ = s_, v_ = c_, y_ = p_, CS = "Dialog", [ES, HB] = xo(CS), [x_, Ha] = ES(CS), w_ = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = g.exports.useRef(null), s = g.exports.useRef(null), [u = !1, c] = ca({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ g.exports.createElement(x_, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: Vn(),
    titleId: Vn(),
    descriptionId: Vn(),
    open: u,
    onOpenChange: c,
    onOpenToggle: g.exports.useCallback(
      () => c(
        (f) => !f
      ),
      [
        c
      ]
    ),
    modal: l
  }, n);
}, $S = "DialogPortal", [b_, S_] = ES($S, {
  forceMount: void 0
}), k_ = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ha($S, t);
  return /* @__PURE__ */ g.exports.createElement(b_, {
    scope: t,
    forceMount: n
  }, g.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ g.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ g.exports.createElement(iS, {
      asChild: !0,
      container: o
    }, l))
  ));
}, da = "DialogContent", C_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = S_(da, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ha(da, e.__scopeDialog);
  return /* @__PURE__ */ g.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ g.exports.createElement(E_, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ g.exports.createElement($_, G({}, o, {
    ref: t
  })));
}), E_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = Ha(da, e.__scopeDialog), r = g.exports.useRef(null), o = we(t, n.contentRef, r);
  return g.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return Ac(i);
  }, []), /* @__PURE__ */ g.exports.createElement(AS, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ce(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ce(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: ce(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), $_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = Ha(da, e.__scopeDialog), r = g.exports.useRef(!1);
  return /* @__PURE__ */ g.exports.createElement(AS, G({}, e, {
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
}), AS = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = Ha(da, n), s = g.exports.useRef(null), u = we(t, s);
  return kc(), /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, /* @__PURE__ */ g.exports.createElement(Bm, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ g.exports.createElement(zm, G({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": A_(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function A_(e) {
  return e ? "open" : "closed";
}
const P_ = w_, __ = k_, R_ = C_, Ym = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = g.exports.Children.toArray(n), i = o.find(I_);
  if (i) {
    const l = i.props.children, a = o.map((s) => s === i ? g.exports.Children.count(l) > 1 ? g.exports.Children.only(null) : /* @__PURE__ */ g.exports.isValidElement(l) ? l.props.children : null : s);
    return /* @__PURE__ */ g.exports.createElement(jp, G({}, r, {
      ref: t
    }), /* @__PURE__ */ g.exports.isValidElement(l) ? /* @__PURE__ */ g.exports.cloneElement(l, void 0, a) : null);
  }
  return /* @__PURE__ */ g.exports.createElement(jp, G({}, r, {
    ref: t
  }), n);
});
Ym.displayName = "Slot";
const jp = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ g.exports.isValidElement(n) ? /* @__PURE__ */ g.exports.cloneElement(n, {
    ...O_(r, n.props),
    ref: Gh(t, n.ref)
  }) : g.exports.Children.count(n) > 1 ? g.exports.Children.only(null) : null;
});
jp.displayName = "SlotClone";
const T_ = ({ children: e }) => /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, e);
function I_(e) {
  return /* @__PURE__ */ g.exports.isValidElement(e) && e.type === T_;
}
function O_(e, t) {
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
const N_ = [
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
], Tc = N_.reduce((e, t) => {
  const n = /* @__PURE__ */ g.exports.forwardRef((r, o) => {
    const { asChild: i, ...l } = r, a = i ? Ym : t;
    return g.exports.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ g.exports.createElement(a, G({}, l, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function M_(e, t) {
  e && hn.exports.flushSync(
    () => e.dispatchEvent(t)
  );
}
function F_(e) {
  const t = ze(e);
  g.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Vp = "dismissableLayer.update", D_ = "dismissableLayer.pointerDownOutside", L_ = "dismissableLayer.focusOutside";
let Mv;
const z_ = /* @__PURE__ */ g.exports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), B_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: a, ...s } = e, u = g.exports.useContext(z_), [c, f] = g.exports.useState(null), [, d] = g.exports.useState({}), m = we(
    t,
    (S) => f(S)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), p = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = p >= w, b = j_((S) => {
    const $ = S.target, E = [
      ...u.branches
    ].some(
      (P) => P.contains($)
    );
    !x || E || (o == null || o(S), l == null || l(S), S.defaultPrevented || a == null || a());
  }), A = V_((S) => {
    const $ = S.target;
    [
      ...u.branches
    ].some(
      (P) => P.contains($)
    ) || (i == null || i(S), l == null || l(S), S.defaultPrevented || a == null || a());
  });
  return F_((S) => {
    p === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
  }), g.exports.useEffect(() => {
    if (!!c)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Mv = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Fv(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Mv);
      };
  }, [
    c,
    n,
    u
  ]), g.exports.useEffect(() => () => {
    !c || (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Fv());
  }, [
    c,
    u
  ]), g.exports.useEffect(() => {
    const S = () => d({});
    return document.addEventListener(Vp, S), () => document.removeEventListener(Vp, S);
  }, []), /* @__PURE__ */ g.exports.createElement(Tc.div, G({}, s, {
    ref: m,
    style: {
      pointerEvents: y ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ce(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: ce(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: ce(e.onPointerDownCapture, b.onPointerDownCapture)
  }));
});
function j_(e) {
  const t = ze(e), n = g.exports.useRef(!1), r = g.exports.useRef(() => {
  });
  return g.exports.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          PS(D_, t, s, {
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
function V_(e) {
  const t = ze(e), n = g.exports.useRef(!1);
  return g.exports.useEffect(() => {
    const r = (o) => {
      o.target && !n.current && PS(L_, t, {
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
function Fv() {
  const e = new CustomEvent(Vp);
  document.dispatchEvent(e);
}
function PS(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? M_(o, i) : o.dispatchEvent(i);
}
const Hf = "focusScope.autoFocusOnMount", Wf = "focusScope.autoFocusOnUnmount", Dv = {
  bubbles: !1,
  cancelable: !0
}, U_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e, [a, s] = g.exports.useState(null), u = ze(o), c = ze(i), f = g.exports.useRef(null), d = we(
    t,
    (v) => s(v)
  ), m = g.exports.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.exports.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (m.paused || !a)
          return;
        const b = x.target;
        a.contains(b) ? f.current = b : Yr(f.current, {
          select: !0
        });
      }, y = function(x) {
        m.paused || !a || a.contains(x.relatedTarget) || Yr(f.current, {
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
    m.paused
  ]), g.exports.useEffect(() => {
    if (a) {
      zv.add(m);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const p = new CustomEvent(Hf, Dv);
        a.addEventListener(Hf, u), a.dispatchEvent(p), p.defaultPrevented || (H_(K_(_S(a)), {
          select: !0
        }), document.activeElement === v && Yr(a));
      }
      return () => {
        a.removeEventListener(Hf, u), setTimeout(() => {
          const p = new CustomEvent(Wf, Dv);
          a.addEventListener(Wf, c), a.dispatchEvent(p), p.defaultPrevented || Yr(v != null ? v : document.body, {
            select: !0
          }), a.removeEventListener(Wf, c), zv.remove(m);
        }, 0);
      };
    }
  }, [
    a,
    u,
    c,
    m
  ]);
  const h = g.exports.useCallback((v) => {
    if (!n && !r || m.paused)
      return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
    if (w && p) {
      const y = v.currentTarget, [x, b] = W_(y);
      x && b ? !v.shiftKey && p === b ? (v.preventDefault(), n && Yr(x, {
        select: !0
      })) : v.shiftKey && p === x && (v.preventDefault(), n && Yr(b, {
        select: !0
      })) : p === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ g.exports.createElement(Tc.div, G({
    tabIndex: -1
  }, l, {
    ref: d,
    onKeyDown: h
  }));
});
function H_(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Yr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function W_(e) {
  const t = _S(e), n = Lv(t, e), r = Lv(t.reverse(), e);
  return [
    n,
    r
  ];
}
function _S(e) {
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
function Lv(e, t) {
  for (const n of e)
    if (!q_(n, {
      upTo: t
    }))
      return n;
}
function q_(e, { upTo: t }) {
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
function Q_(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Yr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Q_(e) && t && e.select();
  }
}
const zv = G_();
function G_() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Bv(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Bv(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Bv(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function K_(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Y_ = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ jb.createPortal(/* @__PURE__ */ g.exports.createElement(Tc.div, G({}, o, {
    ref: t
  })), r) : null;
});
var RS = Qm(), qf = function() {
}, Ic = g.exports.forwardRef(function(e, t) {
  var n = g.exports.useRef(null), r = g.exports.useState({
    onScrollCapture: qf,
    onWheelCapture: qf,
    onTouchMoveCapture: qf
  }), o = r[0], i = r[1], l = e.forwardProps, a = e.children, s = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, p = w === void 0 ? "div" : w, y = Hm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = d, b = Wm([n, t]), A = ot(ot({}, y), o);
  return /* @__PURE__ */ fe(Pn, {
    children: [c && /* @__PURE__ */ B(x, {
      sideCar: RS,
      removeScrollBar: u,
      shards: f,
      noIsolation: m,
      inert: h,
      setCallbacks: i,
      allowPinchZoom: !!v,
      lockRef: n
    }), l ? g.exports.cloneElement(g.exports.Children.only(a), ot(ot({}, A), {
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
Ic.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ic.classNames = {
  fullWidth: Nl,
  zeroRight: Ol
};
var Up = !1;
if (typeof window < "u")
  try {
    var Cs = Object.defineProperty({}, "passive", {
      get: function() {
        return Up = !0, !0;
      }
    });
    window.addEventListener("test", Cs, Cs), window.removeEventListener("test", Cs, Cs);
  } catch {
    Up = !1;
  }
var Io = Up ? { passive: !1 } : !1, X_ = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, Z_ = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, jv = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = TS(e, n);
    if (r) {
      var o = IS(e, n), i = o[1], l = o[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, J_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, e3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, TS = function(e, t) {
  return e === "v" ? X_(t) : Z_(t);
}, IS = function(e, t) {
  return e === "v" ? J_(t) : e3(t);
}, t3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, n3 = function(e, t, n, r, o) {
  var i = t3(e, window.getComputedStyle(t).direction), l = i * r, a = n.target, s = t.contains(a), u = !1, c = l > 0, f = 0, d = 0;
  do {
    var m = IS(e, a), h = m[0], v = m[1], w = m[2], p = v - w - i * h;
    (h || p) && TS(e, a) && (f += p, d += h), a = a.parentNode;
  } while (!s && a !== document.body || s && (t.contains(a) || t === a));
  return (c && (o && f === 0 || !o && l > f) || !c && (o && d === 0 || !o && -l > d)) && (u = !0), u;
}, Es = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vv = function(e) {
  return [e.deltaX, e.deltaY];
}, Uv = function(e) {
  return e && "current" in e ? e.current : e;
}, r3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, o3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, i3 = 0, Oo = [];
function l3(e) {
  var t = g.exports.useRef([]), n = g.exports.useRef([0, 0]), r = g.exports.useRef(), o = g.exports.useState(i3++)[0], i = g.exports.useState(function() {
    return Gm();
  })[0], l = g.exports.useRef(e);
  g.exports.useEffect(function() {
    l.current = e;
  }, [e]), g.exports.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = aS([e.lockRef.current], (e.shards || []).map(Uv), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = g.exports.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !l.current.allowPinchZoom;
    var p = Es(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - p[0], b = "deltaY" in v ? v.deltaY : y[1] - p[1], A, S = v.target, $ = Math.abs(x) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && $ === "h" && S.type === "range")
      return !1;
    var E = jv($, S);
    if (!E)
      return !0;
    if (E ? A = $ : (A = $ === "v" ? "h" : "v", E = jv($, S)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (x || b) && (r.current = A), !A)
      return !0;
    var P = r.current || A;
    return n3(P, w, v, P === "h" ? x : b, !0);
  }, []), s = g.exports.useCallback(function(v) {
    var w = v;
    if (!(!Oo.length || Oo[Oo.length - 1] !== i)) {
      var p = "deltaY" in w ? Vv(w) : Es(w), y = t.current.filter(function(A) {
        return A.name === w.type && A.target === w.target && r3(A.delta, p);
      })[0];
      if (y && y.should) {
        w.preventDefault();
        return;
      }
      if (!y) {
        var x = (l.current.shards || []).map(Uv).filter(Boolean).filter(function(A) {
          return A.contains(w.target);
        }), b = x.length > 0 ? a(w, x[0]) : !l.current.noIsolation;
        b && w.preventDefault();
      }
    }
  }, []), u = g.exports.useCallback(function(v, w, p, y) {
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
  }, []), c = g.exports.useCallback(function(v) {
    n.current = Es(v), r.current = void 0;
  }, []), f = g.exports.useCallback(function(v) {
    u(v.type, Vv(v), v.target, a(v, e.lockRef.current));
  }, []), d = g.exports.useCallback(function(v) {
    u(v.type, Es(v), v.target, a(v, e.lockRef.current));
  }, []);
  g.exports.useEffect(function() {
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
  var m = e.removeScrollBar, h = e.inert;
  return /* @__PURE__ */ fe(Pn, {
    children: [h ? /* @__PURE__ */ B(i, {
      styles: o3(o)
    }) : null, m ? /* @__PURE__ */ B(hS, {
      gapMode: "margin"
    }) : null]
  });
}
const a3 = dS(RS, l3);
var OS = g.exports.forwardRef(function(e, t) {
  return /* @__PURE__ */ B(Ic, {
    ...ot({}, e, {
      ref: t,
      sideCar: a3
    })
  });
});
OS.classNames = Ic.classNames;
const s3 = OS, NS = "Dialog", [MS, WB] = xo(NS), [u3, ko] = MS(NS), c3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: l = !0 } = e, a = g.exports.useRef(null), s = g.exports.useRef(null), [u = !1, c] = ca({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ g.exports.createElement(u3, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: Vn(),
    titleId: Vn(),
    descriptionId: Vn(),
    open: u,
    onOpenChange: c,
    onOpenToggle: g.exports.useCallback(
      () => c(
        (f) => !f
      ),
      [
        c
      ]
    ),
    modal: l
  }, n);
}, FS = "DialogPortal", [f3, DS] = MS(FS, {
  forceMount: void 0
}), d3 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = ko(FS, t);
  return /* @__PURE__ */ g.exports.createElement(f3, {
    scope: t,
    forceMount: n
  }, g.exports.Children.map(
    r,
    (l) => /* @__PURE__ */ g.exports.createElement(mn, {
      present: n || i.open
    }, /* @__PURE__ */ g.exports.createElement(Y_, {
      asChild: !0,
      container: o
    }, l))
  ));
}, Hp = "DialogOverlay", p3 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = DS(Hp, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = ko(Hp, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ g.exports.createElement(mn, {
    present: r || i.open
  }, /* @__PURE__ */ g.exports.createElement(h3, G({}, o, {
    ref: t
  }))) : null;
}), h3 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ko(Hp, n);
  return /* @__PURE__ */ g.exports.createElement(s3, {
    as: Ym,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ g.exports.createElement(Tc.div, G({
    "data-state": zS(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), pa = "DialogContent", m3 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = DS(pa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = ko(pa, e.__scopeDialog);
  return /* @__PURE__ */ g.exports.createElement(mn, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ g.exports.createElement(g3, G({}, o, {
    ref: t
  })) : /* @__PURE__ */ g.exports.createElement(v3, G({}, o, {
    ref: t
  })));
}), g3 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = ko(pa, e.__scopeDialog), r = g.exports.useRef(null), o = we(t, n.contentRef, r);
  return g.exports.useEffect(() => {
    const i = r.current;
    if (i)
      return Ac(i);
  }, []), /* @__PURE__ */ g.exports.createElement(LS, G({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ce(e.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = n.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ce(e.onPointerDownOutside, (i) => {
      const l = i.detail.originalEvent, a = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: ce(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), v3 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = ko(pa, e.__scopeDialog), r = g.exports.useRef(!1);
  return /* @__PURE__ */ g.exports.createElement(LS, G({}, e, {
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
}), LS = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e, a = ko(pa, n), s = g.exports.useRef(null), u = we(t, s);
  return kc(), /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, /* @__PURE__ */ g.exports.createElement(U_, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ g.exports.createElement(B_, G({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": zS(a.open)
  }, l, {
    ref: u,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
});
function zS(e) {
  return e ? "open" : "closed";
}
const y3 = c3, x3 = d3, w3 = p3, b3 = m3;
var Hv = 1, S3 = 0.9, k3 = 0.3, Qf = 0.1, C3 = 0, Gf = 0.999, E3 = 0.9999, $3 = 0.99, Wv = /[\\\/\-_+.# \t"@\[\(\{&]/, A3 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Wp(e, t, n, r, o, i) {
  if (i === t.length)
    return o === e.length ? Hv : $3;
  for (var l = r.charAt(i), a = n.indexOf(l, o), s = 0, u, c, f; a >= 0; )
    u = Wp(e, t, n, r, a + 1, i + 1), u > s && (a === o ? u *= Hv : Wv.test(e.charAt(a - 1)) ? (u *= S3, f = e.slice(o, a - 1).match(A3), f && o > 0 && (u *= Math.pow(Gf, f.length))) : Wv.test(e.slice(o, a - 1)) ? (u *= C3, o > 0 && (u *= Math.pow(Gf, a - o))) : (u *= k3, o > 0 && (u *= Math.pow(Gf, a - o))), e.charAt(a) !== t.charAt(i) && (u *= E3)), u < Qf && n.charAt(a - 1) === r.charAt(i + 1) && n.charAt(a - 1) !== r.charAt(i) && (c = Wp(e, t, n, r, a + 1, i + 2), c * Qf > u && (u = c * Qf)), u > s && (s = u), a = n.indexOf(l, a + 1);
  return s;
}
function P3(e, t) {
  return Wp(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var _3 = P3, R3 = '[cmdk-list-sizer=""]', nl = '[cmdk-group=""]', Kf = '[cmdk-group-items=""]', T3 = '[cmdk-group-heading=""]', BS = '[cmdk-item=""]', qv = `${BS}:not([aria-disabled="true"])`, qp = "cmdk-item-select", dr = "data-value", I3 = (e, t) => _3(e, t), jS = g.exports.createContext(void 0), Wa = () => g.exports.useContext(jS), VS = g.exports.createContext(void 0), Xm = () => g.exports.useContext(VS), US = g.exports.createContext(void 0), HS = g.exports.forwardRef((e, t) => {
  let n = g.exports.useRef(null), r = zo(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = zo(() => /* @__PURE__ */ new Set()), i = zo(() => /* @__PURE__ */ new Map()), l = zo(() => /* @__PURE__ */ new Map()), a = zo(() => /* @__PURE__ */ new Set()), s = WS(e), { label: u, children: c, value: f, onValueChange: d, filter: m, shouldFilter: h, ...v } = e, w = g.exports.useId(), p = g.exports.useId(), y = g.exports.useId(), x = U3();
  Di(() => {
    if (f !== void 0) {
      let I = f.trim().toLowerCase();
      r.current.value = I, x(6, R), b.emit();
    }
  }, [f]);
  let b = g.exports.useMemo(() => ({ subscribe: (I) => (a.current.add(I), () => a.current.delete(I)), snapshot: () => r.current, setState: (I, N, k) => {
    var C, J, te;
    if (!Object.is(r.current[I], N)) {
      if (r.current[I] = N, I === "search")
        P(), $(), x(1, E);
      else if (I === "value")
        if (((C = s.current) == null ? void 0 : C.value) !== void 0) {
          (te = (J = s.current).onValueChange) == null || te.call(J, N);
          return;
        } else
          k || x(5, R);
      b.emit();
    }
  }, emit: () => {
    a.current.forEach((I) => I());
  } }), []), A = g.exports.useMemo(() => ({ value: (I, N) => {
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
  }), filter: () => s.current.shouldFilter, label: u || e["aria-label"], listId: w, inputId: y, labelId: p }), []);
  function S(I) {
    var C;
    var N;
    let k = (C = (N = s.current) == null ? void 0 : N.filter) != null ? C : I3;
    return I ? k(I, r.current.search) : 0;
  }
  function $() {
    if (!n.current || !r.current.search || s.current.shouldFilter === !1)
      return;
    let I = r.current.filtered.items, N = [];
    r.current.filtered.groups.forEach((C) => {
      let J = i.current.get(C), te = 0;
      J.forEach((se) => {
        let ee = I.get(se);
        te = Math.max(ee, te);
      }), N.push([C, te]);
    });
    let k = n.current.querySelector(R3);
    O().sort((C, J) => {
      var ee, Q;
      let te = C.getAttribute(dr), se = J.getAttribute(dr);
      return ((ee = I.get(se)) != null ? ee : 0) - ((Q = I.get(te)) != null ? Q : 0);
    }).forEach((C) => {
      let J = C.closest(Kf);
      J ? J.appendChild(C.parentElement === J ? C : C.closest(`${Kf} > *`)) : k.appendChild(C.parentElement === k ? C : C.closest(`${Kf} > *`));
    }), N.sort((C, J) => J[1] - C[1]).forEach((C) => {
      let J = n.current.querySelector(`${nl}[${dr}="${C[0]}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function E() {
    let I = O().find((k) => !k.ariaDisabled), N = I == null ? void 0 : I.getAttribute(dr);
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
    C && (((I = C.parentElement) == null ? void 0 : I.firstChild) === C && ((k = (N = C.closest(nl)) == null ? void 0 : N.querySelector(T3)) == null || k.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    return n.current.querySelector(`${BS}[aria-selected="true"]`);
  }
  function O() {
    return Array.from(n.current.querySelectorAll(qv));
  }
  function F(I) {
    let N = O()[I];
    N && b.setState("value", N.getAttribute(dr));
  }
  function z(I) {
    var N;
    let k = T(), C = O(), J = C.findIndex((se) => se === k), te = C[J + I];
    (N = s.current) != null && N.loop && (te = J + I < 0 ? C[C.length - 1] : J + I === C.length ? C[0] : C[J + I]), te && b.setState("value", te.getAttribute(dr));
  }
  function D(I) {
    let N = T(), k = N == null ? void 0 : N.closest(nl), C;
    for (; k && !C; )
      k = I > 0 ? j3(k, nl) : V3(k, nl), C = k == null ? void 0 : k.querySelector(qv);
    C ? b.setState("value", C.getAttribute(dr)) : z(I);
  }
  let _ = () => F(O().length - 1), j = (I) => {
    I.preventDefault(), I.metaKey ? _() : I.altKey ? D(1) : z(1);
  }, M = (I) => {
    I.preventDefault(), I.metaKey ? F(0) : I.altKey ? D(-1) : z(-1);
  };
  return g.exports.createElement("div", { ref: qa([n, t]), ...v, "cmdk-root": "", onKeyDown: (I) => {
    var N;
    if ((N = v.onKeyDown) == null || N.call(v, I), !I.defaultPrevented)
      switch (I.key) {
        case "n":
        case "j": {
          I.ctrlKey && j(I);
          break;
        }
        case "ArrowDown": {
          j(I);
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
          I.preventDefault(), F(0);
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
            let C = new Event(qp);
            k.dispatchEvent(C);
          }
        }
      }
  } }, g.exports.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: H3 }, u), g.exports.createElement(VS.Provider, { value: b }, g.exports.createElement(jS.Provider, { value: A }, c)));
}), O3 = g.exports.forwardRef((e, t) => {
  let n = g.exports.useId(), r = g.exports.useRef(null), o = g.exports.useContext(US), i = Wa(), l = WS(e);
  Di(() => i.item(n, o), []);
  let a = qS(n, r, [e.value, e.children, r]), s = Xm(), u = Kn((p) => p.value && p.value === a.current), c = Kn((p) => i.filter() === !1 ? !0 : p.search ? p.filtered.items.get(n) > 0 : !0);
  g.exports.useEffect(() => {
    let p = r.current;
    if (!(!p || e.disabled))
      return p.addEventListener(qp, f), () => p.removeEventListener(qp, f);
  }, [c, e.onSelect, e.disabled]);
  function f() {
    var p, y;
    (y = (p = l.current).onSelect) == null || y.call(p, a.current);
  }
  function d() {
    s.setState("value", a.current, !0);
  }
  if (!c)
    return null;
  let { disabled: m, value: h, onSelect: v, ...w } = e;
  return g.exports.createElement("div", { ref: qa([r, t]), ...w, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": u || void 0, "data-selected": u || void 0, onPointerMove: m ? void 0 : d, onClick: m ? void 0 : f }, e.children);
}), N3 = g.exports.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, i = g.exports.useId(), l = g.exports.useRef(null), a = g.exports.useRef(null), s = g.exports.useId(), u = Wa(), c = Kn((d) => u.filter() === !1 ? !0 : d.search ? d.filtered.groups.has(i) : !0);
  Di(() => u.group(i), []), qS(i, l, [e.value, e.heading, a]);
  let f = g.exports.createElement(US.Provider, { value: i }, r);
  return g.exports.createElement("div", { ref: qa([l, t]), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && g.exports.createElement("div", { ref: a, "cmdk-group-heading": "", "aria-hidden": !0, id: s }, n), g.exports.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? s : void 0 }, f));
}), M3 = g.exports.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = g.exports.useRef(null), i = Kn((l) => !l.search);
  return !n && !i ? null : g.exports.createElement("div", { ref: qa([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), F3 = g.exports.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Xm(), l = Kn((s) => s.search), a = Wa();
  return g.exports.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), g.exports.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": a.listId, "aria-labelledby": a.labelId, id: a.inputId, type: "text", value: o ? e.value : l, onChange: (s) => {
    o || i.setState("search", s.target.value), n == null || n(s.target.value);
  } });
}), D3 = g.exports.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = g.exports.useRef(null), i = g.exports.useRef(null), l = Wa();
  return g.exports.useEffect(() => {
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
  }, []), g.exports.createElement("div", { ref: qa([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, g.exports.createElement("div", { ref: i, "cmdk-list-sizer": "" }, n));
}), L3 = g.exports.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...i } = e;
  return g.exports.createElement(y3, { open: n, onOpenChange: r }, g.exports.createElement(x3, { container: o }, g.exports.createElement(w3, { "cmdk-overlay": "" }), g.exports.createElement(b3, { "aria-label": e.label, "cmdk-dialog": "" }, g.exports.createElement(HS, { ref: t, ...i }))));
}), z3 = g.exports.forwardRef((e, t) => {
  let n = g.exports.useRef(!0), r = Kn((o) => o.filtered.count === 0);
  return g.exports.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : g.exports.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), B3 = g.exports.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return g.exports.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, g.exports.createElement("div", { "aria-hidden": !0 }, r));
}), Wt = Object.assign(HS, { List: D3, Item: O3, Input: F3, Group: N3, Separator: M3, Dialog: L3, Empty: z3, Loading: B3 });
function j3(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function V3(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function WS(e) {
  let t = g.exports.useRef(e);
  return Di(() => {
    t.current = e;
  }), t;
}
var Di = typeof window > "u" ? g.exports.useEffect : g.exports.useLayoutEffect;
function zo(e) {
  let t = g.exports.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function qa(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Kn(e) {
  let t = Xm(), n = () => e(t.snapshot());
  return g.exports.useSyncExternalStore(t.subscribe, n, n);
}
function qS(e, t, n) {
  let r = g.exports.useRef(), o = Wa();
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
    o.value(e, l), (i = t.current) == null || i.setAttribute(dr, l), r.current = l;
  }), r;
}
var U3 = () => {
  let [e, t] = g.exports.useState(), n = zo(() => /* @__PURE__ */ new Map());
  return Di(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, H3 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function W3(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Qp = "data-focus-lock", QS = "data-focus-lock-disabled", q3 = "data-no-focus-lock", Q3 = "data-autofocus-inside", G3 = "data-no-autofocus", Yf = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, GS = qm({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), KS = qm(), K3 = qm(), Y3 = Qm({
  async: !0
}), X3 = [], Zm = /* @__PURE__ */ g.exports.forwardRef(function(t, n) {
  var r, o = g.exports.useState(), i = o[0], l = o[1], a = g.exports.useRef(), s = g.exports.useRef(!1), u = g.exports.useRef(null), c = t.children, f = t.disabled, d = t.noFocusGuards, m = t.persistentFocus, h = t.crossFrame, v = t.autoFocus;
  t.allowTextSelection;
  var w = t.group, p = t.className, y = t.whiteList, x = t.hasPositiveIndices, b = t.shards, A = b === void 0 ? X3 : b, S = t.as, $ = S === void 0 ? "div" : S, E = t.lockProps, P = E === void 0 ? {} : E, R = t.sideCar, T = t.returnFocus, O = t.focusOptions, F = t.onActivation, z = t.onDeactivation, D = g.exports.useState({}), _ = D[0], j = g.exports.useCallback(function() {
    u.current = u.current || document && document.activeElement, a.current && F && F(a.current), s.current = !0;
  }, [F]), M = g.exports.useCallback(function() {
    s.current = !1, z && z(a.current);
  }, [z]);
  g.exports.useEffect(function() {
    f || (u.current = null);
  }, []);
  var I = g.exports.useCallback(function(Q) {
    var ne = u.current;
    if (ne && ne.focus) {
      var ge = typeof T == "function" ? T(ne) : T;
      if (ge) {
        var ae = typeof ge == "object" ? ge : void 0;
        u.current = null, Q ? Promise.resolve().then(function() {
          return ne.focus(ae);
        }) : ne.focus(ae);
      }
    }
  }, [T]), N = g.exports.useCallback(function(Q) {
    s.current && GS.useMedium(Q);
  }, []), k = KS.useMedium, C = g.exports.useCallback(function(Q) {
    a.current !== Q && (a.current = Q, l(Q));
  }, []), J = G((r = {}, r[QS] = f && "disabled", r[Qp] = w, r), P), te = d !== !0, se = te && d !== "tail", ee = Wm([n, C]);
  return /* @__PURE__ */ fe(Pn, {
    children: [te && [
      /* @__PURE__ */ B("div", {
        "data-focus-guard": !0,
        tabIndex: f ? -1 : 0,
        style: Yf
      }, "guard-first"),
      x ? /* @__PURE__ */ B("div", {
        "data-focus-guard": !0,
        tabIndex: f ? -1 : 1,
        style: Yf
      }, "guard-nearest") : null
    ], !f && /* @__PURE__ */ B(R, {
      id: _,
      sideCar: Y3,
      observed: i,
      disabled: f,
      persistentFocus: m,
      crossFrame: h,
      autoFocus: v,
      whiteList: y,
      shards: A,
      onActivation: j,
      onDeactivation: M,
      returnFocus: I,
      focusOptions: O
    }), /* @__PURE__ */ B($, {
      ref: ee,
      ...J,
      className: p,
      onBlur: k,
      onFocus: N,
      children: c
    }), se && /* @__PURE__ */ B("div", {
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 0,
      style: Yf
    })]
  });
});
Zm.propTypes = {};
Zm.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const YS = Zm;
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Gp(e, t);
}
function Z3(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gp(e, t);
}
function ha(e) {
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function J3(e, t) {
  if (ha(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ha(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e4(e) {
  var t = J3(e, "string");
  return ha(t) === "symbol" ? t : String(t);
}
function t4(e, t, n) {
  return t = e4(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function n4(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    var i = [], l;
    function a() {
      l = e(i.map(function(u) {
        return u.props;
      })), t(l);
    }
    var s = /* @__PURE__ */ function(u) {
      Z3(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return l;
      };
      var f = c.prototype;
      return f.componentDidMount = function() {
        i.push(this), a();
      }, f.componentDidUpdate = function() {
        a();
      }, f.componentWillUnmount = function() {
        var m = i.indexOf(this);
        i.splice(m, 1), a();
      }, f.render = function() {
        return /* @__PURE__ */ B(o, {
          ...this.props
        });
      }, c;
    }(g.exports.PureComponent);
    return t4(s, "displayName", "SideEffect(" + n(o) + ")"), s;
  };
}
var _n = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Mu = function(e) {
  return Array.isArray(e) ? e : [e];
}, XS = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, r4 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, ZS = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, JS = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, o4 = function(e, t) {
  return !e || JS(e) || !r4(e) && t(ZS(e));
}, ek = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = o4(t, ek.bind(void 0, e));
  return e.set(t, r), r;
}, i4 = function(e, t) {
  return e && !JS(e) ? s4(e) ? t(ZS(e)) : !1 : !0;
}, tk = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = i4(t, tk.bind(void 0, e));
  return e.set(t, r), r;
}, nk = function(e) {
  return e.dataset;
}, l4 = function(e) {
  return e.tagName === "BUTTON";
}, rk = function(e) {
  return e.tagName === "INPUT";
}, ok = function(e) {
  return rk(e) && e.type === "radio";
}, a4 = function(e) {
  return !((rk(e) || l4(e)) && (e.type === "hidden" || e.disabled));
}, s4 = function(e) {
  var t = e.getAttribute(G3);
  return ![!0, "true", ""].includes(t);
}, Jm = function(e) {
  var t;
  return Boolean(e && ((t = nk(e)) === null || t === void 0 ? void 0 : t.focusGuard));
}, Fu = function(e) {
  return !Jm(e);
}, u4 = function(e) {
  return Boolean(e);
}, c4 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, ik = function(e, t, n) {
  return _n(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(c4);
}, f4 = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], eg = f4.join(","), d4 = "".concat(eg, ", [data-focus-guard]"), lk = function(e, t) {
  return _n((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? d4 : eg) ? [r] : [], lk(r));
  }, []);
}, p4 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && ((n = e.contentDocument) === null || n === void 0 ? void 0 : n.body) ? Oc([e.contentDocument.body], t) : [e];
}, Oc = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = lk(r, t), l = (o = []).concat.apply(o, i.map(function(a) {
      return p4(a, t);
    }));
    return n.concat(
      l,
      r.parentNode ? _n(r.parentNode.querySelectorAll(eg)).filter(function(a) {
        return a === r;
      }) : []
    );
  }, []);
}, h4 = function(e) {
  var t = e.querySelectorAll("[".concat(Q3, "]"));
  return _n(t).map(function(n) {
    return Oc([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, tg = function(e, t) {
  return _n(e).filter(function(n) {
    return ek(t, n);
  }).filter(function(n) {
    return a4(n);
  });
}, Qv = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), _n(e).filter(function(n) {
    return tk(t, n);
  });
}, Kp = function(e, t, n) {
  return ik(tg(Oc(e, n), t), !0, n);
}, Gv = function(e, t) {
  return ik(tg(Oc(e), t), !1);
}, m4 = function(e, t) {
  return tg(h4(e), t);
}, ai = function(e, t) {
  return e.shadowRoot ? ai(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : _n(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? ai(o, t) : !1;
    }
    return ai(n, t);
  });
}, g4 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(l, a) {
    return !t.has(a);
  });
}, ak = function(e) {
  return e.parentNode ? ak(e.parentNode) : e;
}, ng = function(e) {
  var t = Mu(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(Qp);
    return n.push.apply(n, o ? g4(_n(ak(r).querySelectorAll("[".concat(Qp, '="').concat(o, '"]:not([').concat(QS, '="disabled"])')))) : [r]), n;
  }, []);
}, v4 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, ma = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? ma(t.shadowRoot) : t instanceof HTMLIFrameElement && v4(function() {
      return t.contentWindow.document;
    }) ? ma(t.contentWindow.document) : t;
  }
}, y4 = function(e, t) {
  return e === t;
}, x4 = function(e, t) {
  return Boolean(_n(e.querySelectorAll("iframe")).some(function(n) {
    return y4(n, t);
  }));
}, sk = function(e, t) {
  return t === void 0 && (t = ma(XS(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ng(e).some(function(n) {
    return ai(n, t) || x4(n, t);
  });
}, w4 = function(e) {
  e === void 0 && (e = document);
  var t = ma(e);
  return t ? _n(e.querySelectorAll("[".concat(q3, "]"))).some(function(n) {
    return ai(n, t);
  }) : !1;
}, b4 = function(e, t) {
  return t.filter(ok).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, rg = function(e, t) {
  return ok(e) && e.name ? b4(e, t) : e;
}, S4 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(rg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Kv = function(e) {
  return e[0] && e.length > 1 ? rg(e[0], e) : e[0];
}, Yv = function(e, t) {
  return e.length > 1 ? e.indexOf(rg(e[t], e)) : t;
}, uk = "NEW_FOCUS", k4 = function(e, t, n, r) {
  var o = e.length, i = e[0], l = e[o - 1], a = Jm(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var s = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : s, c = r ? e.indexOf(r) : -1, f = s - u, d = t.indexOf(i), m = t.indexOf(l), h = S4(t), v = n !== void 0 ? h.indexOf(n) : -1, w = v - (r ? h.indexOf(r) : s), p = Yv(e, 0), y = Yv(e, o - 1);
    if (s === -1 || c === -1)
      return uk;
    if (!f && c >= 0)
      return c;
    if (s <= d && a && Math.abs(f) > 1)
      return y;
    if (s >= m && a && Math.abs(f) > 1)
      return p;
    if (f && Math.abs(w) > 1)
      return c;
    if (s <= d)
      return y;
    if (s > m)
      return p;
    if (f)
      return Math.abs(f) > 1 ? c : (o + c + f) % o;
  }
}, C4 = function(e) {
  return function(t) {
    var n, r = (n = nk(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return t.autofocus || r !== void 0 && r !== "false" || e.indexOf(t) >= 0;
  };
}, E4 = function(e, t, n) {
  var r = e.map(function(i) {
    var l = i.node;
    return l;
  }), o = Qv(r.filter(C4(n)));
  return o && o.length ? Kv(o) : Kv(Qv(t));
}, Yp = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Yp(e.parentNode.host || e.parentNode, t), t;
}, Xf = function(e, t) {
  for (var n = Yp(e), r = Yp(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, ck = function(e, t, n) {
  var r = Mu(e), o = Mu(t), i = r[0], l = !1;
  return o.filter(Boolean).forEach(function(a) {
    l = Xf(l || a, a) || l, n.filter(Boolean).forEach(function(s) {
      var u = Xf(i, s);
      u && (!l || ai(u, l) ? l = u : l = Xf(u, l));
    });
  }), l;
}, $4 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(m4(r, t));
  }, []);
}, A4 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(u4);
}, P4 = function(e, t) {
  var n = ma(Mu(e).length > 0 ? document : XS(e).ownerDocument), r = ng(e).filter(Fu), o = ck(n || e, e, r), i = /* @__PURE__ */ new Map(), l = Gv(r, i), a = Kp(r, i).filter(function(m) {
    var h = m.node;
    return Fu(h);
  });
  if (!(!a[0] && (a = l, !a[0]))) {
    var s = Gv([o], i).map(function(m) {
      var h = m.node;
      return h;
    }), u = A4(s, a), c = u.map(function(m) {
      var h = m.node;
      return h;
    }), f = k4(c, s, n, t);
    if (f === uk) {
      var d = E4(l, c, $4(r, i));
      if (d)
        return { node: d };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : u[f];
  }
}, _4 = function(e) {
  var t = ng(e).filter(Fu), n = ck(e, e, t), r = /* @__PURE__ */ new Map(), o = Kp([n], r, !0), i = Kp(t, r).filter(function(l) {
    var a = l.node;
    return Fu(a);
  }).map(function(l) {
    var a = l.node;
    return a;
  });
  return o.map(function(l) {
    var a = l.node, s = l.index;
    return {
      node: a,
      index: s,
      lockItem: i.indexOf(a) >= 0,
      guard: Jm(a)
    };
  });
}, R4 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Zf = 0, Jf = !1, T4 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = P4(e, t);
  if (!Jf && r) {
    if (Zf > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Jf = !0, setTimeout(function() {
        Jf = !1;
      }, 1);
      return;
    }
    Zf++, R4(r.node, n.focusOptions), Zf--;
  }
};
const fk = T4;
function dk(e) {
  var t = window, n = t.setImmediate;
  typeof n < "u" ? n(e) : setTimeout(e, 1);
}
var I4 = function() {
  return document && document.activeElement === document.body;
}, O4 = function() {
  return I4() || w4();
}, si = null, Zo = null, ui = null, ga = !1, N4 = function() {
  return !0;
}, M4 = function(t) {
  return (si.whiteList || N4)(t);
}, F4 = function(t, n) {
  ui = {
    observerNode: t,
    portaledElement: n
  };
}, D4 = function(t) {
  return ui && ui.portaledElement === t;
};
function Xv(e, t, n, r) {
  var o = null, i = e;
  do {
    var l = r[i];
    if (l.guard)
      l.node.dataset.focusAutoGuard && (o = l);
    else if (l.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var L4 = function(t) {
  return t && "current" in t ? t.current : t;
}, z4 = function(t) {
  return t ? Boolean(ga) : ga === "meanwhile";
}, B4 = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, j4 = function(t, n) {
  return n.some(function(r) {
    return B4(t, r, r);
  });
}, Du = function() {
  var t = !1;
  if (si) {
    var n = si, r = n.observed, o = n.persistentFocus, i = n.autoFocus, l = n.shards, a = n.crossFrame, s = n.focusOptions, u = r || ui && ui.portaledElement, c = document && document.activeElement;
    if (u) {
      var f = [u].concat(l.map(L4).filter(Boolean));
      if ((!c || M4(c)) && (o || z4(a) || !O4() || !Zo && i) && (u && !(sk(f) || c && j4(c, f) || D4(c)) && (document && !Zo && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = fk(f, Zo, {
        focusOptions: s
      }), ui = {})), ga = !1, Zo = document && document.activeElement), document) {
        var d = document && document.activeElement, m = _4(f), h = m.map(function(v) {
          var w = v.node;
          return w;
        }).indexOf(d);
        h > -1 && (m.filter(function(v) {
          var w = v.guard, p = v.node;
          return w && p.dataset.focusAutoGuard;
        }).forEach(function(v) {
          var w = v.node;
          return w.removeAttribute("tabIndex");
        }), Xv(h, m.length, 1, m), Xv(h, -1, -1, m));
      }
    }
  }
  return t;
}, pk = function(t) {
  Du() && t && (t.stopPropagation(), t.preventDefault());
}, og = function() {
  return dk(Du);
}, V4 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || F4(r, n);
}, U4 = function() {
  return null;
}, hk = function() {
  ga = "just", setTimeout(function() {
    ga = "meanwhile";
  }, 0);
}, H4 = function() {
  document.addEventListener("focusin", pk), document.addEventListener("focusout", og), window.addEventListener("blur", hk);
}, W4 = function() {
  document.removeEventListener("focusin", pk), document.removeEventListener("focusout", og), window.removeEventListener("blur", hk);
};
function q4(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function Q4(e) {
  var t = e.slice(-1)[0];
  t && !si && H4();
  var n = si, r = n && t && t.id === n.id;
  si = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Zo = null, (!r || n.observed !== t.observed) && t.onActivation(), Du(), dk(Du)) : (W4(), Zo = null);
}
GS.assignSyncMedium(V4);
KS.assignMedium(og);
K3.assignMedium(function(e) {
  return e({
    moveFocusInside: fk,
    focusInside: sk
  });
});
const G4 = n4(q4, Q4)(U4);
var mk = /* @__PURE__ */ g.exports.forwardRef(function(t, n) {
  return /* @__PURE__ */ B(YS, {
    sideCar: G4,
    ref: n,
    ...t
  });
}), gk = YS.propTypes || {};
gk.sideCar;
W3(gk, ["sideCar"]);
mk.propTypes = {};
const K4 = mk;
let ig = Ga();
const oe = (e) => Qa(e, ig);
let lg = Ga();
oe.write = (e) => Qa(e, lg);
let Nc = Ga();
oe.onStart = (e) => Qa(e, Nc);
let ag = Ga();
oe.onFrame = (e) => Qa(e, ag);
let sg = Ga();
oe.onFinish = (e) => Qa(e, sg);
let ci = [];
oe.setTimeout = (e, t) => {
  let n = oe.now() + t, r = () => {
    let i = ci.findIndex((l) => l.cancel == r);
    ~i && ci.splice(i, 1), wr -= ~i ? 1 : 0;
  }, o = {
    time: n,
    handler: e,
    cancel: r
  };
  return ci.splice(vk(n), 0, o), wr += 1, yk(), o;
};
let vk = (e) => ~(~ci.findIndex((t) => t.time > e) || ~ci.length);
oe.cancel = (e) => {
  Nc.delete(e), ag.delete(e), ig.delete(e), lg.delete(e), sg.delete(e);
};
oe.sync = (e) => {
  Xp = !0, oe.batchedUpdates(e), Xp = !1;
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
    Nc.delete(n), t = null;
  }, r;
};
let ug = typeof window < "u" ? window.requestAnimationFrame : () => {
};
oe.use = (e) => ug = e;
oe.now = typeof performance < "u" ? () => performance.now() : Date.now;
oe.batchedUpdates = (e) => e();
oe.catch = console.error;
oe.frameLoop = "always";
oe.advance = () => {
  oe.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : wk();
};
let xr = -1, wr = 0, Xp = !1;
function Qa(e, t) {
  Xp ? (t.delete(e), e(0)) : (t.add(e), yk());
}
function yk() {
  xr < 0 && (xr = 0, oe.frameLoop !== "demand" && ug(xk));
}
function Y4() {
  xr = -1;
}
function xk() {
  ~xr && (ug(xk), oe.batchedUpdates(wk));
}
function wk() {
  let e = xr;
  xr = oe.now();
  let t = vk(xr);
  t && (bk(ci.splice(0, t), (n) => n.handler()), wr -= t), Nc.flush(), ig.flush(e ? Math.min(64, xr - e) : 16.667), ag.flush(), lg.flush(), sg.flush(), wr || Y4();
}
function Ga() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      wr += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return wr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), wr -= t.size, bk(t, (r) => r(n) && e.add(r)), wr += e.size, t = e);
    }
  };
}
function bk(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
function Zp() {
}
const X4 = (e, t, n) => Object.defineProperty(e, t, {
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
function Ml(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), he(n, t);
  }
}
const xl = (e, ...t) => Ml(e, (n) => n(...t)), Sk = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let cg, kk, Ir = null, Ck = !1, fg = Zp;
const Z4 = (e) => {
  e.to && (kk = e.to), e.now && (oe.now = e.now), e.colors !== void 0 && (Ir = e.colors), e.skipAnimation != null && (Ck = e.skipAnimation), e.createStringInterpolator && (cg = e.createStringInterpolator), e.requestAnimationFrame && oe.use(e.requestAnimationFrame), e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates), e.willAdvance && (fg = e.willAdvance), e.frameLoop && (oe.frameLoop = e.frameLoop);
};
var $n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return cg;
  },
  get to() {
    return kk;
  },
  get colors() {
    return Ir;
  },
  get skipAnimation() {
    return Ck;
  },
  get willAdvance() {
    return fg;
  },
  assign: Z4
});
const Fl = /* @__PURE__ */ new Set();
let jt = [], ed = [], Lu = 0;
const Mc = {
  get idle() {
    return !Fl.size && !jt.length;
  },
  start(e) {
    Lu > e.priority ? (Fl.add(e), oe.onStart(J4)) : (Ek(e), oe(Jp));
  },
  advance: Jp,
  sort(e) {
    if (Lu)
      oe.onFrame(() => Mc.sort(e));
    else {
      const t = jt.indexOf(e);
      ~t && (jt.splice(t, 1), $k(e));
    }
  },
  clear() {
    jt = [], Fl.clear();
  }
};
function J4() {
  Fl.forEach(Ek), Fl.clear(), oe(Jp);
}
function Ek(e) {
  jt.includes(e) || $k(e);
}
function $k(e) {
  jt.splice(eR(jt, (t) => t.priority > e.priority), 0, e);
}
function Jp(e) {
  const t = ed;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    Lu = r.priority, r.idle || (fg(r), r.advance(e), r.idle || t.push(r));
  }
  return Lu = 0, ed = jt, ed.length = 0, jt = t, jt.length > 0;
}
function eR(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
const tR = {
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
}, an = "[-+]?\\d*\\.?\\d+", zu = an + "%";
function Fc(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const nR = new RegExp("rgb" + Fc(an, an, an)), rR = new RegExp("rgba" + Fc(an, an, an, an)), oR = new RegExp("hsl" + Fc(an, zu, zu)), iR = new RegExp("hsla" + Fc(an, zu, zu, an)), lR = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, aR = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, sR = /^#([0-9a-fA-F]{6})$/, uR = /^#([0-9a-fA-F]{8})$/;
function cR(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = sR.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ir && Ir[e] !== void 0 ? Ir[e] : (t = nR.exec(e)) ? (No(t[1]) << 24 | No(t[2]) << 16 | No(t[3]) << 8 | 255) >>> 0 : (t = rR.exec(e)) ? (No(t[1]) << 24 | No(t[2]) << 16 | No(t[3]) << 8 | ey(t[4])) >>> 0 : (t = lR.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = uR.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = aR.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = oR.exec(e)) ? (Zv(Jv(t[1]), $s(t[2]), $s(t[3])) | 255) >>> 0 : (t = iR.exec(e)) ? (Zv(Jv(t[1]), $s(t[2]), $s(t[3])) | ey(t[4])) >>> 0 : null;
}
function td(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Zv(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = td(o, r, e + 1 / 3), l = td(o, r, e), a = td(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function No(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Jv(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function ey(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function $s(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ty(e) {
  let t = cR(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
const va = (e, t, n) => {
  if (W.fun(e))
    return e;
  if (W.arr(e))
    return va({
      range: e,
      output: t,
      extrapolate: n
    });
  if (W.str(e.output[0]))
    return cg(e);
  const r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    const c = dR(u, i);
    return fR(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function fR(e, t, n, r, o, i, l, a, s) {
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
function dR(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
function eh() {
  return eh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, eh.apply(this, arguments);
}
const Ai = Symbol.for("FluidValue.get"), mo = Symbol.for("FluidValue.observers"), Lt = (e) => Boolean(e && e[Ai]), vt = (e) => e && e[Ai] ? e[Ai]() : e, ny = (e) => e[mo] || null;
function pR(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ya(e, t) {
  let n = e[mo];
  n && n.forEach((r) => {
    pR(r, t);
  });
}
class Ak {
  constructor(t) {
    if (this[Ai] = void 0, this[mo] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    hR(this, t);
  }
}
const hR = (e, t) => Pk(e, Ai, t);
function Li(e, t) {
  if (e[Ai]) {
    let n = e[mo];
    n || Pk(e, mo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function xa(e, t) {
  let n = e[mo];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[mo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
const Pk = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Xs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, mR = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ry = new RegExp(`(${Xs.source})(%|[a-z]+)`, "i"), gR = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Dc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, _k = (e) => {
  const [t, n] = vR(e);
  if (!t || Sk())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Dc.test(n))
      return _k(n);
    if (n)
      return n;
  }
  return e;
}, vR = (e) => {
  const t = Dc.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
};
let nd;
const yR = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, Rk = (e) => {
  nd || (nd = Ir ? new RegExp(`(${Object.keys(Ir).join("|")})(?!\\w)`, "g") : /^\b$/);
  const t = e.output.map((i) => vt(i).replace(Dc, _k).replace(mR, ty).replace(nd, ty)), n = t.map((i) => i.match(Xs).map(Number)), o = n[0].map((i, l) => n.map((a) => {
    if (!(l in a))
      throw Error('The arity of each "output" value must be equal');
    return a[l];
  })).map((i) => va(eh({}, e, {
    output: i
  })));
  return (i) => {
    var l;
    const a = !ry.test(t[0]) && ((l = t.find((u) => ry.test(u))) == null ? void 0 : l.replace(Xs, ""));
    let s = 0;
    return t[0].replace(Xs, () => `${o[s++](i)}${a || ""}`).replace(gR, yR);
  };
}, dg = "react-spring: ", Tk = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${dg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, xR = Tk(console.warn);
function wR() {
  xR(`${dg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const bR = Tk(console.warn);
function SR() {
  bR(`${dg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Lc(e) {
  return W.str(e) && (e[0] == "#" || /\d/.test(e) || !Sk() && Dc.test(e) || e in (Ir || {}));
}
const pg = typeof window < "u" && window.document && window.document.createElement ? g.exports.useLayoutEffect : g.exports.useEffect, kR = () => {
  const e = g.exports.useRef(!1);
  return pg(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Ik() {
  const e = g.exports.useState()[1], t = kR();
  return () => {
    t.current && e(Math.random());
  };
}
function CR(e, t) {
  const [n] = g.exports.useState(() => ({
    inputs: t,
    result: e()
  })), r = g.exports.useRef(), o = r.current;
  let i = o;
  return i ? Boolean(t && i.inputs && ER(t, i.inputs)) || (i = {
    inputs: t,
    result: e()
  }) : i = n, g.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function ER(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const Ok = (e) => g.exports.useEffect(e, $R), $R = [];
function oy(e) {
  const t = g.exports.useRef();
  return g.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
const wa = Symbol.for("Animated:node"), AR = (e) => !!e && e[wa] === e, xn = (e) => e && e[wa], hg = (e, t) => X4(e, wa, t), zc = (e) => e && e[wa] && e[wa].getPayload();
class Nk {
  constructor() {
    this.payload = void 0, hg(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class zi extends Nk {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, W.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new zi(t);
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
class Pi extends zi {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = va({
      output: [t, t]
    });
  }
  static create(t) {
    return new Pi(t);
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
    t && (this._toString = va({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}
const Bu = {
  dependencies: null
};
class Bc extends Nk {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return En(this.source, (r, o) => {
      AR(r) ? n[o] = r.getValue(t) : Lt(r) ? n[o] = vt(r) : t || (n[o] = r);
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
    Bu.dependencies && Lt(t) && Bu.dependencies.add(t);
    const n = zc(t);
    n && he(n, (r) => this.add(r));
  }
}
class mg extends Bc {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new mg(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((r, o) => r.setValue(t[o])).some(Boolean) : (super.setValue(t.map(PR)), !0);
  }
}
function PR(e) {
  return (Lc(e) ? Pi : zi).create(e);
}
function th(e) {
  const t = xn(e);
  return t ? t.constructor : W.arr(e) ? mg : Lc(e) ? Pi : zi;
}
function nh() {
  return nh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nh.apply(this, arguments);
}
const iy = (e, t) => {
  const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
  return g.exports.forwardRef((r, o) => {
    const i = g.exports.useRef(null), l = n && g.exports.useCallback((h) => {
      i.current = TR(o, h);
    }, [o]), [a, s] = RR(r, t), u = Ik(), c = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new _R(c, s), d = g.exports.useRef();
    pg(() => (d.current = f, he(s, (h) => Li(h, f)), () => {
      d.current && (he(d.current.deps, (h) => xa(h, d.current)), oe.cancel(d.current.update));
    })), g.exports.useEffect(c, []), Ok(() => () => {
      const h = d.current;
      he(h.deps, (v) => xa(v, h));
    });
    const m = t.getComponentProps(a.getValue());
    return /* @__PURE__ */ B(e, {
      ...m,
      ref: l
    });
  });
};
class _R {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && oe.write(this.update);
  }
}
function RR(e, t) {
  const n = /* @__PURE__ */ new Set();
  return Bu.dependencies = n, e.style && (e = nh({}, e, {
    style: t.createAnimatedStyle(e.style)
  })), e = new Bc(e), Bu.dependencies = null, [e, n];
}
function TR(e, t) {
  return e && (W.fun(e) ? e(t) : e.current = t), t;
}
const ly = Symbol.for("AnimatedComponent"), IR = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new Bc(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (l) => {
    const a = ay(l) || "Anonymous";
    return W.str(l) ? l = i[l] || (i[l] = iy(l, o)) : l = l[ly] || (l[ly] = iy(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return En(e, (l, a) => {
    W.arr(e) && (a = ay(l)), i[a] = i(l);
  }), {
    animated: i
  };
}, ay = (e) => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;
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
function Jr(e, ...t) {
  return W.fun(e) ? e(...t) : e;
}
const Dl = (e, t) => e === !0 || !!(t && e && (W.fun(e) ? e(t) : At(e).includes(t))), Mk = (e, t) => W.obj(e) ? t && e[t] : e, Fk = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, OR = (e) => e, gg = (e, t = OR) => {
  let n = NR;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    W.und(i) || (r[o] = i);
  }
  return r;
}, NR = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], MR = {
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
function FR(e) {
  const t = {};
  let n = 0;
  if (En(e, (r, o) => {
    MR[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function Dk(e) {
  const t = FR(e);
  if (t) {
    const n = {
      to: t
    };
    return En(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return Ke({}, e);
}
function ba(e) {
  return e = vt(e), W.arr(e) ? e.map(ba) : Lc(e) ? $n.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function DR(e) {
  for (const t in e)
    return !0;
  return !1;
}
function rh(e) {
  return W.fun(e) || W.arr(e) && W.obj(e[0]);
}
function LR(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function zR(e, t) {
  if (t && e.ref !== t) {
    var n;
    (n = e.ref) == null || n.delete(e), t.add(e), e.ref = t;
  }
}
const BR = {
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
}, ju = 1.70158, As = ju * 1.525, sy = ju + 1, uy = 2 * Math.PI / 3, cy = 2 * Math.PI / 4.5, Ps = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, jR = {
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
  easeInBack: (e) => sy * e * e * e - ju * e * e,
  easeOutBack: (e) => 1 + sy * Math.pow(e - 1, 3) + ju * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((As + 1) * 2 * e - As) / 2 : (Math.pow(2 * e - 2, 2) * ((As + 1) * (e * 2 - 2) + As) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * uy),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * uy) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * cy)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * cy) / 2 + 1,
  easeInBounce: (e) => 1 - Ps(1 - e),
  easeOutBounce: Ps,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Ps(1 - 2 * e)) / 2 : (1 + Ps(2 * e - 1)) / 2
}, oh = Ke({}, BR.default, {
  mass: 1,
  damping: 1,
  easing: jR.linear,
  clamp: !1
});
class VR {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, oh);
  }
}
function UR(e, t, n) {
  n && (n = Ke({}, n), fy(n, t), t = Ke({}, n, t)), fy(e, t), Object.assign(e, t);
  for (const l in oh)
    e[l] == null && (e[l] = oh[l]);
  let {
    mass: r,
    frequency: o,
    damping: i
  } = e;
  return W.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function fy(e, t) {
  if (!W.und(t.decay))
    e.duration = void 0;
  else {
    const n = !W.und(t.tension) || !W.und(t.friction);
    (n || !W.und(t.frequency) || !W.und(t.damping) || !W.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
const dy = [];
class HR {
  constructor() {
    this.changed = !1, this.values = dy, this.toValues = null, this.fromValues = dy, this.to = void 0, this.from = void 0, this.config = new VR(), this.immediate = !1;
  }
}
function Lk(e, {
  key: t,
  props: n,
  defaultProps: r,
  state: o,
  actions: i
}) {
  return new Promise((l, a) => {
    var s;
    let u, c, f = Dl((s = n.cancel) != null ? s : r == null ? void 0 : r.cancel, t);
    if (f)
      h();
    else {
      W.und(n.pause) || (o.paused = Dl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Dl(v, t)), u = Jr(n.delay || 0, t), v ? (o.resumeQueue.add(m), i.pause()) : (i.resume(), m());
    }
    function d() {
      o.resumeQueue.add(m), o.timeouts.delete(c), c.cancel(), u = c.time - oe.now();
    }
    function m() {
      u > 0 && !$n.skipAnimation ? (o.delayed = !0, c = oe.setTimeout(h, u), o.pauseQueue.add(d), o.timeouts.add(c)) : h();
    }
    function h() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0);
      try {
        i.start(Ke({}, n, {
          callId: e,
          cancel: f
        }), l);
      } catch (v) {
        a(v);
      }
    }
  });
}
const vg = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? fi(e.get()) : t.every((n) => n.noop) ? zk(e.get()) : on(e.get(), t.every((n) => n.finished)), zk = (e) => ({
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
function Bk(e, t, n, r) {
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
    const u = gg(t, (w, p) => p === "onRest" ? void 0 : w);
    let c, f;
    const d = new Promise((w, p) => (c = w, f = p)), m = (w) => {
      const p = o <= (n.cancelId || 0) && fi(r) || o !== n.asyncId && on(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      const y = new py(), x = new hy();
      return (async () => {
        if ($n.skipAnimation)
          throw Sa(n), x.result = on(r, !1), f(x), x;
        m(y);
        const b = W.obj(w) ? Ke({}, w) : Ke({}, p, {
          to: w
        });
        b.parentId = o, En(u, (S, $) => {
          W.und(b[$]) && (b[$] = S);
        });
        const A = await r.start(b);
        return m(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    };
    let v;
    if ($n.skipAnimation)
      return Sa(n), on(r, !1);
    try {
      let w;
      W.arr(e) ? w = (async (p) => {
        for (const y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = on(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof py)
        v = w.result;
      else if (w instanceof hy)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return W.fun(l) && oe.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function Sa(e, t) {
  Ml(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
class py extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class hy extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const ih = (e) => e instanceof yg;
let WR = 1;
class yg extends Ak {
  constructor(...t) {
    super(...t), this.id = WR++, this.key = void 0, this._priority = 0;
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
    return wR(), $n.to(this, t);
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
    ya(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Mc.sort(this), ya(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}
const go = Symbol.for("SpringPhase"), jk = 1, lh = 2, ah = 4, rd = (e) => (e[go] & jk) > 0, sr = (e) => (e[go] & lh) > 0, rl = (e) => (e[go] & ah) > 0, my = (e, t) => t ? e[go] |= lh | jk : e[go] &= ~lh, gy = (e, t) => t ? e[go] |= ah : e[go] &= ~ah;
class qR extends yg {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new HR(), this.queue = void 0, this.defaultProps = {}, this._state = {
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
    return !(sr(this) || this._state.asyncTo) || rl(this);
  }
  get goal() {
    return vt(this.animation.to);
  }
  get velocity() {
    const t = xn(this);
    return t instanceof zi ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return rd(this);
  }
  get isAnimating() {
    return sr(this);
  }
  get isPaused() {
    return rl(this);
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
    const a = zc(o.to);
    !a && Lt(o.to) && (l = At(vt(o.to))), o.values.forEach((c, f) => {
      if (c.done)
        return;
      const d = c.constructor == Pi ? 1 : a ? a[f].lastPosition : l[f];
      let m = o.immediate, h = d;
      if (!m) {
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
            h = w + p / (1 - x) * (1 - b), m = Math.abs(c.lastPosition - h) < 0.1, y = p * b;
          } else {
            y = c.lastVelocity == null ? p : c.lastVelocity;
            const x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3)), b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !W.und(A), $ = w == d ? c.v0 > 0 : w < d;
            let E, P = !1;
            const R = 1, T = Math.ceil(t / R);
            for (let O = 0; O < T && (E = Math.abs(y) > b, !(!E && (m = Math.abs(d - h) <= x, m))); ++O) {
              S && (P = h == d || h > d == $, P && (y = -y * A, h = d));
              const F = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * y, D = (F + z) / i.mass;
              y = y + D * R, h = h + y * R;
            }
          }
        else {
          let x = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, v = c.elapsedTime += t)), x = (i.progress || 0) + v / this._memoizedDuration, x = x > 1 ? 1 : x < 0 ? 0 : x, c.durationProgress = x), h = w + i.easing(x) * (d - w), y = (h - c.lastPosition) / t, m = x == 1;
        }
        c.lastVelocity = y, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), m = !0);
      }
      a && !a[f].done && (m = !1), m ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    const s = xn(this), u = s.getValue();
    if (n) {
      const c = vt(o.to);
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
    return W.und(t) ? (r = this.queue || [], this.queue = []) : r = [W.obj(t) ? t : Ke({}, n, {
      to: t
    })], Promise.all(r.map((o) => this._update(o))).then((o) => vg(this, o));
  }
  stop(t) {
    const {
      to: n
    } = this.animation;
    return this._focus(this.get()), Sa(this._state, t && this._lastCallId), oe.batchedUpdates(() => this._stop(n, t)), this;
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
    r = W.obj(r) ? r[n] : r, (r == null || rh(r)) && (r = void 0), o = W.obj(o) ? o[n] : o, o == null && (o = void 0);
    const i = {
      to: r,
      from: o
    };
    return rd(this) || (t.reverse && ([r, o] = [o, r]), o = vt(o), W.und(o) ? xn(this) || this._set(r) : this._set(o)), i;
  }
  _update(t, n) {
    let r = Ke({}, t);
    const {
      key: o,
      defaultProps: i
    } = this;
    r.default && Object.assign(i, gg(r, (s, u) => /^on/.test(u) ? Mk(s, o) : s)), yy(this, r, "onProps"), il(this, "onProps", r, this);
    const l = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const a = this._state;
    return Lk(++this._lastCallId, {
      key: o,
      props: r,
      defaultProps: i,
      state: a,
      actions: {
        pause: () => {
          rl(this) || (gy(this, !0), xl(a.pauseQueue), il(this, "onPause", on(this, ol(this, this.animation.to)), this));
        },
        resume: () => {
          rl(this) && (gy(this, !1), sr(this) && this._resume(), xl(a.resumeQueue), il(this, "onResume", on(this, ol(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, l)
      }
    }).then((s) => {
      if (r.loop && s.finished && !(n && s.noop)) {
        const u = Vk(r);
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
    const m = !Mn(d, c);
    m && (s.from = d), d = vt(d);
    const h = !Mn(f, u);
    h && this._focus(f);
    const v = rh(n.to), {
      config: w
    } = s, {
      decay: p,
      velocity: y
    } = w;
    (o || i) && (w.velocity = 0), n.config && !v && UR(w, Jr(n.config, l), n.config !== a.config ? Jr(a.config, l) : void 0);
    let x = xn(this);
    if (!x || W.und(f))
      return r(on(this, !0));
    const b = W.und(n.reset) ? i && !n.default : !W.und(d) && Dl(n.reset, l), A = b ? d : this.get(), S = ba(f), $ = W.num(S) || W.arr(S) || Lc(S), E = !v && (!$ || Dl(a.immediate || n.immediate, l));
    if (h) {
      const O = th(f);
      if (O !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    const P = x.constructor;
    let R = Lt(f), T = !1;
    if (!R) {
      const O = b || !rd(this) && m;
      (h || O) && (T = Mn(ba(A), S), R = !T), (!Mn(s.immediate, E) && !E || !Mn(w.decay, p) || !Mn(w.velocity, y)) && (R = !0);
    }
    if (T && sr(this) && (s.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || Lt(u)) && (s.values = x.getPayload(), s.toValues = Lt(f) ? null : P == Pi ? [1] : At(S)), s.immediate != E && (s.immediate = E, !E && !b && this._set(u)), R)) {
      const {
        onRest: O
      } = s;
      he(GR, (z) => yy(this, n, z));
      const F = on(this, ol(this, u));
      xl(this._pendingCalls, F), this._pendingCalls.add(r), s.changed && oe.batchedUpdates(() => {
        s.changed = !b, O == null || O(F, this), b ? Jr(a.onRest, F) : s.onStart == null || s.onStart(F, this);
      });
    }
    b && this._set(A), v ? r(Bk(n.to, n, this._state, this)) : R ? this._start() : sr(this) && !h ? this._pendingCalls.add(r) : r(zk(A));
  }
  _focus(t) {
    const n = this.animation;
    t !== n.to && (ny(this) && this._detach(), n.to = t, ny(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const {
      to: n
    } = this.animation;
    Lt(n) && (Li(n, this), ih(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    const {
      to: t
    } = this.animation;
    Lt(t) && xa(t, this);
  }
  _set(t, n = !0) {
    const r = vt(t);
    if (!W.und(r)) {
      const o = xn(this);
      if (!o || !Mn(r, o.getValue())) {
        const i = th(r);
        !o || o.constructor != i ? hg(this, i.create(r)) : o.setValue(r), o && oe.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return xn(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, il(this, "onStart", on(this, ol(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), Jr(this.animation.onChange, t, this)), Jr(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    const t = this.animation;
    xn(this).reset(vt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), sr(this) || (my(this, !0), rl(this) || this._resume());
  }
  _resume() {
    $n.skipAnimation ? this.finish() : Mc.start(this);
  }
  _stop(t, n) {
    if (sr(this)) {
      my(this, !1);
      const r = this.animation;
      he(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ya(this, {
        type: "idle",
        parent: this
      });
      const o = n ? fi(this.get()) : on(this.get(), ol(this, t != null ? t : r.to));
      xl(this._pendingCalls, o), r.changed && (r.changed = !1, il(this, "onRest", o, this));
    }
  }
}
function ol(e, t) {
  const n = ba(t), r = ba(e.get());
  return Mn(r, n);
}
function Vk(e, t = e.loop, n = e.to) {
  let r = Jr(t);
  if (r) {
    const o = r !== !0 && Dk(r), i = (o || e).reverse, l = !o || o.reset;
    return ka(Ke({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || rh(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l
    }, o));
  }
}
function ka(e) {
  const {
    to: t,
    from: n
  } = e = Dk(e), r = /* @__PURE__ */ new Set();
  return W.obj(t) && vy(t, r), W.obj(n) && vy(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function QR(e) {
  const t = ka(e);
  return W.und(t.default) && (t.default = gg(t)), t;
}
function vy(e, t) {
  En(e, (n, r) => n != null && t.add(r));
}
const GR = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function yy(e, t, n) {
  e.animation[n] = t[n] !== Fk(t, n) ? Mk(t[n], e.key) : void 0;
}
function il(e, t, ...n) {
  var r, o, i, l;
  (r = (o = e.animation)[t]) == null || r.call(o, ...n), (i = (l = e.defaultProps)[t]) == null || i.call(l, ...n);
}
const KR = ["onStart", "onChange", "onRest"];
let YR = 1;
class XR {
  constructor(t, n) {
    this.id = YR++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
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
    return t && this.queue.push(ka(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = At(t).map(ka) : this.queue = [], this._flush ? this._flush(this, n) : (Qk(this, n), sh(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      he(At(n), (o) => r[o].stop(!!t));
    } else
      Sa(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
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
    (o && !this._started || i && !this._started) && (this._started = !0, Ml(t, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const l = !o && this._started, a = i || l && r.size ? this.get() : null;
    i && n.size && Ml(n, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), l && (this._started = !1, Ml(r, ([s, u]) => {
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
    oe.onFrame(this._onFrame);
  }
}
function sh(e, t) {
  return Promise.all(t.map((n) => Uk(e, n))).then((n) => vg(e, n));
}
async function Uk(e, t, n) {
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
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : he(KR, (v) => {
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
  const d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), m = t.cancel === !0 || Fk(t, "cancel") === !0;
  (c || m && f.asyncId) && d.push(Lk(++e._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: Zp,
      resume: Zp,
      start(v, w) {
        m ? (Sa(f, e._lastAsyncId), w(fi(e))) : (v.onRest = a, w(Bk(c, v, f, e)));
      }
    }
  })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const h = vg(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    const v = Vk(t, l, o);
    if (v)
      return Qk(e, [v]), Uk(e, v, !0);
  }
  return s && oe.batchedUpdates(() => s(h, e, e.item)), h;
}
function xy(e, t) {
  const n = Ke({}, e.springs);
  return t && he(At(t), (r) => {
    W.und(r.keys) && (r = ka(r)), W.obj(r.to) || (r = Ke({}, r, {
      to: void 0
    })), qk(n, r, (o) => Wk(o));
  }), Hk(e, n), n;
}
function Hk(e, t) {
  En(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Li(n, e));
  });
}
function Wk(e, t) {
  const n = new qR();
  return n.key = e, t && Li(n, t), n;
}
function qk(e, t, n) {
  t.keys && he(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function Qk(e, t) {
  he(t, (n) => {
    qk(e.springs, n, (r) => Wk(r, e));
  });
}
function ZR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const JR = ["children"], jc = (e) => {
  let {
    children: t
  } = e, n = ZR(e, JR);
  const r = g.exports.useContext(Vu), o = n.pause || !!r.pause, i = n.immediate || !!r.immediate;
  n = CR(() => ({
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
}, Vu = eT(jc, {});
jc.Provider = Vu.Provider;
jc.Consumer = Vu.Consumer;
function eT(e, t) {
  return Object.assign(e, g.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
const tT = () => {
  const e = [], t = function(o) {
    SR();
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
function nT(e, t, n) {
  const r = W.fun(t) && t;
  r && !n && (n = []);
  const o = g.exports.useMemo(() => r || arguments.length == 3 ? tT() : void 0, []), i = g.exports.useRef(0), l = Ik(), a = g.exports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(p, y) {
      const x = xy(p, y);
      return i.current > 0 && !a.queue.length && !Object.keys(x).some((A) => !p.springs[A]) ? sh(p, y) : new Promise((A) => {
        Hk(p, x), a.queue.push(() => {
          A(sh(p, y));
        }), l();
      });
    }
  }), []), s = g.exports.useRef([...a.ctrls]), u = [], c = oy(e) || 0;
  g.exports.useMemo(() => {
    he(s.current.slice(e, c), (p) => {
      LR(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), g.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      const b = s.current[x] || (s.current[x] = new XR(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = QR(A));
    }
  }
  const d = s.current.map((p, y) => xy(p, u[y])), m = g.exports.useContext(jc), h = oy(m), v = m !== h && DR(m);
  pg(() => {
    i.current++, a.ctrls = s.current;
    const {
      queue: p
    } = a;
    p.length && (a.queue = [], he(p, (y) => y())), he(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({
        default: m
      });
      const b = u[x];
      b && (zR(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), Ok(() => () => {
    he(a.ctrls, (p) => p.stop(!0));
  });
  const w = d.map((p) => Ke({}, p));
  return o ? [w, o] : w;
}
function rT(e, t) {
  const n = W.fun(e), [[r], o] = nT(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
let wy;
(function(e) {
  e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave";
})(wy || (wy = {}));
class oT extends yg {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = va(...n);
    const r = this._get(), o = th(r);
    hg(this, o.create(r));
  }
  advance(t) {
    const n = this._get(), r = this.get();
    Mn(n, r) || (xn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && by(this._active) && od(this);
  }
  _get() {
    const t = W.arr(this.source) ? this.source.map(vt) : At(vt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !by(this._active) && (this.idle = !1, he(zc(this), (t) => {
      t.done = !1;
    }), $n.skipAnimation ? (oe.batchedUpdates(() => this.advance()), od(this)) : Mc.start(this));
  }
  _attach() {
    let t = 1;
    he(At(this.source), (n) => {
      Lt(n) && Li(n, this), ih(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    he(At(this.source), (t) => {
      Lt(t) && xa(t, this);
    }), this._active.clear(), od(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = At(this.source).reduce((n, r) => Math.max(n, (ih(r) ? r.priority : 0) + 1), 0));
  }
}
function iT(e) {
  return e.idle !== !1;
}
function by(e) {
  return !e.size || Array.from(e).every(iT);
}
function od(e) {
  e.idle || (e.idle = !0, he(zc(e), (t) => {
    t.done = !0;
  }), ya(e, {
    type: "idle",
    parent: e
  }));
}
$n.assign({
  createStringInterpolator: Rk,
  to: (e, t) => new oT(e, t)
});
function xg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const lT = ["style", "children", "scrollTop", "scrollLeft"], Gk = /^--/;
function aT(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Gk.test(e) && !(Ll.hasOwnProperty(e) && Ll[e]) ? t + "px" : ("" + t).trim();
}
const Sy = {};
function sT(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", r = t, {
    style: o,
    children: i,
    scrollTop: l,
    scrollLeft: a
  } = r, s = xg(r, lT), u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : Sy[f] || (Sy[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (let f in o)
    if (o.hasOwnProperty(f)) {
      const d = aT(f, o[f]);
      Gk.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), l !== void 0 && (e.scrollTop = l), a !== void 0 && (e.scrollLeft = a);
}
let Ll = {
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
const uT = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), cT = ["Webkit", "Ms", "Moz", "O"];
Ll = Object.keys(Ll).reduce((e, t) => (cT.forEach((n) => e[uT(n, t)] = e[t]), e), Ll);
const fT = ["x", "y", "z"], dT = /^(matrix|translate|scale|rotate|skew)/, pT = /^(translate)/, hT = /^(rotate|skew)/, id = (e, t) => W.num(e) && e !== 0 ? e + t : e, Zs = (e, t) => W.arr(e) ? e.every((n) => Zs(n, t)) : W.num(e) ? e === t : parseFloat(e) === t;
class mT extends Bc {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: o
    } = t, i = xg(t, fT);
    const l = [], a = [];
    (n || r || o) && (l.push([n || 0, r || 0, o || 0]), a.push((s) => [`translate3d(${s.map((u) => id(u, "px")).join(",")})`, Zs(s, 0)])), En(i, (s, u) => {
      if (u === "transform")
        l.push([s || ""]), a.push((c) => [c, c === ""]);
      else if (dT.test(u)) {
        if (delete i[u], W.und(s))
          return;
        const c = pT.test(u) ? "px" : hT.test(u) ? "deg" : "";
        l.push(At(s)), a.push(u === "rotate3d" ? ([f, d, m, h]) => [`rotate3d(${f},${d},${m},${id(h, c)})`, Zs(h, 0)] : (f) => [`${u}(${f.map((d) => id(d, c)).join(",")})`, Zs(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), l.length && (i.transform = new gT(l, a)), super(i);
  }
}
class gT extends Ak {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return he(this.inputs, (r, o) => {
      const i = vt(r[0]), [l, a] = this.transforms[o](W.arr(i) ? i : r.map(vt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && he(this.inputs, (n) => he(n, (r) => Lt(r) && Li(r, this)));
  }
  observerRemoved(t) {
    t == 0 && he(this.inputs, (n) => he(n, (r) => Lt(r) && xa(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), ya(this, t);
  }
}
const vT = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], yT = ["scrollTop", "scrollLeft"];
$n.assign({
  batchedUpdates: hn.exports.unstable_batchedUpdates,
  createStringInterpolator: Rk,
  colors: tR
});
const xT = IR(vT, {
  applyAnimatedValues: sT,
  createAnimatedStyle: (e) => new mT(e),
  getComponentProps: (e) => xg(e, yT)
}), wT = xT.animated;
function Kk(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Kk(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ky() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Kk(t)) && (r && (r += " "), r += n);
  return r;
}
function bT(e, t, { includes: n = [], ...r } = {}) {
  g.exports.useEffect(
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
var ke = "colors", ct = "sizes", X = "space", Yk = { gap: X, gridGap: X, columnGap: X, gridColumnGap: X, rowGap: X, gridRowGap: X, inset: X, insetBlock: X, insetBlockEnd: X, insetBlockStart: X, insetInline: X, insetInlineEnd: X, insetInlineStart: X, margin: X, marginTop: X, marginRight: X, marginBottom: X, marginLeft: X, marginBlock: X, marginBlockEnd: X, marginBlockStart: X, marginInline: X, marginInlineEnd: X, marginInlineStart: X, padding: X, paddingTop: X, paddingRight: X, paddingBottom: X, paddingLeft: X, paddingBlock: X, paddingBlockEnd: X, paddingBlockStart: X, paddingInline: X, paddingInlineEnd: X, paddingInlineStart: X, top: X, right: X, bottom: X, left: X, scrollMargin: X, scrollMarginTop: X, scrollMarginRight: X, scrollMarginBottom: X, scrollMarginLeft: X, scrollMarginX: X, scrollMarginY: X, scrollMarginBlock: X, scrollMarginBlockEnd: X, scrollMarginBlockStart: X, scrollMarginInline: X, scrollMarginInlineEnd: X, scrollMarginInlineStart: X, scrollPadding: X, scrollPaddingTop: X, scrollPaddingRight: X, scrollPaddingBottom: X, scrollPaddingLeft: X, scrollPaddingX: X, scrollPaddingY: X, scrollPaddingBlock: X, scrollPaddingBlockEnd: X, scrollPaddingBlockStart: X, scrollPaddingInline: X, scrollPaddingInlineEnd: X, scrollPaddingInlineStart: X, fontSize: "fontSizes", background: ke, backgroundColor: ke, backgroundImage: ke, borderImage: ke, border: ke, borderBlock: ke, borderBlockEnd: ke, borderBlockStart: ke, borderBottom: ke, borderBottomColor: ke, borderColor: ke, borderInline: ke, borderInlineEnd: ke, borderInlineStart: ke, borderLeft: ke, borderLeftColor: ke, borderRight: ke, borderRightColor: ke, borderTop: ke, borderTopColor: ke, caretColor: ke, color: ke, columnRuleColor: ke, fill: ke, outline: ke, outlineColor: ke, stroke: ke, textDecorationColor: ke, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: ct, minBlockSize: ct, maxBlockSize: ct, inlineSize: ct, minInlineSize: ct, maxInlineSize: ct, width: ct, minWidth: ct, maxWidth: ct, height: ct, minHeight: ct, maxHeight: ct, flexBasis: ct, gridTemplateColumns: ct, gridTemplateRows: ct, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, ST = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Bi = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, ST))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, lo = Symbol.for("sxs.internal"), wg = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Cy = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: kT } = Object.prototype, uh = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), CT = /\s+(?![^()]*\))/, Mo = (e) => (t) => e(...typeof t == "string" ? String(t).split(CT) : [t]), Ey = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Mo((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Mo((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Mo((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Mo((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Mo((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Mo((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, ld = /([\d.]+)([^]*)/, ET = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, $T = (e, t) => e in AT && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${uh(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${uh(e)}:${r}fit-content`) + i) : String(t), AT = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Yn = (e) => e ? e + "-" : "", Xk = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, l, a) => l == "$" == !!i ? r : (o || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? Yn(t) + (a.includes("$") ? "" : Yn(n)) + a.replace(/\$/g, "-") : a) + ")" + (o || l == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), PT = /\s*,\s*(?![^()]*\))/, _T = Object.prototype.toString, Jo = (e, t, n, r, o) => {
  let i, l, a;
  const s = (u, c, f) => {
    let d, m;
    const h = (v) => {
      for (d in v) {
        const y = d.charCodeAt(0) === 64, x = y && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (m of x) {
          const b = /[A-Z]/.test(p = d) ? p : p.replace(/-[^]/g, (S) => S[1].toUpperCase()), A = typeof m == "object" && m && m.toString === _T && (!r.utils[b] || !c.length);
          if (b in r.utils && !A) {
            const S = r.utils[b];
            if (S !== l) {
              l = S, h(S(m)), l = null;
              continue;
            }
          } else if (b in Ey) {
            const S = Ey[b];
            if (S !== a) {
              a = S, h(S(m)), a = null;
              continue;
            }
          }
          if (y && (w = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (S, $, E, P, R, T) => {
            const O = ld.test($), F = 0.0625 * (O ? -1 : 1), [z, D] = O ? [P, $] : [$, P];
            return "(" + (E[0] === "=" ? "" : E[0] === ">" === O ? "max-" : "min-") + z + ":" + (E[0] !== "=" && E.length === 1 ? D.replace(ld, (_, j, M) => Number(j) + F * (E === ">" ? 1 : -1) + M) : D) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + z + ":" + (R.length === 1 ? T.replace(ld, (_, j, M) => Number(j) + F * (R === ">" ? -1 : 1) + M) : T) : "") + ")";
          })), A) {
            const S = y ? f.concat(d) : [...f], $ = y ? [...c] : ET(c, d.split(PT));
            i !== void 0 && o($y(...i)), i = void 0, s(m, $, S);
          } else
            i === void 0 && (i = [[], c, f]), d = y || d.charCodeAt(0) !== 36 ? d : `--${Yn(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, m = A ? m : typeof m == "number" ? m && b in RT ? String(m) + "px" : String(m) : Xk($T(b, m == null ? "" : m), r.prefix, r.themeMap[b]), i[0].push(`${y ? `${d} ` : `${uh(d)}:`}${m}`);
        }
      }
      var w, p;
    };
    h(u), i !== void 0 && o($y(...i)), i = void 0;
  };
  s(e, t, n);
}, $y = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, RT = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Ay = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), ao = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Ay(n % 52) + r;
  return Ay(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), wl = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], TT = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, IT = (e) => {
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
      if (TT(a)) {
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
          const m = d.slice(14, -3).trim().split(/\s+/), h = wl[m[0]];
          h && (t || (t = { sheet: a, reset: r, rules: {}, toString: n }), t.rules[h] = { group: f, index: s, cache: new Set(m) });
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
      OT(l[s]);
    }
  };
  return r(), t;
}, OT = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, ll = Symbol(), NT = Bi(), Py = (e, t) => NT(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[lo]) {
        r.type == null && (r.type = o[lo].type);
        for (const i of o[lo].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(MT(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), FT(e, r, t);
}), MT = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${Yn(o.prefix)}c-${ao(r)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    s[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = s, f = d, kT.call(c, f) || (s[d] = "undefined");
      const m = e[d];
      for (const h in m) {
        const v = { [d]: String(h) };
        String(h) === "undefined" && u.push(d);
        const w = m[h], p = [v, w, !Cy(w)];
        l.push(p);
      }
    }
  var c, f;
  if (typeof t == "object" && t)
    for (const d of t) {
      let { css: m, ...h } = d;
      m = typeof m == "object" && m || {};
      for (const w in h)
        h[w] = String(h[w]);
      const v = [h, m, !Cy(m)];
      a.push(v);
    }
  return [i, r, l, a, s, u];
}, FT = (e, t, n) => {
  const [r, o, i, l] = DT(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let m = 0; m < d[ll].length; m++) {
        const [h, v] = d[ll][m];
        f.rules[h].apply(v);
      }
      return d[ll] = [], null;
    }
    return d[ll] = [], d.rules = {}, wl.forEach((m) => d.rules[m] = { apply: (h) => d[ll].push([m, h]) }), d;
  })(n) : null, s = (a || n).rules, u = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (f) => {
    f = typeof f == "object" && f || LT;
    const { css: d, ...m } = f, h = {};
    for (const p in i)
      if (delete m[p], p in f) {
        let y = f[p];
        typeof y == "object" && y ? h[p] = { "@initial": i[p], ...y } : (y = String(y), h[p] = y !== "undefined" || l.has(p) ? y : i[p]);
      } else
        h[p] = i[p];
    const v = /* @__PURE__ */ new Set([...o]);
    for (const [p, y, x, b] of t.composers) {
      n.rules.styled.cache.has(p) || (n.rules.styled.cache.add(p), Jo(y, [`.${p}`], [], e, ($) => {
        s.styled.apply($);
      }));
      const A = _y(x, h, e.media), S = _y(b, h, e.media, !0);
      for (const $ of A)
        if ($ !== void 0)
          for (const [E, P, R] of $) {
            const T = `${p}-${ao(P)}-${E}`;
            v.add(T);
            const O = (R ? n.rules.resonevar : n.rules.onevar).cache, F = R ? s.resonevar : s.onevar;
            O.has(T) || (O.add(T), Jo(P, [`.${T}`], [], e, (z) => {
              F.apply(z);
            }));
          }
      for (const $ of S)
        if ($ !== void 0)
          for (const [E, P] of $) {
            const R = `${p}-${ao(P)}-${E}`;
            v.add(R), n.rules.allvar.cache.has(R) || (n.rules.allvar.cache.add(R), Jo(P, [`.${R}`], [], e, (T) => {
              s.allvar.apply(T);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const p = `${r}-i${ao(d)}-css`;
      v.add(p), n.rules.inline.cache.has(p) || (n.rules.inline.cache.add(p), Jo(d, [`.${p}`], [], e, (y) => {
        s.inline.apply(y);
      }));
    }
    for (const p of String(f.className || "").trim().split(/\s+/))
      p && v.add(p);
    const w = m.className = [...v].join(" ");
    return { type: t.type, className: w, selector: u, props: m, toString: () => w, deferredInjector: a };
  };
  return wg(c, { className: r, selector: u, [lo]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, DT = (e) => {
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
}, _y = (e, t, n, r) => {
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
            let m, h, v = 0;
            for (const w in d) {
              if (f === String(d[w])) {
                if (w !== "@initial") {
                  const p = w.slice(1);
                  (h = h || []).push(p in n ? n[p] : w.replace(/^@media ?/, "")), c = !0;
                }
                u += v, m = !0;
              }
              ++v;
            }
            if (h && h.length && (l = { ["@media " + h.join(", ")]: l }), !m)
              continue e;
          }
        }
      }
      (o[u] = o[u] || []).push([r ? "cv" : `${s}-${i[s]}`, l, c]);
    }
  return o;
}, LT = {}, zT = Bi(), BT = (e, t) => zT(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = ao(o);
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
  return wg(r, { toString: r });
}), jT = Bi(), VT = (e, t) => jT(e, () => (n) => {
  const r = `${Yn(e.prefix)}k-${ao(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      Jo(n, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return r;
  };
  return wg(o, { get name() {
    return o();
  }, toString: o });
}), UT = class {
  constructor(e, t, n, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + Yn(this.prefix) + Yn(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, HT = Bi(), WT = (e, t) => HT(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${Yn(e.prefix)}t-${ao(r)}`}`, i = {}, l = [];
  for (const s in r) {
    i[s] = {};
    for (const u in r[s]) {
      const c = `--${Yn(e.prefix)}${s}-${u}`, f = Xk(String(r[s][u]), e.prefix, s);
      i[s][u] = new UT(u, f, s, e.prefix), l.push(`${c}:${f}`);
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
}), qT = Bi(), QT = Bi(), GT = (e) => {
  const t = ((n) => {
    let r = !1;
    const o = qT(n, (i) => {
      r = !0;
      const l = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", a = typeof i.media == "object" && i.media || {}, s = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, c = { prefix: l, media: a, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...Yk }, utils: typeof i.utils == "object" && i.utils || {} }, f = IT(s), d = { css: Py(c, f), globalCss: BT(c, f), keyframes: VT(c, f), createTheme: WT(c, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: c, prefix: l, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || o.reset(), o;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => QT(n, () => {
    const o = Py(n, r);
    return (...i) => {
      const l = o(...i), a = l[lo].type, s = Ve.forwardRef((u, c) => {
        const f = u && u.as || a, { props: d, deferredInjector: m } = l(u);
        return delete d.as, d.ref = c, m ? Ve.createElement(Ve.Fragment, null, Ve.createElement(f, d), Ve.createElement(m, null)) : Ve.createElement(f, d);
      });
      return s.className = l.className, s.displayName = `Styled.${a.displayName || a.name || a}`, s.selector = l.selector, s.toString = () => l.selector, s[lo] = l[lo], s;
    };
  }))(t), t;
};
function KT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ca(e, t) {
  return Ca = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Ca(e, t);
}
function YT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ca(e, t);
}
function ch(e) {
  return ch = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ch(e);
}
function XT(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function ZT() {
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
  return ZT() ? Js = Reflect.construct : Js = function(o, i, l) {
    var a = [null];
    a.push.apply(a, i);
    var s = Function.bind.apply(o, a), u = new s();
    return l && Ca(u, l.prototype), u;
  }, Js.apply(null, arguments);
}
function fh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return fh = function(r) {
    if (r === null || !XT(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Js(r, arguments, ch(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ca(o, r);
  }, fh(e);
}
var br = /* @__PURE__ */ function(e) {
  YT(t, e);
  function t(n) {
    var r;
    return r = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this, KT(r);
  }
  return t;
}(/* @__PURE__ */ fh(Error)), JT = /--[\S]*/g;
function eI(e, t) {
  if (!e || !e.match(JT))
    throw new br(73);
  var n;
  if (typeof document < "u" && document.documentElement !== null && (n = getComputedStyle(document.documentElement).getPropertyValue(e)), n)
    return n.trim();
  if (t)
    return t;
  throw new br(74);
}
function ad(e) {
  return Math.round(e * 255);
}
function tI(e, t, n) {
  return ad(e) + "," + ad(t) + "," + ad(n);
}
function Ry(e, t, n, r) {
  if (r === void 0 && (r = tI), t === 0)
    return r(n, n, n);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), a = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (a = i, s = l) : o >= 1 && o < 2 ? (a = l, s = i) : o >= 2 && o < 3 ? (s = i, u = l) : o >= 3 && o < 4 ? (s = l, u = i) : o >= 4 && o < 5 ? (a = l, u = i) : o >= 5 && o < 6 && (a = i, u = l);
  var c = n - i / 2, f = a + c, d = s + c, m = u + c;
  return r(f, d, m);
}
var Ty = {
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
function nI(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Ty[t] ? "#" + Ty[t] : e;
}
var rI = /^#[a-fA-F0-9]{6}$/, oI = /^#[a-fA-F0-9]{8}$/, iI = /^#[a-fA-F0-9]{3}$/, lI = /^#[a-fA-F0-9]{4}$/, sd = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i, aI = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i, sI = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, uI = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function cI(e) {
  if (typeof e != "string")
    throw new br(3);
  var t = nI(e);
  if (t.match(rI))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(oI)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(iI))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(lI)) {
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
  var i = aI.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4])
    };
  var l = sI.exec(t);
  if (l) {
    var a = parseInt("" + l[1], 10), s = parseInt("" + l[2], 10) / 100, u = parseInt("" + l[3], 10) / 100, c = "rgb(" + Ry(a, s, u) + ")", f = sd.exec(c);
    if (!f)
      throw new br(4, t, c);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var d = uI.exec(t.substring(0, 50));
  if (d) {
    var m = parseInt("" + d[1], 10), h = parseInt("" + d[2], 10) / 100, v = parseInt("" + d[3], 10) / 100, w = "rgb(" + Ry(m, h, v) + ")", p = sd.exec(w);
    if (!p)
      throw new br(4, t, w);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10),
      alpha: parseFloat("" + d[4])
    };
  }
  throw new br(5);
}
var fI = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Iy = fI;
function Fo(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Oy(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return Iy("#" + Fo(e) + Fo(t) + Fo(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return Iy("#" + Fo(e.red) + Fo(e.green) + Fo(e.blue));
  throw new br(6);
}
function dI(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var o = cI(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number")
      return r >= 1 ? Oy(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1 ? Oy(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new br(7);
}
const Ny = {
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
}, My = (e) => e.map((t) => `${t} cubic-bezier(0.4, 0, 0.2, 1) 150ms`).join(","), Nt = {
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
}, bg = GT({
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
    space: Ny,
    sizes: {
      ...Ny,
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
      default: My([
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
      colors: My([
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
      backgroundColor: dI(eI("--mayumi-colors-underPageBackgroundColor", "#1e1e1e"), 0.85),
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
  themeMap: Yk
}), pI = bg.styled;
bg.globalCss;
bg.getCssText;
var Fy = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, en = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, hI = (...e) => [...e].flat().filter(Boolean), Zk = (e, t) => {
  let n = {};
  for (let r in e)
    t != null && t.hasOwnProperty(r) ? n[r] = typeof e[r] == "object" ? Zk(e[r], t[r]) : t[r] + " " + e[r] : n[r] = e[r];
  for (let r in t)
    n.hasOwnProperty(r) || (n[r] = t[r]);
  return n;
}, Dy = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function mI() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Jk(t)) && (r && (r += " "), r += n);
  return r;
}
function Jk(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Jk(e[r])) && (n && (n += " "), n += t);
  return n;
}
function dh() {
  return dh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, dh.apply(this, arguments);
}
var Sg = "-";
function gI(e) {
  var t = yI(e);
  function n(o) {
    var i = o.split(Sg);
    return i[0] === "" && i.length !== 1 && i.shift(), eC(i, t) || vI(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function eC(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), i = o ? eC(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = e.join(Sg);
    return (n = t.validators.find(function(a) {
      var s = a.validator;
      return s(l);
    })) == null ? void 0 : n.classGroupId;
  }
}
var Ly = /^\[(.+)\]$/;
function vI(e) {
  if (Ly.test(e)) {
    var t = Ly.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function yI(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = wI(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], a = i[1];
    ph(a, r, l, t);
  }), r;
}
function ph(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : zy(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (xI(o)) {
        ph(o(r), t, n, r);
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
      ph(s, zy(t, a), n, r);
    });
  });
}
function zy(e, t) {
  var n = e;
  return t.split(Sg).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function xI(e) {
  return e.isThemeGetter;
}
function wI(e, t) {
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
function bI(e) {
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
var tC = "!";
function SI(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, i = [], l = 0, a = 0; a < r.length; a++) {
      var s = r[a];
      o === 0 && s === t[0] && (t.length === 1 || r.slice(a, a + t.length) === t) && (i.push(r.slice(l, a)), l = a + t.length), s === "[" ? o++ : s === "]" && o--;
    }
    var u = i.length === 0 ? r : r.substring(l), c = u.startsWith(tC), f = c ? u.substring(1) : u;
    return {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: f
    };
  };
}
function kI(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function CI(e) {
  return dh({
    cache: bI(e.cacheSize),
    splitModifiers: SI(e)
  }, gI(e));
}
var EI = /\s+/;
function $I(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(EI).map(function(l) {
    var a = n(l), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = r(c);
    if (!f)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var d = kI(s).join(":"), m = u ? d + tC : d;
    return {
      isTailwindClass: !0,
      modifierId: m,
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
function hh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(m, h) {
      return h(m);
    }, c());
    return r = CI(d), o = r.cache.get, i = r.cache.set, l = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = $I(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(mI.apply(null, arguments));
  };
}
function _e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var nC = /^\[(?:([a-z-]+):)?(.+)\]$/i, AI = /^\d+\/\d+$/, PI = /* @__PURE__ */ new Set(["px", "full", "screen"]), _I = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, RI = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, TI = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Jt(e) {
  return zl(e) || PI.has(e) || AI.test(e) || Xr(e);
}
function Xr(e) {
  return Co(e, "length", FI);
}
function II(e) {
  return Co(e, "size", rC);
}
function OI(e) {
  return Co(e, "position", rC);
}
function NI(e) {
  return Co(e, "url", DI);
}
function ud(e) {
  return Co(e, "number", zl);
}
function zl(e) {
  return !Number.isNaN(Number(e));
}
function al(e) {
  return By(e) || Co(e, "number", By);
}
function Be(e) {
  return nC.test(e);
}
function sl() {
  return !0;
}
function ur(e) {
  return _I.test(e);
}
function MI(e) {
  return Co(e, "", LI);
}
function Co(e, t, n) {
  var r = nC.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function FI(e) {
  return RI.test(e);
}
function rC() {
  return !1;
}
function DI(e) {
  return e.startsWith("url(");
}
function By(e) {
  return Number.isInteger(Number(e));
}
function LI(e) {
  return TI.test(e);
}
function mh() {
  var e = _e("colors"), t = _e("spacing"), n = _e("blur"), r = _e("brightness"), o = _e("borderColor"), i = _e("borderRadius"), l = _e("borderSpacing"), a = _e("borderWidth"), s = _e("contrast"), u = _e("grayscale"), c = _e("hueRotate"), f = _e("invert"), d = _e("gap"), m = _e("gradientColorStops"), h = _e("inset"), v = _e("margin"), w = _e("opacity"), p = _e("padding"), y = _e("saturate"), x = _e("scale"), b = _e("sepia"), A = _e("skew"), S = _e("space"), $ = _e("translate"), E = function() {
    return ["auto", "contain", "none"];
  }, P = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, R = function() {
    return ["auto", t];
  }, T = function() {
    return ["", Jt];
  }, O = function() {
    return ["auto", zl, Be];
  }, F = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, j = function() {
    return ["", "0", Be];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, I = function() {
    return [zl, ud];
  }, N = function() {
    return [zl, Be];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [sl],
      spacing: [Jt],
      blur: ["none", "", ur, Xr],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ur, Xr],
      borderSpacing: [t],
      borderWidth: T(),
      contrast: I(),
      grayscale: j(),
      hueRotate: N(),
      invert: j(),
      gap: [t],
      gradientColorStops: [e],
      inset: R(),
      margin: R(),
      opacity: I(),
      padding: [t],
      saturate: I(),
      scale: I(),
      sepia: j(),
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
        columns: [ur]
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
        object: [].concat(F(), [Be])
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
        z: ["auto", al]
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
        grow: j()
      }],
      shrink: [{
        shrink: j()
      }],
      order: [{
        order: ["first", "last", "none", al]
      }],
      "grid-cols": [{
        "grid-cols": [sl]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [al]
        }, Be]
      }],
      "col-start": [{
        "col-start": O()
      }],
      "col-end": [{
        "col-end": O()
      }],
      "grid-rows": [{
        "grid-rows": [sl]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [al]
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
        "min-w": ["min", "max", "fit", Jt]
      }],
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ur]
        }, ur, Xr]
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
        text: ["base", ur, Xr]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ud]
      }],
      "font-family": [{
        font: [sl]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Xr]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Jt]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Xr]
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
        bg: [].concat(F(), [OI])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", II]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, NI]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from": [{
        from: [m]
      }],
      "gradient-via": [{
        via: [m]
      }],
      "gradient-to": [{
        to: [m]
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
        shadow: ["", "inner", "none", ur, MI]
      }],
      "shadow-color": [{
        shadow: [sl]
      }],
      opacity: [{
        opacity: [w]
      }],
      "mix-blend": [{
        "mix-blend": D()
      }],
      "bg-blend": [{
        "bg-blend": D()
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
        "drop-shadow": ["", "none", ur, Be]
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
        rotate: [al, Be]
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
var zI = /* @__PURE__ */ hh(mh);
function BI(e, t) {
  for (var n in t)
    oC(e, n, t[n]);
  return e;
}
var jI = Object.prototype.hasOwnProperty, VI = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function oC(e, t, n) {
  if (!jI.call(e, t) || VI.has(typeof n) || n === null) {
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
      oC(e[t], r, n[r]);
  }
}
function UI(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? hh.apply(void 0, [mh, e].concat(n)) : hh.apply(void 0, [function() {
    return BI(mh(), e);
  }].concat(n));
}
var Uu = (...e) => e.flat(1 / 0).filter(Boolean).join(" "), ul = (...e) => (t = {}) => t.twMerge ? (en(t.twMergeConfig) ? zI : UI(t.twMergeConfig))(Uu(e)) : Uu(e), jy = (e, t) => {
  let n = {};
  return typeof e != "object" || typeof t != "object" || Object.keys(e).forEach((r) => {
    t[r] ? n[r] = Uu([e[r], t[r]]) : n[r] = e[r];
  }), n;
}, HI = { twMerge: !0, twMergeConfig: {} }, WI = (e, t = HI) => {
  var n, r, o, i, l;
  let { slots: a = {}, variants: s = {}, compoundVariants: u = [], defaultVariants: c = {} } = e, f = Uu((n = e == null ? void 0 : e.extend) == null ? void 0 : n.base, e == null ? void 0 : e.base), d = Zk(s, (r = e == null ? void 0 : e.extend) == null ? void 0 : r.variants), m = Object.assign({}, (o = e == null ? void 0 : e.extend) == null ? void 0 : o.defaultVariants, c), h = en(a) ? {} : { base: e == null ? void 0 : e.base, ...a }, v = en((i = e == null ? void 0 : e.extend) == null ? void 0 : i.slots) ? h : jy((l = e == null ? void 0 : e.extend) == null ? void 0 : l.slots, en(h) ? { base: e == null ? void 0 : e.base } : h), w = (y) => {
    var x, b, A;
    if (en(d) && en(a) && en((x = e == null ? void 0 : e.extend) == null ? void 0 : x.slots))
      return ul(f, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    let S = (z, D, _ = [], j) => {
      let M = _;
      if (typeof D == "string")
        M.push(Dy(D).split(" ").map((I) => `${z}:${I}`));
      else if (Array.isArray(D))
        M.push(D.flatMap((I) => `${z}:${I}`));
      else if (typeof D == "object" && typeof j == "string") {
        let I = D == null ? void 0 : D[j];
        if (I && typeof I == "string") {
          let N = Dy(I);
          M[j] = M[j] ? [...M[j], ...N.split(" ").map((k) => `${z}:${k}`)] : N.split(" ").map((k) => `${z}:${k}`);
        } else
          Array.isArray(I) && I.length > 0 && (M[j] = I.flatMap((N) => `${z}:${N}`));
      }
      return M;
    }, $ = (z, D = d, _ = null) => {
      let j = D == null ? void 0 : D[z];
      if (typeof j != "object" || en(j))
        return null;
      let M = y == null ? void 0 : y[z], I = m == null ? void 0 : m[z], N = [];
      if (M === null)
        return null;
      let k = Fy(M);
      typeof k == "object" && (N = Object.keys(k).reduce((J, te) => {
        let se = k[te], ee = j == null ? void 0 : j[se];
        return te === "initial" ? (I = se, J) : S(te, ee, J, _);
      }, []));
      let C = j[k] || j[Fy(I)];
      return typeof N == "object" && typeof _ == "string" && N[_] ? jy(N, C) : N.length > 0 ? [C, ...N] : C;
    }, E = () => d ? Object.keys(d).map((z) => $(z, d)) : null, P = (z) => !d || typeof d != "object" ? null : Object.keys(d).map((D) => {
      let _ = $(D, d, z);
      return z === "base" && typeof _ == "string" ? _ : _ && _[z];
    }).filter(Boolean), R = y && Object.fromEntries(Object.entries(y).filter(([, z]) => z !== void 0)), T = (z = []) => z == null ? void 0 : z.filter(({ class: D, className: _, ...j }) => Object.entries(j).every(([M, I]) => {
      var N;
      let k = typeof (y == null ? void 0 : y[M]) == "object" ? (N = y[M]) == null ? void 0 : N.initial : {}, C = { ...m, ...k, ...R };
      return Array.isArray(I) ? I.includes(C[M]) : C[M] === I;
    })).flatMap(({ class: D, className: _ }) => [D, _]), O = () => {
      var z;
      let D = T(u), _ = T((z = e == null ? void 0 : e.extend) == null ? void 0 : z.compoundVariants);
      return hI(_, D);
    }, F = () => {
      let z = O();
      return Array.isArray(z) ? z.reduce((D, _) => (typeof _ == "string" && (D.base = ul(D.base, _)(t)), typeof _ == "object" && Object.entries(_).forEach(([j, M]) => {
        D[j] = ul(D[j], M)(t);
      }), D), {}) : z;
    };
    if (!en(a) || !en((b = e == null ? void 0 : e.extend) == null ? void 0 : b.slots)) {
      let z = (A = F()) != null ? A : [];
      return { ...typeof v == "object" && !en(v) ? Object.keys(v).reduce((D, _) => (D[_] = (j) => ul(v[_], P(_), z == null ? void 0 : z[_], j == null ? void 0 : j.class, j == null ? void 0 : j.className)(t), D), {}) : {} };
    }
    return ul(f, E(), O(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(t);
  }, p = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return w.variantKeys = p(), w.base = f, w.slots = v, w.variants = d, w.defaultVariants = m, w.compoundVariants = u, w;
};
const qI = WI({
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
}), QI = pI("div", {
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
}), GI = {
  mass: 1,
  tension: 210,
  friction: 26,
  precision: 0.01,
  velocity: 0
}, iC = Ve.forwardRef(({
  style: e,
  className: t,
  prefix: n,
  size: r,
  css: o,
  ghost: i = !1,
  light: l = !1,
  ...a
}, s) => {
  const u = g.exports.useRef(null), [c, f] = g.exports.useState(!1), [d, m] = g.exports.useState(a.defaultValue), h = (A) => {
    var S;
    m(A.target.value), (S = a == null ? void 0 : a.onChange) == null || S.call(a, A);
  }, v = "value" in a, w = g.exports.useMemo(() => v ? a.value : d, [v, d, a.value]);
  g.exports.useImperativeHandle(s, () => u.current);
  const p = rT({
    transform: c ? "scale(1, 1)" : "scale(1.2, 1.5)",
    duration: 50,
    config: GI
  });
  bT(u, () => f(!1));
  const {
    base: y,
    effect: x,
    input: b
  } = qI({
    focus: c,
    light: l,
    ghost: i,
    size: r
  });
  return /* @__PURE__ */ fe(QI, {
    style: e,
    className: ky("mayumi-input", y(), t),
    css: o,
    size: r,
    children: [n && /* @__PURE__ */ B("span", {
      className: "mayumi-input-icon",
      children: n
    }), !i && !l && Ve.createElement(wT.div, {
      className: ky("mayumi-input-effect", x()),
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
iC.displayName = "input";
function KI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      n.hasOwnProperty(r) && (e[r] = n[r]);
  }
  return e;
}
function gh(e, t) {
  return Array(t + 1).join(e);
}
function YI(e) {
  return e.replace(/^\n*/, "");
}
function XI(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; )
    t--;
  return e.substring(0, t);
}
var ZI = [
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
function kg(e) {
  return Cg(e, ZI);
}
var lC = [
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
function aC(e) {
  return Cg(e, lC);
}
function JI(e) {
  return uC(e, lC);
}
var sC = [
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
function eO(e) {
  return Cg(e, sC);
}
function tO(e) {
  return uC(e, sC);
}
function Cg(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function uC(e, t) {
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
      var o = gh(r === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + o + `

`;
    } else
      return `

` + gh("#", r) + " " + e + `

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
    var c = gh(l, a);
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
    var n = t.getAttribute("href"), r = Hu(t.getAttribute("title"));
    return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")";
  }
};
at.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, n) {
    var r = t.getAttribute("href"), o = Hu(t.getAttribute("title"));
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
    var n = Hu(t.getAttribute("alt")), r = t.getAttribute("src") || "", o = Hu(t.getAttribute("title")), i = o ? ' "' + o + '"' : "";
    return r ? "![" + n + "](" + r + i + ")" : "";
  }
};
function Hu(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function cC(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules)
    this.array.push(e.rules[t]);
}
cC.prototype = {
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
    return (t = cd(this.array, e, this.options)) || (t = cd(this._keep, e, this.options)) || (t = cd(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++)
      e(this.array[t], t);
  }
};
function cd(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    if (nO(o, t, n))
      return o;
  }
}
function nO(e, t, n) {
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
function rO(e) {
  var t = e.element, n = e.isBlock, r = e.isVoid, o = e.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!t.firstChild || o(t))) {
    for (var i = null, l = !1, a = null, s = Vy(a, t, o); s !== t; ) {
      if (s.nodeType === 3 || s.nodeType === 4) {
        var u = s.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !l && u[0] === " " && (u = u.substr(1)), !u) {
          s = fd(s);
          continue;
        }
        s.data = u, i = s;
      } else if (s.nodeType === 1)
        n(s) || s.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, l = !1) : r(s) || o(s) ? (i = null, l = !0) : i && (l = !1);
      else {
        s = fd(s);
        continue;
      }
      var c = Vy(a, s, o);
      a = s, s = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || fd(i));
  }
}
function fd(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function Vy(e, t, n) {
  return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var fC = typeof window < "u" ? window : {};
function oO() {
  var e = fC.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function iO() {
  var e = function() {
  };
  return lO() ? e.prototype.parseFromString = function(t) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(t), n.close(), n;
  } : e.prototype.parseFromString = function(t) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(t), n.close(), n;
  }, e;
}
function lO() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (e = !0);
  }
  return e;
}
var aO = oO() ? fC.DOMParser : iO();
function sO(e, t) {
  var n;
  if (typeof e == "string") {
    var r = uO().parseFromString(
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = e.cloneNode(!0);
  return rO({
    element: n,
    isBlock: kg,
    isVoid: aC,
    isPre: t.preformattedCode ? cO : null
  }), n;
}
var dd;
function uO() {
  return dd = dd || new aO(), dd;
}
function cO(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function fO(e, t) {
  return e.isBlock = kg(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = dO(e), e.flankingWhitespace = pO(e, t), e;
}
function dO(e) {
  return !aC(e) && !eO(e) && /^\s*$/i.test(e.textContent) && !JI(e) && !tO(e);
}
function pO(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return { leading: "", trailing: "" };
  var n = hO(e.textContent);
  return n.leadingAscii && Uy("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && Uy("right", e, t) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function hO(e) {
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
function Uy(e, t, n) {
  var r, o, i;
  return e === "left" ? (r = t.previousSibling, o = / $/) : (r = t.nextSibling, o = /^ /), r && (r.nodeType === 3 ? i = o.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? i = !1 : r.nodeType === 1 && !kg(r) && (i = o.test(r.textContent))), i;
}
var mO = Array.prototype.reduce, gO = [
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
function Wu(e) {
  if (!(this instanceof Wu))
    return new Wu(e);
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
  this.options = KI({}, t, e), this.rules = new cC(this.options);
}
Wu.prototype = {
  turndown: function(e) {
    if (!xO(e))
      throw new TypeError(
        e + " is not a string, or an element/document/fragment node."
      );
    if (e === "")
      return "";
    var t = dC.call(this, new sO(e, this.options));
    return vO.call(this, t);
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
    return gO.reduce(function(t, n) {
      return t.replace(n[0], n[1]);
    }, e);
  }
};
function dC(e) {
  var t = this;
  return mO.call(e.childNodes, function(n, r) {
    r = new fO(r, t.options);
    var o = "";
    return r.nodeType === 3 ? o = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (o = yO.call(t, r)), pC(n, o);
  }, "");
}
function vO(e) {
  var t = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (e = pC(e, n.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function yO(e) {
  var t = this.rules.forNode(e), n = dC.call(this, e), r = e.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function pC(e, t) {
  var n = XI(e), r = YI(t), o = Math.max(e.length - n.length, t.length - r.length), i = `

`.substring(0, o);
  return n + i + r;
}
function xO(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
const Hy = (e) => {
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
}, wO = (e) => e ? Hy(e) : Hy;
var hC = { exports: {} }, mC = {}, gC = { exports: {} }, vC = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i = g.exports;
function bO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var SO = typeof Object.is == "function" ? Object.is : bO, kO = _i.useState, CO = _i.useEffect, EO = _i.useLayoutEffect, $O = _i.useDebugValue;
function AO(e, t) {
  var n = t(), r = kO({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return EO(function() {
    o.value = n, o.getSnapshot = t, pd(o) && i({ inst: o });
  }, [e, n, t]), CO(function() {
    return pd(o) && i({ inst: o }), e(function() {
      pd(o) && i({ inst: o });
    });
  }, [e]), $O(n), n;
}
function pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !SO(e, n);
  } catch {
    return !0;
  }
}
function PO(e, t) {
  return t();
}
var _O = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? PO : AO;
vC.useSyncExternalStore = _i.useSyncExternalStore !== void 0 ? _i.useSyncExternalStore : _O;
(function(e) {
  e.exports = vC;
})(gC);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc = g.exports, RO = gC.exports;
function TO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var IO = typeof Object.is == "function" ? Object.is : TO, OO = RO.useSyncExternalStore, NO = Vc.useRef, MO = Vc.useEffect, FO = Vc.useMemo, DO = Vc.useDebugValue;
mC.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = NO(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = FO(function() {
    function s(m) {
      if (!u) {
        if (u = !0, c = m, m = r(m), o !== void 0 && l.hasValue) {
          var h = l.value;
          if (o(h, m))
            return f = h;
        }
        return f = m;
      }
      if (h = f, IO(c, m))
        return h;
      var v = r(m);
      return o !== void 0 && o(h, v) ? h : (c = m, f = v);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return s(t());
    }, d === null ? void 0 : function() {
      return s(d());
    }];
  }, [t, n, r, o]);
  var a = OO(e, i[0], i[1]);
  return MO(function() {
    l.hasValue = !0, l.value = a;
  }, [a]), DO(a), a;
};
(function(e) {
  e.exports = mC;
})(hC);
const LO = /* @__PURE__ */ Bh(hC.exports), { useSyncExternalStoreWithSelector: zO } = LO;
function BO(e, t = e.getState, n) {
  const r = zO(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return g.exports.useDebugValue(r), r;
}
const Wy = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? wO(e) : e, n = (r, o) => BO(t, r, o);
  return Object.assign(n, t), n;
}, Eg = (e) => e ? Wy(e) : Wy;
function $g(e) {
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
const Ea = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Ea(r)(n);
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
        return Ea(r)(n);
      }
    };
  }
}, jO = (e, t) => (n, r, o) => {
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
  const c = Ea(i.serialize), f = () => {
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
  const m = e(
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
    return Ea(u.getItem.bind(u))(i.name).then((y) => {
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
        (x = r()) != null ? x : m
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
  }, v(), h || m;
}, VO = (e, t) => (n, r, o) => {
  let i = {
    storage: $g(() => localStorage),
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
  let m;
  const h = () => {
    var v;
    if (!u)
      return;
    l = !1, a.forEach((p) => p(r()));
    const w = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, r())) || void 0;
    return Ea(u.getItem.bind(u))(i.name).then((p) => {
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
      return m = i.merge(
        p,
        (y = r()) != null ? y : d
      ), n(m, !0), c();
    }).then(() => {
      w == null || w(m, void 0), l = !0, s.forEach((p) => p(m));
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
  }, h(), m || d;
}, UO = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), jO(e, t)) : VO(e, t), yC = UO;
function HO(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var i = e[t];
    i && (o[r++] = i);
  }
  return o;
}
const WO = {
  getItem: async (e) => (await it.storage.local.get(e))[e],
  setItem(e, t) {
    return it.storage.local.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.local.remove(e);
  }
}, qO = {
  getItem: async (e) => (await it.storage.sync.get(e))[e],
  setItem(e, t) {
    return it.storage.sync.set({ [e]: t });
  },
  removeItem(e) {
    return it.storage.sync.remove(e);
  }
}, QO = (e, t) => (n, r, o) => {
  const i = (l, a, s) => {
    const u = s === void 0 ? { type: "anonymous" } : typeof s == "string" ? { type: s } : s;
    console.group(`%c action: ${t.name} : ${u.type}`, "font-weight: bold;"), console.log("%c prev state:", "color: gray; font-weight: bold;", r()), console.log("%c action:", "color: #0066db; font-weight: bold;", u), n(l, a), console.log("%cnext state:", "color: #006b3b; font-weight: bold;", r()), console.groupEnd();
  };
  return o.setState = i, e(i, r, o);
}, Ag = QO, xC = () => ({
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
}), GO = xC(), KO = async (e) => {
  let t = [], n = e;
  const r = 0;
  do {
    if (!n)
      break;
    const o = await GO.get(n);
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
}, $a = Eg()(
  Ag(
    yC(
      (e) => ({
        bears: 0,
        conventions: {},
        increase: (t) => e((n) => ({ bears: n.bears + t })),
        upsertConventions: async (t, n) => {
          const r = await KO(n.id);
          return e((o) => ({
            conventions: {
              ...o.conventions,
              [t]: HO(r)
            }
          }), !1, "upsertConventions");
        },
        clear: () => e({ bears: 0, conventions: {} })
      }),
      {
        name: "aiflow-message-store",
        storage: $g(() => WO)
      }
    ),
    {
      name: "aiflow-message-store"
    }
  )
), qu = Eg()(
  Ag(
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
), wC = Eg()(
  Ag(
    yC(
      (e) => ({
        set(t) {
          e(t, !1, "set");
        }
      }),
      { name: "user-config-store", storage: $g(() => qO) }
    ),
    {
      name: "user-config-store"
    }
  )
), hd = "ask-chatgpt", di = "ask-chatgpt-with", so = "translate-with", pi = "summary-with", vh = "ask-chatgpt-with-page", Qu = "config-page", Gu = "translate-with-page", Zr = "home-page", YO = "OPENAI_API_KEY", qy = "options", Qy = () => {
  var e;
  return (e = document.querySelector('input[name="q"]')) == null ? void 0 : e.value;
};
function XO(e) {
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
function yh(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ZO(e) {
  const t = e + "CollectionProvider", [n, r] = xo(t), [o, i] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (m) => {
    const { scope: h, children: v } = m, w = Ve.useRef(null), p = Ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Ve.createElement(o, {
      scope: h,
      itemMap: p,
      collectionRef: w
    }, v);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ Ve.forwardRef((m, h) => {
    const { scope: v, children: w } = m, p = i(a, v), y = we(h, p.collectionRef);
    return /* @__PURE__ */ Ve.createElement($i, {
      ref: y
    }, w);
  }), u = e + "CollectionItemSlot", c = "data-radix-collection-item", f = /* @__PURE__ */ Ve.forwardRef((m, h) => {
    const { scope: v, children: w, ...p } = m, y = Ve.useRef(null), x = we(h, y), b = i(u, v);
    return Ve.useEffect(() => (b.itemMap.set(y, {
      ref: y,
      ...p
    }), () => void b.itemMap.delete(y))), /* @__PURE__ */ Ve.createElement($i, {
      [c]: "",
      ref: x
    }, w);
  });
  function d(m) {
    const h = i(e + "CollectionConsumer", m);
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
const JO = /* @__PURE__ */ g.exports.createContext(void 0);
function bC(e) {
  const t = g.exports.useContext(JO);
  return e || t || "ltr";
}
function e6(e) {
  const t = g.exports.useRef({
    value: e,
    previous: e
  });
  return g.exports.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const t6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => /* @__PURE__ */ g.exports.createElement(He.span, G({}, e, {
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
}))), n6 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], r6 = [
  " ",
  "Enter"
], Uc = "Select", [Hc, Wc, o6] = ZO(Uc), [ji, qB] = xo(Uc, [
  o6,
  $c
]), Pg = $c(), [i6, Eo] = ji(Uc), [l6, a6] = ji(Uc), s6 = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: s, dir: u, name: c, autoComplete: f, disabled: d, required: m } = e, h = Pg(t), [v, w] = g.exports.useState(null), [p, y] = g.exports.useState(null), [x, b] = g.exports.useState(!1), A = bC(u), [S = !1, $] = ca({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [E, P] = ca({
    prop: l,
    defaultProp: a,
    onChange: s
  }), R = g.exports.useRef(null), T = v ? Boolean(v.closest("form")) : !0, [O, F] = g.exports.useState(/* @__PURE__ */ new Set()), z = Array.from(O).map(
    (D) => D.props.value
  ).join(";");
  return /* @__PURE__ */ g.exports.createElement(nS, h, /* @__PURE__ */ g.exports.createElement(i6, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: w,
    valueNode: p,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: b,
    contentId: Vn(),
    value: E,
    onValueChange: P,
    open: S,
    onOpenChange: $,
    dir: A,
    triggerPointerDownPosRef: R,
    disabled: d
  }, /* @__PURE__ */ g.exports.createElement(Hc.Provider, {
    scope: t
  }, /* @__PURE__ */ g.exports.createElement(l6, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: g.exports.useCallback((D) => {
      F(
        (_) => new Set(_).add(D)
      );
    }, []),
    onNativeOptionRemove: g.exports.useCallback((D) => {
      F((_) => {
        const j = new Set(_);
        return j.delete(D), j;
      });
    }, [])
  }, n)), T ? /* @__PURE__ */ g.exports.createElement(CC, {
    key: z,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: c,
    autoComplete: f,
    value: E,
    onChange: (D) => P(D.target.value),
    disabled: d
  }, E === void 0 ? /* @__PURE__ */ g.exports.createElement("option", {
    value: ""
  }) : null, Array.from(O)) : null));
}, u6 = "SelectTrigger", c6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Pg(n), l = Eo(u6, n), a = l.disabled || r, s = we(t, l.onTriggerChange), u = Wc(n), [c, f, d] = EC((h) => {
    const v = u().filter(
      (y) => !y.disabled
    ), w = v.find(
      (y) => y.value === l.value
    ), p = $C(v, h, w);
    p !== void 0 && l.onValueChange(p.value);
  }), m = () => {
    a || (l.onOpenChange(!0), d());
  };
  return /* @__PURE__ */ g.exports.createElement(rS, G({
    asChild: !0
  }, i), /* @__PURE__ */ g.exports.createElement(He.button, G({
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
    onClick: ce(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: ce(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), l.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: ce(o.onKeyDown, (h) => {
      const v = c.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && n6.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), f6 = "SelectValue", d6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: i, placeholder: l, ...a } = e, s = Eo(f6, n), { onValueNodeHasChildrenChange: u } = s, c = i !== void 0, f = we(t, s.onValueNodeChange);
  return Ze(() => {
    u(c);
  }, [
    u,
    c
  ]), /* @__PURE__ */ g.exports.createElement(He.span, G({}, a, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), s.value === void 0 && l !== void 0 ? l : i);
}), p6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ g.exports.createElement(He.span, G({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "\u25BC");
}), h6 = (e) => /* @__PURE__ */ g.exports.createElement(iS, G({
  asChild: !0
}, e)), Ri = "SelectContent", m6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = Eo(Ri, e.__scopeSelect), [r, o] = g.exports.useState();
  if (Ze(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const i = r;
    return i ? /* @__PURE__ */ hn.exports.createPortal(/* @__PURE__ */ g.exports.createElement(SC, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ g.exports.createElement(Hc.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ g.exports.createElement("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ g.exports.createElement(g6, G({}, e, {
    ref: t
  }));
}), Fn = 10, [SC, $o] = ji(Ri), g6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
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
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: w,
    ...p
  } = e, y = Eo(Ri, n), [x, b] = g.exports.useState(null), [A, S] = g.exports.useState(null), $ = we(
    t,
    (Q) => b(Q)
  ), [E, P] = g.exports.useState(null), [R, T] = g.exports.useState(null), O = Wc(n), [F, z] = g.exports.useState(!1), D = g.exports.useRef(!1);
  g.exports.useEffect(() => {
    if (x)
      return Ac(x);
  }, [
    x
  ]), kc();
  const _ = g.exports.useCallback((Q) => {
    const [ne, ...ge] = O().map(
      (ue) => ue.ref.current
    ), [ae] = ge.slice(-1), pe = document.activeElement;
    for (const ue of Q)
      if (ue === pe || (ue == null || ue.scrollIntoView({
        block: "nearest"
      }), ue === ne && A && (A.scrollTop = 0), ue === ae && A && (A.scrollTop = A.scrollHeight), ue == null || ue.focus(), document.activeElement !== pe))
        return;
  }, [
    O,
    A
  ]), j = g.exports.useCallback(
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
  g.exports.useEffect(() => {
    F && j();
  }, [
    F,
    j
  ]);
  const { onOpenChange: M, triggerPointerDownPosRef: I } = y;
  g.exports.useEffect(() => {
    if (x) {
      let Q = {
        x: 0,
        y: 0
      };
      const ne = (ae) => {
        var pe, ue, st, ut;
        Q = {
          x: Math.abs(Math.round(ae.pageX) - ((pe = (ue = I.current) === null || ue === void 0 ? void 0 : ue.x) !== null && pe !== void 0 ? pe : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((st = (ut = I.current) === null || ut === void 0 ? void 0 : ut.y) !== null && st !== void 0 ? st : 0))
        };
      }, ge = (ae) => {
        Q.x <= 10 && Q.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || M(!1), document.removeEventListener("pointermove", ne), I.current = null;
      };
      return I.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", ge, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", ge, {
          capture: !0
        });
      };
    }
  }, [
    x,
    M,
    I
  ]), g.exports.useEffect(() => {
    const Q = () => M(!1);
    return window.addEventListener("blur", Q), window.addEventListener("resize", Q), () => {
      window.removeEventListener("blur", Q), window.removeEventListener("resize", Q);
    };
  }, [
    M
  ]);
  const [N, k] = EC((Q) => {
    const ne = O().filter(
      (pe) => !pe.disabled
    ), ge = ne.find(
      (pe) => pe.ref.current === document.activeElement
    ), ae = $C(ne, Q, ge);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), C = g.exports.useCallback((Q, ne, ge) => {
    const ae = !D.current && !ge;
    (y.value !== void 0 && y.value === ne || ae) && (P(Q), ae && (D.current = !0));
  }, [
    y.value
  ]), J = g.exports.useCallback(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), te = g.exports.useCallback((Q, ne, ge) => {
    const ae = !D.current && !ge;
    (y.value !== void 0 && y.value === ne || ae) && T(Q);
  }, [
    y.value
  ]), se = r === "popper" ? Gy : v6, ee = se === Gy ? {
    side: a,
    sideOffset: s,
    align: u,
    alignOffset: c,
    arrowPadding: f,
    collisionBoundary: d,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: w
  } : {};
  return /* @__PURE__ */ g.exports.createElement(SC, {
    scope: n,
    content: x,
    viewport: A,
    onViewportChange: S,
    itemRefCallback: C,
    selectedItem: E,
    onItemLeave: J,
    itemTextRefCallback: te,
    focusSelectedItem: j,
    selectedItemText: R,
    position: r,
    isPositioned: F,
    searchRef: N
  }, /* @__PURE__ */ g.exports.createElement(xS, {
    as: $i,
    allowPinchZoom: !0
  }, /* @__PURE__ */ g.exports.createElement(Bm, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (Q) => {
      Q.preventDefault();
    },
    onUnmountAutoFocus: ce(o, (Q) => {
      var ne;
      (ne = y.trigger) === null || ne === void 0 || ne.focus({
        preventScroll: !0
      }), Q.preventDefault();
    })
  }, /* @__PURE__ */ g.exports.createElement(zm, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: l,
    onFocusOutside: (Q) => Q.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ g.exports.createElement(se, G({
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
    onKeyDown: ce(p.onKeyDown, (Q) => {
      const ne = Q.ctrlKey || Q.altKey || Q.metaKey;
      if (Q.key === "Tab" && Q.preventDefault(), !ne && Q.key.length === 1 && k(Q.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Q.key)) {
        let ae = O().filter(
          (pe) => !pe.disabled
        ).map(
          (pe) => pe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Q.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Q.key)) {
          const pe = Q.target, ue = ae.indexOf(pe);
          ae = ae.slice(ue + 1);
        }
        setTimeout(
          () => _(ae)
        ), Q.preventDefault();
      }
    })
  }))))));
}), v6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Eo(Ri, n), l = $o(Ri, n), [a, s] = g.exports.useState(null), [u, c] = g.exports.useState(null), f = we(
    t,
    ($) => c($)
  ), d = Wc(n), m = g.exports.useRef(!1), h = g.exports.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: p, focusSelectedItem: y } = l, x = g.exports.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && v && w && p) {
      const $ = i.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), R = p.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const pe = R.left - E.left, ue = P.left - pe, st = $.left - ue, ut = $.width + st, Vr = Math.max(ut, E.width), tr = window.innerWidth - Fn, nr = yh(ue, [
          Fn,
          tr - Vr
        ]);
        a.style.minWidth = ut + "px", a.style.left = nr + "px";
      } else {
        const pe = E.right - R.right, ue = window.innerWidth - P.right - pe, st = window.innerWidth - $.right - ue, ut = $.width + st, Vr = Math.max(ut, E.width), tr = window.innerWidth - Fn, nr = yh(ue, [
          Fn,
          tr - Vr
        ]);
        a.style.minWidth = ut + "px", a.style.right = nr + "px";
      }
      const T = d(), O = window.innerHeight - Fn * 2, F = v.scrollHeight, z = window.getComputedStyle(u), D = parseInt(z.borderTopWidth, 10), _ = parseInt(z.paddingTop, 10), j = parseInt(z.borderBottomWidth, 10), M = parseInt(z.paddingBottom, 10), I = D + _ + F + M + j, N = Math.min(w.offsetHeight * 5, I), k = window.getComputedStyle(v), C = parseInt(k.paddingTop, 10), J = parseInt(k.paddingBottom, 10), te = $.top + $.height / 2 - Fn, se = O - te, ee = w.offsetHeight / 2, Q = w.offsetTop + ee, ne = D + _ + Q, ge = I - ne;
      if (ne <= te) {
        const pe = w === T[T.length - 1].ref.current;
        a.style.bottom = "0px";
        const ue = u.clientHeight - v.offsetTop - v.offsetHeight, st = Math.max(se, ee + (pe ? J : 0) + ue + j), ut = ne + st;
        a.style.height = ut + "px";
      } else {
        const pe = w === T[0].ref.current;
        a.style.top = "0px";
        const st = Math.max(te, D + v.offsetTop + (pe ? C : 0) + ee) + ge;
        a.style.height = st + "px", v.scrollTop = ne - te + v.offsetTop;
      }
      a.style.margin = `${Fn}px 0`, a.style.minHeight = N + "px", a.style.maxHeight = O + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
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
  Ze(
    () => x(),
    [
      x
    ]
  );
  const [b, A] = g.exports.useState();
  Ze(() => {
    u && A(window.getComputedStyle(u).zIndex);
  }, [
    u
  ]);
  const S = g.exports.useCallback(($) => {
    $ && h.current === !0 && (x(), y == null || y(), h.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ g.exports.createElement(y6, {
    scope: n,
    contentWrapper: a,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: S
  }, /* @__PURE__ */ g.exports.createElement("div", {
    ref: s,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: b
    }
  }, /* @__PURE__ */ g.exports.createElement(He.div, G({}, o, {
    ref: f,
    style: {
      boxSizing: "border-box",
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Gy = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Fn, ...i } = e, l = Pg(n);
  return /* @__PURE__ */ g.exports.createElement(oS, G({}, l, i, {
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
}), [y6, _g] = ji(Ri, {}), Ky = "SelectViewport", x6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = $o(Ky, n), i = _g(Ky, n), l = we(t, o.onViewportChange), a = g.exports.useRef(0);
  return /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, /* @__PURE__ */ g.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ g.exports.createElement(Hc.Slot, {
    scope: n
  }, /* @__PURE__ */ g.exports.createElement(He.div, G({
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
    onScroll: ce(r.onScroll, (s) => {
      const u = s.currentTarget, { contentWrapper: c, shouldExpandOnScrollRef: f } = i;
      if (f != null && f.current && c) {
        const d = Math.abs(a.current - u.scrollTop);
        if (d > 0) {
          const m = window.innerHeight - Fn * 2, h = parseFloat(c.style.minHeight), v = parseFloat(c.style.height), w = Math.max(h, v);
          if (w < m) {
            const p = w + d, y = Math.min(m, p), x = p - y;
            c.style.height = y + "px", c.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, c.style.justifyContent = "flex-end");
          }
        }
      }
      a.current = u.scrollTop;
    })
  }))));
}), w6 = "SelectGroup";
ji(w6);
const xh = "SelectItem", [b6, S6] = ji(xh), k6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e, a = Eo(xh, n), s = $o(xh, n), u = a.value === r, [c, f] = g.exports.useState(i != null ? i : ""), [d, m] = g.exports.useState(!1), h = we(t, (p) => {
    var y;
    return (y = s.itemRefCallback) === null || y === void 0 ? void 0 : y.call(s, p, r, o);
  }), v = Vn(), w = () => {
    o || (a.onValueChange(r), a.onOpenChange(!1));
  };
  return /* @__PURE__ */ g.exports.createElement(b6, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: u,
    onItemTextChange: g.exports.useCallback((p) => {
      f((y) => {
        var x;
        return y || ((x = p == null ? void 0 : p.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ g.exports.createElement(Hc.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: c
  }, /* @__PURE__ */ g.exports.createElement(He.div, G({
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
    onFocus: ce(
      l.onFocus,
      () => m(!0)
    ),
    onBlur: ce(
      l.onBlur,
      () => m(!1)
    ),
    onPointerUp: ce(l.onPointerUp, w),
    onPointerMove: ce(l.onPointerMove, (p) => {
      if (o) {
        var y;
        (y = s.onItemLeave) === null || y === void 0 || y.call(s);
      } else
        p.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ce(l.onPointerLeave, (p) => {
      if (p.currentTarget === document.activeElement) {
        var y;
        (y = s.onItemLeave) === null || y === void 0 || y.call(s);
      }
    }),
    onKeyDown: ce(l.onKeyDown, (p) => {
      var y;
      ((y = s.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && p.key === " " || (r6.includes(p.key) && w(), p.key === " " && p.preventDefault());
    })
  }))));
}), _s = "SelectItemText", C6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...i } = e, l = Eo(_s, n), a = $o(_s, n), s = S6(_s, n), u = a6(_s, n), [c, f] = g.exports.useState(null), d = we(
    t,
    (p) => f(p),
    s.onItemTextChange,
    (p) => {
      var y;
      return (y = a.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(a, p, s.value, s.disabled);
    }
  ), m = c == null ? void 0 : c.textContent, h = g.exports.useMemo(
    () => /* @__PURE__ */ g.exports.createElement("option", {
      key: s.value,
      value: s.value,
      disabled: s.disabled
    }, m),
    [
      s.disabled,
      s.value,
      m
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
  return Ze(() => (v(h), () => w(h)), [
    v,
    w,
    h
  ]), /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, /* @__PURE__ */ g.exports.createElement(He.span, G({
    id: s.textId
  }, i, {
    ref: d
  })), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? /* @__PURE__ */ hn.exports.createPortal(i.children, l.valueNode) : null);
}), Yy = "SelectScrollUpButton", E6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = $o(Yy, e.__scopeSelect), r = _g(Yy, e.__scopeSelect), [o, i] = g.exports.useState(!1), l = we(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ g.exports.createElement(kC, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop - s.offsetHeight);
    }
  })) : null;
}), Xy = "SelectScrollDownButton", $6 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = $o(Xy, e.__scopeSelect), r = _g(Xy, e.__scopeSelect), [o, i] = g.exports.useState(!1), l = we(t, r.onScrollButtonChange);
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
  ]), o ? /* @__PURE__ */ g.exports.createElement(kC, G({}, e, {
    ref: l,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: s } = n;
      a && s && (a.scrollTop = a.scrollTop + s.offsetHeight);
    }
  })) : null;
}), kC = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = $o("SelectScrollButton", n), l = g.exports.useRef(null), a = Wc(n), s = g.exports.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return g.exports.useEffect(() => () => s(), [
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
  ]), /* @__PURE__ */ g.exports.createElement(He.div, G({
    "aria-hidden": !0
  }, o, {
    ref: t,
    style: {
      flexShrink: 0,
      ...o.style
    },
    onPointerMove: ce(o.onPointerMove, () => {
      var u;
      (u = i.onItemLeave) === null || u === void 0 || u.call(i), l.current === null && (l.current = window.setInterval(r, 50));
    }),
    onPointerLeave: ce(o.onPointerLeave, () => {
      s();
    })
  }));
}), CC = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = g.exports.useRef(null), i = we(t, o), l = e6(n);
  return g.exports.useEffect(() => {
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
  ]), /* @__PURE__ */ g.exports.createElement(t6, {
    asChild: !0
  }, /* @__PURE__ */ g.exports.createElement("select", G({}, r, {
    ref: i,
    defaultValue: n
  })));
});
CC.displayName = "BubbleSelect";
function EC(e) {
  const t = ze(e), n = g.exports.useRef(""), r = g.exports.useRef(0), o = g.exports.useCallback((l) => {
    const a = n.current + l;
    t(a), function s(u) {
      n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(
        () => s(""),
        1e3
      ));
    }(a);
  }, [
    t
  ]), i = g.exports.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return g.exports.useEffect(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    i
  ];
}
function $C(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let l = A6(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter(
    (u) => u !== n
  ));
  const s = l.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function A6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const P6 = s6, _6 = c6, R6 = d6, T6 = p6, I6 = h6, O6 = m6, N6 = x6, M6 = k6, F6 = C6, D6 = E6, L6 = $6;
function AC(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = AC(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ti() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = AC(e)) && (r && (r += " "), r += t);
  return r;
}
const z6 = {
  int: "Afrikaans",
  native: "Afrikaans"
}, B6 = {
  int: "Albanian",
  native: "Shqip"
}, j6 = {
  int: "Arabic",
  native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
}, V6 = {
  int: "Armenian",
  native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
}, U6 = {
  int: "Assamese",
  native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
}, H6 = {
  int: "Azerbaijani",
  native: "Az\u0259rbaycan dili"
}, W6 = {
  int: "Basque",
  native: "Euskara"
}, q6 = {
  int: "Belarusian",
  native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
}, Q6 = {
  int: "Bengali",
  native: "\u09AC\u09BE\u0982\u09B2\u09BE"
}, G6 = {
  int: "Bosnian",
  native: "Bosanski"
}, K6 = {
  int: "Breton",
  native: "Brezhoneg"
}, Y6 = {
  int: "Bulgarian",
  native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
}, X6 = {
  int: "Burmese",
  native: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"
}, Z6 = {
  int: "Catalan / Valencian",
  native: "Catal\xE0"
}, J6 = {
  int: "Czech",
  native: "\u010Ce\u0161tina"
}, e7 = {
  int: "Danish",
  native: "Dansk"
}, t7 = {
  int: "Dutch",
  native: "Nederlands"
}, n7 = {
  int: "English",
  native: "English"
}, r7 = {
  int: "Esperanto",
  native: "Esperanto"
}, o7 = {
  int: "Estonian",
  native: "Eesti"
}, i7 = {
  int: "Faroese",
  native: "F\xF8royskt"
}, l7 = {
  int: "Finnish",
  native: "Suomi"
}, a7 = {
  int: "French",
  native: "Fran\xE7ais"
}, s7 = {
  int: "Galician",
  native: "Galego"
}, u7 = {
  int: "Georgian",
  native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
}, c7 = {
  int: "German",
  native: "Deutsch"
}, f7 = {
  int: "Greek",
  native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
}, d7 = {
  int: "Guarani",
  native: "Ava\xF1e'\u1EBD"
}, p7 = {
  int: "Gujarati",
  native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
}, h7 = {
  int: "Hausa",
  native: "Hrvatski"
}, m7 = {
  int: "Hausa",
  native: "Hausa"
}, g7 = {
  int: "Hebrew",
  native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
}, v7 = {
  int: "Hindi",
  native: "\u0939\u093F\u0928\u094D\u0926\u0940"
}, y7 = {
  int: "Hungarian",
  native: "Magyar"
}, x7 = {
  int: "Icelandic",
  native: "\xCDslenska"
}, w7 = {
  int: "Indonesian",
  native: "Bahasa Indonesia"
}, b7 = {
  int: "Irish",
  native: "Gaeilge"
}, S7 = {
  int: "Italian",
  native: "Italiano"
}, k7 = {
  int: "Japanese",
  native: "\u65E5\u672C\u8A9E"
}, C7 = {
  int: "Javanese",
  native: "Basa Jawa"
}, E7 = {
  int: "Kannada",
  native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
}, $7 = {
  int: "Kazakh",
  native: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
}, A7 = {
  int: "Khmer",
  native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
}, P7 = {
  int: "Korean",
  native: "\uD55C\uAD6D\uC5B4"
}, _7 = {
  int: "Kurdish",
  native: "Kurd\xEE (Kurmanc\xEE)"
}, R7 = {
  int: "Latin",
  native: "lingua latina"
}, T7 = {
  int: "Latvian",
  native: "Latvie\u0161u"
}, I7 = {
  int: "Lithuanian",
  native: "Lietuvi\u0173"
}, O7 = {
  int: "Macedonian",
  native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
}, N7 = {
  int: "Malagasy",
  native: "Malagasy"
}, M7 = {
  int: "Malay",
  native: "Bahasa Melayu"
}, F7 = {
  int: "Malayalam",
  native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
}, D7 = {
  int: "Marathi",
  native: "\u092E\u0930\u093E\u0920\u0940"
}, L7 = {
  int: "Mongolian",
  native: "\u041C\u043E\u043D\u0433\u043E\u043B"
}, z7 = {
  int: "Nepali",
  native: "\u0928\u0947\u092A\u093E\u0932\u0940"
}, B7 = {
  int: "Norwegian (bokmal)",
  native: "Norsk (bokm\xE5l)"
}, j7 = {
  int: "Norwegian Nynorsk",
  native: "Norsk (nynorsk)"
}, V7 = {
  int: "Oriya",
  native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
}, U7 = {
  int: "Pashto",
  native: "\u067E\u069A\u062A\u0648"
}, H7 = {
  int: "Persian",
  native: "\u0641\u0627\u0631\u0633\u06CC"
}, W7 = {
  int: "Polish",
  native: "Polski"
}, q7 = {
  int: "Portuguese",
  native: "Portugu\xEAs"
}, Q7 = {
  int: "Punjabi",
  native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
}, G7 = {
  int: "Romanian",
  native: "Rom\xE2n\u0103"
}, K7 = {
  int: "Russian",
  native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, Y7 = {
  int: "Rwandi",
  native: "Ikinyarwanda"
}, X7 = {
  int: "Sardinian",
  native: "Sardu"
}, Z7 = {
  int: "Serbian",
  native: "\u0421\u0440\u043F\u0441\u043A\u0438"
}, J7 = {
  int: "Silesian",
  native: "\u015Bl\u014Dnsk\u014F g\u014Fdka"
}, e8 = {
  int: "Simplified Chinese",
  native: "\u4E2D\u6587"
}, t8 = {
  int: "Sinhala",
  native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
}, n8 = {
  int: "Slovak",
  native: "Sloven\u010Dina"
}, r8 = {
  int: "Slovenian",
  native: "Sloven\u0161\u010Dina"
}, o8 = {
  int: "Somali",
  native: "Af-Soomaali"
}, i8 = {
  int: "Sorani Kurdish",
  native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
}, l8 = {
  int: "Spanish",
  native: "Espa\xF1ol"
}, a8 = {
  int: "Swahili",
  native: "Kiswahili"
}, s8 = {
  int: "Swedish",
  native: "Svenska"
}, u8 = {
  int: "Syriac",
  native: "\u0723\u0718\u072A\u071D\u071D\u0710"
}, c8 = {
  int: "Tagalog / Filipino",
  native: "Filipino"
}, f8 = {
  int: "Tajik",
  native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
}, d8 = {
  int: "Tamazight",
  native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
}, p8 = {
  int: "Tamil",
  native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
}, h8 = {
  int: "Telugu",
  native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
}, m8 = {
  int: "Thai",
  native: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"
}, g8 = {
  int: "Turkish",
  native: "T\xFCrk\xE7e"
}, v8 = {
  int: "Ukrainian",
  native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
}, y8 = {
  int: "Urdu",
  native: "\u0627\u0631\u062F\u0648"
}, x8 = {
  int: "Uzbek",
  native: "O'zbek"
}, w8 = {
  int: "Vietnamese",
  native: "Ti\u1EBFng Vi\u1EC7t"
}, b8 = {
  int: "Visayan",
  native: "Bisaya"
}, S8 = {
  int: "Welsh",
  native: "Cymraeg"
}, k8 = {
  int: "West Frisian",
  native: "Frysk"
}, Zy = {
  af: z6,
  sq: B6,
  ar: j6,
  hy: V6,
  as: U6,
  az: H6,
  eu: W6,
  be: q6,
  bn: Q6,
  bs: G6,
  br: K6,
  bg: Y6,
  my: X6,
  ca: Z6,
  cs: J6,
  da: e7,
  nl: t7,
  en: n7,
  eo: r7,
  et: o7,
  fo: i7,
  fi: l7,
  fr: a7,
  gl: s7,
  ka: u7,
  de: c7,
  el: f7,
  gn: d7,
  gu: p7,
  hr: h7,
  ha: m7,
  he: g7,
  hi: v7,
  hu: y7,
  is: x7,
  id: w7,
  ga: b7,
  it: S7,
  ja: k7,
  jv: C7,
  kn: E7,
  kk: $7,
  km: A7,
  ko: P7,
  ku: _7,
  la: R7,
  lv: T7,
  lt: I7,
  mk: O7,
  mg: N7,
  ms: M7,
  ml: F7,
  mr: D7,
  mn: L7,
  ne: z7,
  nb: B7,
  nn: j7,
  or: V7,
  ps: U7,
  fa: H7,
  pl: W7,
  pt: q7,
  pa: Q7,
  ro: G7,
  ru: K7,
  rw: Y7,
  sc: X7,
  sr: Z7,
  sz: J7,
  zh: e8,
  si: t8,
  sk: n8,
  sl: r8,
  so: o8,
  cb: i8,
  es: l8,
  sw: a8,
  sv: s8,
  sy: u8,
  tl: c8,
  tg: f8,
  tz: d8,
  ta: p8,
  te: h8,
  th: m8,
  tr: g8,
  uk: v8,
  ur: y8,
  uz: x8,
  vi: w8,
  cx: b8,
  cy: S8,
  fy: k8
}, PC = Ve.forwardRef(({
  children: e,
  className: t,
  ...n
}, r) => /* @__PURE__ */ B(M6, {
  className: Ti("relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none text-mayumi-gray-1200 data-[disabled]:pointer-events-none data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 data-[highlighted]:outline-none", t),
  ...n,
  ref: r,
  children: /* @__PURE__ */ B(F6, {
    children: e
  })
}));
PC.displayName = "SelectItem";
const C8 = (e) => {
  var n;
  const t = wC();
  return /* @__PURE__ */ fe(P6, {
    value: (n = t[qy]) == null ? void 0 : n[so].lang,
    onValueChange: (r) => {
      var o;
      (o = e.onValueChange) == null || o.call(e, r), t.set({
        [qy]: {
          [so]: {
            lang: r
          }
        }
      });
    },
    children: [/* @__PURE__ */ fe(_6, {
      className: "inline-flex items-center justify-center gap-[5px] rounded bg-gray2 px-3 py-1 text-xs text-mayumi-gray-1200 outline-none hover:bg-mayumi-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900",
      "aria-label": "lang",
      autoFocus: !1,
      onBlur: () => {
        console.log("onblur");
      },
      tabIndex: 2,
      children: [/* @__PURE__ */ B(R6, {
        placeholder: "Select a Language..."
      }), /* @__PURE__ */ B(T6, {
        className: "text-mayumi-gray-1200",
        children: /* @__PURE__ */ B("i", {
          className: "gg-chevron-down/0.75"
        })
      })]
    }), /* @__PURE__ */ B(I6, {
      container: e.container.current,
      children: /* @__PURE__ */ fe(O6, {
        className: "overflow-hidden rounded-md bg-gray2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        children: [/* @__PURE__ */ B(D6, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-up/0.75"
          })
        }), /* @__PURE__ */ B(N6, {
          className: "p-[5px]",
          children: Object.keys(Zy).map((r) => {
            const o = Zy[r];
            return /* @__PURE__ */ B(PC, {
              value: o.int,
              children: o.int
            }, r);
          })
        }), /* @__PURE__ */ B(L6, {
          className: "flex h-[25px] cursor-default items-center justify-center bg-gray2 text-mayumi-gray-1200",
          children: /* @__PURE__ */ B("i", {
            className: "gg-chevron-down/0.75"
          })
        })]
      })
    })]
  });
}, E8 = (e) => /* @__PURE__ */ g.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z", fill: "currentColor" })), $8 = (e) => /* @__PURE__ */ g.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", fill: "currentColor" }), /* @__PURE__ */ g.exports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z", fill: "currentColor" }));
function A8(e, t) {
  return g.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const _C = "ScrollArea", [RC, QB] = xo(_C), [P8, Rn] = RC(_C), _8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e, [a, s] = g.exports.useState(null), [u, c] = g.exports.useState(null), [f, d] = g.exports.useState(null), [m, h] = g.exports.useState(null), [v, w] = g.exports.useState(null), [p, y] = g.exports.useState(0), [x, b] = g.exports.useState(0), [A, S] = g.exports.useState(!1), [$, E] = g.exports.useState(!1), P = we(
    t,
    (T) => s(T)
  ), R = bC(o);
  return /* @__PURE__ */ g.exports.createElement(P8, {
    scope: n,
    type: r,
    dir: R,
    scrollHideDelay: i,
    scrollArea: a,
    viewport: u,
    onViewportChange: c,
    content: f,
    onContentChange: d,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: A,
    onScrollbarXEnabledChange: S,
    scrollbarY: v,
    onScrollbarYChange: w,
    scrollbarYEnabled: $,
    onScrollbarYEnabledChange: E,
    onCornerWidthChange: y,
    onCornerHeightChange: b
  }, /* @__PURE__ */ g.exports.createElement(He.div, G({
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
}), R8 = "ScrollAreaViewport", T8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, i = Rn(R8, n), l = g.exports.useRef(null), a = we(t, l, i.onViewportChange);
  return /* @__PURE__ */ g.exports.createElement(g.exports.Fragment, null, /* @__PURE__ */ g.exports.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ g.exports.createElement(He.div, G({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: a,
    style: {
      overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ g.exports.createElement("div", {
    ref: i.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), Jn = "ScrollAreaScrollbar", I8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Rn(Jn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, a = e.orientation === "horizontal";
  return g.exports.useEffect(() => (a ? i(!0) : l(!0), () => {
    a ? i(!1) : l(!1);
  }), [
    a,
    i,
    l
  ]), o.type === "hover" ? /* @__PURE__ */ g.exports.createElement(O8, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ g.exports.createElement(N8, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ g.exports.createElement(TC, G({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ g.exports.createElement(Rg, G({}, r, {
    ref: t
  })) : null;
}), O8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Rn(Jn, e.__scopeScrollArea), [i, l] = g.exports.useState(!1);
  return g.exports.useEffect(() => {
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
  ]), /* @__PURE__ */ g.exports.createElement(mn, {
    present: n || i
  }, /* @__PURE__ */ g.exports.createElement(TC, G({
    "data-state": i ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), N8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Rn(Jn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = Qc(
    () => s("SCROLL_END"),
    100
  ), [a, s] = A8("hidden", {
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
  return g.exports.useEffect(() => {
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
  ]), g.exports.useEffect(() => {
    const u = o.viewport, c = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[c];
      const d = () => {
        const m = u[c];
        f !== m && (s("SCROLL"), l()), f = m;
      };
      return u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [
    o.viewport,
    i,
    s,
    l
  ]), /* @__PURE__ */ g.exports.createElement(mn, {
    present: n || a !== "hidden"
  }, /* @__PURE__ */ g.exports.createElement(Rg, G({
    "data-state": a === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: ce(
      e.onPointerEnter,
      () => s("POINTER_ENTER")
    ),
    onPointerLeave: ce(
      e.onPointerLeave,
      () => s("POINTER_LEAVE")
    )
  })));
}), TC = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const n = Rn(Jn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = g.exports.useState(!1), a = e.orientation === "horizontal", s = Qc(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(a ? u : c);
    }
  }, 10);
  return Yu(n.viewport, s), Yu(n.content, s), /* @__PURE__ */ g.exports.createElement(mn, {
    present: r || i
  }, /* @__PURE__ */ g.exports.createElement(Rg, G({
    "data-state": i ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Rg = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Rn(Jn, e.__scopeScrollArea), i = g.exports.useRef(null), l = g.exports.useRef(0), [a, s] = g.exports.useState({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), u = NC(a.viewport, a.content), c = {
    ...r,
    sizes: a,
    onSizesChange: s,
    hasThumb: Boolean(u > 0 && u < 1),
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (d) => l.current = d
  };
  function f(d, m) {
    return B8(d, l.current, a, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ g.exports.createElement(M8, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollLeft, m = Jy(d, a, o.dir);
        i.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ g.exports.createElement(F8, G({}, c, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && i.current) {
        const d = o.viewport.scrollTop, m = Jy(d, a);
        i.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (d) => {
      o.viewport && (o.viewport.scrollTop = d);
    },
    onDragScroll: (d) => {
      o.viewport && (o.viewport.scrollTop = f(d));
    }
  })) : null;
}), M8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Rn(Jn, e.__scopeScrollArea), [l, a] = g.exports.useState(), s = g.exports.useRef(null), u = we(t, s, i.onScrollbarXChange);
  return g.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ g.exports.createElement(OC, G({
    "data-orientation": "horizontal"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: qc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
    onDragScroll: (c) => e.onDragScroll(c.x),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollLeft + c.deltaX;
        e.onWheelScroll(d), FC(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: s.current.clientWidth,
          paddingStart: Ku(l.paddingLeft),
          paddingEnd: Ku(l.paddingRight)
        }
      });
    }
  }));
}), F8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Rn(Jn, e.__scopeScrollArea), [l, a] = g.exports.useState(), s = g.exports.useRef(null), u = we(t, s, i.onScrollbarYChange);
  return g.exports.useEffect(() => {
    s.current && a(getComputedStyle(s.current));
  }, [
    s
  ]), /* @__PURE__ */ g.exports.createElement(OC, G({
    "data-orientation": "vertical"
  }, o, {
    ref: u,
    sizes: n,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: qc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
    onDragScroll: (c) => e.onDragScroll(c.y),
    onWheelScroll: (c, f) => {
      if (i.viewport) {
        const d = i.viewport.scrollTop + c.deltaY;
        e.onWheelScroll(d), FC(d, f) && c.preventDefault();
      }
    },
    onResize: () => {
      s.current && i.viewport && l && r({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: s.current.clientHeight,
          paddingStart: Ku(l.paddingTop),
          paddingEnd: Ku(l.paddingBottom)
        }
      });
    }
  }));
}), [D8, IC] = RC(Jn), OC = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: i, onThumbPointerUp: l, onThumbPointerDown: a, onThumbPositionChange: s, onDragScroll: u, onWheelScroll: c, onResize: f, ...d } = e, m = Rn(Jn, n), [h, v] = g.exports.useState(null), w = we(
    t,
    (P) => v(P)
  ), p = g.exports.useRef(null), y = g.exports.useRef(""), x = m.viewport, b = r.content - r.viewport, A = ze(c), S = ze(s), $ = Qc(f, 10);
  function E(P) {
    if (p.current) {
      const R = P.clientX - p.current.left, T = P.clientY - p.current.top;
      u({
        x: R,
        y: T
      });
    }
  }
  return g.exports.useEffect(() => {
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
  ]), g.exports.useEffect(S, [
    r,
    S
  ]), Yu(h, $), Yu(m.content, $), /* @__PURE__ */ g.exports.createElement(D8, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: ze(i),
    onThumbPointerUp: ze(l),
    onThumbPositionChange: S,
    onThumbPointerDown: ze(a)
  }, /* @__PURE__ */ g.exports.createElement(He.div, G({}, d, {
    ref: w,
    style: {
      position: "absolute",
      ...d.style
    },
    onPointerDown: ce(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), p.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", E(P));
    }),
    onPointerMove: ce(e.onPointerMove, E),
    onPointerUp: ce(e.onPointerUp, (P) => {
      const R = P.target;
      R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.current = null;
    })
  })));
}), wh = "ScrollAreaThumb", L8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = IC(wh, e.__scopeScrollArea);
  return /* @__PURE__ */ g.exports.createElement(mn, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ g.exports.createElement(z8, G({
    ref: t
  }, r)));
}), z8 = /* @__PURE__ */ g.exports.forwardRef((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, i = Rn(wh, n), l = IC(wh, n), { onThumbPositionChange: a } = l, s = we(
    t,
    (f) => l.onThumbChange(f)
  ), u = g.exports.useRef(), c = Qc(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return g.exports.useEffect(() => {
    const f = i.viewport;
    if (f) {
      const d = () => {
        if (c(), !u.current) {
          const m = j8(f, a);
          u.current = m, a();
        }
      };
      return a(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
    }
  }, [
    i.viewport,
    c,
    a
  ]), /* @__PURE__ */ g.exports.createElement(He.div, G({
    "data-state": l.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: s,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ce(e.onPointerDownCapture, (f) => {
      const m = f.target.getBoundingClientRect(), h = f.clientX - m.left, v = f.clientY - m.top;
      l.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: ce(e.onPointerUp, l.onThumbPointerUp)
  }));
});
function Ku(e) {
  return e ? parseInt(e, 10) : 0;
}
function NC(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function qc(e) {
  const t = NC(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function B8(e, t, n, r = "ltr") {
  const o = qc(n), i = o / 2, l = t || i, a = o - l, s = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, c = n.content - n.viewport, f = r === "ltr" ? [
    0,
    c
  ] : [
    c * -1,
    0
  ];
  return MC([
    s,
    u
  ], f)(e);
}
function Jy(e, t, n = "ltr") {
  const r = qc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, a = i - r, s = n === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], u = yh(e, s);
  return MC([
    0,
    l
  ], [
    0,
    a
  ])(u);
}
function MC(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function FC(e, t) {
  return e > 0 && e < t;
}
const j8 = (e, t = () => {
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
function Qc(e, t) {
  const n = ze(e), r = g.exports.useRef(0);
  return g.exports.useEffect(
    () => () => window.clearTimeout(r.current),
    []
  ), g.exports.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Yu(e, t) {
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
const V8 = _8, U8 = T8, e1 = I8, t1 = L8, n1 = (e) => typeof e == "object" && e != null && e.nodeType === 1, r1 = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", md = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return r1(n.overflowY, t) || r1(n.overflowX, t) || ((r) => {
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
}, Rs = (e, t, n, r, o, i, l, a) => i < e && l > t || i > e && l < t ? 0 : i <= e && a <= n || l >= t && a >= n ? i - e - r : l > t && a < n || i < e && a > n ? l - t + o : 0, H8 = (e) => {
  const t = e.parentElement;
  return t == null ? e.getRootNode().host || null : t;
}, o1 = (e, t) => {
  var n, r, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: l, block: a, inline: s, boundary: u, skipOverflowHiddenElements: c } = t, f = typeof u == "function" ? u : (O) => O !== u;
  if (!n1(e))
    throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, m = [];
  let h = e;
  for (; n1(h) && f(h); ) {
    if (h = H8(h), h === d) {
      m.push(h);
      break;
    }
    h != null && h === document.body && md(h) && !md(document.documentElement) || h != null && md(h, c) && m.push(h);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, w = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: p, scrollY: y } = window, { height: x, width: b, top: A, right: S, bottom: $, left: E } = e.getBoundingClientRect();
  let P = a === "start" || a === "nearest" ? A : a === "end" ? $ : A + x / 2, R = s === "center" ? E + b / 2 : s === "end" ? S : E;
  const T = [];
  for (let O = 0; O < m.length; O++) {
    const F = m[O], { height: z, width: D, top: _, right: j, bottom: M, left: I } = F.getBoundingClientRect();
    if (l === "if-needed" && A >= 0 && E >= 0 && $ <= w && S <= v && A >= _ && $ <= M && E >= I && S <= j)
      return T;
    const N = getComputedStyle(F), k = parseInt(N.borderLeftWidth, 10), C = parseInt(N.borderTopWidth, 10), J = parseInt(N.borderRightWidth, 10), te = parseInt(N.borderBottomWidth, 10);
    let se = 0, ee = 0;
    const Q = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - k - J : 0, ne = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - C - te : 0, ge = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : D / F.offsetWidth : 0, ae = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : z / F.offsetHeight : 0;
    if (d === F)
      se = a === "start" ? P : a === "end" ? P - w : a === "nearest" ? Rs(y, y + w, w, C, te, y + P, y + P + x, x) : P - w / 2, ee = s === "start" ? R : s === "center" ? R - v / 2 : s === "end" ? R - v : Rs(p, p + v, v, k, J, p + R, p + R + b, b), se = Math.max(0, se + y), ee = Math.max(0, ee + p);
    else {
      se = a === "start" ? P - _ - C : a === "end" ? P - M + te + ne : a === "nearest" ? Rs(_, M, z, C, te + ne, P, P + x, x) : P - (_ + z / 2) + ne / 2, ee = s === "start" ? R - I - k : s === "center" ? R - (I + D / 2) + Q / 2 : s === "end" ? R - j + J + Q : Rs(I, j, D, k, J + Q, R, R + b, b);
      const { scrollLeft: pe, scrollTop: ue } = F;
      se = Math.max(0, Math.min(ue + se / ae, F.scrollHeight - z / ae + ne)), ee = Math.max(0, Math.min(pe + ee / ge, F.scrollWidth - D / ge + Q)), P += ue - se, R += pe - ee;
    }
    T.push({ el: F, top: se, left: ee });
  }
  return T;
}, W8 = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function q8(e, t) {
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
    return t.behavior(o1(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of o1(e, W8(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function i1(e) {
  if (e)
    throw e;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var DC = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, eu = Object.prototype.hasOwnProperty, LC = Object.prototype.toString, l1 = Object.defineProperty, a1 = Object.getOwnPropertyDescriptor, s1 = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : LC.call(t) === "[object Array]";
}, u1 = function(t) {
  if (!t || LC.call(t) !== "[object Object]")
    return !1;
  var n = eu.call(t, "constructor"), r = t.constructor && t.constructor.prototype && eu.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || eu.call(t, o);
}, c1 = function(t, n) {
  l1 && n.name === "__proto__" ? l1(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, f1 = function(t, n) {
  if (n === "__proto__")
    if (eu.call(t, n)) {
      if (a1)
        return a1(t, n).value;
    } else
      return;
  return t[n];
}, d1 = function e() {
  var t, n, r, o, i, l, a = arguments[0], s = 1, u = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = f1(a, n), o = f1(t, n), a !== o && (c && o && (u1(o) || (i = s1(o))) ? (i ? (i = !1, l = r && s1(r) ? r : []) : l = r && u1(r) ? r : {}, c1(a, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && c1(a, { name: n, newValue: o }));
  return a;
};
function bh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Q8() {
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
      o = u, c ? G8(c, a)(...u) : l(null, ...u);
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
function G8(e, t) {
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
function Bl(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? p1(e.position) : "start" in e || "end" in e ? p1(e) : "line" in e || "column" in e ? Sh(e) : "";
}
function Sh(e) {
  return h1(e && e.line) + ":" + h1(e && e.column);
}
function p1(e) {
  return Sh(e && e.start) + "-" + Sh(e && e.end);
}
function h1(e) {
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
    n && ("type" in n || "position" in n ? n.position && (i = n.position) : "start" in n || "end" in n ? i = n : ("line" in n || "column" in n) && (i.start = n)), this.name = Bl(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = o[0], this.ruleId = o[1], this.file, this.actual, this.expected, this.url, this.note;
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
const yn = { basename: K8, dirname: Y8, extname: X8, join: Z8, sep: "/" };
function K8(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Ka(e);
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
function Y8(e) {
  if (Ka(e), e.length === 0)
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
function X8(e) {
  Ka(e);
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
function Z8(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Ka(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : J8(n);
}
function J8(e) {
  Ka(e);
  const t = e.charCodeAt(0) === 47;
  let n = eN(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function eN(e, t) {
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
function Ka(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const tN = { cwd: nN };
function nN() {
  return "/";
}
function kh(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function rN(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!kh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return oN(e);
}
function oN(e) {
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
const gd = ["history", "path", "basename", "stem", "extname", "dirname"];
class iN {
  constructor(t) {
    let n;
    t ? typeof t == "string" || lN(t) ? n = { value: t } : kh(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = tN.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < gd.length; ) {
      const i = gd[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      gd.includes(o) || (this[o] = n[o]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    kh(t) && (t = rN(t)), yd(t, "path"), this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  set dirname(t) {
    m1(this.basename, "dirname"), this.path = yn.join(t || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? yn.basename(this.path) : void 0;
  }
  set basename(t) {
    yd(t, "basename"), vd(t, "basename"), this.path = yn.join(this.dirname || "", t);
  }
  get extname() {
    return typeof this.path == "string" ? yn.extname(this.path) : void 0;
  }
  set extname(t) {
    if (vd(t, "extname"), m1(this.dirname, "extname"), t) {
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
    yd(t, "stem"), vd(t, "stem"), this.path = yn.join(this.dirname || "", t + (this.extname || ""));
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
function vd(e, t) {
  if (e && e.includes(yn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function yd(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function m1(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function lN(e) {
  return DC(e);
}
const aN = BC().freeze(), zC = {}.hasOwnProperty;
function BC() {
  const e = Q8(), t = [];
  let n = {}, r, o = -1;
  return i.data = l, i.Parser = void 0, i.Compiler = void 0, i.freeze = a, i.attachers = t, i.use = s, i.parse = u, i.stringify = c, i.run = f, i.runSync = d, i.process = m, i.processSync = h, i;
  function i() {
    const v = BC();
    let w = -1;
    for (; ++w < t.length; )
      v.use(...t[w]);
    return v.data(d1(!0, {}, n)), v;
  }
  function l(v, w) {
    return typeof v == "string" ? arguments.length === 2 ? (bd("data", r), n[v] = w, i) : zC.call(n, v) && n[v] || null : v ? (bd("data", r), n = v, i) : n;
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
    if (bd("use", r), v != null)
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
      P ? (bh(P[1]) && bh($) && ($ = d1(!0, P[1], $)), P[1] = $) : t.push([...arguments]);
    }
  }
  function u(v) {
    i.freeze();
    const w = cl(v), p = i.Parser;
    return xd("parse", p), g1(p, "parse") ? new p(String(w), w).parse() : p(String(w), w);
  }
  function c(v, w) {
    i.freeze();
    const p = cl(w), y = i.Compiler;
    return wd("stringify", y), v1(v), g1(y, "compile") ? new y(v, p).compile() : y(v, p);
  }
  function f(v, w, p) {
    if (v1(v), i.freeze(), !p && typeof w == "function" && (p = w, w = void 0), !p)
      return new Promise(y);
    y(null, p);
    function y(x, b) {
      e.run(v, cl(w), A);
      function A(S, $, E) {
        $ = $ || v, S ? b(S) : x ? x($) : p(null, $, E);
      }
    }
  }
  function d(v, w) {
    let p, y;
    return i.run(v, w, x), y1("runSync", "run", y), p;
    function x(b, A) {
      i1(b), p = A, y = !0;
    }
  }
  function m(v, w) {
    if (i.freeze(), xd("process", i.Parser), wd("process", i.Compiler), !w)
      return new Promise(p);
    p(null, w);
    function p(y, x) {
      const b = cl(v);
      i.run(i.parse(b), b, (S, $, E) => {
        if (S || !$ || !E)
          A(S);
        else {
          const P = i.stringify($, E);
          P == null || (cN(P) ? E.value = P : E.result = P), A(S, E);
        }
      });
      function A(S, $) {
        S || !$ ? x(S) : y ? y($) : w(null, $);
      }
    }
  }
  function h(v) {
    let w;
    i.freeze(), xd("processSync", i.Parser), wd("processSync", i.Compiler);
    const p = cl(v);
    return i.process(p, y), y1("processSync", "process", w), p;
    function y(x) {
      w = !0, i1(x);
    }
  }
}
function g1(e, t) {
  return typeof e == "function" && e.prototype && (sN(e.prototype) || t in e.prototype);
}
function sN(e) {
  let t;
  for (t in e)
    if (zC.call(e, t))
      return !0;
  return !1;
}
function xd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function wd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function bd(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function v1(e) {
  if (!bh(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function y1(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function cl(e) {
  return uN(e) ? e : new iN(e);
}
function uN(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function cN(e) {
  return typeof e == "string" || DC(e);
}
const fN = {};
function dN(e, t) {
  const n = t || fN, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return jC(e, r, o);
}
function jC(e, t, n) {
  if (pN(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return x1(e.children, t, n);
  }
  return Array.isArray(e) ? x1(e, t, n) : "";
}
function x1(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = jC(e[o], t, n);
  return r.join("");
}
function pN(e) {
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
const w1 = {}.hasOwnProperty;
function VC(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    hN(t, e[n]);
  return t;
}
function hN(e, t) {
  let n;
  for (n in t) {
    const o = (w1.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    for (l in i) {
      w1.call(o, l) || (o[l] = []);
      const a = i[l];
      mN(
        o[l],
        Array.isArray(a) ? a : a ? [a] : []
      );
    }
  }
}
function mN(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Rt(e, 0, 0, r);
}
const gN = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Vt = jr(/[A-Za-z]/), Xu = jr(/\d/), vN = jr(/[\dA-Fa-f]/), dt = jr(/[\dA-Za-z]/), yN = jr(/[!-/:-@[-`{-~]/), b1 = jr(/[#-'*+\--9=?A-Z^-~]/);
function Aa(e) {
  return e !== null && (e < 32 || e === 127);
}
function Fe(e) {
  return e !== null && (e < 0 || e === 32);
}
function Z(e) {
  return e !== null && e < -2;
}
function xe(e) {
  return e === -2 || e === -1 || e === 32;
}
const Gc = jr(/\s/), Kc = jr(gN);
function jr(e) {
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
    return xe(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return xe(s) && i++ < o ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const xN = {
  tokenize: wN
};
function wN(e) {
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
const bN = {
  tokenize: SN
}, S1 = {
  tokenize: kN
};
function SN(e) {
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
      S1,
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
      S1,
      m,
      h
    )(x);
  }
  function m(x) {
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
    return Z(x) ? (e.consume(x), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(x), v);
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
function kN(e, t, n) {
  return ye(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Zu(e) {
  if (e === null || Fe(e) || Gc(e))
    return 1;
  if (Kc(e))
    return 2;
}
function Yc(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const Ch = {
  name: "attention",
  tokenize: EN,
  resolveAll: CN
};
function CN(e, t) {
  let n = -1, r, o, i, l, a, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          k1(f, -s), k1(d, s), l = {
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
            Yc(
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
function EN(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Zu(r);
  let i;
  return l;
  function l(s) {
    return e.enter("attentionSequence"), i = s, a(s);
  }
  function a(s) {
    if (s === i)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Zu(s), f = !c || c === 2 && o || n.includes(s), d = !o || o === 2 && c || n.includes(r);
    return u._open = Boolean(i === 42 ? f : f && (o || !d)), u._close = Boolean(i === 42 ? d : d && (c || !f)), t(s);
  }
}
function k1(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const $N = {
  name: "autolink",
  tokenize: AN
};
function AN(e, t, n) {
  let r = 1;
  return o;
  function o(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(h) {
    return Vt(h) ? (e.consume(h), l) : b1(h) ? u(h) : n(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || dt(h) ? a(h) : u(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), s) : (h === 43 || h === 45 || h === 46 || dt(h)) && r++ < 32 ? (e.consume(h), a) : u(h);
  }
  function s(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), m(h)) : h === null || h === 32 || h === 60 || Aa(h) ? n(h) : (e.consume(h), s);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), r = 0, c) : b1(h) ? (e.consume(h), u) : n(h);
  }
  function c(h) {
    return dt(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, c) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", m(h)) : d(h);
  }
  function d(h) {
    return (h === 45 || dt(h)) && r++ < 63 ? (e.consume(h), h === 45 ? d : f) : n(h);
  }
  function m(h) {
    return e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t;
  }
}
const Ya = {
  tokenize: PN,
  partial: !0
};
function PN(e, t, n) {
  return ye(e, r, "linePrefix");
  function r(o) {
    return o === null || Z(o) ? t(o) : n(o);
  }
}
const UC = {
  name: "blockQuote",
  tokenize: _N,
  continuation: {
    tokenize: RN
  },
  exit: TN
};
function _N(e, t, n) {
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
    return xe(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function RN(e, t, n) {
  return ye(
    e,
    e.attempt(UC, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function TN(e) {
  e.exit("blockQuote");
}
const HC = {
  name: "characterEscape",
  tokenize: IN
};
function IN(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return yN(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const C1 = document.createElement("i");
function Tg(e) {
  const t = "&" + e + ";";
  C1.innerHTML = t;
  const n = C1.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
const WC = {
  name: "characterReference",
  tokenize: ON
};
function ON(e, t, n) {
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
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = vN, c) : (e.enter("characterReferenceValue"), i = 7, l = Xu, c(f));
  }
  function c(f) {
    let d;
    return f === 59 && o ? (d = e.exit("characterReferenceValue"), l === dt && !Tg(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const E1 = {
  name: "codeFenced",
  tokenize: NN,
  concrete: !0
};
function NN(e, t, n) {
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
    }), m(S));
  }
  function m(S) {
    return S === null || Fe(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ye(e, h, "whitespace")(S)) : S === 96 && S === u ? n(S) : (e.consume(S), m);
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
        a ? ye(
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
    return ye(
      S,
      R,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function R(F) {
      return S.enter("codeFencedFence"), S.enter("codeFencedFenceSequence"), T(F);
    }
    function T(F) {
      return F === u ? (S.consume(F), P++, T) : P < s ? E(F) : (S.exit("codeFencedFenceSequence"), ye(S, O, "whitespace")(F));
    }
    function O(F) {
      return F === null || Z(F) ? (S.exit("codeFencedFence"), $(F)) : E(F);
    }
  }
}
const Sd = {
  name: "codeIndented",
  tokenize: FN
}, MN = {
  tokenize: DN,
  partial: !0
};
function FN(e, t, n) {
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
    return u === null ? s(u) : Z(u) ? e.attempt(MN, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || Z(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function DN(e, t, n) {
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
const LN = {
  name: "codeText",
  tokenize: jN,
  resolve: zN,
  previous: BN
};
function zN(e) {
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
function BN(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function jN(e, t, n) {
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
function qC(e) {
  const t = {};
  let n = -1, r, o, i, l, a, s, u;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, i = 0, i < s.length && s[i][1].type === "lineEndingBlank" && (i += 2), i < s.length && s[i][1].type === "content"))
      for (; ++i < s.length && s[i][1].type !== "content"; )
        s[i][1].type === "chunkText" && (s[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, VN(e, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i-- && (l = e[i], l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (o && (e[o][1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
      o && (r[1].end = Object.assign({}, e[o][1].start), a = e.slice(o, n), a.unshift(r), Rt(e, o, n - o + 1, a));
    }
  }
  return !u;
}
function VN(e, t) {
  const n = e[t][1], r = e[t][2];
  let o = t - 1;
  const i = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, s = [], u = {};
  let c, f, d = -1, m = n, h = 0, v = 0;
  const w = [v];
  for (; m; ) {
    for (; e[++o][1] !== m; )
      ;
    i.push(o), m._tokenizer || (c = r.sliceStream(m), m.next || c.push(null), f && l.defineSkip(m.start), m._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), m._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = m, m = m.next;
  }
  for (m = n; ++d < a.length; )
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (v = d + 1, w.push(v), m._tokenizer = void 0, m.previous = void 0, m = m.next);
  for (l.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : w.pop(), d = w.length; d--; ) {
    const p = a.slice(w[d], w[d + 1]), y = i.pop();
    s.unshift([y, y + p.length - 1]), Rt(e, y, 2, p);
  }
  for (d = -1; ++d < s.length; )
    u[h + s[d][0]] = h + s[d][1], h += s[d][1] - s[d][0] - 1;
  return u;
}
const UN = {
  tokenize: qN,
  resolve: WN
}, HN = {
  tokenize: QN,
  partial: !0
};
function WN(e) {
  return qC(e), e;
}
function qN(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(a);
  }
  function o(a) {
    return a === null ? i(a) : Z(a) ? e.check(
      HN,
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
function QN(e, t, n) {
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
function QC(e, t, n, r, o, i, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(p) {
    return p === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(p), e.exit(i), d) : p === null || p === 41 || Aa(p) ? n(p) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(p));
  }
  function d(p) {
    return p === 62 ? (e.enter(i), e.consume(p), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), m(p));
  }
  function m(p) {
    return p === 62 ? (e.exit("chunkString"), e.exit(a), d(p)) : p === null || p === 60 || Z(p) ? n(p) : (e.consume(p), p === 92 ? h : m);
  }
  function h(p) {
    return p === 60 || p === 62 || p === 92 ? (e.consume(p), m) : m(p);
  }
  function v(p) {
    return p === 40 ? ++c > u ? n(p) : (e.consume(p), v) : p === 41 ? c-- ? (e.consume(p), v) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : p === null || Fe(p) ? c ? n(p) : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(p)) : Aa(p) ? n(p) : (e.consume(p), p === 92 ? w : v);
  }
  function w(p) {
    return p === 40 || p === 41 || p === 92 ? (e.consume(p), v) : v(p);
  }
}
function GC(e, t, n, r, o, i) {
  const l = this;
  let a = 0, s;
  return u;
  function u(m) {
    return e.enter(r), e.enter(o), e.consume(m), e.exit(o), e.enter(i), c;
  }
  function c(m) {
    return m === null || m === 91 || m === 93 && !s || m === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs || a > 999 ? n(m) : m === 93 ? (e.exit(i), e.enter(o), e.consume(m), e.exit(o), e.exit(r), t) : Z(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(m));
  }
  function f(m) {
    return m === null || m === 91 || m === 93 || Z(m) || a++ > 999 ? (e.exit("chunkString"), c(m)) : (e.consume(m), s = s || !xe(m), m === 92 ? d : f);
  }
  function d(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, f) : f(m);
  }
}
function KC(e, t, n, r, o, i) {
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
function jl(e, t) {
  let n;
  return r;
  function r(o) {
    return Z(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : xe(o) ? ye(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(o) : t(o);
  }
}
function fn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const GN = {
  name: "definition",
  tokenize: YN
}, KN = {
  tokenize: XN,
  partial: !0
};
function YN(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(s) {
    return e.enter("definition"), GC.call(
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
    ), s === 58 ? (e.enter("definitionMarker"), e.consume(s), e.exit("definitionMarker"), jl(
      e,
      QC(
        e,
        e.attempt(
          KN,
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
function XN(e, t, n) {
  return r;
  function r(l) {
    return Fe(l) ? jl(e, o)(l) : n(l);
  }
  function o(l) {
    return l === 34 || l === 39 || l === 40 ? KC(
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
const ZN = {
  name: "hardBreakEscape",
  tokenize: JN
};
function JN(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(i), o;
  }
  function o(i) {
    return Z(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const eM = {
  name: "headingAtx",
  tokenize: nM,
  resolve: tM
};
function tM(e, t) {
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
function nM(e, t, n) {
  const r = this;
  let o = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && o++ < 6 ? (e.consume(c), l) : c === null || Fe(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || Z(c) ? (e.exit("atxHeading"), t(c)) : xe(c) ? ye(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || Fe(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const rM = [
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
], $1 = ["pre", "script", "style", "textarea"], oM = {
  name: "htmlFlow",
  tokenize: aM,
  resolveTo: lM,
  concrete: !0
}, iM = {
  tokenize: sM,
  partial: !0
};
function lM(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function aM(e, t, n) {
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
    return C === 45 ? (e.consume(C), o = 2, d) : C === 91 ? (e.consume(C), o = 5, l = "CDATA[", a = 0, m) : Vt(C) ? (e.consume(C), o = 4, r.interrupt ? t : I) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : I) : n(C);
  }
  function m(C) {
    return C === l.charCodeAt(a++) ? (e.consume(C), a === l.length ? r.interrupt ? t : T : m) : n(C);
  }
  function h(C) {
    return Vt(C) ? (e.consume(C), l = String.fromCharCode(C), v) : n(C);
  }
  function v(C) {
    return C === null || C === 47 || C === 62 || Fe(C) ? C !== 47 && i && $1.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? t(C) : T(C)) : rM.includes(l.toLowerCase()) ? (o = 6, C === 47 ? (e.consume(C), w) : r.interrupt ? t(C) : T(C)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : i ? y(C) : p(C)) : C === 45 || dt(C) ? (e.consume(C), l += String.fromCharCode(C), v) : n(C);
  }
  function w(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : T) : n(C);
  }
  function p(C) {
    return xe(C) ? (e.consume(C), p) : P(C);
  }
  function y(C) {
    return C === 47 ? (e.consume(C), P) : C === 58 || C === 95 || Vt(C) ? (e.consume(C), x) : xe(C) ? (e.consume(C), y) : P(C);
  }
  function x(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || dt(C) ? (e.consume(C), x) : b(C);
  }
  function b(C) {
    return C === 61 ? (e.consume(C), A) : xe(C) ? (e.consume(C), b) : y(C);
  }
  function A(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), s = C, S) : xe(C) ? (e.consume(C), A) : (s = null, $(C));
  }
  function S(C) {
    return C === null || Z(C) ? n(C) : C === s ? (e.consume(C), E) : (e.consume(C), S);
  }
  function $(C) {
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 62 || C === 96 || Fe(C) ? b(C) : (e.consume(C), $);
  }
  function E(C) {
    return C === 47 || C === 62 || xe(C) ? y(C) : n(C);
  }
  function P(C) {
    return C === 62 ? (e.consume(C), R) : n(C);
  }
  function R(C) {
    return xe(C) ? (e.consume(C), R) : C === null || Z(C) ? T(C) : n(C);
  }
  function T(C) {
    return C === 45 && o === 2 ? (e.consume(C), D) : C === 60 && o === 1 ? (e.consume(C), _) : C === 62 && o === 4 ? (e.consume(C), N) : C === 63 && o === 3 ? (e.consume(C), I) : C === 93 && o === 5 ? (e.consume(C), M) : Z(C) && (o === 6 || o === 7) ? e.check(
      iM,
      N,
      O
    )(C) : C === null || Z(C) ? O(C) : (e.consume(C), T);
  }
  function O(C) {
    return e.exit("htmlFlowData"), F(C);
  }
  function F(C) {
    return C === null ? k(C) : Z(C) ? e.attempt(
      {
        tokenize: z,
        partial: !0
      },
      F,
      k
    )(C) : (e.enter("htmlFlowData"), T(C));
  }
  function z(C, J, te) {
    return se;
    function se(Q) {
      return C.enter("lineEnding"), C.consume(Q), C.exit("lineEnding"), ee;
    }
    function ee(Q) {
      return r.parser.lazy[r.now().line] ? te(Q) : J(Q);
    }
  }
  function D(C) {
    return C === 45 ? (e.consume(C), I) : T(C);
  }
  function _(C) {
    return C === 47 ? (e.consume(C), l = "", j) : T(C);
  }
  function j(C) {
    return C === 62 && $1.includes(l.toLowerCase()) ? (e.consume(C), N) : Vt(C) && l.length < 8 ? (e.consume(C), l += String.fromCharCode(C), j) : T(C);
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
function sM(e, t, n) {
  return r;
  function r(o) {
    return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), e.attempt(Ya, t, n);
  }
}
const uM = {
  name: "htmlText",
  tokenize: cM
};
function cM(e, t, n) {
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
    return k === null || k === 62 ? n(k) : k === 45 ? (e.consume(k), m) : h(k);
  }
  function m(k) {
    return k === null || k === 62 ? n(k) : h(k);
  }
  function h(k) {
    return k === null ? n(k) : k === 45 ? (e.consume(k), v) : Z(k) ? (a = h, M(k)) : (e.consume(k), h);
  }
  function v(k) {
    return k === 45 ? (e.consume(k), N) : h(k);
  }
  function w(k) {
    return k === i.charCodeAt(l++) ? (e.consume(k), l === i.length ? p : w) : n(k);
  }
  function p(k) {
    return k === null ? n(k) : k === 93 ? (e.consume(k), y) : Z(k) ? (a = p, M(k)) : (e.consume(k), p);
  }
  function y(k) {
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
    return Z(k) ? (a = P, M(k)) : xe(k) ? (e.consume(k), P) : N(k);
  }
  function R(k) {
    return k === 45 || dt(k) ? (e.consume(k), R) : k === 47 || k === 62 || Fe(k) ? T(k) : n(k);
  }
  function T(k) {
    return k === 47 ? (e.consume(k), N) : k === 58 || k === 95 || Vt(k) ? (e.consume(k), O) : Z(k) ? (a = T, M(k)) : xe(k) ? (e.consume(k), T) : N(k);
  }
  function O(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || dt(k) ? (e.consume(k), O) : F(k);
  }
  function F(k) {
    return k === 61 ? (e.consume(k), z) : Z(k) ? (a = F, M(k)) : xe(k) ? (e.consume(k), F) : T(k);
  }
  function z(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), o = k, D) : Z(k) ? (a = z, M(k)) : xe(k) ? (e.consume(k), z) : (e.consume(k), o = void 0, j);
  }
  function D(k) {
    return k === o ? (e.consume(k), _) : k === null ? n(k) : Z(k) ? (a = D, M(k)) : (e.consume(k), D);
  }
  function _(k) {
    return k === 62 || k === 47 || Fe(k) ? T(k) : n(k);
  }
  function j(k) {
    return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96 ? n(k) : k === 62 || Fe(k) ? T(k) : (e.consume(k), j);
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
const Ig = {
  name: "labelEnd",
  tokenize: gM,
  resolveTo: mM,
  resolveAll: hM
}, fM = {
  tokenize: vM
}, dM = {
  tokenize: yM
}, pM = {
  tokenize: xM
};
function hM(e) {
  let t = -1, n;
  for (; ++t < e.length; )
    n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  return e;
}
function mM(e, t) {
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
    Yc(
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
function gM(e, t, n) {
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
      fM,
      t,
      l ? t : u
    )(c) : c === 91 ? e.attempt(
      dM,
      t,
      l ? e.attempt(pM, t, u) : u
    )(c) : l ? t(c) : u(c);
  }
  function u(c) {
    return i._balanced = !0, n(c);
  }
}
function vM(e, t, n) {
  return r;
  function r(s) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(s), e.exit("resourceMarker"), jl(e, o);
  }
  function o(s) {
    return s === 41 ? a(s) : QC(
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
    return Fe(s) ? jl(e, l)(s) : a(s);
  }
  function l(s) {
    return s === 34 || s === 39 || s === 40 ? KC(
      e,
      jl(e, a),
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
function yM(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return GC.call(
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
function xM(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const wM = {
  name: "labelStartImage",
  tokenize: bM,
  resolveAll: Ig.resolveAll
};
function bM(e, t, n) {
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
const SM = {
  name: "labelStartLink",
  tokenize: kM,
  resolveAll: Ig.resolveAll
};
function kM(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const kd = {
  name: "lineEnding",
  tokenize: CM
};
function CM(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
}
const tu = {
  name: "thematicBreak",
  tokenize: EM
};
function EM(e, t, n) {
  let r = 0, o;
  return i;
  function i(s) {
    return e.enter("thematicBreak"), o = s, l(s);
  }
  function l(s) {
    return s === o ? (e.enter("thematicBreakSequence"), a(s)) : xe(s) ? ye(e, l, "whitespace")(s) : r < 3 || s !== null && !Z(s) ? n(s) : (e.exit("thematicBreak"), t(s));
  }
  function a(s) {
    return s === o ? (e.consume(s), r++, a) : (e.exit("thematicBreakSequence"), l(s));
  }
}
const gt = {
  name: "list",
  tokenize: PM,
  continuation: {
    tokenize: _M
  },
  exit: TM
}, $M = {
  tokenize: IM,
  partial: !0
}, AM = {
  tokenize: RM,
  partial: !0
};
function PM(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return a;
  function a(m) {
    const h = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : Xu(m)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(tu, n, u)(m) : u(m);
      if (!r.interrupt || m === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(m);
    }
    return n(m);
  }
  function s(m) {
    return Xu(m) && ++l < 10 ? (e.consume(m), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46) ? (e.exit("listItemValue"), u(m)) : n(m);
  }
  function u(m) {
    return e.enter("listItemMarker"), e.consume(m), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || m, e.check(
      Ya,
      r.interrupt ? n : c,
      e.attempt(
        $M,
        d,
        f
      )
    );
  }
  function c(m) {
    return r.containerState.initialBlankLine = !0, i++, d(m);
  }
  function f(m) {
    return xe(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), d) : n(m);
  }
  function d(m) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(m);
  }
}
function _M(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Ya, o, i);
  function o(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ye(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(a);
  }
  function i(a) {
    return r.containerState.furtherBlankLines || !xe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(AM, t, l)(a));
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
function RM(e, t, n) {
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
function TM(e) {
  e.exit(this.containerState.type);
}
function IM(e, t, n) {
  const r = this;
  return ye(
    e,
    o,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function o(i) {
    const l = r.events[r.events.length - 1];
    return !xe(i) && l && l[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const A1 = {
  name: "setextUnderline",
  tokenize: NM,
  resolveTo: OM
};
function OM(e, t) {
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
function NM(e, t, n) {
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
const MM = {
  tokenize: FM
};
function FM(e) {
  const t = this, n = e.attempt(
    Ya,
    r,
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      ye(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(UN, o)
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
const DM = {
  resolveAll: XC()
}, LM = YC("string"), zM = YC("text");
function YC(e) {
  return {
    tokenize: t,
    resolveAll: XC(
      e === "text" ? BM : void 0
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
          const m = f[d];
          if (!m.previous || m.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function XC(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function BM(e, t) {
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
function jM(e, t, n) {
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
    sliceStream: m,
    sliceSerialize: d,
    now: h,
    defineSkip: v,
    write: f
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && i.push(t), u;
  function f(T) {
    return l = zt(l, T), w(), l[l.length - 1] !== null ? [] : (E(t, 0), u.events = Yc(i, u.events, u), u.events);
  }
  function d(T, O) {
    return UM(m(T), O);
  }
  function m(T) {
    return VM(l, T);
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
    const F = O || {};
    return F.type = T, F.start = h(), u.events.push(["enter", F, u]), a.push(F), F;
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
    return F;
    function F(z, D, _) {
      let j, M, I, N;
      return Array.isArray(z) ? C(z) : "tokenize" in z ? C([z]) : k(z);
      function k(ee) {
        return Q;
        function Q(ne) {
          const ge = ne !== null && ee[ne], ae = ne !== null && ee.null, pe = [
            ...Array.isArray(ge) ? ge : ge ? [ge] : [],
            ...Array.isArray(ae) ? ae : ae ? [ae] : []
          ];
          return C(pe)(ne);
        }
      }
      function C(ee) {
        return j = ee, M = 0, ee.length === 0 ? _ : J(ee[M]);
      }
      function J(ee) {
        return Q;
        function Q(ne) {
          return N = P(), I = ee, ee.partial || (u.currentConstruct = ee), ee.name && u.parser.constructs.disable.null.includes(ee.name) ? se() : ee.tokenize.call(
            O ? Object.assign(Object.create(u), O) : u,
            s,
            te,
            se
          )(ne);
        }
      }
      function te(ee) {
        return T(I, N), D;
      }
      function se(ee) {
        return N.restore(), ++M < j.length ? J(j[M]) : _;
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
    const T = h(), O = u.previous, F = u.currentConstruct, z = u.events.length, D = Array.from(a);
    return {
      restore: _,
      from: z
    };
    function _() {
      r = T, u.previous = O, u.currentConstruct = F, u.events.length = z, a = D, R();
    }
  }
  function R() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function VM(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  return n === o ? l = [e[n].slice(r, i)] : (l = e.slice(n, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i))), l;
}
function UM(e, t) {
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
const HM = {
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
  [62]: UC
}, WM = {
  [91]: GN
}, qM = {
  [-2]: Sd,
  [-1]: Sd,
  [32]: Sd
}, QM = {
  [35]: eM,
  [42]: tu,
  [45]: [A1, tu],
  [60]: oM,
  [61]: A1,
  [95]: tu,
  [96]: E1,
  [126]: E1
}, GM = {
  [38]: WC,
  [92]: HC
}, KM = {
  [-5]: kd,
  [-4]: kd,
  [-3]: kd,
  [33]: wM,
  [38]: WC,
  [42]: Ch,
  [60]: [$N, uM],
  [91]: SM,
  [92]: [ZN, HC],
  [93]: Ig,
  [95]: Ch,
  [96]: LN
}, YM = {
  null: [Ch, DM]
}, XM = {
  null: [42, 95]
}, ZM = {
  null: []
}, JM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: HM,
  contentInitial: WM,
  flowInitial: qM,
  flow: QM,
  string: GM,
  text: KM,
  insideSpan: YM,
  attentionMarkers: XM,
  disable: ZM
}, Symbol.toStringTag, { value: "Module" }));
function eF(e = {}) {
  const t = VC(
    [JM].concat(e.extensions || [])
  ), n = {
    defined: [],
    lazy: {},
    constructs: t,
    content: r(xN),
    document: r(bN),
    flow: r(MM),
    string: r(LM),
    text: r(zM)
  };
  return n;
  function r(o) {
    return i;
    function i(l) {
      return jM(n, o, l);
    }
  }
}
const P1 = /[\0\t\n\r]/g;
function tF() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, a) {
    const s = [];
    let u, c, f, d, m;
    for (i = t + i.toString(l), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (P1.lastIndex = f, u = P1.exec(i), d = u && u.index !== void 0 ? u.index : i.length, m = i.charCodeAt(d), !u) {
        t = i.slice(f);
        break;
      }
      if (m === 10 && f === d && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), f < d && (s.push(i.slice(f, d)), e += d - f), m) {
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
function nF(e) {
  for (; !qC(e); )
    ;
  return e;
}
function ZC(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n);
}
const rF = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function JC(e) {
  return e.replace(rF, oF);
}
function oF(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return ZC(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return Tg(n) || e;
}
const e2 = {}.hasOwnProperty, iF = function(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), lF(n)(
    nF(
      eF(n).document().write(tF()(e, t, !0))
    )
  );
};
function lF(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(or),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(tr),
      blockQuote: a(pe),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(ue),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(ue, s),
      codeText: a(st, s),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(ut),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(Vr),
      hardBreakEscape: a(nr),
      hardBreakTrailing: a(nr),
      htmlFlow: a(ts, s),
      htmlFlowData: T,
      htmlText: a(ts, s),
      htmlTextData: T,
      image: a(rr),
      label: s,
      link: a(or),
      listItem: a(ir),
      listItemValue: h,
      listOrdered: a(Wi, m),
      listUnordered: a(Wi),
      paragraph: a(sf),
      reference: se,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(tr),
      strong: a(uf),
      thematicBreak: a(SE)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: $,
      autolink: c(),
      autolinkEmail: ae,
      autolinkProtocol: ge,
      blockQuote: c(),
      characterEscapeValue: O,
      characterReferenceMarkerHexadecimal: Q,
      characterReferenceMarkerNumeric: Q,
      characterReferenceValue: ne,
      codeFenced: c(y),
      codeFencedFence: p,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: w,
      codeFlowValue: O,
      codeIndented: c(x),
      codeText: c(j),
      codeTextData: O,
      data: O,
      definition: c(),
      definitionDestinationString: S,
      definitionLabelString: b,
      definitionTitleString: A,
      emphasis: c(),
      hardBreakEscape: c(z),
      hardBreakTrailing: c(z),
      htmlFlow: c(D),
      htmlFlowData: O,
      htmlText: c(_),
      htmlTextData: O,
      image: c(I),
      label: k,
      labelText: N,
      lineEnding: F,
      link: c(M),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ee,
      resourceDestinationString: C,
      resourceTitleString: J,
      resource: te,
      setextHeading: c(R),
      setextHeadingLineSequence: P,
      setextHeadingText: E,
      strong: c(),
      thematicBreak: c()
    }
  };
  t2(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(L) {
    let q = {
      type: "root",
      children: []
    };
    const re = {
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
          const Xt = Se.pop();
          Ce = o(L, Xt, Ce);
        }
    for (Ce = -1; ++Ce < L.length; ) {
      const Xt = t[L[Ce][0]];
      e2.call(Xt, L[Ce][1].type) && Xt[L[Ce][1].type].call(
        Object.assign(
          {
            sliceSerialize: L[Ce][2].sliceSerialize
          },
          re
        ),
        L[Ce][1]
      );
    }
    if (re.tokenStack.length > 0) {
      const Xt = re.tokenStack[re.tokenStack.length - 1];
      (Xt[1] || _1).call(re, void 0, Xt[0]);
    }
    for (q.position = {
      start: cr(
        L.length > 0 ? L[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: cr(
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
  function o(L, q, re) {
    let Se = q - 1, Ce = -1, Xt = !1, lr, In, qi, Qi;
    for (; ++Se <= re; ) {
      const De = L[Se];
      if (De[1].type === "listUnordered" || De[1].type === "listOrdered" || De[1].type === "blockQuote" ? (De[0] === "enter" ? Ce++ : Ce--, Qi = void 0) : De[1].type === "lineEndingBlank" ? De[0] === "enter" && (lr && !Qi && !Ce && !qi && (qi = Se), Qi = void 0) : De[1].type === "linePrefix" || De[1].type === "listItemValue" || De[1].type === "listItemMarker" || De[1].type === "listItemPrefix" || De[1].type === "listItemPrefixWhitespace" || (Qi = void 0), !Ce && De[0] === "enter" && De[1].type === "listItemPrefix" || Ce === -1 && De[0] === "exit" && (De[1].type === "listUnordered" || De[1].type === "listOrdered")) {
        if (lr) {
          let cf = Se;
          for (In = void 0; cf--; ) {
            const On = L[cf];
            if (On[1].type === "lineEnding" || On[1].type === "lineEndingBlank") {
              if (On[0] === "exit")
                continue;
              In && (L[In][1].type = "lineEndingBlank", Xt = !0), On[1].type = "lineEnding", In = cf;
            } else if (!(On[1].type === "linePrefix" || On[1].type === "blockQuotePrefix" || On[1].type === "blockQuotePrefixWhitespace" || On[1].type === "blockQuoteMarker" || On[1].type === "listItemIndent"))
              break;
          }
          qi && (!In || qi < In) && (lr._spread = !0), lr.end = Object.assign(
            {},
            In ? L[In][1].start : De[1].end
          ), L.splice(In || Se, 0, ["exit", lr, De[2]]), Se++, re++;
        }
        De[1].type === "listItemPrefix" && (lr = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, De[1].start)
        }, L.splice(Se, 0, ["enter", lr, De[2]]), Se++, re++, qi = void 0, Qi = !0);
      }
    }
    return L[q][1]._spread = Xt, re;
  }
  function i(L, q) {
    n[L] = q;
  }
  function l(L) {
    return n[L];
  }
  function a(L, q) {
    return re;
    function re(Se) {
      u.call(this, L(Se), Se), q && q.call(this, Se);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function u(L, q, re) {
    return this.stack[this.stack.length - 1].children.push(L), this.stack.push(L), this.tokenStack.push([q, re]), L.position = {
      start: cr(q.start)
    }, L;
  }
  function c(L) {
    return q;
    function q(re) {
      L && L.call(this, re), f.call(this, re);
    }
  }
  function f(L, q) {
    const re = this.stack.pop(), Se = this.tokenStack.pop();
    if (Se)
      Se[0].type !== L.type && (q ? q.call(this, L, Se[0]) : (Se[1] || _1).call(this, L, Se[0]));
    else
      throw new Error(
        "Cannot close `" + L.type + "` (" + Bl({
          start: L.start,
          end: L.end
        }) + "): it\u2019s not open"
      );
    return re.position.end = cr(L.end), re;
  }
  function d() {
    return dN(this.stack.pop());
  }
  function m() {
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
    const q = this.resume(), re = this.stack[this.stack.length - 1];
    re.label = q, re.identifier = fn(
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
      const re = this.sliceSerialize(L).length;
      q.depth = re;
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
    let re = q.children[q.children.length - 1];
    (!re || re.type !== "text") && (re = bE(), re.position = {
      start: cr(L.start)
    }, q.children.push(re)), this.stack.push(re);
  }
  function O(L) {
    const q = this.stack.pop();
    q.value += this.sliceSerialize(L), q.position.end = cr(L.end);
  }
  function F(L) {
    const q = this.stack[this.stack.length - 1];
    if (l("atHardBreak")) {
      const re = q.children[q.children.length - 1];
      re.position.end = cr(L.end), i("atHardBreak");
      return;
    }
    !l("setextHeadingSlurpLineEnding") && t.canContainEols.includes(q.type) && (T.call(this, L), O.call(this, L));
  }
  function z() {
    i("atHardBreak", !0);
  }
  function D() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function _() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function j() {
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
    const q = this.sliceSerialize(L), re = this.stack[this.stack.length - 2];
    re.label = JC(q), re.identifier = fn(q).toLowerCase();
  }
  function k() {
    const L = this.stack[this.stack.length - 1], q = this.resume(), re = this.stack[this.stack.length - 1];
    if (i("inReference", !0), re.type === "link") {
      const Se = L.children;
      re.children = Se;
    } else
      re.alt = q;
  }
  function C() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = L;
  }
  function J() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = L;
  }
  function te() {
    i("inReference");
  }
  function se() {
    i("referenceType", "collapsed");
  }
  function ee(L) {
    const q = this.resume(), re = this.stack[this.stack.length - 1];
    re.label = q, re.identifier = fn(
      this.sliceSerialize(L)
    ).toLowerCase(), i("referenceType", "full");
  }
  function Q(L) {
    i("characterReferenceType", L.type);
  }
  function ne(L) {
    const q = this.sliceSerialize(L), re = l("characterReferenceType");
    let Se;
    re ? (Se = ZC(
      q,
      re === "characterReferenceMarkerNumeric" ? 10 : 16
    ), i("characterReferenceType")) : Se = Tg(q);
    const Ce = this.stack.pop();
    Ce.value += Se, Ce.position.end = cr(L.end);
  }
  function ge(L) {
    O.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(L);
  }
  function ae(L) {
    O.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize(L);
  }
  function pe() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function ue() {
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
  function Vr() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function tr() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function nr() {
    return {
      type: "break"
    };
  }
  function ts() {
    return {
      type: "html",
      value: ""
    };
  }
  function rr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function or() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Wi(L) {
    return {
      type: "list",
      ordered: L.type === "listOrdered",
      start: null,
      spread: L._spread,
      children: []
    };
  }
  function ir(L) {
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
  function bE() {
    return {
      type: "text",
      value: ""
    };
  }
  function SE() {
    return {
      type: "thematicBreak"
    };
  }
}
function cr(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function t2(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? t2(e, r) : aF(e, r);
  }
}
function aF(e, t) {
  let n;
  for (n in t)
    if (e2.call(t, n)) {
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
function _1(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + Bl({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Bl({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + Bl({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function sF(e) {
  Object.assign(this, { Parser: (n) => {
    const r = this.data("settings");
    return iF(
      n,
      Object.assign({}, r, e, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
var n2 = { exports: {} };
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
      for (var l = 1, a = [].slice.call(arguments), s = 0, u = i.length, c = "", f, d = !1, m, h, v = !1, w, p = function() {
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
              m = p(), typeof m == "string" || m instanceof String ? c += m : c += String.fromCharCode(parseInt(m, 10));
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
})(n2);
const uF = n2.exports, Ts = Object.assign(Ur(Error), {
  eval: Ur(EvalError),
  range: Ur(RangeError),
  reference: Ur(ReferenceError),
  syntax: Ur(SyntaxError),
  type: Ur(TypeError),
  uri: Ur(URIError)
});
function Ur(e) {
  return t.displayName = e.displayName || e.name, t;
  function t(n, ...r) {
    const o = n && uF(n, ...r);
    return new e(o);
  }
}
const Is = {}.hasOwnProperty, R1 = {
  yaml: "-",
  toml: "+"
};
function Og(e) {
  const t = [];
  let n = -1;
  const r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
  for (; ++n < r.length; )
    t[n] = cF(r[n]);
  return t;
}
function cF(e) {
  let t = e;
  if (typeof t == "string") {
    if (!Is.call(R1, t))
      throw Ts("Missing matter definition for `%s`", t);
    t = {
      type: t,
      marker: R1[t]
    };
  } else if (typeof t != "object")
    throw Ts("Expected matter to be an object, not `%j`", t);
  if (!Is.call(t, "type"))
    throw Ts("Missing `type` in matter `%j`", t);
  if (!Is.call(t, "fence") && !Is.call(t, "marker"))
    throw Ts("Missing `marker` or `fence` in matter `%j`", t);
  return t;
}
function fF(e) {
  const t = Og(e), n = {};
  let r = -1;
  for (; ++r < t.length; ) {
    const o = t[r], i = Eh(o, "open").charCodeAt(0), l = dF(o), a = n[i];
    Array.isArray(a) ? a.push(l) : n[i] = [l];
  }
  return {
    flow: n
  };
}
function dF(e) {
  const t = e.anywhere, n = e.type, r = n + "Fence", o = r + "Sequence", i = n + "Value", l = {
    tokenize: c,
    partial: !0
  };
  let a, s = 0;
  return {
    tokenize: u,
    concrete: !0
  };
  function u(f, d, m) {
    const h = this;
    return v;
    function v($) {
      const E = h.now();
      return E.column === 1 && (E.line === 1 || t) && (a = Eh(e, "open"), s = 0, $ === a.charCodeAt(s)) ? (f.enter(n), f.enter(r), f.enter(o), w($)) : m($);
    }
    function w($) {
      return s === a.length ? (f.exit(o), xe($) ? (f.enter("whitespace"), p($)) : y($)) : $ === a.charCodeAt(s++) ? (f.consume($), w) : m($);
    }
    function p($) {
      return xe($) ? (f.consume($), p) : (f.exit("whitespace"), y($));
    }
    function y($) {
      return Z($) ? (f.exit(r), f.enter("lineEnding"), f.consume($), f.exit("lineEnding"), a = Eh(e, "close"), s = 0, f.attempt(l, S, x)) : m($);
    }
    function x($) {
      return $ === null || Z($) ? A($) : (f.enter(i), b($));
    }
    function b($) {
      return $ === null || Z($) ? (f.exit(i), A($)) : (f.consume($), b);
    }
    function A($) {
      return $ === null ? m($) : (f.enter("lineEnding"), f.consume($), f.exit("lineEnding"), f.attempt(l, S, x));
    }
    function S($) {
      return f.exit(n), d($);
    }
  }
  function c(f, d, m) {
    let h = 0;
    return v;
    function v(x) {
      return x === a.charCodeAt(h) ? (f.enter(r), f.enter(o), w(x)) : m(x);
    }
    function w(x) {
      return h === a.length ? (f.exit(o), xe(x) ? (f.enter("whitespace"), p(x)) : y(x)) : x === a.charCodeAt(h++) ? (f.consume(x), w) : m(x);
    }
    function p(x) {
      return xe(x) ? (f.consume(x), p) : (f.exit("whitespace"), y(x));
    }
    function y(x) {
      return x === null || Z(x) ? (f.exit(r), d(x)) : m(x);
    }
  }
}
function Eh(e, t) {
  return e.marker ? T1(e.marker, t).repeat(3) : T1(e.fence, t);
}
function T1(e, t) {
  return typeof e == "string" ? e : e[t];
}
function pF(e) {
  const t = Og(e), n = {}, r = {};
  let o = -1;
  for (; ++o < t.length; ) {
    const i = t[o];
    n[i.type] = hF(i), r[i.type] = mF, r[i.type + "Value"] = gF;
  }
  return { enter: n, exit: r };
}
function hF(e) {
  return t;
  function t(n) {
    this.enter({ type: e.type, value: "" }, n), this.buffer();
  }
}
function mF(e) {
  const t = this.resume(), n = this.exit(e);
  n.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function gF(e) {
  this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
}
function vF(e) {
  const t = [], n = {}, r = Og(e);
  let o = -1;
  for (; ++o < r.length; ) {
    const i = r[o];
    n[i.type] = yF(i), t.push({ atBreak: !0, character: $h(i, "open").charAt(0) });
  }
  return { unsafe: t, handlers: n };
}
function yF(e) {
  const t = $h(e, "open"), n = $h(e, "close");
  return r;
  function r(o) {
    return t + (o.value ? `
` + o.value : "") + `
` + n;
  }
}
function $h(e, t) {
  return e.marker ? I1(e.marker, t).repeat(3) : I1(e.fence, t);
}
function I1(e, t) {
  return typeof e == "string" ? e : e[t];
}
function xF(e = "yaml") {
  const t = this.data();
  n("micromarkExtensions", fF(e)), n("fromMarkdownExtensions", pF(e)), n("toMarkdownExtensions", vF(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
const wF = {
  tokenize: EF,
  partial: !0
}, r2 = {
  tokenize: $F,
  partial: !0
}, o2 = {
  tokenize: AF,
  partial: !0
}, hi = {
  tokenize: _F,
  partial: !0
}, i2 = {
  tokenize: PF,
  partial: !0
}, l2 = {
  tokenize: kF,
  previous: u2
}, a2 = {
  tokenize: CF,
  previous: Mg
}, er = {
  tokenize: SF,
  previous: c2
}, Tn = {}, bF = {
  text: Tn
};
let Hr = 48;
for (; Hr < 123; )
  Tn[Hr] = er, Hr++, Hr === 58 ? Hr = 65 : Hr === 91 && (Hr = 97);
Tn[43] = er;
Tn[45] = er;
Tn[46] = er;
Tn[95] = er;
Tn[72] = [er, a2];
Tn[104] = [er, a2];
Tn[87] = [er, l2];
Tn[119] = [er, l2];
function SF(e, t, n) {
  const r = this;
  let o, i;
  return l;
  function l(m) {
    return !O1(m) || !c2(r.previous) || Fg(r.events) ? n(m) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(m));
  }
  function a(m) {
    return O1(m) ? (e.consume(m), a) : m === 64 ? (e.consume(m), s) : n(m);
  }
  function s(m) {
    return m === 46 ? e.check(hi, d, u)(m) : m === 45 || m === 95 ? e.check(hi, n, c)(m) : dt(m) ? (!i && Xu(m) && (i = !0), e.consume(m), s) : d(m);
  }
  function u(m) {
    return e.consume(m), o = !0, i = void 0, s;
  }
  function c(m) {
    return e.consume(m), f;
  }
  function f(m) {
    return m === 46 ? e.check(hi, n, u)(m) : s(m);
  }
  function d(m) {
    return o && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(m)) : n(m);
  }
}
function kF(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l !== 87 && l !== 119 || !u2(r.previous) || Fg(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      wF,
      e.attempt(r2, e.attempt(o2, i), n),
      n
    )(l));
  }
  function i(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function CF(e, t, n) {
  const r = this;
  return o;
  function o(h) {
    return h !== 72 && h !== 104 || !Mg(r.previous) || Fg(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(h), i);
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
    return h === null || Aa(h) || Gc(h) || Kc(h) ? n(h) : e.attempt(r2, e.attempt(o2, m), n)(h);
  }
  function m(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function EF(e, t, n) {
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
function $F(e, t, n) {
  let r, o;
  return i;
  function i(s) {
    return s === 38 ? e.check(
      i2,
      a,
      l
    )(s) : s === 46 || s === 95 ? e.check(hi, a, l)(s) : s === null || Aa(s) || Gc(s) || s !== 45 && Kc(s) ? a(s) : (e.consume(s), i);
  }
  function l(s) {
    return s === 46 ? (o = r, r = void 0, e.consume(s), i) : (s === 95 && (r = !0), e.consume(s), i);
  }
  function a(s) {
    return !o && !r ? t(s) : n(s);
  }
}
function AF(e, t) {
  let n = 0;
  return r;
  function r(l) {
    return l === 38 ? e.check(
      i2,
      t,
      o
    )(l) : (l === 40 && n++, l === 41 ? e.check(
      hi,
      i,
      o
    )(l) : Ng(l) ? t(l) : s2(l) ? e.check(hi, t, o)(l) : (e.consume(l), r));
  }
  function o(l) {
    return e.consume(l), r;
  }
  function i(l) {
    return n--, n < 0 ? t(l) : o(l);
  }
}
function PF(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), o;
  }
  function o(l) {
    return Vt(l) ? (e.consume(l), o) : l === 59 ? (e.consume(l), i) : n(l);
  }
  function i(l) {
    return Ng(l) ? t(l) : n(l);
  }
}
function _F(e, t, n) {
  return r;
  function r(i) {
    return e.consume(i), o;
  }
  function o(i) {
    return s2(i) ? (e.consume(i), o) : Ng(i) ? t(i) : n(i);
  }
}
function s2(e) {
  return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126;
}
function Ng(e) {
  return e === null || e === 60 || Fe(e);
}
function O1(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || dt(e);
}
function u2(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 126 || Fe(e);
}
function Mg(e) {
  return e === null || !Vt(e);
}
function c2(e) {
  return e !== 47 && Mg(e);
}
function Fg(e) {
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
const RF = {
  tokenize: LF,
  partial: !0
};
function TF() {
  return {
    document: {
      [91]: {
        tokenize: MF,
        continuation: {
          tokenize: FF
        },
        exit: DF
      }
    },
    text: {
      [91]: {
        tokenize: NF
      },
      [93]: {
        add: "after",
        tokenize: IF,
        resolveTo: OF
      }
    }
  };
}
function IF(e, t, n) {
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
function OF(e, t) {
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
function NF(e, t, n) {
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
    if (i > 999 || f === 93 && !l || f === null || f === 91 || Fe(f))
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return o.includes(fn(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return Fe(f) || (l = !0), i++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), i++, u) : u(f);
  }
}
function MF(e, t, n) {
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
    if (l > 999 || h === 93 && !a || h === null || h === 91 || Fe(h))
      return n(h);
    if (h === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return i = fn(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return Fe(h) || (a = !0), l++, e.consume(h), h === 92 ? f : c;
  }
  function f(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, c) : c(h);
  }
  function d(h) {
    return h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), o.includes(i) || o.push(i), ye(
      e,
      m,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(h);
  }
  function m(h) {
    return t(h);
  }
}
function FF(e, t, n) {
  return e.check(Ya, t, e.attempt(RF, t, n));
}
function DF(e) {
  e.exit("gfmFootnoteDefinition");
}
function LF(e, t, n) {
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
function zF(e) {
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
            ], m = a.parser.constructs.insideSpan.null;
            m && Rt(
              d,
              d.length,
              0,
              Yc(m, l.slice(u + 1, s), a)
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
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(h) : (l.enter("strikethroughSequenceTemporary"), m(h));
    }
    function m(h) {
      const v = Zu(u);
      if (h === 126)
        return f > 1 ? s(h) : (l.consume(h), f++, m);
      if (f < 2 && !n)
        return s(h);
      const w = l.exit("strikethroughSequenceTemporary"), p = Zu(h);
      return w._open = !p || p === 2 && Boolean(v), w._close = !v || v === 2 && Boolean(p), a(h);
    }
  }
}
const BF = {
  flow: {
    null: {
      tokenize: VF,
      resolve: jF
    }
  }
}, N1 = {
  tokenize: UF,
  partial: !0
};
function jF(e, t) {
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
function VF(e, t, n) {
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
    return _ === null || Z(_) ? h(_) : xe(_) ? (e.enter("whitespace"), e.consume(_), f) : (l && (l = void 0, i++), _ === 124 ? u(_) : (e.enter("temporaryTableCellContent"), d(_)));
  }
  function f(_) {
    return xe(_) ? (e.consume(_), f) : (e.exit("whitespace"), c(_));
  }
  function d(_) {
    return _ === null || _ === 124 || Fe(_) ? (e.exit("temporaryTableCellContent"), c(_)) : (e.consume(_), _ === 92 ? m : d);
  }
  function m(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), d) : d(_);
  }
  function h(_) {
    if (_ === null)
      return n(_);
    e.exit("tableRow"), e.exit("tableHead");
    const j = r.interrupt;
    return r.interrupt = !0, e.attempt(
      {
        tokenize: D,
        partial: !0
      },
      function(M) {
        return r.interrupt = j, e.enter("tableDelimiterRow"), v(M);
      },
      function(M) {
        return r.interrupt = j, n(M);
      }
    )(_);
  }
  function v(_) {
    return _ === null || Z(_) ? b(_) : xe(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), a = !0, o.push("none"), p) : _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o.push("left"), y) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function w(_) {
    return xe(_) ? (e.consume(_), w) : (e.exit("whitespace"), v(_));
  }
  function p(_) {
    return _ === 45 ? (e.consume(_), p) : (e.exit("tableDelimiterFiller"), _ === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(_), e.exit("tableDelimiterAlignment"), o[o.length - 1] = o[o.length - 1] === "left" ? "center" : "right", x) : v(_));
  }
  function y(_) {
    return _ === 45 ? (e.enter("tableDelimiterFiller"), e.consume(_), a = !0, p) : n(_);
  }
  function x(_) {
    return _ === null || Z(_) ? b(_) : xe(_) ? (e.enter("whitespace"), e.consume(_), w) : _ === 124 ? (e.enter("tableCellDivider"), e.consume(_), e.exit("tableCellDivider"), v) : n(_);
  }
  function b(_) {
    return e.exit("tableDelimiterRow"), !a || i !== o.length ? n(_) : _ === null ? A(_) : e.check(
      N1,
      A,
      e.attempt(
        {
          tokenize: D,
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
    return _ === null || Z(_) ? F(_) : xe(_) ? (e.enter("whitespace"), e.consume(_), R) : _ === 124 ? E(_) : (e.enter("temporaryTableCellContent"), T(_));
  }
  function R(_) {
    return xe(_) ? (e.consume(_), R) : (e.exit("whitespace"), P(_));
  }
  function T(_) {
    return _ === null || _ === 124 || Fe(_) ? (e.exit("temporaryTableCellContent"), P(_)) : (e.consume(_), _ === 92 ? O : T);
  }
  function O(_) {
    return _ === 92 || _ === 124 ? (e.consume(_), T) : T(_);
  }
  function F(_) {
    return e.exit("tableRow"), _ === null ? z(_) : e.check(
      N1,
      z,
      e.attempt(
        {
          tokenize: D,
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
  function D(_, j, M) {
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
          return r._gfmTableDynamicInterruptHack = !1, j(J);
        }
      )(k));
    }
  }
}
function UF(e, t, n) {
  let r = 0;
  return o;
  function o(l) {
    return e.enter("check"), e.consume(l), i;
  }
  function i(l) {
    return l === -1 || l === 32 ? (e.consume(l), r++, r === 4 ? t : i) : l === null || Fe(l) ? t(l) : n(l);
  }
}
const HF = {
  tokenize: qF
}, WF = {
  text: {
    [91]: HF
  }
};
function qF(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), i);
  }
  function i(s) {
    return Fe(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return Z(s) ? t(s) : xe(s) ? e.check(
      {
        tokenize: QF
      },
      t,
      n
    )(s) : n(s);
  }
}
function QF(e, t, n) {
  return ye(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function GF(e) {
  return VC([
    bF,
    TF(),
    zF(e),
    BF,
    WF
  ]);
}
function Ju(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function KF(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Dg = function(e) {
  if (e == null)
    return JF;
  if (typeof e == "string")
    return ZF(e);
  if (typeof e == "object")
    return Array.isArray(e) ? YF(e) : XF(e);
  if (typeof e == "function")
    return Xc(e);
  throw new Error("Expected function, string, or object as test");
};
function YF(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Dg(e[n]);
  return Xc(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].call(this, ...o))
        return !0;
    return !1;
  }
}
function XF(e) {
  return Xc(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r])
        return !1;
    return !0;
  }
}
function ZF(e) {
  return Xc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Xc(e) {
  return t;
  function t(n, ...r) {
    return Boolean(
      n && typeof n == "object" && "type" in n && Boolean(e.call(this, n, ...r))
    );
  }
}
function JF() {
  return !0;
}
const eD = !0, M1 = !1, tD = "skip", f2 = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
  const o = Dg(t), i = r ? -1 : 1;
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
      let d = [], m, h, v;
      if ((!t || o(a, s, u[u.length - 1] || null)) && (d = nD(n(a, u)), d[0] === M1))
        return d;
      if (a.children && d[0] !== tD)
        for (h = (r ? a.children.length : -1) + i, v = u.concat(a); h > -1 && h < a.children.length; ) {
          if (m = l(a.children[h], h, v)(), m[0] === M1)
            return m;
          h = typeof m[1] == "number" ? m[1] : h + i;
        }
      return d;
    }
  }
};
function nD(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [eD, e] : [e];
}
const rD = {}.hasOwnProperty, oD = function(e, t, n, r) {
  let o, i;
  typeof t == "string" || t instanceof RegExp ? (i = [[t, n]], o = r) : (i = t, o = n), o || (o = {});
  const l = Dg(o.ignore || []), a = iD(i);
  let s = -1;
  for (; ++s < a.length; )
    f2(e, "text", u);
  return e;
  function u(f, d) {
    let m = -1, h;
    for (; ++m < d.length; ) {
      const v = d[m];
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
    const m = d[d.length - 1], h = a[s][0], v = a[s][1];
    let w = 0;
    const p = m.children.indexOf(f);
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
    return y ? (w < f.value.length && x.push({ type: "text", value: f.value.slice(w) }), m.children.splice(p, 1, ...x)) : x = [f], p + x.length;
  }
};
function iD(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        F1(e[n][0]),
        D1(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      rD.call(e, n) && t.push([F1(n), D1(e[n])]);
  }
  return t;
}
function F1(e) {
  return typeof e == "string" ? new RegExp(KF(e), "g") : e;
}
function D1(e) {
  return typeof e == "function" ? e : () => e;
}
const Cd = "phrasing", Ed = ["autolink", "link", "image", "label"], lD = {
  transforms: [pD],
  enter: {
    literalAutolink: sD,
    literalAutolinkEmail: $d,
    literalAutolinkHttp: $d,
    literalAutolinkWww: $d
  },
  exit: {
    literalAutolink: dD,
    literalAutolinkEmail: fD,
    literalAutolinkHttp: uD,
    literalAutolinkWww: cD
  }
}, aD = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: Cd,
      notInConstruct: Ed
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: Cd,
      notInConstruct: Ed
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: Cd, notInConstruct: Ed }
  ]
};
function sD(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function $d(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function uD(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function cD(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.url = "http://" + this.sliceSerialize(e);
}
function fD(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function dD(e) {
  this.exit(e);
}
function pD(e) {
  oD(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, hD],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, mD]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function hD(e, t, n, r, o) {
  let i = "";
  if (!d2(o) || (/^w/i.test(t) && (n = t + n, t = "", i = "http://"), !gD(n)))
    return !1;
  const l = vD(n + r);
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
function mD(e, t, n, r) {
  return !d2(r, !0) || /[-\d_]$/.test(n) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + t + "@" + n,
    children: [{ type: "text", value: t + "@" + n }]
  };
}
function gD(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function vD(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = Ju(e, "(");
  let i = Ju(e, ")");
  for (; r !== -1 && o > i; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), i++;
  return [e, n];
}
function d2(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Gc(n) || Kc(n)) && (!t || n !== 47);
}
function p2(e) {
  return e.label || !e.identifier ? e.label || "" : JC(e.identifier);
}
function yD(e, t, n) {
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
      i.move(xD(s, o[a + 1], e, t))
    );
  }
  return r.pop(), l.join("");
}
function xD(e, t, n, r) {
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
const wD = /\r?\n|\r/g;
function bD(e, t) {
  const n = [];
  let r = 0, o = 0, i;
  for (; i = wD.exec(e); )
    l(e.slice(r, i.index)), n.push(i[0]), r = i.index + i[0].length, o++;
  return l(e.slice(r)), n.join("");
  function l(a) {
    n.push(t(a, o, !a));
  }
}
function h2(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function SD(e, t) {
  return L1(e, t.inConstruct, !0) && !L1(e, t.notInConstruct, !1);
}
function L1(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function m2(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), o = [], i = [], l = {};
  let a = -1;
  for (; ++a < e.unsafe.length; ) {
    const c = e.unsafe[a];
    if (!SD(e.stack, c))
      continue;
    const f = h2(c);
    let d;
    for (; d = f.exec(r); ) {
      const m = "before" in c || Boolean(c.atBreak), h = "after" in c, v = d.index + (m ? d[1].length : 0);
      o.includes(v) ? (l[v].before && !m && (l[v].before = !1), l[v].after && !h && (l[v].after = !1)) : (o.push(v), l[v] = { before: m, after: h });
    }
  }
  o.sort(kD);
  let s = n.before ? n.before.length : 0;
  const u = r.length - (n.after ? n.after.length : 0);
  for (a = -1; ++a < o.length; ) {
    const c = o[a];
    c < s || c >= u || c + 1 < u && o[a + 1] === c + 1 && l[c].after && !l[c + 1].before && !l[c + 1].after || o[a - 1] === c - 1 && l[c].before && !l[c - 1].before && !l[c - 1].after || (s !== c && i.push(z1(r.slice(s, c), "\\")), s = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? i.push("\\") : (i.push(
      "&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"
    ), s++));
  }
  return i.push(z1(r.slice(s, u), n.after)), i.join("");
}
function kD(e, t) {
  return e - t;
}
function z1(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], o = [], i = e + t;
  let l = -1, a = 0, s;
  for (; s = n.exec(i); )
    r.push(s.index);
  for (; ++l < r.length; )
    a !== r[l] && o.push(e.slice(a, r[l])), o.push("\\"), a = r[l];
  return o.push(e.slice(a)), o.join("");
}
function Zc(e) {
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
g2.peek = ND;
function CD() {
  return {
    enter: {
      gfmFootnoteDefinition: $D,
      gfmFootnoteDefinitionLabelString: AD,
      gfmFootnoteCall: RD,
      gfmFootnoteCallString: TD
    },
    exit: {
      gfmFootnoteDefinition: _D,
      gfmFootnoteDefinitionLabelString: PD,
      gfmFootnoteCall: OD,
      gfmFootnoteCallString: ID
    }
  };
}
function ED() {
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: MD, footnoteReference: g2 }
  };
}
function $D(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function AD() {
  this.buffer();
}
function PD(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function _D(e) {
  this.exit(e);
}
function RD(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function TD() {
  this.buffer();
}
function ID(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.label = t, n.identifier = fn(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function OD(e) {
  this.exit(e);
}
function g2(e, t, n, r) {
  const o = Zc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return i += o.move(
    m2(n, p2(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), l(), i += o.move("]"), i;
}
function ND() {
  return "[";
}
function MD(e, t, n, r) {
  const o = Zc(r);
  let i = o.move("[^");
  const l = n.enter("footnoteDefinition"), a = n.enter("label");
  return i += o.move(
    m2(n, p2(e), {
      ...o.current(),
      before: i,
      after: "]"
    })
  ), a(), i += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), i += o.move(
    bD(yD(e, n, o.current()), FD)
  ), l(), i;
}
function FD(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function v2(e, t, n) {
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
const DD = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
y2.peek = VD;
const LD = {
  canContainEols: ["delete"],
  enter: { strikethrough: BD },
  exit: { strikethrough: jD }
}, zD = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: DD
    }
  ],
  handlers: { delete: y2 }
};
function BD(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function jD(e) {
  this.exit(e);
}
function y2(e, t, n, r) {
  const o = Zc(r), i = n.enter("strikethrough");
  let l = o.move("~~");
  return l += v2(e, n, {
    ...o.current(),
    before: l,
    after: "~"
  }), l += o.move("~~"), i(), l;
}
function VD() {
  return "~";
}
x2.peek = UD;
function x2(e, t, n) {
  let r = e.value || "", o = "`", i = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length; ) {
    const l = n.unsafe[i], a = h2(l);
    let s;
    if (!!l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return o + r + o;
}
function UD() {
  return "`";
}
function HD(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || qD, o = [], i = [], l = [], a = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], v = [];
    let w = -1;
    for (e[u].length > s && (s = e[u].length); ++w < e[u].length; ) {
      const p = WD(e[u][w]);
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
      o[c] = B1(n[c]);
  else {
    const h = B1(n);
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
  const m = [];
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
    m.push(
      t.delimiterEnd === !1 ? w.join("").replace(/ +$/, "") : w.join("")
    );
  }
  return m.join(`
`);
}
function WD(e) {
  return e == null ? "" : String(e);
}
function qD(e) {
  return e.length;
}
function B1(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const QD = {
  enter: {
    table: GD,
    tableData: j1,
    tableHeader: j1,
    tableRow: YD
  },
  exit: {
    codeText: XD,
    table: KD,
    tableData: Ad,
    tableHeader: Ad,
    tableRow: Ad
  }
};
function GD(e) {
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
function KD(e) {
  this.exit(e), this.setData("inTable");
}
function YD(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Ad(e) {
  this.exit(e);
}
function j1(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function XD(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, ZD));
  const n = this.stack[this.stack.length - 1];
  n.value = t, this.exit(e);
}
function ZD(e, t) {
  return t === "|" ? t : e;
}
function JD(e) {
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
  function l(m, h, v, w) {
    return u(
      c(m, v, w),
      m.align
    );
  }
  function a(m, h, v, w) {
    const p = f(m, v, w), y = u([p]);
    return y.slice(0, y.indexOf(`
`));
  }
  function s(m, h, v, w) {
    const p = v.enter("tableCell"), y = v.enter("phrasing"), x = v2(m, v, {
      ...w,
      before: i,
      after: i
    });
    return y(), p(), x;
  }
  function u(m, h) {
    return HD(m, {
      align: h,
      alignDelimiters: r,
      padding: n,
      stringLength: o
    });
  }
  function c(m, h, v) {
    const w = m.children;
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
  function f(m, h, v) {
    const w = m.children;
    let p = -1;
    const y = [], x = h.enter("tableRow");
    for (; ++p < w.length; )
      y[p] = s(
        w[p],
        m,
        h,
        v
      );
    return x(), y;
  }
  function d(m, h, v) {
    let w = x2(m, h, v);
    return v.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function e9(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function t9(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function n9(e, t, n, r) {
  const o = t9(n);
  let i = n.bulletCurrent || e9(n);
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
  function c(f, d, m) {
    return d ? (m ? "" : " ".repeat(l)) + f : (m ? i : i + " ".repeat(l - i.length)) + f;
  }
}
const r9 = {
  exit: {
    taskListCheckValueChecked: V1,
    taskListCheckValueUnchecked: V1,
    paragraph: i9
  }
}, o9 = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: l9 }
};
function V1(e) {
  const t = this.stack[this.stack.length - 2];
  t.checked = e.type === "taskListCheckValueChecked";
}
function i9(e) {
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
function l9(e, t, n, r) {
  const o = e.children[0], i = typeof e.checked == "boolean" && o && o.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = Zc(r);
  i && a.move(l);
  let s = n9(e, t, n, {
    ...r,
    ...a.current()
  });
  return i && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + l;
  }
}
function a9() {
  return [
    lD,
    CD(),
    LD,
    QD,
    r9
  ];
}
function s9(e) {
  return {
    extensions: [
      aD,
      ED(),
      zD,
      JD(e),
      o9
    ]
  };
}
function u9(e = {}) {
  const t = this.data();
  n("micromarkExtensions", GF(e)), n("fromMarkdownExtensions", a9()), n("toMarkdownExtensions", s9(e));
  function n(r, o) {
    (t[r] ? t[r] : t[r] = []).push(o);
  }
}
function c9(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function f9(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function d9(e, t) {
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
function p9(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function h9(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function w2(e, t) {
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
function m9(e, t) {
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
  }, w2(e, {
    type: "footnoteReference",
    identifier: o,
    position: t.position
  });
}
function g9(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function v9(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function b2(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function y9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return b2(e, t);
  const r = { src: Vi(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function x9(e, t) {
  const n = { src: Vi(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function w9(e, t) {
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
function b9(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return b2(e, t);
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
function S9(e, t) {
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
function k9(e, t, n) {
  const r = e.all(t), o = n ? C9(n) : S2(t), i = {}, l = [];
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
function C9(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = S2(n[r]);
  }
  return t;
}
function S2(e) {
  const t = e.spread;
  return t == null ? e.children.length > 1 : t;
}
function E9(e, t) {
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
function $9(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function A9(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function P9(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Lg = k2("start"), zg = k2("end");
function _9(e) {
  return { start: Lg(e), end: zg(e) };
}
function k2(e) {
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
function R9(e, t) {
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
    }, a = Lg(t.children[1]), s = zg(t.children[t.children.length - 1]);
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
function T9(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const f = t.children[s], d = {}, m = l ? l[s] : void 0;
    m && (d.align = m);
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
function I9(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const U1 = 9, H1 = 32;
function O9(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      W1(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(W1(t.slice(o), o > 0, !1)), i.join("");
}
function W1(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === U1 || i === H1; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === U1 || i === H1; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function N9(e, t) {
  const n = { type: "text", value: O9(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function M9(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const F9 = {
  blockquote: c9,
  break: f9,
  code: d9,
  delete: p9,
  emphasis: h9,
  footnoteReference: w2,
  footnote: m9,
  heading: g9,
  html: v9,
  imageReference: y9,
  image: x9,
  inlineCode: w9,
  linkReference: b9,
  link: S9,
  listItem: k9,
  list: E9,
  paragraph: $9,
  root: A9,
  strong: P9,
  table: R9,
  tableCell: I9,
  tableRow: T9,
  text: N9,
  thematicBreak: M9,
  toml: Os,
  yaml: Os,
  definition: Os,
  footnoteDefinition: Os
};
function Os() {
  return null;
}
const C2 = function(e, t, n, r) {
  typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), f2(e, t, o, r);
  function o(i, l) {
    const a = l[l.length - 1];
    return n(
      i,
      a ? a.children.indexOf(i) : null,
      a
    );
  }
};
function D9(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const q1 = {}.hasOwnProperty;
function L9(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return C2(e, "definition", (r) => {
    const o = Q1(r.identifier);
    o && !q1.call(t, o) && (t[o] = r);
  }), n;
  function n(r) {
    const o = Q1(r);
    return o && q1.call(t, o) ? t[o] : null;
  }
}
function Q1(e) {
  return String(e || "").toUpperCase();
}
const ec = {}.hasOwnProperty;
function z9(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, o = {};
  return l.dangerous = r, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, l.handlers = { ...F9, ...n.handlers }, l.definition = L9(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = B9, l.applyData = j9, l.one = a, l.all = s, l.wrap = U9, l.augment = i, C2(e, "footnoteDefinition", (u) => {
    const c = String(u.identifier).toUpperCase();
    ec.call(o, c) || (o[c] = u);
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
      D9(f) || (c.position = { start: Lg(f), end: zg(f) });
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
    return E2(l, u, c);
  }
  function s(u) {
    return Bg(l, u);
  }
}
function B9(e, t) {
  e.position && (t.position = _9(e));
}
function j9(e, t) {
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
function E2(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return ec.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: Bg(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : V9(e, t);
}
function Bg(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const i = E2(e, r[o], t);
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
function V9(e, t) {
  const n = t.data || {}, r = "value" in t && !(ec.call(n, "hProperties") || ec.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: Bg(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function U9(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function H9(e) {
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
function $2(e, t) {
  const n = z9(e, t), r = n.one(e, null), o = H9(n);
  return o && r.children.push({ type: "text", value: `
` }, o), Array.isArray(r) ? { type: "root", children: r } : r;
}
const W9 = function(e, t) {
  return e && "run" in e ? Q9(e, t) : G9(e || t);
}, q9 = W9;
function Q9(e, t) {
  return (n, r, o) => {
    e.run($2(n, t), r, (i) => {
      o(i);
    });
  };
}
function G9(e) {
  return (t) => $2(t, e);
}
class Xa {
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Xa.prototype.property = {};
Xa.prototype.normal = {};
Xa.prototype.space = null;
function A2(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new Xa(n, r, t);
}
function Ah(e) {
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
let K9 = 0;
const le = Ao(), je = Ao(), P2 = Ao(), U = Ao(), Ae = Ao(), mi = Ao(), Ct = Ao();
function Ao() {
  return 2 ** ++K9;
}
const Ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: je,
  overloadedBoolean: P2,
  number: U,
  spaceSeparated: Ae,
  commaSeparated: mi,
  commaOrSpaceSeparated: Ct
}, Symbol.toStringTag, { value: "Module" })), Pd = Object.keys(Ph);
class jg extends Yt {
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), G1(this, "space", o), typeof r == "number")
      for (; ++i < Pd.length; ) {
        const l = Pd[i];
        G1(this, Pd[i], (r & Ph[l]) === Ph[l]);
      }
  }
}
jg.prototype.defined = !0;
function G1(e, t, n) {
  n && (e[t] = n);
}
const Y9 = {}.hasOwnProperty;
function Ui(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Y9.call(e.properties, r)) {
      const o = e.properties[r], i = new jg(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[Ah(r)] = r, n[Ah(i.attribute)] = r;
    }
  return new Xa(t, n, e.space);
}
const _2 = Ui({
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
}), R2 = Ui({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function T2(e, t) {
  return t in e ? e[t] : t;
}
function I2(e, t) {
  return T2(e, t.toLowerCase());
}
const O2 = Ui({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: I2,
  properties: { xmlns: null, xmlnsXLink: null }
}), N2 = Ui({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: je,
    ariaAutoComplete: null,
    ariaBusy: je,
    ariaChecked: je,
    ariaColCount: U,
    ariaColIndex: U,
    ariaColSpan: U,
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
    ariaLevel: U,
    ariaLive: null,
    ariaModal: je,
    ariaMultiLine: je,
    ariaMultiSelectable: je,
    ariaOrientation: null,
    ariaOwns: Ae,
    ariaPlaceholder: null,
    ariaPosInSet: U,
    ariaPressed: je,
    ariaReadOnly: je,
    ariaRelevant: null,
    ariaRequired: je,
    ariaRoleDescription: Ae,
    ariaRowCount: U,
    ariaRowIndex: U,
    ariaRowSpan: U,
    ariaSelected: je,
    ariaSetSize: U,
    ariaSort: null,
    ariaValueMax: U,
    ariaValueMin: U,
    ariaValueNow: U,
    ariaValueText: null,
    role: null
  }
}), X9 = Ui({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: I2,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: mi,
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
    cols: U,
    colSpan: null,
    content: null,
    contentEditable: je,
    controls: le,
    controlsList: Ae,
    coords: U | mi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: P2,
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
    height: U,
    hidden: le,
    high: U,
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
    low: U,
    manifest: null,
    max: null,
    maxLength: U,
    media: null,
    method: null,
    min: null,
    minLength: U,
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
    optimum: U,
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
    rows: U,
    rowSpan: U,
    sandbox: Ae,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shape: null,
    size: U,
    sizes: null,
    slot: null,
    span: U,
    spellCheck: je,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: U,
    step: null,
    style: null,
    tabIndex: U,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: je,
    width: U,
    wrap: null,
    align: null,
    aLink: null,
    archive: Ae,
    axis: null,
    background: null,
    bgColor: null,
    border: U,
    borderColor: null,
    bottomMargin: U,
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
    hSpace: U,
    leftMargin: U,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: U,
    marginWidth: U,
    noResize: le,
    noHref: le,
    noShade: le,
    noWrap: le,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: U,
    rules: null,
    scheme: null,
    scrolling: je,
    standby: null,
    summary: null,
    text: null,
    topMargin: U,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: U,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: U,
    security: null,
    unselectable: null
  }
}), Z9 = Ui({
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
  transform: T2,
  properties: {
    about: Ct,
    accentHeight: U,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: U,
    amplitude: U,
    arabicForm: null,
    ascent: U,
    attributeName: null,
    attributeType: null,
    azimuth: U,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: U,
    by: null,
    calcMode: null,
    capHeight: U,
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
    descent: U,
    diffuseConstant: U,
    direction: null,
    display: null,
    dur: null,
    divisor: U,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: U,
    enableBackground: null,
    end: null,
    event: null,
    exponent: U,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: U,
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
    g1: mi,
    g2: mi,
    glyphName: mi,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: U,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: U,
    horizOriginX: U,
    horizOriginY: U,
    id: null,
    ideographic: U,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: U,
    k: U,
    k1: U,
    k2: U,
    k3: U,
    k4: U,
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
    limitingConeAngle: U,
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
    mediaSize: U,
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
    overlinePosition: U,
    overlineThickness: U,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: U,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ae,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: U,
    pointsAtY: U,
    pointsAtZ: U,
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
    specularConstant: U,
    specularExponent: U,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: U,
    strikethroughThickness: U,
    string: null,
    stroke: null,
    strokeDashArray: Ct,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: U,
    strokeOpacity: U,
    strokeWidth: null,
    style: null,
    surfaceScale: U,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ct,
    tabIndex: U,
    tableValues: null,
    target: null,
    targetX: U,
    targetY: U,
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
    underlinePosition: U,
    underlineThickness: U,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: U,
    values: null,
    vAlphabetic: U,
    vMathematical: U,
    vectorEffect: null,
    vHanging: U,
    vIdeographic: U,
    version: null,
    vertAdvY: U,
    vertOriginX: U,
    vertOriginY: U,
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
    xHeight: U,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), J9 = /^data[-\w.:]+$/i, K1 = /-[a-z]/g, eL = /[A-Z]/g;
function tL(e, t) {
  const n = Ah(t);
  let r = t, o = Yt;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && J9.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(K1, rL);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!K1.test(i)) {
        let l = i.replace(eL, nL);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = jg;
  }
  return new o(r, t);
}
function nL(e) {
  return "-" + e.toLowerCase();
}
function rL(e) {
  return e.charAt(1).toUpperCase();
}
const oL = A2([R2, _2, O2, N2, X9], "html"), M2 = A2([R2, _2, O2, N2, Z9], "svg"), iL = [
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
], Y1 = {}.hasOwnProperty;
function lL(e, t) {
  const n = t || {};
  function r(o, ...i) {
    let l = r.invalid;
    const a = r.handlers;
    if (o && Y1.call(o, e)) {
      const s = String(o[e]);
      l = Y1.call(a, s) ? a[s] : r.unknown;
    }
    if (l)
      return l.call(this, o, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function aL(e, t) {
  if (e = e.replace(
    t.subset ? sL(t.subset) : /["&'<>`]/g,
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
function sL(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
function uL(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";";
}
function cL(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";";
}
const fL = [
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
], _d = {
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
}, dL = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], F2 = {}.hasOwnProperty, _h = {};
let Ns;
for (Ns in _d)
  F2.call(_d, Ns) && (_h[_d[Ns]] = Ns);
function pL(e, t, n, r) {
  const o = String.fromCharCode(e);
  if (F2.call(_h, o)) {
    const i = _h[o], l = "&" + i;
    return n && fL.includes(i) && !dL.includes(i) && (!r || t && t !== 61 && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function hL(e, t, n) {
  let r = uL(e, t, n.omitOptionalSemicolons), o;
  if ((n.useNamedReferences || n.useShortestReferences) && (o = pL(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !o) && n.useShortestReferences) {
    const i = cL(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return o && (!n.useShortestReferences || o.length < r.length) ? o : r;
}
function gi(e, t) {
  return aL(e, Object.assign({ format: hL }, t));
}
function mL(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + gi(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, o) + "-->";
  function o(i) {
    return gi(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function gL(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function vL(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function yL(e) {
  return e.join(" ").trim();
}
function Vg(e) {
  const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
const We = L2(1), D2 = L2(-1);
function L2(e) {
  return t;
  function t(n, r, o) {
    const i = n ? n.children : [];
    let l = (r || 0) + e, a = i && i[l];
    if (!o)
      for (; a && Vg(a); )
        l += e, a = i[l];
    return a;
  }
}
const xL = {}.hasOwnProperty;
function z2(e) {
  return t;
  function t(n, r, o) {
    return xL.call(e, n.tagName) && e[n.tagName](n, r, o);
  }
}
const Ug = z2({
  html: wL,
  head: Rd,
  body: bL,
  p: SL,
  li: kL,
  dt: CL,
  dd: EL,
  rt: X1,
  rp: X1,
  optgroup: $L,
  option: AL,
  menuitem: PL,
  colgroup: Rd,
  caption: Rd,
  thead: _L,
  tbody: RL,
  tfoot: TL,
  tr: IL,
  td: Z1,
  th: Z1
});
function Rd(e, t, n) {
  const r = We(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && Vg(r.value.charAt(0)));
}
function wL(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function bL(e, t, n) {
  const r = We(n, t);
  return !r || r.type !== "comment";
}
function SL(e, t, n) {
  const r = We(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function kL(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function CL(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function EL(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function X1(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function $L(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function AL(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function PL(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "menuitem" || r.tagName === "hr" || r.tagName === "menu");
}
function _L(e, t, n) {
  const r = We(n, t);
  return r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function RL(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function TL(e, t, n) {
  return !We(n, t);
}
function IL(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function Z1(e, t, n) {
  const r = We(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const OL = z2({
  html: NL,
  head: ML,
  body: FL,
  colgroup: DL,
  tbody: LL
});
function NL(e) {
  const t = We(e, -1);
  return !t || t.type !== "comment";
}
function ML(e) {
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
function FL(e) {
  const t = We(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && Vg(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function DL(e, t, n) {
  const r = D2(n, t), o = We(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && Ug(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "col";
}
function LL(e, t, n) {
  const r = D2(n, t), o = We(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && Ug(r, n.children.indexOf(r), n) ? !1 : o && o.type === "element" && o.tagName === "tr";
}
const Ms = {
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
function zL(e, t, n, r) {
  const o = r.schema, i = o.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let l = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const a = [];
  let s;
  o.space === "html" && e.tagName === "svg" && (r.schema = M2);
  const u = BL(r, e.properties), c = r.all(
    o.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = o, c && (l = !1), (u || !i || !OL(e, t, n)) && (a.push("<", e.tagName, u ? " " + u : ""), l && (o.space === "svg" || r.settings.closeSelfClosing) && (s = u.charAt(u.length - 1), (!r.settings.tightSelfClosing || s === "/" || s && s !== '"' && s !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(c), !l && (!i || !Ug(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function BL(e, t) {
  const n = [];
  let r = -1, o;
  if (t) {
    for (o in t)
      if (t[o] !== void 0 && t[o] !== null) {
        const i = jL(e, o, t[o]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : null;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function jL(e, t, n) {
  const r = tL(e.schema, t), o = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, a;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != "string") && (n = Boolean(n)), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const s = gi(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      subset: Ms.name[o][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? vL : yL)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? s : (e.settings.preferUnquoted && (a = gi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: Ms.unquoted[o][i],
      attribute: !0
    })
  )), a !== n && (e.settings.quoteSmart && Ju(n, l) > Ju(n, e.alternative) && (l = e.alternative), a = l + gi(
    n,
    Object.assign({}, e.settings.characterReferences, {
      subset: (l === "'" ? Ms.single : Ms.double)[o][i],
      attribute: !0
    })
  ) + l), s + (a && "=" + a));
}
function B2(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : gi(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function VL(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : B2(e, t, n, r);
}
function UL(e, t, n, r) {
  return r.all(e);
}
const HL = lL("type", {
  invalid: WL,
  unknown: qL,
  handlers: { comment: mL, doctype: gL, element: zL, raw: VL, root: UL, text: B2 }
});
function WL(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function qL(e) {
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
function QL(e, t) {
  const n = t || {}, r = n.quote || '"', o = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: GL,
    all: KL,
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
      voids: n.voids || iL,
      characterReferences: n.characterReferences || n.entities || {},
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? M2 : oL,
    quote: r,
    alternative: o
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function GL(e, t, n) {
  return HL(e, t, n, this);
}
function KL(e) {
  const t = [], n = e && e.children || [];
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
function YL(e) {
  const t = this.data("settings"), n = Object.assign({}, t, e);
  Object.assign(this, { Compiler: r });
  function r(o) {
    return QL(o, n);
  }
}
async function XL(e) {
  if (!e)
    return "";
  const t = await aN().use(sF).use(xF).use(u9).use(q9).use(YL).process(e);
  return String(t);
}
const ZL = ({
  content: e
}) => {
  const [t, n] = g.exports.useState("");
  return g.exports.useEffect(() => {
    XL(e).then((r) => {
      n(r);
    });
  }, [e]), t;
}, JL = (e) => {
  const t = ZL(e);
  return /* @__PURE__ */ B("div", {
    className: "prose prose-sm prose-invert",
    dangerouslySetInnerHTML: {
      __html: t
    }
  });
}, ez = ({
  message: e
}) => /* @__PURE__ */ fe("div", {
  className: Ti("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
    "bg-mayumi-gray-200": e.role === "user",
    "bg-mayumi-gray-300": e.role === "assistant"
  }),
  children: [/* @__PURE__ */ B("div", {
    className: "flex-0 rounded-md text-mayumi-gray-1200",
    children: e.role === "user" ? "You:" : "Assistant:"
  }), /* @__PURE__ */ B("div", {
    className: "flex-1 rounded-md",
    children: /* @__PURE__ */ B(JL, {
      content: e.text
    })
  })]
}), tz = (e) => {
  const t = g.exports.useRef(null), n = g.exports.useRef(null), {
    conventions: r
  } = $a(), [o] = g.exports.useState(e.action), i = r[o];
  function l() {
    var s, u, c;
    const a = ((u = (s = t.current) == null ? void 0 : s.children.length) != null ? u : 1) - 1;
    ((c = t.current) == null ? void 0 : c.children[a]) && n.current && setTimeout(() => {
      q8(n.current, {
        behavior: "smooth",
        scrollMode: "if-needed"
      });
    }, 80);
  }
  return $a.subscribe((a, s) => {
    s.conventions[o].length !== a.conventions[o].length && l();
  }), g.exports.useEffect(() => {
    l();
  }, []), /* @__PURE__ */ B("div", {
    className: "aiflow-chat-in-command flex-1 bg-mayumi-gray-200",
    children: /* @__PURE__ */ fe(V8, {
      className: "pointer-events-auto h-[400px] overflow-hidden pt-2",
      children: [/* @__PURE__ */ B(U8, {
        className: "h-full w-full rounded",
        children: /* @__PURE__ */ fe("div", {
          ref: t,
          children: [i.map((a, s) => /* @__PURE__ */ B(ez, {
            message: a
          }, s)), /* @__PURE__ */ B("div", {
            ref: n
          })]
        })
      }), /* @__PURE__ */ B(e1, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "vertical",
        children: /* @__PURE__ */ B(t1, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      }), /* @__PURE__ */ B(e1, {
        className: "flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        orientation: "horizontal",
        children: /* @__PURE__ */ B(t1, {
          className: "relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        })
      })]
    })
  });
}, Hg = (e) => e.replace("-page", ""), nz = xC();
function rz() {
  const [e, t] = g.exports.useState(""), n = g.exports.useRef(), r = g.exports.useRef(null), o = g.exports.useRef(null), i = g.exports.useRef(null), l = g.exports.useRef(null), [a, s] = g.exports.useState([Zr]), u = a[a.length - 1], [c, f] = g.exports.useState(!1), {
    upsertConventions: d
  } = $a(), {
    open: m,
    setOpen: h,
    toggle: v,
    updateChatOpen: w
  } = qu(), p = g.exports.useCallback(() => {
    s((E) => {
      const P = [...E];
      return P.splice(-1, 1), P;
    });
  }, []);
  function y() {
    o.current && (o.current.style.transform = "scale(0.96)", setTimeout(() => {
      o.current && (o.current.style.transform = "");
    }, 100));
  }
  const x = g.exports.useCallback((E) => {
    t(E);
  }, []), b = g.exports.useCallback(async (E, P) => {
    if (console.log("handleValueSelect", E, P), E.endsWith("-page")) {
      s((R) => [...R, E]);
      return;
    }
    if (E === di) {
      f(!0);
      const R = await Sl(hd, {
        text: P == null ? void 0 : P.text,
        action: di
      }, "background");
      d(di, R.message), f(!1);
    }
    if (E === so) {
      f(!0);
      const R = await Sl(hd, {
        text: P == null ? void 0 : P.text,
        action: so
      }, "background");
      d(so, R.message), f(!1);
    }
    if (E === pi) {
      const R = new Wu({
        blankReplacement: () => ""
      });
      R.remove(["script", "link", "nav", "footer", "img", "iframe", "audio", "canvas", "figure", "ins", "del", "next-route-announcer"]);
      const T = R.turndown(document.body), O = await Sl(hd, {
        text: T,
        action: pi
      }, "background");
      d(pi, O.message);
    }
    t("");
  }, [d]);
  g.exports.useEffect(() => {
    const E = (P) => {
      if (P.key === "j" && P.metaKey && (v(), u === Qu && p(), w(!1)), P.key === "Escape" && u === Zr && !qu.getState().subCommandOpen) {
        h(!1), w(!1);
        return;
      }
      P.key === "Escape" && u !== Zr && (p(), setTimeout(() => {
        var R;
        (R = i.current) == null || R.focus();
      }, 100));
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [w, u, p, v, h]);
  const A = u === Zr, S = u === Gu || u === vh, $ = u === Gu;
  return /* @__PURE__ */ fe(Pn, {
    children: [/* @__PURE__ */ B(P_, {
      open: m,
      children: /* @__PURE__ */ B(__, {
        container: r.current,
        children: /* @__PURE__ */ B(R_, {
          "cmdk-dialog": "",
          className: "z-50 shadow-lg",
          children: /* @__PURE__ */ B(K4, {
            autoFocus: !0,
            shards: [i],
            group: "cmdk",
            children: /* @__PURE__ */ fe(Wt, {
              ref: o,
              value: e,
              onValueChange: x,
              loop: !0,
              children: [/* @__PURE__ */ B("div", {
                "cmdk-raycast-top-shine": ""
              }), /* @__PURE__ */ fe("div", {
                className: "flex items-center justify-between px-3 pt-1",
                children: [/* @__PURE__ */ B("div", {
                  className: "flex items-center justify-start gap-2",
                  children: a.map((E) => /* @__PURE__ */ B("div", {
                    className: "rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow",
                    children: Hg(E)
                  }, E))
                }), $ && /* @__PURE__ */ B(C8, {
                  container: r
                })]
              }), /* @__PURE__ */ B(Wt.Input, {
                ref: i,
                onValueChange: (E) => {
                  n.current = E;
                },
                autoFocus: !0,
                tabIndex: 1,
                className: Ti({
                  hidden: !A
                }),
                placeholder: "Search for commands...",
                onKeyDown: (E) => {
                  var P;
                  E.key === "Enter" && y(), !(u === Zr || ((P = n.current) == null ? void 0 : P.length)) && E.key === "Backspace" && (E.preventDefault(), p(), y());
                }
              }, "cmdk-input"), A && /* @__PURE__ */ B("hr", {
                "cmdk-raycast-loader": ""
              }), /* @__PURE__ */ fe(Wt.List, {
                className: "min-h-[400px]",
                ref: l,
                children: [u === Zr && /* @__PURE__ */ B(oz, {
                  onSelect: b
                }), u === Qu && /* @__PURE__ */ B(iz, {}), S && /* @__PURE__ */ B(lz, {
                  page: u
                })]
              }), /* @__PURE__ */ fe("div", {
                "cmdk-raycast-footer": "",
                className: "justify-end",
                children: [S && /* @__PURE__ */ B(az, {
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
                }), /* @__PURE__ */ B("hr", {}), /* @__PURE__ */ B(sz, {
                  listRef: l,
                  selectedValue: e,
                  inputRef: i,
                  onSelect: b
                })]
              })]
            })
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
function oz({
  onSelect: e
}) {
  const {
    clear: t
  } = $a();
  return /* @__PURE__ */ fe(Pn, {
    children: [/* @__PURE__ */ B(Wt.Empty, {
      children: "No results found."
    }), /* @__PURE__ */ fe(Wt.Group, {
      heading: "Commands",
      children: [/* @__PURE__ */ fe(fl, {
        isCommand: !0,
        value: "clear-storage",
        onSelect: () => {
          t(), nz.clear();
        },
        children: [/* @__PURE__ */ B(E8, {}), "Clear Storage"]
      }), /* @__PURE__ */ fe(fl, {
        isCommand: !0,
        onSelect: () => e(Qu),
        value: Qu,
        children: [/* @__PURE__ */ B($8, {}), "Config"]
      }), /* @__PURE__ */ fe(fl, {
        isCommand: !0,
        onSelect: () => e(vh),
        value: vh,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-girl/0.8 text-mayumi-gray-1200"
        }), "Ask ChatGPT"]
      }), /* @__PURE__ */ fe(fl, {
        isCommand: !0,
        onSelect: () => e(Gu),
        value: Gu,
        children: [/* @__PURE__ */ B(XO, {
          className: "fill-mayumi-gray-1200/1"
        }), "Tranasplate"]
      }), /* @__PURE__ */ fe(fl, {
        isCommand: !0,
        value: pi,
        children: [/* @__PURE__ */ B("i", {
          className: "gg-notes/0.8 text-mayumi-gray-1200"
        }), "Summary"]
      })]
    })]
  });
}
function iz() {
  const e = wC();
  return /* @__PURE__ */ B("div", {
    className: "flex flex-col items-center justify-center p-4 pt-8",
    children: /* @__PURE__ */ B(iC, {
      light: !0,
      className: "w-1/2",
      value: e.OPENAI_API_KEY,
      onKeyDown: (t) => (t.key === "Enter" && e.set({
        [YO]: t.currentTarget.value
      }), !1)
    })
  });
}
function lz(e) {
  return /* @__PURE__ */ B(tz, {
    action: Hg(e.page)
  });
}
function az(e) {
  const t = g.exports.useRef(null), n = g.exports.useRef(""), r = (o) => {
    if (o.key === "Enter") {
      o.preventDefault();
      const i = Hg(e.page);
      e.onSendMessage(i, {
        text: n.current
      }), n.current = "", t.current.value = "", console.log("ChatInput", t.current);
    }
  };
  return /* @__PURE__ */ B(Wt.Input, {
    tabIndex: 1,
    placeholder: "Type your message...",
    ref: t,
    onValueChange: (o) => {
      n.current = o;
    },
    onKeyDown: r
  }, "cmdk-ai-input");
}
function sz({
  inputRef: e,
  listRef: t,
  selectedValue: n,
  onSelect: r
}) {
  const {
    subCommandOpen: o,
    toggleSubCommand: i,
    setSubCommandOpen: l
  } = qu(), [, a] = g.exports.useState(), s = g.exports.useRef(null), u = n !== Zr;
  return g.exports.useEffect(() => {
    function c(f) {
      f.key === "m" && f.metaKey && (f.preventDefault(), u && i()), f.key === "Escape" && l(!1);
    }
    return document.addEventListener("keydown", c), () => {
      document.removeEventListener("keydown", c);
    };
  }, [u, i, l, e]), g.exports.useEffect(() => {
    const c = t.current;
    !c || (o ? c.style.overflow = "hidden" : c.style.overflow = "");
  }, [o, t]), /* @__PURE__ */ fe(g_, {
    open: o,
    onOpenChange: (c) => {
      !u || l(c);
    },
    modal: !0,
    children: [/* @__PURE__ */ fe(v_, {
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
    }), /* @__PURE__ */ B(y_, {
      side: "top",
      align: "end",
      className: "raycast-submenu outline-none",
      sideOffset: 16,
      alignOffset: 0,
      onCloseAutoFocus: (c) => {
        var f;
        (f = e == null ? void 0 : e.current) == null || f.focus();
      },
      children: /* @__PURE__ */ fe(Wt, {
        loop: !0,
        shouldFilter: !1,
        children: [/* @__PURE__ */ B(Wt.List, {
          children: /* @__PURE__ */ fe(Wt.Group, {
            heading: n == null ? void 0 : n.toUpperCase(),
            children: [n === di && /* @__PURE__ */ B(uz, {
              onSelect: r
            }), n === so && /* @__PURE__ */ B(cz, {
              onSelect: r
            }), n === pi && /* @__PURE__ */ B(fz, {
              onSelect: r
            })]
          })
        }), /* @__PURE__ */ B(Wt.Input, {
          autoFocus: !0,
          onValueChange: a,
          ref: s,
          placeholder: "Search for actions..."
        })]
      })
    })]
  });
}
function uz({
  onSelect: e
}) {
  var n;
  const {
    search: t
  } = Kn((r) => r);
  return /* @__PURE__ */ fe(Pn, {
    children: [/* @__PURE__ */ B(tc, {
      value: "search-input",
      onSelect: () => {
        e(di, {
          text: Qy()
        });
      },
      shortcut: "\u21B5",
      children: /* @__PURE__ */ B("span", {
        className: "truncate",
        children: (n = Qy()) != null ? n : "Search input"
      })
    }), /* @__PURE__ */ B(tc, {
      onSelect: () => {
        e(di, {
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
function cz({
  onSelect: e
}) {
  const {
    search: t
  } = Kn((n) => n);
  return /* @__PURE__ */ B(Pn, {
    children: /* @__PURE__ */ B(tc, {
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
function fz({
  onSelect: e
}) {
  const {
    search: t
  } = Kn((n) => n);
  return /* @__PURE__ */ B(Pn, {
    children: /* @__PURE__ */ B(tc, {
      onSelect: () => {
        e(pi, {
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
function fl({
  children: e,
  value: t,
  isCommand: n = !1,
  onSelect: r,
  disabled: o = !1
}) {
  return /* @__PURE__ */ fe(Wt.Item, {
    disabled: o,
    value: t,
    onSelect: r,
    children: [e, /* @__PURE__ */ B("span", {
      "cmdk-raycast-meta": "",
      children: n ? "Command" : "Application"
    })]
  });
}
function tc({
  children: e,
  shortcut: t,
  value: n,
  onSelect: r
}) {
  return /* @__PURE__ */ fe(Wt.Item, {
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
var Wg = Ja(), ie = (e) => Za(e, Wg), qg = Ja();
ie.write = (e) => Za(e, qg);
var Jc = Ja();
ie.onStart = (e) => Za(e, Jc);
var Qg = Ja();
ie.onFrame = (e) => Za(e, Qg);
var Gg = Ja();
ie.onFinish = (e) => Za(e, Gg);
var vi = [];
ie.setTimeout = (e, t) => {
  let n = ie.now() + t, r = () => {
    let i = vi.findIndex((l) => l.cancel == r);
    ~i && vi.splice(i, 1), kr -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return vi.splice(j2(n), 0, o), kr += 1, V2(), o;
};
var j2 = (e) => ~(~vi.findIndex((t) => t.time > e) || ~vi.length);
ie.cancel = (e) => {
  Jc.delete(e), Qg.delete(e), Gg.delete(e), Wg.delete(e), qg.delete(e);
};
ie.sync = (e) => {
  Rh = !0, ie.batchedUpdates(e), Rh = !1;
};
ie.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...o) {
    t = o, ie.onStart(n);
  }
  return r.handler = e, r.cancel = () => {
    Jc.delete(n), t = null;
  }, r;
};
var Kg = typeof window < "u" ? window.requestAnimationFrame : () => {
};
ie.use = (e) => Kg = e;
ie.now = typeof performance < "u" ? () => performance.now() : Date.now;
ie.batchedUpdates = (e) => e();
ie.catch = console.error;
ie.frameLoop = "always";
ie.advance = () => {
  ie.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : H2();
};
var Sr = -1, kr = 0, Rh = !1;
function Za(e, t) {
  Rh ? (t.delete(e), e(0)) : (t.add(e), V2());
}
function V2() {
  Sr < 0 && (Sr = 0, ie.frameLoop !== "demand" && Kg(U2));
}
function dz() {
  Sr = -1;
}
function U2() {
  ~Sr && (Kg(U2), ie.batchedUpdates(H2));
}
function H2() {
  let e = Sr;
  Sr = ie.now();
  let t = j2(Sr);
  if (t && (W2(vi.splice(0, t), (n) => n.handler()), kr -= t), !kr) {
    dz();
    return;
  }
  Jc.flush(), Wg.flush(e ? Math.min(64, Sr - e) : 16.667), Qg.flush(), qg.flush(), Gg.flush();
}
function Ja() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return { add(n) {
    kr += t == e && !e.has(n) ? 1 : 0, e.add(n);
  }, delete(n) {
    return kr -= t == e && e.has(n) ? 1 : 0, e.delete(n);
  }, flush(n) {
    t.size && (e = /* @__PURE__ */ new Set(), kr -= t.size, W2(t, (r) => r(n) && e.add(r)), kr += e.size, t = e);
  } };
}
function W2(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      ie.catch(r);
    }
  });
}
var pz = Object.defineProperty, hz = (e, t) => {
  for (var n in t)
    pz(e, n, { get: t[n], enumerable: !0 });
}, pn = {};
hz(pn, { assign: () => gz, colors: () => Or, createStringInterpolator: () => Xg, skipAnimation: () => Q2, to: () => q2, willAdvance: () => Zg });
function Th() {
}
var mz = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), H = { arr: Array.isArray, obj: (e) => !!e && e.constructor.name === "Object", fun: (e) => typeof e == "function", str: (e) => typeof e == "string", num: (e) => typeof e == "number", und: (e) => e === void 0 };
function Dn(e, t) {
  if (H.arr(e)) {
    if (!H.arr(t) || e.length !== t.length)
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
  if (H.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Pt = (e) => H.und(e) ? [] : H.arr(e) ? e : [e];
function Vl(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), me(n, t);
  }
}
var bl = (e, ...t) => Vl(e, (n) => n(...t)), Yg = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Xg, q2, Or = null, Q2 = !1, Zg = Th, gz = (e) => {
  e.to && (q2 = e.to), e.now && (ie.now = e.now), e.colors !== void 0 && (Or = e.colors), e.skipAnimation != null && (Q2 = e.skipAnimation), e.createStringInterpolator && (Xg = e.createStringInterpolator), e.requestAnimationFrame && ie.use(e.requestAnimationFrame), e.batchedUpdates && (ie.batchedUpdates = e.batchedUpdates), e.willAdvance && (Zg = e.willAdvance), e.frameLoop && (ie.frameLoop = e.frameLoop);
}, Ul = /* @__PURE__ */ new Set(), Ut = [], Td = [], nc = 0, ef = { get idle() {
  return !Ul.size && !Ut.length;
}, start(e) {
  nc > e.priority ? (Ul.add(e), ie.onStart(vz)) : (G2(e), ie(Ih));
}, advance: Ih, sort(e) {
  if (nc)
    ie.onFrame(() => ef.sort(e));
  else {
    let t = Ut.indexOf(e);
    ~t && (Ut.splice(t, 1), K2(e));
  }
}, clear() {
  Ut = [], Ul.clear();
} };
function vz() {
  Ul.forEach(G2), Ul.clear(), ie(Ih);
}
function G2(e) {
  Ut.includes(e) || K2(e);
}
function K2(e) {
  Ut.splice(yz(Ut, (t) => t.priority > e.priority), 0, e);
}
function Ih(e) {
  let t = Td;
  for (let n = 0; n < Ut.length; n++) {
    let r = Ut[n];
    nc = r.priority, r.idle || (Zg(r), r.advance(e), r.idle || t.push(r));
  }
  return nc = 0, Td = Ut, Td.length = 0, Ut = t, Ut.length > 0;
}
function yz(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var xz = (e, t, n) => Math.min(Math.max(n, e), t), wz = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, sn = "[-+]?\\d*\\.?\\d+", rc = sn + "%";
function tf(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var bz = new RegExp("rgb" + tf(sn, sn, sn)), Sz = new RegExp("rgba" + tf(sn, sn, sn, sn)), kz = new RegExp("hsl" + tf(sn, rc, rc)), Cz = new RegExp("hsla" + tf(sn, rc, rc, sn)), Ez = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, $z = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Az = /^#([0-9a-fA-F]{6})$/, Pz = /^#([0-9a-fA-F]{8})$/;
function _z(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Az.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Or && Or[e] !== void 0 ? Or[e] : (t = bz.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | 255) >>> 0 : (t = Sz.exec(e)) ? (Do(t[1]) << 24 | Do(t[2]) << 16 | Do(t[3]) << 8 | tx(t[4])) >>> 0 : (t = Ez.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Pz.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = $z.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = kz.exec(e)) ? (J1(ex(t[1]), Fs(t[2]), Fs(t[3])) | 255) >>> 0 : (t = Cz.exec(e)) ? (J1(ex(t[1]), Fs(t[2]), Fs(t[3])) | tx(t[4])) >>> 0 : null;
}
function Id(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function J1(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Id(o, r, e + 1 / 3), l = Id(o, r, e), a = Id(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(l * 255) << 16 | Math.round(a * 255) << 8;
}
function Do(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function ex(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function tx(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Fs(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function nx(e) {
  let t = _z(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var Pa = (e, t, n) => {
  if (H.fun(e))
    return e;
  if (H.arr(e))
    return Pa({ range: e, output: t, extrapolate: n });
  if (H.str(e.output[0]))
    return Xg(e);
  let r = e, o = r.output, i = r.range || [0, 1], l = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", s = r.easing || ((u) => u);
  return (u) => {
    let c = Tz(u, i);
    return Rz(u, i[c], i[c + 1], o[c], o[c + 1], s, l, a, r.map);
  };
};
function Rz(e, t, n, r, o, i, l, a, s) {
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
function Tz(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var Iz = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return xz(0, 1, o / e);
}, oc = 1.70158, Ds = oc * 1.525, rx = oc + 1, ox = 2 * Math.PI / 3, ix = 2 * Math.PI / 4.5, Ls = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Oz = { linear: (e) => e, easeInQuad: (e) => e * e, easeOutQuad: (e) => 1 - (1 - e) * (1 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2, easeInCubic: (e) => e * e * e, easeOutCubic: (e) => 1 - Math.pow(1 - e, 3), easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2, easeInQuart: (e) => e * e * e * e, easeOutQuart: (e) => 1 - Math.pow(1 - e, 4), easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2, easeInQuint: (e) => e * e * e * e * e, easeOutQuint: (e) => 1 - Math.pow(1 - e, 5), easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2, easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2), easeOutSine: (e) => Math.sin(e * Math.PI / 2), easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2, easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10), easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e), easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2, easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)), easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)), easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2, easeInBack: (e) => rx * e * e * e - oc * e * e, easeOutBack: (e) => 1 + rx * Math.pow(e - 1, 3) + oc * Math.pow(e - 1, 2), easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Ds + 1) * 2 * e - Ds) / 2 : (Math.pow(2 * e - 2, 2) * ((Ds + 1) * (e * 2 - 2) + Ds) + 2) / 2, easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * ox), easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * ox) + 1, easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ix)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ix) / 2 + 1, easeInBounce: (e) => 1 - Ls(1 - e), easeOutBounce: Ls, easeInOutBounce: (e) => e < 0.5 ? (1 - Ls(1 - 2 * e)) / 2 : (1 + Ls(2 * e - 1)) / 2, steps: Iz }, Ii = Symbol.for("FluidValue.get"), vo = Symbol.for("FluidValue.observers"), Bt = (e) => Boolean(e && e[Ii]), yt = (e) => e && e[Ii] ? e[Ii]() : e, lx = (e) => e[vo] || null;
function Nz(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function _a(e, t) {
  let n = e[vo];
  n && n.forEach((r) => {
    Nz(r, t);
  });
}
var LB, zB, Cx, Y2 = (Cx = class {
  constructor(e) {
    K(this, LB);
    K(this, zB);
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    Mz(this, e);
  }
}, LB = Ii, zB = vo, Cx), Mz = (e, t) => X2(e, Ii, t);
function Hi(e, t) {
  if (e[Ii]) {
    let n = e[vo];
    n || X2(e, vo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Ra(e, t) {
  let n = e[vo];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e[vo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var X2 = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), nu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Fz = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ax = new RegExp(`(${nu.source})(%|[a-z]+)`, "i"), Dz = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, nf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Z2 = (e) => {
  let [t, n] = Lz(e);
  if (!t || Yg())
    return e;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e : n && nf.test(n) ? Z2(n) : n || e;
}, Lz = (e) => {
  let t = nf.exec(e);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, Od, zz = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, J2 = (e) => {
  Od || (Od = Or ? new RegExp(`(${Object.keys(Or).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e.output.map((o) => yt(o).replace(nf, Z2).replace(Fz, nx).replace(Od, nx)), n = t.map((o) => o.match(nu).map(Number)), r = n[0].map((o, i) => n.map((l) => {
    if (!(i in l))
      throw Error('The arity of each "output" value must be equal');
    return l[i];
  })).map((o) => Pa({ ...e, output: o }));
  return (o) => {
    var a;
    let i = !ax.test(t[0]) && ((a = t.find((s) => ax.test(s))) == null ? void 0 : a.replace(nu, "")), l = 0;
    return t[0].replace(nu, () => `${r[l++](o)}${i || ""}`).replace(Dz, zz);
  };
}, Jg = "react-spring: ", eE = (e) => {
  let t = e, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Jg}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, Bz = eE(console.warn);
function jz() {
  Bz(`${Jg}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var Vz = eE(console.warn);
function Uz() {
  Vz(`${Jg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function rf(e) {
  return H.str(e) && (e[0] == "#" || /\d/.test(e) || !Yg() && nf.test(e) || e in (Or || {}));
}
var e0 = Yg() ? g.exports.useEffect : g.exports.useLayoutEffect, Hz = () => {
  let e = g.exports.useRef(!1);
  return e0(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function tE() {
  let e = g.exports.useState()[1], t = Hz();
  return () => {
    t.current && e(Math.random());
  };
}
function Wz(e, t) {
  let [n] = g.exports.useState(() => ({ inputs: t, result: e() })), r = g.exports.useRef(), o = r.current, i = o;
  return i ? Boolean(t && i.inputs && qz(t, i.inputs)) || (i = { inputs: t, result: e() }) : i = n, g.exports.useEffect(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function qz(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var nE = (e) => g.exports.useEffect(e, Qz), Qz = [];
function sx(e) {
  let t = g.exports.useRef();
  return g.exports.useEffect(() => {
    t.current = e;
  }), t.current;
}
var Ta = Symbol.for("Animated:node"), Gz = (e) => !!e && e[Ta] === e, wn = (e) => e && e[Ta], t0 = (e, t) => mz(e, Ta, t), of = (e) => e && e[Ta] && e[Ta].getPayload(), rE = class {
  constructor() {
    K(this, "payload");
    t0(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, es = class extends rE {
  constructor(t) {
    super();
    K(this, "done", !0);
    K(this, "elapsedTime");
    K(this, "lastPosition");
    K(this, "lastVelocity");
    K(this, "v0");
    K(this, "durationProgress", 0);
    this._value = t, H.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new es(t);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(t, n) {
    return H.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0);
  }
  reset() {
    let { done: t } = this;
    this.done = !1, H.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null);
  }
}, Ia = class extends es {
  constructor(t) {
    super(0);
    K(this, "_string", null);
    K(this, "_toString");
    this._toString = Pa({ output: [t, t] });
  }
  static create(t) {
    return new Ia(t);
  }
  getValue() {
    let t = this._string;
    return t != null ? t : this._string = this._toString(this._value);
  }
  setValue(t) {
    if (H.str(t)) {
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
    t && (this._toString = Pa({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
}, ic = { dependencies: null }, lf = class extends rE {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    let t = {};
    return An(this.source, (n, r) => {
      Gz(n) ? t[r] = n.getValue(e) : Bt(n) ? t[r] = yt(n) : e || (t[r] = n);
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
    ic.dependencies && Bt(e) && ic.dependencies.add(e);
    let t = of(e);
    t && me(t, (n) => this.add(n));
  }
}, oE = class extends lf {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new oE(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    let t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Kz)), !0);
  }
};
function Kz(e) {
  return (rf(e) ? Ia : es).create(e);
}
function Oh(e) {
  let t = wn(e);
  return t ? t.constructor : H.arr(e) ? oE : rf(e) ? Ia : es;
}
var ux = (e, t) => {
  let n = !H.fun(e) || e.prototype && e.prototype.isReactComponent;
  return g.exports.forwardRef((r, o) => {
    let i = g.exports.useRef(null), l = n && g.exports.useCallback((h) => {
      i.current = Zz(o, h);
    }, [o]), [a, s] = Xz(r, t), u = tE(), c = () => {
      let h = i.current;
      n && !h || (h ? t.applyAnimatedValues(h, a.getValue(!0)) : !1) === !1 && u();
    }, f = new Yz(c, s), d = g.exports.useRef();
    e0(() => (d.current = f, me(s, (h) => Hi(h, f)), () => {
      d.current && (me(d.current.deps, (h) => Ra(h, d.current)), ie.cancel(d.current.update));
    })), g.exports.useEffect(c, []), nE(() => () => {
      let h = d.current;
      me(h.deps, (v) => Ra(v, h));
    });
    let m = t.getComponentProps(a.getValue());
    return g.exports.createElement(e, { ...m, ref: l });
  });
}, Yz = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && ie.write(this.update);
  }
};
function Xz(e, t) {
  let n = /* @__PURE__ */ new Set();
  return ic.dependencies = n, e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }), e = new lf(e), ic.dependencies = null, [e, n];
}
function Zz(e, t) {
  return e && (H.fun(e) ? e(t) : e.current = t), t;
}
var cx = Symbol.for("AnimatedComponent"), Jz = (e, { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = (o) => new lf(o), getComponentProps: r = (o) => o } = {}) => {
  let o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r }, i = (l) => {
    let a = fx(l) || "Anonymous";
    return H.str(l) ? l = i[l] || (i[l] = ux(l, o)) : l = l[cx] || (l[cx] = ux(l, o)), l.displayName = `Animated(${a})`, l;
  };
  return An(e, (l, a) => {
    H.arr(e) && (a = fx(l)), i[a] = i(l);
  }), { animated: i };
}, fx = (e) => H.str(e) ? e : e && H.str(e.displayName) ? e.displayName : H.fun(e) && e.name || null;
function eo(e, ...t) {
  return H.fun(e) ? e(...t) : e;
}
var Hl = (e, t) => e === !0 || !!(t && e && (H.fun(e) ? e(t) : Pt(e).includes(t))), iE = (e, t) => H.obj(e) ? t && e[t] : e, lE = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, eB = (e) => e, n0 = (e, t = eB) => {
  let n = tB;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  let r = {};
  for (let o of n) {
    let i = t(e[o], o);
    H.und(i) || (r[o] = i);
  }
  return r;
}, tB = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], nB = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function rB(e) {
  let t = {}, n = 0;
  if (An(e, (r, o) => {
    nB[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function aE(e) {
  let t = rB(e);
  if (t) {
    let n = { to: t };
    return An(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function Oa(e) {
  return e = yt(e), H.arr(e) ? e.map(Oa) : rf(e) ? pn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e;
}
function oB(e) {
  for (let t in e)
    return !0;
  return !1;
}
function Nh(e) {
  return H.fun(e) || H.arr(e) && H.obj(e[0]);
}
function iB(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function lB(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var sE = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, Mh = { ...sE.default, mass: 1, damping: 1, easing: Oz.linear, clamp: !1 }, aB = class {
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
    Object.assign(this, Mh);
  }
};
function sB(e, t, n) {
  n && (n = { ...n }, dx(n, t), t = { ...n, ...t }), dx(e, t), Object.assign(e, t);
  for (let l in Mh)
    e[l] == null && (e[l] = Mh[l]);
  let { mass: r, frequency: o, damping: i } = e;
  return H.und(o) || (o < 0.01 && (o = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * r, e.friction = 4 * Math.PI * i * r / o), e;
}
function dx(e, t) {
  if (!H.und(t.decay))
    e.duration = void 0;
  else {
    let n = !H.und(t.tension) || !H.und(t.friction);
    (n || !H.und(t.frequency) || !H.und(t.damping) || !H.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var px = [], uB = class {
  constructor() {
    K(this, "changed", !1);
    K(this, "values", px);
    K(this, "toValues", null);
    K(this, "fromValues", px);
    K(this, "to");
    K(this, "from");
    K(this, "config", new aB());
    K(this, "immediate", !1);
  }
};
function uE(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((l, a) => {
    var h;
    let s, u, c = Hl((h = n.cancel) != null ? h : r == null ? void 0 : r.cancel, t);
    if (c)
      m();
    else {
      H.und(n.pause) || (o.paused = Hl(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = o.paused || Hl(v, t)), s = eo(n.delay || 0, t), v ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function f() {
      o.resumeQueue.add(d), o.timeouts.delete(u), u.cancel(), s = u.time - ie.now();
    }
    function d() {
      s > 0 && !pn.skipAnimation ? (o.delayed = !0, u = ie.setTimeout(m, s), o.pauseQueue.add(f), o.timeouts.add(u)) : m();
    }
    function m() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(f), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
      try {
        i.start({ ...n, callId: e, cancel: c }, l);
      } catch (v) {
        a(v);
      }
    }
  });
}
var r0 = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? yi(e.get()) : t.every((n) => n.noop) ? cE(e.get()) : ln(e.get(), t.every((n) => n.finished)), cE = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }), ln = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }), yi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function fE(e, t, n, r) {
  let { callId: o, parentId: i, onRest: l } = t, { asyncTo: a, promise: s } = n;
  return !i && e === a && !t.reset ? s : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    let u = n0(t, (w, p) => p === "onRest" ? void 0 : w), c, f, d = new Promise((w, p) => (c = w, f = p)), m = (w) => {
      let p = o <= (n.cancelId || 0) && yi(r) || o !== n.asyncId && ln(r, !1);
      if (p)
        throw w.result = p, f(w), w;
    }, h = (w, p) => {
      let y = new hx(), x = new mx();
      return (async () => {
        if (pn.skipAnimation)
          throw Na(n), x.result = ln(r, !1), f(x), x;
        m(y);
        let b = H.obj(w) ? { ...w } : { ...p, to: w };
        b.parentId = o, An(u, (S, $) => {
          H.und(b[$]) && (b[$] = S);
        });
        let A = await r.start(b);
        return m(y), n.paused && await new Promise((S) => {
          n.resumeQueue.add(S);
        }), A;
      })();
    }, v;
    if (pn.skipAnimation)
      return Na(n), ln(r, !1);
    try {
      let w;
      H.arr(e) ? w = (async (p) => {
        for (let y of p)
          await h(y);
      })(e) : w = Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([w.then(c), d]), v = ln(r.get(), !0, !1);
    } catch (w) {
      if (w instanceof hx)
        v = w.result;
      else if (w instanceof mx)
        v = w.result;
      else
        throw w;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? s : void 0);
    }
    return H.fun(l) && ie.batchedUpdates(() => {
      l(v, r, r.item);
    }), v;
  })();
}
function Na(e, t) {
  Vl(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var hx = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    K(this, "result");
  }
}, mx = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    K(this, "result");
  }
}, Fh = (e) => e instanceof o0, cB = 1, o0 = class extends Y2 {
  constructor() {
    super(...arguments);
    K(this, "id", cB++);
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
    return jz(), pn.to(this, t);
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
    _a(this, { type: "change", parent: this, value: t, idle: n });
  }
  _onPriorityChange(t) {
    this.idle || ef.sort(this), _a(this, { type: "priority", parent: this, priority: t });
  }
}, yo = Symbol.for("SpringPhase"), dE = 1, Dh = 2, Lh = 4, Nd = (e) => (e[yo] & dE) > 0, fr = (e) => (e[yo] & Dh) > 0, dl = (e) => (e[yo] & Lh) > 0, gx = (e, t) => t ? e[yo] |= Dh | dE : e[yo] &= ~Dh, vx = (e, t) => t ? e[yo] |= Lh : e[yo] &= ~Lh, fB = class extends o0 {
  constructor(t, n) {
    super();
    K(this, "key");
    K(this, "animation", new uB());
    K(this, "queue");
    K(this, "defaultProps", {});
    K(this, "_state", { paused: !1, delayed: !1, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    K(this, "_pendingCalls", /* @__PURE__ */ new Set());
    K(this, "_lastCallId", 0);
    K(this, "_lastToId", 0);
    K(this, "_memoizedDuration", 0);
    if (!H.und(t) || !H.und(n)) {
      let r = H.obj(t) ? { ...t } : { ...n, from: t };
      H.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(fr(this) || this._state.asyncTo) || dl(this);
  }
  get goal() {
    return yt(this.animation.to);
  }
  get velocity() {
    let t = wn(this);
    return t instanceof es ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return Nd(this);
  }
  get isAnimating() {
    return fr(this);
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
      let d = c.constructor == Ia ? 1 : a ? a[f].lastPosition : l[f], m = o.immediate, h = d;
      if (!m) {
        if (h = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let v = c.elapsedTime += t, w = o.fromValues[f], p = c.v0 != null ? c.v0 : c.v0 = H.arr(i.velocity) ? i.velocity[f] : i.velocity, y, x = i.precision || (w == d ? 5e-3 : Math.min(1, Math.abs(d - w) * 1e-3));
        if (H.und(i.duration))
          if (i.decay) {
            let b = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - b) * v);
            h = w + p / (1 - b) * (1 - A), m = Math.abs(c.lastPosition - h) <= x, y = p * A;
          } else {
            y = c.lastVelocity == null ? p : c.lastVelocity;
            let b = i.restVelocity || x / 10, A = i.clamp ? 0 : i.bounce, S = !H.und(A), $ = w == d ? c.v0 > 0 : w < d, E, P = !1, R = 1, T = Math.ceil(t / R);
            for (let O = 0; O < T && (E = Math.abs(y) > b, !(!E && (m = Math.abs(d - h) <= x, m))); ++O) {
              S && (P = h == d || h > d == $, P && (y = -y * A, h = d));
              let F = -i.tension * 1e-6 * (h - d), z = -i.friction * 1e-3 * y, D = (F + z) / i.mass;
              y = y + D * R, h = h + y * R;
            }
          }
        else {
          let b = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, v = c.elapsedTime += t)), b = (i.progress || 0) + v / this._memoizedDuration, b = b > 1 ? 1 : b < 0 ? 0 : b, c.durationProgress = b), h = w + i.easing(b) * (d - w), y = (h - c.lastPosition) / t, m = b == 1;
        }
        c.lastVelocity = y, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), m = !0);
      }
      a && !a[f].done && (m = !1), m ? c.done = !0 : n = !1, c.setValue(h, i.round) && (r = !0);
    });
    let s = wn(this), u = s.getValue();
    if (n) {
      let c = yt(o.to);
      (u !== c || r) && !i.decay ? (s.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(t) {
    return ie.batchedUpdates(() => {
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
    if (fr(this)) {
      let { to: t, config: n } = this.animation;
      ie.batchedUpdates(() => {
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
    return H.und(t) ? (r = this.queue || [], this.queue = []) : r = [H.obj(t) ? t : { ...n, to: t }], Promise.all(r.map((o) => this._update(o))).then((o) => r0(this, o));
  }
  stop(t) {
    let { to: n } = this.animation;
    return this._focus(this.get()), Na(this._state, t && this._lastCallId), ie.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({ reset: !0 });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", { to: r, from: o } = t;
    r = H.obj(r) ? r[n] : r, (r == null || Nh(r)) && (r = void 0), o = H.obj(o) ? o[n] : o, o == null && (o = void 0);
    let i = { to: r, from: o };
    return Nd(this) || (t.reverse && ([r, o] = [o, r]), o = yt(o), H.und(o) ? wn(this) || this._set(r) : this._set(o)), i;
  }
  _update({ ...t }, n) {
    let { key: r, defaultProps: o } = this;
    t.default && Object.assign(o, n0(t, (a, s) => /^on/.test(s) ? iE(a, r) : a)), xx(this, t, "onProps"), hl(this, "onProps", t, this);
    let i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let l = this._state;
    return uE(++this._lastCallId, { key: r, props: t, defaultProps: o, state: l, actions: { pause: () => {
      dl(this) || (vx(this, !0), bl(l.pauseQueue), hl(this, "onPause", ln(this, pl(this, this.animation.to)), this));
    }, resume: () => {
      dl(this) && (vx(this, !1), fr(this) && this._resume(), bl(l.resumeQueue), hl(this, "onResume", ln(this, pl(this, this.animation.to)), this));
    }, start: this._merge.bind(this, i) } }).then((a) => {
      if (t.loop && a.finished && !(n && a.noop)) {
        let s = pE(t);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(yi(this));
    let o = !H.und(t.to), i = !H.und(t.from);
    if (o || i)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(yi(this));
    let { key: l, defaultProps: a, animation: s } = this, { to: u, from: c } = s, { to: f = u, from: d = c } = t;
    i && !o && (!n.default || H.und(f)) && (f = d), n.reverse && ([f, d] = [d, f]);
    let m = !Dn(d, c);
    m && (s.from = d), d = yt(d);
    let h = !Dn(f, u);
    h && this._focus(f);
    let v = Nh(n.to), { config: w } = s, { decay: p, velocity: y } = w;
    (o || i) && (w.velocity = 0), n.config && !v && sB(w, eo(n.config, l), n.config !== a.config ? eo(a.config, l) : void 0);
    let x = wn(this);
    if (!x || H.und(f))
      return r(ln(this, !0));
    let b = H.und(n.reset) ? i && !n.default : !H.und(d) && Hl(n.reset, l), A = b ? d : this.get(), S = Oa(f), $ = H.num(S) || H.arr(S) || rf(S), E = !v && (!$ || Hl(a.immediate || n.immediate, l));
    if (h) {
      let O = Oh(f);
      if (O !== x.constructor)
        if (E)
          x = this._set(S);
        else
          throw Error(`Cannot animate between ${x.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    let P = x.constructor, R = Bt(f), T = !1;
    if (!R) {
      let O = b || !Nd(this) && m;
      (h || O) && (T = Dn(Oa(A), S), R = !T), (!Dn(s.immediate, E) && !E || !Dn(w.decay, p) || !Dn(w.velocity, y)) && (R = !0);
    }
    if (T && fr(this) && (s.changed && !b ? R = !0 : R || this._stop(u)), !v && ((R || Bt(u)) && (s.values = x.getPayload(), s.toValues = Bt(f) ? null : P == Ia ? [1] : Pt(S)), s.immediate != E && (s.immediate = E, !E && !b && this._set(u)), R)) {
      let { onRest: O } = s;
      me(pB, (z) => xx(this, n, z));
      let F = ln(this, pl(this, u));
      bl(this._pendingCalls, F), this._pendingCalls.add(r), s.changed && ie.batchedUpdates(() => {
        var z;
        s.changed = !b, O == null || O(F, this), b ? eo(a.onRest, F) : (z = s.onStart) == null || z.call(s, F, this);
      });
    }
    b && this._set(A), v ? r(fE(n.to, n, this._state, this)) : R ? this._start() : fr(this) && !h ? this._pendingCalls.add(r) : r(cE(A));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (lx(this) && this._detach(), n.to = t, lx(this) && this._attach());
  }
  _attach() {
    let t = 0, { to: n } = this.animation;
    Bt(n) && (Hi(n, this), Fh(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let { to: t } = this.animation;
    Bt(t) && Ra(t, this);
  }
  _set(t, n = !0) {
    let r = yt(t);
    if (!H.und(r)) {
      let o = wn(this);
      if (!o || !Dn(r, o.getValue())) {
        let i = Oh(r);
        !o || o.constructor != i ? t0(this, i.create(r)) : o.setValue(r), o && ie.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return wn(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, hl(this, "onStart", ln(this, pl(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), eo(this.animation.onChange, t, this)), eo(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    wn(this).reset(yt(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), fr(this) || (gx(this, !0), dl(this) || this._resume());
  }
  _resume() {
    pn.skipAnimation ? this.finish() : ef.start(this);
  }
  _stop(t, n) {
    if (fr(this)) {
      gx(this, !1);
      let r = this.animation;
      me(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), _a(this, { type: "idle", parent: this });
      let o = n ? yi(this.get()) : ln(this.get(), pl(this, t != null ? t : r.to));
      bl(this._pendingCalls, o), r.changed && (r.changed = !1, hl(this, "onRest", o, this));
    }
  }
};
function pl(e, t) {
  let n = Oa(t), r = Oa(e.get());
  return Dn(r, n);
}
function pE(e, t = e.loop, n = e.to) {
  let r = eo(t);
  if (r) {
    let o = r !== !0 && aE(r), i = (o || e).reverse, l = !o || o.reset;
    return Ma({ ...e, loop: t, default: !1, pause: void 0, to: !i || Nh(n) ? n : void 0, from: l ? e.from : void 0, reset: l, ...o });
  }
}
function Ma(e) {
  let { to: t, from: n } = e = aE(e), r = /* @__PURE__ */ new Set();
  return H.obj(t) && yx(t, r), H.obj(n) && yx(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function dB(e) {
  let t = Ma(e);
  return H.und(t.default) && (t.default = n0(t)), t;
}
function yx(e, t) {
  An(e, (n, r) => n != null && t.add(r));
}
var pB = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function xx(e, t, n) {
  e.animation[n] = t[n] !== lE(t, n) ? iE(t[n], e.key) : void 0;
}
function hl(e, t, ...n) {
  var r, o, i, l;
  (o = (r = e.animation)[t]) == null || o.call(r, ...n), (l = (i = e.defaultProps)[t]) == null || l.call(i, ...n);
}
var hB = ["onStart", "onChange", "onRest"], mB = 1, gB = class {
  constructor(e, t) {
    K(this, "id", mB++);
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
      H.und(n) || this.springs[t].set(n);
    }
  }
  update(e) {
    return e && this.queue.push(Ma(e)), this;
  }
  start(e) {
    let { queue: t } = this;
    return e ? t = Pt(e).map(Ma) : this.queue = [], this._flush ? this._flush(this, t) : (yE(this, t), zh(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      let n = this.springs;
      me(Pt(t), (r) => n[r].stop(!!e));
    } else
      Na(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (H.und(e))
      this.start({ pause: !0 });
    else {
      let t = this.springs;
      me(Pt(e), (n) => t[n].pause());
    }
    return this;
  }
  resume(e) {
    if (H.und(e))
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
    (r && !this._started || o && !this._started) && (this._started = !0, Vl(e, ([a, s]) => {
      s.value = this.get(), a(s, this, this._item);
    }));
    let i = !r && this._started, l = o || i && n.size ? this.get() : null;
    o && t.size && Vl(t, ([a, s]) => {
      s.value = l, a(s, this, this._item);
    }), i && (this._started = !1, Vl(n, ([a, s]) => {
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
    ie.onFrame(this._onFrame);
  }
};
function zh(e, t) {
  return Promise.all(t.map((n) => hE(e, n))).then((n) => r0(e, n));
}
async function hE(e, t, n) {
  let { keys: r, to: o, from: i, loop: l, onRest: a, onResolve: s } = t, u = H.obj(t.default) && t.default;
  l && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  let c = H.arr(o) || H.fun(o) ? o : void 0;
  c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : me(hB, (v) => {
    let w = t[v];
    if (H.fun(w)) {
      let p = e._events[v];
      t[v] = ({ finished: y, cancelled: x }) => {
        let b = p.get(w);
        b ? (y || (b.finished = !1), x && (b.cancelled = !0)) : p.set(w, { value: null, finished: y || !1, cancelled: x || !1 });
      }, u && (u[v] = t[v]);
    }
  });
  let f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, bl(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let d = (r || Object.keys(e.springs)).map((v) => e.springs[v].start(t)), m = t.cancel === !0 || lE(t, "cancel") === !0;
  (c || m && f.asyncId) && d.push(uE(++e._lastAsyncId, { props: t, state: f, actions: { pause: Th, resume: Th, start(v, w) {
    m ? (Na(f, e._lastAsyncId), w(yi(e))) : (v.onRest = a, w(fE(c, v, f, e)));
  } } })), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  let h = r0(e, await Promise.all(d));
  if (l && h.finished && !(n && h.noop)) {
    let v = pE(t, l, o);
    if (v)
      return yE(e, [v]), hE(e, v, !0);
  }
  return s && ie.batchedUpdates(() => s(h, e, e.item)), h;
}
function wx(e, t) {
  let n = { ...e.springs };
  return t && me(Pt(t), (r) => {
    H.und(r.keys) && (r = Ma(r)), H.obj(r.to) || (r = { ...r, to: void 0 }), vE(n, r, (o) => gE(o));
  }), mE(e, n), n;
}
function mE(e, t) {
  An(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, Hi(n, e));
  });
}
function gE(e, t) {
  let n = new fB();
  return n.key = e, t && Hi(n, t), n;
}
function vE(e, t, n) {
  t.keys && me(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function yE(e, t) {
  me(t, (n) => {
    vE(e.springs, n, (r) => gE(r, e));
  });
}
var af = ({ children: e, ...t }) => {
  let n = g.exports.useContext(lc), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = Wz(() => ({ pause: r, immediate: o }), [r, o]);
  let { Provider: i } = lc;
  return g.exports.createElement(i, { value: t }, e);
}, lc = vB(af, {});
af.Provider = lc.Provider;
af.Consumer = lc.Consumer;
function vB(e, t) {
  return Object.assign(e, g.exports.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var yB = () => {
  let e = [], t = function(r) {
    Uz();
    let o = [];
    return me(e, (i, l) => {
      if (H.und(r))
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
      let l = H.fun(r) ? r(i, o) : r;
      l && o.set(l);
    });
  }, t.start = function(r) {
    let o = [];
    return me(e, (i, l) => {
      if (H.und(r))
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
    return H.fun(r) ? r(i, o) : r;
  };
  return t._getProps = n, t;
};
function xB(e, t, n) {
  let r = H.fun(t) && t;
  r && !n && (n = []);
  let o = g.exports.useMemo(() => r || arguments.length == 3 ? yB() : void 0, []), i = g.exports.useRef(0), l = tE(), a = g.exports.useMemo(() => ({ ctrls: [], queue: [], flush(p, y) {
    let x = wx(p, y);
    return i.current > 0 && !a.queue.length && !Object.keys(x).some((b) => !p.springs[b]) ? zh(p, y) : new Promise((b) => {
      mE(p, x), a.queue.push(() => {
        b(zh(p, y));
      }), l();
    });
  } }), []), s = g.exports.useRef([...a.ctrls]), u = [], c = sx(e) || 0;
  g.exports.useMemo(() => {
    me(s.current.slice(e, c), (p) => {
      iB(p, o), p.stop(!0);
    }), s.current.length = e, f(c, e);
  }, [e]), g.exports.useMemo(() => {
    f(0, Math.min(c, e));
  }, n);
  function f(p, y) {
    for (let x = p; x < y; x++) {
      let b = s.current[x] || (s.current[x] = new gB(null, a.flush)), A = r ? r(x, b) : t[x];
      A && (u[x] = dB(A));
    }
  }
  let d = s.current.map((p, y) => wx(p, u[y])), m = g.exports.useContext(af), h = sx(m), v = m !== h && oB(m);
  e0(() => {
    i.current++, a.ctrls = s.current;
    let { queue: p } = a;
    p.length && (a.queue = [], me(p, (y) => y())), me(s.current, (y, x) => {
      o == null || o.add(y), v && y.start({ default: m });
      let b = u[x];
      b && (lB(y, b.ref), y.ref ? y.queue.push(b) : y.start(b));
    });
  }), nE(() => () => {
    me(a.ctrls, (p) => p.stop(!0));
  });
  let w = d.map((p) => ({ ...p }));
  return o ? [w, o] : w;
}
function wB(e, t) {
  let n = H.fun(e), [[r], o] = xB(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, o] : r;
}
var bB = class extends o0 {
  constructor(t, n) {
    super();
    K(this, "key");
    K(this, "idle", !0);
    K(this, "calc");
    K(this, "_active", /* @__PURE__ */ new Set());
    this.source = t, this.calc = Pa(...n);
    let r = this._get(), o = Oh(r);
    t0(this, o.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Dn(n, r) || (wn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && bx(this._active) && Md(this);
  }
  _get() {
    let t = H.arr(this.source) ? this.source.map(yt) : Pt(yt(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !bx(this._active) && (this.idle = !1, me(of(this), (t) => {
      t.done = !1;
    }), pn.skipAnimation ? (ie.batchedUpdates(() => this.advance()), Md(this)) : ef.start(this));
  }
  _attach() {
    let t = 1;
    me(Pt(this.source), (n) => {
      Bt(n) && Hi(n, this), Fh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    me(Pt(this.source), (t) => {
      Bt(t) && Ra(t, this);
    }), this._active.clear(), Md(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Pt(this.source).reduce((n, r) => Math.max(n, (Fh(r) ? r.priority : 0) + 1), 0));
  }
};
function SB(e) {
  return e.idle !== !1;
}
function bx(e) {
  return !e.size || Array.from(e).every(SB);
}
function Md(e) {
  e.idle || (e.idle = !0, me(of(e), (t) => {
    t.done = !0;
  }), _a(e, { type: "idle", parent: e }));
}
pn.assign({ createStringInterpolator: J2, to: (e, t) => new bB(e, t) });
var xE = /^--/;
function kB(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !xE.test(e) && !(Wl.hasOwnProperty(e) && Wl[e]) ? t + "px" : ("" + t).trim();
}
var Sx = {};
function CB(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  let n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: l, viewBox: a, ...s } = t, u = Object.values(s), c = Object.keys(s).map((f) => n || e.hasAttribute(f) ? f : Sx[f] || (Sx[f] = f.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  o !== void 0 && (e.textContent = o);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let d = kB(f, r[f]);
      xE.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }), i !== void 0 && (e.scrollTop = i), l !== void 0 && (e.scrollLeft = l), a !== void 0 && e.setAttribute("viewBox", a);
}
var Wl = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, EB = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), $B = ["Webkit", "Ms", "Moz", "O"];
Wl = Object.keys(Wl).reduce((e, t) => ($B.forEach((n) => e[EB(n, t)] = e[t]), e), Wl);
var AB = /^(matrix|translate|scale|rotate|skew)/, PB = /^(translate)/, _B = /^(rotate|skew)/, Fd = (e, t) => H.num(e) && e !== 0 ? e + t : e, ru = (e, t) => H.arr(e) ? e.every((n) => ru(n, t)) : H.num(e) ? e === t : parseFloat(e) === t, RB = class extends lf {
  constructor({ x: e, y: t, z: n, ...r }) {
    let o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((l) => [`translate3d(${l.map((a) => Fd(a, "px")).join(",")})`, ru(l, 0)])), An(r, (l, a) => {
      if (a === "transform")
        o.push([l || ""]), i.push((s) => [s, s === ""]);
      else if (AB.test(a)) {
        if (delete r[a], H.und(l))
          return;
        let s = PB.test(a) ? "px" : _B.test(a) ? "deg" : "";
        o.push(Pt(l)), i.push(a === "rotate3d" ? ([u, c, f, d]) => [`rotate3d(${u},${c},${f},${Fd(d, s)})`, ru(d, 0)] : (u) => [`${a}(${u.map((c) => Fd(c, s)).join(",")})`, ru(u, a.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (r.transform = new TB(o, i)), super(r);
  }
}, TB = class extends Y2 {
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
      let i = yt(r[0]), [l, a] = this.transforms[o](H.arr(i) ? i : r.map(yt));
      t += " " + l, n = n && a;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && me(this.inputs, (n) => me(n, (r) => Bt(r) && Hi(r, this)));
  }
  observerRemoved(t) {
    t == 0 && me(this.inputs, (n) => me(n, (r) => Bt(r) && Ra(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), _a(this, t);
  }
}, IB = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
pn.assign({ batchedUpdates: hn.exports.unstable_batchedUpdates, createStringInterpolator: J2, colors: wz });
var OB = Jz(IB, { applyAnimatedValues: CB, createAnimatedStyle: (e) => new RB(e), getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n }), NB = OB.animated;
const MB = ({
  message: e
}) => /* @__PURE__ */ fe("div", {
  className: Ti("flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100", {
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
}), FB = () => {
  const {
    toggleChatOpen: e,
    chatOpen: t
  } = qu(), {
    conventions: n
  } = $a(), [r, o] = g.exports.useState(null), i = wB({
    h: t ? 600 : 0,
    w: t ? 500 : 150,
    opacity: t ? 1 : 0,
    config: sE.default
  });
  console.log(n);
  const l = Object.keys(n), a = r || l[0], s = a ? n[a] : [];
  return /* @__PURE__ */ fe("div", {
    className: "aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg",
    children: [/* @__PURE__ */ fe("div", {
      onClick: () => {
        e();
      },
      className: Ti("flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400", {
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
    }), /* @__PURE__ */ fe(NB.div, {
      style: {
        height: i.h,
        opacity: i.opacity,
        width: i.w
      },
      className: "flex",
      children: [/* @__PURE__ */ B("div", {
        className: "grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold",
        children: l.map((u) => /* @__PURE__ */ B("div", {
          className: Ti("flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200", {
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
        children: s.map((u, c) => /* @__PURE__ */ B(MB, {
          message: u
        }, c))
      })]
    })]
  });
}, DB = () => /* @__PURE__ */ fe("div", {
  className: "dark",
  children: [/* @__PURE__ */ B(rz, {}), /* @__PURE__ */ B(FB, {})]
});
var wE, kx = hn.exports;
wE = kx.createRoot, kx.hydrateRoot;
(() => {
  var i;
  console.info("[aiflow] Hello world from content script"), Vh("tab-prev", ({
    data: l
  }) => {
    console.log(`[aiflow] Navigate from page "${l.title}"`);
  });
  const e = document.createElement("div"), t = document.createElement("div");
  e.className = "aiflow", e.id = "aiflow";
  const n = document.createElement("link"), r = ((i = e.attachShadow) == null ? void 0 : i.call(e, {
    mode: "closed"
  })) || e;
  n.setAttribute("rel", "stylesheet"), n.setAttribute("href", it.runtime.getURL("dist/contentScripts/style.css")), r.appendChild(n), r.appendChild(t), document.body.appendChild(e), wE(t).render(/* @__PURE__ */ B(DB, {}));
})();
